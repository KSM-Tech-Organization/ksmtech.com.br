import { useState, useEffect } from "react";
import Navbar from "../components/navbar";

export default function Home() {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length < 3 ? prev + "." : ""));
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="hero">
                <Navbar />
                <div className="hero__card">
                    <div className="hero__logoWrap">
                        <img
                            src="/LOGO_2.webp"
                            alt="KSM Tech Logo"
                            className="logo"
                        />
                    </div>

                    <h1 className="hero__title">KSM TECH</h1>

                    <p className="hero__subtitle">
                        Your gateway to tech solutions.
                    </p>

                    <hr className="hero__divider" />

                    <h2 className="hero__status">In construction{dots}</h2>

                    <a className="hero__link" href="/about">
                        Sobre Nós
                    </a>
                </div>

                <footer className="hero__footer">
                    © 2025 KSM Tech. All rights reserved.
                </footer>
            </div>
        </>
    );
}
