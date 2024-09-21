/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Fill a single-precision complex floating-point strided array with a specified scalar constant.
*
* @module @stdlib/blas-ext-base-cfill
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
* var Complex64Array = require( '@stdlib/array-complex64' );
* var Complex64 = require( '@stdlib/complex-float32-ctor' );
* var realf = require( '@stdlib/complex-float32-real' );
* var imagf = require( '@stdlib/complex-float32-imag' );
* var cfill = require( '@stdlib/blas-ext-base-cfill' );
*
* var arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var x = new Complex64Array( arr );
*
* var alpha = new Complex64( 10.0, 10.0 );
*
* cfill( x.length, alpha, x, 1 );
*
* var y = x.get( 0 );
* // returns <Complex64>
*
* var re = realf( y );
* // returns 10.0
*
* var im = imagf( y );
* // returns 10.0
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils-try-require' );
var isError = require( '@stdlib/assert-is-error' );
var main = require( './main.js' );


// MAIN //

var cfill;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	cfill = main;
} else {
	cfill = tmp;
}


// EXPORTS //

module.exports = cfill;

// exports: { "ndarray": "cfill.ndarray" }