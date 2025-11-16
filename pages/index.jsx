// pages/index.jsx
import Footer from "../components/footer.jsx";
import ServicesGrid from "../components/ServicesGrid";
import Link from "next/link";

export default function Home() {
    return (
        <div className="page">

            <main className="page__wrap">
                {/* HERO SECTION */}
                <section className="hero">
                    <div className="hero__card">
                        <img
                            src="/LOGO_2.webp"
                            alt="KSM Tech Logo"
                            className="logo"
                        />
                        <h1 className="hero__title">
                            Soluções em Tecnologia
                        </h1>
                        <h2 className="hero__second__title">
                            A internet das Coisas
                        </h2>
                        <hr className="hero__divider" />
                        <p className="hero__subtitle">
                            Consultoria completa — desde a configuração até a
                            integração de infraestrutura inteligente
                        </p>
                        <div className="hero__ctas">
                            <Link
                                href="/contact"
                                className="hero__cta hero__cta--primary"
                            >
                                Solicitar Orçamento
                            </Link>
                            <Link
                                href="/works"
                                className="hero__cta hero__cta--secondary"
                            >
                                Ver Serviços
                            </Link>
                        </div>
                    </div>
                </section>

                {/* VALUE PROPOSITION */}
                <section className="value-prop">
                    <div className="value-prop__container">
                        <h2 className="section__title">
                            Por que escolher KSM Tech?
                        </h2>
                        <div className="value-prop__grid">
                            <div className="value-prop__item">
                                <div className="value-prop__icon">🎯</div>
                                <h3>Expertise Integrada</h3>
                                <p>
                                    Da configuração básica até sistemas IoT
                                    complexos
                                </p>
                            </div>
                            <div className="value-prop__item">
                                <div className="value-prop__icon">🔧</div>
                                <h3>Consultoria Prática</h3>
                                <p>Soluções customizadas para seu negócio</p>
                            </div>
                            <div className="value-prop__item">
                                <div className="value-prop__icon">🚀</div>
                                <h3>Implementação Rápida</h3>
                                <p>
                                    Do planejamento à produção em tempo recorde
                                </p>
                            </div>
                            <div className="value-prop__item">
                                <div className="value-prop__icon">🛡️</div>
                                <h3>Segurança em Primeiro</h3>
                                <p>Proteção de dados e acesso garantido</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* USE CASES */}
                <section className="use-cases">
                    <div className="use-cases__container">
                        <h2 className="section__title">
                            Soluções para Seus Desafios
                        </h2>
                        <div className="use-cases__grid">
                            <div className="use-case__card">
                                <h3>🏢 Empresas</h3>
                                <p>
                                    Automação de ambientes, controle de acesso,
                                    monitoramento inteligente
                                </p>
                            </div>
                            <div className="use-case__card">
                                <h3>🏠 Residências</h3>
                                <p>
                                    Casa conectada, segurança 24/7, conforto
                                    automatizado
                                </p>
                            </div>
                            <div className="use-case__card">
                                <h3>🏭 Indústria</h3>
                                <p>
                                    ERP/CRM, IoT industrial, integração de
                                    sistemas
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURED SERVICES */}
                <section className="home__services">
                    <h2 className="page__title">Nossos Serviços</h2>
                    <p className="page__subtitle">
                        Confira uma prévia do que podemos fazer por você
                    </p>

                    <ServicesGrid random limit={3} origin="home" />

                    <div className="home__services__see-all">
                        <Link href="/works" className="card__cta">
                            Explorar Todos os Serviços
                        </Link>
                    </div>
                </section>

                {/* TRUST SECTION */}
                <section className="trust-section">
                    <div className="trust-section__container">
                        <h2 className="section__title">
                            Pronto para transformar sua infraestrutura?
                        </h2>
                        <p className="trust-section__subtitle">
                            Já ajudamos diversas empresas a modernizar suas
                            operações
                        </p>
                        <div className="trust-section__stats">
                            <div className="stat">
                                <span className="stat__number">6+</span>
                                <span className="stat__label">
                                    Serviços Especializados
                                </span>
                            </div>
                            <div className="stat">
                                <span className="stat__number">100%</span>
                                <span className="stat__label">
                                    Personalizado
                                </span>
                            </div>
                            <div className="stat">
                                <span className="stat__number">∞</span>
                                <span className="stat__label">
                                    Suporte Contínuo
                                </span>
                            </div>
                        </div>
                        <Link href="/contact" className="cta__large">
                            Agendar Consultoria Gratuita
                        </Link>
                    </div>
                </section>

                {/* FAQ PREVIEW */}
                <section className="faq-preview">
                    <div className="faq-preview__container">
                        <h2 className="section__title">Dúvidas Frequentes</h2>
                        <div className="faq-preview__grid">
                            <details className="faq-item">
                                <summary>
                                    Qual é o tempo de implementação?
                                </summary>
                                <p>
                                    Varia conforme a complexidade. Projetos
                                    simples em 1-2 semanas, soluções completas
                                    em 4-8 semanas.
                                </p>
                            </details>
                            <details className="faq-item">
                                <summary>
                                    Vocês fazem suporte pós-implementação?
                                </summary>
                                <p>
                                    Sim! Oferecemos suporte contínuo,
                                    atualizações e manutenção preventiva.
                                </p>
                            </details>
                            <details className="faq-item">
                                <summary>Quais são os valores?</summary>
                                <p>
                                    Cada projeto é único. Entramos em contato
                                    para uma consultoria gratuita e orçamento
                                    personalizado.
                                </p>
                            </details>
                        </div>
                        <Link href="/contact" className="faq-cta">
                            Mais dúvidas? Fale conosco
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
