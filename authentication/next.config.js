const { NextFederationPlugin } = require('@module-federation/nextjs-mf')

/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        tsconfigPath: './tsconfig.json'
    },
    reactStrictMode: true,
    webpack (cfg, ctx) {
        cfg.plugins.push(
            new NextFederationPlugin({
                name: 'app2',
                filename: './.next/static/chunks/remoteEntry.js',
                remotes: {
                    'dashboard': 'app_dashboard@http://localhost:8080/remoteEntry.js'
                },
            })
        )
        
        return cfg
    }
}

module.exports = nextConfig
