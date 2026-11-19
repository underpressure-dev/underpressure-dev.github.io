(()=>{var km=Object.create;var dd=Object.defineProperty;var Bm=Object.getOwnPropertyDescriptor;var Fm=Object.getOwnPropertyNames;var zm=Object.getPrototypeOf,Hm=Object.prototype.hasOwnProperty;var Vm=(s,t)=>()=>(t||s((t={exports:{}}).exports,t),t.exports);var Gm=(s,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Fm(t))!Hm.call(s,r)&&r!==e&&dd(s,r,{get:()=>t[r],enumerable:!(i=Bm(t,r))||i.enumerable});return s};var Wm=(s,t,e)=>(e=s!=null?km(zm(s)):{},Gm(t||!s||!s.__esModule?dd(e,"default",{value:s,enumerable:!0}):e,s));var Rp=Vm((El,Cp)=>{(function(s,t){typeof El=="object"&&typeof Cp<"u"?t(El):typeof define=="function"&&define.amd?define(["exports"],t):(s=typeof globalThis<"u"?globalThis:s||self,t(s.leaflet={}))})(El,(function(s){"use strict";var t="1.9.4";function e(n){var o,c,p,y;for(c=1,p=arguments.length;c<p;c++){y=arguments[c];for(o in y)n[o]=y[o]}return n}var i=Object.create||(function(){function n(){}return function(o){return n.prototype=o,new n}})();function r(n,o){var c=Array.prototype.slice;if(n.bind)return n.bind.apply(n,c.call(arguments,1));var p=c.call(arguments,2);return function(){return n.apply(o,p.length?p.concat(c.call(arguments)):arguments)}}var a=0;function l(n){return"_leaflet_id"in n||(n._leaflet_id=++a),n._leaflet_id}function h(n,o,c){var p,y,P,F;return F=function(){p=!1,y&&(P.apply(c,y),y=!1)},P=function(){p?y=arguments:(n.apply(c,arguments),setTimeout(F,o),p=!0)},P}function u(n,o,c){var p=o[1],y=o[0],P=p-y;return n===p&&c?n:((n-y)%P+P)%P+y}function f(){return!1}function m(n,o){if(o===!1)return n;var c=Math.pow(10,o===void 0?6:o);return Math.round(n*c)/c}function d(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function _(n){return d(n).split(/\s+/)}function g(n,o){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?i(n.options):{});for(var c in o)n.options[c]=o[c];return n.options}function b(n,o,c){var p=[];for(var y in n)p.push(encodeURIComponent(c?y.toUpperCase():y)+"="+encodeURIComponent(n[y]));return(!o||o.indexOf("?")===-1?"?":"&")+p.join("&")}var M=/\{ *([\w_ -]+) *\}/g;function x(n,o){return n.replace(M,function(c,p){var y=o[p];if(y===void 0)throw new Error("No value provided for variable "+c);return typeof y=="function"&&(y=y(o)),y})}var v=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function C(n,o){for(var c=0;c<n.length;c++)if(n[c]===o)return c;return-1}var w="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function T(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var k=0;function R(n){var o=+new Date,c=Math.max(0,16-(o-k));return k=o+c,window.setTimeout(n,c)}var D=window.requestAnimationFrame||T("RequestAnimationFrame")||R,O=window.cancelAnimationFrame||T("CancelAnimationFrame")||T("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function A(n,o,c){if(c&&D===R)n.call(o);else return D.call(window,r(n,o))}function E(n){n&&O.call(window,n)}var B={__proto__:null,extend:e,create:i,bind:r,get lastId(){return a},stamp:l,throttle:h,wrapNum:u,falseFn:f,formatNum:m,trim:d,splitWords:_,setOptions:g,getParamString:b,template:x,isArray:v,indexOf:C,emptyImageUrl:w,requestFn:D,cancelFn:O,requestAnimFrame:A,cancelAnimFrame:E};function z(){}z.extend=function(n){var o=function(){g(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},c=o.__super__=this.prototype,p=i(c);p.constructor=o,o.prototype=p;for(var y in this)Object.prototype.hasOwnProperty.call(this,y)&&y!=="prototype"&&y!=="__super__"&&(o[y]=this[y]);return n.statics&&e(o,n.statics),n.includes&&(G(n.includes),e.apply(null,[p].concat(n.includes))),e(p,n),delete p.statics,delete p.includes,p.options&&(p.options=c.options?i(c.options):{},e(p.options,n.options)),p._initHooks=[],p.callInitHooks=function(){if(!this._initHooksCalled){c.callInitHooks&&c.callInitHooks.call(this),this._initHooksCalled=!0;for(var P=0,F=p._initHooks.length;P<F;P++)p._initHooks[P].call(this)}},o},z.include=function(n){var o=this.prototype.options;return e(this.prototype,n),n.options&&(this.prototype.options=o,this.mergeOptions(n.options)),this},z.mergeOptions=function(n){return e(this.prototype.options,n),this},z.addInitHook=function(n){var o=Array.prototype.slice.call(arguments,1),c=typeof n=="function"?n:function(){this[n].apply(this,o)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(c),this};function G(n){if(!(typeof L>"u"||!L||!L.Mixin)){n=v(n)?n:[n];for(var o=0;o<n.length;o++)n[o]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var $={on:function(n,o,c){if(typeof n=="object")for(var p in n)this._on(p,n[p],o);else{n=_(n);for(var y=0,P=n.length;y<P;y++)this._on(n[y],o,c)}return this},off:function(n,o,c){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var p in n)this._off(p,n[p],o);else{n=_(n);for(var y=arguments.length===1,P=0,F=n.length;P<F;P++)y?this._off(n[P]):this._off(n[P],o,c)}return this},_on:function(n,o,c,p){if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}if(this._listens(n,o,c)===!1){c===this&&(c=void 0);var y={fn:o,ctx:c};p&&(y.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(y)}},_off:function(n,o,c){var p,y,P;if(this._events&&(p=this._events[n],!!p)){if(arguments.length===1){if(this._firingCount)for(y=0,P=p.length;y<P;y++)p[y].fn=f;delete this._events[n];return}if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}var F=this._listens(n,o,c);if(F!==!1){var J=p[F];this._firingCount&&(J.fn=f,this._events[n]=p=p.slice()),p.splice(F,1)}}},fire:function(n,o,c){if(!this.listens(n,c))return this;var p=e({},o,{type:n,target:this,sourceTarget:o&&o.sourceTarget||this});if(this._events){var y=this._events[n];if(y){this._firingCount=this._firingCount+1||1;for(var P=0,F=y.length;P<F;P++){var J=y[P],it=J.fn;J.once&&this.off(n,it,J.ctx),it.call(J.ctx||this,p)}this._firingCount--}}return c&&this._propagateEvent(p),this},listens:function(n,o,c,p){typeof n!="string"&&console.warn('"string" type argument expected');var y=o;typeof o!="function"&&(p=!!o,y=void 0,c=void 0);var P=this._events&&this._events[n];if(P&&P.length&&this._listens(n,y,c)!==!1)return!0;if(p){for(var F in this._eventParents)if(this._eventParents[F].listens(n,o,c,p))return!0}return!1},_listens:function(n,o,c){if(!this._events)return!1;var p=this._events[n]||[];if(!o)return!!p.length;c===this&&(c=void 0);for(var y=0,P=p.length;y<P;y++)if(p[y].fn===o&&p[y].ctx===c)return y;return!1},once:function(n,o,c){if(typeof n=="object")for(var p in n)this._on(p,n[p],o,!0);else{n=_(n);for(var y=0,P=n.length;y<P;y++)this._on(n[y],o,c,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[l(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[l(n)],this},_propagateEvent:function(n){for(var o in this._eventParents)this._eventParents[o].fire(n.type,e({layer:n.target,propagatedFrom:n.target},n),!0)}};$.addEventListener=$.on,$.removeEventListener=$.clearAllEventListeners=$.off,$.addOneTimeEventListener=$.once,$.fireEvent=$.fire,$.hasEventListeners=$.listens;var tt=z.extend($);function W(n,o,c){this.x=c?Math.round(n):n,this.y=c?Math.round(o):o}var ht=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};W.prototype={clone:function(){return new W(this.x,this.y)},add:function(n){return this.clone()._add(V(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(V(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new W(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new W(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=ht(this.x),this.y=ht(this.y),this},distanceTo:function(n){n=V(n);var o=n.x-this.x,c=n.y-this.y;return Math.sqrt(o*o+c*c)},equals:function(n){return n=V(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=V(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+m(this.x)+", "+m(this.y)+")"}};function V(n,o,c){return n instanceof W?n:v(n)?new W(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new W(n.x,n.y):new W(n,o,c)}function lt(n,o){if(n)for(var c=o?[n,o]:n,p=0,y=c.length;p<y;p++)this.extend(c[p])}lt.prototype={extend:function(n){var o,c;if(!n)return this;if(n instanceof W||typeof n[0]=="number"||"x"in n)o=c=V(n);else if(n=st(n),o=n.min,c=n.max,!o||!c)return this;return!this.min&&!this.max?(this.min=o.clone(),this.max=c.clone()):(this.min.x=Math.min(o.x,this.min.x),this.max.x=Math.max(c.x,this.max.x),this.min.y=Math.min(o.y,this.min.y),this.max.y=Math.max(c.y,this.max.y)),this},getCenter:function(n){return V((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return V(this.min.x,this.max.y)},getTopRight:function(){return V(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var o,c;return typeof n[0]=="number"||n instanceof W?n=V(n):n=st(n),n instanceof lt?(o=n.min,c=n.max):o=c=n,o.x>=this.min.x&&c.x<=this.max.x&&o.y>=this.min.y&&c.y<=this.max.y},intersects:function(n){n=st(n);var o=this.min,c=this.max,p=n.min,y=n.max,P=y.x>=o.x&&p.x<=c.x,F=y.y>=o.y&&p.y<=c.y;return P&&F},overlaps:function(n){n=st(n);var o=this.min,c=this.max,p=n.min,y=n.max,P=y.x>o.x&&p.x<c.x,F=y.y>o.y&&p.y<c.y;return P&&F},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var o=this.min,c=this.max,p=Math.abs(o.x-c.x)*n,y=Math.abs(o.y-c.y)*n;return st(V(o.x-p,o.y-y),V(c.x+p,c.y+y))},equals:function(n){return n?(n=st(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function st(n,o){return!n||n instanceof lt?n:new lt(n,o)}function ot(n,o){if(n)for(var c=o?[n,o]:n,p=0,y=c.length;p<y;p++)this.extend(c[p])}ot.prototype={extend:function(n){var o=this._southWest,c=this._northEast,p,y;if(n instanceof bt)p=n,y=n;else if(n instanceof ot){if(p=n._southWest,y=n._northEast,!p||!y)return this}else return n?this.extend(K(n)||yt(n)):this;return!o&&!c?(this._southWest=new bt(p.lat,p.lng),this._northEast=new bt(y.lat,y.lng)):(o.lat=Math.min(p.lat,o.lat),o.lng=Math.min(p.lng,o.lng),c.lat=Math.max(y.lat,c.lat),c.lng=Math.max(y.lng,c.lng)),this},pad:function(n){var o=this._southWest,c=this._northEast,p=Math.abs(o.lat-c.lat)*n,y=Math.abs(o.lng-c.lng)*n;return new ot(new bt(o.lat-p,o.lng-y),new bt(c.lat+p,c.lng+y))},getCenter:function(){return new bt((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new bt(this.getNorth(),this.getWest())},getSouthEast:function(){return new bt(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof bt||"lat"in n?n=K(n):n=yt(n);var o=this._southWest,c=this._northEast,p,y;return n instanceof ot?(p=n.getSouthWest(),y=n.getNorthEast()):p=y=n,p.lat>=o.lat&&y.lat<=c.lat&&p.lng>=o.lng&&y.lng<=c.lng},intersects:function(n){n=yt(n);var o=this._southWest,c=this._northEast,p=n.getSouthWest(),y=n.getNorthEast(),P=y.lat>=o.lat&&p.lat<=c.lat,F=y.lng>=o.lng&&p.lng<=c.lng;return P&&F},overlaps:function(n){n=yt(n);var o=this._southWest,c=this._northEast,p=n.getSouthWest(),y=n.getNorthEast(),P=y.lat>o.lat&&p.lat<c.lat,F=y.lng>o.lng&&p.lng<c.lng;return P&&F},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,o){return n?(n=yt(n),this._southWest.equals(n.getSouthWest(),o)&&this._northEast.equals(n.getNorthEast(),o)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function yt(n,o){return n instanceof ot?n:new ot(n,o)}function bt(n,o,c){if(isNaN(n)||isNaN(o))throw new Error("Invalid LatLng object: ("+n+", "+o+")");this.lat=+n,this.lng=+o,c!==void 0&&(this.alt=+c)}bt.prototype={equals:function(n,o){if(!n)return!1;n=K(n);var c=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return c<=(o===void 0?1e-9:o)},toString:function(n){return"LatLng("+m(this.lat,n)+", "+m(this.lng,n)+")"},distanceTo:function(n){return Mt.distance(this,K(n))},wrap:function(){return Mt.wrapLatLng(this)},toBounds:function(n){var o=180*n/40075017,c=o/Math.cos(Math.PI/180*this.lat);return yt([this.lat-o,this.lng-c],[this.lat+o,this.lng+c])},clone:function(){return new bt(this.lat,this.lng,this.alt)}};function K(n,o,c){return n instanceof bt?n:v(n)&&typeof n[0]!="object"?n.length===3?new bt(n[0],n[1],n[2]):n.length===2?new bt(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new bt(n.lat,"lng"in n?n.lng:n.lon,n.alt):o===void 0?null:new bt(n,o,c)}var pt={latLngToPoint:function(n,o){var c=this.projection.project(n),p=this.scale(o);return this.transformation._transform(c,p)},pointToLatLng:function(n,o){var c=this.scale(o),p=this.transformation.untransform(n,c);return this.projection.unproject(p)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var o=this.projection.bounds,c=this.scale(n),p=this.transformation.transform(o.min,c),y=this.transformation.transform(o.max,c);return new lt(p,y)},infinite:!1,wrapLatLng:function(n){var o=this.wrapLng?u(n.lng,this.wrapLng,!0):n.lng,c=this.wrapLat?u(n.lat,this.wrapLat,!0):n.lat,p=n.alt;return new bt(c,o,p)},wrapLatLngBounds:function(n){var o=n.getCenter(),c=this.wrapLatLng(o),p=o.lat-c.lat,y=o.lng-c.lng;if(p===0&&y===0)return n;var P=n.getSouthWest(),F=n.getNorthEast(),J=new bt(P.lat-p,P.lng-y),it=new bt(F.lat-p,F.lng-y);return new ot(J,it)}},Mt=e({},pt,{wrapLng:[-180,180],R:6371e3,distance:function(n,o){var c=Math.PI/180,p=n.lat*c,y=o.lat*c,P=Math.sin((o.lat-n.lat)*c/2),F=Math.sin((o.lng-n.lng)*c/2),J=P*P+Math.cos(p)*Math.cos(y)*F*F,it=2*Math.atan2(Math.sqrt(J),Math.sqrt(1-J));return this.R*it}}),gt=6378137,Xt={R:gt,MAX_LATITUDE:85.0511287798,project:function(n){var o=Math.PI/180,c=this.MAX_LATITUDE,p=Math.max(Math.min(c,n.lat),-c),y=Math.sin(p*o);return new W(this.R*n.lng*o,this.R*Math.log((1+y)/(1-y))/2)},unproject:function(n){var o=180/Math.PI;return new bt((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*o,n.x*o/this.R)},bounds:(function(){var n=gt*Math.PI;return new lt([-n,-n],[n,n])})()};function xt(n,o,c,p){if(v(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=o,this._c=c,this._d=p}xt.prototype={transform:function(n,o){return this._transform(n.clone(),o)},_transform:function(n,o){return o=o||1,n.x=o*(this._a*n.x+this._b),n.y=o*(this._c*n.y+this._d),n},untransform:function(n,o){return o=o||1,new W((n.x/o-this._b)/this._a,(n.y/o-this._d)/this._c)}};function rt(n,o,c,p){return new xt(n,o,c,p)}var It=e({},Mt,{code:"EPSG:3857",projection:Xt,transformation:(function(){var n=.5/(Math.PI*Xt.R);return rt(n,.5,-n,.5)})()}),qt=e({},It,{code:"EPSG:900913"});function ae(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Z(n,o){var c="",p,y,P,F,J,it;for(p=0,P=n.length;p<P;p++){for(J=n[p],y=0,F=J.length;y<F;y++)it=J[y],c+=(y?"L":"M")+it.x+" "+it.y;c+=o?Ut.svg?"z":"x":""}return c||"M0 0"}var Pe=document.documentElement.style,ne="ActiveXObject"in window,Ot=ne&&!document.addEventListener,kt="msLaunchUri"in navigator&&!("documentMode"in document),Se=An("webkit"),Yt=An("android"),U=An("android 2")||An("android 3"),I=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Q=Yt&&An("Google")&&I<537&&!("AudioNode"in window),ut=!!window.opera,mt=!kt&&An("chrome"),ct=An("gecko")&&!Se&&!ut&&!ne,Gt=!mt&&An("safari"),Et=An("phantom"),Dt="OTransition"in Pe,me=navigator.platform.indexOf("Win")===0,_t=ne&&"transition"in Pe,Nt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!U,Kt="MozPerspective"in Pe,Qt=!window.L_DISABLE_3D&&(_t||Nt||Kt)&&!Dt&&!Et,Lt=typeof orientation<"u"||An("mobile"),pe=Lt&&Se,ie=Lt&&Nt,Ce=!window.PointerEvent&&window.MSPointerEvent,X=!!(window.PointerEvent||Ce),Tt="ontouchstart"in window||!!window.TouchEvent,at=!window.L_NO_TOUCH&&(Tt||X),dt=Lt&&ut,Ct=Lt&&ct,At=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,ee=(function(){var n=!1;try{var o=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",f,o),window.removeEventListener("testPassiveEventSupport",f,o)}catch{}return n})(),He=(function(){return!!document.createElement("canvas").getContext})(),qe=!!(document.createElementNS&&ae("svg").createSVGRect),Ae=!!qe&&(function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),En=!qe&&(function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var o=n.firstChild;return o.style.behavior="url(#default#VML)",o&&typeof o.adj=="object"}catch{return!1}})(),$n=navigator.platform.indexOf("Mac")===0,go=navigator.platform.indexOf("Linux")===0;function An(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var Ut={ie:ne,ielt9:Ot,edge:kt,webkit:Se,android:Yt,android23:U,androidStock:Q,opera:ut,chrome:mt,gecko:ct,safari:Gt,phantom:Et,opera12:Dt,win:me,ie3d:_t,webkit3d:Nt,gecko3d:Kt,any3d:Qt,mobile:Lt,mobileWebkit:pe,mobileWebkit3d:ie,msPointer:Ce,pointer:X,touch:at,touchNative:Tt,mobileOpera:dt,mobileGecko:Ct,retina:At,passiveEvents:ee,canvas:He,svg:qe,vml:En,inlineSvg:Ae,mac:$n,linux:go},Ns=Ut.msPointer?"MSPointerDown":"pointerdown",Cr=Ut.msPointer?"MSPointerMove":"pointermove",Rr=Ut.msPointer?"MSPointerUp":"pointerup",rs=Ut.msPointer?"MSPointerCancel":"pointercancel",Os={touchstart:Ns,touchmove:Cr,touchend:Rr,touchcancel:rs},os={touchstart:Y,touchmove:et,touchend:et,touchcancel:et},Mi={},Lr=!1;function Ll(n,o,c){return o==="touchstart"&&nt(),os[o]?(c=os[o].bind(this,c),n.addEventListener(Os[o],c,!1),c):(console.warn("wrong event specified:",o),f)}function Il(n,o,c){if(!Os[o]){console.warn("wrong event specified:",o);return}n.removeEventListener(Os[o],c,!1)}function Dl(n){Mi[n.pointerId]=n}function N(n){Mi[n.pointerId]&&(Mi[n.pointerId]=n)}function q(n){delete Mi[n.pointerId]}function nt(){Lr||(document.addEventListener(Ns,Dl,!0),document.addEventListener(Cr,N,!0),document.addEventListener(Rr,q,!0),document.addEventListener(rs,q,!0),Lr=!0)}function et(n,o){if(o.pointerType!==(o.MSPOINTER_TYPE_MOUSE||"mouse")){o.touches=[];for(var c in Mi)o.touches.push(Mi[c]);o.changedTouches=[o],n(o)}}function Y(n,o){o.MSPOINTER_TYPE_TOUCH&&o.pointerType===o.MSPOINTER_TYPE_TOUCH&&on(o),et(n,o)}function vt(n){var o={},c,p;for(p in n)c=n[p],o[p]=c&&c.bind?c.bind(n):c;return n=o,o.type="dblclick",o.detail=2,o.isTrusted=!1,o._simulated=!0,o}var Pt=200;function zt(n,o){n.addEventListener("dblclick",o);var c=0,p;function y(P){if(P.detail!==1){p=P.detail;return}if(!(P.pointerType==="mouse"||P.sourceCapabilities&&!P.sourceCapabilities.firesTouchEvents)){var F=Pu(P);if(!(F.some(function(it){return it instanceof HTMLLabelElement&&it.attributes.for})&&!F.some(function(it){return it instanceof HTMLInputElement||it instanceof HTMLSelectElement}))){var J=Date.now();J-c<=Pt?(p++,p===2&&o(vt(P))):p=1,c=J}}}return n.addEventListener("click",y),{dblclick:o,simDblclick:y}}function Ht(n,o){n.removeEventListener("dblclick",o.dblclick),n.removeEventListener("click",o.simDblclick)}var jt=di(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),te=di(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Ft=te==="webkitTransition"||te==="OTransition"?te+"End":"transitionend";function ge(n){return typeof n=="string"?document.getElementById(n):n}function Te(n,o){var c=n.style[o]||n.currentStyle&&n.currentStyle[o];if((!c||c==="auto")&&document.defaultView){var p=document.defaultView.getComputedStyle(n,null);c=p?p[o]:null}return c==="auto"?null:c}function Wt(n,o,c){var p=document.createElement(n);return p.className=o||"",c&&c.appendChild(p),p}function he(n){var o=n.parentNode;o&&o.removeChild(n)}function _e(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function Bt(n){var o=n.parentNode;o&&o.lastChild!==n&&o.appendChild(n)}function un(n){var o=n.parentNode;o&&o.firstChild!==n&&o.insertBefore(n,o.firstChild)}function xe(n,o){if(n.classList!==void 0)return n.classList.contains(o);var c=ui(n);return c.length>0&&new RegExp("(^|\\s)"+o+"(\\s|$)").test(c)}function $t(n,o){if(n.classList!==void 0)for(var c=_(o),p=0,y=c.length;p<y;p++)n.classList.add(c[p]);else if(!xe(n,o)){var P=ui(n);rn(n,(P?P+" ":"")+o)}}function Ie(n,o){n.classList!==void 0?n.classList.remove(o):rn(n,d((" "+ui(n)+" ").replace(" "+o+" "," ")))}function rn(n,o){n.className.baseVal===void 0?n.className=o:n.className.baseVal=o}function ui(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function ue(n,o){"opacity"in n.style?n.style.opacity=o:"filter"in n.style&&kn(n,o)}function kn(n,o){var c=!1,p="DXImageTransform.Microsoft.Alpha";try{c=n.filters.item(p)}catch{if(o===1)return}o=Math.round(o*100),c?(c.Enabled=o!==100,c.Opacity=o):n.style.filter+=" progid:"+p+"(opacity="+o+")"}function di(n){for(var o=document.documentElement.style,c=0;c<n.length;c++)if(n[c]in o)return n[c];return!1}function Ye(n,o,c){var p=o||new W(0,0);n.style[jt]=(Ut.ie3d?"translate("+p.x+"px,"+p.y+"px)":"translate3d("+p.x+"px,"+p.y+"px,0)")+(c?" scale("+c+")":"")}function Re(n,o){n._leaflet_pos=o,Ut.any3d?Ye(n,o):(n.style.left=o.x+"px",n.style.top=o.y+"px")}function dn(n){return n._leaflet_pos||new W(0,0)}var Wi,Ir,Nl;if("onselectstart"in document)Wi=function(){se(window,"selectstart",on)},Ir=function(){ke(window,"selectstart",on)};else{var Dr=di(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Wi=function(){if(Dr){var n=document.documentElement.style;Nl=n[Dr],n[Dr]="none"}},Ir=function(){Dr&&(document.documentElement.style[Dr]=Nl,Nl=void 0)}}function Ol(){se(window,"dragstart",on)}function Ul(){ke(window,"dragstart",on)}var _o,kl;function Bl(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(vo(),_o=n,kl=n.style.outlineStyle,n.style.outlineStyle="none",se(window,"keydown",vo))}function vo(){_o&&(_o.style.outlineStyle=kl,_o=void 0,kl=void 0,ke(window,"keydown",vo))}function Eu(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function Fl(n){var o=n.getBoundingClientRect();return{x:o.width/n.offsetWidth||1,y:o.height/n.offsetHeight||1,boundingClientRect:o}}var Gp={__proto__:null,TRANSFORM:jt,TRANSITION:te,TRANSITION_END:Ft,get:ge,getStyle:Te,create:Wt,remove:he,empty:_e,toFront:Bt,toBack:un,hasClass:xe,addClass:$t,removeClass:Ie,setClass:rn,getClass:ui,setOpacity:ue,testProp:di,setTransform:Ye,setPosition:Re,getPosition:dn,get disableTextSelection(){return Wi},get enableTextSelection(){return Ir},disableImageDrag:Ol,enableImageDrag:Ul,preventOutline:Bl,restoreOutline:vo,getSizedParentNode:Eu,getScale:Fl};function se(n,o,c,p){if(o&&typeof o=="object")for(var y in o)Hl(n,y,o[y],c);else{o=_(o);for(var P=0,F=o.length;P<F;P++)Hl(n,o[P],c,p)}return this}var fi="_leaflet_events";function ke(n,o,c,p){if(arguments.length===1)Au(n),delete n[fi];else if(o&&typeof o=="object")for(var y in o)Vl(n,y,o[y],c);else if(o=_(o),arguments.length===2)Au(n,function(J){return C(o,J)!==-1});else for(var P=0,F=o.length;P<F;P++)Vl(n,o[P],c,p);return this}function Au(n,o){for(var c in n[fi]){var p=c.split(/\d/)[0];(!o||o(p))&&Vl(n,p,null,null,c)}}var zl={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Hl(n,o,c,p){var y=o+l(c)+(p?"_"+l(p):"");if(n[fi]&&n[fi][y])return this;var P=function(J){return c.call(p||n,J||window.event)},F=P;!Ut.touchNative&&Ut.pointer&&o.indexOf("touch")===0?P=Ll(n,o,P):Ut.touch&&o==="dblclick"?P=zt(n,P):"addEventListener"in n?o==="touchstart"||o==="touchmove"||o==="wheel"||o==="mousewheel"?n.addEventListener(zl[o]||o,P,Ut.passiveEvents?{passive:!1}:!1):o==="mouseenter"||o==="mouseleave"?(P=function(J){J=J||window.event,Wl(n,J)&&F(J)},n.addEventListener(zl[o],P,!1)):n.addEventListener(o,F,!1):n.attachEvent("on"+o,P),n[fi]=n[fi]||{},n[fi][y]=P}function Vl(n,o,c,p,y){y=y||o+l(c)+(p?"_"+l(p):"");var P=n[fi]&&n[fi][y];if(!P)return this;!Ut.touchNative&&Ut.pointer&&o.indexOf("touch")===0?Il(n,o,P):Ut.touch&&o==="dblclick"?Ht(n,P):"removeEventListener"in n?n.removeEventListener(zl[o]||o,P,!1):n.detachEvent("on"+o,P),n[fi][y]=null}function as(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function Gl(n){return Hl(n,"wheel",as),this}function Nr(n){return se(n,"mousedown touchstart dblclick contextmenu",as),n._leaflet_disable_click=!0,this}function on(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function ls(n){return on(n),as(n),this}function Pu(n){if(n.composedPath)return n.composedPath();for(var o=[],c=n.target;c;)o.push(c),c=c.parentNode;return o}function Cu(n,o){if(!o)return new W(n.clientX,n.clientY);var c=Fl(o),p=c.boundingClientRect;return new W((n.clientX-p.left)/c.x-o.clientLeft,(n.clientY-p.top)/c.y-o.clientTop)}var Wp=Ut.linux&&Ut.chrome?window.devicePixelRatio:Ut.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Ru(n){return Ut.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/Wp:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function Wl(n,o){var c=o.relatedTarget;if(!c)return!0;try{for(;c&&c!==n;)c=c.parentNode}catch{return!1}return c!==n}var Zp={__proto__:null,on:se,off:ke,stopPropagation:as,disableScrollPropagation:Gl,disableClickPropagation:Nr,preventDefault:on,stop:ls,getPropagationPath:Pu,getMousePosition:Cu,getWheelDelta:Ru,isExternalTarget:Wl,addListener:se,removeListener:ke},Lu=tt.extend({run:function(n,o,c,p){this.stop(),this._el=n,this._inProgress=!0,this._duration=c||.25,this._easeOutPower=1/Math.max(p||.5,.2),this._startPos=dn(n),this._offset=o.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=A(this._animate,this),this._step()},_step:function(n){var o=+new Date-this._startTime,c=this._duration*1e3;o<c?this._runFrame(this._easeOut(o/c),n):(this._runFrame(1),this._complete())},_runFrame:function(n,o){var c=this._startPos.add(this._offset.multiplyBy(n));o&&c._round(),Re(this._el,c),this.fire("step")},_complete:function(){E(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),ye=tt.extend({options:{crs:It,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,o){o=g(this,o),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=r(this._onResize,this),this._initEvents(),o.maxBounds&&this.setMaxBounds(o.maxBounds),o.zoom!==void 0&&(this._zoom=this._limitZoom(o.zoom)),o.center&&o.zoom!==void 0&&this.setView(K(o.center),o.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=te&&Ut.any3d&&!Ut.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),se(this._proxy,Ft,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,o,c){if(o=o===void 0?this._zoom:this._limitZoom(o),n=this._limitCenter(K(n),o,this.options.maxBounds),c=c||{},this._stop(),this._loaded&&!c.reset&&c!==!0){c.animate!==void 0&&(c.zoom=e({animate:c.animate},c.zoom),c.pan=e({animate:c.animate,duration:c.duration},c.pan));var p=this._zoom!==o?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,o,c.zoom):this._tryAnimatedPan(n,c.pan);if(p)return clearTimeout(this._sizeTimer),this}return this._resetView(n,o,c.pan&&c.pan.noMoveStart),this},setZoom:function(n,o){return this._loaded?this.setView(this.getCenter(),n,{zoom:o}):(this._zoom=n,this)},zoomIn:function(n,o){return n=n||(Ut.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,o)},zoomOut:function(n,o){return n=n||(Ut.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,o)},setZoomAround:function(n,o,c){var p=this.getZoomScale(o),y=this.getSize().divideBy(2),P=n instanceof W?n:this.latLngToContainerPoint(n),F=P.subtract(y).multiplyBy(1-1/p),J=this.containerPointToLatLng(y.add(F));return this.setView(J,o,{zoom:c})},_getBoundsCenterZoom:function(n,o){o=o||{},n=n.getBounds?n.getBounds():yt(n);var c=V(o.paddingTopLeft||o.padding||[0,0]),p=V(o.paddingBottomRight||o.padding||[0,0]),y=this.getBoundsZoom(n,!1,c.add(p));if(y=typeof o.maxZoom=="number"?Math.min(o.maxZoom,y):y,y===1/0)return{center:n.getCenter(),zoom:y};var P=p.subtract(c).divideBy(2),F=this.project(n.getSouthWest(),y),J=this.project(n.getNorthEast(),y),it=this.unproject(F.add(J).divideBy(2).add(P),y);return{center:it,zoom:y}},fitBounds:function(n,o){if(n=yt(n),!n.isValid())throw new Error("Bounds are not valid.");var c=this._getBoundsCenterZoom(n,o);return this.setView(c.center,c.zoom,o)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,o){return this.setView(n,this._zoom,{pan:o})},panBy:function(n,o){if(n=V(n).round(),o=o||{},!n.x&&!n.y)return this.fire("moveend");if(o.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Lu,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),o.noMoveStart||this.fire("movestart"),o.animate!==!1){$t(this._mapPane,"leaflet-pan-anim");var c=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,c,o.duration||.25,o.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,o,c){if(c=c||{},c.animate===!1||!Ut.any3d)return this.setView(n,o,c);this._stop();var p=this.project(this.getCenter()),y=this.project(n),P=this.getSize(),F=this._zoom;n=K(n),o=o===void 0?F:o;var J=Math.max(P.x,P.y),it=J*this.getZoomScale(F,o),ft=y.distanceTo(p)||1,Rt=1.42,Jt=Rt*Rt;function de($e){var Ro=$e?-1:1,Dm=$e?it:J,Nm=it*it-J*J+Ro*Jt*Jt*ft*ft,Om=2*Dm*Jt*ft,ec=Nm/Om,ud=Math.sqrt(ec*ec+1)-ec,Um=ud<1e-9?-18:Math.log(ud);return Um}function vn($e){return(Math.exp($e)-Math.exp(-$e))/2}function tn($e){return(Math.exp($e)+Math.exp(-$e))/2}function Fn($e){return vn($e)/tn($e)}var Sn=de(0);function Hs($e){return J*(tn(Sn)/tn(Sn+Rt*$e))}function Cm($e){return J*(tn(Sn)*Fn(Sn+Rt*$e)-vn(Sn))/Jt}function Rm($e){return 1-Math.pow(1-$e,1.5)}var Lm=Date.now(),cd=(de(1)-Sn)/Rt,Im=c.duration?1e3*c.duration:1e3*cd*.8;function hd(){var $e=(Date.now()-Lm)/Im,Ro=Rm($e)*cd;$e<=1?(this._flyToFrame=A(hd,this),this._move(this.unproject(p.add(y.subtract(p).multiplyBy(Cm(Ro)/ft)),F),this.getScaleZoom(J/Hs(Ro),F),{flyTo:!0})):this._move(n,o)._moveEnd(!0)}return this._moveStart(!0,c.noMoveStart),hd.call(this),this},flyToBounds:function(n,o){var c=this._getBoundsCenterZoom(n,o);return this.flyTo(c.center,c.zoom,o)},setMaxBounds:function(n){return n=yt(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var o=this.options.minZoom;return this.options.minZoom=n,this._loaded&&o!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var o=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&o!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,o){this._enforcingBounds=!0;var c=this.getCenter(),p=this._limitCenter(c,this._zoom,yt(n));return c.equals(p)||this.panTo(p,o),this._enforcingBounds=!1,this},panInside:function(n,o){o=o||{};var c=V(o.paddingTopLeft||o.padding||[0,0]),p=V(o.paddingBottomRight||o.padding||[0,0]),y=this.project(this.getCenter()),P=this.project(n),F=this.getPixelBounds(),J=st([F.min.add(c),F.max.subtract(p)]),it=J.getSize();if(!J.contains(P)){this._enforcingBounds=!0;var ft=P.subtract(J.getCenter()),Rt=J.extend(P).getSize().subtract(it);y.x+=ft.x<0?-Rt.x:Rt.x,y.y+=ft.y<0?-Rt.y:Rt.y,this.panTo(this.unproject(y),o),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=e({animate:!1,pan:!0},n===!0?{animate:!0}:n);var o=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var c=this.getSize(),p=o.divideBy(2).round(),y=c.divideBy(2).round(),P=p.subtract(y);return!P.x&&!P.y?this:(n.animate&&n.pan?this.panBy(P):(n.pan&&this._rawPanBy(P),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(r(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:o,newSize:c}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=e({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var o=r(this._handleGeolocationResponse,this),c=r(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(o,c,n):navigator.geolocation.getCurrentPosition(o,c,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var o=n.code,c=n.message||(o===1?"permission denied":o===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:o,message:"Geolocation error: "+c+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var o=n.coords.latitude,c=n.coords.longitude,p=new bt(o,c),y=p.toBounds(n.coords.accuracy*2),P=this._locateOptions;if(P.setView){var F=this.getBoundsZoom(y);this.setView(p,P.maxZoom?Math.min(F,P.maxZoom):F)}var J={latlng:p,bounds:y,timestamp:n.timestamp};for(var it in n.coords)typeof n.coords[it]=="number"&&(J[it]=n.coords[it]);this.fire("locationfound",J)}},addHandler:function(n,o){if(!o)return this;var c=this[n]=new o(this);return this._handlers.push(c),this.options[n]&&c.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),he(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(E(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)he(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,o){var c="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),p=Wt("div",c,o||this._mapPane);return n&&(this._panes[n]=p),p},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),o=this.unproject(n.getBottomLeft()),c=this.unproject(n.getTopRight());return new ot(o,c)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,o,c){n=yt(n),c=V(c||[0,0]);var p=this.getZoom()||0,y=this.getMinZoom(),P=this.getMaxZoom(),F=n.getNorthWest(),J=n.getSouthEast(),it=this.getSize().subtract(c),ft=st(this.project(J,p),this.project(F,p)).getSize(),Rt=Ut.any3d?this.options.zoomSnap:1,Jt=it.x/ft.x,de=it.y/ft.y,vn=o?Math.max(Jt,de):Math.min(Jt,de);return p=this.getScaleZoom(vn,p),Rt&&(p=Math.round(p/(Rt/100))*(Rt/100),p=o?Math.ceil(p/Rt)*Rt:Math.floor(p/Rt)*Rt),Math.max(y,Math.min(P,p))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new W(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,o){var c=this._getTopLeftPoint(n,o);return new lt(c,c.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,o){var c=this.options.crs;return o=o===void 0?this._zoom:o,c.scale(n)/c.scale(o)},getScaleZoom:function(n,o){var c=this.options.crs;o=o===void 0?this._zoom:o;var p=c.zoom(n*c.scale(o));return isNaN(p)?1/0:p},project:function(n,o){return o=o===void 0?this._zoom:o,this.options.crs.latLngToPoint(K(n),o)},unproject:function(n,o){return o=o===void 0?this._zoom:o,this.options.crs.pointToLatLng(V(n),o)},layerPointToLatLng:function(n){var o=V(n).add(this.getPixelOrigin());return this.unproject(o)},latLngToLayerPoint:function(n){var o=this.project(K(n))._round();return o._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng(K(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(yt(n))},distance:function(n,o){return this.options.crs.distance(K(n),K(o))},containerPointToLayerPoint:function(n){return V(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return V(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var o=this.containerPointToLayerPoint(V(n));return this.layerPointToLatLng(o)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint(K(n)))},mouseEventToContainerPoint:function(n){return Cu(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var o=this._container=ge(n);if(o){if(o._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");se(o,"scroll",this._onScroll,this),this._containerId=l(o)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&Ut.any3d,$t(n,"leaflet-container"+(Ut.touch?" leaflet-touch":"")+(Ut.retina?" leaflet-retina":"")+(Ut.ielt9?" leaflet-oldie":"")+(Ut.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var o=Te(n,"position");o!=="absolute"&&o!=="relative"&&o!=="fixed"&&o!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Re(this._mapPane,new W(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||($t(n.markerPane,"leaflet-zoom-hide"),$t(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,o,c){Re(this._mapPane,new W(0,0));var p=!this._loaded;this._loaded=!0,o=this._limitZoom(o),this.fire("viewprereset");var y=this._zoom!==o;this._moveStart(y,c)._move(n,o)._moveEnd(y),this.fire("viewreset"),p&&this.fire("load")},_moveStart:function(n,o){return n&&this.fire("zoomstart"),o||this.fire("movestart"),this},_move:function(n,o,c,p){o===void 0&&(o=this._zoom);var y=this._zoom!==o;return this._zoom=o,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),p?c&&c.pinch&&this.fire("zoom",c):((y||c&&c.pinch)&&this.fire("zoom",c),this.fire("move",c)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return E(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){Re(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[l(this._container)]=this;var o=n?ke:se;o(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&o(window,"resize",this._onResize,this),Ut.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){E(this._resizeRequest),this._resizeRequest=A(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,o){for(var c=[],p,y=o==="mouseout"||o==="mouseover",P=n.target||n.srcElement,F=!1;P;){if(p=this._targets[l(P)],p&&(o==="click"||o==="preclick")&&this._draggableMoved(p)){F=!0;break}if(p&&p.listens(o,!0)&&(y&&!Wl(P,n)||(c.push(p),y))||P===this._container)break;P=P.parentNode}return!c.length&&!F&&!y&&this.listens(o,!0)&&(c=[this]),c},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var o=n.target||n.srcElement;if(!(!this._loaded||o._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(o))){var c=n.type;c==="mousedown"&&Bl(o),this._fireDOMEvent(n,c)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,o,c){if(n.type==="click"){var p=e({},n);p.type="preclick",this._fireDOMEvent(p,p.type,c)}var y=this._findEventTargets(n,o);if(c){for(var P=[],F=0;F<c.length;F++)c[F].listens(o,!0)&&P.push(c[F]);y=P.concat(y)}if(y.length){o==="contextmenu"&&on(n);var J=y[0],it={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var ft=J.getLatLng&&(!J._radius||J._radius<=10);it.containerPoint=ft?this.latLngToContainerPoint(J.getLatLng()):this.mouseEventToContainerPoint(n),it.layerPoint=this.containerPointToLayerPoint(it.containerPoint),it.latlng=ft?J.getLatLng():this.layerPointToLatLng(it.layerPoint)}for(F=0;F<y.length;F++)if(y[F].fire(o,it,!0),it.originalEvent._stopped||y[F].options.bubblingMouseEvents===!1&&C(this._mouseEvents,o)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,o=this._handlers.length;n<o;n++)this._handlers[n].disable()},whenReady:function(n,o){return this._loaded?n.call(o||this,{target:this}):this.on("load",n,o),this},_getMapPanePos:function(){return dn(this._mapPane)||new W(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,o){var c=n&&o!==void 0?this._getNewPixelOrigin(n,o):this.getPixelOrigin();return c.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,o){var c=this.getSize()._divideBy(2);return this.project(n,o)._subtract(c)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,o,c){var p=this._getNewPixelOrigin(c,o);return this.project(n,o)._subtract(p)},_latLngBoundsToNewLayerBounds:function(n,o,c){var p=this._getNewPixelOrigin(c,o);return st([this.project(n.getSouthWest(),o)._subtract(p),this.project(n.getNorthWest(),o)._subtract(p),this.project(n.getSouthEast(),o)._subtract(p),this.project(n.getNorthEast(),o)._subtract(p)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,o,c){if(!c)return n;var p=this.project(n,o),y=this.getSize().divideBy(2),P=new lt(p.subtract(y),p.add(y)),F=this._getBoundsOffset(P,c,o);return Math.abs(F.x)<=1&&Math.abs(F.y)<=1?n:this.unproject(p.add(F),o)},_limitOffset:function(n,o){if(!o)return n;var c=this.getPixelBounds(),p=new lt(c.min.add(n),c.max.add(n));return n.add(this._getBoundsOffset(p,o))},_getBoundsOffset:function(n,o,c){var p=st(this.project(o.getNorthEast(),c),this.project(o.getSouthWest(),c)),y=p.min.subtract(n.min),P=p.max.subtract(n.max),F=this._rebound(y.x,-P.x),J=this._rebound(y.y,-P.y);return new W(F,J)},_rebound:function(n,o){return n+o>0?Math.round(n-o)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(o))},_limitZoom:function(n){var o=this.getMinZoom(),c=this.getMaxZoom(),p=Ut.any3d?this.options.zoomSnap:1;return p&&(n=Math.round(n/p)*p),Math.max(o,Math.min(c,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Ie(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,o){var c=this._getCenterOffset(n)._trunc();return(o&&o.animate)!==!0&&!this.getSize().contains(c)?!1:(this.panBy(c,o),!0)},_createAnimProxy:function(){var n=this._proxy=Wt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(o){var c=jt,p=this._proxy.style[c];Ye(this._proxy,this.project(o.center,o.zoom),this.getZoomScale(o.zoom,1)),p===this._proxy.style[c]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){he(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),o=this.getZoom();Ye(this._proxy,this.project(n,o),this.getZoomScale(o,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,o,c){if(this._animatingZoom)return!0;if(c=c||{},!this._zoomAnimated||c.animate===!1||this._nothingToAnimate()||Math.abs(o-this._zoom)>this.options.zoomAnimationThreshold)return!1;var p=this.getZoomScale(o),y=this._getCenterOffset(n)._divideBy(1-1/p);return c.animate!==!0&&!this.getSize().contains(y)?!1:(A(function(){this._moveStart(!0,c.noMoveStart||!1)._animateZoom(n,o,!0)},this),!0)},_animateZoom:function(n,o,c,p){this._mapPane&&(c&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=o,$t(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:o,noUpdate:p}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(r(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Ie(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Xp(n,o){return new ye(n,o)}var Kn=z.extend({options:{position:"topright"},initialize:function(n){g(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var o=this._map;return o&&o.removeControl(this),this.options.position=n,o&&o.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var o=this._container=this.onAdd(n),c=this.getPosition(),p=n._controlCorners[c];return $t(o,"leaflet-control"),c.indexOf("bottom")!==-1?p.insertBefore(o,p.firstChild):p.appendChild(o),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(he(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),Or=function(n){return new Kn(n)};ye.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},o="leaflet-",c=this._controlContainer=Wt("div",o+"control-container",this._container);function p(y,P){var F=o+y+" "+o+P;n[y+P]=Wt("div",F,c)}p("top","left"),p("top","right"),p("bottom","left"),p("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)he(this._controlCorners[n]);he(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Iu=Kn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,o,c,p){return c<p?-1:p<c?1:0}},initialize:function(n,o,c){g(this,c),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var p in n)this._addLayer(n[p],p);for(p in o)this._addLayer(o[p],p,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return Kn.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,o){return this._addLayer(n,o),this._map?this._update():this},addOverlay:function(n,o){return this._addLayer(n,o,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var o=this._getLayer(l(n));return o&&this._layers.splice(this._layers.indexOf(o),1),this._map?this._update():this},expand:function(){$t(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?($t(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):Ie(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Ie(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",o=this._container=Wt("div",n),c=this.options.collapsed;o.setAttribute("aria-haspopup",!0),Nr(o),Gl(o);var p=this._section=Wt("section",n+"-list");c&&(this._map.on("click",this.collapse,this),se(o,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var y=this._layersLink=Wt("a",n+"-toggle",o);y.href="#",y.title="Layers",y.setAttribute("role","button"),se(y,{keydown:function(P){P.keyCode===13&&this._expandSafely()},click:function(P){on(P),this._expandSafely()}},this),c||this.expand(),this._baseLayersList=Wt("div",n+"-base",p),this._separator=Wt("div",n+"-separator",p),this._overlaysList=Wt("div",n+"-overlays",p),o.appendChild(p)},_getLayer:function(n){for(var o=0;o<this._layers.length;o++)if(this._layers[o]&&l(this._layers[o].layer)===n)return this._layers[o]},_addLayer:function(n,o,c){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:o,overlay:c}),this.options.sortLayers&&this._layers.sort(r(function(p,y){return this.options.sortFunction(p.layer,y.layer,p.name,y.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;_e(this._baseLayersList),_e(this._overlaysList),this._layerControlInputs=[];var n,o,c,p,y=0;for(c=0;c<this._layers.length;c++)p=this._layers[c],this._addItem(p),o=o||p.overlay,n=n||!p.overlay,y+=p.overlay?0:1;return this.options.hideSingleBase&&(n=n&&y>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=o&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var o=this._getLayer(l(n.target)),c=o.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;c&&this._map.fire(c,o)},_createRadioElement:function(n,o){var c='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(o?' checked="checked"':"")+"/>",p=document.createElement("div");return p.innerHTML=c,p.firstChild},_addItem:function(n){var o=document.createElement("label"),c=this._map.hasLayer(n.layer),p;n.overlay?(p=document.createElement("input"),p.type="checkbox",p.className="leaflet-control-layers-selector",p.defaultChecked=c):p=this._createRadioElement("leaflet-base-layers_"+l(this),c),this._layerControlInputs.push(p),p.layerId=l(n.layer),se(p,"click",this._onInputClick,this);var y=document.createElement("span");y.innerHTML=" "+n.name;var P=document.createElement("span");o.appendChild(P),P.appendChild(p),P.appendChild(y);var F=n.overlay?this._overlaysList:this._baseLayersList;return F.appendChild(o),this._checkDisabledLayers(),o},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,o,c,p=[],y=[];this._handlingClick=!0;for(var P=n.length-1;P>=0;P--)o=n[P],c=this._getLayer(o.layerId).layer,o.checked?p.push(c):o.checked||y.push(c);for(P=0;P<y.length;P++)this._map.hasLayer(y[P])&&this._map.removeLayer(y[P]);for(P=0;P<p.length;P++)this._map.hasLayer(p[P])||this._map.addLayer(p[P]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,o,c,p=this._map.getZoom(),y=n.length-1;y>=0;y--)o=n[y],c=this._getLayer(o.layerId).layer,o.disabled=c.options.minZoom!==void 0&&p<c.options.minZoom||c.options.maxZoom!==void 0&&p>c.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,se(n,"click",on),this.expand();var o=this;setTimeout(function(){ke(n,"click",on),o._preventClick=!1})}}),qp=function(n,o,c){return new Iu(n,o,c)},Zl=Kn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var o="leaflet-control-zoom",c=Wt("div",o+" leaflet-bar"),p=this.options;return this._zoomInButton=this._createButton(p.zoomInText,p.zoomInTitle,o+"-in",c,this._zoomIn),this._zoomOutButton=this._createButton(p.zoomOutText,p.zoomOutTitle,o+"-out",c,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),c},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,o,c,p,y){var P=Wt("a",c,p);return P.innerHTML=n,P.href="#",P.title=o,P.setAttribute("role","button"),P.setAttribute("aria-label",o),Nr(P),se(P,"click",ls),se(P,"click",y,this),se(P,"click",this._refocusOnMap,this),P},_updateDisabled:function(){var n=this._map,o="leaflet-disabled";Ie(this._zoomInButton,o),Ie(this._zoomOutButton,o),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&($t(this._zoomOutButton,o),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&($t(this._zoomInButton,o),this._zoomInButton.setAttribute("aria-disabled","true"))}});ye.mergeOptions({zoomControl:!0}),ye.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Zl,this.addControl(this.zoomControl))});var Yp=function(n){return new Zl(n)},Du=Kn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var o="leaflet-control-scale",c=Wt("div",o),p=this.options;return this._addScales(p,o+"-line",c),n.on(p.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),c},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,o,c){n.metric&&(this._mScale=Wt("div",o,c)),n.imperial&&(this._iScale=Wt("div",o,c))},_update:function(){var n=this._map,o=n.getSize().y/2,c=n.distance(n.containerPointToLatLng([0,o]),n.containerPointToLatLng([this.options.maxWidth,o]));this._updateScales(c)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var o=this._getRoundNum(n),c=o<1e3?o+" m":o/1e3+" km";this._updateScale(this._mScale,c,o/n)},_updateImperial:function(n){var o=n*3.2808399,c,p,y;o>5280?(c=o/5280,p=this._getRoundNum(c),this._updateScale(this._iScale,p+" mi",p/c)):(y=this._getRoundNum(o),this._updateScale(this._iScale,y+" ft",y/o))},_updateScale:function(n,o,c){n.style.width=Math.round(this.options.maxWidth*c)+"px",n.innerHTML=o},_getRoundNum:function(n){var o=Math.pow(10,(Math.floor(n)+"").length-1),c=n/o;return c=c>=10?10:c>=5?5:c>=3?3:c>=2?2:1,o*c}}),$p=function(n){return new Du(n)},Kp='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Xl=Kn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(Ut.inlineSvg?Kp+" ":"")+"Leaflet</a>"},initialize:function(n){g(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=Wt("div","leaflet-control-attribution"),Nr(this._container);for(var o in n._layers)n._layers[o].getAttribution&&this.addAttribution(n._layers[o].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var o in this._attributions)this._attributions[o]&&n.push(o);var c=[];this.options.prefix&&c.push(this.options.prefix),n.length&&c.push(n.join(", ")),this._container.innerHTML=c.join(' <span aria-hidden="true">|</span> ')}}});ye.mergeOptions({attributionControl:!0}),ye.addInitHook(function(){this.options.attributionControl&&new Xl().addTo(this)});var Jp=function(n){return new Xl(n)};Kn.Layers=Iu,Kn.Zoom=Zl,Kn.Scale=Du,Kn.Attribution=Xl,Or.layers=qp,Or.zoom=Yp,Or.scale=$p,Or.attribution=Jp;var pi=z.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});pi.addTo=function(n,o){return n.addHandler(o,this),this};var jp={Events:$},Nu=Ut.touch?"touchstart mousedown":"mousedown",Zi=tt.extend({options:{clickTolerance:3},initialize:function(n,o,c,p){g(this,p),this._element=n,this._dragStartTarget=o||n,this._preventOutline=c},enable:function(){this._enabled||(se(this._dragStartTarget,Nu,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Zi._dragging===this&&this.finishDrag(!0),ke(this._dragStartTarget,Nu,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!xe(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){Zi._dragging===this&&this.finishDrag();return}if(!(Zi._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(Zi._dragging=this,this._preventOutline&&Bl(this._element),Ol(),Wi(),!this._moving)){this.fire("down");var o=n.touches?n.touches[0]:n,c=Eu(this._element);this._startPoint=new W(o.clientX,o.clientY),this._startPos=dn(this._element),this._parentScale=Fl(c);var p=n.type==="mousedown";se(document,p?"mousemove":"touchmove",this._onMove,this),se(document,p?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var o=n.touches&&n.touches.length===1?n.touches[0]:n,c=new W(o.clientX,o.clientY)._subtract(this._startPoint);!c.x&&!c.y||Math.abs(c.x)+Math.abs(c.y)<this.options.clickTolerance||(c.x/=this._parentScale.x,c.y/=this._parentScale.y,on(n),this._moved||(this.fire("dragstart"),this._moved=!0,$t(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),$t(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(c),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),Re(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){Ie(document.body,"leaflet-dragging"),this._lastTarget&&(Ie(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),ke(document,"mousemove touchmove",this._onMove,this),ke(document,"mouseup touchend touchcancel",this._onUp,this),Ul(),Ir();var o=this._moved&&this._moving;this._moving=!1,Zi._dragging=!1,o&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function Ou(n,o,c){var p,y=[1,4,2,8],P,F,J,it,ft,Rt,Jt,de;for(P=0,Rt=n.length;P<Rt;P++)n[P]._code=cs(n[P],o);for(J=0;J<4;J++){for(Jt=y[J],p=[],P=0,Rt=n.length,F=Rt-1;P<Rt;F=P++)it=n[P],ft=n[F],it._code&Jt?ft._code&Jt||(de=xo(ft,it,Jt,o,c),de._code=cs(de,o),p.push(de)):(ft._code&Jt&&(de=xo(ft,it,Jt,o,c),de._code=cs(de,o),p.push(de)),p.push(it));n=p}return n}function Uu(n,o){var c,p,y,P,F,J,it,ft,Rt;if(!n||n.length===0)throw new Error("latlngs not passed");Bn(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Jt=K([0,0]),de=yt(n),vn=de.getNorthWest().distanceTo(de.getSouthWest())*de.getNorthEast().distanceTo(de.getNorthWest());vn<1700&&(Jt=ql(n));var tn=n.length,Fn=[];for(c=0;c<tn;c++){var Sn=K(n[c]);Fn.push(o.project(K([Sn.lat-Jt.lat,Sn.lng-Jt.lng])))}for(J=it=ft=0,c=0,p=tn-1;c<tn;p=c++)y=Fn[c],P=Fn[p],F=y.y*P.x-P.y*y.x,it+=(y.x+P.x)*F,ft+=(y.y+P.y)*F,J+=F*3;J===0?Rt=Fn[0]:Rt=[it/J,ft/J];var Hs=o.unproject(V(Rt));return K([Hs.lat+Jt.lat,Hs.lng+Jt.lng])}function ql(n){for(var o=0,c=0,p=0,y=0;y<n.length;y++){var P=K(n[y]);o+=P.lat,c+=P.lng,p++}return K([o/p,c/p])}var Qp={__proto__:null,clipPolygon:Ou,polygonCenter:Uu,centroid:ql};function ku(n,o){if(!o||!n.length)return n.slice();var c=o*o;return n=nm(n,c),n=em(n,c),n}function Bu(n,o,c){return Math.sqrt(Ur(n,o,c,!0))}function tm(n,o,c){return Ur(n,o,c)}function em(n,o){var c=n.length,p=typeof Uint8Array<"u"?Uint8Array:Array,y=new p(c);y[0]=y[c-1]=1,Yl(n,y,o,0,c-1);var P,F=[];for(P=0;P<c;P++)y[P]&&F.push(n[P]);return F}function Yl(n,o,c,p,y){var P=0,F,J,it;for(J=p+1;J<=y-1;J++)it=Ur(n[J],n[p],n[y],!0),it>P&&(F=J,P=it);P>c&&(o[F]=1,Yl(n,o,c,p,F),Yl(n,o,c,F,y))}function nm(n,o){for(var c=[n[0]],p=1,y=0,P=n.length;p<P;p++)im(n[p],n[y])>o&&(c.push(n[p]),y=p);return y<P-1&&c.push(n[P-1]),c}var Fu;function zu(n,o,c,p,y){var P=p?Fu:cs(n,c),F=cs(o,c),J,it,ft;for(Fu=F;;){if(!(P|F))return[n,o];if(P&F)return!1;J=P||F,it=xo(n,o,J,c,y),ft=cs(it,c),J===P?(n=it,P=ft):(o=it,F=ft)}}function xo(n,o,c,p,y){var P=o.x-n.x,F=o.y-n.y,J=p.min,it=p.max,ft,Rt;return c&8?(ft=n.x+P*(it.y-n.y)/F,Rt=it.y):c&4?(ft=n.x+P*(J.y-n.y)/F,Rt=J.y):c&2?(ft=it.x,Rt=n.y+F*(it.x-n.x)/P):c&1&&(ft=J.x,Rt=n.y+F*(J.x-n.x)/P),new W(ft,Rt,y)}function cs(n,o){var c=0;return n.x<o.min.x?c|=1:n.x>o.max.x&&(c|=2),n.y<o.min.y?c|=4:n.y>o.max.y&&(c|=8),c}function im(n,o){var c=o.x-n.x,p=o.y-n.y;return c*c+p*p}function Ur(n,o,c,p){var y=o.x,P=o.y,F=c.x-y,J=c.y-P,it=F*F+J*J,ft;return it>0&&(ft=((n.x-y)*F+(n.y-P)*J)/it,ft>1?(y=c.x,P=c.y):ft>0&&(y+=F*ft,P+=J*ft)),F=n.x-y,J=n.y-P,p?F*F+J*J:new W(y,P)}function Bn(n){return!v(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]<"u"}function Hu(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Bn(n)}function Vu(n,o){var c,p,y,P,F,J,it,ft;if(!n||n.length===0)throw new Error("latlngs not passed");Bn(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Rt=K([0,0]),Jt=yt(n),de=Jt.getNorthWest().distanceTo(Jt.getSouthWest())*Jt.getNorthEast().distanceTo(Jt.getNorthWest());de<1700&&(Rt=ql(n));var vn=n.length,tn=[];for(c=0;c<vn;c++){var Fn=K(n[c]);tn.push(o.project(K([Fn.lat-Rt.lat,Fn.lng-Rt.lng])))}for(c=0,p=0;c<vn-1;c++)p+=tn[c].distanceTo(tn[c+1])/2;if(p===0)ft=tn[0];else for(c=0,P=0;c<vn-1;c++)if(F=tn[c],J=tn[c+1],y=F.distanceTo(J),P+=y,P>p){it=(P-p)/y,ft=[J.x-it*(J.x-F.x),J.y-it*(J.y-F.y)];break}var Sn=o.unproject(V(ft));return K([Sn.lat+Rt.lat,Sn.lng+Rt.lng])}var sm={__proto__:null,simplify:ku,pointToSegmentDistance:Bu,closestPointOnSegment:tm,clipSegment:zu,_getEdgeIntersection:xo,_getBitCode:cs,_sqClosestPointOnSegment:Ur,isFlat:Bn,_flat:Hu,polylineCenter:Vu},$l={project:function(n){return new W(n.lng,n.lat)},unproject:function(n){return new bt(n.y,n.x)},bounds:new lt([-180,-90],[180,90])},Kl={R:6378137,R_MINOR:6356752314245179e-9,bounds:new lt([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var o=Math.PI/180,c=this.R,p=n.lat*o,y=this.R_MINOR/c,P=Math.sqrt(1-y*y),F=P*Math.sin(p),J=Math.tan(Math.PI/4-p/2)/Math.pow((1-F)/(1+F),P/2);return p=-c*Math.log(Math.max(J,1e-10)),new W(n.lng*o*c,p)},unproject:function(n){for(var o=180/Math.PI,c=this.R,p=this.R_MINOR/c,y=Math.sqrt(1-p*p),P=Math.exp(-n.y/c),F=Math.PI/2-2*Math.atan(P),J=0,it=.1,ft;J<15&&Math.abs(it)>1e-7;J++)ft=y*Math.sin(F),ft=Math.pow((1-ft)/(1+ft),y/2),it=Math.PI/2-2*Math.atan(P*ft)-F,F+=it;return new bt(F*o,n.x*o/c)}},rm={__proto__:null,LonLat:$l,Mercator:Kl,SphericalMercator:Xt},om=e({},Mt,{code:"EPSG:3395",projection:Kl,transformation:(function(){var n=.5/(Math.PI*Kl.R);return rt(n,.5,-n,.5)})()}),Gu=e({},Mt,{code:"EPSG:4326",projection:$l,transformation:rt(1/180,1,-1/180,.5)}),am=e({},pt,{projection:$l,transformation:rt(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,o){var c=o.lng-n.lng,p=o.lat-n.lat;return Math.sqrt(c*c+p*p)},infinite:!0});pt.Earth=Mt,pt.EPSG3395=om,pt.EPSG3857=It,pt.EPSG900913=qt,pt.EPSG4326=Gu,pt.Simple=am;var Jn=tt.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[l(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[l(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var o=n.target;if(o.hasLayer(this)){if(this._map=o,this._zoomAnimated=o._zoomAnimated,this.getEvents){var c=this.getEvents();o.on(c,this),this.once("remove",function(){o.off(c,this)},this)}this.onAdd(o),this.fire("add"),o.fire("layeradd",{layer:this})}}});ye.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var o=l(n);return this._layers[o]?this:(this._layers[o]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var o=l(n);return this._layers[o]?(this._loaded&&n.onRemove(this),delete this._layers[o],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return l(n)in this._layers},eachLayer:function(n,o){for(var c in this._layers)n.call(o,this._layers[c]);return this},_addLayers:function(n){n=n?v(n)?n:[n]:[];for(var o=0,c=n.length;o<c;o++)this.addLayer(n[o])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[l(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var o=l(n);this._zoomBoundLayers[o]&&(delete this._zoomBoundLayers[o],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,o=-1/0,c=this._getZoomSpan();for(var p in this._zoomBoundLayers){var y=this._zoomBoundLayers[p].options;n=y.minZoom===void 0?n:Math.min(n,y.minZoom),o=y.maxZoom===void 0?o:Math.max(o,y.maxZoom)}this._layersMaxZoom=o===-1/0?void 0:o,this._layersMinZoom=n===1/0?void 0:n,c!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Us=Jn.extend({initialize:function(n,o){g(this,o),this._layers={};var c,p;if(n)for(c=0,p=n.length;c<p;c++)this.addLayer(n[c])},addLayer:function(n){var o=this.getLayerId(n);return this._layers[o]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var o=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[o]&&this._map.removeLayer(this._layers[o]),delete this._layers[o],this},hasLayer:function(n){var o=typeof n=="number"?n:this.getLayerId(n);return o in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var o=Array.prototype.slice.call(arguments,1),c,p;for(c in this._layers)p=this._layers[c],p[n]&&p[n].apply(p,o);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,o){for(var c in this._layers)n.call(o,this._layers[c]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return l(n)}}),lm=function(n,o){return new Us(n,o)},Si=Us.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),Us.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),Us.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new ot;for(var o in this._layers){var c=this._layers[o];n.extend(c.getBounds?c.getBounds():c.getLatLng())}return n}}),cm=function(n,o){return new Si(n,o)},ks=z.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){g(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,o){var c=this._getIconUrl(n);if(!c){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var p=this._createImg(c,o&&o.tagName==="IMG"?o:null);return this._setIconStyles(p,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(p.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),p},_setIconStyles:function(n,o){var c=this.options,p=c[o+"Size"];typeof p=="number"&&(p=[p,p]);var y=V(p),P=V(o==="shadow"&&c.shadowAnchor||c.iconAnchor||y&&y.divideBy(2,!0));n.className="leaflet-marker-"+o+" "+(c.className||""),P&&(n.style.marginLeft=-P.x+"px",n.style.marginTop=-P.y+"px"),y&&(n.style.width=y.x+"px",n.style.height=y.y+"px")},_createImg:function(n,o){return o=o||document.createElement("img"),o.src=n,o},_getIconUrl:function(n){return Ut.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function hm(n){return new ks(n)}var kr=ks.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof kr.imagePath!="string"&&(kr.imagePath=this._detectIconPath()),(this.options.imagePath||kr.imagePath)+ks.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var o=function(c,p,y){var P=p.exec(c);return P&&P[y]};return n=o(n,/^url\((['"])?(.+)\1\)$/,2),n&&o(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=Wt("div","leaflet-default-icon-path",document.body),o=Te(n,"background-image")||Te(n,"backgroundImage");if(document.body.removeChild(n),o=this._stripUrl(o),o)return o;var c=document.querySelector('link[href$="leaflet.css"]');return c?c.href.substring(0,c.href.length-11-1):""}}),Wu=pi.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new Zi(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),$t(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Ie(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var o=this._marker,c=o._map,p=this._marker.options.autoPanSpeed,y=this._marker.options.autoPanPadding,P=dn(o._icon),F=c.getPixelBounds(),J=c.getPixelOrigin(),it=st(F.min._subtract(J).add(y),F.max._subtract(J).subtract(y));if(!it.contains(P)){var ft=V((Math.max(it.max.x,P.x)-it.max.x)/(F.max.x-it.max.x)-(Math.min(it.min.x,P.x)-it.min.x)/(F.min.x-it.min.x),(Math.max(it.max.y,P.y)-it.max.y)/(F.max.y-it.max.y)-(Math.min(it.min.y,P.y)-it.min.y)/(F.min.y-it.min.y)).multiplyBy(p);c.panBy(ft,{animate:!1}),this._draggable._newPos._add(ft),this._draggable._startPos._add(ft),Re(o._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=A(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(E(this._panRequest),this._panRequest=A(this._adjustPan.bind(this,n)))},_onDrag:function(n){var o=this._marker,c=o._shadow,p=dn(o._icon),y=o._map.layerPointToLatLng(p);c&&Re(c,p),o._latlng=y,n.latlng=y,n.oldLatLng=this._oldLatLng,o.fire("move",n).fire("drag",n)},_onDragEnd:function(n){E(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),yo=Jn.extend({options:{icon:new kr,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,o){g(this,o),this._latlng=K(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var o=this._latlng;return this._latlng=K(n),this.update(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,o="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),c=n.icon.createIcon(this._icon),p=!1;c!==this._icon&&(this._icon&&this._removeIcon(),p=!0,n.title&&(c.title=n.title),c.tagName==="IMG"&&(c.alt=n.alt||"")),$t(c,o),n.keyboard&&(c.tabIndex="0",c.setAttribute("role","button")),this._icon=c,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&se(c,"focus",this._panOnFocus,this);var y=n.icon.createShadow(this._shadow),P=!1;y!==this._shadow&&(this._removeShadow(),P=!0),y&&($t(y,o),y.alt=""),this._shadow=y,n.opacity<1&&this._updateOpacity(),p&&this.getPane().appendChild(this._icon),this._initInteraction(),y&&P&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ke(this._icon,"focus",this._panOnFocus,this),he(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&he(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&Re(this._icon,n),this._shadow&&Re(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(o)},_initInteraction:function(){if(this.options.interactive&&($t(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Wu)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Wu(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&ue(this._icon,n),this._shadow&&ue(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var o=this.options.icon.options,c=o.iconSize?V(o.iconSize):V(0,0),p=o.iconAnchor?V(o.iconAnchor):V(0,0);n.panInside(this._latlng,{paddingTopLeft:p,paddingBottomRight:c.subtract(p)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function um(n,o){return new yo(n,o)}var Xi=Jn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return g(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),bo=Xi.extend({options:{fill:!0,radius:10},initialize:function(n,o){g(this,o),this._latlng=K(n),this._radius=this.options.radius},setLatLng:function(n){var o=this._latlng;return this._latlng=K(n),this.redraw(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var o=n&&n.radius||this._radius;return Xi.prototype.setStyle.call(this,n),this.setRadius(o),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,o=this._radiusY||n,c=this._clickTolerance(),p=[n+c,o+c];this._pxBounds=new lt(this._point.subtract(p),this._point.add(p))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function dm(n,o){return new bo(n,o)}var Jl=bo.extend({initialize:function(n,o,c){if(typeof o=="number"&&(o=e({},c,{radius:o})),g(this,o),this._latlng=K(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new ot(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:Xi.prototype.setStyle,_project:function(){var n=this._latlng.lng,o=this._latlng.lat,c=this._map,p=c.options.crs;if(p.distance===Mt.distance){var y=Math.PI/180,P=this._mRadius/Mt.R/y,F=c.project([o+P,n]),J=c.project([o-P,n]),it=F.add(J).divideBy(2),ft=c.unproject(it).lat,Rt=Math.acos((Math.cos(P*y)-Math.sin(o*y)*Math.sin(ft*y))/(Math.cos(o*y)*Math.cos(ft*y)))/y;(isNaN(Rt)||Rt===0)&&(Rt=P/Math.cos(Math.PI/180*o)),this._point=it.subtract(c.getPixelOrigin()),this._radius=isNaN(Rt)?0:it.x-c.project([ft,n-Rt]).x,this._radiusY=it.y-F.y}else{var Jt=p.unproject(p.project(this._latlng).subtract([this._mRadius,0]));this._point=c.latLngToLayerPoint(this._latlng),this._radius=this._point.x-c.latLngToLayerPoint(Jt).x}this._updateBounds()}});function fm(n,o,c){return new Jl(n,o,c)}var wi=Xi.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,o){g(this,o),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var o=1/0,c=null,p=Ur,y,P,F=0,J=this._parts.length;F<J;F++)for(var it=this._parts[F],ft=1,Rt=it.length;ft<Rt;ft++){y=it[ft-1],P=it[ft];var Jt=p(n,y,P,!0);Jt<o&&(o=Jt,c=p(n,y,P))}return c&&(c.distance=Math.sqrt(o)),c},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Vu(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,o){return o=o||this._defaultShape(),n=K(n),o.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new ot,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return Bn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var o=[],c=Bn(n),p=0,y=n.length;p<y;p++)c?(o[p]=K(n[p]),this._bounds.extend(o[p])):o[p]=this._convertLatLngs(n[p]);return o},_project:function(){var n=new lt;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),o=new W(n,n);this._rawPxBounds&&(this._pxBounds=new lt([this._rawPxBounds.min.subtract(o),this._rawPxBounds.max.add(o)]))},_projectLatlngs:function(n,o,c){var p=n[0]instanceof bt,y=n.length,P,F;if(p){for(F=[],P=0;P<y;P++)F[P]=this._map.latLngToLayerPoint(n[P]),c.extend(F[P]);o.push(F)}else for(P=0;P<y;P++)this._projectLatlngs(n[P],o,c)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var o=this._parts,c,p,y,P,F,J,it;for(c=0,y=0,P=this._rings.length;c<P;c++)for(it=this._rings[c],p=0,F=it.length;p<F-1;p++)J=zu(it[p],it[p+1],n,p,!0),J&&(o[y]=o[y]||[],o[y].push(J[0]),(J[1]!==it[p+1]||p===F-2)&&(o[y].push(J[1]),y++))}},_simplifyPoints:function(){for(var n=this._parts,o=this.options.smoothFactor,c=0,p=n.length;c<p;c++)n[c]=ku(n[c],o)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,o){var c,p,y,P,F,J,it=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(c=0,P=this._parts.length;c<P;c++)for(J=this._parts[c],p=0,F=J.length,y=F-1;p<F;y=p++)if(!(!o&&p===0)&&Bu(n,J[y],J[p])<=it)return!0;return!1}});function pm(n,o){return new wi(n,o)}wi._flat=Hu;var Bs=wi.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Uu(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var o=wi.prototype._convertLatLngs.call(this,n),c=o.length;return c>=2&&o[0]instanceof bt&&o[0].equals(o[c-1])&&o.pop(),o},_setLatLngs:function(n){wi.prototype._setLatLngs.call(this,n),Bn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Bn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,o=this.options.weight,c=new W(o,o);if(n=new lt(n.min.subtract(c),n.max.add(c)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var p=0,y=this._rings.length,P;p<y;p++)P=Ou(this._rings[p],n,!0),P.length&&this._parts.push(P)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var o=!1,c,p,y,P,F,J,it,ft;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(P=0,it=this._parts.length;P<it;P++)for(c=this._parts[P],F=0,ft=c.length,J=ft-1;F<ft;J=F++)p=c[F],y=c[J],p.y>n.y!=y.y>n.y&&n.x<(y.x-p.x)*(n.y-p.y)/(y.y-p.y)+p.x&&(o=!o);return o||wi.prototype._containsPoint.call(this,n,!0)}});function mm(n,o){return new Bs(n,o)}var Ti=Si.extend({initialize:function(n,o){g(this,o),this._layers={},n&&this.addData(n)},addData:function(n){var o=v(n)?n:n.features,c,p,y;if(o){for(c=0,p=o.length;c<p;c++)y=o[c],(y.geometries||y.geometry||y.features||y.coordinates)&&this.addData(y);return this}var P=this.options;if(P.filter&&!P.filter(n))return this;var F=Mo(n,P);return F?(F.feature=To(n),F.defaultOptions=F.options,this.resetStyle(F),P.onEachFeature&&P.onEachFeature(n,F),this.addLayer(F)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=e({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(o){this._setLayerStyle(o,n)},this)},_setLayerStyle:function(n,o){n.setStyle&&(typeof o=="function"&&(o=o(n.feature)),n.setStyle(o))}});function Mo(n,o){var c=n.type==="Feature"?n.geometry:n,p=c?c.coordinates:null,y=[],P=o&&o.pointToLayer,F=o&&o.coordsToLatLng||jl,J,it,ft,Rt;if(!p&&!c)return null;switch(c.type){case"Point":return J=F(p),Zu(P,n,J,o);case"MultiPoint":for(ft=0,Rt=p.length;ft<Rt;ft++)J=F(p[ft]),y.push(Zu(P,n,J,o));return new Si(y);case"LineString":case"MultiLineString":return it=So(p,c.type==="LineString"?0:1,F),new wi(it,o);case"Polygon":case"MultiPolygon":return it=So(p,c.type==="Polygon"?1:2,F),new Bs(it,o);case"GeometryCollection":for(ft=0,Rt=c.geometries.length;ft<Rt;ft++){var Jt=Mo({geometry:c.geometries[ft],type:"Feature",properties:n.properties},o);Jt&&y.push(Jt)}return new Si(y);case"FeatureCollection":for(ft=0,Rt=c.features.length;ft<Rt;ft++){var de=Mo(c.features[ft],o);de&&y.push(de)}return new Si(y);default:throw new Error("Invalid GeoJSON object.")}}function Zu(n,o,c,p){return n?n(o,c):new yo(c,p&&p.markersInheritOptions&&p)}function jl(n){return new bt(n[1],n[0],n[2])}function So(n,o,c){for(var p=[],y=0,P=n.length,F;y<P;y++)F=o?So(n[y],o-1,c):(c||jl)(n[y]),p.push(F);return p}function Ql(n,o){return n=K(n),n.alt!==void 0?[m(n.lng,o),m(n.lat,o),m(n.alt,o)]:[m(n.lng,o),m(n.lat,o)]}function wo(n,o,c,p){for(var y=[],P=0,F=n.length;P<F;P++)y.push(o?wo(n[P],Bn(n[P])?0:o-1,c,p):Ql(n[P],p));return!o&&c&&y.length>0&&y.push(y[0].slice()),y}function Fs(n,o){return n.feature?e({},n.feature,{geometry:o}):To(o)}function To(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var tc={toGeoJSON:function(n){return Fs(this,{type:"Point",coordinates:Ql(this.getLatLng(),n)})}};yo.include(tc),Jl.include(tc),bo.include(tc),wi.include({toGeoJSON:function(n){var o=!Bn(this._latlngs),c=wo(this._latlngs,o?1:0,!1,n);return Fs(this,{type:(o?"Multi":"")+"LineString",coordinates:c})}}),Bs.include({toGeoJSON:function(n){var o=!Bn(this._latlngs),c=o&&!Bn(this._latlngs[0]),p=wo(this._latlngs,c?2:o?1:0,!0,n);return o||(p=[p]),Fs(this,{type:(c?"Multi":"")+"Polygon",coordinates:p})}}),Us.include({toMultiPoint:function(n){var o=[];return this.eachLayer(function(c){o.push(c.toGeoJSON(n).geometry.coordinates)}),Fs(this,{type:"MultiPoint",coordinates:o})},toGeoJSON:function(n){var o=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(o==="MultiPoint")return this.toMultiPoint(n);var c=o==="GeometryCollection",p=[];return this.eachLayer(function(y){if(y.toGeoJSON){var P=y.toGeoJSON(n);if(c)p.push(P.geometry);else{var F=To(P);F.type==="FeatureCollection"?p.push.apply(p,F.features):p.push(F)}}}),c?Fs(this,{geometries:p,type:"GeometryCollection"}):{type:"FeatureCollection",features:p}}});function Xu(n,o){return new Ti(n,o)}var gm=Xu,Eo=Jn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,o,c){this._url=n,this._bounds=yt(o),g(this,c)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&($t(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){he(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&Bt(this._image),this},bringToBack:function(){return this._map&&un(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=yt(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",o=this._image=n?this._url:Wt("img");if($t(o,"leaflet-image-layer"),this._zoomAnimated&&$t(o,"leaflet-zoom-animated"),this.options.className&&$t(o,this.options.className),o.onselectstart=f,o.onmousemove=f,o.onload=r(this.fire,this,"load"),o.onerror=r(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=o.src;return}o.src=this._url,o.alt=this.options.alt},_animateZoom:function(n){var o=this._map.getZoomScale(n.zoom),c=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;Ye(this._image,c,o)},_reset:function(){var n=this._image,o=new lt(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),c=o.getSize();Re(n,o.min),n.style.width=c.x+"px",n.style.height=c.y+"px"},_updateOpacity:function(){ue(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),_m=function(n,o,c){return new Eo(n,o,c)},qu=Eo.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",o=this._image=n?this._url:Wt("video");if($t(o,"leaflet-image-layer"),this._zoomAnimated&&$t(o,"leaflet-zoom-animated"),this.options.className&&$t(o,this.options.className),o.onselectstart=f,o.onmousemove=f,o.onloadeddata=r(this.fire,this,"load"),n){for(var c=o.getElementsByTagName("source"),p=[],y=0;y<c.length;y++)p.push(c[y].src);this._url=c.length>0?p:[o.src];return}v(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(o.style,"objectFit")&&(o.style.objectFit="fill"),o.autoplay=!!this.options.autoplay,o.loop=!!this.options.loop,o.muted=!!this.options.muted,o.playsInline=!!this.options.playsInline;for(var P=0;P<this._url.length;P++){var F=Wt("source");F.src=this._url[P],o.appendChild(F)}}});function vm(n,o,c){return new qu(n,o,c)}var Yu=Eo.extend({_initImage:function(){var n=this._image=this._url;$t(n,"leaflet-image-layer"),this._zoomAnimated&&$t(n,"leaflet-zoom-animated"),this.options.className&&$t(n,this.options.className),n.onselectstart=f,n.onmousemove=f}});function xm(n,o,c){return new Yu(n,o,c)}var mi=Jn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,o){n&&(n instanceof bt||v(n))?(this._latlng=K(n),g(this,o)):(g(this,n),this._source=o),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&ue(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&ue(this._container,1),this.bringToFront(),this.options.interactive&&($t(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?(ue(this._container,0),this._removeTimeout=setTimeout(r(he,void 0,this._container),200)):he(this._container),this.options.interactive&&(Ie(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=K(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Bt(this._container),this},bringToBack:function(){return this._map&&un(this._container),this},_prepareOpen:function(n){var o=this._source;if(!o._map)return!1;if(o instanceof Si){o=null;var c=this._source._layers;for(var p in c)if(c[p]._map){o=c[p];break}if(!o)return!1;this._source=o}if(!n)if(o.getCenter)n=o.getCenter();else if(o.getLatLng)n=o.getLatLng();else if(o.getBounds)n=o.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,o=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof o=="string")n.innerHTML=o;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(o)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),o=V(this.options.offset),c=this._getAnchor();this._zoomAnimated?Re(this._container,n.add(c)):o=o.add(n).add(c);var p=this._containerBottom=-o.y,y=this._containerLeft=-Math.round(this._containerWidth/2)+o.x;this._container.style.bottom=p+"px",this._container.style.left=y+"px"}},_getAnchor:function(){return[0,0]}});ye.include({_initOverlay:function(n,o,c,p){var y=o;return y instanceof n||(y=new n(p).setContent(o)),c&&y.setLatLng(c),y}}),Jn.include({_initOverlay:function(n,o,c,p){var y=c;return y instanceof n?(g(y,p),y._source=this):(y=o&&!p?o:new n(p,this),y.setContent(c)),y}});var Ao=mi.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,mi.prototype.openOn.call(this,n)},onAdd:function(n){mi.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Xi||this._source.on("preclick",as))},onRemove:function(n){mi.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Xi||this._source.off("preclick",as))},getEvents:function(){var n=mi.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",o=this._container=Wt("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),c=this._wrapper=Wt("div",n+"-content-wrapper",o);if(this._contentNode=Wt("div",n+"-content",c),Nr(o),Gl(this._contentNode),se(o,"contextmenu",as),this._tipContainer=Wt("div",n+"-tip-container",o),this._tip=Wt("div",n+"-tip",this._tipContainer),this.options.closeButton){var p=this._closeButton=Wt("a",n+"-close-button",o);p.setAttribute("role","button"),p.setAttribute("aria-label","Close popup"),p.href="#close",p.innerHTML='<span aria-hidden="true">&#215;</span>',se(p,"click",function(y){on(y),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,o=n.style;o.width="",o.whiteSpace="nowrap";var c=n.offsetWidth;c=Math.min(c,this.options.maxWidth),c=Math.max(c,this.options.minWidth),o.width=c+1+"px",o.whiteSpace="",o.height="";var p=n.offsetHeight,y=this.options.maxHeight,P="leaflet-popup-scrolled";y&&p>y?(o.height=y+"px",$t(n,P)):Ie(n,P),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),c=this._getAnchor();Re(this._container,o.add(c))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,o=parseInt(Te(this._container,"marginBottom"),10)||0,c=this._container.offsetHeight+o,p=this._containerWidth,y=new W(this._containerLeft,-c-this._containerBottom);y._add(dn(this._container));var P=n.layerPointToContainerPoint(y),F=V(this.options.autoPanPadding),J=V(this.options.autoPanPaddingTopLeft||F),it=V(this.options.autoPanPaddingBottomRight||F),ft=n.getSize(),Rt=0,Jt=0;P.x+p+it.x>ft.x&&(Rt=P.x+p-ft.x+it.x),P.x-Rt-J.x<0&&(Rt=P.x-J.x),P.y+c+it.y>ft.y&&(Jt=P.y+c-ft.y+it.y),P.y-Jt-J.y<0&&(Jt=P.y-J.y),(Rt||Jt)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([Rt,Jt]))}},_getAnchor:function(){return V(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),ym=function(n,o){return new Ao(n,o)};ye.mergeOptions({closePopupOnClick:!0}),ye.include({openPopup:function(n,o,c){return this._initOverlay(Ao,n,o,c).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),Jn.include({bindPopup:function(n,o){return this._popup=this._initOverlay(Ao,this._popup,n,o),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof Si||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){ls(n);var o=n.layer||n.target;if(this._popup._source===o&&!(o instanceof Xi)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=o,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var Po=mi.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){mi.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){mi.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=mi.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",o=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Wt("div",o),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+l(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var o,c,p=this._map,y=this._container,P=p.latLngToContainerPoint(p.getCenter()),F=p.layerPointToContainerPoint(n),J=this.options.direction,it=y.offsetWidth,ft=y.offsetHeight,Rt=V(this.options.offset),Jt=this._getAnchor();J==="top"?(o=it/2,c=ft):J==="bottom"?(o=it/2,c=0):J==="center"?(o=it/2,c=ft/2):J==="right"?(o=0,c=ft/2):J==="left"?(o=it,c=ft/2):F.x<P.x?(J="right",o=0,c=ft/2):(J="left",o=it+(Rt.x+Jt.x)*2,c=ft/2),n=n.subtract(V(o,c,!0)).add(Rt).add(Jt),Ie(y,"leaflet-tooltip-right"),Ie(y,"leaflet-tooltip-left"),Ie(y,"leaflet-tooltip-top"),Ie(y,"leaflet-tooltip-bottom"),$t(y,"leaflet-tooltip-"+J),Re(y,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&ue(this._container,n)},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(o)},_getAnchor:function(){return V(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),bm=function(n,o){return new Po(n,o)};ye.include({openTooltip:function(n,o,c){return this._initOverlay(Po,n,o,c).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),Jn.include({bindTooltip:function(n,o){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Po,this._tooltip,n,o),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var o=n?"off":"on",c={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?c.add=this._openTooltip:(c.mouseover=this._openTooltip,c.mouseout=this.closeTooltip,c.click=this._openTooltip,this._map?this._addFocusListeners():c.add=this._addFocusListeners),this._tooltip.options.sticky&&(c.mousemove=this._moveTooltip),this[o](c),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof Si||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var o=typeof n.getElement=="function"&&n.getElement();o&&(se(o,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),se(o,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var o=typeof n.getElement=="function"&&n.getElement();o&&o.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var o=this;this._map.once("moveend",function(){o._openOnceFlag=!1,o._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var o=n.latlng,c,p;this._tooltip.options.sticky&&n.originalEvent&&(c=this._map.mouseEventToContainerPoint(n.originalEvent),p=this._map.containerPointToLayerPoint(c),o=this._map.layerPointToLatLng(p)),this._tooltip.setLatLng(o)}});var $u=ks.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var o=n&&n.tagName==="DIV"?n:document.createElement("div"),c=this.options;if(c.html instanceof Element?(_e(o),o.appendChild(c.html)):o.innerHTML=c.html!==!1?c.html:"",c.bgPos){var p=V(c.bgPos);o.style.backgroundPosition=-p.x+"px "+-p.y+"px"}return this._setIconStyles(o,"icon"),o},createShadow:function(){return null}});function Mm(n){return new $u(n)}ks.Default=kr;var Br=Jn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Ut.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){g(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),he(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Bt(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(un(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=h(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof W?n:new W(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var o=this.getPane().children,c=-n(-1/0,1/0),p=0,y=o.length,P;p<y;p++)P=o[p].style.zIndex,o[p]!==this._container&&P&&(c=n(c,+P));isFinite(c)&&(this.options.zIndex=c+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Ut.ielt9){ue(this._container,this.options.opacity);var n=+new Date,o=!1,c=!1;for(var p in this._tiles){var y=this._tiles[p];if(!(!y.current||!y.loaded)){var P=Math.min(1,(n-y.loaded)/200);ue(y.el,P),P<1?o=!0:(y.active?c=!0:this._onOpaqueTile(y),y.active=!0)}}c&&!this._noPrune&&this._pruneTiles(),o&&(E(this._fadeFrame),this._fadeFrame=A(this._updateOpacity,this))}},_onOpaqueTile:f,_initContainer:function(){this._container||(this._container=Wt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,o=this.options.maxZoom;if(n!==void 0){for(var c in this._levels)c=Number(c),this._levels[c].el.children.length||c===n?(this._levels[c].el.style.zIndex=o-Math.abs(n-c),this._onUpdateLevel(c)):(he(this._levels[c].el),this._removeTilesAtZoom(c),this._onRemoveLevel(c),delete this._levels[c]);var p=this._levels[n],y=this._map;return p||(p=this._levels[n]={},p.el=Wt("div","leaflet-tile-container leaflet-zoom-animated",this._container),p.el.style.zIndex=o,p.origin=y.project(y.unproject(y.getPixelOrigin()),n).round(),p.zoom=n,this._setZoomTransform(p,y.getCenter(),y.getZoom()),f(p.el.offsetWidth),this._onCreateLevel(p)),this._level=p,p}},_onUpdateLevel:f,_onRemoveLevel:f,_onCreateLevel:f,_pruneTiles:function(){if(this._map){var n,o,c=this._map.getZoom();if(c>this.options.maxZoom||c<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)o=this._tiles[n],o.retain=o.current;for(n in this._tiles)if(o=this._tiles[n],o.current&&!o.active){var p=o.coords;this._retainParent(p.x,p.y,p.z,p.z-5)||this._retainChildren(p.x,p.y,p.z,p.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var o in this._tiles)this._tiles[o].coords.z===n&&this._removeTile(o)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)he(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,o,c,p){var y=Math.floor(n/2),P=Math.floor(o/2),F=c-1,J=new W(+y,+P);J.z=+F;var it=this._tileCoordsToKey(J),ft=this._tiles[it];return ft&&ft.active?(ft.retain=!0,!0):(ft&&ft.loaded&&(ft.retain=!0),F>p?this._retainParent(y,P,F,p):!1)},_retainChildren:function(n,o,c,p){for(var y=2*n;y<2*n+2;y++)for(var P=2*o;P<2*o+2;P++){var F=new W(y,P);F.z=c+1;var J=this._tileCoordsToKey(F),it=this._tiles[J];if(it&&it.active){it.retain=!0;continue}else it&&it.loaded&&(it.retain=!0);c+1<p&&this._retainChildren(y,P,c+1,p)}},_resetView:function(n){var o=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),o,o)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var o=this.options;return o.minNativeZoom!==void 0&&n<o.minNativeZoom?o.minNativeZoom:o.maxNativeZoom!==void 0&&o.maxNativeZoom<n?o.maxNativeZoom:n},_setView:function(n,o,c,p){var y=Math.round(o);this.options.maxZoom!==void 0&&y>this.options.maxZoom||this.options.minZoom!==void 0&&y<this.options.minZoom?y=void 0:y=this._clampZoom(y);var P=this.options.updateWhenZooming&&y!==this._tileZoom;(!p||P)&&(this._tileZoom=y,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),y!==void 0&&this._update(n),c||this._pruneTiles(),this._noPrune=!!c),this._setZoomTransforms(n,o)},_setZoomTransforms:function(n,o){for(var c in this._levels)this._setZoomTransform(this._levels[c],n,o)},_setZoomTransform:function(n,o,c){var p=this._map.getZoomScale(c,n.zoom),y=n.origin.multiplyBy(p).subtract(this._map._getNewPixelOrigin(o,c)).round();Ut.any3d?Ye(n.el,y,p):Re(n.el,y)},_resetGrid:function(){var n=this._map,o=n.options.crs,c=this._tileSize=this.getTileSize(),p=this._tileZoom,y=this._map.getPixelWorldBounds(this._tileZoom);y&&(this._globalTileRange=this._pxBoundsToTileRange(y)),this._wrapX=o.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,o.wrapLng[0]],p).x/c.x),Math.ceil(n.project([0,o.wrapLng[1]],p).x/c.y)],this._wrapY=o.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([o.wrapLat[0],0],p).y/c.x),Math.ceil(n.project([o.wrapLat[1],0],p).y/c.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var o=this._map,c=o._animatingZoom?Math.max(o._animateToZoom,o.getZoom()):o.getZoom(),p=o.getZoomScale(c,this._tileZoom),y=o.project(n,this._tileZoom).floor(),P=o.getSize().divideBy(p*2);return new lt(y.subtract(P),y.add(P))},_update:function(n){var o=this._map;if(o){var c=this._clampZoom(o.getZoom());if(n===void 0&&(n=o.getCenter()),this._tileZoom!==void 0){var p=this._getTiledPixelBounds(n),y=this._pxBoundsToTileRange(p),P=y.getCenter(),F=[],J=this.options.keepBuffer,it=new lt(y.getBottomLeft().subtract([J,-J]),y.getTopRight().add([J,-J]));if(!(isFinite(y.min.x)&&isFinite(y.min.y)&&isFinite(y.max.x)&&isFinite(y.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var ft in this._tiles){var Rt=this._tiles[ft].coords;(Rt.z!==this._tileZoom||!it.contains(new W(Rt.x,Rt.y)))&&(this._tiles[ft].current=!1)}if(Math.abs(c-this._tileZoom)>1){this._setView(n,c);return}for(var Jt=y.min.y;Jt<=y.max.y;Jt++)for(var de=y.min.x;de<=y.max.x;de++){var vn=new W(de,Jt);if(vn.z=this._tileZoom,!!this._isValidTile(vn)){var tn=this._tiles[this._tileCoordsToKey(vn)];tn?tn.current=!0:F.push(vn)}}if(F.sort(function(Sn,Hs){return Sn.distanceTo(P)-Hs.distanceTo(P)}),F.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Fn=document.createDocumentFragment();for(de=0;de<F.length;de++)this._addTile(F[de],Fn);this._level.el.appendChild(Fn)}}}},_isValidTile:function(n){var o=this._map.options.crs;if(!o.infinite){var c=this._globalTileRange;if(!o.wrapLng&&(n.x<c.min.x||n.x>c.max.x)||!o.wrapLat&&(n.y<c.min.y||n.y>c.max.y))return!1}if(!this.options.bounds)return!0;var p=this._tileCoordsToBounds(n);return yt(this.options.bounds).overlaps(p)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var o=this._map,c=this.getTileSize(),p=n.scaleBy(c),y=p.add(c),P=o.unproject(p,n.z),F=o.unproject(y,n.z);return[P,F]},_tileCoordsToBounds:function(n){var o=this._tileCoordsToNwSe(n),c=new ot(o[0],o[1]);return this.options.noWrap||(c=this._map.wrapLatLngBounds(c)),c},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var o=n.split(":"),c=new W(+o[0],+o[1]);return c.z=+o[2],c},_removeTile:function(n){var o=this._tiles[n];o&&(he(o.el),delete this._tiles[n],this.fire("tileunload",{tile:o.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){$t(n,"leaflet-tile");var o=this.getTileSize();n.style.width=o.x+"px",n.style.height=o.y+"px",n.onselectstart=f,n.onmousemove=f,Ut.ielt9&&this.options.opacity<1&&ue(n,this.options.opacity)},_addTile:function(n,o){var c=this._getTilePos(n),p=this._tileCoordsToKey(n),y=this.createTile(this._wrapCoords(n),r(this._tileReady,this,n));this._initTile(y),this.createTile.length<2&&A(r(this._tileReady,this,n,null,y)),Re(y,c),this._tiles[p]={el:y,coords:n,current:!0},o.appendChild(y),this.fire("tileloadstart",{tile:y,coords:n})},_tileReady:function(n,o,c){o&&this.fire("tileerror",{error:o,tile:c,coords:n});var p=this._tileCoordsToKey(n);c=this._tiles[p],c&&(c.loaded=+new Date,this._map._fadeAnimated?(ue(c.el,0),E(this._fadeFrame),this._fadeFrame=A(this._updateOpacity,this)):(c.active=!0,this._pruneTiles()),o||($t(c.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:c.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Ut.ielt9||!this._map._fadeAnimated?A(this._pruneTiles,this):setTimeout(r(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var o=new W(this._wrapX?u(n.x,this._wrapX):n.x,this._wrapY?u(n.y,this._wrapY):n.y);return o.z=n.z,o},_pxBoundsToTileRange:function(n){var o=this.getTileSize();return new lt(n.min.unscaleBy(o).floor(),n.max.unscaleBy(o).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function Sm(n){return new Br(n)}var zs=Br.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,o){this._url=n,o=g(this,o),o.detectRetina&&Ut.retina&&o.maxZoom>0?(o.tileSize=Math.floor(o.tileSize/2),o.zoomReverse?(o.zoomOffset--,o.minZoom=Math.min(o.maxZoom,o.minZoom+1)):(o.zoomOffset++,o.maxZoom=Math.max(o.minZoom,o.maxZoom-1)),o.minZoom=Math.max(0,o.minZoom)):o.zoomReverse?o.minZoom=Math.min(o.maxZoom,o.minZoom):o.maxZoom=Math.max(o.minZoom,o.maxZoom),typeof o.subdomains=="string"&&(o.subdomains=o.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,o){return this._url===n&&o===void 0&&(o=!0),this._url=n,o||this.redraw(),this},createTile:function(n,o){var c=document.createElement("img");return se(c,"load",r(this._tileOnLoad,this,o,c)),se(c,"error",r(this._tileOnError,this,o,c)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(c.referrerPolicy=this.options.referrerPolicy),c.alt="",c.src=this.getTileUrl(n),c},getTileUrl:function(n){var o={r:Ut.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var c=this._globalTileRange.max.y-n.y;this.options.tms&&(o.y=c),o["-y"]=c}return x(this._url,e(o,this.options))},_tileOnLoad:function(n,o){Ut.ielt9?setTimeout(r(n,this,null,o),0):n(null,o)},_tileOnError:function(n,o,c){var p=this.options.errorTileUrl;p&&o.getAttribute("src")!==p&&(o.src=p),n(c,o)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,o=this.options.maxZoom,c=this.options.zoomReverse,p=this.options.zoomOffset;return c&&(n=o-n),n+p},_getSubdomain:function(n){var o=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[o]},_abortLoading:function(){var n,o;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(o=this._tiles[n].el,o.onload=f,o.onerror=f,!o.complete)){o.src=w;var c=this._tiles[n].coords;he(o),delete this._tiles[n],this.fire("tileabort",{tile:o,coords:c})}},_removeTile:function(n){var o=this._tiles[n];if(o)return o.el.setAttribute("src",w),Br.prototype._removeTile.call(this,n)},_tileReady:function(n,o,c){if(!(!this._map||c&&c.getAttribute("src")===w))return Br.prototype._tileReady.call(this,n,o,c)}});function Ku(n,o){return new zs(n,o)}var Ju=zs.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,o){this._url=n;var c=e({},this.defaultWmsParams);for(var p in o)p in this.options||(c[p]=o[p]);o=g(this,o);var y=o.detectRetina&&Ut.retina?2:1,P=this.getTileSize();c.width=P.x*y,c.height=P.y*y,this.wmsParams=c},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var o=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[o]=this._crs.code,zs.prototype.onAdd.call(this,n)},getTileUrl:function(n){var o=this._tileCoordsToNwSe(n),c=this._crs,p=st(c.project(o[0]),c.project(o[1])),y=p.min,P=p.max,F=(this._wmsVersion>=1.3&&this._crs===Gu?[y.y,y.x,P.y,P.x]:[y.x,y.y,P.x,P.y]).join(","),J=zs.prototype.getTileUrl.call(this,n);return J+b(this.wmsParams,J,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+F},setParams:function(n,o){return e(this.wmsParams,n),o||this.redraw(),this}});function wm(n,o){return new Ju(n,o)}zs.WMS=Ju,Ku.wms=wm;var Ei=Jn.extend({options:{padding:.1},initialize:function(n){g(this,n),l(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),$t(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,o){var c=this._map.getZoomScale(o,this._zoom),p=this._map.getSize().multiplyBy(.5+this.options.padding),y=this._map.project(this._center,o),P=p.multiplyBy(-c).add(y).subtract(this._map._getNewPixelOrigin(n,o));Ut.any3d?Ye(this._container,P,c):Re(this._container,P)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,o=this._map.getSize(),c=this._map.containerPointToLayerPoint(o.multiplyBy(-n)).round();this._bounds=new lt(c,c.add(o.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),ju=Ei.extend({options:{tolerance:0},getEvents:function(){var n=Ei.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Ei.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");se(n,"mousemove",this._onMouseMove,this),se(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),se(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){E(this._redrawRequest),delete this._ctx,he(this._container),ke(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var o in this._layers)n=this._layers[o],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Ei.prototype._update.call(this);var n=this._bounds,o=this._container,c=n.getSize(),p=Ut.retina?2:1;Re(o,n.min),o.width=p*c.x,o.height=p*c.y,o.style.width=c.x+"px",o.style.height=c.y+"px",Ut.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){Ei.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[l(n)]=n;var o=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=o),this._drawLast=o,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var o=n._order,c=o.next,p=o.prev;c?c.prev=p:this._drawLast=p,p?p.next=c:this._drawFirst=c,delete n._order,delete this._layers[l(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var o=n.options.dashArray.split(/[, ]+/),c=[],p,y;for(y=0;y<o.length;y++){if(p=Number(o[y]),isNaN(p))return;c.push(p)}n.options._dashArray=c}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||A(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var o=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new lt,this._redrawBounds.extend(n._pxBounds.min.subtract([o,o])),this._redrawBounds.extend(n._pxBounds.max.add([o,o]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var o=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,o.x,o.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,o=this._redrawBounds;if(this._ctx.save(),o){var c=o.getSize();this._ctx.beginPath(),this._ctx.rect(o.min.x,o.min.y,c.x,c.y),this._ctx.clip()}this._drawing=!0;for(var p=this._drawFirst;p;p=p.next)n=p.layer,(!o||n._pxBounds&&n._pxBounds.intersects(o))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,o){if(this._drawing){var c,p,y,P,F=n._parts,J=F.length,it=this._ctx;if(J){for(it.beginPath(),c=0;c<J;c++){for(p=0,y=F[c].length;p<y;p++)P=F[c][p],it[p?"lineTo":"moveTo"](P.x,P.y);o&&it.closePath()}this._fillStroke(it,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var o=n._point,c=this._ctx,p=Math.max(Math.round(n._radius),1),y=(Math.max(Math.round(n._radiusY),1)||p)/p;y!==1&&(c.save(),c.scale(1,y)),c.beginPath(),c.arc(o.x,o.y/y,p,0,Math.PI*2,!1),y!==1&&c.restore(),this._fillStroke(c,n)}},_fillStroke:function(n,o){var c=o.options;c.fill&&(n.globalAlpha=c.fillOpacity,n.fillStyle=c.fillColor||c.color,n.fill(c.fillRule||"evenodd")),c.stroke&&c.weight!==0&&(n.setLineDash&&n.setLineDash(o.options&&o.options._dashArray||[]),n.globalAlpha=c.opacity,n.lineWidth=c.weight,n.strokeStyle=c.color,n.lineCap=c.lineCap,n.lineJoin=c.lineJoin,n.stroke())},_onClick:function(n){for(var o=this._map.mouseEventToLayerPoint(n),c,p,y=this._drawFirst;y;y=y.next)c=y.layer,c.options.interactive&&c._containsPoint(o)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(c))&&(p=c);this._fireEvent(p?[p]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var o=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,o)}},_handleMouseOut:function(n){var o=this._hoveredLayer;o&&(Ie(this._container,"leaflet-interactive"),this._fireEvent([o],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,o){if(!this._mouseHoverThrottled){for(var c,p,y=this._drawFirst;y;y=y.next)c=y.layer,c.options.interactive&&c._containsPoint(o)&&(p=c);p!==this._hoveredLayer&&(this._handleMouseOut(n),p&&($t(this._container,"leaflet-interactive"),this._fireEvent([p],n,"mouseover"),this._hoveredLayer=p)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(r(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,o,c){this._map._fireDOMEvent(o,c||o.type,n)},_bringToFront:function(n){var o=n._order;if(o){var c=o.next,p=o.prev;if(c)c.prev=p;else return;p?p.next=c:c&&(this._drawFirst=c),o.prev=this._drawLast,this._drawLast.next=o,o.next=null,this._drawLast=o,this._requestRedraw(n)}},_bringToBack:function(n){var o=n._order;if(o){var c=o.next,p=o.prev;if(p)p.next=c;else return;c?c.prev=p:p&&(this._drawLast=p),o.prev=null,o.next=this._drawFirst,this._drawFirst.prev=o,this._drawFirst=o,this._requestRedraw(n)}}});function Qu(n){return Ut.canvas?new ju(n):null}var Fr=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),Tm={_initContainer:function(){this._container=Wt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Ei.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var o=n._container=Fr("shape");$t(o,"leaflet-vml-shape "+(this.options.className||"")),o.coordsize="1 1",n._path=Fr("path"),o.appendChild(n._path),this._updateStyle(n),this._layers[l(n)]=n},_addPath:function(n){var o=n._container;this._container.appendChild(o),n.options.interactive&&n.addInteractiveTarget(o)},_removePath:function(n){var o=n._container;he(o),n.removeInteractiveTarget(o),delete this._layers[l(n)]},_updateStyle:function(n){var o=n._stroke,c=n._fill,p=n.options,y=n._container;y.stroked=!!p.stroke,y.filled=!!p.fill,p.stroke?(o||(o=n._stroke=Fr("stroke")),y.appendChild(o),o.weight=p.weight+"px",o.color=p.color,o.opacity=p.opacity,p.dashArray?o.dashStyle=v(p.dashArray)?p.dashArray.join(" "):p.dashArray.replace(/( *, *)/g," "):o.dashStyle="",o.endcap=p.lineCap.replace("butt","flat"),o.joinstyle=p.lineJoin):o&&(y.removeChild(o),n._stroke=null),p.fill?(c||(c=n._fill=Fr("fill")),y.appendChild(c),c.color=p.fillColor||p.color,c.opacity=p.fillOpacity):c&&(y.removeChild(c),n._fill=null)},_updateCircle:function(n){var o=n._point.round(),c=Math.round(n._radius),p=Math.round(n._radiusY||c);this._setPath(n,n._empty()?"M0 0":"AL "+o.x+","+o.y+" "+c+","+p+" 0,"+65535*360)},_setPath:function(n,o){n._path.v=o},_bringToFront:function(n){Bt(n._container)},_bringToBack:function(n){un(n._container)}},Co=Ut.vml?Fr:ae,zr=Ei.extend({_initContainer:function(){this._container=Co("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Co("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){he(this._container),ke(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Ei.prototype._update.call(this);var n=this._bounds,o=n.getSize(),c=this._container;(!this._svgSize||!this._svgSize.equals(o))&&(this._svgSize=o,c.setAttribute("width",o.x),c.setAttribute("height",o.y)),Re(c,n.min),c.setAttribute("viewBox",[n.min.x,n.min.y,o.x,o.y].join(" ")),this.fire("update")}},_initPath:function(n){var o=n._path=Co("path");n.options.className&&$t(o,n.options.className),n.options.interactive&&$t(o,"leaflet-interactive"),this._updateStyle(n),this._layers[l(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){he(n._path),n.removeInteractiveTarget(n._path),delete this._layers[l(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var o=n._path,c=n.options;o&&(c.stroke?(o.setAttribute("stroke",c.color),o.setAttribute("stroke-opacity",c.opacity),o.setAttribute("stroke-width",c.weight),o.setAttribute("stroke-linecap",c.lineCap),o.setAttribute("stroke-linejoin",c.lineJoin),c.dashArray?o.setAttribute("stroke-dasharray",c.dashArray):o.removeAttribute("stroke-dasharray"),c.dashOffset?o.setAttribute("stroke-dashoffset",c.dashOffset):o.removeAttribute("stroke-dashoffset")):o.setAttribute("stroke","none"),c.fill?(o.setAttribute("fill",c.fillColor||c.color),o.setAttribute("fill-opacity",c.fillOpacity),o.setAttribute("fill-rule",c.fillRule||"evenodd")):o.setAttribute("fill","none"))},_updatePoly:function(n,o){this._setPath(n,Z(n._parts,o))},_updateCircle:function(n){var o=n._point,c=Math.max(Math.round(n._radius),1),p=Math.max(Math.round(n._radiusY),1)||c,y="a"+c+","+p+" 0 1,0 ",P=n._empty()?"M0 0":"M"+(o.x-c)+","+o.y+y+c*2+",0 "+y+-c*2+",0 ";this._setPath(n,P)},_setPath:function(n,o){n._path.setAttribute("d",o)},_bringToFront:function(n){Bt(n._path)},_bringToBack:function(n){un(n._path)}});Ut.vml&&zr.include(Tm);function td(n){return Ut.svg||Ut.vml?new zr(n):null}ye.include({getRenderer:function(n){var o=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return o||(o=this._renderer=this._createRenderer()),this.hasLayer(o)||this.addLayer(o),o},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var o=this._paneRenderers[n];return o===void 0&&(o=this._createRenderer({pane:n}),this._paneRenderers[n]=o),o},_createRenderer:function(n){return this.options.preferCanvas&&Qu(n)||td(n)}});var ed=Bs.extend({initialize:function(n,o){Bs.prototype.initialize.call(this,this._boundsToLatLngs(n),o)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=yt(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function Em(n,o){return new ed(n,o)}zr.create=Co,zr.pointsToPath=Z,Ti.geometryToLayer=Mo,Ti.coordsToLatLng=jl,Ti.coordsToLatLngs=So,Ti.latLngToCoords=Ql,Ti.latLngsToCoords=wo,Ti.getFeature=Fs,Ti.asFeature=To,ye.mergeOptions({boxZoom:!0});var nd=pi.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){se(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){ke(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){he(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Wi(),Ol(),this._startPoint=this._map.mouseEventToContainerPoint(n),se(document,{contextmenu:ls,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=Wt("div","leaflet-zoom-box",this._container),$t(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var o=new lt(this._point,this._startPoint),c=o.getSize();Re(this._box,o.min),this._box.style.width=c.x+"px",this._box.style.height=c.y+"px"},_finish:function(){this._moved&&(he(this._box),Ie(this._container,"leaflet-crosshair")),Ir(),Ul(),ke(document,{contextmenu:ls,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(r(this._resetState,this),0);var o=new ot(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(o).fire("boxzoomend",{boxZoomBounds:o})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});ye.addInitHook("addHandler","boxZoom",nd),ye.mergeOptions({doubleClickZoom:!0});var id=pi.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var o=this._map,c=o.getZoom(),p=o.options.zoomDelta,y=n.originalEvent.shiftKey?c-p:c+p;o.options.doubleClickZoom==="center"?o.setZoom(y):o.setZoomAround(n.containerPoint,y)}});ye.addInitHook("addHandler","doubleClickZoom",id),ye.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var sd=pi.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new Zi(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}$t(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Ie(this._map._container,"leaflet-grab"),Ie(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var o=yt(this._map.options.maxBounds);this._offsetLimit=st(this._map.latLngToContainerPoint(o.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(o.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var o=this._lastTime=+new Date,c=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(c),this._times.push(o),this._prunePositions(o)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),o=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=o.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,o){return n-(n-o)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),o=this._offsetLimit;n.x<o.min.x&&(n.x=this._viscousLimit(n.x,o.min.x)),n.y<o.min.y&&(n.y=this._viscousLimit(n.y,o.min.y)),n.x>o.max.x&&(n.x=this._viscousLimit(n.x,o.max.x)),n.y>o.max.y&&(n.y=this._viscousLimit(n.y,o.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,o=Math.round(n/2),c=this._initialWorldOffset,p=this._draggable._newPos.x,y=(p-o+c)%n+o-c,P=(p+o+c)%n-o-c,F=Math.abs(y+c)<Math.abs(P+c)?y:P;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=F},_onDragEnd:function(n){var o=this._map,c=o.options,p=!c.inertia||n.noInertia||this._times.length<2;if(o.fire("dragend",n),p)o.fire("moveend");else{this._prunePositions(+new Date);var y=this._lastPos.subtract(this._positions[0]),P=(this._lastTime-this._times[0])/1e3,F=c.easeLinearity,J=y.multiplyBy(F/P),it=J.distanceTo([0,0]),ft=Math.min(c.inertiaMaxSpeed,it),Rt=J.multiplyBy(ft/it),Jt=ft/(c.inertiaDeceleration*F),de=Rt.multiplyBy(-Jt/2).round();!de.x&&!de.y?o.fire("moveend"):(de=o._limitOffset(de,o.options.maxBounds),A(function(){o.panBy(de,{duration:Jt,easeLinearity:F,noMoveStart:!0,animate:!0})}))}}});ye.addInitHook("addHandler","dragging",sd),ye.mergeOptions({keyboard:!0,keyboardPanDelta:80});var rd=pi.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),se(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),ke(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,o=document.documentElement,c=n.scrollTop||o.scrollTop,p=n.scrollLeft||o.scrollLeft;this._map._container.focus(),window.scrollTo(p,c)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var o=this._panKeys={},c=this.keyCodes,p,y;for(p=0,y=c.left.length;p<y;p++)o[c.left[p]]=[-1*n,0];for(p=0,y=c.right.length;p<y;p++)o[c.right[p]]=[n,0];for(p=0,y=c.down.length;p<y;p++)o[c.down[p]]=[0,n];for(p=0,y=c.up.length;p<y;p++)o[c.up[p]]=[0,-1*n]},_setZoomDelta:function(n){var o=this._zoomKeys={},c=this.keyCodes,p,y;for(p=0,y=c.zoomIn.length;p<y;p++)o[c.zoomIn[p]]=n;for(p=0,y=c.zoomOut.length;p<y;p++)o[c.zoomOut[p]]=-n},_addHooks:function(){se(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){ke(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var o=n.keyCode,c=this._map,p;if(o in this._panKeys){if(!c._panAnim||!c._panAnim._inProgress)if(p=this._panKeys[o],n.shiftKey&&(p=V(p).multiplyBy(3)),c.options.maxBounds&&(p=c._limitOffset(V(p),c.options.maxBounds)),c.options.worldCopyJump){var y=c.wrapLatLng(c.unproject(c.project(c.getCenter()).add(p)));c.panTo(y)}else c.panBy(p)}else if(o in this._zoomKeys)c.setZoom(c.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[o]);else if(o===27&&c._popup&&c._popup.options.closeOnEscapeKey)c.closePopup();else return;ls(n)}}});ye.addInitHook("addHandler","keyboard",rd),ye.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var od=pi.extend({addHooks:function(){se(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){ke(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var o=Ru(n),c=this._map.options.wheelDebounceTime;this._delta+=o,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var p=Math.max(c-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(r(this._performZoom,this),p),ls(n)},_performZoom:function(){var n=this._map,o=n.getZoom(),c=this._map.options.zoomSnap||0;n._stop();var p=this._delta/(this._map.options.wheelPxPerZoomLevel*4),y=4*Math.log(2/(1+Math.exp(-Math.abs(p))))/Math.LN2,P=c?Math.ceil(y/c)*c:y,F=n._limitZoom(o+(this._delta>0?P:-P))-o;this._delta=0,this._startTime=null,F&&(n.options.scrollWheelZoom==="center"?n.setZoom(o+F):n.setZoomAround(this._lastMousePos,o+F))}});ye.addInitHook("addHandler","scrollWheelZoom",od);var Am=600;ye.mergeOptions({tapHold:Ut.touchNative&&Ut.safari&&Ut.mobile,tapTolerance:15});var ad=pi.extend({addHooks:function(){se(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){ke(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var o=n.touches[0];this._startPos=this._newPos=new W(o.clientX,o.clientY),this._holdTimeout=setTimeout(r(function(){this._cancel(),this._isTapValid()&&(se(document,"touchend",on),se(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",o))},this),Am),se(document,"touchend touchcancel contextmenu",this._cancel,this),se(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){ke(document,"touchend",on),ke(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),ke(document,"touchend touchcancel contextmenu",this._cancel,this),ke(document,"touchmove",this._onMove,this)},_onMove:function(n){var o=n.touches[0];this._newPos=new W(o.clientX,o.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,o){var c=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:o.screenX,screenY:o.screenY,clientX:o.clientX,clientY:o.clientY});c._simulated=!0,o.target.dispatchEvent(c)}});ye.addInitHook("addHandler","tapHold",ad),ye.mergeOptions({touchZoom:Ut.touch,bounceAtZoomLimits:!0});var ld=pi.extend({addHooks:function(){$t(this._map._container,"leaflet-touch-zoom"),se(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Ie(this._map._container,"leaflet-touch-zoom"),ke(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var o=this._map;if(!(!n.touches||n.touches.length!==2||o._animatingZoom||this._zooming)){var c=o.mouseEventToContainerPoint(n.touches[0]),p=o.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=o.getSize()._divideBy(2),this._startLatLng=o.containerPointToLatLng(this._centerPoint),o.options.touchZoom!=="center"&&(this._pinchStartLatLng=o.containerPointToLatLng(c.add(p)._divideBy(2))),this._startDist=c.distanceTo(p),this._startZoom=o.getZoom(),this._moved=!1,this._zooming=!0,o._stop(),se(document,"touchmove",this._onTouchMove,this),se(document,"touchend touchcancel",this._onTouchEnd,this),on(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var o=this._map,c=o.mouseEventToContainerPoint(n.touches[0]),p=o.mouseEventToContainerPoint(n.touches[1]),y=c.distanceTo(p)/this._startDist;if(this._zoom=o.getScaleZoom(y,this._startZoom),!o.options.bounceAtZoomLimits&&(this._zoom<o.getMinZoom()&&y<1||this._zoom>o.getMaxZoom()&&y>1)&&(this._zoom=o._limitZoom(this._zoom)),o.options.touchZoom==="center"){if(this._center=this._startLatLng,y===1)return}else{var P=c._add(p)._divideBy(2)._subtract(this._centerPoint);if(y===1&&P.x===0&&P.y===0)return;this._center=o.unproject(o.project(this._pinchStartLatLng,this._zoom).subtract(P),this._zoom)}this._moved||(o._moveStart(!0,!1),this._moved=!0),E(this._animRequest);var F=r(o._move,o,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=A(F,this,!0),on(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,E(this._animRequest),ke(document,"touchmove",this._onTouchMove,this),ke(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});ye.addInitHook("addHandler","touchZoom",ld),ye.BoxZoom=nd,ye.DoubleClickZoom=id,ye.Drag=sd,ye.Keyboard=rd,ye.ScrollWheelZoom=od,ye.TapHold=ad,ye.TouchZoom=ld,s.Bounds=lt,s.Browser=Ut,s.CRS=pt,s.Canvas=ju,s.Circle=Jl,s.CircleMarker=bo,s.Class=z,s.Control=Kn,s.DivIcon=$u,s.DivOverlay=mi,s.DomEvent=Zp,s.DomUtil=Gp,s.Draggable=Zi,s.Evented=tt,s.FeatureGroup=Si,s.GeoJSON=Ti,s.GridLayer=Br,s.Handler=pi,s.Icon=ks,s.ImageOverlay=Eo,s.LatLng=bt,s.LatLngBounds=ot,s.Layer=Jn,s.LayerGroup=Us,s.LineUtil=sm,s.Map=ye,s.Marker=yo,s.Mixin=jp,s.Path=Xi,s.Point=W,s.PolyUtil=Qp,s.Polygon=Bs,s.Polyline=wi,s.Popup=Ao,s.PosAnimation=Lu,s.Projection=rm,s.Rectangle=ed,s.Renderer=Ei,s.SVG=zr,s.SVGOverlay=Yu,s.TileLayer=zs,s.Tooltip=Po,s.Transformation=xt,s.Util=B,s.VideoOverlay=qu,s.bind=r,s.bounds=st,s.canvas=Qu,s.circle=fm,s.circleMarker=dm,s.control=Or,s.divIcon=Mm,s.extend=e,s.featureGroup=cm,s.geoJSON=Xu,s.geoJson=gm,s.gridLayer=Sm,s.icon=hm,s.imageOverlay=_m,s.latLng=K,s.latLngBounds=yt,s.layerGroup=lm,s.map=Xp,s.marker=um,s.point=V,s.polygon=mm,s.polyline=pm,s.popup=ym,s.rectangle=Em,s.setOptions=g,s.stamp=l,s.svg=td,s.svgOverlay=xm,s.tileLayer=Ku,s.tooltip=bm,s.transformation=rt,s.version=t,s.videoOverlay=vm;var Pm=window.L;s.noConflict=function(){return window.L=Pm,this},window.L=s}))});var S=(s,t,...e)=>{let i=document.createElement(s);if(t)for(let[r,a]of Object.entries(t))a==null||a===!1||(r==="class"?i.className=a:r==="style"&&typeof a=="object"?Object.assign(i.style,a):r.startsWith("on")?i.addEventListener(r.slice(2),a):r==="html"?i.innerHTML=a:i.setAttribute(r,a===!0?"":a));return e.flat(9).forEach(r=>{r!=null&&r!==!1&&i.append(r.nodeType?r:document.createTextNode(String(r)))}),i},gi=(s,t=document)=>t.querySelector(s),nc=class{constructor(){this.h={}}on(t,e){(this.h[t]=this.h[t]||[]).push(e)}emit(t,...e){(this.h[t]||[]).forEach(i=>i(...e))}},Ee=new nc,j={link:null,tel:null,info:null,par:{},parList:[],events:[],rx:[],connected:!1,demo:!1,lastTel:0,tab:"setup",get(s,t){let e=this.par[s];return e===void 0?t:e}};function re(s,t="info",e=3500){let i=gi("#toasts");i||(i=S("div",{id:"toasts"}),document.body.append(i));let r=S("div",{class:"toast "+t},s);i.append(r),setTimeout(()=>r.remove(),e)}var wt=(s,t=1)=>s==null||isNaN(s)?"\u2013":(+s).toFixed(t),hs=s=>{s=Math.round(s);let t=Math.floor(s/60);return t>=60?`${Math.floor(t/60)} h ${t%60} min`:`${t} min ${String(s%60).padStart(2,"0")} s`},wn=(s,t,e)=>Math.min(e,Math.max(t,s)),us=(s,t="info")=>{j.events.push({t:new Date,m:s,kind:t}),j.events.length>300&&j.events.shift(),Ee.emit("ev")};function Ai(s,t,e="application/json"){let i=S("a",{href:URL.createObjectURL(new Blob([t],{type:e})),download:s});document.body.append(i),i.click(),i.remove()}function Lo(s){return new Promise(t=>{let e=S("input",{type:"file",accept:s,onchange:()=>{let i=e.files[0];if(!i)return t(null);let r=new FileReader;r.onload=()=>t(r.result),r.readAsText(i)}});e.click()})}var Pn={get(s,t){try{let e=localStorage.getItem("fathom."+s);return e===null?t:JSON.parse(e)}catch{return t}},set(s,t){try{localStorage.setItem("fathom."+s,JSON.stringify(t))}catch{}}};var Cn=[{id:"SERVO_RUD_C",k:"servo.rud.center",d:1500,mn:1e3,mx:2e3,u:"us",g:"Servos",h:"Ruder Mitte"},{id:"SERVO_RUD_MIN",k:"servo.rud.min",d:1e3,mn:800,mx:1500,u:"us",g:"Servos",h:"Ruder Endanschlag min"},{id:"SERVO_RUD_MAX",k:"servo.rud.max",d:2e3,mn:1500,mx:2200,u:"us",g:"Servos",h:"Ruder Endanschlag max"},{id:"SERVO_RUD_REV",k:"servo.rud.rev",d:0,mn:0,mx:1,u:"",g:"Servos",h:"Ruder Richtung umkehren"},{id:"SERVO_STN_C",k:"servo.stern.center",d:1500,mn:1e3,mx:2e3,u:"us",g:"Servos",h:"Hecktiefenruder Mitte"},{id:"SERVO_STN_MIN",k:"servo.stern.min",d:1e3,mn:800,mx:1500,u:"us",g:"Servos",h:"Hecktiefenruder min"},{id:"SERVO_STN_MAX",k:"servo.stern.max",d:2e3,mn:1500,mx:2200,u:"us",g:"Servos",h:"Hecktiefenruder max"},{id:"SERVO_STN_REV",k:"servo.stern.rev",d:0,mn:0,mx:1,u:"",g:"Servos",h:"Hecktiefenruder umkehren"},{id:"SERVO_BOW_C",k:"servo.bow.center",d:1500,mn:1e3,mx:2e3,u:"us",g:"Servos",h:"Bugtiefenruder Mitte"},{id:"SERVO_BOW_MIN",k:"servo.bow.min",d:1e3,mn:800,mx:1500,u:"us",g:"Servos",h:"Bugtiefenruder min"},{id:"SERVO_BOW_MAX",k:"servo.bow.max",d:2e3,mn:1500,mx:2200,u:"us",g:"Servos",h:"Bugtiefenruder max"},{id:"SERVO_BOW_REV",k:"servo.bow.rev",d:0,mn:0,mx:1,u:"",g:"Servos",h:"Bugtiefenruder umkehren"},{id:"SERVO_US_DEG",k:"servo.us_per_deg",d:10,mn:2,mx:30,u:"us/deg",g:"Servos",h:"Servoweg pro Grad Ruderausschlag"},{id:"LIM_DEFLECT",k:"lim.deflect",d:25,mn:5,mx:45,u:"deg",g:"Limiten",h:"maximaler Ruderausschlag"},{id:"LIM_PITCH",k:"lim.pitch",d:20,mn:5,mx:45,u:"deg",g:"Limiten",h:"maximaler Nickwinkel (Tiefenregelung)"},{id:"LIM_THR",k:"lim.throttle",d:35,mn:5,mx:100,u:"%",g:"Limiten",h:"maximaler Vortrieb (Software Limit)"},{id:"LIM_DEPTH",k:"lim.depth",d:3,mn:.5,mx:90,u:"m",g:"Limiten",h:"Tauchtiefe Limit, darueber Failsafe"},{id:"THR_SLEW",k:"thr.slew",d:150,mn:10,mx:1e3,u:"%/s",g:"Limiten",h:"Gasrampe (Beschleunigung begrenzen)"},{id:"ESC_DEAD",k:"esc.deadband",d:25,mn:0,mx:100,u:"us",g:"Limiten",h:"ESC Totzone um 1500 us (nur bei esc.reverse 1)"},{id:"ESC_REV",k:"esc.reverse",d:0,mn:0,mx:1,u:"",g:"Limiten",h:"0 = ESC nur vorwaerts (Stop 1000 us), 1 = ESC mit Rueckwaertslauf (Stop 1500 us)"},{id:"PUMP_INV",k:"pump.invert",d:0,mn:0,mx:1,u:"",g:"Ballast",h:"1 = Pumpenrichtung tauschen (statt Schlaeuche umzustecken)"},{id:"PID_P_KP",k:"pid.pitch.kp",d:1.6,mn:0,mx:10,u:"",g:"Regler",h:"Nick P (deg Ruder je deg Fehler)"},{id:"PID_P_KI",k:"pid.pitch.ki",d:.15,mn:0,mx:5,u:"",g:"Regler",h:"Nick I"},{id:"PID_P_KD",k:"pid.pitch.kd",d:.35,mn:0,mx:5,u:"",g:"Regler",h:"Nick D (ueber Gyro)"},{id:"PID_D_KP",k:"pid.depth.kp",d:18,mn:0,mx:80,u:"deg/m",g:"Regler",h:"Tiefe P (Nickwinkel je m Fehler)"},{id:"PID_D_KI",k:"pid.depth.ki",d:1.2,mn:0,mx:20,u:"",g:"Regler",h:"Tiefe I"},{id:"PID_D_KD",k:"pid.depth.kd",d:25,mn:0,mx:100,u:"deg/m/s",g:"Regler",h:"Tiefe D (Daempfung ueber Sinkrate)"},{id:"PID_H_KP",k:"pid.head.kp",d:.6,mn:0,mx:5,u:"",g:"Regler",h:"Kurs P (deg Ruder je deg Fehler)"},{id:"PID_H_KI",k:"pid.head.ki",d:.02,mn:0,mx:2,u:"",g:"Regler",h:"Kurs I"},{id:"PID_H_KD",k:"pid.head.kd",d:.25,mn:0,mx:3,u:"",g:"Regler",h:"Kurs D (Gyro)"},{id:"MIX_BOW",k:"mix.bow",d:.5,mn:-1.5,mx:1.5,u:"",g:"Regler",h:"Anteil Bugtiefenruder am Nickbefehl"},{id:"BAL_FLOW",k:"bal.flow",d:4,mn:.5,mx:30,u:"%/s",g:"Ballast",h:"Fuellstand Aenderung bei 100 % Pumpe"},{id:"BAL_KP",k:"bal.depth_kp",d:60,mn:0,mx:300,u:"%/m",g:"Ballast",h:"Pumpe je m Tiefenfehler bei Stillstand"},{id:"BAL_SLOW",k:"bal.slow_thr",d:6,mn:0,mx:30,u:"%",g:"Ballast",h:"unter diesem Gas regelt die Pumpe die Tiefe"},{id:"SPD_MS",k:"spd.ms_per_pct",d:.014,mn:.002,mx:.05,u:"m/s",g:"Fahrt",h:"Geschwindigkeit je % Gas (Vorschau, Kurven)"},{id:"FLUID_RHO",k:"fluid.density",d:998,mn:990,mx:1030,u:"kg/m3",g:"Umgebung",h:"Wasserdichte (See 998, Salz 1025)"},{id:"P_ATM",k:"fluid.p_surface",d:1013,mn:850,mx:1100,u:"mbar",g:"Umgebung",h:"Oberflaechendruck (CAL DEPTH setzt ihn)"},{id:"VB_SCALE",k:"bat.scale",d:1,mn:.5,mx:2,u:"",g:"Batterie",h:"Spannungs Faktor (CAL VBAT)"},{id:"VB_WARN",k:"bat.warn",d:7,mn:5,mx:9,u:"V",g:"Batterie",h:"Warnschwelle 2S"},{id:"VB_CRIT",k:"bat.crit",d:6.4,mn:5,mx:9,u:"V",g:"Batterie",h:"kritisch, Failsafe"},{id:"LEAK_THR",k:"leak.threshold",d:.35,mn:.05,mx:.95,u:"",g:"Leckage",h:"Leckage klein: Notaufstieg, an der Oberflaeche ausschalten"},{id:"LEAK_HI",k:"leak.major",d:.7,mn:.1,mx:.99,u:"",g:"Leckage",h:"Leckage gross: Not Aus (Schwelle muss ueber leak.threshold liegen)"},{id:"LEAK_ACT",k:"leak.major_action",d:0,mn:0,mx:1,u:"",g:"Leckage",h:"grosse Leckage: 0 = Not Aus (alles stromlos, Beacon an), 1 = trotzdem Notaufstieg"},{id:"BEACON_MODE",k:"beacon.mode",d:1,mn:0,mx:3,u:"",g:"Beacon",h:"0 nur Mission und Befehl, 1 bei Fehler, 2 bei Fehler und an der Oberflaeche nach Mission, 3 immer wenn scharf"},{id:"MIS_RTH",k:"mis.end_rth",d:1,mn:0,mx:1,u:"",g:"RTH",h:"nach Missionsende an der Oberflaeche abgleichen und Heimfahrt (mit Home und GPS)"},{id:"RC_ARM",k:"rc.ch.arm",d:5,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Arm (hoch = scharf)"},{id:"RC_MODE",k:"rc.ch.mode",d:6,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Modus (3 Stufen)"},{id:"RC_MIS",k:"rc.ch.mission",d:7,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Mission Start (hoch)"},{id:"RC_THR",k:"rc.ch.thr",d:3,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Vortrieb (Mitte = Stop)"},{id:"RC_RUD",k:"rc.ch.rud",d:4,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Seitenruder"},{id:"RC_ELE",k:"rc.ch.ele",d:2,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Tiefenruder"},{id:"RC_BOW",k:"rc.ch.bow",d:1,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Bugruder (nur Manuell)"},{id:"FS_TIMEOUT",k:"fs.rc_timeout",d:1,mn:.2,mx:10,u:"s",g:"Failsafe",h:"RC Verlust bis Failsafe"},{id:"FS_PITCH",k:"fs.pitch",d:10,mn:0,mx:30,u:"deg",g:"Failsafe",h:"Nick nach oben beim Auftauchen"},{id:"FS_THR",k:"fs.throttle",d:15,mn:0,mx:50,u:"%",g:"Failsafe",h:"Vortrieb beim Auftauchen"},{id:"FS_ACT",k:"fs.rc_action",d:0,mn:0,mx:1,u:"",g:"Failsafe",h:"RC Verlust: 0 = Auftauchen, 1 = RTH (nur mit Home und GPS)"},{id:"MIS_RC",k:"mis.needs_rc",d:0,mn:0,mx:1,u:"",g:"Failsafe",h:"Mission nur mit RC Verbindung"},{id:"MIS_TOL",k:"mis.depth_tol",d:.15,mn:.03,mx:1,u:"m",g:"Failsafe",h:"Tiefen Toleranz fuer Schritt Ende"},{id:"RC_RTH",k:"rc.ch.rth",d:8,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal RTH (hoch = Heimkehr)"},{id:"GPS_SATS",k:"gps.min_sats",d:5,mn:3,mx:12,u:"",g:"GPS",h:"Mindestzahl Satelliten fuer gueltigen Fix"},{id:"GPS_HDOP",k:"gps.max_hdop",d:3,mn:.8,mx:20,u:"",g:"GPS",h:"maximaler HDOP fuer gueltigen Fix"},{id:"RTH_THR",k:"rth.throttle",d:20,mn:5,mx:100,u:"%",g:"RTH",h:"Vortrieb beim Heimfahren an der Oberflaeche"},{id:"RTH_RAD",k:"rth.radius",d:3,mn:1,mx:50,u:"m",g:"RTH",h:"Ankunftsradius um Home"},{id:"BB_EN",k:"bb.enable",d:1,mn:0,mx:1,u:"",g:"Blackbox",h:"Blackbox aufzeichnen (nur im ARM Zustand)"},{id:"BB_HZ",k:"bb.hz",d:10,mn:1,mx:20,u:"Hz",g:"Blackbox",h:"Aufzeichnungsrate"},{id:"IMU_MODE",k:"imu.mode",d:1,mn:0,mx:1,u:"",g:"IMU",h:"0 IMU (ohne Kompass), 1 NDOF (mit Kompass, Standard)"},{id:"IMU_PITCH0",k:"imu.pitch_off",d:0,mn:-30,mx:30,u:"deg",g:"IMU",h:"Nick Offset (CAL LEVEL)"},{id:"IMU_ROLL0",k:"imu.roll_off",d:0,mn:-30,mx:30,u:"deg",g:"IMU",h:"Roll Offset (CAL LEVEL)"},{id:"IMU_YAW0",k:"imu.yaw_off",d:0,mn:-180,mx:180,u:"deg",g:"IMU",h:"Kurs Offset (Deklination)"},{id:"IMU_INV",k:"imu.invert",d:0,mn:0,mx:7,u:"",g:"IMU",h:"Vorzeichen umkehren: 1 Roll, 2 Nick, 4 Kurs (Nase hoch muss Nick + geben)"},{id:"IMU_MAP",k:"imu.axis_map",d:36,mn:0,mx:63,u:"",g:"IMU",h:"BNO055 AXIS_MAP_CONFIG (36 = Standard)"},{id:"IMU_SIGN",k:"imu.axis_sign",d:0,mn:0,mx:7,u:"",g:"IMU",h:"BNO055 AXIS_MAP_SIGN (Bit0 x, Bit1 y, Bit2 z)"},{id:"GPS_OFF_M",k:"gps.off_depth",d:1,mn:.3,mx:5,u:"m",g:"GPS",h:"GPS aus, sobald das Boot tiefer ist (unter 0.15 m wieder an)"},{id:"GPS_OFF_T",k:"gps.off_delay",d:3,mn:0,mx:30,u:"s",g:"GPS",h:"so lange tiefer als gps.off_depth, bevor das GPS ausgeht (gegen Wellen)"},{id:"LED_MODE",k:"led.mode",d:1,mn:0,mx:3,u:"",g:"LED",h:"Status LEDs: 0 aus, 1 immer, 2 nur an der Oberflaeche, 3 Tarnung (nur Fehler rot)"},{id:"LED_BRIGHT",k:"led.bright",d:100,mn:5,mx:100,u:"%",g:"LED",h:"Helligkeit der Status LEDs"},{id:"LED_READY",k:"led.ready_s",d:3,mn:1,mx:10,u:"s",g:"LED",h:"bereit (nicht scharf): ein gruener Blitz alle n Sekunden"},{id:"LED_ARMED",k:"led.armed",d:0,mn:0,mx:2,u:"",g:"LED",h:"scharf: 0 gruen Dauerlicht, 1 gruener Doppelblitz, 2 dunkel"},{id:"LED_MIS",k:"led.mission",d:0,mn:0,mx:2,u:"",g:"LED",h:"Mission: 0 gruen schnell blinkend, 1 gruen Dauerlicht, 2 dunkel"},{id:"LED_ERR",k:"led.errors",d:1,mn:0,mx:1,u:"",g:"LED",h:"Fehlercodes rot blitzen (1 Akku, 2 Leck, 3 Tiefe, 4 Sensor, 5 Funk, 6 Befehl)"},{id:"LED_DEPTH",k:"led.depth_step",d:0,mn:0,mx:20,u:"m",g:"LED",h:"Tiefenanzeige fuer Taucher: unter Wasser ein gruener Blitz je n Meter (0 aus)"},{id:"LED_TEST",k:"led.lamp_test",d:1,mn:0,mx:1,u:"",g:"LED",h:"Lampentest beim Einschalten"},{id:"BC_WATCH",k:"beacon.watch",d:1,mn:0,mx:1,u:"",g:"Beacon",h:"Pod ueberwacht das scharfe Boot und schlaegt Alarm, wenn es 8 s schweigt"},{id:"BC_DARK",k:"beacon.dark_dive",d:0,mn:0,mx:1,u:"",g:"Beacon",h:"unter Wasser dunkel (ausser Alarm und Befehl)"},{id:"BC_BAT",k:"beacon.low_bat",d:1,mn:0,mx:1,u:"",g:"Beacon",h:"roter Blitz bei Akku Warnung (an der Oberflaeche)"},{id:"BC_RC",k:"beacon.rc_loss",d:0,mn:0,mx:1,u:"",g:"Beacon",h:"roter Blitz bei Funkverlust an der Oberflaeche"},{id:"BC_MAX",k:"beacon.strobe_max",d:0,mn:0,mx:120,u:"min",g:"Beacon",h:"automatischer Strobe endet nach n Minuten, schont den Pod Akku (0 unbegrenzt)"}];var Rn={WAIT:{label:"Warten",color:"#7f8ea3",f:[["Dauer","s",10,0,3600,1]]},DIVE:{label:"Tauchen",color:"#2f7fd0",f:[["Zieltiefe","m",1.5,0,90,.1],["Max Sinkrate","m/s",.15,.02,1,.01],["Max Nick","deg",15,3,45,1],["Fahrt","%",25,0,100,1]]},CRUISE:{label:"Geradeaus",color:"#35a7a0",f:[["Fahrt","%",30,0,100,1],["Kurs (-1 halten)","deg",-1,-1,359,1],["Dauer","s",30,1,7200,1]]},TURN:{label:"Drehen",color:"#d9a441",f:[["Kurs","deg",90,-360,360,1],["0 absolut, 1 relativ","",0,0,1,1],["Max Gierrate","deg/s",15,2,60,1],["Fahrt","%",15,0,100,1]]},CURVE:{label:"Kurve",color:"#c9783a",f:[["Kurs\xE4nderung (+ rechts)","deg",90,-720,720,1],["Radius","m",1.5,.2,50,.1],["Fahrt","%",25,3,100,1]]},BALLAST:{label:"Ballast",color:"#8a6fd0",f:[["F\xFCllstand","%",50,0,100,1]]},PLANES:{label:"Ruder fix",color:"#b4568a",f:[["Bug","deg",0,-45,45,1],["Heck","deg",10,-45,45,1],["Dauer","s",10,.5,600,.5],["Fahrt","%",25,0,100,1]]},SURFACE:{label:"Auftauchen",color:"#5fb36a",f:[]},BEACON:{label:"Beacon",color:"#e0584f",f:[["Modus (0 aus, 2 weiss, 3 rot, 4 Alarm)","",2,0,4,1]]},REPEAT:{label:"Wiederholen",color:"#9aa7b8",f:[["Anzahl","x",2,1,50,1],["ab Schritt (0 = erster)","",0,0,63,1]]}},sc=["WAIT","DIVE","CRUISE","TURN","CURVE","BALLAST","PLANES","SURFACE","BEACON","REPEAT"],No=64,Oo=s=>({t:s,v:Rn[s].f.map(t=>t[2]).concat([0,0,0,0]).slice(0,4)}),Do=s=>(s%360+360)%360,ic=s=>(s=Do(s),s>180?s-360:s),Pi=(s,t,e)=>Math.min(e,Math.max(t,s)),Zm=180/Math.PI,Io=Math.PI/180;function Uo(s){let t=(e,i)=>{let r=s?s(e):void 0;return r===void 0||isNaN(r)?i:r};return{ms:t("spd.ms_per_pct",.014),thrMax:t("lim.throttle",35),pitchMax:t("lim.pitch",20),depthMax:t("lim.depth",3),flow:t("bal.flow",4),fsThr:t("fs.throttle",15),fsPitch:t("fs.pitch",10),tol:t("mis.depth_tol",.15)}}function ko(s,t){let e=[];return s.length>No&&e.push({i:-1,m:`Maximal ${No} Schritte, Boot speichert nur diese.`}),s.forEach((i,r)=>{let a=i.v;if(i.t==="DIVE"&&(a[0]>t.depthMax&&e.push({i:r,m:`Tiefe ${a[0]} m \xFCber Limit ${t.depthMax} m (Failsafe l\xF6st aus).`}),a[2]>t.pitchMax&&e.push({i:r,m:`Nick ${a[2]}\xB0 wird auf ${t.pitchMax}\xB0 begrenzt.`})),["DIVE","CRUISE","TURN","CURVE","PLANES"].includes(i.t)){let l=i.t==="CRUISE"?a[0]:i.t==="CURVE"?a[2]:a[3];l>t.thrMax&&e.push({i:r,m:`Fahrt ${l} % wird auf Limit ${t.thrMax} % begrenzt.`})}i.t==="REPEAT"&&a[1]>=r&&e.push({i:r,m:"R\xFCcksprung muss vor diesem Schritt liegen."}),i.t==="CURVE"&&a[1]<.5&&e.push({i:r,m:"Radius unter 0.5 m ist mit Ruder allein bei 67 cm L\xE4nge nicht erreichbar."})}),s.length&&s[s.length-1].t!=="SURFACE"&&e.push({i:s.length-1,m:"Mission endet ohne Auftauchen: Boot h\xE4lt danach die letzte Tiefe (Modus DEPTH)."}),e}function Bo(s,t,e={}){let r=[],a=[],l={t:0,x:0,y:0,z:0,h:e.h0||0,p:0,v:0,f:0,thr:0},h=k=>{r.push({...l,i:k})},u=0,f=0,m=0,d={};h(-1);let _=4*3600,g=(k,R,D,O,A)=>{let E=0;for(;!k(E)&&E<D&&m<_;)R(E),E+=.1,m+=.1,l.t=m,Math.round(E/.1)%5===0&&h(O);E>=D&&a.push({i:O,m:`${A}: Ziel in ${Math.round(D)} s nicht erreicht (Vorschau).`}),h(O)},b=(k,R,D)=>{let O=Pi(k,0,t.thrMax)*t.ms;l.v=O,l.thr=Pi(k,0,t.thrMax),l.h=Do(l.h+R*.1),l.p+=(D-l.p)*Math.min(1,.1/1.5);let A=O*Math.cos(l.p*Io),E=-O*Math.sin(l.p*Io);l.x+=A*Math.sin(l.h*Io)*.1,l.y+=A*Math.cos(l.h*Io)*.1,l.z=Math.max(0,l.z+E*.1)};for(;u<s.length&&f++<5e3&&m<_;){let k=s[u],R=k.v;switch(k.t){case"WAIT":g(D=>D>=R[0],()=>b(0,0,0),R[0]+1,u,"Warten");break;case"DIVE":{let D=R[0],O=R[1]>0?R[1]:.2,A=Math.max(R[3],0),E=Math.min(R[2]>0?R[2]:t.pitchMax,t.pitchMax),B=l.z,z=D>l.z?1:-1;g(()=>Math.abs(l.z-D)<t.tol*.5&&Math.abs(B-D)<1e-6,()=>{B+=z*O*.1,(z>0&&B>D||z<0&&B<D)&&(B=D);let G=(B-l.z)*18,$=Pi(-G,-E,E);b(A,0,$),A<1&&(l.z=Pi(l.z+Pi((B-l.z)*.8,-O,O)*.1,0,90),l.p=0)},Math.abs(D-l.z)/O*3+40,u,"Tauchen"),l.z=D;break}case"CRUISE":{let D=R[1]>=0?R[1]:l.h;g(O=>O>=R[2],()=>{let O=ic(D-l.h);b(R[0],Pi(O*2,-20,20),0)},R[2]+1,u,"Geradeaus");break}case"TURN":{let D=R[1]>.5?Do(l.h+R[0]):Do(R[0]),O=R[2]>0?R[2]:20;g(()=>Math.abs(ic(D-l.h))<1,()=>{let A=ic(D-l.h);b(R[3],Pi(A*3,-O,O),0)},90+360/O,u,"Drehen");break}case"CURVE":{let D=Math.max(R[2],1)*t.ms,O=D/Math.max(R[1],.05)*Zm,A=0,E=Math.abs(R[0]);g(()=>A>=E,()=>{let B=Math.min(O*.1,E-A);A+=B,b(Math.max(R[2],1),(R[0]>=0?1:-1)*B/.1,0)},E/Math.max(O,1)*3+40,u,"Kurve");break}case"BALLAST":{let D=Pi(R[0],0,100);g(()=>Math.abs(l.f-D)<.5,()=>{l.f+=Math.sign(D-l.f)*Math.min(t.flow*.1,Math.abs(D-l.f)),b(0,0,0)},240,u,"Ballast");break}case"PLANES":{let D=Pi((R[1]+.5*R[0])*.8,-t.pitchMax,t.pitchMax);g(O=>O>=R[2],()=>b(R[3],0,D),R[2]+1,u,"Ruder fix");break}case"SURFACE":{g(()=>l.z<=.12,()=>{l.f=Math.max(0,l.f-t.flow*.1),b(t.fsThr,0,t.fsPitch),l.z=Math.max(0,l.z-.2*.1*0)},600,u,"Auftauchen"),l.z=0,l.p=0,l.v=0,l.thr=0,h(u),u=s.length;continue}case"REPEAT":{let D=u;if(d[D]=(d[D]||0)+1,d[D]<=R[0]&&R[1]<u){u=Math.max(0,Math.round(R[1]));continue}break}}u++}let M=r,x=0,v=0,C=0,w={x0:0,x1:0,y0:0,y1:0,z1:0};for(let k=1;k<M.length;k++){let R=M[k-1],D=M[k];x+=Math.hypot(D.x-R.x,D.y-R.y,D.z-R.z);let O=D.t-R.t,A=(D.thr||0)/100;C+=O*(e.pBase??1.5+(e.pMax??25)*A*A*A),D.thr>1&&(v+=O)}M.forEach(k=>{w.x0=Math.min(w.x0,k.x),w.x1=Math.max(w.x1,k.x),w.y0=Math.min(w.y0,k.y),w.y1=Math.max(w.y1,k.y),w.z1=Math.max(w.z1,k.z)});let T=M[M.length-1]||l;return{pts:M,notes:a,stats:{dur:T.t,dist:x,maxDepth:w.z1,bb:w,wh:C/3600,cruiseT:v,avgV:T.t>0?x/T.t:0,endDist:Math.hypot(T.x,T.y),final:{x:T.x,y:T.y,z:T.z},w:w.x1-w.x0,l:w.y1-w.y0}}}var rc={"Pool Funktionstest":[["WAIT",5],["BALLAST",20],["DIVE",1,.1,12,15],["CRUISE",20,-1,30],["TURN",90,1,12,12],["CRUISE",20,-1,20],["SURFACE"]],"Rechteck Kurs 3 m":[["DIVE",1.5,.15,12,20],["CRUISE",25,0,20],["TURN",90,1,15,15],["REPEAT",3,1],["SURFACE"]].map((s,t)=>s),"Yo Yo 0.5 bis 2 m":[["DIVE",.5,.15,15,20],["DIVE",2,.15,15,25],["DIVE",.5,.15,15,25],["REPEAT",3,1],["SURFACE"]],"Kreis Radius 1.5 m":[["DIVE",1,.15,15,20],["CURVE",360,1.5,25],["CURVE",-360,1.5,25],["SURFACE"]],"See Tauchgang 20 m":[["WAIT",10],["DIVE",20,.2,18,30],["CRUISE",30,0,120],["TURN",180,1,12,15],["CRUISE",30,-1,120],["SURFACE"]]};function oc(s){return rc[s].map(t=>{let e=Oo(t[0]);return t.slice(1).forEach((i,r)=>{e.v[r]=i}),e})}var fd=s=>s.map(t=>`MIS ADD ${t.t} ${t.v.map(e=>+e.toFixed(3)).join(" ")}`);function Fo(s){return s.map(t=>({t:t[0],v:[t[1],t[2],t[3],t[4]]})).filter(t=>Rn[t.t])}function Vs(){if(Vs.c)return Vs.c;let s=10,t=2400,e=36,i=new Uint8Array(16+t*e),r=new DataView(i.buffer);i.set([70,66,66,49],0),r.setUint16(4,e,!0),r.setUint16(6,s,!0),r.setUint32(8,100,!0);let a=47.05,l=8.3,h=90,u=0,f={lat:a,lon:l};for(let m=0;m<t;m++){let d=m/s,_=0,g=2,b=0,M=0;d<15?g=0:d<45?(g=2,b=2.5,_=Math.min(2.5,(d-15)*.12)):d<160?(g=3,b=2.5,_=2.5+.05*Math.sin(d/4),M=25,h=90+80*Math.sin((d-45)/18)):d<190?(g=3,b=0,_=Math.max(0,2.5-(d-160)*.09),M=20):(g=5,M=d<215?20:0),u=_>.5?Math.min(60,u+.2):Math.max(0,u-.2);let x=16+m*e;r.setUint32(x,Math.round(d*1e3),!0),r.setInt16(x+4,Math.round(_*100),!0),r.setInt16(x+6,Math.round(b*100),!0),r.setInt16(x+8,Math.round(Math.sin(d/3)*20),!0),r.setInt16(x+10,Math.round((b>_?40:-40*(_>.2?1:0))+Math.sin(d)*10),!0),r.setUint16(x+12,Math.round((h%360+360)%360*10),!0),r.setUint16(x+14,Math.round((8.3-d*.0016)*100),!0),r.setUint8(x+16,8),r.setUint8(x+17,g);let v=_<.2&&d>2?4:0;r.setUint8(x+18,3|v|8|16|(g===3?32:0)),r.setUint8(x+19,Math.round(u)),r.setInt8(x+20,M),r.setInt8(x+21,Math.round((u-_*20)/10)),r.setInt8(x+22,Math.round(Math.sin(d/2)*12)),r.setInt8(x+23,Math.round((b-_)*8)),r.setInt8(x+24,Math.round((b-_)*4));let C=M/100*.5;l+=Math.sin(h*Math.PI/180)*C*.1/75900,a+=Math.cos(h*Math.PI/180)*C*.1/111200,v&&(f={lat:a,lon:l}),r.setInt32(x+25,Math.round(f.lat*1e7),!0),r.setInt32(x+29,Math.round(f.lon*1e7),!0),r.setUint8(x+33,v?9:0),r.setInt8(x+34,-60)}return Vs.c=i}var ac=class{constructor(){this.h={}}on(t,e){return(this.h[t]=this.h[t]||[]).push(e),()=>{this.h[t]=this.h[t].filter(i=>i!==e)}}emit(t,...e){(this.h[t]||[]).forEach(i=>{try{i(...e)}catch(r){console.error(r)}})}};function pd(s){let t=4294967295;for(let e=0;e<s.length;e++){t^=s[e];for(let i=0;i<8;i++)t=t>>>1^3988292384&-(t&1)}return~t>>>0}var Hr=class extends ac{constructor(){super(),this.q=[],this.cur=null,this.buf="",this.connected=!1,this.demo=!1}_feed(t){this.buf+=t;let e;for(;(e=this.buf.indexOf(`
`))>=0;){let i=this.buf.slice(0,e).replace(/\r$/,"");this.buf=this.buf.slice(e+1),i&&this._line(i)}this.buf.length>2e4&&(this.buf="")}_line(t){if(this.emit("rx",t),t.startsWith("T {")){try{this.emit("tel",JSON.parse(t.slice(2)))}catch{}return}if(t.startsWith("EV ")){this.emit("ev",t.slice(3));return}if(this.cur&&this.cur.dump){let e=this.cur;if(t.startsWith("BBD ")){let i=/^BBD (\d+) ([0-9a-f]*)$/.exec(t);if(!i)return;let r=+i[1],a=i[2];for(let l=0;l<a.length;l+=2)e.bytes.push(parseInt(a.substr(l,2),16));e.bytes.length!==r+a.length/2&&(e.bad=!0),clearTimeout(e.to),e.to=setTimeout(()=>{this.cur===e&&(this.cur=null,e.res({ok:!1,text:"ERR Zeit\xFCberschreitung beim Download"}),this._next())},4e3),e.prog&&e.prog(e.bytes.length);return}if(t.startsWith("BBE ")){let i=/^BBE (\d+) ([0-9a-f]+)$/.exec(t);this.cur=null,clearTimeout(e.to);let r=Uint8Array.from(e.bytes),a=i&&+i[1]===r.length&&!e.bad&&pd(r)===parseInt(i[2],16)>>>0;e.res({ok:!!a,text:a?"OK":"ERR Pr\xFCfsumme oder L\xE4nge falsch (Funk gest\xF6rt?)",bytes:r}),this._next();return}}if(/^(OK|ERR|PAR|INFO|MIS|BB|HOME)\b/.test(t)&&this.cur){let e=this.cur;this.cur=null,clearTimeout(e.to);let i=t;if(/^(PAR|INFO|MIS|BB|HOME)\s/.test(t))try{i=JSON.parse(t.slice(t.indexOf(" ")+1))}catch{e.res({ok:!1,text:"JSON Fehler"}),this._next();return}e.res({ok:!t.startsWith("ERR"),text:t,data:i}),this._next();return}t.startsWith("ERR")&&this.emit("ev",t)}cmd(t,e=2500){return new Promise(i=>{this.q.push({text:t,res:i,timeout:e}),this.cur||this._next()})}_next(){if(this.cur||!this.q.length)return;let t=this.q.shift();this.cur=t,t.to=setTimeout(()=>{this.cur===t&&(this.cur=null,t.res({ok:!1,text:"ERR Zeit\xFCberschreitung",timeout:!0}),this._next())},t.timeout),this.emit("tx",t.text),this._write(t.text+`
`)}dump(t,e){return new Promise(i=>{this.q.push({text:"BB DUMP "+t,res:i,timeout:6e3,dump:!0,bytes:[],prog:e}),this.cur||this._next()})}fire(t){this.emit("tx",t),this._write(t+`
`)}},Vr=class extends Hr{static supported(){return"serial"in navigator}async connect(t){this.port=t||await navigator.serial.requestPort({filters:[{usbVendorId:11914},{usbVendorId:9114},{usbVendorId:12346}]}).catch(()=>navigator.serial.requestPort()),await this.port.open({baudRate:115200}),this.writer=this.port.writable.getWriter(),this.connected=!0,this.keep=!0,this._loop()}async _loop(){let t=new TextDecoder;try{for(;this.keep&&this.port.readable;){this.reader=this.port.readable.getReader();try{for(;;){let{value:e,done:i}=await this.reader.read();if(i)break;e&&this._feed(t.decode(e,{stream:!0}))}}finally{this.reader.releaseLock()}}}catch(e){this.emit("error",e)}this._closed()}_closed(){this.connected&&(this.connected=!1,this.emit("close"))}async _write(t){try{await this.writer.write(new TextEncoder().encode(t))}catch(e){this.emit("error",e)}}async disconnect(){this.keep=!1;try{await this.reader?.cancel()}catch{}try{this.writer?.releaseLock()}catch{}try{await this.port?.close()}catch{}this._closed()}},zo=class extends Hr{constructor(t){super(),this.host=t||location.hostname||"192.168.4.1",this.wifi=!0}connect(){return new Promise((t,e)=>{let i=!1,r=this.ws=new WebSocket(`ws://${this.host}:81/`),a=setTimeout(()=>{if(!i){i=!0;try{r.close()}catch{}e(new Error("keine Antwort von "+this.host))}},5e3);r.onopen=()=>{i||(i=!0,clearTimeout(a),this.connected=!0,t())},r.onmessage=l=>this._feed(String(l.data)+`
`),r.onerror=()=>{i||(i=!0,clearTimeout(a),e(new Error("WebSocket Fehler (https Seite? WLAN verbunden?)")))},r.onclose=()=>{this.connected&&(this.connected=!1,this.emit("close"))}})}_write(t){try{this.ws&&this.ws.readyState===1&&this.ws.send(t.replace(/\n$/,""))}catch(e){this.emit("error",e)}}async disconnect(){this.noretry=!0;try{this.ws&&this.ws.close()}catch{}this.connected&&(this.connected=!1,this.emit("close"))}},Ho=class extends Hr{constructor(){super(),this.demo=!0,this.par={},Cn.forEach(t=>{this.par[t.k]=t.d}),this.steps=[],this.hz=0,this.armed=0,this.mode="MANUAL",this.tst=0,this.tServo=[1500,1500,1500],this.tThr=0,this.tPump=0,this.tWd=0,this.fill=0,this.depth=0,this.t0=performance.now(),this.mis=null,this.leak=.03,this.home=null,this.gx=0,this.gy=0,this.att=[0,0,0],this.vb=8.1,this.fs="",this.calst=[0,1,2,1]}async connect(){this.connected=!0,this.timer=setInterval(()=>this._tick(),50),setTimeout(()=>this.emit("ev","DEMO Boot verbunden (simuliert)"),50)}async disconnect(){clearInterval(this.timer),this.connected=!1,this.emit("close")}_reply(t){setTimeout(()=>this._feed(t+`
`),12)}_write(t){let e=t.trim().split(/\s+/),i=(e[0]||"").toUpperCase(),r=a=>this._reply(a);if(i==="PING")r("OK PONG");else if(i==="INFO")r("INFO "+JSON.stringify({fw:"FATHOM",ver:"0.5.0 DEMO",hw:"Simulation",params:Cn.length,maxsteps:64}));else if(i==="STREAM")this.hz=Math.max(0,Math.min(50,+e[1]||0)),r("OK");else if(i==="GET")r("PAR "+JSON.stringify(Cn.map(a=>({k:a.k,v:this.par[a.k],d:a.d,mn:a.mn,mx:a.mx,u:a.u,g:a.g,h:a.h}))));else if(i==="SET"){let a=Cn.find(l=>l.k===e[1]);a?(this.par[a.k]=Math.min(a.mx,Math.max(a.mn,+e[2])),r("OK")):r("ERR unbekannt")}else if(i==="BEACON"){let a=+e[1];a>=0&&a<=4?(this.bc=a,r("OK")):r("ERR BEACON 0 bis 4")}else if(i==="SAVE"||i==="LOAD")r("OK");else if(i==="DEFAULTS")Cn.forEach(a=>{this.par[a.k]=a.d}),r("OK");else if(i==="ARM")this.tst?r("ERR Testmodus"):(this.armed=1,this.home={lat:47.05+this.gy/111200,lon:8.3+this.gx/75900},r("OK"));else if(i==="DISARM")this.armed=0,this.mis=null,r("OK");else if(i==="MODE"){let a=(e[1]||"MANUAL").toUpperCase();a==="RTH"&&!this.home?r("ERR kein Home"):(this.mode=a,r("OK"))}else if(i==="TEST"){let a=(e[1]||"").toUpperCase();a==="ENABLE"?+e[2]&&this.armed?r("ERR scharf"):(this.tst=+e[2]?1:0,this.tst||(this.tThr=0,this.tPump=0),r("OK")):this.tst?a==="SERVO"?(this.tServo[+e[2]]=+e[3],r("OK")):a==="MOTOR"?(this.tThr=Math.max(-100,Math.min(100,+e[2]))/100,this.tWd=1.5,r("OK")):a==="PUMP"?(this.tPump=Math.max(-100,Math.min(100,+e[2]))/100,this.tWd=1.5,r("OK")):a==="OFF"?(this.tThr=0,this.tPump=0,this.tServo=[1500,1500,1500],r("OK")):r("ERR"):r("ERR kein Testmodus")}else if(i==="CAL")(e[1]||"").toUpperCase()==="DEPTH"&&(this.depth=0),r("OK");else if(i==="MIS"){let a=(e[1]||"").toUpperCase();if(a==="CLEAR")this.steps=[],r("OK");else if(a==="ADD")this.steps.push([e[2].toUpperCase(),+e[3]||0,+e[4]||0,+e[5]||0,+e[6]||0]),r("OK "+this.steps.length);else if(a==="GET")r("MIS "+JSON.stringify(this.steps));else if(a==="SAVE")r("OK");else if(a==="START"){if(!this.armed){r("ERR nicht scharf");return}let l=Uo(h=>this.par[h]);this.mis={plan:Bo(Fo(this.steps),l),t:0,last:-1},this.mode="MISSION",r("OK")}else a==="STOP"?(this.mis=null,this.mode="DEPTH",r("OK")):r("ERR")}else if(i==="HOME")(e[1]||"").toUpperCase()==="SET"?(this.home={lat:47.05+this.gy/111200,lon:8.3+this.gx/75900},r("OK")):r("HOME "+JSON.stringify({set:this.home?1:0,lat:this.home?this.home.lat:0,lon:this.home?this.home.lon:0}));else if(i==="BB"){let a=(e[1]||"").toUpperCase();if(this.armed)r("ERR erst DISARM");else if(a==="INFO")r("BB "+JSON.stringify({free:this.bbs?64e4:104e4,total:1048576,rec:36}));else if(a==="LIST")r("BB "+JSON.stringify(this.bbs===!1?[]:[{f:"bb_001.bin",n:Vs().length}]));else if(a==="CLEAR")this.bbs=!1,r("OK");else if(a==="DUMP"){if(this.bbs===!1||+e[2]!=1){r("ERR Datei fehlt");return}let l=Vs(),h=0,u=0,f=setInterval(()=>{for(let m=0;m<40&&h<l.length;m++){let d=l.slice(h,h+48);this._feed("BBD "+h+" "+Array.from(d,_=>_.toString(16).padStart(2,"0")).join("")+`
`),h+=d.length}h>=l.length&&(clearInterval(f),this._feed("BBE "+l.length+" "+pd(l).toString(16).padStart(8,"0")+`
`))},20)}else r("ERR BB ?")}else r(i==="REBOOT"||i==="BOOTSEL"?"OK":"ERR unbekannter Befehl")}_tick(){let e=performance.now()-this.t0,i=0,r=this.att[2],a=this.depth,l=0,h=-1,u=0,f="-",m=0,d=0,_=0,g=0;if(this.tst&&(this.tWd-=.05,this.tWd<=0&&(this.tThr=0,this.tPump=0),this.fill=Math.min(100,Math.max(0,this.fill+this.tPump*this.par["bal.flow"]*.05)),l=this.tThr),this.mis){this.mis.t+=.05*(this.speed||1);let w=this.mis.plan.pts,T=w.findIndex(k=>k.t>=this.mis.t);if(T<0)this.mis=null,this.mode="DEPTH",this.emit("ev","MISSION ENDE");else{let k=w[T];a=k.z,i=k.p,r=k.h,this.fill=k.f,l=k.thr/100,h=k.i,u=1,f=this.steps[h]?this.steps[h][0]:"-",m=this.mis.t,h!==this.mis.last&&(this.mis.last=h,this.emit("ev",`SCHRITT ${h+1} ${f}`))}}else this.tst||(a+=(0-a)*.02,i=Math.sin(e/3e3)*.4);if(this.depth=a,this.att=[Math.sin(e/2500)*.6,i,r],this.vb=Math.max(6.6,8.2-e/1e3*4e-4-l*l*.15),!this.hz||e-(this._lt||-1e9)<1e3/this.hz)return;this._lt=e;let b=(w,T,k,R)=>Math.round(Math.min(this.par[R],Math.max(this.par[k],this.tst?this.tServo[w]:this.par[T])));if(this.mode==="RTH"&&this.home){let w=(this.home.lon-8.3)*75900,T=(this.home.lat-47.05)*111200,k=w-this.gx,R=T-this.gy,D=Math.hypot(k,R);D>3&&(this.gx+=k/D*.5*.05*3,this.gy+=R/D*.5*.05*3,r=(Math.atan2(k,R)*180/Math.PI+360)%360,this.att[2]=r)}else this.armed&&this.mode!=="MANUAL"&&(this.gx+=Math.sin(r*Math.PI/180)*.15*.05,this.gy+=Math.cos(r*Math.PI/180)*.15*.05);let M=47.05+this.gy/111200,x=8.3+this.gx/75900,v=this.home?Math.hypot((this.home.lon-8.3)*75900-this.gx,(this.home.lat-47.05)*111200-this.gy):0,C={t:Math.round(e),m:this.mode,arm:this.armed,tst:this.tst,att:this.att.map(w=>+w.toFixed(1)),gyr:[.1,+(Math.cos(e/3e3)*.4).toFixed(1),0],d:+a.toFixed(3),tmp:14.2,prs:+(this.par["fluid.p_surface"]+a*this.par["fluid.density"]*.0981).toFixed(1),vb:+this.vb.toFixed(2),lk:this.leak,bc:this.bc||(this.armed?1:0),es:0,rc:[1500,1500,1500,1500,1e3,1e3,1e3,1e3],rcok:1,rssi:-62,out:{r:g,s:_,b:d,us:[b(0,"servo.rud.center","servo.rud.min","servo.rud.max"),b(1,"servo.stern.center","servo.stern.min","servo.stern.max"),b(2,"servo.bow.center","servo.bow.min","servo.bow.max")],mu:Math.round(1500+l*500),thr:l,pmp:this.tPump},fill:+this.fill.toFixed(1),tg:{d:this.mis?a:0,p:i,h:r,t:l*100},mis:{run:u,i:h,n:this.steps.length,ty:f,t:+m.toFixed(1)},cal:this.calst,ok:[1,1],fs:this.fs,w:"",lp:640,gps:{ok:a<.3?1:0,lat:+M.toFixed(6),lon:+x.toFixed(6),sat:9,hd:.9,spd:this.armed?.5:0,home:this.home?1:0,dist:+v.toFixed(1),brg:0,ph:this.mode==="RTH"?v>3?3:4:0},bb:0};this._feed("T "+JSON.stringify(C)+`
`)}};var be={bg:"#071017",line:"#22323f",dim:"#71818e",txt:"#dfe7ec",acc:"#ff7a59",sky:"#0d2233",gnd:"#04080c",ok:"#4fb477",warn:"#e0a93b",bad:"#e0584b",tgt:"#56c8dc",grid:"#122029"},Vt=be;function Vo(s,t){let e=S("canvas",{width:s*2,height:t*2,style:{width:s+"px",height:"auto",maxWidth:"100%"}}),i=e.getContext("2d");return i.scale(2,2),{c:e,x:i,w:s,h:t}}var Xm='Bahnschrift, "DIN Alternate", "Arial Narrow", Arial, sans-serif',fn=(s,t,e="")=>{s.font=`${e} ${t}px ${Xm}`},Ze=Math.PI/180,md=(s,t=1)=>{let e=+s.toFixed(t);return(e>0?"+":e<0?"\u2212":"\xB1")+Math.abs(e).toFixed(t)};function gd(s,t,e,i){let r=s.createRadialGradient(t,e-i*.3,i*.1,t,e,i);r.addColorStop(0,"#0e1b25"),r.addColorStop(1,"#03070a"),s.fillStyle=r,s.beginPath(),s.arc(t,e,i,0,7),s.fill(),s.lineWidth=3,s.strokeStyle="#1d2a35",s.stroke(),s.lineWidth=1,s.strokeStyle="#3a4c5a",s.beginPath(),s.arc(t,e,i-2.5,0,7),s.stroke(),s.fillStyle="#25333e",[45,135,225,315].forEach(a=>{s.beginPath(),s.arc(t+Math.cos(a*Ze)*(i+.5),e+Math.sin(a*Ze)*(i+.5),2.2,0,7),s.fill()})}function qm(s,t,e){let i=t*.075,r=t/2-i*1.6,a=-t*.18,l=-t/2+i*.5,h=i*.28;s.fillStyle=e,s.beginPath(),s.moveTo(a,-i),s.lineTo(r,-i),s.bezierCurveTo(r+i*1.25,-i,t/2,-i*.55,t/2,0),s.bezierCurveTo(t/2,i*.55,r+i*1.25,i,r,i),s.lineTo(a,i),s.bezierCurveTo(a-t*.12,i,l+i*.4,h,l,h),s.lineTo(l,-h),s.bezierCurveTo(l+i*.4,-h,a-t*.12,-i,a,-i),s.closePath(),s.fill(),s.beginPath(),s.moveTo(t*.08,-i),s.lineTo(t*.115,-i*2.3),s.lineTo(t*.22,-i*2.3),s.lineTo(t*.25,-i),s.closePath(),s.fill();let u=l+i*.55;s.beginPath(),s.moveTo(u+i*1.6,-i*.45),s.lineTo(u+i*.2,-i*1.65),s.lineTo(u-i*.15,-i*1.65),s.lineTo(u-i*.15,-h),s.closePath(),s.fill(),s.beginPath(),s.moveTo(u+i*1.6,i*.45),s.lineTo(u+i*.2,i*1.65),s.lineTo(u-i*.15,i*1.65),s.lineTo(u-i*.15,h),s.closePath(),s.fill(),s.fillRect(l-i*.35,-i*.75,i*.22,i*1.5)}function Ym(s,t,e){let i=t*.085,r=-t/2+i*1.6,a=t*.18,l=t/2-i*.5,h=i*.28;s.fillStyle=e,s.beginPath(),s.moveTo(-i,a),s.lineTo(-i,r),s.bezierCurveTo(-i,r-i*1.25,-i*.55,-t/2,0,-t/2),s.bezierCurveTo(i*.55,-t/2,i,r-i*1.25,i,r),s.lineTo(i,a),s.bezierCurveTo(i,a+t*.12,h,l-i*.4,h,l),s.lineTo(-h,l),s.bezierCurveTo(-h,l-i*.4,-i,a+t*.12,-i,a),s.closePath(),s.fill();let u=l-i*.55;s.beginPath(),s.moveTo(-i*.45,u-i*1.6),s.lineTo(-i*1.65,u-i*.2),s.lineTo(-i*1.65,u+i*.15),s.lineTo(-h,u+i*.15),s.closePath(),s.fill(),s.beginPath(),s.moveTo(i*.45,u-i*1.6),s.lineTo(i*1.65,u-i*.2),s.lineTo(i*1.65,u+i*.15),s.lineTo(h,u+i*.15),s.closePath(),s.fill(),s.fillRect(-i*.75,l+i*.13,i*1.5,i*.22),s.fillStyle="#071017",s.fillRect(-i*.38,-t*.25,i*.76,t*.17)}function _d(s=260){let{c:t,x:e,w:i,h:r}=Vo(s,s),a=i/2,l=r/2,h=s/2-5,u={el:t,draw(f=0,m=0,d){e.clearRect(0,0,i,r),gd(e,a,l,h),e.save(),e.translate(a,l);let _=h-8;e.save(),e.beginPath(),e.arc(0,0,_-16,0,7),e.clip(),e.strokeStyle=be.grid,e.lineWidth=1;for(let C=-_;C<=_;C+=12)e.beginPath(),e.moveTo(-_,C+.5),e.lineTo(_,C+.5),e.stroke();e.restore(),e.strokeStyle="#3c5262",e.setLineDash([2,3]),e.beginPath(),e.moveTo(-_+16,0),e.lineTo(_-16,0),e.stroke(),e.setLineDash([]),fn(e,9.5,"600"),e.textBaseline="middle";for(let C=-40;C<=40;C+=5){let w=C%10===0;[0,1].forEach(T=>{let k=(T?180+C:-C)*Ze,R=_,D=_-(w?10:5);e.strokeStyle=w?be.txt:be.dim,e.lineWidth=w?1.4:1,e.beginPath(),e.moveTo(Math.cos(k)*D,Math.sin(k)*D),e.lineTo(Math.cos(k)*R,Math.sin(k)*R),e.stroke(),w&&C&&!T&&(e.fillStyle=be.dim,e.textAlign="right",e.fillText(String(Math.abs(C)),Math.cos(k)*(_-13),Math.sin(k)*(_-13)))})}if(e.fillStyle=be.dim,fn(e,8,"600"),e.textAlign="center",e.fillText("BUG",_*.62,-_*.7),e.fillText("HECK",-_*.62,-_*.7),d!=null){let C=-d*Ze;e.strokeStyle=be.tgt,e.lineWidth=3,e.beginPath(),e.arc(0,0,_+3,C-2.5*Ze,C+2.5*Ze),e.stroke(),e.lineWidth=1,e.setLineDash([3,3]),e.beginPath(),e.moveTo(Math.cos(C)*_*.62,Math.sin(C)*_*.62),e.lineTo(Math.cos(C)*(_-12),Math.sin(C)*(_-12)),e.stroke(),e.setLineDash([])}e.save(),e.rotate(-m*Ze),e.strokeStyle=be.acc,e.lineWidth=1.2,e.beginPath(),e.moveTo(_*.64,0),e.lineTo(_-11,0),e.moveTo(-_*.64,0),e.lineTo(-_+11,0),e.stroke(),qm(e,_*1.22,"#c9d6de"),e.restore();let g=_-24,b=50,M=130;e.strokeStyle="#22313d",e.lineWidth=6,e.beginPath(),e.arc(0,0,g,b*Ze,M*Ze),e.stroke(),e.strokeStyle="rgba(224,88,75,.6)",[[b,b+10],[M-10,M]].forEach(([C,w])=>{e.beginPath(),e.arc(0,0,g,C*Ze,w*Ze),e.stroke()}),e.lineWidth=1,e.strokeStyle=be.dim;for(let C=-40;C<=40;C+=10){let w=(90-C)*Ze;e.beginPath(),e.moveTo(Math.cos(w)*(g-6),Math.sin(w)*(g-6)),e.lineTo(Math.cos(w)*(g+5),Math.sin(w)*(g+5)),e.stroke()}fn(e,8,"600"),e.fillStyle=be.dim,e.textAlign="center",e.fillText("BB",Math.cos(118*Ze)*(g-15),Math.sin(118*Ze)*(g-15)),e.fillText("STB",Math.cos(62*Ze)*(g-15),Math.sin(62*Ze)*(g-15));let x=Math.max(-44,Math.min(44,f)),v=(90-x)*Ze;e.save(),e.translate(Math.cos(v)*g,Math.sin(v)*g),e.rotate(v-Math.PI/2),e.fillStyle=Math.abs(f)>30?be.bad:be.acc,e.beginPath(),e.moveTo(0,7),e.lineTo(-5,-7),e.lineTo(5,-7),e.closePath(),e.fill(),e.restore(),e.textBaseline="middle",e.textAlign="center",fn(e,8,"600"),e.fillStyle=be.dim,e.fillText("NICK",0,-_*.56),fn(e,17,"600"),e.fillStyle=be.txt,e.fillText(md(m)+"\xB0",0,-_*.4),fn(e,8,"600"),e.fillStyle=be.dim,e.fillText("ROLL",0,_*.3),fn(e,13,"600"),e.fillStyle=be.txt,e.fillText((f>.05?"STB ":f<-.05?"BB ":"")+Math.abs(f).toFixed(1)+"\xB0",0,_*.44),e.restore()}};return u.draw(),u}function vd(s=260){let{c:t,x:e}=Vo(s,s),i=s/2,r=s/2,a=s/2-5,l={el:t,draw(h=0,u){h=(h%360+360)%360,e.clearRect(0,0,s,s),gd(e,i,r,a),e.save(),e.translate(i,r);let f=a-8;e.strokeStyle="#141f28",e.lineWidth=26,e.beginPath(),e.arc(0,0,f-13,0,7),e.stroke(),e.save(),e.rotate(-h*Ze),e.textAlign="center",e.textBaseline="middle";for(let m=0;m<360;m++){let d=m%10===0,_=m%5===0;if(!(!_&&s<200)){if(e.save(),e.rotate(m*Ze),e.strokeStyle=d?be.txt:_?"#9fb0bc":"#4d606e",e.lineWidth=d?1.4:1,e.beginPath(),e.moveTo(0,-f),e.lineTo(0,-f+(d?9:_?6:3.5)),e.stroke(),m%30===0){let g={0:"N",90:"E",180:"S",270:"W"}[m];g?(fn(e,13,"700"),e.fillStyle=m===0?be.acc:be.txt,e.fillText(g,0,-f+19)):(fn(e,9.5,"600"),e.fillStyle="#b7c4cd",e.fillText(String(m).padStart(3,"0"),0,-f+18))}e.restore()}}if(u!=null&&(e.save(),e.rotate(u*Ze),e.fillStyle=be.tgt,e.beginPath(),e.moveTo(-7,-f-2),e.lineTo(7,-f-2),e.lineTo(7,-f+5),e.lineTo(0,-f),e.lineTo(-7,-f+5),e.closePath(),e.fill(),e.restore()),e.restore(),e.strokeStyle="#2c3e4b",e.lineWidth=1,e.beginPath(),e.arc(0,0,f-30,0,7),e.stroke(),u!=null){let m=(u-h+540)%360-180;e.strokeStyle=be.tgt,e.lineWidth=3,e.beginPath(),e.arc(0,0,f-30,-Math.PI/2,(-90+m)*Ze,m<0),e.stroke()}for(let m=45;m<360;m+=45)e.save(),e.rotate(m*Ze),e.strokeStyle="#3d5262",e.beginPath(),e.moveTo(0,-f+30),e.lineTo(0,-f+37),e.stroke(),e.restore();e.fillStyle=be.acc,e.beginPath(),e.moveTo(0,-f+3),e.lineTo(-6,-f-7),e.lineTo(6,-f-7),e.closePath(),e.fill(),e.fillRect(-.75,-f+2,1.5,34),Ym(e,f*.66,"#c9d6de"),e.fillStyle="#02060a",e.strokeStyle="#3a4c5a",e.lineWidth=1,e.beginPath(),e.rect(-27,f*.38,54,21),e.fill(),e.stroke(),fn(e,15,"600"),e.fillStyle=be.txt,e.textAlign="center",e.textBaseline="middle",e.fillText(String(Math.round(h)%360).padStart(3,"0")+"\xB0",0,f*.38+11),u!=null&&(fn(e,8.5,"600"),e.fillStyle=be.tgt,e.fillText("SOLL "+String(Math.round((u%360+360)%360)%360).padStart(3,"0")+"\xB0",0,f*.38+31)),e.restore()}};return l.draw(),l}function xd(s=90,t=260){let{c:e,x:i}=Vo(s,t);return{el:e,draw(r=0,a=3,l,h){i.clearRect(0,0,s,t);let u=40,f=t-30,m=(f-u)/a;i.fillStyle="#03070a",i.fillRect(0,0,s,t),i.strokeStyle="#1d2a35",i.lineWidth=2,i.strokeRect(1,1,s-2,t-2);let d=44,_=18,g=i.createLinearGradient(0,u,0,f);g.addColorStop(0,"#174b66"),g.addColorStop(1,"#03111a"),i.fillStyle=g,i.fillRect(d,u,_,f-u),i.fillStyle="#4c87a6",i.fillRect(d,u-1,_,2),fn(i,9.5,"600"),i.textAlign="right",i.textBaseline="middle",i.lineWidth=1;let b=a<=5?.5:a<=20?2:10;for(let v=0;v*b/2<=a+1e-6;v++){let C=v*b/2,w=u+C*m,T=v%2===0;i.strokeStyle=T?"#9fb0bc":"#4d606e",i.beginPath(),i.moveTo(T?34:38,w),i.lineTo(d,w),i.stroke(),T&&(i.fillStyle=be.dim,i.fillText(C.toFixed(b<1?1:0),31,w))}if(h!==void 0&&h<a){let v=u+h*m;i.fillStyle="rgba(224,88,75,.22)",i.fillRect(d,v,_,f-v),i.strokeStyle=be.bad,i.setLineDash([3,2]),i.beginPath(),i.moveTo(30,v),i.lineTo(s-4,v),i.stroke(),i.setLineDash([])}let M=l!=null&&l>0;if(M){let v=u+lc(l,0,a)*m;i.fillStyle=be.tgt,i.beginPath(),i.moveTo(d+_+1,v),i.lineTo(d+_+11,v-6),i.lineTo(d+_+11,v+6),i.closePath(),i.fill()}let x=u+lc(r,0,a)*m;i.fillStyle=be.acc,i.fillRect(d-2,x-1,_+4,2),i.beginPath(),i.moveTo(d-2,x),i.lineTo(d-10,x-5),i.lineTo(d-10,x+5),i.closePath(),i.fill(),i.fillStyle="#02060a",i.strokeStyle="#3a4c5a",i.beginPath(),i.rect(6.5,8.5,s-13,22),i.fill(),i.stroke(),fn(i,14,"600"),i.fillStyle=be.txt,i.textAlign="center",i.fillText(r.toFixed(2)+" m",s/2,20),fn(i,8.5,"600"),i.fillStyle=M?be.tgt:be.dim,i.fillText(M?"\u0394 "+md(r-l,2)+" m":"SOLL \u2013",s/2,t-15)}}}var lc=(s,t,e)=>Math.min(e,Math.max(t,s));function yd(s,t={}){let e=t.w||520,i=t.h||150,{c:r,x:a}=Vo(e,i),l=t.span||30,h=s.map(()=>[]),u=0;return{el:r,push(m,d){d.forEach((_,g)=>{if(_!==void 0&&!isNaN(_))for(h[g].push([m,_]);h[g].length&&m-h[g][0][0]>l;)h[g].shift()}),u=m},clear(){h.forEach(m=>{m.length=0})},draw(){a.clearRect(0,0,e,i),a.fillStyle=be.bg,a.fillRect(0,0,e,i);let m=t.min,d=t.max;if(m===void 0||d===void 0){m=1e9,d=-1e9,h.forEach(b=>b.forEach(M=>{m=Math.min(m,M[1]),d=Math.max(d,M[1])})),m>d&&(m=0,d=1);let g=(d-m)*.1||.5;m-=g,d+=g}a.strokeStyle=be.grid,a.lineWidth=1,fn(a,9),a.fillStyle=be.dim,a.textAlign="left";for(let g=0;g<=4;g++){let b=4+(i-8)*g/4;a.beginPath(),a.moveTo(0,b),a.lineTo(e,b),a.stroke(),a.fillText((d-(d-m)*g/4).toFixed(t.dec??1),3,b-2)}s.forEach((g,b)=>{a.strokeStyle=g.color,a.lineWidth=1.5,a.beginPath();let M=!0;h[b].forEach(x=>{let v=e-(u-x[0])/l*e,C=4+(i-8)*(1-(x[1]-m)/(d-m||1));M?(a.moveTo(v,C),M=!1):a.lineTo(v,C)}),a.stroke()});let _=e-6;a.textAlign="right",fn(a,10);for(let g=s.length-1;g>=0;g--){a.fillStyle=s[g].color;let b=s[g].name+(h[g].length?" "+h[g][h[g].length-1][1].toFixed(t.dec??1):"");a.fillText(b,_,12),_-=a.measureText(b).width+12}}}}function Ln(s,t,e,i,r={}){let a=S("div",{class:"bar-fill"}),l=S("span",{class:"bar-val"},"\u2013");return{el:S("div",{class:"bar"},S("span",{class:"bar-l"},s),S("div",{class:"bar-t"},a,r.mid?S("i",{class:"bar-mid"}):null),l),set(u,f,m){if(u===void 0||isNaN(u)){l.textContent="\u2013",a.style.width="0";return}let d=(u-t)/(e-t);if(r.mid){let _=(0-t)/(e-t);a.style.left=Math.min(d,_)*100+"%",a.style.width=Math.abs(d-_)*100+"%"}else a.style.left="0",a.style.width=lc(d,0,1)*100+"%";a.style.background=m||"",l.textContent=f??u.toFixed(r.dec??0)+(i?" "+i:"")}}}var an=s=>{let t=S("span",{class:"chip"},s);return{el:t,set(e,i){t.textContent=e===void 0?s:e,t.className="chip "+(i||"")}}},le=(s,t)=>{let e=S("b",null,"\u2013"),i=S("div",{class:"stat"},S("span",null,s),S("div",null,e,t?S("small",null,t):null));return{el:i,set(r,a){e.textContent=r,i.className="stat "+(a||"")}}};async function Me(s,t,e){if(!j.connected)return re("Nicht verbunden","bad"),null;let i=await j.link.cmd(s,e);return i.ok?t&&re(t,"ok"):re(`${s}: ${i.text}`,"bad"),i}var Wo=new Map;setInterval(()=>{if(!(!j.connected||j.link.q.length>2))for(let[s,t]of Wo)j.link.cmd(t,800),Wo.delete(s)},50);var Go=(s,t)=>Wo.set(s,t);async function Wr(s,t){let e=await Me(`SET ${s} ${t}`);return e&&e.ok&&(j.par[s]=+t,Ee.emit("par")),e}async function Gr(){let s=await j.link.cmd("GET",4e3);return s.ok&&Array.isArray(s.data)&&(j.parList=s.data,j.par={},s.data.forEach(t=>{j.par[t.k]=t.v}),Ee.emit("par")),s}var Ve=(s,...t)=>S("section",{class:"card"},S("h3",null,s),...t),Ue=(s,t,e="")=>S("button",{class:"btn "+e,onclick:t},s),In=s=>S("p",{class:"note"},s);function bd(s){let t=S("div",{class:"kv"});return{el:S("div",{class:"page"},S("div",{class:"hero"},S("div",null,S("h1",null,"FATHOM Konfigurator"),S("p",null,"Diagnose, Kalibration, Tests und Missionsplanung f\xFCr das U-Boot. Per USB zum Flashen und Testen am Tisch, per WLAN f\xFCr Auftr\xE4ge und Blackbox im Feld.")),S("div",{class:"hero-btns"},Ue("Verbinden (USB)",()=>s.connect(),"primary big"),Ue("Per WLAN verbinden",()=>s.wifi(),"big"),Ue("Demo Boot starten",()=>s.demo(),"big"))),S("div",{class:"grid2"},Ve("Verbindung",t,"serial"in navigator?In("USB braucht Chrome oder Edge am PC (Web Serial)."):S("p",{class:"warn-box"},"USB geht in diesem Browser nicht (kein Web Serial). F\xFCr USB Chrome oder Edge am PC verwenden. WLAN und Demo laufen trotzdem."),S("p",{class:"wifi-box"},"WLAN geht mit jedem Browser, auch am Handy: mit dem Boot WLAN FATHOM-XXXX verbinden und http://192.168.4.1 \xF6ffnen. Funk ist nur im DISARMED aktiv. ARM und Missionsstart gehen nur \xFCber Crossfire oder USB."),S("div",{class:"row"},Ue("Boot neu starten",()=>Me("REBOOT","Neustart")),Ue("Bootloader (BOOTSEL)",()=>{confirm("Boot springt in den USB Bootloader. Danach erscheint ein Laufwerk RPI-RP2 zum Flashen. Fortfahren?")&&Me("BOOTSEL")}))),Ve("Erste Inbetriebnahme",S("ol",{class:"steps"},S("li",null,"Boot trocken auf den Tisch, nur USB (Akku abgesteckt, Propeller ab)."),S("li",null,"Verbinden. Unter Sensoren pr\xFCfen: Nick + bei Nase hoch, Roll + bei rechte Seite runter, Tiefe nahe 0."),S("li",null,"Kalibration: Tiefe auf Null, Lage Null, IMU Balken auf 3, Batteriespannung abgleichen."),S("li",null,"Servos: Mitte und Endpunkte einstellen, Richtung pr\xFCfen (Heck hoch = Nase hoch)."),S("li",null,"Tests: Motor erst ohne Propeller, dann mit Gaslimit 10 %. Pumpe f\xFCllt (+) und leert (\u2212)."),S("li",null,"Dichtheitstest, Leckage Sensor Wert pr\xFCfen, dann erst ins Wasser. Parameter sichern (Speichern)."))))),update(){},show(){let i=j.info;t.innerHTML="",[["Status",j.connected?j.demo?"Demo (simuliert)":"verbunden":"getrennt"],["Firmware",i?`${i.fw} ${i.ver}`:"\u2013"],["Hardware",i?i.hw:"\u2013"],["Parameter",i?i.params:"\u2013"],["Max Missionsschritte",i?i.maxsteps:"\u2013"]].forEach(([r,a])=>t.append(S("span",null,r),S("b",null,String(a))))}}}function Md(){let s=_d(290),t=vd(290),e=xd(96,290),i={pitch:le("Nick","\xB0"),roll:le("Roll","\xB0"),yaw:le("Kurs","\xB0"),depth:le("Tiefe","m"),temp:le("Wasser","\xB0C"),vb:le("Akku","V"),fill:le("Ballast","%"),thr:le("Vortrieb","%"),spd:le("Fahrt ca.","m/s")},r={arm:an("DISARMED"),mode:an("MANUAL"),rc:an("RC"),gps:an("GPS"),imu:an("IMU"),dep:an("Tiefe"),leak:an("Leck"),tst:an("Test"),mis:an("Mission")},a={rud:Ln("Seitenruder",-45,45,"\xB0",{mid:!0}),stn:Ln("Heck Tiefenruder",-45,45,"\xB0",{mid:!0}),bow:Ln("Bug Tiefenruder",-45,45,"\xB0",{mid:!0}),thr:Ln("Motor",-100,100,"%",{mid:!0}),pmp:Ln("Pumpe",-100,100,"%",{mid:!0}),fill:Ln("Ballast F\xFCllung",0,100,"%"),vb:Ln("Akku 2S",6,8.4,"V",{dec:2}),lk:Ln("Leckage",0,1,"",{dec:2})},l=S("div",{class:"alert",style:{display:"none"}}),h=S("div",{class:"log"}),u=S("div",{class:"kv"}),f=S("div",{class:"page dash"},l,S("div",{class:"chips"},Object.values(r).map(d=>d.el)),S("div",{class:"instr"},S("div",{class:"ins"},S("div",{class:"cap"},"Lage"),s.el),S("div",{class:"ins"},S("div",{class:"cap"},"Kurs"),t.el),S("div",{class:"ins"},S("div",{class:"cap"},"Tiefe"),e.el)),S("div",{class:"stats"},Object.values(i).map(d=>d.el)),S("div",{class:"grid2"},Ve("Ausg\xE4nge",Object.values(a).map(d=>d.el)),Ve("Mission und Ziele",u,S("h4",null,"Ereignisse"),h))),m=()=>{h.innerHTML="",j.events.slice(-40).reverse().forEach(d=>h.append(S("div",{class:"ev "+d.kind},S("time",null,d.t.toTimeString().slice(0,8)),d.m)))};return Ee.on("ev",m),{el:f,show:m,update(d){s.draw(d.att[0],d.att[1],d.mis.run||d.m!=="MANUAL"?d.tg.p:void 0),t.draw(d.att[2],d.m==="MANUAL"?void 0:d.tg.h),e.draw(d.d,Math.max(j.get("lim.depth",3)*1.15,1),d.m==="DEPTH"||d.m==="MISSION"?d.tg.d:void 0,j.get("lim.depth",3)),i.pitch.set(wt(d.att[1])),i.roll.set(wt(d.att[0])),i.yaw.set(wt(d.att[2],0).padStart(3,"0")),i.depth.set(wt(d.d,2)),i.temp.set(wt(d.tmp)),i.fill.set(wt(d.fill,0)),i.thr.set(wt(d.out.thr*100,0)),i.vb.set(wt(d.vb,2),d.vb<j.get("bat.crit",6.4)?"bad":d.vb<j.get("bat.warn",7)?"warn":""),i.spd.set(wt(Math.abs(d.out.thr*100)*j.get("spd.ms_per_pct",.014),2)),r.arm.set(d.arm?"ARMED":"DISARMED",d.arm?"bad":""),r.mode.set(d.m,d.m==="FAILSAFE"?"bad":d.m==="MISSION"||d.m==="RTH"?"acc":""),r.rc.set(d.rcok?`RC ${d.rssi} dBm`:"RC fehlt",d.rcok?"ok":"warn"),r.imu.set(d.ok[0]?"IMU ok":"IMU Fehler",d.ok[0]?"ok":"bad"),r.dep.set(d.ok[1]?"Tiefensensor ok":"Tiefensensor Fehler",d.ok[1]?"ok":"bad"),d.gps&&r.gps.set(d.gps.ok?`GPS ${d.gps.sat} Sat`:"GPS kein Fix",d.gps.ok?"ok":""),r.leak.set(d.lk>j.get("leak.threshold",.35)?"LECKAGE":"trocken",d.lk>j.get("leak.threshold",.35)?"bad":"ok"),r.tst.set(d.tst?"TESTMODUS":"Test aus",d.tst?"warn":""),r.mis.set(d.mis.run?`Mission ${d.mis.i+1}/${d.mis.n} ${d.mis.ty}`:"Mission aus",d.mis.run?"acc":""),a.rud.set(d.out.r,wt(d.out.r)+" \xB0 / "+d.out.us[0]+" \xB5s"),a.stn.set(d.out.s,wt(d.out.s)+" \xB0 / "+d.out.us[1]+" \xB5s"),a.bow.set(d.out.b,wt(d.out.b)+" \xB0 / "+d.out.us[2]+" \xB5s"),a.thr.set(d.out.thr*100,wt(d.out.thr*100,0)+" % / "+d.out.mu+" \xB5s",d.out.thr<0?Vt.warn:""),a.pmp.set(d.out.pmp*100,wt(d.out.pmp*100,0)+" %"),a.fill.set(d.fill,wt(d.fill,0)+" %"),a.vb.set(d.vb,wt(d.vb,2)+" V",d.vb<j.get("bat.warn",7)?Vt.warn:Vt.ok),a.lk.set(d.lk,wt(d.lk,2),d.lk>j.get("leak.threshold",.35)?Vt.bad:Vt.ok);let _=d.fs?"FAILSAFE: "+d.fs:d.w;l.style.display=_?"block":"none",l.textContent=_,u.innerHTML="",[["Ziel Tiefe",wt(d.tg.d,2)+" m"],["Ziel Nick",wt(d.tg.p)+" \xB0"],["Ziel Kurs",wt(d.tg.h,0)+" \xB0"],["Ziel Vortrieb",wt(d.tg.t,0)+" %"],["Schritt",d.mis.run?`${d.mis.i+1} von ${d.mis.n} (${d.mis.ty})`:"\u2013"],["Schrittzeit",d.mis.run?wt(d.mis.t,0)+" s":"\u2013"],["Druck",wt(d.prs,1)+" mbar"],["Zyklus",d.lp+" \xB5s"]].forEach(([g,b])=>u.append(S("span",null,g),S("b",null,b)))}}}function Sd(){let s=(u,f)=>yd(u,f),t={att:s([{name:"Roll",color:"#e0a93b"},{name:"Nick",color:"#3e86e0"}],{min:-45,max:45,dec:1}),yaw:s([{name:"Kurs",color:"#4fb477"},{name:"Ziel",color:"#8a6fd0"}],{min:0,max:360,dec:0}),gyr:s([{name:"Gx",color:"#e0584b"},{name:"Gy",color:"#4fb477"},{name:"Gz",color:"#3e86e0"}],{min:-60,max:60,dec:1}),dep:s([{name:"Tiefe m",color:"#3e86e0"},{name:"Ziel",color:"#e0a93b"}],{}),pwr:s([{name:"Akku V",color:"#4fb477"}],{min:6,max:8.6,dec:2}),lk:s([{name:"Leck",color:"#e0584b"},{name:"Ballast %/100",color:"#8a6fd0"}],{min:0,max:1,dec:2})},e=S("div",{class:"kv wide"}),i=S("div",{class:"rcs"}),r=Array.from({length:8},(u,f)=>Ln("CH"+(f+1),1e3,2e3,"\xB5s"));r.forEach(u=>i.append(u.el));let a=["rc.ch.bow","rc.ch.ele","rc.ch.thr","rc.ch.rud","rc.ch.arm","rc.ch.mode","rc.ch.mission"],l=["Bugruder","Tiefenruder","Vortrieb","Seitenruder","Arm","Modus","Mission"];return{el:S("div",{class:"page"},S("div",{class:"grid2"},Ve("Lage",t.att.el),Ve("Kurs",t.yaw.el),Ve("Gyro (\xB0/s)",t.gyr.el),Ve("Tiefe",t.dep.el),Ve("Akku",t.pwr.el),Ve("Leckage und Ballast",t.lk.el)),S("div",{class:"grid2"},Ve("Rohwerte",e),Ve("RC Kan\xE4le (Crossfire)",i))),show(){Object.values(t).forEach(u=>u.clear())},update(u){let f=u.t/1e3;t.att.push(f,[u.att[0],u.att[1]]),t.yaw.push(f,[u.att[2],u.m==="MANUAL"?void 0:u.tg.h]),t.gyr.push(f,u.gyr),t.dep.push(f,[u.d,u.m==="DEPTH"||u.m==="MISSION"?u.tg.d:void 0]),t.pwr.push(f,[u.vb]),t.lk.push(f,[u.lk,u.fill/100]),Object.values(t).forEach(m=>m.draw()),e.innerHTML="",[["Druck",wt(u.prs,1)+" mbar"],["Temperatur",wt(u.tmp)+" \xB0C"],["Tiefe",wt(u.d,3)+" m"],["Roll / Nick / Kurs",`${wt(u.att[0])} / ${wt(u.att[1])} / ${wt(u.att[2])} \xB0`],["Gyro",u.gyr.map(m=>wt(m)).join(" / ")+" \xB0/s"],["Akku",wt(u.vb,2)+" V"],["Leckage",wt(u.lk,2)],["IMU Kalibrierung",`Sys ${u.cal[0]} Gyr ${u.cal[1]} Acc ${u.cal[2]} Mag ${u.cal[3]}`],["Zykluszeit",u.lp+" \xB5s"],["Modus",u.m]].forEach(([m,d])=>e.append(S("span",null,m),S("b",null,d))),u.rc.forEach((m,d)=>{let _=a.findIndex(g=>j.get(g,0)===d+1);r[d].set(m,`${m} \xB5s${_>=0?" \xB7 "+l[_]:""}`,u.rcok?"":Vt.dim)})}}}async function $m(s){if(!j.connected)return!1;let t=await j.link.cmd(`TEST ENABLE ${s?1:0}`);return t.ok?!0:(re(s?"Testmodus nur im DISARMED Zustand: "+t.text:t.text,"bad"),!1)}function wd(){let s=S("b",null,"Testmodus aus"),t=S("div",{class:"testbar"},s,S("span",null,"Servos, Motor und Pumpe lassen sich nur im Testmodus direkt ansteuern. Nur im DISARMED Zustand.")),e=Ue("Testmodus einschalten",async()=>{let i=!(j.tel&&j.tel.tst);await $m(i)&&(i||Me("TEST OFF"))},"primary");return t.append(e),{el:t,update(i){s.textContent=i.tst?"TESTMODUS AKTIV":"Testmodus aus",t.className="testbar"+(i.tst?" on":""),e.textContent=i.tst?"Testmodus beenden":"Testmodus einschalten"}}}function Td(){let s=wd(),t={d:le("Tiefe","m"),p:le("Druck","mbar"),t:le("Temp","\xB0C"),pi:le("Nick","\xB0"),ro:le("Roll","\xB0"),yw:le("Kurs","\xB0"),vb:le("Akku","V"),lk:le("Leckage","")},e=["Gesamt","Gyro","Beschleunigung","Magnet"].map((h,u)=>Ln(h,0,3,"",{dec:0})),i=S("input",{type:"number",step:"0.01",placeholder:"Multimeter Volt",class:"in"}),r=[["Seitenruder","rud",0],["Heck Tiefenruder","stern",1],["Bug Tiefenruder","bow",2]].map(([h,u,f])=>{let m=S("b",null,"1500 \xB5s"),d=S("input",{type:"range",min:800,max:2200,step:5,value:1500,class:"sl",oninput:()=>{m.textContent=d.value+" \xB5s",Go("sv"+f,`TEST SERVO ${f} ${d.value}`)}}),_=async(b,M)=>{let x=await Wr(`servo.${u}.${b}`,d.value);x&&x.ok&&re(`${h} ${M} = ${d.value} \xB5s`,"ok")},g=S("input",{type:"checkbox",onchange:()=>Wr(`servo.${u}.rev`,g.checked?1:0)});return{el:S("div",{class:"sv"},S("div",{class:"svh"},S("b",null,h),m),d,S("div",{class:"row"},Ue("Mitte",()=>_("center","Mitte")),Ue("Min",()=>_("min","Min")),Ue("Max",()=>_("max","Max")),Ue("Zur\xFCck auf Mitte",()=>{d.value=j.get(`servo.${u}.center`,1500),d.oninput()}),S("label",{class:"chk"},g," umkehren"))),sync(){g.checked=j.get(`servo.${u}.rev`,0)>.5}}}),a=S("div",{class:"page"},s.el,S("div",{class:"stats"},Object.values(t).map(h=>h.el)),S("div",{class:"grid2"},Ve("1  Tiefensensor",In("Boot an der Luft, trocken. Setzt den aktuellen Druck als Oberfl\xE4che. Vor jedem Tauchgang wiederholen (Wetter \xE4ndert den Luftdruck)."),S("div",{class:"row"},Ue("Tiefe auf Null setzen",()=>Me("CAL DEPTH","Oberfl\xE4chendruck gesetzt"),"primary"))),Ve("2  Lage Null",In("Boot im Gestell exakt waagrecht und ohne Rollen ausrichten (Wasserwaage auf dem Rohr). Dann best\xE4tigen. Nick und Roll werden zu 0 gesetzt."),S("div",{class:"row"},Ue("Lage als Null setzen",()=>Me("CAL LEVEL","Lage Null gesetzt"),"primary")),In("Vorzeichenprobe: Nase hoch \u2192 Nick +. Rechte Seite runter \u2192 Roll +. Stimmt es nicht, unter Parameter imu.invert \xE4ndern (1 Roll, 2 Nick, 4 Kurs).")),Ve("3  IMU Kalibrierung (BNO055)",e.map(h=>h.el),In("Gyro: 3 s ruhig liegen lassen. Beschleunigung: Boot in 6 Lagen jeweils 3 s ruhig halten. Magnet nur im NDOF Modus n\xF6tig, in der R\xF6hre mit Motoren ohnehin unzuverl\xE4ssig (Standard: IMU Modus ohne Kompass)."),S("div",{class:"row"},Ue("Profil im BNO055 sichern",()=>Me("CAL IMUSAVE","IMU Profil gespeichert")))),Ve("4  Batteriespannung",In("Akku am Stecker mit Multimeter messen und Wert eintragen. Der Spannungsteiler wird damit abgeglichen."),S("div",{class:"row"},i,Ue("Abgleichen",()=>{+i.value>4?Me(`CAL VBAT ${i.value}`,"Batterie abgeglichen"):re("Spannung eintragen","warn")},"primary"))),Ve("5  Servos: Mitte, Endpunkte, Richtung",In("Testmodus einschalten, Schieber bewegen. Mitte: Ruder genau neutral, dann Mitte dr\xFCcken. Endpunkte: bis kurz vor den mechanischen Anschlag, dann Min oder Max. Servo brummt am Anschlag und wird hei\xDF."),r.map(h=>h.el),In("Richtung: Heck Tiefenruder nach oben = Nase hoch. Seitenruder rechts = Boot dreht nach rechts (Kurs +).")),Ve("6  Leckage Sensor",In("Trockenwert merken (sollte unter 0.1 liegen). Mit einem feuchten Finger an den Sonden muss der Wert \xFCber die Schwelle steigen. Schwelle unter Parameter leak.threshold."),S("div",{class:"row"},Ue("Sensoren Seite \xF6ffnen",()=>Ee.emit("goto","sensors")))))),l=!1;return Ee.on("par",()=>r.forEach(h=>h.sync())),{el:a,show(){r.forEach(h=>h.sync())},hide(){},update(h){s.update(h),t.d.set(wt(h.d,3)),t.p.set(wt(h.prs,1)),t.t.set(wt(h.tmp)),t.pi.set(wt(h.att[1])),t.ro.set(wt(h.att[0])),t.yw.set(wt(h.att[2],0)),t.vb.set(wt(h.vb,2)),t.lk.set(wt(h.lk,2),h.lk>j.get("leak.threshold",.35)?"bad":""),h.cal.forEach((u,f)=>e[f].set(u,u+" von 3",u>=3?Vt.ok:u>=2?Vt.warn:Vt.bad)),l||(l=!0,r.forEach(u=>u.sync()))}}}function Ed(){let s=wd(),t=null,e=()=>j.get("lim.deflect",25),i=()=>j.get("servo.us_per_deg",10),r=(A,E)=>Math.round(j.get(`servo.${A}.center`,1500)+(j.get(`servo.${A}.rev`,0)>.5?-1:1)*E*i()),a=[["Seitenruder","rud",0],["Heck Tiefenruder","stern",1],["Bug Tiefenruder","bow",2]].map(([A,E,B])=>{let z=S("b",null,"0.0 \xB0"),G=S("input",{type:"range",min:-45,max:45,step:.5,value:0,class:"sl center"}),$=()=>{let tt=wn(+G.value,-e(),e());z.textContent=wt(tt)+" \xB0 / "+r(E,tt)+" \xB5s",Go("ts"+B,`TEST SERVO ${B} ${r(E,tt)}`)};return G.oninput=$,G.addEventListener("dblclick",()=>{G.value=0,$()}),{name:A,key:E,ch:B,sl:G,send:$,el:S("div",{class:"sv"},S("div",{class:"svh"},S("b",null,A),z),G)}}),l=Ue("Servos durchfahren (10 s)",()=>{if(t){clearInterval(t),t=null,l.textContent="Servos durchfahren (10 s)";return}let A=performance.now();l.textContent="Stopp Durchlauf",t=setInterval(()=>{let E=(performance.now()-A)/1e3;if(E>10){clearInterval(t),t=null,l.textContent="Servos durchfahren (10 s)",a.forEach(B=>{B.sl.value=0,B.send()});return}a.forEach((B,z)=>{B.sl.value=Math.sin(E*2*Math.PI*.5+z*1.2)*e(),B.send()})},60)}),h=S("input",{type:"checkbox"}),u=S("input",{type:"checkbox"}),f=S("b",null,"0 %"),m=S("input",{type:"range",min:-100,max:100,step:1,value:0,class:"sl center danger"}),d=S("input",{type:"checkbox"}),_=0,g=()=>{h.checked||(m.value=0,_=0);let A=u.checked?100:j.get("lim.throttle",35);_=wn(+m.value,-A,A),m.value=_,f.textContent=_+" %"+(_?" \u2192 "+Math.round(Math.abs(_)*j.get("spd.ms_per_pct",.014)*100)/100+" m/s":""),Go("tm",`TEST MOTOR ${_}`)};m.oninput=g,["pointerup","touchend"].forEach(A=>m.addEventListener(A,()=>{d.checked||(m.value=0,g())}));let b=()=>{m.value=0,_=0,x.value=0,v=0,f.textContent="0 %",M.textContent="0 %",Wo.clear(),j.connected&&(j.link.q.length=0,j.link.cmd("TEST OFF",1500)),a.forEach(A=>{A.sl.value=0,A.send()})},M=S("b",null,"0 %"),x=S("input",{type:"range",min:-100,max:100,step:1,value:0,class:"sl center"}),v=0,C=()=>{v=+x.value,M.textContent=v+" %"+(v>0?" f\xFCllen":v<0?" leeren":""),Go("tp",`TEST PUMP ${v}`)};x.oninput=C,["pointerup","touchend"].forEach(A=>x.addEventListener(A,()=>{x.value=0,C()}));let w=null,T=()=>{w=setInterval(()=>{j.connected&&(_&&j.link.cmd(`TEST MOTOR ${_}`,800),v&&j.link.cmd(`TEST PUMP ${v}`,800))},400)},k=Ln("Ballast F\xFCllstand (gesch\xE4tzt)",0,100,"%"),R=Ln("Motor Ausgang",-100,100,"%",{mid:!0}),D=Ue("STOPP ALLES",b,"stop big");return window.addEventListener("keydown",A=>{A.key==="Escape"&&j.tab==="tests"&&b()}),{el:S("div",{class:"page"},s.el,S("div",{class:"grid2"},Ve("Servos",In("Schieber in Grad Ruderausschlag, begrenzt auf lim.deflect (\xB125 \xB0). Doppelklick = Mitte."),a.map(A=>A.el),S("div",{class:"row"},l)),Ve("Motor",S("p",{class:"warn-box"},"Propeller frei drehbar, Finger weg, Boot gesichert. Motor l\xE4uft nur solange der Schieber gehalten wird. Esc oder Stopp setzt alles auf Null."),S("label",{class:"chk"},h," Propeller ist frei, Motor freigeben"),S("label",{class:"chk"},d," Schieber bleibt stehen (Dauerlauf, Watchdog stoppt bei Verbindungsverlust)"),S("label",{class:"chk"},u," Gaslimit aufheben (nur Pr\xFCfstand)"),S("div",{class:"svh"},S("b",null,"Vortrieb (\u2212 r\xFCckw\xE4rts)"),f),m,R.el),Ve("Ballastpumpe",In("Plus f\xFCllt den Tank, minus leert ihn. L\xE4uft nur solange gehalten. DFRobot Pumpe mit eingebautem Treiber, Signal 50 Hz. Richtung falsch: Parameter pump.invert."),S("div",{class:"svh"},S("b",null,"Pumpe"),M),x,k.el),Ve("Status LEDs und Beacon",In("Beacon Pod (eigenes System) testen. Weiss = Strobe zum Wiederfinden, Rot = Warnblitz, Alarm = rot schnell plus Strobe. Aus setzt auch einen gespeicherten Alarm zur\xFCck. Status LEDs: gruen Blitz = bereit, Dauerlicht = scharf, schnell blinkend = Mission, rot n Blitze = Fehler (1 Batterie, 2 Leck, 3 Tiefe, 4 Sensor, 5 RC Verlust), rot Dauer = Not Aus."),S("div",{class:"row"},Ue("Beacon aus",()=>Me("BEACON 0")),Ue("Weiss",()=>Me("BEACON 2")),Ue("Rot",()=>Me("BEACON 3")),Ue("Alarm",()=>Me("BEACON 4",null,3e3),"warnb"))),Ve("Notaus",D,In("Der Testmodus hat einen Watchdog in der Firmware: Kommt 1.5 s kein Heartbeat, stoppen Motor und Pumpe von selbst.")))),show(){T(),a.forEach(A=>A.send())},hide(){clearInterval(w),b()},update(A){s.update(A),R.set(A.out.thr*100,wt(A.out.thr*100,0)+" % / "+A.out.mu+" \xB5s"),k.set(A.fill,wt(A.fill,0)+" %")},stopAll:b}}function Ad(){let s=S("div"),t=S("input",{class:"in",placeholder:"Suchen (z. B. pid, servo, depth)",oninput:()=>i()}),e=new Set,i=()=>{s.innerHTML="";let l=j.parList.length?j.parList:Cn.map(f=>({k:f.k,v:f.d,d:f.d,mn:f.mn,mx:f.mx,u:f.u,g:f.g,h:f.h})),h=t.value.trim().toLowerCase(),u={};l.filter(f=>!h||(f.k+" "+f.h+" "+f.g).toLowerCase().includes(h)).forEach(f=>(u[f.g]=u[f.g]||[]).push(f)),Object.entries(u).forEach(([f,m])=>{let d=S("table",{class:"ptable"},S("thead",null,S("tr",null,["Parameter","Wert","Einheit","Standard","Bereich","Beschreibung"].map(g=>S("th",null,g))))),_=S("tbody");m.forEach(g=>{let b=j.par[g.k]!==void 0?j.par[g.k]:g.v,M=S("input",{class:"pin"+(b!==g.d?" mod":""),type:"number",step:"any",value:b,min:g.mn,max:g.mx,disabled:!j.connected,onchange:async()=>{let x=wn(+M.value,g.mn,g.mx);M.value=x;let v=await Wr(g.k,x);v&&v.ok&&(M.classList.toggle("mod",x!==g.d),e.add(g.k),r.classList.add("primary"))}});_.append(S("tr",null,S("td",{class:"mono"},g.k),S("td",null,M),S("td",{class:"dim"},g.u),S("td",{class:"dim",onclick:()=>{M.value=g.d,M.onchange()},title:"Klick setzt auf Standard",style:{cursor:"pointer"}},g.d),S("td",{class:"dim"},`${g.mn} bis ${g.mx}`),S("td",null,g.h)))}),d.append(_),s.append(Ve(f,d))})},r=Ue("Im Boot speichern",async()=>{let l=await Me("SAVE","Parameter im Flash gespeichert");l&&l.ok&&(e.clear(),r.classList.remove("primary"))}),a=S("div",{class:"page"},S("div",{class:"toolbar"},t,Ue("Neu laden",async()=>{await Gr()}),r,Ue("Standardwerte",async()=>{confirm("Alle Parameter im Boot auf Standard setzen?")&&(await Me("DEFAULTS","Standardwerte gesetzt"),await Gr())}),Ue("Export",()=>Ai("fathom_parameter.json",JSON.stringify(Object.fromEntries(j.parList.map(l=>[l.k,j.par[l.k]])),null,1))),Ue("Import",async()=>{let l=await Lo(".json");if(l)try{let h=JSON.parse(l),u=0;for(let[f,m]of Object.entries(h))(await j.link.cmd(`SET ${f} ${m}`)).ok&&u++;re(`${u} Parameter importiert, danach Speichern`,"ok"),await Gr()}catch{re("Datei ung\xFCltig","bad")}})),s);return Ee.on("par",()=>{j.tab==="params"&&i()}),Ee.on("conn",i),{el:a,show:i,update(){}}}function Pd(){let s=S("div",{class:"term"}),t=S("input",{type:"checkbox"}),e=S("input",{class:"in mono",placeholder:"Befehl, z. B. INFO, GET, STREAM 10",onkeydown:async m=>{if(m.key==="Enter"&&e.value.trim()){let d=e.value.trim();i.push(d),r=i.length,e.value="",j.connected?await j.link.cmd(d,4e3):re("Nicht verbunden","bad")}m.key==="ArrowUp"&&r>0&&(e.value=i[--r]),m.key==="ArrowDown"&&r<i.length&&(e.value=i[++r]||"")}}),i=[],r=0,a=[],l=null,h=(m,d)=>{a.push([m,d]),l||(l=setTimeout(u,100))},u=()=>{l=null;let m=s.scrollTop+s.clientHeight>=s.scrollHeight-30;for(a.forEach(([d,_])=>s.append(S("div",{class:d},_.length>400?_.slice(0,400)+" \u2026":_))),a=[];s.childNodes.length>600;)s.firstChild.remove();m&&(s.scrollTop=s.scrollHeight)};return Ee.on("tx",m=>h("tx","> "+m)),Ee.on("rx",m=>{m.startsWith("T {")&&!t.checked||h(m.startsWith("ERR")?"rx err":"rx",m)}),{el:S("div",{class:"page"},S("div",{class:"toolbar"},S("label",{class:"chk"},t," Telemetrie anzeigen"),Ue("Leeren",()=>{s.innerHTML=""})),s,e),show(){s.scrollTop=s.scrollHeight},update(){}}}var Cs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Km=0,Cd=1,Jm=2;var Gf=1,jm=2,Ni=3,ns=0,gn=1,Vn=2,ts=0,lr=1,Rd=2,Ld=3,Id=4,Qm=5,xs=100,tg=101,eg=102,ng=103,ig=104,sg=200,rg=201,og=202,ag=203,Vc=204,Gc=205,lg=206,cg=207,hg=208,ug=209,dg=210,fg=211,pg=212,mg=213,gg=214,Wc=0,Zc=1,Xc=2,fr=3,qc=4,Yc=5,$c=6,Kc=7,Wf=0,_g=1,vg=2,es=0,xg=1,yg=2,bg=3,Mg=4,Sg=5,wg=6,Tg=7;var Zf=300,pr=301,mr=302,Jc=303,jc=304,hl=306,Qc=1e3,bs=1001,th=1002,si=1003,Eg=1004;var Zo=1005;var Gn=1006,cc=1007;var Ms=1008;var Hi=1009,Xf=1010,qf=1011,io=1012,su=1013,Ss=1014,Ui=1015,fo=1016,ru=1017,ou=1018,gr=1020,Yf=35902,$f=1021,Kf=1022,ii=1023,Jf=1024,jf=1025,cr=1026,_r=1027,Qf=1028,au=1029,tp=1030,lu=1031;var cu=1033,Ta=33776,Ea=33777,Aa=33778,Pa=33779,eh=35840,nh=35841,ih=35842,sh=35843,rh=36196,oh=37492,ah=37496,lh=37808,ch=37809,hh=37810,uh=37811,dh=37812,fh=37813,ph=37814,mh=37815,gh=37816,_h=37817,vh=37818,xh=37819,yh=37820,bh=37821,Ca=36492,Mh=36494,Sh=36495,ep=36283,wh=36284,Th=36285,Eh=36286;var Ra=2300,Ah=2301,hc=2302,Dd=2400,Nd=2401,Od=2402;var Ag=3200,Pg=3201;var np=0,Cg=1,Qi="",Hn="srgb",br="srgb-linear",ul="linear",De="srgb";var Gs=7680;var Ud=519,Rg=512,Lg=513,Ig=514,ip=515,Dg=516,Ng=517,Og=518,Ug=519,Ph=35044;var kd="300 es",ki=2e3,La=2001,Vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let a=r.indexOf(e);a!==-1&&r.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,t);t.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bd=1234567,hr=Math.PI/180,so=180/Math.PI;function Fi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[s&255]+pn[s>>8&255]+pn[s>>16&255]+pn[s>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function nn(s,t,e){return Math.max(t,Math.min(e,s))}function hu(s,t){return(s%t+t)%t}function kg(s,t,e,i,r){return i+(s-t)*(r-i)/(e-t)}function Bg(s,t,e){return s!==t?(e-s)/(t-s):0}function eo(s,t,e){return(1-e)*s+e*t}function Fg(s,t,e,i){return eo(s,t,1-Math.exp(-e*i))}function zg(s,t=1){return t-Math.abs(hu(s,t*2)-t)}function Hg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Vg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Gg(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Wg(s,t){return s+Math.random()*(t-s)}function Zg(s){return s*(.5-Math.random())}function Xg(s){s!==void 0&&(Bd=s);let t=Bd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qg(s){return s*hr}function Yg(s){return s*so}function $g(s){return(s&s-1)===0&&s!==0}function Kg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Jg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function jg(s,t,e,i,r){let a=Math.cos,l=Math.sin,h=a(e/2),u=l(e/2),f=a((t+i)/2),m=l((t+i)/2),d=a((t-i)/2),_=l((t-i)/2),g=a((i-t)/2),b=l((i-t)/2);switch(r){case"XYX":s.set(h*m,u*d,u*_,h*f);break;case"YZY":s.set(u*_,h*m,u*d,h*f);break;case"ZXZ":s.set(u*d,u*_,h*m,h*f);break;case"XZX":s.set(h*m,u*b,u*g,h*f);break;case"YXY":s.set(u*g,h*m,u*b,h*f);break;case"ZYZ":s.set(u*b,u*g,h*m,h*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ni(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Le(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var dl={DEG2RAD:hr,RAD2DEG:so,generateUUID:Fi,clamp:nn,euclideanModulo:hu,mapLinear:kg,inverseLerp:Bg,lerp:eo,damp:Fg,pingpong:zg,smoothstep:Hg,smootherstep:Vg,randInt:Gg,randFloat:Wg,randFloatSpread:Zg,seededRandom:Xg,degToRad:qg,radToDeg:Yg,isPowerOfTwo:$g,ceilPowerOfTwo:Kg,floorPowerOfTwo:Jg,setQuaternionFromProperEuler:jg,normalize:Le,denormalize:ni},Zt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(nn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),a=this.x-t.x,l=this.y-t.y;return this.x=a*i-l*r+t.x,this.y=a*r+l*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},oe=class s{constructor(t,e,i,r,a,l,h,u,f){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,a,l,h,u,f)}set(t,e,i,r,a,l,h,u,f){let m=this.elements;return m[0]=t,m[1]=r,m[2]=h,m[3]=e,m[4]=a,m[5]=u,m[6]=i,m[7]=l,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,a=this.elements,l=i[0],h=i[3],u=i[6],f=i[1],m=i[4],d=i[7],_=i[2],g=i[5],b=i[8],M=r[0],x=r[3],v=r[6],C=r[1],w=r[4],T=r[7],k=r[2],R=r[5],D=r[8];return a[0]=l*M+h*C+u*k,a[3]=l*x+h*w+u*R,a[6]=l*v+h*T+u*D,a[1]=f*M+m*C+d*k,a[4]=f*x+m*w+d*R,a[7]=f*v+m*T+d*D,a[2]=_*M+g*C+b*k,a[5]=_*x+g*w+b*R,a[8]=_*v+g*T+b*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],a=t[3],l=t[4],h=t[5],u=t[6],f=t[7],m=t[8];return e*l*m-e*h*f-i*a*m+i*h*u+r*a*f-r*l*u}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],a=t[3],l=t[4],h=t[5],u=t[6],f=t[7],m=t[8],d=m*l-h*f,_=h*u-m*a,g=f*a-l*u,b=e*d+i*_+r*g;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/b;return t[0]=d*M,t[1]=(r*f-m*i)*M,t[2]=(h*i-r*l)*M,t[3]=_*M,t[4]=(m*e-r*u)*M,t[5]=(r*a-h*e)*M,t[6]=g*M,t[7]=(i*u-f*e)*M,t[8]=(l*e-i*a)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,a,l,h){let u=Math.cos(a),f=Math.sin(a);return this.set(i*u,i*f,-i*(u*l+f*h)+l+t,-r*f,r*u,-r*(-f*l+u*h)+h+e,0,0,1),this}scale(t,e){return this.premultiply(uc.makeScale(t,e)),this}rotate(t){return this.premultiply(uc.makeRotation(-t)),this}translate(t,e){return this.premultiply(uc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},uc=new oe;function sp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ia(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qg(){let s=Ia("canvas");return s.style.display="block",s}var Fd={};function Qr(s){s in Fd||(Fd[s]=!0,console.warn(s))}function t_(s,t,e){return new Promise(function(i,r){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:r();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}function e_(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function n_(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var we={enabled:!0,workingColorSpace:br,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===De&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===De&&(s.r=ur(s.r),s.g=ur(s.g),s.b=ur(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qi?ul:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ur(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var zd=[.64,.33,.3,.6,.15,.06],Hd=[.2126,.7152,.0722],Vd=[.3127,.329],Gd=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wd=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);we.define({[br]:{primaries:zd,whitePoint:Vd,transfer:ul,toXYZ:Gd,fromXYZ:Wd,luminanceCoefficients:Hd,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:zd,whitePoint:Vd,transfer:De,toXYZ:Gd,fromXYZ:Wd,luminanceCoefficients:Hd,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}});var Ws,Ch=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ws===void 0&&(Ws=Ia("canvas")),Ws.width=t.width,Ws.height=t.height;let i=Ws.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ws}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ia("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=zi(a[l]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(zi(e[i]/255)*255):e[i]=zi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},i_=0,Da=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=Fi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,h=r.length;l<h;l++)r[l].isDataTexture?a.push(dc(r[l].image)):a.push(dc(r[l]))}else a=dc(r);i.url=a}return e||(t.images[this.uuid]=i),i}};function dc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ch.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var s_=0,Un=class s extends Vi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=bs,r=bs,a=Gn,l=Ms,h=ii,u=Hi,f=s.DEFAULT_ANISOTROPY,m=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Fi(),this.name="",this.source=new Da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=f,this.format=h,this.internalFormat=null,this.type=u,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qc:t.x=t.x-Math.floor(t.x);break;case bs:t.x=t.x<0?0:1;break;case th:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qc:t.y=t.y-Math.floor(t.y);break;case bs:t.y=t.y<0?0:1;break;case th:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Zf;Un.DEFAULT_ANISOTROPY=1;var Ne=class s{constructor(t=0,e=0,i=0,r=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,a=this.w,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*r+l[12]*a,this.y=l[1]*e+l[5]*i+l[9]*r+l[13]*a,this.z=l[2]*e+l[6]*i+l[10]*r+l[14]*a,this.w=l[3]*e+l[7]*i+l[11]*r+l[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,a,u=t.elements,f=u[0],m=u[4],d=u[8],_=u[1],g=u[5],b=u[9],M=u[2],x=u[6],v=u[10];if(Math.abs(m-_)<.01&&Math.abs(d-M)<.01&&Math.abs(b-x)<.01){if(Math.abs(m+_)<.1&&Math.abs(d+M)<.1&&Math.abs(b+x)<.1&&Math.abs(f+g+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(f+1)/2,T=(g+1)/2,k=(v+1)/2,R=(m+_)/4,D=(d+M)/4,O=(b+x)/4;return w>T&&w>k?w<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(w),r=R/i,a=D/i):T>k?T<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(T),i=R/r,a=O/r):k<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(k),i=D/a,r=O/a),this.set(i,r,a,e),this}let C=Math.sqrt((x-b)*(x-b)+(d-M)*(d-M)+(_-m)*(_-m));return Math.abs(C)<.001&&(C=1),this.x=(x-b)/C,this.y=(d-M)/C,this.z=(_-m)/C,this.w=Math.acos((f+g+v-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rh=class extends Vi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);let r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let a=new Un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];let l=i.count;for(let h=0;h<l;h++)this.textures[h]=a.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Da(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gi=class extends Rh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Na=class extends Un{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=si,this.minFilter=si,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lh=class extends Un{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=si,this.minFilter=si,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ri=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,a,l,h){let u=i[r+0],f=i[r+1],m=i[r+2],d=i[r+3],_=a[l+0],g=a[l+1],b=a[l+2],M=a[l+3];if(h===0){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=d;return}if(h===1){t[e+0]=_,t[e+1]=g,t[e+2]=b,t[e+3]=M;return}if(d!==M||u!==_||f!==g||m!==b){let x=1-h,v=u*_+f*g+m*b+d*M,C=v>=0?1:-1,w=1-v*v;if(w>Number.EPSILON){let k=Math.sqrt(w),R=Math.atan2(k,v*C);x=Math.sin(x*R)/k,h=Math.sin(h*R)/k}let T=h*C;if(u=u*x+_*T,f=f*x+g*T,m=m*x+b*T,d=d*x+M*T,x===1-h){let k=1/Math.sqrt(u*u+f*f+m*m+d*d);u*=k,f*=k,m*=k,d*=k}}t[e]=u,t[e+1]=f,t[e+2]=m,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,r,a,l){let h=i[r],u=i[r+1],f=i[r+2],m=i[r+3],d=a[l],_=a[l+1],g=a[l+2],b=a[l+3];return t[e]=h*b+m*d+u*g-f*_,t[e+1]=u*b+m*_+f*d-h*g,t[e+2]=f*b+m*g+h*_-u*d,t[e+3]=m*b-h*d-u*_-f*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,a=t._z,l=t._order,h=Math.cos,u=Math.sin,f=h(i/2),m=h(r/2),d=h(a/2),_=u(i/2),g=u(r/2),b=u(a/2);switch(l){case"XYZ":this._x=_*m*d+f*g*b,this._y=f*g*d-_*m*b,this._z=f*m*b+_*g*d,this._w=f*m*d-_*g*b;break;case"YXZ":this._x=_*m*d+f*g*b,this._y=f*g*d-_*m*b,this._z=f*m*b-_*g*d,this._w=f*m*d+_*g*b;break;case"ZXY":this._x=_*m*d-f*g*b,this._y=f*g*d+_*m*b,this._z=f*m*b+_*g*d,this._w=f*m*d-_*g*b;break;case"ZYX":this._x=_*m*d-f*g*b,this._y=f*g*d+_*m*b,this._z=f*m*b-_*g*d,this._w=f*m*d+_*g*b;break;case"YZX":this._x=_*m*d+f*g*b,this._y=f*g*d+_*m*b,this._z=f*m*b-_*g*d,this._w=f*m*d-_*g*b;break;case"XZY":this._x=_*m*d-f*g*b,this._y=f*g*d-_*m*b,this._z=f*m*b+_*g*d,this._w=f*m*d+_*g*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],a=e[8],l=e[1],h=e[5],u=e[9],f=e[2],m=e[6],d=e[10],_=i+h+d;if(_>0){let g=.5/Math.sqrt(_+1);this._w=.25/g,this._x=(m-u)*g,this._y=(a-f)*g,this._z=(l-r)*g}else if(i>h&&i>d){let g=2*Math.sqrt(1+i-h-d);this._w=(m-u)/g,this._x=.25*g,this._y=(r+l)/g,this._z=(a+f)/g}else if(h>d){let g=2*Math.sqrt(1+h-i-d);this._w=(a-f)/g,this._x=(r+l)/g,this._y=.25*g,this._z=(u+m)/g}else{let g=2*Math.sqrt(1+d-i-h);this._w=(l-r)/g,this._x=(a+f)/g,this._y=(u+m)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(nn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,a=t._z,l=t._w,h=e._x,u=e._y,f=e._z,m=e._w;return this._x=i*m+l*h+r*f-a*u,this._y=r*m+l*u+a*h-i*f,this._z=a*m+l*f+i*u-r*h,this._w=l*m-i*h-r*u-a*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,r=this._y,a=this._z,l=this._w,h=l*t._w+i*t._x+r*t._y+a*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=l,this._x=i,this._y=r,this._z=a,this;let u=1-h*h;if(u<=Number.EPSILON){let g=1-e;return this._w=g*l+e*this._w,this._x=g*i+e*this._x,this._y=g*r+e*this._y,this._z=g*a+e*this._z,this.normalize(),this}let f=Math.sqrt(u),m=Math.atan2(f,h),d=Math.sin((1-e)*m)/f,_=Math.sin(e*m)/f;return this._w=l*d+this._w*_,this._x=i*d+this._x*_,this._y=r*d+this._y*_,this._z=a*d+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*r,this.y=a[1]*e+a[4]*i+a[7]*r,this.z=a[2]*e+a[5]*i+a[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,a=t.elements,l=1/(a[3]*e+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*r+a[12])*l,this.y=(a[1]*e+a[5]*i+a[9]*r+a[13])*l,this.z=(a[2]*e+a[6]*i+a[10]*r+a[14])*l,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,a=t.x,l=t.y,h=t.z,u=t.w,f=2*(l*r-h*i),m=2*(h*e-a*r),d=2*(a*i-l*e);return this.x=e+u*f+l*d-h*m,this.y=i+u*m+h*f-a*d,this.z=r+u*d+a*m-l*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r,this.y=a[1]*e+a[5]*i+a[9]*r,this.z=a[2]*e+a[6]*i+a[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,a=t.z,l=e.x,h=e.y,u=e.z;return this.x=r*u-a*h,this.y=a*l-i*u,this.z=i*h-r*l,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return fc.copy(this).projectOnVector(t),this.sub(fc)}reflect(t){return this.sub(fc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(nn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fc=new H,Zd=new ri,Wn=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let l=0,h=a.count;l<h;l++)t.isMesh===!0?t.getVertexPosition(l,jn):jn.fromBufferAttribute(a,l),jn.applyMatrix4(t.matrixWorld),this.expandByPoint(jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xo.copy(i.boundingBox)),Xo.applyMatrix4(t.matrixWorld),this.union(Xo)}let r=t.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zr),qo.subVectors(this.max,Zr),Zs.subVectors(t.a,Zr),Xs.subVectors(t.b,Zr),qs.subVectors(t.c,Zr),qi.subVectors(Xs,Zs),Yi.subVectors(qs,Xs),ds.subVectors(Zs,qs);let e=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-ds.z,ds.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,ds.z,0,-ds.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-ds.y,ds.x,0];return!pc(e,Zs,Xs,qs,qo)||(e=[1,0,0,0,1,0,0,0,1],!pc(e,Zs,Xs,qs,qo))?!1:(Yo.crossVectors(qi,Yi),e=[Yo.x,Yo.y,Yo.z],pc(e,Zs,Xs,qs,qo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ci=[new H,new H,new H,new H,new H,new H,new H,new H],jn=new H,Xo=new Wn,Zs=new H,Xs=new H,qs=new H,qi=new H,Yi=new H,ds=new H,Zr=new H,qo=new H,Yo=new H,fs=new H;function pc(s,t,e,i,r){for(let a=0,l=s.length-3;a<=l;a+=3){fs.fromArray(s,a);let h=r.x*Math.abs(fs.x)+r.y*Math.abs(fs.y)+r.z*Math.abs(fs.z),u=t.dot(fs),f=e.dot(fs),m=i.dot(fs);if(Math.max(-Math.max(u,f,m),Math.min(u,f,m))>h)return!1}return!0}var r_=new Wn,Xr=new H,mc=new H,oi=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):r_.setFromPoints(t).getCenter(i);let r=0;for(let a=0,l=t.length;a<l;a++)r=Math.max(r,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xr.subVectors(t,this.center);let e=Xr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Xr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xr.copy(t.center).add(mc)),this.expandByPoint(Xr.copy(t.center).sub(mc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ri=new H,gc=new H,$o=new H,$i=new H,_c=new H,Ko=new H,vc=new H,ws=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ri.copy(this.origin).addScaledVector(this.direction,e),Ri.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){gc.copy(t).add(e).multiplyScalar(.5),$o.copy(e).sub(t).normalize(),$i.copy(this.origin).sub(gc);let a=t.distanceTo(e)*.5,l=-this.direction.dot($o),h=$i.dot(this.direction),u=-$i.dot($o),f=$i.lengthSq(),m=Math.abs(1-l*l),d,_,g,b;if(m>0)if(d=l*u-h,_=l*h-u,b=a*m,d>=0)if(_>=-b)if(_<=b){let M=1/m;d*=M,_*=M,g=d*(d+l*_+2*h)+_*(l*d+_+2*u)+f}else _=a,d=Math.max(0,-(l*_+h)),g=-d*d+_*(_+2*u)+f;else _=-a,d=Math.max(0,-(l*_+h)),g=-d*d+_*(_+2*u)+f;else _<=-b?(d=Math.max(0,-(-l*a+h)),_=d>0?-a:Math.min(Math.max(-a,-u),a),g=-d*d+_*(_+2*u)+f):_<=b?(d=0,_=Math.min(Math.max(-a,-u),a),g=_*(_+2*u)+f):(d=Math.max(0,-(l*a+h)),_=d>0?a:Math.min(Math.max(-a,-u),a),g=-d*d+_*(_+2*u)+f);else _=l>0?-a:a,d=Math.max(0,-(l*_+h)),g=-d*d+_*(_+2*u)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(gc).addScaledVector($o,_),g}intersectSphere(t,e){Ri.subVectors(t.center,this.origin);let i=Ri.dot(this.direction),r=Ri.dot(Ri)-i*i,a=t.radius*t.radius;if(r>a)return null;let l=Math.sqrt(a-r),h=i-l,u=i+l;return u<0?null:h<0?this.at(u,e):this.at(h,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,a,l,h,u,f=1/this.direction.x,m=1/this.direction.y,d=1/this.direction.z,_=this.origin;return f>=0?(i=(t.min.x-_.x)*f,r=(t.max.x-_.x)*f):(i=(t.max.x-_.x)*f,r=(t.min.x-_.x)*f),m>=0?(a=(t.min.y-_.y)*m,l=(t.max.y-_.y)*m):(a=(t.max.y-_.y)*m,l=(t.min.y-_.y)*m),i>l||a>r||((a>i||isNaN(i))&&(i=a),(l<r||isNaN(r))&&(r=l),d>=0?(h=(t.min.z-_.z)*d,u=(t.max.z-_.z)*d):(h=(t.max.z-_.z)*d,u=(t.min.z-_.z)*d),i>u||h>r)||((h>i||i!==i)&&(i=h),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Ri)!==null}intersectTriangle(t,e,i,r,a){_c.subVectors(e,t),Ko.subVectors(i,t),vc.crossVectors(_c,Ko);let l=this.direction.dot(vc),h;if(l>0){if(r)return null;h=1}else if(l<0)h=-1,l=-l;else return null;$i.subVectors(this.origin,t);let u=h*this.direction.dot(Ko.crossVectors($i,Ko));if(u<0)return null;let f=h*this.direction.dot(_c.cross($i));if(f<0||u+f>l)return null;let m=-h*$i.dot(vc);return m<0?null:this.at(m/l,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fe=class s{constructor(t,e,i,r,a,l,h,u,f,m,d,_,g,b,M,x){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,a,l,h,u,f,m,d,_,g,b,M,x)}set(t,e,i,r,a,l,h,u,f,m,d,_,g,b,M,x){let v=this.elements;return v[0]=t,v[4]=e,v[8]=i,v[12]=r,v[1]=a,v[5]=l,v[9]=h,v[13]=u,v[2]=f,v[6]=m,v[10]=d,v[14]=_,v[3]=g,v[7]=b,v[11]=M,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,r=1/Ys.setFromMatrixColumn(t,0).length(),a=1/Ys.setFromMatrixColumn(t,1).length(),l=1/Ys.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*l,e[9]=i[9]*l,e[10]=i[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,a=t.z,l=Math.cos(i),h=Math.sin(i),u=Math.cos(r),f=Math.sin(r),m=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let _=l*m,g=l*d,b=h*m,M=h*d;e[0]=u*m,e[4]=-u*d,e[8]=f,e[1]=g+b*f,e[5]=_-M*f,e[9]=-h*u,e[2]=M-_*f,e[6]=b+g*f,e[10]=l*u}else if(t.order==="YXZ"){let _=u*m,g=u*d,b=f*m,M=f*d;e[0]=_+M*h,e[4]=b*h-g,e[8]=l*f,e[1]=l*d,e[5]=l*m,e[9]=-h,e[2]=g*h-b,e[6]=M+_*h,e[10]=l*u}else if(t.order==="ZXY"){let _=u*m,g=u*d,b=f*m,M=f*d;e[0]=_-M*h,e[4]=-l*d,e[8]=b+g*h,e[1]=g+b*h,e[5]=l*m,e[9]=M-_*h,e[2]=-l*f,e[6]=h,e[10]=l*u}else if(t.order==="ZYX"){let _=l*m,g=l*d,b=h*m,M=h*d;e[0]=u*m,e[4]=b*f-g,e[8]=_*f+M,e[1]=u*d,e[5]=M*f+_,e[9]=g*f-b,e[2]=-f,e[6]=h*u,e[10]=l*u}else if(t.order==="YZX"){let _=l*u,g=l*f,b=h*u,M=h*f;e[0]=u*m,e[4]=M-_*d,e[8]=b*d+g,e[1]=d,e[5]=l*m,e[9]=-h*m,e[2]=-f*m,e[6]=g*d+b,e[10]=_-M*d}else if(t.order==="XZY"){let _=l*u,g=l*f,b=h*u,M=h*f;e[0]=u*m,e[4]=-d,e[8]=f*m,e[1]=_*d+M,e[5]=l*m,e[9]=g*d-b,e[2]=b*d-g,e[6]=h*m,e[10]=M*d+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(o_,t,a_)}lookAt(t,e,i){let r=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Ki.crossVectors(i,Dn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Ki.crossVectors(i,Dn)),Ki.normalize(),Jo.crossVectors(Dn,Ki),r[0]=Ki.x,r[4]=Jo.x,r[8]=Dn.x,r[1]=Ki.y,r[5]=Jo.y,r[9]=Dn.y,r[2]=Ki.z,r[6]=Jo.z,r[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,a=this.elements,l=i[0],h=i[4],u=i[8],f=i[12],m=i[1],d=i[5],_=i[9],g=i[13],b=i[2],M=i[6],x=i[10],v=i[14],C=i[3],w=i[7],T=i[11],k=i[15],R=r[0],D=r[4],O=r[8],A=r[12],E=r[1],B=r[5],z=r[9],G=r[13],$=r[2],tt=r[6],W=r[10],ht=r[14],V=r[3],lt=r[7],st=r[11],ot=r[15];return a[0]=l*R+h*E+u*$+f*V,a[4]=l*D+h*B+u*tt+f*lt,a[8]=l*O+h*z+u*W+f*st,a[12]=l*A+h*G+u*ht+f*ot,a[1]=m*R+d*E+_*$+g*V,a[5]=m*D+d*B+_*tt+g*lt,a[9]=m*O+d*z+_*W+g*st,a[13]=m*A+d*G+_*ht+g*ot,a[2]=b*R+M*E+x*$+v*V,a[6]=b*D+M*B+x*tt+v*lt,a[10]=b*O+M*z+x*W+v*st,a[14]=b*A+M*G+x*ht+v*ot,a[3]=C*R+w*E+T*$+k*V,a[7]=C*D+w*B+T*tt+k*lt,a[11]=C*O+w*z+T*W+k*st,a[15]=C*A+w*G+T*ht+k*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],a=t[12],l=t[1],h=t[5],u=t[9],f=t[13],m=t[2],d=t[6],_=t[10],g=t[14],b=t[3],M=t[7],x=t[11],v=t[15];return b*(+a*u*d-r*f*d-a*h*_+i*f*_+r*h*g-i*u*g)+M*(+e*u*g-e*f*_+a*l*_-r*l*g+r*f*m-a*u*m)+x*(+e*f*d-e*h*g-a*l*d+i*l*g+a*h*m-i*f*m)+v*(-r*h*m-e*u*d+e*h*_+r*l*d-i*l*_+i*u*m)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],a=t[3],l=t[4],h=t[5],u=t[6],f=t[7],m=t[8],d=t[9],_=t[10],g=t[11],b=t[12],M=t[13],x=t[14],v=t[15],C=d*x*f-M*_*f+M*u*g-h*x*g-d*u*v+h*_*v,w=b*_*f-m*x*f-b*u*g+l*x*g+m*u*v-l*_*v,T=m*M*f-b*d*f+b*h*g-l*M*g-m*h*v+l*d*v,k=b*d*u-m*M*u-b*h*_+l*M*_+m*h*x-l*d*x,R=e*C+i*w+r*T+a*k;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/R;return t[0]=C*D,t[1]=(M*_*a-d*x*a-M*r*g+i*x*g+d*r*v-i*_*v)*D,t[2]=(h*x*a-M*u*a+M*r*f-i*x*f-h*r*v+i*u*v)*D,t[3]=(d*u*a-h*_*a-d*r*f+i*_*f+h*r*g-i*u*g)*D,t[4]=w*D,t[5]=(m*x*a-b*_*a+b*r*g-e*x*g-m*r*v+e*_*v)*D,t[6]=(b*u*a-l*x*a-b*r*f+e*x*f+l*r*v-e*u*v)*D,t[7]=(l*_*a-m*u*a+m*r*f-e*_*f-l*r*g+e*u*g)*D,t[8]=T*D,t[9]=(b*d*a-m*M*a-b*i*g+e*M*g+m*i*v-e*d*v)*D,t[10]=(l*M*a-b*h*a+b*i*f-e*M*f-l*i*v+e*h*v)*D,t[11]=(m*h*a-l*d*a-m*i*f+e*d*f+l*i*g-e*h*g)*D,t[12]=k*D,t[13]=(m*M*r-b*d*r+b*i*_-e*M*_-m*i*x+e*d*x)*D,t[14]=(b*h*r-l*M*r-b*i*u+e*M*u+l*i*x-e*h*x)*D,t[15]=(l*d*r-m*h*r+m*i*u-e*d*u-l*i*_+e*h*_)*D,this}scale(t){let e=this.elements,i=t.x,r=t.y,a=t.z;return e[0]*=i,e[4]*=r,e[8]*=a,e[1]*=i,e[5]*=r,e[9]*=a,e[2]*=i,e[6]*=r,e[10]*=a,e[3]*=i,e[7]*=r,e[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),a=1-i,l=t.x,h=t.y,u=t.z,f=a*l,m=a*h;return this.set(f*l+i,f*h-r*u,f*u+r*h,0,f*h+r*u,m*h+i,m*u-r*l,0,f*u-r*h,m*u+r*l,a*u*u+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,a,l){return this.set(1,i,a,0,t,1,l,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,a=e._x,l=e._y,h=e._z,u=e._w,f=a+a,m=l+l,d=h+h,_=a*f,g=a*m,b=a*d,M=l*m,x=l*d,v=h*d,C=u*f,w=u*m,T=u*d,k=i.x,R=i.y,D=i.z;return r[0]=(1-(M+v))*k,r[1]=(g+T)*k,r[2]=(b-w)*k,r[3]=0,r[4]=(g-T)*R,r[5]=(1-(_+v))*R,r[6]=(x+C)*R,r[7]=0,r[8]=(b+w)*D,r[9]=(x-C)*D,r[10]=(1-(_+M))*D,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements,a=Ys.set(r[0],r[1],r[2]).length(),l=Ys.set(r[4],r[5],r[6]).length(),h=Ys.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),t.x=r[12],t.y=r[13],t.z=r[14],Qn.copy(this);let f=1/a,m=1/l,d=1/h;return Qn.elements[0]*=f,Qn.elements[1]*=f,Qn.elements[2]*=f,Qn.elements[4]*=m,Qn.elements[5]*=m,Qn.elements[6]*=m,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,e.setFromRotationMatrix(Qn),i.x=a,i.y=l,i.z=h,this}makePerspective(t,e,i,r,a,l,h=ki){let u=this.elements,f=2*a/(e-t),m=2*a/(i-r),d=(e+t)/(e-t),_=(i+r)/(i-r),g,b;if(h===ki)g=-(l+a)/(l-a),b=-2*l*a/(l-a);else if(h===La)g=-l/(l-a),b=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return u[0]=f,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=m,u[9]=_,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,i,r,a,l,h=ki){let u=this.elements,f=1/(e-t),m=1/(i-r),d=1/(l-a),_=(e+t)*f,g=(i+r)*m,b,M;if(h===ki)b=(l+a)*d,M=-2*d;else if(h===La)b=a*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return u[0]=2*f,u[4]=0,u[8]=0,u[12]=-_,u[1]=0,u[5]=2*m,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=M,u[14]=-b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ys=new H,Qn=new Fe,o_=new H(0,0,0),a_=new H(1,1,1),Ki=new H,Jo=new H,Dn=new H,Xd=new Fe,qd=new ri,_i=class s{constructor(t=0,e=0,i=0,r=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,a=r[0],l=r[4],h=r[8],u=r[1],f=r[5],m=r[9],d=r[2],_=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,g),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(h,g),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(nn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(u,a));break;case"ZYX":this._y=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,g),this._z=Math.atan2(u,a)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(nn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(h,g));break;case"XZY":this._z=Math.asin(-nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(h,a)):(this._x=Math.atan2(-m,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Xd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qd.setFromEuler(this),this.setFromQuaternion(qd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_i.DEFAULT_ORDER="XYZ";var Oa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},l_=0,Yd=new H,$s=new ri,Li=new Fe,jo=new H,qr=new H,c_=new H,h_=new ri,$d=new H(1,0,0),Kd=new H(0,1,0),Jd=new H(0,0,1),jd={type:"added"},u_={type:"removed"},Ks={type:"childadded",child:null},xc={type:"childremoved",child:null},sn=class s extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new H,e=new _i,i=new ri,r=new H(1,1,1);function a(){i.setFromEuler(e,!1)}function l(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Fe},normalMatrix:{value:new oe}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $s.setFromAxisAngle(t,e),this.quaternion.multiply($s),this}rotateOnWorldAxis(t,e){return $s.setFromAxisAngle(t,e),this.quaternion.premultiply($s),this}rotateX(t){return this.rotateOnAxis($d,t)}rotateY(t){return this.rotateOnAxis(Kd,t)}rotateZ(t){return this.rotateOnAxis(Jd,t)}translateOnAxis(t,e){return Yd.copy(t).applyQuaternion(this.quaternion),this.position.add(Yd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($d,t)}translateY(t){return this.translateOnAxis(Kd,t)}translateZ(t){return this.translateOnAxis(Jd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?jo.copy(t):jo.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(qr,jo,this.up):Li.lookAt(jo,qr,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),$s.setFromRotationMatrix(Li),this.quaternion.premultiply($s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jd),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(u_),xc.child=t,this.dispatchEvent(xc),xc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jd),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let l=this.children[i].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,t,c_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,h_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(h,u){return h[u.uuid]===void 0&&(h[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);let h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){let u=h.shapes;if(Array.isArray(u))for(let f=0,m=u.length;f<m;f++){let d=u[f];a(t.shapes,d)}else a(t.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let h=[];for(let u=0,f=this.material.length;u<f;u++)h.push(a(t.materials,this.material[u]));r.material=h}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){let u=this.animations[h];r.animations.push(a(t.animations,u))}}if(e){let h=l(t.geometries),u=l(t.materials),f=l(t.textures),m=l(t.images),d=l(t.shapes),_=l(t.skeletons),g=l(t.animations),b=l(t.nodes);h.length>0&&(i.geometries=h),u.length>0&&(i.materials=u),f.length>0&&(i.textures=f),m.length>0&&(i.images=m),d.length>0&&(i.shapes=d),_.length>0&&(i.skeletons=_),g.length>0&&(i.animations=g),b.length>0&&(i.nodes=b)}return i.object=r,i;function l(h){let u=[];for(let f in h){let m=h[f];delete m.metadata,u.push(m)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}};sn.DEFAULT_UP=new H(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ti=new H,Ii=new H,yc=new H,Di=new H,Js=new H,js=new H,Qd=new H,bc=new H,Mc=new H,Sc=new H,wc=new Ne,Tc=new Ne,Ec=new Ne,Oi=class s{constructor(t=new H,e=new H,i=new H){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),ti.subVectors(t,e),r.cross(ti);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(t,e,i,r,a){ti.subVectors(r,e),Ii.subVectors(i,e),yc.subVectors(t,e);let l=ti.dot(ti),h=ti.dot(Ii),u=ti.dot(yc),f=Ii.dot(Ii),m=Ii.dot(yc),d=l*f-h*h;if(d===0)return a.set(0,0,0),null;let _=1/d,g=(f*u-h*m)*_,b=(l*m-h*u)*_;return a.set(1-g-b,b,g)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,i,r,a,l,h,u){return this.getBarycoord(t,e,i,r,Di)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(a,Di.x),u.addScaledVector(l,Di.y),u.addScaledVector(h,Di.z),u)}static getInterpolatedAttribute(t,e,i,r,a,l){return wc.setScalar(0),Tc.setScalar(0),Ec.setScalar(0),wc.fromBufferAttribute(t,e),Tc.fromBufferAttribute(t,i),Ec.fromBufferAttribute(t,r),l.setScalar(0),l.addScaledVector(wc,a.x),l.addScaledVector(Tc,a.y),l.addScaledVector(Ec,a.z),l}static isFrontFacing(t,e,i,r){return ti.subVectors(i,e),Ii.subVectors(t,e),ti.cross(Ii).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ti.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,a){return s.getInterpolation(t,this.a,this.b,this.c,e,i,r,a)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,a=this.c,l,h;Js.subVectors(r,i),js.subVectors(a,i),bc.subVectors(t,i);let u=Js.dot(bc),f=js.dot(bc);if(u<=0&&f<=0)return e.copy(i);Mc.subVectors(t,r);let m=Js.dot(Mc),d=js.dot(Mc);if(m>=0&&d<=m)return e.copy(r);let _=u*d-m*f;if(_<=0&&u>=0&&m<=0)return l=u/(u-m),e.copy(i).addScaledVector(Js,l);Sc.subVectors(t,a);let g=Js.dot(Sc),b=js.dot(Sc);if(b>=0&&g<=b)return e.copy(a);let M=g*f-u*b;if(M<=0&&f>=0&&b<=0)return h=f/(f-b),e.copy(i).addScaledVector(js,h);let x=m*b-g*d;if(x<=0&&d-m>=0&&g-b>=0)return Qd.subVectors(a,r),h=(d-m)/(d-m+(g-b)),e.copy(r).addScaledVector(Qd,h);let v=1/(x+M+_);return l=M*v,h=_*v,e.copy(i).addScaledVector(Js,l).addScaledVector(js,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function Ac(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var fe=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=we.workingColorSpace){return this.r=t,this.g=e,this.b=i,we.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=we.workingColorSpace){if(t=hu(t,1),e=nn(e,0,1),i=nn(i,0,1),e===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+e):i+e-i*e,l=2*i-a;this.r=Ac(l,a,t+1/3),this.g=Ac(l,a,t),this.b=Ac(l,a,t-1/3)}return we.toWorkingColorSpace(this,r),this}setStyle(t,e=Hn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,l=r[1],h=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Hn){let i=rp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}copyLinearToSRGB(t){return this.r=ur(t.r),this.g=ur(t.g),this.b=ur(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Hn){return we.fromWorkingColorSpace(mn.copy(this),t),Math.round(nn(mn.r*255,0,255))*65536+Math.round(nn(mn.g*255,0,255))*256+Math.round(nn(mn.b*255,0,255))}getHexString(t=Hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.fromWorkingColorSpace(mn.copy(this),e);let i=mn.r,r=mn.g,a=mn.b,l=Math.max(i,r,a),h=Math.min(i,r,a),u,f,m=(h+l)/2;if(h===l)u=0,f=0;else{let d=l-h;switch(f=m<=.5?d/(l+h):d/(2-l-h),l){case i:u=(r-a)/d+(r<a?6:0);break;case r:u=(a-i)/d+2;break;case a:u=(i-r)/d+4;break}u/=6}return t.h=u,t.s=f,t.l=m,t}getRGB(t,e=we.workingColorSpace){return we.fromWorkingColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=Hn){we.fromWorkingColorSpace(mn.copy(this),t);let e=mn.r,i=mn.g,r=mn.b;return t!==Hn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(Qo);let i=eo(Ji.h,Qo.h,e),r=eo(Ji.s,Qo.s,e),a=eo(Ji.l,Qo.l,e);return this.setHSL(i,r,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*r,this.g=a[1]*e+a[4]*i+a[7]*r,this.b=a[2]*e+a[5]*i+a[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new fe;fe.NAMES=rp;var d_=0,vi=class extends Vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=Fi(),this.name="",this.blending=lr,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vc,this.blendDst=Gc,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(i.blending=this.blending),this.side!==ns&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vc&&(i.blendSrc=this.blendSrc),this.blendDst!==Gc&&(i.blendDst=this.blendDst),this.blendEquation!==xs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ud&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let l=[];for(let h in a){let u=a[h];delete u.metadata,l.push(u)}return l}if(e){let a=r(t.textures),l=r(t.images);a.length>0&&(i.textures=a),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Zn=class extends vi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ke=new H,ta=new Zt,On=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ph,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ta.fromBufferAttribute(this,e),ta.applyMatrix3(t),this.setXY(e,ta.x,ta.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix3(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ni(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Le(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,a){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),r=Le(r,this.array),a=Le(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ph&&(t.usage=this.usage),t}};var Ua=class extends On{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ka=class extends On{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ve=class extends On{constructor(t,e,i){super(new Float32Array(t),e,i)}},f_=0,zn=new Fe,Pc=new sn,Qs=new H,Nn=new Wn,Yr=new Wn,en=new H,We=class s extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sp(t)?ka:Ua)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new oe().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,i){return zn.makeTranslation(t,e,i),this.applyMatrix4(zn),this}scale(t,e,i){return zn.makeScale(t,e,i),this.applyMatrix4(zn),this}lookAt(t){return Pc.lookAt(t),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let r=0,a=t.length;r<a;r++){let l=t[r];i.push(l.x,l.y,l.z||0)}this.setAttribute("position",new ve(i,3))}else{for(let i=0,r=e.count;i<r;i++){let a=t[i];e.setXYZ(i,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let a=e[i];Nn.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let a=0,l=e.length;a<l;a++){let h=e[a];Yr.setFromBufferAttribute(h),this.morphTargetsRelative?(en.addVectors(Nn.min,Yr.min),Nn.expandByPoint(en),en.addVectors(Nn.max,Yr.max),Nn.expandByPoint(en)):(Nn.expandByPoint(Yr.min),Nn.expandByPoint(Yr.max))}Nn.getCenter(i);let r=0;for(let a=0,l=t.count;a<l;a++)en.fromBufferAttribute(t,a),r=Math.max(r,i.distanceToSquared(en));if(e)for(let a=0,l=e.length;a<l;a++){let h=e[a],u=this.morphTargetsRelative;for(let f=0,m=h.count;f<m;f++)en.fromBufferAttribute(h,f),u&&(Qs.fromBufferAttribute(t,f),en.add(Qs)),r=Math.max(r,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,r=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*i.count),4));let l=this.getAttribute("tangent"),h=[],u=[];for(let O=0;O<i.count;O++)h[O]=new H,u[O]=new H;let f=new H,m=new H,d=new H,_=new Zt,g=new Zt,b=new Zt,M=new H,x=new H;function v(O,A,E){f.fromBufferAttribute(i,O),m.fromBufferAttribute(i,A),d.fromBufferAttribute(i,E),_.fromBufferAttribute(a,O),g.fromBufferAttribute(a,A),b.fromBufferAttribute(a,E),m.sub(f),d.sub(f),g.sub(_),b.sub(_);let B=1/(g.x*b.y-b.x*g.y);isFinite(B)&&(M.copy(m).multiplyScalar(b.y).addScaledVector(d,-g.y).multiplyScalar(B),x.copy(d).multiplyScalar(g.x).addScaledVector(m,-b.x).multiplyScalar(B),h[O].add(M),h[A].add(M),h[E].add(M),u[O].add(x),u[A].add(x),u[E].add(x))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let O=0,A=C.length;O<A;++O){let E=C[O],B=E.start,z=E.count;for(let G=B,$=B+z;G<$;G+=3)v(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let w=new H,T=new H,k=new H,R=new H;function D(O){k.fromBufferAttribute(r,O),R.copy(k);let A=h[O];w.copy(A),w.sub(k.multiplyScalar(k.dot(A))).normalize(),T.crossVectors(R,A);let B=T.dot(u[O])<0?-1:1;l.setXYZW(O,w.x,w.y,w.z,B)}for(let O=0,A=C.length;O<A;++O){let E=C[O],B=E.start,z=E.count;for(let G=B,$=B+z;G<$;G+=3)D(t.getX(G+0)),D(t.getX(G+1)),D(t.getX(G+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let _=0,g=i.count;_<g;_++)i.setXYZ(_,0,0,0);let r=new H,a=new H,l=new H,h=new H,u=new H,f=new H,m=new H,d=new H;if(t)for(let _=0,g=t.count;_<g;_+=3){let b=t.getX(_+0),M=t.getX(_+1),x=t.getX(_+2);r.fromBufferAttribute(e,b),a.fromBufferAttribute(e,M),l.fromBufferAttribute(e,x),m.subVectors(l,a),d.subVectors(r,a),m.cross(d),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,x),h.add(m),u.add(m),f.add(m),i.setXYZ(b,h.x,h.y,h.z),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(x,f.x,f.y,f.z)}else for(let _=0,g=e.count;_<g;_+=3)r.fromBufferAttribute(e,_+0),a.fromBufferAttribute(e,_+1),l.fromBufferAttribute(e,_+2),m.subVectors(l,a),d.subVectors(r,a),m.cross(d),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(h,u){let f=h.array,m=h.itemSize,d=h.normalized,_=new f.constructor(u.length*m),g=0,b=0;for(let M=0,x=u.length;M<x;M++){h.isInterleavedBufferAttribute?g=u[M]*h.data.stride+h.offset:g=u[M]*m;for(let v=0;v<m;v++)_[b++]=f[g++]}return new On(_,m,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,r=this.attributes;for(let h in r){let u=r[h],f=t(u,i);e.setAttribute(h,f)}let a=this.morphAttributes;for(let h in a){let u=[],f=a[h];for(let m=0,d=f.length;m<d;m++){let _=f[m],g=t(_,i);u.push(g)}e.morphAttributes[h]=u}e.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let h=0,u=l.length;h<u;h++){let f=l[h];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let u=this.parameters;for(let f in u)u[f]!==void 0&&(t[f]=u[f]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let u in i){let f=i[u];t.data.attributes[u]=f.toJSON(t.data)}let r={},a=!1;for(let u in this.morphAttributes){let f=this.morphAttributes[u],m=[];for(let d=0,_=f.length;d<_;d++){let g=f[d];m.push(g.toJSON(t.data))}m.length>0&&(r[u]=m,a=!0)}a&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));let h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let r=t.attributes;for(let f in r){let m=r[f];this.setAttribute(f,m.clone(e))}let a=t.morphAttributes;for(let f in a){let m=[],d=a[f];for(let _=0,g=d.length;_<g;_++)m.push(d[_].clone(e));this.morphAttributes[f]=m}this.morphTargetsRelative=t.morphTargetsRelative;let l=t.groups;for(let f=0,m=l.length;f<m;f++){let d=l[f];this.addGroup(d.start,d.count,d.materialIndex)}let h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},tf=new Fe,ps=new ws,ea=new oi,ef=new H,na=new H,ia=new H,sa=new H,Cc=new H,ra=new H,nf=new H,oa=new H,Be=class extends sn{constructor(t=new We,e=new Zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){let h=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,l=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let h=this.morphTargetInfluences;if(a&&h){ra.set(0,0,0);for(let u=0,f=a.length;u<f;u++){let m=h[u],d=a[u];m!==0&&(Cc.fromBufferAttribute(d,t),l?ra.addScaledVector(Cc,m):ra.addScaledVector(Cc.sub(e),m))}e.add(ra)}return e}raycast(t,e){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ea.copy(i.boundingSphere),ea.applyMatrix4(a),ps.copy(t.ray).recast(t.near),!(ea.containsPoint(ps.origin)===!1&&(ps.intersectSphere(ea,ef)===null||ps.origin.distanceToSquared(ef)>(t.far-t.near)**2))&&(tf.copy(a).invert(),ps.copy(t.ray).applyMatrix4(tf),!(i.boundingBox!==null&&ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ps)))}_computeIntersections(t,e,i){let r,a=this.geometry,l=this.material,h=a.index,u=a.attributes.position,f=a.attributes.uv,m=a.attributes.uv1,d=a.attributes.normal,_=a.groups,g=a.drawRange;if(h!==null)if(Array.isArray(l))for(let b=0,M=_.length;b<M;b++){let x=_[b],v=l[x.materialIndex],C=Math.max(x.start,g.start),w=Math.min(h.count,Math.min(x.start+x.count,g.start+g.count));for(let T=C,k=w;T<k;T+=3){let R=h.getX(T),D=h.getX(T+1),O=h.getX(T+2);r=aa(this,v,t,i,f,m,d,R,D,O),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{let b=Math.max(0,g.start),M=Math.min(h.count,g.start+g.count);for(let x=b,v=M;x<v;x+=3){let C=h.getX(x),w=h.getX(x+1),T=h.getX(x+2);r=aa(this,l,t,i,f,m,d,C,w,T),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}else if(u!==void 0)if(Array.isArray(l))for(let b=0,M=_.length;b<M;b++){let x=_[b],v=l[x.materialIndex],C=Math.max(x.start,g.start),w=Math.min(u.count,Math.min(x.start+x.count,g.start+g.count));for(let T=C,k=w;T<k;T+=3){let R=T,D=T+1,O=T+2;r=aa(this,v,t,i,f,m,d,R,D,O),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{let b=Math.max(0,g.start),M=Math.min(u.count,g.start+g.count);for(let x=b,v=M;x<v;x+=3){let C=x,w=x+1,T=x+2;r=aa(this,l,t,i,f,m,d,C,w,T),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}}};function p_(s,t,e,i,r,a,l,h){let u;if(t.side===gn?u=i.intersectTriangle(l,a,r,!0,h):u=i.intersectTriangle(r,a,l,t.side===ns,h),u===null)return null;oa.copy(h),oa.applyMatrix4(s.matrixWorld);let f=e.ray.origin.distanceTo(oa);return f<e.near||f>e.far?null:{distance:f,point:oa.clone(),object:s}}function aa(s,t,e,i,r,a,l,h,u,f){s.getVertexPosition(h,na),s.getVertexPosition(u,ia),s.getVertexPosition(f,sa);let m=p_(s,t,e,i,na,ia,sa,nf);if(m){let d=new H;Oi.getBarycoord(nf,na,ia,sa,d),r&&(m.uv=Oi.getInterpolatedAttribute(r,h,u,f,d,new Zt)),a&&(m.uv1=Oi.getInterpolatedAttribute(a,h,u,f,d,new Zt)),l&&(m.normal=Oi.getInterpolatedAttribute(l,h,u,f,d,new H),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));let _={a:h,b:u,c:f,normal:new H,materialIndex:0};Oi.getNormal(na,ia,sa,_.normal),m.face=_,m.barycoord=d}return m}var Xn=class s extends We{constructor(t=1,e=1,i=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:a,depthSegments:l};let h=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);let u=[],f=[],m=[],d=[],_=0,g=0;b("z","y","x",-1,-1,i,e,t,l,a,0),b("z","y","x",1,-1,i,e,-t,l,a,1),b("x","z","y",1,1,t,i,e,r,l,2),b("x","z","y",1,-1,t,i,-e,r,l,3),b("x","y","z",1,-1,t,e,i,r,a,4),b("x","y","z",-1,-1,t,e,-i,r,a,5),this.setIndex(u),this.setAttribute("position",new ve(f,3)),this.setAttribute("normal",new ve(m,3)),this.setAttribute("uv",new ve(d,2));function b(M,x,v,C,w,T,k,R,D,O,A){let E=T/D,B=k/O,z=T/2,G=k/2,$=R/2,tt=D+1,W=O+1,ht=0,V=0,lt=new H;for(let st=0;st<W;st++){let ot=st*B-G;for(let yt=0;yt<tt;yt++){let bt=yt*E-z;lt[M]=bt*C,lt[x]=ot*w,lt[v]=$,f.push(lt.x,lt.y,lt.z),lt[M]=0,lt[x]=0,lt[v]=R>0?1:-1,m.push(lt.x,lt.y,lt.z),d.push(yt/D),d.push(1-st/O),ht+=1}}for(let st=0;st<O;st++)for(let ot=0;ot<D;ot++){let yt=_+ot+tt*st,bt=_+ot+tt*(st+1),K=_+(ot+1)+tt*(st+1),pt=_+(ot+1)+tt*st;u.push(yt,bt,pt),u.push(bt,K,pt),V+=6}h.addGroup(g,V,A),g+=V,_+=ht}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function vr(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let r=s[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function yn(s){let t={};for(let e=0;e<s.length;e++){let i=vr(s[e]);for(let r in i)t[r]=i[r]}return t}function m_(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function op(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}var fl={clone:vr,merge:yn},g_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,__=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qn=class extends vi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g_,this.fragmentShader=__,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vr(t.uniforms),this.uniformsGroups=m_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let l=this.uniforms[r].value;l&&l.isTexture?e.uniforms[r]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[r]={type:"m4",value:l.toArray()}:e.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ba=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=ki}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ji=new H,sf=new Zt,rf=new Zt,bn=class extends Ba{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=so*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return so*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,e){return this.getViewBounds(t,sf,rf),e.subVectors(rf,sf)}setViewOffset(t,e,i,r,a,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(hr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,a=-.5*r,l=this.view;if(this.view!==null&&this.view.enabled){let u=l.fullWidth,f=l.fullHeight;a+=l.offsetX*r/u,e-=l.offsetY*i/f,r*=l.width/u,i*=l.height/f}let h=this.filmOffset;h!==0&&(a+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},tr=-90,er=1,Ih=class extends sn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new bn(tr,er,t,e);r.layers=this.layers,this.add(r);let a=new bn(tr,er,t,e);a.layers=this.layers,this.add(a);let l=new bn(tr,er,t,e);l.layers=this.layers,this.add(l);let h=new bn(tr,er,t,e);h.layers=this.layers,this.add(h);let u=new bn(tr,er,t,e);u.layers=this.layers,this.add(u);let f=new bn(tr,er,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,a,l,h,u]=e;for(let f of e)this.remove(f);if(t===ki)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===La)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,l,h,u,f,m]=this.children,d=t.getRenderTarget(),_=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,a),t.setRenderTarget(i,1,r),t.render(e,l),t.setRenderTarget(i,2,r),t.render(e,h),t.setRenderTarget(i,3,r),t.render(e,u),t.setRenderTarget(i,4,r),t.render(e,f),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,r),t.render(e,m),t.setRenderTarget(d,_,g),t.xr.enabled=b,i.texture.needsPMREMUpdate=!0}},Fa=class extends Un{constructor(t,e,i,r,a,l,h,u,f,m){t=t!==void 0?t:[],e=e!==void 0?e:pr,super(t,e,i,r,a,l,h,u,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Dh=class extends Gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Fa(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xn(5,5,5),a=new qn({name:"CubemapFromEquirect",uniforms:vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:ts});a.uniforms.tEquirect.value=e;let l=new Be(r,a),h=e.minFilter;return e.minFilter===Ms&&(e.minFilter=Gn),new Ih(1,10,this).update(t,l),e.minFilter=h,l.geometry.dispose(),l.material.dispose(),this}clear(t,e,i,r){let a=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,i,r);t.setRenderTarget(a)}},Rc=new H,v_=new H,x_=new oe,ei=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=Rc.subVectors(i,e).cross(v_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Rc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||x_.getNormalMatrix(t),r=this.coplanarPoint(Rc).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ms=new oi,la=new H,ro=class{constructor(t=new ei,e=new ei,i=new ei,r=new ei,a=new ei,l=new ei){this.planes=[t,e,i,r,a,l]}set(t,e,i,r,a,l){let h=this.planes;return h[0].copy(t),h[1].copy(e),h[2].copy(i),h[3].copy(r),h[4].copy(a),h[5].copy(l),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ki){let i=this.planes,r=t.elements,a=r[0],l=r[1],h=r[2],u=r[3],f=r[4],m=r[5],d=r[6],_=r[7],g=r[8],b=r[9],M=r[10],x=r[11],v=r[12],C=r[13],w=r[14],T=r[15];if(i[0].setComponents(u-a,_-f,x-g,T-v).normalize(),i[1].setComponents(u+a,_+f,x+g,T+v).normalize(),i[2].setComponents(u+l,_+m,x+b,T+C).normalize(),i[3].setComponents(u-l,_-m,x-b,T-C).normalize(),i[4].setComponents(u-h,_-d,x-M,T-w).normalize(),e===ki)i[5].setComponents(u+h,_+d,x+M,T+w).normalize();else if(e===La)i[5].setComponents(h,d,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(la.x=r.normal.x>0?t.max.x:t.min.x,la.y=r.normal.y>0?t.max.y:t.min.y,la.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(la)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ap(){let s=null,t=!1,e=null,i=null;function r(a,l){e(a,l),i=s.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(r),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function y_(s){let t=new WeakMap;function e(h,u){let f=h.array,m=h.usage,d=f.byteLength,_=s.createBuffer();s.bindBuffer(u,_),s.bufferData(u,f,m),h.onUploadCallback();let g;if(f instanceof Float32Array)g=s.FLOAT;else if(f instanceof Uint16Array)h.isFloat16BufferAttribute?g=s.HALF_FLOAT:g=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=s.SHORT;else if(f instanceof Uint32Array)g=s.UNSIGNED_INT;else if(f instanceof Int32Array)g=s.INT;else if(f instanceof Int8Array)g=s.BYTE;else if(f instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:d}}function i(h,u,f){let m=u.array,d=u.updateRanges;if(s.bindBuffer(f,h),d.length===0)s.bufferSubData(f,0,m);else{d.sort((g,b)=>g.start-b.start);let _=0;for(let g=1;g<d.length;g++){let b=d[_],M=d[g];M.start<=b.start+b.count+1?b.count=Math.max(b.count,M.start+M.count-b.start):(++_,d[_]=M)}d.length=_+1;for(let g=0,b=d.length;g<b;g++){let M=d[g];s.bufferSubData(f,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);let u=t.get(h);u&&(s.deleteBuffer(u.buffer),t.delete(h))}function l(h,u){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){let m=t.get(h);(!m||m.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}let f=t.get(h);if(f===void 0)t.set(h,e(h,u));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,h,u),f.version=h.version}}return{get:r,remove:a,update:l}}var Ts=class s extends We{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let a=t/2,l=e/2,h=Math.floor(i),u=Math.floor(r),f=h+1,m=u+1,d=t/h,_=e/u,g=[],b=[],M=[],x=[];for(let v=0;v<m;v++){let C=v*_-l;for(let w=0;w<f;w++){let T=w*d-a;b.push(T,-C,0),M.push(0,0,1),x.push(w/h),x.push(1-v/u)}}for(let v=0;v<u;v++)for(let C=0;C<h;C++){let w=C+f*v,T=C+f*(v+1),k=C+1+f*(v+1),R=C+1+f*v;g.push(w,T,R),g.push(T,k,R)}this.setIndex(g),this.setAttribute("position",new ve(b,3)),this.setAttribute("normal",new ve(M,3)),this.setAttribute("uv",new ve(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},b_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M_=`#ifdef USE_ALPHAHASH
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
#endif`,S_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A_=`#ifdef USE_AOMAP
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
#endif`,P_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C_=`#ifdef USE_BATCHING
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
#endif`,R_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,N_=`#ifdef USE_IRIDESCENCE
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
#endif`,O_=`#ifdef USE_BUMPMAP
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
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,H_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,W_=`#define PI 3.141592653589793
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
} // validated`,Z_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,X_=`vec3 transformedNormal = objectNormal;
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
#endif`,q_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J_="gl_FragColor = linearToOutputTexel( gl_FragColor );",j_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q_=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l0=`#ifdef USE_GRADIENTMAP
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
}`,c0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d0=`uniform bool receiveShadow;
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
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,p0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v0=`PhysicalMaterial material;
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
#endif`,x0=`struct PhysicalMaterial {
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
}`,y0=`
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
#endif`,b0=`#if defined( RE_IndirectDiffuse )
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
#endif`,M0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,R0=`#if defined( USE_POINTS_UV )
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
#endif`,L0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`#ifdef USE_MORPHTARGETS
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
#endif`,k0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,F0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G0=`#ifdef USE_NORMALMAP
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
#endif`,W0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,K0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ev=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rv=`float getShadowMask() {
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
}`,ov=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,av=`#ifdef USE_SKINNING
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
#endif`,lv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cv=`#ifdef USE_SKINNING
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
#endif`,hv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pv=`#ifdef USE_TRANSMISSION
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
#endif`,mv=`#ifdef USE_TRANSMISSION
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
#endif`,gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bv=`uniform sampler2D t2D;
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
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`#include <common>
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
}`,Av=`#if DEPTH_PACKING == 3200
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
}`,Pv=`#define DISTANCE
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
}`,Cv=`#define DISTANCE
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
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iv=`uniform float scale;
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
}`,Dv=`uniform vec3 diffuse;
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
}`,Nv=`#include <common>
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
}`,Ov=`uniform vec3 diffuse;
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
}`,Uv=`#define LAMBERT
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
}`,kv=`#define LAMBERT
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
}`,Bv=`#define MATCAP
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
}`,Fv=`#define MATCAP
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
}`,zv=`#define NORMAL
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
}`,Hv=`#define NORMAL
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
}`,Vv=`#define PHONG
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
}`,Gv=`#define PHONG
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
}`,Wv=`#define STANDARD
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
}`,Zv=`#define STANDARD
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
}`,Xv=`#define TOON
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
}`,qv=`#define TOON
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
}`,Yv=`uniform float size;
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
}`,$v=`uniform vec3 diffuse;
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
}`,Kv=`#include <common>
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
}`,Jv=`uniform vec3 color;
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
}`,jv=`uniform float rotation;
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
}`,Qv=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:b_,alphahash_pars_fragment:M_,alphamap_fragment:S_,alphamap_pars_fragment:w_,alphatest_fragment:T_,alphatest_pars_fragment:E_,aomap_fragment:A_,aomap_pars_fragment:P_,batching_pars_vertex:C_,batching_vertex:R_,begin_vertex:L_,beginnormal_vertex:I_,bsdfs:D_,iridescence_fragment:N_,bumpmap_pars_fragment:O_,clipping_planes_fragment:U_,clipping_planes_pars_fragment:k_,clipping_planes_pars_vertex:B_,clipping_planes_vertex:F_,color_fragment:z_,color_pars_fragment:H_,color_pars_vertex:V_,color_vertex:G_,common:W_,cube_uv_reflection_fragment:Z_,defaultnormal_vertex:X_,displacementmap_pars_vertex:q_,displacementmap_vertex:Y_,emissivemap_fragment:$_,emissivemap_pars_fragment:K_,colorspace_fragment:J_,colorspace_pars_fragment:j_,envmap_fragment:Q_,envmap_common_pars_fragment:t0,envmap_pars_fragment:e0,envmap_pars_vertex:n0,envmap_physical_pars_fragment:f0,envmap_vertex:i0,fog_vertex:s0,fog_pars_vertex:r0,fog_fragment:o0,fog_pars_fragment:a0,gradientmap_pars_fragment:l0,lightmap_pars_fragment:c0,lights_lambert_fragment:h0,lights_lambert_pars_fragment:u0,lights_pars_begin:d0,lights_toon_fragment:p0,lights_toon_pars_fragment:m0,lights_phong_fragment:g0,lights_phong_pars_fragment:_0,lights_physical_fragment:v0,lights_physical_pars_fragment:x0,lights_fragment_begin:y0,lights_fragment_maps:b0,lights_fragment_end:M0,logdepthbuf_fragment:S0,logdepthbuf_pars_fragment:w0,logdepthbuf_pars_vertex:T0,logdepthbuf_vertex:E0,map_fragment:A0,map_pars_fragment:P0,map_particle_fragment:C0,map_particle_pars_fragment:R0,metalnessmap_fragment:L0,metalnessmap_pars_fragment:I0,morphinstance_vertex:D0,morphcolor_vertex:N0,morphnormal_vertex:O0,morphtarget_pars_vertex:U0,morphtarget_vertex:k0,normal_fragment_begin:B0,normal_fragment_maps:F0,normal_pars_fragment:z0,normal_pars_vertex:H0,normal_vertex:V0,normalmap_pars_fragment:G0,clearcoat_normal_fragment_begin:W0,clearcoat_normal_fragment_maps:Z0,clearcoat_pars_fragment:X0,iridescence_pars_fragment:q0,opaque_fragment:Y0,packing:$0,premultiplied_alpha_fragment:K0,project_vertex:J0,dithering_fragment:j0,dithering_pars_fragment:Q0,roughnessmap_fragment:tv,roughnessmap_pars_fragment:ev,shadowmap_pars_fragment:nv,shadowmap_pars_vertex:iv,shadowmap_vertex:sv,shadowmask_pars_fragment:rv,skinbase_vertex:ov,skinning_pars_vertex:av,skinning_vertex:lv,skinnormal_vertex:cv,specularmap_fragment:hv,specularmap_pars_fragment:uv,tonemapping_fragment:dv,tonemapping_pars_fragment:fv,transmission_fragment:pv,transmission_pars_fragment:mv,uv_pars_fragment:gv,uv_pars_vertex:_v,uv_vertex:vv,worldpos_vertex:xv,background_vert:yv,background_frag:bv,backgroundCube_vert:Mv,backgroundCube_frag:Sv,cube_vert:wv,cube_frag:Tv,depth_vert:Ev,depth_frag:Av,distanceRGBA_vert:Pv,distanceRGBA_frag:Cv,equirect_vert:Rv,equirect_frag:Lv,linedashed_vert:Iv,linedashed_frag:Dv,meshbasic_vert:Nv,meshbasic_frag:Ov,meshlambert_vert:Uv,meshlambert_frag:kv,meshmatcap_vert:Bv,meshmatcap_frag:Fv,meshnormal_vert:zv,meshnormal_frag:Hv,meshphong_vert:Vv,meshphong_frag:Gv,meshphysical_vert:Wv,meshphysical_frag:Zv,meshtoon_vert:Xv,meshtoon_frag:qv,points_vert:Yv,points_frag:$v,shadow_vert:Kv,shadow_frag:Jv,sprite_vert:jv,sprite_frag:Qv},St={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Mn={basic:{uniforms:yn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:yn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new fe(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:yn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:yn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:yn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new fe(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:yn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:yn([St.points,St.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:yn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:yn([St.common,St.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:yn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:yn([St.sprite,St.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:yn([St.common,St.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:yn([St.lights,St.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Mn.physical={uniforms:yn([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var ca={r:0,b:0,g:0},gs=new _i,tx=new Fe;function ex(s,t,e,i,r,a,l){let h=new fe(0),u=a===!0?0:1,f,m,d=null,_=0,g=null;function b(C){let w=C.isScene===!0?C.background:null;return w&&w.isTexture&&(w=(C.backgroundBlurriness>0?e:t).get(w)),w}function M(C){let w=!1,T=b(C);T===null?v(h,u):T&&T.isColor&&(v(T,1),w=!0);let k=s.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,l):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,l),(s.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(C,w){let T=b(w);T&&(T.isCubeTexture||T.mapping===hl)?(m===void 0&&(m=new Be(new Xn(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:vr(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(k,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),gs.copy(w.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),m.material.uniforms.envMap.value=T,m.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(tx.makeRotationFromEuler(gs)),m.material.toneMapped=we.getTransfer(T.colorSpace)!==De,(d!==T||_!==T.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,d=T,_=T.version,g=s.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):T&&T.isTexture&&(f===void 0&&(f=new Be(new Ts(2,2),new qn({name:"BackgroundMaterial",uniforms:vr(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=T,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.toneMapped=we.getTransfer(T.colorSpace)!==De,T.matrixAutoUpdate===!0&&T.updateMatrix(),f.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||_!==T.version||g!==s.toneMapping)&&(f.material.needsUpdate=!0,d=T,_=T.version,g=s.toneMapping),f.layers.enableAll(),C.unshift(f,f.geometry,f.material,0,0,null))}function v(C,w){C.getRGB(ca,op(s)),i.buffers.color.setClear(ca.r,ca.g,ca.b,w,l)}return{getClearColor:function(){return h},setClearColor:function(C,w=1){h.set(C),u=w,v(h,u)},getClearAlpha:function(){return u},setClearAlpha:function(C){u=C,v(h,u)},render:M,addToRenderList:x}}function nx(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},r=_(null),a=r,l=!1;function h(E,B,z,G,$){let tt=!1,W=d(G,z,B);a!==W&&(a=W,f(a.object)),tt=g(E,G,z,$),tt&&b(E,G,z,$),$!==null&&t.update($,s.ELEMENT_ARRAY_BUFFER),(tt||l)&&(l=!1,T(E,B,z,G),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function u(){return s.createVertexArray()}function f(E){return s.bindVertexArray(E)}function m(E){return s.deleteVertexArray(E)}function d(E,B,z){let G=z.wireframe===!0,$=i[E.id];$===void 0&&($={},i[E.id]=$);let tt=$[B.id];tt===void 0&&(tt={},$[B.id]=tt);let W=tt[G];return W===void 0&&(W=_(u()),tt[G]=W),W}function _(E){let B=[],z=[],G=[];for(let $=0;$<e;$++)B[$]=0,z[$]=0,G[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:z,attributeDivisors:G,object:E,attributes:{},index:null}}function g(E,B,z,G){let $=a.attributes,tt=B.attributes,W=0,ht=z.getAttributes();for(let V in ht)if(ht[V].location>=0){let st=$[V],ot=tt[V];if(ot===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(ot=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(ot=E.instanceColor)),st===void 0||st.attribute!==ot||ot&&st.data!==ot.data)return!0;W++}return a.attributesNum!==W||a.index!==G}function b(E,B,z,G){let $={},tt=B.attributes,W=0,ht=z.getAttributes();for(let V in ht)if(ht[V].location>=0){let st=tt[V];st===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(st=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(st=E.instanceColor));let ot={};ot.attribute=st,st&&st.data&&(ot.data=st.data),$[V]=ot,W++}a.attributes=$,a.attributesNum=W,a.index=G}function M(){let E=a.newAttributes;for(let B=0,z=E.length;B<z;B++)E[B]=0}function x(E){v(E,0)}function v(E,B){let z=a.newAttributes,G=a.enabledAttributes,$=a.attributeDivisors;z[E]=1,G[E]===0&&(s.enableVertexAttribArray(E),G[E]=1),$[E]!==B&&(s.vertexAttribDivisor(E,B),$[E]=B)}function C(){let E=a.newAttributes,B=a.enabledAttributes;for(let z=0,G=B.length;z<G;z++)B[z]!==E[z]&&(s.disableVertexAttribArray(z),B[z]=0)}function w(E,B,z,G,$,tt,W){W===!0?s.vertexAttribIPointer(E,B,z,$,tt):s.vertexAttribPointer(E,B,z,G,$,tt)}function T(E,B,z,G){M();let $=G.attributes,tt=z.getAttributes(),W=B.defaultAttributeValues;for(let ht in tt){let V=tt[ht];if(V.location>=0){let lt=$[ht];if(lt===void 0&&(ht==="instanceMatrix"&&E.instanceMatrix&&(lt=E.instanceMatrix),ht==="instanceColor"&&E.instanceColor&&(lt=E.instanceColor)),lt!==void 0){let st=lt.normalized,ot=lt.itemSize,yt=t.get(lt);if(yt===void 0)continue;let bt=yt.buffer,K=yt.type,pt=yt.bytesPerElement,Mt=K===s.INT||K===s.UNSIGNED_INT||lt.gpuType===su;if(lt.isInterleavedBufferAttribute){let gt=lt.data,Xt=gt.stride,xt=lt.offset;if(gt.isInstancedInterleavedBuffer){for(let rt=0;rt<V.locationSize;rt++)v(V.location+rt,gt.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let rt=0;rt<V.locationSize;rt++)x(V.location+rt);s.bindBuffer(s.ARRAY_BUFFER,bt);for(let rt=0;rt<V.locationSize;rt++)w(V.location+rt,ot/V.locationSize,K,st,Xt*pt,(xt+ot/V.locationSize*rt)*pt,Mt)}else{if(lt.isInstancedBufferAttribute){for(let gt=0;gt<V.locationSize;gt++)v(V.location+gt,lt.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let gt=0;gt<V.locationSize;gt++)x(V.location+gt);s.bindBuffer(s.ARRAY_BUFFER,bt);for(let gt=0;gt<V.locationSize;gt++)w(V.location+gt,ot/V.locationSize,K,st,ot*pt,ot/V.locationSize*gt*pt,Mt)}}else if(W!==void 0){let st=W[ht];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(V.location,st);break;case 3:s.vertexAttrib3fv(V.location,st);break;case 4:s.vertexAttrib4fv(V.location,st);break;default:s.vertexAttrib1fv(V.location,st)}}}}C()}function k(){O();for(let E in i){let B=i[E];for(let z in B){let G=B[z];for(let $ in G)m(G[$].object),delete G[$];delete B[z]}delete i[E]}}function R(E){if(i[E.id]===void 0)return;let B=i[E.id];for(let z in B){let G=B[z];for(let $ in G)m(G[$].object),delete G[$];delete B[z]}delete i[E.id]}function D(E){for(let B in i){let z=i[B];if(z[E.id]===void 0)continue;let G=z[E.id];for(let $ in G)m(G[$].object),delete G[$];delete z[E.id]}}function O(){A(),l=!0,a!==r&&(a=r,f(a.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:O,resetDefaultState:A,dispose:k,releaseStatesOfGeometry:R,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:x,disableUnusedAttributes:C}}function ix(s,t,e){let i;function r(f){i=f}function a(f,m){s.drawArrays(i,f,m),e.update(m,i,1)}function l(f,m,d){d!==0&&(s.drawArraysInstanced(i,f,m,d),e.update(m,i,d))}function h(f,m,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,m,0,d);let g=0;for(let b=0;b<d;b++)g+=m[b];e.update(g,i,1)}function u(f,m,d,_){if(d===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let b=0;b<f.length;b++)l(f[b],m[b],_[b]);else{g.multiDrawArraysInstancedWEBGL(i,f,0,m,0,_,0,d);let b=0;for(let M=0;M<d;M++)b+=m[M]*_[M];e.update(b,i,1)}}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function sx(s,t,e,i){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");r=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(D){return!(D!==ii&&i.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(D){let O=D===fo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Hi&&i.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Ui&&!O)}function u(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp",m=u(f);m!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);let d=e.logarithmicDepthBuffer===!0,_=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=b>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:u,textureFormatReadable:l,textureTypeReadable:h,precision:f,logarithmicDepthBuffer:d,reverseDepthBuffer:_,maxTextures:g,maxVertexTextures:b,maxTextureSize:M,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:C,maxVaryings:w,maxFragmentUniforms:T,vertexTextures:k,maxSamples:R}}function rx(s){let t=this,e=null,i=0,r=!1,a=!1,l=new ei,h=new oe,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(d,_){let g=d.length!==0||_||i!==0||r;return r=_,i=d.length,g},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,_){e=m(d,_,0)},this.setState=function(d,_,g){let b=d.clippingPlanes,M=d.clipIntersection,x=d.clipShadows,v=s.get(d);if(!r||b===null||b.length===0||a&&!x)a?m(null):f();else{let C=a?0:i,w=C*4,T=v.clippingState||null;u.value=T,T=m(b,_,w,g);for(let k=0;k!==w;++k)T[k]=e[k];v.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=C}};function f(){u.value!==e&&(u.value=e,u.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function m(d,_,g,b){let M=d!==null?d.length:0,x=null;if(M!==0){if(x=u.value,b!==!0||x===null){let v=g+M*4,C=_.matrixWorldInverse;h.getNormalMatrix(C),(x===null||x.length<v)&&(x=new Float32Array(v));for(let w=0,T=g;w!==M;++w,T+=4)l.copy(d[w]).applyMatrix4(C,h),l.normal.toArray(x,T),x[T+3]=l.constant}u.value=x,u.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,x}}function ox(s){let t=new WeakMap;function e(l,h){return h===Jc?l.mapping=pr:h===jc&&(l.mapping=mr),l}function i(l){if(l&&l.isTexture){let h=l.mapping;if(h===Jc||h===jc)if(t.has(l)){let u=t.get(l).texture;return e(u,l.mapping)}else{let u=l.image;if(u&&u.height>0){let f=new Dh(u.height);return f.fromEquirectangularTexture(s,l),t.set(l,f),l.addEventListener("dispose",r),e(f.texture,l.mapping)}else return null}}return l}function r(l){let h=l.target;h.removeEventListener("dispose",r);let u=t.get(h);u!==void 0&&(t.delete(h),u.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var za=class extends Ba{constructor(t=-1,e=1,i=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-t,l=i+t,h=r+e,u=r-e;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,l=a+f*this.view.width,h-=m*this.view.offsetY,u=h-m*this.view.height}this.projectionMatrix.makeOrthographic(a,l,h,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ar=4,of=[.125,.215,.35,.446,.526,.582],ys=20,Lc=new za,af=new fe,Ic=null,Dc=0,Nc=0,Oc=!1,vs=(1+Math.sqrt(5))/2,nr=1/vs,lf=[new H(-vs,nr,0),new H(vs,nr,0),new H(-nr,0,vs),new H(nr,0,vs),new H(0,vs,-nr),new H(0,vs,nr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],Ha=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Ic=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,r,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ic,Dc,Nc),this._renderer.xr.enabled=Oc,t.scissorTest=!1,ha(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pr||t.mapping===mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ic=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:fo,format:ii,colorSpace:br,depthBuffer:!1},r=cf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cf(t,e,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ax(a)),this._blurMaterial=lx(a,t,e)}return r}_compileMaterial(t){let e=new Be(this._lodPlanes[0],t);this._renderer.compile(e,Lc)}_sceneToCubeUV(t,e,i,r){let h=new bn(90,1,e,i),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],m=this._renderer,d=m.autoClear,_=m.toneMapping;m.getClearColor(af),m.toneMapping=es,m.autoClear=!1;let g=new Zn({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),b=new Be(new Xn,g),M=!1,x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,M=!0):(g.color.copy(af),M=!0);for(let v=0;v<6;v++){let C=v%3;C===0?(h.up.set(0,u[v],0),h.lookAt(f[v],0,0)):C===1?(h.up.set(0,0,u[v]),h.lookAt(0,f[v],0)):(h.up.set(0,u[v],0),h.lookAt(0,0,f[v]));let w=this._cubeSize;ha(r,C*w,v>2?w:0,w,w),m.setRenderTarget(r),M&&m.render(b,h),m.render(t,h)}b.geometry.dispose(),b.material.dispose(),m.toneMapping=_,m.autoClear=d,t.background=x}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===pr||t.mapping===mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hf());let a=r?this._cubemapMaterial:this._equirectMaterial,l=new Be(this._lodPlanes[0],a),h=a.uniforms;h.envMap.value=t;let u=this._cubeSize;ha(e,0,0,3*u,2*u),i.setRenderTarget(e),i.render(l,Lc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let a=1;a<r;a++){let l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),h=lf[(r-a-1)%lf.length];this._blur(t,a-1,a,l,h)}e.autoClear=i}_blur(t,e,i,r,a){let l=this._pingPongRenderTarget;this._halfBlur(t,l,e,i,r,"latitudinal",a),this._halfBlur(l,t,i,i,r,"longitudinal",a)}_halfBlur(t,e,i,r,a,l,h){let u=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let m=3,d=new Be(this._lodPlanes[r],f),_=f.uniforms,g=this._sizeLods[i]-1,b=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*ys-1),M=a/b,x=isFinite(a)?1+Math.floor(m*M):ys;x>ys&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ys}`);let v=[],C=0;for(let D=0;D<ys;++D){let O=D/M,A=Math.exp(-O*O/2);v.push(A),D===0?C+=A:D<x&&(C+=2*A)}for(let D=0;D<v.length;D++)v[D]=v[D]/C;_.envMap.value=t.texture,_.samples.value=x,_.weights.value=v,_.latitudinal.value=l==="latitudinal",h&&(_.poleAxis.value=h);let{_lodMax:w}=this;_.dTheta.value=b,_.mipInt.value=w-i;let T=this._sizeLods[r],k=3*T*(r>w-ar?r-w+ar:0),R=4*(this._cubeSize-T);ha(e,k,R,3*T,2*T),u.setRenderTarget(e),u.render(d,Lc)}};function ax(s){let t=[],e=[],i=[],r=s,a=s-ar+1+of.length;for(let l=0;l<a;l++){let h=Math.pow(2,r);e.push(h);let u=1/h;l>s-ar?u=of[l-s+ar-1]:l===0&&(u=0),i.push(u);let f=1/(h-2),m=-f,d=1+f,_=[m,m,d,m,d,d,m,m,d,d,m,d],g=6,b=6,M=3,x=2,v=1,C=new Float32Array(M*b*g),w=new Float32Array(x*b*g),T=new Float32Array(v*b*g);for(let R=0;R<g;R++){let D=R%3*2/3-1,O=R>2?0:-1,A=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];C.set(A,M*b*R),w.set(_,x*b*R);let E=[R,R,R,R,R,R];T.set(E,v*b*R)}let k=new We;k.setAttribute("position",new On(C,M)),k.setAttribute("uv",new On(w,x)),k.setAttribute("faceIndex",new On(T,v)),t.push(k),r>ar&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function cf(s,t,e){let i=new Gi(s,t,e);return i.texture.mapping=hl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ha(s,t,e,i,r){s.viewport.set(t,e,i,r),s.scissor.set(t,e,i,r)}function lx(s,t,e){let i=new Float32Array(ys),r=new H(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uu(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function hf(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function uf(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function uu(){return`

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
	`}function cx(s){let t=new WeakMap,e=null;function i(h){if(h&&h.isTexture){let u=h.mapping,f=u===Jc||u===jc,m=u===pr||u===mr;if(f||m){let d=t.get(h),_=d!==void 0?d.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return e===null&&(e=new Ha(s)),d=f?e.fromEquirectangular(h,d):e.fromCubemap(h,d),d.texture.pmremVersion=h.pmremVersion,t.set(h,d),d.texture;if(d!==void 0)return d.texture;{let g=h.image;return f&&g&&g.height>0||m&&g&&r(g)?(e===null&&(e=new Ha(s)),d=f?e.fromEquirectangular(h):e.fromCubemap(h),d.texture.pmremVersion=h.pmremVersion,t.set(h,d),h.addEventListener("dispose",a),d.texture):null}}}return h}function r(h){let u=0,f=6;for(let m=0;m<f;m++)h[m]!==void 0&&u++;return u===f}function a(h){let u=h.target;u.removeEventListener("dispose",a);let f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:l}}function hx(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let r=e(i);return r===null&&Qr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ux(s,t,e,i){let r={},a=new WeakMap;function l(d){let _=d.target;_.index!==null&&t.remove(_.index);for(let b in _.attributes)t.remove(_.attributes[b]);for(let b in _.morphAttributes){let M=_.morphAttributes[b];for(let x=0,v=M.length;x<v;x++)t.remove(M[x])}_.removeEventListener("dispose",l),delete r[_.id];let g=a.get(_);g&&(t.remove(g),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function h(d,_){return r[_.id]===!0||(_.addEventListener("dispose",l),r[_.id]=!0,e.memory.geometries++),_}function u(d){let _=d.attributes;for(let b in _)t.update(_[b],s.ARRAY_BUFFER);let g=d.morphAttributes;for(let b in g){let M=g[b];for(let x=0,v=M.length;x<v;x++)t.update(M[x],s.ARRAY_BUFFER)}}function f(d){let _=[],g=d.index,b=d.attributes.position,M=0;if(g!==null){let C=g.array;M=g.version;for(let w=0,T=C.length;w<T;w+=3){let k=C[w+0],R=C[w+1],D=C[w+2];_.push(k,R,R,D,D,k)}}else if(b!==void 0){let C=b.array;M=b.version;for(let w=0,T=C.length/3-1;w<T;w+=3){let k=w+0,R=w+1,D=w+2;_.push(k,R,R,D,D,k)}}else return;let x=new(sp(_)?ka:Ua)(_,1);x.version=M;let v=a.get(d);v&&t.remove(v),a.set(d,x)}function m(d){let _=a.get(d);if(_){let g=d.index;g!==null&&_.version<g.version&&f(d)}else f(d);return a.get(d)}return{get:h,update:u,getWireframeAttribute:m}}function dx(s,t,e){let i;function r(_){i=_}let a,l;function h(_){a=_.type,l=_.bytesPerElement}function u(_,g){s.drawElements(i,g,a,_*l),e.update(g,i,1)}function f(_,g,b){b!==0&&(s.drawElementsInstanced(i,g,a,_*l,b),e.update(g,i,b))}function m(_,g,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,a,_,0,b);let x=0;for(let v=0;v<b;v++)x+=g[v];e.update(x,i,1)}function d(_,g,b,M){if(b===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<_.length;v++)f(_[v]/l,g[v],M[v]);else{x.multiDrawElementsInstancedWEBGL(i,g,0,a,_,0,M,0,b);let v=0;for(let C=0;C<b;C++)v+=g[C]*M[C];e.update(v,i,1)}}this.setMode=r,this.setIndex=h,this.render=u,this.renderInstances=f,this.renderMultiDraw=m,this.renderMultiDrawInstances=d}function fx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,l,h){switch(e.calls++,l){case s.TRIANGLES:e.triangles+=h*(a/3);break;case s.LINES:e.lines+=h*(a/2);break;case s.LINE_STRIP:e.lines+=h*(a-1);break;case s.LINE_LOOP:e.lines+=h*a;break;case s.POINTS:e.points+=h*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function px(s,t,e){let i=new WeakMap,r=new Ne;function a(l,h,u){let f=l.morphTargetInfluences,m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,d=m!==void 0?m.length:0,_=i.get(h);if(_===void 0||_.count!==d){let A=function(){D.dispose(),i.delete(h),h.removeEventListener("dispose",A)};_!==void 0&&_.texture.dispose();let g=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],w=0;g===!0&&(w=1),b===!0&&(w=2),M===!0&&(w=3);let T=h.attributes.position.count*w,k=1;T>t.maxTextureSize&&(k=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let R=new Float32Array(T*k*4*d),D=new Na(R,T,k,d);D.type=Ui,D.needsUpdate=!0;let O=w*4;for(let E=0;E<d;E++){let B=x[E],z=v[E],G=C[E],$=T*k*4*E;for(let tt=0;tt<B.count;tt++){let W=tt*O;g===!0&&(r.fromBufferAttribute(B,tt),R[$+W+0]=r.x,R[$+W+1]=r.y,R[$+W+2]=r.z,R[$+W+3]=0),b===!0&&(r.fromBufferAttribute(z,tt),R[$+W+4]=r.x,R[$+W+5]=r.y,R[$+W+6]=r.z,R[$+W+7]=0),M===!0&&(r.fromBufferAttribute(G,tt),R[$+W+8]=r.x,R[$+W+9]=r.y,R[$+W+10]=r.z,R[$+W+11]=G.itemSize===4?r.w:1)}}_={count:d,texture:D,size:new Zt(T,k)},i.set(h,_),h.addEventListener("dispose",A)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(s,"morphTexture",l.morphTexture,e);else{let g=0;for(let M=0;M<f.length;M++)g+=f[M];let b=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(s,"morphTargetBaseInfluence",b),u.getUniforms().setValue(s,"morphTargetInfluences",f)}u.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:a}}function mx(s,t,e,i){let r=new WeakMap;function a(u){let f=i.render.frame,m=u.geometry,d=t.get(u,m);if(r.get(d)!==f&&(t.update(d),r.set(d,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",h)===!1&&u.addEventListener("dispose",h),r.get(u)!==f&&(e.update(u.instanceMatrix,s.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,s.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){let _=u.skeleton;r.get(_)!==f&&(_.update(),r.set(_,f))}return d}function l(){r=new WeakMap}function h(u){let f=u.target;f.removeEventListener("dispose",h),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:l}}var Va=class extends Un{constructor(t,e,i,r,a,l,h,u,f,m=cr){if(m!==cr&&m!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===cr&&(i=Ss),i===void 0&&m===_r&&(i=gr),super(null,r,a,l,h,u,m,i,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=h!==void 0?h:si,this.minFilter=u!==void 0?u:si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},lp=new Un,df=new Va(1,1),cp=new Na,hp=new Lh,up=new Fa,ff=[],pf=[],mf=new Float32Array(16),gf=new Float32Array(9),_f=new Float32Array(4);function Mr(s,t,e){let i=s[0];if(i<=0||i>0)return s;let r=t*e,a=ff[r];if(a===void 0&&(a=new Float32Array(r),ff[r]=a),t!==0){i.toArray(a,0);for(let l=1,h=0;l!==t;++l)h+=e,s[l].toArray(a,h)}return a}function Je(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function je(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function pl(s,t){let e=pf[t];e===void 0&&(e=new Int32Array(t),pf[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function gx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function _x(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;s.uniform2fv(this.addr,t),je(e,t)}}function vx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;s.uniform3fv(this.addr,t),je(e,t)}}function xx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;s.uniform4fv(this.addr,t),je(e,t)}}function yx(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(Je(e,i))return;_f.set(i),s.uniformMatrix2fv(this.addr,!1,_f),je(e,i)}}function bx(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(Je(e,i))return;gf.set(i),s.uniformMatrix3fv(this.addr,!1,gf),je(e,i)}}function Mx(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(Je(e,i))return;mf.set(i),s.uniformMatrix4fv(this.addr,!1,mf),je(e,i)}}function Sx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function wx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;s.uniform2iv(this.addr,t),je(e,t)}}function Tx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;s.uniform3iv(this.addr,t),je(e,t)}}function Ex(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;s.uniform4iv(this.addr,t),je(e,t)}}function Ax(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Px(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;s.uniform2uiv(this.addr,t),je(e,t)}}function Cx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;s.uniform3uiv(this.addr,t),je(e,t)}}function Rx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;s.uniform4uiv(this.addr,t),je(e,t)}}function Lx(s,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r);let a;this.type===s.SAMPLER_2D_SHADOW?(df.compareFunction=ip,a=df):a=lp,e.setTexture2D(t||a,r)}function Ix(s,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||hp,r)}function Dx(s,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||up,r)}function Nx(s,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||cp,r)}function Ox(s){switch(s){case 5126:return gx;case 35664:return _x;case 35665:return vx;case 35666:return xx;case 35674:return yx;case 35675:return bx;case 35676:return Mx;case 5124:case 35670:return Sx;case 35667:case 35671:return wx;case 35668:case 35672:return Tx;case 35669:case 35673:return Ex;case 5125:return Ax;case 36294:return Px;case 36295:return Cx;case 36296:return Rx;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Ix;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Nx}}function Ux(s,t){s.uniform1fv(this.addr,t)}function kx(s,t){let e=Mr(t,this.size,2);s.uniform2fv(this.addr,e)}function Bx(s,t){let e=Mr(t,this.size,3);s.uniform3fv(this.addr,e)}function Fx(s,t){let e=Mr(t,this.size,4);s.uniform4fv(this.addr,e)}function zx(s,t){let e=Mr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Hx(s,t){let e=Mr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Vx(s,t){let e=Mr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Gx(s,t){s.uniform1iv(this.addr,t)}function Wx(s,t){s.uniform2iv(this.addr,t)}function Zx(s,t){s.uniform3iv(this.addr,t)}function Xx(s,t){s.uniform4iv(this.addr,t)}function qx(s,t){s.uniform1uiv(this.addr,t)}function Yx(s,t){s.uniform2uiv(this.addr,t)}function $x(s,t){s.uniform3uiv(this.addr,t)}function Kx(s,t){s.uniform4uiv(this.addr,t)}function Jx(s,t,e){let i=this.cache,r=t.length,a=pl(e,r);Je(i,a)||(s.uniform1iv(this.addr,a),je(i,a));for(let l=0;l!==r;++l)e.setTexture2D(t[l]||lp,a[l])}function jx(s,t,e){let i=this.cache,r=t.length,a=pl(e,r);Je(i,a)||(s.uniform1iv(this.addr,a),je(i,a));for(let l=0;l!==r;++l)e.setTexture3D(t[l]||hp,a[l])}function Qx(s,t,e){let i=this.cache,r=t.length,a=pl(e,r);Je(i,a)||(s.uniform1iv(this.addr,a),je(i,a));for(let l=0;l!==r;++l)e.setTextureCube(t[l]||up,a[l])}function ty(s,t,e){let i=this.cache,r=t.length,a=pl(e,r);Je(i,a)||(s.uniform1iv(this.addr,a),je(i,a));for(let l=0;l!==r;++l)e.setTexture2DArray(t[l]||cp,a[l])}function ey(s){switch(s){case 5126:return Ux;case 35664:return kx;case 35665:return Bx;case 35666:return Fx;case 35674:return zx;case 35675:return Hx;case 35676:return Vx;case 5124:case 35670:return Gx;case 35667:case 35671:return Wx;case 35668:case 35672:return Zx;case 35669:case 35673:return Xx;case 5125:return qx;case 36294:return Yx;case 36295:return $x;case 36296:return Kx;case 35678:case 36198:case 36298:case 36306:case 35682:return Jx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return Qx;case 36289:case 36303:case 36311:case 36292:return ty}}var Nh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ox(e.type)}},Oh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ey(e.type)}},Uh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let a=0,l=r.length;a!==l;++a){let h=r[a];h.setValue(t,e[h.id],i)}}},Uc=/(\w+)(\])?(\[|\.)?/g;function vf(s,t){s.seq.push(t),s.map[t.id]=t}function ny(s,t,e){let i=s.name,r=i.length;for(Uc.lastIndex=0;;){let a=Uc.exec(i),l=Uc.lastIndex,h=a[1],u=a[2]==="]",f=a[3];if(u&&(h=h|0),f===void 0||f==="["&&l+2===r){vf(e,f===void 0?new Nh(h,s,t):new Oh(h,s,t));break}else{let d=e.map[h];d===void 0&&(d=new Uh(h),vf(e,d)),e=d}}}var dr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let a=t.getActiveUniform(e,r),l=t.getUniformLocation(e,a.name);ny(a,l,this)}}setValue(t,e,i,r){let a=this.map[e];a!==void 0&&a.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let a=0,l=e.length;a!==l;++a){let h=e[a],u=i[h.id];u.needsUpdate!==!1&&h.setValue(t,u.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,a=t.length;r!==a;++r){let l=t[r];l.id in e&&i.push(l)}return i}};function xf(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var iy=37297,sy=0;function ry(s,t){let e=s.split(`
`),i=[],r=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let l=r;l<a;l++){let h=l+1;i.push(`${h===t?">":" "} ${h}: ${e[l]}`)}return i.join(`
`)}var yf=new oe;function oy(s){we._getMatrix(yf,we.workingColorSpace,s);let t=`mat3( ${yf.elements.map(e=>e.toFixed(4))} )`;switch(we.getTransfer(s)){case ul:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function bf(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),r=s.getShaderInfoLog(t).trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+ry(s.getShaderSource(t),l)}else return r}function ay(s,t){let e=oy(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ly(s,t){let e;switch(t){case xg:e="Linear";break;case yg:e="Reinhard";break;case bg:e="Cineon";break;case Mg:e="ACESFilmic";break;case wg:e="AgX";break;case Tg:e="Neutral";break;case Sg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ua=new H;function cy(){we.getLuminanceCoefficients(ua);let s=ua.x.toFixed(4),t=ua.y.toFixed(4),e=ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function uy(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function dy(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let a=s.getActiveAttrib(t,r),l=a.name,h=1;a.type===s.FLOAT_MAT2&&(h=2),a.type===s.FLOAT_MAT3&&(h=3),a.type===s.FLOAT_MAT4&&(h=4),e[l]={type:a.type,location:s.getAttribLocation(t,l),locationSize:h}}return e}function to(s){return s!==""}function Mf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var fy=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(s){return s.replace(fy,my)}var py=new Map;function my(s,t){let e=ce[t];if(e===void 0){let i=py.get(t);if(i!==void 0)e=ce[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return kh(e)}var gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wf(s){return s.replace(gy,_y)}function _y(s,t,e,i){let r="";for(let a=parseInt(t);a<parseInt(e);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Tf(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function vy(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gf?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===jm?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ni&&(t="SHADOWMAP_TYPE_VSM"),t}function xy(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case pr:case mr:t="ENVMAP_TYPE_CUBE";break;case hl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yy(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case mr:t="ENVMAP_MODE_REFRACTION";break}return t}function by(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Wf:t="ENVMAP_BLENDING_MULTIPLY";break;case _g:t="ENVMAP_BLENDING_MIX";break;case vg:t="ENVMAP_BLENDING_ADD";break}return t}function My(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Sy(s,t,e,i){let r=s.getContext(),a=e.defines,l=e.vertexShader,h=e.fragmentShader,u=vy(e),f=xy(e),m=yy(e),d=by(e),_=My(e),g=hy(e),b=uy(a),M=r.createProgram(),x,v,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(to).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(to).join(`
`),v.length>0&&(v+=`
`)):(x=[Tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),v=[Tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+m:"",e.envMap?"#define "+d:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==es?"#define TONE_MAPPING":"",e.toneMapping!==es?ce.tonemapping_pars_fragment:"",e.toneMapping!==es?ly("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,ay("linearToOutputTexel",e.outputColorSpace),cy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(to).join(`
`)),l=kh(l),l=Mf(l,e),l=Sf(l,e),h=kh(h),h=Mf(h,e),h=Sf(h,e),l=wf(l),h=wf(h),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",e.glslVersion===kd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let w=C+x+l,T=C+v+h,k=xf(r,r.VERTEX_SHADER,w),R=xf(r,r.FRAGMENT_SHADER,T);r.attachShader(M,k),r.attachShader(M,R),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function D(B){if(s.debug.checkShaderErrors){let z=r.getProgramInfoLog(M).trim(),G=r.getShaderInfoLog(k).trim(),$=r.getShaderInfoLog(R).trim(),tt=!0,W=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(tt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,M,k,R);else{let ht=bf(r,k,"vertex"),V=bf(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+z+`
`+ht+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(G===""||$==="")&&(W=!1);W&&(B.diagnostics={runnable:tt,programLog:z,vertexShader:{log:G,prefix:x},fragmentShader:{log:$,prefix:v}})}r.deleteShader(k),r.deleteShader(R),O=new dr(r,M),A=dy(r,M)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(M,iy)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sy++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=k,this.fragmentShader=R,this}var wy=0,Bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),a=this._getShaderStage(i),l=this._getShaderCacheForMaterial(t);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Fh(t),e.set(t,i)),i}},Fh=class{constructor(t){this.id=wy++,this.code=t,this.usedTimes=0}};function Ty(s,t,e,i,r,a,l){let h=new Oa,u=new Bh,f=new Set,m=[],d=r.logarithmicDepthBuffer,_=r.vertexTextures,g=r.precision,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return f.add(A),A===0?"uv":`uv${A}`}function x(A,E,B,z,G){let $=z.fog,tt=G.geometry,W=A.isMeshStandardMaterial?z.environment:null,ht=(A.isMeshStandardMaterial?e:t).get(A.envMap||W),V=ht&&ht.mapping===hl?ht.image.height:null,lt=b[A.type];A.precision!==null&&(g=r.getMaxPrecision(A.precision),g!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));let st=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,ot=st!==void 0?st.length:0,yt=0;tt.morphAttributes.position!==void 0&&(yt=1),tt.morphAttributes.normal!==void 0&&(yt=2),tt.morphAttributes.color!==void 0&&(yt=3);let bt,K,pt,Mt;if(lt){let Ae=Mn[lt];bt=Ae.vertexShader,K=Ae.fragmentShader}else bt=A.vertexShader,K=A.fragmentShader,u.update(A),pt=u.getVertexShaderID(A),Mt=u.getFragmentShaderID(A);let gt=s.getRenderTarget(),Xt=s.state.buffers.depth.getReversed(),xt=G.isInstancedMesh===!0,rt=G.isBatchedMesh===!0,It=!!A.map,qt=!!A.matcap,ae=!!ht,Z=!!A.aoMap,Pe=!!A.lightMap,ne=!!A.bumpMap,Ot=!!A.normalMap,kt=!!A.displacementMap,Se=!!A.emissiveMap,Yt=!!A.metalnessMap,U=!!A.roughnessMap,I=A.anisotropy>0,Q=A.clearcoat>0,ut=A.dispersion>0,mt=A.iridescence>0,ct=A.sheen>0,Gt=A.transmission>0,Et=I&&!!A.anisotropyMap,Dt=Q&&!!A.clearcoatMap,me=Q&&!!A.clearcoatNormalMap,_t=Q&&!!A.clearcoatRoughnessMap,Nt=mt&&!!A.iridescenceMap,Kt=mt&&!!A.iridescenceThicknessMap,Qt=ct&&!!A.sheenColorMap,Lt=ct&&!!A.sheenRoughnessMap,pe=!!A.specularMap,ie=!!A.specularColorMap,Ce=!!A.specularIntensityMap,X=Gt&&!!A.transmissionMap,Tt=Gt&&!!A.thicknessMap,at=!!A.gradientMap,dt=!!A.alphaMap,Ct=A.alphaTest>0,At=!!A.alphaHash,ee=!!A.extensions,He=es;A.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(He=s.toneMapping);let qe={shaderID:lt,shaderType:A.type,shaderName:A.name,vertexShader:bt,fragmentShader:K,defines:A.defines,customVertexShaderID:pt,customFragmentShaderID:Mt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:rt,batchingColor:rt&&G._colorsTexture!==null,instancing:xt,instancingColor:xt&&G.instanceColor!==null,instancingMorph:xt&&G.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:gt===null?s.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:br,alphaToCoverage:!!A.alphaToCoverage,map:It,matcap:qt,envMap:ae,envMapMode:ae&&ht.mapping,envMapCubeUVHeight:V,aoMap:Z,lightMap:Pe,bumpMap:ne,normalMap:Ot,displacementMap:_&&kt,emissiveMap:Se,normalMapObjectSpace:Ot&&A.normalMapType===Cg,normalMapTangentSpace:Ot&&A.normalMapType===np,metalnessMap:Yt,roughnessMap:U,anisotropy:I,anisotropyMap:Et,clearcoat:Q,clearcoatMap:Dt,clearcoatNormalMap:me,clearcoatRoughnessMap:_t,dispersion:ut,iridescence:mt,iridescenceMap:Nt,iridescenceThicknessMap:Kt,sheen:ct,sheenColorMap:Qt,sheenRoughnessMap:Lt,specularMap:pe,specularColorMap:ie,specularIntensityMap:Ce,transmission:Gt,transmissionMap:X,thicknessMap:Tt,gradientMap:at,opaque:A.transparent===!1&&A.blending===lr&&A.alphaToCoverage===!1,alphaMap:dt,alphaTest:Ct,alphaHash:At,combine:A.combine,mapUv:It&&M(A.map.channel),aoMapUv:Z&&M(A.aoMap.channel),lightMapUv:Pe&&M(A.lightMap.channel),bumpMapUv:ne&&M(A.bumpMap.channel),normalMapUv:Ot&&M(A.normalMap.channel),displacementMapUv:kt&&M(A.displacementMap.channel),emissiveMapUv:Se&&M(A.emissiveMap.channel),metalnessMapUv:Yt&&M(A.metalnessMap.channel),roughnessMapUv:U&&M(A.roughnessMap.channel),anisotropyMapUv:Et&&M(A.anisotropyMap.channel),clearcoatMapUv:Dt&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:me&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&M(A.sheenRoughnessMap.channel),specularMapUv:pe&&M(A.specularMap.channel),specularColorMapUv:ie&&M(A.specularColorMap.channel),specularIntensityMapUv:Ce&&M(A.specularIntensityMap.channel),transmissionMapUv:X&&M(A.transmissionMap.channel),thicknessMapUv:Tt&&M(A.thicknessMap.channel),alphaMapUv:dt&&M(A.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(Ot||I),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!tt.attributes.uv&&(It||dt),fog:!!$,useFog:A.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Xt,skinning:G.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:yt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:He,decodeVideoTexture:It&&A.map.isVideoTexture===!0&&we.getTransfer(A.map.colorSpace)===De,decodeVideoTextureEmissive:Se&&A.emissiveMap.isVideoTexture===!0&&we.getTransfer(A.emissiveMap.colorSpace)===De,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Vn,flipSided:A.side===gn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:ee&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&A.extensions.multiDraw===!0||rt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return qe.vertexUv1s=f.has(1),qe.vertexUv2s=f.has(2),qe.vertexUv3s=f.has(3),f.clear(),qe}function v(A){let E=[];if(A.shaderID?E.push(A.shaderID):(E.push(A.customVertexShaderID),E.push(A.customFragmentShaderID)),A.defines!==void 0)for(let B in A.defines)E.push(B),E.push(A.defines[B]);return A.isRawShaderMaterial===!1&&(C(E,A),w(E,A),E.push(s.outputColorSpace)),E.push(A.customProgramCacheKey),E.join()}function C(A,E){A.push(E.precision),A.push(E.outputColorSpace),A.push(E.envMapMode),A.push(E.envMapCubeUVHeight),A.push(E.mapUv),A.push(E.alphaMapUv),A.push(E.lightMapUv),A.push(E.aoMapUv),A.push(E.bumpMapUv),A.push(E.normalMapUv),A.push(E.displacementMapUv),A.push(E.emissiveMapUv),A.push(E.metalnessMapUv),A.push(E.roughnessMapUv),A.push(E.anisotropyMapUv),A.push(E.clearcoatMapUv),A.push(E.clearcoatNormalMapUv),A.push(E.clearcoatRoughnessMapUv),A.push(E.iridescenceMapUv),A.push(E.iridescenceThicknessMapUv),A.push(E.sheenColorMapUv),A.push(E.sheenRoughnessMapUv),A.push(E.specularMapUv),A.push(E.specularColorMapUv),A.push(E.specularIntensityMapUv),A.push(E.transmissionMapUv),A.push(E.thicknessMapUv),A.push(E.combine),A.push(E.fogExp2),A.push(E.sizeAttenuation),A.push(E.morphTargetsCount),A.push(E.morphAttributeCount),A.push(E.numDirLights),A.push(E.numPointLights),A.push(E.numSpotLights),A.push(E.numSpotLightMaps),A.push(E.numHemiLights),A.push(E.numRectAreaLights),A.push(E.numDirLightShadows),A.push(E.numPointLightShadows),A.push(E.numSpotLightShadows),A.push(E.numSpotLightShadowsWithMaps),A.push(E.numLightProbes),A.push(E.shadowMapType),A.push(E.toneMapping),A.push(E.numClippingPlanes),A.push(E.numClipIntersection),A.push(E.depthPacking)}function w(A,E){h.disableAll(),E.supportsVertexTextures&&h.enable(0),E.instancing&&h.enable(1),E.instancingColor&&h.enable(2),E.instancingMorph&&h.enable(3),E.matcap&&h.enable(4),E.envMap&&h.enable(5),E.normalMapObjectSpace&&h.enable(6),E.normalMapTangentSpace&&h.enable(7),E.clearcoat&&h.enable(8),E.iridescence&&h.enable(9),E.alphaTest&&h.enable(10),E.vertexColors&&h.enable(11),E.vertexAlphas&&h.enable(12),E.vertexUv1s&&h.enable(13),E.vertexUv2s&&h.enable(14),E.vertexUv3s&&h.enable(15),E.vertexTangents&&h.enable(16),E.anisotropy&&h.enable(17),E.alphaHash&&h.enable(18),E.batching&&h.enable(19),E.dispersion&&h.enable(20),E.batchingColor&&h.enable(21),A.push(h.mask),h.disableAll(),E.fog&&h.enable(0),E.useFog&&h.enable(1),E.flatShading&&h.enable(2),E.logarithmicDepthBuffer&&h.enable(3),E.reverseDepthBuffer&&h.enable(4),E.skinning&&h.enable(5),E.morphTargets&&h.enable(6),E.morphNormals&&h.enable(7),E.morphColors&&h.enable(8),E.premultipliedAlpha&&h.enable(9),E.shadowMapEnabled&&h.enable(10),E.doubleSided&&h.enable(11),E.flipSided&&h.enable(12),E.useDepthPacking&&h.enable(13),E.dithering&&h.enable(14),E.transmission&&h.enable(15),E.sheen&&h.enable(16),E.opaque&&h.enable(17),E.pointsUvs&&h.enable(18),E.decodeVideoTexture&&h.enable(19),E.decodeVideoTextureEmissive&&h.enable(20),E.alphaToCoverage&&h.enable(21),A.push(h.mask)}function T(A){let E=b[A.type],B;if(E){let z=Mn[E];B=fl.clone(z.uniforms)}else B=A.uniforms;return B}function k(A,E){let B;for(let z=0,G=m.length;z<G;z++){let $=m[z];if($.cacheKey===E){B=$,++B.usedTimes;break}}return B===void 0&&(B=new Sy(s,E,A,a),m.push(B)),B}function R(A){if(--A.usedTimes===0){let E=m.indexOf(A);m[E]=m[m.length-1],m.pop(),A.destroy()}}function D(A){u.remove(A)}function O(){u.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:T,acquireProgram:k,releaseProgram:R,releaseShaderCache:D,programs:m,dispose:O}}function Ey(){let s=new WeakMap;function t(l){return s.has(l)}function e(l){let h=s.get(l);return h===void 0&&(h={},s.set(l,h)),h}function i(l){s.delete(l)}function r(l,h,u){s.get(l)[h]=u}function a(){s=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:a}}function Ay(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ef(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Af(){let s=[],t=0,e=[],i=[],r=[];function a(){t=0,e.length=0,i.length=0,r.length=0}function l(d,_,g,b,M,x){let v=s[t];return v===void 0?(v={id:d.id,object:d,geometry:_,material:g,groupOrder:b,renderOrder:d.renderOrder,z:M,group:x},s[t]=v):(v.id=d.id,v.object=d,v.geometry=_,v.material=g,v.groupOrder=b,v.renderOrder=d.renderOrder,v.z=M,v.group=x),t++,v}function h(d,_,g,b,M,x){let v=l(d,_,g,b,M,x);g.transmission>0?i.push(v):g.transparent===!0?r.push(v):e.push(v)}function u(d,_,g,b,M,x){let v=l(d,_,g,b,M,x);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):e.unshift(v)}function f(d,_){e.length>1&&e.sort(d||Ay),i.length>1&&i.sort(_||Ef),r.length>1&&r.sort(_||Ef)}function m(){for(let d=t,_=s.length;d<_;d++){let g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:r,init:a,push:h,unshift:u,finish:m,sort:f}}function Py(){let s=new WeakMap;function t(i,r){let a=s.get(i),l;return a===void 0?(l=new Af,s.set(i,[l])):r>=a.length?(l=new Af,a.push(l)):l=a[r],l}function e(){s=new WeakMap}return{get:t,dispose:e}}function Cy(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new fe};break;case"SpotLight":e={position:new H,direction:new H,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":e={color:new fe,position:new H,halfWidth:new H,halfHeight:new H};break}return s[t.id]=e,e}}}function Ry(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Ly=0;function Iy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Dy(s){let t=new Cy,e=Ry(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new H);let r=new H,a=new Fe,l=new Fe;function h(f){let m=0,d=0,_=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let g=0,b=0,M=0,x=0,v=0,C=0,w=0,T=0,k=0,R=0,D=0;f.sort(Iy);for(let A=0,E=f.length;A<E;A++){let B=f[A],z=B.color,G=B.intensity,$=B.distance,tt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)m+=z.r*G,d+=z.g*G,_+=z.b*G;else if(B.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(B.sh.coefficients[W],G);D++}else if(B.isDirectionalLight){let W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let ht=B.shadow,V=e.get(B);V.shadowIntensity=ht.intensity,V.shadowBias=ht.bias,V.shadowNormalBias=ht.normalBias,V.shadowRadius=ht.radius,V.shadowMapSize=ht.mapSize,i.directionalShadow[g]=V,i.directionalShadowMap[g]=tt,i.directionalShadowMatrix[g]=B.shadow.matrix,C++}i.directional[g]=W,g++}else if(B.isSpotLight){let W=t.get(B);W.position.setFromMatrixPosition(B.matrixWorld),W.color.copy(z).multiplyScalar(G),W.distance=$,W.coneCos=Math.cos(B.angle),W.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),W.decay=B.decay,i.spot[M]=W;let ht=B.shadow;if(B.map&&(i.spotLightMap[k]=B.map,k++,ht.updateMatrices(B),B.castShadow&&R++),i.spotLightMatrix[M]=ht.matrix,B.castShadow){let V=e.get(B);V.shadowIntensity=ht.intensity,V.shadowBias=ht.bias,V.shadowNormalBias=ht.normalBias,V.shadowRadius=ht.radius,V.shadowMapSize=ht.mapSize,i.spotShadow[M]=V,i.spotShadowMap[M]=tt,T++}M++}else if(B.isRectAreaLight){let W=t.get(B);W.color.copy(z).multiplyScalar(G),W.halfWidth.set(B.width*.5,0,0),W.halfHeight.set(0,B.height*.5,0),i.rectArea[x]=W,x++}else if(B.isPointLight){let W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity),W.distance=B.distance,W.decay=B.decay,B.castShadow){let ht=B.shadow,V=e.get(B);V.shadowIntensity=ht.intensity,V.shadowBias=ht.bias,V.shadowNormalBias=ht.normalBias,V.shadowRadius=ht.radius,V.shadowMapSize=ht.mapSize,V.shadowCameraNear=ht.camera.near,V.shadowCameraFar=ht.camera.far,i.pointShadow[b]=V,i.pointShadowMap[b]=tt,i.pointShadowMatrix[b]=B.shadow.matrix,w++}i.point[b]=W,b++}else if(B.isHemisphereLight){let W=t.get(B);W.skyColor.copy(B.color).multiplyScalar(G),W.groundColor.copy(B.groundColor).multiplyScalar(G),i.hemi[v]=W,v++}}x>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=d,i.ambient[2]=_;let O=i.hash;(O.directionalLength!==g||O.pointLength!==b||O.spotLength!==M||O.rectAreaLength!==x||O.hemiLength!==v||O.numDirectionalShadows!==C||O.numPointShadows!==w||O.numSpotShadows!==T||O.numSpotMaps!==k||O.numLightProbes!==D)&&(i.directional.length=g,i.spot.length=M,i.rectArea.length=x,i.point.length=b,i.hemi.length=v,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=T+k-R,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=D,O.directionalLength=g,O.pointLength=b,O.spotLength=M,O.rectAreaLength=x,O.hemiLength=v,O.numDirectionalShadows=C,O.numPointShadows=w,O.numSpotShadows=T,O.numSpotMaps=k,O.numLightProbes=D,i.version=Ly++)}function u(f,m){let d=0,_=0,g=0,b=0,M=0,x=m.matrixWorldInverse;for(let v=0,C=f.length;v<C;v++){let w=f[v];if(w.isDirectionalLight){let T=i.directional[d];T.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(x),d++}else if(w.isSpotLight){let T=i.spot[g];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(x),g++}else if(w.isRectAreaLight){let T=i.rectArea[b];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),l.identity(),a.copy(w.matrixWorld),a.premultiply(x),l.extractRotation(a),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(l),T.halfHeight.applyMatrix4(l),b++}else if(w.isPointLight){let T=i.point[_];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),_++}else if(w.isHemisphereLight){let T=i.hemi[M];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(x),M++}}}return{setup:h,setupView:u,state:i}}function Pf(s){let t=new Dy(s),e=[],i=[];function r(m){f.camera=m,e.length=0,i.length=0}function a(m){e.push(m)}function l(m){i.push(m)}function h(){t.setup(e)}function u(m){t.setupView(e,m)}let f={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:h,setupLightsView:u,pushLight:a,pushShadow:l}}function Ny(s){let t=new WeakMap;function e(r,a=0){let l=t.get(r),h;return l===void 0?(h=new Pf(s),t.set(r,[h])):a>=l.length?(h=new Pf(s),l.push(h)):h=l[a],h}function i(){t=new WeakMap}return{get:e,dispose:i}}var zh=class extends vi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ag,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Hh=class extends vi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Oy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uy=`uniform sampler2D shadow_pass;
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
}`;function ky(s,t,e){let i=new ro,r=new Zt,a=new Zt,l=new Ne,h=new zh({depthPacking:Pg}),u=new Hh,f={},m=e.maxTextureSize,d={[ns]:gn,[gn]:ns,[Vn]:Vn},_=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:Oy,fragmentShader:Uy}),g=_.clone();g.defines.HORIZONTAL_PASS=1;let b=new We;b.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Be(b,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gf;let v=this.type;this.render=function(R,D,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;let A=s.getRenderTarget(),E=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),z=s.state;z.setBlending(ts),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let G=v!==Ni&&this.type===Ni,$=v===Ni&&this.type!==Ni;for(let tt=0,W=R.length;tt<W;tt++){let ht=R[tt],V=ht.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ht,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let lt=V.getFrameExtents();if(r.multiply(lt),a.copy(V.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(a.x=Math.floor(m/lt.x),r.x=a.x*lt.x,V.mapSize.x=a.x),r.y>m&&(a.y=Math.floor(m/lt.y),r.y=a.y*lt.y,V.mapSize.y=a.y)),V.map===null||G===!0||$===!0){let ot=this.type!==Ni?{minFilter:si,magFilter:si}:{};V.map!==null&&V.map.dispose(),V.map=new Gi(r.x,r.y,ot),V.map.texture.name=ht.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();let st=V.getViewportCount();for(let ot=0;ot<st;ot++){let yt=V.getViewport(ot);l.set(a.x*yt.x,a.y*yt.y,a.x*yt.z,a.y*yt.w),z.viewport(l),V.updateMatrices(ht,ot),i=V.getFrustum(),T(D,O,V.camera,ht,this.type)}V.isPointLightShadow!==!0&&this.type===Ni&&C(V,O),V.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(A,E,B)};function C(R,D){let O=t.update(M);_.defines.VSM_SAMPLES!==R.blurSamples&&(_.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,_.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Gi(r.x,r.y)),_.uniforms.shadow_pass.value=R.map.texture,_.uniforms.resolution.value=R.mapSize,_.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(D,null,O,_,M,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(D,null,O,g,M,null)}function w(R,D,O,A){let E=null,B=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(B!==void 0)E=B;else if(E=O.isPointLight===!0?u:h,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let z=E.uuid,G=D.uuid,$=f[z];$===void 0&&($={},f[z]=$);let tt=$[G];tt===void 0&&(tt=E.clone(),$[G]=tt,D.addEventListener("dispose",k)),E=tt}if(E.visible=D.visible,E.wireframe=D.wireframe,A===Ni?E.side=D.shadowSide!==null?D.shadowSide:D.side:E.side=D.shadowSide!==null?D.shadowSide:d[D.side],E.alphaMap=D.alphaMap,E.alphaTest=D.alphaTest,E.map=D.map,E.clipShadows=D.clipShadows,E.clippingPlanes=D.clippingPlanes,E.clipIntersection=D.clipIntersection,E.displacementMap=D.displacementMap,E.displacementScale=D.displacementScale,E.displacementBias=D.displacementBias,E.wireframeLinewidth=D.wireframeLinewidth,E.linewidth=D.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let z=s.properties.get(E);z.light=O}return E}function T(R,D,O,A,E){if(R.visible===!1)return;if(R.layers.test(D.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===Ni)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);let G=t.update(R),$=R.material;if(Array.isArray($)){let tt=G.groups;for(let W=0,ht=tt.length;W<ht;W++){let V=tt[W],lt=$[V.materialIndex];if(lt&&lt.visible){let st=w(R,lt,A,E);R.onBeforeShadow(s,R,D,O,G,st,V),s.renderBufferDirect(O,null,G,st,R,V),R.onAfterShadow(s,R,D,O,G,st,V)}}}else if($.visible){let tt=w(R,$,A,E);R.onBeforeShadow(s,R,D,O,G,tt,null),s.renderBufferDirect(O,null,G,tt,R,null),R.onAfterShadow(s,R,D,O,G,tt,null)}}let z=R.children;for(let G=0,$=z.length;G<$;G++)T(z[G],D,O,A,E)}function k(R){R.target.removeEventListener("dispose",k);for(let O in f){let A=f[O],E=R.target.uuid;E in A&&(A[E].dispose(),delete A[E])}}}var By={[Wc]:Zc,[Xc]:$c,[qc]:Kc,[fr]:Yc,[Zc]:Wc,[$c]:Xc,[Kc]:qc,[Yc]:fr};function Fy(s,t){function e(){let X=!1,Tt=new Ne,at=null,dt=new Ne(0,0,0,0);return{setMask:function(Ct){at!==Ct&&!X&&(s.colorMask(Ct,Ct,Ct,Ct),at=Ct)},setLocked:function(Ct){X=Ct},setClear:function(Ct,At,ee,He,qe){qe===!0&&(Ct*=He,At*=He,ee*=He),Tt.set(Ct,At,ee,He),dt.equals(Tt)===!1&&(s.clearColor(Ct,At,ee,He),dt.copy(Tt))},reset:function(){X=!1,at=null,dt.set(-1,0,0,0)}}}function i(){let X=!1,Tt=!1,at=null,dt=null,Ct=null;return{setReversed:function(At){if(Tt!==At){let ee=t.get("EXT_clip_control");Tt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT);let He=Ct;Ct=null,this.setClear(He)}Tt=At},getReversed:function(){return Tt},setTest:function(At){At?gt(s.DEPTH_TEST):Xt(s.DEPTH_TEST)},setMask:function(At){at!==At&&!X&&(s.depthMask(At),at=At)},setFunc:function(At){if(Tt&&(At=By[At]),dt!==At){switch(At){case Wc:s.depthFunc(s.NEVER);break;case Zc:s.depthFunc(s.ALWAYS);break;case Xc:s.depthFunc(s.LESS);break;case fr:s.depthFunc(s.LEQUAL);break;case qc:s.depthFunc(s.EQUAL);break;case Yc:s.depthFunc(s.GEQUAL);break;case $c:s.depthFunc(s.GREATER);break;case Kc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=At}},setLocked:function(At){X=At},setClear:function(At){Ct!==At&&(Tt&&(At=1-At),s.clearDepth(At),Ct=At)},reset:function(){X=!1,at=null,dt=null,Ct=null,Tt=!1}}}function r(){let X=!1,Tt=null,at=null,dt=null,Ct=null,At=null,ee=null,He=null,qe=null;return{setTest:function(Ae){X||(Ae?gt(s.STENCIL_TEST):Xt(s.STENCIL_TEST))},setMask:function(Ae){Tt!==Ae&&!X&&(s.stencilMask(Ae),Tt=Ae)},setFunc:function(Ae,En,$n){(at!==Ae||dt!==En||Ct!==$n)&&(s.stencilFunc(Ae,En,$n),at=Ae,dt=En,Ct=$n)},setOp:function(Ae,En,$n){(At!==Ae||ee!==En||He!==$n)&&(s.stencilOp(Ae,En,$n),At=Ae,ee=En,He=$n)},setLocked:function(Ae){X=Ae},setClear:function(Ae){qe!==Ae&&(s.clearStencil(Ae),qe=Ae)},reset:function(){X=!1,Tt=null,at=null,dt=null,Ct=null,At=null,ee=null,He=null,qe=null}}}let a=new e,l=new i,h=new r,u=new WeakMap,f=new WeakMap,m={},d={},_=new WeakMap,g=[],b=null,M=!1,x=null,v=null,C=null,w=null,T=null,k=null,R=null,D=new fe(0,0,0),O=0,A=!1,E=null,B=null,z=null,G=null,$=null,tt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ht=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=ht>=1):V.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=ht>=2);let lt=null,st={},ot=s.getParameter(s.SCISSOR_BOX),yt=s.getParameter(s.VIEWPORT),bt=new Ne().fromArray(ot),K=new Ne().fromArray(yt);function pt(X,Tt,at,dt){let Ct=new Uint8Array(4),At=s.createTexture();s.bindTexture(X,At),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ee=0;ee<at;ee++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Tt,0,s.RGBA,1,1,dt,0,s.RGBA,s.UNSIGNED_BYTE,Ct):s.texImage2D(Tt+ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ct);return At}let Mt={};Mt[s.TEXTURE_2D]=pt(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=pt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=pt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=pt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),h.setClear(0),gt(s.DEPTH_TEST),l.setFunc(fr),ne(!1),Ot(Cd),gt(s.CULL_FACE),Z(ts);function gt(X){m[X]!==!0&&(s.enable(X),m[X]=!0)}function Xt(X){m[X]!==!1&&(s.disable(X),m[X]=!1)}function xt(X,Tt){return d[X]!==Tt?(s.bindFramebuffer(X,Tt),d[X]=Tt,X===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Tt),X===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Tt),!0):!1}function rt(X,Tt){let at=g,dt=!1;if(X){at=_.get(Tt),at===void 0&&(at=[],_.set(Tt,at));let Ct=X.textures;if(at.length!==Ct.length||at[0]!==s.COLOR_ATTACHMENT0){for(let At=0,ee=Ct.length;At<ee;At++)at[At]=s.COLOR_ATTACHMENT0+At;at.length=Ct.length,dt=!0}}else at[0]!==s.BACK&&(at[0]=s.BACK,dt=!0);dt&&s.drawBuffers(at)}function It(X){return b!==X?(s.useProgram(X),b=X,!0):!1}let qt={[xs]:s.FUNC_ADD,[tg]:s.FUNC_SUBTRACT,[eg]:s.FUNC_REVERSE_SUBTRACT};qt[ng]=s.MIN,qt[ig]=s.MAX;let ae={[sg]:s.ZERO,[rg]:s.ONE,[og]:s.SRC_COLOR,[Vc]:s.SRC_ALPHA,[dg]:s.SRC_ALPHA_SATURATE,[hg]:s.DST_COLOR,[lg]:s.DST_ALPHA,[ag]:s.ONE_MINUS_SRC_COLOR,[Gc]:s.ONE_MINUS_SRC_ALPHA,[ug]:s.ONE_MINUS_DST_COLOR,[cg]:s.ONE_MINUS_DST_ALPHA,[fg]:s.CONSTANT_COLOR,[pg]:s.ONE_MINUS_CONSTANT_COLOR,[mg]:s.CONSTANT_ALPHA,[gg]:s.ONE_MINUS_CONSTANT_ALPHA};function Z(X,Tt,at,dt,Ct,At,ee,He,qe,Ae){if(X===ts){M===!0&&(Xt(s.BLEND),M=!1);return}if(M===!1&&(gt(s.BLEND),M=!0),X!==Qm){if(X!==x||Ae!==A){if((v!==xs||T!==xs)&&(s.blendEquation(s.FUNC_ADD),v=xs,T=xs),Ae)switch(X){case lr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rd:s.blendFunc(s.ONE,s.ONE);break;case Ld:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Id:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case lr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rd:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ld:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Id:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}C=null,w=null,k=null,R=null,D.set(0,0,0),O=0,x=X,A=Ae}return}Ct=Ct||Tt,At=At||at,ee=ee||dt,(Tt!==v||Ct!==T)&&(s.blendEquationSeparate(qt[Tt],qt[Ct]),v=Tt,T=Ct),(at!==C||dt!==w||At!==k||ee!==R)&&(s.blendFuncSeparate(ae[at],ae[dt],ae[At],ae[ee]),C=at,w=dt,k=At,R=ee),(He.equals(D)===!1||qe!==O)&&(s.blendColor(He.r,He.g,He.b,qe),D.copy(He),O=qe),x=X,A=!1}function Pe(X,Tt){X.side===Vn?Xt(s.CULL_FACE):gt(s.CULL_FACE);let at=X.side===gn;Tt&&(at=!at),ne(at),X.blending===lr&&X.transparent===!1?Z(ts):Z(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),l.setFunc(X.depthFunc),l.setTest(X.depthTest),l.setMask(X.depthWrite),a.setMask(X.colorWrite);let dt=X.stencilWrite;h.setTest(dt),dt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Se(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?gt(s.SAMPLE_ALPHA_TO_COVERAGE):Xt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ne(X){E!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),E=X)}function Ot(X){X!==Km?(gt(s.CULL_FACE),X!==B&&(X===Cd?s.cullFace(s.BACK):X===Jm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Xt(s.CULL_FACE),B=X}function kt(X){X!==z&&(W&&s.lineWidth(X),z=X)}function Se(X,Tt,at){X?(gt(s.POLYGON_OFFSET_FILL),(G!==Tt||$!==at)&&(s.polygonOffset(Tt,at),G=Tt,$=at)):Xt(s.POLYGON_OFFSET_FILL)}function Yt(X){X?gt(s.SCISSOR_TEST):Xt(s.SCISSOR_TEST)}function U(X){X===void 0&&(X=s.TEXTURE0+tt-1),lt!==X&&(s.activeTexture(X),lt=X)}function I(X,Tt,at){at===void 0&&(lt===null?at=s.TEXTURE0+tt-1:at=lt);let dt=st[at];dt===void 0&&(dt={type:void 0,texture:void 0},st[at]=dt),(dt.type!==X||dt.texture!==Tt)&&(lt!==at&&(s.activeTexture(at),lt=at),s.bindTexture(X,Tt||Mt[X]),dt.type=X,dt.texture=Tt)}function Q(){let X=st[lt];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ut(){try{s.compressedTexImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function mt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{s.texSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Gt(){try{s.texSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function me(){try{s.texStorage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _t(){try{s.texStorage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Nt(){try{s.texImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Kt(){try{s.texImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qt(X){bt.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),bt.copy(X))}function Lt(X){K.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),K.copy(X))}function pe(X,Tt){let at=f.get(Tt);at===void 0&&(at=new WeakMap,f.set(Tt,at));let dt=at.get(X);dt===void 0&&(dt=s.getUniformBlockIndex(Tt,X.name),at.set(X,dt))}function ie(X,Tt){let dt=f.get(Tt).get(X);u.get(Tt)!==dt&&(s.uniformBlockBinding(Tt,dt,X.__bindingPointIndex),u.set(Tt,dt))}function Ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),l.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},lt=null,st={},d={},_=new WeakMap,g=[],b=null,M=!1,x=null,v=null,C=null,w=null,T=null,k=null,R=null,D=new fe(0,0,0),O=0,A=!1,E=null,B=null,z=null,G=null,$=null,bt.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),h.reset()}return{buffers:{color:a,depth:l,stencil:h},enable:gt,disable:Xt,bindFramebuffer:xt,drawBuffers:rt,useProgram:It,setBlending:Z,setMaterial:Pe,setFlipSided:ne,setCullFace:Ot,setLineWidth:kt,setPolygonOffset:Se,setScissorTest:Yt,activeTexture:U,bindTexture:I,unbindTexture:Q,compressedTexImage2D:ut,compressedTexImage3D:mt,texImage2D:Nt,texImage3D:Kt,updateUBOMapping:pe,uniformBlockBinding:ie,texStorage2D:me,texStorage3D:_t,texSubImage2D:ct,texSubImage3D:Gt,compressedTexSubImage2D:Et,compressedTexSubImage3D:Dt,scissor:Qt,viewport:Lt,reset:Ce}}function Cf(s,t,e,i){let r=zy(i);switch(e){case $f:return s*t;case Jf:return s*t;case jf:return s*t*2;case Qf:return s*t/r.components*r.byteLength;case au:return s*t/r.components*r.byteLength;case tp:return s*t*2/r.components*r.byteLength;case lu:return s*t*2/r.components*r.byteLength;case Kf:return s*t*3/r.components*r.byteLength;case ii:return s*t*4/r.components*r.byteLength;case cu:return s*t*4/r.components*r.byteLength;case Ta:case Ea:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Aa:case Pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nh:case sh:return Math.max(s,16)*Math.max(t,8)/4;case eh:case ih:return Math.max(s,8)*Math.max(t,8)/2;case rh:case oh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ah:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ch:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case hh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case uh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case dh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case fh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ph:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case mh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case gh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case _h:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case vh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case xh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case yh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case bh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ca:case Mh:case Sh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ep:case wh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Th:case Eh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zy(s){switch(s){case Hi:case Xf:return{byteLength:1,components:1};case io:case qf:case fo:return{byteLength:2,components:1};case ru:case ou:return{byteLength:2,components:4};case Ss:case su:case Ui:return{byteLength:4,components:1};case Yf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Hy(s,t,e,i,r,a,l){let h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Zt,m=new WeakMap,d,_=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,I){return g?new OffscreenCanvas(U,I):Ia("canvas")}function M(U,I,Q){let ut=1,mt=Yt(U);if((mt.width>Q||mt.height>Q)&&(ut=Q/Math.max(mt.width,mt.height)),ut<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let ct=Math.floor(ut*mt.width),Gt=Math.floor(ut*mt.height);d===void 0&&(d=b(ct,Gt));let Et=I?b(ct,Gt):d;return Et.width=ct,Et.height=Gt,Et.getContext("2d").drawImage(U,0,0,ct,Gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ct+"x"+Gt+")."),Et}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),U;return U}function x(U){return U.generateMipmaps}function v(U){s.generateMipmap(U)}function C(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(U,I,Q,ut,mt=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ct=I;if(I===s.RED&&(Q===s.FLOAT&&(ct=s.R32F),Q===s.HALF_FLOAT&&(ct=s.R16F),Q===s.UNSIGNED_BYTE&&(ct=s.R8)),I===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ct=s.R8UI),Q===s.UNSIGNED_SHORT&&(ct=s.R16UI),Q===s.UNSIGNED_INT&&(ct=s.R32UI),Q===s.BYTE&&(ct=s.R8I),Q===s.SHORT&&(ct=s.R16I),Q===s.INT&&(ct=s.R32I)),I===s.RG&&(Q===s.FLOAT&&(ct=s.RG32F),Q===s.HALF_FLOAT&&(ct=s.RG16F),Q===s.UNSIGNED_BYTE&&(ct=s.RG8)),I===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ct=s.RG8UI),Q===s.UNSIGNED_SHORT&&(ct=s.RG16UI),Q===s.UNSIGNED_INT&&(ct=s.RG32UI),Q===s.BYTE&&(ct=s.RG8I),Q===s.SHORT&&(ct=s.RG16I),Q===s.INT&&(ct=s.RG32I)),I===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ct=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(ct=s.RGB16UI),Q===s.UNSIGNED_INT&&(ct=s.RGB32UI),Q===s.BYTE&&(ct=s.RGB8I),Q===s.SHORT&&(ct=s.RGB16I),Q===s.INT&&(ct=s.RGB32I)),I===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ct=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(ct=s.RGBA16UI),Q===s.UNSIGNED_INT&&(ct=s.RGBA32UI),Q===s.BYTE&&(ct=s.RGBA8I),Q===s.SHORT&&(ct=s.RGBA16I),Q===s.INT&&(ct=s.RGBA32I)),I===s.RGB&&Q===s.UNSIGNED_INT_5_9_9_9_REV&&(ct=s.RGB9_E5),I===s.RGBA){let Gt=mt?ul:we.getTransfer(ut);Q===s.FLOAT&&(ct=s.RGBA32F),Q===s.HALF_FLOAT&&(ct=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(ct=Gt===De?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(ct=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(ct=s.RGB5_A1)}return(ct===s.R16F||ct===s.R32F||ct===s.RG16F||ct===s.RG32F||ct===s.RGBA16F||ct===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function T(U,I){let Q;return U?I===null||I===Ss||I===gr?Q=s.DEPTH24_STENCIL8:I===Ui?Q=s.DEPTH32F_STENCIL8:I===io&&(Q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===Ss||I===gr?Q=s.DEPTH_COMPONENT24:I===Ui?Q=s.DEPTH_COMPONENT32F:I===io&&(Q=s.DEPTH_COMPONENT16),Q}function k(U,I){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==si&&U.minFilter!==Gn?Math.log2(Math.max(I.width,I.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?I.mipmaps.length:1}function R(U){let I=U.target;I.removeEventListener("dispose",R),O(I),I.isVideoTexture&&m.delete(I)}function D(U){let I=U.target;I.removeEventListener("dispose",D),E(I)}function O(U){let I=i.get(U);if(I.__webglInit===void 0)return;let Q=U.source,ut=_.get(Q);if(ut){let mt=ut[I.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&A(U),Object.keys(ut).length===0&&_.delete(Q)}i.remove(U)}function A(U){let I=i.get(U);s.deleteTexture(I.__webglTexture);let Q=U.source,ut=_.get(Q);delete ut[I.__cacheKey],l.memory.textures--}function E(U){let I=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(I.__webglFramebuffer[ut]))for(let mt=0;mt<I.__webglFramebuffer[ut].length;mt++)s.deleteFramebuffer(I.__webglFramebuffer[ut][mt]);else s.deleteFramebuffer(I.__webglFramebuffer[ut]);I.__webglDepthbuffer&&s.deleteRenderbuffer(I.__webglDepthbuffer[ut])}else{if(Array.isArray(I.__webglFramebuffer))for(let ut=0;ut<I.__webglFramebuffer.length;ut++)s.deleteFramebuffer(I.__webglFramebuffer[ut]);else s.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&s.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&s.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let ut=0;ut<I.__webglColorRenderbuffer.length;ut++)I.__webglColorRenderbuffer[ut]&&s.deleteRenderbuffer(I.__webglColorRenderbuffer[ut]);I.__webglDepthRenderbuffer&&s.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let Q=U.textures;for(let ut=0,mt=Q.length;ut<mt;ut++){let ct=i.get(Q[ut]);ct.__webglTexture&&(s.deleteTexture(ct.__webglTexture),l.memory.textures--),i.remove(Q[ut])}i.remove(U)}let B=0;function z(){B=0}function G(){let U=B;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),B+=1,U}function $(U){let I=[];return I.push(U.wrapS),I.push(U.wrapT),I.push(U.wrapR||0),I.push(U.magFilter),I.push(U.minFilter),I.push(U.anisotropy),I.push(U.internalFormat),I.push(U.format),I.push(U.type),I.push(U.generateMipmaps),I.push(U.premultiplyAlpha),I.push(U.flipY),I.push(U.unpackAlignment),I.push(U.colorSpace),I.join()}function tt(U,I){let Q=i.get(U);if(U.isVideoTexture&&kt(U),U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){let ut=U.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(Q,U,I);return}}e.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+I)}function W(U,I){let Q=i.get(U);if(U.version>0&&Q.__version!==U.version){K(Q,U,I);return}e.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+I)}function ht(U,I){let Q=i.get(U);if(U.version>0&&Q.__version!==U.version){K(Q,U,I);return}e.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+I)}function V(U,I){let Q=i.get(U);if(U.version>0&&Q.__version!==U.version){pt(Q,U,I);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+I)}let lt={[Qc]:s.REPEAT,[bs]:s.CLAMP_TO_EDGE,[th]:s.MIRRORED_REPEAT},st={[si]:s.NEAREST,[Eg]:s.NEAREST_MIPMAP_NEAREST,[Zo]:s.NEAREST_MIPMAP_LINEAR,[Gn]:s.LINEAR,[cc]:s.LINEAR_MIPMAP_NEAREST,[Ms]:s.LINEAR_MIPMAP_LINEAR},ot={[Rg]:s.NEVER,[Ug]:s.ALWAYS,[Lg]:s.LESS,[ip]:s.LEQUAL,[Ig]:s.EQUAL,[Og]:s.GEQUAL,[Dg]:s.GREATER,[Ng]:s.NOTEQUAL};function yt(U,I){if(I.type===Ui&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===Gn||I.magFilter===cc||I.magFilter===Zo||I.magFilter===Ms||I.minFilter===Gn||I.minFilter===cc||I.minFilter===Zo||I.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,lt[I.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,lt[I.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,lt[I.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,st[I.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,st[I.minFilter]),I.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,ot[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===si||I.minFilter!==Zo&&I.minFilter!==Ms||I.type===Ui&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||i.get(I).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(U,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,r.getMaxAnisotropy())),i.get(I).__currentAnisotropy=I.anisotropy}}}function bt(U,I){let Q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,I.addEventListener("dispose",R));let ut=I.source,mt=_.get(ut);mt===void 0&&(mt={},_.set(ut,mt));let ct=$(I);if(ct!==U.__cacheKey){mt[ct]===void 0&&(mt[ct]={texture:s.createTexture(),usedTimes:0},l.memory.textures++,Q=!0),mt[ct].usedTimes++;let Gt=mt[U.__cacheKey];Gt!==void 0&&(mt[U.__cacheKey].usedTimes--,Gt.usedTimes===0&&A(I)),U.__cacheKey=ct,U.__webglTexture=mt[ct].texture}return Q}function K(U,I,Q){let ut=s.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(ut=s.TEXTURE_2D_ARRAY),I.isData3DTexture&&(ut=s.TEXTURE_3D);let mt=bt(U,I),ct=I.source;e.bindTexture(ut,U.__webglTexture,s.TEXTURE0+Q);let Gt=i.get(ct);if(ct.version!==Gt.__version||mt===!0){e.activeTexture(s.TEXTURE0+Q);let Et=we.getPrimaries(we.workingColorSpace),Dt=I.colorSpace===Qi?null:we.getPrimaries(I.colorSpace),me=I.colorSpace===Qi||Et===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,I.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,I.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let _t=M(I.image,!1,r.maxTextureSize);_t=Se(I,_t);let Nt=a.convert(I.format,I.colorSpace),Kt=a.convert(I.type),Qt=w(I.internalFormat,Nt,Kt,I.colorSpace,I.isVideoTexture);yt(ut,I);let Lt,pe=I.mipmaps,ie=I.isVideoTexture!==!0,Ce=Gt.__version===void 0||mt===!0,X=ct.dataReady,Tt=k(I,_t);if(I.isDepthTexture)Qt=T(I.format===_r,I.type),Ce&&(ie?e.texStorage2D(s.TEXTURE_2D,1,Qt,_t.width,_t.height):e.texImage2D(s.TEXTURE_2D,0,Qt,_t.width,_t.height,0,Nt,Kt,null));else if(I.isDataTexture)if(pe.length>0){ie&&Ce&&e.texStorage2D(s.TEXTURE_2D,Tt,Qt,pe[0].width,pe[0].height);for(let at=0,dt=pe.length;at<dt;at++)Lt=pe[at],ie?X&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,Lt.width,Lt.height,Nt,Kt,Lt.data):e.texImage2D(s.TEXTURE_2D,at,Qt,Lt.width,Lt.height,0,Nt,Kt,Lt.data);I.generateMipmaps=!1}else ie?(Ce&&e.texStorage2D(s.TEXTURE_2D,Tt,Qt,_t.width,_t.height),X&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t.width,_t.height,Nt,Kt,_t.data)):e.texImage2D(s.TEXTURE_2D,0,Qt,_t.width,_t.height,0,Nt,Kt,_t.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){ie&&Ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Tt,Qt,pe[0].width,pe[0].height,_t.depth);for(let at=0,dt=pe.length;at<dt;at++)if(Lt=pe[at],I.format!==ii)if(Nt!==null)if(ie){if(X)if(I.layerUpdates.size>0){let Ct=Cf(Lt.width,Lt.height,I.format,I.type);for(let At of I.layerUpdates){let ee=Lt.data.subarray(At*Ct/Lt.data.BYTES_PER_ELEMENT,(At+1)*Ct/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,At,Lt.width,Lt.height,1,Nt,ee)}I.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,Lt.width,Lt.height,_t.depth,Nt,Lt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,at,Qt,Lt.width,Lt.height,_t.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?X&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,Lt.width,Lt.height,_t.depth,Nt,Kt,Lt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,at,Qt,Lt.width,Lt.height,_t.depth,0,Nt,Kt,Lt.data)}else{ie&&Ce&&e.texStorage2D(s.TEXTURE_2D,Tt,Qt,pe[0].width,pe[0].height);for(let at=0,dt=pe.length;at<dt;at++)Lt=pe[at],I.format!==ii?Nt!==null?ie?X&&e.compressedTexSubImage2D(s.TEXTURE_2D,at,0,0,Lt.width,Lt.height,Nt,Lt.data):e.compressedTexImage2D(s.TEXTURE_2D,at,Qt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?X&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,Lt.width,Lt.height,Nt,Kt,Lt.data):e.texImage2D(s.TEXTURE_2D,at,Qt,Lt.width,Lt.height,0,Nt,Kt,Lt.data)}else if(I.isDataArrayTexture)if(ie){if(Ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Tt,Qt,_t.width,_t.height,_t.depth),X)if(I.layerUpdates.size>0){let at=Cf(_t.width,_t.height,I.format,I.type);for(let dt of I.layerUpdates){let Ct=_t.data.subarray(dt*at/_t.data.BYTES_PER_ELEMENT,(dt+1)*at/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,dt,_t.width,_t.height,1,Nt,Kt,Ct)}I.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Nt,Kt,_t.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Qt,_t.width,_t.height,_t.depth,0,Nt,Kt,_t.data);else if(I.isData3DTexture)ie?(Ce&&e.texStorage3D(s.TEXTURE_3D,Tt,Qt,_t.width,_t.height,_t.depth),X&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Nt,Kt,_t.data)):e.texImage3D(s.TEXTURE_3D,0,Qt,_t.width,_t.height,_t.depth,0,Nt,Kt,_t.data);else if(I.isFramebufferTexture){if(Ce)if(ie)e.texStorage2D(s.TEXTURE_2D,Tt,Qt,_t.width,_t.height);else{let at=_t.width,dt=_t.height;for(let Ct=0;Ct<Tt;Ct++)e.texImage2D(s.TEXTURE_2D,Ct,Qt,at,dt,0,Nt,Kt,null),at>>=1,dt>>=1}}else if(pe.length>0){if(ie&&Ce){let at=Yt(pe[0]);e.texStorage2D(s.TEXTURE_2D,Tt,Qt,at.width,at.height)}for(let at=0,dt=pe.length;at<dt;at++)Lt=pe[at],ie?X&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,Nt,Kt,Lt):e.texImage2D(s.TEXTURE_2D,at,Qt,Nt,Kt,Lt);I.generateMipmaps=!1}else if(ie){if(Ce){let at=Yt(_t);e.texStorage2D(s.TEXTURE_2D,Tt,Qt,at.width,at.height)}X&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Nt,Kt,_t)}else e.texImage2D(s.TEXTURE_2D,0,Qt,Nt,Kt,_t);x(I)&&v(ut),Gt.__version=ct.version,I.onUpdate&&I.onUpdate(I)}U.__version=I.version}function pt(U,I,Q){if(I.image.length!==6)return;let ut=bt(U,I),mt=I.source;e.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+Q);let ct=i.get(mt);if(mt.version!==ct.__version||ut===!0){e.activeTexture(s.TEXTURE0+Q);let Gt=we.getPrimaries(we.workingColorSpace),Et=I.colorSpace===Qi?null:we.getPrimaries(I.colorSpace),Dt=I.colorSpace===Qi||Gt===Et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,I.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,I.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let me=I.isCompressedTexture||I.image[0].isCompressedTexture,_t=I.image[0]&&I.image[0].isDataTexture,Nt=[];for(let dt=0;dt<6;dt++)!me&&!_t?Nt[dt]=M(I.image[dt],!0,r.maxCubemapSize):Nt[dt]=_t?I.image[dt].image:I.image[dt],Nt[dt]=Se(I,Nt[dt]);let Kt=Nt[0],Qt=a.convert(I.format,I.colorSpace),Lt=a.convert(I.type),pe=w(I.internalFormat,Qt,Lt,I.colorSpace),ie=I.isVideoTexture!==!0,Ce=ct.__version===void 0||ut===!0,X=mt.dataReady,Tt=k(I,Kt);yt(s.TEXTURE_CUBE_MAP,I);let at;if(me){ie&&Ce&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Tt,pe,Kt.width,Kt.height);for(let dt=0;dt<6;dt++){at=Nt[dt].mipmaps;for(let Ct=0;Ct<at.length;Ct++){let At=at[Ct];I.format!==ii?Qt!==null?ie?X&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct,0,0,At.width,At.height,Qt,At.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct,pe,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?X&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct,0,0,At.width,At.height,Qt,Lt,At.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct,pe,At.width,At.height,0,Qt,Lt,At.data)}}}else{if(at=I.mipmaps,ie&&Ce){at.length>0&&Tt++;let dt=Yt(Nt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Tt,pe,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(_t){ie?X&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Nt[dt].width,Nt[dt].height,Qt,Lt,Nt[dt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,pe,Nt[dt].width,Nt[dt].height,0,Qt,Lt,Nt[dt].data);for(let Ct=0;Ct<at.length;Ct++){let ee=at[Ct].image[dt].image;ie?X&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct+1,0,0,ee.width,ee.height,Qt,Lt,ee.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct+1,pe,ee.width,ee.height,0,Qt,Lt,ee.data)}}else{ie?X&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Qt,Lt,Nt[dt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,pe,Qt,Lt,Nt[dt]);for(let Ct=0;Ct<at.length;Ct++){let At=at[Ct];ie?X&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct+1,0,0,Qt,Lt,At.image[dt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct+1,pe,Qt,Lt,At.image[dt])}}}x(I)&&v(s.TEXTURE_CUBE_MAP),ct.__version=mt.version,I.onUpdate&&I.onUpdate(I)}U.__version=I.version}function Mt(U,I,Q,ut,mt,ct){let Gt=a.convert(Q.format,Q.colorSpace),Et=a.convert(Q.type),Dt=w(Q.internalFormat,Gt,Et,Q.colorSpace),me=i.get(I),_t=i.get(Q);if(_t.__renderTarget=I,!me.__hasExternalTextures){let Nt=Math.max(1,I.width>>ct),Kt=Math.max(1,I.height>>ct);mt===s.TEXTURE_3D||mt===s.TEXTURE_2D_ARRAY?e.texImage3D(mt,ct,Dt,Nt,Kt,I.depth,0,Gt,Et,null):e.texImage2D(mt,ct,Dt,Nt,Kt,0,Gt,Et,null)}e.bindFramebuffer(s.FRAMEBUFFER,U),Ot(I)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ut,mt,_t.__webglTexture,0,ne(I)):(mt===s.TEXTURE_2D||mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ut,mt,_t.__webglTexture,ct),e.bindFramebuffer(s.FRAMEBUFFER,null)}function gt(U,I,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,U),I.depthBuffer){let ut=I.depthTexture,mt=ut&&ut.isDepthTexture?ut.type:null,ct=T(I.stencilBuffer,mt),Gt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=ne(I);Ot(I)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Et,ct,I.width,I.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,ct,I.width,I.height):s.renderbufferStorage(s.RENDERBUFFER,ct,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Gt,s.RENDERBUFFER,U)}else{let ut=I.textures;for(let mt=0;mt<ut.length;mt++){let ct=ut[mt],Gt=a.convert(ct.format,ct.colorSpace),Et=a.convert(ct.type),Dt=w(ct.internalFormat,Gt,Et,ct.colorSpace),me=ne(I);Q&&Ot(I)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,me,Dt,I.width,I.height):Ot(I)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me,Dt,I.width,I.height):s.renderbufferStorage(s.RENDERBUFFER,Dt,I.width,I.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Xt(U,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,U),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ut=i.get(I.depthTexture);ut.__renderTarget=I,(!ut.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),tt(I.depthTexture,0);let mt=ut.__webglTexture,ct=ne(I);if(I.depthTexture.format===cr)Ot(I)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,mt,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,mt,0);else if(I.depthTexture.format===_r)Ot(I)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,mt,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function xt(U){let I=i.get(U),Q=U.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==U.depthTexture){let ut=U.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),ut){let mt=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,ut.removeEventListener("dispose",mt)};ut.addEventListener("dispose",mt),I.__depthDisposeCallback=mt}I.__boundDepthTexture=ut}if(U.depthTexture&&!I.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Xt(I.__webglFramebuffer,U)}else if(Q){I.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(s.FRAMEBUFFER,I.__webglFramebuffer[ut]),I.__webglDepthbuffer[ut]===void 0)I.__webglDepthbuffer[ut]=s.createRenderbuffer(),gt(I.__webglDepthbuffer[ut],U,!1);else{let mt=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=I.__webglDepthbuffer[ut];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,ct)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=s.createRenderbuffer(),gt(I.__webglDepthbuffer,U,!1);else{let ut=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=I.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ut,s.RENDERBUFFER,mt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(U,I,Q){let ut=i.get(U);I!==void 0&&Mt(ut.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&xt(U)}function It(U){let I=U.texture,Q=i.get(U),ut=i.get(I);U.addEventListener("dispose",D);let mt=U.textures,ct=U.isWebGLCubeRenderTarget===!0,Gt=mt.length>1;if(Gt||(ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture()),ut.__version=I.version,l.memory.textures++),ct){Q.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(I.mipmaps&&I.mipmaps.length>0){Q.__webglFramebuffer[Et]=[];for(let Dt=0;Dt<I.mipmaps.length;Dt++)Q.__webglFramebuffer[Et][Dt]=s.createFramebuffer()}else Q.__webglFramebuffer[Et]=s.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Et=0;Et<I.mipmaps.length;Et++)Q.__webglFramebuffer[Et]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(Gt)for(let Et=0,Dt=mt.length;Et<Dt;Et++){let me=i.get(mt[Et]);me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture(),l.memory.textures++)}if(U.samples>0&&Ot(U)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Et=0;Et<mt.length;Et++){let Dt=mt[Et];Q.__webglColorRenderbuffer[Et]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[Et]);let me=a.convert(Dt.format,Dt.colorSpace),_t=a.convert(Dt.type),Nt=w(Dt.internalFormat,me,_t,Dt.colorSpace,U.isXRRenderTarget===!0),Kt=ne(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,Nt,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Et,s.RENDERBUFFER,Q.__webglColorRenderbuffer[Et])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),gt(Q.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){e.bindTexture(s.TEXTURE_CUBE_MAP,ut.__webglTexture),yt(s.TEXTURE_CUBE_MAP,I);for(let Et=0;Et<6;Et++)if(I.mipmaps&&I.mipmaps.length>0)for(let Dt=0;Dt<I.mipmaps.length;Dt++)Mt(Q.__webglFramebuffer[Et][Dt],U,I,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Dt);else Mt(Q.__webglFramebuffer[Et],U,I,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);x(I)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Gt){for(let Et=0,Dt=mt.length;Et<Dt;Et++){let me=mt[Et],_t=i.get(me);e.bindTexture(s.TEXTURE_2D,_t.__webglTexture),yt(s.TEXTURE_2D,me),Mt(Q.__webglFramebuffer,U,me,s.COLOR_ATTACHMENT0+Et,s.TEXTURE_2D,0),x(me)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let Et=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Et=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Et,ut.__webglTexture),yt(Et,I),I.mipmaps&&I.mipmaps.length>0)for(let Dt=0;Dt<I.mipmaps.length;Dt++)Mt(Q.__webglFramebuffer[Dt],U,I,s.COLOR_ATTACHMENT0,Et,Dt);else Mt(Q.__webglFramebuffer,U,I,s.COLOR_ATTACHMENT0,Et,0);x(I)&&v(Et),e.unbindTexture()}U.depthBuffer&&xt(U)}function qt(U){let I=U.textures;for(let Q=0,ut=I.length;Q<ut;Q++){let mt=I[Q];if(x(mt)){let ct=C(U),Gt=i.get(mt).__webglTexture;e.bindTexture(ct,Gt),v(ct),e.unbindTexture()}}}let ae=[],Z=[];function Pe(U){if(U.samples>0){if(Ot(U)===!1){let I=U.textures,Q=U.width,ut=U.height,mt=s.COLOR_BUFFER_BIT,ct=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Gt=i.get(U),Et=I.length>1;if(Et)for(let Dt=0;Dt<I.length;Dt++)e.bindFramebuffer(s.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Dt=0;Dt<I.length;Dt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(mt|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(mt|=s.STENCIL_BUFFER_BIT)),Et){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Gt.__webglColorRenderbuffer[Dt]);let me=i.get(I[Dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,me,0)}s.blitFramebuffer(0,0,Q,ut,0,0,Q,ut,mt,s.NEAREST),u===!0&&(ae.length=0,Z.length=0,ae.push(s.COLOR_ATTACHMENT0+Dt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ae.push(ct),Z.push(ct),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ae))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Et)for(let Dt=0;Dt<I.length;Dt++){e.bindFramebuffer(s.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,Gt.__webglColorRenderbuffer[Dt]);let me=i.get(I[Dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.TEXTURE_2D,me,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&u){let I=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[I])}}}function ne(U){return Math.min(r.maxSamples,U.samples)}function Ot(U){let I=i.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function kt(U){let I=l.render.frame;m.get(U)!==I&&(m.set(U,I),U.update())}function Se(U,I){let Q=U.colorSpace,ut=U.format,mt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Q!==br&&Q!==Qi&&(we.getTransfer(Q)===De?(ut!==ii||mt!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),I}function Yt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=tt,this.setTexture2DArray=W,this.setTexture3D=ht,this.setTextureCube=V,this.rebindTextures=rt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Ot}function Vy(s,t){function e(i,r=Qi){let a,l=we.getTransfer(r);if(i===Hi)return s.UNSIGNED_BYTE;if(i===ru)return s.UNSIGNED_SHORT_4_4_4_4;if(i===ou)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Yf)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Xf)return s.BYTE;if(i===qf)return s.SHORT;if(i===io)return s.UNSIGNED_SHORT;if(i===su)return s.INT;if(i===Ss)return s.UNSIGNED_INT;if(i===Ui)return s.FLOAT;if(i===fo)return s.HALF_FLOAT;if(i===$f)return s.ALPHA;if(i===Kf)return s.RGB;if(i===ii)return s.RGBA;if(i===Jf)return s.LUMINANCE;if(i===jf)return s.LUMINANCE_ALPHA;if(i===cr)return s.DEPTH_COMPONENT;if(i===_r)return s.DEPTH_STENCIL;if(i===Qf)return s.RED;if(i===au)return s.RED_INTEGER;if(i===tp)return s.RG;if(i===lu)return s.RG_INTEGER;if(i===cu)return s.RGBA_INTEGER;if(i===Ta||i===Ea||i===Aa||i===Pa)if(l===De)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Ta)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Ta)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ea)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Aa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===eh||i===nh||i===ih||i===sh)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===eh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ih)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rh||i===oh||i===ah)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===rh||i===oh)return l===De?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===ah)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===lh||i===ch||i===hh||i===uh||i===dh||i===fh||i===ph||i===mh||i===gh||i===_h||i===vh||i===xh||i===yh||i===bh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===lh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ch)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===uh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ph)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_h)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ca||i===Mh||i===Sh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Ca)return l===De?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ep||i===wh||i===Th||i===Eh)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Ca)return a.COMPRESSED_RED_RGTC1_EXT;if(i===wh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Th)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Eh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gr?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var Vh=class extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Bi=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gy={type:"move"},no=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,a=null,l=null,h=this._targetRay,u=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){l=!0;for(let M of t.hand.values()){let x=e.getJointPose(M,i),v=this._getHandJoint(f,M);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}let m=f.joints["index-finger-tip"],d=f.joints["thumb-tip"],_=m.position.distanceTo(d.position),g=.02,b=.005;f.inputState.pinching&&_>g+b?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&_<=g-b&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1));h!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Gy)))}return h!==null&&(h.visible=r!==null),u!==null&&(u.visible=a!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Bi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Wy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zy=`
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

}`,Gh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let r=new Un,a=t.properties.get(r);a.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new qn({vertexShader:Wy,fragmentShader:Zy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Be(new Ts(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wh=class extends Vi{constructor(t,e){super();let i=this,r=null,a=1,l=null,h="local-floor",u=1,f=null,m=null,d=null,_=null,g=null,b=null,M=new Gh,x=e.getContextAttributes(),v=null,C=null,w=[],T=[],k=new Zt,R=null,D=new bn;D.viewport=new Ne;let O=new bn;O.viewport=new Ne;let A=[D,O],E=new Vh,B=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let pt=w[K];return pt===void 0&&(pt=new no,w[K]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(K){let pt=w[K];return pt===void 0&&(pt=new no,w[K]=pt),pt.getGripSpace()},this.getHand=function(K){let pt=w[K];return pt===void 0&&(pt=new no,w[K]=pt),pt.getHandSpace()};function G(K){let pt=T.indexOf(K.inputSource);if(pt===-1)return;let Mt=w[pt];Mt!==void 0&&(Mt.update(K.inputSource,K.frame,f||l),Mt.dispatchEvent({type:K.type,data:K.inputSource}))}function $(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",tt);for(let K=0;K<w.length;K++){let pt=T[K];pt!==null&&(T[K]=null,w[K].disconnect(pt))}B=null,z=null,M.reset(),t.setRenderTarget(v),g=null,_=null,d=null,r=null,C=null,bt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){h=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(K){f=K},this.getBaseLayer=function(){return _!==null?_:g},this.getBinding=function(){return d},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(v=t.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",$),r.addEventListener("inputsourceschange",tt),x.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(k),r.renderState.layers===void 0){let pt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,e,pt),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),C=new Gi(g.framebufferWidth,g.framebufferHeight,{format:ii,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let pt=null,Mt=null,gt=null;x.depth&&(gt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=x.stencil?_r:cr,Mt=x.stencil?gr:Ss);let Xt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:a};d=new XRWebGLBinding(r,e),_=d.createProjectionLayer(Xt),r.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),C=new Gi(_.textureWidth,_.textureHeight,{format:ii,type:Hi,depthTexture:new Va(_.textureWidth,_.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(u),f=null,l=await r.requestReferenceSpace(h),bt.setContext(r),bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function tt(K){for(let pt=0;pt<K.removed.length;pt++){let Mt=K.removed[pt],gt=T.indexOf(Mt);gt>=0&&(T[gt]=null,w[gt].disconnect(Mt))}for(let pt=0;pt<K.added.length;pt++){let Mt=K.added[pt],gt=T.indexOf(Mt);if(gt===-1){for(let xt=0;xt<w.length;xt++)if(xt>=T.length){T.push(Mt),gt=xt;break}else if(T[xt]===null){T[xt]=Mt,gt=xt;break}if(gt===-1)break}let Xt=w[gt];Xt&&Xt.connect(Mt)}}let W=new H,ht=new H;function V(K,pt,Mt){W.setFromMatrixPosition(pt.matrixWorld),ht.setFromMatrixPosition(Mt.matrixWorld);let gt=W.distanceTo(ht),Xt=pt.projectionMatrix.elements,xt=Mt.projectionMatrix.elements,rt=Xt[14]/(Xt[10]-1),It=Xt[14]/(Xt[10]+1),qt=(Xt[9]+1)/Xt[5],ae=(Xt[9]-1)/Xt[5],Z=(Xt[8]-1)/Xt[0],Pe=(xt[8]+1)/xt[0],ne=rt*Z,Ot=rt*Pe,kt=gt/(-Z+Pe),Se=kt*-Z;if(pt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Se),K.translateZ(kt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Xt[10]===-1)K.projectionMatrix.copy(pt.projectionMatrix),K.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{let Yt=rt+kt,U=It+kt,I=ne-Se,Q=Ot+(gt-Se),ut=qt*It/U*Yt,mt=ae*It/U*Yt;K.projectionMatrix.makePerspective(I,Q,ut,mt,Yt,U),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function lt(K,pt){pt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(pt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let pt=K.near,Mt=K.far;M.texture!==null&&(M.depthNear>0&&(pt=M.depthNear),M.depthFar>0&&(Mt=M.depthFar)),E.near=O.near=D.near=pt,E.far=O.far=D.far=Mt,(B!==E.near||z!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),B=E.near,z=E.far),D.layers.mask=K.layers.mask|2,O.layers.mask=K.layers.mask|4,E.layers.mask=D.layers.mask|O.layers.mask;let gt=K.parent,Xt=E.cameras;lt(E,gt);for(let xt=0;xt<Xt.length;xt++)lt(Xt[xt],gt);Xt.length===2?V(E,D,O):E.projectionMatrix.copy(D.projectionMatrix),st(K,E,gt)};function st(K,pt,Mt){Mt===null?K.matrix.copy(pt.matrixWorld):(K.matrix.copy(Mt.matrixWorld),K.matrix.invert(),K.matrix.multiply(pt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(pt.projectionMatrix),K.projectionMatrixInverse.copy(pt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=so*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(_===null&&g===null))return u},this.setFoveation=function(K){u=K,_!==null&&(_.fixedFoveation=K),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=K)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(E)};let ot=null;function yt(K,pt){if(m=pt.getViewerPose(f||l),b=pt,m!==null){let Mt=m.views;g!==null&&(t.setRenderTargetFramebuffer(C,g.framebuffer),t.setRenderTarget(C));let gt=!1;Mt.length!==E.cameras.length&&(E.cameras.length=0,gt=!0);for(let xt=0;xt<Mt.length;xt++){let rt=Mt[xt],It=null;if(g!==null)It=g.getViewport(rt);else{let ae=d.getViewSubImage(_,rt);It=ae.viewport,xt===0&&(t.setRenderTargetTextures(C,ae.colorTexture,_.ignoreDepthValues?void 0:ae.depthStencilTexture),t.setRenderTarget(C))}let qt=A[xt];qt===void 0&&(qt=new bn,qt.layers.enable(xt),qt.viewport=new Ne,A[xt]=qt),qt.matrix.fromArray(rt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(rt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(It.x,It.y,It.width,It.height),xt===0&&(E.matrix.copy(qt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),gt===!0&&E.cameras.push(qt)}let Xt=r.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")){let xt=d.getDepthInformation(Mt[0]);xt&&xt.isValid&&xt.texture&&M.init(t,xt,r.renderState)}}for(let Mt=0;Mt<w.length;Mt++){let gt=T[Mt],Xt=w[Mt];gt!==null&&Xt!==void 0&&Xt.update(gt,pt,f||l)}ot&&ot(K,pt),pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pt}),b=null}let bt=new ap;bt.setAnimationLoop(yt),this.setAnimationLoop=function(K){ot=K},this.dispose=function(){}}},_s=new _i,Xy=new Fe;function qy(s,t){function e(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function i(x,v){v.color.getRGB(x.fogColor.value,op(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function r(x,v,C,w,T){v.isMeshBasicMaterial||v.isMeshLambertMaterial?a(x,v):v.isMeshToonMaterial?(a(x,v),d(x,v)):v.isMeshPhongMaterial?(a(x,v),m(x,v)):v.isMeshStandardMaterial?(a(x,v),_(x,v),v.isMeshPhysicalMaterial&&g(x,v,T)):v.isMeshMatcapMaterial?(a(x,v),b(x,v)):v.isMeshDepthMaterial?a(x,v):v.isMeshDistanceMaterial?(a(x,v),M(x,v)):v.isMeshNormalMaterial?a(x,v):v.isLineBasicMaterial?(l(x,v),v.isLineDashedMaterial&&h(x,v)):v.isPointsMaterial?u(x,v,C,w):v.isSpriteMaterial?f(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function a(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,e(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,e(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,e(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===gn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,e(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===gn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,e(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,e(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,e(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);let C=t.get(v),w=C.envMap,T=C.envMapRotation;w&&(x.envMap.value=w,_s.copy(T),_s.x*=-1,_s.y*=-1,_s.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),x.envMapRotation.value.setFromMatrix4(Xy.makeRotationFromEuler(_s)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,e(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,e(v.aoMap,x.aoMapTransform))}function l(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,e(v.map,x.mapTransform))}function h(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function u(x,v,C,w){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*C,x.scale.value=w*.5,v.map&&(x.map.value=v.map,e(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,e(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function f(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,e(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,e(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function m(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function d(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function _(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,e(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,e(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function g(x,v,C){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,e(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,e(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,e(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,e(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,e(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===gn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,e(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,e(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,e(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,e(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,e(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,e(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,e(v.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,v){v.matcap&&(x.matcap.value=v.matcap)}function M(x,v){let C=t.get(v).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Yy(s,t,e,i){let r={},a={},l=[],h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function u(C,w){let T=w.program;i.uniformBlockBinding(C,T)}function f(C,w){let T=r[C.id];T===void 0&&(b(C),T=m(C),r[C.id]=T,C.addEventListener("dispose",x));let k=w.program;i.updateUBOMapping(C,k);let R=t.render.frame;a[C.id]!==R&&(_(C),a[C.id]=R)}function m(C){let w=d();C.__bindingPointIndex=w;let T=s.createBuffer(),k=C.__size,R=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,k,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,T),T}function d(){for(let C=0;C<h;C++)if(l.indexOf(C)===-1)return l.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){let w=r[C.id],T=C.uniforms,k=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let R=0,D=T.length;R<D;R++){let O=Array.isArray(T[R])?T[R]:[T[R]];for(let A=0,E=O.length;A<E;A++){let B=O[A];if(g(B,R,A,k)===!0){let z=B.__offset,G=Array.isArray(B.value)?B.value:[B.value],$=0;for(let tt=0;tt<G.length;tt++){let W=G[tt],ht=M(W);typeof W=="number"||typeof W=="boolean"?(B.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,z+$,B.__data)):W.isMatrix3?(B.__data[0]=W.elements[0],B.__data[1]=W.elements[1],B.__data[2]=W.elements[2],B.__data[3]=0,B.__data[4]=W.elements[3],B.__data[5]=W.elements[4],B.__data[6]=W.elements[5],B.__data[7]=0,B.__data[8]=W.elements[6],B.__data[9]=W.elements[7],B.__data[10]=W.elements[8],B.__data[11]=0):(W.toArray(B.__data,$),$+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(C,w,T,k){let R=C.value,D=w+"_"+T;if(k[D]===void 0)return typeof R=="number"||typeof R=="boolean"?k[D]=R:k[D]=R.clone(),!0;{let O=k[D];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return k[D]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function b(C){let w=C.uniforms,T=0,k=16;for(let D=0,O=w.length;D<O;D++){let A=Array.isArray(w[D])?w[D]:[w[D]];for(let E=0,B=A.length;E<B;E++){let z=A[E],G=Array.isArray(z.value)?z.value:[z.value];for(let $=0,tt=G.length;$<tt;$++){let W=G[$],ht=M(W),V=T%k,lt=V%ht.boundary,st=V+lt;T+=lt,st!==0&&k-st<ht.storage&&(T+=k-st),z.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=T,T+=ht.storage}}}let R=T%k;return R>0&&(T+=k-R),C.__size=T,C.__cache={},this}function M(C){let w={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(w.boundary=4,w.storage=4):C.isVector2?(w.boundary=8,w.storage=8):C.isVector3||C.isColor?(w.boundary=16,w.storage=12):C.isVector4?(w.boundary=16,w.storage=16):C.isMatrix3?(w.boundary=48,w.storage=48):C.isMatrix4?(w.boundary=64,w.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),w}function x(C){let w=C.target;w.removeEventListener("dispose",x);let T=l.indexOf(w.__bindingPointIndex);l.splice(T,1),s.deleteBuffer(r[w.id]),delete r[w.id],delete a[w.id]}function v(){for(let C in r)s.deleteBuffer(r[C]);l=[],r={},a={}}return{bind:u,update:f,dispose:v}}var Ga=class{constructor(t={}){let{canvas:e=Qg(),context:i=null,depth:r=!0,stencil:a=!1,alpha:l=!1,antialias:h=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=l;let b=new Uint32Array(4),M=new Int32Array(4),x=null,v=null,C=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=es,this.toneMappingExposure=1;let T=this,k=!1,R=0,D=0,O=null,A=-1,E=null,B=new Ne,z=new Ne,G=null,$=new fe(0),tt=0,W=e.width,ht=e.height,V=1,lt=null,st=null,ot=new Ne(0,0,W,ht),yt=new Ne(0,0,W,ht),bt=!1,K=new ro,pt=!1,Mt=!1,gt=new Fe,Xt=new Fe,xt=new H,rt=new Ne,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function ae(){return O===null?V:1}let Z=i;function Pe(N,q){return e.getContext(N,q)}try{let N={alpha:!0,depth:r,stencil:a,antialias:h,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",At,!1),Z===null){let q="webgl2";if(Z=Pe(q,N),Z===null)throw Pe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let ne,Ot,kt,Se,Yt,U,I,Q,ut,mt,ct,Gt,Et,Dt,me,_t,Nt,Kt,Qt,Lt,pe,ie,Ce,X;function Tt(){ne=new hx(Z),ne.init(),ie=new Vy(Z,ne),Ot=new sx(Z,ne,t,ie),kt=new Fy(Z,ne),Ot.reverseDepthBuffer&&_&&kt.buffers.depth.setReversed(!0),Se=new fx(Z),Yt=new Ey,U=new Hy(Z,ne,kt,Yt,Ot,ie,Se),I=new ox(T),Q=new cx(T),ut=new y_(Z),Ce=new nx(Z,ut),mt=new ux(Z,ut,Se,Ce),ct=new mx(Z,mt,ut,Se),Qt=new px(Z,Ot,U),_t=new rx(Yt),Gt=new Ty(T,I,Q,ne,Ot,Ce,_t),Et=new qy(T,Yt),Dt=new Py,me=new Ny(ne),Kt=new ex(T,I,Q,kt,ct,g,u),Nt=new ky(T,ct,Ot),X=new Yy(Z,Se,Ot,kt),Lt=new ix(Z,ne,Se),pe=new dx(Z,ne,Se),Se.programs=Gt.programs,T.capabilities=Ot,T.extensions=ne,T.properties=Yt,T.renderLists=Dt,T.shadowMap=Nt,T.state=kt,T.info=Se}Tt();let at=new Wh(T,Z);this.xr=at,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let N=ne.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=ne.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(N){N!==void 0&&(V=N,this.setSize(W,ht,!1))},this.getSize=function(N){return N.set(W,ht)},this.setSize=function(N,q,nt=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=N,ht=q,e.width=Math.floor(N*V),e.height=Math.floor(q*V),nt===!0&&(e.style.width=N+"px",e.style.height=q+"px"),this.setViewport(0,0,N,q)},this.getDrawingBufferSize=function(N){return N.set(W*V,ht*V).floor()},this.setDrawingBufferSize=function(N,q,nt){W=N,ht=q,V=nt,e.width=Math.floor(N*nt),e.height=Math.floor(q*nt),this.setViewport(0,0,N,q)},this.getCurrentViewport=function(N){return N.copy(B)},this.getViewport=function(N){return N.copy(ot)},this.setViewport=function(N,q,nt,et){N.isVector4?ot.set(N.x,N.y,N.z,N.w):ot.set(N,q,nt,et),kt.viewport(B.copy(ot).multiplyScalar(V).round())},this.getScissor=function(N){return N.copy(yt)},this.setScissor=function(N,q,nt,et){N.isVector4?yt.set(N.x,N.y,N.z,N.w):yt.set(N,q,nt,et),kt.scissor(z.copy(yt).multiplyScalar(V).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(N){kt.setScissorTest(bt=N)},this.setOpaqueSort=function(N){lt=N},this.setTransparentSort=function(N){st=N},this.getClearColor=function(N){return N.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(N=!0,q=!0,nt=!0){let et=0;if(N){let Y=!1;if(O!==null){let vt=O.texture.format;Y=vt===cu||vt===lu||vt===au}if(Y){let vt=O.texture.type,Pt=vt===Hi||vt===Ss||vt===io||vt===gr||vt===ru||vt===ou,zt=Kt.getClearColor(),Ht=Kt.getClearAlpha(),jt=zt.r,te=zt.g,Ft=zt.b;Pt?(b[0]=jt,b[1]=te,b[2]=Ft,b[3]=Ht,Z.clearBufferuiv(Z.COLOR,0,b)):(M[0]=jt,M[1]=te,M[2]=Ft,M[3]=Ht,Z.clearBufferiv(Z.COLOR,0,M))}else et|=Z.COLOR_BUFFER_BIT}q&&(et|=Z.DEPTH_BUFFER_BIT),nt&&(et|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",At,!1),Dt.dispose(),me.dispose(),Yt.dispose(),I.dispose(),Q.dispose(),ct.dispose(),Ce.dispose(),X.dispose(),Gt.dispose(),at.dispose(),at.removeEventListener("sessionstart",go),at.removeEventListener("sessionend",An),Ut.stop()};function dt(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;let N=Se.autoReset,q=Nt.enabled,nt=Nt.autoUpdate,et=Nt.needsUpdate,Y=Nt.type;Tt(),Se.autoReset=N,Nt.enabled=q,Nt.autoUpdate=nt,Nt.needsUpdate=et,Nt.type=Y}function At(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ee(N){let q=N.target;q.removeEventListener("dispose",ee),He(q)}function He(N){qe(N),Yt.remove(N)}function qe(N){let q=Yt.get(N).programs;q!==void 0&&(q.forEach(function(nt){Gt.releaseProgram(nt)}),N.isShaderMaterial&&Gt.releaseShaderCache(N))}this.renderBufferDirect=function(N,q,nt,et,Y,vt){q===null&&(q=It);let Pt=Y.isMesh&&Y.matrixWorld.determinant()<0,zt=Ll(N,q,nt,et,Y);kt.setMaterial(et,Pt);let Ht=nt.index,jt=1;if(et.wireframe===!0){if(Ht=mt.getWireframeAttribute(nt),Ht===void 0)return;jt=2}let te=nt.drawRange,Ft=nt.attributes.position,ge=te.start*jt,Te=(te.start+te.count)*jt;vt!==null&&(ge=Math.max(ge,vt.start*jt),Te=Math.min(Te,(vt.start+vt.count)*jt)),Ht!==null?(ge=Math.max(ge,0),Te=Math.min(Te,Ht.count)):Ft!=null&&(ge=Math.max(ge,0),Te=Math.min(Te,Ft.count));let Wt=Te-ge;if(Wt<0||Wt===1/0)return;Ce.setup(Y,et,zt,nt,Ht);let he,_e=Lt;if(Ht!==null&&(he=ut.get(Ht),_e=pe,_e.setIndex(he)),Y.isMesh)et.wireframe===!0?(kt.setLineWidth(et.wireframeLinewidth*ae()),_e.setMode(Z.LINES)):_e.setMode(Z.TRIANGLES);else if(Y.isLine){let Bt=et.linewidth;Bt===void 0&&(Bt=1),kt.setLineWidth(Bt*ae()),Y.isLineSegments?_e.setMode(Z.LINES):Y.isLineLoop?_e.setMode(Z.LINE_LOOP):_e.setMode(Z.LINE_STRIP)}else Y.isPoints?_e.setMode(Z.POINTS):Y.isSprite&&_e.setMode(Z.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)_e.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))_e.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Bt=Y._multiDrawStarts,un=Y._multiDrawCounts,xe=Y._multiDrawCount,$t=Ht?ut.get(Ht).bytesPerElement:1,Ie=Yt.get(et).currentProgram.getUniforms();for(let rn=0;rn<xe;rn++)Ie.setValue(Z,"_gl_DrawID",rn),_e.render(Bt[rn]/$t,un[rn])}else if(Y.isInstancedMesh)_e.renderInstances(ge,Wt,Y.count);else if(nt.isInstancedBufferGeometry){let Bt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,un=Math.min(nt.instanceCount,Bt);_e.renderInstances(ge,Wt,un)}else _e.render(ge,Wt)};function Ae(N,q,nt){N.transparent===!0&&N.side===Vn&&N.forceSinglePass===!1?(N.side=gn,N.needsUpdate=!0,os(N,q,nt),N.side=ns,N.needsUpdate=!0,os(N,q,nt),N.side=Vn):os(N,q,nt)}this.compile=function(N,q,nt=null){nt===null&&(nt=N),v=me.get(nt),v.init(q),w.push(v),nt.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),N!==nt&&N.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights();let et=new Set;return N.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let vt=Y.material;if(vt)if(Array.isArray(vt))for(let Pt=0;Pt<vt.length;Pt++){let zt=vt[Pt];Ae(zt,nt,Y),et.add(zt)}else Ae(vt,nt,Y),et.add(vt)}),w.pop(),v=null,et},this.compileAsync=function(N,q,nt=null){let et=this.compile(N,q,nt);return new Promise(Y=>{function vt(){if(et.forEach(function(Pt){Yt.get(Pt).currentProgram.isReady()&&et.delete(Pt)}),et.size===0){Y(N);return}setTimeout(vt,10)}ne.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let En=null;function $n(N){En&&En(N)}function go(){Ut.stop()}function An(){Ut.start()}let Ut=new ap;Ut.setAnimationLoop($n),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(N){En=N,at.setAnimationLoop(N),N===null?Ut.stop():Ut.start()},at.addEventListener("sessionstart",go),at.addEventListener("sessionend",An),this.render=function(N,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(q),q=at.getCamera()),N.isScene===!0&&N.onBeforeRender(T,N,q,O),v=me.get(N,w.length),v.init(q),w.push(v),Xt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),K.setFromProjectionMatrix(Xt),Mt=this.localClippingEnabled,pt=_t.init(this.clippingPlanes,Mt),x=Dt.get(N,C.length),x.init(),C.push(x),at.enabled===!0&&at.isPresenting===!0){let vt=T.xr.getDepthSensingMesh();vt!==null&&Ns(vt,q,-1/0,T.sortObjects)}Ns(N,q,0,T.sortObjects),x.finish(),T.sortObjects===!0&&x.sort(lt,st),qt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,qt&&Kt.addToRenderList(x,N),this.info.render.frame++,pt===!0&&_t.beginShadows();let nt=v.state.shadowsArray;Nt.render(nt,N,q),pt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();let et=x.opaque,Y=x.transmissive;if(v.setupLights(),q.isArrayCamera){let vt=q.cameras;if(Y.length>0)for(let Pt=0,zt=vt.length;Pt<zt;Pt++){let Ht=vt[Pt];Rr(et,Y,N,Ht)}qt&&Kt.render(N);for(let Pt=0,zt=vt.length;Pt<zt;Pt++){let Ht=vt[Pt];Cr(x,N,Ht,Ht.viewport)}}else Y.length>0&&Rr(et,Y,N,q),qt&&Kt.render(N),Cr(x,N,q);O!==null&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O)),N.isScene===!0&&N.onAfterRender(T,N,q),Ce.resetDefaultState(),A=-1,E=null,w.pop(),w.length>0?(v=w[w.length-1],pt===!0&&_t.setGlobalState(T.clippingPlanes,v.state.camera)):v=null,C.pop(),C.length>0?x=C[C.length-1]:x=null};function Ns(N,q,nt,et){if(N.visible===!1)return;if(N.layers.test(q.layers)){if(N.isGroup)nt=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(q);else if(N.isLight)v.pushLight(N),N.castShadow&&v.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||K.intersectsSprite(N)){et&&rt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Xt);let Pt=ct.update(N),zt=N.material;zt.visible&&x.push(N,Pt,zt,nt,rt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||K.intersectsObject(N))){let Pt=ct.update(N),zt=N.material;if(et&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),rt.copy(N.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),rt.copy(Pt.boundingSphere.center)),rt.applyMatrix4(N.matrixWorld).applyMatrix4(Xt)),Array.isArray(zt)){let Ht=Pt.groups;for(let jt=0,te=Ht.length;jt<te;jt++){let Ft=Ht[jt],ge=zt[Ft.materialIndex];ge&&ge.visible&&x.push(N,Pt,ge,nt,rt.z,Ft)}}else zt.visible&&x.push(N,Pt,zt,nt,rt.z,null)}}let vt=N.children;for(let Pt=0,zt=vt.length;Pt<zt;Pt++)Ns(vt[Pt],q,nt,et)}function Cr(N,q,nt,et){let Y=N.opaque,vt=N.transmissive,Pt=N.transparent;v.setupLightsView(nt),pt===!0&&_t.setGlobalState(T.clippingPlanes,nt),et&&kt.viewport(B.copy(et)),Y.length>0&&rs(Y,q,nt),vt.length>0&&rs(vt,q,nt),Pt.length>0&&rs(Pt,q,nt),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Rr(N,q,nt,et){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[et.id]===void 0&&(v.state.transmissionRenderTarget[et.id]=new Gi(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?fo:Hi,minFilter:Ms,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));let vt=v.state.transmissionRenderTarget[et.id],Pt=et.viewport||B;vt.setSize(Pt.z,Pt.w);let zt=T.getRenderTarget();T.setRenderTarget(vt),T.getClearColor($),tt=T.getClearAlpha(),tt<1&&T.setClearColor(16777215,.5),T.clear(),qt&&Kt.render(nt);let Ht=T.toneMapping;T.toneMapping=es;let jt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),v.setupLightsView(et),pt===!0&&_t.setGlobalState(T.clippingPlanes,et),rs(N,nt,et),U.updateMultisampleRenderTarget(vt),U.updateRenderTargetMipmap(vt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Ft=0,ge=q.length;Ft<ge;Ft++){let Te=q[Ft],Wt=Te.object,he=Te.geometry,_e=Te.material,Bt=Te.group;if(_e.side===Vn&&Wt.layers.test(et.layers)){let un=_e.side;_e.side=gn,_e.needsUpdate=!0,Os(Wt,nt,et,he,_e,Bt),_e.side=un,_e.needsUpdate=!0,te=!0}}te===!0&&(U.updateMultisampleRenderTarget(vt),U.updateRenderTargetMipmap(vt))}T.setRenderTarget(zt),T.setClearColor($,tt),jt!==void 0&&(et.viewport=jt),T.toneMapping=Ht}function rs(N,q,nt){let et=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,vt=N.length;Y<vt;Y++){let Pt=N[Y],zt=Pt.object,Ht=Pt.geometry,jt=et===null?Pt.material:et,te=Pt.group;zt.layers.test(nt.layers)&&Os(zt,q,nt,Ht,jt,te)}}function Os(N,q,nt,et,Y,vt){N.onBeforeRender(T,q,nt,et,Y,vt),N.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),Y.onBeforeRender(T,q,nt,et,N,vt),Y.transparent===!0&&Y.side===Vn&&Y.forceSinglePass===!1?(Y.side=gn,Y.needsUpdate=!0,T.renderBufferDirect(nt,q,et,Y,N,vt),Y.side=ns,Y.needsUpdate=!0,T.renderBufferDirect(nt,q,et,Y,N,vt),Y.side=Vn):T.renderBufferDirect(nt,q,et,Y,N,vt),N.onAfterRender(T,q,nt,et,Y,vt)}function os(N,q,nt){q.isScene!==!0&&(q=It);let et=Yt.get(N),Y=v.state.lights,vt=v.state.shadowsArray,Pt=Y.state.version,zt=Gt.getParameters(N,Y.state,vt,q,nt),Ht=Gt.getProgramCacheKey(zt),jt=et.programs;et.environment=N.isMeshStandardMaterial?q.environment:null,et.fog=q.fog,et.envMap=(N.isMeshStandardMaterial?Q:I).get(N.envMap||et.environment),et.envMapRotation=et.environment!==null&&N.envMap===null?q.environmentRotation:N.envMapRotation,jt===void 0&&(N.addEventListener("dispose",ee),jt=new Map,et.programs=jt);let te=jt.get(Ht);if(te!==void 0){if(et.currentProgram===te&&et.lightsStateVersion===Pt)return Lr(N,zt),te}else zt.uniforms=Gt.getUniforms(N),N.onBeforeCompile(zt,T),te=Gt.acquireProgram(zt,Ht),jt.set(Ht,te),et.uniforms=zt.uniforms;let Ft=et.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ft.clippingPlanes=_t.uniform),Lr(N,zt),et.needsLights=Dl(N),et.lightsStateVersion=Pt,et.needsLights&&(Ft.ambientLightColor.value=Y.state.ambient,Ft.lightProbe.value=Y.state.probe,Ft.directionalLights.value=Y.state.directional,Ft.directionalLightShadows.value=Y.state.directionalShadow,Ft.spotLights.value=Y.state.spot,Ft.spotLightShadows.value=Y.state.spotShadow,Ft.rectAreaLights.value=Y.state.rectArea,Ft.ltc_1.value=Y.state.rectAreaLTC1,Ft.ltc_2.value=Y.state.rectAreaLTC2,Ft.pointLights.value=Y.state.point,Ft.pointLightShadows.value=Y.state.pointShadow,Ft.hemisphereLights.value=Y.state.hemi,Ft.directionalShadowMap.value=Y.state.directionalShadowMap,Ft.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ft.spotShadowMap.value=Y.state.spotShadowMap,Ft.spotLightMatrix.value=Y.state.spotLightMatrix,Ft.spotLightMap.value=Y.state.spotLightMap,Ft.pointShadowMap.value=Y.state.pointShadowMap,Ft.pointShadowMatrix.value=Y.state.pointShadowMatrix),et.currentProgram=te,et.uniformsList=null,te}function Mi(N){if(N.uniformsList===null){let q=N.currentProgram.getUniforms();N.uniformsList=dr.seqWithValue(q.seq,N.uniforms)}return N.uniformsList}function Lr(N,q){let nt=Yt.get(N);nt.outputColorSpace=q.outputColorSpace,nt.batching=q.batching,nt.batchingColor=q.batchingColor,nt.instancing=q.instancing,nt.instancingColor=q.instancingColor,nt.instancingMorph=q.instancingMorph,nt.skinning=q.skinning,nt.morphTargets=q.morphTargets,nt.morphNormals=q.morphNormals,nt.morphColors=q.morphColors,nt.morphTargetsCount=q.morphTargetsCount,nt.numClippingPlanes=q.numClippingPlanes,nt.numIntersection=q.numClipIntersection,nt.vertexAlphas=q.vertexAlphas,nt.vertexTangents=q.vertexTangents,nt.toneMapping=q.toneMapping}function Ll(N,q,nt,et,Y){q.isScene!==!0&&(q=It),U.resetTextureUnits();let vt=q.fog,Pt=et.isMeshStandardMaterial?q.environment:null,zt=O===null?T.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:br,Ht=(et.isMeshStandardMaterial?Q:I).get(et.envMap||Pt),jt=et.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,te=!!nt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Ft=!!nt.morphAttributes.position,ge=!!nt.morphAttributes.normal,Te=!!nt.morphAttributes.color,Wt=es;et.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Wt=T.toneMapping);let he=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,_e=he!==void 0?he.length:0,Bt=Yt.get(et),un=v.state.lights;if(pt===!0&&(Mt===!0||N!==E)){let Ye=N===E&&et.id===A;_t.setState(et,N,Ye)}let xe=!1;et.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==un.state.version||Bt.outputColorSpace!==zt||Y.isBatchedMesh&&Bt.batching===!1||!Y.isBatchedMesh&&Bt.batching===!0||Y.isBatchedMesh&&Bt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Bt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Bt.instancing===!1||!Y.isInstancedMesh&&Bt.instancing===!0||Y.isSkinnedMesh&&Bt.skinning===!1||!Y.isSkinnedMesh&&Bt.skinning===!0||Y.isInstancedMesh&&Bt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Bt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Bt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Bt.instancingMorph===!1&&Y.morphTexture!==null||Bt.envMap!==Ht||et.fog===!0&&Bt.fog!==vt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==_t.numPlanes||Bt.numIntersection!==_t.numIntersection)||Bt.vertexAlphas!==jt||Bt.vertexTangents!==te||Bt.morphTargets!==Ft||Bt.morphNormals!==ge||Bt.morphColors!==Te||Bt.toneMapping!==Wt||Bt.morphTargetsCount!==_e)&&(xe=!0):(xe=!0,Bt.__version=et.version);let $t=Bt.currentProgram;xe===!0&&($t=os(et,q,Y));let Ie=!1,rn=!1,ui=!1,ue=$t.getUniforms(),kn=Bt.uniforms;if(kt.useProgram($t.program)&&(Ie=!0,rn=!0,ui=!0),et.id!==A&&(A=et.id,rn=!0),Ie||E!==N){kt.buffers.depth.getReversed()?(gt.copy(N.projectionMatrix),e_(gt),n_(gt),ue.setValue(Z,"projectionMatrix",gt)):ue.setValue(Z,"projectionMatrix",N.projectionMatrix),ue.setValue(Z,"viewMatrix",N.matrixWorldInverse);let Re=ue.map.cameraPosition;Re!==void 0&&Re.setValue(Z,xt.setFromMatrixPosition(N.matrixWorld)),Ot.logarithmicDepthBuffer&&ue.setValue(Z,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&ue.setValue(Z,"isOrthographic",N.isOrthographicCamera===!0),E!==N&&(E=N,rn=!0,ui=!0)}if(Y.isSkinnedMesh){ue.setOptional(Z,Y,"bindMatrix"),ue.setOptional(Z,Y,"bindMatrixInverse");let Ye=Y.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),ue.setValue(Z,"boneTexture",Ye.boneTexture,U))}Y.isBatchedMesh&&(ue.setOptional(Z,Y,"batchingTexture"),ue.setValue(Z,"batchingTexture",Y._matricesTexture,U),ue.setOptional(Z,Y,"batchingIdTexture"),ue.setValue(Z,"batchingIdTexture",Y._indirectTexture,U),ue.setOptional(Z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ue.setValue(Z,"batchingColorTexture",Y._colorsTexture,U));let di=nt.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&Qt.update(Y,nt,$t),(rn||Bt.receiveShadow!==Y.receiveShadow)&&(Bt.receiveShadow=Y.receiveShadow,ue.setValue(Z,"receiveShadow",Y.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(kn.envMap.value=Ht,kn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&q.environment!==null&&(kn.envMapIntensity.value=q.environmentIntensity),rn&&(ue.setValue(Z,"toneMappingExposure",T.toneMappingExposure),Bt.needsLights&&Il(kn,ui),vt&&et.fog===!0&&Et.refreshFogUniforms(kn,vt),Et.refreshMaterialUniforms(kn,et,V,ht,v.state.transmissionRenderTarget[N.id]),dr.upload(Z,Mi(Bt),kn,U)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(dr.upload(Z,Mi(Bt),kn,U),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&ue.setValue(Z,"center",Y.center),ue.setValue(Z,"modelViewMatrix",Y.modelViewMatrix),ue.setValue(Z,"normalMatrix",Y.normalMatrix),ue.setValue(Z,"modelMatrix",Y.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){let Ye=et.uniformsGroups;for(let Re=0,dn=Ye.length;Re<dn;Re++){let Wi=Ye[Re];X.update(Wi,$t),X.bind(Wi,$t)}}return $t}function Il(N,q){N.ambientLightColor.needsUpdate=q,N.lightProbe.needsUpdate=q,N.directionalLights.needsUpdate=q,N.directionalLightShadows.needsUpdate=q,N.pointLights.needsUpdate=q,N.pointLightShadows.needsUpdate=q,N.spotLights.needsUpdate=q,N.spotLightShadows.needsUpdate=q,N.rectAreaLights.needsUpdate=q,N.hemisphereLights.needsUpdate=q}function Dl(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(N,q,nt){Yt.get(N.texture).__webglTexture=q,Yt.get(N.depthTexture).__webglTexture=nt;let et=Yt.get(N);et.__hasExternalTextures=!0,et.__autoAllocateDepthBuffer=nt===void 0,et.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,q){let nt=Yt.get(N);nt.__webglFramebuffer=q,nt.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(N,q=0,nt=0){O=N,R=q,D=nt;let et=!0,Y=null,vt=!1,Pt=!1;if(N){let Ht=Yt.get(N);if(Ht.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(Z.FRAMEBUFFER,null),et=!1;else if(Ht.__webglFramebuffer===void 0)U.setupRenderTarget(N);else if(Ht.__hasExternalTextures)U.rebindTextures(N,Yt.get(N.texture).__webglTexture,Yt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let Ft=N.depthTexture;if(Ht.__boundDepthTexture!==Ft){if(Ft!==null&&Yt.has(Ft)&&(N.width!==Ft.image.width||N.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(N)}}let jt=N.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Pt=!0);let te=Yt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(te[q])?Y=te[q][nt]:Y=te[q],vt=!0):N.samples>0&&U.useMultisampledRTT(N)===!1?Y=Yt.get(N).__webglMultisampledFramebuffer:Array.isArray(te)?Y=te[nt]:Y=te,B.copy(N.viewport),z.copy(N.scissor),G=N.scissorTest}else B.copy(ot).multiplyScalar(V).floor(),z.copy(yt).multiplyScalar(V).floor(),G=bt;if(kt.bindFramebuffer(Z.FRAMEBUFFER,Y)&&et&&kt.drawBuffers(N,Y),kt.viewport(B),kt.scissor(z),kt.setScissorTest(G),vt){let Ht=Yt.get(N.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ht.__webglTexture,nt)}else if(Pt){let Ht=Yt.get(N.texture),jt=q||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ht.__webglTexture,nt||0,jt)}A=-1},this.readRenderTargetPixels=function(N,q,nt,et,Y,vt,Pt){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Yt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Pt!==void 0&&(zt=zt[Pt]),zt){kt.bindFramebuffer(Z.FRAMEBUFFER,zt);try{let Ht=N.texture,jt=Ht.format,te=Ht.type;if(!Ot.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=N.width-et&&nt>=0&&nt<=N.height-Y&&Z.readPixels(q,nt,et,Y,ie.convert(jt),ie.convert(te),vt)}finally{let Ht=O!==null?Yt.get(O).__webglFramebuffer:null;kt.bindFramebuffer(Z.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(N,q,nt,et,Y,vt,Pt){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Yt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Pt!==void 0&&(zt=zt[Pt]),zt){let Ht=N.texture,jt=Ht.format,te=Ht.type;if(!Ot.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=N.width-et&&nt>=0&&nt<=N.height-Y){kt.bindFramebuffer(Z.FRAMEBUFFER,zt);let Ft=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ft),Z.bufferData(Z.PIXEL_PACK_BUFFER,vt.byteLength,Z.STREAM_READ),Z.readPixels(q,nt,et,Y,ie.convert(jt),ie.convert(te),0);let ge=O!==null?Yt.get(O).__webglFramebuffer:null;kt.bindFramebuffer(Z.FRAMEBUFFER,ge);let Te=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await t_(Z,Te,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ft),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,vt),Z.deleteBuffer(Ft),Z.deleteSync(Te),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,q=null,nt=0){N.isTexture!==!0&&(Qr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,N=arguments[1]);let et=Math.pow(2,-nt),Y=Math.floor(N.image.width*et),vt=Math.floor(N.image.height*et),Pt=q!==null?q.x:0,zt=q!==null?q.y:0;U.setTexture2D(N,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,nt,0,0,Pt,zt,Y,vt),kt.unbindTexture()},this.copyTextureToTexture=function(N,q,nt=null,et=null,Y=0){N.isTexture!==!0&&(Qr("WebGLRenderer: copyTextureToTexture function signature has changed."),et=arguments[0]||null,N=arguments[1],q=arguments[2],Y=arguments[3]||0,nt=null);let vt,Pt,zt,Ht,jt,te,Ft,ge,Te,Wt=N.isCompressedTexture?N.mipmaps[Y]:N.image;nt!==null?(vt=nt.max.x-nt.min.x,Pt=nt.max.y-nt.min.y,zt=nt.isBox3?nt.max.z-nt.min.z:1,Ht=nt.min.x,jt=nt.min.y,te=nt.isBox3?nt.min.z:0):(vt=Wt.width,Pt=Wt.height,zt=Wt.depth||1,Ht=0,jt=0,te=0),et!==null?(Ft=et.x,ge=et.y,Te=et.z):(Ft=0,ge=0,Te=0);let he=ie.convert(q.format),_e=ie.convert(q.type),Bt;q.isData3DTexture?(U.setTexture3D(q,0),Bt=Z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(U.setTexture2DArray(q,0),Bt=Z.TEXTURE_2D_ARRAY):(U.setTexture2D(q,0),Bt=Z.TEXTURE_2D),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,q.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,q.unpackAlignment);let un=Z.getParameter(Z.UNPACK_ROW_LENGTH),xe=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),$t=Z.getParameter(Z.UNPACK_SKIP_PIXELS),Ie=Z.getParameter(Z.UNPACK_SKIP_ROWS),rn=Z.getParameter(Z.UNPACK_SKIP_IMAGES);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Wt.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Wt.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Ht),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,jt),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,te);let ui=N.isDataArrayTexture||N.isData3DTexture,ue=q.isDataArrayTexture||q.isData3DTexture;if(N.isRenderTargetTexture||N.isDepthTexture){let kn=Yt.get(N),di=Yt.get(q),Ye=Yt.get(kn.__renderTarget),Re=Yt.get(di.__renderTarget);kt.bindFramebuffer(Z.READ_FRAMEBUFFER,Ye.__webglFramebuffer),kt.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let dn=0;dn<zt;dn++)ui&&Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Yt.get(N).__webglTexture,Y,te+dn),N.isDepthTexture?(ue&&Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Yt.get(q).__webglTexture,Y,Te+dn),Z.blitFramebuffer(Ht,jt,vt,Pt,Ft,ge,vt,Pt,Z.DEPTH_BUFFER_BIT,Z.NEAREST)):ue?Z.copyTexSubImage3D(Bt,Y,Ft,ge,Te+dn,Ht,jt,vt,Pt):Z.copyTexSubImage2D(Bt,Y,Ft,ge,Te+dn,Ht,jt,vt,Pt);kt.bindFramebuffer(Z.READ_FRAMEBUFFER,null),kt.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else ue?N.isDataTexture||N.isData3DTexture?Z.texSubImage3D(Bt,Y,Ft,ge,Te,vt,Pt,zt,he,_e,Wt.data):q.isCompressedArrayTexture?Z.compressedTexSubImage3D(Bt,Y,Ft,ge,Te,vt,Pt,zt,he,Wt.data):Z.texSubImage3D(Bt,Y,Ft,ge,Te,vt,Pt,zt,he,_e,Wt):N.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Y,Ft,ge,vt,Pt,he,_e,Wt.data):N.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Y,Ft,ge,Wt.width,Wt.height,he,Wt.data):Z.texSubImage2D(Z.TEXTURE_2D,Y,Ft,ge,vt,Pt,he,_e,Wt);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,un),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,xe),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,$t),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,Ie),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,rn),Y===0&&q.generateMipmaps&&Z.generateMipmap(Bt),kt.unbindTexture()},this.copyTextureToTexture3D=function(N,q,nt=null,et=null,Y=0){return N.isTexture!==!0&&(Qr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),nt=arguments[0]||null,et=arguments[1]||null,N=arguments[2],q=arguments[3],Y=arguments[4]||0),Qr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,q,nt,et,Y)},this.initRenderTarget=function(N){Yt.get(N).__webglFramebuffer===void 0&&U.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?U.setTextureCube(N,0):N.isData3DTexture?U.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?U.setTexture2DArray(N,0):U.setTexture2D(N,0),kt.unbindTexture()},this.resetState=function(){R=0,D=0,O=null,kt.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=we._getDrawingBufferColorSpace(t),e.unpackColorSpace=we._getUnpackColorSpace()}};var Wa=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Za=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ph,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,a=this.stride;r<a;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},xn=new H,Yn=class s{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix4(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xn.fromBufferAttribute(this,e),xn.applyNormalMatrix(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xn.fromBufferAttribute(this,e),xn.transformDirection(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ni(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Le(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ni(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ni(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ni(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ni(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),r=Le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),r=Le(r,this.array),a=Le(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[r+a])}return new On(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},oo=class extends vi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ir,$r=new H,sr=new H,rr=new H,or=new Zt,Kr=new Zt,dp=new Fe,da=new H,Jr=new H,fa=new H,Rf=new Zt,kc=new Zt,Lf=new Zt,Xa=class extends sn{constructor(t=new oo){if(super(),this.isSprite=!0,this.type="Sprite",ir===void 0){ir=new We;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Za(e,5);ir.setIndex([0,1,2,0,2,3]),ir.setAttribute("position",new Yn(i,3,0,!1)),ir.setAttribute("uv",new Yn(i,2,3,!1))}this.geometry=ir,this.material=t,this.center=new Zt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),sr.setFromMatrixScale(this.matrixWorld),dp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),rr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&sr.multiplyScalar(-rr.z);let i=this.material.rotation,r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));let l=this.center;pa(da.set(-.5,-.5,0),rr,l,sr,r,a),pa(Jr.set(.5,-.5,0),rr,l,sr,r,a),pa(fa.set(.5,.5,0),rr,l,sr,r,a),Rf.set(0,0),kc.set(1,0),Lf.set(1,1);let h=t.ray.intersectTriangle(da,Jr,fa,!1,$r);if(h===null&&(pa(Jr.set(-.5,.5,0),rr,l,sr,r,a),kc.set(0,1),h=t.ray.intersectTriangle(da,fa,Jr,!1,$r),h===null))return;let u=t.ray.origin.distanceTo($r);u<t.near||u>t.far||e.push({distance:u,point:$r.clone(),uv:Oi.getInterpolation($r,da,Jr,fa,Rf,kc,Lf,new Zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function pa(s,t,e,i,r,a){or.subVectors(s,e).addScalar(.5).multiply(i),r!==void 0?(Kr.x=a*or.x-r*or.y,Kr.y=r*or.x+a*or.y):Kr.copy(or),s.copy(t),s.x+=Kr.x,s.y+=Kr.y,s.applyMatrix4(dp)}var ai=class extends vi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},qa=new H,Ya=new H,If=new Fe,jr=new ws,ma=new oi,Bc=new H,Df=new H,xr=class extends sn{constructor(t=new We,e=new ai){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,a=e.count;r<a;r++)qa.fromBufferAttribute(e,r-1),Ya.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=qa.distanceTo(Ya);t.setAttribute("lineDistance",new ve(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,r=this.matrixWorld,a=t.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(r),ma.radius+=a,t.ray.intersectsSphere(ma)===!1)return;If.copy(r).invert(),jr.copy(t.ray).applyMatrix4(If);let h=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=h*h,f=this.isLineSegments?2:1,m=i.index,_=i.attributes.position;if(m!==null){let g=Math.max(0,l.start),b=Math.min(m.count,l.start+l.count);for(let M=g,x=b-1;M<x;M+=f){let v=m.getX(M),C=m.getX(M+1),w=ga(this,t,jr,u,v,C);w&&e.push(w)}if(this.isLineLoop){let M=m.getX(b-1),x=m.getX(g),v=ga(this,t,jr,u,M,x);v&&e.push(v)}}else{let g=Math.max(0,l.start),b=Math.min(_.count,l.start+l.count);for(let M=g,x=b-1;M<x;M+=f){let v=ga(this,t,jr,u,M,M+1);v&&e.push(v)}if(this.isLineLoop){let M=ga(this,t,jr,u,b-1,g);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){let h=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}};function ga(s,t,e,i,r,a){let l=s.geometry.attributes.position;if(qa.fromBufferAttribute(l,r),Ya.fromBufferAttribute(l,a),e.distanceSqToSegment(qa,Ya,Bc,Df)>i)return;Bc.applyMatrix4(s.matrixWorld);let u=t.ray.origin.distanceTo(Bc);if(!(u<t.near||u>t.far))return{distance:u,point:Df.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}var Nf=new H,Of=new H,is=class extends xr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let r=0,a=e.count;r<a;r+=2)Nf.fromBufferAttribute(e,r),Of.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Nf.distanceTo(Of);t.setAttribute("lineDistance",new ve(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ao=class extends vi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Uf=new Fe,Zh=new ws,_a=new oi,va=new H,$a=class extends sn{constructor(t=new We,e=new ao){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,r=this.matrixWorld,a=t.params.Points.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(r),_a.radius+=a,t.ray.intersectsSphere(_a)===!1)return;Uf.copy(r).invert(),Zh.copy(t.ray).applyMatrix4(Uf);let h=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=h*h,f=i.index,d=i.attributes.position;if(f!==null){let _=Math.max(0,l.start),g=Math.min(f.count,l.start+l.count);for(let b=_,M=g;b<M;b++){let x=f.getX(b);va.fromBufferAttribute(d,x),kf(va,x,u,r,t,e,this)}}else{let _=Math.max(0,l.start),g=Math.min(d.count,l.start+l.count);for(let b=_,M=g;b<M;b++)va.fromBufferAttribute(d,b),kf(va,b,u,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){let h=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}};function kf(s,t,e,i,r,a,l){let h=Zh.distanceSqToPoint(s);if(h<e){let u=new H;Zh.closestPointToPoint(s,u),u.applyMatrix4(i);let f=r.ray.origin.distanceTo(u);if(f<r.near||f>r.far)return;a.push({distance:f,distanceToRay:Math.sqrt(h),point:u,index:t,face:null,faceIndex:null,barycoord:null,object:l})}}var Ka=class extends Un{constructor(t,e,i,r,a,l,h,u,f){super(t,e,i,r,a,l,h,u,f),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ja=class s extends We{constructor(t=[new Zt(0,-.5),new Zt(.5,0),new Zt(0,.5)],e=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:r},e=Math.floor(e),r=nn(r,0,Math.PI*2);let a=[],l=[],h=[],u=[],f=[],m=1/e,d=new H,_=new Zt,g=new H,b=new H,M=new H,x=0,v=0;for(let C=0;C<=t.length-1;C++)switch(C){case 0:x=t[C+1].x-t[C].x,v=t[C+1].y-t[C].y,g.x=v*1,g.y=-x,g.z=v*0,M.copy(g),g.normalize(),u.push(g.x,g.y,g.z);break;case t.length-1:u.push(M.x,M.y,M.z);break;default:x=t[C+1].x-t[C].x,v=t[C+1].y-t[C].y,g.x=v*1,g.y=-x,g.z=v*0,b.copy(g),g.x+=M.x,g.y+=M.y,g.z+=M.z,g.normalize(),u.push(g.x,g.y,g.z),M.copy(b)}for(let C=0;C<=e;C++){let w=i+C*m*r,T=Math.sin(w),k=Math.cos(w);for(let R=0;R<=t.length-1;R++){d.x=t[R].x*T,d.y=t[R].y,d.z=t[R].x*k,l.push(d.x,d.y,d.z),_.x=C/e,_.y=R/(t.length-1),h.push(_.x,_.y);let D=u[3*R+0]*T,O=u[3*R+1],A=u[3*R+0]*k;f.push(D,O,A)}}for(let C=0;C<e;C++)for(let w=0;w<t.length-1;w++){let T=w+C*t.length,k=T,R=T+t.length,D=T+t.length+1,O=T+1;a.push(k,R,O),a.push(D,O,R)}this.setIndex(a),this.setAttribute("position",new ve(l,3)),this.setAttribute("uv",new ve(h,2)),this.setAttribute("normal",new ve(f,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var ja=class s extends We{constructor(t=1,e=1,i=1,r=32,a=1,l=!1,h=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:h,thetaLength:u};let f=this;r=Math.floor(r),a=Math.floor(a);let m=[],d=[],_=[],g=[],b=0,M=[],x=i/2,v=0;C(),l===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(m),this.setAttribute("position",new ve(d,3)),this.setAttribute("normal",new ve(_,3)),this.setAttribute("uv",new ve(g,2));function C(){let T=new H,k=new H,R=0,D=(e-t)/i;for(let O=0;O<=a;O++){let A=[],E=O/a,B=E*(e-t)+t;for(let z=0;z<=r;z++){let G=z/r,$=G*u+h,tt=Math.sin($),W=Math.cos($);k.x=B*tt,k.y=-E*i+x,k.z=B*W,d.push(k.x,k.y,k.z),T.set(tt,D,W).normalize(),_.push(T.x,T.y,T.z),g.push(G,1-E),A.push(b++)}M.push(A)}for(let O=0;O<r;O++)for(let A=0;A<a;A++){let E=M[A][O],B=M[A+1][O],z=M[A+1][O+1],G=M[A][O+1];(t>0||A!==0)&&(m.push(E,B,G),R+=3),(e>0||A!==a-1)&&(m.push(B,z,G),R+=3)}f.addGroup(v,R,0),v+=R}function w(T){let k=b,R=new Zt,D=new H,O=0,A=T===!0?t:e,E=T===!0?1:-1;for(let z=1;z<=r;z++)d.push(0,x*E,0),_.push(0,E,0),g.push(.5,.5),b++;let B=b;for(let z=0;z<=r;z++){let $=z/r*u+h,tt=Math.cos($),W=Math.sin($);D.x=A*W,D.y=x*E,D.z=A*tt,d.push(D.x,D.y,D.z),_.push(0,E,0),R.x=tt*.5+.5,R.y=W*.5*E+.5,g.push(R.x,R.y),b++}for(let z=0;z<r;z++){let G=k+z,$=B+z;T===!0?m.push($,$+1,G):m.push($+1,$,G),O+=3}f.addGroup(v,O,T===!0?1:2),v+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qa=class s extends ja{constructor(t=1,e=1,i=32,r=1,a=!1,l=0,h=Math.PI*2){super(0,t,e,i,r,a,l,h),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:h}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var xa=new H,ya=new H,Fc=new H,ba=new Oi,lo=class extends We{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let r=Math.pow(10,4),a=Math.cos(hr*e),l=t.getIndex(),h=t.getAttribute("position"),u=l?l.count:h.count,f=[0,0,0],m=["a","b","c"],d=new Array(3),_={},g=[];for(let b=0;b<u;b+=3){l?(f[0]=l.getX(b),f[1]=l.getX(b+1),f[2]=l.getX(b+2)):(f[0]=b,f[1]=b+1,f[2]=b+2);let{a:M,b:x,c:v}=ba;if(M.fromBufferAttribute(h,f[0]),x.fromBufferAttribute(h,f[1]),v.fromBufferAttribute(h,f[2]),ba.getNormal(Fc),d[0]=`${Math.round(M.x*r)},${Math.round(M.y*r)},${Math.round(M.z*r)}`,d[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,d[2]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let C=0;C<3;C++){let w=(C+1)%3,T=d[C],k=d[w],R=ba[m[C]],D=ba[m[w]],O=`${T}_${k}`,A=`${k}_${T}`;A in _&&_[A]?(Fc.dot(_[A].normal)<=a&&(g.push(R.x,R.y,R.z),g.push(D.x,D.y,D.z)),_[A]=null):O in _||(_[O]={index0:f[C],index1:f[w],normal:Fc.clone()})}}for(let b in _)if(_[b]){let{index0:M,index1:x}=_[b];xa.fromBufferAttribute(h,M),ya.fromBufferAttribute(h,x),g.push(xa.x,xa.y,xa.z),g.push(ya.x,ya.y,ya.z)}this.setAttribute("position",new ve(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var co=class s extends We{constructor(t=1,e=32,i=16,r=0,a=Math.PI*2,l=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:a,thetaStart:l,thetaLength:h},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let u=Math.min(l+h,Math.PI),f=0,m=[],d=new H,_=new H,g=[],b=[],M=[],x=[];for(let v=0;v<=i;v++){let C=[],w=v/i,T=0;v===0&&l===0?T=.5/e:v===i&&u===Math.PI&&(T=-.5/e);for(let k=0;k<=e;k++){let R=k/e;d.x=-t*Math.cos(r+R*a)*Math.sin(l+w*h),d.y=t*Math.cos(l+w*h),d.z=t*Math.sin(r+R*a)*Math.sin(l+w*h),b.push(d.x,d.y,d.z),_.copy(d).normalize(),M.push(_.x,_.y,_.z),x.push(R+T,1-w),C.push(f++)}m.push(C)}for(let v=0;v<i;v++)for(let C=0;C<e;C++){let w=m[v][C+1],T=m[v][C],k=m[v+1][C],R=m[v+1][C+1];(v!==0||l>0)&&g.push(w,T,R),(v!==i-1||u<Math.PI)&&g.push(T,k,R)}this.setIndex(g),this.setAttribute("position",new ve(b,3)),this.setAttribute("normal",new ve(M,3)),this.setAttribute("uv",new ve(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var tl=class s extends We{constructor(t=1,e=.4,i=12,r=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:a},i=Math.floor(i),r=Math.floor(r);let l=[],h=[],u=[],f=[],m=new H,d=new H,_=new H;for(let g=0;g<=i;g++)for(let b=0;b<=r;b++){let M=b/r*a,x=g/i*Math.PI*2;d.x=(t+e*Math.cos(x))*Math.cos(M),d.y=(t+e*Math.cos(x))*Math.sin(M),d.z=e*Math.sin(x),h.push(d.x,d.y,d.z),m.x=t*Math.cos(M),m.y=t*Math.sin(M),_.subVectors(d,m).normalize(),u.push(_.x,_.y,_.z),f.push(b/r),f.push(g/i)}for(let g=1;g<=i;g++)for(let b=1;b<=r;b++){let M=(r+1)*g+b-1,x=(r+1)*(g-1)+b-1,v=(r+1)*(g-1)+b,C=(r+1)*g+b;l.push(M,x,C),l.push(x,v,C)}this.setIndex(l),this.setAttribute("position",new ve(h,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var el=class extends We{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],i=new Set,r=new H,a=new H;if(t.index!==null){let l=t.attributes.position,h=t.index,u=t.groups;u.length===0&&(u=[{start:0,count:h.count,materialIndex:0}]);for(let f=0,m=u.length;f<m;++f){let d=u[f],_=d.start,g=d.count;for(let b=_,M=_+g;b<M;b+=3)for(let x=0;x<3;x++){let v=h.getX(b+x),C=h.getX(b+(x+1)%3);r.fromBufferAttribute(l,v),a.fromBufferAttribute(l,C),Bf(r,a,i)===!0&&(e.push(r.x,r.y,r.z),e.push(a.x,a.y,a.z))}}}else{let l=t.attributes.position;for(let h=0,u=l.count/3;h<u;h++)for(let f=0;f<3;f++){let m=3*h+f,d=3*h+(f+1)%3;r.fromBufferAttribute(l,m),a.fromBufferAttribute(l,d),Bf(r,a,i)===!0&&(e.push(r.x,r.y,r.z),e.push(a.x,a.y,a.z))}}this.setAttribute("position",new ve(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Bf(s,t,e){let i=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(i)===!0||e.has(r)===!0?!1:(e.add(i),e.add(r),!0)}var ho=class extends vi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=np,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ma(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function $y(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var yr=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],a=e[i-1];n:{t:{let l;e:{i:if(!(t<r)){for(let h=i+2;;){if(r===void 0){if(t<a)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===h)break;if(a=r,r=e[++i],t<r)break t}l=e.length;break e}if(!(t>=a)){let h=e[1];t<h&&(i=2,a=h);for(let u=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===u)break;if(r=a,a=e[--i-1],t>=a)break t}l=i,i=0;break e}break n}for(;i<l;){let h=i+l>>>1;t<e[h]?l=h:i=h+1}if(r=e[i],a=e[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=t*r;for(let l=0;l!==r;++l)e[l]=i[a+l];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xh=class extends yr{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dd,endingEnd:Dd}}intervalChanged_(t,e,i){let r=this.parameterPositions,a=t-2,l=t+1,h=r[a],u=r[l];if(h===void 0)switch(this.getSettings_().endingStart){case Nd:a=t,h=2*e-i;break;case Od:a=r.length-2,h=e+r[a]-r[a+1];break;default:a=t,h=i}if(u===void 0)switch(this.getSettings_().endingEnd){case Nd:l=t,u=2*i-e;break;case Od:l=1,u=i+r[1]-r[0];break;default:l=t-1,u=e}let f=(i-e)*.5,m=this.valueSize;this._weightPrev=f/(e-h),this._weightNext=f/(u-i),this._offsetPrev=a*m,this._offsetNext=l*m}interpolate_(t,e,i,r){let a=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=t*h,f=u-h,m=this._offsetPrev,d=this._offsetNext,_=this._weightPrev,g=this._weightNext,b=(i-e)/(r-e),M=b*b,x=M*b,v=-_*x+2*_*M-_*b,C=(1+_)*x+(-1.5-2*_)*M+(-.5+_)*b+1,w=(-1-g)*x+(1.5+g)*M+.5*b,T=g*x-g*M;for(let k=0;k!==h;++k)a[k]=v*l[m+k]+C*l[f+k]+w*l[u+k]+T*l[d+k];return a}},qh=class extends yr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let a=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=t*h,f=u-h,m=(i-e)/(r-e),d=1-m;for(let _=0;_!==h;++_)a[_]=l[f+_]*d+l[u+_]*m;return a}},Yh=class extends yr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},li=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ma(e,this.TimeBufferType),this.values=Ma(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ma(t.times,Array),values:Ma(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Yh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ra:e=this.InterpolantFactoryMethodDiscrete;break;case Ah:e=this.InterpolantFactoryMethodLinear;break;case hc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ra;case this.InterpolantFactoryMethodLinear:return Ah;case this.InterpolantFactoryMethodSmooth:return hc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t}return this}trim(t,e){let i=this.times,r=i.length,a=0,l=r-1;for(;a!==r&&i[a]<t;)++a;for(;l!==-1&&i[l]>e;)--l;if(++l,a!==0||l!==r){a>=l&&(l=Math.max(l,1),a=l-1);let h=this.getValueSize();this.times=i.slice(a,l),this.values=this.values.slice(a*h,l*h)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let h=0;h!==a;h++){let u=i[h];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,h,u),t=!1;break}if(l!==null&&l>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,h,u,l),t=!1;break}l=u}if(r!==void 0&&$y(r))for(let h=0,u=r.length;h!==u;++h){let f=r[h];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,h,f),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===hc,a=t.length-1,l=1;for(let h=1;h<a;++h){let u=!1,f=t[h],m=t[h+1];if(f!==m&&(h!==1||f!==t[0]))if(r)u=!0;else{let d=h*i,_=d-i,g=d+i;for(let b=0;b!==i;++b){let M=e[d+b];if(M!==e[_+b]||M!==e[g+b]){u=!0;break}}}if(u){if(h!==l){t[l]=t[h];let d=h*i,_=l*i;for(let g=0;g!==i;++g)e[_+g]=e[d+g]}++l}}if(a>0){t[l]=t[a];for(let h=a*i,u=l*i,f=0;f!==i;++f)e[u+f]=e[h+f];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=Ah;var Es=class extends li{constructor(t,e,i){super(t,e,i)}};Es.prototype.ValueTypeName="bool";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=Ra;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var $h=class extends li{};$h.prototype.ValueTypeName="color";var Kh=class extends li{};Kh.prototype.ValueTypeName="number";var Jh=class extends yr{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let a=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=(i-e)/(r-e),f=t*h;for(let m=f+h;f!==m;f+=4)ri.slerpFlat(a,0,l,f-h,l,f,u);return a}},nl=class extends li{InterpolantFactoryMethodLinear(t){return new Jh(this.times,this.values,this.getValueSize(),t)}};nl.prototype.ValueTypeName="quaternion";nl.prototype.InterpolantFactoryMethodSmooth=void 0;var As=class extends li{constructor(t,e,i){super(t,e,i)}};As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=Ra;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var jh=class extends li{};jh.prototype.ValueTypeName="vector";var Qh=class{constructor(t,e,i){let r=this,a=!1,l=0,h=0,u,f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(m){h++,a===!1&&r.onStart!==void 0&&r.onStart(m,l,h),a=!0},this.itemEnd=function(m){l++,r.onProgress!==void 0&&r.onProgress(m,l,h),l===h&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(m){r.onError!==void 0&&r.onError(m)},this.resolveURL=function(m){return u?u(m):m},this.setURLModifier=function(m){return u=m,this},this.addHandler=function(m,d){return f.push(m,d),this},this.removeHandler=function(m){let d=f.indexOf(m);return d!==-1&&f.splice(d,2),this},this.getHandler=function(m){for(let d=0,_=f.length;d<_;d+=2){let g=f[d],b=f[d+1];if(g.global&&(g.lastIndex=0),g.test(m))return b}return null}}},Ky=new Qh,tu=class{constructor(t){this.manager=t!==void 0?t:Ky,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,a){i.load(t,r,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};tu.DEFAULT_MATERIAL_NAME="__DEFAULT";var il=class extends sn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var zc=new Fe,Ff=new H,zf=new H,eu=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ro,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Ff.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ff),zf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zf),e.updateMatrixWorld(),zc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var nu=class extends eu{constructor(){super(new za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sl=class extends il{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new nu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},rl=class extends il{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ol=class extends We{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var du="\\[\\]\\.:\\/",Jy=new RegExp("["+du+"]","g"),fu="[^"+du+"]",jy="[^"+du.replace("\\.","")+"]",Qy=/((?:WC+[\/:])*)/.source.replace("WC",fu),tb=/(WCOD+)?/.source.replace("WCOD",jy),eb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fu),nb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fu),ib=new RegExp("^"+Qy+tb+eb+nb+"$"),sb=["material","materials","bones","map"],iu=class{constructor(t,e,i){let r=i||Ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ge=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Jy,"")}static parseTrackName(t){let e=ib.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=i.nodeName.substring(r+1);sb.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(a){for(let l=0;l<a.length;l++){let h=a[l];if(h.name===e||h.uuid===e)return h;let u=i(h.children);if(u)return u}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,a=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let f=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let m=0;m<t.length;m++)if(t[m].name===f){f=m;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(f!==void 0){if(t[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}let l=t[r];if(l===void 0){let f=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+r+" but it wasn't found.",t);return}let h=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?h=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}u=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=a}else l.fromArray!==void 0&&l.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(u=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=r;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ge.Composite=iu;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aM=new Float32Array(1);var Ps=class extends Za{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var uo=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(nn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Hf=new H,Sa=new H,al=class{constructor(t=new H,e=new H){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Hf.subVectors(t,this.start),Sa.subVectors(this.end,this.start);let i=Sa.dot(Sa),a=Sa.dot(Hf)/i;return e&&(a=nn(a,0,1)),a}closestPointToPoint(t,e,i){let r=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Vf=new H,wa,Hc,ll=class extends sn{constructor(t=new H(0,0,1),e=new H(0,0,0),i=1,r=16776960,a=i*.2,l=a*.2){super(),this.type="ArrowHelper",wa===void 0&&(wa=new We,wa.setAttribute("position",new ve([0,0,0,0,1,0],3)),Hc=new ja(0,.5,1,5,1),Hc.translate(0,-.5,0)),this.position.copy(e),this.line=new xr(wa,new ai({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Be(Hc,new Zn({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,a,l)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Vf.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Vf,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};var cl=class extends Vi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var fp={type:"change"},mu={type:"start"},mp={type:"end"},ml=new ws,pp=new ei,ob=Math.cos(70*dl.DEG2RAD),Qe=new H,Tn=2*Math.PI,Oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pu=1e-6,gl=class extends cl{constructor(t,e=null){super(t,e),this.state=Oe.NONE,this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Cs.ROTATE,MIDDLE:Cs.DOLLY,RIGHT:Cs.PAN},this.touches={ONE:Rs.ROTATE,TWO:Rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new ri,this._lastTargetPosition=new H,this._quat=new ri().setFromUnitVectors(t.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new uo,this._sphericalDelta=new uo,this._scale=1,this._panOffset=new H,this._rotateStart=new Zt,this._rotateEnd=new Zt,this._rotateDelta=new Zt,this._panStart=new Zt,this._panEnd=new Zt,this._panDelta=new Zt,this._dollyStart=new Zt,this._dollyEnd=new Zt,this._dollyDelta=new Zt,this._dollyDirection=new H,this._mouse=new Zt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lb.bind(this),this._onPointerDown=ab.bind(this),this._onPointerUp=cb.bind(this),this._onContextMenu=gb.bind(this),this._onMouseWheel=db.bind(this),this._onKeyDown=fb.bind(this),this._onTouchStart=pb.bind(this),this._onTouchMove=mb.bind(this),this._onMouseDown=hb.bind(this),this._onMouseMove=ub.bind(this),this._interceptControlDown=_b.bind(this),this._interceptControlUp=vb.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fp),this.update(),this.state=Oe.NONE}update(t=null){let e=this.object.position;Qe.copy(e).sub(this.target),Qe.applyQuaternion(this._quat),this._spherical.setFromVector3(Qe),this.autoRotate&&this.state===Oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Tn:i>Math.PI&&(i-=Tn),r<-Math.PI?r+=Tn:r>Math.PI&&(r-=Tn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=l!=this._spherical.radius}if(Qe.setFromSpherical(this._spherical),Qe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){let h=Qe.length();l=this._clampDistance(h*this._scale);let u=h-l;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),a=!!u}else if(this.object.isOrthographicCamera){let h=new H(this._mouse.x,this._mouse.y,0);h.unproject(this.object);let u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=u!==this.object.zoom;let f=new H(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(h),this.object.updateMatrixWorld(),l=Qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(ml.origin.copy(this.object.position),ml.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ml.direction))<ob?this.object.lookAt(this.target):(pp.setFromNormalAndCoplanarPoint(this.object.up,this.target),ml.intersectPlane(pp,this.target))))}else if(this.object.isOrthographicCamera){let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>pu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pu||this._lastTargetPosition.distanceToSquared(this.target)>pu?(this.dispatchEvent(fp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Tn/60*this.autoRotateSpeed*t:Tn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Qe.setFromMatrixColumn(e,0),Qe.multiplyScalar(-t),this._panOffset.add(Qe)}_panUp(t,e){this.screenSpacePanning===!0?Qe.setFromMatrixColumn(e,1):(Qe.setFromMatrixColumn(e,0),Qe.crossVectors(this.object.up,Qe)),Qe.multiplyScalar(t),this._panOffset.add(Qe)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Qe.copy(r).sub(this.target);let a=Qe.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/i.clientHeight,this.object.matrix),this._panUp(2*e*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=t-i.left,a=e-i.top,l=i.width,h=i.height;this._mouse.x=r/l*2-1,this._mouse.y=-(a/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),a=.5*(t.pageY+i.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let l=(t.pageX+e.x)*.5,h=(t.pageY+e.y)*.5;this._updateZoomParameters(l,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Zt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function ab(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function lb(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function cb(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mp),this.state=Oe.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function hb(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Cs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Oe.DOLLY;break;case Cs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Oe.ROTATE}break;case Cs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Oe.PAN}break;default:this.state=Oe.NONE}this.state!==Oe.NONE&&this.dispatchEvent(mu)}function ub(s){switch(this.state){case Oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function db(s){this.enabled===!1||this.enableZoom===!1||this.state!==Oe.NONE||(s.preventDefault(),this.dispatchEvent(mu),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(mp))}function fb(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function pb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Rs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Oe.TOUCH_ROTATE;break;case Rs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Oe.TOUCH_PAN;break;default:this.state=Oe.NONE}break;case 2:switch(this.touches.TWO){case Rs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Oe.TOUCH_DOLLY_PAN;break;case Rs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Oe.TOUCH_DOLLY_ROTATE;break;default:this.state=Oe.NONE}break;default:this.state=Oe.NONE}this.state!==Oe.NONE&&this.dispatchEvent(mu)}function mb(s){switch(this._trackPointer(s),this.state){case Oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Oe.NONE}}function gb(s){this.enabled!==!1&&s.preventDefault()}function _b(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var gp=new Wn,_l=new H,Sr=class extends ol{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new ve(t,3)),this.setAttribute("uv",new ve(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new Ps(e,6,1);return this.setAttribute("instanceStart",new Yn(i,3,0)),this.setAttribute("instanceEnd",new Yn(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new Ps(e,6,1);return this.setAttribute("instanceColorStart",new Yn(i,3,0)),this.setAttribute("instanceColorEnd",new Yn(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new el(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),gp.setFromBufferAttribute(e),this.boundingBox.union(gp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let a=0,l=t.count;a<l;a++)_l.fromBufferAttribute(t,a),r=Math.max(r,i.distanceToSquared(_l)),_l.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(_l));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}};St.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Zt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Mn.line={uniforms:fl.merge([St.common,St.fog,St.line]),vertexShader:`
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
		`};var ss=class extends qn{static get type(){return"LineMaterial"}constructor(t){super({uniforms:fl.clone(Mn.line.uniforms),vertexShader:Mn.line.vertexShader,fragmentShader:Mn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var gu=new Ne,_p=new H,vp=new H,ln=new Ne,cn=new Ne,xi=new Ne,_u=new H,vu=new Fe,hn=new al,xp=new H,vl=new Wn,xl=new oi,yi=new Ne,bi,Ls;function yp(s,t,e){return yi.set(0,0,-t,1).applyMatrix4(s.projectionMatrix),yi.multiplyScalar(1/yi.w),yi.x=Ls/e.width,yi.y=Ls/e.height,yi.applyMatrix4(s.projectionMatrixInverse),yi.multiplyScalar(1/yi.w),Math.abs(Math.max(yi.x,yi.y))}function xb(s,t){let e=s.matrixWorld,i=s.geometry,r=i.attributes.instanceStart,a=i.attributes.instanceEnd,l=Math.min(i.instanceCount,r.count);for(let h=0,u=l;h<u;h++){hn.start.fromBufferAttribute(r,h),hn.end.fromBufferAttribute(a,h),hn.applyMatrix4(e);let f=new H,m=new H;bi.distanceSqToSegment(hn.start,hn.end,m,f),m.distanceTo(f)<Ls*.5&&t.push({point:m,pointOnLine:f,distance:bi.origin.distanceTo(m),object:s,face:null,faceIndex:h,uv:null,uv1:null})}}function yb(s,t,e){let i=t.projectionMatrix,a=s.material.resolution,l=s.matrixWorld,h=s.geometry,u=h.attributes.instanceStart,f=h.attributes.instanceEnd,m=Math.min(h.instanceCount,u.count),d=-t.near;bi.at(1,xi),xi.w=1,xi.applyMatrix4(t.matrixWorldInverse),xi.applyMatrix4(i),xi.multiplyScalar(1/xi.w),xi.x*=a.x/2,xi.y*=a.y/2,xi.z=0,_u.copy(xi),vu.multiplyMatrices(t.matrixWorldInverse,l);for(let _=0,g=m;_<g;_++){if(ln.fromBufferAttribute(u,_),cn.fromBufferAttribute(f,_),ln.w=1,cn.w=1,ln.applyMatrix4(vu),cn.applyMatrix4(vu),ln.z>d&&cn.z>d)continue;if(ln.z>d){let w=ln.z-cn.z,T=(ln.z-d)/w;ln.lerp(cn,T)}else if(cn.z>d){let w=cn.z-ln.z,T=(cn.z-d)/w;cn.lerp(ln,T)}ln.applyMatrix4(i),cn.applyMatrix4(i),ln.multiplyScalar(1/ln.w),cn.multiplyScalar(1/cn.w),ln.x*=a.x/2,ln.y*=a.y/2,cn.x*=a.x/2,cn.y*=a.y/2,hn.start.copy(ln),hn.start.z=0,hn.end.copy(cn),hn.end.z=0;let M=hn.closestPointToPointParameter(_u,!0);hn.at(M,xp);let x=dl.lerp(ln.z,cn.z,M),v=x>=-1&&x<=1,C=_u.distanceTo(xp)<Ls*.5;if(v&&C){hn.start.fromBufferAttribute(u,_),hn.end.fromBufferAttribute(f,_),hn.start.applyMatrix4(l),hn.end.applyMatrix4(l);let w=new H,T=new H;bi.distanceSqToSegment(hn.start,hn.end,T,w),e.push({point:T,pointOnLine:w,distance:bi.origin.distanceTo(T),object:s,face:null,faceIndex:_,uv:null,uv1:null})}}}var yl=class extends Be{constructor(t=new Sr,e=new ss({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,r=new Float32Array(2*e.count);for(let l=0,h=0,u=e.count;l<u;l++,h+=2)_p.fromBufferAttribute(e,l),vp.fromBufferAttribute(i,l),r[h]=h===0?0:r[h-1],r[h+1]=r[h]+_p.distanceTo(vp);let a=new Ps(r,2,1);return t.setAttribute("instanceDistanceStart",new Yn(a,1,0)),t.setAttribute("instanceDistanceEnd",new Yn(a,1,1)),this}raycast(t,e){let i=this.material.worldUnits,r=t.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let a=t.params.Line2!==void 0&&t.params.Line2.threshold||0;bi=t.ray;let l=this.matrixWorld,h=this.geometry,u=this.material;Ls=u.linewidth+a,h.boundingSphere===null&&h.computeBoundingSphere(),xl.copy(h.boundingSphere).applyMatrix4(l);let f;if(i)f=Ls*.5;else{let d=Math.max(r.near,xl.distanceToPoint(bi.origin));f=yp(r,d,u.resolution)}if(xl.radius+=f,bi.intersectsSphere(xl)===!1)return;h.boundingBox===null&&h.computeBoundingBox(),vl.copy(h.boundingBox).applyMatrix4(l);let m;if(i)m=Ls*.5;else{let d=Math.max(r.near,vl.distanceToPoint(bi.origin));m=yp(r,d,u.resolution)}vl.expandByScalar(m),bi.intersectsBox(vl)!==!1&&(i?xb(this,e):yb(this,r,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(gu),this.material.uniforms.resolution.value.set(gu.z,gu.w))}};var wr=class extends Sr{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,i=new Float32Array(2*e);for(let r=0;r<e;r+=3)i[2*r]=t[r],i[2*r+1]=t[r+1],i[2*r+2]=t[r+2],i[2*r+3]=t[r+3],i[2*r+4]=t[r+4],i[2*r+5]=t[r+5];return super.setPositions(i),this}setColors(t){let e=t.length-3,i=new Float32Array(2*e);for(let r=0;r<e;r+=3)i[2*r]=t[r],i[2*r+1]=t[r+1],i[2*r+2]=t[r+2],i[2*r+3]=t[r+3],i[2*r+4]=t[r+4],i[2*r+5]=t[r+5];return super.setColors(i),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var bl=class extends yl{constructor(t=new wr,e=new ss({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var bp=Math.PI/180;function bb(s,t="#cfe0f2",e="rgba(8,18,26,.75)"){let i=document.createElement("canvas");i.width=256,i.height=64;let r=i.getContext("2d");r.font="bold 30px Helvetica, Arial, sans-serif";let a=Math.min(250,r.measureText(s).width+24);r.fillStyle=e,r.fillRect(128-a/2,8,a,48),r.fillStyle=t,r.textAlign="center",r.textBaseline="middle",r.fillText(s,128,33);let l=new Ka(i);l.minFilter=Gn;let h=new Xa(new oo({map:l,depthTest:!1,transparent:!0}));return h.userData.aspect=4,h.renderOrder=10,h}var Mp=s=>{let t=Math.pow(10,Math.floor(Math.log10(s/4))),e=s/4/t;return(e<1.5?1:e<3.5?2:e<7.5?5:10)*t};function Mb(){let s=new Bi,t=.67,e=.026,i=new ho({color:"#9db2c8",roughness:.5,metalness:.1,emissive:"#1a2a3c"}),r=new ho({color:"#e8eef5",roughness:.5,emissive:"#223347"}),a=[];for(let g=0;g<=24;g++){let b=g/24,M=e*Math.pow(Math.sin(Math.PI*Math.pow(b,.75)),.55)*(b>.7?1-(b-.7)*1.2*(b-.7)/.3*.5:1);a.push(new Zt(Math.max(M,.0015),(b-.5)*t))}let l=new Be(new Ja(a,20),i);l.rotation.x=-Math.PI/2,s.add(l);let h=new Be(new Xn(.012,.05,.12),i);h.position.set(0,e+.02,-.04),s.add(h);let u=(g,b,M)=>{let x=new Be(new Xn(.075,.003,.03),r);return x.position.set(g,0,b),x.rotation.z=M,x};s.add(u(0,.27,0));let f=u(0,.27,Math.PI/2);s.add(f);let m=new Be(new Xn(.05,.003,.02),r);m.position.set(0,0,-.17),s.add(m);let d=new Be(new tl(.014,.003,6,16),r);d.position.set(0,0,.345),s.add(d);let _=new Be(new co(.008,8,8),new Zn({color:"#e0a93b"}));return _.position.set(0,0,-.34),s.add(_),s}var Ml=class{constructor(t){this.host=t,this.dirty=!0,this.active=!1,this.t=0,this.follow=!1,this.color="step",this.plan=null,this.renderer=new Ga({antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.setClearColor("#08121a"),t.append(this.renderer.domElement),this.scene=new Wa,this.scene.fog=null,this.cam=new bn(42,1,.01,2e3),this.cam.position.set(6,4,8),this.ctl=new gl(this.cam,this.renderer.domElement),this.ctl.addEventListener("change",()=>{this.dirty=!0}),this.scene.add(new rl("#8fa6c0",1.1));let e=new sl("#ffffff",2);e.position.set(3,8,5),this.scene.add(e),this.world=new Bi,this.scene.add(this.world),this.boat=Mb(),this.boat.rotation.order="YXZ",this.scene.add(this.boat);let i=new We;i.setAttribute("position",new ve([0,0,0],3)),this.dot=new $a(i,new ao({color:"#ffb12b",size:11,sizeAttenuation:!1,depthTest:!1,transparent:!0})),this.dot.renderOrder=20,this.scene.add(this.dot),this.lm=new ss({color:16777215,linewidth:3,vertexColors:!0,worldUnits:!1}),this.sprites=[],new ResizeObserver(()=>this.resize()).observe(t),this.resize();let r=()=>{requestAnimationFrame(r),this.active&&this.dirty&&(this.dirty=!1,this.ctl.update(),this.updateSprites(),this.renderer.render(this.scene,this.cam))};r()}resize(){let t=this.host.clientWidth||600,e=this.host.clientHeight||400;this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.cam.aspect=t/e,this.cam.updateProjectionMatrix(),this.lm.resolution.set(t,e),this.dirty=!0}setActive(t){this.active=t,this.dirty=!0,t&&this.resize()}updateSprites(){let t=this.cam.position.distanceTo(this.ctl.target);this.sprites.forEach(e=>{let i=(e.userData.size||.03)*t;e.scale.set(i*e.userData.aspect,i,1)})}sprite(t,e,i,r){let a=bb(t,r);return a.position.copy(e),a.userData.size=i,this.world.add(a),this.sprites.push(a),a}clear(){for(;this.world.children.length;)this.world.children.pop().traverse?.(e=>{e.geometry?.dispose(),e.material&&e.material!==this.lm&&(e.material.map?.dispose(),e.material.dispose())});this.sprites=[]}P(t){return new H(t.x,-t.z,-t.y)}setPlan(t,e={}){this.plan=t,this.clear();let i=t.pts,r=t.stats;if(i.length<2){this.dirty=!0;return}let a=Math.max(1,.12*Math.max(r.w,r.l,r.maxDepth)),l=Math.min(r.bb.x0,-1)-a,h=Math.max(r.bb.x1,1)+a,u=Math.min(r.bb.y0,-1)-a,f=Math.max(r.bb.y1,1)+a,m=Math.max(e.depthLimit||0,r.maxDepth*1.2,1.2),d=(l+h)/2,_=-(u+f)/2,g=h-l,b=f-u;this.size=Math.max(g,b,m),this.cx=d,this.cz=_,this.dmax=m;let M=new Be(new Xn(g,m,b),new Zn({color:"#0f4a7a",transparent:!0,opacity:.1,side:gn,depthWrite:!1}));M.position.set(d,-m/2,_),this.world.add(M);let x=new is(new lo(new Xn(g,m,b)),new ai({color:"#2f6ca8",transparent:!0,opacity:.8}));x.position.copy(M.position),this.world.add(x);let v=new Be(new Ts(g,b),new Zn({color:"#1b6fb5",transparent:!0,opacity:.12,side:Vn,depthWrite:!1}));v.rotation.x=-Math.PI/2,v.position.set(d,0,_),this.world.add(v);let C=Mp(Math.max(g,b)),w=(xt,rt)=>{let It=new ai({color:"#35597d",transparent:!0,opacity:rt}),qt=[];for(let Pe=Math.ceil(l/C)*C;Pe<=h+1e-6;Pe+=C)qt.push(Pe,xt,_-b/2,Pe,xt,_+b/2);for(let Pe=Math.ceil(-f/C)*C;Pe<=-u+1e-6;Pe+=C)qt.push(l,xt,Pe,h,xt,Pe);let ae=new We;ae.setAttribute("position",new ve(qt,3));let Z=new is(ae,It);this.world.add(Z)};w(0,.6),w(-m,.25);let T=new ll(new H(0,0,-1),new H(l+.5*a,0,_-b/2+.2*a),Math.max(a*.9,this.size*.08),14702667,this.size*.02,this.size*.012);this.world.add(T),this.sprite("N",new H(l+.5*a,0,_-b/2-this.size*.05),.04,"#ff8a7d");let k=l,R=_+b/2,D=Mp(m),O=[k,0,R,k,-m,R];for(let xt=0;xt<=m+1e-6;xt+=D)O.push(k,-xt,R,k-this.size*.015,-xt,R),this.sprite(xt.toFixed(D<1?1:0)+" m",new H(k-this.size*.07,-xt,R),.03,"#9fc3ea");let A=new We;if(A.setAttribute("position",new ve(O,3)),this.world.add(new is(A,new ai({color:"#8fb4dc"}))),e.depthLimit&&e.depthLimit<=m){let xt=new Be(new Ts(g,b),new Zn({color:"#e0584b",transparent:!0,opacity:.08,side:Vn,depthWrite:!1}));xt.rotation.x=-Math.PI/2,xt.position.set(d,-e.depthLimit,_),this.world.add(xt)}let E=r.bb.x0,B=r.bb.x1,z=r.bb.y0,G=r.bb.y1,$=new is(new lo(new Xn(Math.max(B-E,.001),Math.max(r.maxDepth,.001),Math.max(G-z,.001))),new ai({color:"#e0a93b",transparent:!0,opacity:.55}));$.position.set((E+B)/2,-r.maxDepth/2,-(z+G)/2),this.world.add($),B-E>.2&&this.sprite(`B ${(B-E).toFixed(1)} m`,new H((E+B)/2,0,-z+this.size*.03),.03,"#ffd27a"),G-z>.2&&this.sprite(`L ${(G-z).toFixed(1)} m`,new H(B+this.size*.04,0,-(z+G)/2),.03,"#ffd27a"),r.maxDepth>.2&&this.sprite(`T ${r.maxDepth.toFixed(1)} m`,new H(B,-r.maxDepth/2,-z),.03,"#ffd27a");let tt=[],W=[],ht=[],V=new fe,lt=Math.max(r.maxDepth,.5);i.forEach(xt=>{let rt=this.P(xt);tt.push(rt.x,rt.y,rt.z),ht.push(rt.x,0,rt.z),this.color==="depth"?V.setHSL(.55-.1*xt.z/lt,.9,.45+.25*(1-xt.z/lt)):V.set(Rn[t.steps?.[xt.i]?.t]?.color||"#9aa7b8"),W.push(V.r,V.g,V.b)});let st=new wr;st.setPositions(tt),st.setColors(W);let ot=new bl(st,this.lm);ot.computeLineDistances(),this.world.add(ot);let yt=new We;yt.setAttribute("position",new ve(ht,3)),this.world.add(new xr(yt,new ai({color:"#7ea6d1",transparent:!0,opacity:.35})));let bt=[],K=-99;i.forEach(xt=>{if(xt.t-K>=Math.max(5,r.dur/40)&&xt.z>.05){K=xt.t;let rt=this.P(xt);bt.push(rt.x,rt.y,rt.z,rt.x,0,rt.z)}});let pt=new We;pt.setAttribute("position",new ve(bt,3)),this.world.add(new is(pt,new ai({color:"#4d7aa8",transparent:!0,opacity:.35})));let Mt={};i.forEach(xt=>{if(xt.i>=0&&!Mt[xt.i]){Mt[xt.i]=1;let rt=this.P(xt),It=new Be(new co(this.size*.006,10,10),new Zn({color:Rn[t.steps?.[xt.i]?.t]?.color||"#fff"}));It.position.copy(rt),this.world.add(It),this.sprite(`${xt.i+1} ${Rn[t.steps?.[xt.i]?.t]?.label||""}`,rt.clone().add(new H(0,this.size*.03,0)),.02)}});let gt=new Be(new Qa(this.size*.01,this.size*.03,12),new Zn({color:"#4fb477"}));gt.position.copy(this.P(i[0])).add(new H(0,this.size*.02,0)),gt.rotation.x=Math.PI,this.world.add(gt),this.sprite("START",this.P(i[0]).add(new H(0,this.size*.06,0)),.024,"#7fe0a0");let Xt=i[i.length-1];this.sprite("ENDE",this.P(Xt).add(new H(0,this.size*.06,0)),.024,"#ff8a7d"),this.boatScale=e.boatScale||Math.max(1,Math.min(60,this.size*.07/.67)),this.boat.scale.setScalar(this.boatScale),this.lm.linewidth=4,this.at(this.t),this.home(!1)}home(t=!0){if(!this.size)return;let e=this.size*.95;this.ctl.target.set(this.cx,-this.dmax*.35,this.cz),this.cam.position.set(this.cx+e*.75,e*.5,this.cz+e*.95),this.cam.near=this.size*.002,this.cam.far=this.size*40,this.cam.updateProjectionMatrix(),this.ctl.update(),this.dirty=!0}view(t){let e=this.size*1.3,i=this.ctl.target.set(this.cx,-this.dmax*.3,this.cz);t==="top"?this.cam.position.set(this.cx,e*1.5,this.cz+.001):t==="side"?this.cam.position.set(this.cx,-this.dmax*.3,this.cz+e*1.4):this.home(),this.ctl.update(),this.dirty=!0}at(t){if(this.t=t,!this.plan)return;let e=this.plan.pts;if(e.length<2)return;let i=0,r=e.length-1;for(;r-i>1;){let d=i+r>>1;e[d].t<=t?i=d:r=d}let a=e[i],l=e[r],h=l.t>a.t?Math.min(1,Math.max(0,(t-a.t)/(l.t-a.t))):0,u=d=>a[d]+(l[d]-a[d])*h,f={x:u("x"),y:u("y"),z:u("z")};this.boat.position.copy(this.P(f)),this.dot.position.copy(this.boat.position);let m=l.h-a.h;if(m>180&&(m-=360),m<-180&&(m+=360),this.boat.rotation.y=-(a.h+m*h)*bp,this.boat.rotation.x=u("p")*bp,this.follow){let d=this.boat.position;this.ctl.target.lerp(d,1)}return this.cur={...a,x:f.x,y:f.y,z:f.z,h:a.h+m*h,p:u("p"),v:u("v"),f:u("f"),thr:u("thr"),t},this.dirty=!0,this.cur}shot(){return this.ctl.update(),this.updateSprites(),this.renderer.render(this.scene,this.cam),this.renderer.domElement.toDataURL("image/png")}};var _n=(s,t,e="")=>S("button",{class:"btn "+e,onclick:t},s);function Sb(s,t,e,i){let r=s.getContext("2d"),a=s.width/2,l=s.height/2;r.setTransform(2,0,0,2,0,0),r.clearRect(0,0,a,l),r.fillStyle="#0a141d",r.fillRect(0,0,a,l);let h=t.pts,u=t.stats;if(h.length<2)return;let f=44,m=10,d=10,_=20,g=Math.max(u.maxDepth*1.15,1),b=Math.max(u.dur,1),M=R=>f+R/b*(a-f-m),x=R=>d+R/g*(l-d-_);r.font="10px Helvetica, Arial",r.fillStyle="#6f869c",r.strokeStyle="#162838",r.textAlign="right";let v=g<=3?.5:g<=10?1:g<=30?5:10;for(let R=0;R<=g;R+=v)r.beginPath(),r.moveTo(f,x(R)),r.lineTo(a-m,x(R)),r.stroke(),r.fillText(R+" m",f-4,x(R)+3);r.textAlign="center";let C=b<120?10:b<600?60:b<3600?300:900;for(let R=0;R<=b;R+=C)r.fillText(R>=60?Math.round(R/60)+" min":R+" s",M(R),l-6);i&&i<g&&(r.strokeStyle=Vt.bad,r.setLineDash([4,3]),r.beginPath(),r.moveTo(f,x(i)),r.lineTo(a-m,x(i)),r.stroke(),r.setLineDash([]));let w=-2,T=0,k=[];h.forEach((R,D)=>{R.i!==w&&(w>=-1&&k.push([w,T,R.t]),w=R.i,T=R.t)}),k.push([w,T,b]),k.forEach(([R,D,O])=>{R<0||(r.fillStyle=(Rn[t.steps[R]?.t]?.color||"#888")+"22",r.fillRect(M(D),d,Math.max(1,M(O)-M(D)),l-d-_))}),r.lineWidth=2,r.strokeStyle="#4aa3ff",r.beginPath(),h.forEach((R,D)=>{D?r.lineTo(M(R.t),x(R.z)):r.moveTo(M(R.t),x(R.z))}),r.stroke(),r.lineWidth=1,r.strokeStyle="#8a6fd055",r.beginPath(),h.forEach((R,D)=>{let O=d+(1-R.f/100)*(l-d-_)*.25+(l-d-_)*.75;D?r.lineTo(M(R.t),O):r.moveTo(M(R.t),O)}),r.stroke(),r.fillStyle="#8a6fd0",r.textAlign="left",r.fillText("Ballast",f+4,l-_-4),r.strokeStyle="#e0a93b",r.lineWidth=1.5,r.beginPath(),r.moveTo(M(e),d),r.lineTo(M(e),l-_),r.stroke()}function wb(s,t,e){let i=s.getContext("2d"),r=s.width/2,a=s.height/2;i.setTransform(2,0,0,2,0,0),i.clearRect(0,0,r,a),i.fillStyle="#0a141d",i.fillRect(0,0,r,a);let l=t.pts,h=t.stats;if(l.length<2)return;let u=26,f=Math.max(h.bb.x1-h.bb.x0,2),m=Math.max(h.bb.y1-h.bb.y0,2),d=Math.min((r-2*u)/f,(a-2*u)/m),_=r/2-(h.bb.x0+h.bb.x1)/2*d,g=a/2+(h.bb.y0+h.bb.y1)/2*d,b=w=>_+w*d,M=w=>g-w*d,x=(()=>{let w=40/d,T=Math.pow(10,Math.floor(Math.log10(w))),k=w/T;return(k<1.5?1:k<3.5?2:k<7.5?5:10)*T})();i.strokeStyle="#162838",i.fillStyle="#6f869c",i.font="10px Helvetica, Arial",i.textAlign="left";for(let w=Math.floor(-_/d/x)*x;b(w)<r;w+=x)i.beginPath(),i.moveTo(b(w),0),i.lineTo(b(w),a),i.stroke();for(let w=Math.floor((g-a)/d/x)*x;M(w)>0;w+=x)i.beginPath(),i.moveTo(0,M(w)),i.lineTo(r,M(w)),i.stroke();i.fillText(`Raster ${x} m`,6,a-6),i.fillStyle=Vt.bad,i.fillText("N \u2191",r-28,14),i.lineWidth=2;for(let w=1;w<l.length;w++)i.strokeStyle=Rn[t.steps[l[w].i]?.t]?.color||"#9aa7b8",i.beginPath(),i.moveTo(b(l[w-1].x),M(l[w-1].y)),i.lineTo(b(l[w].x),M(l[w].y)),i.stroke();i.fillStyle=Vt.ok,i.beginPath(),i.arc(b(0),M(0),4,0,7),i.fill();let v=l[l.length-1];i.fillStyle=Vt.bad,i.beginPath(),i.arc(b(v.x),M(v.y),4,0,7),i.fill();let C=l.find(w=>w.t>=e)||v;i.strokeStyle="#e0a93b",i.lineWidth=2,i.beginPath(),i.arc(b(C.x),M(C.y),7,0,7),i.stroke(),i.save(),i.translate(b(C.x),M(C.y)),i.rotate(C.h*Math.PI/180),i.fillStyle="#e0a93b",i.beginPath(),i.moveTo(0,-11),i.lineTo(-4,-4),i.lineTo(4,-4),i.fill(),i.restore()}function Sp(){let s=Pn.get("mission",null);s=Array.isArray(s)&&s.length?s:oc("Pool Funktionstest");let t=null,e=0,i=!1,r=10,a=0,l=-1,h=Pn.get("h0",0),u=Pn.get("pmax",25),f=Pn.get("capwh",6.3),m=S("div",{class:"steps-list"}),d=S("div",{class:"warns"}),_=S("div",{class:"view3d"}),g={dur:le("Dauer"),dist:le("Strecke","m"),dep:le("Max Tiefe","m"),box:le("Bahn B \xD7 L","m"),end:le("Ende zu Start","m"),en:le("Energie","Wh"),bat:le("Akku Bedarf","%"),spd:le("\xD8 Fahrt","m/s")},b=S("canvas",{width:1e3,height:300,class:"cv"}),M=S("canvas",{width:600,height:300,class:"cv"}),x=S("input",{type:"range",min:0,max:100,step:.1,value:0,class:"sl tl",oninput:()=>{e=+x.value,i=!1,w(),$()}}),v=S("div",{class:"hud"}),C=_n("\u25B6",()=>{t&&(e>=t.stats.dur-.05&&(e=0),i=!i,a=performance.now(),w())},"play"),w=()=>{C.textContent=i?"\u275A\u275A":"\u25B6"},T=new Ml(_),k=S("select",{class:"in sm",onchange:()=>{r=+k.value}},[1,5,10,30,100].map(rt=>S("option",{value:rt,selected:rt===r},`${rt}\xD7`))),R=S("select",{class:"in sm",onchange:()=>{T.color=R.value,G()}},S("option",{value:"step"},"Farbe: Schritt"),S("option",{value:"depth"},"Farbe: Tiefe")),D=S("input",{type:"checkbox",onchange:()=>{T.follow=D.checked,T.at(e)}}),O=S("select",{class:"in sm",onchange:()=>{T.boat.scale.setScalar(+O.value||T.boatScale),T.dirty=!0}},S("option",{value:0},"Boot: Auto"),S("option",{value:1},"Boot: 1:1"),S("option",{value:5},"Boot: 5\xD7"),S("option",{value:20},"Boot: 20\xD7")),A=()=>Uo(rt=>j.par[rt]),E=()=>{let rt=A();t=Bo(s,rt,{h0:h,pMax:u}),t.steps=s;let It=t.stats;x.max=It.dur,e=Math.min(e,It.dur),g.dur.set(hs(It.dur)),g.dist.set(wt(It.dist,1)),g.dep.set(wt(It.maxDepth,2),It.maxDepth>rt.depthMax?"bad":""),g.box.set(`${wt(It.w,1)} \xD7 ${wt(It.l,1)}`),g.end.set(wt(It.endDist,1)),g.en.set(wt(It.wh,2));let qt=It.wh/f*100;g.bat.set(wt(qt,0),qt>60?"bad":qt>40?"warn":""),g.spd.set(wt(It.avgV,2)),d.innerHTML="",[...ko(s,rt),...t.notes.map(Z=>({i:Z.i,m:Z.m}))].forEach(Z=>d.append(S("div",{class:"w"},(Z.i>=0?`Schritt ${Z.i+1}: `:"")+Z.m))),Pn.set("mission",s),G(),$()},B=null,z=()=>{clearTimeout(B),B=setTimeout(E,120)},G=()=>{t&&T.setPlan(t,{depthLimit:A().depthMax,boatScale:+O.value||void 0})},$=()=>{if(!t)return;x.value=e;let rt=T.at(e);Sb(b,t,e,A().depthMax),wb(M,t,e),rt&&(v.innerHTML="",[["t",hs(rt.t)],["Tiefe",wt(rt.z,2)+" m"],["Kurs",wt((rt.h%360+360)%360,0)+"\xB0"],["Nick",wt(rt.p,0)+"\xB0"],["Fahrt",wt(rt.v,2)+" m/s"],["Ballast",wt(rt.f,0)+" %"],["Schritt",rt.i>=0?`${rt.i+1} ${Rn[s[rt.i]?.t]?.label||""}`:"Start"]].forEach(([It,qt])=>v.append(S("span",null,It,S("b",null,qt)))),l=rt.i,tt())},tt=()=>{[...m.children].forEach((rt,It)=>rt.classList.toggle("sel",It===l))},W=()=>{m.innerHTML="",s.forEach((rt,It)=>{let qt=Rn[rt.t],ae=ko(s,A()).some(Ot=>Ot.i===It),Z=S("select",{class:"in sm",onchange:()=>{let Ot=rt.v;s[It]=Oo(Z.value),W(),z()}},sc.map(Ot=>S("option",{value:Ot,selected:Ot===rt.t},Rn[Ot].label))),Pe=qt.f.map((Ot,kt)=>{let Se=S("input",{class:"in num",type:"number",step:Ot[5],min:Ot[3],max:Ot[4],value:rt.v[kt],onchange:()=>{rt.v[kt]=wn(+Se.value,Ot[3],Ot[4]),Se.value=rt.v[kt],z()}});return S("label",{class:"fld"},S("span",null,Ot[0],Ot[1]?` (${Ot[1]})`:""),Se)}),ne=Ot=>()=>{let kt=It+Ot;kt<0||kt>=s.length||([s[It],s[kt]]=[s[kt],s[It]],W(),E())};m.append(S("div",{class:"step"+(ae?" warn":""),onclick:()=>{let Ot=t.pts.find(kt=>kt.i===It);Ot&&(e=Ot.t,i=!1,w(),$())}},S("div",{class:"sh"},S("i",{style:{background:qt.color}}),S("b",null,It+1),Z,S("span",{class:"sp"}),S("button",{class:"ib",title:"hoch",onclick:Ot=>{Ot.stopPropagation(),ne(-1)()}},"\u2191"),S("button",{class:"ib",title:"runter",onclick:Ot=>{Ot.stopPropagation(),ne(1)()}},"\u2193"),S("button",{class:"ib",title:"duplizieren",onclick:Ot=>{Ot.stopPropagation(),s.splice(It+1,0,JSON.parse(JSON.stringify(rt))),W(),E()}},"\u29C9"),S("button",{class:"ib del",title:"l\xF6schen",onclick:Ot=>{Ot.stopPropagation(),s.splice(It,1),W(),E()}},"\u2715")),Pe.length?S("div",{class:"flds"},Pe):S("div",{class:"dim sm"},"Ballast leeren, mit Gas und Nick nach oben auftauchen bis Tiefe 0, Mission endet.")))}),tt()},ht=S("select",{class:"in"},sc.map(rt=>S("option",{value:rt},Rn[rt].label))),V=()=>{if(s.length>=No)return re("Maximal 64 Schritte","warn");s.push(Oo(ht.value)),W(),E(),m.scrollTop=m.scrollHeight},lt=S("select",{class:"in",onchange:()=>{lt.value&&((!s.length||confirm("Aktuelle Mission durch Vorlage ersetzen?"))&&(s=oc(lt.value),e=0,W(),E()),lt.value="")}},S("option",{value:""},"Vorlage laden \u2026"),Object.keys(rc).map(rt=>S("option",{value:rt},rt)));Ee.on("mission:set",rt=>{s=rt,e=0,l=-1,W(),E()});let st=S("dialog",{class:"dlg"}),ot={lo:.5,hi:2,n:3,spd:25,rate:.15,pit:15},yt=(rt,It,qt,ae=.1)=>S("label",{class:"fld"},S("span",null,`${rt} (${qt})`),S("input",{class:"in num",type:"number",step:ae,value:ot[It],onchange:Z=>{ot[It]=+Z.target.value}}));st.append(S("h3",null,"Yo Yo Profil erzeugen"),S("div",{class:"flds"},yt("Flachste Tiefe","lo","m"),yt("Tiefste Tiefe","hi","m"),yt("Zyklen","n","x",1),yt("Fahrt","spd","%",1),yt("Max Sinkrate","rate","m/s",.01),yt("Max Nick","pit","deg",1)),S("div",{class:"row"},_n("Anh\xE4ngen",()=>{let rt=s.length;s.push({t:"DIVE",v:[ot.lo,ot.rate,ot.pit,ot.spd]},{t:"DIVE",v:[ot.hi,ot.rate,ot.pit,ot.spd]},{t:"DIVE",v:[ot.lo,ot.rate,ot.pit,ot.spd]}),ot.n>1&&s.push({t:"REPEAT",v:[ot.n-1,rt+1,0,0]}),st.close(),W(),E()},"primary"),_n("Abbrechen",()=>st.close())));let bt=S("span",{class:"dim"}),K=async rt=>{if(!j.connected)return re("Nicht verbunden","bad");let It=j.info?.maxsteps||64;if(s.length>It)return re(`Boot speichert nur ${It} Schritte`,"bad");if(ko(s,A()).filter(Z=>Z.m.includes("R\xFCcksprung")).length)return re("R\xFCcksprung Schritt pr\xFCfen","bad");let ae=await Me("MIS CLEAR");if(!(!ae||!ae.ok)){for(let Z=0;Z<s.length;Z++)if(bt.textContent=`\xDCbertrage ${Z+1}/${s.length}`,ae=await Me(fd([s[Z]])[0].replace(/^/,"")),!ae||!ae.ok){bt.textContent="";return}rt&&await Me("MIS SAVE"),bt.textContent="",re(`Mission mit ${s.length} Schritten ${rt?"gespeichert":"\xFCbertragen"}`,"ok"),us(`Mission \xFCbertragen (${s.length} Schritte)`)}},pt=async()=>{let rt=await Me("MIS GET");rt&&rt.ok&&Array.isArray(rt.data)&&(s=Fo(rt.data),e=0,W(),E(),re(`${s.length} Schritte vom Boot gelesen`,"ok"))},Mt=async()=>{if(!j.connected)return re("Nicht verbunden","bad");confirm(`Mission starten?

\u2022 Boot im Wasser, Ballast Beh\xE4lter dicht
\u2022 Leckage Test bestanden, Akku voll
\u2022 Tiefe auf Null kalibriert
\u2022 Mission ist \xFCbertragen

Das Boot muss daf\xFCr scharf (ARMED) sein.`)&&await Me("MIS START","Mission l\xE4uft")},gt=(rt,It,qt,ae)=>S("label",{class:"fld"},S("span",null,`${rt} (${ae})`),S("input",{class:"in num",type:"number",value:It,step:"any",onchange:Z=>qt(+Z.target.value)})),Xt=S("div",{class:"page mis"},S("div",{class:"toolbar"},lt,_n("Neu",()=>{confirm("Mission leeren?")&&(s=[],e=0,W(),E())}),_n("Laden",async()=>{let rt=await Lo(".json");if(rt)try{s=JSON.parse(rt).steps,e=0,W(),E()}catch{re("Datei ung\xFCltig","bad")}}),_n("Speichern",()=>Ai("mission.json",JSON.stringify({app:"FATHOM",steps:s},null,1))),_n("Yo Yo \u2026",()=>st.showModal()),S("span",{class:"sp"}),bt,_n("Zum Boot senden",()=>K(!1),"primary"),_n("Senden + im Boot speichern",()=>K(!0)),_n("Vom Boot lesen",pt),_n("START",Mt,"go"),_n("STOP",()=>Me("MIS STOP","Mission gestoppt"),"stop")),S("div",{class:"stats mstats"},Object.values(g).map(rt=>rt.el)),S("div",{class:"mgrid"},S("div",{class:"left"},m,S("div",{class:"addrow"},ht,_n("+ Schritt",V,"primary")),d,S("details",{class:"opt"},S("summary",null,"Annahmen f\xFCr die Vorschau"),gt("Startkurs",h,rt=>{h=rt,Pn.set("h0",rt),E()},"deg"),gt("Leistung bei 100 % Gas",u,rt=>{u=rt,Pn.set("pmax",rt),E()},"W"),gt("Akku Energie (2S 850 mAh)",f,rt=>{f=rt,Pn.set("capwh",rt),E()},"Wh"),S("p",{class:"note"},"Die Vorschau rechnet kinematisch mit den Boot Parametern (Fahrt je %, Limits, Ballast F\xF6rderrate). Reale Regelung, Tr\xE4gheit und Str\xF6mung fehlen. Energie ist eine grobe Annahme, bitte mit Messung ersetzen."))),S("div",{class:"right"},S("div",{class:"vwrap"},_,v,S("div",{class:"vtools"},_n("Iso",()=>T.view("iso")),_n("Oben",()=>T.view("top")),_n("Seite",()=>T.view("side")),R,O,S("label",{class:"chk"},D," Kamera folgt"))),S("div",{class:"tlbar"},C,x,k),S("div",{class:"grid2c"},S("div",{class:"card tight"},S("h3",null,"Tiefenprofil"),b),S("div",{class:"card tight"},S("h3",null,"Draufsicht"),M)))),st),xt=()=>{if(requestAnimationFrame(xt),!i||!t)return;let rt=performance.now();e+=(rt-a)/1e3*r,a=rt,e>=t.stats.dur&&(e=t.stats.dur,i=!1,w()),$()};return xt(),Ee.on("par",()=>{j.tab==="mission"&&z()}),{el:Xt,show(){T.setActive(!0),W(),E()},hide(){T.setActive(!1),i=!1,w()},update(rt){rt.mis.run&&(l=rt.mis.i,tt())},sim:T,setTime(rt){e=rt,$()},get plan(){return t}}}var Tp=Math.PI/180,Is=(s,t,e)=>({x:(e-s.lon)*111200*Math.cos(s.lat*Tp),y:(t-s.lat)*111200}),wp=s=>{let t=Math.pow(10,Math.floor(Math.log10(s))),e=s/t;return(e<1.5?1:e<3.5?2:e<7.5?5:10)*t};function xu(s,t){let e=window.devicePixelRatio||1,i=s.clientWidth||600,r=s.clientHeight||400;(s.width!==i*e||s.height!==r*e)&&(s.width=i*e,s.height=r*e);let a=s.getContext("2d");a.setTransform(e,0,0,e,0,0),a.clearRect(0,0,i,r),a.fillStyle=Vt.bg,a.fillRect(0,0,i,r);let l=[...t.pts];if(t.home&&l.push(t.home),t.boat&&l.push(t.boat),!l.length){a.fillStyle=Vt.dim,a.font="13px Helvetica, Arial, sans-serif",a.textAlign="center",a.fillText(t.empty||"Noch keine Position",i/2,r/2);return}let h=t.home||l[0],u=l.map(D=>Is(h,D.lat,D.lon)),f=Math.min(...u.map(D=>D.x)),m=Math.max(...u.map(D=>D.x)),d=Math.min(...u.map(D=>D.y)),_=Math.max(...u.map(D=>D.y)),g=16;if(m-f<g){let D=(f+m)/2;f=D-g/2,m=D+g/2}if(_-d<g){let D=(d+_)/2;d=D-g/2,_=D+g/2}let b=36,M=Math.min((i-2*b)/(m-f),(r-2*b)/(_-d)),x=(f+m)/2,v=(d+_)/2,C=D=>i/2+(D-x)*M,w=D=>r/2-(D-v)*M,T=wp(60/M);a.strokeStyle=Vt.grid,a.lineWidth=1,a.fillStyle=Vt.dim,a.font="10px Helvetica, Arial, sans-serif",a.textAlign="left";for(let D=Math.ceil((x-i/2/M)/T)*T;D<x+i/2/M;D+=T)a.beginPath(),a.moveTo(C(D),0),a.lineTo(C(D),r),a.stroke();for(let D=Math.ceil((v-r/2/M)/T)*T;D<v+r/2/M;D+=T)a.beginPath(),a.moveTo(0,w(D)),a.lineTo(i,w(D)),a.stroke();a.lineWidth=2,a.lineJoin="round",a.lineCap="round";for(let D=1;D<t.pts.length;D++){let O=Is(h,t.pts[D-1].lat,t.pts[D-1].lon),A=Is(h,t.pts[D].lat,t.pts[D].lon);a.strokeStyle=t.pts[D].c||Vt.acc,a.beginPath(),a.moveTo(C(O.x),w(O.y)),a.lineTo(C(A.x),w(A.y)),a.stroke()}if(t.home&&t.boat){let D=Is(h,t.boat.lat,t.boat.lon);a.setLineDash([5,5]),a.strokeStyle=Vt.warn,a.lineWidth=1,a.beginPath(),a.moveTo(C(D.x),w(D.y)),a.lineTo(C(0),w(0)),a.stroke(),a.setLineDash([])}if(t.home&&(a.strokeStyle=Vt.ok,a.fillStyle=Vt.bg,a.lineWidth=2,a.beginPath(),a.arc(C(0),w(0),8,0,7),a.fill(),a.stroke(),a.fillStyle=Vt.ok,a.font="bold 10px Helvetica, Arial, sans-serif",a.textAlign="center",a.fillText("H",C(0),w(0)+3.5)),t.cursor){let D=Is(h,t.cursor.lat,t.cursor.lon);a.fillStyle=Vt.txt,a.beginPath(),a.arc(C(D.x),w(D.y),5,0,7),a.fill()}if(t.boat){let D=Is(h,t.boat.lat,t.boat.lon);a.save(),a.translate(C(D.x),w(D.y)),a.rotate((t.boat.h||0)*Tp),a.fillStyle=Vt.txt,a.beginPath(),a.moveTo(0,-10),a.lineTo(6,8),a.lineTo(0,4),a.lineTo(-6,8),a.closePath(),a.fill(),a.restore()}let k=wp(100/M),R=k*M;a.strokeStyle=Vt.txt,a.lineWidth=2,a.beginPath(),a.moveTo(14,r-16),a.lineTo(14+R,r-16),a.moveTo(14,r-20),a.lineTo(14,r-12),a.moveTo(14+R,r-20),a.lineTo(14+R,r-12),a.stroke(),a.fillStyle=Vt.txt,a.textAlign="left",a.font="11px Helvetica, Arial, sans-serif",a.fillText(k>=1e3?k/1e3+" km":k+" m",14,r-24),a.textAlign="center",a.fillText("N",i-20,22),a.strokeStyle=Vt.dim,a.beginPath(),a.moveTo(i-20,40),a.lineTo(i-20,28),a.stroke()}function Ep(){let s=[],t=null,e=null,i=S("canvas",{class:"map"}),r={fix:le("GPS",""),sat:le("Satelliten",""),hd:le("HDOP",""),spd:le("Fahrt","m/s"),dist:le("Distanz Home","m"),brg:le("Peilung","\xB0")},a={gps:an("GPS"),home:an("Home"),rth:an("RTH")},l=S("p",{class:"note"},"Die Karte arbeitet ohne Internet: Norden oben, Raster in Metern. Das GPS funktioniert nur an der Oberfl\xE4che, unter Wasser bleibt der letzte Fix stehen."),h=["aus","taucht auf","wartet auf GPS","f\xE4hrt zu Home","angekommen"],u=S("div",{class:"page"},S("div",{class:"chips"},Object.values(a).map(d=>d.el)),S("div",{class:"stats"},Object.values(r).map(d=>d.el)),S("div",{class:"toolbar"},S("button",{class:"btn",onclick:async()=>{let d=await Me("HOME SET","Home gesetzt");d&&d.ok&&f()}},"Home hier setzen"),S("button",{class:"btn primary",onclick:()=>Me("MODE RTH","Heimfahrt gestartet")},"Heimfahrt (RTH)"),S("button",{class:"btn",onclick:()=>Me("MODE DEPTH","RTH beendet")},"RTH beenden"),S("span",{class:"sp"}),S("button",{class:"btn",onclick:()=>{s.length=0,e=null,m()}},"Spur l\xF6schen")),S("div",{class:"mapwrap"},i),l);async function f(){if(!j.connected)return;let d=await j.link.cmd("HOME");d.ok&&d.data&&d.data.set?t={lat:d.data.lat,lon:d.data.lon}:t=null,m()}function m(){xu(i,{pts:s,home:t,boat:e?{lat:e.lat,lon:e.lon,h:e.h}:null,empty:"Noch kein GPS Fix. Boot an die Oberfl\xE4che mit freier Sicht zum Himmel."})}return Ee.on("conn",()=>{j.connected||(t=null,e=null)}),{el:u,show(){f(),setTimeout(m,30)},update(d){let _=d.gps;if(_){if(r.fix.set(_.ok?"Fix":"kein Fix",_.ok?"":"warn"),r.sat.set(String(_.sat)),r.hd.set(wt(_.hd,1)),r.spd.set(wt(_.spd,1)),r.dist.set(_.home?wt(_.dist,0):"\u2013"),r.brg.set(_.home?wt(_.brg,0):"\u2013"),a.gps.set(_.ok?`GPS ${_.sat} Sat`:"GPS kein Fix",_.ok?"ok":"warn"),a.home.set(_.home?"Home gesetzt":"Home fehlt",_.home?"ok":"warn"),a.rth.set(d.m==="RTH"?"RTH "+h[_.ph]:"RTH aus",d.m==="RTH"?"acc":""),_.ok){e={lat:_.lat,lon:_.lon,h:d.att[2]};let g=s[s.length-1];(!g||Math.hypot(...Object.values(Is(g,_.lat,_.lon)))>.5)&&(s.push({lat:_.lat,lon:_.lon,c:d.m==="RTH"?Vt.warn:Vt.acc}),s.length>5e3&&s.shift())}else e&&(e.h=d.att[2]);_.home&&!t&&f(),m()}}}}var Ap=["MANUAL","STAB","DEPTH","MISSION","FAILSAFE","RTH"],Tb=[Vt.dim,"#5f7fa6",Vt.acc,"#9a86d6",Vt.bad,Vt.warn],wl=36,Tl=16,Eb="#9a86d6";function Ab(s){if(s.length<Tl||String.fromCharCode(...s.slice(0,4))!=="FBB1")throw new Error("Keine FATHOM Blackbox Datei");let t=new DataView(s.buffer,s.byteOffset,s.byteLength),e=t.getUint16(4,!0),i=t.getUint16(6,!0);if(e!==wl)throw new Error("Datensatzgr\xF6\xDFe "+e+" wird nicht unterst\xFCtzt");let r=Math.floor((s.length-Tl)/wl),a=[];for(let l=0;l<r;l++){let h=Tl+l*wl;a.push({t:t.getUint32(h,!0)/1e3,depth:t.getInt16(h+4,!0)/100,tgt:t.getInt16(h+6,!0)/100,roll:t.getInt16(h+8,!0)/10,pitch:t.getInt16(h+10,!0)/10,yaw:t.getUint16(h+12,!0)/10,vbat:t.getUint16(h+14,!0)/100,leak:t.getUint8(h+16)/255,mode:t.getUint8(h+17),flags:t.getUint8(h+18),fill:t.getUint8(h+19),thr:t.getInt8(h+20),pump:t.getInt8(h+21),rud:t.getInt8(h+22),stern:t.getInt8(h+23),bow:t.getInt8(h+24),lat:t.getInt32(h+25,!0)/1e7,lon:t.getInt32(h+29,!0)/1e7,sats:t.getUint8(h+33),rssi:t.getInt8(h+34)})}return{hz:i,recs:a}}var Pb=s=>`t_s,tiefe_m,ziel_m,roll,nick,kurs,akku_v,leck,modus,flags,ballast,gas,pumpe,ruder,heck,bug,lat,lon,sat,rssi
`+s.recs.map(t=>[t.t,t.depth,t.tgt,t.roll,t.pitch,t.yaw,t.vbat,t.leak.toFixed(3),Ap[t.mode]||t.mode,t.flags,t.fill,t.thr,t.pump,t.rud,t.stern,t.bow,t.lat,t.lon,t.sats,t.rssi].join(",")).join(`
`),Sl=[{name:"Tiefe",unit:"m",inv:!0,min:0,s:[{k:"depth",n:"Tiefe",c:Vt.acc},{k:"tgt",n:"Ziel",c:Vt.warn,dash:1}]},{name:"Lage",unit:"\xB0",s:[{k:"pitch",n:"Nick",c:Vt.acc},{k:"roll",n:"Roll",c:Vt.warn}]},{name:"Kurs",unit:"\xB0",min:0,max:360,s:[{k:"yaw",n:"Kurs",c:Vt.ok}]},{name:"Antrieb und Ballast",unit:"%",s:[{k:"thr",n:"Gas",c:Vt.acc},{k:"pump",n:"Pumpe",c:Vt.warn},{k:"fill",n:"Ballast",c:Eb}]},{name:"Ruder",unit:"\xB0",s:[{k:"rud",n:"Seite",c:Vt.ok},{k:"stern",n:"Heck",c:Vt.acc},{k:"bow",n:"Bug",c:Vt.warn}]},{name:"Akku",unit:"V",s:[{k:"vbat",n:"Akku",c:Vt.ok}],dec:2},{name:"Leckage",unit:"",min:0,max:1,s:[{k:"leak",n:"Leck",c:Vt.bad}],dec:2}],Tr=104,Ds=18,ci=46;function Cb(s){let t=S("canvas",{class:"logcv"}),e=null,i=0,r=1,a=null,l=null,h=()=>window.devicePixelRatio||1,u=()=>Sl.length*Tr+Ds+22;function f(g){let b=e.recs,M=0,x=b.length-1;for(;M<x;){let v=M+x>>1;b[v].t<g?M=v+1:x=v}return M}function m(){let g=t.clientWidth||800,b=u(),M=h();(t.height!==b*M||t.width!==g*M)&&(t.width=g*M,t.height=b*M,t.style.height=b+"px");let x=t.getContext("2d");if(x.setTransform(M,0,0,M,0,0),x.fillStyle=Vt.bg,x.fillRect(0,0,g,b),!e)return;let v=e.recs,C=O=>ci+(O-i)/(r-i)*(g-ci-10),w=Math.max(0,f(i)-1),T=Math.min(v.length-1,f(r)+1);x.font="10px Helvetica, Arial, sans-serif";for(let O=w;O<T;O++){let A=C(v[O].t),E=C(v[O+1].t);x.fillStyle=Tb[v[O].mode]||Vt.dim,x.fillRect(A,0,Math.max(1,E-A+.5),Ds-4)}let k=-1;x.fillStyle=Vt.txt,x.textAlign="left";for(let O=w;O<=T;O++)if(v[O].mode!==k){k=v[O].mode;let A=C(v[O].t);A>ci-2&&A<g-60&&x.fillText(Ap[k]||"?",A+3,10)}Sl.forEach((O,A)=>{let E=Ds+A*Tr,B=E+Tr-14,z=O.min,G=O.max;if(z===void 0||G===void 0){let tt=1e9,W=-1e9;for(let V=w;V<=T;V++)O.s.forEach(lt=>{let st=v[V][lt.k];lt.k==="tgt"&&st===0&&!(v[V].mode===2||v[V].mode===3)||(tt=Math.min(tt,st),W=Math.max(W,st))});tt>W&&(tt=0,W=1);let ht=(W-tt)*.12||.5;z===void 0&&(z=tt-ht),G===void 0&&(G=W+ht)}O.k0===void 0&&O.min===0&&z<0&&(z=0);let $=tt=>O.inv?E+6+(tt-z)/(G-z||1)*(B-E-6):B-(tt-z)/(G-z||1)*(B-E-6);x.strokeStyle=Vt.grid,x.lineWidth=1,x.fillStyle=Vt.dim,x.textAlign="right";for(let tt=0;tt<=2;tt++){let W=z+(G-z)*tt/2,ht=$(W);x.beginPath(),x.moveTo(ci,ht),x.lineTo(g-10,ht),x.stroke(),x.fillText(W.toFixed(O.dec??(Math.abs(G-z)<5?1:0)),ci-5,ht+3)}if(x.textAlign="left",x.fillStyle=Vt.txt,x.font="600 11px Helvetica, Arial, sans-serif",x.fillText(O.name+(O.unit?" ("+O.unit+")":""),ci+6,E+12),x.font="10px Helvetica, Arial, sans-serif",x.save(),x.beginPath(),x.rect(ci,E,g-ci-10,Tr-12),x.clip(),O.s.forEach(tt=>{x.strokeStyle=tt.c,x.lineWidth=tt.dash?1.2:1.6,x.setLineDash(tt.dash?[4,3]:[]),x.beginPath();let W=!1,ht=-9;for(let V=w;V<=T;V++){let lt=C(v[V].t);if(lt-ht<.6&&V<T)continue;ht=lt;let st=v[V][tt.k];if(tt.k==="tgt"&&!(v[V].mode===2||v[V].mode===3)){W=!1;continue}let ot=$(st);W?x.lineTo(lt,ot):(x.moveTo(lt,ot),W=!0)}x.stroke(),x.setLineDash([])}),x.restore(),a!==null){let tt=v[f(a)],W=g-14;x.textAlign="right";for(let ht=O.s.length-1;ht>=0;ht--){let V=O.s[ht],lt=V.n+" "+tt[V.k].toFixed(O.dec??1);x.fillStyle=V.c,x.fillText(lt,W,E+12),W-=x.measureText(lt).width+12}}});let R=r-i,D=[1,2,5,10,15,30,60,120,300,600,1800].find(O=>R/O<12)||3600;x.fillStyle=Vt.dim,x.textAlign="center",x.strokeStyle=Vt.grid;for(let O=Math.ceil(i/D)*D;O<r;O+=D){let A=C(O);x.beginPath(),x.moveTo(A,Ds),x.lineTo(A,Ds+Sl.length*Tr-14),x.stroke(),x.fillText(O>=60?`${Math.floor(O/60)}:${String(Math.round(O%60)).padStart(2,"0")}`:O+" s",A,b-4)}if(a!==null){let O=C(a);x.strokeStyle=Vt.txt,x.lineWidth=1,x.beginPath(),x.moveTo(O,Ds-2),x.lineTo(O,Ds+Sl.length*Tr-14),x.stroke()}}let d=g=>{let b=t.getBoundingClientRect();return i+(g.clientX-b.left-ci)/(b.width-ci-10)*(r-i)};t.addEventListener("mousemove",g=>{if(!e)return;let b=wn(d(g),e.recs[0].t,e.recs[e.recs.length-1].t);if(l){let M=(l.x-g.clientX)/(t.clientWidth-ci)*(l.v1-l.v0);i=l.v0+M,r=l.v1+M,_()}a=b,s(e.recs[f(b)]),m()}),t.addEventListener("mouseleave",()=>{a=null,s(null),m()}),t.addEventListener("mousedown",g=>{l={x:g.clientX,v0:i,v1:r}}),window.addEventListener("mouseup",()=>{l=null}),t.addEventListener("dblclick",()=>{e&&(i=e.recs[0].t,r=e.recs[e.recs.length-1].t,m())}),t.addEventListener("wheel",g=>{if(!e)return;g.preventDefault();let b=d(g),M=g.deltaY>0?1.25:.8;i=b-(b-i)*M,r=b+(r-b)*M,_(),m()},{passive:!1});function _(){let g=e.recs[0].t,b=e.recs[e.recs.length-1].t;r-i>b-g&&(i=g,r=b),i<g&&(r+=g-i,i=g),r>b&&(i-=r-b,r=b)}return window.addEventListener("resize",()=>m()),{el:t,set(g){e=g,i=g.recs[0].t,r=g.recs[g.recs.length-1].t,r<=i&&(r=i+1),a=null,m()},draw:m}}function Pp(){let s=null,t="",e=S("div",{class:"bblist"}),i=S("div",{class:"bar-t",style:{display:"none"}},S("div",{class:"bar-fill"})),r=S("div",{class:"stats"}),a=S("canvas",{class:"map small"}),l=S("p",{class:"note"}),h=Cb(w=>{u=w,C()}),u=null,f=!1,m=S("p",{class:"note"},"Noch keine Aufzeichnung geladen. Die Blackbox schreibt im ARM Zustand. Zum Auslesen DISARM, dann hier laden (USB oder WLAN)."),d=S("div",{style:{display:"none"}},r,S("section",{class:"card tight"},h.el,S("p",{class:"note"},"Mausrad zoomt, ziehen verschiebt, Doppelklick zeigt alles.")),S("section",{class:"card"},S("h3",null,"Spur (GPS Fixes an der Oberfl\xE4che)"),S("div",{class:"mapwrap"},a),l)),_=S("div",{class:"toolbar"},S("button",{class:"btn",onclick:()=>M()},"Liste aktualisieren"),S("button",{class:"btn",onclick:async()=>{let w=await b();w&&v(w.u8,w.name)}},"Datei \xF6ffnen"),S("span",{class:"sp"}),S("button",{class:"btn",onclick:()=>Ai(t.replace(/\.bin$/,"")+".csv",Pb(s),"text/csv"),id:"bbcsv",disabled:!0},"CSV exportieren"),S("button",{class:"btn warnb",onclick:async()=>{confirm("Alle Blackbox Dateien im Boot l\xF6schen?")&&((await j.link.cmd("BB CLEAR",8e3)).ok&&re("Gel\xF6scht","ok"),M())}},"Boot Speicher leeren")),g=S("div",{class:"page"},_,S("section",{class:"card"},S("h3",null,"Aufzeichnungen im Boot"),e,i),m,d);async function b(){return new Promise(w=>{let T=S("input",{type:"file",accept:".bin"});T.onchange=async()=>{let k=T.files[0];if(!k)return w(null);w({name:k.name,u8:new Uint8Array(await k.arrayBuffer())})},T.click()})}async function M(){if(e.innerHTML="",!j.connected){e.append(S("p",{class:"note"},"Nicht verbunden."));return}let[w,T]=[await j.link.cmd("BB INFO"),await j.link.cmd("BB LIST",4e3)];if(!T.ok||!Array.isArray(T.data)){e.append(S("p",{class:"note"},T.text.includes("DISARM")?"Erst DISARM, dann l\xE4sst sich die Blackbox auslesen.":"Keine Antwort: "+T.text));return}w.ok&&w.data&&e.append(S("p",{class:"note"},`Frei: ${(w.data.free/1024).toFixed(0)} von ${(w.data.total/1024).toFixed(0)} kB`)),T.data.length||e.append(S("p",{class:"note"},"Keine Aufzeichnungen.")),T.data.forEach(k=>{let R=parseInt((/bb_(\d+)/.exec(k.f)||[])[1]||0,10),D=Math.max(0,Math.floor((k.n-Tl)/wl));e.append(S("div",{class:"bbrow"},S("b",null,k.f),S("span",{class:"dim"},`${(k.n/1024).toFixed(1)} kB, ${D} Datens\xE4tze`),S("span",{class:"sp"}),S("button",{class:"btn primary",disabled:f,onclick:()=>x(R,k.f,!1)},"Laden und anzeigen"),S("button",{class:"btn",disabled:f,onclick:()=>x(R,k.f,!0)},"Als .bin sichern")))})}async function x(w,T,k){if(f)return;f=!0,i.style.display="";let R=i.firstChild;R.style.width="0",R.style.left="0";let D=Number((await j.link.cmd("BB LIST",4e3)).data?.find(A=>A.f===T)?.n)||1,O=await j.link.dump(w,A=>{R.style.width=Math.min(100,A/D*100)+"%"});if(f=!1,i.style.display="none",M(),!O.ok){re(O.text,"bad",6e3);return}k&&(Ai(T,O.bytes,"application/octet-stream"),re("Gespeichert: "+T,"ok")),v(O.bytes,T)}function v(w,T){try{s=Ab(w)}catch(G){re(G.message,"bad",6e3);return}if(!s.recs.length){re("Die Datei enth\xE4lt keine Datens\xE4tze","warn");return}t=T,m.style.display="none",d.style.display="",g.querySelector("#bbcsv").disabled=!1;let k=s.recs,R=k[k.length-1].t-k[0].t,D=0,O=99,A=0,E=0,B=0,z=null;k.forEach((G,$)=>{D=Math.max(D,G.depth),G.vbat>0&&(O=Math.min(O,G.vbat)),A=Math.max(A,Math.abs(G.pitch)),$&&G.mode===4&&k[$-1].mode!==4&&B++,G.flags&4&&G.sats&&(z&&(E+=Math.hypot((G.lat-z.lat)*111200,(G.lon-z.lon)*75900)),z=G)}),r.innerHTML="",[["Datei",T],["Dauer",hs(R)],["Rate",s.hz+" Hz"],["Max Tiefe",wt(D,2)+" m"],["Min Akku",wt(O,2)+" V"],["Max Nick",wt(A,0)+" \xB0"],["GPS Strecke",wt(E,0)+" m"],["Failsafe",String(B)]].forEach(([G,$])=>r.append(S("div",{class:"stat"},S("span",null,G),S("div",null,S("b",{style:{fontSize:G==="Datei"?"14px":""}},$))))),h.set(s),setTimeout(C,30)}function C(){if(!s)return;let w=s.recs.filter(R=>R.flags&4&&R.sats&&R.lat);l.textContent=w.length?`${w.length} Fixes. Der Cursor im Diagramm wandert auf die n\xE4chste bekannte Position.`:"Kein GPS Fix in dieser Aufzeichnung.";let T=w.map(R=>({lat:R.lat,lon:R.lon,c:R.mode===5?Vt.warn:Vt.acc})),k=null;if(u&&w.length){let R=w[0];w.forEach(D=>{Math.abs(D.t-u.t)<Math.abs(R.t-u.t)&&(R=D)}),k={lat:R.lat,lon:R.lon}}xu(a,{pts:T,home:T.length?{lat:T[0].lat,lon:T[0].lon}:null,cursor:k,empty:"Kein GPS Fix in dieser Aufzeichnung"})}return{el:g,show(){M(),s&&(h.draw(),C())},update(){}}}var hi=Wm(Rp(),1);var Dp=Math.PI/180,Np=(s,t)=>({x:(t.lon-s.lon)*111200*Math.cos(s.lat*Dp),y:(t.lat-s.lat)*111200}),bu=(s,t)=>{let e=Np(s,t);return{dist:Math.hypot(e.x,e.y),brg:(Math.atan2(e.x,e.y)/Dp+360)%360}},po=(s,t,e="")=>S("button",{class:"btn "+e,onclick:t},s),Mu=(s,t)=>`https://wmts.geo.admin.ch/1.0.0/${s}/default/current/3857/{z}/{x}/{y}.${t}`,Lp='\xA9 <a href="https://www.swisstopo.admin.ch" target="_blank">swisstopo</a>',Rb='Seetiefen: swissBATHY3D \xA9 <a href="https://www.swisstopo.admin.ch/de/hoehenmodell-swissbathy3d" target="_blank">swisstopo</a> (Quelle: Bundesamt f\xFCr Landestopografie)',Ip={"Landeskarte (swisstopo)":()=>hi.default.tileLayer(Mu("ch.swisstopo.pixelkarte-farbe","jpeg"),{maxZoom:19,maxNativeZoom:18,attribution:Lp}),"Luftbild (swisstopo)":()=>hi.default.tileLayer(Mu("ch.swisstopo.swissimage","jpeg"),{maxZoom:19,maxNativeZoom:18,attribution:Lp}),OpenStreetMap:()=>hi.default.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,referrerPolicy:"strict-origin",attribution:'\xA9 <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> Mitwirkende'})},Lb=()=>hi.default.tileLayer(Mu("ch.swisstopo.swissbathy3d-reliefschattierung","png"),{maxZoom:19,maxNativeZoom:17,opacity:.7,attribution:Rb}),Op=!1,Ib=()=>{if(Op)return!0;try{return sessionStorage.getItem("fathom.map")==="1"}catch{return!1}},yu=(s,t)=>hi.default.divIcon({className:"",html:`<div class="wpi ${t||""}">${s}</div>`,iconSize:[26,26],iconAnchor:[13,13]});function Db(s,t,e){let i=e.ms,r=[{t:"WAIT",v:[e.wait,0,0,0]}],a=s,l=0,h=[];return t.forEach((u,f)=>{let m=bu(a,u),d=wn(u.spd,1,100);r.push({t:"TURN",v:[Math.round(m.brg),0,15,12]});let _=0;Math.abs(u.depth-l)>.05&&(r.push({t:"DIVE",v:[u.depth,e.rate,e.pitch,d]}),_=Math.abs(u.depth-l)/e.rate);let g=d*i,b=Math.max(1,Math.round(m.dist/g-_));b>7200&&h.push(`Weg ${f+1} dauert \xFCber 2 h, Schritt wird auf 7200 s gek\xFCrzt`),r.push({t:"CRUISE",v:[d,Math.round(m.brg),Math.min(b,7200),0]}),l=u.depth,a=u}),e.beacon&&r.push({t:"BEACON",v:[2,0,0,0]}),r.push({t:"SURFACE",v:[0,0,0,0]}),{steps:r,notes:h}}function Up(){let s=Pn.get("mapplan",{start:null,wps:[],base:"Landeskarte (swisstopo)",shade:!0,op:.7,dd:5,ds:25,beacon:!0,rth:!0}),t=null,e=null,i=null,r=[],a=null,l=null,h=null,u="wp",f=0,m=S("div",{class:"leaflet-host"}),d=S("div",{class:"wptable"}),_=S("div",{class:"warns"}),g={net:an("Karte"),gps:an("Boot GPS")},b={n:le("Wegpunkte"),len:le("Strecke","m"),t:le("Fahrzeit"),z:le("Max Tiefe","m"),e:le("Ende zu Start","m")},M=()=>Pn.set("mapplan",s),x=()=>j.get("spd.ms_per_pct",.014),v=S("select",{class:"in sm",onchange:()=>{s.base=v.value,B(),M()}},Object.keys(Ip).map(st=>S("option",{value:st,selected:st===s.base},st))),C=S("input",{type:"checkbox",checked:s.shade,onchange:()=>{s.shade=C.checked,z(),M()}}),w=S("input",{type:"range",min:.1,max:1,step:.05,value:s.op,class:"sl",oninput:()=>{s.op=+w.value,i&&i.setOpacity(s.op),M()}}),T=S("input",{class:"in num",type:"number",min:0,max:90,step:.5,value:s.dd,onchange:()=>{s.dd=wn(+T.value,0,90),M()}}),k=S("input",{class:"in num",type:"number",min:1,max:100,step:1,value:s.ds,onchange:()=>{s.ds=wn(+k.value,1,100),M()}}),R=S("input",{type:"checkbox",checked:s.beacon,onchange:()=>{s.beacon=R.checked,M()}}),D=S("input",{type:"checkbox",checked:s.rth,onchange:()=>{s.rth=D.checked,M()}}),O=(st,ot)=>{let yt=po(ot,()=>{u=st,E()});return yt.dataset.k=st,yt},A=[O("start","Startpunkt setzen"),O("wp","Wegpunkte setzen")],E=()=>A.forEach(st=>st.classList.toggle("primary",st.dataset.k===u));function B(){t&&(e&&t.removeLayer(e),e=Ip[s.base](),e.on("tileerror",G),e.addTo(t),e.bringToBack())}function z(){t&&(i&&(t.removeLayer(i),i=null),s.shade&&(i=Lb(),i.setOpacity(s.op),i.on("tileerror",G),i.addTo(t)))}function G(){++f===8&&(g.net.set("keine Kacheln: Internet?","warn"),re("Kartenkacheln laden nicht. Der Planer braucht Internet, nicht das Boot WLAN.","warn",6e3))}function $(){if(!t)return;r.forEach(ot=>t.removeLayer(ot)),r=[],a&&(t.removeLayer(a),a=null);let st=[];if(s.start){let ot=hi.default.marker([s.start.lat,s.start.lon],{icon:yu("S","st"),draggable:!0}).addTo(t);ot.on("dragend",()=>{let yt=ot.getLatLng();s.start={lat:yt.lat,lon:yt.lng},M(),$()}),r.push(ot),st.push([s.start.lat,s.start.lon])}s.wps.forEach((ot,yt)=>{let bt=hi.default.marker([ot.lat,ot.lon],{icon:yu(yt+1),draggable:!0}).addTo(t);bt.on("dragend",()=>{let K=bt.getLatLng();ot.lat=K.lat,ot.lon=K.lng,M(),$()}),r.push(bt),st.push([ot.lat,ot.lon])}),st.length>1&&(a=hi.default.polyline(st,{color:"#ffb02e",weight:3,dashArray:"8 6"}).addTo(t)),W(),tt()}function tt(){let st=s.start,ot=0,yt=0,bt=0,K=st,pt=[];s.wps.forEach((gt,Xt)=>{if(!K){K=gt;return}let xt=bu(K,gt);ot+=xt.dist,yt+=xt.dist/(Math.max(gt.spd,1)*x()),bt=Math.max(bt,gt.depth),K=gt}),b.n.set(String(s.wps.length)),b.len.set(wt(ot,0)),b.t.set(ot?hs(yt):"\u2013"),b.z.set(wt(bt,1),bt>j.get("lim.depth",3)?"bad":""),b.e.set(st&&s.wps.length?wt(Math.hypot(...Object.values(Np(st,s.wps[s.wps.length-1]))),0):"\u2013"),_.innerHTML="";let Mt=gt=>_.append(S("div",{class:"w"},gt));bt>j.get("lim.depth",3)&&Mt(`Tiefe ${wt(bt,1)} m liegt \xFCber dem Parameter lim.depth (${wt(j.get("lim.depth",3),1)} m): das Boot l\xF6st dort Failsafe aus. Erst lim.depth erh\xF6hen.`),s.wps.some(gt=>gt.spd>j.get("lim.throttle",35))&&Mt(`Fahrt \xFCber lim.throttle (${j.get("lim.throttle",35)} %): wird begrenzt, Fahrzeit stimmt dann nicht.`),s.wps.length*3+3>64&&Mt("Zu viele Wegpunkte: Boot speichert h\xF6chstens 64 Schritte (je Wegpunkt bis 3 Schritte)."),s.wps.length&&!s.start&&Mt('Startpunkt fehlt: erst "Startpunkt setzen", dann Wegpunkte.'),j.get("spd.ms_per_pct",.014)===.014&&!j.connected&&Mt("Fahrtfaktor spd.ms_per_pct steht auf Standard (0.014 m/s je %). Echten Wert mit einer gemessenen Strecke bestimmen, sonst stimmen die Zeiten nicht.")}function W(){if(d.innerHTML="",!s.wps.length){d.append(S("p",{class:"note"},"Noch keine Wegpunkte. Karte antippen, um Wegpunkte zu setzen. Marker lassen sich verschieben."));return}let st=S("tr",null,["#","Tiefe (m)","Fahrt (%)","Weg (m)","Kurs (\xB0)",""].map(bt=>S("th",null,bt))),ot=S("tbody"),yt=s.start;s.wps.forEach((bt,K)=>{let pt=yt?bu(yt,bt):{dist:0,brg:0};yt=bt;let Mt=S("input",{class:"in num",type:"number",min:0,max:90,step:.5,value:bt.depth,onchange:()=>{bt.depth=wn(+Mt.value,0,90),M(),tt()}}),gt=S("input",{class:"in num",type:"number",min:1,max:100,step:1,value:bt.spd,onchange:()=>{bt.spd=wn(+gt.value,1,100),M(),tt()}});ot.append(S("tr",null,S("td",null,S("b",null,K+1)),S("td",null,Mt),S("td",null,gt),S("td",null,wt(pt.dist,0)),S("td",null,wt(pt.brg,0)),S("td",null,S("button",{class:"ib del",title:"l\xF6schen",onclick:()=>{s.wps.splice(K,1),M(),$()}},"\u2715"))))}),d.append(S("table",{class:"ptable"},S("thead",null,st),ot))}async function ht(){if(!s.start||!s.wps.length)return re("Startpunkt und mindestens einen Wegpunkt setzen","warn");let st=Db(s.start,s.wps,{ms:x(),wait:10,rate:.15,pitch:15,beacon:s.beacon});if(st.steps.length>64)return re(`${st.steps.length} Schritte, maximal 64. Weniger Wegpunkte setzen.`,"bad",5e3);Pn.set("mission",st.steps),Ee.emit("mission:set",st.steps),st.notes.forEach(ot=>re(ot,"warn",5e3)),s.rth?j.connected?await Me("SET mis.end_rth 1","RTH nach Mission aktiviert"):re("Nach Verbinden mis.end_rth auf 1 setzen, sonst bleibt das Boot nach Missionsende an der Oberfl\xE4che stehen.","warn",7e3):j.connected&&await Me("SET mis.end_rth 0"),re(`Mission mit ${st.steps.length} Schritten \xFCbernommen`,"ok"),Ee.emit("goto","mission")}function V(){Ai("fathom_plan.json",JSON.stringify({start:s.start,wps:s.wps},null,1))}return{el:S("div",{class:"page"},S("div",{class:"chips"},Object.values(g).map(st=>st.el)),S("div",{class:"stats"},Object.values(b).map(st=>st.el)),S("div",{class:"toolbar"},A,S("span",{class:"sp"}),v,S("label",{class:"chk"},C," Seerelief"),w),S("div",{class:"mapwrap"},m),S("div",{class:"toolbar"},S("label",{class:"fld inl"},S("span",null,"Tiefe neuer Punkt (m)"),T),S("label",{class:"fld inl"},S("span",null,"Fahrt neuer Punkt (%)"),k),S("label",{class:"chk"},R," Beacon am Ende"),S("label",{class:"chk"},D," Heimfahrt nach Ende (RTH)"),S("span",{class:"sp"}),po("Letzten l\xF6schen",()=>{s.wps.pop(),M(),$()}),po("Alles l\xF6schen",()=>{confirm("Plan l\xF6schen?")&&(s.wps=[],s.start=null,M(),$())}),po("Plan sichern",V),po("Zur Mission machen",ht,"primary")),_,d,S("p",{class:"note"},"Kurs und Zeit werden aus Start, Wegpunkten und Fahrtfaktor gerechnet (Koppelnavigation). Unter Wasser gibt es kein GPS, Str\xF6mung und Drift werden nicht ausgeglichen. An der Oberfl\xE4che korrigiert das Boot nur beim Heimfahren (RTH). Die Karte l\xE4dt nur mit Internet, plane also zuhause und verbinde danach mit dem Boot WLAN. Kartenquellen: swisstopo (Landeskarte, Luftbild, swissBATHY3D Seerelief) und OpenStreetMap.")),show(){if(!t&&!Ib()){m.firstChild||m.append(S("div",{class:"mapgate"},S("h4",null,"Karte laden"),S("p",null,"Die Karte l\xE4dt Kartenkacheln direkt von swisstopo (Bundesamt f\xFCr Landestopografie) und auf Wunsch von OpenStreetMap. Dabei erhalten diese Dienste Ihre IP-Adresse. Ohne Klick wird nichts geladen."),S("button",{class:"btn primary",onclick:()=>{try{sessionStorage.setItem("fathom.map","1")}catch{Op=!0}m.innerHTML="",this.show()}},"Karte laden")));return}t||(t=hi.default.map(m,{center:s.start?[s.start.lat,s.start.lon]:[47,8.38],zoom:s.start?15:11,attributionControl:!0}),t.attributionControl.setPrefix(!1),t.on("click",st=>{let ot={lat:st.latlng.lat,lon:st.latlng.lng};u==="start"||!s.start?(s.start=ot,u==="start"&&(u="wp",E())):s.wps.push({...ot,depth:s.dd,spd:s.ds}),M(),$()}),B(),z(),E(),$(),g.net.set("Karte: swisstopo","ok")),setTimeout(()=>t.invalidateSize(),60)},update(st){let ot=st.gps;!ot||!t||(g.gps.set(ot.ok?`Boot GPS ${ot.sat} Sat`:"Boot GPS kein Fix",ot.ok?"ok":"warn"),ot.ok&&(l?l.setLatLng([ot.lat,ot.lon]):l=hi.default.marker([ot.lat,ot.lon],{icon:yu("B","boat"),interactive:!1}).addTo(t)))}}}var ze=s=>{let t=j.par[s];if(t!==void 0)return+t;let e=Cn.find(i=>i.k===s);return e?e.d:0},Nb=["led.mode","led.bright","led.ready_s","led.armed","led.mission","led.errors","led.depth_step","led.lamp_test","beacon.mode","beacon.watch","beacon.dark_dive","beacon.low_bat","beacon.rc_loss","beacon.strobe_max","gps.off_depth","gps.off_delay"];async function Cl(s,t){if(j.connected){let e=await Wr(s,t);e&&e.ok&&Ee.emit("sig:dirty");return}j.par[s]=+t,Ee.emit("par")}var Ob=["","Akku","Leckage","Tiefe","Sensor","Funkverlust","Befehl"];function Ub(s,t){let e=!1,i=!1,r=ze("led.mode"),a=s.depth<.5;if(r===0||r===2&&!a)return[e,i];let l=r!==3;if(s.estop)return[!1,!0];let h=t%3e3;if(ze("led.errors")>.5&&s.code>0&&h<s.code*280&&(i=h%280<120),!l)return[e,i];if(s.armed&&s.failsafe)return[e,i];let u=ze("led.depth_step");if(s.armed&&u>.5&&s.depth>.5){let m=Math.min(9,Math.floor(s.depth/u)+1),d=t%4e3;return[d<m*400&&d%400<150,i]}if(s.test)return[Math.floor(t/500)%2===1,i];if(s.armed&&s.mis){let m=ze("led.mission");return[m===0?Math.floor(t/125)%2===1:m===1,i]}if(s.armed){let m=ze("led.armed"),d=t%2e3;return[m===0?!0:m===1?d<100||d>250&&d<350:!1,i]}let f=Math.max(1e3,ze("led.ready_s")*1e3);return[t%f<120,i]}function kb(s){let t=s.armed&&ze("beacon.watch")>.5?1:0,e=ze("beacon.mode"),i=s.depth<.3,r=0;return s.armed&&(e>=3||e>=2&&s.misDone&&i)&&!(ze("beacon.strobe_max")>.5&&s.strobeMin>ze("beacon.strobe_max"))&&(r=2),s.armed&&i&&ze("beacon.low_bat")>.5&&s.lowBat&&(r=3),s.armed&&i&&ze("beacon.rc_loss")>.5&&s.rcLost&&(r=3),s.armed&&s.failsafe&&e>=1&&(r=3),ze("beacon.dark_dive")>.5&&s.depth>1&&(r=0),r>t&&(t=r),(s.estop||s.leakAlarm)&&(t=4),t}function Bb(s,t){return s===2?[t%1e3<60,!1]:s===3?[!1,t%800<120]:s===4?[t%1e3<60||t%1e3>500&&t%1e3<560,t%250<100]:[!1,!1]}var Fb=["aus","scharf, dunkel und wachsam","Strobe weiss: Wiederfinden","roter Blitz: Warnung","Alarm: rot schnell und Strobe"],Su=[["bereit","Bereit",{}],["armed","Scharf",{armed:1}],["mission","Mission",{armed:1,mis:1,depth:.2}],["deep","Getaucht 12 m",{armed:1,mis:1,depth:12}],["done","Nach der Mission",{armed:1,misDone:1}],["bat","Akku-Warnung",{armed:1,code:1,lowBat:1}],["rc","Funkverlust",{armed:1,rcLost:1}],["leak","Leckage",{armed:1,failsafe:1,code:2,depth:.1,leakAlarm:1}],["fs","Failsafe Tiefe",{armed:1,failsafe:1,code:3,depth:4}],["estop","Not-Aus",{estop:1,code:2}]],kp={armed:0,mis:0,test:0,depth:0,estop:0,failsafe:0,code:0,misDone:0,lowBat:0,rcLost:0,leakAlarm:0,strobeMin:0};function zb(s){let t=s.fs||"",e=t?/^BATT/.test(t)?1:/^(LECK|NOTAUS)/.test(t)?2:/^(TIEFE|TIMEOUT)/.test(t)?3:/^SENSOR/.test(t)?4:/^RC/.test(t)?5:6:s.w?1:0;return{...kp,armed:!!s.arm,mis:!!(s.mis&&s.mis.run),test:!!s.tst,depth:+s.d||0,estop:!!s.es,failsafe:s.m==="FAILSAFE",code:e,rcLost:!s.rcok,lowBat:s.vb>1&&s.vb<ze("bat.warn")}}var Al=(s,t)=>{let e=S("div",{class:"seg",role:"radiogroup"}),i=()=>{e.innerHTML="",t.forEach(([r,a])=>e.append(S("button",{class:"segb"+(ze(s)===r?" on":""),role:"radio","aria-checked":ze(s)===r?"true":"false",onclick:async()=>{await Cl(s,r),i()}},a)))};return i(),{el:e,draw:i}},Er=(s,t,e)=>{let i=S("input",{type:"checkbox",onchange:async()=>{await Cl(s,i.checked?1:0)}});return{el:S("label",{class:"tog"},i,S("span",{class:"tsw","aria-hidden":"true"}),S("span",{class:"tl"},S("b",null,t),e?S("small",null,e):null)),draw:()=>{i.checked=ze(s)>.5}}},Ar=(s,t,e,i,r,a)=>{let l=S("b",{class:"sv"}),h=S("input",{type:"range",class:"sl",min:e,max:i,step:r,oninput:()=>{l.textContent=a(+h.value)},onchange:async()=>{await Cl(s,+h.value)}});return{el:S("div",{class:"sld"},S("div",{class:"sh"},S("span",null,t),l),h),draw:()=>{h.value=ze(s),l.textContent=a(ze(s))}}},Pl=(s,t)=>S("div",{class:"sigrow"},S("span",{class:"sigl"},s),t);function Bp(){let s="mission",t=!1,e=performance.now(),i=0,r=null,a=[],l=z=>(a.push(z),z.el),h=S("div",{class:"lamp g"}),u=S("div",{class:"lamp r"}),f=S("div",{class:"lamp w"}),m=S("div",{class:"lamp r sm"}),d=S("p",{class:"sigstate"}),_=S("p",{class:"sigstate"}),g=S("div",{class:"seg wrap"}),b=S("input",{type:"checkbox",onchange:()=>{t=b.checked,x()}}),M=S("tbody");function x(){g.innerHTML="",Su.forEach(([z,G])=>g.append(S("button",{class:"segb"+(!t&&s===z?" on":""),disabled:t,onclick:()=>{s=z,e=performance.now(),x()}},G)))}let v=()=>{if(t&&r)return zb(r);let z=Su.find(G=>G[0]===s);return{...kp,...z?z[2]:{}}};function C(z){i=requestAnimationFrame(C);let G=Math.floor(z-e),$=v(),[tt,W]=Ub($,G),ht=.25+.75*ze("led.bright")/100;h.style.opacity=tt?ht:.08,u.style.opacity=W?ht:.08,h.classList.toggle("on",tt),u.classList.toggle("on",W);let V=t&&r&&r.bc!==void 0&&!j.demo?r.bc:kb($),[lt,st]=Bb(V,G);f.classList.toggle("on",lt),m.classList.toggle("on",st),f.style.opacity=lt?1:.08,m.style.opacity=st?1:.08;let ot=t?r?"Live vom Boot":"Live: keine Telemetrie":(Su.find(yt=>yt[0]===s)||[])[1];d.textContent=ot+($.depth>.4?`, Tiefe ${wt($.depth,1)} m`:""),_.textContent="Beacon: "+Fb[V]}function w(){M.innerHTML="";let z=ze("led.mode"),G=z===1||z===2,$=`ein kurzer Blitz alle ${ze("led.ready_s")} s`,tt=["Dauerlicht","Doppelblitz alle 2 s","dunkel"][ze("led.armed")],W=["schnell blinkend","Dauerlicht","dunkel"][ze("led.mission")],ht=ze("led.depth_step"),V=[];if(z===0)V.push(["Alle Zust\xE4nde","dunkel","dunkel"]);else{if(V.push(["Bereit, nicht scharf",G?$:"dunkel",""]),V.push(["Scharf",G?tt:"dunkel",""]),V.push(["Mission",G?W:"dunkel",""]),ht>.5?V.push(["Getaucht",G&&z!==2?`Tiefe: ein Blitz je angefangene ${ht} m, alle 4 s`:"dunkel",""]):z===2&&V.push(["Getaucht","dunkel","dunkel"]),V.push(["Testbetrieb",G?"langsam blinkend":"dunkel",""]),ze("led.errors")>.5)for(let lt=1;lt<=6;lt++)V.push([`Fehler: ${Ob[lt]}`,"",`${lt} ${lt===1?"Blitz":"Blitze"} alle 3 s`]);V.push(["Not-Aus","","Dauerlicht"])}V.forEach(([lt,st,ot])=>M.append(S("tr",null,S("th",{scope:"row"},lt),S("td",null,st?S("span",{class:"dot g"}):null,st),S("td",null,ot?S("span",{class:"dot r"}):null,ot))))}let T=S("section",{class:"card"},S("h3",null,"Status-LEDs am Rumpf"),Pl("Betrieb",l(Al("led.mode",[[0,"Aus"],[1,"Immer"],[2,"Nur Oberfl\xE4che"],[3,"Tarnung"]]))),S("p",{class:"note"},"Tarnung: Gr\xFCn bleibt immer dunkel, Rot zeigt nur Fehler und Not-Aus."),l(Ar("led.bright","Helligkeit",5,100,5,z=>`${z} %`)),l(Ar("led.ready_s","Bereit: ein Blitz alle",1,10,1,z=>`${z} s`)),Pl("Scharf",l(Al("led.armed",[[0,"Dauerlicht"],[1,"Doppelblitz"],[2,"Dunkel"]]))),Pl("Mission",l(Al("led.mission",[[0,"Schnell"],[1,"Dauerlicht"],[2,"Dunkel"]]))),l(Ar("led.depth_step","Tiefenanzeige f\xFCr Taucher: ein Blitz je",0,20,1,z=>z>0?`${z} m`:"aus")),l(Er("led.errors","Fehlercodes rot blitzen","1 Akku, 2 Leckage, 3 Tiefe, 4 Sensor, 5 Funk, 6 Befehl")),l(Er("led.lamp_test","Lampentest beim Einschalten","beide LEDs 1.2 s an"))),k=S("section",{class:"card"},S("h3",null,"Beacon-Pod"),Pl("Automatischer Strobe",l(Al("beacon.mode",[[0,"Nur Befehl"],[1,"Bei Fehler"],[2,"Nach Mission"],[3,"Immer scharf"]]))),S("p",{class:"note"},"Bei Fehler: roter Blitz im Failsafe. Nach Mission: zus\xE4tzlich Strobe an der Oberfl\xE4che nach Missionsende. Immer scharf: Strobe w\xE4hrend des ganzen Einsatzes."),l(Er("beacon.watch","Totmann-\xDCberwachung","Schweigt das scharfe Boot 8 s, schl\xE4gt der Pod selbst Alarm")),l(Er("beacon.dark_dive","Unter Wasser dunkel","ab 1 m kein automatischer Strobe, Alarm und Befehle bleiben")),l(Er("beacon.low_bat","Roter Blitz bei Akku-Warnung","nur an der Oberfl\xE4che")),l(Er("beacon.rc_loss","Roter Blitz bei Funkverlust","nur an der Oberfl\xE4che")),l(Ar("beacon.strobe_max","Strobe endet nach",0,120,5,z=>z>0?`${z} min`:"unbegrenzt")),S("p",{class:"note"},"Not-Aus und grosse Leckage l\xF6sen den Alarm immer aus, unabh\xE4ngig von diesen Einstellungen."),S("div",{class:"toolbar tight"},S("span",{class:"sigl"},"Test am Boot"),...[[2,"Strobe"],[3,"Rot"],[4,"Alarm"],[0,"Aus"]].map(([z,G])=>S("button",{class:"btn"+(z===4?" warnb":""),onclick:()=>Me(`BEACON ${z}`,`Beacon ${G}`)},G)))),R=S("section",{class:"card"},S("h3",null,"GPS unter Wasser"),l(Ar("gps.off_depth","GPS aus ab",.3,5,.1,z=>`${wt(z,1)} m`)),l(Ar("gps.off_delay","nach",0,30,1,z=>`${z} s Tauchzeit`)),S("p",{class:"note"},"Eine Welle \xFCber dem Drucksensor schaltet das GPS nicht ab: Es geht erst aus, wenn das Boot so lange tiefer bleibt. Wieder an unter 0.15 m. Nur Software, das Modul bleibt versorgt.")),D=S("section",{class:"card sigprev"},S("h3",null,"Vorschau"),S("div",{class:"lamps"},S("figure",null,h,S("figcaption",null,"LED gr\xFCn")),S("figure",null,u,S("figcaption",null,"LED rot")),S("span",{class:"lsep"}),S("figure",null,f,S("figcaption",null,"Strobe 3 W")),S("figure",null,m,S("figcaption",null,"Pixel rot"))),d,_,g,S("label",{class:"chk"},b," Live vom verbundenen Boot"),S("h4",null,"Was das Leuchten bedeutet"),S("table",{class:"ptable legend"},S("thead",null,S("tr",null,S("th",null,"Zustand"),S("th",null,"Gr\xFCn"),S("th",null,"Rot"))),M)),O=S("button",{class:"btn",onclick:async()=>{let z=await Me("SAVE","Signale im Boot gespeichert");z&&z.ok&&O.classList.remove("primary")}},"Im Boot speichern"),A=S("button",{class:"btn",onclick:async()=>{for(let z of Nb){let G=Cn.find($=>$.k===z);G&&await Cl(z,G.d)}E(),re("Signale auf Standard","ok")}},"Standard");Ee.on("sig:dirty",()=>O.classList.add("primary"));function E(){a.forEach(z=>z.draw()),w()}Ee.on("par",()=>{j.tab==="signals"&&E()});let B=S("div",{class:"page"},S("div",{class:"toolbar"},S("span",{class:"note"},"Lichter am Boot und am Beacon festlegen. Ohne Verbindung nur Vorschau."),S("span",{class:"sp"}),A,O),S("div",{class:"siggrid"},S("div",{class:"sigcol"},T,k,R),D));return x(),E(),{el:B,show(){E(),cancelAnimationFrame(i),i=requestAnimationFrame(C)},hide(){cancelAnimationFrame(i)},update(z){r=z}}}var Hb='<svg viewBox="0 0 64 64" width="28" height="28" aria-hidden="true"><rect width="64" height="64" rx="6" fill="#0b0e12" stroke="#2a3a47"/><path d="M18 14v22a14 14 0 0 0 28 0V14" fill="none" stroke="#ff7a59" stroke-width="7" stroke-linecap="square"/></svg>',Vp=/(^|\.)underpressure\.ch$/.test(location.hostname),Fp=Vp?"/fathom.html":location.protocol==="file:"||location.hostname==="192.168.4.1"?"":"https://underpressure.ch/fathom.html";function Vb(){let s=S("dialog",{class:"dlg"},S("h2",null,"Per WLAN verbinden"),S("p",{class:"note"},"Diese Seite l\xE4uft \xFCber https. Der Browser erlaubt von hier keine unverschl\xFCsselte Verbindung ins Boot WLAN. Das Boot liefert den Konfigurator deshalb selbst aus:"),S("ol",null,S("li",null,"Boot einschalten, es muss entsch\xE4rft sein (DISARMED). Scharf geschaltet ist das WLAN aus."),S("li",null,"Mit dem WLAN ",S("code",null,"FATHOM-XXXX")," verbinden (Handy, Tablet oder PC)."),S("li",null,"Im Browser ",S("code",null,"http://192.168.4.1")," \xF6ffnen."),S("li",null,"Dort \xABPer WLAN verbinden\xBB dr\xFCcken.")),S("p",{class:"note"},"Per WLAN gehen Parameter, Missionen, Tests und Kalibration. Scharfschalten, Missionsstart und Bootloader gehen nur per Crossfire oder USB."),S("div",{class:"row"},S("button",{class:"btn primary",onclick:()=>s.close()},"Verstanden")));s.addEventListener("close",()=>s.remove()),document.body.append(s),s.showModal()}var Gb=[["setup","Verbinden","M12 2v10m0 0l-4-4m4 4l4-4M5 14v5h14v-5"],["dash","\xDCbersicht","M3 13a9 9 0 1118 0M12 13l4-5M5 20h14"],["sensors","Sensoren","M3 17l5-6 4 3 5-8 4 5M3 21h18"],["calib","Kalibration","M12 3v4m0 10v4M3 12h4m10 0h4M12 8a4 4 0 100 8 4 4 0 000-8z"],["tests","Tests","M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3"],["params","Parameter","M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0M14 4v4M8 10v4M16 16v4"],["nav","Navigation","M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"],["map","Karte","M9 4L3 6v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14"],["signals","Signale","M12 3v2M12 19v2M4.2 6.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 17.8l1.4-1.4M18.4 5.6l1.4-1.4M12 8a4 4 0 100 8 4 4 0 000-8z"],["mission","Mission","M4 20l4-12 4 6 4-10 4 16M3 4h4"],["bb","Blackbox","M5 4h14v16H5zM9 4v6h6V4M8 15h8M8 18h5"],["term","Terminal","M4 5h16v14H4zM7 10l3 2-3 2M12 15h5"]],Xe={setup:null,dash:null,sensors:null,calib:null,tests:null,params:null,map:null,signals:null,mission:null,nav:null,bb:null,term:null},Pr={async connect(){if(j.connected)return;if(!Vr.supported())return re("Kein Web Serial in diesem Browser. Chrome oder Edge am PC nutzen.","bad",6e3);let s=new Vr;try{await s.connect()}catch(t){t.name!=="NotFoundError"&&re("Verbindung fehlgeschlagen: "+t.message,"bad",6e3);return}wu(s,!1)},async wifi(s,t=1){if(j.connected)return;if(location.protocol==="https:")return Vb();let e=new zo(s||(location.protocol==="file:"||["localhost","127.0.0.1"].includes(location.hostname)?j.wifiHost||"192.168.4.1":location.hostname));try{await e.connect()}catch(i){if(t>1){setTimeout(()=>Pr.wifi(s,t-1),2e3);return}re("WLAN Verbindung fehlgeschlagen: "+i.message,"bad",7e3);return}j.wifiHost=e.host,e.on("close",()=>{!e.noretry&&!j.demo&&(re("Funk getrennt, versuche neu (nur im DISARMED aktiv)","warn"),setTimeout(()=>Pr.wifi(e.host,15),2500))}),wu(e,!1)},async demo(){j.connected&&await j.link.disconnect();let s=new Ho;await s.connect(),wu(s,!0)},async disconnect(){j.link&&await j.link.disconnect()}};async function wu(s,t){if(j.link=s,j.demo=t,j.connected=!0,j.wifi=!!s.wifi,s.on("rx",a=>Ee.emit("rx",a)),s.on("tx",a=>Ee.emit("tx",a)),s.on("ev",a=>us(a,/ERR|FAILSAFE|LECK/i.test(a)?"bad":"info")),s.on("tel",a=>{j.tel=a,j.lastTel=performance.now()}),s.on("close",()=>{j.link===s&&(j.connected=!1,j.tel=null,Ee.emit("conn"),Tu(),us("Verbindung getrennt","warn"),re("Verbindung getrennt","warn"))}),s.on("error",a=>us("Fehler: "+(a.message||a),"bad")),Ee.emit("conn"),Tu(),!(await s.cmd("PING",1500)).ok){re("Keine Antwort vom Boot. Ist FATHOM geflasht?","bad",6e3),await s.disconnect();return}let i=await s.cmd("INFO");i.ok&&(j.info=i.data),await Gr();let r=await s.cmd("MIS GET");j.boatMis=r.data,await s.cmd(s.wifi?"STREAM 10":"STREAM 20"),us(`Verbunden mit ${j.info?.fw} ${j.info?.ver}`,"ok"),re(t?"Demo Boot verbunden":"Boot verbunden","ok"),mo(j.tab==="setup"?"dash":j.tab)}var zp,Rl,Hp;function Tu(){let s=j.tel,t=gi("#conn");t&&(t.className="conn "+(j.connected?"on":""),t.textContent=j.connected?j.demo?"DEMO":j.wifi?"WLAN":"USB":"GETRENNT");let e=gi("#armbtn");e&&(e.disabled=!j.connected||j.wifi,e.title=j.wifi?"Scharfschalten nur per Crossfire oder USB":"",e.textContent=s&&s.arm?"DISARM":"ARM",e.className="btn "+(s&&s.arm?"stop":"warnb"));let i=gi("#modesel");i&&(i.disabled=!j.connected,s&&document.activeElement!==i&&(i.value=s.m));let r=gi("#disc");r&&(r.style.display=j.connected?"":"none")}function mo(s){let t=Xe[j.tab];t&&t.hide&&t.hide(),j.tab=s,Rl.innerHTML="";let e=Xe[s];Rl.append(e.el),e.show&&e.show(),document.querySelectorAll(".nav button").forEach(i=>i.classList.toggle("on",i.dataset.k===s)),Ee.emit("tab",s),location.hash=s}Ee.on("goto",mo);function Wb(){let s=gi("#app");zp=S("header",{class:"top"},S("div",{class:"brand",html:Hb}),S("div",{class:"bt"},S("b",null,"FATHOM"),S("span",null,"Under Pressure \xB7 U-Boote")),Fp?S("a",{class:"btn back",href:Fp,"aria-label":"Zur\xFCck zur Website",title:"Zur\xFCck zur Website underpressure.ch",html:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg><span>Website</span>'}):null,S("span",{class:"sp"}),S("span",{id:"conn",class:"conn"},"GETRENNT"),S("select",{id:"modesel",class:"in sm",disabled:!0,onchange:a=>Me("MODE "+a.target.value)},["MANUAL","STAB","DEPTH","MISSION","RTH"].map(a=>S("option",{value:a},a)),S("option",{value:"FAILSAFE",disabled:!0},"FAILSAFE")),S("button",{id:"armbtn",class:"btn warnb",disabled:!0,onclick:()=>Me(j.tel&&j.tel.arm?"DISARM":"ARM")},"ARM"),S("button",{id:"disc",class:"btn",style:{display:"none"},onclick:()=>Pr.disconnect()},"Trennen"));let t=S("nav",{class:"nav"},Gb.map(([a,l,h])=>S("button",{"data-k":a,onclick:()=>mo(a),html:`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${h}"/></svg><span>${l}</span>`})),S("span",{class:"sp"}),S("div",{class:"navfoot"},Vp?S("a",{href:"/fathom.html",target:"_top"},"Under Pressure"):"Under Pressure"));Rl=S("main",{class:"content"}),Hp=S("footer",{class:"status"},S("span",{id:"sb1"},"bereit"),S("span",{class:"sp"}),S("span",{id:"sb2"},"FATHOM Konfigurator 0.5")),s.append(zp,S("div",{class:"body"},t,Rl),Hp),Xe.setup=bd(Pr),Xe.dash=Md(),Xe.sensors=Sd(),Xe.calib=Td(),Xe.tests=Ed(),Xe.params=Ad(),Xe.map=Up(),Xe.signals=Bp(),Xe.mission=Sp(),Xe.nav=Ep(),Xe.bb=Pp(),Xe.term=Pd(),Cn.forEach(a=>{j.par[a.k]=a.d}),Ee.on("ev",()=>{let a=j.events[j.events.length-1];a&&(gi("#sb1").textContent=a.m)});let e=0,i=a=>{if(requestAnimationFrame(i),j.connected&&j.tel&&j.lastTel!==e){Xe.nav&&j.tab!=="nav"&&Xe.nav.update(j.tel),e=j.lastTel;let l=Xe[j.tab];l&&l.update&&l.update(j.tel),Tu(),j.tab!=="tests"&&Xe.tests.update}j.connected&&performance.now()-j.lastTel>2e3&&j.lastTel?gi("#sb2").textContent="keine Telemetrie":j.connected&&(gi("#sb2").textContent=j.demo?"Demo":j.wifi?"WLAN 10 Hz":"USB 20 Hz")};requestAnimationFrame(i);let r=location.hash.slice(1);mo(Xe[r]?r:"setup"),new URLSearchParams(location.search).has("demo")&&Pr.demo(),window.addEventListener("beforeunload",()=>{if(j.connected)try{j.link._write(`TEST OFF
`)}catch{}}),document.addEventListener("visibilitychange",()=>{document.hidden&&j.connected&&j.tel&&j.tel.tst&&Xe.tests.stopAll()}),window.__fathom={S:j,pages:Xe,api:Pr,setTab:mo}}Wb();})();
