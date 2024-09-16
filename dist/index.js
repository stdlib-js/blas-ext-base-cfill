"use strict";var c=function(t,u){return function(){return u||t((u={exports:{}}).exports,u),u.exports}};var l=c(function(I,p){
var x=require('@stdlib/strided-base-reinterpret-complex64/dist'),E=require('@stdlib/complex-float32-real/dist'),M=require('@stdlib/complex-float32-imag/dist'),q=8;function O(t,u,n,s,w){var e,i,a,f,o,v,r;if(t<=0)return n;if(f=w,i=E(u),a=M(u),e=x(n,0),s===1){if(o=t%q,o>0)for(v=0;v<o;v++)r=f*2,e[r]=i,e[r+1]=a,f+=s;if(t<q)return n;for(v=o;v<t;v+=q)r=f*2,e[r]=i,e[r+1]=a,e[r+2]=i,e[r+3]=a,e[r+4]=i,e[r+5]=a,e[r+6]=i,e[r+7]=a,e[r+8]=i,e[r+9]=a,e[r+10]=i,e[r+11]=a,e[r+12]=i,e[r+13]=a,e[r+14]=i,e[r+15]=a,f+=q;return n}for(v=0;v<t;v++)r=f*2,e[r]=i,e[r+1]=a,f+=s;return n}p.exports=O
});var j=c(function(J,y){
var b=require('@stdlib/strided-base-stride2offset/dist'),k=l();function z(t,u,n,s){return k(t,u,n,s,b(t,s))}y.exports=z
});var _=c(function(K,R){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=j(),B=l();A(d,"ndarray",B);R.exports=d
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=_(),m,g=D(C(__dirname,"./native.js"));F(g)?m=G:m=g;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
