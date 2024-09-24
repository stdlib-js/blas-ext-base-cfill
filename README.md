<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# cfill

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fill a single-precision complex floating-point strided array with a specified scalar constant.



<section class="usage">

## Usage

```javascript
import cfill from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-cfill@esm/index.mjs';
```

#### cfill( N, alpha, x, strideX )

Fills a single-precision complex floating-point strided array `x` with a specified scalar constant `alpha`.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-real@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-imag@esm/index.mjs';

var arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var x = new Complex64Array( arr );

var alpha = new Complex64( 10.0, 10.0 );

cfill( x.length, alpha, x, 1 );

var y = x.get( 0 );
// returns <Complex64>

var re = realf( y );
// returns 10.0

var im = imagf( y );
// returns 10.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar constant.
-   **x**: input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: index increment.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to fill every other element

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-real@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-imag@esm/index.mjs';

var arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var x = new Complex64Array( arr );

var alpha = new Complex64( 10.0, 10.0 );

cfill( 2, alpha, x, 2 );

var y = x.get( 0 );
// returns <Complex64>

var re = realf( y );
// returns 10.0

var im = imagf( y );
// returns 10.0

y = x.get( 1 );
// returns <Complex64>

re = realf( y );
// returns 3.0

im = imagf( y );
// returns 4.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-real@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-imag@esm/index.mjs';

// Create the underlying floating-point array:
var arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

// Initial array:
var x0 = new Complex64Array( arr );

// Create an offset view:
var x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Define a scalar constant:
var alpha = new Complex64( 10.0, 10.0 );

// Fill every other element:
cfill( 2, alpha, x1, 2 );

var y = x0.get( 0 );
// returns <Complex64>

var re = realf( y );
// returns 1.0

var im = imagf( y );
// returns 2.0

y = x0.get( 1 );
// returns <Complex64>

re = realf( y );
// returns 10.0

im = imagf( y );
// returns 10.0
```

#### cfill.ndarray( N, alpha, x, strideX, offsetX )

Fills a single-precision complex floating-point strided array `x` with a specified scalar constant `alpha` using alternative indexing semantics.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-real@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-imag@esm/index.mjs';

var arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var x = new Complex64Array( arr );

var alpha = new Complex64( 10.0, 10.0 );

cfill.ndarray( x.length, alpha, x, 1, 0 );

var y = x.get( 0 );
// returns <Complex64>

var re = realf( y );
// returns 10.0

var im = imagf( y );
// returns 10.0
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last two elements of the strided array

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@esm/index.mjs';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-real@esm/index.mjs';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-imag@esm/index.mjs';

var arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var x = new Complex64Array( arr );

var alpha = new Complex64( 10.0, 10.0 );

cfill.ndarray( 2, alpha, x, 1, x.length-2 );

var y = x.get( 0 );
// returns <Complex64>

var re = realf( y );
// returns 1.0

var im = imagf( y );
// returns 2.0

y = x.get( 1 );
// returns <Complex64>

re = realf( y );
// returns 10.0

im = imagf( y );
// returns 10.0

y = x.get( 2 );
// returns <Complex64>

re = realf( y );
// returns 10.0

im = imagf( y );
// returns 10.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return the strided array unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@esm/index.mjs';
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@esm/index.mjs';
import cfill from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-cfill@esm/index.mjs';

var xbuf = discreteUniform( 20, -100, 100, {
    'dtype': 'float32'
});
var x = new Complex64Array( xbuf.buffer );
var alpha = new Complex64( 10.0, 10.0 );

cfill( x.length, alpha, x, 1 );
console.log( x.get( 0 ).toString() );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation >

* * *

<section class="C">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/cfill.h"
```

#### stdlib_strided_cfill( N, alpha, \*X, strideX )

Fills a single-precision floating-point strided array `X` with a specified scalar constant `alpha`.

```c
float x[] = { 1.0f, 2.0f, 3.0f, 4.0f };
const stdlib_complex64_t alpha = stdlib_complex64( 2.0f, 2.0f );

stdlib_strided_cfill( 2, alpha, (stdlib_complex64_t *)x, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alpha**: `[in] stdlib_complex64_t` scalar constant.
-   **X**: `[out] stdlib_complex64_t*` input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.

```c
void stdlib_strided_cfill( const CBLAS_INT N, const stdlib_complex64_t alpha, stdlib_complex64_t *X, const CBLAS_INT strideX );
```

#### stdlib_strided_cfill_ndarray( N, alpha, \*X, strideX, offsetX )

Fills a single-precision complex floating-point strided array `X` with a specified scalar constant `alpha` using alternative indexing semantics.

```c
float x[] = { 1.0f, 2.0f, 3.0f, 4.0f };
const stdlib_complex64_t alpha = stdlib_complex64( 2.0f, 2.0f );

stdlib_strided_cfill_ndarray( 4, alpha, (stdlib_complex64_t *x), 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alpha**: `[in] stlib_complex64_t` scalar constant.
-   **X**: `[out] stdlib_complex64_t*` input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
void stdlib_strided_cfill_ndarray( const CBLAS_INT N, const stdlib_complex64_t alpha, stdlib_complex_64_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/cfill.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array of interleaved real and imaginary components:
    float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };

    // Create a complex scalar:
    const stdlib_complex64_t alpha = stdlib_complex64( 2.0f, 2.0f );

    // Specify the number of indexed elements:
    const int N = 4;

    // Specify a stride:
    const int strideX = 1;

    // Fill the array:
    stdlib_strided_cfill( N, alpha, (stdlib_complex_64_t *)x, strideX );

    // Print the result:
    for ( int i = 0; i < N; i++ ) {
        printf( "x[ %i ] = %f + %fj\n", i, x[ i*2 ], x[ (i*2)+1 ] );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-cfill.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-cfill

[test-image]: https://github.com/stdlib-js/blas-ext-base-cfill/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-cfill/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-cfill/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-cfill?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-cfill.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-cfill/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-cfill/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-cfill/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-cfill/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-cfill/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-cfill/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-cfill/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-cfill/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-cfill/main/LICENSE

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64/tree/esm

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
