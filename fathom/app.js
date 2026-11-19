(()=>{var Wm=Object.create;var pd=Object.defineProperty;var Zm=Object.getOwnPropertyDescriptor;var Xm=Object.getOwnPropertyNames;var qm=Object.getPrototypeOf,Ym=Object.prototype.hasOwnProperty;var $m=(s,t)=>()=>(t||s((t={exports:{}}).exports,t),t.exports);var Km=(s,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Xm(t))!Ym.call(s,r)&&r!==e&&pd(s,r,{get:()=>t[r],enumerable:!(n=Zm(t,r))||n.enumerable});return s};var Jm=(s,t,e)=>(e=s!=null?Wm(qm(s)):{},Km(t||!s||!s.__esModule?pd(e,"default",{value:s,enumerable:!0}):e,s));var Dp=$m((Rl,Ip)=>{(function(s,t){typeof Rl=="object"&&typeof Ip<"u"?t(Rl):typeof define=="function"&&define.amd?define(["exports"],t):(s=typeof globalThis<"u"?globalThis:s||self,t(s.leaflet={}))})(Rl,(function(s){"use strict";var t="1.9.4";function e(i){var o,c,p,b;for(c=1,p=arguments.length;c<p;c++){b=arguments[c];for(o in b)i[o]=b[o]}return i}var n=Object.create||(function(){function i(){}return function(o){return i.prototype=o,new i}})();function r(i,o){var c=Array.prototype.slice;if(i.bind)return i.bind.apply(i,c.call(arguments,1));var p=c.call(arguments,2);return function(){return i.apply(o,p.length?p.concat(c.call(arguments)):arguments)}}var a=0;function l(i){return"_leaflet_id"in i||(i._leaflet_id=++a),i._leaflet_id}function h(i,o,c){var p,b,R,z;return z=function(){p=!1,b&&(R.apply(c,b),b=!1)},R=function(){p?b=arguments:(i.apply(c,arguments),setTimeout(z,o),p=!0)},R}function u(i,o,c){var p=o[1],b=o[0],R=p-b;return i===p&&c?i:((i-b)%R+R)%R+b}function f(){return!1}function m(i,o){if(o===!1)return i;var c=Math.pow(10,o===void 0?6:o);return Math.round(i*c)/c}function d(i){return i.trim?i.trim():i.replace(/^\s+|\s+$/g,"")}function g(i){return d(i).split(/\s+/)}function _(i,o){Object.prototype.hasOwnProperty.call(i,"options")||(i.options=i.options?n(i.options):{});for(var c in o)i.options[c]=o[c];return i.options}function y(i,o,c){var p=[];for(var b in i)p.push(encodeURIComponent(c?b.toUpperCase():b)+"="+encodeURIComponent(i[b]));return(!o||o.indexOf("?")===-1?"?":"&")+p.join("&")}var S=/\{ *([\w_ -]+) *\}/g;function x(i,o){return i.replace(S,function(c,p){var b=o[p];if(b===void 0)throw new Error("No value provided for variable "+c);return typeof b=="function"&&(b=b(o)),b})}var v=Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"};function P(i,o){for(var c=0;c<i.length;c++)if(i[c]===o)return c;return-1}var w="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function T(i){return window["webkit"+i]||window["moz"+i]||window["ms"+i]}var U=0;function C(i){var o=+new Date,c=Math.max(0,16-(o-U));return U=o+c,window.setTimeout(i,c)}var D=window.requestAnimationFrame||T("RequestAnimationFrame")||C,O=window.cancelAnimationFrame||T("CancelAnimationFrame")||T("CancelRequestAnimationFrame")||function(i){window.clearTimeout(i)};function A(i,o,c){if(c&&D===C)i.call(o);else return D.call(window,r(i,o))}function E(i){i&&O.call(window,i)}var B={__proto__:null,extend:e,create:n,bind:r,get lastId(){return a},stamp:l,throttle:h,wrapNum:u,falseFn:f,formatNum:m,trim:d,splitWords:g,setOptions:_,getParamString:y,template:x,isArray:v,indexOf:P,emptyImageUrl:w,requestFn:D,cancelFn:O,requestAnimFrame:A,cancelAnimFrame:E};function q(){}q.extend=function(i){var o=function(){_(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},c=o.__super__=this.prototype,p=n(c);p.constructor=o,o.prototype=p;for(var b in this)Object.prototype.hasOwnProperty.call(this,b)&&b!=="prototype"&&b!=="__super__"&&(o[b]=this[b]);return i.statics&&e(o,i.statics),i.includes&&(Z(i.includes),e.apply(null,[p].concat(i.includes))),e(p,i),delete p.statics,delete p.includes,p.options&&(p.options=c.options?n(c.options):{},e(p.options,i.options)),p._initHooks=[],p.callInitHooks=function(){if(!this._initHooksCalled){c.callInitHooks&&c.callInitHooks.call(this),this._initHooksCalled=!0;for(var R=0,z=p._initHooks.length;R<z;R++)p._initHooks[R].call(this)}},o},q.include=function(i){var o=this.prototype.options;return e(this.prototype,i),i.options&&(this.prototype.options=o,this.mergeOptions(i.options)),this},q.mergeOptions=function(i){return e(this.prototype.options,i),this},q.addInitHook=function(i){var o=Array.prototype.slice.call(arguments,1),c=typeof i=="function"?i:function(){this[i].apply(this,o)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(c),this};function Z(i){if(!(typeof L>"u"||!L||!L.Mixin)){i=v(i)?i:[i];for(var o=0;o<i.length;o++)i[o]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var j={on:function(i,o,c){if(typeof i=="object")for(var p in i)this._on(p,i[p],o);else{i=g(i);for(var b=0,R=i.length;b<R;b++)this._on(i[b],o,c)}return this},off:function(i,o,c){if(!arguments.length)delete this._events;else if(typeof i=="object")for(var p in i)this._off(p,i[p],o);else{i=g(i);for(var b=arguments.length===1,R=0,z=i.length;R<z;R++)b?this._off(i[R]):this._off(i[R],o,c)}return this},_on:function(i,o,c,p){if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}if(this._listens(i,o,c)===!1){c===this&&(c=void 0);var b={fn:o,ctx:c};p&&(b.once=!0),this._events=this._events||{},this._events[i]=this._events[i]||[],this._events[i].push(b)}},_off:function(i,o,c){var p,b,R;if(this._events&&(p=this._events[i],!!p)){if(arguments.length===1){if(this._firingCount)for(b=0,R=p.length;b<R;b++)p[b].fn=f;delete this._events[i];return}if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}var z=this._listens(i,o,c);if(z!==!1){var Q=p[z];this._firingCount&&(Q.fn=f,this._events[i]=p=p.slice()),p.splice(z,1)}}},fire:function(i,o,c){if(!this.listens(i,c))return this;var p=e({},o,{type:i,target:this,sourceTarget:o&&o.sourceTarget||this});if(this._events){var b=this._events[i];if(b){this._firingCount=this._firingCount+1||1;for(var R=0,z=b.length;R<z;R++){var Q=b[R],ot=Q.fn;Q.once&&this.off(i,ot,Q.ctx),ot.call(Q.ctx||this,p)}this._firingCount--}}return c&&this._propagateEvent(p),this},listens:function(i,o,c,p){typeof i!="string"&&console.warn('"string" type argument expected');var b=o;typeof o!="function"&&(p=!!o,b=void 0,c=void 0);var R=this._events&&this._events[i];if(R&&R.length&&this._listens(i,b,c)!==!1)return!0;if(p){for(var z in this._eventParents)if(this._eventParents[z].listens(i,o,c,p))return!0}return!1},_listens:function(i,o,c){if(!this._events)return!1;var p=this._events[i]||[];if(!o)return!!p.length;c===this&&(c=void 0);for(var b=0,R=p.length;b<R;b++)if(p[b].fn===o&&p[b].ctx===c)return b;return!1},once:function(i,o,c){if(typeof i=="object")for(var p in i)this._on(p,i[p],o,!0);else{i=g(i);for(var b=0,R=i.length;b<R;b++)this._on(i[b],o,c,!0)}return this},addEventParent:function(i){return this._eventParents=this._eventParents||{},this._eventParents[l(i)]=i,this},removeEventParent:function(i){return this._eventParents&&delete this._eventParents[l(i)],this},_propagateEvent:function(i){for(var o in this._eventParents)this._eventParents[o].fire(i.type,e({layer:i.target,propagatedFrom:i.target},i),!0)}};j.addEventListener=j.on,j.removeEventListener=j.clearAllEventListeners=j.off,j.addOneTimeEventListener=j.once,j.fireEvent=j.fire,j.hasEventListeners=j.listens;var it=q.extend(j);function V(i,o,c){this.x=c?Math.round(i):i,this.y=c?Math.round(o):o}var pt=Math.trunc||function(i){return i>0?Math.floor(i):Math.ceil(i)};V.prototype={clone:function(){return new V(this.x,this.y)},add:function(i){return this.clone()._add(G(i))},_add:function(i){return this.x+=i.x,this.y+=i.y,this},subtract:function(i){return this.clone()._subtract(G(i))},_subtract:function(i){return this.x-=i.x,this.y-=i.y,this},divideBy:function(i){return this.clone()._divideBy(i)},_divideBy:function(i){return this.x/=i,this.y/=i,this},multiplyBy:function(i){return this.clone()._multiplyBy(i)},_multiplyBy:function(i){return this.x*=i,this.y*=i,this},scaleBy:function(i){return new V(this.x*i.x,this.y*i.y)},unscaleBy:function(i){return new V(this.x/i.x,this.y/i.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=pt(this.x),this.y=pt(this.y),this},distanceTo:function(i){i=G(i);var o=i.x-this.x,c=i.y-this.y;return Math.sqrt(o*o+c*c)},equals:function(i){return i=G(i),i.x===this.x&&i.y===this.y},contains:function(i){return i=G(i),Math.abs(i.x)<=Math.abs(this.x)&&Math.abs(i.y)<=Math.abs(this.y)},toString:function(){return"Point("+m(this.x)+", "+m(this.y)+")"}};function G(i,o,c){return i instanceof V?i:v(i)?new V(i[0],i[1]):i==null?i:typeof i=="object"&&"x"in i&&"y"in i?new V(i.x,i.y):new V(i,o,c)}function ut(i,o){if(i)for(var c=o?[i,o]:i,p=0,b=c.length;p<b;p++)this.extend(c[p])}ut.prototype={extend:function(i){var o,c;if(!i)return this;if(i instanceof V||typeof i[0]=="number"||"x"in i)o=c=G(i);else if(i=lt(i),o=i.min,c=i.max,!o||!c)return this;return!this.min&&!this.max?(this.min=o.clone(),this.max=c.clone()):(this.min.x=Math.min(o.x,this.min.x),this.max.x=Math.max(c.x,this.max.x),this.min.y=Math.min(o.y,this.min.y),this.max.y=Math.max(c.y,this.max.y)),this},getCenter:function(i){return G((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,i)},getBottomLeft:function(){return G(this.min.x,this.max.y)},getTopRight:function(){return G(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(i){var o,c;return typeof i[0]=="number"||i instanceof V?i=G(i):i=lt(i),i instanceof ut?(o=i.min,c=i.max):o=c=i,o.x>=this.min.x&&c.x<=this.max.x&&o.y>=this.min.y&&c.y<=this.max.y},intersects:function(i){i=lt(i);var o=this.min,c=this.max,p=i.min,b=i.max,R=b.x>=o.x&&p.x<=c.x,z=b.y>=o.y&&p.y<=c.y;return R&&z},overlaps:function(i){i=lt(i);var o=this.min,c=this.max,p=i.min,b=i.max,R=b.x>o.x&&p.x<c.x,z=b.y>o.y&&p.y<c.y;return R&&z},isValid:function(){return!!(this.min&&this.max)},pad:function(i){var o=this.min,c=this.max,p=Math.abs(o.x-c.x)*i,b=Math.abs(o.y-c.y)*i;return lt(G(o.x-p,o.y-b),G(c.x+p,c.y+b))},equals:function(i){return i?(i=lt(i),this.min.equals(i.getTopLeft())&&this.max.equals(i.getBottomRight())):!1}};function lt(i,o){return!i||i instanceof ut?i:new ut(i,o)}function ct(i,o){if(i)for(var c=o?[i,o]:i,p=0,b=c.length;p<b;p++)this.extend(c[p])}ct.prototype={extend:function(i){var o=this._southWest,c=this._northEast,p,b;if(i instanceof wt)p=i,b=i;else if(i instanceof ct){if(p=i._southWest,b=i._northEast,!p||!b)return this}else return i?this.extend(J(i)||Mt(i)):this;return!o&&!c?(this._southWest=new wt(p.lat,p.lng),this._northEast=new wt(b.lat,b.lng)):(o.lat=Math.min(p.lat,o.lat),o.lng=Math.min(p.lng,o.lng),c.lat=Math.max(b.lat,c.lat),c.lng=Math.max(b.lng,c.lng)),this},pad:function(i){var o=this._southWest,c=this._northEast,p=Math.abs(o.lat-c.lat)*i,b=Math.abs(o.lng-c.lng)*i;return new ct(new wt(o.lat-p,o.lng-b),new wt(c.lat+p,c.lng+b))},getCenter:function(){return new wt((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new wt(this.getNorth(),this.getWest())},getSouthEast:function(){return new wt(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(i){typeof i[0]=="number"||i instanceof wt||"lat"in i?i=J(i):i=Mt(i);var o=this._southWest,c=this._northEast,p,b;return i instanceof ct?(p=i.getSouthWest(),b=i.getNorthEast()):p=b=i,p.lat>=o.lat&&b.lat<=c.lat&&p.lng>=o.lng&&b.lng<=c.lng},intersects:function(i){i=Mt(i);var o=this._southWest,c=this._northEast,p=i.getSouthWest(),b=i.getNorthEast(),R=b.lat>=o.lat&&p.lat<=c.lat,z=b.lng>=o.lng&&p.lng<=c.lng;return R&&z},overlaps:function(i){i=Mt(i);var o=this._southWest,c=this._northEast,p=i.getSouthWest(),b=i.getNorthEast(),R=b.lat>o.lat&&p.lat<c.lat,z=b.lng>o.lng&&p.lng<c.lng;return R&&z},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(i,o){return i?(i=Mt(i),this._southWest.equals(i.getSouthWest(),o)&&this._northEast.equals(i.getNorthEast(),o)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function Mt(i,o){return i instanceof ct?i:new ct(i,o)}function wt(i,o,c){if(isNaN(i)||isNaN(o))throw new Error("Invalid LatLng object: ("+i+", "+o+")");this.lat=+i,this.lng=+o,c!==void 0&&(this.alt=+c)}wt.prototype={equals:function(i,o){if(!i)return!1;i=J(i);var c=Math.max(Math.abs(this.lat-i.lat),Math.abs(this.lng-i.lng));return c<=(o===void 0?1e-9:o)},toString:function(i){return"LatLng("+m(this.lat,i)+", "+m(this.lng,i)+")"},distanceTo:function(i){return at.distance(this,J(i))},wrap:function(){return at.wrapLatLng(this)},toBounds:function(i){var o=180*i/40075017,c=o/Math.cos(Math.PI/180*this.lat);return Mt([this.lat-o,this.lng-c],[this.lat+o,this.lng+c])},clone:function(){return new wt(this.lat,this.lng,this.alt)}};function J(i,o,c){return i instanceof wt?i:v(i)&&typeof i[0]!="object"?i.length===3?new wt(i[0],i[1],i[2]):i.length===2?new wt(i[0],i[1]):null:i==null?i:typeof i=="object"&&"lat"in i?new wt(i.lat,"lng"in i?i.lng:i.lon,i.alt):o===void 0?null:new wt(i,o,c)}var Y={latLngToPoint:function(i,o){var c=this.projection.project(i),p=this.scale(o);return this.transformation._transform(c,p)},pointToLatLng:function(i,o){var c=this.scale(o),p=this.transformation.untransform(i,c);return this.projection.unproject(p)},project:function(i){return this.projection.project(i)},unproject:function(i){return this.projection.unproject(i)},scale:function(i){return 256*Math.pow(2,i)},zoom:function(i){return Math.log(i/256)/Math.LN2},getProjectedBounds:function(i){if(this.infinite)return null;var o=this.projection.bounds,c=this.scale(i),p=this.transformation.transform(o.min,c),b=this.transformation.transform(o.max,c);return new ut(p,b)},infinite:!1,wrapLatLng:function(i){var o=this.wrapLng?u(i.lng,this.wrapLng,!0):i.lng,c=this.wrapLat?u(i.lat,this.wrapLat,!0):i.lat,p=i.alt;return new wt(c,o,p)},wrapLatLngBounds:function(i){var o=i.getCenter(),c=this.wrapLatLng(o),p=o.lat-c.lat,b=o.lng-c.lng;if(p===0&&b===0)return i;var R=i.getSouthWest(),z=i.getNorthEast(),Q=new wt(R.lat-p,R.lng-b),ot=new wt(z.lat-p,z.lng-b);return new ct(Q,ot)}},at=e({},Y,{wrapLng:[-180,180],R:6371e3,distance:function(i,o){var c=Math.PI/180,p=i.lat*c,b=o.lat*c,R=Math.sin((o.lat-i.lat)*c/2),z=Math.sin((o.lng-i.lng)*c/2),Q=R*R+Math.cos(p)*Math.cos(b)*z*z,ot=2*Math.atan2(Math.sqrt(Q),Math.sqrt(1-Q));return this.R*ot}}),W=6378137,yt={R:W,MAX_LATITUDE:85.0511287798,project:function(i){var o=Math.PI/180,c=this.MAX_LATITUDE,p=Math.max(Math.min(c,i.lat),-c),b=Math.sin(p*o);return new V(this.R*i.lng*o,this.R*Math.log((1+b)/(1-b))/2)},unproject:function(i){var o=180/Math.PI;return new wt((2*Math.atan(Math.exp(i.y/this.R))-Math.PI/2)*o,i.x*o/this.R)},bounds:(function(){var i=W*Math.PI;return new ut([-i,-i],[i,i])})()};function dt(i,o,c,p){if(v(i)){this._a=i[0],this._b=i[1],this._c=i[2],this._d=i[3];return}this._a=i,this._b=o,this._c=c,this._d=p}dt.prototype={transform:function(i,o){return this._transform(i.clone(),o)},_transform:function(i,o){return o=o||1,i.x=o*(this._a*i.x+this._b),i.y=o*(this._c*i.y+this._d),i},untransform:function(i,o){return o=o||1,new V((i.x/o-this._b)/this._a,(i.y/o-this._d)/this._c)}};function et(i,o,c,p){return new dt(i,o,c,p)}var Tt=e({},at,{code:"EPSG:3857",projection:yt,transformation:(function(){var i=.5/(Math.PI*yt.R);return et(i,.5,-i,.5)})()}),xt=e({},Tt,{code:"EPSG:900913"});function It(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function F(i,o){var c="",p,b,R,z,Q,ot;for(p=0,R=i.length;p<R;p++){for(Q=i[p],b=0,z=Q.length;b<z;b++)ot=Q[b],c+=(b?"L":"M")+ot.x+" "+ot.y;c+=o?zt.svg?"z":"x":""}return c||"M0 0"}var ae=document.documentElement.style,jt="ActiveXObject"in window,Ut=jt&&!document.addEventListener,Ft="msLaunchUri"in navigator&&!("documentMode"in document),we=En("webkit"),$t=En("android"),k=En("android 2")||En("android 3"),I=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),nt=$t&&En("Google")&&I<537&&!("AudioNode"in window),mt=!!window.opera,vt=!Ft&&En("chrome"),ft=En("gecko")&&!we&&!mt&&!jt,Xt=!vt&&En("safari"),Rt=En("phantom"),kt="OTransition"in ae,ge=navigator.platform.indexOf("Win")===0,bt=jt&&"transition"in ae,Bt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!k,Jt="MozPerspective"in ae,ee=!window.L_DISABLE_3D&&(bt||Bt||Jt)&&!kt&&!Rt,Ot=typeof orientation<"u"||En("mobile"),me=Ot&&we,re=Ot&&Bt,Re=!window.PointerEvent&&window.MSPointerEvent,X=!!(window.PointerEvent||Re),Pt="ontouchstart"in window||!!window.TouchEvent,ht=!window.L_NO_TOUCH&&(Pt||X),gt=Ot&&mt,Dt=Ot&&ft,Ct=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,se=(function(){var i=!1;try{var o=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("testPassiveEventSupport",f,o),window.removeEventListener("testPassiveEventSupport",f,o)}catch{}return i})(),ze=(function(){return!!document.createElement("canvas").getContext})(),Xe=!!(document.createElementNS&&It("svg").createSVGRect),Ae=!!Xe&&(function(){var i=document.createElement("div");return i.innerHTML="<svg/>",(i.firstChild&&i.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),Tn=!Xe&&(function(){try{var i=document.createElement("div");i.innerHTML='<v:shape adj="1"/>';var o=i.firstChild;return o.style.behavior="url(#default#VML)",o&&typeof o.adj=="object"}catch{return!1}})(),Yn=navigator.platform.indexOf("Mac")===0,yo=navigator.platform.indexOf("Linux")===0;function En(i){return navigator.userAgent.toLowerCase().indexOf(i)>=0}var zt={ie:jt,ielt9:Ut,edge:Ft,webkit:we,android:$t,android23:k,androidStock:nt,opera:mt,chrome:vt,gecko:ft,safari:Xt,phantom:Rt,opera12:kt,win:ge,ie3d:bt,webkit3d:Bt,gecko3d:Jt,any3d:ee,mobile:Ot,mobileWebkit:me,mobileWebkit3d:re,msPointer:Re,pointer:X,touch:ht,touchNative:Pt,mobileOpera:gt,mobileGecko:Dt,retina:Ct,passiveEvents:se,canvas:ze,svg:Xe,vml:Tn,inlineSvg:Ae,mac:Yn,linux:yo},ks=zt.msPointer?"MSPointerDown":"pointerdown",Ir=zt.msPointer?"MSPointerMove":"pointermove",Dr=zt.msPointer?"MSPointerUp":"pointerup",os=zt.msPointer?"MSPointerCancel":"pointercancel",Bs={touchstart:ks,touchmove:Ir,touchend:Dr,touchcancel:os},as={touchstart:K,touchmove:st,touchend:st,touchcancel:st},Si={},Nr=!1;function Ll(i,o,c){return o==="touchstart"&&rt(),as[o]?(c=as[o].bind(this,c),i.addEventListener(Bs[o],c,!1),c):(console.warn("wrong event specified:",o),f)}function Il(i,o,c){if(!Bs[o]){console.warn("wrong event specified:",o);return}i.removeEventListener(Bs[o],c,!1)}function Dl(i){Si[i.pointerId]=i}function N(i){Si[i.pointerId]&&(Si[i.pointerId]=i)}function $(i){delete Si[i.pointerId]}function rt(){Nr||(document.addEventListener(ks,Dl,!0),document.addEventListener(Ir,N,!0),document.addEventListener(Dr,$,!0),document.addEventListener(os,$,!0),Nr=!0)}function st(i,o){if(o.pointerType!==(o.MSPOINTER_TYPE_MOUSE||"mouse")){o.touches=[];for(var c in Si)o.touches.push(Si[c]);o.changedTouches=[o],i(o)}}function K(i,o){o.MSPOINTER_TYPE_TOUCH&&o.pointerType===o.MSPOINTER_TYPE_TOUCH&&rn(o),st(i,o)}function St(i){var o={},c,p;for(p in i)c=i[p],o[p]=c&&c.bind?c.bind(i):c;return i=o,o.type="dblclick",o.detail=2,o.isTrusted=!1,o._simulated=!0,o}var Lt=200;function Gt(i,o){i.addEventListener("dblclick",o);var c=0,p;function b(R){if(R.detail!==1){p=R.detail;return}if(!(R.pointerType==="mouse"||R.sourceCapabilities&&!R.sourceCapabilities.firesTouchEvents)){var z=Cu(R);if(!(z.some(function(ot){return ot instanceof HTMLLabelElement&&ot.attributes.for})&&!z.some(function(ot){return ot instanceof HTMLInputElement||ot instanceof HTMLSelectElement}))){var Q=Date.now();Q-c<=Lt?(p++,p===2&&o(St(R))):p=1,c=Q}}}return i.addEventListener("click",b),{dblclick:o,simDblclick:b}}function Wt(i,o){i.removeEventListener("dblclick",o.dblclick),i.removeEventListener("click",o.simDblclick)}var te=fi(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ne=fi(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Vt=ne==="webkitTransition"||ne==="OTransition"?ne+"End":"transitionend";function _e(i){return typeof i=="string"?document.getElementById(i):i}function Ee(i,o){var c=i.style[o]||i.currentStyle&&i.currentStyle[o];if((!c||c==="auto")&&document.defaultView){var p=document.defaultView.getComputedStyle(i,null);c=p?p[o]:null}return c==="auto"?null:c}function qt(i,o,c){var p=document.createElement(i);return p.className=o||"",c&&c.appendChild(p),p}function ue(i){var o=i.parentNode;o&&o.removeChild(i)}function ve(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function Ht(i){var o=i.parentNode;o&&o.lastChild!==i&&o.appendChild(i)}function hn(i){var o=i.parentNode;o&&o.firstChild!==i&&o.insertBefore(i,o.firstChild)}function be(i,o){if(i.classList!==void 0)return i.classList.contains(o);var c=di(i);return c.length>0&&new RegExp("(^|\\s)"+o+"(\\s|$)").test(c)}function Kt(i,o){if(i.classList!==void 0)for(var c=g(o),p=0,b=c.length;p<b;p++)i.classList.add(c[p]);else if(!be(i,o)){var R=di(i);sn(i,(R?R+" ":"")+o)}}function Ie(i,o){i.classList!==void 0?i.classList.remove(o):sn(i,d((" "+di(i)+" ").replace(" "+o+" "," ")))}function sn(i,o){i.className.baseVal===void 0?i.className=o:i.className.baseVal=o}function di(i){return i.correspondingElement&&(i=i.correspondingElement),i.className.baseVal===void 0?i.className:i.className.baseVal}function de(i,o){"opacity"in i.style?i.style.opacity=o:"filter"in i.style&&On(i,o)}function On(i,o){var c=!1,p="DXImageTransform.Microsoft.Alpha";try{c=i.filters.item(p)}catch{if(o===1)return}o=Math.round(o*100),c?(c.Enabled=o!==100,c.Opacity=o):i.style.filter+=" progid:"+p+"(opacity="+o+")"}function fi(i){for(var o=document.documentElement.style,c=0;c<i.length;c++)if(i[c]in o)return i[c];return!1}function qe(i,o,c){var p=o||new V(0,0);i.style[te]=(zt.ie3d?"translate("+p.x+"px,"+p.y+"px)":"translate3d("+p.x+"px,"+p.y+"px,0)")+(c?" scale("+c+")":"")}function Ce(i,o){i._leaflet_pos=o,zt.any3d?qe(i,o):(i.style.left=o.x+"px",i.style.top=o.y+"px")}function un(i){return i._leaflet_pos||new V(0,0)}var Wi,Or,Nl;if("onselectstart"in document)Wi=function(){oe(window,"selectstart",rn)},Or=function(){ke(window,"selectstart",rn)};else{var Ur=fi(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Wi=function(){if(Ur){var i=document.documentElement.style;Nl=i[Ur],i[Ur]="none"}},Or=function(){Ur&&(document.documentElement.style[Ur]=Nl,Nl=void 0)}}function Ol(){oe(window,"dragstart",rn)}function Ul(){ke(window,"dragstart",rn)}var bo,kl;function Bl(i){for(;i.tabIndex===-1;)i=i.parentNode;i.style&&(Mo(),bo=i,kl=i.style.outlineStyle,i.style.outlineStyle="none",oe(window,"keydown",Mo))}function Mo(){bo&&(bo.style.outlineStyle=kl,bo=void 0,kl=void 0,ke(window,"keydown",Mo))}function Pu(i){do i=i.parentNode;while((!i.offsetWidth||!i.offsetHeight)&&i!==document.body);return i}function Fl(i){var o=i.getBoundingClientRect();return{x:o.width/i.offsetWidth||1,y:o.height/i.offsetHeight||1,boundingClientRect:o}}var Kp={__proto__:null,TRANSFORM:te,TRANSITION:ne,TRANSITION_END:Vt,get:_e,getStyle:Ee,create:qt,remove:ue,empty:ve,toFront:Ht,toBack:hn,hasClass:be,addClass:Kt,removeClass:Ie,setClass:sn,getClass:di,setOpacity:de,testProp:fi,setTransform:qe,setPosition:Ce,getPosition:un,get disableTextSelection(){return Wi},get enableTextSelection(){return Or},disableImageDrag:Ol,enableImageDrag:Ul,preventOutline:Bl,restoreOutline:Mo,getSizedParentNode:Pu,getScale:Fl};function oe(i,o,c,p){if(o&&typeof o=="object")for(var b in o)Hl(i,b,o[b],c);else{o=g(o);for(var R=0,z=o.length;R<z;R++)Hl(i,o[R],c,p)}return this}var pi="_leaflet_events";function ke(i,o,c,p){if(arguments.length===1)Ru(i),delete i[pi];else if(o&&typeof o=="object")for(var b in o)Vl(i,b,o[b],c);else if(o=g(o),arguments.length===2)Ru(i,function(Q){return P(o,Q)!==-1});else for(var R=0,z=o.length;R<z;R++)Vl(i,o[R],c,p);return this}function Ru(i,o){for(var c in i[pi]){var p=c.split(/\d/)[0];(!o||o(p))&&Vl(i,p,null,null,c)}}var zl={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Hl(i,o,c,p){var b=o+l(c)+(p?"_"+l(p):"");if(i[pi]&&i[pi][b])return this;var R=function(Q){return c.call(p||i,Q||window.event)},z=R;!zt.touchNative&&zt.pointer&&o.indexOf("touch")===0?R=Ll(i,o,R):zt.touch&&o==="dblclick"?R=Gt(i,R):"addEventListener"in i?o==="touchstart"||o==="touchmove"||o==="wheel"||o==="mousewheel"?i.addEventListener(zl[o]||o,R,zt.passiveEvents?{passive:!1}:!1):o==="mouseenter"||o==="mouseleave"?(R=function(Q){Q=Q||window.event,Wl(i,Q)&&z(Q)},i.addEventListener(zl[o],R,!1)):i.addEventListener(o,z,!1):i.attachEvent("on"+o,R),i[pi]=i[pi]||{},i[pi][b]=R}function Vl(i,o,c,p,b){b=b||o+l(c)+(p?"_"+l(p):"");var R=i[pi]&&i[pi][b];if(!R)return this;!zt.touchNative&&zt.pointer&&o.indexOf("touch")===0?Il(i,o,R):zt.touch&&o==="dblclick"?Wt(i,R):"removeEventListener"in i?i.removeEventListener(zl[o]||o,R,!1):i.detachEvent("on"+o,R),i[pi][b]=null}function ls(i){return i.stopPropagation?i.stopPropagation():i.originalEvent?i.originalEvent._stopped=!0:i.cancelBubble=!0,this}function Gl(i){return Hl(i,"wheel",ls),this}function kr(i){return oe(i,"mousedown touchstart dblclick contextmenu",ls),i._leaflet_disable_click=!0,this}function rn(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,this}function cs(i){return rn(i),ls(i),this}function Cu(i){if(i.composedPath)return i.composedPath();for(var o=[],c=i.target;c;)o.push(c),c=c.parentNode;return o}function Lu(i,o){if(!o)return new V(i.clientX,i.clientY);var c=Fl(o),p=c.boundingClientRect;return new V((i.clientX-p.left)/c.x-o.clientLeft,(i.clientY-p.top)/c.y-o.clientTop)}var Jp=zt.linux&&zt.chrome?window.devicePixelRatio:zt.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Iu(i){return zt.edge?i.wheelDeltaY/2:i.deltaY&&i.deltaMode===0?-i.deltaY/Jp:i.deltaY&&i.deltaMode===1?-i.deltaY*20:i.deltaY&&i.deltaMode===2?-i.deltaY*60:i.deltaX||i.deltaZ?0:i.wheelDelta?(i.wheelDeltaY||i.wheelDelta)/2:i.detail&&Math.abs(i.detail)<32765?-i.detail*20:i.detail?i.detail/-32765*60:0}function Wl(i,o){var c=o.relatedTarget;if(!c)return!0;try{for(;c&&c!==i;)c=c.parentNode}catch{return!1}return c!==i}var jp={__proto__:null,on:oe,off:ke,stopPropagation:ls,disableScrollPropagation:Gl,disableClickPropagation:kr,preventDefault:rn,stop:cs,getPropagationPath:Cu,getMousePosition:Lu,getWheelDelta:Iu,isExternalTarget:Wl,addListener:oe,removeListener:ke},Du=it.extend({run:function(i,o,c,p){this.stop(),this._el=i,this._inProgress=!0,this._duration=c||.25,this._easeOutPower=1/Math.max(p||.5,.2),this._startPos=un(i),this._offset=o.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=A(this._animate,this),this._step()},_step:function(i){var o=+new Date-this._startTime,c=this._duration*1e3;o<c?this._runFrame(this._easeOut(o/c),i):(this._runFrame(1),this._complete())},_runFrame:function(i,o){var c=this._startPos.add(this._offset.multiplyBy(i));o&&c._round(),Ce(this._el,c),this.fire("step")},_complete:function(){E(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(i){return 1-Math.pow(1-i,this._easeOutPower)}}),Me=it.extend({options:{crs:Tt,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(i,o){o=_(this,o),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(i),this._initLayout(),this._onResize=r(this._onResize,this),this._initEvents(),o.maxBounds&&this.setMaxBounds(o.maxBounds),o.zoom!==void 0&&(this._zoom=this._limitZoom(o.zoom)),o.center&&o.zoom!==void 0&&this.setView(J(o.center),o.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ne&&zt.any3d&&!zt.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),oe(this._proxy,Vt,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(i,o,c){if(o=o===void 0?this._zoom:this._limitZoom(o),i=this._limitCenter(J(i),o,this.options.maxBounds),c=c||{},this._stop(),this._loaded&&!c.reset&&c!==!0){c.animate!==void 0&&(c.zoom=e({animate:c.animate},c.zoom),c.pan=e({animate:c.animate,duration:c.duration},c.pan));var p=this._zoom!==o?this._tryAnimatedZoom&&this._tryAnimatedZoom(i,o,c.zoom):this._tryAnimatedPan(i,c.pan);if(p)return clearTimeout(this._sizeTimer),this}return this._resetView(i,o,c.pan&&c.pan.noMoveStart),this},setZoom:function(i,o){return this._loaded?this.setView(this.getCenter(),i,{zoom:o}):(this._zoom=i,this)},zoomIn:function(i,o){return i=i||(zt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+i,o)},zoomOut:function(i,o){return i=i||(zt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-i,o)},setZoomAround:function(i,o,c){var p=this.getZoomScale(o),b=this.getSize().divideBy(2),R=i instanceof V?i:this.latLngToContainerPoint(i),z=R.subtract(b).multiplyBy(1-1/p),Q=this.containerPointToLatLng(b.add(z));return this.setView(Q,o,{zoom:c})},_getBoundsCenterZoom:function(i,o){o=o||{},i=i.getBounds?i.getBounds():Mt(i);var c=G(o.paddingTopLeft||o.padding||[0,0]),p=G(o.paddingBottomRight||o.padding||[0,0]),b=this.getBoundsZoom(i,!1,c.add(p));if(b=typeof o.maxZoom=="number"?Math.min(o.maxZoom,b):b,b===1/0)return{center:i.getCenter(),zoom:b};var R=p.subtract(c).divideBy(2),z=this.project(i.getSouthWest(),b),Q=this.project(i.getNorthEast(),b),ot=this.unproject(z.add(Q).divideBy(2).add(R),b);return{center:ot,zoom:b}},fitBounds:function(i,o){if(i=Mt(i),!i.isValid())throw new Error("Bounds are not valid.");var c=this._getBoundsCenterZoom(i,o);return this.setView(c.center,c.zoom,o)},fitWorld:function(i){return this.fitBounds([[-90,-180],[90,180]],i)},panTo:function(i,o){return this.setView(i,this._zoom,{pan:o})},panBy:function(i,o){if(i=G(i).round(),o=o||{},!i.x&&!i.y)return this.fire("moveend");if(o.animate!==!0&&!this.getSize().contains(i))return this._resetView(this.unproject(this.project(this.getCenter()).add(i)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Du,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),o.noMoveStart||this.fire("movestart"),o.animate!==!1){Kt(this._mapPane,"leaflet-pan-anim");var c=this._getMapPanePos().subtract(i).round();this._panAnim.run(this._mapPane,c,o.duration||.25,o.easeLinearity)}else this._rawPanBy(i),this.fire("move").fire("moveend");return this},flyTo:function(i,o,c){if(c=c||{},c.animate===!1||!zt.any3d)return this.setView(i,o,c);this._stop();var p=this.project(this.getCenter()),b=this.project(i),R=this.getSize(),z=this._zoom;i=J(i),o=o===void 0?z:o;var Q=Math.max(R.x,R.y),ot=Q*this.getZoomScale(z,o),_t=b.distanceTo(p)||1,Nt=1.42,Qt=Nt*Nt;function fe(Ye){var No=Ye?-1:1,zm=Ye?ot:Q,Hm=ot*ot-Q*Q+No*Qt*Qt*_t*_t,Vm=2*zm*Qt*_t,ec=Hm/Vm,fd=Math.sqrt(ec*ec+1)-ec,Gm=fd<1e-9?-18:Math.log(fd);return Gm}function _n(Ye){return(Math.exp(Ye)-Math.exp(-Ye))/2}function Qe(Ye){return(Math.exp(Ye)+Math.exp(-Ye))/2}function kn(Ye){return _n(Ye)/Qe(Ye)}var Mn=fe(0);function Ws(Ye){return Q*(Qe(Mn)/Qe(Mn+Nt*Ye))}function Um(Ye){return Q*(Qe(Mn)*kn(Mn+Nt*Ye)-_n(Mn))/Qt}function km(Ye){return 1-Math.pow(1-Ye,1.5)}var Bm=Date.now(),ud=(fe(1)-Mn)/Nt,Fm=c.duration?1e3*c.duration:1e3*ud*.8;function dd(){var Ye=(Date.now()-Bm)/Fm,No=km(Ye)*ud;Ye<=1?(this._flyToFrame=A(dd,this),this._move(this.unproject(p.add(b.subtract(p).multiplyBy(Um(No)/_t)),z),this.getScaleZoom(Q/Ws(No),z),{flyTo:!0})):this._move(i,o)._moveEnd(!0)}return this._moveStart(!0,c.noMoveStart),dd.call(this),this},flyToBounds:function(i,o){var c=this._getBoundsCenterZoom(i,o);return this.flyTo(c.center,c.zoom,o)},setMaxBounds:function(i){return i=Mt(i),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),i.isValid()?(this.options.maxBounds=i,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(i){var o=this.options.minZoom;return this.options.minZoom=i,this._loaded&&o!==i&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(i):this},setMaxZoom:function(i){var o=this.options.maxZoom;return this.options.maxZoom=i,this._loaded&&o!==i&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(i):this},panInsideBounds:function(i,o){this._enforcingBounds=!0;var c=this.getCenter(),p=this._limitCenter(c,this._zoom,Mt(i));return c.equals(p)||this.panTo(p,o),this._enforcingBounds=!1,this},panInside:function(i,o){o=o||{};var c=G(o.paddingTopLeft||o.padding||[0,0]),p=G(o.paddingBottomRight||o.padding||[0,0]),b=this.project(this.getCenter()),R=this.project(i),z=this.getPixelBounds(),Q=lt([z.min.add(c),z.max.subtract(p)]),ot=Q.getSize();if(!Q.contains(R)){this._enforcingBounds=!0;var _t=R.subtract(Q.getCenter()),Nt=Q.extend(R).getSize().subtract(ot);b.x+=_t.x<0?-Nt.x:Nt.x,b.y+=_t.y<0?-Nt.y:Nt.y,this.panTo(this.unproject(b),o),this._enforcingBounds=!1}return this},invalidateSize:function(i){if(!this._loaded)return this;i=e({animate:!1,pan:!0},i===!0?{animate:!0}:i);var o=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var c=this.getSize(),p=o.divideBy(2).round(),b=c.divideBy(2).round(),R=p.subtract(b);return!R.x&&!R.y?this:(i.animate&&i.pan?this.panBy(R):(i.pan&&this._rawPanBy(R),this.fire("move"),i.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(r(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:o,newSize:c}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(i){if(i=this._locateOptions=e({timeout:1e4,watch:!1},i),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var o=r(this._handleGeolocationResponse,this),c=r(this._handleGeolocationError,this);return i.watch?this._locationWatchId=navigator.geolocation.watchPosition(o,c,i):navigator.geolocation.getCurrentPosition(o,c,i),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(i){if(this._container._leaflet_id){var o=i.code,c=i.message||(o===1?"permission denied":o===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:o,message:"Geolocation error: "+c+"."})}},_handleGeolocationResponse:function(i){if(this._container._leaflet_id){var o=i.coords.latitude,c=i.coords.longitude,p=new wt(o,c),b=p.toBounds(i.coords.accuracy*2),R=this._locateOptions;if(R.setView){var z=this.getBoundsZoom(b);this.setView(p,R.maxZoom?Math.min(z,R.maxZoom):z)}var Q={latlng:p,bounds:b,timestamp:i.timestamp};for(var ot in i.coords)typeof i.coords[ot]=="number"&&(Q[ot]=i.coords[ot]);this.fire("locationfound",Q)}},addHandler:function(i,o){if(!o)return this;var c=this[i]=new o(this);return this._handlers.push(c),this.options[i]&&c.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),ue(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(E(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var i;for(i in this._layers)this._layers[i].remove();for(i in this._panes)ue(this._panes[i]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(i,o){var c="leaflet-pane"+(i?" leaflet-"+i.replace("Pane","")+"-pane":""),p=qt("div",c,o||this._mapPane);return i&&(this._panes[i]=p),p},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var i=this.getPixelBounds(),o=this.unproject(i.getBottomLeft()),c=this.unproject(i.getTopRight());return new ct(o,c)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(i,o,c){i=Mt(i),c=G(c||[0,0]);var p=this.getZoom()||0,b=this.getMinZoom(),R=this.getMaxZoom(),z=i.getNorthWest(),Q=i.getSouthEast(),ot=this.getSize().subtract(c),_t=lt(this.project(Q,p),this.project(z,p)).getSize(),Nt=zt.any3d?this.options.zoomSnap:1,Qt=ot.x/_t.x,fe=ot.y/_t.y,_n=o?Math.max(Qt,fe):Math.min(Qt,fe);return p=this.getScaleZoom(_n,p),Nt&&(p=Math.round(p/(Nt/100))*(Nt/100),p=o?Math.ceil(p/Nt)*Nt:Math.floor(p/Nt)*Nt),Math.max(b,Math.min(R,p))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new V(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(i,o){var c=this._getTopLeftPoint(i,o);return new ut(c,c.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(i){return this.options.crs.getProjectedBounds(i===void 0?this.getZoom():i)},getPane:function(i){return typeof i=="string"?this._panes[i]:i},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(i,o){var c=this.options.crs;return o=o===void 0?this._zoom:o,c.scale(i)/c.scale(o)},getScaleZoom:function(i,o){var c=this.options.crs;o=o===void 0?this._zoom:o;var p=c.zoom(i*c.scale(o));return isNaN(p)?1/0:p},project:function(i,o){return o=o===void 0?this._zoom:o,this.options.crs.latLngToPoint(J(i),o)},unproject:function(i,o){return o=o===void 0?this._zoom:o,this.options.crs.pointToLatLng(G(i),o)},layerPointToLatLng:function(i){var o=G(i).add(this.getPixelOrigin());return this.unproject(o)},latLngToLayerPoint:function(i){var o=this.project(J(i))._round();return o._subtract(this.getPixelOrigin())},wrapLatLng:function(i){return this.options.crs.wrapLatLng(J(i))},wrapLatLngBounds:function(i){return this.options.crs.wrapLatLngBounds(Mt(i))},distance:function(i,o){return this.options.crs.distance(J(i),J(o))},containerPointToLayerPoint:function(i){return G(i).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(i){return G(i).add(this._getMapPanePos())},containerPointToLatLng:function(i){var o=this.containerPointToLayerPoint(G(i));return this.layerPointToLatLng(o)},latLngToContainerPoint:function(i){return this.layerPointToContainerPoint(this.latLngToLayerPoint(J(i)))},mouseEventToContainerPoint:function(i){return Lu(i,this._container)},mouseEventToLayerPoint:function(i){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i))},mouseEventToLatLng:function(i){return this.layerPointToLatLng(this.mouseEventToLayerPoint(i))},_initContainer:function(i){var o=this._container=_e(i);if(o){if(o._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");oe(o,"scroll",this._onScroll,this),this._containerId=l(o)},_initLayout:function(){var i=this._container;this._fadeAnimated=this.options.fadeAnimation&&zt.any3d,Kt(i,"leaflet-container"+(zt.touch?" leaflet-touch":"")+(zt.retina?" leaflet-retina":"")+(zt.ielt9?" leaflet-oldie":"")+(zt.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var o=Ee(i,"position");o!=="absolute"&&o!=="relative"&&o!=="fixed"&&o!=="sticky"&&(i.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var i=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Ce(this._mapPane,new V(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Kt(i.markerPane,"leaflet-zoom-hide"),Kt(i.shadowPane,"leaflet-zoom-hide"))},_resetView:function(i,o,c){Ce(this._mapPane,new V(0,0));var p=!this._loaded;this._loaded=!0,o=this._limitZoom(o),this.fire("viewprereset");var b=this._zoom!==o;this._moveStart(b,c)._move(i,o)._moveEnd(b),this.fire("viewreset"),p&&this.fire("load")},_moveStart:function(i,o){return i&&this.fire("zoomstart"),o||this.fire("movestart"),this},_move:function(i,o,c,p){o===void 0&&(o=this._zoom);var b=this._zoom!==o;return this._zoom=o,this._lastCenter=i,this._pixelOrigin=this._getNewPixelOrigin(i),p?c&&c.pinch&&this.fire("zoom",c):((b||c&&c.pinch)&&this.fire("zoom",c),this.fire("move",c)),this},_moveEnd:function(i){return i&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return E(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(i){Ce(this._mapPane,this._getMapPanePos().subtract(i))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(i){this._targets={},this._targets[l(this._container)]=this;var o=i?ke:oe;o(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&o(window,"resize",this._onResize,this),zt.any3d&&this.options.transform3DLimit&&(i?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){E(this._resizeRequest),this._resizeRequest=A(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var i=this._getMapPanePos();Math.max(Math.abs(i.x),Math.abs(i.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(i,o){for(var c=[],p,b=o==="mouseout"||o==="mouseover",R=i.target||i.srcElement,z=!1;R;){if(p=this._targets[l(R)],p&&(o==="click"||o==="preclick")&&this._draggableMoved(p)){z=!0;break}if(p&&p.listens(o,!0)&&(b&&!Wl(R,i)||(c.push(p),b))||R===this._container)break;R=R.parentNode}return!c.length&&!z&&!b&&this.listens(o,!0)&&(c=[this]),c},_isClickDisabled:function(i){for(;i&&i!==this._container;){if(i._leaflet_disable_click)return!0;i=i.parentNode}},_handleDOMEvent:function(i){var o=i.target||i.srcElement;if(!(!this._loaded||o._leaflet_disable_events||i.type==="click"&&this._isClickDisabled(o))){var c=i.type;c==="mousedown"&&Bl(o),this._fireDOMEvent(i,c)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(i,o,c){if(i.type==="click"){var p=e({},i);p.type="preclick",this._fireDOMEvent(p,p.type,c)}var b=this._findEventTargets(i,o);if(c){for(var R=[],z=0;z<c.length;z++)c[z].listens(o,!0)&&R.push(c[z]);b=R.concat(b)}if(b.length){o==="contextmenu"&&rn(i);var Q=b[0],ot={originalEvent:i};if(i.type!=="keypress"&&i.type!=="keydown"&&i.type!=="keyup"){var _t=Q.getLatLng&&(!Q._radius||Q._radius<=10);ot.containerPoint=_t?this.latLngToContainerPoint(Q.getLatLng()):this.mouseEventToContainerPoint(i),ot.layerPoint=this.containerPointToLayerPoint(ot.containerPoint),ot.latlng=_t?Q.getLatLng():this.layerPointToLatLng(ot.layerPoint)}for(z=0;z<b.length;z++)if(b[z].fire(o,ot,!0),ot.originalEvent._stopped||b[z].options.bubblingMouseEvents===!1&&P(this._mouseEvents,o)!==-1)return}},_draggableMoved:function(i){return i=i.dragging&&i.dragging.enabled()?i:this,i.dragging&&i.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var i=0,o=this._handlers.length;i<o;i++)this._handlers[i].disable()},whenReady:function(i,o){return this._loaded?i.call(o||this,{target:this}):this.on("load",i,o),this},_getMapPanePos:function(){return un(this._mapPane)||new V(0,0)},_moved:function(){var i=this._getMapPanePos();return i&&!i.equals([0,0])},_getTopLeftPoint:function(i,o){var c=i&&o!==void 0?this._getNewPixelOrigin(i,o):this.getPixelOrigin();return c.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(i,o){var c=this.getSize()._divideBy(2);return this.project(i,o)._subtract(c)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(i,o,c){var p=this._getNewPixelOrigin(c,o);return this.project(i,o)._subtract(p)},_latLngBoundsToNewLayerBounds:function(i,o,c){var p=this._getNewPixelOrigin(c,o);return lt([this.project(i.getSouthWest(),o)._subtract(p),this.project(i.getNorthWest(),o)._subtract(p),this.project(i.getSouthEast(),o)._subtract(p),this.project(i.getNorthEast(),o)._subtract(p)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(i){return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint())},_limitCenter:function(i,o,c){if(!c)return i;var p=this.project(i,o),b=this.getSize().divideBy(2),R=new ut(p.subtract(b),p.add(b)),z=this._getBoundsOffset(R,c,o);return Math.abs(z.x)<=1&&Math.abs(z.y)<=1?i:this.unproject(p.add(z),o)},_limitOffset:function(i,o){if(!o)return i;var c=this.getPixelBounds(),p=new ut(c.min.add(i),c.max.add(i));return i.add(this._getBoundsOffset(p,o))},_getBoundsOffset:function(i,o,c){var p=lt(this.project(o.getNorthEast(),c),this.project(o.getSouthWest(),c)),b=p.min.subtract(i.min),R=p.max.subtract(i.max),z=this._rebound(b.x,-R.x),Q=this._rebound(b.y,-R.y);return new V(z,Q)},_rebound:function(i,o){return i+o>0?Math.round(i-o)/2:Math.max(0,Math.ceil(i))-Math.max(0,Math.floor(o))},_limitZoom:function(i){var o=this.getMinZoom(),c=this.getMaxZoom(),p=zt.any3d?this.options.zoomSnap:1;return p&&(i=Math.round(i/p)*p),Math.max(o,Math.min(c,i))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Ie(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(i,o){var c=this._getCenterOffset(i)._trunc();return(o&&o.animate)!==!0&&!this.getSize().contains(c)?!1:(this.panBy(c,o),!0)},_createAnimProxy:function(){var i=this._proxy=qt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(i),this.on("zoomanim",function(o){var c=te,p=this._proxy.style[c];qe(this._proxy,this.project(o.center,o.zoom),this.getZoomScale(o.zoom,1)),p===this._proxy.style[c]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){ue(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var i=this.getCenter(),o=this.getZoom();qe(this._proxy,this.project(i,o),this.getZoomScale(o,1))},_catchTransitionEnd:function(i){this._animatingZoom&&i.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(i,o,c){if(this._animatingZoom)return!0;if(c=c||{},!this._zoomAnimated||c.animate===!1||this._nothingToAnimate()||Math.abs(o-this._zoom)>this.options.zoomAnimationThreshold)return!1;var p=this.getZoomScale(o),b=this._getCenterOffset(i)._divideBy(1-1/p);return c.animate!==!0&&!this.getSize().contains(b)?!1:(A(function(){this._moveStart(!0,c.noMoveStart||!1)._animateZoom(i,o,!0)},this),!0)},_animateZoom:function(i,o,c,p){this._mapPane&&(c&&(this._animatingZoom=!0,this._animateToCenter=i,this._animateToZoom=o,Kt(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:i,zoom:o,noUpdate:p}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(r(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Ie(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Qp(i,o){return new Me(i,o)}var $n=q.extend({options:{position:"topright"},initialize:function(i){_(this,i)},getPosition:function(){return this.options.position},setPosition:function(i){var o=this._map;return o&&o.removeControl(this),this.options.position=i,o&&o.addControl(this),this},getContainer:function(){return this._container},addTo:function(i){this.remove(),this._map=i;var o=this._container=this.onAdd(i),c=this.getPosition(),p=i._controlCorners[c];return Kt(o,"leaflet-control"),c.indexOf("bottom")!==-1?p.insertBefore(o,p.firstChild):p.appendChild(o),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(ue(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(i){this._map&&i&&i.screenX>0&&i.screenY>0&&this._map.getContainer().focus()}}),Br=function(i){return new $n(i)};Me.include({addControl:function(i){return i.addTo(this),this},removeControl:function(i){return i.remove(),this},_initControlPos:function(){var i=this._controlCorners={},o="leaflet-",c=this._controlContainer=qt("div",o+"control-container",this._container);function p(b,R){var z=o+b+" "+o+R;i[b+R]=qt("div",z,c)}p("top","left"),p("top","right"),p("bottom","left"),p("bottom","right")},_clearControlPos:function(){for(var i in this._controlCorners)ue(this._controlCorners[i]);ue(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Nu=$n.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(i,o,c,p){return c<p?-1:p<c?1:0}},initialize:function(i,o,c){_(this,c),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var p in i)this._addLayer(i[p],p);for(p in o)this._addLayer(o[p],p,!0)},onAdd:function(i){this._initLayout(),this._update(),this._map=i,i.on("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(i){return $n.prototype.addTo.call(this,i),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(i,o){return this._addLayer(i,o),this._map?this._update():this},addOverlay:function(i,o){return this._addLayer(i,o,!0),this._map?this._update():this},removeLayer:function(i){i.off("add remove",this._onLayerChange,this);var o=this._getLayer(l(i));return o&&this._layers.splice(this._layers.indexOf(o),1),this._map?this._update():this},expand:function(){Kt(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var i=this._map.getSize().y-(this._container.offsetTop+50);return i<this._section.clientHeight?(Kt(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=i+"px"):Ie(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Ie(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var i="leaflet-control-layers",o=this._container=qt("div",i),c=this.options.collapsed;o.setAttribute("aria-haspopup",!0),kr(o),Gl(o);var p=this._section=qt("section",i+"-list");c&&(this._map.on("click",this.collapse,this),oe(o,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var b=this._layersLink=qt("a",i+"-toggle",o);b.href="#",b.title="Layers",b.setAttribute("role","button"),oe(b,{keydown:function(R){R.keyCode===13&&this._expandSafely()},click:function(R){rn(R),this._expandSafely()}},this),c||this.expand(),this._baseLayersList=qt("div",i+"-base",p),this._separator=qt("div",i+"-separator",p),this._overlaysList=qt("div",i+"-overlays",p),o.appendChild(p)},_getLayer:function(i){for(var o=0;o<this._layers.length;o++)if(this._layers[o]&&l(this._layers[o].layer)===i)return this._layers[o]},_addLayer:function(i,o,c){this._map&&i.on("add remove",this._onLayerChange,this),this._layers.push({layer:i,name:o,overlay:c}),this.options.sortLayers&&this._layers.sort(r(function(p,b){return this.options.sortFunction(p.layer,b.layer,p.name,b.name)},this)),this.options.autoZIndex&&i.setZIndex&&(this._lastZIndex++,i.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;ve(this._baseLayersList),ve(this._overlaysList),this._layerControlInputs=[];var i,o,c,p,b=0;for(c=0;c<this._layers.length;c++)p=this._layers[c],this._addItem(p),o=o||p.overlay,i=i||!p.overlay,b+=p.overlay?0:1;return this.options.hideSingleBase&&(i=i&&b>1,this._baseLayersList.style.display=i?"":"none"),this._separator.style.display=o&&i?"":"none",this},_onLayerChange:function(i){this._handlingClick||this._update();var o=this._getLayer(l(i.target)),c=o.overlay?i.type==="add"?"overlayadd":"overlayremove":i.type==="add"?"baselayerchange":null;c&&this._map.fire(c,o)},_createRadioElement:function(i,o){var c='<input type="radio" class="leaflet-control-layers-selector" name="'+i+'"'+(o?' checked="checked"':"")+"/>",p=document.createElement("div");return p.innerHTML=c,p.firstChild},_addItem:function(i){var o=document.createElement("label"),c=this._map.hasLayer(i.layer),p;i.overlay?(p=document.createElement("input"),p.type="checkbox",p.className="leaflet-control-layers-selector",p.defaultChecked=c):p=this._createRadioElement("leaflet-base-layers_"+l(this),c),this._layerControlInputs.push(p),p.layerId=l(i.layer),oe(p,"click",this._onInputClick,this);var b=document.createElement("span");b.innerHTML=" "+i.name;var R=document.createElement("span");o.appendChild(R),R.appendChild(p),R.appendChild(b);var z=i.overlay?this._overlaysList:this._baseLayersList;return z.appendChild(o),this._checkDisabledLayers(),o},_onInputClick:function(){if(!this._preventClick){var i=this._layerControlInputs,o,c,p=[],b=[];this._handlingClick=!0;for(var R=i.length-1;R>=0;R--)o=i[R],c=this._getLayer(o.layerId).layer,o.checked?p.push(c):o.checked||b.push(c);for(R=0;R<b.length;R++)this._map.hasLayer(b[R])&&this._map.removeLayer(b[R]);for(R=0;R<p.length;R++)this._map.hasLayer(p[R])||this._map.addLayer(p[R]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var i=this._layerControlInputs,o,c,p=this._map.getZoom(),b=i.length-1;b>=0;b--)o=i[b],c=this._getLayer(o.layerId).layer,o.disabled=c.options.minZoom!==void 0&&p<c.options.minZoom||c.options.maxZoom!==void 0&&p>c.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var i=this._section;this._preventClick=!0,oe(i,"click",rn),this.expand();var o=this;setTimeout(function(){ke(i,"click",rn),o._preventClick=!1})}}),tm=function(i,o,c){return new Nu(i,o,c)},Zl=$n.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(i){var o="leaflet-control-zoom",c=qt("div",o+" leaflet-bar"),p=this.options;return this._zoomInButton=this._createButton(p.zoomInText,p.zoomInTitle,o+"-in",c,this._zoomIn),this._zoomOutButton=this._createButton(p.zoomOutText,p.zoomOutTitle,o+"-out",c,this._zoomOut),this._updateDisabled(),i.on("zoomend zoomlevelschange",this._updateDisabled,this),c},onRemove:function(i){i.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(i){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(i.shiftKey?3:1))},_zoomOut:function(i){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(i.shiftKey?3:1))},_createButton:function(i,o,c,p,b){var R=qt("a",c,p);return R.innerHTML=i,R.href="#",R.title=o,R.setAttribute("role","button"),R.setAttribute("aria-label",o),kr(R),oe(R,"click",cs),oe(R,"click",b,this),oe(R,"click",this._refocusOnMap,this),R},_updateDisabled:function(){var i=this._map,o="leaflet-disabled";Ie(this._zoomInButton,o),Ie(this._zoomOutButton,o),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||i._zoom===i.getMinZoom())&&(Kt(this._zoomOutButton,o),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||i._zoom===i.getMaxZoom())&&(Kt(this._zoomInButton,o),this._zoomInButton.setAttribute("aria-disabled","true"))}});Me.mergeOptions({zoomControl:!0}),Me.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Zl,this.addControl(this.zoomControl))});var em=function(i){return new Zl(i)},Ou=$n.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(i){var o="leaflet-control-scale",c=qt("div",o),p=this.options;return this._addScales(p,o+"-line",c),i.on(p.updateWhenIdle?"moveend":"move",this._update,this),i.whenReady(this._update,this),c},onRemove:function(i){i.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(i,o,c){i.metric&&(this._mScale=qt("div",o,c)),i.imperial&&(this._iScale=qt("div",o,c))},_update:function(){var i=this._map,o=i.getSize().y/2,c=i.distance(i.containerPointToLatLng([0,o]),i.containerPointToLatLng([this.options.maxWidth,o]));this._updateScales(c)},_updateScales:function(i){this.options.metric&&i&&this._updateMetric(i),this.options.imperial&&i&&this._updateImperial(i)},_updateMetric:function(i){var o=this._getRoundNum(i),c=o<1e3?o+" m":o/1e3+" km";this._updateScale(this._mScale,c,o/i)},_updateImperial:function(i){var o=i*3.2808399,c,p,b;o>5280?(c=o/5280,p=this._getRoundNum(c),this._updateScale(this._iScale,p+" mi",p/c)):(b=this._getRoundNum(o),this._updateScale(this._iScale,b+" ft",b/o))},_updateScale:function(i,o,c){i.style.width=Math.round(this.options.maxWidth*c)+"px",i.innerHTML=o},_getRoundNum:function(i){var o=Math.pow(10,(Math.floor(i)+"").length-1),c=i/o;return c=c>=10?10:c>=5?5:c>=3?3:c>=2?2:1,o*c}}),nm=function(i){return new Ou(i)},im='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Xl=$n.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(zt.inlineSvg?im+" ":"")+"Leaflet</a>"},initialize:function(i){_(this,i),this._attributions={}},onAdd:function(i){i.attributionControl=this,this._container=qt("div","leaflet-control-attribution"),kr(this._container);for(var o in i._layers)i._layers[o].getAttribution&&this.addAttribution(i._layers[o].getAttribution());return this._update(),i.on("layeradd",this._addAttribution,this),this._container},onRemove:function(i){i.off("layeradd",this._addAttribution,this)},_addAttribution:function(i){i.layer.getAttribution&&(this.addAttribution(i.layer.getAttribution()),i.layer.once("remove",function(){this.removeAttribution(i.layer.getAttribution())},this))},setPrefix:function(i){return this.options.prefix=i,this._update(),this},addAttribution:function(i){return i?(this._attributions[i]||(this._attributions[i]=0),this._attributions[i]++,this._update(),this):this},removeAttribution:function(i){return i?(this._attributions[i]&&(this._attributions[i]--,this._update()),this):this},_update:function(){if(this._map){var i=[];for(var o in this._attributions)this._attributions[o]&&i.push(o);var c=[];this.options.prefix&&c.push(this.options.prefix),i.length&&c.push(i.join(", ")),this._container.innerHTML=c.join(' <span aria-hidden="true">|</span> ')}}});Me.mergeOptions({attributionControl:!0}),Me.addInitHook(function(){this.options.attributionControl&&new Xl().addTo(this)});var sm=function(i){return new Xl(i)};$n.Layers=Nu,$n.Zoom=Zl,$n.Scale=Ou,$n.Attribution=Xl,Br.layers=tm,Br.zoom=em,Br.scale=nm,Br.attribution=sm;var mi=q.extend({initialize:function(i){this._map=i},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});mi.addTo=function(i,o){return i.addHandler(o,this),this};var rm={Events:j},Uu=zt.touch?"touchstart mousedown":"mousedown",Zi=it.extend({options:{clickTolerance:3},initialize:function(i,o,c,p){_(this,p),this._element=i,this._dragStartTarget=o||i,this._preventOutline=c},enable:function(){this._enabled||(oe(this._dragStartTarget,Uu,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Zi._dragging===this&&this.finishDrag(!0),ke(this._dragStartTarget,Uu,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(i){if(this._enabled&&(this._moved=!1,!be(this._element,"leaflet-zoom-anim"))){if(i.touches&&i.touches.length!==1){Zi._dragging===this&&this.finishDrag();return}if(!(Zi._dragging||i.shiftKey||i.which!==1&&i.button!==1&&!i.touches)&&(Zi._dragging=this,this._preventOutline&&Bl(this._element),Ol(),Wi(),!this._moving)){this.fire("down");var o=i.touches?i.touches[0]:i,c=Pu(this._element);this._startPoint=new V(o.clientX,o.clientY),this._startPos=un(this._element),this._parentScale=Fl(c);var p=i.type==="mousedown";oe(document,p?"mousemove":"touchmove",this._onMove,this),oe(document,p?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(i){if(this._enabled){if(i.touches&&i.touches.length>1){this._moved=!0;return}var o=i.touches&&i.touches.length===1?i.touches[0]:i,c=new V(o.clientX,o.clientY)._subtract(this._startPoint);!c.x&&!c.y||Math.abs(c.x)+Math.abs(c.y)<this.options.clickTolerance||(c.x/=this._parentScale.x,c.y/=this._parentScale.y,rn(i),this._moved||(this.fire("dragstart"),this._moved=!0,Kt(document.body,"leaflet-dragging"),this._lastTarget=i.target||i.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Kt(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(c),this._moving=!0,this._lastEvent=i,this._updatePosition())}},_updatePosition:function(){var i={originalEvent:this._lastEvent};this.fire("predrag",i),Ce(this._element,this._newPos),this.fire("drag",i)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(i){Ie(document.body,"leaflet-dragging"),this._lastTarget&&(Ie(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),ke(document,"mousemove touchmove",this._onMove,this),ke(document,"mouseup touchend touchcancel",this._onUp,this),Ul(),Or();var o=this._moved&&this._moving;this._moving=!1,Zi._dragging=!1,o&&this.fire("dragend",{noInertia:i,distance:this._newPos.distanceTo(this._startPos)})}});function ku(i,o,c){var p,b=[1,4,2,8],R,z,Q,ot,_t,Nt,Qt,fe;for(R=0,Nt=i.length;R<Nt;R++)i[R]._code=hs(i[R],o);for(Q=0;Q<4;Q++){for(Qt=b[Q],p=[],R=0,Nt=i.length,z=Nt-1;R<Nt;z=R++)ot=i[R],_t=i[z],ot._code&Qt?_t._code&Qt||(fe=So(_t,ot,Qt,o,c),fe._code=hs(fe,o),p.push(fe)):(_t._code&Qt&&(fe=So(_t,ot,Qt,o,c),fe._code=hs(fe,o),p.push(fe)),p.push(ot));i=p}return i}function Bu(i,o){var c,p,b,R,z,Q,ot,_t,Nt;if(!i||i.length===0)throw new Error("latlngs not passed");Un(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var Qt=J([0,0]),fe=Mt(i),_n=fe.getNorthWest().distanceTo(fe.getSouthWest())*fe.getNorthEast().distanceTo(fe.getNorthWest());_n<1700&&(Qt=ql(i));var Qe=i.length,kn=[];for(c=0;c<Qe;c++){var Mn=J(i[c]);kn.push(o.project(J([Mn.lat-Qt.lat,Mn.lng-Qt.lng])))}for(Q=ot=_t=0,c=0,p=Qe-1;c<Qe;p=c++)b=kn[c],R=kn[p],z=b.y*R.x-R.y*b.x,ot+=(b.x+R.x)*z,_t+=(b.y+R.y)*z,Q+=z*3;Q===0?Nt=kn[0]:Nt=[ot/Q,_t/Q];var Ws=o.unproject(G(Nt));return J([Ws.lat+Qt.lat,Ws.lng+Qt.lng])}function ql(i){for(var o=0,c=0,p=0,b=0;b<i.length;b++){var R=J(i[b]);o+=R.lat,c+=R.lng,p++}return J([o/p,c/p])}var om={__proto__:null,clipPolygon:ku,polygonCenter:Bu,centroid:ql};function Fu(i,o){if(!o||!i.length)return i.slice();var c=o*o;return i=cm(i,c),i=lm(i,c),i}function zu(i,o,c){return Math.sqrt(Fr(i,o,c,!0))}function am(i,o,c){return Fr(i,o,c)}function lm(i,o){var c=i.length,p=typeof Uint8Array<"u"?Uint8Array:Array,b=new p(c);b[0]=b[c-1]=1,Yl(i,b,o,0,c-1);var R,z=[];for(R=0;R<c;R++)b[R]&&z.push(i[R]);return z}function Yl(i,o,c,p,b){var R=0,z,Q,ot;for(Q=p+1;Q<=b-1;Q++)ot=Fr(i[Q],i[p],i[b],!0),ot>R&&(z=Q,R=ot);R>c&&(o[z]=1,Yl(i,o,c,p,z),Yl(i,o,c,z,b))}function cm(i,o){for(var c=[i[0]],p=1,b=0,R=i.length;p<R;p++)hm(i[p],i[b])>o&&(c.push(i[p]),b=p);return b<R-1&&c.push(i[R-1]),c}var Hu;function Vu(i,o,c,p,b){var R=p?Hu:hs(i,c),z=hs(o,c),Q,ot,_t;for(Hu=z;;){if(!(R|z))return[i,o];if(R&z)return!1;Q=R||z,ot=So(i,o,Q,c,b),_t=hs(ot,c),Q===R?(i=ot,R=_t):(o=ot,z=_t)}}function So(i,o,c,p,b){var R=o.x-i.x,z=o.y-i.y,Q=p.min,ot=p.max,_t,Nt;return c&8?(_t=i.x+R*(ot.y-i.y)/z,Nt=ot.y):c&4?(_t=i.x+R*(Q.y-i.y)/z,Nt=Q.y):c&2?(_t=ot.x,Nt=i.y+z*(ot.x-i.x)/R):c&1&&(_t=Q.x,Nt=i.y+z*(Q.x-i.x)/R),new V(_t,Nt,b)}function hs(i,o){var c=0;return i.x<o.min.x?c|=1:i.x>o.max.x&&(c|=2),i.y<o.min.y?c|=4:i.y>o.max.y&&(c|=8),c}function hm(i,o){var c=o.x-i.x,p=o.y-i.y;return c*c+p*p}function Fr(i,o,c,p){var b=o.x,R=o.y,z=c.x-b,Q=c.y-R,ot=z*z+Q*Q,_t;return ot>0&&(_t=((i.x-b)*z+(i.y-R)*Q)/ot,_t>1?(b=c.x,R=c.y):_t>0&&(b+=z*_t,R+=Q*_t)),z=i.x-b,Q=i.y-R,p?z*z+Q*Q:new V(b,R)}function Un(i){return!v(i[0])||typeof i[0][0]!="object"&&typeof i[0][0]<"u"}function Gu(i){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Un(i)}function Wu(i,o){var c,p,b,R,z,Q,ot,_t;if(!i||i.length===0)throw new Error("latlngs not passed");Un(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var Nt=J([0,0]),Qt=Mt(i),fe=Qt.getNorthWest().distanceTo(Qt.getSouthWest())*Qt.getNorthEast().distanceTo(Qt.getNorthWest());fe<1700&&(Nt=ql(i));var _n=i.length,Qe=[];for(c=0;c<_n;c++){var kn=J(i[c]);Qe.push(o.project(J([kn.lat-Nt.lat,kn.lng-Nt.lng])))}for(c=0,p=0;c<_n-1;c++)p+=Qe[c].distanceTo(Qe[c+1])/2;if(p===0)_t=Qe[0];else for(c=0,R=0;c<_n-1;c++)if(z=Qe[c],Q=Qe[c+1],b=z.distanceTo(Q),R+=b,R>p){ot=(R-p)/b,_t=[Q.x-ot*(Q.x-z.x),Q.y-ot*(Q.y-z.y)];break}var Mn=o.unproject(G(_t));return J([Mn.lat+Nt.lat,Mn.lng+Nt.lng])}var um={__proto__:null,simplify:Fu,pointToSegmentDistance:zu,closestPointOnSegment:am,clipSegment:Vu,_getEdgeIntersection:So,_getBitCode:hs,_sqClosestPointOnSegment:Fr,isFlat:Un,_flat:Gu,polylineCenter:Wu},$l={project:function(i){return new V(i.lng,i.lat)},unproject:function(i){return new wt(i.y,i.x)},bounds:new ut([-180,-90],[180,90])},Kl={R:6378137,R_MINOR:6356752314245179e-9,bounds:new ut([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(i){var o=Math.PI/180,c=this.R,p=i.lat*o,b=this.R_MINOR/c,R=Math.sqrt(1-b*b),z=R*Math.sin(p),Q=Math.tan(Math.PI/4-p/2)/Math.pow((1-z)/(1+z),R/2);return p=-c*Math.log(Math.max(Q,1e-10)),new V(i.lng*o*c,p)},unproject:function(i){for(var o=180/Math.PI,c=this.R,p=this.R_MINOR/c,b=Math.sqrt(1-p*p),R=Math.exp(-i.y/c),z=Math.PI/2-2*Math.atan(R),Q=0,ot=.1,_t;Q<15&&Math.abs(ot)>1e-7;Q++)_t=b*Math.sin(z),_t=Math.pow((1-_t)/(1+_t),b/2),ot=Math.PI/2-2*Math.atan(R*_t)-z,z+=ot;return new wt(z*o,i.x*o/c)}},dm={__proto__:null,LonLat:$l,Mercator:Kl,SphericalMercator:yt},fm=e({},at,{code:"EPSG:3395",projection:Kl,transformation:(function(){var i=.5/(Math.PI*Kl.R);return et(i,.5,-i,.5)})()}),Zu=e({},at,{code:"EPSG:4326",projection:$l,transformation:et(1/180,1,-1/180,.5)}),pm=e({},Y,{projection:$l,transformation:et(1,0,-1,0),scale:function(i){return Math.pow(2,i)},zoom:function(i){return Math.log(i)/Math.LN2},distance:function(i,o){var c=o.lng-i.lng,p=o.lat-i.lat;return Math.sqrt(c*c+p*p)},infinite:!0});Y.Earth=at,Y.EPSG3395=fm,Y.EPSG3857=Tt,Y.EPSG900913=xt,Y.EPSG4326=Zu,Y.Simple=pm;var Kn=it.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(i){return i.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(i){return i&&i.removeLayer(this),this},getPane:function(i){return this._map.getPane(i?this.options[i]||i:this.options.pane)},addInteractiveTarget:function(i){return this._map._targets[l(i)]=this,this},removeInteractiveTarget:function(i){return delete this._map._targets[l(i)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(i){var o=i.target;if(o.hasLayer(this)){if(this._map=o,this._zoomAnimated=o._zoomAnimated,this.getEvents){var c=this.getEvents();o.on(c,this),this.once("remove",function(){o.off(c,this)},this)}this.onAdd(o),this.fire("add"),o.fire("layeradd",{layer:this})}}});Me.include({addLayer:function(i){if(!i._layerAdd)throw new Error("The provided object is not a Layer.");var o=l(i);return this._layers[o]?this:(this._layers[o]=i,i._mapToAdd=this,i.beforeAdd&&i.beforeAdd(this),this.whenReady(i._layerAdd,i),this)},removeLayer:function(i){var o=l(i);return this._layers[o]?(this._loaded&&i.onRemove(this),delete this._layers[o],this._loaded&&(this.fire("layerremove",{layer:i}),i.fire("remove")),i._map=i._mapToAdd=null,this):this},hasLayer:function(i){return l(i)in this._layers},eachLayer:function(i,o){for(var c in this._layers)i.call(o,this._layers[c]);return this},_addLayers:function(i){i=i?v(i)?i:[i]:[];for(var o=0,c=i.length;o<c;o++)this.addLayer(i[o])},_addZoomLimit:function(i){(!isNaN(i.options.maxZoom)||!isNaN(i.options.minZoom))&&(this._zoomBoundLayers[l(i)]=i,this._updateZoomLevels())},_removeZoomLimit:function(i){var o=l(i);this._zoomBoundLayers[o]&&(delete this._zoomBoundLayers[o],this._updateZoomLevels())},_updateZoomLevels:function(){var i=1/0,o=-1/0,c=this._getZoomSpan();for(var p in this._zoomBoundLayers){var b=this._zoomBoundLayers[p].options;i=b.minZoom===void 0?i:Math.min(i,b.minZoom),o=b.maxZoom===void 0?o:Math.max(o,b.maxZoom)}this._layersMaxZoom=o===-1/0?void 0:o,this._layersMinZoom=i===1/0?void 0:i,c!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Fs=Kn.extend({initialize:function(i,o){_(this,o),this._layers={};var c,p;if(i)for(c=0,p=i.length;c<p;c++)this.addLayer(i[c])},addLayer:function(i){var o=this.getLayerId(i);return this._layers[o]=i,this._map&&this._map.addLayer(i),this},removeLayer:function(i){var o=i in this._layers?i:this.getLayerId(i);return this._map&&this._layers[o]&&this._map.removeLayer(this._layers[o]),delete this._layers[o],this},hasLayer:function(i){var o=typeof i=="number"?i:this.getLayerId(i);return o in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(i){var o=Array.prototype.slice.call(arguments,1),c,p;for(c in this._layers)p=this._layers[c],p[i]&&p[i].apply(p,o);return this},onAdd:function(i){this.eachLayer(i.addLayer,i)},onRemove:function(i){this.eachLayer(i.removeLayer,i)},eachLayer:function(i,o){for(var c in this._layers)i.call(o,this._layers[c]);return this},getLayer:function(i){return this._layers[i]},getLayers:function(){var i=[];return this.eachLayer(i.push,i),i},setZIndex:function(i){return this.invoke("setZIndex",i)},getLayerId:function(i){return l(i)}}),mm=function(i,o){return new Fs(i,o)},wi=Fs.extend({addLayer:function(i){return this.hasLayer(i)?this:(i.addEventParent(this),Fs.prototype.addLayer.call(this,i),this.fire("layeradd",{layer:i}))},removeLayer:function(i){return this.hasLayer(i)?(i in this._layers&&(i=this._layers[i]),i.removeEventParent(this),Fs.prototype.removeLayer.call(this,i),this.fire("layerremove",{layer:i})):this},setStyle:function(i){return this.invoke("setStyle",i)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var i=new ct;for(var o in this._layers){var c=this._layers[o];i.extend(c.getBounds?c.getBounds():c.getLatLng())}return i}}),gm=function(i,o){return new wi(i,o)},zs=q.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(i){_(this,i)},createIcon:function(i){return this._createIcon("icon",i)},createShadow:function(i){return this._createIcon("shadow",i)},_createIcon:function(i,o){var c=this._getIconUrl(i);if(!c){if(i==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var p=this._createImg(c,o&&o.tagName==="IMG"?o:null);return this._setIconStyles(p,i),(this.options.crossOrigin||this.options.crossOrigin==="")&&(p.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),p},_setIconStyles:function(i,o){var c=this.options,p=c[o+"Size"];typeof p=="number"&&(p=[p,p]);var b=G(p),R=G(o==="shadow"&&c.shadowAnchor||c.iconAnchor||b&&b.divideBy(2,!0));i.className="leaflet-marker-"+o+" "+(c.className||""),R&&(i.style.marginLeft=-R.x+"px",i.style.marginTop=-R.y+"px"),b&&(i.style.width=b.x+"px",i.style.height=b.y+"px")},_createImg:function(i,o){return o=o||document.createElement("img"),o.src=i,o},_getIconUrl:function(i){return zt.retina&&this.options[i+"RetinaUrl"]||this.options[i+"Url"]}});function _m(i){return new zs(i)}var zr=zs.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(i){return typeof zr.imagePath!="string"&&(zr.imagePath=this._detectIconPath()),(this.options.imagePath||zr.imagePath)+zs.prototype._getIconUrl.call(this,i)},_stripUrl:function(i){var o=function(c,p,b){var R=p.exec(c);return R&&R[b]};return i=o(i,/^url\((['"])?(.+)\1\)$/,2),i&&o(i,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var i=qt("div","leaflet-default-icon-path",document.body),o=Ee(i,"background-image")||Ee(i,"backgroundImage");if(document.body.removeChild(i),o=this._stripUrl(o),o)return o;var c=document.querySelector('link[href$="leaflet.css"]');return c?c.href.substring(0,c.href.length-11-1):""}}),Xu=mi.extend({initialize:function(i){this._marker=i},addHooks:function(){var i=this._marker._icon;this._draggable||(this._draggable=new Zi(i,i,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Kt(i,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Ie(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(i){var o=this._marker,c=o._map,p=this._marker.options.autoPanSpeed,b=this._marker.options.autoPanPadding,R=un(o._icon),z=c.getPixelBounds(),Q=c.getPixelOrigin(),ot=lt(z.min._subtract(Q).add(b),z.max._subtract(Q).subtract(b));if(!ot.contains(R)){var _t=G((Math.max(ot.max.x,R.x)-ot.max.x)/(z.max.x-ot.max.x)-(Math.min(ot.min.x,R.x)-ot.min.x)/(z.min.x-ot.min.x),(Math.max(ot.max.y,R.y)-ot.max.y)/(z.max.y-ot.max.y)-(Math.min(ot.min.y,R.y)-ot.min.y)/(z.min.y-ot.min.y)).multiplyBy(p);c.panBy(_t,{animate:!1}),this._draggable._newPos._add(_t),this._draggable._startPos._add(_t),Ce(o._icon,this._draggable._newPos),this._onDrag(i),this._panRequest=A(this._adjustPan.bind(this,i))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(i){this._marker.options.autoPan&&(E(this._panRequest),this._panRequest=A(this._adjustPan.bind(this,i)))},_onDrag:function(i){var o=this._marker,c=o._shadow,p=un(o._icon),b=o._map.layerPointToLatLng(p);c&&Ce(c,p),o._latlng=b,i.latlng=b,i.oldLatLng=this._oldLatLng,o.fire("move",i).fire("drag",i)},_onDragEnd:function(i){E(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",i)}}),wo=Kn.extend({options:{icon:new zr,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(i,o){_(this,o),this._latlng=J(i)},onAdd:function(i){this._zoomAnimated=this._zoomAnimated&&i.options.markerZoomAnimation,this._zoomAnimated&&i.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(i){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&i.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(i){var o=this._latlng;return this._latlng=J(i),this.update(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},setZIndexOffset:function(i){return this.options.zIndexOffset=i,this.update()},getIcon:function(){return this.options.icon},setIcon:function(i){return this.options.icon=i,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var i=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(i)}return this},_initIcon:function(){var i=this.options,o="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),c=i.icon.createIcon(this._icon),p=!1;c!==this._icon&&(this._icon&&this._removeIcon(),p=!0,i.title&&(c.title=i.title),c.tagName==="IMG"&&(c.alt=i.alt||"")),Kt(c,o),i.keyboard&&(c.tabIndex="0",c.setAttribute("role","button")),this._icon=c,i.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&oe(c,"focus",this._panOnFocus,this);var b=i.icon.createShadow(this._shadow),R=!1;b!==this._shadow&&(this._removeShadow(),R=!0),b&&(Kt(b,o),b.alt=""),this._shadow=b,i.opacity<1&&this._updateOpacity(),p&&this.getPane().appendChild(this._icon),this._initInteraction(),b&&R&&this.getPane(i.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ke(this._icon,"focus",this._panOnFocus,this),ue(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&ue(this._shadow),this._shadow=null},_setPos:function(i){this._icon&&Ce(this._icon,i),this._shadow&&Ce(this._shadow,i),this._zIndex=i.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(i){this._icon&&(this._icon.style.zIndex=this._zIndex+i)},_animateZoom:function(i){var o=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center).round();this._setPos(o)},_initInteraction:function(){if(this.options.interactive&&(Kt(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Xu)){var i=this.options.draggable;this.dragging&&(i=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Xu(this),i&&this.dragging.enable()}},setOpacity:function(i){return this.options.opacity=i,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var i=this.options.opacity;this._icon&&de(this._icon,i),this._shadow&&de(this._shadow,i)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var i=this._map;if(i){var o=this.options.icon.options,c=o.iconSize?G(o.iconSize):G(0,0),p=o.iconAnchor?G(o.iconAnchor):G(0,0);i.panInside(this._latlng,{paddingTopLeft:p,paddingBottomRight:c.subtract(p)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function vm(i,o){return new wo(i,o)}var Xi=Kn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(i){this._renderer=i.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(i){return _(this,i),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&i&&Object.prototype.hasOwnProperty.call(i,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),To=Xi.extend({options:{fill:!0,radius:10},initialize:function(i,o){_(this,o),this._latlng=J(i),this._radius=this.options.radius},setLatLng:function(i){var o=this._latlng;return this._latlng=J(i),this.redraw(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(i){return this.options.radius=this._radius=i,this.redraw()},getRadius:function(){return this._radius},setStyle:function(i){var o=i&&i.radius||this._radius;return Xi.prototype.setStyle.call(this,i),this.setRadius(o),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var i=this._radius,o=this._radiusY||i,c=this._clickTolerance(),p=[i+c,o+c];this._pxBounds=new ut(this._point.subtract(p),this._point.add(p))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(i){return i.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function xm(i,o){return new To(i,o)}var Jl=To.extend({initialize:function(i,o,c){if(typeof o=="number"&&(o=e({},c,{radius:o})),_(this,o),this._latlng=J(i),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(i){return this._mRadius=i,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var i=[this._radius,this._radiusY||this._radius];return new ct(this._map.layerPointToLatLng(this._point.subtract(i)),this._map.layerPointToLatLng(this._point.add(i)))},setStyle:Xi.prototype.setStyle,_project:function(){var i=this._latlng.lng,o=this._latlng.lat,c=this._map,p=c.options.crs;if(p.distance===at.distance){var b=Math.PI/180,R=this._mRadius/at.R/b,z=c.project([o+R,i]),Q=c.project([o-R,i]),ot=z.add(Q).divideBy(2),_t=c.unproject(ot).lat,Nt=Math.acos((Math.cos(R*b)-Math.sin(o*b)*Math.sin(_t*b))/(Math.cos(o*b)*Math.cos(_t*b)))/b;(isNaN(Nt)||Nt===0)&&(Nt=R/Math.cos(Math.PI/180*o)),this._point=ot.subtract(c.getPixelOrigin()),this._radius=isNaN(Nt)?0:ot.x-c.project([_t,i-Nt]).x,this._radiusY=ot.y-z.y}else{var Qt=p.unproject(p.project(this._latlng).subtract([this._mRadius,0]));this._point=c.latLngToLayerPoint(this._latlng),this._radius=this._point.x-c.latLngToLayerPoint(Qt).x}this._updateBounds()}});function ym(i,o,c){return new Jl(i,o,c)}var Ti=Xi.extend({options:{smoothFactor:1,noClip:!1},initialize:function(i,o){_(this,o),this._setLatLngs(i)},getLatLngs:function(){return this._latlngs},setLatLngs:function(i){return this._setLatLngs(i),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(i){for(var o=1/0,c=null,p=Fr,b,R,z=0,Q=this._parts.length;z<Q;z++)for(var ot=this._parts[z],_t=1,Nt=ot.length;_t<Nt;_t++){b=ot[_t-1],R=ot[_t];var Qt=p(i,b,R,!0);Qt<o&&(o=Qt,c=p(i,b,R))}return c&&(c.distance=Math.sqrt(o)),c},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Wu(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(i,o){return o=o||this._defaultShape(),i=J(i),o.push(i),this._bounds.extend(i),this.redraw()},_setLatLngs:function(i){this._bounds=new ct,this._latlngs=this._convertLatLngs(i)},_defaultShape:function(){return Un(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(i){for(var o=[],c=Un(i),p=0,b=i.length;p<b;p++)c?(o[p]=J(i[p]),this._bounds.extend(o[p])):o[p]=this._convertLatLngs(i[p]);return o},_project:function(){var i=new ut;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,i),this._bounds.isValid()&&i.isValid()&&(this._rawPxBounds=i,this._updateBounds())},_updateBounds:function(){var i=this._clickTolerance(),o=new V(i,i);this._rawPxBounds&&(this._pxBounds=new ut([this._rawPxBounds.min.subtract(o),this._rawPxBounds.max.add(o)]))},_projectLatlngs:function(i,o,c){var p=i[0]instanceof wt,b=i.length,R,z;if(p){for(z=[],R=0;R<b;R++)z[R]=this._map.latLngToLayerPoint(i[R]),c.extend(z[R]);o.push(z)}else for(R=0;R<b;R++)this._projectLatlngs(i[R],o,c)},_clipPoints:function(){var i=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}var o=this._parts,c,p,b,R,z,Q,ot;for(c=0,b=0,R=this._rings.length;c<R;c++)for(ot=this._rings[c],p=0,z=ot.length;p<z-1;p++)Q=Vu(ot[p],ot[p+1],i,p,!0),Q&&(o[b]=o[b]||[],o[b].push(Q[0]),(Q[1]!==ot[p+1]||p===z-2)&&(o[b].push(Q[1]),b++))}},_simplifyPoints:function(){for(var i=this._parts,o=this.options.smoothFactor,c=0,p=i.length;c<p;c++)i[c]=Fu(i[c],o)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(i,o){var c,p,b,R,z,Q,ot=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(c=0,R=this._parts.length;c<R;c++)for(Q=this._parts[c],p=0,z=Q.length,b=z-1;p<z;b=p++)if(!(!o&&p===0)&&zu(i,Q[b],Q[p])<=ot)return!0;return!1}});function bm(i,o){return new Ti(i,o)}Ti._flat=Gu;var Hs=Ti.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Bu(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(i){var o=Ti.prototype._convertLatLngs.call(this,i),c=o.length;return c>=2&&o[0]instanceof wt&&o[0].equals(o[c-1])&&o.pop(),o},_setLatLngs:function(i){Ti.prototype._setLatLngs.call(this,i),Un(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Un(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var i=this._renderer._bounds,o=this.options.weight,c=new V(o,o);if(i=new ut(i.min.subtract(c),i.max.add(c)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}for(var p=0,b=this._rings.length,R;p<b;p++)R=ku(this._rings[p],i,!0),R.length&&this._parts.push(R)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(i){var o=!1,c,p,b,R,z,Q,ot,_t;if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(R=0,ot=this._parts.length;R<ot;R++)for(c=this._parts[R],z=0,_t=c.length,Q=_t-1;z<_t;Q=z++)p=c[z],b=c[Q],p.y>i.y!=b.y>i.y&&i.x<(b.x-p.x)*(i.y-p.y)/(b.y-p.y)+p.x&&(o=!o);return o||Ti.prototype._containsPoint.call(this,i,!0)}});function Mm(i,o){return new Hs(i,o)}var Ei=wi.extend({initialize:function(i,o){_(this,o),this._layers={},i&&this.addData(i)},addData:function(i){var o=v(i)?i:i.features,c,p,b;if(o){for(c=0,p=o.length;c<p;c++)b=o[c],(b.geometries||b.geometry||b.features||b.coordinates)&&this.addData(b);return this}var R=this.options;if(R.filter&&!R.filter(i))return this;var z=Eo(i,R);return z?(z.feature=Ro(i),z.defaultOptions=z.options,this.resetStyle(z),R.onEachFeature&&R.onEachFeature(i,z),this.addLayer(z)):this},resetStyle:function(i){return i===void 0?this.eachLayer(this.resetStyle,this):(i.options=e({},i.defaultOptions),this._setLayerStyle(i,this.options.style),this)},setStyle:function(i){return this.eachLayer(function(o){this._setLayerStyle(o,i)},this)},_setLayerStyle:function(i,o){i.setStyle&&(typeof o=="function"&&(o=o(i.feature)),i.setStyle(o))}});function Eo(i,o){var c=i.type==="Feature"?i.geometry:i,p=c?c.coordinates:null,b=[],R=o&&o.pointToLayer,z=o&&o.coordsToLatLng||jl,Q,ot,_t,Nt;if(!p&&!c)return null;switch(c.type){case"Point":return Q=z(p),qu(R,i,Q,o);case"MultiPoint":for(_t=0,Nt=p.length;_t<Nt;_t++)Q=z(p[_t]),b.push(qu(R,i,Q,o));return new wi(b);case"LineString":case"MultiLineString":return ot=Ao(p,c.type==="LineString"?0:1,z),new Ti(ot,o);case"Polygon":case"MultiPolygon":return ot=Ao(p,c.type==="Polygon"?1:2,z),new Hs(ot,o);case"GeometryCollection":for(_t=0,Nt=c.geometries.length;_t<Nt;_t++){var Qt=Eo({geometry:c.geometries[_t],type:"Feature",properties:i.properties},o);Qt&&b.push(Qt)}return new wi(b);case"FeatureCollection":for(_t=0,Nt=c.features.length;_t<Nt;_t++){var fe=Eo(c.features[_t],o);fe&&b.push(fe)}return new wi(b);default:throw new Error("Invalid GeoJSON object.")}}function qu(i,o,c,p){return i?i(o,c):new wo(c,p&&p.markersInheritOptions&&p)}function jl(i){return new wt(i[1],i[0],i[2])}function Ao(i,o,c){for(var p=[],b=0,R=i.length,z;b<R;b++)z=o?Ao(i[b],o-1,c):(c||jl)(i[b]),p.push(z);return p}function Ql(i,o){return i=J(i),i.alt!==void 0?[m(i.lng,o),m(i.lat,o),m(i.alt,o)]:[m(i.lng,o),m(i.lat,o)]}function Po(i,o,c,p){for(var b=[],R=0,z=i.length;R<z;R++)b.push(o?Po(i[R],Un(i[R])?0:o-1,c,p):Ql(i[R],p));return!o&&c&&b.length>0&&b.push(b[0].slice()),b}function Vs(i,o){return i.feature?e({},i.feature,{geometry:o}):Ro(o)}function Ro(i){return i.type==="Feature"||i.type==="FeatureCollection"?i:{type:"Feature",properties:{},geometry:i}}var tc={toGeoJSON:function(i){return Vs(this,{type:"Point",coordinates:Ql(this.getLatLng(),i)})}};wo.include(tc),Jl.include(tc),To.include(tc),Ti.include({toGeoJSON:function(i){var o=!Un(this._latlngs),c=Po(this._latlngs,o?1:0,!1,i);return Vs(this,{type:(o?"Multi":"")+"LineString",coordinates:c})}}),Hs.include({toGeoJSON:function(i){var o=!Un(this._latlngs),c=o&&!Un(this._latlngs[0]),p=Po(this._latlngs,c?2:o?1:0,!0,i);return o||(p=[p]),Vs(this,{type:(c?"Multi":"")+"Polygon",coordinates:p})}}),Fs.include({toMultiPoint:function(i){var o=[];return this.eachLayer(function(c){o.push(c.toGeoJSON(i).geometry.coordinates)}),Vs(this,{type:"MultiPoint",coordinates:o})},toGeoJSON:function(i){var o=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(o==="MultiPoint")return this.toMultiPoint(i);var c=o==="GeometryCollection",p=[];return this.eachLayer(function(b){if(b.toGeoJSON){var R=b.toGeoJSON(i);if(c)p.push(R.geometry);else{var z=Ro(R);z.type==="FeatureCollection"?p.push.apply(p,z.features):p.push(z)}}}),c?Vs(this,{geometries:p,type:"GeometryCollection"}):{type:"FeatureCollection",features:p}}});function Yu(i,o){return new Ei(i,o)}var Sm=Yu,Co=Kn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(i,o,c){this._url=i,this._bounds=Mt(o),_(this,c)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Kt(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){ue(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(i){return this.options.opacity=i,this._image&&this._updateOpacity(),this},setStyle:function(i){return i.opacity&&this.setOpacity(i.opacity),this},bringToFront:function(){return this._map&&Ht(this._image),this},bringToBack:function(){return this._map&&hn(this._image),this},setUrl:function(i){return this._url=i,this._image&&(this._image.src=i),this},setBounds:function(i){return this._bounds=Mt(i),this._map&&this._reset(),this},getEvents:function(){var i={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var i=this._url.tagName==="IMG",o=this._image=i?this._url:qt("img");if(Kt(o,"leaflet-image-layer"),this._zoomAnimated&&Kt(o,"leaflet-zoom-animated"),this.options.className&&Kt(o,this.options.className),o.onselectstart=f,o.onmousemove=f,o.onload=r(this.fire,this,"load"),o.onerror=r(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),i){this._url=o.src;return}o.src=this._url,o.alt=this.options.alt},_animateZoom:function(i){var o=this._map.getZoomScale(i.zoom),c=this._map._latLngBoundsToNewLayerBounds(this._bounds,i.zoom,i.center).min;qe(this._image,c,o)},_reset:function(){var i=this._image,o=new ut(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),c=o.getSize();Ce(i,o.min),i.style.width=c.x+"px",i.style.height=c.y+"px"},_updateOpacity:function(){de(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var i=this.options.errorOverlayUrl;i&&this._url!==i&&(this._url=i,this._image.src=i)},getCenter:function(){return this._bounds.getCenter()}}),wm=function(i,o,c){return new Co(i,o,c)},$u=Co.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var i=this._url.tagName==="VIDEO",o=this._image=i?this._url:qt("video");if(Kt(o,"leaflet-image-layer"),this._zoomAnimated&&Kt(o,"leaflet-zoom-animated"),this.options.className&&Kt(o,this.options.className),o.onselectstart=f,o.onmousemove=f,o.onloadeddata=r(this.fire,this,"load"),i){for(var c=o.getElementsByTagName("source"),p=[],b=0;b<c.length;b++)p.push(c[b].src);this._url=c.length>0?p:[o.src];return}v(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(o.style,"objectFit")&&(o.style.objectFit="fill"),o.autoplay=!!this.options.autoplay,o.loop=!!this.options.loop,o.muted=!!this.options.muted,o.playsInline=!!this.options.playsInline;for(var R=0;R<this._url.length;R++){var z=qt("source");z.src=this._url[R],o.appendChild(z)}}});function Tm(i,o,c){return new $u(i,o,c)}var Ku=Co.extend({_initImage:function(){var i=this._image=this._url;Kt(i,"leaflet-image-layer"),this._zoomAnimated&&Kt(i,"leaflet-zoom-animated"),this.options.className&&Kt(i,this.options.className),i.onselectstart=f,i.onmousemove=f}});function Em(i,o,c){return new Ku(i,o,c)}var gi=Kn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(i,o){i&&(i instanceof wt||v(i))?(this._latlng=J(i),_(this,o)):(_(this,i),this._source=o),this.options.content&&(this._content=this.options.content)},openOn:function(i){return i=arguments.length?i:this._source._map,i.hasLayer(this)||i.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(i){return this._map?this.close():(arguments.length?this._source=i:i=this._source,this._prepareOpen(),this.openOn(i._map)),this},onAdd:function(i){this._zoomAnimated=i._zoomAnimated,this._container||this._initLayout(),i._fadeAnimated&&de(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),i._fadeAnimated&&de(this._container,1),this.bringToFront(),this.options.interactive&&(Kt(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(i){i._fadeAnimated?(de(this._container,0),this._removeTimeout=setTimeout(r(ue,void 0,this._container),200)):ue(this._container),this.options.interactive&&(Ie(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(i){return this._latlng=J(i),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(i){return this._content=i,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var i={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Ht(this._container),this},bringToBack:function(){return this._map&&hn(this._container),this},_prepareOpen:function(i){var o=this._source;if(!o._map)return!1;if(o instanceof wi){o=null;var c=this._source._layers;for(var p in c)if(c[p]._map){o=c[p];break}if(!o)return!1;this._source=o}if(!i)if(o.getCenter)i=o.getCenter();else if(o.getLatLng)i=o.getLatLng();else if(o.getBounds)i=o.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(i),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var i=this._contentNode,o=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof o=="string")i.innerHTML=o;else{for(;i.hasChildNodes();)i.removeChild(i.firstChild);i.appendChild(o)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var i=this._map.latLngToLayerPoint(this._latlng),o=G(this.options.offset),c=this._getAnchor();this._zoomAnimated?Ce(this._container,i.add(c)):o=o.add(i).add(c);var p=this._containerBottom=-o.y,b=this._containerLeft=-Math.round(this._containerWidth/2)+o.x;this._container.style.bottom=p+"px",this._container.style.left=b+"px"}},_getAnchor:function(){return[0,0]}});Me.include({_initOverlay:function(i,o,c,p){var b=o;return b instanceof i||(b=new i(p).setContent(o)),c&&b.setLatLng(c),b}}),Kn.include({_initOverlay:function(i,o,c,p){var b=c;return b instanceof i?(_(b,p),b._source=this):(b=o&&!p?o:new i(p,this),b.setContent(c)),b}});var Lo=gi.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(i){return i=arguments.length?i:this._source._map,!i.hasLayer(this)&&i._popup&&i._popup.options.autoClose&&i.removeLayer(i._popup),i._popup=this,gi.prototype.openOn.call(this,i)},onAdd:function(i){gi.prototype.onAdd.call(this,i),i.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Xi||this._source.on("preclick",ls))},onRemove:function(i){gi.prototype.onRemove.call(this,i),i.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Xi||this._source.off("preclick",ls))},getEvents:function(){var i=gi.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(i.preclick=this.close),this.options.keepInView&&(i.moveend=this._adjustPan),i},_initLayout:function(){var i="leaflet-popup",o=this._container=qt("div",i+" "+(this.options.className||"")+" leaflet-zoom-animated"),c=this._wrapper=qt("div",i+"-content-wrapper",o);if(this._contentNode=qt("div",i+"-content",c),kr(o),Gl(this._contentNode),oe(o,"contextmenu",ls),this._tipContainer=qt("div",i+"-tip-container",o),this._tip=qt("div",i+"-tip",this._tipContainer),this.options.closeButton){var p=this._closeButton=qt("a",i+"-close-button",o);p.setAttribute("role","button"),p.setAttribute("aria-label","Close popup"),p.href="#close",p.innerHTML='<span aria-hidden="true">&#215;</span>',oe(p,"click",function(b){rn(b),this.close()},this)}},_updateLayout:function(){var i=this._contentNode,o=i.style;o.width="",o.whiteSpace="nowrap";var c=i.offsetWidth;c=Math.min(c,this.options.maxWidth),c=Math.max(c,this.options.minWidth),o.width=c+1+"px",o.whiteSpace="",o.height="";var p=i.offsetHeight,b=this.options.maxHeight,R="leaflet-popup-scrolled";b&&p>b?(o.height=b+"px",Kt(i,R)):Ie(i,R),this._containerWidth=this._container.offsetWidth},_animateZoom:function(i){var o=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center),c=this._getAnchor();Ce(this._container,o.add(c))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var i=this._map,o=parseInt(Ee(this._container,"marginBottom"),10)||0,c=this._container.offsetHeight+o,p=this._containerWidth,b=new V(this._containerLeft,-c-this._containerBottom);b._add(un(this._container));var R=i.layerPointToContainerPoint(b),z=G(this.options.autoPanPadding),Q=G(this.options.autoPanPaddingTopLeft||z),ot=G(this.options.autoPanPaddingBottomRight||z),_t=i.getSize(),Nt=0,Qt=0;R.x+p+ot.x>_t.x&&(Nt=R.x+p-_t.x+ot.x),R.x-Nt-Q.x<0&&(Nt=R.x-Q.x),R.y+c+ot.y>_t.y&&(Qt=R.y+c-_t.y+ot.y),R.y-Qt-Q.y<0&&(Qt=R.y-Q.y),(Nt||Qt)&&(this.options.keepInView&&(this._autopanning=!0),i.fire("autopanstart").panBy([Nt,Qt]))}},_getAnchor:function(){return G(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Am=function(i,o){return new Lo(i,o)};Me.mergeOptions({closePopupOnClick:!0}),Me.include({openPopup:function(i,o,c){return this._initOverlay(Lo,i,o,c).openOn(this),this},closePopup:function(i){return i=arguments.length?i:this._popup,i&&i.close(),this}}),Kn.include({bindPopup:function(i,o){return this._popup=this._initOverlay(Lo,this._popup,i,o),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(i){return this._popup&&(this instanceof wi||(this._popup._source=this),this._popup._prepareOpen(i||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(i){return this._popup&&this._popup.setContent(i),this},getPopup:function(){return this._popup},_openPopup:function(i){if(!(!this._popup||!this._map)){cs(i);var o=i.layer||i.target;if(this._popup._source===o&&!(o instanceof Xi)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(i.latlng);return}this._popup._source=o,this.openPopup(i.latlng)}},_movePopup:function(i){this._popup.setLatLng(i.latlng)},_onKeyPress:function(i){i.originalEvent.keyCode===13&&this._openPopup(i)}});var Io=gi.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(i){gi.prototype.onAdd.call(this,i),this.setOpacity(this.options.opacity),i.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(i){gi.prototype.onRemove.call(this,i),i.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var i=gi.prototype.getEvents.call(this);return this.options.permanent||(i.preclick=this.close),i},_initLayout:function(){var i="leaflet-tooltip",o=i+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=qt("div",o),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+l(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(i){var o,c,p=this._map,b=this._container,R=p.latLngToContainerPoint(p.getCenter()),z=p.layerPointToContainerPoint(i),Q=this.options.direction,ot=b.offsetWidth,_t=b.offsetHeight,Nt=G(this.options.offset),Qt=this._getAnchor();Q==="top"?(o=ot/2,c=_t):Q==="bottom"?(o=ot/2,c=0):Q==="center"?(o=ot/2,c=_t/2):Q==="right"?(o=0,c=_t/2):Q==="left"?(o=ot,c=_t/2):z.x<R.x?(Q="right",o=0,c=_t/2):(Q="left",o=ot+(Nt.x+Qt.x)*2,c=_t/2),i=i.subtract(G(o,c,!0)).add(Nt).add(Qt),Ie(b,"leaflet-tooltip-right"),Ie(b,"leaflet-tooltip-left"),Ie(b,"leaflet-tooltip-top"),Ie(b,"leaflet-tooltip-bottom"),Kt(b,"leaflet-tooltip-"+Q),Ce(b,i)},_updatePosition:function(){var i=this._map.latLngToLayerPoint(this._latlng);this._setPosition(i)},setOpacity:function(i){this.options.opacity=i,this._container&&de(this._container,i)},_animateZoom:function(i){var o=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center);this._setPosition(o)},_getAnchor:function(){return G(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Pm=function(i,o){return new Io(i,o)};Me.include({openTooltip:function(i,o,c){return this._initOverlay(Io,i,o,c).openOn(this),this},closeTooltip:function(i){return i.close(),this}}),Kn.include({bindTooltip:function(i,o){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Io,this._tooltip,i,o),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(i){if(!(!i&&this._tooltipHandlersAdded)){var o=i?"off":"on",c={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?c.add=this._openTooltip:(c.mouseover=this._openTooltip,c.mouseout=this.closeTooltip,c.click=this._openTooltip,this._map?this._addFocusListeners():c.add=this._addFocusListeners),this._tooltip.options.sticky&&(c.mousemove=this._moveTooltip),this[o](c),this._tooltipHandlersAdded=!i}},openTooltip:function(i){return this._tooltip&&(this instanceof wi||(this._tooltip._source=this),this._tooltip._prepareOpen(i)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(i){return this._tooltip&&this._tooltip.setContent(i),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(i){var o=typeof i.getElement=="function"&&i.getElement();o&&(oe(o,"focus",function(){this._tooltip._source=i,this.openTooltip()},this),oe(o,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(i){var o=typeof i.getElement=="function"&&i.getElement();o&&o.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(i){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var o=this;this._map.once("moveend",function(){o._openOnceFlag=!1,o._openTooltip(i)});return}this._tooltip._source=i.layer||i.target,this.openTooltip(this._tooltip.options.sticky?i.latlng:void 0)}},_moveTooltip:function(i){var o=i.latlng,c,p;this._tooltip.options.sticky&&i.originalEvent&&(c=this._map.mouseEventToContainerPoint(i.originalEvent),p=this._map.containerPointToLayerPoint(c),o=this._map.layerPointToLatLng(p)),this._tooltip.setLatLng(o)}});var Ju=zs.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(i){var o=i&&i.tagName==="DIV"?i:document.createElement("div"),c=this.options;if(c.html instanceof Element?(ve(o),o.appendChild(c.html)):o.innerHTML=c.html!==!1?c.html:"",c.bgPos){var p=G(c.bgPos);o.style.backgroundPosition=-p.x+"px "+-p.y+"px"}return this._setIconStyles(o,"icon"),o},createShadow:function(){return null}});function Rm(i){return new Ju(i)}zs.Default=zr;var Hr=Kn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:zt.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(i){_(this,i)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(i){i._addZoomLimit(this)},onRemove:function(i){this._removeAllTiles(),ue(this._container),i._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Ht(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(hn(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(i){return this.options.opacity=i,this._updateOpacity(),this},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var i=this._clampZoom(this._map.getZoom());i!==this._tileZoom&&(this._tileZoom=i,this._updateLevels()),this._update()}return this},getEvents:function(){var i={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=h(this._onMoveEnd,this.options.updateInterval,this)),i.move=this._onMove),this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},createTile:function(){return document.createElement("div")},getTileSize:function(){var i=this.options.tileSize;return i instanceof V?i:new V(i,i)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(i){for(var o=this.getPane().children,c=-i(-1/0,1/0),p=0,b=o.length,R;p<b;p++)R=o[p].style.zIndex,o[p]!==this._container&&R&&(c=i(c,+R));isFinite(c)&&(this.options.zIndex=c+i(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!zt.ielt9){de(this._container,this.options.opacity);var i=+new Date,o=!1,c=!1;for(var p in this._tiles){var b=this._tiles[p];if(!(!b.current||!b.loaded)){var R=Math.min(1,(i-b.loaded)/200);de(b.el,R),R<1?o=!0:(b.active?c=!0:this._onOpaqueTile(b),b.active=!0)}}c&&!this._noPrune&&this._pruneTiles(),o&&(E(this._fadeFrame),this._fadeFrame=A(this._updateOpacity,this))}},_onOpaqueTile:f,_initContainer:function(){this._container||(this._container=qt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var i=this._tileZoom,o=this.options.maxZoom;if(i!==void 0){for(var c in this._levels)c=Number(c),this._levels[c].el.children.length||c===i?(this._levels[c].el.style.zIndex=o-Math.abs(i-c),this._onUpdateLevel(c)):(ue(this._levels[c].el),this._removeTilesAtZoom(c),this._onRemoveLevel(c),delete this._levels[c]);var p=this._levels[i],b=this._map;return p||(p=this._levels[i]={},p.el=qt("div","leaflet-tile-container leaflet-zoom-animated",this._container),p.el.style.zIndex=o,p.origin=b.project(b.unproject(b.getPixelOrigin()),i).round(),p.zoom=i,this._setZoomTransform(p,b.getCenter(),b.getZoom()),f(p.el.offsetWidth),this._onCreateLevel(p)),this._level=p,p}},_onUpdateLevel:f,_onRemoveLevel:f,_onCreateLevel:f,_pruneTiles:function(){if(this._map){var i,o,c=this._map.getZoom();if(c>this.options.maxZoom||c<this.options.minZoom){this._removeAllTiles();return}for(i in this._tiles)o=this._tiles[i],o.retain=o.current;for(i in this._tiles)if(o=this._tiles[i],o.current&&!o.active){var p=o.coords;this._retainParent(p.x,p.y,p.z,p.z-5)||this._retainChildren(p.x,p.y,p.z,p.z+2)}for(i in this._tiles)this._tiles[i].retain||this._removeTile(i)}},_removeTilesAtZoom:function(i){for(var o in this._tiles)this._tiles[o].coords.z===i&&this._removeTile(o)},_removeAllTiles:function(){for(var i in this._tiles)this._removeTile(i)},_invalidateAll:function(){for(var i in this._levels)ue(this._levels[i].el),this._onRemoveLevel(Number(i)),delete this._levels[i];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(i,o,c,p){var b=Math.floor(i/2),R=Math.floor(o/2),z=c-1,Q=new V(+b,+R);Q.z=+z;var ot=this._tileCoordsToKey(Q),_t=this._tiles[ot];return _t&&_t.active?(_t.retain=!0,!0):(_t&&_t.loaded&&(_t.retain=!0),z>p?this._retainParent(b,R,z,p):!1)},_retainChildren:function(i,o,c,p){for(var b=2*i;b<2*i+2;b++)for(var R=2*o;R<2*o+2;R++){var z=new V(b,R);z.z=c+1;var Q=this._tileCoordsToKey(z),ot=this._tiles[Q];if(ot&&ot.active){ot.retain=!0;continue}else ot&&ot.loaded&&(ot.retain=!0);c+1<p&&this._retainChildren(b,R,c+1,p)}},_resetView:function(i){var o=i&&(i.pinch||i.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),o,o)},_animateZoom:function(i){this._setView(i.center,i.zoom,!0,i.noUpdate)},_clampZoom:function(i){var o=this.options;return o.minNativeZoom!==void 0&&i<o.minNativeZoom?o.minNativeZoom:o.maxNativeZoom!==void 0&&o.maxNativeZoom<i?o.maxNativeZoom:i},_setView:function(i,o,c,p){var b=Math.round(o);this.options.maxZoom!==void 0&&b>this.options.maxZoom||this.options.minZoom!==void 0&&b<this.options.minZoom?b=void 0:b=this._clampZoom(b);var R=this.options.updateWhenZooming&&b!==this._tileZoom;(!p||R)&&(this._tileZoom=b,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),b!==void 0&&this._update(i),c||this._pruneTiles(),this._noPrune=!!c),this._setZoomTransforms(i,o)},_setZoomTransforms:function(i,o){for(var c in this._levels)this._setZoomTransform(this._levels[c],i,o)},_setZoomTransform:function(i,o,c){var p=this._map.getZoomScale(c,i.zoom),b=i.origin.multiplyBy(p).subtract(this._map._getNewPixelOrigin(o,c)).round();zt.any3d?qe(i.el,b,p):Ce(i.el,b)},_resetGrid:function(){var i=this._map,o=i.options.crs,c=this._tileSize=this.getTileSize(),p=this._tileZoom,b=this._map.getPixelWorldBounds(this._tileZoom);b&&(this._globalTileRange=this._pxBoundsToTileRange(b)),this._wrapX=o.wrapLng&&!this.options.noWrap&&[Math.floor(i.project([0,o.wrapLng[0]],p).x/c.x),Math.ceil(i.project([0,o.wrapLng[1]],p).x/c.y)],this._wrapY=o.wrapLat&&!this.options.noWrap&&[Math.floor(i.project([o.wrapLat[0],0],p).y/c.x),Math.ceil(i.project([o.wrapLat[1],0],p).y/c.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(i){var o=this._map,c=o._animatingZoom?Math.max(o._animateToZoom,o.getZoom()):o.getZoom(),p=o.getZoomScale(c,this._tileZoom),b=o.project(i,this._tileZoom).floor(),R=o.getSize().divideBy(p*2);return new ut(b.subtract(R),b.add(R))},_update:function(i){var o=this._map;if(o){var c=this._clampZoom(o.getZoom());if(i===void 0&&(i=o.getCenter()),this._tileZoom!==void 0){var p=this._getTiledPixelBounds(i),b=this._pxBoundsToTileRange(p),R=b.getCenter(),z=[],Q=this.options.keepBuffer,ot=new ut(b.getBottomLeft().subtract([Q,-Q]),b.getTopRight().add([Q,-Q]));if(!(isFinite(b.min.x)&&isFinite(b.min.y)&&isFinite(b.max.x)&&isFinite(b.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var _t in this._tiles){var Nt=this._tiles[_t].coords;(Nt.z!==this._tileZoom||!ot.contains(new V(Nt.x,Nt.y)))&&(this._tiles[_t].current=!1)}if(Math.abs(c-this._tileZoom)>1){this._setView(i,c);return}for(var Qt=b.min.y;Qt<=b.max.y;Qt++)for(var fe=b.min.x;fe<=b.max.x;fe++){var _n=new V(fe,Qt);if(_n.z=this._tileZoom,!!this._isValidTile(_n)){var Qe=this._tiles[this._tileCoordsToKey(_n)];Qe?Qe.current=!0:z.push(_n)}}if(z.sort(function(Mn,Ws){return Mn.distanceTo(R)-Ws.distanceTo(R)}),z.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var kn=document.createDocumentFragment();for(fe=0;fe<z.length;fe++)this._addTile(z[fe],kn);this._level.el.appendChild(kn)}}}},_isValidTile:function(i){var o=this._map.options.crs;if(!o.infinite){var c=this._globalTileRange;if(!o.wrapLng&&(i.x<c.min.x||i.x>c.max.x)||!o.wrapLat&&(i.y<c.min.y||i.y>c.max.y))return!1}if(!this.options.bounds)return!0;var p=this._tileCoordsToBounds(i);return Mt(this.options.bounds).overlaps(p)},_keyToBounds:function(i){return this._tileCoordsToBounds(this._keyToTileCoords(i))},_tileCoordsToNwSe:function(i){var o=this._map,c=this.getTileSize(),p=i.scaleBy(c),b=p.add(c),R=o.unproject(p,i.z),z=o.unproject(b,i.z);return[R,z]},_tileCoordsToBounds:function(i){var o=this._tileCoordsToNwSe(i),c=new ct(o[0],o[1]);return this.options.noWrap||(c=this._map.wrapLatLngBounds(c)),c},_tileCoordsToKey:function(i){return i.x+":"+i.y+":"+i.z},_keyToTileCoords:function(i){var o=i.split(":"),c=new V(+o[0],+o[1]);return c.z=+o[2],c},_removeTile:function(i){var o=this._tiles[i];o&&(ue(o.el),delete this._tiles[i],this.fire("tileunload",{tile:o.el,coords:this._keyToTileCoords(i)}))},_initTile:function(i){Kt(i,"leaflet-tile");var o=this.getTileSize();i.style.width=o.x+"px",i.style.height=o.y+"px",i.onselectstart=f,i.onmousemove=f,zt.ielt9&&this.options.opacity<1&&de(i,this.options.opacity)},_addTile:function(i,o){var c=this._getTilePos(i),p=this._tileCoordsToKey(i),b=this.createTile(this._wrapCoords(i),r(this._tileReady,this,i));this._initTile(b),this.createTile.length<2&&A(r(this._tileReady,this,i,null,b)),Ce(b,c),this._tiles[p]={el:b,coords:i,current:!0},o.appendChild(b),this.fire("tileloadstart",{tile:b,coords:i})},_tileReady:function(i,o,c){o&&this.fire("tileerror",{error:o,tile:c,coords:i});var p=this._tileCoordsToKey(i);c=this._tiles[p],c&&(c.loaded=+new Date,this._map._fadeAnimated?(de(c.el,0),E(this._fadeFrame),this._fadeFrame=A(this._updateOpacity,this)):(c.active=!0,this._pruneTiles()),o||(Kt(c.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:c.el,coords:i})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),zt.ielt9||!this._map._fadeAnimated?A(this._pruneTiles,this):setTimeout(r(this._pruneTiles,this),250)))},_getTilePos:function(i){return i.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(i){var o=new V(this._wrapX?u(i.x,this._wrapX):i.x,this._wrapY?u(i.y,this._wrapY):i.y);return o.z=i.z,o},_pxBoundsToTileRange:function(i){var o=this.getTileSize();return new ut(i.min.unscaleBy(o).floor(),i.max.unscaleBy(o).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var i in this._tiles)if(!this._tiles[i].loaded)return!1;return!0}});function Cm(i){return new Hr(i)}var Gs=Hr.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(i,o){this._url=i,o=_(this,o),o.detectRetina&&zt.retina&&o.maxZoom>0?(o.tileSize=Math.floor(o.tileSize/2),o.zoomReverse?(o.zoomOffset--,o.minZoom=Math.min(o.maxZoom,o.minZoom+1)):(o.zoomOffset++,o.maxZoom=Math.max(o.minZoom,o.maxZoom-1)),o.minZoom=Math.max(0,o.minZoom)):o.zoomReverse?o.minZoom=Math.min(o.maxZoom,o.minZoom):o.maxZoom=Math.max(o.minZoom,o.maxZoom),typeof o.subdomains=="string"&&(o.subdomains=o.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(i,o){return this._url===i&&o===void 0&&(o=!0),this._url=i,o||this.redraw(),this},createTile:function(i,o){var c=document.createElement("img");return oe(c,"load",r(this._tileOnLoad,this,o,c)),oe(c,"error",r(this._tileOnError,this,o,c)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(c.referrerPolicy=this.options.referrerPolicy),c.alt="",c.src=this.getTileUrl(i),c},getTileUrl:function(i){var o={r:zt.retina?"@2x":"",s:this._getSubdomain(i),x:i.x,y:i.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var c=this._globalTileRange.max.y-i.y;this.options.tms&&(o.y=c),o["-y"]=c}return x(this._url,e(o,this.options))},_tileOnLoad:function(i,o){zt.ielt9?setTimeout(r(i,this,null,o),0):i(null,o)},_tileOnError:function(i,o,c){var p=this.options.errorTileUrl;p&&o.getAttribute("src")!==p&&(o.src=p),i(c,o)},_onTileRemove:function(i){i.tile.onload=null},_getZoomForUrl:function(){var i=this._tileZoom,o=this.options.maxZoom,c=this.options.zoomReverse,p=this.options.zoomOffset;return c&&(i=o-i),i+p},_getSubdomain:function(i){var o=Math.abs(i.x+i.y)%this.options.subdomains.length;return this.options.subdomains[o]},_abortLoading:function(){var i,o;for(i in this._tiles)if(this._tiles[i].coords.z!==this._tileZoom&&(o=this._tiles[i].el,o.onload=f,o.onerror=f,!o.complete)){o.src=w;var c=this._tiles[i].coords;ue(o),delete this._tiles[i],this.fire("tileabort",{tile:o,coords:c})}},_removeTile:function(i){var o=this._tiles[i];if(o)return o.el.setAttribute("src",w),Hr.prototype._removeTile.call(this,i)},_tileReady:function(i,o,c){if(!(!this._map||c&&c.getAttribute("src")===w))return Hr.prototype._tileReady.call(this,i,o,c)}});function ju(i,o){return new Gs(i,o)}var Qu=Gs.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(i,o){this._url=i;var c=e({},this.defaultWmsParams);for(var p in o)p in this.options||(c[p]=o[p]);o=_(this,o);var b=o.detectRetina&&zt.retina?2:1,R=this.getTileSize();c.width=R.x*b,c.height=R.y*b,this.wmsParams=c},onAdd:function(i){this._crs=this.options.crs||i.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var o=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[o]=this._crs.code,Gs.prototype.onAdd.call(this,i)},getTileUrl:function(i){var o=this._tileCoordsToNwSe(i),c=this._crs,p=lt(c.project(o[0]),c.project(o[1])),b=p.min,R=p.max,z=(this._wmsVersion>=1.3&&this._crs===Zu?[b.y,b.x,R.y,R.x]:[b.x,b.y,R.x,R.y]).join(","),Q=Gs.prototype.getTileUrl.call(this,i);return Q+y(this.wmsParams,Q,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+z},setParams:function(i,o){return e(this.wmsParams,i),o||this.redraw(),this}});function Lm(i,o){return new Qu(i,o)}Gs.WMS=Qu,ju.wms=Lm;var Ai=Kn.extend({options:{padding:.1},initialize:function(i){_(this,i),l(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Kt(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var i={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(i.zoomanim=this._onAnimZoom),i},_onAnimZoom:function(i){this._updateTransform(i.center,i.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(i,o){var c=this._map.getZoomScale(o,this._zoom),p=this._map.getSize().multiplyBy(.5+this.options.padding),b=this._map.project(this._center,o),R=p.multiplyBy(-c).add(b).subtract(this._map._getNewPixelOrigin(i,o));zt.any3d?qe(this._container,R,c):Ce(this._container,R)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var i in this._layers)this._layers[i]._reset()},_onZoomEnd:function(){for(var i in this._layers)this._layers[i]._project()},_updatePaths:function(){for(var i in this._layers)this._layers[i]._update()},_update:function(){var i=this.options.padding,o=this._map.getSize(),c=this._map.containerPointToLayerPoint(o.multiplyBy(-i)).round();this._bounds=new ut(c,c.add(o.multiplyBy(1+i*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),td=Ai.extend({options:{tolerance:0},getEvents:function(){var i=Ai.prototype.getEvents.call(this);return i.viewprereset=this._onViewPreReset,i},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Ai.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var i=this._container=document.createElement("canvas");oe(i,"mousemove",this._onMouseMove,this),oe(i,"click dblclick mousedown mouseup contextmenu",this._onClick,this),oe(i,"mouseout",this._handleMouseOut,this),i._leaflet_disable_events=!0,this._ctx=i.getContext("2d")},_destroyContainer:function(){E(this._redrawRequest),delete this._ctx,ue(this._container),ke(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var i;this._redrawBounds=null;for(var o in this._layers)i=this._layers[o],i._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Ai.prototype._update.call(this);var i=this._bounds,o=this._container,c=i.getSize(),p=zt.retina?2:1;Ce(o,i.min),o.width=p*c.x,o.height=p*c.y,o.style.width=c.x+"px",o.style.height=c.y+"px",zt.retina&&this._ctx.scale(2,2),this._ctx.translate(-i.min.x,-i.min.y),this.fire("update")}},_reset:function(){Ai.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(i){this._updateDashArray(i),this._layers[l(i)]=i;var o=i._order={layer:i,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=o),this._drawLast=o,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(i){this._requestRedraw(i)},_removePath:function(i){var o=i._order,c=o.next,p=o.prev;c?c.prev=p:this._drawLast=p,p?p.next=c:this._drawFirst=c,delete i._order,delete this._layers[l(i)],this._requestRedraw(i)},_updatePath:function(i){this._extendRedrawBounds(i),i._project(),i._update(),this._requestRedraw(i)},_updateStyle:function(i){this._updateDashArray(i),this._requestRedraw(i)},_updateDashArray:function(i){if(typeof i.options.dashArray=="string"){var o=i.options.dashArray.split(/[, ]+/),c=[],p,b;for(b=0;b<o.length;b++){if(p=Number(o[b]),isNaN(p))return;c.push(p)}i.options._dashArray=c}else i.options._dashArray=i.options.dashArray},_requestRedraw:function(i){this._map&&(this._extendRedrawBounds(i),this._redrawRequest=this._redrawRequest||A(this._redraw,this))},_extendRedrawBounds:function(i){if(i._pxBounds){var o=(i.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new ut,this._redrawBounds.extend(i._pxBounds.min.subtract([o,o])),this._redrawBounds.extend(i._pxBounds.max.add([o,o]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var i=this._redrawBounds;if(i){var o=i.getSize();this._ctx.clearRect(i.min.x,i.min.y,o.x,o.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var i,o=this._redrawBounds;if(this._ctx.save(),o){var c=o.getSize();this._ctx.beginPath(),this._ctx.rect(o.min.x,o.min.y,c.x,c.y),this._ctx.clip()}this._drawing=!0;for(var p=this._drawFirst;p;p=p.next)i=p.layer,(!o||i._pxBounds&&i._pxBounds.intersects(o))&&i._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(i,o){if(this._drawing){var c,p,b,R,z=i._parts,Q=z.length,ot=this._ctx;if(Q){for(ot.beginPath(),c=0;c<Q;c++){for(p=0,b=z[c].length;p<b;p++)R=z[c][p],ot[p?"lineTo":"moveTo"](R.x,R.y);o&&ot.closePath()}this._fillStroke(ot,i)}}},_updateCircle:function(i){if(!(!this._drawing||i._empty())){var o=i._point,c=this._ctx,p=Math.max(Math.round(i._radius),1),b=(Math.max(Math.round(i._radiusY),1)||p)/p;b!==1&&(c.save(),c.scale(1,b)),c.beginPath(),c.arc(o.x,o.y/b,p,0,Math.PI*2,!1),b!==1&&c.restore(),this._fillStroke(c,i)}},_fillStroke:function(i,o){var c=o.options;c.fill&&(i.globalAlpha=c.fillOpacity,i.fillStyle=c.fillColor||c.color,i.fill(c.fillRule||"evenodd")),c.stroke&&c.weight!==0&&(i.setLineDash&&i.setLineDash(o.options&&o.options._dashArray||[]),i.globalAlpha=c.opacity,i.lineWidth=c.weight,i.strokeStyle=c.color,i.lineCap=c.lineCap,i.lineJoin=c.lineJoin,i.stroke())},_onClick:function(i){for(var o=this._map.mouseEventToLayerPoint(i),c,p,b=this._drawFirst;b;b=b.next)c=b.layer,c.options.interactive&&c._containsPoint(o)&&(!(i.type==="click"||i.type==="preclick")||!this._map._draggableMoved(c))&&(p=c);this._fireEvent(p?[p]:!1,i)},_onMouseMove:function(i){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var o=this._map.mouseEventToLayerPoint(i);this._handleMouseHover(i,o)}},_handleMouseOut:function(i){var o=this._hoveredLayer;o&&(Ie(this._container,"leaflet-interactive"),this._fireEvent([o],i,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(i,o){if(!this._mouseHoverThrottled){for(var c,p,b=this._drawFirst;b;b=b.next)c=b.layer,c.options.interactive&&c._containsPoint(o)&&(p=c);p!==this._hoveredLayer&&(this._handleMouseOut(i),p&&(Kt(this._container,"leaflet-interactive"),this._fireEvent([p],i,"mouseover"),this._hoveredLayer=p)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,i),this._mouseHoverThrottled=!0,setTimeout(r(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(i,o,c){this._map._fireDOMEvent(o,c||o.type,i)},_bringToFront:function(i){var o=i._order;if(o){var c=o.next,p=o.prev;if(c)c.prev=p;else return;p?p.next=c:c&&(this._drawFirst=c),o.prev=this._drawLast,this._drawLast.next=o,o.next=null,this._drawLast=o,this._requestRedraw(i)}},_bringToBack:function(i){var o=i._order;if(o){var c=o.next,p=o.prev;if(p)p.next=c;else return;c?c.prev=p:p&&(this._drawLast=p),o.prev=null,o.next=this._drawFirst,this._drawFirst.prev=o,this._drawFirst=o,this._requestRedraw(i)}}});function ed(i){return zt.canvas?new td(i):null}var Vr=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(i){return document.createElement("<lvml:"+i+' class="lvml">')}}catch{}return function(i){return document.createElement("<"+i+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),Im={_initContainer:function(){this._container=qt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Ai.prototype._update.call(this),this.fire("update"))},_initPath:function(i){var o=i._container=Vr("shape");Kt(o,"leaflet-vml-shape "+(this.options.className||"")),o.coordsize="1 1",i._path=Vr("path"),o.appendChild(i._path),this._updateStyle(i),this._layers[l(i)]=i},_addPath:function(i){var o=i._container;this._container.appendChild(o),i.options.interactive&&i.addInteractiveTarget(o)},_removePath:function(i){var o=i._container;ue(o),i.removeInteractiveTarget(o),delete this._layers[l(i)]},_updateStyle:function(i){var o=i._stroke,c=i._fill,p=i.options,b=i._container;b.stroked=!!p.stroke,b.filled=!!p.fill,p.stroke?(o||(o=i._stroke=Vr("stroke")),b.appendChild(o),o.weight=p.weight+"px",o.color=p.color,o.opacity=p.opacity,p.dashArray?o.dashStyle=v(p.dashArray)?p.dashArray.join(" "):p.dashArray.replace(/( *, *)/g," "):o.dashStyle="",o.endcap=p.lineCap.replace("butt","flat"),o.joinstyle=p.lineJoin):o&&(b.removeChild(o),i._stroke=null),p.fill?(c||(c=i._fill=Vr("fill")),b.appendChild(c),c.color=p.fillColor||p.color,c.opacity=p.fillOpacity):c&&(b.removeChild(c),i._fill=null)},_updateCircle:function(i){var o=i._point.round(),c=Math.round(i._radius),p=Math.round(i._radiusY||c);this._setPath(i,i._empty()?"M0 0":"AL "+o.x+","+o.y+" "+c+","+p+" 0,"+65535*360)},_setPath:function(i,o){i._path.v=o},_bringToFront:function(i){Ht(i._container)},_bringToBack:function(i){hn(i._container)}},Do=zt.vml?Vr:It,Gr=Ai.extend({_initContainer:function(){this._container=Do("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Do("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){ue(this._container),ke(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Ai.prototype._update.call(this);var i=this._bounds,o=i.getSize(),c=this._container;(!this._svgSize||!this._svgSize.equals(o))&&(this._svgSize=o,c.setAttribute("width",o.x),c.setAttribute("height",o.y)),Ce(c,i.min),c.setAttribute("viewBox",[i.min.x,i.min.y,o.x,o.y].join(" ")),this.fire("update")}},_initPath:function(i){var o=i._path=Do("path");i.options.className&&Kt(o,i.options.className),i.options.interactive&&Kt(o,"leaflet-interactive"),this._updateStyle(i),this._layers[l(i)]=i},_addPath:function(i){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(i._path),i.addInteractiveTarget(i._path)},_removePath:function(i){ue(i._path),i.removeInteractiveTarget(i._path),delete this._layers[l(i)]},_updatePath:function(i){i._project(),i._update()},_updateStyle:function(i){var o=i._path,c=i.options;o&&(c.stroke?(o.setAttribute("stroke",c.color),o.setAttribute("stroke-opacity",c.opacity),o.setAttribute("stroke-width",c.weight),o.setAttribute("stroke-linecap",c.lineCap),o.setAttribute("stroke-linejoin",c.lineJoin),c.dashArray?o.setAttribute("stroke-dasharray",c.dashArray):o.removeAttribute("stroke-dasharray"),c.dashOffset?o.setAttribute("stroke-dashoffset",c.dashOffset):o.removeAttribute("stroke-dashoffset")):o.setAttribute("stroke","none"),c.fill?(o.setAttribute("fill",c.fillColor||c.color),o.setAttribute("fill-opacity",c.fillOpacity),o.setAttribute("fill-rule",c.fillRule||"evenodd")):o.setAttribute("fill","none"))},_updatePoly:function(i,o){this._setPath(i,F(i._parts,o))},_updateCircle:function(i){var o=i._point,c=Math.max(Math.round(i._radius),1),p=Math.max(Math.round(i._radiusY),1)||c,b="a"+c+","+p+" 0 1,0 ",R=i._empty()?"M0 0":"M"+(o.x-c)+","+o.y+b+c*2+",0 "+b+-c*2+",0 ";this._setPath(i,R)},_setPath:function(i,o){i._path.setAttribute("d",o)},_bringToFront:function(i){Ht(i._path)},_bringToBack:function(i){hn(i._path)}});zt.vml&&Gr.include(Im);function nd(i){return zt.svg||zt.vml?new Gr(i):null}Me.include({getRenderer:function(i){var o=i.options.renderer||this._getPaneRenderer(i.options.pane)||this.options.renderer||this._renderer;return o||(o=this._renderer=this._createRenderer()),this.hasLayer(o)||this.addLayer(o),o},_getPaneRenderer:function(i){if(i==="overlayPane"||i===void 0)return!1;var o=this._paneRenderers[i];return o===void 0&&(o=this._createRenderer({pane:i}),this._paneRenderers[i]=o),o},_createRenderer:function(i){return this.options.preferCanvas&&ed(i)||nd(i)}});var id=Hs.extend({initialize:function(i,o){Hs.prototype.initialize.call(this,this._boundsToLatLngs(i),o)},setBounds:function(i){return this.setLatLngs(this._boundsToLatLngs(i))},_boundsToLatLngs:function(i){return i=Mt(i),[i.getSouthWest(),i.getNorthWest(),i.getNorthEast(),i.getSouthEast()]}});function Dm(i,o){return new id(i,o)}Gr.create=Do,Gr.pointsToPath=F,Ei.geometryToLayer=Eo,Ei.coordsToLatLng=jl,Ei.coordsToLatLngs=Ao,Ei.latLngToCoords=Ql,Ei.latLngsToCoords=Po,Ei.getFeature=Vs,Ei.asFeature=Ro,Me.mergeOptions({boxZoom:!0});var sd=mi.extend({initialize:function(i){this._map=i,this._container=i._container,this._pane=i._panes.overlayPane,this._resetStateTimeout=0,i.on("unload",this._destroy,this)},addHooks:function(){oe(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){ke(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){ue(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(i){if(!i.shiftKey||i.which!==1&&i.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Wi(),Ol(),this._startPoint=this._map.mouseEventToContainerPoint(i),oe(document,{contextmenu:cs,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(i){this._moved||(this._moved=!0,this._box=qt("div","leaflet-zoom-box",this._container),Kt(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(i);var o=new ut(this._point,this._startPoint),c=o.getSize();Ce(this._box,o.min),this._box.style.width=c.x+"px",this._box.style.height=c.y+"px"},_finish:function(){this._moved&&(ue(this._box),Ie(this._container,"leaflet-crosshair")),Or(),Ul(),ke(document,{contextmenu:cs,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(i){if(!(i.which!==1&&i.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(r(this._resetState,this),0);var o=new ct(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(o).fire("boxzoomend",{boxZoomBounds:o})}},_onKeyDown:function(i){i.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});Me.addInitHook("addHandler","boxZoom",sd),Me.mergeOptions({doubleClickZoom:!0});var rd=mi.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(i){var o=this._map,c=o.getZoom(),p=o.options.zoomDelta,b=i.originalEvent.shiftKey?c-p:c+p;o.options.doubleClickZoom==="center"?o.setZoom(b):o.setZoomAround(i.containerPoint,b)}});Me.addInitHook("addHandler","doubleClickZoom",rd),Me.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var od=mi.extend({addHooks:function(){if(!this._draggable){var i=this._map;this._draggable=new Zi(i._mapPane,i._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),i.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),i.on("zoomend",this._onZoomEnd,this),i.whenReady(this._onZoomEnd,this))}Kt(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Ie(this._map._container,"leaflet-grab"),Ie(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var i=this._map;if(i._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var o=Mt(this._map.options.maxBounds);this._offsetLimit=lt(this._map.latLngToContainerPoint(o.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(o.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;i.fire("movestart").fire("dragstart"),i.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(i){if(this._map.options.inertia){var o=this._lastTime=+new Date,c=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(c),this._times.push(o),this._prunePositions(o)}this._map.fire("move",i).fire("drag",i)},_prunePositions:function(i){for(;this._positions.length>1&&i-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var i=this._map.getSize().divideBy(2),o=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=o.subtract(i).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(i,o){return i-(i-o)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var i=this._draggable._newPos.subtract(this._draggable._startPos),o=this._offsetLimit;i.x<o.min.x&&(i.x=this._viscousLimit(i.x,o.min.x)),i.y<o.min.y&&(i.y=this._viscousLimit(i.y,o.min.y)),i.x>o.max.x&&(i.x=this._viscousLimit(i.x,o.max.x)),i.y>o.max.y&&(i.y=this._viscousLimit(i.y,o.max.y)),this._draggable._newPos=this._draggable._startPos.add(i)}},_onPreDragWrap:function(){var i=this._worldWidth,o=Math.round(i/2),c=this._initialWorldOffset,p=this._draggable._newPos.x,b=(p-o+c)%i+o-c,R=(p+o+c)%i-o-c,z=Math.abs(b+c)<Math.abs(R+c)?b:R;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=z},_onDragEnd:function(i){var o=this._map,c=o.options,p=!c.inertia||i.noInertia||this._times.length<2;if(o.fire("dragend",i),p)o.fire("moveend");else{this._prunePositions(+new Date);var b=this._lastPos.subtract(this._positions[0]),R=(this._lastTime-this._times[0])/1e3,z=c.easeLinearity,Q=b.multiplyBy(z/R),ot=Q.distanceTo([0,0]),_t=Math.min(c.inertiaMaxSpeed,ot),Nt=Q.multiplyBy(_t/ot),Qt=_t/(c.inertiaDeceleration*z),fe=Nt.multiplyBy(-Qt/2).round();!fe.x&&!fe.y?o.fire("moveend"):(fe=o._limitOffset(fe,o.options.maxBounds),A(function(){o.panBy(fe,{duration:Qt,easeLinearity:z,noMoveStart:!0,animate:!0})}))}}});Me.addInitHook("addHandler","dragging",od),Me.mergeOptions({keyboard:!0,keyboardPanDelta:80});var ad=mi.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(i){this._map=i,this._setPanDelta(i.options.keyboardPanDelta),this._setZoomDelta(i.options.zoomDelta)},addHooks:function(){var i=this._map._container;i.tabIndex<=0&&(i.tabIndex="0"),oe(i,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),ke(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var i=document.body,o=document.documentElement,c=i.scrollTop||o.scrollTop,p=i.scrollLeft||o.scrollLeft;this._map._container.focus(),window.scrollTo(p,c)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(i){var o=this._panKeys={},c=this.keyCodes,p,b;for(p=0,b=c.left.length;p<b;p++)o[c.left[p]]=[-1*i,0];for(p=0,b=c.right.length;p<b;p++)o[c.right[p]]=[i,0];for(p=0,b=c.down.length;p<b;p++)o[c.down[p]]=[0,i];for(p=0,b=c.up.length;p<b;p++)o[c.up[p]]=[0,-1*i]},_setZoomDelta:function(i){var o=this._zoomKeys={},c=this.keyCodes,p,b;for(p=0,b=c.zoomIn.length;p<b;p++)o[c.zoomIn[p]]=i;for(p=0,b=c.zoomOut.length;p<b;p++)o[c.zoomOut[p]]=-i},_addHooks:function(){oe(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){ke(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(i){if(!(i.altKey||i.ctrlKey||i.metaKey)){var o=i.keyCode,c=this._map,p;if(o in this._panKeys){if(!c._panAnim||!c._panAnim._inProgress)if(p=this._panKeys[o],i.shiftKey&&(p=G(p).multiplyBy(3)),c.options.maxBounds&&(p=c._limitOffset(G(p),c.options.maxBounds)),c.options.worldCopyJump){var b=c.wrapLatLng(c.unproject(c.project(c.getCenter()).add(p)));c.panTo(b)}else c.panBy(p)}else if(o in this._zoomKeys)c.setZoom(c.getZoom()+(i.shiftKey?3:1)*this._zoomKeys[o]);else if(o===27&&c._popup&&c._popup.options.closeOnEscapeKey)c.closePopup();else return;cs(i)}}});Me.addInitHook("addHandler","keyboard",ad),Me.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var ld=mi.extend({addHooks:function(){oe(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){ke(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(i){var o=Iu(i),c=this._map.options.wheelDebounceTime;this._delta+=o,this._lastMousePos=this._map.mouseEventToContainerPoint(i),this._startTime||(this._startTime=+new Date);var p=Math.max(c-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(r(this._performZoom,this),p),cs(i)},_performZoom:function(){var i=this._map,o=i.getZoom(),c=this._map.options.zoomSnap||0;i._stop();var p=this._delta/(this._map.options.wheelPxPerZoomLevel*4),b=4*Math.log(2/(1+Math.exp(-Math.abs(p))))/Math.LN2,R=c?Math.ceil(b/c)*c:b,z=i._limitZoom(o+(this._delta>0?R:-R))-o;this._delta=0,this._startTime=null,z&&(i.options.scrollWheelZoom==="center"?i.setZoom(o+z):i.setZoomAround(this._lastMousePos,o+z))}});Me.addInitHook("addHandler","scrollWheelZoom",ld);var Nm=600;Me.mergeOptions({tapHold:zt.touchNative&&zt.safari&&zt.mobile,tapTolerance:15});var cd=mi.extend({addHooks:function(){oe(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){ke(this._map._container,"touchstart",this._onDown,this)},_onDown:function(i){if(clearTimeout(this._holdTimeout),i.touches.length===1){var o=i.touches[0];this._startPos=this._newPos=new V(o.clientX,o.clientY),this._holdTimeout=setTimeout(r(function(){this._cancel(),this._isTapValid()&&(oe(document,"touchend",rn),oe(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",o))},this),Nm),oe(document,"touchend touchcancel contextmenu",this._cancel,this),oe(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function i(){ke(document,"touchend",rn),ke(document,"touchend touchcancel",i)},_cancel:function(){clearTimeout(this._holdTimeout),ke(document,"touchend touchcancel contextmenu",this._cancel,this),ke(document,"touchmove",this._onMove,this)},_onMove:function(i){var o=i.touches[0];this._newPos=new V(o.clientX,o.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(i,o){var c=new MouseEvent(i,{bubbles:!0,cancelable:!0,view:window,screenX:o.screenX,screenY:o.screenY,clientX:o.clientX,clientY:o.clientY});c._simulated=!0,o.target.dispatchEvent(c)}});Me.addInitHook("addHandler","tapHold",cd),Me.mergeOptions({touchZoom:zt.touch,bounceAtZoomLimits:!0});var hd=mi.extend({addHooks:function(){Kt(this._map._container,"leaflet-touch-zoom"),oe(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Ie(this._map._container,"leaflet-touch-zoom"),ke(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(i){var o=this._map;if(!(!i.touches||i.touches.length!==2||o._animatingZoom||this._zooming)){var c=o.mouseEventToContainerPoint(i.touches[0]),p=o.mouseEventToContainerPoint(i.touches[1]);this._centerPoint=o.getSize()._divideBy(2),this._startLatLng=o.containerPointToLatLng(this._centerPoint),o.options.touchZoom!=="center"&&(this._pinchStartLatLng=o.containerPointToLatLng(c.add(p)._divideBy(2))),this._startDist=c.distanceTo(p),this._startZoom=o.getZoom(),this._moved=!1,this._zooming=!0,o._stop(),oe(document,"touchmove",this._onTouchMove,this),oe(document,"touchend touchcancel",this._onTouchEnd,this),rn(i)}},_onTouchMove:function(i){if(!(!i.touches||i.touches.length!==2||!this._zooming)){var o=this._map,c=o.mouseEventToContainerPoint(i.touches[0]),p=o.mouseEventToContainerPoint(i.touches[1]),b=c.distanceTo(p)/this._startDist;if(this._zoom=o.getScaleZoom(b,this._startZoom),!o.options.bounceAtZoomLimits&&(this._zoom<o.getMinZoom()&&b<1||this._zoom>o.getMaxZoom()&&b>1)&&(this._zoom=o._limitZoom(this._zoom)),o.options.touchZoom==="center"){if(this._center=this._startLatLng,b===1)return}else{var R=c._add(p)._divideBy(2)._subtract(this._centerPoint);if(b===1&&R.x===0&&R.y===0)return;this._center=o.unproject(o.project(this._pinchStartLatLng,this._zoom).subtract(R),this._zoom)}this._moved||(o._moveStart(!0,!1),this._moved=!0),E(this._animRequest);var z=r(o._move,o,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=A(z,this,!0),rn(i)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,E(this._animRequest),ke(document,"touchmove",this._onTouchMove,this),ke(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});Me.addInitHook("addHandler","touchZoom",hd),Me.BoxZoom=sd,Me.DoubleClickZoom=rd,Me.Drag=od,Me.Keyboard=ad,Me.ScrollWheelZoom=ld,Me.TapHold=cd,Me.TouchZoom=hd,s.Bounds=ut,s.Browser=zt,s.CRS=Y,s.Canvas=td,s.Circle=Jl,s.CircleMarker=To,s.Class=q,s.Control=$n,s.DivIcon=Ju,s.DivOverlay=gi,s.DomEvent=jp,s.DomUtil=Kp,s.Draggable=Zi,s.Evented=it,s.FeatureGroup=wi,s.GeoJSON=Ei,s.GridLayer=Hr,s.Handler=mi,s.Icon=zs,s.ImageOverlay=Co,s.LatLng=wt,s.LatLngBounds=ct,s.Layer=Kn,s.LayerGroup=Fs,s.LineUtil=um,s.Map=Me,s.Marker=wo,s.Mixin=rm,s.Path=Xi,s.Point=V,s.PolyUtil=om,s.Polygon=Hs,s.Polyline=Ti,s.Popup=Lo,s.PosAnimation=Du,s.Projection=dm,s.Rectangle=id,s.Renderer=Ai,s.SVG=Gr,s.SVGOverlay=Ku,s.TileLayer=Gs,s.Tooltip=Io,s.Transformation=dt,s.Util=B,s.VideoOverlay=$u,s.bind=r,s.bounds=lt,s.canvas=ed,s.circle=ym,s.circleMarker=xm,s.control=Br,s.divIcon=Rm,s.extend=e,s.featureGroup=gm,s.geoJSON=Yu,s.geoJson=Sm,s.gridLayer=Cm,s.icon=_m,s.imageOverlay=wm,s.latLng=J,s.latLngBounds=Mt,s.layerGroup=mm,s.map=Qp,s.marker=vm,s.point=G,s.polygon=Mm,s.polyline=bm,s.popup=Am,s.rectangle=Dm,s.setOptions=_,s.stamp=l,s.svg=nd,s.svgOverlay=Em,s.tileLayer=ju,s.tooltip=Pm,s.transformation=et,s.version=t,s.videoOverlay=Tm;var Om=window.L;s.noConflict=function(){return window.L=Om,this},window.L=s}))});var M=(s,t,...e)=>{let n=document.createElement(s);if(t)for(let[r,a]of Object.entries(t))a==null||a===!1||(r==="class"?n.className=a:r==="style"&&typeof a=="object"?Object.assign(n.style,a):r.startsWith("on")?n.addEventListener(r.slice(2),a):r==="html"?n.innerHTML=a:n.setAttribute(r,a===!0?"":a));return e.flat(9).forEach(r=>{r!=null&&r!==!1&&n.append(r.nodeType?r:document.createTextNode(String(r)))}),n},_i=(s,t=document)=>t.querySelector(s),nc=class{constructor(){this.h={}}on(t,e){(this.h[t]=this.h[t]||[]).push(e)}emit(t,...e){(this.h[t]||[]).forEach(n=>n(...e))}},Pe=new nc,tt={link:null,tel:null,info:null,par:{},parList:[],events:[],rx:[],connected:!1,demo:!1,lastTel:0,tab:"setup",get(s,t){let e=this.par[s];return e===void 0?t:e}};function ie(s,t="info",e=3500){let n=_i("#toasts");n||(n=M("div",{id:"toasts"}),document.body.append(n));let r=M("div",{class:"toast "+t},s);n.append(r),setTimeout(()=>r.remove(),e)}var Et=(s,t=1)=>s==null||isNaN(s)?"\u2013":(+s).toFixed(t),us=s=>{s=Math.round(s);let t=Math.floor(s/60);return t>=60?`${Math.floor(t/60)} h ${t%60} min`:`${t} min ${String(s%60).padStart(2,"0")} s`},Sn=(s,t,e)=>Math.min(e,Math.max(t,s)),ds=(s,t="info")=>{tt.events.push({t:new Date,m:s,kind:t}),tt.events.length>300&&tt.events.shift(),Pe.emit("ev")};function Jn(s,t,e="application/json"){let n=M("a",{href:URL.createObjectURL(new Blob([t],{type:e})),download:s});document.body.append(n),n.click(),n.remove()}function Zs(s){return new Promise(t=>{let e=M("input",{type:"file",accept:s,onchange:()=>{let n=e.files[0];if(!n)return t(null);let r=new FileReader;r.onload=()=>t(r.result),r.readAsText(n)}});e.click()})}var An={get(s,t){try{let e=localStorage.getItem("fathom."+s);return e===null?t:JSON.parse(e)}catch{return t}},set(s,t){try{localStorage.setItem("fathom."+s,JSON.stringify(t))}catch{}}};var md=[[0,0,2,0,255,0,0,100,1,188],[0,1,1,255,0,0,0,100,0,100],[0,2,1,0,0,0,255,100,0,100],[0,3,1,255,0,0,0,100,0,100],[1,0,2,0,255,0,0,100,65535,100],[2,0,2,0,255,0,0,100,21845,500],[3,0,2,0,255,0,0,100,21845,125],[6,2,2,0,0,0,255,100,1,63],[7,1,5,255,0,0,0,100,0,0],[7,3,2,255,0,0,0,100,7,50],[9,0,1,0,255,0,0,100,0,100],[9,1,5,255,0,0,0,100,0,0],[9,3,2,255,0,0,0,100,7,50],[10,2,2,0,0,0,255,100,257,63],[10,3,2,255,0,0,0,100,13107,62],[11,0,1,0,255,0,0,100,0,100],[11,1,2,255,0,0,0,100,65535,100],[12,2,2,0,0,0,255,100,257,63],[12,3,2,255,0,0,0,100,13107,62]];var Bn=[{id:"SERVO_RUD_C",k:"servo.rud.center",d:1500,mn:1e3,mx:2e3,u:"us",g:"Servos",h:"Ruder Mitte"},{id:"SERVO_RUD_MIN",k:"servo.rud.min",d:1e3,mn:800,mx:1500,u:"us",g:"Servos",h:"Ruder Endanschlag min"},{id:"SERVO_RUD_MAX",k:"servo.rud.max",d:2e3,mn:1500,mx:2200,u:"us",g:"Servos",h:"Ruder Endanschlag max"},{id:"SERVO_RUD_REV",k:"servo.rud.rev",d:0,mn:0,mx:1,u:"",g:"Servos",h:"Ruder Richtung umkehren"},{id:"SERVO_STN_C",k:"servo.stern.center",d:1500,mn:1e3,mx:2e3,u:"us",g:"Servos",h:"Hecktiefenruder Mitte"},{id:"SERVO_STN_MIN",k:"servo.stern.min",d:1e3,mn:800,mx:1500,u:"us",g:"Servos",h:"Hecktiefenruder min"},{id:"SERVO_STN_MAX",k:"servo.stern.max",d:2e3,mn:1500,mx:2200,u:"us",g:"Servos",h:"Hecktiefenruder max"},{id:"SERVO_STN_REV",k:"servo.stern.rev",d:0,mn:0,mx:1,u:"",g:"Servos",h:"Hecktiefenruder umkehren"},{id:"SERVO_BOW_C",k:"servo.bow.center",d:1500,mn:1e3,mx:2e3,u:"us",g:"Servos",h:"Bugtiefenruder Mitte"},{id:"SERVO_BOW_MIN",k:"servo.bow.min",d:1e3,mn:800,mx:1500,u:"us",g:"Servos",h:"Bugtiefenruder min"},{id:"SERVO_BOW_MAX",k:"servo.bow.max",d:2e3,mn:1500,mx:2200,u:"us",g:"Servos",h:"Bugtiefenruder max"},{id:"SERVO_BOW_REV",k:"servo.bow.rev",d:0,mn:0,mx:1,u:"",g:"Servos",h:"Bugtiefenruder umkehren"},{id:"SERVO_US_DEG",k:"servo.us_per_deg",d:10,mn:2,mx:30,u:"us/deg",g:"Servos",h:"Servoweg pro Grad Ruderausschlag"},{id:"LIM_DEFLECT",k:"lim.deflect",d:25,mn:5,mx:45,u:"deg",g:"Limiten",h:"maximaler Ruderausschlag"},{id:"LIM_PITCH",k:"lim.pitch",d:20,mn:5,mx:45,u:"deg",g:"Limiten",h:"maximaler Nickwinkel (Tiefenregelung)"},{id:"LIM_THR",k:"lim.throttle",d:35,mn:5,mx:100,u:"%",g:"Limiten",h:"maximaler Vortrieb (Software Limit)"},{id:"LIM_DEPTH",k:"lim.depth",d:3,mn:.5,mx:90,u:"m",g:"Limiten",h:"Tauchtiefe Limit, darueber Failsafe"},{id:"THR_SLEW",k:"thr.slew",d:150,mn:10,mx:1e3,u:"%/s",g:"Limiten",h:"Gasrampe (Beschleunigung begrenzen)"},{id:"ESC_DEAD",k:"esc.deadband",d:25,mn:0,mx:100,u:"us",g:"Limiten",h:"ESC Totzone um 1500 us (nur bei esc.reverse 1)"},{id:"ESC_REV",k:"esc.reverse",d:0,mn:0,mx:1,u:"",g:"Limiten",h:"0 = ESC nur vorwaerts (Stop 1000 us), 1 = ESC mit Rueckwaertslauf (Stop 1500 us)"},{id:"PUMP_INV",k:"pump.invert",d:0,mn:0,mx:1,u:"",g:"Ballast",h:"1 = Pumpenrichtung tauschen (statt Schlaeuche umzustecken)"},{id:"PID_P_KP",k:"pid.pitch.kp",d:1.6,mn:0,mx:10,u:"",g:"Regler",h:"Nick P (deg Ruder je deg Fehler)"},{id:"PID_P_KI",k:"pid.pitch.ki",d:.15,mn:0,mx:5,u:"",g:"Regler",h:"Nick I"},{id:"PID_P_KD",k:"pid.pitch.kd",d:.35,mn:0,mx:5,u:"",g:"Regler",h:"Nick D (ueber Gyro)"},{id:"PID_D_KP",k:"pid.depth.kp",d:18,mn:0,mx:80,u:"deg/m",g:"Regler",h:"Tiefe P (Nickwinkel je m Fehler)"},{id:"PID_D_KI",k:"pid.depth.ki",d:1.2,mn:0,mx:20,u:"",g:"Regler",h:"Tiefe I"},{id:"PID_D_KD",k:"pid.depth.kd",d:25,mn:0,mx:100,u:"deg/m/s",g:"Regler",h:"Tiefe D (Daempfung ueber Sinkrate)"},{id:"PID_H_KP",k:"pid.head.kp",d:.6,mn:0,mx:5,u:"",g:"Regler",h:"Kurs P (deg Ruder je deg Fehler)"},{id:"PID_H_KI",k:"pid.head.ki",d:.02,mn:0,mx:2,u:"",g:"Regler",h:"Kurs I"},{id:"PID_H_KD",k:"pid.head.kd",d:.25,mn:0,mx:3,u:"",g:"Regler",h:"Kurs D (Gyro)"},{id:"MIX_BOW",k:"mix.bow",d:.5,mn:-1.5,mx:1.5,u:"",g:"Regler",h:"Anteil Bugtiefenruder am Nickbefehl"},{id:"BAL_FLOW",k:"bal.flow",d:4,mn:.5,mx:30,u:"%/s",g:"Ballast",h:"Fuellstand Aenderung bei 100 % Pumpe"},{id:"BAL_KP",k:"bal.depth_kp",d:60,mn:0,mx:300,u:"%/m",g:"Ballast",h:"Pumpe je m Tiefenfehler bei Stillstand"},{id:"BAL_SLOW",k:"bal.slow_thr",d:6,mn:0,mx:30,u:"%",g:"Ballast",h:"unter diesem Gas regelt die Pumpe die Tiefe"},{id:"SPD_MS",k:"spd.ms_per_pct",d:.014,mn:.002,mx:.05,u:"m/s",g:"Fahrt",h:"Geschwindigkeit je % Gas (Vorschau, Kurven)"},{id:"FLUID_RHO",k:"fluid.density",d:998,mn:990,mx:1030,u:"kg/m3",g:"Umgebung",h:"Wasserdichte (See 998, Salz 1025)"},{id:"P_ATM",k:"fluid.p_surface",d:1013,mn:850,mx:1100,u:"mbar",g:"Umgebung",h:"Oberflaechendruck (CAL DEPTH setzt ihn)"},{id:"VB_SCALE",k:"bat.scale",d:1,mn:.5,mx:2,u:"",g:"Batterie",h:"Spannungs Faktor (CAL VBAT)"},{id:"VB_WARN",k:"bat.warn",d:7,mn:5,mx:9,u:"V",g:"Batterie",h:"Warnschwelle 2S"},{id:"VB_CRIT",k:"bat.crit",d:6.4,mn:5,mx:9,u:"V",g:"Batterie",h:"kritisch, Failsafe"},{id:"LEAK_THR",k:"leak.threshold",d:.35,mn:.05,mx:.95,u:"",g:"Leckage",h:"Leckage klein: Notaufstieg, an der Oberflaeche ausschalten"},{id:"LEAK_HI",k:"leak.major",d:.7,mn:.1,mx:.99,u:"",g:"Leckage",h:"Leckage gross: Not Aus (Schwelle muss ueber leak.threshold liegen)"},{id:"LEAK_ACT",k:"leak.major_action",d:0,mn:0,mx:1,u:"",g:"Leckage",h:"grosse Leckage: 0 = Not Aus (alles stromlos, Beacon an), 1 = trotzdem Notaufstieg"},{id:"MIS_RTH",k:"mis.end_rth",d:1,mn:0,mx:1,u:"",g:"RTH",h:"nach Missionsende an der Oberflaeche abgleichen und Heimfahrt (mit Home und GPS)"},{id:"RC_ARM",k:"rc.ch.arm",d:5,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Arm (hoch = scharf)"},{id:"RC_MODE",k:"rc.ch.mode",d:6,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Modus (3 Stufen)"},{id:"RC_MIS",k:"rc.ch.mission",d:7,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Mission Start (hoch)"},{id:"RC_THR",k:"rc.ch.thr",d:3,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Vortrieb (Mitte = Stop)"},{id:"RC_RUD",k:"rc.ch.rud",d:4,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Seitenruder"},{id:"RC_ELE",k:"rc.ch.ele",d:2,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Tiefenruder"},{id:"RC_BOW",k:"rc.ch.bow",d:1,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal Bugruder (nur Manuell)"},{id:"FS_TIMEOUT",k:"fs.rc_timeout",d:1,mn:.2,mx:10,u:"s",g:"Failsafe",h:"RC Verlust bis Failsafe"},{id:"FS_PITCH",k:"fs.pitch",d:10,mn:0,mx:30,u:"deg",g:"Failsafe",h:"Nick nach oben beim Auftauchen"},{id:"FS_THR",k:"fs.throttle",d:15,mn:0,mx:50,u:"%",g:"Failsafe",h:"Vortrieb beim Auftauchen"},{id:"FS_ACT",k:"fs.rc_action",d:0,mn:0,mx:1,u:"",g:"Failsafe",h:"RC Verlust: 0 = Auftauchen, 1 = RTH (nur mit Home und GPS)"},{id:"MIS_RC",k:"mis.needs_rc",d:0,mn:0,mx:1,u:"",g:"Failsafe",h:"Mission nur mit RC Verbindung"},{id:"MIS_TOL",k:"mis.depth_tol",d:.15,mn:.03,mx:1,u:"m",g:"Failsafe",h:"Tiefen Toleranz fuer Schritt Ende"},{id:"RC_RTH",k:"rc.ch.rth",d:8,mn:1,mx:16,u:"ch",g:"RC",h:"Kanal RTH (hoch = Heimkehr)"},{id:"GPS_SATS",k:"gps.min_sats",d:5,mn:3,mx:12,u:"",g:"GPS",h:"Mindestzahl Satelliten fuer gueltigen Fix"},{id:"GPS_HDOP",k:"gps.max_hdop",d:3,mn:.8,mx:20,u:"",g:"GPS",h:"maximaler HDOP fuer gueltigen Fix"},{id:"RTH_THR",k:"rth.throttle",d:20,mn:5,mx:100,u:"%",g:"RTH",h:"Vortrieb beim Heimfahren an der Oberflaeche"},{id:"RTH_RAD",k:"rth.radius",d:3,mn:1,mx:50,u:"m",g:"RTH",h:"Ankunftsradius um Home"},{id:"BB_EN",k:"bb.enable",d:1,mn:0,mx:1,u:"",g:"Blackbox",h:"Blackbox aufzeichnen (nur im ARM Zustand)"},{id:"BB_HZ",k:"bb.hz",d:10,mn:1,mx:20,u:"Hz",g:"Blackbox",h:"Aufzeichnungsrate"},{id:"IMU_MODE",k:"imu.mode",d:1,mn:0,mx:1,u:"",g:"IMU",h:"0 IMU (ohne Kompass), 1 NDOF (mit Kompass, Standard)"},{id:"IMU_PITCH0",k:"imu.pitch_off",d:0,mn:-30,mx:30,u:"deg",g:"IMU",h:"Nick Offset (CAL LEVEL)"},{id:"IMU_ROLL0",k:"imu.roll_off",d:0,mn:-30,mx:30,u:"deg",g:"IMU",h:"Roll Offset (CAL LEVEL)"},{id:"IMU_YAW0",k:"imu.yaw_off",d:0,mn:-180,mx:180,u:"deg",g:"IMU",h:"Kurs Offset (Deklination)"},{id:"IMU_INV",k:"imu.invert",d:0,mn:0,mx:7,u:"",g:"IMU",h:"Vorzeichen umkehren: 1 Roll, 2 Nick, 4 Kurs (Nase hoch muss Nick + geben)"},{id:"IMU_MAP",k:"imu.axis_map",d:36,mn:0,mx:63,u:"",g:"IMU",h:"BNO055 AXIS_MAP_CONFIG (36 = Standard)"},{id:"IMU_SIGN",k:"imu.axis_sign",d:0,mn:0,mx:7,u:"",g:"IMU",h:"BNO055 AXIS_MAP_SIGN (Bit0 x, Bit1 y, Bit2 z)"},{id:"GPS_OFF_M",k:"gps.off_depth",d:1,mn:.3,mx:5,u:"m",g:"GPS",h:"GPS aus, sobald das Boot tiefer ist (unter 0.15 m wieder an)"},{id:"GPS_OFF_T",k:"gps.off_delay",d:3,mn:0,mx:30,u:"s",g:"GPS",h:"so lange tiefer als gps.off_depth, bevor das GPS ausgeht (gegen Wellen)"},{id:"LED_MASTER",k:"led.master",d:1,mn:0,mx:2,u:"",g:"LED",h:"Status LEDs: 0 aus, 1 an, 2 nur an der Oberflaeche (Muster: Seite Signale)"},{id:"LED_HW",k:"led.hw",d:0,mn:0,mx:2,u:"",g:"LED",h:"LED Hardware: 0 zwei 5 mm LEDs (GP11, GP28), 1 zwei RGB Pixel an GP11, 2 zwei RGBW Pixel an GP11 (Neustart)"},{id:"LED_TEST",k:"led.lamp_test",d:1,mn:0,mx:1,u:"",g:"LED",h:"Lampentest beim Einschalten"},{id:"BC_WATCH",k:"beacon.watch",d:1,mn:0,mx:1,u:"",g:"Beacon",h:"Pod ueberwacht das scharfe Boot und schlaegt Alarm, wenn es 8 s schweigt"},{id:"BC_MAX",k:"beacon.strobe_max",d:0,mn:0,mx:120,u:"min",g:"Beacon",h:"automatischer Strobe endet nach n Minuten, schont den Pod Akku (0 unbegrenzt)"}];var Pn={WAIT:{label:"Warten",color:"#7f8ea3",f:[["Dauer","s",10,0,3600,1]]},DIVE:{label:"Tauchen",color:"#2f7fd0",f:[["Zieltiefe","m",1.5,0,90,.1],["Max Sinkrate","m/s",.15,.02,1,.01],["Max Nick","deg",15,3,45,1],["Fahrt","%",25,0,100,1]]},CRUISE:{label:"Geradeaus",color:"#35a7a0",f:[["Fahrt","%",30,0,100,1],["Kurs (-1 halten)","deg",-1,-1,359,1],["Dauer","s",30,1,7200,1]]},TURN:{label:"Drehen",color:"#d9a441",f:[["Kurs","deg",90,-360,360,1],["0 absolut, 1 relativ","",0,0,1,1],["Max Gierrate","deg/s",15,2,60,1],["Fahrt","%",15,0,100,1]]},CURVE:{label:"Kurve",color:"#c9783a",f:[["Kurs\xE4nderung (+ rechts)","deg",90,-720,720,1],["Radius","m",1.5,.2,50,.1],["Fahrt","%",25,3,100,1]]},BALLAST:{label:"Ballast",color:"#8a6fd0",f:[["F\xFCllstand","%",50,0,100,1]]},PLANES:{label:"Ruder fix",color:"#b4568a",f:[["Bug","deg",0,-45,45,1],["Heck","deg",10,-45,45,1],["Dauer","s",10,.5,600,.5],["Fahrt","%",25,0,100,1]]},SURFACE:{label:"Auftauchen",color:"#5fb36a",f:[]},BEACON:{label:"Beacon",color:"#e0584f",f:[["Modus (0 aus, 2 weiss, 3 rot, 4 Alarm)","",2,0,4,1]]},REPEAT:{label:"Wiederholen",color:"#9aa7b8",f:[["Anzahl","x",2,1,50,1],["ab Schritt (0 = erster)","",0,0,63,1]]}},sc=["WAIT","DIVE","CRUISE","TURN","CURVE","BALLAST","PLANES","SURFACE","BEACON","REPEAT"],ko=64,Bo=s=>({t:s,v:Pn[s].f.map(t=>t[2]).concat([0,0,0,0]).slice(0,4)}),Uo=s=>(s%360+360)%360,ic=s=>(s=Uo(s),s>180?s-360:s),Pi=(s,t,e)=>Math.min(e,Math.max(t,s)),jm=180/Math.PI,Oo=Math.PI/180;function Fo(s){let t=(e,n)=>{let r=s?s(e):void 0;return r===void 0||isNaN(r)?n:r};return{ms:t("spd.ms_per_pct",.014),thrMax:t("lim.throttle",35),pitchMax:t("lim.pitch",20),depthMax:t("lim.depth",3),flow:t("bal.flow",4),fsThr:t("fs.throttle",15),fsPitch:t("fs.pitch",10),tol:t("mis.depth_tol",.15)}}function zo(s,t){let e=[];return s.length>ko&&e.push({i:-1,m:`Maximal ${ko} Schritte, Boot speichert nur diese.`}),s.forEach((n,r)=>{let a=n.v;if(n.t==="DIVE"&&(a[0]>t.depthMax&&e.push({i:r,m:`Tiefe ${a[0]} m \xFCber Limit ${t.depthMax} m (Failsafe l\xF6st aus).`}),a[2]>t.pitchMax&&e.push({i:r,m:`Nick ${a[2]}\xB0 wird auf ${t.pitchMax}\xB0 begrenzt.`})),["DIVE","CRUISE","TURN","CURVE","PLANES"].includes(n.t)){let l=n.t==="CRUISE"?a[0]:n.t==="CURVE"?a[2]:a[3];l>t.thrMax&&e.push({i:r,m:`Fahrt ${l} % wird auf Limit ${t.thrMax} % begrenzt.`})}n.t==="REPEAT"&&a[1]>=r&&e.push({i:r,m:"R\xFCcksprung muss vor diesem Schritt liegen."}),n.t==="CURVE"&&a[1]<.5&&e.push({i:r,m:"Radius unter 0.5 m ist mit Ruder allein bei 67 cm L\xE4nge nicht erreichbar."})}),s.length&&s[s.length-1].t!=="SURFACE"&&e.push({i:s.length-1,m:"Mission endet ohne Auftauchen: Boot h\xE4lt danach die letzte Tiefe (Modus DEPTH)."}),e}function Ho(s,t,e={}){let r=[],a=[],l={t:0,x:0,y:0,z:0,h:e.h0||0,p:0,v:0,f:0,thr:0},h=U=>{r.push({...l,i:U})},u=0,f=0,m=0,d={};h(-1);let g=4*3600,_=(U,C,D,O,A)=>{let E=0;for(;!U(E)&&E<D&&m<g;)C(E),E+=.1,m+=.1,l.t=m,Math.round(E/.1)%5===0&&h(O);E>=D&&a.push({i:O,m:`${A}: Ziel in ${Math.round(D)} s nicht erreicht (Vorschau).`}),h(O)},y=(U,C,D)=>{let O=Pi(U,0,t.thrMax)*t.ms;l.v=O,l.thr=Pi(U,0,t.thrMax),l.h=Uo(l.h+C*.1),l.p+=(D-l.p)*Math.min(1,.1/1.5);let A=O*Math.cos(l.p*Oo),E=-O*Math.sin(l.p*Oo);l.x+=A*Math.sin(l.h*Oo)*.1,l.y+=A*Math.cos(l.h*Oo)*.1,l.z=Math.max(0,l.z+E*.1)};for(;u<s.length&&f++<5e3&&m<g;){let U=s[u],C=U.v;switch(U.t){case"WAIT":_(D=>D>=C[0],()=>y(0,0,0),C[0]+1,u,"Warten");break;case"DIVE":{let D=C[0],O=C[1]>0?C[1]:.2,A=Math.max(C[3],0),E=Math.min(C[2]>0?C[2]:t.pitchMax,t.pitchMax),B=l.z,q=D>l.z?1:-1;_(()=>Math.abs(l.z-D)<t.tol*.5&&Math.abs(B-D)<1e-6,()=>{B+=q*O*.1,(q>0&&B>D||q<0&&B<D)&&(B=D);let Z=(B-l.z)*18,j=Pi(-Z,-E,E);y(A,0,j),A<1&&(l.z=Pi(l.z+Pi((B-l.z)*.8,-O,O)*.1,0,90),l.p=0)},Math.abs(D-l.z)/O*3+40,u,"Tauchen"),l.z=D;break}case"CRUISE":{let D=C[1]>=0?C[1]:l.h;_(O=>O>=C[2],()=>{let O=ic(D-l.h);y(C[0],Pi(O*2,-20,20),0)},C[2]+1,u,"Geradeaus");break}case"TURN":{let D=C[1]>.5?Uo(l.h+C[0]):Uo(C[0]),O=C[2]>0?C[2]:20;_(()=>Math.abs(ic(D-l.h))<1,()=>{let A=ic(D-l.h);y(C[3],Pi(A*3,-O,O),0)},90+360/O,u,"Drehen");break}case"CURVE":{let D=Math.max(C[2],1)*t.ms,O=D/Math.max(C[1],.05)*jm,A=0,E=Math.abs(C[0]);_(()=>A>=E,()=>{let B=Math.min(O*.1,E-A);A+=B,y(Math.max(C[2],1),(C[0]>=0?1:-1)*B/.1,0)},E/Math.max(O,1)*3+40,u,"Kurve");break}case"BALLAST":{let D=Pi(C[0],0,100);_(()=>Math.abs(l.f-D)<.5,()=>{l.f+=Math.sign(D-l.f)*Math.min(t.flow*.1,Math.abs(D-l.f)),y(0,0,0)},240,u,"Ballast");break}case"PLANES":{let D=Pi((C[1]+.5*C[0])*.8,-t.pitchMax,t.pitchMax);_(O=>O>=C[2],()=>y(C[3],0,D),C[2]+1,u,"Ruder fix");break}case"SURFACE":{_(()=>l.z<=.12,()=>{l.f=Math.max(0,l.f-t.flow*.1),y(t.fsThr,0,t.fsPitch),l.z=Math.max(0,l.z-.2*.1*0)},600,u,"Auftauchen"),l.z=0,l.p=0,l.v=0,l.thr=0,h(u),u=s.length;continue}case"REPEAT":{let D=u;if(d[D]=(d[D]||0)+1,d[D]<=C[0]&&C[1]<u){u=Math.max(0,Math.round(C[1]));continue}break}}u++}let S=r,x=0,v=0,P=0,w={x0:0,x1:0,y0:0,y1:0,z1:0};for(let U=1;U<S.length;U++){let C=S[U-1],D=S[U];x+=Math.hypot(D.x-C.x,D.y-C.y,D.z-C.z);let O=D.t-C.t,A=(D.thr||0)/100;P+=O*(e.pBase??1.5+(e.pMax??25)*A*A*A),D.thr>1&&(v+=O)}S.forEach(U=>{w.x0=Math.min(w.x0,U.x),w.x1=Math.max(w.x1,U.x),w.y0=Math.min(w.y0,U.y),w.y1=Math.max(w.y1,U.y),w.z1=Math.max(w.z1,U.z)});let T=S[S.length-1]||l;return{pts:S,notes:a,stats:{dur:T.t,dist:x,maxDepth:w.z1,bb:w,wh:P/3600,cruiseT:v,avgV:T.t>0?x/T.t:0,endDist:Math.hypot(T.x,T.y),final:{x:T.x,y:T.y,z:T.z},w:w.x1-w.x0,l:w.y1-w.y0}}}var rc={"Pool Funktionstest":[["WAIT",5],["BALLAST",20],["DIVE",1,.1,12,15],["CRUISE",20,-1,30],["TURN",90,1,12,12],["CRUISE",20,-1,20],["SURFACE"]],"Rechteck Kurs 3 m":[["DIVE",1.5,.15,12,20],["CRUISE",25,0,20],["TURN",90,1,15,15],["REPEAT",3,1],["SURFACE"]].map((s,t)=>s),"Yo Yo 0.5 bis 2 m":[["DIVE",.5,.15,15,20],["DIVE",2,.15,15,25],["DIVE",.5,.15,15,25],["REPEAT",3,1],["SURFACE"]],"Kreis Radius 1.5 m":[["DIVE",1,.15,15,20],["CURVE",360,1.5,25],["CURVE",-360,1.5,25],["SURFACE"]],"See Tauchgang 20 m":[["WAIT",10],["DIVE",20,.2,18,30],["CRUISE",30,0,120],["TURN",180,1,12,15],["CRUISE",30,-1,120],["SURFACE"]]};function oc(s){return rc[s].map(t=>{let e=Bo(t[0]);return t.slice(1).forEach((n,r)=>{e.v[r]=n}),e})}var gd=s=>s.map(t=>`MIS ADD ${t.t} ${t.v.map(e=>+e.toFixed(3)).join(" ")}`);function Vo(s){return s.map(t=>({t:t[0],v:[t[1],t[2],t[3],t[4]]})).filter(t=>Pn[t.t])}function Xs(){if(Xs.c)return Xs.c;let s=10,t=2400,e=36,n=new Uint8Array(16+t*e),r=new DataView(n.buffer);n.set([70,66,66,49],0),r.setUint16(4,e,!0),r.setUint16(6,s,!0),r.setUint32(8,100,!0);let a=47.05,l=8.3,h=90,u=0,f={lat:a,lon:l};for(let m=0;m<t;m++){let d=m/s,g=0,_=2,y=0,S=0;d<15?_=0:d<45?(_=2,y=2.5,g=Math.min(2.5,(d-15)*.12)):d<160?(_=3,y=2.5,g=2.5+.05*Math.sin(d/4),S=25,h=90+80*Math.sin((d-45)/18)):d<190?(_=3,y=0,g=Math.max(0,2.5-(d-160)*.09),S=20):(_=5,S=d<215?20:0),u=g>.5?Math.min(60,u+.2):Math.max(0,u-.2);let x=16+m*e;r.setUint32(x,Math.round(d*1e3),!0),r.setInt16(x+4,Math.round(g*100),!0),r.setInt16(x+6,Math.round(y*100),!0),r.setInt16(x+8,Math.round(Math.sin(d/3)*20),!0),r.setInt16(x+10,Math.round((y>g?40:-40*(g>.2?1:0))+Math.sin(d)*10),!0),r.setUint16(x+12,Math.round((h%360+360)%360*10),!0),r.setUint16(x+14,Math.round((8.3-d*.0016)*100),!0),r.setUint8(x+16,8),r.setUint8(x+17,_);let v=g<.2&&d>2?4:0;r.setUint8(x+18,3|v|8|16|(_===3?32:0)),r.setUint8(x+19,Math.round(u)),r.setInt8(x+20,S),r.setInt8(x+21,Math.round((u-g*20)/10)),r.setInt8(x+22,Math.round(Math.sin(d/2)*12)),r.setInt8(x+23,Math.round((y-g)*8)),r.setInt8(x+24,Math.round((y-g)*4));let P=S/100*.5;l+=Math.sin(h*Math.PI/180)*P*.1/75900,a+=Math.cos(h*Math.PI/180)*P*.1/111200,v&&(f={lat:a,lon:l}),r.setInt32(x+25,Math.round(f.lat*1e7),!0),r.setInt32(x+29,Math.round(f.lon*1e7),!0),r.setUint8(x+33,v?9:0),r.setInt8(x+34,-60)}return Xs.c=n}function Wr(){let s=[[0,255,0,0],[255,0,0,0],[0,0,0,255],[255,0,0,0]],t=[];for(let e=0;e<13;e++)for(let n=0;n<4;n++){let r=md.find(a=>a[0]===e&&a[1]===n);t.push(r?r.slice():[e,n,0,...s[n],100,65535,100])}return t}var ac=class{constructor(){this.h={}}on(t,e){return(this.h[t]=this.h[t]||[]).push(e),()=>{this.h[t]=this.h[t].filter(n=>n!==e)}}emit(t,...e){(this.h[t]||[]).forEach(n=>{try{n(...e)}catch(r){console.error(r)}})}};function _d(s){let t=4294967295;for(let e=0;e<s.length;e++){t^=s[e];for(let n=0;n<8;n++)t=t>>>1^3988292384&-(t&1)}return~t>>>0}var Zr=class extends ac{constructor(){super(),this.q=[],this.cur=null,this.buf="",this.connected=!1,this.demo=!1}_feed(t){this.buf+=t;let e;for(;(e=this.buf.indexOf(`
`))>=0;){let n=this.buf.slice(0,e).replace(/\r$/,"");this.buf=this.buf.slice(e+1),n&&this._line(n)}this.buf.length>2e4&&(this.buf="")}_line(t){if(this.emit("rx",t),t.startsWith("T {")){try{this.emit("tel",JSON.parse(t.slice(2)))}catch{}return}if(t.startsWith("EV ")){this.emit("ev",t.slice(3));return}if(this.cur&&this.cur.dump){let e=this.cur;if(t.startsWith("BBD ")){let n=/^BBD (\d+) ([0-9a-f]*)$/.exec(t);if(!n)return;let r=+n[1],a=n[2];for(let l=0;l<a.length;l+=2)e.bytes.push(parseInt(a.substr(l,2),16));e.bytes.length!==r+a.length/2&&(e.bad=!0),clearTimeout(e.to),e.to=setTimeout(()=>{this.cur===e&&(this.cur=null,e.res({ok:!1,text:"ERR Zeit\xFCberschreitung beim Download"}),this._next())},4e3),e.prog&&e.prog(e.bytes.length);return}if(t.startsWith("BBE ")){let n=/^BBE (\d+) ([0-9a-f]+)$/.exec(t);this.cur=null,clearTimeout(e.to);let r=Uint8Array.from(e.bytes),a=n&&+n[1]===r.length&&!e.bad&&_d(r)===parseInt(n[2],16)>>>0;e.res({ok:!!a,text:a?"OK":"ERR Pr\xFCfsumme oder L\xE4nge falsch (Funk gest\xF6rt?)",bytes:r}),this._next();return}}if(/^(OK|ERR|PAR|INFO|MIS|BB|HOME|LGT)\b/.test(t)&&this.cur){let e=this.cur;this.cur=null,clearTimeout(e.to);let n=t;if(/^(PAR|INFO|MIS|BB|HOME|LGT)\s/.test(t))try{n=JSON.parse(t.slice(t.indexOf(" ")+1))}catch{e.res({ok:!1,text:"JSON Fehler"}),this._next();return}e.res({ok:!t.startsWith("ERR"),text:t,data:n}),this._next();return}t.startsWith("ERR")&&this.emit("ev",t)}cmd(t,e=2500){return new Promise(n=>{this.q.push({text:t,res:n,timeout:e}),this.cur||this._next()})}_next(){if(this.cur||!this.q.length)return;let t=this.q.shift();this.cur=t,t.to=setTimeout(()=>{this.cur===t&&(this.cur=null,t.res({ok:!1,text:"ERR Zeit\xFCberschreitung",timeout:!0}),this._next())},t.timeout),this.emit("tx",t.text),this._write(t.text+`
`)}dump(t,e){return new Promise(n=>{this.q.push({text:"BB DUMP "+t,res:n,timeout:6e3,dump:!0,bytes:[],prog:e}),this.cur||this._next()})}fire(t){this.emit("tx",t),this._write(t+`
`)}},Xr=class extends Zr{static supported(){return"serial"in navigator}async connect(t){this.port=t||await navigator.serial.requestPort({filters:[{usbVendorId:11914},{usbVendorId:9114},{usbVendorId:12346}]}).catch(()=>navigator.serial.requestPort()),await this.port.open({baudRate:115200}),this.writer=this.port.writable.getWriter(),this.connected=!0,this.keep=!0,this._loop()}async _loop(){let t=new TextDecoder;try{for(;this.keep&&this.port.readable;){this.reader=this.port.readable.getReader();try{for(;;){let{value:e,done:n}=await this.reader.read();if(n)break;e&&this._feed(t.decode(e,{stream:!0}))}}finally{this.reader.releaseLock()}}}catch(e){this.emit("error",e)}this._closed()}_closed(){this.connected&&(this.connected=!1,this.emit("close"))}async _write(t){try{await this.writer.write(new TextEncoder().encode(t))}catch(e){this.emit("error",e)}}async disconnect(){this.keep=!1;try{await this.reader?.cancel()}catch{}try{this.writer?.releaseLock()}catch{}try{await this.port?.close()}catch{}this._closed()}},Go=class extends Zr{constructor(t){super(),this.host=t||location.hostname||"192.168.4.1",this.wifi=!0}connect(){return new Promise((t,e)=>{let n=!1,r=this.ws=new WebSocket(`ws://${this.host}:81/`),a=setTimeout(()=>{if(!n){n=!0;try{r.close()}catch{}e(new Error("keine Antwort von "+this.host))}},5e3);r.onopen=()=>{n||(n=!0,clearTimeout(a),this.connected=!0,t())},r.onmessage=l=>this._feed(String(l.data)+`
`),r.onerror=()=>{n||(n=!0,clearTimeout(a),e(new Error("WebSocket Fehler (https Seite? WLAN verbunden?)")))},r.onclose=()=>{this.connected&&(this.connected=!1,this.emit("close"))}})}_write(t){try{this.ws&&this.ws.readyState===1&&this.ws.send(t.replace(/\n$/,""))}catch(e){this.emit("error",e)}}async disconnect(){this.noretry=!0;try{this.ws&&this.ws.close()}catch{}this.connected&&(this.connected=!1,this.emit("close"))}},Wo=class extends Zr{constructor(){super(),this.demo=!0,this.par={},Bn.forEach(t=>{this.par[t.k]=t.d}),this.steps=[],this.hz=0,this.armed=0,this.mode="MANUAL",this.tst=0,this.tServo=[1500,1500,1500],this.tThr=0,this.tPump=0,this.tWd=0,this.fill=0,this.depth=0,this.t0=performance.now(),this.mis=null,this.leak=.03,this.home=null,this.gx=0,this.gy=0,this.att=[0,0,0],this.vb=8.1,this.fs="",this.calst=[0,1,2,1]}async connect(){this.connected=!0,this.timer=setInterval(()=>this._tick(),50),setTimeout(()=>this.emit("ev","DEMO Boot verbunden (simuliert)"),50)}async disconnect(){clearInterval(this.timer),this.connected=!1,this.emit("close")}_reply(t){setTimeout(()=>this._feed(t+`
`),12)}_write(t){let e=t.trim().split(/\s+/),n=(e[0]||"").toUpperCase(),r=a=>this._reply(a);if(n==="PING")r("OK PONG");else if(n==="INFO")r("INFO "+JSON.stringify({fw:"FATHOM",ver:"0.5.0 DEMO",hw:"Simulation",params:Bn.length,maxsteps:64}));else if(n==="STREAM")this.hz=Math.max(0,Math.min(50,+e[1]||0)),r("OK");else if(n==="GET")r("PAR "+JSON.stringify(Bn.map(a=>({k:a.k,v:this.par[a.k],d:a.d,mn:a.mn,mx:a.mx,u:a.u,g:a.g,h:a.h}))));else if(n==="SET"){let a=Bn.find(l=>l.k===e[1]);a?(this.par[a.k]=Math.min(a.mx,Math.max(a.mn,+e[2])),r("OK")):r("ERR unbekannt")}else if(n==="LIGHT"){let a=(e[1]||"").toUpperCase();if(this.light||(this.light=Wr()),a==="GET")r("LGT "+JSON.stringify(this.light));else if(a==="SET"){let l=e.slice(2).map(u=>Number(u)),h=this.light.find(u=>u[0]===l[0]&&u[1]===l[1]);if(!h||e.length<12||!(l[2]>=0&&l[2]<=5))r("ERR Zustand, Licht oder Art ungueltig");else{for(let u=2;u<10;u++)h[u]=l[u];r("OK")}}else a==="DEFAULTS"?(this.light=Wr(),r("OK")):a==="SHOW"?this.armed?r("ERR nur entschaerft"):(this.preview=+e[2]||0,this.previewUntil=performance.now()+(+e[3]||10)*1e3,r("OK")):r("ERR LIGHT GET, SET, DEFAULTS oder SHOW")}else if(n==="BEACON"){let a=+e[1];a>=0&&a<=4?(this.bc=a,r("OK")):r("ERR BEACON 0 bis 4")}else if(n==="SAVE"||n==="LOAD")r("OK");else if(n==="DEFAULTS")Bn.forEach(a=>{this.par[a.k]=a.d}),r("OK");else if(n==="ARM")this.tst?r("ERR Testmodus"):(this.armed=1,this.home={lat:47.05+this.gy/111200,lon:8.3+this.gx/75900},r("OK"));else if(n==="DISARM")this.armed=0,this.mis=null,r("OK");else if(n==="MODE"){let a=(e[1]||"MANUAL").toUpperCase();a==="RTH"&&!this.home?r("ERR kein Home"):(this.mode=a,r("OK"))}else if(n==="TEST"){let a=(e[1]||"").toUpperCase();a==="ENABLE"?+e[2]&&this.armed?r("ERR scharf"):(this.tst=+e[2]?1:0,this.tst||(this.tThr=0,this.tPump=0),r("OK")):this.tst?a==="SERVO"?(this.tServo[+e[2]]=+e[3],r("OK")):a==="MOTOR"?(this.tThr=Math.max(-100,Math.min(100,+e[2]))/100,this.tWd=1.5,r("OK")):a==="PUMP"?(this.tPump=Math.max(-100,Math.min(100,+e[2]))/100,this.tWd=1.5,r("OK")):a==="OFF"?(this.tThr=0,this.tPump=0,this.tServo=[1500,1500,1500],r("OK")):r("ERR"):r("ERR kein Testmodus")}else if(n==="CAL")(e[1]||"").toUpperCase()==="DEPTH"&&(this.depth=0),r("OK");else if(n==="MIS"){let a=(e[1]||"").toUpperCase();if(a==="CLEAR")this.steps=[],r("OK");else if(a==="ADD")this.steps.push([e[2].toUpperCase(),+e[3]||0,+e[4]||0,+e[5]||0,+e[6]||0]),r("OK "+this.steps.length);else if(a==="GET")r("MIS "+JSON.stringify(this.steps));else if(a==="SAVE")r("OK");else if(a==="START"){if(!this.armed){r("ERR nicht scharf");return}let l=Fo(h=>this.par[h]);this.mis={plan:Ho(Vo(this.steps),l),t:0,last:-1},this.mode="MISSION",r("OK")}else a==="STOP"?(this.mis=null,this.mode="DEPTH",r("OK")):r("ERR")}else if(n==="HOME")(e[1]||"").toUpperCase()==="SET"?(this.home={lat:47.05+this.gy/111200,lon:8.3+this.gx/75900},r("OK")):r("HOME "+JSON.stringify({set:this.home?1:0,lat:this.home?this.home.lat:0,lon:this.home?this.home.lon:0}));else if(n==="BB"){let a=(e[1]||"").toUpperCase();if(this.armed)r("ERR erst DISARM");else if(a==="INFO")r("BB "+JSON.stringify({free:this.bbs?64e4:104e4,total:1048576,rec:36}));else if(a==="LIST")r("BB "+JSON.stringify(this.bbs===!1?[]:[{f:"bb_001.bin",n:Xs().length}]));else if(a==="CLEAR")this.bbs=!1,r("OK");else if(a==="DUMP"){if(this.bbs===!1||+e[2]!=1){r("ERR Datei fehlt");return}let l=Xs(),h=0,u=0,f=setInterval(()=>{for(let m=0;m<40&&h<l.length;m++){let d=l.slice(h,h+48);this._feed("BBD "+h+" "+Array.from(d,g=>g.toString(16).padStart(2,"0")).join("")+`
`),h+=d.length}h>=l.length&&(clearInterval(f),this._feed("BBE "+l.length+" "+_d(l).toString(16).padStart(8,"0")+`
`))},20)}else r("ERR BB ?")}else r(n==="REBOOT"||n==="BOOTSEL"?"OK":"ERR unbekannter Befehl")}_tick(){let e=performance.now()-this.t0,n=0,r=this.att[2],a=this.depth,l=0,h=-1,u=0,f="-",m=0,d=0,g=0,_=0;if(this.tst&&(this.tWd-=.05,this.tWd<=0&&(this.tThr=0,this.tPump=0),this.fill=Math.min(100,Math.max(0,this.fill+this.tPump*this.par["bal.flow"]*.05)),l=this.tThr),this.mis){this.mis.t+=.05*(this.speed||1);let w=this.mis.plan.pts,T=w.findIndex(U=>U.t>=this.mis.t);if(T<0)this.mis=null,this.mode="DEPTH",this.emit("ev","MISSION ENDE");else{let U=w[T];a=U.z,n=U.p,r=U.h,this.fill=U.f,l=U.thr/100,h=U.i,u=1,f=this.steps[h]?this.steps[h][0]:"-",m=this.mis.t,h!==this.mis.last&&(this.mis.last=h,this.emit("ev",`SCHRITT ${h+1} ${f}`))}}else this.tst||(a+=(0-a)*.02,n=Math.sin(e/3e3)*.4);if(this.depth=a,this.att=[Math.sin(e/2500)*.6,n,r],this.vb=Math.max(6.6,8.2-e/1e3*4e-4-l*l*.15),!this.hz||e-(this._lt||-1e9)<1e3/this.hz)return;this._lt=e;let y=(w,T,U,C)=>Math.round(Math.min(this.par[C],Math.max(this.par[U],this.tst?this.tServo[w]:this.par[T])));if(this.mode==="RTH"&&this.home){let w=(this.home.lon-8.3)*75900,T=(this.home.lat-47.05)*111200,U=w-this.gx,C=T-this.gy,D=Math.hypot(U,C);D>3&&(this.gx+=U/D*.5*.05*3,this.gy+=C/D*.5*.05*3,r=(Math.atan2(U,C)*180/Math.PI+360)%360,this.att[2]=r)}else this.armed&&this.mode!=="MANUAL"&&(this.gx+=Math.sin(r*Math.PI/180)*.15*.05,this.gy+=Math.cos(r*Math.PI/180)*.15*.05);let S=47.05+this.gy/111200,x=8.3+this.gx/75900,v=this.home?Math.hypot((this.home.lon-8.3)*75900-this.gx,(this.home.lat-47.05)*111200-this.gy):0,P={t:Math.round(e),m:this.mode,arm:this.armed,tst:this.tst,att:this.att.map(w=>+w.toFixed(1)),gyr:[.1,+(Math.cos(e/3e3)*.4).toFixed(1),0],d:+a.toFixed(3),tmp:14.2,prs:+(this.par["fluid.p_surface"]+a*this.par["fluid.density"]*.0981).toFixed(1),vb:+this.vb.toFixed(2),lk:this.leak,bc:this.bc||(this.armed?1:0),es:0,rc:[1500,1500,1500,1500,1e3,1e3,1e3,1e3],rcok:1,rssi:-62,out:{r:_,s:g,b:d,us:[y(0,"servo.rud.center","servo.rud.min","servo.rud.max"),y(1,"servo.stern.center","servo.stern.min","servo.stern.max"),y(2,"servo.bow.center","servo.bow.min","servo.bow.max")],mu:Math.round(1500+l*500),thr:l,pmp:this.tPump},fill:+this.fill.toFixed(1),tg:{d:this.mis?a:0,p:n,h:r,t:l*100},mis:{run:u,i:h,n:this.steps.length,ty:f,t:+m.toFixed(1)},cal:this.calst,ok:[1,1],fs:this.fs,w:"",lp:640,ls:this.preview&&performance.now()<this.previewUntil?this.preview|1:1|(this.armed?2:0)|(this.tst?4:0)|(this.mis&&u?8:0)|(this.armed&&a>1?16:0)|(this.mode==="RTH"?32:0)|((this.bc||0)===2?64:0)|(this.vb<this.par["bat.warn"]?128:0)|(this.mode==="FAILSAFE"?512:0)|((this.bc||0)===4?1024:0),gps:{ok:a<.3?1:0,lat:+S.toFixed(6),lon:+x.toFixed(6),sat:9,hd:.9,spd:this.armed?.5:0,home:this.home?1:0,dist:+v.toFixed(1),brg:0,ph:this.mode==="RTH"?v>3?3:4:0},bb:0};this._feed("T "+JSON.stringify(P)+`
`)}};var Se={bg:"#071017",line:"#22323f",dim:"#71818e",txt:"#dfe7ec",acc:"#ff7a59",sky:"#0d2233",gnd:"#04080c",ok:"#4fb477",warn:"#e0a93b",bad:"#e0584b",tgt:"#56c8dc",grid:"#122029"},Zt=Se;function Zo(s,t){let e=M("canvas",{width:s*2,height:t*2,style:{width:s+"px",height:"auto",maxWidth:"100%"}}),n=e.getContext("2d");return n.scale(2,2),{c:e,x:n,w:s,h:t}}var eg='Bahnschrift, "DIN Alternate", "Arial Narrow", Arial, sans-serif',dn=(s,t,e="")=>{s.font=`${e} ${t}px ${eg}`},We=Math.PI/180,vd=(s,t=1)=>{let e=+s.toFixed(t);return(e>0?"+":e<0?"\u2212":"\xB1")+Math.abs(e).toFixed(t)};function xd(s,t,e,n){let r=s.createRadialGradient(t,e-n*.3,n*.1,t,e,n);r.addColorStop(0,"#0e1b25"),r.addColorStop(1,"#03070a"),s.fillStyle=r,s.beginPath(),s.arc(t,e,n,0,7),s.fill(),s.lineWidth=3,s.strokeStyle="#1d2a35",s.stroke(),s.lineWidth=1,s.strokeStyle="#3a4c5a",s.beginPath(),s.arc(t,e,n-2.5,0,7),s.stroke(),s.fillStyle="#25333e",[45,135,225,315].forEach(a=>{s.beginPath(),s.arc(t+Math.cos(a*We)*(n+.5),e+Math.sin(a*We)*(n+.5),2.2,0,7),s.fill()})}function ng(s,t,e){let n=t*.075,r=t/2-n*1.6,a=-t*.18,l=-t/2+n*.5,h=n*.28;s.fillStyle=e,s.beginPath(),s.moveTo(a,-n),s.lineTo(r,-n),s.bezierCurveTo(r+n*1.25,-n,t/2,-n*.55,t/2,0),s.bezierCurveTo(t/2,n*.55,r+n*1.25,n,r,n),s.lineTo(a,n),s.bezierCurveTo(a-t*.12,n,l+n*.4,h,l,h),s.lineTo(l,-h),s.bezierCurveTo(l+n*.4,-h,a-t*.12,-n,a,-n),s.closePath(),s.fill(),s.beginPath(),s.moveTo(t*.08,-n),s.lineTo(t*.115,-n*2.3),s.lineTo(t*.22,-n*2.3),s.lineTo(t*.25,-n),s.closePath(),s.fill();let u=l+n*.55;s.beginPath(),s.moveTo(u+n*1.6,-n*.45),s.lineTo(u+n*.2,-n*1.65),s.lineTo(u-n*.15,-n*1.65),s.lineTo(u-n*.15,-h),s.closePath(),s.fill(),s.beginPath(),s.moveTo(u+n*1.6,n*.45),s.lineTo(u+n*.2,n*1.65),s.lineTo(u-n*.15,n*1.65),s.lineTo(u-n*.15,h),s.closePath(),s.fill(),s.fillRect(l-n*.35,-n*.75,n*.22,n*1.5)}function ig(s,t,e){let n=t*.085,r=-t/2+n*1.6,a=t*.18,l=t/2-n*.5,h=n*.28;s.fillStyle=e,s.beginPath(),s.moveTo(-n,a),s.lineTo(-n,r),s.bezierCurveTo(-n,r-n*1.25,-n*.55,-t/2,0,-t/2),s.bezierCurveTo(n*.55,-t/2,n,r-n*1.25,n,r),s.lineTo(n,a),s.bezierCurveTo(n,a+t*.12,h,l-n*.4,h,l),s.lineTo(-h,l),s.bezierCurveTo(-h,l-n*.4,-n,a+t*.12,-n,a),s.closePath(),s.fill();let u=l-n*.55;s.beginPath(),s.moveTo(-n*.45,u-n*1.6),s.lineTo(-n*1.65,u-n*.2),s.lineTo(-n*1.65,u+n*.15),s.lineTo(-h,u+n*.15),s.closePath(),s.fill(),s.beginPath(),s.moveTo(n*.45,u-n*1.6),s.lineTo(n*1.65,u-n*.2),s.lineTo(n*1.65,u+n*.15),s.lineTo(h,u+n*.15),s.closePath(),s.fill(),s.fillRect(-n*.75,l+n*.13,n*1.5,n*.22),s.fillStyle="#071017",s.fillRect(-n*.38,-t*.25,n*.76,t*.17)}function yd(s=260){let{c:t,x:e,w:n,h:r}=Zo(s,s),a=n/2,l=r/2,h=s/2-5,u={el:t,draw(f=0,m=0,d){e.clearRect(0,0,n,r),xd(e,a,l,h),e.save(),e.translate(a,l);let g=h-8;e.save(),e.beginPath(),e.arc(0,0,g-16,0,7),e.clip(),e.strokeStyle=Se.grid,e.lineWidth=1;for(let P=-g;P<=g;P+=12)e.beginPath(),e.moveTo(-g,P+.5),e.lineTo(g,P+.5),e.stroke();e.restore(),e.strokeStyle="#3c5262",e.setLineDash([2,3]),e.beginPath(),e.moveTo(-g+16,0),e.lineTo(g-16,0),e.stroke(),e.setLineDash([]),dn(e,9.5,"600"),e.textBaseline="middle";for(let P=-40;P<=40;P+=5){let w=P%10===0;[0,1].forEach(T=>{let U=(T?180+P:-P)*We,C=g,D=g-(w?10:5);e.strokeStyle=w?Se.txt:Se.dim,e.lineWidth=w?1.4:1,e.beginPath(),e.moveTo(Math.cos(U)*D,Math.sin(U)*D),e.lineTo(Math.cos(U)*C,Math.sin(U)*C),e.stroke(),w&&P&&!T&&(e.fillStyle=Se.dim,e.textAlign="right",e.fillText(String(Math.abs(P)),Math.cos(U)*(g-13),Math.sin(U)*(g-13)))})}if(e.fillStyle=Se.dim,dn(e,8,"600"),e.textAlign="center",e.fillText("BUG",g*.62,-g*.7),e.fillText("HECK",-g*.62,-g*.7),d!=null){let P=-d*We;e.strokeStyle=Se.tgt,e.lineWidth=3,e.beginPath(),e.arc(0,0,g+3,P-2.5*We,P+2.5*We),e.stroke(),e.lineWidth=1,e.setLineDash([3,3]),e.beginPath(),e.moveTo(Math.cos(P)*g*.62,Math.sin(P)*g*.62),e.lineTo(Math.cos(P)*(g-12),Math.sin(P)*(g-12)),e.stroke(),e.setLineDash([])}e.save(),e.rotate(-m*We),e.strokeStyle=Se.acc,e.lineWidth=1.2,e.beginPath(),e.moveTo(g*.64,0),e.lineTo(g-11,0),e.moveTo(-g*.64,0),e.lineTo(-g+11,0),e.stroke(),ng(e,g*1.22,"#c9d6de"),e.restore();let _=g-24,y=50,S=130;e.strokeStyle="#22313d",e.lineWidth=6,e.beginPath(),e.arc(0,0,_,y*We,S*We),e.stroke(),e.strokeStyle="rgba(224,88,75,.6)",[[y,y+10],[S-10,S]].forEach(([P,w])=>{e.beginPath(),e.arc(0,0,_,P*We,w*We),e.stroke()}),e.lineWidth=1,e.strokeStyle=Se.dim;for(let P=-40;P<=40;P+=10){let w=(90-P)*We;e.beginPath(),e.moveTo(Math.cos(w)*(_-6),Math.sin(w)*(_-6)),e.lineTo(Math.cos(w)*(_+5),Math.sin(w)*(_+5)),e.stroke()}dn(e,8,"600"),e.fillStyle=Se.dim,e.textAlign="center",e.fillText("BB",Math.cos(118*We)*(_-15),Math.sin(118*We)*(_-15)),e.fillText("STB",Math.cos(62*We)*(_-15),Math.sin(62*We)*(_-15));let x=Math.max(-44,Math.min(44,f)),v=(90-x)*We;e.save(),e.translate(Math.cos(v)*_,Math.sin(v)*_),e.rotate(v-Math.PI/2),e.fillStyle=Math.abs(f)>30?Se.bad:Se.acc,e.beginPath(),e.moveTo(0,7),e.lineTo(-5,-7),e.lineTo(5,-7),e.closePath(),e.fill(),e.restore(),e.textBaseline="middle",e.textAlign="center",dn(e,8,"600"),e.fillStyle=Se.dim,e.fillText("NICK",0,-g*.56),dn(e,17,"600"),e.fillStyle=Se.txt,e.fillText(vd(m)+"\xB0",0,-g*.4),dn(e,8,"600"),e.fillStyle=Se.dim,e.fillText("ROLL",0,g*.3),dn(e,13,"600"),e.fillStyle=Se.txt,e.fillText((f>.05?"STB ":f<-.05?"BB ":"")+Math.abs(f).toFixed(1)+"\xB0",0,g*.44),e.restore()}};return u.draw(),u}function bd(s=260){let{c:t,x:e}=Zo(s,s),n=s/2,r=s/2,a=s/2-5,l={el:t,draw(h=0,u){h=(h%360+360)%360,e.clearRect(0,0,s,s),xd(e,n,r,a),e.save(),e.translate(n,r);let f=a-8;e.strokeStyle="#141f28",e.lineWidth=26,e.beginPath(),e.arc(0,0,f-13,0,7),e.stroke(),e.save(),e.rotate(-h*We),e.textAlign="center",e.textBaseline="middle";for(let m=0;m<360;m++){let d=m%10===0,g=m%5===0;if(!(!g&&s<200)){if(e.save(),e.rotate(m*We),e.strokeStyle=d?Se.txt:g?"#9fb0bc":"#4d606e",e.lineWidth=d?1.4:1,e.beginPath(),e.moveTo(0,-f),e.lineTo(0,-f+(d?9:g?6:3.5)),e.stroke(),m%30===0){let _={0:"N",90:"E",180:"S",270:"W"}[m];_?(dn(e,13,"700"),e.fillStyle=m===0?Se.acc:Se.txt,e.fillText(_,0,-f+19)):(dn(e,9.5,"600"),e.fillStyle="#b7c4cd",e.fillText(String(m).padStart(3,"0"),0,-f+18))}e.restore()}}if(u!=null&&(e.save(),e.rotate(u*We),e.fillStyle=Se.tgt,e.beginPath(),e.moveTo(-7,-f-2),e.lineTo(7,-f-2),e.lineTo(7,-f+5),e.lineTo(0,-f),e.lineTo(-7,-f+5),e.closePath(),e.fill(),e.restore()),e.restore(),e.strokeStyle="#2c3e4b",e.lineWidth=1,e.beginPath(),e.arc(0,0,f-30,0,7),e.stroke(),u!=null){let m=(u-h+540)%360-180;e.strokeStyle=Se.tgt,e.lineWidth=3,e.beginPath(),e.arc(0,0,f-30,-Math.PI/2,(-90+m)*We,m<0),e.stroke()}for(let m=45;m<360;m+=45)e.save(),e.rotate(m*We),e.strokeStyle="#3d5262",e.beginPath(),e.moveTo(0,-f+30),e.lineTo(0,-f+37),e.stroke(),e.restore();e.fillStyle=Se.acc,e.beginPath(),e.moveTo(0,-f+3),e.lineTo(-6,-f-7),e.lineTo(6,-f-7),e.closePath(),e.fill(),e.fillRect(-.75,-f+2,1.5,34),ig(e,f*.66,"#c9d6de"),e.fillStyle="#02060a",e.strokeStyle="#3a4c5a",e.lineWidth=1,e.beginPath(),e.rect(-27,f*.38,54,21),e.fill(),e.stroke(),dn(e,15,"600"),e.fillStyle=Se.txt,e.textAlign="center",e.textBaseline="middle",e.fillText(String(Math.round(h)%360).padStart(3,"0")+"\xB0",0,f*.38+11),u!=null&&(dn(e,8.5,"600"),e.fillStyle=Se.tgt,e.fillText("SOLL "+String(Math.round((u%360+360)%360)%360).padStart(3,"0")+"\xB0",0,f*.38+31)),e.restore()}};return l.draw(),l}function Md(s=90,t=260){let{c:e,x:n}=Zo(s,t);return{el:e,draw(r=0,a=3,l,h){n.clearRect(0,0,s,t);let u=40,f=t-30,m=(f-u)/a;n.fillStyle="#03070a",n.fillRect(0,0,s,t),n.strokeStyle="#1d2a35",n.lineWidth=2,n.strokeRect(1,1,s-2,t-2);let d=44,g=18,_=n.createLinearGradient(0,u,0,f);_.addColorStop(0,"#174b66"),_.addColorStop(1,"#03111a"),n.fillStyle=_,n.fillRect(d,u,g,f-u),n.fillStyle="#4c87a6",n.fillRect(d,u-1,g,2),dn(n,9.5,"600"),n.textAlign="right",n.textBaseline="middle",n.lineWidth=1;let y=a<=5?.5:a<=20?2:10;for(let v=0;v*y/2<=a+1e-6;v++){let P=v*y/2,w=u+P*m,T=v%2===0;n.strokeStyle=T?"#9fb0bc":"#4d606e",n.beginPath(),n.moveTo(T?34:38,w),n.lineTo(d,w),n.stroke(),T&&(n.fillStyle=Se.dim,n.fillText(P.toFixed(y<1?1:0),31,w))}if(h!==void 0&&h<a){let v=u+h*m;n.fillStyle="rgba(224,88,75,.22)",n.fillRect(d,v,g,f-v),n.strokeStyle=Se.bad,n.setLineDash([3,2]),n.beginPath(),n.moveTo(30,v),n.lineTo(s-4,v),n.stroke(),n.setLineDash([])}let S=l!=null&&l>0;if(S){let v=u+lc(l,0,a)*m;n.fillStyle=Se.tgt,n.beginPath(),n.moveTo(d+g+1,v),n.lineTo(d+g+11,v-6),n.lineTo(d+g+11,v+6),n.closePath(),n.fill()}let x=u+lc(r,0,a)*m;n.fillStyle=Se.acc,n.fillRect(d-2,x-1,g+4,2),n.beginPath(),n.moveTo(d-2,x),n.lineTo(d-10,x-5),n.lineTo(d-10,x+5),n.closePath(),n.fill(),n.fillStyle="#02060a",n.strokeStyle="#3a4c5a",n.beginPath(),n.rect(6.5,8.5,s-13,22),n.fill(),n.stroke(),dn(n,14,"600"),n.fillStyle=Se.txt,n.textAlign="center",n.fillText(r.toFixed(2)+" m",s/2,20),dn(n,8.5,"600"),n.fillStyle=S?Se.tgt:Se.dim,n.fillText(S?"\u0394 "+vd(r-l,2)+" m":"SOLL \u2013",s/2,t-15)}}}var lc=(s,t,e)=>Math.min(e,Math.max(t,s));function Sd(s,t={}){let e=t.w||520,n=t.h||150,{c:r,x:a}=Zo(e,n),l=t.span||30,h=s.map(()=>[]),u=0;return{el:r,push(m,d){d.forEach((g,_)=>{if(g!==void 0&&!isNaN(g))for(h[_].push([m,g]);h[_].length&&m-h[_][0][0]>l;)h[_].shift()}),u=m},clear(){h.forEach(m=>{m.length=0})},draw(){a.clearRect(0,0,e,n),a.fillStyle=Se.bg,a.fillRect(0,0,e,n);let m=t.min,d=t.max;if(m===void 0||d===void 0){m=1e9,d=-1e9,h.forEach(y=>y.forEach(S=>{m=Math.min(m,S[1]),d=Math.max(d,S[1])})),m>d&&(m=0,d=1);let _=(d-m)*.1||.5;m-=_,d+=_}a.strokeStyle=Se.grid,a.lineWidth=1,dn(a,9),a.fillStyle=Se.dim,a.textAlign="left";for(let _=0;_<=4;_++){let y=4+(n-8)*_/4;a.beginPath(),a.moveTo(0,y),a.lineTo(e,y),a.stroke(),a.fillText((d-(d-m)*_/4).toFixed(t.dec??1),3,y-2)}s.forEach((_,y)=>{a.strokeStyle=_.color,a.lineWidth=1.5,a.beginPath();let S=!0;h[y].forEach(x=>{let v=e-(u-x[0])/l*e,P=4+(n-8)*(1-(x[1]-m)/(d-m||1));S?(a.moveTo(v,P),S=!1):a.lineTo(v,P)}),a.stroke()});let g=e-6;a.textAlign="right",dn(a,10);for(let _=s.length-1;_>=0;_--){a.fillStyle=s[_].color;let y=s[_].name+(h[_].length?" "+h[_][h[_].length-1][1].toFixed(t.dec??1):"");a.fillText(y,g,12),g-=a.measureText(y).width+12}}}}function Rn(s,t,e,n,r={}){let a=M("div",{class:"bar-fill"}),l=M("span",{class:"bar-val"},"\u2013");return{el:M("div",{class:"bar"},M("span",{class:"bar-l"},s),M("div",{class:"bar-t"},a,r.mid?M("i",{class:"bar-mid"}):null),l),set(u,f,m){if(u===void 0||isNaN(u)){l.textContent="\u2013",a.style.width="0";return}let d=(u-t)/(e-t);if(r.mid){let g=(0-t)/(e-t);a.style.left=Math.min(d,g)*100+"%",a.style.width=Math.abs(d-g)*100+"%"}else a.style.left="0",a.style.width=lc(d,0,1)*100+"%";a.style.background=m||"",l.textContent=f??u.toFixed(r.dec??0)+(n?" "+n:"")}}}var on=s=>{let t=M("span",{class:"chip"},s);return{el:t,set(e,n){t.textContent=e===void 0?s:e,t.className="chip "+(n||"")}}},ce=(s,t)=>{let e=M("b",null,"\u2013"),n=M("div",{class:"stat"},M("span",null,s),M("div",null,e,t?M("small",null,t):null));return{el:n,set(r,a){e.textContent=r,n.className="stat "+(a||"")}}};async function xe(s,t,e){if(!tt.connected)return ie("Nicht verbunden","bad"),null;let n=await tt.link.cmd(s,e);return n.ok?t&&ie(t,"ok"):ie(`${s}: ${n.text}`,"bad"),n}var qo=new Map;setInterval(()=>{if(!(!tt.connected||tt.link.q.length>2))for(let[s,t]of qo)tt.link.cmd(t,800),qo.delete(s)},50);var Xo=(s,t)=>qo.set(s,t);async function Yr(s,t){let e=await xe(`SET ${s} ${t}`);return e&&e.ok&&(tt.par[s]=+t,Pe.emit("par")),e}async function qr(){let s=await tt.link.cmd("GET",4e3);return s.ok&&Array.isArray(s.data)&&(tt.parList=s.data,tt.par={},s.data.forEach(t=>{tt.par[t.k]=t.v}),Pe.emit("par")),s}var He=(s,...t)=>M("section",{class:"card"},M("h3",null,s),...t),Ue=(s,t,e="")=>M("button",{class:"btn "+e,onclick:t},s),Cn=s=>M("p",{class:"note"},s);function wd(s){let t=M("div",{class:"kv"});return{el:M("div",{class:"page"},M("div",{class:"hero"},M("div",null,M("h1",null,"FATHOM Konfigurator"),M("p",null,"Diagnose, Kalibration, Tests und Missionsplanung f\xFCr das U-Boot. Per USB zum Flashen und Testen am Tisch, per WLAN f\xFCr Auftr\xE4ge und Blackbox im Feld.")),M("div",{class:"hero-btns"},Ue("Verbinden (USB)",()=>s.connect(),"primary big"),Ue("Per WLAN verbinden",()=>s.wifi(),"big"),Ue("Demo Boot starten",()=>s.demo(),"big"))),M("div",{class:"grid2"},He("Verbindung",t,"serial"in navigator?Cn("USB braucht Chrome oder Edge am PC (Web Serial)."):M("p",{class:"warn-box"},"USB geht in diesem Browser nicht (kein Web Serial). F\xFCr USB Chrome oder Edge am PC verwenden. WLAN und Demo laufen trotzdem."),M("p",{class:"wifi-box"},"WLAN geht mit jedem Browser, auch am Handy: mit dem Boot WLAN FATHOM-XXXX verbinden und http://192.168.4.1 \xF6ffnen. Funk ist nur im DISARMED aktiv. ARM und Missionsstart gehen nur \xFCber Crossfire oder USB."),M("div",{class:"row"},Ue("Boot neu starten",()=>xe("REBOOT","Neustart")),Ue("Bootloader (BOOTSEL)",()=>{confirm("Boot springt in den USB Bootloader. Danach erscheint ein Laufwerk RPI-RP2 zum Flashen. Fortfahren?")&&xe("BOOTSEL")}))),He("Erste Inbetriebnahme",M("ol",{class:"steps"},M("li",null,"Boot trocken auf den Tisch, nur USB (Akku abgesteckt, Propeller ab)."),M("li",null,"Verbinden. Unter Sensoren pr\xFCfen: Nick + bei Nase hoch, Roll + bei rechte Seite runter, Tiefe nahe 0."),M("li",null,"Kalibration: Tiefe auf Null, Lage Null, IMU Balken auf 3, Batteriespannung abgleichen."),M("li",null,"Servos: Mitte und Endpunkte einstellen, Richtung pr\xFCfen (Heck hoch = Nase hoch)."),M("li",null,"Tests: Motor erst ohne Propeller, dann mit Gaslimit 10 %. Pumpe f\xFCllt (+) und leert (\u2212)."),M("li",null,"Dichtheitstest, Leckage Sensor Wert pr\xFCfen, dann erst ins Wasser. Parameter sichern (Speichern)."))))),update(){},show(){let n=tt.info;t.innerHTML="",[["Status",tt.connected?tt.demo?"Demo (simuliert)":"verbunden":"getrennt"],["Firmware",n?`${n.fw} ${n.ver}`:"\u2013"],["Hardware",n?n.hw:"\u2013"],["Parameter",n?n.params:"\u2013"],["Max Missionsschritte",n?n.maxsteps:"\u2013"]].forEach(([r,a])=>t.append(M("span",null,r),M("b",null,String(a))))}}}function Td(){let s=yd(290),t=bd(290),e=Md(96,290),n={pitch:ce("Nick","\xB0"),roll:ce("Roll","\xB0"),yaw:ce("Kurs","\xB0"),depth:ce("Tiefe","m"),temp:ce("Wasser","\xB0C"),vb:ce("Akku","V"),fill:ce("Ballast","%"),thr:ce("Vortrieb","%"),spd:ce("Fahrt ca.","m/s")},r={arm:on("DISARMED"),mode:on("MANUAL"),rc:on("RC"),gps:on("GPS"),imu:on("IMU"),dep:on("Tiefe"),leak:on("Leck"),tst:on("Test"),mis:on("Mission")},a={rud:Rn("Seitenruder",-45,45,"\xB0",{mid:!0}),stn:Rn("Heck Tiefenruder",-45,45,"\xB0",{mid:!0}),bow:Rn("Bug Tiefenruder",-45,45,"\xB0",{mid:!0}),thr:Rn("Motor",-100,100,"%",{mid:!0}),pmp:Rn("Pumpe",-100,100,"%",{mid:!0}),fill:Rn("Ballast F\xFCllung",0,100,"%"),vb:Rn("Akku 2S",6,8.4,"V",{dec:2}),lk:Rn("Leckage",0,1,"",{dec:2})},l=M("div",{class:"alert",style:{display:"none"}}),h=M("div",{class:"log"}),u=M("div",{class:"kv"}),f=M("div",{class:"page dash"},l,M("div",{class:"chips"},Object.values(r).map(d=>d.el)),M("div",{class:"instr"},M("div",{class:"ins"},M("div",{class:"cap"},"Lage"),s.el),M("div",{class:"ins"},M("div",{class:"cap"},"Kurs"),t.el),M("div",{class:"ins"},M("div",{class:"cap"},"Tiefe"),e.el)),M("div",{class:"stats"},Object.values(n).map(d=>d.el)),M("div",{class:"grid2"},He("Ausg\xE4nge",Object.values(a).map(d=>d.el)),He("Mission und Ziele",u,M("h4",null,"Ereignisse"),h))),m=()=>{h.innerHTML="",tt.events.slice(-40).reverse().forEach(d=>h.append(M("div",{class:"ev "+d.kind},M("time",null,d.t.toTimeString().slice(0,8)),d.m)))};return Pe.on("ev",m),{el:f,show:m,update(d){s.draw(d.att[0],d.att[1],d.mis.run||d.m!=="MANUAL"?d.tg.p:void 0),t.draw(d.att[2],d.m==="MANUAL"?void 0:d.tg.h),e.draw(d.d,Math.max(tt.get("lim.depth",3)*1.15,1),d.m==="DEPTH"||d.m==="MISSION"?d.tg.d:void 0,tt.get("lim.depth",3)),n.pitch.set(Et(d.att[1])),n.roll.set(Et(d.att[0])),n.yaw.set(Et(d.att[2],0).padStart(3,"0")),n.depth.set(Et(d.d,2)),n.temp.set(Et(d.tmp)),n.fill.set(Et(d.fill,0)),n.thr.set(Et(d.out.thr*100,0)),n.vb.set(Et(d.vb,2),d.vb<tt.get("bat.crit",6.4)?"bad":d.vb<tt.get("bat.warn",7)?"warn":""),n.spd.set(Et(Math.abs(d.out.thr*100)*tt.get("spd.ms_per_pct",.014),2)),r.arm.set(d.arm?"ARMED":"DISARMED",d.arm?"bad":""),r.mode.set(d.m,d.m==="FAILSAFE"?"bad":d.m==="MISSION"||d.m==="RTH"?"acc":""),r.rc.set(d.rcok?`RC ${d.rssi} dBm`:"RC fehlt",d.rcok?"ok":"warn"),r.imu.set(d.ok[0]?"IMU ok":"IMU Fehler",d.ok[0]?"ok":"bad"),r.dep.set(d.ok[1]?"Tiefensensor ok":"Tiefensensor Fehler",d.ok[1]?"ok":"bad"),d.gps&&r.gps.set(d.gps.ok?`GPS ${d.gps.sat} Sat`:"GPS kein Fix",d.gps.ok?"ok":""),r.leak.set(d.lk>tt.get("leak.threshold",.35)?"LECKAGE":"trocken",d.lk>tt.get("leak.threshold",.35)?"bad":"ok"),r.tst.set(d.tst?"TESTMODUS":"Test aus",d.tst?"warn":""),r.mis.set(d.mis.run?`Mission ${d.mis.i+1}/${d.mis.n} ${d.mis.ty}`:"Mission aus",d.mis.run?"acc":""),a.rud.set(d.out.r,Et(d.out.r)+" \xB0 / "+d.out.us[0]+" \xB5s"),a.stn.set(d.out.s,Et(d.out.s)+" \xB0 / "+d.out.us[1]+" \xB5s"),a.bow.set(d.out.b,Et(d.out.b)+" \xB0 / "+d.out.us[2]+" \xB5s"),a.thr.set(d.out.thr*100,Et(d.out.thr*100,0)+" % / "+d.out.mu+" \xB5s",d.out.thr<0?Zt.warn:""),a.pmp.set(d.out.pmp*100,Et(d.out.pmp*100,0)+" %"),a.fill.set(d.fill,Et(d.fill,0)+" %"),a.vb.set(d.vb,Et(d.vb,2)+" V",d.vb<tt.get("bat.warn",7)?Zt.warn:Zt.ok),a.lk.set(d.lk,Et(d.lk,2),d.lk>tt.get("leak.threshold",.35)?Zt.bad:Zt.ok);let g=d.fs?"FAILSAFE: "+d.fs:d.w;l.style.display=g?"block":"none",l.textContent=g,u.innerHTML="",[["Ziel Tiefe",Et(d.tg.d,2)+" m"],["Ziel Nick",Et(d.tg.p)+" \xB0"],["Ziel Kurs",Et(d.tg.h,0)+" \xB0"],["Ziel Vortrieb",Et(d.tg.t,0)+" %"],["Schritt",d.mis.run?`${d.mis.i+1} von ${d.mis.n} (${d.mis.ty})`:"\u2013"],["Schrittzeit",d.mis.run?Et(d.mis.t,0)+" s":"\u2013"],["Druck",Et(d.prs,1)+" mbar"],["Zyklus",d.lp+" \xB5s"]].forEach(([_,y])=>u.append(M("span",null,_),M("b",null,y)))}}}function Ed(){let s=(u,f)=>Sd(u,f),t={att:s([{name:"Roll",color:"#e0a93b"},{name:"Nick",color:"#3e86e0"}],{min:-45,max:45,dec:1}),yaw:s([{name:"Kurs",color:"#4fb477"},{name:"Ziel",color:"#8a6fd0"}],{min:0,max:360,dec:0}),gyr:s([{name:"Gx",color:"#e0584b"},{name:"Gy",color:"#4fb477"},{name:"Gz",color:"#3e86e0"}],{min:-60,max:60,dec:1}),dep:s([{name:"Tiefe m",color:"#3e86e0"},{name:"Ziel",color:"#e0a93b"}],{}),pwr:s([{name:"Akku V",color:"#4fb477"}],{min:6,max:8.6,dec:2}),lk:s([{name:"Leck",color:"#e0584b"},{name:"Ballast %/100",color:"#8a6fd0"}],{min:0,max:1,dec:2})},e=M("div",{class:"kv wide"}),n=M("div",{class:"rcs"}),r=Array.from({length:8},(u,f)=>Rn("CH"+(f+1),1e3,2e3,"\xB5s"));r.forEach(u=>n.append(u.el));let a=["rc.ch.bow","rc.ch.ele","rc.ch.thr","rc.ch.rud","rc.ch.arm","rc.ch.mode","rc.ch.mission"],l=["Bugruder","Tiefenruder","Vortrieb","Seitenruder","Arm","Modus","Mission"];return{el:M("div",{class:"page"},M("div",{class:"grid2"},He("Lage",t.att.el),He("Kurs",t.yaw.el),He("Gyro (\xB0/s)",t.gyr.el),He("Tiefe",t.dep.el),He("Akku",t.pwr.el),He("Leckage und Ballast",t.lk.el)),M("div",{class:"grid2"},He("Rohwerte",e),He("RC Kan\xE4le (Crossfire)",n))),show(){Object.values(t).forEach(u=>u.clear())},update(u){let f=u.t/1e3;t.att.push(f,[u.att[0],u.att[1]]),t.yaw.push(f,[u.att[2],u.m==="MANUAL"?void 0:u.tg.h]),t.gyr.push(f,u.gyr),t.dep.push(f,[u.d,u.m==="DEPTH"||u.m==="MISSION"?u.tg.d:void 0]),t.pwr.push(f,[u.vb]),t.lk.push(f,[u.lk,u.fill/100]),Object.values(t).forEach(m=>m.draw()),e.innerHTML="",[["Druck",Et(u.prs,1)+" mbar"],["Temperatur",Et(u.tmp)+" \xB0C"],["Tiefe",Et(u.d,3)+" m"],["Roll / Nick / Kurs",`${Et(u.att[0])} / ${Et(u.att[1])} / ${Et(u.att[2])} \xB0`],["Gyro",u.gyr.map(m=>Et(m)).join(" / ")+" \xB0/s"],["Akku",Et(u.vb,2)+" V"],["Leckage",Et(u.lk,2)],["IMU Kalibrierung",`Sys ${u.cal[0]} Gyr ${u.cal[1]} Acc ${u.cal[2]} Mag ${u.cal[3]}`],["Zykluszeit",u.lp+" \xB5s"],["Modus",u.m]].forEach(([m,d])=>e.append(M("span",null,m),M("b",null,d))),u.rc.forEach((m,d)=>{let g=a.findIndex(_=>tt.get(_,0)===d+1);r[d].set(m,`${m} \xB5s${g>=0?" \xB7 "+l[g]:""}`,u.rcok?"":Zt.dim)})}}}async function sg(s){if(!tt.connected)return!1;let t=await tt.link.cmd(`TEST ENABLE ${s?1:0}`);return t.ok?!0:(ie(s?"Testmodus nur im DISARMED Zustand: "+t.text:t.text,"bad"),!1)}function Ad(){let s=M("b",null,"Testmodus aus"),t=M("div",{class:"testbar"},s,M("span",null,"Servos, Motor und Pumpe lassen sich nur im Testmodus direkt ansteuern. Nur im DISARMED Zustand.")),e=Ue("Testmodus einschalten",async()=>{let n=!(tt.tel&&tt.tel.tst);await sg(n)&&(n||xe("TEST OFF"))},"primary");return t.append(e),{el:t,update(n){s.textContent=n.tst?"TESTMODUS AKTIV":"Testmodus aus",t.className="testbar"+(n.tst?" on":""),e.textContent=n.tst?"Testmodus beenden":"Testmodus einschalten"}}}function Pd(){let s=Ad(),t={d:ce("Tiefe","m"),p:ce("Druck","mbar"),t:ce("Temp","\xB0C"),pi:ce("Nick","\xB0"),ro:ce("Roll","\xB0"),yw:ce("Kurs","\xB0"),vb:ce("Akku","V"),lk:ce("Leckage","")},e=["Gesamt","Gyro","Beschleunigung","Magnet"].map((h,u)=>Rn(h,0,3,"",{dec:0})),n=M("input",{type:"number",step:"0.01",placeholder:"Multimeter Volt",class:"in"}),r=[["Seitenruder","rud",0],["Heck Tiefenruder","stern",1],["Bug Tiefenruder","bow",2]].map(([h,u,f])=>{let m=M("b",null,"1500 \xB5s"),d=M("input",{type:"range",min:800,max:2200,step:5,value:1500,class:"sl",oninput:()=>{m.textContent=d.value+" \xB5s",Xo("sv"+f,`TEST SERVO ${f} ${d.value}`)}}),g=async(y,S)=>{let x=await Yr(`servo.${u}.${y}`,d.value);x&&x.ok&&ie(`${h} ${S} = ${d.value} \xB5s`,"ok")},_=M("input",{type:"checkbox",onchange:()=>Yr(`servo.${u}.rev`,_.checked?1:0)});return{el:M("div",{class:"sv"},M("div",{class:"svh"},M("b",null,h),m),d,M("div",{class:"row"},Ue("Mitte",()=>g("center","Mitte")),Ue("Min",()=>g("min","Min")),Ue("Max",()=>g("max","Max")),Ue("Zur\xFCck auf Mitte",()=>{d.value=tt.get(`servo.${u}.center`,1500),d.oninput()}),M("label",{class:"chk"},_," umkehren"))),sync(){_.checked=tt.get(`servo.${u}.rev`,0)>.5}}}),a=M("div",{class:"page"},s.el,M("div",{class:"stats"},Object.values(t).map(h=>h.el)),M("div",{class:"grid2"},He("1  Tiefensensor",Cn("Boot an der Luft, trocken. Setzt den aktuellen Druck als Oberfl\xE4che. Vor jedem Tauchgang wiederholen (Wetter \xE4ndert den Luftdruck)."),M("div",{class:"row"},Ue("Tiefe auf Null setzen",()=>xe("CAL DEPTH","Oberfl\xE4chendruck gesetzt"),"primary"))),He("2  Lage Null",Cn("Boot im Gestell exakt waagrecht und ohne Rollen ausrichten (Wasserwaage auf dem Rohr). Dann best\xE4tigen. Nick und Roll werden zu 0 gesetzt."),M("div",{class:"row"},Ue("Lage als Null setzen",()=>xe("CAL LEVEL","Lage Null gesetzt"),"primary")),Cn("Vorzeichenprobe: Nase hoch \u2192 Nick +. Rechte Seite runter \u2192 Roll +. Stimmt es nicht, unter Parameter imu.invert \xE4ndern (1 Roll, 2 Nick, 4 Kurs).")),He("3  IMU Kalibrierung (BNO055)",e.map(h=>h.el),Cn("Gyro: 3 s ruhig liegen lassen. Beschleunigung: Boot in 6 Lagen jeweils 3 s ruhig halten. Magnet nur im NDOF Modus n\xF6tig, in der R\xF6hre mit Motoren ohnehin unzuverl\xE4ssig (Standard: IMU Modus ohne Kompass)."),M("div",{class:"row"},Ue("Profil im BNO055 sichern",()=>xe("CAL IMUSAVE","IMU Profil gespeichert")))),He("4  Batteriespannung",Cn("Akku am Stecker mit Multimeter messen und Wert eintragen. Der Spannungsteiler wird damit abgeglichen."),M("div",{class:"row"},n,Ue("Abgleichen",()=>{+n.value>4?xe(`CAL VBAT ${n.value}`,"Batterie abgeglichen"):ie("Spannung eintragen","warn")},"primary"))),He("5  Servos: Mitte, Endpunkte, Richtung",Cn("Testmodus einschalten, Schieber bewegen. Mitte: Ruder genau neutral, dann Mitte dr\xFCcken. Endpunkte: bis kurz vor den mechanischen Anschlag, dann Min oder Max. Servo brummt am Anschlag und wird hei\xDF."),r.map(h=>h.el),Cn("Richtung: Heck Tiefenruder nach oben = Nase hoch. Seitenruder rechts = Boot dreht nach rechts (Kurs +).")),He("6  Leckage Sensor",Cn("Trockenwert merken (sollte unter 0.1 liegen). Mit einem feuchten Finger an den Sonden muss der Wert \xFCber die Schwelle steigen. Schwelle unter Parameter leak.threshold."),M("div",{class:"row"},Ue("Sensoren Seite \xF6ffnen",()=>Pe.emit("goto","sensors")))))),l=!1;return Pe.on("par",()=>r.forEach(h=>h.sync())),{el:a,show(){r.forEach(h=>h.sync())},hide(){},update(h){s.update(h),t.d.set(Et(h.d,3)),t.p.set(Et(h.prs,1)),t.t.set(Et(h.tmp)),t.pi.set(Et(h.att[1])),t.ro.set(Et(h.att[0])),t.yw.set(Et(h.att[2],0)),t.vb.set(Et(h.vb,2)),t.lk.set(Et(h.lk,2),h.lk>tt.get("leak.threshold",.35)?"bad":""),h.cal.forEach((u,f)=>e[f].set(u,u+" von 3",u>=3?Zt.ok:u>=2?Zt.warn:Zt.bad)),l||(l=!0,r.forEach(u=>u.sync()))}}}function Rd(){let s=Ad(),t=null,e=()=>tt.get("lim.deflect",25),n=()=>tt.get("servo.us_per_deg",10),r=(A,E)=>Math.round(tt.get(`servo.${A}.center`,1500)+(tt.get(`servo.${A}.rev`,0)>.5?-1:1)*E*n()),a=[["Seitenruder","rud",0],["Heck Tiefenruder","stern",1],["Bug Tiefenruder","bow",2]].map(([A,E,B])=>{let q=M("b",null,"0.0 \xB0"),Z=M("input",{type:"range",min:-45,max:45,step:.5,value:0,class:"sl center"}),j=()=>{let it=Sn(+Z.value,-e(),e());q.textContent=Et(it)+" \xB0 / "+r(E,it)+" \xB5s",Xo("ts"+B,`TEST SERVO ${B} ${r(E,it)}`)};return Z.oninput=j,Z.addEventListener("dblclick",()=>{Z.value=0,j()}),{name:A,key:E,ch:B,sl:Z,send:j,el:M("div",{class:"sv"},M("div",{class:"svh"},M("b",null,A),q),Z)}}),l=Ue("Servos durchfahren (10 s)",()=>{if(t){clearInterval(t),t=null,l.textContent="Servos durchfahren (10 s)";return}let A=performance.now();l.textContent="Stopp Durchlauf",t=setInterval(()=>{let E=(performance.now()-A)/1e3;if(E>10){clearInterval(t),t=null,l.textContent="Servos durchfahren (10 s)",a.forEach(B=>{B.sl.value=0,B.send()});return}a.forEach((B,q)=>{B.sl.value=Math.sin(E*2*Math.PI*.5+q*1.2)*e(),B.send()})},60)}),h=M("input",{type:"checkbox"}),u=M("input",{type:"checkbox"}),f=M("b",null,"0 %"),m=M("input",{type:"range",min:-100,max:100,step:1,value:0,class:"sl center danger"}),d=M("input",{type:"checkbox"}),g=0,_=()=>{h.checked||(m.value=0,g=0);let A=u.checked?100:tt.get("lim.throttle",35);g=Sn(+m.value,-A,A),m.value=g,f.textContent=g+" %"+(g?" \u2192 "+Math.round(Math.abs(g)*tt.get("spd.ms_per_pct",.014)*100)/100+" m/s":""),Xo("tm",`TEST MOTOR ${g}`)};m.oninput=_,["pointerup","touchend"].forEach(A=>m.addEventListener(A,()=>{d.checked||(m.value=0,_())}));let y=()=>{m.value=0,g=0,x.value=0,v=0,f.textContent="0 %",S.textContent="0 %",qo.clear(),tt.connected&&(tt.link.q.length=0,tt.link.cmd("TEST OFF",1500)),a.forEach(A=>{A.sl.value=0,A.send()})},S=M("b",null,"0 %"),x=M("input",{type:"range",min:-100,max:100,step:1,value:0,class:"sl center"}),v=0,P=()=>{v=+x.value,S.textContent=v+" %"+(v>0?" f\xFCllen":v<0?" leeren":""),Xo("tp",`TEST PUMP ${v}`)};x.oninput=P,["pointerup","touchend"].forEach(A=>x.addEventListener(A,()=>{x.value=0,P()}));let w=null,T=()=>{w=setInterval(()=>{tt.connected&&(g&&tt.link.cmd(`TEST MOTOR ${g}`,800),v&&tt.link.cmd(`TEST PUMP ${v}`,800))},400)},U=Rn("Ballast F\xFCllstand (gesch\xE4tzt)",0,100,"%"),C=Rn("Motor Ausgang",-100,100,"%",{mid:!0}),D=Ue("STOPP ALLES",y,"stop big");return window.addEventListener("keydown",A=>{A.key==="Escape"&&tt.tab==="tests"&&y()}),{el:M("div",{class:"page"},s.el,M("div",{class:"grid2"},He("Servos",Cn("Schieber in Grad Ruderausschlag, begrenzt auf lim.deflect (\xB125 \xB0). Doppelklick = Mitte."),a.map(A=>A.el),M("div",{class:"row"},l)),He("Motor",M("p",{class:"warn-box"},"Propeller frei drehbar, Finger weg, Boot gesichert. Motor l\xE4uft nur solange der Schieber gehalten wird. Esc oder Stopp setzt alles auf Null."),M("label",{class:"chk"},h," Propeller ist frei, Motor freigeben"),M("label",{class:"chk"},d," Schieber bleibt stehen (Dauerlauf, Watchdog stoppt bei Verbindungsverlust)"),M("label",{class:"chk"},u," Gaslimit aufheben (nur Pr\xFCfstand)"),M("div",{class:"svh"},M("b",null,"Vortrieb (\u2212 r\xFCckw\xE4rts)"),f),m,C.el),He("Ballastpumpe",Cn("Plus f\xFCllt den Tank, minus leert ihn. L\xE4uft nur solange gehalten. DFRobot Pumpe mit eingebautem Treiber, Signal 50 Hz. Richtung falsch: Parameter pump.invert."),M("div",{class:"svh"},M("b",null,"Pumpe"),S),x,U.el),He("Status LEDs und Beacon",Cn("Beacon Pod (eigenes System) testen. Weiss = Strobe zum Wiederfinden, Rot = Warnblitz, Alarm = rot schnell plus Strobe. Aus setzt auch einen gespeicherten Alarm zur\xFCck. Status LEDs: gruen Blitz = bereit, Dauerlicht = scharf, schnell blinkend = Mission, rot n Blitze = Fehler (1 Batterie, 2 Leck, 3 Tiefe, 4 Sensor, 5 RC Verlust), rot Dauer = Not Aus."),M("div",{class:"row"},Ue("Beacon aus",()=>xe("BEACON 0")),Ue("Weiss",()=>xe("BEACON 2")),Ue("Rot",()=>xe("BEACON 3")),Ue("Alarm",()=>xe("BEACON 4",null,3e3),"warnb"))),He("Notaus",D,Cn("Der Testmodus hat einen Watchdog in der Firmware: Kommt 1.5 s kein Heartbeat, stoppen Motor und Pumpe von selbst.")))),show(){T(),a.forEach(A=>A.send())},hide(){clearInterval(w),y()},update(A){s.update(A),C.set(A.out.thr*100,Et(A.out.thr*100,0)+" % / "+A.out.mu+" \xB5s"),U.set(A.fill,Et(A.fill,0)+" %")},stopAll:y}}function Cd(){let s=M("div"),t=M("input",{class:"in",placeholder:"Suchen (z. B. pid, servo, depth)",oninput:()=>n()}),e=new Set,n=()=>{s.innerHTML="";let l=tt.parList.length?tt.parList:Bn.map(f=>({k:f.k,v:f.d,d:f.d,mn:f.mn,mx:f.mx,u:f.u,g:f.g,h:f.h})),h=t.value.trim().toLowerCase(),u={};l.filter(f=>!h||(f.k+" "+f.h+" "+f.g).toLowerCase().includes(h)).forEach(f=>(u[f.g]=u[f.g]||[]).push(f)),Object.entries(u).forEach(([f,m])=>{let d=M("table",{class:"ptable"},M("thead",null,M("tr",null,["Parameter","Wert","Einheit","Standard","Bereich","Beschreibung"].map(_=>M("th",null,_))))),g=M("tbody");m.forEach(_=>{let y=tt.par[_.k]!==void 0?tt.par[_.k]:_.v,S=M("input",{class:"pin"+(y!==_.d?" mod":""),type:"number",step:"any",value:y,min:_.mn,max:_.mx,disabled:!tt.connected,onchange:async()=>{let x=Sn(+S.value,_.mn,_.mx);S.value=x;let v=await Yr(_.k,x);v&&v.ok&&(S.classList.toggle("mod",x!==_.d),e.add(_.k),r.classList.add("primary"))}});g.append(M("tr",null,M("td",{class:"mono"},_.k),M("td",null,S),M("td",{class:"dim"},_.u),M("td",{class:"dim",onclick:()=>{S.value=_.d,S.onchange()},title:"Klick setzt auf Standard",style:{cursor:"pointer"}},_.d),M("td",{class:"dim"},`${_.mn} bis ${_.mx}`),M("td",null,_.h)))}),d.append(g),s.append(He(f,d))})},r=Ue("Im Boot speichern",async()=>{let l=await xe("SAVE","Parameter im Flash gespeichert");l&&l.ok&&(e.clear(),r.classList.remove("primary"))}),a=M("div",{class:"page"},M("div",{class:"toolbar"},t,Ue("Neu laden",async()=>{await qr()}),r,Ue("Standardwerte",async()=>{confirm("Alle Parameter im Boot auf Standard setzen?")&&(await xe("DEFAULTS","Standardwerte gesetzt"),await qr())}),Ue("Export",()=>Jn("fathom_parameter.json",JSON.stringify(Object.fromEntries(tt.parList.map(l=>[l.k,tt.par[l.k]])),null,1))),Ue("Import",async()=>{let l=await Zs(".json");if(l)try{let h=JSON.parse(l),u=0;for(let[f,m]of Object.entries(h))(await tt.link.cmd(`SET ${f} ${m}`)).ok&&u++;ie(`${u} Parameter importiert, danach Speichern`,"ok"),await qr()}catch{ie("Datei ung\xFCltig","bad")}})),s);return Pe.on("par",()=>{tt.tab==="params"&&n()}),Pe.on("conn",n),{el:a,show:n,update(){}}}function Ld(){let s=M("div",{class:"term"}),t=M("input",{type:"checkbox"}),e=M("input",{class:"in mono",placeholder:"Befehl, z. B. INFO, GET, STREAM 10",onkeydown:async m=>{if(m.key==="Enter"&&e.value.trim()){let d=e.value.trim();n.push(d),r=n.length,e.value="",tt.connected?await tt.link.cmd(d,4e3):ie("Nicht verbunden","bad")}m.key==="ArrowUp"&&r>0&&(e.value=n[--r]),m.key==="ArrowDown"&&r<n.length&&(e.value=n[++r]||"")}}),n=[],r=0,a=[],l=null,h=(m,d)=>{a.push([m,d]),l||(l=setTimeout(u,100))},u=()=>{l=null;let m=s.scrollTop+s.clientHeight>=s.scrollHeight-30;for(a.forEach(([d,g])=>s.append(M("div",{class:d},g.length>400?g.slice(0,400)+" \u2026":g))),a=[];s.childNodes.length>600;)s.firstChild.remove();m&&(s.scrollTop=s.scrollHeight)};return Pe.on("tx",m=>h("tx","> "+m)),Pe.on("rx",m=>{m.startsWith("T {")&&!t.checked||h(m.startsWith("ERR")?"rx err":"rx",m)}),{el:M("div",{class:"page"},M("div",{class:"toolbar"},M("label",{class:"chk"},t," Telemetrie anzeigen"),Ue("Leeren",()=>{s.innerHTML=""})),s,e),show(){s.scrollTop=s.scrollHeight},update(){}}}var Cs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rg=0,Id=1,og=2;var Xf=1,ag=2,Ni=3,ns=0,mn=1,Hn=2,ts=0,dr=1,Dd=2,Nd=3,Od=4,lg=5,ys=100,cg=101,hg=102,ug=103,dg=104,fg=200,pg=201,mg=202,gg=203,Vc=204,Gc=205,_g=206,vg=207,xg=208,yg=209,bg=210,Mg=211,Sg=212,wg=213,Tg=214,Wc=0,Zc=1,Xc=2,_r=3,qc=4,Yc=5,$c=6,Kc=7,qf=0,Eg=1,Ag=2,es=0,Pg=1,Rg=2,Cg=3,Lg=4,Ig=5,Dg=6,Ng=7;var Yf=300,vr=301,xr=302,Jc=303,jc=304,fl=306,Qc=1e3,Ms=1001,th=1002,si=1003,Og=1004;var Yo=1005;var Vn=1006,cc=1007;var Ss=1008;var Hi=1009,$f=1010,Kf=1011,ao=1012,su=1013,ws=1014,Ui=1015,_o=1016,ru=1017,ou=1018,yr=1020,Jf=35902,jf=1021,Qf=1022,ii=1023,tp=1024,ep=1025,fr=1026,br=1027,np=1028,au=1029,ip=1030,lu=1031;var cu=1033,Pa=33776,Ra=33777,Ca=33778,La=33779,eh=35840,nh=35841,ih=35842,sh=35843,rh=36196,oh=37492,ah=37496,lh=37808,ch=37809,hh=37810,uh=37811,dh=37812,fh=37813,ph=37814,mh=37815,gh=37816,_h=37817,vh=37818,xh=37819,yh=37820,bh=37821,Ia=36492,Mh=36494,Sh=36495,sp=36283,wh=36284,Th=36285,Eh=36286;var Da=2300,Ah=2301,hc=2302,Ud=2400,kd=2401,Bd=2402;var Ug=3200,kg=3201;var rp=0,Bg=1,Qi="",zn="srgb",Tr="srgb-linear",pl="linear",De="srgb";var qs=7680;var Fd=519,Fg=512,zg=513,Hg=514,op=515,Vg=516,Gg=517,Wg=518,Zg=519,Ph=35044;var zd="300 es",ki=2e3,Na=2001,Vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let a=r.indexOf(e);a!==-1&&r.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,t);t.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hd=1234567,pr=Math.PI/180,lo=180/Math.PI;function Fi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function en(s,t,e){return Math.max(t,Math.min(e,s))}function hu(s,t){return(s%t+t)%t}function Xg(s,t,e,n,r){return n+(s-t)*(r-n)/(e-t)}function qg(s,t,e){return s!==t?(e-s)/(t-s):0}function ro(s,t,e){return(1-e)*s+e*t}function Yg(s,t,e,n){return ro(s,t,1-Math.exp(-e*n))}function $g(s,t=1){return t-Math.abs(hu(s,t*2)-t)}function Kg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Jg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function jg(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Qg(s,t){return s+Math.random()*(t-s)}function t_(s){return s*(.5-Math.random())}function e_(s){s!==void 0&&(Hd=s);let t=Hd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function n_(s){return s*pr}function i_(s){return s*lo}function s_(s){return(s&s-1)===0&&s!==0}function r_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function o_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function a_(s,t,e,n,r){let a=Math.cos,l=Math.sin,h=a(e/2),u=l(e/2),f=a((t+n)/2),m=l((t+n)/2),d=a((t-n)/2),g=l((t-n)/2),_=a((n-t)/2),y=l((n-t)/2);switch(r){case"XYX":s.set(h*m,u*d,u*g,h*f);break;case"YZY":s.set(u*g,h*m,u*d,h*f);break;case"ZXZ":s.set(u*d,u*g,h*m,h*f);break;case"XZX":s.set(h*m,u*y,u*_,h*f);break;case"YXY":s.set(u*_,h*m,u*y,h*f);break;case"ZYZ":s.set(u*y,u*_,h*m,h*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ni(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Le(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ml={DEG2RAD:pr,RAD2DEG:lo,generateUUID:Fi,clamp:en,euclideanModulo:hu,mapLinear:Xg,inverseLerp:qg,lerp:ro,damp:Yg,pingpong:$g,smoothstep:Kg,smootherstep:Jg,randInt:jg,randFloat:Qg,randFloatSpread:t_,seededRandom:e_,degToRad:n_,radToDeg:i_,isPowerOfTwo:s_,ceilPowerOfTwo:r_,floorPowerOfTwo:o_,setQuaternionFromProperEuler:a_,normalize:Le,denormalize:ni},Yt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),a=this.x-t.x,l=this.y-t.y;return this.x=a*n-l*r+t.x,this.y=a*r+l*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},le=class s{constructor(t,e,n,r,a,l,h,u,f){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,a,l,h,u,f)}set(t,e,n,r,a,l,h,u,f){let m=this.elements;return m[0]=t,m[1]=r,m[2]=h,m[3]=e,m[4]=a,m[5]=u,m[6]=n,m[7]=l,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,a=this.elements,l=n[0],h=n[3],u=n[6],f=n[1],m=n[4],d=n[7],g=n[2],_=n[5],y=n[8],S=r[0],x=r[3],v=r[6],P=r[1],w=r[4],T=r[7],U=r[2],C=r[5],D=r[8];return a[0]=l*S+h*P+u*U,a[3]=l*x+h*w+u*C,a[6]=l*v+h*T+u*D,a[1]=f*S+m*P+d*U,a[4]=f*x+m*w+d*C,a[7]=f*v+m*T+d*D,a[2]=g*S+_*P+y*U,a[5]=g*x+_*w+y*C,a[8]=g*v+_*T+y*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],l=t[4],h=t[5],u=t[6],f=t[7],m=t[8];return e*l*m-e*h*f-n*a*m+n*h*u+r*a*f-r*l*u}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],l=t[4],h=t[5],u=t[6],f=t[7],m=t[8],d=m*l-h*f,g=h*u-m*a,_=f*a-l*u,y=e*d+n*g+r*_;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/y;return t[0]=d*S,t[1]=(r*f-m*n)*S,t[2]=(h*n-r*l)*S,t[3]=g*S,t[4]=(m*e-r*u)*S,t[5]=(r*a-h*e)*S,t[6]=_*S,t[7]=(n*u-f*e)*S,t[8]=(l*e-n*a)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,a,l,h){let u=Math.cos(a),f=Math.sin(a);return this.set(n*u,n*f,-n*(u*l+f*h)+l+t,-r*f,r*u,-r*(-f*l+u*h)+h+e,0,0,1),this}scale(t,e){return this.premultiply(uc.makeScale(t,e)),this}rotate(t){return this.premultiply(uc.makeRotation(-t)),this}translate(t,e){return this.premultiply(uc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},uc=new le;function ap(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Oa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function l_(){let s=Oa("canvas");return s.style.display="block",s}var Vd={};function io(s){s in Vd||(Vd[s]=!0,console.warn(s))}function c_(s,t,e){return new Promise(function(n,r){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:r();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function h_(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function u_(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Te={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===De&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===De&&(s.r=mr(s.r),s.g=mr(s.g),s.b=mr(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qi?pl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function mr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Gd=[.64,.33,.3,.6,.15,.06],Wd=[.2126,.7152,.0722],Zd=[.3127,.329],Xd=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qd=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Te.define({[Tr]:{primaries:Gd,whitePoint:Zd,transfer:pl,toXYZ:Xd,fromXYZ:qd,luminanceCoefficients:Wd,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:Gd,whitePoint:Zd,transfer:De,toXYZ:Xd,fromXYZ:qd,luminanceCoefficients:Wd,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}});var Ys,Rh=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ys===void 0&&(Ys=Oa("canvas")),Ys.width=t.width,Ys.height=t.height;let n=Ys.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ys}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Oa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=zi(a[l]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zi(e[n]/255)*255):e[n]=zi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},d_=0,Ua=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=Fi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,h=r.length;l<h;l++)r[l].isDataTexture?a.push(dc(r[l].image)):a.push(dc(r[l]))}else a=dc(r);n.url=a}return e||(t.images[this.uuid]=n),n}};function dc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Rh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var f_=0,Nn=class s extends Vi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Ms,r=Ms,a=Vn,l=Ss,h=ii,u=Hi,f=s.DEFAULT_ANISOTROPY,m=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=Fi(),this.name="",this.source=new Ua(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=f,this.format=h,this.internalFormat=null,this.type=u,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qc:t.x=t.x-Math.floor(t.x);break;case Ms:t.x=t.x<0?0:1;break;case th:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qc:t.y=t.y-Math.floor(t.y);break;case Ms:t.y=t.y<0?0:1;break;case th:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Yf;Nn.DEFAULT_ANISOTROPY=1;var Ne=class s{constructor(t=0,e=0,n=0,r=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,a=this.w,l=t.elements;return this.x=l[0]*e+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*e+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*e+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*e+l[7]*n+l[11]*r+l[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,a,u=t.elements,f=u[0],m=u[4],d=u[8],g=u[1],_=u[5],y=u[9],S=u[2],x=u[6],v=u[10];if(Math.abs(m-g)<.01&&Math.abs(d-S)<.01&&Math.abs(y-x)<.01){if(Math.abs(m+g)<.1&&Math.abs(d+S)<.1&&Math.abs(y+x)<.1&&Math.abs(f+_+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(f+1)/2,T=(_+1)/2,U=(v+1)/2,C=(m+g)/4,D=(d+S)/4,O=(y+x)/4;return w>T&&w>U?w<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(w),r=C/n,a=D/n):T>U?T<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(T),n=C/r,a=O/r):U<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(U),n=D/a,r=O/a),this.set(n,r,a,e),this}let P=Math.sqrt((x-y)*(x-y)+(d-S)*(d-S)+(g-m)*(g-m));return Math.abs(P)<.001&&(P=1),this.x=(x-y)/P,this.y=(d-S)/P,this.z=(g-m)/P,this.w=Math.acos((f+_+v-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ch=class extends Vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);let r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let a=new Nn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];let l=n.count;for(let h=0;h<l;h++)this.textures[h]=a.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ua(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gi=class extends Ch{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ka=class extends Nn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=si,this.minFilter=si,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lh=class extends Nn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=si,this.minFilter=si,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ri=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,a,l,h){let u=n[r+0],f=n[r+1],m=n[r+2],d=n[r+3],g=a[l+0],_=a[l+1],y=a[l+2],S=a[l+3];if(h===0){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=d;return}if(h===1){t[e+0]=g,t[e+1]=_,t[e+2]=y,t[e+3]=S;return}if(d!==S||u!==g||f!==_||m!==y){let x=1-h,v=u*g+f*_+m*y+d*S,P=v>=0?1:-1,w=1-v*v;if(w>Number.EPSILON){let U=Math.sqrt(w),C=Math.atan2(U,v*P);x=Math.sin(x*C)/U,h=Math.sin(h*C)/U}let T=h*P;if(u=u*x+g*T,f=f*x+_*T,m=m*x+y*T,d=d*x+S*T,x===1-h){let U=1/Math.sqrt(u*u+f*f+m*m+d*d);u*=U,f*=U,m*=U,d*=U}}t[e]=u,t[e+1]=f,t[e+2]=m,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,a,l){let h=n[r],u=n[r+1],f=n[r+2],m=n[r+3],d=a[l],g=a[l+1],_=a[l+2],y=a[l+3];return t[e]=h*y+m*d+u*_-f*g,t[e+1]=u*y+m*g+f*d-h*_,t[e+2]=f*y+m*_+h*g-u*d,t[e+3]=m*y-h*d-u*g-f*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,a=t._z,l=t._order,h=Math.cos,u=Math.sin,f=h(n/2),m=h(r/2),d=h(a/2),g=u(n/2),_=u(r/2),y=u(a/2);switch(l){case"XYZ":this._x=g*m*d+f*_*y,this._y=f*_*d-g*m*y,this._z=f*m*y+g*_*d,this._w=f*m*d-g*_*y;break;case"YXZ":this._x=g*m*d+f*_*y,this._y=f*_*d-g*m*y,this._z=f*m*y-g*_*d,this._w=f*m*d+g*_*y;break;case"ZXY":this._x=g*m*d-f*_*y,this._y=f*_*d+g*m*y,this._z=f*m*y+g*_*d,this._w=f*m*d-g*_*y;break;case"ZYX":this._x=g*m*d-f*_*y,this._y=f*_*d+g*m*y,this._z=f*m*y-g*_*d,this._w=f*m*d+g*_*y;break;case"YZX":this._x=g*m*d+f*_*y,this._y=f*_*d+g*m*y,this._z=f*m*y-g*_*d,this._w=f*m*d-g*_*y;break;case"XZY":this._x=g*m*d-f*_*y,this._y=f*_*d-g*m*y,this._z=f*m*y+g*_*d,this._w=f*m*d+g*_*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],a=e[8],l=e[1],h=e[5],u=e[9],f=e[2],m=e[6],d=e[10],g=n+h+d;if(g>0){let _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(m-u)*_,this._y=(a-f)*_,this._z=(l-r)*_}else if(n>h&&n>d){let _=2*Math.sqrt(1+n-h-d);this._w=(m-u)/_,this._x=.25*_,this._y=(r+l)/_,this._z=(a+f)/_}else if(h>d){let _=2*Math.sqrt(1+h-n-d);this._w=(a-f)/_,this._x=(r+l)/_,this._y=.25*_,this._z=(u+m)/_}else{let _=2*Math.sqrt(1+d-n-h);this._w=(l-r)/_,this._x=(a+f)/_,this._y=(u+m)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,a=t._z,l=t._w,h=e._x,u=e._y,f=e._z,m=e._w;return this._x=n*m+l*h+r*f-a*u,this._y=r*m+l*u+a*h-n*f,this._z=a*m+l*f+n*u-r*h,this._w=l*m-n*h-r*u-a*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,a=this._z,l=this._w,h=l*t._w+n*t._x+r*t._y+a*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=l,this._x=n,this._y=r,this._z=a,this;let u=1-h*h;if(u<=Number.EPSILON){let _=1-e;return this._w=_*l+e*this._w,this._x=_*n+e*this._x,this._y=_*r+e*this._y,this._z=_*a+e*this._z,this.normalize(),this}let f=Math.sqrt(u),m=Math.atan2(f,h),d=Math.sin((1-e)*m)/f,g=Math.sin(e*m)/f;return this._w=l*d+this._w*g,this._x=n*d+this._x*g,this._y=r*d+this._y*g,this._z=a*d+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*r,this.y=a[1]*e+a[4]*n+a[7]*r,this.z=a[2]*e+a[5]*n+a[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,a=t.elements,l=1/(a[3]*e+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*e+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*e+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,a=t.x,l=t.y,h=t.z,u=t.w,f=2*(l*r-h*n),m=2*(h*e-a*r),d=2*(a*n-l*e);return this.x=e+u*f+l*d-h*m,this.y=n+u*m+h*f-a*d,this.z=r+u*d+a*m-l*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r,this.y=a[1]*e+a[5]*n+a[9]*r,this.z=a[2]*e+a[6]*n+a[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,a=t.z,l=e.x,h=e.y,u=e.z;return this.x=r*u-a*h,this.y=a*l-n*u,this.z=n*h-r*l,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fc.copy(this).projectOnVector(t),this.sub(fc)}reflect(t){return this.sub(fc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fc=new H,Yd=new ri,Gn=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let l=0,h=a.count;l<h;l++)t.isMesh===!0?t.getVertexPosition(l,jn):jn.fromBufferAttribute(a,l),jn.applyMatrix4(t.matrixWorld),this.expandByPoint(jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$o.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$o.copy(n.boundingBox)),$o.applyMatrix4(t.matrixWorld),this.union($o)}let r=t.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($r),Ko.subVectors(this.max,$r),$s.subVectors(t.a,$r),Ks.subVectors(t.b,$r),Js.subVectors(t.c,$r),qi.subVectors(Ks,$s),Yi.subVectors(Js,Ks),fs.subVectors($s,Js);let e=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-fs.z,fs.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,fs.z,0,-fs.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-fs.y,fs.x,0];return!pc(e,$s,Ks,Js,Ko)||(e=[1,0,0,0,1,0,0,0,1],!pc(e,$s,Ks,Js,Ko))?!1:(Jo.crossVectors(qi,Yi),e=[Jo.x,Jo.y,Jo.z],pc(e,$s,Ks,Js,Ko))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ri=[new H,new H,new H,new H,new H,new H,new H,new H],jn=new H,$o=new Gn,$s=new H,Ks=new H,Js=new H,qi=new H,Yi=new H,fs=new H,$r=new H,Ko=new H,Jo=new H,ps=new H;function pc(s,t,e,n,r){for(let a=0,l=s.length-3;a<=l;a+=3){ps.fromArray(s,a);let h=r.x*Math.abs(ps.x)+r.y*Math.abs(ps.y)+r.z*Math.abs(ps.z),u=t.dot(ps),f=e.dot(ps),m=n.dot(ps);if(Math.max(-Math.max(u,f,m),Math.min(u,f,m))>h)return!1}return!0}var p_=new Gn,Kr=new H,mc=new H,oi=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):p_.setFromPoints(t).getCenter(n);let r=0;for(let a=0,l=t.length;a<l;a++)r=Math.max(r,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Kr.subVectors(t,this.center);let e=Kr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Kr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Kr.copy(t.center).add(mc)),this.expandByPoint(Kr.copy(t.center).sub(mc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ci=new H,gc=new H,jo=new H,$i=new H,_c=new H,Qo=new H,vc=new H,Ts=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){gc.copy(t).add(e).multiplyScalar(.5),jo.copy(e).sub(t).normalize(),$i.copy(this.origin).sub(gc);let a=t.distanceTo(e)*.5,l=-this.direction.dot(jo),h=$i.dot(this.direction),u=-$i.dot(jo),f=$i.lengthSq(),m=Math.abs(1-l*l),d,g,_,y;if(m>0)if(d=l*u-h,g=l*h-u,y=a*m,d>=0)if(g>=-y)if(g<=y){let S=1/m;d*=S,g*=S,_=d*(d+l*g+2*h)+g*(l*d+g+2*u)+f}else g=a,d=Math.max(0,-(l*g+h)),_=-d*d+g*(g+2*u)+f;else g=-a,d=Math.max(0,-(l*g+h)),_=-d*d+g*(g+2*u)+f;else g<=-y?(d=Math.max(0,-(-l*a+h)),g=d>0?-a:Math.min(Math.max(-a,-u),a),_=-d*d+g*(g+2*u)+f):g<=y?(d=0,g=Math.min(Math.max(-a,-u),a),_=g*(g+2*u)+f):(d=Math.max(0,-(l*a+h)),g=d>0?a:Math.min(Math.max(-a,-u),a),_=-d*d+g*(g+2*u)+f);else g=l>0?-a:a,d=Math.max(0,-(l*g+h)),_=-d*d+g*(g+2*u)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(gc).addScaledVector(jo,g),_}intersectSphere(t,e){Ci.subVectors(t.center,this.origin);let n=Ci.dot(this.direction),r=Ci.dot(Ci)-n*n,a=t.radius*t.radius;if(r>a)return null;let l=Math.sqrt(a-r),h=n-l,u=n+l;return u<0?null:h<0?this.at(u,e):this.at(h,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,a,l,h,u,f=1/this.direction.x,m=1/this.direction.y,d=1/this.direction.z,g=this.origin;return f>=0?(n=(t.min.x-g.x)*f,r=(t.max.x-g.x)*f):(n=(t.max.x-g.x)*f,r=(t.min.x-g.x)*f),m>=0?(a=(t.min.y-g.y)*m,l=(t.max.y-g.y)*m):(a=(t.max.y-g.y)*m,l=(t.min.y-g.y)*m),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),d>=0?(h=(t.min.z-g.z)*d,u=(t.max.z-g.z)*d):(h=(t.max.z-g.z)*d,u=(t.min.z-g.z)*d),n>u||h>r)||((h>n||n!==n)&&(n=h),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,n,r,a){_c.subVectors(e,t),Qo.subVectors(n,t),vc.crossVectors(_c,Qo);let l=this.direction.dot(vc),h;if(l>0){if(r)return null;h=1}else if(l<0)h=-1,l=-l;else return null;$i.subVectors(this.origin,t);let u=h*this.direction.dot(Qo.crossVectors($i,Qo));if(u<0)return null;let f=h*this.direction.dot(_c.cross($i));if(f<0||u+f>l)return null;let m=-h*$i.dot(vc);return m<0?null:this.at(m/l,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fe=class s{constructor(t,e,n,r,a,l,h,u,f,m,d,g,_,y,S,x){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,a,l,h,u,f,m,d,g,_,y,S,x)}set(t,e,n,r,a,l,h,u,f,m,d,g,_,y,S,x){let v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=r,v[1]=a,v[5]=l,v[9]=h,v[13]=u,v[2]=f,v[6]=m,v[10]=d,v[14]=g,v[3]=_,v[7]=y,v[11]=S,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/js.setFromMatrixColumn(t,0).length(),a=1/js.setFromMatrixColumn(t,1).length(),l=1/js.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*l,e[9]=n[9]*l,e[10]=n[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,a=t.z,l=Math.cos(n),h=Math.sin(n),u=Math.cos(r),f=Math.sin(r),m=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let g=l*m,_=l*d,y=h*m,S=h*d;e[0]=u*m,e[4]=-u*d,e[8]=f,e[1]=_+y*f,e[5]=g-S*f,e[9]=-h*u,e[2]=S-g*f,e[6]=y+_*f,e[10]=l*u}else if(t.order==="YXZ"){let g=u*m,_=u*d,y=f*m,S=f*d;e[0]=g+S*h,e[4]=y*h-_,e[8]=l*f,e[1]=l*d,e[5]=l*m,e[9]=-h,e[2]=_*h-y,e[6]=S+g*h,e[10]=l*u}else if(t.order==="ZXY"){let g=u*m,_=u*d,y=f*m,S=f*d;e[0]=g-S*h,e[4]=-l*d,e[8]=y+_*h,e[1]=_+y*h,e[5]=l*m,e[9]=S-g*h,e[2]=-l*f,e[6]=h,e[10]=l*u}else if(t.order==="ZYX"){let g=l*m,_=l*d,y=h*m,S=h*d;e[0]=u*m,e[4]=y*f-_,e[8]=g*f+S,e[1]=u*d,e[5]=S*f+g,e[9]=_*f-y,e[2]=-f,e[6]=h*u,e[10]=l*u}else if(t.order==="YZX"){let g=l*u,_=l*f,y=h*u,S=h*f;e[0]=u*m,e[4]=S-g*d,e[8]=y*d+_,e[1]=d,e[5]=l*m,e[9]=-h*m,e[2]=-f*m,e[6]=_*d+y,e[10]=g-S*d}else if(t.order==="XZY"){let g=l*u,_=l*f,y=h*u,S=h*f;e[0]=u*m,e[4]=-d,e[8]=f*m,e[1]=g*d+S,e[5]=l*m,e[9]=_*d-y,e[2]=y*d-_,e[6]=h*m,e[10]=S*d+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(m_,t,g_)}lookAt(t,e,n){let r=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Ki.crossVectors(n,Ln),Ki.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Ki.crossVectors(n,Ln)),Ki.normalize(),ta.crossVectors(Ln,Ki),r[0]=Ki.x,r[4]=ta.x,r[8]=Ln.x,r[1]=Ki.y,r[5]=ta.y,r[9]=Ln.y,r[2]=Ki.z,r[6]=ta.z,r[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,a=this.elements,l=n[0],h=n[4],u=n[8],f=n[12],m=n[1],d=n[5],g=n[9],_=n[13],y=n[2],S=n[6],x=n[10],v=n[14],P=n[3],w=n[7],T=n[11],U=n[15],C=r[0],D=r[4],O=r[8],A=r[12],E=r[1],B=r[5],q=r[9],Z=r[13],j=r[2],it=r[6],V=r[10],pt=r[14],G=r[3],ut=r[7],lt=r[11],ct=r[15];return a[0]=l*C+h*E+u*j+f*G,a[4]=l*D+h*B+u*it+f*ut,a[8]=l*O+h*q+u*V+f*lt,a[12]=l*A+h*Z+u*pt+f*ct,a[1]=m*C+d*E+g*j+_*G,a[5]=m*D+d*B+g*it+_*ut,a[9]=m*O+d*q+g*V+_*lt,a[13]=m*A+d*Z+g*pt+_*ct,a[2]=y*C+S*E+x*j+v*G,a[6]=y*D+S*B+x*it+v*ut,a[10]=y*O+S*q+x*V+v*lt,a[14]=y*A+S*Z+x*pt+v*ct,a[3]=P*C+w*E+T*j+U*G,a[7]=P*D+w*B+T*it+U*ut,a[11]=P*O+w*q+T*V+U*lt,a[15]=P*A+w*Z+T*pt+U*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],a=t[12],l=t[1],h=t[5],u=t[9],f=t[13],m=t[2],d=t[6],g=t[10],_=t[14],y=t[3],S=t[7],x=t[11],v=t[15];return y*(+a*u*d-r*f*d-a*h*g+n*f*g+r*h*_-n*u*_)+S*(+e*u*_-e*f*g+a*l*g-r*l*_+r*f*m-a*u*m)+x*(+e*f*d-e*h*_-a*l*d+n*l*_+a*h*m-n*f*m)+v*(-r*h*m-e*u*d+e*h*g+r*l*d-n*l*g+n*u*m)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],l=t[4],h=t[5],u=t[6],f=t[7],m=t[8],d=t[9],g=t[10],_=t[11],y=t[12],S=t[13],x=t[14],v=t[15],P=d*x*f-S*g*f+S*u*_-h*x*_-d*u*v+h*g*v,w=y*g*f-m*x*f-y*u*_+l*x*_+m*u*v-l*g*v,T=m*S*f-y*d*f+y*h*_-l*S*_-m*h*v+l*d*v,U=y*d*u-m*S*u-y*h*g+l*S*g+m*h*x-l*d*x,C=e*P+n*w+r*T+a*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return t[0]=P*D,t[1]=(S*g*a-d*x*a-S*r*_+n*x*_+d*r*v-n*g*v)*D,t[2]=(h*x*a-S*u*a+S*r*f-n*x*f-h*r*v+n*u*v)*D,t[3]=(d*u*a-h*g*a-d*r*f+n*g*f+h*r*_-n*u*_)*D,t[4]=w*D,t[5]=(m*x*a-y*g*a+y*r*_-e*x*_-m*r*v+e*g*v)*D,t[6]=(y*u*a-l*x*a-y*r*f+e*x*f+l*r*v-e*u*v)*D,t[7]=(l*g*a-m*u*a+m*r*f-e*g*f-l*r*_+e*u*_)*D,t[8]=T*D,t[9]=(y*d*a-m*S*a-y*n*_+e*S*_+m*n*v-e*d*v)*D,t[10]=(l*S*a-y*h*a+y*n*f-e*S*f-l*n*v+e*h*v)*D,t[11]=(m*h*a-l*d*a-m*n*f+e*d*f+l*n*_-e*h*_)*D,t[12]=U*D,t[13]=(m*S*r-y*d*r+y*n*g-e*S*g-m*n*x+e*d*x)*D,t[14]=(y*h*r-l*S*r-y*n*u+e*S*u+l*n*x-e*h*x)*D,t[15]=(l*d*r-m*h*r+m*n*u-e*d*u-l*n*g+e*h*g)*D,this}scale(t){let e=this.elements,n=t.x,r=t.y,a=t.z;return e[0]*=n,e[4]*=r,e[8]*=a,e[1]*=n,e[5]*=r,e[9]*=a,e[2]*=n,e[6]*=r,e[10]*=a,e[3]*=n,e[7]*=r,e[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),a=1-n,l=t.x,h=t.y,u=t.z,f=a*l,m=a*h;return this.set(f*l+n,f*h-r*u,f*u+r*h,0,f*h+r*u,m*h+n,m*u-r*l,0,f*u-r*h,m*u+r*l,a*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,a,l){return this.set(1,n,a,0,t,1,l,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,a=e._x,l=e._y,h=e._z,u=e._w,f=a+a,m=l+l,d=h+h,g=a*f,_=a*m,y=a*d,S=l*m,x=l*d,v=h*d,P=u*f,w=u*m,T=u*d,U=n.x,C=n.y,D=n.z;return r[0]=(1-(S+v))*U,r[1]=(_+T)*U,r[2]=(y-w)*U,r[3]=0,r[4]=(_-T)*C,r[5]=(1-(g+v))*C,r[6]=(x+P)*C,r[7]=0,r[8]=(y+w)*D,r[9]=(x-P)*D,r[10]=(1-(g+S))*D,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,a=js.set(r[0],r[1],r[2]).length(),l=js.set(r[4],r[5],r[6]).length(),h=js.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),t.x=r[12],t.y=r[13],t.z=r[14],Qn.copy(this);let f=1/a,m=1/l,d=1/h;return Qn.elements[0]*=f,Qn.elements[1]*=f,Qn.elements[2]*=f,Qn.elements[4]*=m,Qn.elements[5]*=m,Qn.elements[6]*=m,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,e.setFromRotationMatrix(Qn),n.x=a,n.y=l,n.z=h,this}makePerspective(t,e,n,r,a,l,h=ki){let u=this.elements,f=2*a/(e-t),m=2*a/(n-r),d=(e+t)/(e-t),g=(n+r)/(n-r),_,y;if(h===ki)_=-(l+a)/(l-a),y=-2*l*a/(l-a);else if(h===Na)_=-l/(l-a),y=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return u[0]=f,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=m,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,r,a,l,h=ki){let u=this.elements,f=1/(e-t),m=1/(n-r),d=1/(l-a),g=(e+t)*f,_=(n+r)*m,y,S;if(h===ki)y=(l+a)*d,S=-2*d;else if(h===Na)y=a*d,S=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return u[0]=2*f,u[4]=0,u[8]=0,u[12]=-g,u[1]=0,u[5]=2*m,u[9]=0,u[13]=-_,u[2]=0,u[6]=0,u[10]=S,u[14]=-y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},js=new H,Qn=new Fe,m_=new H(0,0,0),g_=new H(1,1,1),Ki=new H,ta=new H,Ln=new H,$d=new Fe,Kd=new ri,vi=class s{constructor(t=0,e=0,n=0,r=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,a=r[0],l=r[4],h=r[8],u=r[1],f=r[5],m=r[9],d=r[2],g=r[6],_=r[10];switch(e){case"XYZ":this._y=Math.asin(en(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,_),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-en(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(h,_),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(en(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(u,a));break;case"ZYX":this._y=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(u,a)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(en(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(h,_));break;case"XZY":this._z=Math.asin(-en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(h,a)):(this._x=Math.atan2(-m,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $d.makeRotationFromQuaternion(t),this.setFromRotationMatrix($d,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kd.setFromEuler(this),this.setFromQuaternion(Kd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vi.DEFAULT_ORDER="XYZ";var Ba=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},__=0,Jd=new H,Qs=new ri,Li=new Fe,ea=new H,Jr=new H,v_=new H,x_=new ri,jd=new H(1,0,0),Qd=new H(0,1,0),tf=new H(0,0,1),ef={type:"added"},y_={type:"removed"},tr={type:"childadded",child:null},xc={type:"childremoved",child:null},nn=class s extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new H,e=new vi,n=new ri,r=new H(1,1,1);function a(){n.setFromEuler(e,!1)}function l(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Fe},normalMatrix:{value:new le}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qs.setFromAxisAngle(t,e),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(t,e){return Qs.setFromAxisAngle(t,e),this.quaternion.premultiply(Qs),this}rotateX(t){return this.rotateOnAxis(jd,t)}rotateY(t){return this.rotateOnAxis(Qd,t)}rotateZ(t){return this.rotateOnAxis(tf,t)}translateOnAxis(t,e){return Jd.copy(t).applyQuaternion(this.quaternion),this.position.add(Jd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jd,t)}translateY(t){return this.translateOnAxis(Qd,t)}translateZ(t){return this.translateOnAxis(tf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ea.copy(t):ea.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Jr,ea,this.up):Li.lookAt(ea,Jr,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),Qs.setFromRotationMatrix(Li),this.quaternion.premultiply(Qs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ef),tr.child=t,this.dispatchEvent(tr),tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(y_),xc.child=t,this.dispatchEvent(xc),xc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ef),tr.child=t,this.dispatchEvent(tr),tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let l=this.children[n].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,t,v_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,x_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(h,u){return h[u.uuid]===void 0&&(h[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);let h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){let u=h.shapes;if(Array.isArray(u))for(let f=0,m=u.length;f<m;f++){let d=u[f];a(t.shapes,d)}else a(t.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let h=[];for(let u=0,f=this.material.length;u<f;u++)h.push(a(t.materials,this.material[u]));r.material=h}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){let u=this.animations[h];r.animations.push(a(t.animations,u))}}if(e){let h=l(t.geometries),u=l(t.materials),f=l(t.textures),m=l(t.images),d=l(t.shapes),g=l(t.skeletons),_=l(t.animations),y=l(t.nodes);h.length>0&&(n.geometries=h),u.length>0&&(n.materials=u),f.length>0&&(n.textures=f),m.length>0&&(n.images=m),d.length>0&&(n.shapes=d),g.length>0&&(n.skeletons=g),_.length>0&&(n.animations=_),y.length>0&&(n.nodes=y)}return n.object=r,n;function l(h){let u=[];for(let f in h){let m=h[f];delete m.metadata,u.push(m)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};nn.DEFAULT_UP=new H(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ti=new H,Ii=new H,yc=new H,Di=new H,er=new H,nr=new H,nf=new H,bc=new H,Mc=new H,Sc=new H,wc=new Ne,Tc=new Ne,Ec=new Ne,Oi=class s{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ti.subVectors(t,e),r.cross(ti);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(t,e,n,r,a){ti.subVectors(r,e),Ii.subVectors(n,e),yc.subVectors(t,e);let l=ti.dot(ti),h=ti.dot(Ii),u=ti.dot(yc),f=Ii.dot(Ii),m=Ii.dot(yc),d=l*f-h*h;if(d===0)return a.set(0,0,0),null;let g=1/d,_=(f*u-h*m)*g,y=(l*m-h*u)*g;return a.set(1-_-y,y,_)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,n,r,a,l,h,u){return this.getBarycoord(t,e,n,r,Di)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(a,Di.x),u.addScaledVector(l,Di.y),u.addScaledVector(h,Di.z),u)}static getInterpolatedAttribute(t,e,n,r,a,l){return wc.setScalar(0),Tc.setScalar(0),Ec.setScalar(0),wc.fromBufferAttribute(t,e),Tc.fromBufferAttribute(t,n),Ec.fromBufferAttribute(t,r),l.setScalar(0),l.addScaledVector(wc,a.x),l.addScaledVector(Tc,a.y),l.addScaledVector(Ec,a.z),l}static isFrontFacing(t,e,n,r){return ti.subVectors(n,e),Ii.subVectors(t,e),ti.cross(Ii).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ti.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,a){return s.getInterpolation(t,this.a,this.b,this.c,e,n,r,a)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,a=this.c,l,h;er.subVectors(r,n),nr.subVectors(a,n),bc.subVectors(t,n);let u=er.dot(bc),f=nr.dot(bc);if(u<=0&&f<=0)return e.copy(n);Mc.subVectors(t,r);let m=er.dot(Mc),d=nr.dot(Mc);if(m>=0&&d<=m)return e.copy(r);let g=u*d-m*f;if(g<=0&&u>=0&&m<=0)return l=u/(u-m),e.copy(n).addScaledVector(er,l);Sc.subVectors(t,a);let _=er.dot(Sc),y=nr.dot(Sc);if(y>=0&&_<=y)return e.copy(a);let S=_*f-u*y;if(S<=0&&f>=0&&y<=0)return h=f/(f-y),e.copy(n).addScaledVector(nr,h);let x=m*y-_*d;if(x<=0&&d-m>=0&&_-y>=0)return nf.subVectors(a,r),h=(d-m)/(d-m+(_-y)),e.copy(r).addScaledVector(nf,h);let v=1/(x+S+g);return l=S*v,h=g*v,e.copy(n).addScaledVector(er,l).addScaledVector(nr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},na={h:0,s:0,l:0};function Ac(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var pe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Te.workingColorSpace){return this.r=t,this.g=e,this.b=n,Te.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Te.workingColorSpace){if(t=hu(t,1),e=en(e,0,1),n=en(n,0,1),e===0)this.r=this.g=this.b=n;else{let a=n<=.5?n*(1+e):n+e-n*e,l=2*n-a;this.r=Ac(l,a,t+1/3),this.g=Ac(l,a,t),this.b=Ac(l,a,t-1/3)}return Te.toWorkingColorSpace(this,r),this}setStyle(t,e=zn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,l=r[1],h=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=zn){let n=lp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}copyLinearToSRGB(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=zn){return Te.fromWorkingColorSpace(pn.copy(this),t),Math.round(en(pn.r*255,0,255))*65536+Math.round(en(pn.g*255,0,255))*256+Math.round(en(pn.b*255,0,255))}getHexString(t=zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.fromWorkingColorSpace(pn.copy(this),e);let n=pn.r,r=pn.g,a=pn.b,l=Math.max(n,r,a),h=Math.min(n,r,a),u,f,m=(h+l)/2;if(h===l)u=0,f=0;else{let d=l-h;switch(f=m<=.5?d/(l+h):d/(2-l-h),l){case n:u=(r-a)/d+(r<a?6:0);break;case r:u=(a-n)/d+2;break;case a:u=(n-r)/d+4;break}u/=6}return t.h=u,t.s=f,t.l=m,t}getRGB(t,e=Te.workingColorSpace){return Te.fromWorkingColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=zn){Te.fromWorkingColorSpace(pn.copy(this),t);let e=pn.r,n=pn.g,r=pn.b;return t!==zn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(na);let n=ro(Ji.h,na.h,e),r=ro(Ji.s,na.s,e),a=ro(Ji.l,na.l,e);return this.setHSL(n,r,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*r,this.g=a[1]*e+a[4]*n+a[7]*r,this.b=a[2]*e+a[5]*n+a[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new pe;pe.NAMES=lp;var b_=0,xi=class extends Vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=Fi(),this.name="",this.blending=dr,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vc,this.blendDst=Gc,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(n.blending=this.blending),this.side!==ns&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vc&&(n.blendSrc=this.blendSrc),this.blendDst!==Gc&&(n.blendDst=this.blendDst),this.blendEquation!==ys&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){let l=[];for(let h in a){let u=a[h];delete u.metadata,l.push(u)}return l}if(e){let a=r(t.textures),l=r(t.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Wn=class extends xi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var $e=new H,ia=new Yt,Dn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ph,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ia.fromBufferAttribute(this,e),ia.applyMatrix3(t),this.setXY(e,ia.x,ia.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,a){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),r=Le(r,this.array),a=Le(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ph&&(t.usage=this.usage),t}};var Fa=class extends Dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var za=class extends Dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ye=class extends Dn{constructor(t,e,n){super(new Float32Array(t),e,n)}},M_=0,Fn=new Fe,Pc=new nn,ir=new H,In=new Gn,jr=new Gn,tn=new H,Ge=class s extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ap(t)?za:Fa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let a=new le().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,n){return Fn.makeTranslation(t,e,n),this.applyMatrix4(Fn),this}scale(t,e,n){return Fn.makeScale(t,e,n),this.applyMatrix4(Fn),this}lookAt(t){return Pc.lookAt(t),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,a=t.length;r<a;r++){let l=t[r];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new ye(n,3))}else{for(let n=0,r=e.count;n<r;n++){let a=t[n];e.setXYZ(n,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let a=e[n];In.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let a=0,l=e.length;a<l;a++){let h=e[a];jr.setFromBufferAttribute(h),this.morphTargetsRelative?(tn.addVectors(In.min,jr.min),In.expandByPoint(tn),tn.addVectors(In.max,jr.max),In.expandByPoint(tn)):(In.expandByPoint(jr.min),In.expandByPoint(jr.max))}In.getCenter(n);let r=0;for(let a=0,l=t.count;a<l;a++)tn.fromBufferAttribute(t,a),r=Math.max(r,n.distanceToSquared(tn));if(e)for(let a=0,l=e.length;a<l;a++){let h=e[a],u=this.morphTargetsRelative;for(let f=0,m=h.count;f<m;f++)tn.fromBufferAttribute(h,f),u&&(ir.fromBufferAttribute(t,f),tn.add(ir)),r=Math.max(r,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*n.count),4));let l=this.getAttribute("tangent"),h=[],u=[];for(let O=0;O<n.count;O++)h[O]=new H,u[O]=new H;let f=new H,m=new H,d=new H,g=new Yt,_=new Yt,y=new Yt,S=new H,x=new H;function v(O,A,E){f.fromBufferAttribute(n,O),m.fromBufferAttribute(n,A),d.fromBufferAttribute(n,E),g.fromBufferAttribute(a,O),_.fromBufferAttribute(a,A),y.fromBufferAttribute(a,E),m.sub(f),d.sub(f),_.sub(g),y.sub(g);let B=1/(_.x*y.y-y.x*_.y);isFinite(B)&&(S.copy(m).multiplyScalar(y.y).addScaledVector(d,-_.y).multiplyScalar(B),x.copy(d).multiplyScalar(_.x).addScaledVector(m,-y.x).multiplyScalar(B),h[O].add(S),h[A].add(S),h[E].add(S),u[O].add(x),u[A].add(x),u[E].add(x))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let O=0,A=P.length;O<A;++O){let E=P[O],B=E.start,q=E.count;for(let Z=B,j=B+q;Z<j;Z+=3)v(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}let w=new H,T=new H,U=new H,C=new H;function D(O){U.fromBufferAttribute(r,O),C.copy(U);let A=h[O];w.copy(A),w.sub(U.multiplyScalar(U.dot(A))).normalize(),T.crossVectors(C,A);let B=T.dot(u[O])<0?-1:1;l.setXYZW(O,w.x,w.y,w.z,B)}for(let O=0,A=P.length;O<A;++O){let E=P[O],B=E.start,q=E.count;for(let Z=B,j=B+q;Z<j;Z+=3)D(t.getX(Z+0)),D(t.getX(Z+1)),D(t.getX(Z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,_=n.count;g<_;g++)n.setXYZ(g,0,0,0);let r=new H,a=new H,l=new H,h=new H,u=new H,f=new H,m=new H,d=new H;if(t)for(let g=0,_=t.count;g<_;g+=3){let y=t.getX(g+0),S=t.getX(g+1),x=t.getX(g+2);r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,S),l.fromBufferAttribute(e,x),m.subVectors(l,a),d.subVectors(r,a),m.cross(d),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,x),h.add(m),u.add(m),f.add(m),n.setXYZ(y,h.x,h.y,h.z),n.setXYZ(S,u.x,u.y,u.z),n.setXYZ(x,f.x,f.y,f.z)}else for(let g=0,_=e.count;g<_;g+=3)r.fromBufferAttribute(e,g+0),a.fromBufferAttribute(e,g+1),l.fromBufferAttribute(e,g+2),m.subVectors(l,a),d.subVectors(r,a),m.cross(d),n.setXYZ(g+0,m.x,m.y,m.z),n.setXYZ(g+1,m.x,m.y,m.z),n.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(h,u){let f=h.array,m=h.itemSize,d=h.normalized,g=new f.constructor(u.length*m),_=0,y=0;for(let S=0,x=u.length;S<x;S++){h.isInterleavedBufferAttribute?_=u[S]*h.data.stride+h.offset:_=u[S]*m;for(let v=0;v<m;v++)g[y++]=f[_++]}return new Dn(g,m,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,r=this.attributes;for(let h in r){let u=r[h],f=t(u,n);e.setAttribute(h,f)}let a=this.morphAttributes;for(let h in a){let u=[],f=a[h];for(let m=0,d=f.length;m<d;m++){let g=f[m],_=t(g,n);u.push(_)}e.morphAttributes[h]=u}e.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let h=0,u=l.length;h<u;h++){let f=l[h];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let u=this.parameters;for(let f in u)u[f]!==void 0&&(t[f]=u[f]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let u in n){let f=n[u];t.data.attributes[u]=f.toJSON(t.data)}let r={},a=!1;for(let u in this.morphAttributes){let f=this.morphAttributes[u],m=[];for(let d=0,g=f.length;d<g;d++){let _=f[d];m.push(_.toJSON(t.data))}m.length>0&&(r[u]=m,a=!0)}a&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));let h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let r=t.attributes;for(let f in r){let m=r[f];this.setAttribute(f,m.clone(e))}let a=t.morphAttributes;for(let f in a){let m=[],d=a[f];for(let g=0,_=d.length;g<_;g++)m.push(d[g].clone(e));this.morphAttributes[f]=m}this.morphTargetsRelative=t.morphTargetsRelative;let l=t.groups;for(let f=0,m=l.length;f<m;f++){let d=l[f];this.addGroup(d.start,d.count,d.materialIndex)}let h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sf=new Fe,ms=new Ts,sa=new oi,rf=new H,ra=new H,oa=new H,aa=new H,Rc=new H,la=new H,of=new H,ca=new H,Be=class extends nn{constructor(t=new Ge,e=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){let h=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let h=this.morphTargetInfluences;if(a&&h){la.set(0,0,0);for(let u=0,f=a.length;u<f;u++){let m=h[u],d=a[u];m!==0&&(Rc.fromBufferAttribute(d,t),l?la.addScaledVector(Rc,m):la.addScaledVector(Rc.sub(e),m))}e.add(la)}return e}raycast(t,e){let n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(a),ms.copy(t.ray).recast(t.near),!(sa.containsPoint(ms.origin)===!1&&(ms.intersectSphere(sa,rf)===null||ms.origin.distanceToSquared(rf)>(t.far-t.near)**2))&&(sf.copy(a).invert(),ms.copy(t.ray).applyMatrix4(sf),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ms)))}_computeIntersections(t,e,n){let r,a=this.geometry,l=this.material,h=a.index,u=a.attributes.position,f=a.attributes.uv,m=a.attributes.uv1,d=a.attributes.normal,g=a.groups,_=a.drawRange;if(h!==null)if(Array.isArray(l))for(let y=0,S=g.length;y<S;y++){let x=g[y],v=l[x.materialIndex],P=Math.max(x.start,_.start),w=Math.min(h.count,Math.min(x.start+x.count,_.start+_.count));for(let T=P,U=w;T<U;T+=3){let C=h.getX(T),D=h.getX(T+1),O=h.getX(T+2);r=ha(this,v,t,n,f,m,d,C,D,O),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{let y=Math.max(0,_.start),S=Math.min(h.count,_.start+_.count);for(let x=y,v=S;x<v;x+=3){let P=h.getX(x),w=h.getX(x+1),T=h.getX(x+2);r=ha(this,l,t,n,f,m,d,P,w,T),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}else if(u!==void 0)if(Array.isArray(l))for(let y=0,S=g.length;y<S;y++){let x=g[y],v=l[x.materialIndex],P=Math.max(x.start,_.start),w=Math.min(u.count,Math.min(x.start+x.count,_.start+_.count));for(let T=P,U=w;T<U;T+=3){let C=T,D=T+1,O=T+2;r=ha(this,v,t,n,f,m,d,C,D,O),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{let y=Math.max(0,_.start),S=Math.min(u.count,_.start+_.count);for(let x=y,v=S;x<v;x+=3){let P=x,w=x+1,T=x+2;r=ha(this,l,t,n,f,m,d,P,w,T),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}}};function S_(s,t,e,n,r,a,l,h){let u;if(t.side===mn?u=n.intersectTriangle(l,a,r,!0,h):u=n.intersectTriangle(r,a,l,t.side===ns,h),u===null)return null;ca.copy(h),ca.applyMatrix4(s.matrixWorld);let f=e.ray.origin.distanceTo(ca);return f<e.near||f>e.far?null:{distance:f,point:ca.clone(),object:s}}function ha(s,t,e,n,r,a,l,h,u,f){s.getVertexPosition(h,ra),s.getVertexPosition(u,oa),s.getVertexPosition(f,aa);let m=S_(s,t,e,n,ra,oa,aa,of);if(m){let d=new H;Oi.getBarycoord(of,ra,oa,aa,d),r&&(m.uv=Oi.getInterpolatedAttribute(r,h,u,f,d,new Yt)),a&&(m.uv1=Oi.getInterpolatedAttribute(a,h,u,f,d,new Yt)),l&&(m.normal=Oi.getInterpolatedAttribute(l,h,u,f,d,new H),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));let g={a:h,b:u,c:f,normal:new H,materialIndex:0};Oi.getNormal(ra,oa,aa,g.normal),m.face=g,m.barycoord=d}return m}var Zn=class s extends Ge{constructor(t=1,e=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};let h=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);let u=[],f=[],m=[],d=[],g=0,_=0;y("z","y","x",-1,-1,n,e,t,l,a,0),y("z","y","x",1,-1,n,e,-t,l,a,1),y("x","z","y",1,1,t,n,e,r,l,2),y("x","z","y",1,-1,t,n,-e,r,l,3),y("x","y","z",1,-1,t,e,n,r,a,4),y("x","y","z",-1,-1,t,e,-n,r,a,5),this.setIndex(u),this.setAttribute("position",new ye(f,3)),this.setAttribute("normal",new ye(m,3)),this.setAttribute("uv",new ye(d,2));function y(S,x,v,P,w,T,U,C,D,O,A){let E=T/D,B=U/O,q=T/2,Z=U/2,j=C/2,it=D+1,V=O+1,pt=0,G=0,ut=new H;for(let lt=0;lt<V;lt++){let ct=lt*B-Z;for(let Mt=0;Mt<it;Mt++){let wt=Mt*E-q;ut[S]=wt*P,ut[x]=ct*w,ut[v]=j,f.push(ut.x,ut.y,ut.z),ut[S]=0,ut[x]=0,ut[v]=C>0?1:-1,m.push(ut.x,ut.y,ut.z),d.push(Mt/D),d.push(1-lt/O),pt+=1}}for(let lt=0;lt<O;lt++)for(let ct=0;ct<D;ct++){let Mt=g+ct+it*lt,wt=g+ct+it*(lt+1),J=g+(ct+1)+it*(lt+1),Y=g+(ct+1)+it*lt;u.push(Mt,wt,Y),u.push(wt,J,Y),G+=6}h.addGroup(_,G,A),_+=G,g+=pt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Mr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let r=s[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function xn(s){let t={};for(let e=0;e<s.length;e++){let n=Mr(s[e]);for(let r in n)t[r]=n[r]}return t}function w_(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function cp(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}var gl={clone:Mr,merge:xn},T_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xn=class extends xi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T_,this.fragmentShader=E_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mr(t.uniforms),this.uniformsGroups=w_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let l=this.uniforms[r].value;l&&l.isTexture?e.uniforms[r]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[r]={type:"m4",value:l.toArray()}:e.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ha=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=ki}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ji=new H,af=new Yt,lf=new Yt,yn=class extends Ha{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=lo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lo*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,e){return this.getViewBounds(t,af,lf),e.subVectors(lf,af)}setViewOffset(t,e,n,r,a,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(pr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,a=-.5*r,l=this.view;if(this.view!==null&&this.view.enabled){let u=l.fullWidth,f=l.fullHeight;a+=l.offsetX*r/u,e-=l.offsetY*n/f,r*=l.width/u,n*=l.height/f}let h=this.filmOffset;h!==0&&(a+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},sr=-90,rr=1,Ih=class extends nn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new yn(sr,rr,t,e);r.layers=this.layers,this.add(r);let a=new yn(sr,rr,t,e);a.layers=this.layers,this.add(a);let l=new yn(sr,rr,t,e);l.layers=this.layers,this.add(l);let h=new yn(sr,rr,t,e);h.layers=this.layers,this.add(h);let u=new yn(sr,rr,t,e);u.layers=this.layers,this.add(u);let f=new yn(sr,rr,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,a,l,h,u]=e;for(let f of e)this.remove(f);if(t===ki)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===Na)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,l,h,u,f,m]=this.children,d=t.getRenderTarget(),g=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,a),t.setRenderTarget(n,1,r),t.render(e,l),t.setRenderTarget(n,2,r),t.render(e,h),t.setRenderTarget(n,3,r),t.render(e,u),t.setRenderTarget(n,4,r),t.render(e,f),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,r),t.render(e,m),t.setRenderTarget(d,g,_),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},Va=class extends Nn{constructor(t,e,n,r,a,l,h,u,f,m){t=t!==void 0?t:[],e=e!==void 0?e:vr,super(t,e,n,r,a,l,h,u,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Dh=class extends Gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Va(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zn(5,5,5),a=new Xn({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:ts});a.uniforms.tEquirect.value=e;let l=new Be(r,a),h=e.minFilter;return e.minFilter===Ss&&(e.minFilter=Vn),new Ih(1,10,this).update(t,l),e.minFilter=h,l.geometry.dispose(),l.material.dispose(),this}clear(t,e,n,r){let a=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,n,r);t.setRenderTarget(a)}},Cc=new H,A_=new H,P_=new le,ei=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Cc.subVectors(n,e).cross(A_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Cc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||P_.getNormalMatrix(t),r=this.coplanarPoint(Cc).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},gs=new oi,ua=new H,co=class{constructor(t=new ei,e=new ei,n=new ei,r=new ei,a=new ei,l=new ei){this.planes=[t,e,n,r,a,l]}set(t,e,n,r,a,l){let h=this.planes;return h[0].copy(t),h[1].copy(e),h[2].copy(n),h[3].copy(r),h[4].copy(a),h[5].copy(l),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ki){let n=this.planes,r=t.elements,a=r[0],l=r[1],h=r[2],u=r[3],f=r[4],m=r[5],d=r[6],g=r[7],_=r[8],y=r[9],S=r[10],x=r[11],v=r[12],P=r[13],w=r[14],T=r[15];if(n[0].setComponents(u-a,g-f,x-_,T-v).normalize(),n[1].setComponents(u+a,g+f,x+_,T+v).normalize(),n[2].setComponents(u+l,g+m,x+y,T+P).normalize(),n[3].setComponents(u-l,g-m,x-y,T-P).normalize(),n[4].setComponents(u-h,g-d,x-S,T-w).normalize(),e===ki)n[5].setComponents(u+h,g+d,x+S,T+w).normalize();else if(e===Na)n[5].setComponents(h,d,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(ua.x=r.normal.x>0?t.max.x:t.min.x,ua.y=r.normal.y>0?t.max.y:t.min.y,ua.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ua)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hp(){let s=null,t=!1,e=null,n=null;function r(a,l){e(a,l),n=s.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(r),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function R_(s){let t=new WeakMap;function e(h,u){let f=h.array,m=h.usage,d=f.byteLength,g=s.createBuffer();s.bindBuffer(u,g),s.bufferData(u,f,m),h.onUploadCallback();let _;if(f instanceof Float32Array)_=s.FLOAT;else if(f instanceof Uint16Array)h.isFloat16BufferAttribute?_=s.HALF_FLOAT:_=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=s.SHORT;else if(f instanceof Uint32Array)_=s.UNSIGNED_INT;else if(f instanceof Int32Array)_=s.INT;else if(f instanceof Int8Array)_=s.BYTE;else if(f instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:d}}function n(h,u,f){let m=u.array,d=u.updateRanges;if(s.bindBuffer(f,h),d.length===0)s.bufferSubData(f,0,m);else{d.sort((_,y)=>_.start-y.start);let g=0;for(let _=1;_<d.length;_++){let y=d[g],S=d[_];S.start<=y.start+y.count+1?y.count=Math.max(y.count,S.start+S.count-y.start):(++g,d[g]=S)}d.length=g+1;for(let _=0,y=d.length;_<y;_++){let S=d[_];s.bufferSubData(f,S.start*m.BYTES_PER_ELEMENT,m,S.start,S.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);let u=t.get(h);u&&(s.deleteBuffer(u.buffer),t.delete(h))}function l(h,u){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){let m=t.get(h);(!m||m.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}let f=t.get(h);if(f===void 0)t.set(h,e(h,u));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,h,u),f.version=h.version}}return{get:r,remove:a,update:l}}var Es=class s extends Ge{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let a=t/2,l=e/2,h=Math.floor(n),u=Math.floor(r),f=h+1,m=u+1,d=t/h,g=e/u,_=[],y=[],S=[],x=[];for(let v=0;v<m;v++){let P=v*g-l;for(let w=0;w<f;w++){let T=w*d-a;y.push(T,-P,0),S.push(0,0,1),x.push(w/h),x.push(1-v/u)}}for(let v=0;v<u;v++)for(let P=0;P<h;P++){let w=P+f*v,T=P+f*(v+1),U=P+1+f*(v+1),C=P+1+f*v;_.push(w,T,C),_.push(T,U,C)}this.setIndex(_),this.setAttribute("position",new ye(y,3)),this.setAttribute("normal",new ye(S,3)),this.setAttribute("uv",new ye(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},C_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L_=`#ifdef USE_ALPHAHASH
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
#endif`,I_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U_=`#ifdef USE_AOMAP
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
#endif`,k_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B_=`#ifdef USE_BATCHING
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
#endif`,F_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,G_=`#ifdef USE_IRIDESCENCE
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
#endif`,W_=`#ifdef USE_BUMPMAP
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
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,K_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Q_=`#define PI 3.141592653589793
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
} // validated`,t0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,e0=`vec3 transformedNormal = objectNormal;
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
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o0="gl_FragColor = linearToOutputTexel( gl_FragColor );",a0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,u0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d0=`#ifdef USE_ENVMAP
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
#endif`,f0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_0=`#ifdef USE_GRADIENTMAP
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
}`,v0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b0=`uniform bool receiveShadow;
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
#endif`,M0=`#ifdef USE_ENVMAP
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
#endif`,S0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A0=`PhysicalMaterial material;
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
#endif`,P0=`struct PhysicalMaterial {
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
}`,R0=`
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
#endif`,C0=`#if defined( RE_IndirectDiffuse )
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
#endif`,L0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,F0=`#if defined( USE_POINTS_UV )
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
#endif`,z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z0=`#ifdef USE_MORPHTARGETS
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
#endif`,X0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,j0=`#ifdef USE_NORMALMAP
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
#endif`,Q0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ev=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ov=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,av=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pv=`float getShadowMask() {
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
}`,mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gv=`#ifdef USE_SKINNING
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
#endif`,_v=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vv=`#ifdef USE_SKINNING
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
#endif`,xv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sv=`#ifdef USE_TRANSMISSION
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
#endif`,wv=`#ifdef USE_TRANSMISSION
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
#endif`,Tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cv=`uniform sampler2D t2D;
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
}`,Lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ov=`#include <common>
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
}`,Uv=`#if DEPTH_PACKING == 3200
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
}`,kv=`#define DISTANCE
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
}`,Bv=`#define DISTANCE
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
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`uniform float scale;
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
}`,Vv=`uniform vec3 diffuse;
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
}`,Gv=`#include <common>
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
}`,Wv=`uniform vec3 diffuse;
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
}`,Zv=`#define LAMBERT
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
}`,Xv=`#define LAMBERT
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
}`,qv=`#define MATCAP
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
}`,Yv=`#define MATCAP
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
}`,$v=`#define NORMAL
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
}`,Kv=`#define NORMAL
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
}`,Jv=`#define PHONG
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
}`,jv=`#define PHONG
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
}`,Qv=`#define STANDARD
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
}`,tx=`#define STANDARD
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
}`,ex=`#define TOON
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
}`,nx=`#define TOON
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
}`,ix=`uniform float size;
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
}`,sx=`uniform vec3 diffuse;
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
}`,rx=`#include <common>
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
}`,ox=`uniform vec3 color;
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
}`,ax=`uniform float rotation;
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
}`,lx=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:C_,alphahash_pars_fragment:L_,alphamap_fragment:I_,alphamap_pars_fragment:D_,alphatest_fragment:N_,alphatest_pars_fragment:O_,aomap_fragment:U_,aomap_pars_fragment:k_,batching_pars_vertex:B_,batching_vertex:F_,begin_vertex:z_,beginnormal_vertex:H_,bsdfs:V_,iridescence_fragment:G_,bumpmap_pars_fragment:W_,clipping_planes_fragment:Z_,clipping_planes_pars_fragment:X_,clipping_planes_pars_vertex:q_,clipping_planes_vertex:Y_,color_fragment:$_,color_pars_fragment:K_,color_pars_vertex:J_,color_vertex:j_,common:Q_,cube_uv_reflection_fragment:t0,defaultnormal_vertex:e0,displacementmap_pars_vertex:n0,displacementmap_vertex:i0,emissivemap_fragment:s0,emissivemap_pars_fragment:r0,colorspace_fragment:o0,colorspace_pars_fragment:a0,envmap_fragment:l0,envmap_common_pars_fragment:c0,envmap_pars_fragment:h0,envmap_pars_vertex:u0,envmap_physical_pars_fragment:M0,envmap_vertex:d0,fog_vertex:f0,fog_pars_vertex:p0,fog_fragment:m0,fog_pars_fragment:g0,gradientmap_pars_fragment:_0,lightmap_pars_fragment:v0,lights_lambert_fragment:x0,lights_lambert_pars_fragment:y0,lights_pars_begin:b0,lights_toon_fragment:S0,lights_toon_pars_fragment:w0,lights_phong_fragment:T0,lights_phong_pars_fragment:E0,lights_physical_fragment:A0,lights_physical_pars_fragment:P0,lights_fragment_begin:R0,lights_fragment_maps:C0,lights_fragment_end:L0,logdepthbuf_fragment:I0,logdepthbuf_pars_fragment:D0,logdepthbuf_pars_vertex:N0,logdepthbuf_vertex:O0,map_fragment:U0,map_pars_fragment:k0,map_particle_fragment:B0,map_particle_pars_fragment:F0,metalnessmap_fragment:z0,metalnessmap_pars_fragment:H0,morphinstance_vertex:V0,morphcolor_vertex:G0,morphnormal_vertex:W0,morphtarget_pars_vertex:Z0,morphtarget_vertex:X0,normal_fragment_begin:q0,normal_fragment_maps:Y0,normal_pars_fragment:$0,normal_pars_vertex:K0,normal_vertex:J0,normalmap_pars_fragment:j0,clearcoat_normal_fragment_begin:Q0,clearcoat_normal_fragment_maps:tv,clearcoat_pars_fragment:ev,iridescence_pars_fragment:nv,opaque_fragment:iv,packing:sv,premultiplied_alpha_fragment:rv,project_vertex:ov,dithering_fragment:av,dithering_pars_fragment:lv,roughnessmap_fragment:cv,roughnessmap_pars_fragment:hv,shadowmap_pars_fragment:uv,shadowmap_pars_vertex:dv,shadowmap_vertex:fv,shadowmask_pars_fragment:pv,skinbase_vertex:mv,skinning_pars_vertex:gv,skinning_vertex:_v,skinnormal_vertex:vv,specularmap_fragment:xv,specularmap_pars_fragment:yv,tonemapping_fragment:bv,tonemapping_pars_fragment:Mv,transmission_fragment:Sv,transmission_pars_fragment:wv,uv_pars_fragment:Tv,uv_pars_vertex:Ev,uv_vertex:Av,worldpos_vertex:Pv,background_vert:Rv,background_frag:Cv,backgroundCube_vert:Lv,backgroundCube_frag:Iv,cube_vert:Dv,cube_frag:Nv,depth_vert:Ov,depth_frag:Uv,distanceRGBA_vert:kv,distanceRGBA_frag:Bv,equirect_vert:Fv,equirect_frag:zv,linedashed_vert:Hv,linedashed_frag:Vv,meshbasic_vert:Gv,meshbasic_frag:Wv,meshlambert_vert:Zv,meshlambert_frag:Xv,meshmatcap_vert:qv,meshmatcap_frag:Yv,meshnormal_vert:$v,meshnormal_frag:Kv,meshphong_vert:Jv,meshphong_frag:jv,meshphysical_vert:Qv,meshphysical_frag:tx,meshtoon_vert:ex,meshtoon_frag:nx,points_vert:ix,points_frag:sx,shadow_vert:rx,shadow_frag:ox,sprite_vert:ax,sprite_frag:lx},At={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},bn={basic:{uniforms:xn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:xn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new pe(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:xn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:xn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:xn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new pe(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:xn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:xn([At.points,At.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:xn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:xn([At.common,At.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:xn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:xn([At.sprite,At.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:xn([At.common,At.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:xn([At.lights,At.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};bn.physical={uniforms:xn([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var da={r:0,b:0,g:0},_s=new vi,cx=new Fe;function hx(s,t,e,n,r,a,l){let h=new pe(0),u=a===!0?0:1,f,m,d=null,g=0,_=null;function y(P){let w=P.isScene===!0?P.background:null;return w&&w.isTexture&&(w=(P.backgroundBlurriness>0?e:t).get(w)),w}function S(P){let w=!1,T=y(P);T===null?v(h,u):T&&T.isColor&&(v(T,1),w=!0);let U=s.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,l):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(P,w){let T=y(w);T&&(T.isCubeTexture||T.mapping===fl)?(m===void 0&&(m=new Be(new Zn(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Mr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(U,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),_s.copy(w.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),m.material.uniforms.envMap.value=T,m.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(cx.makeRotationFromEuler(_s)),m.material.toneMapped=Te.getTransfer(T.colorSpace)!==De,(d!==T||g!==T.version||_!==s.toneMapping)&&(m.material.needsUpdate=!0,d=T,g=T.version,_=s.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null)):T&&T.isTexture&&(f===void 0&&(f=new Be(new Es(2,2),new Xn({name:"BackgroundMaterial",uniforms:Mr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=T,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.toneMapped=Te.getTransfer(T.colorSpace)!==De,T.matrixAutoUpdate===!0&&T.updateMatrix(),f.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||g!==T.version||_!==s.toneMapping)&&(f.material.needsUpdate=!0,d=T,g=T.version,_=s.toneMapping),f.layers.enableAll(),P.unshift(f,f.geometry,f.material,0,0,null))}function v(P,w){P.getRGB(da,cp(s)),n.buffers.color.setClear(da.r,da.g,da.b,w,l)}return{getClearColor:function(){return h},setClearColor:function(P,w=1){h.set(P),u=w,v(h,u)},getClearAlpha:function(){return u},setClearAlpha:function(P){u=P,v(h,u)},render:S,addToRenderList:x}}function ux(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},r=g(null),a=r,l=!1;function h(E,B,q,Z,j){let it=!1,V=d(Z,q,B);a!==V&&(a=V,f(a.object)),it=_(E,Z,q,j),it&&y(E,Z,q,j),j!==null&&t.update(j,s.ELEMENT_ARRAY_BUFFER),(it||l)&&(l=!1,T(E,B,q,Z),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function u(){return s.createVertexArray()}function f(E){return s.bindVertexArray(E)}function m(E){return s.deleteVertexArray(E)}function d(E,B,q){let Z=q.wireframe===!0,j=n[E.id];j===void 0&&(j={},n[E.id]=j);let it=j[B.id];it===void 0&&(it={},j[B.id]=it);let V=it[Z];return V===void 0&&(V=g(u()),it[Z]=V),V}function g(E){let B=[],q=[],Z=[];for(let j=0;j<e;j++)B[j]=0,q[j]=0,Z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:Z,object:E,attributes:{},index:null}}function _(E,B,q,Z){let j=a.attributes,it=B.attributes,V=0,pt=q.getAttributes();for(let G in pt)if(pt[G].location>=0){let lt=j[G],ct=it[G];if(ct===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(ct=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(ct=E.instanceColor)),lt===void 0||lt.attribute!==ct||ct&&lt.data!==ct.data)return!0;V++}return a.attributesNum!==V||a.index!==Z}function y(E,B,q,Z){let j={},it=B.attributes,V=0,pt=q.getAttributes();for(let G in pt)if(pt[G].location>=0){let lt=it[G];lt===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(lt=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(lt=E.instanceColor));let ct={};ct.attribute=lt,lt&&lt.data&&(ct.data=lt.data),j[G]=ct,V++}a.attributes=j,a.attributesNum=V,a.index=Z}function S(){let E=a.newAttributes;for(let B=0,q=E.length;B<q;B++)E[B]=0}function x(E){v(E,0)}function v(E,B){let q=a.newAttributes,Z=a.enabledAttributes,j=a.attributeDivisors;q[E]=1,Z[E]===0&&(s.enableVertexAttribArray(E),Z[E]=1),j[E]!==B&&(s.vertexAttribDivisor(E,B),j[E]=B)}function P(){let E=a.newAttributes,B=a.enabledAttributes;for(let q=0,Z=B.length;q<Z;q++)B[q]!==E[q]&&(s.disableVertexAttribArray(q),B[q]=0)}function w(E,B,q,Z,j,it,V){V===!0?s.vertexAttribIPointer(E,B,q,j,it):s.vertexAttribPointer(E,B,q,Z,j,it)}function T(E,B,q,Z){S();let j=Z.attributes,it=q.getAttributes(),V=B.defaultAttributeValues;for(let pt in it){let G=it[pt];if(G.location>=0){let ut=j[pt];if(ut===void 0&&(pt==="instanceMatrix"&&E.instanceMatrix&&(ut=E.instanceMatrix),pt==="instanceColor"&&E.instanceColor&&(ut=E.instanceColor)),ut!==void 0){let lt=ut.normalized,ct=ut.itemSize,Mt=t.get(ut);if(Mt===void 0)continue;let wt=Mt.buffer,J=Mt.type,Y=Mt.bytesPerElement,at=J===s.INT||J===s.UNSIGNED_INT||ut.gpuType===su;if(ut.isInterleavedBufferAttribute){let W=ut.data,yt=W.stride,dt=ut.offset;if(W.isInstancedInterleavedBuffer){for(let et=0;et<G.locationSize;et++)v(G.location+et,W.meshPerAttribute);E.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let et=0;et<G.locationSize;et++)x(G.location+et);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let et=0;et<G.locationSize;et++)w(G.location+et,ct/G.locationSize,J,lt,yt*Y,(dt+ct/G.locationSize*et)*Y,at)}else{if(ut.isInstancedBufferAttribute){for(let W=0;W<G.locationSize;W++)v(G.location+W,ut.meshPerAttribute);E.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let W=0;W<G.locationSize;W++)x(G.location+W);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let W=0;W<G.locationSize;W++)w(G.location+W,ct/G.locationSize,J,lt,ct*Y,ct/G.locationSize*W*Y,at)}}else if(V!==void 0){let lt=V[pt];if(lt!==void 0)switch(lt.length){case 2:s.vertexAttrib2fv(G.location,lt);break;case 3:s.vertexAttrib3fv(G.location,lt);break;case 4:s.vertexAttrib4fv(G.location,lt);break;default:s.vertexAttrib1fv(G.location,lt)}}}}P()}function U(){O();for(let E in n){let B=n[E];for(let q in B){let Z=B[q];for(let j in Z)m(Z[j].object),delete Z[j];delete B[q]}delete n[E]}}function C(E){if(n[E.id]===void 0)return;let B=n[E.id];for(let q in B){let Z=B[q];for(let j in Z)m(Z[j].object),delete Z[j];delete B[q]}delete n[E.id]}function D(E){for(let B in n){let q=n[B];if(q[E.id]===void 0)continue;let Z=q[E.id];for(let j in Z)m(Z[j].object),delete Z[j];delete q[E.id]}}function O(){A(),l=!0,a!==r&&(a=r,f(a.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:O,resetDefaultState:A,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:D,initAttributes:S,enableAttribute:x,disableUnusedAttributes:P}}function dx(s,t,e){let n;function r(f){n=f}function a(f,m){s.drawArrays(n,f,m),e.update(m,n,1)}function l(f,m,d){d!==0&&(s.drawArraysInstanced(n,f,m,d),e.update(m,n,d))}function h(f,m,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,m,0,d);let _=0;for(let y=0;y<d;y++)_+=m[y];e.update(_,n,1)}function u(f,m,d,g){if(d===0)return;let _=t.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<f.length;y++)l(f[y],m[y],g[y]);else{_.multiDrawArraysInstancedWEBGL(n,f,0,m,0,g,0,d);let y=0;for(let S=0;S<d;S++)y+=m[S]*g[S];e.update(y,n,1)}}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function fx(s,t,e,n){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");r=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(D){return!(D!==ii&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(D){let O=D===_o&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Hi&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Ui&&!O)}function u(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp",m=u(f);m!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);let d=e.logarithmicDepthBuffer===!0,g=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),_=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=y>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:u,textureFormatReadable:l,textureTypeReadable:h,precision:f,logarithmicDepthBuffer:d,reverseDepthBuffer:g,maxTextures:_,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:P,maxVaryings:w,maxFragmentUniforms:T,vertexTextures:U,maxSamples:C}}function px(s){let t=this,e=null,n=0,r=!1,a=!1,l=new ei,h=new le,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(d,g){let _=d.length!==0||g||n!==0||r;return r=g,n=d.length,_},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,g){e=m(d,g,0)},this.setState=function(d,g,_){let y=d.clippingPlanes,S=d.clipIntersection,x=d.clipShadows,v=s.get(d);if(!r||y===null||y.length===0||a&&!x)a?m(null):f();else{let P=a?0:n,w=P*4,T=v.clippingState||null;u.value=T,T=m(y,g,w,_);for(let U=0;U!==w;++U)T[U]=e[U];v.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=P}};function f(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function m(d,g,_,y){let S=d!==null?d.length:0,x=null;if(S!==0){if(x=u.value,y!==!0||x===null){let v=_+S*4,P=g.matrixWorldInverse;h.getNormalMatrix(P),(x===null||x.length<v)&&(x=new Float32Array(v));for(let w=0,T=_;w!==S;++w,T+=4)l.copy(d[w]).applyMatrix4(P,h),l.normal.toArray(x,T),x[T+3]=l.constant}u.value=x,u.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,x}}function mx(s){let t=new WeakMap;function e(l,h){return h===Jc?l.mapping=vr:h===jc&&(l.mapping=xr),l}function n(l){if(l&&l.isTexture){let h=l.mapping;if(h===Jc||h===jc)if(t.has(l)){let u=t.get(l).texture;return e(u,l.mapping)}else{let u=l.image;if(u&&u.height>0){let f=new Dh(u.height);return f.fromEquirectangularTexture(s,l),t.set(l,f),l.addEventListener("dispose",r),e(f.texture,l.mapping)}else return null}}return l}function r(l){let h=l.target;h.removeEventListener("dispose",r);let u=t.get(h);u!==void 0&&(t.delete(h),u.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}var Ga=class extends Ha{constructor(t=-1,e=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=n-t,l=n+t,h=r+e,u=r-e;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,l=a+f*this.view.width,h-=m*this.view.offsetY,u=h-m*this.view.height}this.projectionMatrix.makeOrthographic(a,l,h,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ur=4,cf=[.125,.215,.35,.446,.526,.582],bs=20,Lc=new Ga,hf=new pe,Ic=null,Dc=0,Nc=0,Oc=!1,xs=(1+Math.sqrt(5))/2,or=1/xs,uf=[new H(-xs,or,0),new H(xs,or,0),new H(-or,0,xs),new H(or,0,xs),new H(0,xs,-or),new H(0,xs,or),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],Wa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Ic=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,r,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ff(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ic,Dc,Nc),this._renderer.xr.enabled=Oc,t.scissorTest=!1,fa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vr||t.mapping===xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ic=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:_o,format:ii,colorSpace:Tr,depthBuffer:!1},r=df(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=df(t,e,n);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gx(a)),this._blurMaterial=_x(a,t,e)}return r}_compileMaterial(t){let e=new Be(this._lodPlanes[0],t);this._renderer.compile(e,Lc)}_sceneToCubeUV(t,e,n,r){let h=new yn(90,1,e,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],m=this._renderer,d=m.autoClear,g=m.toneMapping;m.getClearColor(hf),m.toneMapping=es,m.autoClear=!1;let _=new Wn({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),y=new Be(new Zn,_),S=!1,x=t.background;x?x.isColor&&(_.color.copy(x),t.background=null,S=!0):(_.color.copy(hf),S=!0);for(let v=0;v<6;v++){let P=v%3;P===0?(h.up.set(0,u[v],0),h.lookAt(f[v],0,0)):P===1?(h.up.set(0,0,u[v]),h.lookAt(0,f[v],0)):(h.up.set(0,u[v],0),h.lookAt(0,0,f[v]));let w=this._cubeSize;fa(r,P*w,v>2?w:0,w,w),m.setRenderTarget(r),S&&m.render(y,h),m.render(t,h)}y.geometry.dispose(),y.material.dispose(),m.toneMapping=g,m.autoClear=d,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===vr||t.mapping===xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ff());let a=r?this._cubemapMaterial:this._equirectMaterial,l=new Be(this._lodPlanes[0],a),h=a.uniforms;h.envMap.value=t;let u=this._cubeSize;fa(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(l,Lc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let a=1;a<r;a++){let l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),h=uf[(r-a-1)%uf.length];this._blur(t,a-1,a,l,h)}e.autoClear=n}_blur(t,e,n,r,a){let l=this._pingPongRenderTarget;this._halfBlur(t,l,e,n,r,"latitudinal",a),this._halfBlur(l,t,n,n,r,"longitudinal",a)}_halfBlur(t,e,n,r,a,l,h){let u=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let m=3,d=new Be(this._lodPlanes[r],f),g=f.uniforms,_=this._sizeLods[n]-1,y=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*bs-1),S=a/y,x=isFinite(a)?1+Math.floor(m*S):bs;x>bs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${bs}`);let v=[],P=0;for(let D=0;D<bs;++D){let O=D/S,A=Math.exp(-O*O/2);v.push(A),D===0?P+=A:D<x&&(P+=2*A)}for(let D=0;D<v.length;D++)v[D]=v[D]/P;g.envMap.value=t.texture,g.samples.value=x,g.weights.value=v,g.latitudinal.value=l==="latitudinal",h&&(g.poleAxis.value=h);let{_lodMax:w}=this;g.dTheta.value=y,g.mipInt.value=w-n;let T=this._sizeLods[r],U=3*T*(r>w-ur?r-w+ur:0),C=4*(this._cubeSize-T);fa(e,U,C,3*T,2*T),u.setRenderTarget(e),u.render(d,Lc)}};function gx(s){let t=[],e=[],n=[],r=s,a=s-ur+1+cf.length;for(let l=0;l<a;l++){let h=Math.pow(2,r);e.push(h);let u=1/h;l>s-ur?u=cf[l-s+ur-1]:l===0&&(u=0),n.push(u);let f=1/(h-2),m=-f,d=1+f,g=[m,m,d,m,d,d,m,m,d,d,m,d],_=6,y=6,S=3,x=2,v=1,P=new Float32Array(S*y*_),w=new Float32Array(x*y*_),T=new Float32Array(v*y*_);for(let C=0;C<_;C++){let D=C%3*2/3-1,O=C>2?0:-1,A=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];P.set(A,S*y*C),w.set(g,x*y*C);let E=[C,C,C,C,C,C];T.set(E,v*y*C)}let U=new Ge;U.setAttribute("position",new Dn(P,S)),U.setAttribute("uv",new Dn(w,x)),U.setAttribute("faceIndex",new Dn(T,v)),t.push(U),r>ur&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function df(s,t,e){let n=new Gi(s,t,e);return n.texture.mapping=fl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fa(s,t,e,n,r){s.viewport.set(t,e,n,r),s.scissor.set(t,e,n,r)}function _x(s,t,e){let n=new Float32Array(bs),r=new H(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uu(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function ff(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function pf(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

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
	`}function vx(s){let t=new WeakMap,e=null;function n(h){if(h&&h.isTexture){let u=h.mapping,f=u===Jc||u===jc,m=u===vr||u===xr;if(f||m){let d=t.get(h),g=d!==void 0?d.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return e===null&&(e=new Wa(s)),d=f?e.fromEquirectangular(h,d):e.fromCubemap(h,d),d.texture.pmremVersion=h.pmremVersion,t.set(h,d),d.texture;if(d!==void 0)return d.texture;{let _=h.image;return f&&_&&_.height>0||m&&_&&r(_)?(e===null&&(e=new Wa(s)),d=f?e.fromEquirectangular(h):e.fromCubemap(h),d.texture.pmremVersion=h.pmremVersion,t.set(h,d),h.addEventListener("dispose",a),d.texture):null}}}return h}function r(h){let u=0,f=6;for(let m=0;m<f;m++)h[m]!==void 0&&u++;return u===f}function a(h){let u=h.target;u.removeEventListener("dispose",a);let f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:l}}function xx(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&io("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function yx(s,t,e,n){let r={},a=new WeakMap;function l(d){let g=d.target;g.index!==null&&t.remove(g.index);for(let y in g.attributes)t.remove(g.attributes[y]);for(let y in g.morphAttributes){let S=g.morphAttributes[y];for(let x=0,v=S.length;x<v;x++)t.remove(S[x])}g.removeEventListener("dispose",l),delete r[g.id];let _=a.get(g);_&&(t.remove(_),a.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function h(d,g){return r[g.id]===!0||(g.addEventListener("dispose",l),r[g.id]=!0,e.memory.geometries++),g}function u(d){let g=d.attributes;for(let y in g)t.update(g[y],s.ARRAY_BUFFER);let _=d.morphAttributes;for(let y in _){let S=_[y];for(let x=0,v=S.length;x<v;x++)t.update(S[x],s.ARRAY_BUFFER)}}function f(d){let g=[],_=d.index,y=d.attributes.position,S=0;if(_!==null){let P=_.array;S=_.version;for(let w=0,T=P.length;w<T;w+=3){let U=P[w+0],C=P[w+1],D=P[w+2];g.push(U,C,C,D,D,U)}}else if(y!==void 0){let P=y.array;S=y.version;for(let w=0,T=P.length/3-1;w<T;w+=3){let U=w+0,C=w+1,D=w+2;g.push(U,C,C,D,D,U)}}else return;let x=new(ap(g)?za:Fa)(g,1);x.version=S;let v=a.get(d);v&&t.remove(v),a.set(d,x)}function m(d){let g=a.get(d);if(g){let _=d.index;_!==null&&g.version<_.version&&f(d)}else f(d);return a.get(d)}return{get:h,update:u,getWireframeAttribute:m}}function bx(s,t,e){let n;function r(g){n=g}let a,l;function h(g){a=g.type,l=g.bytesPerElement}function u(g,_){s.drawElements(n,_,a,g*l),e.update(_,n,1)}function f(g,_,y){y!==0&&(s.drawElementsInstanced(n,_,a,g*l,y),e.update(_,n,y))}function m(g,_,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,a,g,0,y);let x=0;for(let v=0;v<y;v++)x+=_[v];e.update(x,n,1)}function d(g,_,y,S){if(y===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<g.length;v++)f(g[v]/l,_[v],S[v]);else{x.multiDrawElementsInstancedWEBGL(n,_,0,a,g,0,S,0,y);let v=0;for(let P=0;P<y;P++)v+=_[P]*S[P];e.update(v,n,1)}}this.setMode=r,this.setIndex=h,this.render=u,this.renderInstances=f,this.renderMultiDraw=m,this.renderMultiDrawInstances=d}function Mx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,h){switch(e.calls++,l){case s.TRIANGLES:e.triangles+=h*(a/3);break;case s.LINES:e.lines+=h*(a/2);break;case s.LINE_STRIP:e.lines+=h*(a-1);break;case s.LINE_LOOP:e.lines+=h*a;break;case s.POINTS:e.points+=h*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Sx(s,t,e){let n=new WeakMap,r=new Ne;function a(l,h,u){let f=l.morphTargetInfluences,m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,d=m!==void 0?m.length:0,g=n.get(h);if(g===void 0||g.count!==d){let A=function(){D.dispose(),n.delete(h),h.removeEventListener("dispose",A)};g!==void 0&&g.texture.dispose();let _=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],P=h.morphAttributes.color||[],w=0;_===!0&&(w=1),y===!0&&(w=2),S===!0&&(w=3);let T=h.attributes.position.count*w,U=1;T>t.maxTextureSize&&(U=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let C=new Float32Array(T*U*4*d),D=new ka(C,T,U,d);D.type=Ui,D.needsUpdate=!0;let O=w*4;for(let E=0;E<d;E++){let B=x[E],q=v[E],Z=P[E],j=T*U*4*E;for(let it=0;it<B.count;it++){let V=it*O;_===!0&&(r.fromBufferAttribute(B,it),C[j+V+0]=r.x,C[j+V+1]=r.y,C[j+V+2]=r.z,C[j+V+3]=0),y===!0&&(r.fromBufferAttribute(q,it),C[j+V+4]=r.x,C[j+V+5]=r.y,C[j+V+6]=r.z,C[j+V+7]=0),S===!0&&(r.fromBufferAttribute(Z,it),C[j+V+8]=r.x,C[j+V+9]=r.y,C[j+V+10]=r.z,C[j+V+11]=Z.itemSize===4?r.w:1)}}g={count:d,texture:D,size:new Yt(T,U)},n.set(h,g),h.addEventListener("dispose",A)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(s,"morphTexture",l.morphTexture,e);else{let _=0;for(let S=0;S<f.length;S++)_+=f[S];let y=h.morphTargetsRelative?1:1-_;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",f)}u.getUniforms().setValue(s,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:a}}function wx(s,t,e,n){let r=new WeakMap;function a(u){let f=n.render.frame,m=u.geometry,d=t.get(u,m);if(r.get(d)!==f&&(t.update(d),r.set(d,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",h)===!1&&u.addEventListener("dispose",h),r.get(u)!==f&&(e.update(u.instanceMatrix,s.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,s.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){let g=u.skeleton;r.get(g)!==f&&(g.update(),r.set(g,f))}return d}function l(){r=new WeakMap}function h(u){let f=u.target;f.removeEventListener("dispose",h),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:l}}var Za=class extends Nn{constructor(t,e,n,r,a,l,h,u,f,m=fr){if(m!==fr&&m!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&m===fr&&(n=ws),n===void 0&&m===br&&(n=yr),super(null,r,a,l,h,u,m,n,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=h!==void 0?h:si,this.minFilter=u!==void 0?u:si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},up=new Nn,mf=new Za(1,1),dp=new ka,fp=new Lh,pp=new Va,gf=[],_f=[],vf=new Float32Array(16),xf=new Float32Array(9),yf=new Float32Array(4);function Er(s,t,e){let n=s[0];if(n<=0||n>0)return s;let r=t*e,a=gf[r];if(a===void 0&&(a=new Float32Array(r),gf[r]=a),t!==0){n.toArray(a,0);for(let l=1,h=0;l!==t;++l)h+=e,s[l].toArray(a,h)}return a}function Ke(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Je(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function _l(s,t){let e=_f[t];e===void 0&&(e=new Int32Array(t),_f[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Tx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ex(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;s.uniform2fv(this.addr,t),Je(e,t)}}function Ax(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;s.uniform3fv(this.addr,t),Je(e,t)}}function Px(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;s.uniform4fv(this.addr,t),Je(e,t)}}function Rx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,n))return;yf.set(n),s.uniformMatrix2fv(this.addr,!1,yf),Je(e,n)}}function Cx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,n))return;xf.set(n),s.uniformMatrix3fv(this.addr,!1,xf),Je(e,n)}}function Lx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,n))return;vf.set(n),s.uniformMatrix4fv(this.addr,!1,vf),Je(e,n)}}function Ix(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Dx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;s.uniform2iv(this.addr,t),Je(e,t)}}function Nx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;s.uniform3iv(this.addr,t),Je(e,t)}}function Ox(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;s.uniform4iv(this.addr,t),Je(e,t)}}function Ux(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function kx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;s.uniform2uiv(this.addr,t),Je(e,t)}}function Bx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;s.uniform3uiv(this.addr,t),Je(e,t)}}function Fx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;s.uniform4uiv(this.addr,t),Je(e,t)}}function zx(s,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r);let a;this.type===s.SAMPLER_2D_SHADOW?(mf.compareFunction=op,a=mf):a=up,e.setTexture2D(t||a,r)}function Hx(s,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||fp,r)}function Vx(s,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||pp,r)}function Gx(s,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||dp,r)}function Wx(s){switch(s){case 5126:return Tx;case 35664:return Ex;case 35665:return Ax;case 35666:return Px;case 35674:return Rx;case 35675:return Cx;case 35676:return Lx;case 5124:case 35670:return Ix;case 35667:case 35671:return Dx;case 35668:case 35672:return Nx;case 35669:case 35673:return Ox;case 5125:return Ux;case 36294:return kx;case 36295:return Bx;case 36296:return Fx;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Gx}}function Zx(s,t){s.uniform1fv(this.addr,t)}function Xx(s,t){let e=Er(t,this.size,2);s.uniform2fv(this.addr,e)}function qx(s,t){let e=Er(t,this.size,3);s.uniform3fv(this.addr,e)}function Yx(s,t){let e=Er(t,this.size,4);s.uniform4fv(this.addr,e)}function $x(s,t){let e=Er(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Kx(s,t){let e=Er(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Jx(s,t){let e=Er(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function jx(s,t){s.uniform1iv(this.addr,t)}function Qx(s,t){s.uniform2iv(this.addr,t)}function ty(s,t){s.uniform3iv(this.addr,t)}function ey(s,t){s.uniform4iv(this.addr,t)}function ny(s,t){s.uniform1uiv(this.addr,t)}function iy(s,t){s.uniform2uiv(this.addr,t)}function sy(s,t){s.uniform3uiv(this.addr,t)}function ry(s,t){s.uniform4uiv(this.addr,t)}function oy(s,t,e){let n=this.cache,r=t.length,a=_l(e,r);Ke(n,a)||(s.uniform1iv(this.addr,a),Je(n,a));for(let l=0;l!==r;++l)e.setTexture2D(t[l]||up,a[l])}function ay(s,t,e){let n=this.cache,r=t.length,a=_l(e,r);Ke(n,a)||(s.uniform1iv(this.addr,a),Je(n,a));for(let l=0;l!==r;++l)e.setTexture3D(t[l]||fp,a[l])}function ly(s,t,e){let n=this.cache,r=t.length,a=_l(e,r);Ke(n,a)||(s.uniform1iv(this.addr,a),Je(n,a));for(let l=0;l!==r;++l)e.setTextureCube(t[l]||pp,a[l])}function cy(s,t,e){let n=this.cache,r=t.length,a=_l(e,r);Ke(n,a)||(s.uniform1iv(this.addr,a),Je(n,a));for(let l=0;l!==r;++l)e.setTexture2DArray(t[l]||dp,a[l])}function hy(s){switch(s){case 5126:return Zx;case 35664:return Xx;case 35665:return qx;case 35666:return Yx;case 35674:return $x;case 35675:return Kx;case 35676:return Jx;case 5124:case 35670:return jx;case 35667:case 35671:return Qx;case 35668:case 35672:return ty;case 35669:case 35673:return ey;case 5125:return ny;case 36294:return iy;case 36295:return sy;case 36296:return ry;case 35678:case 36198:case 36298:case 36306:case 35682:return oy;case 35679:case 36299:case 36307:return ay;case 35680:case 36300:case 36308:case 36293:return ly;case 36289:case 36303:case 36311:case 36292:return cy}}var Nh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wx(e.type)}},Oh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hy(e.type)}},Uh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let a=0,l=r.length;a!==l;++a){let h=r[a];h.setValue(t,e[h.id],n)}}},Uc=/(\w+)(\])?(\[|\.)?/g;function bf(s,t){s.seq.push(t),s.map[t.id]=t}function uy(s,t,e){let n=s.name,r=n.length;for(Uc.lastIndex=0;;){let a=Uc.exec(n),l=Uc.lastIndex,h=a[1],u=a[2]==="]",f=a[3];if(u&&(h=h|0),f===void 0||f==="["&&l+2===r){bf(e,f===void 0?new Nh(h,s,t):new Oh(h,s,t));break}else{let d=e.map[h];d===void 0&&(d=new Uh(h),bf(e,d)),e=d}}}var gr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),l=t.getUniformLocation(e,a.name);uy(a,l,this)}}setValue(t,e,n,r){let a=this.map[e];a!==void 0&&a.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let a=0,l=e.length;a!==l;++a){let h=e[a],u=n[h.id];u.needsUpdate!==!1&&h.setValue(t,u.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,a=t.length;r!==a;++r){let l=t[r];l.id in e&&n.push(l)}return n}};function Mf(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var dy=37297,fy=0;function py(s,t){let e=s.split(`
`),n=[],r=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let l=r;l<a;l++){let h=l+1;n.push(`${h===t?">":" "} ${h}: ${e[l]}`)}return n.join(`
`)}var Sf=new le;function my(s){Te._getMatrix(Sf,Te.workingColorSpace,s);let t=`mat3( ${Sf.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(s)){case pl:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function wf(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=s.getShaderInfoLog(t).trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+py(s.getShaderSource(t),l)}else return r}function gy(s,t){let e=my(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function _y(s,t){let e;switch(t){case Pg:e="Linear";break;case Rg:e="Reinhard";break;case Cg:e="Cineon";break;case Lg:e="ACESFilmic";break;case Dg:e="AgX";break;case Ng:e="Neutral";break;case Ig:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var pa=new H;function vy(){Te.getLuminanceCoefficients(pa);let s=pa.x.toFixed(4),t=pa.y.toFixed(4),e=pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function yy(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function by(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let a=s.getActiveAttrib(t,r),l=a.name,h=1;a.type===s.FLOAT_MAT2&&(h=2),a.type===s.FLOAT_MAT3&&(h=3),a.type===s.FLOAT_MAT4&&(h=4),e[l]={type:a.type,location:s.getAttribLocation(t,l),locationSize:h}}return e}function so(s){return s!==""}function Tf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ef(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var My=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(s){return s.replace(My,wy)}var Sy=new Map;function wy(s,t){let e=he[t];if(e===void 0){let n=Sy.get(t);if(n!==void 0)e=he[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return kh(e)}var Ty=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Af(s){return s.replace(Ty,Ey)}function Ey(s,t,e,n){let r="";for(let a=parseInt(t);a<parseInt(e);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Pf(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Ay(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xf?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ag?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ni&&(t="SHADOWMAP_TYPE_VSM"),t}function Py(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case vr:case xr:t="ENVMAP_TYPE_CUBE";break;case fl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ry(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case xr:t="ENVMAP_MODE_REFRACTION";break}return t}function Cy(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case qf:t="ENVMAP_BLENDING_MULTIPLY";break;case Eg:t="ENVMAP_BLENDING_MIX";break;case Ag:t="ENVMAP_BLENDING_ADD";break}return t}function Ly(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Iy(s,t,e,n){let r=s.getContext(),a=e.defines,l=e.vertexShader,h=e.fragmentShader,u=Ay(e),f=Py(e),m=Ry(e),d=Cy(e),g=Ly(e),_=xy(e),y=yy(a),S=r.createProgram(),x,v,P=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(so).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(so).join(`
`),v.length>0&&(v+=`
`)):(x=[Pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),v=[Pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+m:"",e.envMap?"#define "+d:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==es?"#define TONE_MAPPING":"",e.toneMapping!==es?he.tonemapping_pars_fragment:"",e.toneMapping!==es?_y("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,gy("linearToOutputTexel",e.outputColorSpace),vy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(so).join(`
`)),l=kh(l),l=Tf(l,e),l=Ef(l,e),h=kh(h),h=Tf(h,e),h=Ef(h,e),l=Af(l),h=Af(h),e.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,x=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",e.glslVersion===zd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let w=P+x+l,T=P+v+h,U=Mf(r,r.VERTEX_SHADER,w),C=Mf(r,r.FRAGMENT_SHADER,T);r.attachShader(S,U),r.attachShader(S,C),e.index0AttributeName!==void 0?r.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function D(B){if(s.debug.checkShaderErrors){let q=r.getProgramInfoLog(S).trim(),Z=r.getShaderInfoLog(U).trim(),j=r.getShaderInfoLog(C).trim(),it=!0,V=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(it=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,S,U,C);else{let pt=wf(r,U,"vertex"),G=wf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+q+`
`+pt+`
`+G)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(Z===""||j==="")&&(V=!1);V&&(B.diagnostics={runnable:it,programLog:q,vertexShader:{log:Z,prefix:x},fragmentShader:{log:j,prefix:v}})}r.deleteShader(U),r.deleteShader(C),O=new gr(r,S),A=by(r,S)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(S,dy)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fy++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=U,this.fragmentShader=C,this}var Dy=0,Bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(t);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Fh(t),e.set(t,n)),n}},Fh=class{constructor(t){this.id=Dy++,this.code=t,this.usedTimes=0}};function Ny(s,t,e,n,r,a,l){let h=new Ba,u=new Bh,f=new Set,m=[],d=r.logarithmicDepthBuffer,g=r.vertexTextures,_=r.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(A){return f.add(A),A===0?"uv":`uv${A}`}function x(A,E,B,q,Z){let j=q.fog,it=Z.geometry,V=A.isMeshStandardMaterial?q.environment:null,pt=(A.isMeshStandardMaterial?e:t).get(A.envMap||V),G=pt&&pt.mapping===fl?pt.image.height:null,ut=y[A.type];A.precision!==null&&(_=r.getMaxPrecision(A.precision),_!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));let lt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ct=lt!==void 0?lt.length:0,Mt=0;it.morphAttributes.position!==void 0&&(Mt=1),it.morphAttributes.normal!==void 0&&(Mt=2),it.morphAttributes.color!==void 0&&(Mt=3);let wt,J,Y,at;if(ut){let Ae=bn[ut];wt=Ae.vertexShader,J=Ae.fragmentShader}else wt=A.vertexShader,J=A.fragmentShader,u.update(A),Y=u.getVertexShaderID(A),at=u.getFragmentShaderID(A);let W=s.getRenderTarget(),yt=s.state.buffers.depth.getReversed(),dt=Z.isInstancedMesh===!0,et=Z.isBatchedMesh===!0,Tt=!!A.map,xt=!!A.matcap,It=!!pt,F=!!A.aoMap,ae=!!A.lightMap,jt=!!A.bumpMap,Ut=!!A.normalMap,Ft=!!A.displacementMap,we=!!A.emissiveMap,$t=!!A.metalnessMap,k=!!A.roughnessMap,I=A.anisotropy>0,nt=A.clearcoat>0,mt=A.dispersion>0,vt=A.iridescence>0,ft=A.sheen>0,Xt=A.transmission>0,Rt=I&&!!A.anisotropyMap,kt=nt&&!!A.clearcoatMap,ge=nt&&!!A.clearcoatNormalMap,bt=nt&&!!A.clearcoatRoughnessMap,Bt=vt&&!!A.iridescenceMap,Jt=vt&&!!A.iridescenceThicknessMap,ee=ft&&!!A.sheenColorMap,Ot=ft&&!!A.sheenRoughnessMap,me=!!A.specularMap,re=!!A.specularColorMap,Re=!!A.specularIntensityMap,X=Xt&&!!A.transmissionMap,Pt=Xt&&!!A.thicknessMap,ht=!!A.gradientMap,gt=!!A.alphaMap,Dt=A.alphaTest>0,Ct=!!A.alphaHash,se=!!A.extensions,ze=es;A.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(ze=s.toneMapping);let Xe={shaderID:ut,shaderType:A.type,shaderName:A.name,vertexShader:wt,fragmentShader:J,defines:A.defines,customVertexShaderID:Y,customFragmentShaderID:at,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,batching:et,batchingColor:et&&Z._colorsTexture!==null,instancing:dt,instancingColor:dt&&Z.instanceColor!==null,instancingMorph:dt&&Z.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:W===null?s.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Tr,alphaToCoverage:!!A.alphaToCoverage,map:Tt,matcap:xt,envMap:It,envMapMode:It&&pt.mapping,envMapCubeUVHeight:G,aoMap:F,lightMap:ae,bumpMap:jt,normalMap:Ut,displacementMap:g&&Ft,emissiveMap:we,normalMapObjectSpace:Ut&&A.normalMapType===Bg,normalMapTangentSpace:Ut&&A.normalMapType===rp,metalnessMap:$t,roughnessMap:k,anisotropy:I,anisotropyMap:Rt,clearcoat:nt,clearcoatMap:kt,clearcoatNormalMap:ge,clearcoatRoughnessMap:bt,dispersion:mt,iridescence:vt,iridescenceMap:Bt,iridescenceThicknessMap:Jt,sheen:ft,sheenColorMap:ee,sheenRoughnessMap:Ot,specularMap:me,specularColorMap:re,specularIntensityMap:Re,transmission:Xt,transmissionMap:X,thicknessMap:Pt,gradientMap:ht,opaque:A.transparent===!1&&A.blending===dr&&A.alphaToCoverage===!1,alphaMap:gt,alphaTest:Dt,alphaHash:Ct,combine:A.combine,mapUv:Tt&&S(A.map.channel),aoMapUv:F&&S(A.aoMap.channel),lightMapUv:ae&&S(A.lightMap.channel),bumpMapUv:jt&&S(A.bumpMap.channel),normalMapUv:Ut&&S(A.normalMap.channel),displacementMapUv:Ft&&S(A.displacementMap.channel),emissiveMapUv:we&&S(A.emissiveMap.channel),metalnessMapUv:$t&&S(A.metalnessMap.channel),roughnessMapUv:k&&S(A.roughnessMap.channel),anisotropyMapUv:Rt&&S(A.anisotropyMap.channel),clearcoatMapUv:kt&&S(A.clearcoatMap.channel),clearcoatNormalMapUv:ge&&S(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&S(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&S(A.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&S(A.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&S(A.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&S(A.sheenRoughnessMap.channel),specularMapUv:me&&S(A.specularMap.channel),specularColorMapUv:re&&S(A.specularColorMap.channel),specularIntensityMapUv:Re&&S(A.specularIntensityMap.channel),transmissionMapUv:X&&S(A.transmissionMap.channel),thicknessMapUv:Pt&&S(A.thicknessMap.channel),alphaMapUv:gt&&S(A.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(Ut||I),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!it.attributes.uv&&(Tt||gt),fog:!!j,useFog:A.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:yt,skinning:Z.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Mt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:ze,decodeVideoTexture:Tt&&A.map.isVideoTexture===!0&&Te.getTransfer(A.map.colorSpace)===De,decodeVideoTextureEmissive:we&&A.emissiveMap.isVideoTexture===!0&&Te.getTransfer(A.emissiveMap.colorSpace)===De,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Hn,flipSided:A.side===mn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:se&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&A.extensions.multiDraw===!0||et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Xe.vertexUv1s=f.has(1),Xe.vertexUv2s=f.has(2),Xe.vertexUv3s=f.has(3),f.clear(),Xe}function v(A){let E=[];if(A.shaderID?E.push(A.shaderID):(E.push(A.customVertexShaderID),E.push(A.customFragmentShaderID)),A.defines!==void 0)for(let B in A.defines)E.push(B),E.push(A.defines[B]);return A.isRawShaderMaterial===!1&&(P(E,A),w(E,A),E.push(s.outputColorSpace)),E.push(A.customProgramCacheKey),E.join()}function P(A,E){A.push(E.precision),A.push(E.outputColorSpace),A.push(E.envMapMode),A.push(E.envMapCubeUVHeight),A.push(E.mapUv),A.push(E.alphaMapUv),A.push(E.lightMapUv),A.push(E.aoMapUv),A.push(E.bumpMapUv),A.push(E.normalMapUv),A.push(E.displacementMapUv),A.push(E.emissiveMapUv),A.push(E.metalnessMapUv),A.push(E.roughnessMapUv),A.push(E.anisotropyMapUv),A.push(E.clearcoatMapUv),A.push(E.clearcoatNormalMapUv),A.push(E.clearcoatRoughnessMapUv),A.push(E.iridescenceMapUv),A.push(E.iridescenceThicknessMapUv),A.push(E.sheenColorMapUv),A.push(E.sheenRoughnessMapUv),A.push(E.specularMapUv),A.push(E.specularColorMapUv),A.push(E.specularIntensityMapUv),A.push(E.transmissionMapUv),A.push(E.thicknessMapUv),A.push(E.combine),A.push(E.fogExp2),A.push(E.sizeAttenuation),A.push(E.morphTargetsCount),A.push(E.morphAttributeCount),A.push(E.numDirLights),A.push(E.numPointLights),A.push(E.numSpotLights),A.push(E.numSpotLightMaps),A.push(E.numHemiLights),A.push(E.numRectAreaLights),A.push(E.numDirLightShadows),A.push(E.numPointLightShadows),A.push(E.numSpotLightShadows),A.push(E.numSpotLightShadowsWithMaps),A.push(E.numLightProbes),A.push(E.shadowMapType),A.push(E.toneMapping),A.push(E.numClippingPlanes),A.push(E.numClipIntersection),A.push(E.depthPacking)}function w(A,E){h.disableAll(),E.supportsVertexTextures&&h.enable(0),E.instancing&&h.enable(1),E.instancingColor&&h.enable(2),E.instancingMorph&&h.enable(3),E.matcap&&h.enable(4),E.envMap&&h.enable(5),E.normalMapObjectSpace&&h.enable(6),E.normalMapTangentSpace&&h.enable(7),E.clearcoat&&h.enable(8),E.iridescence&&h.enable(9),E.alphaTest&&h.enable(10),E.vertexColors&&h.enable(11),E.vertexAlphas&&h.enable(12),E.vertexUv1s&&h.enable(13),E.vertexUv2s&&h.enable(14),E.vertexUv3s&&h.enable(15),E.vertexTangents&&h.enable(16),E.anisotropy&&h.enable(17),E.alphaHash&&h.enable(18),E.batching&&h.enable(19),E.dispersion&&h.enable(20),E.batchingColor&&h.enable(21),A.push(h.mask),h.disableAll(),E.fog&&h.enable(0),E.useFog&&h.enable(1),E.flatShading&&h.enable(2),E.logarithmicDepthBuffer&&h.enable(3),E.reverseDepthBuffer&&h.enable(4),E.skinning&&h.enable(5),E.morphTargets&&h.enable(6),E.morphNormals&&h.enable(7),E.morphColors&&h.enable(8),E.premultipliedAlpha&&h.enable(9),E.shadowMapEnabled&&h.enable(10),E.doubleSided&&h.enable(11),E.flipSided&&h.enable(12),E.useDepthPacking&&h.enable(13),E.dithering&&h.enable(14),E.transmission&&h.enable(15),E.sheen&&h.enable(16),E.opaque&&h.enable(17),E.pointsUvs&&h.enable(18),E.decodeVideoTexture&&h.enable(19),E.decodeVideoTextureEmissive&&h.enable(20),E.alphaToCoverage&&h.enable(21),A.push(h.mask)}function T(A){let E=y[A.type],B;if(E){let q=bn[E];B=gl.clone(q.uniforms)}else B=A.uniforms;return B}function U(A,E){let B;for(let q=0,Z=m.length;q<Z;q++){let j=m[q];if(j.cacheKey===E){B=j,++B.usedTimes;break}}return B===void 0&&(B=new Iy(s,E,A,a),m.push(B)),B}function C(A){if(--A.usedTimes===0){let E=m.indexOf(A);m[E]=m[m.length-1],m.pop(),A.destroy()}}function D(A){u.remove(A)}function O(){u.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:T,acquireProgram:U,releaseProgram:C,releaseShaderCache:D,programs:m,dispose:O}}function Oy(){let s=new WeakMap;function t(l){return s.has(l)}function e(l){let h=s.get(l);return h===void 0&&(h={},s.set(l,h)),h}function n(l){s.delete(l)}function r(l,h,u){s.get(l)[h]=u}function a(){s=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:a}}function Uy(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Rf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Cf(){let s=[],t=0,e=[],n=[],r=[];function a(){t=0,e.length=0,n.length=0,r.length=0}function l(d,g,_,y,S,x){let v=s[t];return v===void 0?(v={id:d.id,object:d,geometry:g,material:_,groupOrder:y,renderOrder:d.renderOrder,z:S,group:x},s[t]=v):(v.id=d.id,v.object=d,v.geometry=g,v.material=_,v.groupOrder=y,v.renderOrder=d.renderOrder,v.z=S,v.group=x),t++,v}function h(d,g,_,y,S,x){let v=l(d,g,_,y,S,x);_.transmission>0?n.push(v):_.transparent===!0?r.push(v):e.push(v)}function u(d,g,_,y,S,x){let v=l(d,g,_,y,S,x);_.transmission>0?n.unshift(v):_.transparent===!0?r.unshift(v):e.unshift(v)}function f(d,g){e.length>1&&e.sort(d||Uy),n.length>1&&n.sort(g||Rf),r.length>1&&r.sort(g||Rf)}function m(){for(let d=t,g=s.length;d<g;d++){let _=s[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:r,init:a,push:h,unshift:u,finish:m,sort:f}}function ky(){let s=new WeakMap;function t(n,r){let a=s.get(n),l;return a===void 0?(l=new Cf,s.set(n,[l])):r>=a.length?(l=new Cf,a.push(l)):l=a[r],l}function e(){s=new WeakMap}return{get:t,dispose:e}}function By(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new pe};break;case"SpotLight":e={position:new H,direction:new H,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new pe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":e={color:new pe,position:new H,halfWidth:new H,halfHeight:new H};break}return s[t.id]=e,e}}}function Fy(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var zy=0;function Hy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Vy(s){let t=new By,e=Fy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new H);let r=new H,a=new Fe,l=new Fe;function h(f){let m=0,d=0,g=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let _=0,y=0,S=0,x=0,v=0,P=0,w=0,T=0,U=0,C=0,D=0;f.sort(Hy);for(let A=0,E=f.length;A<E;A++){let B=f[A],q=B.color,Z=B.intensity,j=B.distance,it=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)m+=q.r*Z,d+=q.g*Z,g+=q.b*Z;else if(B.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(B.sh.coefficients[V],Z);D++}else if(B.isDirectionalLight){let V=t.get(B);if(V.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let pt=B.shadow,G=e.get(B);G.shadowIntensity=pt.intensity,G.shadowBias=pt.bias,G.shadowNormalBias=pt.normalBias,G.shadowRadius=pt.radius,G.shadowMapSize=pt.mapSize,n.directionalShadow[_]=G,n.directionalShadowMap[_]=it,n.directionalShadowMatrix[_]=B.shadow.matrix,P++}n.directional[_]=V,_++}else if(B.isSpotLight){let V=t.get(B);V.position.setFromMatrixPosition(B.matrixWorld),V.color.copy(q).multiplyScalar(Z),V.distance=j,V.coneCos=Math.cos(B.angle),V.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),V.decay=B.decay,n.spot[S]=V;let pt=B.shadow;if(B.map&&(n.spotLightMap[U]=B.map,U++,pt.updateMatrices(B),B.castShadow&&C++),n.spotLightMatrix[S]=pt.matrix,B.castShadow){let G=e.get(B);G.shadowIntensity=pt.intensity,G.shadowBias=pt.bias,G.shadowNormalBias=pt.normalBias,G.shadowRadius=pt.radius,G.shadowMapSize=pt.mapSize,n.spotShadow[S]=G,n.spotShadowMap[S]=it,T++}S++}else if(B.isRectAreaLight){let V=t.get(B);V.color.copy(q).multiplyScalar(Z),V.halfWidth.set(B.width*.5,0,0),V.halfHeight.set(0,B.height*.5,0),n.rectArea[x]=V,x++}else if(B.isPointLight){let V=t.get(B);if(V.color.copy(B.color).multiplyScalar(B.intensity),V.distance=B.distance,V.decay=B.decay,B.castShadow){let pt=B.shadow,G=e.get(B);G.shadowIntensity=pt.intensity,G.shadowBias=pt.bias,G.shadowNormalBias=pt.normalBias,G.shadowRadius=pt.radius,G.shadowMapSize=pt.mapSize,G.shadowCameraNear=pt.camera.near,G.shadowCameraFar=pt.camera.far,n.pointShadow[y]=G,n.pointShadowMap[y]=it,n.pointShadowMatrix[y]=B.shadow.matrix,w++}n.point[y]=V,y++}else if(B.isHemisphereLight){let V=t.get(B);V.skyColor.copy(B.color).multiplyScalar(Z),V.groundColor.copy(B.groundColor).multiplyScalar(Z),n.hemi[v]=V,v++}}x>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=d,n.ambient[2]=g;let O=n.hash;(O.directionalLength!==_||O.pointLength!==y||O.spotLength!==S||O.rectAreaLength!==x||O.hemiLength!==v||O.numDirectionalShadows!==P||O.numPointShadows!==w||O.numSpotShadows!==T||O.numSpotMaps!==U||O.numLightProbes!==D)&&(n.directional.length=_,n.spot.length=S,n.rectArea.length=x,n.point.length=y,n.hemi.length=v,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=P,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=T+U-C,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=D,O.directionalLength=_,O.pointLength=y,O.spotLength=S,O.rectAreaLength=x,O.hemiLength=v,O.numDirectionalShadows=P,O.numPointShadows=w,O.numSpotShadows=T,O.numSpotMaps=U,O.numLightProbes=D,n.version=zy++)}function u(f,m){let d=0,g=0,_=0,y=0,S=0,x=m.matrixWorldInverse;for(let v=0,P=f.length;v<P;v++){let w=f[v];if(w.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(x),d++}else if(w.isSpotLight){let T=n.spot[_];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(x),_++}else if(w.isRectAreaLight){let T=n.rectArea[y];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),l.identity(),a.copy(w.matrixWorld),a.premultiply(x),l.extractRotation(a),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(l),T.halfHeight.applyMatrix4(l),y++}else if(w.isPointLight){let T=n.point[g];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),g++}else if(w.isHemisphereLight){let T=n.hemi[S];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(x),S++}}}return{setup:h,setupView:u,state:n}}function Lf(s){let t=new Vy(s),e=[],n=[];function r(m){f.camera=m,e.length=0,n.length=0}function a(m){e.push(m)}function l(m){n.push(m)}function h(){t.setup(e)}function u(m){t.setupView(e,m)}let f={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:h,setupLightsView:u,pushLight:a,pushShadow:l}}function Gy(s){let t=new WeakMap;function e(r,a=0){let l=t.get(r),h;return l===void 0?(h=new Lf(s),t.set(r,[h])):a>=l.length?(h=new Lf(s),l.push(h)):h=l[a],h}function n(){t=new WeakMap}return{get:e,dispose:n}}var zh=class extends xi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ug,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Hh=class extends xi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Wy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zy=`uniform sampler2D shadow_pass;
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
}`;function Xy(s,t,e){let n=new co,r=new Yt,a=new Yt,l=new Ne,h=new zh({depthPacking:kg}),u=new Hh,f={},m=e.maxTextureSize,d={[ns]:mn,[mn]:ns,[Hn]:Hn},g=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:Wy,fragmentShader:Zy}),_=g.clone();_.defines.HORIZONTAL_PASS=1;let y=new Ge;y.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Be(y,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xf;let v=this.type;this.render=function(C,D,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;let A=s.getRenderTarget(),E=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),q=s.state;q.setBlending(ts),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let Z=v!==Ni&&this.type===Ni,j=v===Ni&&this.type!==Ni;for(let it=0,V=C.length;it<V;it++){let pt=C[it],G=pt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",pt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let ut=G.getFrameExtents();if(r.multiply(ut),a.copy(G.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(a.x=Math.floor(m/ut.x),r.x=a.x*ut.x,G.mapSize.x=a.x),r.y>m&&(a.y=Math.floor(m/ut.y),r.y=a.y*ut.y,G.mapSize.y=a.y)),G.map===null||Z===!0||j===!0){let ct=this.type!==Ni?{minFilter:si,magFilter:si}:{};G.map!==null&&G.map.dispose(),G.map=new Gi(r.x,r.y,ct),G.map.texture.name=pt.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();let lt=G.getViewportCount();for(let ct=0;ct<lt;ct++){let Mt=G.getViewport(ct);l.set(a.x*Mt.x,a.y*Mt.y,a.x*Mt.z,a.y*Mt.w),q.viewport(l),G.updateMatrices(pt,ct),n=G.getFrustum(),T(D,O,G.camera,pt,this.type)}G.isPointLightShadow!==!0&&this.type===Ni&&P(G,O),G.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(A,E,B)};function P(C,D){let O=t.update(S);g.defines.VSM_SAMPLES!==C.blurSamples&&(g.defines.VSM_SAMPLES=C.blurSamples,_.defines.VSM_SAMPLES=C.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Gi(r.x,r.y)),g.uniforms.shadow_pass.value=C.map.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(D,null,O,g,S,null),_.uniforms.shadow_pass.value=C.mapPass.texture,_.uniforms.resolution.value=C.mapSize,_.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(D,null,O,_,S,null)}function w(C,D,O,A){let E=null,B=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(B!==void 0)E=B;else if(E=O.isPointLight===!0?u:h,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let q=E.uuid,Z=D.uuid,j=f[q];j===void 0&&(j={},f[q]=j);let it=j[Z];it===void 0&&(it=E.clone(),j[Z]=it,D.addEventListener("dispose",U)),E=it}if(E.visible=D.visible,E.wireframe=D.wireframe,A===Ni?E.side=D.shadowSide!==null?D.shadowSide:D.side:E.side=D.shadowSide!==null?D.shadowSide:d[D.side],E.alphaMap=D.alphaMap,E.alphaTest=D.alphaTest,E.map=D.map,E.clipShadows=D.clipShadows,E.clippingPlanes=D.clippingPlanes,E.clipIntersection=D.clipIntersection,E.displacementMap=D.displacementMap,E.displacementScale=D.displacementScale,E.displacementBias=D.displacementBias,E.wireframeLinewidth=D.wireframeLinewidth,E.linewidth=D.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let q=s.properties.get(E);q.light=O}return E}function T(C,D,O,A,E){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===Ni)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);let Z=t.update(C),j=C.material;if(Array.isArray(j)){let it=Z.groups;for(let V=0,pt=it.length;V<pt;V++){let G=it[V],ut=j[G.materialIndex];if(ut&&ut.visible){let lt=w(C,ut,A,E);C.onBeforeShadow(s,C,D,O,Z,lt,G),s.renderBufferDirect(O,null,Z,lt,C,G),C.onAfterShadow(s,C,D,O,Z,lt,G)}}}else if(j.visible){let it=w(C,j,A,E);C.onBeforeShadow(s,C,D,O,Z,it,null),s.renderBufferDirect(O,null,Z,it,C,null),C.onAfterShadow(s,C,D,O,Z,it,null)}}let q=C.children;for(let Z=0,j=q.length;Z<j;Z++)T(q[Z],D,O,A,E)}function U(C){C.target.removeEventListener("dispose",U);for(let O in f){let A=f[O],E=C.target.uuid;E in A&&(A[E].dispose(),delete A[E])}}}var qy={[Wc]:Zc,[Xc]:$c,[qc]:Kc,[_r]:Yc,[Zc]:Wc,[$c]:Xc,[Kc]:qc,[Yc]:_r};function Yy(s,t){function e(){let X=!1,Pt=new Ne,ht=null,gt=new Ne(0,0,0,0);return{setMask:function(Dt){ht!==Dt&&!X&&(s.colorMask(Dt,Dt,Dt,Dt),ht=Dt)},setLocked:function(Dt){X=Dt},setClear:function(Dt,Ct,se,ze,Xe){Xe===!0&&(Dt*=ze,Ct*=ze,se*=ze),Pt.set(Dt,Ct,se,ze),gt.equals(Pt)===!1&&(s.clearColor(Dt,Ct,se,ze),gt.copy(Pt))},reset:function(){X=!1,ht=null,gt.set(-1,0,0,0)}}}function n(){let X=!1,Pt=!1,ht=null,gt=null,Dt=null;return{setReversed:function(Ct){if(Pt!==Ct){let se=t.get("EXT_clip_control");Pt?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT);let ze=Dt;Dt=null,this.setClear(ze)}Pt=Ct},getReversed:function(){return Pt},setTest:function(Ct){Ct?W(s.DEPTH_TEST):yt(s.DEPTH_TEST)},setMask:function(Ct){ht!==Ct&&!X&&(s.depthMask(Ct),ht=Ct)},setFunc:function(Ct){if(Pt&&(Ct=qy[Ct]),gt!==Ct){switch(Ct){case Wc:s.depthFunc(s.NEVER);break;case Zc:s.depthFunc(s.ALWAYS);break;case Xc:s.depthFunc(s.LESS);break;case _r:s.depthFunc(s.LEQUAL);break;case qc:s.depthFunc(s.EQUAL);break;case Yc:s.depthFunc(s.GEQUAL);break;case $c:s.depthFunc(s.GREATER);break;case Kc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=Ct}},setLocked:function(Ct){X=Ct},setClear:function(Ct){Dt!==Ct&&(Pt&&(Ct=1-Ct),s.clearDepth(Ct),Dt=Ct)},reset:function(){X=!1,ht=null,gt=null,Dt=null,Pt=!1}}}function r(){let X=!1,Pt=null,ht=null,gt=null,Dt=null,Ct=null,se=null,ze=null,Xe=null;return{setTest:function(Ae){X||(Ae?W(s.STENCIL_TEST):yt(s.STENCIL_TEST))},setMask:function(Ae){Pt!==Ae&&!X&&(s.stencilMask(Ae),Pt=Ae)},setFunc:function(Ae,Tn,Yn){(ht!==Ae||gt!==Tn||Dt!==Yn)&&(s.stencilFunc(Ae,Tn,Yn),ht=Ae,gt=Tn,Dt=Yn)},setOp:function(Ae,Tn,Yn){(Ct!==Ae||se!==Tn||ze!==Yn)&&(s.stencilOp(Ae,Tn,Yn),Ct=Ae,se=Tn,ze=Yn)},setLocked:function(Ae){X=Ae},setClear:function(Ae){Xe!==Ae&&(s.clearStencil(Ae),Xe=Ae)},reset:function(){X=!1,Pt=null,ht=null,gt=null,Dt=null,Ct=null,se=null,ze=null,Xe=null}}}let a=new e,l=new n,h=new r,u=new WeakMap,f=new WeakMap,m={},d={},g=new WeakMap,_=[],y=null,S=!1,x=null,v=null,P=null,w=null,T=null,U=null,C=null,D=new pe(0,0,0),O=0,A=!1,E=null,B=null,q=null,Z=null,j=null,it=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,pt=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(pt=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=pt>=1):G.indexOf("OpenGL ES")!==-1&&(pt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=pt>=2);let ut=null,lt={},ct=s.getParameter(s.SCISSOR_BOX),Mt=s.getParameter(s.VIEWPORT),wt=new Ne().fromArray(ct),J=new Ne().fromArray(Mt);function Y(X,Pt,ht,gt){let Dt=new Uint8Array(4),Ct=s.createTexture();s.bindTexture(X,Ct),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let se=0;se<ht;se++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Pt,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,Dt):s.texImage2D(Pt+se,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Dt);return Ct}let at={};at[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),at[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),at[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),h.setClear(0),W(s.DEPTH_TEST),l.setFunc(_r),jt(!1),Ut(Id),W(s.CULL_FACE),F(ts);function W(X){m[X]!==!0&&(s.enable(X),m[X]=!0)}function yt(X){m[X]!==!1&&(s.disable(X),m[X]=!1)}function dt(X,Pt){return d[X]!==Pt?(s.bindFramebuffer(X,Pt),d[X]=Pt,X===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Pt),X===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Pt),!0):!1}function et(X,Pt){let ht=_,gt=!1;if(X){ht=g.get(Pt),ht===void 0&&(ht=[],g.set(Pt,ht));let Dt=X.textures;if(ht.length!==Dt.length||ht[0]!==s.COLOR_ATTACHMENT0){for(let Ct=0,se=Dt.length;Ct<se;Ct++)ht[Ct]=s.COLOR_ATTACHMENT0+Ct;ht.length=Dt.length,gt=!0}}else ht[0]!==s.BACK&&(ht[0]=s.BACK,gt=!0);gt&&s.drawBuffers(ht)}function Tt(X){return y!==X?(s.useProgram(X),y=X,!0):!1}let xt={[ys]:s.FUNC_ADD,[cg]:s.FUNC_SUBTRACT,[hg]:s.FUNC_REVERSE_SUBTRACT};xt[ug]=s.MIN,xt[dg]=s.MAX;let It={[fg]:s.ZERO,[pg]:s.ONE,[mg]:s.SRC_COLOR,[Vc]:s.SRC_ALPHA,[bg]:s.SRC_ALPHA_SATURATE,[xg]:s.DST_COLOR,[_g]:s.DST_ALPHA,[gg]:s.ONE_MINUS_SRC_COLOR,[Gc]:s.ONE_MINUS_SRC_ALPHA,[yg]:s.ONE_MINUS_DST_COLOR,[vg]:s.ONE_MINUS_DST_ALPHA,[Mg]:s.CONSTANT_COLOR,[Sg]:s.ONE_MINUS_CONSTANT_COLOR,[wg]:s.CONSTANT_ALPHA,[Tg]:s.ONE_MINUS_CONSTANT_ALPHA};function F(X,Pt,ht,gt,Dt,Ct,se,ze,Xe,Ae){if(X===ts){S===!0&&(yt(s.BLEND),S=!1);return}if(S===!1&&(W(s.BLEND),S=!0),X!==lg){if(X!==x||Ae!==A){if((v!==ys||T!==ys)&&(s.blendEquation(s.FUNC_ADD),v=ys,T=ys),Ae)switch(X){case dr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dd:s.blendFunc(s.ONE,s.ONE);break;case Nd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Od:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case dr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dd:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Nd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Od:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}P=null,w=null,U=null,C=null,D.set(0,0,0),O=0,x=X,A=Ae}return}Dt=Dt||Pt,Ct=Ct||ht,se=se||gt,(Pt!==v||Dt!==T)&&(s.blendEquationSeparate(xt[Pt],xt[Dt]),v=Pt,T=Dt),(ht!==P||gt!==w||Ct!==U||se!==C)&&(s.blendFuncSeparate(It[ht],It[gt],It[Ct],It[se]),P=ht,w=gt,U=Ct,C=se),(ze.equals(D)===!1||Xe!==O)&&(s.blendColor(ze.r,ze.g,ze.b,Xe),D.copy(ze),O=Xe),x=X,A=!1}function ae(X,Pt){X.side===Hn?yt(s.CULL_FACE):W(s.CULL_FACE);let ht=X.side===mn;Pt&&(ht=!ht),jt(ht),X.blending===dr&&X.transparent===!1?F(ts):F(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),l.setFunc(X.depthFunc),l.setTest(X.depthTest),l.setMask(X.depthWrite),a.setMask(X.colorWrite);let gt=X.stencilWrite;h.setTest(gt),gt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),we(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?W(s.SAMPLE_ALPHA_TO_COVERAGE):yt(s.SAMPLE_ALPHA_TO_COVERAGE)}function jt(X){E!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),E=X)}function Ut(X){X!==rg?(W(s.CULL_FACE),X!==B&&(X===Id?s.cullFace(s.BACK):X===og?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):yt(s.CULL_FACE),B=X}function Ft(X){X!==q&&(V&&s.lineWidth(X),q=X)}function we(X,Pt,ht){X?(W(s.POLYGON_OFFSET_FILL),(Z!==Pt||j!==ht)&&(s.polygonOffset(Pt,ht),Z=Pt,j=ht)):yt(s.POLYGON_OFFSET_FILL)}function $t(X){X?W(s.SCISSOR_TEST):yt(s.SCISSOR_TEST)}function k(X){X===void 0&&(X=s.TEXTURE0+it-1),ut!==X&&(s.activeTexture(X),ut=X)}function I(X,Pt,ht){ht===void 0&&(ut===null?ht=s.TEXTURE0+it-1:ht=ut);let gt=lt[ht];gt===void 0&&(gt={type:void 0,texture:void 0},lt[ht]=gt),(gt.type!==X||gt.texture!==Pt)&&(ut!==ht&&(s.activeTexture(ht),ut=ht),s.bindTexture(X,Pt||at[X]),gt.type=X,gt.texture=Pt)}function nt(){let X=lt[ut];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function mt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function vt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{s.texSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xt(){try{s.texSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function kt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ge(){try{s.texStorage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{s.texStorage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(){try{s.texImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Jt(){try{s.texImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ee(X){wt.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),wt.copy(X))}function Ot(X){J.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),J.copy(X))}function me(X,Pt){let ht=f.get(Pt);ht===void 0&&(ht=new WeakMap,f.set(Pt,ht));let gt=ht.get(X);gt===void 0&&(gt=s.getUniformBlockIndex(Pt,X.name),ht.set(X,gt))}function re(X,Pt){let gt=f.get(Pt).get(X);u.get(Pt)!==gt&&(s.uniformBlockBinding(Pt,gt,X.__bindingPointIndex),u.set(Pt,gt))}function Re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),l.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},ut=null,lt={},d={},g=new WeakMap,_=[],y=null,S=!1,x=null,v=null,P=null,w=null,T=null,U=null,C=null,D=new pe(0,0,0),O=0,A=!1,E=null,B=null,q=null,Z=null,j=null,wt.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),h.reset()}return{buffers:{color:a,depth:l,stencil:h},enable:W,disable:yt,bindFramebuffer:dt,drawBuffers:et,useProgram:Tt,setBlending:F,setMaterial:ae,setFlipSided:jt,setCullFace:Ut,setLineWidth:Ft,setPolygonOffset:we,setScissorTest:$t,activeTexture:k,bindTexture:I,unbindTexture:nt,compressedTexImage2D:mt,compressedTexImage3D:vt,texImage2D:Bt,texImage3D:Jt,updateUBOMapping:me,uniformBlockBinding:re,texStorage2D:ge,texStorage3D:bt,texSubImage2D:ft,texSubImage3D:Xt,compressedTexSubImage2D:Rt,compressedTexSubImage3D:kt,scissor:ee,viewport:Ot,reset:Re}}function If(s,t,e,n){let r=$y(n);switch(e){case jf:return s*t;case tp:return s*t;case ep:return s*t*2;case np:return s*t/r.components*r.byteLength;case au:return s*t/r.components*r.byteLength;case ip:return s*t*2/r.components*r.byteLength;case lu:return s*t*2/r.components*r.byteLength;case Qf:return s*t*3/r.components*r.byteLength;case ii:return s*t*4/r.components*r.byteLength;case cu:return s*t*4/r.components*r.byteLength;case Pa:case Ra:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ca:case La:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nh:case sh:return Math.max(s,16)*Math.max(t,8)/4;case eh:case ih:return Math.max(s,8)*Math.max(t,8)/2;case rh:case oh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ah:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ch:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case hh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case uh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case dh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case fh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ph:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case mh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case gh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case _h:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case vh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case xh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case yh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case bh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ia:case Mh:case Sh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case sp:case wh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Th:case Eh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $y(s){switch(s){case Hi:case $f:return{byteLength:1,components:1};case ao:case Kf:case _o:return{byteLength:2,components:1};case ru:case ou:return{byteLength:2,components:4};case ws:case su:case Ui:return{byteLength:4,components:1};case Jf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Ky(s,t,e,n,r,a,l){let h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Yt,m=new WeakMap,d,g=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(k,I){return _?new OffscreenCanvas(k,I):Oa("canvas")}function S(k,I,nt){let mt=1,vt=$t(k);if((vt.width>nt||vt.height>nt)&&(mt=nt/Math.max(vt.width,vt.height)),mt<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){let ft=Math.floor(mt*vt.width),Xt=Math.floor(mt*vt.height);d===void 0&&(d=y(ft,Xt));let Rt=I?y(ft,Xt):d;return Rt.width=ft,Rt.height=Xt,Rt.getContext("2d").drawImage(k,0,0,ft,Xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ft+"x"+Xt+")."),Rt}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),k;return k}function x(k){return k.generateMipmaps}function v(k){s.generateMipmap(k)}function P(k){return k.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?s.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(k,I,nt,mt,vt=!1){if(k!==null){if(s[k]!==void 0)return s[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let ft=I;if(I===s.RED&&(nt===s.FLOAT&&(ft=s.R32F),nt===s.HALF_FLOAT&&(ft=s.R16F),nt===s.UNSIGNED_BYTE&&(ft=s.R8)),I===s.RED_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ft=s.R8UI),nt===s.UNSIGNED_SHORT&&(ft=s.R16UI),nt===s.UNSIGNED_INT&&(ft=s.R32UI),nt===s.BYTE&&(ft=s.R8I),nt===s.SHORT&&(ft=s.R16I),nt===s.INT&&(ft=s.R32I)),I===s.RG&&(nt===s.FLOAT&&(ft=s.RG32F),nt===s.HALF_FLOAT&&(ft=s.RG16F),nt===s.UNSIGNED_BYTE&&(ft=s.RG8)),I===s.RG_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ft=s.RG8UI),nt===s.UNSIGNED_SHORT&&(ft=s.RG16UI),nt===s.UNSIGNED_INT&&(ft=s.RG32UI),nt===s.BYTE&&(ft=s.RG8I),nt===s.SHORT&&(ft=s.RG16I),nt===s.INT&&(ft=s.RG32I)),I===s.RGB_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ft=s.RGB8UI),nt===s.UNSIGNED_SHORT&&(ft=s.RGB16UI),nt===s.UNSIGNED_INT&&(ft=s.RGB32UI),nt===s.BYTE&&(ft=s.RGB8I),nt===s.SHORT&&(ft=s.RGB16I),nt===s.INT&&(ft=s.RGB32I)),I===s.RGBA_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ft=s.RGBA8UI),nt===s.UNSIGNED_SHORT&&(ft=s.RGBA16UI),nt===s.UNSIGNED_INT&&(ft=s.RGBA32UI),nt===s.BYTE&&(ft=s.RGBA8I),nt===s.SHORT&&(ft=s.RGBA16I),nt===s.INT&&(ft=s.RGBA32I)),I===s.RGB&&nt===s.UNSIGNED_INT_5_9_9_9_REV&&(ft=s.RGB9_E5),I===s.RGBA){let Xt=vt?pl:Te.getTransfer(mt);nt===s.FLOAT&&(ft=s.RGBA32F),nt===s.HALF_FLOAT&&(ft=s.RGBA16F),nt===s.UNSIGNED_BYTE&&(ft=Xt===De?s.SRGB8_ALPHA8:s.RGBA8),nt===s.UNSIGNED_SHORT_4_4_4_4&&(ft=s.RGBA4),nt===s.UNSIGNED_SHORT_5_5_5_1&&(ft=s.RGB5_A1)}return(ft===s.R16F||ft===s.R32F||ft===s.RG16F||ft===s.RG32F||ft===s.RGBA16F||ft===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function T(k,I){let nt;return k?I===null||I===ws||I===yr?nt=s.DEPTH24_STENCIL8:I===Ui?nt=s.DEPTH32F_STENCIL8:I===ao&&(nt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===ws||I===yr?nt=s.DEPTH_COMPONENT24:I===Ui?nt=s.DEPTH_COMPONENT32F:I===ao&&(nt=s.DEPTH_COMPONENT16),nt}function U(k,I){return x(k)===!0||k.isFramebufferTexture&&k.minFilter!==si&&k.minFilter!==Vn?Math.log2(Math.max(I.width,I.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?I.mipmaps.length:1}function C(k){let I=k.target;I.removeEventListener("dispose",C),O(I),I.isVideoTexture&&m.delete(I)}function D(k){let I=k.target;I.removeEventListener("dispose",D),E(I)}function O(k){let I=n.get(k);if(I.__webglInit===void 0)return;let nt=k.source,mt=g.get(nt);if(mt){let vt=mt[I.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&A(k),Object.keys(mt).length===0&&g.delete(nt)}n.remove(k)}function A(k){let I=n.get(k);s.deleteTexture(I.__webglTexture);let nt=k.source,mt=g.get(nt);delete mt[I.__cacheKey],l.memory.textures--}function E(k){let I=n.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),n.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(I.__webglFramebuffer[mt]))for(let vt=0;vt<I.__webglFramebuffer[mt].length;vt++)s.deleteFramebuffer(I.__webglFramebuffer[mt][vt]);else s.deleteFramebuffer(I.__webglFramebuffer[mt]);I.__webglDepthbuffer&&s.deleteRenderbuffer(I.__webglDepthbuffer[mt])}else{if(Array.isArray(I.__webglFramebuffer))for(let mt=0;mt<I.__webglFramebuffer.length;mt++)s.deleteFramebuffer(I.__webglFramebuffer[mt]);else s.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&s.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&s.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let mt=0;mt<I.__webglColorRenderbuffer.length;mt++)I.__webglColorRenderbuffer[mt]&&s.deleteRenderbuffer(I.__webglColorRenderbuffer[mt]);I.__webglDepthRenderbuffer&&s.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let nt=k.textures;for(let mt=0,vt=nt.length;mt<vt;mt++){let ft=n.get(nt[mt]);ft.__webglTexture&&(s.deleteTexture(ft.__webglTexture),l.memory.textures--),n.remove(nt[mt])}n.remove(k)}let B=0;function q(){B=0}function Z(){let k=B;return k>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+r.maxTextures),B+=1,k}function j(k){let I=[];return I.push(k.wrapS),I.push(k.wrapT),I.push(k.wrapR||0),I.push(k.magFilter),I.push(k.minFilter),I.push(k.anisotropy),I.push(k.internalFormat),I.push(k.format),I.push(k.type),I.push(k.generateMipmaps),I.push(k.premultiplyAlpha),I.push(k.flipY),I.push(k.unpackAlignment),I.push(k.colorSpace),I.join()}function it(k,I){let nt=n.get(k);if(k.isVideoTexture&&Ft(k),k.isRenderTargetTexture===!1&&k.version>0&&nt.__version!==k.version){let mt=k.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(nt,k,I);return}}e.bindTexture(s.TEXTURE_2D,nt.__webglTexture,s.TEXTURE0+I)}function V(k,I){let nt=n.get(k);if(k.version>0&&nt.__version!==k.version){J(nt,k,I);return}e.bindTexture(s.TEXTURE_2D_ARRAY,nt.__webglTexture,s.TEXTURE0+I)}function pt(k,I){let nt=n.get(k);if(k.version>0&&nt.__version!==k.version){J(nt,k,I);return}e.bindTexture(s.TEXTURE_3D,nt.__webglTexture,s.TEXTURE0+I)}function G(k,I){let nt=n.get(k);if(k.version>0&&nt.__version!==k.version){Y(nt,k,I);return}e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture,s.TEXTURE0+I)}let ut={[Qc]:s.REPEAT,[Ms]:s.CLAMP_TO_EDGE,[th]:s.MIRRORED_REPEAT},lt={[si]:s.NEAREST,[Og]:s.NEAREST_MIPMAP_NEAREST,[Yo]:s.NEAREST_MIPMAP_LINEAR,[Vn]:s.LINEAR,[cc]:s.LINEAR_MIPMAP_NEAREST,[Ss]:s.LINEAR_MIPMAP_LINEAR},ct={[Fg]:s.NEVER,[Zg]:s.ALWAYS,[zg]:s.LESS,[op]:s.LEQUAL,[Hg]:s.EQUAL,[Wg]:s.GEQUAL,[Vg]:s.GREATER,[Gg]:s.NOTEQUAL};function Mt(k,I){if(I.type===Ui&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===Vn||I.magFilter===cc||I.magFilter===Yo||I.magFilter===Ss||I.minFilter===Vn||I.minFilter===cc||I.minFilter===Yo||I.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(k,s.TEXTURE_WRAP_S,ut[I.wrapS]),s.texParameteri(k,s.TEXTURE_WRAP_T,ut[I.wrapT]),(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)&&s.texParameteri(k,s.TEXTURE_WRAP_R,ut[I.wrapR]),s.texParameteri(k,s.TEXTURE_MAG_FILTER,lt[I.magFilter]),s.texParameteri(k,s.TEXTURE_MIN_FILTER,lt[I.minFilter]),I.compareFunction&&(s.texParameteri(k,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(k,s.TEXTURE_COMPARE_FUNC,ct[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===si||I.minFilter!==Yo&&I.minFilter!==Ss||I.type===Ui&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){let nt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(k,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,r.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function wt(k,I){let nt=!1;k.__webglInit===void 0&&(k.__webglInit=!0,I.addEventListener("dispose",C));let mt=I.source,vt=g.get(mt);vt===void 0&&(vt={},g.set(mt,vt));let ft=j(I);if(ft!==k.__cacheKey){vt[ft]===void 0&&(vt[ft]={texture:s.createTexture(),usedTimes:0},l.memory.textures++,nt=!0),vt[ft].usedTimes++;let Xt=vt[k.__cacheKey];Xt!==void 0&&(vt[k.__cacheKey].usedTimes--,Xt.usedTimes===0&&A(I)),k.__cacheKey=ft,k.__webglTexture=vt[ft].texture}return nt}function J(k,I,nt){let mt=s.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(mt=s.TEXTURE_2D_ARRAY),I.isData3DTexture&&(mt=s.TEXTURE_3D);let vt=wt(k,I),ft=I.source;e.bindTexture(mt,k.__webglTexture,s.TEXTURE0+nt);let Xt=n.get(ft);if(ft.version!==Xt.__version||vt===!0){e.activeTexture(s.TEXTURE0+nt);let Rt=Te.getPrimaries(Te.workingColorSpace),kt=I.colorSpace===Qi?null:Te.getPrimaries(I.colorSpace),ge=I.colorSpace===Qi||Rt===kt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,I.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,I.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let bt=S(I.image,!1,r.maxTextureSize);bt=we(I,bt);let Bt=a.convert(I.format,I.colorSpace),Jt=a.convert(I.type),ee=w(I.internalFormat,Bt,Jt,I.colorSpace,I.isVideoTexture);Mt(mt,I);let Ot,me=I.mipmaps,re=I.isVideoTexture!==!0,Re=Xt.__version===void 0||vt===!0,X=ft.dataReady,Pt=U(I,bt);if(I.isDepthTexture)ee=T(I.format===br,I.type),Re&&(re?e.texStorage2D(s.TEXTURE_2D,1,ee,bt.width,bt.height):e.texImage2D(s.TEXTURE_2D,0,ee,bt.width,bt.height,0,Bt,Jt,null));else if(I.isDataTexture)if(me.length>0){re&&Re&&e.texStorage2D(s.TEXTURE_2D,Pt,ee,me[0].width,me[0].height);for(let ht=0,gt=me.length;ht<gt;ht++)Ot=me[ht],re?X&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,Ot.width,Ot.height,Bt,Jt,Ot.data):e.texImage2D(s.TEXTURE_2D,ht,ee,Ot.width,Ot.height,0,Bt,Jt,Ot.data);I.generateMipmaps=!1}else re?(Re&&e.texStorage2D(s.TEXTURE_2D,Pt,ee,bt.width,bt.height),X&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,bt.width,bt.height,Bt,Jt,bt.data)):e.texImage2D(s.TEXTURE_2D,0,ee,bt.width,bt.height,0,Bt,Jt,bt.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){re&&Re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,ee,me[0].width,me[0].height,bt.depth);for(let ht=0,gt=me.length;ht<gt;ht++)if(Ot=me[ht],I.format!==ii)if(Bt!==null)if(re){if(X)if(I.layerUpdates.size>0){let Dt=If(Ot.width,Ot.height,I.format,I.type);for(let Ct of I.layerUpdates){let se=Ot.data.subarray(Ct*Dt/Ot.data.BYTES_PER_ELEMENT,(Ct+1)*Dt/Ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,Ct,Ot.width,Ot.height,1,Bt,se)}I.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,Ot.width,Ot.height,bt.depth,Bt,Ot.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ht,ee,Ot.width,Ot.height,bt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?X&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,Ot.width,Ot.height,bt.depth,Bt,Jt,Ot.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ht,ee,Ot.width,Ot.height,bt.depth,0,Bt,Jt,Ot.data)}else{re&&Re&&e.texStorage2D(s.TEXTURE_2D,Pt,ee,me[0].width,me[0].height);for(let ht=0,gt=me.length;ht<gt;ht++)Ot=me[ht],I.format!==ii?Bt!==null?re?X&&e.compressedTexSubImage2D(s.TEXTURE_2D,ht,0,0,Ot.width,Ot.height,Bt,Ot.data):e.compressedTexImage2D(s.TEXTURE_2D,ht,ee,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?X&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,Ot.width,Ot.height,Bt,Jt,Ot.data):e.texImage2D(s.TEXTURE_2D,ht,ee,Ot.width,Ot.height,0,Bt,Jt,Ot.data)}else if(I.isDataArrayTexture)if(re){if(Re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,ee,bt.width,bt.height,bt.depth),X)if(I.layerUpdates.size>0){let ht=If(bt.width,bt.height,I.format,I.type);for(let gt of I.layerUpdates){let Dt=bt.data.subarray(gt*ht/bt.data.BYTES_PER_ELEMENT,(gt+1)*ht/bt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,bt.width,bt.height,1,Bt,Jt,Dt)}I.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Bt,Jt,bt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,ee,bt.width,bt.height,bt.depth,0,Bt,Jt,bt.data);else if(I.isData3DTexture)re?(Re&&e.texStorage3D(s.TEXTURE_3D,Pt,ee,bt.width,bt.height,bt.depth),X&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Bt,Jt,bt.data)):e.texImage3D(s.TEXTURE_3D,0,ee,bt.width,bt.height,bt.depth,0,Bt,Jt,bt.data);else if(I.isFramebufferTexture){if(Re)if(re)e.texStorage2D(s.TEXTURE_2D,Pt,ee,bt.width,bt.height);else{let ht=bt.width,gt=bt.height;for(let Dt=0;Dt<Pt;Dt++)e.texImage2D(s.TEXTURE_2D,Dt,ee,ht,gt,0,Bt,Jt,null),ht>>=1,gt>>=1}}else if(me.length>0){if(re&&Re){let ht=$t(me[0]);e.texStorage2D(s.TEXTURE_2D,Pt,ee,ht.width,ht.height)}for(let ht=0,gt=me.length;ht<gt;ht++)Ot=me[ht],re?X&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,Bt,Jt,Ot):e.texImage2D(s.TEXTURE_2D,ht,ee,Bt,Jt,Ot);I.generateMipmaps=!1}else if(re){if(Re){let ht=$t(bt);e.texStorage2D(s.TEXTURE_2D,Pt,ee,ht.width,ht.height)}X&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Bt,Jt,bt)}else e.texImage2D(s.TEXTURE_2D,0,ee,Bt,Jt,bt);x(I)&&v(mt),Xt.__version=ft.version,I.onUpdate&&I.onUpdate(I)}k.__version=I.version}function Y(k,I,nt){if(I.image.length!==6)return;let mt=wt(k,I),vt=I.source;e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+nt);let ft=n.get(vt);if(vt.version!==ft.__version||mt===!0){e.activeTexture(s.TEXTURE0+nt);let Xt=Te.getPrimaries(Te.workingColorSpace),Rt=I.colorSpace===Qi?null:Te.getPrimaries(I.colorSpace),kt=I.colorSpace===Qi||Xt===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,I.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,I.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let ge=I.isCompressedTexture||I.image[0].isCompressedTexture,bt=I.image[0]&&I.image[0].isDataTexture,Bt=[];for(let gt=0;gt<6;gt++)!ge&&!bt?Bt[gt]=S(I.image[gt],!0,r.maxCubemapSize):Bt[gt]=bt?I.image[gt].image:I.image[gt],Bt[gt]=we(I,Bt[gt]);let Jt=Bt[0],ee=a.convert(I.format,I.colorSpace),Ot=a.convert(I.type),me=w(I.internalFormat,ee,Ot,I.colorSpace),re=I.isVideoTexture!==!0,Re=ft.__version===void 0||mt===!0,X=vt.dataReady,Pt=U(I,Jt);Mt(s.TEXTURE_CUBE_MAP,I);let ht;if(ge){re&&Re&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,me,Jt.width,Jt.height);for(let gt=0;gt<6;gt++){ht=Bt[gt].mipmaps;for(let Dt=0;Dt<ht.length;Dt++){let Ct=ht[Dt];I.format!==ii?ee!==null?re?X&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt,0,0,Ct.width,Ct.height,ee,Ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt,me,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?X&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt,0,0,Ct.width,Ct.height,ee,Ot,Ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt,me,Ct.width,Ct.height,0,ee,Ot,Ct.data)}}}else{if(ht=I.mipmaps,re&&Re){ht.length>0&&Pt++;let gt=$t(Bt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,me,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(bt){re?X&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Bt[gt].width,Bt[gt].height,ee,Ot,Bt[gt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,me,Bt[gt].width,Bt[gt].height,0,ee,Ot,Bt[gt].data);for(let Dt=0;Dt<ht.length;Dt++){let se=ht[Dt].image[gt].image;re?X&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt+1,0,0,se.width,se.height,ee,Ot,se.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt+1,me,se.width,se.height,0,ee,Ot,se.data)}}else{re?X&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,ee,Ot,Bt[gt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,me,ee,Ot,Bt[gt]);for(let Dt=0;Dt<ht.length;Dt++){let Ct=ht[Dt];re?X&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt+1,0,0,ee,Ot,Ct.image[gt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt+1,me,ee,Ot,Ct.image[gt])}}}x(I)&&v(s.TEXTURE_CUBE_MAP),ft.__version=vt.version,I.onUpdate&&I.onUpdate(I)}k.__version=I.version}function at(k,I,nt,mt,vt,ft){let Xt=a.convert(nt.format,nt.colorSpace),Rt=a.convert(nt.type),kt=w(nt.internalFormat,Xt,Rt,nt.colorSpace),ge=n.get(I),bt=n.get(nt);if(bt.__renderTarget=I,!ge.__hasExternalTextures){let Bt=Math.max(1,I.width>>ft),Jt=Math.max(1,I.height>>ft);vt===s.TEXTURE_3D||vt===s.TEXTURE_2D_ARRAY?e.texImage3D(vt,ft,kt,Bt,Jt,I.depth,0,Xt,Rt,null):e.texImage2D(vt,ft,kt,Bt,Jt,0,Xt,Rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,k),Ut(I)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,vt,bt.__webglTexture,0,jt(I)):(vt===s.TEXTURE_2D||vt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,mt,vt,bt.__webglTexture,ft),e.bindFramebuffer(s.FRAMEBUFFER,null)}function W(k,I,nt){if(s.bindRenderbuffer(s.RENDERBUFFER,k),I.depthBuffer){let mt=I.depthTexture,vt=mt&&mt.isDepthTexture?mt.type:null,ft=T(I.stencilBuffer,vt),Xt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=jt(I);Ut(I)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt,ft,I.width,I.height):nt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,ft,I.width,I.height):s.renderbufferStorage(s.RENDERBUFFER,ft,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xt,s.RENDERBUFFER,k)}else{let mt=I.textures;for(let vt=0;vt<mt.length;vt++){let ft=mt[vt],Xt=a.convert(ft.format,ft.colorSpace),Rt=a.convert(ft.type),kt=w(ft.internalFormat,Xt,Rt,ft.colorSpace),ge=jt(I);nt&&Ut(I)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,kt,I.width,I.height):Ut(I)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ge,kt,I.width,I.height):s.renderbufferStorage(s.RENDERBUFFER,kt,I.width,I.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function yt(k,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,k),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let mt=n.get(I.depthTexture);mt.__renderTarget=I,(!mt.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),it(I.depthTexture,0);let vt=mt.__webglTexture,ft=jt(I);if(I.depthTexture.format===fr)Ut(I)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,vt,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,vt,0);else if(I.depthTexture.format===br)Ut(I)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,vt,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function dt(k){let I=n.get(k),nt=k.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==k.depthTexture){let mt=k.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),mt){let vt=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,mt.removeEventListener("dispose",vt)};mt.addEventListener("dispose",vt),I.__depthDisposeCallback=vt}I.__boundDepthTexture=mt}if(k.depthTexture&&!I.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");yt(I.__webglFramebuffer,k)}else if(nt){I.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(e.bindFramebuffer(s.FRAMEBUFFER,I.__webglFramebuffer[mt]),I.__webglDepthbuffer[mt]===void 0)I.__webglDepthbuffer[mt]=s.createRenderbuffer(),W(I.__webglDepthbuffer[mt],k,!1);else{let vt=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=I.__webglDepthbuffer[mt];s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,ft)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=s.createRenderbuffer(),W(I.__webglDepthbuffer,k,!1);else{let mt=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=I.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,vt),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,vt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function et(k,I,nt){let mt=n.get(k);I!==void 0&&at(mt.__webglFramebuffer,k,k.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),nt!==void 0&&dt(k)}function Tt(k){let I=k.texture,nt=n.get(k),mt=n.get(I);k.addEventListener("dispose",D);let vt=k.textures,ft=k.isWebGLCubeRenderTarget===!0,Xt=vt.length>1;if(Xt||(mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture()),mt.__version=I.version,l.memory.textures++),ft){nt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(I.mipmaps&&I.mipmaps.length>0){nt.__webglFramebuffer[Rt]=[];for(let kt=0;kt<I.mipmaps.length;kt++)nt.__webglFramebuffer[Rt][kt]=s.createFramebuffer()}else nt.__webglFramebuffer[Rt]=s.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Rt=0;Rt<I.mipmaps.length;Rt++)nt.__webglFramebuffer[Rt]=s.createFramebuffer()}else nt.__webglFramebuffer=s.createFramebuffer();if(Xt)for(let Rt=0,kt=vt.length;Rt<kt;Rt++){let ge=n.get(vt[Rt]);ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture(),l.memory.textures++)}if(k.samples>0&&Ut(k)===!1){nt.__webglMultisampledFramebuffer=s.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<vt.length;Rt++){let kt=vt[Rt];nt.__webglColorRenderbuffer[Rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt]);let ge=a.convert(kt.format,kt.colorSpace),bt=a.convert(kt.type),Bt=w(kt.internalFormat,ge,bt,kt.colorSpace,k.isXRRenderTarget===!0),Jt=jt(k);s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,Bt,k.width,k.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),k.depthBuffer&&(nt.__webglDepthRenderbuffer=s.createRenderbuffer(),W(nt.__webglDepthRenderbuffer,k,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ft){e.bindTexture(s.TEXTURE_CUBE_MAP,mt.__webglTexture),Mt(s.TEXTURE_CUBE_MAP,I);for(let Rt=0;Rt<6;Rt++)if(I.mipmaps&&I.mipmaps.length>0)for(let kt=0;kt<I.mipmaps.length;kt++)at(nt.__webglFramebuffer[Rt][kt],k,I,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,kt);else at(nt.__webglFramebuffer[Rt],k,I,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);x(I)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Xt){for(let Rt=0,kt=vt.length;Rt<kt;Rt++){let ge=vt[Rt],bt=n.get(ge);e.bindTexture(s.TEXTURE_2D,bt.__webglTexture),Mt(s.TEXTURE_2D,ge),at(nt.__webglFramebuffer,k,ge,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,0),x(ge)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let Rt=s.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Rt=k.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Rt,mt.__webglTexture),Mt(Rt,I),I.mipmaps&&I.mipmaps.length>0)for(let kt=0;kt<I.mipmaps.length;kt++)at(nt.__webglFramebuffer[kt],k,I,s.COLOR_ATTACHMENT0,Rt,kt);else at(nt.__webglFramebuffer,k,I,s.COLOR_ATTACHMENT0,Rt,0);x(I)&&v(Rt),e.unbindTexture()}k.depthBuffer&&dt(k)}function xt(k){let I=k.textures;for(let nt=0,mt=I.length;nt<mt;nt++){let vt=I[nt];if(x(vt)){let ft=P(k),Xt=n.get(vt).__webglTexture;e.bindTexture(ft,Xt),v(ft),e.unbindTexture()}}}let It=[],F=[];function ae(k){if(k.samples>0){if(Ut(k)===!1){let I=k.textures,nt=k.width,mt=k.height,vt=s.COLOR_BUFFER_BIT,ft=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xt=n.get(k),Rt=I.length>1;if(Rt)for(let kt=0;kt<I.length;kt++)e.bindFramebuffer(s.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let kt=0;kt<I.length;kt++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(vt|=s.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(vt|=s.STENCIL_BUFFER_BIT)),Rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xt.__webglColorRenderbuffer[kt]);let ge=n.get(I[kt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ge,0)}s.blitFramebuffer(0,0,nt,mt,0,0,nt,mt,vt,s.NEAREST),u===!0&&(It.length=0,F.length=0,It.push(s.COLOR_ATTACHMENT0+kt),k.depthBuffer&&k.resolveDepthBuffer===!1&&(It.push(ft),F.push(ft),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,It))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Rt)for(let kt=0;kt<I.length;kt++){e.bindFramebuffer(s.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.RENDERBUFFER,Xt.__webglColorRenderbuffer[kt]);let ge=n.get(I[kt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.TEXTURE_2D,ge,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&u){let I=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[I])}}}function jt(k){return Math.min(r.maxSamples,k.samples)}function Ut(k){let I=n.get(k);return k.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Ft(k){let I=l.render.frame;m.get(k)!==I&&(m.set(k,I),k.update())}function we(k,I){let nt=k.colorSpace,mt=k.format,vt=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||nt!==Tr&&nt!==Qi&&(Te.getTransfer(nt)===De?(mt!==ii||vt!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),I}function $t(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(f.width=k.naturalWidth||k.width,f.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(f.width=k.displayWidth,f.height=k.displayHeight):(f.width=k.width,f.height=k.height),f}this.allocateTextureUnit=Z,this.resetTextureUnits=q,this.setTexture2D=it,this.setTexture2DArray=V,this.setTexture3D=pt,this.setTextureCube=G,this.rebindTextures=et,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=Ut}function Jy(s,t){function e(n,r=Qi){let a,l=Te.getTransfer(r);if(n===Hi)return s.UNSIGNED_BYTE;if(n===ru)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ou)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Jf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===$f)return s.BYTE;if(n===Kf)return s.SHORT;if(n===ao)return s.UNSIGNED_SHORT;if(n===su)return s.INT;if(n===ws)return s.UNSIGNED_INT;if(n===Ui)return s.FLOAT;if(n===_o)return s.HALF_FLOAT;if(n===jf)return s.ALPHA;if(n===Qf)return s.RGB;if(n===ii)return s.RGBA;if(n===tp)return s.LUMINANCE;if(n===ep)return s.LUMINANCE_ALPHA;if(n===fr)return s.DEPTH_COMPONENT;if(n===br)return s.DEPTH_STENCIL;if(n===np)return s.RED;if(n===au)return s.RED_INTEGER;if(n===ip)return s.RG;if(n===lu)return s.RG_INTEGER;if(n===cu)return s.RGBA_INTEGER;if(n===Pa||n===Ra||n===Ca||n===La)if(l===De)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Pa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ra)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===La)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Pa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ra)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ca)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===La)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eh||n===nh||n===ih||n===sh)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===eh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ih)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rh||n===oh||n===ah)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===rh||n===oh)return l===De?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===ah)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===lh||n===ch||n===hh||n===uh||n===dh||n===fh||n===ph||n===mh||n===gh||n===_h||n===vh||n===xh||n===yh||n===bh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===lh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ch)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ph)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_h)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bh)return l===De?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ia||n===Mh||n===Sh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===Ia)return l===De?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sp||n===wh||n===Th||n===Eh)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Ia)return a.COMPRESSED_RED_RGTC1_EXT;if(n===wh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Th)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Eh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Vh=class extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Bi=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},jy={type:"move"},oo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,a=null,l=null,h=this._targetRay,u=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){l=!0;for(let S of t.hand.values()){let x=e.getJointPose(S,n),v=this._getHandJoint(f,S);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}let m=f.joints["index-finger-tip"],d=f.joints["thumb-tip"],g=m.position.distanceTo(d.position),_=.02,y=.005;f.inputState.pinching&&g>_+y?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&g<=_-y&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1));h!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(jy)))}return h!==null&&(h.visible=r!==null),u!==null&&(u.visible=a!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Bi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Qy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tb=`
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

}`,Gh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let r=new Nn,a=t.properties.get(r);a.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xn({vertexShader:Qy,fragmentShader:tb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Be(new Es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wh=class extends Vi{constructor(t,e){super();let n=this,r=null,a=1,l=null,h="local-floor",u=1,f=null,m=null,d=null,g=null,_=null,y=null,S=new Gh,x=e.getContextAttributes(),v=null,P=null,w=[],T=[],U=new Yt,C=null,D=new yn;D.viewport=new Ne;let O=new yn;O.viewport=new Ne;let A=[D,O],E=new Vh,B=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Y=w[J];return Y===void 0&&(Y=new oo,w[J]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(J){let Y=w[J];return Y===void 0&&(Y=new oo,w[J]=Y),Y.getGripSpace()},this.getHand=function(J){let Y=w[J];return Y===void 0&&(Y=new oo,w[J]=Y),Y.getHandSpace()};function Z(J){let Y=T.indexOf(J.inputSource);if(Y===-1)return;let at=w[Y];at!==void 0&&(at.update(J.inputSource,J.frame,f||l),at.dispatchEvent({type:J.type,data:J.inputSource}))}function j(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",it);for(let J=0;J<w.length;J++){let Y=T[J];Y!==null&&(T[J]=null,w[J].disconnect(Y))}B=null,q=null,S.reset(),t.setRenderTarget(v),_=null,g=null,d=null,r=null,P=null,wt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(J){f=J},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(v=t.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",j),r.addEventListener("inputsourceschange",it),x.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(U),r.renderState.layers===void 0){let Y={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(r,e,Y),r.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),P=new Gi(_.framebufferWidth,_.framebufferHeight,{format:ii,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let Y=null,at=null,W=null;x.depth&&(W=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=x.stencil?br:fr,at=x.stencil?yr:ws);let yt={colorFormat:e.RGBA8,depthFormat:W,scaleFactor:a};d=new XRWebGLBinding(r,e),g=d.createProjectionLayer(yt),r.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),P=new Gi(g.textureWidth,g.textureHeight,{format:ii,type:Hi,depthTexture:new Za(g.textureWidth,g.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(u),f=null,l=await r.requestReferenceSpace(h),wt.setContext(r),wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function it(J){for(let Y=0;Y<J.removed.length;Y++){let at=J.removed[Y],W=T.indexOf(at);W>=0&&(T[W]=null,w[W].disconnect(at))}for(let Y=0;Y<J.added.length;Y++){let at=J.added[Y],W=T.indexOf(at);if(W===-1){for(let dt=0;dt<w.length;dt++)if(dt>=T.length){T.push(at),W=dt;break}else if(T[dt]===null){T[dt]=at,W=dt;break}if(W===-1)break}let yt=w[W];yt&&yt.connect(at)}}let V=new H,pt=new H;function G(J,Y,at){V.setFromMatrixPosition(Y.matrixWorld),pt.setFromMatrixPosition(at.matrixWorld);let W=V.distanceTo(pt),yt=Y.projectionMatrix.elements,dt=at.projectionMatrix.elements,et=yt[14]/(yt[10]-1),Tt=yt[14]/(yt[10]+1),xt=(yt[9]+1)/yt[5],It=(yt[9]-1)/yt[5],F=(yt[8]-1)/yt[0],ae=(dt[8]+1)/dt[0],jt=et*F,Ut=et*ae,Ft=W/(-F+ae),we=Ft*-F;if(Y.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(we),J.translateZ(Ft),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),yt[10]===-1)J.projectionMatrix.copy(Y.projectionMatrix),J.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let $t=et+Ft,k=Tt+Ft,I=jt-we,nt=Ut+(W-we),mt=xt*Tt/k*$t,vt=It*Tt/k*$t;J.projectionMatrix.makePerspective(I,nt,mt,vt,$t,k),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ut(J,Y){Y===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Y.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let Y=J.near,at=J.far;S.texture!==null&&(S.depthNear>0&&(Y=S.depthNear),S.depthFar>0&&(at=S.depthFar)),E.near=O.near=D.near=Y,E.far=O.far=D.far=at,(B!==E.near||q!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),B=E.near,q=E.far),D.layers.mask=J.layers.mask|2,O.layers.mask=J.layers.mask|4,E.layers.mask=D.layers.mask|O.layers.mask;let W=J.parent,yt=E.cameras;ut(E,W);for(let dt=0;dt<yt.length;dt++)ut(yt[dt],W);yt.length===2?G(E,D,O):E.projectionMatrix.copy(D.projectionMatrix),lt(J,E,W)};function lt(J,Y,at){at===null?J.matrix.copy(Y.matrixWorld):(J.matrix.copy(at.matrixWorld),J.matrix.invert(),J.matrix.multiply(Y.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Y.projectionMatrix),J.projectionMatrixInverse.copy(Y.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=lo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(g===null&&_===null))return u},this.setFoveation=function(J){u=J,g!==null&&(g.fixedFoveation=J),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(E)};let ct=null;function Mt(J,Y){if(m=Y.getViewerPose(f||l),y=Y,m!==null){let at=m.views;_!==null&&(t.setRenderTargetFramebuffer(P,_.framebuffer),t.setRenderTarget(P));let W=!1;at.length!==E.cameras.length&&(E.cameras.length=0,W=!0);for(let dt=0;dt<at.length;dt++){let et=at[dt],Tt=null;if(_!==null)Tt=_.getViewport(et);else{let It=d.getViewSubImage(g,et);Tt=It.viewport,dt===0&&(t.setRenderTargetTextures(P,It.colorTexture,g.ignoreDepthValues?void 0:It.depthStencilTexture),t.setRenderTarget(P))}let xt=A[dt];xt===void 0&&(xt=new yn,xt.layers.enable(dt),xt.viewport=new Ne,A[dt]=xt),xt.matrix.fromArray(et.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(et.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),dt===0&&(E.matrix.copy(xt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),W===!0&&E.cameras.push(xt)}let yt=r.enabledFeatures;if(yt&&yt.includes("depth-sensing")){let dt=d.getDepthInformation(at[0]);dt&&dt.isValid&&dt.texture&&S.init(t,dt,r.renderState)}}for(let at=0;at<w.length;at++){let W=T[at],yt=w[at];W!==null&&yt!==void 0&&yt.update(W,Y,f||l)}ct&&ct(J,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),y=null}let wt=new hp;wt.setAnimationLoop(Mt),this.setAnimationLoop=function(J){ct=J},this.dispose=function(){}}},vs=new vi,eb=new Fe;function nb(s,t){function e(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function n(x,v){v.color.getRGB(x.fogColor.value,cp(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function r(x,v,P,w,T){v.isMeshBasicMaterial||v.isMeshLambertMaterial?a(x,v):v.isMeshToonMaterial?(a(x,v),d(x,v)):v.isMeshPhongMaterial?(a(x,v),m(x,v)):v.isMeshStandardMaterial?(a(x,v),g(x,v),v.isMeshPhysicalMaterial&&_(x,v,T)):v.isMeshMatcapMaterial?(a(x,v),y(x,v)):v.isMeshDepthMaterial?a(x,v):v.isMeshDistanceMaterial?(a(x,v),S(x,v)):v.isMeshNormalMaterial?a(x,v):v.isLineBasicMaterial?(l(x,v),v.isLineDashedMaterial&&h(x,v)):v.isPointsMaterial?u(x,v,P,w):v.isSpriteMaterial?f(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function a(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,e(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,e(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,e(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===mn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,e(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===mn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,e(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,e(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,e(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);let P=t.get(v),w=P.envMap,T=P.envMapRotation;w&&(x.envMap.value=w,vs.copy(T),vs.x*=-1,vs.y*=-1,vs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),x.envMapRotation.value.setFromMatrix4(eb.makeRotationFromEuler(vs)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,e(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,e(v.aoMap,x.aoMapTransform))}function l(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,e(v.map,x.mapTransform))}function h(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function u(x,v,P,w){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*P,x.scale.value=w*.5,v.map&&(x.map.value=v.map,e(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,e(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function f(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,e(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,e(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function m(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function d(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function g(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,e(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,e(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function _(x,v,P){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,e(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,e(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,e(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,e(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,e(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===mn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,e(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,e(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,e(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,e(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,e(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,e(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,e(v.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,v){v.matcap&&(x.matcap.value=v.matcap)}function S(x,v){let P=t.get(v).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ib(s,t,e,n){let r={},a={},l=[],h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function u(P,w){let T=w.program;n.uniformBlockBinding(P,T)}function f(P,w){let T=r[P.id];T===void 0&&(y(P),T=m(P),r[P.id]=T,P.addEventListener("dispose",x));let U=w.program;n.updateUBOMapping(P,U);let C=t.render.frame;a[P.id]!==C&&(g(P),a[P.id]=C)}function m(P){let w=d();P.__bindingPointIndex=w;let T=s.createBuffer(),U=P.__size,C=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,U,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,T),T}function d(){for(let P=0;P<h;P++)if(l.indexOf(P)===-1)return l.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(P){let w=r[P.id],T=P.uniforms,U=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let C=0,D=T.length;C<D;C++){let O=Array.isArray(T[C])?T[C]:[T[C]];for(let A=0,E=O.length;A<E;A++){let B=O[A];if(_(B,C,A,U)===!0){let q=B.__offset,Z=Array.isArray(B.value)?B.value:[B.value],j=0;for(let it=0;it<Z.length;it++){let V=Z[it],pt=S(V);typeof V=="number"||typeof V=="boolean"?(B.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,q+j,B.__data)):V.isMatrix3?(B.__data[0]=V.elements[0],B.__data[1]=V.elements[1],B.__data[2]=V.elements[2],B.__data[3]=0,B.__data[4]=V.elements[3],B.__data[5]=V.elements[4],B.__data[6]=V.elements[5],B.__data[7]=0,B.__data[8]=V.elements[6],B.__data[9]=V.elements[7],B.__data[10]=V.elements[8],B.__data[11]=0):(V.toArray(B.__data,j),j+=pt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(P,w,T,U){let C=P.value,D=w+"_"+T;if(U[D]===void 0)return typeof C=="number"||typeof C=="boolean"?U[D]=C:U[D]=C.clone(),!0;{let O=U[D];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return U[D]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function y(P){let w=P.uniforms,T=0,U=16;for(let D=0,O=w.length;D<O;D++){let A=Array.isArray(w[D])?w[D]:[w[D]];for(let E=0,B=A.length;E<B;E++){let q=A[E],Z=Array.isArray(q.value)?q.value:[q.value];for(let j=0,it=Z.length;j<it;j++){let V=Z[j],pt=S(V),G=T%U,ut=G%pt.boundary,lt=G+ut;T+=ut,lt!==0&&U-lt<pt.storage&&(T+=U-lt),q.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=T,T+=pt.storage}}}let C=T%U;return C>0&&(T+=U-C),P.__size=T,P.__cache={},this}function S(P){let w={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(w.boundary=4,w.storage=4):P.isVector2?(w.boundary=8,w.storage=8):P.isVector3||P.isColor?(w.boundary=16,w.storage=12):P.isVector4?(w.boundary=16,w.storage=16):P.isMatrix3?(w.boundary=48,w.storage=48):P.isMatrix4?(w.boundary=64,w.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),w}function x(P){let w=P.target;w.removeEventListener("dispose",x);let T=l.indexOf(w.__bindingPointIndex);l.splice(T,1),s.deleteBuffer(r[w.id]),delete r[w.id],delete a[w.id]}function v(){for(let P in r)s.deleteBuffer(r[P]);l=[],r={},a={}}return{bind:u,update:f,dispose:v}}var Xa=class{constructor(t={}){let{canvas:e=l_(),context:n=null,depth:r=!0,stencil:a=!1,alpha:l=!1,antialias:h=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:g=!1}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=l;let y=new Uint32Array(4),S=new Int32Array(4),x=null,v=null,P=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zn,this.toneMapping=es,this.toneMappingExposure=1;let T=this,U=!1,C=0,D=0,O=null,A=-1,E=null,B=new Ne,q=new Ne,Z=null,j=new pe(0),it=0,V=e.width,pt=e.height,G=1,ut=null,lt=null,ct=new Ne(0,0,V,pt),Mt=new Ne(0,0,V,pt),wt=!1,J=new co,Y=!1,at=!1,W=new Fe,yt=new Fe,dt=new H,et=new Ne,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xt=!1;function It(){return O===null?G:1}let F=n;function ae(N,$){return e.getContext(N,$)}try{let N={alpha:!0,depth:r,stencil:a,antialias:h,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),F===null){let $="webgl2";if(F=ae($,N),F===null)throw ae($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let jt,Ut,Ft,we,$t,k,I,nt,mt,vt,ft,Xt,Rt,kt,ge,bt,Bt,Jt,ee,Ot,me,re,Re,X;function Pt(){jt=new xx(F),jt.init(),re=new Jy(F,jt),Ut=new fx(F,jt,t,re),Ft=new Yy(F,jt),Ut.reverseDepthBuffer&&g&&Ft.buffers.depth.setReversed(!0),we=new Mx(F),$t=new Oy,k=new Ky(F,jt,Ft,$t,Ut,re,we),I=new mx(T),nt=new vx(T),mt=new R_(F),Re=new ux(F,mt),vt=new yx(F,mt,we,Re),ft=new wx(F,vt,mt,we),ee=new Sx(F,Ut,k),bt=new px($t),Xt=new Ny(T,I,nt,jt,Ut,Re,bt),Rt=new nb(T,$t),kt=new ky,ge=new Gy(jt),Jt=new hx(T,I,nt,Ft,ft,_,u),Bt=new Xy(T,ft,Ut),X=new ib(F,we,Ut,Ft),Ot=new dx(F,jt,we),me=new bx(F,jt,we),we.programs=Xt.programs,T.capabilities=Ut,T.extensions=jt,T.properties=$t,T.renderLists=kt,T.shadowMap=Bt,T.state=Ft,T.info=we}Pt();let ht=new Wh(T,F);this.xr=ht,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let N=jt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=jt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(N){N!==void 0&&(G=N,this.setSize(V,pt,!1))},this.getSize=function(N){return N.set(V,pt)},this.setSize=function(N,$,rt=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=N,pt=$,e.width=Math.floor(N*G),e.height=Math.floor($*G),rt===!0&&(e.style.width=N+"px",e.style.height=$+"px"),this.setViewport(0,0,N,$)},this.getDrawingBufferSize=function(N){return N.set(V*G,pt*G).floor()},this.setDrawingBufferSize=function(N,$,rt){V=N,pt=$,G=rt,e.width=Math.floor(N*rt),e.height=Math.floor($*rt),this.setViewport(0,0,N,$)},this.getCurrentViewport=function(N){return N.copy(B)},this.getViewport=function(N){return N.copy(ct)},this.setViewport=function(N,$,rt,st){N.isVector4?ct.set(N.x,N.y,N.z,N.w):ct.set(N,$,rt,st),Ft.viewport(B.copy(ct).multiplyScalar(G).round())},this.getScissor=function(N){return N.copy(Mt)},this.setScissor=function(N,$,rt,st){N.isVector4?Mt.set(N.x,N.y,N.z,N.w):Mt.set(N,$,rt,st),Ft.scissor(q.copy(Mt).multiplyScalar(G).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(N){Ft.setScissorTest(wt=N)},this.setOpaqueSort=function(N){ut=N},this.setTransparentSort=function(N){lt=N},this.getClearColor=function(N){return N.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor.apply(Jt,arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha.apply(Jt,arguments)},this.clear=function(N=!0,$=!0,rt=!0){let st=0;if(N){let K=!1;if(O!==null){let St=O.texture.format;K=St===cu||St===lu||St===au}if(K){let St=O.texture.type,Lt=St===Hi||St===ws||St===ao||St===yr||St===ru||St===ou,Gt=Jt.getClearColor(),Wt=Jt.getClearAlpha(),te=Gt.r,ne=Gt.g,Vt=Gt.b;Lt?(y[0]=te,y[1]=ne,y[2]=Vt,y[3]=Wt,F.clearBufferuiv(F.COLOR,0,y)):(S[0]=te,S[1]=ne,S[2]=Vt,S[3]=Wt,F.clearBufferiv(F.COLOR,0,S))}else st|=F.COLOR_BUFFER_BIT}$&&(st|=F.DEPTH_BUFFER_BIT),rt&&(st|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),kt.dispose(),ge.dispose(),$t.dispose(),I.dispose(),nt.dispose(),ft.dispose(),Re.dispose(),X.dispose(),Xt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",yo),ht.removeEventListener("sessionend",En),zt.stop()};function gt(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let N=we.autoReset,$=Bt.enabled,rt=Bt.autoUpdate,st=Bt.needsUpdate,K=Bt.type;Pt(),we.autoReset=N,Bt.enabled=$,Bt.autoUpdate=rt,Bt.needsUpdate=st,Bt.type=K}function Ct(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function se(N){let $=N.target;$.removeEventListener("dispose",se),ze($)}function ze(N){Xe(N),$t.remove(N)}function Xe(N){let $=$t.get(N).programs;$!==void 0&&($.forEach(function(rt){Xt.releaseProgram(rt)}),N.isShaderMaterial&&Xt.releaseShaderCache(N))}this.renderBufferDirect=function(N,$,rt,st,K,St){$===null&&($=Tt);let Lt=K.isMesh&&K.matrixWorld.determinant()<0,Gt=Ll(N,$,rt,st,K);Ft.setMaterial(st,Lt);let Wt=rt.index,te=1;if(st.wireframe===!0){if(Wt=vt.getWireframeAttribute(rt),Wt===void 0)return;te=2}let ne=rt.drawRange,Vt=rt.attributes.position,_e=ne.start*te,Ee=(ne.start+ne.count)*te;St!==null&&(_e=Math.max(_e,St.start*te),Ee=Math.min(Ee,(St.start+St.count)*te)),Wt!==null?(_e=Math.max(_e,0),Ee=Math.min(Ee,Wt.count)):Vt!=null&&(_e=Math.max(_e,0),Ee=Math.min(Ee,Vt.count));let qt=Ee-_e;if(qt<0||qt===1/0)return;Re.setup(K,st,Gt,rt,Wt);let ue,ve=Ot;if(Wt!==null&&(ue=mt.get(Wt),ve=me,ve.setIndex(ue)),K.isMesh)st.wireframe===!0?(Ft.setLineWidth(st.wireframeLinewidth*It()),ve.setMode(F.LINES)):ve.setMode(F.TRIANGLES);else if(K.isLine){let Ht=st.linewidth;Ht===void 0&&(Ht=1),Ft.setLineWidth(Ht*It()),K.isLineSegments?ve.setMode(F.LINES):K.isLineLoop?ve.setMode(F.LINE_LOOP):ve.setMode(F.LINE_STRIP)}else K.isPoints?ve.setMode(F.POINTS):K.isSprite&&ve.setMode(F.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ve.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))ve.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Ht=K._multiDrawStarts,hn=K._multiDrawCounts,be=K._multiDrawCount,Kt=Wt?mt.get(Wt).bytesPerElement:1,Ie=$t.get(st).currentProgram.getUniforms();for(let sn=0;sn<be;sn++)Ie.setValue(F,"_gl_DrawID",sn),ve.render(Ht[sn]/Kt,hn[sn])}else if(K.isInstancedMesh)ve.renderInstances(_e,qt,K.count);else if(rt.isInstancedBufferGeometry){let Ht=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,hn=Math.min(rt.instanceCount,Ht);ve.renderInstances(_e,qt,hn)}else ve.render(_e,qt)};function Ae(N,$,rt){N.transparent===!0&&N.side===Hn&&N.forceSinglePass===!1?(N.side=mn,N.needsUpdate=!0,as(N,$,rt),N.side=ns,N.needsUpdate=!0,as(N,$,rt),N.side=Hn):as(N,$,rt)}this.compile=function(N,$,rt=null){rt===null&&(rt=N),v=ge.get(rt),v.init($),w.push(v),rt.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),N!==rt&&N.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();let st=new Set;return N.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let St=K.material;if(St)if(Array.isArray(St))for(let Lt=0;Lt<St.length;Lt++){let Gt=St[Lt];Ae(Gt,rt,K),st.add(Gt)}else Ae(St,rt,K),st.add(St)}),w.pop(),v=null,st},this.compileAsync=function(N,$,rt=null){let st=this.compile(N,$,rt);return new Promise(K=>{function St(){if(st.forEach(function(Lt){$t.get(Lt).currentProgram.isReady()&&st.delete(Lt)}),st.size===0){K(N);return}setTimeout(St,10)}jt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Tn=null;function Yn(N){Tn&&Tn(N)}function yo(){zt.stop()}function En(){zt.start()}let zt=new hp;zt.setAnimationLoop(Yn),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(N){Tn=N,ht.setAnimationLoop(N),N===null?zt.stop():zt.start()},ht.addEventListener("sessionstart",yo),ht.addEventListener("sessionend",En),this.render=function(N,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera($),$=ht.getCamera()),N.isScene===!0&&N.onBeforeRender(T,N,$,O),v=ge.get(N,w.length),v.init($),w.push(v),yt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),J.setFromProjectionMatrix(yt),at=this.localClippingEnabled,Y=bt.init(this.clippingPlanes,at),x=kt.get(N,P.length),x.init(),P.push(x),ht.enabled===!0&&ht.isPresenting===!0){let St=T.xr.getDepthSensingMesh();St!==null&&ks(St,$,-1/0,T.sortObjects)}ks(N,$,0,T.sortObjects),x.finish(),T.sortObjects===!0&&x.sort(ut,lt),xt=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,xt&&Jt.addToRenderList(x,N),this.info.render.frame++,Y===!0&&bt.beginShadows();let rt=v.state.shadowsArray;Bt.render(rt,N,$),Y===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();let st=x.opaque,K=x.transmissive;if(v.setupLights(),$.isArrayCamera){let St=$.cameras;if(K.length>0)for(let Lt=0,Gt=St.length;Lt<Gt;Lt++){let Wt=St[Lt];Dr(st,K,N,Wt)}xt&&Jt.render(N);for(let Lt=0,Gt=St.length;Lt<Gt;Lt++){let Wt=St[Lt];Ir(x,N,Wt,Wt.viewport)}}else K.length>0&&Dr(st,K,N,$),xt&&Jt.render(N),Ir(x,N,$);O!==null&&(k.updateMultisampleRenderTarget(O),k.updateRenderTargetMipmap(O)),N.isScene===!0&&N.onAfterRender(T,N,$),Re.resetDefaultState(),A=-1,E=null,w.pop(),w.length>0?(v=w[w.length-1],Y===!0&&bt.setGlobalState(T.clippingPlanes,v.state.camera)):v=null,P.pop(),P.length>0?x=P[P.length-1]:x=null};function ks(N,$,rt,st){if(N.visible===!1)return;if(N.layers.test($.layers)){if(N.isGroup)rt=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update($);else if(N.isLight)v.pushLight(N),N.castShadow&&v.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||J.intersectsSprite(N)){st&&et.setFromMatrixPosition(N.matrixWorld).applyMatrix4(yt);let Lt=ft.update(N),Gt=N.material;Gt.visible&&x.push(N,Lt,Gt,rt,et.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||J.intersectsObject(N))){let Lt=ft.update(N),Gt=N.material;if(st&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),et.copy(N.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),et.copy(Lt.boundingSphere.center)),et.applyMatrix4(N.matrixWorld).applyMatrix4(yt)),Array.isArray(Gt)){let Wt=Lt.groups;for(let te=0,ne=Wt.length;te<ne;te++){let Vt=Wt[te],_e=Gt[Vt.materialIndex];_e&&_e.visible&&x.push(N,Lt,_e,rt,et.z,Vt)}}else Gt.visible&&x.push(N,Lt,Gt,rt,et.z,null)}}let St=N.children;for(let Lt=0,Gt=St.length;Lt<Gt;Lt++)ks(St[Lt],$,rt,st)}function Ir(N,$,rt,st){let K=N.opaque,St=N.transmissive,Lt=N.transparent;v.setupLightsView(rt),Y===!0&&bt.setGlobalState(T.clippingPlanes,rt),st&&Ft.viewport(B.copy(st)),K.length>0&&os(K,$,rt),St.length>0&&os(St,$,rt),Lt.length>0&&os(Lt,$,rt),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function Dr(N,$,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[st.id]===void 0&&(v.state.transmissionRenderTarget[st.id]=new Gi(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?_o:Hi,minFilter:Ss,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));let St=v.state.transmissionRenderTarget[st.id],Lt=st.viewport||B;St.setSize(Lt.z,Lt.w);let Gt=T.getRenderTarget();T.setRenderTarget(St),T.getClearColor(j),it=T.getClearAlpha(),it<1&&T.setClearColor(16777215,.5),T.clear(),xt&&Jt.render(rt);let Wt=T.toneMapping;T.toneMapping=es;let te=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),v.setupLightsView(st),Y===!0&&bt.setGlobalState(T.clippingPlanes,st),os(N,rt,st),k.updateMultisampleRenderTarget(St),k.updateRenderTargetMipmap(St),jt.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Vt=0,_e=$.length;Vt<_e;Vt++){let Ee=$[Vt],qt=Ee.object,ue=Ee.geometry,ve=Ee.material,Ht=Ee.group;if(ve.side===Hn&&qt.layers.test(st.layers)){let hn=ve.side;ve.side=mn,ve.needsUpdate=!0,Bs(qt,rt,st,ue,ve,Ht),ve.side=hn,ve.needsUpdate=!0,ne=!0}}ne===!0&&(k.updateMultisampleRenderTarget(St),k.updateRenderTargetMipmap(St))}T.setRenderTarget(Gt),T.setClearColor(j,it),te!==void 0&&(st.viewport=te),T.toneMapping=Wt}function os(N,$,rt){let st=$.isScene===!0?$.overrideMaterial:null;for(let K=0,St=N.length;K<St;K++){let Lt=N[K],Gt=Lt.object,Wt=Lt.geometry,te=st===null?Lt.material:st,ne=Lt.group;Gt.layers.test(rt.layers)&&Bs(Gt,$,rt,Wt,te,ne)}}function Bs(N,$,rt,st,K,St){N.onBeforeRender(T,$,rt,st,K,St),N.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),K.onBeforeRender(T,$,rt,st,N,St),K.transparent===!0&&K.side===Hn&&K.forceSinglePass===!1?(K.side=mn,K.needsUpdate=!0,T.renderBufferDirect(rt,$,st,K,N,St),K.side=ns,K.needsUpdate=!0,T.renderBufferDirect(rt,$,st,K,N,St),K.side=Hn):T.renderBufferDirect(rt,$,st,K,N,St),N.onAfterRender(T,$,rt,st,K,St)}function as(N,$,rt){$.isScene!==!0&&($=Tt);let st=$t.get(N),K=v.state.lights,St=v.state.shadowsArray,Lt=K.state.version,Gt=Xt.getParameters(N,K.state,St,$,rt),Wt=Xt.getProgramCacheKey(Gt),te=st.programs;st.environment=N.isMeshStandardMaterial?$.environment:null,st.fog=$.fog,st.envMap=(N.isMeshStandardMaterial?nt:I).get(N.envMap||st.environment),st.envMapRotation=st.environment!==null&&N.envMap===null?$.environmentRotation:N.envMapRotation,te===void 0&&(N.addEventListener("dispose",se),te=new Map,st.programs=te);let ne=te.get(Wt);if(ne!==void 0){if(st.currentProgram===ne&&st.lightsStateVersion===Lt)return Nr(N,Gt),ne}else Gt.uniforms=Xt.getUniforms(N),N.onBeforeCompile(Gt,T),ne=Xt.acquireProgram(Gt,Wt),te.set(Wt,ne),st.uniforms=Gt.uniforms;let Vt=st.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Vt.clippingPlanes=bt.uniform),Nr(N,Gt),st.needsLights=Dl(N),st.lightsStateVersion=Lt,st.needsLights&&(Vt.ambientLightColor.value=K.state.ambient,Vt.lightProbe.value=K.state.probe,Vt.directionalLights.value=K.state.directional,Vt.directionalLightShadows.value=K.state.directionalShadow,Vt.spotLights.value=K.state.spot,Vt.spotLightShadows.value=K.state.spotShadow,Vt.rectAreaLights.value=K.state.rectArea,Vt.ltc_1.value=K.state.rectAreaLTC1,Vt.ltc_2.value=K.state.rectAreaLTC2,Vt.pointLights.value=K.state.point,Vt.pointLightShadows.value=K.state.pointShadow,Vt.hemisphereLights.value=K.state.hemi,Vt.directionalShadowMap.value=K.state.directionalShadowMap,Vt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Vt.spotShadowMap.value=K.state.spotShadowMap,Vt.spotLightMatrix.value=K.state.spotLightMatrix,Vt.spotLightMap.value=K.state.spotLightMap,Vt.pointShadowMap.value=K.state.pointShadowMap,Vt.pointShadowMatrix.value=K.state.pointShadowMatrix),st.currentProgram=ne,st.uniformsList=null,ne}function Si(N){if(N.uniformsList===null){let $=N.currentProgram.getUniforms();N.uniformsList=gr.seqWithValue($.seq,N.uniforms)}return N.uniformsList}function Nr(N,$){let rt=$t.get(N);rt.outputColorSpace=$.outputColorSpace,rt.batching=$.batching,rt.batchingColor=$.batchingColor,rt.instancing=$.instancing,rt.instancingColor=$.instancingColor,rt.instancingMorph=$.instancingMorph,rt.skinning=$.skinning,rt.morphTargets=$.morphTargets,rt.morphNormals=$.morphNormals,rt.morphColors=$.morphColors,rt.morphTargetsCount=$.morphTargetsCount,rt.numClippingPlanes=$.numClippingPlanes,rt.numIntersection=$.numClipIntersection,rt.vertexAlphas=$.vertexAlphas,rt.vertexTangents=$.vertexTangents,rt.toneMapping=$.toneMapping}function Ll(N,$,rt,st,K){$.isScene!==!0&&($=Tt),k.resetTextureUnits();let St=$.fog,Lt=st.isMeshStandardMaterial?$.environment:null,Gt=O===null?T.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Tr,Wt=(st.isMeshStandardMaterial?nt:I).get(st.envMap||Lt),te=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ne=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Vt=!!rt.morphAttributes.position,_e=!!rt.morphAttributes.normal,Ee=!!rt.morphAttributes.color,qt=es;st.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(qt=T.toneMapping);let ue=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ve=ue!==void 0?ue.length:0,Ht=$t.get(st),hn=v.state.lights;if(Y===!0&&(at===!0||N!==E)){let qe=N===E&&st.id===A;bt.setState(st,N,qe)}let be=!1;st.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==hn.state.version||Ht.outputColorSpace!==Gt||K.isBatchedMesh&&Ht.batching===!1||!K.isBatchedMesh&&Ht.batching===!0||K.isBatchedMesh&&Ht.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ht.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ht.instancing===!1||!K.isInstancedMesh&&Ht.instancing===!0||K.isSkinnedMesh&&Ht.skinning===!1||!K.isSkinnedMesh&&Ht.skinning===!0||K.isInstancedMesh&&Ht.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ht.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ht.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ht.instancingMorph===!1&&K.morphTexture!==null||Ht.envMap!==Wt||st.fog===!0&&Ht.fog!==St||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==bt.numPlanes||Ht.numIntersection!==bt.numIntersection)||Ht.vertexAlphas!==te||Ht.vertexTangents!==ne||Ht.morphTargets!==Vt||Ht.morphNormals!==_e||Ht.morphColors!==Ee||Ht.toneMapping!==qt||Ht.morphTargetsCount!==ve)&&(be=!0):(be=!0,Ht.__version=st.version);let Kt=Ht.currentProgram;be===!0&&(Kt=as(st,$,K));let Ie=!1,sn=!1,di=!1,de=Kt.getUniforms(),On=Ht.uniforms;if(Ft.useProgram(Kt.program)&&(Ie=!0,sn=!0,di=!0),st.id!==A&&(A=st.id,sn=!0),Ie||E!==N){Ft.buffers.depth.getReversed()?(W.copy(N.projectionMatrix),h_(W),u_(W),de.setValue(F,"projectionMatrix",W)):de.setValue(F,"projectionMatrix",N.projectionMatrix),de.setValue(F,"viewMatrix",N.matrixWorldInverse);let Ce=de.map.cameraPosition;Ce!==void 0&&Ce.setValue(F,dt.setFromMatrixPosition(N.matrixWorld)),Ut.logarithmicDepthBuffer&&de.setValue(F,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&de.setValue(F,"isOrthographic",N.isOrthographicCamera===!0),E!==N&&(E=N,sn=!0,di=!0)}if(K.isSkinnedMesh){de.setOptional(F,K,"bindMatrix"),de.setOptional(F,K,"bindMatrixInverse");let qe=K.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),de.setValue(F,"boneTexture",qe.boneTexture,k))}K.isBatchedMesh&&(de.setOptional(F,K,"batchingTexture"),de.setValue(F,"batchingTexture",K._matricesTexture,k),de.setOptional(F,K,"batchingIdTexture"),de.setValue(F,"batchingIdTexture",K._indirectTexture,k),de.setOptional(F,K,"batchingColorTexture"),K._colorsTexture!==null&&de.setValue(F,"batchingColorTexture",K._colorsTexture,k));let fi=rt.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&ee.update(K,rt,Kt),(sn||Ht.receiveShadow!==K.receiveShadow)&&(Ht.receiveShadow=K.receiveShadow,de.setValue(F,"receiveShadow",K.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(On.envMap.value=Wt,On.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&$.environment!==null&&(On.envMapIntensity.value=$.environmentIntensity),sn&&(de.setValue(F,"toneMappingExposure",T.toneMappingExposure),Ht.needsLights&&Il(On,di),St&&st.fog===!0&&Rt.refreshFogUniforms(On,St),Rt.refreshMaterialUniforms(On,st,G,pt,v.state.transmissionRenderTarget[N.id]),gr.upload(F,Si(Ht),On,k)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(gr.upload(F,Si(Ht),On,k),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&de.setValue(F,"center",K.center),de.setValue(F,"modelViewMatrix",K.modelViewMatrix),de.setValue(F,"normalMatrix",K.normalMatrix),de.setValue(F,"modelMatrix",K.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){let qe=st.uniformsGroups;for(let Ce=0,un=qe.length;Ce<un;Ce++){let Wi=qe[Ce];X.update(Wi,Kt),X.bind(Wi,Kt)}}return Kt}function Il(N,$){N.ambientLightColor.needsUpdate=$,N.lightProbe.needsUpdate=$,N.directionalLights.needsUpdate=$,N.directionalLightShadows.needsUpdate=$,N.pointLights.needsUpdate=$,N.pointLightShadows.needsUpdate=$,N.spotLights.needsUpdate=$,N.spotLightShadows.needsUpdate=$,N.rectAreaLights.needsUpdate=$,N.hemisphereLights.needsUpdate=$}function Dl(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(N,$,rt){$t.get(N.texture).__webglTexture=$,$t.get(N.depthTexture).__webglTexture=rt;let st=$t.get(N);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=rt===void 0,st.__autoAllocateDepthBuffer||jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,$){let rt=$t.get(N);rt.__webglFramebuffer=$,rt.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(N,$=0,rt=0){O=N,C=$,D=rt;let st=!0,K=null,St=!1,Lt=!1;if(N){let Wt=$t.get(N);if(Wt.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(F.FRAMEBUFFER,null),st=!1;else if(Wt.__webglFramebuffer===void 0)k.setupRenderTarget(N);else if(Wt.__hasExternalTextures)k.rebindTextures(N,$t.get(N.texture).__webglTexture,$t.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let Vt=N.depthTexture;if(Wt.__boundDepthTexture!==Vt){if(Vt!==null&&$t.has(Vt)&&(N.width!==Vt.image.width||N.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(N)}}let te=N.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Lt=!0);let ne=$t.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(ne[$])?K=ne[$][rt]:K=ne[$],St=!0):N.samples>0&&k.useMultisampledRTT(N)===!1?K=$t.get(N).__webglMultisampledFramebuffer:Array.isArray(ne)?K=ne[rt]:K=ne,B.copy(N.viewport),q.copy(N.scissor),Z=N.scissorTest}else B.copy(ct).multiplyScalar(G).floor(),q.copy(Mt).multiplyScalar(G).floor(),Z=wt;if(Ft.bindFramebuffer(F.FRAMEBUFFER,K)&&st&&Ft.drawBuffers(N,K),Ft.viewport(B),Ft.scissor(q),Ft.setScissorTest(Z),St){let Wt=$t.get(N.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+$,Wt.__webglTexture,rt)}else if(Lt){let Wt=$t.get(N.texture),te=$||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Wt.__webglTexture,rt||0,te)}A=-1},this.readRenderTargetPixels=function(N,$,rt,st,K,St,Lt){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=$t.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Lt!==void 0&&(Gt=Gt[Lt]),Gt){Ft.bindFramebuffer(F.FRAMEBUFFER,Gt);try{let Wt=N.texture,te=Wt.format,ne=Wt.type;if(!Ut.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=N.width-st&&rt>=0&&rt<=N.height-K&&F.readPixels($,rt,st,K,re.convert(te),re.convert(ne),St)}finally{let Wt=O!==null?$t.get(O).__webglFramebuffer:null;Ft.bindFramebuffer(F.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(N,$,rt,st,K,St,Lt){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=$t.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Lt!==void 0&&(Gt=Gt[Lt]),Gt){let Wt=N.texture,te=Wt.format,ne=Wt.type;if(!Ut.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=N.width-st&&rt>=0&&rt<=N.height-K){Ft.bindFramebuffer(F.FRAMEBUFFER,Gt);let Vt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Vt),F.bufferData(F.PIXEL_PACK_BUFFER,St.byteLength,F.STREAM_READ),F.readPixels($,rt,st,K,re.convert(te),re.convert(ne),0);let _e=O!==null?$t.get(O).__webglFramebuffer:null;Ft.bindFramebuffer(F.FRAMEBUFFER,_e);let Ee=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await c_(F,Ee,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Vt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,St),F.deleteBuffer(Vt),F.deleteSync(Ee),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,$=null,rt=0){N.isTexture!==!0&&(io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,N=arguments[1]);let st=Math.pow(2,-rt),K=Math.floor(N.image.width*st),St=Math.floor(N.image.height*st),Lt=$!==null?$.x:0,Gt=$!==null?$.y:0;k.setTexture2D(N,0),F.copyTexSubImage2D(F.TEXTURE_2D,rt,0,0,Lt,Gt,K,St),Ft.unbindTexture()},this.copyTextureToTexture=function(N,$,rt=null,st=null,K=0){N.isTexture!==!0&&(io("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,N=arguments[1],$=arguments[2],K=arguments[3]||0,rt=null);let St,Lt,Gt,Wt,te,ne,Vt,_e,Ee,qt=N.isCompressedTexture?N.mipmaps[K]:N.image;rt!==null?(St=rt.max.x-rt.min.x,Lt=rt.max.y-rt.min.y,Gt=rt.isBox3?rt.max.z-rt.min.z:1,Wt=rt.min.x,te=rt.min.y,ne=rt.isBox3?rt.min.z:0):(St=qt.width,Lt=qt.height,Gt=qt.depth||1,Wt=0,te=0,ne=0),st!==null?(Vt=st.x,_e=st.y,Ee=st.z):(Vt=0,_e=0,Ee=0);let ue=re.convert($.format),ve=re.convert($.type),Ht;$.isData3DTexture?(k.setTexture3D($,0),Ht=F.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(k.setTexture2DArray($,0),Ht=F.TEXTURE_2D_ARRAY):(k.setTexture2D($,0),Ht=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,$.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,$.unpackAlignment);let hn=F.getParameter(F.UNPACK_ROW_LENGTH),be=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Kt=F.getParameter(F.UNPACK_SKIP_PIXELS),Ie=F.getParameter(F.UNPACK_SKIP_ROWS),sn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,qt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,qt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Wt),F.pixelStorei(F.UNPACK_SKIP_ROWS,te),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ne);let di=N.isDataArrayTexture||N.isData3DTexture,de=$.isDataArrayTexture||$.isData3DTexture;if(N.isRenderTargetTexture||N.isDepthTexture){let On=$t.get(N),fi=$t.get($),qe=$t.get(On.__renderTarget),Ce=$t.get(fi.__renderTarget);Ft.bindFramebuffer(F.READ_FRAMEBUFFER,qe.__webglFramebuffer),Ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let un=0;un<Gt;un++)di&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$t.get(N).__webglTexture,K,ne+un),N.isDepthTexture?(de&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$t.get($).__webglTexture,K,Ee+un),F.blitFramebuffer(Wt,te,St,Lt,Vt,_e,St,Lt,F.DEPTH_BUFFER_BIT,F.NEAREST)):de?F.copyTexSubImage3D(Ht,K,Vt,_e,Ee+un,Wt,te,St,Lt):F.copyTexSubImage2D(Ht,K,Vt,_e,Ee+un,Wt,te,St,Lt);Ft.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else de?N.isDataTexture||N.isData3DTexture?F.texSubImage3D(Ht,K,Vt,_e,Ee,St,Lt,Gt,ue,ve,qt.data):$.isCompressedArrayTexture?F.compressedTexSubImage3D(Ht,K,Vt,_e,Ee,St,Lt,Gt,ue,qt.data):F.texSubImage3D(Ht,K,Vt,_e,Ee,St,Lt,Gt,ue,ve,qt):N.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,K,Vt,_e,St,Lt,ue,ve,qt.data):N.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,K,Vt,_e,qt.width,qt.height,ue,qt.data):F.texSubImage2D(F.TEXTURE_2D,K,Vt,_e,St,Lt,ue,ve,qt);F.pixelStorei(F.UNPACK_ROW_LENGTH,hn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,be),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Kt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ie),F.pixelStorei(F.UNPACK_SKIP_IMAGES,sn),K===0&&$.generateMipmaps&&F.generateMipmap(Ht),Ft.unbindTexture()},this.copyTextureToTexture3D=function(N,$,rt=null,st=null,K=0){return N.isTexture!==!0&&(io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),rt=arguments[0]||null,st=arguments[1]||null,N=arguments[2],$=arguments[3],K=arguments[4]||0),io('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,$,rt,st,K)},this.initRenderTarget=function(N){$t.get(N).__webglFramebuffer===void 0&&k.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?k.setTextureCube(N,0):N.isData3DTexture?k.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?k.setTexture2DArray(N,0):k.setTexture2D(N,0),Ft.unbindTexture()},this.resetState=function(){C=0,D=0,O=null,Ft.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}};var qa=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ya=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ph,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,a=this.stride;r<a;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vn=new H,qn=class s{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyMatrix4(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyNormalMatrix(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.transformDirection(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ni(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ni(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ni(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ni(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),r=Le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),r=Le(r,this.array),a=Le(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[r+a])}return new Dn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ho=class extends xi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ar,Qr=new H,lr=new H,cr=new H,hr=new Yt,to=new Yt,mp=new Fe,ma=new H,eo=new H,ga=new H,Df=new Yt,kc=new Yt,Nf=new Yt,$a=class extends nn{constructor(t=new ho){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new Ge;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ya(e,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new qn(n,3,0,!1)),ar.setAttribute("uv",new qn(n,2,3,!1))}this.geometry=ar,this.material=t,this.center=new Yt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),lr.setFromMatrixScale(this.matrixWorld),mp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),cr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&lr.multiplyScalar(-cr.z);let n=this.material.rotation,r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));let l=this.center;_a(ma.set(-.5,-.5,0),cr,l,lr,r,a),_a(eo.set(.5,-.5,0),cr,l,lr,r,a),_a(ga.set(.5,.5,0),cr,l,lr,r,a),Df.set(0,0),kc.set(1,0),Nf.set(1,1);let h=t.ray.intersectTriangle(ma,eo,ga,!1,Qr);if(h===null&&(_a(eo.set(-.5,.5,0),cr,l,lr,r,a),kc.set(0,1),h=t.ray.intersectTriangle(ma,ga,eo,!1,Qr),h===null))return;let u=t.ray.origin.distanceTo(Qr);u<t.near||u>t.far||e.push({distance:u,point:Qr.clone(),uv:Oi.getInterpolation(Qr,ma,eo,ga,Df,kc,Nf,new Yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function _a(s,t,e,n,r,a){hr.subVectors(s,e).addScalar(.5).multiply(n),r!==void 0?(to.x=a*hr.x-r*hr.y,to.y=r*hr.x+a*hr.y):to.copy(hr),s.copy(t),s.x+=to.x,s.y+=to.y,s.applyMatrix4(mp)}var ai=class extends xi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ka=new H,Ja=new H,Of=new Fe,no=new Ts,va=new oi,Bc=new H,Uf=new H,Sr=class extends nn{constructor(t=new Ge,e=new ai){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,a=e.count;r<a;r++)Ka.fromBufferAttribute(e,r-1),Ja.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ka.distanceTo(Ja);t.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,a=t.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),va.radius+=a,t.ray.intersectsSphere(va)===!1)return;Of.copy(r).invert(),no.copy(t.ray).applyMatrix4(Of);let h=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=h*h,f=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){let _=Math.max(0,l.start),y=Math.min(m.count,l.start+l.count);for(let S=_,x=y-1;S<x;S+=f){let v=m.getX(S),P=m.getX(S+1),w=xa(this,t,no,u,v,P);w&&e.push(w)}if(this.isLineLoop){let S=m.getX(y-1),x=m.getX(_),v=xa(this,t,no,u,S,x);v&&e.push(v)}}else{let _=Math.max(0,l.start),y=Math.min(g.count,l.start+l.count);for(let S=_,x=y-1;S<x;S+=f){let v=xa(this,t,no,u,S,S+1);v&&e.push(v)}if(this.isLineLoop){let S=xa(this,t,no,u,y-1,_);S&&e.push(S)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){let h=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}};function xa(s,t,e,n,r,a){let l=s.geometry.attributes.position;if(Ka.fromBufferAttribute(l,r),Ja.fromBufferAttribute(l,a),e.distanceSqToSegment(Ka,Ja,Bc,Uf)>n)return;Bc.applyMatrix4(s.matrixWorld);let u=t.ray.origin.distanceTo(Bc);if(!(u<t.near||u>t.far))return{distance:u,point:Uf.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}var kf=new H,Bf=new H,is=class extends Sr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,a=e.count;r<a;r+=2)kf.fromBufferAttribute(e,r),Bf.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+kf.distanceTo(Bf);t.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var uo=class extends xi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ff=new Fe,Zh=new Ts,ya=new oi,ba=new H,ja=class extends nn{constructor(t=new Ge,e=new uo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,a=t.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(r),ya.radius+=a,t.ray.intersectsSphere(ya)===!1)return;Ff.copy(r).invert(),Zh.copy(t.ray).applyMatrix4(Ff);let h=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=h*h,f=n.index,d=n.attributes.position;if(f!==null){let g=Math.max(0,l.start),_=Math.min(f.count,l.start+l.count);for(let y=g,S=_;y<S;y++){let x=f.getX(y);ba.fromBufferAttribute(d,x),zf(ba,x,u,r,t,e,this)}}else{let g=Math.max(0,l.start),_=Math.min(d.count,l.start+l.count);for(let y=g,S=_;y<S;y++)ba.fromBufferAttribute(d,y),zf(ba,y,u,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){let h=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}};function zf(s,t,e,n,r,a,l){let h=Zh.distanceSqToPoint(s);if(h<e){let u=new H;Zh.closestPointToPoint(s,u),u.applyMatrix4(n);let f=r.ray.origin.distanceTo(u);if(f<r.near||f>r.far)return;a.push({distance:f,distanceToRay:Math.sqrt(h),point:u,index:t,face:null,faceIndex:null,barycoord:null,object:l})}}var Qa=class extends Nn{constructor(t,e,n,r,a,l,h,u,f){super(t,e,n,r,a,l,h,u,f),this.isCanvasTexture=!0,this.needsUpdate=!0}};var tl=class s extends Ge{constructor(t=[new Yt(0,-.5),new Yt(.5,0),new Yt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=en(r,0,Math.PI*2);let a=[],l=[],h=[],u=[],f=[],m=1/e,d=new H,g=new Yt,_=new H,y=new H,S=new H,x=0,v=0;for(let P=0;P<=t.length-1;P++)switch(P){case 0:x=t[P+1].x-t[P].x,v=t[P+1].y-t[P].y,_.x=v*1,_.y=-x,_.z=v*0,S.copy(_),_.normalize(),u.push(_.x,_.y,_.z);break;case t.length-1:u.push(S.x,S.y,S.z);break;default:x=t[P+1].x-t[P].x,v=t[P+1].y-t[P].y,_.x=v*1,_.y=-x,_.z=v*0,y.copy(_),_.x+=S.x,_.y+=S.y,_.z+=S.z,_.normalize(),u.push(_.x,_.y,_.z),S.copy(y)}for(let P=0;P<=e;P++){let w=n+P*m*r,T=Math.sin(w),U=Math.cos(w);for(let C=0;C<=t.length-1;C++){d.x=t[C].x*T,d.y=t[C].y,d.z=t[C].x*U,l.push(d.x,d.y,d.z),g.x=P/e,g.y=C/(t.length-1),h.push(g.x,g.y);let D=u[3*C+0]*T,O=u[3*C+1],A=u[3*C+0]*U;f.push(D,O,A)}}for(let P=0;P<e;P++)for(let w=0;w<t.length-1;w++){let T=w+P*t.length,U=T,C=T+t.length,D=T+t.length+1,O=T+1;a.push(U,C,O),a.push(D,O,C)}this.setIndex(a),this.setAttribute("position",new ye(l,3)),this.setAttribute("uv",new ye(h,2)),this.setAttribute("normal",new ye(f,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var el=class s extends Ge{constructor(t=1,e=1,n=1,r=32,a=1,l=!1,h=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:h,thetaLength:u};let f=this;r=Math.floor(r),a=Math.floor(a);let m=[],d=[],g=[],_=[],y=0,S=[],x=n/2,v=0;P(),l===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(m),this.setAttribute("position",new ye(d,3)),this.setAttribute("normal",new ye(g,3)),this.setAttribute("uv",new ye(_,2));function P(){let T=new H,U=new H,C=0,D=(e-t)/n;for(let O=0;O<=a;O++){let A=[],E=O/a,B=E*(e-t)+t;for(let q=0;q<=r;q++){let Z=q/r,j=Z*u+h,it=Math.sin(j),V=Math.cos(j);U.x=B*it,U.y=-E*n+x,U.z=B*V,d.push(U.x,U.y,U.z),T.set(it,D,V).normalize(),g.push(T.x,T.y,T.z),_.push(Z,1-E),A.push(y++)}S.push(A)}for(let O=0;O<r;O++)for(let A=0;A<a;A++){let E=S[A][O],B=S[A+1][O],q=S[A+1][O+1],Z=S[A][O+1];(t>0||A!==0)&&(m.push(E,B,Z),C+=3),(e>0||A!==a-1)&&(m.push(B,q,Z),C+=3)}f.addGroup(v,C,0),v+=C}function w(T){let U=y,C=new Yt,D=new H,O=0,A=T===!0?t:e,E=T===!0?1:-1;for(let q=1;q<=r;q++)d.push(0,x*E,0),g.push(0,E,0),_.push(.5,.5),y++;let B=y;for(let q=0;q<=r;q++){let j=q/r*u+h,it=Math.cos(j),V=Math.sin(j);D.x=A*V,D.y=x*E,D.z=A*it,d.push(D.x,D.y,D.z),g.push(0,E,0),C.x=it*.5+.5,C.y=V*.5*E+.5,_.push(C.x,C.y),y++}for(let q=0;q<r;q++){let Z=U+q,j=B+q;T===!0?m.push(j,j+1,Z):m.push(j+1,j,Z),O+=3}f.addGroup(v,O,T===!0?1:2),v+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},nl=class s extends el{constructor(t=1,e=1,n=32,r=1,a=!1,l=0,h=Math.PI*2){super(0,t,e,n,r,a,l,h),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:h}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ma=new H,Sa=new H,Fc=new H,wa=new Oi,fo=class extends Ge{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let r=Math.pow(10,4),a=Math.cos(pr*e),l=t.getIndex(),h=t.getAttribute("position"),u=l?l.count:h.count,f=[0,0,0],m=["a","b","c"],d=new Array(3),g={},_=[];for(let y=0;y<u;y+=3){l?(f[0]=l.getX(y),f[1]=l.getX(y+1),f[2]=l.getX(y+2)):(f[0]=y,f[1]=y+1,f[2]=y+2);let{a:S,b:x,c:v}=wa;if(S.fromBufferAttribute(h,f[0]),x.fromBufferAttribute(h,f[1]),v.fromBufferAttribute(h,f[2]),wa.getNormal(Fc),d[0]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,d[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,d[2]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let P=0;P<3;P++){let w=(P+1)%3,T=d[P],U=d[w],C=wa[m[P]],D=wa[m[w]],O=`${T}_${U}`,A=`${U}_${T}`;A in g&&g[A]?(Fc.dot(g[A].normal)<=a&&(_.push(C.x,C.y,C.z),_.push(D.x,D.y,D.z)),g[A]=null):O in g||(g[O]={index0:f[P],index1:f[w],normal:Fc.clone()})}}for(let y in g)if(g[y]){let{index0:S,index1:x}=g[y];Ma.fromBufferAttribute(h,S),Sa.fromBufferAttribute(h,x),_.push(Ma.x,Ma.y,Ma.z),_.push(Sa.x,Sa.y,Sa.z)}this.setAttribute("position",new ye(_,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var po=class s extends Ge{constructor(t=1,e=32,n=16,r=0,a=Math.PI*2,l=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:a,thetaStart:l,thetaLength:h},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let u=Math.min(l+h,Math.PI),f=0,m=[],d=new H,g=new H,_=[],y=[],S=[],x=[];for(let v=0;v<=n;v++){let P=[],w=v/n,T=0;v===0&&l===0?T=.5/e:v===n&&u===Math.PI&&(T=-.5/e);for(let U=0;U<=e;U++){let C=U/e;d.x=-t*Math.cos(r+C*a)*Math.sin(l+w*h),d.y=t*Math.cos(l+w*h),d.z=t*Math.sin(r+C*a)*Math.sin(l+w*h),y.push(d.x,d.y,d.z),g.copy(d).normalize(),S.push(g.x,g.y,g.z),x.push(C+T,1-w),P.push(f++)}m.push(P)}for(let v=0;v<n;v++)for(let P=0;P<e;P++){let w=m[v][P+1],T=m[v][P],U=m[v+1][P],C=m[v+1][P+1];(v!==0||l>0)&&_.push(w,T,C),(v!==n-1||u<Math.PI)&&_.push(T,U,C)}this.setIndex(_),this.setAttribute("position",new ye(y,3)),this.setAttribute("normal",new ye(S,3)),this.setAttribute("uv",new ye(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var il=class s extends Ge{constructor(t=1,e=.4,n=12,r=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:a},n=Math.floor(n),r=Math.floor(r);let l=[],h=[],u=[],f=[],m=new H,d=new H,g=new H;for(let _=0;_<=n;_++)for(let y=0;y<=r;y++){let S=y/r*a,x=_/n*Math.PI*2;d.x=(t+e*Math.cos(x))*Math.cos(S),d.y=(t+e*Math.cos(x))*Math.sin(S),d.z=e*Math.sin(x),h.push(d.x,d.y,d.z),m.x=t*Math.cos(S),m.y=t*Math.sin(S),g.subVectors(d,m).normalize(),u.push(g.x,g.y,g.z),f.push(y/r),f.push(_/n)}for(let _=1;_<=n;_++)for(let y=1;y<=r;y++){let S=(r+1)*_+y-1,x=(r+1)*(_-1)+y-1,v=(r+1)*(_-1)+y,P=(r+1)*_+y;l.push(S,x,P),l.push(x,v,P)}this.setIndex(l),this.setAttribute("position",new ye(h,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var sl=class extends Ge{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,r=new H,a=new H;if(t.index!==null){let l=t.attributes.position,h=t.index,u=t.groups;u.length===0&&(u=[{start:0,count:h.count,materialIndex:0}]);for(let f=0,m=u.length;f<m;++f){let d=u[f],g=d.start,_=d.count;for(let y=g,S=g+_;y<S;y+=3)for(let x=0;x<3;x++){let v=h.getX(y+x),P=h.getX(y+(x+1)%3);r.fromBufferAttribute(l,v),a.fromBufferAttribute(l,P),Hf(r,a,n)===!0&&(e.push(r.x,r.y,r.z),e.push(a.x,a.y,a.z))}}}else{let l=t.attributes.position;for(let h=0,u=l.count/3;h<u;h++)for(let f=0;f<3;f++){let m=3*h+f,d=3*h+(f+1)%3;r.fromBufferAttribute(l,m),a.fromBufferAttribute(l,d),Hf(r,a,n)===!0&&(e.push(r.x,r.y,r.z),e.push(a.x,a.y,a.z))}}this.setAttribute("position",new ye(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Hf(s,t,e){let n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(r)===!0?!1:(e.add(n),e.add(r),!0)}var mo=class extends xi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rp,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ta(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function sb(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var wr=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],a=e[n-1];n:{t:{let l;e:{i:if(!(t<r)){for(let h=n+2;;){if(r===void 0){if(t<a)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===h)break;if(a=r,r=e[++n],t<r)break t}l=e.length;break e}if(!(t>=a)){let h=e[1];t<h&&(n=2,a=h);for(let u=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(r=a,a=e[--n-1],t>=a)break t}l=n,n=0;break e}break n}for(;n<l;){let h=n+l>>>1;t<e[h]?l=h:n=h+1}if(r=e[n],a=e[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,r)}return this.interpolate_(n,a,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,a=t*r;for(let l=0;l!==r;++l)e[l]=n[a+l];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xh=class extends wr{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ud,endingEnd:Ud}}intervalChanged_(t,e,n){let r=this.parameterPositions,a=t-2,l=t+1,h=r[a],u=r[l];if(h===void 0)switch(this.getSettings_().endingStart){case kd:a=t,h=2*e-n;break;case Bd:a=r.length-2,h=e+r[a]-r[a+1];break;default:a=t,h=n}if(u===void 0)switch(this.getSettings_().endingEnd){case kd:l=t,u=2*n-e;break;case Bd:l=1,u=n+r[1]-r[0];break;default:l=t-1,u=e}let f=(n-e)*.5,m=this.valueSize;this._weightPrev=f/(e-h),this._weightNext=f/(u-n),this._offsetPrev=a*m,this._offsetNext=l*m}interpolate_(t,e,n,r){let a=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=t*h,f=u-h,m=this._offsetPrev,d=this._offsetNext,g=this._weightPrev,_=this._weightNext,y=(n-e)/(r-e),S=y*y,x=S*y,v=-g*x+2*g*S-g*y,P=(1+g)*x+(-1.5-2*g)*S+(-.5+g)*y+1,w=(-1-_)*x+(1.5+_)*S+.5*y,T=_*x-_*S;for(let U=0;U!==h;++U)a[U]=v*l[m+U]+P*l[f+U]+w*l[u+U]+T*l[d+U];return a}},qh=class extends wr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let a=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=t*h,f=u-h,m=(n-e)/(r-e),d=1-m;for(let g=0;g!==h;++g)a[g]=l[f+g]*d+l[u+g]*m;return a}},Yh=class extends wr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},li=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ta(e,this.TimeBufferType),this.values=Ta(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ta(t.times,Array),values:Ta(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Yh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Da:e=this.InterpolantFactoryMethodDiscrete;break;case Ah:e=this.InterpolantFactoryMethodLinear;break;case hc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Da;case this.InterpolantFactoryMethodLinear:return Ah;case this.InterpolantFactoryMethodSmooth:return hc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,a=0,l=r-1;for(;a!==r&&n[a]<t;)++a;for(;l!==-1&&n[l]>e;)--l;if(++l,a!==0||l!==r){a>=l&&(l=Math.max(l,1),a=l-1);let h=this.getValueSize();this.times=n.slice(a,l),this.values=this.values.slice(a*h,l*h)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let h=0;h!==a;h++){let u=n[h];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,h,u),t=!1;break}if(l!==null&&l>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,h,u,l),t=!1;break}l=u}if(r!==void 0&&sb(r))for(let h=0,u=r.length;h!==u;++h){let f=r[h];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,h,f),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===hc,a=t.length-1,l=1;for(let h=1;h<a;++h){let u=!1,f=t[h],m=t[h+1];if(f!==m&&(h!==1||f!==t[0]))if(r)u=!0;else{let d=h*n,g=d-n,_=d+n;for(let y=0;y!==n;++y){let S=e[d+y];if(S!==e[g+y]||S!==e[_+y]){u=!0;break}}}if(u){if(h!==l){t[l]=t[h];let d=h*n,g=l*n;for(let _=0;_!==n;++_)e[g+_]=e[d+_]}++l}}if(a>0){t[l]=t[a];for(let h=a*n,u=l*n,f=0;f!==n;++f)e[u+f]=e[h+f];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=Ah;var As=class extends li{constructor(t,e,n){super(t,e,n)}};As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=Da;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var $h=class extends li{};$h.prototype.ValueTypeName="color";var Kh=class extends li{};Kh.prototype.ValueTypeName="number";var Jh=class extends wr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let a=this.resultBuffer,l=this.sampleValues,h=this.valueSize,u=(n-e)/(r-e),f=t*h;for(let m=f+h;f!==m;f+=4)ri.slerpFlat(a,0,l,f-h,l,f,u);return a}},rl=class extends li{InterpolantFactoryMethodLinear(t){return new Jh(this.times,this.values,this.getValueSize(),t)}};rl.prototype.ValueTypeName="quaternion";rl.prototype.InterpolantFactoryMethodSmooth=void 0;var Ps=class extends li{constructor(t,e,n){super(t,e,n)}};Ps.prototype.ValueTypeName="string";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=Da;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var jh=class extends li{};jh.prototype.ValueTypeName="vector";var Qh=class{constructor(t,e,n){let r=this,a=!1,l=0,h=0,u,f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(m){h++,a===!1&&r.onStart!==void 0&&r.onStart(m,l,h),a=!0},this.itemEnd=function(m){l++,r.onProgress!==void 0&&r.onProgress(m,l,h),l===h&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(m){r.onError!==void 0&&r.onError(m)},this.resolveURL=function(m){return u?u(m):m},this.setURLModifier=function(m){return u=m,this},this.addHandler=function(m,d){return f.push(m,d),this},this.removeHandler=function(m){let d=f.indexOf(m);return d!==-1&&f.splice(d,2),this},this.getHandler=function(m){for(let d=0,g=f.length;d<g;d+=2){let _=f[d],y=f[d+1];if(_.global&&(_.lastIndex=0),_.test(m))return y}return null}}},rb=new Qh,tu=class{constructor(t){this.manager=t!==void 0?t:rb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,a){n.load(t,r,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};tu.DEFAULT_MATERIAL_NAME="__DEFAULT";var ol=class extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var zc=new Fe,Vf=new H,Gf=new H,eu=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new co,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Vf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vf),Gf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gf),e.updateMatrixWorld(),zc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var nu=class extends eu{constructor(){super(new Ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},al=class extends ol{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new nu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ll=class extends ol{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var cl=class extends Ge{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var du="\\[\\]\\.:\\/",ob=new RegExp("["+du+"]","g"),fu="[^"+du+"]",ab="[^"+du.replace("\\.","")+"]",lb=/((?:WC+[\/:])*)/.source.replace("WC",fu),cb=/(WCOD+)?/.source.replace("WCOD",ab),hb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fu),ub=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fu),db=new RegExp("^"+lb+cb+hb+ub+"$"),fb=["material","materials","bones","map"],iu=class{constructor(t,e,n){let r=n||Ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=n.length;r!==a;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ve=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ob,"")}static parseTrackName(t){let e=db.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=n.nodeName.substring(r+1);fb.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(a){for(let l=0;l<a.length;l++){let h=a[l];if(h.name===e||h.uuid===e)return h;let u=n(h.children);if(u)return u}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,a=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let f=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let m=0;m<t.length;m++)if(t[m].name===f){f=m;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(f!==void 0){if(t[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}let l=t[r];if(l===void 0){let f=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+r+" but it wasn't found.",t);return}let h=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?h=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}u=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=a}else l.fromArray!==void 0&&l.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(u=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=r;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ve.Composite=iu;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mM=new Float32Array(1);var Rs=class extends Ya{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var go=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(en(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Wf=new H,Ea=new H,hl=class{constructor(t=new H,e=new H){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Wf.subVectors(t,this.start),Ea.subVectors(this.end,this.start);let n=Ea.dot(Ea),a=Ea.dot(Wf)/n;return e&&(a=en(a,0,1)),a}closestPointToPoint(t,e,n){let r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Zf=new H,Aa,Hc,ul=class extends nn{constructor(t=new H(0,0,1),e=new H(0,0,0),n=1,r=16776960,a=n*.2,l=a*.2){super(),this.type="ArrowHelper",Aa===void 0&&(Aa=new Ge,Aa.setAttribute("position",new ye([0,0,0,0,1,0],3)),Hc=new el(0,.5,1,5,1),Hc.translate(0,-.5,0)),this.position.copy(e),this.line=new Sr(Aa,new ai({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Be(Hc,new Wn({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,a,l)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Zf.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Zf,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};var dl=class extends Vi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var gp={type:"change"},mu={type:"start"},vp={type:"end"},vl=new Ts,_p=new ei,mb=Math.cos(70*ml.DEG2RAD),je=new H,wn=2*Math.PI,Oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pu=1e-6,xl=class extends dl{constructor(t,e=null){super(t,e),this.state=Oe.NONE,this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Cs.ROTATE,MIDDLE:Cs.DOLLY,RIGHT:Cs.PAN},this.touches={ONE:Ls.ROTATE,TWO:Ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new ri,this._lastTargetPosition=new H,this._quat=new ri().setFromUnitVectors(t.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new go,this._sphericalDelta=new go,this._scale=1,this._panOffset=new H,this._rotateStart=new Yt,this._rotateEnd=new Yt,this._rotateDelta=new Yt,this._panStart=new Yt,this._panEnd=new Yt,this._panDelta=new Yt,this._dollyStart=new Yt,this._dollyEnd=new Yt,this._dollyDelta=new Yt,this._dollyDirection=new H,this._mouse=new Yt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_b.bind(this),this._onPointerDown=gb.bind(this),this._onPointerUp=vb.bind(this),this._onContextMenu=Tb.bind(this),this._onMouseWheel=bb.bind(this),this._onKeyDown=Mb.bind(this),this._onTouchStart=Sb.bind(this),this._onTouchMove=wb.bind(this),this._onMouseDown=xb.bind(this),this._onMouseMove=yb.bind(this),this._interceptControlDown=Eb.bind(this),this._interceptControlUp=Ab.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gp),this.update(),this.state=Oe.NONE}update(t=null){let e=this.object.position;je.copy(e).sub(this.target),je.applyQuaternion(this._quat),this._spherical.setFromVector3(je),this.autoRotate&&this.state===Oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=wn:n>Math.PI&&(n-=wn),r<-Math.PI?r+=wn:r>Math.PI&&(r-=wn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=l!=this._spherical.radius}if(je.setFromSpherical(this._spherical),je.applyQuaternion(this._quatInverse),e.copy(this.target).add(je),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){let h=je.length();l=this._clampDistance(h*this._scale);let u=h-l;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),a=!!u}else if(this.object.isOrthographicCamera){let h=new H(this._mouse.x,this._mouse.y,0);h.unproject(this.object);let u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=u!==this.object.zoom;let f=new H(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(h),this.object.updateMatrixWorld(),l=je.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(vl.origin.copy(this.object.position),vl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vl.direction))<mb?this.object.lookAt(this.target):(_p.setFromNormalAndCoplanarPoint(this.object.up,this.target),vl.intersectPlane(_p,this.target))))}else if(this.object.isOrthographicCamera){let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>pu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pu||this._lastTargetPosition.distanceToSquared(this.target)>pu?(this.dispatchEvent(gp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?wn/60*this.autoRotateSpeed*t:wn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){je.setFromMatrixColumn(e,0),je.multiplyScalar(-t),this._panOffset.add(je)}_panUp(t,e){this.screenSpacePanning===!0?je.setFromMatrixColumn(e,1):(je.setFromMatrixColumn(e,0),je.crossVectors(this.object.up,je)),je.multiplyScalar(t),this._panOffset.add(je)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;je.copy(r).sub(this.target);let a=je.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/n.clientHeight,this.object.matrix),this._panUp(2*e*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=t-n.left,a=e-n.top,l=n.width,h=n.height;this._mouse.x=r/l*2-1,this._mouse.y=-(a/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/e.clientHeight),this._rotateUp(wn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,a=Math.sqrt(n*n+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/e.clientHeight),this._rotateUp(wn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,a=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let l=(t.pageX+e.x)*.5,h=(t.pageY+e.y)*.5;this._updateZoomParameters(l,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Yt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function gb(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function _b(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function vb(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vp),this.state=Oe.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function xb(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Cs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Oe.DOLLY;break;case Cs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Oe.ROTATE}break;case Cs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Oe.PAN}break;default:this.state=Oe.NONE}this.state!==Oe.NONE&&this.dispatchEvent(mu)}function yb(s){switch(this.state){case Oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function bb(s){this.enabled===!1||this.enableZoom===!1||this.state!==Oe.NONE||(s.preventDefault(),this.dispatchEvent(mu),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(vp))}function Mb(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function Sb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Oe.TOUCH_ROTATE;break;case Ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Oe.TOUCH_PAN;break;default:this.state=Oe.NONE}break;case 2:switch(this.touches.TWO){case Ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Oe.TOUCH_DOLLY_PAN;break;case Ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Oe.TOUCH_DOLLY_ROTATE;break;default:this.state=Oe.NONE}break;default:this.state=Oe.NONE}this.state!==Oe.NONE&&this.dispatchEvent(mu)}function wb(s){switch(this._trackPointer(s),this.state){case Oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Oe.NONE}}function Tb(s){this.enabled!==!1&&s.preventDefault()}function Eb(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ab(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var xp=new Gn,yl=new H,Ar=class extends cl{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new ye(t,3)),this.setAttribute("uv",new ye(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Rs(e,6,1);return this.setAttribute("instanceStart",new qn(n,3,0)),this.setAttribute("instanceEnd",new qn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Rs(e,6,1);return this.setAttribute("instanceColorStart",new qn(n,3,0)),this.setAttribute("instanceColorEnd",new qn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new sl(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),xp.setFromBufferAttribute(e),this.boundingBox.union(xp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let a=0,l=t.count;a<l;a++)yl.fromBufferAttribute(t,a),r=Math.max(r,n.distanceToSquared(yl)),yl.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(yl));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}};At.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Yt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};bn.line={uniforms:gl.merge([At.common,At.fog,At.line]),vertexShader:`
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
		`};var ss=class extends Xn{static get type(){return"LineMaterial"}constructor(t){super({uniforms:gl.clone(bn.line.uniforms),vertexShader:bn.line.vertexShader,fragmentShader:bn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var gu=new Ne,yp=new H,bp=new H,an=new Ne,ln=new Ne,yi=new Ne,_u=new H,vu=new Fe,cn=new hl,Mp=new H,bl=new Gn,Ml=new oi,bi=new Ne,Mi,Is;function Sp(s,t,e){return bi.set(0,0,-t,1).applyMatrix4(s.projectionMatrix),bi.multiplyScalar(1/bi.w),bi.x=Is/e.width,bi.y=Is/e.height,bi.applyMatrix4(s.projectionMatrixInverse),bi.multiplyScalar(1/bi.w),Math.abs(Math.max(bi.x,bi.y))}function Pb(s,t){let e=s.matrixWorld,n=s.geometry,r=n.attributes.instanceStart,a=n.attributes.instanceEnd,l=Math.min(n.instanceCount,r.count);for(let h=0,u=l;h<u;h++){cn.start.fromBufferAttribute(r,h),cn.end.fromBufferAttribute(a,h),cn.applyMatrix4(e);let f=new H,m=new H;Mi.distanceSqToSegment(cn.start,cn.end,m,f),m.distanceTo(f)<Is*.5&&t.push({point:m,pointOnLine:f,distance:Mi.origin.distanceTo(m),object:s,face:null,faceIndex:h,uv:null,uv1:null})}}function Rb(s,t,e){let n=t.projectionMatrix,a=s.material.resolution,l=s.matrixWorld,h=s.geometry,u=h.attributes.instanceStart,f=h.attributes.instanceEnd,m=Math.min(h.instanceCount,u.count),d=-t.near;Mi.at(1,yi),yi.w=1,yi.applyMatrix4(t.matrixWorldInverse),yi.applyMatrix4(n),yi.multiplyScalar(1/yi.w),yi.x*=a.x/2,yi.y*=a.y/2,yi.z=0,_u.copy(yi),vu.multiplyMatrices(t.matrixWorldInverse,l);for(let g=0,_=m;g<_;g++){if(an.fromBufferAttribute(u,g),ln.fromBufferAttribute(f,g),an.w=1,ln.w=1,an.applyMatrix4(vu),ln.applyMatrix4(vu),an.z>d&&ln.z>d)continue;if(an.z>d){let w=an.z-ln.z,T=(an.z-d)/w;an.lerp(ln,T)}else if(ln.z>d){let w=ln.z-an.z,T=(ln.z-d)/w;ln.lerp(an,T)}an.applyMatrix4(n),ln.applyMatrix4(n),an.multiplyScalar(1/an.w),ln.multiplyScalar(1/ln.w),an.x*=a.x/2,an.y*=a.y/2,ln.x*=a.x/2,ln.y*=a.y/2,cn.start.copy(an),cn.start.z=0,cn.end.copy(ln),cn.end.z=0;let S=cn.closestPointToPointParameter(_u,!0);cn.at(S,Mp);let x=ml.lerp(an.z,ln.z,S),v=x>=-1&&x<=1,P=_u.distanceTo(Mp)<Is*.5;if(v&&P){cn.start.fromBufferAttribute(u,g),cn.end.fromBufferAttribute(f,g),cn.start.applyMatrix4(l),cn.end.applyMatrix4(l);let w=new H,T=new H;Mi.distanceSqToSegment(cn.start,cn.end,T,w),e.push({point:T,pointOnLine:w,distance:Mi.origin.distanceTo(T),object:s,face:null,faceIndex:g,uv:null,uv1:null})}}}var Sl=class extends Be{constructor(t=new Ar,e=new ss({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,r=new Float32Array(2*e.count);for(let l=0,h=0,u=e.count;l<u;l++,h+=2)yp.fromBufferAttribute(e,l),bp.fromBufferAttribute(n,l),r[h]=h===0?0:r[h-1],r[h+1]=r[h]+yp.distanceTo(bp);let a=new Rs(r,2,1);return t.setAttribute("instanceDistanceStart",new qn(a,1,0)),t.setAttribute("instanceDistanceEnd",new qn(a,1,1)),this}raycast(t,e){let n=this.material.worldUnits,r=t.camera;r===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let a=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Mi=t.ray;let l=this.matrixWorld,h=this.geometry,u=this.material;Is=u.linewidth+a,h.boundingSphere===null&&h.computeBoundingSphere(),Ml.copy(h.boundingSphere).applyMatrix4(l);let f;if(n)f=Is*.5;else{let d=Math.max(r.near,Ml.distanceToPoint(Mi.origin));f=Sp(r,d,u.resolution)}if(Ml.radius+=f,Mi.intersectsSphere(Ml)===!1)return;h.boundingBox===null&&h.computeBoundingBox(),bl.copy(h.boundingBox).applyMatrix4(l);let m;if(n)m=Is*.5;else{let d=Math.max(r.near,bl.distanceToPoint(Mi.origin));m=Sp(r,d,u.resolution)}bl.expandByScalar(m),Mi.intersectsBox(bl)!==!1&&(n?Pb(this,e):Rb(this,r,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(gu),this.material.uniforms.resolution.value.set(gu.z,gu.w))}};var Pr=class extends Ar{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,n=new Float32Array(2*e);for(let r=0;r<e;r+=3)n[2*r]=t[r],n[2*r+1]=t[r+1],n[2*r+2]=t[r+2],n[2*r+3]=t[r+3],n[2*r+4]=t[r+4],n[2*r+5]=t[r+5];return super.setPositions(n),this}setColors(t){let e=t.length-3,n=new Float32Array(2*e);for(let r=0;r<e;r+=3)n[2*r]=t[r],n[2*r+1]=t[r+1],n[2*r+2]=t[r+2],n[2*r+3]=t[r+3],n[2*r+4]=t[r+4],n[2*r+5]=t[r+5];return super.setColors(n),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var wl=class extends Sl{constructor(t=new Pr,e=new ss({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var wp=Math.PI/180;function Cb(s,t="#cfe0f2",e="rgba(8,18,26,.75)"){let n=document.createElement("canvas");n.width=256,n.height=64;let r=n.getContext("2d");r.font="bold 30px Helvetica, Arial, sans-serif";let a=Math.min(250,r.measureText(s).width+24);r.fillStyle=e,r.fillRect(128-a/2,8,a,48),r.fillStyle=t,r.textAlign="center",r.textBaseline="middle",r.fillText(s,128,33);let l=new Qa(n);l.minFilter=Vn;let h=new $a(new ho({map:l,depthTest:!1,transparent:!0}));return h.userData.aspect=4,h.renderOrder=10,h}var Tp=s=>{let t=Math.pow(10,Math.floor(Math.log10(s/4))),e=s/4/t;return(e<1.5?1:e<3.5?2:e<7.5?5:10)*t};function Lb(){let s=new Bi,t=.67,e=.026,n=new mo({color:"#9db2c8",roughness:.5,metalness:.1,emissive:"#1a2a3c"}),r=new mo({color:"#e8eef5",roughness:.5,emissive:"#223347"}),a=[];for(let _=0;_<=24;_++){let y=_/24,S=e*Math.pow(Math.sin(Math.PI*Math.pow(y,.75)),.55)*(y>.7?1-(y-.7)*1.2*(y-.7)/.3*.5:1);a.push(new Yt(Math.max(S,.0015),(y-.5)*t))}let l=new Be(new tl(a,20),n);l.rotation.x=-Math.PI/2,s.add(l);let h=new Be(new Zn(.012,.05,.12),n);h.position.set(0,e+.02,-.04),s.add(h);let u=(_,y,S)=>{let x=new Be(new Zn(.075,.003,.03),r);return x.position.set(_,0,y),x.rotation.z=S,x};s.add(u(0,.27,0));let f=u(0,.27,Math.PI/2);s.add(f);let m=new Be(new Zn(.05,.003,.02),r);m.position.set(0,0,-.17),s.add(m);let d=new Be(new il(.014,.003,6,16),r);d.position.set(0,0,.345),s.add(d);let g=new Be(new po(.008,8,8),new Wn({color:"#e0a93b"}));return g.position.set(0,0,-.34),s.add(g),s}var Tl=class{constructor(t){this.host=t,this.dirty=!0,this.active=!1,this.t=0,this.follow=!1,this.color="step",this.plan=null,this.renderer=new Xa({antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.setClearColor("#08121a"),t.append(this.renderer.domElement),this.scene=new qa,this.scene.fog=null,this.cam=new yn(42,1,.01,2e3),this.cam.position.set(6,4,8),this.ctl=new xl(this.cam,this.renderer.domElement),this.ctl.addEventListener("change",()=>{this.dirty=!0}),this.scene.add(new ll("#8fa6c0",1.1));let e=new al("#ffffff",2);e.position.set(3,8,5),this.scene.add(e),this.world=new Bi,this.scene.add(this.world),this.boat=Lb(),this.boat.rotation.order="YXZ",this.scene.add(this.boat);let n=new Ge;n.setAttribute("position",new ye([0,0,0],3)),this.dot=new ja(n,new uo({color:"#ffb12b",size:11,sizeAttenuation:!1,depthTest:!1,transparent:!0})),this.dot.renderOrder=20,this.scene.add(this.dot),this.lm=new ss({color:16777215,linewidth:3,vertexColors:!0,worldUnits:!1}),this.sprites=[],new ResizeObserver(()=>this.resize()).observe(t),this.resize();let r=()=>{requestAnimationFrame(r),this.active&&this.dirty&&(this.dirty=!1,this.ctl.update(),this.updateSprites(),this.renderer.render(this.scene,this.cam))};r()}resize(){let t=this.host.clientWidth||600,e=this.host.clientHeight||400;this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.cam.aspect=t/e,this.cam.updateProjectionMatrix(),this.lm.resolution.set(t,e),this.dirty=!0}setActive(t){this.active=t,this.dirty=!0,t&&this.resize()}updateSprites(){let t=this.cam.position.distanceTo(this.ctl.target);this.sprites.forEach(e=>{let n=(e.userData.size||.03)*t;e.scale.set(n*e.userData.aspect,n,1)})}sprite(t,e,n,r){let a=Cb(t,r);return a.position.copy(e),a.userData.size=n,this.world.add(a),this.sprites.push(a),a}clear(){for(;this.world.children.length;)this.world.children.pop().traverse?.(e=>{e.geometry?.dispose(),e.material&&e.material!==this.lm&&(e.material.map?.dispose(),e.material.dispose())});this.sprites=[]}P(t){return new H(t.x,-t.z,-t.y)}setPlan(t,e={}){this.plan=t,this.clear();let n=t.pts,r=t.stats;if(n.length<2){this.dirty=!0;return}let a=Math.max(1,.12*Math.max(r.w,r.l,r.maxDepth)),l=Math.min(r.bb.x0,-1)-a,h=Math.max(r.bb.x1,1)+a,u=Math.min(r.bb.y0,-1)-a,f=Math.max(r.bb.y1,1)+a,m=Math.max(e.depthLimit||0,r.maxDepth*1.2,1.2),d=(l+h)/2,g=-(u+f)/2,_=h-l,y=f-u;this.size=Math.max(_,y,m),this.cx=d,this.cz=g,this.dmax=m;let S=new Be(new Zn(_,m,y),new Wn({color:"#0f4a7a",transparent:!0,opacity:.1,side:mn,depthWrite:!1}));S.position.set(d,-m/2,g),this.world.add(S);let x=new is(new fo(new Zn(_,m,y)),new ai({color:"#2f6ca8",transparent:!0,opacity:.8}));x.position.copy(S.position),this.world.add(x);let v=new Be(new Es(_,y),new Wn({color:"#1b6fb5",transparent:!0,opacity:.12,side:Hn,depthWrite:!1}));v.rotation.x=-Math.PI/2,v.position.set(d,0,g),this.world.add(v);let P=Tp(Math.max(_,y)),w=(dt,et)=>{let Tt=new ai({color:"#35597d",transparent:!0,opacity:et}),xt=[];for(let ae=Math.ceil(l/P)*P;ae<=h+1e-6;ae+=P)xt.push(ae,dt,g-y/2,ae,dt,g+y/2);for(let ae=Math.ceil(-f/P)*P;ae<=-u+1e-6;ae+=P)xt.push(l,dt,ae,h,dt,ae);let It=new Ge;It.setAttribute("position",new ye(xt,3));let F=new is(It,Tt);this.world.add(F)};w(0,.6),w(-m,.25);let T=new ul(new H(0,0,-1),new H(l+.5*a,0,g-y/2+.2*a),Math.max(a*.9,this.size*.08),14702667,this.size*.02,this.size*.012);this.world.add(T),this.sprite("N",new H(l+.5*a,0,g-y/2-this.size*.05),.04,"#ff8a7d");let U=l,C=g+y/2,D=Tp(m),O=[U,0,C,U,-m,C];for(let dt=0;dt<=m+1e-6;dt+=D)O.push(U,-dt,C,U-this.size*.015,-dt,C),this.sprite(dt.toFixed(D<1?1:0)+" m",new H(U-this.size*.07,-dt,C),.03,"#9fc3ea");let A=new Ge;if(A.setAttribute("position",new ye(O,3)),this.world.add(new is(A,new ai({color:"#8fb4dc"}))),e.depthLimit&&e.depthLimit<=m){let dt=new Be(new Es(_,y),new Wn({color:"#e0584b",transparent:!0,opacity:.08,side:Hn,depthWrite:!1}));dt.rotation.x=-Math.PI/2,dt.position.set(d,-e.depthLimit,g),this.world.add(dt)}let E=r.bb.x0,B=r.bb.x1,q=r.bb.y0,Z=r.bb.y1,j=new is(new fo(new Zn(Math.max(B-E,.001),Math.max(r.maxDepth,.001),Math.max(Z-q,.001))),new ai({color:"#e0a93b",transparent:!0,opacity:.55}));j.position.set((E+B)/2,-r.maxDepth/2,-(q+Z)/2),this.world.add(j),B-E>.2&&this.sprite(`B ${(B-E).toFixed(1)} m`,new H((E+B)/2,0,-q+this.size*.03),.03,"#ffd27a"),Z-q>.2&&this.sprite(`L ${(Z-q).toFixed(1)} m`,new H(B+this.size*.04,0,-(q+Z)/2),.03,"#ffd27a"),r.maxDepth>.2&&this.sprite(`T ${r.maxDepth.toFixed(1)} m`,new H(B,-r.maxDepth/2,-q),.03,"#ffd27a");let it=[],V=[],pt=[],G=new pe,ut=Math.max(r.maxDepth,.5);n.forEach(dt=>{let et=this.P(dt);it.push(et.x,et.y,et.z),pt.push(et.x,0,et.z),this.color==="depth"?G.setHSL(.55-.1*dt.z/ut,.9,.45+.25*(1-dt.z/ut)):G.set(Pn[t.steps?.[dt.i]?.t]?.color||"#9aa7b8"),V.push(G.r,G.g,G.b)});let lt=new Pr;lt.setPositions(it),lt.setColors(V);let ct=new wl(lt,this.lm);ct.computeLineDistances(),this.world.add(ct);let Mt=new Ge;Mt.setAttribute("position",new ye(pt,3)),this.world.add(new Sr(Mt,new ai({color:"#7ea6d1",transparent:!0,opacity:.35})));let wt=[],J=-99;n.forEach(dt=>{if(dt.t-J>=Math.max(5,r.dur/40)&&dt.z>.05){J=dt.t;let et=this.P(dt);wt.push(et.x,et.y,et.z,et.x,0,et.z)}});let Y=new Ge;Y.setAttribute("position",new ye(wt,3)),this.world.add(new is(Y,new ai({color:"#4d7aa8",transparent:!0,opacity:.35})));let at={};n.forEach(dt=>{if(dt.i>=0&&!at[dt.i]){at[dt.i]=1;let et=this.P(dt),Tt=new Be(new po(this.size*.006,10,10),new Wn({color:Pn[t.steps?.[dt.i]?.t]?.color||"#fff"}));Tt.position.copy(et),this.world.add(Tt),this.sprite(`${dt.i+1} ${Pn[t.steps?.[dt.i]?.t]?.label||""}`,et.clone().add(new H(0,this.size*.03,0)),.02)}});let W=new Be(new nl(this.size*.01,this.size*.03,12),new Wn({color:"#4fb477"}));W.position.copy(this.P(n[0])).add(new H(0,this.size*.02,0)),W.rotation.x=Math.PI,this.world.add(W),this.sprite("START",this.P(n[0]).add(new H(0,this.size*.06,0)),.024,"#7fe0a0");let yt=n[n.length-1];this.sprite("ENDE",this.P(yt).add(new H(0,this.size*.06,0)),.024,"#ff8a7d"),this.boatScale=e.boatScale||Math.max(1,Math.min(60,this.size*.07/.67)),this.boat.scale.setScalar(this.boatScale),this.lm.linewidth=4,this.at(this.t),this.home(!1)}home(t=!0){if(!this.size)return;let e=this.size*.95;this.ctl.target.set(this.cx,-this.dmax*.35,this.cz),this.cam.position.set(this.cx+e*.75,e*.5,this.cz+e*.95),this.cam.near=this.size*.002,this.cam.far=this.size*40,this.cam.updateProjectionMatrix(),this.ctl.update(),this.dirty=!0}view(t){let e=this.size*1.3,n=this.ctl.target.set(this.cx,-this.dmax*.3,this.cz);t==="top"?this.cam.position.set(this.cx,e*1.5,this.cz+.001):t==="side"?this.cam.position.set(this.cx,-this.dmax*.3,this.cz+e*1.4):this.home(),this.ctl.update(),this.dirty=!0}at(t){if(this.t=t,!this.plan)return;let e=this.plan.pts;if(e.length<2)return;let n=0,r=e.length-1;for(;r-n>1;){let d=n+r>>1;e[d].t<=t?n=d:r=d}let a=e[n],l=e[r],h=l.t>a.t?Math.min(1,Math.max(0,(t-a.t)/(l.t-a.t))):0,u=d=>a[d]+(l[d]-a[d])*h,f={x:u("x"),y:u("y"),z:u("z")};this.boat.position.copy(this.P(f)),this.dot.position.copy(this.boat.position);let m=l.h-a.h;if(m>180&&(m-=360),m<-180&&(m+=360),this.boat.rotation.y=-(a.h+m*h)*wp,this.boat.rotation.x=u("p")*wp,this.follow){let d=this.boat.position;this.ctl.target.lerp(d,1)}return this.cur={...a,x:f.x,y:f.y,z:f.z,h:a.h+m*h,p:u("p"),v:u("v"),f:u("f"),thr:u("thr"),t},this.dirty=!0,this.cur}shot(){return this.ctl.update(),this.updateSprites(),this.renderer.render(this.scene,this.cam),this.renderer.domElement.toDataURL("image/png")}};var gn=(s,t,e="")=>M("button",{class:"btn "+e,onclick:t},s);function Ib(s,t,e,n){let r=s.getContext("2d"),a=s.width/2,l=s.height/2;r.setTransform(2,0,0,2,0,0),r.clearRect(0,0,a,l),r.fillStyle="#0a141d",r.fillRect(0,0,a,l);let h=t.pts,u=t.stats;if(h.length<2)return;let f=44,m=10,d=10,g=20,_=Math.max(u.maxDepth*1.15,1),y=Math.max(u.dur,1),S=C=>f+C/y*(a-f-m),x=C=>d+C/_*(l-d-g);r.font="10px Helvetica, Arial",r.fillStyle="#6f869c",r.strokeStyle="#162838",r.textAlign="right";let v=_<=3?.5:_<=10?1:_<=30?5:10;for(let C=0;C<=_;C+=v)r.beginPath(),r.moveTo(f,x(C)),r.lineTo(a-m,x(C)),r.stroke(),r.fillText(C+" m",f-4,x(C)+3);r.textAlign="center";let P=y<120?10:y<600?60:y<3600?300:900;for(let C=0;C<=y;C+=P)r.fillText(C>=60?Math.round(C/60)+" min":C+" s",S(C),l-6);n&&n<_&&(r.strokeStyle=Zt.bad,r.setLineDash([4,3]),r.beginPath(),r.moveTo(f,x(n)),r.lineTo(a-m,x(n)),r.stroke(),r.setLineDash([]));let w=-2,T=0,U=[];h.forEach((C,D)=>{C.i!==w&&(w>=-1&&U.push([w,T,C.t]),w=C.i,T=C.t)}),U.push([w,T,y]),U.forEach(([C,D,O])=>{C<0||(r.fillStyle=(Pn[t.steps[C]?.t]?.color||"#888")+"22",r.fillRect(S(D),d,Math.max(1,S(O)-S(D)),l-d-g))}),r.lineWidth=2,r.strokeStyle="#4aa3ff",r.beginPath(),h.forEach((C,D)=>{D?r.lineTo(S(C.t),x(C.z)):r.moveTo(S(C.t),x(C.z))}),r.stroke(),r.lineWidth=1,r.strokeStyle="#8a6fd055",r.beginPath(),h.forEach((C,D)=>{let O=d+(1-C.f/100)*(l-d-g)*.25+(l-d-g)*.75;D?r.lineTo(S(C.t),O):r.moveTo(S(C.t),O)}),r.stroke(),r.fillStyle="#8a6fd0",r.textAlign="left",r.fillText("Ballast",f+4,l-g-4),r.strokeStyle="#e0a93b",r.lineWidth=1.5,r.beginPath(),r.moveTo(S(e),d),r.lineTo(S(e),l-g),r.stroke()}function Db(s,t,e){let n=s.getContext("2d"),r=s.width/2,a=s.height/2;n.setTransform(2,0,0,2,0,0),n.clearRect(0,0,r,a),n.fillStyle="#0a141d",n.fillRect(0,0,r,a);let l=t.pts,h=t.stats;if(l.length<2)return;let u=26,f=Math.max(h.bb.x1-h.bb.x0,2),m=Math.max(h.bb.y1-h.bb.y0,2),d=Math.min((r-2*u)/f,(a-2*u)/m),g=r/2-(h.bb.x0+h.bb.x1)/2*d,_=a/2+(h.bb.y0+h.bb.y1)/2*d,y=w=>g+w*d,S=w=>_-w*d,x=(()=>{let w=40/d,T=Math.pow(10,Math.floor(Math.log10(w))),U=w/T;return(U<1.5?1:U<3.5?2:U<7.5?5:10)*T})();n.strokeStyle="#162838",n.fillStyle="#6f869c",n.font="10px Helvetica, Arial",n.textAlign="left";for(let w=Math.floor(-g/d/x)*x;y(w)<r;w+=x)n.beginPath(),n.moveTo(y(w),0),n.lineTo(y(w),a),n.stroke();for(let w=Math.floor((_-a)/d/x)*x;S(w)>0;w+=x)n.beginPath(),n.moveTo(0,S(w)),n.lineTo(r,S(w)),n.stroke();n.fillText(`Raster ${x} m`,6,a-6),n.fillStyle=Zt.bad,n.fillText("N \u2191",r-28,14),n.lineWidth=2;for(let w=1;w<l.length;w++)n.strokeStyle=Pn[t.steps[l[w].i]?.t]?.color||"#9aa7b8",n.beginPath(),n.moveTo(y(l[w-1].x),S(l[w-1].y)),n.lineTo(y(l[w].x),S(l[w].y)),n.stroke();n.fillStyle=Zt.ok,n.beginPath(),n.arc(y(0),S(0),4,0,7),n.fill();let v=l[l.length-1];n.fillStyle=Zt.bad,n.beginPath(),n.arc(y(v.x),S(v.y),4,0,7),n.fill();let P=l.find(w=>w.t>=e)||v;n.strokeStyle="#e0a93b",n.lineWidth=2,n.beginPath(),n.arc(y(P.x),S(P.y),7,0,7),n.stroke(),n.save(),n.translate(y(P.x),S(P.y)),n.rotate(P.h*Math.PI/180),n.fillStyle="#e0a93b",n.beginPath(),n.moveTo(0,-11),n.lineTo(-4,-4),n.lineTo(4,-4),n.fill(),n.restore()}function Ep(){let s=An.get("mission",null);s=Array.isArray(s)&&s.length?s:oc("Pool Funktionstest");let t=null,e=0,n=!1,r=10,a=0,l=-1,h=An.get("h0",0),u=An.get("pmax",25),f=An.get("capwh",6.3),m=M("div",{class:"steps-list"}),d=M("div",{class:"warns"}),g=M("div",{class:"view3d"}),_={dur:ce("Dauer"),dist:ce("Strecke","m"),dep:ce("Max Tiefe","m"),box:ce("Bahn B \xD7 L","m"),end:ce("Ende zu Start","m"),en:ce("Energie","Wh"),bat:ce("Akku Bedarf","%"),spd:ce("\xD8 Fahrt","m/s")},y=M("canvas",{width:1e3,height:300,class:"cv"}),S=M("canvas",{width:600,height:300,class:"cv"}),x=M("input",{type:"range",min:0,max:100,step:.1,value:0,class:"sl tl",oninput:()=>{e=+x.value,n=!1,w(),j()}}),v=M("div",{class:"hud"}),P=gn("\u25B6",()=>{t&&(e>=t.stats.dur-.05&&(e=0),n=!n,a=performance.now(),w())},"play"),w=()=>{P.textContent=n?"\u275A\u275A":"\u25B6"},T=new Tl(g),U=M("select",{class:"in sm",onchange:()=>{r=+U.value}},[1,5,10,30,100].map(et=>M("option",{value:et,selected:et===r},`${et}\xD7`))),C=M("select",{class:"in sm",onchange:()=>{T.color=C.value,Z()}},M("option",{value:"step"},"Farbe: Schritt"),M("option",{value:"depth"},"Farbe: Tiefe")),D=M("input",{type:"checkbox",onchange:()=>{T.follow=D.checked,T.at(e)}}),O=M("select",{class:"in sm",onchange:()=>{T.boat.scale.setScalar(+O.value||T.boatScale),T.dirty=!0}},M("option",{value:0},"Boot: Auto"),M("option",{value:1},"Boot: 1:1"),M("option",{value:5},"Boot: 5\xD7"),M("option",{value:20},"Boot: 20\xD7")),A=()=>Fo(et=>tt.par[et]),E=()=>{let et=A();t=Ho(s,et,{h0:h,pMax:u}),t.steps=s;let Tt=t.stats;x.max=Tt.dur,e=Math.min(e,Tt.dur),_.dur.set(us(Tt.dur)),_.dist.set(Et(Tt.dist,1)),_.dep.set(Et(Tt.maxDepth,2),Tt.maxDepth>et.depthMax?"bad":""),_.box.set(`${Et(Tt.w,1)} \xD7 ${Et(Tt.l,1)}`),_.end.set(Et(Tt.endDist,1)),_.en.set(Et(Tt.wh,2));let xt=Tt.wh/f*100;_.bat.set(Et(xt,0),xt>60?"bad":xt>40?"warn":""),_.spd.set(Et(Tt.avgV,2)),d.innerHTML="",[...zo(s,et),...t.notes.map(F=>({i:F.i,m:F.m}))].forEach(F=>d.append(M("div",{class:"w"},(F.i>=0?`Schritt ${F.i+1}: `:"")+F.m))),An.set("mission",s),Z(),j()},B=null,q=()=>{clearTimeout(B),B=setTimeout(E,120)},Z=()=>{t&&T.setPlan(t,{depthLimit:A().depthMax,boatScale:+O.value||void 0})},j=()=>{if(!t)return;x.value=e;let et=T.at(e);Ib(y,t,e,A().depthMax),Db(S,t,e),et&&(v.innerHTML="",[["t",us(et.t)],["Tiefe",Et(et.z,2)+" m"],["Kurs",Et((et.h%360+360)%360,0)+"\xB0"],["Nick",Et(et.p,0)+"\xB0"],["Fahrt",Et(et.v,2)+" m/s"],["Ballast",Et(et.f,0)+" %"],["Schritt",et.i>=0?`${et.i+1} ${Pn[s[et.i]?.t]?.label||""}`:"Start"]].forEach(([Tt,xt])=>v.append(M("span",null,Tt,M("b",null,xt)))),l=et.i,it())},it=()=>{[...m.children].forEach((et,Tt)=>et.classList.toggle("sel",Tt===l))},V=()=>{m.innerHTML="",s.forEach((et,Tt)=>{let xt=Pn[et.t],It=zo(s,A()).some(Ut=>Ut.i===Tt),F=M("select",{class:"in sm",onchange:()=>{let Ut=et.v;s[Tt]=Bo(F.value),V(),q()}},sc.map(Ut=>M("option",{value:Ut,selected:Ut===et.t},Pn[Ut].label))),ae=xt.f.map((Ut,Ft)=>{let we=M("input",{class:"in num",type:"number",step:Ut[5],min:Ut[3],max:Ut[4],value:et.v[Ft],onchange:()=>{et.v[Ft]=Sn(+we.value,Ut[3],Ut[4]),we.value=et.v[Ft],q()}});return M("label",{class:"fld"},M("span",null,Ut[0],Ut[1]?` (${Ut[1]})`:""),we)}),jt=Ut=>()=>{let Ft=Tt+Ut;Ft<0||Ft>=s.length||([s[Tt],s[Ft]]=[s[Ft],s[Tt]],V(),E())};m.append(M("div",{class:"step"+(It?" warn":""),onclick:()=>{let Ut=t.pts.find(Ft=>Ft.i===Tt);Ut&&(e=Ut.t,n=!1,w(),j())}},M("div",{class:"sh"},M("i",{style:{background:xt.color}}),M("b",null,Tt+1),F,M("span",{class:"sp"}),M("button",{class:"ib",title:"hoch",onclick:Ut=>{Ut.stopPropagation(),jt(-1)()}},"\u2191"),M("button",{class:"ib",title:"runter",onclick:Ut=>{Ut.stopPropagation(),jt(1)()}},"\u2193"),M("button",{class:"ib",title:"duplizieren",onclick:Ut=>{Ut.stopPropagation(),s.splice(Tt+1,0,JSON.parse(JSON.stringify(et))),V(),E()}},"\u29C9"),M("button",{class:"ib del",title:"l\xF6schen",onclick:Ut=>{Ut.stopPropagation(),s.splice(Tt,1),V(),E()}},"\u2715")),ae.length?M("div",{class:"flds"},ae):M("div",{class:"dim sm"},"Ballast leeren, mit Gas und Nick nach oben auftauchen bis Tiefe 0, Mission endet.")))}),it()},pt=M("select",{class:"in"},sc.map(et=>M("option",{value:et},Pn[et].label))),G=()=>{if(s.length>=ko)return ie("Maximal 64 Schritte","warn");s.push(Bo(pt.value)),V(),E(),m.scrollTop=m.scrollHeight},ut=M("select",{class:"in",onchange:()=>{ut.value&&((!s.length||confirm("Aktuelle Mission durch Vorlage ersetzen?"))&&(s=oc(ut.value),e=0,V(),E()),ut.value="")}},M("option",{value:""},"Vorlage laden \u2026"),Object.keys(rc).map(et=>M("option",{value:et},et)));Pe.on("mission:set",et=>{s=et,e=0,l=-1,V(),E()});let lt=M("dialog",{class:"dlg"}),ct={lo:.5,hi:2,n:3,spd:25,rate:.15,pit:15},Mt=(et,Tt,xt,It=.1)=>M("label",{class:"fld"},M("span",null,`${et} (${xt})`),M("input",{class:"in num",type:"number",step:It,value:ct[Tt],onchange:F=>{ct[Tt]=+F.target.value}}));lt.append(M("h3",null,"Yo Yo Profil erzeugen"),M("div",{class:"flds"},Mt("Flachste Tiefe","lo","m"),Mt("Tiefste Tiefe","hi","m"),Mt("Zyklen","n","x",1),Mt("Fahrt","spd","%",1),Mt("Max Sinkrate","rate","m/s",.01),Mt("Max Nick","pit","deg",1)),M("div",{class:"row"},gn("Anh\xE4ngen",()=>{let et=s.length;s.push({t:"DIVE",v:[ct.lo,ct.rate,ct.pit,ct.spd]},{t:"DIVE",v:[ct.hi,ct.rate,ct.pit,ct.spd]},{t:"DIVE",v:[ct.lo,ct.rate,ct.pit,ct.spd]}),ct.n>1&&s.push({t:"REPEAT",v:[ct.n-1,et+1,0,0]}),lt.close(),V(),E()},"primary"),gn("Abbrechen",()=>lt.close())));let wt=M("span",{class:"dim"}),J=async et=>{if(!tt.connected)return ie("Nicht verbunden","bad");let Tt=tt.info?.maxsteps||64;if(s.length>Tt)return ie(`Boot speichert nur ${Tt} Schritte`,"bad");if(zo(s,A()).filter(F=>F.m.includes("R\xFCcksprung")).length)return ie("R\xFCcksprung Schritt pr\xFCfen","bad");let It=await xe("MIS CLEAR");if(!(!It||!It.ok)){for(let F=0;F<s.length;F++)if(wt.textContent=`\xDCbertrage ${F+1}/${s.length}`,It=await xe(gd([s[F]])[0].replace(/^/,"")),!It||!It.ok){wt.textContent="";return}et&&await xe("MIS SAVE"),wt.textContent="",ie(`Mission mit ${s.length} Schritten ${et?"gespeichert":"\xFCbertragen"}`,"ok"),ds(`Mission \xFCbertragen (${s.length} Schritte)`)}},Y=async()=>{let et=await xe("MIS GET");et&&et.ok&&Array.isArray(et.data)&&(s=Vo(et.data),e=0,V(),E(),ie(`${s.length} Schritte vom Boot gelesen`,"ok"))},at=async()=>{if(!tt.connected)return ie("Nicht verbunden","bad");confirm(`Mission starten?

\u2022 Boot im Wasser, Ballast Beh\xE4lter dicht
\u2022 Leckage Test bestanden, Akku voll
\u2022 Tiefe auf Null kalibriert
\u2022 Mission ist \xFCbertragen

Das Boot muss daf\xFCr scharf (ARMED) sein.`)&&await xe("MIS START","Mission l\xE4uft")},W=(et,Tt,xt,It)=>M("label",{class:"fld"},M("span",null,`${et} (${It})`),M("input",{class:"in num",type:"number",value:Tt,step:"any",onchange:F=>xt(+F.target.value)})),yt=M("div",{class:"page mis"},M("div",{class:"toolbar"},ut,gn("Neu",()=>{confirm("Mission leeren?")&&(s=[],e=0,V(),E())}),gn("Laden",async()=>{let et=await Zs(".json");if(et)try{s=JSON.parse(et).steps,e=0,V(),E()}catch{ie("Datei ung\xFCltig","bad")}}),gn("Speichern",()=>Jn("mission.json",JSON.stringify({app:"FATHOM",steps:s},null,1))),gn("Yo Yo \u2026",()=>lt.showModal()),M("span",{class:"sp"}),wt,gn("Zum Boot senden",()=>J(!1),"primary"),gn("Senden + im Boot speichern",()=>J(!0)),gn("Vom Boot lesen",Y),gn("START",at,"go"),gn("STOP",()=>xe("MIS STOP","Mission gestoppt"),"stop")),M("div",{class:"stats mstats"},Object.values(_).map(et=>et.el)),M("div",{class:"mgrid"},M("div",{class:"left"},m,M("div",{class:"addrow"},pt,gn("+ Schritt",G,"primary")),d,M("details",{class:"opt"},M("summary",null,"Annahmen f\xFCr die Vorschau"),W("Startkurs",h,et=>{h=et,An.set("h0",et),E()},"deg"),W("Leistung bei 100 % Gas",u,et=>{u=et,An.set("pmax",et),E()},"W"),W("Akku Energie (2S 850 mAh)",f,et=>{f=et,An.set("capwh",et),E()},"Wh"),M("p",{class:"note"},"Die Vorschau rechnet kinematisch mit den Boot Parametern (Fahrt je %, Limits, Ballast F\xF6rderrate). Reale Regelung, Tr\xE4gheit und Str\xF6mung fehlen. Energie ist eine grobe Annahme, bitte mit Messung ersetzen."))),M("div",{class:"right"},M("div",{class:"vwrap"},g,v,M("div",{class:"vtools"},gn("Iso",()=>T.view("iso")),gn("Oben",()=>T.view("top")),gn("Seite",()=>T.view("side")),C,O,M("label",{class:"chk"},D," Kamera folgt"))),M("div",{class:"tlbar"},P,x,U),M("div",{class:"grid2c"},M("div",{class:"card tight"},M("h3",null,"Tiefenprofil"),y),M("div",{class:"card tight"},M("h3",null,"Draufsicht"),S)))),lt),dt=()=>{if(requestAnimationFrame(dt),!n||!t)return;let et=performance.now();e+=(et-a)/1e3*r,a=et,e>=t.stats.dur&&(e=t.stats.dur,n=!1,w()),j()};return dt(),Pe.on("par",()=>{tt.tab==="mission"&&q()}),{el:yt,show(){T.setActive(!0),V(),E()},hide(){T.setActive(!1),n=!1,w()},update(et){et.mis.run&&(l=et.mis.i,it())},sim:T,setTime(et){e=et,j()},get plan(){return t}}}var Pp=Math.PI/180,Ds=(s,t,e)=>({x:(e-s.lon)*111200*Math.cos(s.lat*Pp),y:(t-s.lat)*111200}),Ap=s=>{let t=Math.pow(10,Math.floor(Math.log10(s))),e=s/t;return(e<1.5?1:e<3.5?2:e<7.5?5:10)*t};function xu(s,t){let e=window.devicePixelRatio||1,n=s.clientWidth||600,r=s.clientHeight||400;(s.width!==n*e||s.height!==r*e)&&(s.width=n*e,s.height=r*e);let a=s.getContext("2d");a.setTransform(e,0,0,e,0,0),a.clearRect(0,0,n,r),a.fillStyle=Zt.bg,a.fillRect(0,0,n,r);let l=[...t.pts];if(t.home&&l.push(t.home),t.boat&&l.push(t.boat),!l.length){a.fillStyle=Zt.dim,a.font="13px Helvetica, Arial, sans-serif",a.textAlign="center",a.fillText(t.empty||"Noch keine Position",n/2,r/2);return}let h=t.home||l[0],u=l.map(D=>Ds(h,D.lat,D.lon)),f=Math.min(...u.map(D=>D.x)),m=Math.max(...u.map(D=>D.x)),d=Math.min(...u.map(D=>D.y)),g=Math.max(...u.map(D=>D.y)),_=16;if(m-f<_){let D=(f+m)/2;f=D-_/2,m=D+_/2}if(g-d<_){let D=(d+g)/2;d=D-_/2,g=D+_/2}let y=36,S=Math.min((n-2*y)/(m-f),(r-2*y)/(g-d)),x=(f+m)/2,v=(d+g)/2,P=D=>n/2+(D-x)*S,w=D=>r/2-(D-v)*S,T=Ap(60/S);a.strokeStyle=Zt.grid,a.lineWidth=1,a.fillStyle=Zt.dim,a.font="10px Helvetica, Arial, sans-serif",a.textAlign="left";for(let D=Math.ceil((x-n/2/S)/T)*T;D<x+n/2/S;D+=T)a.beginPath(),a.moveTo(P(D),0),a.lineTo(P(D),r),a.stroke();for(let D=Math.ceil((v-r/2/S)/T)*T;D<v+r/2/S;D+=T)a.beginPath(),a.moveTo(0,w(D)),a.lineTo(n,w(D)),a.stroke();a.lineWidth=2,a.lineJoin="round",a.lineCap="round";for(let D=1;D<t.pts.length;D++){let O=Ds(h,t.pts[D-1].lat,t.pts[D-1].lon),A=Ds(h,t.pts[D].lat,t.pts[D].lon);a.strokeStyle=t.pts[D].c||Zt.acc,a.beginPath(),a.moveTo(P(O.x),w(O.y)),a.lineTo(P(A.x),w(A.y)),a.stroke()}if(t.home&&t.boat){let D=Ds(h,t.boat.lat,t.boat.lon);a.setLineDash([5,5]),a.strokeStyle=Zt.warn,a.lineWidth=1,a.beginPath(),a.moveTo(P(D.x),w(D.y)),a.lineTo(P(0),w(0)),a.stroke(),a.setLineDash([])}if(t.home&&(a.strokeStyle=Zt.ok,a.fillStyle=Zt.bg,a.lineWidth=2,a.beginPath(),a.arc(P(0),w(0),8,0,7),a.fill(),a.stroke(),a.fillStyle=Zt.ok,a.font="bold 10px Helvetica, Arial, sans-serif",a.textAlign="center",a.fillText("H",P(0),w(0)+3.5)),t.cursor){let D=Ds(h,t.cursor.lat,t.cursor.lon);a.fillStyle=Zt.txt,a.beginPath(),a.arc(P(D.x),w(D.y),5,0,7),a.fill()}if(t.boat){let D=Ds(h,t.boat.lat,t.boat.lon);a.save(),a.translate(P(D.x),w(D.y)),a.rotate((t.boat.h||0)*Pp),a.fillStyle=Zt.txt,a.beginPath(),a.moveTo(0,-10),a.lineTo(6,8),a.lineTo(0,4),a.lineTo(-6,8),a.closePath(),a.fill(),a.restore()}let U=Ap(100/S),C=U*S;a.strokeStyle=Zt.txt,a.lineWidth=2,a.beginPath(),a.moveTo(14,r-16),a.lineTo(14+C,r-16),a.moveTo(14,r-20),a.lineTo(14,r-12),a.moveTo(14+C,r-20),a.lineTo(14+C,r-12),a.stroke(),a.fillStyle=Zt.txt,a.textAlign="left",a.font="11px Helvetica, Arial, sans-serif",a.fillText(U>=1e3?U/1e3+" km":U+" m",14,r-24),a.textAlign="center",a.fillText("N",n-20,22),a.strokeStyle=Zt.dim,a.beginPath(),a.moveTo(n-20,40),a.lineTo(n-20,28),a.stroke()}function Rp(){let s=[],t=null,e=null,n=M("canvas",{class:"map"}),r={fix:ce("GPS",""),sat:ce("Satelliten",""),hd:ce("HDOP",""),spd:ce("Fahrt","m/s"),dist:ce("Distanz Home","m"),brg:ce("Peilung","\xB0")},a={gps:on("GPS"),home:on("Home"),rth:on("RTH")},l=M("p",{class:"note"},"Die Karte arbeitet ohne Internet: Norden oben, Raster in Metern. Das GPS funktioniert nur an der Oberfl\xE4che, unter Wasser bleibt der letzte Fix stehen."),h=["aus","taucht auf","wartet auf GPS","f\xE4hrt zu Home","angekommen"],u=M("div",{class:"page"},M("div",{class:"chips"},Object.values(a).map(d=>d.el)),M("div",{class:"stats"},Object.values(r).map(d=>d.el)),M("div",{class:"toolbar"},M("button",{class:"btn",onclick:async()=>{let d=await xe("HOME SET","Home gesetzt");d&&d.ok&&f()}},"Home hier setzen"),M("button",{class:"btn primary",onclick:()=>xe("MODE RTH","Heimfahrt gestartet")},"Heimfahrt (RTH)"),M("button",{class:"btn",onclick:()=>xe("MODE DEPTH","RTH beendet")},"RTH beenden"),M("span",{class:"sp"}),M("button",{class:"btn",onclick:()=>{s.length=0,e=null,m()}},"Spur l\xF6schen")),M("div",{class:"mapwrap"},n),l);async function f(){if(!tt.connected)return;let d=await tt.link.cmd("HOME");d.ok&&d.data&&d.data.set?t={lat:d.data.lat,lon:d.data.lon}:t=null,m()}function m(){xu(n,{pts:s,home:t,boat:e?{lat:e.lat,lon:e.lon,h:e.h}:null,empty:"Noch kein GPS Fix. Boot an die Oberfl\xE4che mit freier Sicht zum Himmel."})}return Pe.on("conn",()=>{tt.connected||(t=null,e=null)}),{el:u,show(){f(),setTimeout(m,30)},update(d){let g=d.gps;if(g){if(r.fix.set(g.ok?"Fix":"kein Fix",g.ok?"":"warn"),r.sat.set(String(g.sat)),r.hd.set(Et(g.hd,1)),r.spd.set(Et(g.spd,1)),r.dist.set(g.home?Et(g.dist,0):"\u2013"),r.brg.set(g.home?Et(g.brg,0):"\u2013"),a.gps.set(g.ok?`GPS ${g.sat} Sat`:"GPS kein Fix",g.ok?"ok":"warn"),a.home.set(g.home?"Home gesetzt":"Home fehlt",g.home?"ok":"warn"),a.rth.set(d.m==="RTH"?"RTH "+h[g.ph]:"RTH aus",d.m==="RTH"?"acc":""),g.ok){e={lat:g.lat,lon:g.lon,h:d.att[2]};let _=s[s.length-1];(!_||Math.hypot(...Object.values(Ds(_,g.lat,g.lon)))>.5)&&(s.push({lat:g.lat,lon:g.lon,c:d.m==="RTH"?Zt.warn:Zt.acc}),s.length>5e3&&s.shift())}else e&&(e.h=d.att[2]);g.home&&!t&&f(),m()}}}}var Cp=["MANUAL","STAB","DEPTH","MISSION","FAILSAFE","RTH"],Nb=[Zt.dim,"#5f7fa6",Zt.acc,"#9a86d6",Zt.bad,Zt.warn],Al=36,Pl=16,Ob="#9a86d6";function Ub(s){if(s.length<Pl||String.fromCharCode(...s.slice(0,4))!=="FBB1")throw new Error("Keine FATHOM Blackbox Datei");let t=new DataView(s.buffer,s.byteOffset,s.byteLength),e=t.getUint16(4,!0),n=t.getUint16(6,!0);if(e!==Al)throw new Error("Datensatzgr\xF6\xDFe "+e+" wird nicht unterst\xFCtzt");let r=Math.floor((s.length-Pl)/Al),a=[];for(let l=0;l<r;l++){let h=Pl+l*Al;a.push({t:t.getUint32(h,!0)/1e3,depth:t.getInt16(h+4,!0)/100,tgt:t.getInt16(h+6,!0)/100,roll:t.getInt16(h+8,!0)/10,pitch:t.getInt16(h+10,!0)/10,yaw:t.getUint16(h+12,!0)/10,vbat:t.getUint16(h+14,!0)/100,leak:t.getUint8(h+16)/255,mode:t.getUint8(h+17),flags:t.getUint8(h+18),fill:t.getUint8(h+19),thr:t.getInt8(h+20),pump:t.getInt8(h+21),rud:t.getInt8(h+22),stern:t.getInt8(h+23),bow:t.getInt8(h+24),lat:t.getInt32(h+25,!0)/1e7,lon:t.getInt32(h+29,!0)/1e7,sats:t.getUint8(h+33),rssi:t.getInt8(h+34)})}return{hz:n,recs:a}}var kb=s=>`t_s,tiefe_m,ziel_m,roll,nick,kurs,akku_v,leck,modus,flags,ballast,gas,pumpe,ruder,heck,bug,lat,lon,sat,rssi
`+s.recs.map(t=>[t.t,t.depth,t.tgt,t.roll,t.pitch,t.yaw,t.vbat,t.leak.toFixed(3),Cp[t.mode]||t.mode,t.flags,t.fill,t.thr,t.pump,t.rud,t.stern,t.bow,t.lat,t.lon,t.sats,t.rssi].join(",")).join(`
`),El=[{name:"Tiefe",unit:"m",inv:!0,min:0,s:[{k:"depth",n:"Tiefe",c:Zt.acc},{k:"tgt",n:"Ziel",c:Zt.warn,dash:1}]},{name:"Lage",unit:"\xB0",s:[{k:"pitch",n:"Nick",c:Zt.acc},{k:"roll",n:"Roll",c:Zt.warn}]},{name:"Kurs",unit:"\xB0",min:0,max:360,s:[{k:"yaw",n:"Kurs",c:Zt.ok}]},{name:"Antrieb und Ballast",unit:"%",s:[{k:"thr",n:"Gas",c:Zt.acc},{k:"pump",n:"Pumpe",c:Zt.warn},{k:"fill",n:"Ballast",c:Ob}]},{name:"Ruder",unit:"\xB0",s:[{k:"rud",n:"Seite",c:Zt.ok},{k:"stern",n:"Heck",c:Zt.acc},{k:"bow",n:"Bug",c:Zt.warn}]},{name:"Akku",unit:"V",s:[{k:"vbat",n:"Akku",c:Zt.ok}],dec:2},{name:"Leckage",unit:"",min:0,max:1,s:[{k:"leak",n:"Leck",c:Zt.bad}],dec:2}],Rr=104,Ns=18,ci=46;function Bb(s){let t=M("canvas",{class:"logcv"}),e=null,n=0,r=1,a=null,l=null,h=()=>window.devicePixelRatio||1,u=()=>El.length*Rr+Ns+22;function f(_){let y=e.recs,S=0,x=y.length-1;for(;S<x;){let v=S+x>>1;y[v].t<_?S=v+1:x=v}return S}function m(){let _=t.clientWidth||800,y=u(),S=h();(t.height!==y*S||t.width!==_*S)&&(t.width=_*S,t.height=y*S,t.style.height=y+"px");let x=t.getContext("2d");if(x.setTransform(S,0,0,S,0,0),x.fillStyle=Zt.bg,x.fillRect(0,0,_,y),!e)return;let v=e.recs,P=O=>ci+(O-n)/(r-n)*(_-ci-10),w=Math.max(0,f(n)-1),T=Math.min(v.length-1,f(r)+1);x.font="10px Helvetica, Arial, sans-serif";for(let O=w;O<T;O++){let A=P(v[O].t),E=P(v[O+1].t);x.fillStyle=Nb[v[O].mode]||Zt.dim,x.fillRect(A,0,Math.max(1,E-A+.5),Ns-4)}let U=-1;x.fillStyle=Zt.txt,x.textAlign="left";for(let O=w;O<=T;O++)if(v[O].mode!==U){U=v[O].mode;let A=P(v[O].t);A>ci-2&&A<_-60&&x.fillText(Cp[U]||"?",A+3,10)}El.forEach((O,A)=>{let E=Ns+A*Rr,B=E+Rr-14,q=O.min,Z=O.max;if(q===void 0||Z===void 0){let it=1e9,V=-1e9;for(let G=w;G<=T;G++)O.s.forEach(ut=>{let lt=v[G][ut.k];ut.k==="tgt"&&lt===0&&!(v[G].mode===2||v[G].mode===3)||(it=Math.min(it,lt),V=Math.max(V,lt))});it>V&&(it=0,V=1);let pt=(V-it)*.12||.5;q===void 0&&(q=it-pt),Z===void 0&&(Z=V+pt)}O.k0===void 0&&O.min===0&&q<0&&(q=0);let j=it=>O.inv?E+6+(it-q)/(Z-q||1)*(B-E-6):B-(it-q)/(Z-q||1)*(B-E-6);x.strokeStyle=Zt.grid,x.lineWidth=1,x.fillStyle=Zt.dim,x.textAlign="right";for(let it=0;it<=2;it++){let V=q+(Z-q)*it/2,pt=j(V);x.beginPath(),x.moveTo(ci,pt),x.lineTo(_-10,pt),x.stroke(),x.fillText(V.toFixed(O.dec??(Math.abs(Z-q)<5?1:0)),ci-5,pt+3)}if(x.textAlign="left",x.fillStyle=Zt.txt,x.font="600 11px Helvetica, Arial, sans-serif",x.fillText(O.name+(O.unit?" ("+O.unit+")":""),ci+6,E+12),x.font="10px Helvetica, Arial, sans-serif",x.save(),x.beginPath(),x.rect(ci,E,_-ci-10,Rr-12),x.clip(),O.s.forEach(it=>{x.strokeStyle=it.c,x.lineWidth=it.dash?1.2:1.6,x.setLineDash(it.dash?[4,3]:[]),x.beginPath();let V=!1,pt=-9;for(let G=w;G<=T;G++){let ut=P(v[G].t);if(ut-pt<.6&&G<T)continue;pt=ut;let lt=v[G][it.k];if(it.k==="tgt"&&!(v[G].mode===2||v[G].mode===3)){V=!1;continue}let ct=j(lt);V?x.lineTo(ut,ct):(x.moveTo(ut,ct),V=!0)}x.stroke(),x.setLineDash([])}),x.restore(),a!==null){let it=v[f(a)],V=_-14;x.textAlign="right";for(let pt=O.s.length-1;pt>=0;pt--){let G=O.s[pt],ut=G.n+" "+it[G.k].toFixed(O.dec??1);x.fillStyle=G.c,x.fillText(ut,V,E+12),V-=x.measureText(ut).width+12}}});let C=r-n,D=[1,2,5,10,15,30,60,120,300,600,1800].find(O=>C/O<12)||3600;x.fillStyle=Zt.dim,x.textAlign="center",x.strokeStyle=Zt.grid;for(let O=Math.ceil(n/D)*D;O<r;O+=D){let A=P(O);x.beginPath(),x.moveTo(A,Ns),x.lineTo(A,Ns+El.length*Rr-14),x.stroke(),x.fillText(O>=60?`${Math.floor(O/60)}:${String(Math.round(O%60)).padStart(2,"0")}`:O+" s",A,y-4)}if(a!==null){let O=P(a);x.strokeStyle=Zt.txt,x.lineWidth=1,x.beginPath(),x.moveTo(O,Ns-2),x.lineTo(O,Ns+El.length*Rr-14),x.stroke()}}let d=_=>{let y=t.getBoundingClientRect();return n+(_.clientX-y.left-ci)/(y.width-ci-10)*(r-n)};t.addEventListener("mousemove",_=>{if(!e)return;let y=Sn(d(_),e.recs[0].t,e.recs[e.recs.length-1].t);if(l){let S=(l.x-_.clientX)/(t.clientWidth-ci)*(l.v1-l.v0);n=l.v0+S,r=l.v1+S,g()}a=y,s(e.recs[f(y)]),m()}),t.addEventListener("mouseleave",()=>{a=null,s(null),m()}),t.addEventListener("mousedown",_=>{l={x:_.clientX,v0:n,v1:r}}),window.addEventListener("mouseup",()=>{l=null}),t.addEventListener("dblclick",()=>{e&&(n=e.recs[0].t,r=e.recs[e.recs.length-1].t,m())}),t.addEventListener("wheel",_=>{if(!e)return;_.preventDefault();let y=d(_),S=_.deltaY>0?1.25:.8;n=y-(y-n)*S,r=y+(r-y)*S,g(),m()},{passive:!1});function g(){let _=e.recs[0].t,y=e.recs[e.recs.length-1].t;r-n>y-_&&(n=_,r=y),n<_&&(r+=_-n,n=_),r>y&&(n-=r-y,r=y)}return window.addEventListener("resize",()=>m()),{el:t,set(_){e=_,n=_.recs[0].t,r=_.recs[_.recs.length-1].t,r<=n&&(r=n+1),a=null,m()},draw:m}}function Lp(){let s=null,t="",e=M("div",{class:"bblist"}),n=M("div",{class:"bar-t",style:{display:"none"}},M("div",{class:"bar-fill"})),r=M("div",{class:"stats"}),a=M("canvas",{class:"map small"}),l=M("p",{class:"note"}),h=Bb(w=>{u=w,P()}),u=null,f=!1,m=M("p",{class:"note"},"Noch keine Aufzeichnung geladen. Die Blackbox schreibt im ARM Zustand. Zum Auslesen DISARM, dann hier laden (USB oder WLAN)."),d=M("div",{style:{display:"none"}},r,M("section",{class:"card tight"},h.el,M("p",{class:"note"},"Mausrad zoomt, ziehen verschiebt, Doppelklick zeigt alles.")),M("section",{class:"card"},M("h3",null,"Spur (GPS Fixes an der Oberfl\xE4che)"),M("div",{class:"mapwrap"},a),l)),g=M("div",{class:"toolbar"},M("button",{class:"btn",onclick:()=>S()},"Liste aktualisieren"),M("button",{class:"btn",onclick:async()=>{let w=await y();w&&v(w.u8,w.name)}},"Datei \xF6ffnen"),M("span",{class:"sp"}),M("button",{class:"btn",onclick:()=>Jn(t.replace(/\.bin$/,"")+".csv",kb(s),"text/csv"),id:"bbcsv",disabled:!0},"CSV exportieren"),M("button",{class:"btn warnb",onclick:async()=>{confirm("Alle Blackbox Dateien im Boot l\xF6schen?")&&((await tt.link.cmd("BB CLEAR",8e3)).ok&&ie("Gel\xF6scht","ok"),S())}},"Boot Speicher leeren")),_=M("div",{class:"page"},g,M("section",{class:"card"},M("h3",null,"Aufzeichnungen im Boot"),e,n),m,d);async function y(){return new Promise(w=>{let T=M("input",{type:"file",accept:".bin"});T.onchange=async()=>{let U=T.files[0];if(!U)return w(null);w({name:U.name,u8:new Uint8Array(await U.arrayBuffer())})},T.click()})}async function S(){if(e.innerHTML="",!tt.connected){e.append(M("p",{class:"note"},"Nicht verbunden."));return}let[w,T]=[await tt.link.cmd("BB INFO"),await tt.link.cmd("BB LIST",4e3)];if(!T.ok||!Array.isArray(T.data)){e.append(M("p",{class:"note"},T.text.includes("DISARM")?"Erst DISARM, dann l\xE4sst sich die Blackbox auslesen.":"Keine Antwort: "+T.text));return}w.ok&&w.data&&e.append(M("p",{class:"note"},`Frei: ${(w.data.free/1024).toFixed(0)} von ${(w.data.total/1024).toFixed(0)} kB`)),T.data.length||e.append(M("p",{class:"note"},"Keine Aufzeichnungen.")),T.data.forEach(U=>{let C=parseInt((/bb_(\d+)/.exec(U.f)||[])[1]||0,10),D=Math.max(0,Math.floor((U.n-Pl)/Al));e.append(M("div",{class:"bbrow"},M("b",null,U.f),M("span",{class:"dim"},`${(U.n/1024).toFixed(1)} kB, ${D} Datens\xE4tze`),M("span",{class:"sp"}),M("button",{class:"btn primary",disabled:f,onclick:()=>x(C,U.f,!1)},"Laden und anzeigen"),M("button",{class:"btn",disabled:f,onclick:()=>x(C,U.f,!0)},"Als .bin sichern")))})}async function x(w,T,U){if(f)return;f=!0,n.style.display="";let C=n.firstChild;C.style.width="0",C.style.left="0";let D=Number((await tt.link.cmd("BB LIST",4e3)).data?.find(A=>A.f===T)?.n)||1,O=await tt.link.dump(w,A=>{C.style.width=Math.min(100,A/D*100)+"%"});if(f=!1,n.style.display="none",S(),!O.ok){ie(O.text,"bad",6e3);return}U&&(Jn(T,O.bytes,"application/octet-stream"),ie("Gespeichert: "+T,"ok")),v(O.bytes,T)}function v(w,T){try{s=Ub(w)}catch(Z){ie(Z.message,"bad",6e3);return}if(!s.recs.length){ie("Die Datei enth\xE4lt keine Datens\xE4tze","warn");return}t=T,m.style.display="none",d.style.display="",_.querySelector("#bbcsv").disabled=!1;let U=s.recs,C=U[U.length-1].t-U[0].t,D=0,O=99,A=0,E=0,B=0,q=null;U.forEach((Z,j)=>{D=Math.max(D,Z.depth),Z.vbat>0&&(O=Math.min(O,Z.vbat)),A=Math.max(A,Math.abs(Z.pitch)),j&&Z.mode===4&&U[j-1].mode!==4&&B++,Z.flags&4&&Z.sats&&(q&&(E+=Math.hypot((Z.lat-q.lat)*111200,(Z.lon-q.lon)*75900)),q=Z)}),r.innerHTML="",[["Datei",T],["Dauer",us(C)],["Rate",s.hz+" Hz"],["Max Tiefe",Et(D,2)+" m"],["Min Akku",Et(O,2)+" V"],["Max Nick",Et(A,0)+" \xB0"],["GPS Strecke",Et(E,0)+" m"],["Failsafe",String(B)]].forEach(([Z,j])=>r.append(M("div",{class:"stat"},M("span",null,Z),M("div",null,M("b",{style:{fontSize:Z==="Datei"?"14px":""}},j))))),h.set(s),setTimeout(P,30)}function P(){if(!s)return;let w=s.recs.filter(C=>C.flags&4&&C.sats&&C.lat);l.textContent=w.length?`${w.length} Fixes. Der Cursor im Diagramm wandert auf die n\xE4chste bekannte Position.`:"Kein GPS Fix in dieser Aufzeichnung.";let T=w.map(C=>({lat:C.lat,lon:C.lon,c:C.mode===5?Zt.warn:Zt.acc})),U=null;if(u&&w.length){let C=w[0];w.forEach(D=>{Math.abs(D.t-u.t)<Math.abs(C.t-u.t)&&(C=D)}),U={lat:C.lat,lon:C.lon}}xu(a,{pts:T,home:T.length?{lat:T[0].lat,lon:T[0].lon}:null,cursor:U,empty:"Kein GPS Fix in dieser Aufzeichnung"})}return{el:_,show(){S(),s&&(h.draw(),P())},update(){}}}var hi=Jm(Dp(),1);var Up=Math.PI/180,kp=(s,t)=>({x:(t.lon-s.lon)*111200*Math.cos(s.lat*Up),y:(t.lat-s.lat)*111200}),bu=(s,t)=>{let e=kp(s,t);return{dist:Math.hypot(e.x,e.y),brg:(Math.atan2(e.x,e.y)/Up+360)%360}},vo=(s,t,e="")=>M("button",{class:"btn "+e,onclick:t},s),Mu=(s,t)=>`https://wmts.geo.admin.ch/1.0.0/${s}/default/current/3857/{z}/{x}/{y}.${t}`,Np='\xA9 <a href="https://www.swisstopo.admin.ch" target="_blank">swisstopo</a>',Fb='Seetiefen: swissBATHY3D \xA9 <a href="https://www.swisstopo.admin.ch/de/hoehenmodell-swissbathy3d" target="_blank">swisstopo</a> (Quelle: Bundesamt f\xFCr Landestopografie)',Op={"Landeskarte (swisstopo)":()=>hi.default.tileLayer(Mu("ch.swisstopo.pixelkarte-farbe","jpeg"),{maxZoom:19,maxNativeZoom:18,attribution:Np}),"Luftbild (swisstopo)":()=>hi.default.tileLayer(Mu("ch.swisstopo.swissimage","jpeg"),{maxZoom:19,maxNativeZoom:18,attribution:Np}),OpenStreetMap:()=>hi.default.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,referrerPolicy:"strict-origin",attribution:'\xA9 <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> Mitwirkende'})},zb=()=>hi.default.tileLayer(Mu("ch.swisstopo.swissbathy3d-reliefschattierung","png"),{maxZoom:19,maxNativeZoom:17,opacity:.7,attribution:Fb}),Bp=!1,Hb=()=>{if(Bp)return!0;try{return sessionStorage.getItem("fathom.map")==="1"}catch{return!1}},yu=(s,t)=>hi.default.divIcon({className:"",html:`<div class="wpi ${t||""}">${s}</div>`,iconSize:[26,26],iconAnchor:[13,13]});function Vb(s,t,e){let n=e.ms,r=[{t:"WAIT",v:[e.wait,0,0,0]}],a=s,l=0,h=[];return t.forEach((u,f)=>{let m=bu(a,u),d=Sn(u.spd,1,100);r.push({t:"TURN",v:[Math.round(m.brg),0,15,12]});let g=0;Math.abs(u.depth-l)>.05&&(r.push({t:"DIVE",v:[u.depth,e.rate,e.pitch,d]}),g=Math.abs(u.depth-l)/e.rate);let _=d*n,y=Math.max(1,Math.round(m.dist/_-g));y>7200&&h.push(`Weg ${f+1} dauert \xFCber 2 h, Schritt wird auf 7200 s gek\xFCrzt`),r.push({t:"CRUISE",v:[d,Math.round(m.brg),Math.min(y,7200),0]}),l=u.depth,a=u}),e.beacon&&r.push({t:"BEACON",v:[2,0,0,0]}),r.push({t:"SURFACE",v:[0,0,0,0]}),{steps:r,notes:h}}function Fp(){let s=An.get("mapplan",{start:null,wps:[],base:"Landeskarte (swisstopo)",shade:!0,op:.7,dd:5,ds:25,beacon:!0,rth:!0}),t=null,e=null,n=null,r=[],a=null,l=null,h=null,u="wp",f=0,m=M("div",{class:"leaflet-host"}),d=M("div",{class:"wptable"}),g=M("div",{class:"warns"}),_={net:on("Karte"),gps:on("Boot GPS")},y={n:ce("Wegpunkte"),len:ce("Strecke","m"),t:ce("Fahrzeit"),z:ce("Max Tiefe","m"),e:ce("Ende zu Start","m")},S=()=>An.set("mapplan",s),x=()=>tt.get("spd.ms_per_pct",.014),v=M("select",{class:"in sm",onchange:()=>{s.base=v.value,B(),S()}},Object.keys(Op).map(lt=>M("option",{value:lt,selected:lt===s.base},lt))),P=M("input",{type:"checkbox",checked:s.shade,onchange:()=>{s.shade=P.checked,q(),S()}}),w=M("input",{type:"range",min:.1,max:1,step:.05,value:s.op,class:"sl",oninput:()=>{s.op=+w.value,n&&n.setOpacity(s.op),S()}}),T=M("input",{class:"in num",type:"number",min:0,max:90,step:.5,value:s.dd,onchange:()=>{s.dd=Sn(+T.value,0,90),S()}}),U=M("input",{class:"in num",type:"number",min:1,max:100,step:1,value:s.ds,onchange:()=>{s.ds=Sn(+U.value,1,100),S()}}),C=M("input",{type:"checkbox",checked:s.beacon,onchange:()=>{s.beacon=C.checked,S()}}),D=M("input",{type:"checkbox",checked:s.rth,onchange:()=>{s.rth=D.checked,S()}}),O=(lt,ct)=>{let Mt=vo(ct,()=>{u=lt,E()});return Mt.dataset.k=lt,Mt},A=[O("start","Startpunkt setzen"),O("wp","Wegpunkte setzen")],E=()=>A.forEach(lt=>lt.classList.toggle("primary",lt.dataset.k===u));function B(){t&&(e&&t.removeLayer(e),e=Op[s.base](),e.on("tileerror",Z),e.addTo(t),e.bringToBack())}function q(){t&&(n&&(t.removeLayer(n),n=null),s.shade&&(n=zb(),n.setOpacity(s.op),n.on("tileerror",Z),n.addTo(t)))}function Z(){++f===8&&(_.net.set("keine Kacheln: Internet?","warn"),ie("Kartenkacheln laden nicht. Der Planer braucht Internet, nicht das Boot WLAN.","warn",6e3))}function j(){if(!t)return;r.forEach(ct=>t.removeLayer(ct)),r=[],a&&(t.removeLayer(a),a=null);let lt=[];if(s.start){let ct=hi.default.marker([s.start.lat,s.start.lon],{icon:yu("S","st"),draggable:!0}).addTo(t);ct.on("dragend",()=>{let Mt=ct.getLatLng();s.start={lat:Mt.lat,lon:Mt.lng},S(),j()}),r.push(ct),lt.push([s.start.lat,s.start.lon])}s.wps.forEach((ct,Mt)=>{let wt=hi.default.marker([ct.lat,ct.lon],{icon:yu(Mt+1),draggable:!0}).addTo(t);wt.on("dragend",()=>{let J=wt.getLatLng();ct.lat=J.lat,ct.lon=J.lng,S(),j()}),r.push(wt),lt.push([ct.lat,ct.lon])}),lt.length>1&&(a=hi.default.polyline(lt,{color:"#ffb02e",weight:3,dashArray:"8 6"}).addTo(t)),V(),it()}function it(){let lt=s.start,ct=0,Mt=0,wt=0,J=lt,Y=[];s.wps.forEach((W,yt)=>{if(!J){J=W;return}let dt=bu(J,W);ct+=dt.dist,Mt+=dt.dist/(Math.max(W.spd,1)*x()),wt=Math.max(wt,W.depth),J=W}),y.n.set(String(s.wps.length)),y.len.set(Et(ct,0)),y.t.set(ct?us(Mt):"\u2013"),y.z.set(Et(wt,1),wt>tt.get("lim.depth",3)?"bad":""),y.e.set(lt&&s.wps.length?Et(Math.hypot(...Object.values(kp(lt,s.wps[s.wps.length-1]))),0):"\u2013"),g.innerHTML="";let at=W=>g.append(M("div",{class:"w"},W));wt>tt.get("lim.depth",3)&&at(`Tiefe ${Et(wt,1)} m liegt \xFCber dem Parameter lim.depth (${Et(tt.get("lim.depth",3),1)} m): das Boot l\xF6st dort Failsafe aus. Erst lim.depth erh\xF6hen.`),s.wps.some(W=>W.spd>tt.get("lim.throttle",35))&&at(`Fahrt \xFCber lim.throttle (${tt.get("lim.throttle",35)} %): wird begrenzt, Fahrzeit stimmt dann nicht.`),s.wps.length*3+3>64&&at("Zu viele Wegpunkte: Boot speichert h\xF6chstens 64 Schritte (je Wegpunkt bis 3 Schritte)."),s.wps.length&&!s.start&&at('Startpunkt fehlt: erst "Startpunkt setzen", dann Wegpunkte.'),tt.get("spd.ms_per_pct",.014)===.014&&!tt.connected&&at("Fahrtfaktor spd.ms_per_pct steht auf Standard (0.014 m/s je %). Echten Wert mit einer gemessenen Strecke bestimmen, sonst stimmen die Zeiten nicht.")}function V(){if(d.innerHTML="",!s.wps.length){d.append(M("p",{class:"note"},"Noch keine Wegpunkte. Karte antippen, um Wegpunkte zu setzen. Marker lassen sich verschieben."));return}let lt=M("tr",null,["#","Tiefe (m)","Fahrt (%)","Weg (m)","Kurs (\xB0)",""].map(wt=>M("th",null,wt))),ct=M("tbody"),Mt=s.start;s.wps.forEach((wt,J)=>{let Y=Mt?bu(Mt,wt):{dist:0,brg:0};Mt=wt;let at=M("input",{class:"in num",type:"number",min:0,max:90,step:.5,value:wt.depth,onchange:()=>{wt.depth=Sn(+at.value,0,90),S(),it()}}),W=M("input",{class:"in num",type:"number",min:1,max:100,step:1,value:wt.spd,onchange:()=>{wt.spd=Sn(+W.value,1,100),S(),it()}});ct.append(M("tr",null,M("td",null,M("b",null,J+1)),M("td",null,at),M("td",null,W),M("td",null,Et(Y.dist,0)),M("td",null,Et(Y.brg,0)),M("td",null,M("button",{class:"ib del",title:"l\xF6schen",onclick:()=>{s.wps.splice(J,1),S(),j()}},"\u2715"))))}),d.append(M("table",{class:"ptable"},M("thead",null,lt),ct))}async function pt(){if(!s.start||!s.wps.length)return ie("Startpunkt und mindestens einen Wegpunkt setzen","warn");let lt=Vb(s.start,s.wps,{ms:x(),wait:10,rate:.15,pitch:15,beacon:s.beacon});if(lt.steps.length>64)return ie(`${lt.steps.length} Schritte, maximal 64. Weniger Wegpunkte setzen.`,"bad",5e3);An.set("mission",lt.steps),Pe.emit("mission:set",lt.steps),lt.notes.forEach(ct=>ie(ct,"warn",5e3)),s.rth?tt.connected?await xe("SET mis.end_rth 1","RTH nach Mission aktiviert"):ie("Nach Verbinden mis.end_rth auf 1 setzen, sonst bleibt das Boot nach Missionsende an der Oberfl\xE4che stehen.","warn",7e3):tt.connected&&await xe("SET mis.end_rth 0"),ie(`Mission mit ${lt.steps.length} Schritten \xFCbernommen`,"ok"),Pe.emit("goto","mission")}function G(){Jn("fathom_plan.json",JSON.stringify({start:s.start,wps:s.wps},null,1))}return{el:M("div",{class:"page"},M("div",{class:"chips"},Object.values(_).map(lt=>lt.el)),M("div",{class:"stats"},Object.values(y).map(lt=>lt.el)),M("div",{class:"toolbar"},A,M("span",{class:"sp"}),v,M("label",{class:"chk"},P," Seerelief"),w),M("div",{class:"mapwrap"},m),M("div",{class:"toolbar"},M("label",{class:"fld inl"},M("span",null,"Tiefe neuer Punkt (m)"),T),M("label",{class:"fld inl"},M("span",null,"Fahrt neuer Punkt (%)"),U),M("label",{class:"chk"},C," Beacon am Ende"),M("label",{class:"chk"},D," Heimfahrt nach Ende (RTH)"),M("span",{class:"sp"}),vo("Letzten l\xF6schen",()=>{s.wps.pop(),S(),j()}),vo("Alles l\xF6schen",()=>{confirm("Plan l\xF6schen?")&&(s.wps=[],s.start=null,S(),j())}),vo("Plan sichern",G),vo("Zur Mission machen",pt,"primary")),g,d,M("p",{class:"note"},"Kurs und Zeit werden aus Start, Wegpunkten und Fahrtfaktor gerechnet (Koppelnavigation). Unter Wasser gibt es kein GPS, Str\xF6mung und Drift werden nicht ausgeglichen. An der Oberfl\xE4che korrigiert das Boot nur beim Heimfahren (RTH). Die Karte l\xE4dt nur mit Internet, plane also zuhause und verbinde danach mit dem Boot WLAN. Kartenquellen: swisstopo (Landeskarte, Luftbild, swissBATHY3D Seerelief) und OpenStreetMap.")),show(){if(!t&&!Hb()){m.firstChild||m.append(M("div",{class:"mapgate"},M("h4",null,"Karte laden"),M("p",null,"Die Karte l\xE4dt Kartenkacheln direkt von swisstopo (Bundesamt f\xFCr Landestopografie) und auf Wunsch von OpenStreetMap. Dabei erhalten diese Dienste Ihre IP-Adresse. Ohne Klick wird nichts geladen."),M("button",{class:"btn primary",onclick:()=>{try{sessionStorage.setItem("fathom.map","1")}catch{Bp=!0}m.innerHTML="",this.show()}},"Karte laden")));return}t||(t=hi.default.map(m,{center:s.start?[s.start.lat,s.start.lon]:[47,8.38],zoom:s.start?15:11,attributionControl:!0}),t.attributionControl.setPrefix(!1),t.on("click",lt=>{let ct={lat:lt.latlng.lat,lon:lt.latlng.lng};u==="start"||!s.start?(s.start=ct,u==="start"&&(u="wp",E())):s.wps.push({...ct,depth:s.dd,spd:s.ds}),S(),j()}),B(),q(),E(),j(),_.net.set("Karte: swisstopo","ok")),setTimeout(()=>t.invalidateSize(),60)},update(lt){let ct=lt.gps;!ct||!t||(_.gps.set(ct.ok?`Boot GPS ${ct.sat} Sat`:"Boot GPS kein Fix",ct.ok?"ok":"warn"),ct.ok&&(l?l.setLatLng([ct.lat,ct.lon]):l=hi.default.marker([ct.lat,ct.lon],{icon:yu("B","boat"),interactive:!1}).addTo(t)))}}}var Cr=[["Bereit","eingeschaltet, nicht scharf"],["Scharf","bereit zum Fahren"],["Test","Testbetrieb am Tisch"],["Mission","Mission l\xE4uft"],["Getaucht","scharf und tiefer als 1 m"],["Heimfahrt","RTH aktiv"],["Wiederfinden","nach der Mission an der Oberfl\xE4che oder Befehl"],["Warnung","Akku niedrig oder Befehl"],["Funkverlust","scharf an der Oberfl\xE4che ohne Crossfire"],["Failsafe","Notaufstieg aktiv"],["Alarm","Leckage, Not-Aus oder Befehl"],["Not-Aus","alles stromlos"],["Boot schweigt","nur Pod: 8 s kein Signal vom Boot"]],ui=[["LED 1","am Rumpf"],["LED 2","am Rumpf"],["Strobe","Pod, 3 W weiss"],["Pixel","Pod, SK6812"]],zp=[["Erben","wie der Zustand darunter"],["Aus",""],["Rhythmus","16 Schritte"],["Atmen","weich auf und ab"],["Tiefe z\xE4hlen","ein Blitz je n Meter"],["Fehlercode","n Blitze = Code"]],wu=[["Dauerlicht",65535,100],["Kurzer Blitz alle 3 s",1,188],["Doppelblitz",5,125],["Dreifachblitz",21,125],["Schnell blinkend",21845,125],["Langsam blinkend",255,125],["Herzschlag",11,90],["Morse U (Under Pressure)",117,120],["Strobe doppelt",257,63],["Unruhig",10825,60]],Vp=[["Rot","#ff0000"],["Orange","#ff6a00"],["Gelb","#ffd000"],["Gr\xFCn","#00ff00"],["Cyan","#00ffff"],["Blau","#0000ff"],["Violett","#8a00ff"],["Weiss","#ffffff"]],Os=12,rs=s=>{let t=tt.par[s];if(t!==void 0)return+t;let e=Bn.find(n=>n.k===s);return e?e.d:0},Su=s=>s.toString(16).padStart(2,"0"),Gb=s=>"#"+Su(s[3])+Su(s[4])+Su(s[5]),Tu=s=>[parseInt(s.slice(1,3),16),parseInt(s.slice(3,5),16),parseInt(s.slice(5,7),16)];function Gp(s,t,e,n){let r=Math.round(Math.min(100,s[7])*255/100),a=Math.max(20,s[9]);switch(s[2]){case 2:return s[8]>>Math.floor(t/a)%16&1?r:0;case 3:{let l=a*16,h=t%l/l;return Math.round(r*(.5-.5*Math.cos(2*Math.PI*h)))}case 4:{if(e<.5)return 0;let l=Math.min(50,Math.max(1,s[9])),h=Math.min(9,Math.floor(e/l)+1),u=t%4e3;return u<h*400&&u%400<150?r:0}case 5:{if(n<=0)return 0;let l=t%3e3;return l<n*280&&l%280<120?r:0}default:return 0}}var Us=(s,t,e)=>s.find(n=>n[0]===t&&n[1]===e);function Wp(s,t,e){for(let n=Cr.length-1;n>=0;n--)if(t>>n&1){let r=Us(s,n,e);if(r&&r[2]!==0)return r}return null}function Wb(s,t,e,n,r,a){let l=Wp(s,t,e);if(!l)return{lvl:0,rgb:[0,0,0],c:null};let h=Gp(l,n,r,a),u=l[6];return{lvl:h,rgb:[Math.min(255,l[3]+u),Math.min(255,l[4]+u),Math.min(255,l[5]+u)].map(f=>Math.round(f*h/255)),c:l}}function Hp(s,t){if(!s)return"dunkel";let e=Math.max(20,s[9])*16/1e3,n=t===2||t<=1&&rs("led.hw")===0?"":Zb(s)+", ";switch(s[2]){case 1:return"aus";case 2:{if(s[8]===0)return"aus";if(s[8]===65535)return n+"Dauerlicht";let r=wu.find(l=>l[1]===s[8]&&l[2]===s[9]);if(r)return n+r[0].toLowerCase();let a=0;for(let l=0;l<16;l++)s[8]>>l&1&&!(s[8]>>(l+15)%16&1)&&a++;return a>=4?n+`blinkt ${Et(a/e,1)} Mal pro Sekunde`:n+(a===1?"ein Blitz":a+" Blitze")+` alle ${Et(e,1)} s`}case 3:return n+`atmet, ${Et(e,1)} s`;case 4:return n+`Tiefe: ein Blitz je ${s[9]} m`;case 5:return n+"Fehlercode: n Blitze alle 3 s";default:return"erbt"}}function Zb(s){if(s[6]>0&&s[3]+s[4]+s[5]===0)return"weiss";let t="farbig",e=1e9;for(let[n,r]of Vp){let[a,l,h]=Tu(r),u=(a-s[3])**2+(l-s[4])**2+(h-s[5])**2;u<e&&(e=u,t=n.toLowerCase())}return t}function Xb(s,t){let e=(n,r,a,l,h,u,f=100)=>{let m=Us(t,n,r);m[2]=a,l!==void 0&&(m[8]=l),h!==void 0&&(m[9]=h),u&&(m[3]=u[0],m[4]=u[1],m[5]=u[2],m[6]=u[3]),m[7]=f};if(s==="tarnung"){for(let n=0;n<10;n++)for(let r of[0,2,3])(n!==9||r===0)&&e(n,r,n===0?1:0);e(0,1,1),e(7,1,0),e(9,3,0)}s==="buddy"&&(e(4,0,4,0,5,[0,255,0,0]),e(3,0,3,0,120,[0,160,255,0],70),e(6,2,2,1,63),e(6,3,3,0,100,[0,120,255,0]),e(4,3,2,1,250,[0,255,120,0],40))}function Zp(){let s=Wr(),t=[3,0],e=0,n=performance.now(),r=!1,a=null,l=11,h=12,u=2,f=()=>ct.classList.add("primary"),m=new Map,d=!1;async function g(Y){if(tt.connected&&(m.set(Y[0]*16+Y[1],Y),!d)){for(d=!0;m.size;){let[at,W]=m.entries().next().value;m.delete(at),await tt.link.cmd(`LIGHT SET ${W.slice(0,8).join(" ")} 0x${W[8].toString(16)} ${W[9]}`,1500)}d=!1,f()}}async function _(){if(!tt.connected)return;let Y=await tt.link.cmd("LIGHT GET",3e3);Y.ok&&Array.isArray(Y.data)&&(s=Y.data.map(at=>at.slice()),J())}let y=Y=>{g(Y),J()},S=M("table",{class:"lgrid"}),x=[];function v(){S.innerHTML="",x.length=0,S.append(M("thead",null,M("tr",null,M("th",null,"Zustand"),...ui.map(([at,W])=>M("th",null,at,M("small",null,W))))));let Y=M("tbody");Cr.forEach(([at,W],yt)=>{let dt=M("tr",null,M("th",{scope:"row"},M("b",null,at),M("small",null,W)));ui.forEach((et,Tt)=>{if(yt===Os&&Tt<2){dt.append(M("td",{class:"na"},""));return}let xt=Us(s,yt,Tt),It=M("span",{class:"mini"}),F=M("button",{class:"lcell"+(t[0]===yt&&t[1]===Tt?" on":"")+(xt[2]===0?" inh":""),title:`${at}, ${ui[Tt][0]}`,onclick:()=>{t=[yt,Tt],v(),w()}},It,M("span",null,xt[2]===0?"erbt":zp[xt[2]][0]));x.push([It,yt,Tt]),dt.append(M("td",null,F))}),Y.append(dt)}),S.append(Y)}let P=M("div",{class:"led-ed"});function w(){let[Y,at]=t,W=Us(s,Y,at);P.innerHTML="";let yt=at<=1&&rs("led.hw")===0,dt=at===2,et=at>=2;P.append(M("h4",null,`${Cr[Y][0]} \xB7 ${ui[at][0]}`));let Tt=M("div",{class:"seg wrap"});if(zp.forEach(([xt],It)=>{et&&It>=4||Tt.append(M("button",{class:"segb"+(W[2]===It?" on":""),onclick:()=>{W[2]=It,It===4&&(W[9]<1||W[9]>50)&&(W[9]=5),y(W),w()}},xt))}),P.append(M("div",{class:"sigrow"},M("span",{class:"sigl"},"Art"),Tt)),W[2]===0){P.append(M("p",{class:"note"},"Erben: Dieses Licht zeigt, was der n\xE4chsttiefere aktive Zustand festlegt. So kann eine Warnung zum Beispiel nur LED 2 belegen, und LED 1 zeigt weiter die Mission."));return}if(W[2]===1){P.append(M("p",{class:"note"},"Aus: Das Licht bleibt dunkel, solange dieser Zustand der h\xF6chste ist."));return}if(yt)P.append(M("p",{class:"note"},"Einfarbige 5-mm-LED: Die Farbe kommt von der LED selbst. F\xFCr freie Farben unten bei \xABHardware\xBB RGB-Pixel w\xE4hlen."));else if(dt)P.append(M("p",{class:"note"},"Der Strobe ist eine weisse 3-W-LED: einstellbar sind Helligkeit und Rhythmus."));else{let xt=M("input",{type:"color",class:"cpick",value:Gb(W),oninput:()=>{let[F,ae,jt]=Tu(xt.value);W[3]=F,W[4]=ae,W[5]=jt,y(W)}}),It=M("div",{class:"swatches"},Vp.map(([F,ae])=>M("button",{class:"sw",title:F,"aria-label":F,style:{background:ae},onclick:()=>{let[jt,Ut,Ft]=Tu(ae);W[3]=jt,W[4]=Ut,W[5]=Ft,W[6]=0,y(W),w()}})));P.append(M("div",{class:"sigrow"},M("span",{class:"sigl"},"Farbe"),xt,It)),(at===3||rs("led.hw")===2)&&P.append(U("Weiss-Kanal (RGBW)",0,255,5,W[6],F=>`${F}`,F=>{W[6]=F,y(W)}))}if(P.append(U("Helligkeit",1,100,1,W[7],xt=>`${xt} %`,xt=>{W[7]=xt,y(W)})),W[2]===2||W[2]===3){if(W[2]===2){let xt=M("div",{class:"steps16"});for(let F=0;F<16;F++)xt.append(M("button",{class:"st"+(W[8]>>F&1?" on":""),title:`Schritt ${F+1}`,"aria-pressed":W[8]>>F&1?"true":"false",onclick:()=>{W[8]^=1<<F,y(W),w()}}));P.append(M("div",{class:"sigrow col"},M("span",{class:"sigl"},"Rhythmus: 16 Schritte"),xt));let It=M("select",{class:"in sm",onchange:()=>{let F=wu[+It.value];F&&(W[8]=F[1],W[9]=F[2],y(W),w())}},M("option",{value:""},"Vorlage w\xE4hlen \u2026"),wu.map(([F],ae)=>M("option",{value:ae},F)));P.append(M("div",{class:"sigrow"},M("span",{class:"sigl"},"Vorlage"),It,M("button",{class:"btn",onclick:()=>{W[8]=(W[8]<<1|W[8]>>15)&65535,y(W),w()}},"Versetzen"),M("button",{class:"btn",onclick:()=>{W[8]=~W[8]&65535,y(W),w()}},"Umkehren")))}P.append(U(W[2]===3?"Tempo: Periode":"Schrittl\xE4nge",20,1e3,5,W[9],xt=>W[2]===3?`${Et(xt*16/1e3,1)} s`:`${xt} ms, Periode ${Et(xt*16/1e3,2)} s`,xt=>{W[9]=xt,y(W)}))}W[2]===4&&P.append(U("Ein Blitz je",1,20,1,W[9],xt=>`${xt} m`,xt=>{W[9]=xt,y(W)}),M("p",{class:"note"},"Unter Wasser z\xE4hlt das Licht die Tiefe: bei 12 m und 5 m pro Blitz sind es drei Blitze, dann Pause. Alle 4 Sekunden.")),W[2]===5&&P.append(M("p",{class:"note"},"Fehlercode: 1 Akku, 2 Leckage, 3 Tiefe, 4 Sensor, 5 Funkverlust, 6 Befehl. So viele Blitze alle 3 Sekunden.")),P.append(M("div",{class:"sigrow"},M("button",{class:"btn",onclick:()=>{T=W.slice(2),ie("Zelle kopiert","ok")}},"Kopieren"),M("button",{class:"btn",onclick:()=>{if(T){for(let xt=0;xt<T.length;xt++)W[xt+2]=T[xt];et&&W[2]>=4&&(W[2]=2),y(W),w()}}},"Einf\xFCgen"),M("button",{class:"btn",onclick:()=>{for(let xt=0;xt<Cr.length;xt++){if(xt===Y||xt===Os&&at<2)continue;let It=Us(s,xt,at);for(let F=2;F<10;F++)It[F]=W[F];g(It)}J(),ie(`F\xFCr alle Zust\xE4nde von ${ui[at][0]} \xFCbernommen`,"ok")}},"F\xFCr alle Zust\xE4nde")))}let T=null;function U(Y,at,W,yt,dt,et,Tt){let xt=M("b",{class:"sv"},et(dt)),It=M("input",{type:"range",class:"sl",min:at,max:W,step:yt,value:dt,oninput:()=>{xt.textContent=et(+It.value),Tt(+It.value)}});return M("div",{class:"sld"},M("div",{class:"sh"},M("span",null,Y),xt),It)}let C=ui.map(([Y],at)=>{let W=M("div",{class:"lamp big"});return{el:W,fig:M("figure",null,W,M("figcaption",null,Y))}}),D=ui.map(()=>M("span")),O=M("div",{class:"stchk"});function A(){O.innerHTML="",Cr.forEach(([Y],at)=>{if(at===0)return;let W=M("input",{type:"checkbox",checked:(l>>at&1)===1,disabled:r,onchange:()=>{l^=1<<at,n=performance.now(),V()}});O.append(M("label",{class:"chk"},W," "+Y))})}let E=M("input",{type:"checkbox",onchange:()=>{r=E.checked,A()}}),B=M("button",{class:"btn",onclick:async()=>{let Y=await xe(`LIGHT SHOW ${l|1} 10`);Y&&Y.ok&&ie("Das Boot zeigt diese Zust\xE4nde 10 s lang","ok")}},"Am Boot zeigen (10 s)");function q(Y){e=requestAnimationFrame(q);let at=Math.floor(Y-n),W=r&&a&&a.ls!==void 0?a.ls:l|1,yt=r&&a?+a.d||0:W>>4&1?h:0,dt=r&&a?a.fs?6:0:u,et=rs("led.master"),Tt=yt<.5;ui.forEach((xt,It)=>{let F=Wb(s,W>>Os&1&&It>=2?1<<Os|1:W,It,at,yt,dt);It<=1&&(et===0||et===2&&!Tt)&&(F={lvl:0,rgb:[0,0,0],c:null}),j(C[It].el,F,It),D[It].textContent=`${ui[It][0]}: ${F.c?Hp(F.c,It):"dunkel"}`});for(let[xt,It,F]of x){let ae=Us(s,It,F),jt=ae[2]===0?0:Gp(ae,at,h,u);j(xt,{lvl:jt,rgb:Z(ae,F,jt),c:ae},F)}}function Z(Y,at,W){let yt=Y[6];return(at<=1&&rs("led.hw")===0?at===0?[40,255,110]:[255,50,40]:at===2?[235,248,255]:[Math.min(255,Y[3]+yt),Math.min(255,Y[4]+yt),Math.min(255,Y[5]+yt)]).map(et=>Math.round(et*W/255))}function j(Y,at,W){let yt=at.c?Z(at.c,W,at.lvl):[0,0,0],dt=at.lvl>8;Y.style.background=dt?`radial-gradient(circle at 40% 35%, rgba(255,255,255,${(at.lvl/255*.8).toFixed(2)}), rgb(${yt.join(",")}) 55%, rgb(${yt.map(et=>Math.round(et*.35)).join(",")}))`:"#0d151c",Y.style.boxShadow=dt?`0 0 ${Math.round(6+at.lvl/16)}px ${Math.round(at.lvl/64)}px rgba(${yt.join(",")},0.6)`:"none"}let it=M("tbody");function V(){it.innerHTML="",Cr.forEach(([Y],at)=>{let W=at===Os?1<<Os|1:1<<at|1|(at>=1&&at<=10?2:0);it.append(M("tr",null,M("th",{scope:"row"},Y),...ui.map((yt,dt)=>M("td",null,at===Os&&dt<2?"":Hp(Wp(s,W,dt),dt)))))})}let pt=(Y,at,W)=>{let yt=M("div",{class:"seg wrap"}),dt=()=>{yt.innerHTML="",at.forEach(([et,Tt])=>yt.append(M("button",{class:"segb"+(rs(Y)===et?" on":""),onclick:async()=>{await G(Y,et),dt(),w()}},Tt)))};return dt(),M("div",null,yt,W?M("p",{class:"note"},W):null)};async function G(Y,at){if(tt.connected){let W=await Yr(Y,at);W&&W.ok&&f()}else tt.par[Y]=at}let ut=(Y,at,W)=>{let yt=M("input",{type:"checkbox",checked:rs(Y)>.5,onchange:()=>G(Y,yt.checked?1:0)});return M("label",{class:"tog"},yt,M("span",{class:"tsw","aria-hidden":"true"}),M("span",{class:"tl"},M("b",null,at),W?M("small",null,W):null))},lt=(Y,at,W,yt,dt,et)=>U(at,W,yt,dt,rs(Y),et,Tt=>G(Y,Tt)),ct=M("button",{class:"btn",onclick:async()=>{let Y=await xe("SAVE","Lichter und Parameter im Boot gespeichert");Y&&Y.ok&&ct.classList.remove("primary")}},"Im Boot speichern"),Mt=M("select",{class:"in sm",onchange:async()=>{let Y=Mt.value;if(Mt.value="",!!Y){if(s=Wr(),Y!=="standard"&&Xb(Y,s),tt.connected){await xe("LIGHT DEFAULTS");for(let at of s)g(at)}J(),ie("Vorlage geladen","ok")}}},M("option",{value:""},"Vorlage \u2026"),M("option",{value:"standard"},"Standard"),M("option",{value:"tarnung"},"Tarnung"),M("option",{value:"buddy"},"Tauchbegleiter")),wt=M("div",{class:"page"},M("div",{class:"toolbar"},M("span",{class:"note"},"Jedes Licht in jedem Zustand frei einstellen. Ohne Verbindung nur Vorschau."),M("span",{class:"sp"}),Mt,M("button",{class:"btn",onclick:()=>Jn("fathom_lichter.json",JSON.stringify(s))},"Export"),M("button",{class:"btn",onclick:async()=>{let Y=await Zs(".json");if(Y)try{let at=JSON.parse(Y);if(!Array.isArray(at))throw 0;at.forEach(W=>{let yt=Us(s,W[0],W[1]);if(yt){for(let dt=2;dt<10;dt++)yt[dt]=+W[dt];g(yt)}}),J(),ie("Lichter importiert","ok")}catch{ie("Datei ung\xFCltig","bad")}}},"Import"),ct),M("div",{class:"siggrid"},M("div",{class:"sigcol"},M("section",{class:"card"},M("h3",null,"Lichtplan"),M("div",{class:"lgrid-wrap"},S),M("p",{class:"note"},"Von oben nach unten steigt der Vorrang. Der h\xF6chste aktive Zustand gilt, \xABerbt\xBB f\xE4llt zum n\xE4chsttieferen durch. Zelle anklicken zum Bearbeiten.")),M("section",{class:"card"},M("h3",null,"Zelle bearbeiten"),P)),M("div",{class:"sigcol"},M("section",{class:"card sigprev"},M("h3",null,"Vorschau"),M("div",{class:"lamps"},C[0].fig,C[1].fig,M("span",{class:"lsep"}),C[2].fig,C[3].fig),M("p",{class:"sigstate"},...D.flatMap(Y=>[Y,M("br")])),M("div",{class:"sigl"},"Zust\xE4nde kombinieren"),O,U("Tiefe in der Vorschau",0,60,1,h,Y=>`${Y} m`,Y=>{h=Y}),U("Fehlercode in der Vorschau",1,6,1,u,Y=>["","Akku","Leckage","Tiefe","Sensor","Funk","Befehl"][Y],Y=>{u=Y}),M("label",{class:"chk"},E," Live vom verbundenen Boot"),M("div",{class:"sigrow"},B)),M("section",{class:"card"},M("h3",null,"Hardware und Grundeinstellungen"),M("div",{class:"sigl"},"LEDs am Rumpf"),pt("led.hw",[[0,"2 \xD7 5 mm"],[1,"2 \xD7 RGB-Pixel"],[2,"2 \xD7 RGBW-Pixel"]],"5 mm: GP11 und GP28, nur Helligkeit. Pixel (SK6812 oder WS2812): beide an GP11 in Reihe, Farbe frei. Gilt nach Neustart."),M("div",{class:"sigl"},"Hauptschalter"),pt("led.master",[[0,"Aus"],[1,"An"],[2,"Nur Oberfl\xE4che"]]),ut("led.lamp_test","Lampentest beim Einschalten","alle Lichter am Boot 1.2 s an"),ut("beacon.watch","Totmann-\xDCberwachung","Schweigt das scharfe Boot 8 s, spielt der Pod \xABBoot schweigt\xBB"),lt("beacon.strobe_max","Wiederfinden endet nach",0,120,5,Y=>Y>0?`${Y} min`:"unbegrenzt"),M("div",{class:"sigl mt"},"GPS unter Wasser"),lt("gps.off_depth","GPS aus ab",.3,5,.1,Y=>`${Et(Y,1)} m`),lt("gps.off_delay","nach",0,30,1,Y=>`${Y} s Tauchzeit`),M("p",{class:"note"},"Not-Aus und grosse Leckage l\xF6sen den Alarm immer aus. Eine Welle \xFCber dem Drucksensor schaltet das GPS nicht ab.")))),M("section",{class:"card"},M("h3",null,"Was das Leuchten bedeutet"),M("div",{class:"lgrid-wrap"},M("table",{class:"ptable legend"},M("thead",null,M("tr",null,M("th",null,"Zustand"),...ui.map(([Y])=>M("th",null,Y)))),it)),M("p",{class:"note"},"Die Tabelle schreibt sich aus Ihren Einstellungen. Zum Ausdrucken: Seite drucken.")));function J(){v(),w(),V()}return Pe.on("conn",()=>{tt.connected&&_()}),Pe.on("par",()=>{tt.tab==="signals"&&w()}),A(),J(),{el:wt,show(){tt.connected&&_(),J(),cancelAnimationFrame(e),e=requestAnimationFrame(q)},hide(){cancelAnimationFrame(e)},update(Y){a=Y}}}var qb='<svg viewBox="0 0 64 64" width="28" height="28" aria-hidden="true"><rect width="64" height="64" rx="6" fill="#0b0e12" stroke="#2a3a47"/><path d="M18 14v22a14 14 0 0 0 28 0V14" fill="none" stroke="#ff7a59" stroke-width="7" stroke-linecap="square"/></svg>',$p=/(^|\.)underpressure\.ch$/.test(location.hostname),Xp=$p?"/fathom.html":location.protocol==="file:"||location.hostname==="192.168.4.1"?"":"https://underpressure.ch/fathom.html";function Yb(){let s=M("dialog",{class:"dlg"},M("h2",null,"Per WLAN verbinden"),M("p",{class:"note"},"Diese Seite l\xE4uft \xFCber https. Der Browser erlaubt von hier keine unverschl\xFCsselte Verbindung ins Boot WLAN. Das Boot liefert den Konfigurator deshalb selbst aus:"),M("ol",null,M("li",null,"Boot einschalten, es muss entsch\xE4rft sein (DISARMED). Scharf geschaltet ist das WLAN aus."),M("li",null,"Mit dem WLAN ",M("code",null,"FATHOM-XXXX")," verbinden (Handy, Tablet oder PC)."),M("li",null,"Im Browser ",M("code",null,"http://192.168.4.1")," \xF6ffnen."),M("li",null,"Dort \xABPer WLAN verbinden\xBB dr\xFCcken.")),M("p",{class:"note"},"Per WLAN gehen Parameter, Missionen, Tests und Kalibration. Scharfschalten, Missionsstart und Bootloader gehen nur per Crossfire oder USB."),M("div",{class:"row"},M("button",{class:"btn primary",onclick:()=>s.close()},"Verstanden")));s.addEventListener("close",()=>s.remove()),document.body.append(s),s.showModal()}var $b=[["setup","Verbinden","M12 2v10m0 0l-4-4m4 4l4-4M5 14v5h14v-5"],["dash","\xDCbersicht","M3 13a9 9 0 1118 0M12 13l4-5M5 20h14"],["sensors","Sensoren","M3 17l5-6 4 3 5-8 4 5M3 21h18"],["calib","Kalibration","M12 3v4m0 10v4M3 12h4m10 0h4M12 8a4 4 0 100 8 4 4 0 000-8z"],["tests","Tests","M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3"],["params","Parameter","M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0M14 4v4M8 10v4M16 16v4"],["nav","Navigation","M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"],["map","Karte","M9 4L3 6v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14"],["signals","Signale","M12 3v2M12 19v2M4.2 6.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 17.8l1.4-1.4M18.4 5.6l1.4-1.4M12 8a4 4 0 100 8 4 4 0 000-8z"],["mission","Mission","M4 20l4-12 4 6 4-10 4 16M3 4h4"],["bb","Blackbox","M5 4h14v16H5zM9 4v6h6V4M8 15h8M8 18h5"],["term","Terminal","M4 5h16v14H4zM7 10l3 2-3 2M12 15h5"]],Ze={setup:null,dash:null,sensors:null,calib:null,tests:null,params:null,map:null,signals:null,mission:null,nav:null,bb:null,term:null},Lr={async connect(){if(tt.connected)return;if(!Xr.supported())return ie("Kein Web Serial in diesem Browser. Chrome oder Edge am PC nutzen.","bad",6e3);let s=new Xr;try{await s.connect()}catch(t){t.name!=="NotFoundError"&&ie("Verbindung fehlgeschlagen: "+t.message,"bad",6e3);return}Eu(s,!1)},async wifi(s,t=1){if(tt.connected)return;if(location.protocol==="https:")return Yb();let e=new Go(s||(location.protocol==="file:"||["localhost","127.0.0.1"].includes(location.hostname)?tt.wifiHost||"192.168.4.1":location.hostname));try{await e.connect()}catch(n){if(t>1){setTimeout(()=>Lr.wifi(s,t-1),2e3);return}ie("WLAN Verbindung fehlgeschlagen: "+n.message,"bad",7e3);return}tt.wifiHost=e.host,e.on("close",()=>{!e.noretry&&!tt.demo&&(ie("Funk getrennt, versuche neu (nur im DISARMED aktiv)","warn"),setTimeout(()=>Lr.wifi(e.host,15),2500))}),Eu(e,!1)},async demo(){tt.connected&&await tt.link.disconnect();let s=new Wo;await s.connect(),Eu(s,!0)},async disconnect(){tt.link&&await tt.link.disconnect()}};async function Eu(s,t){if(tt.link=s,tt.demo=t,tt.connected=!0,tt.wifi=!!s.wifi,s.on("rx",a=>Pe.emit("rx",a)),s.on("tx",a=>Pe.emit("tx",a)),s.on("ev",a=>ds(a,/ERR|FAILSAFE|LECK/i.test(a)?"bad":"info")),s.on("tel",a=>{tt.tel=a,tt.lastTel=performance.now()}),s.on("close",()=>{tt.link===s&&(tt.connected=!1,tt.tel=null,Pe.emit("conn"),Au(),ds("Verbindung getrennt","warn"),ie("Verbindung getrennt","warn"))}),s.on("error",a=>ds("Fehler: "+(a.message||a),"bad")),Pe.emit("conn"),Au(),!(await s.cmd("PING",1500)).ok){ie("Keine Antwort vom Boot. Ist FATHOM geflasht?","bad",6e3),await s.disconnect();return}let n=await s.cmd("INFO");n.ok&&(tt.info=n.data),await qr();let r=await s.cmd("MIS GET");tt.boatMis=r.data,await s.cmd(s.wifi?"STREAM 10":"STREAM 20"),ds(`Verbunden mit ${tt.info?.fw} ${tt.info?.ver}`,"ok"),ie(t?"Demo Boot verbunden":"Boot verbunden","ok"),xo(tt.tab==="setup"?"dash":tt.tab)}var qp,Cl,Yp;function Au(){let s=tt.tel,t=_i("#conn");t&&(t.className="conn "+(tt.connected?"on":""),t.textContent=tt.connected?tt.demo?"DEMO":tt.wifi?"WLAN":"USB":"GETRENNT");let e=_i("#armbtn");e&&(e.disabled=!tt.connected||tt.wifi,e.title=tt.wifi?"Scharfschalten nur per Crossfire oder USB":"",e.textContent=s&&s.arm?"DISARM":"ARM",e.className="btn "+(s&&s.arm?"stop":"warnb"));let n=_i("#modesel");n&&(n.disabled=!tt.connected,s&&document.activeElement!==n&&(n.value=s.m));let r=_i("#disc");r&&(r.style.display=tt.connected?"":"none")}function xo(s){let t=Ze[tt.tab];t&&t.hide&&t.hide(),tt.tab=s,Cl.innerHTML="";let e=Ze[s];Cl.append(e.el),e.show&&e.show(),document.querySelectorAll(".nav button").forEach(n=>n.classList.toggle("on",n.dataset.k===s)),Pe.emit("tab",s),location.hash=s}Pe.on("goto",xo);function Kb(){let s=_i("#app");qp=M("header",{class:"top"},M("div",{class:"brand",html:qb}),M("div",{class:"bt"},M("b",null,"FATHOM"),M("span",null,"Under Pressure \xB7 U-Boote")),Xp?M("a",{class:"btn back",href:Xp,"aria-label":"Zur\xFCck zur Website",title:"Zur\xFCck zur Website underpressure.ch",html:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg><span>Website</span>'}):null,M("span",{class:"sp"}),M("span",{id:"conn",class:"conn"},"GETRENNT"),M("select",{id:"modesel",class:"in sm",disabled:!0,onchange:a=>xe("MODE "+a.target.value)},["MANUAL","STAB","DEPTH","MISSION","RTH"].map(a=>M("option",{value:a},a)),M("option",{value:"FAILSAFE",disabled:!0},"FAILSAFE")),M("button",{id:"armbtn",class:"btn warnb",disabled:!0,onclick:()=>xe(tt.tel&&tt.tel.arm?"DISARM":"ARM")},"ARM"),M("button",{id:"disc",class:"btn",style:{display:"none"},onclick:()=>Lr.disconnect()},"Trennen"));let t=M("nav",{class:"nav"},$b.map(([a,l,h])=>M("button",{"data-k":a,onclick:()=>xo(a),html:`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${h}"/></svg><span>${l}</span>`})),M("span",{class:"sp"}),M("div",{class:"navfoot"},$p?M("a",{href:"/fathom.html",target:"_top"},"Under Pressure"):"Under Pressure"));Cl=M("main",{class:"content"}),Yp=M("footer",{class:"status"},M("span",{id:"sb1"},"bereit"),M("span",{class:"sp"}),M("span",{id:"sb2"},"FATHOM Konfigurator 0.5")),s.append(qp,M("div",{class:"body"},t,Cl),Yp),Ze.setup=wd(Lr),Ze.dash=Td(),Ze.sensors=Ed(),Ze.calib=Pd(),Ze.tests=Rd(),Ze.params=Cd(),Ze.map=Fp(),Ze.signals=Zp(),Ze.mission=Ep(),Ze.nav=Rp(),Ze.bb=Lp(),Ze.term=Ld(),Bn.forEach(a=>{tt.par[a.k]=a.d}),Pe.on("ev",()=>{let a=tt.events[tt.events.length-1];a&&(_i("#sb1").textContent=a.m)});let e=0,n=a=>{if(requestAnimationFrame(n),tt.connected&&tt.tel&&tt.lastTel!==e){Ze.nav&&tt.tab!=="nav"&&Ze.nav.update(tt.tel),e=tt.lastTel;let l=Ze[tt.tab];l&&l.update&&l.update(tt.tel),Au(),tt.tab!=="tests"&&Ze.tests.update}tt.connected&&performance.now()-tt.lastTel>2e3&&tt.lastTel?_i("#sb2").textContent="keine Telemetrie":tt.connected&&(_i("#sb2").textContent=tt.demo?"Demo":tt.wifi?"WLAN 10 Hz":"USB 20 Hz")};requestAnimationFrame(n);let r=location.hash.slice(1);xo(Ze[r]?r:"setup"),new URLSearchParams(location.search).has("demo")&&Lr.demo(),window.addEventListener("beforeunload",()=>{if(tt.connected)try{tt.link._write(`TEST OFF
`)}catch{}}),document.addEventListener("visibilitychange",()=>{document.hidden&&tt.connected&&tt.tel&&tt.tel.tst&&Ze.tests.stopAll()}),window.__fathom={S:tt,pages:Ze,api:Lr,setTab:xo}}Kb();})();
