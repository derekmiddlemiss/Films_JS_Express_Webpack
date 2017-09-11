var express = require( 'express' );
var router = new express.Router();

router.use( '/api/films', require( './films' ) );

module.exports = router;