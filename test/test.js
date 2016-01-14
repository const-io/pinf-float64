'use strict';

// MODULES //

var test = require( 'tape' );
var pinf = require( './../lib' );


// TESTS //

test( 'main export is a number', function test( t ) {
	t.ok( typeof pinf === 'number', 'main export is a number' );
	t.end();
});

test( 'export is equal to positive infinity', function test( t ) {
	t.equal( pinf, Number.POSITIVE_INFINITY, 'equals +infinity' );
	t.end();
});
