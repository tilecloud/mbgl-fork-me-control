parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"ffN9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(){function n(e){t(this,n),this.url=e.url}return e(n,[{key:"onAdd",value:function(){this.container=document.createElement("div"),this.container.className="mapboxgl-ctrl";return this.container.innerHTML='<a><img style="position: absolute; top: -149px; left: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png" alt="Fork me on GitHub"></a>',this.container.querySelector("a").href=this.url,document.querySelector(".mapboxgl-ctrl-top-left").style.top="149px",this.container}},{key:"onRemove",value:function(){this.container.parentNode.removeChild(this.container)}},{key:"getDefaultPosition",value:function(){return"top-left"}}]),n}();exports.default=n;
},{}],"A2T1":[function(require,module,exports) {
"use strict";var t=require("../src/app"),o=e(t);function e(t){return t&&t.__esModule?t:{default:t}}var l=new mapboxgl.Map({container:"map",style:"https://tilecloud.github.io/tiny-tileserver/style.json",attributionControl:!0,hash:!0});l.addControl(new mapboxgl.NavigationControl),l.addControl(new mapboxgl.GeolocateControl),l.addControl(new o.default({url:"https://github.com/tilecloud/mbgl-fork-me-control/"}));
},{"../src/app":"ffN9"}]},{},["A2T1"], null)
//# sourceMappingURL=app.56e4e976.map