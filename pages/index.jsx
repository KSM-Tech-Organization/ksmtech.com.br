// pages/index.jsx
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ServicesGrid from "../components/ServicesGrid";

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

            <main className="page__wrap">
                <section className="home__services">
                    <h2 className="page__title">Nossos serviços</h2>
                    <p className="page__subtitle">
                        Uma prévia do que podemos fazer por você
                    </p>

                    <ServicesGrid random limit={3} origin="home" />

                    <div className="home__services__see-all">
                        <Link href="/works" className="card__cta">
                            Ver todos os serviços
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
