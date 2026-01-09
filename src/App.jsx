import { useState } from 'react'

import './App.css'

import logo from './assets/potty-pal-logo.svg'

import TimerModule from './components/TimerModule'
import TypeModule from './components/TypeModule'
import LocationCard from './components/LocationModule'
import SuccessModule from './components/SuccessModule'
import LocationModule from './components/LocationModule'

function App() {
    const [screen, setScreen] = useState('')
    const [success, setSuccess] = useState(null)

    // Need to log values: type, location, success, time of day

    return (
        <div className="flex flex-col p-4 mx-auto mt-4 max-w-99 bg-white rounded-[20px]">
            <img src={logo} className="w-3xs my-4 mx-auto"></img>
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
            <TimerModule />

            {/* Type section */}
            <TypeModule />
            {/* Location section */}
            <LocationModule />
            {/* Success section */}
            <SuccessModule />
            <button className="font-bold text-white bg-purple-900 mt-4 py-6 rounded-2xl cursor-pointer transition-all duration-100">
                Log New Potty Event
            </button>
        </div>
    )
}

export default App
