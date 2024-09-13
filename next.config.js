const withNextJsObfuscator = require("nextjs-obfuscator");

/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

module.exports = {
    webpack:(config,{dev})=>{
        if(!dev){
            config.plugins.push(new NextJsObfuscatorPlugin({
            rotateStringArray: true
            }))
        }
        return config
    },
    nextConfig
};