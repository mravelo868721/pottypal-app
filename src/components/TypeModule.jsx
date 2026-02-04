export default function TypeModule({ value, onChange }) {
    // Buttons
    const baseBtn =
        'py-3 rounded-2xl cursor-pointer transition-all duration-100'
    const activeBtn = 'bg-purple-400 text-white shadow-none'
    const inactiveBtn =
        'bg-white text-purple-800 shadow-sm hover:bg-purple-400 hover:text-white'

    // Options
    const options = ['Pee', 'Poop', 'Accident', 'Try']

    return (
        <div className="type-section">
            <h2 className="font-bold my-2">Type</h2>
            <div className="type-card grid grid-cols-2 grid-rows-2 rounded-[20px] bg-gray-200 p-6 gap-2  ">
                {options.map((option) => (
                    <button
                        key={option}
                        className={`${baseBtn} ${value === option ? activeBtn : inactiveBtn}`}
                        onClick={() => onChange(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    )
}
