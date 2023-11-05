/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

//module.exports = nextConfig;

module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['courses-top.ru'],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};
