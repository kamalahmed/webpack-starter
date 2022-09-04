const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset', // assets/resource, asset/inline, asset, asset/source
                parser: {
                    dataUrlCondition : {
                        maxSize : 3 * 1024 // 3 Kilobite  or less file will be inlined
                    }
                }
            }
        ]
    }

}