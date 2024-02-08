const CityBlock = ({ city, updated, periodFrom, periodTo, saveForecast }) => {
    return (
        <div className="flex flex-col items-start gap-4 px-4 py-6 border rounded-md mb-4">
            <h1 className="text-4xl font-bold">{city}</h1>
            {updated && (
                <p><b>Updated at:</b> {updated}</p>
            )}
            {periodFrom && periodTo && (
                <>
                    <p>From: {periodFrom}</p>
                    <p>To: {periodTo}</p>
                    <button onClick={saveForecast} type="button" className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Save forecast</button>
                </>
            )}
        </div>
    );
}

export default CityBlock;
