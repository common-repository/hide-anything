(()=>{"use strict";var e={655:(e,t)=>{function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["id","class","length"],r=e.attributes,o=[].concat(n(r));return o.reduce((function(e,n){return t.indexOf(n.nodeName)>-1||e.push("["+n.nodeName+'="'+n.value+'"]'),e}),[])}},635:(e,t)=>{function n(e){if(!e.hasAttribute("class"))return[];try{return Array.prototype.slice.call(e.classList).filter((function(e){return/^[a-z_-][a-z\d_-]*$/i.test(e)?e:null}))}catch(n){var t=e.getAttribute("class");return(t=t.trim().replace(/\s+/g," ")).split(" ")}}Object.defineProperty(t,"__esModule",{value:!0}),t.getClasses=n,t.getClassSelectors=function(e){return n(e).filter(Boolean).map((function(e){return"."+e}))}},658:(e,t)=>{function n(e,t,r,o,i,a,l){if(a!==l)for(var c=o;c<=i&&i-c+1>=l-a;++c)r[a]=t[c],n(e,t,r,c+1,i,a+1,l);else e.push(r.slice(0,a).join(""))}Object.defineProperty(t,"__esModule",{value:!0}),t.getCombinations=function(e,t){for(var r=[],o=e.length,i=[],a=1;a<=t;++a)n(r,e,i,0,o-1,0,a);return r}},72:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getID=function(e){var t=e.getAttribute("id");if(null!==t&&""!==t)return t.match(/(?:^\d|:)/)?'[id="'+t+'"]':"#"+t;return null}},803:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getNthChild=function(e){var t=0,n=void 0,o=void 0,i=e.parentNode;if(Boolean(i)){var a=i.childNodes,l=a.length;for(n=0;n<l;n++)if(o=a[n],(0,r.isElement)(o)&&(t++,o===e))return":nth-child("+t+")"}return null};var r=n(741)},581:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getParents=function(e){var t=[],n=e;for(;(0,r.isElement)(n);)t.push(n),n=n.parentNode;return t};var r=n(741)},822:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getTag=function(e){return e.tagName.toLowerCase().replace(/:/g,"\\:")}},761:(e,t,n)=>{t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.selectorTypes,r=void 0===n?["ID","Class","Tag","NthChild"]:n,o=t.attributesToIgnore,i=void 0===o?["id","class","length"]:o,a=t.excludeRegex,l=void 0===a?null:a,c=[],f=(0,s.getParents)(e),d=!0,y=!1,h=void 0;try{for(var m,b=f[Symbol.iterator]();!(d=(m=b.next()).done);d=!0){var v=m.value,g=p(v,r,i,l);Boolean(g)&&c.push(g)}}catch(e){y=!0,h=e}finally{try{!d&&b.return&&b.return()}finally{if(y)throw h}}var C=[],w=!0,j=!1,E=void 0;try{for(var O,S=c[Symbol.iterator]();!(w=(O=S.next()).done);w=!0){var k=O.value;C.unshift(k);var A=C.join(" > ");if((0,u.isUnique)(e,A))return A}}catch(e){j=!0,E=e}finally{try{!w&&S.return&&S.return()}finally{if(j)throw E}}return null};var r=n(72),o=n(635),i=n(658),a=n(655),l=n(803),c=n(822),u=n(942),s=n(581);function f(e,t){var n=e.parentNode.querySelectorAll(t);return 1===n.length&&n[0]===e}function d(e,t){return t.find(f.bind(null,e))}function y(e,t,n){var r=(0,i.getCombinations)(t,3),o=d(e,r);return Boolean(o)||Boolean(n)&&(o=d(e,r=r.map((function(e){return n+e}))),Boolean(o))?o:null}function p(e,t,n,i){var u=void 0,s=function(e,t,n){var i={Tag:c.getTag,NthChild:l.getNthChild,Attributes:function(e){return(0,a.getAttributes)(e,n)},Class:o.getClassSelectors,ID:r.getID};return t.reduce((function(t,n){return t[n]=i[n](e),t}),{})}(e,t,n);i&&i instanceof RegExp&&(s.ID=i.test(s.ID)?null:s.ID,s.Class=s.Class.filter((function(e){return!i.test(e)})));var d=!0,p=!1,h=void 0;try{for(var m,b=t[Symbol.iterator]();!(d=(m=b.next()).done);d=!0){var v=m.value,g=s.ID,C=s.Tag,w=s.Class,j=s.Attributes,E=s.NthChild;switch(v){case"ID":if(Boolean(g)&&f(e,g))return g;break;case"Tag":if(Boolean(C)&&f(e,C))return C;break;case"Class":if(Boolean(w)&&w.length&&(u=y(e,w,C)))return u;break;case"Attributes":if(Boolean(j)&&j.length&&(u=y(e,j,C)))return u;break;case"NthChild":if(Boolean(E))return E}}}catch(e){p=!0,h=e}finally{try{!d&&b.return&&b.return()}finally{if(p)throw h}}return"*"}},741:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.isElement=function(e){var t=void 0;t="object"===("undefined"==typeof HTMLElement?"undefined":n(HTMLElement))?e instanceof HTMLElement:!!e&&"object"===(void 0===e?"undefined":n(e))&&1===e.nodeType&&"string"==typeof e.nodeName;return t}},942:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isUnique=function(e,t){if(!Boolean(t))return!1;var n=e.ownerDocument.querySelectorAll(t);return 1===n.length&&n[0]===e}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(){var t=e(React.useState(!1),2),n=t[0],r=t[1];return React.useEffect((function(){r(!0)}),[]),n}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=wp.components.CheckboxControl,y=wp.element,p=y.useState,h=y.useEffect;function m(e){var t=e.exist,n=e.activeItems,o=e.setActiveItems,a=u(p(!1),2),c=a[0],s=a[1],f=n[0].devices,y=r();return h((function(){y&&o(n.map((function(e){return l(l({},e),{},{visible:c})})))}),[c]),React.createElement("div",{className:"hide-anything-ignore hide-anything-panel"},React.createElement("div",{className:"hide-anything-ignore hide-anything-devices"},t&&React.createElement(d,{label:React.createElement("div",{className:"device-label"},React.createElement("i",{className:"ab-icon dashicons dashicons-eye"}),React.createElement("span",null,"Make Visible")),checked:c,onChange:function(){s(!c)}}),!c&&[{label:"Desktop",icon:"desktop",key:"desktop"},{label:"Tablet",icon:"tablet",key:"tablet"},{label:"Mobile",icon:"smartphone",key:"mobile"}].map((function(e){var t=f.includes(e.key);return React.createElement(d,{label:React.createElement("div",{className:"device-label"},React.createElement("i",{className:"ab-icon dashicons dashicons-".concat(e.icon)}),React.createElement("span",null,"Hide on ".concat(e.label))),checked:t,onChange:function(){o(t?n.map((function(t){return l(l({},t),{},{devices:t.devices.filter((function(t){return t!==e.key}))})})):n.map((function(t){return l(l({},t),{},{devices:[].concat(i(t.devices),[e.key])})})))}})}))))}var b=n(761);const v=function(e){var t={},n={opts:{namespace:(e=e||{}).namespace||"DomOutline",borderWidth:e.borderWidth||2,onClick:e.onClick||!1,filter:e.filter||!1},keyCodes:{BACKSPACE:8,ESC:27,DELETE:46},active:!1,initialized:!1,elements:{}};function r(){!0!==n.initialized&&(!function(e){var t=document.createElement("style");t.type="text/css",document.getElementsByTagName("head")[0].appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.innerHTML=e}("\n                .".concat(n.opts.namespace,"{\n                    background: #09c;\n                    position: absolute;\n                    z-index: 1000000;\n                }\n                \n                .").concat(n.opts.namespace,"_label {\n                    background: #09c;\n                    border-radius: 2px;\n                    color: #fff;\n                    font: bold 12px/12px Helvetica, sans-serif;\n                    padding: 4px 6px;\n                    position: absolute;\n                    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);\n                    z-index: 1000001;\n                }")),n.initialized=!0)}function o(){n.elements.label=jQuery("<div></div>").addClass(n.opts.namespace+"_label").appendTo("body")}function i(){jQuery.each(n.elements,(function(e,t){t.remove()}))}function a(e){return!!jQuery(e.target).parents(".hide-anything-ignore").length||"string"==typeof e.target.className&&-1!==e.target.className.indexOf(n.opts.namespace)}function l(e){if(a(e))i();else if(jQuery(".DomOutline_label").length||o(),!n.opts.filter||jQuery(e.target).is(n.opts.filter)){t.element=e.target;var r=n.opts.borderWidth,l=(n.elements.window||(n.elements.window=jQuery(window)),n.elements.window.scrollTop()),c=t.element.getBoundingClientRect(),u=c.top+l,s=c.width,f=c.height,d=hideAnything.is_admin?{selectorTypes:["ID","Class"]}:{},y=(0,b.Z)(e.target,d),p='<i class="dashicons dashicons-hidden"></i> <span class="hide-anything-hide-text">Hide</span> <span class="hide-anything-selector">('.concat(y,')</span> <span class="DomOutline_border"></span>'),h=Math.max(0,u-27-r,l),m=Math.max(0,c.left-r);n.elements.label.css({top:h,left:m}).html(p),jQuery(".DomOutline_border").css({width:s,height:f})}}function c(e){return e.keyCode!==n.keyCodes.ESC&&e.keyCode!==n.keyCodes.BACKSPACE&&e.keyCode!==n.keyCodes.DELETE||t.stop(),!1}function u(e){return n.opts.onClick(e,t.element),!1}return t.start=function(){r(),!0!==n.active&&(n.active=!0,o(),jQuery("body").on("mousemove."+n.opts.namespace,l),jQuery("body").on("keyup."+n.opts.namespace,c),n.opts.onClick&&setTimeout((function(){jQuery("body").on("click."+n.opts.namespace,(function(e){if(!a(e))return!(n.opts.filter&&!jQuery(e.target).is(n.opts.filter))&&void u.call(this,e)}))}),50))},t.stop=function(){n.active=!1,i(),jQuery("body").off("mousemove."+n.opts.namespace).off("keyup."+n.opts.namespace).off("click."+n.opts.namespace)},t};function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==g(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===g(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||S(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,t)||S(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var A=wp.element,x=A.useState,P=A.useEffect;function R(){var e=hideAnything,t=e.is_admin,n=e.current_page,o=O(x(!1),2),i=o[0],a=o[1],l=O(x(hideAnything.selectors),2),c=l[0],u=l[1],s=O(x([]),2),f=s[0],d=s[1],y=O(x(!1),2),p=y[0],h=y[1],g=v({onClick:function(e){e.preventDefault(),e.stopImmediatePropagation(),e.stopPropagation();var n=t?{selectorTypes:["ID","Class"]}:{},r=(0,b.Z)(e.target,n),o={selector:r,devices:["desktop","tablet","mobile"]};d((function(e){return[].concat(E(e),[o])})),u(w(w({},c),{},j({},r,["desktop","tablet","mobile"]))),C(r,!0)}}),C=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=jQuery;if(n(e).length){var r=n(window).scrollTop(),o=n(e)[0].getBoundingClientRect(),i=o.top+r-25,a=o.left,l=o.width,c=o.height,u=n('<div class="hide-anything-canvas hide-anything-ignore '.concat(t?"active":"",'" data-selector="').concat(e,'"><i class="ab-icon dashicons dashicons-admin-generic"></i><span class="hide-anything-canvas-border"></span> </div>')).appendTo("body");u.css({top:i,left:a}),n(".hide-anything-canvas-border",u).css({width:l,height:c})}},S=r();P((function(){var e=function(e){27!==e.keyCode&&8!==e.keyCode&&46!==e.keyCode||(a(!1),f.length&&(f.forEach((function(e){var t=e.selector;jQuery(t).removeClass("hide-anything-hidden")})),d([])))};return jQuery("body").on("keyup",e),function(){jQuery("body").off("keyup",e)}}),[]),P((function(){var e=function(e){e.preventDefault(),e.stopPropagation();var t=jQuery(e.currentTarget);t.addClass("active");var n=t.data("selector");h(!0);var r=[].concat(E(f),[{selector:n,devices:c[n]}]),o=E(new Map(r.map((function(e){return[e.selector,e]}))).values());d(o)};return jQuery(document).on("click",".hide-anything-canvas",e),function(){jQuery(document).off("click",".hide-anything-canvas",e)}}),[c]),P((function(){if(S){var e=jQuery;i?(e("body").addClass("hide-anything-active"),g.start(),e("#hide_anything_css").html("")):(h(!1),d([]),e("body").removeClass("hide-anything-active"),g.stop(),e(".hide-anything-canvas").remove(),e("#hide_anything_css").html(k()))}}),[i,c]),P((function(){i&&Object.keys(c).map((function(e){C(e)}))}),[i]),P((function(){S&&f.length&&f.forEach((function(e){var t=e.selector,n=e.devices;u(w(w({},c),{},j({},t,n)))}))}),[f]);var k=function(){var e=Object.keys(c);if(e.length){var t=[],n=[],r=[],o=[];e.map((function(e){var i=c[e];e&&(["desktop","tablet","mobile"].every((function(e){return i.includes(e)}))?t.push(e):(i.includes("desktop")&&n.push(e),i.includes("tablet")&&r.push(e),i.includes("mobile")&&o.push(e)))}));var i="";return t.length&&(i+="".concat(t.join(","),"{display: none !important;}")),n.length&&(i+="@media (min-width: 992px){".concat(n.join(","),"{display: none !important;}}")),r.length&&(i+="@media (min-width: 768px) and (max-width: 991px){".concat(n.join(","),"{display: none !important;}}")),o.length&&(i+="@media (max-width: 767px){".concat(o.join(","),"{display: none !important;}}")),i}};return React.createElement(React.Fragment,null,React.createElement("div",{className:"hide-anything-ignore hide-anything-wrap"},React.createElement("div",{className:"hide-anything-ignore hide-anything-toggle",onClick:function(e){e.stopPropagation(),i||a(!0)}},i?React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none"},React.createElement("path",{d:"M10.5192 12.9897C10.5192 11.5528 10.5192 10.1158 10.5192 8.67891C10.5192 8.5727 10.5127 8.46649 10.5388 8.36653C10.6171 8.02292 10.9697 7.89797 11.2634 8.10414C11.3352 8.15412 11.394 8.21659 11.4527 8.27282C13.5417 10.272 15.6371 12.2775 17.7261 14.2767C17.7783 14.3267 17.837 14.3766 17.8827 14.4391C18.1243 14.7515 17.9807 15.1014 17.5694 15.1513C17.3409 15.1763 17.1124 15.1638 16.884 15.1638C16.0223 15.1638 15.1671 15.1513 14.3054 15.1701C14.1422 15.1763 13.9464 15.2513 13.8289 15.3637C13.0325 16.1384 12.2491 16.9319 11.4592 17.7191C11.283 17.894 11.1067 18.0814 10.813 17.9627C10.5258 17.8503 10.5127 17.6066 10.5127 17.363C10.5192 15.901 10.5192 14.4454 10.5192 12.9897Z",fill:"white"}),React.createElement("path",{d:"M13.5542 2.00657C14.7161 2.00657 15.5191 2.45014 15.7867 3.34978C15.9238 3.80585 15.9107 4.3119 15.9042 4.79296C15.8977 5.12408 15.5386 5.34274 15.1796 5.324C14.8336 5.30525 14.5725 5.06785 14.5529 4.73048C14.5399 4.51182 14.5529 4.29316 14.5464 4.07449C14.5268 3.60593 14.2592 3.34978 13.7761 3.33104C13.5476 3.32479 13.3191 3.33729 13.0907 3.32479C12.7186 3.2998 12.4705 3.04365 12.464 2.69379C12.4575 2.33769 12.7121 2.04405 13.0776 2.01281C13.2278 1.99407 13.391 2.00657 13.5542 2.00657Z",fill:"white"}),React.createElement("path",{d:"M2.00711 4.24306C1.91572 2.91858 2.86227 2.15639 3.74354 2.03768C4.11563 1.9877 4.50078 1.99395 4.8794 2.01894C5.22538 2.03768 5.4865 2.35631 5.47997 2.68742C5.47345 3.03729 5.19927 3.31218 4.82065 3.33092C4.59217 3.34341 4.3637 3.33092 4.13522 3.33717C3.66521 3.35591 3.39756 3.6183 3.39103 4.06812C3.3845 4.27429 3.39756 4.48671 3.39103 4.69288C3.37145 5.06773 3.07769 5.33012 2.69254 5.33012C2.30087 5.33012 2.02669 5.08022 2.00711 4.68663C2.00058 4.53044 2.00711 4.37425 2.00711 4.24306Z",fill:"white"}),React.createElement("path",{d:"M4.32416 15.3263C3.10997 15.3263 2.29397 14.8015 2.0655 13.8019C1.9741 13.3833 2.00022 12.9335 2.02633 12.5024C2.04591 12.2088 2.39842 11.9901 2.71829 12.0026C3.06427 12.0151 3.35803 12.2775 3.37761 12.6148C3.39067 12.8398 3.37761 13.0709 3.38414 13.3021C3.39719 13.7269 3.6779 13.9893 4.12832 14.0018C4.34375 14.008 4.5657 13.9955 4.78112 14.0018C5.18585 14.0143 5.48614 14.3079 5.47308 14.6765C5.46655 15.0389 5.17932 15.3013 4.78112 15.32C4.63097 15.3263 4.48083 15.3263 4.32416 15.3263Z",fill:"white"}),React.createElement("path",{d:"M8.95885 3.33104C8.50189 3.33104 8.04494 3.33729 7.58798 3.33104C7.17019 3.3248 6.86991 3.04991 6.86338 2.68755C6.85685 2.3127 7.17019 2.01907 7.60104 2.01282C8.50189 2.00657 9.40275 2.00657 10.3036 2.01282C10.741 2.01282 11.0347 2.28771 11.0347 2.6813C11.0347 3.06865 10.7671 3.3248 10.3297 3.33104C9.87276 3.33729 9.41581 3.33104 8.95885 3.33104Z",fill:"white"}),React.createElement("path",{d:"M2.00653 8.65392C2.00653 8.22909 2 7.80426 2.00653 7.37318C2.01306 6.93585 2.28083 6.67346 2.69881 6.67346C3.10372 6.67346 3.38455 6.9546 3.38455 7.38567C3.39108 8.23534 3.39108 9.09125 3.38455 9.94091C3.38455 10.3595 3.09719 10.6594 2.69881 10.6656C2.31348 10.6719 2.00653 10.372 2 9.95965C2 9.52857 2.00653 9.09125 2.00653 8.65392Z",fill:"white"}),React.createElement("path",{d:"M14.5403 7.99793C14.5403 7.76677 14.5337 7.54186 14.5403 7.31071C14.5598 6.93585 14.8276 6.68595 15.2064 6.67971C15.5787 6.67346 15.8987 6.92336 15.9117 7.27322C15.9313 7.76053 15.9313 8.25408 15.9117 8.74139C15.8922 9.09125 15.5656 9.3349 15.1933 9.3224C14.8276 9.30991 14.5598 9.0725 14.5403 8.71015C14.5337 8.47274 14.5403 8.23534 14.5403 7.99793Z",fill:"white"}),React.createElement("path",{d:"M8.24715 15.32C8.00562 15.32 7.77061 15.3263 7.52908 15.32C7.15699 15.3013 6.87629 15.0264 6.86323 14.6828C6.85017 14.3454 7.13088 14.0205 7.48991 14.008C7.99909 13.9893 8.50827 13.9893 9.01745 14.008C9.38302 14.0205 9.65719 14.3329 9.65066 14.6765C9.64413 15.0264 9.36996 15.3013 8.99134 15.32C8.7498 15.3325 8.50174 15.32 8.24715 15.32Z",fill:"white"})):React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"21",viewBox:"0 0 25 21",fill:"none"},React.createElement("path",{d:"M2.51757 2.38901C7.28116 7.12226 12.0144 11.8859 16.778 16.6191C17.8096 17.6507 18.8412 18.652 19.8425 19.6836C20.1155 19.987 20.4493 20.1994 20.8741 20.169C21.3899 20.169 21.7843 19.9263 22.0271 19.4408C22.2698 18.925 22.1788 18.4396 21.7843 18.0148C21.2685 17.4687 20.7527 16.9529 20.2066 16.4371C19.9638 16.2247 19.9335 16.1033 20.2066 15.8606C21.936 14.4042 23.1497 12.614 23.9386 10.4902C24.0599 10.1564 24.0599 9.88332 23.9386 9.54957C21.3899 2.63174 13.4405 -0.705805 6.70467 2.41935C6.40126 2.57106 6.21921 2.54072 6.00682 2.29799C5.36966 1.63048 4.73249 0.99331 4.06498 0.356142C3.6402 -0.0382954 3.03337 -0.0989781 2.54791 0.143753C2.06245 0.416825 1.81972 0.99331 1.94108 1.53945C2.00177 1.90355 2.27484 2.14628 2.51757 2.38901ZM9.82983 5.54451C10.5277 5.2411 11.2559 5.05905 12.0144 5.05905C15.7161 5.05905 18.1434 8.94274 16.5656 12.2803C16.4139 12.614 16.3229 12.6747 16.0498 12.4017C15.625 11.9162 15.1699 11.4914 14.6844 11.0363C14.5024 10.8542 14.4417 10.6722 14.4721 10.4295C14.6844 8.79104 13.3191 7.42568 11.6807 7.63806C11.4379 7.66841 11.2559 7.63806 11.0738 7.42567C10.649 6.97055 10.1939 6.48509 9.70847 6.06031C9.43539 5.78724 9.52642 5.66588 9.82983 5.54451Z",fill:"white"}),React.createElement("path",{d:"M8.28319 18.3788C10.4981 19.107 12.7737 19.1374 15.11 18.5609C13.957 17.4383 12.8647 16.346 11.8028 15.2537C11.6814 15.1323 11.5297 15.1627 11.4083 15.1323C9.07206 14.7986 7.3426 13.0691 7.00885 10.7328C6.97851 10.4901 6.88748 10.3384 6.73578 10.1867C5.37042 8.82132 3.97472 7.45596 2.60936 6.06026C2.36662 5.81753 2.24526 5.81753 2.06321 6.0906C1.21365 7.18289 0.576485 8.3662 0.091024 9.64054C-0.0303413 9.94395 -0.0303413 10.217 0.091024 10.5508C1.57775 14.4648 4.30847 17.1045 8.28319 18.3788Z",fill:"white"})),React.createElement("span",{className:"hide-anything-text"},i&&f.length?"Select Devices":i?"Select Anything":"Hide Anything"),React.createElement("div",{className:"hide-anything-ignore hide-anything-action"},i&&React.createElement("span",{className:"ab-icon hide-anything-ignore hide-anything-cancel  dashicons dashicons-no",title:"Cancel",onClick:function(e){a(!1),setActiveItem(null)}}),!!f.length&&React.createElement("span",{className:"ab-icon hide-anything-ignore  dashicons dashicons-saved",title:"Save",onClick:function(e){return function(e){e.stopPropagation(),f.length&&(f.forEach((function(e){var t=e.selector,n=e.visible;p&&n&&(delete c[t],u(c))})),d([])),wp.apiFetch({path:"/hide-anything/v1/update-selectors",method:"POST",data:{activeItems:f,current_page:n,is_admin:t}}),a(!1)}(e)}}))),!!f.length&&React.createElement(m,{exist:p,activeItems:f,setActiveItems:d})))}var T=document.getElementById("wp-admin-bar-hide-anything");T&&wp.element.render(React.createElement(R,null),T)})()})();