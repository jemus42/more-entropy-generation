const path = require('path');

module.exports = function override(config) {
    const myconf = config;

    myconf.resolve.alias = {
        ...config.resolve.alias,
        "@src": path.resolve(__dirname, 'src/')
    }

    myconf.optimization.splitChunks = {
        cacheGroups: {
            default: false
        }
    };
    myconf.optimization.runtimeChunk = false;

    myconf.output.filename = "static/js/bundle.js";

    return myconf;
}
