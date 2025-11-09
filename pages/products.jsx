import Navbar from "../components/navbar";

export default function Produtos() {
    return (
        <div className="page">
            <Navbar />
            <main className="page__wrap">
                <h1 className="page__title">Produtos</h1>
                <p className="page__subtitle">
                    Hardware e soluções prontos para o dia a dia
                </p>

                <section className="grid">
                    <article className="card">
                        <h3 className="card__title">PCs e Notebooks</h3>
                        <p className="card__p">
                            Montagem, upgrades de RAM/SSD, fontes confiáveis e
                            gabinetes ventilados
                        </p>
                        <a className="card__cta" href="/contact">
                            Quero um orçamento
                        </a>
                    </article>

                    <article className="card">
                        <h3 className="card__title">Kits de Câmeras IP/CFTV</h3>
                        <p className="card__p">
                            Conjuntos DVR/NVR, câmeras internas/externas, acesso
                            remoto e gravação
                        </p>
                        <a className="card__cta" href="/contact">
                            Falar com especialista
                        </a>
                    </article>

                    <article className="card">
                        <h3 className="card__title">Redes e Wi-Fi</h3>
                        <p className="card__p">
                            Roteadores, repetidores, cabeamento estruturado e
                            segmentação básica
                        </p>
                        <a className="card__cta" href="/contact">
                            Ver opções
                        </a>
                    </article>

                    <article className="card">
                        <h3 className="card__title">Fechaduras e Sensores</h3>
                        <p className="card__p">
                            Fechaduras eletrônicas, sensores de movimento/porta
                            e integração com câmeras
                        </p>
                        <a className="card__cta" href="/contact">
                            Integrar ao meu ambiente
                        </a>
                    </article>

                    <article className="card">
                        <h3 className="card__title">Mini-PCs e NAS</h3>
                        <p className="card__p">
                            Servidores compactos para backups, mídia e automação
                            doméstica
                        </p>
                        <a className="card__cta" href="/contact">
                            Quero configurar
                        </a>
                    </article>

                    <article className="card">
                        <h3 className="card__title">Acessórios Pro</h3>
                        <p className="card__p">
                            Monitores, teclados, nobreaks, storage externo e
                            periféricos
                        </p>
                        <a className="card__cta" href="/contact">
                            Pedir catálogo
                        </a>
                    </article>
                </section>
            </main>
            <footer className="about__footer">© 2025 KSM Tech</footer>
        </div>
    );
}
