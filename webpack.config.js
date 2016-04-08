
module.exports = {
    context: process.cwd(),
    entry: {
        lib1: ['./lib1.browserify.js'],
    },
    output: {
        path: 'build/',
        filename: '[name].bundle.js',
        libraryTarget: 'umd'
    }
};
