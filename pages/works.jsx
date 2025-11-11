// pages/servicos.jsx
import Navbar from "../components/navbar";
import Footer from "../components/footer.jsx";
import services from "../data/services.json";

export default function Servicos() {
    return (
        <div className="page">
            <Navbar />
            <main className="page__wrap">
                <h1 className="page__title">Serviços</h1>
                <p className="page__subtitle">
                    Produtos integrados ao serviço certo, quando você precisa
                </p>

                <section className="grid">
                    {services.map((s) => {
                        const q = new URLSearchParams({
                            origin: "servicos",
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
            </main>
            <Footer />
        </div>
    );
}
