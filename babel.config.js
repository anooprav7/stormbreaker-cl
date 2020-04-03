module.exports = function babelConfig(api) {
    api.cache(false);
    return {
        presets: [ '@babel/preset-react'],
        plugins: [
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import',
        ],
        env: {
            cjs: {
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            loose: true,
                            modules: 'commonjs',
                        },
                    ],
                ],
            },
        },
        // "ignore":[
        //     '**/scss',
        //     '**/__test__',
        //     '**/*.stories.js'
        // ]
    };
};
