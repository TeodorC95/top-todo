(()=>{"use strict";var r,n,e,t={426:(r,n,e)=>{e.d(n,{Z:()=>o});var t=e(645),i=e.n(t)()((function(r){return r[1]}));i.push([r.id,':root {\r\n  --nav-height: 100px;\r\n  --dark: #393e46;\r\n}\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-family: "Nunito Sans", sans-serif;\r\n  background-color: #393e46;\r\n  color: #eeeeee;\r\n}\r\nh1 {\r\n  padding: 30px;\r\n}\r\n.main {\r\n  display: flex;\r\n  background-color: #aad8d3;\r\n}\r\n.topbar {\r\n  height: var(--nav-height);\r\n  background-color: var(--dark);\r\n}\r\n.navigation {\r\n  max-width: 350px;\r\n  flex-grow: 1;\r\n  height: calc(100vh - var(--nav-height));\r\n  overflow: hidden;\r\n  background-color: #00adb5;\r\n}\r\n.list-view {\r\n  flex-grow: 2;\r\n  max-width: 50vw;\r\n}\r\nul {\r\n  list-style: none;\r\n}\r\n.navigation li {\r\n  padding: 0.8rem;\r\n  font-size: 1.2rem;\r\n  width: 100%;\r\n  display: block;\r\n  cursor: pointer;\r\n}\r\n.navigation li:hover {\r\n  background-color: rgba(238, 238, 238, 0.3);\r\n}\r\n.list-view li {\r\n  padding: 2rem;\r\n  background-color: rgba(238, 238, 238, 0.3);\r\n  margin: 1rem 1rem;\r\n  width: 100%;\r\n  border-radius: 5px;\r\n  -webkit-border-radius: 5px;\r\n  -moz-border-radius: 5px;\r\n  -ms-border-radius: 5px;\r\n  -o-border-radius: 5px;\r\n  color: var(--dark);\r\n}\r\n.list-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.item-left,\r\n.item-right {\r\n  max-width: 50%;\r\n  width: 250px;\r\n}\r\n.list-item label {\r\n  text-align: left;\r\n  display: inline-block;\r\n  width: 50px;\r\n}\r\n.list-item input {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.list-item input[type="range"] {\r\n  margin-top: 10px;\r\n}\r\n.item-right span {\r\n  float: right;\r\n}\r\n#new-project {\r\n  width: 100%;\r\n  padding: 0.6rem;\r\n  background-color: transparent;\r\n  color: #aad8d3;\r\n  border: none;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n  transition: ease-in all 0.1s;\r\n  -webkit-transition: ease-in all 0.1s;\r\n  -moz-transition: ease-in all 0.1s;\r\n  -ms-transition: ease-in all 0.1s;\r\n  -o-transition: ease-in all 0.1s;\r\n}\r\n#new-project:hover {\r\n  color: #00adb5;\r\n  background-color: #aad8d3;\r\n}\r\n\r\n#new-item {\r\n  float: right;\r\n  padding: 0.6rem;\r\n  color: var(--dark);\r\n  background-color: transparent;\r\n  font-size: 1rem;\r\n  border: 1px solid var(--dark);\r\n  border-radius: 30px;\r\n  cursor: pointer;\r\n  transition: linear all 0.2s;\r\n  -webkit-transition: linear all 0.2s;\r\n  -moz-transition: linear all 0.2s;\r\n  -ms-transition: linear all 0.2s;\r\n  -o-transition: linear all 0.2s;\r\n}\r\n#new-item:hover {\r\n  color: #aad8d3;\r\n  background-color: var(--dark);\r\n}\r\n',""]);const o=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=r(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,t){"string"==typeof r&&(r=[[null,r,""]]);var i={};if(t)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var l=0;l<r.length;l++){var s=[].concat(r[l]);t&&i[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),n.push(s))}},n}},379:(r,n,e)=>{var t,i=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}(),o=[];function a(r){for(var n=-1,e=0;e<o.length;e++)if(o[e].identifier===r){n=e;break}return n}function l(r,n){for(var e={},t=[],i=0;i<r.length;i++){var l=r[i],s=n.base?l[0]+n.base:l[0],d=e[s]||0,c="".concat(s," ").concat(d);e[s]=d+1;var u=a(c),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(o[u].references++,o[u].updater(f)):o.push({identifier:c,updater:h(f,n),references:1}),t.push(c)}return t}function s(r){var n=document.createElement("style"),t=r.attributes||{};if(void 0===t.nonce){var o=e.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(r){n.setAttribute(r,t[r])})),"function"==typeof r.insert)r.insert(n);else{var a=i(r.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,c=(d=[],function(r,n){return d[r]=n,d.filter(Boolean).join("\n")});function u(r,n,e,t){var i=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(r.styleSheet)r.styleSheet.cssText=c(n,i);else{var o=document.createTextNode(i),a=r.childNodes;a[n]&&r.removeChild(a[n]),a.length?r.insertBefore(o,a[n]):r.appendChild(o)}}function f(r,n,e){var t=e.css,i=e.media,o=e.sourceMap;if(i?r.setAttribute("media",i):r.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var p=null,m=0;function h(r,n){var e,t,i;if(n.singleton){var o=m++;e=p||(p=s(n)),t=u.bind(null,e,o,!1),i=u.bind(null,e,o,!0)}else e=s(n),t=f.bind(null,e,n),i=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return t(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;t(r=n)}else i()}}r.exports=function(r,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=l(r=r||[],n);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var t=0;t<e.length;t++){var i=a(e[t]);o[i].references--}for(var s=l(r,n),d=0;d<e.length;d++){var c=a(e[d]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}e=s}}}}},i={};function o(r){var n=i[r];if(void 0!==n)return n.exports;var e=i[r]={id:r,exports:{}};return t[r](e,e.exports,o),e.exports}o.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return o.d(n,{a:n}),n},o.d=(r,n)=>{for(var e in n)o.o(n,e)&&!o.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},o.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),r=o(379),n=o.n(r),e=o(426),n()(e.Z,{insert:"head",singleton:!1}),e.Z.locals,document.getElementById("new-project"),document.getElementById("new-item")})();