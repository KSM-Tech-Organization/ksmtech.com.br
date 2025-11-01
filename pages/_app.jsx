import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    const router = useRouter();

    // pageview inicial + debug
    useEffect(() => {
        if (typeof window !== "undefined" && window.gtag)
            window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
                page_path: window.location.pathname,
                debug_mode: true,
            });
    }, []);

    // pageview nas trocas de rota do Next
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
        <>
            <Head>
                <title>KSM Tech</title>
            </Head>
            <Component {...pageProps} />
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        </>
    );
}
