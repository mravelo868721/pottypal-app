import { useState } from 'react'

export default function SuccessModule() {
    // States
    const [success, setSuccess] = useState(null) // true | false

    // Buttons
    const baseBtn =
        'py-3 rounded-2xl cursor-pointer transition-all duration-100'
    const activeBtn = 'bg-purple-400 text-white shadow-none'
    const inactiveBtn =
        'bg-white text-purple-800 shadow-sm hover:bg-purple-400 hover:text-white'

    // Options
    const options = ['Yes', 'No']

    return (
        <div>
            <h2 className="font-bold my-2">Successful?</h2>
            <div className="success-card grid grid-cols-2 grid-rows-1 rounded-[20px] bg-gray-200 p-6 gap-2">
                {options.map((option) => (
                    <button
                        key={option}
                        className={`${baseBtn} ${success === option ? activeBtn : inactiveBtn}`}
                        onClick={() => setSuccess(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    )
}
