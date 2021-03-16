const config = require( './package.json' )
const exec = require( 'child_process' ).exec

var cmd = null

version = config[ 'version' ]

if ( process.argv.includes( 'pull' ) ) {
	cmd = 'git pull'
} else if ( process.argv.includes( 'push' ) ) {
	cmd = 'git add . && git commit -m "-" && git push'
} else {
	process.exit( )
}

exec( cmd, function ( error, stdOut, stdErr ) {
	if ( error === null ) {
		console.log( stdOut.slice( 0, -1 ) )
	}
} )