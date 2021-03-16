var exec = require( 'child_process' ).exec

var cmd = null

if ( process.argv.includes( 'pull' ) ) {
	cmd = 'git pull'
} else if ( process.argv.includes( 'push' ) ) {
	cmd = 'git add . && git commit -m "-" && git push'
}

exec( cmd, function ( error, stdOut, stdErr ) {
	if ( error !== null ) {
		console.log( stdOut.slice( 0, -1 ) )
	}
} )