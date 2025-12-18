module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.module.rules.push({
                test: /\.m?js$/,
                resolve: { fullySpecified: false },
            });
            return webpackConfig;
        },
    },

// to prevent error ResizeObserver
    // devServer: (devServerConfig) => {
    //     // Disable CRA/webpack-dev-server red error overlay
    //     devServerConfig.client = devServerConfig.client || {};
    //     devServerConfig.client.overlay = false;
    //     return devServerConfig;
    // },
};
