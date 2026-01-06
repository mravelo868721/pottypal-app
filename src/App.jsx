import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SuccessCard from './components/SuccessCard'

function App() {
    const [screen, setScreen] = useState('')
    const [success, setSuccess] = useState('')

    //Timer
    const [seconds, setSeconds] = useState(30 * 60) // 1800 seconds = 30 minutes
    const intervalRef = useRef(null)

    const startTimer = () => {
        if (intervalRef.current) return // Prevents starting another timer

        intervalRef.current = setInterval(() => {
            // Creates the interval
            setSeconds((prev) => {
                // Updates state of seconds safely
                if (prev <= 1) {
                    // Guarantees working with latest value and also prevents going past 0 seconds
                    clearInterval(intervalRef.current) // Clears interval and stops ticking
                    intervalRef.current = null // Allows resetting of timer
                    return 0 // Returns state to 0
                }
                return prev - 1 // if above 1 second subtract 1, re-render, wait for next tick
            })
        }, 1000) // Ticks every 1 sec (1000ms)
    }

    const stopTimer = () => {
        clearInterval(intervalRef.current)
        intervalRef.current = null
        setSeconds(30 * 60)
    }

    // Clean up when the component unmounts. Prevents memory leaks if screens change
    useEffect(() => {
        return () => clearInterval(intervalRef.current)
    }, [])

    //Turn seconds into MM:SS
    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60)
        const secs = totalSeconds % 60
        return `${minutes}:${secs.toString().padStart(2, '0')}`
    }

    return (
        <div className="flex flex-col p-4 mx-auto mt-4 max-w-99 bg-white rounded-[20px]">
            <h1 className="text-2xl font-bold my-4 mx-auto">
                PottyPal Tracker
            </h1>
            {/* Navigation */}
            <div className="flex gap-1 h-16 my-5">
                <button
                    className="navigation-button flex-1 bg-purple-200 
                hover:bg-purple-300
                hover:text-purple-700
                hover:border-b-4 
                hover:border-purple-500"
                >
                    Log
                </button>
                <button className="navigation-button flex-1 bg-purple-100 hover:bg-pottypalcherry-300 hover:text-white">
                    History
                </button>
                <button className="navigation-button flex-1 bg-purple-100 hover:bg-pottypalcherry-300 hover:text-white">
                    Insights
                </button>
            </div>
            {/* Timer */}
            <div className="timer-card grid grid-cols-2 grid-rows-2 items-center rounded-[20px] bg-purple-100 p-6">
                <div className="timer-countdown flex flex-col">
                    <span className="font-bold text-[40px]">
                        {formatTime(seconds)}
                    </span>
                    <span className="text-xs">30 Minute Timer Set</span>
                </div>
                <div className="flex justify-end gap-1">
                    {/* play button */}
                    <button
                        onClick={startTimer}
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
                    <button className="text-sm bg-white rounded-4xl p-1 cursor-pointer">
                        +1 Min
                    </button>
                    <button className="text-sm bg-white rounded-4xl p-1 cursor-pointer">
                        +5 Min
                    </button>
                    <button className="text-sm bg-white rounded-4xl p-1 cursor-pointer">
                        +10 Min
                    </button>
                </div>
            </div>
            {/* Type section */}
            <div className="type-section">
                <h2 className="font-bold my-2">Type</h2>
                <div className="type-card grid grid-cols-2 grid-rows-2 rounded-[20px] bg-gray-200 p-6 gap-2  ">
                    <button className="py-3 text-white bg-pottypalcherry-400 rounded-2xl">
                        Pee
                    </button>
                    <button className="py-3 text-white bg-pottypalcherry-400 rounded-2xl">
                        Poop
                    </button>
                    <button className="py-3 text-white bg-pottypalcherry-400 rounded-2xl">
                        Accident
                    </button>
                    <button className="py-3 text-white bg-pottypalcherry-400 rounded-2xl">
                        Try
                    </button>
                </div>
            </div>
            {/* Location section */}
            <div className="location-section">
                <h2 className="font-bold my-2">Location</h2>
                <div className="location-card grid grid-cols-2 grid-rows-3 rounded-[20px] bg-gray-200 p-6 gap-2">
                    <button className="py-3 text-white bg-pottypalcherry-400 rounded-2xl">
                        Potty
                    </button>
                    <button className="py-3 text-white bg-pottypalcherry-400 rounded-2xl">
                        Toilet
                    </button>
                    <button className="py-3 text-white bg-pottypalcherry-400 rounded-2xl">
                        Diaper
                    </button>
                    <button className="py-3 text-white bg-pottypalcherry-400 rounded-2xl">
                        Underwear
                    </button>
                    <button className="py-3 text-white bg-pottypalcherry-400 rounded-2xl grid col-span-2">
                        Other
                    </button>
                </div>
            </div>
            {/* Success section */}
            <SuccessCard />
        </div>
    )
}

export default App
