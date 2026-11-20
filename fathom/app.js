(()=>{var Km=Object.create;var _d=Object.defineProperty;var Jm=Object.getOwnPropertyDescriptor;var jm=Object.getOwnPropertyNames;var Qm=Object.getPrototypeOf,tg=Object.prototype.hasOwnProperty;var eg=(s,t)=>()=>(t||s((t={exports:{}}).exports,t),t.exports);var ng=(s,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of jm(t))!tg.call(s,r)&&r!==e&&_d(s,r,{get:()=>t[r],enumerable:!(n=Jm(t,r))||n.enumerable});return s};var ig=(s,t,e)=>(e=s!=null?Km(Qm(s)):{},ng(t||!s||!s.__esModule?_d(e,"default",{value:s,enumerable:!0}):e,s));var Bp=eg((Ll,Up)=>{(function(s,t){typeof Ll=="object"&&typeof Up<"u"?t(Ll):typeof define=="function"&&define.amd?define(["exports"],t):(s=typeof globalThis<"u"?globalThis:s||self,t(s.leaflet={}))})(Ll,(function(s){"use strict";var t="1.9.4";function e(i){var o,c,m,M;for(c=1,m=arguments.length;c<m;c++){M=arguments[c];for(o in M)i[o]=M[o]}return i}var n=Object.create||(function(){function i(){}return function(o){return i.prototype=o,new i}})();function r(i,o){var c=Array.prototype.slice;if(i.bind)return i.bind.apply(i,c.call(arguments,1));var m=c.call(arguments,2);return function(){return i.apply(o,m.length?m.concat(c.call(arguments)):arguments)}}var a=0;function l(i){return"_leaflet_id"in i||(i._leaflet_id=++a),i._leaflet_id}function h(i,o,c){var m,M,R,F;return F=function(){m=!1,M&&(R.apply(c,M),M=!1)},R=function(){m?M=arguments:(i.apply(c,arguments),setTimeout(F,o),m=!0)},R}function u(i,o,c){var m=o[1],M=o[0],R=m-M;return i===m&&c?i:((i-M)%R+R)%R+M}function f(){return!1}function p(i,o){if(o===!1)return i;var c=Math.pow(10,o===void 0?6:o);return Math.round(i*c)/c}function d(i){return i.trim?i.trim():i.replace(/^\s+|\s+$/g,"")}function _(i){return d(i).split(/\s+/)}function g(i,o){Object.prototype.hasOwnProperty.call(i,"options")||(i.options=i.options?n(i.options):{});for(var c in o)i.options[c]=o[c];return i.options}function y(i,o,c){var m=[];for(var M in i)m.push(encodeURIComponent(c?M.toUpperCase():M)+"="+encodeURIComponent(i[M]));return(!o||o.indexOf("?")===-1?"?":"&")+m.join("&")}var S=/\{ *([\w_ -]+) *\}/g;function x(i,o){return i.replace(S,function(c,m){var M=o[m];if(M===void 0)throw new Error("No value provided for variable "+c);return typeof M=="function"&&(M=M(o)),M})}var v=Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"};function P(i,o){for(var c=0;c<i.length;c++)if(i[c]===o)return c;return-1}var w="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function T(i){return window["webkit"+i]||window["moz"+i]||window["ms"+i]}var O=0;function C(i){var o=+new Date,c=Math.max(0,16-(o-O));return O=o+c,window.setTimeout(i,c)}var I=window.requestAnimationFrame||T("RequestAnimationFrame")||C,k=window.cancelAnimationFrame||T("CancelAnimationFrame")||T("CancelRequestAnimationFrame")||function(i){window.clearTimeout(i)};function E(i,o,c){if(c&&I===C)i.call(o);else return I.call(window,r(i,o))}function A(i){i&&k.call(window,i)}var B={__proto__:null,extend:e,create:n,bind:r,get lastId(){return a},stamp:l,throttle:h,wrapNum:u,falseFn:f,formatNum:p,trim:d,splitWords:_,setOptions:g,getParamString:y,template:x,isArray:v,indexOf:P,emptyImageUrl:w,requestFn:I,cancelFn:k,requestAnimFrame:E,cancelAnimFrame:A};function Y(){}Y.extend=function(i){var o=function(){g(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},c=o.__super__=this.prototype,m=n(c);m.constructor=o,o.prototype=m;for(var M in this)Object.prototype.hasOwnProperty.call(this,M)&&M!=="prototype"&&M!=="__super__"&&(o[M]=this[M]);return i.statics&&e(o,i.statics),i.includes&&(K(i.includes),e.apply(null,[m].concat(i.includes))),e(m,i),delete m.statics,delete m.includes,m.options&&(m.options=c.options?n(c.options):{},e(m.options,i.options)),m._initHooks=[],m.callInitHooks=function(){if(!this._initHooksCalled){c.callInitHooks&&c.callInitHooks.call(this),this._initHooksCalled=!0;for(var R=0,F=m._initHooks.length;R<F;R++)m._initHooks[R].call(this)}},o},Y.include=function(i){var o=this.prototype.options;return e(this.prototype,i),i.options&&(this.prototype.options=o,this.mergeOptions(i.options)),this},Y.mergeOptions=function(i){return e(this.prototype.options,i),this},Y.addInitHook=function(i){var o=Array.prototype.slice.call(arguments,1),c=typeof i=="function"?i:function(){this[i].apply(this,o)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(c),this};function K(i){if(!(typeof L>"u"||!L||!L.Mixin)){i=v(i)?i:[i];for(var o=0;o<i.length;o++)i[o]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var X={on:function(i,o,c){if(typeof i=="object")for(var m in i)this._on(m,i[m],o);else{i=_(i);for(var M=0,R=i.length;M<R;M++)this._on(i[M],o,c)}return this},off:function(i,o,c){if(!arguments.length)delete this._events;else if(typeof i=="object")for(var m in i)this._off(m,i[m],o);else{i=_(i);for(var M=arguments.length===1,R=0,F=i.length;R<F;R++)M?this._off(i[R]):this._off(i[R],o,c)}return this},_on:function(i,o,c,m){if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}if(this._listens(i,o,c)===!1){c===this&&(c=void 0);var M={fn:o,ctx:c};m&&(M.once=!0),this._events=this._events||{},this._events[i]=this._events[i]||[],this._events[i].push(M)}},_off:function(i,o,c){var m,M,R;if(this._events&&(m=this._events[i],!!m)){if(arguments.length===1){if(this._firingCount)for(M=0,R=m.length;M<R;M++)m[M].fn=f;delete this._events[i];return}if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}var F=this._listens(i,o,c);if(F!==!1){var tt=m[F];this._firingCount&&(tt.fn=f,this._events[i]=m=m.slice()),m.splice(F,1)}}},fire:function(i,o,c){if(!this.listens(i,c))return this;var m=e({},o,{type:i,target:this,sourceTarget:o&&o.sourceTarget||this});if(this._events){var M=this._events[i];if(M){this._firingCount=this._firingCount+1||1;for(var R=0,F=M.length;R<F;R++){var tt=M[R],at=tt.fn;tt.once&&this.off(i,at,tt.ctx),at.call(tt.ctx||this,m)}this._firingCount--}}return c&&this._propagateEvent(m),this},listens:function(i,o,c,m){typeof i!="string"&&console.warn('"string" type argument expected');var M=o;typeof o!="function"&&(m=!!o,M=void 0,c=void 0);var R=this._events&&this._events[i];if(R&&R.length&&this._listens(i,M,c)!==!1)return!0;if(m){for(var F in this._eventParents)if(this._eventParents[F].listens(i,o,c,m))return!0}return!1},_listens:function(i,o,c){if(!this._events)return!1;var m=this._events[i]||[];if(!o)return!!m.length;c===this&&(c=void 0);for(var M=0,R=m.length;M<R;M++)if(m[M].fn===o&&m[M].ctx===c)return M;return!1},once:function(i,o,c){if(typeof i=="object")for(var m in i)this._on(m,i[m],o,!0);else{i=_(i);for(var M=0,R=i.length;M<R;M++)this._on(i[M],o,c,!0)}return this},addEventParent:function(i){return this._eventParents=this._eventParents||{},this._eventParents[l(i)]=i,this},removeEventParent:function(i){return this._eventParents&&delete this._eventParents[l(i)],this},_propagateEvent:function(i){for(var o in this._eventParents)this._eventParents[o].fire(i.type,e({layer:i.target,propagatedFrom:i.target},i),!0)}};X.addEventListener=X.on,X.removeEventListener=X.clearAllEventListeners=X.off,X.addOneTimeEventListener=X.once,X.fireEvent=X.fire,X.hasEventListeners=X.listens;var et=Y.extend(X);function V(i,o,c){this.x=c?Math.round(i):i,this.y=c?Math.round(o):o}var ft=Math.trunc||function(i){return i>0?Math.floor(i):Math.ceil(i)};V.prototype={clone:function(){return new V(this.x,this.y)},add:function(i){return this.clone()._add(G(i))},_add:function(i){return this.x+=i.x,this.y+=i.y,this},subtract:function(i){return this.clone()._subtract(G(i))},_subtract:function(i){return this.x-=i.x,this.y-=i.y,this},divideBy:function(i){return this.clone()._divideBy(i)},_divideBy:function(i){return this.x/=i,this.y/=i,this},multiplyBy:function(i){return this.clone()._multiplyBy(i)},_multiplyBy:function(i){return this.x*=i,this.y*=i,this},scaleBy:function(i){return new V(this.x*i.x,this.y*i.y)},unscaleBy:function(i){return new V(this.x/i.x,this.y/i.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=ft(this.x),this.y=ft(this.y),this},distanceTo:function(i){i=G(i);var o=i.x-this.x,c=i.y-this.y;return Math.sqrt(o*o+c*c)},equals:function(i){return i=G(i),i.x===this.x&&i.y===this.y},contains:function(i){return i=G(i),Math.abs(i.x)<=Math.abs(this.x)&&Math.abs(i.y)<=Math.abs(this.y)},toString:function(){return"Point("+p(this.x)+", "+p(this.y)+")"}};function G(i,o,c){return i instanceof V?i:v(i)?new V(i[0],i[1]):i==null?i:typeof i=="object"&&"x"in i&&"y"in i?new V(i.x,i.y):new V(i,o,c)}function ht(i,o){if(i)for(var c=o?[i,o]:i,m=0,M=c.length;m<M;m++)this.extend(c[m])}ht.prototype={extend:function(i){var o,c;if(!i)return this;if(i instanceof V||typeof i[0]=="number"||"x"in i)o=c=G(i);else if(i=xt(i),o=i.min,c=i.max,!o||!c)return this;return!this.min&&!this.max?(this.min=o.clone(),this.max=c.clone()):(this.min.x=Math.min(o.x,this.min.x),this.max.x=Math.max(c.x,this.max.x),this.min.y=Math.min(o.y,this.min.y),this.max.y=Math.max(c.y,this.max.y)),this},getCenter:function(i){return G((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,i)},getBottomLeft:function(){return G(this.min.x,this.max.y)},getTopRight:function(){return G(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(i){var o,c;return typeof i[0]=="number"||i instanceof V?i=G(i):i=xt(i),i instanceof ht?(o=i.min,c=i.max):o=c=i,o.x>=this.min.x&&c.x<=this.max.x&&o.y>=this.min.y&&c.y<=this.max.y},intersects:function(i){i=xt(i);var o=this.min,c=this.max,m=i.min,M=i.max,R=M.x>=o.x&&m.x<=c.x,F=M.y>=o.y&&m.y<=c.y;return R&&F},overlaps:function(i){i=xt(i);var o=this.min,c=this.max,m=i.min,M=i.max,R=M.x>o.x&&m.x<c.x,F=M.y>o.y&&m.y<c.y;return R&&F},isValid:function(){return!!(this.min&&this.max)},pad:function(i){var o=this.min,c=this.max,m=Math.abs(o.x-c.x)*i,M=Math.abs(o.y-c.y)*i;return xt(G(o.x-m,o.y-M),G(c.x+m,c.y+M))},equals:function(i){return i?(i=xt(i),this.min.equals(i.getTopLeft())&&this.max.equals(i.getBottomRight())):!1}};function xt(i,o){return!i||i instanceof ht?i:new ht(i,o)}function lt(i,o){if(i)for(var c=o?[i,o]:i,m=0,M=c.length;m<M;m++)this.extend(c[m])}lt.prototype={extend:function(i){var o=this._southWest,c=this._northEast,m,M;if(i instanceof Et)m=i,M=i;else if(i instanceof lt){if(m=i._southWest,M=i._northEast,!m||!M)return this}else return i?this.extend($(i)||pt(i)):this;return!o&&!c?(this._southWest=new Et(m.lat,m.lng),this._northEast=new Et(M.lat,M.lng)):(o.lat=Math.min(m.lat,o.lat),o.lng=Math.min(m.lng,o.lng),c.lat=Math.max(M.lat,c.lat),c.lng=Math.max(M.lng,c.lng)),this},pad:function(i){var o=this._southWest,c=this._northEast,m=Math.abs(o.lat-c.lat)*i,M=Math.abs(o.lng-c.lng)*i;return new lt(new Et(o.lat-m,o.lng-M),new Et(c.lat+m,c.lng+M))},getCenter:function(){return new Et((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Et(this.getNorth(),this.getWest())},getSouthEast:function(){return new Et(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(i){typeof i[0]=="number"||i instanceof Et||"lat"in i?i=$(i):i=pt(i);var o=this._southWest,c=this._northEast,m,M;return i instanceof lt?(m=i.getSouthWest(),M=i.getNorthEast()):m=M=i,m.lat>=o.lat&&M.lat<=c.lat&&m.lng>=o.lng&&M.lng<=c.lng},intersects:function(i){i=pt(i);var o=this._southWest,c=this._northEast,m=i.getSouthWest(),M=i.getNorthEast(),R=M.lat>=o.lat&&m.lat<=c.lat,F=M.lng>=o.lng&&m.lng<=c.lng;return R&&F},overlaps:function(i){i=pt(i);var o=this._southWest,c=this._northEast,m=i.getSouthWest(),M=i.getNorthEast(),R=M.lat>o.lat&&m.lat<c.lat,F=M.lng>o.lng&&m.lng<c.lng;return R&&F},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(i,o){return i?(i=pt(i),this._southWest.equals(i.getSouthWest(),o)&&this._northEast.equals(i.getNorthEast(),o)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function pt(i,o){return i instanceof lt?i:new lt(i,o)}function Et(i,o,c){if(isNaN(i)||isNaN(o))throw new Error("Invalid LatLng object: ("+i+", "+o+")");this.lat=+i,this.lng=+o,c!==void 0&&(this.alt=+c)}Et.prototype={equals:function(i,o){if(!i)return!1;i=$(i);var c=Math.max(Math.abs(this.lat-i.lat),Math.abs(this.lng-i.lng));return c<=(o===void 0?1e-9:o)},toString:function(i){return"LatLng("+p(this.lat,i)+", "+p(this.lng,i)+")"},distanceTo:function(i){return ot.distance(this,$(i))},wrap:function(){return ot.wrapLatLng(this)},toBounds:function(i){var o=180*i/40075017,c=o/Math.cos(Math.PI/180*this.lat);return pt([this.lat-o,this.lng-c],[this.lat+o,this.lng+c])},clone:function(){return new Et(this.lat,this.lng,this.alt)}};function $(i,o,c){return i instanceof Et?i:v(i)&&typeof i[0]!="object"?i.length===3?new Et(i[0],i[1],i[2]):i.length===2?new Et(i[0],i[1]):null:i==null?i:typeof i=="object"&&"lat"in i?new Et(i.lat,"lng"in i?i.lng:i.lon,i.alt):o===void 0?null:new Et(i,o,c)}var W={latLngToPoint:function(i,o){var c=this.projection.project(i),m=this.scale(o);return this.transformation._transform(c,m)},pointToLatLng:function(i,o){var c=this.scale(o),m=this.transformation.untransform(i,c);return this.projection.unproject(m)},project:function(i){return this.projection.project(i)},unproject:function(i){return this.projection.unproject(i)},scale:function(i){return 256*Math.pow(2,i)},zoom:function(i){return Math.log(i/256)/Math.LN2},getProjectedBounds:function(i){if(this.infinite)return null;var o=this.projection.bounds,c=this.scale(i),m=this.transformation.transform(o.min,c),M=this.transformation.transform(o.max,c);return new ht(m,M)},infinite:!1,wrapLatLng:function(i){var o=this.wrapLng?u(i.lng,this.wrapLng,!0):i.lng,c=this.wrapLat?u(i.lat,this.wrapLat,!0):i.lat,m=i.alt;return new Et(c,o,m)},wrapLatLngBounds:function(i){var o=i.getCenter(),c=this.wrapLatLng(o),m=o.lat-c.lat,M=o.lng-c.lng;if(m===0&&M===0)return i;var R=i.getSouthWest(),F=i.getNorthEast(),tt=new Et(R.lat-m,R.lng-M),at=new Et(F.lat-m,F.lng-M);return new lt(tt,at)}},ot=e({},W,{wrapLng:[-180,180],R:6371e3,distance:function(i,o){var c=Math.PI/180,m=i.lat*c,M=o.lat*c,R=Math.sin((o.lat-i.lat)*c/2),F=Math.sin((o.lng-i.lng)*c/2),tt=R*R+Math.cos(m)*Math.cos(M)*F*F,at=2*Math.atan2(Math.sqrt(tt),Math.sqrt(1-tt));return this.R*at}}),Z=6378137,_t={R:Z,MAX_LATITUDE:85.0511287798,project:function(i){var o=Math.PI/180,c=this.MAX_LATITUDE,m=Math.max(Math.min(c,i.lat),-c),M=Math.sin(m*o);return new V(this.R*i.lng*o,this.R*Math.log((1+M)/(1-M))/2)},unproject:function(i){var o=180/Math.PI;return new Et((2*Math.atan(Math.exp(i.y/this.R))-Math.PI/2)*o,i.x*o/this.R)},bounds:(function(){var i=Z*Math.PI;return new ht([-i,-i],[i,i])})()};function dt(i,o,c,m){if(v(i)){this._a=i[0],this._b=i[1],this._c=i[2],this._d=i[3];return}this._a=i,this._b=o,this._c=c,this._d=m}dt.prototype={transform:function(i,o){return this._transform(i.clone(),o)},_transform:function(i,o){return o=o||1,i.x=o*(this._a*i.x+this._b),i.y=o*(this._c*i.y+this._d),i},untransform:function(i,o){return o=o||1,new V((i.x/o-this._b)/this._a,(i.y/o-this._d)/this._c)}};function nt(i,o,c,m){return new dt(i,o,c,m)}var wt=e({},ot,{code:"EPSG:3857",projection:_t,transformation:(function(){var i=.5/(Math.PI*_t.R);return nt(i,.5,-i,.5)})()}),Ft=e({},wt,{code:"EPSG:900913"});function Mt(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function z(i,o){var c="",m,M,R,F,tt,at;for(m=0,R=i.length;m<R;m++){for(tt=i[m],M=0,F=tt.length;M<F;M++)at=tt[M],c+=(M?"L":"M")+at.x+" "+at.y;c+=o?Ht.svg?"z":"x":""}return c||"M0 0"}var Gt=document.documentElement.style,Jt="ActiveXObject"in window,kt=Jt&&!document.addEventListener,zt="msLaunchUri"in navigator&&!("documentMode"in document),_e=An("webkit"),Kt=An("android"),U=An("android 2")||An("android 3"),D=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),it=Kt&&An("Google")&&D<537&&!("AudioNode"in window),mt=!!window.opera,yt=!zt&&An("chrome"),ut=An("gecko")&&!_e&&!mt&&!Jt,qt=!yt&&An("safari"),Rt=An("phantom"),Ut="OTransition"in Gt,ve=navigator.platform.indexOf("Win")===0,St=Jt&&"transition"in Gt,Bt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!U,te="MozPerspective"in Gt,se=!window.L_DISABLE_3D&&(St||Bt||te)&&!Ut&&!Rt,Ot=typeof orientation<"u"||An("mobile"),ge=Ot&&_e,le=Ot&&Bt,Re=!window.PointerEvent&&window.MSPointerEvent,q=!!(window.PointerEvent||Re),Pt="ontouchstart"in window||!!window.TouchEvent,ct=!window.L_NO_TOUCH&&(Pt||q),gt=Ot&&mt,It=Ot&&ut,Ct=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,ae=(function(){var i=!1;try{var o=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("testPassiveEventSupport",f,o),window.removeEventListener("testPassiveEventSupport",f,o)}catch{}return i})(),ze=(function(){return!!document.createElement("canvas").getContext})(),Xe=!!(document.createElementNS&&Mt("svg").createSVGRect),Ae=!!Xe&&(function(){var i=document.createElement("div");return i.innerHTML="<svg/>",(i.firstChild&&i.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),En=!Xe&&(function(){try{var i=document.createElement("div");i.innerHTML='<v:shape adj="1"/>';var o=i.firstChild;return o.style.behavior="url(#default#VML)",o&&typeof o.adj=="object"}catch{return!1}})(),Yn=navigator.platform.indexOf("Mac")===0,wo=navigator.platform.indexOf("Linux")===0;function An(i){return navigator.userAgent.toLowerCase().indexOf(i)>=0}var Ht={ie:Jt,ielt9:kt,edge:zt,webkit:_e,android:Kt,android23:U,androidStock:it,opera:mt,chrome:yt,gecko:ut,safari:qt,phantom:Rt,opera12:Ut,win:ve,ie3d:St,webkit3d:Bt,gecko3d:te,any3d:se,mobile:Ot,mobileWebkit:ge,mobileWebkit3d:le,msPointer:Re,pointer:q,touch:ct,touchNative:Pt,mobileOpera:gt,mobileGecko:It,retina:Ct,passiveEvents:ae,canvas:ze,svg:Xe,vml:En,inlineSvg:Ae,mac:Yn,linux:wo},Bs=Ht.msPointer?"MSPointerDown":"pointerdown",kr=Ht.msPointer?"MSPointerMove":"pointermove",Or=Ht.msPointer?"MSPointerUp":"pointerup",ls=Ht.msPointer?"MSPointerCancel":"pointercancel",Fs={touchstart:Bs,touchmove:kr,touchend:Or,touchcancel:ls},cs={touchstart:j,touchmove:st,touchend:st,touchcancel:st},wi={},Ur=!1;function Nl(i,o,c){return o==="touchstart"&&rt(),cs[o]?(c=cs[o].bind(this,c),i.addEventListener(Fs[o],c,!1),c):(console.warn("wrong event specified:",o),f)}function kl(i,o,c){if(!Fs[o]){console.warn("wrong event specified:",o);return}i.removeEventListener(Fs[o],c,!1)}function Ol(i){wi[i.pointerId]=i}function N(i){wi[i.pointerId]&&(wi[i.pointerId]=i)}function J(i){delete wi[i.pointerId]}function rt(){Ur||(document.addEventListener(Bs,Ol,!0),document.addEventListener(kr,N,!0),document.addEventListener(Or,J,!0),document.addEventListener(ls,J,!0),Ur=!0)}function st(i,o){if(o.pointerType!==(o.MSPOINTER_TYPE_MOUSE||"mouse")){o.touches=[];for(var c in wi)o.touches.push(wi[c]);o.changedTouches=[o],i(o)}}function j(i,o){o.MSPOINTER_TYPE_TOUCH&&o.pointerType===o.MSPOINTER_TYPE_TOUCH&&rn(o),st(i,o)}function Tt(i){var o={},c,m;for(m in i)c=i[m],o[m]=c&&c.bind?c.bind(i):c;return i=o,o.type="dblclick",o.detail=2,o.isTrusted=!1,o._simulated=!0,o}var Lt=200;function Zt(i,o){i.addEventListener("dblclick",o);var c=0,m;function M(R){if(R.detail!==1){m=R.detail;return}if(!(R.pointerType==="mouse"||R.sourceCapabilities&&!R.sourceCapabilities.firesTouchEvents)){var F=Du(R);if(!(F.some(function(at){return at instanceof HTMLLabelElement&&at.attributes.for})&&!F.some(function(at){return at instanceof HTMLInputElement||at instanceof HTMLSelectElement}))){var tt=Date.now();tt-c<=Lt?(m++,m===2&&o(Tt(R))):m=1,c=tt}}}return i.addEventListener("click",M),{dblclick:o,simDblclick:M}}function Xt(i,o){i.removeEventListener("dblclick",o.dblclick),i.removeEventListener("click",o.simDblclick)}var ie=pi(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),re=pi(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Wt=re==="webkitTransition"||re==="OTransition"?re+"End":"transitionend";function xe(i){return typeof i=="string"?document.getElementById(i):i}function Ee(i,o){var c=i.style[o]||i.currentStyle&&i.currentStyle[o];if((!c||c==="auto")&&document.defaultView){var m=document.defaultView.getComputedStyle(i,null);c=m?m[o]:null}return c==="auto"?null:c}function Yt(i,o,c){var m=document.createElement(i);return m.className=o||"",c&&c.appendChild(m),m}function de(i){var o=i.parentNode;o&&o.removeChild(i)}function ye(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function Vt(i){var o=i.parentNode;o&&o.lastChild!==i&&o.appendChild(i)}function hn(i){var o=i.parentNode;o&&o.firstChild!==i&&o.insertBefore(i,o.firstChild)}function Me(i,o){if(i.classList!==void 0)return i.classList.contains(o);var c=fi(i);return c.length>0&&new RegExp("(^|\\s)"+o+"(\\s|$)").test(c)}function jt(i,o){if(i.classList!==void 0)for(var c=_(o),m=0,M=c.length;m<M;m++)i.classList.add(c[m]);else if(!Me(i,o)){var R=fi(i);sn(i,(R?R+" ":"")+o)}}function Ie(i,o){i.classList!==void 0?i.classList.remove(o):sn(i,d((" "+fi(i)+" ").replace(" "+o+" "," ")))}function sn(i,o){i.className.baseVal===void 0?i.className=o:i.className.baseVal=o}function fi(i){return i.correspondingElement&&(i=i.correspondingElement),i.className.baseVal===void 0?i.className:i.className.baseVal}function fe(i,o){"opacity"in i.style?i.style.opacity=o:"filter"in i.style&&kn(i,o)}function kn(i,o){var c=!1,m="DXImageTransform.Microsoft.Alpha";try{c=i.filters.item(m)}catch{if(o===1)return}o=Math.round(o*100),c?(c.Enabled=o!==100,c.Opacity=o):i.style.filter+=" progid:"+m+"(opacity="+o+")"}function pi(i){for(var o=document.documentElement.style,c=0;c<i.length;c++)if(i[c]in o)return i[c];return!1}function qe(i,o,c){var m=o||new V(0,0);i.style[ie]=(Ht.ie3d?"translate("+m.x+"px,"+m.y+"px)":"translate3d("+m.x+"px,"+m.y+"px,0)")+(c?" scale("+c+")":"")}function Ce(i,o){i._leaflet_pos=o,Ht.any3d?qe(i,o):(i.style.left=o.x+"px",i.style.top=o.y+"px")}function un(i){return i._leaflet_pos||new V(0,0)}var Zi,Br,Ul;if("onselectstart"in document)Zi=function(){ce(window,"selectstart",rn)},Br=function(){Ue(window,"selectstart",rn)};else{var Fr=pi(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Zi=function(){if(Fr){var i=document.documentElement.style;Ul=i[Fr],i[Fr]="none"}},Br=function(){Fr&&(document.documentElement.style[Fr]=Ul,Ul=void 0)}}function Bl(){ce(window,"dragstart",rn)}function Fl(){Ue(window,"dragstart",rn)}var To,zl;function Hl(i){for(;i.tabIndex===-1;)i=i.parentNode;i.style&&(Eo(),To=i,zl=i.style.outlineStyle,i.style.outlineStyle="none",ce(window,"keydown",Eo))}function Eo(){To&&(To.style.outlineStyle=zl,To=void 0,zl=void 0,Ue(window,"keydown",Eo))}function Lu(i){do i=i.parentNode;while((!i.offsetWidth||!i.offsetHeight)&&i!==document.body);return i}function Vl(i){var o=i.getBoundingClientRect();return{x:o.width/i.offsetWidth||1,y:o.height/i.offsetHeight||1,boundingClientRect:o}}var nm={__proto__:null,TRANSFORM:ie,TRANSITION:re,TRANSITION_END:Wt,get:xe,getStyle:Ee,create:Yt,remove:de,empty:ye,toFront:Vt,toBack:hn,hasClass:Me,addClass:jt,removeClass:Ie,setClass:sn,getClass:fi,setOpacity:fe,testProp:pi,setTransform:qe,setPosition:Ce,getPosition:un,get disableTextSelection(){return Zi},get enableTextSelection(){return Br},disableImageDrag:Bl,enableImageDrag:Fl,preventOutline:Hl,restoreOutline:Eo,getSizedParentNode:Lu,getScale:Vl};function ce(i,o,c,m){if(o&&typeof o=="object")for(var M in o)Wl(i,M,o[M],c);else{o=_(o);for(var R=0,F=o.length;R<F;R++)Wl(i,o[R],c,m)}return this}var mi="_leaflet_events";function Ue(i,o,c,m){if(arguments.length===1)Iu(i),delete i[mi];else if(o&&typeof o=="object")for(var M in o)Zl(i,M,o[M],c);else if(o=_(o),arguments.length===2)Iu(i,function(tt){return P(o,tt)!==-1});else for(var R=0,F=o.length;R<F;R++)Zl(i,o[R],c,m);return this}function Iu(i,o){for(var c in i[mi]){var m=c.split(/\d/)[0];(!o||o(m))&&Zl(i,m,null,null,c)}}var Gl={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Wl(i,o,c,m){var M=o+l(c)+(m?"_"+l(m):"");if(i[mi]&&i[mi][M])return this;var R=function(tt){return c.call(m||i,tt||window.event)},F=R;!Ht.touchNative&&Ht.pointer&&o.indexOf("touch")===0?R=Nl(i,o,R):Ht.touch&&o==="dblclick"?R=Zt(i,R):"addEventListener"in i?o==="touchstart"||o==="touchmove"||o==="wheel"||o==="mousewheel"?i.addEventListener(Gl[o]||o,R,Ht.passiveEvents?{passive:!1}:!1):o==="mouseenter"||o==="mouseleave"?(R=function(tt){tt=tt||window.event,ql(i,tt)&&F(tt)},i.addEventListener(Gl[o],R,!1)):i.addEventListener(o,F,!1):i.attachEvent("on"+o,R),i[mi]=i[mi]||{},i[mi][M]=R}function Zl(i,o,c,m,M){M=M||o+l(c)+(m?"_"+l(m):"");var R=i[mi]&&i[mi][M];if(!R)return this;!Ht.touchNative&&Ht.pointer&&o.indexOf("touch")===0?kl(i,o,R):Ht.touch&&o==="dblclick"?Xt(i,R):"removeEventListener"in i?i.removeEventListener(Gl[o]||o,R,!1):i.detachEvent("on"+o,R),i[mi][M]=null}function hs(i){return i.stopPropagation?i.stopPropagation():i.originalEvent?i.originalEvent._stopped=!0:i.cancelBubble=!0,this}function Xl(i){return Wl(i,"wheel",hs),this}function zr(i){return ce(i,"mousedown touchstart dblclick contextmenu",hs),i._leaflet_disable_click=!0,this}function rn(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,this}function us(i){return rn(i),hs(i),this}function Du(i){if(i.composedPath)return i.composedPath();for(var o=[],c=i.target;c;)o.push(c),c=c.parentNode;return o}function Nu(i,o){if(!o)return new V(i.clientX,i.clientY);var c=Vl(o),m=c.boundingClientRect;return new V((i.clientX-m.left)/c.x-o.clientLeft,(i.clientY-m.top)/c.y-o.clientTop)}var im=Ht.linux&&Ht.chrome?window.devicePixelRatio:Ht.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function ku(i){return Ht.edge?i.wheelDeltaY/2:i.deltaY&&i.deltaMode===0?-i.deltaY/im:i.deltaY&&i.deltaMode===1?-i.deltaY*20:i.deltaY&&i.deltaMode===2?-i.deltaY*60:i.deltaX||i.deltaZ?0:i.wheelDelta?(i.wheelDeltaY||i.wheelDelta)/2:i.detail&&Math.abs(i.detail)<32765?-i.detail*20:i.detail?i.detail/-32765*60:0}function ql(i,o){var c=o.relatedTarget;if(!c)return!0;try{for(;c&&c!==i;)c=c.parentNode}catch{return!1}return c!==i}var sm={__proto__:null,on:ce,off:Ue,stopPropagation:hs,disableScrollPropagation:Xl,disableClickPropagation:zr,preventDefault:rn,stop:us,getPropagationPath:Du,getMousePosition:Nu,getWheelDelta:ku,isExternalTarget:ql,addListener:ce,removeListener:Ue},Ou=et.extend({run:function(i,o,c,m){this.stop(),this._el=i,this._inProgress=!0,this._duration=c||.25,this._easeOutPower=1/Math.max(m||.5,.2),this._startPos=un(i),this._offset=o.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=E(this._animate,this),this._step()},_step:function(i){var o=+new Date-this._startTime,c=this._duration*1e3;o<c?this._runFrame(this._easeOut(o/c),i):(this._runFrame(1),this._complete())},_runFrame:function(i,o){var c=this._startPos.add(this._offset.multiplyBy(i));o&&c._round(),Ce(this._el,c),this.fire("step")},_complete:function(){A(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(i){return 1-Math.pow(1-i,this._easeOutPower)}}),Se=et.extend({options:{crs:wt,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(i,o){o=g(this,o),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(i),this._initLayout(),this._onResize=r(this._onResize,this),this._initEvents(),o.maxBounds&&this.setMaxBounds(o.maxBounds),o.zoom!==void 0&&(this._zoom=this._limitZoom(o.zoom)),o.center&&o.zoom!==void 0&&this.setView($(o.center),o.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=re&&Ht.any3d&&!Ht.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),ce(this._proxy,Wt,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(i,o,c){if(o=o===void 0?this._zoom:this._limitZoom(o),i=this._limitCenter($(i),o,this.options.maxBounds),c=c||{},this._stop(),this._loaded&&!c.reset&&c!==!0){c.animate!==void 0&&(c.zoom=e({animate:c.animate},c.zoom),c.pan=e({animate:c.animate,duration:c.duration},c.pan));var m=this._zoom!==o?this._tryAnimatedZoom&&this._tryAnimatedZoom(i,o,c.zoom):this._tryAnimatedPan(i,c.pan);if(m)return clearTimeout(this._sizeTimer),this}return this._resetView(i,o,c.pan&&c.pan.noMoveStart),this},setZoom:function(i,o){return this._loaded?this.setView(this.getCenter(),i,{zoom:o}):(this._zoom=i,this)},zoomIn:function(i,o){return i=i||(Ht.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+i,o)},zoomOut:function(i,o){return i=i||(Ht.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-i,o)},setZoomAround:function(i,o,c){var m=this.getZoomScale(o),M=this.getSize().divideBy(2),R=i instanceof V?i:this.latLngToContainerPoint(i),F=R.subtract(M).multiplyBy(1-1/m),tt=this.containerPointToLatLng(M.add(F));return this.setView(tt,o,{zoom:c})},_getBoundsCenterZoom:function(i,o){o=o||{},i=i.getBounds?i.getBounds():pt(i);var c=G(o.paddingTopLeft||o.padding||[0,0]),m=G(o.paddingBottomRight||o.padding||[0,0]),M=this.getBoundsZoom(i,!1,c.add(m));if(M=typeof o.maxZoom=="number"?Math.min(o.maxZoom,M):M,M===1/0)return{center:i.getCenter(),zoom:M};var R=m.subtract(c).divideBy(2),F=this.project(i.getSouthWest(),M),tt=this.project(i.getNorthEast(),M),at=this.unproject(F.add(tt).divideBy(2).add(R),M);return{center:at,zoom:M}},fitBounds:function(i,o){if(i=pt(i),!i.isValid())throw new Error("Bounds are not valid.");var c=this._getBoundsCenterZoom(i,o);return this.setView(c.center,c.zoom,o)},fitWorld:function(i){return this.fitBounds([[-90,-180],[90,180]],i)},panTo:function(i,o){return this.setView(i,this._zoom,{pan:o})},panBy:function(i,o){if(i=G(i).round(),o=o||{},!i.x&&!i.y)return this.fire("moveend");if(o.animate!==!0&&!this.getSize().contains(i))return this._resetView(this.unproject(this.project(this.getCenter()).add(i)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Ou,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),o.noMoveStart||this.fire("movestart"),o.animate!==!1){jt(this._mapPane,"leaflet-pan-anim");var c=this._getMapPanePos().subtract(i).round();this._panAnim.run(this._mapPane,c,o.duration||.25,o.easeLinearity)}else this._rawPanBy(i),this.fire("move").fire("moveend");return this},flyTo:function(i,o,c){if(c=c||{},c.animate===!1||!Ht.any3d)return this.setView(i,o,c);this._stop();var m=this.project(this.getCenter()),M=this.project(i),R=this.getSize(),F=this._zoom;i=$(i),o=o===void 0?F:o;var tt=Math.max(R.x,R.y),at=tt*this.getZoomScale(F,o),vt=M.distanceTo(m)||1,Dt=1.42,ne=Dt*Dt;function pe(Ye){var Bo=Ye?-1:1,Xm=Ye?at:tt,qm=at*at-tt*tt+Bo*ne*ne*vt*vt,Ym=2*Xm*ne*vt,sc=qm/Ym,gd=Math.sqrt(sc*sc+1)-sc,$m=gd<1e-9?-18:Math.log(gd);return $m}function vn(Ye){return(Math.exp(Ye)-Math.exp(-Ye))/2}function Qe(Ye){return(Math.exp(Ye)+Math.exp(-Ye))/2}function Un(Ye){return vn(Ye)/Qe(Ye)}var Sn=pe(0);function Zs(Ye){return tt*(Qe(Sn)/Qe(Sn+Dt*Ye))}function Vm(Ye){return tt*(Qe(Sn)*Un(Sn+Dt*Ye)-vn(Sn))/ne}function Gm(Ye){return 1-Math.pow(1-Ye,1.5)}var Wm=Date.now(),pd=(pe(1)-Sn)/Dt,Zm=c.duration?1e3*c.duration:1e3*pd*.8;function md(){var Ye=(Date.now()-Wm)/Zm,Bo=Gm(Ye)*pd;Ye<=1?(this._flyToFrame=E(md,this),this._move(this.unproject(m.add(M.subtract(m).multiplyBy(Vm(Bo)/vt)),F),this.getScaleZoom(tt/Zs(Bo),F),{flyTo:!0})):this._move(i,o)._moveEnd(!0)}return this._moveStart(!0,c.noMoveStart),md.call(this),this},flyToBounds:function(i,o){var c=this._getBoundsCenterZoom(i,o);return this.flyTo(c.center,c.zoom,o)},setMaxBounds:function(i){return i=pt(i),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),i.isValid()?(this.options.maxBounds=i,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(i){var o=this.options.minZoom;return this.options.minZoom=i,this._loaded&&o!==i&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(i):this},setMaxZoom:function(i){var o=this.options.maxZoom;return this.options.maxZoom=i,this._loaded&&o!==i&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(i):this},panInsideBounds:function(i,o){this._enforcingBounds=!0;var c=this.getCenter(),m=this._limitCenter(c,this._zoom,pt(i));return c.equals(m)||this.panTo(m,o),this._enforcingBounds=!1,this},panInside:function(i,o){o=o||{};var c=G(o.paddingTopLeft||o.padding||[0,0]),m=G(o.paddingBottomRight||o.padding||[0,0]),M=this.project(this.getCenter()),R=this.project(i),F=this.getPixelBounds(),tt=xt([F.min.add(c),F.max.subtract(m)]),at=tt.getSize();if(!tt.contains(R)){this._enforcingBounds=!0;var vt=R.subtract(tt.getCenter()),Dt=tt.extend(R).getSize().subtract(at);M.x+=vt.x<0?-Dt.x:Dt.x,M.y+=vt.y<0?-Dt.y:Dt.y,this.panTo(this.unproject(M),o),this._enforcingBounds=!1}return this},invalidateSize:function(i){if(!this._loaded)return this;i=e({animate:!1,pan:!0},i===!0?{animate:!0}:i);var o=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var c=this.getSize(),m=o.divideBy(2).round(),M=c.divideBy(2).round(),R=m.subtract(M);return!R.x&&!R.y?this:(i.animate&&i.pan?this.panBy(R):(i.pan&&this._rawPanBy(R),this.fire("move"),i.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(r(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:o,newSize:c}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(i){if(i=this._locateOptions=e({timeout:1e4,watch:!1},i),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var o=r(this._handleGeolocationResponse,this),c=r(this._handleGeolocationError,this);return i.watch?this._locationWatchId=navigator.geolocation.watchPosition(o,c,i):navigator.geolocation.getCurrentPosition(o,c,i),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(i){if(this._container._leaflet_id){var o=i.code,c=i.message||(o===1?"permission denied":o===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:o,message:"Geolocation error: "+c+"."})}},_handleGeolocationResponse:function(i){if(this._container._leaflet_id){var o=i.coords.latitude,c=i.coords.longitude,m=new Et(o,c),M=m.toBounds(i.coords.accuracy*2),R=this._locateOptions;if(R.setView){var F=this.getBoundsZoom(M);this.setView(m,R.maxZoom?Math.min(F,R.maxZoom):F)}var tt={latlng:m,bounds:M,timestamp:i.timestamp};for(var at in i.coords)typeof i.coords[at]=="number"&&(tt[at]=i.coords[at]);this.fire("locationfound",tt)}},addHandler:function(i,o){if(!o)return this;var c=this[i]=new o(this);return this._handlers.push(c),this.options[i]&&c.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),de(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(A(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var i;for(i in this._layers)this._layers[i].remove();for(i in this._panes)de(this._panes[i]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(i,o){var c="leaflet-pane"+(i?" leaflet-"+i.replace("Pane","")+"-pane":""),m=Yt("div",c,o||this._mapPane);return i&&(this._panes[i]=m),m},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var i=this.getPixelBounds(),o=this.unproject(i.getBottomLeft()),c=this.unproject(i.getTopRight());return new lt(o,c)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(i,o,c){i=pt(i),c=G(c||[0,0]);var m=this.getZoom()||0,M=this.getMinZoom(),R=this.getMaxZoom(),F=i.getNorthWest(),tt=i.getSouthEast(),at=this.getSize().subtract(c),vt=xt(this.project(tt,m),this.project(F,m)).getSize(),Dt=Ht.any3d?this.options.zoomSnap:1,ne=at.x/vt.x,pe=at.y/vt.y,vn=o?Math.max(ne,pe):Math.min(ne,pe);return m=this.getScaleZoom(vn,m),Dt&&(m=Math.round(m/(Dt/100))*(Dt/100),m=o?Math.ceil(m/Dt)*Dt:Math.floor(m/Dt)*Dt),Math.max(M,Math.min(R,m))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new V(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(i,o){var c=this._getTopLeftPoint(i,o);return new ht(c,c.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(i){return this.options.crs.getProjectedBounds(i===void 0?this.getZoom():i)},getPane:function(i){return typeof i=="string"?this._panes[i]:i},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(i,o){var c=this.options.crs;return o=o===void 0?this._zoom:o,c.scale(i)/c.scale(o)},getScaleZoom:function(i,o){var c=this.options.crs;o=o===void 0?this._zoom:o;var m=c.zoom(i*c.scale(o));return isNaN(m)?1/0:m},project:function(i,o){return o=o===void 0?this._zoom:o,this.options.crs.latLngToPoint($(i),o)},unproject:function(i,o){return o=o===void 0?this._zoom:o,this.options.crs.pointToLatLng(G(i),o)},layerPointToLatLng:function(i){var o=G(i).add(this.getPixelOrigin());return this.unproject(o)},latLngToLayerPoint:function(i){var o=this.project($(i))._round();return o._subtract(this.getPixelOrigin())},wrapLatLng:function(i){return this.options.crs.wrapLatLng($(i))},wrapLatLngBounds:function(i){return this.options.crs.wrapLatLngBounds(pt(i))},distance:function(i,o){return this.options.crs.distance($(i),$(o))},containerPointToLayerPoint:function(i){return G(i).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(i){return G(i).add(this._getMapPanePos())},containerPointToLatLng:function(i){var o=this.containerPointToLayerPoint(G(i));return this.layerPointToLatLng(o)},latLngToContainerPoint:function(i){return this.layerPointToContainerPoint(this.latLngToLayerPoint($(i)))},mouseEventToContainerPoint:function(i){return Nu(i,this._container)},mouseEventToLayerPoint:function(i){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i))},mouseEventToLatLng:function(i){return this.layerPointToLatLng(this.mouseEventToLayerPoint(i))},_initContainer:function(i){var o=this._container=xe(i);if(o){if(o._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");ce(o,"scroll",this._onScroll,this),this._containerId=l(o)},_initLayout:function(){var i=this._container;this._fadeAnimated=this.options.fadeAnimation&&Ht.any3d,jt(i,"leaflet-container"+(Ht.touch?" leaflet-touch":"")+(Ht.retina?" leaflet-retina":"")+(Ht.ielt9?" leaflet-oldie":"")+(Ht.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var o=Ee(i,"position");o!=="absolute"&&o!=="relative"&&o!=="fixed"&&o!=="sticky"&&(i.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var i=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Ce(this._mapPane,new V(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(jt(i.markerPane,"leaflet-zoom-hide"),jt(i.shadowPane,"leaflet-zoom-hide"))},_resetView:function(i,o,c){Ce(this._mapPane,new V(0,0));var m=!this._loaded;this._loaded=!0,o=this._limitZoom(o),this.fire("viewprereset");var M=this._zoom!==o;this._moveStart(M,c)._move(i,o)._moveEnd(M),this.fire("viewreset"),m&&this.fire("load")},_moveStart:function(i,o){return i&&this.fire("zoomstart"),o||this.fire("movestart"),this},_move:function(i,o,c,m){o===void 0&&(o=this._zoom);var M=this._zoom!==o;return this._zoom=o,this._lastCenter=i,this._pixelOrigin=this._getNewPixelOrigin(i),m?c&&c.pinch&&this.fire("zoom",c):((M||c&&c.pinch)&&this.fire("zoom",c),this.fire("move",c)),this},_moveEnd:function(i){return i&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return A(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(i){Ce(this._mapPane,this._getMapPanePos().subtract(i))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(i){this._targets={},this._targets[l(this._container)]=this;var o=i?Ue:ce;o(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&o(window,"resize",this._onResize,this),Ht.any3d&&this.options.transform3DLimit&&(i?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){A(this._resizeRequest),this._resizeRequest=E(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var i=this._getMapPanePos();Math.max(Math.abs(i.x),Math.abs(i.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(i,o){for(var c=[],m,M=o==="mouseout"||o==="mouseover",R=i.target||i.srcElement,F=!1;R;){if(m=this._targets[l(R)],m&&(o==="click"||o==="preclick")&&this._draggableMoved(m)){F=!0;break}if(m&&m.listens(o,!0)&&(M&&!ql(R,i)||(c.push(m),M))||R===this._container)break;R=R.parentNode}return!c.length&&!F&&!M&&this.listens(o,!0)&&(c=[this]),c},_isClickDisabled:function(i){for(;i&&i!==this._container;){if(i._leaflet_disable_click)return!0;i=i.parentNode}},_handleDOMEvent:function(i){var o=i.target||i.srcElement;if(!(!this._loaded||o._leaflet_disable_events||i.type==="click"&&this._isClickDisabled(o))){var c=i.type;c==="mousedown"&&Hl(o),this._fireDOMEvent(i,c)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(i,o,c){if(i.type==="click"){var m=e({},i);m.type="preclick",this._fireDOMEvent(m,m.type,c)}var M=this._findEventTargets(i,o);if(c){for(var R=[],F=0;F<c.length;F++)c[F].listens(o,!0)&&R.push(c[F]);M=R.concat(M)}if(M.length){o==="contextmenu"&&rn(i);var tt=M[0],at={originalEvent:i};if(i.type!=="keypress"&&i.type!=="keydown"&&i.type!=="keyup"){var vt=tt.getLatLng&&(!tt._radius||tt._radius<=10);at.containerPoint=vt?this.latLngToContainerPoint(tt.getLatLng()):this.mouseEventToContainerPoint(i),at.layerPoint=this.containerPointToLayerPoint(at.containerPoint),at.latlng=vt?tt.getLatLng():this.layerPointToLatLng(at.layerPoint)}for(F=0;F<M.length;F++)if(M[F].fire(o,at,!0),at.originalEvent._stopped||M[F].options.bubblingMouseEvents===!1&&P(this._mouseEvents,o)!==-1)return}},_draggableMoved:function(i){return i=i.dragging&&i.dragging.enabled()?i:this,i.dragging&&i.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var i=0,o=this._handlers.length;i<o;i++)this._handlers[i].disable()},whenReady:function(i,o){return this._loaded?i.call(o||this,{target:this}):this.on("load",i,o),this},_getMapPanePos:function(){return un(this._mapPane)||new V(0,0)},_moved:function(){var i=this._getMapPanePos();return i&&!i.equals([0,0])},_getTopLeftPoint:function(i,o){var c=i&&o!==void 0?this._getNewPixelOrigin(i,o):this.getPixelOrigin();return c.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(i,o){var c=this.getSize()._divideBy(2);return this.project(i,o)._subtract(c)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(i,o,c){var m=this._getNewPixelOrigin(c,o);return this.project(i,o)._subtract(m)},_latLngBoundsToNewLayerBounds:function(i,o,c){var m=this._getNewPixelOrigin(c,o);return xt([this.project(i.getSouthWest(),o)._subtract(m),this.project(i.getNorthWest(),o)._subtract(m),this.project(i.getSouthEast(),o)._subtract(m),this.project(i.getNorthEast(),o)._subtract(m)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(i){return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint())},_limitCenter:function(i,o,c){if(!c)return i;var m=this.project(i,o),M=this.getSize().divideBy(2),R=new ht(m.subtract(M),m.add(M)),F=this._getBoundsOffset(R,c,o);return Math.abs(F.x)<=1&&Math.abs(F.y)<=1?i:this.unproject(m.add(F),o)},_limitOffset:function(i,o){if(!o)return i;var c=this.getPixelBounds(),m=new ht(c.min.add(i),c.max.add(i));return i.add(this._getBoundsOffset(m,o))},_getBoundsOffset:function(i,o,c){var m=xt(this.project(o.getNorthEast(),c),this.project(o.getSouthWest(),c)),M=m.min.subtract(i.min),R=m.max.subtract(i.max),F=this._rebound(M.x,-R.x),tt=this._rebound(M.y,-R.y);return new V(F,tt)},_rebound:function(i,o){return i+o>0?Math.round(i-o)/2:Math.max(0,Math.ceil(i))-Math.max(0,Math.floor(o))},_limitZoom:function(i){var o=this.getMinZoom(),c=this.getMaxZoom(),m=Ht.any3d?this.options.zoomSnap:1;return m&&(i=Math.round(i/m)*m),Math.max(o,Math.min(c,i))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Ie(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(i,o){var c=this._getCenterOffset(i)._trunc();return(o&&o.animate)!==!0&&!this.getSize().contains(c)?!1:(this.panBy(c,o),!0)},_createAnimProxy:function(){var i=this._proxy=Yt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(i),this.on("zoomanim",function(o){var c=ie,m=this._proxy.style[c];qe(this._proxy,this.project(o.center,o.zoom),this.getZoomScale(o.zoom,1)),m===this._proxy.style[c]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){de(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var i=this.getCenter(),o=this.getZoom();qe(this._proxy,this.project(i,o),this.getZoomScale(o,1))},_catchTransitionEnd:function(i){this._animatingZoom&&i.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(i,o,c){if(this._animatingZoom)return!0;if(c=c||{},!this._zoomAnimated||c.animate===!1||this._nothingToAnimate()||Math.abs(o-this._zoom)>this.options.zoomAnimationThreshold)return!1;var m=this.getZoomScale(o),M=this._getCenterOffset(i)._divideBy(1-1/m);return c.animate!==!0&&!this.getSize().contains(M)?!1:(E(function(){this._moveStart(!0,c.noMoveStart||!1)._animateZoom(i,o,!0)},this),!0)},_animateZoom:function(i,o,c,m){this._mapPane&&(c&&(this._animatingZoom=!0,this._animateToCenter=i,this._animateToZoom=o,jt(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:i,zoom:o,noUpdate:m}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(r(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Ie(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function rm(i,o){return new Se(i,o)}var $n=Y.extend({options:{position:"topright"},initialize:function(i){g(this,i)},getPosition:function(){return this.options.position},setPosition:function(i){var o=this._map;return o&&o.removeControl(this),this.options.position=i,o&&o.addControl(this),this},getContainer:function(){return this._container},addTo:function(i){this.remove(),this._map=i;var o=this._container=this.onAdd(i),c=this.getPosition(),m=i._controlCorners[c];return jt(o,"leaflet-control"),c.indexOf("bottom")!==-1?m.insertBefore(o,m.firstChild):m.appendChild(o),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(de(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(i){this._map&&i&&i.screenX>0&&i.screenY>0&&this._map.getContainer().focus()}}),Hr=function(i){return new $n(i)};Se.include({addControl:function(i){return i.addTo(this),this},removeControl:function(i){return i.remove(),this},_initControlPos:function(){var i=this._controlCorners={},o="leaflet-",c=this._controlContainer=Yt("div",o+"control-container",this._container);function m(M,R){var F=o+M+" "+o+R;i[M+R]=Yt("div",F,c)}m("top","left"),m("top","right"),m("bottom","left"),m("bottom","right")},_clearControlPos:function(){for(var i in this._controlCorners)de(this._controlCorners[i]);de(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Uu=$n.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(i,o,c,m){return c<m?-1:m<c?1:0}},initialize:function(i,o,c){g(this,c),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var m in i)this._addLayer(i[m],m);for(m in o)this._addLayer(o[m],m,!0)},onAdd:function(i){this._initLayout(),this._update(),this._map=i,i.on("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(i){return $n.prototype.addTo.call(this,i),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(i,o){return this._addLayer(i,o),this._map?this._update():this},addOverlay:function(i,o){return this._addLayer(i,o,!0),this._map?this._update():this},removeLayer:function(i){i.off("add remove",this._onLayerChange,this);var o=this._getLayer(l(i));return o&&this._layers.splice(this._layers.indexOf(o),1),this._map?this._update():this},expand:function(){jt(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var i=this._map.getSize().y-(this._container.offsetTop+50);return i<this._section.clientHeight?(jt(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=i+"px"):Ie(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Ie(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var i="leaflet-control-layers",o=this._container=Yt("div",i),c=this.options.collapsed;o.setAttribute("aria-haspopup",!0),zr(o),Xl(o);var m=this._section=Yt("section",i+"-list");c&&(this._map.on("click",this.collapse,this),ce(o,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var M=this._layersLink=Yt("a",i+"-toggle",o);M.href="#",M.title="Layers",M.setAttribute("role","button"),ce(M,{keydown:function(R){R.keyCode===13&&this._expandSafely()},click:function(R){rn(R),this._expandSafely()}},this),c||this.expand(),this._baseLayersList=Yt("div",i+"-base",m),this._separator=Yt("div",i+"-separator",m),this._overlaysList=Yt("div",i+"-overlays",m),o.appendChild(m)},_getLayer:function(i){for(var o=0;o<this._layers.length;o++)if(this._layers[o]&&l(this._layers[o].layer)===i)return this._layers[o]},_addLayer:function(i,o,c){this._map&&i.on("add remove",this._onLayerChange,this),this._layers.push({layer:i,name:o,overlay:c}),this.options.sortLayers&&this._layers.sort(r(function(m,M){return this.options.sortFunction(m.layer,M.layer,m.name,M.name)},this)),this.options.autoZIndex&&i.setZIndex&&(this._lastZIndex++,i.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;ye(this._baseLayersList),ye(this._overlaysList),this._layerControlInputs=[];var i,o,c,m,M=0;for(c=0;c<this._layers.length;c++)m=this._layers[c],this._addItem(m),o=o||m.overlay,i=i||!m.overlay,M+=m.overlay?0:1;return this.options.hideSingleBase&&(i=i&&M>1,this._baseLayersList.style.display=i?"":"none"),this._separator.style.display=o&&i?"":"none",this},_onLayerChange:function(i){this._handlingClick||this._update();var o=this._getLayer(l(i.target)),c=o.overlay?i.type==="add"?"overlayadd":"overlayremove":i.type==="add"?"baselayerchange":null;c&&this._map.fire(c,o)},_createRadioElement:function(i,o){var c='<input type="radio" class="leaflet-control-layers-selector" name="'+i+'"'+(o?' checked="checked"':"")+"/>",m=document.createElement("div");return m.innerHTML=c,m.firstChild},_addItem:function(i){var o=document.createElement("label"),c=this._map.hasLayer(i.layer),m;i.overlay?(m=document.createElement("input"),m.type="checkbox",m.className="leaflet-control-layers-selector",m.defaultChecked=c):m=this._createRadioElement("leaflet-base-layers_"+l(this),c),this._layerControlInputs.push(m),m.layerId=l(i.layer),ce(m,"click",this._onInputClick,this);var M=document.createElement("span");M.innerHTML=" "+i.name;var R=document.createElement("span");o.appendChild(R),R.appendChild(m),R.appendChild(M);var F=i.overlay?this._overlaysList:this._baseLayersList;return F.appendChild(o),this._checkDisabledLayers(),o},_onInputClick:function(){if(!this._preventClick){var i=this._layerControlInputs,o,c,m=[],M=[];this._handlingClick=!0;for(var R=i.length-1;R>=0;R--)o=i[R],c=this._getLayer(o.layerId).layer,o.checked?m.push(c):o.checked||M.push(c);for(R=0;R<M.length;R++)this._map.hasLayer(M[R])&&this._map.removeLayer(M[R]);for(R=0;R<m.length;R++)this._map.hasLayer(m[R])||this._map.addLayer(m[R]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var i=this._layerControlInputs,o,c,m=this._map.getZoom(),M=i.length-1;M>=0;M--)o=i[M],c=this._getLayer(o.layerId).layer,o.disabled=c.options.minZoom!==void 0&&m<c.options.minZoom||c.options.maxZoom!==void 0&&m>c.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var i=this._section;this._preventClick=!0,ce(i,"click",rn),this.expand();var o=this;setTimeout(function(){Ue(i,"click",rn),o._preventClick=!1})}}),om=function(i,o,c){return new Uu(i,o,c)},Yl=$n.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(i){var o="leaflet-control-zoom",c=Yt("div",o+" leaflet-bar"),m=this.options;return this._zoomInButton=this._createButton(m.zoomInText,m.zoomInTitle,o+"-in",c,this._zoomIn),this._zoomOutButton=this._createButton(m.zoomOutText,m.zoomOutTitle,o+"-out",c,this._zoomOut),this._updateDisabled(),i.on("zoomend zoomlevelschange",this._updateDisabled,this),c},onRemove:function(i){i.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(i){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(i.shiftKey?3:1))},_zoomOut:function(i){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(i.shiftKey?3:1))},_createButton:function(i,o,c,m,M){var R=Yt("a",c,m);return R.innerHTML=i,R.href="#",R.title=o,R.setAttribute("role","button"),R.setAttribute("aria-label",o),zr(R),ce(R,"click",us),ce(R,"click",M,this),ce(R,"click",this._refocusOnMap,this),R},_updateDisabled:function(){var i=this._map,o="leaflet-disabled";Ie(this._zoomInButton,o),Ie(this._zoomOutButton,o),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||i._zoom===i.getMinZoom())&&(jt(this._zoomOutButton,o),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||i._zoom===i.getMaxZoom())&&(jt(this._zoomInButton,o),this._zoomInButton.setAttribute("aria-disabled","true"))}});Se.mergeOptions({zoomControl:!0}),Se.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Yl,this.addControl(this.zoomControl))});var am=function(i){return new Yl(i)},Bu=$n.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(i){var o="leaflet-control-scale",c=Yt("div",o),m=this.options;return this._addScales(m,o+"-line",c),i.on(m.updateWhenIdle?"moveend":"move",this._update,this),i.whenReady(this._update,this),c},onRemove:function(i){i.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(i,o,c){i.metric&&(this._mScale=Yt("div",o,c)),i.imperial&&(this._iScale=Yt("div",o,c))},_update:function(){var i=this._map,o=i.getSize().y/2,c=i.distance(i.containerPointToLatLng([0,o]),i.containerPointToLatLng([this.options.maxWidth,o]));this._updateScales(c)},_updateScales:function(i){this.options.metric&&i&&this._updateMetric(i),this.options.imperial&&i&&this._updateImperial(i)},_updateMetric:function(i){var o=this._getRoundNum(i),c=o<1e3?o+" m":o/1e3+" km";this._updateScale(this._mScale,c,o/i)},_updateImperial:function(i){var o=i*3.2808399,c,m,M;o>5280?(c=o/5280,m=this._getRoundNum(c),this._updateScale(this._iScale,m+" mi",m/c)):(M=this._getRoundNum(o),this._updateScale(this._iScale,M+" ft",M/o))},_updateScale:function(i,o,c){i.style.width=Math.round(this.options.maxWidth*c)+"px",i.innerHTML=o},_getRoundNum:function(i){var o=Math.pow(10,(Math.floor(i)+"").length-1),c=i/o;return c=c>=10?10:c>=5?5:c>=3?3:c>=2?2:1,o*c}}),lm=function(i){return new Bu(i)},cm='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',$l=$n.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(Ht.inlineSvg?cm+" ":"")+"Leaflet</a>"},initialize:function(i){g(this,i),this._attributions={}},onAdd:function(i){i.attributionControl=this,this._container=Yt("div","leaflet-control-attribution"),zr(this._container);for(var o in i._layers)i._layers[o].getAttribution&&this.addAttribution(i._layers[o].getAttribution());return this._update(),i.on("layeradd",this._addAttribution,this),this._container},onRemove:function(i){i.off("layeradd",this._addAttribution,this)},_addAttribution:function(i){i.layer.getAttribution&&(this.addAttribution(i.layer.getAttribution()),i.layer.once("remove",function(){this.removeAttribution(i.layer.getAttribution())},this))},setPrefix:function(i){return this.options.prefix=i,this._update(),this},addAttribution:function(i){return i?(this._attributions[i]||(this._attributions[i]=0),this._attributions[i]++,this._update(),this):this},removeAttribution:function(i){return i?(this._attributions[i]&&(this._attributions[i]--,this._update()),this):this},_update:function(){if(this._map){var i=[];for(var o in this._attributions)this._attributions[o]&&i.push(o);var c=[];this.options.prefix&&c.push(this.options.prefix),i.length&&c.push(i.join(", ")),this._container.innerHTML=c.join(' <span aria-hidden="true">|</span> ')}}});Se.mergeOptions({attributionControl:!0}),Se.addInitHook(function(){this.options.attributionControl&&new $l().addTo(this)});var hm=function(i){return new $l(i)};$n.Layers=Uu,$n.Zoom=Yl,$n.Scale=Bu,$n.Attribution=$l,Hr.layers=om,Hr.zoom=am,Hr.scale=lm,Hr.attribution=hm;var gi=Y.extend({initialize:function(i){this._map=i},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});gi.addTo=function(i,o){return i.addHandler(o,this),this};var um={Events:X},Fu=Ht.touch?"touchstart mousedown":"mousedown",Xi=et.extend({options:{clickTolerance:3},initialize:function(i,o,c,m){g(this,m),this._element=i,this._dragStartTarget=o||i,this._preventOutline=c},enable:function(){this._enabled||(ce(this._dragStartTarget,Fu,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Xi._dragging===this&&this.finishDrag(!0),Ue(this._dragStartTarget,Fu,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(i){if(this._enabled&&(this._moved=!1,!Me(this._element,"leaflet-zoom-anim"))){if(i.touches&&i.touches.length!==1){Xi._dragging===this&&this.finishDrag();return}if(!(Xi._dragging||i.shiftKey||i.which!==1&&i.button!==1&&!i.touches)&&(Xi._dragging=this,this._preventOutline&&Hl(this._element),Bl(),Zi(),!this._moving)){this.fire("down");var o=i.touches?i.touches[0]:i,c=Lu(this._element);this._startPoint=new V(o.clientX,o.clientY),this._startPos=un(this._element),this._parentScale=Vl(c);var m=i.type==="mousedown";ce(document,m?"mousemove":"touchmove",this._onMove,this),ce(document,m?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(i){if(this._enabled){if(i.touches&&i.touches.length>1){this._moved=!0;return}var o=i.touches&&i.touches.length===1?i.touches[0]:i,c=new V(o.clientX,o.clientY)._subtract(this._startPoint);!c.x&&!c.y||Math.abs(c.x)+Math.abs(c.y)<this.options.clickTolerance||(c.x/=this._parentScale.x,c.y/=this._parentScale.y,rn(i),this._moved||(this.fire("dragstart"),this._moved=!0,jt(document.body,"leaflet-dragging"),this._lastTarget=i.target||i.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),jt(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(c),this._moving=!0,this._lastEvent=i,this._updatePosition())}},_updatePosition:function(){var i={originalEvent:this._lastEvent};this.fire("predrag",i),Ce(this._element,this._newPos),this.fire("drag",i)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(i){Ie(document.body,"leaflet-dragging"),this._lastTarget&&(Ie(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Ue(document,"mousemove touchmove",this._onMove,this),Ue(document,"mouseup touchend touchcancel",this._onUp,this),Fl(),Br();var o=this._moved&&this._moving;this._moving=!1,Xi._dragging=!1,o&&this.fire("dragend",{noInertia:i,distance:this._newPos.distanceTo(this._startPos)})}});function zu(i,o,c){var m,M=[1,4,2,8],R,F,tt,at,vt,Dt,ne,pe;for(R=0,Dt=i.length;R<Dt;R++)i[R]._code=ds(i[R],o);for(tt=0;tt<4;tt++){for(ne=M[tt],m=[],R=0,Dt=i.length,F=Dt-1;R<Dt;F=R++)at=i[R],vt=i[F],at._code&ne?vt._code&ne||(pe=Ao(vt,at,ne,o,c),pe._code=ds(pe,o),m.push(pe)):(vt._code&ne&&(pe=Ao(vt,at,ne,o,c),pe._code=ds(pe,o),m.push(pe)),m.push(at));i=m}return i}function Hu(i,o){var c,m,M,R,F,tt,at,vt,Dt;if(!i||i.length===0)throw new Error("latlngs not passed");On(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var ne=$([0,0]),pe=pt(i),vn=pe.getNorthWest().distanceTo(pe.getSouthWest())*pe.getNorthEast().distanceTo(pe.getNorthWest());vn<1700&&(ne=Kl(i));var Qe=i.length,Un=[];for(c=0;c<Qe;c++){var Sn=$(i[c]);Un.push(o.project($([Sn.lat-ne.lat,Sn.lng-ne.lng])))}for(tt=at=vt=0,c=0,m=Qe-1;c<Qe;m=c++)M=Un[c],R=Un[m],F=M.y*R.x-R.y*M.x,at+=(M.x+R.x)*F,vt+=(M.y+R.y)*F,tt+=F*3;tt===0?Dt=Un[0]:Dt=[at/tt,vt/tt];var Zs=o.unproject(G(Dt));return $([Zs.lat+ne.lat,Zs.lng+ne.lng])}function Kl(i){for(var o=0,c=0,m=0,M=0;M<i.length;M++){var R=$(i[M]);o+=R.lat,c+=R.lng,m++}return $([o/m,c/m])}var dm={__proto__:null,clipPolygon:zu,polygonCenter:Hu,centroid:Kl};function Vu(i,o){if(!o||!i.length)return i.slice();var c=o*o;return i=mm(i,c),i=pm(i,c),i}function Gu(i,o,c){return Math.sqrt(Vr(i,o,c,!0))}function fm(i,o,c){return Vr(i,o,c)}function pm(i,o){var c=i.length,m=typeof Uint8Array<"u"?Uint8Array:Array,M=new m(c);M[0]=M[c-1]=1,Jl(i,M,o,0,c-1);var R,F=[];for(R=0;R<c;R++)M[R]&&F.push(i[R]);return F}function Jl(i,o,c,m,M){var R=0,F,tt,at;for(tt=m+1;tt<=M-1;tt++)at=Vr(i[tt],i[m],i[M],!0),at>R&&(F=tt,R=at);R>c&&(o[F]=1,Jl(i,o,c,m,F),Jl(i,o,c,F,M))}function mm(i,o){for(var c=[i[0]],m=1,M=0,R=i.length;m<R;m++)gm(i[m],i[M])>o&&(c.push(i[m]),M=m);return M<R-1&&c.push(i[R-1]),c}var Wu;function Zu(i,o,c,m,M){var R=m?Wu:ds(i,c),F=ds(o,c),tt,at,vt;for(Wu=F;;){if(!(R|F))return[i,o];if(R&F)return!1;tt=R||F,at=Ao(i,o,tt,c,M),vt=ds(at,c),tt===R?(i=at,R=vt):(o=at,F=vt)}}function Ao(i,o,c,m,M){var R=o.x-i.x,F=o.y-i.y,tt=m.min,at=m.max,vt,Dt;return c&8?(vt=i.x+R*(at.y-i.y)/F,Dt=at.y):c&4?(vt=i.x+R*(tt.y-i.y)/F,Dt=tt.y):c&2?(vt=at.x,Dt=i.y+F*(at.x-i.x)/R):c&1&&(vt=tt.x,Dt=i.y+F*(tt.x-i.x)/R),new V(vt,Dt,M)}function ds(i,o){var c=0;return i.x<o.min.x?c|=1:i.x>o.max.x&&(c|=2),i.y<o.min.y?c|=4:i.y>o.max.y&&(c|=8),c}function gm(i,o){var c=o.x-i.x,m=o.y-i.y;return c*c+m*m}function Vr(i,o,c,m){var M=o.x,R=o.y,F=c.x-M,tt=c.y-R,at=F*F+tt*tt,vt;return at>0&&(vt=((i.x-M)*F+(i.y-R)*tt)/at,vt>1?(M=c.x,R=c.y):vt>0&&(M+=F*vt,R+=tt*vt)),F=i.x-M,tt=i.y-R,m?F*F+tt*tt:new V(M,R)}function On(i){return!v(i[0])||typeof i[0][0]!="object"&&typeof i[0][0]<"u"}function Xu(i){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),On(i)}function qu(i,o){var c,m,M,R,F,tt,at,vt;if(!i||i.length===0)throw new Error("latlngs not passed");On(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var Dt=$([0,0]),ne=pt(i),pe=ne.getNorthWest().distanceTo(ne.getSouthWest())*ne.getNorthEast().distanceTo(ne.getNorthWest());pe<1700&&(Dt=Kl(i));var vn=i.length,Qe=[];for(c=0;c<vn;c++){var Un=$(i[c]);Qe.push(o.project($([Un.lat-Dt.lat,Un.lng-Dt.lng])))}for(c=0,m=0;c<vn-1;c++)m+=Qe[c].distanceTo(Qe[c+1])/2;if(m===0)vt=Qe[0];else for(c=0,R=0;c<vn-1;c++)if(F=Qe[c],tt=Qe[c+1],M=F.distanceTo(tt),R+=M,R>m){at=(R-m)/M,vt=[tt.x-at*(tt.x-F.x),tt.y-at*(tt.y-F.y)];break}var Sn=o.unproject(G(vt));return $([Sn.lat+Dt.lat,Sn.lng+Dt.lng])}var _m={__proto__:null,simplify:Vu,pointToSegmentDistance:Gu,closestPointOnSegment:fm,clipSegment:Zu,_getEdgeIntersection:Ao,_getBitCode:ds,_sqClosestPointOnSegment:Vr,isFlat:On,_flat:Xu,polylineCenter:qu},jl={project:function(i){return new V(i.lng,i.lat)},unproject:function(i){return new Et(i.y,i.x)},bounds:new ht([-180,-90],[180,90])},Ql={R:6378137,R_MINOR:6356752314245179e-9,bounds:new ht([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(i){var o=Math.PI/180,c=this.R,m=i.lat*o,M=this.R_MINOR/c,R=Math.sqrt(1-M*M),F=R*Math.sin(m),tt=Math.tan(Math.PI/4-m/2)/Math.pow((1-F)/(1+F),R/2);return m=-c*Math.log(Math.max(tt,1e-10)),new V(i.lng*o*c,m)},unproject:function(i){for(var o=180/Math.PI,c=this.R,m=this.R_MINOR/c,M=Math.sqrt(1-m*m),R=Math.exp(-i.y/c),F=Math.PI/2-2*Math.atan(R),tt=0,at=.1,vt;tt<15&&Math.abs(at)>1e-7;tt++)vt=M*Math.sin(F),vt=Math.pow((1-vt)/(1+vt),M/2),at=Math.PI/2-2*Math.atan(R*vt)-F,F+=at;return new Et(F*o,i.x*o/c)}},vm={__proto__:null,LonLat:jl,Mercator:Ql,SphericalMercator:_t},xm=e({},ot,{code:"EPSG:3395",projection:Ql,transformation:(function(){var i=.5/(Math.PI*Ql.R);return nt(i,.5,-i,.5)})()}),Yu=e({},ot,{code:"EPSG:4326",projection:jl,transformation:nt(1/180,1,-1/180,.5)}),ym=e({},W,{projection:jl,transformation:nt(1,0,-1,0),scale:function(i){return Math.pow(2,i)},zoom:function(i){return Math.log(i)/Math.LN2},distance:function(i,o){var c=o.lng-i.lng,m=o.lat-i.lat;return Math.sqrt(c*c+m*m)},infinite:!0});W.Earth=ot,W.EPSG3395=xm,W.EPSG3857=wt,W.EPSG900913=Ft,W.EPSG4326=Yu,W.Simple=ym;var Kn=et.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(i){return i.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(i){return i&&i.removeLayer(this),this},getPane:function(i){return this._map.getPane(i?this.options[i]||i:this.options.pane)},addInteractiveTarget:function(i){return this._map._targets[l(i)]=this,this},removeInteractiveTarget:function(i){return delete this._map._targets[l(i)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(i){var o=i.target;if(o.hasLayer(this)){if(this._map=o,this._zoomAnimated=o._zoomAnimated,this.getEvents){var c=this.getEvents();o.on(c,this),this.once("remove",function(){o.off(c,this)},this)}this.onAdd(o),this.fire("add"),o.fire("layeradd",{layer:this})}}});Se.include({addLayer:function(i){if(!i._layerAdd)throw new Error("The provided object is not a Layer.");var o=l(i);return this._layers[o]?this:(this._layers[o]=i,i._mapToAdd=this,i.beforeAdd&&i.beforeAdd(this),this.whenReady(i._layerAdd,i),this)},removeLayer:function(i){var o=l(i);return this._layers[o]?(this._loaded&&i.onRemove(this),delete this._layers[o],this._loaded&&(this.fire("layerremove",{layer:i}),i.fire("remove")),i._map=i._mapToAdd=null,this):this},hasLayer:function(i){return l(i)in this._layers},eachLayer:function(i,o){for(var c in this._layers)i.call(o,this._layers[c]);return this},_addLayers:function(i){i=i?v(i)?i:[i]:[];for(var o=0,c=i.length;o<c;o++)this.addLayer(i[o])},_addZoomLimit:function(i){(!isNaN(i.options.maxZoom)||!isNaN(i.options.minZoom))&&(this._zoomBoundLayers[l(i)]=i,this._updateZoomLevels())},_removeZoomLimit:function(i){var o=l(i);this._zoomBoundLayers[o]&&(delete this._zoomBoundLayers[o],this._updateZoomLevels())},_updateZoomLevels:function(){var i=1/0,o=-1/0,c=this._getZoomSpan();for(var m in this._zoomBoundLayers){var M=this._zoomBoundLayers[m].options;i=M.minZoom===void 0?i:Math.min(i,M.minZoom),o=M.maxZoom===void 0?o:Math.max(o,M.maxZoom)}this._layersMaxZoom=o===-1/0?void 0:o,this._layersMinZoom=i===1/0?void 0:i,c!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var zs=Kn.extend({initialize:function(i,o){g(this,o),this._layers={};var c,m;if(i)for(c=0,m=i.length;c<m;c++)this.addLayer(i[c])},addLayer:function(i){var o=this.getLayerId(i);return this._layers[o]=i,this._map&&this._map.addLayer(i),this},removeLayer:function(i){var o=i in this._layers?i:this.getLayerId(i);return this._map&&this._layers[o]&&this._map.removeLayer(this._layers[o]),delete this._layers[o],this},hasLayer:function(i){var o=typeof i=="number"?i:this.getLayerId(i);return o in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(i){var o=Array.prototype.slice.call(arguments,1),c,m;for(c in this._layers)m=this._layers[c],m[i]&&m[i].apply(m,o);return this},onAdd:function(i){this.eachLayer(i.addLayer,i)},onRemove:function(i){this.eachLayer(i.removeLayer,i)},eachLayer:function(i,o){for(var c in this._layers)i.call(o,this._layers[c]);return this},getLayer:function(i){return this._layers[i]},getLayers:function(){var i=[];return this.eachLayer(i.push,i),i},setZIndex:function(i){return this.invoke("setZIndex",i)},getLayerId:function(i){return l(i)}}),bm=function(i,o){return new zs(i,o)},Ti=zs.extend({addLayer:function(i){return this.hasLayer(i)?this:(i.addEventParent(this),zs.prototype.addLayer.call(this,i),this.fire("layeradd",{layer:i}))},removeLayer:function(i){return this.hasLayer(i)?(i in this._layers&&(i=this._layers[i]),i.removeEventParent(this),zs.prototype.removeLayer.call(this,i),this.fire("layerremove",{layer:i})):this},setStyle:function(i){return this.invoke("setStyle",i)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var i=new lt;for(var o in this._layers){var c=this._layers[o];i.extend(c.getBounds?c.getBounds():c.getLatLng())}return i}}),Mm=function(i,o){return new Ti(i,o)},Hs=Y.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(i){g(this,i)},createIcon:function(i){return this._createIcon("icon",i)},createShadow:function(i){return this._createIcon("shadow",i)},_createIcon:function(i,o){var c=this._getIconUrl(i);if(!c){if(i==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var m=this._createImg(c,o&&o.tagName==="IMG"?o:null);return this._setIconStyles(m,i),(this.options.crossOrigin||this.options.crossOrigin==="")&&(m.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),m},_setIconStyles:function(i,o){var c=this.options,m=c[o+"Size"];typeof m=="number"&&(m=[m,m]);var M=G(m),R=G(o==="shadow"&&c.shadowAnchor||c.iconAnchor||M&&M.divideBy(2,!0));i.className="leaflet-marker-"+o+" "+(c.className||""),R&&(i.style.marginLeft=-R.x+"px",i.style.marginTop=-R.y+"px"),M&&(i.style.width=M.x+"px",i.style.height=M.y+"px")},_createImg:function(i,o){return o=o||document.createElement("img"),o.src=i,o},_getIconUrl:function(i){return Ht.retina&&this.options[i+"RetinaUrl"]||this.options[i+"Url"]}});function Sm(i){return new Hs(i)}var Gr=Hs.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(i){return typeof Gr.imagePath!="string"&&(Gr.imagePath=this._detectIconPath()),(this.options.imagePath||Gr.imagePath)+Hs.prototype._getIconUrl.call(this,i)},_stripUrl:function(i){var o=function(c,m,M){var R=m.exec(c);return R&&R[M]};return i=o(i,/^url\((['"])?(.+)\1\)$/,2),i&&o(i,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var i=Yt("div","leaflet-default-icon-path",document.body),o=Ee(i,"background-image")||Ee(i,"backgroundImage");if(document.body.removeChild(i),o=this._stripUrl(o),o)return o;var c=document.querySelector('link[href$="leaflet.css"]');return c?c.href.substring(0,c.href.length-11-1):""}}),$u=gi.extend({initialize:function(i){this._marker=i},addHooks:function(){var i=this._marker._icon;this._draggable||(this._draggable=new Xi(i,i,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),jt(i,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Ie(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(i){var o=this._marker,c=o._map,m=this._marker.options.autoPanSpeed,M=this._marker.options.autoPanPadding,R=un(o._icon),F=c.getPixelBounds(),tt=c.getPixelOrigin(),at=xt(F.min._subtract(tt).add(M),F.max._subtract(tt).subtract(M));if(!at.contains(R)){var vt=G((Math.max(at.max.x,R.x)-at.max.x)/(F.max.x-at.max.x)-(Math.min(at.min.x,R.x)-at.min.x)/(F.min.x-at.min.x),(Math.max(at.max.y,R.y)-at.max.y)/(F.max.y-at.max.y)-(Math.min(at.min.y,R.y)-at.min.y)/(F.min.y-at.min.y)).multiplyBy(m);c.panBy(vt,{animate:!1}),this._draggable._newPos._add(vt),this._draggable._startPos._add(vt),Ce(o._icon,this._draggable._newPos),this._onDrag(i),this._panRequest=E(this._adjustPan.bind(this,i))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(i){this._marker.options.autoPan&&(A(this._panRequest),this._panRequest=E(this._adjustPan.bind(this,i)))},_onDrag:function(i){var o=this._marker,c=o._shadow,m=un(o._icon),M=o._map.layerPointToLatLng(m);c&&Ce(c,m),o._latlng=M,i.latlng=M,i.oldLatLng=this._oldLatLng,o.fire("move",i).fire("drag",i)},_onDragEnd:function(i){A(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",i)}}),Po=Kn.extend({options:{icon:new Gr,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(i,o){g(this,o),this._latlng=$(i)},onAdd:function(i){this._zoomAnimated=this._zoomAnimated&&i.options.markerZoomAnimation,this._zoomAnimated&&i.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(i){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&i.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(i){var o=this._latlng;return this._latlng=$(i),this.update(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},setZIndexOffset:function(i){return this.options.zIndexOffset=i,this.update()},getIcon:function(){return this.options.icon},setIcon:function(i){return this.options.icon=i,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var i=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(i)}return this},_initIcon:function(){var i=this.options,o="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),c=i.icon.createIcon(this._icon),m=!1;c!==this._icon&&(this._icon&&this._removeIcon(),m=!0,i.title&&(c.title=i.title),c.tagName==="IMG"&&(c.alt=i.alt||"")),jt(c,o),i.keyboard&&(c.tabIndex="0",c.setAttribute("role","button")),this._icon=c,i.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ce(c,"focus",this._panOnFocus,this);var M=i.icon.createShadow(this._shadow),R=!1;M!==this._shadow&&(this._removeShadow(),R=!0),M&&(jt(M,o),M.alt=""),this._shadow=M,i.opacity<1&&this._updateOpacity(),m&&this.getPane().appendChild(this._icon),this._initInteraction(),M&&R&&this.getPane(i.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Ue(this._icon,"focus",this._panOnFocus,this),de(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&de(this._shadow),this._shadow=null},_setPos:function(i){this._icon&&Ce(this._icon,i),this._shadow&&Ce(this._shadow,i),this._zIndex=i.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(i){this._icon&&(this._icon.style.zIndex=this._zIndex+i)},_animateZoom:function(i){var o=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center).round();this._setPos(o)},_initInteraction:function(){if(this.options.interactive&&(jt(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),$u)){var i=this.options.draggable;this.dragging&&(i=this.dragging.enabled(),this.dragging.disable()),this.dragging=new $u(this),i&&this.dragging.enable()}},setOpacity:function(i){return this.options.opacity=i,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var i=this.options.opacity;this._icon&&fe(this._icon,i),this._shadow&&fe(this._shadow,i)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var i=this._map;if(i){var o=this.options.icon.options,c=o.iconSize?G(o.iconSize):G(0,0),m=o.iconAnchor?G(o.iconAnchor):G(0,0);i.panInside(this._latlng,{paddingTopLeft:m,paddingBottomRight:c.subtract(m)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function wm(i,o){return new Po(i,o)}var qi=Kn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(i){this._renderer=i.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(i){return g(this,i),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&i&&Object.prototype.hasOwnProperty.call(i,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Ro=qi.extend({options:{fill:!0,radius:10},initialize:function(i,o){g(this,o),this._latlng=$(i),this._radius=this.options.radius},setLatLng:function(i){var o=this._latlng;return this._latlng=$(i),this.redraw(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(i){return this.options.radius=this._radius=i,this.redraw()},getRadius:function(){return this._radius},setStyle:function(i){var o=i&&i.radius||this._radius;return qi.prototype.setStyle.call(this,i),this.setRadius(o),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var i=this._radius,o=this._radiusY||i,c=this._clickTolerance(),m=[i+c,o+c];this._pxBounds=new ht(this._point.subtract(m),this._point.add(m))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(i){return i.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Tm(i,o){return new Ro(i,o)}var tc=Ro.extend({initialize:function(i,o,c){if(typeof o=="number"&&(o=e({},c,{radius:o})),g(this,o),this._latlng=$(i),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(i){return this._mRadius=i,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var i=[this._radius,this._radiusY||this._radius];return new lt(this._map.layerPointToLatLng(this._point.subtract(i)),this._map.layerPointToLatLng(this._point.add(i)))},setStyle:qi.prototype.setStyle,_project:function(){var i=this._latlng.lng,o=this._latlng.lat,c=this._map,m=c.options.crs;if(m.distance===ot.distance){var M=Math.PI/180,R=this._mRadius/ot.R/M,F=c.project([o+R,i]),tt=c.project([o-R,i]),at=F.add(tt).divideBy(2),vt=c.unproject(at).lat,Dt=Math.acos((Math.cos(R*M)-Math.sin(o*M)*Math.sin(vt*M))/(Math.cos(o*M)*Math.cos(vt*M)))/M;(isNaN(Dt)||Dt===0)&&(Dt=R/Math.cos(Math.PI/180*o)),this._point=at.subtract(c.getPixelOrigin()),this._radius=isNaN(Dt)?0:at.x-c.project([vt,i-Dt]).x,this._radiusY=at.y-F.y}else{var ne=m.unproject(m.project(this._latlng).subtract([this._mRadius,0]));this._point=c.latLngToLayerPoint(this._latlng),this._radius=this._point.x-c.latLngToLayerPoint(ne).x}this._updateBounds()}});function Em(i,o,c){return new tc(i,o,c)}var Ei=qi.extend({options:{smoothFactor:1,noClip:!1},initialize:function(i,o){g(this,o),this._setLatLngs(i)},getLatLngs:function(){return this._latlngs},setLatLngs:function(i){return this._setLatLngs(i),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(i){for(var o=1/0,c=null,m=Vr,M,R,F=0,tt=this._parts.length;F<tt;F++)for(var at=this._parts[F],vt=1,Dt=at.length;vt<Dt;vt++){M=at[vt-1],R=at[vt];var ne=m(i,M,R,!0);ne<o&&(o=ne,c=m(i,M,R))}return c&&(c.distance=Math.sqrt(o)),c},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return qu(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(i,o){return o=o||this._defaultShape(),i=$(i),o.push(i),this._bounds.extend(i),this.redraw()},_setLatLngs:function(i){this._bounds=new lt,this._latlngs=this._convertLatLngs(i)},_defaultShape:function(){return On(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(i){for(var o=[],c=On(i),m=0,M=i.length;m<M;m++)c?(o[m]=$(i[m]),this._bounds.extend(o[m])):o[m]=this._convertLatLngs(i[m]);return o},_project:function(){var i=new ht;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,i),this._bounds.isValid()&&i.isValid()&&(this._rawPxBounds=i,this._updateBounds())},_updateBounds:function(){var i=this._clickTolerance(),o=new V(i,i);this._rawPxBounds&&(this._pxBounds=new ht([this._rawPxBounds.min.subtract(o),this._rawPxBounds.max.add(o)]))},_projectLatlngs:function(i,o,c){var m=i[0]instanceof Et,M=i.length,R,F;if(m){for(F=[],R=0;R<M;R++)F[R]=this._map.latLngToLayerPoint(i[R]),c.extend(F[R]);o.push(F)}else for(R=0;R<M;R++)this._projectLatlngs(i[R],o,c)},_clipPoints:function(){var i=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}var o=this._parts,c,m,M,R,F,tt,at;for(c=0,M=0,R=this._rings.length;c<R;c++)for(at=this._rings[c],m=0,F=at.length;m<F-1;m++)tt=Zu(at[m],at[m+1],i,m,!0),tt&&(o[M]=o[M]||[],o[M].push(tt[0]),(tt[1]!==at[m+1]||m===F-2)&&(o[M].push(tt[1]),M++))}},_simplifyPoints:function(){for(var i=this._parts,o=this.options.smoothFactor,c=0,m=i.length;c<m;c++)i[c]=Vu(i[c],o)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(i,o){var c,m,M,R,F,tt,at=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(c=0,R=this._parts.length;c<R;c++)for(tt=this._parts[c],m=0,F=tt.length,M=F-1;m<F;M=m++)if(!(!o&&m===0)&&Gu(i,tt[M],tt[m])<=at)return!0;return!1}});function Am(i,o){return new Ei(i,o)}Ei._flat=Xu;var Vs=Ei.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Hu(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(i){var o=Ei.prototype._convertLatLngs.call(this,i),c=o.length;return c>=2&&o[0]instanceof Et&&o[0].equals(o[c-1])&&o.pop(),o},_setLatLngs:function(i){Ei.prototype._setLatLngs.call(this,i),On(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return On(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var i=this._renderer._bounds,o=this.options.weight,c=new V(o,o);if(i=new ht(i.min.subtract(c),i.max.add(c)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}for(var m=0,M=this._rings.length,R;m<M;m++)R=zu(this._rings[m],i,!0),R.length&&this._parts.push(R)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(i){var o=!1,c,m,M,R,F,tt,at,vt;if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(R=0,at=this._parts.length;R<at;R++)for(c=this._parts[R],F=0,vt=c.length,tt=vt-1;F<vt;tt=F++)m=c[F],M=c[tt],m.y>i.y!=M.y>i.y&&i.x<(M.x-m.x)*(i.y-m.y)/(M.y-m.y)+m.x&&(o=!o);return o||Ei.prototype._containsPoint.call(this,i,!0)}});function Pm(i,o){return new Vs(i,o)}var Ai=Ti.extend({initialize:function(i,o){g(this,o),this._layers={},i&&this.addData(i)},addData:function(i){var o=v(i)?i:i.features,c,m,M;if(o){for(c=0,m=o.length;c<m;c++)M=o[c],(M.geometries||M.geometry||M.features||M.coordinates)&&this.addData(M);return this}var R=this.options;if(R.filter&&!R.filter(i))return this;var F=Co(i,R);return F?(F.feature=Do(i),F.defaultOptions=F.options,this.resetStyle(F),R.onEachFeature&&R.onEachFeature(i,F),this.addLayer(F)):this},resetStyle:function(i){return i===void 0?this.eachLayer(this.resetStyle,this):(i.options=e({},i.defaultOptions),this._setLayerStyle(i,this.options.style),this)},setStyle:function(i){return this.eachLayer(function(o){this._setLayerStyle(o,i)},this)},_setLayerStyle:function(i,o){i.setStyle&&(typeof o=="function"&&(o=o(i.feature)),i.setStyle(o))}});function Co(i,o){var c=i.type==="Feature"?i.geometry:i,m=c?c.coordinates:null,M=[],R=o&&o.pointToLayer,F=o&&o.coordsToLatLng||ec,tt,at,vt,Dt;if(!m&&!c)return null;switch(c.type){case"Point":return tt=F(m),Ku(R,i,tt,o);case"MultiPoint":for(vt=0,Dt=m.length;vt<Dt;vt++)tt=F(m[vt]),M.push(Ku(R,i,tt,o));return new Ti(M);case"LineString":case"MultiLineString":return at=Lo(m,c.type==="LineString"?0:1,F),new Ei(at,o);case"Polygon":case"MultiPolygon":return at=Lo(m,c.type==="Polygon"?1:2,F),new Vs(at,o);case"GeometryCollection":for(vt=0,Dt=c.geometries.length;vt<Dt;vt++){var ne=Co({geometry:c.geometries[vt],type:"Feature",properties:i.properties},o);ne&&M.push(ne)}return new Ti(M);case"FeatureCollection":for(vt=0,Dt=c.features.length;vt<Dt;vt++){var pe=Co(c.features[vt],o);pe&&M.push(pe)}return new Ti(M);default:throw new Error("Invalid GeoJSON object.")}}function Ku(i,o,c,m){return i?i(o,c):new Po(c,m&&m.markersInheritOptions&&m)}function ec(i){return new Et(i[1],i[0],i[2])}function Lo(i,o,c){for(var m=[],M=0,R=i.length,F;M<R;M++)F=o?Lo(i[M],o-1,c):(c||ec)(i[M]),m.push(F);return m}function nc(i,o){return i=$(i),i.alt!==void 0?[p(i.lng,o),p(i.lat,o),p(i.alt,o)]:[p(i.lng,o),p(i.lat,o)]}function Io(i,o,c,m){for(var M=[],R=0,F=i.length;R<F;R++)M.push(o?Io(i[R],On(i[R])?0:o-1,c,m):nc(i[R],m));return!o&&c&&M.length>0&&M.push(M[0].slice()),M}function Gs(i,o){return i.feature?e({},i.feature,{geometry:o}):Do(o)}function Do(i){return i.type==="Feature"||i.type==="FeatureCollection"?i:{type:"Feature",properties:{},geometry:i}}var ic={toGeoJSON:function(i){return Gs(this,{type:"Point",coordinates:nc(this.getLatLng(),i)})}};Po.include(ic),tc.include(ic),Ro.include(ic),Ei.include({toGeoJSON:function(i){var o=!On(this._latlngs),c=Io(this._latlngs,o?1:0,!1,i);return Gs(this,{type:(o?"Multi":"")+"LineString",coordinates:c})}}),Vs.include({toGeoJSON:function(i){var o=!On(this._latlngs),c=o&&!On(this._latlngs[0]),m=Io(this._latlngs,c?2:o?1:0,!0,i);return o||(m=[m]),Gs(this,{type:(c?"Multi":"")+"Polygon",coordinates:m})}}),zs.include({toMultiPoint:function(i){var o=[];return this.eachLayer(function(c){o.push(c.toGeoJSON(i).geometry.coordinates)}),Gs(this,{type:"MultiPoint",coordinates:o})},toGeoJSON:function(i){var o=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(o==="MultiPoint")return this.toMultiPoint(i);var c=o==="GeometryCollection",m=[];return this.eachLayer(function(M){if(M.toGeoJSON){var R=M.toGeoJSON(i);if(c)m.push(R.geometry);else{var F=Do(R);F.type==="FeatureCollection"?m.push.apply(m,F.features):m.push(F)}}}),c?Gs(this,{geometries:m,type:"GeometryCollection"}):{type:"FeatureCollection",features:m}}});function Ju(i,o){return new Ai(i,o)}var Rm=Ju,No=Kn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(i,o,c){this._url=i,this._bounds=pt(o),g(this,c)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(jt(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){de(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(i){return this.options.opacity=i,this._image&&this._updateOpacity(),this},setStyle:function(i){return i.opacity&&this.setOpacity(i.opacity),this},bringToFront:function(){return this._map&&Vt(this._image),this},bringToBack:function(){return this._map&&hn(this._image),this},setUrl:function(i){return this._url=i,this._image&&(this._image.src=i),this},setBounds:function(i){return this._bounds=pt(i),this._map&&this._reset(),this},getEvents:function(){var i={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var i=this._url.tagName==="IMG",o=this._image=i?this._url:Yt("img");if(jt(o,"leaflet-image-layer"),this._zoomAnimated&&jt(o,"leaflet-zoom-animated"),this.options.className&&jt(o,this.options.className),o.onselectstart=f,o.onmousemove=f,o.onload=r(this.fire,this,"load"),o.onerror=r(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),i){this._url=o.src;return}o.src=this._url,o.alt=this.options.alt},_animateZoom:function(i){var o=this._map.getZoomScale(i.zoom),c=this._map._latLngBoundsToNewLayerBounds(this._bounds,i.zoom,i.center).min;qe(this._image,c,o)},_reset:function(){var i=this._image,o=new ht(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),c=o.getSize();Ce(i,o.min),i.style.width=c.x+"px",i.style.height=c.y+"px"},_updateOpacity:function(){fe(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var i=this.options.errorOverlayUrl;i&&this._url!==i&&(this._url=i,this._image.src=i)},getCenter:function(){return this._bounds.getCenter()}}),Cm=function(i,o,c){return new No(i,o,c)},ju=No.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var i=this._url.tagName==="VIDEO",o=this._image=i?this._url:Yt("video");if(jt(o,"leaflet-image-layer"),this._zoomAnimated&&jt(o,"leaflet-zoom-animated"),this.options.className&&jt(o,this.options.className),o.onselectstart=f,o.onmousemove=f,o.onloadeddata=r(this.fire,this,"load"),i){for(var c=o.getElementsByTagName("source"),m=[],M=0;M<c.length;M++)m.push(c[M].src);this._url=c.length>0?m:[o.src];return}v(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(o.style,"objectFit")&&(o.style.objectFit="fill"),o.autoplay=!!this.options.autoplay,o.loop=!!this.options.loop,o.muted=!!this.options.muted,o.playsInline=!!this.options.playsInline;for(var R=0;R<this._url.length;R++){var F=Yt("source");F.src=this._url[R],o.appendChild(F)}}});function Lm(i,o,c){return new ju(i,o,c)}var Qu=No.extend({_initImage:function(){var i=this._image=this._url;jt(i,"leaflet-image-layer"),this._zoomAnimated&&jt(i,"leaflet-zoom-animated"),this.options.className&&jt(i,this.options.className),i.onselectstart=f,i.onmousemove=f}});function Im(i,o,c){return new Qu(i,o,c)}var _i=Kn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(i,o){i&&(i instanceof Et||v(i))?(this._latlng=$(i),g(this,o)):(g(this,i),this._source=o),this.options.content&&(this._content=this.options.content)},openOn:function(i){return i=arguments.length?i:this._source._map,i.hasLayer(this)||i.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(i){return this._map?this.close():(arguments.length?this._source=i:i=this._source,this._prepareOpen(),this.openOn(i._map)),this},onAdd:function(i){this._zoomAnimated=i._zoomAnimated,this._container||this._initLayout(),i._fadeAnimated&&fe(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),i._fadeAnimated&&fe(this._container,1),this.bringToFront(),this.options.interactive&&(jt(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(i){i._fadeAnimated?(fe(this._container,0),this._removeTimeout=setTimeout(r(de,void 0,this._container),200)):de(this._container),this.options.interactive&&(Ie(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(i){return this._latlng=$(i),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(i){return this._content=i,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var i={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Vt(this._container),this},bringToBack:function(){return this._map&&hn(this._container),this},_prepareOpen:function(i){var o=this._source;if(!o._map)return!1;if(o instanceof Ti){o=null;var c=this._source._layers;for(var m in c)if(c[m]._map){o=c[m];break}if(!o)return!1;this._source=o}if(!i)if(o.getCenter)i=o.getCenter();else if(o.getLatLng)i=o.getLatLng();else if(o.getBounds)i=o.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(i),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var i=this._contentNode,o=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof o=="string")i.innerHTML=o;else{for(;i.hasChildNodes();)i.removeChild(i.firstChild);i.appendChild(o)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var i=this._map.latLngToLayerPoint(this._latlng),o=G(this.options.offset),c=this._getAnchor();this._zoomAnimated?Ce(this._container,i.add(c)):o=o.add(i).add(c);var m=this._containerBottom=-o.y,M=this._containerLeft=-Math.round(this._containerWidth/2)+o.x;this._container.style.bottom=m+"px",this._container.style.left=M+"px"}},_getAnchor:function(){return[0,0]}});Se.include({_initOverlay:function(i,o,c,m){var M=o;return M instanceof i||(M=new i(m).setContent(o)),c&&M.setLatLng(c),M}}),Kn.include({_initOverlay:function(i,o,c,m){var M=c;return M instanceof i?(g(M,m),M._source=this):(M=o&&!m?o:new i(m,this),M.setContent(c)),M}});var ko=_i.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(i){return i=arguments.length?i:this._source._map,!i.hasLayer(this)&&i._popup&&i._popup.options.autoClose&&i.removeLayer(i._popup),i._popup=this,_i.prototype.openOn.call(this,i)},onAdd:function(i){_i.prototype.onAdd.call(this,i),i.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof qi||this._source.on("preclick",hs))},onRemove:function(i){_i.prototype.onRemove.call(this,i),i.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof qi||this._source.off("preclick",hs))},getEvents:function(){var i=_i.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(i.preclick=this.close),this.options.keepInView&&(i.moveend=this._adjustPan),i},_initLayout:function(){var i="leaflet-popup",o=this._container=Yt("div",i+" "+(this.options.className||"")+" leaflet-zoom-animated"),c=this._wrapper=Yt("div",i+"-content-wrapper",o);if(this._contentNode=Yt("div",i+"-content",c),zr(o),Xl(this._contentNode),ce(o,"contextmenu",hs),this._tipContainer=Yt("div",i+"-tip-container",o),this._tip=Yt("div",i+"-tip",this._tipContainer),this.options.closeButton){var m=this._closeButton=Yt("a",i+"-close-button",o);m.setAttribute("role","button"),m.setAttribute("aria-label","Close popup"),m.href="#close",m.innerHTML='<span aria-hidden="true">&#215;</span>',ce(m,"click",function(M){rn(M),this.close()},this)}},_updateLayout:function(){var i=this._contentNode,o=i.style;o.width="",o.whiteSpace="nowrap";var c=i.offsetWidth;c=Math.min(c,this.options.maxWidth),c=Math.max(c,this.options.minWidth),o.width=c+1+"px",o.whiteSpace="",o.height="";var m=i.offsetHeight,M=this.options.maxHeight,R="leaflet-popup-scrolled";M&&m>M?(o.height=M+"px",jt(i,R)):Ie(i,R),this._containerWidth=this._container.offsetWidth},_animateZoom:function(i){var o=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center),c=this._getAnchor();Ce(this._container,o.add(c))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var i=this._map,o=parseInt(Ee(this._container,"marginBottom"),10)||0,c=this._container.offsetHeight+o,m=this._containerWidth,M=new V(this._containerLeft,-c-this._containerBottom);M._add(un(this._container));var R=i.layerPointToContainerPoint(M),F=G(this.options.autoPanPadding),tt=G(this.options.autoPanPaddingTopLeft||F),at=G(this.options.autoPanPaddingBottomRight||F),vt=i.getSize(),Dt=0,ne=0;R.x+m+at.x>vt.x&&(Dt=R.x+m-vt.x+at.x),R.x-Dt-tt.x<0&&(Dt=R.x-tt.x),R.y+c+at.y>vt.y&&(ne=R.y+c-vt.y+at.y),R.y-ne-tt.y<0&&(ne=R.y-tt.y),(Dt||ne)&&(this.options.keepInView&&(this._autopanning=!0),i.fire("autopanstart").panBy([Dt,ne]))}},_getAnchor:function(){return G(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Dm=function(i,o){return new ko(i,o)};Se.mergeOptions({closePopupOnClick:!0}),Se.include({openPopup:function(i,o,c){return this._initOverlay(ko,i,o,c).openOn(this),this},closePopup:function(i){return i=arguments.length?i:this._popup,i&&i.close(),this}}),Kn.include({bindPopup:function(i,o){return this._popup=this._initOverlay(ko,this._popup,i,o),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(i){return this._popup&&(this instanceof Ti||(this._popup._source=this),this._popup._prepareOpen(i||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(i){return this._popup&&this._popup.setContent(i),this},getPopup:function(){return this._popup},_openPopup:function(i){if(!(!this._popup||!this._map)){us(i);var o=i.layer||i.target;if(this._popup._source===o&&!(o instanceof qi)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(i.latlng);return}this._popup._source=o,this.openPopup(i.latlng)}},_movePopup:function(i){this._popup.setLatLng(i.latlng)},_onKeyPress:function(i){i.originalEvent.keyCode===13&&this._openPopup(i)}});var Oo=_i.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(i){_i.prototype.onAdd.call(this,i),this.setOpacity(this.options.opacity),i.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(i){_i.prototype.onRemove.call(this,i),i.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var i=_i.prototype.getEvents.call(this);return this.options.permanent||(i.preclick=this.close),i},_initLayout:function(){var i="leaflet-tooltip",o=i+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Yt("div",o),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+l(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(i){var o,c,m=this._map,M=this._container,R=m.latLngToContainerPoint(m.getCenter()),F=m.layerPointToContainerPoint(i),tt=this.options.direction,at=M.offsetWidth,vt=M.offsetHeight,Dt=G(this.options.offset),ne=this._getAnchor();tt==="top"?(o=at/2,c=vt):tt==="bottom"?(o=at/2,c=0):tt==="center"?(o=at/2,c=vt/2):tt==="right"?(o=0,c=vt/2):tt==="left"?(o=at,c=vt/2):F.x<R.x?(tt="right",o=0,c=vt/2):(tt="left",o=at+(Dt.x+ne.x)*2,c=vt/2),i=i.subtract(G(o,c,!0)).add(Dt).add(ne),Ie(M,"leaflet-tooltip-right"),Ie(M,"leaflet-tooltip-left"),Ie(M,"leaflet-tooltip-top"),Ie(M,"leaflet-tooltip-bottom"),jt(M,"leaflet-tooltip-"+tt),Ce(M,i)},_updatePosition:function(){var i=this._map.latLngToLayerPoint(this._latlng);this._setPosition(i)},setOpacity:function(i){this.options.opacity=i,this._container&&fe(this._container,i)},_animateZoom:function(i){var o=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center);this._setPosition(o)},_getAnchor:function(){return G(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Nm=function(i,o){return new Oo(i,o)};Se.include({openTooltip:function(i,o,c){return this._initOverlay(Oo,i,o,c).openOn(this),this},closeTooltip:function(i){return i.close(),this}}),Kn.include({bindTooltip:function(i,o){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Oo,this._tooltip,i,o),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(i){if(!(!i&&this._tooltipHandlersAdded)){var o=i?"off":"on",c={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?c.add=this._openTooltip:(c.mouseover=this._openTooltip,c.mouseout=this.closeTooltip,c.click=this._openTooltip,this._map?this._addFocusListeners():c.add=this._addFocusListeners),this._tooltip.options.sticky&&(c.mousemove=this._moveTooltip),this[o](c),this._tooltipHandlersAdded=!i}},openTooltip:function(i){return this._tooltip&&(this instanceof Ti||(this._tooltip._source=this),this._tooltip._prepareOpen(i)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(i){return this._tooltip&&this._tooltip.setContent(i),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(i){var o=typeof i.getElement=="function"&&i.getElement();o&&(ce(o,"focus",function(){this._tooltip._source=i,this.openTooltip()},this),ce(o,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(i){var o=typeof i.getElement=="function"&&i.getElement();o&&o.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(i){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var o=this;this._map.once("moveend",function(){o._openOnceFlag=!1,o._openTooltip(i)});return}this._tooltip._source=i.layer||i.target,this.openTooltip(this._tooltip.options.sticky?i.latlng:void 0)}},_moveTooltip:function(i){var o=i.latlng,c,m;this._tooltip.options.sticky&&i.originalEvent&&(c=this._map.mouseEventToContainerPoint(i.originalEvent),m=this._map.containerPointToLayerPoint(c),o=this._map.layerPointToLatLng(m)),this._tooltip.setLatLng(o)}});var td=Hs.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(i){var o=i&&i.tagName==="DIV"?i:document.createElement("div"),c=this.options;if(c.html instanceof Element?(ye(o),o.appendChild(c.html)):o.innerHTML=c.html!==!1?c.html:"",c.bgPos){var m=G(c.bgPos);o.style.backgroundPosition=-m.x+"px "+-m.y+"px"}return this._setIconStyles(o,"icon"),o},createShadow:function(){return null}});function km(i){return new td(i)}Hs.Default=Gr;var Wr=Kn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Ht.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(i){g(this,i)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(i){i._addZoomLimit(this)},onRemove:function(i){this._removeAllTiles(),de(this._container),i._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Vt(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(hn(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(i){return this.options.opacity=i,this._updateOpacity(),this},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var i=this._clampZoom(this._map.getZoom());i!==this._tileZoom&&(this._tileZoom=i,this._updateLevels()),this._update()}return this},getEvents:function(){var i={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=h(this._onMoveEnd,this.options.updateInterval,this)),i.move=this._onMove),this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},createTile:function(){return document.createElement("div")},getTileSize:function(){var i=this.options.tileSize;return i instanceof V?i:new V(i,i)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(i){for(var o=this.getPane().children,c=-i(-1/0,1/0),m=0,M=o.length,R;m<M;m++)R=o[m].style.zIndex,o[m]!==this._container&&R&&(c=i(c,+R));isFinite(c)&&(this.options.zIndex=c+i(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Ht.ielt9){fe(this._container,this.options.opacity);var i=+new Date,o=!1,c=!1;for(var m in this._tiles){var M=this._tiles[m];if(!(!M.current||!M.loaded)){var R=Math.min(1,(i-M.loaded)/200);fe(M.el,R),R<1?o=!0:(M.active?c=!0:this._onOpaqueTile(M),M.active=!0)}}c&&!this._noPrune&&this._pruneTiles(),o&&(A(this._fadeFrame),this._fadeFrame=E(this._updateOpacity,this))}},_onOpaqueTile:f,_initContainer:function(){this._container||(this._container=Yt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var i=this._tileZoom,o=this.options.maxZoom;if(i!==void 0){for(var c in this._levels)c=Number(c),this._levels[c].el.children.length||c===i?(this._levels[c].el.style.zIndex=o-Math.abs(i-c),this._onUpdateLevel(c)):(de(this._levels[c].el),this._removeTilesAtZoom(c),this._onRemoveLevel(c),delete this._levels[c]);var m=this._levels[i],M=this._map;return m||(m=this._levels[i]={},m.el=Yt("div","leaflet-tile-container leaflet-zoom-animated",this._container),m.el.style.zIndex=o,m.origin=M.project(M.unproject(M.getPixelOrigin()),i).round(),m.zoom=i,this._setZoomTransform(m,M.getCenter(),M.getZoom()),f(m.el.offsetWidth),this._onCreateLevel(m)),this._level=m,m}},_onUpdateLevel:f,_onRemoveLevel:f,_onCreateLevel:f,_pruneTiles:function(){if(this._map){var i,o,c=this._map.getZoom();if(c>this.options.maxZoom||c<this.options.minZoom){this._removeAllTiles();return}for(i in this._tiles)o=this._tiles[i],o.retain=o.current;for(i in this._tiles)if(o=this._tiles[i],o.current&&!o.active){var m=o.coords;this._retainParent(m.x,m.y,m.z,m.z-5)||this._retainChildren(m.x,m.y,m.z,m.z+2)}for(i in this._tiles)this._tiles[i].retain||this._removeTile(i)}},_removeTilesAtZoom:function(i){for(var o in this._tiles)this._tiles[o].coords.z===i&&this._removeTile(o)},_removeAllTiles:function(){for(var i in this._tiles)this._removeTile(i)},_invalidateAll:function(){for(var i in this._levels)de(this._levels[i].el),this._onRemoveLevel(Number(i)),delete this._levels[i];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(i,o,c,m){var M=Math.floor(i/2),R=Math.floor(o/2),F=c-1,tt=new V(+M,+R);tt.z=+F;var at=this._tileCoordsToKey(tt),vt=this._tiles[at];return vt&&vt.active?(vt.retain=!0,!0):(vt&&vt.loaded&&(vt.retain=!0),F>m?this._retainParent(M,R,F,m):!1)},_retainChildren:function(i,o,c,m){for(var M=2*i;M<2*i+2;M++)for(var R=2*o;R<2*o+2;R++){var F=new V(M,R);F.z=c+1;var tt=this._tileCoordsToKey(F),at=this._tiles[tt];if(at&&at.active){at.retain=!0;continue}else at&&at.loaded&&(at.retain=!0);c+1<m&&this._retainChildren(M,R,c+1,m)}},_resetView:function(i){var o=i&&(i.pinch||i.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),o,o)},_animateZoom:function(i){this._setView(i.center,i.zoom,!0,i.noUpdate)},_clampZoom:function(i){var o=this.options;return o.minNativeZoom!==void 0&&i<o.minNativeZoom?o.minNativeZoom:o.maxNativeZoom!==void 0&&o.maxNativeZoom<i?o.maxNativeZoom:i},_setView:function(i,o,c,m){var M=Math.round(o);this.options.maxZoom!==void 0&&M>this.options.maxZoom||this.options.minZoom!==void 0&&M<this.options.minZoom?M=void 0:M=this._clampZoom(M);var R=this.options.updateWhenZooming&&M!==this._tileZoom;(!m||R)&&(this._tileZoom=M,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),M!==void 0&&this._update(i),c||this._pruneTiles(),this._noPrune=!!c),this._setZoomTransforms(i,o)},_setZoomTransforms:function(i,o){for(var c in this._levels)this._setZoomTransform(this._levels[c],i,o)},_setZoomTransform:function(i,o,c){var m=this._map.getZoomScale(c,i.zoom),M=i.origin.multiplyBy(m).subtract(this._map._getNewPixelOrigin(o,c)).round();Ht.any3d?qe(i.el,M,m):Ce(i.el,M)},_resetGrid:function(){var i=this._map,o=i.options.crs,c=this._tileSize=this.getTileSize(),m=this._tileZoom,M=this._map.getPixelWorldBounds(this._tileZoom);M&&(this._globalTileRange=this._pxBoundsToTileRange(M)),this._wrapX=o.wrapLng&&!this.options.noWrap&&[Math.floor(i.project([0,o.wrapLng[0]],m).x/c.x),Math.ceil(i.project([0,o.wrapLng[1]],m).x/c.y)],this._wrapY=o.wrapLat&&!this.options.noWrap&&[Math.floor(i.project([o.wrapLat[0],0],m).y/c.x),Math.ceil(i.project([o.wrapLat[1],0],m).y/c.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(i){var o=this._map,c=o._animatingZoom?Math.max(o._animateToZoom,o.getZoom()):o.getZoom(),m=o.getZoomScale(c,this._tileZoom),M=o.project(i,this._tileZoom).floor(),R=o.getSize().divideBy(m*2);return new ht(M.subtract(R),M.add(R))},_update:function(i){var o=this._map;if(o){var c=this._clampZoom(o.getZoom());if(i===void 0&&(i=o.getCenter()),this._tileZoom!==void 0){var m=this._getTiledPixelBounds(i),M=this._pxBoundsToTileRange(m),R=M.getCenter(),F=[],tt=this.options.keepBuffer,at=new ht(M.getBottomLeft().subtract([tt,-tt]),M.getTopRight().add([tt,-tt]));if(!(isFinite(M.min.x)&&isFinite(M.min.y)&&isFinite(M.max.x)&&isFinite(M.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var vt in this._tiles){var Dt=this._tiles[vt].coords;(Dt.z!==this._tileZoom||!at.contains(new V(Dt.x,Dt.y)))&&(this._tiles[vt].current=!1)}if(Math.abs(c-this._tileZoom)>1){this._setView(i,c);return}for(var ne=M.min.y;ne<=M.max.y;ne++)for(var pe=M.min.x;pe<=M.max.x;pe++){var vn=new V(pe,ne);if(vn.z=this._tileZoom,!!this._isValidTile(vn)){var Qe=this._tiles[this._tileCoordsToKey(vn)];Qe?Qe.current=!0:F.push(vn)}}if(F.sort(function(Sn,Zs){return Sn.distanceTo(R)-Zs.distanceTo(R)}),F.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Un=document.createDocumentFragment();for(pe=0;pe<F.length;pe++)this._addTile(F[pe],Un);this._level.el.appendChild(Un)}}}},_isValidTile:function(i){var o=this._map.options.crs;if(!o.infinite){var c=this._globalTileRange;if(!o.wrapLng&&(i.x<c.min.x||i.x>c.max.x)||!o.wrapLat&&(i.y<c.min.y||i.y>c.max.y))return!1}if(!this.options.bounds)return!0;var m=this._tileCoordsToBounds(i);return pt(this.options.bounds).overlaps(m)},_keyToBounds:function(i){return this._tileCoordsToBounds(this._keyToTileCoords(i))},_tileCoordsToNwSe:function(i){var o=this._map,c=this.getTileSize(),m=i.scaleBy(c),M=m.add(c),R=o.unproject(m,i.z),F=o.unproject(M,i.z);return[R,F]},_tileCoordsToBounds:function(i){var o=this._tileCoordsToNwSe(i),c=new lt(o[0],o[1]);return this.options.noWrap||(c=this._map.wrapLatLngBounds(c)),c},_tileCoordsToKey:function(i){return i.x+":"+i.y+":"+i.z},_keyToTileCoords:function(i){var o=i.split(":"),c=new V(+o[0],+o[1]);return c.z=+o[2],c},_removeTile:function(i){var o=this._tiles[i];o&&(de(o.el),delete this._tiles[i],this.fire("tileunload",{tile:o.el,coords:this._keyToTileCoords(i)}))},_initTile:function(i){jt(i,"leaflet-tile");var o=this.getTileSize();i.style.width=o.x+"px",i.style.height=o.y+"px",i.onselectstart=f,i.onmousemove=f,Ht.ielt9&&this.options.opacity<1&&fe(i,this.options.opacity)},_addTile:function(i,o){var c=this._getTilePos(i),m=this._tileCoordsToKey(i),M=this.createTile(this._wrapCoords(i),r(this._tileReady,this,i));this._initTile(M),this.createTile.length<2&&E(r(this._tileReady,this,i,null,M)),Ce(M,c),this._tiles[m]={el:M,coords:i,current:!0},o.appendChild(M),this.fire("tileloadstart",{tile:M,coords:i})},_tileReady:function(i,o,c){o&&this.fire("tileerror",{error:o,tile:c,coords:i});var m=this._tileCoordsToKey(i);c=this._tiles[m],c&&(c.loaded=+new Date,this._map._fadeAnimated?(fe(c.el,0),A(this._fadeFrame),this._fadeFrame=E(this._updateOpacity,this)):(c.active=!0,this._pruneTiles()),o||(jt(c.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:c.el,coords:i})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Ht.ielt9||!this._map._fadeAnimated?E(this._pruneTiles,this):setTimeout(r(this._pruneTiles,this),250)))},_getTilePos:function(i){return i.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(i){var o=new V(this._wrapX?u(i.x,this._wrapX):i.x,this._wrapY?u(i.y,this._wrapY):i.y);return o.z=i.z,o},_pxBoundsToTileRange:function(i){var o=this.getTileSize();return new ht(i.min.unscaleBy(o).floor(),i.max.unscaleBy(o).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var i in this._tiles)if(!this._tiles[i].loaded)return!1;return!0}});function Om(i){return new Wr(i)}var Ws=Wr.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(i,o){this._url=i,o=g(this,o),o.detectRetina&&Ht.retina&&o.maxZoom>0?(o.tileSize=Math.floor(o.tileSize/2),o.zoomReverse?(o.zoomOffset--,o.minZoom=Math.min(o.maxZoom,o.minZoom+1)):(o.zoomOffset++,o.maxZoom=Math.max(o.minZoom,o.maxZoom-1)),o.minZoom=Math.max(0,o.minZoom)):o.zoomReverse?o.minZoom=Math.min(o.maxZoom,o.minZoom):o.maxZoom=Math.max(o.minZoom,o.maxZoom),typeof o.subdomains=="string"&&(o.subdomains=o.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(i,o){return this._url===i&&o===void 0&&(o=!0),this._url=i,o||this.redraw(),this},createTile:function(i,o){var c=document.createElement("img");return ce(c,"load",r(this._tileOnLoad,this,o,c)),ce(c,"error",r(this._tileOnError,this,o,c)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(c.referrerPolicy=this.options.referrerPolicy),c.alt="",c.src=this.getTileUrl(i),c},getTileUrl:function(i){var o={r:Ht.retina?"@2x":"",s:this._getSubdomain(i),x:i.x,y:i.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var c=this._globalTileRange.max.y-i.y;this.options.tms&&(o.y=c),o["-y"]=c}return x(this._url,e(o,this.options))},_tileOnLoad:function(i,o){Ht.ielt9?setTimeout(r(i,this,null,o),0):i(null,o)},_tileOnError:function(i,o,c){var m=this.options.errorTileUrl;m&&o.getAttribute("src")!==m&&(o.src=m),i(c,o)},_onTileRemove:function(i){i.tile.onload=null},_getZoomForUrl:function(){var i=this._tileZoom,o=this.options.maxZoom,c=this.options.zoomReverse,m=this.options.zoomOffset;return c&&(i=o-i),i+m},_getSubdomain:function(i){var o=Math.abs(i.x+i.y)%this.options.subdomains.length;return this.options.subdomains[o]},_abortLoading:function(){var i,o;for(i in this._tiles)if(this._tiles[i].coords.z!==this._tileZoom&&(o=this._tiles[i].el,o.onload=f,o.onerror=f,!o.complete)){o.src=w;var c=this._tiles[i].coords;de(o),delete this._tiles[i],this.fire("tileabort",{tile:o,coords:c})}},_removeTile:function(i){var o=this._tiles[i];if(o)return o.el.setAttribute("src",w),Wr.prototype._removeTile.call(this,i)},_tileReady:function(i,o,c){if(!(!this._map||c&&c.getAttribute("src")===w))return Wr.prototype._tileReady.call(this,i,o,c)}});function ed(i,o){return new Ws(i,o)}var nd=Ws.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(i,o){this._url=i;var c=e({},this.defaultWmsParams);for(var m in o)m in this.options||(c[m]=o[m]);o=g(this,o);var M=o.detectRetina&&Ht.retina?2:1,R=this.getTileSize();c.width=R.x*M,c.height=R.y*M,this.wmsParams=c},onAdd:function(i){this._crs=this.options.crs||i.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var o=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[o]=this._crs.code,Ws.prototype.onAdd.call(this,i)},getTileUrl:function(i){var o=this._tileCoordsToNwSe(i),c=this._crs,m=xt(c.project(o[0]),c.project(o[1])),M=m.min,R=m.max,F=(this._wmsVersion>=1.3&&this._crs===Yu?[M.y,M.x,R.y,R.x]:[M.x,M.y,R.x,R.y]).join(","),tt=Ws.prototype.getTileUrl.call(this,i);return tt+y(this.wmsParams,tt,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+F},setParams:function(i,o){return e(this.wmsParams,i),o||this.redraw(),this}});function Um(i,o){return new nd(i,o)}Ws.WMS=nd,ed.wms=Um;var Pi=Kn.extend({options:{padding:.1},initialize:function(i){g(this,i),l(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),jt(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var i={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(i.zoomanim=this._onAnimZoom),i},_onAnimZoom:function(i){this._updateTransform(i.center,i.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(i,o){var c=this._map.getZoomScale(o,this._zoom),m=this._map.getSize().multiplyBy(.5+this.options.padding),M=this._map.project(this._center,o),R=m.multiplyBy(-c).add(M).subtract(this._map._getNewPixelOrigin(i,o));Ht.any3d?qe(this._container,R,c):Ce(this._container,R)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var i in this._layers)this._layers[i]._reset()},_onZoomEnd:function(){for(var i in this._layers)this._layers[i]._project()},_updatePaths:function(){for(var i in this._layers)this._layers[i]._update()},_update:function(){var i=this.options.padding,o=this._map.getSize(),c=this._map.containerPointToLayerPoint(o.multiplyBy(-i)).round();this._bounds=new ht(c,c.add(o.multiplyBy(1+i*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),id=Pi.extend({options:{tolerance:0},getEvents:function(){var i=Pi.prototype.getEvents.call(this);return i.viewprereset=this._onViewPreReset,i},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Pi.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var i=this._container=document.createElement("canvas");ce(i,"mousemove",this._onMouseMove,this),ce(i,"click dblclick mousedown mouseup contextmenu",this._onClick,this),ce(i,"mouseout",this._handleMouseOut,this),i._leaflet_disable_events=!0,this._ctx=i.getContext("2d")},_destroyContainer:function(){A(this._redrawRequest),delete this._ctx,de(this._container),Ue(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var i;this._redrawBounds=null;for(var o in this._layers)i=this._layers[o],i._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Pi.prototype._update.call(this);var i=this._bounds,o=this._container,c=i.getSize(),m=Ht.retina?2:1;Ce(o,i.min),o.width=m*c.x,o.height=m*c.y,o.style.width=c.x+"px",o.style.height=c.y+"px",Ht.retina&&this._ctx.scale(2,2),this._ctx.translate(-i.min.x,-i.min.y),this.fire("update")}},_reset:function(){Pi.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(i){this._updateDashArray(i),this._layers[l(i)]=i;var o=i._order={layer:i,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=o),this._drawLast=o,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(i){this._requestRedraw(i)},_removePath:function(i){var o=i._order,c=o.next,m=o.prev;c?c.prev=m:this._drawLast=m,m?m.next=c:this._drawFirst=c,delete i._order,delete this._layers[l(i)],this._requestRedraw(i)},_updatePath:function(i){this._extendRedrawBounds(i),i._project(),i._update(),this._requestRedraw(i)},_updateStyle:function(i){this._updateDashArray(i),this._requestRedraw(i)},_updateDashArray:function(i){if(typeof i.options.dashArray=="string"){var o=i.options.dashArray.split(/[, ]+/),c=[],m,M;for(M=0;M<o.length;M++){if(m=Number(o[M]),isNaN(m))return;c.push(m)}i.options._dashArray=c}else i.options._dashArray=i.options.dashArray},_requestRedraw:function(i){this._map&&(this._extendRedrawBounds(i),this._redrawRequest=this._redrawRequest||E(this._redraw,this))},_extendRedrawBounds:function(i){if(i._pxBounds){var o=(i.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new ht,this._redrawBounds.extend(i._pxBounds.min.subtract([o,o])),this._redrawBounds.extend(i._pxBounds.max.add([o,o]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var i=this._redrawBounds;if(i){var o=i.getSize();this._ctx.clearRect(i.min.x,i.min.y,o.x,o.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var i,o=this._redrawBounds;if(this._ctx.save(),o){var c=o.getSize();this._ctx.beginPath(),this._ctx.rect(o.min.x,o.min.y,c.x,c.y),this._ctx.clip()}this._drawing=!0;for(var m=this._drawFirst;m;m=m.next)i=m.layer,(!o||i._pxBounds&&i._pxBounds.intersects(o))&&i._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(i,o){if(this._drawing){var c,m,M,R,F=i._parts,tt=F.length,at=this._ctx;if(tt){for(at.beginPath(),c=0;c<tt;c++){for(m=0,M=F[c].length;m<M;m++)R=F[c][m],at[m?"lineTo":"moveTo"](R.x,R.y);o&&at.closePath()}this._fillStroke(at,i)}}},_updateCircle:function(i){if(!(!this._drawing||i._empty())){var o=i._point,c=this._ctx,m=Math.max(Math.round(i._radius),1),M=(Math.max(Math.round(i._radiusY),1)||m)/m;M!==1&&(c.save(),c.scale(1,M)),c.beginPath(),c.arc(o.x,o.y/M,m,0,Math.PI*2,!1),M!==1&&c.restore(),this._fillStroke(c,i)}},_fillStroke:function(i,o){var c=o.options;c.fill&&(i.globalAlpha=c.fillOpacity,i.fillStyle=c.fillColor||c.color,i.fill(c.fillRule||"evenodd")),c.stroke&&c.weight!==0&&(i.setLineDash&&i.setLineDash(o.options&&o.options._dashArray||[]),i.globalAlpha=c.opacity,i.lineWidth=c.weight,i.strokeStyle=c.color,i.lineCap=c.lineCap,i.lineJoin=c.lineJoin,i.stroke())},_onClick:function(i){for(var o=this._map.mouseEventToLayerPoint(i),c,m,M=this._drawFirst;M;M=M.next)c=M.layer,c.options.interactive&&c._containsPoint(o)&&(!(i.type==="click"||i.type==="preclick")||!this._map._draggableMoved(c))&&(m=c);this._fireEvent(m?[m]:!1,i)},_onMouseMove:function(i){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var o=this._map.mouseEventToLayerPoint(i);this._handleMouseHover(i,o)}},_handleMouseOut:function(i){var o=this._hoveredLayer;o&&(Ie(this._container,"leaflet-interactive"),this._fireEvent([o],i,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(i,o){if(!this._mouseHoverThrottled){for(var c,m,M=this._drawFirst;M;M=M.next)c=M.layer,c.options.interactive&&c._containsPoint(o)&&(m=c);m!==this._hoveredLayer&&(this._handleMouseOut(i),m&&(jt(this._container,"leaflet-interactive"),this._fireEvent([m],i,"mouseover"),this._hoveredLayer=m)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,i),this._mouseHoverThrottled=!0,setTimeout(r(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(i,o,c){this._map._fireDOMEvent(o,c||o.type,i)},_bringToFront:function(i){var o=i._order;if(o){var c=o.next,m=o.prev;if(c)c.prev=m;else return;m?m.next=c:c&&(this._drawFirst=c),o.prev=this._drawLast,this._drawLast.next=o,o.next=null,this._drawLast=o,this._requestRedraw(i)}},_bringToBack:function(i){var o=i._order;if(o){var c=o.next,m=o.prev;if(m)m.next=c;else return;c?c.prev=m:m&&(this._drawLast=m),o.prev=null,o.next=this._drawFirst,this._drawFirst.prev=o,this._drawFirst=o,this._requestRedraw(i)}}});function sd(i){return Ht.canvas?new id(i):null}var Zr=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(i){return document.createElement("<lvml:"+i+' class="lvml">')}}catch{}return function(i){return document.createElement("<"+i+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),Bm={_initContainer:function(){this._container=Yt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Pi.prototype._update.call(this),this.fire("update"))},_initPath:function(i){var o=i._container=Zr("shape");jt(o,"leaflet-vml-shape "+(this.options.className||"")),o.coordsize="1 1",i._path=Zr("path"),o.appendChild(i._path),this._updateStyle(i),this._layers[l(i)]=i},_addPath:function(i){var o=i._container;this._container.appendChild(o),i.options.interactive&&i.addInteractiveTarget(o)},_removePath:function(i){var o=i._container;de(o),i.removeInteractiveTarget(o),delete this._layers[l(i)]},_updateStyle:function(i){var o=i._stroke,c=i._fill,m=i.options,M=i._container;M.stroked=!!m.stroke,M.filled=!!m.fill,m.stroke?(o||(o=i._stroke=Zr("stroke")),M.appendChild(o),o.weight=m.weight+"px",o.color=m.color,o.opacity=m.opacity,m.dashArray?o.dashStyle=v(m.dashArray)?m.dashArray.join(" "):m.dashArray.replace(/( *, *)/g," "):o.dashStyle="",o.endcap=m.lineCap.replace("butt","flat"),o.joinstyle=m.lineJoin):o&&(M.removeChild(o),i._stroke=null),m.fill?(c||(c=i._fill=Zr("fill")),M.appendChild(c),c.color=m.fillColor||m.color,c.opacity=m.fillOpacity):c&&(M.removeChild(c),i._fill=null)},_updateCircle:function(i){var o=i._point.round(),c=Math.round(i._radius),m=Math.round(i._radiusY||c);this._setPath(i,i._empty()?"M0 0":"AL "+o.x+","+o.y+" "+c+","+m+" 0,"+65535*360)},_setPath:function(i,o){i._path.v=o},_bringToFront:function(i){Vt(i._container)},_bringToBack:function(i){hn(i._container)}},Uo=Ht.vml?Zr:Mt,Xr=Pi.extend({_initContainer:function(){this._container=Uo("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Uo("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){de(this._container),Ue(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Pi.prototype._update.call(this);var i=this._bounds,o=i.getSize(),c=this._container;(!this._svgSize||!this._svgSize.equals(o))&&(this._svgSize=o,c.setAttribute("width",o.x),c.setAttribute("height",o.y)),Ce(c,i.min),c.setAttribute("viewBox",[i.min.x,i.min.y,o.x,o.y].join(" ")),this.fire("update")}},_initPath:function(i){var o=i._path=Uo("path");i.options.className&&jt(o,i.options.className),i.options.interactive&&jt(o,"leaflet-interactive"),this._updateStyle(i),this._layers[l(i)]=i},_addPath:function(i){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(i._path),i.addInteractiveTarget(i._path)},_removePath:function(i){de(i._path),i.removeInteractiveTarget(i._path),delete this._layers[l(i)]},_updatePath:function(i){i._project(),i._update()},_updateStyle:function(i){var o=i._path,c=i.options;o&&(c.stroke?(o.setAttribute("stroke",c.color),o.setAttribute("stroke-opacity",c.opacity),o.setAttribute("stroke-width",c.weight),o.setAttribute("stroke-linecap",c.lineCap),o.setAttribute("stroke-linejoin",c.lineJoin),c.dashArray?o.setAttribute("stroke-dasharray",c.dashArray):o.removeAttribute("stroke-dasharray"),c.dashOffset?o.setAttribute("stroke-dashoffset",c.dashOffset):o.removeAttribute("stroke-dashoffset")):o.setAttribute("stroke","none"),c.fill?(o.setAttribute("fill",c.fillColor||c.color),o.setAttribute("fill-opacity",c.fillOpacity),o.setAttribute("fill-rule",c.fillRule||"evenodd")):o.setAttribute("fill","none"))},_updatePoly:function(i,o){this._setPath(i,z(i._parts,o))},_updateCircle:function(i){var o=i._point,c=Math.max(Math.round(i._radius),1),m=Math.max(Math.round(i._radiusY),1)||c,M="a"+c+","+m+" 0 1,0 ",R=i._empty()?"M0 0":"M"+(o.x-c)+","+o.y+M+c*2+",0 "+M+-c*2+",0 ";this._setPath(i,R)},_setPath:function(i,o){i._path.setAttribute("d",o)},_bringToFront:function(i){Vt(i._path)},_bringToBack:function(i){hn(i._path)}});Ht.vml&&Xr.include(Bm);function rd(i){return Ht.svg||Ht.vml?new Xr(i):null}Se.include({getRenderer:function(i){var o=i.options.renderer||this._getPaneRenderer(i.options.pane)||this.options.renderer||this._renderer;return o||(o=this._renderer=this._createRenderer()),this.hasLayer(o)||this.addLayer(o),o},_getPaneRenderer:function(i){if(i==="overlayPane"||i===void 0)return!1;var o=this._paneRenderers[i];return o===void 0&&(o=this._createRenderer({pane:i}),this._paneRenderers[i]=o),o},_createRenderer:function(i){return this.options.preferCanvas&&sd(i)||rd(i)}});var od=Vs.extend({initialize:function(i,o){Vs.prototype.initialize.call(this,this._boundsToLatLngs(i),o)},setBounds:function(i){return this.setLatLngs(this._boundsToLatLngs(i))},_boundsToLatLngs:function(i){return i=pt(i),[i.getSouthWest(),i.getNorthWest(),i.getNorthEast(),i.getSouthEast()]}});function Fm(i,o){return new od(i,o)}Xr.create=Uo,Xr.pointsToPath=z,Ai.geometryToLayer=Co,Ai.coordsToLatLng=ec,Ai.coordsToLatLngs=Lo,Ai.latLngToCoords=nc,Ai.latLngsToCoords=Io,Ai.getFeature=Gs,Ai.asFeature=Do,Se.mergeOptions({boxZoom:!0});var ad=gi.extend({initialize:function(i){this._map=i,this._container=i._container,this._pane=i._panes.overlayPane,this._resetStateTimeout=0,i.on("unload",this._destroy,this)},addHooks:function(){ce(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Ue(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){de(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(i){if(!i.shiftKey||i.which!==1&&i.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Zi(),Bl(),this._startPoint=this._map.mouseEventToContainerPoint(i),ce(document,{contextmenu:us,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(i){this._moved||(this._moved=!0,this._box=Yt("div","leaflet-zoom-box",this._container),jt(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(i);var o=new ht(this._point,this._startPoint),c=o.getSize();Ce(this._box,o.min),this._box.style.width=c.x+"px",this._box.style.height=c.y+"px"},_finish:function(){this._moved&&(de(this._box),Ie(this._container,"leaflet-crosshair")),Br(),Fl(),Ue(document,{contextmenu:us,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(i){if(!(i.which!==1&&i.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(r(this._resetState,this),0);var o=new lt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(o).fire("boxzoomend",{boxZoomBounds:o})}},_onKeyDown:function(i){i.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});Se.addInitHook("addHandler","boxZoom",ad),Se.mergeOptions({doubleClickZoom:!0});var ld=gi.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(i){var o=this._map,c=o.getZoom(),m=o.options.zoomDelta,M=i.originalEvent.shiftKey?c-m:c+m;o.options.doubleClickZoom==="center"?o.setZoom(M):o.setZoomAround(i.containerPoint,M)}});Se.addInitHook("addHandler","doubleClickZoom",ld),Se.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var cd=gi.extend({addHooks:function(){if(!this._draggable){var i=this._map;this._draggable=new Xi(i._mapPane,i._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),i.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),i.on("zoomend",this._onZoomEnd,this),i.whenReady(this._onZoomEnd,this))}jt(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Ie(this._map._container,"leaflet-grab"),Ie(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var i=this._map;if(i._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var o=pt(this._map.options.maxBounds);this._offsetLimit=xt(this._map.latLngToContainerPoint(o.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(o.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;i.fire("movestart").fire("dragstart"),i.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(i){if(this._map.options.inertia){var o=this._lastTime=+new Date,c=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(c),this._times.push(o),this._prunePositions(o)}this._map.fire("move",i).fire("drag",i)},_prunePositions:function(i){for(;this._positions.length>1&&i-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var i=this._map.getSize().divideBy(2),o=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=o.subtract(i).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(i,o){return i-(i-o)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var i=this._draggable._newPos.subtract(this._draggable._startPos),o=this._offsetLimit;i.x<o.min.x&&(i.x=this._viscousLimit(i.x,o.min.x)),i.y<o.min.y&&(i.y=this._viscousLimit(i.y,o.min.y)),i.x>o.max.x&&(i.x=this._viscousLimit(i.x,o.max.x)),i.y>o.max.y&&(i.y=this._viscousLimit(i.y,o.max.y)),this._draggable._newPos=this._draggable._startPos.add(i)}},_onPreDragWrap:function(){var i=this._worldWidth,o=Math.round(i/2),c=this._initialWorldOffset,m=this._draggable._newPos.x,M=(m-o+c)%i+o-c,R=(m+o+c)%i-o-c,F=Math.abs(M+c)<Math.abs(R+c)?M:R;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=F},_onDragEnd:function(i){var o=this._map,c=o.options,m=!c.inertia||i.noInertia||this._times.length<2;if(o.fire("dragend",i),m)o.fire("moveend");else{this._prunePositions(+new Date);var M=this._lastPos.subtract(this._positions[0]),R=(this._lastTime-this._times[0])/1e3,F=c.easeLinearity,tt=M.multiplyBy(F/R),at=tt.distanceTo([0,0]),vt=Math.min(c.inertiaMaxSpeed,at),Dt=tt.multiplyBy(vt/at),ne=vt/(c.inertiaDeceleration*F),pe=Dt.multiplyBy(-ne/2).round();!pe.x&&!pe.y?o.fire("moveend"):(pe=o._limitOffset(pe,o.options.maxBounds),E(function(){o.panBy(pe,{duration:ne,easeLinearity:F,noMoveStart:!0,animate:!0})}))}}});Se.addInitHook("addHandler","dragging",cd),Se.mergeOptions({keyboard:!0,keyboardPanDelta:80});var hd=gi.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(i){this._map=i,this._setPanDelta(i.options.keyboardPanDelta),this._setZoomDelta(i.options.zoomDelta)},addHooks:function(){var i=this._map._container;i.tabIndex<=0&&(i.tabIndex="0"),ce(i,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Ue(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var i=document.body,o=document.documentElement,c=i.scrollTop||o.scrollTop,m=i.scrollLeft||o.scrollLeft;this._map._container.focus(),window.scrollTo(m,c)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(i){var o=this._panKeys={},c=this.keyCodes,m,M;for(m=0,M=c.left.length;m<M;m++)o[c.left[m]]=[-1*i,0];for(m=0,M=c.right.length;m<M;m++)o[c.right[m]]=[i,0];for(m=0,M=c.down.length;m<M;m++)o[c.down[m]]=[0,i];for(m=0,M=c.up.length;m<M;m++)o[c.up[m]]=[0,-1*i]},_setZoomDelta:function(i){var o=this._zoomKeys={},c=this.keyCodes,m,M;for(m=0,M=c.zoomIn.length;m<M;m++)o[c.zoomIn[m]]=i;for(m=0,M=c.zoomOut.length;m<M;m++)o[c.zoomOut[m]]=-i},_addHooks:function(){ce(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Ue(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(i){if(!(i.altKey||i.ctrlKey||i.metaKey)){var o=i.keyCode,c=this._map,m;if(o in this._panKeys){if(!c._panAnim||!c._panAnim._inProgress)if(m=this._panKeys[o],i.shiftKey&&(m=G(m).multiplyBy(3)),c.options.maxBounds&&(m=c._limitOffset(G(m),c.options.maxBounds)),c.options.worldCopyJump){var M=c.wrapLatLng(c.unproject(c.project(c.getCenter()).add(m)));c.panTo(M)}else c.panBy(m)}else if(o in this._zoomKeys)c.setZoom(c.getZoom()+(i.shiftKey?3:1)*this._zoomKeys[o]);else if(o===27&&c._popup&&c._popup.options.closeOnEscapeKey)c.closePopup();else return;us(i)}}});Se.addInitHook("addHandler","keyboard",hd),Se.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var ud=gi.extend({addHooks:function(){ce(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Ue(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(i){var o=ku(i),c=this._map.options.wheelDebounceTime;this._delta+=o,this._lastMousePos=this._map.mouseEventToContainerPoint(i),this._startTime||(this._startTime=+new Date);var m=Math.max(c-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(r(this._performZoom,this),m),us(i)},_performZoom:function(){var i=this._map,o=i.getZoom(),c=this._map.options.zoomSnap||0;i._stop();var m=this._delta/(this._map.options.wheelPxPerZoomLevel*4),M=4*Math.log(2/(1+Math.exp(-Math.abs(m))))/Math.LN2,R=c?Math.ceil(M/c)*c:M,F=i._limitZoom(o+(this._delta>0?R:-R))-o;this._delta=0,this._startTime=null,F&&(i.options.scrollWheelZoom==="center"?i.setZoom(o+F):i.setZoomAround(this._lastMousePos,o+F))}});Se.addInitHook("addHandler","scrollWheelZoom",ud);var zm=600;Se.mergeOptions({tapHold:Ht.touchNative&&Ht.safari&&Ht.mobile,tapTolerance:15});var dd=gi.extend({addHooks:function(){ce(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Ue(this._map._container,"touchstart",this._onDown,this)},_onDown:function(i){if(clearTimeout(this._holdTimeout),i.touches.length===1){var o=i.touches[0];this._startPos=this._newPos=new V(o.clientX,o.clientY),this._holdTimeout=setTimeout(r(function(){this._cancel(),this._isTapValid()&&(ce(document,"touchend",rn),ce(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",o))},this),zm),ce(document,"touchend touchcancel contextmenu",this._cancel,this),ce(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function i(){Ue(document,"touchend",rn),Ue(document,"touchend touchcancel",i)},_cancel:function(){clearTimeout(this._holdTimeout),Ue(document,"touchend touchcancel contextmenu",this._cancel,this),Ue(document,"touchmove",this._onMove,this)},_onMove:function(i){var o=i.touches[0];this._newPos=new V(o.clientX,o.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(i,o){var c=new MouseEvent(i,{bubbles:!0,cancelable:!0,view:window,screenX:o.screenX,screenY:o.screenY,clientX:o.clientX,clientY:o.clientY});c._simulated=!0,o.target.dispatchEvent(c)}});Se.addInitHook("addHandler","tapHold",dd),Se.mergeOptions({touchZoom:Ht.touch,bounceAtZoomLimits:!0});var fd=gi.extend({addHooks:function(){jt(this._map._container,"leaflet-touch-zoom"),ce(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Ie(this._map._container,"leaflet-touch-zoom"),Ue(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(i){var o=this._map;if(!(!i.touches||i.touches.length!==2||o._animatingZoom||this._zooming)){var c=o.mouseEventToContainerPoint(i.touches[0]),m=o.mouseEventToContainerPoint(i.touches[1]);this._centerPoint=o.getSize()._divideBy(2),this._startLatLng=o.containerPointToLatLng(this._centerPoint),o.options.touchZoom!=="center"&&(this._pinchStartLatLng=o.containerPointToLatLng(c.add(m)._divideBy(2))),this._startDist=c.distanceTo(m),this._startZoom=o.getZoom(),this._moved=!1,this._zooming=!0,o._stop(),ce(document,"touchmove",this._onTouchMove,this),ce(document,"touchend touchcancel",this._onTouchEnd,this),rn(i)}},_onTouchMove:function(i){if(!(!i.touches||i.touches.length!==2||!this._zooming)){var o=this._map,c=o.mouseEventToContainerPoint(i.touches[0]),m=o.mouseEventToContainerPoint(i.touches[1]),M=c.distanceTo(m)/this._startDist;if(this._zoom=o.getScaleZoom(M,this._startZoom),!o.options.bounceAtZoomLimits&&(this._zoom<o.getMinZoom()&&M<1||this._zoom>o.getMaxZoom()&&M>1)&&(this._zoom=o._limitZoom(this._zoom)),o.options.touchZoom==="center"){if(this._center=this._startLatLng,M===1)return}else{var R=c._add(m)._divideBy(2)._subtract(this._centerPoint);if(M===1&&R.x===0&&R.y===0)return;this._center=o.unproject(o.project(this._pinchStartLatLng,this._zoom).subtract(R),this._zoom)}this._moved||(o._moveStart(!0,!1),this._moved=!0),A(this._animRequest);var F=r(o._move,o,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=E(F,this,!0),rn(i)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,A(this._animRequest),Ue(document,"touchmove",this._onTouchMove,this),Ue(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});Se.addInitHook("addHandler","touchZoom",fd),Se.BoxZoom=ad,Se.DoubleClickZoom=ld,Se.Drag=cd,Se.Keyboard=hd,Se.ScrollWheelZoom=ud,Se.TapHold=dd,Se.TouchZoom=fd,s.Bounds=ht,s.Browser=Ht,s.CRS=W,s.Canvas=id,s.Circle=tc,s.CircleMarker=Ro,s.Class=Y,s.Control=$n,s.DivIcon=td,s.DivOverlay=_i,s.DomEvent=sm,s.DomUtil=nm,s.Draggable=Xi,s.Evented=et,s.FeatureGroup=Ti,s.GeoJSON=Ai,s.GridLayer=Wr,s.Handler=gi,s.Icon=Hs,s.ImageOverlay=No,s.LatLng=Et,s.LatLngBounds=lt,s.Layer=Kn,s.LayerGroup=zs,s.LineUtil=_m,s.Map=Se,s.Marker=Po,s.Mixin=um,s.Path=qi,s.Point=V,s.PolyUtil=dm,s.Polygon=Vs,s.Polyline=Ei,s.Popup=ko,s.PosAnimation=Ou,s.Projection=vm,s.Rectangle=od,s.Renderer=Pi,s.SVG=Xr,s.SVGOverlay=Qu,s.TileLayer=Ws,s.Tooltip=Oo,s.Transformation=dt,s.Util=B,s.VideoOverlay=ju,s.bind=r,s.bounds=xt,s.canvas=sd,s.circle=Em,s.circleMarker=Tm,s.control=Hr,s.divIcon=km,s.extend=e,s.featureGroup=Mm,s.geoJSON=Ju,s.geoJson=Rm,s.gridLayer=Om,s.icon=Sm,s.imageOverlay=Cm,s.latLng=$,s.latLngBounds=pt,s.layerGroup=bm,s.map=rm,s.marker=wm,s.point=G,s.polygon=Pm,s.polyline=Am,s.popup=Dm,s.rectangle=Fm,s.setOptions=g,s.stamp=l,s.svg=rd,s.svgOverlay=Im,s.tileLayer=ed,s.tooltip=Nm,s.transformation=nt,s.version=t,s.videoOverlay=Lm;var Hm=window.L;s.noConflict=function(){return window.L=Hm,this},window.L=s}))});var b=(s,t,...e)=>{let n=document.createElement(s);if(t)for(let[r,a]of Object.entries(t))a==null||a===!1||(r==="class"?n.className=a:r==="style"&&typeof a=="object"?Object.assign(n.style,a):r.startsWith("on")?n.addEventListener(r.slice(2),a):r==="html"?n.innerHTML=a:n.setAttribute(r,a===!0?"":a));return e.flat(9).forEach(r=>{r!=null&&r!==!1&&n.append(r.nodeType?r:document.createTextNode(String(r)))}),n},vi=(s,t=document)=>t.querySelector(s),rc=class{constructor(){this.h={}}on(t,e){(this.h[t]=this.h[t]||[]).push(e)}emit(t,...e){(this.h[t]||[]).forEach(n=>n(...e))}},Pe=new rc,Q={link:null,tel:null,info:null,par:{},parList:[],events:[],rx:[],connected:!1,demo:!1,lastTel:0,tab:"setup",get(s,t){let e=this.par[s];return e===void 0?t:e}};function ee(s,t="info",e=3500){let n=vi("#toasts");n||(n=b("div",{id:"toasts"}),document.body.append(n));let r=b("div",{class:"toast "+t},s);n.append(r),setTimeout(()=>r.remove(),e)}var bt=(s,t=1)=>s==null||isNaN(s)?"\u2013":(+s).toFixed(t),Jn=s=>{s=Math.round(s);let t=Math.floor(s/60);return t>=60?`${Math.floor(t/60)} h ${t%60} min`:`${t} min ${String(s%60).padStart(2,"0")} s`},wn=(s,t,e)=>Math.min(e,Math.max(t,s)),fs=(s,t="info")=>{Q.events.push({t:new Date,m:s,kind:t}),Q.events.length>300&&Q.events.shift(),Pe.emit("ev")};function jn(s,t,e="application/json"){let n=b("a",{href:URL.createObjectURL(new Blob([t],{type:e})),download:s});document.body.append(n),n.click(),n.remove()}function Xs(s){return new Promise(t=>{let e=b("input",{type:"file",accept:s,onchange:()=>{let n=e.files[0];if(!n)return t(null);let r=new FileReader;r.onload=()=>t(r.result),r.readAsText(n)}});e.click()})}var Pn={get(s,t){try{let e=localStorage.getItem("fathom."+s);return e===null?t:JSON.parse(e)}catch{return t}},set(s,t){try{localStorage.setItem("fathom."+s,JSON.stringify(t))}catch{}}};var vd=[[0,0,2,0,255,0,0,100,1,188],[0,1,1,255,0,0,0,100,0,100],[0,2,1,0,0,0,255,100,0,100],[0,3,1,255,0,0,0,100,0,100],[0,4,1,0,0,0,255,100,0,100],[1,0,2,0,255,0,0,100,65535,100],[2,0,2,0,255,0,0,100,21845,500],[3,0,2,0,255,0,0,100,21845,125],[6,2,2,0,0,0,255,100,1,63],[7,1,5,255,0,0,0,100,0,0],[7,3,2,255,0,0,0,100,7,50],[9,0,1,0,255,0,0,100,0,100],[9,1,5,255,0,0,0,100,0,0],[9,3,2,255,0,0,0,100,7,50],[10,2,2,0,0,0,255,100,257,63],[10,3,2,255,0,0,0,100,13107,62],[11,0,1,0,255,0,0,100,0,100],[11,1,2,255,0,0,0,100,65535,100],[11,4,1,0,0,0,255,100,0,100],[12,2,2,0,0,0,255,100,257,63],[12,3,2,255,0,0,0,100,13107,62]];var Bn=[{id:"SERVO_RUD_C",k:"servo.rud.center",d:1500,mn:1e3,mx:2e3,u:"us",g:"Servos",h:"Ruder Mitte"},{id:"SERVO_RUD_MIN",k:"servo.rud.min",d:1e3,mn:800,mx:1500,u:"us",g:"Servos",h:"Ruder Endanschlag min"},{id:"SERVO_RUD_MAX",k:"servo.rud.max",d:2e3,mn:1500,mx:2200,u:"us",g:"Servos",h:"Ruder Endanschlag max"},{id:"SERVO_RUD_REV",k:"servo.rud.rev",d:0,mn:0,mx:1,u:"",g:"Servos",h:"Ruder Richtung umkehren"},{id:"SERVO_STN_C",k:"servo.stern.center",d:1500,mn:1e3,mx:2e3,u:"us",g:"Servos",h:"Hecktiefenruder Mitte"},{id:"SERVO_STN_MIN",k:"servo.stern.min",d:1e3,mn:800,mx:1500,u:"us",g:"Servos",h:"Hecktiefenruder min"},{id:"SERVO_STN_MAX",k:"servo.stern.max",d:2e3,mn:1500,mx:2200,u:"us",g:"Servos",h:"Hecktiefenruder max"},{id:"SERVO_STN_REV",k:"servo.stern.rev",d:0,mn:0,mx:1,u:"",g:"Servos",h:"Hecktiefenruder umkehren"},{id:"SERVO_BOW_C",k:"servo.bow.center",d:1500,mn:1e3,mx:2e3,u:"us",g:"Servos",h:"Bugtiefenruder Mitte"},{id:"SERVO_BOW_MIN",k:"servo.bow.min",d:1e3,mn:800,mx:1500,u:"us",g:"Servos",h:"Bugtiefenruder min"},{id:"SERVO_BOW_MAX",k:"servo.bow.max",d:2e3,mn:1500,mx:2200,u:"us",g:"Servos",h:"Bugtiefenruder max"},{id:"SERVO_BOW_REV",k:"servo.bow.rev",d:0,mn:0,mx:1,u:"",g:"Servos",h:"Bugtiefenruder umkehren"},{id:"SERVO_US_DEG",k:"servo.us_per_deg",d:10,mn:2,mx:30,u:"us/deg",g:"Servos",h:"Servoweg pro Grad Ruderausschlag"},{id:"LIM_DEFLECT",k:"lim.deflect",d:25,mn:5,mx:45,u:"deg",g:"Limiten",h:"maximaler Ruderausschlag"},{id:"LIM_PITCH",k:"lim.pitch",d:20,mn:5,mx:45,u:"deg",g:"Limiten",h:"maximaler Nickwinkel (Tiefenregelung)"},{id:"LIM_THR",k:"lim.throttle",d:35,mn:5,mx:100,u:"%",g:"Limiten",h:"maximaler Vortrieb (Software Limit)"},{id:"LIM_DEPTH",k:"lim.depth",d:3,mn:.5,mx:90,u:"m",g:"Limiten",h:"Tauchtiefe Limit, darueber Failsafe"},{id:"THR_SLEW",k:"thr.slew",d:150,mn:10,mx:1e3,u:"%/s",g:"Limiten",h:"Gasrampe (Beschleunigung begrenzen)"},{id:"ESC_DEAD",k:"esc.deadband",d:25,mn:0,mx:100,u:"us",g:"Limiten",h:"ESC Totzone um 1500 us (nur bei esc.reverse 1)"},{id:"ESC_REV",k:"esc.reverse",d:0,mn:0,mx:1,u:"",g:"Limiten",h:"0 = ESC nur vorwaerts (Stop 1000 us), 1 = ESC mit Rueckwaertslauf (Stop 1500 us)"},{id:"PUMP_INV",k:"pump.invert",d:0,mn:0,mx:1,u:"",g:"Ballast",h:"1 = Pumpenrichtung tauschen (statt Schlaeuche umzustecken)"},{id:"PID_P_KP",k:"pid.pitch.kp",d:1.6,mn:0,mx:10,u:"",g:"Regler",h:"Nick P (deg Ruder je deg Fehler)"},{id:"PID_P_KI",k:"pid.pitch.ki",d:.15,mn:0,mx:5,u:"",g:"Regler",h:"Nick I"},{id:"PID_P_KD",k:"pid.pitch.kd",d:.35,mn:0,mx:5,u:"",g:"Regler",h:"Nick D (ueber Gyro)"},{id:"PID_D_KP",k:"pid.depth.kp",d:18,mn:0,mx:80,u:"deg/m",g:"Regler",h:"Tiefe P (Nickwinkel je m Fehler)"},{id:"PID_D_KI",k:"pid.depth.ki",d:1.2,mn:0,mx:20,u:"",g:"Regler",h:"Tiefe I"},{id:"PID_D_KD",k:"pid.depth.kd",d:25,mn:0,mx:100,u:"deg/m/s",g:"Regler",h:"Tiefe D (Daempfung ueber Sinkrate)"},{id:"PID_H_KP",k:"pid.head.kp",d:.6,mn:0,mx:5,u:"",g:"Regler",h:"Kurs P (deg Ruder je deg Fehler)"},{id:"PID_H_KI",k:"pid.head.ki",d:.02,mn:0,mx:2,u:"",g:"Regler",h:"Kurs I"},{id:"PID_H_KD",k:"pid.head.kd",d:.25,mn:0,mx:3,u:"",g:"Regler",h:"Kurs D (Gyro)"},{id:"MIX_BOW",k:"mix.bow",d:.5,mn:-1.5,mx:1.5,u:"",g:"Regler",h:"Anteil Bugtiefenruder am Nickbefehl"},{id:"BAL_FLOW",k:"bal.flow",d:4,mn:.5,mx:30,u:"%/s",g:"Ballast",h:"Fuellstand Aenderung bei 100 % Pumpe"},{id:"BAL_KP",k:"bal.depth_kp",d:60,mn:0,mx:300,u:"%/m",g:"Ballast",h:"Pumpe je m Tiefenfehler bei Stillstand"},{id:"BAL_SLOW",k:"bal.slow_thr",d:6,mn:0,mx:30,u:"%",g:"Ballast",h:"unter diesem Gas regelt die Pumpe die Tiefe"},{id:"SPD_MS",k:"spd.ms_per_pct",d:.014,mn:.002,mx:.05,u:"m/s",g:"Fahrt",h:"Geschwindigkeit je % Gas (Vorschau, Kurven)"},{id:"FLUID_RHO",k:"fluid.density",d:998,mn:990,mx:1030,u:"kg/m3",g:"Umgebung",h:"Wasserdichte (See 998, Salz 1025)"},{id:"P_ATM",k:"fluid.p_surface",d:1013,mn:850,mx:1100,u:"mbar",g:"Umgebung",h:"Oberflaechendruck (CAL DEPTH setzt ihn)"},{id:"VB_SCALE",k:"bat.scale",d:1,mn:.5,mx:2,u:"",g:"Batterie",h:"Spannungs Faktor (CAL VBAT)"},{id:"VB_WARN",k:"bat.warn",d:7,mn:5,mx:9,u:"V",g:"Batterie",h:"Warnschwelle 2S"},{id:"VB_CRIT",k:"bat.crit",d:6.4,mn:5,mx:9,u:"V",g:"Batterie",h:"kritisch, Failsafe"},{id:"LEAK_THR",k:"leak.threshold",d:.35,mn:.05,mx:.95,u:"",g:"Leckage",h:"Leckage klein: Notaufstieg, an der Oberflaeche ausschalten"},{id:"LEAK_HI",k:"leak.major",d:.7,mn:.1,mx:.99,u:"",g:"Leckage",h:"Leckage gross: Not Aus (Schwelle muss ueber leak.threshold liegen)"},{id:"LEAK_ACT",k:"leak.major_action",d:0,mn:0,mx:1,u:"",g:"Leckage",h:"grosse Leckage: 0 = Not Aus (alles stromlos, Beacon an), 1 = trotzdem Notaufstieg"},{id:"MIS_RTH",k:"mis.end_rth",d:1,mn:0,mx:1,u:"",g:"RTH",h:"nach Missionsende an der Oberflaeche abgleichen und Heimfahrt (mit Home und GPS)"},{id:"RC_ARM",k:"rc.ch.arm",d:5,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Arm (hoch = scharf)"},{id:"RC_MODE",k:"rc.ch.mode",d:6,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Modus (3 Stufen)"},{id:"RC_MIS",k:"rc.ch.mission",d:7,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Mission Start (hoch)"},{id:"RC_THR",k:"rc.ch.thr",d:3,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Vortrieb (Mitte = Stop)"},{id:"RC_RUD",k:"rc.ch.rud",d:4,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Seitenruder"},{id:"RC_ELE",k:"rc.ch.ele",d:2,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Tiefenruder"},{id:"RC_BOW",k:"rc.ch.bow",d:1,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Bugruder (nur Manuell)"},{id:"FS_TIMEOUT",k:"fs.rc_timeout",d:1,mn:.2,mx:10,u:"s",g:"Failsafe",h:"RC Verlust bis Failsafe"},{id:"FS_PITCH",k:"fs.pitch",d:10,mn:0,mx:30,u:"deg",g:"Failsafe",h:"Nick nach oben beim Auftauchen"},{id:"FS_THR",k:"fs.throttle",d:15,mn:0,mx:50,u:"%",g:"Failsafe",h:"Vortrieb beim Auftauchen"},{id:"FS_ACT",k:"fs.rc_action",d:0,mn:0,mx:1,u:"",g:"Failsafe",h:"RC Verlust: 0 = Auftauchen, 1 = RTH (nur mit Home und GPS)"},{id:"MIS_RC",k:"mis.needs_rc",d:0,mn:0,mx:1,u:"",g:"Failsafe",h:"Mission nur mit RC Verbindung"},{id:"MIS_TOL",k:"mis.depth_tol",d:.15,mn:.03,mx:1,u:"m",g:"Failsafe",h:"Tiefen Toleranz fuer Schritt Ende"},{id:"RC_RTH",k:"rc.ch.rth",d:8,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal RTH (hoch = Heimkehr)"},{id:"GPS_SATS",k:"gps.min_sats",d:5,mn:3,mx:12,u:"",g:"GPS",h:"Mindestzahl Satelliten fuer gueltigen Fix"},{id:"GPS_HDOP",k:"gps.max_hdop",d:3,mn:.8,mx:20,u:"",g:"GPS",h:"maximaler HDOP fuer gueltigen Fix"},{id:"RTH_THR",k:"rth.throttle",d:20,mn:5,mx:100,u:"%",g:"RTH",h:"Vortrieb beim Heimfahren an der Oberflaeche"},{id:"RTH_RAD",k:"rth.radius",d:3,mn:1,mx:50,u:"m",g:"RTH",h:"Ankunftsradius um Home"},{id:"BB_EN",k:"bb.enable",d:1,mn:0,mx:1,u:"",g:"Blackbox",h:"Blackbox aufzeichnen (nur im ARM Zustand)"},{id:"BB_HZ",k:"bb.hz",d:10,mn:1,mx:20,u:"Hz",g:"Blackbox",h:"Aufzeichnungsrate"},{id:"IMU_MODE",k:"imu.mode",d:1,mn:0,mx:1,u:"",g:"IMU",h:"0 IMU (ohne Kompass), 1 NDOF (mit Kompass, Standard)"},{id:"IMU_PITCH0",k:"imu.pitch_off",d:0,mn:-30,mx:30,u:"deg",g:"IMU",h:"Nick Offset (CAL LEVEL)"},{id:"IMU_ROLL0",k:"imu.roll_off",d:0,mn:-30,mx:30,u:"deg",g:"IMU",h:"Roll Offset (CAL LEVEL)"},{id:"IMU_YAW0",k:"imu.yaw_off",d:0,mn:-180,mx:180,u:"deg",g:"IMU",h:"Kurs Offset (Deklination)"},{id:"IMU_INV",k:"imu.invert",d:0,mn:0,mx:7,u:"",g:"IMU",h:"Vorzeichen umkehren: 1 Roll, 2 Nick, 4 Kurs (Nase hoch muss Nick + geben)"},{id:"IMU_MAP",k:"imu.axis_map",d:36,mn:0,mx:63,u:"",g:"IMU",h:"BNO055 AXIS_MAP_CONFIG (36 = Standard)"},{id:"IMU_SIGN",k:"imu.axis_sign",d:0,mn:0,mx:7,u:"",g:"IMU",h:"BNO055 AXIS_MAP_SIGN (Bit0 x, Bit1 y, Bit2 z)"},{id:"GPS_OFF_M",k:"gps.off_depth",d:1,mn:.3,mx:5,u:"m",g:"GPS",h:"GPS aus, sobald das Boot tiefer ist (unter 0.15 m wieder an)"},{id:"GPS_OFF_T",k:"gps.off_delay",d:3,mn:0,mx:30,u:"s",g:"GPS",h:"so lange tiefer als gps.off_depth, bevor das GPS ausgeht (gegen Wellen)"},{id:"REED_MIS",k:"reed.mission",d:1,mn:0,mx:1,u:"",g:"Reed",h:"Reed 2: Magnet 1 bis 5 s halten und wegnehmen = scharf und Mission nach Countdown"},{id:"REED_CD",k:"reed.countdown",d:10,mn:0,mx:60,u:"s",g:"Reed",h:"Countdown vor dem Missionsstart per Reed (Magnet erneut = Abbruch)"},{id:"BAT_OFF",k:"bat.auto_off",d:1,mn:0,mx:1,u:"",g:"Batterie",h:"entschaerft und Akku unter bat.crit fuer 60 s: Boot schaltet sich aus (schuetzt den LiPo)"},{id:"LED_MASTER",k:"led.master",d:1,mn:0,mx:2,u:"",g:"LED",h:"Status LEDs: 0 aus, 1 an, 2 nur an der Oberflaeche (Muster: Seite Signale)"},{id:"LED_HW",k:"led.hw",d:0,mn:0,mx:2,u:"",g:"LED",h:"LED Hardware: 0 zwei 5 mm LEDs (GP11, GP28), 1 zwei RGB Pixel an GP11, 2 zwei RGBW Pixel an GP11 (Neustart)"},{id:"LED_TEST",k:"led.lamp_test",d:1,mn:0,mx:1,u:"",g:"LED",h:"Lampentest beim Einschalten"},{id:"BC_WATCH",k:"beacon.watch",d:1,mn:0,mx:1,u:"",g:"Beacon",h:"Pod ueberwacht das scharfe Boot und schlaegt Alarm, wenn es 8 s schweigt"},{id:"BC_MAX",k:"beacon.strobe_max",d:0,mn:0,mx:120,u:"min",g:"Beacon",h:"automatischer Strobe endet nach n Minuten, schont den Pod Akku (0 unbegrenzt)"},{id:"CELL_SCALE",k:"bat.cell_scale",d:1,mn:.5,mx:2,u:"",g:"Batterie",h:"Faktor Zelle 1 am Mittelabgriff (CAL CELL, nur mit ADS1115)"},{id:"CELL_CRIT",k:"bat.cell_crit",d:3.2,mn:2.8,mx:3.8,u:"V",g:"Batterie",h:"schwaechste Zelle darunter: Failsafe, nicht scharf schalten (nur mit ADS1115)"},{id:"CELL_DIFF",k:"bat.cell_diff",d:.15,mn:.03,mx:.6,u:"V",g:"Batterie",h:"Zellen weichen mehr ab: Warnung (Akku balancieren)"},{id:"BAT_CAP",k:"bat.capacity",d:850,mn:100,mx:1e4,u:"mAh",g:"Energie",h:"Kapazitaet des Fahrakkus (nur mit INA226)"},{id:"BAT_RSV",k:"bat.reserve",d:30,mn:5,mx:80,u:"%",g:"Energie",h:"Reserve: ist so viel Kapazitaet uebrig, gilt die Energie als knapp"},{id:"BAT_EACT",k:"bat.energy_action",d:0,mn:0,mx:1,u:"",g:"Energie",h:"Energie knapp: 0 nur Warnung, 1 Heimkehr (mit Home und GPS) oder Auftauchen"},{id:"CUR_SHUNT",k:"cur.shunt",d:20,mn:1,mx:200,u:"mOhm",g:"Energie",h:"Shunt fuer die Strommessung (ADS1115 A2/A3 oder INA226), Standard 20 mOhm (ERJ8CW R020)"},{id:"CUR_ADS",k:"cur.ads",d:1,mn:0,mx:1,u:"",g:"Energie",h:"1 = Strom mit dem ADS1115 messen: Shunt im Akku Minus, A2 an GND Boot, A3 an Akku Minus (Neustart)"},{id:"CUR_MAX",k:"cur.max",d:6,mn:.5,mx:30,u:"A",g:"Energie",h:"Strom laenger als 1 s darueber: Warnung (Kraut im Propeller, Servo blockiert)"},{id:"HULL_RH",k:"hull.rh_warn",d:70,mn:20,mx:100,u:"%",g:"Innenraum",h:"Feuchte im Rohr darueber: Warnung (nur mit BME280)"},{id:"HULL_RISE",k:"hull.rh_rise",d:10,mn:2,mx:50,u:"%",g:"Innenraum",h:"Feuchte steigt seit dem Einschalten um so viel: Warnung, frueher als die Lecksonden"},{id:"VAC_REQ",k:"vac.require",d:0,mn:0,mx:1,u:"",g:"Innenraum",h:"1 = scharf schalten nur nach bestandenem Dichtheitstest (Unterdruck)"},{id:"VAC_MIN",k:"vac.min",d:100,mn:20,mx:400,u:"mbar",g:"Innenraum",h:"Dichtheitstest: mindestens so viel Unterdruck gegen aussen"},{id:"VAC_HOLD",k:"vac.hold",d:10,mn:1,mx:60,u:"min",g:"Innenraum",h:"Dichtheitstest: so lange muss der Unterdruck halten"},{id:"VAC_LOSS",k:"vac.loss",d:3,mn:.5,mx:50,u:"mbar",g:"Innenraum",h:"Dichtheitstest: zulaessiger Druckanstieg innen (temperaturbereinigt)"},{id:"POD_CHG",k:"pod.charge",d:240,mn:10,mx:600,u:"min",g:"Pod",h:"Pod laden: so lange bleibt das Boot an, dann schaltet es aus"},{id:"HEAD_MAX",k:"head.max",d:100,mn:10,mx:100,u:"%",g:"LED",h:"Scheinwerfer: hoechste Helligkeit unter Wasser"},{id:"HEAD_AIR",k:"head.air",d:40,mn:0,mx:100,u:"%",g:"LED",h:"Scheinwerfer an der Luft (Tiefe unter 0.2 m): hoechstens so hell, gegen Ueberhitzen"},{id:"RC_HEAD",k:"rc.ch.head",d:9,mn:0,mx:16,u:"ch",g:"RC",h:"Kanal Scheinwerfer: unten aus, Mitte nach Mission (Schritt LIGHT), oben voll (0 = kein Kanal)"}];var Rn={WAIT:{label:"Warten",color:"#7f8ea3",f:[["Dauer","s",10,0,3600,1]]},DIVE:{label:"Tauchen",color:"#2f7fd0",f:[["Zieltiefe","m",1.5,0,90,.1],["Max Sinkrate","m/s",.15,.02,1,.01],["Max Nick","deg",15,3,45,1],["Fahrt","%",25,0,100,1]]},CRUISE:{label:"Geradeaus",color:"#35a7a0",f:[["Fahrt","%",30,0,100,1],["Kurs (-1 halten)","deg",-1,-1,359,1],["Dauer","s",30,1,7200,1]]},TURN:{label:"Drehen",color:"#d9a441",f:[["Kurs","deg",90,-360,360,1],["0 absolut, 1 relativ","",0,0,1,1],["Max Gierrate","deg/s",15,2,60,1],["Fahrt","%",15,0,100,1]]},CURVE:{label:"Kurve",color:"#c9783a",f:[["Kurs\xE4nderung (+ rechts)","deg",90,-720,720,1],["Radius","m",1.5,.2,50,.1],["Fahrt","%",25,3,100,1]]},BALLAST:{label:"Ballast",color:"#8a6fd0",f:[["F\xFCllstand","%",50,0,100,1]]},PLANES:{label:"Ruder fix",color:"#b4568a",f:[["Bug","deg",0,-45,45,1],["Heck","deg",10,-45,45,1],["Dauer","s",10,.5,600,.5],["Fahrt","%",25,0,100,1]]},SURFACE:{label:"Auftauchen",color:"#5fb36a",f:[]},BEACON:{label:"Beacon",color:"#e0584f",f:[["Modus (0 aus, 2 weiss, 3 rot, 4 Alarm)","",2,0,4,1]]},LIGHT:{label:"Scheinwerfer",color:"#e8c547",f:[["Helligkeit (0 aus)","%",100,0,100,5]]},REPEAT:{label:"Wiederholen",color:"#9aa7b8",f:[["Anzahl","x",2,1,50,1],["ab Schritt (0 = erster)","",0,0,63,1]]}},ac=["WAIT","DIVE","CRUISE","TURN","CURVE","BALLAST","PLANES","SURFACE","BEACON","LIGHT","REPEAT"],Ho=64,Vo=s=>({t:s,v:Rn[s].f.map(t=>t[2]).concat([0,0,0,0]).slice(0,4)}),zo=s=>(s%360+360)%360,oc=s=>(s=zo(s),s>180?s-360:s),Ri=(s,t,e)=>Math.min(e,Math.max(t,s)),sg=180/Math.PI,Fo=Math.PI/180;function Go(s){let t=(e,n)=>{let r=s?s(e):void 0;return r===void 0||isNaN(r)?n:r};return{ms:t("spd.ms_per_pct",.014),thrMax:t("lim.throttle",35),pitchMax:t("lim.pitch",20),depthMax:t("lim.depth",3),flow:t("bal.flow",4),fsThr:t("fs.throttle",15),fsPitch:t("fs.pitch",10),tol:t("mis.depth_tol",.15)}}function Wo(s,t){let e=[];return s.length>Ho&&e.push({i:-1,m:`Maximal ${Ho} Schritte, Boot speichert nur diese.`}),s.forEach((n,r)=>{let a=n.v;if(n.t==="DIVE"&&(a[0]>t.depthMax&&e.push({i:r,m:`Tiefe ${a[0]} m \xFCber Limit ${t.depthMax} m (Failsafe l\xF6st aus).`}),a[2]>t.pitchMax&&e.push({i:r,m:`Nick ${a[2]}\xB0 wird auf ${t.pitchMax}\xB0 begrenzt.`})),["DIVE","CRUISE","TURN","CURVE","PLANES"].includes(n.t)){let l=n.t==="CRUISE"?a[0]:n.t==="CURVE"?a[2]:a[3];l>t.thrMax&&e.push({i:r,m:`Fahrt ${l} % wird auf Limit ${t.thrMax} % begrenzt.`})}n.t==="REPEAT"&&a[1]>=r&&e.push({i:r,m:"R\xFCcksprung muss vor diesem Schritt liegen."}),n.t==="CURVE"&&a[1]<.5&&e.push({i:r,m:"Radius unter 0.5 m ist mit Ruder allein bei 67 cm L\xE4nge nicht erreichbar."})}),s.length&&s[s.length-1].t!=="SURFACE"&&e.push({i:s.length-1,m:"Mission endet ohne Auftauchen: Boot h\xE4lt danach die letzte Tiefe (Modus DEPTH)."}),e}function Zo(s,t,e={}){let r=[],a=[],l={t:0,x:0,y:0,z:0,h:e.h0||0,p:0,v:0,f:0,thr:0},h=O=>{r.push({...l,i:O})},u=0,f=0,p=0,d={};h(-1);let _=4*3600,g=(O,C,I,k,E)=>{let A=0;for(;!O(A)&&A<I&&p<_;)C(A),A+=.1,p+=.1,l.t=p,Math.round(A/.1)%5===0&&h(k);A>=I&&a.push({i:k,m:`${E}: Ziel in ${Math.round(I)} s nicht erreicht (Vorschau).`}),h(k)},y=(O,C,I)=>{let k=Ri(O,0,t.thrMax)*t.ms;l.v=k,l.thr=Ri(O,0,t.thrMax),l.h=zo(l.h+C*.1),l.p+=(I-l.p)*Math.min(1,.1/1.5);let E=k*Math.cos(l.p*Fo),A=-k*Math.sin(l.p*Fo);l.x+=E*Math.sin(l.h*Fo)*.1,l.y+=E*Math.cos(l.h*Fo)*.1,l.z=Math.max(0,l.z+A*.1)};for(;u<s.length&&f++<5e3&&p<_;){let O=s[u],C=O.v;switch(O.t){case"WAIT":g(I=>I>=C[0],()=>y(0,0,0),C[0]+1,u,"Warten");break;case"DIVE":{let I=C[0],k=C[1]>0?C[1]:.2,E=Math.max(C[3],0),A=Math.min(C[2]>0?C[2]:t.pitchMax,t.pitchMax),B=l.z,Y=I>l.z?1:-1;g(()=>Math.abs(l.z-I)<t.tol*.5&&Math.abs(B-I)<1e-6,()=>{B+=Y*k*.1,(Y>0&&B>I||Y<0&&B<I)&&(B=I);let K=(B-l.z)*18,X=Ri(-K,-A,A);y(E,0,X),E<1&&(l.z=Ri(l.z+Ri((B-l.z)*.8,-k,k)*.1,0,90),l.p=0)},Math.abs(I-l.z)/k*3+40,u,"Tauchen"),l.z=I;break}case"CRUISE":{let I=C[1]>=0?C[1]:l.h;g(k=>k>=C[2],()=>{let k=oc(I-l.h);y(C[0],Ri(k*2,-20,20),0)},C[2]+1,u,"Geradeaus");break}case"TURN":{let I=C[1]>.5?zo(l.h+C[0]):zo(C[0]),k=C[2]>0?C[2]:20;g(()=>Math.abs(oc(I-l.h))<1,()=>{let E=oc(I-l.h);y(C[3],Ri(E*3,-k,k),0)},90+360/k,u,"Drehen");break}case"CURVE":{let I=Math.max(C[2],1)*t.ms,k=I/Math.max(C[1],.05)*sg,E=0,A=Math.abs(C[0]);g(()=>E>=A,()=>{let B=Math.min(k*.1,A-E);E+=B,y(Math.max(C[2],1),(C[0]>=0?1:-1)*B/.1,0)},A/Math.max(k,1)*3+40,u,"Kurve");break}case"BALLAST":{let I=Ri(C[0],0,100);g(()=>Math.abs(l.f-I)<.5,()=>{l.f+=Math.sign(I-l.f)*Math.min(t.flow*.1,Math.abs(I-l.f)),y(0,0,0)},240,u,"Ballast");break}case"PLANES":{let I=Ri((C[1]+.5*C[0])*.8,-t.pitchMax,t.pitchMax);g(k=>k>=C[2],()=>y(C[3],0,I),C[2]+1,u,"Ruder fix");break}case"SURFACE":{g(()=>l.z<=.12,()=>{l.f=Math.max(0,l.f-t.flow*.1),y(t.fsThr,0,t.fsPitch),l.z=Math.max(0,l.z-.2*.1*0)},600,u,"Auftauchen"),l.z=0,l.p=0,l.v=0,l.thr=0,h(u),u=s.length;continue}case"REPEAT":{let I=u;if(d[I]=(d[I]||0)+1,d[I]<=C[0]&&C[1]<u){u=Math.max(0,Math.round(C[1]));continue}break}}u++}let S=r,x=0,v=0,P=0,w={x0:0,x1:0,y0:0,y1:0,z1:0};for(let O=1;O<S.length;O++){let C=S[O-1],I=S[O];x+=Math.hypot(I.x-C.x,I.y-C.y,I.z-C.z);let k=I.t-C.t,E=(I.thr||0)/100;P+=k*(e.pBase??1.5+(e.pMax??25)*E*E*E),I.thr>1&&(v+=k)}S.forEach(O=>{w.x0=Math.min(w.x0,O.x),w.x1=Math.max(w.x1,O.x),w.y0=Math.min(w.y0,O.y),w.y1=Math.max(w.y1,O.y),w.z1=Math.max(w.z1,O.z)});let T=S[S.length-1]||l;return{pts:S,notes:a,stats:{dur:T.t,dist:x,maxDepth:w.z1,bb:w,wh:P/3600,cruiseT:v,avgV:T.t>0?x/T.t:0,endDist:Math.hypot(T.x,T.y),final:{x:T.x,y:T.y,z:T.z},w:w.x1-w.x0,l:w.y1-w.y0}}}var lc={"Pool Funktionstest":[["WAIT",5],["BALLAST",20],["DIVE",1,.1,12,15],["CRUISE",20,-1,30],["TURN",90,1,12,12],["CRUISE",20,-1,20],["SURFACE"]],"Rechteck Kurs 3 m":[["DIVE",1.5,.15,12,20],["CRUISE",25,0,20],["TURN",90,1,15,15],["REPEAT",3,1],["SURFACE"]].map((s,t)=>s),"Yo Yo 0.5 bis 2 m":[["DIVE",.5,.15,15,20],["DIVE",2,.15,15,25],["DIVE",.5,.15,15,25],["REPEAT",3,1],["SURFACE"]],"Kreis Radius 1.5 m":[["DIVE",1,.15,15,20],["CURVE",360,1.5,25],["CURVE",-360,1.5,25],["SURFACE"]],"See Tauchgang 20 m":[["WAIT",10],["DIVE",20,.2,18,30],["CRUISE",30,0,120],["TURN",180,1,12,15],["CRUISE",30,-1,120],["SURFACE"]]};function cc(s){return lc[s].map(t=>{let e=Vo(t[0]);return t.slice(1).forEach((n,r)=>{e.v[r]=n}),e})}var xd=s=>s.map(t=>`MIS ADD ${t.t} ${t.v.map(e=>+e.toFixed(3)).join(" ")}`);function Xo(s){return s.map(t=>({t:t[0],v:[t[1],t[2],t[3],t[4]]})).filter(t=>Rn[t.t])}function qs(){if(qs.c)return qs.c;let s=10,t=2400,e=52,n=new Uint8Array(16+t*e),r=new DataView(n.buffer);n.set([70,66,66,50],0);let a=0;r.setUint16(4,e,!0),r.setUint16(6,s,!0),r.setUint32(8,100,!0);let l=47.05,h=8.3,u=90,f=0,p={lat:l,lon:h};for(let d=0;d<t;d++){let _=d/s,g=0,y=2,S=0,x=0;_<15?y=0:_<45?(y=2,S=2.5,g=Math.min(2.5,(_-15)*.12)):_<160?(y=3,S=2.5,g=2.5+.05*Math.sin(_/4),x=25,u=90+80*Math.sin((_-45)/18)):_<190?(y=3,S=0,g=Math.max(0,2.5-(_-160)*.09),x=20):(y=5,x=_<215?20:0),f=g>.5?Math.min(60,f+.2):Math.max(0,f-.2);let v=16+d*e;r.setUint32(v,Math.round(_*1e3),!0),r.setInt16(v+4,Math.round(g*100),!0),r.setInt16(v+6,Math.round(S*100),!0),r.setInt16(v+8,Math.round(Math.sin(_/3)*20),!0),r.setInt16(v+10,Math.round((S>g?40:-40*(g>.2?1:0))+Math.sin(_)*10),!0),r.setUint16(v+12,Math.round((u%360+360)%360*10),!0),r.setUint16(v+14,Math.round((8.3-_*.0016)*100),!0),r.setUint8(v+16,8),r.setUint8(v+17,y);let P=g<.2&&_>2?4:0;r.setUint8(v+18,3|P|8|16|(y===3?32:0)),r.setUint8(v+19,Math.round(f)),r.setInt8(v+20,x),r.setInt8(v+21,Math.round((f-g*20)/10)),r.setInt8(v+22,Math.round(Math.sin(_/2)*12)),r.setInt8(v+23,Math.round((S-g)*8)),r.setInt8(v+24,Math.round((S-g)*4));let w=x/100*.5;h+=Math.sin(u*Math.PI/180)*w*.1/75900,l+=Math.cos(u*Math.PI/180)*w*.1/111200,P&&(p={lat:l,lon:h}),r.setInt32(v+25,Math.round(p.lat*1e7),!0),r.setInt32(v+29,Math.round(p.lon*1e7),!0),r.setUint8(v+33,P?9:0),r.setInt8(v+34,-60);let T=8.3-_*.0016,O=.4+x/100*4.5+(y===3&&_>100&&_<104?3.5:0),C=T/2+.012+_*2e-5;a+=O/s/3.6,r.setUint16(v+36,Math.round(C*1e3),!0),r.setUint16(v+38,Math.round((T-C)*1e3),!0),r.setInt16(v+40,Math.round(O*100),!0),r.setUint16(v+42,Math.round(a),!0),r.setUint16(v+44,Math.round((842+_*.004)*10),!0),r.setUint8(v+46,Math.round(34+_*.01)),r.setInt8(v+47,Math.round(19+_*.02)),r.setInt16(v+48,Math.round((14.2-g*.4)*10),!0),r.setUint16(v+50,3|(y===3?8:0)|(g>1?16:0)|(y===5?32:0),!0)}return qs.c=n}function qr(){let s=[[0,255,0,0],[255,0,0,0],[0,0,0,255],[255,0,0,0],[0,0,0,255]],t=[];for(let e=0;e<13;e++)for(let n=0;n<5;n++){let r=vd.find(a=>a[0]===e&&a[1]===n);t.push(r?r.slice():[e,n,0,...s[n],100,65535,100])}return t}var hc=class{constructor(){this.h={}}on(t,e){return(this.h[t]=this.h[t]||[]).push(e),()=>{this.h[t]=this.h[t].filter(n=>n!==e)}}emit(t,...e){(this.h[t]||[]).forEach(n=>{try{n(...e)}catch(r){console.error(r)}})}};function yd(s){let t=4294967295;for(let e=0;e<s.length;e++){t^=s[e];for(let n=0;n<8;n++)t=t>>>1^3988292384&-(t&1)}return~t>>>0}var Yr=class extends hc{constructor(){super(),this.q=[],this.cur=null,this.buf="",this.connected=!1,this.demo=!1}_feed(t){this.buf+=t;let e;for(;(e=this.buf.indexOf(`
`))>=0;){let n=this.buf.slice(0,e).replace(/\r$/,"");this.buf=this.buf.slice(e+1),n&&this._line(n)}this.buf.length>2e4&&(this.buf="")}_line(t){if(this.emit("rx",t),t.startsWith("T {")){try{this.emit("tel",JSON.parse(t.slice(2)))}catch{}return}if(t.startsWith("EV ")){this.emit("ev",t.slice(3));return}if(this.cur&&this.cur.dump){let e=this.cur;if(t.startsWith("BBD ")){let n=/^BBD (\d+) ([0-9a-f]*)$/.exec(t);if(!n)return;let r=+n[1],a=n[2];for(let l=0;l<a.length;l+=2)e.bytes.push(parseInt(a.substr(l,2),16));e.bytes.length!==r+a.length/2&&(e.bad=!0),clearTimeout(e.to),e.to=setTimeout(()=>{this.cur===e&&(this.cur=null,e.res({ok:!1,text:"ERR Zeit\xFCberschreitung beim Download"}),this._next())},4e3),e.prog&&e.prog(e.bytes.length);return}if(t.startsWith("BBE ")){let n=/^BBE (\d+) ([0-9a-f]+)$/.exec(t);this.cur=null,clearTimeout(e.to);let r=Uint8Array.from(e.bytes),a=n&&+n[1]===r.length&&!e.bad&&yd(r)===parseInt(n[2],16)>>>0;e.res({ok:!!a,text:a?"OK":"ERR Pr\xFCfsumme oder L\xE4nge falsch (Funk gest\xF6rt?)",bytes:r}),this._next();return}}if(/^(OK|ERR|PAR|INFO|MIS|BB|HOME|LGT)\b/.test(t)&&this.cur){let e=this.cur;this.cur=null,clearTimeout(e.to);let n=t;if(/^(PAR|INFO|MIS|BB|HOME|LGT)\s/.test(t))try{n=JSON.parse(t.slice(t.indexOf(" ")+1))}catch{e.res({ok:!1,text:"JSON Fehler"}),this._next();return}e.res({ok:!t.startsWith("ERR"),text:t,data:n}),this._next();return}t.startsWith("ERR")&&this.emit("ev",t)}cmd(t,e=2500){return new Promise(n=>{this.q.push({text:t,res:n,timeout:e}),this.cur||this._next()})}_next(){if(this.cur||!this.q.length)return;let t=this.q.shift();this.cur=t,t.to=setTimeout(()=>{this.cur===t&&(this.cur=null,t.res({ok:!1,text:"ERR Zeit\xFCberschreitung",timeout:!0}),this._next())},t.timeout),this.emit("tx",t.text),this._write(t.text+`
`)}dump(t,e){return new Promise(n=>{this.q.push({text:"BB DUMP "+t,res:n,timeout:6e3,dump:!0,bytes:[],prog:e}),this.cur||this._next()})}fire(t){this.emit("tx",t),this._write(t+`
`)}},$r=class extends Yr{static supported(){return"serial"in navigator}async connect(t){this.port=t||await navigator.serial.requestPort({filters:[{usbVendorId:11914},{usbVendorId:9114},{usbVendorId:12346}]}).catch(()=>navigator.serial.requestPort()),await this.port.open({baudRate:115200}),this.writer=this.port.writable.getWriter(),this.connected=!0,this.keep=!0,this._loop()}async _loop(){let t=new TextDecoder;try{for(;this.keep&&this.port.readable;){this.reader=this.port.readable.getReader();try{for(;;){let{value:e,done:n}=await this.reader.read();if(n)break;e&&this._feed(t.decode(e,{stream:!0}))}}finally{this.reader.releaseLock()}}}catch(e){this.emit("error",e)}this._closed()}_closed(){this.connected&&(this.connected=!1,this.emit("close"))}async _write(t){try{await this.writer.write(new TextEncoder().encode(t))}catch(e){this.emit("error",e)}}async disconnect(){this.keep=!1;try{await this.reader?.cancel()}catch{}try{this.writer?.releaseLock()}catch{}try{await this.port?.close()}catch{}this._closed()}},qo=class extends Yr{constructor(t){super(),this.host=t||location.hostname||"192.168.4.1",this.wifi=!0}connect(){return new Promise((t,e)=>{let n=!1,r=this.ws=new WebSocket(`ws://${this.host}:81/`),a=setTimeout(()=>{if(!n){n=!0;try{r.close()}catch{}e(new Error("keine Antwort von "+this.host))}},5e3);r.onopen=()=>{n||(n=!0,clearTimeout(a),this.connected=!0,t())},r.onmessage=l=>this._feed(String(l.data)+`
`),r.onerror=()=>{n||(n=!0,clearTimeout(a),e(new Error("WebSocket Fehler (https Seite? WLAN verbunden?)")))},r.onclose=()=>{this.connected&&(this.connected=!1,this.emit("close"))}})}_write(t){try{this.ws&&this.ws.readyState===1&&this.ws.send(t.replace(/\n$/,""))}catch(e){this.emit("error",e)}}async disconnect(){this.noretry=!0;try{this.ws&&this.ws.close()}catch{}this.connected&&(this.connected=!1,this.emit("close"))}},Yo=class extends Yr{constructor(){super(),this.demo=!0,this.par={},Bn.forEach(t=>{this.par[t.k]=t.d}),this.steps=[],this.hz=0,this.armed=0,this.mode="MANUAL",this.tst=0,this.tServo=[1500,1500,1500],this.tThr=0,this.tPump=0,this.tWd=0,this.fill=0,this.depth=0,this.t0=performance.now(),this.mis=null,this.leak=.03,this.home=null,this.gx=0,this.gy=0,this.att=[0,0,0],this.vb=8.1,this.fs="",this.calst=[0,1,2,1],this.vac={s:0,t:0,l:0},this.pc=0,this.mah=0,this.inP=842,this.inRh=34}async connect(){this.connected=!0,this.timer=setInterval(()=>this._tick(),50),setTimeout(()=>this.emit("ev","DEMO Boot verbunden (simuliert)"),50)}async disconnect(){clearInterval(this.timer),this.connected=!1,this.emit("close")}_reply(t){setTimeout(()=>this._feed(t+`
`),12)}_write(t){let e=t.trim().split(/\s+/),n=(e[0]||"").toUpperCase(),r=a=>this._reply(a);if(n==="PING")r("OK PONG");else if(n==="INFO")r("INFO "+JSON.stringify({fw:"FATHOM",ver:"0.5.0 DEMO",hw:"Simulation",params:Bn.length,maxsteps:64}));else if(n==="STREAM")this.hz=Math.max(0,Math.min(50,+e[1]||0)),r("OK");else if(n==="GET")r("PAR "+JSON.stringify(Bn.map(a=>({k:a.k,v:this.par[a.k],d:a.d,mn:a.mn,mx:a.mx,u:a.u,g:a.g,h:a.h}))));else if(n==="SET"){let a=Bn.find(l=>l.k===e[1]);a?(this.par[a.k]=Math.min(a.mx,Math.max(a.mn,+e[2])),r("OK")):r("ERR unbekannt")}else if(n==="POWER")this.armed?r("ERR nur entschaerft"):r("OK");else if(n==="VAC"){let a=(e[1]||"").toUpperCase();a==="START"?this.armed?r("ERR nur entschaerft"):1013-this.inP<this.par["vac.min"]?r("ERR Unterdruck zu klein"):(this.vac={s:1,t:0,l:0},this.emit("ev","DICHTHEIT: Test laeuft (Demo 20 mal schneller)"),r("OK")):a==="STOP"?(this.vac.s===1&&(this.vac.s=0),r("OK")):r("ERR VAC START oder STOP")}else if(n==="POD"){let a=(e[1]||"").toUpperCase();a==="CHARGE"?this.armed?r("ERR nur entschaerft"):(this.pc=(+e[2]||this.par["pod.charge"])*60,this.emit("ev",`POD LADEN ${Math.round(this.pc/60)} min, danach aus`),r("OK")):a==="STOP"?(this.pc=0,r("OK")):r("ERR POD CHARGE [Minuten] oder POD STOP")}else if(n==="LIGHT"){let a=(e[1]||"").toUpperCase();if(this.light||(this.light=qr()),a==="GET")r("LGT "+JSON.stringify(this.light));else if(a==="SET"){let l=e.slice(2).map(u=>Number(u)),h=this.light.find(u=>u[0]===l[0]&&u[1]===l[1]);if(!h||e.length<12||!(l[2]>=0&&l[2]<=5))r("ERR Zustand, Licht oder Art ungueltig");else{for(let u=2;u<10;u++)h[u]=l[u];r("OK")}}else a==="DEFAULTS"?(this.light=qr(),r("OK")):a==="SHOW"?this.armed?r("ERR nur entschaerft"):(this.preview=+e[2]||0,this.previewUntil=performance.now()+(+e[3]||10)*1e3,r("OK")):r("ERR LIGHT GET, SET, DEFAULTS oder SHOW")}else if(n==="HEAD")(e[1]||"").toUpperCase()==="OFF"||+e[1]>=0?r("OK"):r("ERR HEAD Prozent [Sekunden] oder HEAD OFF");else if(n==="BEACON"){let a=+e[1];a>=0&&a<=4?(this.bc=a,r("OK")):r("ERR BEACON 0 bis 4")}else if(n==="SAVE"||n==="LOAD")r("OK");else if(n==="DEFAULTS")Bn.forEach(a=>{this.par[a.k]=a.d}),r("OK");else if(n==="ARM")this.tst?r("ERR Testmodus"):(this.armed=1,this.home={lat:47.05+this.gy/111200,lon:8.3+this.gx/75900},r("OK"));else if(n==="DISARM")this.armed=0,this.mis=null,r("OK");else if(n==="MODE"){let a=(e[1]||"MANUAL").toUpperCase();a==="RTH"&&!this.home?r("ERR kein Home"):(this.mode=a,r("OK"))}else if(n==="TEST"){let a=(e[1]||"").toUpperCase();a==="ENABLE"?+e[2]&&this.armed?r("ERR scharf"):(this.tst=+e[2]?1:0,this.tst||(this.tThr=0,this.tPump=0),r("OK")):this.tst?a==="SERVO"?(this.tServo[+e[2]]=+e[3],r("OK")):a==="MOTOR"?(this.tThr=Math.max(-100,Math.min(100,+e[2]))/100,this.tWd=1.5,r("OK")):a==="PUMP"?(this.tPump=Math.max(-100,Math.min(100,+e[2]))/100,this.tWd=1.5,r("OK")):a==="OFF"?(this.tThr=0,this.tPump=0,this.tServo=[1500,1500,1500],r("OK")):r("ERR"):r("ERR kein Testmodus")}else if(n==="CAL"){let a=(e[1]||"").toUpperCase();a==="DEPTH"&&(this.depth=0),a==="CELL"&&(this.par["bat.cell_scale"]*=(+e[2]||4)/(this.vb/2+.012)),a==="CUR"&&(this.par["cur.shunt"]*=(.38+0)/(+e[2]||.38)),r("OK")}else if(n==="MIS"){let a=(e[1]||"").toUpperCase();if(a==="CLEAR")this.steps=[],r("OK");else if(a==="ADD")this.steps.push([e[2].toUpperCase(),+e[3]||0,+e[4]||0,+e[5]||0,+e[6]||0]),r("OK "+this.steps.length);else if(a==="GET")r("MIS "+JSON.stringify(this.steps));else if(a==="SAVE")r("OK");else if(a==="START"){if(!this.armed){r("ERR nicht scharf");return}let l=Go(h=>this.par[h]);this.mis={plan:Zo(Xo(this.steps),l),t:0,last:-1},this.mode="MISSION",r("OK")}else a==="STOP"?(this.mis=null,this.mode="DEPTH",r("OK")):r("ERR")}else if(n==="HOME")(e[1]||"").toUpperCase()==="SET"?(this.home={lat:47.05+this.gy/111200,lon:8.3+this.gx/75900},r("OK")):r("HOME "+JSON.stringify({set:this.home?1:0,lat:this.home?this.home.lat:0,lon:this.home?this.home.lon:0}));else if(n==="BB"){let a=(e[1]||"").toUpperCase();if(this.armed)r("ERR erst DISARM");else if(a==="INFO")r("BB "+JSON.stringify({free:this.bbs?64e4:104e4,total:1048576,rec:52}));else if(a==="LIST")r("BB "+JSON.stringify(this.bbs===!1?[]:[{f:"bb_001.bin",n:qs().length}]));else if(a==="CLEAR")this.bbs=!1,r("OK");else if(a==="DUMP"){if(this.bbs===!1||+e[2]!=1){r("ERR Datei fehlt");return}let l=qs(),h=0,u=0,f=setInterval(()=>{for(let p=0;p<40&&h<l.length;p++){let d=l.slice(h,h+48);this._feed("BBD "+h+" "+Array.from(d,_=>_.toString(16).padStart(2,"0")).join("")+`
`),h+=d.length}h>=l.length&&(clearInterval(f),this._feed("BBE "+l.length+" "+yd(l).toString(16).padStart(8,"0")+`
`))},20)}else r("ERR BB ?")}else r(n==="REBOOT"||n==="BOOTSEL"?"OK":"ERR unbekannter Befehl")}_tick(){let e=performance.now()-this.t0,n=0,r=this.att[2],a=this.depth,l=0,h=-1,u=0,f="-",p=0,d=0,_=0,g=0;if(this.tst&&(this.tWd-=.05,this.tWd<=0&&(this.tThr=0,this.tPump=0),this.fill=Math.min(100,Math.max(0,this.fill+this.tPump*this.par["bal.flow"]*.05)),l=this.tThr),this.mis){this.mis.t+=.05*(this.speed||1);let O=this.mis.plan.pts,C=O.findIndex(I=>I.t>=this.mis.t);if(C<0)this.mis=null,this.mode="DEPTH",this.emit("ev","MISSION ENDE");else{let I=O[C];a=I.z,n=I.p,r=I.h,this.fill=I.f,l=I.thr/100,h=I.i,u=1,f=this.steps[h]?this.steps[h][0]:"-",p=this.mis.t,h!==this.mis.last&&(this.mis.last=h,this.emit("ev",`SCHRITT ${h+1} ${f}`))}}else this.tst||(a+=(0-a)*.02,n=Math.sin(e/3e3)*.4);this.depth=a,this.att=[Math.sin(e/2500)*.6,n,r],this.vb=Math.max(6.6,8.2-e/1e3*4e-4-l*l*.15);let y=.38+Math.abs(l)*4.2+(this.tst?Math.abs(this.tPump)*.6:0);if(this.mah+=y*.05/3.6,this.vac.s===1&&(this.vac.t+=.05*20,this.vac.l=.4*this.vac.t/600,this.vac.t>=this.par["vac.hold"]*60&&(this.vac.s=2,this.vac.l=0,this.emit("ev","DICHTHEIT: bestanden"))),this.pc>0&&!this.armed&&(this.pc-=.05,this.pc<=0&&(this.pc=0,this.emit("ev","AUS: POD GELADEN (Demo)"))),!this.hz||e-(this._lt||-1e9)<1e3/this.hz)return;this._lt=e;let S=(this.vb/2+.012)*this.par["bat.cell_scale"],x=(O,C,I,k)=>Math.round(Math.min(this.par[k],Math.max(this.par[I],this.tst?this.tServo[O]:this.par[C])));if(this.mode==="RTH"&&this.home){let O=(this.home.lon-8.3)*75900,C=(this.home.lat-47.05)*111200,I=O-this.gx,k=C-this.gy,E=Math.hypot(I,k);E>3&&(this.gx+=I/E*.5*.05*3,this.gy+=k/E*.5*.05*3,r=(Math.atan2(I,k)*180/Math.PI+360)%360,this.att[2]=r)}else this.armed&&this.mode!=="MANUAL"&&(this.gx+=Math.sin(r*Math.PI/180)*.15*.05,this.gy+=Math.cos(r*Math.PI/180)*.15*.05);let v=47.05+this.gy/111200,P=8.3+this.gx/75900,w=this.home?Math.hypot((this.home.lon-8.3)*75900-this.gx,(this.home.lat-47.05)*111200-this.gy):0,T={t:Math.round(e),m:this.mode,arm:this.armed,tst:this.tst,att:this.att.map(O=>+O.toFixed(1)),gyr:[.1,+(Math.cos(e/3e3)*.4).toFixed(1),0],d:+a.toFixed(3),tmp:14.2,prs:+(this.par["fluid.p_surface"]+a*this.par["fluid.density"]*.0981).toFixed(1),vb:+this.vb.toFixed(2),lk:this.leak,bc:this.bc||(this.armed?1:0),es:0,rc:[1500,1500,1500,1500,1e3,1e3,1e3,1e3],rcok:1,rssi:-62,out:{r:g,s:_,b:d,us:[x(0,"servo.rud.center","servo.rud.min","servo.rud.max"),x(1,"servo.stern.center","servo.stern.min","servo.stern.max"),x(2,"servo.bow.center","servo.bow.min","servo.bow.max")],mu:Math.round(1500+l*500),thr:l,pmp:this.tPump},fill:+this.fill.toFixed(1),tg:{d:this.mis?a:0,p:n,h:r,t:l*100},mis:{run:u,i:h,n:this.steps.length,ty:f,t:+p.toFixed(1)},cal:this.calst,ok:[1,1],fs:this.fs,w:"",lp:640,ls:this.preview&&performance.now()<this.previewUntil?this.preview|1:1|(this.armed?2:0)|(this.tst?4:0)|(this.mis&&u?8:0)|(this.armed&&a>1?16:0)|(this.mode==="RTH"?32:0)|((this.bc||0)===2?64:0)|(this.vb<this.par["bat.warn"]?128:0)|(this.mode==="FAILSAFE"?512:0)|((this.bc||0)===4?1024:0),opt:7,cel:[+S.toFixed(3),+(this.vb-S).toFixed(3)],cur:+y.toFixed(2),mah:Math.round(this.mah),in:[this.inP,19.5,this.inRh],vac:{s:this.vac.s,t:Math.round(this.vac.t),l:+this.vac.l.toFixed(1),dp:Math.round(1013+a*98-this.inP)},pc:Math.round(this.pc),el:this.mah>this.par["bat.capacity"]*(1-this.par["bat.reserve"]/100)?1:0,gps:{ok:a<.3?1:0,lat:+v.toFixed(6),lon:+P.toFixed(6),sat:9,hd:.9,spd:this.armed?.5:0,home:this.home?1:0,dist:+w.toFixed(1),brg:0,ph:this.mode==="RTH"?w>3?3:4:0},bb:0};this._feed("T "+JSON.stringify(T)+`
`)}};var we={bg:"#071017",line:"#22323f",dim:"#71818e",txt:"#dfe7ec",acc:"#ff7a59",sky:"#0d2233",gnd:"#04080c",ok:"#4fb477",warn:"#e0a93b",bad:"#e0584b",tgt:"#56c8dc",grid:"#122029"},Nt=we;function $o(s,t){let e=b("canvas",{width:s*2,height:t*2,style:{width:s+"px",height:"auto",maxWidth:"100%"}}),n=e.getContext("2d");return n.scale(2,2),{c:e,x:n,w:s,h:t}}var ag='Bahnschrift, "DIN Alternate", "Arial Narrow", Arial, sans-serif',dn=(s,t,e="")=>{s.font=`${e} ${t}px ${ag}`},We=Math.PI/180,bd=(s,t=1)=>{let e=+s.toFixed(t);return(e>0?"+":e<0?"\u2212":"\xB1")+Math.abs(e).toFixed(t)};function Md(s,t,e,n){let r=s.createRadialGradient(t,e-n*.3,n*.1,t,e,n);r.addColorStop(0,"#0e1b25"),r.addColorStop(1,"#03070a"),s.fillStyle=r,s.beginPath(),s.arc(t,e,n,0,7),s.fill(),s.lineWidth=3,s.strokeStyle="#1d2a35",s.stroke(),s.lineWidth=1,s.strokeStyle="#3a4c5a",s.beginPath(),s.arc(t,e,n-2.5,0,7),s.stroke(),s.fillStyle="#25333e",[45,135,225,315].forEach(a=>{s.beginPath(),s.arc(t+Math.cos(a*We)*(n+.5),e+Math.sin(a*We)*(n+.5),2.2,0,7),s.fill()})}function lg(s,t,e){let n=t*.075,r=t/2-n*1.6,a=-t*.18,l=-t/2+n*.5,h=n*.28;s.fillStyle=e,s.beginPath(),s.moveTo(a,-n),s.lineTo(r,-n),s.bezierCurveTo(r+n*1.25,-n,t/2,-n*.55,t/2,0),s.bezierCurveTo(t/2,n*.55,r+n*1.25,n,r,n),s.lineTo(a,n),s.bezierCurveTo(a-t*.12,n,l+n*.4,h,l,h),s.lineTo(l,-h),s.bezierCurveTo(l+n*.4,-h,a-t*.12,-n,a,-n),s.closePath(),s.fill(),s.beginPath(),s.moveTo(t*.08,-n),s.lineTo(t*.115,-n*2.3),s.lineTo(t*.22,-n*2.3),s.lineTo(t*.25,-n),s.closePath(),s.fill();let u=l+n*.55;s.beginPath(),s.moveTo(u+n*1.6,-n*.45),s.lineTo(u+n*.2,-n*1.65),s.lineTo(u-n*.15,-n*1.65),s.lineTo(u-n*.15,-h),s.closePath(),s.fill(),s.beginPath(),s.moveTo(u+n*1.6,n*.45),s.lineTo(u+n*.2,n*1.65),s.lineTo(u-n*.15,n*1.65),s.lineTo(u-n*.15,h),s.closePath(),s.fill(),s.fillRect(l-n*.35,-n*.75,n*.22,n*1.5)}function cg(s,t,e){let n=t*.085,r=-t/2+n*1.6,a=t*.18,l=t/2-n*.5,h=n*.28;s.fillStyle=e,s.beginPath(),s.moveTo(-n,a),s.lineTo(-n,r),s.bezierCurveTo(-n,r-n*1.25,-n*.55,-t/2,0,-t/2),s.bezierCurveTo(n*.55,-t/2,n,r-n*1.25,n,r),s.lineTo(n,a),s.bezierCurveTo(n,a+t*.12,h,l-n*.4,h,l),s.lineTo(-h,l),s.bezierCurveTo(-h,l-n*.4,-n,a+t*.12,-n,a),s.closePath(),s.fill();let u=l-n*.55;s.beginPath(),s.moveTo(-n*.45,u-n*1.6),s.lineTo(-n*1.65,u-n*.2),s.lineTo(-n*1.65,u+n*.15),s.lineTo(-h,u+n*.15),s.closePath(),s.fill(),s.beginPath(),s.moveTo(n*.45,u-n*1.6),s.lineTo(n*1.65,u-n*.2),s.lineTo(n*1.65,u+n*.15),s.lineTo(h,u+n*.15),s.closePath(),s.fill(),s.fillRect(-n*.75,l+n*.13,n*1.5,n*.22),s.fillStyle="#071017",s.fillRect(-n*.38,-t*.25,n*.76,t*.17)}function Sd(s=260){let{c:t,x:e,w:n,h:r}=$o(s,s),a=n/2,l=r/2,h=s/2-5,u={el:t,draw(f=0,p=0,d){e.clearRect(0,0,n,r),Md(e,a,l,h),e.save(),e.translate(a,l);let _=h-8;e.save(),e.beginPath(),e.arc(0,0,_-16,0,7),e.clip(),e.strokeStyle=we.grid,e.lineWidth=1;for(let P=-_;P<=_;P+=12)e.beginPath(),e.moveTo(-_,P+.5),e.lineTo(_,P+.5),e.stroke();e.restore(),e.strokeStyle="#3c5262",e.setLineDash([2,3]),e.beginPath(),e.moveTo(-_+16,0),e.lineTo(_-16,0),e.stroke(),e.setLineDash([]),dn(e,9.5,"600"),e.textBaseline="middle";for(let P=-40;P<=40;P+=5){let w=P%10===0;[0,1].forEach(T=>{let O=(T?180+P:-P)*We,C=_,I=_-(w?10:5);e.strokeStyle=w?we.txt:we.dim,e.lineWidth=w?1.4:1,e.beginPath(),e.moveTo(Math.cos(O)*I,Math.sin(O)*I),e.lineTo(Math.cos(O)*C,Math.sin(O)*C),e.stroke(),w&&P&&!T&&(e.fillStyle=we.dim,e.textAlign="right",e.fillText(String(Math.abs(P)),Math.cos(O)*(_-13),Math.sin(O)*(_-13)))})}if(e.fillStyle=we.dim,dn(e,8,"600"),e.textAlign="center",e.fillText("BUG",_*.62,-_*.7),e.fillText("HECK",-_*.62,-_*.7),d!=null){let P=-d*We;e.strokeStyle=we.tgt,e.lineWidth=3,e.beginPath(),e.arc(0,0,_+3,P-2.5*We,P+2.5*We),e.stroke(),e.lineWidth=1,e.setLineDash([3,3]),e.beginPath(),e.moveTo(Math.cos(P)*_*.62,Math.sin(P)*_*.62),e.lineTo(Math.cos(P)*(_-12),Math.sin(P)*(_-12)),e.stroke(),e.setLineDash([])}e.save(),e.rotate(-p*We),e.strokeStyle=we.acc,e.lineWidth=1.2,e.beginPath(),e.moveTo(_*.64,0),e.lineTo(_-11,0),e.moveTo(-_*.64,0),e.lineTo(-_+11,0),e.stroke(),lg(e,_*1.22,"#c9d6de"),e.restore();let g=_-24,y=50,S=130;e.strokeStyle="#22313d",e.lineWidth=6,e.beginPath(),e.arc(0,0,g,y*We,S*We),e.stroke(),e.strokeStyle="rgba(224,88,75,.6)",[[y,y+10],[S-10,S]].forEach(([P,w])=>{e.beginPath(),e.arc(0,0,g,P*We,w*We),e.stroke()}),e.lineWidth=1,e.strokeStyle=we.dim;for(let P=-40;P<=40;P+=10){let w=(90-P)*We;e.beginPath(),e.moveTo(Math.cos(w)*(g-6),Math.sin(w)*(g-6)),e.lineTo(Math.cos(w)*(g+5),Math.sin(w)*(g+5)),e.stroke()}dn(e,8,"600"),e.fillStyle=we.dim,e.textAlign="center",e.fillText("BB",Math.cos(118*We)*(g-15),Math.sin(118*We)*(g-15)),e.fillText("STB",Math.cos(62*We)*(g-15),Math.sin(62*We)*(g-15));let x=Math.max(-44,Math.min(44,f)),v=(90-x)*We;e.save(),e.translate(Math.cos(v)*g,Math.sin(v)*g),e.rotate(v-Math.PI/2),e.fillStyle=Math.abs(f)>30?we.bad:we.acc,e.beginPath(),e.moveTo(0,7),e.lineTo(-5,-7),e.lineTo(5,-7),e.closePath(),e.fill(),e.restore(),e.textBaseline="middle",e.textAlign="center",dn(e,8,"600"),e.fillStyle=we.dim,e.fillText("NICK",0,-_*.56),dn(e,17,"600"),e.fillStyle=we.txt,e.fillText(bd(p)+"\xB0",0,-_*.4),dn(e,8,"600"),e.fillStyle=we.dim,e.fillText("ROLL",0,_*.3),dn(e,13,"600"),e.fillStyle=we.txt,e.fillText((f>.05?"STB ":f<-.05?"BB ":"")+Math.abs(f).toFixed(1)+"\xB0",0,_*.44),e.restore()}};return u.draw(),u}function wd(s=260){let{c:t,x:e}=$o(s,s),n=s/2,r=s/2,a=s/2-5,l={el:t,draw(h=0,u){h=(h%360+360)%360,e.clearRect(0,0,s,s),Md(e,n,r,a),e.save(),e.translate(n,r);let f=a-8;e.strokeStyle="#141f28",e.lineWidth=26,e.beginPath(),e.arc(0,0,f-13,0,7),e.stroke(),e.save(),e.rotate(-h*We),e.textAlign="center",e.textBaseline="middle";for(let p=0;p<360;p++){let d=p%10===0,_=p%5===0;if(!(!_&&s<200)){if(e.save(),e.rotate(p*We),e.strokeStyle=d?we.txt:_?"#9fb0bc":"#4d606e",e.lineWidth=d?1.4:1,e.beginPath(),e.moveTo(0,-f),e.lineTo(0,-f+(d?9:_?6:3.5)),e.stroke(),p%30===0){let g={0:"N",90:"E",180:"S",270:"W"}[p];g?(dn(e,13,"700"),e.fillStyle=p===0?we.acc:we.txt,e.fillText(g,0,-f+19)):(dn(e,9.5,"600"),e.fillStyle="#b7c4cd",e.fillText(String(p).padStart(3,"0"),0,-f+18))}e.restore()}}if(u!=null&&(e.save(),e.rotate(u*We),e.fillStyle=we.tgt,e.beginPath(),e.moveTo(-7,-f-2),e.lineTo(7,-f-2),e.lineTo(7,-f+5),e.lineTo(0,-f),e.lineTo(-7,-f+5),e.closePath(),e.fill(),e.restore()),e.restore(),e.strokeStyle="#2c3e4b",e.lineWidth=1,e.beginPath(),e.arc(0,0,f-30,0,7),e.stroke(),u!=null){let p=(u-h+540)%360-180;e.strokeStyle=we.tgt,e.lineWidth=3,e.beginPath(),e.arc(0,0,f-30,-Math.PI/2,(-90+p)*We,p<0),e.stroke()}for(let p=45;p<360;p+=45)e.save(),e.rotate(p*We),e.strokeStyle="#3d5262",e.beginPath(),e.moveTo(0,-f+30),e.lineTo(0,-f+37),e.stroke(),e.restore();e.fillStyle=we.acc,e.beginPath(),e.moveTo(0,-f+3),e.lineTo(-6,-f-7),e.lineTo(6,-f-7),e.closePath(),e.fill(),e.fillRect(-.75,-f+2,1.5,34),cg(e,f*.66,"#c9d6de"),e.fillStyle="#02060a",e.strokeStyle="#3a4c5a",e.lineWidth=1,e.beginPath(),e.rect(-27,f*.38,54,21),e.fill(),e.stroke(),dn(e,15,"600"),e.fillStyle=we.txt,e.textAlign="center",e.textBaseline="middle",e.fillText(String(Math.round(h)%360).padStart(3,"0")+"\xB0",0,f*.38+11),u!=null&&(dn(e,8.5,"600"),e.fillStyle=we.tgt,e.fillText("SOLL "+String(Math.round((u%360+360)%360)%360).padStart(3,"0")+"\xB0",0,f*.38+31)),e.restore()}};return l.draw(),l}function Td(s=90,t=260){let{c:e,x:n}=$o(s,t);return{el:e,draw(r=0,a=3,l,h){n.clearRect(0,0,s,t);let u=40,f=t-30,p=(f-u)/a;n.fillStyle="#03070a",n.fillRect(0,0,s,t),n.strokeStyle="#1d2a35",n.lineWidth=2,n.strokeRect(1,1,s-2,t-2);let d=44,_=18,g=n.createLinearGradient(0,u,0,f);g.addColorStop(0,"#174b66"),g.addColorStop(1,"#03111a"),n.fillStyle=g,n.fillRect(d,u,_,f-u),n.fillStyle="#4c87a6",n.fillRect(d,u-1,_,2),dn(n,9.5,"600"),n.textAlign="right",n.textBaseline="middle",n.lineWidth=1;let y=a<=5?.5:a<=20?2:10;for(let v=0;v*y/2<=a+1e-6;v++){let P=v*y/2,w=u+P*p,T=v%2===0;n.strokeStyle=T?"#9fb0bc":"#4d606e",n.beginPath(),n.moveTo(T?34:38,w),n.lineTo(d,w),n.stroke(),T&&(n.fillStyle=we.dim,n.fillText(P.toFixed(y<1?1:0),31,w))}if(h!==void 0&&h<a){let v=u+h*p;n.fillStyle="rgba(224,88,75,.22)",n.fillRect(d,v,_,f-v),n.strokeStyle=we.bad,n.setLineDash([3,2]),n.beginPath(),n.moveTo(30,v),n.lineTo(s-4,v),n.stroke(),n.setLineDash([])}let S=l!=null&&l>0;if(S){let v=u+uc(l,0,a)*p;n.fillStyle=we.tgt,n.beginPath(),n.moveTo(d+_+1,v),n.lineTo(d+_+11,v-6),n.lineTo(d+_+11,v+6),n.closePath(),n.fill()}let x=u+uc(r,0,a)*p;n.fillStyle=we.acc,n.fillRect(d-2,x-1,_+4,2),n.beginPath(),n.moveTo(d-2,x),n.lineTo(d-10,x-5),n.lineTo(d-10,x+5),n.closePath(),n.fill(),n.fillStyle="#02060a",n.strokeStyle="#3a4c5a",n.beginPath(),n.rect(6.5,8.5,s-13,22),n.fill(),n.stroke(),dn(n,14,"600"),n.fillStyle=we.txt,n.textAlign="center",n.fillText(r.toFixed(2)+" m",s/2,20),dn(n,8.5,"600"),n.fillStyle=S?we.tgt:we.dim,n.fillText(S?"\u0394 "+bd(r-l,2)+" m":"SOLL \u2013",s/2,t-15)}}}var uc=(s,t,e)=>Math.min(e,Math.max(t,s));function Ed(s,t={}){let e=t.w||520,n=t.h||150,{c:r,x:a}=$o(e,n),l=t.span||30,h=s.map(()=>[]),u=0;return{el:r,push(p,d){d.forEach((_,g)=>{if(_!==void 0&&!isNaN(_))for(h[g].push([p,_]);h[g].length&&p-h[g][0][0]>l;)h[g].shift()}),u=p},clear(){h.forEach(p=>{p.length=0})},draw(){a.clearRect(0,0,e,n),a.fillStyle=we.bg,a.fillRect(0,0,e,n);let p=t.min,d=t.max;if(p===void 0||d===void 0){p=1e9,d=-1e9,h.forEach(y=>y.forEach(S=>{p=Math.min(p,S[1]),d=Math.max(d,S[1])})),p>d&&(p=0,d=1);let g=(d-p)*.1||.5;p-=g,d+=g}a.strokeStyle=we.grid,a.lineWidth=1,dn(a,9),a.fillStyle=we.dim,a.textAlign="left";for(let g=0;g<=4;g++){let y=4+(n-8)*g/4;a.beginPath(),a.moveTo(0,y),a.lineTo(e,y),a.stroke(),a.fillText((d-(d-p)*g/4).toFixed(t.dec??1),3,y-2)}s.forEach((g,y)=>{a.strokeStyle=g.color,a.lineWidth=1.5,a.beginPath();let S=!0;h[y].forEach(x=>{let v=e-(u-x[0])/l*e,P=4+(n-8)*(1-(x[1]-p)/(d-p||1));S?(a.moveTo(v,P),S=!1):a.lineTo(v,P)}),a.stroke()});let _=e-6;a.textAlign="right",dn(a,10);for(let g=s.length-1;g>=0;g--){a.fillStyle=s[g].color;let y=s[g].name+(h[g].length?" "+h[g][h[g].length-1][1].toFixed(t.dec??1):"");a.fillText(y,_,12),_-=a.measureText(y).width+12}}}}function fn(s,t,e,n,r={}){let a=b("div",{class:"bar-fill"}),l=b("span",{class:"bar-val"},"\u2013");return{el:b("div",{class:"bar"},b("span",{class:"bar-l"},s),b("div",{class:"bar-t"},a,r.mid?b("i",{class:"bar-mid"}):null),l),set(u,f,p){if(u===void 0||isNaN(u)){l.textContent="\u2013",a.style.width="0";return}let d=(u-t)/(e-t);if(r.mid){let _=(0-t)/(e-t);a.style.left=Math.min(d,_)*100+"%",a.style.width=Math.abs(d-_)*100+"%"}else a.style.left="0",a.style.width=uc(d,0,1)*100+"%";a.style.background=p||"",l.textContent=f??u.toFixed(r.dec??0)+(n?" "+n:"")}}}var on=s=>{let t=b("span",{class:"chip"},s);return{el:t,set(e,n){t.textContent=e===void 0?s:e,t.className="chip "+(n||"")}}},Qt=(s,t)=>{let e=b("b",null,"\u2013"),n=b("div",{class:"stat"},b("span",null,s),b("div",null,e,t?b("small",null,t):null));return{el:n,set(r,a){e.textContent=r,n.className="stat "+(a||"")}}};async function oe(s,t,e){if(!Q.connected)return ee("Nicht verbunden","bad"),null;let n=await Q.link.cmd(s,e);return n.ok?t&&ee(t,"ok"):ee(`${s}: ${n.text}`,"bad"),n}var Jo=new Map;setInterval(()=>{if(!(!Q.connected||Q.link.q.length>2))for(let[s,t]of Jo)Q.link.cmd(t,800),Jo.delete(s)},50);var Ko=(s,t)=>Jo.set(s,t);async function Jr(s,t){let e=await oe(`SET ${s} ${t}`);return e&&e.ok&&(Q.par[s]=+t,Pe.emit("par")),e}async function Kr(){let s=await Q.link.cmd("GET",4e3);return s.ok&&Array.isArray(s.data)&&(Q.parList=s.data,Q.par={},s.data.forEach(t=>{Q.par[t.k]=t.v}),Pe.emit("par")),s}var He=(s,...t)=>b("section",{class:"card"},b("h3",null,s),...t),Oe=(s,t,e="")=>b("button",{class:"btn "+e,onclick:t},s),Cn=s=>b("p",{class:"note"},s);function Ad(s){let t=b("div",{class:"kv"});return{el:b("div",{class:"page"},b("div",{class:"hero"},b("div",null,b("h1",null,"FATHOM Konfigurator"),b("p",null,"Diagnose, Kalibration, Tests und Missionsplanung f\xFCr das U-Boot. Per USB zum Flashen und Testen am Tisch, per WLAN f\xFCr Auftr\xE4ge und Blackbox im Feld.")),b("div",{class:"hero-btns"},Oe("Verbinden (USB)",()=>s.connect(),"primary big"),Oe("Per WLAN verbinden",()=>s.wifi(),"big"),Oe("Demo Boot starten",()=>s.demo(),"big"))),b("div",{class:"grid2"},He("Verbindung",t,"serial"in navigator?Cn("USB braucht Chrome oder Edge am PC (Web Serial)."):b("p",{class:"warn-box"},"USB geht in diesem Browser nicht (kein Web Serial). F\xFCr USB Chrome oder Edge am PC verwenden. WLAN und Demo laufen trotzdem."),b("p",{class:"wifi-box"},"WLAN geht mit jedem Browser, auch am Handy: mit dem Boot WLAN FATHOM-XXXX verbinden und http://192.168.4.1 \xF6ffnen. Funk ist nur im DISARMED aktiv. ARM und Missionsstart gehen \xFCber Crossfire, USB oder den Magneten an Reed 2."),b("div",{class:"row"},Oe("Boot neu starten",()=>oe("REBOOT","Neustart")),Oe("Bootloader (BOOTSEL)",()=>{confirm("Boot springt in den USB Bootloader. Danach erscheint ein Laufwerk RPI-RP2 zum Flashen. Fortfahren?")&&oe("BOOTSEL")}))),He("Erste Inbetriebnahme",b("ol",{class:"steps"},b("li",null,"Boot trocken auf den Tisch, nur USB (Akku abgesteckt, Propeller ab)."),b("li",null,"Verbinden. Unter Sensoren pr\xFCfen: Nick + bei Nase hoch, Roll + bei rechte Seite runter, Tiefe nahe 0."),b("li",null,"Kalibration: Tiefe auf Null, Lage Null, IMU Balken auf 3, Batteriespannung abgleichen."),b("li",null,"Servos: Mitte und Endpunkte einstellen, Richtung pr\xFCfen (Heck hoch = Nase hoch)."),b("li",null,"Tests: Motor erst ohne Propeller, dann mit Gaslimit 10 %. Pumpe f\xFCllt (+) und leert (\u2212)."),b("li",null,"Dichtheitstest, Leckage Sensor Wert pr\xFCfen, dann erst ins Wasser. Parameter sichern (Speichern)."))))),update(){},show(){let n=Q.info;t.innerHTML="",[["Status",Q.connected?Q.demo?"Demo (simuliert)":"verbunden":"getrennt"],["Firmware",n?`${n.fw} ${n.ver}`:"\u2013"],["Hardware",n?n.hw:"\u2013"],["Parameter",n?n.params:"\u2013"],["Max Missionsschritte",n?n.maxsteps:"\u2013"]].forEach(([r,a])=>t.append(b("span",null,r),b("b",null,String(a))))}}}function Pd(){let s=Sd(290),t=wd(290),e=Td(96,290),n={pitch:Qt("Nick","\xB0"),roll:Qt("Roll","\xB0"),yaw:Qt("Kurs","\xB0"),depth:Qt("Tiefe","m"),temp:Qt("Wasser","\xB0C"),vb:Qt("Akku","V"),fill:Qt("Ballast","%"),thr:Qt("Vortrieb","%"),spd:Qt("Fahrt ca.","m/s")},r={arm:on("DISARMED"),mode:on("MANUAL"),rc:on("RC"),gps:on("GPS"),imu:on("IMU"),dep:on("Tiefe"),leak:on("Leck"),tst:on("Test"),mis:on("Mission")},a={rud:fn("Seitenruder",-45,45,"\xB0",{mid:!0}),stn:fn("Heck Tiefenruder",-45,45,"\xB0",{mid:!0}),bow:fn("Bug Tiefenruder",-45,45,"\xB0",{mid:!0}),thr:fn("Motor",-100,100,"%",{mid:!0}),pmp:fn("Pumpe",-100,100,"%",{mid:!0}),fill:fn("Ballast F\xFCllung",0,100,"%"),vb:fn("Akku 2S",6,8.4,"V",{dec:2}),lk:fn("Leckage",0,1,"",{dec:2})},l=b("div",{class:"alert",style:{display:"none"}}),h=b("div",{class:"log"}),u=b("div",{class:"kv"}),f=b("div",{class:"page dash"},l,b("div",{class:"chips"},Object.values(r).map(d=>d.el)),b("div",{class:"instr"},b("div",{class:"ins"},b("div",{class:"cap"},"Lage"),s.el),b("div",{class:"ins"},b("div",{class:"cap"},"Kurs"),t.el),b("div",{class:"ins"},b("div",{class:"cap"},"Tiefe"),e.el)),b("div",{class:"stats"},Object.values(n).map(d=>d.el)),b("div",{class:"grid2"},He("Ausg\xE4nge",Object.values(a).map(d=>d.el)),He("Mission und Ziele",u,b("h4",null,"Ereignisse"),h))),p=()=>{h.innerHTML="",Q.events.slice(-40).reverse().forEach(d=>h.append(b("div",{class:"ev "+d.kind},b("time",null,d.t.toTimeString().slice(0,8)),d.m)))};return Pe.on("ev",p),{el:f,show:p,update(d){s.draw(d.att[0],d.att[1],d.mis.run||d.m!=="MANUAL"?d.tg.p:void 0),t.draw(d.att[2],d.m==="MANUAL"?void 0:d.tg.h),e.draw(d.d,Math.max(Q.get("lim.depth",3)*1.15,1),d.m==="DEPTH"||d.m==="MISSION"?d.tg.d:void 0,Q.get("lim.depth",3)),n.pitch.set(bt(d.att[1])),n.roll.set(bt(d.att[0])),n.yaw.set(bt(d.att[2],0).padStart(3,"0")),n.depth.set(bt(d.d,2)),n.temp.set(bt(d.tmp)),n.fill.set(bt(d.fill,0)),n.thr.set(bt(d.out.thr*100,0)),n.vb.set(bt(d.vb,2),d.vb<Q.get("bat.crit",6.4)?"bad":d.vb<Q.get("bat.warn",7)?"warn":""),n.spd.set(bt(Math.abs(d.out.thr*100)*Q.get("spd.ms_per_pct",.014),2)),r.arm.set(d.arm?"ARMED":"DISARMED",d.arm?"bad":""),r.mode.set(d.m,d.m==="FAILSAFE"?"bad":d.m==="MISSION"||d.m==="RTH"?"acc":""),r.rc.set(d.rcok?`RC ${d.rssi} dBm`:"RC fehlt",d.rcok?"ok":"warn"),r.imu.set(d.ok[0]?"IMU ok":"IMU Fehler",d.ok[0]?"ok":"bad"),r.dep.set(d.ok[1]?"Tiefensensor ok":"Tiefensensor Fehler",d.ok[1]?"ok":"bad"),d.gps&&r.gps.set(d.gps.ok?`GPS ${d.gps.sat} Sat`:"GPS kein Fix",d.gps.ok?"ok":""),r.leak.set(d.lk>Q.get("leak.threshold",.35)?"LECKAGE":"trocken",d.lk>Q.get("leak.threshold",.35)?"bad":"ok"),r.tst.set(d.tst?"TESTMODUS":"Test aus",d.tst?"warn":""),r.mis.set(d.mis.run?`Mission ${d.mis.i+1}/${d.mis.n} ${d.mis.ty}`:"Mission aus",d.mis.run?"acc":""),a.rud.set(d.out.r,bt(d.out.r)+" \xB0 / "+d.out.us[0]+" \xB5s"),a.stn.set(d.out.s,bt(d.out.s)+" \xB0 / "+d.out.us[1]+" \xB5s"),a.bow.set(d.out.b,bt(d.out.b)+" \xB0 / "+d.out.us[2]+" \xB5s"),a.thr.set(d.out.thr*100,bt(d.out.thr*100,0)+" % / "+d.out.mu+" \xB5s",d.out.thr<0?Nt.warn:""),a.pmp.set(d.out.pmp*100,bt(d.out.pmp*100,0)+" %"),a.fill.set(d.fill,bt(d.fill,0)+" %"),a.vb.set(d.vb,bt(d.vb,2)+" V",d.vb<Q.get("bat.warn",7)?Nt.warn:Nt.ok),a.lk.set(d.lk,bt(d.lk,2),d.lk>Q.get("leak.threshold",.35)?Nt.bad:Nt.ok);let _=d.fs?"FAILSAFE: "+d.fs:d.w;l.style.display=_?"block":"none",l.textContent=_,u.innerHTML="",[["Ziel Tiefe",bt(d.tg.d,2)+" m"],["Ziel Nick",bt(d.tg.p)+" \xB0"],["Ziel Kurs",bt(d.tg.h,0)+" \xB0"],["Ziel Vortrieb",bt(d.tg.t,0)+" %"],["Schritt",d.mis.run?`${d.mis.i+1} von ${d.mis.n} (${d.mis.ty})`:"\u2013"],["Schrittzeit",d.mis.run?bt(d.mis.t,0)+" s":"\u2013"],["Druck",bt(d.prs,1)+" mbar"],["Zyklus",d.lp+" \xB5s"]].forEach(([g,y])=>u.append(b("span",null,g),b("b",null,y)))}}}function Rd(){let s=(u,f)=>Ed(u,f),t={att:s([{name:"Roll",color:"#e0a93b"},{name:"Nick",color:"#3e86e0"}],{min:-45,max:45,dec:1}),yaw:s([{name:"Kurs",color:"#4fb477"},{name:"Ziel",color:"#8a6fd0"}],{min:0,max:360,dec:0}),gyr:s([{name:"Gx",color:"#e0584b"},{name:"Gy",color:"#4fb477"},{name:"Gz",color:"#3e86e0"}],{min:-60,max:60,dec:1}),dep:s([{name:"Tiefe m",color:"#3e86e0"},{name:"Ziel",color:"#e0a93b"}],{}),pwr:s([{name:"Akku V",color:"#4fb477"}],{min:6,max:8.6,dec:2}),lk:s([{name:"Leck",color:"#e0584b"},{name:"Ballast %/100",color:"#8a6fd0"}],{min:0,max:1,dec:2})},e=b("div",{class:"kv wide"}),n=b("div",{class:"rcs"}),r=Array.from({length:8},(u,f)=>fn("CH"+(f+1),1e3,2e3,"\xB5s"));r.forEach(u=>n.append(u.el));let a=["rc.ch.bow","rc.ch.ele","rc.ch.thr","rc.ch.rud","rc.ch.arm","rc.ch.mode","rc.ch.mission"],l=["Bugruder","Tiefenruder","Vortrieb","Seitenruder","Arm","Modus","Mission"];return{el:b("div",{class:"page"},b("div",{class:"grid2"},He("Lage",t.att.el),He("Kurs",t.yaw.el),He("Gyro (\xB0/s)",t.gyr.el),He("Tiefe",t.dep.el),He("Akku",t.pwr.el),He("Leckage und Ballast",t.lk.el)),b("div",{class:"grid2"},He("Rohwerte",e),He("RC Kan\xE4le (Crossfire)",n))),show(){Object.values(t).forEach(u=>u.clear())},update(u){let f=u.t/1e3;t.att.push(f,[u.att[0],u.att[1]]),t.yaw.push(f,[u.att[2],u.m==="MANUAL"?void 0:u.tg.h]),t.gyr.push(f,u.gyr),t.dep.push(f,[u.d,u.m==="DEPTH"||u.m==="MISSION"?u.tg.d:void 0]),t.pwr.push(f,[u.vb]),t.lk.push(f,[u.lk,u.fill/100]),Object.values(t).forEach(p=>p.draw()),e.innerHTML="",[["Druck",bt(u.prs,1)+" mbar"],["Temperatur",bt(u.tmp)+" \xB0C"],["Tiefe",bt(u.d,3)+" m"],["Roll / Nick / Kurs",`${bt(u.att[0])} / ${bt(u.att[1])} / ${bt(u.att[2])} \xB0`],["Gyro",u.gyr.map(p=>bt(p)).join(" / ")+" \xB0/s"],["Akku",bt(u.vb,2)+" V"],["Leckage",bt(u.lk,2)],["IMU Kalibrierung",`Sys ${u.cal[0]} Gyr ${u.cal[1]} Acc ${u.cal[2]} Mag ${u.cal[3]}`],["Zykluszeit",u.lp+" \xB5s"],["Modus",u.m]].forEach(([p,d])=>e.append(b("span",null,p),b("b",null,d))),u.rc.forEach((p,d)=>{let _=a.findIndex(g=>Q.get(g,0)===d+1);r[d].set(p,`${p} \xB5s${_>=0?" \xB7 "+l[_]:""}`,u.rcok?"":Nt.dim)})}}}async function hg(s){if(!Q.connected)return!1;let t=await Q.link.cmd(`TEST ENABLE ${s?1:0}`);return t.ok?!0:(ee(s?"Testmodus nur im DISARMED Zustand: "+t.text:t.text,"bad"),!1)}function Cd(){let s=b("b",null,"Testmodus aus"),t=b("div",{class:"testbar"},s,b("span",null,"Servos, Motor und Pumpe lassen sich nur im Testmodus direkt ansteuern. Nur im DISARMED Zustand.")),e=Oe("Testmodus einschalten",async()=>{let n=!(Q.tel&&Q.tel.tst);await hg(n)&&(n||oe("TEST OFF"))},"primary");return t.append(e),{el:t,update(n){s.textContent=n.tst?"TESTMODUS AKTIV":"Testmodus aus",t.className="testbar"+(n.tst?" on":""),e.textContent=n.tst?"Testmodus beenden":"Testmodus einschalten"}}}function Ld(){let s=Cd(),t={d:Qt("Tiefe","m"),p:Qt("Druck","mbar"),t:Qt("Temp","\xB0C"),pi:Qt("Nick","\xB0"),ro:Qt("Roll","\xB0"),yw:Qt("Kurs","\xB0"),vb:Qt("Akku","V"),lk:Qt("Leckage","")},e=["Gesamt","Gyro","Beschleunigung","Magnet"].map((h,u)=>fn(h,0,3,"",{dec:0})),n=b("input",{type:"number",step:"0.01",placeholder:"Multimeter Volt",class:"in"}),r=[["Seitenruder","rud",0],["Heck Tiefenruder","stern",1],["Bug Tiefenruder","bow",2]].map(([h,u,f])=>{let p=b("b",null,"1500 \xB5s"),d=b("input",{type:"range",min:800,max:2200,step:5,value:1500,class:"sl",oninput:()=>{p.textContent=d.value+" \xB5s",Ko("sv"+f,`TEST SERVO ${f} ${d.value}`)}}),_=async(y,S)=>{let x=await Jr(`servo.${u}.${y}`,d.value);x&&x.ok&&ee(`${h} ${S} = ${d.value} \xB5s`,"ok")},g=b("input",{type:"checkbox",onchange:()=>Jr(`servo.${u}.rev`,g.checked?1:0)});return{el:b("div",{class:"sv"},b("div",{class:"svh"},b("b",null,h),p),d,b("div",{class:"row"},Oe("Mitte",()=>_("center","Mitte")),Oe("Min",()=>_("min","Min")),Oe("Max",()=>_("max","Max")),Oe("Zur\xFCck auf Mitte",()=>{d.value=Q.get(`servo.${u}.center`,1500),d.oninput()}),b("label",{class:"chk"},g," umkehren"))),sync(){g.checked=Q.get(`servo.${u}.rev`,0)>.5}}}),a=b("div",{class:"page"},s.el,b("div",{class:"stats"},Object.values(t).map(h=>h.el)),b("div",{class:"grid2"},He("1  Tiefensensor",Cn("Boot an der Luft, trocken. Setzt den aktuellen Druck als Oberfl\xE4che. Vor jedem Tauchgang wiederholen (Wetter \xE4ndert den Luftdruck)."),b("div",{class:"row"},Oe("Tiefe auf Null setzen",()=>oe("CAL DEPTH","Oberfl\xE4chendruck gesetzt"),"primary"))),He("2  Lage Null",Cn("Boot im Gestell exakt waagrecht und ohne Rollen ausrichten (Wasserwaage auf dem Rohr). Dann best\xE4tigen. Nick und Roll werden zu 0 gesetzt."),b("div",{class:"row"},Oe("Lage als Null setzen",()=>oe("CAL LEVEL","Lage Null gesetzt"),"primary")),Cn("Vorzeichenprobe: Nase hoch \u2192 Nick +. Rechte Seite runter \u2192 Roll +. Stimmt es nicht, unter Parameter imu.invert \xE4ndern (1 Roll, 2 Nick, 4 Kurs).")),He("3  IMU Kalibrierung (BNO055)",e.map(h=>h.el),Cn("Gyro: 3 s ruhig liegen lassen. Beschleunigung: Boot in 6 Lagen jeweils 3 s ruhig halten. Magnet nur im NDOF Modus n\xF6tig, in der R\xF6hre mit Motoren ohnehin unzuverl\xE4ssig (Standard: IMU Modus ohne Kompass)."),b("div",{class:"row"},Oe("Profil im BNO055 sichern",()=>oe("CAL IMUSAVE","IMU Profil gespeichert")))),He("4  Batteriespannung",Cn("Akku am Stecker mit Multimeter messen und Wert eintragen. Der Spannungsteiler wird damit abgeglichen."),b("div",{class:"row"},n,Oe("Abgleichen",()=>{+n.value>4?oe(`CAL VBAT ${n.value}`,"Batterie abgeglichen"):ee("Spannung eintragen","warn")},"primary"))),He("5  Servos: Mitte, Endpunkte, Richtung",Cn("Testmodus einschalten, Schieber bewegen. Mitte: Ruder genau neutral, dann Mitte dr\xFCcken. Endpunkte: bis kurz vor den mechanischen Anschlag, dann Min oder Max. Servo brummt am Anschlag und wird hei\xDF."),r.map(h=>h.el),Cn("Richtung: Heck Tiefenruder nach oben = Nase hoch. Seitenruder rechts = Boot dreht nach rechts (Kurs +).")),He("6  Leckage Sensor",Cn("Trockenwert merken (sollte unter 0.1 liegen). Mit einem feuchten Finger an den Sonden muss der Wert \xFCber die Schwelle steigen. Schwelle unter Parameter leak.threshold."),b("div",{class:"row"},Oe("Sensoren Seite \xF6ffnen",()=>Pe.emit("goto","sensors")))))),l=!1;return Pe.on("par",()=>r.forEach(h=>h.sync())),{el:a,show(){r.forEach(h=>h.sync())},hide(){},update(h){s.update(h),t.d.set(bt(h.d,3)),t.p.set(bt(h.prs,1)),t.t.set(bt(h.tmp)),t.pi.set(bt(h.att[1])),t.ro.set(bt(h.att[0])),t.yw.set(bt(h.att[2],0)),t.vb.set(bt(h.vb,2)),t.lk.set(bt(h.lk,2),h.lk>Q.get("leak.threshold",.35)?"bad":""),h.cal.forEach((u,f)=>e[f].set(u,u+" von 3",u>=3?Nt.ok:u>=2?Nt.warn:Nt.bad)),l||(l=!0,r.forEach(u=>u.sync()))}}}function Id(){let s=Cd(),t=null,e=()=>Q.get("lim.deflect",25),n=()=>Q.get("servo.us_per_deg",10),r=(E,A)=>Math.round(Q.get(`servo.${E}.center`,1500)+(Q.get(`servo.${E}.rev`,0)>.5?-1:1)*A*n()),a=[["Seitenruder","rud",0],["Heck Tiefenruder","stern",1],["Bug Tiefenruder","bow",2]].map(([E,A,B])=>{let Y=b("b",null,"0.0 \xB0"),K=b("input",{type:"range",min:-45,max:45,step:.5,value:0,class:"sl center"}),X=()=>{let et=wn(+K.value,-e(),e());Y.textContent=bt(et)+" \xB0 / "+r(A,et)+" \xB5s",Ko("ts"+B,`TEST SERVO ${B} ${r(A,et)}`)};return K.oninput=X,K.addEventListener("dblclick",()=>{K.value=0,X()}),{name:E,key:A,ch:B,sl:K,send:X,el:b("div",{class:"sv"},b("div",{class:"svh"},b("b",null,E),Y),K)}}),l=Oe("Servos durchfahren (10 s)",()=>{if(t){clearInterval(t),t=null,l.textContent="Servos durchfahren (10 s)";return}let E=performance.now();l.textContent="Stopp Durchlauf",t=setInterval(()=>{let A=(performance.now()-E)/1e3;if(A>10){clearInterval(t),t=null,l.textContent="Servos durchfahren (10 s)",a.forEach(B=>{B.sl.value=0,B.send()});return}a.forEach((B,Y)=>{B.sl.value=Math.sin(A*2*Math.PI*.5+Y*1.2)*e(),B.send()})},60)}),h=b("input",{type:"checkbox"}),u=b("input",{type:"checkbox"}),f=b("b",null,"0 %"),p=b("input",{type:"range",min:-100,max:100,step:1,value:0,class:"sl center danger"}),d=b("input",{type:"checkbox"}),_=0,g=()=>{h.checked||(p.value=0,_=0);let E=u.checked?100:Q.get("lim.throttle",35);_=wn(+p.value,-E,E),p.value=_,f.textContent=_+" %"+(_?" \u2192 "+Math.round(Math.abs(_)*Q.get("spd.ms_per_pct",.014)*100)/100+" m/s":""),Ko("tm",`TEST MOTOR ${_}`)};p.oninput=g,["pointerup","touchend"].forEach(E=>p.addEventListener(E,()=>{d.checked||(p.value=0,g())}));let y=()=>{p.value=0,_=0,x.value=0,v=0,f.textContent="0 %",S.textContent="0 %",Jo.clear(),Q.connected&&(Q.link.q.length=0,Q.link.cmd("TEST OFF",1500)),a.forEach(E=>{E.sl.value=0,E.send()})},S=b("b",null,"0 %"),x=b("input",{type:"range",min:-100,max:100,step:1,value:0,class:"sl center"}),v=0,P=()=>{v=+x.value,S.textContent=v+" %"+(v>0?" f\xFCllen":v<0?" leeren":""),Ko("tp",`TEST PUMP ${v}`)};x.oninput=P,["pointerup","touchend"].forEach(E=>x.addEventListener(E,()=>{x.value=0,P()}));let w=null,T=()=>{w=setInterval(()=>{Q.connected&&(_&&Q.link.cmd(`TEST MOTOR ${_}`,800),v&&Q.link.cmd(`TEST PUMP ${v}`,800))},400)},O=fn("Ballast F\xFCllstand (gesch\xE4tzt)",0,100,"%"),C=fn("Motor Ausgang",-100,100,"%",{mid:!0}),I=Oe("STOPP ALLES",y,"stop big");return window.addEventListener("keydown",E=>{E.key==="Escape"&&Q.tab==="tests"&&y()}),{el:b("div",{class:"page"},s.el,b("div",{class:"grid2"},He("Servos",Cn("Schieber in Grad Ruderausschlag, begrenzt auf lim.deflect (\xB125 \xB0). Doppelklick = Mitte."),a.map(E=>E.el),b("div",{class:"row"},l)),He("Motor",b("p",{class:"warn-box"},"Propeller frei drehbar, Finger weg, Boot gesichert. Motor l\xE4uft nur solange der Schieber gehalten wird. Esc oder Stopp setzt alles auf Null."),b("label",{class:"chk"},h," Propeller ist frei, Motor freigeben"),b("label",{class:"chk"},d," Schieber bleibt stehen (Dauerlauf, Watchdog stoppt bei Verbindungsverlust)"),b("label",{class:"chk"},u," Gaslimit aufheben (nur Pr\xFCfstand)"),b("div",{class:"svh"},b("b",null,"Vortrieb (\u2212 r\xFCckw\xE4rts)"),f),p,C.el),He("Ballastpumpe",Cn("Plus f\xFCllt den Tank, minus leert ihn. L\xE4uft nur solange gehalten. DFRobot Pumpe mit eingebautem Treiber, Signal 50 Hz. Richtung falsch: Parameter pump.invert."),b("div",{class:"svh"},b("b",null,"Pumpe"),S),x,O.el),He("Status LEDs und Beacon",Cn("Beacon Pod (eigenes System) testen. Weiss = Strobe zum Wiederfinden, Rot = Warnblitz, Alarm = rot schnell plus Strobe. Aus setzt auch einen gespeicherten Alarm zur\xFCck. Status LEDs: gruen Blitz = bereit, Dauerlicht = scharf, schnell blinkend = Mission, rot n Blitze = Fehler (1 Batterie, 2 Leck, 3 Tiefe, 4 Sensor, 5 RC Verlust), rot Dauer = Not Aus."),b("div",{class:"row"},Oe("Beacon aus",()=>oe("BEACON 0")),Oe("Weiss",()=>oe("BEACON 2")),Oe("Rot",()=>oe("BEACON 3")),Oe("Alarm",()=>oe("BEACON 4",null,3e3),"warnb"))),He("Notaus",I,Cn("Der Testmodus hat einen Watchdog in der Firmware: Kommt 1.5 s kein Heartbeat, stoppen Motor und Pumpe von selbst.")))),show(){T(),a.forEach(E=>E.send())},hide(){clearInterval(w),y()},update(E){s.update(E),C.set(E.out.thr*100,bt(E.out.thr*100,0)+" % / "+E.out.mu+" \xB5s"),O.set(E.fill,bt(E.fill,0)+" %")},stopAll:y}}function Dd(){let s=b("div"),t=b("input",{class:"in",placeholder:"Suchen (z. B. pid, servo, depth)",oninput:()=>n()}),e=new Set,n=()=>{s.innerHTML="";let l=Q.parList.length?Q.parList:Bn.map(f=>({k:f.k,v:f.d,d:f.d,mn:f.mn,mx:f.mx,u:f.u,g:f.g,h:f.h})),h=t.value.trim().toLowerCase(),u={};l.filter(f=>!h||(f.k+" "+f.h+" "+f.g).toLowerCase().includes(h)).forEach(f=>(u[f.g]=u[f.g]||[]).push(f)),Object.entries(u).forEach(([f,p])=>{let d=b("table",{class:"ptable"},b("thead",null,b("tr",null,["Parameter","Wert","Einheit","Standard","Bereich","Beschreibung"].map(g=>b("th",null,g))))),_=b("tbody");p.forEach(g=>{let y=Q.par[g.k]!==void 0?Q.par[g.k]:g.v,S=b("input",{class:"pin"+(y!==g.d?" mod":""),type:"number",step:"any",value:y,min:g.mn,max:g.mx,disabled:!Q.connected,onchange:async()=>{let x=wn(+S.value,g.mn,g.mx);S.value=x;let v=await Jr(g.k,x);v&&v.ok&&(S.classList.toggle("mod",x!==g.d),e.add(g.k),r.classList.add("primary"))}});_.append(b("tr",null,b("td",{class:"mono"},g.k),b("td",null,S),b("td",{class:"dim"},g.u),b("td",{class:"dim",onclick:()=>{S.value=g.d,S.onchange()},title:"Klick setzt auf Standard",style:{cursor:"pointer"}},g.d),b("td",{class:"dim"},`${g.mn} bis ${g.mx}`),b("td",null,g.h)))}),d.append(_),s.append(He(f,d))})},r=Oe("Im Boot speichern",async()=>{let l=await oe("SAVE","Parameter im Flash gespeichert");l&&l.ok&&(e.clear(),r.classList.remove("primary"))}),a=b("div",{class:"page"},b("div",{class:"toolbar"},t,Oe("Neu laden",async()=>{await Kr()}),r,Oe("Standardwerte",async()=>{confirm("Alle Parameter im Boot auf Standard setzen?")&&(await oe("DEFAULTS","Standardwerte gesetzt"),await Kr())}),Oe("Export",()=>jn("fathom_parameter.json",JSON.stringify(Object.fromEntries(Q.parList.map(l=>[l.k,Q.par[l.k]])),null,1))),Oe("Import",async()=>{let l=await Xs(".json");if(l)try{let h=JSON.parse(l),u=0;for(let[f,p]of Object.entries(h))(await Q.link.cmd(`SET ${f} ${p}`)).ok&&u++;ee(`${u} Parameter importiert, danach Speichern`,"ok"),await Kr()}catch{ee("Datei ung\xFCltig","bad")}})),s);return Pe.on("par",()=>{Q.tab==="params"&&n()}),Pe.on("conn",n),{el:a,show:n,update(){}}}function Nd(){let s=b("div",{class:"term"}),t=b("input",{type:"checkbox"}),e=b("input",{class:"in mono",placeholder:"Befehl, z. B. INFO, GET, STREAM 10",onkeydown:async p=>{if(p.key==="Enter"&&e.value.trim()){let d=e.value.trim();n.push(d),r=n.length,e.value="",Q.connected?await Q.link.cmd(d,4e3):ee("Nicht verbunden","bad")}p.key==="ArrowUp"&&r>0&&(e.value=n[--r]),p.key==="ArrowDown"&&r<n.length&&(e.value=n[++r]||"")}}),n=[],r=0,a=[],l=null,h=(p,d)=>{a.push([p,d]),l||(l=setTimeout(u,100))},u=()=>{l=null;let p=s.scrollTop+s.clientHeight>=s.scrollHeight-30;for(a.forEach(([d,_])=>s.append(b("div",{class:d},_.length>400?_.slice(0,400)+" \u2026":_))),a=[];s.childNodes.length>600;)s.firstChild.remove();p&&(s.scrollTop=s.scrollHeight)};return Pe.on("tx",p=>h("tx","> "+p)),Pe.on("rx",p=>{p.startsWith("T {")&&!t.checked||h(p.startsWith("ERR")?"rx err":"rx",p)}),{el:b("div",{class:"page"},b("div",{class:"toolbar"},b("label",{class:"chk"},t," Telemetrie anzeigen"),Oe("Leeren",()=>{s.innerHTML=""})),s,e),show(){s.scrollTop=s.scrollHeight},update(){}}}var Ls={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ug=0,kd=1,dg=2;var $f=1,fg=2,ki=3,is=0,gn=1,Hn=2,es=0,fr=1,Od=2,Ud=3,Bd=4,pg=5,bs=100,mg=101,gg=102,_g=103,vg=104,xg=200,yg=201,bg=202,Mg=203,Zc=204,Xc=205,Sg=206,wg=207,Tg=208,Eg=209,Ag=210,Pg=211,Rg=212,Cg=213,Lg=214,qc=0,Yc=1,$c=2,vr=3,Kc=4,Jc=5,jc=6,Qc=7,Kf=0,Ig=1,Dg=2,ns=0,Ng=1,kg=2,Og=3,Ug=4,Bg=5,Fg=6,zg=7;var Jf=300,xr=301,yr=302,th=303,eh=304,_l=306,nh=1e3,Ss=1001,ih=1002,ri=1003,Hg=1004;var jo=1005;var Vn=1006,dc=1007;var ws=1008;var Vi=1009,jf=1010,Qf=1011,ho=1012,au=1013,Ts=1014,Ui=1015,yo=1016,lu=1017,cu=1018,br=1020,tp=35902,ep=1021,np=1022,si=1023,ip=1024,sp=1025,pr=1026,Mr=1027,rp=1028,hu=1029,op=1030,uu=1031;var du=1033,Ia=33776,Da=33777,Na=33778,ka=33779,sh=35840,rh=35841,oh=35842,ah=35843,lh=36196,ch=37492,hh=37496,uh=37808,dh=37809,fh=37810,ph=37811,mh=37812,gh=37813,_h=37814,vh=37815,xh=37816,yh=37817,bh=37818,Mh=37819,Sh=37820,wh=37821,Oa=36492,Th=36494,Eh=36495,ap=36283,Ah=36284,Ph=36285,Rh=36286;var Ua=2300,Ch=2301,fc=2302,Fd=2400,zd=2401,Hd=2402;var Vg=3200,Gg=3201;var lp=0,Wg=1,ts="",zn="srgb",Er="srgb-linear",vl="linear",De="srgb";var Ys=7680;var Vd=519,Zg=512,Xg=513,qg=514,cp=515,Yg=516,$g=517,Kg=518,Jg=519,Lh=35044;var Gd="300 es",Bi=2e3,Ba=2001,Gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let a=r.indexOf(e);a!==-1&&r.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,t);t.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wd=1234567,mr=Math.PI/180,uo=180/Math.PI;function zi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[s&255]+pn[s>>8&255]+pn[s>>16&255]+pn[s>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function en(s,t,e){return Math.max(t,Math.min(e,s))}function fu(s,t){return(s%t+t)%t}function jg(s,t,e,n,r){return n+(s-t)*(r-n)/(e-t)}function Qg(s,t,e){return s!==t?(e-s)/(t-s):0}function lo(s,t,e){return(1-e)*s+e*t}function t_(s,t,e,n){return lo(s,t,1-Math.exp(-e*n))}function e_(s,t=1){return t-Math.abs(fu(s,t*2)-t)}function n_(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function i_(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function s_(s,t){return s+Math.floor(Math.random()*(t-s+1))}function r_(s,t){return s+Math.random()*(t-s)}function o_(s){return s*(.5-Math.random())}function a_(s){s!==void 0&&(Wd=s);let t=Wd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function l_(s){return s*mr}function c_(s){return s*uo}function h_(s){return(s&s-1)===0&&s!==0}function u_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function d_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function f_(s,t,e,n,r){let a=Math.cos,l=Math.sin,h=a(e/2),u=l(e/2),f=a((t+n)/2),p=l((t+n)/2),d=a((t-n)/2),_=l((t-n)/2),g=a((n-t)/2),y=l((n-t)/2);switch(r){case"XYX":s.set(h*p,u*d,u*_,h*f);break;case"YZY":s.set(u*_,h*p,u*d,h*f);break;case"ZXZ":s.set(u*d,u*_,h*p,h*f);break;case"XZX":s.set(h*p,u*y,u*g,h*f);break;case"YXY":s.set(u*g,h*p,u*y,h*f);break;case"ZYZ":s.set(u*y,u*g,h*p,h*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ii(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Le(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var xl={DEG2RAD:mr,RAD2DEG:uo,generateUUID:zi,clamp:en,euclideanModulo:fu,mapLinear:jg,inverseLerp:Qg,lerp:lo,damp:t_,pingpong:e_,smoothstep:n_,smootherstep:i_,randInt:s_,randFloat:r_,randFloatSpread:o_,seededRandom:a_,degToRad:l_,radToDeg:c_,isPowerOfTwo:h_,ceilPowerOfTwo:u_,floorPowerOfTwo:d_,setQuaternionFromProperEuler:f_,normalize:Le,denormalize:ii},$t=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),a=this.x-t.x,l=this.y-t.y;return this.x=a*n-l*r+t.x,this.y=a*r+l*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},he=class s{constructor(t,e,n,r,a,l,h,u,f){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,a,l,h,u,f)}set(t,e,n,r,a,l,h,u,f){let p=this.elements;return p[0]=t,p[1]=r,p[2]=h,p[3]=e,p[4]=a,p[5]=u,p[6]=n,p[7]=l,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,a=this.elements,l=n[0],h=n[3],u=n[6],f=n[1],p=n[4],d=n[7],_=n[2],g=n[5],y=n[8],S=r[0],x=r[3],v=r[6],P=r[1],w=r[4],T=r[7],O=r[2],C=r[5],I=r[8];return a[0]=l*S+h*P+u*O,a[3]=l*x+h*w+u*C,a[6]=l*v+h*T+u*I,a[1]=f*S+p*P+d*O,a[4]=f*x+p*w+d*C,a[7]=f*v+p*T+d*I,a[2]=_*S+g*P+y*O,a[5]=_*x+g*w+y*C,a[8]=_*v+g*T+y*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],l=t[4],h=t[5],u=t[6],f=t[7],p=t[8];return e*l*p-e*h*f-n*a*p+n*h*u+r*a*f-r*l*u}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],l=t[4],h=t[5],u=t[6],f=t[7],p=t[8],d=p*l-h*f,_=h*u-p*a,g=f*a-l*u,y=e*d+n*_+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/y;return t[0]=d*S,t[1]=(r*f-p*n)*S,t[2]=(h*n-r*l)*S,t[3]=_*S,t[4]=(p*e-r*u)*S,t[5]=(r*a-h*e)*S,t[6]=g*S,t[7]=(n*u-f*e)*S,t[8]=(l*e-n*a)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,a,l,h){let u=Math.cos(a),f=Math.sin(a);return this.set(n*u,n*f,-n*(u*l+f*h)+l+t,-r*f,r*u,-r*(-f*l+u*h)+h+e,0,0,1),this}scale(t,e){return this.premultiply(pc.makeScale(t,e)),this}rotate(t){return this.premultiply(pc.makeRotation(-t)),this}translate(t,e){return this.premultiply(pc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},pc=new he;function hp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Fa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function p_(){let s=Fa("canvas");return s.style.display="block",s}var Zd={};function oo(s){s in Zd||(Zd[s]=!0,console.warn(s))}function m_(s,t,e){return new Promise(function(n,r){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:r();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function g_(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function __(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Te={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===De&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===De&&(s.r=gr(s.r),s.g=gr(s.g),s.b=gr(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ts?vl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function gr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Xd=[.64,.33,.3,.6,.15,.06],qd=[.2126,.7152,.0722],Yd=[.3127,.329],$d=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kd=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Te.define({[Er]:{primaries:Xd,whitePoint:Yd,transfer:vl,toXYZ:$d,fromXYZ:Kd,luminanceCoefficients:qd,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:Xd,whitePoint:Yd,transfer:De,toXYZ:$d,fromXYZ:Kd,luminanceCoefficients:qd,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}});var $s,Ih=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$s===void 0&&($s=Fa("canvas")),$s.width=t.width,$s.height=t.height;let n=$s.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$s}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=Hi(a[l]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hi(e[n]/255)*255):e[n]=Hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},v_=0,za=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=zi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,h=r.length;l<h;l++)r[l].isDataTexture?a.push(mc(r[l].image)):a.push(mc(r[l]))}else a=mc(r);n.url=a}return e||(t.images[this.uuid]=n),n}};function mc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ih.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var x_=0,Nn=class s extends Gi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Ss,r=Ss,a=Vn,l=ws,h=si,u=Vi,f=s.DEFAULT_ANISOTROPY,p=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=zi(),this.name="",this.source=new za(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=f,this.format=h,this.internalFormat=null,this.type=u,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nh:t.x=t.x-Math.floor(t.x);break;case Ss:t.x=t.x<0?0:1;break;case ih:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nh:t.y=t.y-Math.floor(t.y);break;case Ss:t.y=t.y<0?0:1;break;case ih:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Jf;Nn.DEFAULT_ANISOTROPY=1;var Ne=class s{constructor(t=0,e=0,n=0,r=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,a=this.w,l=t.elements;return this.x=l[0]*e+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*e+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*e+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*e+l[7]*n+l[11]*r+l[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,a,u=t.elements,f=u[0],p=u[4],d=u[8],_=u[1],g=u[5],y=u[9],S=u[2],x=u[6],v=u[10];if(Math.abs(p-_)<.01&&Math.abs(d-S)<.01&&Math.abs(y-x)<.01){if(Math.abs(p+_)<.1&&Math.abs(d+S)<.1&&Math.abs(y+x)<.1&&Math.abs(f+g+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(f+1)/2,T=(g+1)/2,O=(v+1)/2,C=(p+_)/4,I=(d+S)/4,k=(y+x)/4;return w>T&&w>O?w<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(w),r=C/n,a=I/n):T>O?T<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(T),n=C/r,a=k/r):O<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(O),n=I/a,r=k/a),this.set(n,r,a,e),this}let P=Math.sqrt((x-y)*(x-y)+(d-S)*(d-S)+(_-p)*(_-p));return Math.abs(P)<.001&&(P=1),this.x=(x-y)/P,this.y=(d-S)/P,this.z=(_-p)/P,this.w=Math.acos((f+g+v-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dh=class extends Gi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);let r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let a=new Nn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];let l=n.count;for(let h=0;h<l;h++)this.textures[h]=a.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new za(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wi=class extends Dh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ha=class extends Nn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ri,this.minFilter=ri,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nh=class extends Nn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ri,this.minFilter=ri,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oi=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,a,l,h){let u=n[r+0],f=n[r+1],p=n[r+2],d=n[r+3],_=a[l+0],g=a[l+1],y=a[l+2],S=a[l+3];if(h===0){t[e+0]=u,t[e+1]=f,t[e+2]=p,t[e+3]=d;return}if(h===1){t[e+0]=_,t[e+1]=g,t[e+2]=y,t[e+3]=S;return}if(d!==S||u!==_||f!==g||p!==y){let x=1-h,v=u*_+f*g+p*y+d*S,P=v>=0?1:-1,w=1-v*v;if(w>Number.EPSILON){let O=Math.sqrt(w),C=Math.atan2(O,v*P);x=Math.sin(x*C)/O,h=Math.sin(h*C)/O}let T=h*P;if(u=u*x+_*T,f=f*x+g*T,p=p*x+y*T,d=d*x+S*T,x===1-h){let O=1/Math.sqrt(u*u+f*f+p*p+d*d);u*=O,f*=O,p*=O,d*=O}}t[e]=u,t[e+1]=f,t[e+2]=p,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,a,l){let h=n[r],u=n[r+1],f=n[r+2],p=n[r+3],d=a[l],_=a[l+1],g=a[l+2],y=a[l+3];return t[e]=h*y+p*d+u*g-f*_,t[e+1]=u*y+p*_+f*d-h*g,t[e+2]=f*y+p*g+h*_-u*d,t[e+3]=p*y-h*d-u*_-f*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,a=t._z,l=t._order,h=Math.cos,u=Math.sin,f=h(n/2),p=h(r/2),d=h(a/2),_=u(n/2),g=u(r/2),y=u(a/2);switch(l){case"XYZ":this._x=_*p*d+f*g*y,this._y=f*g*d-_*p*y,this._z=f*p*y+_*g*d,this._w=f*p*d-_*g*y;break;case"YXZ":this._x=_*p*d+f*g*y,this._y=f*g*d-_*p*y,this._z=f*p*y-_*g*d,this._w=f*p*d+_*g*y;break;case"ZXY":this._x=_*p*d-f*g*y,this._y=f*g*d+_*p*y,this._z=f*p*y+_*g*d,this._w=f*p*d-_*g*y;break;case"ZYX":this._x=_*p*d-f*g*y,this._y=f*g*d+_*p*y,this._z=f*p*y-_*g*d,this._w=f*p*d+_*g*y;break;case"YZX":this._x=_*p*d+f*g*y,this._y=f*g*d+_*p*y,this._z=f*p*y-_*g*d,this._w=f*p*d-_*g*y;break;case"XZY":this._x=_*p*d-f*g*y,this._y=f*g*d-_*p*y,this._z=f*p*y+_*g*d,this._w=f*p*d+_*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],a=e[8],l=e[1],h=e[5],u=e[9],f=e[2],p=e[6],d=e[10],_=n+h+d;if(_>0){let g=.5/Math.sqrt(_+1);this._w=.25/g,this._x=(p-u)*g,this._y=(a-f)*g,this._z=(l-r)*g}else if(n>h&&n>d){let g=2*Math.sqrt(1+n-h-d);this._w=(p-u)/g,this._x=.25*g,this._y=(r+l)/g,this._z=(a+f)/g}else if(h>d){let g=2*Math.sqrt(1+h-n-d);this._w=(a-f)/g,this._x=(r+l)/g,this._y=.25*g,this._z=(u+p)/g}else{let g=2*Math.sqrt(1+d-n-h);this._w=(l-r)/g,this._x=(a+f)/g,this._y=(u+p)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,a=t._z,l=t._w,h=e._x,u=e._y,f=e._z,p=e._w;return this._x=n*p+l*h+r*f-a*u,this._y=r*p+l*u+a*h-n*f,this._z=a*p+l*f+n*u-r*h,this._w=l*p-n*h-r*u-a*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,a=this._z,l=this._w,h=l*t._w+n*t._x+r*t._y+a*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=l,this._x=n,this._y=r,this._z=a,this;let u=1-h*h;if(u<=Number.EPSILON){let g=1-e;return this._w=g*l+e*this._w,this._x=g*n+e*this._x,this._y=g*r+e*this._y,this._z=g*a+e*this._z,this.normalize(),this}let f=Math.sqrt(u),p=Math.atan2(f,h),d=Math.sin((1-e)*p)/f,_=Math.sin(e*p)/f;return this._w=l*d+this._w*_,this._x=n*d+this._x*_,this._y=r*d+this._y*_,this._z=a*d+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*r,this.y=a[1]*e+a[4]*n+a[7]*r,this.z=a[2]*e+a[5]*n+a[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,a=t.elements,l=1/(a[3]*e+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*e+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*e+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,a=t.x,l=t.y,h=t.z,u=t.w,f=2*(l*r-h*n),p=2*(h*e-a*r),d=2*(a*n-l*e);return this.x=e+u*f+l*d-h*p,this.y=n+u*p+h*f-a*d,this.z=r+u*d+a*p-l*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r,this.y=a[1]*e+a[5]*n+a[9]*r,this.z=a[2]*e+a[6]*n+a[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,a=t.z,l=e.x,h=e.y,u=e.z;return this.x=r*u-a*h,this.y=a*l-n*u,this.z=n*h-r*l,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return gc.copy(this).projectOnVector(t),this.sub(gc)}reflect(t){return this.sub(gc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gc=new H,Jd=new oi,Gn=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let l=0,h=a.count;l<h;l++)t.isMesh===!0?t.getVertexPosition(l,Qn):Qn.fromBufferAttribute(a,l),Qn.applyMatrix4(t.matrixWorld),this.expandByPoint(Qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qo.copy(n.boundingBox)),Qo.applyMatrix4(t.matrixWorld),this.union(Qo)}let r=t.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jr),ta.subVectors(this.max,jr),Ks.subVectors(t.a,jr),Js.subVectors(t.b,jr),js.subVectors(t.c,jr),Yi.subVectors(Js,Ks),$i.subVectors(js,Js),ps.subVectors(Ks,js);let e=[0,-Yi.z,Yi.y,0,-$i.z,$i.y,0,-ps.z,ps.y,Yi.z,0,-Yi.x,$i.z,0,-$i.x,ps.z,0,-ps.x,-Yi.y,Yi.x,0,-$i.y,$i.x,0,-ps.y,ps.x,0];return!_c(e,Ks,Js,js,ta)||(e=[1,0,0,0,1,0,0,0,1],!_c(e,Ks,Js,js,ta))?!1:(ea.crossVectors(Yi,$i),e=[ea.x,ea.y,ea.z],_c(e,Ks,Js,js,ta))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ci=[new H,new H,new H,new H,new H,new H,new H,new H],Qn=new H,Qo=new Gn,Ks=new H,Js=new H,js=new H,Yi=new H,$i=new H,ps=new H,jr=new H,ta=new H,ea=new H,ms=new H;function _c(s,t,e,n,r){for(let a=0,l=s.length-3;a<=l;a+=3){ms.fromArray(s,a);let h=r.x*Math.abs(ms.x)+r.y*Math.abs(ms.y)+r.z*Math.abs(ms.z),u=t.dot(ms),f=e.dot(ms),p=n.dot(ms);if(Math.max(-Math.max(u,f,p),Math.min(u,f,p))>h)return!1}return!0}var y_=new Gn,Qr=new H,vc=new H,ai=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):y_.setFromPoints(t).getCenter(n);let r=0;for(let a=0,l=t.length;a<l;a++)r=Math.max(r,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qr.subVectors(t,this.center);let e=Qr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Qr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qr.copy(t.center).add(vc)),this.expandByPoint(Qr.copy(t.center).sub(vc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Li=new H,xc=new H,na=new H,Ki=new H,yc=new H,ia=new H,bc=new H,Es=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){xc.copy(t).add(e).multiplyScalar(.5),na.copy(e).sub(t).normalize(),Ki.copy(this.origin).sub(xc);let a=t.distanceTo(e)*.5,l=-this.direction.dot(na),h=Ki.dot(this.direction),u=-Ki.dot(na),f=Ki.lengthSq(),p=Math.abs(1-l*l),d,_,g,y;if(p>0)if(d=l*u-h,_=l*h-u,y=a*p,d>=0)if(_>=-y)if(_<=y){let S=1/p;d*=S,_*=S,g=d*(d+l*_+2*h)+_*(l*d+_+2*u)+f}else _=a,d=Math.max(0,-(l*_+h)),g=-d*d+_*(_+2*u)+f;else _=-a,d=Math.max(0,-(l*_+h)),g=-d*d+_*(_+2*u)+f;else _<=-y?(d=Math.max(0,-(-l*a+h)),_=d>0?-a:Math.min(Math.max(-a,-u),a),g=-d*d+_*(_+2*u)+f):_<=y?(d=0,_=Math.min(Math.max(-a,-u),a),g=_*(_+2*u)+f):(d=Math.max(0,-(l*a+h)),_=d>0?a:Math.min(Math.max(-a,-u),a),g=-d*d+_*(_+2*u)+f);else _=l>0?-a:a,d=Math.max(0,-(l*_+h)),g=-d*d+_*(_+2*u)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(xc).addScaledVector(na,_),g}intersectSphere(t,e){Li.subVectors(t.center,this.origin);let n=Li.dot(this.direction),r=Li.dot(Li)-n*n,a=t.radius*t.radius;if(r>a)return null;let l=Math.sqrt(a-r),h=n-l,u=n+l;return u<0?null:h<0?this.at(u,e):this.at(h,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,a,l,h,u,f=1/this.direction.x,p=1/this.direction.y,d=1/this.direction.z,_=this.origin;return f>=0?(n=(t.min.x-_.x)*f,r=(t.max.x-_.x)*f):(n=(t.max.x-_.x)*f,r=(t.min.x-_.x)*f),p>=0?(a=(t.min.y-_.y)*p,l=(t.max.y-_.y)*p):(a=(t.max.y-_.y)*p,l=(t.min.y-_.y)*p),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),d>=0?(h=(t.min.z-_.z)*d,u=(t.max.z-_.z)*d):(h=(t.max.z-_.z)*d,u=(t.min.z-_.z)*d),n>u||h>r)||((h>n||n!==n)&&(n=h),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,n,r,a){yc.subVectors(e,t),ia.subVectors(n,t),bc.crossVectors(yc,ia);let l=this.direction.dot(bc),h;if(l>0){if(r)return null;h=1}else if(l<0)h=-1,l=-l;else return null;Ki.subVectors(this.origin,t);let u=h*this.direction.dot(ia.crossVectors(Ki,ia));if(u<0)return null;let f=h*this.direction.dot(yc.cross(Ki));if(f<0||u+f>l)return null;let p=-h*Ki.dot(bc);return p<0?null:this.at(p/l,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fe=class s{constructor(t,e,n,r,a,l,h,u,f,p,d,_,g,y,S,x){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,a,l,h,u,f,p,d,_,g,y,S,x)}set(t,e,n,r,a,l,h,u,f,p,d,_,g,y,S,x){let v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=r,v[1]=a,v[5]=l,v[9]=h,v[13]=u,v[2]=f,v[6]=p,v[10]=d,v[14]=_,v[3]=g,v[7]=y,v[11]=S,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/Qs.setFromMatrixColumn(t,0).length(),a=1/Qs.setFromMatrixColumn(t,1).length(),l=1/Qs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*l,e[9]=n[9]*l,e[10]=n[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,a=t.z,l=Math.cos(n),h=Math.sin(n),u=Math.cos(r),f=Math.sin(r),p=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let _=l*p,g=l*d,y=h*p,S=h*d;e[0]=u*p,e[4]=-u*d,e[8]=f,e[1]=g+y*f,e[5]=_-S*f,e[9]=-h*u,e[2]=S-_*f,e[6]=y+g*f,e[10]=l*u}else if(t.order==="YXZ"){let _=u*p,g=u*d,y=f*p,S=f*d;e[0]=_+S*h,e[4]=y*h-g,e[8]=l*f,e[1]=l*d,e[5]=l*p,e[9]=-h,e[2]=g*h-y,e[6]=S+_*h,e[10]=l*u}else if(t.order==="ZXY"){let _=u*p,g=u*d,y=f*p,S=f*d;e[0]=_-S*h,e[4]=-l*d,e[8]=y+g*h,e[1]=g+y*h,e[5]=l*p,e[9]=S-_*h,e[2]=-l*f,e[6]=h,e[10]=l*u}else if(t.order==="ZYX"){let _=l*p,g=l*d,y=h*p,S=h*d;e[0]=u*p,e[4]=y*f-g,e[8]=_*f+S,e[1]=u*d,e[5]=S*f+_,e[9]=g*f-y,e[2]=-f,e[6]=h*u,e[10]=l*u}else if(t.order==="YZX"){let _=l*u,g=l*f,y=h*u,S=h*f;e[0]=u*p,e[4]=S-_*d,e[8]=y*d+g,e[1]=d,e[5]=l*p,e[9]=-h*p,e[2]=-f*p,e[6]=g*d+y,e[10]=_-S*d}else if(t.order==="XZY"){let _=l*u,g=l*f,y=h*u,S=h*f;e[0]=u*p,e[4]=-d,e[8]=f*p,e[1]=_*d+S,e[5]=l*p,e[9]=g*d-y,e[2]=y*d-g,e[6]=h*p,e[10]=S*d+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(b_,t,M_)}lookAt(t,e,n){let r=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Ji.crossVectors(n,Ln),Ji.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Ji.crossVectors(n,Ln)),Ji.normalize(),sa.crossVectors(Ln,Ji),r[0]=Ji.x,r[4]=sa.x,r[8]=Ln.x,r[1]=Ji.y,r[5]=sa.y,r[9]=Ln.y,r[2]=Ji.z,r[6]=sa.z,r[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,a=this.elements,l=n[0],h=n[4],u=n[8],f=n[12],p=n[1],d=n[5],_=n[9],g=n[13],y=n[2],S=n[6],x=n[10],v=n[14],P=n[3],w=n[7],T=n[11],O=n[15],C=r[0],I=r[4],k=r[8],E=r[12],A=r[1],B=r[5],Y=r[9],K=r[13],X=r[2],et=r[6],V=r[10],ft=r[14],G=r[3],ht=r[7],xt=r[11],lt=r[15];return a[0]=l*C+h*A+u*X+f*G,a[4]=l*I+h*B+u*et+f*ht,a[8]=l*k+h*Y+u*V+f*xt,a[12]=l*E+h*K+u*ft+f*lt,a[1]=p*C+d*A+_*X+g*G,a[5]=p*I+d*B+_*et+g*ht,a[9]=p*k+d*Y+_*V+g*xt,a[13]=p*E+d*K+_*ft+g*lt,a[2]=y*C+S*A+x*X+v*G,a[6]=y*I+S*B+x*et+v*ht,a[10]=y*k+S*Y+x*V+v*xt,a[14]=y*E+S*K+x*ft+v*lt,a[3]=P*C+w*A+T*X+O*G,a[7]=P*I+w*B+T*et+O*ht,a[11]=P*k+w*Y+T*V+O*xt,a[15]=P*E+w*K+T*ft+O*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],a=t[12],l=t[1],h=t[5],u=t[9],f=t[13],p=t[2],d=t[6],_=t[10],g=t[14],y=t[3],S=t[7],x=t[11],v=t[15];return y*(+a*u*d-r*f*d-a*h*_+n*f*_+r*h*g-n*u*g)+S*(+e*u*g-e*f*_+a*l*_-r*l*g+r*f*p-a*u*p)+x*(+e*f*d-e*h*g-a*l*d+n*l*g+a*h*p-n*f*p)+v*(-r*h*p-e*u*d+e*h*_+r*l*d-n*l*_+n*u*p)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],l=t[4],h=t[5],u=t[6],f=t[7],p=t[8],d=t[9],_=t[10],g=t[11],y=t[12],S=t[13],x=t[14],v=t[15],P=d*x*f-S*_*f+S*u*g-h*x*g-d*u*v+h*_*v,w=y*_*f-p*x*f-y*u*g+l*x*g+p*u*v-l*_*v,T=p*S*f-y*d*f+y*h*g-l*S*g-p*h*v+l*d*v,O=y*d*u-p*S*u-y*h*_+l*S*_+p*h*x-l*d*x,C=e*P+n*w+r*T+a*O;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/C;return t[0]=P*I,t[1]=(S*_*a-d*x*a-S*r*g+n*x*g+d*r*v-n*_*v)*I,t[2]=(h*x*a-S*u*a+S*r*f-n*x*f-h*r*v+n*u*v)*I,t[3]=(d*u*a-h*_*a-d*r*f+n*_*f+h*r*g-n*u*g)*I,t[4]=w*I,t[5]=(p*x*a-y*_*a+y*r*g-e*x*g-p*r*v+e*_*v)*I,t[6]=(y*u*a-l*x*a-y*r*f+e*x*f+l*r*v-e*u*v)*I,t[7]=(l*_*a-p*u*a+p*r*f-e*_*f-l*r*g+e*u*g)*I,t[8]=T*I,t[9]=(y*d*a-p*S*a-y*n*g+e*S*g+p*n*v-e*d*v)*I,t[10]=(l*S*a-y*h*a+y*n*f-e*S*f-l*n*v+e*h*v)*I,t[11]=(p*h*a-l*d*a-p*n*f+e*d*f+l*n*g-e*h*g)*I,t[12]=O*I,t[13]=(p*S*r-y*d*r+y*n*_-e*S*_-p*n*x+e*d*x)*I,t[14]=(y*h*r-l*S*r-y*n*u+e*S*u+l*n*x-e*h*x)*I,t[15]=(l*d*r-p*h*r+p*n*u-e*d*u-l*n*_+e*h*_)*I,this}scale(t){let e=this.elements,n=t.x,r=t.y,a=t.z;return e[0]*=n,e[4]*=r,e[8]*=a,e[1]*=n,e[5]*=r,e[9]*=a,e[2]*=n,e[6]*=r,e[10]*=a,e[3]*=n,e[7]*=r,e[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),a=1-n,l=t.x,h=t.y,u=t.z,f=a*l,p=a*h;return this.set(f*l+n,f*h-r*u,f*u+r*h,0,f*h+r*u,p*h+n,p*u-r*l,0,f*u-r*h,p*u+r*l,a*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,a,l){return this.set(1,n,a,0,t,1,l,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,a=e._x,l=e._y,h=e._z,u=e._w,f=a+a,p=l+l,d=h+h,_=a*f,g=a*p,y=a*d,S=l*p,x=l*d,v=h*d,P=u*f,w=u*p,T=u*d,O=n.x,C=n.y,I=n.z;return r[0]=(1-(S+v))*O,r[1]=(g+T)*O,r[2]=(y-w)*O,r[3]=0,r[4]=(g-T)*C,r[5]=(1-(_+v))*C,r[6]=(x+P)*C,r[7]=0,r[8]=(y+w)*I,r[9]=(x-P)*I,r[10]=(1-(_+S))*I,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,a=Qs.set(r[0],r[1],r[2]).length(),l=Qs.set(r[4],r[5],r[6]).length(),h=Qs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),t.x=r[12],t.y=r[13],t.z=r[14],ti.copy(this);let f=1/a,p=1/l,d=1/h;return ti.elements[0]*=f,ti.elements[1]*=f,ti.elements[2]*=f,ti.elements[4]*=p,ti.elements[5]*=p,ti.elements[6]*=p,ti.elements[8]*=d,ti.elements[9]*=d,ti.elements[10]*=d,e.setFromRotationMatrix(ti),n.x=a,n.y=l,n.z=h,this}makePerspective(t,e,n,r,a,l,h=Bi){let u=this.elements,f=2*a/(e-t),p=2*a/(n-r),d=(e+t)/(e-t),_=(n+r)/(n-r),g,y;if(h===Bi)g=-(l+a)/(l-a),y=-2*l*a/(l-a);else if(h===Ba)g=-l/(l-a),y=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return u[0]=f,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=p,u[9]=_,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,r,a,l,h=Bi){let u=this.elements,f=1/(e-t),p=1/(n-r),d=1/(l-a),_=(e+t)*f,g=(n+r)*p,y,S;if(h===Bi)y=(l+a)*d,S=-2*d;else if(h===Ba)y=a*d,S=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return u[0]=2*f,u[4]=0,u[8]=0,u[12]=-_,u[1]=0,u[5]=2*p,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=S,u[14]=-y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Qs=new H,ti=new Fe,b_=new H(0,0,0),M_=new H(1,1,1),Ji=new H,sa=new H,Ln=new H,jd=new Fe,Qd=new oi,xi=class s{constructor(t=0,e=0,n=0,r=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,a=r[0],l=r[4],h=r[8],u=r[1],f=r[5],p=r[9],d=r[2],_=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(en(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,g),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-en(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(h,g),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(en(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(u,a));break;case"ZYX":this._y=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,g),this._z=Math.atan2(u,a)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(en(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(h,g));break;case"XZY":this._z=Math.asin(-en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(h,a)):(this._x=Math.atan2(-p,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qd.setFromEuler(this),this.setFromQuaternion(Qd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xi.DEFAULT_ORDER="XYZ";var Va=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},S_=0,tf=new H,tr=new oi,Ii=new Fe,ra=new H,to=new H,w_=new H,T_=new oi,ef=new H(1,0,0),nf=new H(0,1,0),sf=new H(0,0,1),rf={type:"added"},E_={type:"removed"},er={type:"childadded",child:null},Mc={type:"childremoved",child:null},nn=class s extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new H,e=new xi,n=new oi,r=new H(1,1,1);function a(){n.setFromEuler(e,!1)}function l(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Fe},normalMatrix:{value:new he}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(ef,t)}rotateY(t){return this.rotateOnAxis(nf,t)}rotateZ(t){return this.rotateOnAxis(sf,t)}translateOnAxis(t,e){return tf.copy(t).applyQuaternion(this.quaternion),this.position.add(tf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ef,t)}translateY(t){return this.translateOnAxis(nf,t)}translateZ(t){return this.translateOnAxis(sf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ra.copy(t):ra.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(to,ra,this.up):Ii.lookAt(ra,to,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),tr.setFromRotationMatrix(Ii),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rf),er.child=t,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(E_),Mc.child=t,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rf),er.child=t,this.dispatchEvent(er),er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let l=this.children[n].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,t,w_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,T_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(h,u){return h[u.uuid]===void 0&&(h[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);let h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){let u=h.shapes;if(Array.isArray(u))for(let f=0,p=u.length;f<p;f++){let d=u[f];a(t.shapes,d)}else a(t.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let h=[];for(let u=0,f=this.material.length;u<f;u++)h.push(a(t.materials,this.material[u]));r.material=h}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){let u=this.animations[h];r.animations.push(a(t.animations,u))}}if(e){let h=l(t.geometries),u=l(t.materials),f=l(t.textures),p=l(t.images),d=l(t.shapes),_=l(t.skeletons),g=l(t.animations),y=l(t.nodes);h.length>0&&(n.geometries=h),u.length>0&&(n.materials=u),f.length>0&&(n.textures=f),p.length>0&&(n.images=p),d.length>0&&(n.shapes=d),_.length>0&&(n.skeletons=_),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=r,n;function l(h){let u=[];for(let f in h){let p=h[f];delete p.metadata,u.push(p)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};nn.DEFAULT_UP=new H(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ei=new H,Di=new H,Sc=new H,Ni=new H,nr=new H,ir=new H,of=new H,wc=new H,Tc=new H,Ec=new H,Ac=new Ne,Pc=new Ne,Rc=new Ne,Oi=class s{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ei.subVectors(t,e),r.cross(ei);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(t,e,n,r,a){ei.subVectors(r,e),Di.subVectors(n,e),Sc.subVectors(t,e);let l=ei.dot(ei),h=ei.dot(Di),u=ei.dot(Sc),f=Di.dot(Di),p=Di.dot(Sc),d=l*f-h*h;if(d===0)return a.set(0,0,0),null;let _=1/d,g=(f*u-h*p)*_,y=(l*p-h*u)*_;return a.set(1-g-y,y,g)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,e,n,r,a,l,h,u){return this.getBarycoord(t,e,n,r,Ni)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(a,Ni.x),u.addScaledVector(l,Ni.y),u.addScaledVector(h,Ni.z),u)}static getInterpolatedAttribute(t,e,n,r,a,l){return Ac.setScalar(0),Pc.setScalar(0),Rc.setScalar(0),Ac.fromBufferAttribute(t,e),Pc.fromBufferAttribute(t,n),Rc.fromBufferAttribute(t,r),l.setScalar(0),l.addScaledVector(Ac,a.x),l.addScaledVector(Pc,a.y),l.addScaledVector(Rc,a.z),l}static isFrontFacing(t,e,n,r){return ei.subVectors(n,e),Di.subVectors(t,e),ei.cross(Di).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ei.cross(Di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,a){return s.getInterpolation(t,this.a,this.b,this.c,e,n,r,a)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,a=this.c,l,h;nr.subVectors(r,n),ir.subVectors(a,n),wc.subVectors(t,n);let u=nr.dot(wc),f=ir.dot(wc);if(u<=0&&f<=0)return e.copy(n);Tc.subVectors(t,r);let p=nr.dot(Tc),d=ir.dot(Tc);if(p>=0&&d<=p)return e.copy(r);let _=u*d-p*f;if(_<=0&&u>=0&&p<=0)return l=u/(u-p),e.copy(n).addScaledVector(nr,l);Ec.subVectors(t,a);let g=nr.dot(Ec),y=ir.dot(Ec);if(y>=0&&g<=y)return e.copy(a);let S=g*f-u*y;if(S<=0&&f>=0&&y<=0)return h=f/(f-y),e.copy(n).addScaledVector(ir,h);let x=p*y-g*d;if(x<=0&&d-p>=0&&g-y>=0)return of.subVectors(a,r),h=(d-p)/(d-p+(g-y)),e.copy(r).addScaledVector(of,h);let v=1/(x+S+_);return l=S*v,h=_*v,e.copy(n).addScaledVector(nr,l).addScaledVector(ir,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},oa={h:0,s:0,l:0};function Cc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var me=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Te.workingColorSpace){return this.r=t,this.g=e,this.b=n,Te.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Te.workingColorSpace){if(t=fu(t,1),e=en(e,0,1),n=en(n,0,1),e===0)this.r=this.g=this.b=n;else{let a=n<=.5?n*(1+e):n+e-n*e,l=2*n-a;this.r=Cc(l,a,t+1/3),this.g=Cc(l,a,t),this.b=Cc(l,a,t-1/3)}return Te.toWorkingColorSpace(this,r),this}setStyle(t,e=zn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,l=r[1],h=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=zn){let n=up[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}copyLinearToSRGB(t){return this.r=gr(t.r),this.g=gr(t.g),this.b=gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=zn){return Te.fromWorkingColorSpace(mn.copy(this),t),Math.round(en(mn.r*255,0,255))*65536+Math.round(en(mn.g*255,0,255))*256+Math.round(en(mn.b*255,0,255))}getHexString(t=zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.fromWorkingColorSpace(mn.copy(this),e);let n=mn.r,r=mn.g,a=mn.b,l=Math.max(n,r,a),h=Math.min(n,r,a),u,f,p=(h+l)/2;if(h===l)u=0,f=0;else{let d=l-h;switch(f=p<=.5?d/(l+h):d/(2-l-h),l){case n:u=(r-a)/d+(r<a?6:0);break;case r:u=(a-n)/d+2;break;case a:u=(n-r)/d+4;break}u/=6}return t.h=u,t.s=f,t.l=p,t}getRGB(t,e=Te.workingColorSpace){return Te.fromWorkingColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=zn){Te.fromWorkingColorSpace(mn.copy(this),t);let e=mn.r,n=mn.g,r=mn.b;return t!==zn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+e,ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ji),t.getHSL(oa);let n=lo(ji.h,oa.h,e),r=lo(ji.s,oa.s,e),a=lo(ji.l,oa.l,e);return this.setHSL(n,r,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*r,this.g=a[1]*e+a[4]*n+a[7]*r,this.b=a[2]*e+a[5]*n+a[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new me;me.NAMES=up;var A_=0,yi=class extends Gi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=zi(),this.name="",this.blending=fr,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Xc,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(n.blending=this.blending),this.side!==is&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zc&&(n.blendSrc=this.blendSrc),this.blendDst!==Xc&&(n.blendDst=this.blendDst),this.blendEquation!==bs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){let l=[];for(let h in a){let u=a[h];delete u.metadata,l.push(u)}return l}if(e){let a=r(t.textures),l=r(t.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Wn=class extends yi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var $e=new H,aa=new $t,Dn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lh,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)aa.fromBufferAttribute(this,e),aa.applyMatrix3(t),this.setXY(e,aa.x,aa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,a){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),r=Le(r,this.array),a=Le(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lh&&(t.usage=this.usage),t}};var Ga=class extends Dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Wa=class extends Dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var be=class extends Dn{constructor(t,e,n){super(new Float32Array(t),e,n)}},P_=0,Fn=new Fe,Lc=new nn,sr=new H,In=new Gn,eo=new Gn,tn=new H,Ge=class s extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hp(t)?Wa:Ga)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let a=new he().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,n){return Fn.makeTranslation(t,e,n),this.applyMatrix4(Fn),this}scale(t,e,n){return Fn.makeScale(t,e,n),this.applyMatrix4(Fn),this}lookAt(t){return Lc.lookAt(t),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,a=t.length;r<a;r++){let l=t[r];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new be(n,3))}else{for(let n=0,r=e.count;n<r;n++){let a=t[n];e.setXYZ(n,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let a=e[n];In.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let a=0,l=e.length;a<l;a++){let h=e[a];eo.setFromBufferAttribute(h),this.morphTargetsRelative?(tn.addVectors(In.min,eo.min),In.expandByPoint(tn),tn.addVectors(In.max,eo.max),In.expandByPoint(tn)):(In.expandByPoint(eo.min),In.expandByPoint(eo.max))}In.getCenter(n);let r=0;for(let a=0,l=t.count;a<l;a++)tn.fromBufferAttribute(t,a),r=Math.max(r,n.distanceToSquared(tn));if(e)for(let a=0,l=e.length;a<l;a++){let h=e[a],u=this.morphTargetsRelative;for(let f=0,p=h.count;f<p;f++)tn.fromBufferAttribute(h,f),u&&(sr.fromBufferAttribute(t,f),tn.add(sr)),r=Math.max(r,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*n.count),4));let l=this.getAttribute("tangent"),h=[],u=[];for(let k=0;k<n.count;k++)h[k]=new H,u[k]=new H;let f=new H,p=new H,d=new H,_=new $t,g=new $t,y=new $t,S=new H,x=new H;function v(k,E,A){f.fromBufferAttribute(n,k),p.fromBufferAttribute(n,E),d.fromBufferAttribute(n,A),_.fromBufferAttribute(a,k),g.fromBufferAttribute(a,E),y.fromBufferAttribute(a,A),p.sub(f),d.sub(f),g.sub(_),y.sub(_);let B=1/(g.x*y.y-y.x*g.y);isFinite(B)&&(S.copy(p).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(B),x.copy(d).multiplyScalar(g.x).addScaledVector(p,-y.x).multiplyScalar(B),h[k].add(S),h[E].add(S),h[A].add(S),u[k].add(x),u[E].add(x),u[A].add(x))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let k=0,E=P.length;k<E;++k){let A=P[k],B=A.start,Y=A.count;for(let K=B,X=B+Y;K<X;K+=3)v(t.getX(K+0),t.getX(K+1),t.getX(K+2))}let w=new H,T=new H,O=new H,C=new H;function I(k){O.fromBufferAttribute(r,k),C.copy(O);let E=h[k];w.copy(E),w.sub(O.multiplyScalar(O.dot(E))).normalize(),T.crossVectors(C,E);let B=T.dot(u[k])<0?-1:1;l.setXYZW(k,w.x,w.y,w.z,B)}for(let k=0,E=P.length;k<E;++k){let A=P[k],B=A.start,Y=A.count;for(let K=B,X=B+Y;K<X;K+=3)I(t.getX(K+0)),I(t.getX(K+1)),I(t.getX(K+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let _=0,g=n.count;_<g;_++)n.setXYZ(_,0,0,0);let r=new H,a=new H,l=new H,h=new H,u=new H,f=new H,p=new H,d=new H;if(t)for(let _=0,g=t.count;_<g;_+=3){let y=t.getX(_+0),S=t.getX(_+1),x=t.getX(_+2);r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,S),l.fromBufferAttribute(e,x),p.subVectors(l,a),d.subVectors(r,a),p.cross(d),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,x),h.add(p),u.add(p),f.add(p),n.setXYZ(y,h.x,h.y,h.z),n.setXYZ(S,u.x,u.y,u.z),n.setXYZ(x,f.x,f.y,f.z)}else for(let _=0,g=e.count;_<g;_+=3)r.fromBufferAttribute(e,_+0),a.fromBufferAttribute(e,_+1),l.fromBufferAttribute(e,_+2),p.subVectors(l,a),d.subVectors(r,a),p.cross(d),n.setXYZ(_+0,p.x,p.y,p.z),n.setXYZ(_+1,p.x,p.y,p.z),n.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(h,u){let f=h.array,p=h.itemSize,d=h.normalized,_=new f.constructor(u.length*p),g=0,y=0;for(let S=0,x=u.length;S<x;S++){h.isInterleavedBufferAttribute?g=u[S]*h.data.stride+h.offset:g=u[S]*p;for(let v=0;v<p;v++)_[y++]=f[g++]}return new Dn(_,p,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,r=this.attributes;for(let h in r){let u=r[h],f=t(u,n);e.setAttribute(h,f)}let a=this.morphAttributes;for(let h in a){let u=[],f=a[h];for(let p=0,d=f.length;p<d;p++){let _=f[p],g=t(_,n);u.push(g)}e.morphAttributes[h]=u}e.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let h=0,u=l.length;h<u;h++){let f=l[h];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let u=this.parameters;for(let f in u)u[f]!==void 0&&(t[f]=u[f]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let u in n){let f=n[u];t.data.attributes[u]=f.toJSON(t.data)}let r={},a=!1;for(let u in this.morphAttributes){let f=this.morphAttributes[u],p=[];for(let d=0,_=f.length;d<_;d++){let g=f[d];p.push(g.toJSON(t.data))}p.length>0&&(r[u]=p,a=!0)}a&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));let h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let r=t.attributes;for(let f in r){let p=r[f];this.setAttribute(f,p.clone(e))}let a=t.morphAttributes;for(let f in a){let p=[],d=a[f];for(let _=0,g=d.length;_<g;_++)p.push(d[_].clone(e));this.morphAttributes[f]=p}this.morphTargetsRelative=t.morphTargetsRelative;let l=t.groups;for(let f=0,p=l.length;f<p;f++){let d=l[f];this.addGroup(d.start,d.count,d.materialIndex)}let h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},af=new Fe,gs=new Es,la=new ai,lf=new H,ca=new H,ha=new H,ua=new H,Ic=new H,da=new H,cf=new H,fa=new H,Be=class extends nn{constructor(t=new Ge,e=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){let h=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let h=this.morphTargetInfluences;if(a&&h){da.set(0,0,0);for(let u=0,f=a.length;u<f;u++){let p=h[u],d=a[u];p!==0&&(Ic.fromBufferAttribute(d,t),l?da.addScaledVector(Ic,p):da.addScaledVector(Ic.sub(e),p))}e.add(da)}return e}raycast(t,e){let n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(a),gs.copy(t.ray).recast(t.near),!(la.containsPoint(gs.origin)===!1&&(gs.intersectSphere(la,lf)===null||gs.origin.distanceToSquared(lf)>(t.far-t.near)**2))&&(af.copy(a).invert(),gs.copy(t.ray).applyMatrix4(af),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gs)))}_computeIntersections(t,e,n){let r,a=this.geometry,l=this.material,h=a.index,u=a.attributes.position,f=a.attributes.uv,p=a.attributes.uv1,d=a.attributes.normal,_=a.groups,g=a.drawRange;if(h!==null)if(Array.isArray(l))for(let y=0,S=_.length;y<S;y++){let x=_[y],v=l[x.materialIndex],P=Math.max(x.start,g.start),w=Math.min(h.count,Math.min(x.start+x.count,g.start+g.count));for(let T=P,O=w;T<O;T+=3){let C=h.getX(T),I=h.getX(T+1),k=h.getX(T+2);r=pa(this,v,t,n,f,p,d,C,I,k),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{let y=Math.max(0,g.start),S=Math.min(h.count,g.start+g.count);for(let x=y,v=S;x<v;x+=3){let P=h.getX(x),w=h.getX(x+1),T=h.getX(x+2);r=pa(this,l,t,n,f,p,d,P,w,T),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}else if(u!==void 0)if(Array.isArray(l))for(let y=0,S=_.length;y<S;y++){let x=_[y],v=l[x.materialIndex],P=Math.max(x.start,g.start),w=Math.min(u.count,Math.min(x.start+x.count,g.start+g.count));for(let T=P,O=w;T<O;T+=3){let C=T,I=T+1,k=T+2;r=pa(this,v,t,n,f,p,d,C,I,k),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{let y=Math.max(0,g.start),S=Math.min(u.count,g.start+g.count);for(let x=y,v=S;x<v;x+=3){let P=x,w=x+1,T=x+2;r=pa(this,l,t,n,f,p,d,P,w,T),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}}};function R_(s,t,e,n,r,a,l,h){let u;if(t.side===gn?u=n.intersectTriangle(l,a,r,!0,h):u=n.intersectTriangle(r,a,l,t.side===is,h),u===null)return null;fa.copy(h),fa.applyMatrix4(s.matrixWorld);let f=e.ray.origin.distanceTo(fa);return f<e.near||f>e.far?null:{distance:f,point:fa.clone(),object:s}}function pa(s,t,e,n,r,a,l,h,u,f){s.getVertexPosition(h,ca),s.getVertexPosition(u,ha),s.getVertexPosition(f,ua);let p=R_(s,t,e,n,ca,ha,ua,cf);if(p){let d=new H;Oi.getBarycoord(cf,ca,ha,ua,d),r&&(p.uv=Oi.getInterpolatedAttribute(r,h,u,f,d,new $t)),a&&(p.uv1=Oi.getInterpolatedAttribute(a,h,u,f,d,new $t)),l&&(p.normal=Oi.getInterpolatedAttribute(l,h,u,f,d,new H),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));let _={a:h,b:u,c:f,normal:new H,materialIndex:0};Oi.getNormal(ca,ha,ua,_.normal),p.face=_,p.barycoord=d}return p}var Zn=class s extends Ge{constructor(t=1,e=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};let h=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);let u=[],f=[],p=[],d=[],_=0,g=0;y("z","y","x",-1,-1,n,e,t,l,a,0),y("z","y","x",1,-1,n,e,-t,l,a,1),y("x","z","y",1,1,t,n,e,r,l,2),y("x","z","y",1,-1,t,n,-e,r,l,3),y("x","y","z",1,-1,t,e,n,r,a,4),y("x","y","z",-1,-1,t,e,-n,r,a,5),this.setIndex(u),this.setAttribute("position",new be(f,3)),this.setAttribute("normal",new be(p,3)),this.setAttribute("uv",new be(d,2));function y(S,x,v,P,w,T,O,C,I,k,E){let A=T/I,B=O/k,Y=T/2,K=O/2,X=C/2,et=I+1,V=k+1,ft=0,G=0,ht=new H;for(let xt=0;xt<V;xt++){let lt=xt*B-K;for(let pt=0;pt<et;pt++){let Et=pt*A-Y;ht[S]=Et*P,ht[x]=lt*w,ht[v]=X,f.push(ht.x,ht.y,ht.z),ht[S]=0,ht[x]=0,ht[v]=C>0?1:-1,p.push(ht.x,ht.y,ht.z),d.push(pt/I),d.push(1-xt/k),ft+=1}}for(let xt=0;xt<k;xt++)for(let lt=0;lt<I;lt++){let pt=_+lt+et*xt,Et=_+lt+et*(xt+1),$=_+(lt+1)+et*(xt+1),W=_+(lt+1)+et*xt;u.push(pt,Et,W),u.push(Et,$,W),G+=6}h.addGroup(g,G,E),g+=G,_+=ft}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Sr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let r=s[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function yn(s){let t={};for(let e=0;e<s.length;e++){let n=Sr(s[e]);for(let r in n)t[r]=n[r]}return t}function C_(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function dp(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}var yl={clone:Sr,merge:yn},L_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xn=class extends yi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L_,this.fragmentShader=I_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Sr(t.uniforms),this.uniformsGroups=C_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let l=this.uniforms[r].value;l&&l.isTexture?e.uniforms[r]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[r]={type:"m4",value:l.toArray()}:e.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Za=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qi=new H,hf=new $t,uf=new $t,bn=class extends Za{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=uo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return uo*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z)}getViewSize(t,e){return this.getViewBounds(t,hf,uf),e.subVectors(uf,hf)}setViewOffset(t,e,n,r,a,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(mr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,a=-.5*r,l=this.view;if(this.view!==null&&this.view.enabled){let u=l.fullWidth,f=l.fullHeight;a+=l.offsetX*r/u,e-=l.offsetY*n/f,r*=l.width/u,n*=l.height/f}let h=this.filmOffset;h!==0&&(a+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},rr=-90,or=1,kh=class extends nn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new bn(rr,or,t,e);r.layers=this.layers,this.add(r);let a=new bn(rr,or,t,e);a.layers=this.layers,this.add(a);let l=new bn(rr,or,t,e);l.layers=this.layers,this.add(l);let h=new bn(rr,or,t,e);h.layers=this.layers,this.add(h);let u=new bn(rr,or,t,e);u.layers=this.layers,this.add(u);let f=new bn(rr,or,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,a,l,h,u]=e;for(let f of e)this.remove(f);if(t===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===Ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,l,h,u,f,p]=this.children,d=t.getRenderTarget(),_=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,a),t.setRenderTarget(n,1,r),t.render(e,l),t.setRenderTarget(n,2,r),t.render(e,h),t.setRenderTarget(n,3,r),t.render(e,u),t.setRenderTarget(n,4,r),t.render(e,f),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,r),t.render(e,p),t.setRenderTarget(d,_,g),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},Xa=class extends Nn{constructor(t,e,n,r,a,l,h,u,f,p){t=t!==void 0?t:[],e=e!==void 0?e:xr,super(t,e,n,r,a,l,h,u,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Oh=class extends Wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Xa(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zn(5,5,5),a=new Xn({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:es});a.uniforms.tEquirect.value=e;let l=new Be(r,a),h=e.minFilter;return e.minFilter===ws&&(e.minFilter=Vn),new kh(1,10,this).update(t,l),e.minFilter=h,l.geometry.dispose(),l.material.dispose(),this}clear(t,e,n,r){let a=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,n,r);t.setRenderTarget(a)}},Dc=new H,D_=new H,N_=new he,ni=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Dc.subVectors(n,e).cross(D_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Dc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||N_.getNormalMatrix(t),r=this.coplanarPoint(Dc).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},_s=new ai,ma=new H,fo=class{constructor(t=new ni,e=new ni,n=new ni,r=new ni,a=new ni,l=new ni){this.planes=[t,e,n,r,a,l]}set(t,e,n,r,a,l){let h=this.planes;return h[0].copy(t),h[1].copy(e),h[2].copy(n),h[3].copy(r),h[4].copy(a),h[5].copy(l),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bi){let n=this.planes,r=t.elements,a=r[0],l=r[1],h=r[2],u=r[3],f=r[4],p=r[5],d=r[6],_=r[7],g=r[8],y=r[9],S=r[10],x=r[11],v=r[12],P=r[13],w=r[14],T=r[15];if(n[0].setComponents(u-a,_-f,x-g,T-v).normalize(),n[1].setComponents(u+a,_+f,x+g,T+v).normalize(),n[2].setComponents(u+l,_+p,x+y,T+P).normalize(),n[3].setComponents(u-l,_-p,x-y,T-P).normalize(),n[4].setComponents(u-h,_-d,x-S,T-w).normalize(),e===Bi)n[5].setComponents(u+h,_+d,x+S,T+w).normalize();else if(e===Ba)n[5].setComponents(h,d,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(t){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(t.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(ma.x=r.normal.x>0?t.max.x:t.min.x,ma.y=r.normal.y>0?t.max.y:t.min.y,ma.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ma)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function fp(){let s=null,t=!1,e=null,n=null;function r(a,l){e(a,l),n=s.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(r),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function k_(s){let t=new WeakMap;function e(h,u){let f=h.array,p=h.usage,d=f.byteLength,_=s.createBuffer();s.bindBuffer(u,_),s.bufferData(u,f,p),h.onUploadCallback();let g;if(f instanceof Float32Array)g=s.FLOAT;else if(f instanceof Uint16Array)h.isFloat16BufferAttribute?g=s.HALF_FLOAT:g=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=s.SHORT;else if(f instanceof Uint32Array)g=s.UNSIGNED_INT;else if(f instanceof Int32Array)g=s.INT;else if(f instanceof Int8Array)g=s.BYTE;else if(f instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:d}}function n(h,u,f){let p=u.array,d=u.updateRanges;if(s.bindBuffer(f,h),d.length===0)s.bufferSubData(f,0,p);else{d.sort((g,y)=>g.start-y.start);let _=0;for(let g=1;g<d.length;g++){let y=d[_],S=d[g];S.start<=y.start+y.count+1?y.count=Math.max(y.count,S.start+S.count-y.start):(++_,d[_]=S)}d.length=_+1;for(let g=0,y=d.length;g<y;g++){let S=d[g];s.bufferSubData(f,S.start*p.BYTES_PER_ELEMENT,p,S.start,S.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);let u=t.get(h);u&&(s.deleteBuffer(u.buffer),t.delete(h))}function l(h,u){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){let p=t.get(h);(!p||p.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}let f=t.get(h);if(f===void 0)t.set(h,e(h,u));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,h,u),f.version=h.version}}return{get:r,remove:a,update:l}}var As=class s extends Ge{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let a=t/2,l=e/2,h=Math.floor(n),u=Math.floor(r),f=h+1,p=u+1,d=t/h,_=e/u,g=[],y=[],S=[],x=[];for(let v=0;v<p;v++){let P=v*_-l;for(let w=0;w<f;w++){let T=w*d-a;y.push(T,-P,0),S.push(0,0,1),x.push(w/h),x.push(1-v/u)}}for(let v=0;v<u;v++)for(let P=0;P<h;P++){let w=P+f*v,T=P+f*(v+1),O=P+1+f*(v+1),C=P+1+f*v;g.push(w,T,C),g.push(T,O,C)}this.setIndex(g),this.setAttribute("position",new be(y,3)),this.setAttribute("normal",new be(S,3)),this.setAttribute("uv",new be(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},O_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U_=`#ifdef USE_ALPHAHASH
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
#endif`,B_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V_=`#ifdef USE_AOMAP
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
#endif`,G_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W_=`#ifdef USE_BATCHING
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
#endif`,Z_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,X_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Y_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$_=`#ifdef USE_IRIDESCENCE
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
#endif`,K_=`#ifdef USE_BUMPMAP
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
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,r0=`#define PI 3.141592653589793
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
} // validated`,o0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,a0=`vec3 transformedNormal = objectNormal;
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
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d0="gl_FragColor = linearToOutputTexel( gl_FragColor );",f0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S0=`#ifdef USE_GRADIENTMAP
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
}`,w0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A0=`uniform bool receiveShadow;
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
#endif`,P0=`#ifdef USE_ENVMAP
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
#endif`,R0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D0=`PhysicalMaterial material;
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
#endif`,N0=`struct PhysicalMaterial {
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
}`,k0=`
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
#endif`,O0=`#if defined( RE_IndirectDiffuse )
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
#endif`,U0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z0=`#if defined( USE_POINTS_UV )
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
#endif`,X0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`#ifdef USE_MORPHTARGETS
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
#endif`,j0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sv=`#ifdef USE_NORMALMAP
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
#endif`,rv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ov=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,av=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_v=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yv=`float getShadowMask() {
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
}`,bv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mv=`#ifdef USE_SKINNING
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
#endif`,Sv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wv=`#ifdef USE_SKINNING
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
#endif`,Tv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ev=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Av=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rv=`#ifdef USE_TRANSMISSION
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
#endif`,Cv=`#ifdef USE_TRANSMISSION
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
#endif`,Lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ov=`uniform sampler2D t2D;
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
}`,Uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`#include <common>
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
}`,Vv=`#if DEPTH_PACKING == 3200
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
}`,Gv=`#define DISTANCE
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
}`,Wv=`#define DISTANCE
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
}`,Zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qv=`uniform float scale;
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
}`,Yv=`uniform vec3 diffuse;
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
}`,$v=`#include <common>
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
}`,Kv=`uniform vec3 diffuse;
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
}`,Jv=`#define LAMBERT
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
}`,jv=`#define LAMBERT
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
}`,Qv=`#define MATCAP
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
}`,tx=`#define MATCAP
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
}`,ex=`#define NORMAL
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
}`,nx=`#define NORMAL
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
}`,ix=`#define PHONG
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
}`,sx=`#define PHONG
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
}`,rx=`#define STANDARD
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
}`,ox=`#define STANDARD
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
}`,ax=`#define TOON
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
}`,lx=`#define TOON
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
}`,cx=`uniform float size;
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
}`,hx=`uniform vec3 diffuse;
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
}`,ux=`#include <common>
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
}`,dx=`uniform vec3 color;
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
}`,fx=`uniform float rotation;
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
}`,px=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:O_,alphahash_pars_fragment:U_,alphamap_fragment:B_,alphamap_pars_fragment:F_,alphatest_fragment:z_,alphatest_pars_fragment:H_,aomap_fragment:V_,aomap_pars_fragment:G_,batching_pars_vertex:W_,batching_vertex:Z_,begin_vertex:X_,beginnormal_vertex:q_,bsdfs:Y_,iridescence_fragment:$_,bumpmap_pars_fragment:K_,clipping_planes_fragment:J_,clipping_planes_pars_fragment:j_,clipping_planes_pars_vertex:Q_,clipping_planes_vertex:t0,color_fragment:e0,color_pars_fragment:n0,color_pars_vertex:i0,color_vertex:s0,common:r0,cube_uv_reflection_fragment:o0,defaultnormal_vertex:a0,displacementmap_pars_vertex:l0,displacementmap_vertex:c0,emissivemap_fragment:h0,emissivemap_pars_fragment:u0,colorspace_fragment:d0,colorspace_pars_fragment:f0,envmap_fragment:p0,envmap_common_pars_fragment:m0,envmap_pars_fragment:g0,envmap_pars_vertex:_0,envmap_physical_pars_fragment:P0,envmap_vertex:v0,fog_vertex:x0,fog_pars_vertex:y0,fog_fragment:b0,fog_pars_fragment:M0,gradientmap_pars_fragment:S0,lightmap_pars_fragment:w0,lights_lambert_fragment:T0,lights_lambert_pars_fragment:E0,lights_pars_begin:A0,lights_toon_fragment:R0,lights_toon_pars_fragment:C0,lights_phong_fragment:L0,lights_phong_pars_fragment:I0,lights_physical_fragment:D0,lights_physical_pars_fragment:N0,lights_fragment_begin:k0,lights_fragment_maps:O0,lights_fragment_end:U0,logdepthbuf_fragment:B0,logdepthbuf_pars_fragment:F0,logdepthbuf_pars_vertex:z0,logdepthbuf_vertex:H0,map_fragment:V0,map_pars_fragment:G0,map_particle_fragment:W0,map_particle_pars_fragment:Z0,metalnessmap_fragment:X0,metalnessmap_pars_fragment:q0,morphinstance_vertex:Y0,morphcolor_vertex:$0,morphnormal_vertex:K0,morphtarget_pars_vertex:J0,morphtarget_vertex:j0,normal_fragment_begin:Q0,normal_fragment_maps:tv,normal_pars_fragment:ev,normal_pars_vertex:nv,normal_vertex:iv,normalmap_pars_fragment:sv,clearcoat_normal_fragment_begin:rv,clearcoat_normal_fragment_maps:ov,clearcoat_pars_fragment:av,iridescence_pars_fragment:lv,opaque_fragment:cv,packing:hv,premultiplied_alpha_fragment:uv,project_vertex:dv,dithering_fragment:fv,dithering_pars_fragment:pv,roughnessmap_fragment:mv,roughnessmap_pars_fragment:gv,shadowmap_pars_fragment:_v,shadowmap_pars_vertex:vv,shadowmap_vertex:xv,shadowmask_pars_fragment:yv,skinbase_vertex:bv,skinning_pars_vertex:Mv,skinning_vertex:Sv,skinnormal_vertex:wv,specularmap_fragment:Tv,specularmap_pars_fragment:Ev,tonemapping_fragment:Av,tonemapping_pars_fragment:Pv,transmission_fragment:Rv,transmission_pars_fragment:Cv,uv_pars_fragment:Lv,uv_pars_vertex:Iv,uv_vertex:Dv,worldpos_vertex:Nv,background_vert:kv,background_frag:Ov,backgroundCube_vert:Uv,backgroundCube_frag:Bv,cube_vert:Fv,cube_frag:zv,depth_vert:Hv,depth_frag:Vv,distanceRGBA_vert:Gv,distanceRGBA_frag:Wv,equirect_vert:Zv,equirect_frag:Xv,linedashed_vert:qv,linedashed_frag:Yv,meshbasic_vert:$v,meshbasic_frag:Kv,meshlambert_vert:Jv,meshlambert_frag:jv,meshmatcap_vert:Qv,meshmatcap_frag:tx,meshnormal_vert:ex,meshnormal_frag:nx,meshphong_vert:ix,meshphong_frag:sx,meshphysical_vert:rx,meshphysical_frag:ox,meshtoon_vert:ax,meshtoon_frag:lx,points_vert:cx,points_frag:hx,shadow_vert:ux,shadow_frag:dx,sprite_vert:fx,sprite_frag:px},At={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Mn={basic:{uniforms:yn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:yn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new me(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:yn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:yn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:yn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new me(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:yn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:yn([At.points,At.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:yn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:yn([At.common,At.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:yn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:yn([At.sprite,At.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:yn([At.common,At.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:yn([At.lights,At.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Mn.physical={uniforms:yn([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};var ga={r:0,b:0,g:0},vs=new xi,mx=new Fe;function gx(s,t,e,n,r,a,l){let h=new me(0),u=a===!0?0:1,f,p,d=null,_=0,g=null;function y(P){let w=P.isScene===!0?P.background:null;return w&&w.isTexture&&(w=(P.backgroundBlurriness>0?e:t).get(w)),w}function S(P){let w=!1,T=y(P);T===null?v(h,u):T&&T.isColor&&(v(T,1),w=!0);let O=s.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,l):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(P,w){let T=y(w);T&&(T.isCubeTexture||T.mapping===_l)?(p===void 0&&(p=new Be(new Zn(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Sr(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),vs.copy(w.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),p.material.uniforms.envMap.value=T,p.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(mx.makeRotationFromEuler(vs)),p.material.toneMapped=Te.getTransfer(T.colorSpace)!==De,(d!==T||_!==T.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,d=T,_=T.version,g=s.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):T&&T.isTexture&&(f===void 0&&(f=new Be(new As(2,2),new Xn({name:"BackgroundMaterial",uniforms:Sr(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=T,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.toneMapped=Te.getTransfer(T.colorSpace)!==De,T.matrixAutoUpdate===!0&&T.updateMatrix(),f.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||_!==T.version||g!==s.toneMapping)&&(f.material.needsUpdate=!0,d=T,_=T.version,g=s.toneMapping),f.layers.enableAll(),P.unshift(f,f.geometry,f.material,0,0,null))}function v(P,w){P.getRGB(ga,dp(s)),n.buffers.color.setClear(ga.r,ga.g,ga.b,w,l)}return{getClearColor:function(){return h},setClearColor:function(P,w=1){h.set(P),u=w,v(h,u)},getClearAlpha:function(){return u},setClearAlpha:function(P){u=P,v(h,u)},render:S,addToRenderList:x}}function _x(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},r=_(null),a=r,l=!1;function h(A,B,Y,K,X){let et=!1,V=d(K,Y,B);a!==V&&(a=V,f(a.object)),et=g(A,K,Y,X),et&&y(A,K,Y,X),X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(et||l)&&(l=!1,T(A,B,Y,K),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function u(){return s.createVertexArray()}function f(A){return s.bindVertexArray(A)}function p(A){return s.deleteVertexArray(A)}function d(A,B,Y){let K=Y.wireframe===!0,X=n[A.id];X===void 0&&(X={},n[A.id]=X);let et=X[B.id];et===void 0&&(et={},X[B.id]=et);let V=et[K];return V===void 0&&(V=_(u()),et[K]=V),V}function _(A){let B=[],Y=[],K=[];for(let X=0;X<e;X++)B[X]=0,Y[X]=0,K[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:K,object:A,attributes:{},index:null}}function g(A,B,Y,K){let X=a.attributes,et=B.attributes,V=0,ft=Y.getAttributes();for(let G in ft)if(ft[G].location>=0){let xt=X[G],lt=et[G];if(lt===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(lt=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(lt=A.instanceColor)),xt===void 0||xt.attribute!==lt||lt&&xt.data!==lt.data)return!0;V++}return a.attributesNum!==V||a.index!==K}function y(A,B,Y,K){let X={},et=B.attributes,V=0,ft=Y.getAttributes();for(let G in ft)if(ft[G].location>=0){let xt=et[G];xt===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(xt=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(xt=A.instanceColor));let lt={};lt.attribute=xt,xt&&xt.data&&(lt.data=xt.data),X[G]=lt,V++}a.attributes=X,a.attributesNum=V,a.index=K}function S(){let A=a.newAttributes;for(let B=0,Y=A.length;B<Y;B++)A[B]=0}function x(A){v(A,0)}function v(A,B){let Y=a.newAttributes,K=a.enabledAttributes,X=a.attributeDivisors;Y[A]=1,K[A]===0&&(s.enableVertexAttribArray(A),K[A]=1),X[A]!==B&&(s.vertexAttribDivisor(A,B),X[A]=B)}function P(){let A=a.newAttributes,B=a.enabledAttributes;for(let Y=0,K=B.length;Y<K;Y++)B[Y]!==A[Y]&&(s.disableVertexAttribArray(Y),B[Y]=0)}function w(A,B,Y,K,X,et,V){V===!0?s.vertexAttribIPointer(A,B,Y,X,et):s.vertexAttribPointer(A,B,Y,K,X,et)}function T(A,B,Y,K){S();let X=K.attributes,et=Y.getAttributes(),V=B.defaultAttributeValues;for(let ft in et){let G=et[ft];if(G.location>=0){let ht=X[ft];if(ht===void 0&&(ft==="instanceMatrix"&&A.instanceMatrix&&(ht=A.instanceMatrix),ft==="instanceColor"&&A.instanceColor&&(ht=A.instanceColor)),ht!==void 0){let xt=ht.normalized,lt=ht.itemSize,pt=t.get(ht);if(pt===void 0)continue;let Et=pt.buffer,$=pt.type,W=pt.bytesPerElement,ot=$===s.INT||$===s.UNSIGNED_INT||ht.gpuType===au;if(ht.isInterleavedBufferAttribute){let Z=ht.data,_t=Z.stride,dt=ht.offset;if(Z.isInstancedInterleavedBuffer){for(let nt=0;nt<G.locationSize;nt++)v(G.location+nt,Z.meshPerAttribute);A.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let nt=0;nt<G.locationSize;nt++)x(G.location+nt);s.bindBuffer(s.ARRAY_BUFFER,Et);for(let nt=0;nt<G.locationSize;nt++)w(G.location+nt,lt/G.locationSize,$,xt,_t*W,(dt+lt/G.locationSize*nt)*W,ot)}else{if(ht.isInstancedBufferAttribute){for(let Z=0;Z<G.locationSize;Z++)v(G.location+Z,ht.meshPerAttribute);A.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Z=0;Z<G.locationSize;Z++)x(G.location+Z);s.bindBuffer(s.ARRAY_BUFFER,Et);for(let Z=0;Z<G.locationSize;Z++)w(G.location+Z,lt/G.locationSize,$,xt,lt*W,lt/G.locationSize*Z*W,ot)}}else if(V!==void 0){let xt=V[ft];if(xt!==void 0)switch(xt.length){case 2:s.vertexAttrib2fv(G.location,xt);break;case 3:s.vertexAttrib3fv(G.location,xt);break;case 4:s.vertexAttrib4fv(G.location,xt);break;default:s.vertexAttrib1fv(G.location,xt)}}}}P()}function O(){k();for(let A in n){let B=n[A];for(let Y in B){let K=B[Y];for(let X in K)p(K[X].object),delete K[X];delete B[Y]}delete n[A]}}function C(A){if(n[A.id]===void 0)return;let B=n[A.id];for(let Y in B){let K=B[Y];for(let X in K)p(K[X].object),delete K[X];delete B[Y]}delete n[A.id]}function I(A){for(let B in n){let Y=n[B];if(Y[A.id]===void 0)continue;let K=Y[A.id];for(let X in K)p(K[X].object),delete K[X];delete Y[A.id]}}function k(){E(),l=!0,a!==r&&(a=r,f(a.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:k,resetDefaultState:E,dispose:O,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:S,enableAttribute:x,disableUnusedAttributes:P}}function vx(s,t,e){let n;function r(f){n=f}function a(f,p){s.drawArrays(n,f,p),e.update(p,n,1)}function l(f,p,d){d!==0&&(s.drawArraysInstanced(n,f,p,d),e.update(p,n,d))}function h(f,p,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,p,0,d);let g=0;for(let y=0;y<d;y++)g+=p[y];e.update(g,n,1)}function u(f,p,d,_){if(d===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<f.length;y++)l(f[y],p[y],_[y]);else{g.multiDrawArraysInstancedWEBGL(n,f,0,p,0,_,0,d);let y=0;for(let S=0;S<d;S++)y+=p[S]*_[S];e.update(y,n,1)}}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function xx(s,t,e,n){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");r=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(I){return!(I!==si&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){let k=I===yo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Vi&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ui&&!k)}function u(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp",p=u(f);p!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);let d=e.logarithmicDepthBuffer===!0,_=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=y>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:u,textureFormatReadable:l,textureTypeReadable:h,precision:f,logarithmicDepthBuffer:d,reverseDepthBuffer:_,maxTextures:g,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:P,maxVaryings:w,maxFragmentUniforms:T,vertexTextures:O,maxSamples:C}}function yx(s){let t=this,e=null,n=0,r=!1,a=!1,l=new ni,h=new he,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(d,_){let g=d.length!==0||_||n!==0||r;return r=_,n=d.length,g},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,_){e=p(d,_,0)},this.setState=function(d,_,g){let y=d.clippingPlanes,S=d.clipIntersection,x=d.clipShadows,v=s.get(d);if(!r||y===null||y.length===0||a&&!x)a?p(null):f();else{let P=a?0:n,w=P*4,T=v.clippingState||null;u.value=T,T=p(y,_,w,g);for(let O=0;O!==w;++O)T[O]=e[O];v.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=P}};function f(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function p(d,_,g,y){let S=d!==null?d.length:0,x=null;if(S!==0){if(x=u.value,y!==!0||x===null){let v=g+S*4,P=_.matrixWorldInverse;h.getNormalMatrix(P),(x===null||x.length<v)&&(x=new Float32Array(v));for(let w=0,T=g;w!==S;++w,T+=4)l.copy(d[w]).applyMatrix4(P,h),l.normal.toArray(x,T),x[T+3]=l.constant}u.value=x,u.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,x}}function bx(s){let t=new WeakMap;function e(l,h){return h===th?l.mapping=xr:h===eh&&(l.mapping=yr),l}function n(l){if(l&&l.isTexture){let h=l.mapping;if(h===th||h===eh)if(t.has(l)){let u=t.get(l).texture;return e(u,l.mapping)}else{let u=l.image;if(u&&u.height>0){let f=new Oh(u.height);return f.fromEquirectangularTexture(s,l),t.set(l,f),l.addEventListener("dispose",r),e(f.texture,l.mapping)}else return null}}return l}function r(l){let h=l.target;h.removeEventListener("dispose",r);let u=t.get(h);u!==void 0&&(t.delete(h),u.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}var qa=class extends Za{constructor(t=-1,e=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=n-t,l=n+t,h=r+e,u=r-e;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,l=a+f*this.view.width,h-=p*this.view.offsetY,u=h-p*this.view.height}this.projectionMatrix.makeOrthographic(a,l,h,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},dr=4,df=[.125,.215,.35,.446,.526,.582],Ms=20,Nc=new qa,ff=new me,kc=null,Oc=0,Uc=0,Bc=!1,ys=(1+Math.sqrt(5))/2,ar=1/ys,pf=[new H(-ys,ar,0),new H(ys,ar,0),new H(-ar,0,ys),new H(ar,0,ys),new H(0,ys,-ar),new H(0,ys,ar),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],Ya=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){kc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,r,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kc,Oc,Uc),this._renderer.xr.enabled=Bc,t.scissorTest=!1,_a(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xr||t.mapping===yr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:yo,format:si,colorSpace:Er,depthBuffer:!1},r=mf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mf(t,e,n);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mx(a)),this._blurMaterial=Sx(a,t,e)}return r}_compileMaterial(t){let e=new Be(this._lodPlanes[0],t);this._renderer.compile(e,Nc)}_sceneToCubeUV(t,e,n,r){let h=new bn(90,1,e,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,_=p.toneMapping;p.getClearColor(ff),p.toneMapping=ns,p.autoClear=!1;let g=new Wn({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),y=new Be(new Zn,g),S=!1,x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,S=!0):(g.color.copy(ff),S=!0);for(let v=0;v<6;v++){let P=v%3;P===0?(h.up.set(0,u[v],0),h.lookAt(f[v],0,0)):P===1?(h.up.set(0,0,u[v]),h.lookAt(0,f[v],0)):(h.up.set(0,u[v],0),h.lookAt(0,0,f[v]));let w=this._cubeSize;_a(r,P*w,v>2?w:0,w,w),p.setRenderTarget(r),S&&p.render(y,h),p.render(t,h)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=_,p.autoClear=d,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===xr||t.mapping===yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_f()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gf());let a=r?this._cubemapMaterial:this._equirectMaterial,l=new Be(this._lodPlanes[0],a),h=a.uniforms;h.envMap.value=t;let u=this._cubeSize;_a(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(l,Nc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let a=1;a<r;a++){let l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),h=pf[(r-a-1)%pf.length];this._blur(t,a-1,a,l,h)}e.autoClear=n}_blur(t,e,n,r,a){let l=this._pingPongRenderTarget;this._halfBlur(t,l,e,n,r,"latitudinal",a),this._halfBlur(l,t,n,n,r,"longitudinal",a)}_halfBlur(t,e,n,r,a,l,h){let u=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let p=3,d=new Be(this._lodPlanes[r],f),_=f.uniforms,g=this._sizeLods[n]-1,y=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*Ms-1),S=a/y,x=isFinite(a)?1+Math.floor(p*S):Ms;x>Ms&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ms}`);let v=[],P=0;for(let I=0;I<Ms;++I){let k=I/S,E=Math.exp(-k*k/2);v.push(E),I===0?P+=E:I<x&&(P+=2*E)}for(let I=0;I<v.length;I++)v[I]=v[I]/P;_.envMap.value=t.texture,_.samples.value=x,_.weights.value=v,_.latitudinal.value=l==="latitudinal",h&&(_.poleAxis.value=h);let{_lodMax:w}=this;_.dTheta.value=y,_.mipInt.value=w-n;let T=this._sizeLods[r],O=3*T*(r>w-dr?r-w+dr:0),C=4*(this._cubeSize-T);_a(e,O,C,3*T,2*T),u.setRenderTarget(e),u.render(d,Nc)}};function Mx(s){let t=[],e=[],n=[],r=s,a=s-dr+1+df.length;for(let l=0;l<a;l++){let h=Math.pow(2,r);e.push(h);let u=1/h;l>s-dr?u=df[l-s+dr-1]:l===0&&(u=0),n.push(u);let f=1/(h-2),p=-f,d=1+f,_=[p,p,d,p,d,d,p,p,d,d,p,d],g=6,y=6,S=3,x=2,v=1,P=new Float32Array(S*y*g),w=new Float32Array(x*y*g),T=new Float32Array(v*y*g);for(let C=0;C<g;C++){let I=C%3*2/3-1,k=C>2?0:-1,E=[I,k,0,I+2/3,k,0,I+2/3,k+1,0,I,k,0,I+2/3,k+1,0,I,k+1,0];P.set(E,S*y*C),w.set(_,x*y*C);let A=[C,C,C,C,C,C];T.set(A,v*y*C)}let O=new Ge;O.setAttribute("position",new Dn(P,S)),O.setAttribute("uv",new Dn(w,x)),O.setAttribute("faceIndex",new Dn(T,v)),t.push(O),r>dr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function mf(s,t,e){let n=new Wi(s,t,e);return n.texture.mapping=_l,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _a(s,t,e,n,r){s.viewport.set(t,e,n,r),s.scissor.set(t,e,n,r)}function Sx(s,t,e){let n=new Float32Array(Ms),r=new H(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pu(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function gf(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function _f(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function pu(){return`

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
	`}function wx(s){let t=new WeakMap,e=null;function n(h){if(h&&h.isTexture){let u=h.mapping,f=u===th||u===eh,p=u===xr||u===yr;if(f||p){let d=t.get(h),_=d!==void 0?d.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return e===null&&(e=new Ya(s)),d=f?e.fromEquirectangular(h,d):e.fromCubemap(h,d),d.texture.pmremVersion=h.pmremVersion,t.set(h,d),d.texture;if(d!==void 0)return d.texture;{let g=h.image;return f&&g&&g.height>0||p&&g&&r(g)?(e===null&&(e=new Ya(s)),d=f?e.fromEquirectangular(h):e.fromCubemap(h),d.texture.pmremVersion=h.pmremVersion,t.set(h,d),h.addEventListener("dispose",a),d.texture):null}}}return h}function r(h){let u=0,f=6;for(let p=0;p<f;p++)h[p]!==void 0&&u++;return u===f}function a(h){let u=h.target;u.removeEventListener("dispose",a);let f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:l}}function Tx(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&oo("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ex(s,t,e,n){let r={},a=new WeakMap;function l(d){let _=d.target;_.index!==null&&t.remove(_.index);for(let y in _.attributes)t.remove(_.attributes[y]);for(let y in _.morphAttributes){let S=_.morphAttributes[y];for(let x=0,v=S.length;x<v;x++)t.remove(S[x])}_.removeEventListener("dispose",l),delete r[_.id];let g=a.get(_);g&&(t.remove(g),a.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function h(d,_){return r[_.id]===!0||(_.addEventListener("dispose",l),r[_.id]=!0,e.memory.geometries++),_}function u(d){let _=d.attributes;for(let y in _)t.update(_[y],s.ARRAY_BUFFER);let g=d.morphAttributes;for(let y in g){let S=g[y];for(let x=0,v=S.length;x<v;x++)t.update(S[x],s.ARRAY_BUFFER)}}function f(d){let _=[],g=d.index,y=d.attributes.position,S=0;if(g!==null){let P=g.array;S=g.version;for(let w=0,T=P.length;w<T;w+=3){let O=P[w+0],C=P[w+1],I=P[w+2];_.push(O,C,C,I,I,O)}}else if(y!==void 0){let P=y.array;S=y.version;for(let w=0,T=P.length/3-1;w<T;w+=3){let O=w+0,C=w+1,I=w+2;_.push(O,C,C,I,I,O)}}else return;let x=new(hp(_)?Wa:Ga)(_,1);x.version=S;let v=a.get(d);v&&t.remove(v),a.set(d,x)}function p(d){let _=a.get(d);if(_){let g=d.index;g!==null&&_.version<g.version&&f(d)}else f(d);return a.get(d)}return{get:h,update:u,getWireframeAttribute:p}}function Ax(s,t,e){let n;function r(_){n=_}let a,l;function h(_){a=_.type,l=_.bytesPerElement}function u(_,g){s.drawElements(n,g,a,_*l),e.update(g,n,1)}function f(_,g,y){y!==0&&(s.drawElementsInstanced(n,g,a,_*l,y),e.update(g,n,y))}function p(_,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,a,_,0,y);let x=0;for(let v=0;v<y;v++)x+=g[v];e.update(x,n,1)}function d(_,g,y,S){if(y===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<_.length;v++)f(_[v]/l,g[v],S[v]);else{x.multiDrawElementsInstancedWEBGL(n,g,0,a,_,0,S,0,y);let v=0;for(let P=0;P<y;P++)v+=g[P]*S[P];e.update(v,n,1)}}this.setMode=r,this.setIndex=h,this.render=u,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=d}function Px(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,h){switch(e.calls++,l){case s.TRIANGLES:e.triangles+=h*(a/3);break;case s.LINES:e.lines+=h*(a/2);break;case s.LINE_STRIP:e.lines+=h*(a-1);break;case s.LINE_LOOP:e.lines+=h*a;break;case s.POINTS:e.points+=h*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Rx(s,t,e){let n=new WeakMap,r=new Ne;function a(l,h,u){let f=l.morphTargetInfluences,p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,d=p!==void 0?p.length:0,_=n.get(h);if(_===void 0||_.count!==d){let E=function(){I.dispose(),n.delete(h),h.removeEventListener("dispose",E)};_!==void 0&&_.texture.dispose();let g=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],P=h.morphAttributes.color||[],w=0;g===!0&&(w=1),y===!0&&(w=2),S===!0&&(w=3);let T=h.attributes.position.count*w,O=1;T>t.maxTextureSize&&(O=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let C=new Float32Array(T*O*4*d),I=new Ha(C,T,O,d);I.type=Ui,I.needsUpdate=!0;let k=w*4;for(let A=0;A<d;A++){let B=x[A],Y=v[A],K=P[A],X=T*O*4*A;for(let et=0;et<B.count;et++){let V=et*k;g===!0&&(r.fromBufferAttribute(B,et),C[X+V+0]=r.x,C[X+V+1]=r.y,C[X+V+2]=r.z,C[X+V+3]=0),y===!0&&(r.fromBufferAttribute(Y,et),C[X+V+4]=r.x,C[X+V+5]=r.y,C[X+V+6]=r.z,C[X+V+7]=0),S===!0&&(r.fromBufferAttribute(K,et),C[X+V+8]=r.x,C[X+V+9]=r.y,C[X+V+10]=r.z,C[X+V+11]=K.itemSize===4?r.w:1)}}_={count:d,texture:I,size:new $t(T,O)},n.set(h,_),h.addEventListener("dispose",E)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(s,"morphTexture",l.morphTexture,e);else{let g=0;for(let S=0;S<f.length;S++)g+=f[S];let y=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",f)}u.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:a}}function Cx(s,t,e,n){let r=new WeakMap;function a(u){let f=n.render.frame,p=u.geometry,d=t.get(u,p);if(r.get(d)!==f&&(t.update(d),r.set(d,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",h)===!1&&u.addEventListener("dispose",h),r.get(u)!==f&&(e.update(u.instanceMatrix,s.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,s.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){let _=u.skeleton;r.get(_)!==f&&(_.update(),r.set(_,f))}return d}function l(){r=new WeakMap}function h(u){let f=u.target;f.removeEventListener("dispose",h),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:l}}var $a=class extends Nn{constructor(t,e,n,r,a,l,h,u,f,p=pr){if(p!==pr&&p!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===pr&&(n=Ts),n===void 0&&p===Mr&&(n=br),super(null,r,a,l,h,u,p,n,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=h!==void 0?h:ri,this.minFilter=u!==void 0?u:ri,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},pp=new Nn,vf=new $a(1,1),mp=new Ha,gp=new Nh,_p=new Xa,xf=[],yf=[],bf=new Float32Array(16),Mf=new Float32Array(9),Sf=new Float32Array(4);function Ar(s,t,e){let n=s[0];if(n<=0||n>0)return s;let r=t*e,a=xf[r];if(a===void 0&&(a=new Float32Array(r),xf[r]=a),t!==0){n.toArray(a,0);for(let l=1,h=0;l!==t;++l)h+=e,s[l].toArray(a,h)}return a}function Ke(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Je(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function bl(s,t){let e=yf[t];e===void 0&&(e=new Int32Array(t),yf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Lx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ix(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;s.uniform2fv(this.addr,t),Je(e,t)}}function Dx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;s.uniform3fv(this.addr,t),Je(e,t)}}function Nx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;s.uniform4fv(this.addr,t),Je(e,t)}}function kx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,n))return;Sf.set(n),s.uniformMatrix2fv(this.addr,!1,Sf),Je(e,n)}}function Ox(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,n))return;Mf.set(n),s.uniformMatrix3fv(this.addr,!1,Mf),Je(e,n)}}function Ux(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,n))return;bf.set(n),s.uniformMatrix4fv(this.addr,!1,bf),Je(e,n)}}function Bx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Fx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;s.uniform2iv(this.addr,t),Je(e,t)}}function zx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;s.uniform3iv(this.addr,t),Je(e,t)}}function Hx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;s.uniform4iv(this.addr,t),Je(e,t)}}function Vx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Gx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;s.uniform2uiv(this.addr,t),Je(e,t)}}function Wx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;s.uniform3uiv(this.addr,t),Je(e,t)}}function Zx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;s.uniform4uiv(this.addr,t),Je(e,t)}}function Xx(s,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r);let a;this.type===s.SAMPLER_2D_SHADOW?(vf.compareFunction=cp,a=vf):a=pp,e.setTexture2D(t||a,r)}function qx(s,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||gp,r)}function Yx(s,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||_p,r)}function $x(s,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||mp,r)}function Kx(s){switch(s){case 5126:return Lx;case 35664:return Ix;case 35665:return Dx;case 35666:return Nx;case 35674:return kx;case 35675:return Ox;case 35676:return Ux;case 5124:case 35670:return Bx;case 35667:case 35671:return Fx;case 35668:case 35672:return zx;case 35669:case 35673:return Hx;case 5125:return Vx;case 36294:return Gx;case 36295:return Wx;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return $x}}function Jx(s,t){s.uniform1fv(this.addr,t)}function jx(s,t){let e=Ar(t,this.size,2);s.uniform2fv(this.addr,e)}function Qx(s,t){let e=Ar(t,this.size,3);s.uniform3fv(this.addr,e)}function ty(s,t){let e=Ar(t,this.size,4);s.uniform4fv(this.addr,e)}function ey(s,t){let e=Ar(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function ny(s,t){let e=Ar(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function iy(s,t){let e=Ar(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function sy(s,t){s.uniform1iv(this.addr,t)}function ry(s,t){s.uniform2iv(this.addr,t)}function oy(s,t){s.uniform3iv(this.addr,t)}function ay(s,t){s.uniform4iv(this.addr,t)}function ly(s,t){s.uniform1uiv(this.addr,t)}function cy(s,t){s.uniform2uiv(this.addr,t)}function hy(s,t){s.uniform3uiv(this.addr,t)}function uy(s,t){s.uniform4uiv(this.addr,t)}function dy(s,t,e){let n=this.cache,r=t.length,a=bl(e,r);Ke(n,a)||(s.uniform1iv(this.addr,a),Je(n,a));for(let l=0;l!==r;++l)e.setTexture2D(t[l]||pp,a[l])}function fy(s,t,e){let n=this.cache,r=t.length,a=bl(e,r);Ke(n,a)||(s.uniform1iv(this.addr,a),Je(n,a));for(let l=0;l!==r;++l)e.setTexture3D(t[l]||gp,a[l])}function py(s,t,e){let n=this.cache,r=t.length,a=bl(e,r);Ke(n,a)||(s.uniform1iv(this.addr,a),Je(n,a));for(let l=0;l!==r;++l)e.setTextureCube(t[l]||_p,a[l])}function my(s,t,e){let n=this.cache,r=t.length,a=bl(e,r);Ke(n,a)||(s.uniform1iv(this.addr,a),Je(n,a));for(let l=0;l!==r;++l)e.setTexture2DArray(t[l]||mp,a[l])}function gy(s){switch(s){case 5126:return Jx;case 35664:return jx;case 35665:return Qx;case 35666:return ty;case 35674:return ey;case 35675:return ny;case 35676:return iy;case 5124:case 35670:return sy;case 35667:case 35671:return ry;case 35668:case 35672:return oy;case 35669:case 35673:return ay;case 5125:return ly;case 36294:return cy;case 36295:return hy;case 36296:return uy;case 35678:case 36198:case 36298:case 36306:case 35682:return dy;case 35679:case 36299:case 36307:return fy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return my}}var Uh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kx(e.type)}},Bh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gy(e.type)}},Fh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let a=0,l=r.length;a!==l;++a){let h=r[a];h.setValue(t,e[h.id],n)}}},Fc=/(\w+)(\])?(\[|\.)?/g;function wf(s,t){s.seq.push(t),s.map[t.id]=t}function _y(s,t,e){let n=s.name,r=n.length;for(Fc.lastIndex=0;;){let a=Fc.exec(n),l=Fc.lastIndex,h=a[1],u=a[2]==="]",f=a[3];if(u&&(h=h|0),f===void 0||f==="["&&l+2===r){wf(e,f===void 0?new Uh(h,s,t):new Bh(h,s,t));break}else{let d=e.map[h];d===void 0&&(d=new Fh(h),wf(e,d)),e=d}}}var _r=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),l=t.getUniformLocation(e,a.name);_y(a,l,this)}}setValue(t,e,n,r){let a=this.map[e];a!==void 0&&a.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let a=0,l=e.length;a!==l;++a){let h=e[a],u=n[h.id];u.needsUpdate!==!1&&h.setValue(t,u.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,a=t.length;r!==a;++r){let l=t[r];l.id in e&&n.push(l)}return n}};function Tf(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var vy=37297,xy=0;function yy(s,t){let e=s.split(`
`),n=[],r=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let l=r;l<a;l++){let h=l+1;n.push(`${h===t?">":" "} ${h}: ${e[l]}`)}return n.join(`
`)}var Ef=new he;function by(s){Te._getMatrix(Ef,Te.workingColorSpace,s);let t=`mat3( ${Ef.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(s)){case vl:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Af(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=s.getShaderInfoLog(t).trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+yy(s.getShaderSource(t),l)}else return r}function My(s,t){let e=by(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sy(s,t){let e;switch(t){case Ng:e="Linear";break;case kg:e="Reinhard";break;case Og:e="Cineon";break;case Ug:e="ACESFilmic";break;case Fg:e="AgX";break;case zg:e="Neutral";break;case Bg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var va=new H;function wy(){Te.getLuminanceCoefficients(va);let s=va.x.toFixed(4),t=va.y.toFixed(4),e=va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ty(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function Ey(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ay(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let a=s.getActiveAttrib(t,r),l=a.name,h=1;a.type===s.FLOAT_MAT2&&(h=2),a.type===s.FLOAT_MAT3&&(h=3),a.type===s.FLOAT_MAT4&&(h=4),e[l]={type:a.type,location:s.getAttribLocation(t,l),locationSize:h}}return e}function ao(s){return s!==""}function Pf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Py=/^[ \t]*#include +<([\w\d./]+)>/gm;function zh(s){return s.replace(Py,Cy)}var Ry=new Map;function Cy(s,t){let e=ue[t];if(e===void 0){let n=Ry.get(t);if(n!==void 0)e=ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return zh(e)}var Ly=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cf(s){return s.replace(Ly,Iy)}function Iy(s,t,e,n){let r="";for(let a=parseInt(t);a<parseInt(e);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Lf(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Dy(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===$f?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===fg?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(t="SHADOWMAP_TYPE_VSM"),t}function Ny(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case xr:case yr:t="ENVMAP_TYPE_CUBE";break;case _l:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ky(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case yr:t="ENVMAP_MODE_REFRACTION";break}return t}function Oy(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Kf:t="ENVMAP_BLENDING_MULTIPLY";break;case Ig:t="ENVMAP_BLENDING_MIX";break;case Dg:t="ENVMAP_BLENDING_ADD";break}return t}function Uy(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function By(s,t,e,n){let r=s.getContext(),a=e.defines,l=e.vertexShader,h=e.fragmentShader,u=Dy(e),f=Ny(e),p=ky(e),d=Oy(e),_=Uy(e),g=Ty(e),y=Ey(a),S=r.createProgram(),x,v,P=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ao).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ao).join(`
`),v.length>0&&(v+=`
`)):(x=[Lf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),v=[Lf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",e.envMap?"#define "+d:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ns?"#define TONE_MAPPING":"",e.toneMapping!==ns?ue.tonemapping_pars_fragment:"",e.toneMapping!==ns?Sy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,My("linearToOutputTexel",e.outputColorSpace),wy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ao).join(`
`)),l=zh(l),l=Pf(l,e),l=Rf(l,e),h=zh(h),h=Pf(h,e),h=Rf(h,e),l=Cf(l),h=Cf(h),e.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",e.glslVersion===Gd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let w=P+x+l,T=P+v+h,O=Tf(r,r.VERTEX_SHADER,w),C=Tf(r,r.FRAGMENT_SHADER,T);r.attachShader(S,O),r.attachShader(S,C),e.index0AttributeName!==void 0?r.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function I(B){if(s.debug.checkShaderErrors){let Y=r.getProgramInfoLog(S).trim(),K=r.getShaderInfoLog(O).trim(),X=r.getShaderInfoLog(C).trim(),et=!0,V=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(et=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,S,O,C);else{let ft=Af(r,O,"vertex"),G=Af(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+Y+`
`+ft+`
`+G)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(K===""||X==="")&&(V=!1);V&&(B.diagnostics={runnable:et,programLog:Y,vertexShader:{log:K,prefix:x},fragmentShader:{log:X,prefix:v}})}r.deleteShader(O),r.deleteShader(C),k=new _r(r,S),E=Ay(r,S)}let k;this.getUniforms=function(){return k===void 0&&I(this),k};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(S,vy)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xy++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=O,this.fragmentShader=C,this}var Fy=0,Hh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(t);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Vh(t),e.set(t,n)),n}},Vh=class{constructor(t){this.id=Fy++,this.code=t,this.usedTimes=0}};function zy(s,t,e,n,r,a,l){let h=new Va,u=new Hh,f=new Set,p=[],d=r.logarithmicDepthBuffer,_=r.vertexTextures,g=r.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return f.add(E),E===0?"uv":`uv${E}`}function x(E,A,B,Y,K){let X=Y.fog,et=K.geometry,V=E.isMeshStandardMaterial?Y.environment:null,ft=(E.isMeshStandardMaterial?e:t).get(E.envMap||V),G=ft&&ft.mapping===_l?ft.image.height:null,ht=y[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));let xt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,lt=xt!==void 0?xt.length:0,pt=0;et.morphAttributes.position!==void 0&&(pt=1),et.morphAttributes.normal!==void 0&&(pt=2),et.morphAttributes.color!==void 0&&(pt=3);let Et,$,W,ot;if(ht){let Ae=Mn[ht];Et=Ae.vertexShader,$=Ae.fragmentShader}else Et=E.vertexShader,$=E.fragmentShader,u.update(E),W=u.getVertexShaderID(E),ot=u.getFragmentShaderID(E);let Z=s.getRenderTarget(),_t=s.state.buffers.depth.getReversed(),dt=K.isInstancedMesh===!0,nt=K.isBatchedMesh===!0,wt=!!E.map,Ft=!!E.matcap,Mt=!!ft,z=!!E.aoMap,Gt=!!E.lightMap,Jt=!!E.bumpMap,kt=!!E.normalMap,zt=!!E.displacementMap,_e=!!E.emissiveMap,Kt=!!E.metalnessMap,U=!!E.roughnessMap,D=E.anisotropy>0,it=E.clearcoat>0,mt=E.dispersion>0,yt=E.iridescence>0,ut=E.sheen>0,qt=E.transmission>0,Rt=D&&!!E.anisotropyMap,Ut=it&&!!E.clearcoatMap,ve=it&&!!E.clearcoatNormalMap,St=it&&!!E.clearcoatRoughnessMap,Bt=yt&&!!E.iridescenceMap,te=yt&&!!E.iridescenceThicknessMap,se=ut&&!!E.sheenColorMap,Ot=ut&&!!E.sheenRoughnessMap,ge=!!E.specularMap,le=!!E.specularColorMap,Re=!!E.specularIntensityMap,q=qt&&!!E.transmissionMap,Pt=qt&&!!E.thicknessMap,ct=!!E.gradientMap,gt=!!E.alphaMap,It=E.alphaTest>0,Ct=!!E.alphaHash,ae=!!E.extensions,ze=ns;E.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ze=s.toneMapping);let Xe={shaderID:ht,shaderType:E.type,shaderName:E.name,vertexShader:Et,fragmentShader:$,defines:E.defines,customVertexShaderID:W,customFragmentShaderID:ot,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:nt,batchingColor:nt&&K._colorsTexture!==null,instancing:dt,instancingColor:dt&&K.instanceColor!==null,instancingMorph:dt&&K.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Er,alphaToCoverage:!!E.alphaToCoverage,map:wt,matcap:Ft,envMap:Mt,envMapMode:Mt&&ft.mapping,envMapCubeUVHeight:G,aoMap:z,lightMap:Gt,bumpMap:Jt,normalMap:kt,displacementMap:_&&zt,emissiveMap:_e,normalMapObjectSpace:kt&&E.normalMapType===Wg,normalMapTangentSpace:kt&&E.normalMapType===lp,metalnessMap:Kt,roughnessMap:U,anisotropy:D,anisotropyMap:Rt,clearcoat:it,clearcoatMap:Ut,clearcoatNormalMap:ve,clearcoatRoughnessMap:St,dispersion:mt,iridescence:yt,iridescenceMap:Bt,iridescenceThicknessMap:te,sheen:ut,sheenColorMap:se,sheenRoughnessMap:Ot,specularMap:ge,specularColorMap:le,specularIntensityMap:Re,transmission:qt,transmissionMap:q,thicknessMap:Pt,gradientMap:ct,opaque:E.transparent===!1&&E.blending===fr&&E.alphaToCoverage===!1,alphaMap:gt,alphaTest:It,alphaHash:Ct,combine:E.combine,mapUv:wt&&S(E.map.channel),aoMapUv:z&&S(E.aoMap.channel),lightMapUv:Gt&&S(E.lightMap.channel),bumpMapUv:Jt&&S(E.bumpMap.channel),normalMapUv:kt&&S(E.normalMap.channel),displacementMapUv:zt&&S(E.displacementMap.channel),emissiveMapUv:_e&&S(E.emissiveMap.channel),metalnessMapUv:Kt&&S(E.metalnessMap.channel),roughnessMapUv:U&&S(E.roughnessMap.channel),anisotropyMapUv:Rt&&S(E.anisotropyMap.channel),clearcoatMapUv:Ut&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:ve&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:te&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:se&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&S(E.sheenRoughnessMap.channel),specularMapUv:ge&&S(E.specularMap.channel),specularColorMapUv:le&&S(E.specularColorMap.channel),specularIntensityMapUv:Re&&S(E.specularIntensityMap.channel),transmissionMapUv:q&&S(E.transmissionMap.channel),thicknessMapUv:Pt&&S(E.thicknessMap.channel),alphaMapUv:gt&&S(E.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(kt||D),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!et.attributes.uv&&(wt||gt),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:_t,skinning:K.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:pt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:ze,decodeVideoTexture:wt&&E.map.isVideoTexture===!0&&Te.getTransfer(E.map.colorSpace)===De,decodeVideoTextureEmissive:_e&&E.emissiveMap.isVideoTexture===!0&&Te.getTransfer(E.emissiveMap.colorSpace)===De,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Hn,flipSided:E.side===gn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ae&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&E.extensions.multiDraw===!0||nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Xe.vertexUv1s=f.has(1),Xe.vertexUv2s=f.has(2),Xe.vertexUv3s=f.has(3),f.clear(),Xe}function v(E){let A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(let B in E.defines)A.push(B),A.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(P(A,E),w(A,E),A.push(s.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function P(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.numLightProbes),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function w(E,A){h.disableAll(),A.supportsVertexTextures&&h.enable(0),A.instancing&&h.enable(1),A.instancingColor&&h.enable(2),A.instancingMorph&&h.enable(3),A.matcap&&h.enable(4),A.envMap&&h.enable(5),A.normalMapObjectSpace&&h.enable(6),A.normalMapTangentSpace&&h.enable(7),A.clearcoat&&h.enable(8),A.iridescence&&h.enable(9),A.alphaTest&&h.enable(10),A.vertexColors&&h.enable(11),A.vertexAlphas&&h.enable(12),A.vertexUv1s&&h.enable(13),A.vertexUv2s&&h.enable(14),A.vertexUv3s&&h.enable(15),A.vertexTangents&&h.enable(16),A.anisotropy&&h.enable(17),A.alphaHash&&h.enable(18),A.batching&&h.enable(19),A.dispersion&&h.enable(20),A.batchingColor&&h.enable(21),E.push(h.mask),h.disableAll(),A.fog&&h.enable(0),A.useFog&&h.enable(1),A.flatShading&&h.enable(2),A.logarithmicDepthBuffer&&h.enable(3),A.reverseDepthBuffer&&h.enable(4),A.skinning&&h.enable(5),A.morphTargets&&h.enable(6),A.morphNormals&&h.enable(7),A.morphColors&&h.enable(8),A.premultipliedAlpha&&h.enable(9),A.shadowMapEnabled&&h.enable(10),A.doubleSided&&h.enable(11),A.flipSided&&h.enable(12),A.useDepthPacking&&h.enable(13),A.dithering&&h.enable(14),A.transmission&&h.enable(15),A.sheen&&h.enable(16),A.opaque&&h.enable(17),A.pointsUvs&&h.enable(18),A.decodeVideoTexture&&h.enable(19),A.decodeVideoTextureEmissive&&h.enable(20),A.alphaToCoverage&&h.enable(21),E.push(h.mask)}function T(E){let A=y[E.type],B;if(A){let Y=Mn[A];B=yl.clone(Y.uniforms)}else B=E.uniforms;return B}function O(E,A){let B;for(let Y=0,K=p.length;Y<K;Y++){let X=p[Y];if(X.cacheKey===A){B=X,++B.usedTimes;break}}return B===void 0&&(B=new By(s,A,E,a),p.push(B)),B}function C(E){if(--E.usedTimes===0){let A=p.indexOf(E);p[A]=p[p.length-1],p.pop(),E.destroy()}}function I(E){u.remove(E)}function k(){u.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:T,acquireProgram:O,releaseProgram:C,releaseShaderCache:I,programs:p,dispose:k}}function Hy(){let s=new WeakMap;function t(l){return s.has(l)}function e(l){let h=s.get(l);return h===void 0&&(h={},s.set(l,h)),h}function n(l){s.delete(l)}function r(l,h,u){s.get(l)[h]=u}function a(){s=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:a}}function Vy(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function If(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Df(){let s=[],t=0,e=[],n=[],r=[];function a(){t=0,e.length=0,n.length=0,r.length=0}function l(d,_,g,y,S,x){let v=s[t];return v===void 0?(v={id:d.id,object:d,geometry:_,material:g,groupOrder:y,renderOrder:d.renderOrder,z:S,group:x},s[t]=v):(v.id=d.id,v.object=d,v.geometry=_,v.material=g,v.groupOrder=y,v.renderOrder=d.renderOrder,v.z=S,v.group=x),t++,v}function h(d,_,g,y,S,x){let v=l(d,_,g,y,S,x);g.transmission>0?n.push(v):g.transparent===!0?r.push(v):e.push(v)}function u(d,_,g,y,S,x){let v=l(d,_,g,y,S,x);g.transmission>0?n.unshift(v):g.transparent===!0?r.unshift(v):e.unshift(v)}function f(d,_){e.length>1&&e.sort(d||Vy),n.length>1&&n.sort(_||If),r.length>1&&r.sort(_||If)}function p(){for(let d=t,_=s.length;d<_;d++){let g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:a,push:h,unshift:u,finish:p,sort:f}}function Gy(){let s=new WeakMap;function t(n,r){let a=s.get(n),l;return a===void 0?(l=new Df,s.set(n,[l])):r>=a.length?(l=new Df,a.push(l)):l=a[r],l}function e(){s=new WeakMap}return{get:t,dispose:e}}function Wy(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new me};break;case"SpotLight":e={position:new H,direction:new H,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new me,groundColor:new me};break;case"RectAreaLight":e={color:new me,position:new H,halfWidth:new H,halfHeight:new H};break}return s[t.id]=e,e}}}function Zy(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Xy=0;function qy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Yy(s){let t=new Wy,e=Zy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new H);let r=new H,a=new Fe,l=new Fe;function h(f){let p=0,d=0,_=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let g=0,y=0,S=0,x=0,v=0,P=0,w=0,T=0,O=0,C=0,I=0;f.sort(qy);for(let E=0,A=f.length;E<A;E++){let B=f[E],Y=B.color,K=B.intensity,X=B.distance,et=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=Y.r*K,d+=Y.g*K,_+=Y.b*K;else if(B.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(B.sh.coefficients[V],K);I++}else if(B.isDirectionalLight){let V=t.get(B);if(V.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let ft=B.shadow,G=e.get(B);G.shadowIntensity=ft.intensity,G.shadowBias=ft.bias,G.shadowNormalBias=ft.normalBias,G.shadowRadius=ft.radius,G.shadowMapSize=ft.mapSize,n.directionalShadow[g]=G,n.directionalShadowMap[g]=et,n.directionalShadowMatrix[g]=B.shadow.matrix,P++}n.directional[g]=V,g++}else if(B.isSpotLight){let V=t.get(B);V.position.setFromMatrixPosition(B.matrixWorld),V.color.copy(Y).multiplyScalar(K),V.distance=X,V.coneCos=Math.cos(B.angle),V.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),V.decay=B.decay,n.spot[S]=V;let ft=B.shadow;if(B.map&&(n.spotLightMap[O]=B.map,O++,ft.updateMatrices(B),B.castShadow&&C++),n.spotLightMatrix[S]=ft.matrix,B.castShadow){let G=e.get(B);G.shadowIntensity=ft.intensity,G.shadowBias=ft.bias,G.shadowNormalBias=ft.normalBias,G.shadowRadius=ft.radius,G.shadowMapSize=ft.mapSize,n.spotShadow[S]=G,n.spotShadowMap[S]=et,T++}S++}else if(B.isRectAreaLight){let V=t.get(B);V.color.copy(Y).multiplyScalar(K),V.halfWidth.set(B.width*.5,0,0),V.halfHeight.set(0,B.height*.5,0),n.rectArea[x]=V,x++}else if(B.isPointLight){let V=t.get(B);if(V.color.copy(B.color).multiplyScalar(B.intensity),V.distance=B.distance,V.decay=B.decay,B.castShadow){let ft=B.shadow,G=e.get(B);G.shadowIntensity=ft.intensity,G.shadowBias=ft.bias,G.shadowNormalBias=ft.normalBias,G.shadowRadius=ft.radius,G.shadowMapSize=ft.mapSize,G.shadowCameraNear=ft.camera.near,G.shadowCameraFar=ft.camera.far,n.pointShadow[y]=G,n.pointShadowMap[y]=et,n.pointShadowMatrix[y]=B.shadow.matrix,w++}n.point[y]=V,y++}else if(B.isHemisphereLight){let V=t.get(B);V.skyColor.copy(B.color).multiplyScalar(K),V.groundColor.copy(B.groundColor).multiplyScalar(K),n.hemi[v]=V,v++}}x>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=d,n.ambient[2]=_;let k=n.hash;(k.directionalLength!==g||k.pointLength!==y||k.spotLength!==S||k.rectAreaLength!==x||k.hemiLength!==v||k.numDirectionalShadows!==P||k.numPointShadows!==w||k.numSpotShadows!==T||k.numSpotMaps!==O||k.numLightProbes!==I)&&(n.directional.length=g,n.spot.length=S,n.rectArea.length=x,n.point.length=y,n.hemi.length=v,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=P,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=T+O-C,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=I,k.directionalLength=g,k.pointLength=y,k.spotLength=S,k.rectAreaLength=x,k.hemiLength=v,k.numDirectionalShadows=P,k.numPointShadows=w,k.numSpotShadows=T,k.numSpotMaps=O,k.numLightProbes=I,n.version=Xy++)}function u(f,p){let d=0,_=0,g=0,y=0,S=0,x=p.matrixWorldInverse;for(let v=0,P=f.length;v<P;v++){let w=f[v];if(w.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(x),d++}else if(w.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(x),g++}else if(w.isRectAreaLight){let T=n.rectArea[y];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),l.identity(),a.copy(w.matrixWorld),a.premultiply(x),l.extractRotation(a),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(l),T.halfHeight.applyMatrix4(l),y++}else if(w.isPointLight){let T=n.point[_];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),_++}else if(w.isHemisphereLight){let T=n.hemi[S];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(x),S++}}}return{setup:h,setupView:u,state:n}}function Nf(s){let t=new Yy(s),e=[],n=[];function r(p){f.camera=p,e.length=0,n.length=0}function a(p){e.push(p)}function l(p){n.push(p)}function h(){t.setup(e)}function u(p){t.setupView(e,p)}let f={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:h,setupLightsView:u,pushLight:a,pushShadow:l}}function $y(s){let t=new WeakMap;function e(r,a=0){let l=t.get(r),h;return l===void 0?(h=new Nf(s),t.set(r,[h])):a>=l.length?(h=new Nf(s),l.push(h)):h=l[a],h}function n(){t=new WeakMap}return{get:e,dispose:n}}var Gh=class extends yi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wh=class extends yi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ky=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jy=`uniform sampler2D shadow_pass;
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
}`;function jy(s,t,e){let n=new fo,r=new $t,a=new $t,l=new Ne,h=new Gh({depthPacking:Gg}),u=new Wh,f={},p=e.maxTextureSize,d={[is]:gn,[gn]:is,[Hn]:Hn},_=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:Ky,fragmentShader:Jy}),g=_.clone();g.defines.HORIZONTAL_PASS=1;let y=new Ge;y.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Be(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$f;let v=this.type;this.render=function(C,I,k){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;let E=s.getRenderTarget(),A=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(es),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let K=v!==ki&&this.type===ki,X=v===ki&&this.type!==ki;for(let et=0,V=C.length;et<V;et++){let ft=C[et],G=ft.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ft,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let ht=G.getFrameExtents();if(r.multiply(ht),a.copy(G.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/ht.x),r.x=a.x*ht.x,G.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/ht.y),r.y=a.y*ht.y,G.mapSize.y=a.y)),G.map===null||K===!0||X===!0){let lt=this.type!==ki?{minFilter:ri,magFilter:ri}:{};G.map!==null&&G.map.dispose(),G.map=new Wi(r.x,r.y,lt),G.map.texture.name=ft.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();let xt=G.getViewportCount();for(let lt=0;lt<xt;lt++){let pt=G.getViewport(lt);l.set(a.x*pt.x,a.y*pt.y,a.x*pt.z,a.y*pt.w),Y.viewport(l),G.updateMatrices(ft,lt),n=G.getFrustum(),T(I,k,G.camera,ft,this.type)}G.isPointLightShadow!==!0&&this.type===ki&&P(G,k),G.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(E,A,B)};function P(C,I){let k=t.update(S);_.defines.VSM_SAMPLES!==C.blurSamples&&(_.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,_.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Wi(r.x,r.y)),_.uniforms.shadow_pass.value=C.map.texture,_.uniforms.resolution.value=C.mapSize,_.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(I,null,k,_,S,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(I,null,k,g,S,null)}function w(C,I,k,E){let A=null,B=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(B!==void 0)A=B;else if(A=k.isPointLight===!0?u:h,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let Y=A.uuid,K=I.uuid,X=f[Y];X===void 0&&(X={},f[Y]=X);let et=X[K];et===void 0&&(et=A.clone(),X[K]=et,I.addEventListener("dispose",O)),A=et}if(A.visible=I.visible,A.wireframe=I.wireframe,E===ki?A.side=I.shadowSide!==null?I.shadowSide:I.side:A.side=I.shadowSide!==null?I.shadowSide:d[I.side],A.alphaMap=I.alphaMap,A.alphaTest=I.alphaTest,A.map=I.map,A.clipShadows=I.clipShadows,A.clippingPlanes=I.clippingPlanes,A.clipIntersection=I.clipIntersection,A.displacementMap=I.displacementMap,A.displacementScale=I.displacementScale,A.displacementBias=I.displacementBias,A.wireframeLinewidth=I.wireframeLinewidth,A.linewidth=I.linewidth,k.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let Y=s.properties.get(A);Y.light=k}return A}function T(C,I,k,E,A){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===ki)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);let K=t.update(C),X=C.material;if(Array.isArray(X)){let et=K.groups;for(let V=0,ft=et.length;V<ft;V++){let G=et[V],ht=X[G.materialIndex];if(ht&&ht.visible){let xt=w(C,ht,E,A);C.onBeforeShadow(s,C,I,k,K,xt,G),s.renderBufferDirect(k,null,K,xt,C,G),C.onAfterShadow(s,C,I,k,K,xt,G)}}}else if(X.visible){let et=w(C,X,E,A);C.onBeforeShadow(s,C,I,k,K,et,null),s.renderBufferDirect(k,null,K,et,C,null),C.onAfterShadow(s,C,I,k,K,et,null)}}let Y=C.children;for(let K=0,X=Y.length;K<X;K++)T(Y[K],I,k,E,A)}function O(C){C.target.removeEventListener("dispose",O);for(let k in f){let E=f[k],A=C.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}var Qy={[qc]:Yc,[$c]:jc,[Kc]:Qc,[vr]:Jc,[Yc]:qc,[jc]:$c,[Qc]:Kc,[Jc]:vr};function tb(s,t){function e(){let q=!1,Pt=new Ne,ct=null,gt=new Ne(0,0,0,0);return{setMask:function(It){ct!==It&&!q&&(s.colorMask(It,It,It,It),ct=It)},setLocked:function(It){q=It},setClear:function(It,Ct,ae,ze,Xe){Xe===!0&&(It*=ze,Ct*=ze,ae*=ze),Pt.set(It,Ct,ae,ze),gt.equals(Pt)===!1&&(s.clearColor(It,Ct,ae,ze),gt.copy(Pt))},reset:function(){q=!1,ct=null,gt.set(-1,0,0,0)}}}function n(){let q=!1,Pt=!1,ct=null,gt=null,It=null;return{setReversed:function(Ct){if(Pt!==Ct){let ae=t.get("EXT_clip_control");Pt?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT);let ze=It;It=null,this.setClear(ze)}Pt=Ct},getReversed:function(){return Pt},setTest:function(Ct){Ct?Z(s.DEPTH_TEST):_t(s.DEPTH_TEST)},setMask:function(Ct){ct!==Ct&&!q&&(s.depthMask(Ct),ct=Ct)},setFunc:function(Ct){if(Pt&&(Ct=Qy[Ct]),gt!==Ct){switch(Ct){case qc:s.depthFunc(s.NEVER);break;case Yc:s.depthFunc(s.ALWAYS);break;case $c:s.depthFunc(s.LESS);break;case vr:s.depthFunc(s.LEQUAL);break;case Kc:s.depthFunc(s.EQUAL);break;case Jc:s.depthFunc(s.GEQUAL);break;case jc:s.depthFunc(s.GREATER);break;case Qc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=Ct}},setLocked:function(Ct){q=Ct},setClear:function(Ct){It!==Ct&&(Pt&&(Ct=1-Ct),s.clearDepth(Ct),It=Ct)},reset:function(){q=!1,ct=null,gt=null,It=null,Pt=!1}}}function r(){let q=!1,Pt=null,ct=null,gt=null,It=null,Ct=null,ae=null,ze=null,Xe=null;return{setTest:function(Ae){q||(Ae?Z(s.STENCIL_TEST):_t(s.STENCIL_TEST))},setMask:function(Ae){Pt!==Ae&&!q&&(s.stencilMask(Ae),Pt=Ae)},setFunc:function(Ae,En,Yn){(ct!==Ae||gt!==En||It!==Yn)&&(s.stencilFunc(Ae,En,Yn),ct=Ae,gt=En,It=Yn)},setOp:function(Ae,En,Yn){(Ct!==Ae||ae!==En||ze!==Yn)&&(s.stencilOp(Ae,En,Yn),Ct=Ae,ae=En,ze=Yn)},setLocked:function(Ae){q=Ae},setClear:function(Ae){Xe!==Ae&&(s.clearStencil(Ae),Xe=Ae)},reset:function(){q=!1,Pt=null,ct=null,gt=null,It=null,Ct=null,ae=null,ze=null,Xe=null}}}let a=new e,l=new n,h=new r,u=new WeakMap,f=new WeakMap,p={},d={},_=new WeakMap,g=[],y=null,S=!1,x=null,v=null,P=null,w=null,T=null,O=null,C=null,I=new me(0,0,0),k=0,E=!1,A=null,B=null,Y=null,K=null,X=null,et=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ft=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=ft>=1):G.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=ft>=2);let ht=null,xt={},lt=s.getParameter(s.SCISSOR_BOX),pt=s.getParameter(s.VIEWPORT),Et=new Ne().fromArray(lt),$=new Ne().fromArray(pt);function W(q,Pt,ct,gt){let It=new Uint8Array(4),Ct=s.createTexture();s.bindTexture(q,Ct),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ae=0;ae<ct;ae++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Pt,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,It):s.texImage2D(Pt+ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,It);return Ct}let ot={};ot[s.TEXTURE_2D]=W(s.TEXTURE_2D,s.TEXTURE_2D,1),ot[s.TEXTURE_CUBE_MAP]=W(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[s.TEXTURE_2D_ARRAY]=W(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ot[s.TEXTURE_3D]=W(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),h.setClear(0),Z(s.DEPTH_TEST),l.setFunc(vr),Jt(!1),kt(kd),Z(s.CULL_FACE),z(es);function Z(q){p[q]!==!0&&(s.enable(q),p[q]=!0)}function _t(q){p[q]!==!1&&(s.disable(q),p[q]=!1)}function dt(q,Pt){return d[q]!==Pt?(s.bindFramebuffer(q,Pt),d[q]=Pt,q===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Pt),q===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Pt),!0):!1}function nt(q,Pt){let ct=g,gt=!1;if(q){ct=_.get(Pt),ct===void 0&&(ct=[],_.set(Pt,ct));let It=q.textures;if(ct.length!==It.length||ct[0]!==s.COLOR_ATTACHMENT0){for(let Ct=0,ae=It.length;Ct<ae;Ct++)ct[Ct]=s.COLOR_ATTACHMENT0+Ct;ct.length=It.length,gt=!0}}else ct[0]!==s.BACK&&(ct[0]=s.BACK,gt=!0);gt&&s.drawBuffers(ct)}function wt(q){return y!==q?(s.useProgram(q),y=q,!0):!1}let Ft={[bs]:s.FUNC_ADD,[mg]:s.FUNC_SUBTRACT,[gg]:s.FUNC_REVERSE_SUBTRACT};Ft[_g]=s.MIN,Ft[vg]=s.MAX;let Mt={[xg]:s.ZERO,[yg]:s.ONE,[bg]:s.SRC_COLOR,[Zc]:s.SRC_ALPHA,[Ag]:s.SRC_ALPHA_SATURATE,[Tg]:s.DST_COLOR,[Sg]:s.DST_ALPHA,[Mg]:s.ONE_MINUS_SRC_COLOR,[Xc]:s.ONE_MINUS_SRC_ALPHA,[Eg]:s.ONE_MINUS_DST_COLOR,[wg]:s.ONE_MINUS_DST_ALPHA,[Pg]:s.CONSTANT_COLOR,[Rg]:s.ONE_MINUS_CONSTANT_COLOR,[Cg]:s.CONSTANT_ALPHA,[Lg]:s.ONE_MINUS_CONSTANT_ALPHA};function z(q,Pt,ct,gt,It,Ct,ae,ze,Xe,Ae){if(q===es){S===!0&&(_t(s.BLEND),S=!1);return}if(S===!1&&(Z(s.BLEND),S=!0),q!==pg){if(q!==x||Ae!==E){if((v!==bs||T!==bs)&&(s.blendEquation(s.FUNC_ADD),v=bs,T=bs),Ae)switch(q){case fr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Od:s.blendFunc(s.ONE,s.ONE);break;case Ud:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case fr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Od:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ud:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}P=null,w=null,O=null,C=null,I.set(0,0,0),k=0,x=q,E=Ae}return}It=It||Pt,Ct=Ct||ct,ae=ae||gt,(Pt!==v||It!==T)&&(s.blendEquationSeparate(Ft[Pt],Ft[It]),v=Pt,T=It),(ct!==P||gt!==w||Ct!==O||ae!==C)&&(s.blendFuncSeparate(Mt[ct],Mt[gt],Mt[Ct],Mt[ae]),P=ct,w=gt,O=Ct,C=ae),(ze.equals(I)===!1||Xe!==k)&&(s.blendColor(ze.r,ze.g,ze.b,Xe),I.copy(ze),k=Xe),x=q,E=!1}function Gt(q,Pt){q.side===Hn?_t(s.CULL_FACE):Z(s.CULL_FACE);let ct=q.side===gn;Pt&&(ct=!ct),Jt(ct),q.blending===fr&&q.transparent===!1?z(es):z(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),l.setFunc(q.depthFunc),l.setTest(q.depthTest),l.setMask(q.depthWrite),a.setMask(q.colorWrite);let gt=q.stencilWrite;h.setTest(gt),gt&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),_e(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):_t(s.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(q){A!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),A=q)}function kt(q){q!==ug?(Z(s.CULL_FACE),q!==B&&(q===kd?s.cullFace(s.BACK):q===dg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_t(s.CULL_FACE),B=q}function zt(q){q!==Y&&(V&&s.lineWidth(q),Y=q)}function _e(q,Pt,ct){q?(Z(s.POLYGON_OFFSET_FILL),(K!==Pt||X!==ct)&&(s.polygonOffset(Pt,ct),K=Pt,X=ct)):_t(s.POLYGON_OFFSET_FILL)}function Kt(q){q?Z(s.SCISSOR_TEST):_t(s.SCISSOR_TEST)}function U(q){q===void 0&&(q=s.TEXTURE0+et-1),ht!==q&&(s.activeTexture(q),ht=q)}function D(q,Pt,ct){ct===void 0&&(ht===null?ct=s.TEXTURE0+et-1:ct=ht);let gt=xt[ct];gt===void 0&&(gt={type:void 0,texture:void 0},xt[ct]=gt),(gt.type!==q||gt.texture!==Pt)&&(ht!==ct&&(s.activeTexture(ct),ht=ct),s.bindTexture(q,Pt||ot[q]),gt.type=q,gt.texture=Pt)}function it(){let q=xt[ht];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function mt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function yt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ut(){try{s.texSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function qt(){try{s.texSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ut(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ve(){try{s.texStorage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function St(){try{s.texStorage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Bt(){try{s.texImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function te(){try{s.texImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function se(q){Et.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),Et.copy(q))}function Ot(q){$.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),$.copy(q))}function ge(q,Pt){let ct=f.get(Pt);ct===void 0&&(ct=new WeakMap,f.set(Pt,ct));let gt=ct.get(q);gt===void 0&&(gt=s.getUniformBlockIndex(Pt,q.name),ct.set(q,gt))}function le(q,Pt){let gt=f.get(Pt).get(q);u.get(Pt)!==gt&&(s.uniformBlockBinding(Pt,gt,q.__bindingPointIndex),u.set(Pt,gt))}function Re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),l.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},ht=null,xt={},d={},_=new WeakMap,g=[],y=null,S=!1,x=null,v=null,P=null,w=null,T=null,O=null,C=null,I=new me(0,0,0),k=0,E=!1,A=null,B=null,Y=null,K=null,X=null,Et.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),h.reset()}return{buffers:{color:a,depth:l,stencil:h},enable:Z,disable:_t,bindFramebuffer:dt,drawBuffers:nt,useProgram:wt,setBlending:z,setMaterial:Gt,setFlipSided:Jt,setCullFace:kt,setLineWidth:zt,setPolygonOffset:_e,setScissorTest:Kt,activeTexture:U,bindTexture:D,unbindTexture:it,compressedTexImage2D:mt,compressedTexImage3D:yt,texImage2D:Bt,texImage3D:te,updateUBOMapping:ge,uniformBlockBinding:le,texStorage2D:ve,texStorage3D:St,texSubImage2D:ut,texSubImage3D:qt,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Ut,scissor:se,viewport:Ot,reset:Re}}function kf(s,t,e,n){let r=eb(n);switch(e){case ep:return s*t;case ip:return s*t;case sp:return s*t*2;case rp:return s*t/r.components*r.byteLength;case hu:return s*t/r.components*r.byteLength;case op:return s*t*2/r.components*r.byteLength;case uu:return s*t*2/r.components*r.byteLength;case np:return s*t*3/r.components*r.byteLength;case si:return s*t*4/r.components*r.byteLength;case du:return s*t*4/r.components*r.byteLength;case Ia:case Da:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Na:case ka:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case rh:case ah:return Math.max(s,16)*Math.max(t,8)/4;case sh:case oh:return Math.max(s,8)*Math.max(t,8)/2;case lh:case ch:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case hh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case uh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case dh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case fh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ph:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case mh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case gh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case _h:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case vh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case xh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case yh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case bh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Mh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Sh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case wh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Oa:case Th:case Eh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ap:case Ah:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ph:case Rh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function eb(s){switch(s){case Vi:case jf:return{byteLength:1,components:1};case ho:case Qf:case yo:return{byteLength:2,components:1};case lu:case cu:return{byteLength:2,components:4};case Ts:case au:case Ui:return{byteLength:4,components:1};case tp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function nb(s,t,e,n,r,a,l){let h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new $t,p=new WeakMap,d,_=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(U,D){return g?new OffscreenCanvas(U,D):Fa("canvas")}function S(U,D,it){let mt=1,yt=Kt(U);if((yt.width>it||yt.height>it)&&(mt=it/Math.max(yt.width,yt.height)),mt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let ut=Math.floor(mt*yt.width),qt=Math.floor(mt*yt.height);d===void 0&&(d=y(ut,qt));let Rt=D?y(ut,qt):d;return Rt.width=ut,Rt.height=qt,Rt.getContext("2d").drawImage(U,0,0,ut,qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ut+"x"+qt+")."),Rt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),U;return U}function x(U){return U.generateMipmaps}function v(U){s.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(U,D,it,mt,yt=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ut=D;if(D===s.RED&&(it===s.FLOAT&&(ut=s.R32F),it===s.HALF_FLOAT&&(ut=s.R16F),it===s.UNSIGNED_BYTE&&(ut=s.R8)),D===s.RED_INTEGER&&(it===s.UNSIGNED_BYTE&&(ut=s.R8UI),it===s.UNSIGNED_SHORT&&(ut=s.R16UI),it===s.UNSIGNED_INT&&(ut=s.R32UI),it===s.BYTE&&(ut=s.R8I),it===s.SHORT&&(ut=s.R16I),it===s.INT&&(ut=s.R32I)),D===s.RG&&(it===s.FLOAT&&(ut=s.RG32F),it===s.HALF_FLOAT&&(ut=s.RG16F),it===s.UNSIGNED_BYTE&&(ut=s.RG8)),D===s.RG_INTEGER&&(it===s.UNSIGNED_BYTE&&(ut=s.RG8UI),it===s.UNSIGNED_SHORT&&(ut=s.RG16UI),it===s.UNSIGNED_INT&&(ut=s.RG32UI),it===s.BYTE&&(ut=s.RG8I),it===s.SHORT&&(ut=s.RG16I),it===s.INT&&(ut=s.RG32I)),D===s.RGB_INTEGER&&(it===s.UNSIGNED_BYTE&&(ut=s.RGB8UI),it===s.UNSIGNED_SHORT&&(ut=s.RGB16UI),it===s.UNSIGNED_INT&&(ut=s.RGB32UI),it===s.BYTE&&(ut=s.RGB8I),it===s.SHORT&&(ut=s.RGB16I),it===s.INT&&(ut=s.RGB32I)),D===s.RGBA_INTEGER&&(it===s.UNSIGNED_BYTE&&(ut=s.RGBA8UI),it===s.UNSIGNED_SHORT&&(ut=s.RGBA16UI),it===s.UNSIGNED_INT&&(ut=s.RGBA32UI),it===s.BYTE&&(ut=s.RGBA8I),it===s.SHORT&&(ut=s.RGBA16I),it===s.INT&&(ut=s.RGBA32I)),D===s.RGB&&it===s.UNSIGNED_INT_5_9_9_9_REV&&(ut=s.RGB9_E5),D===s.RGBA){let qt=yt?vl:Te.getTransfer(mt);it===s.FLOAT&&(ut=s.RGBA32F),it===s.HALF_FLOAT&&(ut=s.RGBA16F),it===s.UNSIGNED_BYTE&&(ut=qt===De?s.SRGB8_ALPHA8:s.RGBA8),it===s.UNSIGNED_SHORT_4_4_4_4&&(ut=s.RGBA4),it===s.UNSIGNED_SHORT_5_5_5_1&&(ut=s.RGB5_A1)}return(ut===s.R16F||ut===s.R32F||ut===s.RG16F||ut===s.RG32F||ut===s.RGBA16F||ut===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function T(U,D){let it;return U?D===null||D===Ts||D===br?it=s.DEPTH24_STENCIL8:D===Ui?it=s.DEPTH32F_STENCIL8:D===ho&&(it=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===Ts||D===br?it=s.DEPTH_COMPONENT24:D===Ui?it=s.DEPTH_COMPONENT32F:D===ho&&(it=s.DEPTH_COMPONENT16),it}function O(U,D){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==ri&&U.minFilter!==Vn?Math.log2(Math.max(D.width,D.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?D.mipmaps.length:1}function C(U){let D=U.target;D.removeEventListener("dispose",C),k(D),D.isVideoTexture&&p.delete(D)}function I(U){let D=U.target;D.removeEventListener("dispose",I),A(D)}function k(U){let D=n.get(U);if(D.__webglInit===void 0)return;let it=U.source,mt=_.get(it);if(mt){let yt=mt[D.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&E(U),Object.keys(mt).length===0&&_.delete(it)}n.remove(U)}function E(U){let D=n.get(U);s.deleteTexture(D.__webglTexture);let it=U.source,mt=_.get(it);delete mt[D.__cacheKey],l.memory.textures--}function A(U){let D=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(D.__webglFramebuffer[mt]))for(let yt=0;yt<D.__webglFramebuffer[mt].length;yt++)s.deleteFramebuffer(D.__webglFramebuffer[mt][yt]);else s.deleteFramebuffer(D.__webglFramebuffer[mt]);D.__webglDepthbuffer&&s.deleteRenderbuffer(D.__webglDepthbuffer[mt])}else{if(Array.isArray(D.__webglFramebuffer))for(let mt=0;mt<D.__webglFramebuffer.length;mt++)s.deleteFramebuffer(D.__webglFramebuffer[mt]);else s.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&s.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&s.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let mt=0;mt<D.__webglColorRenderbuffer.length;mt++)D.__webglColorRenderbuffer[mt]&&s.deleteRenderbuffer(D.__webglColorRenderbuffer[mt]);D.__webglDepthRenderbuffer&&s.deleteRenderbuffer(D.__webglDepthRenderbuffer)}let it=U.textures;for(let mt=0,yt=it.length;mt<yt;mt++){let ut=n.get(it[mt]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),l.memory.textures--),n.remove(it[mt])}n.remove(U)}let B=0;function Y(){B=0}function K(){let U=B;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),B+=1,U}function X(U){let D=[];return D.push(U.wrapS),D.push(U.wrapT),D.push(U.wrapR||0),D.push(U.magFilter),D.push(U.minFilter),D.push(U.anisotropy),D.push(U.internalFormat),D.push(U.format),D.push(U.type),D.push(U.generateMipmaps),D.push(U.premultiplyAlpha),D.push(U.flipY),D.push(U.unpackAlignment),D.push(U.colorSpace),D.join()}function et(U,D){let it=n.get(U);if(U.isVideoTexture&&zt(U),U.isRenderTargetTexture===!1&&U.version>0&&it.__version!==U.version){let mt=U.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(it,U,D);return}}e.bindTexture(s.TEXTURE_2D,it.__webglTexture,s.TEXTURE0+D)}function V(U,D){let it=n.get(U);if(U.version>0&&it.__version!==U.version){$(it,U,D);return}e.bindTexture(s.TEXTURE_2D_ARRAY,it.__webglTexture,s.TEXTURE0+D)}function ft(U,D){let it=n.get(U);if(U.version>0&&it.__version!==U.version){$(it,U,D);return}e.bindTexture(s.TEXTURE_3D,it.__webglTexture,s.TEXTURE0+D)}function G(U,D){let it=n.get(U);if(U.version>0&&it.__version!==U.version){W(it,U,D);return}e.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture,s.TEXTURE0+D)}let ht={[nh]:s.REPEAT,[Ss]:s.CLAMP_TO_EDGE,[ih]:s.MIRRORED_REPEAT},xt={[ri]:s.NEAREST,[Hg]:s.NEAREST_MIPMAP_NEAREST,[jo]:s.NEAREST_MIPMAP_LINEAR,[Vn]:s.LINEAR,[dc]:s.LINEAR_MIPMAP_NEAREST,[ws]:s.LINEAR_MIPMAP_LINEAR},lt={[Zg]:s.NEVER,[Jg]:s.ALWAYS,[Xg]:s.LESS,[cp]:s.LEQUAL,[qg]:s.EQUAL,[Kg]:s.GEQUAL,[Yg]:s.GREATER,[$g]:s.NOTEQUAL};function pt(U,D){if(D.type===Ui&&t.has("OES_texture_float_linear")===!1&&(D.magFilter===Vn||D.magFilter===dc||D.magFilter===jo||D.magFilter===ws||D.minFilter===Vn||D.minFilter===dc||D.minFilter===jo||D.minFilter===ws)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,ht[D.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,ht[D.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,ht[D.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,xt[D.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,xt[D.minFilter]),D.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,lt[D.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===ri||D.minFilter!==jo&&D.minFilter!==ws||D.type===Ui&&t.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||n.get(D).__currentAnisotropy){let it=t.get("EXT_texture_filter_anisotropic");s.texParameterf(U,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,r.getMaxAnisotropy())),n.get(D).__currentAnisotropy=D.anisotropy}}}function Et(U,D){let it=!1;U.__webglInit===void 0&&(U.__webglInit=!0,D.addEventListener("dispose",C));let mt=D.source,yt=_.get(mt);yt===void 0&&(yt={},_.set(mt,yt));let ut=X(D);if(ut!==U.__cacheKey){yt[ut]===void 0&&(yt[ut]={texture:s.createTexture(),usedTimes:0},l.memory.textures++,it=!0),yt[ut].usedTimes++;let qt=yt[U.__cacheKey];qt!==void 0&&(yt[U.__cacheKey].usedTimes--,qt.usedTimes===0&&E(D)),U.__cacheKey=ut,U.__webglTexture=yt[ut].texture}return it}function $(U,D,it){let mt=s.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(mt=s.TEXTURE_2D_ARRAY),D.isData3DTexture&&(mt=s.TEXTURE_3D);let yt=Et(U,D),ut=D.source;e.bindTexture(mt,U.__webglTexture,s.TEXTURE0+it);let qt=n.get(ut);if(ut.version!==qt.__version||yt===!0){e.activeTexture(s.TEXTURE0+it);let Rt=Te.getPrimaries(Te.workingColorSpace),Ut=D.colorSpace===ts?null:Te.getPrimaries(D.colorSpace),ve=D.colorSpace===ts||Rt===Ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,D.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,D.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let St=S(D.image,!1,r.maxTextureSize);St=_e(D,St);let Bt=a.convert(D.format,D.colorSpace),te=a.convert(D.type),se=w(D.internalFormat,Bt,te,D.colorSpace,D.isVideoTexture);pt(mt,D);let Ot,ge=D.mipmaps,le=D.isVideoTexture!==!0,Re=qt.__version===void 0||yt===!0,q=ut.dataReady,Pt=O(D,St);if(D.isDepthTexture)se=T(D.format===Mr,D.type),Re&&(le?e.texStorage2D(s.TEXTURE_2D,1,se,St.width,St.height):e.texImage2D(s.TEXTURE_2D,0,se,St.width,St.height,0,Bt,te,null));else if(D.isDataTexture)if(ge.length>0){le&&Re&&e.texStorage2D(s.TEXTURE_2D,Pt,se,ge[0].width,ge[0].height);for(let ct=0,gt=ge.length;ct<gt;ct++)Ot=ge[ct],le?q&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,Ot.width,Ot.height,Bt,te,Ot.data):e.texImage2D(s.TEXTURE_2D,ct,se,Ot.width,Ot.height,0,Bt,te,Ot.data);D.generateMipmaps=!1}else le?(Re&&e.texStorage2D(s.TEXTURE_2D,Pt,se,St.width,St.height),q&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,St.width,St.height,Bt,te,St.data)):e.texImage2D(s.TEXTURE_2D,0,se,St.width,St.height,0,Bt,te,St.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){le&&Re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,se,ge[0].width,ge[0].height,St.depth);for(let ct=0,gt=ge.length;ct<gt;ct++)if(Ot=ge[ct],D.format!==si)if(Bt!==null)if(le){if(q)if(D.layerUpdates.size>0){let It=kf(Ot.width,Ot.height,D.format,D.type);for(let Ct of D.layerUpdates){let ae=Ot.data.subarray(Ct*It/Ot.data.BYTES_PER_ELEMENT,(Ct+1)*It/Ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,Ct,Ot.width,Ot.height,1,Bt,ae)}D.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,Ot.width,Ot.height,St.depth,Bt,Ot.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ct,se,Ot.width,Ot.height,St.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?q&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,Ot.width,Ot.height,St.depth,Bt,te,Ot.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ct,se,Ot.width,Ot.height,St.depth,0,Bt,te,Ot.data)}else{le&&Re&&e.texStorage2D(s.TEXTURE_2D,Pt,se,ge[0].width,ge[0].height);for(let ct=0,gt=ge.length;ct<gt;ct++)Ot=ge[ct],D.format!==si?Bt!==null?le?q&&e.compressedTexSubImage2D(s.TEXTURE_2D,ct,0,0,Ot.width,Ot.height,Bt,Ot.data):e.compressedTexImage2D(s.TEXTURE_2D,ct,se,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?q&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,Ot.width,Ot.height,Bt,te,Ot.data):e.texImage2D(s.TEXTURE_2D,ct,se,Ot.width,Ot.height,0,Bt,te,Ot.data)}else if(D.isDataArrayTexture)if(le){if(Re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,se,St.width,St.height,St.depth),q)if(D.layerUpdates.size>0){let ct=kf(St.width,St.height,D.format,D.type);for(let gt of D.layerUpdates){let It=St.data.subarray(gt*ct/St.data.BYTES_PER_ELEMENT,(gt+1)*ct/St.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,St.width,St.height,1,Bt,te,It)}D.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Bt,te,St.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,se,St.width,St.height,St.depth,0,Bt,te,St.data);else if(D.isData3DTexture)le?(Re&&e.texStorage3D(s.TEXTURE_3D,Pt,se,St.width,St.height,St.depth),q&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Bt,te,St.data)):e.texImage3D(s.TEXTURE_3D,0,se,St.width,St.height,St.depth,0,Bt,te,St.data);else if(D.isFramebufferTexture){if(Re)if(le)e.texStorage2D(s.TEXTURE_2D,Pt,se,St.width,St.height);else{let ct=St.width,gt=St.height;for(let It=0;It<Pt;It++)e.texImage2D(s.TEXTURE_2D,It,se,ct,gt,0,Bt,te,null),ct>>=1,gt>>=1}}else if(ge.length>0){if(le&&Re){let ct=Kt(ge[0]);e.texStorage2D(s.TEXTURE_2D,Pt,se,ct.width,ct.height)}for(let ct=0,gt=ge.length;ct<gt;ct++)Ot=ge[ct],le?q&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,Bt,te,Ot):e.texImage2D(s.TEXTURE_2D,ct,se,Bt,te,Ot);D.generateMipmaps=!1}else if(le){if(Re){let ct=Kt(St);e.texStorage2D(s.TEXTURE_2D,Pt,se,ct.width,ct.height)}q&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Bt,te,St)}else e.texImage2D(s.TEXTURE_2D,0,se,Bt,te,St);x(D)&&v(mt),qt.__version=ut.version,D.onUpdate&&D.onUpdate(D)}U.__version=D.version}function W(U,D,it){if(D.image.length!==6)return;let mt=Et(U,D),yt=D.source;e.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+it);let ut=n.get(yt);if(yt.version!==ut.__version||mt===!0){e.activeTexture(s.TEXTURE0+it);let qt=Te.getPrimaries(Te.workingColorSpace),Rt=D.colorSpace===ts?null:Te.getPrimaries(D.colorSpace),Ut=D.colorSpace===ts||qt===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,D.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,D.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let ve=D.isCompressedTexture||D.image[0].isCompressedTexture,St=D.image[0]&&D.image[0].isDataTexture,Bt=[];for(let gt=0;gt<6;gt++)!ve&&!St?Bt[gt]=S(D.image[gt],!0,r.maxCubemapSize):Bt[gt]=St?D.image[gt].image:D.image[gt],Bt[gt]=_e(D,Bt[gt]);let te=Bt[0],se=a.convert(D.format,D.colorSpace),Ot=a.convert(D.type),ge=w(D.internalFormat,se,Ot,D.colorSpace),le=D.isVideoTexture!==!0,Re=ut.__version===void 0||mt===!0,q=yt.dataReady,Pt=O(D,te);pt(s.TEXTURE_CUBE_MAP,D);let ct;if(ve){le&&Re&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,ge,te.width,te.height);for(let gt=0;gt<6;gt++){ct=Bt[gt].mipmaps;for(let It=0;It<ct.length;It++){let Ct=ct[It];D.format!==si?se!==null?le?q&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It,0,0,Ct.width,Ct.height,se,Ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It,ge,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It,0,0,Ct.width,Ct.height,se,Ot,Ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It,ge,Ct.width,Ct.height,0,se,Ot,Ct.data)}}}else{if(ct=D.mipmaps,le&&Re){ct.length>0&&Pt++;let gt=Kt(Bt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,ge,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(St){le?q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Bt[gt].width,Bt[gt].height,se,Ot,Bt[gt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ge,Bt[gt].width,Bt[gt].height,0,se,Ot,Bt[gt].data);for(let It=0;It<ct.length;It++){let ae=ct[It].image[gt].image;le?q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It+1,0,0,ae.width,ae.height,se,Ot,ae.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It+1,ge,ae.width,ae.height,0,se,Ot,ae.data)}}else{le?q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,se,Ot,Bt[gt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ge,se,Ot,Bt[gt]);for(let It=0;It<ct.length;It++){let Ct=ct[It];le?q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It+1,0,0,se,Ot,Ct.image[gt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It+1,ge,se,Ot,Ct.image[gt])}}}x(D)&&v(s.TEXTURE_CUBE_MAP),ut.__version=yt.version,D.onUpdate&&D.onUpdate(D)}U.__version=D.version}function ot(U,D,it,mt,yt,ut){let qt=a.convert(it.format,it.colorSpace),Rt=a.convert(it.type),Ut=w(it.internalFormat,qt,Rt,it.colorSpace),ve=n.get(D),St=n.get(it);if(St.__renderTarget=D,!ve.__hasExternalTextures){let Bt=Math.max(1,D.width>>ut),te=Math.max(1,D.height>>ut);yt===s.TEXTURE_3D||yt===s.TEXTURE_2D_ARRAY?e.texImage3D(yt,ut,Ut,Bt,te,D.depth,0,qt,Rt,null):e.texImage2D(yt,ut,Ut,Bt,te,0,qt,Rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,U),kt(D)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,yt,St.__webglTexture,0,Jt(D)):(yt===s.TEXTURE_2D||yt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,mt,yt,St.__webglTexture,ut),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Z(U,D,it){if(s.bindRenderbuffer(s.RENDERBUFFER,U),D.depthBuffer){let mt=D.depthTexture,yt=mt&&mt.isDepthTexture?mt.type:null,ut=T(D.stencilBuffer,yt),qt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=Jt(D);kt(D)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt,ut,D.width,D.height):it?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,ut,D.width,D.height):s.renderbufferStorage(s.RENDERBUFFER,ut,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qt,s.RENDERBUFFER,U)}else{let mt=D.textures;for(let yt=0;yt<mt.length;yt++){let ut=mt[yt],qt=a.convert(ut.format,ut.colorSpace),Rt=a.convert(ut.type),Ut=w(ut.internalFormat,qt,Rt,ut.colorSpace),ve=Jt(D);it&&kt(D)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,Ut,D.width,D.height):kt(D)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,Ut,D.width,D.height):s.renderbufferStorage(s.RENDERBUFFER,Ut,D.width,D.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _t(U,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,U),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let mt=n.get(D.depthTexture);mt.__renderTarget=D,(!mt.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),et(D.depthTexture,0);let yt=mt.__webglTexture,ut=Jt(D);if(D.depthTexture.format===pr)kt(D)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,yt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,yt,0);else if(D.depthTexture.format===Mr)kt(D)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,yt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function dt(U){let D=n.get(U),it=U.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==U.depthTexture){let mt=U.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),mt){let yt=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,mt.removeEventListener("dispose",yt)};mt.addEventListener("dispose",yt),D.__depthDisposeCallback=yt}D.__boundDepthTexture=mt}if(U.depthTexture&&!D.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");_t(D.__webglFramebuffer,U)}else if(it){D.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(e.bindFramebuffer(s.FRAMEBUFFER,D.__webglFramebuffer[mt]),D.__webglDepthbuffer[mt]===void 0)D.__webglDepthbuffer[mt]=s.createRenderbuffer(),Z(D.__webglDepthbuffer[mt],U,!1);else{let yt=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=D.__webglDepthbuffer[mt];s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,ut)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=s.createRenderbuffer(),Z(D.__webglDepthbuffer,U,!1);else{let mt=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=D.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,yt),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,yt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(U,D,it){let mt=n.get(U);D!==void 0&&ot(mt.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),it!==void 0&&dt(U)}function wt(U){let D=U.texture,it=n.get(U),mt=n.get(D);U.addEventListener("dispose",I);let yt=U.textures,ut=U.isWebGLCubeRenderTarget===!0,qt=yt.length>1;if(qt||(mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture()),mt.__version=D.version,l.memory.textures++),ut){it.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(D.mipmaps&&D.mipmaps.length>0){it.__webglFramebuffer[Rt]=[];for(let Ut=0;Ut<D.mipmaps.length;Ut++)it.__webglFramebuffer[Rt][Ut]=s.createFramebuffer()}else it.__webglFramebuffer[Rt]=s.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){it.__webglFramebuffer=[];for(let Rt=0;Rt<D.mipmaps.length;Rt++)it.__webglFramebuffer[Rt]=s.createFramebuffer()}else it.__webglFramebuffer=s.createFramebuffer();if(qt)for(let Rt=0,Ut=yt.length;Rt<Ut;Rt++){let ve=n.get(yt[Rt]);ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture(),l.memory.textures++)}if(U.samples>0&&kt(U)===!1){it.__webglMultisampledFramebuffer=s.createFramebuffer(),it.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Rt=0;Rt<yt.length;Rt++){let Ut=yt[Rt];it.__webglColorRenderbuffer[Rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,it.__webglColorRenderbuffer[Rt]);let ve=a.convert(Ut.format,Ut.colorSpace),St=a.convert(Ut.type),Bt=w(Ut.internalFormat,ve,St,Ut.colorSpace,U.isXRRenderTarget===!0),te=Jt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,te,Bt,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,it.__webglColorRenderbuffer[Rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(it.__webglDepthRenderbuffer=s.createRenderbuffer(),Z(it.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){e.bindTexture(s.TEXTURE_CUBE_MAP,mt.__webglTexture),pt(s.TEXTURE_CUBE_MAP,D);for(let Rt=0;Rt<6;Rt++)if(D.mipmaps&&D.mipmaps.length>0)for(let Ut=0;Ut<D.mipmaps.length;Ut++)ot(it.__webglFramebuffer[Rt][Ut],U,D,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ut);else ot(it.__webglFramebuffer[Rt],U,D,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);x(D)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(qt){for(let Rt=0,Ut=yt.length;Rt<Ut;Rt++){let ve=yt[Rt],St=n.get(ve);e.bindTexture(s.TEXTURE_2D,St.__webglTexture),pt(s.TEXTURE_2D,ve),ot(it.__webglFramebuffer,U,ve,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,0),x(ve)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let Rt=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Rt=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Rt,mt.__webglTexture),pt(Rt,D),D.mipmaps&&D.mipmaps.length>0)for(let Ut=0;Ut<D.mipmaps.length;Ut++)ot(it.__webglFramebuffer[Ut],U,D,s.COLOR_ATTACHMENT0,Rt,Ut);else ot(it.__webglFramebuffer,U,D,s.COLOR_ATTACHMENT0,Rt,0);x(D)&&v(Rt),e.unbindTexture()}U.depthBuffer&&dt(U)}function Ft(U){let D=U.textures;for(let it=0,mt=D.length;it<mt;it++){let yt=D[it];if(x(yt)){let ut=P(U),qt=n.get(yt).__webglTexture;e.bindTexture(ut,qt),v(ut),e.unbindTexture()}}}let Mt=[],z=[];function Gt(U){if(U.samples>0){if(kt(U)===!1){let D=U.textures,it=U.width,mt=U.height,yt=s.COLOR_BUFFER_BIT,ut=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qt=n.get(U),Rt=D.length>1;if(Rt)for(let Ut=0;Ut<D.length;Ut++)e.bindFramebuffer(s.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,qt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Ut=0;Ut<D.length;Ut++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(yt|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(yt|=s.STENCIL_BUFFER_BIT)),Rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qt.__webglColorRenderbuffer[Ut]);let ve=n.get(D[Ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ve,0)}s.blitFramebuffer(0,0,it,mt,0,0,it,mt,yt,s.NEAREST),u===!0&&(Mt.length=0,z.length=0,Mt.push(s.COLOR_ATTACHMENT0+Ut),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Mt.push(ut),z.push(ut),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Mt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Rt)for(let Ut=0;Ut<D.length;Ut++){e.bindFramebuffer(s.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,qt.__webglColorRenderbuffer[Ut]);let ve=n.get(D[Ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,qt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,ve,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&u){let D=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[D])}}}function Jt(U){return Math.min(r.maxSamples,U.samples)}function kt(U){let D=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function zt(U){let D=l.render.frame;p.get(U)!==D&&(p.set(U,D),U.update())}function _e(U,D){let it=U.colorSpace,mt=U.format,yt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||it!==Er&&it!==ts&&(Te.getTransfer(it)===De?(mt!==si||yt!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),D}function Kt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=K,this.resetTextureUnits=Y,this.setTexture2D=et,this.setTexture2DArray=V,this.setTexture3D=ft,this.setTextureCube=G,this.rebindTextures=nt,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=kt}function ib(s,t){function e(n,r=ts){let a,l=Te.getTransfer(r);if(n===Vi)return s.UNSIGNED_BYTE;if(n===lu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===cu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===tp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===jf)return s.BYTE;if(n===Qf)return s.SHORT;if(n===ho)return s.UNSIGNED_SHORT;if(n===au)return s.INT;if(n===Ts)return s.UNSIGNED_INT;if(n===Ui)return s.FLOAT;if(n===yo)return s.HALF_FLOAT;if(n===ep)return s.ALPHA;if(n===np)return s.RGB;if(n===si)return s.RGBA;if(n===ip)return s.LUMINANCE;if(n===sp)return s.LUMINANCE_ALPHA;if(n===pr)return s.DEPTH_COMPONENT;if(n===Mr)return s.DEPTH_STENCIL;if(n===rp)return s.RED;if(n===hu)return s.RED_INTEGER;if(n===op)return s.RG;if(n===uu)return s.RG_INTEGER;if(n===du)return s.RGBA_INTEGER;if(n===Ia||n===Da||n===Na||n===ka)if(l===De)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ia)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ia)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Da)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Na)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ka)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sh||n===rh||n===oh||n===ah)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===sh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ah)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lh||n===ch||n===hh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===lh||n===ch)return l===De?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===hh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===uh||n===dh||n===fh||n===ph||n===mh||n===gh||n===_h||n===vh||n===xh||n===yh||n===bh||n===Mh||n===Sh||n===wh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===uh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ph)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_h)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oa||n===Th||n===Eh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===Oa)return l===De?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Th)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ap||n===Ah||n===Ph||n===Rh)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Oa)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Ah)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ph)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Zh=class extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Fi=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},sb={type:"move"},co=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,a=null,l=null,h=this._targetRay,u=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){l=!0;for(let S of t.hand.values()){let x=e.getJointPose(S,n),v=this._getHandJoint(f,S);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}let p=f.joints["index-finger-tip"],d=f.joints["thumb-tip"],_=p.position.distanceTo(d.position),g=.02,y=.005;f.inputState.pinching&&_>g+y?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&_<=g-y&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1));h!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(sb)))}return h!==null&&(h.visible=r!==null),u!==null&&(u.visible=a!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Fi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},rb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ob=`
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

}`,Xh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let r=new Nn,a=t.properties.get(r);a.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xn({vertexShader:rb,fragmentShader:ob,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Be(new As(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qh=class extends Gi{constructor(t,e){super();let n=this,r=null,a=1,l=null,h="local-floor",u=1,f=null,p=null,d=null,_=null,g=null,y=null,S=new Xh,x=e.getContextAttributes(),v=null,P=null,w=[],T=[],O=new $t,C=null,I=new bn;I.viewport=new Ne;let k=new bn;k.viewport=new Ne;let E=[I,k],A=new Zh,B=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let W=w[$];return W===void 0&&(W=new co,w[$]=W),W.getTargetRaySpace()},this.getControllerGrip=function($){let W=w[$];return W===void 0&&(W=new co,w[$]=W),W.getGripSpace()},this.getHand=function($){let W=w[$];return W===void 0&&(W=new co,w[$]=W),W.getHandSpace()};function K($){let W=T.indexOf($.inputSource);if(W===-1)return;let ot=w[W];ot!==void 0&&(ot.update($.inputSource,$.frame,f||l),ot.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",et);for(let $=0;$<w.length;$++){let W=T[$];W!==null&&(T[$]=null,w[$].disconnect(W))}B=null,Y=null,S.reset(),t.setRenderTarget(v),g=null,_=null,d=null,r=null,P=null,Et.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){h=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function($){f=$},this.getBaseLayer=function(){return _!==null?_:g},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(v=t.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",X),r.addEventListener("inputsourceschange",et),x.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(O),r.renderState.layers===void 0){let W={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,e,W),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),P=new Wi(g.framebufferWidth,g.framebufferHeight,{format:si,type:Vi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let W=null,ot=null,Z=null;x.depth&&(Z=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=x.stencil?Mr:pr,ot=x.stencil?br:Ts);let _t={colorFormat:e.RGBA8,depthFormat:Z,scaleFactor:a};d=new XRWebGLBinding(r,e),_=d.createProjectionLayer(_t),r.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),P=new Wi(_.textureWidth,_.textureHeight,{format:si,type:Vi,depthTexture:new $a(_.textureWidth,_.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(u),f=null,l=await r.requestReferenceSpace(h),Et.setContext(r),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function et($){for(let W=0;W<$.removed.length;W++){let ot=$.removed[W],Z=T.indexOf(ot);Z>=0&&(T[Z]=null,w[Z].disconnect(ot))}for(let W=0;W<$.added.length;W++){let ot=$.added[W],Z=T.indexOf(ot);if(Z===-1){for(let dt=0;dt<w.length;dt++)if(dt>=T.length){T.push(ot),Z=dt;break}else if(T[dt]===null){T[dt]=ot,Z=dt;break}if(Z===-1)break}let _t=w[Z];_t&&_t.connect(ot)}}let V=new H,ft=new H;function G($,W,ot){V.setFromMatrixPosition(W.matrixWorld),ft.setFromMatrixPosition(ot.matrixWorld);let Z=V.distanceTo(ft),_t=W.projectionMatrix.elements,dt=ot.projectionMatrix.elements,nt=_t[14]/(_t[10]-1),wt=_t[14]/(_t[10]+1),Ft=(_t[9]+1)/_t[5],Mt=(_t[9]-1)/_t[5],z=(_t[8]-1)/_t[0],Gt=(dt[8]+1)/dt[0],Jt=nt*z,kt=nt*Gt,zt=Z/(-z+Gt),_e=zt*-z;if(W.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(_e),$.translateZ(zt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),_t[10]===-1)$.projectionMatrix.copy(W.projectionMatrix),$.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let Kt=nt+zt,U=wt+zt,D=Jt-_e,it=kt+(Z-_e),mt=Ft*wt/U*Kt,yt=Mt*wt/U*Kt;$.projectionMatrix.makePerspective(D,it,mt,yt,Kt,U),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ht($,W){W===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(W.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let W=$.near,ot=$.far;S.texture!==null&&(S.depthNear>0&&(W=S.depthNear),S.depthFar>0&&(ot=S.depthFar)),A.near=k.near=I.near=W,A.far=k.far=I.far=ot,(B!==A.near||Y!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),B=A.near,Y=A.far),I.layers.mask=$.layers.mask|2,k.layers.mask=$.layers.mask|4,A.layers.mask=I.layers.mask|k.layers.mask;let Z=$.parent,_t=A.cameras;ht(A,Z);for(let dt=0;dt<_t.length;dt++)ht(_t[dt],Z);_t.length===2?G(A,I,k):A.projectionMatrix.copy(I.projectionMatrix),xt($,A,Z)};function xt($,W,ot){ot===null?$.matrix.copy(W.matrixWorld):($.matrix.copy(ot.matrixWorld),$.matrix.invert(),$.matrix.multiply(W.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(W.projectionMatrix),$.projectionMatrixInverse.copy(W.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=uo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(_===null&&g===null))return u},this.setFoveation=function($){u=$,_!==null&&(_.fixedFoveation=$),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=$)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(A)};let lt=null;function pt($,W){if(p=W.getViewerPose(f||l),y=W,p!==null){let ot=p.views;g!==null&&(t.setRenderTargetFramebuffer(P,g.framebuffer),t.setRenderTarget(P));let Z=!1;ot.length!==A.cameras.length&&(A.cameras.length=0,Z=!0);for(let dt=0;dt<ot.length;dt++){let nt=ot[dt],wt=null;if(g!==null)wt=g.getViewport(nt);else{let Mt=d.getViewSubImage(_,nt);wt=Mt.viewport,dt===0&&(t.setRenderTargetTextures(P,Mt.colorTexture,_.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(P))}let Ft=E[dt];Ft===void 0&&(Ft=new bn,Ft.layers.enable(dt),Ft.viewport=new Ne,E[dt]=Ft),Ft.matrix.fromArray(nt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(nt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(wt.x,wt.y,wt.width,wt.height),dt===0&&(A.matrix.copy(Ft.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Z===!0&&A.cameras.push(Ft)}let _t=r.enabledFeatures;if(_t&&_t.includes("depth-sensing")){let dt=d.getDepthInformation(ot[0]);dt&&dt.isValid&&dt.texture&&S.init(t,dt,r.renderState)}}for(let ot=0;ot<w.length;ot++){let Z=T[ot],_t=w[ot];Z!==null&&_t!==void 0&&_t.update(Z,W,f||l)}lt&&lt($,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),y=null}let Et=new fp;Et.setAnimationLoop(pt),this.setAnimationLoop=function($){lt=$},this.dispose=function(){}}},xs=new xi,ab=new Fe;function lb(s,t){function e(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function n(x,v){v.color.getRGB(x.fogColor.value,dp(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function r(x,v,P,w,T){v.isMeshBasicMaterial||v.isMeshLambertMaterial?a(x,v):v.isMeshToonMaterial?(a(x,v),d(x,v)):v.isMeshPhongMaterial?(a(x,v),p(x,v)):v.isMeshStandardMaterial?(a(x,v),_(x,v),v.isMeshPhysicalMaterial&&g(x,v,T)):v.isMeshMatcapMaterial?(a(x,v),y(x,v)):v.isMeshDepthMaterial?a(x,v):v.isMeshDistanceMaterial?(a(x,v),S(x,v)):v.isMeshNormalMaterial?a(x,v):v.isLineBasicMaterial?(l(x,v),v.isLineDashedMaterial&&h(x,v)):v.isPointsMaterial?u(x,v,P,w):v.isSpriteMaterial?f(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function a(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,e(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,e(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,e(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===gn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,e(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===gn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,e(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,e(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,e(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);let P=t.get(v),w=P.envMap,T=P.envMapRotation;w&&(x.envMap.value=w,xs.copy(T),xs.x*=-1,xs.y*=-1,xs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),x.envMapRotation.value.setFromMatrix4(ab.makeRotationFromEuler(xs)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,e(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,e(v.aoMap,x.aoMapTransform))}function l(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,e(v.map,x.mapTransform))}function h(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function u(x,v,P,w){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*P,x.scale.value=w*.5,v.map&&(x.map.value=v.map,e(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,e(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function f(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,e(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,e(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function d(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function _(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,e(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,e(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function g(x,v,P){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,e(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,e(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,e(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,e(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,e(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===gn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,e(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,e(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,e(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,e(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,e(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,e(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,e(v.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,v){v.matcap&&(x.matcap.value=v.matcap)}function S(x,v){let P=t.get(v).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function cb(s,t,e,n){let r={},a={},l=[],h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function u(P,w){let T=w.program;n.uniformBlockBinding(P,T)}function f(P,w){let T=r[P.id];T===void 0&&(y(P),T=p(P),r[P.id]=T,P.addEventListener("dispose",x));let O=w.program;n.updateUBOMapping(P,O);let C=t.render.frame;a[P.id]!==C&&(_(P),a[P.id]=C)}function p(P){let w=d();P.__bindingPointIndex=w;let T=s.createBuffer(),O=P.__size,C=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,O,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,T),T}function d(){for(let P=0;P<h;P++)if(l.indexOf(P)===-1)return l.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){let w=r[P.id],T=P.uniforms,O=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let C=0,I=T.length;C<I;C++){let k=Array.isArray(T[C])?T[C]:[T[C]];for(let E=0,A=k.length;E<A;E++){let B=k[E];if(g(B,C,E,O)===!0){let Y=B.__offset,K=Array.isArray(B.value)?B.value:[B.value],X=0;for(let et=0;et<K.length;et++){let V=K[et],ft=S(V);typeof V=="number"||typeof V=="boolean"?(B.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,Y+X,B.__data)):V.isMatrix3?(B.__data[0]=V.elements[0],B.__data[1]=V.elements[1],B.__data[2]=V.elements[2],B.__data[3]=0,B.__data[4]=V.elements[3],B.__data[5]=V.elements[4],B.__data[6]=V.elements[5],B.__data[7]=0,B.__data[8]=V.elements[6],B.__data[9]=V.elements[7],B.__data[10]=V.elements[8],B.__data[11]=0):(V.toArray(B.__data,X),X+=ft.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(P,w,T,O){let C=P.value,I=w+"_"+T;if(O[I]===void 0)return typeof C=="number"||typeof C=="boolean"?O[I]=C:O[I]=C.clone(),!0;{let k=O[I];if(typeof C=="number"||typeof C=="boolean"){if(k!==C)return O[I]=C,!0}else if(k.equals(C)===!1)return k.copy(C),!0}return!1}function y(P){let w=P.uniforms,T=0,O=16;for(let I=0,k=w.length;I<k;I++){let E=Array.isArray(w[I])?w[I]:[w[I]];for(let A=0,B=E.length;A<B;A++){let Y=E[A],K=Array.isArray(Y.value)?Y.value:[Y.value];for(let X=0,et=K.length;X<et;X++){let V=K[X],ft=S(V),G=T%O,ht=G%ft.boundary,xt=G+ht;T+=ht,xt!==0&&O-xt<ft.storage&&(T+=O-xt),Y.__data=new Float32Array(ft.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=T,T+=ft.storage}}}let C=T%O;return C>0&&(T+=O-C),P.__size=T,P.__cache={},this}function S(P){let w={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(w.boundary=4,w.storage=4):P.isVector2?(w.boundary=8,w.storage=8):P.isVector3||P.isColor?(w.boundary=16,w.storage=12):P.isVector4?(w.boundary=16,w.storage=16):P.isMatrix3?(w.boundary=48,w.storage=48):P.isMatrix4?(w.boundary=64,w.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),w}function x(P){let w=P.target;w.removeEventListener("dispose",x);let T=l.indexOf(w.__bindingPointIndex);l.splice(T,1),s.deleteBuffer(r[w.id]),delete r[w.id],delete a[w.id]}function v(){for(let P in r)s.deleteBuffer(r[P]);l=[],r={},a={}}return{bind:u,update:f,dispose:v}}var Ka=class{constructor(t={}){let{canvas:e=p_(),context:n=null,depth:r=!0,stencil:a=!1,alpha:l=!1,antialias:h=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=l;let y=new Uint32Array(4),S=new Int32Array(4),x=null,v=null,P=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zn,this.toneMapping=ns,this.toneMappingExposure=1;let T=this,O=!1,C=0,I=0,k=null,E=-1,A=null,B=new Ne,Y=new Ne,K=null,X=new me(0),et=0,V=e.width,ft=e.height,G=1,ht=null,xt=null,lt=new Ne(0,0,V,ft),pt=new Ne(0,0,V,ft),Et=!1,$=new fo,W=!1,ot=!1,Z=new Fe,_t=new Fe,dt=new H,nt=new Ne,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ft=!1;function Mt(){return k===null?G:1}let z=n;function Gt(N,J){return e.getContext(N,J)}try{let N={alpha:!0,depth:r,stencil:a,antialias:h,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),z===null){let J="webgl2";if(z=Gt(J,N),z===null)throw Gt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let Jt,kt,zt,_e,Kt,U,D,it,mt,yt,ut,qt,Rt,Ut,ve,St,Bt,te,se,Ot,ge,le,Re,q;function Pt(){Jt=new Tx(z),Jt.init(),le=new ib(z,Jt),kt=new xx(z,Jt,t,le),zt=new tb(z,Jt),kt.reverseDepthBuffer&&_&&zt.buffers.depth.setReversed(!0),_e=new Px(z),Kt=new Hy,U=new nb(z,Jt,zt,Kt,kt,le,_e),D=new bx(T),it=new wx(T),mt=new k_(z),Re=new _x(z,mt),yt=new Ex(z,mt,_e,Re),ut=new Cx(z,yt,mt,_e),se=new Rx(z,kt,U),St=new yx(Kt),qt=new zy(T,D,it,Jt,kt,Re,St),Rt=new lb(T,Kt),Ut=new Gy,ve=new $y(Jt),te=new gx(T,D,it,zt,ut,g,u),Bt=new jy(T,ut,kt),q=new cb(z,_e,kt,zt),Ot=new vx(z,Jt,_e),ge=new Ax(z,Jt,_e),_e.programs=qt.programs,T.capabilities=kt,T.extensions=Jt,T.properties=Kt,T.renderLists=Ut,T.shadowMap=Bt,T.state=zt,T.info=_e}Pt();let ct=new qh(T,z);this.xr=ct,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let N=Jt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=Jt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(N){N!==void 0&&(G=N,this.setSize(V,ft,!1))},this.getSize=function(N){return N.set(V,ft)},this.setSize=function(N,J,rt=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=N,ft=J,e.width=Math.floor(N*G),e.height=Math.floor(J*G),rt===!0&&(e.style.width=N+"px",e.style.height=J+"px"),this.setViewport(0,0,N,J)},this.getDrawingBufferSize=function(N){return N.set(V*G,ft*G).floor()},this.setDrawingBufferSize=function(N,J,rt){V=N,ft=J,G=rt,e.width=Math.floor(N*rt),e.height=Math.floor(J*rt),this.setViewport(0,0,N,J)},this.getCurrentViewport=function(N){return N.copy(B)},this.getViewport=function(N){return N.copy(lt)},this.setViewport=function(N,J,rt,st){N.isVector4?lt.set(N.x,N.y,N.z,N.w):lt.set(N,J,rt,st),zt.viewport(B.copy(lt).multiplyScalar(G).round())},this.getScissor=function(N){return N.copy(pt)},this.setScissor=function(N,J,rt,st){N.isVector4?pt.set(N.x,N.y,N.z,N.w):pt.set(N,J,rt,st),zt.scissor(Y.copy(pt).multiplyScalar(G).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(N){zt.setScissorTest(Et=N)},this.setOpaqueSort=function(N){ht=N},this.setTransparentSort=function(N){xt=N},this.getClearColor=function(N){return N.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(N=!0,J=!0,rt=!0){let st=0;if(N){let j=!1;if(k!==null){let Tt=k.texture.format;j=Tt===du||Tt===uu||Tt===hu}if(j){let Tt=k.texture.type,Lt=Tt===Vi||Tt===Ts||Tt===ho||Tt===br||Tt===lu||Tt===cu,Zt=te.getClearColor(),Xt=te.getClearAlpha(),ie=Zt.r,re=Zt.g,Wt=Zt.b;Lt?(y[0]=ie,y[1]=re,y[2]=Wt,y[3]=Xt,z.clearBufferuiv(z.COLOR,0,y)):(S[0]=ie,S[1]=re,S[2]=Wt,S[3]=Xt,z.clearBufferiv(z.COLOR,0,S))}else st|=z.COLOR_BUFFER_BIT}J&&(st|=z.DEPTH_BUFFER_BIT),rt&&(st|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),Ut.dispose(),ve.dispose(),Kt.dispose(),D.dispose(),it.dispose(),ut.dispose(),Re.dispose(),q.dispose(),qt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",wo),ct.removeEventListener("sessionend",An),Ht.stop()};function gt(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;let N=_e.autoReset,J=Bt.enabled,rt=Bt.autoUpdate,st=Bt.needsUpdate,j=Bt.type;Pt(),_e.autoReset=N,Bt.enabled=J,Bt.autoUpdate=rt,Bt.needsUpdate=st,Bt.type=j}function Ct(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ae(N){let J=N.target;J.removeEventListener("dispose",ae),ze(J)}function ze(N){Xe(N),Kt.remove(N)}function Xe(N){let J=Kt.get(N).programs;J!==void 0&&(J.forEach(function(rt){qt.releaseProgram(rt)}),N.isShaderMaterial&&qt.releaseShaderCache(N))}this.renderBufferDirect=function(N,J,rt,st,j,Tt){J===null&&(J=wt);let Lt=j.isMesh&&j.matrixWorld.determinant()<0,Zt=Nl(N,J,rt,st,j);zt.setMaterial(st,Lt);let Xt=rt.index,ie=1;if(st.wireframe===!0){if(Xt=yt.getWireframeAttribute(rt),Xt===void 0)return;ie=2}let re=rt.drawRange,Wt=rt.attributes.position,xe=re.start*ie,Ee=(re.start+re.count)*ie;Tt!==null&&(xe=Math.max(xe,Tt.start*ie),Ee=Math.min(Ee,(Tt.start+Tt.count)*ie)),Xt!==null?(xe=Math.max(xe,0),Ee=Math.min(Ee,Xt.count)):Wt!=null&&(xe=Math.max(xe,0),Ee=Math.min(Ee,Wt.count));let Yt=Ee-xe;if(Yt<0||Yt===1/0)return;Re.setup(j,st,Zt,rt,Xt);let de,ye=Ot;if(Xt!==null&&(de=mt.get(Xt),ye=ge,ye.setIndex(de)),j.isMesh)st.wireframe===!0?(zt.setLineWidth(st.wireframeLinewidth*Mt()),ye.setMode(z.LINES)):ye.setMode(z.TRIANGLES);else if(j.isLine){let Vt=st.linewidth;Vt===void 0&&(Vt=1),zt.setLineWidth(Vt*Mt()),j.isLineSegments?ye.setMode(z.LINES):j.isLineLoop?ye.setMode(z.LINE_LOOP):ye.setMode(z.LINE_STRIP)}else j.isPoints?ye.setMode(z.POINTS):j.isSprite&&ye.setMode(z.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ye.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))ye.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let Vt=j._multiDrawStarts,hn=j._multiDrawCounts,Me=j._multiDrawCount,jt=Xt?mt.get(Xt).bytesPerElement:1,Ie=Kt.get(st).currentProgram.getUniforms();for(let sn=0;sn<Me;sn++)Ie.setValue(z,"_gl_DrawID",sn),ye.render(Vt[sn]/jt,hn[sn])}else if(j.isInstancedMesh)ye.renderInstances(xe,Yt,j.count);else if(rt.isInstancedBufferGeometry){let Vt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,hn=Math.min(rt.instanceCount,Vt);ye.renderInstances(xe,Yt,hn)}else ye.render(xe,Yt)};function Ae(N,J,rt){N.transparent===!0&&N.side===Hn&&N.forceSinglePass===!1?(N.side=gn,N.needsUpdate=!0,cs(N,J,rt),N.side=is,N.needsUpdate=!0,cs(N,J,rt),N.side=Hn):cs(N,J,rt)}this.compile=function(N,J,rt=null){rt===null&&(rt=N),v=ve.get(rt),v.init(J),w.push(v),rt.traverseVisible(function(j){j.isLight&&j.layers.test(J.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),N!==rt&&N.traverseVisible(function(j){j.isLight&&j.layers.test(J.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),v.setupLights();let st=new Set;return N.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let Lt=0;Lt<Tt.length;Lt++){let Zt=Tt[Lt];Ae(Zt,rt,j),st.add(Zt)}else Ae(Tt,rt,j),st.add(Tt)}),w.pop(),v=null,st},this.compileAsync=function(N,J,rt=null){let st=this.compile(N,J,rt);return new Promise(j=>{function Tt(){if(st.forEach(function(Lt){Kt.get(Lt).currentProgram.isReady()&&st.delete(Lt)}),st.size===0){j(N);return}setTimeout(Tt,10)}Jt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let En=null;function Yn(N){En&&En(N)}function wo(){Ht.stop()}function An(){Ht.start()}let Ht=new fp;Ht.setAnimationLoop(Yn),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(N){En=N,ct.setAnimationLoop(N),N===null?Ht.stop():Ht.start()},ct.addEventListener("sessionstart",wo),ct.addEventListener("sessionend",An),this.render=function(N,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(J),J=ct.getCamera()),N.isScene===!0&&N.onBeforeRender(T,N,J,k),v=ve.get(N,w.length),v.init(J),w.push(v),_t.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$.setFromProjectionMatrix(_t),ot=this.localClippingEnabled,W=St.init(this.clippingPlanes,ot),x=Ut.get(N,P.length),x.init(),P.push(x),ct.enabled===!0&&ct.isPresenting===!0){let Tt=T.xr.getDepthSensingMesh();Tt!==null&&Bs(Tt,J,-1/0,T.sortObjects)}Bs(N,J,0,T.sortObjects),x.finish(),T.sortObjects===!0&&x.sort(ht,xt),Ft=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Ft&&te.addToRenderList(x,N),this.info.render.frame++,W===!0&&St.beginShadows();let rt=v.state.shadowsArray;Bt.render(rt,N,J),W===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();let st=x.opaque,j=x.transmissive;if(v.setupLights(),J.isArrayCamera){let Tt=J.cameras;if(j.length>0)for(let Lt=0,Zt=Tt.length;Lt<Zt;Lt++){let Xt=Tt[Lt];Or(st,j,N,Xt)}Ft&&te.render(N);for(let Lt=0,Zt=Tt.length;Lt<Zt;Lt++){let Xt=Tt[Lt];kr(x,N,Xt,Xt.viewport)}}else j.length>0&&Or(st,j,N,J),Ft&&te.render(N),kr(x,N,J);k!==null&&(U.updateMultisampleRenderTarget(k),U.updateRenderTargetMipmap(k)),N.isScene===!0&&N.onAfterRender(T,N,J),Re.resetDefaultState(),E=-1,A=null,w.pop(),w.length>0?(v=w[w.length-1],W===!0&&St.setGlobalState(T.clippingPlanes,v.state.camera)):v=null,P.pop(),P.length>0?x=P[P.length-1]:x=null};function Bs(N,J,rt,st){if(N.visible===!1)return;if(N.layers.test(J.layers)){if(N.isGroup)rt=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(J);else if(N.isLight)v.pushLight(N),N.castShadow&&v.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||$.intersectsSprite(N)){st&&nt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(_t);let Lt=ut.update(N),Zt=N.material;Zt.visible&&x.push(N,Lt,Zt,rt,nt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||$.intersectsObject(N))){let Lt=ut.update(N),Zt=N.material;if(st&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),nt.copy(N.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),nt.copy(Lt.boundingSphere.center)),nt.applyMatrix4(N.matrixWorld).applyMatrix4(_t)),Array.isArray(Zt)){let Xt=Lt.groups;for(let ie=0,re=Xt.length;ie<re;ie++){let Wt=Xt[ie],xe=Zt[Wt.materialIndex];xe&&xe.visible&&x.push(N,Lt,xe,rt,nt.z,Wt)}}else Zt.visible&&x.push(N,Lt,Zt,rt,nt.z,null)}}let Tt=N.children;for(let Lt=0,Zt=Tt.length;Lt<Zt;Lt++)Bs(Tt[Lt],J,rt,st)}function kr(N,J,rt,st){let j=N.opaque,Tt=N.transmissive,Lt=N.transparent;v.setupLightsView(rt),W===!0&&St.setGlobalState(T.clippingPlanes,rt),st&&zt.viewport(B.copy(st)),j.length>0&&ls(j,J,rt),Tt.length>0&&ls(Tt,J,rt),Lt.length>0&&ls(Lt,J,rt),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function Or(N,J,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[st.id]===void 0&&(v.state.transmissionRenderTarget[st.id]=new Wi(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?yo:Vi,minFilter:ws,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));let Tt=v.state.transmissionRenderTarget[st.id],Lt=st.viewport||B;Tt.setSize(Lt.z,Lt.w);let Zt=T.getRenderTarget();T.setRenderTarget(Tt),T.getClearColor(X),et=T.getClearAlpha(),et<1&&T.setClearColor(16777215,.5),T.clear(),Ft&&te.render(rt);let Xt=T.toneMapping;T.toneMapping=ns;let ie=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),v.setupLightsView(st),W===!0&&St.setGlobalState(T.clippingPlanes,st),ls(N,rt,st),U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let Wt=0,xe=J.length;Wt<xe;Wt++){let Ee=J[Wt],Yt=Ee.object,de=Ee.geometry,ye=Ee.material,Vt=Ee.group;if(ye.side===Hn&&Yt.layers.test(st.layers)){let hn=ye.side;ye.side=gn,ye.needsUpdate=!0,Fs(Yt,rt,st,de,ye,Vt),ye.side=hn,ye.needsUpdate=!0,re=!0}}re===!0&&(U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt))}T.setRenderTarget(Zt),T.setClearColor(X,et),ie!==void 0&&(st.viewport=ie),T.toneMapping=Xt}function ls(N,J,rt){let st=J.isScene===!0?J.overrideMaterial:null;for(let j=0,Tt=N.length;j<Tt;j++){let Lt=N[j],Zt=Lt.object,Xt=Lt.geometry,ie=st===null?Lt.material:st,re=Lt.group;Zt.layers.test(rt.layers)&&Fs(Zt,J,rt,Xt,ie,re)}}function Fs(N,J,rt,st,j,Tt){N.onBeforeRender(T,J,rt,st,j,Tt),N.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),j.onBeforeRender(T,J,rt,st,N,Tt),j.transparent===!0&&j.side===Hn&&j.forceSinglePass===!1?(j.side=gn,j.needsUpdate=!0,T.renderBufferDirect(rt,J,st,j,N,Tt),j.side=is,j.needsUpdate=!0,T.renderBufferDirect(rt,J,st,j,N,Tt),j.side=Hn):T.renderBufferDirect(rt,J,st,j,N,Tt),N.onAfterRender(T,J,rt,st,j,Tt)}function cs(N,J,rt){J.isScene!==!0&&(J=wt);let st=Kt.get(N),j=v.state.lights,Tt=v.state.shadowsArray,Lt=j.state.version,Zt=qt.getParameters(N,j.state,Tt,J,rt),Xt=qt.getProgramCacheKey(Zt),ie=st.programs;st.environment=N.isMeshStandardMaterial?J.environment:null,st.fog=J.fog,st.envMap=(N.isMeshStandardMaterial?it:D).get(N.envMap||st.environment),st.envMapRotation=st.environment!==null&&N.envMap===null?J.environmentRotation:N.envMapRotation,ie===void 0&&(N.addEventListener("dispose",ae),ie=new Map,st.programs=ie);let re=ie.get(Xt);if(re!==void 0){if(st.currentProgram===re&&st.lightsStateVersion===Lt)return Ur(N,Zt),re}else Zt.uniforms=qt.getUniforms(N),N.onBeforeCompile(Zt,T),re=qt.acquireProgram(Zt,Xt),ie.set(Xt,re),st.uniforms=Zt.uniforms;let Wt=st.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Wt.clippingPlanes=St.uniform),Ur(N,Zt),st.needsLights=Ol(N),st.lightsStateVersion=Lt,st.needsLights&&(Wt.ambientLightColor.value=j.state.ambient,Wt.lightProbe.value=j.state.probe,Wt.directionalLights.value=j.state.directional,Wt.directionalLightShadows.value=j.state.directionalShadow,Wt.spotLights.value=j.state.spot,Wt.spotLightShadows.value=j.state.spotShadow,Wt.rectAreaLights.value=j.state.rectArea,Wt.ltc_1.value=j.state.rectAreaLTC1,Wt.ltc_2.value=j.state.rectAreaLTC2,Wt.pointLights.value=j.state.point,Wt.pointLightShadows.value=j.state.pointShadow,Wt.hemisphereLights.value=j.state.hemi,Wt.directionalShadowMap.value=j.state.directionalShadowMap,Wt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Wt.spotShadowMap.value=j.state.spotShadowMap,Wt.spotLightMatrix.value=j.state.spotLightMatrix,Wt.spotLightMap.value=j.state.spotLightMap,Wt.pointShadowMap.value=j.state.pointShadowMap,Wt.pointShadowMatrix.value=j.state.pointShadowMatrix),st.currentProgram=re,st.uniformsList=null,re}function wi(N){if(N.uniformsList===null){let J=N.currentProgram.getUniforms();N.uniformsList=_r.seqWithValue(J.seq,N.uniforms)}return N.uniformsList}function Ur(N,J){let rt=Kt.get(N);rt.outputColorSpace=J.outputColorSpace,rt.batching=J.batching,rt.batchingColor=J.batchingColor,rt.instancing=J.instancing,rt.instancingColor=J.instancingColor,rt.instancingMorph=J.instancingMorph,rt.skinning=J.skinning,rt.morphTargets=J.morphTargets,rt.morphNormals=J.morphNormals,rt.morphColors=J.morphColors,rt.morphTargetsCount=J.morphTargetsCount,rt.numClippingPlanes=J.numClippingPlanes,rt.numIntersection=J.numClipIntersection,rt.vertexAlphas=J.vertexAlphas,rt.vertexTangents=J.vertexTangents,rt.toneMapping=J.toneMapping}function Nl(N,J,rt,st,j){J.isScene!==!0&&(J=wt),U.resetTextureUnits();let Tt=J.fog,Lt=st.isMeshStandardMaterial?J.environment:null,Zt=k===null?T.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Er,Xt=(st.isMeshStandardMaterial?it:D).get(st.envMap||Lt),ie=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,re=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Wt=!!rt.morphAttributes.position,xe=!!rt.morphAttributes.normal,Ee=!!rt.morphAttributes.color,Yt=ns;st.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Yt=T.toneMapping);let de=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ye=de!==void 0?de.length:0,Vt=Kt.get(st),hn=v.state.lights;if(W===!0&&(ot===!0||N!==A)){let qe=N===A&&st.id===E;St.setState(st,N,qe)}let Me=!1;st.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==hn.state.version||Vt.outputColorSpace!==Zt||j.isBatchedMesh&&Vt.batching===!1||!j.isBatchedMesh&&Vt.batching===!0||j.isBatchedMesh&&Vt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Vt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Vt.instancing===!1||!j.isInstancedMesh&&Vt.instancing===!0||j.isSkinnedMesh&&Vt.skinning===!1||!j.isSkinnedMesh&&Vt.skinning===!0||j.isInstancedMesh&&Vt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Vt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Vt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Vt.instancingMorph===!1&&j.morphTexture!==null||Vt.envMap!==Xt||st.fog===!0&&Vt.fog!==Tt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==St.numPlanes||Vt.numIntersection!==St.numIntersection)||Vt.vertexAlphas!==ie||Vt.vertexTangents!==re||Vt.morphTargets!==Wt||Vt.morphNormals!==xe||Vt.morphColors!==Ee||Vt.toneMapping!==Yt||Vt.morphTargetsCount!==ye)&&(Me=!0):(Me=!0,Vt.__version=st.version);let jt=Vt.currentProgram;Me===!0&&(jt=cs(st,J,j));let Ie=!1,sn=!1,fi=!1,fe=jt.getUniforms(),kn=Vt.uniforms;if(zt.useProgram(jt.program)&&(Ie=!0,sn=!0,fi=!0),st.id!==E&&(E=st.id,sn=!0),Ie||A!==N){zt.buffers.depth.getReversed()?(Z.copy(N.projectionMatrix),g_(Z),__(Z),fe.setValue(z,"projectionMatrix",Z)):fe.setValue(z,"projectionMatrix",N.projectionMatrix),fe.setValue(z,"viewMatrix",N.matrixWorldInverse);let Ce=fe.map.cameraPosition;Ce!==void 0&&Ce.setValue(z,dt.setFromMatrixPosition(N.matrixWorld)),kt.logarithmicDepthBuffer&&fe.setValue(z,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&fe.setValue(z,"isOrthographic",N.isOrthographicCamera===!0),A!==N&&(A=N,sn=!0,fi=!0)}if(j.isSkinnedMesh){fe.setOptional(z,j,"bindMatrix"),fe.setOptional(z,j,"bindMatrixInverse");let qe=j.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),fe.setValue(z,"boneTexture",qe.boneTexture,U))}j.isBatchedMesh&&(fe.setOptional(z,j,"batchingTexture"),fe.setValue(z,"batchingTexture",j._matricesTexture,U),fe.setOptional(z,j,"batchingIdTexture"),fe.setValue(z,"batchingIdTexture",j._indirectTexture,U),fe.setOptional(z,j,"batchingColorTexture"),j._colorsTexture!==null&&fe.setValue(z,"batchingColorTexture",j._colorsTexture,U));let pi=rt.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&se.update(j,rt,jt),(sn||Vt.receiveShadow!==j.receiveShadow)&&(Vt.receiveShadow=j.receiveShadow,fe.setValue(z,"receiveShadow",j.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(kn.envMap.value=Xt,kn.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&J.environment!==null&&(kn.envMapIntensity.value=J.environmentIntensity),sn&&(fe.setValue(z,"toneMappingExposure",T.toneMappingExposure),Vt.needsLights&&kl(kn,fi),Tt&&st.fog===!0&&Rt.refreshFogUniforms(kn,Tt),Rt.refreshMaterialUniforms(kn,st,G,ft,v.state.transmissionRenderTarget[N.id]),_r.upload(z,wi(Vt),kn,U)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(_r.upload(z,wi(Vt),kn,U),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&fe.setValue(z,"center",j.center),fe.setValue(z,"modelViewMatrix",j.modelViewMatrix),fe.setValue(z,"normalMatrix",j.normalMatrix),fe.setValue(z,"modelMatrix",j.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){let qe=st.uniformsGroups;for(let Ce=0,un=qe.length;Ce<un;Ce++){let Zi=qe[Ce];q.update(Zi,jt),q.bind(Zi,jt)}}return jt}function kl(N,J){N.ambientLightColor.needsUpdate=J,N.lightProbe.needsUpdate=J,N.directionalLights.needsUpdate=J,N.directionalLightShadows.needsUpdate=J,N.pointLights.needsUpdate=J,N.pointLightShadows.needsUpdate=J,N.spotLights.needsUpdate=J,N.spotLightShadows.needsUpdate=J,N.rectAreaLights.needsUpdate=J,N.hemisphereLights.needsUpdate=J}function Ol(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(N,J,rt){Kt.get(N.texture).__webglTexture=J,Kt.get(N.depthTexture).__webglTexture=rt;let st=Kt.get(N);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=rt===void 0,st.__autoAllocateDepthBuffer||Jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,J){let rt=Kt.get(N);rt.__webglFramebuffer=J,rt.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(N,J=0,rt=0){k=N,C=J,I=rt;let st=!0,j=null,Tt=!1,Lt=!1;if(N){let Xt=Kt.get(N);if(Xt.__useDefaultFramebuffer!==void 0)zt.bindFramebuffer(z.FRAMEBUFFER,null),st=!1;else if(Xt.__webglFramebuffer===void 0)U.setupRenderTarget(N);else if(Xt.__hasExternalTextures)U.rebindTextures(N,Kt.get(N.texture).__webglTexture,Kt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let Wt=N.depthTexture;if(Xt.__boundDepthTexture!==Wt){if(Wt!==null&&Kt.has(Wt)&&(N.width!==Wt.image.width||N.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(N)}}let ie=N.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Lt=!0);let re=Kt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(re[J])?j=re[J][rt]:j=re[J],Tt=!0):N.samples>0&&U.useMultisampledRTT(N)===!1?j=Kt.get(N).__webglMultisampledFramebuffer:Array.isArray(re)?j=re[rt]:j=re,B.copy(N.viewport),Y.copy(N.scissor),K=N.scissorTest}else B.copy(lt).multiplyScalar(G).floor(),Y.copy(pt).multiplyScalar(G).floor(),K=Et;if(zt.bindFramebuffer(z.FRAMEBUFFER,j)&&st&&zt.drawBuffers(N,j),zt.viewport(B),zt.scissor(Y),zt.setScissorTest(K),Tt){let Xt=Kt.get(N.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+J,Xt.__webglTexture,rt)}else if(Lt){let Xt=Kt.get(N.texture),ie=J||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xt.__webglTexture,rt||0,ie)}E=-1},this.readRenderTargetPixels=function(N,J,rt,st,j,Tt,Lt){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=Kt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Lt!==void 0&&(Zt=Zt[Lt]),Zt){zt.bindFramebuffer(z.FRAMEBUFFER,Zt);try{let Xt=N.texture,ie=Xt.format,re=Xt.type;if(!kt.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=N.width-st&&rt>=0&&rt<=N.height-j&&z.readPixels(J,rt,st,j,le.convert(ie),le.convert(re),Tt)}finally{let Xt=k!==null?Kt.get(k).__webglFramebuffer:null;zt.bindFramebuffer(z.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(N,J,rt,st,j,Tt,Lt){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=Kt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Lt!==void 0&&(Zt=Zt[Lt]),Zt){let Xt=N.texture,ie=Xt.format,re=Xt.type;if(!kt.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=N.width-st&&rt>=0&&rt<=N.height-j){zt.bindFramebuffer(z.FRAMEBUFFER,Zt);let Wt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Wt),z.bufferData(z.PIXEL_PACK_BUFFER,Tt.byteLength,z.STREAM_READ),z.readPixels(J,rt,st,j,le.convert(ie),le.convert(re),0);let xe=k!==null?Kt.get(k).__webglFramebuffer:null;zt.bindFramebuffer(z.FRAMEBUFFER,xe);let Ee=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await m_(z,Ee,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Wt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Tt),z.deleteBuffer(Wt),z.deleteSync(Ee),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,J=null,rt=0){N.isTexture!==!0&&(oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,N=arguments[1]);let st=Math.pow(2,-rt),j=Math.floor(N.image.width*st),Tt=Math.floor(N.image.height*st),Lt=J!==null?J.x:0,Zt=J!==null?J.y:0;U.setTexture2D(N,0),z.copyTexSubImage2D(z.TEXTURE_2D,rt,0,0,Lt,Zt,j,Tt),zt.unbindTexture()},this.copyTextureToTexture=function(N,J,rt=null,st=null,j=0){N.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,N=arguments[1],J=arguments[2],j=arguments[3]||0,rt=null);let Tt,Lt,Zt,Xt,ie,re,Wt,xe,Ee,Yt=N.isCompressedTexture?N.mipmaps[j]:N.image;rt!==null?(Tt=rt.max.x-rt.min.x,Lt=rt.max.y-rt.min.y,Zt=rt.isBox3?rt.max.z-rt.min.z:1,Xt=rt.min.x,ie=rt.min.y,re=rt.isBox3?rt.min.z:0):(Tt=Yt.width,Lt=Yt.height,Zt=Yt.depth||1,Xt=0,ie=0,re=0),st!==null?(Wt=st.x,xe=st.y,Ee=st.z):(Wt=0,xe=0,Ee=0);let de=le.convert(J.format),ye=le.convert(J.type),Vt;J.isData3DTexture?(U.setTexture3D(J,0),Vt=z.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(U.setTexture2DArray(J,0),Vt=z.TEXTURE_2D_ARRAY):(U.setTexture2D(J,0),Vt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,J.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,J.unpackAlignment);let hn=z.getParameter(z.UNPACK_ROW_LENGTH),Me=z.getParameter(z.UNPACK_IMAGE_HEIGHT),jt=z.getParameter(z.UNPACK_SKIP_PIXELS),Ie=z.getParameter(z.UNPACK_SKIP_ROWS),sn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Yt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Yt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Xt),z.pixelStorei(z.UNPACK_SKIP_ROWS,ie),z.pixelStorei(z.UNPACK_SKIP_IMAGES,re);let fi=N.isDataArrayTexture||N.isData3DTexture,fe=J.isDataArrayTexture||J.isData3DTexture;if(N.isRenderTargetTexture||N.isDepthTexture){let kn=Kt.get(N),pi=Kt.get(J),qe=Kt.get(kn.__renderTarget),Ce=Kt.get(pi.__renderTarget);zt.bindFramebuffer(z.READ_FRAMEBUFFER,qe.__webglFramebuffer),zt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let un=0;un<Zt;un++)fi&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Kt.get(N).__webglTexture,j,re+un),N.isDepthTexture?(fe&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Kt.get(J).__webglTexture,j,Ee+un),z.blitFramebuffer(Xt,ie,Tt,Lt,Wt,xe,Tt,Lt,z.DEPTH_BUFFER_BIT,z.NEAREST)):fe?z.copyTexSubImage3D(Vt,j,Wt,xe,Ee+un,Xt,ie,Tt,Lt):z.copyTexSubImage2D(Vt,j,Wt,xe,Ee+un,Xt,ie,Tt,Lt);zt.bindFramebuffer(z.READ_FRAMEBUFFER,null),zt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else fe?N.isDataTexture||N.isData3DTexture?z.texSubImage3D(Vt,j,Wt,xe,Ee,Tt,Lt,Zt,de,ye,Yt.data):J.isCompressedArrayTexture?z.compressedTexSubImage3D(Vt,j,Wt,xe,Ee,Tt,Lt,Zt,de,Yt.data):z.texSubImage3D(Vt,j,Wt,xe,Ee,Tt,Lt,Zt,de,ye,Yt):N.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,j,Wt,xe,Tt,Lt,de,ye,Yt.data):N.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,j,Wt,xe,Yt.width,Yt.height,de,Yt.data):z.texSubImage2D(z.TEXTURE_2D,j,Wt,xe,Tt,Lt,de,ye,Yt);z.pixelStorei(z.UNPACK_ROW_LENGTH,hn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Me),z.pixelStorei(z.UNPACK_SKIP_PIXELS,jt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ie),z.pixelStorei(z.UNPACK_SKIP_IMAGES,sn),j===0&&J.generateMipmaps&&z.generateMipmap(Vt),zt.unbindTexture()},this.copyTextureToTexture3D=function(N,J,rt=null,st=null,j=0){return N.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),rt=arguments[0]||null,st=arguments[1]||null,N=arguments[2],J=arguments[3],j=arguments[4]||0),oo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,J,rt,st,j)},this.initRenderTarget=function(N){Kt.get(N).__webglFramebuffer===void 0&&U.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?U.setTextureCube(N,0):N.isData3DTexture?U.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?U.setTexture2DArray(N,0):U.setTexture2D(N,0),zt.unbindTexture()},this.resetState=function(){C=0,I=0,k=null,zt.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}};var Ja=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ja=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Lh,this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,a=this.stride;r<a;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},xn=new H,qn=class s{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix4(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyNormalMatrix(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.transformDirection(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ii(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ii(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ii(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ii(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),r=Le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),r=Le(r,this.array),a=Le(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[r+a])}return new Dn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},po=class extends yi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},lr,no=new H,cr=new H,hr=new H,ur=new $t,io=new $t,vp=new Fe,xa=new H,so=new H,ya=new H,Of=new $t,zc=new $t,Uf=new $t,Qa=class extends nn{constructor(t=new po){if(super(),this.isSprite=!0,this.type="Sprite",lr===void 0){lr=new Ge;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ja(e,5);lr.setIndex([0,1,2,0,2,3]),lr.setAttribute("position",new qn(n,3,0,!1)),lr.setAttribute("uv",new qn(n,2,3,!1))}this.geometry=lr,this.material=t,this.center=new $t(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cr.setFromMatrixScale(this.matrixWorld),vp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),hr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cr.multiplyScalar(-hr.z);let n=this.material.rotation,r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));let l=this.center;ba(xa.set(-.5,-.5,0),hr,l,cr,r,a),ba(so.set(.5,-.5,0),hr,l,cr,r,a),ba(ya.set(.5,.5,0),hr,l,cr,r,a),Of.set(0,0),zc.set(1,0),Uf.set(1,1);let h=t.ray.intersectTriangle(xa,so,ya,!1,no);if(h===null&&(ba(so.set(-.5,.5,0),hr,l,cr,r,a),zc.set(0,1),h=t.ray.intersectTriangle(xa,ya,so,!1,no),h===null))return;let u=t.ray.origin.distanceTo(no);u<t.near||u>t.far||e.push({distance:u,point:no.clone(),uv:Oi.getInterpolation(no,xa,so,ya,Of,zc,Uf,new $t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ba(s,t,e,n,r,a){ur.subVectors(s,e).addScalar(.5).multiply(n),r!==void 0?(io.x=a*ur.x-r*ur.y,io.y=r*ur.x+a*ur.y):io.copy(ur),s.copy(t),s.x+=io.x,s.y+=io.y,s.applyMatrix4(vp)}var li=class extends yi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},tl=new H,el=new H,Bf=new Fe,ro=new Es,Ma=new ai,Hc=new H,Ff=new H,wr=class extends nn{constructor(t=new Ge,e=new li){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,a=e.count;r<a;r++)tl.fromBufferAttribute(e,r-1),el.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=tl.distanceTo(el);t.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,a=t.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(r),Ma.radius+=a,t.ray.intersectsSphere(Ma)===!1)return;Bf.copy(r).invert(),ro.copy(t.ray).applyMatrix4(Bf);let h=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=h*h,f=this.isLineSegments?2:1,p=n.index,_=n.attributes.position;if(p!==null){let g=Math.max(0,l.start),y=Math.min(p.count,l.start+l.count);for(let S=g,x=y-1;S<x;S+=f){let v=p.getX(S),P=p.getX(S+1),w=Sa(this,t,ro,u,v,P);w&&e.push(w)}if(this.isLineLoop){let S=p.getX(y-1),x=p.getX(g),v=Sa(this,t,ro,u,S,x);v&&e.push(v)}}else{let g=Math.max(0,l.start),y=Math.min(_.count,l.start+l.count);for(let S=g,x=y-1;S<x;S+=f){let v=Sa(this,t,ro,u,S,S+1);v&&e.push(v)}if(this.isLineLoop){let S=Sa(this,t,ro,u,y-1,g);S&&e.push(S)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){let h=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}};function Sa(s,t,e,n,r,a){let l=s.geometry.attributes.position;if(tl.fromBufferAttribute(l,r),el.fromBufferAttribute(l,a),e.distanceSqToSegment(tl,el,Hc,Ff)>n)return;Hc.applyMatrix4(s.matrixWorld);let u=t.ray.origin.distanceTo(Hc);if(!(u<t.near||u>t.far))return{distance:u,point:Ff.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}var zf=new H,Hf=new H,ss=class extends wr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,a=e.count;r<a;r+=2)zf.fromBufferAttribute(e,r),Hf.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+zf.distanceTo(Hf);t.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var mo=class extends yi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vf=new Fe,Yh=new Es,wa=new ai,Ta=new H,nl=class extends nn{constructor(t=new Ge,e=new mo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,a=t.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(r),wa.radius+=a,t.ray.intersectsSphere(wa)===!1)return;Vf.copy(r).invert(),Yh.copy(t.ray).applyMatrix4(Vf);let h=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=h*h,f=n.index,d=n.attributes.position;if(f!==null){let _=Math.max(0,l.start),g=Math.min(f.count,l.start+l.count);for(let y=_,S=g;y<S;y++){let x=f.getX(y);Ta.fromBufferAttribute(d,x),Gf(Ta,x,u,r,t,e,this)}}else{let _=Math.max(0,l.start),g=Math.min(d.count,l.start+l.count);for(let y=_,S=g;y<S;y++)Ta.fromBufferAttribute(d,y),Gf(Ta,y,u,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){let h=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}};function Gf(s,t,e,n,r,a,l){let h=Yh.distanceSqToPoint(s);if(h<e){let u=new H;Yh.closestPointToPoint(s,u),u.applyMatrix4(n);let f=r.ray.origin.distanceTo(u);if(f<r.near||f>r.far)return;a.push({distance:f,distanceToRay:Math.sqrt(h),point:u,index:t,face:null,faceIndex:null,barycoord:null,object:l})}}var il=class extends Nn{constructor(t,e,n,r,a,l,h,u,f){super(t,e,n,r,a,l,h,u,f),this.isCanvasTexture=!0,this.needsUpdate=!0}};var sl=class s extends Ge{constructor(t=[new $t(0,-.5),new $t(.5,0),new $t(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=en(r,0,Math.PI*2);let a=[],l=[],h=[],u=[],f=[],p=1/e,d=new H,_=new $t,g=new H,y=new H,S=new H,x=0,v=0;for(let P=0;P<=t.length-1;P++)switch(P){case 0:x=t[P+1].x-t[P].x,v=t[P+1].y-t[P].y,g.x=v*1,g.y=-x,g.z=v*0,S.copy(g),g.normalize(),u.push(g.x,g.y,g.z);break;case t.length-1:u.push(S.x,S.y,S.z);break;default:x=t[P+1].x-t[P].x,v=t[P+1].y-t[P].y,g.x=v*1,g.y=-x,g.z=v*0,y.copy(g),g.x+=S.x,g.y+=S.y,g.z+=S.z,g.normalize(),u.push(g.x,g.y,g.z),S.copy(y)}for(let P=0;P<=e;P++){let w=n+P*p*r,T=Math.sin(w),O=Math.cos(w);for(let C=0;C<=t.length-1;C++){d.x=t[C].x*T,d.y=t[C].y,d.z=t[C].x*O,l.push(d.x,d.y,d.z),_.x=P/e,_.y=C/(t.length-1),h.push(_.x,_.y);let I=u[3*C+0]*T,k=u[3*C+1],E=u[3*C+0]*O;f.push(I,k,E)}}for(let P=0;P<e;P++)for(let w=0;w<t.length-1;w++){let T=w+P*t.length,O=T,C=T+t.length,I=T+t.length+1,k=T+1;a.push(O,C,k),a.push(I,k,C)}this.setIndex(a),this.setAttribute("position",new be(l,3)),this.setAttribute("uv",new be(h,2)),this.setAttribute("normal",new be(f,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var rl=class s extends Ge{constructor(t=1,e=1,n=1,r=32,a=1,l=!1,h=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:h,thetaLength:u};let f=this;r=Math.floor(r),a=Math.floor(a);let p=[],d=[],_=[],g=[],y=0,S=[],x=n/2,v=0;P(),l===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(p),this.setAttribute("position",new be(d,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(g,2));function P(){let T=new H,O=new H,C=0,I=(e-t)/n;for(let k=0;k<=a;k++){let E=[],A=k/a,B=A*(e-t)+t;for(let Y=0;Y<=r;Y++){let K=Y/r,X=K*u+h,et=Math.sin(X),V=Math.cos(X);O.x=B*et,O.y=-A*n+x,O.z=B*V,d.push(O.x,O.y,O.z),T.set(et,I,V).normalize(),_.push(T.x,T.y,T.z),g.push(K,1-A),E.push(y++)}S.push(E)}for(let k=0;k<r;k++)for(let E=0;E<a;E++){let A=S[E][k],B=S[E+1][k],Y=S[E+1][k+1],K=S[E][k+1];(t>0||E!==0)&&(p.push(A,B,K),C+=3),(e>0||E!==a-1)&&(p.push(B,Y,K),C+=3)}f.addGroup(v,C,0),v+=C}function w(T){let O=y,C=new $t,I=new H,k=0,E=T===!0?t:e,A=T===!0?1:-1;for(let Y=1;Y<=r;Y++)d.push(0,x*A,0),_.push(0,A,0),g.push(.5,.5),y++;let B=y;for(let Y=0;Y<=r;Y++){let X=Y/r*u+h,et=Math.cos(X),V=Math.sin(X);I.x=E*V,I.y=x*A,I.z=E*et,d.push(I.x,I.y,I.z),_.push(0,A,0),C.x=et*.5+.5,C.y=V*.5*A+.5,g.push(C.x,C.y),y++}for(let Y=0;Y<r;Y++){let K=O+Y,X=B+Y;T===!0?p.push(X,X+1,K):p.push(X+1,X,K),k+=3}f.addGroup(v,k,T===!0?1:2),v+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ol=class s extends rl{constructor(t=1,e=1,n=32,r=1,a=!1,l=0,h=Math.PI*2){super(0,t,e,n,r,a,l,h),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:h}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ea=new H,Aa=new H,Vc=new H,Pa=new Oi,go=class extends Ge{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let r=Math.pow(10,4),a=Math.cos(mr*e),l=t.getIndex(),h=t.getAttribute("position"),u=l?l.count:h.count,f=[0,0,0],p=["a","b","c"],d=new Array(3),_={},g=[];for(let y=0;y<u;y+=3){l?(f[0]=l.getX(y),f[1]=l.getX(y+1),f[2]=l.getX(y+2)):(f[0]=y,f[1]=y+1,f[2]=y+2);let{a:S,b:x,c:v}=Pa;if(S.fromBufferAttribute(h,f[0]),x.fromBufferAttribute(h,f[1]),v.fromBufferAttribute(h,f[2]),Pa.getNormal(Vc),d[0]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,d[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,d[2]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let P=0;P<3;P++){let w=(P+1)%3,T=d[P],O=d[w],C=Pa[p[P]],I=Pa[p[w]],k=`${T}_${O}`,E=`${O}_${T}`;E in _&&_[E]?(Vc.dot(_[E].normal)<=a&&(g.push(C.x,C.y,C.z),g.push(I.x,I.y,I.z)),_[E]=null):k in _||(_[k]={index0:f[P],index1:f[w],normal:Vc.clone()})}}for(let y in _)if(_[y]){let{index0:S,index1:x}=_[y];Ea.fromBufferAttribute(h,S),Aa.fromBufferAttribute(h,x),g.push(Ea.x,Ea.y,Ea.z),g.push(Aa.x,Aa.y,Aa.z)}this.setAttribute("position",new be(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var _o=class s extends Ge{constructor(t=1,e=32,n=16,r=0,a=Math.PI*2,l=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:a,thetaStart:l,thetaLength:h},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let u=Math.min(l+h,Math.PI),f=0,p=[],d=new H,_=new H,g=[],y=[],S=[],x=[];for(let v=0;v<=n;v++){let P=[],w=v/n,T=0;v===0&&l===0?T=.5/e:v===n&&u===Math.PI&&(T=-.5/e);for(let O=0;O<=e;O++){let C=O/e;d.x=-t*Math.cos(r+C*a)*Math.sin(l+w*h),d.y=t*Math.cos(l+w*h),d.z=t*Math.sin(r+C*a)*Math.sin(l+w*h),y.push(d.x,d.y,d.z),_.copy(d).normalize(),S.push(_.x,_.y,_.z),x.push(C+T,1-w),P.push(f++)}p.push(P)}for(let v=0;v<n;v++)for(let P=0;P<e;P++){let w=p[v][P+1],T=p[v][P],O=p[v+1][P],C=p[v+1][P+1];(v!==0||l>0)&&g.push(w,T,C),(v!==n-1||u<Math.PI)&&g.push(T,O,C)}this.setIndex(g),this.setAttribute("position",new be(y,3)),this.setAttribute("normal",new be(S,3)),this.setAttribute("uv",new be(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var al=class s extends Ge{constructor(t=1,e=.4,n=12,r=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:a},n=Math.floor(n),r=Math.floor(r);let l=[],h=[],u=[],f=[],p=new H,d=new H,_=new H;for(let g=0;g<=n;g++)for(let y=0;y<=r;y++){let S=y/r*a,x=g/n*Math.PI*2;d.x=(t+e*Math.cos(x))*Math.cos(S),d.y=(t+e*Math.cos(x))*Math.sin(S),d.z=e*Math.sin(x),h.push(d.x,d.y,d.z),p.x=t*Math.cos(S),p.y=t*Math.sin(S),_.subVectors(d,p).normalize(),u.push(_.x,_.y,_.z),f.push(y/r),f.push(g/n)}for(let g=1;g<=n;g++)for(let y=1;y<=r;y++){let S=(r+1)*g+y-1,x=(r+1)*(g-1)+y-1,v=(r+1)*(g-1)+y,P=(r+1)*g+y;l.push(S,x,P),l.push(x,v,P)}this.setIndex(l),this.setAttribute("position",new be(h,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ll=class extends Ge{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,r=new H,a=new H;if(t.index!==null){let l=t.attributes.position,h=t.index,u=t.groups;u.length===0&&(u=[{start:0,count:h.count,materialIndex:0}]);for(let f=0,p=u.length;f<p;++f){let d=u[f],_=d.start,g=d.count;for(let y=_,S=_+g;y<S;y+=3)for(let x=0;x<3;x++){let v=h.getX(y+x),P=h.getX(y+(x+1)%3);r.fromBufferAttribute(l,v),a.fromBufferAttribute(l,P),Wf(r,a,n)===!0&&(e.push(r.x,r.y,r.z),e.push(a.x,a.y,a.z))}}}else{let l=t.attributes.position;for(let h=0,u=l.count/3;h<u;h++)for(let f=0;f<3;f++){let p=3*h+f,d=3*h+(f+1)%3;r.fromBufferAttribute(l,p),a.fromBufferAttribute(l,d),Wf(r,a,n)===!0&&(e.push(r.x,r.y,r.z),e.push(a.x,a.y,a.z))}}this.setAttribute("position",new be(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Wf(s,t,e){let n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(r)===!0?!1:(e.add(n),e.add(r),!0)}var vo=class extends yi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lp,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ra(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function hb(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Tr=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],a=e[n-1];n:{t:{let l;e:{i:if(!(t<r)){for(let h=n+2;;){if(r===void 0){if(t<a)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===h)break;if(a=r,r=e[++n],t<r)break t}l=e.length;break e}if(!(t>=a)){let h=e[1];t<h&&(n=2,a=h);for(let u=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(r=a,a=e[--n-1],t>=a)break t}l=n,n=0;break e}break n}for(;n<l;){let h=n+l>>>1;t<e[h]?l=h:n=h+1}if(r=e[n],a=e[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,r)}return this.interpolate_(n,a,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,a=t*r;for(let l=0;l!==r;++l)e[l]=n[a+l];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$h=class extends Tr{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fd,endingEnd:Fd}}intervalChanged_(t,e,n){let r=this.parameterPositions,a=t-2,l=t+1,h=r[a],u=r[l];if(h===void 0)switch(this.getSettings_().endingStart){case zd:a=t,h=2*e-n;break;case Hd:a=r.length-2,h=e+r[a]-r[a+1];break;default:a=t,h=n}if(u===void 0)switch(this.getSettings_().endingEnd){case zd:l=t,u=2*n-e;break;case Hd:l=1,u=n+r[1]-r[0];break;default:l=t-1,u=e}let f=(n-e)*.5,p=this.valueSize;this._weightPrev=f/(e-h),this._weightNext=f/(u-n),this._offsetPrev=a*p,this._offsetNext=l*p}interpolate_(t,e,n,r){let a=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=t*h,f=u-h,p=this._offsetPrev,d=this._offsetNext,_=this._weightPrev,g=this._weightNext,y=(n-e)/(r-e),S=y*y,x=S*y,v=-_*x+2*_*S-_*y,P=(1+_)*x+(-1.5-2*_)*S+(-.5+_)*y+1,w=(-1-g)*x+(1.5+g)*S+.5*y,T=g*x-g*S;for(let O=0;O!==h;++O)a[O]=v*l[p+O]+P*l[f+O]+w*l[u+O]+T*l[d+O];return a}},Kh=class extends Tr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let a=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=t*h,f=u-h,p=(n-e)/(r-e),d=1-p;for(let _=0;_!==h;++_)a[_]=l[f+_]*d+l[u+_]*p;return a}},Jh=class extends Tr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},ci=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ra(e,this.TimeBufferType),this.values=Ra(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ra(t.times,Array),values:Ra(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Jh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Kh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $h(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ua:e=this.InterpolantFactoryMethodDiscrete;break;case Ch:e=this.InterpolantFactoryMethodLinear;break;case fc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ua;case this.InterpolantFactoryMethodLinear:return Ch;case this.InterpolantFactoryMethodSmooth:return fc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,a=0,l=r-1;for(;a!==r&&n[a]<t;)++a;for(;l!==-1&&n[l]>e;)--l;if(++l,a!==0||l!==r){a>=l&&(l=Math.max(l,1),a=l-1);let h=this.getValueSize();this.times=n.slice(a,l),this.values=this.values.slice(a*h,l*h)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let h=0;h!==a;h++){let u=n[h];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,h,u),t=!1;break}if(l!==null&&l>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,h,u,l),t=!1;break}l=u}if(r!==void 0&&hb(r))for(let h=0,u=r.length;h!==u;++h){let f=r[h];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,h,f),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===fc,a=t.length-1,l=1;for(let h=1;h<a;++h){let u=!1,f=t[h],p=t[h+1];if(f!==p&&(h!==1||f!==t[0]))if(r)u=!0;else{let d=h*n,_=d-n,g=d+n;for(let y=0;y!==n;++y){let S=e[d+y];if(S!==e[_+y]||S!==e[g+y]){u=!0;break}}}if(u){if(h!==l){t[l]=t[h];let d=h*n,_=l*n;for(let g=0;g!==n;++g)e[_+g]=e[d+g]}++l}}if(a>0){t[l]=t[a];for(let h=a*n,u=l*n,f=0;f!==n;++f)e[u+f]=e[h+f];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=Ch;var Ps=class extends ci{constructor(t,e,n){super(t,e,n)}};Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=Ua;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var jh=class extends ci{};jh.prototype.ValueTypeName="color";var Qh=class extends ci{};Qh.prototype.ValueTypeName="number";var tu=class extends Tr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let a=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=(n-e)/(r-e),f=t*h;for(let p=f+h;f!==p;f+=4)oi.slerpFlat(a,0,l,f-h,l,f,u);return a}},cl=class extends ci{InterpolantFactoryMethodLinear(t){return new tu(this.times,this.values,this.getValueSize(),t)}};cl.prototype.ValueTypeName="quaternion";cl.prototype.InterpolantFactoryMethodSmooth=void 0;var Rs=class extends ci{constructor(t,e,n){super(t,e,n)}};Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=Ua;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var eu=class extends ci{};eu.prototype.ValueTypeName="vector";var nu=class{constructor(t,e,n){let r=this,a=!1,l=0,h=0,u,f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(p){h++,a===!1&&r.onStart!==void 0&&r.onStart(p,l,h),a=!0},this.itemEnd=function(p){l++,r.onProgress!==void 0&&r.onProgress(p,l,h),l===h&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return u?u(p):p},this.setURLModifier=function(p){return u=p,this},this.addHandler=function(p,d){return f.push(p,d),this},this.removeHandler=function(p){let d=f.indexOf(p);return d!==-1&&f.splice(d,2),this},this.getHandler=function(p){for(let d=0,_=f.length;d<_;d+=2){let g=f[d],y=f[d+1];if(g.global&&(g.lastIndex=0),g.test(p))return y}return null}}},ub=new nu,iu=class{constructor(t){this.manager=t!==void 0?t:ub,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,a){n.load(t,r,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};iu.DEFAULT_MATERIAL_NAME="__DEFAULT";var hl=class extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new me(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Gc=new Fe,Zf=new H,Xf=new H,su=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fo,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Zf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zf),Xf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xf),e.updateMatrixWorld(),Gc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ru=class extends su{constructor(){super(new qa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ul=class extends hl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new ru}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},dl=class extends hl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var fl=class extends Ge{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var mu="\\[\\]\\.:\\/",db=new RegExp("["+mu+"]","g"),gu="[^"+mu+"]",fb="[^"+mu.replace("\\.","")+"]",pb=/((?:WC+[\/:])*)/.source.replace("WC",gu),mb=/(WCOD+)?/.source.replace("WCOD",fb),gb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gu),_b=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gu),vb=new RegExp("^"+pb+mb+gb+_b+"$"),xb=["material","materials","bones","map"],ou=class{constructor(t,e,n){let r=n||Ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=n.length;r!==a;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ve=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(db,"")}static parseTrackName(t){let e=vb.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=n.nodeName.substring(r+1);xb.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(a){for(let l=0;l<a.length;l++){let h=a[l];if(h.name===e||h.uuid===e)return h;let u=n(h.children);if(u)return u}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,a=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let f=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===f){f=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(f!==void 0){if(t[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}let l=t[r];if(l===void 0){let f=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+r+" but it wasn't found.",t);return}let h=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?h=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}u=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=a}else l.fromArray!==void 0&&l.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(u=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=r;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ve.Composite=ou;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wM=new Float32Array(1);var Cs=class extends ja{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var xo=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(en(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var qf=new H,Ca=new H,pl=class{constructor(t=new H,e=new H){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){qf.subVectors(t,this.start),Ca.subVectors(this.end,this.start);let n=Ca.dot(Ca),a=Ca.dot(qf)/n;return e&&(a=en(a,0,1)),a}closestPointToPoint(t,e,n){let r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Yf=new H,La,Wc,ml=class extends nn{constructor(t=new H(0,0,1),e=new H(0,0,0),n=1,r=16776960,a=n*.2,l=a*.2){super(),this.type="ArrowHelper",La===void 0&&(La=new Ge,La.setAttribute("position",new be([0,0,0,0,1,0],3)),Wc=new rl(0,.5,1,5,1),Wc.translate(0,-.5,0)),this.position.copy(e),this.line=new wr(La,new li({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Be(Wc,new Wn({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,a,l)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Yf.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Yf,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};var gl=class extends Gi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var xp={type:"change"},vu={type:"start"},bp={type:"end"},Ml=new Es,yp=new ni,bb=Math.cos(70*xl.DEG2RAD),je=new H,Tn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_u=1e-6,Sl=class extends gl{constructor(t,e=null){super(t,e),this.state=ke.NONE,this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ls.ROTATE,MIDDLE:Ls.DOLLY,RIGHT:Ls.PAN},this.touches={ONE:Is.ROTATE,TWO:Is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new oi,this._lastTargetPosition=new H,this._quat=new oi().setFromUnitVectors(t.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xo,this._sphericalDelta=new xo,this._scale=1,this._panOffset=new H,this._rotateStart=new $t,this._rotateEnd=new $t,this._rotateDelta=new $t,this._panStart=new $t,this._panEnd=new $t,this._panDelta=new $t,this._dollyStart=new $t,this._dollyEnd=new $t,this._dollyDelta=new $t,this._dollyDirection=new H,this._mouse=new $t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Sb.bind(this),this._onPointerDown=Mb.bind(this),this._onPointerUp=wb.bind(this),this._onContextMenu=Lb.bind(this),this._onMouseWheel=Ab.bind(this),this._onKeyDown=Pb.bind(this),this._onTouchStart=Rb.bind(this),this._onTouchMove=Cb.bind(this),this._onMouseDown=Tb.bind(this),this._onMouseMove=Eb.bind(this),this._interceptControlDown=Ib.bind(this),this._interceptControlUp=Db.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xp),this.update(),this.state=ke.NONE}update(t=null){let e=this.object.position;je.copy(e).sub(this.target),je.applyQuaternion(this._quat),this._spherical.setFromVector3(je),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Tn:n>Math.PI&&(n-=Tn),r<-Math.PI?r+=Tn:r>Math.PI&&(r-=Tn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=l!=this._spherical.radius}if(je.setFromSpherical(this._spherical),je.applyQuaternion(this._quatInverse),e.copy(this.target).add(je),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){let h=je.length();l=this._clampDistance(h*this._scale);let u=h-l;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),a=!!u}else if(this.object.isOrthographicCamera){let h=new H(this._mouse.x,this._mouse.y,0);h.unproject(this.object);let u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=u!==this.object.zoom;let f=new H(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(h),this.object.updateMatrixWorld(),l=je.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(Ml.origin.copy(this.object.position),Ml.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ml.direction))<bb?this.object.lookAt(this.target):(yp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ml.intersectPlane(yp,this.target))))}else if(this.object.isOrthographicCamera){let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>_u||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_u||this._lastTargetPosition.distanceToSquared(this.target)>_u?(this.dispatchEvent(xp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Tn/60*this.autoRotateSpeed*t:Tn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){je.setFromMatrixColumn(e,0),je.multiplyScalar(-t),this._panOffset.add(je)}_panUp(t,e){this.screenSpacePanning===!0?je.setFromMatrixColumn(e,1):(je.setFromMatrixColumn(e,0),je.crossVectors(this.object.up,je)),je.multiplyScalar(t),this._panOffset.add(je)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;je.copy(r).sub(this.target);let a=je.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/n.clientHeight,this.object.matrix),this._panUp(2*e*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=t-n.left,a=e-n.top,l=n.width,h=n.height;this._mouse.x=r/l*2-1,this._mouse.y=-(a/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,a=Math.sqrt(n*n+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,a=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let l=(t.pageX+e.x)*.5,h=(t.pageY+e.y)*.5;this._updateZoomParameters(l,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new $t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Mb(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Sb(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function wb(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bp),this.state=ke.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Tb(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ls.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ke.DOLLY;break;case Ls.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ke.ROTATE}break;case Ls.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(vu)}function Eb(s){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Ab(s){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(s.preventDefault(),this.dispatchEvent(vu),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(bp))}function Pb(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function Rb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Is.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ke.TOUCH_ROTATE;break;case Is.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case Is.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ke.TOUCH_DOLLY_PAN;break;case Is.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(vu)}function Cb(s){switch(this._trackPointer(s),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ke.NONE}}function Lb(s){this.enabled!==!1&&s.preventDefault()}function Ib(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Db(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Mp=new Gn,wl=new H,Pr=class extends fl{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new be(t,3)),this.setAttribute("uv",new be(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Cs(e,6,1);return this.setAttribute("instanceStart",new qn(n,3,0)),this.setAttribute("instanceEnd",new qn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Cs(e,6,1);return this.setAttribute("instanceColorStart",new qn(n,3,0)),this.setAttribute("instanceColorEnd",new qn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new ll(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Mp.setFromBufferAttribute(e),this.boundingBox.union(Mp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let a=0,l=t.count;a<l;a++)wl.fromBufferAttribute(t,a),r=Math.max(r,n.distanceToSquared(wl)),wl.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(wl));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}};At.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new $t(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Mn.line={uniforms:yl.merge([At.common,At.fog,At.line]),vertexShader:`
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
		`};var rs=class extends Xn{static get type(){return"LineMaterial"}constructor(t){super({uniforms:yl.clone(Mn.line.uniforms),vertexShader:Mn.line.vertexShader,fragmentShader:Mn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var xu=new Ne,Sp=new H,wp=new H,an=new Ne,ln=new Ne,bi=new Ne,yu=new H,bu=new Fe,cn=new pl,Tp=new H,Tl=new Gn,El=new ai,Mi=new Ne,Si,Ds;function Ep(s,t,e){return Mi.set(0,0,-t,1).applyMatrix4(s.projectionMatrix),Mi.multiplyScalar(1/Mi.w),Mi.x=Ds/e.width,Mi.y=Ds/e.height,Mi.applyMatrix4(s.projectionMatrixInverse),Mi.multiplyScalar(1/Mi.w),Math.abs(Math.max(Mi.x,Mi.y))}function Nb(s,t){let e=s.matrixWorld,n=s.geometry,r=n.attributes.instanceStart,a=n.attributes.instanceEnd,l=Math.min(n.instanceCount,r.count);for(let h=0,u=l;h<u;h++){cn.start.fromBufferAttribute(r,h),cn.end.fromBufferAttribute(a,h),cn.applyMatrix4(e);let f=new H,p=new H;Si.distanceSqToSegment(cn.start,cn.end,p,f),p.distanceTo(f)<Ds*.5&&t.push({point:p,pointOnLine:f,distance:Si.origin.distanceTo(p),object:s,face:null,faceIndex:h,uv:null,uv1:null})}}function kb(s,t,e){let n=t.projectionMatrix,a=s.material.resolution,l=s.matrixWorld,h=s.geometry,u=h.attributes.instanceStart,f=h.attributes.instanceEnd,p=Math.min(h.instanceCount,u.count),d=-t.near;Si.at(1,bi),bi.w=1,bi.applyMatrix4(t.matrixWorldInverse),bi.applyMatrix4(n),bi.multiplyScalar(1/bi.w),bi.x*=a.x/2,bi.y*=a.y/2,bi.z=0,yu.copy(bi),bu.multiplyMatrices(t.matrixWorldInverse,l);for(let _=0,g=p;_<g;_++){if(an.fromBufferAttribute(u,_),ln.fromBufferAttribute(f,_),an.w=1,ln.w=1,an.applyMatrix4(bu),ln.applyMatrix4(bu),an.z>d&&ln.z>d)continue;if(an.z>d){let w=an.z-ln.z,T=(an.z-d)/w;an.lerp(ln,T)}else if(ln.z>d){let w=ln.z-an.z,T=(ln.z-d)/w;ln.lerp(an,T)}an.applyMatrix4(n),ln.applyMatrix4(n),an.multiplyScalar(1/an.w),ln.multiplyScalar(1/ln.w),an.x*=a.x/2,an.y*=a.y/2,ln.x*=a.x/2,ln.y*=a.y/2,cn.start.copy(an),cn.start.z=0,cn.end.copy(ln),cn.end.z=0;let S=cn.closestPointToPointParameter(yu,!0);cn.at(S,Tp);let x=xl.lerp(an.z,ln.z,S),v=x>=-1&&x<=1,P=yu.distanceTo(Tp)<Ds*.5;if(v&&P){cn.start.fromBufferAttribute(u,_),cn.end.fromBufferAttribute(f,_),cn.start.applyMatrix4(l),cn.end.applyMatrix4(l);let w=new H,T=new H;Si.distanceSqToSegment(cn.start,cn.end,T,w),e.push({point:T,pointOnLine:w,distance:Si.origin.distanceTo(T),object:s,face:null,faceIndex:_,uv:null,uv1:null})}}}var Al=class extends Be{constructor(t=new Pr,e=new rs({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,r=new Float32Array(2*e.count);for(let l=0,h=0,u=e.count;l<u;l++,h+=2)Sp.fromBufferAttribute(e,l),wp.fromBufferAttribute(n,l),r[h]=h===0?0:r[h-1],r[h+1]=r[h]+Sp.distanceTo(wp);let a=new Cs(r,2,1);return t.setAttribute("instanceDistanceStart",new qn(a,1,0)),t.setAttribute("instanceDistanceEnd",new qn(a,1,1)),this}raycast(t,e){let n=this.material.worldUnits,r=t.camera;r===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let a=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Si=t.ray;let l=this.matrixWorld,h=this.geometry,u=this.material;Ds=u.linewidth+a,h.boundingSphere===null&&h.computeBoundingSphere(),El.copy(h.boundingSphere).applyMatrix4(l);let f;if(n)f=Ds*.5;else{let d=Math.max(r.near,El.distanceToPoint(Si.origin));f=Ep(r,d,u.resolution)}if(El.radius+=f,Si.intersectsSphere(El)===!1)return;h.boundingBox===null&&h.computeBoundingBox(),Tl.copy(h.boundingBox).applyMatrix4(l);let p;if(n)p=Ds*.5;else{let d=Math.max(r.near,Tl.distanceToPoint(Si.origin));p=Ep(r,d,u.resolution)}Tl.expandByScalar(p),Si.intersectsBox(Tl)!==!1&&(n?Nb(this,e):kb(this,r,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(xu),this.material.uniforms.resolution.value.set(xu.z,xu.w))}};var Rr=class extends Pr{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,n=new Float32Array(2*e);for(let r=0;r<e;r+=3)n[2*r]=t[r],n[2*r+1]=t[r+1],n[2*r+2]=t[r+2],n[2*r+3]=t[r+3],n[2*r+4]=t[r+4],n[2*r+5]=t[r+5];return super.setPositions(n),this}setColors(t){let e=t.length-3,n=new Float32Array(2*e);for(let r=0;r<e;r+=3)n[2*r]=t[r],n[2*r+1]=t[r+1],n[2*r+2]=t[r+2],n[2*r+3]=t[r+3],n[2*r+4]=t[r+4],n[2*r+5]=t[r+5];return super.setColors(n),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var Pl=class extends Al{constructor(t=new Rr,e=new rs({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var Ap=Math.PI/180;function Ob(s,t="#cfe0f2",e="rgba(8,18,26,.75)"){let n=document.createElement("canvas");n.width=256,n.height=64;let r=n.getContext("2d");r.font="bold 30px Helvetica, Arial, sans-serif";let a=Math.min(250,r.measureText(s).width+24);r.fillStyle=e,r.fillRect(128-a/2,8,a,48),r.fillStyle=t,r.textAlign="center",r.textBaseline="middle",r.fillText(s,128,33);let l=new il(n);l.minFilter=Vn;let h=new Qa(new po({map:l,depthTest:!1,transparent:!0}));return h.userData.aspect=4,h.renderOrder=10,h}var Pp=s=>{let t=Math.pow(10,Math.floor(Math.log10(s/4))),e=s/4/t;return(e<1.5?1:e<3.5?2:e<7.5?5:10)*t};function Ub(){let s=new Fi,t=.67,e=.026,n=new vo({color:"#9db2c8",roughness:.5,metalness:.1,emissive:"#1a2a3c"}),r=new vo({color:"#e8eef5",roughness:.5,emissive:"#223347"}),a=[];for(let g=0;g<=24;g++){let y=g/24,S=e*Math.pow(Math.sin(Math.PI*Math.pow(y,.75)),.55)*(y>.7?1-(y-.7)*1.2*(y-.7)/.3*.5:1);a.push(new $t(Math.max(S,.0015),(y-.5)*t))}let l=new Be(new sl(a,20),n);l.rotation.x=-Math.PI/2,s.add(l);let h=new Be(new Zn(.012,.05,.12),n);h.position.set(0,e+.02,-.04),s.add(h);let u=(g,y,S)=>{let x=new Be(new Zn(.075,.003,.03),r);return x.position.set(g,0,y),x.rotation.z=S,x};s.add(u(0,.27,0));let f=u(0,.27,Math.PI/2);s.add(f);let p=new Be(new Zn(.05,.003,.02),r);p.position.set(0,0,-.17),s.add(p);let d=new Be(new al(.014,.003,6,16),r);d.position.set(0,0,.345),s.add(d);let _=new Be(new _o(.008,8,8),new Wn({color:"#e0a93b"}));return _.position.set(0,0,-.34),s.add(_),s}var Rl=class{constructor(t){this.host=t,this.dirty=!0,this.active=!1,this.t=0,this.follow=!1,this.color="step",this.plan=null,this.renderer=new Ka({antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.setClearColor("#08121a"),t.append(this.renderer.domElement),this.scene=new Ja,this.scene.fog=null,this.cam=new bn(42,1,.01,2e3),this.cam.position.set(6,4,8),this.ctl=new Sl(this.cam,this.renderer.domElement),this.ctl.addEventListener("change",()=>{this.dirty=!0}),this.scene.add(new dl("#8fa6c0",1.1));let e=new ul("#ffffff",2);e.position.set(3,8,5),this.scene.add(e),this.world=new Fi,this.scene.add(this.world),this.boat=Ub(),this.boat.rotation.order="YXZ",this.scene.add(this.boat);let n=new Ge;n.setAttribute("position",new be([0,0,0],3)),this.dot=new nl(n,new mo({color:"#ffb12b",size:11,sizeAttenuation:!1,depthTest:!1,transparent:!0})),this.dot.renderOrder=20,this.scene.add(this.dot),this.lm=new rs({color:16777215,linewidth:3,vertexColors:!0,worldUnits:!1}),this.sprites=[],new ResizeObserver(()=>this.resize()).observe(t),this.resize();let r=()=>{requestAnimationFrame(r),this.active&&this.dirty&&(this.dirty=!1,this.ctl.update(),this.updateSprites(),this.renderer.render(this.scene,this.cam))};r()}resize(){let t=this.host.clientWidth||600,e=this.host.clientHeight||400;this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.cam.aspect=t/e,this.cam.updateProjectionMatrix(),this.lm.resolution.set(t,e),this.dirty=!0}setActive(t){this.active=t,this.dirty=!0,t&&this.resize()}updateSprites(){let t=this.cam.position.distanceTo(this.ctl.target);this.sprites.forEach(e=>{let n=(e.userData.size||.03)*t;e.scale.set(n*e.userData.aspect,n,1)})}sprite(t,e,n,r){let a=Ob(t,r);return a.position.copy(e),a.userData.size=n,this.world.add(a),this.sprites.push(a),a}clear(){for(;this.world.children.length;)this.world.children.pop().traverse?.(e=>{e.geometry?.dispose(),e.material&&e.material!==this.lm&&(e.material.map?.dispose(),e.material.dispose())});this.sprites=[]}P(t){return new H(t.x,-t.z,-t.y)}setPlan(t,e={}){this.plan=t,this.clear();let n=t.pts,r=t.stats;if(n.length<2){this.dirty=!0;return}let a=Math.max(1,.12*Math.max(r.w,r.l,r.maxDepth)),l=Math.min(r.bb.x0,-1)-a,h=Math.max(r.bb.x1,1)+a,u=Math.min(r.bb.y0,-1)-a,f=Math.max(r.bb.y1,1)+a,p=Math.max(e.depthLimit||0,r.maxDepth*1.2,1.2),d=(l+h)/2,_=-(u+f)/2,g=h-l,y=f-u;this.size=Math.max(g,y,p),this.cx=d,this.cz=_,this.dmax=p;let S=new Be(new Zn(g,p,y),new Wn({color:"#0f4a7a",transparent:!0,opacity:.1,side:gn,depthWrite:!1}));S.position.set(d,-p/2,_),this.world.add(S);let x=new ss(new go(new Zn(g,p,y)),new li({color:"#2f6ca8",transparent:!0,opacity:.8}));x.position.copy(S.position),this.world.add(x);let v=new Be(new As(g,y),new Wn({color:"#1b6fb5",transparent:!0,opacity:.12,side:Hn,depthWrite:!1}));v.rotation.x=-Math.PI/2,v.position.set(d,0,_),this.world.add(v);let P=Pp(Math.max(g,y)),w=(dt,nt)=>{let wt=new li({color:"#35597d",transparent:!0,opacity:nt}),Ft=[];for(let Gt=Math.ceil(l/P)*P;Gt<=h+1e-6;Gt+=P)Ft.push(Gt,dt,_-y/2,Gt,dt,_+y/2);for(let Gt=Math.ceil(-f/P)*P;Gt<=-u+1e-6;Gt+=P)Ft.push(l,dt,Gt,h,dt,Gt);let Mt=new Ge;Mt.setAttribute("position",new be(Ft,3));let z=new ss(Mt,wt);this.world.add(z)};w(0,.6),w(-p,.25);let T=new ml(new H(0,0,-1),new H(l+.5*a,0,_-y/2+.2*a),Math.max(a*.9,this.size*.08),14702667,this.size*.02,this.size*.012);this.world.add(T),this.sprite("N",new H(l+.5*a,0,_-y/2-this.size*.05),.04,"#ff8a7d");let O=l,C=_+y/2,I=Pp(p),k=[O,0,C,O,-p,C];for(let dt=0;dt<=p+1e-6;dt+=I)k.push(O,-dt,C,O-this.size*.015,-dt,C),this.sprite(dt.toFixed(I<1?1:0)+" m",new H(O-this.size*.07,-dt,C),.03,"#9fc3ea");let E=new Ge;if(E.setAttribute("position",new be(k,3)),this.world.add(new ss(E,new li({color:"#8fb4dc"}))),e.depthLimit&&e.depthLimit<=p){let dt=new Be(new As(g,y),new Wn({color:"#e0584b",transparent:!0,opacity:.08,side:Hn,depthWrite:!1}));dt.rotation.x=-Math.PI/2,dt.position.set(d,-e.depthLimit,_),this.world.add(dt)}let A=r.bb.x0,B=r.bb.x1,Y=r.bb.y0,K=r.bb.y1,X=new ss(new go(new Zn(Math.max(B-A,.001),Math.max(r.maxDepth,.001),Math.max(K-Y,.001))),new li({color:"#e0a93b",transparent:!0,opacity:.55}));X.position.set((A+B)/2,-r.maxDepth/2,-(Y+K)/2),this.world.add(X),B-A>.2&&this.sprite(`B ${(B-A).toFixed(1)} m`,new H((A+B)/2,0,-Y+this.size*.03),.03,"#ffd27a"),K-Y>.2&&this.sprite(`L ${(K-Y).toFixed(1)} m`,new H(B+this.size*.04,0,-(Y+K)/2),.03,"#ffd27a"),r.maxDepth>.2&&this.sprite(`T ${r.maxDepth.toFixed(1)} m`,new H(B,-r.maxDepth/2,-Y),.03,"#ffd27a");let et=[],V=[],ft=[],G=new me,ht=Math.max(r.maxDepth,.5);n.forEach(dt=>{let nt=this.P(dt);et.push(nt.x,nt.y,nt.z),ft.push(nt.x,0,nt.z),this.color==="depth"?G.setHSL(.55-.1*dt.z/ht,.9,.45+.25*(1-dt.z/ht)):G.set(Rn[t.steps?.[dt.i]?.t]?.color||"#9aa7b8"),V.push(G.r,G.g,G.b)});let xt=new Rr;xt.setPositions(et),xt.setColors(V);let lt=new Pl(xt,this.lm);lt.computeLineDistances(),this.world.add(lt);let pt=new Ge;pt.setAttribute("position",new be(ft,3)),this.world.add(new wr(pt,new li({color:"#7ea6d1",transparent:!0,opacity:.35})));let Et=[],$=-99;n.forEach(dt=>{if(dt.t-$>=Math.max(5,r.dur/40)&&dt.z>.05){$=dt.t;let nt=this.P(dt);Et.push(nt.x,nt.y,nt.z,nt.x,0,nt.z)}});let W=new Ge;W.setAttribute("position",new be(Et,3)),this.world.add(new ss(W,new li({color:"#4d7aa8",transparent:!0,opacity:.35})));let ot={};n.forEach(dt=>{if(dt.i>=0&&!ot[dt.i]){ot[dt.i]=1;let nt=this.P(dt),wt=new Be(new _o(this.size*.006,10,10),new Wn({color:Rn[t.steps?.[dt.i]?.t]?.color||"#fff"}));wt.position.copy(nt),this.world.add(wt),this.sprite(`${dt.i+1} ${Rn[t.steps?.[dt.i]?.t]?.label||""}`,nt.clone().add(new H(0,this.size*.03,0)),.02)}});let Z=new Be(new ol(this.size*.01,this.size*.03,12),new Wn({color:"#4fb477"}));Z.position.copy(this.P(n[0])).add(new H(0,this.size*.02,0)),Z.rotation.x=Math.PI,this.world.add(Z),this.sprite("START",this.P(n[0]).add(new H(0,this.size*.06,0)),.024,"#7fe0a0");let _t=n[n.length-1];this.sprite("ENDE",this.P(_t).add(new H(0,this.size*.06,0)),.024,"#ff8a7d"),this.boatScale=e.boatScale||Math.max(1,Math.min(60,this.size*.07/.67)),this.boat.scale.setScalar(this.boatScale),this.lm.linewidth=4,this.at(this.t),this.home(!1)}home(t=!0){if(!this.size)return;let e=this.size*.95;this.ctl.target.set(this.cx,-this.dmax*.35,this.cz),this.cam.position.set(this.cx+e*.75,e*.5,this.cz+e*.95),this.cam.near=this.size*.002,this.cam.far=this.size*40,this.cam.updateProjectionMatrix(),this.ctl.update(),this.dirty=!0}view(t){let e=this.size*1.3,n=this.ctl.target.set(this.cx,-this.dmax*.3,this.cz);t==="top"?this.cam.position.set(this.cx,e*1.5,this.cz+.001):t==="side"?this.cam.position.set(this.cx,-this.dmax*.3,this.cz+e*1.4):this.home(),this.ctl.update(),this.dirty=!0}at(t){if(this.t=t,!this.plan)return;let e=this.plan.pts;if(e.length<2)return;let n=0,r=e.length-1;for(;r-n>1;){let d=n+r>>1;e[d].t<=t?n=d:r=d}let a=e[n],l=e[r],h=l.t>a.t?Math.min(1,Math.max(0,(t-a.t)/(l.t-a.t))):0,u=d=>a[d]+(l[d]-a[d])*h,f={x:u("x"),y:u("y"),z:u("z")};this.boat.position.copy(this.P(f)),this.dot.position.copy(this.boat.position);let p=l.h-a.h;if(p>180&&(p-=360),p<-180&&(p+=360),this.boat.rotation.y=-(a.h+p*h)*Ap,this.boat.rotation.x=u("p")*Ap,this.follow){let d=this.boat.position;this.ctl.target.lerp(d,1)}return this.cur={...a,x:f.x,y:f.y,z:f.z,h:a.h+p*h,p:u("p"),v:u("v"),f:u("f"),thr:u("thr"),t},this.dirty=!0,this.cur}shot(){return this.ctl.update(),this.updateSprites(),this.renderer.render(this.scene,this.cam),this.renderer.domElement.toDataURL("image/png")}};var _n=(s,t,e="")=>b("button",{class:"btn "+e,onclick:t},s);function Bb(s,t,e,n){let r=s.getContext("2d"),a=s.width/2,l=s.height/2;r.setTransform(2,0,0,2,0,0),r.clearRect(0,0,a,l),r.fillStyle="#0a141d",r.fillRect(0,0,a,l);let h=t.pts,u=t.stats;if(h.length<2)return;let f=44,p=10,d=10,_=20,g=Math.max(u.maxDepth*1.15,1),y=Math.max(u.dur,1),S=C=>f+C/y*(a-f-p),x=C=>d+C/g*(l-d-_);r.font="10px Helvetica, Arial",r.fillStyle="#6f869c",r.strokeStyle="#162838",r.textAlign="right";let v=g<=3?.5:g<=10?1:g<=30?5:10;for(let C=0;C<=g;C+=v)r.beginPath(),r.moveTo(f,x(C)),r.lineTo(a-p,x(C)),r.stroke(),r.fillText(C+" m",f-4,x(C)+3);r.textAlign="center";let P=y<120?10:y<600?60:y<3600?300:900;for(let C=0;C<=y;C+=P)r.fillText(C>=60?Math.round(C/60)+" min":C+" s",S(C),l-6);n&&n<g&&(r.strokeStyle=Nt.bad,r.setLineDash([4,3]),r.beginPath(),r.moveTo(f,x(n)),r.lineTo(a-p,x(n)),r.stroke(),r.setLineDash([]));let w=-2,T=0,O=[];h.forEach((C,I)=>{C.i!==w&&(w>=-1&&O.push([w,T,C.t]),w=C.i,T=C.t)}),O.push([w,T,y]),O.forEach(([C,I,k])=>{C<0||(r.fillStyle=(Rn[t.steps[C]?.t]?.color||"#888")+"22",r.fillRect(S(I),d,Math.max(1,S(k)-S(I)),l-d-_))}),r.lineWidth=2,r.strokeStyle="#4aa3ff",r.beginPath(),h.forEach((C,I)=>{I?r.lineTo(S(C.t),x(C.z)):r.moveTo(S(C.t),x(C.z))}),r.stroke(),r.lineWidth=1,r.strokeStyle="#8a6fd055",r.beginPath(),h.forEach((C,I)=>{let k=d+(1-C.f/100)*(l-d-_)*.25+(l-d-_)*.75;I?r.lineTo(S(C.t),k):r.moveTo(S(C.t),k)}),r.stroke(),r.fillStyle="#8a6fd0",r.textAlign="left",r.fillText("Ballast",f+4,l-_-4),r.strokeStyle="#e0a93b",r.lineWidth=1.5,r.beginPath(),r.moveTo(S(e),d),r.lineTo(S(e),l-_),r.stroke()}function Fb(s,t,e){let n=s.getContext("2d"),r=s.width/2,a=s.height/2;n.setTransform(2,0,0,2,0,0),n.clearRect(0,0,r,a),n.fillStyle="#0a141d",n.fillRect(0,0,r,a);let l=t.pts,h=t.stats;if(l.length<2)return;let u=26,f=Math.max(h.bb.x1-h.bb.x0,2),p=Math.max(h.bb.y1-h.bb.y0,2),d=Math.min((r-2*u)/f,(a-2*u)/p),_=r/2-(h.bb.x0+h.bb.x1)/2*d,g=a/2+(h.bb.y0+h.bb.y1)/2*d,y=w=>_+w*d,S=w=>g-w*d,x=(()=>{let w=40/d,T=Math.pow(10,Math.floor(Math.log10(w))),O=w/T;return(O<1.5?1:O<3.5?2:O<7.5?5:10)*T})();n.strokeStyle="#162838",n.fillStyle="#6f869c",n.font="10px Helvetica, Arial",n.textAlign="left";for(let w=Math.floor(-_/d/x)*x;y(w)<r;w+=x)n.beginPath(),n.moveTo(y(w),0),n.lineTo(y(w),a),n.stroke();for(let w=Math.floor((g-a)/d/x)*x;S(w)>0;w+=x)n.beginPath(),n.moveTo(0,S(w)),n.lineTo(r,S(w)),n.stroke();n.fillText(`Raster ${x} m`,6,a-6),n.fillStyle=Nt.bad,n.fillText("N \u2191",r-28,14),n.lineWidth=2;for(let w=1;w<l.length;w++)n.strokeStyle=Rn[t.steps[l[w].i]?.t]?.color||"#9aa7b8",n.beginPath(),n.moveTo(y(l[w-1].x),S(l[w-1].y)),n.lineTo(y(l[w].x),S(l[w].y)),n.stroke();n.fillStyle=Nt.ok,n.beginPath(),n.arc(y(0),S(0),4,0,7),n.fill();let v=l[l.length-1];n.fillStyle=Nt.bad,n.beginPath(),n.arc(y(v.x),S(v.y),4,0,7),n.fill();let P=l.find(w=>w.t>=e)||v;n.strokeStyle="#e0a93b",n.lineWidth=2,n.beginPath(),n.arc(y(P.x),S(P.y),7,0,7),n.stroke(),n.save(),n.translate(y(P.x),S(P.y)),n.rotate(P.h*Math.PI/180),n.fillStyle="#e0a93b",n.beginPath(),n.moveTo(0,-11),n.lineTo(-4,-4),n.lineTo(4,-4),n.fill(),n.restore()}function Rp(){let s=Pn.get("mission",null);s=Array.isArray(s)&&s.length?s:cc("Pool Funktionstest");let t=null,e=0,n=!1,r=10,a=0,l=-1,h=Pn.get("h0",0),u=Pn.get("pmax",25),f=Pn.get("capwh",6.3),p=b("div",{class:"steps-list"}),d=b("div",{class:"warns"}),_=b("div",{class:"view3d"}),g={dur:Qt("Dauer"),dist:Qt("Strecke","m"),dep:Qt("Max Tiefe","m"),box:Qt("Bahn B \xD7 L","m"),end:Qt("Ende zu Start","m"),en:Qt("Energie","Wh"),bat:Qt("Akku Bedarf","%"),spd:Qt("\xD8 Fahrt","m/s")},y=b("canvas",{width:1e3,height:300,class:"cv"}),S=b("canvas",{width:600,height:300,class:"cv"}),x=b("input",{type:"range",min:0,max:100,step:.1,value:0,class:"sl tl",oninput:()=>{e=+x.value,n=!1,w(),X()}}),v=b("div",{class:"hud"}),P=_n("\u25B6",()=>{t&&(e>=t.stats.dur-.05&&(e=0),n=!n,a=performance.now(),w())},"play"),w=()=>{P.textContent=n?"\u275A\u275A":"\u25B6"},T=new Rl(_),O=b("select",{class:"in sm",onchange:()=>{r=+O.value}},[1,5,10,30,100].map(nt=>b("option",{value:nt,selected:nt===r},`${nt}\xD7`))),C=b("select",{class:"in sm",onchange:()=>{T.color=C.value,K()}},b("option",{value:"step"},"Farbe: Schritt"),b("option",{value:"depth"},"Farbe: Tiefe")),I=b("input",{type:"checkbox",onchange:()=>{T.follow=I.checked,T.at(e)}}),k=b("select",{class:"in sm",onchange:()=>{T.boat.scale.setScalar(+k.value||T.boatScale),T.dirty=!0}},b("option",{value:0},"Boot: Auto"),b("option",{value:1},"Boot: 1:1"),b("option",{value:5},"Boot: 5\xD7"),b("option",{value:20},"Boot: 20\xD7")),E=()=>Go(nt=>Q.par[nt]),A=()=>{let nt=E();t=Zo(s,nt,{h0:h,pMax:u}),t.steps=s;let wt=t.stats;x.max=wt.dur,e=Math.min(e,wt.dur),g.dur.set(Jn(wt.dur)),g.dist.set(bt(wt.dist,1)),g.dep.set(bt(wt.maxDepth,2),wt.maxDepth>nt.depthMax?"bad":""),g.box.set(`${bt(wt.w,1)} \xD7 ${bt(wt.l,1)}`),g.end.set(bt(wt.endDist,1)),g.en.set(bt(wt.wh,2));let Ft=wt.wh/f*100;g.bat.set(bt(Ft,0),Ft>60?"bad":Ft>40?"warn":""),g.spd.set(bt(wt.avgV,2)),d.innerHTML="",[...Wo(s,nt),...t.notes.map(z=>({i:z.i,m:z.m}))].forEach(z=>d.append(b("div",{class:"w"},(z.i>=0?`Schritt ${z.i+1}: `:"")+z.m))),Pn.set("mission",s),K(),X()},B=null,Y=()=>{clearTimeout(B),B=setTimeout(A,120)},K=()=>{t&&T.setPlan(t,{depthLimit:E().depthMax,boatScale:+k.value||void 0})},X=()=>{if(!t)return;x.value=e;let nt=T.at(e);Bb(y,t,e,E().depthMax),Fb(S,t,e),nt&&(v.innerHTML="",[["t",Jn(nt.t)],["Tiefe",bt(nt.z,2)+" m"],["Kurs",bt((nt.h%360+360)%360,0)+"\xB0"],["Nick",bt(nt.p,0)+"\xB0"],["Fahrt",bt(nt.v,2)+" m/s"],["Ballast",bt(nt.f,0)+" %"],["Schritt",nt.i>=0?`${nt.i+1} ${Rn[s[nt.i]?.t]?.label||""}`:"Start"]].forEach(([wt,Ft])=>v.append(b("span",null,wt,b("b",null,Ft)))),l=nt.i,et())},et=()=>{[...p.children].forEach((nt,wt)=>nt.classList.toggle("sel",wt===l))},V=()=>{p.innerHTML="",s.forEach((nt,wt)=>{let Ft=Rn[nt.t],Mt=Wo(s,E()).some(kt=>kt.i===wt),z=b("select",{class:"in sm",onchange:()=>{let kt=nt.v;s[wt]=Vo(z.value),V(),Y()}},ac.map(kt=>b("option",{value:kt,selected:kt===nt.t},Rn[kt].label))),Gt=Ft.f.map((kt,zt)=>{let _e=b("input",{class:"in num",type:"number",step:kt[5],min:kt[3],max:kt[4],value:nt.v[zt],onchange:()=>{nt.v[zt]=wn(+_e.value,kt[3],kt[4]),_e.value=nt.v[zt],Y()}});return b("label",{class:"fld"},b("span",null,kt[0],kt[1]?` (${kt[1]})`:""),_e)}),Jt=kt=>()=>{let zt=wt+kt;zt<0||zt>=s.length||([s[wt],s[zt]]=[s[zt],s[wt]],V(),A())};p.append(b("div",{class:"step"+(Mt?" warn":""),onclick:()=>{let kt=t.pts.find(zt=>zt.i===wt);kt&&(e=kt.t,n=!1,w(),X())}},b("div",{class:"sh"},b("i",{style:{background:Ft.color}}),b("b",null,wt+1),z,b("span",{class:"sp"}),b("button",{class:"ib",title:"hoch",onclick:kt=>{kt.stopPropagation(),Jt(-1)()}},"\u2191"),b("button",{class:"ib",title:"runter",onclick:kt=>{kt.stopPropagation(),Jt(1)()}},"\u2193"),b("button",{class:"ib",title:"duplizieren",onclick:kt=>{kt.stopPropagation(),s.splice(wt+1,0,JSON.parse(JSON.stringify(nt))),V(),A()}},"\u29C9"),b("button",{class:"ib del",title:"l\xF6schen",onclick:kt=>{kt.stopPropagation(),s.splice(wt,1),V(),A()}},"\u2715")),Gt.length?b("div",{class:"flds"},Gt):b("div",{class:"dim sm"},"Ballast leeren, mit Gas und Nick nach oben auftauchen bis Tiefe 0, Mission endet.")))}),et()},ft=b("select",{class:"in"},ac.map(nt=>b("option",{value:nt},Rn[nt].label))),G=()=>{if(s.length>=Ho)return ee("Maximal 64 Schritte","warn");s.push(Vo(ft.value)),V(),A(),p.scrollTop=p.scrollHeight},ht=b("select",{class:"in",onchange:()=>{ht.value&&((!s.length||confirm("Aktuelle Mission durch Vorlage ersetzen?"))&&(s=cc(ht.value),e=0,V(),A()),ht.value="")}},b("option",{value:""},"Vorlage laden \u2026"),Object.keys(lc).map(nt=>b("option",{value:nt},nt)));Pe.on("mission:set",nt=>{s=nt,e=0,l=-1,V(),A()});let xt=b("dialog",{class:"dlg"}),lt={lo:.5,hi:2,n:3,spd:25,rate:.15,pit:15},pt=(nt,wt,Ft,Mt=.1)=>b("label",{class:"fld"},b("span",null,`${nt} (${Ft})`),b("input",{class:"in num",type:"number",step:Mt,value:lt[wt],onchange:z=>{lt[wt]=+z.target.value}}));xt.append(b("h3",null,"Yo Yo Profil erzeugen"),b("div",{class:"flds"},pt("Flachste Tiefe","lo","m"),pt("Tiefste Tiefe","hi","m"),pt("Zyklen","n","x",1),pt("Fahrt","spd","%",1),pt("Max Sinkrate","rate","m/s",.01),pt("Max Nick","pit","deg",1)),b("div",{class:"row"},_n("Anh\xE4ngen",()=>{let nt=s.length;s.push({t:"DIVE",v:[lt.lo,lt.rate,lt.pit,lt.spd]},{t:"DIVE",v:[lt.hi,lt.rate,lt.pit,lt.spd]},{t:"DIVE",v:[lt.lo,lt.rate,lt.pit,lt.spd]}),lt.n>1&&s.push({t:"REPEAT",v:[lt.n-1,nt+1,0,0]}),xt.close(),V(),A()},"primary"),_n("Abbrechen",()=>xt.close())));let Et=b("span",{class:"dim"}),$=async nt=>{if(!Q.connected)return ee("Nicht verbunden","bad");let wt=Q.info?.maxsteps||64;if(s.length>wt)return ee(`Boot speichert nur ${wt} Schritte`,"bad");if(Wo(s,E()).filter(z=>z.m.includes("R\xFCcksprung")).length)return ee("R\xFCcksprung Schritt pr\xFCfen","bad");let Mt=await oe("MIS CLEAR");if(!(!Mt||!Mt.ok)){for(let z=0;z<s.length;z++)if(Et.textContent=`\xDCbertrage ${z+1}/${s.length}`,Mt=await oe(xd([s[z]])[0].replace(/^/,"")),!Mt||!Mt.ok){Et.textContent="";return}nt&&await oe("MIS SAVE"),Et.textContent="",ee(`Mission mit ${s.length} Schritten ${nt?"gespeichert":"\xFCbertragen"}`,"ok"),fs(`Mission \xFCbertragen (${s.length} Schritte)`)}},W=async()=>{let nt=await oe("MIS GET");nt&&nt.ok&&Array.isArray(nt.data)&&(s=Xo(nt.data),e=0,V(),A(),ee(`${s.length} Schritte vom Boot gelesen`,"ok"))},ot=async()=>{if(!Q.connected)return ee("Nicht verbunden","bad");confirm(`Mission starten?

\u2022 Boot im Wasser, Ballast Beh\xE4lter dicht
\u2022 Leckage Test bestanden, Akku voll
\u2022 Tiefe auf Null kalibriert
\u2022 Mission ist \xFCbertragen

Das Boot muss daf\xFCr scharf (ARMED) sein.`)&&await oe("MIS START","Mission l\xE4uft")},Z=(nt,wt,Ft,Mt)=>b("label",{class:"fld"},b("span",null,`${nt} (${Mt})`),b("input",{class:"in num",type:"number",value:wt,step:"any",onchange:z=>Ft(+z.target.value)})),_t=b("div",{class:"page mis"},b("div",{class:"toolbar"},ht,_n("Neu",()=>{confirm("Mission leeren?")&&(s=[],e=0,V(),A())}),_n("Laden",async()=>{let nt=await Xs(".json");if(nt)try{s=JSON.parse(nt).steps,e=0,V(),A()}catch{ee("Datei ung\xFCltig","bad")}}),_n("Speichern",()=>jn("mission.json",JSON.stringify({app:"FATHOM",steps:s},null,1))),_n("Yo Yo \u2026",()=>xt.showModal()),b("span",{class:"sp"}),Et,_n("Zum Boot senden",()=>$(!1),"primary"),_n("Senden + im Boot speichern",()=>$(!0)),_n("Vom Boot lesen",W),_n("START",ot,"go"),_n("STOP",()=>oe("MIS STOP","Mission gestoppt"),"stop")),b("div",{class:"stats mstats"},Object.values(g).map(nt=>nt.el)),b("div",{class:"mgrid"},b("div",{class:"left"},p,b("div",{class:"addrow"},ft,_n("+ Schritt",G,"primary")),d,b("details",{class:"opt"},b("summary",null,"Annahmen f\xFCr die Vorschau"),Z("Startkurs",h,nt=>{h=nt,Pn.set("h0",nt),A()},"deg"),Z("Leistung bei 100 % Gas",u,nt=>{u=nt,Pn.set("pmax",nt),A()},"W"),Z("Akku Energie (2S 850 mAh)",f,nt=>{f=nt,Pn.set("capwh",nt),A()},"Wh"),b("p",{class:"note"},"Die Vorschau rechnet kinematisch mit den Boot Parametern (Fahrt je %, Limits, Ballast F\xF6rderrate). Reale Regelung, Tr\xE4gheit und Str\xF6mung fehlen. Energie ist eine grobe Annahme, bitte mit Messung ersetzen."))),b("div",{class:"right"},b("div",{class:"vwrap"},_,v,b("div",{class:"vtools"},_n("Iso",()=>T.view("iso")),_n("Oben",()=>T.view("top")),_n("Seite",()=>T.view("side")),C,k,b("label",{class:"chk"},I," Kamera folgt"))),b("div",{class:"tlbar"},P,x,O),b("div",{class:"grid2c"},b("div",{class:"card tight"},b("h3",null,"Tiefenprofil"),y),b("div",{class:"card tight"},b("h3",null,"Draufsicht"),S)))),xt),dt=()=>{if(requestAnimationFrame(dt),!n||!t)return;let nt=performance.now();e+=(nt-a)/1e3*r,a=nt,e>=t.stats.dur&&(e=t.stats.dur,n=!1,w()),X()};return dt(),Pe.on("par",()=>{Q.tab==="mission"&&Y()}),{el:_t,show(){T.setActive(!0),V(),A()},hide(){T.setActive(!1),n=!1,w()},update(nt){nt.mis.run&&(l=nt.mis.i,et())},sim:T,setTime(nt){e=nt,X()},get plan(){return t}}}var Lp=Math.PI/180,Ns=(s,t,e)=>({x:(e-s.lon)*111200*Math.cos(s.lat*Lp),y:(t-s.lat)*111200}),Cp=s=>{let t=Math.pow(10,Math.floor(Math.log10(s))),e=s/t;return(e<1.5?1:e<3.5?2:e<7.5?5:10)*t};function Mu(s,t){let e=window.devicePixelRatio||1,n=s.clientWidth||600,r=s.clientHeight||400;(s.width!==n*e||s.height!==r*e)&&(s.width=n*e,s.height=r*e);let a=s.getContext("2d");a.setTransform(e,0,0,e,0,0),a.clearRect(0,0,n,r),a.fillStyle=Nt.bg,a.fillRect(0,0,n,r);let l=[...t.pts];if(t.home&&l.push(t.home),t.boat&&l.push(t.boat),!l.length){a.fillStyle=Nt.dim,a.font="13px Helvetica, Arial, sans-serif",a.textAlign="center",a.fillText(t.empty||"Noch keine Position",n/2,r/2);return}let h=t.home||l[0],u=l.map(I=>Ns(h,I.lat,I.lon)),f=Math.min(...u.map(I=>I.x)),p=Math.max(...u.map(I=>I.x)),d=Math.min(...u.map(I=>I.y)),_=Math.max(...u.map(I=>I.y)),g=16;if(p-f<g){let I=(f+p)/2;f=I-g/2,p=I+g/2}if(_-d<g){let I=(d+_)/2;d=I-g/2,_=I+g/2}let y=36,S=Math.min((n-2*y)/(p-f),(r-2*y)/(_-d)),x=(f+p)/2,v=(d+_)/2,P=I=>n/2+(I-x)*S,w=I=>r/2-(I-v)*S,T=Cp(60/S);a.strokeStyle=Nt.grid,a.lineWidth=1,a.fillStyle=Nt.dim,a.font="10px Helvetica, Arial, sans-serif",a.textAlign="left";for(let I=Math.ceil((x-n/2/S)/T)*T;I<x+n/2/S;I+=T)a.beginPath(),a.moveTo(P(I),0),a.lineTo(P(I),r),a.stroke();for(let I=Math.ceil((v-r/2/S)/T)*T;I<v+r/2/S;I+=T)a.beginPath(),a.moveTo(0,w(I)),a.lineTo(n,w(I)),a.stroke();a.lineWidth=2,a.lineJoin="round",a.lineCap="round";for(let I=1;I<t.pts.length;I++){let k=Ns(h,t.pts[I-1].lat,t.pts[I-1].lon),E=Ns(h,t.pts[I].lat,t.pts[I].lon);a.strokeStyle=t.pts[I].c||Nt.acc,a.beginPath(),a.moveTo(P(k.x),w(k.y)),a.lineTo(P(E.x),w(E.y)),a.stroke()}if(t.home&&t.boat){let I=Ns(h,t.boat.lat,t.boat.lon);a.setLineDash([5,5]),a.strokeStyle=Nt.warn,a.lineWidth=1,a.beginPath(),a.moveTo(P(I.x),w(I.y)),a.lineTo(P(0),w(0)),a.stroke(),a.setLineDash([])}if(t.home&&(a.strokeStyle=Nt.ok,a.fillStyle=Nt.bg,a.lineWidth=2,a.beginPath(),a.arc(P(0),w(0),8,0,7),a.fill(),a.stroke(),a.fillStyle=Nt.ok,a.font="bold 10px Helvetica, Arial, sans-serif",a.textAlign="center",a.fillText("H",P(0),w(0)+3.5)),t.cursor){let I=Ns(h,t.cursor.lat,t.cursor.lon);a.fillStyle=Nt.txt,a.beginPath(),a.arc(P(I.x),w(I.y),5,0,7),a.fill()}if(t.boat){let I=Ns(h,t.boat.lat,t.boat.lon);a.save(),a.translate(P(I.x),w(I.y)),a.rotate((t.boat.h||0)*Lp),a.fillStyle=Nt.txt,a.beginPath(),a.moveTo(0,-10),a.lineTo(6,8),a.lineTo(0,4),a.lineTo(-6,8),a.closePath(),a.fill(),a.restore()}let O=Cp(100/S),C=O*S;a.strokeStyle=Nt.txt,a.lineWidth=2,a.beginPath(),a.moveTo(14,r-16),a.lineTo(14+C,r-16),a.moveTo(14,r-20),a.lineTo(14,r-12),a.moveTo(14+C,r-20),a.lineTo(14+C,r-12),a.stroke(),a.fillStyle=Nt.txt,a.textAlign="left",a.font="11px Helvetica, Arial, sans-serif",a.fillText(O>=1e3?O/1e3+" km":O+" m",14,r-24),a.textAlign="center",a.fillText("N",n-20,22),a.strokeStyle=Nt.dim,a.beginPath(),a.moveTo(n-20,40),a.lineTo(n-20,28),a.stroke()}function Ip(){let s=[],t=null,e=null,n=b("canvas",{class:"map"}),r={fix:Qt("GPS",""),sat:Qt("Satelliten",""),hd:Qt("HDOP",""),spd:Qt("Fahrt","m/s"),dist:Qt("Distanz Home","m"),brg:Qt("Peilung","\xB0")},a={gps:on("GPS"),home:on("Home"),rth:on("RTH")},l=b("p",{class:"note"},"Die Karte arbeitet ohne Internet: Norden oben, Raster in Metern. Das GPS funktioniert nur an der Oberfl\xE4che, unter Wasser bleibt der letzte Fix stehen."),h=["aus","taucht auf","wartet auf GPS","f\xE4hrt zu Home","angekommen"],u=b("div",{class:"page"},b("div",{class:"chips"},Object.values(a).map(d=>d.el)),b("div",{class:"stats"},Object.values(r).map(d=>d.el)),b("div",{class:"toolbar"},b("button",{class:"btn",onclick:async()=>{let d=await oe("HOME SET","Home gesetzt");d&&d.ok&&f()}},"Home hier setzen"),b("button",{class:"btn primary",onclick:()=>oe("MODE RTH","Heimfahrt gestartet")},"Heimfahrt (RTH)"),b("button",{class:"btn",onclick:()=>oe("MODE DEPTH","RTH beendet")},"RTH beenden"),b("span",{class:"sp"}),b("button",{class:"btn",onclick:()=>{s.length=0,e=null,p()}},"Spur l\xF6schen")),b("div",{class:"mapwrap"},n),l);async function f(){if(!Q.connected)return;let d=await Q.link.cmd("HOME");d.ok&&d.data&&d.data.set?t={lat:d.data.lat,lon:d.data.lon}:t=null,p()}function p(){Mu(n,{pts:s,home:t,boat:e?{lat:e.lat,lon:e.lon,h:e.h}:null,empty:"Noch kein GPS Fix. Boot an die Oberfl\xE4che mit freier Sicht zum Himmel."})}return Pe.on("conn",()=>{Q.connected||(t=null,e=null)}),{el:u,show(){f(),setTimeout(p,30)},update(d){let _=d.gps;if(_){if(r.fix.set(_.ok?"Fix":"kein Fix",_.ok?"":"warn"),r.sat.set(String(_.sat)),r.hd.set(bt(_.hd,1)),r.spd.set(bt(_.spd,1)),r.dist.set(_.home?bt(_.dist,0):"\u2013"),r.brg.set(_.home?bt(_.brg,0):"\u2013"),a.gps.set(_.ok?`GPS ${_.sat} Sat`:"GPS kein Fix",_.ok?"ok":"warn"),a.home.set(_.home?"Home gesetzt":"Home fehlt",_.home?"ok":"warn"),a.rth.set(d.m==="RTH"?"RTH "+h[_.ph]:"RTH aus",d.m==="RTH"?"acc":""),_.ok){e={lat:_.lat,lon:_.lon,h:d.att[2]};let g=s[s.length-1];(!g||Math.hypot(...Object.values(Ns(g,_.lat,_.lon)))>.5)&&(s.push({lat:_.lat,lon:_.lon,c:d.m==="RTH"?Nt.warn:Nt.acc}),s.length>5e3&&s.shift())}else e&&(e.h=d.att[2]);_.home&&!t&&f(),p()}}}}var Np=["MANUAL","STAB","DEPTH","MISSION","FAILSAFE","RTH"],zb=[Nt.dim,"#5f7fa6",Nt.acc,"#9a86d6",Nt.bad,Nt.warn],Cl=16,Hb={FBB1:36,FBB2:52},Dp="#9a86d6";function Vb(s){let t=s.length>=Cl?String.fromCharCode(...s.slice(0,4)):"",e=Hb[t];if(!e)throw new Error("Keine FATHOM Blackbox Datei");let n=new DataView(s.buffer,s.byteOffset,s.byteLength),r=n.getUint16(4,!0),a=n.getUint16(6,!0);if(r!==e)throw new Error("Datensatzgr\xF6\xDFe "+r+" wird nicht unterst\xFCtzt");let l=Math.floor((s.length-Cl)/e),h=[],u={cells:!1,cur:!1,inn:!1};for(let f=0;f<l;f++){let p=Cl+f*e,d={t:n.getUint32(p,!0)/1e3,depth:n.getInt16(p+4,!0)/100,tgt:n.getInt16(p+6,!0)/100,roll:n.getInt16(p+8,!0)/10,pitch:n.getInt16(p+10,!0)/10,yaw:n.getUint16(p+12,!0)/10,vbat:n.getUint16(p+14,!0)/100,leak:n.getUint8(p+16)/255,mode:n.getUint8(p+17),flags:n.getUint8(p+18),fill:n.getUint8(p+19),thr:n.getInt8(p+20),pump:n.getInt8(p+21),rud:n.getInt8(p+22),stern:n.getInt8(p+23),bow:n.getInt8(p+24),lat:n.getInt32(p+25,!0)/1e7,lon:n.getInt32(p+29,!0)/1e7,sats:n.getUint8(p+33),rssi:n.getInt8(p+34)};if(e>=52){d.c1=n.getUint16(p+36,!0)/1e3,d.c2=n.getUint16(p+38,!0)/1e3,d.cur=n.getInt16(p+40,!0)/100,d.mah=n.getUint16(p+42,!0),d.inp=n.getUint16(p+44,!0)/10;let _=n.getUint8(p+46);d.inrh=_===255?void 0:_,d.int=n.getInt8(p+47),d.wt=n.getInt16(p+48,!0)/10,d.ls=n.getUint16(p+50,!0),d.c1>0&&(u.cells=!0),(d.mah>0||d.cur!==0)&&(u.cur=!0),d.inp>0&&(u.inn=!0)}h.push(d)}return{hz:a,recs:h,fmt:t,has:u}}var Gb=s=>"t_s,tiefe_m,ziel_m,roll,nick,kurs,akku_v,leck,modus,flags,ballast,gas,pumpe,ruder,heck,bug,lat,lon,sat,rssi"+(s.fmt==="FBB2"?",zelle1_v,zelle2_v,strom_a,verbraucht_mah,innendruck_mbar,innenfeuchte_pct,innentemp_c,wassertemp_c,lichtzustaende":"")+`
`+s.recs.map(t=>[t.t,t.depth,t.tgt,t.roll,t.pitch,t.yaw,t.vbat,t.leak.toFixed(3),Np[t.mode]||t.mode,t.flags,t.fill,t.thr,t.pump,t.rud,t.stern,t.bow,t.lat,t.lon,t.sats,t.rssi].concat(s.fmt==="FBB2"?[t.c1,t.c2,t.cur,t.mah,t.inp,t.inrh??"",t.int,t.wt,t.ls]:[]).join(",")).join(`
`),kp=[{name:"Tiefe",unit:"m",inv:!0,min:0,s:[{k:"depth",n:"Tiefe",c:Nt.acc},{k:"tgt",n:"Ziel",c:Nt.warn,dash:1}]},{name:"Lage",unit:"\xB0",s:[{k:"pitch",n:"Nick",c:Nt.acc},{k:"roll",n:"Roll",c:Nt.warn}]},{name:"Kurs",unit:"\xB0",min:0,max:360,s:[{k:"yaw",n:"Kurs",c:Nt.ok}]},{name:"Antrieb und Ballast",unit:"%",s:[{k:"thr",n:"Gas",c:Nt.acc},{k:"pump",n:"Pumpe",c:Nt.warn},{k:"fill",n:"Ballast",c:Dp}]},{name:"Ruder",unit:"\xB0",s:[{k:"rud",n:"Seite",c:Nt.ok},{k:"stern",n:"Heck",c:Nt.acc},{k:"bow",n:"Bug",c:Nt.warn}]},{name:"Akku",unit:"V",s:[{k:"vbat",n:"Akku",c:Nt.ok}],dec:2},{name:"Leckage",unit:"",min:0,max:1,s:[{k:"leak",n:"Leck",c:Nt.bad}],dec:2},{name:"Zellen",unit:"V",need:"cells",s:[{k:"c1",n:"Zelle 1",c:Nt.ok},{k:"c2",n:"Zelle 2",c:Nt.acc}],dec:2},{name:"Strom",unit:"A",need:"cur",min:0,s:[{k:"cur",n:"Strom",c:Nt.warn}],dec:1},{name:"Feuchte innen",unit:"%",need:"inn",min:0,max:100,s:[{k:"inrh",n:"Feuchte",c:Nt.acc}],dec:0},{name:"Innendruck",unit:"mbar",need:"inn",s:[{k:"inp",n:"Innendruck",c:Dp}],dec:1}],bo=kp.filter(s=>!s.need),Cr=104,ks=18,hi=46;function Wb(s){let t=b("canvas",{class:"logcv"}),e=null,n=0,r=1,a=null,l=null,h=()=>window.devicePixelRatio||1,u=()=>bo.length*Cr+ks+22;function f(g){let y=e.recs,S=0,x=y.length-1;for(;S<x;){let v=S+x>>1;y[v].t<g?S=v+1:x=v}return S}function p(){let g=t.clientWidth||800,y=u(),S=h();(t.height!==y*S||t.width!==g*S)&&(t.width=g*S,t.height=y*S,t.style.height=y+"px");let x=t.getContext("2d");if(x.setTransform(S,0,0,S,0,0),x.fillStyle=Nt.bg,x.fillRect(0,0,g,y),!e)return;let v=e.recs,P=k=>hi+(k-n)/(r-n)*(g-hi-10),w=Math.max(0,f(n)-1),T=Math.min(v.length-1,f(r)+1);x.font="10px Helvetica, Arial, sans-serif";for(let k=w;k<T;k++){let E=P(v[k].t),A=P(v[k+1].t);x.fillStyle=zb[v[k].mode]||Nt.dim,x.fillRect(E,0,Math.max(1,A-E+.5),ks-4)}let O=-1;x.fillStyle=Nt.txt,x.textAlign="left";for(let k=w;k<=T;k++)if(v[k].mode!==O){O=v[k].mode;let E=P(v[k].t);E>hi-2&&E<g-60&&x.fillText(Np[O]||"?",E+3,10)}bo.forEach((k,E)=>{let A=ks+E*Cr,B=A+Cr-14,Y=k.min,K=k.max;if(Y===void 0||K===void 0){let et=1e9,V=-1e9;for(let G=w;G<=T;G++)k.s.forEach(ht=>{let xt=v[G][ht.k];ht.k==="tgt"&&xt===0&&!(v[G].mode===2||v[G].mode===3)||(et=Math.min(et,xt),V=Math.max(V,xt))});et>V&&(et=0,V=1);let ft=(V-et)*.12||.5;Y===void 0&&(Y=et-ft),K===void 0&&(K=V+ft)}k.k0===void 0&&k.min===0&&Y<0&&(Y=0);let X=et=>k.inv?A+6+(et-Y)/(K-Y||1)*(B-A-6):B-(et-Y)/(K-Y||1)*(B-A-6);x.strokeStyle=Nt.grid,x.lineWidth=1,x.fillStyle=Nt.dim,x.textAlign="right";for(let et=0;et<=2;et++){let V=Y+(K-Y)*et/2,ft=X(V);x.beginPath(),x.moveTo(hi,ft),x.lineTo(g-10,ft),x.stroke(),x.fillText(V.toFixed(k.dec??(Math.abs(K-Y)<5?1:0)),hi-5,ft+3)}if(x.textAlign="left",x.fillStyle=Nt.txt,x.font="600 11px Helvetica, Arial, sans-serif",x.fillText(k.name+(k.unit?" ("+k.unit+")":""),hi+6,A+12),x.font="10px Helvetica, Arial, sans-serif",x.save(),x.beginPath(),x.rect(hi,A,g-hi-10,Cr-12),x.clip(),k.s.forEach(et=>{x.strokeStyle=et.c,x.lineWidth=et.dash?1.2:1.6,x.setLineDash(et.dash?[4,3]:[]),x.beginPath();let V=!1,ft=-9;for(let G=w;G<=T;G++){let ht=P(v[G].t);if(ht-ft<.6&&G<T)continue;ft=ht;let xt=v[G][et.k];if(et.k==="tgt"&&!(v[G].mode===2||v[G].mode===3)){V=!1;continue}let lt=X(xt);V?x.lineTo(ht,lt):(x.moveTo(ht,lt),V=!0)}x.stroke(),x.setLineDash([])}),x.restore(),a!==null){let et=v[f(a)],V=g-14;x.textAlign="right";for(let ft=k.s.length-1;ft>=0;ft--){let G=k.s[ft],ht=G.n+" "+et[G.k].toFixed(k.dec??1);x.fillStyle=G.c,x.fillText(ht,V,A+12),V-=x.measureText(ht).width+12}}});let C=r-n,I=[1,2,5,10,15,30,60,120,300,600,1800].find(k=>C/k<12)||3600;x.fillStyle=Nt.dim,x.textAlign="center",x.strokeStyle=Nt.grid;for(let k=Math.ceil(n/I)*I;k<r;k+=I){let E=P(k);x.beginPath(),x.moveTo(E,ks),x.lineTo(E,ks+bo.length*Cr-14),x.stroke(),x.fillText(k>=60?`${Math.floor(k/60)}:${String(Math.round(k%60)).padStart(2,"0")}`:k+" s",E,y-4)}if(a!==null){let k=P(a);x.strokeStyle=Nt.txt,x.lineWidth=1,x.beginPath(),x.moveTo(k,ks-2),x.lineTo(k,ks+bo.length*Cr-14),x.stroke()}}let d=g=>{let y=t.getBoundingClientRect();return n+(g.clientX-y.left-hi)/(y.width-hi-10)*(r-n)};t.addEventListener("mousemove",g=>{if(!e)return;let y=wn(d(g),e.recs[0].t,e.recs[e.recs.length-1].t);if(l){let S=(l.x-g.clientX)/(t.clientWidth-hi)*(l.v1-l.v0);n=l.v0+S,r=l.v1+S,_()}a=y,s(e.recs[f(y)]),p()}),t.addEventListener("mouseleave",()=>{a=null,s(null),p()}),t.addEventListener("mousedown",g=>{l={x:g.clientX,v0:n,v1:r}}),window.addEventListener("mouseup",()=>{l=null}),t.addEventListener("dblclick",()=>{e&&(n=e.recs[0].t,r=e.recs[e.recs.length-1].t,p())}),t.addEventListener("wheel",g=>{if(!e)return;g.preventDefault();let y=d(g),S=g.deltaY>0?1.25:.8;n=y-(y-n)*S,r=y+(r-y)*S,_(),p()},{passive:!1});function _(){let g=e.recs[0].t,y=e.recs[e.recs.length-1].t;r-n>y-g&&(n=g,r=y),n<g&&(r+=g-n,n=g),r>y&&(n-=r-y,r=y)}return window.addEventListener("resize",()=>p()),{el:t,set(g){e=g,bo=kp.filter(y=>!y.need||g.has&&g.has[y.need]),n=g.recs[0].t,r=g.recs[g.recs.length-1].t,r<=n&&(r=n+1),a=null,p()},draw:p}}function Op(){let s=null,t="",e=b("div",{class:"bblist"}),n=b("div",{class:"bar-t",style:{display:"none"}},b("div",{class:"bar-fill"})),r=b("div",{class:"stats"}),a=b("canvas",{class:"map small"}),l=b("p",{class:"note"}),h=Wb(w=>{u=w,P()}),u=null,f=!1,p=b("p",{class:"note"},"Noch keine Aufzeichnung geladen. Die Blackbox schreibt im ARM Zustand. Zum Auslesen DISARM, dann hier laden (USB oder WLAN)."),d=b("div",{style:{display:"none"}},r,b("section",{class:"card tight"},h.el,b("p",{class:"note"},"Mausrad zoomt, ziehen verschiebt, Doppelklick zeigt alles.")),b("section",{class:"card"},b("h3",null,"Spur (GPS Fixes an der Oberfl\xE4che)"),b("div",{class:"mapwrap"},a),l)),_=b("div",{class:"toolbar"},b("button",{class:"btn",onclick:()=>S()},"Liste aktualisieren"),b("button",{class:"btn",onclick:async()=>{let w=await y();w&&v(w.u8,w.name)}},"Datei \xF6ffnen"),b("span",{class:"sp"}),b("button",{class:"btn",onclick:()=>jn(t.replace(/\.bin$/,"")+".csv",Gb(s),"text/csv"),id:"bbcsv",disabled:!0},"CSV exportieren"),b("button",{class:"btn warnb",onclick:async()=>{confirm("Alle Blackbox Dateien im Boot l\xF6schen?")&&((await Q.link.cmd("BB CLEAR",8e3)).ok&&ee("Gel\xF6scht","ok"),S())}},"Boot Speicher leeren")),g=b("div",{class:"page"},_,b("section",{class:"card"},b("h3",null,"Aufzeichnungen im Boot"),e,n),p,d);async function y(){return new Promise(w=>{let T=b("input",{type:"file",accept:".bin"});T.onchange=async()=>{let O=T.files[0];if(!O)return w(null);w({name:O.name,u8:new Uint8Array(await O.arrayBuffer())})},T.click()})}async function S(){if(e.innerHTML="",!Q.connected){e.append(b("p",{class:"note"},"Nicht verbunden."));return}let[w,T]=[await Q.link.cmd("BB INFO"),await Q.link.cmd("BB LIST",4e3)];if(!T.ok||!Array.isArray(T.data)){e.append(b("p",{class:"note"},T.text.includes("DISARM")?"Erst DISARM, dann l\xE4sst sich die Blackbox auslesen.":"Keine Antwort: "+T.text));return}w.ok&&w.data&&e.append(b("p",{class:"note"},`Frei: ${(w.data.free/1024).toFixed(0)} von ${(w.data.total/1024).toFixed(0)} kB`)),T.data.length||e.append(b("p",{class:"note"},"Keine Aufzeichnungen.")),T.data.forEach(O=>{let C=parseInt((/bb_(\d+)/.exec(O.f)||[])[1]||0,10),I=Math.max(0,Math.floor((O.n-Cl)/52));e.append(b("div",{class:"bbrow"},b("b",null,O.f),b("span",{class:"dim"},`${(O.n/1024).toFixed(1)} kB, ${I} Datens\xE4tze`),b("span",{class:"sp"}),b("button",{class:"btn primary",disabled:f,onclick:()=>x(C,O.f,!1)},"Laden und anzeigen"),b("button",{class:"btn",disabled:f,onclick:()=>x(C,O.f,!0)},"Als .bin sichern")))})}async function x(w,T,O){if(f)return;f=!0,n.style.display="";let C=n.firstChild;C.style.width="0",C.style.left="0";let I=Number((await Q.link.cmd("BB LIST",4e3)).data?.find(E=>E.f===T)?.n)||1,k=await Q.link.dump(w,E=>{C.style.width=Math.min(100,E/I*100)+"%"});if(f=!1,n.style.display="none",S(),!k.ok){ee(k.text,"bad",6e3);return}O&&(jn(T,k.bytes,"application/octet-stream"),ee("Gespeichert: "+T,"ok")),v(k.bytes,T)}function v(w,T){try{s=Vb(w)}catch(X){ee(X.message,"bad",6e3);return}if(!s.recs.length){ee("Die Datei enth\xE4lt keine Datens\xE4tze","warn");return}t=T,p.style.display="none",d.style.display="",g.querySelector("#bbcsv").disabled=!1;let O=s.recs,C=O[O.length-1].t-O[0].t,I=0,k=99,E=0,A=0,B=0,Y=null;O.forEach((X,et)=>{I=Math.max(I,X.depth),X.vbat>0&&(k=Math.min(k,X.vbat)),E=Math.max(E,Math.abs(X.pitch)),et&&X.mode===4&&O[et-1].mode!==4&&B++,X.flags&4&&X.sats&&(Y&&(A+=Math.hypot((X.lat-Y.lat)*111200,(X.lon-Y.lon)*75900)),Y=X)}),r.innerHTML="";let K=[];if(s.has&&s.has.cur&&K.push(["Verbraucht",bt(O[O.length-1].mah,0)+" mAh"],["Max Strom",bt(Math.max(...O.map(X=>X.cur)),1)+" A"]),s.has&&s.has.cells&&K.push(["Max Zelldifferenz",bt(Math.max(...O.map(X=>Math.abs(X.c1-X.c2))),2)+" V"]),s.has&&s.has.inn){let X=O.filter(et=>et.inrh!==void 0).map(et=>et.inrh);X.length&&K.push(["Feuchte innen",bt(Math.min(...X),0)+" bis "+bt(Math.max(...X),0)+" %"])}[["Datei",T],["Dauer",Jn(C)],["Rate",s.hz+" Hz"],["Max Tiefe",bt(I,2)+" m"],["Min Akku",bt(k,2)+" V"],["Max Nick",bt(E,0)+" \xB0"],["GPS Strecke",bt(A,0)+" m"],["Failsafe",String(B)],...K].forEach(([X,et])=>r.append(b("div",{class:"stat"},b("span",null,X),b("div",null,b("b",{style:{fontSize:X==="Datei"?"14px":""}},et))))),h.set(s),setTimeout(P,30)}function P(){if(!s)return;let w=s.recs.filter(C=>C.flags&4&&C.sats&&C.lat);l.textContent=w.length?`${w.length} Fixes. Der Cursor im Diagramm wandert auf die n\xE4chste bekannte Position.`:"Kein GPS Fix in dieser Aufzeichnung.";let T=w.map(C=>({lat:C.lat,lon:C.lon,c:C.mode===5?Nt.warn:Nt.acc})),O=null;if(u&&w.length){let C=w[0];w.forEach(I=>{Math.abs(I.t-u.t)<Math.abs(C.t-u.t)&&(C=I)}),O={lat:C.lat,lon:C.lon}}Mu(a,{pts:T,home:T.length?{lat:T[0].lat,lon:T[0].lon}:null,cursor:O,empty:"Kein GPS Fix in dieser Aufzeichnung"})}return{el:g,show(){S(),s&&(h.draw(),P())},update(){}}}var ui=ig(Bp(),1);var Hp=Math.PI/180,Vp=(s,t)=>({x:(t.lon-s.lon)*111200*Math.cos(s.lat*Hp),y:(t.lat-s.lat)*111200}),wu=(s,t)=>{let e=Vp(s,t);return{dist:Math.hypot(e.x,e.y),brg:(Math.atan2(e.x,e.y)/Hp+360)%360}},Mo=(s,t,e="")=>b("button",{class:"btn "+e,onclick:t},s),Tu=(s,t)=>`https://wmts.geo.admin.ch/1.0.0/${s}/default/current/3857/{z}/{x}/{y}.${t}`,Fp='\xA9 <a href="https://www.swisstopo.admin.ch" target="_blank">swisstopo</a>',Zb='Seetiefen: swissBATHY3D \xA9 <a href="https://www.swisstopo.admin.ch/de/hoehenmodell-swissbathy3d" target="_blank">swisstopo</a> (Quelle: Bundesamt f\xFCr Landestopografie)',zp={"Landeskarte (swisstopo)":()=>ui.default.tileLayer(Tu("ch.swisstopo.pixelkarte-farbe","jpeg"),{maxZoom:19,maxNativeZoom:18,attribution:Fp}),"Luftbild (swisstopo)":()=>ui.default.tileLayer(Tu("ch.swisstopo.swissimage","jpeg"),{maxZoom:19,maxNativeZoom:18,attribution:Fp}),OpenStreetMap:()=>ui.default.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,referrerPolicy:"strict-origin",attribution:'\xA9 <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> Mitwirkende'})},Xb=()=>ui.default.tileLayer(Tu("ch.swisstopo.swissbathy3d-reliefschattierung","png"),{maxZoom:19,maxNativeZoom:17,opacity:.7,attribution:Zb}),Gp=!1,qb=()=>{if(Gp)return!0;try{return sessionStorage.getItem("fathom.map")==="1"}catch{return!1}},Su=(s,t)=>ui.default.divIcon({className:"",html:`<div class="wpi ${t||""}">${s}</div>`,iconSize:[26,26],iconAnchor:[13,13]});function Yb(s,t,e){let n=e.ms,r=[{t:"WAIT",v:[e.wait,0,0,0]}],a=s,l=0,h=[];return t.forEach((u,f)=>{let p=wu(a,u),d=wn(u.spd,1,100);r.push({t:"TURN",v:[Math.round(p.brg),0,15,12]});let _=0;e.head&&f===0&&r.push({t:"LIGHT",v:[e.head,0,0,0]}),Math.abs(u.depth-l)>.05&&(r.push({t:"DIVE",v:[u.depth,e.rate,e.pitch,d]}),_=Math.abs(u.depth-l)/e.rate);let g=d*n,y=Math.max(1,Math.round(p.dist/g-_));y>7200&&h.push(`Weg ${f+1} dauert \xFCber 2 h, Schritt wird auf 7200 s gek\xFCrzt`),r.push({t:"CRUISE",v:[d,Math.round(p.brg),Math.min(y,7200),0]}),l=u.depth,a=u}),e.head&&r.push({t:"LIGHT",v:[0,0,0,0]}),e.beacon&&r.push({t:"BEACON",v:[2,0,0,0]}),r.push({t:"SURFACE",v:[0,0,0,0]}),{steps:r,notes:h}}function Wp(){let s=Pn.get("mapplan",{start:null,wps:[],base:"Landeskarte (swisstopo)",shade:!0,op:.7,dd:5,ds:25,beacon:!0,rth:!0,head:0}),t=null,e=null,n=null,r=[],a=null,l=null,h=null,u="wp",f=0,p=b("div",{class:"leaflet-host"}),d=b("div",{class:"wptable"}),_=b("div",{class:"warns"}),g={net:on("Karte"),gps:on("Boot GPS")},y={n:Qt("Wegpunkte"),len:Qt("Strecke","m"),t:Qt("Fahrzeit"),z:Qt("Max Tiefe","m"),e:Qt("Ende zu Start","m")},S=()=>Pn.set("mapplan",s),x=()=>Q.get("spd.ms_per_pct",.014),v=b("select",{class:"in sm",onchange:()=>{s.base=v.value,Y(),S()}},Object.keys(zp).map(lt=>b("option",{value:lt,selected:lt===s.base},lt))),P=b("input",{type:"checkbox",checked:s.shade,onchange:()=>{s.shade=P.checked,K(),S()}}),w=b("input",{type:"range",min:.1,max:1,step:.05,value:s.op,class:"sl",oninput:()=>{s.op=+w.value,n&&n.setOpacity(s.op),S()}}),T=b("input",{class:"in num",type:"number",min:0,max:90,step:.5,value:s.dd,onchange:()=>{s.dd=wn(+T.value,0,90),S()}}),O=b("input",{class:"in num",type:"number",min:1,max:100,step:1,value:s.ds,onchange:()=>{s.ds=wn(+O.value,1,100),S()}}),C=b("input",{type:"checkbox",checked:s.beacon,onchange:()=>{s.beacon=C.checked,S()}}),I=b("select",{class:"in sm",onchange:()=>{s.head=+I.value,S()}},[[0,"Scheinwerfer aus"],[50,"Scheinwerfer 50 %"],[100,"Scheinwerfer 100 %"]].map(([lt,pt])=>b("option",{value:lt,selected:(s.head||0)===lt},pt))),k=b("input",{type:"checkbox",checked:s.rth,onchange:()=>{s.rth=k.checked,S()}}),E=(lt,pt)=>{let Et=Mo(pt,()=>{u=lt,B()});return Et.dataset.k=lt,Et},A=[E("start","Startpunkt setzen"),E("wp","Wegpunkte setzen")],B=()=>A.forEach(lt=>lt.classList.toggle("primary",lt.dataset.k===u));function Y(){t&&(e&&t.removeLayer(e),e=zp[s.base](),e.on("tileerror",X),e.addTo(t),e.bringToBack())}function K(){t&&(n&&(t.removeLayer(n),n=null),s.shade&&(n=Xb(),n.setOpacity(s.op),n.on("tileerror",X),n.addTo(t)))}function X(){++f===8&&(g.net.set("keine Kacheln: Internet?","warn"),ee("Kartenkacheln laden nicht. Der Planer braucht Internet, nicht das Boot WLAN.","warn",6e3))}function et(){if(!t)return;r.forEach(pt=>t.removeLayer(pt)),r=[],a&&(t.removeLayer(a),a=null);let lt=[];if(s.start){let pt=ui.default.marker([s.start.lat,s.start.lon],{icon:Su("S","st"),draggable:!0}).addTo(t);pt.on("dragend",()=>{let Et=pt.getLatLng();s.start={lat:Et.lat,lon:Et.lng},S(),et()}),r.push(pt),lt.push([s.start.lat,s.start.lon])}s.wps.forEach((pt,Et)=>{let $=ui.default.marker([pt.lat,pt.lon],{icon:Su(Et+1),draggable:!0}).addTo(t);$.on("dragend",()=>{let W=$.getLatLng();pt.lat=W.lat,pt.lon=W.lng,S(),et()}),r.push($),lt.push([pt.lat,pt.lon])}),lt.length>1&&(a=ui.default.polyline(lt,{color:"#ffb02e",weight:3,dashArray:"8 6"}).addTo(t)),ft(),V()}function V(){let lt=s.start,pt=0,Et=0,$=0,W=lt,ot=[];s.wps.forEach((_t,dt)=>{if(!W){W=_t;return}let nt=wu(W,_t);pt+=nt.dist,Et+=nt.dist/(Math.max(_t.spd,1)*x()),$=Math.max($,_t.depth),W=_t}),y.n.set(String(s.wps.length)),y.len.set(bt(pt,0)),y.t.set(pt?Jn(Et):"\u2013"),y.z.set(bt($,1),$>Q.get("lim.depth",3)?"bad":""),y.e.set(lt&&s.wps.length?bt(Math.hypot(...Object.values(Vp(lt,s.wps[s.wps.length-1]))),0):"\u2013"),_.innerHTML="";let Z=_t=>_.append(b("div",{class:"w"},_t));$>Q.get("lim.depth",3)&&Z(`Tiefe ${bt($,1)} m liegt \xFCber dem Parameter lim.depth (${bt(Q.get("lim.depth",3),1)} m): das Boot l\xF6st dort Failsafe aus. Erst lim.depth erh\xF6hen.`),s.wps.some(_t=>_t.spd>Q.get("lim.throttle",35))&&Z(`Fahrt \xFCber lim.throttle (${Q.get("lim.throttle",35)} %): wird begrenzt, Fahrzeit stimmt dann nicht.`),s.wps.length*3+3>64&&Z("Zu viele Wegpunkte: Boot speichert h\xF6chstens 64 Schritte (je Wegpunkt bis 3 Schritte)."),s.wps.length&&!s.start&&Z('Startpunkt fehlt: erst "Startpunkt setzen", dann Wegpunkte.'),Q.get("spd.ms_per_pct",.014)===.014&&!Q.connected&&Z("Fahrtfaktor spd.ms_per_pct steht auf Standard (0.014 m/s je %). Echten Wert mit einer gemessenen Strecke bestimmen, sonst stimmen die Zeiten nicht.")}function ft(){if(d.innerHTML="",!s.wps.length){d.append(b("p",{class:"note"},"Noch keine Wegpunkte. Karte antippen, um Wegpunkte zu setzen. Marker lassen sich verschieben."));return}let lt=b("tr",null,["#","Tiefe (m)","Fahrt (%)","Weg (m)","Kurs (\xB0)",""].map($=>b("th",null,$))),pt=b("tbody"),Et=s.start;s.wps.forEach(($,W)=>{let ot=Et?wu(Et,$):{dist:0,brg:0};Et=$;let Z=b("input",{class:"in num",type:"number",min:0,max:90,step:.5,value:$.depth,onchange:()=>{$.depth=wn(+Z.value,0,90),S(),V()}}),_t=b("input",{class:"in num",type:"number",min:1,max:100,step:1,value:$.spd,onchange:()=>{$.spd=wn(+_t.value,1,100),S(),V()}});pt.append(b("tr",null,b("td",null,b("b",null,W+1)),b("td",null,Z),b("td",null,_t),b("td",null,bt(ot.dist,0)),b("td",null,bt(ot.brg,0)),b("td",null,b("button",{class:"ib del",title:"l\xF6schen",onclick:()=>{s.wps.splice(W,1),S(),et()}},"\u2715"))))}),d.append(b("table",{class:"ptable"},b("thead",null,lt),pt))}async function G(){if(!s.start||!s.wps.length)return ee("Startpunkt und mindestens einen Wegpunkt setzen","warn");let lt=Yb(s.start,s.wps,{ms:x(),wait:10,rate:.15,pitch:15,beacon:s.beacon,head:s.head||0});if(lt.steps.length>64)return ee(`${lt.steps.length} Schritte, maximal 64. Weniger Wegpunkte setzen.`,"bad",5e3);Pn.set("mission",lt.steps),Pe.emit("mission:set",lt.steps),lt.notes.forEach(pt=>ee(pt,"warn",5e3)),s.rth?Q.connected?await oe("SET mis.end_rth 1","RTH nach Mission aktiviert"):ee("Nach Verbinden mis.end_rth auf 1 setzen, sonst bleibt das Boot nach Missionsende an der Oberfl\xE4che stehen.","warn",7e3):Q.connected&&await oe("SET mis.end_rth 0"),ee(`Mission mit ${lt.steps.length} Schritten \xFCbernommen`,"ok"),Pe.emit("goto","mission")}function ht(){jn("fathom_plan.json",JSON.stringify({start:s.start,wps:s.wps},null,1))}return{el:b("div",{class:"page"},b("div",{class:"chips"},Object.values(g).map(lt=>lt.el)),b("div",{class:"stats"},Object.values(y).map(lt=>lt.el)),b("div",{class:"toolbar"},A,b("span",{class:"sp"}),v,b("label",{class:"chk"},P," Seerelief"),w),b("div",{class:"mapwrap"},p),b("div",{class:"toolbar"},b("label",{class:"fld inl"},b("span",null,"Tiefe neuer Punkt (m)"),T),b("label",{class:"fld inl"},b("span",null,"Fahrt neuer Punkt (%)"),O),b("label",{class:"chk"},C," Beacon am Ende"),b("label",{class:"chk"},k," Heimfahrt nach Ende (RTH)"),I,b("span",{class:"sp"}),Mo("Letzten l\xF6schen",()=>{s.wps.pop(),S(),et()}),Mo("Alles l\xF6schen",()=>{confirm("Plan l\xF6schen?")&&(s.wps=[],s.start=null,S(),et())}),Mo("Plan sichern",ht),Mo("Zur Mission machen",G,"primary")),_,d,b("p",{class:"note"},"Kurs und Zeit werden aus Start, Wegpunkten und Fahrtfaktor gerechnet (Koppelnavigation). Unter Wasser gibt es kein GPS, Str\xF6mung und Drift werden nicht ausgeglichen. An der Oberfl\xE4che korrigiert das Boot nur beim Heimfahren (RTH). Die Karte l\xE4dt nur mit Internet, plane also zuhause und verbinde danach mit dem Boot WLAN. Kartenquellen: swisstopo (Landeskarte, Luftbild, swissBATHY3D Seerelief) und OpenStreetMap.")),show(){if(!t&&!qb()){p.firstChild||p.append(b("div",{class:"mapgate"},b("h4",null,"Karte laden"),b("p",null,"Die Karte l\xE4dt Kartenkacheln direkt von swisstopo (Bundesamt f\xFCr Landestopografie) und auf Wunsch von OpenStreetMap. Dabei erhalten diese Dienste Ihre IP-Adresse. Ohne Klick wird nichts geladen."),b("button",{class:"btn primary",onclick:()=>{try{sessionStorage.setItem("fathom.map","1")}catch{Gp=!0}p.innerHTML="",this.show()}},"Karte laden")));return}t||(t=ui.default.map(p,{center:s.start?[s.start.lat,s.start.lon]:[47,8.38],zoom:s.start?15:11,attributionControl:!0}),t.attributionControl.setPrefix(!1),t.on("click",lt=>{let pt={lat:lt.latlng.lat,lon:lt.latlng.lng};u==="start"||!s.start?(s.start=pt,u==="start"&&(u="wp",B())):s.wps.push({...pt,depth:s.dd,spd:s.ds}),S(),et()}),Y(),K(),B(),et(),g.net.set("Karte: swisstopo","ok")),setTimeout(()=>t.invalidateSize(),60)},update(lt){let pt=lt.gps;!pt||!t||(g.gps.set(pt.ok?`Boot GPS ${pt.sat} Sat`:"Boot GPS kein Fix",pt.ok?"ok":"warn"),pt.ok&&(l?l.setLatLng([pt.lat,pt.lon]):l=ui.default.marker([pt.lat,pt.lon],{icon:Su("B","boat"),interactive:!1}).addTo(t)))}}}var Lr=[["Bereit","eingeschaltet, nicht scharf"],["Scharf","bereit zum Fahren"],["Test","Testbetrieb am Tisch"],["Mission","Mission l\xE4uft"],["Getaucht","scharf und tiefer als 1 m"],["Heimfahrt","RTH aktiv"],["Wiederfinden","nach der Mission an der Oberfl\xE4che oder Befehl"],["Warnung","Akku niedrig oder Befehl"],["Funkverlust","scharf an der Oberfl\xE4che ohne Crossfire"],["Failsafe","Notaufstieg aktiv"],["Alarm","Leckage, Not-Aus oder Befehl"],["Not-Aus","alles stromlos"],["Boot schweigt","nur Pod: 8 s kein Signal vom Boot"]],di=[["L1 GR\xDCN","5 mm LED, Rumpf, GP11"],["L2 ROT","5 mm LED, Rumpf, GP28"],["POD BLITZ","DEBO 3 W weiss"],["POD PIXEL","SK6812, runde Platine"],["SCHEINWERFER","2 \xD7 3 W, Bug, GP17"]],$b=s=>b("span",{class:"lb lb"+s,"aria-hidden":"true"}),Il=s=>b("span",{class:"lname"},$b(s),di[s][0]),Zp=[["Erben","wie der Zustand darunter"],["Aus",""],["Rhythmus","16 Schritte"],["Atmen","weich auf und ab"],["Tiefe z\xE4hlen","ein Blitz je n Meter"],["Fehlercode","n Blitze = Code"]],Au=[["Dauerlicht",65535,100],["Kurzer Blitz alle 3 s",1,188],["Doppelblitz",5,125],["Dreifachblitz",21,125],["Schnell blinkend",21845,125],["Langsam blinkend",255,125],["Herzschlag",11,90],["Morse U (Under Pressure)",117,120],["Strobe doppelt",257,63],["Unruhig",10825,60]],qp=[["Rot","#ff0000"],["Orange","#ff6a00"],["Gelb","#ffd000"],["Gr\xFCn","#00ff00"],["Cyan","#00ffff"],["Blau","#0000ff"],["Violett","#8a00ff"],["Weiss","#ffffff"]],Os=12,os=s=>{let t=Q.par[s];if(t!==void 0)return+t;let e=Bn.find(n=>n.k===s);return e?e.d:0},Eu=s=>s.toString(16).padStart(2,"0"),Kb=s=>"#"+Eu(s[3])+Eu(s[4])+Eu(s[5]),Pu=s=>[parseInt(s.slice(1,3),16),parseInt(s.slice(3,5),16),parseInt(s.slice(5,7),16)];function Yp(s,t,e,n){let r=Math.round(Math.min(100,s[7])*255/100),a=Math.max(20,s[9]);switch(s[2]){case 2:return s[8]>>Math.floor(t/a)%16&1?r:0;case 3:{let l=a*16,h=t%l/l;return Math.round(r*(.5-.5*Math.cos(2*Math.PI*h)))}case 4:{if(e<.5)return 0;let l=Math.min(50,Math.max(1,s[9])),h=Math.min(9,Math.floor(e/l)+1),u=t%4e3;return u<h*400&&u%400<150?r:0}case 5:{if(n<=0)return 0;let l=t%3e3;return l<n*280&&l%280<120?r:0}default:return 0}}var Us=(s,t,e)=>s.find(n=>n[0]===t&&n[1]===e);function $p(s,t,e){for(let n=Lr.length-1;n>=0;n--)if(t>>n&1){let r=Us(s,n,e);if(r&&r[2]!==0)return r}return null}function Jb(s,t,e,n,r,a){let l=$p(s,t,e);if(!l)return{lvl:0,rgb:[0,0,0],c:null};let h=Yp(l,n,r,a),u=l[6];return{lvl:h,rgb:[Math.min(255,l[3]+u),Math.min(255,l[4]+u),Math.min(255,l[5]+u)].map(f=>Math.round(f*h/255)),c:l}}function Xp(s,t){if(!s)return"dunkel";let e=Math.max(20,s[9])*16/1e3,n=t===2||t===4||t<=1&&os("led.hw")===0?"":jb(s)+", ";switch(s[2]){case 1:return"aus";case 2:{if(s[8]===0)return"aus";if(s[8]===65535)return n+"Dauerlicht";let r=Au.find(l=>l[1]===s[8]&&l[2]===s[9]);if(r)return n+r[0].toLowerCase();let a=0;for(let l=0;l<16;l++)s[8]>>l&1&&!(s[8]>>(l+15)%16&1)&&a++;return a>=4?n+`blinkt ${bt(a/e,1)} Mal pro Sekunde`:n+(a===1?"ein Blitz":a+" Blitze")+` alle ${bt(e,1)} s`}case 3:return n+`atmet, ${bt(e,1)} s`;case 4:return n+`Tiefe: ein Blitz je ${s[9]} m`;case 5:return n+"Fehlercode: n Blitze alle 3 s";default:return"erbt"}}function jb(s){if(s[6]>0&&s[3]+s[4]+s[5]===0)return"weiss";let t="farbig",e=1e9;for(let[n,r]of qp){let[a,l,h]=Pu(r),u=(a-s[3])**2+(l-s[4])**2+(h-s[5])**2;u<e&&(e=u,t=n.toLowerCase())}return t}function Qb(s,t){let e=(n,r,a,l,h,u,f=100)=>{let p=Us(t,n,r);p[2]=a,l!==void 0&&(p[8]=l),h!==void 0&&(p[9]=h),u&&(p[3]=u[0],p[4]=u[1],p[5]=u[2],p[6]=u[3]),p[7]=f};if(s==="tarnung"){for(let n=0;n<10;n++)for(let r of[0,2,3])(n!==9||r===0)&&e(n,r,n===0?1:0);e(0,1,1),e(7,1,0),e(9,3,0)}s==="buddy"&&(e(4,0,4,0,5,[0,255,0,0]),e(3,0,3,0,120,[0,160,255,0],70),e(6,2,2,1,63),e(6,3,3,0,100,[0,120,255,0]),e(4,3,2,1,250,[0,255,120,0],40))}function Kp(){let s=qr(),t=[3,0],e=0,n=performance.now(),r=!1,a=null,l=11,h=12,u=2,f=()=>lt.classList.add("primary"),p=new Map,d=!1;async function _(W){if(Q.connected&&(p.set(W[0]*16+W[1],W),!d)){for(d=!0;p.size;){let[ot,Z]=p.entries().next().value;p.delete(ot),await Q.link.cmd(`LIGHT SET ${Z.slice(0,8).join(" ")} 0x${Z[8].toString(16)} ${Z[9]}`,1500)}d=!1,f()}}async function g(){if(!Q.connected)return;let W=await Q.link.cmd("LIGHT GET",3e3);W.ok&&Array.isArray(W.data)&&(s=W.data.map(ot=>ot.slice()),$())}let y=W=>{_(W),$()},S=b("table",{class:"lgrid"}),x=[];function v(){S.innerHTML="",x.length=0,S.append(b("thead",null,b("tr",null,b("th",null,"Zustand"),...di.map(([ot,Z],_t)=>b("th",null,Il(_t),b("small",null,Z))))));let W=b("tbody");Lr.forEach(([ot,Z],_t)=>{let dt=b("tr",null,b("th",{scope:"row"},b("b",null,ot),b("small",null,Z)));di.forEach((nt,wt)=>{if(_t===Os&&(wt<2||wt===4)){dt.append(b("td",{class:"na"},""));return}let Ft=Us(s,_t,wt),Mt=b("span",{class:"mini"}),z=b("button",{class:"lcell"+(t[0]===_t&&t[1]===wt?" on":"")+(Ft[2]===0?" inh":""),title:`${ot}, ${di[wt][0]}`,onclick:()=>{t=[_t,wt],v(),w()}},Mt,b("span",null,Ft[2]===0?"erbt":Zp[Ft[2]][0]));x.push([Mt,_t,wt]),dt.append(b("td",null,z))}),W.append(dt)}),S.append(W)}let P=b("div",{class:"led-ed"});function w(){let[W,ot]=t,Z=Us(s,W,ot);P.innerHTML="";let _t=ot<=1&&os("led.hw")===0,dt=ot===2,nt=ot===4,wt=ot===2||ot===3;P.append(b("h4",null,`${Lr[W][0]} \xB7 `,Il(ot)));let Ft=b("div",{class:"seg wrap"});if(Zp.forEach(([Mt],z)=>{wt&&z>=4||Ft.append(b("button",{class:"segb"+(Z[2]===z?" on":""),onclick:()=>{Z[2]=z,z===4&&(Z[9]<1||Z[9]>50)&&(Z[9]=5),y(Z),w()}},Mt))}),P.append(b("div",{class:"sigrow"},b("span",{class:"sigl"},"Art"),Ft)),Z[2]===0){P.append(b("p",{class:"note"},"Erben: Dieses Licht zeigt, was der n\xE4chsttiefere aktive Zustand festlegt. So kann eine Warnung zum Beispiel nur L2 ROT belegen, und L1 GR\xDCN zeigt weiter die Mission."));return}if(Z[2]===1){P.append(b("p",{class:"note"},"Aus: Das Licht bleibt dunkel, solange dieser Zustand der h\xF6chste ist."));return}if(_t)P.append(b("p",{class:"note"},"L1 und L2 sind einfarbige 5-mm-LEDs: Die Farbe kommt von der LED selbst. F\xFCr freie Farben unten bei \xABHardware\xBB RGB-Pixel w\xE4hlen."));else if(dt)P.append(b("p",{class:"note"},"POD BLITZ ist die weisse 3-W-LED im Pod: einstellbar sind Helligkeit und Rhythmus."));else if(nt)P.append(b("p",{class:"note"},"SCHEINWERFER sind zwei weisse 3-W-LEDs am Bug: einstellbar sind Helligkeit und Rhythmus. Grenzen: head.max, an der Luft head.air. Ab Werk \xFCberall aus: Sie gehen per Senderschalter (rc.ch.head: unten aus, Mitte nach Mission, oben voll) oder per Missionsschritt \xABScheinwerfer\xBB an. Hier k\xF6nnen Sie sie zus\xE4tzlich an Zust\xE4nde koppeln."));else{let Mt=b("input",{type:"color",class:"cpick",value:Kb(Z),oninput:()=>{let[Gt,Jt,kt]=Pu(Mt.value);Z[3]=Gt,Z[4]=Jt,Z[5]=kt,y(Z)}}),z=b("div",{class:"swatches"},qp.map(([Gt,Jt])=>b("button",{class:"sw",title:Gt,"aria-label":Gt,style:{background:Jt},onclick:()=>{let[kt,zt,_e]=Pu(Jt);Z[3]=kt,Z[4]=zt,Z[5]=_e,Z[6]=0,y(Z),w()}})));P.append(b("div",{class:"sigrow"},b("span",{class:"sigl"},"Farbe"),Mt,z)),(ot===3||os("led.hw")===2)&&P.append(O("Weiss-Kanal (RGBW)",0,255,5,Z[6],Gt=>`${Gt}`,Gt=>{Z[6]=Gt,y(Z)}))}if(P.append(O("Helligkeit",1,100,1,Z[7],Mt=>`${Mt} %`,Mt=>{Z[7]=Mt,y(Z)})),Z[2]===2||Z[2]===3){if(Z[2]===2){let Mt=b("div",{class:"steps16"});for(let Gt=0;Gt<16;Gt++)Mt.append(b("button",{class:"st"+(Z[8]>>Gt&1?" on":""),title:`Schritt ${Gt+1}`,"aria-pressed":Z[8]>>Gt&1?"true":"false",onclick:()=>{Z[8]^=1<<Gt,y(Z),w()}}));P.append(b("div",{class:"sigrow col"},b("span",{class:"sigl"},"Rhythmus: 16 Schritte"),Mt));let z=b("select",{class:"in sm",onchange:()=>{let Gt=Au[+z.value];Gt&&(Z[8]=Gt[1],Z[9]=Gt[2],y(Z),w())}},b("option",{value:""},"Vorlage w\xE4hlen \u2026"),Au.map(([Gt],Jt)=>b("option",{value:Jt},Gt)));P.append(b("div",{class:"sigrow"},b("span",{class:"sigl"},"Vorlage"),z,b("button",{class:"btn",onclick:()=>{Z[8]=(Z[8]<<1|Z[8]>>15)&65535,y(Z),w()}},"Versetzen"),b("button",{class:"btn",onclick:()=>{Z[8]=~Z[8]&65535,y(Z),w()}},"Umkehren")))}P.append(O(Z[2]===3?"Tempo: Periode":"Schrittl\xE4nge",20,1e3,5,Z[9],Mt=>Z[2]===3?`${bt(Mt*16/1e3,1)} s`:`${Mt} ms, Periode ${bt(Mt*16/1e3,2)} s`,Mt=>{Z[9]=Mt,y(Z)}))}Z[2]===4&&P.append(O("Ein Blitz je",1,20,1,Z[9],Mt=>`${Mt} m`,Mt=>{Z[9]=Mt,y(Z)}),b("p",{class:"note"},"Unter Wasser z\xE4hlt das Licht die Tiefe: bei 12 m und 5 m pro Blitz sind es drei Blitze, dann Pause. Alle 4 Sekunden.")),Z[2]===5&&P.append(b("p",{class:"note"},"Fehlercode: 1 Akku, 2 Leckage, 3 Tiefe, 4 Sensor, 5 Funkverlust, 6 Befehl. So viele Blitze alle 3 Sekunden.")),P.append(b("div",{class:"sigrow"},b("button",{class:"btn",onclick:()=>{T=Z.slice(2),ee("Zelle kopiert","ok")}},"Kopieren"),b("button",{class:"btn",onclick:()=>{if(T){for(let Mt=0;Mt<T.length;Mt++)Z[Mt+2]=T[Mt];wt&&Z[2]>=4&&(Z[2]=2),y(Z),w()}}},"Einf\xFCgen"),b("button",{class:"btn",onclick:()=>{for(let Mt=0;Mt<Lr.length;Mt++){if(Mt===W||Mt===Os&&(ot<2||ot===4))continue;let z=Us(s,Mt,ot);for(let Gt=2;Gt<10;Gt++)z[Gt]=Z[Gt];_(z)}$(),ee(`F\xFCr alle Zust\xE4nde von ${di[ot][0]} \xFCbernommen`,"ok")}},"F\xFCr alle Zust\xE4nde")))}let T=null;function O(W,ot,Z,_t,dt,nt,wt){let Ft=b("b",{class:"sv"},nt(dt)),Mt=b("input",{type:"range",class:"sl",min:ot,max:Z,step:_t,value:dt,oninput:()=>{Ft.textContent=nt(+Mt.value),wt(+Mt.value)}});return b("div",{class:"sld"},b("div",{class:"sh"},b("span",null,W),Ft),Mt)}let C=di.map(([W],ot)=>{let Z=b("div",{class:"lamp big"});return{el:Z,fig:b("figure",null,Z,b("figcaption",null,Il(ot)))}}),I=di.map(()=>b("span")),k=b("div",{class:"stchk"});function E(){k.innerHTML="",Lr.forEach(([W],ot)=>{if(ot===0)return;let Z=b("input",{type:"checkbox",checked:(l>>ot&1)===1,disabled:r,onchange:()=>{l^=1<<ot,n=performance.now(),V()}});k.append(b("label",{class:"chk"},Z," "+W))})}let A=b("input",{type:"checkbox",onchange:()=>{r=A.checked,E()}}),B=b("button",{class:"btn",onclick:async()=>{let W=await oe(`LIGHT SHOW ${l|1} 10`);W&&W.ok&&ee("Das Boot zeigt diese Zust\xE4nde 10 s lang","ok")}},"Am Boot zeigen (10 s)");function Y(W){e=requestAnimationFrame(Y);let ot=Math.floor(W-n),Z=r&&a&&a.ls!==void 0?a.ls:l|1,_t=r&&a?+a.d||0:Z>>4&1?h:0,dt=r&&a?a.fs?6:0:u,nt=os("led.master"),wt=_t<.5;di.forEach((Ft,Mt)=>{let z=Jb(s,Z>>Os&1&&(Mt===2||Mt===3)?1<<Os|1:Z,Mt,ot,_t,dt);Mt<=1&&(nt===0||nt===2&&!wt)&&(z={lvl:0,rgb:[0,0,0],c:null}),X(C[Mt].el,z,Mt),I[Mt].textContent=`${di[Mt][0]}: ${z.c?Xp(z.c,Mt):"dunkel"}`});for(let[Ft,Mt,z]of x){let Gt=Us(s,Mt,z),Jt=Gt[2]===0?0:Yp(Gt,ot,h,u);X(Ft,{lvl:Jt,rgb:K(Gt,z,Jt),c:Gt},z)}}function K(W,ot,Z){let _t=W[6];return(ot<=1&&os("led.hw")===0?ot===0?[40,255,110]:[255,50,40]:ot===2||ot===4?[235,248,255]:[Math.min(255,W[3]+_t),Math.min(255,W[4]+_t),Math.min(255,W[5]+_t)]).map(nt=>Math.round(nt*Z/255))}function X(W,ot,Z){let _t=ot.c?K(ot.c,Z,ot.lvl):[0,0,0],dt=ot.lvl>8;W.style.background=dt?`radial-gradient(circle at 40% 35%, rgba(255,255,255,${(ot.lvl/255*.8).toFixed(2)}), rgb(${_t.join(",")}) 55%, rgb(${_t.map(nt=>Math.round(nt*.35)).join(",")}))`:"#0d151c",W.style.boxShadow=dt?`0 0 ${Math.round(6+ot.lvl/16)}px ${Math.round(ot.lvl/64)}px rgba(${_t.join(",")},0.6)`:"none"}let et=b("tbody");function V(){et.innerHTML="",Lr.forEach(([W],ot)=>{let Z=ot===Os?1<<Os|1:1<<ot|1|(ot>=1&&ot<=10?2:0);et.append(b("tr",null,b("th",{scope:"row"},W),...di.map((_t,dt)=>b("td",null,ot===Os&&(dt<2||dt===4)?"":Xp($p(s,Z,dt),dt)))))})}let ft=(W,ot,Z)=>{let _t=b("div",{class:"seg wrap"}),dt=()=>{_t.innerHTML="",ot.forEach(([nt,wt])=>_t.append(b("button",{class:"segb"+(os(W)===nt?" on":""),onclick:async()=>{await G(W,nt),dt(),w()}},wt)))};return dt(),b("div",null,_t,Z?b("p",{class:"note"},Z):null)};async function G(W,ot){if(Q.connected){let Z=await Jr(W,ot);Z&&Z.ok&&f()}else Q.par[W]=ot}let ht=(W,ot,Z)=>{let _t=b("input",{type:"checkbox",checked:os(W)>.5,onchange:()=>G(W,_t.checked?1:0)});return b("label",{class:"tog"},_t,b("span",{class:"tsw","aria-hidden":"true"}),b("span",{class:"tl"},b("b",null,ot),Z?b("small",null,Z):null))},xt=(W,ot,Z,_t,dt,nt)=>O(ot,Z,_t,dt,os(W),nt,wt=>G(W,wt)),lt=b("button",{class:"btn",onclick:async()=>{let W=await oe("SAVE","Lichter und Parameter im Boot gespeichert");W&&W.ok&&lt.classList.remove("primary")}},"Im Boot speichern"),pt=b("select",{class:"in sm",onchange:async()=>{let W=pt.value;if(pt.value="",!!W){if(s=qr(),W!=="standard"&&Qb(W,s),Q.connected){await oe("LIGHT DEFAULTS");for(let ot of s)_(ot)}$(),ee("Vorlage geladen","ok")}}},b("option",{value:""},"Vorlage \u2026"),b("option",{value:"standard"},"Standard"),b("option",{value:"tarnung"},"Tarnung"),b("option",{value:"buddy"},"Tauchbegleiter")),Et=b("div",{class:"page"},b("div",{class:"toolbar"},b("span",{class:"note"},"Jedes Licht in jedem Zustand frei einstellen. Ohne Verbindung nur Vorschau."),b("span",{class:"sp"}),pt,b("button",{class:"btn",onclick:()=>jn("fathom_lichter.json",JSON.stringify(s))},"Export"),b("button",{class:"btn",onclick:async()=>{let W=await Xs(".json");if(W)try{let ot=JSON.parse(W);if(!Array.isArray(ot))throw 0;ot.forEach(Z=>{let _t=Us(s,Z[0],Z[1]);if(_t){for(let dt=2;dt<10;dt++)_t[dt]=+Z[dt];_(_t)}}),$(),ee("Lichter importiert","ok")}catch{ee("Datei ung\xFCltig","bad")}}},"Import"),lt),b("div",{class:"siggrid"},b("div",{class:"sigcol"},b("section",{class:"card"},b("h3",null,"Lichtplan"),b("div",{class:"lgrid-wrap"},S),b("p",{class:"note"},"Von oben nach unten steigt der Vorrang. Der h\xF6chste aktive Zustand gilt, \xABerbt\xBB f\xE4llt zum n\xE4chsttieferen durch. Zelle anklicken zum Bearbeiten.")),b("section",{class:"card"},b("h3",null,"Zelle bearbeiten"),P)),b("div",{class:"sigcol"},b("section",{class:"card sigprev"},b("h3",null,"Vorschau"),b("div",{class:"lamps"},C[0].fig,C[1].fig,C[4].fig,b("span",{class:"lsep"}),C[2].fig,C[3].fig),b("p",{class:"sigstate"},...I.flatMap(W=>[W,b("br")])),b("div",{class:"sigl"},"Zust\xE4nde kombinieren"),k,O("Tiefe in der Vorschau",0,60,1,h,W=>`${W} m`,W=>{h=W}),O("Fehlercode in der Vorschau",1,6,1,u,W=>["","Akku","Leckage","Tiefe","Sensor","Funk","Befehl"][W],W=>{u=W}),b("label",{class:"chk"},A," Live vom verbundenen Boot"),b("div",{class:"sigrow"},B)),b("section",{class:"card"},b("h3",null,"Hardware und Grundeinstellungen"),b("div",{class:"sigl"},"LEDs am Rumpf"),ft("led.hw",[[0,"2 \xD7 5 mm"],[1,"2 \xD7 RGB-Pixel"],[2,"2 \xD7 RGBW-Pixel"]],"5 mm: GP11 und GP28, nur Helligkeit. Pixel (SK6812 oder WS2812): beide an GP11 in Reihe, Farbe frei. Gilt nach Neustart."),b("div",{class:"sigl"},"Hauptschalter"),ft("led.master",[[0,"Aus"],[1,"An"],[2,"Nur Oberfl\xE4che"]]),ht("led.lamp_test","Lampentest beim Einschalten","alle Lichter am Boot 1.2 s an"),ht("beacon.watch","Totmann-\xDCberwachung","Schweigt das scharfe Boot 8 s, spielt der Pod \xABBoot schweigt\xBB"),xt("beacon.strobe_max","Wiederfinden endet nach",0,120,5,W=>W>0?`${W} min`:"unbegrenzt"),b("div",{class:"sigl mt"},"Scheinwerfer (GP17)"),xt("head.max","Unter Wasser h\xF6chstens",10,100,5,W=>`${W} %`),xt("head.air","An der Luft h\xF6chstens",0,100,5,W=>`${W} %`),b("div",{class:"sigrow"},b("button",{class:"btn primary",onclick:()=>oe("HEAD 100 15","Scheinwerfer 15 s an (an der Luft begrenzt auf head.air)")},"Selfie: 15 s voll"),b("button",{class:"btn",onclick:()=>oe("HEAD OFF","Scheinwerfer nach Lichtplan")},"Aus")),b("div",{class:"sigl mt"},"Reed 2 (Magnet)"),ht("reed.mission","Mission per Magnet","1 bis 5 s halten und wegnehmen: scharf, Countdown, Mission. Magnet erneut: Abbruch. \xDCber 5 s: aus"),xt("reed.countdown","Countdown",0,60,1,W=>`${W} s`),ht("bat.auto_off","Akkuschutz","entsch\xE4rft und Akku leer: nach 60 s aus"),b("div",{class:"sigrow"},b("button",{class:"btn",onclick:async()=>{confirm("Boot jetzt ausschalten? Einschalten nur mit dem Magneten an Reed 1.")&&await oe("POWER OFF","Boot schaltet in 2 s aus")}},"Boot ausschalten")),b("div",{class:"sigl mt"},"GPS unter Wasser"),xt("gps.off_depth","GPS aus ab",.3,5,.1,W=>`${bt(W,1)} m`),xt("gps.off_delay","nach",0,30,1,W=>`${W} s Tauchzeit`),b("p",{class:"note"},"Not-Aus und grosse Leckage l\xF6sen den Alarm immer aus. Eine Welle \xFCber dem Drucksensor schaltet das GPS nicht ab.")))),b("section",{class:"card"},b("h3",null,"Was das Leuchten bedeutet"),b("div",{class:"lgrid-wrap"},b("table",{class:"ptable legend"},b("thead",null,b("tr",null,b("th",null,"Zustand"),...di.map(([W],ot)=>b("th",null,Il(ot))))),et)),b("p",{class:"note"},"Die Tabelle schreibt sich aus Ihren Einstellungen. Zum Ausdrucken: Seite drucken.")));function $(){v(),w(),V()}return Pe.on("conn",()=>{Q.connected&&g()}),Pe.on("par",()=>{Q.tab==="signals"&&w()}),E(),$(),{el:Et,show(){Q.connected&&g(),$(),cancelAnimationFrame(e),e=requestAnimationFrame(Y)},hide(){cancelAnimationFrame(e)},update(W){a=W}}}var Ir=(s,...t)=>b("section",{class:"card"},b("h3",null,s),...t),as=s=>b("p",{class:"note"},s),Dr=(s,t,e="")=>b("button",{class:"btn "+e,onclick:t},s),tM=["nicht gepr\xFCft","Test l\xE4uft","bestanden","nicht dicht","Innendruck steigt"],eM=["","acc","ok","bad","bad"];function Jp(){let s=[["ADS1115","0x48","Zellspannungen (A0 Mittelabgriff), Lecksonde 3 (A1)"],["BME280","0x77","Innenraum: Druck, Feuchte, Temperatur. Dichtheitstest"],["INA226","0x40","Strom und Energie (oder ADS1115 A2/A3 mit Shunt, cur.ads 1)"]].map(([g,y,S])=>{let x=b("b",null,"\u2013");return{st:x,el:b("div",{class:"sensrow"},b("div",null,b("b",null,g),b("span",{class:"dim"}," "+y)," ",x),b("span",{class:"note"},S))}}),t=b("p",{class:"warn-box",style:{display:"none"}},"Diese Firmware meldet keine Bordsysteme. Ab FATHOM 0.5 mit Bordsystemen (20.11.2026) neu flashen."),e={c1:Qt("Zelle 1","V"),c2:Qt("Zelle 2","V"),cd:Qt("Differenz","V"),cur:Qt("Strom","A"),mah:Qt("Verbraucht","mAh")},n=fn("Kapazit\xE4t \xFCbrig",0,100,"%"),r={rh:Qt("Feuchte","%"),t:Qt("Temperatur","\xB0C"),p:Qt("Innendruck","mbar"),dp:Qt("Unterdruck","mbar")},a=b("b",null,"\u2013"),l=fn("Haltezeit",0,100,"%"),h=Qt("Anstieg (bei 20 \xB0C)","mbar"),u=b("input",{type:"number",min:10,max:600,step:10,value:240,style:{width:"90px"}}),f=Qt("Restzeit",""),p=b("input",{type:"number",step:.01,min:2.5,max:4.4,placeholder:"z. B. 4.12",style:{width:"110px"}}),d=b("input",{type:"number",step:.01,min:.2,max:30,placeholder:"z. B. 1.50",style:{width:"110px"}});return{el:b("div",{class:"page"},t,b("div",{class:"grid2"},Ir("Energie",b("div",{class:"stats"},Object.values(e).map(g=>g.el)),n.el,as("Zellen \xFCber den Mittelabgriff am ADS1115, Strom \xFCber den Shunt am INA226. Der Z\xE4hler beginnt beim Einschalten bei 0 mAh, er stimmt also nur mit frisch geladenem Akku. Grenzen: bat.cell_crit, bat.cell_diff, bat.reserve, cur.max (Seite Parameter).")),Ir("Innenraum",b("div",{class:"stats"},Object.values(r).map(g=>g.el)),as("BME280 im Rohr. Steigt die Feuchte \xFCber hull.rh_warn oder seit dem Einschalten um hull.rh_rise, warnt das Boot, bevor Wasser an den Lecksonden steht. Unterdruck: Aussendruck (MS5837, an der Luft) minus Innendruck."))),b("div",{class:"grid2"},Ir("Dichtheitstest (Unterdruck)",b("ol",{class:"steps"},b("li",null,"Rohr verschliessen, \xFCber das Ventil abpumpen, bis der Unterdruck \xFCber vac.min liegt (Standard 100 mbar)."),b("li",null,"Test starten. Das Boot misst den Innendruck \xFCber vac.hold (Standard 10 min), bereinigt auf 20 \xB0C."),b("li",null,"Steigt er um mehr als vac.loss, ist das Rohr nicht dicht. Nach dem Bestehen \xFCberwacht das Boot weiter, auch getaucht.")),b("div",{class:"row"},b("span",null,"Zustand: "),a),l.el,b("div",{class:"stats"},h.el),b("div",{class:"row"},Dr("Test starten",()=>oe("VAC START","Dichtheitstest l\xE4uft"),"primary"),Dr("Abbrechen",()=>oe("VAC STOP","Test abgebrochen"))),as("Mit vac.require 1 l\xE4sst sich das Boot nur nach bestandenem Test scharf schalten. Der Test gilt bis zum Ausschalten.")),Ir("Pod laden",as("Der Pod h\xE4ngt \xFCber einen isolierten Wandler am Boot und l\xE4dt, solange das Boot eingeschaltet ist. Zuerst den Pod laden, dann das Boot ausschalten und den 2S Akku an der MR30 laden. Ein leerer Pod braucht etwa die H\xE4lfte des Fahrakkus."),b("div",{class:"row"},b("span",null,"Dauer"),u,b("span",{class:"dim"},"min"),Dr("Pod laden",()=>oe(`POD CHARGE ${+u.value||240}`,"Pod l\xE4dt, danach schaltet das Boot aus"),"primary"),Dr("Beenden",()=>oe("POD STOP","Pod laden beendet"))),b("div",{class:"stats"},f.el),as("Scharf schalten beendet das Laden. Nach Ablauf schaltet sich das Boot selbst aus (Selbsthaltung GP12)."))),b("div",{class:"grid2"},Ir("Sensoren am I2C Bus",b("div",{class:"senslist"},s.map(g=>g.el)),as("Alle drei sind optional und werden beim Einschalten gesucht. Pullup Widerst\xE4nde nur an einem Modul am Bus lassen. Der BME280 muss auf 0x77 stehen (SDO an 3V3), 0x76 belegt der MS5837.")),Ir("Abgleichen: Zelle und Strom",as("Zelle 1 am Balancerstecker mit dem Multimeter messen (Minus zum Mittelabgriff) und eintragen. Zelle 2 rechnet die Firmware aus der Gesamtspannung, darum zuerst die Batteriespannung abgleichen (Seite Kalibration)."),b("div",{class:"row"},p,b("span",{class:"dim"},"V"),Dr("Abgleichen",()=>{let g=+p.value;g>2.5&&g<4.5?oe(`CAL CELL ${g}`,"Zelle 1 abgeglichen, im Boot speichern nicht vergessen"):ee("Spannung der Zelle 1 eintragen","warn")},"primary")),b("h4",null,"Strom abgleichen"),as("Multimeter (Bereich 10 A) in die Akkuleitung, eine gleichm\xE4ssige Last einschalten (zum Beispiel Testmodus, Pumpe), den gemessenen Strom eintragen. Korrigiert cur.shunt, wichtig bei Shunts mit 5 % Toleranz und langen Anschlussbeinen."),b("div",{class:"row"},d,b("span",{class:"dim"},"A"),Dr("Strom abgleichen",()=>{let g=+d.value;g>=.2?oe(`CAL CUR ${g}`,"Strom abgeglichen, im Boot speichern nicht vergessen"):ee("Gemessenen Strom eintragen (mindestens 0.2 A)","warn")},"primary"))))),show(){u.value=Q.get("pod.charge",240)},update(g){let y=g.opt!==void 0;if(t.style.display=y?"none":"",!y)return;let S=g.opt;if(s.forEach((P,w)=>{let T=S>>w&1,O=w===2&&T&&Q.get("cur.ads",0)>.5;P.st.textContent=O?"Strom \xFCber ADS1115":T?"gefunden":"fehlt",P.st.className=T?"ok":"dim"}),S&1){let P=Math.abs(g.cel[0]-g.cel[1]),w=Q.get("bat.cell_crit",3.2),T=Math.min(g.cel[0],g.cel[1]);e.c1.set(bt(g.cel[0],3),g.cel[0]<w?"bad":""),e.c2.set(bt(g.cel[1],3),g.cel[1]<w?"bad":""),e.cd.set(bt(P,3),P>Q.get("bat.cell_diff",.15)?"warn":T<w?"bad":"ok")}else["c1","c2","cd"].forEach(P=>e[P].set("\u2013"));if(S&4){let P=Q.get("bat.capacity",850),w=Math.max(0,100-g.mah/P*100),T=Q.get("bat.reserve",30);e.cur.set(bt(g.cur,2),g.cur>Q.get("cur.max",6)?"warn":""),e.mah.set(bt(g.mah,0),g.el?"warn":""),n.set(w,`${bt(w,0)} % (Reserve ${T} %)`,w<T?Nt.warn:Nt.ok)}else e.cur.set("\u2013"),e.mah.set("\u2013"),n.set(void 0);if(S&2){let P=g.in[2];r.rh.set(P<0?"kein":bt(P,0),P>Q.get("hull.rh_warn",70)?"bad":""),r.t.set(bt(g.in[1],1)),r.p.set(bt(g.in[0],1)),r.dp.set(bt(g.vac.dp,0),g.vac.dp>=Q.get("vac.min",100)?"ok":"")}else Object.values(r).forEach(P=>P.set("\u2013"));let x=g.vac||{s:0,t:0,l:0},v=Q.get("vac.hold",10)*60;a.textContent=S&2?tM[x.s]||"?":"BME280 fehlt",a.className=eM[x.s]||"",l.set(x.s===1?Math.min(100,x.t/v*100):x.s===2?100:0,x.s===1?`${Jn(x.t)} von ${Jn(v)}`:x.s===2?"bestanden":"\u2013",x.s>=3?Nt.bad:x.s===2?Nt.ok:Nt.acc),h.set(bt(x.l,1),x.l>Q.get("vac.loss",3)?"bad":""),f.set(g.pc>0?Jn(g.pc):"aus",g.pc>0?"acc":"")}}}var nM='<svg viewBox="0 0 64 64" width="28" height="28" aria-hidden="true"><rect width="64" height="64" rx="6" fill="#0b0e12" stroke="#2a3a47"/><path d="M18 14v22a14 14 0 0 0 28 0V14" fill="none" stroke="#ff7a59" stroke-width="7" stroke-linecap="square"/></svg>',em=/(^|\.)underpressure\.ch$/.test(location.hostname),jp=em?"/fathom.html":location.protocol==="file:"||location.hostname==="192.168.4.1"?"":"https://underpressure.ch/fathom.html";function iM(){let s=b("dialog",{class:"dlg"},b("h2",null,"Per WLAN verbinden"),b("p",{class:"note"},"Diese Seite l\xE4uft \xFCber https. Der Browser erlaubt von hier keine unverschl\xFCsselte Verbindung ins Boot WLAN. Das Boot liefert den Konfigurator deshalb selbst aus:"),b("ol",null,b("li",null,"Boot einschalten, es muss entsch\xE4rft sein (DISARMED). Scharf geschaltet ist das WLAN aus."),b("li",null,"Mit dem WLAN ",b("code",null,"FATHOM-XXXX")," verbinden (Handy, Tablet oder PC)."),b("li",null,"Im Browser ",b("code",null,"http://192.168.4.1")," \xF6ffnen."),b("li",null,"Dort \xABPer WLAN verbinden\xBB dr\xFCcken.")),b("p",{class:"note"},"Per WLAN gehen Parameter, Missionen, Tests und Kalibration. Scharfschalten und Missionsstart gehen per Crossfire, USB oder Magnet an Reed 2, der Bootloader nur per USB."),b("div",{class:"row"},b("button",{class:"btn primary",onclick:()=>s.close()},"Verstanden")));s.addEventListener("close",()=>s.remove()),document.body.append(s),s.showModal()}var sM=[["setup","Verbinden","M12 2v10m0 0l-4-4m4 4l4-4M5 14v5h14v-5"],["dash","\xDCbersicht","M3 13a9 9 0 1118 0M12 13l4-5M5 20h14"],["sensors","Sensoren","M3 17l5-6 4 3 5-8 4 5M3 21h18"],["calib","Kalibration","M12 3v4m0 10v4M3 12h4m10 0h4M12 8a4 4 0 100 8 4 4 0 000-8z"],["tests","Tests","M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3"],["params","Parameter","M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0M14 4v4M8 10v4M16 16v4"],["nav","Navigation","M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"],["map","Karte","M9 4L3 6v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14"],["board","Bord","M7 4h10v4H7zM5 8h14v12H5zM9 12h6M9 16h3M17 2v2M7 2v2"],["signals","Signale","M12 3v2M12 19v2M4.2 6.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 17.8l1.4-1.4M18.4 5.6l1.4-1.4M12 8a4 4 0 100 8 4 4 0 000-8z"],["mission","Mission","M4 20l4-12 4 6 4-10 4 16M3 4h4"],["bb","Blackbox","M5 4h14v16H5zM9 4v6h6V4M8 15h8M8 18h5"],["term","Terminal","M4 5h16v14H4zM7 10l3 2-3 2M12 15h5"]],Ze={setup:null,dash:null,sensors:null,calib:null,tests:null,params:null,map:null,board:null,signals:null,mission:null,nav:null,bb:null,term:null},Nr={async connect(){if(Q.connected)return;if(!$r.supported())return ee("Kein Web Serial in diesem Browser. Chrome oder Edge am PC nutzen.","bad",6e3);let s=new $r;try{await s.connect()}catch(t){t.name!=="NotFoundError"&&ee("Verbindung fehlgeschlagen: "+t.message,"bad",6e3);return}Ru(s,!1)},async wifi(s,t=1){if(Q.connected)return;if(location.protocol==="https:")return iM();let e=new qo(s||(location.protocol==="file:"||["localhost","127.0.0.1"].includes(location.hostname)?Q.wifiHost||"192.168.4.1":location.hostname));try{await e.connect()}catch(n){if(t>1){setTimeout(()=>Nr.wifi(s,t-1),2e3);return}ee("WLAN Verbindung fehlgeschlagen: "+n.message,"bad",7e3);return}Q.wifiHost=e.host,e.on("close",()=>{!e.noretry&&!Q.demo&&(ee("Funk getrennt, versuche neu (nur im DISARMED aktiv)","warn"),setTimeout(()=>Nr.wifi(e.host,15),2500))}),Ru(e,!1)},async demo(){Q.connected&&await Q.link.disconnect();let s=new Yo;await s.connect(),Ru(s,!0)},async disconnect(){Q.link&&await Q.link.disconnect()}};async function Ru(s,t){if(Q.link=s,Q.demo=t,Q.connected=!0,Q.wifi=!!s.wifi,s.on("rx",a=>Pe.emit("rx",a)),s.on("tx",a=>Pe.emit("tx",a)),s.on("ev",a=>fs(a,/ERR|FAILSAFE|LECK/i.test(a)?"bad":"info")),s.on("tel",a=>{Q.tel=a,Q.lastTel=performance.now()}),s.on("close",()=>{Q.link===s&&(Q.connected=!1,Q.tel=null,Pe.emit("conn"),Cu(),fs("Verbindung getrennt","warn"),ee("Verbindung getrennt","warn"))}),s.on("error",a=>fs("Fehler: "+(a.message||a),"bad")),Pe.emit("conn"),Cu(),!(await s.cmd("PING",1500)).ok){ee("Keine Antwort vom Boot. Ist FATHOM geflasht?","bad",6e3),await s.disconnect();return}let n=await s.cmd("INFO");n.ok&&(Q.info=n.data),await Kr();let r=await s.cmd("MIS GET");Q.boatMis=r.data,await s.cmd(s.wifi?"STREAM 10":"STREAM 20"),fs(`Verbunden mit ${Q.info?.fw} ${Q.info?.ver}`,"ok"),ee(t?"Demo Boot verbunden":"Boot verbunden","ok"),So(Q.tab==="setup"?"dash":Q.tab)}var Qp,Dl,tm;function Cu(){let s=Q.tel,t=vi("#conn");t&&(t.className="conn "+(Q.connected?"on":""),t.textContent=Q.connected?Q.demo?"DEMO":Q.wifi?"WLAN":"USB":"GETRENNT");let e=vi("#armbtn");e&&(e.disabled=!Q.connected||Q.wifi,e.title=Q.wifi?"Scharfschalten per Crossfire, USB oder Magnet an Reed 2, nicht per WLAN":"",e.textContent=s&&s.arm?"DISARM":"ARM",e.className="btn "+(s&&s.arm?"stop":"warnb"));let n=vi("#modesel");n&&(n.disabled=!Q.connected,s&&document.activeElement!==n&&(n.value=s.m));let r=vi("#disc");r&&(r.style.display=Q.connected?"":"none")}function So(s){let t=Ze[Q.tab];t&&t.hide&&t.hide(),Q.tab=s,Dl.innerHTML="";let e=Ze[s];Dl.append(e.el),e.show&&e.show(),document.querySelectorAll(".nav button").forEach(n=>n.classList.toggle("on",n.dataset.k===s)),Pe.emit("tab",s),location.hash=s}Pe.on("goto",So);function rM(){let s=vi("#app");Qp=b("header",{class:"top"},b("div",{class:"brand",html:nM}),b("div",{class:"bt"},b("b",null,"FATHOM"),b("span",null,"Under Pressure \xB7 U-Boote")),jp?b("a",{class:"btn back",href:jp,"aria-label":"Zur\xFCck zur Website",title:"Zur\xFCck zur Website underpressure.ch",html:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg><span>Website</span>'}):null,b("span",{class:"sp"}),b("span",{id:"conn",class:"conn"},"GETRENNT"),b("select",{id:"modesel",class:"in sm",disabled:!0,onchange:a=>oe("MODE "+a.target.value)},["MANUAL","STAB","DEPTH","MISSION","RTH"].map(a=>b("option",{value:a},a)),b("option",{value:"FAILSAFE",disabled:!0},"FAILSAFE")),b("button",{id:"armbtn",class:"btn warnb",disabled:!0,onclick:()=>oe(Q.tel&&Q.tel.arm?"DISARM":"ARM")},"ARM"),b("button",{id:"disc",class:"btn",style:{display:"none"},onclick:()=>Nr.disconnect()},"Trennen"));let t=b("nav",{class:"nav"},sM.map(([a,l,h])=>b("button",{"data-k":a,onclick:()=>So(a),html:`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${h}"/></svg><span>${l}</span>`})),b("span",{class:"sp"}),b("div",{class:"navfoot"},em?b("a",{href:"/fathom.html",target:"_top"},"Under Pressure"):"Under Pressure"));Dl=b("main",{class:"content"}),tm=b("footer",{class:"status"},b("span",{id:"sb1"},"bereit"),b("span",{class:"sp"}),b("span",{id:"sb2"},"FATHOM Konfigurator 0.5")),s.append(Qp,b("div",{class:"body"},t,Dl),tm),Ze.setup=Ad(Nr),Ze.dash=Pd(),Ze.sensors=Rd(),Ze.calib=Ld(),Ze.tests=Id(),Ze.params=Dd(),Ze.map=Wp(),Ze.board=Jp(),Ze.signals=Kp(),Ze.mission=Rp(),Ze.nav=Ip(),Ze.bb=Op(),Ze.term=Nd(),Bn.forEach(a=>{Q.par[a.k]=a.d}),Pe.on("ev",()=>{let a=Q.events[Q.events.length-1];a&&(vi("#sb1").textContent=a.m)});let e=0,n=a=>{if(requestAnimationFrame(n),Q.connected&&Q.tel&&Q.lastTel!==e){Ze.nav&&Q.tab!=="nav"&&Ze.nav.update(Q.tel),e=Q.lastTel;let l=Ze[Q.tab];l&&l.update&&l.update(Q.tel),Cu(),Q.tab!=="tests"&&Ze.tests.update}Q.connected&&performance.now()-Q.lastTel>2e3&&Q.lastTel?vi("#sb2").textContent="keine Telemetrie":Q.connected&&(vi("#sb2").textContent=Q.demo?"Demo":Q.wifi?"WLAN 10 Hz":"USB 20 Hz")};requestAnimationFrame(n);let r=location.hash.slice(1);So(Ze[r]?r:"setup"),new URLSearchParams(location.search).has("demo")&&Nr.demo(),window.addEventListener("beforeunload",()=>{if(Q.connected)try{Q.link._write(`TEST OFF
`)}catch{}}),document.addEventListener("visibilitychange",()=>{document.hidden&&Q.connected&&Q.tel&&Q.tel.tst&&Ze.tests.stopAll()}),window.__fathom={S:Q,pages:Ze,api:Nr,setTab:So}}rM();})();
