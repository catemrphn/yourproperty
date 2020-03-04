module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "@/style/framework/_index.scss";',
            },
        },
    },
    transpileDependencies: [
        'vuex-module-decorators',
    ],
};
