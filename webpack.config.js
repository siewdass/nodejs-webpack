const path = require( 'path' )

const config = {
    target: 'node',
    entry: { 
        index: path.resolve( __dirname, './src', 'index.js' )
    },
    output: {
        path: path.resolve( __dirname, './dist' ),
        filename: 'main.js',
    }
}

module.exports = config
