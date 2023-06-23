/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config')

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: function (config, options) {
        config.experiments = { asyncWebAssembly: true };
        return config;
    },
    images: {
        domains: ['images.unsplash.com'],
    },
    i18n,
}

module.exports = nextConfig
