!function(n){var r={};function e(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var i in n)e.d(t,i,function(r){return n[r]}.bind(null,i));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=14)}([function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=function(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var i=(a=t,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),o=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(o).concat([i]).join("\n")}var a,l,c;return[e].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(t)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);t&&i[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),r.push(c))}},r}},function(n,r,e){"use strict";(function(n){e.d(r,"a",(function(){return f}));var t=function(){for(var n=0,r=0,e=arguments.length;r<e;r++)n+=arguments[r].length;var t=Array(n),i=0;for(r=0;r<e;r++)for(var o=arguments[r],a=0,l=o.length;a<l;a++,i++)t[i]=o[a];return t},i=function(n,r,e){this.name=n,this.version=r,this.os=e,this.type="browser"},o=function(r){this.version=r,this.type="node",this.name="node",this.os=n.platform},a=function(n,r,e,t){this.name=n,this.version=r,this.os=e,this.bot=t,this.type="bot-device"},l=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},c=/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,s=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["vivaldi",/Vivaldi\/([0-9\.]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/Edg\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],d=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function f(r){return r?h(r):"undefined"!=typeof navigator?h(navigator.userAgent):void 0!==n&&n.version?new o(n.version.slice(1)):null}function u(n){return""!==n&&s.reduce((function(r,e){var t=e[0],i=e[1];if(r)return r;var o=i.exec(n);return!!o&&[t,o]}),!1)}function h(n){var r=u(n);if(!r)return null;var e=r[0],o=r[1];if("searchbot"===e)return new l;var s=o[1]&&o[1].split(/[._]/).slice(0,3);s?s.length<3&&(s=t(s,function(n){for(var r=[],e=0;e<n;e++)r.push("0");return r}(3-s.length))):s=[];var f=s.join("."),h=function(n){for(var r=0,e=d.length;r<e;r++){var t=d[r],i=t[0];if(t[1].exec(n))return i}return null}(n),p=c.exec(n);return p&&p[1]?new a(e,f,h,p[1]):new i(e,s.join("."),h)}}).call(this,e(2))},function(n,r){var e,t,i=n.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function l(n){if(e===setTimeout)return setTimeout(n,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(n,0);try{return e(n,0)}catch(r){try{return e.call(null,n,0)}catch(r){return e.call(this,n,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o}catch(n){e=o}try{t="function"==typeof clearTimeout?clearTimeout:a}catch(n){t=a}}();var c,s=[],d=!1,f=-1;function u(){d&&c&&(d=!1,c.length?s=c.concat(s):f=-1,s.length&&h())}function h(){if(!d){var n=l(u);d=!0;for(var r=s.length;r;){for(c=s,s=[];++f<r;)c&&c[f].run();f=-1,r=s.length}c=null,d=!1,function(n){if(t===clearTimeout)return clearTimeout(n);if((t===a||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(n);try{t(n)}catch(r){try{return t.call(null,n)}catch(r){return t.call(this,n)}}}(n)}}function p(n,r){this.fun=n,this.array=r}function m(){}i.nextTick=function(n){var r=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];s.push(new p(n,r)),1!==s.length||d||l(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(n){return[]},i.binding=function(n){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(n){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(n,r,e){var t=e(4),i=e(5);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var o={insert:"head",singleton:!1},a=(t(i,o),i.locals?i.locals:{});n.exports=a},function(n,r,e){"use strict";var t,i=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},o=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),a=[];function l(n){for(var r=-1,e=0;e<a.length;e++)if(a[e].identifier===n){r=e;break}return r}function c(n,r){for(var e={},t=[],i=0;i<n.length;i++){var o=n[i],c=r.base?o[0]+r.base:o[0],s=e[c]||0,d="".concat(c," ").concat(s);e[c]=s+1;var f=l(d),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(a[f].references++,a[f].updater(u)):a.push({identifier:d,updater:g(u,r),references:1}),t.push(d)}return t}function s(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=e.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var d,f=(d=[],function(n,r){return d[n]=r,d.filter(Boolean).join("\n")});function u(n,r,e,t){var i=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=f(r,i);else{var o=document.createTextNode(i),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(o,a[r]):n.appendChild(o)}}function h(n,r,e){var t=e.css,i=e.media,o=e.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),o&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var p=null,m=0;function g(n,r){var e,t,i;if(r.singleton){var o=m++;e=p||(p=s(r)),t=u.bind(null,e,o,!1),i=u.bind(null,e,o,!0)}else e=s(r),t=h.bind(null,e,r),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else i()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=i());var e=c(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var i=l(e[t]);a[i].references--}for(var o=c(n,r),s=0;s<e.length;s++){var d=l(e[s]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}e=o}}}},function(n,r,e){var t=e(0),i=e(6),o=e(7),a=e(8),l=e(9),c=e(10),s=e(11),d=e(12),f=e(13);(r=t(!1)).i(i),r.i(o),r.i(a),r.i(l),r.i(c),r.i(s),r.i(d),r.i(f),r.push([n.i,'/* Permet de définir la dimension des box incluant Border & Padding */\r\n*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  --brown: #bda47d;\r\n  --lightBrown: #f0ece5;\r\n  --darkGrey: #575757;\r\n  --grey: #a8aaab;\r\n  --lightGrey: #e4e4e4;\r\n  --darkBlue: #5f94ab;\r\n  --lightBlue: #99bdd5;\r\n  --green: #b0b932;\r\n  --red: #b61a1d;\r\n  --orange: #d67c1c;\r\n  --shadowSet: 2px 2px 2px rgba(189, 169, 125, 0.5);\r\n  background-color: #f7f5f2;\r\n  font-family: "Roboto", Arial, Helvetica, sans-serif;\r\n}\r\n.main_title {\r\n  color: var(--brown);\r\n  text-align: center;\r\n  font-size: 50px;\r\n  padding: 20px;\r\n  margin: 0px;\r\n  border-bottom: 2px solid var(--grey);\r\n  width: 75%;\r\n  text-transform: uppercase;\r\n}\r\n.subtitle {\r\n  color: var(--grey);\r\n  text-align: center;\r\n  padding: 20px;\r\n  margin: 0px;\r\n  font-size: 1em;\r\n}\r\n.content {\r\n  font-size: 1em;\r\n  margin: 20px;\r\n  line-height: 2em;\r\n}\r\n.important_thing {\r\n  font-weight: bold;\r\n  margin-top: 5px;\r\n}\r\n.quote {\r\n  color: var(--brown);\r\n  text-align: center;\r\n  font-size: 1.2em;\r\n  margin: 30px;\r\n}\r\nimg {\r\n  vertical-align: middle;\r\n}\r\nli {\r\n  font-size: 1em;\r\n  color: var(--darkGrey);\r\n  padding: 0px;\r\n  margin: 5px;\r\n  /* border: 1px solid black; */\r\n  text-align: left;\r\n}\r\n\r\n.section_subtitle {\r\n  font-size: 1em;\r\n  color: var(--darkGrey);\r\n}\r\n\r\n.link {\r\n  color: var(--darkBlue);\r\n  text-decoration: dashed;\r\n  line-height: 2em;\r\n}\r\n\r\n.responsive_img {\r\n  max-width: 100%;\r\n}\r\n\r\n.examples {\r\n  font-size: 1em;\r\n  margin: 15px;\r\n  line-height: 2em;\r\n}\r\n\r\n.footer {\r\n  visibility: hidden;\r\n  padding: 15px;\r\n  text-align: center;\r\n}\r\n/* see with js how to positionate the word in the cloud_ideas_container */\r\n.cloud_idea_1 {\r\n  font-size: x-large;\r\n  margin: 10px;\r\n}\r\n.cloud_idea_2 {\r\n  font-size: large;\r\n  margin: 10px;\r\n}\r\n.cloud_idea_3 {\r\n  font-size: xx-large;\r\n  margin: 10px;\r\n}\r\n.cloud_idea_4 {\r\n  font-size: medium;\r\n  margin: 10px;\r\n}\r\n.cloud_idea_5 {\r\n  font-size: x-large;\r\n  margin: 10px;\r\n}\r\n.cloud_idea_6 {\r\n  font-size: large;\r\n  margin: 10px;\r\n}\r\n.cloud_idea_7 {\r\n  font-size: x-large;\r\n  margin: 10px;\r\n}\r\n',""]),n.exports=r},function(n,r,e){(r=e(0)(!1)).push([n.i,"/*Boxes' style definition*/\r\n.title_section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100vh;\r\n  /* border: 1px solid black; */\r\n}\r\n.cloud_ideas_container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  overflow: hidden;\r\n  justify-content: center;\r\n  align-items: center;\r\n  align-self: center;\r\n  font-size: large;\r\n  font-weight: bold;\r\n  color: var(--grey);\r\n\r\n  width: 75%;\r\n  padding: 2em;\r\n}\r\n.examples_container {\r\n  color: var(--darkGrey);\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  box-shadow: var(--shadowSet);\r\n  margin: 30px;\r\n  width: 70%;\r\n  align-self: center;\r\n  background-color: white;\r\n}\r\n.step_container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  align-items: flex-end;\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\n.logigram_top_container {\r\n  align-items: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.row_container {\r\n  align-items: flex-start;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.bar_graph {\r\n  align-self: center;\r\n  width: 60%;\r\n  min-width: 65%;\r\n}\r\n",""]),n.exports=r},function(n,r,e){(r=e(0)(!1)).push([n.i,".accordeon {\r\n  display: flex;\r\n  flex-direction: column;\r\n  /* border : 1px solid black; */\r\n  align-items: center;\r\n}\r\n\r\n.accordeon_section {\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  /* border : 1px solid black; */\r\n  width: 80%;\r\n  padding: 0px;\r\n  margin: 10px;\r\n}\r\n\r\n.accordeon_section_title {\r\n  cursor: pointer;\r\n  color: var(--darkBlue);\r\n  text-align: left;\r\n  padding: 10px;\r\n  margin: 5px;\r\n  border-bottom: 1px solid var(--darkBlue);\r\n  font-size: 1.3em;\r\n}\r\n/* the accordeon must be improve ! */\r\n.accordeon_section_content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 6000px;\r\n  transition: max-height 1s;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n  width: 80%;\r\n  align-self: center;\r\n  max-width: 850px;\r\n}\r\n\r\n.accordeon_section_content--hide {\r\n  overflow: hidden;\r\n  max-height: 0;\r\n}\r\n",""]),n.exports=r},function(n,r,e){(r=e(0)(!1)).push([n.i,'/* Timeline general style */\r\n.timeline_full_container {\r\n  width: 100%;\r\n  position: relative;\r\n  padding: 0 25px;\r\n\r\n  --margin: 20px;\r\n  --minWidthItem: 185px;\r\n  --pointRadius: 7px;\r\n  --itemBackground: var(--lightBrown);\r\n  --timelineColor: var(--lightGrey);\r\n  --pointColor: var(--brown);\r\n  --titleColor: var(--brown);\r\n}\r\n\r\n.view_timeline {\r\n  overflow: hidden;\r\n}\r\n\r\n.timeline_container {\r\n  width: 100%;\r\n  min-width: calc((var(--minWidthItem) + var(--margin)) * (var(--n) + 1) / 2);\r\n  margin: 0px;\r\n  position: relative;\r\n  left: 0px;\r\n  transition: left 0.5s;\r\n}\r\n\r\n/* height of the timeline container */\r\n.timeline_equipment {\r\n  height: 670px;\r\n}\r\n\r\n.timeline_process {\r\n  height: 670px;\r\n}\r\n\r\n.timeline_container::before {\r\n  content: "";\r\n  position: absolute;\r\n  left: calc(100% / (var(--n) + 1));\r\n  top: 50%;\r\n  background: var(--timelineColor);\r\n  height: 2px;\r\n  width: calc(100% - (200% / (var(--n) + 1)));\r\n}\r\n\r\n.timeline_title {\r\n  display: flex;\r\n  align-items: center;\r\n  color: var(--titleColor);\r\n  font-weight: bold;\r\n  border-bottom: 1px solid var(--titleColor);\r\n  height: 3em;\r\n  margin: 0;\r\n  text-transform: uppercase;\r\n  /* text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3); */\r\n}\r\n\r\n.timeline_content {\r\n  display: flex;\r\n  flex: 1;\r\n  align-items: center;\r\n  line-height: 2em;\r\n  font-size: 0.8em;\r\n}\r\n\r\n.timeline_item {\r\n  background-color: var(--itemBackground);\r\n  margin: 0px;\r\n  padding: 10px;\r\n  width: calc((200% / (var(--n) + 1)) - var(--margin));\r\n  min-width: var(--minWidthItem);\r\n  height: calc(50% - 2 * var(--margin));\r\n  position: absolute;\r\n  top: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow: var(--shadowSet);\r\n}\r\n/* general style of timeline element (arrows and point) */\r\n/* POINT */\r\n.timeline_item::after {\r\n  content: "";\r\n  position: absolute;\r\n  width: calc(2 * var(--pointRadius));\r\n  height: calc(2 * var(--pointRadius));\r\n  border-radius: 50%;\r\n  background: radial-gradient(white, var(--pointColor));\r\n}\r\n/* ARROWS */\r\n.timeline_item::before {\r\n  content: "";\r\n  position: absolute;\r\n  border-style: solid;\r\n  border-width: var(--margin) var(--margin) 0 var(--margin);\r\n  border-color: var(--itemBackground) transparent transparent transparent;\r\n}\r\n\r\n/* specific position of content if it is odd or even */\r\n\r\n/* TOP */\r\n/* POINT */\r\n.timeline_item:nth-child(odd)::after {\r\n  top: calc(100% + var(--margin) - var(--pointRadius));\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n/* ARROWS */\r\n.timeline_item:nth-child(odd)::before {\r\n  top: 100%;\r\n  left: 50%;\r\n  transform: translate(-50%, calc(-1 * var(--pointRadius)));\r\n}\r\n/* CONTENT */\r\n.timeline_item:nth-child(odd) {\r\n  transform: translate(-50%, calc(-100% - var(--margin)));\r\n}\r\n\r\n/* BOTTOM */\r\n/* POINT */\r\n.timeline_item:nth-child(even)::after {\r\n  top: calc(-1 * (var(--margin) + var(--pointRadius)));\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n/* ARROWS */\r\n.timeline_item:nth-child(even)::before {\r\n  top: 0;\r\n  left: 50%;\r\n  transform: translate(-50%, calc(-100% + var(--pointRadius))) rotate(180deg);\r\n}\r\n/* CONTENT */\r\n.timeline_item:nth-child(even) {\r\n  transform: translate(-50%, var(--margin));\r\n}\r\n\r\n.timeline_item:nth-child(1) {\r\n  left: calc(100% / (var(--n) + 1));\r\n}\r\n\r\n.timeline_item:nth-child(2) {\r\n  left: calc(200% / (var(--n) + 1));\r\n}\r\n\r\n.timeline_item:nth-child(3) {\r\n  left: calc(300% / (var(--n) + 1));\r\n}\r\n\r\n.timeline_item:nth-child(4) {\r\n  left: calc(400% / (var(--n) + 1));\r\n}\r\n\r\n.timeline_item:nth-child(5) {\r\n  left: calc(500% / (var(--n) + 1));\r\n}\r\n\r\n.timeline_item:nth-child(6) {\r\n  left: calc(600% / (var(--n) + 1));\r\n}\r\n.timeline_item:nth-child(7) {\r\n  left: calc(700% / (var(--n) + 1));\r\n}\r\n\r\n.timeline_item:nth-child(8) {\r\n  left: calc(800% / (var(--n) + 1));\r\n}\r\n\r\n.timeline_item:nth-child(9) {\r\n  left: calc(900% / (var(--n) + 1));\r\n}\r\n\r\n.timeline_item:nth-child(10) {\r\n  left: calc(1000% / (var(--n) + 1));\r\n}\r\n\r\n/* Style about navigation arrows */\r\n\r\n.left_arrow,\r\n.right_arrow {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  color: var(--lightGrey);\r\n  font-size: 2em;\r\n}\r\n\r\n.left_arrow:hover,\r\n.right_arrow:hover {\r\n  color: var(--brown);\r\n}\r\n\r\n.left_arrow {\r\n  left: 0;\r\n}\r\n\r\n.right_arrow {\r\n  right: 0;\r\n}\r\n',""]),n.exports=r},function(n,r,e){(r=e(0)(!1)).push([n.i,".pyramid-container {\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  color: white;\r\n  margin: 30px;\r\n}\r\n\r\n.pyramid_level {\r\n  border-bottom: 50px solid black;\r\n  border-left: 25px solid transparent;\r\n  border-right: 25px solid transparent;\r\n  line-height: 1.3em;\r\n  height: 50px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  border-top: 3px solid transparent;\r\n  position: relative;\r\n}\r\n\r\n.pyramid_level span {\r\n  position: absolute;\r\n  top: 25px;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.pyramid_level:first-child span {\r\n  top: 50px;\r\n  transform: translate(-50%, 0%);\r\n}\r\n\r\n.pyramid_level:nth-child(1) {\r\n  width: 100px;\r\n  border-bottom: 100px solid var(--darkBlue);\r\n  border-left-width: 50px;\r\n  border-right-width: 50px;\r\n}\r\n\r\n.pyramid_level:nth-child(2) {\r\n  width: 150px;\r\n  border-bottom-color: var(--green);\r\n}\r\n.pyramid_level:nth-child(3) {\r\n  width: 200px;\r\n  border-bottom-color: var(--red);\r\n}\r\n.pyramid_level:nth-child(4) {\r\n  width: 250px;\r\n  border-bottom-color: var(--orange);\r\n}\r\n",""]),n.exports=r},function(n,r,e){(r=e(0)(!1)).push([n.i,".step_1 {\r\n  width: 150px;\r\n  height: 200px;\r\n  background-color: var(--lightBrown);\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 5px;\r\n}\r\n\r\n.step_2 {\r\n  width: 150px;\r\n  height: 250px;\r\n  background-color: var(--lightGrey);\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 5px;\r\n}\r\n\r\n.step_3 {\r\n  width: 150px;\r\n  height: 300px;\r\n  background-color: var(--grey);\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 5px;\r\n}\r\n\r\n.step_title {\r\n  color: var(--darkGrey);\r\n  margin: 10px;\r\n  padding: 5px;\r\n  border-bottom: 1px solid var(--darkGrey);\r\n}\r\n\r\n.step_content {\r\n  margin: 10px;\r\n  display: flex;\r\n  flex: 1;\r\n  align-items: center;\r\n  font-size: 0.8em;\r\n}\r\n\r\n.step_sub {\r\n  margin: 10px;\r\n  padding: 5px;\r\n  border-top: 1px solid var(--darkGrey);\r\n  font-size: 0.8em;\r\n}\r\n",""]),n.exports=r},function(n,r,e){(r=e(0)(!1)).push([n.i,".logigram_item {\r\n  background-color: var(--lightBrown);\r\n  text-align: center;\r\n  width: 60%;\r\n  margin: 10px;\r\n}\r\n\r\n.logigram_item_title {\r\n  margin: 10px;\r\n  color: var(--brown);\r\n  border-bottom: 1px solid var(--brown);\r\n  padding: 10px;\r\n  font-weight: normal;\r\n}\r\n\r\n.logigram_item_title span {\r\n  font-size: 0.8em;\r\n  color: black;\r\n}\r\n\r\n.logigram_item_content {\r\n  text-align: center;\r\n  color: black;\r\n  padding: 10px;\r\n  font-size: 0.8em;\r\n  line-height: 2em;\r\n}\r\n",""]),n.exports=r},function(n,r,e){(r=e(0)(!1)).push([n.i,'.bar_container {\r\n  position: relative;\r\n  z-index: 0;\r\n  background-color: var(--lightBrown);\r\n  margin: 10px;\r\n  padding: 10px;\r\n  color: var(--lightBrown);\r\n  height: 40px;\r\n  box-shadow: var (--shadowSet);\r\n}\r\n.bar_container::before {\r\n  content: "";\r\n  position: absolute;\r\n  z-index: -1;\r\n  display: block;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: var(--brown);\r\n  border-bottom-right-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n}\r\n\r\n.quarter::before {\r\n  width: 25%;\r\n}\r\n\r\n.half::before {\r\n  width: 50%;\r\n}\r\n\r\n.trois_quart::before {\r\n  width: 75%;\r\n}\r\n',""]),n.exports=r},function(n,r,e){(r=e(0)(!1)).push([n.i,'.SIPOC_full_container {\r\n  position: relative;\r\n  width: 100%;\r\n  padding: 0 25px;\r\n  --nSIPOC: 5;\r\n  --marginSIPOC: 4px;\r\n}\r\n\r\n.view_SIPOC {\r\n  overflow: hidden;\r\n}\r\n\r\n.SIPOC_container {\r\n  position: relative;\r\n  width: 100%;\r\n  min-width: 800px;\r\n  margin: 0px;\r\n  left: 0px;\r\n  display: flex;\r\n  justify-content: center;\r\n  transition: left 0.5s;\r\n}\r\n\r\n.SIPOC_item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: calc(100% / (var(--nSIPOC)) - var(--marginSIPOC) - 20px);\r\n  margin: var(--marginSIPOC);\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n.SIPOC_item:nth-child(1) {\r\n  align-items: normal;\r\n}\r\n.SIPOC_item:last-child {\r\n  align-items: flex-end;\r\n}\r\n\r\n.SIPOC_item_header {\r\n  display: flex;\r\n  cursor: pointer;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-weight: normal;\r\n  width: 100%;\r\n\r\n  height: 75px;\r\n  margin: 0;\r\n  margin-bottom: 10px;\r\n  padding: 0;\r\n\r\n  color: var(--lightBrown);\r\n  padding-left: 15px;\r\n  z-index: 0;\r\n}\r\n\r\n.SIPOC_item_header:hover {\r\n  font-weight: bold;\r\n}\r\n\r\n.SIPOC_item_header::before {\r\n  content: "";\r\n  position: absolute;\r\n  border-style: solid;\r\n  border-width: 2em 0 2em 20px;\r\n  border-color: #f7f5f2 #f7f5f2 #f7f5f2 var(--brown);\r\n  right: -15px;\r\n  z-index: -1;\r\n}\r\n\r\n.SIPOC_item_header::after {\r\n  content: "";\r\n  display: block;\r\n  width: calc(100% - 20px);\r\n  height: 0px;\r\n  position: absolute;\r\n  border-style: solid;\r\n  border-width: 2em 0 2em 20px;\r\n  border-color: var(--brown) var(--brown) var(--brown) transparent;\r\n  left: -5px;\r\n  top: 5px;\r\n  z-index: -1;\r\n  box-sizing: content-box;\r\n}\r\n\r\n.SIPOC_item_content {\r\n  line-height: 2em;\r\n  font-size: 0.8em;\r\n  width: 200%;\r\n  padding: 15px;\r\n  background-color: var(--lightBrown);\r\n  box-shadow: var(--shadowSet);\r\n  visibility: hidden;\r\n}\r\n\r\n.SIPOC_item:nth-child(1) .SIPOC_item_content {\r\n  visibility: visible;\r\n}\r\n\r\n.SIPOC_item_content::before {\r\n  content: "";\r\n  position: absolute;\r\n  border-style: solid;\r\n  border-width: 0 15px 15px 15px;\r\n  border-color: transparent transparent var(--lightBrown) transparent;\r\n  left: 50%;\r\n  top: calc(55px);\r\n  transform: translateX(-10px) translateY(100%);\r\n}\r\n',""]),n.exports=r},function(n,r,e){"use strict";function t(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}e.r(r);var i=function n(r){var e=this;!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"createSections",(function(){var n=e.containerRef.querySelectorAll(".accordeon_section");return Array.from(n).map((function(n){return{title:n.querySelector(".accordeon_section_title"),content:n.querySelector(".accordeon_section_content")}}))})),t(this,"closeAllSections",(function(){e.sections.forEach((function(n){n.content.classList.add("accordeon_section_content--hide")}))})),t(this,"addOnClickListenerOnSectionTitles",(function(){e.sections.forEach((function(n){n.title.addEventListener("click",(function(){n.content.classList.toggle("accordeon_section_content--hide")}))}))})),t(this,"initAccordeon",(function(){e.closeAllSections(),e.addOnClickListenerOnSectionTitles()})),this.containerRef=r,this.sections=this.createSections()};function o(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var a=function n(r){var e=this;!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),o(this,"getItemsNumber",(function(){return e.containerRef.querySelectorAll(".timeline_item").length})),o(this,"initTimeline",(function(){e.containerRef.style.setProperty("--n",e.itemsNumber),e.swipe(),e.viewResizing()})),o(this,"viewResizing",(function(){window.onresize=e.setArrowsVisibility})),o(this,"setArrowsVisibility",(function(){var n=e.viewRef.offsetWidth,r=e.containerRef.offsetWidth,t=e.currentLeft>=0,i=n-e.currentLeft>=r;e.leftArrow.style.setProperty("visibility",t?"hidden":"visible"),e.rightArrow.style.setProperty("visibility",i?"hidden":"visible")})),o(this,"swipe",(function(){e.rightArrow.onclick=function(){e.currentLeft-=100,e.containerRef.style.setProperty("left",e.currentLeft+"px"),e.setArrowsVisibility()},e.leftArrow.onclick=function(){e.currentLeft+=100,e.containerRef.style.setProperty("left",e.currentLeft+"px"),e.setArrowsVisibility()},e.setArrowsVisibility()})),this.fullContainerRef=r,this.viewRef=r.querySelector(".view_timeline"),this.containerRef=r.querySelector(".timeline_container"),this.rightArrow=r.querySelector(".right_arrow"),this.leftArrow=r.querySelector(".left_arrow"),this.itemsNumber=this.getItemsNumber(),this.currentLeft=0},l=e(1),c=Object(l.a)(),s=function(){window.alert("Oups ! Il semblerait que ton navigateur ne soit pas compatible ! Essaie avec Chrome ou Firefox ;)"),window.location.href="https://www.google.com/intl/fr_fr/chrome/"};function d(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}var f=function n(r){var e=this;!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),d(this,"createItems",(function(){var n=e.containerRef.querySelectorAll(".SIPOC_item");return Array.from(n).map((function(n){return{header:n.querySelector(".SIPOC_item_header"),content:n.querySelector(".SIPOC_item_content")}}))})),d(this,"viewContentOnclickHeader",(function(){e.items.forEach((function(n){n.header.onclick=function(){e.currentVisibleContent.style.setProperty("visibility","hidden"),n.content.style.setProperty("visibility","visible"),e.currentVisibleContent=n.content}}))})),d(this,"viewResizing",(function(){window.onresize=e.setArrowsVisibility})),d(this,"setArrowsVisibility",(function(){var n=e.viewRef.offsetWidth,r=e.containerRef.offsetWidth,t=e.currentLeft>=0,i=n-e.currentLeft>=r;e.leftArrow.style.setProperty("visibility",t?"hidden":"visible"),e.rightArrow.style.setProperty("visibility",i?"hidden":"visible")})),d(this,"swipe",(function(){e.rightArrow.onclick=function(){e.currentLeft-=100,e.containerRef.style.setProperty("left",e.currentLeft+"px"),e.setArrowsVisibility()},e.leftArrow.onclick=function(){e.currentLeft+=100,e.containerRef.style.setProperty("left",e.currentLeft+"px"),e.setArrowsVisibility()},e.setArrowsVisibility()})),d(this,"initSipoc",(function(){e.swipe(),e.viewResizing(),e.viewContentOnclickHeader()})),this.fullContainerRef=r,this.viewRef=r.querySelector(".view_SIPOC"),this.containerRef=r.querySelector(".SIPOC_container"),this.items=this.createItems(),this.currentVisibleContent=this.items[0].content,this.rightArrow=r.querySelector(".right_arrow"),this.leftArrow=r.querySelector(".left_arrow"),this.currentLeft=0};e(3);!function(){switch(c&&c.name){case"ie":s();break;case"edge":s();default:console.log("browser supported !")}}(),document.addEventListener("DOMContentLoaded",(function(){u()}));var u=function(){new i(document.querySelector(".accordeon")).initAccordeon(),Array.from(document.querySelectorAll(".timeline_full_container")).forEach((function(n){new a(n).initTimeline()})),new f(document.querySelector(".SIPOC_full_container")).initSipoc()}}]);