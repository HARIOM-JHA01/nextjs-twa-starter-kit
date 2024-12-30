"use client";
import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";

export default function Home() {
    useEffect(() => {
        WebApp.ready();
    }, []);

    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold text-center text-blue-300">
                Welcome to Next.Js
            </h1>
            <div className=" p-3 m-2 bg-slate-300 hover:bg-slate-700 hover:text-white hover:font-bold rounded-md ">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <div className=" p-3 m-2 bg-slate-300 hover:bg-slate-700 hover:text-white hover:font-bold rounded-md ">
                <button onClick={() => WebApp.showAlert(`Hello World!`)}>
                    Show Alert
                </button>
            </div>
        </div>
    );
}
