import createNextJsObfuscator from "nextjs-obfuscator";

const withNextJsObfuscator = createNextJsObfuscator(obfuscatorOptions, pluginOptions);

/** @type {import("next").NextConfig} */
const nextConfig = withNextJsObfuscator({
  
});

export default nextConfig;
