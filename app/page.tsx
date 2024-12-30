"use client";

import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";

const Home: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            WebApp.ready();
        }
    }, []);

    const handleShowAlert = () => {
        WebApp.showAlert("Hello World!");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold text-center text-blue-300">
                Welcome to Next.js
            </h1>
            <div className="p-3 m-2 bg-slate-300 hover:bg-slate-700 hover:text-white hover:font-bold rounded-md">
                <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                    count is {count}
                </button>
            </div>
            <div className="p-3 m-2 bg-slate-300 hover:bg-slate-700 hover:text-white hover:font-bold rounded-md">
                <button onClick={handleShowAlert}>Show Alert</button>
            </div>
        </div>
    );
};

export default Home;
