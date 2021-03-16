const config = require( './package.json' )
const exec = require( 'child_process' ).exec
const readline = require( 'readline' )

const rl = readline.createInterface( {
  input: process.stdin,
  output: process.stdout
} )
var cmd = ''

version = config[ 'version' ]

if ( process.argv.includes( 'pull' ) ) {
	cmd = 'git pull'
} else if ( process.argv.includes( 'push' ) ) {
	rl.question( '', ( commit ) => {
		cmd = 'git add . && git commit -m "'+ commit +'" && git push '
		//console.log( '\033[1A' + cmd )

		exec( cmd, ( error, stdOut, stdErr ) => {
			if ( error == null ) {
				console.log( '\033[1A' + stdOut.slice( 0, -1 ) )
			}
		} )
		rl.close( )
	} )
} else {
	process.exit( )
}

/*process.exit( )
exec( cmd, ( error, stdOut, stdErr ) => {
	if ( error == null ) {
		console.log( stdOut.slice( 0, -1 ) )
	}
} )*/