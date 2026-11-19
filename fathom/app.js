(()=>{var Pm=Object.create;var rd=Object.defineProperty;var Cm=Object.getOwnPropertyDescriptor;var Rm=Object.getOwnPropertyNames;var Lm=Object.getPrototypeOf,Im=Object.prototype.hasOwnProperty;var Dm=(s,t)=>()=>(t||s((t={exports:{}}).exports,t),t.exports);var Nm=(s,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Rm(t))!Im.call(s,r)&&r!==e&&rd(s,r,{get:()=>t[r],enumerable:!(i=Cm(t,r))||i.enumerable});return s};var Om=(s,t,e)=>(e=s!=null?Pm(Lm(s)):{},Nm(t||!s||!s.__esModule?rd(e,"default",{value:s,enumerable:!0}):e,s));var Sp=Dm((bl,bp)=>{(function(s,t){typeof bl=="object"&&typeof bp<"u"?t(bl):typeof define=="function"&&define.amd?define(["exports"],t):(s=typeof globalThis<"u"?globalThis:s||self,t(s.leaflet={}))})(bl,(function(s){"use strict";var t="1.9.4";function e(n){var o,c,p,y;for(c=1,p=arguments.length;c<p;c++){y=arguments[c];for(o in y)n[o]=y[o]}return n}var i=Object.create||(function(){function n(){}return function(o){return n.prototype=o,new n}})();function r(n,o){var c=Array.prototype.slice;if(n.bind)return n.bind.apply(n,c.call(arguments,1));var p=c.call(arguments,2);return function(){return n.apply(o,p.length?p.concat(c.call(arguments)):arguments)}}var a=0;function l(n){return"_leaflet_id"in n||(n._leaflet_id=++a),n._leaflet_id}function h(n,o,c){var p,y,A,F;return F=function(){p=!1,y&&(A.apply(c,y),y=!1)},A=function(){p?y=arguments:(n.apply(c,arguments),setTimeout(F,o),p=!0)},A}function u(n,o,c){var p=o[1],y=o[0],A=p-y;return n===p&&c?n:((n-y)%A+A)%A+y}function f(){return!1}function m(n,o){if(o===!1)return n;var c=Math.pow(10,o===void 0?6:o);return Math.round(n*c)/c}function d(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function _(n){return d(n).split(/\s+/)}function g(n,o){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?i(n.options):{});for(var c in o)n.options[c]=o[c];return n.options}function M(n,o,c){var p=[];for(var y in n)p.push(encodeURIComponent(c?y.toUpperCase():y)+"="+encodeURIComponent(n[y]));return(!o||o.indexOf("?")===-1?"?":"&")+p.join("&")}var b=/\{ *([\w_ -]+) *\}/g;function x(n,o){return n.replace(b,function(c,p){var y=o[p];if(y===void 0)throw new Error("No value provided for variable "+c);return typeof y=="function"&&(y=y(o)),y})}var v=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function R(n,o){for(var c=0;c<n.length;c++)if(n[c]===o)return c;return-1}var S="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function w(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var k=0;function C(n){var o=+new Date,c=Math.max(0,16-(o-k));return k=o+c,window.setTimeout(n,c)}var D=window.requestAnimationFrame||w("RequestAnimationFrame")||C,O=window.cancelAnimationFrame||w("CancelAnimationFrame")||w("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function E(n,o,c){if(c&&D===C)n.call(o);else return D.call(window,r(n,o))}function T(n){n&&O.call(window,n)}var B={__proto__:null,extend:e,create:i,bind:r,get lastId(){return a},stamp:l,throttle:h,wrapNum:u,falseFn:f,formatNum:m,trim:d,splitWords:_,setOptions:g,getParamString:M,template:x,isArray:v,indexOf:R,emptyImageUrl:S,requestFn:D,cancelFn:O,requestAnimFrame:E,cancelAnimFrame:T};function X(){}X.extend=function(n){var o=function(){g(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},c=o.__super__=this.prototype,p=i(c);p.constructor=o,o.prototype=p;for(var y in this)Object.prototype.hasOwnProperty.call(this,y)&&y!=="prototype"&&y!=="__super__"&&(o[y]=this[y]);return n.statics&&e(o,n.statics),n.includes&&(W(n.includes),e.apply(null,[p].concat(n.includes))),e(p,n),delete p.statics,delete p.includes,p.options&&(p.options=c.options?i(c.options):{},e(p.options,n.options)),p._initHooks=[],p.callInitHooks=function(){if(!this._initHooksCalled){c.callInitHooks&&c.callInitHooks.call(this),this._initHooksCalled=!0;for(var A=0,F=p._initHooks.length;A<F;A++)p._initHooks[A].call(this)}},o},X.include=function(n){var o=this.prototype.options;return e(this.prototype,n),n.options&&(this.prototype.options=o,this.mergeOptions(n.options)),this},X.mergeOptions=function(n){return e(this.prototype.options,n),this},X.addInitHook=function(n){var o=Array.prototype.slice.call(arguments,1),c=typeof n=="function"?n:function(){this[n].apply(this,o)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(c),this};function W(n){if(!(typeof L>"u"||!L||!L.Mixin)){n=v(n)?n:[n];for(var o=0;o<n.length;o++)n[o]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var K={on:function(n,o,c){if(typeof n=="object")for(var p in n)this._on(p,n[p],o);else{n=_(n);for(var y=0,A=n.length;y<A;y++)this._on(n[y],o,c)}return this},off:function(n,o,c){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var p in n)this._off(p,n[p],o);else{n=_(n);for(var y=arguments.length===1,A=0,F=n.length;A<F;A++)y?this._off(n[A]):this._off(n[A],o,c)}return this},_on:function(n,o,c,p){if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}if(this._listens(n,o,c)===!1){c===this&&(c=void 0);var y={fn:o,ctx:c};p&&(y.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(y)}},_off:function(n,o,c){var p,y,A;if(this._events&&(p=this._events[n],!!p)){if(arguments.length===1){if(this._firingCount)for(y=0,A=p.length;y<A;y++)p[y].fn=f;delete this._events[n];return}if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}var F=this._listens(n,o,c);if(F!==!1){var J=p[F];this._firingCount&&(J.fn=f,this._events[n]=p=p.slice()),p.splice(F,1)}}},fire:function(n,o,c){if(!this.listens(n,c))return this;var p=e({},o,{type:n,target:this,sourceTarget:o&&o.sourceTarget||this});if(this._events){var y=this._events[n];if(y){this._firingCount=this._firingCount+1||1;for(var A=0,F=y.length;A<F;A++){var J=y[A],nt=J.fn;J.once&&this.off(n,nt,J.ctx),nt.call(J.ctx||this,p)}this._firingCount--}}return c&&this._propagateEvent(p),this},listens:function(n,o,c,p){typeof n!="string"&&console.warn('"string" type argument expected');var y=o;typeof o!="function"&&(p=!!o,y=void 0,c=void 0);var A=this._events&&this._events[n];if(A&&A.length&&this._listens(n,y,c)!==!1)return!0;if(p){for(var F in this._eventParents)if(this._eventParents[F].listens(n,o,c,p))return!0}return!1},_listens:function(n,o,c){if(!this._events)return!1;var p=this._events[n]||[];if(!o)return!!p.length;c===this&&(c=void 0);for(var y=0,A=p.length;y<A;y++)if(p[y].fn===o&&p[y].ctx===c)return y;return!1},once:function(n,o,c){if(typeof n=="object")for(var p in n)this._on(p,n[p],o,!0);else{n=_(n);for(var y=0,A=n.length;y<A;y++)this._on(n[y],o,c,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[l(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[l(n)],this},_propagateEvent:function(n){for(var o in this._eventParents)this._eventParents[o].fire(n.type,e({layer:n.target,propagatedFrom:n.target},n),!0)}};K.addEventListener=K.on,K.removeEventListener=K.clearAllEventListeners=K.off,K.addOneTimeEventListener=K.once,K.fireEvent=K.fire,K.hasEventListeners=K.listens;var it=X.extend(K);function H(n,o,c){this.x=c?Math.round(n):n,this.y=c?Math.round(o):o}var ut=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};H.prototype={clone:function(){return new H(this.x,this.y)},add:function(n){return this.clone()._add(G(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(G(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new H(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new H(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=ut(this.x),this.y=ut(this.y),this},distanceTo:function(n){n=G(n);var o=n.x-this.x,c=n.y-this.y;return Math.sqrt(o*o+c*c)},equals:function(n){return n=G(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=G(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+m(this.x)+", "+m(this.y)+")"}};function G(n,o,c){return n instanceof H?n:v(n)?new H(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new H(n.x,n.y):new H(n,o,c)}function lt(n,o){if(n)for(var c=o?[n,o]:n,p=0,y=c.length;p<y;p++)this.extend(c[p])}lt.prototype={extend:function(n){var o,c;if(!n)return this;if(n instanceof H||typeof n[0]=="number"||"x"in n)o=c=G(n);else if(n=rt(n),o=n.min,c=n.max,!o||!c)return this;return!this.min&&!this.max?(this.min=o.clone(),this.max=c.clone()):(this.min.x=Math.min(o.x,this.min.x),this.max.x=Math.max(c.x,this.max.x),this.min.y=Math.min(o.y,this.min.y),this.max.y=Math.max(c.y,this.max.y)),this},getCenter:function(n){return G((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return G(this.min.x,this.max.y)},getTopRight:function(){return G(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var o,c;return typeof n[0]=="number"||n instanceof H?n=G(n):n=rt(n),n instanceof lt?(o=n.min,c=n.max):o=c=n,o.x>=this.min.x&&c.x<=this.max.x&&o.y>=this.min.y&&c.y<=this.max.y},intersects:function(n){n=rt(n);var o=this.min,c=this.max,p=n.min,y=n.max,A=y.x>=o.x&&p.x<=c.x,F=y.y>=o.y&&p.y<=c.y;return A&&F},overlaps:function(n){n=rt(n);var o=this.min,c=this.max,p=n.min,y=n.max,A=y.x>o.x&&p.x<c.x,F=y.y>o.y&&p.y<c.y;return A&&F},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var o=this.min,c=this.max,p=Math.abs(o.x-c.x)*n,y=Math.abs(o.y-c.y)*n;return rt(G(o.x-p,o.y-y),G(c.x+p,c.y+y))},equals:function(n){return n?(n=rt(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function rt(n,o){return!n||n instanceof lt?n:new lt(n,o)}function ot(n,o){if(n)for(var c=o?[n,o]:n,p=0,y=c.length;p<y;p++)this.extend(c[p])}ot.prototype={extend:function(n){var o=this._southWest,c=this._northEast,p,y;if(n instanceof yt)p=n,y=n;else if(n instanceof ot){if(p=n._southWest,y=n._northEast,!p||!y)return this}else return n?this.extend($(n)||Mt(n)):this;return!o&&!c?(this._southWest=new yt(p.lat,p.lng),this._northEast=new yt(y.lat,y.lng)):(o.lat=Math.min(p.lat,o.lat),o.lng=Math.min(p.lng,o.lng),c.lat=Math.max(y.lat,c.lat),c.lng=Math.max(y.lng,c.lng)),this},pad:function(n){var o=this._southWest,c=this._northEast,p=Math.abs(o.lat-c.lat)*n,y=Math.abs(o.lng-c.lng)*n;return new ot(new yt(o.lat-p,o.lng-y),new yt(c.lat+p,c.lng+y))},getCenter:function(){return new yt((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new yt(this.getNorth(),this.getWest())},getSouthEast:function(){return new yt(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof yt||"lat"in n?n=$(n):n=Mt(n);var o=this._southWest,c=this._northEast,p,y;return n instanceof ot?(p=n.getSouthWest(),y=n.getNorthEast()):p=y=n,p.lat>=o.lat&&y.lat<=c.lat&&p.lng>=o.lng&&y.lng<=c.lng},intersects:function(n){n=Mt(n);var o=this._southWest,c=this._northEast,p=n.getSouthWest(),y=n.getNorthEast(),A=y.lat>=o.lat&&p.lat<=c.lat,F=y.lng>=o.lng&&p.lng<=c.lng;return A&&F},overlaps:function(n){n=Mt(n);var o=this._southWest,c=this._northEast,p=n.getSouthWest(),y=n.getNorthEast(),A=y.lat>o.lat&&p.lat<c.lat,F=y.lng>o.lng&&p.lng<c.lng;return A&&F},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,o){return n?(n=Mt(n),this._southWest.equals(n.getSouthWest(),o)&&this._northEast.equals(n.getNorthEast(),o)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function Mt(n,o){return n instanceof ot?n:new ot(n,o)}function yt(n,o,c){if(isNaN(n)||isNaN(o))throw new Error("Invalid LatLng object: ("+n+", "+o+")");this.lat=+n,this.lng=+o,c!==void 0&&(this.alt=+c)}yt.prototype={equals:function(n,o){if(!n)return!1;n=$(n);var c=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return c<=(o===void 0?1e-9:o)},toString:function(n){return"LatLng("+m(this.lat,n)+", "+m(this.lng,n)+")"},distanceTo:function(n){return bt.distance(this,$(n))},wrap:function(){return bt.wrapLatLng(this)},toBounds:function(n){var o=180*n/40075017,c=o/Math.cos(Math.PI/180*this.lat);return Mt([this.lat-o,this.lng-c],[this.lat+o,this.lng+c])},clone:function(){return new yt(this.lat,this.lng,this.alt)}};function $(n,o,c){return n instanceof yt?n:v(n)&&typeof n[0]!="object"?n.length===3?new yt(n[0],n[1],n[2]):n.length===2?new yt(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new yt(n.lat,"lng"in n?n.lng:n.lon,n.alt):o===void 0?null:new yt(n,o,c)}var pt={latLngToPoint:function(n,o){var c=this.projection.project(n),p=this.scale(o);return this.transformation._transform(c,p)},pointToLatLng:function(n,o){var c=this.scale(o),p=this.transformation.untransform(n,c);return this.projection.unproject(p)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var o=this.projection.bounds,c=this.scale(n),p=this.transformation.transform(o.min,c),y=this.transformation.transform(o.max,c);return new lt(p,y)},infinite:!1,wrapLatLng:function(n){var o=this.wrapLng?u(n.lng,this.wrapLng,!0):n.lng,c=this.wrapLat?u(n.lat,this.wrapLat,!0):n.lat,p=n.alt;return new yt(c,o,p)},wrapLatLngBounds:function(n){var o=n.getCenter(),c=this.wrapLatLng(o),p=o.lat-c.lat,y=o.lng-c.lng;if(p===0&&y===0)return n;var A=n.getSouthWest(),F=n.getNorthEast(),J=new yt(A.lat-p,A.lng-y),nt=new yt(F.lat-p,F.lng-y);return new ot(J,nt)}},bt=e({},pt,{wrapLng:[-180,180],R:6371e3,distance:function(n,o){var c=Math.PI/180,p=n.lat*c,y=o.lat*c,A=Math.sin((o.lat-n.lat)*c/2),F=Math.sin((o.lng-n.lng)*c/2),J=A*A+Math.cos(p)*Math.cos(y)*F*F,nt=2*Math.atan2(Math.sqrt(J),Math.sqrt(1-J));return this.R*nt}}),gt=6378137,Xt={R:gt,MAX_LATITUDE:85.0511287798,project:function(n){var o=Math.PI/180,c=this.MAX_LATITUDE,p=Math.max(Math.min(c,n.lat),-c),y=Math.sin(p*o);return new H(this.R*n.lng*o,this.R*Math.log((1+y)/(1-y))/2)},unproject:function(n){var o=180/Math.PI;return new yt((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*o,n.x*o/this.R)},bounds:(function(){var n=gt*Math.PI;return new lt([-n,-n],[n,n])})()};function xt(n,o,c,p){if(v(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=o,this._c=c,this._d=p}xt.prototype={transform:function(n,o){return this._transform(n.clone(),o)},_transform:function(n,o){return o=o||1,n.x=o*(this._a*n.x+this._b),n.y=o*(this._c*n.y+this._d),n},untransform:function(n,o){return o=o||1,new H((n.x/o-this._b)/this._a,(n.y/o-this._d)/this._c)}};function st(n,o,c,p){return new xt(n,o,c,p)}var It=e({},bt,{code:"EPSG:3857",projection:Xt,transformation:(function(){var n=.5/(Math.PI*Xt.R);return st(n,.5,-n,.5)})()}),qt=e({},It,{code:"EPSG:900913"});function oe(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function V(n,o){var c="",p,y,A,F,J,nt;for(p=0,A=n.length;p<A;p++){for(J=n[p],y=0,F=J.length;y<F;y++)nt=J[y],c+=(y?"L":"M")+nt.x+" "+nt.y;c+=o?Ut.svg?"z":"x":""}return c||"M0 0"}var Ae=document.documentElement.style,ne="ActiveXObject"in window,Ot=ne&&!document.addEventListener,kt="msLaunchUri"in navigator&&!("documentMode"in document),be=En("webkit"),Yt=En("android"),U=En("android 2")||En("android 3"),I=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),j=Yt&&En("Google")&&I<537&&!("AudioNode"in window),ht=!!window.opera,mt=!kt&&En("chrome"),ct=En("gecko")&&!be&&!ht&&!ne,Gt=!mt&&En("safari"),Et=En("phantom"),Dt="OTransition"in Ae,me=navigator.platform.indexOf("Win")===0,_t=ne&&"transition"in Ae,Nt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!U,$t="MozPerspective"in Ae,Qt=!window.L_DISABLE_3D&&(_t||Nt||$t)&&!Dt&&!Et,Lt=typeof orientation<"u"||En("mobile"),pe=Lt&&be,ie=Lt&&Nt,Pe=!window.PointerEvent&&window.MSPointerEvent,Z=!!(window.PointerEvent||Pe),Tt="ontouchstart"in window||!!window.TouchEvent,at=!window.L_NO_TOUCH&&(Tt||Z),dt=Lt&&ht,Ct=Lt&&ct,At=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,ee=(function(){var n=!1;try{var o=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",f,o),window.removeEventListener("testPassiveEventSupport",f,o)}catch{}return n})(),ze=(function(){return!!document.createElement("canvas").getContext})(),Ze=!!(document.createElementNS&&oe("svg").createSVGRect),Te=!!Ze&&(function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),Tn=!Ze&&(function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var o=n.firstChild;return o.style.behavior="url(#default#VML)",o&&typeof o.adj=="object"}catch{return!1}})(),qn=navigator.platform.indexOf("Mac")===0,uo=navigator.platform.indexOf("Linux")===0;function En(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var Ut={ie:ne,ielt9:Ot,edge:kt,webkit:be,android:Yt,android23:U,androidStock:j,opera:ht,chrome:mt,gecko:ct,safari:Gt,phantom:Et,opera12:Dt,win:me,ie3d:_t,webkit3d:Nt,gecko3d:$t,any3d:Qt,mobile:Lt,mobileWebkit:pe,mobileWebkit3d:ie,msPointer:Pe,pointer:Z,touch:at,touchNative:Tt,mobileOpera:dt,mobileGecko:Ct,retina:At,passiveEvents:ee,canvas:ze,svg:Ze,vml:Tn,inlineSvg:Te,mac:qn,linux:uo},Ds=Ut.msPointer?"MSPointerDown":"pointerdown",Er=Ut.msPointer?"MSPointerMove":"pointermove",Ar=Ut.msPointer?"MSPointerUp":"pointerup",ss=Ut.msPointer?"MSPointerCancel":"pointercancel",Ns={touchstart:Ds,touchmove:Er,touchend:Ar,touchcancel:ss},rs={touchstart:Y,touchmove:tt,touchend:tt,touchcancel:tt},Mi={},Pr=!1;function wl(n,o,c){return o==="touchstart"&&et(),rs[o]?(c=rs[o].bind(this,c),n.addEventListener(Ns[o],c,!1),c):(console.warn("wrong event specified:",o),f)}function Tl(n,o,c){if(!Ns[o]){console.warn("wrong event specified:",o);return}n.removeEventListener(Ns[o],c,!1)}function El(n){Mi[n.pointerId]=n}function N(n){Mi[n.pointerId]&&(Mi[n.pointerId]=n)}function q(n){delete Mi[n.pointerId]}function et(){Pr||(document.addEventListener(Ds,El,!0),document.addEventListener(Er,N,!0),document.addEventListener(Ar,q,!0),document.addEventListener(ss,q,!0),Pr=!0)}function tt(n,o){if(o.pointerType!==(o.MSPOINTER_TYPE_MOUSE||"mouse")){o.touches=[];for(var c in Mi)o.touches.push(Mi[c]);o.changedTouches=[o],n(o)}}function Y(n,o){o.MSPOINTER_TYPE_TOUCH&&o.pointerType===o.MSPOINTER_TYPE_TOUCH&&rn(o),tt(n,o)}function vt(n){var o={},c,p;for(p in n)c=n[p],o[p]=c&&c.bind?c.bind(n):c;return n=o,o.type="dblclick",o.detail=2,o.isTrusted=!1,o._simulated=!0,o}var Pt=200;function zt(n,o){n.addEventListener("dblclick",o);var c=0,p;function y(A){if(A.detail!==1){p=A.detail;return}if(!(A.pointerType==="mouse"||A.sourceCapabilities&&!A.sourceCapabilities.firesTouchEvents)){var F=Mu(A);if(!(F.some(function(nt){return nt instanceof HTMLLabelElement&&nt.attributes.for})&&!F.some(function(nt){return nt instanceof HTMLInputElement||nt instanceof HTMLSelectElement}))){var J=Date.now();J-c<=Pt?(p++,p===2&&o(vt(A))):p=1,c=J}}}return n.addEventListener("click",y),{dblclick:o,simDblclick:y}}function Ht(n,o){n.removeEventListener("dblclick",o.dblclick),n.removeEventListener("click",o.simDblclick)}var jt=hi(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),te=hi(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Ft=te==="webkitTransition"||te==="OTransition"?te+"End":"transitionend";function ge(n){return typeof n=="string"?document.getElementById(n):n}function we(n,o){var c=n.style[o]||n.currentStyle&&n.currentStyle[o];if((!c||c==="auto")&&document.defaultView){var p=document.defaultView.getComputedStyle(n,null);c=p?p[o]:null}return c==="auto"?null:c}function Wt(n,o,c){var p=document.createElement(n);return p.className=o||"",c&&c.appendChild(p),p}function he(n){var o=n.parentNode;o&&o.removeChild(n)}function _e(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function Bt(n){var o=n.parentNode;o&&o.lastChild!==n&&o.appendChild(n)}function hn(n){var o=n.parentNode;o&&o.firstChild!==n&&o.insertBefore(n,o.firstChild)}function xe(n,o){if(n.classList!==void 0)return n.classList.contains(o);var c=ci(n);return c.length>0&&new RegExp("(^|\\s)"+o+"(\\s|$)").test(c)}function Kt(n,o){if(n.classList!==void 0)for(var c=_(o),p=0,y=c.length;p<y;p++)n.classList.add(c[p]);else if(!xe(n,o)){var A=ci(n);sn(n,(A?A+" ":"")+o)}}function Le(n,o){n.classList!==void 0?n.classList.remove(o):sn(n,d((" "+ci(n)+" ").replace(" "+o+" "," ")))}function sn(n,o){n.className.baseVal===void 0?n.className=o:n.className.baseVal=o}function ci(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function ue(n,o){"opacity"in n.style?n.style.opacity=o:"filter"in n.style&&On(n,o)}function On(n,o){var c=!1,p="DXImageTransform.Microsoft.Alpha";try{c=n.filters.item(p)}catch{if(o===1)return}o=Math.round(o*100),c?(c.Enabled=o!==100,c.Opacity=o):n.style.filter+=" progid:"+p+"(opacity="+o+")"}function hi(n){for(var o=document.documentElement.style,c=0;c<n.length;c++)if(n[c]in o)return n[c];return!1}function Xe(n,o,c){var p=o||new H(0,0);n.style[jt]=(Ut.ie3d?"translate("+p.x+"px,"+p.y+"px)":"translate3d("+p.x+"px,"+p.y+"px,0)")+(c?" scale("+c+")":"")}function Ce(n,o){n._leaflet_pos=o,Ut.any3d?Xe(n,o):(n.style.left=o.x+"px",n.style.top=o.y+"px")}function un(n){return n._leaflet_pos||new H(0,0)}var Gi,Cr,Al;if("onselectstart"in document)Gi=function(){se(window,"selectstart",rn)},Cr=function(){ke(window,"selectstart",rn)};else{var Rr=hi(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Gi=function(){if(Rr){var n=document.documentElement.style;Al=n[Rr],n[Rr]="none"}},Cr=function(){Rr&&(document.documentElement.style[Rr]=Al,Al=void 0)}}function Pl(){se(window,"dragstart",rn)}function Cl(){ke(window,"dragstart",rn)}var fo,Rl;function Ll(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(po(),fo=n,Rl=n.style.outlineStyle,n.style.outlineStyle="none",se(window,"keydown",po))}function po(){fo&&(fo.style.outlineStyle=Rl,fo=void 0,Rl=void 0,ke(window,"keydown",po))}function xu(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function Il(n){var o=n.getBoundingClientRect();return{x:o.width/n.offsetWidth||1,y:o.height/n.offsetHeight||1,boundingClientRect:o}}var Np={__proto__:null,TRANSFORM:jt,TRANSITION:te,TRANSITION_END:Ft,get:ge,getStyle:we,create:Wt,remove:he,empty:_e,toFront:Bt,toBack:hn,hasClass:xe,addClass:Kt,removeClass:Le,setClass:sn,getClass:ci,setOpacity:ue,testProp:hi,setTransform:Xe,setPosition:Ce,getPosition:un,get disableTextSelection(){return Gi},get enableTextSelection(){return Cr},disableImageDrag:Pl,enableImageDrag:Cl,preventOutline:Ll,restoreOutline:po,getSizedParentNode:xu,getScale:Il};function se(n,o,c,p){if(o&&typeof o=="object")for(var y in o)Nl(n,y,o[y],c);else{o=_(o);for(var A=0,F=o.length;A<F;A++)Nl(n,o[A],c,p)}return this}var ui="_leaflet_events";function ke(n,o,c,p){if(arguments.length===1)yu(n),delete n[ui];else if(o&&typeof o=="object")for(var y in o)Ol(n,y,o[y],c);else if(o=_(o),arguments.length===2)yu(n,function(J){return R(o,J)!==-1});else for(var A=0,F=o.length;A<F;A++)Ol(n,o[A],c,p);return this}function yu(n,o){for(var c in n[ui]){var p=c.split(/\d/)[0];(!o||o(p))&&Ol(n,p,null,null,c)}}var Dl={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Nl(n,o,c,p){var y=o+l(c)+(p?"_"+l(p):"");if(n[ui]&&n[ui][y])return this;var A=function(J){return c.call(p||n,J||window.event)},F=A;!Ut.touchNative&&Ut.pointer&&o.indexOf("touch")===0?A=wl(n,o,A):Ut.touch&&o==="dblclick"?A=zt(n,A):"addEventListener"in n?o==="touchstart"||o==="touchmove"||o==="wheel"||o==="mousewheel"?n.addEventListener(Dl[o]||o,A,Ut.passiveEvents?{passive:!1}:!1):o==="mouseenter"||o==="mouseleave"?(A=function(J){J=J||window.event,kl(n,J)&&F(J)},n.addEventListener(Dl[o],A,!1)):n.addEventListener(o,F,!1):n.attachEvent("on"+o,A),n[ui]=n[ui]||{},n[ui][y]=A}function Ol(n,o,c,p,y){y=y||o+l(c)+(p?"_"+l(p):"");var A=n[ui]&&n[ui][y];if(!A)return this;!Ut.touchNative&&Ut.pointer&&o.indexOf("touch")===0?Tl(n,o,A):Ut.touch&&o==="dblclick"?Ht(n,A):"removeEventListener"in n?n.removeEventListener(Dl[o]||o,A,!1):n.detachEvent("on"+o,A),n[ui][y]=null}function os(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function Ul(n){return Nl(n,"wheel",os),this}function Lr(n){return se(n,"mousedown touchstart dblclick contextmenu",os),n._leaflet_disable_click=!0,this}function rn(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function as(n){return rn(n),os(n),this}function Mu(n){if(n.composedPath)return n.composedPath();for(var o=[],c=n.target;c;)o.push(c),c=c.parentNode;return o}function bu(n,o){if(!o)return new H(n.clientX,n.clientY);var c=Il(o),p=c.boundingClientRect;return new H((n.clientX-p.left)/c.x-o.clientLeft,(n.clientY-p.top)/c.y-o.clientTop)}var Op=Ut.linux&&Ut.chrome?window.devicePixelRatio:Ut.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Su(n){return Ut.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/Op:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function kl(n,o){var c=o.relatedTarget;if(!c)return!0;try{for(;c&&c!==n;)c=c.parentNode}catch{return!1}return c!==n}var Up={__proto__:null,on:se,off:ke,stopPropagation:os,disableScrollPropagation:Ul,disableClickPropagation:Lr,preventDefault:rn,stop:as,getPropagationPath:Mu,getMousePosition:bu,getWheelDelta:Su,isExternalTarget:kl,addListener:se,removeListener:ke},wu=it.extend({run:function(n,o,c,p){this.stop(),this._el=n,this._inProgress=!0,this._duration=c||.25,this._easeOutPower=1/Math.max(p||.5,.2),this._startPos=un(n),this._offset=o.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=E(this._animate,this),this._step()},_step:function(n){var o=+new Date-this._startTime,c=this._duration*1e3;o<c?this._runFrame(this._easeOut(o/c),n):(this._runFrame(1),this._complete())},_runFrame:function(n,o){var c=this._startPos.add(this._offset.multiplyBy(n));o&&c._round(),Ce(this._el,c),this.fire("step")},_complete:function(){T(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),ye=it.extend({options:{crs:It,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,o){o=g(this,o),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=r(this._onResize,this),this._initEvents(),o.maxBounds&&this.setMaxBounds(o.maxBounds),o.zoom!==void 0&&(this._zoom=this._limitZoom(o.zoom)),o.center&&o.zoom!==void 0&&this.setView($(o.center),o.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=te&&Ut.any3d&&!Ut.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),se(this._proxy,Ft,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,o,c){if(o=o===void 0?this._zoom:this._limitZoom(o),n=this._limitCenter($(n),o,this.options.maxBounds),c=c||{},this._stop(),this._loaded&&!c.reset&&c!==!0){c.animate!==void 0&&(c.zoom=e({animate:c.animate},c.zoom),c.pan=e({animate:c.animate,duration:c.duration},c.pan));var p=this._zoom!==o?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,o,c.zoom):this._tryAnimatedPan(n,c.pan);if(p)return clearTimeout(this._sizeTimer),this}return this._resetView(n,o,c.pan&&c.pan.noMoveStart),this},setZoom:function(n,o){return this._loaded?this.setView(this.getCenter(),n,{zoom:o}):(this._zoom=n,this)},zoomIn:function(n,o){return n=n||(Ut.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,o)},zoomOut:function(n,o){return n=n||(Ut.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,o)},setZoomAround:function(n,o,c){var p=this.getZoomScale(o),y=this.getSize().divideBy(2),A=n instanceof H?n:this.latLngToContainerPoint(n),F=A.subtract(y).multiplyBy(1-1/p),J=this.containerPointToLatLng(y.add(F));return this.setView(J,o,{zoom:c})},_getBoundsCenterZoom:function(n,o){o=o||{},n=n.getBounds?n.getBounds():Mt(n);var c=G(o.paddingTopLeft||o.padding||[0,0]),p=G(o.paddingBottomRight||o.padding||[0,0]),y=this.getBoundsZoom(n,!1,c.add(p));if(y=typeof o.maxZoom=="number"?Math.min(o.maxZoom,y):y,y===1/0)return{center:n.getCenter(),zoom:y};var A=p.subtract(c).divideBy(2),F=this.project(n.getSouthWest(),y),J=this.project(n.getNorthEast(),y),nt=this.unproject(F.add(J).divideBy(2).add(A),y);return{center:nt,zoom:y}},fitBounds:function(n,o){if(n=Mt(n),!n.isValid())throw new Error("Bounds are not valid.");var c=this._getBoundsCenterZoom(n,o);return this.setView(c.center,c.zoom,o)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,o){return this.setView(n,this._zoom,{pan:o})},panBy:function(n,o){if(n=G(n).round(),o=o||{},!n.x&&!n.y)return this.fire("moveend");if(o.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new wu,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),o.noMoveStart||this.fire("movestart"),o.animate!==!1){Kt(this._mapPane,"leaflet-pan-anim");var c=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,c,o.duration||.25,o.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,o,c){if(c=c||{},c.animate===!1||!Ut.any3d)return this.setView(n,o,c);this._stop();var p=this.project(this.getCenter()),y=this.project(n),A=this.getSize(),F=this._zoom;n=$(n),o=o===void 0?F:o;var J=Math.max(A.x,A.y),nt=J*this.getZoomScale(F,o),ft=y.distanceTo(p)||1,Rt=1.42,Jt=Rt*Rt;function de(qe){var Eo=qe?-1:1,wm=qe?nt:J,Tm=nt*nt-J*J+Eo*Jt*Jt*ft*ft,Em=2*wm*Jt*ft,Yl=Tm/Em,sd=Math.sqrt(Yl*Yl+1)-Yl,Am=sd<1e-9?-18:Math.log(sd);return Am}function _n(qe){return(Math.exp(qe)-Math.exp(-qe))/2}function Qe(qe){return(Math.exp(qe)+Math.exp(-qe))/2}function kn(qe){return _n(qe)/Qe(qe)}var bn=de(0);function zs(qe){return J*(Qe(bn)/Qe(bn+Rt*qe))}function ym(qe){return J*(Qe(bn)*kn(bn+Rt*qe)-_n(bn))/Jt}function Mm(qe){return 1-Math.pow(1-qe,1.5)}var bm=Date.now(),nd=(de(1)-bn)/Rt,Sm=c.duration?1e3*c.duration:1e3*nd*.8;function id(){var qe=(Date.now()-bm)/Sm,Eo=Mm(qe)*nd;qe<=1?(this._flyToFrame=E(id,this),this._move(this.unproject(p.add(y.subtract(p).multiplyBy(ym(Eo)/ft)),F),this.getScaleZoom(J/zs(Eo),F),{flyTo:!0})):this._move(n,o)._moveEnd(!0)}return this._moveStart(!0,c.noMoveStart),id.call(this),this},flyToBounds:function(n,o){var c=this._getBoundsCenterZoom(n,o);return this.flyTo(c.center,c.zoom,o)},setMaxBounds:function(n){return n=Mt(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var o=this.options.minZoom;return this.options.minZoom=n,this._loaded&&o!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var o=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&o!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,o){this._enforcingBounds=!0;var c=this.getCenter(),p=this._limitCenter(c,this._zoom,Mt(n));return c.equals(p)||this.panTo(p,o),this._enforcingBounds=!1,this},panInside:function(n,o){o=o||{};var c=G(o.paddingTopLeft||o.padding||[0,0]),p=G(o.paddingBottomRight||o.padding||[0,0]),y=this.project(this.getCenter()),A=this.project(n),F=this.getPixelBounds(),J=rt([F.min.add(c),F.max.subtract(p)]),nt=J.getSize();if(!J.contains(A)){this._enforcingBounds=!0;var ft=A.subtract(J.getCenter()),Rt=J.extend(A).getSize().subtract(nt);y.x+=ft.x<0?-Rt.x:Rt.x,y.y+=ft.y<0?-Rt.y:Rt.y,this.panTo(this.unproject(y),o),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=e({animate:!1,pan:!0},n===!0?{animate:!0}:n);var o=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var c=this.getSize(),p=o.divideBy(2).round(),y=c.divideBy(2).round(),A=p.subtract(y);return!A.x&&!A.y?this:(n.animate&&n.pan?this.panBy(A):(n.pan&&this._rawPanBy(A),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(r(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:o,newSize:c}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=e({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var o=r(this._handleGeolocationResponse,this),c=r(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(o,c,n):navigator.geolocation.getCurrentPosition(o,c,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var o=n.code,c=n.message||(o===1?"permission denied":o===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:o,message:"Geolocation error: "+c+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var o=n.coords.latitude,c=n.coords.longitude,p=new yt(o,c),y=p.toBounds(n.coords.accuracy*2),A=this._locateOptions;if(A.setView){var F=this.getBoundsZoom(y);this.setView(p,A.maxZoom?Math.min(F,A.maxZoom):F)}var J={latlng:p,bounds:y,timestamp:n.timestamp};for(var nt in n.coords)typeof n.coords[nt]=="number"&&(J[nt]=n.coords[nt]);this.fire("locationfound",J)}},addHandler:function(n,o){if(!o)return this;var c=this[n]=new o(this);return this._handlers.push(c),this.options[n]&&c.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),he(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(T(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)he(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,o){var c="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),p=Wt("div",c,o||this._mapPane);return n&&(this._panes[n]=p),p},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),o=this.unproject(n.getBottomLeft()),c=this.unproject(n.getTopRight());return new ot(o,c)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,o,c){n=Mt(n),c=G(c||[0,0]);var p=this.getZoom()||0,y=this.getMinZoom(),A=this.getMaxZoom(),F=n.getNorthWest(),J=n.getSouthEast(),nt=this.getSize().subtract(c),ft=rt(this.project(J,p),this.project(F,p)).getSize(),Rt=Ut.any3d?this.options.zoomSnap:1,Jt=nt.x/ft.x,de=nt.y/ft.y,_n=o?Math.max(Jt,de):Math.min(Jt,de);return p=this.getScaleZoom(_n,p),Rt&&(p=Math.round(p/(Rt/100))*(Rt/100),p=o?Math.ceil(p/Rt)*Rt:Math.floor(p/Rt)*Rt),Math.max(y,Math.min(A,p))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new H(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,o){var c=this._getTopLeftPoint(n,o);return new lt(c,c.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,o){var c=this.options.crs;return o=o===void 0?this._zoom:o,c.scale(n)/c.scale(o)},getScaleZoom:function(n,o){var c=this.options.crs;o=o===void 0?this._zoom:o;var p=c.zoom(n*c.scale(o));return isNaN(p)?1/0:p},project:function(n,o){return o=o===void 0?this._zoom:o,this.options.crs.latLngToPoint($(n),o)},unproject:function(n,o){return o=o===void 0?this._zoom:o,this.options.crs.pointToLatLng(G(n),o)},layerPointToLatLng:function(n){var o=G(n).add(this.getPixelOrigin());return this.unproject(o)},latLngToLayerPoint:function(n){var o=this.project($(n))._round();return o._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng($(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(Mt(n))},distance:function(n,o){return this.options.crs.distance($(n),$(o))},containerPointToLayerPoint:function(n){return G(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return G(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var o=this.containerPointToLayerPoint(G(n));return this.layerPointToLatLng(o)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint($(n)))},mouseEventToContainerPoint:function(n){return bu(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var o=this._container=ge(n);if(o){if(o._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");se(o,"scroll",this._onScroll,this),this._containerId=l(o)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&Ut.any3d,Kt(n,"leaflet-container"+(Ut.touch?" leaflet-touch":"")+(Ut.retina?" leaflet-retina":"")+(Ut.ielt9?" leaflet-oldie":"")+(Ut.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var o=we(n,"position");o!=="absolute"&&o!=="relative"&&o!=="fixed"&&o!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Ce(this._mapPane,new H(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Kt(n.markerPane,"leaflet-zoom-hide"),Kt(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,o,c){Ce(this._mapPane,new H(0,0));var p=!this._loaded;this._loaded=!0,o=this._limitZoom(o),this.fire("viewprereset");var y=this._zoom!==o;this._moveStart(y,c)._move(n,o)._moveEnd(y),this.fire("viewreset"),p&&this.fire("load")},_moveStart:function(n,o){return n&&this.fire("zoomstart"),o||this.fire("movestart"),this},_move:function(n,o,c,p){o===void 0&&(o=this._zoom);var y=this._zoom!==o;return this._zoom=o,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),p?c&&c.pinch&&this.fire("zoom",c):((y||c&&c.pinch)&&this.fire("zoom",c),this.fire("move",c)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return T(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){Ce(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[l(this._container)]=this;var o=n?ke:se;o(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&o(window,"resize",this._onResize,this),Ut.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){T(this._resizeRequest),this._resizeRequest=E(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,o){for(var c=[],p,y=o==="mouseout"||o==="mouseover",A=n.target||n.srcElement,F=!1;A;){if(p=this._targets[l(A)],p&&(o==="click"||o==="preclick")&&this._draggableMoved(p)){F=!0;break}if(p&&p.listens(o,!0)&&(y&&!kl(A,n)||(c.push(p),y))||A===this._container)break;A=A.parentNode}return!c.length&&!F&&!y&&this.listens(o,!0)&&(c=[this]),c},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var o=n.target||n.srcElement;if(!(!this._loaded||o._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(o))){var c=n.type;c==="mousedown"&&Ll(o),this._fireDOMEvent(n,c)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,o,c){if(n.type==="click"){var p=e({},n);p.type="preclick",this._fireDOMEvent(p,p.type,c)}var y=this._findEventTargets(n,o);if(c){for(var A=[],F=0;F<c.length;F++)c[F].listens(o,!0)&&A.push(c[F]);y=A.concat(y)}if(y.length){o==="contextmenu"&&rn(n);var J=y[0],nt={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var ft=J.getLatLng&&(!J._radius||J._radius<=10);nt.containerPoint=ft?this.latLngToContainerPoint(J.getLatLng()):this.mouseEventToContainerPoint(n),nt.layerPoint=this.containerPointToLayerPoint(nt.containerPoint),nt.latlng=ft?J.getLatLng():this.layerPointToLatLng(nt.layerPoint)}for(F=0;F<y.length;F++)if(y[F].fire(o,nt,!0),nt.originalEvent._stopped||y[F].options.bubblingMouseEvents===!1&&R(this._mouseEvents,o)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,o=this._handlers.length;n<o;n++)this._handlers[n].disable()},whenReady:function(n,o){return this._loaded?n.call(o||this,{target:this}):this.on("load",n,o),this},_getMapPanePos:function(){return un(this._mapPane)||new H(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,o){var c=n&&o!==void 0?this._getNewPixelOrigin(n,o):this.getPixelOrigin();return c.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,o){var c=this.getSize()._divideBy(2);return this.project(n,o)._subtract(c)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,o,c){var p=this._getNewPixelOrigin(c,o);return this.project(n,o)._subtract(p)},_latLngBoundsToNewLayerBounds:function(n,o,c){var p=this._getNewPixelOrigin(c,o);return rt([this.project(n.getSouthWest(),o)._subtract(p),this.project(n.getNorthWest(),o)._subtract(p),this.project(n.getSouthEast(),o)._subtract(p),this.project(n.getNorthEast(),o)._subtract(p)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,o,c){if(!c)return n;var p=this.project(n,o),y=this.getSize().divideBy(2),A=new lt(p.subtract(y),p.add(y)),F=this._getBoundsOffset(A,c,o);return Math.abs(F.x)<=1&&Math.abs(F.y)<=1?n:this.unproject(p.add(F),o)},_limitOffset:function(n,o){if(!o)return n;var c=this.getPixelBounds(),p=new lt(c.min.add(n),c.max.add(n));return n.add(this._getBoundsOffset(p,o))},_getBoundsOffset:function(n,o,c){var p=rt(this.project(o.getNorthEast(),c),this.project(o.getSouthWest(),c)),y=p.min.subtract(n.min),A=p.max.subtract(n.max),F=this._rebound(y.x,-A.x),J=this._rebound(y.y,-A.y);return new H(F,J)},_rebound:function(n,o){return n+o>0?Math.round(n-o)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(o))},_limitZoom:function(n){var o=this.getMinZoom(),c=this.getMaxZoom(),p=Ut.any3d?this.options.zoomSnap:1;return p&&(n=Math.round(n/p)*p),Math.max(o,Math.min(c,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Le(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,o){var c=this._getCenterOffset(n)._trunc();return(o&&o.animate)!==!0&&!this.getSize().contains(c)?!1:(this.panBy(c,o),!0)},_createAnimProxy:function(){var n=this._proxy=Wt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(o){var c=jt,p=this._proxy.style[c];Xe(this._proxy,this.project(o.center,o.zoom),this.getZoomScale(o.zoom,1)),p===this._proxy.style[c]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){he(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),o=this.getZoom();Xe(this._proxy,this.project(n,o),this.getZoomScale(o,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,o,c){if(this._animatingZoom)return!0;if(c=c||{},!this._zoomAnimated||c.animate===!1||this._nothingToAnimate()||Math.abs(o-this._zoom)>this.options.zoomAnimationThreshold)return!1;var p=this.getZoomScale(o),y=this._getCenterOffset(n)._divideBy(1-1/p);return c.animate!==!0&&!this.getSize().contains(y)?!1:(E(function(){this._moveStart(!0,c.noMoveStart||!1)._animateZoom(n,o,!0)},this),!0)},_animateZoom:function(n,o,c,p){this._mapPane&&(c&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=o,Kt(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:o,noUpdate:p}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(r(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Le(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function kp(n,o){return new ye(n,o)}var Yn=X.extend({options:{position:"topright"},initialize:function(n){g(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var o=this._map;return o&&o.removeControl(this),this.options.position=n,o&&o.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var o=this._container=this.onAdd(n),c=this.getPosition(),p=n._controlCorners[c];return Kt(o,"leaflet-control"),c.indexOf("bottom")!==-1?p.insertBefore(o,p.firstChild):p.appendChild(o),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(he(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),Ir=function(n){return new Yn(n)};ye.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},o="leaflet-",c=this._controlContainer=Wt("div",o+"control-container",this._container);function p(y,A){var F=o+y+" "+o+A;n[y+A]=Wt("div",F,c)}p("top","left"),p("top","right"),p("bottom","left"),p("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)he(this._controlCorners[n]);he(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Tu=Yn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,o,c,p){return c<p?-1:p<c?1:0}},initialize:function(n,o,c){g(this,c),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var p in n)this._addLayer(n[p],p);for(p in o)this._addLayer(o[p],p,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return Yn.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,o){return this._addLayer(n,o),this._map?this._update():this},addOverlay:function(n,o){return this._addLayer(n,o,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var o=this._getLayer(l(n));return o&&this._layers.splice(this._layers.indexOf(o),1),this._map?this._update():this},expand:function(){Kt(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?(Kt(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):Le(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Le(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",o=this._container=Wt("div",n),c=this.options.collapsed;o.setAttribute("aria-haspopup",!0),Lr(o),Ul(o);var p=this._section=Wt("section",n+"-list");c&&(this._map.on("click",this.collapse,this),se(o,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var y=this._layersLink=Wt("a",n+"-toggle",o);y.href="#",y.title="Layers",y.setAttribute("role","button"),se(y,{keydown:function(A){A.keyCode===13&&this._expandSafely()},click:function(A){rn(A),this._expandSafely()}},this),c||this.expand(),this._baseLayersList=Wt("div",n+"-base",p),this._separator=Wt("div",n+"-separator",p),this._overlaysList=Wt("div",n+"-overlays",p),o.appendChild(p)},_getLayer:function(n){for(var o=0;o<this._layers.length;o++)if(this._layers[o]&&l(this._layers[o].layer)===n)return this._layers[o]},_addLayer:function(n,o,c){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:o,overlay:c}),this.options.sortLayers&&this._layers.sort(r(function(p,y){return this.options.sortFunction(p.layer,y.layer,p.name,y.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;_e(this._baseLayersList),_e(this._overlaysList),this._layerControlInputs=[];var n,o,c,p,y=0;for(c=0;c<this._layers.length;c++)p=this._layers[c],this._addItem(p),o=o||p.overlay,n=n||!p.overlay,y+=p.overlay?0:1;return this.options.hideSingleBase&&(n=n&&y>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=o&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var o=this._getLayer(l(n.target)),c=o.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;c&&this._map.fire(c,o)},_createRadioElement:function(n,o){var c='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(o?' checked="checked"':"")+"/>",p=document.createElement("div");return p.innerHTML=c,p.firstChild},_addItem:function(n){var o=document.createElement("label"),c=this._map.hasLayer(n.layer),p;n.overlay?(p=document.createElement("input"),p.type="checkbox",p.className="leaflet-control-layers-selector",p.defaultChecked=c):p=this._createRadioElement("leaflet-base-layers_"+l(this),c),this._layerControlInputs.push(p),p.layerId=l(n.layer),se(p,"click",this._onInputClick,this);var y=document.createElement("span");y.innerHTML=" "+n.name;var A=document.createElement("span");o.appendChild(A),A.appendChild(p),A.appendChild(y);var F=n.overlay?this._overlaysList:this._baseLayersList;return F.appendChild(o),this._checkDisabledLayers(),o},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,o,c,p=[],y=[];this._handlingClick=!0;for(var A=n.length-1;A>=0;A--)o=n[A],c=this._getLayer(o.layerId).layer,o.checked?p.push(c):o.checked||y.push(c);for(A=0;A<y.length;A++)this._map.hasLayer(y[A])&&this._map.removeLayer(y[A]);for(A=0;A<p.length;A++)this._map.hasLayer(p[A])||this._map.addLayer(p[A]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,o,c,p=this._map.getZoom(),y=n.length-1;y>=0;y--)o=n[y],c=this._getLayer(o.layerId).layer,o.disabled=c.options.minZoom!==void 0&&p<c.options.minZoom||c.options.maxZoom!==void 0&&p>c.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,se(n,"click",rn),this.expand();var o=this;setTimeout(function(){ke(n,"click",rn),o._preventClick=!1})}}),Bp=function(n,o,c){return new Tu(n,o,c)},Bl=Yn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var o="leaflet-control-zoom",c=Wt("div",o+" leaflet-bar"),p=this.options;return this._zoomInButton=this._createButton(p.zoomInText,p.zoomInTitle,o+"-in",c,this._zoomIn),this._zoomOutButton=this._createButton(p.zoomOutText,p.zoomOutTitle,o+"-out",c,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),c},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,o,c,p,y){var A=Wt("a",c,p);return A.innerHTML=n,A.href="#",A.title=o,A.setAttribute("role","button"),A.setAttribute("aria-label",o),Lr(A),se(A,"click",as),se(A,"click",y,this),se(A,"click",this._refocusOnMap,this),A},_updateDisabled:function(){var n=this._map,o="leaflet-disabled";Le(this._zoomInButton,o),Le(this._zoomOutButton,o),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&(Kt(this._zoomOutButton,o),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&(Kt(this._zoomInButton,o),this._zoomInButton.setAttribute("aria-disabled","true"))}});ye.mergeOptions({zoomControl:!0}),ye.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Bl,this.addControl(this.zoomControl))});var Fp=function(n){return new Bl(n)},Eu=Yn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var o="leaflet-control-scale",c=Wt("div",o),p=this.options;return this._addScales(p,o+"-line",c),n.on(p.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),c},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,o,c){n.metric&&(this._mScale=Wt("div",o,c)),n.imperial&&(this._iScale=Wt("div",o,c))},_update:function(){var n=this._map,o=n.getSize().y/2,c=n.distance(n.containerPointToLatLng([0,o]),n.containerPointToLatLng([this.options.maxWidth,o]));this._updateScales(c)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var o=this._getRoundNum(n),c=o<1e3?o+" m":o/1e3+" km";this._updateScale(this._mScale,c,o/n)},_updateImperial:function(n){var o=n*3.2808399,c,p,y;o>5280?(c=o/5280,p=this._getRoundNum(c),this._updateScale(this._iScale,p+" mi",p/c)):(y=this._getRoundNum(o),this._updateScale(this._iScale,y+" ft",y/o))},_updateScale:function(n,o,c){n.style.width=Math.round(this.options.maxWidth*c)+"px",n.innerHTML=o},_getRoundNum:function(n){var o=Math.pow(10,(Math.floor(n)+"").length-1),c=n/o;return c=c>=10?10:c>=5?5:c>=3?3:c>=2?2:1,o*c}}),zp=function(n){return new Eu(n)},Hp='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Fl=Yn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(Ut.inlineSvg?Hp+" ":"")+"Leaflet</a>"},initialize:function(n){g(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=Wt("div","leaflet-control-attribution"),Lr(this._container);for(var o in n._layers)n._layers[o].getAttribution&&this.addAttribution(n._layers[o].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var o in this._attributions)this._attributions[o]&&n.push(o);var c=[];this.options.prefix&&c.push(this.options.prefix),n.length&&c.push(n.join(", ")),this._container.innerHTML=c.join(' <span aria-hidden="true">|</span> ')}}});ye.mergeOptions({attributionControl:!0}),ye.addInitHook(function(){this.options.attributionControl&&new Fl().addTo(this)});var Vp=function(n){return new Fl(n)};Yn.Layers=Tu,Yn.Zoom=Bl,Yn.Scale=Eu,Yn.Attribution=Fl,Ir.layers=Bp,Ir.zoom=Fp,Ir.scale=zp,Ir.attribution=Vp;var di=X.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});di.addTo=function(n,o){return n.addHandler(o,this),this};var Gp={Events:K},Au=Ut.touch?"touchstart mousedown":"mousedown",Wi=it.extend({options:{clickTolerance:3},initialize:function(n,o,c,p){g(this,p),this._element=n,this._dragStartTarget=o||n,this._preventOutline=c},enable:function(){this._enabled||(se(this._dragStartTarget,Au,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Wi._dragging===this&&this.finishDrag(!0),ke(this._dragStartTarget,Au,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!xe(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){Wi._dragging===this&&this.finishDrag();return}if(!(Wi._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(Wi._dragging=this,this._preventOutline&&Ll(this._element),Pl(),Gi(),!this._moving)){this.fire("down");var o=n.touches?n.touches[0]:n,c=xu(this._element);this._startPoint=new H(o.clientX,o.clientY),this._startPos=un(this._element),this._parentScale=Il(c);var p=n.type==="mousedown";se(document,p?"mousemove":"touchmove",this._onMove,this),se(document,p?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var o=n.touches&&n.touches.length===1?n.touches[0]:n,c=new H(o.clientX,o.clientY)._subtract(this._startPoint);!c.x&&!c.y||Math.abs(c.x)+Math.abs(c.y)<this.options.clickTolerance||(c.x/=this._parentScale.x,c.y/=this._parentScale.y,rn(n),this._moved||(this.fire("dragstart"),this._moved=!0,Kt(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Kt(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(c),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),Ce(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){Le(document.body,"leaflet-dragging"),this._lastTarget&&(Le(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),ke(document,"mousemove touchmove",this._onMove,this),ke(document,"mouseup touchend touchcancel",this._onUp,this),Cl(),Cr();var o=this._moved&&this._moving;this._moving=!1,Wi._dragging=!1,o&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function Pu(n,o,c){var p,y=[1,4,2,8],A,F,J,nt,ft,Rt,Jt,de;for(A=0,Rt=n.length;A<Rt;A++)n[A]._code=ls(n[A],o);for(J=0;J<4;J++){for(Jt=y[J],p=[],A=0,Rt=n.length,F=Rt-1;A<Rt;F=A++)nt=n[A],ft=n[F],nt._code&Jt?ft._code&Jt||(de=mo(ft,nt,Jt,o,c),de._code=ls(de,o),p.push(de)):(ft._code&Jt&&(de=mo(ft,nt,Jt,o,c),de._code=ls(de,o),p.push(de)),p.push(nt));n=p}return n}function Cu(n,o){var c,p,y,A,F,J,nt,ft,Rt;if(!n||n.length===0)throw new Error("latlngs not passed");Un(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Jt=$([0,0]),de=Mt(n),_n=de.getNorthWest().distanceTo(de.getSouthWest())*de.getNorthEast().distanceTo(de.getNorthWest());_n<1700&&(Jt=zl(n));var Qe=n.length,kn=[];for(c=0;c<Qe;c++){var bn=$(n[c]);kn.push(o.project($([bn.lat-Jt.lat,bn.lng-Jt.lng])))}for(J=nt=ft=0,c=0,p=Qe-1;c<Qe;p=c++)y=kn[c],A=kn[p],F=y.y*A.x-A.y*y.x,nt+=(y.x+A.x)*F,ft+=(y.y+A.y)*F,J+=F*3;J===0?Rt=kn[0]:Rt=[nt/J,ft/J];var zs=o.unproject(G(Rt));return $([zs.lat+Jt.lat,zs.lng+Jt.lng])}function zl(n){for(var o=0,c=0,p=0,y=0;y<n.length;y++){var A=$(n[y]);o+=A.lat,c+=A.lng,p++}return $([o/p,c/p])}var Wp={__proto__:null,clipPolygon:Pu,polygonCenter:Cu,centroid:zl};function Ru(n,o){if(!o||!n.length)return n.slice();var c=o*o;return n=qp(n,c),n=Xp(n,c),n}function Lu(n,o,c){return Math.sqrt(Dr(n,o,c,!0))}function Zp(n,o,c){return Dr(n,o,c)}function Xp(n,o){var c=n.length,p=typeof Uint8Array<"u"?Uint8Array:Array,y=new p(c);y[0]=y[c-1]=1,Hl(n,y,o,0,c-1);var A,F=[];for(A=0;A<c;A++)y[A]&&F.push(n[A]);return F}function Hl(n,o,c,p,y){var A=0,F,J,nt;for(J=p+1;J<=y-1;J++)nt=Dr(n[J],n[p],n[y],!0),nt>A&&(F=J,A=nt);A>c&&(o[F]=1,Hl(n,o,c,p,F),Hl(n,o,c,F,y))}function qp(n,o){for(var c=[n[0]],p=1,y=0,A=n.length;p<A;p++)Yp(n[p],n[y])>o&&(c.push(n[p]),y=p);return y<A-1&&c.push(n[A-1]),c}var Iu;function Du(n,o,c,p,y){var A=p?Iu:ls(n,c),F=ls(o,c),J,nt,ft;for(Iu=F;;){if(!(A|F))return[n,o];if(A&F)return!1;J=A||F,nt=mo(n,o,J,c,y),ft=ls(nt,c),J===A?(n=nt,A=ft):(o=nt,F=ft)}}function mo(n,o,c,p,y){var A=o.x-n.x,F=o.y-n.y,J=p.min,nt=p.max,ft,Rt;return c&8?(ft=n.x+A*(nt.y-n.y)/F,Rt=nt.y):c&4?(ft=n.x+A*(J.y-n.y)/F,Rt=J.y):c&2?(ft=nt.x,Rt=n.y+F*(nt.x-n.x)/A):c&1&&(ft=J.x,Rt=n.y+F*(J.x-n.x)/A),new H(ft,Rt,y)}function ls(n,o){var c=0;return n.x<o.min.x?c|=1:n.x>o.max.x&&(c|=2),n.y<o.min.y?c|=4:n.y>o.max.y&&(c|=8),c}function Yp(n,o){var c=o.x-n.x,p=o.y-n.y;return c*c+p*p}function Dr(n,o,c,p){var y=o.x,A=o.y,F=c.x-y,J=c.y-A,nt=F*F+J*J,ft;return nt>0&&(ft=((n.x-y)*F+(n.y-A)*J)/nt,ft>1?(y=c.x,A=c.y):ft>0&&(y+=F*ft,A+=J*ft)),F=n.x-y,J=n.y-A,p?F*F+J*J:new H(y,A)}function Un(n){return!v(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]<"u"}function Nu(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Un(n)}function Ou(n,o){var c,p,y,A,F,J,nt,ft;if(!n||n.length===0)throw new Error("latlngs not passed");Un(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Rt=$([0,0]),Jt=Mt(n),de=Jt.getNorthWest().distanceTo(Jt.getSouthWest())*Jt.getNorthEast().distanceTo(Jt.getNorthWest());de<1700&&(Rt=zl(n));var _n=n.length,Qe=[];for(c=0;c<_n;c++){var kn=$(n[c]);Qe.push(o.project($([kn.lat-Rt.lat,kn.lng-Rt.lng])))}for(c=0,p=0;c<_n-1;c++)p+=Qe[c].distanceTo(Qe[c+1])/2;if(p===0)ft=Qe[0];else for(c=0,A=0;c<_n-1;c++)if(F=Qe[c],J=Qe[c+1],y=F.distanceTo(J),A+=y,A>p){nt=(A-p)/y,ft=[J.x-nt*(J.x-F.x),J.y-nt*(J.y-F.y)];break}var bn=o.unproject(G(ft));return $([bn.lat+Rt.lat,bn.lng+Rt.lng])}var Kp={__proto__:null,simplify:Ru,pointToSegmentDistance:Lu,closestPointOnSegment:Zp,clipSegment:Du,_getEdgeIntersection:mo,_getBitCode:ls,_sqClosestPointOnSegment:Dr,isFlat:Un,_flat:Nu,polylineCenter:Ou},Vl={project:function(n){return new H(n.lng,n.lat)},unproject:function(n){return new yt(n.y,n.x)},bounds:new lt([-180,-90],[180,90])},Gl={R:6378137,R_MINOR:6356752314245179e-9,bounds:new lt([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var o=Math.PI/180,c=this.R,p=n.lat*o,y=this.R_MINOR/c,A=Math.sqrt(1-y*y),F=A*Math.sin(p),J=Math.tan(Math.PI/4-p/2)/Math.pow((1-F)/(1+F),A/2);return p=-c*Math.log(Math.max(J,1e-10)),new H(n.lng*o*c,p)},unproject:function(n){for(var o=180/Math.PI,c=this.R,p=this.R_MINOR/c,y=Math.sqrt(1-p*p),A=Math.exp(-n.y/c),F=Math.PI/2-2*Math.atan(A),J=0,nt=.1,ft;J<15&&Math.abs(nt)>1e-7;J++)ft=y*Math.sin(F),ft=Math.pow((1-ft)/(1+ft),y/2),nt=Math.PI/2-2*Math.atan(A*ft)-F,F+=nt;return new yt(F*o,n.x*o/c)}},$p={__proto__:null,LonLat:Vl,Mercator:Gl,SphericalMercator:Xt},Jp=e({},bt,{code:"EPSG:3395",projection:Gl,transformation:(function(){var n=.5/(Math.PI*Gl.R);return st(n,.5,-n,.5)})()}),Uu=e({},bt,{code:"EPSG:4326",projection:Vl,transformation:st(1/180,1,-1/180,.5)}),jp=e({},pt,{projection:Vl,transformation:st(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,o){var c=o.lng-n.lng,p=o.lat-n.lat;return Math.sqrt(c*c+p*p)},infinite:!0});pt.Earth=bt,pt.EPSG3395=Jp,pt.EPSG3857=It,pt.EPSG900913=qt,pt.EPSG4326=Uu,pt.Simple=jp;var Kn=it.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[l(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[l(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var o=n.target;if(o.hasLayer(this)){if(this._map=o,this._zoomAnimated=o._zoomAnimated,this.getEvents){var c=this.getEvents();o.on(c,this),this.once("remove",function(){o.off(c,this)},this)}this.onAdd(o),this.fire("add"),o.fire("layeradd",{layer:this})}}});ye.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var o=l(n);return this._layers[o]?this:(this._layers[o]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var o=l(n);return this._layers[o]?(this._loaded&&n.onRemove(this),delete this._layers[o],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return l(n)in this._layers},eachLayer:function(n,o){for(var c in this._layers)n.call(o,this._layers[c]);return this},_addLayers:function(n){n=n?v(n)?n:[n]:[];for(var o=0,c=n.length;o<c;o++)this.addLayer(n[o])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[l(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var o=l(n);this._zoomBoundLayers[o]&&(delete this._zoomBoundLayers[o],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,o=-1/0,c=this._getZoomSpan();for(var p in this._zoomBoundLayers){var y=this._zoomBoundLayers[p].options;n=y.minZoom===void 0?n:Math.min(n,y.minZoom),o=y.maxZoom===void 0?o:Math.max(o,y.maxZoom)}this._layersMaxZoom=o===-1/0?void 0:o,this._layersMinZoom=n===1/0?void 0:n,c!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Os=Kn.extend({initialize:function(n,o){g(this,o),this._layers={};var c,p;if(n)for(c=0,p=n.length;c<p;c++)this.addLayer(n[c])},addLayer:function(n){var o=this.getLayerId(n);return this._layers[o]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var o=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[o]&&this._map.removeLayer(this._layers[o]),delete this._layers[o],this},hasLayer:function(n){var o=typeof n=="number"?n:this.getLayerId(n);return o in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var o=Array.prototype.slice.call(arguments,1),c,p;for(c in this._layers)p=this._layers[c],p[n]&&p[n].apply(p,o);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,o){for(var c in this._layers)n.call(o,this._layers[c]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return l(n)}}),Qp=function(n,o){return new Os(n,o)},bi=Os.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),Os.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),Os.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new ot;for(var o in this._layers){var c=this._layers[o];n.extend(c.getBounds?c.getBounds():c.getLatLng())}return n}}),tm=function(n,o){return new bi(n,o)},Us=X.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){g(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,o){var c=this._getIconUrl(n);if(!c){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var p=this._createImg(c,o&&o.tagName==="IMG"?o:null);return this._setIconStyles(p,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(p.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),p},_setIconStyles:function(n,o){var c=this.options,p=c[o+"Size"];typeof p=="number"&&(p=[p,p]);var y=G(p),A=G(o==="shadow"&&c.shadowAnchor||c.iconAnchor||y&&y.divideBy(2,!0));n.className="leaflet-marker-"+o+" "+(c.className||""),A&&(n.style.marginLeft=-A.x+"px",n.style.marginTop=-A.y+"px"),y&&(n.style.width=y.x+"px",n.style.height=y.y+"px")},_createImg:function(n,o){return o=o||document.createElement("img"),o.src=n,o},_getIconUrl:function(n){return Ut.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function em(n){return new Us(n)}var Nr=Us.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof Nr.imagePath!="string"&&(Nr.imagePath=this._detectIconPath()),(this.options.imagePath||Nr.imagePath)+Us.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var o=function(c,p,y){var A=p.exec(c);return A&&A[y]};return n=o(n,/^url\((['"])?(.+)\1\)$/,2),n&&o(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=Wt("div","leaflet-default-icon-path",document.body),o=we(n,"background-image")||we(n,"backgroundImage");if(document.body.removeChild(n),o=this._stripUrl(o),o)return o;var c=document.querySelector('link[href$="leaflet.css"]');return c?c.href.substring(0,c.href.length-11-1):""}}),ku=di.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new Wi(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Kt(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Le(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var o=this._marker,c=o._map,p=this._marker.options.autoPanSpeed,y=this._marker.options.autoPanPadding,A=un(o._icon),F=c.getPixelBounds(),J=c.getPixelOrigin(),nt=rt(F.min._subtract(J).add(y),F.max._subtract(J).subtract(y));if(!nt.contains(A)){var ft=G((Math.max(nt.max.x,A.x)-nt.max.x)/(F.max.x-nt.max.x)-(Math.min(nt.min.x,A.x)-nt.min.x)/(F.min.x-nt.min.x),(Math.max(nt.max.y,A.y)-nt.max.y)/(F.max.y-nt.max.y)-(Math.min(nt.min.y,A.y)-nt.min.y)/(F.min.y-nt.min.y)).multiplyBy(p);c.panBy(ft,{animate:!1}),this._draggable._newPos._add(ft),this._draggable._startPos._add(ft),Ce(o._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=E(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(T(this._panRequest),this._panRequest=E(this._adjustPan.bind(this,n)))},_onDrag:function(n){var o=this._marker,c=o._shadow,p=un(o._icon),y=o._map.layerPointToLatLng(p);c&&Ce(c,p),o._latlng=y,n.latlng=y,n.oldLatLng=this._oldLatLng,o.fire("move",n).fire("drag",n)},_onDragEnd:function(n){T(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),go=Kn.extend({options:{icon:new Nr,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,o){g(this,o),this._latlng=$(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var o=this._latlng;return this._latlng=$(n),this.update(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,o="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),c=n.icon.createIcon(this._icon),p=!1;c!==this._icon&&(this._icon&&this._removeIcon(),p=!0,n.title&&(c.title=n.title),c.tagName==="IMG"&&(c.alt=n.alt||"")),Kt(c,o),n.keyboard&&(c.tabIndex="0",c.setAttribute("role","button")),this._icon=c,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&se(c,"focus",this._panOnFocus,this);var y=n.icon.createShadow(this._shadow),A=!1;y!==this._shadow&&(this._removeShadow(),A=!0),y&&(Kt(y,o),y.alt=""),this._shadow=y,n.opacity<1&&this._updateOpacity(),p&&this.getPane().appendChild(this._icon),this._initInteraction(),y&&A&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ke(this._icon,"focus",this._panOnFocus,this),he(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&he(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&Ce(this._icon,n),this._shadow&&Ce(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(o)},_initInteraction:function(){if(this.options.interactive&&(Kt(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),ku)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new ku(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&ue(this._icon,n),this._shadow&&ue(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var o=this.options.icon.options,c=o.iconSize?G(o.iconSize):G(0,0),p=o.iconAnchor?G(o.iconAnchor):G(0,0);n.panInside(this._latlng,{paddingTopLeft:p,paddingBottomRight:c.subtract(p)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function nm(n,o){return new go(n,o)}var Zi=Kn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return g(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),_o=Zi.extend({options:{fill:!0,radius:10},initialize:function(n,o){g(this,o),this._latlng=$(n),this._radius=this.options.radius},setLatLng:function(n){var o=this._latlng;return this._latlng=$(n),this.redraw(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var o=n&&n.radius||this._radius;return Zi.prototype.setStyle.call(this,n),this.setRadius(o),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,o=this._radiusY||n,c=this._clickTolerance(),p=[n+c,o+c];this._pxBounds=new lt(this._point.subtract(p),this._point.add(p))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function im(n,o){return new _o(n,o)}var Wl=_o.extend({initialize:function(n,o,c){if(typeof o=="number"&&(o=e({},c,{radius:o})),g(this,o),this._latlng=$(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new ot(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:Zi.prototype.setStyle,_project:function(){var n=this._latlng.lng,o=this._latlng.lat,c=this._map,p=c.options.crs;if(p.distance===bt.distance){var y=Math.PI/180,A=this._mRadius/bt.R/y,F=c.project([o+A,n]),J=c.project([o-A,n]),nt=F.add(J).divideBy(2),ft=c.unproject(nt).lat,Rt=Math.acos((Math.cos(A*y)-Math.sin(o*y)*Math.sin(ft*y))/(Math.cos(o*y)*Math.cos(ft*y)))/y;(isNaN(Rt)||Rt===0)&&(Rt=A/Math.cos(Math.PI/180*o)),this._point=nt.subtract(c.getPixelOrigin()),this._radius=isNaN(Rt)?0:nt.x-c.project([ft,n-Rt]).x,this._radiusY=nt.y-F.y}else{var Jt=p.unproject(p.project(this._latlng).subtract([this._mRadius,0]));this._point=c.latLngToLayerPoint(this._latlng),this._radius=this._point.x-c.latLngToLayerPoint(Jt).x}this._updateBounds()}});function sm(n,o,c){return new Wl(n,o,c)}var Si=Zi.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,o){g(this,o),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var o=1/0,c=null,p=Dr,y,A,F=0,J=this._parts.length;F<J;F++)for(var nt=this._parts[F],ft=1,Rt=nt.length;ft<Rt;ft++){y=nt[ft-1],A=nt[ft];var Jt=p(n,y,A,!0);Jt<o&&(o=Jt,c=p(n,y,A))}return c&&(c.distance=Math.sqrt(o)),c},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Ou(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,o){return o=o||this._defaultShape(),n=$(n),o.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new ot,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return Un(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var o=[],c=Un(n),p=0,y=n.length;p<y;p++)c?(o[p]=$(n[p]),this._bounds.extend(o[p])):o[p]=this._convertLatLngs(n[p]);return o},_project:function(){var n=new lt;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),o=new H(n,n);this._rawPxBounds&&(this._pxBounds=new lt([this._rawPxBounds.min.subtract(o),this._rawPxBounds.max.add(o)]))},_projectLatlngs:function(n,o,c){var p=n[0]instanceof yt,y=n.length,A,F;if(p){for(F=[],A=0;A<y;A++)F[A]=this._map.latLngToLayerPoint(n[A]),c.extend(F[A]);o.push(F)}else for(A=0;A<y;A++)this._projectLatlngs(n[A],o,c)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var o=this._parts,c,p,y,A,F,J,nt;for(c=0,y=0,A=this._rings.length;c<A;c++)for(nt=this._rings[c],p=0,F=nt.length;p<F-1;p++)J=Du(nt[p],nt[p+1],n,p,!0),J&&(o[y]=o[y]||[],o[y].push(J[0]),(J[1]!==nt[p+1]||p===F-2)&&(o[y].push(J[1]),y++))}},_simplifyPoints:function(){for(var n=this._parts,o=this.options.smoothFactor,c=0,p=n.length;c<p;c++)n[c]=Ru(n[c],o)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,o){var c,p,y,A,F,J,nt=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(c=0,A=this._parts.length;c<A;c++)for(J=this._parts[c],p=0,F=J.length,y=F-1;p<F;y=p++)if(!(!o&&p===0)&&Lu(n,J[y],J[p])<=nt)return!0;return!1}});function rm(n,o){return new Si(n,o)}Si._flat=Nu;var ks=Si.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Cu(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var o=Si.prototype._convertLatLngs.call(this,n),c=o.length;return c>=2&&o[0]instanceof yt&&o[0].equals(o[c-1])&&o.pop(),o},_setLatLngs:function(n){Si.prototype._setLatLngs.call(this,n),Un(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Un(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,o=this.options.weight,c=new H(o,o);if(n=new lt(n.min.subtract(c),n.max.add(c)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var p=0,y=this._rings.length,A;p<y;p++)A=Pu(this._rings[p],n,!0),A.length&&this._parts.push(A)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var o=!1,c,p,y,A,F,J,nt,ft;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(A=0,nt=this._parts.length;A<nt;A++)for(c=this._parts[A],F=0,ft=c.length,J=ft-1;F<ft;J=F++)p=c[F],y=c[J],p.y>n.y!=y.y>n.y&&n.x<(y.x-p.x)*(n.y-p.y)/(y.y-p.y)+p.x&&(o=!o);return o||Si.prototype._containsPoint.call(this,n,!0)}});function om(n,o){return new ks(n,o)}var wi=bi.extend({initialize:function(n,o){g(this,o),this._layers={},n&&this.addData(n)},addData:function(n){var o=v(n)?n:n.features,c,p,y;if(o){for(c=0,p=o.length;c<p;c++)y=o[c],(y.geometries||y.geometry||y.features||y.coordinates)&&this.addData(y);return this}var A=this.options;if(A.filter&&!A.filter(n))return this;var F=vo(n,A);return F?(F.feature=Mo(n),F.defaultOptions=F.options,this.resetStyle(F),A.onEachFeature&&A.onEachFeature(n,F),this.addLayer(F)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=e({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(o){this._setLayerStyle(o,n)},this)},_setLayerStyle:function(n,o){n.setStyle&&(typeof o=="function"&&(o=o(n.feature)),n.setStyle(o))}});function vo(n,o){var c=n.type==="Feature"?n.geometry:n,p=c?c.coordinates:null,y=[],A=o&&o.pointToLayer,F=o&&o.coordsToLatLng||Zl,J,nt,ft,Rt;if(!p&&!c)return null;switch(c.type){case"Point":return J=F(p),Bu(A,n,J,o);case"MultiPoint":for(ft=0,Rt=p.length;ft<Rt;ft++)J=F(p[ft]),y.push(Bu(A,n,J,o));return new bi(y);case"LineString":case"MultiLineString":return nt=xo(p,c.type==="LineString"?0:1,F),new Si(nt,o);case"Polygon":case"MultiPolygon":return nt=xo(p,c.type==="Polygon"?1:2,F),new ks(nt,o);case"GeometryCollection":for(ft=0,Rt=c.geometries.length;ft<Rt;ft++){var Jt=vo({geometry:c.geometries[ft],type:"Feature",properties:n.properties},o);Jt&&y.push(Jt)}return new bi(y);case"FeatureCollection":for(ft=0,Rt=c.features.length;ft<Rt;ft++){var de=vo(c.features[ft],o);de&&y.push(de)}return new bi(y);default:throw new Error("Invalid GeoJSON object.")}}function Bu(n,o,c,p){return n?n(o,c):new go(c,p&&p.markersInheritOptions&&p)}function Zl(n){return new yt(n[1],n[0],n[2])}function xo(n,o,c){for(var p=[],y=0,A=n.length,F;y<A;y++)F=o?xo(n[y],o-1,c):(c||Zl)(n[y]),p.push(F);return p}function Xl(n,o){return n=$(n),n.alt!==void 0?[m(n.lng,o),m(n.lat,o),m(n.alt,o)]:[m(n.lng,o),m(n.lat,o)]}function yo(n,o,c,p){for(var y=[],A=0,F=n.length;A<F;A++)y.push(o?yo(n[A],Un(n[A])?0:o-1,c,p):Xl(n[A],p));return!o&&c&&y.length>0&&y.push(y[0].slice()),y}function Bs(n,o){return n.feature?e({},n.feature,{geometry:o}):Mo(o)}function Mo(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var ql={toGeoJSON:function(n){return Bs(this,{type:"Point",coordinates:Xl(this.getLatLng(),n)})}};go.include(ql),Wl.include(ql),_o.include(ql),Si.include({toGeoJSON:function(n){var o=!Un(this._latlngs),c=yo(this._latlngs,o?1:0,!1,n);return Bs(this,{type:(o?"Multi":"")+"LineString",coordinates:c})}}),ks.include({toGeoJSON:function(n){var o=!Un(this._latlngs),c=o&&!Un(this._latlngs[0]),p=yo(this._latlngs,c?2:o?1:0,!0,n);return o||(p=[p]),Bs(this,{type:(c?"Multi":"")+"Polygon",coordinates:p})}}),Os.include({toMultiPoint:function(n){var o=[];return this.eachLayer(function(c){o.push(c.toGeoJSON(n).geometry.coordinates)}),Bs(this,{type:"MultiPoint",coordinates:o})},toGeoJSON:function(n){var o=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(o==="MultiPoint")return this.toMultiPoint(n);var c=o==="GeometryCollection",p=[];return this.eachLayer(function(y){if(y.toGeoJSON){var A=y.toGeoJSON(n);if(c)p.push(A.geometry);else{var F=Mo(A);F.type==="FeatureCollection"?p.push.apply(p,F.features):p.push(F)}}}),c?Bs(this,{geometries:p,type:"GeometryCollection"}):{type:"FeatureCollection",features:p}}});function Fu(n,o){return new wi(n,o)}var am=Fu,bo=Kn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,o,c){this._url=n,this._bounds=Mt(o),g(this,c)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Kt(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){he(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&Bt(this._image),this},bringToBack:function(){return this._map&&hn(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=Mt(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",o=this._image=n?this._url:Wt("img");if(Kt(o,"leaflet-image-layer"),this._zoomAnimated&&Kt(o,"leaflet-zoom-animated"),this.options.className&&Kt(o,this.options.className),o.onselectstart=f,o.onmousemove=f,o.onload=r(this.fire,this,"load"),o.onerror=r(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=o.src;return}o.src=this._url,o.alt=this.options.alt},_animateZoom:function(n){var o=this._map.getZoomScale(n.zoom),c=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;Xe(this._image,c,o)},_reset:function(){var n=this._image,o=new lt(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),c=o.getSize();Ce(n,o.min),n.style.width=c.x+"px",n.style.height=c.y+"px"},_updateOpacity:function(){ue(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),lm=function(n,o,c){return new bo(n,o,c)},zu=bo.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",o=this._image=n?this._url:Wt("video");if(Kt(o,"leaflet-image-layer"),this._zoomAnimated&&Kt(o,"leaflet-zoom-animated"),this.options.className&&Kt(o,this.options.className),o.onselectstart=f,o.onmousemove=f,o.onloadeddata=r(this.fire,this,"load"),n){for(var c=o.getElementsByTagName("source"),p=[],y=0;y<c.length;y++)p.push(c[y].src);this._url=c.length>0?p:[o.src];return}v(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(o.style,"objectFit")&&(o.style.objectFit="fill"),o.autoplay=!!this.options.autoplay,o.loop=!!this.options.loop,o.muted=!!this.options.muted,o.playsInline=!!this.options.playsInline;for(var A=0;A<this._url.length;A++){var F=Wt("source");F.src=this._url[A],o.appendChild(F)}}});function cm(n,o,c){return new zu(n,o,c)}var Hu=bo.extend({_initImage:function(){var n=this._image=this._url;Kt(n,"leaflet-image-layer"),this._zoomAnimated&&Kt(n,"leaflet-zoom-animated"),this.options.className&&Kt(n,this.options.className),n.onselectstart=f,n.onmousemove=f}});function hm(n,o,c){return new Hu(n,o,c)}var fi=Kn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,o){n&&(n instanceof yt||v(n))?(this._latlng=$(n),g(this,o)):(g(this,n),this._source=o),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&ue(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&ue(this._container,1),this.bringToFront(),this.options.interactive&&(Kt(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?(ue(this._container,0),this._removeTimeout=setTimeout(r(he,void 0,this._container),200)):he(this._container),this.options.interactive&&(Le(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=$(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Bt(this._container),this},bringToBack:function(){return this._map&&hn(this._container),this},_prepareOpen:function(n){var o=this._source;if(!o._map)return!1;if(o instanceof bi){o=null;var c=this._source._layers;for(var p in c)if(c[p]._map){o=c[p];break}if(!o)return!1;this._source=o}if(!n)if(o.getCenter)n=o.getCenter();else if(o.getLatLng)n=o.getLatLng();else if(o.getBounds)n=o.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,o=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof o=="string")n.innerHTML=o;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(o)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),o=G(this.options.offset),c=this._getAnchor();this._zoomAnimated?Ce(this._container,n.add(c)):o=o.add(n).add(c);var p=this._containerBottom=-o.y,y=this._containerLeft=-Math.round(this._containerWidth/2)+o.x;this._container.style.bottom=p+"px",this._container.style.left=y+"px"}},_getAnchor:function(){return[0,0]}});ye.include({_initOverlay:function(n,o,c,p){var y=o;return y instanceof n||(y=new n(p).setContent(o)),c&&y.setLatLng(c),y}}),Kn.include({_initOverlay:function(n,o,c,p){var y=c;return y instanceof n?(g(y,p),y._source=this):(y=o&&!p?o:new n(p,this),y.setContent(c)),y}});var So=fi.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,fi.prototype.openOn.call(this,n)},onAdd:function(n){fi.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Zi||this._source.on("preclick",os))},onRemove:function(n){fi.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Zi||this._source.off("preclick",os))},getEvents:function(){var n=fi.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",o=this._container=Wt("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),c=this._wrapper=Wt("div",n+"-content-wrapper",o);if(this._contentNode=Wt("div",n+"-content",c),Lr(o),Ul(this._contentNode),se(o,"contextmenu",os),this._tipContainer=Wt("div",n+"-tip-container",o),this._tip=Wt("div",n+"-tip",this._tipContainer),this.options.closeButton){var p=this._closeButton=Wt("a",n+"-close-button",o);p.setAttribute("role","button"),p.setAttribute("aria-label","Close popup"),p.href="#close",p.innerHTML='<span aria-hidden="true">&#215;</span>',se(p,"click",function(y){rn(y),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,o=n.style;o.width="",o.whiteSpace="nowrap";var c=n.offsetWidth;c=Math.min(c,this.options.maxWidth),c=Math.max(c,this.options.minWidth),o.width=c+1+"px",o.whiteSpace="",o.height="";var p=n.offsetHeight,y=this.options.maxHeight,A="leaflet-popup-scrolled";y&&p>y?(o.height=y+"px",Kt(n,A)):Le(n,A),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),c=this._getAnchor();Ce(this._container,o.add(c))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,o=parseInt(we(this._container,"marginBottom"),10)||0,c=this._container.offsetHeight+o,p=this._containerWidth,y=new H(this._containerLeft,-c-this._containerBottom);y._add(un(this._container));var A=n.layerPointToContainerPoint(y),F=G(this.options.autoPanPadding),J=G(this.options.autoPanPaddingTopLeft||F),nt=G(this.options.autoPanPaddingBottomRight||F),ft=n.getSize(),Rt=0,Jt=0;A.x+p+nt.x>ft.x&&(Rt=A.x+p-ft.x+nt.x),A.x-Rt-J.x<0&&(Rt=A.x-J.x),A.y+c+nt.y>ft.y&&(Jt=A.y+c-ft.y+nt.y),A.y-Jt-J.y<0&&(Jt=A.y-J.y),(Rt||Jt)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([Rt,Jt]))}},_getAnchor:function(){return G(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),um=function(n,o){return new So(n,o)};ye.mergeOptions({closePopupOnClick:!0}),ye.include({openPopup:function(n,o,c){return this._initOverlay(So,n,o,c).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),Kn.include({bindPopup:function(n,o){return this._popup=this._initOverlay(So,this._popup,n,o),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof bi||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){as(n);var o=n.layer||n.target;if(this._popup._source===o&&!(o instanceof Zi)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=o,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var wo=fi.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){fi.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){fi.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=fi.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",o=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Wt("div",o),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+l(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var o,c,p=this._map,y=this._container,A=p.latLngToContainerPoint(p.getCenter()),F=p.layerPointToContainerPoint(n),J=this.options.direction,nt=y.offsetWidth,ft=y.offsetHeight,Rt=G(this.options.offset),Jt=this._getAnchor();J==="top"?(o=nt/2,c=ft):J==="bottom"?(o=nt/2,c=0):J==="center"?(o=nt/2,c=ft/2):J==="right"?(o=0,c=ft/2):J==="left"?(o=nt,c=ft/2):F.x<A.x?(J="right",o=0,c=ft/2):(J="left",o=nt+(Rt.x+Jt.x)*2,c=ft/2),n=n.subtract(G(o,c,!0)).add(Rt).add(Jt),Le(y,"leaflet-tooltip-right"),Le(y,"leaflet-tooltip-left"),Le(y,"leaflet-tooltip-top"),Le(y,"leaflet-tooltip-bottom"),Kt(y,"leaflet-tooltip-"+J),Ce(y,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&ue(this._container,n)},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(o)},_getAnchor:function(){return G(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),dm=function(n,o){return new wo(n,o)};ye.include({openTooltip:function(n,o,c){return this._initOverlay(wo,n,o,c).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),Kn.include({bindTooltip:function(n,o){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(wo,this._tooltip,n,o),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var o=n?"off":"on",c={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?c.add=this._openTooltip:(c.mouseover=this._openTooltip,c.mouseout=this.closeTooltip,c.click=this._openTooltip,this._map?this._addFocusListeners():c.add=this._addFocusListeners),this._tooltip.options.sticky&&(c.mousemove=this._moveTooltip),this[o](c),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof bi||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var o=typeof n.getElement=="function"&&n.getElement();o&&(se(o,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),se(o,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var o=typeof n.getElement=="function"&&n.getElement();o&&o.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var o=this;this._map.once("moveend",function(){o._openOnceFlag=!1,o._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var o=n.latlng,c,p;this._tooltip.options.sticky&&n.originalEvent&&(c=this._map.mouseEventToContainerPoint(n.originalEvent),p=this._map.containerPointToLayerPoint(c),o=this._map.layerPointToLatLng(p)),this._tooltip.setLatLng(o)}});var Vu=Us.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var o=n&&n.tagName==="DIV"?n:document.createElement("div"),c=this.options;if(c.html instanceof Element?(_e(o),o.appendChild(c.html)):o.innerHTML=c.html!==!1?c.html:"",c.bgPos){var p=G(c.bgPos);o.style.backgroundPosition=-p.x+"px "+-p.y+"px"}return this._setIconStyles(o,"icon"),o},createShadow:function(){return null}});function fm(n){return new Vu(n)}Us.Default=Nr;var Or=Kn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Ut.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){g(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),he(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Bt(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(hn(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=h(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof H?n:new H(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var o=this.getPane().children,c=-n(-1/0,1/0),p=0,y=o.length,A;p<y;p++)A=o[p].style.zIndex,o[p]!==this._container&&A&&(c=n(c,+A));isFinite(c)&&(this.options.zIndex=c+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Ut.ielt9){ue(this._container,this.options.opacity);var n=+new Date,o=!1,c=!1;for(var p in this._tiles){var y=this._tiles[p];if(!(!y.current||!y.loaded)){var A=Math.min(1,(n-y.loaded)/200);ue(y.el,A),A<1?o=!0:(y.active?c=!0:this._onOpaqueTile(y),y.active=!0)}}c&&!this._noPrune&&this._pruneTiles(),o&&(T(this._fadeFrame),this._fadeFrame=E(this._updateOpacity,this))}},_onOpaqueTile:f,_initContainer:function(){this._container||(this._container=Wt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,o=this.options.maxZoom;if(n!==void 0){for(var c in this._levels)c=Number(c),this._levels[c].el.children.length||c===n?(this._levels[c].el.style.zIndex=o-Math.abs(n-c),this._onUpdateLevel(c)):(he(this._levels[c].el),this._removeTilesAtZoom(c),this._onRemoveLevel(c),delete this._levels[c]);var p=this._levels[n],y=this._map;return p||(p=this._levels[n]={},p.el=Wt("div","leaflet-tile-container leaflet-zoom-animated",this._container),p.el.style.zIndex=o,p.origin=y.project(y.unproject(y.getPixelOrigin()),n).round(),p.zoom=n,this._setZoomTransform(p,y.getCenter(),y.getZoom()),f(p.el.offsetWidth),this._onCreateLevel(p)),this._level=p,p}},_onUpdateLevel:f,_onRemoveLevel:f,_onCreateLevel:f,_pruneTiles:function(){if(this._map){var n,o,c=this._map.getZoom();if(c>this.options.maxZoom||c<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)o=this._tiles[n],o.retain=o.current;for(n in this._tiles)if(o=this._tiles[n],o.current&&!o.active){var p=o.coords;this._retainParent(p.x,p.y,p.z,p.z-5)||this._retainChildren(p.x,p.y,p.z,p.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var o in this._tiles)this._tiles[o].coords.z===n&&this._removeTile(o)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)he(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,o,c,p){var y=Math.floor(n/2),A=Math.floor(o/2),F=c-1,J=new H(+y,+A);J.z=+F;var nt=this._tileCoordsToKey(J),ft=this._tiles[nt];return ft&&ft.active?(ft.retain=!0,!0):(ft&&ft.loaded&&(ft.retain=!0),F>p?this._retainParent(y,A,F,p):!1)},_retainChildren:function(n,o,c,p){for(var y=2*n;y<2*n+2;y++)for(var A=2*o;A<2*o+2;A++){var F=new H(y,A);F.z=c+1;var J=this._tileCoordsToKey(F),nt=this._tiles[J];if(nt&&nt.active){nt.retain=!0;continue}else nt&&nt.loaded&&(nt.retain=!0);c+1<p&&this._retainChildren(y,A,c+1,p)}},_resetView:function(n){var o=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),o,o)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var o=this.options;return o.minNativeZoom!==void 0&&n<o.minNativeZoom?o.minNativeZoom:o.maxNativeZoom!==void 0&&o.maxNativeZoom<n?o.maxNativeZoom:n},_setView:function(n,o,c,p){var y=Math.round(o);this.options.maxZoom!==void 0&&y>this.options.maxZoom||this.options.minZoom!==void 0&&y<this.options.minZoom?y=void 0:y=this._clampZoom(y);var A=this.options.updateWhenZooming&&y!==this._tileZoom;(!p||A)&&(this._tileZoom=y,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),y!==void 0&&this._update(n),c||this._pruneTiles(),this._noPrune=!!c),this._setZoomTransforms(n,o)},_setZoomTransforms:function(n,o){for(var c in this._levels)this._setZoomTransform(this._levels[c],n,o)},_setZoomTransform:function(n,o,c){var p=this._map.getZoomScale(c,n.zoom),y=n.origin.multiplyBy(p).subtract(this._map._getNewPixelOrigin(o,c)).round();Ut.any3d?Xe(n.el,y,p):Ce(n.el,y)},_resetGrid:function(){var n=this._map,o=n.options.crs,c=this._tileSize=this.getTileSize(),p=this._tileZoom,y=this._map.getPixelWorldBounds(this._tileZoom);y&&(this._globalTileRange=this._pxBoundsToTileRange(y)),this._wrapX=o.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,o.wrapLng[0]],p).x/c.x),Math.ceil(n.project([0,o.wrapLng[1]],p).x/c.y)],this._wrapY=o.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([o.wrapLat[0],0],p).y/c.x),Math.ceil(n.project([o.wrapLat[1],0],p).y/c.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var o=this._map,c=o._animatingZoom?Math.max(o._animateToZoom,o.getZoom()):o.getZoom(),p=o.getZoomScale(c,this._tileZoom),y=o.project(n,this._tileZoom).floor(),A=o.getSize().divideBy(p*2);return new lt(y.subtract(A),y.add(A))},_update:function(n){var o=this._map;if(o){var c=this._clampZoom(o.getZoom());if(n===void 0&&(n=o.getCenter()),this._tileZoom!==void 0){var p=this._getTiledPixelBounds(n),y=this._pxBoundsToTileRange(p),A=y.getCenter(),F=[],J=this.options.keepBuffer,nt=new lt(y.getBottomLeft().subtract([J,-J]),y.getTopRight().add([J,-J]));if(!(isFinite(y.min.x)&&isFinite(y.min.y)&&isFinite(y.max.x)&&isFinite(y.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var ft in this._tiles){var Rt=this._tiles[ft].coords;(Rt.z!==this._tileZoom||!nt.contains(new H(Rt.x,Rt.y)))&&(this._tiles[ft].current=!1)}if(Math.abs(c-this._tileZoom)>1){this._setView(n,c);return}for(var Jt=y.min.y;Jt<=y.max.y;Jt++)for(var de=y.min.x;de<=y.max.x;de++){var _n=new H(de,Jt);if(_n.z=this._tileZoom,!!this._isValidTile(_n)){var Qe=this._tiles[this._tileCoordsToKey(_n)];Qe?Qe.current=!0:F.push(_n)}}if(F.sort(function(bn,zs){return bn.distanceTo(A)-zs.distanceTo(A)}),F.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var kn=document.createDocumentFragment();for(de=0;de<F.length;de++)this._addTile(F[de],kn);this._level.el.appendChild(kn)}}}},_isValidTile:function(n){var o=this._map.options.crs;if(!o.infinite){var c=this._globalTileRange;if(!o.wrapLng&&(n.x<c.min.x||n.x>c.max.x)||!o.wrapLat&&(n.y<c.min.y||n.y>c.max.y))return!1}if(!this.options.bounds)return!0;var p=this._tileCoordsToBounds(n);return Mt(this.options.bounds).overlaps(p)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var o=this._map,c=this.getTileSize(),p=n.scaleBy(c),y=p.add(c),A=o.unproject(p,n.z),F=o.unproject(y,n.z);return[A,F]},_tileCoordsToBounds:function(n){var o=this._tileCoordsToNwSe(n),c=new ot(o[0],o[1]);return this.options.noWrap||(c=this._map.wrapLatLngBounds(c)),c},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var o=n.split(":"),c=new H(+o[0],+o[1]);return c.z=+o[2],c},_removeTile:function(n){var o=this._tiles[n];o&&(he(o.el),delete this._tiles[n],this.fire("tileunload",{tile:o.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){Kt(n,"leaflet-tile");var o=this.getTileSize();n.style.width=o.x+"px",n.style.height=o.y+"px",n.onselectstart=f,n.onmousemove=f,Ut.ielt9&&this.options.opacity<1&&ue(n,this.options.opacity)},_addTile:function(n,o){var c=this._getTilePos(n),p=this._tileCoordsToKey(n),y=this.createTile(this._wrapCoords(n),r(this._tileReady,this,n));this._initTile(y),this.createTile.length<2&&E(r(this._tileReady,this,n,null,y)),Ce(y,c),this._tiles[p]={el:y,coords:n,current:!0},o.appendChild(y),this.fire("tileloadstart",{tile:y,coords:n})},_tileReady:function(n,o,c){o&&this.fire("tileerror",{error:o,tile:c,coords:n});var p=this._tileCoordsToKey(n);c=this._tiles[p],c&&(c.loaded=+new Date,this._map._fadeAnimated?(ue(c.el,0),T(this._fadeFrame),this._fadeFrame=E(this._updateOpacity,this)):(c.active=!0,this._pruneTiles()),o||(Kt(c.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:c.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Ut.ielt9||!this._map._fadeAnimated?E(this._pruneTiles,this):setTimeout(r(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var o=new H(this._wrapX?u(n.x,this._wrapX):n.x,this._wrapY?u(n.y,this._wrapY):n.y);return o.z=n.z,o},_pxBoundsToTileRange:function(n){var o=this.getTileSize();return new lt(n.min.unscaleBy(o).floor(),n.max.unscaleBy(o).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function pm(n){return new Or(n)}var Fs=Or.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,o){this._url=n,o=g(this,o),o.detectRetina&&Ut.retina&&o.maxZoom>0?(o.tileSize=Math.floor(o.tileSize/2),o.zoomReverse?(o.zoomOffset--,o.minZoom=Math.min(o.maxZoom,o.minZoom+1)):(o.zoomOffset++,o.maxZoom=Math.max(o.minZoom,o.maxZoom-1)),o.minZoom=Math.max(0,o.minZoom)):o.zoomReverse?o.minZoom=Math.min(o.maxZoom,o.minZoom):o.maxZoom=Math.max(o.minZoom,o.maxZoom),typeof o.subdomains=="string"&&(o.subdomains=o.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,o){return this._url===n&&o===void 0&&(o=!0),this._url=n,o||this.redraw(),this},createTile:function(n,o){var c=document.createElement("img");return se(c,"load",r(this._tileOnLoad,this,o,c)),se(c,"error",r(this._tileOnError,this,o,c)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(c.referrerPolicy=this.options.referrerPolicy),c.alt="",c.src=this.getTileUrl(n),c},getTileUrl:function(n){var o={r:Ut.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var c=this._globalTileRange.max.y-n.y;this.options.tms&&(o.y=c),o["-y"]=c}return x(this._url,e(o,this.options))},_tileOnLoad:function(n,o){Ut.ielt9?setTimeout(r(n,this,null,o),0):n(null,o)},_tileOnError:function(n,o,c){var p=this.options.errorTileUrl;p&&o.getAttribute("src")!==p&&(o.src=p),n(c,o)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,o=this.options.maxZoom,c=this.options.zoomReverse,p=this.options.zoomOffset;return c&&(n=o-n),n+p},_getSubdomain:function(n){var o=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[o]},_abortLoading:function(){var n,o;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(o=this._tiles[n].el,o.onload=f,o.onerror=f,!o.complete)){o.src=S;var c=this._tiles[n].coords;he(o),delete this._tiles[n],this.fire("tileabort",{tile:o,coords:c})}},_removeTile:function(n){var o=this._tiles[n];if(o)return o.el.setAttribute("src",S),Or.prototype._removeTile.call(this,n)},_tileReady:function(n,o,c){if(!(!this._map||c&&c.getAttribute("src")===S))return Or.prototype._tileReady.call(this,n,o,c)}});function Gu(n,o){return new Fs(n,o)}var Wu=Fs.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,o){this._url=n;var c=e({},this.defaultWmsParams);for(var p in o)p in this.options||(c[p]=o[p]);o=g(this,o);var y=o.detectRetina&&Ut.retina?2:1,A=this.getTileSize();c.width=A.x*y,c.height=A.y*y,this.wmsParams=c},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var o=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[o]=this._crs.code,Fs.prototype.onAdd.call(this,n)},getTileUrl:function(n){var o=this._tileCoordsToNwSe(n),c=this._crs,p=rt(c.project(o[0]),c.project(o[1])),y=p.min,A=p.max,F=(this._wmsVersion>=1.3&&this._crs===Uu?[y.y,y.x,A.y,A.x]:[y.x,y.y,A.x,A.y]).join(","),J=Fs.prototype.getTileUrl.call(this,n);return J+M(this.wmsParams,J,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+F},setParams:function(n,o){return e(this.wmsParams,n),o||this.redraw(),this}});function mm(n,o){return new Wu(n,o)}Fs.WMS=Wu,Gu.wms=mm;var Ti=Kn.extend({options:{padding:.1},initialize:function(n){g(this,n),l(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Kt(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,o){var c=this._map.getZoomScale(o,this._zoom),p=this._map.getSize().multiplyBy(.5+this.options.padding),y=this._map.project(this._center,o),A=p.multiplyBy(-c).add(y).subtract(this._map._getNewPixelOrigin(n,o));Ut.any3d?Xe(this._container,A,c):Ce(this._container,A)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,o=this._map.getSize(),c=this._map.containerPointToLayerPoint(o.multiplyBy(-n)).round();this._bounds=new lt(c,c.add(o.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Zu=Ti.extend({options:{tolerance:0},getEvents:function(){var n=Ti.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Ti.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");se(n,"mousemove",this._onMouseMove,this),se(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),se(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){T(this._redrawRequest),delete this._ctx,he(this._container),ke(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var o in this._layers)n=this._layers[o],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Ti.prototype._update.call(this);var n=this._bounds,o=this._container,c=n.getSize(),p=Ut.retina?2:1;Ce(o,n.min),o.width=p*c.x,o.height=p*c.y,o.style.width=c.x+"px",o.style.height=c.y+"px",Ut.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){Ti.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[l(n)]=n;var o=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=o),this._drawLast=o,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var o=n._order,c=o.next,p=o.prev;c?c.prev=p:this._drawLast=p,p?p.next=c:this._drawFirst=c,delete n._order,delete this._layers[l(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var o=n.options.dashArray.split(/[, ]+/),c=[],p,y;for(y=0;y<o.length;y++){if(p=Number(o[y]),isNaN(p))return;c.push(p)}n.options._dashArray=c}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||E(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var o=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new lt,this._redrawBounds.extend(n._pxBounds.min.subtract([o,o])),this._redrawBounds.extend(n._pxBounds.max.add([o,o]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var o=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,o.x,o.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,o=this._redrawBounds;if(this._ctx.save(),o){var c=o.getSize();this._ctx.beginPath(),this._ctx.rect(o.min.x,o.min.y,c.x,c.y),this._ctx.clip()}this._drawing=!0;for(var p=this._drawFirst;p;p=p.next)n=p.layer,(!o||n._pxBounds&&n._pxBounds.intersects(o))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,o){if(this._drawing){var c,p,y,A,F=n._parts,J=F.length,nt=this._ctx;if(J){for(nt.beginPath(),c=0;c<J;c++){for(p=0,y=F[c].length;p<y;p++)A=F[c][p],nt[p?"lineTo":"moveTo"](A.x,A.y);o&&nt.closePath()}this._fillStroke(nt,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var o=n._point,c=this._ctx,p=Math.max(Math.round(n._radius),1),y=(Math.max(Math.round(n._radiusY),1)||p)/p;y!==1&&(c.save(),c.scale(1,y)),c.beginPath(),c.arc(o.x,o.y/y,p,0,Math.PI*2,!1),y!==1&&c.restore(),this._fillStroke(c,n)}},_fillStroke:function(n,o){var c=o.options;c.fill&&(n.globalAlpha=c.fillOpacity,n.fillStyle=c.fillColor||c.color,n.fill(c.fillRule||"evenodd")),c.stroke&&c.weight!==0&&(n.setLineDash&&n.setLineDash(o.options&&o.options._dashArray||[]),n.globalAlpha=c.opacity,n.lineWidth=c.weight,n.strokeStyle=c.color,n.lineCap=c.lineCap,n.lineJoin=c.lineJoin,n.stroke())},_onClick:function(n){for(var o=this._map.mouseEventToLayerPoint(n),c,p,y=this._drawFirst;y;y=y.next)c=y.layer,c.options.interactive&&c._containsPoint(o)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(c))&&(p=c);this._fireEvent(p?[p]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var o=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,o)}},_handleMouseOut:function(n){var o=this._hoveredLayer;o&&(Le(this._container,"leaflet-interactive"),this._fireEvent([o],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,o){if(!this._mouseHoverThrottled){for(var c,p,y=this._drawFirst;y;y=y.next)c=y.layer,c.options.interactive&&c._containsPoint(o)&&(p=c);p!==this._hoveredLayer&&(this._handleMouseOut(n),p&&(Kt(this._container,"leaflet-interactive"),this._fireEvent([p],n,"mouseover"),this._hoveredLayer=p)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(r(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,o,c){this._map._fireDOMEvent(o,c||o.type,n)},_bringToFront:function(n){var o=n._order;if(o){var c=o.next,p=o.prev;if(c)c.prev=p;else return;p?p.next=c:c&&(this._drawFirst=c),o.prev=this._drawLast,this._drawLast.next=o,o.next=null,this._drawLast=o,this._requestRedraw(n)}},_bringToBack:function(n){var o=n._order;if(o){var c=o.next,p=o.prev;if(p)p.next=c;else return;c?c.prev=p:p&&(this._drawLast=p),o.prev=null,o.next=this._drawFirst,this._drawFirst.prev=o,this._drawFirst=o,this._requestRedraw(n)}}});function Xu(n){return Ut.canvas?new Zu(n):null}var Ur=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),gm={_initContainer:function(){this._container=Wt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Ti.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var o=n._container=Ur("shape");Kt(o,"leaflet-vml-shape "+(this.options.className||"")),o.coordsize="1 1",n._path=Ur("path"),o.appendChild(n._path),this._updateStyle(n),this._layers[l(n)]=n},_addPath:function(n){var o=n._container;this._container.appendChild(o),n.options.interactive&&n.addInteractiveTarget(o)},_removePath:function(n){var o=n._container;he(o),n.removeInteractiveTarget(o),delete this._layers[l(n)]},_updateStyle:function(n){var o=n._stroke,c=n._fill,p=n.options,y=n._container;y.stroked=!!p.stroke,y.filled=!!p.fill,p.stroke?(o||(o=n._stroke=Ur("stroke")),y.appendChild(o),o.weight=p.weight+"px",o.color=p.color,o.opacity=p.opacity,p.dashArray?o.dashStyle=v(p.dashArray)?p.dashArray.join(" "):p.dashArray.replace(/( *, *)/g," "):o.dashStyle="",o.endcap=p.lineCap.replace("butt","flat"),o.joinstyle=p.lineJoin):o&&(y.removeChild(o),n._stroke=null),p.fill?(c||(c=n._fill=Ur("fill")),y.appendChild(c),c.color=p.fillColor||p.color,c.opacity=p.fillOpacity):c&&(y.removeChild(c),n._fill=null)},_updateCircle:function(n){var o=n._point.round(),c=Math.round(n._radius),p=Math.round(n._radiusY||c);this._setPath(n,n._empty()?"M0 0":"AL "+o.x+","+o.y+" "+c+","+p+" 0,"+65535*360)},_setPath:function(n,o){n._path.v=o},_bringToFront:function(n){Bt(n._container)},_bringToBack:function(n){hn(n._container)}},To=Ut.vml?Ur:oe,kr=Ti.extend({_initContainer:function(){this._container=To("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=To("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){he(this._container),ke(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Ti.prototype._update.call(this);var n=this._bounds,o=n.getSize(),c=this._container;(!this._svgSize||!this._svgSize.equals(o))&&(this._svgSize=o,c.setAttribute("width",o.x),c.setAttribute("height",o.y)),Ce(c,n.min),c.setAttribute("viewBox",[n.min.x,n.min.y,o.x,o.y].join(" ")),this.fire("update")}},_initPath:function(n){var o=n._path=To("path");n.options.className&&Kt(o,n.options.className),n.options.interactive&&Kt(o,"leaflet-interactive"),this._updateStyle(n),this._layers[l(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){he(n._path),n.removeInteractiveTarget(n._path),delete this._layers[l(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var o=n._path,c=n.options;o&&(c.stroke?(o.setAttribute("stroke",c.color),o.setAttribute("stroke-opacity",c.opacity),o.setAttribute("stroke-width",c.weight),o.setAttribute("stroke-linecap",c.lineCap),o.setAttribute("stroke-linejoin",c.lineJoin),c.dashArray?o.setAttribute("stroke-dasharray",c.dashArray):o.removeAttribute("stroke-dasharray"),c.dashOffset?o.setAttribute("stroke-dashoffset",c.dashOffset):o.removeAttribute("stroke-dashoffset")):o.setAttribute("stroke","none"),c.fill?(o.setAttribute("fill",c.fillColor||c.color),o.setAttribute("fill-opacity",c.fillOpacity),o.setAttribute("fill-rule",c.fillRule||"evenodd")):o.setAttribute("fill","none"))},_updatePoly:function(n,o){this._setPath(n,V(n._parts,o))},_updateCircle:function(n){var o=n._point,c=Math.max(Math.round(n._radius),1),p=Math.max(Math.round(n._radiusY),1)||c,y="a"+c+","+p+" 0 1,0 ",A=n._empty()?"M0 0":"M"+(o.x-c)+","+o.y+y+c*2+",0 "+y+-c*2+",0 ";this._setPath(n,A)},_setPath:function(n,o){n._path.setAttribute("d",o)},_bringToFront:function(n){Bt(n._path)},_bringToBack:function(n){hn(n._path)}});Ut.vml&&kr.include(gm);function qu(n){return Ut.svg||Ut.vml?new kr(n):null}ye.include({getRenderer:function(n){var o=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return o||(o=this._renderer=this._createRenderer()),this.hasLayer(o)||this.addLayer(o),o},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var o=this._paneRenderers[n];return o===void 0&&(o=this._createRenderer({pane:n}),this._paneRenderers[n]=o),o},_createRenderer:function(n){return this.options.preferCanvas&&Xu(n)||qu(n)}});var Yu=ks.extend({initialize:function(n,o){ks.prototype.initialize.call(this,this._boundsToLatLngs(n),o)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=Mt(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function _m(n,o){return new Yu(n,o)}kr.create=To,kr.pointsToPath=V,wi.geometryToLayer=vo,wi.coordsToLatLng=Zl,wi.coordsToLatLngs=xo,wi.latLngToCoords=Xl,wi.latLngsToCoords=yo,wi.getFeature=Bs,wi.asFeature=Mo,ye.mergeOptions({boxZoom:!0});var Ku=di.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){se(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){ke(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){he(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Gi(),Pl(),this._startPoint=this._map.mouseEventToContainerPoint(n),se(document,{contextmenu:as,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=Wt("div","leaflet-zoom-box",this._container),Kt(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var o=new lt(this._point,this._startPoint),c=o.getSize();Ce(this._box,o.min),this._box.style.width=c.x+"px",this._box.style.height=c.y+"px"},_finish:function(){this._moved&&(he(this._box),Le(this._container,"leaflet-crosshair")),Cr(),Cl(),ke(document,{contextmenu:as,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(r(this._resetState,this),0);var o=new ot(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(o).fire("boxzoomend",{boxZoomBounds:o})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});ye.addInitHook("addHandler","boxZoom",Ku),ye.mergeOptions({doubleClickZoom:!0});var $u=di.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var o=this._map,c=o.getZoom(),p=o.options.zoomDelta,y=n.originalEvent.shiftKey?c-p:c+p;o.options.doubleClickZoom==="center"?o.setZoom(y):o.setZoomAround(n.containerPoint,y)}});ye.addInitHook("addHandler","doubleClickZoom",$u),ye.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Ju=di.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new Wi(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}Kt(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Le(this._map._container,"leaflet-grab"),Le(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var o=Mt(this._map.options.maxBounds);this._offsetLimit=rt(this._map.latLngToContainerPoint(o.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(o.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var o=this._lastTime=+new Date,c=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(c),this._times.push(o),this._prunePositions(o)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),o=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=o.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,o){return n-(n-o)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),o=this._offsetLimit;n.x<o.min.x&&(n.x=this._viscousLimit(n.x,o.min.x)),n.y<o.min.y&&(n.y=this._viscousLimit(n.y,o.min.y)),n.x>o.max.x&&(n.x=this._viscousLimit(n.x,o.max.x)),n.y>o.max.y&&(n.y=this._viscousLimit(n.y,o.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,o=Math.round(n/2),c=this._initialWorldOffset,p=this._draggable._newPos.x,y=(p-o+c)%n+o-c,A=(p+o+c)%n-o-c,F=Math.abs(y+c)<Math.abs(A+c)?y:A;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=F},_onDragEnd:function(n){var o=this._map,c=o.options,p=!c.inertia||n.noInertia||this._times.length<2;if(o.fire("dragend",n),p)o.fire("moveend");else{this._prunePositions(+new Date);var y=this._lastPos.subtract(this._positions[0]),A=(this._lastTime-this._times[0])/1e3,F=c.easeLinearity,J=y.multiplyBy(F/A),nt=J.distanceTo([0,0]),ft=Math.min(c.inertiaMaxSpeed,nt),Rt=J.multiplyBy(ft/nt),Jt=ft/(c.inertiaDeceleration*F),de=Rt.multiplyBy(-Jt/2).round();!de.x&&!de.y?o.fire("moveend"):(de=o._limitOffset(de,o.options.maxBounds),E(function(){o.panBy(de,{duration:Jt,easeLinearity:F,noMoveStart:!0,animate:!0})}))}}});ye.addInitHook("addHandler","dragging",Ju),ye.mergeOptions({keyboard:!0,keyboardPanDelta:80});var ju=di.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),se(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),ke(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,o=document.documentElement,c=n.scrollTop||o.scrollTop,p=n.scrollLeft||o.scrollLeft;this._map._container.focus(),window.scrollTo(p,c)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var o=this._panKeys={},c=this.keyCodes,p,y;for(p=0,y=c.left.length;p<y;p++)o[c.left[p]]=[-1*n,0];for(p=0,y=c.right.length;p<y;p++)o[c.right[p]]=[n,0];for(p=0,y=c.down.length;p<y;p++)o[c.down[p]]=[0,n];for(p=0,y=c.up.length;p<y;p++)o[c.up[p]]=[0,-1*n]},_setZoomDelta:function(n){var o=this._zoomKeys={},c=this.keyCodes,p,y;for(p=0,y=c.zoomIn.length;p<y;p++)o[c.zoomIn[p]]=n;for(p=0,y=c.zoomOut.length;p<y;p++)o[c.zoomOut[p]]=-n},_addHooks:function(){se(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){ke(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var o=n.keyCode,c=this._map,p;if(o in this._panKeys){if(!c._panAnim||!c._panAnim._inProgress)if(p=this._panKeys[o],n.shiftKey&&(p=G(p).multiplyBy(3)),c.options.maxBounds&&(p=c._limitOffset(G(p),c.options.maxBounds)),c.options.worldCopyJump){var y=c.wrapLatLng(c.unproject(c.project(c.getCenter()).add(p)));c.panTo(y)}else c.panBy(p)}else if(o in this._zoomKeys)c.setZoom(c.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[o]);else if(o===27&&c._popup&&c._popup.options.closeOnEscapeKey)c.closePopup();else return;as(n)}}});ye.addInitHook("addHandler","keyboard",ju),ye.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Qu=di.extend({addHooks:function(){se(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){ke(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var o=Su(n),c=this._map.options.wheelDebounceTime;this._delta+=o,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var p=Math.max(c-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(r(this._performZoom,this),p),as(n)},_performZoom:function(){var n=this._map,o=n.getZoom(),c=this._map.options.zoomSnap||0;n._stop();var p=this._delta/(this._map.options.wheelPxPerZoomLevel*4),y=4*Math.log(2/(1+Math.exp(-Math.abs(p))))/Math.LN2,A=c?Math.ceil(y/c)*c:y,F=n._limitZoom(o+(this._delta>0?A:-A))-o;this._delta=0,this._startTime=null,F&&(n.options.scrollWheelZoom==="center"?n.setZoom(o+F):n.setZoomAround(this._lastMousePos,o+F))}});ye.addInitHook("addHandler","scrollWheelZoom",Qu);var vm=600;ye.mergeOptions({tapHold:Ut.touchNative&&Ut.safari&&Ut.mobile,tapTolerance:15});var td=di.extend({addHooks:function(){se(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){ke(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var o=n.touches[0];this._startPos=this._newPos=new H(o.clientX,o.clientY),this._holdTimeout=setTimeout(r(function(){this._cancel(),this._isTapValid()&&(se(document,"touchend",rn),se(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",o))},this),vm),se(document,"touchend touchcancel contextmenu",this._cancel,this),se(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){ke(document,"touchend",rn),ke(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),ke(document,"touchend touchcancel contextmenu",this._cancel,this),ke(document,"touchmove",this._onMove,this)},_onMove:function(n){var o=n.touches[0];this._newPos=new H(o.clientX,o.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,o){var c=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:o.screenX,screenY:o.screenY,clientX:o.clientX,clientY:o.clientY});c._simulated=!0,o.target.dispatchEvent(c)}});ye.addInitHook("addHandler","tapHold",td),ye.mergeOptions({touchZoom:Ut.touch,bounceAtZoomLimits:!0});var ed=di.extend({addHooks:function(){Kt(this._map._container,"leaflet-touch-zoom"),se(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Le(this._map._container,"leaflet-touch-zoom"),ke(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var o=this._map;if(!(!n.touches||n.touches.length!==2||o._animatingZoom||this._zooming)){var c=o.mouseEventToContainerPoint(n.touches[0]),p=o.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=o.getSize()._divideBy(2),this._startLatLng=o.containerPointToLatLng(this._centerPoint),o.options.touchZoom!=="center"&&(this._pinchStartLatLng=o.containerPointToLatLng(c.add(p)._divideBy(2))),this._startDist=c.distanceTo(p),this._startZoom=o.getZoom(),this._moved=!1,this._zooming=!0,o._stop(),se(document,"touchmove",this._onTouchMove,this),se(document,"touchend touchcancel",this._onTouchEnd,this),rn(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var o=this._map,c=o.mouseEventToContainerPoint(n.touches[0]),p=o.mouseEventToContainerPoint(n.touches[1]),y=c.distanceTo(p)/this._startDist;if(this._zoom=o.getScaleZoom(y,this._startZoom),!o.options.bounceAtZoomLimits&&(this._zoom<o.getMinZoom()&&y<1||this._zoom>o.getMaxZoom()&&y>1)&&(this._zoom=o._limitZoom(this._zoom)),o.options.touchZoom==="center"){if(this._center=this._startLatLng,y===1)return}else{var A=c._add(p)._divideBy(2)._subtract(this._centerPoint);if(y===1&&A.x===0&&A.y===0)return;this._center=o.unproject(o.project(this._pinchStartLatLng,this._zoom).subtract(A),this._zoom)}this._moved||(o._moveStart(!0,!1),this._moved=!0),T(this._animRequest);var F=r(o._move,o,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=E(F,this,!0),rn(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,T(this._animRequest),ke(document,"touchmove",this._onTouchMove,this),ke(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});ye.addInitHook("addHandler","touchZoom",ed),ye.BoxZoom=Ku,ye.DoubleClickZoom=$u,ye.Drag=Ju,ye.Keyboard=ju,ye.ScrollWheelZoom=Qu,ye.TapHold=td,ye.TouchZoom=ed,s.Bounds=lt,s.Browser=Ut,s.CRS=pt,s.Canvas=Zu,s.Circle=Wl,s.CircleMarker=_o,s.Class=X,s.Control=Yn,s.DivIcon=Vu,s.DivOverlay=fi,s.DomEvent=Up,s.DomUtil=Np,s.Draggable=Wi,s.Evented=it,s.FeatureGroup=bi,s.GeoJSON=wi,s.GridLayer=Or,s.Handler=di,s.Icon=Us,s.ImageOverlay=bo,s.LatLng=yt,s.LatLngBounds=ot,s.Layer=Kn,s.LayerGroup=Os,s.LineUtil=Kp,s.Map=ye,s.Marker=go,s.Mixin=Gp,s.Path=Zi,s.Point=H,s.PolyUtil=Wp,s.Polygon=ks,s.Polyline=Si,s.Popup=So,s.PosAnimation=wu,s.Projection=$p,s.Rectangle=Yu,s.Renderer=Ti,s.SVG=kr,s.SVGOverlay=Hu,s.TileLayer=Fs,s.Tooltip=wo,s.Transformation=xt,s.Util=B,s.VideoOverlay=zu,s.bind=r,s.bounds=rt,s.canvas=Xu,s.circle=sm,s.circleMarker=im,s.control=Ir,s.divIcon=fm,s.extend=e,s.featureGroup=tm,s.geoJSON=Fu,s.geoJson=am,s.gridLayer=pm,s.icon=em,s.imageOverlay=lm,s.latLng=$,s.latLngBounds=Mt,s.layerGroup=Qp,s.map=kp,s.marker=nm,s.point=G,s.polygon=om,s.polyline=rm,s.popup=um,s.rectangle=_m,s.setOptions=g,s.stamp=l,s.svg=qu,s.svgOverlay=hm,s.tileLayer=Gu,s.tooltip=dm,s.transformation=st,s.version=t,s.videoOverlay=cm;var xm=window.L;s.noConflict=function(){return window.L=xm,this},window.L=s}))});var P=(s,t,...e)=>{let i=document.createElement(s);if(t)for(let[r,a]of Object.entries(t))a==null||a===!1||(r==="class"?i.className=a:r==="style"&&typeof a=="object"?Object.assign(i.style,a):r.startsWith("on")?i.addEventListener(r.slice(2),a):r==="html"?i.innerHTML=a:i.setAttribute(r,a===!0?"":a));return e.flat(9).forEach(r=>{r!=null&&r!==!1&&i.append(r.nodeType?r:document.createTextNode(String(r)))}),i},pi=(s,t=document)=>t.querySelector(s),Kl=class{constructor(){this.h={}}on(t,e){(this.h[t]=this.h[t]||[]).push(e)}emit(t,...e){(this.h[t]||[]).forEach(i=>i(...e))}},Oe=new Kl,Q={link:null,tel:null,info:null,par:{},parList:[],events:[],rx:[],connected:!1,demo:!1,lastTel:0,tab:"setup",get(s,t){let e=this.par[s];return e===void 0?t:e}};function ae(s,t="info",e=3500){let i=pi("#toasts");i||(i=P("div",{id:"toasts"}),document.body.append(i));let r=P("div",{class:"toast "+t},s);i.append(r),setTimeout(()=>r.remove(),e)}var wt=(s,t=1)=>s==null||isNaN(s)?"\u2013":(+s).toFixed(t),cs=s=>{s=Math.round(s);let t=Math.floor(s/60);return t>=60?`${Math.floor(t/60)} h ${t%60} min`:`${t} min ${String(s%60).padStart(2,"0")} s`},Sn=(s,t,e)=>Math.min(e,Math.max(t,s)),hs=(s,t="info")=>{Q.events.push({t:new Date,m:s,kind:t}),Q.events.length>300&&Q.events.shift(),Oe.emit("ev")};function Ei(s,t,e="application/json"){let i=P("a",{href:URL.createObjectURL(new Blob([t],{type:e})),download:s});document.body.append(i),i.click(),i.remove()}function Ao(s){return new Promise(t=>{let e=P("input",{type:"file",accept:s,onchange:()=>{let i=e.files[0];if(!i)return t(null);let r=new FileReader;r.onload=()=>t(r.result),r.readAsText(i)}});e.click()})}var An={get(s,t){try{let e=localStorage.getItem("fathom."+s);return e===null?t:JSON.parse(e)}catch{return t}},set(s,t){try{localStorage.setItem("fathom."+s,JSON.stringify(t))}catch{}}};var mi=[{id:"SERVO_RUD_C",k:"servo.rud.center",d:1500,mn:1e3,mx:2e3,u:"us",g:"Servos",h:"Ruder Mitte"},{id:"SERVO_RUD_MIN",k:"servo.rud.min",d:1e3,mn:800,mx:1500,u:"us",g:"Servos",h:"Ruder Endanschlag min"},{id:"SERVO_RUD_MAX",k:"servo.rud.max",d:2e3,mn:1500,mx:2200,u:"us",g:"Servos",h:"Ruder Endanschlag max"},{id:"SERVO_RUD_REV",k:"servo.rud.rev",d:0,mn:0,mx:1,u:"",g:"Servos",h:"Ruder Richtung umkehren"},{id:"SERVO_STN_C",k:"servo.stern.center",d:1500,mn:1e3,mx:2e3,u:"us",g:"Servos",h:"Hecktiefenruder Mitte"},{id:"SERVO_STN_MIN",k:"servo.stern.min",d:1e3,mn:800,mx:1500,u:"us",g:"Servos",h:"Hecktiefenruder min"},{id:"SERVO_STN_MAX",k:"servo.stern.max",d:2e3,mn:1500,mx:2200,u:"us",g:"Servos",h:"Hecktiefenruder max"},{id:"SERVO_STN_REV",k:"servo.stern.rev",d:0,mn:0,mx:1,u:"",g:"Servos",h:"Hecktiefenruder umkehren"},{id:"SERVO_BOW_C",k:"servo.bow.center",d:1500,mn:1e3,mx:2e3,u:"us",g:"Servos",h:"Bugtiefenruder Mitte"},{id:"SERVO_BOW_MIN",k:"servo.bow.min",d:1e3,mn:800,mx:1500,u:"us",g:"Servos",h:"Bugtiefenruder min"},{id:"SERVO_BOW_MAX",k:"servo.bow.max",d:2e3,mn:1500,mx:2200,u:"us",g:"Servos",h:"Bugtiefenruder max"},{id:"SERVO_BOW_REV",k:"servo.bow.rev",d:0,mn:0,mx:1,u:"",g:"Servos",h:"Bugtiefenruder umkehren"},{id:"SERVO_US_DEG",k:"servo.us_per_deg",d:10,mn:2,mx:30,u:"us/deg",g:"Servos",h:"Servoweg pro Grad Ruderausschlag"},{id:"LIM_DEFLECT",k:"lim.deflect",d:25,mn:5,mx:45,u:"deg",g:"Limiten",h:"maximaler Ruderausschlag"},{id:"LIM_PITCH",k:"lim.pitch",d:20,mn:5,mx:45,u:"deg",g:"Limiten",h:"maximaler Nickwinkel (Tiefenregelung)"},{id:"LIM_THR",k:"lim.throttle",d:35,mn:5,mx:100,u:"%",g:"Limiten",h:"maximaler Vortrieb (Software Limit)"},{id:"LIM_DEPTH",k:"lim.depth",d:3,mn:.5,mx:90,u:"m",g:"Limiten",h:"Tauchtiefe Limit, darueber Failsafe"},{id:"THR_SLEW",k:"thr.slew",d:150,mn:10,mx:1e3,u:"%/s",g:"Limiten",h:"Gasrampe (Beschleunigung begrenzen)"},{id:"ESC_DEAD",k:"esc.deadband",d:25,mn:0,mx:100,u:"us",g:"Limiten",h:"ESC Totzone um 1500 us (nur bei esc.reverse 1)"},{id:"ESC_REV",k:"esc.reverse",d:0,mn:0,mx:1,u:"",g:"Limiten",h:"0 = ESC nur vorwaerts (Stop 1000 us), 1 = ESC mit Rueckwaertslauf (Stop 1500 us)"},{id:"PUMP_INV",k:"pump.invert",d:0,mn:0,mx:1,u:"",g:"Ballast",h:"1 = Pumpenrichtung tauschen (statt Schlaeuche umzustecken)"},{id:"PID_P_KP",k:"pid.pitch.kp",d:1.6,mn:0,mx:10,u:"",g:"Regler",h:"Nick P (deg Ruder je deg Fehler)"},{id:"PID_P_KI",k:"pid.pitch.ki",d:.15,mn:0,mx:5,u:"",g:"Regler",h:"Nick I"},{id:"PID_P_KD",k:"pid.pitch.kd",d:.35,mn:0,mx:5,u:"",g:"Regler",h:"Nick D (ueber Gyro)"},{id:"PID_D_KP",k:"pid.depth.kp",d:18,mn:0,mx:80,u:"deg/m",g:"Regler",h:"Tiefe P (Nickwinkel je m Fehler)"},{id:"PID_D_KI",k:"pid.depth.ki",d:1.2,mn:0,mx:20,u:"",g:"Regler",h:"Tiefe I"},{id:"PID_D_KD",k:"pid.depth.kd",d:25,mn:0,mx:100,u:"deg/m/s",g:"Regler",h:"Tiefe D (Daempfung ueber Sinkrate)"},{id:"PID_H_KP",k:"pid.head.kp",d:.6,mn:0,mx:5,u:"",g:"Regler",h:"Kurs P (deg Ruder je deg Fehler)"},{id:"PID_H_KI",k:"pid.head.ki",d:.02,mn:0,mx:2,u:"",g:"Regler",h:"Kurs I"},{id:"PID_H_KD",k:"pid.head.kd",d:.25,mn:0,mx:3,u:"",g:"Regler",h:"Kurs D (Gyro)"},{id:"MIX_BOW",k:"mix.bow",d:.5,mn:-1.5,mx:1.5,u:"",g:"Regler",h:"Anteil Bugtiefenruder am Nickbefehl"},{id:"BAL_FLOW",k:"bal.flow",d:4,mn:.5,mx:30,u:"%/s",g:"Ballast",h:"Fuellstand Aenderung bei 100 % Pumpe"},{id:"BAL_KP",k:"bal.depth_kp",d:60,mn:0,mx:300,u:"%/m",g:"Ballast",h:"Pumpe je m Tiefenfehler bei Stillstand"},{id:"BAL_SLOW",k:"bal.slow_thr",d:6,mn:0,mx:30,u:"%",g:"Ballast",h:"unter diesem Gas regelt die Pumpe die Tiefe"},{id:"SPD_MS",k:"spd.ms_per_pct",d:.014,mn:.002,mx:.05,u:"m/s",g:"Fahrt",h:"Geschwindigkeit je % Gas (Vorschau, Kurven)"},{id:"FLUID_RHO",k:"fluid.density",d:998,mn:990,mx:1030,u:"kg/m3",g:"Umgebung",h:"Wasserdichte (See 998, Salz 1025)"},{id:"P_ATM",k:"fluid.p_surface",d:1013,mn:850,mx:1100,u:"mbar",g:"Umgebung",h:"Oberflaechendruck (CAL DEPTH setzt ihn)"},{id:"VB_SCALE",k:"bat.scale",d:1,mn:.5,mx:2,u:"",g:"Batterie",h:"Spannungs Faktor (CAL VBAT)"},{id:"VB_WARN",k:"bat.warn",d:7,mn:5,mx:9,u:"V",g:"Batterie",h:"Warnschwelle 2S"},{id:"VB_CRIT",k:"bat.crit",d:6.4,mn:5,mx:9,u:"V",g:"Batterie",h:"kritisch, Failsafe"},{id:"LEAK_THR",k:"leak.threshold",d:.35,mn:.05,mx:.95,u:"",g:"Leckage",h:"Leckage klein: Notaufstieg, an der Oberflaeche ausschalten"},{id:"LEAK_HI",k:"leak.major",d:.7,mn:.1,mx:.99,u:"",g:"Leckage",h:"Leckage gross: Not Aus (Schwelle muss ueber leak.threshold liegen)"},{id:"LEAK_ACT",k:"leak.major_action",d:0,mn:0,mx:1,u:"",g:"Leckage",h:"grosse Leckage: 0 = Not Aus (alles stromlos, Beacon an), 1 = trotzdem Notaufstieg"},{id:"BEACON_MODE",k:"beacon.mode",d:1,mn:0,mx:3,u:"",g:"Beacon",h:"0 nur Mission und Befehl, 1 bei Fehler, 2 bei Fehler und an der Oberflaeche nach Mission, 3 immer wenn scharf"},{id:"MIS_RTH",k:"mis.end_rth",d:0,mn:0,mx:1,u:"",g:"RTH",h:"nach Missionsende automatisch Heimfahrt (mit Home und GPS)"},{id:"RC_ARM",k:"rc.ch.arm",d:5,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Arm (hoch = scharf)"},{id:"RC_MODE",k:"rc.ch.mode",d:6,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Modus (3 Stufen)"},{id:"RC_MIS",k:"rc.ch.mission",d:7,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Mission Start (hoch)"},{id:"RC_THR",k:"rc.ch.thr",d:3,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Vortrieb (Mitte = Stop)"},{id:"RC_RUD",k:"rc.ch.rud",d:4,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Seitenruder"},{id:"RC_ELE",k:"rc.ch.ele",d:2,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Tiefenruder"},{id:"RC_BOW",k:"rc.ch.bow",d:1,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Bugruder (nur Manuell)"},{id:"FS_TIMEOUT",k:"fs.rc_timeout",d:1,mn:.2,mx:10,u:"s",g:"Failsafe",h:"RC Verlust bis Failsafe"},{id:"FS_PITCH",k:"fs.pitch",d:10,mn:0,mx:30,u:"deg",g:"Failsafe",h:"Nick nach oben beim Auftauchen"},{id:"FS_THR",k:"fs.throttle",d:15,mn:0,mx:50,u:"%",g:"Failsafe",h:"Vortrieb beim Auftauchen"},{id:"FS_ACT",k:"fs.rc_action",d:0,mn:0,mx:1,u:"",g:"Failsafe",h:"RC Verlust: 0 = Auftauchen, 1 = RTH (nur mit Home und GPS)"},{id:"MIS_RC",k:"mis.needs_rc",d:0,mn:0,mx:1,u:"",g:"Failsafe",h:"Mission nur mit RC Verbindung"},{id:"MIS_TOL",k:"mis.depth_tol",d:.15,mn:.03,mx:1,u:"m",g:"Failsafe",h:"Tiefen Toleranz fuer Schritt Ende"},{id:"RC_RTH",k:"rc.ch.rth",d:8,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal RTH (hoch = Heimkehr)"},{id:"GPS_SATS",k:"gps.min_sats",d:5,mn:3,mx:12,u:"",g:"GPS",h:"Mindestzahl Satelliten fuer gueltigen Fix"},{id:"GPS_HDOP",k:"gps.max_hdop",d:3,mn:.8,mx:20,u:"",g:"GPS",h:"maximaler HDOP fuer gueltigen Fix"},{id:"RTH_THR",k:"rth.throttle",d:20,mn:5,mx:100,u:"%",g:"RTH",h:"Vortrieb beim Heimfahren an der Oberflaeche"},{id:"RTH_RAD",k:"rth.radius",d:3,mn:1,mx:50,u:"m",g:"RTH",h:"Ankunftsradius um Home"},{id:"BB_EN",k:"bb.enable",d:1,mn:0,mx:1,u:"",g:"Blackbox",h:"Blackbox aufzeichnen (nur im ARM Zustand)"},{id:"BB_HZ",k:"bb.hz",d:10,mn:1,mx:20,u:"Hz",g:"Blackbox",h:"Aufzeichnungsrate"},{id:"IMU_MODE",k:"imu.mode",d:1,mn:0,mx:1,u:"",g:"IMU",h:"0 IMU (ohne Kompass), 1 NDOF (mit Kompass, Standard)"},{id:"IMU_PITCH0",k:"imu.pitch_off",d:0,mn:-30,mx:30,u:"deg",g:"IMU",h:"Nick Offset (CAL LEVEL)"},{id:"IMU_ROLL0",k:"imu.roll_off",d:0,mn:-30,mx:30,u:"deg",g:"IMU",h:"Roll Offset (CAL LEVEL)"},{id:"IMU_YAW0",k:"imu.yaw_off",d:0,mn:-180,mx:180,u:"deg",g:"IMU",h:"Kurs Offset (Deklination)"},{id:"IMU_INV",k:"imu.invert",d:0,mn:0,mx:7,u:"",g:"IMU",h:"Vorzeichen umkehren: 1 Roll, 2 Nick, 4 Kurs (Nase hoch muss Nick + geben)"},{id:"IMU_MAP",k:"imu.axis_map",d:36,mn:0,mx:63,u:"",g:"IMU",h:"BNO055 AXIS_MAP_CONFIG (36 = Standard)"},{id:"IMU_SIGN",k:"imu.axis_sign",d:0,mn:0,mx:7,u:"",g:"IMU",h:"BNO055 AXIS_MAP_SIGN (Bit0 x, Bit1 y, Bit2 z)"}];var Pn={WAIT:{label:"Warten",color:"#7f8ea3",f:[["Dauer","s",10,0,3600,1]]},DIVE:{label:"Tauchen",color:"#2f7fd0",f:[["Zieltiefe","m",1.5,0,90,.1],["Max Sinkrate","m/s",.15,.02,1,.01],["Max Nick","deg",15,3,45,1],["Fahrt","%",25,0,100,1]]},CRUISE:{label:"Geradeaus",color:"#35a7a0",f:[["Fahrt","%",30,0,100,1],["Kurs (-1 halten)","deg",-1,-1,359,1],["Dauer","s",30,1,7200,1]]},TURN:{label:"Drehen",color:"#d9a441",f:[["Kurs","deg",90,-360,360,1],["0 absolut, 1 relativ","",0,0,1,1],["Max Gierrate","deg/s",15,2,60,1],["Fahrt","%",15,0,100,1]]},CURVE:{label:"Kurve",color:"#c9783a",f:[["Kurs\xE4nderung (+ rechts)","deg",90,-720,720,1],["Radius","m",1.5,.2,50,.1],["Fahrt","%",25,3,100,1]]},BALLAST:{label:"Ballast",color:"#8a6fd0",f:[["F\xFCllstand","%",50,0,100,1]]},PLANES:{label:"Ruder fix",color:"#b4568a",f:[["Bug","deg",0,-45,45,1],["Heck","deg",10,-45,45,1],["Dauer","s",10,.5,600,.5],["Fahrt","%",25,0,100,1]]},SURFACE:{label:"Auftauchen",color:"#5fb36a",f:[]},BEACON:{label:"Beacon",color:"#e0584f",f:[["Modus (0 aus, 2 weiss, 3 rot, 4 Alarm)","",2,0,4,1]]},REPEAT:{label:"Wiederholen",color:"#9aa7b8",f:[["Anzahl","x",2,1,50,1],["ab Schritt (0 = erster)","",0,0,63,1]]}},Jl=["WAIT","DIVE","CRUISE","TURN","CURVE","BALLAST","PLANES","SURFACE","BEACON","REPEAT"],Ro=64,Lo=s=>({t:s,v:Pn[s].f.map(t=>t[2]).concat([0,0,0,0]).slice(0,4)}),Co=s=>(s%360+360)%360,$l=s=>(s=Co(s),s>180?s-360:s),Ai=(s,t,e)=>Math.min(e,Math.max(t,s)),Um=180/Math.PI,Po=Math.PI/180;function Io(s){let t=(e,i)=>{let r=s?s(e):void 0;return r===void 0||isNaN(r)?i:r};return{ms:t("spd.ms_per_pct",.014),thrMax:t("lim.throttle",35),pitchMax:t("lim.pitch",20),depthMax:t("lim.depth",3),flow:t("bal.flow",4),fsThr:t("fs.throttle",15),fsPitch:t("fs.pitch",10),tol:t("mis.depth_tol",.15)}}function Do(s,t){let e=[];return s.length>Ro&&e.push({i:-1,m:`Maximal ${Ro} Schritte, Boot speichert nur diese.`}),s.forEach((i,r)=>{let a=i.v;if(i.t==="DIVE"&&(a[0]>t.depthMax&&e.push({i:r,m:`Tiefe ${a[0]} m \xFCber Limit ${t.depthMax} m (Failsafe l\xF6st aus).`}),a[2]>t.pitchMax&&e.push({i:r,m:`Nick ${a[2]}\xB0 wird auf ${t.pitchMax}\xB0 begrenzt.`})),["DIVE","CRUISE","TURN","CURVE","PLANES"].includes(i.t)){let l=i.t==="CRUISE"?a[0]:i.t==="CURVE"?a[2]:a[3];l>t.thrMax&&e.push({i:r,m:`Fahrt ${l} % wird auf Limit ${t.thrMax} % begrenzt.`})}i.t==="REPEAT"&&a[1]>=r&&e.push({i:r,m:"R\xFCcksprung muss vor diesem Schritt liegen."}),i.t==="CURVE"&&a[1]<.5&&e.push({i:r,m:"Radius unter 0.5 m ist mit Ruder allein bei 67 cm L\xE4nge nicht erreichbar."})}),s.length&&s[s.length-1].t!=="SURFACE"&&e.push({i:s.length-1,m:"Mission endet ohne Auftauchen: Boot h\xE4lt danach die letzte Tiefe (Modus DEPTH)."}),e}function No(s,t,e={}){let r=[],a=[],l={t:0,x:0,y:0,z:0,h:e.h0||0,p:0,v:0,f:0,thr:0},h=k=>{r.push({...l,i:k})},u=0,f=0,m=0,d={};h(-1);let _=4*3600,g=(k,C,D,O,E)=>{let T=0;for(;!k(T)&&T<D&&m<_;)C(T),T+=.1,m+=.1,l.t=m,Math.round(T/.1)%5===0&&h(O);T>=D&&a.push({i:O,m:`${E}: Ziel in ${Math.round(D)} s nicht erreicht (Vorschau).`}),h(O)},M=(k,C,D)=>{let O=Ai(k,0,t.thrMax)*t.ms;l.v=O,l.thr=Ai(k,0,t.thrMax),l.h=Co(l.h+C*.1),l.p+=(D-l.p)*Math.min(1,.1/1.5);let E=O*Math.cos(l.p*Po),T=-O*Math.sin(l.p*Po);l.x+=E*Math.sin(l.h*Po)*.1,l.y+=E*Math.cos(l.h*Po)*.1,l.z=Math.max(0,l.z+T*.1)};for(;u<s.length&&f++<5e3&&m<_;){let k=s[u],C=k.v;switch(k.t){case"WAIT":g(D=>D>=C[0],()=>M(0,0,0),C[0]+1,u,"Warten");break;case"DIVE":{let D=C[0],O=C[1]>0?C[1]:.2,E=Math.max(C[3],0),T=Math.min(C[2]>0?C[2]:t.pitchMax,t.pitchMax),B=l.z,X=D>l.z?1:-1;g(()=>Math.abs(l.z-D)<t.tol*.5&&Math.abs(B-D)<1e-6,()=>{B+=X*O*.1,(X>0&&B>D||X<0&&B<D)&&(B=D);let W=(B-l.z)*18,K=Ai(-W,-T,T);M(E,0,K),E<1&&(l.z=Ai(l.z+Ai((B-l.z)*.8,-O,O)*.1,0,90),l.p=0)},Math.abs(D-l.z)/O*3+40,u,"Tauchen"),l.z=D;break}case"CRUISE":{let D=C[1]>=0?C[1]:l.h;g(O=>O>=C[2],()=>{let O=$l(D-l.h);M(C[0],Ai(O*2,-20,20),0)},C[2]+1,u,"Geradeaus");break}case"TURN":{let D=C[1]>.5?Co(l.h+C[0]):Co(C[0]),O=C[2]>0?C[2]:20;g(()=>Math.abs($l(D-l.h))<1,()=>{let E=$l(D-l.h);M(C[3],Ai(E*3,-O,O),0)},90+360/O,u,"Drehen");break}case"CURVE":{let D=Math.max(C[2],1)*t.ms,O=D/Math.max(C[1],.05)*Um,E=0,T=Math.abs(C[0]);g(()=>E>=T,()=>{let B=Math.min(O*.1,T-E);E+=B,M(Math.max(C[2],1),(C[0]>=0?1:-1)*B/.1,0)},T/Math.max(O,1)*3+40,u,"Kurve");break}case"BALLAST":{let D=Ai(C[0],0,100);g(()=>Math.abs(l.f-D)<.5,()=>{l.f+=Math.sign(D-l.f)*Math.min(t.flow*.1,Math.abs(D-l.f)),M(0,0,0)},240,u,"Ballast");break}case"PLANES":{let D=Ai((C[1]+.5*C[0])*.8,-t.pitchMax,t.pitchMax);g(O=>O>=C[2],()=>M(C[3],0,D),C[2]+1,u,"Ruder fix");break}case"SURFACE":{g(()=>l.z<=.12,()=>{l.f=Math.max(0,l.f-t.flow*.1),M(t.fsThr,0,t.fsPitch),l.z=Math.max(0,l.z-.2*.1*0)},600,u,"Auftauchen"),l.z=0,l.p=0,l.v=0,l.thr=0,h(u),u=s.length;continue}case"REPEAT":{let D=u;if(d[D]=(d[D]||0)+1,d[D]<=C[0]&&C[1]<u){u=Math.max(0,Math.round(C[1]));continue}break}}u++}let b=r,x=0,v=0,R=0,S={x0:0,x1:0,y0:0,y1:0,z1:0};for(let k=1;k<b.length;k++){let C=b[k-1],D=b[k];x+=Math.hypot(D.x-C.x,D.y-C.y,D.z-C.z);let O=D.t-C.t,E=(D.thr||0)/100;R+=O*(e.pBase??1.5+(e.pMax??25)*E*E*E),D.thr>1&&(v+=O)}b.forEach(k=>{S.x0=Math.min(S.x0,k.x),S.x1=Math.max(S.x1,k.x),S.y0=Math.min(S.y0,k.y),S.y1=Math.max(S.y1,k.y),S.z1=Math.max(S.z1,k.z)});let w=b[b.length-1]||l;return{pts:b,notes:a,stats:{dur:w.t,dist:x,maxDepth:S.z1,bb:S,wh:R/3600,cruiseT:v,avgV:w.t>0?x/w.t:0,endDist:Math.hypot(w.x,w.y),final:{x:w.x,y:w.y,z:w.z},w:S.x1-S.x0,l:S.y1-S.y0}}}var jl={"Pool Funktionstest":[["WAIT",5],["BALLAST",20],["DIVE",1,.1,12,15],["CRUISE",20,-1,30],["TURN",90,1,12,12],["CRUISE",20,-1,20],["SURFACE"]],"Rechteck Kurs 3 m":[["DIVE",1.5,.15,12,20],["CRUISE",25,0,20],["TURN",90,1,15,15],["REPEAT",3,1],["SURFACE"]].map((s,t)=>s),"Yo Yo 0.5 bis 2 m":[["DIVE",.5,.15,15,20],["DIVE",2,.15,15,25],["DIVE",.5,.15,15,25],["REPEAT",3,1],["SURFACE"]],"Kreis Radius 1.5 m":[["DIVE",1,.15,15,20],["CURVE",360,1.5,25],["CURVE",-360,1.5,25],["SURFACE"]],"See Tauchgang 20 m":[["WAIT",10],["DIVE",20,.2,18,30],["CRUISE",30,0,120],["TURN",180,1,12,15],["CRUISE",30,-1,120],["SURFACE"]]};function Ql(s){return jl[s].map(t=>{let e=Lo(t[0]);return t.slice(1).forEach((i,r)=>{e.v[r]=i}),e})}var od=s=>s.map(t=>`MIS ADD ${t.t} ${t.v.map(e=>+e.toFixed(3)).join(" ")}`);function Oo(s){return s.map(t=>({t:t[0],v:[t[1],t[2],t[3],t[4]]})).filter(t=>Pn[t.t])}function Hs(){if(Hs.c)return Hs.c;let s=10,t=2400,e=36,i=new Uint8Array(16+t*e),r=new DataView(i.buffer);i.set([70,66,66,49],0),r.setUint16(4,e,!0),r.setUint16(6,s,!0),r.setUint32(8,100,!0);let a=47.05,l=8.3,h=90,u=0,f={lat:a,lon:l};for(let m=0;m<t;m++){let d=m/s,_=0,g=2,M=0,b=0;d<15?g=0:d<45?(g=2,M=2.5,_=Math.min(2.5,(d-15)*.12)):d<160?(g=3,M=2.5,_=2.5+.05*Math.sin(d/4),b=25,h=90+80*Math.sin((d-45)/18)):d<190?(g=3,M=0,_=Math.max(0,2.5-(d-160)*.09),b=20):(g=5,b=d<215?20:0),u=_>.5?Math.min(60,u+.2):Math.max(0,u-.2);let x=16+m*e;r.setUint32(x,Math.round(d*1e3),!0),r.setInt16(x+4,Math.round(_*100),!0),r.setInt16(x+6,Math.round(M*100),!0),r.setInt16(x+8,Math.round(Math.sin(d/3)*20),!0),r.setInt16(x+10,Math.round((M>_?40:-40*(_>.2?1:0))+Math.sin(d)*10),!0),r.setUint16(x+12,Math.round((h%360+360)%360*10),!0),r.setUint16(x+14,Math.round((8.3-d*.0016)*100),!0),r.setUint8(x+16,8),r.setUint8(x+17,g);let v=_<.2&&d>2?4:0;r.setUint8(x+18,3|v|8|16|(g===3?32:0)),r.setUint8(x+19,Math.round(u)),r.setInt8(x+20,b),r.setInt8(x+21,Math.round((u-_*20)/10)),r.setInt8(x+22,Math.round(Math.sin(d/2)*12)),r.setInt8(x+23,Math.round((M-_)*8)),r.setInt8(x+24,Math.round((M-_)*4));let R=b/100*.5;l+=Math.sin(h*Math.PI/180)*R*.1/75900,a+=Math.cos(h*Math.PI/180)*R*.1/111200,v&&(f={lat:a,lon:l}),r.setInt32(x+25,Math.round(f.lat*1e7),!0),r.setInt32(x+29,Math.round(f.lon*1e7),!0),r.setUint8(x+33,v?9:0),r.setInt8(x+34,-60)}return Hs.c=i}var tc=class{constructor(){this.h={}}on(t,e){return(this.h[t]=this.h[t]||[]).push(e),()=>{this.h[t]=this.h[t].filter(i=>i!==e)}}emit(t,...e){(this.h[t]||[]).forEach(i=>{try{i(...e)}catch(r){console.error(r)}})}};function ad(s){let t=4294967295;for(let e=0;e<s.length;e++){t^=s[e];for(let i=0;i<8;i++)t=t>>>1^3988292384&-(t&1)}return~t>>>0}var Br=class extends tc{constructor(){super(),this.q=[],this.cur=null,this.buf="",this.connected=!1,this.demo=!1}_feed(t){this.buf+=t;let e;for(;(e=this.buf.indexOf(`
`))>=0;){let i=this.buf.slice(0,e).replace(/\r$/,"");this.buf=this.buf.slice(e+1),i&&this._line(i)}this.buf.length>2e4&&(this.buf="")}_line(t){if(this.emit("rx",t),t.startsWith("T {")){try{this.emit("tel",JSON.parse(t.slice(2)))}catch{}return}if(t.startsWith("EV ")){this.emit("ev",t.slice(3));return}if(this.cur&&this.cur.dump){let e=this.cur;if(t.startsWith("BBD ")){let i=/^BBD (\d+) ([0-9a-f]*)$/.exec(t);if(!i)return;let r=+i[1],a=i[2];for(let l=0;l<a.length;l+=2)e.bytes.push(parseInt(a.substr(l,2),16));e.bytes.length!==r+a.length/2&&(e.bad=!0),clearTimeout(e.to),e.to=setTimeout(()=>{this.cur===e&&(this.cur=null,e.res({ok:!1,text:"ERR Zeit\xFCberschreitung beim Download"}),this._next())},4e3),e.prog&&e.prog(e.bytes.length);return}if(t.startsWith("BBE ")){let i=/^BBE (\d+) ([0-9a-f]+)$/.exec(t);this.cur=null,clearTimeout(e.to);let r=Uint8Array.from(e.bytes),a=i&&+i[1]===r.length&&!e.bad&&ad(r)===parseInt(i[2],16)>>>0;e.res({ok:!!a,text:a?"OK":"ERR Pr\xFCfsumme oder L\xE4nge falsch (Funk gest\xF6rt?)",bytes:r}),this._next();return}}if(/^(OK|ERR|PAR|INFO|MIS|BB|HOME)\b/.test(t)&&this.cur){let e=this.cur;this.cur=null,clearTimeout(e.to);let i=t;if(/^(PAR|INFO|MIS|BB|HOME)\s/.test(t))try{i=JSON.parse(t.slice(t.indexOf(" ")+1))}catch{e.res({ok:!1,text:"JSON Fehler"}),this._next();return}e.res({ok:!t.startsWith("ERR"),text:t,data:i}),this._next();return}t.startsWith("ERR")&&this.emit("ev",t)}cmd(t,e=2500){return new Promise(i=>{this.q.push({text:t,res:i,timeout:e}),this.cur||this._next()})}_next(){if(this.cur||!this.q.length)return;let t=this.q.shift();this.cur=t,t.to=setTimeout(()=>{this.cur===t&&(this.cur=null,t.res({ok:!1,text:"ERR Zeit\xFCberschreitung",timeout:!0}),this._next())},t.timeout),this.emit("tx",t.text),this._write(t.text+`
`)}dump(t,e){return new Promise(i=>{this.q.push({text:"BB DUMP "+t,res:i,timeout:6e3,dump:!0,bytes:[],prog:e}),this.cur||this._next()})}fire(t){this.emit("tx",t),this._write(t+`
`)}},Fr=class extends Br{static supported(){return"serial"in navigator}async connect(t){this.port=t||await navigator.serial.requestPort({filters:[{usbVendorId:11914},{usbVendorId:9114},{usbVendorId:12346}]}).catch(()=>navigator.serial.requestPort()),await this.port.open({baudRate:115200}),this.writer=this.port.writable.getWriter(),this.connected=!0,this.keep=!0,this._loop()}async _loop(){let t=new TextDecoder;try{for(;this.keep&&this.port.readable;){this.reader=this.port.readable.getReader();try{for(;;){let{value:e,done:i}=await this.reader.read();if(i)break;e&&this._feed(t.decode(e,{stream:!0}))}}finally{this.reader.releaseLock()}}}catch(e){this.emit("error",e)}this._closed()}_closed(){this.connected&&(this.connected=!1,this.emit("close"))}async _write(t){try{await this.writer.write(new TextEncoder().encode(t))}catch(e){this.emit("error",e)}}async disconnect(){this.keep=!1;try{await this.reader?.cancel()}catch{}try{this.writer?.releaseLock()}catch{}try{await this.port?.close()}catch{}this._closed()}},Uo=class extends Br{constructor(t){super(),this.host=t||location.hostname||"192.168.4.1",this.wifi=!0}connect(){return new Promise((t,e)=>{let i=!1,r=this.ws=new WebSocket(`ws://${this.host}:81/`),a=setTimeout(()=>{if(!i){i=!0;try{r.close()}catch{}e(new Error("keine Antwort von "+this.host))}},5e3);r.onopen=()=>{i||(i=!0,clearTimeout(a),this.connected=!0,t())},r.onmessage=l=>this._feed(String(l.data)+`
`),r.onerror=()=>{i||(i=!0,clearTimeout(a),e(new Error("WebSocket Fehler (https Seite? WLAN verbunden?)")))},r.onclose=()=>{this.connected&&(this.connected=!1,this.emit("close"))}})}_write(t){try{this.ws&&this.ws.readyState===1&&this.ws.send(t.replace(/\n$/,""))}catch(e){this.emit("error",e)}}async disconnect(){this.noretry=!0;try{this.ws&&this.ws.close()}catch{}this.connected&&(this.connected=!1,this.emit("close"))}},ko=class extends Br{constructor(){super(),this.demo=!0,this.par={},mi.forEach(t=>{this.par[t.k]=t.d}),this.steps=[],this.hz=0,this.armed=0,this.mode="MANUAL",this.tst=0,this.tServo=[1500,1500,1500],this.tThr=0,this.tPump=0,this.tWd=0,this.fill=0,this.depth=0,this.t0=performance.now(),this.mis=null,this.leak=.03,this.home=null,this.gx=0,this.gy=0,this.att=[0,0,0],this.vb=8.1,this.fs="",this.calst=[0,1,2,1]}async connect(){this.connected=!0,this.timer=setInterval(()=>this._tick(),50),setTimeout(()=>this.emit("ev","DEMO Boot verbunden (simuliert)"),50)}async disconnect(){clearInterval(this.timer),this.connected=!1,this.emit("close")}_reply(t){setTimeout(()=>this._feed(t+`
`),12)}_write(t){let e=t.trim().split(/\s+/),i=(e[0]||"").toUpperCase(),r=a=>this._reply(a);if(i==="PING")r("OK PONG");else if(i==="INFO")r("INFO "+JSON.stringify({fw:"FATHOM",ver:"0.5.0 DEMO",hw:"Simulation",params:mi.length,maxsteps:64}));else if(i==="STREAM")this.hz=Math.max(0,Math.min(50,+e[1]||0)),r("OK");else if(i==="GET")r("PAR "+JSON.stringify(mi.map(a=>({k:a.k,v:this.par[a.k],d:a.d,mn:a.mn,mx:a.mx,u:a.u,g:a.g,h:a.h}))));else if(i==="SET"){let a=mi.find(l=>l.k===e[1]);a?(this.par[a.k]=Math.min(a.mx,Math.max(a.mn,+e[2])),r("OK")):r("ERR unbekannt")}else if(i==="BEACON"){let a=+e[1];a>=0&&a<=4?(this.bc=a,r("OK")):r("ERR BEACON 0 bis 4")}else if(i==="SAVE"||i==="LOAD")r("OK");else if(i==="DEFAULTS")mi.forEach(a=>{this.par[a.k]=a.d}),r("OK");else if(i==="ARM")this.tst?r("ERR Testmodus"):(this.armed=1,this.home={lat:47.05+this.gy/111200,lon:8.3+this.gx/75900},r("OK"));else if(i==="DISARM")this.armed=0,this.mis=null,r("OK");else if(i==="MODE"){let a=(e[1]||"MANUAL").toUpperCase();a==="RTH"&&!this.home?r("ERR kein Home"):(this.mode=a,r("OK"))}else if(i==="TEST"){let a=(e[1]||"").toUpperCase();a==="ENABLE"?+e[2]&&this.armed?r("ERR scharf"):(this.tst=+e[2]?1:0,this.tst||(this.tThr=0,this.tPump=0),r("OK")):this.tst?a==="SERVO"?(this.tServo[+e[2]]=+e[3],r("OK")):a==="MOTOR"?(this.tThr=Math.max(-100,Math.min(100,+e[2]))/100,this.tWd=1.5,r("OK")):a==="PUMP"?(this.tPump=Math.max(-100,Math.min(100,+e[2]))/100,this.tWd=1.5,r("OK")):a==="OFF"?(this.tThr=0,this.tPump=0,this.tServo=[1500,1500,1500],r("OK")):r("ERR"):r("ERR kein Testmodus")}else if(i==="CAL")(e[1]||"").toUpperCase()==="DEPTH"&&(this.depth=0),r("OK");else if(i==="MIS"){let a=(e[1]||"").toUpperCase();if(a==="CLEAR")this.steps=[],r("OK");else if(a==="ADD")this.steps.push([e[2].toUpperCase(),+e[3]||0,+e[4]||0,+e[5]||0,+e[6]||0]),r("OK "+this.steps.length);else if(a==="GET")r("MIS "+JSON.stringify(this.steps));else if(a==="SAVE")r("OK");else if(a==="START"){if(!this.armed){r("ERR nicht scharf");return}let l=Io(h=>this.par[h]);this.mis={plan:No(Oo(this.steps),l),t:0,last:-1},this.mode="MISSION",r("OK")}else a==="STOP"?(this.mis=null,this.mode="DEPTH",r("OK")):r("ERR")}else if(i==="HOME")(e[1]||"").toUpperCase()==="SET"?(this.home={lat:47.05+this.gy/111200,lon:8.3+this.gx/75900},r("OK")):r("HOME "+JSON.stringify({set:this.home?1:0,lat:this.home?this.home.lat:0,lon:this.home?this.home.lon:0}));else if(i==="BB"){let a=(e[1]||"").toUpperCase();if(this.armed)r("ERR erst DISARM");else if(a==="INFO")r("BB "+JSON.stringify({free:this.bbs?64e4:104e4,total:1048576,rec:36}));else if(a==="LIST")r("BB "+JSON.stringify(this.bbs===!1?[]:[{f:"bb_001.bin",n:Hs().length}]));else if(a==="CLEAR")this.bbs=!1,r("OK");else if(a==="DUMP"){if(this.bbs===!1||+e[2]!=1){r("ERR Datei fehlt");return}let l=Hs(),h=0,u=0,f=setInterval(()=>{for(let m=0;m<40&&h<l.length;m++){let d=l.slice(h,h+48);this._feed("BBD "+h+" "+Array.from(d,_=>_.toString(16).padStart(2,"0")).join("")+`
`),h+=d.length}h>=l.length&&(clearInterval(f),this._feed("BBE "+l.length+" "+ad(l).toString(16).padStart(8,"0")+`
`))},20)}else r("ERR BB ?")}else r(i==="REBOOT"||i==="BOOTSEL"?"OK":"ERR unbekannter Befehl")}_tick(){let e=performance.now()-this.t0,i=0,r=this.att[2],a=this.depth,l=0,h=-1,u=0,f="-",m=0,d=0,_=0,g=0;if(this.tst&&(this.tWd-=.05,this.tWd<=0&&(this.tThr=0,this.tPump=0),this.fill=Math.min(100,Math.max(0,this.fill+this.tPump*this.par["bal.flow"]*.05)),l=this.tThr),this.mis){this.mis.t+=.05*(this.speed||1);let S=this.mis.plan.pts,w=S.findIndex(k=>k.t>=this.mis.t);if(w<0)this.mis=null,this.mode="DEPTH",this.emit("ev","MISSION ENDE");else{let k=S[w];a=k.z,i=k.p,r=k.h,this.fill=k.f,l=k.thr/100,h=k.i,u=1,f=this.steps[h]?this.steps[h][0]:"-",m=this.mis.t,h!==this.mis.last&&(this.mis.last=h,this.emit("ev",`SCHRITT ${h+1} ${f}`))}}else this.tst||(a+=(0-a)*.02,i=Math.sin(e/3e3)*.4);if(this.depth=a,this.att=[Math.sin(e/2500)*.6,i,r],this.vb=Math.max(6.6,8.2-e/1e3*4e-4-l*l*.15),!this.hz||e-(this._lt||-1e9)<1e3/this.hz)return;this._lt=e;let M=(S,w,k,C)=>Math.round(Math.min(this.par[C],Math.max(this.par[k],this.tst?this.tServo[S]:this.par[w])));if(this.mode==="RTH"&&this.home){let S=(this.home.lon-8.3)*75900,w=(this.home.lat-47.05)*111200,k=S-this.gx,C=w-this.gy,D=Math.hypot(k,C);D>3&&(this.gx+=k/D*.5*.05*3,this.gy+=C/D*.5*.05*3,r=(Math.atan2(k,C)*180/Math.PI+360)%360,this.att[2]=r)}else this.armed&&this.mode!=="MANUAL"&&(this.gx+=Math.sin(r*Math.PI/180)*.15*.05,this.gy+=Math.cos(r*Math.PI/180)*.15*.05);let b=47.05+this.gy/111200,x=8.3+this.gx/75900,v=this.home?Math.hypot((this.home.lon-8.3)*75900-this.gx,(this.home.lat-47.05)*111200-this.gy):0,R={t:Math.round(e),m:this.mode,arm:this.armed,tst:this.tst,att:this.att.map(S=>+S.toFixed(1)),gyr:[.1,+(Math.cos(e/3e3)*.4).toFixed(1),0],d:+a.toFixed(3),tmp:14.2,prs:+(this.par["fluid.p_surface"]+a*this.par["fluid.density"]*.0981).toFixed(1),vb:+this.vb.toFixed(2),lk:this.leak,bc:this.bc||(this.armed?1:0),es:0,rc:[1500,1500,1500,1500,1e3,1e3,1e3,1e3],rcok:1,rssi:-62,out:{r:g,s:_,b:d,us:[M(0,"servo.rud.center","servo.rud.min","servo.rud.max"),M(1,"servo.stern.center","servo.stern.min","servo.stern.max"),M(2,"servo.bow.center","servo.bow.min","servo.bow.max")],mu:Math.round(1500+l*500),thr:l,pmp:this.tPump},fill:+this.fill.toFixed(1),tg:{d:this.mis?a:0,p:i,h:r,t:l*100},mis:{run:u,i:h,n:this.steps.length,ty:f,t:+m.toFixed(1)},cal:this.calst,ok:[1,1],fs:this.fs,w:"",lp:640,gps:{ok:a<.3?1:0,lat:+b.toFixed(6),lon:+x.toFixed(6),sat:9,hd:.9,spd:this.armed?.5:0,home:this.home?1:0,dist:+v.toFixed(1),brg:0,ph:this.mode==="RTH"?v>3?3:4:0},bb:0};this._feed("T "+JSON.stringify(R)+`
`)}};var Me={bg:"#071017",line:"#22323f",dim:"#71818e",txt:"#dfe7ec",acc:"#ff7a59",sky:"#0d2233",gnd:"#04080c",ok:"#4fb477",warn:"#e0a93b",bad:"#e0584b",tgt:"#56c8dc",grid:"#122029"},Vt=Me;function Bo(s,t){let e=P("canvas",{width:s*2,height:t*2,style:{width:s+"px",height:"auto",maxWidth:"100%"}}),i=e.getContext("2d");return i.scale(2,2),{c:e,x:i,w:s,h:t}}var km='Bahnschrift, "DIN Alternate", "Arial Narrow", Arial, sans-serif',dn=(s,t,e="")=>{s.font=`${e} ${t}px ${km}`},We=Math.PI/180,ld=(s,t=1)=>{let e=+s.toFixed(t);return(e>0?"+":e<0?"\u2212":"\xB1")+Math.abs(e).toFixed(t)};function cd(s,t,e,i){let r=s.createRadialGradient(t,e-i*.3,i*.1,t,e,i);r.addColorStop(0,"#0e1b25"),r.addColorStop(1,"#03070a"),s.fillStyle=r,s.beginPath(),s.arc(t,e,i,0,7),s.fill(),s.lineWidth=3,s.strokeStyle="#1d2a35",s.stroke(),s.lineWidth=1,s.strokeStyle="#3a4c5a",s.beginPath(),s.arc(t,e,i-2.5,0,7),s.stroke(),s.fillStyle="#25333e",[45,135,225,315].forEach(a=>{s.beginPath(),s.arc(t+Math.cos(a*We)*(i+.5),e+Math.sin(a*We)*(i+.5),2.2,0,7),s.fill()})}function Bm(s,t,e){let i=t*.075,r=t/2-i*1.6,a=-t*.18,l=-t/2+i*.5,h=i*.28;s.fillStyle=e,s.beginPath(),s.moveTo(a,-i),s.lineTo(r,-i),s.bezierCurveTo(r+i*1.25,-i,t/2,-i*.55,t/2,0),s.bezierCurveTo(t/2,i*.55,r+i*1.25,i,r,i),s.lineTo(a,i),s.bezierCurveTo(a-t*.12,i,l+i*.4,h,l,h),s.lineTo(l,-h),s.bezierCurveTo(l+i*.4,-h,a-t*.12,-i,a,-i),s.closePath(),s.fill(),s.beginPath(),s.moveTo(t*.08,-i),s.lineTo(t*.115,-i*2.3),s.lineTo(t*.22,-i*2.3),s.lineTo(t*.25,-i),s.closePath(),s.fill();let u=l+i*.55;s.beginPath(),s.moveTo(u+i*1.6,-i*.45),s.lineTo(u+i*.2,-i*1.65),s.lineTo(u-i*.15,-i*1.65),s.lineTo(u-i*.15,-h),s.closePath(),s.fill(),s.beginPath(),s.moveTo(u+i*1.6,i*.45),s.lineTo(u+i*.2,i*1.65),s.lineTo(u-i*.15,i*1.65),s.lineTo(u-i*.15,h),s.closePath(),s.fill(),s.fillRect(l-i*.35,-i*.75,i*.22,i*1.5)}function Fm(s,t,e){let i=t*.085,r=-t/2+i*1.6,a=t*.18,l=t/2-i*.5,h=i*.28;s.fillStyle=e,s.beginPath(),s.moveTo(-i,a),s.lineTo(-i,r),s.bezierCurveTo(-i,r-i*1.25,-i*.55,-t/2,0,-t/2),s.bezierCurveTo(i*.55,-t/2,i,r-i*1.25,i,r),s.lineTo(i,a),s.bezierCurveTo(i,a+t*.12,h,l-i*.4,h,l),s.lineTo(-h,l),s.bezierCurveTo(-h,l-i*.4,-i,a+t*.12,-i,a),s.closePath(),s.fill();let u=l-i*.55;s.beginPath(),s.moveTo(-i*.45,u-i*1.6),s.lineTo(-i*1.65,u-i*.2),s.lineTo(-i*1.65,u+i*.15),s.lineTo(-h,u+i*.15),s.closePath(),s.fill(),s.beginPath(),s.moveTo(i*.45,u-i*1.6),s.lineTo(i*1.65,u-i*.2),s.lineTo(i*1.65,u+i*.15),s.lineTo(h,u+i*.15),s.closePath(),s.fill(),s.fillRect(-i*.75,l+i*.13,i*1.5,i*.22),s.fillStyle="#071017",s.fillRect(-i*.38,-t*.25,i*.76,t*.17)}function hd(s=260){let{c:t,x:e,w:i,h:r}=Bo(s,s),a=i/2,l=r/2,h=s/2-5,u={el:t,draw(f=0,m=0,d){e.clearRect(0,0,i,r),cd(e,a,l,h),e.save(),e.translate(a,l);let _=h-8;e.save(),e.beginPath(),e.arc(0,0,_-16,0,7),e.clip(),e.strokeStyle=Me.grid,e.lineWidth=1;for(let R=-_;R<=_;R+=12)e.beginPath(),e.moveTo(-_,R+.5),e.lineTo(_,R+.5),e.stroke();e.restore(),e.strokeStyle="#3c5262",e.setLineDash([2,3]),e.beginPath(),e.moveTo(-_+16,0),e.lineTo(_-16,0),e.stroke(),e.setLineDash([]),dn(e,9.5,"600"),e.textBaseline="middle";for(let R=-40;R<=40;R+=5){let S=R%10===0;[0,1].forEach(w=>{let k=(w?180+R:-R)*We,C=_,D=_-(S?10:5);e.strokeStyle=S?Me.txt:Me.dim,e.lineWidth=S?1.4:1,e.beginPath(),e.moveTo(Math.cos(k)*D,Math.sin(k)*D),e.lineTo(Math.cos(k)*C,Math.sin(k)*C),e.stroke(),S&&R&&!w&&(e.fillStyle=Me.dim,e.textAlign="right",e.fillText(String(Math.abs(R)),Math.cos(k)*(_-13),Math.sin(k)*(_-13)))})}if(e.fillStyle=Me.dim,dn(e,8,"600"),e.textAlign="center",e.fillText("BUG",_*.62,-_*.7),e.fillText("HECK",-_*.62,-_*.7),d!=null){let R=-d*We;e.strokeStyle=Me.tgt,e.lineWidth=3,e.beginPath(),e.arc(0,0,_+3,R-2.5*We,R+2.5*We),e.stroke(),e.lineWidth=1,e.setLineDash([3,3]),e.beginPath(),e.moveTo(Math.cos(R)*_*.62,Math.sin(R)*_*.62),e.lineTo(Math.cos(R)*(_-12),Math.sin(R)*(_-12)),e.stroke(),e.setLineDash([])}e.save(),e.rotate(-m*We),e.strokeStyle=Me.acc,e.lineWidth=1.2,e.beginPath(),e.moveTo(_*.64,0),e.lineTo(_-11,0),e.moveTo(-_*.64,0),e.lineTo(-_+11,0),e.stroke(),Bm(e,_*1.22,"#c9d6de"),e.restore();let g=_-24,M=50,b=130;e.strokeStyle="#22313d",e.lineWidth=6,e.beginPath(),e.arc(0,0,g,M*We,b*We),e.stroke(),e.strokeStyle="rgba(224,88,75,.6)",[[M,M+10],[b-10,b]].forEach(([R,S])=>{e.beginPath(),e.arc(0,0,g,R*We,S*We),e.stroke()}),e.lineWidth=1,e.strokeStyle=Me.dim;for(let R=-40;R<=40;R+=10){let S=(90-R)*We;e.beginPath(),e.moveTo(Math.cos(S)*(g-6),Math.sin(S)*(g-6)),e.lineTo(Math.cos(S)*(g+5),Math.sin(S)*(g+5)),e.stroke()}dn(e,8,"600"),e.fillStyle=Me.dim,e.textAlign="center",e.fillText("BB",Math.cos(118*We)*(g-15),Math.sin(118*We)*(g-15)),e.fillText("STB",Math.cos(62*We)*(g-15),Math.sin(62*We)*(g-15));let x=Math.max(-44,Math.min(44,f)),v=(90-x)*We;e.save(),e.translate(Math.cos(v)*g,Math.sin(v)*g),e.rotate(v-Math.PI/2),e.fillStyle=Math.abs(f)>30?Me.bad:Me.acc,e.beginPath(),e.moveTo(0,7),e.lineTo(-5,-7),e.lineTo(5,-7),e.closePath(),e.fill(),e.restore(),e.textBaseline="middle",e.textAlign="center",dn(e,8,"600"),e.fillStyle=Me.dim,e.fillText("NICK",0,-_*.56),dn(e,17,"600"),e.fillStyle=Me.txt,e.fillText(ld(m)+"\xB0",0,-_*.4),dn(e,8,"600"),e.fillStyle=Me.dim,e.fillText("ROLL",0,_*.3),dn(e,13,"600"),e.fillStyle=Me.txt,e.fillText((f>.05?"STB ":f<-.05?"BB ":"")+Math.abs(f).toFixed(1)+"\xB0",0,_*.44),e.restore()}};return u.draw(),u}function ud(s=260){let{c:t,x:e}=Bo(s,s),i=s/2,r=s/2,a=s/2-5,l={el:t,draw(h=0,u){h=(h%360+360)%360,e.clearRect(0,0,s,s),cd(e,i,r,a),e.save(),e.translate(i,r);let f=a-8;e.strokeStyle="#141f28",e.lineWidth=26,e.beginPath(),e.arc(0,0,f-13,0,7),e.stroke(),e.save(),e.rotate(-h*We),e.textAlign="center",e.textBaseline="middle";for(let m=0;m<360;m++){let d=m%10===0,_=m%5===0;if(!(!_&&s<200)){if(e.save(),e.rotate(m*We),e.strokeStyle=d?Me.txt:_?"#9fb0bc":"#4d606e",e.lineWidth=d?1.4:1,e.beginPath(),e.moveTo(0,-f),e.lineTo(0,-f+(d?9:_?6:3.5)),e.stroke(),m%30===0){let g={0:"N",90:"E",180:"S",270:"W"}[m];g?(dn(e,13,"700"),e.fillStyle=m===0?Me.acc:Me.txt,e.fillText(g,0,-f+19)):(dn(e,9.5,"600"),e.fillStyle="#b7c4cd",e.fillText(String(m).padStart(3,"0"),0,-f+18))}e.restore()}}if(u!=null&&(e.save(),e.rotate(u*We),e.fillStyle=Me.tgt,e.beginPath(),e.moveTo(-7,-f-2),e.lineTo(7,-f-2),e.lineTo(7,-f+5),e.lineTo(0,-f),e.lineTo(-7,-f+5),e.closePath(),e.fill(),e.restore()),e.restore(),e.strokeStyle="#2c3e4b",e.lineWidth=1,e.beginPath(),e.arc(0,0,f-30,0,7),e.stroke(),u!=null){let m=(u-h+540)%360-180;e.strokeStyle=Me.tgt,e.lineWidth=3,e.beginPath(),e.arc(0,0,f-30,-Math.PI/2,(-90+m)*We,m<0),e.stroke()}for(let m=45;m<360;m+=45)e.save(),e.rotate(m*We),e.strokeStyle="#3d5262",e.beginPath(),e.moveTo(0,-f+30),e.lineTo(0,-f+37),e.stroke(),e.restore();e.fillStyle=Me.acc,e.beginPath(),e.moveTo(0,-f+3),e.lineTo(-6,-f-7),e.lineTo(6,-f-7),e.closePath(),e.fill(),e.fillRect(-.75,-f+2,1.5,34),Fm(e,f*.66,"#c9d6de"),e.fillStyle="#02060a",e.strokeStyle="#3a4c5a",e.lineWidth=1,e.beginPath(),e.rect(-27,f*.38,54,21),e.fill(),e.stroke(),dn(e,15,"600"),e.fillStyle=Me.txt,e.textAlign="center",e.textBaseline="middle",e.fillText(String(Math.round(h)%360).padStart(3,"0")+"\xB0",0,f*.38+11),u!=null&&(dn(e,8.5,"600"),e.fillStyle=Me.tgt,e.fillText("SOLL "+String(Math.round((u%360+360)%360)%360).padStart(3,"0")+"\xB0",0,f*.38+31)),e.restore()}};return l.draw(),l}function dd(s=90,t=260){let{c:e,x:i}=Bo(s,t);return{el:e,draw(r=0,a=3,l,h){i.clearRect(0,0,s,t);let u=40,f=t-30,m=(f-u)/a;i.fillStyle="#03070a",i.fillRect(0,0,s,t),i.strokeStyle="#1d2a35",i.lineWidth=2,i.strokeRect(1,1,s-2,t-2);let d=44,_=18,g=i.createLinearGradient(0,u,0,f);g.addColorStop(0,"#174b66"),g.addColorStop(1,"#03111a"),i.fillStyle=g,i.fillRect(d,u,_,f-u),i.fillStyle="#4c87a6",i.fillRect(d,u-1,_,2),dn(i,9.5,"600"),i.textAlign="right",i.textBaseline="middle",i.lineWidth=1;let M=a<=5?.5:a<=20?2:10;for(let v=0;v*M/2<=a+1e-6;v++){let R=v*M/2,S=u+R*m,w=v%2===0;i.strokeStyle=w?"#9fb0bc":"#4d606e",i.beginPath(),i.moveTo(w?34:38,S),i.lineTo(d,S),i.stroke(),w&&(i.fillStyle=Me.dim,i.fillText(R.toFixed(M<1?1:0),31,S))}if(h!==void 0&&h<a){let v=u+h*m;i.fillStyle="rgba(224,88,75,.22)",i.fillRect(d,v,_,f-v),i.strokeStyle=Me.bad,i.setLineDash([3,2]),i.beginPath(),i.moveTo(30,v),i.lineTo(s-4,v),i.stroke(),i.setLineDash([])}let b=l!=null&&l>0;if(b){let v=u+ec(l,0,a)*m;i.fillStyle=Me.tgt,i.beginPath(),i.moveTo(d+_+1,v),i.lineTo(d+_+11,v-6),i.lineTo(d+_+11,v+6),i.closePath(),i.fill()}let x=u+ec(r,0,a)*m;i.fillStyle=Me.acc,i.fillRect(d-2,x-1,_+4,2),i.beginPath(),i.moveTo(d-2,x),i.lineTo(d-10,x-5),i.lineTo(d-10,x+5),i.closePath(),i.fill(),i.fillStyle="#02060a",i.strokeStyle="#3a4c5a",i.beginPath(),i.rect(6.5,8.5,s-13,22),i.fill(),i.stroke(),dn(i,14,"600"),i.fillStyle=Me.txt,i.textAlign="center",i.fillText(r.toFixed(2)+" m",s/2,20),dn(i,8.5,"600"),i.fillStyle=b?Me.tgt:Me.dim,i.fillText(b?"\u0394 "+ld(r-l,2)+" m":"SOLL \u2013",s/2,t-15)}}}var ec=(s,t,e)=>Math.min(e,Math.max(t,s));function fd(s,t={}){let e=t.w||520,i=t.h||150,{c:r,x:a}=Bo(e,i),l=t.span||30,h=s.map(()=>[]),u=0;return{el:r,push(m,d){d.forEach((_,g)=>{if(_!==void 0&&!isNaN(_))for(h[g].push([m,_]);h[g].length&&m-h[g][0][0]>l;)h[g].shift()}),u=m},clear(){h.forEach(m=>{m.length=0})},draw(){a.clearRect(0,0,e,i),a.fillStyle=Me.bg,a.fillRect(0,0,e,i);let m=t.min,d=t.max;if(m===void 0||d===void 0){m=1e9,d=-1e9,h.forEach(M=>M.forEach(b=>{m=Math.min(m,b[1]),d=Math.max(d,b[1])})),m>d&&(m=0,d=1);let g=(d-m)*.1||.5;m-=g,d+=g}a.strokeStyle=Me.grid,a.lineWidth=1,dn(a,9),a.fillStyle=Me.dim,a.textAlign="left";for(let g=0;g<=4;g++){let M=4+(i-8)*g/4;a.beginPath(),a.moveTo(0,M),a.lineTo(e,M),a.stroke(),a.fillText((d-(d-m)*g/4).toFixed(t.dec??1),3,M-2)}s.forEach((g,M)=>{a.strokeStyle=g.color,a.lineWidth=1.5,a.beginPath();let b=!0;h[M].forEach(x=>{let v=e-(u-x[0])/l*e,R=4+(i-8)*(1-(x[1]-m)/(d-m||1));b?(a.moveTo(v,R),b=!1):a.lineTo(v,R)}),a.stroke()});let _=e-6;a.textAlign="right",dn(a,10);for(let g=s.length-1;g>=0;g--){a.fillStyle=s[g].color;let M=s[g].name+(h[g].length?" "+h[g][h[g].length-1][1].toFixed(t.dec??1):"");a.fillText(M,_,12),_-=a.measureText(M).width+12}}}}function Cn(s,t,e,i,r={}){let a=P("div",{class:"bar-fill"}),l=P("span",{class:"bar-val"},"\u2013");return{el:P("div",{class:"bar"},P("span",{class:"bar-l"},s),P("div",{class:"bar-t"},a,r.mid?P("i",{class:"bar-mid"}):null),l),set(u,f,m){if(u===void 0||isNaN(u)){l.textContent="\u2013",a.style.width="0";return}let d=(u-t)/(e-t);if(r.mid){let _=(0-t)/(e-t);a.style.left=Math.min(d,_)*100+"%",a.style.width=Math.abs(d-_)*100+"%"}else a.style.left="0",a.style.width=ec(d,0,1)*100+"%";a.style.background=m||"",l.textContent=f??u.toFixed(r.dec??0)+(i?" "+i:"")}}}var on=s=>{let t=P("span",{class:"chip"},s);return{el:t,set(e,i){t.textContent=e===void 0?s:e,t.className="chip "+(i||"")}}},le=(s,t)=>{let e=P("b",null,"\u2013"),i=P("div",{class:"stat"},P("span",null,s),P("div",null,e,t?P("small",null,t):null));return{el:i,set(r,a){e.textContent=r,i.className="stat "+(a||"")}}};async function Ee(s,t,e){if(!Q.connected)return ae("Nicht verbunden","bad"),null;let i=await Q.link.cmd(s,e);return i.ok?t&&ae(t,"ok"):ae(`${s}: ${i.text}`,"bad"),i}var zo=new Map;setInterval(()=>{if(!(!Q.connected||Q.link.q.length>2))for(let[s,t]of zo)Q.link.cmd(t,800),zo.delete(s)},50);var Fo=(s,t)=>zo.set(s,t);async function nc(s,t){let e=await Ee(`SET ${s} ${t}`);return e&&e.ok&&(Q.par[s]=+t,Oe.emit("par")),e}async function zr(){let s=await Q.link.cmd("GET",4e3);return s.ok&&Array.isArray(s.data)&&(Q.parList=s.data,Q.par={},s.data.forEach(t=>{Q.par[t.k]=t.v}),Oe.emit("par")),s}var He=(s,...t)=>P("section",{class:"card"},P("h3",null,s),...t),Ue=(s,t,e="")=>P("button",{class:"btn "+e,onclick:t},s),Rn=s=>P("p",{class:"note"},s);function pd(s){let t=P("div",{class:"kv"});return{el:P("div",{class:"page"},P("div",{class:"hero"},P("div",null,P("h1",null,"FATHOM Konfigurator"),P("p",null,"Diagnose, Kalibration, Tests und Missionsplanung f\xFCr das U-Boot. Per USB zum Flashen und Testen am Tisch, per WLAN f\xFCr Auftr\xE4ge und Blackbox im Feld.")),P("div",{class:"hero-btns"},Ue("Verbinden (USB)",()=>s.connect(),"primary big"),Ue("Per WLAN verbinden",()=>s.wifi(),"big"),Ue("Demo Boot starten",()=>s.demo(),"big"))),P("div",{class:"grid2"},He("Verbindung",t,"serial"in navigator?Rn("USB braucht Chrome oder Edge am PC (Web Serial)."):P("p",{class:"warn-box"},"USB geht in diesem Browser nicht (kein Web Serial). F\xFCr USB Chrome oder Edge am PC verwenden. WLAN und Demo laufen trotzdem."),P("p",{class:"wifi-box"},"WLAN geht mit jedem Browser, auch am Handy: mit dem Boot WLAN FATHOM-XXXX verbinden und http://192.168.4.1 \xF6ffnen. Funk ist nur im DISARMED aktiv. ARM und Missionsstart gehen nur \xFCber Crossfire oder USB."),P("div",{class:"row"},Ue("Boot neu starten",()=>Ee("REBOOT","Neustart")),Ue("Bootloader (BOOTSEL)",()=>{confirm("Boot springt in den USB Bootloader. Danach erscheint ein Laufwerk RPI-RP2 zum Flashen. Fortfahren?")&&Ee("BOOTSEL")}))),He("Erste Inbetriebnahme",P("ol",{class:"steps"},P("li",null,"Boot trocken auf den Tisch, nur USB (Akku abgesteckt, Propeller ab)."),P("li",null,"Verbinden. Unter Sensoren pr\xFCfen: Nick + bei Nase hoch, Roll + bei rechte Seite runter, Tiefe nahe 0."),P("li",null,"Kalibration: Tiefe auf Null, Lage Null, IMU Balken auf 3, Batteriespannung abgleichen."),P("li",null,"Servos: Mitte und Endpunkte einstellen, Richtung pr\xFCfen (Heck hoch = Nase hoch)."),P("li",null,"Tests: Motor erst ohne Propeller, dann mit Gaslimit 10 %. Pumpe f\xFCllt (+) und leert (\u2212)."),P("li",null,"Dichtheitstest, Leckage Sensor Wert pr\xFCfen, dann erst ins Wasser. Parameter sichern (Speichern)."))))),update(){},show(){let i=Q.info;t.innerHTML="",[["Status",Q.connected?Q.demo?"Demo (simuliert)":"verbunden":"getrennt"],["Firmware",i?`${i.fw} ${i.ver}`:"\u2013"],["Hardware",i?i.hw:"\u2013"],["Parameter",i?i.params:"\u2013"],["Max Missionsschritte",i?i.maxsteps:"\u2013"]].forEach(([r,a])=>t.append(P("span",null,r),P("b",null,String(a))))}}}function md(){let s=hd(290),t=ud(290),e=dd(96,290),i={pitch:le("Nick","\xB0"),roll:le("Roll","\xB0"),yaw:le("Kurs","\xB0"),depth:le("Tiefe","m"),temp:le("Wasser","\xB0C"),vb:le("Akku","V"),fill:le("Ballast","%"),thr:le("Vortrieb","%"),spd:le("Fahrt ca.","m/s")},r={arm:on("DISARMED"),mode:on("MANUAL"),rc:on("RC"),gps:on("GPS"),imu:on("IMU"),dep:on("Tiefe"),leak:on("Leck"),tst:on("Test"),mis:on("Mission")},a={rud:Cn("Seitenruder",-45,45,"\xB0",{mid:!0}),stn:Cn("Heck Tiefenruder",-45,45,"\xB0",{mid:!0}),bow:Cn("Bug Tiefenruder",-45,45,"\xB0",{mid:!0}),thr:Cn("Motor",-100,100,"%",{mid:!0}),pmp:Cn("Pumpe",-100,100,"%",{mid:!0}),fill:Cn("Ballast F\xFCllung",0,100,"%"),vb:Cn("Akku 2S",6,8.4,"V",{dec:2}),lk:Cn("Leckage",0,1,"",{dec:2})},l=P("div",{class:"alert",style:{display:"none"}}),h=P("div",{class:"log"}),u=P("div",{class:"kv"}),f=P("div",{class:"page dash"},l,P("div",{class:"chips"},Object.values(r).map(d=>d.el)),P("div",{class:"instr"},P("div",{class:"ins"},P("div",{class:"cap"},"Lage"),s.el),P("div",{class:"ins"},P("div",{class:"cap"},"Kurs"),t.el),P("div",{class:"ins"},P("div",{class:"cap"},"Tiefe"),e.el)),P("div",{class:"stats"},Object.values(i).map(d=>d.el)),P("div",{class:"grid2"},He("Ausg\xE4nge",Object.values(a).map(d=>d.el)),He("Mission und Ziele",u,P("h4",null,"Ereignisse"),h))),m=()=>{h.innerHTML="",Q.events.slice(-40).reverse().forEach(d=>h.append(P("div",{class:"ev "+d.kind},P("time",null,d.t.toTimeString().slice(0,8)),d.m)))};return Oe.on("ev",m),{el:f,show:m,update(d){s.draw(d.att[0],d.att[1],d.mis.run||d.m!=="MANUAL"?d.tg.p:void 0),t.draw(d.att[2],d.m==="MANUAL"?void 0:d.tg.h),e.draw(d.d,Math.max(Q.get("lim.depth",3)*1.15,1),d.m==="DEPTH"||d.m==="MISSION"?d.tg.d:void 0,Q.get("lim.depth",3)),i.pitch.set(wt(d.att[1])),i.roll.set(wt(d.att[0])),i.yaw.set(wt(d.att[2],0).padStart(3,"0")),i.depth.set(wt(d.d,2)),i.temp.set(wt(d.tmp)),i.fill.set(wt(d.fill,0)),i.thr.set(wt(d.out.thr*100,0)),i.vb.set(wt(d.vb,2),d.vb<Q.get("bat.crit",6.4)?"bad":d.vb<Q.get("bat.warn",7)?"warn":""),i.spd.set(wt(Math.abs(d.out.thr*100)*Q.get("spd.ms_per_pct",.014),2)),r.arm.set(d.arm?"ARMED":"DISARMED",d.arm?"bad":""),r.mode.set(d.m,d.m==="FAILSAFE"?"bad":d.m==="MISSION"||d.m==="RTH"?"acc":""),r.rc.set(d.rcok?`RC ${d.rssi} dBm`:"RC fehlt",d.rcok?"ok":"warn"),r.imu.set(d.ok[0]?"IMU ok":"IMU Fehler",d.ok[0]?"ok":"bad"),r.dep.set(d.ok[1]?"Tiefensensor ok":"Tiefensensor Fehler",d.ok[1]?"ok":"bad"),d.gps&&r.gps.set(d.gps.ok?`GPS ${d.gps.sat} Sat`:"GPS kein Fix",d.gps.ok?"ok":""),r.leak.set(d.lk>Q.get("leak.threshold",.35)?"LECKAGE":"trocken",d.lk>Q.get("leak.threshold",.35)?"bad":"ok"),r.tst.set(d.tst?"TESTMODUS":"Test aus",d.tst?"warn":""),r.mis.set(d.mis.run?`Mission ${d.mis.i+1}/${d.mis.n} ${d.mis.ty}`:"Mission aus",d.mis.run?"acc":""),a.rud.set(d.out.r,wt(d.out.r)+" \xB0 / "+d.out.us[0]+" \xB5s"),a.stn.set(d.out.s,wt(d.out.s)+" \xB0 / "+d.out.us[1]+" \xB5s"),a.bow.set(d.out.b,wt(d.out.b)+" \xB0 / "+d.out.us[2]+" \xB5s"),a.thr.set(d.out.thr*100,wt(d.out.thr*100,0)+" % / "+d.out.mu+" \xB5s",d.out.thr<0?Vt.warn:""),a.pmp.set(d.out.pmp*100,wt(d.out.pmp*100,0)+" %"),a.fill.set(d.fill,wt(d.fill,0)+" %"),a.vb.set(d.vb,wt(d.vb,2)+" V",d.vb<Q.get("bat.warn",7)?Vt.warn:Vt.ok),a.lk.set(d.lk,wt(d.lk,2),d.lk>Q.get("leak.threshold",.35)?Vt.bad:Vt.ok);let _=d.fs?"FAILSAFE: "+d.fs:d.w;l.style.display=_?"block":"none",l.textContent=_,u.innerHTML="",[["Ziel Tiefe",wt(d.tg.d,2)+" m"],["Ziel Nick",wt(d.tg.p)+" \xB0"],["Ziel Kurs",wt(d.tg.h,0)+" \xB0"],["Ziel Vortrieb",wt(d.tg.t,0)+" %"],["Schritt",d.mis.run?`${d.mis.i+1} von ${d.mis.n} (${d.mis.ty})`:"\u2013"],["Schrittzeit",d.mis.run?wt(d.mis.t,0)+" s":"\u2013"],["Druck",wt(d.prs,1)+" mbar"],["Zyklus",d.lp+" \xB5s"]].forEach(([g,M])=>u.append(P("span",null,g),P("b",null,M)))}}}function gd(){let s=(u,f)=>fd(u,f),t={att:s([{name:"Roll",color:"#e0a93b"},{name:"Nick",color:"#3e86e0"}],{min:-45,max:45,dec:1}),yaw:s([{name:"Kurs",color:"#4fb477"},{name:"Ziel",color:"#8a6fd0"}],{min:0,max:360,dec:0}),gyr:s([{name:"Gx",color:"#e0584b"},{name:"Gy",color:"#4fb477"},{name:"Gz",color:"#3e86e0"}],{min:-60,max:60,dec:1}),dep:s([{name:"Tiefe m",color:"#3e86e0"},{name:"Ziel",color:"#e0a93b"}],{}),pwr:s([{name:"Akku V",color:"#4fb477"}],{min:6,max:8.6,dec:2}),lk:s([{name:"Leck",color:"#e0584b"},{name:"Ballast %/100",color:"#8a6fd0"}],{min:0,max:1,dec:2})},e=P("div",{class:"kv wide"}),i=P("div",{class:"rcs"}),r=Array.from({length:8},(u,f)=>Cn("CH"+(f+1),1e3,2e3,"\xB5s"));r.forEach(u=>i.append(u.el));let a=["rc.ch.bow","rc.ch.ele","rc.ch.thr","rc.ch.rud","rc.ch.arm","rc.ch.mode","rc.ch.mission"],l=["Bugruder","Tiefenruder","Vortrieb","Seitenruder","Arm","Modus","Mission"];return{el:P("div",{class:"page"},P("div",{class:"grid2"},He("Lage",t.att.el),He("Kurs",t.yaw.el),He("Gyro (\xB0/s)",t.gyr.el),He("Tiefe",t.dep.el),He("Akku",t.pwr.el),He("Leckage und Ballast",t.lk.el)),P("div",{class:"grid2"},He("Rohwerte",e),He("RC Kan\xE4le (Crossfire)",i))),show(){Object.values(t).forEach(u=>u.clear())},update(u){let f=u.t/1e3;t.att.push(f,[u.att[0],u.att[1]]),t.yaw.push(f,[u.att[2],u.m==="MANUAL"?void 0:u.tg.h]),t.gyr.push(f,u.gyr),t.dep.push(f,[u.d,u.m==="DEPTH"||u.m==="MISSION"?u.tg.d:void 0]),t.pwr.push(f,[u.vb]),t.lk.push(f,[u.lk,u.fill/100]),Object.values(t).forEach(m=>m.draw()),e.innerHTML="",[["Druck",wt(u.prs,1)+" mbar"],["Temperatur",wt(u.tmp)+" \xB0C"],["Tiefe",wt(u.d,3)+" m"],["Roll / Nick / Kurs",`${wt(u.att[0])} / ${wt(u.att[1])} / ${wt(u.att[2])} \xB0`],["Gyro",u.gyr.map(m=>wt(m)).join(" / ")+" \xB0/s"],["Akku",wt(u.vb,2)+" V"],["Leckage",wt(u.lk,2)],["IMU Kalibrierung",`Sys ${u.cal[0]} Gyr ${u.cal[1]} Acc ${u.cal[2]} Mag ${u.cal[3]}`],["Zykluszeit",u.lp+" \xB5s"],["Modus",u.m]].forEach(([m,d])=>e.append(P("span",null,m),P("b",null,d))),u.rc.forEach((m,d)=>{let _=a.findIndex(g=>Q.get(g,0)===d+1);r[d].set(m,`${m} \xB5s${_>=0?" \xB7 "+l[_]:""}`,u.rcok?"":Vt.dim)})}}}async function zm(s){if(!Q.connected)return!1;let t=await Q.link.cmd(`TEST ENABLE ${s?1:0}`);return t.ok?!0:(ae(s?"Testmodus nur im DISARMED Zustand: "+t.text:t.text,"bad"),!1)}function _d(){let s=P("b",null,"Testmodus aus"),t=P("div",{class:"testbar"},s,P("span",null,"Servos, Motor und Pumpe lassen sich nur im Testmodus direkt ansteuern. Nur im DISARMED Zustand.")),e=Ue("Testmodus einschalten",async()=>{let i=!(Q.tel&&Q.tel.tst);await zm(i)&&(i||Ee("TEST OFF"))},"primary");return t.append(e),{el:t,update(i){s.textContent=i.tst?"TESTMODUS AKTIV":"Testmodus aus",t.className="testbar"+(i.tst?" on":""),e.textContent=i.tst?"Testmodus beenden":"Testmodus einschalten"}}}function vd(){let s=_d(),t={d:le("Tiefe","m"),p:le("Druck","mbar"),t:le("Temp","\xB0C"),pi:le("Nick","\xB0"),ro:le("Roll","\xB0"),yw:le("Kurs","\xB0"),vb:le("Akku","V"),lk:le("Leckage","")},e=["Gesamt","Gyro","Beschleunigung","Magnet"].map((h,u)=>Cn(h,0,3,"",{dec:0})),i=P("input",{type:"number",step:"0.01",placeholder:"Multimeter Volt",class:"in"}),r=[["Seitenruder","rud",0],["Heck Tiefenruder","stern",1],["Bug Tiefenruder","bow",2]].map(([h,u,f])=>{let m=P("b",null,"1500 \xB5s"),d=P("input",{type:"range",min:800,max:2200,step:5,value:1500,class:"sl",oninput:()=>{m.textContent=d.value+" \xB5s",Fo("sv"+f,`TEST SERVO ${f} ${d.value}`)}}),_=async(M,b)=>{let x=await nc(`servo.${u}.${M}`,d.value);x&&x.ok&&ae(`${h} ${b} = ${d.value} \xB5s`,"ok")},g=P("input",{type:"checkbox",onchange:()=>nc(`servo.${u}.rev`,g.checked?1:0)});return{el:P("div",{class:"sv"},P("div",{class:"svh"},P("b",null,h),m),d,P("div",{class:"row"},Ue("Mitte",()=>_("center","Mitte")),Ue("Min",()=>_("min","Min")),Ue("Max",()=>_("max","Max")),Ue("Zur\xFCck auf Mitte",()=>{d.value=Q.get(`servo.${u}.center`,1500),d.oninput()}),P("label",{class:"chk"},g," umkehren"))),sync(){g.checked=Q.get(`servo.${u}.rev`,0)>.5}}}),a=P("div",{class:"page"},s.el,P("div",{class:"stats"},Object.values(t).map(h=>h.el)),P("div",{class:"grid2"},He("1  Tiefensensor",Rn("Boot an der Luft, trocken. Setzt den aktuellen Druck als Oberfl\xE4che. Vor jedem Tauchgang wiederholen (Wetter \xE4ndert den Luftdruck)."),P("div",{class:"row"},Ue("Tiefe auf Null setzen",()=>Ee("CAL DEPTH","Oberfl\xE4chendruck gesetzt"),"primary"))),He("2  Lage Null",Rn("Boot im Gestell exakt waagrecht und ohne Rollen ausrichten (Wasserwaage auf dem Rohr). Dann best\xE4tigen. Nick und Roll werden zu 0 gesetzt."),P("div",{class:"row"},Ue("Lage als Null setzen",()=>Ee("CAL LEVEL","Lage Null gesetzt"),"primary")),Rn("Vorzeichenprobe: Nase hoch \u2192 Nick +. Rechte Seite runter \u2192 Roll +. Stimmt es nicht, unter Parameter imu.invert \xE4ndern (1 Roll, 2 Nick, 4 Kurs).")),He("3  IMU Kalibrierung (BNO055)",e.map(h=>h.el),Rn("Gyro: 3 s ruhig liegen lassen. Beschleunigung: Boot in 6 Lagen jeweils 3 s ruhig halten. Magnet nur im NDOF Modus n\xF6tig, in der R\xF6hre mit Motoren ohnehin unzuverl\xE4ssig (Standard: IMU Modus ohne Kompass)."),P("div",{class:"row"},Ue("Profil im BNO055 sichern",()=>Ee("CAL IMUSAVE","IMU Profil gespeichert")))),He("4  Batteriespannung",Rn("Akku am Stecker mit Multimeter messen und Wert eintragen. Der Spannungsteiler wird damit abgeglichen."),P("div",{class:"row"},i,Ue("Abgleichen",()=>{+i.value>4?Ee(`CAL VBAT ${i.value}`,"Batterie abgeglichen"):ae("Spannung eintragen","warn")},"primary"))),He("5  Servos: Mitte, Endpunkte, Richtung",Rn("Testmodus einschalten, Schieber bewegen. Mitte: Ruder genau neutral, dann Mitte dr\xFCcken. Endpunkte: bis kurz vor den mechanischen Anschlag, dann Min oder Max. Servo brummt am Anschlag und wird hei\xDF."),r.map(h=>h.el),Rn("Richtung: Heck Tiefenruder nach oben = Nase hoch. Seitenruder rechts = Boot dreht nach rechts (Kurs +).")),He("6  Leckage Sensor",Rn("Trockenwert merken (sollte unter 0.1 liegen). Mit einem feuchten Finger an den Sonden muss der Wert \xFCber die Schwelle steigen. Schwelle unter Parameter leak.threshold."),P("div",{class:"row"},Ue("Sensoren Seite \xF6ffnen",()=>Oe.emit("goto","sensors")))))),l=!1;return Oe.on("par",()=>r.forEach(h=>h.sync())),{el:a,show(){r.forEach(h=>h.sync())},hide(){},update(h){s.update(h),t.d.set(wt(h.d,3)),t.p.set(wt(h.prs,1)),t.t.set(wt(h.tmp)),t.pi.set(wt(h.att[1])),t.ro.set(wt(h.att[0])),t.yw.set(wt(h.att[2],0)),t.vb.set(wt(h.vb,2)),t.lk.set(wt(h.lk,2),h.lk>Q.get("leak.threshold",.35)?"bad":""),h.cal.forEach((u,f)=>e[f].set(u,u+" von 3",u>=3?Vt.ok:u>=2?Vt.warn:Vt.bad)),l||(l=!0,r.forEach(u=>u.sync()))}}}function xd(){let s=_d(),t=null,e=()=>Q.get("lim.deflect",25),i=()=>Q.get("servo.us_per_deg",10),r=(E,T)=>Math.round(Q.get(`servo.${E}.center`,1500)+(Q.get(`servo.${E}.rev`,0)>.5?-1:1)*T*i()),a=[["Seitenruder","rud",0],["Heck Tiefenruder","stern",1],["Bug Tiefenruder","bow",2]].map(([E,T,B])=>{let X=P("b",null,"0.0 \xB0"),W=P("input",{type:"range",min:-45,max:45,step:.5,value:0,class:"sl center"}),K=()=>{let it=Sn(+W.value,-e(),e());X.textContent=wt(it)+" \xB0 / "+r(T,it)+" \xB5s",Fo("ts"+B,`TEST SERVO ${B} ${r(T,it)}`)};return W.oninput=K,W.addEventListener("dblclick",()=>{W.value=0,K()}),{name:E,key:T,ch:B,sl:W,send:K,el:P("div",{class:"sv"},P("div",{class:"svh"},P("b",null,E),X),W)}}),l=Ue("Servos durchfahren (10 s)",()=>{if(t){clearInterval(t),t=null,l.textContent="Servos durchfahren (10 s)";return}let E=performance.now();l.textContent="Stopp Durchlauf",t=setInterval(()=>{let T=(performance.now()-E)/1e3;if(T>10){clearInterval(t),t=null,l.textContent="Servos durchfahren (10 s)",a.forEach(B=>{B.sl.value=0,B.send()});return}a.forEach((B,X)=>{B.sl.value=Math.sin(T*2*Math.PI*.5+X*1.2)*e(),B.send()})},60)}),h=P("input",{type:"checkbox"}),u=P("input",{type:"checkbox"}),f=P("b",null,"0 %"),m=P("input",{type:"range",min:-100,max:100,step:1,value:0,class:"sl center danger"}),d=P("input",{type:"checkbox"}),_=0,g=()=>{h.checked||(m.value=0,_=0);let E=u.checked?100:Q.get("lim.throttle",35);_=Sn(+m.value,-E,E),m.value=_,f.textContent=_+" %"+(_?" \u2192 "+Math.round(Math.abs(_)*Q.get("spd.ms_per_pct",.014)*100)/100+" m/s":""),Fo("tm",`TEST MOTOR ${_}`)};m.oninput=g,["pointerup","touchend"].forEach(E=>m.addEventListener(E,()=>{d.checked||(m.value=0,g())}));let M=()=>{m.value=0,_=0,x.value=0,v=0,f.textContent="0 %",b.textContent="0 %",zo.clear(),Q.connected&&(Q.link.q.length=0,Q.link.cmd("TEST OFF",1500)),a.forEach(E=>{E.sl.value=0,E.send()})},b=P("b",null,"0 %"),x=P("input",{type:"range",min:-100,max:100,step:1,value:0,class:"sl center"}),v=0,R=()=>{v=+x.value,b.textContent=v+" %"+(v>0?" f\xFCllen":v<0?" leeren":""),Fo("tp",`TEST PUMP ${v}`)};x.oninput=R,["pointerup","touchend"].forEach(E=>x.addEventListener(E,()=>{x.value=0,R()}));let S=null,w=()=>{S=setInterval(()=>{Q.connected&&(_&&Q.link.cmd(`TEST MOTOR ${_}`,800),v&&Q.link.cmd(`TEST PUMP ${v}`,800))},400)},k=Cn("Ballast F\xFCllstand (gesch\xE4tzt)",0,100,"%"),C=Cn("Motor Ausgang",-100,100,"%",{mid:!0}),D=Ue("STOPP ALLES",M,"stop big");return window.addEventListener("keydown",E=>{E.key==="Escape"&&Q.tab==="tests"&&M()}),{el:P("div",{class:"page"},s.el,P("div",{class:"grid2"},He("Servos",Rn("Schieber in Grad Ruderausschlag, begrenzt auf lim.deflect (\xB125 \xB0). Doppelklick = Mitte."),a.map(E=>E.el),P("div",{class:"row"},l)),He("Motor",P("p",{class:"warn-box"},"Propeller frei drehbar, Finger weg, Boot gesichert. Motor l\xE4uft nur solange der Schieber gehalten wird. Esc oder Stopp setzt alles auf Null."),P("label",{class:"chk"},h," Propeller ist frei, Motor freigeben"),P("label",{class:"chk"},d," Schieber bleibt stehen (Dauerlauf, Watchdog stoppt bei Verbindungsverlust)"),P("label",{class:"chk"},u," Gaslimit aufheben (nur Pr\xFCfstand)"),P("div",{class:"svh"},P("b",null,"Vortrieb (\u2212 r\xFCckw\xE4rts)"),f),m,C.el),He("Ballastpumpe",Rn("Plus f\xFCllt den Tank, minus leert ihn. L\xE4uft nur solange gehalten. DFRobot Pumpe mit eingebautem Treiber, Signal 50 Hz. Richtung falsch: Parameter pump.invert."),P("div",{class:"svh"},P("b",null,"Pumpe"),b),x,k.el),He("Status LEDs und Beacon",Rn("Beacon Pod (eigenes System) testen. Weiss = Strobe zum Wiederfinden, Rot = Warnblitz, Alarm = rot schnell plus Strobe. Aus setzt auch einen gespeicherten Alarm zur\xFCck. Status LEDs: gruen Blitz = bereit, Dauerlicht = scharf, schnell blinkend = Mission, rot n Blitze = Fehler (1 Batterie, 2 Leck, 3 Tiefe, 4 Sensor, 5 RC Verlust), rot Dauer = Not Aus."),P("div",{class:"row"},Ue("Beacon aus",()=>Ee("BEACON 0")),Ue("Weiss",()=>Ee("BEACON 2")),Ue("Rot",()=>Ee("BEACON 3")),Ue("Alarm",()=>Ee("BEACON 4",null,3e3),"warnb"))),He("Notaus",D,Rn("Der Testmodus hat einen Watchdog in der Firmware: Kommt 1.5 s kein Heartbeat, stoppen Motor und Pumpe von selbst.")))),show(){w(),a.forEach(E=>E.send())},hide(){clearInterval(S),M()},update(E){s.update(E),C.set(E.out.thr*100,wt(E.out.thr*100,0)+" % / "+E.out.mu+" \xB5s"),k.set(E.fill,wt(E.fill,0)+" %")},stopAll:M}}function yd(){let s=P("div"),t=P("input",{class:"in",placeholder:"Suchen (z. B. pid, servo, depth)",oninput:()=>i()}),e=new Set,i=()=>{s.innerHTML="";let l=Q.parList.length?Q.parList:mi.map(f=>({k:f.k,v:f.d,d:f.d,mn:f.mn,mx:f.mx,u:f.u,g:f.g,h:f.h})),h=t.value.trim().toLowerCase(),u={};l.filter(f=>!h||(f.k+" "+f.h+" "+f.g).toLowerCase().includes(h)).forEach(f=>(u[f.g]=u[f.g]||[]).push(f)),Object.entries(u).forEach(([f,m])=>{let d=P("table",{class:"ptable"},P("thead",null,P("tr",null,["Parameter","Wert","Einheit","Standard","Bereich","Beschreibung"].map(g=>P("th",null,g))))),_=P("tbody");m.forEach(g=>{let M=Q.par[g.k]!==void 0?Q.par[g.k]:g.v,b=P("input",{class:"pin"+(M!==g.d?" mod":""),type:"number",step:"any",value:M,min:g.mn,max:g.mx,disabled:!Q.connected,onchange:async()=>{let x=Sn(+b.value,g.mn,g.mx);b.value=x;let v=await nc(g.k,x);v&&v.ok&&(b.classList.toggle("mod",x!==g.d),e.add(g.k),r.classList.add("primary"))}});_.append(P("tr",null,P("td",{class:"mono"},g.k),P("td",null,b),P("td",{class:"dim"},g.u),P("td",{class:"dim",onclick:()=>{b.value=g.d,b.onchange()},title:"Klick setzt auf Standard",style:{cursor:"pointer"}},g.d),P("td",{class:"dim"},`${g.mn} bis ${g.mx}`),P("td",null,g.h)))}),d.append(_),s.append(He(f,d))})},r=Ue("Im Boot speichern",async()=>{let l=await Ee("SAVE","Parameter im Flash gespeichert");l&&l.ok&&(e.clear(),r.classList.remove("primary"))}),a=P("div",{class:"page"},P("div",{class:"toolbar"},t,Ue("Neu laden",async()=>{await zr()}),r,Ue("Standardwerte",async()=>{confirm("Alle Parameter im Boot auf Standard setzen?")&&(await Ee("DEFAULTS","Standardwerte gesetzt"),await zr())}),Ue("Export",()=>Ei("fathom_parameter.json",JSON.stringify(Object.fromEntries(Q.parList.map(l=>[l.k,Q.par[l.k]])),null,1))),Ue("Import",async()=>{let l=await Ao(".json");if(l)try{let h=JSON.parse(l),u=0;for(let[f,m]of Object.entries(h))(await Q.link.cmd(`SET ${f} ${m}`)).ok&&u++;ae(`${u} Parameter importiert, danach Speichern`,"ok"),await zr()}catch{ae("Datei ung\xFCltig","bad")}})),s);return Oe.on("par",()=>{Q.tab==="params"&&i()}),Oe.on("conn",i),{el:a,show:i,update(){}}}function Md(){let s=P("div",{class:"term"}),t=P("input",{type:"checkbox"}),e=P("input",{class:"in mono",placeholder:"Befehl, z. B. INFO, GET, STREAM 10",onkeydown:async m=>{if(m.key==="Enter"&&e.value.trim()){let d=e.value.trim();i.push(d),r=i.length,e.value="",Q.connected?await Q.link.cmd(d,4e3):ae("Nicht verbunden","bad")}m.key==="ArrowUp"&&r>0&&(e.value=i[--r]),m.key==="ArrowDown"&&r<i.length&&(e.value=i[++r]||"")}}),i=[],r=0,a=[],l=null,h=(m,d)=>{a.push([m,d]),l||(l=setTimeout(u,100))},u=()=>{l=null;let m=s.scrollTop+s.clientHeight>=s.scrollHeight-30;for(a.forEach(([d,_])=>s.append(P("div",{class:d},_.length>400?_.slice(0,400)+" \u2026":_))),a=[];s.childNodes.length>600;)s.firstChild.remove();m&&(s.scrollTop=s.scrollHeight)};return Oe.on("tx",m=>h("tx","> "+m)),Oe.on("rx",m=>{m.startsWith("T {")&&!t.checked||h(m.startsWith("ERR")?"rx err":"rx",m)}),{el:P("div",{class:"page"},P("div",{class:"toolbar"},P("label",{class:"chk"},t," Telemetrie anzeigen"),Ue("Leeren",()=>{s.innerHTML=""})),s,e),show(){s.scrollTop=s.scrollHeight},update(){}}}var Ps={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hm=0,bd=1,Vm=2;var Uf=1,Gm=2,Di=3,es=0,mn=1,zn=2,Qi=0,ar=1,Sd=2,wd=3,Td=4,Wm=5,vs=100,Zm=101,Xm=102,qm=103,Ym=104,Km=200,$m=201,Jm=202,jm=203,Uc=204,kc=205,Qm=206,tg=207,eg=208,ng=209,ig=210,sg=211,rg=212,og=213,ag=214,Bc=0,Fc=1,zc=2,dr=3,Hc=4,Vc=5,Gc=6,Wc=7,kf=0,lg=1,cg=2,ts=0,hg=1,ug=2,dg=3,fg=4,pg=5,mg=6,gg=7;var Bf=300,fr=301,pr=302,Zc=303,Xc=304,ol=306,qc=1e3,ys=1001,Yc=1002,ni=1003,_g=1004;var Ho=1005;var Hn=1006,ic=1007;var Ms=1008;var zi=1009,Ff=1010,zf=1011,Qr=1012,jh=1013,bs=1014,Oi=1015,lo=1016,Qh=1017,tu=1018,mr=1020,Hf=35902,Vf=1021,Gf=1022,ei=1023,Wf=1024,Zf=1025,lr=1026,gr=1027,Xf=1028,eu=1029,qf=1030,nu=1031;var iu=1033,Ma=33776,ba=33777,Sa=33778,wa=33779,Kc=35840,$c=35841,Jc=35842,jc=35843,Qc=36196,th=37492,eh=37496,nh=37808,ih=37809,sh=37810,rh=37811,oh=37812,ah=37813,lh=37814,ch=37815,hh=37816,uh=37817,dh=37818,fh=37819,ph=37820,mh=37821,Ta=36492,gh=36494,_h=36495,Yf=36283,vh=36284,xh=36285,yh=36286;var Ea=2300,Mh=2301,sc=2302,Ed=2400,Ad=2401,Pd=2402;var vg=3200,xg=3201;var Kf=0,yg=1,ji="",Fn="srgb",yr="srgb-linear",al="linear",Ie="srgb";var Vs=7680;var Cd=519,Mg=512,bg=513,Sg=514,$f=515,wg=516,Tg=517,Eg=518,Ag=519,bh=35044;var Rd="300 es",Ui=2e3,Aa=2001,Hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let a=r.indexOf(e);a!==-1&&r.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,t);t.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ld=1234567,cr=Math.PI/180,to=180/Math.PI;function Bi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function en(s,t,e){return Math.max(t,Math.min(e,s))}function su(s,t){return(s%t+t)%t}function Pg(s,t,e,i,r){return i+(s-t)*(r-i)/(e-t)}function Cg(s,t,e){return s!==t?(e-s)/(t-s):0}function Jr(s,t,e){return(1-e)*s+e*t}function Rg(s,t,e,i){return Jr(s,t,1-Math.exp(-e*i))}function Lg(s,t=1){return t-Math.abs(su(s,t*2)-t)}function Ig(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Dg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ng(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Og(s,t){return s+Math.random()*(t-s)}function Ug(s){return s*(.5-Math.random())}function kg(s){s!==void 0&&(Ld=s);let t=Ld+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bg(s){return s*cr}function Fg(s){return s*to}function zg(s){return(s&s-1)===0&&s!==0}function Hg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Vg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Gg(s,t,e,i,r){let a=Math.cos,l=Math.sin,h=a(e/2),u=l(e/2),f=a((t+i)/2),m=l((t+i)/2),d=a((t-i)/2),_=l((t-i)/2),g=a((i-t)/2),M=l((i-t)/2);switch(r){case"XYX":s.set(h*m,u*d,u*_,h*f);break;case"YZY":s.set(u*_,h*m,u*d,h*f);break;case"ZXZ":s.set(u*d,u*_,h*m,h*f);break;case"XZX":s.set(h*m,u*M,u*g,h*f);break;case"YXY":s.set(u*g,h*m,u*M,h*f);break;case"ZYZ":s.set(u*M,u*g,h*m,h*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ti(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Re(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ll={DEG2RAD:cr,RAD2DEG:to,generateUUID:Bi,clamp:en,euclideanModulo:su,mapLinear:Pg,inverseLerp:Cg,lerp:Jr,damp:Rg,pingpong:Lg,smoothstep:Ig,smootherstep:Dg,randInt:Ng,randFloat:Og,randFloatSpread:Ug,seededRandom:kg,degToRad:Bg,radToDeg:Fg,isPowerOfTwo:zg,ceilPowerOfTwo:Hg,floorPowerOfTwo:Vg,setQuaternionFromProperEuler:Gg,normalize:Re,denormalize:ti},Zt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(en(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),a=this.x-t.x,l=this.y-t.y;return this.x=a*i-l*r+t.x,this.y=a*r+l*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},re=class s{constructor(t,e,i,r,a,l,h,u,f){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,a,l,h,u,f)}set(t,e,i,r,a,l,h,u,f){let m=this.elements;return m[0]=t,m[1]=r,m[2]=h,m[3]=e,m[4]=a,m[5]=u,m[6]=i,m[7]=l,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,a=this.elements,l=i[0],h=i[3],u=i[6],f=i[1],m=i[4],d=i[7],_=i[2],g=i[5],M=i[8],b=r[0],x=r[3],v=r[6],R=r[1],S=r[4],w=r[7],k=r[2],C=r[5],D=r[8];return a[0]=l*b+h*R+u*k,a[3]=l*x+h*S+u*C,a[6]=l*v+h*w+u*D,a[1]=f*b+m*R+d*k,a[4]=f*x+m*S+d*C,a[7]=f*v+m*w+d*D,a[2]=_*b+g*R+M*k,a[5]=_*x+g*S+M*C,a[8]=_*v+g*w+M*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],a=t[3],l=t[4],h=t[5],u=t[6],f=t[7],m=t[8];return e*l*m-e*h*f-i*a*m+i*h*u+r*a*f-r*l*u}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],a=t[3],l=t[4],h=t[5],u=t[6],f=t[7],m=t[8],d=m*l-h*f,_=h*u-m*a,g=f*a-l*u,M=e*d+i*_+r*g;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/M;return t[0]=d*b,t[1]=(r*f-m*i)*b,t[2]=(h*i-r*l)*b,t[3]=_*b,t[4]=(m*e-r*u)*b,t[5]=(r*a-h*e)*b,t[6]=g*b,t[7]=(i*u-f*e)*b,t[8]=(l*e-i*a)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,a,l,h){let u=Math.cos(a),f=Math.sin(a);return this.set(i*u,i*f,-i*(u*l+f*h)+l+t,-r*f,r*u,-r*(-f*l+u*h)+h+e,0,0,1),this}scale(t,e){return this.premultiply(rc.makeScale(t,e)),this}rotate(t){return this.premultiply(rc.makeRotation(-t)),this}translate(t,e){return this.premultiply(rc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},rc=new re;function Jf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Pa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Wg(){let s=Pa("canvas");return s.style.display="block",s}var Id={};function Kr(s){s in Id||(Id[s]=!0,console.warn(s))}function Zg(s,t,e){return new Promise(function(i,r){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:r();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}function Xg(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qg(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Se={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ie&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ie&&(s.r=hr(s.r),s.g=hr(s.g),s.b=hr(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ji?al:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Fi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function hr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Dd=[.64,.33,.3,.6,.15,.06],Nd=[.2126,.7152,.0722],Od=[.3127,.329],Ud=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kd=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Se.define({[yr]:{primaries:Dd,whitePoint:Od,transfer:al,toXYZ:Ud,fromXYZ:kd,luminanceCoefficients:Nd,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:Dd,whitePoint:Od,transfer:Ie,toXYZ:Ud,fromXYZ:kd,luminanceCoefficients:Nd,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}});var Gs,Sh=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gs===void 0&&(Gs=Pa("canvas")),Gs.width=t.width,Gs.height=t.height;let i=Gs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Gs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Pa("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=Fi(a[l]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Fi(e[i]/255)*255):e[i]=Fi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Yg=0,Ca=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Bi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,h=r.length;l<h;l++)r[l].isDataTexture?a.push(oc(r[l].image)):a.push(oc(r[l]))}else a=oc(r);i.url=a}return e||(t.images[this.uuid]=i),i}};function oc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Sh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Kg=0,Nn=class s extends Hi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=ys,r=ys,a=Hn,l=Ms,h=ei,u=zi,f=s.DEFAULT_ANISOTROPY,m=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=Bi(),this.name="",this.source=new Ca(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=f,this.format=h,this.internalFormat=null,this.type=u,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qc:t.x=t.x-Math.floor(t.x);break;case ys:t.x=t.x<0?0:1;break;case Yc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qc:t.y=t.y-Math.floor(t.y);break;case ys:t.y=t.y<0?0:1;break;case Yc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Bf;Nn.DEFAULT_ANISOTROPY=1;var De=class s{constructor(t=0,e=0,i=0,r=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,a=this.w,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*r+l[12]*a,this.y=l[1]*e+l[5]*i+l[9]*r+l[13]*a,this.z=l[2]*e+l[6]*i+l[10]*r+l[14]*a,this.w=l[3]*e+l[7]*i+l[11]*r+l[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,a,u=t.elements,f=u[0],m=u[4],d=u[8],_=u[1],g=u[5],M=u[9],b=u[2],x=u[6],v=u[10];if(Math.abs(m-_)<.01&&Math.abs(d-b)<.01&&Math.abs(M-x)<.01){if(Math.abs(m+_)<.1&&Math.abs(d+b)<.1&&Math.abs(M+x)<.1&&Math.abs(f+g+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(f+1)/2,w=(g+1)/2,k=(v+1)/2,C=(m+_)/4,D=(d+b)/4,O=(M+x)/4;return S>w&&S>k?S<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(S),r=C/i,a=D/i):w>k?w<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(w),i=C/r,a=O/r):k<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(k),i=D/a,r=O/a),this.set(i,r,a,e),this}let R=Math.sqrt((x-M)*(x-M)+(d-b)*(d-b)+(_-m)*(_-m));return Math.abs(R)<.001&&(R=1),this.x=(x-M)/R,this.y=(d-b)/R,this.z=(_-m)/R,this.w=Math.acos((f+g+v-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wh=class extends Hi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);let r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let a=new Nn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];let l=i.count;for(let h=0;h<l;h++)this.textures[h]=a.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ca(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vi=class extends wh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ra=class extends Nn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ni,this.minFilter=ni,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Th=class extends Nn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ni,this.minFilter=ni,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ii=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,a,l,h){let u=i[r+0],f=i[r+1],m=i[r+2],d=i[r+3],_=a[l+0],g=a[l+1],M=a[l+2],b=a[l+3];if(h===0){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=d;return}if(h===1){t[e+0]=_,t[e+1]=g,t[e+2]=M,t[e+3]=b;return}if(d!==b||u!==_||f!==g||m!==M){let x=1-h,v=u*_+f*g+m*M+d*b,R=v>=0?1:-1,S=1-v*v;if(S>Number.EPSILON){let k=Math.sqrt(S),C=Math.atan2(k,v*R);x=Math.sin(x*C)/k,h=Math.sin(h*C)/k}let w=h*R;if(u=u*x+_*w,f=f*x+g*w,m=m*x+M*w,d=d*x+b*w,x===1-h){let k=1/Math.sqrt(u*u+f*f+m*m+d*d);u*=k,f*=k,m*=k,d*=k}}t[e]=u,t[e+1]=f,t[e+2]=m,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,r,a,l){let h=i[r],u=i[r+1],f=i[r+2],m=i[r+3],d=a[l],_=a[l+1],g=a[l+2],M=a[l+3];return t[e]=h*M+m*d+u*g-f*_,t[e+1]=u*M+m*_+f*d-h*g,t[e+2]=f*M+m*g+h*_-u*d,t[e+3]=m*M-h*d-u*_-f*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,a=t._z,l=t._order,h=Math.cos,u=Math.sin,f=h(i/2),m=h(r/2),d=h(a/2),_=u(i/2),g=u(r/2),M=u(a/2);switch(l){case"XYZ":this._x=_*m*d+f*g*M,this._y=f*g*d-_*m*M,this._z=f*m*M+_*g*d,this._w=f*m*d-_*g*M;break;case"YXZ":this._x=_*m*d+f*g*M,this._y=f*g*d-_*m*M,this._z=f*m*M-_*g*d,this._w=f*m*d+_*g*M;break;case"ZXY":this._x=_*m*d-f*g*M,this._y=f*g*d+_*m*M,this._z=f*m*M+_*g*d,this._w=f*m*d-_*g*M;break;case"ZYX":this._x=_*m*d-f*g*M,this._y=f*g*d+_*m*M,this._z=f*m*M-_*g*d,this._w=f*m*d+_*g*M;break;case"YZX":this._x=_*m*d+f*g*M,this._y=f*g*d+_*m*M,this._z=f*m*M-_*g*d,this._w=f*m*d-_*g*M;break;case"XZY":this._x=_*m*d-f*g*M,this._y=f*g*d-_*m*M,this._z=f*m*M+_*g*d,this._w=f*m*d+_*g*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],a=e[8],l=e[1],h=e[5],u=e[9],f=e[2],m=e[6],d=e[10],_=i+h+d;if(_>0){let g=.5/Math.sqrt(_+1);this._w=.25/g,this._x=(m-u)*g,this._y=(a-f)*g,this._z=(l-r)*g}else if(i>h&&i>d){let g=2*Math.sqrt(1+i-h-d);this._w=(m-u)/g,this._x=.25*g,this._y=(r+l)/g,this._z=(a+f)/g}else if(h>d){let g=2*Math.sqrt(1+h-i-d);this._w=(a-f)/g,this._x=(r+l)/g,this._y=.25*g,this._z=(u+m)/g}else{let g=2*Math.sqrt(1+d-i-h);this._w=(l-r)/g,this._x=(a+f)/g,this._y=(u+m)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,a=t._z,l=t._w,h=e._x,u=e._y,f=e._z,m=e._w;return this._x=i*m+l*h+r*f-a*u,this._y=r*m+l*u+a*h-i*f,this._z=a*m+l*f+i*u-r*h,this._w=l*m-i*h-r*u-a*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,r=this._y,a=this._z,l=this._w,h=l*t._w+i*t._x+r*t._y+a*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=l,this._x=i,this._y=r,this._z=a,this;let u=1-h*h;if(u<=Number.EPSILON){let g=1-e;return this._w=g*l+e*this._w,this._x=g*i+e*this._x,this._y=g*r+e*this._y,this._z=g*a+e*this._z,this.normalize(),this}let f=Math.sqrt(u),m=Math.atan2(f,h),d=Math.sin((1-e)*m)/f,_=Math.sin(e*m)/f;return this._w=l*d+this._w*_,this._x=i*d+this._x*_,this._y=r*d+this._y*_,this._z=a*d+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*r,this.y=a[1]*e+a[4]*i+a[7]*r,this.z=a[2]*e+a[5]*i+a[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,a=t.elements,l=1/(a[3]*e+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*r+a[12])*l,this.y=(a[1]*e+a[5]*i+a[9]*r+a[13])*l,this.z=(a[2]*e+a[6]*i+a[10]*r+a[14])*l,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,a=t.x,l=t.y,h=t.z,u=t.w,f=2*(l*r-h*i),m=2*(h*e-a*r),d=2*(a*i-l*e);return this.x=e+u*f+l*d-h*m,this.y=i+u*m+h*f-a*d,this.z=r+u*d+a*m-l*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r,this.y=a[1]*e+a[5]*i+a[9]*r,this.z=a[2]*e+a[6]*i+a[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,a=t.z,l=e.x,h=e.y,u=e.z;return this.x=r*u-a*h,this.y=a*l-i*u,this.z=i*h-r*l,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ac.copy(this).projectOnVector(t),this.sub(ac)}reflect(t){return this.sub(ac.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(en(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ac=new z,Bd=new ii,Vn=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint($n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint($n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=$n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let l=0,h=a.count;l<h;l++)t.isMesh===!0?t.getVertexPosition(l,$n):$n.fromBufferAttribute(a,l),$n.applyMatrix4(t.matrixWorld),this.expandByPoint($n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vo.copy(i.boundingBox)),Vo.applyMatrix4(t.matrixWorld),this.union(Vo)}let r=t.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$n),$n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hr),Go.subVectors(this.max,Hr),Ws.subVectors(t.a,Hr),Zs.subVectors(t.b,Hr),Xs.subVectors(t.c,Hr),Xi.subVectors(Zs,Ws),qi.subVectors(Xs,Zs),us.subVectors(Ws,Xs);let e=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-us.z,us.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,us.z,0,-us.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-us.y,us.x,0];return!lc(e,Ws,Zs,Xs,Go)||(e=[1,0,0,0,1,0,0,0,1],!lc(e,Ws,Zs,Xs,Go))?!1:(Wo.crossVectors(Xi,qi),e=[Wo.x,Wo.y,Wo.z],lc(e,Ws,Zs,Xs,Go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Pi=[new z,new z,new z,new z,new z,new z,new z,new z],$n=new z,Vo=new Vn,Ws=new z,Zs=new z,Xs=new z,Xi=new z,qi=new z,us=new z,Hr=new z,Go=new z,Wo=new z,ds=new z;function lc(s,t,e,i,r){for(let a=0,l=s.length-3;a<=l;a+=3){ds.fromArray(s,a);let h=r.x*Math.abs(ds.x)+r.y*Math.abs(ds.y)+r.z*Math.abs(ds.z),u=t.dot(ds),f=e.dot(ds),m=i.dot(ds);if(Math.max(-Math.max(u,f,m),Math.min(u,f,m))>h)return!1}return!0}var $g=new Vn,Vr=new z,cc=new z,si=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):$g.setFromPoints(t).getCenter(i);let r=0;for(let a=0,l=t.length;a<l;a++)r=Math.max(r,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vr.subVectors(t,this.center);let e=Vr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Vr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vr.copy(t.center).add(cc)),this.expandByPoint(Vr.copy(t.center).sub(cc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ci=new z,hc=new z,Zo=new z,Yi=new z,uc=new z,Xo=new z,dc=new z,Ss=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){hc.copy(t).add(e).multiplyScalar(.5),Zo.copy(e).sub(t).normalize(),Yi.copy(this.origin).sub(hc);let a=t.distanceTo(e)*.5,l=-this.direction.dot(Zo),h=Yi.dot(this.direction),u=-Yi.dot(Zo),f=Yi.lengthSq(),m=Math.abs(1-l*l),d,_,g,M;if(m>0)if(d=l*u-h,_=l*h-u,M=a*m,d>=0)if(_>=-M)if(_<=M){let b=1/m;d*=b,_*=b,g=d*(d+l*_+2*h)+_*(l*d+_+2*u)+f}else _=a,d=Math.max(0,-(l*_+h)),g=-d*d+_*(_+2*u)+f;else _=-a,d=Math.max(0,-(l*_+h)),g=-d*d+_*(_+2*u)+f;else _<=-M?(d=Math.max(0,-(-l*a+h)),_=d>0?-a:Math.min(Math.max(-a,-u),a),g=-d*d+_*(_+2*u)+f):_<=M?(d=0,_=Math.min(Math.max(-a,-u),a),g=_*(_+2*u)+f):(d=Math.max(0,-(l*a+h)),_=d>0?a:Math.min(Math.max(-a,-u),a),g=-d*d+_*(_+2*u)+f);else _=l>0?-a:a,d=Math.max(0,-(l*_+h)),g=-d*d+_*(_+2*u)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(hc).addScaledVector(Zo,_),g}intersectSphere(t,e){Ci.subVectors(t.center,this.origin);let i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,a=t.radius*t.radius;if(r>a)return null;let l=Math.sqrt(a-r),h=i-l,u=i+l;return u<0?null:h<0?this.at(u,e):this.at(h,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,a,l,h,u,f=1/this.direction.x,m=1/this.direction.y,d=1/this.direction.z,_=this.origin;return f>=0?(i=(t.min.x-_.x)*f,r=(t.max.x-_.x)*f):(i=(t.max.x-_.x)*f,r=(t.min.x-_.x)*f),m>=0?(a=(t.min.y-_.y)*m,l=(t.max.y-_.y)*m):(a=(t.max.y-_.y)*m,l=(t.min.y-_.y)*m),i>l||a>r||((a>i||isNaN(i))&&(i=a),(l<r||isNaN(r))&&(r=l),d>=0?(h=(t.min.z-_.z)*d,u=(t.max.z-_.z)*d):(h=(t.max.z-_.z)*d,u=(t.min.z-_.z)*d),i>u||h>r)||((h>i||i!==i)&&(i=h),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,i,r,a){uc.subVectors(e,t),Xo.subVectors(i,t),dc.crossVectors(uc,Xo);let l=this.direction.dot(dc),h;if(l>0){if(r)return null;h=1}else if(l<0)h=-1,l=-l;else return null;Yi.subVectors(this.origin,t);let u=h*this.direction.dot(Xo.crossVectors(Yi,Xo));if(u<0)return null;let f=h*this.direction.dot(uc.cross(Yi));if(f<0||u+f>l)return null;let m=-h*Yi.dot(dc);return m<0?null:this.at(m/l,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fe=class s{constructor(t,e,i,r,a,l,h,u,f,m,d,_,g,M,b,x){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,a,l,h,u,f,m,d,_,g,M,b,x)}set(t,e,i,r,a,l,h,u,f,m,d,_,g,M,b,x){let v=this.elements;return v[0]=t,v[4]=e,v[8]=i,v[12]=r,v[1]=a,v[5]=l,v[9]=h,v[13]=u,v[2]=f,v[6]=m,v[10]=d,v[14]=_,v[3]=g,v[7]=M,v[11]=b,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,r=1/qs.setFromMatrixColumn(t,0).length(),a=1/qs.setFromMatrixColumn(t,1).length(),l=1/qs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*l,e[9]=i[9]*l,e[10]=i[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,a=t.z,l=Math.cos(i),h=Math.sin(i),u=Math.cos(r),f=Math.sin(r),m=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let _=l*m,g=l*d,M=h*m,b=h*d;e[0]=u*m,e[4]=-u*d,e[8]=f,e[1]=g+M*f,e[5]=_-b*f,e[9]=-h*u,e[2]=b-_*f,e[6]=M+g*f,e[10]=l*u}else if(t.order==="YXZ"){let _=u*m,g=u*d,M=f*m,b=f*d;e[0]=_+b*h,e[4]=M*h-g,e[8]=l*f,e[1]=l*d,e[5]=l*m,e[9]=-h,e[2]=g*h-M,e[6]=b+_*h,e[10]=l*u}else if(t.order==="ZXY"){let _=u*m,g=u*d,M=f*m,b=f*d;e[0]=_-b*h,e[4]=-l*d,e[8]=M+g*h,e[1]=g+M*h,e[5]=l*m,e[9]=b-_*h,e[2]=-l*f,e[6]=h,e[10]=l*u}else if(t.order==="ZYX"){let _=l*m,g=l*d,M=h*m,b=h*d;e[0]=u*m,e[4]=M*f-g,e[8]=_*f+b,e[1]=u*d,e[5]=b*f+_,e[9]=g*f-M,e[2]=-f,e[6]=h*u,e[10]=l*u}else if(t.order==="YZX"){let _=l*u,g=l*f,M=h*u,b=h*f;e[0]=u*m,e[4]=b-_*d,e[8]=M*d+g,e[1]=d,e[5]=l*m,e[9]=-h*m,e[2]=-f*m,e[6]=g*d+M,e[10]=_-b*d}else if(t.order==="XZY"){let _=l*u,g=l*f,M=h*u,b=h*f;e[0]=u*m,e[4]=-d,e[8]=f*m,e[1]=_*d+b,e[5]=l*m,e[9]=g*d-M,e[2]=M*d-g,e[6]=h*m,e[10]=b*d+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jg,t,jg)}lookAt(t,e,i){let r=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Ki.crossVectors(i,Ln),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Ki.crossVectors(i,Ln)),Ki.normalize(),qo.crossVectors(Ln,Ki),r[0]=Ki.x,r[4]=qo.x,r[8]=Ln.x,r[1]=Ki.y,r[5]=qo.y,r[9]=Ln.y,r[2]=Ki.z,r[6]=qo.z,r[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,a=this.elements,l=i[0],h=i[4],u=i[8],f=i[12],m=i[1],d=i[5],_=i[9],g=i[13],M=i[2],b=i[6],x=i[10],v=i[14],R=i[3],S=i[7],w=i[11],k=i[15],C=r[0],D=r[4],O=r[8],E=r[12],T=r[1],B=r[5],X=r[9],W=r[13],K=r[2],it=r[6],H=r[10],ut=r[14],G=r[3],lt=r[7],rt=r[11],ot=r[15];return a[0]=l*C+h*T+u*K+f*G,a[4]=l*D+h*B+u*it+f*lt,a[8]=l*O+h*X+u*H+f*rt,a[12]=l*E+h*W+u*ut+f*ot,a[1]=m*C+d*T+_*K+g*G,a[5]=m*D+d*B+_*it+g*lt,a[9]=m*O+d*X+_*H+g*rt,a[13]=m*E+d*W+_*ut+g*ot,a[2]=M*C+b*T+x*K+v*G,a[6]=M*D+b*B+x*it+v*lt,a[10]=M*O+b*X+x*H+v*rt,a[14]=M*E+b*W+x*ut+v*ot,a[3]=R*C+S*T+w*K+k*G,a[7]=R*D+S*B+w*it+k*lt,a[11]=R*O+S*X+w*H+k*rt,a[15]=R*E+S*W+w*ut+k*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],a=t[12],l=t[1],h=t[5],u=t[9],f=t[13],m=t[2],d=t[6],_=t[10],g=t[14],M=t[3],b=t[7],x=t[11],v=t[15];return M*(+a*u*d-r*f*d-a*h*_+i*f*_+r*h*g-i*u*g)+b*(+e*u*g-e*f*_+a*l*_-r*l*g+r*f*m-a*u*m)+x*(+e*f*d-e*h*g-a*l*d+i*l*g+a*h*m-i*f*m)+v*(-r*h*m-e*u*d+e*h*_+r*l*d-i*l*_+i*u*m)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],a=t[3],l=t[4],h=t[5],u=t[6],f=t[7],m=t[8],d=t[9],_=t[10],g=t[11],M=t[12],b=t[13],x=t[14],v=t[15],R=d*x*f-b*_*f+b*u*g-h*x*g-d*u*v+h*_*v,S=M*_*f-m*x*f-M*u*g+l*x*g+m*u*v-l*_*v,w=m*b*f-M*d*f+M*h*g-l*b*g-m*h*v+l*d*v,k=M*d*u-m*b*u-M*h*_+l*b*_+m*h*x-l*d*x,C=e*R+i*S+r*w+a*k;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return t[0]=R*D,t[1]=(b*_*a-d*x*a-b*r*g+i*x*g+d*r*v-i*_*v)*D,t[2]=(h*x*a-b*u*a+b*r*f-i*x*f-h*r*v+i*u*v)*D,t[3]=(d*u*a-h*_*a-d*r*f+i*_*f+h*r*g-i*u*g)*D,t[4]=S*D,t[5]=(m*x*a-M*_*a+M*r*g-e*x*g-m*r*v+e*_*v)*D,t[6]=(M*u*a-l*x*a-M*r*f+e*x*f+l*r*v-e*u*v)*D,t[7]=(l*_*a-m*u*a+m*r*f-e*_*f-l*r*g+e*u*g)*D,t[8]=w*D,t[9]=(M*d*a-m*b*a-M*i*g+e*b*g+m*i*v-e*d*v)*D,t[10]=(l*b*a-M*h*a+M*i*f-e*b*f-l*i*v+e*h*v)*D,t[11]=(m*h*a-l*d*a-m*i*f+e*d*f+l*i*g-e*h*g)*D,t[12]=k*D,t[13]=(m*b*r-M*d*r+M*i*_-e*b*_-m*i*x+e*d*x)*D,t[14]=(M*h*r-l*b*r-M*i*u+e*b*u+l*i*x-e*h*x)*D,t[15]=(l*d*r-m*h*r+m*i*u-e*d*u-l*i*_+e*h*_)*D,this}scale(t){let e=this.elements,i=t.x,r=t.y,a=t.z;return e[0]*=i,e[4]*=r,e[8]*=a,e[1]*=i,e[5]*=r,e[9]*=a,e[2]*=i,e[6]*=r,e[10]*=a,e[3]*=i,e[7]*=r,e[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),a=1-i,l=t.x,h=t.y,u=t.z,f=a*l,m=a*h;return this.set(f*l+i,f*h-r*u,f*u+r*h,0,f*h+r*u,m*h+i,m*u-r*l,0,f*u-r*h,m*u+r*l,a*u*u+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,a,l){return this.set(1,i,a,0,t,1,l,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,a=e._x,l=e._y,h=e._z,u=e._w,f=a+a,m=l+l,d=h+h,_=a*f,g=a*m,M=a*d,b=l*m,x=l*d,v=h*d,R=u*f,S=u*m,w=u*d,k=i.x,C=i.y,D=i.z;return r[0]=(1-(b+v))*k,r[1]=(g+w)*k,r[2]=(M-S)*k,r[3]=0,r[4]=(g-w)*C,r[5]=(1-(_+v))*C,r[6]=(x+R)*C,r[7]=0,r[8]=(M+S)*D,r[9]=(x-R)*D,r[10]=(1-(_+b))*D,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements,a=qs.set(r[0],r[1],r[2]).length(),l=qs.set(r[4],r[5],r[6]).length(),h=qs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),t.x=r[12],t.y=r[13],t.z=r[14],Jn.copy(this);let f=1/a,m=1/l,d=1/h;return Jn.elements[0]*=f,Jn.elements[1]*=f,Jn.elements[2]*=f,Jn.elements[4]*=m,Jn.elements[5]*=m,Jn.elements[6]*=m,Jn.elements[8]*=d,Jn.elements[9]*=d,Jn.elements[10]*=d,e.setFromRotationMatrix(Jn),i.x=a,i.y=l,i.z=h,this}makePerspective(t,e,i,r,a,l,h=Ui){let u=this.elements,f=2*a/(e-t),m=2*a/(i-r),d=(e+t)/(e-t),_=(i+r)/(i-r),g,M;if(h===Ui)g=-(l+a)/(l-a),M=-2*l*a/(l-a);else if(h===Aa)g=-l/(l-a),M=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return u[0]=f,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=m,u[9]=_,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,i,r,a,l,h=Ui){let u=this.elements,f=1/(e-t),m=1/(i-r),d=1/(l-a),_=(e+t)*f,g=(i+r)*m,M,b;if(h===Ui)M=(l+a)*d,b=-2*d;else if(h===Aa)M=a*d,b=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return u[0]=2*f,u[4]=0,u[8]=0,u[12]=-_,u[1]=0,u[5]=2*m,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=b,u[14]=-M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},qs=new z,Jn=new Fe,Jg=new z(0,0,0),jg=new z(1,1,1),Ki=new z,qo=new z,Ln=new z,Fd=new Fe,zd=new ii,gi=class s{constructor(t=0,e=0,i=0,r=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,a=r[0],l=r[4],h=r[8],u=r[1],f=r[5],m=r[9],d=r[2],_=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(en(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,g),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-en(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(h,g),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(en(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(u,a));break;case"ZYX":this._y=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,g),this._z=Math.atan2(u,a)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(en(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(h,g));break;case"XZY":this._z=Math.asin(-en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(h,a)):(this._x=Math.atan2(-m,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Fd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zd.setFromEuler(this),this.setFromQuaternion(zd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gi.DEFAULT_ORDER="XYZ";var La=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Qg=0,Hd=new z,Ys=new ii,Ri=new Fe,Yo=new z,Gr=new z,t_=new z,e_=new ii,Vd=new z(1,0,0),Gd=new z(0,1,0),Wd=new z(0,0,1),Zd={type:"added"},n_={type:"removed"},Ks={type:"childadded",child:null},fc={type:"childremoved",child:null},nn=class s extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new z,e=new gi,i=new ii,r=new z(1,1,1);function a(){i.setFromEuler(e,!1)}function l(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Fe},normalMatrix:{value:new re}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new La,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.premultiply(Ys),this}rotateX(t){return this.rotateOnAxis(Vd,t)}rotateY(t){return this.rotateOnAxis(Gd,t)}rotateZ(t){return this.rotateOnAxis(Wd,t)}translateOnAxis(t,e){return Hd.copy(t).applyQuaternion(this.quaternion),this.position.add(Hd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vd,t)}translateY(t){return this.translateOnAxis(Gd,t)}translateZ(t){return this.translateOnAxis(Wd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Yo.copy(t):Yo.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Gr,Yo,this.up):Ri.lookAt(Yo,Gr,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),Ys.setFromRotationMatrix(Ri),this.quaternion.premultiply(Ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zd),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(n_),fc.child=t,this.dispatchEvent(fc),fc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zd),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let l=this.children[i].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,t,t_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(h,u){return h[u.uuid]===void 0&&(h[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);let h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){let u=h.shapes;if(Array.isArray(u))for(let f=0,m=u.length;f<m;f++){let d=u[f];a(t.shapes,d)}else a(t.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let h=[];for(let u=0,f=this.material.length;u<f;u++)h.push(a(t.materials,this.material[u]));r.material=h}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){let u=this.animations[h];r.animations.push(a(t.animations,u))}}if(e){let h=l(t.geometries),u=l(t.materials),f=l(t.textures),m=l(t.images),d=l(t.shapes),_=l(t.skeletons),g=l(t.animations),M=l(t.nodes);h.length>0&&(i.geometries=h),u.length>0&&(i.materials=u),f.length>0&&(i.textures=f),m.length>0&&(i.images=m),d.length>0&&(i.shapes=d),_.length>0&&(i.skeletons=_),g.length>0&&(i.animations=g),M.length>0&&(i.nodes=M)}return i.object=r,i;function l(h){let u=[];for(let f in h){let m=h[f];delete m.metadata,u.push(m)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}};nn.DEFAULT_UP=new z(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=new z,Li=new z,pc=new z,Ii=new z,$s=new z,Js=new z,Xd=new z,mc=new z,gc=new z,_c=new z,vc=new De,xc=new De,yc=new De,Ni=class s{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),jn.subVectors(t,e),r.cross(jn);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(t,e,i,r,a){jn.subVectors(r,e),Li.subVectors(i,e),pc.subVectors(t,e);let l=jn.dot(jn),h=jn.dot(Li),u=jn.dot(pc),f=Li.dot(Li),m=Li.dot(pc),d=l*f-h*h;if(d===0)return a.set(0,0,0),null;let _=1/d,g=(f*u-h*m)*_,M=(l*m-h*u)*_;return a.set(1-g-M,M,g)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,e,i,r,a,l,h,u){return this.getBarycoord(t,e,i,r,Ii)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(a,Ii.x),u.addScaledVector(l,Ii.y),u.addScaledVector(h,Ii.z),u)}static getInterpolatedAttribute(t,e,i,r,a,l){return vc.setScalar(0),xc.setScalar(0),yc.setScalar(0),vc.fromBufferAttribute(t,e),xc.fromBufferAttribute(t,i),yc.fromBufferAttribute(t,r),l.setScalar(0),l.addScaledVector(vc,a.x),l.addScaledVector(xc,a.y),l.addScaledVector(yc,a.z),l}static isFrontFacing(t,e,i,r){return jn.subVectors(i,e),Li.subVectors(t,e),jn.cross(Li).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),jn.cross(Li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,a){return s.getInterpolation(t,this.a,this.b,this.c,e,i,r,a)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,a=this.c,l,h;$s.subVectors(r,i),Js.subVectors(a,i),mc.subVectors(t,i);let u=$s.dot(mc),f=Js.dot(mc);if(u<=0&&f<=0)return e.copy(i);gc.subVectors(t,r);let m=$s.dot(gc),d=Js.dot(gc);if(m>=0&&d<=m)return e.copy(r);let _=u*d-m*f;if(_<=0&&u>=0&&m<=0)return l=u/(u-m),e.copy(i).addScaledVector($s,l);_c.subVectors(t,a);let g=$s.dot(_c),M=Js.dot(_c);if(M>=0&&g<=M)return e.copy(a);let b=g*f-u*M;if(b<=0&&f>=0&&M<=0)return h=f/(f-M),e.copy(i).addScaledVector(Js,h);let x=m*M-g*d;if(x<=0&&d-m>=0&&g-M>=0)return Xd.subVectors(a,r),h=(d-m)/(d-m+(g-M)),e.copy(r).addScaledVector(Xd,h);let v=1/(x+b+_);return l=b*v,h=_*v,e.copy(i).addScaledVector($s,l).addScaledVector(Js,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function Mc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var fe=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Se.workingColorSpace){return this.r=t,this.g=e,this.b=i,Se.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Se.workingColorSpace){if(t=su(t,1),e=en(e,0,1),i=en(i,0,1),e===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+e):i+e-i*e,l=2*i-a;this.r=Mc(l,a,t+1/3),this.g=Mc(l,a,t),this.b=Mc(l,a,t-1/3)}return Se.toWorkingColorSpace(this,r),this}setStyle(t,e=Fn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,l=r[1],h=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fn){let i=jf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}copyLinearToSRGB(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fn){return Se.fromWorkingColorSpace(pn.copy(this),t),Math.round(en(pn.r*255,0,255))*65536+Math.round(en(pn.g*255,0,255))*256+Math.round(en(pn.b*255,0,255))}getHexString(t=Fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.fromWorkingColorSpace(pn.copy(this),e);let i=pn.r,r=pn.g,a=pn.b,l=Math.max(i,r,a),h=Math.min(i,r,a),u,f,m=(h+l)/2;if(h===l)u=0,f=0;else{let d=l-h;switch(f=m<=.5?d/(l+h):d/(2-l-h),l){case i:u=(r-a)/d+(r<a?6:0);break;case r:u=(a-i)/d+2;break;case a:u=(i-r)/d+4;break}u/=6}return t.h=u,t.s=f,t.l=m,t}getRGB(t,e=Se.workingColorSpace){return Se.fromWorkingColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=Fn){Se.fromWorkingColorSpace(pn.copy(this),t);let e=pn.r,i=pn.g,r=pn.b;return t!==Fn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL($i),this.setHSL($i.h+t,$i.s+e,$i.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL($i),t.getHSL(Ko);let i=Jr($i.h,Ko.h,e),r=Jr($i.s,Ko.s,e),a=Jr($i.l,Ko.l,e);return this.setHSL(i,r,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*r,this.g=a[1]*e+a[4]*i+a[7]*r,this.b=a[2]*e+a[5]*i+a[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new fe;fe.NAMES=jf;var i_=0,_i=class extends Hi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=Bi(),this.name="",this.blending=ar,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=kc,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(i.blending=this.blending),this.side!==es&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Uc&&(i.blendSrc=this.blendSrc),this.blendDst!==kc&&(i.blendDst=this.blendDst),this.blendEquation!==vs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let l=[];for(let h in a){let u=a[h];delete u.metadata,l.push(u)}return l}if(e){let a=r(t.textures),l=r(t.images);a.length>0&&(i.textures=a),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Gn=class extends _i{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ye=new z,$o=new Zt,Dn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=bh,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)$o.fromBufferAttribute(this,e),$o.applyMatrix3(t),this.setXY(e,$o.x,$o.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Re(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,a){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),r=Re(r,this.array),a=Re(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bh&&(t.usage=this.usage),t}};var Ia=class extends Dn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Da=class extends Dn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ve=class extends Dn{constructor(t,e,i){super(new Float32Array(t),e,i)}},s_=0,Bn=new Fe,bc=new nn,js=new z,In=new Vn,Wr=new Vn,tn=new z,Ge=class s extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jf(t)?Da:Ia)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new re().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Bn.makeRotationFromQuaternion(t),this.applyMatrix4(Bn),this}rotateX(t){return Bn.makeRotationX(t),this.applyMatrix4(Bn),this}rotateY(t){return Bn.makeRotationY(t),this.applyMatrix4(Bn),this}rotateZ(t){return Bn.makeRotationZ(t),this.applyMatrix4(Bn),this}translate(t,e,i){return Bn.makeTranslation(t,e,i),this.applyMatrix4(Bn),this}scale(t,e,i){return Bn.makeScale(t,e,i),this.applyMatrix4(Bn),this}lookAt(t){return bc.lookAt(t),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let r=0,a=t.length;r<a;r++){let l=t[r];i.push(l.x,l.y,l.z||0)}this.setAttribute("position",new ve(i,3))}else{for(let i=0,r=e.count;i<r;i++){let a=t[i];e.setXYZ(i,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let a=e[i];In.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let i=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let a=0,l=e.length;a<l;a++){let h=e[a];Wr.setFromBufferAttribute(h),this.morphTargetsRelative?(tn.addVectors(In.min,Wr.min),In.expandByPoint(tn),tn.addVectors(In.max,Wr.max),In.expandByPoint(tn)):(In.expandByPoint(Wr.min),In.expandByPoint(Wr.max))}In.getCenter(i);let r=0;for(let a=0,l=t.count;a<l;a++)tn.fromBufferAttribute(t,a),r=Math.max(r,i.distanceToSquared(tn));if(e)for(let a=0,l=e.length;a<l;a++){let h=e[a],u=this.morphTargetsRelative;for(let f=0,m=h.count;f<m;f++)tn.fromBufferAttribute(h,f),u&&(js.fromBufferAttribute(t,f),tn.add(js)),r=Math.max(r,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,r=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*i.count),4));let l=this.getAttribute("tangent"),h=[],u=[];for(let O=0;O<i.count;O++)h[O]=new z,u[O]=new z;let f=new z,m=new z,d=new z,_=new Zt,g=new Zt,M=new Zt,b=new z,x=new z;function v(O,E,T){f.fromBufferAttribute(i,O),m.fromBufferAttribute(i,E),d.fromBufferAttribute(i,T),_.fromBufferAttribute(a,O),g.fromBufferAttribute(a,E),M.fromBufferAttribute(a,T),m.sub(f),d.sub(f),g.sub(_),M.sub(_);let B=1/(g.x*M.y-M.x*g.y);isFinite(B)&&(b.copy(m).multiplyScalar(M.y).addScaledVector(d,-g.y).multiplyScalar(B),x.copy(d).multiplyScalar(g.x).addScaledVector(m,-M.x).multiplyScalar(B),h[O].add(b),h[E].add(b),h[T].add(b),u[O].add(x),u[E].add(x),u[T].add(x))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let O=0,E=R.length;O<E;++O){let T=R[O],B=T.start,X=T.count;for(let W=B,K=B+X;W<K;W+=3)v(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let S=new z,w=new z,k=new z,C=new z;function D(O){k.fromBufferAttribute(r,O),C.copy(k);let E=h[O];S.copy(E),S.sub(k.multiplyScalar(k.dot(E))).normalize(),w.crossVectors(C,E);let B=w.dot(u[O])<0?-1:1;l.setXYZW(O,S.x,S.y,S.z,B)}for(let O=0,E=R.length;O<E;++O){let T=R[O],B=T.start,X=T.count;for(let W=B,K=B+X;W<K;W+=3)D(t.getX(W+0)),D(t.getX(W+1)),D(t.getX(W+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let _=0,g=i.count;_<g;_++)i.setXYZ(_,0,0,0);let r=new z,a=new z,l=new z,h=new z,u=new z,f=new z,m=new z,d=new z;if(t)for(let _=0,g=t.count;_<g;_+=3){let M=t.getX(_+0),b=t.getX(_+1),x=t.getX(_+2);r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,b),l.fromBufferAttribute(e,x),m.subVectors(l,a),d.subVectors(r,a),m.cross(d),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,x),h.add(m),u.add(m),f.add(m),i.setXYZ(M,h.x,h.y,h.z),i.setXYZ(b,u.x,u.y,u.z),i.setXYZ(x,f.x,f.y,f.z)}else for(let _=0,g=e.count;_<g;_+=3)r.fromBufferAttribute(e,_+0),a.fromBufferAttribute(e,_+1),l.fromBufferAttribute(e,_+2),m.subVectors(l,a),d.subVectors(r,a),m.cross(d),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(h,u){let f=h.array,m=h.itemSize,d=h.normalized,_=new f.constructor(u.length*m),g=0,M=0;for(let b=0,x=u.length;b<x;b++){h.isInterleavedBufferAttribute?g=u[b]*h.data.stride+h.offset:g=u[b]*m;for(let v=0;v<m;v++)_[M++]=f[g++]}return new Dn(_,m,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,r=this.attributes;for(let h in r){let u=r[h],f=t(u,i);e.setAttribute(h,f)}let a=this.morphAttributes;for(let h in a){let u=[],f=a[h];for(let m=0,d=f.length;m<d;m++){let _=f[m],g=t(_,i);u.push(g)}e.morphAttributes[h]=u}e.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let h=0,u=l.length;h<u;h++){let f=l[h];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let u=this.parameters;for(let f in u)u[f]!==void 0&&(t[f]=u[f]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let u in i){let f=i[u];t.data.attributes[u]=f.toJSON(t.data)}let r={},a=!1;for(let u in this.morphAttributes){let f=this.morphAttributes[u],m=[];for(let d=0,_=f.length;d<_;d++){let g=f[d];m.push(g.toJSON(t.data))}m.length>0&&(r[u]=m,a=!0)}a&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));let h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let r=t.attributes;for(let f in r){let m=r[f];this.setAttribute(f,m.clone(e))}let a=t.morphAttributes;for(let f in a){let m=[],d=a[f];for(let _=0,g=d.length;_<g;_++)m.push(d[_].clone(e));this.morphAttributes[f]=m}this.morphTargetsRelative=t.morphTargetsRelative;let l=t.groups;for(let f=0,m=l.length;f<m;f++){let d=l[f];this.addGroup(d.start,d.count,d.materialIndex)}let h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qd=new Fe,fs=new Ss,Jo=new si,Yd=new z,jo=new z,Qo=new z,ta=new z,Sc=new z,ea=new z,Kd=new z,na=new z,Be=class extends nn{constructor(t=new Ge,e=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){let h=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,l=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let h=this.morphTargetInfluences;if(a&&h){ea.set(0,0,0);for(let u=0,f=a.length;u<f;u++){let m=h[u],d=a[u];m!==0&&(Sc.fromBufferAttribute(d,t),l?ea.addScaledVector(Sc,m):ea.addScaledVector(Sc.sub(e),m))}e.add(ea)}return e}raycast(t,e){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(a),fs.copy(t.ray).recast(t.near),!(Jo.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Jo,Yd)===null||fs.origin.distanceToSquared(Yd)>(t.far-t.near)**2))&&(qd.copy(a).invert(),fs.copy(t.ray).applyMatrix4(qd),!(i.boundingBox!==null&&fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,fs)))}_computeIntersections(t,e,i){let r,a=this.geometry,l=this.material,h=a.index,u=a.attributes.position,f=a.attributes.uv,m=a.attributes.uv1,d=a.attributes.normal,_=a.groups,g=a.drawRange;if(h!==null)if(Array.isArray(l))for(let M=0,b=_.length;M<b;M++){let x=_[M],v=l[x.materialIndex],R=Math.max(x.start,g.start),S=Math.min(h.count,Math.min(x.start+x.count,g.start+g.count));for(let w=R,k=S;w<k;w+=3){let C=h.getX(w),D=h.getX(w+1),O=h.getX(w+2);r=ia(this,v,t,i,f,m,d,C,D,O),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{let M=Math.max(0,g.start),b=Math.min(h.count,g.start+g.count);for(let x=M,v=b;x<v;x+=3){let R=h.getX(x),S=h.getX(x+1),w=h.getX(x+2);r=ia(this,l,t,i,f,m,d,R,S,w),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}else if(u!==void 0)if(Array.isArray(l))for(let M=0,b=_.length;M<b;M++){let x=_[M],v=l[x.materialIndex],R=Math.max(x.start,g.start),S=Math.min(u.count,Math.min(x.start+x.count,g.start+g.count));for(let w=R,k=S;w<k;w+=3){let C=w,D=w+1,O=w+2;r=ia(this,v,t,i,f,m,d,C,D,O),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{let M=Math.max(0,g.start),b=Math.min(u.count,g.start+g.count);for(let x=M,v=b;x<v;x+=3){let R=x,S=x+1,w=x+2;r=ia(this,l,t,i,f,m,d,R,S,w),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}}};function r_(s,t,e,i,r,a,l,h){let u;if(t.side===mn?u=i.intersectTriangle(l,a,r,!0,h):u=i.intersectTriangle(r,a,l,t.side===es,h),u===null)return null;na.copy(h),na.applyMatrix4(s.matrixWorld);let f=e.ray.origin.distanceTo(na);return f<e.near||f>e.far?null:{distance:f,point:na.clone(),object:s}}function ia(s,t,e,i,r,a,l,h,u,f){s.getVertexPosition(h,jo),s.getVertexPosition(u,Qo),s.getVertexPosition(f,ta);let m=r_(s,t,e,i,jo,Qo,ta,Kd);if(m){let d=new z;Ni.getBarycoord(Kd,jo,Qo,ta,d),r&&(m.uv=Ni.getInterpolatedAttribute(r,h,u,f,d,new Zt)),a&&(m.uv1=Ni.getInterpolatedAttribute(a,h,u,f,d,new Zt)),l&&(m.normal=Ni.getInterpolatedAttribute(l,h,u,f,d,new z),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));let _={a:h,b:u,c:f,normal:new z,materialIndex:0};Ni.getNormal(jo,Qo,ta,_.normal),m.face=_,m.barycoord=d}return m}var Wn=class s extends Ge{constructor(t=1,e=1,i=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:a,depthSegments:l};let h=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);let u=[],f=[],m=[],d=[],_=0,g=0;M("z","y","x",-1,-1,i,e,t,l,a,0),M("z","y","x",1,-1,i,e,-t,l,a,1),M("x","z","y",1,1,t,i,e,r,l,2),M("x","z","y",1,-1,t,i,-e,r,l,3),M("x","y","z",1,-1,t,e,i,r,a,4),M("x","y","z",-1,-1,t,e,-i,r,a,5),this.setIndex(u),this.setAttribute("position",new ve(f,3)),this.setAttribute("normal",new ve(m,3)),this.setAttribute("uv",new ve(d,2));function M(b,x,v,R,S,w,k,C,D,O,E){let T=w/D,B=k/O,X=w/2,W=k/2,K=C/2,it=D+1,H=O+1,ut=0,G=0,lt=new z;for(let rt=0;rt<H;rt++){let ot=rt*B-W;for(let Mt=0;Mt<it;Mt++){let yt=Mt*T-X;lt[b]=yt*R,lt[x]=ot*S,lt[v]=K,f.push(lt.x,lt.y,lt.z),lt[b]=0,lt[x]=0,lt[v]=C>0?1:-1,m.push(lt.x,lt.y,lt.z),d.push(Mt/D),d.push(1-rt/O),ut+=1}}for(let rt=0;rt<O;rt++)for(let ot=0;ot<D;ot++){let Mt=_+ot+it*rt,yt=_+ot+it*(rt+1),$=_+(ot+1)+it*(rt+1),pt=_+(ot+1)+it*rt;u.push(Mt,yt,pt),u.push(yt,$,pt),G+=6}h.addGroup(g,G,E),g+=G,_+=ut}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function _r(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let r=s[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function xn(s){let t={};for(let e=0;e<s.length;e++){let i=_r(s[e]);for(let r in i)t[r]=i[r]}return t}function o_(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Qf(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}var cl={clone:_r,merge:xn},a_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zn=class extends _i{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a_,this.fragmentShader=l_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_r(t.uniforms),this.uniformsGroups=o_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let l=this.uniforms[r].value;l&&l.isTexture?e.uniforms[r]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[r]={type:"m4",value:l.toArray()}:e.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Na=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Ui}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ji=new z,$d=new Zt,Jd=new Zt,yn=class extends Na{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=to*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return to*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z)}getViewSize(t,e){return this.getViewBounds(t,$d,Jd),e.subVectors(Jd,$d)}setViewOffset(t,e,i,r,a,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(cr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,a=-.5*r,l=this.view;if(this.view!==null&&this.view.enabled){let u=l.fullWidth,f=l.fullHeight;a+=l.offsetX*r/u,e-=l.offsetY*i/f,r*=l.width/u,i*=l.height/f}let h=this.filmOffset;h!==0&&(a+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Qs=-90,tr=1,Eh=class extends nn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new yn(Qs,tr,t,e);r.layers=this.layers,this.add(r);let a=new yn(Qs,tr,t,e);a.layers=this.layers,this.add(a);let l=new yn(Qs,tr,t,e);l.layers=this.layers,this.add(l);let h=new yn(Qs,tr,t,e);h.layers=this.layers,this.add(h);let u=new yn(Qs,tr,t,e);u.layers=this.layers,this.add(u);let f=new yn(Qs,tr,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,a,l,h,u]=e;for(let f of e)this.remove(f);if(t===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===Aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,l,h,u,f,m]=this.children,d=t.getRenderTarget(),_=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,a),t.setRenderTarget(i,1,r),t.render(e,l),t.setRenderTarget(i,2,r),t.render(e,h),t.setRenderTarget(i,3,r),t.render(e,u),t.setRenderTarget(i,4,r),t.render(e,f),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,r),t.render(e,m),t.setRenderTarget(d,_,g),t.xr.enabled=M,i.texture.needsPMREMUpdate=!0}},Oa=class extends Nn{constructor(t,e,i,r,a,l,h,u,f,m){t=t!==void 0?t:[],e=e!==void 0?e:fr,super(t,e,i,r,a,l,h,u,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ah=class extends Vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Oa(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Wn(5,5,5),a=new Zn({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:Qi});a.uniforms.tEquirect.value=e;let l=new Be(r,a),h=e.minFilter;return e.minFilter===Ms&&(e.minFilter=Hn),new Eh(1,10,this).update(t,l),e.minFilter=h,l.geometry.dispose(),l.material.dispose(),this}clear(t,e,i,r){let a=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,i,r);t.setRenderTarget(a)}},wc=new z,c_=new z,h_=new re,Qn=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=wc.subVectors(i,e).cross(c_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(wc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||h_.getNormalMatrix(t),r=this.coplanarPoint(wc).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ps=new si,sa=new z,eo=class{constructor(t=new Qn,e=new Qn,i=new Qn,r=new Qn,a=new Qn,l=new Qn){this.planes=[t,e,i,r,a,l]}set(t,e,i,r,a,l){let h=this.planes;return h[0].copy(t),h[1].copy(e),h[2].copy(i),h[3].copy(r),h[4].copy(a),h[5].copy(l),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ui){let i=this.planes,r=t.elements,a=r[0],l=r[1],h=r[2],u=r[3],f=r[4],m=r[5],d=r[6],_=r[7],g=r[8],M=r[9],b=r[10],x=r[11],v=r[12],R=r[13],S=r[14],w=r[15];if(i[0].setComponents(u-a,_-f,x-g,w-v).normalize(),i[1].setComponents(u+a,_+f,x+g,w+v).normalize(),i[2].setComponents(u+l,_+m,x+M,w+R).normalize(),i[3].setComponents(u-l,_-m,x-M,w-R).normalize(),i[4].setComponents(u-h,_-d,x-b,w-S).normalize(),e===Ui)i[5].setComponents(u+h,_+d,x+b,w+S).normalize();else if(e===Aa)i[5].setComponents(h,d,b,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(sa.x=r.normal.x>0?t.max.x:t.min.x,sa.y=r.normal.y>0?t.max.y:t.min.y,sa.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(sa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function tp(){let s=null,t=!1,e=null,i=null;function r(a,l){e(a,l),i=s.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(r),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function u_(s){let t=new WeakMap;function e(h,u){let f=h.array,m=h.usage,d=f.byteLength,_=s.createBuffer();s.bindBuffer(u,_),s.bufferData(u,f,m),h.onUploadCallback();let g;if(f instanceof Float32Array)g=s.FLOAT;else if(f instanceof Uint16Array)h.isFloat16BufferAttribute?g=s.HALF_FLOAT:g=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=s.SHORT;else if(f instanceof Uint32Array)g=s.UNSIGNED_INT;else if(f instanceof Int32Array)g=s.INT;else if(f instanceof Int8Array)g=s.BYTE;else if(f instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:d}}function i(h,u,f){let m=u.array,d=u.updateRanges;if(s.bindBuffer(f,h),d.length===0)s.bufferSubData(f,0,m);else{d.sort((g,M)=>g.start-M.start);let _=0;for(let g=1;g<d.length;g++){let M=d[_],b=d[g];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++_,d[_]=b)}d.length=_+1;for(let g=0,M=d.length;g<M;g++){let b=d[g];s.bufferSubData(f,b.start*m.BYTES_PER_ELEMENT,m,b.start,b.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);let u=t.get(h);u&&(s.deleteBuffer(u.buffer),t.delete(h))}function l(h,u){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){let m=t.get(h);(!m||m.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}let f=t.get(h);if(f===void 0)t.set(h,e(h,u));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,h,u),f.version=h.version}}return{get:r,remove:a,update:l}}var ws=class s extends Ge{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let a=t/2,l=e/2,h=Math.floor(i),u=Math.floor(r),f=h+1,m=u+1,d=t/h,_=e/u,g=[],M=[],b=[],x=[];for(let v=0;v<m;v++){let R=v*_-l;for(let S=0;S<f;S++){let w=S*d-a;M.push(w,-R,0),b.push(0,0,1),x.push(S/h),x.push(1-v/u)}}for(let v=0;v<u;v++)for(let R=0;R<h;R++){let S=R+f*v,w=R+f*(v+1),k=R+1+f*(v+1),C=R+1+f*v;g.push(S,w,C),g.push(w,k,C)}this.setIndex(g),this.setAttribute("position",new ve(M,3)),this.setAttribute("normal",new ve(b,3)),this.setAttribute("uv",new ve(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},d_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,p_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,__=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,x_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,M_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,b_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,T_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,E_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,D_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,O_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,U_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,k_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,B_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V_="gl_FragColor = linearToOutputTexel( gl_FragColor );",G_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Z_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,q_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,K_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,t0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,s0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,r0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,h0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,u0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,d0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,f0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,M0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,P0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,R0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,N0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,O0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,H0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,K0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,J0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ov=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,uv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_v=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ev=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Iv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Uv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:d_,alphahash_pars_fragment:f_,alphamap_fragment:p_,alphamap_pars_fragment:m_,alphatest_fragment:g_,alphatest_pars_fragment:__,aomap_fragment:v_,aomap_pars_fragment:x_,batching_pars_vertex:y_,batching_vertex:M_,begin_vertex:b_,beginnormal_vertex:S_,bsdfs:w_,iridescence_fragment:T_,bumpmap_pars_fragment:E_,clipping_planes_fragment:A_,clipping_planes_pars_fragment:P_,clipping_planes_pars_vertex:C_,clipping_planes_vertex:R_,color_fragment:L_,color_pars_fragment:I_,color_pars_vertex:D_,color_vertex:N_,common:O_,cube_uv_reflection_fragment:U_,defaultnormal_vertex:k_,displacementmap_pars_vertex:B_,displacementmap_vertex:F_,emissivemap_fragment:z_,emissivemap_pars_fragment:H_,colorspace_fragment:V_,colorspace_pars_fragment:G_,envmap_fragment:W_,envmap_common_pars_fragment:Z_,envmap_pars_fragment:X_,envmap_pars_vertex:q_,envmap_physical_pars_fragment:s0,envmap_vertex:Y_,fog_vertex:K_,fog_pars_vertex:$_,fog_fragment:J_,fog_pars_fragment:j_,gradientmap_pars_fragment:Q_,lightmap_pars_fragment:t0,lights_lambert_fragment:e0,lights_lambert_pars_fragment:n0,lights_pars_begin:i0,lights_toon_fragment:r0,lights_toon_pars_fragment:o0,lights_phong_fragment:a0,lights_phong_pars_fragment:l0,lights_physical_fragment:c0,lights_physical_pars_fragment:h0,lights_fragment_begin:u0,lights_fragment_maps:d0,lights_fragment_end:f0,logdepthbuf_fragment:p0,logdepthbuf_pars_fragment:m0,logdepthbuf_pars_vertex:g0,logdepthbuf_vertex:_0,map_fragment:v0,map_pars_fragment:x0,map_particle_fragment:y0,map_particle_pars_fragment:M0,metalnessmap_fragment:b0,metalnessmap_pars_fragment:S0,morphinstance_vertex:w0,morphcolor_vertex:T0,morphnormal_vertex:E0,morphtarget_pars_vertex:A0,morphtarget_vertex:P0,normal_fragment_begin:C0,normal_fragment_maps:R0,normal_pars_fragment:L0,normal_pars_vertex:I0,normal_vertex:D0,normalmap_pars_fragment:N0,clearcoat_normal_fragment_begin:O0,clearcoat_normal_fragment_maps:U0,clearcoat_pars_fragment:k0,iridescence_pars_fragment:B0,opaque_fragment:F0,packing:z0,premultiplied_alpha_fragment:H0,project_vertex:V0,dithering_fragment:G0,dithering_pars_fragment:W0,roughnessmap_fragment:Z0,roughnessmap_pars_fragment:X0,shadowmap_pars_fragment:q0,shadowmap_pars_vertex:Y0,shadowmap_vertex:K0,shadowmask_pars_fragment:$0,skinbase_vertex:J0,skinning_pars_vertex:j0,skinning_vertex:Q0,skinnormal_vertex:tv,specularmap_fragment:ev,specularmap_pars_fragment:nv,tonemapping_fragment:iv,tonemapping_pars_fragment:sv,transmission_fragment:rv,transmission_pars_fragment:ov,uv_pars_fragment:av,uv_pars_vertex:lv,uv_vertex:cv,worldpos_vertex:hv,background_vert:uv,background_frag:dv,backgroundCube_vert:fv,backgroundCube_frag:pv,cube_vert:mv,cube_frag:gv,depth_vert:_v,depth_frag:vv,distanceRGBA_vert:xv,distanceRGBA_frag:yv,equirect_vert:Mv,equirect_frag:bv,linedashed_vert:Sv,linedashed_frag:wv,meshbasic_vert:Tv,meshbasic_frag:Ev,meshlambert_vert:Av,meshlambert_frag:Pv,meshmatcap_vert:Cv,meshmatcap_frag:Rv,meshnormal_vert:Lv,meshnormal_frag:Iv,meshphong_vert:Dv,meshphong_frag:Nv,meshphysical_vert:Ov,meshphysical_frag:Uv,meshtoon_vert:kv,meshtoon_frag:Bv,points_vert:Fv,points_frag:zv,shadow_vert:Hv,shadow_frag:Vv,sprite_vert:Gv,sprite_frag:Wv},St={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Mn={basic:{uniforms:xn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:xn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new fe(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:xn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:xn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:xn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new fe(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:xn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:xn([St.points,St.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:xn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:xn([St.common,St.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:xn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:xn([St.sprite,St.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:xn([St.common,St.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:xn([St.lights,St.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Mn.physical={uniforms:xn([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var ra={r:0,b:0,g:0},ms=new gi,Zv=new Fe;function Xv(s,t,e,i,r,a,l){let h=new fe(0),u=a===!0?0:1,f,m,d=null,_=0,g=null;function M(R){let S=R.isScene===!0?R.background:null;return S&&S.isTexture&&(S=(R.backgroundBlurriness>0?e:t).get(S)),S}function b(R){let S=!1,w=M(R);w===null?v(h,u):w&&w.isColor&&(v(w,1),S=!0);let k=s.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,l):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,l),(s.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(R,S){let w=M(S);w&&(w.isCubeTexture||w.mapping===ol)?(m===void 0&&(m=new Be(new Wn(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:_r(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(k,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),ms.copy(S.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),m.material.uniforms.envMap.value=w,m.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Zv.makeRotationFromEuler(ms)),m.material.toneMapped=Se.getTransfer(w.colorSpace)!==Ie,(d!==w||_!==w.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,d=w,_=w.version,g=s.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null)):w&&w.isTexture&&(f===void 0&&(f=new Be(new ws(2,2),new Zn({name:"BackgroundMaterial",uniforms:_r(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=w,f.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,f.material.toneMapped=Se.getTransfer(w.colorSpace)!==Ie,w.matrixAutoUpdate===!0&&w.updateMatrix(),f.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||_!==w.version||g!==s.toneMapping)&&(f.material.needsUpdate=!0,d=w,_=w.version,g=s.toneMapping),f.layers.enableAll(),R.unshift(f,f.geometry,f.material,0,0,null))}function v(R,S){R.getRGB(ra,Qf(s)),i.buffers.color.setClear(ra.r,ra.g,ra.b,S,l)}return{getClearColor:function(){return h},setClearColor:function(R,S=1){h.set(R),u=S,v(h,u)},getClearAlpha:function(){return u},setClearAlpha:function(R){u=R,v(h,u)},render:b,addToRenderList:x}}function qv(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},r=_(null),a=r,l=!1;function h(T,B,X,W,K){let it=!1,H=d(W,X,B);a!==H&&(a=H,f(a.object)),it=g(T,W,X,K),it&&M(T,W,X,K),K!==null&&t.update(K,s.ELEMENT_ARRAY_BUFFER),(it||l)&&(l=!1,w(T,B,X,W),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function u(){return s.createVertexArray()}function f(T){return s.bindVertexArray(T)}function m(T){return s.deleteVertexArray(T)}function d(T,B,X){let W=X.wireframe===!0,K=i[T.id];K===void 0&&(K={},i[T.id]=K);let it=K[B.id];it===void 0&&(it={},K[B.id]=it);let H=it[W];return H===void 0&&(H=_(u()),it[W]=H),H}function _(T){let B=[],X=[],W=[];for(let K=0;K<e;K++)B[K]=0,X[K]=0,W[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:W,object:T,attributes:{},index:null}}function g(T,B,X,W){let K=a.attributes,it=B.attributes,H=0,ut=X.getAttributes();for(let G in ut)if(ut[G].location>=0){let rt=K[G],ot=it[G];if(ot===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(ot=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(ot=T.instanceColor)),rt===void 0||rt.attribute!==ot||ot&&rt.data!==ot.data)return!0;H++}return a.attributesNum!==H||a.index!==W}function M(T,B,X,W){let K={},it=B.attributes,H=0,ut=X.getAttributes();for(let G in ut)if(ut[G].location>=0){let rt=it[G];rt===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(rt=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(rt=T.instanceColor));let ot={};ot.attribute=rt,rt&&rt.data&&(ot.data=rt.data),K[G]=ot,H++}a.attributes=K,a.attributesNum=H,a.index=W}function b(){let T=a.newAttributes;for(let B=0,X=T.length;B<X;B++)T[B]=0}function x(T){v(T,0)}function v(T,B){let X=a.newAttributes,W=a.enabledAttributes,K=a.attributeDivisors;X[T]=1,W[T]===0&&(s.enableVertexAttribArray(T),W[T]=1),K[T]!==B&&(s.vertexAttribDivisor(T,B),K[T]=B)}function R(){let T=a.newAttributes,B=a.enabledAttributes;for(let X=0,W=B.length;X<W;X++)B[X]!==T[X]&&(s.disableVertexAttribArray(X),B[X]=0)}function S(T,B,X,W,K,it,H){H===!0?s.vertexAttribIPointer(T,B,X,K,it):s.vertexAttribPointer(T,B,X,W,K,it)}function w(T,B,X,W){b();let K=W.attributes,it=X.getAttributes(),H=B.defaultAttributeValues;for(let ut in it){let G=it[ut];if(G.location>=0){let lt=K[ut];if(lt===void 0&&(ut==="instanceMatrix"&&T.instanceMatrix&&(lt=T.instanceMatrix),ut==="instanceColor"&&T.instanceColor&&(lt=T.instanceColor)),lt!==void 0){let rt=lt.normalized,ot=lt.itemSize,Mt=t.get(lt);if(Mt===void 0)continue;let yt=Mt.buffer,$=Mt.type,pt=Mt.bytesPerElement,bt=$===s.INT||$===s.UNSIGNED_INT||lt.gpuType===jh;if(lt.isInterleavedBufferAttribute){let gt=lt.data,Xt=gt.stride,xt=lt.offset;if(gt.isInstancedInterleavedBuffer){for(let st=0;st<G.locationSize;st++)v(G.location+st,gt.meshPerAttribute);T.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let st=0;st<G.locationSize;st++)x(G.location+st);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let st=0;st<G.locationSize;st++)S(G.location+st,ot/G.locationSize,$,rt,Xt*pt,(xt+ot/G.locationSize*st)*pt,bt)}else{if(lt.isInstancedBufferAttribute){for(let gt=0;gt<G.locationSize;gt++)v(G.location+gt,lt.meshPerAttribute);T.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let gt=0;gt<G.locationSize;gt++)x(G.location+gt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let gt=0;gt<G.locationSize;gt++)S(G.location+gt,ot/G.locationSize,$,rt,ot*pt,ot/G.locationSize*gt*pt,bt)}}else if(H!==void 0){let rt=H[ut];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(G.location,rt);break;case 3:s.vertexAttrib3fv(G.location,rt);break;case 4:s.vertexAttrib4fv(G.location,rt);break;default:s.vertexAttrib1fv(G.location,rt)}}}}R()}function k(){O();for(let T in i){let B=i[T];for(let X in B){let W=B[X];for(let K in W)m(W[K].object),delete W[K];delete B[X]}delete i[T]}}function C(T){if(i[T.id]===void 0)return;let B=i[T.id];for(let X in B){let W=B[X];for(let K in W)m(W[K].object),delete W[K];delete B[X]}delete i[T.id]}function D(T){for(let B in i){let X=i[B];if(X[T.id]===void 0)continue;let W=X[T.id];for(let K in W)m(W[K].object),delete W[K];delete X[T.id]}}function O(){E(),l=!0,a!==r&&(a=r,f(a.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:O,resetDefaultState:E,dispose:k,releaseStatesOfGeometry:C,releaseStatesOfProgram:D,initAttributes:b,enableAttribute:x,disableUnusedAttributes:R}}function Yv(s,t,e){let i;function r(f){i=f}function a(f,m){s.drawArrays(i,f,m),e.update(m,i,1)}function l(f,m,d){d!==0&&(s.drawArraysInstanced(i,f,m,d),e.update(m,i,d))}function h(f,m,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,m,0,d);let g=0;for(let M=0;M<d;M++)g+=m[M];e.update(g,i,1)}function u(f,m,d,_){if(d===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let M=0;M<f.length;M++)l(f[M],m[M],_[M]);else{g.multiDrawArraysInstancedWEBGL(i,f,0,m,0,_,0,d);let M=0;for(let b=0;b<d;b++)M+=m[b]*_[b];e.update(M,i,1)}}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Kv(s,t,e,i){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");r=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(D){return!(D!==ei&&i.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(D){let O=D===lo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==zi&&i.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Oi&&!O)}function u(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp",m=u(f);m!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);let d=e.logarithmicDepthBuffer===!0,_=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=M>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:u,textureFormatReadable:l,textureTypeReadable:h,precision:f,logarithmicDepthBuffer:d,reverseDepthBuffer:_,maxTextures:g,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:R,maxVaryings:S,maxFragmentUniforms:w,vertexTextures:k,maxSamples:C}}function $v(s){let t=this,e=null,i=0,r=!1,a=!1,l=new Qn,h=new re,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(d,_){let g=d.length!==0||_||i!==0||r;return r=_,i=d.length,g},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,_){e=m(d,_,0)},this.setState=function(d,_,g){let M=d.clippingPlanes,b=d.clipIntersection,x=d.clipShadows,v=s.get(d);if(!r||M===null||M.length===0||a&&!x)a?m(null):f();else{let R=a?0:i,S=R*4,w=v.clippingState||null;u.value=w,w=m(M,_,S,g);for(let k=0;k!==S;++k)w[k]=e[k];v.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=R}};function f(){u.value!==e&&(u.value=e,u.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function m(d,_,g,M){let b=d!==null?d.length:0,x=null;if(b!==0){if(x=u.value,M!==!0||x===null){let v=g+b*4,R=_.matrixWorldInverse;h.getNormalMatrix(R),(x===null||x.length<v)&&(x=new Float32Array(v));for(let S=0,w=g;S!==b;++S,w+=4)l.copy(d[S]).applyMatrix4(R,h),l.normal.toArray(x,w),x[w+3]=l.constant}u.value=x,u.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,x}}function Jv(s){let t=new WeakMap;function e(l,h){return h===Zc?l.mapping=fr:h===Xc&&(l.mapping=pr),l}function i(l){if(l&&l.isTexture){let h=l.mapping;if(h===Zc||h===Xc)if(t.has(l)){let u=t.get(l).texture;return e(u,l.mapping)}else{let u=l.image;if(u&&u.height>0){let f=new Ah(u.height);return f.fromEquirectangularTexture(s,l),t.set(l,f),l.addEventListener("dispose",r),e(f.texture,l.mapping)}else return null}}return l}function r(l){let h=l.target;h.removeEventListener("dispose",r);let u=t.get(h);u!==void 0&&(t.delete(h),u.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var Ua=class extends Na{constructor(t=-1,e=1,i=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-t,l=i+t,h=r+e,u=r-e;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,l=a+f*this.view.width,h-=m*this.view.offsetY,u=h-m*this.view.height}this.projectionMatrix.makeOrthographic(a,l,h,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},or=4,jd=[.125,.215,.35,.446,.526,.582],xs=20,Tc=new Ua,Qd=new fe,Ec=null,Ac=0,Pc=0,Cc=!1,_s=(1+Math.sqrt(5))/2,er=1/_s,tf=[new z(-_s,er,0),new z(_s,er,0),new z(-er,0,_s),new z(er,0,_s),new z(0,_s,-er),new z(0,_s,er),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],ka=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Ec=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,r,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ec,Ac,Pc),this._renderer.xr.enabled=Cc,t.scissorTest=!1,oa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fr||t.mapping===pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ec=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:lo,format:ei,colorSpace:yr,depthBuffer:!1},r=ef(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ef(t,e,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jv(a)),this._blurMaterial=Qv(a,t,e)}return r}_compileMaterial(t){let e=new Be(this._lodPlanes[0],t);this._renderer.compile(e,Tc)}_sceneToCubeUV(t,e,i,r){let h=new yn(90,1,e,i),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],m=this._renderer,d=m.autoClear,_=m.toneMapping;m.getClearColor(Qd),m.toneMapping=ts,m.autoClear=!1;let g=new Gn({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),M=new Be(new Wn,g),b=!1,x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,b=!0):(g.color.copy(Qd),b=!0);for(let v=0;v<6;v++){let R=v%3;R===0?(h.up.set(0,u[v],0),h.lookAt(f[v],0,0)):R===1?(h.up.set(0,0,u[v]),h.lookAt(0,f[v],0)):(h.up.set(0,u[v],0),h.lookAt(0,0,f[v]));let S=this._cubeSize;oa(r,R*S,v>2?S:0,S,S),m.setRenderTarget(r),b&&m.render(M,h),m.render(t,h)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=_,m.autoClear=d,t.background=x}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===fr||t.mapping===pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nf());let a=r?this._cubemapMaterial:this._equirectMaterial,l=new Be(this._lodPlanes[0],a),h=a.uniforms;h.envMap.value=t;let u=this._cubeSize;oa(e,0,0,3*u,2*u),i.setRenderTarget(e),i.render(l,Tc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let a=1;a<r;a++){let l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),h=tf[(r-a-1)%tf.length];this._blur(t,a-1,a,l,h)}e.autoClear=i}_blur(t,e,i,r,a){let l=this._pingPongRenderTarget;this._halfBlur(t,l,e,i,r,"latitudinal",a),this._halfBlur(l,t,i,i,r,"longitudinal",a)}_halfBlur(t,e,i,r,a,l,h){let u=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let m=3,d=new Be(this._lodPlanes[r],f),_=f.uniforms,g=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*xs-1),b=a/M,x=isFinite(a)?1+Math.floor(m*b):xs;x>xs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${xs}`);let v=[],R=0;for(let D=0;D<xs;++D){let O=D/b,E=Math.exp(-O*O/2);v.push(E),D===0?R+=E:D<x&&(R+=2*E)}for(let D=0;D<v.length;D++)v[D]=v[D]/R;_.envMap.value=t.texture,_.samples.value=x,_.weights.value=v,_.latitudinal.value=l==="latitudinal",h&&(_.poleAxis.value=h);let{_lodMax:S}=this;_.dTheta.value=M,_.mipInt.value=S-i;let w=this._sizeLods[r],k=3*w*(r>S-or?r-S+or:0),C=4*(this._cubeSize-w);oa(e,k,C,3*w,2*w),u.setRenderTarget(e),u.render(d,Tc)}};function jv(s){let t=[],e=[],i=[],r=s,a=s-or+1+jd.length;for(let l=0;l<a;l++){let h=Math.pow(2,r);e.push(h);let u=1/h;l>s-or?u=jd[l-s+or-1]:l===0&&(u=0),i.push(u);let f=1/(h-2),m=-f,d=1+f,_=[m,m,d,m,d,d,m,m,d,d,m,d],g=6,M=6,b=3,x=2,v=1,R=new Float32Array(b*M*g),S=new Float32Array(x*M*g),w=new Float32Array(v*M*g);for(let C=0;C<g;C++){let D=C%3*2/3-1,O=C>2?0:-1,E=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];R.set(E,b*M*C),S.set(_,x*M*C);let T=[C,C,C,C,C,C];w.set(T,v*M*C)}let k=new Ge;k.setAttribute("position",new Dn(R,b)),k.setAttribute("uv",new Dn(S,x)),k.setAttribute("faceIndex",new Dn(w,v)),t.push(k),r>or&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ef(s,t,e){let i=new Vi(s,t,e);return i.texture.mapping=ol,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oa(s,t,e,i,r){s.viewport.set(t,e,i,r),s.scissor.set(t,e,i,r)}function Qv(s,t,e){let i=new Float32Array(xs),r=new z(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function nf(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function sf(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function ru(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tx(s){let t=new WeakMap,e=null;function i(h){if(h&&h.isTexture){let u=h.mapping,f=u===Zc||u===Xc,m=u===fr||u===pr;if(f||m){let d=t.get(h),_=d!==void 0?d.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return e===null&&(e=new ka(s)),d=f?e.fromEquirectangular(h,d):e.fromCubemap(h,d),d.texture.pmremVersion=h.pmremVersion,t.set(h,d),d.texture;if(d!==void 0)return d.texture;{let g=h.image;return f&&g&&g.height>0||m&&g&&r(g)?(e===null&&(e=new ka(s)),d=f?e.fromEquirectangular(h):e.fromCubemap(h),d.texture.pmremVersion=h.pmremVersion,t.set(h,d),h.addEventListener("dispose",a),d.texture):null}}}return h}function r(h){let u=0,f=6;for(let m=0;m<f;m++)h[m]!==void 0&&u++;return u===f}function a(h){let u=h.target;u.removeEventListener("dispose",a);let f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:l}}function ex(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let r=e(i);return r===null&&Kr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function nx(s,t,e,i){let r={},a=new WeakMap;function l(d){let _=d.target;_.index!==null&&t.remove(_.index);for(let M in _.attributes)t.remove(_.attributes[M]);for(let M in _.morphAttributes){let b=_.morphAttributes[M];for(let x=0,v=b.length;x<v;x++)t.remove(b[x])}_.removeEventListener("dispose",l),delete r[_.id];let g=a.get(_);g&&(t.remove(g),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function h(d,_){return r[_.id]===!0||(_.addEventListener("dispose",l),r[_.id]=!0,e.memory.geometries++),_}function u(d){let _=d.attributes;for(let M in _)t.update(_[M],s.ARRAY_BUFFER);let g=d.morphAttributes;for(let M in g){let b=g[M];for(let x=0,v=b.length;x<v;x++)t.update(b[x],s.ARRAY_BUFFER)}}function f(d){let _=[],g=d.index,M=d.attributes.position,b=0;if(g!==null){let R=g.array;b=g.version;for(let S=0,w=R.length;S<w;S+=3){let k=R[S+0],C=R[S+1],D=R[S+2];_.push(k,C,C,D,D,k)}}else if(M!==void 0){let R=M.array;b=M.version;for(let S=0,w=R.length/3-1;S<w;S+=3){let k=S+0,C=S+1,D=S+2;_.push(k,C,C,D,D,k)}}else return;let x=new(Jf(_)?Da:Ia)(_,1);x.version=b;let v=a.get(d);v&&t.remove(v),a.set(d,x)}function m(d){let _=a.get(d);if(_){let g=d.index;g!==null&&_.version<g.version&&f(d)}else f(d);return a.get(d)}return{get:h,update:u,getWireframeAttribute:m}}function ix(s,t,e){let i;function r(_){i=_}let a,l;function h(_){a=_.type,l=_.bytesPerElement}function u(_,g){s.drawElements(i,g,a,_*l),e.update(g,i,1)}function f(_,g,M){M!==0&&(s.drawElementsInstanced(i,g,a,_*l,M),e.update(g,i,M))}function m(_,g,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,a,_,0,M);let x=0;for(let v=0;v<M;v++)x+=g[v];e.update(x,i,1)}function d(_,g,M,b){if(M===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<_.length;v++)f(_[v]/l,g[v],b[v]);else{x.multiDrawElementsInstancedWEBGL(i,g,0,a,_,0,b,0,M);let v=0;for(let R=0;R<M;R++)v+=g[R]*b[R];e.update(v,i,1)}}this.setMode=r,this.setIndex=h,this.render=u,this.renderInstances=f,this.renderMultiDraw=m,this.renderMultiDrawInstances=d}function sx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,l,h){switch(e.calls++,l){case s.TRIANGLES:e.triangles+=h*(a/3);break;case s.LINES:e.lines+=h*(a/2);break;case s.LINE_STRIP:e.lines+=h*(a-1);break;case s.LINE_LOOP:e.lines+=h*a;break;case s.POINTS:e.points+=h*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function rx(s,t,e){let i=new WeakMap,r=new De;function a(l,h,u){let f=l.morphTargetInfluences,m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,d=m!==void 0?m.length:0,_=i.get(h);if(_===void 0||_.count!==d){let E=function(){D.dispose(),i.delete(h),h.removeEventListener("dispose",E)};_!==void 0&&_.texture.dispose();let g=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],S=0;g===!0&&(S=1),M===!0&&(S=2),b===!0&&(S=3);let w=h.attributes.position.count*S,k=1;w>t.maxTextureSize&&(k=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let C=new Float32Array(w*k*4*d),D=new Ra(C,w,k,d);D.type=Oi,D.needsUpdate=!0;let O=S*4;for(let T=0;T<d;T++){let B=x[T],X=v[T],W=R[T],K=w*k*4*T;for(let it=0;it<B.count;it++){let H=it*O;g===!0&&(r.fromBufferAttribute(B,it),C[K+H+0]=r.x,C[K+H+1]=r.y,C[K+H+2]=r.z,C[K+H+3]=0),M===!0&&(r.fromBufferAttribute(X,it),C[K+H+4]=r.x,C[K+H+5]=r.y,C[K+H+6]=r.z,C[K+H+7]=0),b===!0&&(r.fromBufferAttribute(W,it),C[K+H+8]=r.x,C[K+H+9]=r.y,C[K+H+10]=r.z,C[K+H+11]=W.itemSize===4?r.w:1)}}_={count:d,texture:D,size:new Zt(w,k)},i.set(h,_),h.addEventListener("dispose",E)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(s,"morphTexture",l.morphTexture,e);else{let g=0;for(let b=0;b<f.length;b++)g+=f[b];let M=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(s,"morphTargetBaseInfluence",M),u.getUniforms().setValue(s,"morphTargetInfluences",f)}u.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:a}}function ox(s,t,e,i){let r=new WeakMap;function a(u){let f=i.render.frame,m=u.geometry,d=t.get(u,m);if(r.get(d)!==f&&(t.update(d),r.set(d,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",h)===!1&&u.addEventListener("dispose",h),r.get(u)!==f&&(e.update(u.instanceMatrix,s.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,s.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){let _=u.skeleton;r.get(_)!==f&&(_.update(),r.set(_,f))}return d}function l(){r=new WeakMap}function h(u){let f=u.target;f.removeEventListener("dispose",h),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:l}}var Ba=class extends Nn{constructor(t,e,i,r,a,l,h,u,f,m=lr){if(m!==lr&&m!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===lr&&(i=bs),i===void 0&&m===gr&&(i=mr),super(null,r,a,l,h,u,m,i,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=h!==void 0?h:ni,this.minFilter=u!==void 0?u:ni,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ep=new Nn,rf=new Ba(1,1),np=new Ra,ip=new Th,sp=new Oa,of=[],af=[],lf=new Float32Array(16),cf=new Float32Array(9),hf=new Float32Array(4);function Mr(s,t,e){let i=s[0];if(i<=0||i>0)return s;let r=t*e,a=of[r];if(a===void 0&&(a=new Float32Array(r),of[r]=a),t!==0){i.toArray(a,0);for(let l=1,h=0;l!==t;++l)h+=e,s[l].toArray(a,h)}return a}function $e(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Je(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function hl(s,t){let e=af[t];e===void 0&&(e=new Int32Array(t),af[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function ax(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function lx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;s.uniform2fv(this.addr,t),Je(e,t)}}function cx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;s.uniform3fv(this.addr,t),Je(e,t)}}function hx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;s.uniform4fv(this.addr,t),Je(e,t)}}function ux(s,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if($e(e,i))return;hf.set(i),s.uniformMatrix2fv(this.addr,!1,hf),Je(e,i)}}function dx(s,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if($e(e,i))return;cf.set(i),s.uniformMatrix3fv(this.addr,!1,cf),Je(e,i)}}function fx(s,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if($e(e,i))return;lf.set(i),s.uniformMatrix4fv(this.addr,!1,lf),Je(e,i)}}function px(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function mx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;s.uniform2iv(this.addr,t),Je(e,t)}}function gx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;s.uniform3iv(this.addr,t),Je(e,t)}}function _x(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;s.uniform4iv(this.addr,t),Je(e,t)}}function vx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function xx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;s.uniform2uiv(this.addr,t),Je(e,t)}}function yx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;s.uniform3uiv(this.addr,t),Je(e,t)}}function Mx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;s.uniform4uiv(this.addr,t),Je(e,t)}}function bx(s,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r);let a;this.type===s.SAMPLER_2D_SHADOW?(rf.compareFunction=$f,a=rf):a=ep,e.setTexture2D(t||a,r)}function Sx(s,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||ip,r)}function wx(s,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||sp,r)}function Tx(s,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||np,r)}function Ex(s){switch(s){case 5126:return ax;case 35664:return lx;case 35665:return cx;case 35666:return hx;case 35674:return ux;case 35675:return dx;case 35676:return fx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return _x;case 5125:return vx;case 36294:return xx;case 36295:return yx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Tx}}function Ax(s,t){s.uniform1fv(this.addr,t)}function Px(s,t){let e=Mr(t,this.size,2);s.uniform2fv(this.addr,e)}function Cx(s,t){let e=Mr(t,this.size,3);s.uniform3fv(this.addr,e)}function Rx(s,t){let e=Mr(t,this.size,4);s.uniform4fv(this.addr,e)}function Lx(s,t){let e=Mr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Ix(s,t){let e=Mr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Dx(s,t){let e=Mr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Nx(s,t){s.uniform1iv(this.addr,t)}function Ox(s,t){s.uniform2iv(this.addr,t)}function Ux(s,t){s.uniform3iv(this.addr,t)}function kx(s,t){s.uniform4iv(this.addr,t)}function Bx(s,t){s.uniform1uiv(this.addr,t)}function Fx(s,t){s.uniform2uiv(this.addr,t)}function zx(s,t){s.uniform3uiv(this.addr,t)}function Hx(s,t){s.uniform4uiv(this.addr,t)}function Vx(s,t,e){let i=this.cache,r=t.length,a=hl(e,r);$e(i,a)||(s.uniform1iv(this.addr,a),Je(i,a));for(let l=0;l!==r;++l)e.setTexture2D(t[l]||ep,a[l])}function Gx(s,t,e){let i=this.cache,r=t.length,a=hl(e,r);$e(i,a)||(s.uniform1iv(this.addr,a),Je(i,a));for(let l=0;l!==r;++l)e.setTexture3D(t[l]||ip,a[l])}function Wx(s,t,e){let i=this.cache,r=t.length,a=hl(e,r);$e(i,a)||(s.uniform1iv(this.addr,a),Je(i,a));for(let l=0;l!==r;++l)e.setTextureCube(t[l]||sp,a[l])}function Zx(s,t,e){let i=this.cache,r=t.length,a=hl(e,r);$e(i,a)||(s.uniform1iv(this.addr,a),Je(i,a));for(let l=0;l!==r;++l)e.setTexture2DArray(t[l]||np,a[l])}function Xx(s){switch(s){case 5126:return Ax;case 35664:return Px;case 35665:return Cx;case 35666:return Rx;case 35674:return Lx;case 35675:return Ix;case 35676:return Dx;case 5124:case 35670:return Nx;case 35667:case 35671:return Ox;case 35668:case 35672:return Ux;case 35669:case 35673:return kx;case 5125:return Bx;case 36294:return Fx;case 36295:return zx;case 36296:return Hx;case 35678:case 36198:case 36298:case 36306:case 35682:return Vx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return Zx}}var Ph=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ex(e.type)}},Ch=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xx(e.type)}},Rh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let a=0,l=r.length;a!==l;++a){let h=r[a];h.setValue(t,e[h.id],i)}}},Rc=/(\w+)(\])?(\[|\.)?/g;function uf(s,t){s.seq.push(t),s.map[t.id]=t}function qx(s,t,e){let i=s.name,r=i.length;for(Rc.lastIndex=0;;){let a=Rc.exec(i),l=Rc.lastIndex,h=a[1],u=a[2]==="]",f=a[3];if(u&&(h=h|0),f===void 0||f==="["&&l+2===r){uf(e,f===void 0?new Ph(h,s,t):new Ch(h,s,t));break}else{let d=e.map[h];d===void 0&&(d=new Rh(h),uf(e,d)),e=d}}}var ur=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let a=t.getActiveUniform(e,r),l=t.getUniformLocation(e,a.name);qx(a,l,this)}}setValue(t,e,i,r){let a=this.map[e];a!==void 0&&a.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let a=0,l=e.length;a!==l;++a){let h=e[a],u=i[h.id];u.needsUpdate!==!1&&h.setValue(t,u.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,a=t.length;r!==a;++r){let l=t[r];l.id in e&&i.push(l)}return i}};function df(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var Yx=37297,Kx=0;function $x(s,t){let e=s.split(`
`),i=[],r=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let l=r;l<a;l++){let h=l+1;i.push(`${h===t?">":" "} ${h}: ${e[l]}`)}return i.join(`
`)}var ff=new re;function Jx(s){Se._getMatrix(ff,Se.workingColorSpace,s);let t=`mat3( ${ff.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(s)){case al:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function pf(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),r=s.getShaderInfoLog(t).trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+$x(s.getShaderSource(t),l)}else return r}function jx(s,t){let e=Jx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Qx(s,t){let e;switch(t){case hg:e="Linear";break;case ug:e="Reinhard";break;case dg:e="Cineon";break;case fg:e="ACESFilmic";break;case mg:e="AgX";break;case gg:e="Neutral";break;case pg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var aa=new z;function ty(){Se.getLuminanceCoefficients(aa);let s=aa.x.toFixed(4),t=aa.y.toFixed(4),e=aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ey(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function ny(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function iy(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let a=s.getActiveAttrib(t,r),l=a.name,h=1;a.type===s.FLOAT_MAT2&&(h=2),a.type===s.FLOAT_MAT3&&(h=3),a.type===s.FLOAT_MAT4&&(h=4),e[l]={type:a.type,location:s.getAttribLocation(t,l),locationSize:h}}return e}function $r(s){return s!==""}function mf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lh(s){return s.replace(sy,oy)}var ry=new Map;function oy(s,t){let e=ce[t];if(e===void 0){let i=ry.get(t);if(i!==void 0)e=ce[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Lh(e)}var ay=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _f(s){return s.replace(ay,ly)}function ly(s,t,e,i){let r="";for(let a=parseInt(t);a<parseInt(e);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function vf(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cy(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Uf?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Gm?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Di&&(t="SHADOWMAP_TYPE_VSM"),t}function hy(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case fr:case pr:t="ENVMAP_TYPE_CUBE";break;case ol:t="ENVMAP_TYPE_CUBE_UV";break}return t}function uy(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case pr:t="ENVMAP_MODE_REFRACTION";break}return t}function dy(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case kf:t="ENVMAP_BLENDING_MULTIPLY";break;case lg:t="ENVMAP_BLENDING_MIX";break;case cg:t="ENVMAP_BLENDING_ADD";break}return t}function fy(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function py(s,t,e,i){let r=s.getContext(),a=e.defines,l=e.vertexShader,h=e.fragmentShader,u=cy(e),f=hy(e),m=uy(e),d=dy(e),_=fy(e),g=ey(e),M=ny(a),b=r.createProgram(),x,v,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter($r).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter($r).join(`
`),v.length>0&&(v+=`
`)):(x=[vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),v=[vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+m:"",e.envMap?"#define "+d:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ts?"#define TONE_MAPPING":"",e.toneMapping!==ts?ce.tonemapping_pars_fragment:"",e.toneMapping!==ts?Qx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,jx("linearToOutputTexel",e.outputColorSpace),ty(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($r).join(`
`)),l=Lh(l),l=mf(l,e),l=gf(l,e),h=Lh(h),h=mf(h,e),h=gf(h,e),l=_f(l),h=_f(h),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",e.glslVersion===Rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let S=R+x+l,w=R+v+h,k=df(r,r.VERTEX_SHADER,S),C=df(r,r.FRAGMENT_SHADER,w);r.attachShader(b,k),r.attachShader(b,C),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function D(B){if(s.debug.checkShaderErrors){let X=r.getProgramInfoLog(b).trim(),W=r.getShaderInfoLog(k).trim(),K=r.getShaderInfoLog(C).trim(),it=!0,H=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(it=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,b,k,C);else{let ut=pf(r,k,"vertex"),G=pf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+X+`
`+ut+`
`+G)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||K==="")&&(H=!1);H&&(B.diagnostics={runnable:it,programLog:X,vertexShader:{log:W,prefix:x},fragmentShader:{log:K,prefix:v}})}r.deleteShader(k),r.deleteShader(C),O=new ur(r,b),E=iy(r,b)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(b,Yx)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kx++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=k,this.fragmentShader=C,this}var my=0,Ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),a=this._getShaderStage(i),l=this._getShaderCacheForMaterial(t);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Dh(t),e.set(t,i)),i}},Dh=class{constructor(t){this.id=my++,this.code=t,this.usedTimes=0}};function gy(s,t,e,i,r,a,l){let h=new La,u=new Ih,f=new Set,m=[],d=r.logarithmicDepthBuffer,_=r.vertexTextures,g=r.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return f.add(E),E===0?"uv":`uv${E}`}function x(E,T,B,X,W){let K=X.fog,it=W.geometry,H=E.isMeshStandardMaterial?X.environment:null,ut=(E.isMeshStandardMaterial?e:t).get(E.envMap||H),G=ut&&ut.mapping===ol?ut.image.height:null,lt=M[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));let rt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ot=rt!==void 0?rt.length:0,Mt=0;it.morphAttributes.position!==void 0&&(Mt=1),it.morphAttributes.normal!==void 0&&(Mt=2),it.morphAttributes.color!==void 0&&(Mt=3);let yt,$,pt,bt;if(lt){let Te=Mn[lt];yt=Te.vertexShader,$=Te.fragmentShader}else yt=E.vertexShader,$=E.fragmentShader,u.update(E),pt=u.getVertexShaderID(E),bt=u.getFragmentShaderID(E);let gt=s.getRenderTarget(),Xt=s.state.buffers.depth.getReversed(),xt=W.isInstancedMesh===!0,st=W.isBatchedMesh===!0,It=!!E.map,qt=!!E.matcap,oe=!!ut,V=!!E.aoMap,Ae=!!E.lightMap,ne=!!E.bumpMap,Ot=!!E.normalMap,kt=!!E.displacementMap,be=!!E.emissiveMap,Yt=!!E.metalnessMap,U=!!E.roughnessMap,I=E.anisotropy>0,j=E.clearcoat>0,ht=E.dispersion>0,mt=E.iridescence>0,ct=E.sheen>0,Gt=E.transmission>0,Et=I&&!!E.anisotropyMap,Dt=j&&!!E.clearcoatMap,me=j&&!!E.clearcoatNormalMap,_t=j&&!!E.clearcoatRoughnessMap,Nt=mt&&!!E.iridescenceMap,$t=mt&&!!E.iridescenceThicknessMap,Qt=ct&&!!E.sheenColorMap,Lt=ct&&!!E.sheenRoughnessMap,pe=!!E.specularMap,ie=!!E.specularColorMap,Pe=!!E.specularIntensityMap,Z=Gt&&!!E.transmissionMap,Tt=Gt&&!!E.thicknessMap,at=!!E.gradientMap,dt=!!E.alphaMap,Ct=E.alphaTest>0,At=!!E.alphaHash,ee=!!E.extensions,ze=ts;E.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ze=s.toneMapping);let Ze={shaderID:lt,shaderType:E.type,shaderName:E.name,vertexShader:yt,fragmentShader:$,defines:E.defines,customVertexShaderID:pt,customFragmentShaderID:bt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:st,batchingColor:st&&W._colorsTexture!==null,instancing:xt,instancingColor:xt&&W.instanceColor!==null,instancingMorph:xt&&W.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:gt===null?s.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:yr,alphaToCoverage:!!E.alphaToCoverage,map:It,matcap:qt,envMap:oe,envMapMode:oe&&ut.mapping,envMapCubeUVHeight:G,aoMap:V,lightMap:Ae,bumpMap:ne,normalMap:Ot,displacementMap:_&&kt,emissiveMap:be,normalMapObjectSpace:Ot&&E.normalMapType===yg,normalMapTangentSpace:Ot&&E.normalMapType===Kf,metalnessMap:Yt,roughnessMap:U,anisotropy:I,anisotropyMap:Et,clearcoat:j,clearcoatMap:Dt,clearcoatNormalMap:me,clearcoatRoughnessMap:_t,dispersion:ht,iridescence:mt,iridescenceMap:Nt,iridescenceThicknessMap:$t,sheen:ct,sheenColorMap:Qt,sheenRoughnessMap:Lt,specularMap:pe,specularColorMap:ie,specularIntensityMap:Pe,transmission:Gt,transmissionMap:Z,thicknessMap:Tt,gradientMap:at,opaque:E.transparent===!1&&E.blending===ar&&E.alphaToCoverage===!1,alphaMap:dt,alphaTest:Ct,alphaHash:At,combine:E.combine,mapUv:It&&b(E.map.channel),aoMapUv:V&&b(E.aoMap.channel),lightMapUv:Ae&&b(E.lightMap.channel),bumpMapUv:ne&&b(E.bumpMap.channel),normalMapUv:Ot&&b(E.normalMap.channel),displacementMapUv:kt&&b(E.displacementMap.channel),emissiveMapUv:be&&b(E.emissiveMap.channel),metalnessMapUv:Yt&&b(E.metalnessMap.channel),roughnessMapUv:U&&b(E.roughnessMap.channel),anisotropyMapUv:Et&&b(E.anisotropyMap.channel),clearcoatMapUv:Dt&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:me&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&b(E.sheenRoughnessMap.channel),specularMapUv:pe&&b(E.specularMap.channel),specularColorMapUv:ie&&b(E.specularColorMap.channel),specularIntensityMapUv:Pe&&b(E.specularIntensityMap.channel),transmissionMapUv:Z&&b(E.transmissionMap.channel),thicknessMapUv:Tt&&b(E.thicknessMap.channel),alphaMapUv:dt&&b(E.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(Ot||I),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!it.attributes.uv&&(It||dt),fog:!!K,useFog:E.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Xt,skinning:W.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:Mt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:ze,decodeVideoTexture:It&&E.map.isVideoTexture===!0&&Se.getTransfer(E.map.colorSpace)===Ie,decodeVideoTextureEmissive:be&&E.emissiveMap.isVideoTexture===!0&&Se.getTransfer(E.emissiveMap.colorSpace)===Ie,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===zn,flipSided:E.side===mn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ee&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&E.extensions.multiDraw===!0||st)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ze.vertexUv1s=f.has(1),Ze.vertexUv2s=f.has(2),Ze.vertexUv3s=f.has(3),f.clear(),Ze}function v(E){let T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(let B in E.defines)T.push(B),T.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(R(T,E),S(T,E),T.push(s.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function R(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function S(E,T){h.disableAll(),T.supportsVertexTextures&&h.enable(0),T.instancing&&h.enable(1),T.instancingColor&&h.enable(2),T.instancingMorph&&h.enable(3),T.matcap&&h.enable(4),T.envMap&&h.enable(5),T.normalMapObjectSpace&&h.enable(6),T.normalMapTangentSpace&&h.enable(7),T.clearcoat&&h.enable(8),T.iridescence&&h.enable(9),T.alphaTest&&h.enable(10),T.vertexColors&&h.enable(11),T.vertexAlphas&&h.enable(12),T.vertexUv1s&&h.enable(13),T.vertexUv2s&&h.enable(14),T.vertexUv3s&&h.enable(15),T.vertexTangents&&h.enable(16),T.anisotropy&&h.enable(17),T.alphaHash&&h.enable(18),T.batching&&h.enable(19),T.dispersion&&h.enable(20),T.batchingColor&&h.enable(21),E.push(h.mask),h.disableAll(),T.fog&&h.enable(0),T.useFog&&h.enable(1),T.flatShading&&h.enable(2),T.logarithmicDepthBuffer&&h.enable(3),T.reverseDepthBuffer&&h.enable(4),T.skinning&&h.enable(5),T.morphTargets&&h.enable(6),T.morphNormals&&h.enable(7),T.morphColors&&h.enable(8),T.premultipliedAlpha&&h.enable(9),T.shadowMapEnabled&&h.enable(10),T.doubleSided&&h.enable(11),T.flipSided&&h.enable(12),T.useDepthPacking&&h.enable(13),T.dithering&&h.enable(14),T.transmission&&h.enable(15),T.sheen&&h.enable(16),T.opaque&&h.enable(17),T.pointsUvs&&h.enable(18),T.decodeVideoTexture&&h.enable(19),T.decodeVideoTextureEmissive&&h.enable(20),T.alphaToCoverage&&h.enable(21),E.push(h.mask)}function w(E){let T=M[E.type],B;if(T){let X=Mn[T];B=cl.clone(X.uniforms)}else B=E.uniforms;return B}function k(E,T){let B;for(let X=0,W=m.length;X<W;X++){let K=m[X];if(K.cacheKey===T){B=K,++B.usedTimes;break}}return B===void 0&&(B=new py(s,T,E,a),m.push(B)),B}function C(E){if(--E.usedTimes===0){let T=m.indexOf(E);m[T]=m[m.length-1],m.pop(),E.destroy()}}function D(E){u.remove(E)}function O(){u.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:w,acquireProgram:k,releaseProgram:C,releaseShaderCache:D,programs:m,dispose:O}}function _y(){let s=new WeakMap;function t(l){return s.has(l)}function e(l){let h=s.get(l);return h===void 0&&(h={},s.set(l,h)),h}function i(l){s.delete(l)}function r(l,h,u){s.get(l)[h]=u}function a(){s=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:a}}function vy(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function xf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function yf(){let s=[],t=0,e=[],i=[],r=[];function a(){t=0,e.length=0,i.length=0,r.length=0}function l(d,_,g,M,b,x){let v=s[t];return v===void 0?(v={id:d.id,object:d,geometry:_,material:g,groupOrder:M,renderOrder:d.renderOrder,z:b,group:x},s[t]=v):(v.id=d.id,v.object=d,v.geometry=_,v.material=g,v.groupOrder=M,v.renderOrder=d.renderOrder,v.z=b,v.group=x),t++,v}function h(d,_,g,M,b,x){let v=l(d,_,g,M,b,x);g.transmission>0?i.push(v):g.transparent===!0?r.push(v):e.push(v)}function u(d,_,g,M,b,x){let v=l(d,_,g,M,b,x);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):e.unshift(v)}function f(d,_){e.length>1&&e.sort(d||vy),i.length>1&&i.sort(_||xf),r.length>1&&r.sort(_||xf)}function m(){for(let d=t,_=s.length;d<_;d++){let g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:r,init:a,push:h,unshift:u,finish:m,sort:f}}function xy(){let s=new WeakMap;function t(i,r){let a=s.get(i),l;return a===void 0?(l=new yf,s.set(i,[l])):r>=a.length?(l=new yf,a.push(l)):l=a[r],l}function e(){s=new WeakMap}return{get:t,dispose:e}}function yy(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new fe};break;case"SpotLight":e={position:new z,direction:new z,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":e={color:new fe,position:new z,halfWidth:new z,halfHeight:new z};break}return s[t.id]=e,e}}}function My(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var by=0;function Sy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function wy(s){let t=new yy,e=My(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new z);let r=new z,a=new Fe,l=new Fe;function h(f){let m=0,d=0,_=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let g=0,M=0,b=0,x=0,v=0,R=0,S=0,w=0,k=0,C=0,D=0;f.sort(Sy);for(let E=0,T=f.length;E<T;E++){let B=f[E],X=B.color,W=B.intensity,K=B.distance,it=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)m+=X.r*W,d+=X.g*W,_+=X.b*W;else if(B.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(B.sh.coefficients[H],W);D++}else if(B.isDirectionalLight){let H=t.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let ut=B.shadow,G=e.get(B);G.shadowIntensity=ut.intensity,G.shadowBias=ut.bias,G.shadowNormalBias=ut.normalBias,G.shadowRadius=ut.radius,G.shadowMapSize=ut.mapSize,i.directionalShadow[g]=G,i.directionalShadowMap[g]=it,i.directionalShadowMatrix[g]=B.shadow.matrix,R++}i.directional[g]=H,g++}else if(B.isSpotLight){let H=t.get(B);H.position.setFromMatrixPosition(B.matrixWorld),H.color.copy(X).multiplyScalar(W),H.distance=K,H.coneCos=Math.cos(B.angle),H.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),H.decay=B.decay,i.spot[b]=H;let ut=B.shadow;if(B.map&&(i.spotLightMap[k]=B.map,k++,ut.updateMatrices(B),B.castShadow&&C++),i.spotLightMatrix[b]=ut.matrix,B.castShadow){let G=e.get(B);G.shadowIntensity=ut.intensity,G.shadowBias=ut.bias,G.shadowNormalBias=ut.normalBias,G.shadowRadius=ut.radius,G.shadowMapSize=ut.mapSize,i.spotShadow[b]=G,i.spotShadowMap[b]=it,w++}b++}else if(B.isRectAreaLight){let H=t.get(B);H.color.copy(X).multiplyScalar(W),H.halfWidth.set(B.width*.5,0,0),H.halfHeight.set(0,B.height*.5,0),i.rectArea[x]=H,x++}else if(B.isPointLight){let H=t.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity),H.distance=B.distance,H.decay=B.decay,B.castShadow){let ut=B.shadow,G=e.get(B);G.shadowIntensity=ut.intensity,G.shadowBias=ut.bias,G.shadowNormalBias=ut.normalBias,G.shadowRadius=ut.radius,G.shadowMapSize=ut.mapSize,G.shadowCameraNear=ut.camera.near,G.shadowCameraFar=ut.camera.far,i.pointShadow[M]=G,i.pointShadowMap[M]=it,i.pointShadowMatrix[M]=B.shadow.matrix,S++}i.point[M]=H,M++}else if(B.isHemisphereLight){let H=t.get(B);H.skyColor.copy(B.color).multiplyScalar(W),H.groundColor.copy(B.groundColor).multiplyScalar(W),i.hemi[v]=H,v++}}x>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=d,i.ambient[2]=_;let O=i.hash;(O.directionalLength!==g||O.pointLength!==M||O.spotLength!==b||O.rectAreaLength!==x||O.hemiLength!==v||O.numDirectionalShadows!==R||O.numPointShadows!==S||O.numSpotShadows!==w||O.numSpotMaps!==k||O.numLightProbes!==D)&&(i.directional.length=g,i.spot.length=b,i.rectArea.length=x,i.point.length=M,i.hemi.length=v,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=w+k-C,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=D,O.directionalLength=g,O.pointLength=M,O.spotLength=b,O.rectAreaLength=x,O.hemiLength=v,O.numDirectionalShadows=R,O.numPointShadows=S,O.numSpotShadows=w,O.numSpotMaps=k,O.numLightProbes=D,i.version=by++)}function u(f,m){let d=0,_=0,g=0,M=0,b=0,x=m.matrixWorldInverse;for(let v=0,R=f.length;v<R;v++){let S=f[v];if(S.isDirectionalLight){let w=i.directional[d];w.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(x),d++}else if(S.isSpotLight){let w=i.spot[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(x),g++}else if(S.isRectAreaLight){let w=i.rectArea[M];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(x),l.identity(),a.copy(S.matrixWorld),a.premultiply(x),l.extractRotation(a),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(l),w.halfHeight.applyMatrix4(l),M++}else if(S.isPointLight){let w=i.point[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(x),_++}else if(S.isHemisphereLight){let w=i.hemi[b];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(x),b++}}}return{setup:h,setupView:u,state:i}}function Mf(s){let t=new wy(s),e=[],i=[];function r(m){f.camera=m,e.length=0,i.length=0}function a(m){e.push(m)}function l(m){i.push(m)}function h(){t.setup(e)}function u(m){t.setupView(e,m)}let f={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:h,setupLightsView:u,pushLight:a,pushShadow:l}}function Ty(s){let t=new WeakMap;function e(r,a=0){let l=t.get(r),h;return l===void 0?(h=new Mf(s),t.set(r,[h])):a>=l.length?(h=new Mf(s),l.push(h)):h=l[a],h}function i(){t=new WeakMap}return{get:e,dispose:i}}var Nh=class extends _i{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=vg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Oh=class extends _i{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ey=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ay=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Py(s,t,e){let i=new eo,r=new Zt,a=new Zt,l=new De,h=new Nh({depthPacking:xg}),u=new Oh,f={},m=e.maxTextureSize,d={[es]:mn,[mn]:es,[zn]:zn},_=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:Ey,fragmentShader:Ay}),g=_.clone();g.defines.HORIZONTAL_PASS=1;let M=new Ge;M.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Be(M,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uf;let v=this.type;this.render=function(C,D,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;let E=s.getRenderTarget(),T=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),X=s.state;X.setBlending(Qi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let W=v!==Di&&this.type===Di,K=v===Di&&this.type!==Di;for(let it=0,H=C.length;it<H;it++){let ut=C[it],G=ut.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ut,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let lt=G.getFrameExtents();if(r.multiply(lt),a.copy(G.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(a.x=Math.floor(m/lt.x),r.x=a.x*lt.x,G.mapSize.x=a.x),r.y>m&&(a.y=Math.floor(m/lt.y),r.y=a.y*lt.y,G.mapSize.y=a.y)),G.map===null||W===!0||K===!0){let ot=this.type!==Di?{minFilter:ni,magFilter:ni}:{};G.map!==null&&G.map.dispose(),G.map=new Vi(r.x,r.y,ot),G.map.texture.name=ut.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();let rt=G.getViewportCount();for(let ot=0;ot<rt;ot++){let Mt=G.getViewport(ot);l.set(a.x*Mt.x,a.y*Mt.y,a.x*Mt.z,a.y*Mt.w),X.viewport(l),G.updateMatrices(ut,ot),i=G.getFrustum(),w(D,O,G.camera,ut,this.type)}G.isPointLightShadow!==!0&&this.type===Di&&R(G,O),G.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(E,T,B)};function R(C,D){let O=t.update(b);_.defines.VSM_SAMPLES!==C.blurSamples&&(_.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,_.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Vi(r.x,r.y)),_.uniforms.shadow_pass.value=C.map.texture,_.uniforms.resolution.value=C.mapSize,_.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(D,null,O,_,b,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(D,null,O,g,b,null)}function S(C,D,O,E){let T=null,B=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(B!==void 0)T=B;else if(T=O.isPointLight===!0?u:h,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let X=T.uuid,W=D.uuid,K=f[X];K===void 0&&(K={},f[X]=K);let it=K[W];it===void 0&&(it=T.clone(),K[W]=it,D.addEventListener("dispose",k)),T=it}if(T.visible=D.visible,T.wireframe=D.wireframe,E===Di?T.side=D.shadowSide!==null?D.shadowSide:D.side:T.side=D.shadowSide!==null?D.shadowSide:d[D.side],T.alphaMap=D.alphaMap,T.alphaTest=D.alphaTest,T.map=D.map,T.clipShadows=D.clipShadows,T.clippingPlanes=D.clippingPlanes,T.clipIntersection=D.clipIntersection,T.displacementMap=D.displacementMap,T.displacementScale=D.displacementScale,T.displacementBias=D.displacementBias,T.wireframeLinewidth=D.wireframeLinewidth,T.linewidth=D.linewidth,O.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let X=s.properties.get(T);X.light=O}return T}function w(C,D,O,E,T){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===Di)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);let W=t.update(C),K=C.material;if(Array.isArray(K)){let it=W.groups;for(let H=0,ut=it.length;H<ut;H++){let G=it[H],lt=K[G.materialIndex];if(lt&&lt.visible){let rt=S(C,lt,E,T);C.onBeforeShadow(s,C,D,O,W,rt,G),s.renderBufferDirect(O,null,W,rt,C,G),C.onAfterShadow(s,C,D,O,W,rt,G)}}}else if(K.visible){let it=S(C,K,E,T);C.onBeforeShadow(s,C,D,O,W,it,null),s.renderBufferDirect(O,null,W,it,C,null),C.onAfterShadow(s,C,D,O,W,it,null)}}let X=C.children;for(let W=0,K=X.length;W<K;W++)w(X[W],D,O,E,T)}function k(C){C.target.removeEventListener("dispose",k);for(let O in f){let E=f[O],T=C.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}var Cy={[Bc]:Fc,[zc]:Gc,[Hc]:Wc,[dr]:Vc,[Fc]:Bc,[Gc]:zc,[Wc]:Hc,[Vc]:dr};function Ry(s,t){function e(){let Z=!1,Tt=new De,at=null,dt=new De(0,0,0,0);return{setMask:function(Ct){at!==Ct&&!Z&&(s.colorMask(Ct,Ct,Ct,Ct),at=Ct)},setLocked:function(Ct){Z=Ct},setClear:function(Ct,At,ee,ze,Ze){Ze===!0&&(Ct*=ze,At*=ze,ee*=ze),Tt.set(Ct,At,ee,ze),dt.equals(Tt)===!1&&(s.clearColor(Ct,At,ee,ze),dt.copy(Tt))},reset:function(){Z=!1,at=null,dt.set(-1,0,0,0)}}}function i(){let Z=!1,Tt=!1,at=null,dt=null,Ct=null;return{setReversed:function(At){if(Tt!==At){let ee=t.get("EXT_clip_control");Tt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT);let ze=Ct;Ct=null,this.setClear(ze)}Tt=At},getReversed:function(){return Tt},setTest:function(At){At?gt(s.DEPTH_TEST):Xt(s.DEPTH_TEST)},setMask:function(At){at!==At&&!Z&&(s.depthMask(At),at=At)},setFunc:function(At){if(Tt&&(At=Cy[At]),dt!==At){switch(At){case Bc:s.depthFunc(s.NEVER);break;case Fc:s.depthFunc(s.ALWAYS);break;case zc:s.depthFunc(s.LESS);break;case dr:s.depthFunc(s.LEQUAL);break;case Hc:s.depthFunc(s.EQUAL);break;case Vc:s.depthFunc(s.GEQUAL);break;case Gc:s.depthFunc(s.GREATER);break;case Wc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=At}},setLocked:function(At){Z=At},setClear:function(At){Ct!==At&&(Tt&&(At=1-At),s.clearDepth(At),Ct=At)},reset:function(){Z=!1,at=null,dt=null,Ct=null,Tt=!1}}}function r(){let Z=!1,Tt=null,at=null,dt=null,Ct=null,At=null,ee=null,ze=null,Ze=null;return{setTest:function(Te){Z||(Te?gt(s.STENCIL_TEST):Xt(s.STENCIL_TEST))},setMask:function(Te){Tt!==Te&&!Z&&(s.stencilMask(Te),Tt=Te)},setFunc:function(Te,Tn,qn){(at!==Te||dt!==Tn||Ct!==qn)&&(s.stencilFunc(Te,Tn,qn),at=Te,dt=Tn,Ct=qn)},setOp:function(Te,Tn,qn){(At!==Te||ee!==Tn||ze!==qn)&&(s.stencilOp(Te,Tn,qn),At=Te,ee=Tn,ze=qn)},setLocked:function(Te){Z=Te},setClear:function(Te){Ze!==Te&&(s.clearStencil(Te),Ze=Te)},reset:function(){Z=!1,Tt=null,at=null,dt=null,Ct=null,At=null,ee=null,ze=null,Ze=null}}}let a=new e,l=new i,h=new r,u=new WeakMap,f=new WeakMap,m={},d={},_=new WeakMap,g=[],M=null,b=!1,x=null,v=null,R=null,S=null,w=null,k=null,C=null,D=new fe(0,0,0),O=0,E=!1,T=null,B=null,X=null,W=null,K=null,it=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,ut=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=ut>=1):G.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=ut>=2);let lt=null,rt={},ot=s.getParameter(s.SCISSOR_BOX),Mt=s.getParameter(s.VIEWPORT),yt=new De().fromArray(ot),$=new De().fromArray(Mt);function pt(Z,Tt,at,dt){let Ct=new Uint8Array(4),At=s.createTexture();s.bindTexture(Z,At),s.texParameteri(Z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ee=0;ee<at;ee++)Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?s.texImage3D(Tt,0,s.RGBA,1,1,dt,0,s.RGBA,s.UNSIGNED_BYTE,Ct):s.texImage2D(Tt+ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ct);return At}let bt={};bt[s.TEXTURE_2D]=pt(s.TEXTURE_2D,s.TEXTURE_2D,1),bt[s.TEXTURE_CUBE_MAP]=pt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[s.TEXTURE_2D_ARRAY]=pt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),bt[s.TEXTURE_3D]=pt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),h.setClear(0),gt(s.DEPTH_TEST),l.setFunc(dr),ne(!1),Ot(bd),gt(s.CULL_FACE),V(Qi);function gt(Z){m[Z]!==!0&&(s.enable(Z),m[Z]=!0)}function Xt(Z){m[Z]!==!1&&(s.disable(Z),m[Z]=!1)}function xt(Z,Tt){return d[Z]!==Tt?(s.bindFramebuffer(Z,Tt),d[Z]=Tt,Z===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Tt),Z===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Tt),!0):!1}function st(Z,Tt){let at=g,dt=!1;if(Z){at=_.get(Tt),at===void 0&&(at=[],_.set(Tt,at));let Ct=Z.textures;if(at.length!==Ct.length||at[0]!==s.COLOR_ATTACHMENT0){for(let At=0,ee=Ct.length;At<ee;At++)at[At]=s.COLOR_ATTACHMENT0+At;at.length=Ct.length,dt=!0}}else at[0]!==s.BACK&&(at[0]=s.BACK,dt=!0);dt&&s.drawBuffers(at)}function It(Z){return M!==Z?(s.useProgram(Z),M=Z,!0):!1}let qt={[vs]:s.FUNC_ADD,[Zm]:s.FUNC_SUBTRACT,[Xm]:s.FUNC_REVERSE_SUBTRACT};qt[qm]=s.MIN,qt[Ym]=s.MAX;let oe={[Km]:s.ZERO,[$m]:s.ONE,[Jm]:s.SRC_COLOR,[Uc]:s.SRC_ALPHA,[ig]:s.SRC_ALPHA_SATURATE,[eg]:s.DST_COLOR,[Qm]:s.DST_ALPHA,[jm]:s.ONE_MINUS_SRC_COLOR,[kc]:s.ONE_MINUS_SRC_ALPHA,[ng]:s.ONE_MINUS_DST_COLOR,[tg]:s.ONE_MINUS_DST_ALPHA,[sg]:s.CONSTANT_COLOR,[rg]:s.ONE_MINUS_CONSTANT_COLOR,[og]:s.CONSTANT_ALPHA,[ag]:s.ONE_MINUS_CONSTANT_ALPHA};function V(Z,Tt,at,dt,Ct,At,ee,ze,Ze,Te){if(Z===Qi){b===!0&&(Xt(s.BLEND),b=!1);return}if(b===!1&&(gt(s.BLEND),b=!0),Z!==Wm){if(Z!==x||Te!==E){if((v!==vs||w!==vs)&&(s.blendEquation(s.FUNC_ADD),v=vs,w=vs),Te)switch(Z){case ar:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sd:s.blendFunc(s.ONE,s.ONE);break;case wd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Td:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case ar:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sd:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case wd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Td:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}R=null,S=null,k=null,C=null,D.set(0,0,0),O=0,x=Z,E=Te}return}Ct=Ct||Tt,At=At||at,ee=ee||dt,(Tt!==v||Ct!==w)&&(s.blendEquationSeparate(qt[Tt],qt[Ct]),v=Tt,w=Ct),(at!==R||dt!==S||At!==k||ee!==C)&&(s.blendFuncSeparate(oe[at],oe[dt],oe[At],oe[ee]),R=at,S=dt,k=At,C=ee),(ze.equals(D)===!1||Ze!==O)&&(s.blendColor(ze.r,ze.g,ze.b,Ze),D.copy(ze),O=Ze),x=Z,E=!1}function Ae(Z,Tt){Z.side===zn?Xt(s.CULL_FACE):gt(s.CULL_FACE);let at=Z.side===mn;Tt&&(at=!at),ne(at),Z.blending===ar&&Z.transparent===!1?V(Qi):V(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),l.setFunc(Z.depthFunc),l.setTest(Z.depthTest),l.setMask(Z.depthWrite),a.setMask(Z.colorWrite);let dt=Z.stencilWrite;h.setTest(dt),dt&&(h.setMask(Z.stencilWriteMask),h.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),h.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),be(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?gt(s.SAMPLE_ALPHA_TO_COVERAGE):Xt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ne(Z){T!==Z&&(Z?s.frontFace(s.CW):s.frontFace(s.CCW),T=Z)}function Ot(Z){Z!==Hm?(gt(s.CULL_FACE),Z!==B&&(Z===bd?s.cullFace(s.BACK):Z===Vm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Xt(s.CULL_FACE),B=Z}function kt(Z){Z!==X&&(H&&s.lineWidth(Z),X=Z)}function be(Z,Tt,at){Z?(gt(s.POLYGON_OFFSET_FILL),(W!==Tt||K!==at)&&(s.polygonOffset(Tt,at),W=Tt,K=at)):Xt(s.POLYGON_OFFSET_FILL)}function Yt(Z){Z?gt(s.SCISSOR_TEST):Xt(s.SCISSOR_TEST)}function U(Z){Z===void 0&&(Z=s.TEXTURE0+it-1),lt!==Z&&(s.activeTexture(Z),lt=Z)}function I(Z,Tt,at){at===void 0&&(lt===null?at=s.TEXTURE0+it-1:at=lt);let dt=rt[at];dt===void 0&&(dt={type:void 0,texture:void 0},rt[at]=dt),(dt.type!==Z||dt.texture!==Tt)&&(lt!==at&&(s.activeTexture(at),lt=at),s.bindTexture(Z,Tt||bt[Z]),dt.type=Z,dt.texture=Tt)}function j(){let Z=rt[lt];Z!==void 0&&Z.type!==void 0&&(s.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function ht(){try{s.compressedTexImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function mt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ct(){try{s.texSubImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Gt(){try{s.texSubImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Et(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Dt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function me(){try{s.texStorage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function _t(){try{s.texStorage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Nt(){try{s.texImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function $t(){try{s.texImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Qt(Z){yt.equals(Z)===!1&&(s.scissor(Z.x,Z.y,Z.z,Z.w),yt.copy(Z))}function Lt(Z){$.equals(Z)===!1&&(s.viewport(Z.x,Z.y,Z.z,Z.w),$.copy(Z))}function pe(Z,Tt){let at=f.get(Tt);at===void 0&&(at=new WeakMap,f.set(Tt,at));let dt=at.get(Z);dt===void 0&&(dt=s.getUniformBlockIndex(Tt,Z.name),at.set(Z,dt))}function ie(Z,Tt){let dt=f.get(Tt).get(Z);u.get(Tt)!==dt&&(s.uniformBlockBinding(Tt,dt,Z.__bindingPointIndex),u.set(Tt,dt))}function Pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),l.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},lt=null,rt={},d={},_=new WeakMap,g=[],M=null,b=!1,x=null,v=null,R=null,S=null,w=null,k=null,C=null,D=new fe(0,0,0),O=0,E=!1,T=null,B=null,X=null,W=null,K=null,yt.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),h.reset()}return{buffers:{color:a,depth:l,stencil:h},enable:gt,disable:Xt,bindFramebuffer:xt,drawBuffers:st,useProgram:It,setBlending:V,setMaterial:Ae,setFlipSided:ne,setCullFace:Ot,setLineWidth:kt,setPolygonOffset:be,setScissorTest:Yt,activeTexture:U,bindTexture:I,unbindTexture:j,compressedTexImage2D:ht,compressedTexImage3D:mt,texImage2D:Nt,texImage3D:$t,updateUBOMapping:pe,uniformBlockBinding:ie,texStorage2D:me,texStorage3D:_t,texSubImage2D:ct,texSubImage3D:Gt,compressedTexSubImage2D:Et,compressedTexSubImage3D:Dt,scissor:Qt,viewport:Lt,reset:Pe}}function bf(s,t,e,i){let r=Ly(i);switch(e){case Vf:return s*t;case Wf:return s*t;case Zf:return s*t*2;case Xf:return s*t/r.components*r.byteLength;case eu:return s*t/r.components*r.byteLength;case qf:return s*t*2/r.components*r.byteLength;case nu:return s*t*2/r.components*r.byteLength;case Gf:return s*t*3/r.components*r.byteLength;case ei:return s*t*4/r.components*r.byteLength;case iu:return s*t*4/r.components*r.byteLength;case Ma:case ba:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Sa:case wa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $c:case jc:return Math.max(s,16)*Math.max(t,8)/4;case Kc:case Jc:return Math.max(s,8)*Math.max(t,8)/2;case Qc:case th:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case eh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ih:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case sh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case rh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case oh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ah:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case lh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ch:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case hh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case uh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case dh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case fh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ph:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case mh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ta:case gh:case _h:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Yf:case vh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case xh:case yh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ly(s){switch(s){case zi:case Ff:return{byteLength:1,components:1};case Qr:case zf:case lo:return{byteLength:2,components:1};case Qh:case tu:return{byteLength:2,components:4};case bs:case jh:case Oi:return{byteLength:4,components:1};case Hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Iy(s,t,e,i,r,a,l){let h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Zt,m=new WeakMap,d,_=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,I){return g?new OffscreenCanvas(U,I):Pa("canvas")}function b(U,I,j){let ht=1,mt=Yt(U);if((mt.width>j||mt.height>j)&&(ht=j/Math.max(mt.width,mt.height)),ht<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let ct=Math.floor(ht*mt.width),Gt=Math.floor(ht*mt.height);d===void 0&&(d=M(ct,Gt));let Et=I?M(ct,Gt):d;return Et.width=ct,Et.height=Gt,Et.getContext("2d").drawImage(U,0,0,ct,Gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ct+"x"+Gt+")."),Et}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),U;return U}function x(U){return U.generateMipmaps}function v(U){s.generateMipmap(U)}function R(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(U,I,j,ht,mt=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ct=I;if(I===s.RED&&(j===s.FLOAT&&(ct=s.R32F),j===s.HALF_FLOAT&&(ct=s.R16F),j===s.UNSIGNED_BYTE&&(ct=s.R8)),I===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(ct=s.R8UI),j===s.UNSIGNED_SHORT&&(ct=s.R16UI),j===s.UNSIGNED_INT&&(ct=s.R32UI),j===s.BYTE&&(ct=s.R8I),j===s.SHORT&&(ct=s.R16I),j===s.INT&&(ct=s.R32I)),I===s.RG&&(j===s.FLOAT&&(ct=s.RG32F),j===s.HALF_FLOAT&&(ct=s.RG16F),j===s.UNSIGNED_BYTE&&(ct=s.RG8)),I===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(ct=s.RG8UI),j===s.UNSIGNED_SHORT&&(ct=s.RG16UI),j===s.UNSIGNED_INT&&(ct=s.RG32UI),j===s.BYTE&&(ct=s.RG8I),j===s.SHORT&&(ct=s.RG16I),j===s.INT&&(ct=s.RG32I)),I===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(ct=s.RGB8UI),j===s.UNSIGNED_SHORT&&(ct=s.RGB16UI),j===s.UNSIGNED_INT&&(ct=s.RGB32UI),j===s.BYTE&&(ct=s.RGB8I),j===s.SHORT&&(ct=s.RGB16I),j===s.INT&&(ct=s.RGB32I)),I===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(ct=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(ct=s.RGBA16UI),j===s.UNSIGNED_INT&&(ct=s.RGBA32UI),j===s.BYTE&&(ct=s.RGBA8I),j===s.SHORT&&(ct=s.RGBA16I),j===s.INT&&(ct=s.RGBA32I)),I===s.RGB&&j===s.UNSIGNED_INT_5_9_9_9_REV&&(ct=s.RGB9_E5),I===s.RGBA){let Gt=mt?al:Se.getTransfer(ht);j===s.FLOAT&&(ct=s.RGBA32F),j===s.HALF_FLOAT&&(ct=s.RGBA16F),j===s.UNSIGNED_BYTE&&(ct=Gt===Ie?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(ct=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(ct=s.RGB5_A1)}return(ct===s.R16F||ct===s.R32F||ct===s.RG16F||ct===s.RG32F||ct===s.RGBA16F||ct===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function w(U,I){let j;return U?I===null||I===bs||I===mr?j=s.DEPTH24_STENCIL8:I===Oi?j=s.DEPTH32F_STENCIL8:I===Qr&&(j=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===bs||I===mr?j=s.DEPTH_COMPONENT24:I===Oi?j=s.DEPTH_COMPONENT32F:I===Qr&&(j=s.DEPTH_COMPONENT16),j}function k(U,I){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==ni&&U.minFilter!==Hn?Math.log2(Math.max(I.width,I.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?I.mipmaps.length:1}function C(U){let I=U.target;I.removeEventListener("dispose",C),O(I),I.isVideoTexture&&m.delete(I)}function D(U){let I=U.target;I.removeEventListener("dispose",D),T(I)}function O(U){let I=i.get(U);if(I.__webglInit===void 0)return;let j=U.source,ht=_.get(j);if(ht){let mt=ht[I.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&E(U),Object.keys(ht).length===0&&_.delete(j)}i.remove(U)}function E(U){let I=i.get(U);s.deleteTexture(I.__webglTexture);let j=U.source,ht=_.get(j);delete ht[I.__cacheKey],l.memory.textures--}function T(U){let I=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(I.__webglFramebuffer[ht]))for(let mt=0;mt<I.__webglFramebuffer[ht].length;mt++)s.deleteFramebuffer(I.__webglFramebuffer[ht][mt]);else s.deleteFramebuffer(I.__webglFramebuffer[ht]);I.__webglDepthbuffer&&s.deleteRenderbuffer(I.__webglDepthbuffer[ht])}else{if(Array.isArray(I.__webglFramebuffer))for(let ht=0;ht<I.__webglFramebuffer.length;ht++)s.deleteFramebuffer(I.__webglFramebuffer[ht]);else s.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&s.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&s.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let ht=0;ht<I.__webglColorRenderbuffer.length;ht++)I.__webglColorRenderbuffer[ht]&&s.deleteRenderbuffer(I.__webglColorRenderbuffer[ht]);I.__webglDepthRenderbuffer&&s.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let j=U.textures;for(let ht=0,mt=j.length;ht<mt;ht++){let ct=i.get(j[ht]);ct.__webglTexture&&(s.deleteTexture(ct.__webglTexture),l.memory.textures--),i.remove(j[ht])}i.remove(U)}let B=0;function X(){B=0}function W(){let U=B;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),B+=1,U}function K(U){let I=[];return I.push(U.wrapS),I.push(U.wrapT),I.push(U.wrapR||0),I.push(U.magFilter),I.push(U.minFilter),I.push(U.anisotropy),I.push(U.internalFormat),I.push(U.format),I.push(U.type),I.push(U.generateMipmaps),I.push(U.premultiplyAlpha),I.push(U.flipY),I.push(U.unpackAlignment),I.push(U.colorSpace),I.join()}function it(U,I){let j=i.get(U);if(U.isVideoTexture&&kt(U),U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){let ht=U.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(j,U,I);return}}e.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+I)}function H(U,I){let j=i.get(U);if(U.version>0&&j.__version!==U.version){$(j,U,I);return}e.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+I)}function ut(U,I){let j=i.get(U);if(U.version>0&&j.__version!==U.version){$(j,U,I);return}e.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+I)}function G(U,I){let j=i.get(U);if(U.version>0&&j.__version!==U.version){pt(j,U,I);return}e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+I)}let lt={[qc]:s.REPEAT,[ys]:s.CLAMP_TO_EDGE,[Yc]:s.MIRRORED_REPEAT},rt={[ni]:s.NEAREST,[_g]:s.NEAREST_MIPMAP_NEAREST,[Ho]:s.NEAREST_MIPMAP_LINEAR,[Hn]:s.LINEAR,[ic]:s.LINEAR_MIPMAP_NEAREST,[Ms]:s.LINEAR_MIPMAP_LINEAR},ot={[Mg]:s.NEVER,[Ag]:s.ALWAYS,[bg]:s.LESS,[$f]:s.LEQUAL,[Sg]:s.EQUAL,[Eg]:s.GEQUAL,[wg]:s.GREATER,[Tg]:s.NOTEQUAL};function Mt(U,I){if(I.type===Oi&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===Hn||I.magFilter===ic||I.magFilter===Ho||I.magFilter===Ms||I.minFilter===Hn||I.minFilter===ic||I.minFilter===Ho||I.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,lt[I.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,lt[I.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,lt[I.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,rt[I.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,rt[I.minFilter]),I.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,ot[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===ni||I.minFilter!==Ho&&I.minFilter!==Ms||I.type===Oi&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||i.get(I).__currentAnisotropy){let j=t.get("EXT_texture_filter_anisotropic");s.texParameterf(U,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,r.getMaxAnisotropy())),i.get(I).__currentAnisotropy=I.anisotropy}}}function yt(U,I){let j=!1;U.__webglInit===void 0&&(U.__webglInit=!0,I.addEventListener("dispose",C));let ht=I.source,mt=_.get(ht);mt===void 0&&(mt={},_.set(ht,mt));let ct=K(I);if(ct!==U.__cacheKey){mt[ct]===void 0&&(mt[ct]={texture:s.createTexture(),usedTimes:0},l.memory.textures++,j=!0),mt[ct].usedTimes++;let Gt=mt[U.__cacheKey];Gt!==void 0&&(mt[U.__cacheKey].usedTimes--,Gt.usedTimes===0&&E(I)),U.__cacheKey=ct,U.__webglTexture=mt[ct].texture}return j}function $(U,I,j){let ht=s.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(ht=s.TEXTURE_2D_ARRAY),I.isData3DTexture&&(ht=s.TEXTURE_3D);let mt=yt(U,I),ct=I.source;e.bindTexture(ht,U.__webglTexture,s.TEXTURE0+j);let Gt=i.get(ct);if(ct.version!==Gt.__version||mt===!0){e.activeTexture(s.TEXTURE0+j);let Et=Se.getPrimaries(Se.workingColorSpace),Dt=I.colorSpace===ji?null:Se.getPrimaries(I.colorSpace),me=I.colorSpace===ji||Et===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,I.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,I.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let _t=b(I.image,!1,r.maxTextureSize);_t=be(I,_t);let Nt=a.convert(I.format,I.colorSpace),$t=a.convert(I.type),Qt=S(I.internalFormat,Nt,$t,I.colorSpace,I.isVideoTexture);Mt(ht,I);let Lt,pe=I.mipmaps,ie=I.isVideoTexture!==!0,Pe=Gt.__version===void 0||mt===!0,Z=ct.dataReady,Tt=k(I,_t);if(I.isDepthTexture)Qt=w(I.format===gr,I.type),Pe&&(ie?e.texStorage2D(s.TEXTURE_2D,1,Qt,_t.width,_t.height):e.texImage2D(s.TEXTURE_2D,0,Qt,_t.width,_t.height,0,Nt,$t,null));else if(I.isDataTexture)if(pe.length>0){ie&&Pe&&e.texStorage2D(s.TEXTURE_2D,Tt,Qt,pe[0].width,pe[0].height);for(let at=0,dt=pe.length;at<dt;at++)Lt=pe[at],ie?Z&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,Lt.width,Lt.height,Nt,$t,Lt.data):e.texImage2D(s.TEXTURE_2D,at,Qt,Lt.width,Lt.height,0,Nt,$t,Lt.data);I.generateMipmaps=!1}else ie?(Pe&&e.texStorage2D(s.TEXTURE_2D,Tt,Qt,_t.width,_t.height),Z&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t.width,_t.height,Nt,$t,_t.data)):e.texImage2D(s.TEXTURE_2D,0,Qt,_t.width,_t.height,0,Nt,$t,_t.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){ie&&Pe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Tt,Qt,pe[0].width,pe[0].height,_t.depth);for(let at=0,dt=pe.length;at<dt;at++)if(Lt=pe[at],I.format!==ei)if(Nt!==null)if(ie){if(Z)if(I.layerUpdates.size>0){let Ct=bf(Lt.width,Lt.height,I.format,I.type);for(let At of I.layerUpdates){let ee=Lt.data.subarray(At*Ct/Lt.data.BYTES_PER_ELEMENT,(At+1)*Ct/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,At,Lt.width,Lt.height,1,Nt,ee)}I.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,Lt.width,Lt.height,_t.depth,Nt,Lt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,at,Qt,Lt.width,Lt.height,_t.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?Z&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,Lt.width,Lt.height,_t.depth,Nt,$t,Lt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,at,Qt,Lt.width,Lt.height,_t.depth,0,Nt,$t,Lt.data)}else{ie&&Pe&&e.texStorage2D(s.TEXTURE_2D,Tt,Qt,pe[0].width,pe[0].height);for(let at=0,dt=pe.length;at<dt;at++)Lt=pe[at],I.format!==ei?Nt!==null?ie?Z&&e.compressedTexSubImage2D(s.TEXTURE_2D,at,0,0,Lt.width,Lt.height,Nt,Lt.data):e.compressedTexImage2D(s.TEXTURE_2D,at,Qt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?Z&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,Lt.width,Lt.height,Nt,$t,Lt.data):e.texImage2D(s.TEXTURE_2D,at,Qt,Lt.width,Lt.height,0,Nt,$t,Lt.data)}else if(I.isDataArrayTexture)if(ie){if(Pe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Tt,Qt,_t.width,_t.height,_t.depth),Z)if(I.layerUpdates.size>0){let at=bf(_t.width,_t.height,I.format,I.type);for(let dt of I.layerUpdates){let Ct=_t.data.subarray(dt*at/_t.data.BYTES_PER_ELEMENT,(dt+1)*at/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,dt,_t.width,_t.height,1,Nt,$t,Ct)}I.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Nt,$t,_t.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Qt,_t.width,_t.height,_t.depth,0,Nt,$t,_t.data);else if(I.isData3DTexture)ie?(Pe&&e.texStorage3D(s.TEXTURE_3D,Tt,Qt,_t.width,_t.height,_t.depth),Z&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Nt,$t,_t.data)):e.texImage3D(s.TEXTURE_3D,0,Qt,_t.width,_t.height,_t.depth,0,Nt,$t,_t.data);else if(I.isFramebufferTexture){if(Pe)if(ie)e.texStorage2D(s.TEXTURE_2D,Tt,Qt,_t.width,_t.height);else{let at=_t.width,dt=_t.height;for(let Ct=0;Ct<Tt;Ct++)e.texImage2D(s.TEXTURE_2D,Ct,Qt,at,dt,0,Nt,$t,null),at>>=1,dt>>=1}}else if(pe.length>0){if(ie&&Pe){let at=Yt(pe[0]);e.texStorage2D(s.TEXTURE_2D,Tt,Qt,at.width,at.height)}for(let at=0,dt=pe.length;at<dt;at++)Lt=pe[at],ie?Z&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,Nt,$t,Lt):e.texImage2D(s.TEXTURE_2D,at,Qt,Nt,$t,Lt);I.generateMipmaps=!1}else if(ie){if(Pe){let at=Yt(_t);e.texStorage2D(s.TEXTURE_2D,Tt,Qt,at.width,at.height)}Z&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Nt,$t,_t)}else e.texImage2D(s.TEXTURE_2D,0,Qt,Nt,$t,_t);x(I)&&v(ht),Gt.__version=ct.version,I.onUpdate&&I.onUpdate(I)}U.__version=I.version}function pt(U,I,j){if(I.image.length!==6)return;let ht=yt(U,I),mt=I.source;e.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+j);let ct=i.get(mt);if(mt.version!==ct.__version||ht===!0){e.activeTexture(s.TEXTURE0+j);let Gt=Se.getPrimaries(Se.workingColorSpace),Et=I.colorSpace===ji?null:Se.getPrimaries(I.colorSpace),Dt=I.colorSpace===ji||Gt===Et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,I.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,I.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let me=I.isCompressedTexture||I.image[0].isCompressedTexture,_t=I.image[0]&&I.image[0].isDataTexture,Nt=[];for(let dt=0;dt<6;dt++)!me&&!_t?Nt[dt]=b(I.image[dt],!0,r.maxCubemapSize):Nt[dt]=_t?I.image[dt].image:I.image[dt],Nt[dt]=be(I,Nt[dt]);let $t=Nt[0],Qt=a.convert(I.format,I.colorSpace),Lt=a.convert(I.type),pe=S(I.internalFormat,Qt,Lt,I.colorSpace),ie=I.isVideoTexture!==!0,Pe=ct.__version===void 0||ht===!0,Z=mt.dataReady,Tt=k(I,$t);Mt(s.TEXTURE_CUBE_MAP,I);let at;if(me){ie&&Pe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Tt,pe,$t.width,$t.height);for(let dt=0;dt<6;dt++){at=Nt[dt].mipmaps;for(let Ct=0;Ct<at.length;Ct++){let At=at[Ct];I.format!==ei?Qt!==null?ie?Z&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct,0,0,At.width,At.height,Qt,At.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct,pe,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?Z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct,0,0,At.width,At.height,Qt,Lt,At.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct,pe,At.width,At.height,0,Qt,Lt,At.data)}}}else{if(at=I.mipmaps,ie&&Pe){at.length>0&&Tt++;let dt=Yt(Nt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Tt,pe,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(_t){ie?Z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Nt[dt].width,Nt[dt].height,Qt,Lt,Nt[dt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,pe,Nt[dt].width,Nt[dt].height,0,Qt,Lt,Nt[dt].data);for(let Ct=0;Ct<at.length;Ct++){let ee=at[Ct].image[dt].image;ie?Z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct+1,0,0,ee.width,ee.height,Qt,Lt,ee.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct+1,pe,ee.width,ee.height,0,Qt,Lt,ee.data)}}else{ie?Z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Qt,Lt,Nt[dt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,pe,Qt,Lt,Nt[dt]);for(let Ct=0;Ct<at.length;Ct++){let At=at[Ct];ie?Z&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct+1,0,0,Qt,Lt,At.image[dt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct+1,pe,Qt,Lt,At.image[dt])}}}x(I)&&v(s.TEXTURE_CUBE_MAP),ct.__version=mt.version,I.onUpdate&&I.onUpdate(I)}U.__version=I.version}function bt(U,I,j,ht,mt,ct){let Gt=a.convert(j.format,j.colorSpace),Et=a.convert(j.type),Dt=S(j.internalFormat,Gt,Et,j.colorSpace),me=i.get(I),_t=i.get(j);if(_t.__renderTarget=I,!me.__hasExternalTextures){let Nt=Math.max(1,I.width>>ct),$t=Math.max(1,I.height>>ct);mt===s.TEXTURE_3D||mt===s.TEXTURE_2D_ARRAY?e.texImage3D(mt,ct,Dt,Nt,$t,I.depth,0,Gt,Et,null):e.texImage2D(mt,ct,Dt,Nt,$t,0,Gt,Et,null)}e.bindFramebuffer(s.FRAMEBUFFER,U),Ot(I)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,mt,_t.__webglTexture,0,ne(I)):(mt===s.TEXTURE_2D||mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ht,mt,_t.__webglTexture,ct),e.bindFramebuffer(s.FRAMEBUFFER,null)}function gt(U,I,j){if(s.bindRenderbuffer(s.RENDERBUFFER,U),I.depthBuffer){let ht=I.depthTexture,mt=ht&&ht.isDepthTexture?ht.type:null,ct=w(I.stencilBuffer,mt),Gt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=ne(I);Ot(I)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Et,ct,I.width,I.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,ct,I.width,I.height):s.renderbufferStorage(s.RENDERBUFFER,ct,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Gt,s.RENDERBUFFER,U)}else{let ht=I.textures;for(let mt=0;mt<ht.length;mt++){let ct=ht[mt],Gt=a.convert(ct.format,ct.colorSpace),Et=a.convert(ct.type),Dt=S(ct.internalFormat,Gt,Et,ct.colorSpace),me=ne(I);j&&Ot(I)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,me,Dt,I.width,I.height):Ot(I)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me,Dt,I.width,I.height):s.renderbufferStorage(s.RENDERBUFFER,Dt,I.width,I.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Xt(U,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,U),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ht=i.get(I.depthTexture);ht.__renderTarget=I,(!ht.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),it(I.depthTexture,0);let mt=ht.__webglTexture,ct=ne(I);if(I.depthTexture.format===lr)Ot(I)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,mt,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,mt,0);else if(I.depthTexture.format===gr)Ot(I)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,mt,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function xt(U){let I=i.get(U),j=U.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==U.depthTexture){let ht=U.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),ht){let mt=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,ht.removeEventListener("dispose",mt)};ht.addEventListener("dispose",mt),I.__depthDisposeCallback=mt}I.__boundDepthTexture=ht}if(U.depthTexture&&!I.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Xt(I.__webglFramebuffer,U)}else if(j){I.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(s.FRAMEBUFFER,I.__webglFramebuffer[ht]),I.__webglDepthbuffer[ht]===void 0)I.__webglDepthbuffer[ht]=s.createRenderbuffer(),gt(I.__webglDepthbuffer[ht],U,!1);else{let mt=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=I.__webglDepthbuffer[ht];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,ct)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=s.createRenderbuffer(),gt(I.__webglDepthbuffer,U,!1);else{let ht=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=I.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,mt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function st(U,I,j){let ht=i.get(U);I!==void 0&&bt(ht.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&xt(U)}function It(U){let I=U.texture,j=i.get(U),ht=i.get(I);U.addEventListener("dispose",D);let mt=U.textures,ct=U.isWebGLCubeRenderTarget===!0,Gt=mt.length>1;if(Gt||(ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture()),ht.__version=I.version,l.memory.textures++),ct){j.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(I.mipmaps&&I.mipmaps.length>0){j.__webglFramebuffer[Et]=[];for(let Dt=0;Dt<I.mipmaps.length;Dt++)j.__webglFramebuffer[Et][Dt]=s.createFramebuffer()}else j.__webglFramebuffer[Et]=s.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){j.__webglFramebuffer=[];for(let Et=0;Et<I.mipmaps.length;Et++)j.__webglFramebuffer[Et]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(Gt)for(let Et=0,Dt=mt.length;Et<Dt;Et++){let me=i.get(mt[Et]);me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture(),l.memory.textures++)}if(U.samples>0&&Ot(U)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Et=0;Et<mt.length;Et++){let Dt=mt[Et];j.__webglColorRenderbuffer[Et]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[Et]);let me=a.convert(Dt.format,Dt.colorSpace),_t=a.convert(Dt.type),Nt=S(Dt.internalFormat,me,_t,Dt.colorSpace,U.isXRRenderTarget===!0),$t=ne(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,Nt,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,j.__webglColorRenderbuffer[Et])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),gt(j.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){e.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),Mt(s.TEXTURE_CUBE_MAP,I);for(let Et=0;Et<6;Et++)if(I.mipmaps&&I.mipmaps.length>0)for(let Dt=0;Dt<I.mipmaps.length;Dt++)bt(j.__webglFramebuffer[Et][Dt],U,I,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Dt);else bt(j.__webglFramebuffer[Et],U,I,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);x(I)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Gt){for(let Et=0,Dt=mt.length;Et<Dt;Et++){let me=mt[Et],_t=i.get(me);e.bindTexture(s.TEXTURE_2D,_t.__webglTexture),Mt(s.TEXTURE_2D,me),bt(j.__webglFramebuffer,U,me,s.COLOR_ATTACHMENT0+Et,s.TEXTURE_2D,0),x(me)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let Et=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Et=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Et,ht.__webglTexture),Mt(Et,I),I.mipmaps&&I.mipmaps.length>0)for(let Dt=0;Dt<I.mipmaps.length;Dt++)bt(j.__webglFramebuffer[Dt],U,I,s.COLOR_ATTACHMENT0,Et,Dt);else bt(j.__webglFramebuffer,U,I,s.COLOR_ATTACHMENT0,Et,0);x(I)&&v(Et),e.unbindTexture()}U.depthBuffer&&xt(U)}function qt(U){let I=U.textures;for(let j=0,ht=I.length;j<ht;j++){let mt=I[j];if(x(mt)){let ct=R(U),Gt=i.get(mt).__webglTexture;e.bindTexture(ct,Gt),v(ct),e.unbindTexture()}}}let oe=[],V=[];function Ae(U){if(U.samples>0){if(Ot(U)===!1){let I=U.textures,j=U.width,ht=U.height,mt=s.COLOR_BUFFER_BIT,ct=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Gt=i.get(U),Et=I.length>1;if(Et)for(let Dt=0;Dt<I.length;Dt++)e.bindFramebuffer(s.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Dt=0;Dt<I.length;Dt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(mt|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(mt|=s.STENCIL_BUFFER_BIT)),Et){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Gt.__webglColorRenderbuffer[Dt]);let me=i.get(I[Dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,me,0)}s.blitFramebuffer(0,0,j,ht,0,0,j,ht,mt,s.NEAREST),u===!0&&(oe.length=0,V.length=0,oe.push(s.COLOR_ATTACHMENT0+Dt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(oe.push(ct),V.push(ct),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,V)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Et)for(let Dt=0;Dt<I.length;Dt++){e.bindFramebuffer(s.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,Gt.__webglColorRenderbuffer[Dt]);let me=i.get(I[Dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.TEXTURE_2D,me,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&u){let I=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[I])}}}function ne(U){return Math.min(r.maxSamples,U.samples)}function Ot(U){let I=i.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function kt(U){let I=l.render.frame;m.get(U)!==I&&(m.set(U,I),U.update())}function be(U,I){let j=U.colorSpace,ht=U.format,mt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||j!==yr&&j!==ji&&(Se.getTransfer(j)===Ie?(ht!==ei||mt!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),I}function Yt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=W,this.resetTextureUnits=X,this.setTexture2D=it,this.setTexture2DArray=H,this.setTexture3D=ut,this.setTextureCube=G,this.rebindTextures=st,this.setupRenderTarget=It,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Ot}function Dy(s,t){function e(i,r=ji){let a,l=Se.getTransfer(r);if(i===zi)return s.UNSIGNED_BYTE;if(i===Qh)return s.UNSIGNED_SHORT_4_4_4_4;if(i===tu)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Hf)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Ff)return s.BYTE;if(i===zf)return s.SHORT;if(i===Qr)return s.UNSIGNED_SHORT;if(i===jh)return s.INT;if(i===bs)return s.UNSIGNED_INT;if(i===Oi)return s.FLOAT;if(i===lo)return s.HALF_FLOAT;if(i===Vf)return s.ALPHA;if(i===Gf)return s.RGB;if(i===ei)return s.RGBA;if(i===Wf)return s.LUMINANCE;if(i===Zf)return s.LUMINANCE_ALPHA;if(i===lr)return s.DEPTH_COMPONENT;if(i===gr)return s.DEPTH_STENCIL;if(i===Xf)return s.RED;if(i===eu)return s.RED_INTEGER;if(i===qf)return s.RG;if(i===nu)return s.RG_INTEGER;if(i===iu)return s.RGBA_INTEGER;if(i===Ma||i===ba||i===Sa||i===wa)if(l===Ie)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Ma)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Ma)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ba)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kc||i===$c||i===Jc||i===jc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Kc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$c)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qc||i===th||i===eh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Qc||i===th)return l===Ie?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===eh)return l===Ie?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===nh||i===ih||i===sh||i===rh||i===oh||i===ah||i===lh||i===ch||i===hh||i===uh||i===dh||i===fh||i===ph||i===mh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===nh)return l===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ih)return l===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sh)return l===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rh)return l===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oh)return l===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ah)return l===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lh)return l===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ch)return l===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hh)return l===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uh)return l===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dh)return l===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fh)return l===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ph)return l===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mh)return l===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ta||i===gh||i===_h)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Ta)return l===Ie?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_h)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yf||i===vh||i===xh||i===yh)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Ta)return a.COMPRESSED_RED_RGTC1_EXT;if(i===vh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mr?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var Uh=class extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ki=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ny={type:"move"},jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,a=null,l=null,h=this._targetRay,u=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){l=!0;for(let b of t.hand.values()){let x=e.getJointPose(b,i),v=this._getHandJoint(f,b);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}let m=f.joints["index-finger-tip"],d=f.joints["thumb-tip"],_=m.position.distanceTo(d.position),g=.02,M=.005;f.inputState.pinching&&_>g+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&_<=g-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1));h!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Ny)))}return h!==null&&(h.visible=r!==null),u!==null&&(u.visible=a!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ki;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Oy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Uy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,kh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let r=new Nn,a=t.properties.get(r);a.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Zn({vertexShader:Oy,fragmentShader:Uy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Be(new ws(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bh=class extends Hi{constructor(t,e){super();let i=this,r=null,a=1,l=null,h="local-floor",u=1,f=null,m=null,d=null,_=null,g=null,M=null,b=new kh,x=e.getContextAttributes(),v=null,R=null,S=[],w=[],k=new Zt,C=null,D=new yn;D.viewport=new De;let O=new yn;O.viewport=new De;let E=[D,O],T=new Uh,B=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let pt=S[$];return pt===void 0&&(pt=new jr,S[$]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function($){let pt=S[$];return pt===void 0&&(pt=new jr,S[$]=pt),pt.getGripSpace()},this.getHand=function($){let pt=S[$];return pt===void 0&&(pt=new jr,S[$]=pt),pt.getHandSpace()};function W($){let pt=w.indexOf($.inputSource);if(pt===-1)return;let bt=S[pt];bt!==void 0&&(bt.update($.inputSource,$.frame,f||l),bt.dispatchEvent({type:$.type,data:$.inputSource}))}function K(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",it);for(let $=0;$<S.length;$++){let pt=w[$];pt!==null&&(w[$]=null,S[$].disconnect(pt))}B=null,X=null,b.reset(),t.setRenderTarget(v),g=null,_=null,d=null,r=null,R=null,yt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){h=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function($){f=$},this.getBaseLayer=function(){return _!==null?_:g},this.getBinding=function(){return d},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(v=t.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",K),r.addEventListener("inputsourceschange",it),x.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(k),r.renderState.layers===void 0){let pt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,e,pt),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),R=new Vi(g.framebufferWidth,g.framebufferHeight,{format:ei,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let pt=null,bt=null,gt=null;x.depth&&(gt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=x.stencil?gr:lr,bt=x.stencil?mr:bs);let Xt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:a};d=new XRWebGLBinding(r,e),_=d.createProjectionLayer(Xt),r.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),R=new Vi(_.textureWidth,_.textureHeight,{format:ei,type:zi,depthTexture:new Ba(_.textureWidth,_.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(u),f=null,l=await r.requestReferenceSpace(h),yt.setContext(r),yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function it($){for(let pt=0;pt<$.removed.length;pt++){let bt=$.removed[pt],gt=w.indexOf(bt);gt>=0&&(w[gt]=null,S[gt].disconnect(bt))}for(let pt=0;pt<$.added.length;pt++){let bt=$.added[pt],gt=w.indexOf(bt);if(gt===-1){for(let xt=0;xt<S.length;xt++)if(xt>=w.length){w.push(bt),gt=xt;break}else if(w[xt]===null){w[xt]=bt,gt=xt;break}if(gt===-1)break}let Xt=S[gt];Xt&&Xt.connect(bt)}}let H=new z,ut=new z;function G($,pt,bt){H.setFromMatrixPosition(pt.matrixWorld),ut.setFromMatrixPosition(bt.matrixWorld);let gt=H.distanceTo(ut),Xt=pt.projectionMatrix.elements,xt=bt.projectionMatrix.elements,st=Xt[14]/(Xt[10]-1),It=Xt[14]/(Xt[10]+1),qt=(Xt[9]+1)/Xt[5],oe=(Xt[9]-1)/Xt[5],V=(Xt[8]-1)/Xt[0],Ae=(xt[8]+1)/xt[0],ne=st*V,Ot=st*Ae,kt=gt/(-V+Ae),be=kt*-V;if(pt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(be),$.translateZ(kt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Xt[10]===-1)$.projectionMatrix.copy(pt.projectionMatrix),$.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{let Yt=st+kt,U=It+kt,I=ne-be,j=Ot+(gt-be),ht=qt*It/U*Yt,mt=oe*It/U*Yt;$.projectionMatrix.makePerspective(I,j,ht,mt,Yt,U),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function lt($,pt){pt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(pt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let pt=$.near,bt=$.far;b.texture!==null&&(b.depthNear>0&&(pt=b.depthNear),b.depthFar>0&&(bt=b.depthFar)),T.near=O.near=D.near=pt,T.far=O.far=D.far=bt,(B!==T.near||X!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),B=T.near,X=T.far),D.layers.mask=$.layers.mask|2,O.layers.mask=$.layers.mask|4,T.layers.mask=D.layers.mask|O.layers.mask;let gt=$.parent,Xt=T.cameras;lt(T,gt);for(let xt=0;xt<Xt.length;xt++)lt(Xt[xt],gt);Xt.length===2?G(T,D,O):T.projectionMatrix.copy(D.projectionMatrix),rt($,T,gt)};function rt($,pt,bt){bt===null?$.matrix.copy(pt.matrixWorld):($.matrix.copy(bt.matrixWorld),$.matrix.invert(),$.matrix.multiply(pt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(pt.projectionMatrix),$.projectionMatrixInverse.copy(pt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=to*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(_===null&&g===null))return u},this.setFoveation=function($){u=$,_!==null&&(_.fixedFoveation=$),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=$)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(T)};let ot=null;function Mt($,pt){if(m=pt.getViewerPose(f||l),M=pt,m!==null){let bt=m.views;g!==null&&(t.setRenderTargetFramebuffer(R,g.framebuffer),t.setRenderTarget(R));let gt=!1;bt.length!==T.cameras.length&&(T.cameras.length=0,gt=!0);for(let xt=0;xt<bt.length;xt++){let st=bt[xt],It=null;if(g!==null)It=g.getViewport(st);else{let oe=d.getViewSubImage(_,st);It=oe.viewport,xt===0&&(t.setRenderTargetTextures(R,oe.colorTexture,_.ignoreDepthValues?void 0:oe.depthStencilTexture),t.setRenderTarget(R))}let qt=E[xt];qt===void 0&&(qt=new yn,qt.layers.enable(xt),qt.viewport=new De,E[xt]=qt),qt.matrix.fromArray(st.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(st.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(It.x,It.y,It.width,It.height),xt===0&&(T.matrix.copy(qt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),gt===!0&&T.cameras.push(qt)}let Xt=r.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")){let xt=d.getDepthInformation(bt[0]);xt&&xt.isValid&&xt.texture&&b.init(t,xt,r.renderState)}}for(let bt=0;bt<S.length;bt++){let gt=w[bt],Xt=S[bt];gt!==null&&Xt!==void 0&&Xt.update(gt,pt,f||l)}ot&&ot($,pt),pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pt}),M=null}let yt=new tp;yt.setAnimationLoop(Mt),this.setAnimationLoop=function($){ot=$},this.dispose=function(){}}},gs=new gi,ky=new Fe;function By(s,t){function e(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function i(x,v){v.color.getRGB(x.fogColor.value,Qf(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function r(x,v,R,S,w){v.isMeshBasicMaterial||v.isMeshLambertMaterial?a(x,v):v.isMeshToonMaterial?(a(x,v),d(x,v)):v.isMeshPhongMaterial?(a(x,v),m(x,v)):v.isMeshStandardMaterial?(a(x,v),_(x,v),v.isMeshPhysicalMaterial&&g(x,v,w)):v.isMeshMatcapMaterial?(a(x,v),M(x,v)):v.isMeshDepthMaterial?a(x,v):v.isMeshDistanceMaterial?(a(x,v),b(x,v)):v.isMeshNormalMaterial?a(x,v):v.isLineBasicMaterial?(l(x,v),v.isLineDashedMaterial&&h(x,v)):v.isPointsMaterial?u(x,v,R,S):v.isSpriteMaterial?f(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function a(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,e(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,e(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,e(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===mn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,e(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===mn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,e(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,e(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,e(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);let R=t.get(v),S=R.envMap,w=R.envMapRotation;S&&(x.envMap.value=S,gs.copy(w),gs.x*=-1,gs.y*=-1,gs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),x.envMapRotation.value.setFromMatrix4(ky.makeRotationFromEuler(gs)),x.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,e(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,e(v.aoMap,x.aoMapTransform))}function l(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,e(v.map,x.mapTransform))}function h(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function u(x,v,R,S){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*R,x.scale.value=S*.5,v.map&&(x.map.value=v.map,e(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,e(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function f(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,e(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,e(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function m(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function d(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function _(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,e(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,e(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function g(x,v,R){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,e(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,e(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,e(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,e(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,e(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===mn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,e(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,e(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,e(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,e(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,e(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,e(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,e(v.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,v){v.matcap&&(x.matcap.value=v.matcap)}function b(x,v){let R=t.get(v).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Fy(s,t,e,i){let r={},a={},l=[],h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function u(R,S){let w=S.program;i.uniformBlockBinding(R,w)}function f(R,S){let w=r[R.id];w===void 0&&(M(R),w=m(R),r[R.id]=w,R.addEventListener("dispose",x));let k=S.program;i.updateUBOMapping(R,k);let C=t.render.frame;a[R.id]!==C&&(_(R),a[R.id]=C)}function m(R){let S=d();R.__bindingPointIndex=S;let w=s.createBuffer(),k=R.__size,C=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,k,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,w),w}function d(){for(let R=0;R<h;R++)if(l.indexOf(R)===-1)return l.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(R){let S=r[R.id],w=R.uniforms,k=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let C=0,D=w.length;C<D;C++){let O=Array.isArray(w[C])?w[C]:[w[C]];for(let E=0,T=O.length;E<T;E++){let B=O[E];if(g(B,C,E,k)===!0){let X=B.__offset,W=Array.isArray(B.value)?B.value:[B.value],K=0;for(let it=0;it<W.length;it++){let H=W[it],ut=b(H);typeof H=="number"||typeof H=="boolean"?(B.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,X+K,B.__data)):H.isMatrix3?(B.__data[0]=H.elements[0],B.__data[1]=H.elements[1],B.__data[2]=H.elements[2],B.__data[3]=0,B.__data[4]=H.elements[3],B.__data[5]=H.elements[4],B.__data[6]=H.elements[5],B.__data[7]=0,B.__data[8]=H.elements[6],B.__data[9]=H.elements[7],B.__data[10]=H.elements[8],B.__data[11]=0):(H.toArray(B.__data,K),K+=ut.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,X,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(R,S,w,k){let C=R.value,D=S+"_"+w;if(k[D]===void 0)return typeof C=="number"||typeof C=="boolean"?k[D]=C:k[D]=C.clone(),!0;{let O=k[D];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return k[D]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function M(R){let S=R.uniforms,w=0,k=16;for(let D=0,O=S.length;D<O;D++){let E=Array.isArray(S[D])?S[D]:[S[D]];for(let T=0,B=E.length;T<B;T++){let X=E[T],W=Array.isArray(X.value)?X.value:[X.value];for(let K=0,it=W.length;K<it;K++){let H=W[K],ut=b(H),G=w%k,lt=G%ut.boundary,rt=G+lt;w+=lt,rt!==0&&k-rt<ut.storage&&(w+=k-rt),X.__data=new Float32Array(ut.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=w,w+=ut.storage}}}let C=w%k;return C>0&&(w+=k-C),R.__size=w,R.__cache={},this}function b(R){let S={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(S.boundary=4,S.storage=4):R.isVector2?(S.boundary=8,S.storage=8):R.isVector3||R.isColor?(S.boundary=16,S.storage=12):R.isVector4?(S.boundary=16,S.storage=16):R.isMatrix3?(S.boundary=48,S.storage=48):R.isMatrix4?(S.boundary=64,S.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),S}function x(R){let S=R.target;S.removeEventListener("dispose",x);let w=l.indexOf(S.__bindingPointIndex);l.splice(w,1),s.deleteBuffer(r[S.id]),delete r[S.id],delete a[S.id]}function v(){for(let R in r)s.deleteBuffer(r[R]);l=[],r={},a={}}return{bind:u,update:f,dispose:v}}var Fa=class{constructor(t={}){let{canvas:e=Wg(),context:i=null,depth:r=!0,stencil:a=!1,alpha:l=!1,antialias:h=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=l;let M=new Uint32Array(4),b=new Int32Array(4),x=null,v=null,R=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this.toneMapping=ts,this.toneMappingExposure=1;let w=this,k=!1,C=0,D=0,O=null,E=-1,T=null,B=new De,X=new De,W=null,K=new fe(0),it=0,H=e.width,ut=e.height,G=1,lt=null,rt=null,ot=new De(0,0,H,ut),Mt=new De(0,0,H,ut),yt=!1,$=new eo,pt=!1,bt=!1,gt=new Fe,Xt=new Fe,xt=new z,st=new De,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function oe(){return O===null?G:1}let V=i;function Ae(N,q){return e.getContext(N,q)}try{let N={alpha:!0,depth:r,stencil:a,antialias:h,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",At,!1),V===null){let q="webgl2";if(V=Ae(q,N),V===null)throw Ae(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let ne,Ot,kt,be,Yt,U,I,j,ht,mt,ct,Gt,Et,Dt,me,_t,Nt,$t,Qt,Lt,pe,ie,Pe,Z;function Tt(){ne=new ex(V),ne.init(),ie=new Dy(V,ne),Ot=new Kv(V,ne,t,ie),kt=new Ry(V,ne),Ot.reverseDepthBuffer&&_&&kt.buffers.depth.setReversed(!0),be=new sx(V),Yt=new _y,U=new Iy(V,ne,kt,Yt,Ot,ie,be),I=new Jv(w),j=new tx(w),ht=new u_(V),Pe=new qv(V,ht),mt=new nx(V,ht,be,Pe),ct=new ox(V,mt,ht,be),Qt=new rx(V,Ot,U),_t=new $v(Yt),Gt=new gy(w,I,j,ne,Ot,Pe,_t),Et=new By(w,Yt),Dt=new xy,me=new Ty(ne),$t=new Xv(w,I,j,kt,ct,g,u),Nt=new Py(w,ct,Ot),Z=new Fy(V,be,Ot,kt),Lt=new Yv(V,ne,be),pe=new ix(V,ne,be),be.programs=Gt.programs,w.capabilities=Ot,w.extensions=ne,w.properties=Yt,w.renderLists=Dt,w.shadowMap=Nt,w.state=kt,w.info=be}Tt();let at=new Bh(w,V);this.xr=at,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let N=ne.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=ne.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(N){N!==void 0&&(G=N,this.setSize(H,ut,!1))},this.getSize=function(N){return N.set(H,ut)},this.setSize=function(N,q,et=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=N,ut=q,e.width=Math.floor(N*G),e.height=Math.floor(q*G),et===!0&&(e.style.width=N+"px",e.style.height=q+"px"),this.setViewport(0,0,N,q)},this.getDrawingBufferSize=function(N){return N.set(H*G,ut*G).floor()},this.setDrawingBufferSize=function(N,q,et){H=N,ut=q,G=et,e.width=Math.floor(N*et),e.height=Math.floor(q*et),this.setViewport(0,0,N,q)},this.getCurrentViewport=function(N){return N.copy(B)},this.getViewport=function(N){return N.copy(ot)},this.setViewport=function(N,q,et,tt){N.isVector4?ot.set(N.x,N.y,N.z,N.w):ot.set(N,q,et,tt),kt.viewport(B.copy(ot).multiplyScalar(G).round())},this.getScissor=function(N){return N.copy(Mt)},this.setScissor=function(N,q,et,tt){N.isVector4?Mt.set(N.x,N.y,N.z,N.w):Mt.set(N,q,et,tt),kt.scissor(X.copy(Mt).multiplyScalar(G).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(N){kt.setScissorTest(yt=N)},this.setOpaqueSort=function(N){lt=N},this.setTransparentSort=function(N){rt=N},this.getClearColor=function(N){return N.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(N=!0,q=!0,et=!0){let tt=0;if(N){let Y=!1;if(O!==null){let vt=O.texture.format;Y=vt===iu||vt===nu||vt===eu}if(Y){let vt=O.texture.type,Pt=vt===zi||vt===bs||vt===Qr||vt===mr||vt===Qh||vt===tu,zt=$t.getClearColor(),Ht=$t.getClearAlpha(),jt=zt.r,te=zt.g,Ft=zt.b;Pt?(M[0]=jt,M[1]=te,M[2]=Ft,M[3]=Ht,V.clearBufferuiv(V.COLOR,0,M)):(b[0]=jt,b[1]=te,b[2]=Ft,b[3]=Ht,V.clearBufferiv(V.COLOR,0,b))}else tt|=V.COLOR_BUFFER_BIT}q&&(tt|=V.DEPTH_BUFFER_BIT),et&&(tt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",At,!1),Dt.dispose(),me.dispose(),Yt.dispose(),I.dispose(),j.dispose(),ct.dispose(),Pe.dispose(),Z.dispose(),Gt.dispose(),at.dispose(),at.removeEventListener("sessionstart",uo),at.removeEventListener("sessionend",En),Ut.stop()};function dt(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;let N=be.autoReset,q=Nt.enabled,et=Nt.autoUpdate,tt=Nt.needsUpdate,Y=Nt.type;Tt(),be.autoReset=N,Nt.enabled=q,Nt.autoUpdate=et,Nt.needsUpdate=tt,Nt.type=Y}function At(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ee(N){let q=N.target;q.removeEventListener("dispose",ee),ze(q)}function ze(N){Ze(N),Yt.remove(N)}function Ze(N){let q=Yt.get(N).programs;q!==void 0&&(q.forEach(function(et){Gt.releaseProgram(et)}),N.isShaderMaterial&&Gt.releaseShaderCache(N))}this.renderBufferDirect=function(N,q,et,tt,Y,vt){q===null&&(q=It);let Pt=Y.isMesh&&Y.matrixWorld.determinant()<0,zt=wl(N,q,et,tt,Y);kt.setMaterial(tt,Pt);let Ht=et.index,jt=1;if(tt.wireframe===!0){if(Ht=mt.getWireframeAttribute(et),Ht===void 0)return;jt=2}let te=et.drawRange,Ft=et.attributes.position,ge=te.start*jt,we=(te.start+te.count)*jt;vt!==null&&(ge=Math.max(ge,vt.start*jt),we=Math.min(we,(vt.start+vt.count)*jt)),Ht!==null?(ge=Math.max(ge,0),we=Math.min(we,Ht.count)):Ft!=null&&(ge=Math.max(ge,0),we=Math.min(we,Ft.count));let Wt=we-ge;if(Wt<0||Wt===1/0)return;Pe.setup(Y,tt,zt,et,Ht);let he,_e=Lt;if(Ht!==null&&(he=ht.get(Ht),_e=pe,_e.setIndex(he)),Y.isMesh)tt.wireframe===!0?(kt.setLineWidth(tt.wireframeLinewidth*oe()),_e.setMode(V.LINES)):_e.setMode(V.TRIANGLES);else if(Y.isLine){let Bt=tt.linewidth;Bt===void 0&&(Bt=1),kt.setLineWidth(Bt*oe()),Y.isLineSegments?_e.setMode(V.LINES):Y.isLineLoop?_e.setMode(V.LINE_LOOP):_e.setMode(V.LINE_STRIP)}else Y.isPoints?_e.setMode(V.POINTS):Y.isSprite&&_e.setMode(V.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)_e.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))_e.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Bt=Y._multiDrawStarts,hn=Y._multiDrawCounts,xe=Y._multiDrawCount,Kt=Ht?ht.get(Ht).bytesPerElement:1,Le=Yt.get(tt).currentProgram.getUniforms();for(let sn=0;sn<xe;sn++)Le.setValue(V,"_gl_DrawID",sn),_e.render(Bt[sn]/Kt,hn[sn])}else if(Y.isInstancedMesh)_e.renderInstances(ge,Wt,Y.count);else if(et.isInstancedBufferGeometry){let Bt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,hn=Math.min(et.instanceCount,Bt);_e.renderInstances(ge,Wt,hn)}else _e.render(ge,Wt)};function Te(N,q,et){N.transparent===!0&&N.side===zn&&N.forceSinglePass===!1?(N.side=mn,N.needsUpdate=!0,rs(N,q,et),N.side=es,N.needsUpdate=!0,rs(N,q,et),N.side=zn):rs(N,q,et)}this.compile=function(N,q,et=null){et===null&&(et=N),v=me.get(et),v.init(q),S.push(v),et.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),N!==et&&N.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights();let tt=new Set;return N.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let vt=Y.material;if(vt)if(Array.isArray(vt))for(let Pt=0;Pt<vt.length;Pt++){let zt=vt[Pt];Te(zt,et,Y),tt.add(zt)}else Te(vt,et,Y),tt.add(vt)}),S.pop(),v=null,tt},this.compileAsync=function(N,q,et=null){let tt=this.compile(N,q,et);return new Promise(Y=>{function vt(){if(tt.forEach(function(Pt){Yt.get(Pt).currentProgram.isReady()&&tt.delete(Pt)}),tt.size===0){Y(N);return}setTimeout(vt,10)}ne.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Tn=null;function qn(N){Tn&&Tn(N)}function uo(){Ut.stop()}function En(){Ut.start()}let Ut=new tp;Ut.setAnimationLoop(qn),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(N){Tn=N,at.setAnimationLoop(N),N===null?Ut.stop():Ut.start()},at.addEventListener("sessionstart",uo),at.addEventListener("sessionend",En),this.render=function(N,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(q),q=at.getCamera()),N.isScene===!0&&N.onBeforeRender(w,N,q,O),v=me.get(N,S.length),v.init(q),S.push(v),Xt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),$.setFromProjectionMatrix(Xt),bt=this.localClippingEnabled,pt=_t.init(this.clippingPlanes,bt),x=Dt.get(N,R.length),x.init(),R.push(x),at.enabled===!0&&at.isPresenting===!0){let vt=w.xr.getDepthSensingMesh();vt!==null&&Ds(vt,q,-1/0,w.sortObjects)}Ds(N,q,0,w.sortObjects),x.finish(),w.sortObjects===!0&&x.sort(lt,rt),qt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,qt&&$t.addToRenderList(x,N),this.info.render.frame++,pt===!0&&_t.beginShadows();let et=v.state.shadowsArray;Nt.render(et,N,q),pt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();let tt=x.opaque,Y=x.transmissive;if(v.setupLights(),q.isArrayCamera){let vt=q.cameras;if(Y.length>0)for(let Pt=0,zt=vt.length;Pt<zt;Pt++){let Ht=vt[Pt];Ar(tt,Y,N,Ht)}qt&&$t.render(N);for(let Pt=0,zt=vt.length;Pt<zt;Pt++){let Ht=vt[Pt];Er(x,N,Ht,Ht.viewport)}}else Y.length>0&&Ar(tt,Y,N,q),qt&&$t.render(N),Er(x,N,q);O!==null&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O)),N.isScene===!0&&N.onAfterRender(w,N,q),Pe.resetDefaultState(),E=-1,T=null,S.pop(),S.length>0?(v=S[S.length-1],pt===!0&&_t.setGlobalState(w.clippingPlanes,v.state.camera)):v=null,R.pop(),R.length>0?x=R[R.length-1]:x=null};function Ds(N,q,et,tt){if(N.visible===!1)return;if(N.layers.test(q.layers)){if(N.isGroup)et=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(q);else if(N.isLight)v.pushLight(N),N.castShadow&&v.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||$.intersectsSprite(N)){tt&&st.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Xt);let Pt=ct.update(N),zt=N.material;zt.visible&&x.push(N,Pt,zt,et,st.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||$.intersectsObject(N))){let Pt=ct.update(N),zt=N.material;if(tt&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),st.copy(N.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),st.copy(Pt.boundingSphere.center)),st.applyMatrix4(N.matrixWorld).applyMatrix4(Xt)),Array.isArray(zt)){let Ht=Pt.groups;for(let jt=0,te=Ht.length;jt<te;jt++){let Ft=Ht[jt],ge=zt[Ft.materialIndex];ge&&ge.visible&&x.push(N,Pt,ge,et,st.z,Ft)}}else zt.visible&&x.push(N,Pt,zt,et,st.z,null)}}let vt=N.children;for(let Pt=0,zt=vt.length;Pt<zt;Pt++)Ds(vt[Pt],q,et,tt)}function Er(N,q,et,tt){let Y=N.opaque,vt=N.transmissive,Pt=N.transparent;v.setupLightsView(et),pt===!0&&_t.setGlobalState(w.clippingPlanes,et),tt&&kt.viewport(B.copy(tt)),Y.length>0&&ss(Y,q,et),vt.length>0&&ss(vt,q,et),Pt.length>0&&ss(Pt,q,et),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Ar(N,q,et,tt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[tt.id]===void 0&&(v.state.transmissionRenderTarget[tt.id]=new Vi(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?lo:zi,minFilter:Ms,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Se.workingColorSpace}));let vt=v.state.transmissionRenderTarget[tt.id],Pt=tt.viewport||B;vt.setSize(Pt.z,Pt.w);let zt=w.getRenderTarget();w.setRenderTarget(vt),w.getClearColor(K),it=w.getClearAlpha(),it<1&&w.setClearColor(16777215,.5),w.clear(),qt&&$t.render(et);let Ht=w.toneMapping;w.toneMapping=ts;let jt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),v.setupLightsView(tt),pt===!0&&_t.setGlobalState(w.clippingPlanes,tt),ss(N,et,tt),U.updateMultisampleRenderTarget(vt),U.updateRenderTargetMipmap(vt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Ft=0,ge=q.length;Ft<ge;Ft++){let we=q[Ft],Wt=we.object,he=we.geometry,_e=we.material,Bt=we.group;if(_e.side===zn&&Wt.layers.test(tt.layers)){let hn=_e.side;_e.side=mn,_e.needsUpdate=!0,Ns(Wt,et,tt,he,_e,Bt),_e.side=hn,_e.needsUpdate=!0,te=!0}}te===!0&&(U.updateMultisampleRenderTarget(vt),U.updateRenderTargetMipmap(vt))}w.setRenderTarget(zt),w.setClearColor(K,it),jt!==void 0&&(tt.viewport=jt),w.toneMapping=Ht}function ss(N,q,et){let tt=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,vt=N.length;Y<vt;Y++){let Pt=N[Y],zt=Pt.object,Ht=Pt.geometry,jt=tt===null?Pt.material:tt,te=Pt.group;zt.layers.test(et.layers)&&Ns(zt,q,et,Ht,jt,te)}}function Ns(N,q,et,tt,Y,vt){N.onBeforeRender(w,q,et,tt,Y,vt),N.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),Y.onBeforeRender(w,q,et,tt,N,vt),Y.transparent===!0&&Y.side===zn&&Y.forceSinglePass===!1?(Y.side=mn,Y.needsUpdate=!0,w.renderBufferDirect(et,q,tt,Y,N,vt),Y.side=es,Y.needsUpdate=!0,w.renderBufferDirect(et,q,tt,Y,N,vt),Y.side=zn):w.renderBufferDirect(et,q,tt,Y,N,vt),N.onAfterRender(w,q,et,tt,Y,vt)}function rs(N,q,et){q.isScene!==!0&&(q=It);let tt=Yt.get(N),Y=v.state.lights,vt=v.state.shadowsArray,Pt=Y.state.version,zt=Gt.getParameters(N,Y.state,vt,q,et),Ht=Gt.getProgramCacheKey(zt),jt=tt.programs;tt.environment=N.isMeshStandardMaterial?q.environment:null,tt.fog=q.fog,tt.envMap=(N.isMeshStandardMaterial?j:I).get(N.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&N.envMap===null?q.environmentRotation:N.envMapRotation,jt===void 0&&(N.addEventListener("dispose",ee),jt=new Map,tt.programs=jt);let te=jt.get(Ht);if(te!==void 0){if(tt.currentProgram===te&&tt.lightsStateVersion===Pt)return Pr(N,zt),te}else zt.uniforms=Gt.getUniforms(N),N.onBeforeCompile(zt,w),te=Gt.acquireProgram(zt,Ht),jt.set(Ht,te),tt.uniforms=zt.uniforms;let Ft=tt.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ft.clippingPlanes=_t.uniform),Pr(N,zt),tt.needsLights=El(N),tt.lightsStateVersion=Pt,tt.needsLights&&(Ft.ambientLightColor.value=Y.state.ambient,Ft.lightProbe.value=Y.state.probe,Ft.directionalLights.value=Y.state.directional,Ft.directionalLightShadows.value=Y.state.directionalShadow,Ft.spotLights.value=Y.state.spot,Ft.spotLightShadows.value=Y.state.spotShadow,Ft.rectAreaLights.value=Y.state.rectArea,Ft.ltc_1.value=Y.state.rectAreaLTC1,Ft.ltc_2.value=Y.state.rectAreaLTC2,Ft.pointLights.value=Y.state.point,Ft.pointLightShadows.value=Y.state.pointShadow,Ft.hemisphereLights.value=Y.state.hemi,Ft.directionalShadowMap.value=Y.state.directionalShadowMap,Ft.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ft.spotShadowMap.value=Y.state.spotShadowMap,Ft.spotLightMatrix.value=Y.state.spotLightMatrix,Ft.spotLightMap.value=Y.state.spotLightMap,Ft.pointShadowMap.value=Y.state.pointShadowMap,Ft.pointShadowMatrix.value=Y.state.pointShadowMatrix),tt.currentProgram=te,tt.uniformsList=null,te}function Mi(N){if(N.uniformsList===null){let q=N.currentProgram.getUniforms();N.uniformsList=ur.seqWithValue(q.seq,N.uniforms)}return N.uniformsList}function Pr(N,q){let et=Yt.get(N);et.outputColorSpace=q.outputColorSpace,et.batching=q.batching,et.batchingColor=q.batchingColor,et.instancing=q.instancing,et.instancingColor=q.instancingColor,et.instancingMorph=q.instancingMorph,et.skinning=q.skinning,et.morphTargets=q.morphTargets,et.morphNormals=q.morphNormals,et.morphColors=q.morphColors,et.morphTargetsCount=q.morphTargetsCount,et.numClippingPlanes=q.numClippingPlanes,et.numIntersection=q.numClipIntersection,et.vertexAlphas=q.vertexAlphas,et.vertexTangents=q.vertexTangents,et.toneMapping=q.toneMapping}function wl(N,q,et,tt,Y){q.isScene!==!0&&(q=It),U.resetTextureUnits();let vt=q.fog,Pt=tt.isMeshStandardMaterial?q.environment:null,zt=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:yr,Ht=(tt.isMeshStandardMaterial?j:I).get(tt.envMap||Pt),jt=tt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,te=!!et.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Ft=!!et.morphAttributes.position,ge=!!et.morphAttributes.normal,we=!!et.morphAttributes.color,Wt=ts;tt.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Wt=w.toneMapping);let he=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,_e=he!==void 0?he.length:0,Bt=Yt.get(tt),hn=v.state.lights;if(pt===!0&&(bt===!0||N!==T)){let Xe=N===T&&tt.id===E;_t.setState(tt,N,Xe)}let xe=!1;tt.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==hn.state.version||Bt.outputColorSpace!==zt||Y.isBatchedMesh&&Bt.batching===!1||!Y.isBatchedMesh&&Bt.batching===!0||Y.isBatchedMesh&&Bt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Bt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Bt.instancing===!1||!Y.isInstancedMesh&&Bt.instancing===!0||Y.isSkinnedMesh&&Bt.skinning===!1||!Y.isSkinnedMesh&&Bt.skinning===!0||Y.isInstancedMesh&&Bt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Bt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Bt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Bt.instancingMorph===!1&&Y.morphTexture!==null||Bt.envMap!==Ht||tt.fog===!0&&Bt.fog!==vt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==_t.numPlanes||Bt.numIntersection!==_t.numIntersection)||Bt.vertexAlphas!==jt||Bt.vertexTangents!==te||Bt.morphTargets!==Ft||Bt.morphNormals!==ge||Bt.morphColors!==we||Bt.toneMapping!==Wt||Bt.morphTargetsCount!==_e)&&(xe=!0):(xe=!0,Bt.__version=tt.version);let Kt=Bt.currentProgram;xe===!0&&(Kt=rs(tt,q,Y));let Le=!1,sn=!1,ci=!1,ue=Kt.getUniforms(),On=Bt.uniforms;if(kt.useProgram(Kt.program)&&(Le=!0,sn=!0,ci=!0),tt.id!==E&&(E=tt.id,sn=!0),Le||T!==N){kt.buffers.depth.getReversed()?(gt.copy(N.projectionMatrix),Xg(gt),qg(gt),ue.setValue(V,"projectionMatrix",gt)):ue.setValue(V,"projectionMatrix",N.projectionMatrix),ue.setValue(V,"viewMatrix",N.matrixWorldInverse);let Ce=ue.map.cameraPosition;Ce!==void 0&&Ce.setValue(V,xt.setFromMatrixPosition(N.matrixWorld)),Ot.logarithmicDepthBuffer&&ue.setValue(V,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&ue.setValue(V,"isOrthographic",N.isOrthographicCamera===!0),T!==N&&(T=N,sn=!0,ci=!0)}if(Y.isSkinnedMesh){ue.setOptional(V,Y,"bindMatrix"),ue.setOptional(V,Y,"bindMatrixInverse");let Xe=Y.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),ue.setValue(V,"boneTexture",Xe.boneTexture,U))}Y.isBatchedMesh&&(ue.setOptional(V,Y,"batchingTexture"),ue.setValue(V,"batchingTexture",Y._matricesTexture,U),ue.setOptional(V,Y,"batchingIdTexture"),ue.setValue(V,"batchingIdTexture",Y._indirectTexture,U),ue.setOptional(V,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ue.setValue(V,"batchingColorTexture",Y._colorsTexture,U));let hi=et.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&Qt.update(Y,et,Kt),(sn||Bt.receiveShadow!==Y.receiveShadow)&&(Bt.receiveShadow=Y.receiveShadow,ue.setValue(V,"receiveShadow",Y.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(On.envMap.value=Ht,On.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&q.environment!==null&&(On.envMapIntensity.value=q.environmentIntensity),sn&&(ue.setValue(V,"toneMappingExposure",w.toneMappingExposure),Bt.needsLights&&Tl(On,ci),vt&&tt.fog===!0&&Et.refreshFogUniforms(On,vt),Et.refreshMaterialUniforms(On,tt,G,ut,v.state.transmissionRenderTarget[N.id]),ur.upload(V,Mi(Bt),On,U)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(ur.upload(V,Mi(Bt),On,U),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&ue.setValue(V,"center",Y.center),ue.setValue(V,"modelViewMatrix",Y.modelViewMatrix),ue.setValue(V,"normalMatrix",Y.normalMatrix),ue.setValue(V,"modelMatrix",Y.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){let Xe=tt.uniformsGroups;for(let Ce=0,un=Xe.length;Ce<un;Ce++){let Gi=Xe[Ce];Z.update(Gi,Kt),Z.bind(Gi,Kt)}}return Kt}function Tl(N,q){N.ambientLightColor.needsUpdate=q,N.lightProbe.needsUpdate=q,N.directionalLights.needsUpdate=q,N.directionalLightShadows.needsUpdate=q,N.pointLights.needsUpdate=q,N.pointLightShadows.needsUpdate=q,N.spotLights.needsUpdate=q,N.spotLightShadows.needsUpdate=q,N.rectAreaLights.needsUpdate=q,N.hemisphereLights.needsUpdate=q}function El(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(N,q,et){Yt.get(N.texture).__webglTexture=q,Yt.get(N.depthTexture).__webglTexture=et;let tt=Yt.get(N);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=et===void 0,tt.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,q){let et=Yt.get(N);et.__webglFramebuffer=q,et.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(N,q=0,et=0){O=N,C=q,D=et;let tt=!0,Y=null,vt=!1,Pt=!1;if(N){let Ht=Yt.get(N);if(Ht.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(V.FRAMEBUFFER,null),tt=!1;else if(Ht.__webglFramebuffer===void 0)U.setupRenderTarget(N);else if(Ht.__hasExternalTextures)U.rebindTextures(N,Yt.get(N.texture).__webglTexture,Yt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let Ft=N.depthTexture;if(Ht.__boundDepthTexture!==Ft){if(Ft!==null&&Yt.has(Ft)&&(N.width!==Ft.image.width||N.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(N)}}let jt=N.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Pt=!0);let te=Yt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(te[q])?Y=te[q][et]:Y=te[q],vt=!0):N.samples>0&&U.useMultisampledRTT(N)===!1?Y=Yt.get(N).__webglMultisampledFramebuffer:Array.isArray(te)?Y=te[et]:Y=te,B.copy(N.viewport),X.copy(N.scissor),W=N.scissorTest}else B.copy(ot).multiplyScalar(G).floor(),X.copy(Mt).multiplyScalar(G).floor(),W=yt;if(kt.bindFramebuffer(V.FRAMEBUFFER,Y)&&tt&&kt.drawBuffers(N,Y),kt.viewport(B),kt.scissor(X),kt.setScissorTest(W),vt){let Ht=Yt.get(N.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ht.__webglTexture,et)}else if(Pt){let Ht=Yt.get(N.texture),jt=q||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ht.__webglTexture,et||0,jt)}E=-1},this.readRenderTargetPixels=function(N,q,et,tt,Y,vt,Pt){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Yt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Pt!==void 0&&(zt=zt[Pt]),zt){kt.bindFramebuffer(V.FRAMEBUFFER,zt);try{let Ht=N.texture,jt=Ht.format,te=Ht.type;if(!Ot.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=N.width-tt&&et>=0&&et<=N.height-Y&&V.readPixels(q,et,tt,Y,ie.convert(jt),ie.convert(te),vt)}finally{let Ht=O!==null?Yt.get(O).__webglFramebuffer:null;kt.bindFramebuffer(V.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(N,q,et,tt,Y,vt,Pt){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Yt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Pt!==void 0&&(zt=zt[Pt]),zt){let Ht=N.texture,jt=Ht.format,te=Ht.type;if(!Ot.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=N.width-tt&&et>=0&&et<=N.height-Y){kt.bindFramebuffer(V.FRAMEBUFFER,zt);let Ft=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ft),V.bufferData(V.PIXEL_PACK_BUFFER,vt.byteLength,V.STREAM_READ),V.readPixels(q,et,tt,Y,ie.convert(jt),ie.convert(te),0);let ge=O!==null?Yt.get(O).__webglFramebuffer:null;kt.bindFramebuffer(V.FRAMEBUFFER,ge);let we=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Zg(V,we,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ft),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,vt),V.deleteBuffer(Ft),V.deleteSync(we),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,q=null,et=0){N.isTexture!==!0&&(Kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,N=arguments[1]);let tt=Math.pow(2,-et),Y=Math.floor(N.image.width*tt),vt=Math.floor(N.image.height*tt),Pt=q!==null?q.x:0,zt=q!==null?q.y:0;U.setTexture2D(N,0),V.copyTexSubImage2D(V.TEXTURE_2D,et,0,0,Pt,zt,Y,vt),kt.unbindTexture()},this.copyTextureToTexture=function(N,q,et=null,tt=null,Y=0){N.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,N=arguments[1],q=arguments[2],Y=arguments[3]||0,et=null);let vt,Pt,zt,Ht,jt,te,Ft,ge,we,Wt=N.isCompressedTexture?N.mipmaps[Y]:N.image;et!==null?(vt=et.max.x-et.min.x,Pt=et.max.y-et.min.y,zt=et.isBox3?et.max.z-et.min.z:1,Ht=et.min.x,jt=et.min.y,te=et.isBox3?et.min.z:0):(vt=Wt.width,Pt=Wt.height,zt=Wt.depth||1,Ht=0,jt=0,te=0),tt!==null?(Ft=tt.x,ge=tt.y,we=tt.z):(Ft=0,ge=0,we=0);let he=ie.convert(q.format),_e=ie.convert(q.type),Bt;q.isData3DTexture?(U.setTexture3D(q,0),Bt=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(U.setTexture2DArray(q,0),Bt=V.TEXTURE_2D_ARRAY):(U.setTexture2D(q,0),Bt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);let hn=V.getParameter(V.UNPACK_ROW_LENGTH),xe=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Kt=V.getParameter(V.UNPACK_SKIP_PIXELS),Le=V.getParameter(V.UNPACK_SKIP_ROWS),sn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Wt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Wt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ht),V.pixelStorei(V.UNPACK_SKIP_ROWS,jt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,te);let ci=N.isDataArrayTexture||N.isData3DTexture,ue=q.isDataArrayTexture||q.isData3DTexture;if(N.isRenderTargetTexture||N.isDepthTexture){let On=Yt.get(N),hi=Yt.get(q),Xe=Yt.get(On.__renderTarget),Ce=Yt.get(hi.__renderTarget);kt.bindFramebuffer(V.READ_FRAMEBUFFER,Xe.__webglFramebuffer),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let un=0;un<zt;un++)ci&&V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Yt.get(N).__webglTexture,Y,te+un),N.isDepthTexture?(ue&&V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Yt.get(q).__webglTexture,Y,we+un),V.blitFramebuffer(Ht,jt,vt,Pt,Ft,ge,vt,Pt,V.DEPTH_BUFFER_BIT,V.NEAREST)):ue?V.copyTexSubImage3D(Bt,Y,Ft,ge,we+un,Ht,jt,vt,Pt):V.copyTexSubImage2D(Bt,Y,Ft,ge,we+un,Ht,jt,vt,Pt);kt.bindFramebuffer(V.READ_FRAMEBUFFER,null),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else ue?N.isDataTexture||N.isData3DTexture?V.texSubImage3D(Bt,Y,Ft,ge,we,vt,Pt,zt,he,_e,Wt.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(Bt,Y,Ft,ge,we,vt,Pt,zt,he,Wt.data):V.texSubImage3D(Bt,Y,Ft,ge,we,vt,Pt,zt,he,_e,Wt):N.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Y,Ft,ge,vt,Pt,he,_e,Wt.data):N.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Y,Ft,ge,Wt.width,Wt.height,he,Wt.data):V.texSubImage2D(V.TEXTURE_2D,Y,Ft,ge,vt,Pt,he,_e,Wt);V.pixelStorei(V.UNPACK_ROW_LENGTH,hn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,xe),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Kt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Le),V.pixelStorei(V.UNPACK_SKIP_IMAGES,sn),Y===0&&q.generateMipmaps&&V.generateMipmap(Bt),kt.unbindTexture()},this.copyTextureToTexture3D=function(N,q,et=null,tt=null,Y=0){return N.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,tt=arguments[1]||null,N=arguments[2],q=arguments[3],Y=arguments[4]||0),Kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,q,et,tt,Y)},this.initRenderTarget=function(N){Yt.get(N).__webglFramebuffer===void 0&&U.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?U.setTextureCube(N,0):N.isData3DTexture?U.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?U.setTexture2DArray(N,0):U.setTexture2D(N,0),kt.unbindTexture()},this.resetState=function(){C=0,D=0,O=null,kt.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}};var za=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ha=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=bh,this.updateRanges=[],this.version=0,this.uuid=Bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,a=this.stride;r<a;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vn=new z,Xn=class s{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.applyMatrix4(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.applyNormalMatrix(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)vn.fromBufferAttribute(this,e),vn.transformDirection(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Re(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ti(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ti(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ti(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ti(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),r=Re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),r=Re(r,this.array),a=Re(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[r+a])}return new Dn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},no=class extends _i{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},nr,Zr=new z,ir=new z,sr=new z,rr=new Zt,Xr=new Zt,rp=new Fe,la=new z,qr=new z,ca=new z,Sf=new Zt,Lc=new Zt,wf=new Zt,Va=class extends nn{constructor(t=new no){if(super(),this.isSprite=!0,this.type="Sprite",nr===void 0){nr=new Ge;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ha(e,5);nr.setIndex([0,1,2,0,2,3]),nr.setAttribute("position",new Xn(i,3,0,!1)),nr.setAttribute("uv",new Xn(i,2,3,!1))}this.geometry=nr,this.material=t,this.center=new Zt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),rp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-sr.z);let i=this.material.rotation,r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));let l=this.center;ha(la.set(-.5,-.5,0),sr,l,ir,r,a),ha(qr.set(.5,-.5,0),sr,l,ir,r,a),ha(ca.set(.5,.5,0),sr,l,ir,r,a),Sf.set(0,0),Lc.set(1,0),wf.set(1,1);let h=t.ray.intersectTriangle(la,qr,ca,!1,Zr);if(h===null&&(ha(qr.set(-.5,.5,0),sr,l,ir,r,a),Lc.set(0,1),h=t.ray.intersectTriangle(la,ca,qr,!1,Zr),h===null))return;let u=t.ray.origin.distanceTo(Zr);u<t.near||u>t.far||e.push({distance:u,point:Zr.clone(),uv:Ni.getInterpolation(Zr,la,qr,ca,Sf,Lc,wf,new Zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ha(s,t,e,i,r,a){rr.subVectors(s,e).addScalar(.5).multiply(i),r!==void 0?(Xr.x=a*rr.x-r*rr.y,Xr.y=r*rr.x+a*rr.y):Xr.copy(rr),s.copy(t),s.x+=Xr.x,s.y+=Xr.y,s.applyMatrix4(rp)}var ri=class extends _i{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ga=new z,Wa=new z,Tf=new Fe,Yr=new Ss,ua=new si,Ic=new z,Ef=new z,vr=class extends nn{constructor(t=new Ge,e=new ri){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,a=e.count;r<a;r++)Ga.fromBufferAttribute(e,r-1),Wa.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Ga.distanceTo(Wa);t.setAttribute("lineDistance",new ve(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,r=this.matrixWorld,a=t.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(r),ua.radius+=a,t.ray.intersectsSphere(ua)===!1)return;Tf.copy(r).invert(),Yr.copy(t.ray).applyMatrix4(Tf);let h=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=h*h,f=this.isLineSegments?2:1,m=i.index,_=i.attributes.position;if(m!==null){let g=Math.max(0,l.start),M=Math.min(m.count,l.start+l.count);for(let b=g,x=M-1;b<x;b+=f){let v=m.getX(b),R=m.getX(b+1),S=da(this,t,Yr,u,v,R);S&&e.push(S)}if(this.isLineLoop){let b=m.getX(M-1),x=m.getX(g),v=da(this,t,Yr,u,b,x);v&&e.push(v)}}else{let g=Math.max(0,l.start),M=Math.min(_.count,l.start+l.count);for(let b=g,x=M-1;b<x;b+=f){let v=da(this,t,Yr,u,b,b+1);v&&e.push(v)}if(this.isLineLoop){let b=da(this,t,Yr,u,M-1,g);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){let h=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}};function da(s,t,e,i,r,a){let l=s.geometry.attributes.position;if(Ga.fromBufferAttribute(l,r),Wa.fromBufferAttribute(l,a),e.distanceSqToSegment(Ga,Wa,Ic,Ef)>i)return;Ic.applyMatrix4(s.matrixWorld);let u=t.ray.origin.distanceTo(Ic);if(!(u<t.near||u>t.far))return{distance:u,point:Ef.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}var Af=new z,Pf=new z,ns=class extends vr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let r=0,a=e.count;r<a;r+=2)Af.fromBufferAttribute(e,r),Pf.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Af.distanceTo(Pf);t.setAttribute("lineDistance",new ve(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var io=class extends _i{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Cf=new Fe,Fh=new Ss,fa=new si,pa=new z,Za=class extends nn{constructor(t=new Ge,e=new io){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,r=this.matrixWorld,a=t.params.Points.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(r),fa.radius+=a,t.ray.intersectsSphere(fa)===!1)return;Cf.copy(r).invert(),Fh.copy(t.ray).applyMatrix4(Cf);let h=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=h*h,f=i.index,d=i.attributes.position;if(f!==null){let _=Math.max(0,l.start),g=Math.min(f.count,l.start+l.count);for(let M=_,b=g;M<b;M++){let x=f.getX(M);pa.fromBufferAttribute(d,x),Rf(pa,x,u,r,t,e,this)}}else{let _=Math.max(0,l.start),g=Math.min(d.count,l.start+l.count);for(let M=_,b=g;M<b;M++)pa.fromBufferAttribute(d,M),Rf(pa,M,u,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){let h=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}};function Rf(s,t,e,i,r,a,l){let h=Fh.distanceSqToPoint(s);if(h<e){let u=new z;Fh.closestPointToPoint(s,u),u.applyMatrix4(i);let f=r.ray.origin.distanceTo(u);if(f<r.near||f>r.far)return;a.push({distance:f,distanceToRay:Math.sqrt(h),point:u,index:t,face:null,faceIndex:null,barycoord:null,object:l})}}var Xa=class extends Nn{constructor(t,e,i,r,a,l,h,u,f){super(t,e,i,r,a,l,h,u,f),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qa=class s extends Ge{constructor(t=[new Zt(0,-.5),new Zt(.5,0),new Zt(0,.5)],e=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:r},e=Math.floor(e),r=en(r,0,Math.PI*2);let a=[],l=[],h=[],u=[],f=[],m=1/e,d=new z,_=new Zt,g=new z,M=new z,b=new z,x=0,v=0;for(let R=0;R<=t.length-1;R++)switch(R){case 0:x=t[R+1].x-t[R].x,v=t[R+1].y-t[R].y,g.x=v*1,g.y=-x,g.z=v*0,b.copy(g),g.normalize(),u.push(g.x,g.y,g.z);break;case t.length-1:u.push(b.x,b.y,b.z);break;default:x=t[R+1].x-t[R].x,v=t[R+1].y-t[R].y,g.x=v*1,g.y=-x,g.z=v*0,M.copy(g),g.x+=b.x,g.y+=b.y,g.z+=b.z,g.normalize(),u.push(g.x,g.y,g.z),b.copy(M)}for(let R=0;R<=e;R++){let S=i+R*m*r,w=Math.sin(S),k=Math.cos(S);for(let C=0;C<=t.length-1;C++){d.x=t[C].x*w,d.y=t[C].y,d.z=t[C].x*k,l.push(d.x,d.y,d.z),_.x=R/e,_.y=C/(t.length-1),h.push(_.x,_.y);let D=u[3*C+0]*w,O=u[3*C+1],E=u[3*C+0]*k;f.push(D,O,E)}}for(let R=0;R<e;R++)for(let S=0;S<t.length-1;S++){let w=S+R*t.length,k=w,C=w+t.length,D=w+t.length+1,O=w+1;a.push(k,C,O),a.push(D,O,C)}this.setIndex(a),this.setAttribute("position",new ve(l,3)),this.setAttribute("uv",new ve(h,2)),this.setAttribute("normal",new ve(f,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Ya=class s extends Ge{constructor(t=1,e=1,i=1,r=32,a=1,l=!1,h=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:h,thetaLength:u};let f=this;r=Math.floor(r),a=Math.floor(a);let m=[],d=[],_=[],g=[],M=0,b=[],x=i/2,v=0;R(),l===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(m),this.setAttribute("position",new ve(d,3)),this.setAttribute("normal",new ve(_,3)),this.setAttribute("uv",new ve(g,2));function R(){let w=new z,k=new z,C=0,D=(e-t)/i;for(let O=0;O<=a;O++){let E=[],T=O/a,B=T*(e-t)+t;for(let X=0;X<=r;X++){let W=X/r,K=W*u+h,it=Math.sin(K),H=Math.cos(K);k.x=B*it,k.y=-T*i+x,k.z=B*H,d.push(k.x,k.y,k.z),w.set(it,D,H).normalize(),_.push(w.x,w.y,w.z),g.push(W,1-T),E.push(M++)}b.push(E)}for(let O=0;O<r;O++)for(let E=0;E<a;E++){let T=b[E][O],B=b[E+1][O],X=b[E+1][O+1],W=b[E][O+1];(t>0||E!==0)&&(m.push(T,B,W),C+=3),(e>0||E!==a-1)&&(m.push(B,X,W),C+=3)}f.addGroup(v,C,0),v+=C}function S(w){let k=M,C=new Zt,D=new z,O=0,E=w===!0?t:e,T=w===!0?1:-1;for(let X=1;X<=r;X++)d.push(0,x*T,0),_.push(0,T,0),g.push(.5,.5),M++;let B=M;for(let X=0;X<=r;X++){let K=X/r*u+h,it=Math.cos(K),H=Math.sin(K);D.x=E*H,D.y=x*T,D.z=E*it,d.push(D.x,D.y,D.z),_.push(0,T,0),C.x=it*.5+.5,C.y=H*.5*T+.5,g.push(C.x,C.y),M++}for(let X=0;X<r;X++){let W=k+X,K=B+X;w===!0?m.push(K,K+1,W):m.push(K+1,K,W),O+=3}f.addGroup(v,O,w===!0?1:2),v+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ka=class s extends Ya{constructor(t=1,e=1,i=32,r=1,a=!1,l=0,h=Math.PI*2){super(0,t,e,i,r,a,l,h),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:h}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ma=new z,ga=new z,Dc=new z,_a=new Ni,so=class extends Ge{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let r=Math.pow(10,4),a=Math.cos(cr*e),l=t.getIndex(),h=t.getAttribute("position"),u=l?l.count:h.count,f=[0,0,0],m=["a","b","c"],d=new Array(3),_={},g=[];for(let M=0;M<u;M+=3){l?(f[0]=l.getX(M),f[1]=l.getX(M+1),f[2]=l.getX(M+2)):(f[0]=M,f[1]=M+1,f[2]=M+2);let{a:b,b:x,c:v}=_a;if(b.fromBufferAttribute(h,f[0]),x.fromBufferAttribute(h,f[1]),v.fromBufferAttribute(h,f[2]),_a.getNormal(Dc),d[0]=`${Math.round(b.x*r)},${Math.round(b.y*r)},${Math.round(b.z*r)}`,d[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,d[2]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let R=0;R<3;R++){let S=(R+1)%3,w=d[R],k=d[S],C=_a[m[R]],D=_a[m[S]],O=`${w}_${k}`,E=`${k}_${w}`;E in _&&_[E]?(Dc.dot(_[E].normal)<=a&&(g.push(C.x,C.y,C.z),g.push(D.x,D.y,D.z)),_[E]=null):O in _||(_[O]={index0:f[R],index1:f[S],normal:Dc.clone()})}}for(let M in _)if(_[M]){let{index0:b,index1:x}=_[M];ma.fromBufferAttribute(h,b),ga.fromBufferAttribute(h,x),g.push(ma.x,ma.y,ma.z),g.push(ga.x,ga.y,ga.z)}this.setAttribute("position",new ve(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var ro=class s extends Ge{constructor(t=1,e=32,i=16,r=0,a=Math.PI*2,l=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:a,thetaStart:l,thetaLength:h},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let u=Math.min(l+h,Math.PI),f=0,m=[],d=new z,_=new z,g=[],M=[],b=[],x=[];for(let v=0;v<=i;v++){let R=[],S=v/i,w=0;v===0&&l===0?w=.5/e:v===i&&u===Math.PI&&(w=-.5/e);for(let k=0;k<=e;k++){let C=k/e;d.x=-t*Math.cos(r+C*a)*Math.sin(l+S*h),d.y=t*Math.cos(l+S*h),d.z=t*Math.sin(r+C*a)*Math.sin(l+S*h),M.push(d.x,d.y,d.z),_.copy(d).normalize(),b.push(_.x,_.y,_.z),x.push(C+w,1-S),R.push(f++)}m.push(R)}for(let v=0;v<i;v++)for(let R=0;R<e;R++){let S=m[v][R+1],w=m[v][R],k=m[v+1][R],C=m[v+1][R+1];(v!==0||l>0)&&g.push(S,w,C),(v!==i-1||u<Math.PI)&&g.push(w,k,C)}this.setIndex(g),this.setAttribute("position",new ve(M,3)),this.setAttribute("normal",new ve(b,3)),this.setAttribute("uv",new ve(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var $a=class s extends Ge{constructor(t=1,e=.4,i=12,r=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:a},i=Math.floor(i),r=Math.floor(r);let l=[],h=[],u=[],f=[],m=new z,d=new z,_=new z;for(let g=0;g<=i;g++)for(let M=0;M<=r;M++){let b=M/r*a,x=g/i*Math.PI*2;d.x=(t+e*Math.cos(x))*Math.cos(b),d.y=(t+e*Math.cos(x))*Math.sin(b),d.z=e*Math.sin(x),h.push(d.x,d.y,d.z),m.x=t*Math.cos(b),m.y=t*Math.sin(b),_.subVectors(d,m).normalize(),u.push(_.x,_.y,_.z),f.push(M/r),f.push(g/i)}for(let g=1;g<=i;g++)for(let M=1;M<=r;M++){let b=(r+1)*g+M-1,x=(r+1)*(g-1)+M-1,v=(r+1)*(g-1)+M,R=(r+1)*g+M;l.push(b,x,R),l.push(x,v,R)}this.setIndex(l),this.setAttribute("position",new ve(h,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ja=class extends Ge{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],i=new Set,r=new z,a=new z;if(t.index!==null){let l=t.attributes.position,h=t.index,u=t.groups;u.length===0&&(u=[{start:0,count:h.count,materialIndex:0}]);for(let f=0,m=u.length;f<m;++f){let d=u[f],_=d.start,g=d.count;for(let M=_,b=_+g;M<b;M+=3)for(let x=0;x<3;x++){let v=h.getX(M+x),R=h.getX(M+(x+1)%3);r.fromBufferAttribute(l,v),a.fromBufferAttribute(l,R),Lf(r,a,i)===!0&&(e.push(r.x,r.y,r.z),e.push(a.x,a.y,a.z))}}}else{let l=t.attributes.position;for(let h=0,u=l.count/3;h<u;h++)for(let f=0;f<3;f++){let m=3*h+f,d=3*h+(f+1)%3;r.fromBufferAttribute(l,m),a.fromBufferAttribute(l,d),Lf(r,a,i)===!0&&(e.push(r.x,r.y,r.z),e.push(a.x,a.y,a.z))}}this.setAttribute("position",new ve(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Lf(s,t,e){let i=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(i)===!0||e.has(r)===!0?!1:(e.add(i),e.add(r),!0)}var oo=class extends _i{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kf,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function va(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function zy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var xr=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],a=e[i-1];n:{t:{let l;e:{i:if(!(t<r)){for(let h=i+2;;){if(r===void 0){if(t<a)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===h)break;if(a=r,r=e[++i],t<r)break t}l=e.length;break e}if(!(t>=a)){let h=e[1];t<h&&(i=2,a=h);for(let u=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===u)break;if(r=a,a=e[--i-1],t>=a)break t}l=i,i=0;break e}break n}for(;i<l;){let h=i+l>>>1;t<e[h]?l=h:i=h+1}if(r=e[i],a=e[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=t*r;for(let l=0;l!==r;++l)e[l]=i[a+l];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zh=class extends xr{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ed,endingEnd:Ed}}intervalChanged_(t,e,i){let r=this.parameterPositions,a=t-2,l=t+1,h=r[a],u=r[l];if(h===void 0)switch(this.getSettings_().endingStart){case Ad:a=t,h=2*e-i;break;case Pd:a=r.length-2,h=e+r[a]-r[a+1];break;default:a=t,h=i}if(u===void 0)switch(this.getSettings_().endingEnd){case Ad:l=t,u=2*i-e;break;case Pd:l=1,u=i+r[1]-r[0];break;default:l=t-1,u=e}let f=(i-e)*.5,m=this.valueSize;this._weightPrev=f/(e-h),this._weightNext=f/(u-i),this._offsetPrev=a*m,this._offsetNext=l*m}interpolate_(t,e,i,r){let a=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=t*h,f=u-h,m=this._offsetPrev,d=this._offsetNext,_=this._weightPrev,g=this._weightNext,M=(i-e)/(r-e),b=M*M,x=b*M,v=-_*x+2*_*b-_*M,R=(1+_)*x+(-1.5-2*_)*b+(-.5+_)*M+1,S=(-1-g)*x+(1.5+g)*b+.5*M,w=g*x-g*b;for(let k=0;k!==h;++k)a[k]=v*l[m+k]+R*l[f+k]+S*l[u+k]+w*l[d+k];return a}},Hh=class extends xr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let a=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=t*h,f=u-h,m=(i-e)/(r-e),d=1-m;for(let _=0;_!==h;++_)a[_]=l[f+_]*d+l[u+_]*m;return a}},Vh=class extends xr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},oi=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=va(e,this.TimeBufferType),this.values=va(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:va(t.times,Array),values:va(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Vh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Hh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ea:e=this.InterpolantFactoryMethodDiscrete;break;case Mh:e=this.InterpolantFactoryMethodLinear;break;case sc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ea;case this.InterpolantFactoryMethodLinear:return Mh;case this.InterpolantFactoryMethodSmooth:return sc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t}return this}trim(t,e){let i=this.times,r=i.length,a=0,l=r-1;for(;a!==r&&i[a]<t;)++a;for(;l!==-1&&i[l]>e;)--l;if(++l,a!==0||l!==r){a>=l&&(l=Math.max(l,1),a=l-1);let h=this.getValueSize();this.times=i.slice(a,l),this.values=this.values.slice(a*h,l*h)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let h=0;h!==a;h++){let u=i[h];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,h,u),t=!1;break}if(l!==null&&l>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,h,u,l),t=!1;break}l=u}if(r!==void 0&&zy(r))for(let h=0,u=r.length;h!==u;++h){let f=r[h];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,h,f),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===sc,a=t.length-1,l=1;for(let h=1;h<a;++h){let u=!1,f=t[h],m=t[h+1];if(f!==m&&(h!==1||f!==t[0]))if(r)u=!0;else{let d=h*i,_=d-i,g=d+i;for(let M=0;M!==i;++M){let b=e[d+M];if(b!==e[_+M]||b!==e[g+M]){u=!0;break}}}if(u){if(h!==l){t[l]=t[h];let d=h*i,_=l*i;for(let g=0;g!==i;++g)e[_+g]=e[d+g]}++l}}if(a>0){t[l]=t[a];for(let h=a*i,u=l*i,f=0;f!==i;++f)e[u+f]=e[h+f];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=Mh;var Ts=class extends oi{constructor(t,e,i){super(t,e,i)}};Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=Ea;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Gh=class extends oi{};Gh.prototype.ValueTypeName="color";var Wh=class extends oi{};Wh.prototype.ValueTypeName="number";var Zh=class extends xr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let a=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=(i-e)/(r-e),f=t*h;for(let m=f+h;f!==m;f+=4)ii.slerpFlat(a,0,l,f-h,l,f,u);return a}},ja=class extends oi{InterpolantFactoryMethodLinear(t){return new Zh(this.times,this.values,this.getValueSize(),t)}};ja.prototype.ValueTypeName="quaternion";ja.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends oi{constructor(t,e,i){super(t,e,i)}};Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=Ea;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var Xh=class extends oi{};Xh.prototype.ValueTypeName="vector";var qh=class{constructor(t,e,i){let r=this,a=!1,l=0,h=0,u,f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(m){h++,a===!1&&r.onStart!==void 0&&r.onStart(m,l,h),a=!0},this.itemEnd=function(m){l++,r.onProgress!==void 0&&r.onProgress(m,l,h),l===h&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(m){r.onError!==void 0&&r.onError(m)},this.resolveURL=function(m){return u?u(m):m},this.setURLModifier=function(m){return u=m,this},this.addHandler=function(m,d){return f.push(m,d),this},this.removeHandler=function(m){let d=f.indexOf(m);return d!==-1&&f.splice(d,2),this},this.getHandler=function(m){for(let d=0,_=f.length;d<_;d+=2){let g=f[d],M=f[d+1];if(g.global&&(g.lastIndex=0),g.test(m))return M}return null}}},Hy=new qh,Yh=class{constructor(t){this.manager=t!==void 0?t:Hy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,a){i.load(t,r,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Yh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qa=class extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Nc=new Fe,If=new z,Df=new z,Kh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eo,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;If.setFromMatrixPosition(t.matrixWorld),e.position.copy(If),Df.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Df),e.updateMatrixWorld(),Nc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var $h=class extends Kh{constructor(){super(new Ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},tl=class extends Qa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new $h}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},el=class extends Qa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var nl=class extends Ge{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var ou="\\[\\]\\.:\\/",Vy=new RegExp("["+ou+"]","g"),au="[^"+ou+"]",Gy="[^"+ou.replace("\\.","")+"]",Wy=/((?:WC+[\/:])*)/.source.replace("WC",au),Zy=/(WCOD+)?/.source.replace("WCOD",Gy),Xy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",au),qy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",au),Yy=new RegExp("^"+Wy+Zy+Xy+qy+"$"),Ky=["material","materials","bones","map"],Jh=class{constructor(t,e,i){let r=i||Ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ve=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vy,"")}static parseTrackName(t){let e=Yy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=i.nodeName.substring(r+1);Ky.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(a){for(let l=0;l<a.length;l++){let h=a[l];if(h.name===e||h.uuid===e)return h;let u=i(h.children);if(u)return u}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,a=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let f=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let m=0;m<t.length;m++)if(t[m].name===f){f=m;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(f!==void 0){if(t[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}let l=t[r];if(l===void 0){let f=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+r+" but it wasn't found.",t);return}let h=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?h=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}u=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=a}else l.fromArray!==void 0&&l.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(u=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=r;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ve.Composite=Jh;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ZM=new Float32Array(1);var As=class extends Ha{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var ao=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(en(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Nf=new z,xa=new z,il=class{constructor(t=new z,e=new z){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Nf.subVectors(t,this.start),xa.subVectors(this.end,this.start);let i=xa.dot(xa),a=xa.dot(Nf)/i;return e&&(a=en(a,0,1)),a}closestPointToPoint(t,e,i){let r=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Of=new z,ya,Oc,sl=class extends nn{constructor(t=new z(0,0,1),e=new z(0,0,0),i=1,r=16776960,a=i*.2,l=a*.2){super(),this.type="ArrowHelper",ya===void 0&&(ya=new Ge,ya.setAttribute("position",new ve([0,0,0,0,1,0],3)),Oc=new Ya(0,.5,1,5,1),Oc.translate(0,-.5,0)),this.position.copy(e),this.line=new vr(ya,new ri({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Be(Oc,new Gn({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,a,l)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Of.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Of,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};var rl=class extends Hi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var op={type:"change"},cu={type:"start"},lp={type:"end"},ul=new Ss,ap=new Qn,Jy=Math.cos(70*ll.DEG2RAD),je=new z,wn=2*Math.PI,Ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},lu=1e-6,dl=class extends rl{constructor(t,e=null){super(t,e),this.state=Ne.NONE,this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ps.ROTATE,MIDDLE:Ps.DOLLY,RIGHT:Ps.PAN},this.touches={ONE:Cs.ROTATE,TWO:Cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new ii,this._lastTargetPosition=new z,this._quat=new ii().setFromUnitVectors(t.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ao,this._sphericalDelta=new ao,this._scale=1,this._panOffset=new z,this._rotateStart=new Zt,this._rotateEnd=new Zt,this._rotateDelta=new Zt,this._panStart=new Zt,this._panEnd=new Zt,this._panDelta=new Zt,this._dollyStart=new Zt,this._dollyEnd=new Zt,this._dollyDelta=new Zt,this._dollyDirection=new z,this._mouse=new Zt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Qy.bind(this),this._onPointerDown=jy.bind(this),this._onPointerUp=tM.bind(this),this._onContextMenu=aM.bind(this),this._onMouseWheel=iM.bind(this),this._onKeyDown=sM.bind(this),this._onTouchStart=rM.bind(this),this._onTouchMove=oM.bind(this),this._onMouseDown=eM.bind(this),this._onMouseMove=nM.bind(this),this._interceptControlDown=lM.bind(this),this._interceptControlUp=cM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(op),this.update(),this.state=Ne.NONE}update(t=null){let e=this.object.position;je.copy(e).sub(this.target),je.applyQuaternion(this._quat),this._spherical.setFromVector3(je),this.autoRotate&&this.state===Ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=wn:i>Math.PI&&(i-=wn),r<-Math.PI?r+=wn:r>Math.PI&&(r-=wn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=l!=this._spherical.radius}if(je.setFromSpherical(this._spherical),je.applyQuaternion(this._quatInverse),e.copy(this.target).add(je),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){let h=je.length();l=this._clampDistance(h*this._scale);let u=h-l;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),a=!!u}else if(this.object.isOrthographicCamera){let h=new z(this._mouse.x,this._mouse.y,0);h.unproject(this.object);let u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=u!==this.object.zoom;let f=new z(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(h),this.object.updateMatrixWorld(),l=je.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(ul.origin.copy(this.object.position),ul.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ul.direction))<Jy?this.object.lookAt(this.target):(ap.setFromNormalAndCoplanarPoint(this.object.up,this.target),ul.intersectPlane(ap,this.target))))}else if(this.object.isOrthographicCamera){let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>lu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>lu||this._lastTargetPosition.distanceToSquared(this.target)>lu?(this.dispatchEvent(op),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?wn/60*this.autoRotateSpeed*t:wn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){je.setFromMatrixColumn(e,0),je.multiplyScalar(-t),this._panOffset.add(je)}_panUp(t,e){this.screenSpacePanning===!0?je.setFromMatrixColumn(e,1):(je.setFromMatrixColumn(e,0),je.crossVectors(this.object.up,je)),je.multiplyScalar(t),this._panOffset.add(je)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;je.copy(r).sub(this.target);let a=je.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/i.clientHeight,this.object.matrix),this._panUp(2*e*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=t-i.left,a=e-i.top,l=i.width,h=i.height;this._mouse.x=r/l*2-1,this._mouse.y=-(a/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/e.clientHeight),this._rotateUp(wn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),a=.5*(t.pageY+i.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/e.clientHeight),this._rotateUp(wn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let l=(t.pageX+e.x)*.5,h=(t.pageY+e.y)*.5;this._updateZoomParameters(l,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Zt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function jy(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Qy(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function tM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lp),this.state=Ne.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function eM(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ps.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ne.DOLLY;break;case Ps.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ne.ROTATE}break;case Ps.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ne.PAN}break;default:this.state=Ne.NONE}this.state!==Ne.NONE&&this.dispatchEvent(cu)}function nM(s){switch(this.state){case Ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function iM(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ne.NONE||(s.preventDefault(),this.dispatchEvent(cu),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(lp))}function sM(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function rM(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Cs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ne.TOUCH_ROTATE;break;case Cs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ne.TOUCH_PAN;break;default:this.state=Ne.NONE}break;case 2:switch(this.touches.TWO){case Cs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ne.TOUCH_DOLLY_PAN;break;case Cs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ne.TOUCH_DOLLY_ROTATE;break;default:this.state=Ne.NONE}break;default:this.state=Ne.NONE}this.state!==Ne.NONE&&this.dispatchEvent(cu)}function oM(s){switch(this._trackPointer(s),this.state){case Ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ne.NONE}}function aM(s){this.enabled!==!1&&s.preventDefault()}function lM(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cM(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var cp=new Vn,fl=new z,br=class extends nl{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new ve(t,3)),this.setAttribute("uv",new ve(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new As(e,6,1);return this.setAttribute("instanceStart",new Xn(i,3,0)),this.setAttribute("instanceEnd",new Xn(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new As(e,6,1);return this.setAttribute("instanceColorStart",new Xn(i,3,0)),this.setAttribute("instanceColorEnd",new Xn(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Ja(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),cp.setFromBufferAttribute(e),this.boundingBox.union(cp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let a=0,l=t.count;a<l;a++)fl.fromBufferAttribute(t,a),r=Math.max(r,i.distanceToSquared(fl)),fl.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(fl));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}};St.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Zt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Mn.line={uniforms:cl.merge([St.common,St.fog,St.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var is=class extends Zn{static get type(){return"LineMaterial"}constructor(t){super({uniforms:cl.clone(Mn.line.uniforms),vertexShader:Mn.line.vertexShader,fragmentShader:Mn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var hu=new De,hp=new z,up=new z,an=new De,ln=new De,vi=new De,uu=new z,du=new Fe,cn=new il,dp=new z,pl=new Vn,ml=new si,xi=new De,yi,Rs;function fp(s,t,e){return xi.set(0,0,-t,1).applyMatrix4(s.projectionMatrix),xi.multiplyScalar(1/xi.w),xi.x=Rs/e.width,xi.y=Rs/e.height,xi.applyMatrix4(s.projectionMatrixInverse),xi.multiplyScalar(1/xi.w),Math.abs(Math.max(xi.x,xi.y))}function hM(s,t){let e=s.matrixWorld,i=s.geometry,r=i.attributes.instanceStart,a=i.attributes.instanceEnd,l=Math.min(i.instanceCount,r.count);for(let h=0,u=l;h<u;h++){cn.start.fromBufferAttribute(r,h),cn.end.fromBufferAttribute(a,h),cn.applyMatrix4(e);let f=new z,m=new z;yi.distanceSqToSegment(cn.start,cn.end,m,f),m.distanceTo(f)<Rs*.5&&t.push({point:m,pointOnLine:f,distance:yi.origin.distanceTo(m),object:s,face:null,faceIndex:h,uv:null,uv1:null})}}function uM(s,t,e){let i=t.projectionMatrix,a=s.material.resolution,l=s.matrixWorld,h=s.geometry,u=h.attributes.instanceStart,f=h.attributes.instanceEnd,m=Math.min(h.instanceCount,u.count),d=-t.near;yi.at(1,vi),vi.w=1,vi.applyMatrix4(t.matrixWorldInverse),vi.applyMatrix4(i),vi.multiplyScalar(1/vi.w),vi.x*=a.x/2,vi.y*=a.y/2,vi.z=0,uu.copy(vi),du.multiplyMatrices(t.matrixWorldInverse,l);for(let _=0,g=m;_<g;_++){if(an.fromBufferAttribute(u,_),ln.fromBufferAttribute(f,_),an.w=1,ln.w=1,an.applyMatrix4(du),ln.applyMatrix4(du),an.z>d&&ln.z>d)continue;if(an.z>d){let S=an.z-ln.z,w=(an.z-d)/S;an.lerp(ln,w)}else if(ln.z>d){let S=ln.z-an.z,w=(ln.z-d)/S;ln.lerp(an,w)}an.applyMatrix4(i),ln.applyMatrix4(i),an.multiplyScalar(1/an.w),ln.multiplyScalar(1/ln.w),an.x*=a.x/2,an.y*=a.y/2,ln.x*=a.x/2,ln.y*=a.y/2,cn.start.copy(an),cn.start.z=0,cn.end.copy(ln),cn.end.z=0;let b=cn.closestPointToPointParameter(uu,!0);cn.at(b,dp);let x=ll.lerp(an.z,ln.z,b),v=x>=-1&&x<=1,R=uu.distanceTo(dp)<Rs*.5;if(v&&R){cn.start.fromBufferAttribute(u,_),cn.end.fromBufferAttribute(f,_),cn.start.applyMatrix4(l),cn.end.applyMatrix4(l);let S=new z,w=new z;yi.distanceSqToSegment(cn.start,cn.end,w,S),e.push({point:w,pointOnLine:S,distance:yi.origin.distanceTo(w),object:s,face:null,faceIndex:_,uv:null,uv1:null})}}}var gl=class extends Be{constructor(t=new br,e=new is({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,r=new Float32Array(2*e.count);for(let l=0,h=0,u=e.count;l<u;l++,h+=2)hp.fromBufferAttribute(e,l),up.fromBufferAttribute(i,l),r[h]=h===0?0:r[h-1],r[h+1]=r[h]+hp.distanceTo(up);let a=new As(r,2,1);return t.setAttribute("instanceDistanceStart",new Xn(a,1,0)),t.setAttribute("instanceDistanceEnd",new Xn(a,1,1)),this}raycast(t,e){let i=this.material.worldUnits,r=t.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let a=t.params.Line2!==void 0&&t.params.Line2.threshold||0;yi=t.ray;let l=this.matrixWorld,h=this.geometry,u=this.material;Rs=u.linewidth+a,h.boundingSphere===null&&h.computeBoundingSphere(),ml.copy(h.boundingSphere).applyMatrix4(l);let f;if(i)f=Rs*.5;else{let d=Math.max(r.near,ml.distanceToPoint(yi.origin));f=fp(r,d,u.resolution)}if(ml.radius+=f,yi.intersectsSphere(ml)===!1)return;h.boundingBox===null&&h.computeBoundingBox(),pl.copy(h.boundingBox).applyMatrix4(l);let m;if(i)m=Rs*.5;else{let d=Math.max(r.near,pl.distanceToPoint(yi.origin));m=fp(r,d,u.resolution)}pl.expandByScalar(m),yi.intersectsBox(pl)!==!1&&(i?hM(this,e):uM(this,r,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(hu),this.material.uniforms.resolution.value.set(hu.z,hu.w))}};var Sr=class extends br{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,i=new Float32Array(2*e);for(let r=0;r<e;r+=3)i[2*r]=t[r],i[2*r+1]=t[r+1],i[2*r+2]=t[r+2],i[2*r+3]=t[r+3],i[2*r+4]=t[r+4],i[2*r+5]=t[r+5];return super.setPositions(i),this}setColors(t){let e=t.length-3,i=new Float32Array(2*e);for(let r=0;r<e;r+=3)i[2*r]=t[r],i[2*r+1]=t[r+1],i[2*r+2]=t[r+2],i[2*r+3]=t[r+3],i[2*r+4]=t[r+4],i[2*r+5]=t[r+5];return super.setColors(i),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var _l=class extends gl{constructor(t=new Sr,e=new is({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var pp=Math.PI/180;function dM(s,t="#cfe0f2",e="rgba(8,18,26,.75)"){let i=document.createElement("canvas");i.width=256,i.height=64;let r=i.getContext("2d");r.font="bold 30px Helvetica, Arial, sans-serif";let a=Math.min(250,r.measureText(s).width+24);r.fillStyle=e,r.fillRect(128-a/2,8,a,48),r.fillStyle=t,r.textAlign="center",r.textBaseline="middle",r.fillText(s,128,33);let l=new Xa(i);l.minFilter=Hn;let h=new Va(new no({map:l,depthTest:!1,transparent:!0}));return h.userData.aspect=4,h.renderOrder=10,h}var mp=s=>{let t=Math.pow(10,Math.floor(Math.log10(s/4))),e=s/4/t;return(e<1.5?1:e<3.5?2:e<7.5?5:10)*t};function fM(){let s=new ki,t=.67,e=.026,i=new oo({color:"#9db2c8",roughness:.5,metalness:.1,emissive:"#1a2a3c"}),r=new oo({color:"#e8eef5",roughness:.5,emissive:"#223347"}),a=[];for(let g=0;g<=24;g++){let M=g/24,b=e*Math.pow(Math.sin(Math.PI*Math.pow(M,.75)),.55)*(M>.7?1-(M-.7)*1.2*(M-.7)/.3*.5:1);a.push(new Zt(Math.max(b,.0015),(M-.5)*t))}let l=new Be(new qa(a,20),i);l.rotation.x=-Math.PI/2,s.add(l);let h=new Be(new Wn(.012,.05,.12),i);h.position.set(0,e+.02,-.04),s.add(h);let u=(g,M,b)=>{let x=new Be(new Wn(.075,.003,.03),r);return x.position.set(g,0,M),x.rotation.z=b,x};s.add(u(0,.27,0));let f=u(0,.27,Math.PI/2);s.add(f);let m=new Be(new Wn(.05,.003,.02),r);m.position.set(0,0,-.17),s.add(m);let d=new Be(new $a(.014,.003,6,16),r);d.position.set(0,0,.345),s.add(d);let _=new Be(new ro(.008,8,8),new Gn({color:"#e0a93b"}));return _.position.set(0,0,-.34),s.add(_),s}var vl=class{constructor(t){this.host=t,this.dirty=!0,this.active=!1,this.t=0,this.follow=!1,this.color="step",this.plan=null,this.renderer=new Fa({antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.setClearColor("#08121a"),t.append(this.renderer.domElement),this.scene=new za,this.scene.fog=null,this.cam=new yn(42,1,.01,2e3),this.cam.position.set(6,4,8),this.ctl=new dl(this.cam,this.renderer.domElement),this.ctl.addEventListener("change",()=>{this.dirty=!0}),this.scene.add(new el("#8fa6c0",1.1));let e=new tl("#ffffff",2);e.position.set(3,8,5),this.scene.add(e),this.world=new ki,this.scene.add(this.world),this.boat=fM(),this.boat.rotation.order="YXZ",this.scene.add(this.boat);let i=new Ge;i.setAttribute("position",new ve([0,0,0],3)),this.dot=new Za(i,new io({color:"#ffb12b",size:11,sizeAttenuation:!1,depthTest:!1,transparent:!0})),this.dot.renderOrder=20,this.scene.add(this.dot),this.lm=new is({color:16777215,linewidth:3,vertexColors:!0,worldUnits:!1}),this.sprites=[],new ResizeObserver(()=>this.resize()).observe(t),this.resize();let r=()=>{requestAnimationFrame(r),this.active&&this.dirty&&(this.dirty=!1,this.ctl.update(),this.updateSprites(),this.renderer.render(this.scene,this.cam))};r()}resize(){let t=this.host.clientWidth||600,e=this.host.clientHeight||400;this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.cam.aspect=t/e,this.cam.updateProjectionMatrix(),this.lm.resolution.set(t,e),this.dirty=!0}setActive(t){this.active=t,this.dirty=!0,t&&this.resize()}updateSprites(){let t=this.cam.position.distanceTo(this.ctl.target);this.sprites.forEach(e=>{let i=(e.userData.size||.03)*t;e.scale.set(i*e.userData.aspect,i,1)})}sprite(t,e,i,r){let a=dM(t,r);return a.position.copy(e),a.userData.size=i,this.world.add(a),this.sprites.push(a),a}clear(){for(;this.world.children.length;)this.world.children.pop().traverse?.(e=>{e.geometry?.dispose(),e.material&&e.material!==this.lm&&(e.material.map?.dispose(),e.material.dispose())});this.sprites=[]}P(t){return new z(t.x,-t.z,-t.y)}setPlan(t,e={}){this.plan=t,this.clear();let i=t.pts,r=t.stats;if(i.length<2){this.dirty=!0;return}let a=Math.max(1,.12*Math.max(r.w,r.l,r.maxDepth)),l=Math.min(r.bb.x0,-1)-a,h=Math.max(r.bb.x1,1)+a,u=Math.min(r.bb.y0,-1)-a,f=Math.max(r.bb.y1,1)+a,m=Math.max(e.depthLimit||0,r.maxDepth*1.2,1.2),d=(l+h)/2,_=-(u+f)/2,g=h-l,M=f-u;this.size=Math.max(g,M,m),this.cx=d,this.cz=_,this.dmax=m;let b=new Be(new Wn(g,m,M),new Gn({color:"#0f4a7a",transparent:!0,opacity:.1,side:mn,depthWrite:!1}));b.position.set(d,-m/2,_),this.world.add(b);let x=new ns(new so(new Wn(g,m,M)),new ri({color:"#2f6ca8",transparent:!0,opacity:.8}));x.position.copy(b.position),this.world.add(x);let v=new Be(new ws(g,M),new Gn({color:"#1b6fb5",transparent:!0,opacity:.12,side:zn,depthWrite:!1}));v.rotation.x=-Math.PI/2,v.position.set(d,0,_),this.world.add(v);let R=mp(Math.max(g,M)),S=(xt,st)=>{let It=new ri({color:"#35597d",transparent:!0,opacity:st}),qt=[];for(let Ae=Math.ceil(l/R)*R;Ae<=h+1e-6;Ae+=R)qt.push(Ae,xt,_-M/2,Ae,xt,_+M/2);for(let Ae=Math.ceil(-f/R)*R;Ae<=-u+1e-6;Ae+=R)qt.push(l,xt,Ae,h,xt,Ae);let oe=new Ge;oe.setAttribute("position",new ve(qt,3));let V=new ns(oe,It);this.world.add(V)};S(0,.6),S(-m,.25);let w=new sl(new z(0,0,-1),new z(l+.5*a,0,_-M/2+.2*a),Math.max(a*.9,this.size*.08),14702667,this.size*.02,this.size*.012);this.world.add(w),this.sprite("N",new z(l+.5*a,0,_-M/2-this.size*.05),.04,"#ff8a7d");let k=l,C=_+M/2,D=mp(m),O=[k,0,C,k,-m,C];for(let xt=0;xt<=m+1e-6;xt+=D)O.push(k,-xt,C,k-this.size*.015,-xt,C),this.sprite(xt.toFixed(D<1?1:0)+" m",new z(k-this.size*.07,-xt,C),.03,"#9fc3ea");let E=new Ge;if(E.setAttribute("position",new ve(O,3)),this.world.add(new ns(E,new ri({color:"#8fb4dc"}))),e.depthLimit&&e.depthLimit<=m){let xt=new Be(new ws(g,M),new Gn({color:"#e0584b",transparent:!0,opacity:.08,side:zn,depthWrite:!1}));xt.rotation.x=-Math.PI/2,xt.position.set(d,-e.depthLimit,_),this.world.add(xt)}let T=r.bb.x0,B=r.bb.x1,X=r.bb.y0,W=r.bb.y1,K=new ns(new so(new Wn(Math.max(B-T,.001),Math.max(r.maxDepth,.001),Math.max(W-X,.001))),new ri({color:"#e0a93b",transparent:!0,opacity:.55}));K.position.set((T+B)/2,-r.maxDepth/2,-(X+W)/2),this.world.add(K),B-T>.2&&this.sprite(`B ${(B-T).toFixed(1)} m`,new z((T+B)/2,0,-X+this.size*.03),.03,"#ffd27a"),W-X>.2&&this.sprite(`L ${(W-X).toFixed(1)} m`,new z(B+this.size*.04,0,-(X+W)/2),.03,"#ffd27a"),r.maxDepth>.2&&this.sprite(`T ${r.maxDepth.toFixed(1)} m`,new z(B,-r.maxDepth/2,-X),.03,"#ffd27a");let it=[],H=[],ut=[],G=new fe,lt=Math.max(r.maxDepth,.5);i.forEach(xt=>{let st=this.P(xt);it.push(st.x,st.y,st.z),ut.push(st.x,0,st.z),this.color==="depth"?G.setHSL(.55-.1*xt.z/lt,.9,.45+.25*(1-xt.z/lt)):G.set(Pn[t.steps?.[xt.i]?.t]?.color||"#9aa7b8"),H.push(G.r,G.g,G.b)});let rt=new Sr;rt.setPositions(it),rt.setColors(H);let ot=new _l(rt,this.lm);ot.computeLineDistances(),this.world.add(ot);let Mt=new Ge;Mt.setAttribute("position",new ve(ut,3)),this.world.add(new vr(Mt,new ri({color:"#7ea6d1",transparent:!0,opacity:.35})));let yt=[],$=-99;i.forEach(xt=>{if(xt.t-$>=Math.max(5,r.dur/40)&&xt.z>.05){$=xt.t;let st=this.P(xt);yt.push(st.x,st.y,st.z,st.x,0,st.z)}});let pt=new Ge;pt.setAttribute("position",new ve(yt,3)),this.world.add(new ns(pt,new ri({color:"#4d7aa8",transparent:!0,opacity:.35})));let bt={};i.forEach(xt=>{if(xt.i>=0&&!bt[xt.i]){bt[xt.i]=1;let st=this.P(xt),It=new Be(new ro(this.size*.006,10,10),new Gn({color:Pn[t.steps?.[xt.i]?.t]?.color||"#fff"}));It.position.copy(st),this.world.add(It),this.sprite(`${xt.i+1} ${Pn[t.steps?.[xt.i]?.t]?.label||""}`,st.clone().add(new z(0,this.size*.03,0)),.02)}});let gt=new Be(new Ka(this.size*.01,this.size*.03,12),new Gn({color:"#4fb477"}));gt.position.copy(this.P(i[0])).add(new z(0,this.size*.02,0)),gt.rotation.x=Math.PI,this.world.add(gt),this.sprite("START",this.P(i[0]).add(new z(0,this.size*.06,0)),.024,"#7fe0a0");let Xt=i[i.length-1];this.sprite("ENDE",this.P(Xt).add(new z(0,this.size*.06,0)),.024,"#ff8a7d"),this.boatScale=e.boatScale||Math.max(1,Math.min(60,this.size*.07/.67)),this.boat.scale.setScalar(this.boatScale),this.lm.linewidth=4,this.at(this.t),this.home(!1)}home(t=!0){if(!this.size)return;let e=this.size*.95;this.ctl.target.set(this.cx,-this.dmax*.35,this.cz),this.cam.position.set(this.cx+e*.75,e*.5,this.cz+e*.95),this.cam.near=this.size*.002,this.cam.far=this.size*40,this.cam.updateProjectionMatrix(),this.ctl.update(),this.dirty=!0}view(t){let e=this.size*1.3,i=this.ctl.target.set(this.cx,-this.dmax*.3,this.cz);t==="top"?this.cam.position.set(this.cx,e*1.5,this.cz+.001):t==="side"?this.cam.position.set(this.cx,-this.dmax*.3,this.cz+e*1.4):this.home(),this.ctl.update(),this.dirty=!0}at(t){if(this.t=t,!this.plan)return;let e=this.plan.pts;if(e.length<2)return;let i=0,r=e.length-1;for(;r-i>1;){let d=i+r>>1;e[d].t<=t?i=d:r=d}let a=e[i],l=e[r],h=l.t>a.t?Math.min(1,Math.max(0,(t-a.t)/(l.t-a.t))):0,u=d=>a[d]+(l[d]-a[d])*h,f={x:u("x"),y:u("y"),z:u("z")};this.boat.position.copy(this.P(f)),this.dot.position.copy(this.boat.position);let m=l.h-a.h;if(m>180&&(m-=360),m<-180&&(m+=360),this.boat.rotation.y=-(a.h+m*h)*pp,this.boat.rotation.x=u("p")*pp,this.follow){let d=this.boat.position;this.ctl.target.lerp(d,1)}return this.cur={...a,x:f.x,y:f.y,z:f.z,h:a.h+m*h,p:u("p"),v:u("v"),f:u("f"),thr:u("thr"),t},this.dirty=!0,this.cur}shot(){return this.ctl.update(),this.updateSprites(),this.renderer.render(this.scene,this.cam),this.renderer.domElement.toDataURL("image/png")}};var gn=(s,t,e="")=>P("button",{class:"btn "+e,onclick:t},s);function pM(s,t,e,i){let r=s.getContext("2d"),a=s.width/2,l=s.height/2;r.setTransform(2,0,0,2,0,0),r.clearRect(0,0,a,l),r.fillStyle="#0a141d",r.fillRect(0,0,a,l);let h=t.pts,u=t.stats;if(h.length<2)return;let f=44,m=10,d=10,_=20,g=Math.max(u.maxDepth*1.15,1),M=Math.max(u.dur,1),b=C=>f+C/M*(a-f-m),x=C=>d+C/g*(l-d-_);r.font="10px Helvetica, Arial",r.fillStyle="#6f869c",r.strokeStyle="#162838",r.textAlign="right";let v=g<=3?.5:g<=10?1:g<=30?5:10;for(let C=0;C<=g;C+=v)r.beginPath(),r.moveTo(f,x(C)),r.lineTo(a-m,x(C)),r.stroke(),r.fillText(C+" m",f-4,x(C)+3);r.textAlign="center";let R=M<120?10:M<600?60:M<3600?300:900;for(let C=0;C<=M;C+=R)r.fillText(C>=60?Math.round(C/60)+" min":C+" s",b(C),l-6);i&&i<g&&(r.strokeStyle=Vt.bad,r.setLineDash([4,3]),r.beginPath(),r.moveTo(f,x(i)),r.lineTo(a-m,x(i)),r.stroke(),r.setLineDash([]));let S=-2,w=0,k=[];h.forEach((C,D)=>{C.i!==S&&(S>=-1&&k.push([S,w,C.t]),S=C.i,w=C.t)}),k.push([S,w,M]),k.forEach(([C,D,O])=>{C<0||(r.fillStyle=(Pn[t.steps[C]?.t]?.color||"#888")+"22",r.fillRect(b(D),d,Math.max(1,b(O)-b(D)),l-d-_))}),r.lineWidth=2,r.strokeStyle="#4aa3ff",r.beginPath(),h.forEach((C,D)=>{D?r.lineTo(b(C.t),x(C.z)):r.moveTo(b(C.t),x(C.z))}),r.stroke(),r.lineWidth=1,r.strokeStyle="#8a6fd055",r.beginPath(),h.forEach((C,D)=>{let O=d+(1-C.f/100)*(l-d-_)*.25+(l-d-_)*.75;D?r.lineTo(b(C.t),O):r.moveTo(b(C.t),O)}),r.stroke(),r.fillStyle="#8a6fd0",r.textAlign="left",r.fillText("Ballast",f+4,l-_-4),r.strokeStyle="#e0a93b",r.lineWidth=1.5,r.beginPath(),r.moveTo(b(e),d),r.lineTo(b(e),l-_),r.stroke()}function mM(s,t,e){let i=s.getContext("2d"),r=s.width/2,a=s.height/2;i.setTransform(2,0,0,2,0,0),i.clearRect(0,0,r,a),i.fillStyle="#0a141d",i.fillRect(0,0,r,a);let l=t.pts,h=t.stats;if(l.length<2)return;let u=26,f=Math.max(h.bb.x1-h.bb.x0,2),m=Math.max(h.bb.y1-h.bb.y0,2),d=Math.min((r-2*u)/f,(a-2*u)/m),_=r/2-(h.bb.x0+h.bb.x1)/2*d,g=a/2+(h.bb.y0+h.bb.y1)/2*d,M=S=>_+S*d,b=S=>g-S*d,x=(()=>{let S=40/d,w=Math.pow(10,Math.floor(Math.log10(S))),k=S/w;return(k<1.5?1:k<3.5?2:k<7.5?5:10)*w})();i.strokeStyle="#162838",i.fillStyle="#6f869c",i.font="10px Helvetica, Arial",i.textAlign="left";for(let S=Math.floor(-_/d/x)*x;M(S)<r;S+=x)i.beginPath(),i.moveTo(M(S),0),i.lineTo(M(S),a),i.stroke();for(let S=Math.floor((g-a)/d/x)*x;b(S)>0;S+=x)i.beginPath(),i.moveTo(0,b(S)),i.lineTo(r,b(S)),i.stroke();i.fillText(`Raster ${x} m`,6,a-6),i.fillStyle=Vt.bad,i.fillText("N \u2191",r-28,14),i.lineWidth=2;for(let S=1;S<l.length;S++)i.strokeStyle=Pn[t.steps[l[S].i]?.t]?.color||"#9aa7b8",i.beginPath(),i.moveTo(M(l[S-1].x),b(l[S-1].y)),i.lineTo(M(l[S].x),b(l[S].y)),i.stroke();i.fillStyle=Vt.ok,i.beginPath(),i.arc(M(0),b(0),4,0,7),i.fill();let v=l[l.length-1];i.fillStyle=Vt.bad,i.beginPath(),i.arc(M(v.x),b(v.y),4,0,7),i.fill();let R=l.find(S=>S.t>=e)||v;i.strokeStyle="#e0a93b",i.lineWidth=2,i.beginPath(),i.arc(M(R.x),b(R.y),7,0,7),i.stroke(),i.save(),i.translate(M(R.x),b(R.y)),i.rotate(R.h*Math.PI/180),i.fillStyle="#e0a93b",i.beginPath(),i.moveTo(0,-11),i.lineTo(-4,-4),i.lineTo(4,-4),i.fill(),i.restore()}function gp(){let s=An.get("mission",null);s=Array.isArray(s)&&s.length?s:Ql("Pool Funktionstest");let t=null,e=0,i=!1,r=10,a=0,l=-1,h=An.get("h0",0),u=An.get("pmax",25),f=An.get("capwh",6.3),m=P("div",{class:"steps-list"}),d=P("div",{class:"warns"}),_=P("div",{class:"view3d"}),g={dur:le("Dauer"),dist:le("Strecke","m"),dep:le("Max Tiefe","m"),box:le("Bahn B \xD7 L","m"),end:le("Ende zu Start","m"),en:le("Energie","Wh"),bat:le("Akku Bedarf","%"),spd:le("\xD8 Fahrt","m/s")},M=P("canvas",{width:1e3,height:300,class:"cv"}),b=P("canvas",{width:600,height:300,class:"cv"}),x=P("input",{type:"range",min:0,max:100,step:.1,value:0,class:"sl tl",oninput:()=>{e=+x.value,i=!1,S(),K()}}),v=P("div",{class:"hud"}),R=gn("\u25B6",()=>{t&&(e>=t.stats.dur-.05&&(e=0),i=!i,a=performance.now(),S())},"play"),S=()=>{R.textContent=i?"\u275A\u275A":"\u25B6"},w=new vl(_),k=P("select",{class:"in sm",onchange:()=>{r=+k.value}},[1,5,10,30,100].map(st=>P("option",{value:st,selected:st===r},`${st}\xD7`))),C=P("select",{class:"in sm",onchange:()=>{w.color=C.value,W()}},P("option",{value:"step"},"Farbe: Schritt"),P("option",{value:"depth"},"Farbe: Tiefe")),D=P("input",{type:"checkbox",onchange:()=>{w.follow=D.checked,w.at(e)}}),O=P("select",{class:"in sm",onchange:()=>{w.boat.scale.setScalar(+O.value||w.boatScale),w.dirty=!0}},P("option",{value:0},"Boot: Auto"),P("option",{value:1},"Boot: 1:1"),P("option",{value:5},"Boot: 5\xD7"),P("option",{value:20},"Boot: 20\xD7")),E=()=>Io(st=>Q.par[st]),T=()=>{let st=E();t=No(s,st,{h0:h,pMax:u}),t.steps=s;let It=t.stats;x.max=It.dur,e=Math.min(e,It.dur),g.dur.set(cs(It.dur)),g.dist.set(wt(It.dist,1)),g.dep.set(wt(It.maxDepth,2),It.maxDepth>st.depthMax?"bad":""),g.box.set(`${wt(It.w,1)} \xD7 ${wt(It.l,1)}`),g.end.set(wt(It.endDist,1)),g.en.set(wt(It.wh,2));let qt=It.wh/f*100;g.bat.set(wt(qt,0),qt>60?"bad":qt>40?"warn":""),g.spd.set(wt(It.avgV,2)),d.innerHTML="",[...Do(s,st),...t.notes.map(V=>({i:V.i,m:V.m}))].forEach(V=>d.append(P("div",{class:"w"},(V.i>=0?`Schritt ${V.i+1}: `:"")+V.m))),An.set("mission",s),W(),K()},B=null,X=()=>{clearTimeout(B),B=setTimeout(T,120)},W=()=>{t&&w.setPlan(t,{depthLimit:E().depthMax,boatScale:+O.value||void 0})},K=()=>{if(!t)return;x.value=e;let st=w.at(e);pM(M,t,e,E().depthMax),mM(b,t,e),st&&(v.innerHTML="",[["t",cs(st.t)],["Tiefe",wt(st.z,2)+" m"],["Kurs",wt((st.h%360+360)%360,0)+"\xB0"],["Nick",wt(st.p,0)+"\xB0"],["Fahrt",wt(st.v,2)+" m/s"],["Ballast",wt(st.f,0)+" %"],["Schritt",st.i>=0?`${st.i+1} ${Pn[s[st.i]?.t]?.label||""}`:"Start"]].forEach(([It,qt])=>v.append(P("span",null,It,P("b",null,qt)))),l=st.i,it())},it=()=>{[...m.children].forEach((st,It)=>st.classList.toggle("sel",It===l))},H=()=>{m.innerHTML="",s.forEach((st,It)=>{let qt=Pn[st.t],oe=Do(s,E()).some(Ot=>Ot.i===It),V=P("select",{class:"in sm",onchange:()=>{let Ot=st.v;s[It]=Lo(V.value),H(),X()}},Jl.map(Ot=>P("option",{value:Ot,selected:Ot===st.t},Pn[Ot].label))),Ae=qt.f.map((Ot,kt)=>{let be=P("input",{class:"in num",type:"number",step:Ot[5],min:Ot[3],max:Ot[4],value:st.v[kt],onchange:()=>{st.v[kt]=Sn(+be.value,Ot[3],Ot[4]),be.value=st.v[kt],X()}});return P("label",{class:"fld"},P("span",null,Ot[0],Ot[1]?` (${Ot[1]})`:""),be)}),ne=Ot=>()=>{let kt=It+Ot;kt<0||kt>=s.length||([s[It],s[kt]]=[s[kt],s[It]],H(),T())};m.append(P("div",{class:"step"+(oe?" warn":""),onclick:()=>{let Ot=t.pts.find(kt=>kt.i===It);Ot&&(e=Ot.t,i=!1,S(),K())}},P("div",{class:"sh"},P("i",{style:{background:qt.color}}),P("b",null,It+1),V,P("span",{class:"sp"}),P("button",{class:"ib",title:"hoch",onclick:Ot=>{Ot.stopPropagation(),ne(-1)()}},"\u2191"),P("button",{class:"ib",title:"runter",onclick:Ot=>{Ot.stopPropagation(),ne(1)()}},"\u2193"),P("button",{class:"ib",title:"duplizieren",onclick:Ot=>{Ot.stopPropagation(),s.splice(It+1,0,JSON.parse(JSON.stringify(st))),H(),T()}},"\u29C9"),P("button",{class:"ib del",title:"l\xF6schen",onclick:Ot=>{Ot.stopPropagation(),s.splice(It,1),H(),T()}},"\u2715")),Ae.length?P("div",{class:"flds"},Ae):P("div",{class:"dim sm"},"Ballast leeren, mit Gas und Nick nach oben auftauchen bis Tiefe 0, Mission endet.")))}),it()},ut=P("select",{class:"in"},Jl.map(st=>P("option",{value:st},Pn[st].label))),G=()=>{if(s.length>=Ro)return ae("Maximal 64 Schritte","warn");s.push(Lo(ut.value)),H(),T(),m.scrollTop=m.scrollHeight},lt=P("select",{class:"in",onchange:()=>{lt.value&&((!s.length||confirm("Aktuelle Mission durch Vorlage ersetzen?"))&&(s=Ql(lt.value),e=0,H(),T()),lt.value="")}},P("option",{value:""},"Vorlage laden \u2026"),Object.keys(jl).map(st=>P("option",{value:st},st)));Oe.on("mission:set",st=>{s=st,e=0,l=-1,H(),T()});let rt=P("dialog",{class:"dlg"}),ot={lo:.5,hi:2,n:3,spd:25,rate:.15,pit:15},Mt=(st,It,qt,oe=.1)=>P("label",{class:"fld"},P("span",null,`${st} (${qt})`),P("input",{class:"in num",type:"number",step:oe,value:ot[It],onchange:V=>{ot[It]=+V.target.value}}));rt.append(P("h3",null,"Yo Yo Profil erzeugen"),P("div",{class:"flds"},Mt("Flachste Tiefe","lo","m"),Mt("Tiefste Tiefe","hi","m"),Mt("Zyklen","n","x",1),Mt("Fahrt","spd","%",1),Mt("Max Sinkrate","rate","m/s",.01),Mt("Max Nick","pit","deg",1)),P("div",{class:"row"},gn("Anh\xE4ngen",()=>{let st=s.length;s.push({t:"DIVE",v:[ot.lo,ot.rate,ot.pit,ot.spd]},{t:"DIVE",v:[ot.hi,ot.rate,ot.pit,ot.spd]},{t:"DIVE",v:[ot.lo,ot.rate,ot.pit,ot.spd]}),ot.n>1&&s.push({t:"REPEAT",v:[ot.n-1,st+1,0,0]}),rt.close(),H(),T()},"primary"),gn("Abbrechen",()=>rt.close())));let yt=P("span",{class:"dim"}),$=async st=>{if(!Q.connected)return ae("Nicht verbunden","bad");let It=Q.info?.maxsteps||64;if(s.length>It)return ae(`Boot speichert nur ${It} Schritte`,"bad");if(Do(s,E()).filter(V=>V.m.includes("R\xFCcksprung")).length)return ae("R\xFCcksprung Schritt pr\xFCfen","bad");let oe=await Ee("MIS CLEAR");if(!(!oe||!oe.ok)){for(let V=0;V<s.length;V++)if(yt.textContent=`\xDCbertrage ${V+1}/${s.length}`,oe=await Ee(od([s[V]])[0].replace(/^/,"")),!oe||!oe.ok){yt.textContent="";return}st&&await Ee("MIS SAVE"),yt.textContent="",ae(`Mission mit ${s.length} Schritten ${st?"gespeichert":"\xFCbertragen"}`,"ok"),hs(`Mission \xFCbertragen (${s.length} Schritte)`)}},pt=async()=>{let st=await Ee("MIS GET");st&&st.ok&&Array.isArray(st.data)&&(s=Oo(st.data),e=0,H(),T(),ae(`${s.length} Schritte vom Boot gelesen`,"ok"))},bt=async()=>{if(!Q.connected)return ae("Nicht verbunden","bad");confirm(`Mission starten?

\u2022 Boot im Wasser, Ballast Beh\xE4lter dicht
\u2022 Leckage Test bestanden, Akku voll
\u2022 Tiefe auf Null kalibriert
\u2022 Mission ist \xFCbertragen

Das Boot muss daf\xFCr scharf (ARMED) sein.`)&&await Ee("MIS START","Mission l\xE4uft")},gt=(st,It,qt,oe)=>P("label",{class:"fld"},P("span",null,`${st} (${oe})`),P("input",{class:"in num",type:"number",value:It,step:"any",onchange:V=>qt(+V.target.value)})),Xt=P("div",{class:"page mis"},P("div",{class:"toolbar"},lt,gn("Neu",()=>{confirm("Mission leeren?")&&(s=[],e=0,H(),T())}),gn("Laden",async()=>{let st=await Ao(".json");if(st)try{s=JSON.parse(st).steps,e=0,H(),T()}catch{ae("Datei ung\xFCltig","bad")}}),gn("Speichern",()=>Ei("mission.json",JSON.stringify({app:"FATHOM",steps:s},null,1))),gn("Yo Yo \u2026",()=>rt.showModal()),P("span",{class:"sp"}),yt,gn("Zum Boot senden",()=>$(!1),"primary"),gn("Senden + im Boot speichern",()=>$(!0)),gn("Vom Boot lesen",pt),gn("START",bt,"go"),gn("STOP",()=>Ee("MIS STOP","Mission gestoppt"),"stop")),P("div",{class:"stats mstats"},Object.values(g).map(st=>st.el)),P("div",{class:"mgrid"},P("div",{class:"left"},m,P("div",{class:"addrow"},ut,gn("+ Schritt",G,"primary")),d,P("details",{class:"opt"},P("summary",null,"Annahmen f\xFCr die Vorschau"),gt("Startkurs",h,st=>{h=st,An.set("h0",st),T()},"deg"),gt("Leistung bei 100 % Gas",u,st=>{u=st,An.set("pmax",st),T()},"W"),gt("Akku Energie (2S 850 mAh)",f,st=>{f=st,An.set("capwh",st),T()},"Wh"),P("p",{class:"note"},"Die Vorschau rechnet kinematisch mit den Boot Parametern (Fahrt je %, Limits, Ballast F\xF6rderrate). Reale Regelung, Tr\xE4gheit und Str\xF6mung fehlen. Energie ist eine grobe Annahme, bitte mit Messung ersetzen."))),P("div",{class:"right"},P("div",{class:"vwrap"},_,v,P("div",{class:"vtools"},gn("Iso",()=>w.view("iso")),gn("Oben",()=>w.view("top")),gn("Seite",()=>w.view("side")),C,O,P("label",{class:"chk"},D," Kamera folgt"))),P("div",{class:"tlbar"},R,x,k),P("div",{class:"grid2c"},P("div",{class:"card tight"},P("h3",null,"Tiefenprofil"),M),P("div",{class:"card tight"},P("h3",null,"Draufsicht"),b)))),rt),xt=()=>{if(requestAnimationFrame(xt),!i||!t)return;let st=performance.now();e+=(st-a)/1e3*r,a=st,e>=t.stats.dur&&(e=t.stats.dur,i=!1,S()),K()};return xt(),Oe.on("par",()=>{Q.tab==="mission"&&X()}),{el:Xt,show(){w.setActive(!0),H(),T()},hide(){w.setActive(!1),i=!1,S()},update(st){st.mis.run&&(l=st.mis.i,it())},sim:w,setTime(st){e=st,K()},get plan(){return t}}}var vp=Math.PI/180,Ls=(s,t,e)=>({x:(e-s.lon)*111200*Math.cos(s.lat*vp),y:(t-s.lat)*111200}),_p=s=>{let t=Math.pow(10,Math.floor(Math.log10(s))),e=s/t;return(e<1.5?1:e<3.5?2:e<7.5?5:10)*t};function fu(s,t){let e=window.devicePixelRatio||1,i=s.clientWidth||600,r=s.clientHeight||400;(s.width!==i*e||s.height!==r*e)&&(s.width=i*e,s.height=r*e);let a=s.getContext("2d");a.setTransform(e,0,0,e,0,0),a.clearRect(0,0,i,r),a.fillStyle=Vt.bg,a.fillRect(0,0,i,r);let l=[...t.pts];if(t.home&&l.push(t.home),t.boat&&l.push(t.boat),!l.length){a.fillStyle=Vt.dim,a.font="13px Helvetica, Arial, sans-serif",a.textAlign="center",a.fillText(t.empty||"Noch keine Position",i/2,r/2);return}let h=t.home||l[0],u=l.map(D=>Ls(h,D.lat,D.lon)),f=Math.min(...u.map(D=>D.x)),m=Math.max(...u.map(D=>D.x)),d=Math.min(...u.map(D=>D.y)),_=Math.max(...u.map(D=>D.y)),g=16;if(m-f<g){let D=(f+m)/2;f=D-g/2,m=D+g/2}if(_-d<g){let D=(d+_)/2;d=D-g/2,_=D+g/2}let M=36,b=Math.min((i-2*M)/(m-f),(r-2*M)/(_-d)),x=(f+m)/2,v=(d+_)/2,R=D=>i/2+(D-x)*b,S=D=>r/2-(D-v)*b,w=_p(60/b);a.strokeStyle=Vt.grid,a.lineWidth=1,a.fillStyle=Vt.dim,a.font="10px Helvetica, Arial, sans-serif",a.textAlign="left";for(let D=Math.ceil((x-i/2/b)/w)*w;D<x+i/2/b;D+=w)a.beginPath(),a.moveTo(R(D),0),a.lineTo(R(D),r),a.stroke();for(let D=Math.ceil((v-r/2/b)/w)*w;D<v+r/2/b;D+=w)a.beginPath(),a.moveTo(0,S(D)),a.lineTo(i,S(D)),a.stroke();a.lineWidth=2,a.lineJoin="round",a.lineCap="round";for(let D=1;D<t.pts.length;D++){let O=Ls(h,t.pts[D-1].lat,t.pts[D-1].lon),E=Ls(h,t.pts[D].lat,t.pts[D].lon);a.strokeStyle=t.pts[D].c||Vt.acc,a.beginPath(),a.moveTo(R(O.x),S(O.y)),a.lineTo(R(E.x),S(E.y)),a.stroke()}if(t.home&&t.boat){let D=Ls(h,t.boat.lat,t.boat.lon);a.setLineDash([5,5]),a.strokeStyle=Vt.warn,a.lineWidth=1,a.beginPath(),a.moveTo(R(D.x),S(D.y)),a.lineTo(R(0),S(0)),a.stroke(),a.setLineDash([])}if(t.home&&(a.strokeStyle=Vt.ok,a.fillStyle=Vt.bg,a.lineWidth=2,a.beginPath(),a.arc(R(0),S(0),8,0,7),a.fill(),a.stroke(),a.fillStyle=Vt.ok,a.font="bold 10px Helvetica, Arial, sans-serif",a.textAlign="center",a.fillText("H",R(0),S(0)+3.5)),t.cursor){let D=Ls(h,t.cursor.lat,t.cursor.lon);a.fillStyle=Vt.txt,a.beginPath(),a.arc(R(D.x),S(D.y),5,0,7),a.fill()}if(t.boat){let D=Ls(h,t.boat.lat,t.boat.lon);a.save(),a.translate(R(D.x),S(D.y)),a.rotate((t.boat.h||0)*vp),a.fillStyle=Vt.txt,a.beginPath(),a.moveTo(0,-10),a.lineTo(6,8),a.lineTo(0,4),a.lineTo(-6,8),a.closePath(),a.fill(),a.restore()}let k=_p(100/b),C=k*b;a.strokeStyle=Vt.txt,a.lineWidth=2,a.beginPath(),a.moveTo(14,r-16),a.lineTo(14+C,r-16),a.moveTo(14,r-20),a.lineTo(14,r-12),a.moveTo(14+C,r-20),a.lineTo(14+C,r-12),a.stroke(),a.fillStyle=Vt.txt,a.textAlign="left",a.font="11px Helvetica, Arial, sans-serif",a.fillText(k>=1e3?k/1e3+" km":k+" m",14,r-24),a.textAlign="center",a.fillText("N",i-20,22),a.strokeStyle=Vt.dim,a.beginPath(),a.moveTo(i-20,40),a.lineTo(i-20,28),a.stroke()}function xp(){let s=[],t=null,e=null,i=P("canvas",{class:"map"}),r={fix:le("GPS",""),sat:le("Satelliten",""),hd:le("HDOP",""),spd:le("Fahrt","m/s"),dist:le("Distanz Home","m"),brg:le("Peilung","\xB0")},a={gps:on("GPS"),home:on("Home"),rth:on("RTH")},l=P("p",{class:"note"},"Die Karte arbeitet ohne Internet: Norden oben, Raster in Metern. Das GPS funktioniert nur an der Oberfl\xE4che, unter Wasser bleibt der letzte Fix stehen."),h=["aus","taucht auf","wartet auf GPS","f\xE4hrt zu Home","angekommen"],u=P("div",{class:"page"},P("div",{class:"chips"},Object.values(a).map(d=>d.el)),P("div",{class:"stats"},Object.values(r).map(d=>d.el)),P("div",{class:"toolbar"},P("button",{class:"btn",onclick:async()=>{let d=await Ee("HOME SET","Home gesetzt");d&&d.ok&&f()}},"Home hier setzen"),P("button",{class:"btn primary",onclick:()=>Ee("MODE RTH","Heimfahrt gestartet")},"Heimfahrt (RTH)"),P("button",{class:"btn",onclick:()=>Ee("MODE DEPTH","RTH beendet")},"RTH beenden"),P("span",{class:"sp"}),P("button",{class:"btn",onclick:()=>{s.length=0,e=null,m()}},"Spur l\xF6schen")),P("div",{class:"mapwrap"},i),l);async function f(){if(!Q.connected)return;let d=await Q.link.cmd("HOME");d.ok&&d.data&&d.data.set?t={lat:d.data.lat,lon:d.data.lon}:t=null,m()}function m(){fu(i,{pts:s,home:t,boat:e?{lat:e.lat,lon:e.lon,h:e.h}:null,empty:"Noch kein GPS Fix. Boot an die Oberfl\xE4che mit freier Sicht zum Himmel."})}return Oe.on("conn",()=>{Q.connected||(t=null,e=null)}),{el:u,show(){f(),setTimeout(m,30)},update(d){let _=d.gps;if(_){if(r.fix.set(_.ok?"Fix":"kein Fix",_.ok?"":"warn"),r.sat.set(String(_.sat)),r.hd.set(wt(_.hd,1)),r.spd.set(wt(_.spd,1)),r.dist.set(_.home?wt(_.dist,0):"\u2013"),r.brg.set(_.home?wt(_.brg,0):"\u2013"),a.gps.set(_.ok?`GPS ${_.sat} Sat`:"GPS kein Fix",_.ok?"ok":"warn"),a.home.set(_.home?"Home gesetzt":"Home fehlt",_.home?"ok":"warn"),a.rth.set(d.m==="RTH"?"RTH "+h[_.ph]:"RTH aus",d.m==="RTH"?"acc":""),_.ok){e={lat:_.lat,lon:_.lon,h:d.att[2]};let g=s[s.length-1];(!g||Math.hypot(...Object.values(Ls(g,_.lat,_.lon)))>.5)&&(s.push({lat:_.lat,lon:_.lon,c:d.m==="RTH"?Vt.warn:Vt.acc}),s.length>5e3&&s.shift())}else e&&(e.h=d.att[2]);_.home&&!t&&f(),m()}}}}var yp=["MANUAL","STAB","DEPTH","MISSION","FAILSAFE","RTH"],gM=[Vt.dim,"#5f7fa6",Vt.acc,"#9a86d6",Vt.bad,Vt.warn],yl=36,Ml=16,_M="#9a86d6";function vM(s){if(s.length<Ml||String.fromCharCode(...s.slice(0,4))!=="FBB1")throw new Error("Keine FATHOM Blackbox Datei");let t=new DataView(s.buffer,s.byteOffset,s.byteLength),e=t.getUint16(4,!0),i=t.getUint16(6,!0);if(e!==yl)throw new Error("Datensatzgr\xF6\xDFe "+e+" wird nicht unterst\xFCtzt");let r=Math.floor((s.length-Ml)/yl),a=[];for(let l=0;l<r;l++){let h=Ml+l*yl;a.push({t:t.getUint32(h,!0)/1e3,depth:t.getInt16(h+4,!0)/100,tgt:t.getInt16(h+6,!0)/100,roll:t.getInt16(h+8,!0)/10,pitch:t.getInt16(h+10,!0)/10,yaw:t.getUint16(h+12,!0)/10,vbat:t.getUint16(h+14,!0)/100,leak:t.getUint8(h+16)/255,mode:t.getUint8(h+17),flags:t.getUint8(h+18),fill:t.getUint8(h+19),thr:t.getInt8(h+20),pump:t.getInt8(h+21),rud:t.getInt8(h+22),stern:t.getInt8(h+23),bow:t.getInt8(h+24),lat:t.getInt32(h+25,!0)/1e7,lon:t.getInt32(h+29,!0)/1e7,sats:t.getUint8(h+33),rssi:t.getInt8(h+34)})}return{hz:i,recs:a}}var xM=s=>`t_s,tiefe_m,ziel_m,roll,nick,kurs,akku_v,leck,modus,flags,ballast,gas,pumpe,ruder,heck,bug,lat,lon,sat,rssi
`+s.recs.map(t=>[t.t,t.depth,t.tgt,t.roll,t.pitch,t.yaw,t.vbat,t.leak.toFixed(3),yp[t.mode]||t.mode,t.flags,t.fill,t.thr,t.pump,t.rud,t.stern,t.bow,t.lat,t.lon,t.sats,t.rssi].join(",")).join(`
`),xl=[{name:"Tiefe",unit:"m",inv:!0,min:0,s:[{k:"depth",n:"Tiefe",c:Vt.acc},{k:"tgt",n:"Ziel",c:Vt.warn,dash:1}]},{name:"Lage",unit:"\xB0",s:[{k:"pitch",n:"Nick",c:Vt.acc},{k:"roll",n:"Roll",c:Vt.warn}]},{name:"Kurs",unit:"\xB0",min:0,max:360,s:[{k:"yaw",n:"Kurs",c:Vt.ok}]},{name:"Antrieb und Ballast",unit:"%",s:[{k:"thr",n:"Gas",c:Vt.acc},{k:"pump",n:"Pumpe",c:Vt.warn},{k:"fill",n:"Ballast",c:_M}]},{name:"Ruder",unit:"\xB0",s:[{k:"rud",n:"Seite",c:Vt.ok},{k:"stern",n:"Heck",c:Vt.acc},{k:"bow",n:"Bug",c:Vt.warn}]},{name:"Akku",unit:"V",s:[{k:"vbat",n:"Akku",c:Vt.ok}],dec:2},{name:"Leckage",unit:"",min:0,max:1,s:[{k:"leak",n:"Leck",c:Vt.bad}],dec:2}],wr=104,Is=18,ai=46;function yM(s){let t=P("canvas",{class:"logcv"}),e=null,i=0,r=1,a=null,l=null,h=()=>window.devicePixelRatio||1,u=()=>xl.length*wr+Is+22;function f(g){let M=e.recs,b=0,x=M.length-1;for(;b<x;){let v=b+x>>1;M[v].t<g?b=v+1:x=v}return b}function m(){let g=t.clientWidth||800,M=u(),b=h();(t.height!==M*b||t.width!==g*b)&&(t.width=g*b,t.height=M*b,t.style.height=M+"px");let x=t.getContext("2d");if(x.setTransform(b,0,0,b,0,0),x.fillStyle=Vt.bg,x.fillRect(0,0,g,M),!e)return;let v=e.recs,R=O=>ai+(O-i)/(r-i)*(g-ai-10),S=Math.max(0,f(i)-1),w=Math.min(v.length-1,f(r)+1);x.font="10px Helvetica, Arial, sans-serif";for(let O=S;O<w;O++){let E=R(v[O].t),T=R(v[O+1].t);x.fillStyle=gM[v[O].mode]||Vt.dim,x.fillRect(E,0,Math.max(1,T-E+.5),Is-4)}let k=-1;x.fillStyle=Vt.txt,x.textAlign="left";for(let O=S;O<=w;O++)if(v[O].mode!==k){k=v[O].mode;let E=R(v[O].t);E>ai-2&&E<g-60&&x.fillText(yp[k]||"?",E+3,10)}xl.forEach((O,E)=>{let T=Is+E*wr,B=T+wr-14,X=O.min,W=O.max;if(X===void 0||W===void 0){let it=1e9,H=-1e9;for(let G=S;G<=w;G++)O.s.forEach(lt=>{let rt=v[G][lt.k];lt.k==="tgt"&&rt===0&&!(v[G].mode===2||v[G].mode===3)||(it=Math.min(it,rt),H=Math.max(H,rt))});it>H&&(it=0,H=1);let ut=(H-it)*.12||.5;X===void 0&&(X=it-ut),W===void 0&&(W=H+ut)}O.k0===void 0&&O.min===0&&X<0&&(X=0);let K=it=>O.inv?T+6+(it-X)/(W-X||1)*(B-T-6):B-(it-X)/(W-X||1)*(B-T-6);x.strokeStyle=Vt.grid,x.lineWidth=1,x.fillStyle=Vt.dim,x.textAlign="right";for(let it=0;it<=2;it++){let H=X+(W-X)*it/2,ut=K(H);x.beginPath(),x.moveTo(ai,ut),x.lineTo(g-10,ut),x.stroke(),x.fillText(H.toFixed(O.dec??(Math.abs(W-X)<5?1:0)),ai-5,ut+3)}if(x.textAlign="left",x.fillStyle=Vt.txt,x.font="600 11px Helvetica, Arial, sans-serif",x.fillText(O.name+(O.unit?" ("+O.unit+")":""),ai+6,T+12),x.font="10px Helvetica, Arial, sans-serif",x.save(),x.beginPath(),x.rect(ai,T,g-ai-10,wr-12),x.clip(),O.s.forEach(it=>{x.strokeStyle=it.c,x.lineWidth=it.dash?1.2:1.6,x.setLineDash(it.dash?[4,3]:[]),x.beginPath();let H=!1,ut=-9;for(let G=S;G<=w;G++){let lt=R(v[G].t);if(lt-ut<.6&&G<w)continue;ut=lt;let rt=v[G][it.k];if(it.k==="tgt"&&!(v[G].mode===2||v[G].mode===3)){H=!1;continue}let ot=K(rt);H?x.lineTo(lt,ot):(x.moveTo(lt,ot),H=!0)}x.stroke(),x.setLineDash([])}),x.restore(),a!==null){let it=v[f(a)],H=g-14;x.textAlign="right";for(let ut=O.s.length-1;ut>=0;ut--){let G=O.s[ut],lt=G.n+" "+it[G.k].toFixed(O.dec??1);x.fillStyle=G.c,x.fillText(lt,H,T+12),H-=x.measureText(lt).width+12}}});let C=r-i,D=[1,2,5,10,15,30,60,120,300,600,1800].find(O=>C/O<12)||3600;x.fillStyle=Vt.dim,x.textAlign="center",x.strokeStyle=Vt.grid;for(let O=Math.ceil(i/D)*D;O<r;O+=D){let E=R(O);x.beginPath(),x.moveTo(E,Is),x.lineTo(E,Is+xl.length*wr-14),x.stroke(),x.fillText(O>=60?`${Math.floor(O/60)}:${String(Math.round(O%60)).padStart(2,"0")}`:O+" s",E,M-4)}if(a!==null){let O=R(a);x.strokeStyle=Vt.txt,x.lineWidth=1,x.beginPath(),x.moveTo(O,Is-2),x.lineTo(O,Is+xl.length*wr-14),x.stroke()}}let d=g=>{let M=t.getBoundingClientRect();return i+(g.clientX-M.left-ai)/(M.width-ai-10)*(r-i)};t.addEventListener("mousemove",g=>{if(!e)return;let M=Sn(d(g),e.recs[0].t,e.recs[e.recs.length-1].t);if(l){let b=(l.x-g.clientX)/(t.clientWidth-ai)*(l.v1-l.v0);i=l.v0+b,r=l.v1+b,_()}a=M,s(e.recs[f(M)]),m()}),t.addEventListener("mouseleave",()=>{a=null,s(null),m()}),t.addEventListener("mousedown",g=>{l={x:g.clientX,v0:i,v1:r}}),window.addEventListener("mouseup",()=>{l=null}),t.addEventListener("dblclick",()=>{e&&(i=e.recs[0].t,r=e.recs[e.recs.length-1].t,m())}),t.addEventListener("wheel",g=>{if(!e)return;g.preventDefault();let M=d(g),b=g.deltaY>0?1.25:.8;i=M-(M-i)*b,r=M+(r-M)*b,_(),m()},{passive:!1});function _(){let g=e.recs[0].t,M=e.recs[e.recs.length-1].t;r-i>M-g&&(i=g,r=M),i<g&&(r+=g-i,i=g),r>M&&(i-=r-M,r=M)}return window.addEventListener("resize",()=>m()),{el:t,set(g){e=g,i=g.recs[0].t,r=g.recs[g.recs.length-1].t,r<=i&&(r=i+1),a=null,m()},draw:m}}function Mp(){let s=null,t="",e=P("div",{class:"bblist"}),i=P("div",{class:"bar-t",style:{display:"none"}},P("div",{class:"bar-fill"})),r=P("div",{class:"stats"}),a=P("canvas",{class:"map small"}),l=P("p",{class:"note"}),h=yM(S=>{u=S,R()}),u=null,f=!1,m=P("p",{class:"note"},"Noch keine Aufzeichnung geladen. Die Blackbox schreibt im ARM Zustand. Zum Auslesen DISARM, dann hier laden (USB oder WLAN)."),d=P("div",{style:{display:"none"}},r,P("section",{class:"card tight"},h.el,P("p",{class:"note"},"Mausrad zoomt, ziehen verschiebt, Doppelklick zeigt alles.")),P("section",{class:"card"},P("h3",null,"Spur (GPS Fixes an der Oberfl\xE4che)"),P("div",{class:"mapwrap"},a),l)),_=P("div",{class:"toolbar"},P("button",{class:"btn",onclick:()=>b()},"Liste aktualisieren"),P("button",{class:"btn",onclick:async()=>{let S=await M();S&&v(S.u8,S.name)}},"Datei \xF6ffnen"),P("span",{class:"sp"}),P("button",{class:"btn",onclick:()=>Ei(t.replace(/\.bin$/,"")+".csv",xM(s),"text/csv"),id:"bbcsv",disabled:!0},"CSV exportieren"),P("button",{class:"btn warnb",onclick:async()=>{confirm("Alle Blackbox Dateien im Boot l\xF6schen?")&&((await Q.link.cmd("BB CLEAR",8e3)).ok&&ae("Gel\xF6scht","ok"),b())}},"Boot Speicher leeren")),g=P("div",{class:"page"},_,P("section",{class:"card"},P("h3",null,"Aufzeichnungen im Boot"),e,i),m,d);async function M(){return new Promise(S=>{let w=P("input",{type:"file",accept:".bin"});w.onchange=async()=>{let k=w.files[0];if(!k)return S(null);S({name:k.name,u8:new Uint8Array(await k.arrayBuffer())})},w.click()})}async function b(){if(e.innerHTML="",!Q.connected){e.append(P("p",{class:"note"},"Nicht verbunden."));return}let[S,w]=[await Q.link.cmd("BB INFO"),await Q.link.cmd("BB LIST",4e3)];if(!w.ok||!Array.isArray(w.data)){e.append(P("p",{class:"note"},w.text.includes("DISARM")?"Erst DISARM, dann l\xE4sst sich die Blackbox auslesen.":"Keine Antwort: "+w.text));return}S.ok&&S.data&&e.append(P("p",{class:"note"},`Frei: ${(S.data.free/1024).toFixed(0)} von ${(S.data.total/1024).toFixed(0)} kB`)),w.data.length||e.append(P("p",{class:"note"},"Keine Aufzeichnungen.")),w.data.forEach(k=>{let C=parseInt((/bb_(\d+)/.exec(k.f)||[])[1]||0,10),D=Math.max(0,Math.floor((k.n-Ml)/yl));e.append(P("div",{class:"bbrow"},P("b",null,k.f),P("span",{class:"dim"},`${(k.n/1024).toFixed(1)} kB, ${D} Datens\xE4tze`),P("span",{class:"sp"}),P("button",{class:"btn primary",disabled:f,onclick:()=>x(C,k.f,!1)},"Laden und anzeigen"),P("button",{class:"btn",disabled:f,onclick:()=>x(C,k.f,!0)},"Als .bin sichern")))})}async function x(S,w,k){if(f)return;f=!0,i.style.display="";let C=i.firstChild;C.style.width="0",C.style.left="0";let D=Number((await Q.link.cmd("BB LIST",4e3)).data?.find(E=>E.f===w)?.n)||1,O=await Q.link.dump(S,E=>{C.style.width=Math.min(100,E/D*100)+"%"});if(f=!1,i.style.display="none",b(),!O.ok){ae(O.text,"bad",6e3);return}k&&(Ei(w,O.bytes,"application/octet-stream"),ae("Gespeichert: "+w,"ok")),v(O.bytes,w)}function v(S,w){try{s=vM(S)}catch(W){ae(W.message,"bad",6e3);return}if(!s.recs.length){ae("Die Datei enth\xE4lt keine Datens\xE4tze","warn");return}t=w,m.style.display="none",d.style.display="",g.querySelector("#bbcsv").disabled=!1;let k=s.recs,C=k[k.length-1].t-k[0].t,D=0,O=99,E=0,T=0,B=0,X=null;k.forEach((W,K)=>{D=Math.max(D,W.depth),W.vbat>0&&(O=Math.min(O,W.vbat)),E=Math.max(E,Math.abs(W.pitch)),K&&W.mode===4&&k[K-1].mode!==4&&B++,W.flags&4&&W.sats&&(X&&(T+=Math.hypot((W.lat-X.lat)*111200,(W.lon-X.lon)*75900)),X=W)}),r.innerHTML="",[["Datei",w],["Dauer",cs(C)],["Rate",s.hz+" Hz"],["Max Tiefe",wt(D,2)+" m"],["Min Akku",wt(O,2)+" V"],["Max Nick",wt(E,0)+" \xB0"],["GPS Strecke",wt(T,0)+" m"],["Failsafe",String(B)]].forEach(([W,K])=>r.append(P("div",{class:"stat"},P("span",null,W),P("div",null,P("b",{style:{fontSize:W==="Datei"?"14px":""}},K))))),h.set(s),setTimeout(R,30)}function R(){if(!s)return;let S=s.recs.filter(C=>C.flags&4&&C.sats&&C.lat);l.textContent=S.length?`${S.length} Fixes. Der Cursor im Diagramm wandert auf die n\xE4chste bekannte Position.`:"Kein GPS Fix in dieser Aufzeichnung.";let w=S.map(C=>({lat:C.lat,lon:C.lon,c:C.mode===5?Vt.warn:Vt.acc})),k=null;if(u&&S.length){let C=S[0];S.forEach(D=>{Math.abs(D.t-u.t)<Math.abs(C.t-u.t)&&(C=D)}),k={lat:C.lat,lon:C.lon}}fu(a,{pts:w,home:w.length?{lat:w[0].lat,lon:w[0].lon}:null,cursor:k,empty:"Kein GPS Fix in dieser Aufzeichnung"})}return{el:g,show(){b(),s&&(h.draw(),R())},update(){}}}var li=Om(Sp(),1);var Ep=Math.PI/180,Ap=(s,t)=>({x:(t.lon-s.lon)*111200*Math.cos(s.lat*Ep),y:(t.lat-s.lat)*111200}),mu=(s,t)=>{let e=Ap(s,t);return{dist:Math.hypot(e.x,e.y),brg:(Math.atan2(e.x,e.y)/Ep+360)%360}},co=(s,t,e="")=>P("button",{class:"btn "+e,onclick:t},s),gu=(s,t)=>`https://wmts.geo.admin.ch/1.0.0/${s}/default/current/3857/{z}/{x}/{y}.${t}`,wp='\xA9 <a href="https://www.swisstopo.admin.ch" target="_blank">swisstopo</a>',MM='Seetiefen: swissBATHY3D \xA9 <a href="https://www.swisstopo.admin.ch/de/hoehenmodell-swissbathy3d" target="_blank">swisstopo</a> (Quelle: Bundesamt f\xFCr Landestopografie)',Tp={"Landeskarte (swisstopo)":()=>li.default.tileLayer(gu("ch.swisstopo.pixelkarte-farbe","jpeg"),{maxZoom:19,maxNativeZoom:18,attribution:wp}),"Luftbild (swisstopo)":()=>li.default.tileLayer(gu("ch.swisstopo.swissimage","jpeg"),{maxZoom:19,maxNativeZoom:18,attribution:wp}),OpenStreetMap:()=>li.default.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,referrerPolicy:"strict-origin",attribution:'\xA9 <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> Mitwirkende'})},bM=()=>li.default.tileLayer(gu("ch.swisstopo.swissbathy3d-reliefschattierung","png"),{maxZoom:19,maxNativeZoom:17,opacity:.7,attribution:MM}),Pp=!1,SM=()=>{if(Pp)return!0;try{return sessionStorage.getItem("fathom.map")==="1"}catch{return!1}},pu=(s,t)=>li.default.divIcon({className:"",html:`<div class="wpi ${t||""}">${s}</div>`,iconSize:[26,26],iconAnchor:[13,13]});function wM(s,t,e){let i=e.ms,r=[{t:"WAIT",v:[e.wait,0,0,0]}],a=s,l=0,h=[];return t.forEach((u,f)=>{let m=mu(a,u),d=Sn(u.spd,1,100);r.push({t:"TURN",v:[Math.round(m.brg),0,15,12]});let _=0;Math.abs(u.depth-l)>.05&&(r.push({t:"DIVE",v:[u.depth,e.rate,e.pitch,d]}),_=Math.abs(u.depth-l)/e.rate);let g=d*i,M=Math.max(1,Math.round(m.dist/g-_));M>7200&&h.push(`Weg ${f+1} dauert \xFCber 2 h, Schritt wird auf 7200 s gek\xFCrzt`),r.push({t:"CRUISE",v:[d,Math.round(m.brg),Math.min(M,7200),0]}),l=u.depth,a=u}),e.beacon&&r.push({t:"BEACON",v:[2,0,0,0]}),r.push({t:"SURFACE",v:[0,0,0,0]}),{steps:r,notes:h}}function Cp(){let s=An.get("mapplan",{start:null,wps:[],base:"Landeskarte (swisstopo)",shade:!0,op:.7,dd:5,ds:25,beacon:!0,rth:!0}),t=null,e=null,i=null,r=[],a=null,l=null,h=null,u="wp",f=0,m=P("div",{class:"leaflet-host"}),d=P("div",{class:"wptable"}),_=P("div",{class:"warns"}),g={net:on("Karte"),gps:on("Boot GPS")},M={n:le("Wegpunkte"),len:le("Strecke","m"),t:le("Fahrzeit"),z:le("Max Tiefe","m"),e:le("Ende zu Start","m")},b=()=>An.set("mapplan",s),x=()=>Q.get("spd.ms_per_pct",.014),v=P("select",{class:"in sm",onchange:()=>{s.base=v.value,B(),b()}},Object.keys(Tp).map(rt=>P("option",{value:rt,selected:rt===s.base},rt))),R=P("input",{type:"checkbox",checked:s.shade,onchange:()=>{s.shade=R.checked,X(),b()}}),S=P("input",{type:"range",min:.1,max:1,step:.05,value:s.op,class:"sl",oninput:()=>{s.op=+S.value,i&&i.setOpacity(s.op),b()}}),w=P("input",{class:"in num",type:"number",min:0,max:90,step:.5,value:s.dd,onchange:()=>{s.dd=Sn(+w.value,0,90),b()}}),k=P("input",{class:"in num",type:"number",min:1,max:100,step:1,value:s.ds,onchange:()=>{s.ds=Sn(+k.value,1,100),b()}}),C=P("input",{type:"checkbox",checked:s.beacon,onchange:()=>{s.beacon=C.checked,b()}}),D=P("input",{type:"checkbox",checked:s.rth,onchange:()=>{s.rth=D.checked,b()}}),O=(rt,ot)=>{let Mt=co(ot,()=>{u=rt,T()});return Mt.dataset.k=rt,Mt},E=[O("start","Startpunkt setzen"),O("wp","Wegpunkte setzen")],T=()=>E.forEach(rt=>rt.classList.toggle("primary",rt.dataset.k===u));function B(){t&&(e&&t.removeLayer(e),e=Tp[s.base](),e.on("tileerror",W),e.addTo(t),e.bringToBack())}function X(){t&&(i&&(t.removeLayer(i),i=null),s.shade&&(i=bM(),i.setOpacity(s.op),i.on("tileerror",W),i.addTo(t)))}function W(){++f===8&&(g.net.set("keine Kacheln: Internet?","warn"),ae("Kartenkacheln laden nicht. Der Planer braucht Internet, nicht das Boot WLAN.","warn",6e3))}function K(){if(!t)return;r.forEach(ot=>t.removeLayer(ot)),r=[],a&&(t.removeLayer(a),a=null);let rt=[];if(s.start){let ot=li.default.marker([s.start.lat,s.start.lon],{icon:pu("S","st"),draggable:!0}).addTo(t);ot.on("dragend",()=>{let Mt=ot.getLatLng();s.start={lat:Mt.lat,lon:Mt.lng},b(),K()}),r.push(ot),rt.push([s.start.lat,s.start.lon])}s.wps.forEach((ot,Mt)=>{let yt=li.default.marker([ot.lat,ot.lon],{icon:pu(Mt+1),draggable:!0}).addTo(t);yt.on("dragend",()=>{let $=yt.getLatLng();ot.lat=$.lat,ot.lon=$.lng,b(),K()}),r.push(yt),rt.push([ot.lat,ot.lon])}),rt.length>1&&(a=li.default.polyline(rt,{color:"#ffb02e",weight:3,dashArray:"8 6"}).addTo(t)),H(),it()}function it(){let rt=s.start,ot=0,Mt=0,yt=0,$=rt,pt=[];s.wps.forEach((gt,Xt)=>{if(!$){$=gt;return}let xt=mu($,gt);ot+=xt.dist,Mt+=xt.dist/(Math.max(gt.spd,1)*x()),yt=Math.max(yt,gt.depth),$=gt}),M.n.set(String(s.wps.length)),M.len.set(wt(ot,0)),M.t.set(ot?cs(Mt):"\u2013"),M.z.set(wt(yt,1),yt>Q.get("lim.depth",3)?"bad":""),M.e.set(rt&&s.wps.length?wt(Math.hypot(...Object.values(Ap(rt,s.wps[s.wps.length-1]))),0):"\u2013"),_.innerHTML="";let bt=gt=>_.append(P("div",{class:"w"},gt));yt>Q.get("lim.depth",3)&&bt(`Tiefe ${wt(yt,1)} m liegt \xFCber dem Parameter lim.depth (${wt(Q.get("lim.depth",3),1)} m): das Boot l\xF6st dort Failsafe aus. Erst lim.depth erh\xF6hen.`),s.wps.some(gt=>gt.spd>Q.get("lim.throttle",35))&&bt(`Fahrt \xFCber lim.throttle (${Q.get("lim.throttle",35)} %): wird begrenzt, Fahrzeit stimmt dann nicht.`),s.wps.length*3+3>64&&bt("Zu viele Wegpunkte: Boot speichert h\xF6chstens 64 Schritte (je Wegpunkt bis 3 Schritte)."),s.wps.length&&!s.start&&bt('Startpunkt fehlt: erst "Startpunkt setzen", dann Wegpunkte.'),Q.get("spd.ms_per_pct",.014)===.014&&!Q.connected&&bt("Fahrtfaktor spd.ms_per_pct steht auf Standard (0.014 m/s je %). Echten Wert mit einer gemessenen Strecke bestimmen, sonst stimmen die Zeiten nicht.")}function H(){if(d.innerHTML="",!s.wps.length){d.append(P("p",{class:"note"},"Noch keine Wegpunkte. Karte antippen, um Wegpunkte zu setzen. Marker lassen sich verschieben."));return}let rt=P("tr",null,["#","Tiefe (m)","Fahrt (%)","Weg (m)","Kurs (\xB0)",""].map(yt=>P("th",null,yt))),ot=P("tbody"),Mt=s.start;s.wps.forEach((yt,$)=>{let pt=Mt?mu(Mt,yt):{dist:0,brg:0};Mt=yt;let bt=P("input",{class:"in num",type:"number",min:0,max:90,step:.5,value:yt.depth,onchange:()=>{yt.depth=Sn(+bt.value,0,90),b(),it()}}),gt=P("input",{class:"in num",type:"number",min:1,max:100,step:1,value:yt.spd,onchange:()=>{yt.spd=Sn(+gt.value,1,100),b(),it()}});ot.append(P("tr",null,P("td",null,P("b",null,$+1)),P("td",null,bt),P("td",null,gt),P("td",null,wt(pt.dist,0)),P("td",null,wt(pt.brg,0)),P("td",null,P("button",{class:"ib del",title:"l\xF6schen",onclick:()=>{s.wps.splice($,1),b(),K()}},"\u2715"))))}),d.append(P("table",{class:"ptable"},P("thead",null,rt),ot))}async function ut(){if(!s.start||!s.wps.length)return ae("Startpunkt und mindestens einen Wegpunkt setzen","warn");let rt=wM(s.start,s.wps,{ms:x(),wait:10,rate:.15,pitch:15,beacon:s.beacon});if(rt.steps.length>64)return ae(`${rt.steps.length} Schritte, maximal 64. Weniger Wegpunkte setzen.`,"bad",5e3);An.set("mission",rt.steps),Oe.emit("mission:set",rt.steps),rt.notes.forEach(ot=>ae(ot,"warn",5e3)),s.rth?Q.connected?await Ee("SET mis.end_rth 1","RTH nach Mission aktiviert"):ae("Nach Verbinden mis.end_rth auf 1 setzen, sonst bleibt das Boot nach Missionsende an der Oberfl\xE4che stehen.","warn",7e3):Q.connected&&await Ee("SET mis.end_rth 0"),ae(`Mission mit ${rt.steps.length} Schritten \xFCbernommen`,"ok"),Oe.emit("goto","mission")}function G(){Ei("fathom_plan.json",JSON.stringify({start:s.start,wps:s.wps},null,1))}return{el:P("div",{class:"page"},P("div",{class:"chips"},Object.values(g).map(rt=>rt.el)),P("div",{class:"stats"},Object.values(M).map(rt=>rt.el)),P("div",{class:"toolbar"},E,P("span",{class:"sp"}),v,P("label",{class:"chk"},R," Seerelief"),S),P("div",{class:"mapwrap"},m),P("div",{class:"toolbar"},P("label",{class:"fld inl"},P("span",null,"Tiefe neuer Punkt (m)"),w),P("label",{class:"fld inl"},P("span",null,"Fahrt neuer Punkt (%)"),k),P("label",{class:"chk"},C," Beacon am Ende"),P("label",{class:"chk"},D," Heimfahrt nach Ende (RTH)"),P("span",{class:"sp"}),co("Letzten l\xF6schen",()=>{s.wps.pop(),b(),K()}),co("Alles l\xF6schen",()=>{confirm("Plan l\xF6schen?")&&(s.wps=[],s.start=null,b(),K())}),co("Plan sichern",G),co("Zur Mission machen",ut,"primary")),_,d,P("p",{class:"note"},"Kurs und Zeit werden aus Start, Wegpunkten und Fahrtfaktor gerechnet (Koppelnavigation). Unter Wasser gibt es kein GPS, Str\xF6mung und Drift werden nicht ausgeglichen. An der Oberfl\xE4che korrigiert das Boot nur beim Heimfahren (RTH). Die Karte l\xE4dt nur mit Internet, plane also zuhause und verbinde danach mit dem Boot WLAN. Kartenquellen: swisstopo (Landeskarte, Luftbild, swissBATHY3D Seerelief) und OpenStreetMap.")),show(){if(!t&&!SM()){m.firstChild||m.append(P("div",{class:"mapgate"},P("h4",null,"Karte laden"),P("p",null,"Die Karte l\xE4dt Kartenkacheln direkt von swisstopo (Bundesamt f\xFCr Landestopografie) und auf Wunsch von OpenStreetMap. Dabei erhalten diese Dienste Ihre IP-Adresse. Ohne Klick wird nichts geladen."),P("button",{class:"btn primary",onclick:()=>{try{sessionStorage.setItem("fathom.map","1")}catch{Pp=!0}m.innerHTML="",this.show()}},"Karte laden")));return}t||(t=li.default.map(m,{center:s.start?[s.start.lat,s.start.lon]:[47,8.38],zoom:s.start?15:11,attributionControl:!0}),t.attributionControl.setPrefix(!1),t.on("click",rt=>{let ot={lat:rt.latlng.lat,lon:rt.latlng.lng};u==="start"||!s.start?(s.start=ot,u==="start"&&(u="wp",T())):s.wps.push({...ot,depth:s.dd,spd:s.ds}),b(),K()}),B(),X(),T(),K(),g.net.set("Karte: swisstopo","ok")),setTimeout(()=>t.invalidateSize(),60)},update(rt){let ot=rt.gps;!ot||!t||(g.gps.set(ot.ok?`Boot GPS ${ot.sat} Sat`:"Boot GPS kein Fix",ot.ok?"ok":"warn"),ot.ok&&(l?l.setLatLng([ot.lat,ot.lon]):l=li.default.marker([ot.lat,ot.lon],{icon:pu("B","boat"),interactive:!1}).addTo(t)))}}}var TM='<svg viewBox="0 0 64 64" width="28" height="28" aria-hidden="true"><rect width="64" height="64" rx="6" fill="#0b0e12" stroke="#2a3a47"/><path d="M18 14v22a14 14 0 0 0 28 0V14" fill="none" stroke="#ff7a59" stroke-width="7" stroke-linecap="square"/></svg>',Dp=/(^|\.)underpressure\.ch$/.test(location.hostname),Rp=Dp?"/fathom.html":location.protocol==="file:"||location.hostname==="192.168.4.1"?"":"https://underpressure.ch/fathom.html";function EM(){let s=P("dialog",{class:"dlg"},P("h2",null,"Per WLAN verbinden"),P("p",{class:"note"},"Diese Seite l\xE4uft \xFCber https. Der Browser erlaubt von hier keine unverschl\xFCsselte Verbindung ins Boot WLAN. Das Boot liefert den Konfigurator deshalb selbst aus:"),P("ol",null,P("li",null,"Boot einschalten, es muss entsch\xE4rft sein (DISARMED). Scharf geschaltet ist das WLAN aus."),P("li",null,"Mit dem WLAN ",P("code",null,"FATHOM-XXXX")," verbinden (Handy, Tablet oder PC)."),P("li",null,"Im Browser ",P("code",null,"http://192.168.4.1")," \xF6ffnen."),P("li",null,"Dort \xABPer WLAN verbinden\xBB dr\xFCcken.")),P("p",{class:"note"},"Per WLAN gehen Parameter, Missionen, Tests und Kalibration. Scharfschalten, Missionsstart und Bootloader gehen nur per Crossfire oder USB."),P("div",{class:"row"},P("button",{class:"btn primary",onclick:()=>s.close()},"Verstanden")));s.addEventListener("close",()=>s.remove()),document.body.append(s),s.showModal()}var AM=[["setup","Verbinden","M12 2v10m0 0l-4-4m4 4l4-4M5 14v5h14v-5"],["dash","\xDCbersicht","M3 13a9 9 0 1118 0M12 13l4-5M5 20h14"],["sensors","Sensoren","M3 17l5-6 4 3 5-8 4 5M3 21h18"],["calib","Kalibration","M12 3v4m0 10v4M3 12h4m10 0h4M12 8a4 4 0 100 8 4 4 0 000-8z"],["tests","Tests","M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3"],["params","Parameter","M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0M14 4v4M8 10v4M16 16v4"],["nav","Navigation","M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"],["map","Karte","M9 4L3 6v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14"],["mission","Mission","M4 20l4-12 4 6 4-10 4 16M3 4h4"],["bb","Blackbox","M5 4h14v16H5zM9 4v6h6V4M8 15h8M8 18h5"],["term","Terminal","M4 5h16v14H4zM7 10l3 2-3 2M12 15h5"]],Ke={setup:null,dash:null,sensors:null,calib:null,tests:null,params:null,map:null,mission:null,nav:null,bb:null,term:null},Tr={async connect(){if(Q.connected)return;if(!Fr.supported())return ae("Kein Web Serial in diesem Browser. Chrome oder Edge am PC nutzen.","bad",6e3);let s=new Fr;try{await s.connect()}catch(t){t.name!=="NotFoundError"&&ae("Verbindung fehlgeschlagen: "+t.message,"bad",6e3);return}_u(s,!1)},async wifi(s,t=1){if(Q.connected)return;if(location.protocol==="https:")return EM();let e=new Uo(s||(location.protocol==="file:"||["localhost","127.0.0.1"].includes(location.hostname)?Q.wifiHost||"192.168.4.1":location.hostname));try{await e.connect()}catch(i){if(t>1){setTimeout(()=>Tr.wifi(s,t-1),2e3);return}ae("WLAN Verbindung fehlgeschlagen: "+i.message,"bad",7e3);return}Q.wifiHost=e.host,e.on("close",()=>{!e.noretry&&!Q.demo&&(ae("Funk getrennt, versuche neu (nur im DISARMED aktiv)","warn"),setTimeout(()=>Tr.wifi(e.host,15),2500))}),_u(e,!1)},async demo(){Q.connected&&await Q.link.disconnect();let s=new ko;await s.connect(),_u(s,!0)},async disconnect(){Q.link&&await Q.link.disconnect()}};async function _u(s,t){if(Q.link=s,Q.demo=t,Q.connected=!0,Q.wifi=!!s.wifi,s.on("rx",a=>Oe.emit("rx",a)),s.on("tx",a=>Oe.emit("tx",a)),s.on("ev",a=>hs(a,/ERR|FAILSAFE|LECK/i.test(a)?"bad":"info")),s.on("tel",a=>{Q.tel=a,Q.lastTel=performance.now()}),s.on("close",()=>{Q.link===s&&(Q.connected=!1,Q.tel=null,Oe.emit("conn"),vu(),hs("Verbindung getrennt","warn"),ae("Verbindung getrennt","warn"))}),s.on("error",a=>hs("Fehler: "+(a.message||a),"bad")),Oe.emit("conn"),vu(),!(await s.cmd("PING",1500)).ok){ae("Keine Antwort vom Boot. Ist FATHOM geflasht?","bad",6e3),await s.disconnect();return}let i=await s.cmd("INFO");i.ok&&(Q.info=i.data),await zr();let r=await s.cmd("MIS GET");Q.boatMis=r.data,await s.cmd(s.wifi?"STREAM 10":"STREAM 20"),hs(`Verbunden mit ${Q.info?.fw} ${Q.info?.ver}`,"ok"),ae(t?"Demo Boot verbunden":"Boot verbunden","ok"),ho(Q.tab==="setup"?"dash":Q.tab)}var Lp,Sl,Ip;function vu(){let s=Q.tel,t=pi("#conn");t&&(t.className="conn "+(Q.connected?"on":""),t.textContent=Q.connected?Q.demo?"DEMO":Q.wifi?"WLAN":"USB":"GETRENNT");let e=pi("#armbtn");e&&(e.disabled=!Q.connected||Q.wifi,e.title=Q.wifi?"Scharfschalten nur per Crossfire oder USB":"",e.textContent=s&&s.arm?"DISARM":"ARM",e.className="btn "+(s&&s.arm?"stop":"warnb"));let i=pi("#modesel");i&&(i.disabled=!Q.connected,s&&document.activeElement!==i&&(i.value=s.m));let r=pi("#disc");r&&(r.style.display=Q.connected?"":"none")}function ho(s){let t=Ke[Q.tab];t&&t.hide&&t.hide(),Q.tab=s,Sl.innerHTML="";let e=Ke[s];Sl.append(e.el),e.show&&e.show(),document.querySelectorAll(".nav button").forEach(i=>i.classList.toggle("on",i.dataset.k===s)),Oe.emit("tab",s),location.hash=s}Oe.on("goto",ho);function PM(){let s=pi("#app");Lp=P("header",{class:"top"},P("div",{class:"brand",html:TM}),P("div",{class:"bt"},P("b",null,"FATHOM"),P("span",null,"Under Pressure \xB7 U-Boote")),Rp?P("a",{class:"btn back",href:Rp,"aria-label":"Zur\xFCck zur Website",title:"Zur\xFCck zur Website underpressure.ch",html:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg><span>Website</span>'}):null,P("span",{class:"sp"}),P("span",{id:"conn",class:"conn"},"GETRENNT"),P("select",{id:"modesel",class:"in sm",disabled:!0,onchange:a=>Ee("MODE "+a.target.value)},["MANUAL","STAB","DEPTH","MISSION","RTH"].map(a=>P("option",{value:a},a)),P("option",{value:"FAILSAFE",disabled:!0},"FAILSAFE")),P("button",{id:"armbtn",class:"btn warnb",disabled:!0,onclick:()=>Ee(Q.tel&&Q.tel.arm?"DISARM":"ARM")},"ARM"),P("button",{id:"disc",class:"btn",style:{display:"none"},onclick:()=>Tr.disconnect()},"Trennen"));let t=P("nav",{class:"nav"},AM.map(([a,l,h])=>P("button",{"data-k":a,onclick:()=>ho(a),html:`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${h}"/></svg><span>${l}</span>`})),P("span",{class:"sp"}),P("div",{class:"navfoot"},Dp?P("a",{href:"/fathom.html",target:"_top"},"Under Pressure"):"Under Pressure"));Sl=P("main",{class:"content"}),Ip=P("footer",{class:"status"},P("span",{id:"sb1"},"bereit"),P("span",{class:"sp"}),P("span",{id:"sb2"},"FATHOM Konfigurator 0.5")),s.append(Lp,P("div",{class:"body"},t,Sl),Ip),Ke.setup=pd(Tr),Ke.dash=md(),Ke.sensors=gd(),Ke.calib=vd(),Ke.tests=xd(),Ke.params=yd(),Ke.map=Cp(),Ke.mission=gp(),Ke.nav=xp(),Ke.bb=Mp(),Ke.term=Md(),mi.forEach(a=>{Q.par[a.k]=a.d}),Oe.on("ev",()=>{let a=Q.events[Q.events.length-1];a&&(pi("#sb1").textContent=a.m)});let e=0,i=a=>{if(requestAnimationFrame(i),Q.connected&&Q.tel&&Q.lastTel!==e){Ke.nav&&Q.tab!=="nav"&&Ke.nav.update(Q.tel),e=Q.lastTel;let l=Ke[Q.tab];l&&l.update&&l.update(Q.tel),vu(),Q.tab!=="tests"&&Ke.tests.update}Q.connected&&performance.now()-Q.lastTel>2e3&&Q.lastTel?pi("#sb2").textContent="keine Telemetrie":Q.connected&&(pi("#sb2").textContent=Q.demo?"Demo":Q.wifi?"WLAN 10 Hz":"USB 20 Hz")};requestAnimationFrame(i);let r=location.hash.slice(1);ho(Ke[r]?r:"setup"),new URLSearchParams(location.search).has("demo")&&Tr.demo(),window.addEventListener("beforeunload",()=>{if(Q.connected)try{Q.link._write(`TEST OFF
`)}catch{}}),document.addEventListener("visibilitychange",()=>{document.hidden&&Q.connected&&Q.tel&&Q.tel.tst&&Ke.tests.stopAll()}),window.__fathom={S:Q,pages:Ke,api:Tr,setTab:ho}}PM();})();
