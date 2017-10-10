const Hapi = require( 'hapi' );
const Fs = require( 'fs' );
const Path = require( 'path' );

const server = new Hapi.Server();

server.connection( {
	port : 8080,
	host : '0.0.0.0',
	tls  : {
		key : Fs.readFileSync( 'tls/app.key' ),
		cert : Fs.readFileSync( 'tls/app.crt' ),
	}
} );

server.register( require( 'inert' ), function ( err ) {
	if ( err ) {
		throw err;
	}

	server.route( {
		method : 'GET',
		path : '/{path*}',
		handler : {
			directory :{
				//path : '/home/ubuntu/Projects/sis-frontend-ao/dist',
				path : '/home/ubuntu/Projects/www2',
				listing : true
			}
		}
	} )

	server.route( {
		method : 'GET',
		path : '/secops/endusers/{param*}',
		handler : {
			directory :{
				//path : '/home/ubuntu/Projects/sis-frontend-ao/dist',
				path : '/home/ubuntu/Projects/www2',
				listing : true
			}
		}
	} )

	server.route( {
		method : 'GET',
		path : '/secops/scan-job-management/{param*}',
		handler : {
			directory :{
				//path : '/home/ubuntu/Projects/sis-frontend-ao/dist',
				path : '/home/ubuntu/Projects/www2',
				listing : true
			}
		}
	} )

	server.route( {
		method : 'GET',
		path : '/secops/{path*}',
		handler : {
			directory :{
				//path : '/home/ubuntu/Projects/sis-frontend-ao/dist',
				path : '/home/ubuntu/Projects/www2',
				listing : true
			}
		}
	} )

	server.route( {
		method : 'GET',
		path : '/admin-ops/{path*}',
		handler : {
			directory :{
				//path : '/home/ubuntu/Projects/sis-frontend-ao/dist',
				path : '/home/ubuntu/Projects/www2/admin-ops',
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
