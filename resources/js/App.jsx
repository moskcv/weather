import { useState } from "react";
import { CityBlock, ErrorMessage, ForecastData, Form } from "./elements";

const App = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const fetch = (url, city) => {
        setError(null);

        axios.get(url, { params: { city } })
            .then((response) => {
                setResponse(response.data);
            })
            .catch((error) => setError(error?.response?.data?.message || 'Something went wrong'));
    }

    const saveForecast = () => {
        const payload = {
            city: response.city,
            ...response?.data[0],
        }

        axios.post('/api/v1/forecast', payload)
            .then((response) => {

            })
            .catch((error) => setError(error?.response?.data?.message || 'Something went wrong'));
    }

    return (
        <>
            <ErrorMessage error={error} />
            <Form
                onApiSearch={(city) => fetch('/api/v1/forecast/api', city)}
                onDatabaseSearch={(city) => fetch('/api/v1/forecast', city)}
            />
            {response && (
                <CityBlock
                    city={response?.city}
                    updated={response?.updated_at}
                    periodFrom={response?.period_from}
                    periodTo={response?.period_to}
                    saveForecast={saveForecast}
                />
            )}
            <ForecastData data={response?.data} />
        </>
    )
}

export default App;
