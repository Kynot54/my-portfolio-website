const {override} = require('customize-cra');
const cspHtmlWebpackPlugin = require("csp-html-webpack-plugin");

const cspConfigPolicy = {
    'default-src': "'self'",
    'base-uri': "'self'",
    'object-src': "'none'",
    'script-src': ["'self'"],
    'style-src': "fonts.googleapis.com 'self'",
    'font-src': "fonts.gstatic.com",
    'img-src': "'self' data: www.w3.org/2000/svg "
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
