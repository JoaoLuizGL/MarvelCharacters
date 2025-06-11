type ErrorProps = {
    message?: string;
}

const Error= (e: ErrorProps) => {
    return (
        <div>
            <h1>{e.message}</h1>
        </div>
    );
};

export default Error;