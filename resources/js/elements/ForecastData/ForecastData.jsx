const ForecastData = ({ data }) => {
    if (! data) {
        return null;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Datetime</th>
                    <th>Min temp</th>
                    <th>Max temp</th>
                    <th>Wind speed</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item, i) => (
                    <tr key={i}>
                        <td>{item.timestamp_dt}</td>
                        <td>{item.min_tmp}</td>
                        <td>{item.max_tmp}</td>
                        <td>{item.wind_spd}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ForecastData;
