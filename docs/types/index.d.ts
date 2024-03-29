/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 4.1

/**
* Evaluates the ramp function.
*
* ## Notes
*
* -   If `x >= 0`, the function returns `x`; otherwise, the function returns zero.
*
* @param x - input value
* @returns function value
*
* @example
* var v = ramp( 3.14 );
* // returns 3.14
*
* @example
* var v = ramp( -3.14 );
* // returns 0.0
*
* @example
* var v = ramp( NaN );
* // returns NaN
*/
declare function ramp( x: number ): number;


// EXPORTS //

export = ramp;
