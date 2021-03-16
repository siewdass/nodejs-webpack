const config = require( './package.json' )
const proc = require( 'child_process' )
const readline = require( 'readline' )

const exec = proc.exec 
const input = readline.createInterface( { input: process.stdin, output: process.stdout } )

version = config[ 'version' ]

if ( process.argv.includes( 'pull' ) ) {
	exec( 'git pull', ( error, stdOut, stdErr ) => {
		if ( error == null ) {
			console.log( '\033[1A' + stdOut.slice( 0, -1 ) )
		}
	} )
} else if ( process.argv.includes( 'push' ) ) {
	input.question( '', ( commit ) => {
		var cmd = 'git add . && git commit -m "'+ commit +'" && git push '
		exec( cmd, ( error, stdOut, stdErr ) => {
			if ( error == null ) {
				console.log( '\033[1A' + stdOut.slice( 0, -1 ) )
			}
		} )
		input.close( )
	} )
}