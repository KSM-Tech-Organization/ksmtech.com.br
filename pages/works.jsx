import Navbar from "../components/navbar";

export default function Servicos() {
    return (
        <div className="page">
            <Navbar />
            <main className="page__wrap">
                <h1 className="page__title">Serviços</h1>
                <p className="page__subtitle">
                    Da configuração básica à integração completa
                </p>

                <section className="grid">
                    <article className="card">
                        <h3 className="card__title">Formatação e Otimização</h3>
                        <p className="card__p">
                            Instalação limpa, drivers, backup, antivírus e
                            ajustes de desempenho
                        </p>
                        <a className="card__cta" href="/contact">
                            Agendar
                        </a>
                    </article>

                    <article className="card">
                        <h3 className="card__title">Montagem e Upgrades</h3>
                        <p className="card__p">
                            Projetos sob medida, airflow, pasta térmica e testes
                            completos
                        </p>
                        <a className="card__cta" href="/contact">
                            Solicitar projeto
                        </a>
                    </article>

                    <article className="card">
                        <h3 className="card__title">Câmeras e Segurança</h3>
                        <p className="card__p">
                            Instalação de IP/CFTV, NVR/DVR, app remoto, zonas e
                            alertas
                        </p>
                        <a className="card__cta" href="/contact">
                            Inspecionar local
                        </a>
                    </article>

                    <article className="card">
                        <h3 className="card__title">Fechaduras & Sensores</h3>
                        <p className="card__p">
                            Automação de acesso com logs, integração com câmeras
                            e notificação
                        </p>
                        <a className="card__cta" href="/contact">
                            Quero integrar
                        </a>
                    </article>

                    <article className="card">
                        <h3 className="card__title">Redes & Wi-Fi</h3>
                        <p className="card__p">
                            Mapa de sinal, VLAN básica, segurança WPA3 e
                            otimização de canal
                        </p>
                        <a className="card__cta" href="/contact">
                            Diagnóstico
                        </a>
                    </article>

                    <article className="card">
                        <h3 className="card__title">Web & Sistemas</h3>
                        <p className="card__p">
                            Site institucional rápido e evolução para CRM/ERP
                            quando precisar
                        </p>
                        <a className="card__cta" href="/contact">
                            Conversar sobre o escopo
                        </a>
                    </article>
                </section>
            </main>
            <footer className="about__footer">© 2025 KSM Tech</footer>
        </div>
    );
}
