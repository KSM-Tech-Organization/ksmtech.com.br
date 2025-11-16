import { useMemo, useState } from "react";
import { useRouter } from "next/router";
import services from "../data/services.json";
import Footer from "../components/footer";

export default function Contato() {
    const router = useRouter();
    const { service, subject, message } = router.query || {};

    const defaults = useMemo(() => {
        const s = services.find((x) => x.slug === service);
        return {
            service: s?.slug || "geral",
            subject: subject || s?.subject || "",
            message: message || s?.message || "",
        };
    }, [service, subject, message]);

    const [status, setStatus] = useState("idle"); // idle | sending | success | error
    const [errorMsg, setErrorMsg] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setErrorMsg("");
        const form = e.currentTarget;
        const data = new FormData(form);

        // honeypot
        if (data.get("website")) return;

        const payload = {
            name: data.get("name")?.toString().trim(),
            email: data.get("email")?.toString().trim(),
            phone: data.get("phone")?.toString().trim(),
            service: data.get("service")?.toString(),
            subject: data.get("subject")?.toString().trim(),
            message: data.get("message")?.toString().trim(),
        };

        if (!payload.name || !payload.email || !payload.message) {
            setErrorMsg("Preencha nome, e-mail e mensagem");
            return;
        }
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(payload.email)) {
            setErrorMsg("Informe um e-mail válido");
            return;
        }

        try {
            setStatus("sending");
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            if (!res.ok) throw new Error("Falha ao enviar");
            setStatus("success");
            form.reset();
            setTimeout(() => setStatus("idle"), 4000);
        } catch (err) {
            setStatus("error");
            setErrorMsg("Não foi possível enviar agora. Tente novamente.");
            setTimeout(() => setStatus("idle"), 4000);
        }
    }

    return (
        <div className="contact">
            <main className="contact__wrap">
                <h1 className="contact__title">Contato</h1>
                <p className="contact__subtitle">
                    Fale com a KSM Tech — respondemos rápido
                </p>

                {/* chaveia o form quando os defaults mudam → pré-preenche certinho */}
                <form
                    key={`${defaults.service}|${defaults.subject}|${defaults.message}`}
                    className="contact__form"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    {/* honeypot */}
                    <input
                        type="text"
                        name="website"
                        className="hp"
                        tabIndex={-1}
                        autoComplete="off"
                    />

                    <div className="grid">
                        <div className="field">
                            <label htmlFor="name">Nome *</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Seu nome"
                                required
                            />
                        </div>

                        <div className="field">
                            <label htmlFor="email">E-mail *</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="voce@exemplo.com"
                                required
                            />
                        </div>

                        <div className="field">
                            <label htmlFor="phone">WhatsApp</label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="(41) 99999-9999"
                            />
                        </div>

                        <div className="field">
                            <label htmlFor="service">Serviço</label>
                            <select
                                id="service"
                                name="service"
                                defaultValue={defaults.service}
                            >
                                <option value="geral">Consultoria geral</option>
                                <option value="computadores">
                                    Montagem/format. de PCs/notebooks
                                </option>
                                <option value="seguranca">
                                    Câmeras e segurança
                                </option>
                                <option value="automacao">
                                    Fechaduras e sensores
                                </option>
                                <option value="sites">
                                    Sites institucionais
                                </option>
                                <option value="sistemas">CRM / ERP</option>
                            </select>
                        </div>
                    </div>

                    <div className="field">
                        <label htmlFor="subject">Assunto</label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="Como podemos ajudar?"
                            defaultValue={defaults.subject}
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="message">Mensagem *</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Descreva sua necessidade"
                            required
                            defaultValue={defaults.message}
                        />
                    </div>

                    {errorMsg && (
                        <div className="alert alert--error">{errorMsg}</div>
                    )}
                    {status === "success" && (
                        <div className="alert alert--ok">
                            Mensagem enviada com sucesso!
                        </div>
                    )}

                    <button
                        className="btn"
                        type="submit"
                        disabled={status === "sending"}
                    >
                        {status === "sending" ? "Enviando…" : "Enviar mensagem"}
                    </button>

                    <p className="contact__privacy">
                        Ao enviar, você concorda com nosso uso das informações
                        para retorno do contato
                    </p>
                </form>
            </main>

            <Footer />
        </div>
    );
}
