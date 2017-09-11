//since we don't have a database we'll use our front end models at the moment
var express = require( 'express' );
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var filmRouter = new express.Router();

// index
filmRouter.get( '/', function( req, res) {
  res.json( { films: films } );
} )

// get film by id
filmRouter.get( '/:id', function( req, res )  {
  res.json( { film: films[ req.params.id ] } );
} )

// create a film
filmRouter.post( '/', function( req, res ){
  var film = new Film( req.body );
  films.push( film );
  res.json( { films: films } );
})

// update a film
filmRouter.put( '/:id', function( req, res ) {
  var film = new Film( req.body );
  films[ req.params.id ] = film;
  res.json( { films: films } );
})

// delete a film
filmRouter.delete( '/:id', function( req, res ){
  films.slice( req.params.id, 1 );
  res.json( { films: films } );
} )

// add a review
filmRouter.put( '/:id/review', function( req, res ){
  var review = new Review( req.body );
  films[ req.params.id ].addReview( review );
  res.json( { films: films } ); 
})

module.exports = filmRouter;