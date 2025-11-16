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
    const [themeMode, setThemeMode] = useState("auto"); // 'dark' | 'light' | 'auto'
    const [mounted, setMounted] = useState(false);

    // Inicializar modo de tema na primeira renderização do cliente
    useEffect(() => {
        if (typeof window === "undefined") return;

        // Migration: read new key 'themeMode' or fallback to old 'theme'
        const saved = localStorage.getItem("themeMode") || localStorage.getItem("theme");
        const initial = saved === "dark" || saved === "light" || saved === "auto" ? saved : "auto";
        setThemeMode(initial);

        const apply = (mode) => {
            const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
            const applied = mode === "auto" ? (prefersDark ? "dark" : "light") : mode;
            document.documentElement.setAttribute("data-theme", applied);
        };

        apply(initial);

        // listen to system changes when in auto
        const m = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
        const onSys = () => {
            if ((localStorage.getItem("themeMode") || initial) === "auto") apply("auto");
        };
        if (m && m.addEventListener) m.addEventListener("change", onSys);
        else if (m && m.addListener) m.addListener(onSys);

        setMounted(true);

        return () => {
            if (m && m.removeEventListener) m.removeEventListener("change", onSys);
            else if (m && m.removeListener) m.removeListener(onSys);
        };
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

    // Set theme mode: 'dark' | 'light' | 'auto'
    const setMode = (mode) => {
        if (typeof window === "undefined") return;
        if (!["dark", "light", "auto"].includes(mode)) return;
        setThemeMode(mode);
        localStorage.setItem("themeMode", mode);

        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        const applied = mode === "auto" ? (prefersDark ? "dark" : "light") : mode;
        document.documentElement.setAttribute("data-theme", applied);
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
            <Navbar setThemeMode={setMode} themeMode={themeMode} />
            <Component {...pageProps} />
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        </div>
    );
}
