import { useState } from 'react'

export default function LocationModule() {
    //States
    const [location, setLocation] = useState(null) // Potty | Toilet | Diaper | Underwear | *Other

    // Buttons
    const baseBtn =
        'py-3 rounded-2xl cursor-pointer transition-all duration-100'
    const activeBtn = 'bg-purple-400 text-white shadow-none'
    const inactiveBtn =
        'bg-white text-purple-800 shadow-sm hover:bg-purple-400 hover:text-white'

    // Options
    const options = ['Potty', 'Toilet', 'Diaper', 'Underwear', 'Other']

    return (
        <div className="location-section">
            <h2 className="font-bold my-2">Location</h2>
            <div className="location-card grid grid-cols-2 grid-rows-3 rounded-[20px] bg-gray-200 p-6 gap-2">
                {options.map((option) => (
                    <button
                        key={option}
                        className={`${baseBtn} ${location === option ? activeBtn : inactiveBtn}`}
                        onClick={() => setLocation(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    )
}
