import { useState, useEffect } from "react";

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
            <div
                style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    fontFamily: "Arial, sans-serif",
                    textAlign: "center",
                    minHeight: "100vh",
                    paddingTop: "80px",
                }}
            >
                <div style={{ marginBottom: "40px" }}>
                    <img
                        src="/LOGO_2.webp"
                        alt="KSM Tech Logo"
                        style={{
                            width: "180px",
                            height: "auto",
                            // filter: "drop-shadow(0 0 10px #00ff66)",
                        }}
                    />
                </div>

                <h1 style={{ fontSize: "2.5rem", color: "#00ff66" }}>
                    KSM TECH
                </h1>

                <p style={{ color: "#ccc", fontSize: "1.2rem" }}>
                    Your gateway to tech solutions.
                </p>

                <hr
                    style={{
                        width: "60%",
                        margin: "40px auto",
                        border: "none",
                        borderTop: "2px solid #00ff66",
                    }}
                />

                <h2 style={{ color: "#aaa" }}>In construction{dots}</h2>

                <footer
                    style={{
                        position: "absolute",
                        bottom: "20px",
                        width: "100%",
                        textAlign: "center",
                        color: "#444",
                        fontSize: "0.9rem",
                    }}
                >
                    © 2025 KSM Tech. All rights reserved.
                </footer>
            </div>
        </>
    );
}
