"use strict";var q=function(u,t){return function(){return t||u((t={exports:{}}).exports,t),t.exports}};var c=q(function(H,m){
var w=require('@stdlib/strided-base-reinterpret-complex64/dist'),x=require('@stdlib/complex-float32-real/dist'),E=require('@stdlib/complex-float32-imag/dist'),o=8;function M(u,t,n,f,g){var e,i,a,r,s,v;if(u<=0)return n;if(i=x(t),a=E(t),e=w(n,0),r=g*2,f*=2,f===2){if(s=u%o,s>0)for(v=0;v<s;v++)e[r]=i,e[r+1]=a,r+=f;if(u<o)return n;for(v=s;v<u;v+=o)e[r]=i,e[r+1]=a,e[r+2]=i,e[r+3]=a,e[r+4]=i,e[r+5]=a,e[r+6]=i,e[r+7]=a,e[r+8]=i,e[r+9]=a,e[r+10]=i,e[r+11]=a,e[r+12]=i,e[r+13]=a,e[r+14]=i,e[r+15]=a,r+=o*2;return n}for(v=0;v<u;v++)e[r]=i,e[r+1]=a,r+=f;return n}m.exports=M
});var y=q(function(I,p){
var O=require('@stdlib/strided-base-stride2offset/dist'),b=c();function k(u,t,n,f){return b(u,t,n,f,O(u,f))}p.exports=k
});var R=q(function(J,d){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=y(),A=c();z(j,"ndarray",A);d.exports=j
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=R(),l,_=C(B(__dirname,"./native.js"));D(_)?l=F:l=_;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
