import { useState } from "react";

const Form = ({ onApiSearch, onDatabaseSearch }) => {
    const [city, setCity] = useState('');

    return (
        <div>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <button type="button" onClick={() => onApiSearch(city)}>Get from API</button>
            <button type="button" onClick={() => onDatabaseSearch(city)}>Get from Database</button>
        </div>
    )
}

export default Form;
