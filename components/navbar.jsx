import { useEffect, useRef, useState } from "react";

export default function Navbar({ setThemeMode, themeMode }) {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") setOpen(false);
        }
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, []);

    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
    }, [open]);

    return (
        <header className="navbar">
            <a href="/" className="navbar__brand">
                <img
                    src="/LOGO_2.webp"
                    alt="KSM Tech"
                    className="navbar__logo"
                />
            </a>

            <div className="navbar__actions">
                <div
                    className="theme-switch"
                    role="radiogroup"
                    aria-label="Theme preference"
                >
                    <button
                        className={`theme-btn ${themeMode === "dark" ? "is-active" : ""}`}
                        onClick={() => setThemeMode("dark")}
                        aria-pressed={themeMode === "dark"}
                        title="Dark"
                    >
                        {/* moon icon */}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                    </button>

                    <button
                        className={`theme-btn ${themeMode === "auto" ? "is-active" : ""}`}
                        onClick={() => setThemeMode("auto")}
                        aria-pressed={themeMode === "auto"}
                        title="Auto"
                    >
                        {/* dot / auto icon */}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="3" /></svg>
                    </button>

                    <button
                        className={`theme-btn ${themeMode === "light" ? "is-active" : ""}`}
                        onClick={() => setThemeMode("light")}
                        aria-pressed={themeMode === "light"}
                        title="Light"
                    >
                        {/* sun icon */}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                    </button>
                </div>

                <button
                    className="navbar__toggle"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label={
                        open ? "Fechar menu" : "Abrir menu"
                    }
                    onClick={() => setOpen((v) => !v)}
                >
                    <span className="navbar__bar" />
                    <span className="navbar__bar" />
                    <span className="navbar__bar" />
                </button>
            </div>

            <nav
                id="mobile-menu"
                className={`navbar__drawer ${open ? "is-open" : ""}`}
                ref={menuRef}
            >
                <ul className="navbar__list">
                    <li>
                        <a href="/">Início</a>
                    </li>
                    <li>
                        <a href="/works">Serviços</a>
                    </li>
                    <li>
                        <a href="/contact">Contato</a>
                    </li>
                    <li>
                        <a href="/about">Sobre Nós</a>
                    </li>
                </ul>
            </nav>

            {open && (
                <div
                    className="navbar__backdrop"
                    onClick={() => setOpen(false)}
                />
            )}
        </header>
    );
}
