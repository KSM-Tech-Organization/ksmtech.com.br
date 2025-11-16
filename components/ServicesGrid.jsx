// components/ServicesGrid.jsx
import { useEffect, useState } from "react";
import services from "../data/services.json";

function shuffle(list) {
    const arr = [...list];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

export default function ServicesGrid({
    random = false,
    limit,
    className = "grid",
    origin = "servicos",
}) {
    // 1) Primeira render: sempre determinística
    const [items, setItems] = useState(() => {
        let base = [...services];
        if (limit) base = base.slice(0, limit);
        return base;
    });

    const [imageLoaded, setImageLoaded] = useState({});

    // 2) Depois que montar no client, se random=true, embaralha
    useEffect(() => {
        if (!random) return;

        let base = shuffle(services);
        if (limit) base = base.slice(0, limit);
        setItems(base);
    }, [random, limit]);

    const handleImageLoad = (slug) => {
        setImageLoaded((prev) => ({ ...prev, [slug]: true }));
    };

    return (
        <section className={className}>
            {items.map((s) => {
                const q = new URLSearchParams({
                    origin,
                    service: s.slug,
                    subject: s.subject,
                    message: s.message,
                }).toString();

                return (
                    <article key={s.slug} className="card card--service">
                        <div className="card__image-wrapper">
                            <div
                                className="card__image"
                                style={{
                                    backgroundImage: imageLoaded[s.slug]
                                        ? `url(/services/${s.slug}.webp)`
                                        : "none",
                                    backgroundColor: "rgba(0, 255, 136, 0.08)",
                                }}
                                onLoad={() => handleImageLoad(s.slug)}
                            >
                                {!imageLoaded[s.slug] && (
                                    <img
                                        src={`/services/${s.slug}.webp`}
                                        alt={s.title}
                                        style={{ display: "none" }}
                                        onLoad={() => handleImageLoad(s.slug)}
                                        loading="lazy"
                                    />
                                )}
                                <div className="card__image-overlay"></div>
                            </div>
                        </div>

                        <div className="card__content">
                            <h3 className="card__title">{s.title}</h3>
                            <p className="card__p">{s.blurb}</p>

                            {s.features?.length ? (
                                <ul className="card__list">
                                    {s.features.map((f) => (
                                        <li key={f}>{f}</li>
                                    ))}
                                </ul>
                            ) : null}

                            <a
                                className="card__cta"
                                href={`/contact?${q}`}
                                aria-label={`Solicitar ${s.title}`}
                                title={`Mais informações sobre ${s.title}`}
                            >
                                {s.cta}
                            </a>
                        </div>
                    </article>
                );
            })}
        </section>
    );
}
