import { useState } from 'react'

import TimerModule from '../components/TimerModule'
import TypeModule from '../components/TypeModule'
import LocationModule from '../components/LocationModule'
import SuccessModule from '../components/SuccessModule'

export default function Home({ setScreen, addEvent }) {
    const [type, setType] = useState(null) // Pee | Poop | Accident | Try
    const [location, setLocation] = useState(null) // Potty | Toilet | Diaper | Underwear | *Other
    const [success, setSuccess] = useState(null) // Yes | No

    /* Creating entries: handleLog is a function that creates an entry object. Then we pass that entry through an addEvent function from App.jsx. addEvent() sets the event state to be an array containing the current entry and all previous*/
    const handleLog = () => {
        const entry = {
            id: crypto.randomUUID(),
            type,
            location,
            success,
            timestamp: new Date().toISOString(),
        }
        addEvent(entry)
        console.log('LOG ENTRY', entry)
        setScreen('History')
    }

    // Check all entries are filled
    const canLog = type && location && success

    return (
        <>
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
        </>
    )
}
