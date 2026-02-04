import { useEffect, useRef, useState } from 'react'
import alarmSound from '../assets/timer-alarm.mp3'

export default function TimerModule({
    initialSeconds = 0,
    onTick,
    onFinish,
    onReset,
}) {
    const intervalRef = useRef(null) // Creates { current: undefined }

    // Alarm sound
    const alarmRef = useRef(new Audio(alarmSound))
    const playAlarm = () => {
        const audio = alarmRef.current
        if (!audio) return
        audio.currentTime = 0
        audio.play().catch(() => {}) // ignore autoplay block errors
    }

    // Converts minutes into total seconds i.e. 30 minutes = 1800 seconds
    const addMinutes = (minutes) => {
        if (intervalRef.current) return // Prevents changes while running
        setSeconds((prev) => prev + minutes * 60)
    }

    const [seconds, setSeconds] = useState(initialSeconds)
    const [startSeconds, setStartSeconds] = useState(null)
    const [isRunning, setIsRunning] = useState(false)

    // Clean up when the component unmounts. Prevents memory leaks if screens change
    useEffect(() => {
        return () => {
            clearInterval(intervalRef.current)
            alarmRef.current?.pause()
        }
    }, [])

    // Start Timer
    const startTimer = () => {
        if (intervalRef.current || seconds <= 0) return
        setStartSeconds(seconds)
        setIsRunning(true)
        intervalRef.current = setInterval(() => {
            setSeconds((prev) => {
                const next = prev - 1
                if (next <= 0) {
                    clearInterval(intervalRef.current)
                    intervalRef.current = null
                    setIsRunning(false)
                    setStartSeconds(null)
                    playAlarm()
                    onFinish?.()
                    return 0
                }
                onTick?.(next)
                return next
            })
        }, 1000)
    }

    // Stop Timer
    const stopTimer = () => {
        clearInterval(intervalRef.current)
        intervalRef.current = null
        setSeconds(initialSeconds)
        setIsRunning(false)
        setStartSeconds(null)
        onReset?.()
    }

    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60)
        const secs = totalSeconds % 60
        return `${minutes}:${secs.toString().padStart(2, '0')}`
    }

    const formatMinutes = (totalSeconds) => Math.round(totalSeconds / 60)

    const primeAlarm = () =>
        alarmRef.current?.play().then(() => alarmRef.current?.pause())

    return (
        <div className="timer-card grid grid-cols-2 grid-rows-2 items-center rounded-[20px] bg-purple-100 p-6">
            <div className="timer-countdown flex flex-col">
                <span className="font-bold text-[40px]">
                    {formatTime(seconds)}
                </span>
                {/* Should only appear when Play button is pressed */}
                {isRunning && startSeconds !== null ? (
                    <span className="text-xs">
                        {formatMinutes(startSeconds)} Minute Timer Set
                    </span>
                ) : null}
            </div>
            <div className="flex justify-end gap-1">
                {/* play button */}

                <button
                    onClick={() => {
                        primeAlarm()
                        startTimer()
                    }}
                    className="flex justify-center items-center w-12 h-12 rounded-[9999px] text-white bg-purple-500 cursor-pointer"
                >
                    ▶︎
                </button>
                {/* close button */}
                <button
                    onClick={stopTimer}
                    className="flex justify-center items-center w-12 h-12 rounded-[9999px] text-white bg-purple-300 cursor-pointer"
                >
                    ✖
                </button>
            </div>
            <div className="col-span-2 grid gap-2 grid-cols-3 grid-rows-1">
                <button
                    onClick={() => addMinutes(1)}
                    className="text-sm bg-white rounded-4xl p-1 cursor-pointer"
                >
                    +1 Min
                </button>
                <button
                    onClick={() => addMinutes(5)}
                    className="text-sm bg-white rounded-4xl p-1 cursor-pointer"
                >
                    +5 Min
                </button>
                <button
                    onClick={() => addMinutes(10)}
                    className="text-sm bg-white rounded-4xl p-1 cursor-pointer"
                >
                    +10 Min
                </button>
            </div>
        </div>
    )
}
