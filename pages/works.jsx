// pages/servicos.jsx (ou pages/works.jsx)
import Footer from "../components/footer.jsx";
import ServicesGrid from "../components/ServicesGrid";

export default function Servicos() {
    return (
        <div className="page">

            <main className="page__wrap">
                <h1 className="page__title">Serviços</h1>
                <p className="page__subtitle">
                    Produtos integrados ao serviço certo, quando você precisa
                </p>

                <ServicesGrid />
            </main>

            <Footer />
        </div>
    );
}
