const babel = require('rollup-plugin-babel');
const { BUILD_TYPE } = process.env;

module.exports = {
    input: './src/afontsize.js',
    output: {
        file: `${__dirname}/${BUILD_TYPE}/afontsize.js`,
        name: 'AFontSize',
        sourcemap: true
    },
    plugins: [ babel() ]
};
