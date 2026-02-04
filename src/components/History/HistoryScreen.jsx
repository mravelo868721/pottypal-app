/* This screen takes the events */

export default function HistoryScreen({ events }) {
    return (
        <div>
            <h2 className="text-lg font-bold mb-4">History</h2>

            {events.length === 0 ? (
                <p className="text-sm text-gray-500">No events yet.</p>
            ) : (
                <ul className="flex flex-col gap-2">
                    {events.map((e) => (
                        <li
                            key={e.id}
                            className="flex p-3 rounded-xl bg-gray-100"
                        >
                            {/* Event info */}
                            <div className="flex-col flex-4">
                                <div className="font-bold">{e.type}</div>
                                <div className="text-sm">
                                    {e.location} • {String(e.success)}
                                </div>
                                <div className="text-xs text-gray-500">
                                    {new Date(e.timestamp).toLocaleString()}
                                </div>
                            </div>
                            <button className="flex items-center justify-center bg-amber-400 w-12 h-12 rounded-full mx-1">
                                edit
                            </button>
                            <div className="flex items-center justify-center bg-amber-600 w-12 h-12 rounded-full mx-1">
                                del
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
