"use client"
import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = isActive ? setInterval(() => setTime((t) => t + 1), 1000) : null;
        return () => clearInterval(interval);
    }, [isActive]);

    const formatTime = (timeInSeconds) => {
        const hours = String(Math.floor(timeInSeconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((timeInSeconds % 3600) / 60)).padStart(2, '0');
        const seconds = String(timeInSeconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };
    return (
        <div className="stopwatch-container">
            <h1 className="stopwatch-title">Stopwatch</h1>
            <div className="time-display">
                {formatTime(time)}
            </div>
            <div className="buttons-container">
                <button className="stopwatch-button start" onClick={() => setIsActive(true)}>Start</button>
                <button className="stopwatch-button stop" onClick={() => setIsActive(false)}>Stop</button>
                <button className="stopwatch-button reset" onClick={() => { setIsActive(false); setTime(0); }}>Restart</button>
            </div>
        </div>
    );
};


export default Stopwatch;
