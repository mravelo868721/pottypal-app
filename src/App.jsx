import { useState } from 'react'
import './App.css'
import logo from './assets/potty-pal-logo.svg'

import Home from './components/Home'
import HistoryScreen from './components/History/HistoryScreen'
import InsightsScreen from './components/Insights/InsightsScreen'

function App() {
    const [screen, setScreen] = useState('')
    // Stores events in one screen to be shared with both Home and History
    const [events, setEvents] = useState([])

    const addEvent = (entry) => {
        setEvents((prev) => [entry, ...prev])
    }

    let content
    if (screen === 'Insights') {
        content = <InsightsScreen />
    } else if (screen === 'History') {
        content = <HistoryScreen events={events} />
    } else {
        content = <Home setScreen={setScreen} addEvent={addEvent} />
    }

    return (
        <div className="flex flex-col p-4 mx-auto mt-4 max-w-99 bg-white rounded-[20px]">
            <img
                src={logo}
                className="w-3xs my-4 mx-auto cursor-pointer"
                onClick={() => setScreen('Home')}
            ></img>
            {/* Navigation */}
            <div className="flex gap-1 h-16 my-5">
                <button
                    className="navigation-button flex-1 bg-purple-200 hover:bg-purple-300 hover:text-purple-700 hover:border-b-4 hover:border-purple-500"
                    onClick={() => setScreen('Home')}
                >
                    Log
                </button>
                <button
                    className="navigation-button flex-1 bg-purple-100 hover:bg-pottypalcherry-300 hover:text-white"
                    onClick={() => setScreen('History')}
                >
                    History
                </button>
                <button
                    className="navigation-button flex-1 bg-purple-100 hover:bg-pottypalcherry-300 hover:text-white"
                    onClick={() => setScreen('Insights')}
                >
                    Insights
                </button>
            </div>
            {content}
        </div>
    )
}

export default App
