// pages/index.jsx
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import services from "../data/services.json";

export default function Home() {
    const featured = services.slice(0, 3);

    return (
        <div className="hero">
            <Navbar />
            <div className="hero__card">
                <img src="/LOGO_2.webp" alt="KSM Tech Logo" className="logo" />
                <h1 className="hero__title">
                    Soluções em tecnologias. A internet das Coisas
                </h1>
                <p className="hero__subtitle">
                    Consultoria completa — da configuração à integração
                </p>
                <hr className="hero__divider" />
            </div>

            <section className="grid">
                {featured.map((s) => {
                    const q = new URLSearchParams({
                        origin: "home",
                        service: s.slug,
                        subject: s.subject,
                        message: s.message,
                    }).toString();
                    return (
                        <article key={s.slug} className="card">
                            <h3 className="card__title">{s.title}</h3>
                            <p className="card__p">{s.blurb}</p>
                            {s.features?.length ? (
                                <ul className="card__list">
                                    {s.features.map((f) => (
                                        <li key={f}>{f}</li>
                                    ))}
                                </ul>
                            ) : null}
                            <a className="card__cta" href={`/contact?${q}`}>
                                {s.cta}
                            </a>
                        </article>
                    );
                })}
            </section>

            <Footer />
        </div>
    );
}
