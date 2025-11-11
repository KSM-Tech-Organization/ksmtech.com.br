import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Sobre() {
    return (
        <div className="about">
            <Navbar />
            <main className="about__card">
                <h1 className="about__title">Sobre Nós</h1>
                <hr className="about__divider" />

                <section className="about__block">
                    <h2 className="about__h2">Missão</h2>
                    <p className="about__p">
                        Colocar a tecnologia para trabalhar a favor de pessoas e
                        negócios — com soluções claras, eficientes e seguras, do
                        básico ao avançado
                    </p>
                </section>

                <section className="about__block">
                    <h2 className="about__h2">Visão</h2>
                    <p className="about__p">
                        Ser a parceira de confiança que transforma necessidades
                        em resultados práticos, da sua casa à sua empresa — hoje
                        e no que vem depois
                    </p>
                </section>

                <section className="about__block">
                    <h2 className="about__h2">Valores</h2>
                    <p className="about__p">
                        Clareza, Confiabilidade, Segurança, Escalabilidade,
                        Transparência, Inovação útil e Proximidade em cada
                        projeto
                    </p>
                </section>
            </main>

            <Footer />
        </div>
    );
}
