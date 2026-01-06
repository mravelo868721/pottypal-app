function SuccessCard() {
    return (
        <div>
            <h2 className="font-bold my-2">Successful?</h2>
            <div className="success-card grid grid-cols-2 grid-rows-1 rounded-[20px] bg-gray-200 p-6 gap-2">
                <button className="py-3 text-white bg-pottypalcherry-400 rounded-2xl">
                    Yes
                </button>
                <button className="py-3 text-white bg-pottypalcherry-400 rounded-2xl">
                    No
                </button>
            </div>
        </div>
    )
}

export default SuccessCard
