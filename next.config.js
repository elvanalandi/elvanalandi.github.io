const withNextJsObfuscator = require("nextjs-obfuscator")(obfuscatorOptions, pluginOptions);

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your Next.js configuration here
};
  
module.exports = withNextJsObfuscator(nextConfig);
