const ForecastData = ({ data }) => {
    if (! data) {
        return null;
    }

    return (
        <table className="w-full table-auto">
            <thead className="border-b font-medium">
                <tr>
                    <th scope="col" className="text-left px-6 py-4">Datetime</th>
                    <th scope="col" className="text-right px-6 py-4">Min temp</th>
                    <th scope="col" className="text-right px-6 py-4">Max temp</th>
                    <th scope="col" className="text-right px-6 py-4">Wind speed</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item, i) => (
                    <tr key={i} className="border-b">
                        <td className="text-left px-6 py-4">{item.timestamp_dt}</td>
                        <td className="text-right px-6 py-4">{item.min_tmp}{'\u00b0'}C</td>
                        <td className="text-right px-6 py-4">{item.max_tmp}{'\u00b0'}C</td>
                        <td className="text-right px-6 py-4">{item.wind_spd} km/h</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ForecastData;
