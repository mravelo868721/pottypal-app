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
                        <li key={e.id} className="p-3 rounded-xl bg-gray-100">
                            <div className="font-bold">{e.type}</div>
                            <div className="text-sm">
                                {e.location} • {String(e.success)}
                            </div>
                            <div className="text-xs text-gray-500">
                                {new Date(e.timestamp).toLocaleString()}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
