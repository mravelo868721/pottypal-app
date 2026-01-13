import { useState } from 'react'
import './App.css'
import logo from './assets/potty-pal-logo.svg'

import TimerModule from './components/TimerModule'
import TypeModule from './components/TypeModule'
import LocationModule from './components/LocationModule'
import SuccessModule from './components/SuccessModule'

function App() {
    const [screen, setScreen] = useState('')
    const [type, setType] = useState(null) // Pee | Poop | Accident | Try
    const [location, setLocation] = useState(null) // Potty | Toilet | Diaper | Underwear | *Other
    const [success, setSuccess] = useState(null) // Yes | No

    // Need to log values: type, location, success, time of day
    const handleLog = () => {
        const entry = {
            type,
            location,
            success,
            timestamp: new Date().toISOString(),
        }
        console.log('LOG ENTRY', entry)
    }
    // Check all entries are filled
    const canLog = type && location && success

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
            <TimerModule />
            <TypeModule value={type} onChange={setType} />
            <LocationModule value={location} onChange={setLocation} />
            <SuccessModule value={success} onChange={setSuccess} />
            <button
                className={`font-bold text-white mt-4 py-6 rounded-2xl cursor-pointer transition-all duration-100 ${canLog ? 'bg-purple-900 cursor-pointer' : 'bg-gray-300 cursor-not-allowed opacity-60'}`}
                onClick={handleLog}
                disabled={!canLog}
            >
                Log New Potty Event
            </button>
            {!canLog && (
                <p className="text-xs text-center mt-2">
                    Please select type, location, and success to log an event.
                </p>
            )}
        </div>
    )
}

export default App
