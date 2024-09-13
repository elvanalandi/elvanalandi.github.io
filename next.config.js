const NextJsObfuscatorPlugin= require("nextjs-obfuscator");

/** @type {import("next").NextConfig} */
const nextConfig = {
reactStrictMode: true,
    webpack: (config, { dev }) => {
        if (!dev) {
            config.plugins.push(
                new NextJsObfuscatorPlugin({
                    rotateStringArray: true
            })
        );
        }
        return config;
    }
};

module.exports = nextConfig;