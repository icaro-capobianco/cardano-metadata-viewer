!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/cardano-meta-handler/",t(t.s="6oAP")}({"6oAP":function(e,t,n){(function(e){e.Promise||(e.Promise=n("QK1w").default),e.fetch||(e.fetch=n("pSi9"))}).call(this,n("Xi9u"))},QK1w:function(e,t,n){"use strict";function r(e){return Boolean(e&&void 0!==e.length)}function o(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function u(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,i._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void c(t.promise,e)}f(t.promise,r)}else(1===e._state?f:c)(t.promise,e._value)}))):e._deferreds.push(t)}function f(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof i)return e._state=3,e._value=t,void s(e);if("function"==typeof n)return void l((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,s(e)}catch(t){c(e,t)}var r,o}function c(e,t){e._state=2,e._value=t,s(e)}function s(e){2===e._state&&0===e._deferreds.length&&i._immediateFn((function(){e._handled||i._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)u(e,e._deferreds[t]);e._deferreds=null}function a(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e((function(e){n||(n=!0,f(t,e))}),(function(e){n||(n=!0,c(t,e))}))}catch(e){if(n)return;n=!0,c(t,e)}}n.r(t);var d=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))},p=function(e){return new this((function(t,n){function r(e,n){if(n&&("object"==typeof n||"function"==typeof n)){var u=n.then;if("function"==typeof u)return void u.call(n,(function(t){r(e,t)}),(function(n){o[e]={status:"rejected",reason:n},0==--i&&t(o)}))}o[e]={status:"fulfilled",value:n},0==--i&&t(o)}if(!e||void 0===e.length)return n(new TypeError(typeof e+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);for(var i=o.length,u=0;u<o.length;u++)r(u,o[u])}))},h=setTimeout;i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(o);return u(this,new a(e,t,n)),n},i.prototype.finally=d,i.all=function(e){return new i((function(t,n){function o(e,r){try{if(r&&("object"==typeof r||"function"==typeof r)){var f=r.then;if("function"==typeof f)return void f.call(r,(function(t){o(e,t)}),n)}i[e]=r,0==--u&&t(i)}catch(e){n(e)}}if(!r(e))return n(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(e);if(0===i.length)return t([]);for(var u=i.length,f=0;f<i.length;f++)o(f,i[f])}))},i.allSettled=p,i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i((function(t){t(e)}))},i.reject=function(e){return new i((function(t,n){n(e)}))},i.race=function(e){return new i((function(t,n){if(!r(e))return n(new TypeError("Promise.race accepts an array"));for(var o=0,u=e.length;o<u;o++)i.resolve(e[o]).then(t,n)}))},i._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){h(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};t.default=i},Xi9u:function(e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},atz2:function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise((function(n,r){var o=new XMLHttpRequest,i=[],u=[],f={};for(var c in o.open(t.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(e,t,n){i.push(t=t.toLowerCase()),u.push([t,n]),f[t]=f[t]?f[t]+","+n:n})),n(function e(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:e,headers:{keys:function(){return i},entries:function(){return u},get:function(e){return f[e.toLowerCase()]},has:function(e){return e.toLowerCase()in f}}}}())},o.onerror=r,o.withCredentials="include"==t.credentials,t.headers)o.setRequestHeader(c,t.headers[c]);o.send(t.body||null)}))}},pSi9:function(e,t,n){e.exports=self.fetch||(self.fetch=n("atz2").default||n("atz2"))}});
//# sourceMappingURL=polyfills.107c8.esm.js.map