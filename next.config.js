const WebpackObfuscator = require('webpack-obfuscator');
/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { dev, isServer }) => {
        if (!dev && !isServer) {
        config.plugins.push(
            new WebpackObfuscator(
                {
                    rotateStringArray: true,
                },
                [] // Exclude files here if necessary
            )
        );
        }
        return config;
    },
};

module.exports = nextConfig;