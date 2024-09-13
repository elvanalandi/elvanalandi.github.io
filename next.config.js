const withNextJsObfuscator = require("nextjs-obfuscator")(obfuscatorOptions, pluginOptions);

/** @type {import('next').NextConfig} */
const nextConfig = withNextJsObfuscator({
});

module.exports = nextConfig
