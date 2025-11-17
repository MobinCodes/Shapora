"use client";

import { useEffect, useState } from "react";

export default function DealTimer({ endDate }) {
    const [timeLeft, setTimeLeft] = useState(null); // null = هنوز کلاینت نیست

    const calculateTimeLeft = (now) => {
        const difference = new Date(endDate) - now;

        if (difference <= 0) {
            return { expired: true };
        }

        return {
            expired: false,
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    useEffect(() => {
        const update = () => setTimeLeft(calculateTimeLeft(Date.now()));
        update(); 

        const timer = setInterval(update, 1000);

        return () => clearInterval(timer);
    }, [endDate]);

    if (timeLeft === null) {
        return (
            <div className="bg-white shadow-sm rounded-md w-full text-red-500 text-sm flex justify-center py-1.5 gap-1">
                <span>--D :</span>
                <span>--H :</span>
                <span>--M :</span>
                <span>--S</span>
            </div>
        );
    }

    if (timeLeft.expired) {
        return (
            <div className="text-red-600 font-bold">
                Deal Expired
            </div>
        );
    }

    return (
        <div className="bg-white shadow-sm rounded-md w-full text-red-500 text-sm flex justify-center py-1.5 gap-1">
            <span>{timeLeft.days}D :</span>
            <span>{timeLeft.hours}H :</span>
            <span>{timeLeft.minutes}M :</span>
            <span>{timeLeft.seconds}S</span>
        </div>
    );
}
