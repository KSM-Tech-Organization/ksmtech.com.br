import { useEffect, useRef, useState } from "react";

export default function Navbar() {
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

            <button
                className="navbar__toggle"
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                onClick={() => setOpen((v) => !v)}
            >
                <span className="navbar__bar" />
                <span className="navbar__bar" />
                <span className="navbar__bar" />
            </button>

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
