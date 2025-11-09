import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect } from "react";
import { useRouter } from "next/router";

import "../styles/tokens.css";
import "../styles/base.css";
import "../styles/components.css";

import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/home.css";
import "../styles/about.css";
import "../styles/contact.css";
import "../styles/page.css";

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
    subsets: ["latin"],
    weight: ["400", "900"], // sem 300
    display: "swap",
    variable: "--font-orbitron",
});

export default function App({ Component, pageProps }) {
    const router = useRouter();

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

    return (
        <div className={orbitron.variable}>
            <Head>
                <title>KSM Tech</title>
            </Head>
            <Component {...pageProps} />
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        </div>
    );
}
