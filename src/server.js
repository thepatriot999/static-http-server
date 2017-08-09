const Hapi = require( 'hapi' );
const Path = require( 'path' );

const server = new Hapi.Server();

server.connection( {
	port : 80,
	host : '0.0.0.0'
} )

server.register( require( 'inert' ), function ( err ) {
	if ( err ) {
		throw err;
	}

	server.route( {
		method : 'GET',
		path : '/{param*}',
		handler : {
			directory :{
				path : process.env.DOCUMENT_DIR,
				listing : true
			}
		}
	} )

} );

server.start( function ( err ) {
	if ( err ) {
		return console.log( 'Failed to start server' + err );
	}

	console.log( 'Server started:' + server.info.uri );
} )
