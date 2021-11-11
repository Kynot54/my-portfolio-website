const {override} = require('customize-cra');
const cspHtmlWebpackPlugin = require("csp-html-webpack-plugin");

const cspConfigPolicy = {
    'default-src': "'self'",
    'base-uri': "'self'",
    'object-src': "'none'",
    'script-src': ["'self'"],
    'style-src': ["'self'"],
    'style-src-elem': "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,100&display=swap",
    'img-src' : "http://www.w3.org/2000/svg",
};

function addCspHtmlWebpackPlugin(config) {
    if(process.env.NODE_ENV === 'production') {
        config.plugins.push(new cspHtmlWebpackPlugin(cspConfigPolicy));
    }

    return config;
}

module.exports = {
    webpack: override(addCspHtmlWebpackPlugin),
};
