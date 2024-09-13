const NextJsObfuscatorPlugin= require("nextjs-obfuscator");

/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { dev, isServer }) => {
        if (!dev && !isServer) {
            // Enable filesystem caching for faster rebuilds in production
            config.cache = {
              type: 'filesystem', // This ensures builds use a cache stored on disk
            };
      
            // Add the NextJsObfuscatorPlugin to Webpack plugins
            config.plugins.push(
              new NextJsObfuscatorPlugin({
                rotateStringArray: true,
              })
            );
      
            // Filter out mini-css-extract-plugin from Webpack rules
            config.module.rules.forEach((rule) => {
              if (Array.isArray(rule.use)) {
                rule.use = rule.use.filter((use) => {
                  // Check if the rule is using mini-css-extract-plugin and remove it
                  return !(typeof use === 'object' && use.loader && use.loader.includes('mini-css-extract-plugin'));
                });
              }
            });
        }

      return config;
    },
  };

module.exports = nextConfig;