(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function v(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function fa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ha="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)fa(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||ha});
var ka="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ka(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=ma;
function y(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.la=b.prototype}
function ta(){this.G=!1;this.l=null;this.h=void 0;this.g=1;this.u=this.o=0;this.O=this.i=null}
function ua(a){if(a.G)throw new TypeError("Generator is already running");a.G=!0}
ta.prototype.K=function(a){this.h=a};
function va(a,b){a.i={nc:b,yc:!0};a.g=a.o||a.u}
ta.prototype.return=function(a){this.i={return:a};this.g=this.u};
function A(a,b,c){a.g=c;return{value:b}}
ta.prototype.B=function(a){this.g=a};
function wa(a,b,c){a.o=b;void 0!=c&&(a.u=c)}
function xa(a){a.o=0;var b=a.i.nc;a.i=null;return b}
function ya(a){var b=a.O.splice(0)[0];(b=a.i=a.i||b)?b.yc?a.g=a.o||a.u:void 0!=b.B&&a.u<b.B?(a.g=b.B,a.i=null):a.g=a.u:a.g=0}
function za(a){this.g=new ta;this.h=a}
function Aa(a,b){ua(a.g);var c=a.g.l;if(c)return Ba(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ca(a)}
function Ba(a,b,c,d){try{var e=b.call(a.g.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.G=!1,e;var f=e.value}catch(g){return a.g.l=null,va(a.g,g),Ca(a)}a.g.l=null;d.call(a.g,f);return Ca(a)}
function Ca(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.G=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,va(a.g,c)}a.g.G=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.yc)throw b.nc;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ea(a){this.next=function(b){ua(a.g);a.g.l?b=Ba(a,a.g.l.next,b,a.g.K):(a.g.K(b),b=Ca(a));return b};
this.throw=function(b){ua(a.g);a.g.l?b=Ba(a,a.g.l["throw"],b,a.g.K):(va(a.g,b),b=Ca(a));return b};
this.return=function(b){return Aa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Fa(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Fa(new Ea(new za(a)))}
function Ga(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect",function(a){return a?a:{}});
v("Reflect.construct",function(){return la});
v("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.h=[];this.G=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(l){h.reject(l)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.o()})}this.g.push(g)};
var e=da.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var l=g[h];g[h]=null;try{l()}catch(k){this.l(k)}}}this.g=null};
c.prototype.l=function(g){this.i(function(){throw g;})};
b.prototype.l=function(){function g(k){return function(m){l||(l=!0,k.call(h,m))}}
var h=this,l=!1;return{resolve:g(this.bb),reject:g(this.o)}};
b.prototype.bb=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.eb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.wa(g):this.u(g)}};
b.prototype.wa=function(g){var h=void 0;try{h=g.then}catch(l){this.o(l);return}"function"==typeof h?this.sb(h,g):this.u(g)};
b.prototype.o=function(g){this.K(2,g)};
b.prototype.u=function(g){this.K(1,g)};
b.prototype.K=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.cb();this.O()};
b.prototype.cb=function(){var g=this;e(function(){if(g.ma()){var h=da.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.ma=function(){if(this.G)return!1;var g=da.CustomEvent,h=da.Event,l=da.dispatchEvent;if("undefined"===typeof l)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return l(g)};
b.prototype.O=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.eb=function(g){var h=this.l();g.xb(h.resolve,h.reject)};
b.prototype.sb=function(g,h){var l=this.l();try{g.call(h,l.resolve,l.reject)}catch(k){l.reject(k)}};
b.prototype.then=function(g,h){function l(q,p){return"function"==typeof q?function(t){try{k(q(t))}catch(u){m(u)}}:p}
var k,m,n=new b(function(q,p){k=q;m=p});
this.xb(l(g,k),l(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.xb=function(g,h){function l(){switch(k.g){case 1:g(k.i);break;case 2:h(k.i);break;default:throw Error("Unexpected state: "+k.g);}}
var k=this;null==this.h?f.h(l):this.h.push(l);this.G=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,l){l(g)})};
b.race=function(g){return new b(function(h,l){for(var k=w(g),m=k.next();!m.done;m=k.next())d(m.value).xb(h,l)})};
b.all=function(g){var h=w(g),l=h.next();return l.done?d([]):new b(function(k,m){function n(t){return function(u){q[t]=u;p--;0==p&&k(q)}}
var q=[],p=0;do q.push(void 0),p++,d(l.value).xb(n(q.length-1),m),l=h.next();while(!l.done)})};
return b});
v("Object.setPrototypeOf",function(a){return a||sa});
v("WeakMap",function(a){function b(l){this.g=(h+=Math.random()+1).toString();if(l){l=w(l);for(var k;!(k=l.next()).done;)k=k.value,this.set(k[0],k[1])}}
function c(){}
function d(l){var k=typeof l;return"object"===k&&null!==l||"function"===k}
function e(l){if(!fa(l,g)){var k=new c;ba(l,g,{value:k})}}
function f(l){var k=Object[l];k&&(Object[l]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return k(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),k=Object.seal({}),m=new a([[l,2],[k,3]]);if(2!=m.get(l)||3!=m.get(k))return!1;m.delete(l);m.set(k,4);return!m.has(l)&&4==m.get(k)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(l,k){if(!d(l))throw Error("Invalid WeakMap key");e(l);if(!fa(l,g))throw Error("WeakMap key fail: "+l);l[g][this.g]=k;return this};
b.prototype.get=function(l){return d(l)&&fa(l,g)?l[g][this.g]:void 0};
b.prototype.has=function(l){return d(l)&&fa(l,g)&&fa(l[g],this.g)};
b.prototype.delete=function(l){return d(l)&&fa(l,g)&&fa(l[g],this.g)?delete l[g][this.g]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,l){var k=h[1];return ea(function(){if(k){for(;k.head!=h[1];)k=k.previous;for(;k.next!=k.head;)return k=k.next,{done:!1,value:l(k)};k=null}return{done:!0,value:void 0}})}
function d(h,l){var k=l&&typeof l;"object"==k||"function"==k?f.has(l)?k=f.get(l):(k=""+ ++g,f.set(l,k)):k="p_"+l;var m=h[0][k];if(m&&fa(h[0],k))for(h=0;h<m.length;h++){var n=m[h];if(l!==l&&n.key!==n.key||l===n.key)return{id:k,list:m,index:h,entry:n}}return{id:k,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),l=new a(w([[h,"s"]]));if("s"!=l.get(h)||1!=l.size||l.get({x:4})||l.set({x:4},"t")!=l||2!=l.size)return!1;var k=l.entries(),m=k.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=k.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!k.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,l){h=0===h?0:h;var k=d(this,h);k.list||(k.list=this[0][k.id]=[]);k.entry?k.entry.value=l:(k.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:l},k.list.push(k.entry),this[1].previous.next=k.entry,this[1].previous=k.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,l){for(var k=this.entries(),m;!(m=k.next()).done;)m=m.value,h.call(l,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ia(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
function Ja(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ja(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ja(this,function(b){return b})}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)fa(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ia(this,b,"includes").indexOf(b,c||0)}});
v("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
v("Array.prototype.values",function(a){return a?a:function(){return Ja(this,function(b,c){return c})}});
v("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)fa(b,d)&&c.push([d,b[d]]);return c}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self;function Ka(a){var b=D("CLOSURE_FLAGS");a=b&&b[a];return null!=a?a:!1}
function D(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Wa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ua:Va;return Wa.apply(null,arguments)}
function Xa(){return Date.now()}
function E(a,b){a=a.split(".");var c=C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ya(a,b){function c(){}
c.prototype=b.prototype;a.la=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.re=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Za(a){return a}
;function $a(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,$a);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Ya($a,Error);$a.prototype.name="CustomError";function ab(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}
;var bb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},cb=/&/g,db=/</g,eb=/>/g,fb=/"/g,gb=/'/g,hb=/\x00/g,ib=/[\x00&<>"']/;var mb;function nb(){if(void 0===mb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Za,createScript:Za,createScriptURL:Za})}catch(c){C.console&&C.console.error(c.message)}mb=a}else mb=a}return mb}
;function ob(a,b){this.g=a===pb&&b||""}
ob.prototype.toString=function(){return this.g};
function qb(a){return new ob(pb,a)}
var pb={};qb("");function rb(a){this.g=a}
rb.prototype.toString=function(){return this.g+""};
var sb={};/*

 SPDX-License-Identifier: Apache-2.0
*/
function tb(a){this.g=a}
tb.prototype.toString=function(){return this.g};
var ub=new tb("about:invalid#zClosurez");function vb(a){this.od=a}
function wb(a){return new vb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var xb=[wb("data"),wb("http"),wb("https"),wb("mailto"),wb("ftp"),new vb(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function yb(a,b){b=void 0===b?xb:b;if(a instanceof tb)return a;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof vb&&d.od(a))return new tb(a)}}
function zb(a){var b=void 0===b?xb:b;return yb(a,b)||ub}
var Ab=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;var Bb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Cb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function Db(a,b){b=Bb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function Eb(a){return Array.prototype.concat.apply([],arguments)}
function Fb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Gb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Hb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ib(a){var b=Jb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Kb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Lb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Lb(a[c]);return b}
var Mb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Mb.length;f++)c=Mb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Ob(a){this.g=a}
Ob.prototype.toString=function(){return this.g.toString()};function Pb(){throw Error("unknown trace type");}
;var Qb={Ud:0,Zd:1,Sd:2,Td:3,0:"FORMATTED_HTML_CONTENT",1:"HTML_FORMATTED_CONTENT",2:"EMBEDDED_INTERNAL_CONTENT",3:"EMBEDDED_TRUSTED_EXTERNAL_CONTENT"};function Ub(a,b){b=Error.call(this,a+" cannot be used with intent "+Qb[b]);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.type=a;this.name="TypeCannotBeUsedWithIntentError"}
y(Ub,Error);function Vb(a,b){a.removeAttribute("srcdoc");if(b instanceof rb)throw new Ub("TrustedResourceUrl",3);var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);if(b instanceof tb)if(b instanceof tb)b=b.g;else throw Error("");else b=Ab.test(b)?b:void 0;void 0!==b&&(a.src=b)}
;function Wb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Xb(a){var b=D("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Yb(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Zb[c])c=Zb[c];else{c=String(c);if(!Zb[c]){var f=/function\s+([^\(]+)/m.exec(c);Zb[c]=f?f[1]:"[Anonymous]"}c=Zb[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Yb(a,b){b||(b={});b[$b(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[$b(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Yb(a,b));return c}
function $b(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Zb={};function ac(a){ib.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(cb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(db,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(eb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(fb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(gb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(hb,"&#0;")));return a}
;var bc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cc(a){return a?decodeURI(a):a}
function dc(a){return cc(a.match(bc)[3]||null)}
function ec(a){var b=a.match(bc);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function fc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)fc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function gc(a){var b=[],c;for(c in a)fc(c,a[c],b);return b.join("&")}
var hc=/#|$/;function ic(a,b){var c=a.search(hc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function jc(a){C.setTimeout(function(){throw a;},0)}
;var kc=Ka(610401301),lc=Ka(188588736);function mc(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var nc,oc=C.navigator;nc=oc?oc.userAgentData||null:null;function pc(a){return kc?nc?nc.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=mc().indexOf(a)}
;function qc(){return kc?!!nc&&0<nc.brands.length:!1}
function rc(){return qc()?pc("Chromium"):(F("Chrome")||F("CriOS"))&&!(qc()?0:F("Edge"))||F("Silk")}
;function wc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function xc(a){xc[" "](a);return a}
xc[" "]=function(){};var yc=qc()?!1:F("Trident")||F("MSIE"),zc=F("Edge"),Ac=F("Gecko")&&!(-1!=mc().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge");var Bc=wc()||F("iPod"),Cc=F("iPad");!F("Android")||rc();rc();var Dc=F("Safari")&&!(rc()||(qc()?0:F("Coast"))||(qc()?0:F("Opera"))||(qc()?0:F("Edge"))||(qc()?pc("Microsoft Edge"):F("Edg/"))||(qc()?pc("Opera"):F("OPR"))||F("Firefox")||F("FxiOS")||F("Silk")||F("Android"))&&!(wc()||F("iPad")||F("iPod"));var Ec={},Fc=null;
function Gc(a,b){Oa(a);void 0===b&&(b=0);if(!Fc){Fc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Ec[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Fc[h]&&(Fc[h]=g)}}}b=Ec[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var l=a[f],k=a[f+1];h=a[f+2];g=b[l>>2];l=b[(l&3)<<4|k>>4];k=b[(k&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+l+k+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Hc="undefined"!==typeof Uint8Array,Ic=!yc&&"function"===typeof btoa;function Jc(){return"function"===typeof BigInt}
;var Kc=0,Lc=0;function Mc(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=w(Nc(c,a)),b=c.next().value,a=c.next().value,c=b);Kc=c>>>0;Lc=a>>>0}
function Oc(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else Jc()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+Pc(c)+Pc(a));return c}
function Pc(a){a=String(a);return"0000000".slice(a.length)+a}
function Qc(){var a=Kc,b=Lc;b&2147483648?Jc()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(Nc(a,b)),a=b.next().value,b=b.next().value,a="-"+Oc(a,b)):a=Oc(a,b);return a}
function Nc(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function Rc(a){return Array.prototype.slice.call(a)}
;function Sc(a){return"function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():a}
var Tc=Sc(),Uc=Sc("0di"),Vc=Sc("2ex");Math.max.apply(Math,x(Object.values({de:1,be:2,ae:4,ge:8,fe:16,ee:32,Rd:64,ie:128,Yd:256,Xd:512,ce:1024,Vd:2048,he:4096,Wd:8192})));var Wc=Tc?function(a,b){a[Tc]|=b}:function(a,b){void 0!==a.ga?a.ga|=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},Xc=Tc?function(a,b){a[Tc]&=~b}:function(a,b){void 0!==a.ga&&(a.ga&=~b)};
function Yc(a,b,c){return c?a|b:a&~b}
var Zc=Tc?function(a){return a[Tc]|0}:function(a){return a.ga|0},$c=Tc?function(a){return a[Tc]}:function(a){return a.ga},H=Tc?function(a,b){a[Tc]=b;
return a}:function(a,b){void 0!==a.ga?a.ga=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}});return a};
function ad(a){Wc(a,34);return a}
function bd(a,b){H(b,(a|0)&-14591)}
function cd(a,b){H(b,(a|34)&-14557)}
function dd(a){a=a>>14&1023;return 0===a?536870912:a}
;var ed={},fd={};function gd(a){return!(!a||"object"!==typeof a||a.pd!==fd)}
function hd(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var id;function jd(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=Zc(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;H(a,d|1);return!0}
var kd,ld=[];H(ld,55);kd=Object.freeze(ld);function md(a){if(a&2)throw Error();}
function nd(a,b,c){this.i=0;this.g=a;this.h=b;this.l=c}
nd.prototype.next=function(){if(this.i<this.g.length){var a=this.g[this.i++];return{done:!1,value:this.h?this.h.call(this.l,a):a}}return{done:!0,value:void 0}};
nd.prototype[Symbol.iterator]=function(){return new nd(this.g,this.h,this.l)};
Object.freeze(new function(){});
Object.freeze(new function(){});var od;function pd(a){a=Error(a);Wb(a,"warning");return a}
;function qd(a){return a.displayName||a.name||"unknown type name"}
function rd(a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+Na(a)+": "+a);return a}
var wd=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function xd(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:wd.test(a)}
function yd(a,b){b=!!b;if(!xd(a))throw pd("int64");if("string"===typeof a)if(xd(a),b=Math.trunc(Number(a)),Number.isSafeInteger(b))a=String(b);else{if(b=a.indexOf("."),-1!==b&&(a=a.substring(0,b)),!zd(a)){if(16>a.length)Mc(Number(a));else if(Jc())a=BigInt(a),Kc=Number(a&BigInt(4294967295))>>>0,Lc=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);Lc=Kc=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Lc*=1E6,Kc=1E6*Kc+d,4294967296<=Kc&&(Lc+=Math.trunc(Kc/4294967296),
Lc>>>=0,Kc>>>=0);b&&(b=w(Nc(Kc,Lc)),a=b.next().value,b=b.next().value,Kc=a,Lc=b)}a=Qc()}}else if(b)xd(a),a=Math.trunc(a),Number.isSafeInteger(a)?a=String(a):(b=String(a),zd(b)?a=b:(Mc(a),a=Qc()));else if(xd(a),a=Math.trunc(a),!Number.isSafeInteger(a)){Mc(a);b=Kc;c=Lc;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function Ad(a){return null==a?a:yd(a)}
function zd(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}
function Bd(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Cd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+qd(b)+" but got "+(a&&qd(a.constructor)));return a}
function Dd(a,b,c,d){if(null!=a&&"object"===typeof a&&a.Tb===ed)return a;if(!Array.isArray(a))return c?d&2?(a=b[Uc])?b=a:(a=new b,ad(a.s),b=b[Uc]=a):b=new b:b=void 0,b;var e=c=Zc(a);0===e&&(e|=d&32);e|=d&2;e!==c&&H(a,e);return new b(a)}
;var Ed;
function I(a,b,c){null==a&&(a=Ed);Ed=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");d=Zc(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(hd(c[f])){d|=256;b=f-(+!!(d&512)-1);if(1024<=b)throw Error("pvtlmt");d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(1024<b)throw Error("spvt");d=d&-16760833|(b&1023)<<
14}}}H(a,d);return a}
;var Fd=function(){try{var a=function(){return la(Map,[],this.constructor)};
y(a,Map);xc(new a);return!1}catch(b){return!0}}();
function Gd(){this.g=new Map}
r=Gd.prototype;r.get=function(a){return this.g.get(a)};
r.set=function(a,b){this.g.set(a,b);this.size=this.g.size;return this};
r.delete=function(a){a=this.g.delete(a);this.size=this.g.size;return a};
r.clear=function(){this.g.clear();this.size=this.g.size};
r.has=function(a){return this.g.has(a)};
r.entries=function(){return this.g.entries()};
r.keys=function(){return this.g.keys()};
r.values=function(){return this.g.values()};
r.forEach=function(a,b){return this.g.forEach(a,b)};
Gd.prototype[Symbol.iterator]=function(){return this.entries()};
var Hd=function(){function a(){return la(Map,[],this.constructor)}
if(Fd)return Object.setPrototypeOf(Gd.prototype,Map.prototype),Object.defineProperties(Gd.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Gd;y(a,Map);return a}();
function Id(a){return a}
function Jd(a,b,c,d){c=void 0===c?Id:c;d=void 0===d?Id:d;var e=Hd.call(this)||this;var f=Zc(a);f|=64;H(a,f);e.tb=f;e.Kb=b;e.lb=c;e.dc=e.Kb?Kd:d;for(var g=0;g<a.length;g++){var h=a[g],l=c(h[0],!1,!0),k=h[1];b?void 0===k&&(k=null):k=d(h[1],!1,!0,void 0,void 0,f);Hd.prototype.set.call(e,l,k)}return e}
y(Jd,Hd);function Ld(a){if(a.tb&2)throw Error("Cannot mutate an immutable Map");}
function Md(a,b){b=void 0===b?Nd:b;if(0!==a.size)return Od(a,b)}
function Od(a,b){b=void 0===b?Nd:b;var c=[];a=Hd.prototype.entries.call(a);for(var d;!(d=a.next()).done;)d=d.value,d[0]=b(d[0]),d[1]=b(d[1]),c.push(d);return c}
r=Jd.prototype;r.clear=function(){Ld(this);Hd.prototype.clear.call(this)};
r.delete=function(a){Ld(this);return Hd.prototype.delete.call(this,this.lb(a,!0,!1))};
r.entries=function(){var a=Array.from(Hd.prototype.keys.call(this));return new nd(a,Pd,this)};
r.keys=function(){return Hd.prototype.keys.call(this)};
r.values=function(){var a=Array.from(Hd.prototype.keys.call(this));return new nd(a,Jd.prototype.get,this)};
r.forEach=function(a,b){var c=this;Hd.prototype.forEach.call(this,function(d,e){a.call(b,c.get(e),e,c)})};
r.set=function(a,b){Ld(this);a=this.lb(a,!0,!1);return null==a?this:null==b?(Hd.prototype.delete.call(this,a),this):Hd.prototype.set.call(this,a,this.dc(b,!0,!0,this.Kb,!1,this.tb))};
r.has=function(a){return Hd.prototype.has.call(this,this.lb(a,!1,!1))};
r.get=function(a){a=this.lb(a,!1,!1);var b=Hd.prototype.get.call(this,a);if(void 0!==b){var c=this.Kb;return c?(c=this.dc(b,!1,!0,c,this.te,this.tb),c!==b&&Hd.prototype.set.call(this,a,c),c):b}};
Jd.prototype[Symbol.iterator]=function(){return this.entries()};
Jd.prototype.toJSON=void 0;Jd.prototype.pd=fd;function Kd(a,b,c,d,e,f){b&&Cd(a,d);a=Dd(a,d,c,f);e&&(a=Qd(a));f&2&&Zc(a.s);return a}
function Nd(a){return a}
function Pd(a){return[a,this.get(a)]}
;function Rd(a,b){return Sd(b)}
function Sd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(jd(a,void 0,0))return}else{if(Hc&&null!=a&&a instanceof Uint8Array){if(Ic){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Gc(a);return a}if(a instanceof Jd)return Md(a)}}return a}
;function Td(a,b,c){a=Rc(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Ud(a,b,c,d,e){if(null!=a){if(Array.isArray(a))a=jd(a,void 0,0)?void 0:e&&Zc(a)&2?a:Vd(a,b,c,void 0!==d,e);else if(hd(a)){var f={},g;for(g in a)f[g]=Ud(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function Vd(a,b,c,d,e){var f=d||c?Zc(a):0;d=d?!!(f&32):void 0;a=Rc(a);for(var g=0;g<a.length;g++)a[g]=Ud(a[g],b,c,d,e);c&&c(f,a);return a}
function Wd(a){return Ud(a,Xd,void 0,void 0,!1)}
function Xd(a){return a.Tb===ed?a.toJSON():a instanceof Jd?Md(a,Wd):Sd(a)}
;function Yd(a,b,c){c=void 0===c?cd:c;if(null!=a){if(Hc&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Zc(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?H(a,(d|34)&-12293):Vd(a,Yd,d&4?cd:c,!0,!0)}a.Tb===ed?(c=a.s,d=$c(c),a=d&2?a:Zd(a,c,d,!0)):a instanceof Jd&&!(a.tb&2)&&(c=ad(Od(a,Yd)),a=new Jd(c,a.Kb,a.lb,a.dc));return a}}
function Zd(a,b,c,d){a=a.constructor;b=$d(b,c,d);Zc(b);Ed=b;b=new a(b);Ed=void 0;return b}
function $d(a,b,c){var d=c||b&2?cd:bd,e=!!(b&32);a=Td(a,b,function(f){return Yd(f,e,d)});
Wc(a,32|(c?2:0));return a}
function Qd(a){var b=a.s,c=$c(b);return c&2?Zd(a,b,c,!1):a}
;function ae(a,b){a=a.s;return be(a,$c(a),b)}
function ce(a,b,c,d){b=d+(+!!(b&512)-1);if(!(0>b||b>=a.length||b>=c))return a[b]}
function be(a,b,c,d){if(-1===c)return null;var e=dd(b);if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],null!=d)){if(ce(a,b,e,c)&&null!=Vc){var g;a=null!=(g=od)?g:od={};g=a[Vc]||0;4<=g||(a[Vc]=g+1,g=Error(),Wb(g,"incident"),jc(g))}return d}return ce(a,b,e,c)}}
function de(a,b,c){var d=a.s,e=$c(d);md(e);ee(d,e,b,c);return a}
function ee(a,b,c,d,e){hd(d);var f=dd(b);if(c>=f||e){var g=b;if(b&256)e=a[a.length-1];else{if(null==d)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&H(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function fe(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function ge(a,b,c,d){a=a.s;var e=$c(a);md(e);(c=he(a,e,c))&&c!==b&&null!=d&&(e=ee(a,e,c));ee(a,e,b,d)}
function he(a,b,c){for(var d=0,e=0;e<c.length;e++){var f=c[e];null!=be(a,b,f)&&(0!==d&&(b=ee(a,b,d)),d=f)}return d}
function ie(a,b,c){var d=void 0===d?!1:d;var e=a.s;var f=$c(e),g=be(e,f,c,d);b=Dd(g,b,!1,f);b!==g&&null!=b&&ee(e,f,c,b,d);e=b;if(null==e)return e;a=a.s;f=$c(a);f&2||(g=Qd(e),g!==e&&(e=g,ee(a,f,c,e,d)));return e}
function J(a,b,c,d){null!=d?Cd(d,b):d=void 0;return de(a,c,d)}
function je(a,b,c,d,e){null!=e?Cd(e,b):e=void 0;ge(a,c,d,e)}
function ke(a,b){a=Yc(a,2,!!(2&b));a=Yc(a,32,!0);return a=Yc(a,2048,!1)}
function le(a,b){var c=!0;32&b&&c||(a=Yc(a,32,!1));return a}
function me(a,b,c,d){a=a.s;var e=$c(a);md(e);var f,g=!!(2&e),h=g?1:2,l=1===h;h=2===h;f&&(f=!g);g=be(a,e,b);g=Array.isArray(g)?g:kd;var k=Zc(g),m=!!(4&k);if(!m){var n=k;0===n&&(n=ke(n,e));n=Yc(n,1,!0);k=g;var q=e,p=!!(2&n);p&&(q=Yc(q,2,!0));for(var t=!p,u=!0,z=0,G=0;z<k.length;z++){var P=Dd(k[z],c,!1,q);if(P instanceof c){if(!p){var U=!!(Zc(P.s)&2);t&&(t=!U);u&&(u=U)}k[G++]=P}}G<z&&(k.length=G);n=Yc(n,4,!0);n=Yc(n,16,u);n=Yc(n,8,t);H(k,n);p&&Object.freeze(k);k=n}n=!!(8&k)||l&&!g.length;if(f&&!n){fe(k)&&
(g=Rc(g),k=ke(k,e),e=ee(a,e,b,g));f=g;for(n=0;n<f.length;n++)q=f[n],p=Qd(q),q!==p&&(f[n]=p);k=Yc(k,8,!0);k=Yc(k,16,!f.length);H(f,k)}fe(k)||(f=k,l?(n=!!(32&k),n||(g=Rc(g),f=0,e=ee(a,e,b,g)),k=Yc(k,!g.length||16&k&&(!m||n)?2:2048,!0)):k=le(k,e),k!==f&&H(g,k),l&&Object.freeze(g));h&&fe(k)&&(g=Rc(g),k=ke(k,e),k=le(k,e),H(g,k),ee(a,e,b,g));b=g;c=null!=d?Cd(d,c):new c;b.push(c);Zc(c.s)&2?Xc(b,8):Xc(b,16)}
function ne(a,b){var c=a.s;b=he(c,$c(c),oe)===b?b:-1;a=ae(a,b);return null==a||"string"===typeof a?a:void 0}
function pe(a,b,c){if(null!=c){if("number"!==typeof c)throw pd("int32");if(!Number.isFinite(c))throw pd("int32");c|=0}de(a,b,c)}
function K(a,b,c){return de(a,b,Bd(c))}
function qe(a,b,c){if(null!=c){if(!Number.isFinite(c))throw pd("enum");c|=0}return de(a,b,c)}
;function L(a,b,c){this.s=I(a,b,c)}
L.prototype.toJSON=function(){if(id)var a=re(this,this.s,!1);else a=Vd(this.s,Xd,void 0,void 0,!1),a=re(this,a,!0);return a};
function se(a){id=!0;try{return JSON.stringify(a.toJSON(),Rd)}finally{id=!1}}
L.prototype.clone=function(){var a=this.s;return Zd(this,a,$c(a),!1)};
L.prototype.Tb=ed;L.prototype.toString=function(){return re(this,this.s,!1).toString()};
function re(a,b,c){var d=lc?void 0:a.constructor.ka;var e=$c(c?a.s:b);a=b.length;if(!a)return b;var f;if(hd(c=b[a-1])){a:{var g=c;var h={},l=!1,k;for(k in g){var m=g[k];if(Array.isArray(m)){var n=m;if(jd(m,d,+k)||gd(m)&&0===m.size)m=null;m!=n&&(l=!0)}null!=m?h[k]=m:l=!0}if(l){for(var q in h){g=h;break a}g=null}}g!=c&&(f=!0);a--}for(k=+!!(e&512)-1;0<a;a--){q=a-1;c=b[q];q-=k;if(!(null==c||jd(c,d,q)||gd(c)&&0===c.size))break;var p=!0}if(!f&&!p)return b;b=Array.prototype.slice.call(b,0,a);g&&b.push(g);
return b}
;var te=window;qb("csi.gstatic.com");qb("googleads.g.doubleclick.net");qb("partner.googleadservices.com");qb("pubads.g.doubleclick.net");qb("securepubads.g.doubleclick.net");qb("tpc.googlesyndication.com");function ue(){}
function ve(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function we(a,b){this.width=a;this.height=b}
r=we.prototype;r.clone=function(){return new we(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function xe(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function ye(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function ze(a){var b=Ae;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Be(){var a=[];ze(function(b){a.push(b)});
return a}
var Ae={Gd:"allow-forms",Hd:"allow-modals",Id:"allow-orientation-lock",Jd:"allow-pointer-lock",Kd:"allow-popups",Ld:"allow-popups-to-escape-sandbox",Md:"allow-presentation",Nd:"allow-same-origin",Od:"allow-scripts",Pd:"allow-top-navigation",Qd:"allow-top-navigation-by-user-activation"},Ce=ve(function(){return Be()});
function De(){var a=Ee(),b={};Cb(Ce(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Ee(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var Fe=(new Date).getTime();function Ge(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";0===a.indexOf("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function He(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=k=0}
function b(n){for(var q=g,p=0;64>p;p+=4)q[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=q[p-3]^q[p-8]^q[p-14]^q[p-16],q[p]=(n<<1|n>>>31)&4294967295;n=e[0];var t=e[1],u=e[2],z=e[3],G=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var P=z^t&(u^z);var U=1518500249}else P=t^u^z,U=1859775393;else 60>p?(P=t&u|z&(t|u),U=2400959708):(P=t^u^z,U=3395469782);P=((n<<5|n>>>27)&4294967295)+P+G+U+q[p]&4294967295;G=z;z=u;u=(t<<30|t>>>2)&4294967295;t=n;n=P}e[0]=e[0]+n&4294967295;e[1]=e[1]+t&4294967295;e[2]=
e[2]+u&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+G&4294967295}
function c(n,q){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],t=0,u=n.length;t<u;++t)p.push(n.charCodeAt(t));n=p}q||(q=n.length);p=0;if(0==k)for(;p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<q;)if(f[k++]=n[p++],m++,64==k)for(k=0,b(f);p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],q=8*m;56>k?c(h,56-k):c(h,64-(k-56));for(var p=63;56<=p;p--)f[p]=q&255,q>>>=8;b(f);for(p=q=0;5>p;p++)for(var t=24;0<=t;t-=8)n[q++]=e[p]>>t&255;return n}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var k,m;a();return{reset:a,update:c,digest:d,Xc:function(){for(var n=d(),q="",p=0;p<n.length;p++)q+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return q}}}
;function Ie(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,Je(Ge(d),a,c||null)].join(" "):null}
function Je(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],Cb(d,function(h){e.push(h)}),Ke(e.join(" "));
var f=[],g=[];Cb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];Cb(d,function(h){e.push(h)});
a=Ke(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ke(a){var b=He();b.update(a);return b.Xc().toLowerCase()}
;var Le={};function Me(a){this.g=a||{cookie:""}}
r=Me.prototype;r.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.g.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Qb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Ae;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Qb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=bb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Qb:0,path:b,domain:c});return d};
r.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=bb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ne=new Me("undefined"==typeof document?null:document);function Re(a){return!!Le.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Se(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new Me(document)).get(b));return a?Ie(a,c,d):null}
function Te(a){var b=void 0===b?!1:b;var c=Ge(String(C.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Re(e)&&(f=f||C.__1PSAPISID);if(f)e=!0;else{if("undefined"!==typeof document){var g=new Me(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");Re(e)&&(f=f||g.get("__Secure-1PAPISID"))}e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?
C.__SAPISID:C.__APISID,e||"undefined"===typeof document||(e=new Me(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Ie(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Re(b)&&((b=Se("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Se("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function Ue(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Ve(){this.ya=this.ya;this.l=this.l}
Ve.prototype.ya=!1;Ve.prototype.dispose=function(){this.ya||(this.ya=!0,this.qa())};
Ve.prototype.addOnDisposeCallback=function(a,b){this.ya?void 0!==b?a.call(b):a():(this.l||(this.l=[]),this.l.push(void 0!==b?Wa(a,b):a))};
Ve.prototype.qa=function(){if(this.l)for(;this.l.length;)this.l.shift()()};function We(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
We.prototype.stopPropagation=function(){this.i=!0};
We.prototype.preventDefault=function(){this.defaultPrevented=!0};var Xe=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Ye(a,b){We.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
Ya(Ye,We);var Ze={2:"touch",3:"pen",4:"mouse"};
Ye.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(Ac){a:{try{xc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ze[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&Ye.la.preventDefault.call(this)};
Ye.prototype.stopPropagation=function(){Ye.la.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
Ye.prototype.preventDefault=function(){Ye.la.preventDefault.call(this);var a=this.h;a.preventDefault?a.preventDefault():a.returnValue=!1};var $e="closure_listenable_"+(1E6*Math.random()|0);var af=0;function bf(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Bb=e;this.key=++af;this.pb=this.wb=!1}
function cf(a){a.pb=!0;a.listener=null;a.proxy=null;a.src=null;a.Bb=null}
;function df(a){this.src=a;this.listeners={};this.g=0}
df.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=ef(a,b,d,e);-1<g?(b=a[g],c||(b.wb=!1)):(b=new bf(b,this.src,f,!!d,e),b.wb=c,a.push(b));return b};
df.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ef(e,b,c,d);return-1<b?(cf(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function ff(a,b){var c=b.type;c in a.listeners&&Db(a.listeners[c],b)&&(cf(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))}
function ef(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.pb&&f.listener==b&&f.capture==!!c&&f.Bb==d)return e}return-1}
;var gf="closure_lm_"+(1E6*Math.random()|0),hf={},jf=0;function kf(a,b,c,d,e){if(d&&d.once)lf(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)kf(a,b[f],c,d,e);else c=mf(c),a&&a[$e]?a.Ia(b,c,Qa(d)?!!d.capture:!!d,e):nf(a,b,c,!1,d,e)}
function nf(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=of(a);h||(a[gf]=h=new df(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=pf();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Xe||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(qf(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");jf++}}
function pf(){function a(c){return b.call(a.src,a.listener,c)}
var b=rf;return a}
function lf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)lf(a,b[f],c,d,e);else c=mf(c),a&&a[$e]?a.g.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):nf(a,b,c,!0,d,e)}
function sf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)sf(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=mf(c),a&&a[$e])?a.g.remove(String(b),c,d,e):a&&(a=of(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ef(b,c,d,e)),(c=-1<a?b[a]:null)&&tf(c))}
function tf(a){if("number"!==typeof a&&a&&!a.pb){var b=a.src;if(b&&b[$e])ff(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(qf(c),d):b.addListener&&b.removeListener&&b.removeListener(d);jf--;(c=of(b))?(ff(c,a),0==c.g&&(c.src=null,b[gf]=null)):cf(a)}}}
function qf(a){return a in hf?hf[a]:hf[a]="on"+a}
function rf(a,b){if(a.pb)a=!0;else{b=new Ye(b,this);var c=a.listener,d=a.Bb||a.src;a.wb&&tf(a);a=c.call(d,b)}return a}
function of(a){a=a[gf];return a instanceof df?a:null}
var uf="__closure_events_fn_"+(1E9*Math.random()>>>0);function mf(a){if("function"===typeof a)return a;a[uf]||(a[uf]=function(b){return a.handleEvent(b)});
return a[uf]}
;function vf(){Ve.call(this);this.g=new df(this);this.O=this;this.G=null}
Ya(vf,Ve);vf.prototype[$e]=!0;vf.prototype.addEventListener=function(a,b,c,d){kf(this,a,b,c,d)};
vf.prototype.removeEventListener=function(a,b,c,d){sf(this,a,b,c,d)};
function wf(a,b){var c=a.G;if(c){var d=[];for(var e=1;c;c=c.G)d.push(c),++e}a=a.O;c=b.type||b;"string"===typeof b?b=new We(b,a):b instanceof We?b.target=b.target||a:(e=b,b=new We(c,a),Nb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&0<=f;f--){var g=b.g=d[f];e=xf(g,c,!0,b)&&e}b.i||(g=b.g=a,e=xf(g,c,!0,b)&&e,b.i||(e=xf(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=xf(g,c,!1,b)&&e}
vf.prototype.qa=function(){vf.la.qa.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,cf(d[e]);delete a.listeners[c];a.g--}}this.G=null};
vf.prototype.Ia=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function xf(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.pb&&g.capture==c){var h=g.listener,l=g.Bb||g.src;g.wb&&ff(a.g,g);e=!1!==h.call(l,d)&&e}}return e&&!d.defaultPrevented}
;function yf(a){vf.call(this);var b=this;this.K=this.i=0;this.ha=null!=a?a:{oa:function(e,f){return setTimeout(e,f)},
ba:function(e){clearTimeout(e)}};
var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return B(function(e){return A(e,zf(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.K||Af(this)}
y(yf,vf);function Bf(){var a=Cf;yf.g||(yf.g=new yf(a));return yf.g}
yf.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.ha.ba(this.K);delete yf.g};
yf.prototype.ca=function(){return this.h};
function Af(a){a.K=a.ha.oa(function(){var b;return B(function(c){if(1==c.g)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.B(3):A(c,zf(a),3):A(c,zf(a),3);Af(a);c.g=0})},3E4)}
function zf(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.i=a.ha.oa(function(){d.abort()},b||2E4)),A(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.O=[h.i];h.o=0;h.u=0;a.u=void 0;a.i&&(a.ha.ba(a.i),a.i=0);g!==a.h&&(a.h=g,a.h?wf(a,"networkstatus-online"):wf(a,"networkstatus-offline"));c(g);ya(h);break;case 2:xa(h),g=!1,h.B(3)}})})}
;function Df(){this.data=[];this.g=-1}
Df.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
Df.prototype.get=function(a){return!!this.data[a]};
function Ef(a){-1===a.g&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function Ff(a){this.s=I(a)}
y(Ff,L);function Gf(a){this.s=I(a)}
y(Gf,L);function Hf(a,b){return K(a,2,b)}
function If(a,b){return K(a,3,b)}
function Jf(a,b){return K(a,4,b)}
function Kf(a,b){return K(a,5,b)}
function Lf(a,b){return K(a,9,b)}
function Mf(a,b){var c=a.s,d=$c(c);md(d);if(null==b)ee(c,d,10);else{if(!Array.isArray(b))throw pd();var e=Zc(b),f=e,g=!!(2&e)||!!(2048&e),h=g||Object.isFrozen(b),l;if(l=!h)l=!1;for(var k=!0,m=!0,n=0;n<b.length;n++){var q=b[n];Cd(q,Ff);g||(q=!!(Zc(q.s)&2),k&&(k=!q),m&&(m=q))}g||(e=Yc(e,5,!0),e=Yc(e,8,k),e=Yc(e,16,m));if(l||h&&e!==f)b=Rc(b),f=0,e=ke(e,d),e=le(e,d);e!==f&&H(b,e);ee(c,d,10,b)}return a}
function Nf(a,b){return de(a,11,null==b?b:rd(b))}
function Of(a,b){return K(a,1,b)}
function Pf(a,b){return de(a,7,null==b?b:rd(b))}
Gf.ka=[10,6];var Qf="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Rf(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function Sf(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function Tf(){var a=window;if(!Sf(a))return null;var b=Rf(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Qf).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function Uf(a){var b;return Nf(Mf(Kf(Hf(Of(Jf(Pf(Lf(If(new Gf,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new Ff;d=K(d,1,c.brand);return K(d,2,c.version)}))||[]),a.wow64||!1)}
function Vf(){var a,b;return null!=(b=null==(a=Tf())?void 0:a.then(function(c){return Uf(c)}))?b:null}
;function Wf(a,b){this.i=a;this.l=b;this.h=0;this.g=null}
Wf.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function Xf(a,b){a.l(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)}
;var Yf;function Zf(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=xe();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Wa(function(l){if(("*"==h||l.origin==h)&&l.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.kc;c.kc=null;e()}};
return function(e){d.next={kc:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function $f(){this.h=this.g=null}
$f.prototype.add=function(a,b){var c=ag.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
$f.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var ag=new Wf(function(){return new bg},function(a){return a.reset()});
function bg(){this.next=this.scope=this.g=null}
bg.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
bg.prototype.reset=function(){this.next=this.scope=this.g=null};var cg,dg=!1,eg=new $f;function fg(a,b){cg||gg();dg||(cg(),dg=!0);eg.add(a,b)}
function gg(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);cg=function(){a.then(hg)}}else cg=function(){var b=hg;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&C.Window.prototype.setImmediate==C.setImmediate?(Yf||(Yf=Zf()),Yf(b)):C.setImmediate(b)}}
function hg(){for(var a;a=eg.remove();){try{a.g.call(a.scope)}catch(b){jc(b)}Xf(ag,a)}dg=!1}
;function ig(){this.blockSize=-1}
;function jg(){this.blockSize=-1;this.blockSize=64;this.g=[];this.o=[];this.u=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.l=this.h=0;this.reset()}
Ya(jg,ig);jg.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.l=this.h=0};
function kg(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],l=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var k=1518500249}else f=c^g^h,k=1859775393;else 60>e?(f=c&g|h&(c|g),k=2400959708):
(f=c^g^h,k=3395469782);f=(b<<5|b>>>27)+f+l+k+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+l&4294967295}
jg.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.h;d<b;){if(0==f)for(;d<=c;)kg(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){kg(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){kg(this,e);f=0;break}}this.h=f;this.l+=b}};
jg.prototype.digest=function(){var a=[],b=8*this.l;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.blockSize-(this.h-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;kg(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function lg(){}
lg.prototype.next=function(){return mg};
var mg={done:!0,value:void 0};lg.prototype.Oa=function(){return this};function ng(a){if(a instanceof og||a instanceof pg||a instanceof qg)return a;if("function"==typeof a.next)return new og(function(){return a});
if("function"==typeof a[Symbol.iterator])return new og(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Oa)return new og(function(){return a.Oa()});
throw Error("Not an iterator or iterable.");}
function og(a){this.g=a}
og.prototype.Oa=function(){return new pg(this.g())};
og.prototype[Symbol.iterator]=function(){return new qg(this.g())};
og.prototype.h=function(){return new qg(this.g())};
function pg(a){this.g=a}
y(pg,lg);pg.prototype.next=function(){return this.g.next()};
pg.prototype[Symbol.iterator]=function(){return new qg(this.g)};
pg.prototype.h=function(){return new qg(this.g)};
function qg(a){og.call(this,function(){return a});
this.i=a}
y(qg,og);qg.prototype.next=function(){return this.i.next()};var rg=C.JSON.stringify;function sg(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function tg(a){this.g=0;this.G=void 0;this.l=this.h=this.i=null;this.o=this.u=!1;if(a!=ue)try{var b=this;a.call(void 0,function(c){ug(b,2,c)},function(c){ug(b,3,c)})}catch(c){ug(this,3,c)}}
function vg(){this.next=this.context=this.h=this.i=this.g=null;this.l=!1}
vg.prototype.reset=function(){this.context=this.h=this.i=this.g=null;this.l=!1};
var wg=new Wf(function(){return new vg},function(a){a.reset()});
function xg(a,b,c){var d=wg.get();d.i=a;d.h=b;d.context=c;return d}
tg.prototype.then=function(a,b,c){return yg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
tg.prototype.$goog_Thenable=!0;tg.prototype.cancel=function(a){if(0==this.g){var b=new zg(a);fg(function(){Ag(this,b)},this)}};
function Ag(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.l||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?Ag(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Bg(c),Cg(c,e,3,b)))}a.i=null}else ug(a,3,b)}
function Dg(a,b){a.h||2!=a.g&&3!=a.g||Eg(a);a.l?a.l.next=b:a.h=b;a.l=b}
function yg(a,b,c,d){var e=xg(null,null,null);e.g=new tg(function(f,g){e.i=b?function(h){try{var l=b.call(d,h);f(l)}catch(k){g(k)}}:f;
e.h=c?function(h){try{var l=c.call(d,h);void 0===l&&h instanceof zg?g(h):f(l)}catch(k){g(k)}}:g});
e.g.i=a;Dg(a,e);return e.g}
tg.prototype.O=function(a){this.g=0;ug(this,2,a)};
tg.prototype.ma=function(a){this.g=0;ug(this,3,a)};
function ug(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.O,f=a.ma;if(d instanceof tg){Dg(d,xg(e||ue,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(k){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var l=d.then;if("function"===typeof l){Fg(d,l,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}}g||(a.G=c,a.g=b,a.i=null,Eg(a),3!=b||c instanceof zg||Gg(a,c))}}
function Fg(a,b,c,d,e){function f(l){h||(h=!0,d.call(e,l))}
function g(l){h||(h=!0,c.call(e,l))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Eg(a){a.u||(a.u=!0,fg(a.K,a))}
function Bg(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.l=null);return b}
tg.prototype.K=function(){for(var a;a=Bg(this);)Cg(this,a,this.g,this.G);this.u=!1};
function Cg(a,b,c,d){if(3==c&&b.h&&!b.l)for(;a&&a.o;a=a.i)a.o=!1;if(b.g)b.g.i=null,Hg(b,c,d);else try{b.l?b.i.call(b.context):Hg(b,c,d)}catch(e){Ig.call(null,e)}Xf(wg,b)}
function Hg(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Gg(a,b){a.o=!0;fg(function(){a.o&&Ig.call(null,b)})}
var Ig=jc;function zg(a){$a.call(this,a)}
Ya(zg,$a);zg.prototype.name="cancel";function M(a){Ve.call(this);this.u=1;this.i=[];this.o=0;this.g=[];this.h={};this.G=!!a}
Ya(M,Ve);r=M.prototype;r.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.u;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.u=e+3;d.push(e);return e};
function Jg(a,b,c){var d=Kg;if(a=d.h[a]){var e=d.g;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.rb(a)}}
r.rb=function(a){var b=this.g[a];if(b){var c=this.h[b];0!=this.o?(this.i.push(a),this.g[a+1]=function(){}):(c&&Db(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
r.Za=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.G)for(e=0;e<c.length;e++){var g=c[e];Lg(this.g[g+1],this.g[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.ya;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.o--,0<this.i.length&&0==this.o)for(;c=this.i.pop();)this.rb(c)}}return 0!=e}return!1};
function Lg(a,b,c){fg(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.rb,this),delete this.h[a])}else this.g.length=0,this.h={}};
r.qa=function(){M.la.qa.call(this);this.clear();this.i.length=0};function Mg(a){this.g=a}
Mg.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,rg(b))};
Mg.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Mg.prototype.remove=function(a){this.g.remove(a)};function Ng(a){this.g=a}
Ya(Ng,Mg);function Og(a){this.data=a}
function Pg(a){return void 0===a||a instanceof Og?a:new Og(a)}
Ng.prototype.set=function(a,b){Ng.la.set.call(this,a,Pg(b))};
Ng.prototype.h=function(a){a=Ng.la.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ng.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Qg(a){this.g=a}
Ya(Qg,Ng);Qg.prototype.set=function(a,b,c){if(b=Pg(b)){if(c){if(c<Xa()){Qg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Xa()}Qg.la.set.call(this,a,b)};
Qg.prototype.h=function(a){var b=Qg.la.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Xa()||c&&c>Xa())Qg.prototype.remove.call(this,a);else return b}};function Rg(){}
;function Sg(){}
Ya(Sg,Rg);Sg.prototype[Symbol.iterator]=function(){return ng(this.Oa(!0)).h()};
Sg.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Tg(a){this.g=a;this.h=null}
Ya(Tg,Sg);r=Tg.prototype;r.set=function(a,b){Ug(this);try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){Ug(this);a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){Ug(this);this.g.removeItem(a)};
r.Oa=function(a){Ug(this);var b=0,c=this.g,d=new lg;d.next=function(){if(b>=c.length)return mg;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
r.clear=function(){Ug(this);this.g.clear()};
r.key=function(a){Ug(this);return this.g.key(a)};
function Ug(a){if(null==a.g)throw Error("Storage mechanism: Storage unavailable");var b;(null!=(b=a.h)?b:a.h=Vg(a.g))||jc(Error("Storage mechanism: Storage unavailable"))}
function Vg(a){if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return b instanceof DOMException&&("QuotaExceededError"===b.name||22===b.code||1014===b.code||"NS_ERROR_DOM_QUOTA_REACHED"===b.name)&&a&&0!==a.length}}
;function Wg(){var a=null;try{a=C.localStorage||null}catch(b){}Tg.call(this,a)}
Ya(Wg,Tg);function Xg(a,b){this.h=a;this.g=b+"::"}
Ya(Xg,Sg);Xg.prototype.set=function(a,b){this.h.set(this.g+a,b)};
Xg.prototype.get=function(a){return this.h.get(this.g+a)};
Xg.prototype.remove=function(a){this.h.remove(this.g+a)};
Xg.prototype.Oa=function(a){var b=this.h[Symbol.iterator](),c=this,d=new lg;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.g.length):c.h.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},Yg="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.ac=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Zg={Pa:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
oc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},$g={Pa:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
oc:function(a){return[].concat.apply([],a)}};
N.zd=function(){Yg?(N.Na=Uint8Array,N.na=Uint16Array,N.Mc=Int32Array,N.assign(N,Zg)):(N.Na=Array,N.na=Array,N.Mc=Array,N.assign(N,$g))};
N.zd();var ah=!0;try{new Uint8Array(1)}catch(a){ah=!1}
function bh(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new N.Na(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var ch={};ch=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var dh={},eh,fh=[],gh=0;256>gh;gh++){eh=gh;for(var hh=0;8>hh;hh++)eh=eh&1?3988292384^eh>>>1:eh>>>1;fh[gh]=eh}dh=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^fh[(a^b[d])&255];return a^-1};var ih={};ih={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function jh(a){for(var b=a.length;0<=--b;)a[b]=0}
var kh=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],lh=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],mh=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],nh=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],oh=Array(576);jh(oh);var ph=Array(60);jh(ph);var qh=Array(512);jh(qh);var rh=Array(256);jh(rh);var sh=Array(29);jh(sh);var th=Array(30);jh(th);function uh(a,b,c,d,e){this.Ic=a;this.bd=b;this.ad=c;this.Yc=d;this.td=e;this.sc=a&&a.length}
var vh,wh,xh;function yh(a,b){this.mc=a;this.Wa=0;this.Ba=b}
function zh(a,b){a.L[a.pending++]=b&255;a.L[a.pending++]=b>>>8&255}
function Ah(a,b,c){a.P>16-c?(a.V|=b<<a.P&65535,zh(a,a.V),a.V=b>>16-a.P,a.P+=c-16):(a.V|=b<<a.P&65535,a.P+=c)}
function Bh(a,b,c){Ah(a,c[2*b],c[2*b+1])}
function Ch(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Dh(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Ch(d[e]++,e))}
function Eh(a){var b;for(b=0;286>b;b++)a.X[2*b]=0;for(b=0;30>b;b++)a.Ga[2*b]=0;for(b=0;19>b;b++)a.S[2*b]=0;a.X[512]=1;a.va=a.ab=0;a.da=a.matches=0}
function Fh(a){8<a.P?zh(a,a.V):0<a.P&&(a.L[a.pending++]=a.V);a.V=0;a.P=0}
function Gh(a,b,c){Fh(a);zh(a,c);zh(a,~c);N.Pa(a.L,a.window,b,c,a.pending);a.pending+=c}
function Hh(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Ih(a,b,c){for(var d=a.M[c],e=c<<1;e<=a.ta;){e<a.ta&&Hh(b,a.M[e+1],a.M[e],a.depth)&&e++;if(Hh(b,d,a.M[e],a.depth))break;a.M[c]=a.M[e];c=e;e<<=1}a.M[c]=d}
function Jh(a,b,c){var d=0;if(0!==a.da){do{var e=a.L[a.ib+2*d]<<8|a.L[a.ib+2*d+1];var f=a.L[a.Pb+d];d++;if(0===e)Bh(a,f,b);else{var g=rh[f];Bh(a,g+256+1,b);var h=kh[g];0!==h&&(f-=sh[g],Ah(a,f,h));e--;g=256>e?qh[e]:qh[256+(e>>>7)];Bh(a,g,c);h=lh[g];0!==h&&(e-=th[g],Ah(a,e,h))}}while(d<a.da)}Bh(a,256,b)}
function Kh(a,b){var c=b.mc,d=b.Ba.Ic,e=b.Ba.sc,f=b.Ba.Yc,g,h=-1;a.ta=0;a.Sa=573;for(g=0;g<f;g++)0!==c[2*g]?(a.M[++a.ta]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.ta;){var l=a.M[++a.ta]=2>h?++h:0;c[2*l]=1;a.depth[l]=0;a.va--;e&&(a.ab-=d[2*l+1])}b.Wa=h;for(g=a.ta>>1;1<=g;g--)Ih(a,c,g);l=f;do g=a.M[1],a.M[1]=a.M[a.ta--],Ih(a,c,1),d=a.M[1],a.M[--a.Sa]=g,a.M[--a.Sa]=d,c[2*l]=c[2*g]+c[2*d],a.depth[l]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=l,a.M[1]=l++,Ih(a,c,1);while(2<=a.ta);a.M[--a.Sa]=
a.M[1];g=b.mc;l=b.Wa;d=b.Ba.Ic;e=b.Ba.sc;f=b.Ba.bd;var k=b.Ba.ad,m=b.Ba.td,n,q=0;for(n=0;15>=n;n++)a.pa[n]=0;g[2*a.M[a.Sa]+1]=0;for(b=a.Sa+1;573>b;b++){var p=a.M[b];n=g[2*g[2*p+1]+1]+1;n>m&&(n=m,q++);g[2*p+1]=n;if(!(p>l)){a.pa[n]++;var t=0;p>=k&&(t=f[p-k]);var u=g[2*p];a.va+=u*(n+t);e&&(a.ab+=u*(d[2*p+1]+t))}}if(0!==q){do{for(n=m-1;0===a.pa[n];)n--;a.pa[n]--;a.pa[n+1]+=2;a.pa[m]--;q-=2}while(0<q);for(n=m;0!==n;n--)for(p=a.pa[n];0!==p;)d=a.M[--b],d>l||(g[2*d+1]!==n&&(a.va+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),p--)}Dh(c,h,a.pa)}
function mi(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;0===f&&(h=138,l=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var k=f;f=b[2*(d+1)+1];++g<h&&k===f||(g<l?a.S[2*k]+=g:0!==k?(k!==e&&a.S[2*k]++,a.S[32]++):10>=g?a.S[34]++:a.S[36]++,g=0,e=k,0===f?(h=138,l=3):k===f?(h=6,l=3):(h=7,l=4))}}
function ni(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;0===f&&(h=138,l=3);for(d=0;d<=c;d++){var k=f;f=b[2*(d+1)+1];if(!(++g<h&&k===f)){if(g<l){do Bh(a,k,a.S);while(0!==--g)}else 0!==k?(k!==e&&(Bh(a,k,a.S),g--),Bh(a,16,a.S),Ah(a,g-3,2)):10>=g?(Bh(a,17,a.S),Ah(a,g-3,3)):(Bh(a,18,a.S),Ah(a,g-11,7));g=0;e=k;0===f?(h=138,l=3):k===f?(h=6,l=3):(h=7,l=4)}}}
function oi(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.X[2*c])return 0;if(0!==a.X[18]||0!==a.X[20]||0!==a.X[26])return 1;for(c=32;256>c;c++)if(0!==a.X[2*c])return 1;return 0}
var pi=!1;function qi(a,b,c){a.L[a.ib+2*a.da]=b>>>8&255;a.L[a.ib+2*a.da+1]=b&255;a.L[a.Pb+a.da]=c&255;a.da++;0===b?a.X[2*c]++:(a.matches++,b--,a.X[2*(rh[c]+256+1)]++,a.Ga[2*(256>b?qh[b]:qh[256+(b>>>7)])]++);return a.da===a.nb-1}
;function ri(a,b){a.msg=ih[b];return b}
function si(a){for(var b=a.length;0<=--b;)a[b]=0}
function ti(a){var b=a.state,c=b.pending;c>a.F&&(c=a.F);0!==c&&(N.Pa(a.output,b.L,b.ob,c,a.Xa),a.Xa+=c,b.ob+=c,a.cc+=c,a.F-=c,b.pending-=c,0===b.pending&&(b.ob=0))}
function ui(a,b){var c=0<=a.Z?a.Z:-1,d=a.j-a.Z,e=0;if(0<a.level){2===a.C.Lb&&(a.C.Lb=oi(a));Kh(a,a.Db);Kh(a,a.zb);mi(a,a.X,a.Db.Wa);mi(a,a.Ga,a.zb.Wa);Kh(a,a.ic);for(e=18;3<=e&&0===a.S[2*nh[e]+1];e--);a.va+=3*(e+1)+14;var f=a.va+3+7>>>3;var g=a.ab+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Ah(a,b?1:0,3),Gh(a,c,d);else if(4===a.strategy||g===f)Ah(a,2+(b?1:0),3),Jh(a,oh,ph);else{Ah(a,4+(b?1:0),3);c=a.Db.Wa+1;d=a.zb.Wa+1;e+=1;Ah(a,c-257,5);Ah(a,d-1,5);Ah(a,e-4,4);for(f=0;f<e;f++)Ah(a,a.S[2*nh[f]+
1],3);ni(a,a.X,c-1);ni(a,a.Ga,d-1);Jh(a,a.X,a.Ga)}Eh(a);b&&Fh(a);a.Z=a.j;ti(a.C)}
function Q(a,b){a.L[a.pending++]=b}
function vi(a,b){a.L[a.pending++]=b>>>8&255;a.L[a.pending++]=b&255}
function wi(a,b){var c=a.zc,d=a.j,e=a.aa,f=a.Ac,g=a.j>a.T-262?a.j-(a.T-262):0,h=a.window,l=a.Da,k=a.ja,m=a.j+258,n=h[d+e-1],q=h[d+e];a.aa>=a.qc&&(c>>=2);f>a.m&&(f=a.m);do{var p=b;if(h[p+e]===q&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.Va=b;e=p;if(p>=f)break;n=h[d+e-1];q=h[d+e]}}}while((b=k[b&l])>g&&0!==--c);return e<=
a.m?e:a.m}
function xi(a){var b=a.T,c;do{var d=a.Kc-a.m-a.j;if(a.j>=b+(b-262)){N.Pa(a.window,a.window,b,b,0);a.Va-=b;a.j-=b;a.Z-=b;var e=c=a.Cb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.ja[--e],a.ja[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.C.U)break;e=a.C;c=a.window;f=a.j+a.m;var g=e.U;g>d&&(g=d);0===g?c=0:(e.U-=g,N.Pa(c,e.input,e.La,g,f),1===e.state.wrap?e.A=ch(e.A,c,g,f):2===e.state.wrap&&(e.A=dh(e.A,c,g,f)),e.La+=g,e.Ma+=g,c=g);a.m+=c;if(3<=a.m+a.Y)for(d=a.j-a.Y,a.D=a.window[d],a.D=
(a.D<<a.sa^a.window[d+1])&a.ra;a.Y&&!(a.D=(a.D<<a.sa^a.window[d+3-1])&a.ra,a.ja[d&a.Da]=a.head[a.D],a.head[a.D]=d,d++,a.Y--,3>a.m+a.Y););}while(262>a.m&&0!==a.C.U)}
function yi(a,b){for(var c;;){if(262>a.m){xi(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.sa^a.window[a.j+3-1])&a.ra,c=a.ja[a.j&a.Da]=a.head[a.D],a.head[a.D]=a.j);0!==c&&a.j-c<=a.T-262&&(a.H=wi(a,c));if(3<=a.H)if(c=qi(a,a.j-a.Va,a.H-3),a.m-=a.H,a.H<=a.Rb&&3<=a.m){a.H--;do a.j++,a.D=(a.D<<a.sa^a.window[a.j+3-1])&a.ra,a.ja[a.j&a.Da]=a.head[a.D],a.head[a.D]=a.j;while(0!==--a.H);a.j++}else a.j+=a.H,a.H=0,a.D=a.window[a.j],a.D=(a.D<<a.sa^a.window[a.j+1])&a.ra;else c=qi(a,0,a.window[a.j]),
a.m--,a.j++;if(c&&(ui(a,!1),0===a.C.F))return 1}a.Y=2>a.j?a.j:2;return 4===b?(ui(a,!0),0===a.C.F?3:4):a.da&&(ui(a,!1),0===a.C.F)?1:2}
function zi(a,b){for(var c,d;;){if(262>a.m){xi(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.sa^a.window[a.j+3-1])&a.ra,c=a.ja[a.j&a.Da]=a.head[a.D],a.head[a.D]=a.j);a.aa=a.H;a.Dc=a.Va;a.H=2;0!==c&&a.aa<a.Rb&&a.j-c<=a.T-262&&(a.H=wi(a,c),5>=a.H&&(1===a.strategy||3===a.H&&4096<a.j-a.Va)&&(a.H=2));if(3<=a.aa&&a.H<=a.aa){d=a.j+a.m-3;c=qi(a,a.j-1-a.Dc,a.aa-3);a.m-=a.aa-1;a.aa-=2;do++a.j<=d&&(a.D=(a.D<<a.sa^a.window[a.j+3-1])&a.ra,a.ja[a.j&a.Da]=a.head[a.D],a.head[a.D]=a.j);while(0!==
--a.aa);a.Ja=0;a.H=2;a.j++;if(c&&(ui(a,!1),0===a.C.F))return 1}else if(a.Ja){if((c=qi(a,0,a.window[a.j-1]))&&ui(a,!1),a.j++,a.m--,0===a.C.F)return 1}else a.Ja=1,a.j++,a.m--}a.Ja&&(qi(a,0,a.window[a.j-1]),a.Ja=0);a.Y=2>a.j?a.j:2;return 4===b?(ui(a,!0),0===a.C.F?3:4):a.da&&(ui(a,!1),0===a.C.F)?1:2}
function Ai(a,b){for(var c,d,e,f=a.window;;){if(258>=a.m){xi(a);if(258>=a.m&&0===b)return 1;if(0===a.m)break}a.H=0;if(3<=a.m&&0<a.j&&(d=a.j-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.j+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.H=258-(e-d);a.H>a.m&&(a.H=a.m)}3<=a.H?(c=qi(a,1,a.H-3),a.m-=a.H,a.j+=a.H,a.H=0):(c=qi(a,0,a.window[a.j]),a.m--,a.j++);if(c&&(ui(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(ui(a,!0),0===a.C.F?3:4):
a.da&&(ui(a,!1),0===a.C.F)?1:2}
function Bi(a,b){for(var c;;){if(0===a.m&&(xi(a),0===a.m)){if(0===b)return 1;break}a.H=0;c=qi(a,0,a.window[a.j]);a.m--;a.j++;if(c&&(ui(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(ui(a,!0),0===a.C.F?3:4):a.da&&(ui(a,!1),0===a.C.F)?1:2}
function Ci(a,b,c,d,e){this.ed=a;this.sd=b;this.vd=c;this.rd=d;this.cd=e}
var Di;Di=[new Ci(0,0,0,0,function(a,b){var c=65535;for(c>a.ea-5&&(c=a.ea-5);;){if(1>=a.m){xi(a);if(0===a.m&&0===b)return 1;if(0===a.m)break}a.j+=a.m;a.m=0;var d=a.Z+c;if(0===a.j||a.j>=d)if(a.m=a.j-d,a.j=d,ui(a,!1),0===a.C.F)return 1;if(a.j-a.Z>=a.T-262&&(ui(a,!1),0===a.C.F))return 1}a.Y=0;if(4===b)return ui(a,!0),0===a.C.F?3:4;a.j>a.Z&&ui(a,!1);return 1}),
new Ci(4,4,8,4,yi),new Ci(4,5,16,8,yi),new Ci(4,6,32,32,yi),new Ci(4,4,16,16,zi),new Ci(8,16,32,32,zi),new Ci(8,16,128,128,zi),new Ci(8,32,128,256,zi),new Ci(32,128,258,1024,zi),new Ci(32,258,258,4096,zi)];
function Ei(){this.C=null;this.status=0;this.L=null;this.wrap=this.pending=this.ob=this.ea=0;this.v=null;this.fa=0;this.method=8;this.Ta=-1;this.Da=this.ec=this.T=0;this.window=null;this.Kc=0;this.head=this.ja=null;this.Ac=this.qc=this.strategy=this.level=this.Rb=this.zc=this.aa=this.m=this.Va=this.j=this.Ja=this.Dc=this.H=this.Z=this.sa=this.ra=this.Mb=this.Cb=this.D=0;this.X=new N.na(1146);this.Ga=new N.na(122);this.S=new N.na(78);si(this.X);si(this.Ga);si(this.S);this.ic=this.zb=this.Db=null;this.pa=
new N.na(16);this.M=new N.na(573);si(this.M);this.Sa=this.ta=0;this.depth=new N.na(573);si(this.depth);this.P=this.V=this.Y=this.matches=this.ab=this.va=this.ib=this.da=this.nb=this.Pb=0}
function Fi(a,b){if(!a||!a.state||5<b||0>b)return a?ri(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.U||666===c.status&&4!==b)return ri(a,0===a.F?-5:-2);c.C=a;var d=c.Ta;c.Ta=b;if(42===c.status)if(2===c.wrap)a.A=0,Q(c,31),Q(c,139),Q(c,8),c.v?(Q(c,(c.v.text?1:0)+(c.v.za?2:0)+(c.v.extra?4:0)+(c.v.name?8:0)+(c.v.comment?16:0)),Q(c,c.v.time&255),Q(c,c.v.time>>8&255),Q(c,c.v.time>>16&255),Q(c,c.v.time>>24&255),Q(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),Q(c,c.v.ze&255),c.v.extra&&c.v.extra.length&&
(Q(c,c.v.extra.length&255),Q(c,c.v.extra.length>>8&255)),c.v.za&&(a.A=dh(a.A,c.L,c.pending,0)),c.fa=0,c.status=69):(Q(c,0),Q(c,0),Q(c,0),Q(c,0),Q(c,0),Q(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),Q(c,3),c.status=113);else{var e=8+(c.ec-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.j&&(e|=32);c.status=113;vi(c,e+(31-e%31));0!==c.j&&(vi(c,a.A>>>16),vi(c,a.A&65535));a.A=1}if(69===c.status)if(c.v.extra){for(e=c.pending;c.fa<(c.v.extra.length&65535)&&(c.pending!==c.ea||
(c.v.za&&c.pending>e&&(a.A=dh(a.A,c.L,c.pending-e,e)),ti(a),e=c.pending,c.pending!==c.ea));)Q(c,c.v.extra[c.fa]&255),c.fa++;c.v.za&&c.pending>e&&(a.A=dh(a.A,c.L,c.pending-e,e));c.fa===c.v.extra.length&&(c.fa=0,c.status=73)}else c.status=73;if(73===c.status)if(c.v.name){e=c.pending;do{if(c.pending===c.ea&&(c.v.za&&c.pending>e&&(a.A=dh(a.A,c.L,c.pending-e,e)),ti(a),e=c.pending,c.pending===c.ea)){var f=1;break}f=c.fa<c.v.name.length?c.v.name.charCodeAt(c.fa++)&255:0;Q(c,f)}while(0!==f);c.v.za&&c.pending>
e&&(a.A=dh(a.A,c.L,c.pending-e,e));0===f&&(c.fa=0,c.status=91)}else c.status=91;if(91===c.status)if(c.v.comment){e=c.pending;do{if(c.pending===c.ea&&(c.v.za&&c.pending>e&&(a.A=dh(a.A,c.L,c.pending-e,e)),ti(a),e=c.pending,c.pending===c.ea)){f=1;break}f=c.fa<c.v.comment.length?c.v.comment.charCodeAt(c.fa++)&255:0;Q(c,f)}while(0!==f);c.v.za&&c.pending>e&&(a.A=dh(a.A,c.L,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.v.za?(c.pending+2>c.ea&&ti(a),c.pending+2<=c.ea&&(Q(c,a.A&
255),Q(c,a.A>>8&255),a.A=0,c.status=113)):c.status=113);if(0!==c.pending){if(ti(a),0===a.F)return c.Ta=-1,0}else if(0===a.U&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return ri(a,-5);if(666===c.status&&0!==a.U)return ri(a,-5);if(0!==a.U||0!==c.m||0!==b&&666!==c.status){d=2===c.strategy?Bi(c,b):3===c.strategy?Ai(c,b):Di[c.level].cd(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.F&&(c.Ta=-1),0;if(2===d&&(1===b?(Ah(c,2,3),Bh(c,256,oh),16===c.P?(zh(c,c.V),c.V=0,c.P=0):8<=c.P&&(c.L[c.pending++]=
c.V&255,c.V>>=8,c.P-=8)):5!==b&&(Ah(c,0,3),Gh(c,0,0),3===b&&(si(c.head),0===c.m&&(c.j=0,c.Z=0,c.Y=0))),ti(a),0===a.F))return c.Ta=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(Q(c,a.A&255),Q(c,a.A>>8&255),Q(c,a.A>>16&255),Q(c,a.A>>24&255),Q(c,a.Ma&255),Q(c,a.Ma>>8&255),Q(c,a.Ma>>16&255),Q(c,a.Ma>>24&255)):(vi(c,a.A>>>16),vi(c,a.A&65535));ti(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Gi={};Gi=function(){this.input=null;this.Ma=this.U=this.La=0;this.output=null;this.cc=this.F=this.Xa=0;this.msg="";this.state=null;this.Lb=2;this.A=0};var Hi=Object.prototype.toString;
function Ii(a){if(!(this instanceof Ii))return new Ii(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,Ea:15,ud:8,strategy:0,Ca:""},a||{});a.raw&&0<a.Ea?a.Ea=-a.Ea:a.fd&&0<a.Ea&&16>a.Ea&&(a.Ea+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.C=new Gi;this.C.F=0;var b=this.C;var c=a.level,d=a.method,e=a.Ea,f=a.ud,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=ri(b,-2);else{8===e&&(e=9);var l=new Ei;
b.state=l;l.C=b;l.wrap=h;l.v=null;l.ec=e;l.T=1<<l.ec;l.Da=l.T-1;l.Mb=f+7;l.Cb=1<<l.Mb;l.ra=l.Cb-1;l.sa=~~((l.Mb+3-1)/3);l.window=new N.Na(2*l.T);l.head=new N.na(l.Cb);l.ja=new N.na(l.T);l.nb=1<<f+6;l.ea=4*l.nb;l.L=new N.Na(l.ea);l.ib=1*l.nb;l.Pb=3*l.nb;l.level=c;l.strategy=g;l.method=d;if(b&&b.state){b.Ma=b.cc=0;b.Lb=2;c=b.state;c.pending=0;c.ob=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.A=2===c.wrap?0:1;c.Ta=0;if(!pi){d=Array(16);for(f=g=0;28>f;f++)for(sh[f]=g,e=0;e<1<<kh[f];e++)rh[g++]=
f;rh[g-1]=f;for(f=g=0;16>f;f++)for(th[f]=g,e=0;e<1<<lh[f];e++)qh[g++]=f;for(g>>=7;30>f;f++)for(th[f]=g<<7,e=0;e<1<<lh[f]-7;e++)qh[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)oh[2*e+1]=8,e++,d[8]++;for(;255>=e;)oh[2*e+1]=9,e++,d[9]++;for(;279>=e;)oh[2*e+1]=7,e++,d[7]++;for(;287>=e;)oh[2*e+1]=8,e++,d[8]++;Dh(oh,287,d);for(e=0;30>e;e++)ph[2*e+1]=5,ph[2*e]=Ch(e,5);vh=new uh(oh,kh,257,286,15);wh=new uh(ph,lh,0,30,15);xh=new uh([],mh,0,19,7);pi=!0}c.Db=new yh(c.X,vh);c.zb=new yh(c.Ga,wh);c.ic=new yh(c.S,
xh);c.V=0;c.P=0;Eh(c);c=0}else c=ri(b,-2);0===c&&(b=b.state,b.Kc=2*b.T,si(b.head),b.Rb=Di[b.level].sd,b.qc=Di[b.level].ed,b.Ac=Di[b.level].vd,b.zc=Di[b.level].rd,b.j=0,b.Z=0,b.m=0,b.Y=0,b.H=b.aa=2,b.Ja=0,b.D=0);b=c}}else b=-2;if(0!==b)throw Error(ih[b]);a.header&&(b=this.C)&&b.state&&2===b.state.wrap&&(b.state.v=a.header);if(a.jb){var k;"string"===typeof a.jb?k=bh(a.jb):"[object ArrayBuffer]"===Hi.call(a.jb)?k=new Uint8Array(a.jb):k=a.jb;a=this.C;f=k;g=f.length;if(a&&a.state)if(k=a.state,b=k.wrap,
2===b||1===b&&42!==k.status||k.m)b=-2;else{1===b&&(a.A=ch(a.A,f,g,0));k.wrap=0;g>=k.T&&(0===b&&(si(k.head),k.j=0,k.Z=0,k.Y=0),c=new N.Na(k.T),N.Pa(c,f,g-k.T,k.T,0),f=c,g=k.T);c=a.U;d=a.La;e=a.input;a.U=g;a.La=0;a.input=f;for(xi(k);3<=k.m;){f=k.j;g=k.m-2;do k.D=(k.D<<k.sa^k.window[f+3-1])&k.ra,k.ja[f&k.Da]=k.head[k.D],k.head[k.D]=f,f++;while(--g);k.j=f;k.m=2;xi(k)}k.j+=k.m;k.Z=k.j;k.Y=k.m;k.m=0;k.H=k.aa=2;k.Ja=0;a.La=d;a.input=e;a.U=c;k.wrap=b;b=0}else b=-2;if(0!==b)throw Error(ih[b]);this.oe=!0}}
Ii.prototype.push=function(a,b){var c=this.C,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=bh(a):"[object ArrayBuffer]"===Hi.call(a)?c.input=new Uint8Array(a):c.input=a;c.La=0;c.U=c.input.length;do{0===c.F&&(c.output=new N.Na(d),c.Xa=0,c.F=d);a=Fi(c,e);if(1!==a&&0!==a)return Ji(this,a),this.ended=!0,!1;if(0===c.F||0===c.U&&(4===e||2===e))if("string"===this.options.Ca){var f=N.ac(c.output,c.Xa);b=f;f=f.length;if(65537>f&&(b.subarray&&ah||!b.subarray))b=
String.fromCharCode.apply(null,N.ac(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.ac(c.output,c.Xa),this.chunks.push(b)}while((0<c.U||0===c.F)&&1!==a);if(4===e)return(c=this.C)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=ri(c,-2):(c.state=null,a=113===d?ri(c,-3):0)):a=-2,Ji(this,a),this.ended=!0,0===a;2===e&&(Ji(this,0),c.F=0);return!0};
function Ji(a,b){0===b&&(a.result="string"===a.options.Ca?a.chunks.join(""):N.oc(a.chunks));a.chunks=[];a.err=b;a.msg=a.C.msg}
;function Ki(a){this.name=a}
;var Li=new Ki("rawColdConfigGroup");var Mi=new Ki("rawHotConfigGroup");function Ni(a){this.s=I(a)}
y(Ni,L);Ni.prototype.g=function(a){K(this,5,a)};function Oi(a){this.s=I(a)}
y(Oi,L);function Pi(a){this.s=I(a)}
y(Pi,L);Pi.ka=[2];function Qi(a){this.s=I(a)}
y(Qi,L);Qi.prototype.getPlayerType=function(){var a=0;a=void 0===a?0:a;var b=ae(this,36);b=null==b?b:Number.isFinite(b)?b|0:void 0;return null!=b?b:a};
Qi.prototype.setHomeGroupInfo=function(a){return J(this,Pi,81,a)};
Qi.ka=[9,66,32,86,100,101];function Ri(a){this.s=I(a)}
y(Ri,L);var Si=[2,3,4,5,6];function Ti(a){this.s=I(a)}
y(Ti,L);Ti.ka=[15,26,28];function Ui(a){this.s=I(a)}
y(Ui,L);Ui.ka=[5];function Vi(a){this.s=I(a)}
y(Vi,L);function Wi(a){this.s=I(a)}
y(Wi,L);Wi.prototype.setSafetyMode=function(a){return qe(this,5,a)};
Wi.ka=[12];function Xi(a){this.s=I(a)}
y(Xi,L);Xi.ka=[12];var Yi={ne:"WEB_DISPLAY_MODE_UNKNOWN",je:"WEB_DISPLAY_MODE_BROWSER",le:"WEB_DISPLAY_MODE_MINIMAL_UI",me:"WEB_DISPLAY_MODE_STANDALONE",ke:"WEB_DISPLAY_MODE_FULLSCREEN"};function Zi(a){this.s=I(a)}
y(Zi,L);function $i(a){this.s=I(a)}
y($i,L);$i.ka=[4,5];function aj(a){this.s=I(a)}
y(aj,L);function bj(a){this.s=I(a)}
y(bj,L);var cj=[2,3,4,5];function dj(a){this.s=I(a)}
y(dj,L);function ej(a){this.s=I(a)}
y(ej,L);function fj(a){this.s=I(a)}
y(fj,L);function gj(a){this.s=I(a)}
y(gj,L);gj.ka=[10,17];function hj(a){this.s=I(a)}
y(hj,L);function ij(a){this.s=I(a)}
y(ij,L);function jj(a){this.s=I(a)}
y(jj,L);function kj(a){this.s=I(a,497)}
y(kj,L);
var lj=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,399,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480,481,482,484,485,486,491,495,496];function mj(a){this.s=I(a)}
y(mj,L);function nj(a){this.s=I(a)}
y(nj,L);nj.prototype.getPlaylistId=function(){return ne(this,2)};
var oe=[1,2];function oj(a){this.s=I(a)}
y(oj,L);oj.ka=[3];var pj=C.window,qj,rj,sj=(null==pj?void 0:null==(qj=pj.yt)?void 0:qj.config_)||(null==pj?void 0:null==(rj=pj.ytcfg)?void 0:rj.data_)||{};E("yt.config_",sj);function tj(){var a=arguments;1<a.length?sj[a[0]]=a[1]:1===a.length&&Object.assign(sj,a[0])}
function R(a,b){return a in sj?sj[a]:b}
function uj(){return R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function vj(){var a=sj.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var wj=[];function xj(a){wj.forEach(function(b){return b(a)})}
function yj(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){zj(b)}}:a}
function zj(a){var b=D("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),tj("ERRORS",b));xj(a)}
function Aj(a,b,c,d,e){var f=D("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),tj("ERRORS",f))}
;var Bj=/^[\w.]*$/,Cj={q:!0,search_query:!0};function Dj(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1===f.length&&f[0]||2===f.length)try{var g=Ej(f[0]||""),h=Ej(f[1]||"");if(g in c){var l=c[g];Array.isArray(l)?Gb(l,h):c[g]=[l,h]}else c[g]=h}catch(q){var k=q,m=f[0],n=String(Dj);k.args=[{key:m,value:f[1],query:a,method:Fj===n?"unchanged":n}];Cj.hasOwnProperty(m)||Aj(k)}}return c}
var Fj=String(Dj);function Gj(a){var b=[];Hb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Cb(c,function(f){""==f?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function Hj(a){"?"===a.charAt(0)&&(a=a.substring(1));return Dj(a,"&")}
function Ij(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Hj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=gc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Jj(a){if(!b)var b=window.location.href;var c=a.match(bc)[1]||null,d=dc(a);c&&d?(a=a.match(bc),b=b.match(bc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?dc(b)===d&&(Number(b.match(bc)[4]||null)||null)===(Number(a.match(bc)[4]||null)||null):!0;return a}
function Ej(a){return a&&a.match(Bj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Kj(a){var b=Lj;a=void 0===a?D("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Fe;e.flash="0";a:{try{var f=b.g.top.location.href}catch(ia){f=2;break a}f=f?f===b.h.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?te:g;try{var h=g.history.length}catch(ia){h=0}e.u_his=h;var l;e.u_h=null==(l=te.screen)?void 0:l.height;var k;e.u_w=null==(k=te.screen)?void 0:k.width;var m;e.u_ah=null==(m=te.screen)?void 0:m.availHeight;var n;e.u_aw=
null==(n=te.screen)?void 0:n.availWidth;var q;e.u_cd=null==(q=te.screen)?void 0:q.colorDepth}catch(ia){}h=b.g;try{var p=h.screenX;var t=h.screenY}catch(ia){}try{var u=h.outerWidth;var z=h.outerHeight}catch(ia){}try{var G=h.innerWidth;var P=h.innerHeight}catch(ia){}try{var U=h.screenLeft;var X=h.screenTop}catch(ia){}try{G=h.innerWidth,P=h.innerHeight}catch(ia){}try{var La=h.screen.availWidth;var Da=h.screen.availTop}catch(ia){}p=[U,X,p,t,La,Da,u,z,G,P];t=b.g.top;try{var Ma=(t||window).document,ja=
"CSS1Compat"==Ma.compatMode?Ma.documentElement:Ma.body;var qa=(new we(ja.clientWidth,ja.clientHeight)).round()}catch(ia){qa=new we(-12245933,-12245933)}Ma=qa;qa={};var ra=void 0===ra?C:ra;ja=new Df;"SVGElement"in ra&&"createElementNS"in ra.document&&ja.set(0);t=De();t["allow-top-navigation-by-user-activation"]&&ja.set(1);t["allow-popups-to-escape-sandbox"]&&ja.set(2);ra.crypto&&ra.crypto.subtle&&ja.set(3);"TextDecoder"in ra&&"TextEncoder"in ra&&ja.set(4);ra=Ef(ja);qa.bc=ra;qa.bih=Ma.height;qa.biw=
Ma.width;qa.brdim=p.join();b=b.h;b=(qa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,qa.wgl=!!te.WebGLRenderingContext,qa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Lj=new function(){var a=window.document;this.g=window;this.h=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return Gj(Kj(a))});Xa();var Mj={};function Nj(a){return Mj[a]||(Mj[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;function S(a){a=Oj(a);return"string"===typeof a&&"false"===a?!1:!!a}
function T(a,b){a=Oj(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Oj(a){return R("EXPERIMENT_FLAGS",{})[a]}
function Pj(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});d=w(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&void 0===b[e]&&a.push({key:e,value:String(c[e])});return a}
;var Qj=0;E("ytDomDomGetNextId",D("ytDomDomGetNextId")||function(){return++Qj});var Rj={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Sj(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Rj||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Sj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Sj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Sj.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Jb=C.ytEventsEventsListeners||{};E("ytEventsEventsListeners",Jb);var Tj=C.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",Tj);
function Uj(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ib(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&Kb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Vj(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Uj(a,b,c,d);if(!e){e=++Tj.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Sj(h);if(!ye(h.relatedTarget,function(l){return l==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Sj(h);
h.currentTarget=a;return c.call(a,h)};
g=yj(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Wj()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Jb[e]=[a,b,c,g,d]}}}
function Xj(a){a&&("string"==typeof a&&(a=[a]),Cb(a,function(b){if(b in Jb){var c=Jb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Wj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Jb[b]}}))}
var Wj=ve(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function Yj(a,b){"function"===typeof a&&(a=yj(a));return window.setTimeout(a,b)}
function Zj(a){"function"===typeof a&&(a=yj(a));return window.setInterval(a,250)}
;var ak=window,V=ak.ytcsi&&ak.ytcsi.now?ak.ytcsi.now:ak.performance&&ak.performance.timing&&ak.performance.now&&ak.performance.timing.navigationStart?function(){return ak.performance.timing.navigationStart+ak.performance.now()}:function(){return(new Date).getTime()};var bk="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function ck(){if(!bk)return null;var a=bk();return"open"in a?a:null}
;var dk="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(dk);var ek={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},fk="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(dk)),gk=!1;
function hk(a,b,c,d,e,f,g,h){function l(){4===(k&&"readyState"in k?k.readyState:0)&&b&&yj(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var k=ck();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",l,!1):k.onreadystatechange=l;S("debug_forward_web_query_parameters")&&(a=ik(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"===c&&(void 0===window.FormData||!(d instanceof FormData));if(e=jk(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{k.setAttributionReporting(a)}catch(n){Aj(n)}}k.send(d);return k}
function jk(a,b){b=void 0===b?{}:b;var c=Jj(a),d=S("web_ajax_ignore_global_headers_if_set"),e;for(e in ek){var f=R(ek[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=R("VISITOR_DATA"));!f||!c&&dc(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===R("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!dc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!dc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(l){}h&&
(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&dc(a)||(b["X-YouTube-Ad-Signals"]=Gj(Kj()));return b}
function kk(a,b){b.method="POST";b.postParams||(b.postParams={});return lk(a,b)}
function lk(a,b){var c=b.format||"JSON";a=mk(a,b);var d=nk(a,b),e=!1,f=ok(a,function(l){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(l&&"status"in l?l.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var k=!0;break a;default:k=!1}var m=null,n=400<=l.status&&500>l.status,q=500<=l.status&&600>l.status;if(k||n||q)m=pk(a,c,l,b.convertToSafeHtml);k&&(k=qk(c,l,m));m=m||{};n=b.context||C;k?b.onSuccess&&b.onSuccess.call(n,l,m):b.onError&&b.onError.call(n,l,m);b.onFinish&&
b.onFinish.call(n,l,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Yj(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function mk(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Ij(a,b||{},!0);return a}
function nk(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||dc(a)&&!b.withCredentials&&dc(a)!==document.location.hostname||"POST"!==b.method||h&&"application/x-www-form-urlencoded"!==h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Hj(e),Nb(e,f),e=b.postBodyFormat&&"JSON"===b.postBodyFormat?
JSON.stringify(e):gc(e));if(!(a=e)&&(a=f)){a:{for(var l in f){f=!1;break a}f=!0}a=!f}!gk&&a&&"POST"!==b.method&&(gk=!0,zj(Error("AJAX request with postData should use POST")));return e}
function pk(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Aj(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?rk(a):null)e={},Cb(a.getElementsByTagName("*"),function(g){e[g.tagName]=sk(g)})}d&&tk(e);
return e}
function tk(a){if(Qa(a))for(var b in a){var c;(c="html_content"===b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=nb();d=e?e.createHTML(d):d;a[c]=new Ob(d)}else tk(a[b])}}
function qk(a,b,c){if(b&&204===b.status)return!0;switch(a){case "JSON":return!!c;case "XML":return 0===Number(c&&c.return_code);case "RAW":return!0;default:return!!c}}
function rk(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function sk(a){var b="";Cb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ik(a){var b=window.location.search,c=dc(a);S("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Jj(a)&&(c=document.location.hostname);var d=cc(a.match(bc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Hj(b),f={};Cb(fk,function(g){e[g]&&(f[g]=e[g])});
return Ij(a,f||{},!1)}
var ok=hk;function uk(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function vk(){}
;function wk(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;E("ytglobal.prefsUserPrefsPrefs_",D("ytglobal.prefsUserPrefsPrefs_")||{});var xk={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},yk={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},zk={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Ak={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Bk(){var a=C.navigator;return a?a.connection:void 0}
;function Ck(a){var b=Ga.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(x(b))}
y(Ck,Error);function Dk(){try{return Ek(),!0}catch(a){return!1}}
function Ek(){if(void 0!==R("DATASYNC_ID"))return R("DATASYNC_ID");throw new Ck("Datasync ID not set","unknown");}
;function Fk(){}
function Gk(a,b){return Cf.Fa(a,0,b)}
Fk.prototype.oa=function(a,b){return this.Fa(a,1,b)};
Fk.prototype.fb=function(a){var b=D("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Hk=T("web_emulated_idle_callback_delay",300),Ik=1E3/60-3,Jk=[8,5,4,3,2,1,0];
function Kk(a){a=void 0===a?{}:a;Ve.call(this);this.h=[];this.i={};this.cb=this.g=0;this.bb=this.u=!1;this.O=[];this.ma=this.eb=!1;for(var b=w(Jk),c=b.next();!c.done;c=b.next())this.h[c.value]=[];this.o=0;this.Rc=a.timeout||1;this.K=Ik;this.G=0;this.sb=this.wd.bind(this);this.Qc=this.Bd.bind(this);this.Nc=this.Sc.bind(this);this.Oc=this.gd.bind(this);this.Pc=this.xd.bind(this);this.fc=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!S("disable_scheduler_requestIdleCallback");(this.wa=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.sb)}
y(Kk,Ve);r=Kk.prototype;r.fb=function(a){var b=Xa();Lk(a);a=Xa()-b;this.u||(this.K-=a)};
r.Fa=function(a,b,c){++this.cb;if(10===b)return this.fb(a),this.cb;var d=this.cb;this.i[d]=a;this.u&&!c?this.O.push({id:d,priority:b}):(this.h[b].push(d),this.bb||this.u||(0!==this.g&&Mk(this)!==this.G&&Nk(this),this.start()));return d};
r.ba=function(a){delete this.i[a]};
function Ok(a){a.O.length=0;for(var b=5;0<=b;b--)a.h[b].length=0;a.h[8].length=0;a.i={};Nk(a)}
function Mk(a){if(a.h[8].length){if(a.ma)return 4;if(!document.hidden&&a.wa)return 3}for(var b=5;b>=a.o;b--)if(0<a.h[b].length)return 0<b?!document.hidden&&a.wa?3:2:1;return 0}
function Pk(a){var b=D("yt.logging.errors.log");b&&b(a)}
function Lk(a){try{a()}catch(b){Pk(b)}}
function Qk(a){for(var b=w(Jk),c=b.next();!c.done;c=b.next())if(a.h[c.value].length)return!0;return!1}
r.gd=function(a){var b=void 0;a&&(b=a.timeRemaining());this.eb=!0;Rk(this,b);this.eb=!1};
r.Bd=function(){Rk(this)};
r.Sc=function(){Sk(this)};
r.xd=function(a){this.ma=!0;var b=Mk(this);4===b&&b!==this.G&&(Nk(this),this.start());Rk(this,void 0,a);this.ma=!1};
r.wd=function(){document.hidden||Sk(this);this.g&&(Nk(this),this.start())};
function Sk(a){Nk(a);a.u=!0;for(var b=Xa(),c=a.h[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&Lk(e)}Tk(a);a.u=!1;Qk(a)&&a.start();b=Xa()-b;a.K-=b}
function Tk(a){for(var b=0,c=a.O.length;b<c;b++){var d=a.O[b];a.h[d.priority].push(d.id)}a.O.length=0}
function Rk(a,b,c){a.ma&&4===a.G&&a.g||Nk(a);a.u=!0;b=Xa()+(b||a.K);for(var d=a.h[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(k){Pk(k)}}for(d=a.h[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&Lk(e);d=a.eb?0:1;d=a.o>d?a.o:d;if(!(Xa()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.h[f];g.length;){var h=g.shift(),l=c.i[h];delete c.i[h];if(l){c=l;break a}}c=null}c&&Lk(c)}while(c&&Xa()<b)}a.u=!1;Tk(a);a.K=Ik;Qk(a)&&a.start()}
r.start=function(){this.bb=!1;if(0===this.g)switch(this.G=Mk(this),this.G){case 1:var a=this.Oc;this.g=this.fc?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Hk);break;case 2:this.g=window.setTimeout(this.Qc,this.Rc);break;case 3:this.g=window.requestAnimationFrame(this.Pc);break;case 4:this.g=window.setTimeout(this.Nc,0)}};
function Nk(a){if(a.g){switch(a.G){case 1:var b=a.g;a.fc?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.g);break;case 3:window.cancelAnimationFrame(a.g)}a.g=0}}
r.qa=function(){Ok(this);Nk(this);this.wa&&document.removeEventListener("visibilitychange",this.sb);Ve.prototype.qa.call(this)};var Uk=D("yt.scheduler.instance.timerIdMap_")||{},Vk=T("kevlar_tuner_scheduler_soft_state_timer_ms",800),Wk=0,Xk=0;function Yk(){var a=D("ytglobal.schedulerInstanceInstance_");if(!a||a.ya)a=new Kk(R("scheduler")||{}),E("ytglobal.schedulerInstanceInstance_",a);return a}
function Zk(){$k();var a=D("ytglobal.schedulerInstanceInstance_");a&&(Ue(a),E("ytglobal.schedulerInstanceInstance_",null))}
function $k(){Ok(Yk());for(var a in Uk)Uk.hasOwnProperty(a)&&delete Uk[Number(a)]}
function al(a,b,c){if(!c)return c=void 0===c,-Yk().Fa(a,b,c);var d=window.setTimeout(function(){var e=Yk().Fa(a,b);Uk[d]=e},c);
return d}
function bl(a){Yk().fb(a)}
function cl(a){var b=Yk();if(0>a)b.ba(-a);else{var c=Uk[a];c?(b.ba(c),delete Uk[a]):window.clearTimeout(a)}}
function dl(){el()}
function el(){window.clearTimeout(Wk);Yk().start()}
function fl(){var a=Yk();Nk(a);a.bb=!0;window.clearTimeout(Wk);Wk=window.setTimeout(dl,Vk)}
function gl(){window.clearTimeout(Xk);Xk=window.setTimeout(function(){hl(0)},Vk)}
function hl(a){gl();var b=Yk();b.o=a;b.start()}
function il(a){gl();var b=Yk();b.o>a&&(b.o=a,b.start())}
function jl(){window.clearTimeout(Xk);var a=Yk();a.o=0;a.start()}
;function kl(){Fk.apply(this,arguments)}
y(kl,Fk);function ll(){kl.g||(kl.g=new kl);return kl.g}
kl.prototype.Fa=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=D("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Yj(a,c||0)};
kl.prototype.ba=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=D("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
kl.prototype.start=function(){var a=D("yt.scheduler.instance.start");a&&a()};
var Cf=ll();
S("web_scheduler_auto_init")&&!D("yt.scheduler.initialized")&&(E("yt.scheduler.instance.dispose",Zk),E("yt.scheduler.instance.addJob",al),E("yt.scheduler.instance.addImmediateJob",bl),E("yt.scheduler.instance.cancelJob",cl),E("yt.scheduler.instance.cancelAllJobs",$k),E("yt.scheduler.instance.start",el),E("yt.scheduler.instance.pause",fl),E("yt.scheduler.instance.setPriorityThreshold",hl),E("yt.scheduler.instance.enablePriorityThreshold",il),E("yt.scheduler.instance.clearPriorityThreshold",jl),E("yt.scheduler.initialized",
!0));function ml(a){var b=new Wg;this.g=(a=(b.h=Vg(b.g))?a?new Xg(b,a):b:null)?new Qg(a):null;this.h=document.domain||window.location.hostname}
ml.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(rg(b))}catch(f){return}else e=escape(b);b=this.h;Ne.set(""+a,e,{Qb:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
ml.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=Ne.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ml.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.h;Ne.remove(""+a,"/",void 0===b?"youtube.com":b)};var nl=function(){var a;return function(){a||(a=new ml("ytidb"));return a}}();
function ol(){var a;return null==(a=nl())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var pl=[],ql=!1;function rl(a){ql||(pl.push({type:"ERROR",payload:a}),10<pl.length&&pl.shift())}
function sl(a,b){ql||(pl.push({type:"EVENT",eventType:a,payload:b}),10<pl.length&&pl.shift())}
;function tl(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function ul(a){return a.substr(0,a.indexOf(":"))||a}
;var vl=Bc||Cc;var wl={},xl=(wl.AUTH_INVALID="No user identifier specified.",wl.EXPLICIT_ABORT="Transaction was explicitly aborted.",wl.IDB_NOT_SUPPORTED="IndexedDB is not supported.",wl.MISSING_INDEX="Index not created.",wl.MISSING_OBJECT_STORES="Object stores not created.",wl.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",wl.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",wl.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
wl.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",wl.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",wl.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",wl.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",wl),yl={},zl=(yl.AUTH_INVALID="ERROR",yl.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",yl.EXPLICIT_ABORT="IGNORED",yl.IDB_NOT_SUPPORTED="ERROR",yl.MISSING_INDEX=
"WARNING",yl.MISSING_OBJECT_STORES="ERROR",yl.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",yl.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",yl.QUOTA_EXCEEDED="WARNING",yl.QUOTA_MAYBE_EXCEEDED="WARNING",yl.UNKNOWN_ABORT="WARNING",yl.INCOMPATIBLE_DB_VERSION="WARNING",yl),Al={},Bl=(Al.AUTH_INVALID=!1,Al.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Al.EXPLICIT_ABORT=!1,Al.IDB_NOT_SUPPORTED=!1,Al.MISSING_INDEX=!1,Al.MISSING_OBJECT_STORES=!1,Al.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Al.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Al.QUOTA_EXCEEDED=!1,Al.QUOTA_MAYBE_EXCEEDED=!0,Al.UNKNOWN_ABORT=!0,Al.INCOMPATIBLE_DB_VERSION=!1,Al);function Y(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?xl[a]:c;d=void 0===d?zl[a]:d;e=void 0===e?Bl[a]:e;Ck.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,Y.prototype)}
y(Y,Ck);function Cl(a,b){Y.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},xl.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Cl.prototype)}
y(Cl,Y);function Dl(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Dl.prototype)}
y(Dl,Error);var El=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Fl(a,b,c,d){b=ul(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Y)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Y("QUOTA_EXCEEDED",a);if(Dc&&"UnknownError"===e.name)return new Y("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Dl)return new Y("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&El.some(function(f){return e.message.includes(f)}))return new Y("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Y("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",ye:e.name})];e.level="WARNING";return e}
function Gl(a,b,c){var d=ol();return new Y("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Hl(a){if(!a)throw Error();throw a;}
function Il(a){return a}
function Jl(a){this.g=a}
function Kl(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=w(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.h=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
Kl.resolve=function(a){return new Kl(new Jl(function(b,c){a instanceof Kl?a.then(b,c):b(a)}))};
Kl.reject=function(a){return new Kl(new Jl(function(b,c){c(a)}))};
Kl.prototype.then=function(a,b){var c=this,d=null!=a?a:Il,e=null!=b?b:Hl;return new Kl(new Jl(function(f,g){"PENDING"===c.state.status?(c.g.push(function(){Ll(c,c,d,f,g)}),c.h.push(function(){Ml(c,c,e,f,g)})):"FULFILLED"===c.state.status?Ll(c,c,d,f,g):"REJECTED"===c.state.status&&Ml(c,c,e,f,g)}))};
function Nl(a,b){a.then(void 0,b)}
function Ll(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Kl?Ol(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ml(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Kl?Ol(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ol(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Kl?Ol(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Pl(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Ql(a){return new Promise(function(b,c){Pl(a,b,c)})}
function Rl(a){return new Kl(new Jl(function(b,c){Pl(a,b,c)}))}
;function Sl(a,b){return new Kl(new Jl(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Tl(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(V());this.h=!1}
r=Tl.prototype;r.add=function(a,b,c){return Ul(this,[a],{mode:"readwrite",W:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return Ul(this,[a],{mode:"readwrite",W:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.g.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function Vl(a,b,c){a=a.g.createObjectStore(b,c);return new Wl(a)}
r.delete=function(a,b){return Ul(this,[a],{mode:"readwrite",W:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return Ul(this,[a],{mode:"readonly",W:!0},function(c){return c.objectStore(a).get(b)})};
function Xl(a,b,c){return Ul(a,[b],{mode:"readwrite",W:!0},function(d){d=d.objectStore(b);return Rl(d.g.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function Ul(a,b,c,d){var e,f,g,h,l,k,m,n,q,p,t,u;return B(function(z){switch(z.g){case 1:var G={mode:"readonly",W:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?G.mode=c:Object.assign(G,c);e=G;a.transactionCount++;f=e.W?3:1;g=0;case 2:if(h){z.B(4);break}g++;l=Math.round(V());wa(z,5);k=a.g.transaction(b,e.mode);G=new Yl(k);G=Zl(G,d);return A(z,G,7);case 7:return m=z.h,n=Math.round(V()),$l(a,l,n,g,void 0,b.join(),e),z.return(m);case 5:q=xa(z);p=Math.round(V());t=Fl(q,a.g.name,b.join(),a.g.version);
if((u=t instanceof Y&&!t.g)||g>=f)$l(a,l,p,g,t,b.join(),e),h=t;z.B(2);break;case 4:return z.return(Promise.reject(h))}})}
function $l(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Y&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&sl("QUOTA_EXCEEDED",{dbName:ul(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Y&&"UNKNOWN_ABORT"===e.type&&(c-=a.i,0>c&&c>=Math.pow(2,31)&&(c=0),sl("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.h=!0),am(a,!1,d,f,b,g.tag),rl(e)):am(a,!0,d,f,b,g.tag)}
function am(a,b,c,d,e,f){sl("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.h,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.g.name};
function Wl(a){this.g=a}
r=Wl.prototype;r.add=function(a,b){return Rl(this.g.add(a,b))};
r.autoIncrement=function(){return this.g.autoIncrement};
r.clear=function(){return Rl(this.g.clear()).then(function(){})};
function bm(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function cm(a,b){return dm(a,{query:b},function(c){return c.delete().then(function(){return em(c)})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?cm(this,a):Rl(this.g.delete(a))};
r.get=function(a){return Rl(this.g.get(a))};
r.index=function(a){try{return new fm(this.g.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Dl(a,this.g.name);throw b;}};
r.getName=function(){return this.g.name};
r.keyPath=function(){return this.g.keyPath};
function dm(a,b,c){a=a.g.openCursor(b.query,b.direction);return gm(a).then(function(d){return Sl(d,c)})}
function Yl(a){var b=this;this.g=a;this.i=new Map;this.h=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.h){e=Y;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var l=f.item(h);if(null===l)throw Error("Invariant: item in DOMStringList is null");g.push(l)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function Zl(a,b){var c=new Promise(function(d,e){try{Nl(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
Yl.prototype.abort=function(){this.g.abort();this.h=!0;throw new Y("EXPLICIT_ABORT");};
Yl.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new Wl(a),this.i.set(a,b));return b};
function fm(a){this.g=a}
fm.prototype.delete=function(a){return hm(this,{query:a},function(b){return b.delete().then(function(){return em(b)})})};
fm.prototype.get=function(a){return Rl(this.g.get(a))};
fm.prototype.keyPath=function(){return this.g.keyPath};
fm.prototype.unique=function(){return this.g.unique};
function hm(a,b,c){a=a.g.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return gm(a).then(function(d){return Sl(d,c)})}
function im(a,b){this.request=a;this.cursor=b}
function gm(a){return Rl(a).then(function(b){return b?new im(a,b):null})}
function em(a){a.cursor.continue(void 0);return gm(a.request)}
im.prototype.delete=function(){return Rl(this.cursor.delete()).then(function(){})};
im.prototype.update=function(a){return Rl(this.cursor.update(a))};function jm(a,b,c){return new Promise(function(d,e){function f(){q||(q=new Tl(g.result,{closed:n}));return q}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Uc,l=c.Vc,k=c.Ad,m=c.upgrade,n=c.closed,q;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&sl("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:ul(a)});var t=f(),u=new Yl(g.transaction);m&&
m(t,function(z){return p.oldVersion<z&&p.newVersion>=z},u);
u.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var p=g.result;l&&p.addEventListener("versionchange",function(){l(f())});
p.addEventListener("close",function(){sl("IDB_UNEXPECTEDLY_CLOSED",{dbName:ul(a),dbVersion:p.version});k&&k()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function km(a,b,c){c=void 0===c?{}:c;return jm(a,b,c)}
function lm(a,b){b=void 0===b?{}:b;var c,d,e,f;return B(function(g){if(1==g.g)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Uc)&&c.addEventListener("blocked",function(){e()}),A(g,Ql(c),4);
if(2!=g.g)g.g=0,g.o=0;else throw f=xa(g),Fl(f,a,"",-1);})}
;function mm(a,b){this.name=a;this.options=b;this.i=!0;this.o=this.l=0}
mm.prototype.h=function(a,b,c){c=void 0===c?{}:c;return km(a,b,c)};
mm.prototype.delete=function(a){a=void 0===a?{}:a;return lm(this.name,a)};
function nm(a,b){return new Y("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function om(a,b){if(!b)throw Gl("openWithToken",ul(a.name));return pm(a)}
function pm(a){function b(){var f,g,h,l,k,m,n,q,p,t;return B(function(u){switch(u.g){case 1:return g=null!=(f=Error().stack)?f:"",wa(u,2),A(u,a.h(a.name,a.options.version,d),4);case 4:for(var z=h=u.h,G=a.options,P=[],U=w(Object.keys(G.Ya)),X=U.next();!X.done;X=U.next()){X=X.value;var La=G.Ya[X],Da=void 0===La.yd?Number.MAX_VALUE:La.yd;!(z.g.version>=La.gb)||z.g.version>=Da||z.g.objectStoreNames.contains(X)||P.push(X)}l=P;if(0===l.length){u.B(5);break}k=Object.keys(a.options.Ya);m=h.objectStoreNames();
if(a.o<T("ytidb_reopen_db_retries",0))return a.o++,h.close(),rl(new Y("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:k,foundObjectStores:m})),u.return(b());if(!(a.l<T("ytidb_remake_db_retries",1))){u.B(6);break}a.l++;return A(u,a.delete(),7);case 7:return rl(new Y("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:k,foundObjectStores:m})),u.return(b());case 6:throw new Cl(m,k);case 5:return u.return(h);case 2:n=xa(u);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){u.B(8);break}return A(u,a.h(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:q=u.h;p=q.g.version;if(void 0!==a.options.version&&p>a.options.version+1)throw q.close(),a.i=!1,nm(a,p);return u.return(q);case 8:throw c(),n instanceof Error&&!S("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Fl(n,a.name,"",null!=(t=a.options.version)?t:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw nm(a);if(a.g)return a.g;var d={Vc:function(f){f.close()},
closed:c,Ad:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var qm=new mm("YtIdbMeta",{Ya:{databases:{gb:1}},upgrade:function(a,b){b(1)&&Vl(a,"databases",{keyPath:"actualName"})}});
function rm(a,b){var c;return B(function(d){if(1==d.g)return A(d,om(qm,b),2);c=d.h;return d.return(Ul(c,["databases"],{W:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Rl(f.g.put(a,void 0)).then(function(){})})}))})}
function sm(a,b){var c;return B(function(d){if(1==d.g)return a?A(d,om(qm,b),2):d.return();c=d.h;return d.return(c.delete("databases",a))})}
function tm(a,b){var c,d;return B(function(e){return 1==e.g?(c=[],A(e,om(qm,b),2)):3!=e.g?(d=e.h,A(e,Ul(d,["databases"],{W:!0,mode:"readonly"},function(f){c.length=0;return dm(f.objectStore("databases"),{},function(g){a(g.cursor.value)&&c.push(g.cursor.value);return em(g)})}),3)):e.return(c)})}
function um(a){return tm(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var vm,wm=new function(){}(new function(){});
function xm(){var a,b,c,d;return B(function(e){switch(e.g){case 1:a=ol();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=vl)f=/WebKit\/([0-9]+)/.exec(mc()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(mc()),f=!(f&&602<=parseInt(f[1],10)));if(f||zc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return A(e,rm(d,wm),4);case 4:return A(e,sm("yt-idb-test-do-not-use",wm),5);case 5:return e.return(!0);case 2:return xa(e),e.return(!1)}})}
function ym(){if(void 0!==vm)return vm;ql=!0;return vm=xm().then(function(a){ql=!1;var b;if(null!=(b=nl())&&b.g){var c;b={hasSucceededOnce:(null==(c=ol())?void 0:c.hasSucceededOnce)||a};var d;null==(d=nl())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function zm(){return D("ytglobal.idbToken_")||void 0}
function Am(){var a=zm();return a?Promise.resolve(a):ym().then(function(b){(b=b?wm:void 0)&&E("ytglobal.idbToken_",b);return b})}
;new sg;function Bm(a){if(!Dk())throw a=new Y("AUTH_INVALID",{dbName:a}),rl(a),a;var b=Ek();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Cm(a,b,c,d){var e,f,g,h,l,k;return B(function(m){switch(m.g){case 1:return f=null!=(e=Error().stack)?e:"",A(m,Am(),2);case 2:g=m.h;if(!g)throw h=Gl("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),rl(h),h;tl(a);l=c?{actualName:a,publicName:a,userIdentifier:void 0}:Bm(a);wa(m,3);return A(m,rm(l,g),5);case 5:return A(m,km(l.actualName,b,d),6);case 6:return m.return(m.h);case 3:return k=xa(m),wa(m,7),A(m,sm(l.actualName,g),9);case 9:m.g=
8;m.o=0;break;case 7:xa(m);case 8:throw k;}})}
function Dm(a,b,c){c=void 0===c?{}:c;return Cm(a,b,!1,c)}
function Em(a,b,c){c=void 0===c?{}:c;return Cm(a,b,!0,c)}
function Fm(a,b){b=void 0===b?{}:b;var c,d;return B(function(e){if(1==e.g)return A(e,Am(),2);if(3!=e.g){c=e.h;if(!c)return e.return();tl(a);d=Bm(a);return A(e,lm(d.actualName,b),3)}return A(e,sm(d.actualName,c),0)})}
function Gm(a,b,c){a=a.map(function(d){return B(function(e){return 1==e.g?A(e,lm(d.actualName,b),2):A(e,sm(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Hm(){var a=void 0===a?{}:a;var b,c;return B(function(d){if(1==d.g)return A(d,Am(),2);if(3!=d.g){b=d.h;if(!b)return d.return();tl("LogsDatabaseV2");return A(d,um(b),3)}c=d.h;return A(d,Gm(c,a,b),0)})}
function Im(a,b){b=void 0===b?{}:b;var c;return B(function(d){if(1==d.g)return A(d,Am(),2);if(3!=d.g){c=d.h;if(!c)return d.return();tl(a);return A(d,lm(a,b),3)}return A(d,sm(a,c),0)})}
;function Jm(a,b){mm.call(this,a,b);this.options=b;tl(a)}
y(Jm,mm);function Km(a,b){var c;return function(){c||(c=new Jm(a,b));return c}}
Jm.prototype.h=function(a,b,c){c=void 0===c?{}:c;return(this.options.shared?Em:Dm)(a,b,Object.assign({},c))};
Jm.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.shared?Im:Fm)(this.name,a)};
function Lm(a,b){return Km(a,b)}
;var Mm={},Nm=Lm("ytGcfConfig",{Ya:(Mm.coldConfigStore={gb:1},Mm.hotConfigStore={gb:1},Mm),shared:!1,upgrade:function(a,b){b(1)&&(bm(Vl(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),bm(Vl(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Om(a){return om(Nm(),a)}
function Bn(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:V()},A(g,Om(c),2);case 2:return e=g.h,A(g,e.clear("hotConfigStore"),3);case 3:return A(g,Xl(e,"hotConfigStore",d),4);case 4:return f=g.h,g.return(f)}})}
function Cn(a,b,c,d){var e,f,g;return B(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:V()},A(h,Om(d),2);case 2:return f=h.h,A(h,f.clear("coldConfigStore"),3);case 3:return A(h,Xl(f,"coldConfigStore",e),4);case 4:return g=h.h,h.return(g)}})}
function Dn(a){var b,c;return B(function(d){return 1==d.g?A(d,Om(a),2):3!=d.g?(b=d.h,c=void 0,A(d,Ul(b,["coldConfigStore"],{mode:"readwrite",W:!0},function(e){return hm(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
function En(a){var b,c;return B(function(d){return 1==d.g?A(d,Om(a),2):3!=d.g?(b=d.h,c=void 0,A(d,Ul(b,["hotConfigStore"],{mode:"readwrite",W:!0},function(e){return hm(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
;function Fn(){Ve.call(this);this.h=[];this.g=[];var a=D("yt.gcf.config.hotUpdateCallbacks");a?(this.h=[].concat(x(a)),this.g=a):(this.g=[],E("yt.gcf.config.hotUpdateCallbacks",this.g))}
y(Fn,Ve);Fn.prototype.qa=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.h.length=0;Ve.prototype.qa.call(this)};function Gn(){this.h=0;this.i=new Fn}
function Hn(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:if(!S("start_client_gcf")){g.B(0);break}c&&(a.l=c,E("yt.gcf.config.hotConfigGroup",a.l||null));a.g(b);d=zm();if(!d){g.B(3);break}if(c){g.B(4);break}return A(g,En(d),5);case 5:e=g.h,c=null==(f=e)?void 0:f.config;case 4:return A(g,Bn(c,b,d),3);case 3:if(c)for(var h=c,l=w(a.i.g),k=l.next();!k.done;k=l.next())k=k.value,k(h);g.g=0}})}
function In(a,b,c){var d,e,f,g;return B(function(h){if(1==h.g){if(!S("start_client_gcf"))return h.B(0);a.coldHashData=b;E("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=zm())?c?h.B(4):A(h,Dn(d),5):h.B(0)}4!=h.g&&(e=h.h,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return A(h,Cn(c,b,g,d),0)})}
Gn.prototype.g=function(a){this.hotHashData=a;E("yt.gcf.config.hotHashData",this.hotHashData||null)};function Jn(){return"INNERTUBE_API_KEY"in sj&&"INNERTUBE_API_VERSION"in sj}
function Kn(){return{hd:R("INNERTUBE_API_KEY"),jd:R("INNERTUBE_API_VERSION"),Nb:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),uc:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),kd:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),vc:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),xc:R("INNERTUBE_CONTEXT_HL"),wc:R("INNERTUBE_CONTEXT_GL"),ld:R("INNERTUBE_HOST_OVERRIDE")||"",nd:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),md:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Ln(a){var b={client:{hl:a.xc,gl:a.wc,clientName:a.uc,clientVersion:a.vc,configInfo:a.Nb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Pj();0<c.length&&(b.request={internalExperimentFlags:c});Mn(a,void 0,b);Nn(void 0,b);On(void 0,b);Pn(a,void 0,b);Qn(void 0,b);S("start_client_gcf")&&Rn(void 0,b);R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&
(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=w(Object.entries(Hj(R("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=
h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Mn(a,b,c){a=a.uc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=ie(b,Oi,96)||new Oi;var d=uk();d=Object.keys(Yi).indexOf(d);d=-1===d?null:d;null!==d&&qe(c,3,d);J(b,Oi,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=uk())}
function Nn(a,b){var c=D("yt.embedded_player.embed_url");c&&(a?(b=ie(a,Ui,7)||new Ui,K(b,4,c),J(a,Ui,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function On(a,b){var c;if(S("web_log_memory_total_kbytes")&&(null==(c=C.navigator)?0:c.deviceMemory)){var d;c=null==(d=C.navigator)?void 0:d.deviceMemory;a?de(a,95,Ad(1E6*c)):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Pn(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=ie(b,Ni,62))?d:new Ni;K(c,6,a.appInstallData);J(b,Ni,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Qn(a,b){a:{var c=Bk();if(c){var d=xk[c.type||"unknown"]||"CONN_UNKNOWN";c=xk[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?qe(a,61,yk[d]):b&&(b.client.connectionType=d));S("web_log_effective_connection_type")&&(d=Bk(),d=null!=d&&d.effectiveType?Ak.hasOwnProperty(d.effectiveType)?Ak[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?qe(a,94,zk[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Sn(a,b,c){c=void 0===c?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.qe||R("AUTHORIZATION");if(!b)if(a)b="Bearer "+D("gapi.auth.getToken")().pe;else{vk.g||(vk.g=new vk);a={};if(c=Te([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in sj||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in sj&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID"));S("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function Rn(a,b){if(!Gn.g){var c=new Gn;Gn.g=c}c=Gn.g;var d=V()-c.h;if(0!==c.h&&d<T("send_config_hash_timer"))c=void 0;else{d=D("yt.gcf.config.coldConfigData");var e=D("yt.gcf.config.hotHashData"),f=D("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=V());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(d=e.coldConfigData,c=e.coldHashData,e=e.hotHashData,a){var g;b=null!=(g=ie(a,Ni,62))?g:new Ni;g=K(b,1,d);K(g,3,c).g(e);J(a,Ni,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},d&&(b.client.configInfo.coldConfigData=
d),c&&(b.client.configInfo.coldHashData=c),e&&(b.client.configInfo.hotHashData=e))}
;var Tn="undefined"!==typeof TextEncoder?new TextEncoder:null,Un=Tn?function(a){return Tn.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var Vn=D("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.rb;M.prototype.publish=M.prototype.Za;M.prototype.clear=M.prototype.clear;E("ytPubsub2Pubsub2Instance",Vn);E("ytPubsub2Pubsub2SubscribedKeys",D("ytPubsub2Pubsub2SubscribedKeys")||{});E("ytPubsub2Pubsub2TopicToKeys",D("ytPubsub2Pubsub2TopicToKeys")||{});E("ytPubsub2Pubsub2IsAsync",D("ytPubsub2Pubsub2IsAsync")||{});E("ytPubsub2Pubsub2SkipSubKey",null);function Wn(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={Ee:a,De:b},(b=D("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var Xn=void 0,Yn=void 0;function Zn(){if(!Yn){var a=R("WORKER_SERIALIZATION_URL");if(a){if(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue){var b=nb();a=b?b.createScriptURL(a):a;a=new rb(a,sb)}else a=null;Yn=a}else Yn=null}return Yn||void 0}
function $n(){var a=Zn();if(!Xn&&void 0!==a){var b=Worker;a instanceof rb&&a.constructor===rb?a=a.g:(Na(a),a="type_error:TrustedResourceUrl");Xn=new b(a,void 0)}return Xn}
;var ao=T("max_body_size_to_compress",5E5),bo=T("min_body_size_to_compress",500),co=!0,eo=0,fo=0,go=T("compression_performance_threshold_lr",250),ho=T("slow_compressions_before_abandon_count",4),io=!1,jo=new Map,ko=1,lo=!0;function mo(){if("function"===typeof Worker&&Zn()&&!io){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=jo.get(c.key);d&&(no(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),jo.delete(c.key))}},b=$n();
b&&(b.addEventListener("message",a),b.onerror=function(){jo.clear()},io=!0)}}
function oo(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:V(),ticks:{},infos:{}};if(co)try{try{var g=(new Blob(b.split(""))).size}catch(m){Aj(m),g=null}if(null!=g&&(g>ao||g<bo))d(a,c);else{if(S("gzip_gel_with_worker")&&(S("initial_gzip_use_main_thread")&&!lo||!S("initial_gzip_use_main_thread"))){io||mo();var h=$n();if(h&&!e){jo.set(ko,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:ko});ko++;return}}var l=Un(b);b=(b=void 0,{});b.fd=!0;var k=new Ii(b);
k.push(l,!0);if(k.err)throw k.msg||ih[k.err];no(k.result,f,a,c,d)}}catch(m){Aj(m),d(a,c)}else d(a,c)}
function no(a,b,c,d,e){lo=!1;var f=V();b.ticks.gelc=f;fo++;S("disable_compression_due_to_performance_degredation")&&f-b.startTime>=go&&(eo++,S("abandon_compression_after_N_slow_zips")?fo===T("compression_disable_point")&&eo>ho&&(co=!1):co=!1);S("gel_compression_csi_killswitch")||!S("log_gel_compression_latency")&&!S("log_gel_compression_latency_lr")||Wn("gel_compression",b,{sampleRate:.1});d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
;function po(a){a=Object.assign({},a);delete a.Authorization;var b=Te();if(b){var c=new jg;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=Gc(c.digest(),3)}return a}
;var qo;function ro(){qo||(qo=new ml("yt.innertube"));return qo}
function so(a,b,c,d){if(d)return null;d=ro().get("nextId",!0)||1;var e=ro().get("requests",!0)||{};e[d]={method:a,request:b,authState:po(c),requestTime:Math.round(V())};ro().set("nextId",d+1,86400,!0);ro().set("requests",e,86400,!0);return d}
function to(a){var b=ro().get("requests",!0)||{};delete b[a];ro().set("requests",b,86400,!0)}
function uo(a){var b=ro().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(V())-d.requestTime)){var e=d.authState,f=po(Sn(!1));Kb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(V())),vo(a,d.method,e,{}));delete b[c]}}ro().set("requests",b,86400,!0)}}
;function wo(a){this.vb=this.g=!1;this.potentialEsfErrorCounter=this.h=0;this.handleError=function(){};
this.Ra=function(){};
this.now=Date.now;this.kb=!1;var b;this.Jc=null!=(b=a.Jc)?b:100;var c;this.Hc=null!=(c=a.Hc)?c:1;var d;this.Fc=null!=(d=a.Fc)?d:2592E6;var e;this.Ec=null!=(e=a.Ec)?e:12E4;var f;this.Gc=null!=(f=a.Gc)?f:5E3;var g;this.I=null!=(g=a.I)?g:void 0;this.Ab=!!a.Ab;var h;this.yb=null!=(h=a.yb)?h:.1;var l;this.Gb=null!=(l=a.Gb)?l:10;a.handleError&&(this.handleError=a.handleError);a.Ra&&(this.Ra=a.Ra);a.kb&&(this.kb=a.kb);a.vb&&(this.vb=a.vb);this.J=a.J;this.ha=a.ha;this.N=a.N;this.R=a.R;this.sendFn=a.sendFn;
this.Yb=a.Yb;this.Vb=a.Vb;xo(this)&&(!this.J||this.J("networkless_logging"))&&yo(this)}
function yo(a){xo(a)&&!a.kb&&(a.g=!0,a.Ab&&Math.random()<=a.yb&&a.N.Wc(a.I),zo(a),a.R.ca()&&a.qb(),a.R.Ia(a.Yb,a.qb.bind(a)),a.R.Ia(a.Vb,a.jc.bind(a)))}
r=wo.prototype;r.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(xo(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.N.set(d,this.I).then(function(e){d.id=e;c.R.ca()&&Ao(c,d)}).catch(function(e){Ao(c,d);
Bo(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(xo(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J&&this.J("nwl_skip_retry")&&(e.skipRetry=c);if(this.R.ca()||this.J&&this.J("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(l){if(1==l.g)return A(l,d.N.set(e,d.I).catch(function(k){Bo(d,k)}),2);
f(g,h);l.g=0})}}this.sendFn(a,b,e.skipRetry)}else this.N.set(e,this.I).catch(function(g){d.sendFn(a,b,e.skipRetry);
Bo(d,g)})}else this.sendFn(a,b,this.J&&this.J("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(xo(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.N.Qa(d.id,c.I):e=!0;c.R.Ka&&c.J&&c.J("vss_network_hint")&&c.R.Ka(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.N.set(d,this.I).then(function(g){d.id=g;e&&c.N.Qa(d.id,c.I)}).catch(function(g){Bo(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.qb=function(){var a=this;if(!xo(this))throw Error("IndexedDB is not supported: throttleSend");this.h||(this.h=this.ha.oa(function(){var b;return B(function(c){if(1==c.g)return A(c,a.N.pc("NEW",a.I),2);if(3!=c.g)return b=c.h,b?A(c,Ao(a,b),3):(a.jc(),c.return());a.h&&(a.h=0,a.qb());c.g=0})},this.Jc))};
r.jc=function(){this.ha.ba(this.h);this.h=0};
function Ao(a,b){var c;return B(function(d){switch(d.g){case 1:if(!xo(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return A(d,a.N.qd(b.id,a.I),3);case 3:(c=d.h)||a.Ra(Error("The request cannot be found in the database."));case 2:if(Co(a,b,a.Fc)){d.B(4);break}a.Ra(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return A(d,a.N.Qa(b.id,a.I),5);case 5:return d.return();case 4:b.skipRetry||(b=Do(a,b));if(!b){d.B(0);
break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return A(d,a.N.Qa(b.id,a.I),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.g=0}})}
function Do(a,b){if(!xo(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,l,k;return B(function(m){switch(m.g){case 1:g=Eo(f);(h=Fo(f))&&a.J&&a.J("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.J&&a.J("nwl_consider_error_code")&&g||a.J&&!a.J("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Gb)){m.B(2);break}if(!a.R.Jb){m.B(3);break}return A(m,a.R.Jb(),3);case 3:if(a.R.ca()){m.B(2);break}c(e,f);if(!a.J||!a.J("nwl_consider_error_code")||void 0===(null==(l=b)?void 0:l.id)){m.B(6);
break}return A(m,a.N.Zb(b.id,a.I,!1),6);case 6:return m.return();case 2:if(a.J&&a.J("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Gb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.B(8);break}return b.sendCount<a.Hc?A(m,a.N.Zb(b.id,a.I,!0,h?!1:void 0),12):A(m,a.N.Qa(b.id,a.I),8);case 12:a.ha.oa(function(){a.R.ca()&&a.qb()},a.Gc);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(1==h.g)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):A(h,a.N.Qa(b.id,a.I),2);a.R.Ka&&a.J&&a.J("vss_network_hint")&&a.R.Ka(!0);d(e,f);h.g=0})};
return b}
function Co(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function zo(a){if(!xo(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.N.pc("QUEUED",a.I).then(function(b){b&&!Co(a,b,a.Ec)?a.ha.oa(function(){return B(function(c){if(1==c.g)return void 0===b.id?c.B(2):A(c,a.N.Zb(b.id,a.I),2);zo(a);c.g=0})}):a.R.ca()&&a.qb()})}
function Bo(a,b){a.Lc&&!a.R.ca()?a.Lc(b):a.handleError(b)}
function xo(a){return!!a.I||a.vb}
function Eo(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Fo(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Go;
function Ho(){if(Go)return Go();var a={};Go=Lm("LogsDatabaseV2",{Ya:(a.LogsRequestsStore={gb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&Vl(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),bm(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return Go()}
;function Io(a){return om(Ho(),a)}
function Jo(a,b){var c,d,e,f;return B(function(g){if(1==g.g)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},A(g,Io(b),2);if(3!=g.g)return d=g.h,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),A(g,Xl(d,"LogsRequestsStore",e),3);f=g.h;c.ticks.tc=V();Ko(c);return g.return(f)})}
function Lo(a,b){var c,d,e,f,g,h,l,k;return B(function(m){if(1==m.g)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},A(m,Io(b),2);if(3!=m.g)return d=m.h,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,V()],h=IDBKeyRange.bound(f,g),l="prev",S("use_fifo_for_networkless")&&(l="next"),k=void 0,A(m,Ul(d,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(n){return hm(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:l},function(q){q.cursor.value&&
(k=q.cursor.value,"NEW"===a&&(k.status="QUEUED",q.update(k)))})}),3);
c.ticks.tc=V();Ko(c);return m.return(k)})}
function Mo(a,b){var c;return B(function(d){if(1==d.g)return A(d,Io(b),2);c=d.h;return d.return(Ul(c,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Rl(f.g.put(g,void 0)).then(function(){return g})})}))})}
function No(a,b,c,d){c=void 0===c?!0:c;var e;return B(function(f){if(1==f.g)return A(f,Io(b),2);e=f.h;return f.return(Ul(e,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(l){return l?(l.status="NEW",c&&(l.sendCount+=1),void 0!==d&&(l.options.compress=d),Rl(h.g.put(l,void 0)).then(function(){return l})):Kl.resolve(void 0)})}))})}
function Oo(a,b){var c;return B(function(d){if(1==d.g)return A(d,Io(b),2);c=d.h;return d.return(c.delete("LogsRequestsStore",a))})}
function Po(a){var b,c;return B(function(d){if(1==d.g)return A(d,Io(a),2);b=d.h;c=V()-2592E6;return A(d,Ul(b,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){return dm(e.objectStore("LogsRequestsStore"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return em(f)})})}),0)})}
function Qo(){B(function(a){return A(a,Hm(),0)})}
function Ko(a){S("nwl_csi_killswitch")||Wn("networkless_performance",a,{sampleRate:1})}
;var Ro={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496};var So={},To=Lm("ServiceWorkerLogsDatabase",{Ya:(So.SWHealthLog={gb:1},So),shared:!0,upgrade:function(a,b){b(1)&&bm(Vl(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Uo(a){return om(To(),a)}
function Vo(a){var b,c;B(function(d){if(1==d.g)return A(d,Uo(a),2);b=d.h;c=V()-2592E6;return A(d,Ul(b,["SWHealthLog"],{mode:"readwrite",W:!0},function(e){return dm(e.objectStore("SWHealthLog"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return em(f)})})}),0)})}
function Wo(a){var b;return B(function(c){if(1==c.g)return A(c,Uo(a),2);b=c.h;return A(c,b.clear("SWHealthLog"),0)})}
;var Xo={},Yo=0;function Zo(a){var b=new Image,c=""+Yo++;Xo[c]=b;b.onload=b.onerror=function(){delete Xo[c]};
b.src=a}
;var $o;function ap(){$o||($o=new ml("yt.offline"));return $o}
function bp(a){if(S("offline_error_handling")){var b=ap().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);ap().set("errors",b,2592E3,!0)}}
;function cp(){this.g=new Map;this.h=!1}
function dp(){if(!cp.g){var a=D("yt.networkRequestMonitor.instance")||new cp;E("yt.networkRequestMonitor.instance",a);cp.g=a}return cp.g}
cp.prototype.requestComplete=function(a,b){b&&(this.h=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
cp.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:!1===a&&this.h?!0:null};
cp.prototype.removeParams=function(a){return a.split("?")[0]};
cp.prototype.removeParams=cp.prototype.removeParams;cp.prototype.isEndpointCFR=cp.prototype.isEndpointCFR;cp.prototype.requestComplete=cp.prototype.requestComplete;cp.getInstance=dp;function Z(){vf.call(this);var a=this;this.i=!1;this.h=Bf();this.h.Ia("networkstatus-online",function(){if(a.i&&S("offline_error_handling")){var b=ap().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Ck(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;zj(d)}ap().set("errors",{},2592E3,!0)}}})}
y(Z,vf);function ep(){if(!Z.g){var a=D("yt.networkStatusManager.instance")||new Z;E("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
r=Z.prototype;r.ca=function(){return this.h.ca()};
r.Ka=function(a){this.h.h=a};
r.dd=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
r.Zc=function(){this.i=!0};
r.Ia=function(a,b){return this.h.Ia(a,b)};
r.Jb=function(a){a=zf(this.h,a);a.then(function(b){S("use_cfr_monitor")&&dp().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Jb;Z.prototype.listen=Z.prototype.Ia;Z.prototype.enableErrorFlushing=Z.prototype.Zc;Z.prototype.getWindowStatus=Z.prototype.dd;Z.prototype.networkStatusHint=Z.prototype.Ka;Z.prototype.isNetworkAvailable=Z.prototype.ca;Z.getInstance=ep;function fp(a){a=void 0===a?{}:a;vf.call(this);var b=this;this.h=this.u=0;this.i=ep();var c=D("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.Ib?(this.Ib=a.Ib,c("networkstatus-online",function(){gp(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){gp(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){wf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){wf(b,"publicytnetworkstatus-offline")})))}
y(fp,vf);fp.prototype.ca=function(){var a=D("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
fp.prototype.Ka=function(a){var b=D("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
fp.prototype.Jb=function(a){var b=this,c;return B(function(d){c=D("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return S("skip_network_check_if_cfr")&&dp().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Ka((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ca())})):c?d.return(c(a)):d.return(!0)})};
function gp(a,b){a.Ib?a.h?(Cf.ba(a.u),a.u=Cf.oa(function(){a.o!==b&&(wf(a,b),a.o=b,a.h=V())},a.Ib-(V()-a.h))):(wf(a,b),a.o=b,a.h=V()):wf(a,b)}
;var hp;function ip(){var a=wo.call;hp||(hp=new fp({we:!0,ue:!0}));a.call(wo,this,{N:{Wc:Po,Qa:Oo,pc:Lo,qd:Mo,Zb:No,set:Jo},R:hp,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Aj(new Ck(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else zj(b)},
Ra:Aj,sendFn:jp,now:V,Lc:bp,ha:ll(),Yb:"publicytnetworkstatus-online",Vb:"publicytnetworkstatus-offline",Ab:!0,yb:.1,Gb:T("potential_esf_error_limit",10),J:S,kb:!(Dk()&&"www.youtube-nocookie.com"!==dc(document.location.toString()))});this.i=new sg;S("networkless_immediately_drop_all_requests")&&Qo();Im("LogsDatabaseV2")}
y(ip,wo);function kp(){var a=D("yt.networklessRequestController.instance");a||(a=new ip,E("yt.networklessRequestController.instance",a),S("networkless_logging")&&Am().then(function(b){a.I=b;yo(a);a.i.resolve();a.Ab&&Math.random()<=a.yb&&a.I&&Vo(a.I);S("networkless_immediately_drop_sw_health_store")&&lp(a)}));
return a}
ip.prototype.writeThenSend=function(a,b){b||(b={});b=mp(a,b);Dk()||(this.g=!1);wo.prototype.writeThenSend.call(this,a,b)};
ip.prototype.sendThenWrite=function(a,b,c){b||(b={});b=mp(a,b);Dk()||(this.g=!1);wo.prototype.sendThenWrite.call(this,a,b,c)};
ip.prototype.sendAndWrite=function(a,b){b||(b={});b=mp(a,b);Dk()||(this.g=!1);wo.prototype.sendAndWrite.call(this,a,b)};
ip.prototype.awaitInitialization=function(){return this.i.promise};
function lp(a){var b;B(function(c){if(!a.I)throw b=Gl("clearSWHealthLogsDb"),b;return c.return(Wo(a.I).catch(function(d){a.handleError(d)}))})}
function jp(a,b,c,d){d=void 0===d?!1:d;b=S("web_fp_via_jspb")?Object.assign({},b):b;S("use_cfr_monitor")&&np(a,b);if(S("use_request_time_ms_header"))b.headers&&Jj(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(V())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)hk(a,void 0,"POST",f,void 0);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)hk(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var l=new ab({url:a});if(l.i&&l.h||l.l){var k=cc(a.match(bc)[5]||null);var m=!(!k||!k.endsWith("/aclk")||"1"!==ic(a,"ri"));break b}}catch(q){}m=!1}if(m){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var n=!0;break b}}catch(q){}n=!1}c=n?!0:!1}else c=!1;c||Zo(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),oo(a,b.postBody,b,lk,d)):oo(a,JSON.stringify(b.postParams),
b,kk,d):lk(a,b)}
function mp(a,b){S("use_event_time_ms_header")&&Jj(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(V())));return b}
function np(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){dp().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){dp().requestComplete(a,!0);d(e,f)}}
;var op=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};E("ytNetworklessLoggingInitializationOptions",op);function pp(a){var b=this;this.config_=null;a?this.config_=a:Jn()&&(this.config_=Kn());Gk(function(){uo(b)},5E3)}
pp.prototype.isReady=function(){!this.config_&&Jn()&&(this.config_=Kn());return!!this.config_};
function vo(a,b,c,d){function e(t){t=void 0===t?!1:t;var u;if(d.retry&&"www.youtube-nocookie.com"!=h&&(t||S("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(u=so(b,c,k,l)),u)){var z=g.onSuccess,G=g.onFetchSuccess;g.onSuccess=function(X,La){to(u);z(X,La)};
c.onFetchSuccess=function(X,La){to(u);G(X,La)}}try{if(t&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?kp().writeThenSend(p,g):kp().sendAndWrite(p,g);
else if(d.compress){var P=!d.networklessOptions.writeThenSend;if(g.postBody){var U=g.postBody;"string"!==typeof U&&(U=JSON.stringify(g.postBody));oo(p,U,g,lk,P)}else oo(p,JSON.stringify(g.postParams),g,kk,P)}else S("web_all_payloads_via_jspb")?lk(p,g):kk(p,g)}catch(X){if("InvalidAccessError"===X.name)u&&(to(u),u=0),Aj(Error("An extension is blocking network request."));else throw X;}u&&Gk(function(){uo(a)},5E3)}
!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Aj(new Ck("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Ck("innertube xhrclient not ready",b,c,d);zj(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(t,u){if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,u){if(d.onError)d.onError(u)},
onFetchError:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.ld)&&(h=f);var l=a.config_.nd||!1,k=Sn(l,h,d);Object.assign(g.headers,k);(f=g.headers.Authorization)&&!h&&l&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.jd+"/"+b,n={alt:"json"},q=a.config_.md&&f;q=q&&f.startsWith("Bearer");q||(n.key=a.config_.hd);var p=Ij(""+h+m,n||{},!0);D("ytNetworklessLoggingInitializationOptions")&&
op.isNwlInitialized?ym().then(function(t){e(t)}):e(!1)}
;var qp=C.ytPubsubPubsubInstance||new M,rp=C.ytPubsubPubsubSubscribedKeys||{},sp=C.ytPubsubPubsubTopicToKeys||{},tp=C.ytPubsubPubsubIsSynchronous||{};M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.rb;M.prototype.publish=M.prototype.Za;M.prototype.clear=M.prototype.clear;E("ytPubsubPubsubInstance",qp);E("ytPubsubPubsubTopicToKeys",sp);E("ytPubsubPubsubIsSynchronous",tp);E("ytPubsubPubsubSubscribedKeys",rp);function up(){var a=D("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var vp=Symbol("injectionDeps");function wp(){this.key=Gn}
function xp(){this.h=new Map;this.g=new Map}
xp.prototype.resolve=function(a){return a instanceof wp?yp(this,a.key,[],!0):yp(this,a,[])};
function yp(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Ed)var e=d.Ed;else if(d.Dd)e=d[vp]?zp(a,d[vp],c):[],e=d.Dd.apply(d,x(e));else if(d.Cd){e=d.Cd;var f=e[vp]?zp(a,e[vp],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(x(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Ce||a.g.set(b,e);return e}
function zp(a,b,c){return b?b.map(function(d){return d instanceof wp?yp(a,d.key,c,!0):yp(a,d,c)}):[]}
;var Ap;function Bp(){Ap||(Ap=new xp);return Ap}
;var Cp=window;function Dp(){var a,b;return"h5vcc"in Cp&&(null==(a=Cp.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Cp.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Cp&&Cp.performance.mark&&Cp.performance.measure?2:0}
function Ep(a){switch(Dp()){case 1:Cp.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Cp.performance.mark(a+"-start");break;case 0:break;default:Pb()}}
function Fp(a){switch(Dp()){case 1:Cp.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Cp.performance.mark(c);Cp.performance.measure(a,b,c);break;case 0:break;default:Pb()}}
;var Gp=S("web_enable_lifecycle_monitoring")&&0!==Dp(),Hp=S("web_enable_lifecycle_monitoring");function Ip(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?ll():d;this.l=c;this.h=d;this.i=new sg;this.g=a;for(a={Ha:0};a.Ha<this.g.length;a={Fb:void 0,Ha:a.Ha},a.Ha++)a.Fb=this.g[a.Ha],c=function(e){return function(){e.Fb.Ob();b.g[e.Ha].Hb=!0;b.g.every(function(f){return!0===f.Hb})&&b.i.resolve()}}(a),d=this.h.Fa(c,Jp(this,a.Fb)),this.g[a.Ha]=Object.assign({},a.Fb,{Ob:c,
jobId:d})}
function Kp(a){var b=Array.from(a.g.keys()).sort(function(d,e){return Jp(a,a.g[e])-Jp(a,a.g[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],void 0===c.jobId||c.Hb||(a.h.ba(c.jobId),a.h.Fa(c.Ob,10))}
Ip.prototype.cancel=function(){for(var a=w(this.g),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.Hb||this.h.ba(b.jobId),b.Hb=!0;this.i.resolve()};
function Jp(a,b){var c;return null!=(c=b.priority)?c:a.l}
;function Lp(a){this.state=a;this.i=[];this.o=void 0;this.G={};Gp&&Ep(this.state)}
Lp.prototype.install=function(a){this.i.push(a);return this};
function Mp(a){Gp&&Fp(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&"none"===d.Ca}):d.from===a.state&&"none"===d.Ca});
if(b){a.h&&(Kp(a.h),a.h=void 0);Hp&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";Gp&&Ep(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(Np(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function Np(a,b){var c=b.filter(function(e){return 10===Op(a,e)}),d=b.filter(function(e){return 10!==Op(a,e)});
return a.G.Be?function(){var e=Ga.apply(0,arguments);return B(function(f){if(1==f.g)return A(f,a.ma.apply(a,[c].concat(x(e))),2);a.u.apply(a,[d].concat(x(e)));f.g=0})}:function(){var e=Ga.apply(0,arguments);
a.wa.apply(a,[c].concat(x(e)));a.u.apply(a,[d].concat(x(e)))}}
Lp.prototype.wa=function(a){for(var b=Ga.apply(1,arguments),c=ll(),d=w(a),e=d.next(),f={};!e.done;f={mb:void 0},e=d.next())f.mb=e.value,c.fb(function(g){return function(){Pp(g.mb.name);g.mb.hb.apply(g.mb,x(b));Qp(g.mb.name)}}(f))};
Lp.prototype.ma=function(a){var b=Ga.apply(1,arguments),c,d,e,f,g;return B(function(h){1==h.g&&(c=ll(),d=w(a),e=d.next(),f={});if(3!=h.g){if(e.done)return h.B(0);f.Ua=e.value;f.ub=void 0;g=function(l){return function(){Pp(l.Ua.name);var k=l.Ua.hb.apply(l.Ua,x(b));"function"===typeof(null==k?void 0:k.then)?l.ub=k.then(function(){Qp(l.Ua.name)}):Qp(l.Ua.name)}}(f);
c.fb(g);return f.ub?A(h,f.ub,3):h.B(3)}f={Ua:void 0,ub:void 0};e=d.next();return h.B(2)})};
Lp.prototype.u=function(a){var b=Ga.apply(1,arguments),c=this,d=a.map(function(e){return{Ob:function(){Pp(e.name);e.hb.apply(e,x(b));Qp(e.name)},
priority:Op(c,e)}});
d.length&&(this.h=new Ip(d))};
function Op(a,b){var c,d;return null!=(d=null!=(c=a.o)?c:b.priority)?d:0}
function Pp(a){Gp&&a&&Ep(a)}
function Qp(a){Gp&&a&&Fp(a)}
da.Object.defineProperties(Lp.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Rp(a){Lp.call(this,void 0===a?"none":a);this.g=null;this.o=10;this.transitions=[{from:"none",Ca:"application_navigating",action:this.K},{from:"application_navigating",Ca:"none",action:this.O},{from:"application_navigating",Ca:"application_navigating",action:function(){}},
{from:"none",Ca:"none",action:function(){}}]}
var Sp;y(Rp,Lp);Rp.prototype.K=function(a,b){var c=this;this.g=Gk(function(){"application_navigating"===c.l&&Mp(c)},5E3);
a(null==b?void 0:b.event)};
Rp.prototype.O=function(a,b){this.g&&(Cf.ba(this.g),this.g=null);a(null==b?void 0:b.event)};
function Tp(){Sp||(Sp=new Rp);return Sp}
;var Up=[{Sb:function(a){return"Cannot read property '"+a.key+"'"},
Eb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Sb:function(a){return"Cannot call '"+a.key+"'"},
Eb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Sb:function(a){return a.key+" is not defined"},
Eb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Wp={Aa:[],xa:[{hb:Vp,weight:500}]};function Vp(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Xp(){this.xa=[];this.Aa=[]}
var Yp;function Zp(){if(!Yp){var a=Yp=new Xp;a.Aa.length=0;a.xa.length=0;Wp.Aa&&a.Aa.push.apply(a.Aa,Wp.Aa);Wp.xa&&a.xa.push.apply(a.xa,Wp.xa)}return Yp}
;var $p=new M;function aq(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=bq(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=bq(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=bq(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function bq(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function cq(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=dq(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,l=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=aq(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?dq(f+".ve",g,h,l):0;d+=f;d+=dq(e,a[e],b,c);if(500<d)break}}else c[b]=eq(a),d+=c[b].length;else c[b]=eq(a),d+=c[b].length;return d}
function dq(a,b,c,d){c+="."+a;a=eq(b);d[c]=a;return c.length+a.length}
function eq(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var fq=[];E("yt.logging.transport.getScrapedGelPayloads",function(){return fq});function gq(){this.store={};this.g={}}
gq.prototype.storePayload=function(a,b){a=hq(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
gq.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=iq(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,x(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,x(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,x(this.smartExtractMatchingEntries(a))));return c};
gq.prototype.extractMatchingEntries=function(a){a=iq(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,x(this.store[a[c]])),delete this.store[a[c]]);return b};
gq.prototype.getSequenceCount=function(a){a=iq(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function iq(a,b){var c=hq(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(1>=d.length&&hq(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(jq(b.auth,g[0])){var h=b.isJspb;jq(void 0===h?"undefined":h?"true":"false",g[1])&&jq(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),jq(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function jq(a,b){return void 0===a||"undefined"===a?!0:a===b}
gq.prototype.getSequenceCount=gq.prototype.getSequenceCount;gq.prototype.extractMatchingEntries=gq.prototype.extractMatchingEntries;gq.prototype.smartExtractMatchingEntries=gq.prototype.smartExtractMatchingEntries;gq.prototype.storePayload=gq.prototype.storePayload;function hq(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;var kq=T("initial_gel_batch_timeout",2E3),lq=T("gel_queue_timeout_max_ms",6E4),mq=Math.pow(2,16)-1,nq=T("gel_min_batch_size",5),oq=void 0;function pq(){this.l=this.g=this.h=0;this.i=!1}
var qq=new pq,rq=new pq,sq=new pq,tq=new pq,uq,vq=!0,wq=1,xq=new Map,yq=C.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",yq);var zq=C.ytLoggingTransportTokensToJspbCttTargetIds_||{};E("ytLoggingTransportTokensToJspbCttTargetIds_",zq);var Aq={};function Bq(){var a=D("yt.logging.ims");a||(a=new gq,E("yt.logging.ims",a));return a}
function Cq(a,b){if("log_event"===a.endpoint){Dq(a);var c=Eq(a),d=Fq(a.payload)||"",e=Gq(d),f=200;if(e){if(!1===e.enabled&&!S("web_payload_policy_disabled_killswitch"))return;f=Hq(e.tier);if(400===f){Iq(a,b);return}}Aq[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};Bq().storePayload(e,a.payload);Jq(b,c,!1,e,Kq(d))}}
function Lq(a,b,c){if("log_event"===b.endpoint){Dq(void 0,b);var d=Eq(b,!0),e=Gq(a),f=200;if(e){if(!1===e.enabled&&!S("web_payload_policy_disabled_killswitch"))return;f=Hq(e.tier);if(400===f){Mq(a,b,c);return}}Aq[d]=!0;e={cttAuthInfo:d,isJspb:!0,tier:f};Bq().storePayload(e,b.payload.toJSON());Jq(c,d,!0,e,Kq(a))}}
function Jq(a,b,c,d,e){function f(){Nq({writeThenSend:!0},S("flush_only_full_queue")?b:void 0,c,d.tier)}
c=void 0===c?!1:c;e=void 0===e?!1:e;a&&(oq=new a);a=T("tvhtml5_logging_max_batch_ads_fork")||T("web_logging_max_batch")||100;var g=V(),h=Oq(c,d.tier),l=h.l;e&&(h.i=!0);e=0;d&&(e=Bq().getSequenceCount(d));1E3<=e?f():e>=a?uq||(uq=Pq(function(){f();uq=void 0},0)):10<=g-l&&(Qq(c,d.tier),h.l=g)}
function Iq(a,b){if("log_event"===a.endpoint){Dq(a);var c=Eq(a),d=new Map;d.set(c,[a.payload]);var e=Fq(a.payload)||"";b&&(oq=new b);return new tg(function(f,g){oq&&oq.isReady()?Rq(d,oq,f,g,{bypassNetworkless:!0},!0,Kq(e)):f()})}}
function Mq(a,b,c){if("log_event"===b.endpoint){Dq(void 0,b);var d=Eq(b,!0),e=new Map;e.set(d,[b.payload.toJSON()]);c&&(oq=new c);return new tg(function(f){oq&&oq.isReady()?Sq(e,oq,f,{bypassNetworkless:!0},!0,Kq(a)):f()})}}
function Eq(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new nj;c.videoId?ge(d,1,oe,Bd(c.videoId)):c.playlistId&&ge(d,2,oe,Bd(c.playlistId));zq[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),yq[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Nq(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new tg(function(e,f){var g=Oq(c,d),h=g.i;g.i=!1;Tq(g.h);Tq(g.g);g.g=0;oq&&oq.isReady()?void 0===d&&S("enable_web_tiered_gel")?Uq(e,f,a,b,c,300,h):Uq(e,f,a,b,c,d,h):(Qq(c,d),e())})}
function Uq(a,b,c,d,e,f,g){var h=oq;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var l=new Map,k=new Map,m={isJspb:e,cttAuthInfo:d,tier:f},n={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=S("enable_web_tiered_gel")?Bq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):Bq().extractMatchingEntries(n),l.set(d,b),Sq(l,h,a,c,!1,g)):(l=S("enable_web_tiered_gel")?Bq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):Bq().extractMatchingEntries(n),k.set(d,l),Rq(k,h,
a,b,c,!1,g));else if(e){b=w(Object.keys(Aq));for(k=b.next();!k.done;k=b.next())k=k.value,f=S("enable_web_tiered_gel")?Bq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):Bq().extractMatchingEntries({isJspb:!0,cttAuthInfo:k}),0<f.length&&l.set(k,f),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete Aq[k];Sq(l,h,a,c,!1,g)}else{l=w(Object.keys(Aq));for(m=l.next();!m.done;m=l.next())m=m.value,n=S("enable_web_tiered_gel")?Bq().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):Bq().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),0<n.length&&k.set(m,n),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete Aq[m];Rq(k,h,a,b,c,!1,g)}}
function Qq(a,b){function c(){Nq({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Oq(a,b),e=d===tq||d===sq?5E3:lq;S("web_gel_timeout_cap")&&!d.g&&(e=Pq(function(){c()},e),d.g=e);
Tq(d.h);e=R("LOGGING_BATCH_TIMEOUT",T("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&vq&&(e=kq);e=Pq(function(){0<T("gel_min_batch_size")?Bq().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=nq&&c():c()},e);
d.h=e}
function Rq(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(V()),l=a.size,k=Vq(g);a=w(a);var m=a.next();for(g={};!m.done;g={Ub:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Xb:void 0,Wb:void 0},m=a.next()){var n=w(m.value);m=n.next().value;n=n.next().value;g.batchRequest=Lb({context:Ln(b.config_||Kn())});if(!Oa(n)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=yq[m])&&Wq(g.batchRequest,m,n);delete yq[m];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===
m;Xq(g.batchRequest,h,g.dangerousLogToVisitorSession);Yq(e);g.Xb=function(q){S("start_client_gcf")&&Cf.oa(function(){return B(function(p){return A(p,Zq(q),0)})});
l--;l||c()};
g.Ub=0;g.Wb=function(q){return function(){q.Ub++;if(e.bypassNetworkless&&1===q.Ub)try{vo(b,k,q.batchRequest,$q({writeThenSend:!0},q.dangerousLogToVisitorSession,q.Xb,q.Wb,f)),vq=!1}catch(p){zj(p),d()}l--;l||c()}}(g);
try{vo(b,k,g.batchRequest,$q(e,g.dangerousLogToVisitorSession,g.Xb,g.Wb,f)),vq=!1}catch(q){zj(q),d()}}}
function Sq(a,b,c,d,e,f){d=void 0===d?{}:d;var g=Math.round(V()),h={value:a.size},l=new Map([].concat(x(a)));l=w(l);for(var k=l.next();!k.done;k=l.next()){var m=w(k.value).next().value,n=a.get(m);k=new oj;var q=b.config_||Kn(),p=new Xi,t=new Qi;K(t,1,q.xc);K(t,2,q.wc);qe(t,16,q.kd);K(t,17,q.vc);if(q.Nb){var u=q.Nb,z=new Ni;u.coldConfigData&&K(z,1,u.coldConfigData);u.appInstallData&&K(z,6,u.appInstallData);u.coldHashData&&K(z,3,u.coldHashData);u.hotHashData&&z.g(u.hotHashData);J(t,Ni,62,z)}if((u=C.devicePixelRatio)&&
1!=u){if(null!=u&&"number"!==typeof u)throw Error("Value of float/double field must be a number, found "+typeof u+": "+u);de(t,65,u)}u=R("EXPERIMENTS_TOKEN","");""!==u&&K(t,54,u);u=Pj();if(0<u.length){z=new Ti;for(var G=0;G<u.length;G++){var P=new Ri;K(P,1,u[G].key);ge(P,2,Si,Bd(u[G].value));me(z,15,Ri,P)}J(p,Ti,5,z)}Mn(q,t);Nn(p);On(t);Pn(q,t);Qn(t);S("start_client_gcf")&&Rn(t);R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(q=new Wi,K(q,3,R("DELEGATED_SESSION_ID")));!S("fill_delegate_context_in_gel_killswitch")&&
(u=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(z=ie(p,Wi,3)||new Wi,q=p,u=K(z,18,u),J(q,Wi,3,u));q=t;u=w(Object.entries(Hj(R("DEVICE",""))));for(z=u.next();!z.done;z=u.next())G=w(z.value),z=G.next().value,G=G.next().value,"cbrand"===z?K(q,12,G):"cmodel"===z?K(q,13,G):"cbr"===z?K(q,87,G):"cbrver"===z?K(q,88,G):"cos"===z?K(q,18,G):"cosver"===z?K(q,19,G):"cplatform"===z&&qe(q,42,wk(G));J(p,Qi,1,t);J(k,Xi,1,p);if(t=zq[m])a:{if(ne(t,1))p=1;else if(t.getPlaylistId())p=2;else break a;J(k,nj,
4,t);t=ie(k,Xi,1)||new Xi;q=ie(t,Wi,3)||new Wi;u=new Vi;K(u,2,m);qe(u,1,p);me(q,12,Vi,u);J(t,Wi,3,q)}delete zq[m];m="visitorOnlyApprovedKey"===m;ar()||de(k,2,Ad(g));!m&&(p=R("EVENT_ID"))&&(t=br(),q=new mj,K(q,1,p),de(q,2,Ad(t)),J(k,mj,5,q));Yq(d);if(S("jspb_serialize_with_worker")&&(p=$n())&&d.writeThenSend){xq.set(wq,{client:b,resolve:c,networklessOptions:d,isIsolated:e,useVSSEndpoint:f,dangerousLogToVisitorSession:m,requestsOutstanding:h});p.postMessage({op:"gelBatchToSerialize",batchRequest:k.toJSON(),
clientEvents:n,key:wq});wq++;break}if(n){p=[];for(t=0;t<n.length;t++)try{p.push(new kj(n[t]))}catch(U){zj(new Ck("Transport failed to deserialize "+String(n[t])))}n=p}else n=[];n=w(n);for(p=n.next();!p.done;p=n.next())me(k,3,kj,p.value);n={startTime:V(),ticks:{},infos:{}};k=se(k);n.ticks.geljspc=V();S("log_jspb_serialize_latency")&&Wn("gel_jspb_serialize",n,{sampleRate:.1});cr(k,b,c,d,e,f,m,h)}}
function cr(a,b,c,d,e,f,g,h){d=void 0===d?{}:d;h=void 0===h?{value:0}:h;f=Vq(f);d=$q(d,g,function(l){S("start_client_gcf")&&Cf.oa(function(){return B(function(k){return A(k,Zq(l),0)})});
h.value--;h.value||c()},function(){h.value--;
h.value||c()},e);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;vo(b,f,"",d);vq=!1}
function Yq(a){S("always_send_and_write")&&(a.writeThenSend=!1)}
function $q(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,se:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};ar()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));return a}
function Xq(a,b,c){ar()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&(c=br(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function br(){var a=R("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*mq/2));a++;a>mq&&(a=1);tj("BATCH_CLIENT_COUNTER",a);return a}
function Wq(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Dq(a,b){if(!D("yt.logging.transport.enableScrapingForTest")){var c=Oj("il_payload_scraping");if("enable_il_payload_scraping"===(void 0!==c?String(c):""))fq=[],E("yt.logging.transport.enableScrapingForTest",!0),E("yt.logging.transport.scrapedPayloadsForTesting",fq),E("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
E("yt.logging.transport.scrapeClientEvent",!0);else return}c=D("yt.logging.transport.scrapedPayloadsForTesting");var d=D("yt.logging.transport.payloadToScrape");b&&(b=D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);b=D("yt.logging.transport.scrapeClientEvent");if(d&&1<=d.length)for(var e=0;e<d.length;e++)if(a&&a.payload[d[e]])if(b)c.push(a.payload);else{var f=void 0;c.push((null==(f=a)?void 0:f.payload)[d[e]])}E("yt.logging.transport.scrapedPayloadsForTesting",
c)}
function ar(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function Pq(a,b){return!1===S("embeds_transport_use_scheduler")?Yj(a,b):S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?Gk(function(){if("none"===Tp().l)a();else{var c={};Tp().install((c.none={hb:a},c))}},b):Gk(a,b)}
function Tq(a){S("transport_use_scheduler")?Cf.ba(a):window.clearTimeout(a)}
function Zq(a){var b,c,d,e,f,g,h,l,k,m;return B(function(n){if(1==n.g){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var q=d?d[Mi.name]:void 0;e=q;g=null==(f=d)?void 0:f.hotHashData;q=d?d[Li.name]:void 0;h=q;k=null==(l=d)?void 0:l.coldHashData;return(m=Bp().resolve(new wp))?g?e?A(n,Hn(m,g,e),2):A(n,Hn(m,g),2):n.B(2):n.return()}return k?h?A(n,In(m,k,h),0):A(n,In(m,k),0):n.B(0)})}
function Oq(a,b){b=void 0===b?200:b;return a?300===b?tq:rq:300===b?sq:qq}
function Gq(a){if(S("enable_web_tiered_gel")){a=Ro[a||""];var b,c;if(null==Bp().resolve(new wp))var d=void 0;else{var e=null!=(d=D("yt.gcf.config.hotConfigGroup"))?d:R("RAW_HOT_CONFIG_GROUP");d=null==e?void 0:null==(b=e.loggingHotConfig)?void 0:null==(c=b.eventLoggingConfig)?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return b[c]}}
function Fq(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Ro[b])return b}
function Hq(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function Kq(a){return"gelDebuggingEvent"===a}
function Vq(a){return(void 0===a?0:a)&&S("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var dr=C.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",dr);
function er(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||V());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=up();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,b={index:fr(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete dr[d.sequenceGroup]);(d.sendIsolatedPayload?Iq:Cq)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
function gr(a){Nq(void 0,void 0,void 0===a?!1:a)}
function fr(a){dr[a]=a in dr?dr[a]+1:0;return dr[a]}
;var hr=[];function ir(a,b,c){c=void 0===c?{}:c;var d=pp;R("ytLoggingEventsDefaultDisabled",!1)&&pp===pp&&(d=null);S("web_all_payloads_via_jspb")?(c.timestamp||(c.lact=up(),c.timestamp=V()),hr.push({Bc:a,payload:b,options:c})):er(a,b,d,c)}
;var jr=C.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",jr);function kr(a,b){var c=void 0;c=void 0===c?{}:c;var d=!1;R("ytLoggingEventsDefaultDisabled",!1)&&(d=!0);d=d?null:pp;c=void 0===c?{}:c;var e=Math.round(c.timestamp||V());de(b,1,Ad(e<Number.MAX_SAFE_INTEGER?e:0));e=new jj;if(c.lact)de(e,1,Ad(isFinite(c.lact)?c.lact:-1));else if(c.timestamp)de(e,1,Ad(-1));else{var f=up();de(e,1,Ad(isFinite(f)?f:-1))}if(c.sequenceGroup&&!S("web_gel_sequence_info_killswitch")){f=c.sequenceGroup;var g=fr(f),h=new ij;de(h,2,Ad(g));K(h,1,f);J(e,ij,3,h);c.endOfSequence&&delete jr[c.sequenceGroup]}J(b,
jj,33,e);(c.sendIsolatedPayload?Mq:Lq)(a,{endpoint:"log_event",payload:b,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}
;var lr=new Set,mr=0,nr=0,or=0,pr=[],qr=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function rr(a){try{lr.add(a.message)}catch(b){}mr++}
function sr(){for(var a=w(qr),b=a.next();!b.done;b=a.next()){var c=mc();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
function tr(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}lk(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function ur(){var a;return B(function(b){return(a=Vf())?b.return(a.then(function(c){c=se(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return Gc(d,3)})):b.return(Promise.resolve(null))})}
;var vr={},wr=[],Kg=new M,xr={};function yr(){for(var a=w(wr),b=a.next();!b.done;b=a.next())b=b.value,b()}
function zr(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Nj(b)]:a.getAttribute("data-"+b):null;return c}
function Ar(a){Kg.Za.apply(Kg,arguments)}
;function Br(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Cr(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Dr(a,b,c){Er||(Er={},Fr=new Set,Vj(window,"message",function(d){a:if(Fr.has(d.origin)){try{var e=JSON.parse(d.data)}catch(g){break a}var f=Er[e.id];f&&d.origin===f.Tc&&(d=f.Fd,d.G=!0,d.G&&(Cb(d.u,d.sendMessage,d),d.u.length=0),d.hc(e))}}));
a=String(Cr(a,"host"));Er[c]={Fd:b,Tc:a};Fr.add(a)}
var Er=null,Fr=null;var Gr=window;
function Hr(a,b,c){this.o=this.g=this.h=null;this.i=0;this.G=!1;this.u=[];this.l=null;this.O={};if(!a)throw Error("YouTube player element ID required.");this.id=Ra(this);this.K=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?ec(a.src):"https://www.youtube.com"),this.h=new Br(b),c||(b=Ir(this,a),this.o=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+Ra(this.g)),vr[this.g.id]=this,window.postMessage){this.l=
new M;Jr(this);b=Cr(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in xr)xr.hasOwnProperty(e)&&Kr(this,e)}}
r=Hr.prototype;r.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
r.getIframe=function(){return this.g};
r.hc=function(a){Lr(this,a.event,a)};
r.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);Mr(this,a);return this};
function Kr(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.K===b[0]&&Mr(a,c)}}
r.destroy=function(){this.g&&this.g.id&&(vr[this.g.id]=null);Ue(this.l);if(this.o){var a=this.o,b=this.g,c=b.parentNode;c&&c.replaceChild(a,b)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);Er&&(Er[this.id]=null);this.h=null;a=this.g;for(var d in Jb)Jb[d][0]==a&&Xj(d);this.o=this.g=null};
r.lc=function(){return{}};
function Nr(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.G?a.sendMessage(b):a.u.push(b)}
function Lr(a,b,c){a.l.ya||(c={target:a,data:c},a.l.Za(b,c),Ar(a.K+"."+b,c))}
function Ir(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("referrerPolicy","strict-origin-when-cross-origin");c.setAttribute("title","YouTube "+Cr(a.h,"title"));(b=Cr(a.h,
"width"))&&c.setAttribute("width",b.toString());(b=Cr(a.h,"height"))&&c.setAttribute("height",b.toString());var g=a.lc();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&Cb(["debugjs","debugcss"],function(l){var k=ic(window.location.href,l);null!==k&&(g[l]=k)});
var h=""+Cr(a.h,"host")+("/embed/"+Cr(a.h,"videoId"))+"?"+gc(g);Gr.yt_embedsEnableUaChProbe?ur().then(function(l){var k=new URL(h),m=Number(k.searchParams.get("reloads"));isNaN(m)&&(m=0);k.searchParams.set("reloads",(m+1).toString());l&&k.searchParams.set("uach",l);k.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());l=yb(k.href).toString();Vb(c,zb(l));c.sandbox.add("allow-presentation","allow-top-navigation");return l}):Gr.yt_embedsEnableIframeSrcWithIntent?(Vb(c,zb(h)),
c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=h;
return c}
r.Cc=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.i)};
function Jr(a){Dr(a.h,a,a.id);a.i=Zj(a.Cc.bind(a));Vj(a.g,"load",function(){window.clearInterval(a.i);a.i=Zj(a.Cc.bind(a))})}
function Mr(a,b){a.O[b]||(a.O[b]=!0,Nr(a,"addEventListener",[b]))}
r.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[ec(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var d=0;d<c.length;d++)try{this.g.contentWindow.postMessage(b,c[d])}catch(sc){if(sc.name&&"SyntaxError"===sc.name){if(!(sc.message&&0<sc.message.indexOf("target origin ''"))){var e=void 0,f=sc;e=void 0===e?{}:e;e.name=R("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=R("INNERTUBE_CONTEXT_CLIENT_VERSION");var g="WARNING",h=!1;g=void 0===g?"ERROR":
g;h=void 0===h?!1:h;if(f){f.hasOwnProperty("level")&&f.level&&(g=f.level);if(S("console_log_js_exceptions")){var l=f,k=[];k.push("Name: "+l.name);k.push("Message: "+l.message);l.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(l.params));l.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(l.args));k.push("File name: "+l.fileName);k.push("Stacktrace: "+l.stack);window.console.log(k.join("\n"),l)}if(!(5<=mr)){var m=void 0,n=void 0,q=f,p=e,t=Xb(q),u=t.message||"Unknown Error",
z=t.name||"UnknownError",G=t.stack||q.h||"Not available";if(G.startsWith(z+": "+u)){var P=G.split("\n");P.shift();G=P.join("\n")}var U=t.lineNumber||"Not available",X=t.fileName||"Not available",La=G,Da=0;if(q.hasOwnProperty("args")&&q.args&&q.args.length)for(var Ma=0;Ma<q.args.length&&!(Da=cq(q.args[Ma],"params."+Ma,p,Da),500<=Da);Ma++);else if(q.hasOwnProperty("params")&&q.params){var ja=q.params;if("object"===typeof q.params)for(n in ja){if(ja[n]){var qa="params."+n,ra=eq(ja[n]);p[qa]=ra;Da+=qa.length+
ra.length;if(500<Da)break}}else p.params=eq(ja)}if(pr.length)for(var ia=0;ia<pr.length&&!(Da=cq(pr[ia],"params.context."+ia,p,Da),500<=Da);ia++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var W={message:u,name:z,lineNumber:U,fileName:X,stack:La,params:p,sampleWeight:1},Pm=Number(q.columnNumber);isNaN(Pm)||(W.lineNumber=W.lineNumber+":"+Pm);if("IGNORED"===q.level)m=0;else a:{for(var Qm=Zp(),Rm=w(Qm.Aa),Lh=Rm.next();!Lh.done;Lh=Rm.next()){var Sm=Lh.value;if(W.message&&
W.message.match(Sm.xe)){m=Sm.weight;break a}}for(var Tm=w(Qm.xa),Mh=Tm.next();!Mh.done;Mh=Tm.next()){var Um=Mh.value;if(Um.hb(W)){m=Um.weight;break a}}m=1}W.sampleWeight=m;for(var Vm=w(Up),Nh=Vm.next();!Nh.done;Nh=Vm.next()){var Oh=Nh.value;if(Oh.Eb[W.name])for(var Wm=w(Oh.Eb[W.name]),Ph=Wm.next();!Ph.done;Ph=Wm.next()){var Xm=Ph.value,Oe=W.message.match(Xm.regexp);if(Oe){W.params["params.error.original"]=Oe[0];for(var Qh=Xm.groups,Ym={},tc=0;tc<Qh.length;tc++)Ym[Qh[tc]]=Oe[tc+1],W.params["params.error."+
Qh[tc]]=Oe[tc+1];W.message=Oh.Sb(Ym);break}}}W.params||(W.params={});var Zm=Zp();W.params["params.errorServiceSignature"]="msg="+Zm.Aa.length+"&cb="+Zm.xa.length;W.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(W.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));qb("sample").constructor!==ob&&(W.params["params.fconst"]="true");var sd=W;window.yterr&&"function"===typeof window.yterr&&window.yterr(sd);if(0!==sd.sampleWeight&&
!lr.has(sd.message))if(h&&S("web_enable_error_204")){var $m=sd;tr(void 0===g?"ERROR":g,$m);rr($m)}else{var Rh=void 0,Sh=void 0,an=void 0,bn=void 0,Th=void 0,O=sd,Rb=g;Rb=void 0===Rb?"ERROR":Rb;if("ERROR"===Rb){$p.Za("handleError",O);if(S("record_app_crashed_web")&&0===or&&1===O.sampleWeight)if(or++,S("errors_via_jspb")){var Tr=new hj;Th=qe(Tr,1,1);if(!S("report_client_error_with_app_crash_ks")){var Ur=new gj,Vr=new fj,Wr=new ej,Xr=new dj;var Yr=K(Xr,1,O.message);var Zr=J(Wr,dj,3,Yr);bn=J(Vr,ej,5,
Zr);an=J(Ur,fj,9,bn);J(Th,gj,4,an)}var cn=S("jspb_sparse_encoded_pivot")?new kj([{}]):new kj;je(cn,hj,20,lj,Th);kr("appCrashed",cn)}else{var dn={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};S("report_client_error_with_app_crash_ks")||(dn.systemHealth={crashData:{clientError:{logMessage:{message:O.message}}}});ir("appCrashed",dn)}nr++}else"WARNING"===Rb&&$p.Za("handleWarning",O);if(S("kevlar_gel_error_routing"))a:{var td=Rb;if(S("errors_via_jspb")){if(sr())Sh=void 0;else{var uc=new aj;K(uc,1,O.stack);O.fileName&&
K(uc,4,O.fileName);var jb=O.lineNumber&&O.lineNumber.split?O.lineNumber.split(":"):[];0!==jb.length&&(1!==jb.length||isNaN(Number(jb[0]))?2!==jb.length||isNaN(Number(jb[0]))||isNaN(Number(jb[1]))||(pe(uc,2,Number(jb[0])),pe(uc,3,Number(jb[1]))):pe(uc,2,Number(jb[0])));var Sb=new dj;K(Sb,1,O.message);K(Sb,3,O.name);pe(Sb,6,O.sampleWeight);"ERROR"===td?qe(Sb,2,2):"WARNING"===td?qe(Sb,2,1):qe(Sb,2,0);var Uh=new bj;de(Uh,1,rd(!0));je(Uh,aj,3,cj,uc);var Tb=new $i;K(Tb,3,window.location.href);for(var en=
R("FEXP_EXPERIMENTS",[]),Vh=0;Vh<en.length;Vh++){var Wh=void 0,Xh=Tb.s,Yh=en[Vh],ud=$c(Xh);md(ud);var fn=ud&2,Ha=be(Xh,ud,5);Array.isArray(Ha)||(Ha=kd);var gn=!!(ud&32),kb=Zc(Ha);0===kb&&gn&&!fn?(kb|=33,H(Ha,kb)):kb&1||(kb|=1,H(Ha,kb));if(fn)kb&2||ad(Ha),Object.freeze(Ha);else if(2&kb||2048&kb){Ha=Rc(Ha);var hn=1;gn&&(hn|=32);H(Ha,hn);ee(Xh,ud,5,Ha)}Wh=Ha;var jn=Zc(Wh);Yh=yd(Yh,!!(4&jn)&&!!(4096&jn));Wh.push(Yh)}var Zh=uj();if(!vj()&&Zh)for(var kn=w(Object.keys(Zh)),$h=kn.next();!$h.done;$h=kn.next()){var ln=
$h.value,ai=new Zi;K(ai,1,ln);K(ai,2,String(Zh[ln]));me(Tb,4,Zi,ai)}var bi=O.params;if(bi)for(var mn=w(Object.keys(bi)),ci=mn.next();!ci.done;ci=mn.next()){var nn=ci.value,di=new Zi;K(di,1,"client."+nn);K(di,2,String(bi[nn]));me(Tb,4,Zi,di)}var on=R("SERVER_NAME"),pn=R("SERVER_VERSION");if(on&&pn){var ei=new Zi;K(ei,1,"server.name");K(ei,2,on);me(Tb,4,Zi,ei);var fi=new Zi;K(fi,1,"server.version");K(fi,2,pn);me(Tb,4,Zi,fi)}var Pe=new ej;J(Pe,$i,1,Tb);J(Pe,bj,2,Uh);J(Pe,dj,3,Sb);Sh=Pe}var qn=Sh;if(!qn)break a;
var rn=S("jspb_sparse_encoded_pivot")?new kj([{}]):new kj;je(rn,ej,163,lj,qn);kr("clientError",rn)}else{var Pa=void 0;Pa=void 0===Pa?{}:Pa;if(sr())Rh=void 0;else{var vd={stackTrace:O.stack};O.fileName&&(vd.filename=O.fileName);var lb=O.lineNumber&&O.lineNumber.split?O.lineNumber.split(":"):[];0!==lb.length&&(1!==lb.length||isNaN(Number(lb[0]))?2!==lb.length||isNaN(Number(lb[0]))||isNaN(Number(lb[1]))||(vd.lineNumber=Number(lb[0]),vd.columnNumber=Number(lb[1])):vd.lineNumber=Number(lb[0]));var gi=
{level:"ERROR_LEVEL_UNKNOWN",message:O.message,errorClassName:O.name,sampleWeight:O.sampleWeight};"ERROR"===td?gi.level="ERROR_LEVEL_ERROR":"WARNING"===td&&(gi.level="ERROR_LEVEL_WARNNING");var $r={isObfuscated:!0,browserStackInfo:vd};Pa.pageUrl=window.location.href;Pa.kvPairs=[];R("FEXP_EXPERIMENTS")&&(Pa.experimentIds=R("FEXP_EXPERIMENTS"));var hi=uj();if(!vj()&&hi)for(var sn=w(Object.keys(hi)),ii=sn.next();!ii.done;ii=sn.next()){var tn=ii.value;Pa.kvPairs.push({key:tn,value:String(hi[tn])})}var ji=
O.params;if(ji)for(var un=w(Object.keys(ji)),ki=un.next();!ki.done;ki=un.next()){var vn=ki.value;Pa.kvPairs.push({key:"client."+vn,value:String(ji[vn])})}var wn=R("SERVER_NAME"),xn=R("SERVER_VERSION");wn&&xn&&(Pa.kvPairs.push({key:"server.name",value:wn}),Pa.kvPairs.push({key:"server.version",value:xn}));Rh={errorMetadata:Pa,stackTrace:$r,logMessage:gi}}var yn=Rh;if(!yn)break a;ir("clientError",yn)}if("ERROR"===td||S("errors_flush_gel_always_killswitch"))b:{if(S("web_fp_via_jspb")){var Qe=!0;Qe=void 0===
Qe?!1:Qe;var zn=hr;hr=[];if(zn)for(var An=w(zn),li=An.next();!li.done;li=An.next()){var vc=li.value;Qe?er(vc.Bc,vc.payload,pp,vc.options):ir(vc.Bc,vc.payload,vc.options)}gr(!0);if(!S("web_fp_via_jspb_and_json"))break b}gr()}}S("suppress_error_204_logging")||tr(Rb,O);rr(O)}}}}}else throw sc;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Or(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Pr(a){return 0===a.search("get")||0===a.search("is")}
;function Qr(a,b){Hr.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.ia={};this.playerInfo={};this.videoTitle=""}
y(Qr,Hr);r=Qr.prototype;r.lc=function(){var a=Cr(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Cr(this.h,"embedConfig")){if(Qa(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
r.hc=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Qa(a))for(var c in a)a.hasOwnProperty(c)&&(this.ia[c]=a[c]);break;case "infoDelivery":Rr(this,a);break;case "initialDelivery":Qa(a)&&(window.clearInterval(this.i),this.playerInfo={},this.ia={},Sr(this,a.apiInterface),Rr(this,a));break;default:Lr(this,b,a)}};
function Rr(a,b){if(Qa(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+Cr(a.h,"title"))))}}
function Sr(a,b){Cb(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Or(c)?this[c]=function(){this.playerInfo={};
this.ia={};Nr(this,c,arguments);return this}:Pr(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Nr(this,c,arguments);
return this})},a)}
r.getVideoEmbedCode=function(){var a=Cr(this.h,"host")+("/embed/"+Cr(this.h,"videoId")),b=Number(Cr(this.h,"width")),c=Number(Cr(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=ac(a);d=ac(null!=d?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')};
r.getOptions=function(a){return this.ia.namespaces?a?this.ia[a]?this.ia[a].options||[]:[]:this.ia.namespaces||[]:[]};
r.getOption=function(a,b){if(this.ia.namespaces&&a&&b&&this.ia[a])return this.ia[a][b]};
function as(a){if("iframe"!==a.tagName.toLowerCase()){var b=zr(a,"videoid");b&&(b={videoId:b,width:zr(a,"width"),height:zr(a,"height")},new Qr(a,b))}}
;E("YT.PlayerState.UNSTARTED",-1);E("YT.PlayerState.ENDED",0);E("YT.PlayerState.PLAYING",1);E("YT.PlayerState.PAUSED",2);E("YT.PlayerState.BUFFERING",3);E("YT.PlayerState.CUED",5);E("YT.get",function(a){return vr[a]});
E("YT.scan",yr);E("YT.subscribe",function(a,b,c){Kg.subscribe(a,b,c);xr[a]=!0;for(var d in vr)vr.hasOwnProperty(d)&&Kr(vr[d],a)});
E("YT.unsubscribe",function(a,b,c){Jg(a,b,c)});
E("YT.Player",Qr);Hr.prototype.destroy=Hr.prototype.destroy;Hr.prototype.setSize=Hr.prototype.setSize;Hr.prototype.getIframe=Hr.prototype.getIframe;Hr.prototype.addEventListener=Hr.prototype.addEventListener;Qr.prototype.getVideoEmbedCode=Qr.prototype.getVideoEmbedCode;Qr.prototype.getOptions=Qr.prototype.getOptions;Qr.prototype.getOption=Qr.prototype.getOption;
wr.push(function(a){var b=a;b||(b=document);a=Fb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=Bb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=Fb(b);Cb(Eb(a,b),as)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||yr();var bs=C.onYTReady;bs&&bs();var cs=C.onYouTubeIframeAPIReady;cs&&cs();var ds=C.onYouTubePlayerAPIReady;ds&&ds();}).call(this);
