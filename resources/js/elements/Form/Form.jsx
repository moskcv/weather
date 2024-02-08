import { useState } from "react";

const Form = ({ onApiSearch, onDatabaseSearch }) => {
    const [city, setCity] = useState('');

    return (
        <div className="border-b px-4 py-6 mb-4 flex items-center justify-between gap-4">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="rounded-md w-full"
                placeholder="Enter city name here (e.g New York)"
            />
            <div className="flex items-center justify-between gap-4">
                <button type="button" onClick={() => onApiSearch(city)} className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get from API</button>
                <button type="button" onClick={() => onDatabaseSearch(city)} className="inline-flex items-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Get from Database</button>
            </div>
        </div>
    )
}

export default Form;
