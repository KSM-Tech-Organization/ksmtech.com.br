/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [{ key: "Content-Language", value: "pt-BR" }],
            },
        ];
    },
    i18n: {
        locales: ["pt-BR"],
        defaultLocale: "pt-BR",
        localeDetection: true,
    },
};

module.exports = nextConfig;
