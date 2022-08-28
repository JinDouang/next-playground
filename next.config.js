/** @type {import('next').NextConfig} */
const nextConfig = {
    env: getEnvConfig(),
    webpack: config => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300
        }
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '**'
            },
            {
                protocol: 'https',
                hostname: '**'
            }
        ]
    }
}

module.exports = nextConfig;

function getEnvConfig() {
    const environment = process.env.NODE_ENV || process.env.NODE_PROD;
    if (process.env.NODE_PROD) {
        console.log("Using production config environment ");
        return require(`./${process.env.NODE_PROD}`);
    }
    try {
        return require(`./environment/env-${environment}.json`);
    } catch (err) {
        console.error("error while fetching env conf", err);
        console.log("using empty conf");
        return require('./environment/env.json');
    }
}