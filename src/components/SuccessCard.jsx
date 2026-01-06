function SuccessCard({ successStatus, onChange }) {
    const baseBtn = 'py-3 rounded-2xl border transition-colors' //Neutral button

    const getClasses = (target) => {
        if (successStatus === target)
            return `${baseBtn} bg-pottypalcherry-400 text-white border-pottypalcherry-400`
        if (successStatus == null)
            return `${baseBtn} bg-gray-200 text-gray-700 border-gray-300`
        return `${baseBtn} bg-gray-100 text-gray-700 border-gray-200`
    }

    return (
        <div>
            <h2 className="font-bold my-2">Successful?</h2>
            <div className="success-card grid grid-cols-2 grid-rows-1 rounded-[20px] bg-gray-200 p-6 gap-2">
                <button
                    type="button"
                    className={getClasses(true)}
                    onClick={() => onChange(true)}
                    aria-pressed={successStatus === true}
                >
                    Yes
                </button>
                <button
                    type="button"
                    className={getClasses(false)}
                    onClick={() => onChange(false)}
                    aria-press={successStatus === false}
                >
                    No
                </button>
            </div>
        </div>
    )
}

export default SuccessCard
