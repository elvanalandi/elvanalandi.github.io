const NextJsObfuscatorPlugin= require("nextjs-obfuscator");

/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { dev }) => {
      if (!dev) {
        config.plugins.push(
          new NextJsObfuscatorPlugin({
            rotateStringArray: true,
          })
        );
      }
  
      // Temporarily disable mini-css-extract-plugin
      config.module.rules.forEach((rule) => {
        if (Array.isArray(rule.use)) {
          rule.use = rule.use.filter((use) => {
            if (typeof use === 'object' && use.loader && use.loader.includes('mini-css-extract-plugin')) {
              return false;
            }
            return true;
          });
        }
      });
  
      return config;
    },
  };

module.exports = nextConfig;