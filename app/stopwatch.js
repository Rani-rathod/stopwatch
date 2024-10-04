const Stopwatch = () => {
    return (
        <div className="stopwatch-container">
            <h1 className="stopwatch-title">Stopwatch</h1>
            <div className="time-display">
                00:00:00
            </div>
            <div className="buttons-container">
                <button className="stopwatch-button start">Start</button>
                <button className="stopwatch-button stop">Stop</button>
                <button className="stopwatch-button reset">Restart</button>
            </div>
        </div>
    );
};
export default Stopwatch;

