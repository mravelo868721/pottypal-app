import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [screen, setScreen] = useState('')

    const [seconds, setSeconds] = useState(30 * 60)
    const intervalRef = useRef(null)

    const startTimer = () => {
        if (intervalRef.current) return // prevent double intervals
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
            <div className="timer-card flex  justify-between items-center rounded-[20px] bg-purple-100 p-6">
                <div className="timer-countdown flex flex-col">
                    <span className="font-bold text-[40px]">29:43</span>
                    <span className="text-xs">30 Minute Timer Set</span>
                </div>
                <div className="flex gap-1">
                    {/* play button */}
                    <button className="flex justify-center items-center w-12 h-12 rounded-[9999px] text-white bg-purple-500">
                        ▶︎
                    </button>
                    {/* close button */}
                    <button className="flex justify-center items-center w-12 h-12 rounded-[9999px] text-white bg-purple-300">
                        ✖
                    </button>
                </div>
            </div>
            {/* Type section */}
            <div className="type-section">
                <h2 className="font-bold my-2">Type</h2>
                <div className="type-card flex flex-col rounded-[20px] bg-gray-200 p-6 gap-2  ">
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
            <div className="location-section">
                <h2 className="font-bold my-2">Location</h2>
                <div className="type-card grid grid-cols-2 grid-rows-3 rounded-[20px] bg-gray-200 p-6 gap-2">
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
        </div>
    )
}

export default App
