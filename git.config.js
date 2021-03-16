const config = require( './package.json' )
const child_process = require( 'child_process' )
const readline = require( 'readline' )

const exec = child_process.exec 
const input = readline.createInterface( { 
	input: process.stdin, output: process.stdout
} )

version = config[ 'version' ]

if ( process.argv.includes( 'pull' ) ) {
	exec( 'git pull', ( error, stdOut, stdErr ) => {
		if ( error == null ) {
			console.log( stdOut.slice( 0, -1 ) )
			process.exit( )
		}
	} )
} else if ( process.argv.includes( 'push' ) ) {
	input.question( 'Commit: ', ( commit ) => {
		var cmd = 'git add . && git commit -m "'+ commit +'" && git push '
		exec( cmd, ( error, stdOut, stdErr ) => {
			if ( error == null ) {
				console.log( '\033[1A' + stdOut.slice( 0, -1 ) )
			}
		} )
		input.close( )
	} )
}