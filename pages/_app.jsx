import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";

import "../styles/tokens.css";
import "../styles/base.css";
import "../styles/components.css";

import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/home.css";
import "../styles/about.css";
import "../styles/contact.css";
import "../styles/page.css";
import "../styles/footer.css";

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
    subsets: ["latin"],
    weight: ["400", "900"],
    display: "swap",
    variable: "--font-orbitron",
});

export default function App({ Component, pageProps }) {
    const router = useRouter();
    const [theme, setTheme] = useState("dark");
    const [mounted, setMounted] = useState(false);

    // Inicializar tema na primeira renderização do cliente
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme") || "dark";
            setTheme(savedTheme);
            document.documentElement.setAttribute("data-theme", savedTheme);
            setMounted(true);
        }
    }, []);

    // Analytics
    useEffect(() => {
        if (typeof window !== "undefined" && window.gtag)
            window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
                page_path: window.location.pathname,
                debug_mode: true,
            });
    }, []);

    useEffect(() => {
        const handleRouteChange = (url) => {
            if (typeof window !== "undefined" && window.gtag)
                window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
                    page_path: url,
                });
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () =>
            router.events.off("routeChangeComplete", handleRouteChange);
    }, [router.events]);

    const toggleTheme = () => {
        if (typeof window !== "undefined") {
            const newTheme = theme === "dark" ? "light" : "dark";
            setTheme(newTheme);
            localStorage.setItem("theme", newTheme);
            document.documentElement.setAttribute("data-theme", newTheme);
        }
    };

    // Evita flash ao montar se tema for light
    if (!mounted) {
        return (
            <div className={orbitron.variable}>
                <Head>
                    <title>KSM Tech</title>
                </Head>
            </div>
        );
    }

    return (
        <div className={orbitron.variable}>
            <Head>
                <title>KSM Tech</title>
            </Head>
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <Component {...pageProps} />
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        </div>
    );
}
