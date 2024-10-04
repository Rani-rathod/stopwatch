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


export default Stopwatch;


