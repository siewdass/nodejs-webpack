const config = require( './package.json' )
const exec = require( 'child_process' ).exec
const readline = require( 'readline' )

const rl = readline.createInterface( {
  input: process.stdin,
  output: process.stdout
} )

version = config[ 'version' ]

if ( process.argv.includes( 'pull' ) ) {
	exec( 'git pull', ( error, stdOut, stdErr ) => {
		if ( error == null ) {
			console.log( '\033[1A' + stdOut.slice( 0, -1 ) )
		}
	} )
} else if ( process.argv.includes( 'push' ) ) {
	rl.question( '', ( commit ) => {
		var cmd = 'git add . && git commit -m "'+ commit +'" && git push '
		exec( cmd, ( error, stdOut, stdErr ) => {
			if ( error == null ) {
				console.log( '\033[1A' + stdOut.slice( 0, -1 ) )
			}
		} )
		rl.close( )
	} )
}