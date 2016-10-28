var CETEI=function(){"use strict";var e={};e.classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();var t={handlers:{ptr:['<a href="$rw@target">$@target</a>'],ref:['<a href="$rw@target">',"</a>"],graphic:function(){var e=this;return function(){var t=e.createShadowRoot();this.addShadowStyle(t);var r=new Image;r.src=e.rw(this.getAttribute("url")),this.hasAttribute("width")&&(r.width=this.getAttribute("width").replace(/[^.0-9]/g,"")),this.hasAttribute("height")&&(r.height=this.getAttribute("height").replace(/[^.0-9]/g,"")),t.appendChild(r)}},table:function(){var e=this;return function(){var t=this.createShadowRoot();e.addShadowStyle(t);var r=document.createElement("table");if(r.innerHTML=this.innerHTML,"tei-head"==r.firstElementChild.localName){var a=r.firstElementChild;a.remove();var n=document.createElement("caption");n.innerHTML=a.innerHTML,r.appendChild(n)}var i=!0,l=!1,o=void 0;try{for(var s,h=Array.from(r.querySelectorAll("tei-row"))[Symbol.iterator]();!(i=(s=h.next()).done);i=!0){var c=s.value,u=document.createElement("tr");u.innerHTML=c.innerHTML;var d=!0,f=!1,v=void 0;try{for(var y,m=Array.from(c.attributes)[Symbol.iterator]();!(d=(y=m.next()).done);d=!0){var b=y.value;u.setAttribute(b.name,b.value)}}catch(p){f=!0,v=p}finally{try{!d&&m["return"]&&m["return"]()}finally{if(f)throw v}}c.parentElement.replaceChild(u,c)}}catch(p){l=!0,o=p}finally{try{!i&&h["return"]&&h["return"]()}finally{if(l)throw o}}var g=!0,w=!1,A=void 0;try{for(var T,E=Array.from(r.querySelectorAll("tei-cell"))[Symbol.iterator]();!(g=(T=E.next()).done);g=!0){var M=T.value,L=document.createElement("td");M.hasAttribute("cols")&&L.setAttribute("colspan",M.getAttribute("cols")),L.innerHTML=M.innerHTML;var S=!0,k=!1,H=void 0;try{for(var N,C=Array.from(M.attributes)[Symbol.iterator]();!(S=(N=C.next()).done);S=!0){var x=N.value;L.setAttribute(x.name,x.value)}}catch(p){k=!0,H=p}finally{try{!S&&C["return"]&&C["return"]()}finally{if(k)throw H}}M.parentElement.replaceChild(L,M)}}catch(p){w=!0,A=p}finally{try{!g&&E["return"]&&E["return"]()}finally{if(w)throw A}}t.appendChild(r)}},egXML:function(){var e=this;return function(){var t=this.createShadowRoot();e.addShadowStyle(t),t.innerHTML="<pre>"+e.serialize(this,!0)+"</pre>"}}},fallbacks:{ref:function(e){var t=this;e.addEventListener("click",function(r){window.location=t.rw(e.getAttribute("target"))})},graphic:function(e){var t=new Image;t.src=this.rw(this.getAttribute("url")),e.hasAttribute("width")&&(t.width=e.getAttribute("width").replace(/[^.0-9]/g,"")),e.hasAttribute("height")&&(t.height=e.getAttribute("height").replace(/[^.0-9]/g,"")),e.appendChild(t)},table:function n(e){var n=document.createElement("table");if(n.innerHTML=e.innerHTML,"tei-head"==n.firstElementChild.localName){var t=n.firstElementChild;t.remove();var r=document.createElement("caption");r.innerHTML=t.innerHTML,n.appendChild(r)}var a=!0,i=!1,l=void 0;try{for(var o,s=Array.from(n.querySelectorAll("tei-row"))[Symbol.iterator]();!(a=(o=s.next()).done);a=!0){var h=o.value,c=document.createElement("tr");c.innerHTML=h.innerHTML;var u=!0,d=!1,f=void 0;try{for(var v,y=Array.from(h.attributes)[Symbol.iterator]();!(u=(v=y.next()).done);u=!0){var m=v.value;c.setAttribute(m.name,m.value)}}catch(b){d=!0,f=b}finally{try{!u&&y["return"]&&y["return"]()}finally{if(d)throw f}}h.parentElement.replaceChild(c,h)}}catch(b){i=!0,l=b}finally{try{!a&&s["return"]&&s["return"]()}finally{if(i)throw l}}var p=!0,g=!1,w=void 0;try{for(var A,T=Array.from(n.querySelectorAll("tei-cell"))[Symbol.iterator]();!(p=(A=T.next()).done);p=!0){var E=A.value,M=document.createElement("td");E.hasAttribute("cols")&&M.setAttribute("colspan",E.getAttribute("cols")),M.innerHTML=E.innerHTML;var L=!0,S=!1,k=void 0;try{for(var H,N=Array.from(E.attributes)[Symbol.iterator]();!(L=(H=N.next()).done);L=!0){var C=H.value;M.setAttribute(C.name,C.value)}}catch(b){S=!0,k=b}finally{try{!L&&N["return"]&&N["return"]()}finally{if(S)throw k}}E.parentElement.replaceChild(M,E)}}catch(b){g=!0,w=b}finally{try{!p&&T["return"]&&T["return"]()}finally{if(g)throw w}}e.innerHTML='<span style="display:none">'+e.innerHTML+"</span>",e.appendChild(n)},egXML:function(e){var t=this.serialize(e,!0);e.innerHTML='<span style="display:none">'+e.innerHTML+"</span>",e.innerHTML+="<pre>"+t+"</pre>"}}},r=function(){function r(a){if(e.classCallCheck(this,r),this.els=[],this.behaviors=[],this.hasStyle=!1,this.prefixes=[],a)this.base=a;else try{window&&(this.base=window.location.href.replace(/\/[^\/]*$/,"/"))}catch(n){this.base=""}this.behaviors.push(t),this.shadowCSS}return e.createClass(r,[{key:"getHTML5",value:function(e,t,r){var a=this,n=new Promise(function(t,r){var a=new XMLHttpRequest;a.open("GET",e),a.send(),a.onload=function(){this.status>=200&&this.status<300?t(this.response):r(this.statusText)},a.onerror=function(){r(this.statusText)}})["catch"](function(e){console.log(e)});return n.then(function(e){return a.makeHTML5(e,t,r)})}},{key:"makeHTML5",value:function(e,t,r){var a=this,n=(new DOMParser).parseFromString(e,"text/xml");this._fromTEI(n);var i=function l(e){var t=void 0,n=!1;switch(e.namespaceURI){case"http://www.tei-c.org/ns/1.0":t=document.createElement("tei-"+e.tagName);break;case"http://www.tei-c.org/ns/Examples":if("egXML"==e.tagName){t=document.createElement("teieg-"+e.tagName);break}default:t=document.importNode(e,!1),n=!0}var i=!0,o=!1,s=void 0;try{for(var h,c=Array.from(e.attributes)[Symbol.iterator]();!(i=(h=c.next()).done);i=!0){var u=h.value;"xmlns"!=u.name||n?t.setAttribute(u.name,u.value):t.setAttribute("data-xmlns",u.value),"xml:id"!=u.name||n||t.setAttribute("id",u.value),"xml:lang"!=u.name||n||t.setAttribute("lang",u.value),"rendition"==u.name&&t.setAttribute("class",u.value.replace(/#/g,""))}}catch(d){o=!0,s=d}finally{try{!i&&c["return"]&&c["return"]()}finally{if(o)throw s}}if(t.setAttribute("data-teiname",e.localName),"tagsDecl"==e.localName){var f=document.createElement("style"),v=!0,y=!1,m=void 0;try{for(var b,p=Array.from(e.childNodes)[Symbol.iterator]();!(v=(b=p.next()).done);v=!0){var g=b.value;if(g.nodeType==Node.ELEMENT_NODE&&"rendition"==g.localName&&"css"==g.getAttribute("scheme")){var w="";g.hasAttribute("selector")?(w+=g.getAttribute("selector").replace(/([^#, >]+\w*)/g,"tei-$1").replace(/#tei-/g,"#")+"{\n",w+=g.textContent):(w+="."+g.getAttribute("xml:id")+"{\n",w+=g.textContent),w+="\n}\n",f.appendChild(document.createTextNode(w))}}}catch(d){y=!0,m=d}finally{try{!v&&p["return"]&&p["return"]()}finally{if(y)throw m}}f.childNodes.length>0&&(t.appendChild(f),a.hasStyle=!0)}"prefixDef"==e.localName&&(a.prefixes.push(e.getAttribute("ident")),a.prefixes[e.getAttribute("ident")]={matchPattern:e.getAttribute("matchPattern"),replacementPattern:e.getAttribute("replacementPattern")});var A=!0,T=!1,E=void 0;try{for(var M,L=Array.from(e.childNodes)[Symbol.iterator]();!(A=(M=L.next()).done);A=!0){var S=M.value;S.nodeType==Node.ELEMENT_NODE?t.appendChild(l(S)):t.appendChild(S.cloneNode())}}catch(d){T=!0,E=d}finally{try{!A&&L["return"]&&L["return"]()}finally{if(T)throw E}}return r&&r(t),t};return this.dom=i(n.documentElement),document.registerElement?this.registerAll(this.els):this.fallback(this.els),this.done=!0,t?void t(this.dom,this):this.dom}},{key:"addStyle",value:function(e,t){this.hasStyle&&e.getElementsByTagName("head").item(0).appendChild(t.getElementsByTagName("style").item(0).cloneNode(!0))}},{key:"addShadowStyle",value:function(e){this.shadowCSS&&(e.innerHTML='<style>@import url("'+this.shadowCSS+'");</style>'+e.innerHTML)}},{key:"addBehaviors",value:function(e){e.handlers||e.fallbacks?this.behaviors.push(e):console.log("No handlers or fallback methods found.")}},{key:"setBaseUrl",value:function(e){this.base=e}},{key:"_fromTEI",value:function(e){var t=e.documentElement;this.els=new Set(Array.from(t.getElementsByTagName("*"),function(e){return e.tagName})),this.els.add(t.tagName)}},{key:"_insert",value:function(e,t){if(e.createShadowRoot){var r=e.createShadowRoot();this.addShadowStyle(r),r.innerHTML+=t[0]+e.innerHTML+(t[1]?t[1]:"")}else{t.length>1?t[0].includes("<")&&t[1].includes("</")?e.innerHTML=t[0]+e.innerHTML+t[1]:e.innerHTML="<span>"+t[0]+"</span>"+e.innerHTML+"<span>"+t[1]+"</span>":t[0].includes("<")?e.innerHTML=t[0]+e.innerHTML:e.innerHTML="<span>"+t[0]+"</span>"+e.innerHTML}}},{key:"_template",value:function(e,t){var r=e;if(e.search(/$(\w*)@(\w+)/))for(var a=/\$(\w*)@(\w+)/g,n=void 0;n=a.exec(e);)t.hasAttribute(n[2])&&(r=n[1]&&this[n[1]]?r.replace(n[0],this[n[1]].call(this,t.getAttribute(n[2]))):r.replace(n[0],t.getAttribute(n[2])));return r}},{key:"tagName",value:function(e){return"egXML"==e?"teieg-"+e:"tei-"+e}},{key:"decorator",value:function(e){return function(){var t=this;return function(r){var a=[];this!=t&&(r=this);for(var n=0;n<e.length;n++)a.push(t._template(e[n],r));t._insert(r,a)}}}},{key:"getHandler",value:function(e){for(var t=this.behaviors.length-1;t>=0;t--)if(this.behaviors[t].handlers[e])return Array.isArray(this.behaviors[t].handlers[e])?this.decorator(this.behaviors[t].handlers[e]):this.behaviors[t].handlers[e]}},{key:"getFallback",value:function(e){for(var t=this.behaviors.length-1;t>=0;t--){if(this.behaviors[t].fallbacks[e])return Array.isArray(this.behaviors[t].fallbacks[e])?this.decorator(this.behaviors[t].fallbacks[e]).call(this):this.behaviors[t].fallbacks[e];if(this.behaviors[t].handlers[e]&&Array.isArray(this.behaviors[t].handlers[e]))return this.decorator(this.behaviors[t].handlers[e]).call(this);if(this.behaviors[t].handlers[e]&&1==this.behaviors[t].handlers[e].call(this).length)return this.behaviors[t].handlers[e].call(this)}}},{key:"registerAll",value:function(e){var t=!0,r=!1,a=void 0;try{for(var n,i=e[Symbol.iterator]();!(t=(n=i.next()).done);t=!0){var l=n.value,o=Object.create(HTMLElement.prototype),s=this.getHandler(l);s&&(o.createdCallback=s.call(this));var h=this.tagName(l);try{document.registerElement(h,{prototype:o})}catch(c){console.log(h+" couldn't be registered or is already registered."),console.log(c)}}}catch(u){r=!0,a=u}finally{try{!t&&i["return"]&&i["return"]()}finally{if(r)throw a}}}},{key:"fallback",value:function(e){var t=!0,r=!1,a=void 0;try{for(var n,i=e[Symbol.iterator]();!(t=(n=i.next()).done);t=!0){var l=n.value,o=this.getFallback(l);if(o){var s=!0,h=!1,c=void 0;try{for(var u,d=Array.from(this.dom.getElementsByTagName(this.tagName(l)))[Symbol.iterator]();!(s=(u=d.next()).done);s=!0){var f=u.value;o.call(this,f)}}catch(v){h=!0,c=v}finally{try{!s&&d["return"]&&d["return"]()}finally{if(h)throw c}}}}}catch(v){r=!0,a=v}finally{try{!t&&i["return"]&&i["return"]()}finally{if(r)throw a}}}},{key:"rw",value:function(e){return e.match(/^(?:http|mailto|file|\/|#).*$/)?e:this.base+e}},{key:"first",value:function(e){return e.replace(/ .*$/,"")}},{key:"serialize",value:function(e,t){var r="";if(!t){r+="&lt;"+e.getAttribute("data-teiname");var a=!0,n=!1,i=void 0;try{for(var l,o=Array.from(e.attributes)[Symbol.iterator]();!(a=(l=o.next()).done);a=!0){var s=l.value;s.name.startsWith("data-")||["id","lang","class"].includes(s.name)||(r+=" "+s.name+'="'+s.value+'"')}}catch(h){n=!0,i=h}finally{try{!a&&o["return"]&&o["return"]()}finally{if(n)throw i}}r+=e.childNodes.length>0?">":"/>"}var c=!0,u=!1,d=void 0;try{for(var f,v=Array.from(e.childNodes)[Symbol.iterator]();!(c=(f=v.next()).done);c=!0){var y=f.value;switch(y.nodeType){case Node.ELEMENT_NODE:r+=this.serialize(y);break;case Node.COMMENT_NODE:r+="&lt;!--"+y.nodeValue+"-->";break;default:r+=y.nodeValue}}}catch(h){u=!0,d=h}finally{try{!c&&v["return"]&&v["return"]()}finally{if(u)throw d}}return!t&&e.childNodes.length>0&&(r+="&lt;/"+e.getAttribute("data-teiname")+">"),r}},{key:"fromODD",value:function(){}}]),r}();try{window&&(window.CETEI=r)}catch(a){}return r}();