const config = require( './package.json' )
const child_process = require( 'child_process' )
const exec = child_process.exec 

var v = ( arg ) => {
	v = config[ 'version' ].split( '.' )
	if ( arg == 'major' ) {
		v[ 0 ] = parseInt( v[ 0 ] ) + 1
		v[ 0 ] = v[ 0 ].toString( )
	} else if ( arg == 'minor' ) {
		v[ 1 ] = parseInt( v[ 1 ] ) + 1
		v[ 1 ] = v[ 1 ].toString( )
	} else if ( arg == 'fix' ) {
		v[ 2 ] = parseInt( v[ 2 ] ) + 1
		v[ 2 ] = v[ 2 ].toString( )
	}
	vNew = ''
	for ( var i = 0; i < v.length; i++ ) {
		if ( i == 0 ) {
			vNew += v[ i ]
		} else {
			vNew += '.' + v[ i ] 
		}
	}
	return vNew
}

if ( process.argv.includes( 'fix' ) ) {
	var version = v( 'fix' )
	exec( 'gh release create '+ version +' dist.tar.xz -t '+ version +' -n ""', ( error, stdOut, stdErr ) => {
		if ( error == null ) {
			console.log( stdOut.slice( 0, -1 ) )
		}
	} )
}
//npm can install apt?
//npm version 1.0.1 update