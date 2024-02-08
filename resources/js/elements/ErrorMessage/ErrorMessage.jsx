const ErrorMessage = ({ error }) => {
    if (!error) {
        return null;
    }

    return (
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
            <span className="font-medium">Error! </span>{error}
        </div>
    )
}

export default ErrorMessage;
