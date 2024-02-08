const CityBlock = ({ city, updated, periodFrom, periodTo, saveForecast }) => {
    return (
        <div>
            <h1>{city}</h1>
            {updated && (
                <p>Updated at: {updated}</p>
            )}
            {periodFrom && periodTo && (
                <>
                    <p>From: {periodFrom}</p>
                    <p>To: {periodTo}</p>
                    <button onClick={saveForecast}>Save forecast</button>
                </>
            )}
        </div>
    );
}

export default CityBlock;
