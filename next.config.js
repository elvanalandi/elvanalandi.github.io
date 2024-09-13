import createNextJsObfuscator from "nextjs-obfuscator";

const withNextJsObfuscator = createNextJsObfuscator(obfuscatorOptions, pluginOptions);

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your Next.js configuration here
};
  
module.exports = withNextJsObfuscator(nextConfig);
