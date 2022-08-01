
//========= jQuery
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){var n=[],r=e.document,i=n.slice,o=n.concat,a=n.push,s=n.indexOf,u={},l=u.toString,c=u.hasOwnProperty,f={},d=function(e,t){return new d.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,h=/^-ms-/,g=/-([\da-z])/gi,m=function(e,t){return t.toUpperCase()};function v(e){var t=!!e&&"length"in e&&e.length,n=d.type(e);return"function"!==n&&!d.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}d.fn=d.prototype={jquery:"1.12.4",constructor:d,selector:"",length:0,toArray:function(){return i.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:i.call(this)},pushStack:function(e){var t=d.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e){return d.each(this,e)},map:function(e){return this.pushStack(d.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(i.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:a,sort:n.sort,splice:n.splice},d.extend=d.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||d.isFunction(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(i=arguments[s]))for(r in i)e=a[r],a!==(n=i[r])&&(l&&n&&(d.isPlainObject(n)||(t=d.isArray(n)))?(t?(t=!1,o=e&&d.isArray(e)?e:[]):o=e&&d.isPlainObject(e)?e:{},a[r]=d.extend(l,o,n)):void 0!==n&&(a[r]=n));return a},d.extend({expando:"jQuery"+("1.12.4"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===d.type(e)},isArray:Array.isArray||function(e){return"array"===d.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){var t=e&&e.toString();return!d.isArray(e)&&t-parseFloat(t)+1>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==d.type(e)||e.nodeType||d.isWindow(e))return!1;try{if(e.constructor&&!c.call(e,"constructor")&&!c.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}if(!f.ownFirst)for(t in e)return c.call(e,t);for(t in e);return void 0===t||c.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?u[l.call(e)]||"object":typeof e},globalEval:function(t){t&&d.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(h,"ms-").replace(g,m)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var n,r=0;if(v(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(v(Object(e))?d.merge(n,"string"==typeof e?[e]:e):a.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(s)return s.call(t,e,n);for(r=t.length,n=n?n<0?Math.max(0,r+n):n:0;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;)e[i++]=t[r++];if(n!=n)for(;void 0!==t[r];)e[i++]=t[r++];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,a=0,s=[];if(v(e))for(r=e.length;a<r;a++)null!=(i=t(e[a],a,n))&&s.push(i);else for(a in e)null!=(i=t(e[a],a,n))&&s.push(i);return o.apply([],s)},guid:1,proxy:function(e,t){var n,r,o;if("string"==typeof t&&(o=e[t],t=e,e=o),d.isFunction(e))return n=i.call(arguments,2),(r=function(){return e.apply(t||this,n.concat(i.call(arguments)))}).guid=e.guid=e.guid||d.guid++,r},now:function(){return+new Date},support:f}),"function"==typeof Symbol&&(d.fn[Symbol.iterator]=n[Symbol.iterator]),d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){u["[object "+t+"]"]=t.toLowerCase()});var y=function(e){var t,n,r,i,o,a,s,u,l,c,f,d,p,h,g,m,v,y,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=oe(),N=oe(),k=oe(),S=function(e,t){return e===t&&(f=!0),0},A=1<<31,D={}.hasOwnProperty,j=[],L=j.pop,H=j.push,q=j.push,_=j.slice,F=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},M="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",O="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",P="\\["+O+"*("+R+")(?:"+O+"*([*^$|!~]?=)"+O+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+O+"*\\]",B=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",W=new RegExp(O+"+","g"),I=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),$=new RegExp("^"+O+"*,"+O+"*"),z=new RegExp("^"+O+"*([>+~]|"+O+")"+O+"*"),X=new RegExp("="+O+"*([^\\]'\"]*?)"+O+"*\\]","g"),U=new RegExp(B),V=new RegExp("^"+R+"$"),Y={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+B),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),bool:new RegExp("^(?:"+M+")$","i"),needsContext:new RegExp("^"+O+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)","i")},J=/^(?:input|select|textarea|button)$/i,G=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/[+~]/,ee=/'|\\/g,te=new RegExp("\\\\([\\da-f]{1,6}"+O+"?|("+O+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=function(){d()};try{q.apply(j=_.call(w.childNodes),w.childNodes),j[w.childNodes.length].nodeType}catch(e){q={apply:j.length?function(e,t){H.apply(e,_.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function ie(e,t,r,i){var o,s,l,c,f,h,v,y,T=t&&t.ownerDocument,C=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==C&&9!==C&&11!==C)return r;if(!i&&((t?t.ownerDocument||t:w)!==p&&d(t),t=t||p,g)){if(11!==C&&(h=K.exec(e)))if(o=h[1]){if(9===C){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(T&&(l=T.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(h[2])return q.apply(r,t.getElementsByTagName(e)),r;if((o=h[3])&&n.getElementsByClassName&&t.getElementsByClassName)return q.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!k[e+" "]&&(!m||!m.test(e))){if(1!==C)T=t,y=e;else if("object"!==t.nodeName.toLowerCase()){for((c=t.getAttribute("id"))?c=c.replace(ee,"\\$&"):t.setAttribute("id",c=b),s=(v=a(e)).length,f=V.test(c)?"#"+c:"[id='"+c+"']";s--;)v[s]=f+" "+ge(v[s]);y=v.join(","),T=Z.test(e)&&pe(t.parentNode)||t}if(y)try{return q.apply(r,T.querySelectorAll(y)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(I,"$1"),t,r,i)}function oe(){var e=[];return function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function ae(e){return e[b]=!0,e}function se(e){var t=p.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ue(e,t){for(var n=e.split("|"),i=n.length;i--;)r.attrHandle[n[i]]=t}function le(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||A)-(~e.sourceIndex||A);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function ce(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function fe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return ae(function(t){return t=+t,ae(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function pe(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=ie.support={},o=ie.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},d=ie.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==p&&9===a.nodeType&&a.documentElement?(h=(p=a).documentElement,g=!o(p),(i=p.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=se(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=se(function(e){return e.appendChild(p.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(p.getElementsByClassName),n.getById=se(function(e){return h.appendChild(e).id=b,!p.getElementsByName||!p.getElementsByName(b).length}),n.getById?(r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}},r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}}):(delete r.find.ID,r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],m=[],(n.qsa=Q.test(p.querySelectorAll))&&(se(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+O+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+O+"*(?:value|"+M+")"),e.querySelectorAll("[id~="+b+"-]").length||m.push("~="),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||m.push(".#.+[+~]")}),se(function(e){var t=p.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+O+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")})),(n.matchesSelector=Q.test(y=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&se(function(e){n.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),v.push("!=",B)}),m=m.length&&new RegExp(m.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},S=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===p||e.ownerDocument===w&&x(w,e)?-1:t===p||t.ownerDocument===w&&x(w,t)?1:c?F(c,e)-F(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===p?-1:t===p?1:i?-1:o?1:c?F(c,e)-F(c,t):0;if(i===o)return le(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);for(;a[r]===s[r];)r++;return r?le(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},p):p},ie.matches=function(e,t){return ie(e,null,null,t)},ie.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&d(e),t=t.replace(X,"='$1']"),n.matchesSelector&&g&&!k[t+" "]&&(!v||!v.test(t))&&(!m||!m.test(t)))try{var r=y.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return ie(t,p,null,[e]).length>0},ie.contains=function(e,t){return(e.ownerDocument||e)!==p&&d(e),x(e,t)},ie.attr=function(e,t){(e.ownerDocument||e)!==p&&d(e);var i=r.attrHandle[t.toLowerCase()],o=i&&D.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},ie.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ie.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(S),f){for(;t=e[o++];)t===e[o]&&(i=r.push(o));for(;i--;)e.splice(r[i],1)}return c=null,e},i=ie.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t);return n},(r=ie.selectors={cacheLength:50,createPseudo:ae,match:Y,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ie.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ie.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return Y.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&U.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ie.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(W," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,d,p,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!u&&!s,x=!1;if(m){if(o){for(;g;){for(d=t;d=d[g];)if(s?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&y){for(x=(p=(l=(c=(f=(d=m)[b]||(d[b]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],d=p&&m.childNodes[p];d=++p&&d&&d[g]||(x=p=0)||h.pop();)if(1===d.nodeType&&++x&&d===t){c[e]=[T,p,x];break}}else if(y&&(x=p=(l=(c=(f=(d=t)[b]||(d[b]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)for(;(d=++p&&d&&d[g]||(x=p=0)||h.pop())&&((s?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++x||(y&&((c=(f=d[b]||(d[b]={}))[d.uniqueID]||(f[d.uniqueID]={}))[e]=[T,x]),d!==t)););return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||ie.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?ae(function(e,n){for(var r,o=i(e,t),a=o.length;a--;)e[r=F(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:ae(function(e){var t=[],n=[],r=s(e.replace(I,"$1"));return r[b]?ae(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:ae(function(e){return function(t){return ie(e,t).length>0}}),contains:ae(function(e){return e=e.replace(te,ne),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:ae(function(e){return V.test(e||"")||ie.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return G.test(e.nodeName)},input:function(e){return J.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:de(function(){return[0]}),last:de(function(e,t){return[t-1]}),eq:de(function(e,t,n){return[n<0?n+t:n]}),even:de(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:de(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:de(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:de(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=ce(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=fe(t);function he(){}function ge(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=C++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l,c=[T,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if((s=(u=(l=t[b]||(t[b]={}))[t.uniqueID]||(l[t.uniqueID]={}))[r])&&s[0]===T&&s[1]===o)return c[2]=s[2];if(u[r]=c,c[2]=e(t,n,a))return!0}}}function ve(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function ye(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function xe(e,t,n,r,i,o){return r&&!r[b]&&(r=xe(r)),i&&!i[b]&&(i=xe(i,o)),ae(function(o,a,s,u){var l,c,f,d=[],p=[],h=a.length,g=o||function(e,t,n){for(var r=0,i=t.length;r<i;r++)ie(e,t[r],n);return n}(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:ye(g,d,e,s,u),v=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,v,s,u),r)for(l=ye(v,p),r(l,[],s,u),c=l.length;c--;)(f=l[c])&&(v[p[c]]=!(m[p[c]]=f));if(o){if(i||e){if(i){for(l=[],c=v.length;c--;)(f=v[c])&&l.push(m[c]=f);i(null,v=[],l,u)}for(c=v.length;c--;)(f=v[c])&&(l=i?F(o,f):d[c])>-1&&(o[l]=!(a[l]=f))}}else v=ye(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):q.apply(a,v)})}function be(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return F(t,e)>-1},s,!0),d=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])d=[me(ve(d),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o&&!r.relative[e[i].type];i++);return xe(u>1&&ve(d),u>1&&ge(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(I,"$1"),n,u<i&&be(e.slice(u,i)),i<o&&be(e=e.slice(i)),i<o&&ge(e))}d.push(n)}return ve(d)}return he.prototype=r.filters=r.pseudos,r.setFilters=new he,a=ie.tokenize=function(e,t){var n,i,o,a,s,u,l,c=N[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=r.preFilter;s;){for(a in n&&!(i=$.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=z.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(I," ")}),s=s.slice(n.length)),r.filter)!(i=Y[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?ie.error(e):N(e,u).slice(0)},s=ie.compile=function(e,t){var n,i=[],o=[],s=k[e+" "];if(!s){for(t||(t=a(e)),n=t.length;n--;)(s=be(t[n]))[b]?i.push(s):o.push(s);(s=k(e,function(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,m,v=0,y="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,N=C.length;for(c&&(l=a===p||a||c);y!==N&&null!=(f=C[y]);y++){if(i&&f){for(h=0,a||f.ownerDocument===p||(d(f),s=!g);m=e[h++];)if(m(f,a||p,s)){u.push(f);break}c&&(T=E)}n&&((f=!m&&f)&&v--,o&&x.push(f))}if(v+=y,n&&y!==v){for(h=0;m=t[h++];)m(x,b,a,s);if(o){if(v>0)for(;y--;)x[y]||b[y]||(b[y]=L.call(u));b=ye(b)}q.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&ie.uniqueSort(u)}return c&&(T=E,l=w),x};return n?ae(o):o}(o,i))).selector=e}return s},u=ie.select=function(e,t,i,o){var u,l,c,f,d,p="function"==typeof e&&e,h=!o&&a(e=p.selector||e);if(i=i||[],1===h.length){if((l=h[0]=h[0].slice(0)).length>2&&"ID"===(c=l[0]).type&&n.getById&&9===t.nodeType&&g&&r.relative[l[1].type]){if(!(t=(r.find.ID(c.matches[0].replace(te,ne),t)||[])[0]))return i;p&&(t=t.parentNode),e=e.slice(l.shift().value.length)}for(u=Y.needsContext.test(e)?0:l.length;u--&&(c=l[u],!r.relative[f=c.type]);)if((d=r.find[f])&&(o=d(c.matches[0].replace(te,ne),Z.test(l[0].type)&&pe(t.parentNode)||t))){if(l.splice(u,1),!(e=o.length&&ge(l)))return q.apply(i,o),i;break}}return(p||s(e,h))(o,t,!g,i,!t||Z.test(e)&&pe(t.parentNode)||t),i},n.sortStable=b.split("").sort(S).join("")===b,n.detectDuplicates=!!f,d(),n.sortDetached=se(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),se(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ue("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&se(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ue("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),se(function(e){return null==e.getAttribute("disabled")})||ue(M,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),ie}(e);d.find=y,d.expr=y.selectors,d.expr[":"]=d.expr.pseudos,d.uniqueSort=d.unique=y.uniqueSort,d.text=y.getText,d.isXMLDoc=y.isXML,d.contains=y.contains;var x=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&d(e).is(n))break;r.push(e)}return r},b=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},w=d.expr.match.needsContext,T=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,C=/^.[^:#\[\.,]*$/;function E(e,t,n){if(d.isFunction(t))return d.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return d.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(C.test(t))return d.filter(t,e,n);t=d.filter(t,e)}return d.grep(e,function(e){return d.inArray(e,t)>-1!==n})}d.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?d.find.matchesSelector(r,e)?[r]:[]:d.find.matches(e,d.grep(t,function(e){return 1===e.nodeType}))},d.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(d(e).filter(function(){for(t=0;t<i;t++)if(d.contains(r[t],this))return!0}));for(t=0;t<i;t++)d.find(e,r[t],n);return(n=this.pushStack(i>1?d.unique(n):n)).selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(E(this,e||[],!1))},not:function(e){return this.pushStack(E(this,e||[],!0))},is:function(e){return!!E(this,"string"==typeof e&&w.test(e)?d(e):e||[],!1).length}});var N,k=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(d.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||N,"string"==typeof e){if(!(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:k.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof d?t[0]:t,d.merge(this,d.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),T.test(i[1])&&d.isPlainObject(t))for(i in t)d.isFunction(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}if((o=r.getElementById(i[2]))&&o.parentNode){if(o.id!==i[2])return N.find(e);this.length=1,this[0]=o}return this.context=r,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):d.isFunction(e)?void 0!==n.ready?n.ready(e):e(d):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),d.makeArray(e,this))}).prototype=d.fn,N=d(r);var S=/^(?:parents|prev(?:Until|All))/,A={children:!0,contents:!0,next:!0,prev:!0};function D(e,t){do{e=e[t]}while(e&&1!==e.nodeType);return e}d.fn.extend({has:function(e){var t,n=d(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(d.contains(this,n[t]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=w.test(e)||"string"!=typeof e?d(e,t||this.context):0;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&d.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?d.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?d.inArray(this[0],d(e)):d.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(d.uniqueSort(d.merge(this.get(),d(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),d.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x(e,"parentNode")},parentsUntil:function(e,t,n){return x(e,"parentNode",n)},next:function(e){return D(e,"nextSibling")},prev:function(e){return D(e,"previousSibling")},nextAll:function(e){return x(e,"nextSibling")},prevAll:function(e){return x(e,"previousSibling")},nextUntil:function(e,t,n){return x(e,"nextSibling",n)},prevUntil:function(e,t,n){return x(e,"previousSibling",n)},siblings:function(e){return b((e.parentNode||{}).firstChild,e)},children:function(e){return b(e.firstChild)},contents:function(e){return d.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:d.merge([],e.childNodes)}},function(e,t){d.fn[e]=function(n,r){var i=d.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=d.filter(r,i)),this.length>1&&(A[e]||(i=d.uniqueSort(i)),S.test(e)&&(i=i.reverse())),this.pushStack(i)}});var j,L,H=/\S+/g;function q(){r.addEventListener?(r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_)):(r.detachEvent("onreadystatechange",_),e.detachEvent("onload",_))}function _(){(r.addEventListener||"load"===e.event.type||"complete"===r.readyState)&&(q(),d.ready())}for(L in d.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return d.each(e.match(H)||[],function(e,n){t[n]=!0}),t}(e):d.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=e.once,r=t=!0;a.length;s=-1)for(n=a.shift();++s<o.length;)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1);e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){d.each(n,function(n,r){d.isFunction(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==d.type(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return d.each(arguments,function(e,t){for(var n;(n=d.inArray(t,o,n))>-1;)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?d.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=!0,n||l.disable(),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l},d.extend({Deferred:function(e){var t=[["resolve","done",d.Callbacks("once memory"),"resolved"],["reject","fail",d.Callbacks("once memory"),"rejected"],["notify","progress",d.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return d.Deferred(function(n){d.each(t,function(t,o){var a=d.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&d.isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?d.extend(e,r):r}},i={};return r.pipe=r.then,d.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,o=0,a=i.call(arguments),s=a.length,u=1!==s||e&&d.isFunction(e.promise)?s:0,l=1===u?e:d.Deferred(),c=function(e,n,r){return function(o){n[e]=this,r[e]=arguments.length>1?i.call(arguments):o,r===t?l.notifyWith(n,r):--u||l.resolveWith(n,r)}};if(s>1)for(t=new Array(s),n=new Array(s),r=new Array(s);o<s;o++)a[o]&&d.isFunction(a[o].promise)?a[o].promise().progress(c(o,n,t)).done(c(o,r,a)).fail(l.reject):--u;return u||l.resolveWith(r,a),l.promise()}}),d.fn.ready=function(e){return d.ready.promise().done(e),this},d.extend({isReady:!1,readyWait:1,holdReady:function(e){e?d.readyWait++:d.ready(!0)},ready:function(e){(!0===e?--d.readyWait:d.isReady)||(d.isReady=!0,!0!==e&&--d.readyWait>0||(j.resolveWith(r,[d]),d.fn.triggerHandler&&(d(r).triggerHandler("ready"),d(r).off("ready"))))}}),d.ready.promise=function(t){if(!j)if(j=d.Deferred(),"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll)e.setTimeout(d.ready);else if(r.addEventListener)r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_);else{r.attachEvent("onreadystatechange",_),e.attachEvent("onload",_);var n=!1;try{n=null==e.frameElement&&r.documentElement}catch(e){}n&&n.doScroll&&function t(){if(!d.isReady){try{n.doScroll("left")}catch(n){return e.setTimeout(t,50)}q(),d.ready()}}()}return j.promise(t)},d.ready.promise(),d(f))break;f.ownFirst="0"===L,f.inlineBlockNeedsLayout=!1,d(function(){var e,t,n,i;(n=r.getElementsByTagName("body")[0])&&n.style&&(t=r.createElement("div"),(i=r.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(i).appendChild(t),void 0!==t.style.zoom&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",f.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(n.style.zoom=1)),n.removeChild(i))}),function(){var e=r.createElement("div");f.deleteExpando=!0;try{delete e.test}catch(e){f.deleteExpando=!1}e=null}();var F,M=function(e){var t=d.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return(1===n||9===n)&&(!t||!0!==t&&e.getAttribute("classid")===t)},O=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,R=/([A-Z])/g;function P(e,t,n){if(void 0===n&&1===e.nodeType){var r="data-"+t.replace(R,"-$1").toLowerCase();if("string"==typeof(n=e.getAttribute(r))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:O.test(n)?d.parseJSON(n):n)}catch(e){}d.data(e,t,n)}else n=void 0}return n}function B(e){var t;for(t in e)if(("data"!==t||!d.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function W(e,t,r,i){if(M(e)){var o,a,s=d.expando,u=e.nodeType,l=u?d.cache:e,c=u?e[s]:e[s]&&s;if(c&&l[c]&&(i||l[c].data)||void 0!==r||"string"!=typeof t)return c||(c=u?e[s]=n.pop()||d.guid++:s),l[c]||(l[c]=u?{}:{toJSON:d.noop}),"object"!=typeof t&&"function"!=typeof t||(i?l[c]=d.extend(l[c],t):l[c].data=d.extend(l[c].data,t)),a=l[c],i||(a.data||(a.data={}),a=a.data),void 0!==r&&(a[d.camelCase(t)]=r),"string"==typeof t?null==(o=a[t])&&(o=a[d.camelCase(t)]):o=a,o}}function I(e,t,n){if(M(e)){var r,i,o=e.nodeType,a=o?d.cache:e,s=o?e[d.expando]:d.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){i=(t=d.isArray(t)?t.concat(d.map(t,d.camelCase)):t in r?[t]:(t=d.camelCase(t))in r?[t]:t.split(" ")).length;for(;i--;)delete r[t[i]];if(n?!B(r):!d.isEmptyObject(r))return}(n||(delete a[s].data,B(a[s])))&&(o?d.cleanData([e],!0):f.deleteExpando||a!=a.window?delete a[s]:a[s]=void 0)}}}d.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return!!(e=e.nodeType?d.cache[e[d.expando]]:e[d.expando])&&!B(e)},data:function(e,t,n){return W(e,t,n)},removeData:function(e,t){return I(e,t)},_data:function(e,t,n){return W(e,t,n,!0)},_removeData:function(e,t){return I(e,t,!0)}}),d.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=d.data(o),1===o.nodeType&&!d._data(o,"parsedAttrs"))){for(n=a.length;n--;)a[n]&&0===(r=a[n].name).indexOf("data-")&&P(o,r=d.camelCase(r.slice(5)),i[r]);d._data(o,"parsedAttrs",!0)}return i}return"object"==typeof e?this.each(function(){d.data(this,e)}):arguments.length>1?this.each(function(){d.data(this,e,t)}):o?P(o,e,d.data(o,e)):void 0},removeData:function(e){return this.each(function(){d.removeData(this,e)})}}),d.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=d._data(e,t),n&&(!r||d.isArray(n)?r=d._data(e,t,d.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=d.queue(e,t),r=n.length,i=n.shift(),o=d._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){d.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return d._data(e,n)||d._data(e,n,{empty:d.Callbacks("once memory").add(function(){d._removeData(e,t+"queue"),d._removeData(e,n)})})}}),d.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?d.queue(this[0],e):void 0===t?this:this.each(function(){var n=d.queue(this,e,t);d._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&d.dequeue(this,e)})},dequeue:function(e){return this.each(function(){d.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=d.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=d._data(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}}),f.shrinkWrapBlocks=function(){return null!=F?F:(F=!1,(t=r.getElementsByTagName("body")[0])&&t.style?(e=r.createElement("div"),(n=r.createElement("div")).style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",t.appendChild(n).appendChild(e),void 0!==e.style.zoom&&(e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",e.appendChild(r.createElement("div")).style.width="5px",F=3!==e.offsetWidth),t.removeChild(n),F):void 0);var e,t,n};var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,z=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),X=["Top","Right","Bottom","Left"],U=function(e,t){return e=t||e,"none"===d.css(e,"display")||!d.contains(e.ownerDocument,e)};function V(e,t,n,r){var i,o=1,a=20,s=r?function(){return r.cur()}:function(){return d.css(e,t,"")},u=s(),l=n&&n[3]||(d.cssNumber[t]?"":"px"),c=(d.cssNumber[t]||"px"!==l&&+u)&&z.exec(d.css(e,t));if(c&&c[3]!==l){l=l||c[3],n=n||[],c=+u||1;do{c/=o=o||".5",d.style(e,t,c+l)}while(o!==(o=s()/u)&&1!==o&&--a)}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var Y,J,G,Q=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===d.type(n))for(s in i=!0,n)Q(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,d.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(d(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},K=/^(?:checkbox|radio)$/i,Z=/<([\w:-]+)/,ee=/^$|\/(?:java|ecma)script/i,te=/^\s+/,ne="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function re(e){var t=ne.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}Y=r.createElement("div"),J=r.createDocumentFragment(),G=r.createElement("input"),Y.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",f.leadingWhitespace=3===Y.firstChild.nodeType,f.tbody=!Y.getElementsByTagName("tbody").length,f.htmlSerialize=!!Y.getElementsByTagName("link").length,f.html5Clone="<:nav></:nav>"!==r.createElement("nav").cloneNode(!0).outerHTML,G.type="checkbox",G.checked=!0,J.appendChild(G),f.appendChecked=G.checked,Y.innerHTML="<textarea>x</textarea>",f.noCloneChecked=!!Y.cloneNode(!0).lastChild.defaultValue,J.appendChild(Y),(G=r.createElement("input")).setAttribute("type","radio"),G.setAttribute("checked","checked"),G.setAttribute("name","t"),Y.appendChild(G),f.checkClone=Y.cloneNode(!0).cloneNode(!0).lastChild.checked,f.noCloneEvent=!!Y.addEventListener,Y[d.expando]=1,f.attributes=!Y.getAttribute(d.expando);var ie={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:f.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};function oe(e,t){var n,r,i=0,o=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):void 0;if(!o)for(o=[],n=e.childNodes||e;null!=(r=n[i]);i++)!t||d.nodeName(r,t)?o.push(r):d.merge(o,oe(r,t));return void 0===t||t&&d.nodeName(e,t)?d.merge([e],o):o}function ae(e,t){for(var n,r=0;null!=(n=e[r]);r++)d._data(n,"globalEval",!t||d._data(t[r],"globalEval"))}ie.optgroup=ie.option,ie.tbody=ie.tfoot=ie.colgroup=ie.caption=ie.thead,ie.th=ie.td;var se=/<|&#?\w+;/,ue=/<tbody/i;function le(e){K.test(e.type)&&(e.defaultChecked=e.checked)}function ce(e,t,n,r,i){for(var o,a,s,u,l,c,p,h=e.length,g=re(t),m=[],v=0;v<h;v++)if((a=e[v])||0===a)if("object"===d.type(a))d.merge(m,a.nodeType?[a]:a);else if(se.test(a)){for(u=u||g.appendChild(t.createElement("div")),l=(Z.exec(a)||["",""])[1].toLowerCase(),p=ie[l]||ie._default,u.innerHTML=p[1]+d.htmlPrefilter(a)+p[2],o=p[0];o--;)u=u.lastChild;if(!f.leadingWhitespace&&te.test(a)&&m.push(t.createTextNode(te.exec(a)[0])),!f.tbody)for(o=(a="table"!==l||ue.test(a)?"<table>"!==p[1]||ue.test(a)?0:u:u.firstChild)&&a.childNodes.length;o--;)d.nodeName(c=a.childNodes[o],"tbody")&&!c.childNodes.length&&a.removeChild(c);for(d.merge(m,u.childNodes),u.textContent="";u.firstChild;)u.removeChild(u.firstChild);u=g.lastChild}else m.push(t.createTextNode(a));for(u&&g.removeChild(u),f.appendChecked||d.grep(oe(m,"input"),le),v=0;a=m[v++];)if(r&&d.inArray(a,r)>-1)i&&i.push(a);else if(s=d.contains(a.ownerDocument,a),u=oe(g.appendChild(a),"script"),s&&ae(u),n)for(o=0;a=u[o++];)ee.test(a.type||"")&&n.push(a);return u=null,g}!function(){var t,n,i=r.createElement("div");for(t in{submit:!0,change:!0,focusin:!0})n="on"+t,(f[t]=n in e)||(i.setAttribute(n,"t"),f[t]=!1===i.attributes[n].expando);i=null}();var fe=/^(?:input|select|textarea)$/i,de=/^key/,pe=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,he=/^(?:focusinfocus|focusoutblur)$/,ge=/^([^.]*)(?:\.(.+)|)/;function me(){return!0}function ve(){return!1}function ye(){try{return r.activeElement}catch(e){}}function xe(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)xe(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ve;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return d().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=d.guid++)),e.each(function(){d.event.add(this,t,i,r,n)})}d.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,h,g,m,v=d._data(e);if(v){for(n.handler&&(n=(u=n).handler,i=u.selector),n.guid||(n.guid=d.guid++),(a=v.events)||(a=v.events={}),(c=v.handle)||((c=v.handle=function(e){return void 0===d||e&&d.event.triggered===e.type?void 0:d.event.dispatch.apply(c.elem,arguments)}).elem=e),s=(t=(t||"").match(H)||[""]).length;s--;)h=m=(o=ge.exec(t[s])||[])[1],g=(o[2]||"").split(".").sort(),h&&(l=d.event.special[h]||{},h=(i?l.delegateType:l.bindType)||h,l=d.event.special[h]||{},f=d.extend({type:h,origType:m,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&d.expr.match.needsContext.test(i),namespace:g.join(".")},u),(p=a[h])||((p=a[h]=[]).delegateCount=0,l.setup&&!1!==l.setup.call(e,r,g,c)||(e.addEventListener?e.addEventListener(h,c,!1):e.attachEvent&&e.attachEvent("on"+h,c))),l.add&&(l.add.call(e,f),f.handler.guid||(f.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,f):p.push(f),d.event.global[h]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,h,g,m,v=d.hasData(e)&&d._data(e);if(v&&(c=v.events)){for(l=(t=(t||"").match(H)||[""]).length;l--;)if(h=m=(s=ge.exec(t[l])||[])[1],g=(s[2]||"").split(".").sort(),h){for(f=d.event.special[h]||{},p=c[h=(r?f.delegateType:f.bindType)||h]||[],s=s[2]&&new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=p.length;o--;)a=p[o],!i&&m!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(p.splice(o,1),a.selector&&p.delegateCount--,f.remove&&f.remove.call(e,a));u&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,g,v.handle)||d.removeEvent(e,h,v.handle),delete c[h])}else for(h in c)d.event.remove(e,h+t[l],n,r,!0);d.isEmptyObject(c)&&(delete v.handle,d._removeData(e,"events"))}},trigger:function(t,n,i,o){var a,s,u,l,f,p,h,g=[i||r],m=c.call(t,"type")?t.type:t,v=c.call(t,"namespace")?t.namespace.split("."):[];if(u=p=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!he.test(m+d.event.triggered)&&(m.indexOf(".")>-1&&(v=m.split("."),m=v.shift(),v.sort()),s=m.indexOf(":")<0&&"on"+m,(t=t[d.expando]?t:new d.Event(m,"object"==typeof t&&t)).isTrigger=o?2:3,t.namespace=v.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:d.makeArray(n,[t]),f=d.event.special[m]||{},o||!f.trigger||!1!==f.trigger.apply(i,n))){if(!o&&!f.noBubble&&!d.isWindow(i)){for(l=f.delegateType||m,he.test(l+m)||(u=u.parentNode);u;u=u.parentNode)g.push(u),p=u;p===(i.ownerDocument||r)&&g.push(p.defaultView||p.parentWindow||e)}for(h=0;(u=g[h++])&&!t.isPropagationStopped();)t.type=h>1?l:f.bindType||m,(a=(d._data(u,"events")||{})[t.type]&&d._data(u,"handle"))&&a.apply(u,n),(a=s&&u[s])&&a.apply&&M(u)&&(t.result=a.apply(u,n),!1===t.result&&t.preventDefault());if(t.type=m,!o&&!t.isDefaultPrevented()&&(!f._default||!1===f._default.apply(g.pop(),n))&&M(i)&&s&&i[m]&&!d.isWindow(i)){(p=i[s])&&(i[s]=null),d.event.triggered=m;try{i[m]()}catch(e){}d.event.triggered=void 0,p&&(i[s]=p)}return t.result}},dispatch:function(e){e=d.event.fix(e);var t,n,r,o,a,s,u=i.call(arguments),l=(d._data(this,"events")||{})[e.type]||[],c=d.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,e)){for(s=d.event.handlers.call(this,e,l),t=0;(o=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,n=0;(a=o.handlers[n++])&&!e.isImmediatePropagationStopped();)e.rnamespace&&!e.rnamespace.test(a.namespace)||(e.handleObj=a,e.data=a.data,void 0!==(r=((d.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(e.result=r)&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(!0!==u.disabled||"click"!==e.type)){for(r=[],n=0;n<s;n++)void 0===r[i=(o=t[n]).selector+" "]&&(r[i]=o.needsContext?d(i,this).index(u)>-1:d.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&a.push({elem:u,handlers:r})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},fix:function(e){if(e[d.expando])return e;var t,n,i,o=e.type,a=e,s=this.fixHooks[o];for(s||(this.fixHooks[o]=s=pe.test(o)?this.mouseHooks:de.test(o)?this.keyHooks:{}),i=s.props?this.props.concat(s.props):this.props,e=new d.Event(a),t=i.length;t--;)e[n=i[t]]=a[n];return e.target||(e.target=a.srcElement||r),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,o,a=t.button,s=t.fromElement;return null==e.pageX&&null!=t.clientX&&(o=(i=e.target.ownerDocument||r).documentElement,n=i.body,e.pageX=t.clientX+(o&&o.scrollLeft||n&&n.scrollLeft||0)-(o&&o.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(o&&o.scrollTop||n&&n.scrollTop||0)-(o&&o.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?t.toElement:s),e.which||void 0===a||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ye()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===ye()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(d.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(e){return d.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n){var r=d.extend(new d.Event,n,{type:e,isSimulated:!0});d.event.trigger(r,null,t),r.isDefaultPrevented()&&n.preventDefault()}},d.removeEvent=r.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)}:function(e,t,n){var r="on"+t;e.detachEvent&&(void 0===e[r]&&(e[r]=null),e.detachEvent(r,n))},d.Event=function(e,t){if(!(this instanceof d.Event))return new d.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?me:ve):this.type=e,t&&d.extend(this,t),this.timeStamp=e&&e.timeStamp||d.now(),this[d.expando]=!0},d.Event.prototype={constructor:d.Event,isDefaultPrevented:ve,isPropagationStopped:ve,isImmediatePropagationStopped:ve,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=me,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=me,e&&!this.isSimulated&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=me,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},d.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){d.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return r&&(r===this||d.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),f.submit||(d.event.special.submit={setup:function(){if(d.nodeName(this,"form"))return!1;d.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,n=d.nodeName(t,"input")||d.nodeName(t,"button")?d.prop(t,"form"):void 0;n&&!d._data(n,"submit")&&(d.event.add(n,"submit._submit",function(e){e._submitBubble=!0}),d._data(n,"submit",!0))})},postDispatch:function(e){e._submitBubble&&(delete e._submitBubble,this.parentNode&&!e.isTrigger&&d.event.simulate("submit",this.parentNode,e))},teardown:function(){if(d.nodeName(this,"form"))return!1;d.event.remove(this,"._submit")}}),f.change||(d.event.special.change={setup:function(){if(fe.test(this.nodeName))return"checkbox"!==this.type&&"radio"!==this.type||(d.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._justChanged=!0)}),d.event.add(this,"click._change",function(e){this._justChanged&&!e.isTrigger&&(this._justChanged=!1),d.event.simulate("change",this,e)})),!1;d.event.add(this,"beforeactivate._change",function(e){var t=e.target;fe.test(t.nodeName)&&!d._data(t,"change")&&(d.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||d.event.simulate("change",this.parentNode,e)}),d._data(t,"change",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return d.event.remove(this,"._change"),!fe.test(this.nodeName)}}),f.focusin||d.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){d.event.simulate(t,e.target,d.event.fix(e))};d.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=d._data(r,t);i||r.addEventListener(e,n,!0),d._data(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=d._data(r,t)-1;i?d._data(r,t,i):(r.removeEventListener(e,n,!0),d._removeData(r,t))}}}),d.fn.extend({on:function(e,t,n,r){return xe(this,e,t,n,r)},one:function(e,t,n,r){return xe(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,d(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ve),this.each(function(){d.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){d.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return d.event.trigger(e,t,n,!0)}});var be=/ jQuery\d+="(?:null|\d+)"/g,we=new RegExp("<(?:"+ne+")[\\s/>]","i"),Te=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,Ce=/<script|<style|<link/i,Ee=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^true\/(.*)/,ke=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Se=re(r).appendChild(r.createElement("div"));function Ae(e,t){return d.nodeName(e,"table")&&d.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function De(e){return e.type=(null!==d.find.attr(e,"type"))+"/"+e.type,e}function je(e){var t=Ne.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Le(e,t){if(1===t.nodeType&&d.hasData(e)){var n,r,i,o=d._data(e),a=d._data(t,o),s=o.events;if(s)for(n in delete a.handle,a.events={},s)for(r=0,i=s[n].length;r<i;r++)d.event.add(t,n,s[n][r]);a.data&&(a.data=d.extend({},a.data))}}function He(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!f.noCloneEvent&&t[d.expando]){for(r in(i=d._data(t)).events)d.removeEvent(t,r,i.handle);t.removeAttribute(d.expando)}"script"===n&&t.text!==e.text?(De(t).text=e.text,je(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),f.html5Clone&&e.innerHTML&&!d.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&K.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}}function qe(e,t,n,r){t=o.apply([],t);var i,a,s,u,l,c,p=0,h=e.length,g=h-1,m=t[0],v=d.isFunction(m);if(v||h>1&&"string"==typeof m&&!f.checkClone&&Ee.test(m))return e.each(function(i){var o=e.eq(i);v&&(t[0]=m.call(this,i,o.html())),qe(o,t,n,r)});if(h&&(i=(c=ce(t,e[0].ownerDocument,!1,e,r)).firstChild,1===c.childNodes.length&&(c=i),i||r)){for(s=(u=d.map(oe(c,"script"),De)).length;p<h;p++)a=c,p!==g&&(a=d.clone(a,!0,!0),s&&d.merge(u,oe(a,"script"))),n.call(e[p],a,p);if(s)for(l=u[u.length-1].ownerDocument,d.map(u,je),p=0;p<s;p++)a=u[p],ee.test(a.type||"")&&!d._data(a,"globalEval")&&d.contains(l,a)&&(a.src?d._evalUrl&&d._evalUrl(a.src):d.globalEval((a.text||a.textContent||a.innerHTML||"").replace(ke,"")));c=i=null}return e}function _e(e,t,n){for(var r,i=t?d.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||d.cleanData(oe(r)),r.parentNode&&(n&&d.contains(r.ownerDocument,r)&&ae(oe(r,"script")),r.parentNode.removeChild(r));return e}d.extend({htmlPrefilter:function(e){return e.replace(Te,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u=d.contains(e.ownerDocument,e);if(f.html5Clone||d.isXMLDoc(e)||!we.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Se.innerHTML=e.outerHTML,Se.removeChild(o=Se.firstChild)),!(f.noCloneEvent&&f.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||d.isXMLDoc(e)))for(r=oe(o),s=oe(e),a=0;null!=(i=s[a]);++a)r[a]&&He(i,r[a]);if(t)if(n)for(s=s||oe(e),r=r||oe(o),a=0;null!=(i=s[a]);a++)Le(i,r[a]);else Le(e,o);return(r=oe(o,"script")).length>0&&ae(r,!u&&oe(e,"script")),r=s=i=null,o},cleanData:function(e,t){for(var r,i,o,a,s=0,u=d.expando,l=d.cache,c=f.attributes,p=d.event.special;null!=(r=e[s]);s++)if((t||M(r))&&(a=(o=r[u])&&l[o])){if(a.events)for(i in a.events)p[i]?d.event.remove(r,i):d.removeEvent(r,i,a.handle);l[o]&&(delete l[o],c||void 0===r.removeAttribute?r[u]=void 0:r.removeAttribute(u),n.push(o))}}}),d.fn.extend({domManip:qe,detach:function(e){return _e(this,e,!0)},remove:function(e){return _e(this,e)},text:function(e){return Q(this,function(e){return void 0===e?d.text(this):this.empty().append((this[0]&&this[0].ownerDocument||r).createTextNode(e))},null,e,arguments.length)},append:function(){return qe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Ae(this,e).appendChild(e)})},prepend:function(){return qe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Ae(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return qe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return qe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&d.cleanData(oe(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&d.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return d.clone(this,e,t)})},html:function(e){return Q(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(be,""):void 0;if("string"==typeof e&&!Ce.test(e)&&(f.htmlSerialize||!we.test(e))&&(f.leadingWhitespace||!te.test(e))&&!ie[(Z.exec(e)||["",""])[1].toLowerCase()]){e=d.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(d.cleanData(oe(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return qe(this,arguments,function(t){var n=this.parentNode;d.inArray(this,e)<0&&(d.cleanData(oe(this)),n&&n.replaceChild(t,this))},e)}}),d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){d.fn[e]=function(e){for(var n,r=0,i=[],o=d(e),s=o.length-1;r<=s;r++)n=r===s?this:this.clone(!0),d(o[r])[t](n),a.apply(i,n.get());return this.pushStack(i)}});var Fe,Me={HTML:"block",BODY:"block"};function Oe(e,t){var n=d(t.createElement(e)).appendTo(t.body),r=d.css(n[0],"display");return n.detach(),r}function Re(e){var t=r,n=Me[e];return n||("none"!==(n=Oe(e,t))&&n||((t=((Fe=(Fe||d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow||Fe[0].contentDocument).document).write(),t.close(),n=Oe(e,t),Fe.detach()),Me[e]=n),n}var Pe=/^margin/,Be=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),We=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i},Ie=r.documentElement;!function(){var t,n,i,o,a,s,u=r.createElement("div"),l=r.createElement("div");function c(){var c,f,d=r.documentElement;d.appendChild(u),l.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",t=i=s=!1,n=a=!0,e.getComputedStyle&&(f=e.getComputedStyle(l),t="1%"!==(f||{}).top,s="2px"===(f||{}).marginLeft,i="4px"===(f||{width:"4px"}).width,l.style.marginRight="50%",n="4px"===(f||{marginRight:"4px"}).marginRight,(c=l.appendChild(r.createElement("div"))).style.cssText=l.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",l.style.width="1px",a=!parseFloat((e.getComputedStyle(c)||{}).marginRight),l.removeChild(c)),l.style.display="none",(o=0===l.getClientRects().length)&&(l.style.display="",l.innerHTML="<table><tr><td></td><td>t</td></tr></table>",l.childNodes[0].style.borderCollapse="separate",(c=l.getElementsByTagName("td"))[0].style.cssText="margin:0;border:0;padding:0;display:none",(o=0===c[0].offsetHeight)&&(c[0].style.display="",c[1].style.display="none",o=0===c[0].offsetHeight)),d.removeChild(u)}l.style&&(l.style.cssText="float:left;opacity:.5",f.opacity="0.5"===l.style.opacity,f.cssFloat=!!l.style.cssFloat,l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",f.clearCloneStyle="content-box"===l.style.backgroundClip,(u=r.createElement("div")).style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",l.innerHTML="",u.appendChild(l),f.boxSizing=""===l.style.boxSizing||""===l.style.MozBoxSizing||""===l.style.WebkitBoxSizing,d.extend(f,{reliableHiddenOffsets:function(){return null==t&&c(),o},boxSizingReliable:function(){return null==t&&c(),i},pixelMarginRight:function(){return null==t&&c(),n},pixelPosition:function(){return null==t&&c(),t},reliableMarginRight:function(){return null==t&&c(),a},reliableMarginLeft:function(){return null==t&&c(),s}}))}();var $e,ze,Xe=/^(top|right|bottom|left)$/;function Ue(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}e.getComputedStyle?($e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},ze=function(e,t,n){var r,i,o,a,s=e.style;return""!==(a=(n=n||$e(e))?n.getPropertyValue(t)||n[t]:void 0)&&void 0!==a||d.contains(e.ownerDocument,e)||(a=d.style(e,t)),n&&!f.pixelMarginRight()&&Be.test(a)&&Pe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o),void 0===a?a:a+""}):Ie.currentStyle&&($e=function(e){return e.currentStyle},ze=function(e,t,n){var r,i,o,a,s=e.style;return null==(a=(n=n||$e(e))?n[t]:void 0)&&s&&s[t]&&(a=s[t]),Be.test(a)&&!Xe.test(t)&&(r=s.left,(o=(i=e.runtimeStyle)&&i.left)&&(i.left=e.currentStyle.left),s.left="fontSize"===t?"1em":a,a=s.pixelLeft+"px",s.left=r,o&&(i.left=o)),void 0===a?a:a+""||"auto"});var Ve=/alpha\([^)]*\)/i,Ye=/opacity\s*=\s*([^)]*)/i,Je=/^(none|table(?!-c[ea]).+)/,Ge=new RegExp("^("+$+")(.*)$","i"),Qe={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"},Ze=["Webkit","O","Moz","ms"],et=r.createElement("div").style;function tt(e){if(e in et)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=Ze.length;n--;)if((e=Ze[n]+t)in et)return e}function nt(e,t){for(var n,r,i,o=[],a=0,s=e.length;a<s;a++)(r=e[a]).style&&(o[a]=d._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&U(r)&&(o[a]=d._data(r,"olddisplay",Re(r.nodeName)))):(i=U(r),(n&&"none"!==n||!i)&&d._data(r,"olddisplay",i?n:d.css(r,"display"))));for(a=0;a<s;a++)(r=e[a]).style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function rt(e,t,n){var r=Ge.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function it(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;o<4;o+=2)"margin"===n&&(a+=d.css(e,n+X[o],!0,i)),r?("content"===n&&(a-=d.css(e,"padding"+X[o],!0,i)),"margin"!==n&&(a-=d.css(e,"border"+X[o]+"Width",!0,i))):(a+=d.css(e,"padding"+X[o],!0,i),"padding"!==n&&(a+=d.css(e,"border"+X[o]+"Width",!0,i)));return a}function ot(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=$e(e),a=f.boxSizing&&"border-box"===d.css(e,"boxSizing",!1,o);if(i<=0||null==i){if(((i=ze(e,t,o))<0||null==i)&&(i=e.style[t]),Be.test(i))return i;r=a&&(f.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+it(e,t,n||(a?"border":"content"),r,o)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}d.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=ze(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:f.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=d.camelCase(t),u=e.style;if(t=d.cssProps[s]||(d.cssProps[s]=tt(s)||s),a=d.cssHooks[t]||d.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:u[t];if("string"===(o=typeof n)&&(i=z.exec(n))&&i[1]&&(n=V(e,t,i),o="number"),null!=n&&n==n&&("number"===o&&(n+=i&&i[3]||(d.cssNumber[s]?"":"px")),f.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),!(a&&"set"in a&&void 0===(n=a.set(e,n,r)))))try{u[t]=n}catch(e){}}},css:function(e,t,n,r){var i,o,a,s=d.camelCase(t);return t=d.cssProps[s]||(d.cssProps[s]=tt(s)||s),(a=d.cssHooks[t]||d.cssHooks[s])&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=ze(e,t,r)),"normal"===o&&t in Ke&&(o=Ke[t]),""===n||n?(i=parseFloat(o),!0===n||isFinite(i)?i||0:o):o}}),d.each(["height","width"],function(e,t){d.cssHooks[t]={get:function(e,n,r){if(n)return Je.test(d.css(e,"display"))&&0===e.offsetWidth?We(e,Qe,function(){return ot(e,t,r)}):ot(e,t,r)},set:function(e,n,r){var i=r&&$e(e);return rt(0,n,r?it(e,t,r,f.boxSizing&&"border-box"===d.css(e,"boxSizing",!1,i),i):0)}}}),f.opacity||(d.cssHooks.opacity={get:function(e,t){return Ye.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=d.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===d.trim(o.replace(Ve,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=Ve.test(o)?o.replace(Ve,i):o+" "+i)}}),d.cssHooks.marginRight=Ue(f.reliableMarginRight,function(e,t){if(t)return We(e,{display:"inline-block"},ze,[e,"marginRight"])}),d.cssHooks.marginLeft=Ue(f.reliableMarginLeft,function(e,t){if(t)return(parseFloat(ze(e,"marginLeft"))||(d.contains(e.ownerDocument,e)?e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}):0))+"px"}),d.each({margin:"",padding:"",border:"Width"},function(e,t){d.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+X[r]+t]=o[r]||o[r-2]||o[0];return i}},Pe.test(e)||(d.cssHooks[e+t].set=rt)}),d.fn.extend({css:function(e,t){return Q(this,function(e,t,n){var r,i,o={},a=0;if(d.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=d.css(e,t[a],!1,r);return o}return void 0!==n?d.style(e,t,n):d.css(e,t)},e,t,arguments.length>1)},show:function(){return nt(this,!0)},hide:function(){return nt(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){U(this)?d(this).show():d(this).hide()})}}),d.Tween=at,at.prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||d.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(d.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=d.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}},at.prototype.init.prototype=at.prototype,at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=d.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){d.fx.step[e.prop]?d.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[d.cssProps[e.prop]]&&!d.cssHooks[e.prop]?e.elem[e.prop]=e.now:d.style(e.elem,e.prop,e.now+e.unit)}}},at.propHooks.scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},d.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},d.fx=at.prototype.init,d.fx.step={};var st,ut,lt=/^(?:toggle|show|hide)$/,ct=/queueHooks$/;function ft(){return e.setTimeout(function(){st=void 0}),st=d.now()}function dt(e,t){var n,r={height:e},i=0;for(t=t?1:0;i<4;i+=2-t)r["margin"+(n=X[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function pt(e,t,n){for(var r,i=(ht.tweeners[t]||[]).concat(ht.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ht(e,t,n){var r,i,o=0,a=ht.prefilters.length,s=d.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=st||ft(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:d.extend({},t),opts:d.extend(!0,{specialEasing:{},easing:d.easing._default},n),originalProperties:t,originalOptions:n,startTime:st||ft(),duration:n.duration,tweens:[],createTween:function(t,n){var r=d.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=d.camelCase(n)],o=e[n],d.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=d.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);o<a;o++)if(r=ht.prefilters[o].call(l,e,c,l.opts))return d.isFunction(r.stop)&&(d._queueHooks(l.elem,l.opts.queue).stop=d.proxy(r.stop,r)),r;return d.map(c,pt,l),d.isFunction(l.opts.start)&&l.opts.start.call(e,l),d.fx.timer(d.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}d.Animation=d.extend(ht,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return V(n.elem,e,z.exec(t),n),n}]},tweener:function(e,t){d.isFunction(e)?(t=e,e=["*"]):e=e.match(H);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ht.tweeners[n]=ht.tweeners[n]||[],ht.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c=this,p={},h=e.style,g=e.nodeType&&U(e),m=d._data(e,"fxshow");for(r in n.queue||(null==(s=d._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,u=s.empty.fire,s.empty.fire=function(){s.unqueued||u()}),s.unqueued++,c.always(function(){c.always(function(){s.unqueued--,d.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],"inline"===("none"===(l=d.css(e,"display"))?d._data(e,"olddisplay")||Re(e.nodeName):l)&&"none"===d.css(e,"float")&&(f.inlineBlockNeedsLayout&&"inline"!==Re(e.nodeName)?h.zoom=1:h.display="inline-block")),n.overflow&&(h.overflow="hidden",f.shrinkWrapBlocks()||c.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),t)if(i=t[r],lt.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue;g=!0}p[r]=m&&m[r]||d.style(e,r)}else l=void 0;if(d.isEmptyObject(p))"inline"===("none"===l?Re(e.nodeName):l)&&(h.display=l);else for(r in m?"hidden"in m&&(g=m.hidden):m=d._data(e,"fxshow",{}),o&&(m.hidden=!g),g?d(e).show():c.done(function(){d(e).hide()}),c.done(function(){var t;for(t in d._removeData(e,"fxshow"),p)d.style(e,t,p[t])}),p)a=pt(g?m[r]:0,r,c),r in m||(m[r]=a.start,g&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}],prefilter:function(e,t){t?ht.prefilters.unshift(e):ht.prefilters.push(e)}}),d.speed=function(e,t,n){var r=e&&"object"==typeof e?d.extend({},e):{complete:n||!n&&t||d.isFunction(e)&&e,duration:e,easing:n&&t||t&&!d.isFunction(t)&&t};return r.duration=d.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in d.fx.speeds?d.fx.speeds[r.duration]:d.fx.speeds._default,null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){d.isFunction(r.old)&&r.old.call(this),r.queue&&d.dequeue(this,r.queue)},r},d.fn.extend({fadeTo:function(e,t,n,r){return this.filter(U).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=d.isEmptyObject(e),o=d.speed(t,n,r),a=function(){var t=ht(this,d.extend({},e),o);(i||d._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=d.timers,a=d._data(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ct.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||d.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=d._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=d.timers,a=r?r.length:0;for(n.finish=!0,d.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),d.each(["toggle","show","hide"],function(e,t){var n=d.fn[t];d.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(dt(t,!0),e,r,i)}}),d.each({slideDown:dt("show"),slideUp:dt("hide"),slideToggle:dt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){d.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),d.timers=[],d.fx.tick=function(){var e,t=d.timers,n=0;for(st=d.now();n<t.length;n++)(e=t[n])()||t[n]!==e||t.splice(n--,1);t.length||d.fx.stop(),st=void 0},d.fx.timer=function(e){d.timers.push(e),e()?d.fx.start():d.timers.pop()},d.fx.interval=13,d.fx.start=function(){ut||(ut=e.setInterval(d.fx.tick,d.fx.interval))},d.fx.stop=function(){e.clearInterval(ut),ut=null},d.fx.speeds={slow:600,fast:200,_default:400},d.fn.delay=function(t,n){return t=d.fx&&d.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e,t=r.createElement("input"),n=r.createElement("div"),i=r.createElement("select"),o=i.appendChild(r.createElement("option"));(n=r.createElement("div")).setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",e=n.getElementsByTagName("a")[0],t.setAttribute("type","checkbox"),n.appendChild(t),(e=n.getElementsByTagName("a")[0]).style.cssText="top:1px",f.getSetAttribute="t"!==n.className,f.style=/top/.test(e.getAttribute("style")),f.hrefNormalized="/a"===e.getAttribute("href"),f.checkOn=!!t.value,f.optSelected=o.selected,f.enctype=!!r.createElement("form").enctype,i.disabled=!0,f.optDisabled=!o.disabled,(t=r.createElement("input")).setAttribute("value",""),f.input=""===t.getAttribute("value"),t.value="t",t.setAttribute("type","radio"),f.radioValue="t"===t.value}();var gt=/\r/g,mt=/[\x20\t\r\n\f]+/g;d.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=d.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,d(this).val()):e)?i="":"number"==typeof i?i+="":d.isArray(i)&&(i=d.map(i,function(e){return null==e?"":e+""})),(t=d.valHooks[this.type]||d.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=d.valHooks[i.type]||d.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(gt,""):null==n?"":n:void 0}}),d.extend({valHooks:{option:{get:function(e){var t=d.find.attr(e,"value");return null!=t?t:d.trim(d.text(e)).replace(mt," ")}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||i<0,a=o?null:[],s=o?i+1:r.length,u=i<0?s:o?i:0;u<s;u++)if(((n=r[u]).selected||u===i)&&(f.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!d.nodeName(n.parentNode,"optgroup"))){if(t=d(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=d.makeArray(t),a=i.length;a--;)if(r=i[a],d.inArray(d.valHooks.option.get(r),o)>-1)try{r.selected=n=!0}catch(e){r.scrollHeight}else r.selected=!1;return n||(e.selectedIndex=-1),i}}}}),d.each(["radio","checkbox"],function(){d.valHooks[this]={set:function(e,t){if(d.isArray(t))return e.checked=d.inArray(d(e).val(),t)>-1}},f.checkOn||(d.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var vt,yt,xt=d.expr.attrHandle,bt=/^(?:checked|selected)$/i,wt=f.getSetAttribute,Tt=f.input;d.fn.extend({attr:function(e,t){return Q(this,d.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){d.removeAttr(this,e)})}}),d.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?d.prop(e,t,n):(1===o&&d.isXMLDoc(e)||(t=t.toLowerCase(),i=d.attrHooks[t]||(d.expr.match.bool.test(t)?yt:vt)),void 0!==n?null===n?void d.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=d.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!f.radioValue&&"radio"===t&&d.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(H);if(o&&1===e.nodeType)for(;n=o[i++];)r=d.propFix[n]||n,d.expr.match.bool.test(n)?Tt&&wt||!bt.test(n)?e[r]=!1:e[d.camelCase("default-"+n)]=e[r]=!1:d.attr(e,n,""),e.removeAttribute(wt?n:r)}}),yt={set:function(e,t,n){return!1===t?d.removeAttr(e,n):Tt&&wt||!bt.test(n)?e.setAttribute(!wt&&d.propFix[n]||n,n):e[d.camelCase("default-"+n)]=e[n]=!0,n}},d.each(d.expr.match.bool.source.match(/\w+/g),function(e,t){var n=xt[t]||d.find.attr;Tt&&wt||!bt.test(t)?xt[t]=function(e,t,r){var i,o;return r||(o=xt[t],xt[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,xt[t]=o),i}:xt[t]=function(e,t,n){if(!n)return e[d.camelCase("default-"+t)]?t.toLowerCase():null}}),Tt&&wt||(d.attrHooks.value={set:function(e,t,n){if(!d.nodeName(e,"input"))return vt&&vt.set(e,t,n);e.defaultValue=t}}),wt||(vt={set:function(e,t,n){var r=e.getAttributeNode(n);if(r||e.setAttributeNode(r=e.ownerDocument.createAttribute(n)),r.value=t+="","value"===n||t===e.getAttribute(n))return t}},xt.id=xt.name=xt.coords=function(e,t,n){var r;if(!n)return(r=e.getAttributeNode(t))&&""!==r.value?r.value:null},d.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);if(n&&n.specified)return n.value},set:vt.set},d.attrHooks.contenteditable={set:function(e,t,n){vt.set(e,""!==t&&t,n)}},d.each(["width","height"],function(e,t){d.attrHooks[t]={set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}}})),f.style||(d.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var Ct=/^(?:input|select|textarea|button|object)$/i,Et=/^(?:a|area)$/i;d.fn.extend({prop:function(e,t){return Q(this,d.prop,e,t,arguments.length>1)},removeProp:function(e){return e=d.propFix[e]||e,this.each(function(){try{this[e]=void 0,delete this[e]}catch(e){}})}}),d.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&d.isXMLDoc(e)||(t=d.propFix[t]||t,i=d.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=d.find.attr(e,"tabindex");return t?parseInt(t,10):Ct.test(e.nodeName)||Et.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),f.hrefNormalized||d.each(["href","src"],function(e,t){d.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),f.optSelected||(d.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),d.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){d.propFix[this.toLowerCase()]=this}),f.enctype||(d.propFix.enctype="encoding");var Nt=/[\t\r\n\f]/g;function kt(e){return d.attr(e,"class")||""}d.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(d.isFunction(e))return this.each(function(t){d(this).addClass(e.call(this,t,kt(this)))});if("string"==typeof e&&e)for(t=e.match(H)||[];n=this[u++];)if(i=kt(n),r=1===n.nodeType&&(" "+i+" ").replace(Nt," ")){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=d.trim(r))&&d.attr(n,"class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(d.isFunction(e))return this.each(function(t){d(this).removeClass(e.call(this,t,kt(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(H)||[];n=this[u++];)if(i=kt(n),r=1===n.nodeType&&(" "+i+" ").replace(Nt," ")){for(a=0;o=t[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");i!==(s=d.trim(r))&&d.attr(n,"class",s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):d.isFunction(e)?this.each(function(n){d(this).toggleClass(e.call(this,n,kt(this),t),t)}):this.each(function(){var t,r,i,o;if("string"===n)for(r=0,i=d(this),o=e.match(H)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else void 0!==e&&"boolean"!==n||((t=kt(this))&&d._data(this,"__className__",t),d.attr(this,"class",t||!1===e?"":d._data(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+kt(n)+" ").replace(Nt," ").indexOf(t)>-1)return!0;return!1}}),d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){d.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),d.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}});var St=e.location,At=d.now(),Dt=/\?/,jt=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;d.parseJSON=function(t){if(e.JSON&&e.JSON.parse)return e.JSON.parse(t+"");var n,r=null,i=d.trim(t+"");return i&&!d.trim(i.replace(jt,function(e,t,i,o){return n&&t&&(r=0),0===r?e:(n=i||t,r+=!o-!i,"")}))?Function("return "+i)():d.error("Invalid JSON: "+t)},d.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{e.DOMParser?n=(new e.DOMParser).parseFromString(t,"text/xml"):((n=new e.ActiveXObject("Microsoft.XMLDOM")).async="false",n.loadXML(t))}catch(e){n=void 0}return n&&n.documentElement&&!n.getElementsByTagName("parsererror").length||d.error("Invalid XML: "+t),n};var Lt=/#.*$/,Ht=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,_t=/^(?:GET|HEAD)$/,Ft=/^\/\//,Mt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ot={},Rt={},Pt="*/".concat("*"),Bt=St.href,Wt=Mt.exec(Bt.toLowerCase())||[];function It(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(H)||[];if(d.isFunction(n))for(;r=o[i++];)"+"===r.charAt(0)?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function $t(e,t,n,r){var i={},o=e===Rt;function a(s){var u;return i[s]=!0,d.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=d.ajaxSettings.flatOptions||{};for(r in t)void 0!==t[r]&&((i[r]?e:n||(n={}))[r]=t[r]);return n&&d.extend(!0,e,n),e}function Xt(e){return e.style&&e.style.display||d.css(e,"display")}d.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Bt,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Wt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,d.ajaxSettings),t):zt(d.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Rt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var r,i,o,a,s,u,l,c,f=d.ajaxSetup({},n),p=f.context||f,h=f.context&&(p.nodeType||p.jquery)?d(p):d.event,g=d.Deferred(),m=d.Callbacks("once memory"),v=f.statusCode||{},y={},x={},b=0,w="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c)for(c={};t=qt.exec(a);)c[t[1].toLowerCase()]=t[2];t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=x[n]=x[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(b<2)for(t in e)v[t]=[v[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||w;return l&&l.abort(t),C(0,t),this}};if(g.promise(T).complete=m.add,T.success=T.done,T.error=T.fail,f.url=((t||f.url||Bt)+"").replace(Lt,"").replace(Ft,Wt[1]+"//"),f.type=n.method||n.type||f.method||f.type,f.dataTypes=d.trim(f.dataType||"*").toLowerCase().match(H)||[""],null==f.crossDomain&&(r=Mt.exec(f.url.toLowerCase()),f.crossDomain=!(!r||r[1]===Wt[1]&&r[2]===Wt[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(Wt[3]||("http:"===Wt[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=d.param(f.data,f.traditional)),$t(Ot,f,n,T),2===b)return T;for(i in(u=d.event&&f.global)&&0==d.active++&&d.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!_t.test(f.type),o=f.url,f.hasContent||(f.data&&(o=f.url+=(Dt.test(o)?"&":"?")+f.data,delete f.data),!1===f.cache&&(f.url=Ht.test(o)?o.replace(Ht,"$1_="+At++):o+(Dt.test(o)?"&":"?")+"_="+At++)),f.ifModified&&(d.lastModified[o]&&T.setRequestHeader("If-Modified-Since",d.lastModified[o]),d.etag[o]&&T.setRequestHeader("If-None-Match",d.etag[o])),(f.data&&f.hasContent&&!1!==f.contentType||n.contentType)&&T.setRequestHeader("Content-Type",f.contentType),T.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Pt+"; q=0.01":""):f.accepts["*"]),f.headers)T.setRequestHeader(i,f.headers[i]);if(f.beforeSend&&(!1===f.beforeSend.call(p,T,f)||2===b))return T.abort();for(i in w="abort",{success:1,error:1,complete:1})T[i](f[i]);if(l=$t(Rt,f,n,T)){if(T.readyState=1,u&&h.trigger("ajaxSend",[T,f]),2===b)return T;f.async&&f.timeout>0&&(s=e.setTimeout(function(){T.abort("timeout")},f.timeout));try{b=1,l.send(y,C)}catch(e){if(!(b<2))throw e;C(-1,e)}}else C(-1,"No Transport");function C(t,n,r,i){var c,y,x,w,C,E=n;2!==b&&(b=2,s&&e.clearTimeout(s),l=void 0,a=i||"",T.readyState=t>0?4:0,c=t>=200&&t<300||304===t,r&&(w=function(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(a in s)if(s[a]&&s[a].test(i)){u.unshift(a);break}if(u[0]in n)o=u[0];else{for(a in n){if(!u[0]||e.converters[a+" "+u[0]]){o=a;break}r||(r=a)}o=o||r}if(o)return o!==u[0]&&u.unshift(o),n[o]}(f,T,r)),w=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(f,w,T,c),c?(f.ifModified&&((C=T.getResponseHeader("Last-Modified"))&&(d.lastModified[o]=C),(C=T.getResponseHeader("etag"))&&(d.etag[o]=C)),204===t||"HEAD"===f.type?E="nocontent":304===t?E="notmodified":(E=w.state,y=w.data,c=!(x=w.error))):(x=E,!t&&E||(E="error",t<0&&(t=0))),T.status=t,T.statusText=(n||E)+"",c?g.resolveWith(p,[y,E,T]):g.rejectWith(p,[T,E,x]),T.statusCode(v),v=void 0,u&&h.trigger(c?"ajaxSuccess":"ajaxError",[T,f,c?y:x]),m.fireWith(p,[T,E]),u&&(h.trigger("ajaxComplete",[T,f]),--d.active||d.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return d.get(e,t,n,"json")},getScript:function(e,t){return d.get(e,void 0,t,"script")}}),d.each(["get","post"],function(e,t){d[t]=function(e,n,r,i){return d.isFunction(n)&&(i=i||r,r=n,n=void 0),d.ajax(d.extend({url:e,type:t,dataType:i,data:n,success:r},d.isPlainObject(e)&&e))}}),d._evalUrl=function(e){return d.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},d.fn.extend({wrapAll:function(e){if(d.isFunction(e))return this.each(function(t){d(this).wrapAll(e.call(this,t))});if(this[0]){var t=d(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return d.isFunction(e)?this.each(function(t){d(this).wrapInner(e.call(this,t))}):this.each(function(){var t=d(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=d.isFunction(e);return this.each(function(n){d(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()}}),d.expr.filters.hidden=function(e){return f.reliableHiddenOffsets()?e.offsetWidth<=0&&e.offsetHeight<=0&&!e.getClientRects().length:function(e){if(!d.contains(e.ownerDocument||r,e))return!0;for(;e&&1===e.nodeType;){if("none"===Xt(e)||"hidden"===e.type)return!0;e=e.parentNode}return!1}(e)},d.expr.filters.visible=function(e){return!d.expr.filters.hidden(e)};var Ut=/%20/g,Vt=/\[\]$/,Yt=/\r?\n/g,Jt=/^(?:submit|button|image|reset|file)$/i,Gt=/^(?:input|select|textarea|keygen)/i;function Qt(e,t,n,r){var i;if(d.isArray(t))d.each(t,function(t,i){n||Vt.test(e)?r(e,i):Qt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==d.type(t))r(e,t);else for(i in t)Qt(e+"["+i+"]",t[i],n,r)}d.param=function(e,t){var n,r=[],i=function(e,t){t=d.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=d.ajaxSettings&&d.ajaxSettings.traditional),d.isArray(e)||e.jquery&&!d.isPlainObject(e))d.each(e,function(){i(this.name,this.value)});else for(n in e)Qt(n,e[n],t,i);return r.join("&").replace(Ut,"+")},d.fn.extend({serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=d.prop(this,"elements");return e?d.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!d(this).is(":disabled")&&Gt.test(this.nodeName)&&!Jt.test(e)&&(this.checked||!K.test(e))}).map(function(e,t){var n=d(this).val();return null==n?null:d.isArray(n)?d.map(n,function(e){return{name:t.name,value:e.replace(Yt,"\r\n")}}):{name:t.name,value:n.replace(Yt,"\r\n")}}).get()}}),d.ajaxSettings.xhr=void 0!==e.ActiveXObject?function(){return this.isLocal?nn():r.documentMode>8?tn():/^(get|post|head|put|delete|options)$/i.test(this.type)&&tn()||nn()}:tn;var Kt=0,Zt={},en=d.ajaxSettings.xhr();function tn(){try{return new e.XMLHttpRequest}catch(e){}}function nn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}e.attachEvent&&e.attachEvent("onunload",function(){for(var e in Zt)Zt[e](void 0,!0)}),f.cors=!!en&&"withCredentials"in en,(en=f.ajax=!!en)&&d.ajaxTransport(function(t){var n;if(!t.crossDomain||f.cors)return{send:function(r,i){var o,a=t.xhr(),s=++Kt;if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)a[o]=t.xhrFields[o];for(o in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)void 0!==r[o]&&a.setRequestHeader(o,r[o]+"");a.send(t.hasContent&&t.data||null),n=function(e,r){var o,u,l;if(n&&(r||4===a.readyState))if(delete Zt[s],n=void 0,a.onreadystatechange=d.noop,r)4!==a.readyState&&a.abort();else{l={},o=a.status,"string"==typeof a.responseText&&(l.text=a.responseText);try{u=a.statusText}catch(e){u=""}o||!t.isLocal||t.crossDomain?1223===o&&(o=204):o=l.text?200:404}l&&i(o,u,l,a.getAllResponseHeaders())},t.async?4===a.readyState?e.setTimeout(n):a.onreadystatechange=Zt[s]=n:n()},abort:function(){n&&n(void 0,!0)}}}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return d.globalEval(e),e}}}),d.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),d.ajaxTransport("script",function(e){if(e.crossDomain){var t,n=r.head||d("head")[0]||r.documentElement;return{send:function(i,o){(t=r.createElement("script")).async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,n){(n||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,n||o(200,"success"))},n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(void 0,!0)}}}});var rn=[],on=/(=)\?(?=&|$)|\?\?/;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=rn.pop()||d.expando+"_"+At++;return this[e]=!0,e}}),d.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(on.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&on.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=d.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(on,"$1"+i):!1!==t.jsonp&&(t.url+=(Dt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||d.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?d(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,rn.push(i)),a&&d.isFunction(o)&&o(a[0]),a=o=void 0}),"script"}),d.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||r;var i=T.exec(e),o=!n&&[];return i?[t.createElement(i[1])]:(i=ce([e],t,o),o&&o.length&&d(o).remove(),d.merge([],i.childNodes))};var an=d.fn.load;function sn(e){return d.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}d.fn.load=function(e,t,n){if("string"!=typeof e&&an)return an.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=d.trim(e.slice(s,e.length)),e=e.slice(0,s)),d.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&d.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?d("<div>").append(d.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},d.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){d.fn[t]=function(e){return this.on(t,e)}}),d.expr.filters.animated=function(e){return d.grep(d.timers,function(t){return e===t.elem}).length},d.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=d.css(e,"position"),c=d(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=d.css(e,"top"),u=d.css(e,"left"),("absolute"===l||"fixed"===l)&&d.inArray("auto",[o,u])>-1?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),d.isFunction(t)&&(t=t.call(e,n,d.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},d.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){d.offset.setOffset(this,e,t)});var t,n,r={top:0,left:0},i=this[0],o=i&&i.ownerDocument;return o?(t=o.documentElement,d.contains(t,i)?(void 0!==i.getBoundingClientRect&&(r=i.getBoundingClientRect()),n=sn(o),{top:r.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:r.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):r):void 0},position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===d.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),d.nodeName(e[0],"html")||(n=e.offset()),n.top+=d.css(e[0],"borderTopWidth",!0),n.left+=d.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-d.css(r,"marginTop",!0),left:t.left-n.left-d.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&!d.nodeName(e,"html")&&"static"===d.css(e,"position");)e=e.offsetParent;return e||Ie})}}),d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=/Y/.test(t);d.fn[e]=function(r){return Q(this,function(e,r,i){var o=sn(e);if(void 0===i)return o?t in o?o[t]:o.document.documentElement[r]:e[r];o?o.scrollTo(n?d(o).scrollLeft():i,n?i:d(o).scrollTop()):e[r]=i},e,r,arguments.length,null)}}),d.each(["top","left"],function(e,t){d.cssHooks[t]=Ue(f.pixelPosition,function(e,n){if(n)return n=ze(e,t),Be.test(n)?d(e).position()[t]+"px":n})}),d.each({Height:"height",Width:"width"},function(e,t){d.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){d.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===i?"margin":"border");return Q(this,function(t,n,r){var i;return d.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?d.css(t,n,a):d.style(t,n,r,a)},t,o?r:void 0,o,null)}})}),d.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),d.fn.size=function(){return this.length},d.fn.andSelf=d.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return d});var un=e.jQuery,ln=e.$;return d.noConflict=function(t){return e.$===d&&(e.$=ln),t&&e.jQuery===d&&(e.jQuery=un),d},t||(e.jQuery=e.$=d),d}),function(e){e.whenAll=function(t){var n=e.Deferred(),r=Object.keys(t),i=r.map(function(n){return e.Deferred(function(r){var i=t[n];(!function(t){return t&&"function"==typeof t.then&&String(e.Deferred().then)===String(t.then)}(i)?e.Deferred(i):i).done(r.resolve).fail(function(e){r.reject(e,n)})})});return e.when.apply(this,i).done(function(){var e={};Array.prototype.slice.call(arguments).forEach(function(t,n){e[r[n]]=t}),n.resolve(e)}).fail(n.reject),n}}($);

//========      HANDLEBARS 


/**!
 @license
 handlebars v4.7.7
Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
!function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?exports.Handlebars=b():a.Handlebars=b()}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){"use strict";function d(){var a=r();return a.compile=function(b,c){return k.compile(b,c,a)},a.precompile=function(b,c){return k.precompile(b,c,a)},a.AST=i["default"],a.Compiler=k.Compiler,a.JavaScriptCompiler=m["default"],a.Parser=j.parser,a.parse=j.parse,a.parseWithoutProcessing=j.parseWithoutProcessing,a}var e=c(1)["default"];b.__esModule=!0;var f=c(2),g=e(f),h=c(45),i=e(h),j=c(46),k=c(51),l=c(52),m=e(l),n=c(49),o=e(n),p=c(44),q=e(p),r=g["default"].create,s=d();s.create=d,q["default"](s),s.Visitor=o["default"],s["default"]=s,b["default"]=s,a.exports=b["default"]},function(a,b){"use strict";b["default"]=function(a){return a&&a.__esModule?a:{"default":a}},b.__esModule=!0},function(a,b,c){"use strict";function d(){var a=new h.HandlebarsEnvironment;return n.extend(a,h),a.SafeString=j["default"],a.Exception=l["default"],a.Utils=n,a.escapeExpression=n.escapeExpression,a.VM=p,a.template=function(b){return p.template(b,a)},a}var e=c(3)["default"],f=c(1)["default"];b.__esModule=!0;var g=c(4),h=e(g),i=c(37),j=f(i),k=c(6),l=f(k),m=c(5),n=e(m),o=c(38),p=e(o),q=c(44),r=f(q),s=d();s.create=d,r["default"](s),s["default"]=s,b["default"]=s,a.exports=b["default"]},function(a,b){"use strict";b["default"]=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b},b.__esModule=!0},function(a,b,c){"use strict";function d(a,b,c){this.helpers=a||{},this.partials=b||{},this.decorators=c||{},i.registerDefaultHelpers(this),j.registerDefaultDecorators(this)}var e=c(1)["default"];b.__esModule=!0,b.HandlebarsEnvironment=d;var f=c(5),g=c(6),h=e(g),i=c(10),j=c(30),k=c(32),l=e(k),m=c(33),n="4.7.7";b.VERSION=n;var o=8;b.COMPILER_REVISION=o;var p=7;b.LAST_COMPATIBLE_COMPILER_REVISION=p;var q={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};b.REVISION_CHANGES=q;var r="[object Object]";d.prototype={constructor:d,logger:l["default"],log:l["default"].log,registerHelper:function(a,b){if(f.toString.call(a)===r){if(b)throw new h["default"]("Arg not supported with multiple helpers");f.extend(this.helpers,a)}else this.helpers[a]=b},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,b){if(f.toString.call(a)===r)f.extend(this.partials,a);else{if("undefined"==typeof b)throw new h["default"]('Attempting to register a partial called "'+a+'" as undefined');this.partials[a]=b}},unregisterPartial:function(a){delete this.partials[a]},registerDecorator:function(a,b){if(f.toString.call(a)===r){if(b)throw new h["default"]("Arg not supported with multiple decorators");f.extend(this.decorators,a)}else this.decorators[a]=b},unregisterDecorator:function(a){delete this.decorators[a]},resetLoggedPropertyAccesses:function(){m.resetLoggedProperties()}};var s=l["default"].log;b.log=s,b.createFrame=f.createFrame,b.logger=l["default"]},function(a,b){"use strict";function c(a){return k[a]}function d(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}function e(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1}function f(a){if("string"!=typeof a){if(a&&a.toHTML)return a.toHTML();if(null==a)return"";if(!a)return a+"";a=""+a}return m.test(a)?a.replace(l,c):a}function g(a){return!a&&0!==a||!(!p(a)||0!==a.length)}function h(a){var b=d({},a);return b._parent=a,b}function i(a,b){return a.path=b,a}function j(a,b){return(a?a+".":"")+b}b.__esModule=!0,b.extend=d,b.indexOf=e,b.escapeExpression=f,b.isEmpty=g,b.createFrame=h,b.blockParams=i,b.appendContextPath=j;var k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},l=/[&<>"'`=]/g,m=/[&<>"'`=]/,n=Object.prototype.toString;b.toString=n;var o=function(a){return"function"==typeof a};o(/x/)&&(b.isFunction=o=function(a){return"function"==typeof a&&"[object Function]"===n.call(a)}),b.isFunction=o;var p=Array.isArray||function(a){return!(!a||"object"!=typeof a)&&"[object Array]"===n.call(a)};b.isArray=p},function(a,b,c){"use strict";function d(a,b){var c=b&&b.loc,g=void 0,h=void 0,i=void 0,j=void 0;c&&(g=c.start.line,h=c.end.line,i=c.start.column,j=c.end.column,a+=" - "+g+":"+i);for(var k=Error.prototype.constructor.call(this,a),l=0;l<f.length;l++)this[f[l]]=k[f[l]];Error.captureStackTrace&&Error.captureStackTrace(this,d);try{c&&(this.lineNumber=g,this.endLineNumber=h,e?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:j,enumerable:!0})):(this.column=i,this.endColumn=j))}catch(m){}}var e=c(7)["default"];b.__esModule=!0;var f=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];d.prototype=new Error,b["default"]=d,a.exports=b["default"]},function(a,b,c){a.exports={"default":c(8),__esModule:!0}},function(a,b,c){var d=c(9);a.exports=function(a,b,c){return d.setDesc(a,b,c)}},function(a,b){var c=Object;a.exports={create:c.create,getProto:c.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:c.getOwnPropertyDescriptor,setDesc:c.defineProperty,setDescs:c.defineProperties,getKeys:c.keys,getNames:c.getOwnPropertyNames,getSymbols:c.getOwnPropertySymbols,each:[].forEach}},function(a,b,c){"use strict";function d(a){h["default"](a),j["default"](a),l["default"](a),n["default"](a),p["default"](a),r["default"](a),t["default"](a)}function e(a,b,c){a.helpers[b]&&(a.hooks[b]=a.helpers[b],c||delete a.helpers[b])}var f=c(1)["default"];b.__esModule=!0,b.registerDefaultHelpers=d,b.moveHelperToHooks=e;var g=c(11),h=f(g),i=c(12),j=f(i),k=c(25),l=f(k),m=c(26),n=f(m),o=c(27),p=f(o),q=c(28),r=f(q),s=c(29),t=f(s)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(5);b["default"]=function(a){a.registerHelper("blockHelperMissing",function(b,c){var e=c.inverse,f=c.fn;if(b===!0)return f(this);if(b===!1||null==b)return e(this);if(d.isArray(b))return b.length>0?(c.ids&&(c.ids=[c.name]),a.helpers.each(b,c)):e(this);if(c.data&&c.ids){var g=d.createFrame(c.data);g.contextPath=d.appendContextPath(c.data.contextPath,c.name),c={data:g}}return f(b,c)})},a.exports=b["default"]},function(a,b,c){(function(d){"use strict";var e=c(13)["default"],f=c(1)["default"];b.__esModule=!0;var g=c(5),h=c(6),i=f(h);b["default"]=function(a){a.registerHelper("each",function(a,b){function c(b,c,d){l&&(l.key=b,l.index=c,l.first=0===c,l.last=!!d,m&&(l.contextPath=m+b)),k+=f(a[b],{data:l,blockParams:g.blockParams([a[b],b],[m+b,null])})}if(!b)throw new i["default"]("Must pass iterator to #each");var f=b.fn,h=b.inverse,j=0,k="",l=void 0,m=void 0;if(b.data&&b.ids&&(m=g.appendContextPath(b.data.contextPath,b.ids[0])+"."),g.isFunction(a)&&(a=a.call(this)),b.data&&(l=g.createFrame(b.data)),a&&"object"==typeof a)if(g.isArray(a))for(var n=a.length;j<n;j++)j in a&&c(j,j,j===a.length-1);else if(d.Symbol&&a[d.Symbol.iterator]){for(var o=[],p=a[d.Symbol.iterator](),q=p.next();!q.done;q=p.next())o.push(q.value);a=o;for(var n=a.length;j<n;j++)c(j,j,j===a.length-1)}else!function(){var b=void 0;e(a).forEach(function(a){void 0!==b&&c(b,j-1),b=a,j++}),void 0!==b&&c(b,j-1,!0)}();return 0===j&&(k=h(this)),k})},a.exports=b["default"]}).call(b,function(){return this}())},function(a,b,c){a.exports={"default":c(14),__esModule:!0}},function(a,b,c){c(15),a.exports=c(21).Object.keys},function(a,b,c){var d=c(16);c(18)("keys",function(a){return function(b){return a(d(b))}})},function(a,b,c){var d=c(17);a.exports=function(a){return Object(d(a))}},function(a,b){a.exports=function(a){if(void 0==a)throw TypeError("Can't call method on  "+a);return a}},function(a,b,c){var d=c(19),e=c(21),f=c(24);a.exports=function(a,b){var c=(e.Object||{})[a]||Object[a],g={};g[a]=b(c),d(d.S+d.F*f(function(){c(1)}),"Object",g)}},function(a,b,c){var d=c(20),e=c(21),f=c(22),g="prototype",h=function(a,b,c){var i,j,k,l=a&h.F,m=a&h.G,n=a&h.S,o=a&h.P,p=a&h.B,q=a&h.W,r=m?e:e[b]||(e[b]={}),s=m?d:n?d[b]:(d[b]||{})[g];m&&(c=b);for(i in c)j=!l&&s&&i in s,j&&i in r||(k=j?s[i]:c[i],r[i]=m&&"function"!=typeof s[i]?c[i]:p&&j?f(k,d):q&&s[i]==k?function(a){var b=function(b){return this instanceof a?new a(b):a(b)};return b[g]=a[g],b}(k):o&&"function"==typeof k?f(Function.call,k):k,o&&((r[g]||(r[g]={}))[i]=k))};h.F=1,h.G=2,h.S=4,h.P=8,h.B=16,h.W=32,a.exports=h},function(a,b){var c=a.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=c)},function(a,b){var c=a.exports={version:"1.2.6"};"number"==typeof __e&&(__e=c)},function(a,b,c){var d=c(23);a.exports=function(a,b,c){if(d(a),void 0===b)return a;switch(c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)}}return function(){return a.apply(b,arguments)}}},function(a,b){a.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function!");return a}},function(a,b){a.exports=function(a){try{return!!a()}catch(b){return!0}}},function(a,b,c){"use strict";var d=c(1)["default"];b.__esModule=!0;var e=c(6),f=d(e);b["default"]=function(a){a.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new f["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(1)["default"];b.__esModule=!0;var e=c(5),f=c(6),g=d(f);b["default"]=function(a){a.registerHelper("if",function(a,b){if(2!=arguments.length)throw new g["default"]("#if requires exactly one argument");return e.isFunction(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||e.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){if(2!=arguments.length)throw new g["default"]("#unless requires exactly one argument");return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("log",function(){for(var b=[void 0],c=arguments[arguments.length-1],d=0;d<arguments.length-1;d++)b.push(arguments[d]);var e=1;null!=c.hash.level?e=c.hash.level:c.data&&null!=c.data.level&&(e=c.data.level),b[0]=e,a.log.apply(a,b)})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("lookup",function(a,b,c){return a?c.lookupProperty(a,b):a})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(1)["default"];b.__esModule=!0;var e=c(5),f=c(6),g=d(f);b["default"]=function(a){a.registerHelper("with",function(a,b){if(2!=arguments.length)throw new g["default"]("#with requires exactly one argument");e.isFunction(a)&&(a=a.call(this));var c=b.fn;if(e.isEmpty(a))return b.inverse(this);var d=b.data;return b.data&&b.ids&&(d=e.createFrame(b.data),d.contextPath=e.appendContextPath(b.data.contextPath,b.ids[0])),c(a,{data:d,blockParams:e.blockParams([a],[d&&d.contextPath])})})},a.exports=b["default"]},function(a,b,c){"use strict";function d(a){g["default"](a)}var e=c(1)["default"];b.__esModule=!0,b.registerDefaultDecorators=d;var f=c(31),g=e(f)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(5);b["default"]=function(a){a.registerDecorator("inline",function(a,b,c,e){var f=a;return b.partials||(b.partials={},f=function(e,f){var g=c.partials;c.partials=d.extend({},g,b.partials);var h=a(e,f);return c.partials=g,h}),b.partials[e.args[0]]=e.fn,f})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(5),e={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(a){if("string"==typeof a){var b=d.indexOf(e.methodMap,a.toLowerCase());a=b>=0?b:parseInt(a,10)}return a},log:function(a){if(a=e.lookupLevel(a),"undefined"!=typeof console&&e.lookupLevel(e.level)<=a){var b=e.methodMap[a];console[b]||(b="log");for(var c=arguments.length,d=Array(c>1?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];console[b].apply(console,d)}}};b["default"]=e,a.exports=b["default"]},function(a,b,c){"use strict";function d(a){var b=i(null);b.constructor=!1,b.__defineGetter__=!1,b.__defineSetter__=!1,b.__lookupGetter__=!1;var c=i(null);return c.__proto__=!1,{properties:{whitelist:l.createNewLookupObject(c,a.allowedProtoProperties),defaultValue:a.allowProtoPropertiesByDefault},methods:{whitelist:l.createNewLookupObject(b,a.allowedProtoMethods),defaultValue:a.allowProtoMethodsByDefault}}}function e(a,b,c){return"function"==typeof a?f(b.methods,c):f(b.properties,c)}function f(a,b){return void 0!==a.whitelist[b]?a.whitelist[b]===!0:void 0!==a.defaultValue?a.defaultValue:(g(b),!1)}function g(a){o[a]!==!0&&(o[a]=!0,n.log("error",'Handlebars: Access has been denied to resolve the property "'+a+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}function h(){j(o).forEach(function(a){delete o[a]})}var i=c(34)["default"],j=c(13)["default"],k=c(3)["default"];b.__esModule=!0,b.createProtoAccessControl=d,b.resultIsAllowed=e,b.resetLoggedProperties=h;var l=c(36),m=c(32),n=k(m),o=i(null)},function(a,b,c){a.exports={"default":c(35),__esModule:!0}},function(a,b,c){var d=c(9);a.exports=function(a,b){return d.create(a,b)}},function(a,b,c){"use strict";function d(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return f.extend.apply(void 0,[e(null)].concat(b))}var e=c(34)["default"];b.__esModule=!0,b.createNewLookupObject=d;var f=c(5)},function(a,b){"use strict";function c(a){this.string=a}b.__esModule=!0,c.prototype.toString=c.prototype.toHTML=function(){return""+this.string},b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=v.COMPILER_REVISION;if(!(b>=v.LAST_COMPATIBLE_COMPILER_REVISION&&b<=v.COMPILER_REVISION)){if(b<v.LAST_COMPATIBLE_COMPILER_REVISION){var d=v.REVISION_CHANGES[c],e=v.REVISION_CHANGES[b];throw new u["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new u["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){function c(c,d,e){e.hash&&(d=s.extend({},d,e.hash),e.ids&&(e.ids[0]=!0)),c=b.VM.resolvePartial.call(this,c,d,e);var f=s.extend({},e,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),g=b.VM.invokePartial.call(this,c,d,f);if(null==g&&b.compile&&(e.partials[e.name]=b.compile(c,a.compilerOptions,b),g=e.partials[e.name](d,f)),null!=g){if(e.indent){for(var h=g.split("\n"),i=0,j=h.length;i<j&&(h[i]||i+1!==j);i++)h[i]=e.indent+h[i];g=h.join("\n")}return g}throw new u["default"]("The partial "+e.name+" could not be compiled when running in runtime-only mode")}function d(b){function c(b){return""+a.main(g,b,g.helpers,g.partials,f,i,h)}var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],f=e.data;d._setup(e),!e.partial&&a.useData&&(f=j(b,f));var h=void 0,i=a.useBlockParams?[]:void 0;return a.useDepths&&(h=e.depths?b!=e.depths[0]?[b].concat(e.depths):e.depths:[b]),(c=k(a.main,c,g,e.depths||[],f,i))(b,e)}if(!b)throw new u["default"]("No environment passed to template");if(!a||!a.main)throw new u["default"]("Unknown template object: "+typeof a);a.main.decorator=a.main_d,b.VM.checkRevision(a.compiler);var e=a.compiler&&7===a.compiler[0],g={strict:function(a,b,c){if(!(a&&b in a))throw new u["default"]('"'+b+'" not defined in '+a,{loc:c});return g.lookupProperty(a,b)},lookupProperty:function(a,b){var c=a[b];return null==c?c:Object.prototype.hasOwnProperty.call(a,b)?c:y.resultIsAllowed(c,g.protoAccessControl,b)?c:void 0},lookup:function(a,b){for(var c=a.length,d=0;d<c;d++){var e=a[d]&&g.lookupProperty(a[d],b);if(null!=e)return a[d][b]}},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:s.escapeExpression,invokePartial:c,fn:function(b){var c=a[b];return c.decorator=a[b+"_d"],c},programs:[],program:function(a,b,c,d,e){var g=this.programs[a],h=this.fn(a);return b||e||d||c?g=f(this,a,h,b,c,d,e):g||(g=this.programs[a]=f(this,a,h)),g},data:function(a,b){for(;a&&b--;)a=a._parent;return a},mergeIfNeeded:function(a,b){var c=a||b;return a&&b&&a!==b&&(c=s.extend({},b,a)),c},nullContext:n({}),noop:b.VM.noop,compilerInfo:a.compiler};return d.isTop=!0,d._setup=function(c){if(c.partial)g.protoAccessControl=c.protoAccessControl,g.helpers=c.helpers,g.partials=c.partials,g.decorators=c.decorators,g.hooks=c.hooks;else{var d=s.extend({},b.helpers,c.helpers);l(d,g),g.helpers=d,a.usePartial&&(g.partials=g.mergeIfNeeded(c.partials,b.partials)),(a.usePartial||a.useDecorators)&&(g.decorators=s.extend({},b.decorators,c.decorators)),g.hooks={},g.protoAccessControl=y.createProtoAccessControl(c);var f=c.allowCallsToHelperMissing||e;w.moveHelperToHooks(g,"helperMissing",f),w.moveHelperToHooks(g,"blockHelperMissing",f)}},d._child=function(b,c,d,e){if(a.useBlockParams&&!d)throw new u["default"]("must pass block params");if(a.useDepths&&!e)throw new u["default"]("must pass parent depths");return f(g,b,a[b],c,0,d,e)},d}function f(a,b,c,d,e,f,g){function h(b){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],h=g;return!g||b==g[0]||b===a.nullContext&&null===g[0]||(h=[b].concat(g)),c(a,b,a.helpers,a.partials,e.data||d,f&&[e.blockParams].concat(f),h)}return h=k(c,h,a,g,d,f),h.program=b,h.depth=g?g.length:0,h.blockParams=e||0,h}function g(a,b,c){return a?a.call||c.name||(c.name=a,a=c.partials[a]):a="@partial-block"===c.name?c.data["partial-block"]:c.partials[c.name],a}function h(a,b,c){var d=c.data&&c.data["partial-block"];c.partial=!0,c.ids&&(c.data.contextPath=c.ids[0]||c.data.contextPath);var e=void 0;if(c.fn&&c.fn!==i&&!function(){c.data=v.createFrame(c.data);var a=c.fn;e=c.data["partial-block"]=function(b){var c=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return c.data=v.createFrame(c.data),c.data["partial-block"]=d,a(b,c)},a.partials&&(c.partials=s.extend({},c.partials,a.partials))}(),void 0===a&&e&&(a=e),void 0===a)throw new u["default"]("The partial "+c.name+" could not be found");if(a instanceof Function)return a(b,c)}function i(){return""}function j(a,b){return b&&"root"in b||(b=b?v.createFrame(b):{},b.root=a),b}function k(a,b,c,d,e,f){if(a.decorator){var g={};b=a.decorator(b,g,c,d&&d[0],e,f,d),s.extend(b,g)}return b}function l(a,b){o(a).forEach(function(c){var d=a[c];a[c]=m(d,b)})}function m(a,b){var c=b.lookupProperty;return x.wrapHelper(a,function(a){return s.extend({lookupProperty:c},a)})}var n=c(39)["default"],o=c(13)["default"],p=c(3)["default"],q=c(1)["default"];b.__esModule=!0,b.checkRevision=d,b.template=e,b.wrapProgram=f,b.resolvePartial=g,b.invokePartial=h,b.noop=i;var r=c(5),s=p(r),t=c(6),u=q(t),v=c(4),w=c(10),x=c(43),y=c(33)},function(a,b,c){a.exports={"default":c(40),__esModule:!0}},function(a,b,c){c(41),a.exports=c(21).Object.seal},function(a,b,c){var d=c(42);c(18)("seal",function(a){return function(b){return a&&d(b)?a(b):b}})},function(a,b){a.exports=function(a){return"object"==typeof a?null!==a:"function"==typeof a}},function(a,b){"use strict";function c(a,b){if("function"!=typeof a)return a;var c=function(){var c=arguments[arguments.length-1];return arguments[arguments.length-1]=b(c),a.apply(this,arguments)};return c}b.__esModule=!0,b.wrapHelper=c},function(a,b){(function(c){"use strict";b.__esModule=!0,b["default"]=function(a){var b="undefined"!=typeof c?c:window,d=b.Handlebars;a.noConflict=function(){return b.Handlebars===a&&(b.Handlebars=d),a}},a.exports=b["default"]}).call(b,function(){return this}())},function(a,b){"use strict";b.__esModule=!0;var c={helpers:{helperExpression:function(a){return"SubExpression"===a.type||("MustacheStatement"===a.type||"BlockStatement"===a.type)&&!!(a.params&&a.params.length||a.hash)},scopedId:function(a){return/^\.|this\b/.test(a.original)},simpleId:function(a){return 1===a.parts.length&&!c.helpers.scopedId(a)&&!a.depth}}};b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a,b){if("Program"===a.type)return a;i["default"].yy=o,o.locInfo=function(a){return new o.SourceLocation(b&&b.srcName,a)};var c=i["default"].parse(a);return c}function e(a,b){var c=d(a,b),e=new k["default"](b);return e.accept(c)}var f=c(1)["default"],g=c(3)["default"];b.__esModule=!0,b.parseWithoutProcessing=d,b.parse=e;var h=c(47),i=f(h),j=c(48),k=f(j),l=c(50),m=g(l),n=c(5);b.parser=i["default"];var o={};n.extend(o,m)},function(a,b){"use strict";b.__esModule=!0;var c=function(){function a(){this.yy={}}var b={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(a,b,c,d,e,f,g){var h=f.length-1;switch(e){case 1:return f[h-1];case 2:this.$=d.prepareProgram(f[h]);break;case 3:this.$=f[h];break;case 4:this.$=f[h];break;case 5:this.$=f[h];break;case 6:this.$=f[h];break;case 7:this.$=f[h];break;case 8:this.$=f[h];break;case 9:this.$={type:"CommentStatement",value:d.stripComment(f[h]),strip:d.stripFlags(f[h],f[h]),loc:d.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:f[h],value:f[h],loc:d.locInfo(this._$)};break;case 11:this.$=d.prepareRawBlock(f[h-2],f[h-1],f[h],this._$);break;case 12:this.$={path:f[h-3],params:f[h-2],hash:f[h-1]};break;case 13:this.$=d.prepareBlock(f[h-3],f[h-2],f[h-1],f[h],!1,this._$);break;case 14:this.$=d.prepareBlock(f[h-3],f[h-2],f[h-1],f[h],!0,this._$);break;case 15:this.$={open:f[h-5],path:f[h-4],params:f[h-3],hash:f[h-2],blockParams:f[h-1],strip:d.stripFlags(f[h-5],f[h])};break;case 16:this.$={path:f[h-4],params:f[h-3],hash:f[h-2],blockParams:f[h-1],strip:d.stripFlags(f[h-5],f[h])};break;case 17:this.$={path:f[h-4],params:f[h-3],hash:f[h-2],blockParams:f[h-1],strip:d.stripFlags(f[h-5],f[h])};break;case 18:this.$={strip:d.stripFlags(f[h-1],f[h-1]),program:f[h]};break;case 19:var i=d.prepareBlock(f[h-2],f[h-1],f[h],f[h],!1,this._$),j=d.prepareProgram([i],f[h-1].loc);j.chained=!0,this.$={strip:f[h-2].strip,program:j,chain:!0};break;case 20:this.$=f[h];break;case 21:this.$={path:f[h-1],strip:d.stripFlags(f[h-2],f[h])};break;case 22:this.$=d.prepareMustache(f[h-3],f[h-2],f[h-1],f[h-4],d.stripFlags(f[h-4],f[h]),this._$);break;case 23:this.$=d.prepareMustache(f[h-3],f[h-2],f[h-1],f[h-4],d.stripFlags(f[h-4],f[h]),this._$);break;case 24:this.$={type:"PartialStatement",name:f[h-3],params:f[h-2],hash:f[h-1],indent:"",strip:d.stripFlags(f[h-4],f[h]),loc:d.locInfo(this._$)};break;case 25:this.$=d.preparePartialBlock(f[h-2],f[h-1],f[h],this._$);break;case 26:this.$={path:f[h-3],params:f[h-2],hash:f[h-1],strip:d.stripFlags(f[h-4],f[h])};break;case 27:this.$=f[h];break;case 28:this.$=f[h];break;case 29:this.$={type:"SubExpression",path:f[h-3],params:f[h-2],hash:f[h-1],loc:d.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:f[h],loc:d.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:d.id(f[h-2]),value:f[h],loc:d.locInfo(this._$)};break;case 32:this.$=d.id(f[h-1]);break;case 33:this.$=f[h];break;case 34:this.$=f[h];break;case 35:this.$={type:"StringLiteral",value:f[h],original:f[h],loc:d.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(f[h]),original:Number(f[h]),loc:d.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:"true"===f[h],original:"true"===f[h],loc:d.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:d.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:d.locInfo(this._$)};break;case 40:this.$=f[h];break;case 41:this.$=f[h];break;case 42:this.$=d.preparePath(!0,f[h],this._$);break;case 43:this.$=d.preparePath(!1,f[h],this._$);break;case 44:f[h-2].push({part:d.id(f[h]),original:f[h],separator:f[h-1]}),this.$=f[h-2];break;case 45:this.$=[{part:d.id(f[h]),original:f[h]}];break;case 46:this.$=[];break;case 47:f[h-1].push(f[h]);break;case 48:this.$=[];break;case 49:f[h-1].push(f[h]);break;case 50:this.$=[];break;case 51:f[h-1].push(f[h]);break;case 58:this.$=[];break;case 59:f[h-1].push(f[h]);break;case 64:this.$=[];break;case 65:f[h-1].push(f[h]);break;case 70:this.$=[];break;case 71:f[h-1].push(f[h]);break;case 78:this.$=[];break;case 79:f[h-1].push(f[h]);break;case 82:this.$=[];break;case 83:f[h-1].push(f[h]);break;case 86:this.$=[];break;case 87:f[h-1].push(f[h]);break;case 90:this.$=[];break;case 91:f[h-1].push(f[h]);break;case 94:this.$=[];break;case 95:f[h-1].push(f[h]);break;case 98:this.$=[f[h]];break;case 99:f[h-1].push(f[h]);break;case 100:this.$=[f[h]];break;case 101:f[h-1].push(f[h])}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{
33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(a,b){throw new Error(a)},parse:function(a){function b(){var a;return a=c.lexer.lex()||1,"number"!=typeof a&&(a=c.symbols_[a]||a),a}var c=this,d=[0],e=[null],f=[],g=this.table,h="",i=0,j=0,k=0;this.lexer.setInput(a),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});var l=this.lexer.yylloc;f.push(l);var m=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var n,o,p,q,r,s,t,u,v,w={};;){if(p=d[d.length-1],this.defaultActions[p]?q=this.defaultActions[p]:(null!==n&&"undefined"!=typeof n||(n=b()),q=g[p]&&g[p][n]),"undefined"==typeof q||!q.length||!q[0]){var x="";if(!k){v=[];for(s in g[p])this.terminals_[s]&&s>2&&v.push("'"+this.terminals_[s]+"'");x=this.lexer.showPosition?"Parse error on line "+(i+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+v.join(", ")+", got '"+(this.terminals_[n]||n)+"'":"Parse error on line "+(i+1)+": Unexpected "+(1==n?"end of input":"'"+(this.terminals_[n]||n)+"'"),this.parseError(x,{text:this.lexer.match,token:this.terminals_[n]||n,line:this.lexer.yylineno,loc:l,expected:v})}}if(q[0]instanceof Array&&q.length>1)throw new Error("Parse Error: multiple actions possible at state: "+p+", token: "+n);switch(q[0]){case 1:d.push(n),e.push(this.lexer.yytext),f.push(this.lexer.yylloc),d.push(q[1]),n=null,o?(n=o,o=null):(j=this.lexer.yyleng,h=this.lexer.yytext,i=this.lexer.yylineno,l=this.lexer.yylloc,k>0&&k--);break;case 2:if(t=this.productions_[q[1]][1],w.$=e[e.length-t],w._$={first_line:f[f.length-(t||1)].first_line,last_line:f[f.length-1].last_line,first_column:f[f.length-(t||1)].first_column,last_column:f[f.length-1].last_column},m&&(w._$.range=[f[f.length-(t||1)].range[0],f[f.length-1].range[1]]),r=this.performAction.call(w,h,j,i,this.yy,q[1],e,f),"undefined"!=typeof r)return r;t&&(d=d.slice(0,-1*t*2),e=e.slice(0,-1*t),f=f.slice(0,-1*t)),d.push(this.productions_[q[1]][0]),e.push(w.$),f.push(w._$),u=g[d[d.length-2]][d[d.length-1]],d.push(u);break;case 3:return!0}}return!0}},c=function(){var a={EOF:1,parseError:function(a,b){if(!this.yy.parser)throw new Error(a);this.yy.parser.parseError(a,b)},setInput:function(a){return this._input=a,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var b=a.match(/(?:\r\n?|\n).*/g);return b?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var b=a.length,c=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-b-1),this.offset-=b;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var e=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===d.length?this.yylloc.first_column:0)+d[d.length-c.length].length-c[0].length:this.yylloc.first_column-b},this.options.ranges&&(this.yylloc.range=[e[0],e[0]+this.yyleng-b]),this},more:function(){return this._more=!0,this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=new Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,b,c,d,e;this._more||(this.yytext="",this.match="");for(var f=this._currentRules(),g=0;g<f.length&&(c=this._input.match(this.rules[f[g]]),!c||b&&!(c[0].length>b[0].length)||(b=c,d=g,this.options.flex));g++);return b?(e=b[0].match(/(?:\r\n?|\n).*/g),e&&(this.yylineno+=e.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:e?e[e.length-1].length-e[e.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+b[0].length},this.yytext+=b[0],this.match+=b[0],this.matches=b,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(b[0].length),this.matched+=b[0],a=this.performAction.call(this,this.yy,this,f[d],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a?a:void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return"undefined"!=typeof a?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)}};return a.options={},a.performAction=function(a,b,c,d){function e(a,c){return b.yytext=b.yytext.substring(a,b.yyleng-c+a)}switch(c){case 0:if("\\\\"===b.yytext.slice(-2)?(e(0,1),this.begin("mu")):"\\"===b.yytext.slice(-1)?(e(0,1),this.begin("emu")):this.begin("mu"),b.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),"raw"===this.conditionStack[this.conditionStack.length-1]?15:(e(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(b.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return b.yytext=e(1,2).replace(/\\"/g,'"'),80;case 32:return b.yytext=e(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return b.yytext=b.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},a.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],a.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},a}();return b.lexer=c,a.prototype=b,b.Parser=a,new a}();b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(){var a=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.options=a}function e(a,b,c){void 0===b&&(b=a.length);var d=a[b-1],e=a[b-2];return d?"ContentStatement"===d.type?(e||!c?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(d.original):void 0:c}function f(a,b,c){void 0===b&&(b=-1);var d=a[b+1],e=a[b+2];return d?"ContentStatement"===d.type?(e||!c?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(d.original):void 0:c}function g(a,b,c){var d=a[null==b?0:b+1];if(d&&"ContentStatement"===d.type&&(c||!d.rightStripped)){var e=d.value;d.value=d.value.replace(c?/^\s+/:/^[ \t]*\r?\n?/,""),d.rightStripped=d.value!==e}}function h(a,b,c){var d=a[null==b?a.length-1:b-1];if(d&&"ContentStatement"===d.type&&(c||!d.leftStripped)){var e=d.value;return d.value=d.value.replace(c?/\s+$/:/[ \t]+$/,""),d.leftStripped=d.value!==e,d.leftStripped}}var i=c(1)["default"];b.__esModule=!0;var j=c(49),k=i(j);d.prototype=new k["default"],d.prototype.Program=function(a){var b=!this.options.ignoreStandalone,c=!this.isRootSeen;this.isRootSeen=!0;for(var d=a.body,i=0,j=d.length;i<j;i++){var k=d[i],l=this.accept(k);if(l){var m=e(d,i,c),n=f(d,i,c),o=l.openStandalone&&m,p=l.closeStandalone&&n,q=l.inlineStandalone&&m&&n;l.close&&g(d,i,!0),l.open&&h(d,i,!0),b&&q&&(g(d,i),h(d,i)&&"PartialStatement"===k.type&&(k.indent=/([ \t]+$)/.exec(d[i-1].original)[1])),b&&o&&(g((k.program||k.inverse).body),h(d,i)),b&&p&&(g(d,i),h((k.inverse||k.program).body))}}return a},d.prototype.BlockStatement=d.prototype.DecoratorBlock=d.prototype.PartialBlockStatement=function(a){this.accept(a.program),this.accept(a.inverse);var b=a.program||a.inverse,c=a.program&&a.inverse,d=c,i=c;if(c&&c.chained)for(d=c.body[0].program;i.chained;)i=i.body[i.body.length-1].program;var j={open:a.openStrip.open,close:a.closeStrip.close,openStandalone:f(b.body),closeStandalone:e((d||b).body)};if(a.openStrip.close&&g(b.body,null,!0),c){var k=a.inverseStrip;k.open&&h(b.body,null,!0),k.close&&g(d.body,null,!0),a.closeStrip.open&&h(i.body,null,!0),!this.options.ignoreStandalone&&e(b.body)&&f(d.body)&&(h(b.body),g(d.body))}else a.closeStrip.open&&h(b.body,null,!0);return j},d.prototype.Decorator=d.prototype.MustacheStatement=function(a){return a.strip},d.prototype.PartialStatement=d.prototype.CommentStatement=function(a){var b=a.strip||{};return{inlineStandalone:!0,open:b.open,close:b.close}},b["default"]=d,a.exports=b["default"]},function(a,b,c){"use strict";function d(){this.parents=[]}function e(a){this.acceptRequired(a,"path"),this.acceptArray(a.params),this.acceptKey(a,"hash")}function f(a){e.call(this,a),this.acceptKey(a,"program"),this.acceptKey(a,"inverse")}function g(a){this.acceptRequired(a,"name"),this.acceptArray(a.params),this.acceptKey(a,"hash")}var h=c(1)["default"];b.__esModule=!0;var i=c(6),j=h(i);d.prototype={constructor:d,mutating:!1,acceptKey:function(a,b){var c=this.accept(a[b]);if(this.mutating){if(c&&!d.prototype[c.type])throw new j["default"]('Unexpected node type "'+c.type+'" found when accepting '+b+" on "+a.type);a[b]=c}},acceptRequired:function(a,b){if(this.acceptKey(a,b),!a[b])throw new j["default"](a.type+" requires "+b)},acceptArray:function(a){for(var b=0,c=a.length;b<c;b++)this.acceptKey(a,b),a[b]||(a.splice(b,1),b--,c--)},accept:function(a){if(a){if(!this[a.type])throw new j["default"]("Unknown type: "+a.type,a);this.current&&this.parents.unshift(this.current),this.current=a;var b=this[a.type](a);return this.current=this.parents.shift(),!this.mutating||b?b:b!==!1?a:void 0}},Program:function(a){this.acceptArray(a.body)},MustacheStatement:e,Decorator:e,BlockStatement:f,DecoratorBlock:f,PartialStatement:g,PartialBlockStatement:function(a){g.call(this,a),this.acceptKey(a,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:e,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(a){this.acceptArray(a.pairs)},HashPair:function(a){this.acceptRequired(a,"value")}},b["default"]=d,a.exports=b["default"]},function(a,b,c){"use strict";function d(a,b){if(b=b.path?b.path.original:b,a.path.original!==b){var c={loc:a.path.loc};throw new q["default"](a.path.original+" doesn't match "+b,c)}}function e(a,b){this.source=a,this.start={line:b.first_line,column:b.first_column},this.end={line:b.last_line,column:b.last_column}}function f(a){return/^\[.*\]$/.test(a)?a.substring(1,a.length-1):a}function g(a,b){return{open:"~"===a.charAt(2),close:"~"===b.charAt(b.length-3)}}function h(a){return a.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function i(a,b,c){c=this.locInfo(c);for(var d=a?"@":"",e=[],f=0,g=0,h=b.length;g<h;g++){var i=b[g].part,j=b[g].original!==i;if(d+=(b[g].separator||"")+i,j||".."!==i&&"."!==i&&"this"!==i)e.push(i);else{if(e.length>0)throw new q["default"]("Invalid path: "+d,{loc:c});".."===i&&f++}}return{type:"PathExpression",data:a,depth:f,parts:e,original:d,loc:c}}function j(a,b,c,d,e,f){var g=d.charAt(3)||d.charAt(2),h="{"!==g&&"&"!==g,i=/\*/.test(d);return{type:i?"Decorator":"MustacheStatement",path:a,params:b,hash:c,escaped:h,strip:e,loc:this.locInfo(f)}}function k(a,b,c,e){d(a,c),e=this.locInfo(e);var f={type:"Program",body:b,strip:{},loc:e};return{type:"BlockStatement",path:a.path,params:a.params,hash:a.hash,program:f,openStrip:{},inverseStrip:{},closeStrip:{},loc:e}}function l(a,b,c,e,f,g){e&&e.path&&d(a,e);var h=/\*/.test(a.open);b.blockParams=a.blockParams;var i=void 0,j=void 0;if(c){if(h)throw new q["default"]("Unexpected inverse block on decorator",c);c.chain&&(c.program.body[0].closeStrip=e.strip),j=c.strip,i=c.program}return f&&(f=i,i=b,b=f),{type:h?"DecoratorBlock":"BlockStatement",path:a.path,params:a.params,hash:a.hash,program:b,inverse:i,openStrip:a.strip,inverseStrip:j,closeStrip:e&&e.strip,loc:this.locInfo(g)}}function m(a,b){if(!b&&a.length){var c=a[0].loc,d=a[a.length-1].loc;c&&d&&(b={source:c.source,start:{line:c.start.line,column:c.start.column},end:{line:d.end.line,column:d.end.column}})}return{type:"Program",body:a,strip:{},loc:b}}function n(a,b,c,e){return d(a,c),{type:"PartialBlockStatement",name:a.path,params:a.params,hash:a.hash,program:b,openStrip:a.strip,closeStrip:c&&c.strip,loc:this.locInfo(e)}}var o=c(1)["default"];b.__esModule=!0,b.SourceLocation=e,b.id=f,b.stripFlags=g,b.stripComment=h,b.preparePath=i,b.prepareMustache=j,b.prepareRawBlock=k,b.prepareBlock=l,b.prepareProgram=m,b.preparePartialBlock=n;var p=c(6),q=o(p)},function(a,b,c){"use strict";function d(){}function e(a,b,c){if(null==a||"string"!=typeof a&&"Program"!==a.type)throw new l["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+a);b=b||{},"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var d=c.parse(a,b),e=(new c.Compiler).compile(d,b);return(new c.JavaScriptCompiler).compile(e,b)}function f(a,b,c){function d(){var d=c.parse(a,b),e=(new c.Compiler).compile(d,b),f=(new c.JavaScriptCompiler).compile(e,b,void 0,!0);return c.template(f)}function e(a,b){return f||(f=d()),f.call(this,a,b)}if(void 0===b&&(b={}),null==a||"string"!=typeof a&&"Program"!==a.type)throw new l["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+a);b=m.extend({},b),"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var f=void 0;return e._setup=function(a){return f||(f=d()),f._setup(a)},e._child=function(a,b,c,e){return f||(f=d()),f._child(a,b,c,e)},e}function g(a,b){if(a===b)return!0;if(m.isArray(a)&&m.isArray(b)&&a.length===b.length){for(var c=0;c<a.length;c++)if(!g(a[c],b[c]))return!1;return!0}}function h(a){if(!a.path.parts){var b=a.path;a.path={type:"PathExpression",data:!1,depth:0,parts:[b.original+""],original:b.original+"",loc:b.loc}}}var i=c(34)["default"],j=c(1)["default"];b.__esModule=!0,b.Compiler=d,b.precompile=e,b.compile=f;var k=c(6),l=j(k),m=c(5),n=c(45),o=j(n),p=[].slice;d.prototype={compiler:d,equals:function(a){var b=this.opcodes.length;if(a.opcodes.length!==b)return!1;for(var c=0;c<b;c++){var d=this.opcodes[c],e=a.opcodes[c];if(d.opcode!==e.opcode||!g(d.args,e.args))return!1}b=this.children.length;for(var c=0;c<b;c++)if(!this.children[c].equals(a.children[c]))return!1;return!0},guid:0,compile:function(a,b){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=b,this.stringParams=b.stringParams,this.trackIds=b.trackIds,b.blockParams=b.blockParams||[],b.knownHelpers=m.extend(i(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0,lookup:!0},b.knownHelpers),this.accept(a)},compileProgram:function(a){var b=new this.compiler,c=b.compile(a,this.options),d=this.guid++;return this.usePartial=this.usePartial||c.usePartial,this.children[d]=c,this.useDepths=this.useDepths||c.useDepths,d},accept:function(a){if(!this[a.type])throw new l["default"]("Unknown type: "+a.type,a);this.sourceNode.unshift(a);var b=this[a.type](a);return this.sourceNode.shift(),b},Program:function(a){this.options.blockParams.unshift(a.blockParams);for(var b=a.body,c=b.length,d=0;d<c;d++)this.accept(b[d]);return this.options.blockParams.shift(),this.isSimple=1===c,this.blockParams=a.blockParams?a.blockParams.length:0,this},BlockStatement:function(a){h(a);var b=a.program,c=a.inverse;b=b&&this.compileProgram(b),c=c&&this.compileProgram(c);var d=this.classifySexpr(a);"helper"===d?this.helperSexpr(a,b,c):"simple"===d?(this.simpleSexpr(a),this.opcode("pushProgram",b),this.opcode("pushProgram",c),this.opcode("emptyHash"),this.opcode("blockValue",a.path.original)):(this.ambiguousSexpr(a,b,c),this.opcode("pushProgram",b),this.opcode("pushProgram",c),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(a){var b=a.program&&this.compileProgram(a.program),c=this.setupFullMustacheParams(a,b,void 0),d=a.path;this.useDecorators=!0,this.opcode("registerDecorator",c.length,d.original)},PartialStatement:function(a){this.usePartial=!0;var b=a.program;b&&(b=this.compileProgram(a.program));var c=a.params;if(c.length>1)throw new l["default"]("Unsupported number of partial arguments: "+c.length,a);c.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):c.push({type:"PathExpression",parts:[],depth:0}));var d=a.name.original,e="SubExpression"===a.name.type;e&&this.accept(a.name),this.setupFullMustacheParams(a,b,void 0,!0);var f=a.indent||"";this.options.preventIndent&&f&&(this.opcode("appendContent",f),f=""),this.opcode("invokePartial",e,d,f),this.opcode("append")},PartialBlockStatement:function(a){this.PartialStatement(a)},MustacheStatement:function(a){this.SubExpression(a),a.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(a){this.DecoratorBlock(a)},ContentStatement:function(a){a.value&&this.opcode("appendContent",a.value)},CommentStatement:function(){},SubExpression:function(a){h(a);var b=this.classifySexpr(a);"simple"===b?this.simpleSexpr(a):"helper"===b?this.helperSexpr(a):this.ambiguousSexpr(a)},ambiguousSexpr:function(a,b,c){var d=a.path,e=d.parts[0],f=null!=b||null!=c;this.opcode("getContext",d.depth),this.opcode("pushProgram",b),this.opcode("pushProgram",c),d.strict=!0,this.accept(d),this.opcode("invokeAmbiguous",e,f)},simpleSexpr:function(a){var b=a.path;b.strict=!0,this.accept(b),this.opcode("resolvePossibleLambda")},helperSexpr:function(a,b,c){var d=this.setupFullMustacheParams(a,b,c),e=a.path,f=e.parts[0];if(this.options.knownHelpers[f])this.opcode("invokeKnownHelper",d.length,f);else{if(this.options.knownHelpersOnly)throw new l["default"]("You specified knownHelpersOnly, but used the unknown helper "+f,a);e.strict=!0,e.falsy=!0,this.accept(e),this.opcode("invokeHelper",d.length,e.original,o["default"].helpers.simpleId(e))}},PathExpression:function(a){this.addDepth(a.depth),this.opcode("getContext",a.depth);var b=a.parts[0],c=o["default"].helpers.scopedId(a),d=!a.depth&&!c&&this.blockParamIndex(b);d?this.opcode("lookupBlockParam",d,a.parts):b?a.data?(this.options.data=!0,this.opcode("lookupData",a.depth,a.parts,a.strict)):this.opcode("lookupOnContext",a.parts,a.falsy,a.strict,c):this.opcode("pushContext")},StringLiteral:function(a){this.opcode("pushString",a.value)},NumberLiteral:function(a){this.opcode("pushLiteral",a.value)},BooleanLiteral:function(a){this.opcode("pushLiteral",a.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(a){var b=a.pairs,c=0,d=b.length;for(this.opcode("pushHash");c<d;c++)this.pushParam(b[c].value);for(;c--;)this.opcode("assignToHash",b[c].key);this.opcode("popHash")},opcode:function(a){this.opcodes.push({opcode:a,args:p.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(a){a&&(this.useDepths=!0)},classifySexpr:function(a){var b=o["default"].helpers.simpleId(a.path),c=b&&!!this.blockParamIndex(a.path.parts[0]),d=!c&&o["default"].helpers.helperExpression(a),e=!c&&(d||b);if(e&&!d){var f=a.path.parts[0],g=this.options;g.knownHelpers[f]?d=!0:g.knownHelpersOnly&&(e=!1)}return d?"helper":e?"ambiguous":"simple"},pushParams:function(a){for(var b=0,c=a.length;b<c;b++)this.pushParam(a[b])},pushParam:function(a){var b=null!=a.value?a.value:a.original||"";if(this.stringParams)b.replace&&(b=b.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),a.depth&&this.addDepth(a.depth),this.opcode("getContext",a.depth||0),this.opcode("pushStringParam",b,a.type),"SubExpression"===a.type&&this.accept(a);else{if(this.trackIds){var c=void 0;if(!a.parts||o["default"].helpers.scopedId(a)||a.depth||(c=this.blockParamIndex(a.parts[0])),c){var d=a.parts.slice(1).join(".");this.opcode("pushId","BlockParam",c,d)}else b=a.original||b,b.replace&&(b=b.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",a.type,b)}this.accept(a)}},setupFullMustacheParams:function(a,b,c,d){var e=a.params;return this.pushParams(e),this.opcode("pushProgram",b),this.opcode("pushProgram",c),a.hash?this.accept(a.hash):this.opcode("emptyHash",d),e},blockParamIndex:function(a){for(var b=0,c=this.options.blockParams.length;b<c;b++){var d=this.options.blockParams[b],e=d&&m.indexOf(d,a);if(d&&e>=0)return[b,e]}}}},function(a,b,c){"use strict";function d(a){this.value=a}function e(){}function f(a,b,c,d){var e=b.popStack(),f=0,g=c.length;for(a&&g--;f<g;f++)e=b.nameLookup(e,c[f],d);return a?[b.aliasable("container.strict"),"(",e,", ",b.quotedString(c[f]),", ",JSON.stringify(b.source.currentLocation)," )"]:e}var g=c(13)["default"],h=c(1)["default"];b.__esModule=!0;var i=c(4),j=c(6),k=h(j),l=c(5),m=c(53),n=h(m);e.prototype={nameLookup:function(a,b){return this.internalNameLookup(a,b)},depthedLookup:function(a){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(a),")"]},compilerInfo:function(){var a=i.COMPILER_REVISION,b=i.REVISION_CHANGES[a];return[a,b]},appendToBuffer:function(a,b,c){return l.isArray(a)||(a=[a]),a=this.source.wrap(a,b),this.environment.isSimple?["return ",a,";"]:c?["buffer += ",a,";"]:(a.appendToBuffer=!0,a)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(a,b){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",a,",",JSON.stringify(b),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(a,b,c,d){this.environment=a,this.options=b,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!d,this.name=this.environment.name,this.isChild=!!c,this.context=c||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(a,b),this.useDepths=this.useDepths||a.useDepths||a.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||a.useBlockParams;var e=a.opcodes,f=void 0,g=void 0,h=void 0,i=void 0;for(h=0,i=e.length;h<i;h++)f=e[h],this.source.currentLocation=f.loc,g=g||f.loc,this[f.opcode].apply(this,f.args);if(this.source.currentLocation=g,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new k["default"]("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),";\n"]),
this.decorators.push("return fn;"),d?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"),this.decorators.push("}\n"),this.decorators=this.decorators.merge()));var j=this.createFunctionContext(d);if(this.isChild)return j;var l={compiler:this.compilerInfo(),main:j};this.decorators&&(l.main_d=this.decorators,l.useDecorators=!0);var m=this.context,n=m.programs,o=m.decorators;for(h=0,i=n.length;h<i;h++)n[h]&&(l[h]=n[h],o[h]&&(l[h+"_d"]=o[h],l.useDecorators=!0));return this.environment.usePartial&&(l.usePartial=!0),this.options.data&&(l.useData=!0),this.useDepths&&(l.useDepths=!0),this.useBlockParams&&(l.useBlockParams=!0),this.options.compat&&(l.compat=!0),d?l.compilerOptions=this.options:(l.compiler=JSON.stringify(l.compiler),this.source.currentLocation={start:{line:1,column:0}},l=this.objectLiteral(l),b.srcName?(l=l.toStringWithSourceMap({file:b.destName}),l.map=l.map&&l.map.toString()):l=l.toString()),l},preamble:function(){this.lastContext=0,this.source=new n["default"](this.options.srcName),this.decorators=new n["default"](this.options.srcName)},createFunctionContext:function(a){var b=this,c="",d=this.stackVars.concat(this.registers.list);d.length>0&&(c+=", "+d.join(", "));var e=0;g(this.aliases).forEach(function(a){var d=b.aliases[a];d.children&&d.referenceCount>1&&(c+=", alias"+ ++e+"="+a,d.children[0]="alias"+e)}),this.lookupPropertyFunctionIsUsed&&(c+=", "+this.lookupPropertyFunctionVarDeclaration());var f=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&f.push("blockParams"),this.useDepths&&f.push("depths");var h=this.mergeSource(c);return a?(f.push(h),Function.apply(this,f)):this.source.wrap(["function(",f.join(","),") {\n  ",h,"}"])},mergeSource:function(a){var b=this.environment.isSimple,c=!this.forceBuffer,d=void 0,e=void 0,f=void 0,g=void 0;return this.source.each(function(a){a.appendToBuffer?(f?a.prepend("  + "):f=a,g=a):(f&&(e?f.prepend("buffer += "):d=!0,g.add(";"),f=g=void 0),e=!0,b||(c=!1))}),c?f?(f.prepend("return "),g.add(";")):e||this.source.push('return "";'):(a+=", buffer = "+(d?"":this.initializeBuffer()),f?(f.prepend("return buffer + "),g.add(";")):this.source.push("return buffer;")),a&&this.source.prepend("var "+a.substring(2)+(d?"":";\n")),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return"\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim()},blockValue:function(a){var b=this.aliasable("container.hooks.blockHelperMissing"),c=[this.contextName(0)];this.setupHelperArgs(a,0,c);var d=this.popStack();c.splice(1,0,d),this.push(this.source.functionCall(b,"call",c))},ambiguousBlockValue:function(){var a=this.aliasable("container.hooks.blockHelperMissing"),b=[this.contextName(0)];this.setupHelperArgs("",0,b,!0),this.flushInline();var c=this.topStack();b.splice(1,0,c),this.pushSource(["if (!",this.lastHelper,") { ",c," = ",this.source.functionCall(a,"call",b),"}"])},appendContent:function(a){this.pendingContent?a=this.pendingContent+a:this.pendingLocation=this.source.currentLocation,this.pendingContent=a},append:function(){if(this.isInline())this.replaceStack(function(a){return[" != null ? ",a,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var a=this.popStack();this.pushSource(["if (",a," != null) { ",this.appendToBuffer(a,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(a){this.lastContext=a},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(a,b,c,d){var e=0;d||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(a[e++])),this.resolvePath("context",a,e,b,c)},lookupBlockParam:function(a,b){this.useBlockParams=!0,this.push(["blockParams[",a[0],"][",a[1],"]"]),this.resolvePath("context",b,1)},lookupData:function(a,b,c){a?this.pushStackLiteral("container.data(data, "+a+")"):this.pushStackLiteral("data"),this.resolvePath("data",b,0,!0,c)},resolvePath:function(a,b,c,d,e){var g=this;if(this.options.strict||this.options.assumeObjects)return void this.push(f(this.options.strict&&e,this,b,a));for(var h=b.length;c<h;c++)this.replaceStack(function(e){var f=g.nameLookup(e,b[c],a);return d?[" && ",f]:[" != null ? ",f," : ",e]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(a,b){this.pushContext(),this.pushString(b),"SubExpression"!==b&&("string"==typeof a?this.pushString(a):this.pushStackLiteral(a))},emptyHash:function(a){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(a?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var a=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(a.ids)),this.stringParams&&(this.push(this.objectLiteral(a.contexts)),this.push(this.objectLiteral(a.types))),this.push(this.objectLiteral(a.values))},pushString:function(a){this.pushStackLiteral(this.quotedString(a))},pushLiteral:function(a){this.pushStackLiteral(a)},pushProgram:function(a){null!=a?this.pushStackLiteral(this.programExpression(a)):this.pushStackLiteral(null)},registerDecorator:function(a,b){var c=this.nameLookup("decorators",b,"decorator"),d=this.setupHelperArgs(b,a);this.decorators.push(["fn = ",this.decorators.functionCall(c,"",["fn","props","container",d])," || fn;"])},invokeHelper:function(a,b,c){var d=this.popStack(),e=this.setupHelper(a,b),f=[];c&&f.push(e.name),f.push(d),this.options.strict||f.push(this.aliasable("container.hooks.helperMissing"));var g=["(",this.itemsSeparatedBy(f,"||"),")"],h=this.source.functionCall(g,"call",e.callParams);this.push(h)},itemsSeparatedBy:function(a,b){var c=[];c.push(a[0]);for(var d=1;d<a.length;d++)c.push(b,a[d]);return c},invokeKnownHelper:function(a,b){var c=this.setupHelper(a,b);this.push(this.source.functionCall(c.name,"call",c.callParams))},invokeAmbiguous:function(a,b){this.useRegister("helper");var c=this.popStack();this.emptyHash();var d=this.setupHelper(0,a,b),e=this.lastHelper=this.nameLookup("helpers",a,"helper"),f=["(","(helper = ",e," || ",c,")"];this.options.strict||(f[0]="(helper = ",f.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",f,d.paramsInit?["),(",d.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",d.callParams)," : helper))"])},invokePartial:function(a,b,c){var d=[],e=this.setupParams(b,1,d);a&&(b=this.popStack(),delete e.name),c&&(e.indent=JSON.stringify(c)),e.helpers="helpers",e.partials="partials",e.decorators="container.decorators",a?d.unshift(b):d.unshift(this.nameLookup("partials",b,"partial")),this.options.compat&&(e.depths="depths"),e=this.objectLiteral(e),d.push(e),this.push(this.source.functionCall("container.invokePartial","",d))},assignToHash:function(a){var b=this.popStack(),c=void 0,d=void 0,e=void 0;this.trackIds&&(e=this.popStack()),this.stringParams&&(d=this.popStack(),c=this.popStack());var f=this.hash;c&&(f.contexts[a]=c),d&&(f.types[a]=d),e&&(f.ids[a]=e),f.values[a]=b},pushId:function(a,b,c){"BlockParam"===a?this.pushStackLiteral("blockParams["+b[0]+"].path["+b[1]+"]"+(c?" + "+JSON.stringify("."+c):"")):"PathExpression"===a?this.pushString(b):"SubExpression"===a?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:e,compileChildren:function(a,b){for(var c=a.children,d=void 0,e=void 0,f=0,g=c.length;f<g;f++){d=c[f],e=new this.compiler;var h=this.matchExistingProgram(d);if(null==h){this.context.programs.push("");var i=this.context.programs.length;d.index=i,d.name="program"+i,this.context.programs[i]=e.compile(d,b,this.context,!this.precompile),this.context.decorators[i]=e.decorators,this.context.environments[i]=d,this.useDepths=this.useDepths||e.useDepths,this.useBlockParams=this.useBlockParams||e.useBlockParams,d.useDepths=this.useDepths,d.useBlockParams=this.useBlockParams}else d.index=h.index,d.name="program"+h.index,this.useDepths=this.useDepths||h.useDepths,this.useBlockParams=this.useBlockParams||h.useBlockParams}},matchExistingProgram:function(a){for(var b=0,c=this.context.environments.length;b<c;b++){var d=this.context.environments[b];if(d&&d.equals(a))return d}},programExpression:function(a){var b=this.environment.children[a],c=[b.index,"data",b.blockParams];return(this.useBlockParams||this.useDepths)&&c.push("blockParams"),this.useDepths&&c.push("depths"),"container.program("+c.join(", ")+")"},useRegister:function(a){this.registers[a]||(this.registers[a]=!0,this.registers.list.push(a))},push:function(a){return a instanceof d||(a=this.source.wrap(a)),this.inlineStack.push(a),a},pushStackLiteral:function(a){this.push(new d(a))},pushSource:function(a){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),a&&this.source.push(a)},replaceStack:function(a){var b=["("],c=void 0,e=void 0,f=void 0;if(!this.isInline())throw new k["default"]("replaceStack on non-inline");var g=this.popStack(!0);if(g instanceof d)c=[g.value],b=["(",c],f=!0;else{e=!0;var h=this.incrStack();b=["((",this.push(h)," = ",g,")"],c=this.topStack()}var i=a.call(this,c);f||this.popStack(),e&&this.stackSlot--,this.push(b.concat(i,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var a=this.inlineStack;this.inlineStack=[];for(var b=0,c=a.length;b<c;b++){var e=a[b];if(e instanceof d)this.compileStack.push(e);else{var f=this.incrStack();this.pushSource([f," = ",e,";"]),this.compileStack.push(f)}}},isInline:function(){return this.inlineStack.length},popStack:function(a){var b=this.isInline(),c=(b?this.inlineStack:this.compileStack).pop();if(!a&&c instanceof d)return c.value;if(!b){if(!this.stackSlot)throw new k["default"]("Invalid stack pop");this.stackSlot--}return c},topStack:function(){var a=this.isInline()?this.inlineStack:this.compileStack,b=a[a.length-1];return b instanceof d?b.value:b},contextName:function(a){return this.useDepths&&a?"depths["+a+"]":"depth"+a},quotedString:function(a){return this.source.quotedString(a)},objectLiteral:function(a){return this.source.objectLiteral(a)},aliasable:function(a){var b=this.aliases[a];return b?(b.referenceCount++,b):(b=this.aliases[a]=this.source.wrap(a),b.aliasable=!0,b.referenceCount=1,b)},setupHelper:function(a,b,c){var d=[],e=this.setupHelperArgs(b,a,d,c),f=this.nameLookup("helpers",b,"helper"),g=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:d,paramsInit:e,name:f,callParams:[g].concat(d)}},setupParams:function(a,b,c){var d={},e=[],f=[],g=[],h=!c,i=void 0;h&&(c=[]),d.name=this.quotedString(a),d.hash=this.popStack(),this.trackIds&&(d.hashIds=this.popStack()),this.stringParams&&(d.hashTypes=this.popStack(),d.hashContexts=this.popStack());var j=this.popStack(),k=this.popStack();(k||j)&&(d.fn=k||"container.noop",d.inverse=j||"container.noop");for(var l=b;l--;)i=this.popStack(),c[l]=i,this.trackIds&&(g[l]=this.popStack()),this.stringParams&&(f[l]=this.popStack(),e[l]=this.popStack());return h&&(d.args=this.source.generateArray(c)),this.trackIds&&(d.ids=this.source.generateArray(g)),this.stringParams&&(d.types=this.source.generateArray(f),d.contexts=this.source.generateArray(e)),this.options.data&&(d.data="data"),this.useBlockParams&&(d.blockParams="blockParams"),d},setupHelperArgs:function(a,b,c,d){var e=this.setupParams(a,b,c);return e.loc=JSON.stringify(this.source.currentLocation),e=this.objectLiteral(e),d?(this.useRegister("options"),c.push("options"),["options=",e]):c?(c.push(e),""):e}},function(){for(var a="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),b=e.RESERVED_WORDS={},c=0,d=a.length;c<d;c++)b[a[c]]=!0}(),e.isValidJavaScriptVariableName=function(a){return!e.RESERVED_WORDS[a]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a)},b["default"]=e,a.exports=b["default"]},function(a,b,c){"use strict";function d(a,b,c){if(g.isArray(a)){for(var d=[],e=0,f=a.length;e<f;e++)d.push(b.wrap(a[e],c));return d}return"boolean"==typeof a||"number"==typeof a?a+"":a}function e(a){this.srcFile=a,this.source=[]}var f=c(13)["default"];b.__esModule=!0;var g=c(5),h=void 0;try{}catch(i){}h||(h=function(a,b,c,d){this.src="",d&&this.add(d)},h.prototype={add:function(a){g.isArray(a)&&(a=a.join("")),this.src+=a},prepend:function(a){g.isArray(a)&&(a=a.join("")),this.src=a+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),e.prototype={isEmpty:function(){return!this.source.length},prepend:function(a,b){this.source.unshift(this.wrap(a,b))},push:function(a,b){this.source.push(this.wrap(a,b))},merge:function(){var a=this.empty();return this.each(function(b){a.add(["  ",b,"\n"])}),a},each:function(a){for(var b=0,c=this.source.length;b<c;b++)a(this.source[b])},empty:function(){var a=this.currentLocation||{start:{}};return new h(a.start.line,a.start.column,this.srcFile)},wrap:function(a){var b=arguments.length<=1||void 0===arguments[1]?this.currentLocation||{start:{}}:arguments[1];return a instanceof h?a:(a=d(a,this,b),new h(b.start.line,b.start.column,this.srcFile,a))},functionCall:function(a,b,c){return c=this.generateList(c),this.wrap([a,b?"."+b+"(":"(",c,")"])},quotedString:function(a){return'"'+(a+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(a){var b=this,c=[];f(a).forEach(function(e){var f=d(a[e],b);"undefined"!==f&&c.push([b.quotedString(e),":",f])});var e=this.generateList(c);return e.prepend("{"),e.add("}"),e},generateList:function(a){for(var b=this.empty(),c=0,e=a.length;c<e;c++)c&&b.add(","),b.add(d(a[c],this));return b},generateArray:function(a){var b=this.generateList(a);return b.prepend("["),b.add("]"),b}},b["default"]=e,a.exports=b["default"]}])});







	//==== TOASTR  =====



    /*
 * Note that this is toastr v2.1.3, the "latest" version in url has no more maintenance,
 * please go to https://cdnjs.com/libraries/toastr.js and pick a certain version you want to use,
 * make sure you copy the url from the website since the url may change between versions.
 * */
!function(e){e(["jquery"],function(e){return function(){function t(e,t,n){return g({type:O.error,iconClass:m().iconClasses.error,message:e,optionsOverride:n,title:t})}function n(t,n){return t||(t=m()),v=e("#"+t.containerId),v.length?v:(n&&(v=d(t)),v)}function o(e,t,n){return g({type:O.info,iconClass:m().iconClasses.info,message:e,optionsOverride:n,title:t})}function s(e){C=e}function i(e,t,n){return g({type:O.success,iconClass:m().iconClasses.success,message:e,optionsOverride:n,title:t})}function a(e,t,n){return g({type:O.warning,iconClass:m().iconClasses.warning,message:e,optionsOverride:n,title:t})}function r(e,t){var o=m();v||n(o),u(e,o,t)||l(o)}function c(t){var o=m();return v||n(o),t&&0===e(":focus",t).length?void h(t):void(v.children().length&&v.remove())}function l(t){for(var n=v.children(),o=n.length-1;o>=0;o--)u(e(n[o]),t)}function u(t,n,o){var s=!(!o||!o.force)&&o.force;return!(!t||!s&&0!==e(":focus",t).length)&&(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){h(t)}}),!0)}function d(t){return v=e("<div/>").attr("id",t.containerId).addClass(t.positionClass),v.appendTo(e(t.target)),v}function p(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1}}function f(e){C&&C(e)}function g(t){function o(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(){c(),u(),d(),p(),g(),C(),l(),i()}function i(){var e="";switch(t.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}I.attr("aria-live",e)}function a(){E.closeOnHover&&I.hover(H,D),!E.onclick&&E.tapToDismiss&&I.click(b),E.closeButton&&j&&j.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),E.onCloseClick&&E.onCloseClick(e),b(!0)}),E.onclick&&I.click(function(e){E.onclick(e),b()})}function r(){I.hide(),I[E.showMethod]({duration:E.showDuration,easing:E.showEasing,complete:E.onShown}),E.timeOut>0&&(k=setTimeout(b,E.timeOut),F.maxHideTime=parseFloat(E.timeOut),F.hideEta=(new Date).getTime()+F.maxHideTime,E.progressBar&&(F.intervalId=setInterval(x,10)))}function c(){t.iconClass&&I.addClass(E.toastClass).addClass(y)}function l(){E.newestOnTop?v.prepend(I):v.append(I)}function u(){if(t.title){var e=t.title;E.escapeHtml&&(e=o(t.title)),M.append(e).addClass(E.titleClass),I.append(M)}}function d(){if(t.message){var e=t.message;E.escapeHtml&&(e=o(t.message)),B.append(e).addClass(E.messageClass),I.append(B)}}function p(){E.closeButton&&(j.addClass(E.closeClass).attr("role","button"),I.prepend(j))}function g(){E.progressBar&&(q.addClass(E.progressClass),I.prepend(q))}function C(){E.rtl&&I.addClass("rtl")}function O(e,t){if(e.preventDuplicates){if(t.message===w)return!0;w=t.message}return!1}function b(t){var n=t&&E.closeMethod!==!1?E.closeMethod:E.hideMethod,o=t&&E.closeDuration!==!1?E.closeDuration:E.hideDuration,s=t&&E.closeEasing!==!1?E.closeEasing:E.hideEasing;if(!e(":focus",I).length||t)return clearTimeout(F.intervalId),I[n]({duration:o,easing:s,complete:function(){h(I),clearTimeout(k),E.onHidden&&"hidden"!==P.state&&E.onHidden(),P.state="hidden",P.endTime=new Date,f(P)}})}function D(){(E.timeOut>0||E.extendedTimeOut>0)&&(k=setTimeout(b,E.extendedTimeOut),F.maxHideTime=parseFloat(E.extendedTimeOut),F.hideEta=(new Date).getTime()+F.maxHideTime)}function H(){clearTimeout(k),F.hideEta=0,I.stop(!0,!0)[E.showMethod]({duration:E.showDuration,easing:E.showEasing})}function x(){var e=(F.hideEta-(new Date).getTime())/F.maxHideTime*100;q.width(e+"%")}var E=m(),y=t.iconClass||E.iconClass;if("undefined"!=typeof t.optionsOverride&&(E=e.extend(E,t.optionsOverride),y=t.optionsOverride.iconClass||y),!O(E,t)){T++,v=n(E,!0);var k=null,I=e("<div/>"),M=e("<div/>"),B=e("<div/>"),q=e("<div/>"),j=e(E.closeHtml),F={intervalId:null,hideEta:null,maxHideTime:null},P={toastId:T,state:"visible",startTime:new Date,options:E,map:t};return s(),r(),a(),f(P),E.debug&&console&&console.log(P),I}}function m(){return e.extend({},p(),b.options)}function h(e){v||(v=n()),e.is(":visible")||(e.remove(),e=null,0===v.children().length&&(v.remove(),w=void 0))}var v,C,w,T=0,O={error:"error",info:"info",success:"success",warning:"warning"},b={clear:r,remove:c,error:t,getContainer:n,info:o,options:{},subscribe:s,success:i,version:"2.1.3",warning:a};return b}()})}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):window.toastr=t(window.jQuery)});
//# sourceMappingURL=toastr.js.map




//===== POUCH ==========   

// PouchDB 6.4.3
// 
// (c) 2012-2018 Dale Harvey and the PouchDB team
// PouchDB may be freely distributed under the Apache license, version 2.0.
// For all details and documentation:
// http://pouchdb.com
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).PouchDB=e()}}(function(){return function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[a]={exports:{}};t[a][0].call(f.exports,function(e){var n=t[a][1][e];return o(n||e)},f,f.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";t.exports=function(e){return function(){var t=arguments.length;if(t){for(var n=[],r=-1;++r<t;)n[r]=arguments[r];return e.call(this,n)}return e.call(this,[])}}},{}],2:[function(e,t,n){(function(r){function o(){var e;try{e=n.storage.debug}catch(e){}return!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG),e}(n=t.exports=e(3)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},n.formatArgs=function(e){var t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+n.humanize(this.diff),!t)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,i=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&"%c"===e&&(i=++o)}),e.splice(i,0,r)},n.save=function(e){try{null==e?n.storage.removeItem("debug"):n.storage.debug=e}catch(e){}},n.load=o,n.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},n.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),n.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],n.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},n.enable(o())}).call(this,e(9))},{3:3,9:9}],3:[function(e,t,n){function r(e){var t;function r(){if(r.enabled){var e=r,o=+new Date,i=o-(t||o);e.diff=i,e.prev=t,e.curr=o,t=o;for(var a=new Array(arguments.length),s=0;s<a.length;s++)a[s]=arguments[s];a[0]=n.coerce(a[0]),"string"!=typeof a[0]&&a.unshift("%O");var c=0;a[0]=a[0].replace(/%([a-zA-Z%])/g,function(t,r){if("%%"===t)return t;c++;var o=n.formatters[r];if("function"==typeof o){var i=a[c];t=o.call(e,i),a.splice(c,1),c--}return t}),n.formatArgs.call(e,a),(r.log||n.log||console.log.bind(console)).apply(e,a)}}return r.namespace=e,r.enabled=n.enabled(e),r.useColors=n.useColors(),r.color=function(e){var t,r=0;for(t in e)r=(r<<5)-r+e.charCodeAt(t),r|=0;return n.colors[Math.abs(r)%n.colors.length]}(e),r.destroy=o,"function"==typeof n.init&&n.init(r),n.instances.push(r),r}function o(){var e=n.instances.indexOf(this);return-1!==e&&(n.instances.splice(e,1),!0)}(n=t.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},n.disable=function(){n.enable("")},n.enable=function(e){var t;n.save(e),n.names=[],n.skips=[];var r=("string"==typeof e?e:"").split(/[\s,]+/),o=r.length;for(t=0;t<o;t++)r[t]&&("-"===(e=r[t].replace(/\*/g,".*?"))[0]?n.skips.push(new RegExp("^"+e.substr(1)+"$")):n.names.push(new RegExp("^"+e+"$")));for(t=0;t<n.instances.length;t++){var i=n.instances[t];i.enabled=n.enabled(i.namespace)}},n.enabled=function(e){if("*"===e[e.length-1])return!0;var t,r;for(t=0,r=n.skips.length;t<r;t++)if(n.skips[t].test(e))return!1;for(t=0,r=n.names.length;t<r;t++)if(n.names[t].test(e))return!0;return!1},n.humanize=e(8),n.instances=[],n.names=[],n.skips=[],n.formatters={}},{8:8}],4:[function(e,t,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function o(e){return"function"==typeof e}function i(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,n,r,s,c,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var f=new Error('Uncaught, unspecified "error" event. ('+t+")");throw f.context=t,f}if(a(n=this._events[e]))return!1;if(o(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:s=Array.prototype.slice.call(arguments,1),n.apply(this,s)}else if(i(n))for(s=Array.prototype.slice.call(arguments,1),r=(u=n.slice()).length,c=0;c<r;c++)u[c].apply(this,s);return!0},r.prototype.addListener=function(e,t){var n;if(!o(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,o(t.listener)?t.listener:t),this._events[e]?i(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,i(this._events[e])&&!this._events[e].warned&&(n=a(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){if(!o(t))throw TypeError("listener must be a function");var n=!1;function r(){this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}return r.listener=t,this.on(e,r),this},r.prototype.removeListener=function(e,t){var n,r,a,s;if(!o(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(a=(n=this._events[e]).length,r=-1,n===t||o(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(i(n)){for(s=a;s-- >0;)if(n[s]===t||n[s].listener&&n[s].listener===t){r=s;break}if(r<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(o(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){return this._events&&this._events[e]?o(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(o(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},{}],5:[function(e,t,n){(function(e){"use strict";var n,r,o=e.MutationObserver||e.WebKitMutationObserver;if(o){var i=0,a=new o(f),s=e.document.createTextNode("");a.observe(s,{characterData:!0}),n=function(){s.data=i=++i%2}}else if(e.setImmediate||void 0===e.MessageChannel)n="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){f(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(f,0)};else{var c=new e.MessageChannel;c.port1.onmessage=f,n=function(){c.port2.postMessage(0)}}var u=[];function f(){var e,t;r=!0;for(var n=u.length;n;){for(t=u,u=[],e=-1;++e<n;)t[e]();n=u.length}r=!1}t.exports=function(e){1!==u.push(e)||r||n()}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],6:[function(e,t,n){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],7:[function(e,t,n){"use strict";var r=e(5);function o(){}var i={},a=["REJECTED"],s=["FULFILLED"],c=["PENDING"];function u(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,e!==o&&h(this,e)}function f(e,t,n){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof n&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function l(e,t,n){r(function(){var r;try{r=t(n)}catch(t){return i.reject(e,t)}r===e?i.reject(e,new TypeError("Cannot resolve promise with itself")):i.resolve(e,r)})}function d(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function h(e,t){var n=!1;function r(t){n||(n=!0,i.reject(e,t))}function o(t){n||(n=!0,i.resolve(e,t))}var a=p(function(){t(o,r)});"error"===a.status&&r(a.value)}function p(e,t){var n={};try{n.value=e(t),n.status="success"}catch(e){n.status="error",n.value=e}return n}t.exports=u,u.prototype.catch=function(e){return this.then(null,e)},u.prototype.then=function(e,t){if("function"!=typeof e&&this.state===s||"function"!=typeof t&&this.state===a)return this;var n=new this.constructor(o);this.state!==c?l(n,this.state===s?e:t,this.outcome):this.queue.push(new f(n,e,t));return n},f.prototype.callFulfilled=function(e){i.resolve(this.promise,e)},f.prototype.otherCallFulfilled=function(e){l(this.promise,this.onFulfilled,e)},f.prototype.callRejected=function(e){i.reject(this.promise,e)},f.prototype.otherCallRejected=function(e){l(this.promise,this.onRejected,e)},i.resolve=function(e,t){var n=p(d,t);if("error"===n.status)return i.reject(e,n.value);var r=n.value;if(r)h(e,r);else{e.state=s,e.outcome=t;for(var o=-1,a=e.queue.length;++o<a;)e.queue[o].callFulfilled(t)}return e},i.reject=function(e,t){e.state=a,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},u.resolve=function(e){if(e instanceof this)return e;return i.resolve(new this(o),e)},u.reject=function(e){var t=new this(o);return i.reject(t,e)},u.all=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,r=!1;if(!n)return this.resolve([]);var a=new Array(n),s=0,c=-1,u=new this(o);for(;++c<n;)f(e[c],c);return u;function f(e,o){t.resolve(e).then(function(e){a[o]=e,++s!==n||r||(r=!0,i.resolve(u,a))},function(e){r||(r=!0,i.reject(u,e))})}},u.race=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,r=!1;if(!n)return this.resolve([]);var a=-1,s=new this(o);for(;++a<n;)c=e[a],t.resolve(c).then(function(e){r||(r=!0,i.resolve(s,e))},function(e){r||(r=!0,i.reject(s,e))});var c;return s}},{5:5}],8:[function(e,t,n){var r=1e3,o=60*r,i=60*o,a=24*i,s=365.25*a;function c(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}t.exports=function(e,t){t=t||{};var n,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var n=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*s;case"days":case"day":case"d":return n*a;case"hours":case"hour":case"hrs":case"hr":case"h":return n*i;case"minutes":case"minute":case"mins":case"min":case"m":return n*o;case"seconds":case"second":case"secs":case"sec":case"s":return n*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}(e);if("number"===u&&!1===isNaN(e))return t.long?c(n=e,a,"day")||c(n,i,"hour")||c(n,o,"minute")||c(n,r,"second")||n+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=i)return Math.round(e/i)+"h";if(e>=o)return Math.round(e/o)+"m";if(e>=r)return Math.round(e/r)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},{}],9:[function(e,t,n){var r,o,i=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function c(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{o="function"==typeof clearTimeout?clearTimeout:s}catch(e){o=s}}();var u,f=[],l=!1,d=-1;function h(){l&&u&&(l=!1,u.length?f=u.concat(f):d=-1,f.length&&p())}function p(){if(!l){var e=c(h);l=!0;for(var t=f.length;t;){for(u=f,f=[];++d<t;)u&&u[d].run();d=-1,t=f.length}u=null,l=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===s||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function g(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new v(e,t)),1!==f.length||l||c(p)},v.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],10:[function(e,t,n){!function(e){if("object"==typeof n)t.exports=e();else{var r;try{r=window}catch(e){r=self}r.SparkMD5=e()}}(function(e){"use strict";var t=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function n(e,t){var n=e[0],r=e[1],o=e[2],i=e[3];r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&o|~r&i)+t[0]-680876936|0)<<7|n>>>25)+r|0)&r|~n&o)+t[1]-389564586|0)<<12|i>>>20)+n|0)&n|~i&r)+t[2]+606105819|0)<<17|o>>>15)+i|0)&i|~o&n)+t[3]-1044525330|0)<<22|r>>>10)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&o|~r&i)+t[4]-176418897|0)<<7|n>>>25)+r|0)&r|~n&o)+t[5]+1200080426|0)<<12|i>>>20)+n|0)&n|~i&r)+t[6]-1473231341|0)<<17|o>>>15)+i|0)&i|~o&n)+t[7]-45705983|0)<<22|r>>>10)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&o|~r&i)+t[8]+1770035416|0)<<7|n>>>25)+r|0)&r|~n&o)+t[9]-1958414417|0)<<12|i>>>20)+n|0)&n|~i&r)+t[10]-42063|0)<<17|o>>>15)+i|0)&i|~o&n)+t[11]-1990404162|0)<<22|r>>>10)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&o|~r&i)+t[12]+1804603682|0)<<7|n>>>25)+r|0)&r|~n&o)+t[13]-40341101|0)<<12|i>>>20)+n|0)&n|~i&r)+t[14]-1502002290|0)<<17|o>>>15)+i|0)&i|~o&n)+t[15]+1236535329|0)<<22|r>>>10)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&i|o&~i)+t[1]-165796510|0)<<5|n>>>27)+r|0)&o|r&~o)+t[6]-1069501632|0)<<9|i>>>23)+n|0)&r|n&~r)+t[11]+643717713|0)<<14|o>>>18)+i|0)&n|i&~n)+t[0]-373897302|0)<<20|r>>>12)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&i|o&~i)+t[5]-701558691|0)<<5|n>>>27)+r|0)&o|r&~o)+t[10]+38016083|0)<<9|i>>>23)+n|0)&r|n&~r)+t[15]-660478335|0)<<14|o>>>18)+i|0)&n|i&~n)+t[4]-405537848|0)<<20|r>>>12)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&i|o&~i)+t[9]+568446438|0)<<5|n>>>27)+r|0)&o|r&~o)+t[14]-1019803690|0)<<9|i>>>23)+n|0)&r|n&~r)+t[3]-187363961|0)<<14|o>>>18)+i|0)&n|i&~n)+t[8]+1163531501|0)<<20|r>>>12)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r&i|o&~i)+t[13]-1444681467|0)<<5|n>>>27)+r|0)&o|r&~o)+t[2]-51403784|0)<<9|i>>>23)+n|0)&r|n&~r)+t[7]+1735328473|0)<<14|o>>>18)+i|0)&n|i&~n)+t[12]-1926607734|0)<<20|r>>>12)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r^o^i)+t[5]-378558|0)<<4|n>>>28)+r|0)^r^o)+t[8]-2022574463|0)<<11|i>>>21)+n|0)^n^r)+t[11]+1839030562|0)<<16|o>>>16)+i|0)^i^n)+t[14]-35309556|0)<<23|r>>>9)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r^o^i)+t[1]-1530992060|0)<<4|n>>>28)+r|0)^r^o)+t[4]+1272893353|0)<<11|i>>>21)+n|0)^n^r)+t[7]-155497632|0)<<16|o>>>16)+i|0)^i^n)+t[10]-1094730640|0)<<23|r>>>9)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r^o^i)+t[13]+681279174|0)<<4|n>>>28)+r|0)^r^o)+t[0]-358537222|0)<<11|i>>>21)+n|0)^n^r)+t[3]-722521979|0)<<16|o>>>16)+i|0)^i^n)+t[6]+76029189|0)<<23|r>>>9)+o|0,r=((r+=((o=((o+=((i=((i+=((n=((n+=(r^o^i)+t[9]-640364487|0)<<4|n>>>28)+r|0)^r^o)+t[12]-421815835|0)<<11|i>>>21)+n|0)^n^r)+t[15]+530742520|0)<<16|o>>>16)+i|0)^i^n)+t[2]-995338651|0)<<23|r>>>9)+o|0,r=((r+=((i=((i+=(r^((n=((n+=(o^(r|~i))+t[0]-198630844|0)<<6|n>>>26)+r|0)|~o))+t[7]+1126891415|0)<<10|i>>>22)+n|0)^((o=((o+=(n^(i|~r))+t[14]-1416354905|0)<<15|o>>>17)+i|0)|~n))+t[5]-57434055|0)<<21|r>>>11)+o|0,r=((r+=((i=((i+=(r^((n=((n+=(o^(r|~i))+t[12]+1700485571|0)<<6|n>>>26)+r|0)|~o))+t[3]-1894986606|0)<<10|i>>>22)+n|0)^((o=((o+=(n^(i|~r))+t[10]-1051523|0)<<15|o>>>17)+i|0)|~n))+t[1]-2054922799|0)<<21|r>>>11)+o|0,r=((r+=((i=((i+=(r^((n=((n+=(o^(r|~i))+t[8]+1873313359|0)<<6|n>>>26)+r|0)|~o))+t[15]-30611744|0)<<10|i>>>22)+n|0)^((o=((o+=(n^(i|~r))+t[6]-1560198380|0)<<15|o>>>17)+i|0)|~n))+t[13]+1309151649|0)<<21|r>>>11)+o|0,r=((r+=((i=((i+=(r^((n=((n+=(o^(r|~i))+t[4]-145523070|0)<<6|n>>>26)+r|0)|~o))+t[11]-1120210379|0)<<10|i>>>22)+n|0)^((o=((o+=(n^(i|~r))+t[2]+718787259|0)<<15|o>>>17)+i|0)|~n))+t[9]-343485551|0)<<21|r>>>11)+o|0,e[0]=n+e[0]|0,e[1]=r+e[1]|0,e[2]=o+e[2]|0,e[3]=i+e[3]|0}function r(e){var t,n=[];for(t=0;t<64;t+=4)n[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return n}function o(e){var t,n=[];for(t=0;t<64;t+=4)n[t>>2]=e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24);return n}function i(e){var t,o,i,a,s,c,u=e.length,f=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=u;t+=64)n(f,r(e.substring(t-64,t)));for(o=(e=e.substring(t-64)).length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<o;t+=1)i[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(i[t>>2]|=128<<(t%4<<3),t>55)for(n(f,i),t=0;t<16;t+=1)i[t]=0;return a=(a=8*u).toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(a[2],16),c=parseInt(a[1],16)||0,i[14]=s,i[15]=c,n(f,i),f}function a(e){var n,r="";for(n=0;n<4;n+=1)r+=t[e>>8*n+4&15]+t[e>>8*n&15];return r}function s(e){var t;for(t=0;t<e.length;t+=1)e[t]=a(e[t]);return e.join("")}function c(e){return/[\u0080-\uFFFF]/.test(e)&&(e=unescape(encodeURIComponent(e))),e}function u(e){var t,n=[],r=e.length;for(t=0;t<r-1;t+=2)n.push(parseInt(e.substr(t,2),16));return String.fromCharCode.apply(String,n)}function f(){this.reset()}return"5d41402abc4b2a76b9719d911017c592"!==s(i("hello"))&&function(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n},"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function t(e,t){return(e=0|e||0)<0?Math.max(e+t,0):Math.min(e,t)}ArrayBuffer.prototype.slice=function(n,r){var o,i,a,s,c=this.byteLength,u=t(n,c),f=c;return r!==e&&(f=t(r,c)),u>f?new ArrayBuffer(0):(o=f-u,i=new ArrayBuffer(o),a=new Uint8Array(i),s=new Uint8Array(this,u,o),a.set(s),i)}}(),f.prototype.append=function(e){return this.appendBinary(c(e)),this},f.prototype.appendBinary=function(e){this._buff+=e,this._length+=e.length;var t,o=this._buff.length;for(t=64;t<=o;t+=64)n(this._hash,r(this._buff.substring(t-64,t)));return this._buff=this._buff.substring(t-64),this},f.prototype.end=function(e){var t,n,r=this._buff,o=r.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<o;t+=1)i[t>>2]|=r.charCodeAt(t)<<(t%4<<3);return this._finish(i,o),n=s(this._hash),e&&(n=u(n)),this.reset(),n},f.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},f.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash}},f.prototype.setState=function(e){return this._buff=e.buff,this._length=e.length,this._hash=e.hash,this},f.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},f.prototype._finish=function(e,t){var r,o,i,a=t;if(e[a>>2]|=128<<(a%4<<3),a>55)for(n(this._hash,e),a=0;a<16;a+=1)e[a]=0;r=(r=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(r[2],16),i=parseInt(r[1],16)||0,e[14]=o,e[15]=i,n(this._hash,e)},f.hash=function(e,t){return f.hashBinary(c(e),t)},f.hashBinary=function(e,t){var n=s(i(e));return t?u(n):n},f.ArrayBuffer=function(){this.reset()},f.ArrayBuffer.prototype.append=function(e){var t,r,i,a,s,c=(r=this._buff.buffer,i=e,a=!0,(s=new Uint8Array(r.byteLength+i.byteLength)).set(new Uint8Array(r)),s.set(new Uint8Array(i),r.byteLength),a?s:s.buffer),u=c.length;for(this._length+=e.byteLength,t=64;t<=u;t+=64)n(this._hash,o(c.subarray(t-64,t)));return this._buff=t-64<u?new Uint8Array(c.buffer.slice(t-64)):new Uint8Array(0),this},f.ArrayBuffer.prototype.end=function(e){var t,n,r=this._buff,o=r.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<o;t+=1)i[t>>2]|=r[t]<<(t%4<<3);return this._finish(i,o),n=s(this._hash),e&&(n=u(n)),this.reset(),n},f.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},f.ArrayBuffer.prototype.getState=function(){var e,t=f.prototype.getState.call(this);return t.buff=(e=t.buff,String.fromCharCode.apply(null,new Uint8Array(e))),t},f.ArrayBuffer.prototype.setState=function(e){return e.buff=function(e,t){var n,r=e.length,o=new ArrayBuffer(r),i=new Uint8Array(o);for(n=0;n<r;n+=1)i[n]=e.charCodeAt(n);return t?i:o}(e.buff,!0),f.prototype.setState.call(this,e)},f.ArrayBuffer.prototype.destroy=f.prototype.destroy,f.ArrayBuffer.prototype._finish=f.prototype._finish,f.ArrayBuffer.hash=function(e,t){var r=s(function(e){var t,r,i,a,s,c,u=e.length,f=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=u;t+=64)n(f,o(e.subarray(t-64,t)));for(r=(e=t-64<u?e.subarray(t-64):new Uint8Array(0)).length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<r;t+=1)i[t>>2]|=e[t]<<(t%4<<3);if(i[t>>2]|=128<<(t%4<<3),t>55)for(n(f,i),t=0;t<16;t+=1)i[t]=0;return a=(a=8*u).toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(a[2],16),c=parseInt(a[1],16)||0,i[14]=s,i[15]=c,n(f,i),f}(new Uint8Array(e)));return t?u(r):r},f})},{}],11:[function(e,t,n){var r=e(14),o=e(15),i=o;i.v1=r,i.v4=o,t.exports=i},{14:14,15:15}],12:[function(e,t,n){for(var r=[],o=0;o<256;++o)r[o]=(o+256).toString(16).substr(1);t.exports=function(e,t){var n=t||0,o=r;return o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]}},{}],13:[function(e,t,n){var r="undefined"!=typeof crypto&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&msCrypto.getRandomValues.bind(msCrypto);if(r){var o=new Uint8Array(16);t.exports=function(){return r(o),o}}else{var i=new Array(16);t.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),i[t]=e>>>((3&t)<<3)&255;return i}}},{}],14:[function(e,t,n){var r,o,i=e(13),a=e(12),s=0,c=0;t.exports=function(e,t,n){var u=t&&n||0,f=t||[],l=(e=e||{}).node||r,d=void 0!==e.clockseq?e.clockseq:o;if(null==l||null==d){var h=i();null==l&&(l=r=[1|h[0],h[1],h[2],h[3],h[4],h[5]]),null==d&&(d=o=16383&(h[6]<<8|h[7]))}var p=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:c+1,g=p-s+(v-c)/1e4;if(g<0&&void 0===e.clockseq&&(d=d+1&16383),(g<0||p>s)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=p,c=v,o=d;var y=(1e4*(268435455&(p+=122192928e5))+v)%4294967296;f[u++]=y>>>24&255,f[u++]=y>>>16&255,f[u++]=y>>>8&255,f[u++]=255&y;var _=p/4294967296*1e4&268435455;f[u++]=_>>>8&255,f[u++]=255&_,f[u++]=_>>>24&15|16,f[u++]=_>>>16&255,f[u++]=d>>>8|128,f[u++]=255&d;for(var m=0;m<6;++m)f[u+m]=l[m];return t||a(f)}},{12:12,13:13}],15:[function(e,t,n){var r=e(13),o=e(12);t.exports=function(e,t,n){var i=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||r)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var s=0;s<16;++s)t[i+s]=a[s];return t||o(a)}},{12:12,13:13}],16:[function(e,t,n){"use strict";function r(e,t,n){var r=n[n.length-1];e===r.element&&(n.pop(),r=n[n.length-1]);var o=r.element,i=r.index;if(Array.isArray(o))o.push(e);else if(i===t.length-2){o[t.pop()]=e}else t.push(e)}n.stringify=function(e){var t=[];t.push({obj:e});for(var n,r,o,i,a,s,c,u,f,l,d="";n=t.pop();)if(r=n.obj,d+=n.prefix||"",o=n.val||"")d+=o;else if("object"!=typeof r)d+=void 0===r?null:JSON.stringify(r);else if(null===r)d+="null";else if(Array.isArray(r)){for(t.push({val:"]"}),i=r.length-1;i>=0;i--)a=0===i?"":",",t.push({obj:r[i],prefix:a});t.push({val:"["})}else{for(c in s=[],r)r.hasOwnProperty(c)&&s.push(c);for(t.push({val:"}"}),i=s.length-1;i>=0;i--)f=r[u=s[i]],l=i>0?",":"",l+=JSON.stringify(u)+":",t.push({obj:f,prefix:l});t.push({val:"{"})}return d},n.parse=function(e){for(var t,n,o,i,a,s,c,u,f,l=[],d=[],h=0;;)if("}"!==(t=e[h++])&&"]"!==t&&void 0!==t)switch(t){case" ":case"\t":case"\n":case":":case",":break;case"n":h+=3,r(null,l,d);break;case"t":h+=3,r(!0,l,d);break;case"f":h+=4,r(!1,l,d);break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"-":for(n="",h--;;){if(o=e[h++],!/[\d\.\-e\+]/.test(o)){h--;break}n+=o}r(parseFloat(n),l,d);break;case'"':for(i="",a=void 0,s=0;'"'!==(c=e[h++])||"\\"===a&&s%2==1;)i+=c,"\\"===(a=c)?s++:s=0;r(JSON.parse('"'+i+'"'),l,d);break;case"[":u={element:[],index:l.length},l.push(u.element),d.push(u);break;case"{":f={element:{},index:l.length},l.push(f.element),d.push(f);break;default:throw new Error("unexpectedly reached end of input: "+t)}else{if(1===l.length)return l.pop();r(l.pop(),l,d)}}},{}],17:[function(e,t,n){(function(n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=r(e(7)),i=r(e(1)),a=r(e(5)),s=e(4),c=r(e(6)),u=r(e(11)),f=r(e(2)),l=r(e(10)),d=r(e(16)),h="function"==typeof Promise?Promise:o;function p(e){if(e instanceof ArrayBuffer)return function(e){if("function"==typeof e.slice)return e.slice(0);var t=new ArrayBuffer(e.byteLength),n=new Uint8Array(t),r=new Uint8Array(e);return n.set(r),t}(e);var t=e.size,n=e.type;return"function"==typeof e.slice?e.slice(0,t,n):e.webkitSlice(0,t,n)}var v,g,y=Function.prototype.toString,_=y.call(Object);function m(e){var t,n,r,o;if(!e||"object"!=typeof e)return e;if(Array.isArray(e)){for(t=[],n=0,r=e.length;n<r;n++)t[n]=m(e[n]);return t}if(e instanceof Date)return e.toISOString();if(o=e,"undefined"!=typeof ArrayBuffer&&o instanceof ArrayBuffer||"undefined"!=typeof Blob&&o instanceof Blob)return p(e);if(!function(e){var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&y.call(n)==_}(e))return e;for(n in t={},e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=m(e[n]);void 0!==i&&(t[n]=i)}return t}function b(e){var t=!1;return i(function(n){if(t)throw new Error("once called more than once");t=!0,e.apply(this,n)})}function w(e){return i(function(t){var n=this,r="function"==typeof(t=m(t))[t.length-1]&&t.pop(),o=new h(function(r,o){var i;try{var a=b(function(e,t){e?o(e):r(t)});t.push(a),(i=e.apply(n,t))&&"function"==typeof i.then&&r(i)}catch(e){o(e)}});return r&&o.then(function(e){r(null,e)},r),o})}function E(e,t){return w(i(function(n){if(this._closed)return h.reject(new Error("database is closed"));if(this._destroyed)return h.reject(new Error("database is destroyed"));var r=this;return function(e,t,n){if(e.constructor.listeners("debug").length){for(var r=["api",e.name,t],o=0;o<n.length-1;o++)r.push(n[o]);e.constructor.emit("debug",r);var i=n[n.length-1];n[n.length-1]=function(n,r){var o=["api",e.name,t];o=o.concat(n?["error",n]:["success",r]),e.constructor.emit("debug",o),i(n,r)}}}(r,e,n),this.taskqueue.isReady?t.apply(this,n):new h(function(t,o){r.taskqueue.addTask(function(i){i?o(i):t(r[e].apply(r,n))})})}))}function k(e){return"$"+e}function S(){this._store={}}function q(e){if(this._store=new S,e&&Array.isArray(e))for(var t=0,n=e.length;t<n;t++)this.add(e[t])}function C(e,t){for(var n={},r=0,o=t.length;r<o;r++){var i=t[r];i in e&&(n[i]=e[i])}return n}S.prototype.get=function(e){var t=k(e);return this._store[t]},S.prototype.set=function(e,t){var n=k(e);return this._store[n]=t,!0},S.prototype.has=function(e){return k(e)in this._store},S.prototype.delete=function(e){var t=k(e),n=t in this._store;return delete this._store[t],n},S.prototype.forEach=function(e){for(var t=Object.keys(this._store),n=0,r=t.length;n<r;n++){var o=t[n];e(this._store[o],o=o.substring(1))}},Object.defineProperty(S.prototype,"size",{get:function(){return Object.keys(this._store).length}}),q.prototype.add=function(e){return this._store.set(e,!0)},q.prototype.has=function(e){return this._store.has(e)},q.prototype.forEach=function(e){this._store.forEach(function(t,n){e(n)})},Object.defineProperty(q.prototype,"size",{get:function(){return this._store.size}}),!function(){if("undefined"==typeof Symbol||"undefined"==typeof Map||"undefined"==typeof Set)return!1;var e=Object.getOwnPropertyDescriptor(Map,Symbol.species);return e&&"get"in e&&Map[Symbol.species]===Map}()?(v=q,g=S):(v=Set,g=Map);var A,x=6;function T(e){return e}function O(e){return[{ok:e}]}function j(e,t,n){var r=t.docs,o=new g;r.forEach(function(e){o.has(e.id)?o.get(e.id).push(e):o.set(e.id,[e])});var i=o.size,a=0,s=new Array(i);function c(){var e;++a===i&&(e=[],s.forEach(function(t){t.docs.forEach(function(n){e.push({id:t.id,docs:[n]})})}),n(null,{results:e}))}var u=[];o.forEach(function(e,t){u.push(t)});var f=0;function l(){if(!(f>=u.length)){var n,r=Math.min(f+x,u.length),i=u.slice(f,r);n=f,i.forEach(function(r,i){var a=n+i,u=o.get(r),f=C(u[0],["atts_since","attachments"]);f.open_revs=u.map(function(e){return e.rev}),f.open_revs=f.open_revs.filter(T);var d=T;0===f.open_revs.length&&(delete f.open_revs,d=O),["revs","attachments","binary","ajax","latest"].forEach(function(e){e in t&&(f[e]=t[e])}),e.get(r,f,function(e,t){var n,o,i;n=e?[{error:e}]:d(t),o=r,i=n,s[a]={id:o,docs:i},c(),l()})}),f+=i.length}}l()}function L(){return"undefined"!=typeof chrome&&void 0!==chrome.storage&&void 0!==chrome.storage.local}if(L())A=!1;else try{localStorage.setItem("_pouch_check_localstorage",1),A=!!localStorage.getItem("_pouch_check_localstorage")}catch(e){A=!1}function I(){return A}function D(){var e;s.EventEmitter.call(this),this._listeners={},e=this,L()?chrome.storage.onChanged.addListener(function(t){null!=t.db_name&&e.emit(t.dbName.newValue)}):I()&&("undefined"!=typeof addEventListener?addEventListener("storage",function(t){e.emit(t.key)}):window.attachEvent("storage",function(t){e.emit(t.key)}))}function R(e){if("undefined"!=typeof console&&"function"==typeof console[e]){var t=Array.prototype.slice.call(arguments,1);console[e].apply(console,t)}}function F(e){var t,n,r=0;return e||(r=2e3),t=e,n=r,t=parseInt(t,10)||0,(n=parseInt(n,10))!=n||n<=t?n=(t||1)<<1:n+=1,n>6e5&&(t=3e5,n=6e5),~~((n-t)*Math.random()+t)}function N(e,t){R("info","The above "+e+" is totally normal. "+t)}c(D,s.EventEmitter),D.prototype.addListener=function(e,t,n,r){if(!this._listeners[t]){var o=this,i=!1;this._listeners[t]=s,this.on(e,s)}function s(){if(o._listeners[t])if(i)i="waiting";else{i=!0;var e=C(r,["style","include_docs","attachments","conflicts","filter","doc_ids","view","since","query_params","binary"]);n.changes(e).on("change",function(e){e.seq>r.since&&!r.cancelled&&(r.since=e.seq,r.onChange(e))}).on("complete",function(){"waiting"===i&&a(s),i=!1}).on("error",function(){i=!1})}}},D.prototype.removeListener=function(e,t){t in this._listeners&&(s.EventEmitter.prototype.removeListener.call(this,e,this._listeners[t]),delete this._listeners[t])},D.prototype.notifyLocalWindows=function(e){L()?chrome.storage.local.set({dbName:e}):I()&&(localStorage[e]="a"===localStorage[e]?"b":"a")},D.prototype.notify=function(e){this.emit(e),this.notifyLocalWindows(e)};var B="function"==typeof Object.assign?Object.assign:function(e){for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t};function $(e,t,n){Error.call(this,n),this.status=e,this.name=t,this.message=n,this.error=!0}c($,Error),$.prototype.toString=function(){return JSON.stringify({status:this.status,name:this.name,message:this.message,reason:this.reason})};new $(401,"unauthorized","Name or password is incorrect.");var M=new $(400,"bad_request","Missing JSON list of 'docs'"),P=new $(404,"not_found","missing"),U=new $(409,"conflict","Document update conflict"),J=new $(400,"bad_request","_id field must contain a string"),W=new $(412,"missing_id","_id is required for puts"),H=new $(400,"bad_request","Only reserved document ids may start with underscore."),z=(new $(412,"precondition_failed","Database not open"),new $(500,"unknown_error","Database encountered an unknown error")),K=new $(500,"badarg","Some query argument is invalid"),X=(new $(400,"invalid_request","Request was invalid"),new $(400,"query_parse_error","Some query parameter is invalid")),G=new $(500,"doc_validation","Bad special document member"),V=new $(400,"bad_request","Something wrong with the request"),Q=new $(400,"bad_request","Document must be a JSON object"),Y=(new $(404,"not_found","Database not found"),new $(500,"indexed_db_went_bad","unknown")),Z=new $(500,"web_sql_went_bad","unknown"),ee=(new $(500,"levelDB_went_went_bad","unknown"),new $(403,"forbidden","Forbidden by design doc validate_doc_update function"),new $(400,"bad_request","Invalid rev format")),te=(new $(412,"file_exists","The database could not be created, the file already exists."),new $(412,"missing_stub","A pre-existing attachment stub wasn't found"));new $(413,"invalid_url","Provided URL is invalid");function ne(e,t){function n(t){for(var n in e)"function"!=typeof e[n]&&(this[n]=e[n]);void 0!==t&&(this.reason=t)}return n.prototype=$.prototype,new n(t)}function re(e){if("object"!=typeof e){var t=e;(e=z).data=t}return"error"in e&&"conflict"===e.error&&(e.name="conflict",e.status=409),"name"in e||(e.name=e.error||"unknown"),"status"in e||(e.status=500),"message"in e||(e.message=e.message||e.reason),e}function oe(e){var t={},n=e.filter&&"function"==typeof e.filter;return t.query=e.query_params,function(r){r.doc||(r.doc={});var o=n&&function(e,t,n){try{return!e(t,n)}catch(e){var r="Filter function threw: "+e.toString();return ne(V,r)}}(e.filter,r.doc,t);if("object"==typeof o)return o;if(o)return!1;if(e.include_docs){if(!e.attachments)for(var i in r.doc._attachments)r.doc._attachments.hasOwnProperty(i)&&(r.doc._attachments[i].stub=!0)}else delete r.doc;return!0}}function ie(e){for(var t=[],n=0,r=e.length;n<r;n++)t=t.concat(e[n]);return t}function ae(e){var t;if(e?"string"!=typeof e?t=ne(J):/^_/.test(e)&&!/^_(design|local)/.test(e)&&(t=ne(H)):t=ne(W),t)throw t}function se(e){return"boolean"==typeof e._remote?e._remote:"function"==typeof e.type&&(R("warn","db.type() is deprecated and will be removed in a future version of PouchDB"),"http"===e.type())}function ce(e){if(!e)return null;var t=e.split("/");return 2===t.length?t:1===t.length?[e,e]:null}function ue(e){var t=ce(e);return t?t.join("/"):null}var fe=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],le="queryKey",de=/(?:^|&)([^&=]*)=?([^&]*)/g,he=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;function pe(e){for(var t=he.exec(e),n={},r=14;r--;){var o=fe[r],i=t[r]||"",a=-1!==["user","password"].indexOf(o);n[o]=a?decodeURIComponent(i):i}return n[le]={},n[fe[12]].replace(de,function(e,t,r){t&&(n[le][t]=r)}),n}function ve(e,t){var n=[],r=[];for(var o in t)t.hasOwnProperty(o)&&(n.push(o),r.push(t[o]));return n.push(e),Function.apply(null,n).apply(null,r)}function ge(e,t,n){return new h(function(r,o){e.get(t,function(i,a){if(i){if(404!==i.status)return o(i);a={}}var s,c,u,f=a._rev,l=n(a);if(!l)return r({updated:!1,rev:f});l._id=t,l._rev=f,r((c=l,u=n,(s=e).put(c).then(function(e){return{updated:!0,rev:e.rev}},function(e){if(409!==e.status)throw e;return ge(s,c._id,u)})))})})}function ye(){return u.v4().replace(/-/g,"").toLowerCase()}var _e=u.v4;function me(e){for(var t,n,r,o,i=e.rev_tree.slice();o=i.pop();){var a=o.ids,s=a[2],c=o.pos;if(s.length)for(var u=0,f=s.length;u<f;u++)i.push({pos:c+1,ids:s[u]});else{var l=!!a[1].deleted,d=a[0];t&&!(r!==l?r:n!==c?n<c:t<d)||(t=d,n=c,r=l)}}return n+"-"+t}function be(e,t){for(var n,r=e.slice();n=r.pop();)for(var o=n.pos,i=n.ids,a=i[2],s=t(0===a.length,o,i[0],n.ctx,i[1]),c=0,u=a.length;c<u;c++)r.push({pos:o+1,ids:a[c],ctx:s})}function we(e,t){return e.pos-t.pos}function Ee(e){var t=[];be(e,function(e,n,r,o,i){e&&t.push({rev:n+"-"+r,pos:n,opts:i})}),t.sort(we).reverse();for(var n=0,r=t.length;n<r;n++)delete t[n].pos;return t}function ke(e){for(var t=me(e),n=Ee(e.rev_tree),r=[],o=0,i=n.length;o<i;o++){var a=n[o];a.rev===t||a.opts.deleted||r.push(a.rev)}return r}function Se(e){var t=[];return be(e.rev_tree,function(e,n,r,o,i){"available"!==i.status||e||(t.push(n+"-"+r),i.status="missing")}),t}function qe(e){for(var t,n=[],r=e.slice();t=r.pop();){var o=t.pos,i=t.ids,a=i[0],s=i[1],c=i[2],u=0===c.length,f=t.history?t.history.slice():[];f.push({id:a,opts:s}),u&&n.push({pos:o+1-f.length,ids:f});for(var l=0,d=c.length;l<d;l++)r.push({pos:o+1,ids:c[l],history:f})}return n.reverse()}function Ce(e,t){return e.pos-t.pos}function Ae(e,t){for(var n,r,o=t,i=e.length;o<i;o++){var a=e[o],s=[a.id,a.opts,[]];r?(r[2].push(s),r=s):n=r=s}return n}function xe(e,t){return e[0]<t[0]?-1:1}function Te(e,t){for(var n,r,o,i=[{tree1:e,tree2:t}],a=!1;i.length>0;){var s=i.pop(),c=s.tree1,u=s.tree2;(c[1].status||u[1].status)&&(c[1].status="available"===c[1].status||"available"===u[1].status?"available":"missing");for(var f=0;f<u[2].length;f++)if(c[2][0]){for(var l=!1,d=0;d<c[2].length;d++)c[2][d][0]===u[2][f][0]&&(i.push({tree1:c[2][d],tree2:u[2][f]}),l=!0);l||(a="new_branch",n=c[2],r=u[2][f],void 0,o=function(e,t,n){for(var r,o=0,i=e.length;o<i;)n(e[r=o+i>>>1],t)<0?o=r+1:i=r;return o}(n,r,xe),n.splice(o,0,r))}else a="new_leaf",c[2][0]=u[2][f]}return{conflicts:a,tree:e}}function Oe(e,t,n){var r,o=[],i=!1,a=!1;if(!e.length)return{tree:[t],conflicts:"new_leaf"};for(var s=0,c=e.length;s<c;s++){var u=e[s];if(u.pos===t.pos&&u.ids[0]===t.ids[0])r=Te(u.ids,t.ids),o.push({pos:u.pos,ids:r.tree}),i=i||r.conflicts,a=!0;else if(!0!==n){var f=u.pos<t.pos?u:t,l=u.pos<t.pos?t:u,d=l.pos-f.pos,h=[],p=[];for(p.push({ids:f.ids,diff:d,parent:null,parentIdx:null});p.length>0;){var v=p.pop();if(0!==v.diff)for(var g=v.ids[2],y=0,_=g.length;y<_;y++)p.push({ids:g[y],diff:v.diff-1,parent:v.ids,parentIdx:y});else v.ids[0]===l.ids[0]&&h.push(v)}var m=h[0];m?(r=Te(m.ids,l.ids),m.parent[2][m.parentIdx]=r.tree,o.push({pos:f.pos,ids:f.ids}),i=i||r.conflicts,a=!0):o.push(u)}else o.push(u)}return a||o.push(t),o.sort(Ce),{tree:o,conflicts:i||"internal_node"}}function je(e,t,n){var r=Oe(e,t),o=function(e,t){for(var n,r,o=qe(e),i=0,a=o.length;i<a;i++){var s,c=o[i],u=c.ids;if(u.length>t){n||(n={});var f=u.length-t;s={pos:c.pos+f,ids:Ae(u,f)};for(var l=0;l<f;l++){var d=c.pos+l+"-"+u[l].id;n[d]=!0}}else s={pos:c.pos,ids:Ae(u,0)};r=r?Oe(r,s,!0).tree:[s]}return n&&be(r,function(e,t,r){delete n[t+"-"+r]}),{tree:r,revs:n?Object.keys(n):[]}}(r.tree,n);return{tree:o.tree,stemmedRevs:o.revs,conflicts:r.conflicts}}function Le(e){return e.ids}function Ie(e,t){t||(t=me(e));for(var n,r=t.substring(t.indexOf("-")+1),o=e.rev_tree.map(Le);n=o.pop();){if(n[0]===r)return!!n[1].deleted;o=o.concat(n[2])}}function De(e){return/^_local/.test(e)}function Re(e,t){for(var n,r=t.rev_tree.slice();n=r.pop();){var o=n.pos,i=n.ids,a=i[0],s=i[1],c=i[2],u=0===c.length,f=n.history?n.history.slice():[];if(f.push({id:a,pos:o,opts:s}),u)for(var l=0,d=f.length;l<d;l++){var h=f[l];if(h.pos+"-"+h.id===e)return o+"-"+a}for(var p=0,v=c.length;p<v;p++)r.push({pos:o+1,ids:c[p],history:f})}throw new Error("Unable to resolve latest revision for id "+t.id+", rev "+e)}function Fe(e,t,n){s.EventEmitter.call(this);var r=this;this.db=e;var o=(t=t?m(t):{}).complete=b(function(t,n){var o,a;t?(a="error",("listenerCount"in(o=r)?o.listenerCount(a):s.EventEmitter.listenerCount(o,a))>0&&r.emit("error",t)):r.emit("complete",n),r.removeAllListeners(),e.removeListener("destroyed",i)});function i(){r.cancel()}n&&(r.on("complete",function(e){n(null,e)}),r.on("error",n)),e.once("destroyed",i),t.onChange=function(e,t,n){r.isCancelled||function(e,t,n,r){try{e.emit("change",t,n,r)}catch(e){R("error",'Error in .on("change", function):',e)}}(r,e,t,n)};var a=new h(function(e,n){t.complete=function(t,r){t?n(t):e(r)}});r.once("cancel",function(){e.removeListener("destroyed",i),t.complete(null,{status:"cancelled"})}),this.then=a.then.bind(a),this.catch=a.catch.bind(a),this.then(function(e){o(null,e)},o),e.taskqueue.isReady?r.validateChanges(t):e.taskqueue.addTask(function(e){e?t.complete(e):r.isCancelled?r.emit("cancel"):r.validateChanges(t)})}function Ne(e,t,n){var r=[{rev:e._rev}];"all_docs"===n.style&&(r=Ee(t.rev_tree).map(function(e){return{rev:e.rev}}));var o={id:t.id,changes:r,doc:e};return Ie(t,e._rev)&&(o.deleted=!0),n.conflicts&&(o.doc._conflicts=ke(t),o.doc._conflicts.length||delete o.doc._conflicts),o}function Be(e,t){return e<t?-1:e>t?1:0}function $e(e,t){return function(n,r){n||r[0]&&r[0].error?((n=n||r[0]).docId=t,e(n)):e(null,r.length?r[0]:r)}}function Me(e,t){var n=Be(e._id,t._id);return 0!==n?n:Be(e._revisions?e._revisions.start:0,t._revisions?t._revisions.start:0)}function Pe(){s.EventEmitter.call(this)}function Ue(){this.isReady=!1,this.failed=!1,this.queue=[]}function Je(e,t){if(!(this instanceof Je))return new Je(e,t);var n=this;if(t=t||{},e&&"object"==typeof e&&(e=(t=e).name,delete t.name),this.__opts=t=m(t),n.auto_compaction=t.auto_compaction,n.prefix=Je.prefix,"string"!=typeof e)throw new Error("Missing/invalid DB name");var r=function(e,t){var n=e.match(/([a-z-]*):\/\/(.*)/);if(n)return{name:/https?/.test(n[1])?n[1]+"://"+n[2]:n[2],adapter:n[1]};var r=Je.adapters,o=Je.preferredAdapters,i=Je.prefix,a=t.adapter;if(!a)for(var s=0;s<o.length&&"idb"===(a=o[s])&&"websql"in r&&I()&&localStorage["_pouch__websqldb_"+i+e];++s)R("log",'PouchDB is downgrading "'+e+'" to WebSQL to avoid data loss, because it was already opened with WebSQL.');var c=r[a];return{name:c&&"use_prefix"in c&&!c.use_prefix?e:i+e,adapter:a}}((t.prefix||"")+e,t);if(t.name=r.name,t.adapter=t.adapter||r.adapter,n.name=e,n._adapter=t.adapter,Je.emit("debug",["adapter","Picked adapter: ",t.adapter]),!Je.adapters[t.adapter]||!Je.adapters[t.adapter].valid())throw new Error("Invalid Adapter: "+t.adapter);Pe.call(n),n.taskqueue=new Ue,n.adapter=t.adapter,Je.adapters[t.adapter].call(n,t,function(e){if(e)return n.taskqueue.fail(e);!function(e){function t(t){e.removeListener("closed",n),t||e.constructor.emit("destroyed",e.name)}function n(){e.removeListener("destroyed",t),e.constructor.emit("unref",e)}e.once("destroyed",t),e.once("closed",n),e.constructor.emit("ref",e)}(n),n.emit("created",n),Je.emit("created",n.name),n.taskqueue.ready(n)})}c(Fe,s.EventEmitter),Fe.prototype.cancel=function(){this.isCancelled=!0,this.db.taskqueue.isReady&&this.emit("cancel")},Fe.prototype.validateChanges=function(e){var t=e.complete,n=this;Je._changesFilterPlugin?Je._changesFilterPlugin.validate(e,function(r){if(r)return t(r);n.doChanges(e)}):n.doChanges(e)},Fe.prototype.doChanges=function(e){var t=this,n=e.complete;if("live"in(e=m(e))&&!("continuous"in e)&&(e.continuous=e.live),e.processChange=Ne,"latest"===e.since&&(e.since="now"),e.since||(e.since=0),"now"!==e.since){if(Je._changesFilterPlugin){if(Je._changesFilterPlugin.normalize(e),Je._changesFilterPlugin.shouldFilter(this,e))return Je._changesFilterPlugin.filter(this,e)}else["doc_ids","filter","selector","view"].forEach(function(t){t in e&&R("warn",'The "'+t+'" option was passed in to changes/replicate, but pouchdb-changes-filter plugin is not installed, so it was ignored. Please install the plugin to enable filtering.')});"descending"in e||(e.descending=!1),e.limit=0===e.limit?1:e.limit,e.complete=n;var r=this.db._changes(e);if(r&&"function"==typeof r.cancel){var o=t.cancel;t.cancel=i(function(e){r.cancel(),o.apply(this,e)})}}else this.db.info().then(function(r){t.isCancelled?n(null,{status:"cancelled"}):(e.since=r.update_seq,t.doChanges(e))},n)},c(Pe,s.EventEmitter),Pe.prototype.post=E("post",function(e,t,n){if("function"==typeof t&&(n=t,t={}),"object"!=typeof e||Array.isArray(e))return n(ne(Q));this.bulkDocs({docs:[e]},t,$e(n,e._id))}),Pe.prototype.put=E("put",function(e,t,n){if("function"==typeof t&&(n=t,t={}),"object"!=typeof e||Array.isArray(e))return n(ne(Q));if(ae(e._id),De(e._id)&&"function"==typeof this._putLocal)return e._deleted?this._removeLocal(e,n):this._putLocal(e,n);var r,o,i,a,s=this;function c(n){"function"==typeof s._put&&!1!==t.new_edits?s._put(e,t,n):s.bulkDocs({docs:[e]},t,$e(n,e._id))}t.force&&e._rev?(r=e._rev.split("-"),o=r[1],i=parseInt(r[0],10)+1,a=ye(),e._revisions={start:i,ids:[a,o]},e._rev=i+"-"+a,t.new_edits=!1,c(function(t){var r=t?null:{ok:!0,id:e._id,rev:e._rev};n(t,r)})):c(n)}),Pe.prototype.putAttachment=E("putAttachment",function(e,t,n,r,o){var i=this;function a(e){var n="_rev"in e?parseInt(e._rev,10):0;return e._attachments=e._attachments||{},e._attachments[t]={content_type:o,data:r,revpos:++n},i.put(e)}return"function"==typeof o&&(o=r,r=n,n=null),void 0===o&&(o=r,r=n,n=null),o||R("warn","Attachment",t,"on document",e,"is missing content_type"),i.get(e).then(function(e){if(e._rev!==n)throw ne(U);return a(e)},function(t){if(t.reason===P.message)return a({_id:e});throw t})}),Pe.prototype.removeAttachment=E("removeAttachment",function(e,t,n,r){var o=this;o.get(e,function(e,i){if(e)r(e);else if(i._rev===n){if(!i._attachments)return r();delete i._attachments[t],0===Object.keys(i._attachments).length&&delete i._attachments,o.put(i,r)}else r(ne(U))})}),Pe.prototype.remove=E("remove",function(e,t,n,r){var o;"string"==typeof t?(o={_id:e,_rev:t},"function"==typeof n&&(r=n,n={})):(o=e,"function"==typeof t?(r=t,n={}):(r=n,n=t)),(n=n||{}).was_delete=!0;var i={_id:o._id,_rev:o._rev||n.rev,_deleted:!0};if(De(i._id)&&"function"==typeof this._removeLocal)return this._removeLocal(o,r);this.bulkDocs({docs:[i]},n,$e(r,i._id))}),Pe.prototype.revsDiff=E("revsDiff",function(e,t,n){"function"==typeof t&&(n=t,t={});var r=Object.keys(e);if(!r.length)return n(null,{});var o=0,i=new g;function a(e,t){i.has(e)||i.set(e,{missing:[]}),i.get(e).missing.push(t)}r.map(function(t){this._getRevisionTree(t,function(s,c){if(s&&404===s.status&&"missing"===s.message)i.set(t,{missing:e[t]});else{if(s)return n(s);f=c,l=e[u=t].slice(0),be(f,function(e,t,n,r,o){var i=t+"-"+n,s=l.indexOf(i);-1!==s&&(l.splice(s,1),"available"!==o.status&&a(u,i))}),l.forEach(function(e){a(u,e)})}var u,f,l;if(++o===r.length){var d={};return i.forEach(function(e,t){d[t]=e}),n(null,d)}})},this)}),Pe.prototype.bulkGet=E("bulkGet",function(e,t){j(this,e,t)}),Pe.prototype.compactDocument=E("compactDocument",function(e,t,n){var r=this;this._getRevisionTree(e,function(o,i){if(o)return n(o);var a,s,c=(a={},s=[],be(i,function(e,t,n,r){var o=t+"-"+n;return e&&(a[o]=0),void 0!==r&&s.push({from:r,to:o}),o}),s.reverse(),s.forEach(function(e){void 0===a[e.from]?a[e.from]=1+a[e.to]:a[e.from]=Math.min(a[e.from],1+a[e.to])}),a),u=[],f=[];Object.keys(c).forEach(function(e){c[e]>t&&u.push(e)}),be(i,function(e,t,n,r,o){var i=t+"-"+n;"available"===o.status&&-1!==u.indexOf(i)&&f.push(i)}),r._doCompaction(e,f,n)})}),Pe.prototype.compact=E("compact",function(e,t){"function"==typeof e&&(t=e,e={});var n=this;e=e||{},n._compactionQueue=n._compactionQueue||[],n._compactionQueue.push({opts:e,callback:t}),1===n._compactionQueue.length&&function e(t){var n=t._compactionQueue[0],r=n.opts,o=n.callback;t.get("_local/compaction").catch(function(){return!1}).then(function(n){n&&n.last_seq&&(r.last_seq=n.last_seq),t._compact(r,function(n,r){n?o(n):o(null,r),a(function(){t._compactionQueue.shift(),t._compactionQueue.length&&e(t)})})})}(n)}),Pe.prototype._compact=function(e,t){var n=this,r={return_docs:!1,last_seq:e.last_seq||0},o=[];n.changes(r).on("change",function(e){o.push(n.compactDocument(e.id,0))}).on("complete",function(e){var r=e.last_seq;h.all(o).then(function(){return ge(n,"_local/compaction",function(e){return(!e.last_seq||e.last_seq<r)&&(e.last_seq=r,e)})}).then(function(){t(null,{ok:!0})}).catch(t)}).on("error",t)},Pe.prototype.get=E("get",function(e,t,n){if("function"==typeof t&&(n=t,t={}),"string"!=typeof e)return n(ne(J));if(De(e)&&"function"==typeof this._getLocal)return this._getLocal(e,n);var r=[],o=this;function i(){var i=[],a=r.length;if(!a)return n(null,i);r.forEach(function(r){o.get(e,{rev:r,revs:t.revs,latest:t.latest,attachments:t.attachments,binary:t.binary},function(e,t){if(e)i.push({missing:r});else{for(var o,s=0,c=i.length;s<c;s++)if(i[s].ok&&i[s].ok._rev===t._rev){o=!0;break}o||i.push({ok:t})}--a||n(null,i)})})}if(!t.open_revs)return this._get(e,t,function(r,i){if(r)return r.docId=e,n(r);var a=i.doc,s=i.metadata,c=i.ctx;if(t.conflicts){var u=ke(s);u.length&&(a._conflicts=u)}if(Ie(s,a._rev)&&(a._deleted=!0),t.revs||t.revs_info){for(var f=a._rev.split("-"),l=parseInt(f[0],10),d=f[1],h=qe(s.rev_tree),p=null,v=0;v<h.length;v++){var g=h[v],y=g.ids.map(function(e){return e.id}).indexOf(d);(y===l-1||!p&&-1!==y)&&(p=g)}var _=p.ids.map(function(e){return e.id}).indexOf(a._rev.split("-")[1])+1,m=p.ids.length-_;if(p.ids.splice(_,m),p.ids.reverse(),t.revs&&(a._revisions={start:p.pos+p.ids.length-1,ids:p.ids.map(function(e){return e.id})}),t.revs_info){var b=p.pos+p.ids.length;a._revs_info=p.ids.map(function(e){return{rev:--b+"-"+e.id,status:e.opts.status}})}}if(t.attachments&&a._attachments){var w=a._attachments,E=Object.keys(w).length;if(0===E)return n(null,a);Object.keys(w).forEach(function(e){this._getAttachment(a._id,e,w[e],{rev:a._rev,binary:t.binary,ctx:c},function(t,r){var o=a._attachments[e];o.data=r,delete o.stub,delete o.length,--E||n(null,a)})},o)}else{if(a._attachments)for(var k in a._attachments)a._attachments.hasOwnProperty(k)&&(a._attachments[k].stub=!0);n(null,a)}});if("all"===t.open_revs)this._getRevisionTree(e,function(e,t){if(e)return n(e);r=Ee(t).map(function(e){return e.rev}),i()});else{if(!Array.isArray(t.open_revs))return n(ne(z,"function_clause"));r=t.open_revs;for(var a=0;a<r.length;a++){var s=r[a];if("string"!=typeof s||!/^\d+-/.test(s))return n(ne(ee))}i()}}),Pe.prototype.getAttachment=E("getAttachment",function(e,t,n,r){var o=this;n instanceof Function&&(r=n,n={}),this._get(e,n,function(i,a){return i?r(i):a.doc._attachments&&a.doc._attachments[t]?(n.ctx=a.ctx,n.binary=!0,void o._getAttachment(e,t,a.doc._attachments[t],n,r)):r(ne(P))})}),Pe.prototype.allDocs=E("allDocs",function(e,t){if("function"==typeof e&&(t=e,e={}),e.skip=void 0!==e.skip?e.skip:0,e.start_key&&(e.startkey=e.start_key),e.end_key&&(e.endkey=e.end_key),"keys"in e){if(!Array.isArray(e.keys))return t(new TypeError("options.keys must be an array"));var n=["startkey","endkey","key"].filter(function(t){return t in e})[0];if(n)return void t(ne(X,"Query parameter `"+n+"` is not compatible with multi-get"));if(!se(this)&&(o="limit"in(r=e)?r.keys.slice(r.skip,r.limit+r.skip):r.skip>0?r.keys.slice(r.skip):r.keys,r.keys=o,r.skip=0,delete r.limit,r.descending&&(o.reverse(),r.descending=!1),0===e.keys.length))return this._allDocs({limit:0},t)}var r,o;return this._allDocs(e,t)}),Pe.prototype.changes=function(e,t){return"function"==typeof e&&(t=e,e={}),new Fe(this,e,t)},Pe.prototype.close=E("close",function(e){return this._closed=!0,this.emit("closed"),this._close(e)}),Pe.prototype.info=E("info",function(e){var t=this;this._info(function(n,r){if(n)return e(n);r.db_name=r.db_name||t.name,r.auto_compaction=!(!t.auto_compaction||se(t)),r.adapter=t.adapter,e(null,r)})}),Pe.prototype.id=E("id",function(e){return this._id(e)}),Pe.prototype.type=function(){return"function"==typeof this._type?this._type():this.adapter},Pe.prototype.bulkDocs=E("bulkDocs",function(e,t,n){if("function"==typeof t&&(n=t,t={}),t=t||{},Array.isArray(e)&&(e={docs:e}),!e||!e.docs||!Array.isArray(e.docs))return n(ne(M));for(var r=0;r<e.docs.length;++r)if("object"!=typeof e.docs[r]||Array.isArray(e.docs[r]))return n(ne(Q));var o;if(e.docs.forEach(function(e){e._attachments&&Object.keys(e._attachments).forEach(function(t){var n;o=o||"_"===(n=t).charAt(0)&&n+" is not a valid attachment name, attachment names cannot start with '_'",e._attachments[t].content_type||R("warn","Attachment",t,"on document",e._id,"is missing content_type")})}),o)return n(ne(V,o));"new_edits"in t||(t.new_edits=!("new_edits"in e)||e.new_edits);var i=this;t.new_edits||se(i)||e.docs.sort(Me),function(e){for(var t=0;t<e.length;t++){var n=e[t];if(n._deleted)delete n._attachments;else if(n._attachments)for(var r=Object.keys(n._attachments),o=0;o<r.length;o++){var i=r[o];n._attachments[i]=C(n._attachments[i],["data","digest","content_type","length","revpos","stub"])}}}(e.docs);var a=e.docs.map(function(e){return e._id});return this._bulkDocs(e,t,function(e,r){if(e)return n(e);if(t.new_edits||(r=r.filter(function(e){return e.error})),!se(i))for(var o=0,s=r.length;o<s;o++)r[o].id=r[o].id||a[o];n(null,r)})}),Pe.prototype.registerDependentDatabase=E("registerDependentDatabase",function(e,t){var n=new this.constructor(e,this.__opts);ge(this,"_local/_pouch_dependentDbs",function(t){return t.dependentDbs=t.dependentDbs||{},!t.dependentDbs[e]&&(t.dependentDbs[e]=!0,t)}).then(function(){t(null,{db:n})}).catch(t)}),Pe.prototype.destroy=E("destroy",function(e,t){"function"==typeof e&&(t=e,e={});var n=this,r=!("use_prefix"in n)||n.use_prefix;function o(){n._destroy(e,function(e,r){if(e)return t(e);n._destroyed=!0,n.emit("destroyed"),t(null,r||{ok:!0})})}if(se(n))return o();n.get("_local/_pouch_dependentDbs",function(e,i){if(e)return 404!==e.status?t(e):o();var a=i.dependentDbs,s=n.constructor,c=Object.keys(a).map(function(e){var t=r?e.replace(new RegExp("^"+s.prefix),""):e;return new s(t,n.__opts).destroy()});h.all(c).then(o,t)})}),Ue.prototype.execute=function(){var e;if(this.failed)for(;e=this.queue.shift();)e(this.failed);else for(;e=this.queue.shift();)e()},Ue.prototype.fail=function(e){this.failed=e,this.execute()},Ue.prototype.ready=function(e){this.isReady=!0,this.db=e,this.execute()},Ue.prototype.addTask=function(e){this.queue.push(e),this.failed&&this.execute()},c(Je,Pe),Je.adapters={},Je.preferredAdapters=[],Je.prefix="_pouch_";var We=new s.EventEmitter;!function(e){Object.keys(s.EventEmitter.prototype).forEach(function(t){"function"==typeof s.EventEmitter.prototype[t]&&(e[t]=We[t].bind(We))});var t=e._destructionListeners=new g;e.on("ref",function(e){t.has(e.name)||t.set(e.name,[]),t.get(e.name).push(e)}),e.on("unref",function(e){if(t.has(e.name)){var n=t.get(e.name),r=n.indexOf(e);r<0||(n.splice(r,1),n.length>1?t.set(e.name,n):t.delete(e.name))}}),e.on("destroyed",function(e){if(t.has(e)){var n=t.get(e);t.delete(e),n.forEach(function(e){e.emit("destroyed",!0)})}})}(Je),Je.adapter=function(e,t,n){t.valid()&&(Je.adapters[e]=t,n&&Je.preferredAdapters.push(e))},Je.plugin=function(e){if("function"==typeof e)e(Je);else{if("object"!=typeof e||0===Object.keys(e).length)throw new Error('Invalid plugin: got "'+e+'", expected an object or a function');Object.keys(e).forEach(function(t){Je.prototype[t]=e[t]})}return this.__defaults&&(Je.__defaults=B({},this.__defaults)),Je},Je.defaults=function(e){function t(e,n){if(!(this instanceof t))return new t(e,n);n=n||{},e&&"object"==typeof e&&(e=(n=e).name,delete n.name),n=B({},t.__defaults,n),Je.call(this,e,n)}return c(t,Je),t.preferredAdapters=Je.preferredAdapters.slice(),Object.keys(Je).forEach(function(e){e in t||(t[e]=Je[e])}),t.__defaults=B({},this.__defaults,e),t};function He(e,t){for(var n=e,r=0,o=t.length;r<o;r++){if(!(n=n[t[r]]))break}return n}function ze(e){for(var t=[],n="",r=0,o=e.length;r<o;r++){var i=e[r];"."===i?r>0&&"\\"===e[r-1]?n=n.substring(0,n.length-1)+".":(t.push(n),n=""):n+=i}return t.push(n),t}var Ke=["$or","$nor","$not"];function Xe(e){return Ke.indexOf(e)>-1}function Ge(e){return Object.keys(e)[0]}function Ve(e){var t={};return e.forEach(function(e){Object.keys(e).forEach(function(n){var r=e[n];if("object"!=typeof r&&(r={$eq:r}),Xe(n))r instanceof Array?t[n]=r.map(function(e){return Ve([e])}):t[n]=Ve([r]);else{var o=t[n]=t[n]||{};Object.keys(r).forEach(function(e){var t,n,i,a,s=r[e];return"$gt"===e||"$gte"===e?function(e,t,n){if(void 0!==n.$eq)return;void 0!==n.$gte?"$gte"===e?t>n.$gte&&(n.$gte=t):t>=n.$gte&&(delete n.$gte,n.$gt=t):void 0!==n.$gt?"$gte"===e?t>n.$gt&&(delete n.$gt,n.$gte=t):t>n.$gt&&(n.$gt=t):n[e]=t}(e,s,o):"$lt"===e||"$lte"===e?function(e,t,n){if(void 0!==n.$eq)return;void 0!==n.$lte?"$lte"===e?t<n.$lte&&(n.$lte=t):t<=n.$lte&&(delete n.$lte,n.$lt=t):void 0!==n.$lt?"$lte"===e?t<n.$lt&&(delete n.$lt,n.$lte=t):t<n.$lt&&(n.$lt=t):n[e]=t}(e,s,o):"$ne"===e?(i=s,void("$ne"in(a=o)?a.$ne.push(i):a.$ne=[i])):"$eq"===e?(t=s,delete(n=o).$gt,delete n.$gte,delete n.$lt,delete n.$lte,delete n.$ne,void(n.$eq=t)):void(o[e]=s)})}})}),t}var Qe=-324,Ye=3,Ze="";function et(e,t){if(e===t)return 0;e=tt(e),t=tt(t);var n,r,o=at(e),i=at(t);if(o-i!=0)return o-i;switch(typeof e){case"number":return e-t;case"boolean":return e<t?-1:1;case"string":return(n=e)===(r=t)?0:n>r?1:-1}return Array.isArray(e)?function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var o=et(e[r],t[r]);if(0!==o)return o}return e.length===t.length?0:e.length>t.length?1:-1}(e,t):function(e,t){for(var n=Object.keys(e),r=Object.keys(t),o=Math.min(n.length,r.length),i=0;i<o;i++){var a=et(n[i],r[i]);if(0!==a)return a;if(0!==(a=et(e[n[i]],t[r[i]])))return a}return n.length===r.length?0:n.length>r.length?1:-1}(e,t)}function tt(e){switch(typeof e){case"undefined":return null;case"number":return e===1/0||e===-1/0||isNaN(e)?null:e;case"object":var t=e;if(Array.isArray(e)){var n=e.length;e=new Array(n);for(var r=0;r<n;r++)e[r]=tt(t[r])}else{if(e instanceof Date)return e.toJSON();if(null!==e)for(var o in e={},t)if(t.hasOwnProperty(o)){var i=t[o];void 0!==i&&(e[o]=tt(i))}}}return e}function nt(e){if(null!==e)switch(typeof e){case"boolean":return e?1:0;case"number":return function(e){if(0===e)return"1";var t=e.toExponential().split(/e\+?/),n=parseInt(t[1],10),r=e<0,o=r?"0":"2",i=(a=((r?-n:n)-Qe).toString(),s="0",c=Ye,function(e,t,n){for(var r="",o=n-e.length;r.length<o;)r+=t;return r}(a,s,c)+a);var a,s,c;o+=Ze+i;var u=Math.abs(parseFloat(t[0]));r&&(u=10-u);var f=u.toFixed(20);return f=f.replace(/\.?0+$/,""),o+=Ze+f}(e);case"string":return e.replace(/\u0002/g,"").replace(/\u0001/g,"").replace(/\u0000/g,"");case"object":var t=Array.isArray(e),n=t?e:Object.keys(e),r=-1,o=n.length,i="";if(t)for(;++r<o;)i+=rt(n[r]);else for(;++r<o;){var a=n[r];i+=rt(a)+rt(e[a])}return i}return""}function rt(e){return at(e=tt(e))+Ze+nt(e)+"\0"}function ot(e,t){var n,r=t;if("1"===e[t])n=0,t++;else{var o="0"===e[t];t++;var i="",a=e.substring(t,t+Ye),s=parseInt(a,10)+Qe;for(o&&(s=-s),t+=Ye;;){var c=e[t];if("\0"===c)break;i+=c,t++}n=1===(i=i.split(".")).length?parseInt(i,10):parseFloat(i[0]+"."+i[1]),o&&(n-=10),0!==s&&(n=parseFloat(n+"e"+s))}return{num:n,length:t-r}}function it(e,t){var n=e.pop();if(t.length){var r=t[t.length-1];n===r.element&&(t.pop(),r=t[t.length-1]);var o=r.element,i=r.index;if(Array.isArray(o))o.push(n);else if(i===e.length-2){o[e.pop()]=n}else e.push(n)}}function at(e){var t=["boolean","number","string","object"].indexOf(typeof e);return~t?null===e?1:Array.isArray(e)?5:t<3?t+2:t+3:Array.isArray(e)?5:void 0}function st(e,t,n){if(e=e.filter(function(e){return ct(e.doc,t.selector,n)}),t.sort){var r=function(e){function t(t){return e.map(function(e){var n=ze(Ge(e));return He(t,n)})}return function(e,n){var r,o,i=et(t(e.doc),t(n.doc));return 0!==i?i:(r=e.doc._id,o=n.doc._id,r<o?-1:r>o?1:0)}}(t.sort);e=e.sort(r),"string"!=typeof t.sort[0]&&"desc"===(o=t.sort[0])[Ge(o)]&&(e=e.reverse())}var o;if("limit"in t||"skip"in t){var i=t.skip||0,a=("limit"in t?t.limit:e.length)+i;e=e.slice(i,a)}return e}function ct(e,t,n){return n.every(function(n){var r=t[n],o=ze(n),i=He(e,o);return Xe(n)?function(e,t,n){if("$or"===e)return t.some(function(e){return ct(n,e,Object.keys(e))});if("$not"===e)return!ct(n,t,Object.keys(t));return!t.find(function(e){return ct(n,e,Object.keys(e))})}(n,r,e):ut(r,e,o,i)})}function ut(e,t,n,r){return!e||Object.keys(e).every(function(o){var i=e[o];return function(e,t,n,r,o){if(!ht[e])throw new Error('unknown operator "'+e+'" - should be one of $eq, $lte, $lt, $gt, $gte, $exists, $ne, $in, $nin, $size, $mod, $regex, $elemMatch, $type, $allMatch or $all');return ht[e](t,n,r,o)}(o,t,i,n,r)})}function ft(e){return void 0!==e&&null!==e}function lt(e){return void 0!==e}function dt(e,t){return t.some(function(t){return e instanceof Array?e.indexOf(t)>-1:e===t})}var ht={$elemMatch:function(e,t,n,r){return!!Array.isArray(r)&&(0!==r.length&&("object"==typeof r[0]?r.some(function(e){return ct(e,t,Object.keys(t))}):r.some(function(r){return ut(t,e,n,r)})))},$allMatch:function(e,t,n,r){return!!Array.isArray(r)&&(0!==r.length&&("object"==typeof r[0]?r.every(function(e){return ct(e,t,Object.keys(t))}):r.every(function(r){return ut(t,e,n,r)})))},$eq:function(e,t,n,r){return lt(r)&&0===et(r,t)},$gte:function(e,t,n,r){return lt(r)&&et(r,t)>=0},$gt:function(e,t,n,r){return lt(r)&&et(r,t)>0},$lte:function(e,t,n,r){return lt(r)&&et(r,t)<=0},$lt:function(e,t,n,r){return lt(r)&&et(r,t)<0},$exists:function(e,t,n,r){return t?lt(r):!lt(r)},$mod:function(e,t,n,r){return ft(r)&&function(e,t){var n=t[0],r=t[1];if(0===n)throw new Error("Bad divisor, cannot divide by zero");if(parseInt(n,10)!==n)throw new Error("Divisor is not an integer");if(parseInt(r,10)!==r)throw new Error("Modulus is not an integer");return parseInt(e,10)===e&&e%n===r}(r,t)},$ne:function(e,t,n,r){return t.every(function(e){return 0!==et(r,e)})},$in:function(e,t,n,r){return ft(r)&&dt(r,t)},$nin:function(e,t,n,r){return ft(r)&&!dt(r,t)},$size:function(e,t,n,r){return ft(r)&&(o=t,r.length===o);var o},$all:function(e,t,n,r){return Array.isArray(r)&&(o=r,t.every(function(e){return o.indexOf(e)>-1}));var o},$regex:function(e,t,n,r){return ft(r)&&(o=r,new RegExp(t).test(o));var o},$type:function(e,t,n,r){return function(e,t){switch(t){case"null":return null===e;case"boolean":return"boolean"==typeof e;case"number":return"number"==typeof e;case"string":return"string"==typeof e;case"array":return e instanceof Array;case"object":return"[object Object]"==={}.toString.call(e)}throw new Error(t+" not supported as a type.Please use one of object, string, array, number, boolean or null.")}(r,t)}};function pt(e,t){if("object"!=typeof t)throw new Error("Selector error: expected a JSON object");var n=st([{doc:e}],{selector:t=function(e){var t=m(e),n=!1;"$and"in t&&(t=Ve(t.$and),n=!0),["$or","$nor"].forEach(function(e){e in t&&t[e].forEach(function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var r=t[n],o=e[r];"object"==typeof o&&null!==o||(e[r]={$eq:o})}})}),"$not"in t&&(t.$not=Ve([t.$not]));for(var r=Object.keys(t),o=0;o<r.length;o++){var i=r[o],a=t[i];"object"!=typeof a||null===a?a={$eq:a}:"$ne"in a&&!n&&(a.$ne=[a.$ne]),t[i]=a}return t}(t)},Object.keys(t));return n&&1===n.length}function vt(e,t){if(e.selector&&e.filter&&"_selector"!==e.filter){var n="string"==typeof e.filter?e.filter:"function";return t(new Error('selector invalid for filter "'+n+'"'))}t()}function gt(e){e.view&&!e.filter&&(e.filter="_view"),e.selector&&!e.filter&&(e.filter="_selector"),e.filter&&"string"==typeof e.filter&&("_view"===e.filter?e.view=ue(e.view):e.filter=ue(e.filter))}function yt(e,t){return t.filter&&"string"==typeof t.filter&&!t.doc_ids&&!se(e.db)}function _t(e,t){var n=t.complete;if("_view"===t.filter){if(!t.view||"string"!=typeof t.view){var r=ne(V,"`view` filter parameter not found or invalid.");return n(r)}var o=ce(t.view);e.db.get("_design/"+o[0],function(r,i){if(e.isCancelled)return n(null,{status:"cancelled"});if(r)return n(re(r));var a=i&&i.views&&i.views[o[1]]&&i.views[o[1]].map;if(!a)return n(ne(P,i.views?"missing json key: "+o[1]:"missing json key: views"));t.filter=ve(["return function(doc) {",'  "use strict";',"  var emitted = false;","  var emit = function (a, b) {","    emitted = true;","  };","  var view = "+a+";","  view(doc);","  if (emitted) {","    return true;","  }","};"].join("\n"),{}),e.doChanges(t)})}else if(t.selector)t.filter=function(e){return pt(e,t.selector)},e.doChanges(t);else{var i=ce(t.filter);e.db.get("_design/"+i[0],function(r,o){if(e.isCancelled)return n(null,{status:"cancelled"});if(r)return n(re(r));var a=o&&o.filters&&o.filters[i[1]];if(!a)return n(ne(P,o&&o.filters?"missing json key: "+i[1]:"missing json key: filters"));t.filter=ve('"use strict";\nreturn '+a+";",{}),e.doChanges(t)})}}function mt(e){return e.reduce(function(e,t){return e[t]=!0,e},{})}Je.plugin(function(e){e.debug=f;var t={};e.on("debug",function(e){var n=e[0],r=e.slice(1);t[n]||(t[n]=f("pouchdb:"+n)),t[n].apply(null,r)})}),Je.plugin(function(e){e._changesFilterPlugin={validate:vt,normalize:gt,shouldFilter:yt,filter:_t}}),Je.version="6.4.3";var bt=mt(["_id","_rev","_attachments","_deleted","_revisions","_revs_info","_conflicts","_deleted_conflicts","_local_seq","_rev_tree","_replication_id","_replication_state","_replication_state_time","_replication_state_reason","_replication_stats","_removed"]),wt=mt(["_attachments","_replication_id","_replication_state","_replication_state_time","_replication_state_reason","_replication_stats"]);function Et(e){if(!/^\d+-./.test(e))return ne(ee);var t=e.indexOf("-"),n=e.substring(0,t),r=e.substring(t+1);return{prefix:parseInt(n,10),id:r}}function kt(e,t){var n,r,o,i={status:"available"};if(e._deleted&&(i.deleted=!0),t)if(e._id||(e._id=_e()),r=ye(),e._rev){if((o=Et(e._rev)).error)return o;e._rev_tree=[{pos:o.prefix,ids:[o.id,{status:"missing"},[[r,i,[]]]]}],n=o.prefix+1}else e._rev_tree=[{pos:1,ids:[r,i,[]]}],n=1;else if(e._revisions&&(e._rev_tree=function(e,t){for(var n=e.start-e.ids.length+1,r=e.ids,o=[r[0],t,[]],i=1,a=r.length;i<a;i++)o=[r[i],{status:"missing"},[o]];return[{pos:n,ids:o}]}(e._revisions,i),n=e._revisions.start,r=e._revisions.ids[0]),!e._rev_tree){if((o=Et(e._rev)).error)return o;n=o.prefix,r=o.id,e._rev_tree=[{pos:n,ids:[r,i,[]]}]}ae(e._id),e._rev=n+"-"+r;var a={metadata:{},data:{}};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var c="_"===s[0];if(c&&!bt[s]){var u=ne(G,s);throw u.message=G.message+": "+s,u}c&&!wt[s]?a.metadata[s.slice(1)]=e[s]:a.data[s]=e[s]}return a}var St=function(e){return atob(e)},qt=function(e){return btoa(e)};function Ct(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(o){if("TypeError"!==o.name)throw o;for(var n=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),r=0;r<e.length;r+=1)n.append(e[r]);return n.getBlob(t.type)}}function At(e,t){return Ct([function(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),o=0;o<t;o++)r[o]=e.charCodeAt(o);return n}(e)],{type:t})}function xt(e,t){return At(St(e),t)}function Tt(e){for(var t="",n=new Uint8Array(e),r=n.byteLength,o=0;o<r;o++)t+=String.fromCharCode(n[o]);return t}function Ot(e,t){if("undefined"==typeof FileReader)return t(Tt((new FileReaderSync).readAsArrayBuffer(e)));var n=new FileReader,r="function"==typeof n.readAsBinaryString;n.onloadend=function(e){var n=e.target.result||"";if(r)return t(n);t(Tt(n))},r?n.readAsBinaryString(e):n.readAsArrayBuffer(e)}function jt(e,t){Ot(e,function(e){t(e)})}function Lt(e,t){jt(e,function(e){t(qt(e))})}function It(e,t){if("undefined"==typeof FileReader)return t((new FileReaderSync).readAsArrayBuffer(e));var n=new FileReader;n.onloadend=function(e){var n=e.target.result||new ArrayBuffer(0);t(n)},n.readAsArrayBuffer(e)}var Dt=n.setImmediate||n.setTimeout,Rt=32768;function Ft(e,t,n,r,o){var i,a,s;(n>0||r<t.size)&&(a=n,s=r,t=(i=t).webkitSlice?i.webkitSlice(a,s):i.slice(a,s)),It(t,function(t){e.append(t),o()})}function Nt(e,t,n,r,o){(n>0||r<t.length)&&(t=t.substring(n,r)),e.appendBinary(t),o()}function Bt(e,t){var n="string"==typeof e,r=n?e.length:e.size,o=Math.min(Rt,r),i=Math.ceil(r/o),a=0,s=n?new l:new l.ArrayBuffer,c=n?Nt:Ft;function u(){Dt(d)}function f(){var e=s.end(!0),n=qt(e);t(n),s.destroy()}function d(){var t=a*o,n=t+o;c(s,e,t,n,++a<i?u:f)}d()}function $t(e,t,n){var r=function(e){try{return St(e)}catch(e){return{error:ne(K,"Attachment is not a valid base64 string")}}}(e.data);if(r.error)return n(r.error);e.length=r.length,e.data="blob"===t?At(r,e.content_type):"base64"===t?qt(r):r,Bt(r,function(t){e.digest="md5-"+t,n()})}function Mt(e,t,n){if(e.stub)return n();var r,o,i;"string"==typeof e.data?$t(e,t,n):(o=t,i=n,Bt((r=e).data,function(e){r.digest="md5-"+e,r.length=r.data.size||r.data.length||0,"binary"===o?jt(r.data,function(e){r.data=e,i()}):"base64"===o?Lt(r.data,function(e){r.data=e,i()}):i()}))}function Pt(e,t,n){if(!e.length)return n();var r,o=0;function i(){o++,e.length===o&&(r?n(r):n())}e.forEach(function(e){var n=e.data&&e.data._attachments?Object.keys(e.data._attachments):[],o=0;if(!n.length)return i();function a(e){r=e,++o===n.length&&i()}for(var s in e.data._attachments)e.data._attachments.hasOwnProperty(s)&&Mt(e.data._attachments[s],t,a)})}function Ut(e,t,n,r,o,i,a,s){if(function(e,t){for(var n,r=e.slice(),o=t.split("-"),i=parseInt(o[0],10),a=o[1];n=r.pop();){if(n.pos===i&&n.ids[0]===a)return!0;for(var s=n.ids[2],c=0,u=s.length;c<u;c++)r.push({pos:n.pos+1,ids:s[c]})}return!1}(t.rev_tree,n.metadata.rev))return r[o]=n,i();var c=t.winningRev||me(t),u="deleted"in t?t.deleted:Ie(t,c),f="deleted"in n.metadata?n.metadata.deleted:Ie(n.metadata),l=/^1-/.test(n.metadata.rev);if(u&&!f&&s&&l){var d=n.data;d._rev=c,d._id=n.metadata.id,n=kt(d,s)}var h=je(t.rev_tree,n.metadata.rev_tree[0],e);if(s&&(u&&f&&"new_leaf"!==h.conflicts||!u&&"new_leaf"!==h.conflicts||u&&!f&&"new_branch"===h.conflicts)){var p=ne(U);return r[o]=p,i()}var v=n.metadata.rev;n.metadata.rev_tree=h.tree,n.stemmedRevs=h.stemmedRevs||[],t.rev_map&&(n.metadata.rev_map=t.rev_map);var g=me(n.metadata),y=Ie(n.metadata,g),_=u===y?0:u<y?-1:1;a(n,g,y,v===g?y:Ie(n.metadata,v),!0,_,o,i)}function Jt(e,t,n,r,o,i,a,s,c){e=e||1e3;var u=s.new_edits,f=new g,l=0,d=t.length;function h(){++l===d&&c&&c()}t.forEach(function(e,t){if(e._id&&De(e._id)){var r=e._deleted?"_removeLocal":"_putLocal";n[r](e,{ctx:o},function(e,n){i[t]=e||n,h()})}else{var a=e.metadata.id;f.has(a)?(d--,f.get(a).push([e,t])):f.set(a,[[e,t]])}}),f.forEach(function(t,n){var o=0;function c(){++o<t.length?f():h()}function f(){var f=t[o],l=f[0],d=f[1];if(r.has(n))Ut(e,r.get(n),l,i,d,c,a,u);else{var h=je([],l.metadata.rev_tree[0],e);l.metadata.rev_tree=h.tree,l.stemmedRevs=h.stemmedRevs||[],function(e,t,n){var r=me(e.metadata),o=Ie(e.metadata,r);if("was_delete"in s&&o)return i[t]=ne(P,"deleted"),n();if(u&&"missing"===e.metadata.rev_tree[0].ids[1].status){var c=ne(U);return i[t]=c,n()}a(e,r,o,o,!1,o?0:1,t,n)}(l,d,c)}}f()})}var Wt=5,Ht="document-store",zt="by-sequence",Kt="attach-store",Xt="attach-seq-store",Gt="meta-store",Vt="local-store",Qt="detect-blob-support";function Yt(e){try{return JSON.parse(e)}catch(t){return d.parse(e)}}function Zt(e){try{return JSON.stringify(e)}catch(t){return d.stringify(e)}}function en(e){return function(t){var n="unknown_error";t.target&&t.target.error&&(n=t.target.error.name||t.target.error.message),e(ne(Y,n,t.type))}}function tn(e,t,n){return{data:Zt(e),winningRev:t,deletedOrLocal:n?"1":"0",seq:e.seq,id:e.id}}function nn(e){if(!e)return null;var t=Yt(e.data);return t.winningRev=e.winningRev,t.deleted="1"===e.deletedOrLocal,t.seq=e.seq,t}function rn(e){if(!e)return e;var t=e._doc_id_rev.lastIndexOf(":");return e._id=e._doc_id_rev.substring(0,t-1),e._rev=e._doc_id_rev.substring(t+1),delete e._doc_id_rev,e}function on(e,t,n,r){n?r(e?"string"!=typeof e?e:xt(e,t):Ct([""],{type:t})):e?"string"!=typeof e?Ot(e,function(e){r(qt(e))}):r(e):r("")}function an(e,t,n,r){var o=Object.keys(e._attachments||{});if(!o.length)return r&&r();var i=0;function a(){++i===o.length&&r&&r()}o.forEach(function(r){var o,i,s;t.attachments&&t.include_docs?(o=r,i=e._attachments[o],s=i.digest,n.objectStore(Kt).get(s).onsuccess=function(e){i.body=e.target.result.body,a()}):(e._attachments[r].stub=!0,a())})}function sn(e,t){return h.all(e.map(function(e){if(e.doc&&e.doc._attachments){var n=Object.keys(e.doc._attachments);return h.all(n.map(function(n){var r=e.doc._attachments[n];if("body"in r){var o=r.body,i=r.content_type;return new h(function(a){on(o,i,t,function(t){e.doc._attachments[n]=B(C(r,["digest","content_type"]),{data:t}),a()})})}}))}}))}function cn(e,t,n){var r=[],o=n.objectStore(zt),i=n.objectStore(Kt),a=n.objectStore(Xt),s=e.length;function c(){--s||function(){if(!r.length)return;r.forEach(function(e){var t=a.index("digestSeq").count(IDBKeyRange.bound(e+"::",e+"::￿",!1,!1));t.onsuccess=function(t){var n=t.target.result;n||i.delete(e)}})}()}e.forEach(function(e){var n=o.index("_doc_id_rev"),i=t+"::"+e;n.getKey(i).onsuccess=function(e){var t=e.target.result;if("number"!=typeof t)return c();o.delete(t),a.index("seq").openCursor(IDBKeyRange.only(t)).onsuccess=function(e){var t=e.target.result;if(t){var n=t.value.digestSeq.split("::")[0];r.push(n),a.delete(t.primaryKey),t.continue()}else c()}}})}function un(e,t,n){try{return{txn:e.transaction(t,n)}}catch(e){return{error:e}}}var fn=new D;function ln(e,t,n,r,o,i){for(var a,s,c,u,f,l,d,h,p=t.docs,v=0,y=p.length;v<y;v++){var _=p[v];_._id&&De(_._id)||(_=p[v]=kt(_,n.new_edits)).error&&!d&&(d=_)}if(d)return i(d);var m=!1,b=0,w=new Array(p.length),E=new g,k=!1,S=r._meta.blobSupport?"blob":"base64";function q(){m=!0,C()}function C(){h&&m&&(h.docCount+=b,l.put(h))}function A(){k||(fn.notify(r._meta.name),i(null,w))}function x(e,t,n,r,o,i,a,s){e.metadata.winningRev=t,e.metadata.deleted=n;var c=e.data;if(c._id=e.metadata.id,c._rev=e.metadata.rev,r&&(c._deleted=!0),c._attachments&&Object.keys(c._attachments).length)return function(e,t,n,r,o,i){var a=e.data,s=0,c=Object.keys(a._attachments);function f(){s===c.length&&T(e,t,n,r,o,i)}function l(){s++,f()}c.forEach(function(n){var r,o,i,a=e.data._attachments[n];if(a.stub)s++,f();else{var c=a.data;delete a.data,a.revpos=parseInt(t,10);var d=a.digest;r=d,o=c,i=l,u.count(r).onsuccess=function(e){var t=e.target.result;if(t)return i();var n={digest:r,body:o},a=u.put(n);a.onsuccess=i}}})}(e,t,n,o,a,s);b+=i,C(),T(e,t,n,o,a,s)}function T(e,t,n,o,i,u){var l=e.data,d=e.metadata;function h(i){var c=e.stemmedRevs||[];o&&r.auto_compaction&&(c=c.concat(Se(e.metadata))),c&&c.length&&cn(c,e.metadata.id,a),d.seq=i.target.result;var u=tn(d,t,n);s.put(u).onsuccess=p}function p(){w[i]={ok:!0,id:d.id,rev:d.rev},E.set(e.metadata.id,e.metadata),function(e,t,n){var r=0,o=Object.keys(e.data._attachments||{});if(!o.length)return n();function i(){++r===o.length&&n()}function a(n){var r=e.data._attachments[n].digest,o=f.put({seq:t,digestSeq:r+"::"+t});o.onsuccess=i,o.onerror=function(e){e.preventDefault(),e.stopPropagation(),i()}}for(var s=0;s<o.length;s++)a(o[s])}(e,d.seq,u)}l._doc_id_rev=d.id+"::"+d.rev,delete l._id,delete l._rev;var v=c.put(l);v.onsuccess=h,v.onerror=function(e){e.preventDefault(),e.stopPropagation(),c.index("_doc_id_rev").getKey(l._doc_id_rev).onsuccess=function(e){c.put(l,e.target.result).onsuccess=h}}}Pt(p,S,function(t){if(t)return i(t);!function(){var t=un(o,[Ht,zt,Kt,Vt,Xt,Gt],"readwrite");if(t.error)return i(t.error);(a=t.txn).onabort=en(i),a.ontimeout=en(i),a.oncomplete=A,s=a.objectStore(Ht),c=a.objectStore(zt),u=a.objectStore(Kt),f=a.objectStore(Xt),(l=a.objectStore(Gt)).get(Gt).onsuccess=function(e){h=e.target.result,C()},function(e){var t=[];if(p.forEach(function(e){e.data&&e.data._attachments&&Object.keys(e.data._attachments).forEach(function(n){var r=e.data._attachments[n];r.stub&&t.push(r.digest)})}),!t.length)return e();var n,r=0;t.forEach(function(o){var i,a;i=o,a=function(o){o&&!n&&(n=o),++r===t.length&&e(n)},u.get(i).onsuccess=function(e){if(e.target.result)a();else{var t=ne(te,"unknown stub attachment with digest "+i);t.status=412,a(t)}}})}(function(t){if(t)return k=!0,i(t);!function(){if(!p.length)return;var t=0;function o(){++t===p.length&&Jt(e.revs_limit,p,r,E,a,w,x,n,q)}function i(e){var t=nn(e.target.result);t&&E.set(t.id,t),o()}for(var c=0,u=p.length;c<u;c++){var f=p[c];if(f._id&&De(f._id))o();else{var l=s.get(f.metadata.id);l.onsuccess=i}}}()})}()})}function dn(e,t,n,r,o){var i,a,s;function c(e){a=e.target.result,i&&o(i,a,s)}function u(e){i=e.target.result,a&&o(i,a,s)}function f(e){var t=e.target.result;if(!t)return o();o([t.key],[t.value],t)}"function"==typeof e.getAll&&"function"==typeof e.getAllKeys&&r>1&&!n?(s={continue:function(){if(!i.length)return o();var n,s=i[i.length-1];if(t&&t.upper)try{n=IDBKeyRange.bound(s,t.upper,!0,t.upperOpen)}catch(e){if("DataError"===e.name&&0===e.code)return o()}else n=IDBKeyRange.lowerBound(s,!0);t=n,i=null,a=null,e.getAll(t,r).onsuccess=c,e.getAllKeys(t,r).onsuccess=u}},e.getAll(t,r).onsuccess=c,e.getAllKeys(t,r).onsuccess=u):n?e.openCursor(t,"prev").onsuccess=f:e.openCursor(t).onsuccess=f}function hn(e,t,n){var r,o,i="startkey"in e&&e.startkey,a="endkey"in e&&e.endkey,s="key"in e&&e.key,c="keys"in e&&e.keys,u=e.skip||0,f="number"==typeof e.limit?e.limit:-1,l=!1!==e.inclusive_end;if(!c&&(o=(r=function(e,t,n,r,o){try{if(e&&t)return o?IDBKeyRange.bound(t,e,!n,!1):IDBKeyRange.bound(e,t,!1,!n);if(e)return o?IDBKeyRange.upperBound(e):IDBKeyRange.lowerBound(e);if(t)return o?IDBKeyRange.lowerBound(t,!n):IDBKeyRange.upperBound(t,!n);if(r)return IDBKeyRange.only(r)}catch(e){return{error:e}}return null}(i,a,l,s,e.descending))&&r.error)&&("DataError"!==o.name||0!==o.code))return n(ne(Y,o.name,o.message));var d=[Ht,zt,Gt];e.attachments&&d.push(Kt);var h=un(t,d,"readonly");if(h.error)return n(h.error);var p=h.txn;p.oncomplete=function(){e.attachments?sn(C,e.binary).then(O):O()},p.onabort=en(n);var v,g,y,_,m,b,w,E=p.objectStore(Ht),k=p.objectStore(zt),S=p.objectStore(Gt),q=k.index("_doc_id_rev"),C=[];function A(t,n){var r,o,i,a,s={id:n.id,key:n.id,value:{rev:t}};n.deleted?c&&(C.push(s),s.value.deleted=!0,s.doc=null):u--<=0&&(C.push(s),e.include_docs&&(o=s,i=t,a=(r=n).id+"::"+i,q.get(a).onsuccess=function(t){if(o.doc=rn(t.target.result),e.conflicts){var n=ke(r);n.length&&(o.doc._conflicts=n)}an(o.doc,e,p)}))}function x(e){for(var t=0,n=e.length;t<n&&C.length!==f;t++){var r=e[t];if(r.error&&c)C.push(r);else{var o=nn(r);A(o.winningRev,o)}}}function T(e,t,n){n&&(x(t),C.length<f&&n.continue())}function O(){var t={total_rows:v,offset:e.skip,rows:C};e.update_seq&&void 0!==g&&(t.update_seq=g),n(null,t)}return S.get(Gt).onsuccess=function(e){v=e.target.result.docCount},e.update_seq&&function(e,t){e.openCursor(null,"prev").onsuccess=function(e){var n=e.target.result,r=void 0;n&&n.key&&(r=n.key);return t({target:{result:[r]}})}}(k,function(e){e.target.result&&e.target.result.length>0&&(g=e.target.result[0])}),o||0===f?void 0:c?(y=e.keys,_=E,m=T,b=[],w=0,void y.forEach(function(e,t){_.get(e).onsuccess=function(n){n.target.result?b[t]=n.target.result:b[t]={key:e,error:"not_found"},++w===y.length&&m(y,b,{})}})):-1===f?function(e,t,n){if("function"!=typeof e.getAll){var r=[];e.openCursor(t).onsuccess=function(e){var t=e.target.result;t?(r.push(t.value),t.continue()):n({target:{result:r}})}}else e.getAll(t).onsuccess=n}(E,r,function(t){var n=t.target.result;e.descending&&(n=n.reverse()),x(n)}):void dn(E,r,e.descending,f+u,T)}var pn=!1,vn=[];function gn(){!pn&&vn.length&&(pn=!0,vn.shift()())}function yn(e,t,n,r){if((e=m(e)).continuous){var o=n+":"+_e();return fn.addListener(n,o,t,e),fn.notify(n),{cancel:function(){fn.removeListener(n,o)}}}var i=e.doc_ids&&new v(e.doc_ids);e.since=e.since||0;var a,s=e.since,c="limit"in e?e.limit:-1;0===c&&(c=1),a="return_docs"in e?e.return_docs:!("returnDocs"in e)||e.returnDocs;var u,f,l,d,h=[],p=0,y=oe(e),_=new g;function b(e,t,n,r){if(n.seq!==t)return r();if(n.winningRev===e._rev)return r(n,e);var o=e._id+"::"+n.winningRev;d.get(o).onsuccess=function(e){r(n,rn(e.target.result))}}function w(){e.complete(null,{results:h,last_seq:s})}var E=[Ht,zt];e.attachments&&E.push(Kt);var k=un(r,E,"readonly");if(k.error)return e.complete(k.error);(u=k.txn).onabort=en(e.complete),u.oncomplete=function(){!e.continuous&&e.attachments?sn(h).then(w):w()},f=u.objectStore(zt),l=u.objectStore(Ht),d=f.index("_doc_id_rev"),dn(f,e.since&&!e.descending?IDBKeyRange.lowerBound(e.since,!0):null,e.descending,c,function(t,n,r){if(r&&t.length){var o=new Array(t.length),f=new Array(t.length),d=0;n.forEach(function(e,n){!function(e,t,n){if(i&&!i.has(e._id))return n();var r=_.get(e._id);if(r)return b(e,t,r,n);l.get(e._id).onsuccess=function(o){r=nn(o.target.result),_.set(e._id,r),b(e,t,r,n)}}(rn(e),t[n],function(e,i){f[n]=e,o[n]=i,++d===t.length&&function(){for(var e=0,t=o.length;e<t&&p!==c;e++){var n=o[e];n&&v(f[e],n)}p!==c&&r.continue()}()})})}function v(t,n){var r=e.processChange(n,t,e);s=r.seq=t.seq;var o=y(r);if("object"==typeof o)return e.complete(o);o&&(p++,a&&h.push(r),e.attachments&&e.include_docs?an(n,e,u,function(){sn([r],e.binary).then(function(){e.onChange(r)})}):e.onChange(r))}})}var _n,mn=new g,bn=new g;function wn(e,t){var n,r,o,i=this;n=function(t){!function(e,t,n){var r=t.name,o=null;function i(e,t){var n=e.objectStore(Ht);n.createIndex("deletedOrLocal","deletedOrLocal",{unique:!1}),n.openCursor().onsuccess=function(e){var r=e.target.result;if(r){var o=r.value,i=Ie(o);o.deletedOrLocal=i?"1":"0",n.put(o),r.continue()}else t()}}function s(e,t){var n=e.objectStore(Vt),r=e.objectStore(Ht),o=e.objectStore(zt),i=r.openCursor();i.onsuccess=function(e){var i=e.target.result;if(i){var a=i.value,s=a.id,c=De(s),u=me(a);if(c){var f=s+"::"+u,l=s+"::",d=s+"::~",h=o.index("_doc_id_rev"),p=IDBKeyRange.bound(l,d,!1,!1),v=h.openCursor(p);v.onsuccess=function(e){if(v=e.target.result){var t=v.value;t._doc_id_rev===f&&n.put(t),o.delete(v.primaryKey),v.continue()}else r.delete(i.primaryKey),i.continue()}}else i.continue()}else t&&t()}}function c(e,t){var n=e.objectStore(zt),r=e.objectStore(Kt),o=e.objectStore(Xt),i=r.count();i.onsuccess=function(e){var r=e.target.result;if(!r)return t();n.openCursor().onsuccess=function(e){var n=e.target.result;if(!n)return t();for(var r=n.value,i=n.primaryKey,a=Object.keys(r._attachments||{}),s={},c=0;c<a.length;c++){var u=r._attachments[a[c]];s[u.digest]=!0}var f=Object.keys(s);for(c=0;c<f.length;c++){var l=f[c];o.put({seq:i,digestSeq:l+"::"+i})}n.continue()}}}function u(e){var t=e.objectStore(zt),n=e.objectStore(Ht),r=n.openCursor();r.onsuccess=function(e){var r=e.target.result;if(r){var o,i,a,s=function(e){if(!e.data)return e.deleted="1"===e.deletedOrLocal,e;return nn(e)}(r.value);if(s.winningRev=s.winningRev||me(s),s.seq)return c();o=s.id+"::",i=s.id+"::￿",a=0,t.index("_doc_id_rev").openCursor(IDBKeyRange.bound(o,i)).onsuccess=function(e){var t=e.target.result;if(!t)return s.seq=a,c();var n=t.primaryKey;n>a&&(a=n),t.continue()}}function c(){var e=tn(s,s.winningRev,s.deleted),t=n.put(e);t.onsuccess=function(){r.continue()}}}}e._meta=null,e._remote=!1,e.type=function(){return"idb"},e._id=w(function(t){t(null,e._meta.instanceId)}),e._bulkDocs=function(n,r,i){ln(t,n,r,e,o,i)},e._get=function(e,t,n){var r,i,a,s=t.ctx;if(!s){var c=un(o,[Ht,zt,Kt],"readonly");if(c.error)return n(c.error);s=c.txn}function u(){n(a,{doc:r,metadata:i,ctx:s})}s.objectStore(Ht).get(e).onsuccess=function(e){if(!(i=nn(e.target.result)))return a=ne(P,"missing"),u();var n;if(t.rev)n=t.latest?Re(t.rev,i):t.rev;else{n=i.winningRev;var o=Ie(i);if(o)return a=ne(P,"deleted"),u()}var c=s.objectStore(zt),f=i.id+"::"+n;c.index("_doc_id_rev").get(f).onsuccess=function(e){if((r=e.target.result)&&(r=rn(r)),!r)return a=ne(P,"missing"),u();u()}}},e._getAttachment=function(e,t,n,r,i){var a;if(r.ctx)a=r.ctx;else{var s=un(o,[Ht,zt,Kt],"readonly");if(s.error)return i(s.error);a=s.txn}var c=n.digest,u=n.content_type;a.objectStore(Kt).get(c).onsuccess=function(e){var t=e.target.result.body;on(t,u,r.binary,function(e){i(null,e)})}},e._info=function(t){var n,r,i=un(o,[Gt,zt],"readonly");if(i.error)return t(i.error);var a=i.txn;a.objectStore(Gt).get(Gt).onsuccess=function(e){r=e.target.result.docCount},a.objectStore(zt).openCursor(null,"prev").onsuccess=function(e){var t=e.target.result;n=t?t.key:0},a.oncomplete=function(){t(null,{doc_count:r,update_seq:n,idb_attachment_format:e._meta.blobSupport?"binary":"base64"})}},e._allDocs=function(e,t){hn(e,o,t)},e._changes=function(t){return yn(t,e,r,o)},e._close=function(e){o.close(),mn.delete(r),e()},e._getRevisionTree=function(e,t){var n=un(o,[Ht],"readonly");if(n.error)return t(n.error);var r=n.txn,i=r.objectStore(Ht).get(e);i.onsuccess=function(e){var n=nn(e.target.result);n?t(null,n.rev_tree):t(ne(P))}},e._doCompaction=function(e,t,n){var r=[Ht,zt,Kt,Xt],i=un(o,r,"readwrite");if(i.error)return n(i.error);var a=i.txn,s=a.objectStore(Ht);s.get(e).onsuccess=function(n){var r=nn(n.target.result);be(r.rev_tree,function(e,n,r,o,i){var a=n+"-"+r;-1!==t.indexOf(a)&&(i.status="missing")}),cn(t,e,a);var o=r.winningRev,i=r.deleted;a.objectStore(Ht).put(tn(r,o,i))},a.onabort=en(n),a.oncomplete=function(){n()}},e._getLocal=function(e,t){var n=un(o,[Vt],"readonly");if(n.error)return t(n.error);var r=n.txn,i=r.objectStore(Vt).get(e);i.onerror=en(t),i.onsuccess=function(e){var n=e.target.result;n?(delete n._doc_id_rev,t(null,n)):t(ne(P))}},e._putLocal=function(e,t,n){"function"==typeof t&&(n=t,t={}),delete e._revisions;var r=e._rev,i=e._id;e._rev=r?"0-"+(parseInt(r.split("-")[1],10)+1):"0-1";var a,s=t.ctx;if(!s){var c=un(o,[Vt],"readwrite");if(c.error)return n(c.error);(s=c.txn).onerror=en(n),s.oncomplete=function(){a&&n(null,a)}}var u,f=s.objectStore(Vt);r?(u=f.get(i)).onsuccess=function(o){var i=o.target.result;if(i&&i._rev===r){var s=f.put(e);s.onsuccess=function(){a={ok:!0,id:e._id,rev:e._rev},t.ctx&&n(null,a)}}else n(ne(U))}:((u=f.add(e)).onerror=function(e){n(ne(U)),e.preventDefault(),e.stopPropagation()},u.onsuccess=function(){a={ok:!0,id:e._id,rev:e._rev},t.ctx&&n(null,a)})},e._removeLocal=function(e,t,n){"function"==typeof t&&(n=t,t={});var r,i=t.ctx;if(!i){var a=un(o,[Vt],"readwrite");if(a.error)return n(a.error);(i=a.txn).oncomplete=function(){r&&n(null,r)}}var s=e._id,c=i.objectStore(Vt),u=c.get(s);u.onerror=en(n),u.onsuccess=function(o){var i=o.target.result;i&&i._rev===e._rev?(c.delete(s),r={ok:!0,id:s,rev:"0-0"},t.ctx&&n(null,r)):n(ne(P))}},e._destroy=function(e,t){fn.removeAllListeners(r);var n=bn.get(r);n&&n.result&&(n.result.close(),mn.delete(r));var o=indexedDB.deleteDatabase(r);o.onsuccess=function(){bn.delete(r),I()&&r in localStorage&&delete localStorage[r],t(null,{ok:!0})},o.onerror=en(t)};var f,l=mn.get(r);if(l)return o=l.idb,e._meta=l.global,a(function(){n(null,e)});f=t.storage?function(e,t){try{return indexedDB.open(e,{version:Wt,storage:t})}catch(t){return indexedDB.open(e,Wt)}}(r,t.storage):indexedDB.open(r,Wt);bn.set(r,f),f.onupgradeneeded=function(e){var t=e.target.result;if(e.oldVersion<1)return function(e){var t=e.createObjectStore(Ht,{keyPath:"id"});e.createObjectStore(zt,{autoIncrement:!0}).createIndex("_doc_id_rev","_doc_id_rev",{unique:!0}),e.createObjectStore(Kt,{keyPath:"digest"}),e.createObjectStore(Gt,{keyPath:"id",autoIncrement:!1}),e.createObjectStore(Qt),t.createIndex("deletedOrLocal","deletedOrLocal",{unique:!1}),e.createObjectStore(Vt,{keyPath:"_id"});var n=e.createObjectStore(Xt,{autoIncrement:!0});n.createIndex("seq","seq"),n.createIndex("digestSeq","digestSeq",{unique:!0})}(t);var n,r=e.currentTarget.transaction;e.oldVersion<3&&t.createObjectStore(Vt,{keyPath:"_id"}).createIndex("_doc_id_rev","_doc_id_rev",{unique:!0}),e.oldVersion<4&&((n=t.createObjectStore(Xt,{autoIncrement:!0})).createIndex("seq","seq"),n.createIndex("digestSeq","digestSeq",{unique:!0}));var o=[i,s,c,u],a=e.oldVersion;!function e(){var t=o[a-1];a++;t&&t(r,e)}()},f.onsuccess=function(t){(o=t.target.result).onversionchange=function(){o.close(),mn.delete(r)},o.onabort=function(e){R("error","Database has a global failure",e.target.error),o.close(),mn.delete(r)};var i,a,s,c,u,f,l=o.transaction([Gt,Qt,Ht],"readwrite"),d=!1;function p(){void 0!==s&&d&&(e._meta={name:r,instanceId:c,blobSupport:s},mn.set(r,{idb:o,global:e._meta}),n(null,e))}function v(){if(void 0!==a&&void 0!==i){var e=r+"_id";e in i?c=i[e]:i[e]=c=_e(),i.docCount=a,l.objectStore(Gt).put(i)}}l.objectStore(Gt).get(Gt).onsuccess=function(e){i=e.target.result||{id:Gt},v()},u=function(e){a=e,v()},l.objectStore(Ht).index("deletedOrLocal").count(IDBKeyRange.only("0")).onsuccess=function(e){u(e.target.result)},_n||(f=l,_n=new h(function(e){var t=Ct([""]);f.objectStore(Qt).put(t,"key").onsuccess=function(){var t=navigator.userAgent.match(/Chrome\/(\d+)/),n=navigator.userAgent.match(/Edge\//);e(n||!t||parseInt(t[1],10)>=43)},f.onabort=function(t){t.preventDefault(),t.stopPropagation(),e(!1)}}).catch(function(){return!1})),_n.then(function(e){s=e,p()}),l.oncomplete=function(){d=!0,p()},l.onabort=en(n)},f.onerror=function(){var e="Failed to open indexedDB, are you in private browsing mode?";R("error",e),n(ne(Y,e))}}(i,e,t)},r=t,o=i.constructor,vn.push(function(){n(function(e,t){!function(e,t,n,r){try{e(t,n)}catch(t){r.emit("error",t)}}(r,e,t,o),pn=!1,a(function(){gn()})})}),gn()}function En(e){return e<65?e-48:e-55}function kn(e,t){return"UTF-8"===t?(n=function(e,t,n){for(var r="";t<n;)r+=String.fromCharCode(En(e.charCodeAt(t++))<<4|En(e.charCodeAt(t++)));return r}(e,0,e.length),decodeURIComponent(escape(n))):function(e,t,n){for(var r="";t<n;)r+=String.fromCharCode(En(e.charCodeAt(t+2))<<12|En(e.charCodeAt(t+3))<<8|En(e.charCodeAt(t))<<4|En(e.charCodeAt(t+1))),t+=4;return r}(e,0,e.length);var n}function Sn(e){return"'"+e+"'"}wn.valid=function(){var e="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");try{return(!e||t)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(e){return!1}};var qn=7,Cn=Sn("document-store"),An=Sn("by-sequence"),xn=Sn("attach-store"),Tn=Sn("local-store"),On=Sn("metadata-store"),jn=Sn("attach-seq-store");function Ln(e){return delete e._id,delete e._rev,JSON.stringify(e)}function In(e,t,n){return(e=JSON.parse(e))._id=t,e._rev=n,e}function Dn(e){for(var t="(";e--;)t+="?",e&&(t+=",");return t+")"}function Rn(e,t,n,r,o){return"SELECT "+e+" FROM "+("string"==typeof t?t:t.join(" JOIN "))+(n?" ON "+n:"")+(r?" WHERE "+("string"==typeof r?r:r.join(" AND ")):"")+(o?" ORDER BY "+o:"")}function Fn(e,t,n){if(e.length){var r=0,o=[];e.forEach(function(e){var r="SELECT seq FROM "+An+" WHERE doc_id=? AND rev=?";n.executeSql(r,[t,e],function(e,t){if(!t.rows.length)return i();var n=t.rows.item(0).seq;o.push(n),e.executeSql("DELETE FROM "+An+" WHERE seq=?",[n],i)})})}function i(){++r===e.length&&function(){if(!o.length)return;var e="SELECT DISTINCT digest AS digest FROM "+jn+" WHERE seq IN "+Dn(o.length);n.executeSql(e,o,function(e,t){for(var n=[],r=0;r<t.rows.length;r++)n.push(t.rows.item(r).digest);if(n.length){var i="DELETE FROM "+jn+" WHERE seq IN ("+o.map(function(){return"?"}).join(",")+")";e.executeSql(i,o,function(e){var t="SELECT digest FROM "+jn+" WHERE digest IN ("+n.map(function(){return"?"}).join(",")+")";e.executeSql(t,n,function(e,t){for(var r=new v,o=0;o<t.rows.length;o++)r.add(t.rows.item(o).digest);n.forEach(function(t){r.has(t)||(e.executeSql("DELETE FROM "+jn+" WHERE digest=?",[t]),e.executeSql("DELETE FROM "+xn+" WHERE digest=?",[t]))})})})}})}()}}function Nn(e){return function(t){R("error","WebSQL threw an error",t);var n=t&&t.constructor.toString().match(/function ([^(]+)/),r=(n&&n[1]||t.type,t.target||t.message);e(ne(Z,r))}}function Bn(e,t,n,r,o,i,a){var s,c=n.new_edits,u=t.docs.map(function(e){return e._id&&De(e._id)?e:kt(e,c)}),f=u.filter(function(e){return e.error});if(f.length)return a(f[0]);var l,d=new Array(u.length),h=new g;function p(){if(l)return a(l);i.notify(r._name),a(null,d)}function v(e){var t=[];if(u.forEach(function(e){e.data&&e.data._attachments&&Object.keys(e.data._attachments).forEach(function(n){var r=e.data._attachments[n];r.stub&&t.push(r.digest)})}),!t.length)return e();var n,r=0;t.forEach(function(o){var i,a,c;i=o,a=function(o){o&&!n&&(n=o),++r===t.length&&e(n)},c="SELECT count(*) as cnt FROM "+xn+" WHERE digest=?",s.executeSql(c,[i],function(e,t){if(0===t.rows.item(0).cnt){var n=ne(te,"unknown stub attachment with digest "+i);a(n)}else a()})})}function y(e,t,n,o,i,a,c,u){function f(){var t=e.data,n=o?1:0,r=t._id,i=t._rev,a=Ln(t),c="INSERT INTO "+An+" (doc_id, rev, json, deleted) VALUES (?, ?, ?, ?);",u=[r,i,a,n];function f(e,n){var r,o,i,a=0,c=Object.keys(t._attachments||{});if(!c.length)return n();function u(){return++a===c.length&&n(),!1}for(var f=0;f<c.length;f++)r=c[f],void 0,void 0,o="INSERT INTO "+jn+" (digest, seq) VALUES (?,?)",i=[t._attachments[r].digest,e],s.executeSql(o,i,u,u)}s.executeSql(c,u,function(e,t){var n=t.insertId;f(n,function(){_(e,n)})},function(){var e=Rn("seq",An,null,"doc_id=? AND rev=?");return s.executeSql(e,[r,i],function(e,t){var o=t.rows.item(0).seq,s="UPDATE "+An+" SET json=?, deleted=? WHERE doc_id=? AND rev=?;",c=[a,n,r,i];e.executeSql(s,c,function(e){f(o,function(){_(e,o)})})}),!1})}function l(e){p||(e?u(p=e):v===g.length&&f())}var p=null,v=0;e.data._id=e.metadata.id,e.data._rev=e.metadata.rev;var g=Object.keys(e.data._attachments||{});function y(e){v++,l(e)}function _(n,o){var a=e.metadata.id,s=e.stemmedRevs||[];i&&r.auto_compaction&&(s=Se(e.metadata).concat(s)),s.length&&Fn(s,a,n),e.metadata.seq=o;var f=e.metadata.rev;delete e.metadata.rev;var l=i?"UPDATE "+Cn+" SET json=?, max_seq=?, winningseq=(SELECT seq FROM "+An+" WHERE doc_id="+Cn+".id AND rev=?) WHERE id=?":"INSERT INTO "+Cn+" (id, winningseq, max_seq, json) VALUES (?,?,?,?);",p=Zt(e.metadata),v=i?[p,o,t,a]:[a,o,o,p];n.executeSql(l,v,function(){d[c]={ok:!0,id:e.metadata.id,rev:f},h.set(a,e.metadata),u()})}o&&(e.data._deleted=!0),g.forEach(function(n){var r,o,i,a,c=e.data._attachments[n];if(c.stub)v++,l();else{var u=c.data;delete c.data,c.revpos=parseInt(t,10);var f=c.digest;r=f,o=u,i=y,a="SELECT digest FROM "+xn+" WHERE digest=?",s.executeSql(a,[r],function(e,t){if(t.rows.length)return i();var n;a="INSERT INTO "+xn+" (digest, body, escaped) VALUES (?,?,1)",e.executeSql(a,[r,(n=o,n.replace(/\u0002/g,"").replace(/\u0001/g,"").replace(/\u0000/g,""))],function(){i()},function(){return i(),!1})})}}),g.length||f()}function _(){Jt(e.revs_limit,u,r,h,s,d,y,n)}Pt(u,"binary",function(e){if(e)return a(e);o.transaction(function(e){s=e,v(function(e){e?l=e:function(e){if(!u.length)return e();var t=0;function n(){++t===u.length&&e()}u.forEach(function(e){if(e._id&&De(e._id))return n();var t=e.metadata.id;s.executeSql("SELECT json FROM "+Cn+" WHERE id = ?",[t],function(e,r){if(r.rows.length){var o=Yt(r.rows.item(0).json);h.set(t,o)}n()})})}(_)})},Nn(a),p)})}var $n=new g;var Mn=new D;function Pn(e,t,n,r,o){var i=Object.keys(e._attachments||{});if(!i.length)return o&&o();var a=0;function s(){++a===i.length&&o&&o()}i.forEach(function(o){var i,a,c,u;t.attachments&&t.include_docs?(a=o,c=(i=e)._attachments[a],u={binary:t.binary,ctx:r},n._getAttachment(i._id,a,c,u,function(e,t){i._attachments[a]=B(C(c,["digest","content_type"]),{data:t}),s()})):(e._attachments[o].stub=!0,s())})}var Un=1,Jn="CREATE INDEX IF NOT EXISTS 'by-seq-deleted-idx' ON "+An+" (seq, deleted)",Wn="CREATE UNIQUE INDEX IF NOT EXISTS 'by-seq-doc-id-rev' ON "+An+" (doc_id, rev)",Hn="CREATE INDEX IF NOT EXISTS 'doc-winningseq-idx' ON "+Cn+" (winningseq)",zn="CREATE INDEX IF NOT EXISTS 'attach-seq-seq-idx' ON "+jn+" (seq)",Kn="CREATE UNIQUE INDEX IF NOT EXISTS 'attach-seq-digest-idx' ON "+jn+" (digest, seq)",Xn=An+".seq = "+Cn+".winningseq",Gn=An+".seq AS seq, "+An+".deleted AS deleted, "+An+".json AS data, "+An+".rev AS rev, "+Cn+".json AS metadata";function Vn(e,t){var n,r,o=this,i=null,a="size"in(n=e)?1e6*n.size:"undefined"!=typeof navigator&&/Android/.test(navigator.userAgent)?5e6:1,s=[];o._name=e.name;var c,u,f=B({},e,{version:Un,description:e.name,size:a}),l=(c=f,(u=$n.get(c.name))||(u=function(e){try{return{db:(t=e,t.websql(t.name,t.version,t.description,t.size))}}catch(e){return{error:e}}var t}(c),$n.set(c.name,u)),u);if(l.error)return Nn(t)(l.error);var d=l.db;function h(){I()&&(window.localStorage["_pouch__websqldb_"+o._name]=!0),t(null,o)}function p(e,t){e.executeSql(Hn),e.executeSql("ALTER TABLE "+An+" ADD COLUMN deleted TINYINT(1) DEFAULT 0",[],function(){e.executeSql(Jn),e.executeSql("ALTER TABLE "+Cn+" ADD COLUMN local TINYINT(1) DEFAULT 0",[],function(){e.executeSql("CREATE INDEX IF NOT EXISTS 'doc-store-local-idx' ON "+Cn+" (local, id)");var n="SELECT "+Cn+".winningseq AS seq, "+Cn+".json AS metadata FROM "+An+" JOIN "+Cn+" ON "+An+".seq = "+Cn+".winningseq";e.executeSql(n,[],function(e,n){for(var r=[],o=[],i=0;i<n.rows.length;i++){var a=n.rows.item(i),s=a.seq,c=JSON.parse(a.metadata);Ie(c)&&r.push(s),De(c.id)&&o.push(c.id)}e.executeSql("UPDATE "+Cn+"SET local = 1 WHERE id IN "+Dn(o.length),o,function(){e.executeSql("UPDATE "+An+" SET deleted = 1 WHERE seq IN "+Dn(r.length),r,t)})})})})}function v(e,t){var n="CREATE TABLE IF NOT EXISTS "+Tn+" (id UNIQUE, rev, json)";e.executeSql(n,[],function(){var n="SELECT "+Cn+".id AS id, "+An+".json AS data FROM "+An+" JOIN "+Cn+" ON "+An+".seq = "+Cn+".winningseq WHERE local = 1";e.executeSql(n,[],function(e,n){for(var r=[],o=0;o<n.rows.length;o++)r.push(n.rows.item(o));!function n(){if(!r.length)return t(e);var o=r.shift(),i=JSON.parse(o.data)._rev;e.executeSql("INSERT INTO "+Tn+" (id, rev, json) VALUES (?,?,?)",[o.id,i,o.data],function(e){e.executeSql("DELETE FROM "+Cn+" WHERE id=?",[o.id],function(e){e.executeSql("DELETE FROM "+An+" WHERE seq=?",[o.seq],function(){n()})})})}()})})}function g(e,t){var n="ALTER TABLE "+An+" ADD COLUMN doc_id";e.executeSql(n,[],function(n){var o="ALTER TABLE "+An+" ADD COLUMN rev";n.executeSql(o,[],function(n){n.executeSql(Wn,[],function(n){var o="SELECT hex(doc_id_rev) as hex FROM "+An;n.executeSql(o,[],function(n,o){for(var i,a=[],s=0;s<o.rows.length;s++)a.push(o.rows.item(s));i=a,function n(){if(!i.length)return t(e);var o=kn(i.shift().hex,r),a=o.lastIndexOf("::"),s=o.substring(0,a),c=o.substring(a+2),u="UPDATE "+An+" SET doc_id=?, rev=? WHERE doc_id_rev=?";e.executeSql(u,[s,c,o],function(){n()})}()})})})})}function y(e,t){function n(e){var n="SELECT COUNT(*) AS cnt FROM "+xn;e.executeSql(n,[],function(e,n){if(!n.rows.item(0).cnt)return t(e);var r=0,o=10;!function n(){var i=Rn(Gn+", "+Cn+".id AS id",[Cn,An],Xn,null,Cn+".id ");i+=" LIMIT "+o+" OFFSET "+r,r+=o,e.executeSql(i,[],function(e,r){if(!r.rows.length)return t(e);for(var o,i,a,s={},c=0;c<r.rows.length;c++)for(var u=r.rows.item(c),f=In(u.data,u.id,u.rev),l=Object.keys(f._attachments||{}),d=0;d<l.length;d++){var h=f._attachments[l[d]];o=h.digest,i=u.seq,a=void 0,-1===(a=s[o]=s[o]||[]).indexOf(i)&&a.push(i)}var p=[];if(Object.keys(s).forEach(function(e){s[e].forEach(function(t){p.push([e,t])})}),!p.length)return n();var v=0;p.forEach(function(t){var r="INSERT INTO "+jn+" (digest, seq) VALUES (?,?)";e.executeSql(r,t,function(){++v===p.length&&n()})})})}()})}var r="CREATE TABLE IF NOT EXISTS "+jn+" (digest, seq INTEGER)";e.executeSql(r,[],function(e){e.executeSql(Kn,[],function(e){e.executeSql(zn,[],n)})})}function _(e,t){var n="ALTER TABLE "+xn+" ADD COLUMN escaped TINYINT(1) DEFAULT 0";e.executeSql(n,[],t)}function b(e,t){var n="ALTER TABLE "+Cn+" ADD COLUMN max_seq INTEGER";e.executeSql(n,[],function(e){var n="UPDATE "+Cn+" SET max_seq=(SELECT MAX(seq) FROM "+An+" WHERE doc_id=id)";e.executeSql(n,[],function(e){var n="CREATE UNIQUE INDEX IF NOT EXISTS 'doc-max-seq-idx' ON "+Cn+" (max_seq)";e.executeSql(n,[],t)})})}function E(){for(;s.length>0;){s.pop()(null,i)}}function k(e,t){if(0===t){var n="CREATE TABLE IF NOT EXISTS "+On+" (dbid, db_version INTEGER)",r="CREATE TABLE IF NOT EXISTS "+xn+" (digest UNIQUE, escaped TINYINT(1), body BLOB)",o="CREATE TABLE IF NOT EXISTS "+jn+" (digest, seq INTEGER)",a="CREATE TABLE IF NOT EXISTS "+Cn+" (id unique, json, winningseq, max_seq INTEGER UNIQUE)",s="CREATE TABLE IF NOT EXISTS "+An+" (seq INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, json, deleted TINYINT(1), doc_id, rev)",c="CREATE TABLE IF NOT EXISTS "+Tn+" (id UNIQUE, rev, json)";e.executeSql(r),e.executeSql(c),e.executeSql(o,[],function(){e.executeSql(zn),e.executeSql(Kn)}),e.executeSql(a,[],function(){e.executeSql(Hn),e.executeSql(s,[],function(){e.executeSql(Jn),e.executeSql(Wn),e.executeSql(n,[],function(){var t="INSERT INTO "+On+" (db_version, dbid) VALUES (?,?)";i=_e();var n=[qn,i];e.executeSql(t,n,function(){E()})})})})}else{var u=[p,v,g,y,_,b,function(){t<qn&&e.executeSql("UPDATE "+On+" SET db_version = "+qn);var n="SELECT dbid FROM "+On;e.executeSql(n,[],function(e,t){i=t.rows.item(0).dbid,E()})}],f=t,l=function(e){u[f-1](e,l),f++};l(e)}}function S(e,t){var n="SELECT MAX(seq) AS seq FROM "+An;e.executeSql(n,[],function(e,n){var r=n.rows.item(0).seq||0;t(r)})}function q(e,t){var n=Rn("COUNT("+Cn+".id) AS 'num'",[Cn,An],Xn,An+".deleted=0");e.executeSql(n,[],function(e,n){t(n.rows.item(0).num)})}"function"!=typeof d.readTransaction&&(d.readTransaction=d.transaction),d.transaction(function(e){var t;t=function(){var t;t="SELECT sql FROM sqlite_master WHERE tbl_name = "+On,e.executeSql(t,[],function(e,t){t.rows.length?/db_version/.test(t.rows.item(0).sql)?e.executeSql("SELECT db_version FROM "+On,[],function(e,t){var n=t.rows.item(0).db_version;k(e,n)}):e.executeSql("ALTER TABLE "+On+" ADD COLUMN db_version INTEGER",[],function(){k(e,1)}):k(e,0)})},e.executeSql('SELECT HEX("a") AS hex',[],function(e,n){var o=n.rows.item(0).hex;r=2===o.length?"UTF-8":"UTF-16",t()})},Nn(t),h),o._remote=!1,o.type=function(){return"websql"},o._id=w(function(e){e(null,i)}),o._info=function(e){var t,n;d.readTransaction(function(e){S(e,function(e){t=e}),q(e,function(e){n=e})},Nn(e),function(){e(null,{doc_count:n,update_seq:t,websql_encoding:r})})},o._bulkDocs=function(t,n,r){Bn(e,t,n,o,d,Mn,r)},o._get=function(e,t,n){var r,i,a,s,c,u,f,l,h,p,v,g=t.ctx;if(!g)return d.readTransaction(function(r){o._get(e,B({ctx:r},t),n)});function y(e){n(e,{doc:r,metadata:i,ctx:g})}if(t.rev){if(t.latest)return c=g,u=e,f=t.rev,l=function(r){t.latest=!1,t.rev=r,o._get(e,t,n)},h=y,p=Rn(Gn,[Cn,An],Xn,Cn+".id=?"),v=[u],void c.executeSql(p,v,function(e,t){if(!t.rows.length){var n=ne(P,"missing");return h(n)}var r=Yt(t.rows.item(0).metadata);l(Re(f,r))});a=Rn(Gn,[Cn,An],Cn+".id="+An+".doc_id",[An+".doc_id=?",An+".rev=?"]),s=[e,t.rev]}else a=Rn(Gn,[Cn,An],Xn,Cn+".id=?"),s=[e];g.executeSql(a,s,function(e,n){if(!n.rows.length)return y(ne(P,"missing"));var o=n.rows.item(0);if(i=Yt(o.metadata),o.deleted&&!t.rev)return y(ne(P,"deleted"));r=In(o.data,i.id,o.rev),y()})},o._allDocs=function(e,t){var n,r,i=[],a="startkey"in e&&e.startkey,s="endkey"in e&&e.endkey,c="key"in e&&e.key,u="keys"in e&&e.keys,f="descending"in e&&e.descending,l="limit"in e?e.limit:-1,h="skip"in e?e.skip:0,p=!1!==e.inclusive_end,v=[],g=[];if(u){var y=[],_="";u.forEach(function(e){-1===y.indexOf(e)&&(y.push(e),_+="?,")}),_=_.substring(0,_.length-1),g.push(Cn+".id IN ("+_+")"),v=v.concat(y)}else if(!1!==c)g.push(Cn+".id = ?"),v.push(c);else if(!1!==a||!1!==s){if(!1!==a&&(g.push(Cn+".id "+(f?"<=":">=")+" ?"),v.push(a)),!1!==s){var m=f?">":"<";p&&(m+="="),g.push(Cn+".id "+m+" ?"),v.push(s)}!1!==c&&(g.push(Cn+".id = ?"),v.push(c))}u||g.push(An+".deleted = 0"),d.readTransaction(function(t){if(q(t,function(e){n=e}),e.update_seq&&S(t,function(e){r=e}),0!==l){var a=Rn(Gn,[Cn,An],Xn,g,Cn+".id "+(f?"DESC":"ASC"));a+=" LIMIT "+l+" OFFSET "+h,t.executeSql(a,v,function(t,n){for(var r=0,a=n.rows.length;r<a;r++){var s=n.rows.item(r),c=Yt(s.metadata),f=c.id,l=In(s.data,f,s.rev),d=l._rev,h={id:f,key:f,value:{rev:d}};if(e.include_docs){if(h.doc=l,h.doc._rev=d,e.conflicts){var p=ke(c);p.length&&(h.doc._conflicts=p)}Pn(h.doc,e,o,t)}if(s.deleted){if(!u)continue;h.value.deleted=!0,h.doc=null}if(u){var v=u.indexOf(f,v);do{i[v]=h,v=u.indexOf(f,v+1)}while(v>-1&&v<u.length)}else i.push(h)}u&&u.forEach(function(e,t){i[t]||(i[t]={key:e,error:"not_found"})})})}},Nn(t),function(){var o={total_rows:n,offset:e.skip,rows:i};e.update_seq&&(o.update_seq=r),t(null,o)})},o._changes=function(e){if((e=m(e)).continuous){var t=o._name+":"+_e();return Mn.addListener(o._name,t,o,e),Mn.notify(o._name),{cancel:function(){Mn.removeListener(o._name,t)}}}var n=e.descending;e.since=e.since&&!n?e.since:0;var r,i="limit"in e?e.limit:-1;0===i&&(i=1),r="return_docs"in e?e.return_docs:!("returnDocs"in e)||e.returnDocs;var a=[],s=0;!function(){var t=Cn+".json AS metadata, "+Cn+".max_seq AS maxSeq, "+An+".json AS winningDoc, "+An+".rev AS winningRev ",c=Cn+" JOIN "+An,u=Cn+".id="+An+".doc_id AND "+Cn+".winningseq="+An+".seq",f=["maxSeq > ?"],l=[e.since];e.doc_ids&&(f.push(Cn+".id IN "+Dn(e.doc_ids.length)),l=l.concat(e.doc_ids));var h=Rn(t,c,u,f,"maxSeq "+(n?"DESC":"ASC")),p=oe(e);e.view||e.filter||(h+=" LIMIT "+i);var v=e.since||0;d.readTransaction(function(t){t.executeSql(h,l,function(t,n){function c(t){return function(){e.onChange(t)}}for(var u=0,f=n.rows.length;u<f;u++){var l=n.rows.item(u),d=Yt(l.metadata);v=l.maxSeq;var h=In(l.winningDoc,d.id,l.winningRev),g=e.processChange(h,d,e);g.seq=l.maxSeq;var y=p(g);if("object"==typeof y)return e.complete(y);if(y&&(s++,r&&a.push(g),e.attachments&&e.include_docs?Pn(h,e,o,t,c(g)):c(g)()),s===i)break}})},Nn(e.complete),function(){e.continuous||e.complete(null,{results:a,last_seq:v})})}()},o._close=function(e){e()},o._getAttachment=function(e,t,n,o,i){var a,s=o.ctx,c=n.digest,u=n.content_type,f="SELECT escaped, CASE WHEN escaped = 1 THEN body ELSE HEX(body) END AS body FROM "+xn+" WHERE digest=?";s.executeSql(f,[c],function(e,t){var n=t.rows.item(0),s=n.escaped?n.body.replace(/\u0001\u0001/g,"\0").replace(/\u0001\u0002/g,"").replace(/\u0002\u0002/g,""):kn(n.body,r);a=o.binary?At(s,u):qt(s),i(null,a)})},o._getRevisionTree=function(e,t){d.readTransaction(function(n){var r="SELECT json AS metadata FROM "+Cn+" WHERE id = ?";n.executeSql(r,[e],function(e,n){if(n.rows.length){var r=Yt(n.rows.item(0).metadata);t(null,r.rev_tree)}else t(ne(P))})})},o._doCompaction=function(e,t,n){if(!t.length)return n();d.transaction(function(n){var r="SELECT json AS metadata FROM "+Cn+" WHERE id = ?";n.executeSql(r,[e],function(n,r){var o=Yt(r.rows.item(0).metadata);be(o.rev_tree,function(e,n,r,o,i){var a=n+"-"+r;-1!==t.indexOf(a)&&(i.status="missing")});var i="UPDATE "+Cn+" SET json = ? WHERE id = ?";n.executeSql(i,[Zt(o),e])}),Fn(t,e,n)},Nn(n),function(){n()})},o._getLocal=function(e,t){d.readTransaction(function(n){var r="SELECT json, rev FROM "+Tn+" WHERE id=?";n.executeSql(r,[e],function(n,r){if(r.rows.length){var o=r.rows.item(0),i=In(o.json,e,o.rev);t(null,i)}else t(ne(P))})})},o._putLocal=function(e,t,n){"function"==typeof t&&(n=t,t={}),delete e._revisions;var r,o=e._rev,i=e._id;r=e._rev=o?"0-"+(parseInt(o.split("-")[1],10)+1):"0-1";var a,s=Ln(e);function c(e){var c,u;o?(c="UPDATE "+Tn+" SET rev=?, json=? WHERE id=? AND rev=?",u=[r,s,i,o]):(c="INSERT INTO "+Tn+" (id, rev, json) VALUES (?,?,?)",u=[i,r,s]),e.executeSql(c,u,function(e,o){o.rowsAffected?(a={ok:!0,id:i,rev:r},t.ctx&&n(null,a)):n(ne(U))},function(){return n(ne(U)),!1})}t.ctx?c(t.ctx):d.transaction(c,Nn(n),function(){a&&n(null,a)})},o._removeLocal=function(e,t,n){var r;function o(o){var i="DELETE FROM "+Tn+" WHERE id=? AND rev=?",a=[e._id,e._rev];o.executeSql(i,a,function(o,i){if(!i.rowsAffected)return n(ne(P));r={ok:!0,id:e._id,rev:"0-0"},t.ctx&&n(null,r)})}"function"==typeof t&&(n=t,t={}),t.ctx?o(t.ctx):d.transaction(o,Nn(n),function(){r&&n(null,r)})},o._destroy=function(e,t){Mn.removeAllListeners(o._name),d.transaction(function(e){[Cn,An,xn,On,Tn,jn].forEach(function(t){e.executeSql("DROP TABLE IF EXISTS "+t,[])})},Nn(t),function(){I()&&(delete window.localStorage["_pouch__websqldb_"+o._name],delete window.localStorage[o._name]),t(null,{ok:!0})})}}function Qn(){if("undefined"==typeof indexedDB||null===indexedDB||!/iP(hone|od|ad)/.test(navigator.userAgent))return!0;var e=I(),t="_pouch__websqldb_valid_"+navigator.userAgent;if(e&&localStorage[t])return"1"===localStorage[t];var n=function(){try{return openDatabase("_pouch_validate_websql",1,"",1),!0}catch(e){return!1}}();return e&&(localStorage[t]=n?"1":"0"),n}function Yn(e,t,n,r){return openDatabase(e,t,n,r)}function Zn(e,t){R("warn","WebSQL is deprecated and will be removed in future releases of PouchDB. Please migrate to IndexedDB: https://pouchdb.com/2018/01/23/pouchdb-6.4.2.html");var n=B({websql:Yn},e);Vn.call(this,n,t)}function er(e,t){var n,r,o,i=new Headers,a={method:e.method,credentials:"include",headers:i};return e.json&&(i.set("Accept","application/json"),i.set("Content-Type",e.headers["Content-Type"]||"application/json")),e.body&&e.processData&&"string"!=typeof e.body?a.body=JSON.stringify(e.body):a.body="body"in e?e.body:null,Object.keys(e.headers).forEach(function(t){e.headers.hasOwnProperty(t)&&i.set(t,e.headers[t])}),n=function(){for(var e={},t=new h(function(t,n){e.resolve=t,e.reject=n}),n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.promise=t,h.resolve().then(function(){return fetch.apply(null,n)}).then(function(t){e.resolve(t)}).catch(function(t){e.reject(t)}),e}(e.url,a),e.timeout>0&&(r=setTimeout(function(){n.reject(new Error("Load timeout for resource: "+e.url))},e.timeout)),n.promise.then(function(t){return o={statusCode:t.status},e.timeout>0&&clearTimeout(r),o.statusCode>=200&&o.statusCode<300?e.binary?t.blob():t.text():t.json()}).then(function(e){o.statusCode>=200&&o.statusCode<300?t(null,o,e):(e.status=o.statusCode,t(e))}).catch(function(e){e||(e=new Error("canceled")),t(e)}),{abort:n.reject}}Zn.valid=function(){return"function"==typeof openDatabase&&Qn()},Zn.use_prefix=!0;var tr=function(){try{return new XMLHttpRequest,!0}catch(e){return!1}}();function nr(e,t){return tr||e.xhr?function(e,t){var n,r,o=!1,i=function(){o=!0,n.abort(),s()},a={abort:function(){n.abort(),s()}},s=function(){clearTimeout(r),a.abort=function(){},n&&(n.onprogress=void 0,n.upload&&(n.upload.onprogress=void 0),n.onreadystatechange=void 0,n=void 0)};n=e.xhr?new e.xhr:new XMLHttpRequest;try{n.open(e.method,e.url)}catch(e){return t(new Error(e.name||"Url is invalid"))}for(var c in n.withCredentials=!("withCredentials"in e)||e.withCredentials,"GET"===e.method?delete e.headers["Content-Type"]:e.json&&(e.headers.Accept="application/json",e.headers["Content-Type"]=e.headers["Content-Type"]||"application/json",e.body&&e.processData&&"string"!=typeof e.body&&(e.body=JSON.stringify(e.body))),e.binary&&(n.responseType="arraybuffer"),"body"in e||(e.body=null),e.headers)e.headers.hasOwnProperty(c)&&n.setRequestHeader(c,e.headers[c]);return e.timeout>0&&(r=setTimeout(i,e.timeout),n.onprogress=function(){clearTimeout(r),4!==n.readyState&&(r=setTimeout(i,e.timeout))},void 0!==n.upload&&(n.upload.onprogress=n.onprogress)),n.onreadystatechange=function(){if(4===n.readyState){var r={statusCode:n.status};if(n.status>=200&&n.status<300){var i;i=e.binary?Ct([n.response||""],{type:n.getResponseHeader("Content-Type")}):n.responseText,t(null,r,i)}else{var a={};if(o)(a=new Error("ETIMEDOUT")).code="ETIMEDOUT";else if("string"==typeof n.response&&""!==n.response)try{a=JSON.parse(n.response)}catch(e){}a.status=n.status,t(a)}s()}},e.body&&e.body instanceof Blob?It(e.body,function(e){n.send(e)}):n.send(e.body),a}(e,t):er(e,t)}function rr(e,t){e=m(e);return(e=B({method:"GET",headers:{},json:!0,processData:!0,timeout:1e4,cache:!1},e)).json&&(e.binary||(e.headers.Accept="application/json"),e.headers["Content-Type"]=e.headers["Content-Type"]||"application/json"),e.binary&&(e.encoding=null,e.json=!1),e.processData||(e.json=!1),nr(e,function(n,r,o){if(n)return t(re(n));var i,a=r.headers&&r.headers["content-type"],s=o||"";if(!e.binary&&(e.json||!e.processData)&&"object"!=typeof s&&(/json/.test(a)||/^[\s]*\{/.test(s)&&/\}[\s]*$/.test(s)))try{s=JSON.parse(s.toString())}catch(e){}r.statusCode>=200&&r.statusCode<300?function(t,n,r){if(!e.binary&&e.json&&"string"==typeof t)try{t=JSON.parse(t)}catch(e){return r(e)}Array.isArray(t)&&(t=t.map(function(e){return e.error||e.missing?re(e):e})),e.binary,r(null,t,n)}(s,r,t):((i=re(s)).status=r.statusCode,t(i))})}function or(e,t){var n=navigator&&navigator.userAgent?navigator.userAgent.toLowerCase():"",r=-1!==n.indexOf("safari")&&-1===n.indexOf("chrome"),o=-1!==n.indexOf("msie"),i=-1!==n.indexOf("trident"),a=-1!==n.indexOf("edge"),s=r||(o||i||a)&&"GET"===e.method,c=!("cache"in e)||e.cache;if(!/^blob:/.test(e.url)&&(s||!c)){var u=-1!==e.url.indexOf("?");e.url+=(u?"&":"?")+"_nonce="+Date.now()}return rr(e,t)}var ir=25,ar=50,sr=5e3,cr=1e4,ur={};function fr(e){var t=(e.doc||e.ok)._attachments;t&&Object.keys(t).forEach(function(e){var n=t[e];n.data=xt(n.data,n.content_type)})}function lr(e){return/^_design/.test(e)?"_design/"+encodeURIComponent(e.slice(8)):/^_local/.test(e)?"_local/"+encodeURIComponent(e.slice(7)):encodeURIComponent(e)}function dr(e){return e._attachments&&Object.keys(e._attachments)?h.all(Object.keys(e._attachments).map(function(t){var n=e._attachments[t];if(n.data&&"string"!=typeof n.data)return new h(function(e){Lt(n.data,e)}).then(function(e){n.data=e})})):h.resolve()}function hr(e,t){if(function(e){if(!e.prefix)return!1;var t=pe(e.prefix).protocol;return"http"===t||"https"===t}(t)){var n=t.name.substr(t.prefix.length);e=t.prefix+encodeURIComponent(n)}var r=pe(e);(r.user||r.password)&&(r.auth={username:r.user,password:r.password});var o=r.path.replace(/(^\/|\/$)/g,"").split("/");return r.db=o.pop(),-1===r.db.indexOf("%")&&(r.db=encodeURIComponent(r.db)),r.path=o.join("/"),r}function pr(e,t){return vr(e,e.db+"/"+t)}function vr(e,t){var n=e.path?"/":"";return e.protocol+"://"+e.host+(e.port?":"+e.port:"")+"/"+e.path+n+t}function gr(e){return"?"+Object.keys(e).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")}function yr(e,t){var n,r=this,o=hr(e.name,e),s=pr(o,""),c=(e=m(e)).ajax||{};if(e.auth||o.auth){var u=e.auth||o.auth,f=u.username+":"+u.password,l=qt(unescape(encodeURIComponent(f)));c.headers=c.headers||{},c.headers.Authorization="Basic "+l}function d(e,t,n){var o=(e||{}).ajax||{},i=B(m(c),o,t),a=m(c.headers||{});return i.headers=B(a,o.headers,t.headers||{}),r.constructor.listeners("debug").length&&r.constructor.emit("debug",["http",i.method,i.url]),r._ajax(i,n)}function p(e,t){return new h(function(n,r){d(e,t,function(e,t){if(e)return r(e);n(t)})})}function v(e,t){return E(e,i(function(e){g().then(function(){return t.apply(this,e)}).catch(function(t){e.pop()(t)})}))}function g(){return e.skipSetup||e.skip_setup?h.resolve():n||((n=p({},{method:"GET",url:s}).catch(function(e){return e&&e.status&&404===e.status?(N(404,"PouchDB is just detecting if the remote exists."),p({},{method:"PUT",url:s})):h.reject(e)}).catch(function(e){return!(!e||!e.status||412!==e.status)||h.reject(e)})).catch(function(){n=null}),n)}function y(e){return e.split("/").map(encodeURIComponent).join("/")}r._ajax=or,a(function(){t(null,r)}),r._remote=!0,r.type=function(){return"http"},r.id=v("id",function(e){d({},{method:"GET",url:vr(o,"")},function(t,n){var r=n&&n.uuid?n.uuid+o.db:pr(o,"");e(null,r)})}),r.request=v("request",function(e,t){e.url=pr(o,e.url),d({},e,t)}),r.compact=v("compact",function(e,t){"function"==typeof e&&(t=e,e={}),d(e=m(e),{url:pr(o,"_compact"),method:"POST"},function(){!function n(){r.info(function(r,o){o&&!o.compact_running?t(null,{ok:!0}):setTimeout(n,e.interval||200)})}()})}),r.bulkGet=E("bulkGet",function(e,t){var n=this;function r(t){var n={};e.revs&&(n.revs=!0),e.attachments&&(n.attachments=!0),e.latest&&(n.latest=!0),d(e,{url:pr(o,"_bulk_get"+gr(n)),method:"POST",body:{docs:e.docs}},function(n,r){!n&&e.attachments&&e.binary&&r.results.forEach(function(e){e.docs.forEach(fr)}),t(n,r)})}function i(){var r=ar,o=Math.ceil(e.docs.length/r),i=0,a=new Array(o);function s(e){return function(n,r){a[e]=r.results,++i===o&&t(null,{results:ie(a)})}}for(var u=0;u<o;u++){var f=C(e,["revs","attachments","binary","latest"]);f.ajax=c,f.docs=e.docs.slice(u*r,Math.min(e.docs.length,(u+1)*r)),j(n,f,s(u))}}var a=vr(o,""),s=ur[a];"boolean"!=typeof s?r(function(e,n){e?(ur[a]=!1,N(e.status,"PouchDB is just detecting if the remote supports the _bulk_get API."),i()):(ur[a]=!0,t(null,n))}):s?r(t):i()}),r._info=function(e){g().then(function(){d({},{method:"GET",url:pr(o,"")},function(t,n){if(t)return e(t);n.host=pr(o,""),e(null,n)})}).catch(e)},r.get=v("get",function(e,t,n){"function"==typeof t&&(n=t,t={});var r={};(t=m(t)).revs&&(r.revs=!0),t.revs_info&&(r.revs_info=!0),t.latest&&(r.latest=!0),t.open_revs&&("all"!==t.open_revs&&(t.open_revs=JSON.stringify(t.open_revs)),r.open_revs=t.open_revs),t.rev&&(r.rev=t.rev),t.conflicts&&(r.conflicts=t.conflicts),t.update_seq&&(r.update_seq=t.update_seq),e=lr(e);var i={method:"GET",url:pr(o,e+gr(r))};function a(e){var n=e._attachments,r=n&&Object.keys(n);if(n&&r.length){var i,a,s=r.map(function(r){return function(){return a=n[i=r],s=lr(e._id)+"/"+y(i)+"?rev="+e._rev,p(t,{method:"GET",url:pr(o,s),binary:!0}).then(function(e){return t.binary?e:new h(function(t){Lt(e,t)})}).then(function(e){delete a.stub,delete a.length,a.data=e});var i,a,s}});return i=s,a=5,new h(function(e,t){var n,r=0,o=0,s=0,c=i.length;function u(){++s===c?n?t(n):e():d()}function f(){r--,u()}function l(e){r--,n=n||e,u()}function d(){for(;r<a&&o<c;)r++,i[o++]().then(f,l)}d()})}}p(t,i).then(function(e){return h.resolve().then(function(){if(t.attachments)return n=e,Array.isArray(n)?h.all(n.map(function(e){if(e.ok)return a(e.ok)})):a(n);var n}).then(function(){n(null,e)})}).catch(function(t){t.docId=e,n(t)})}),r.remove=v("remove",function(e,t,n,r){var i;"string"==typeof t?(i={_id:e,_rev:t},"function"==typeof n&&(r=n,n={})):(i=e,"function"==typeof t?(r=t,n={}):(r=n,n=t));var a=i._rev||n.rev;d(n,{method:"DELETE",url:pr(o,lr(i._id))+"?rev="+a},r)}),r.getAttachment=v("getAttachment",function(e,t,n,r){"function"==typeof n&&(r=n,n={});var i=n.rev?"?rev="+n.rev:"";d(n,{method:"GET",url:pr(o,lr(e))+"/"+y(t)+i,binary:!0},r)}),r.removeAttachment=v("removeAttachment",function(e,t,n,r){d({},{method:"DELETE",url:pr(o,lr(e)+"/"+y(t))+"?rev="+n},r)}),r.putAttachment=v("putAttachment",function(e,t,n,r,i,a){"function"==typeof i&&(a=i,i=r,r=n,n=null);var s=lr(e)+"/"+y(t),u=pr(o,s);if(n&&(u+="?rev="+n),"string"==typeof r){var f;try{f=St(r)}catch(e){return a(ne(K,"Attachment is not a valid base64 string"))}r=f?At(f,i):""}d({},{headers:{"Content-Type":i},method:"PUT",url:u,processData:!1,body:r,timeout:c.timeout||6e4},a)}),r._bulkDocs=function(e,t,n){e.new_edits=t.new_edits,g().then(function(){return h.all(e.docs.map(dr))}).then(function(){d(t,{method:"POST",url:pr(o,"_bulk_docs"),timeout:t.timeout,body:e},function(e,t){if(e)return n(e);t.forEach(function(e){e.ok=!0}),n(null,t)})}).catch(n)},r._put=function(e,t,n){g().then(function(){return dr(e)}).then(function(){d(t,{method:"PUT",url:pr(o,lr(e._id)),body:e},function(t,r){if(t)return t.docId=e&&e._id,n(t);n(null,r)})}).catch(n)},r.allDocs=v("allDocs",function(e,t){"function"==typeof e&&(t=e,e={});var n,r={},i="GET";(e=m(e)).conflicts&&(r.conflicts=!0),e.update_seq&&(r.update_seq=!0),e.descending&&(r.descending=!0),e.include_docs&&(r.include_docs=!0),e.attachments&&(r.attachments=!0),e.key&&(r.key=JSON.stringify(e.key)),e.start_key&&(e.startkey=e.start_key),e.startkey&&(r.startkey=JSON.stringify(e.startkey)),e.end_key&&(e.endkey=e.end_key),e.endkey&&(r.endkey=JSON.stringify(e.endkey)),void 0!==e.inclusive_end&&(r.inclusive_end=!!e.inclusive_end),void 0!==e.limit&&(r.limit=e.limit),void 0!==e.skip&&(r.skip=e.skip);var a=gr(r);void 0!==e.keys&&(i="POST",n={keys:e.keys}),p(e,{method:i,url:pr(o,"_all_docs"+a),body:n}).then(function(n){e.include_docs&&e.attachments&&e.binary&&n.rows.forEach(fr),t(null,n)}).catch(t)}),r._changes=function(e){var t="batch_size"in e?e.batch_size:ir;!(e=m(e)).continuous||"heartbeat"in e||(e.heartbeat=cr);var n="timeout"in e?e.timeout:"timeout"in c?c.timeout:3e4;"timeout"in e&&e.timeout&&n-e.timeout<sr&&(n=e.timeout+sr),"heartbeat"in e&&e.heartbeat&&n-e.heartbeat<sr&&(n=e.heartbeat+sr);var r={};"timeout"in e&&e.timeout&&(r.timeout=e.timeout);var i,s=void 0!==e.limit&&e.limit;i="return_docs"in e?e.return_docs:!("returnDocs"in e)||e.returnDocs;var u=s;if(e.style&&(r.style=e.style),(e.include_docs||e.filter&&"function"==typeof e.filter)&&(r.include_docs=!0),e.attachments&&(r.attachments=!0),e.continuous&&(r.feed="longpoll"),e.seq_interval&&(r.seq_interval=e.seq_interval),e.conflicts&&(r.conflicts=!0),e.descending&&(r.descending=!0),e.update_seq&&(r.update_seq=!0),"heartbeat"in e&&e.heartbeat&&(r.heartbeat=e.heartbeat),e.filter&&"string"==typeof e.filter&&(r.filter=e.filter),e.view&&"string"==typeof e.view&&(r.filter="_view",r.view=e.view),e.query_params&&"object"==typeof e.query_params)for(var f in e.query_params)e.query_params.hasOwnProperty(f)&&(r[f]=e.query_params[f]);var l,h,p,v="GET";e.doc_ids?(r.filter="_doc_ids",v="POST",l={doc_ids:e.doc_ids}):e.selector&&(r.filter="_selector",v="POST",l={selector:e.selector});var y=function(i,a){if(!e.aborted){r.since=i,"object"==typeof r.since&&(r.since=JSON.stringify(r.since)),e.descending?s&&(r.limit=u):r.limit=!s||u>t?t:u;var c={method:v,url:pr(o,"_changes"+gr(r)),timeout:n,body:l};p=i,e.aborted||g().then(function(){h=d(e,c,a)}).catch(a)}},_={results:[]},b=function(n,r){if(!e.aborted){var o=0;if(r&&r.results){o=r.results.length,_.last_seq=r.last_seq;var c=null,f=null;"number"==typeof r.pending&&(c=r.pending),"string"!=typeof _.last_seq&&"number"!=typeof _.last_seq||(f=_.last_seq);e.query_params,r.results=r.results.filter(function(t){u--;var n=oe(e)(t);return n&&(e.include_docs&&e.attachments&&e.binary&&fr(t),i&&_.results.push(t),e.onChange(t,c,f)),n})}else if(n)return e.aborted=!0,void e.complete(n);r&&r.last_seq&&(p=r.last_seq);var l=s&&u<=0||r&&o<t||e.descending;(!e.continuous||s&&u<=0)&&l?e.complete(null,_):a(function(){y(p,b)})}};return y(e.since||0,b),{cancel:function(){e.aborted=!0,h&&h.abort()}}},r.revsDiff=v("revsDiff",function(e,t,n){"function"==typeof t&&(n=t,t={}),d(t,{method:"POST",url:pr(o,"_revs_diff"),body:e},n)}),r._close=function(e){e()},r._destroy=function(e,t){d(e,{url:pr(o,""),method:"DELETE"},function(e,n){if(e&&e.status&&404!==e.status)return t(e);t(null,n)})}}function _r(e){this.status=400,this.name="query_parse_error",this.message=e,this.error=!0;try{Error.captureStackTrace(this,_r)}catch(e){}}function mr(e){this.status=404,this.name="not_found",this.message=e,this.error=!0;try{Error.captureStackTrace(this,mr)}catch(e){}}function br(e){this.status=500,this.name="invalid_value",this.message=e,this.error=!0;try{Error.captureStackTrace(this,br)}catch(e){}}function wr(e,t){return t&&e.then(function(e){a(function(){t(null,e)})},function(e){a(function(){t(e)})}),e}function Er(e,t){return function(){var n=arguments,r=this;return e.add(function(){return t.apply(r,n)})}}function kr(e){var t=new v(e),n=new Array(t.size),r=-1;return t.forEach(function(e){n[++r]=e}),n}function Sr(e){var t=new Array(e.size),n=-1;return e.forEach(function(e,r){t[++n]=r}),t}function qr(e){return new br("builtin "+e+" function requires map values to be numbers or number arrays")}function Cr(e){for(var t=0,n=0,r=e.length;n<r;n++){var o=e[n];if("number"!=typeof o){if(!Array.isArray(o))throw qr("_sum");t="number"==typeof t?[t]:t;for(var i=0,a=o.length;i<a;i++){var s=o[i];if("number"!=typeof s)throw qr("_sum");void 0===t[i]?t.push(s):t[i]+=s}}else"number"==typeof t?t+=o:t[0]+=o}return t}yr.valid=function(){return!0},c(_r,Error),c(mr,Error),c(br,Error);var Ar=R.bind(null,"log"),xr=Array.isArray,Tr=JSON.parse;function Or(e,t){return ve("return ("+e.replace(/;\s*$/,"")+");",{emit:t,sum:Cr,log:Ar,isArray:xr,toJSON:Tr})}function jr(){this.promise=new h(function(e){e()})}function Lr(e){if(!e)return"undefined";switch(typeof e){case"function":case"string":return e.toString();default:return JSON.stringify(e)}}function Ir(e,t,n,r,o,i){var a,s,c=(a=r,Lr(n)+Lr(a)+"undefined");if(!o&&(s=e._cachedViews=e._cachedViews||{})[c])return s[c];var u=e.info().then(function(a){var u,f=a.db_name+"-mrview-"+(o?"temp":(u=c,l.hash(u)));return ge(e,"_local/"+i,function(e){e.views=e.views||{};var n=t;-1===n.indexOf("/")&&(n=t+"/"+t);var r=e.views[n]=e.views[n]||{};if(!r[f])return r[f]=!0,e}).then(function(){return e.registerDependentDatabase(f).then(function(t){var o=t.db;o.auto_compaction=!0;var i={name:f,db:o,sourceDB:e,adapter:e.adapter,mapFun:n,reduceFun:r};return i.db.get("_local/lastSeq").catch(function(e){if(404!==e.status)throw e}).then(function(e){return i.seq=e?e.seq:0,s&&i.db.once("destroyed",function(){delete s[c]}),i})})})});return s&&(s[c]=u),u}jr.prototype.add=function(e){return this.promise=this.promise.catch(function(){}).then(function(){return e()}),this.promise},jr.prototype.finish=function(){return this.promise};var Dr={},Rr=new jr,Fr=50;function Nr(e){return-1===e.indexOf("/")?[e,e]:e.split("/")}function Br(e,t){try{e.emit("error",t)}catch(e){R("error","The user's map/reduce function threw an uncaught error.\nYou can debug this error by doing:\nmyDatabase.on('error', function (err) { debugger; });\nPlease double-check your map/reduce function."),R("error",t)}}var $r={_sum:function(e,t){return Cr(t)},_count:function(e,t){return t.length},_stats:function(e,t){return{sum:Cr(t),min:Math.min.apply(null,t),max:Math.max.apply(null,t),count:t.length,sumsqr:function(e){for(var t=0,n=0,r=e.length;n<r;n++){var o=e[n];t+=o*o}return t}(t)}}};var Mr=function(e,t,n,r){function o(e,t,n){try{t(n)}catch(t){Br(e,t)}}function s(e,t,n,r,o){try{return{output:t(n,r,o)}}catch(t){return Br(e,t),{error:t}}}function c(e,t){var n=et(e.key,t.key);return 0!==n?n:et(e.value,t.value)}function u(e){var t=e.value;return t&&"object"==typeof t&&t._id||e.id}function f(e){return function(t){return e.include_docs&&e.attachments&&e.binary&&t.rows.forEach(function(e){var t=e.doc&&e.doc._attachments;t&&Object.keys(t).forEach(function(e){var n=t[e];t[e].data=xt(n.data,n.content_type)})}),t}}function l(e,t,n,r){var o=t[e];void 0!==o&&(r&&(o=encodeURIComponent(JSON.stringify(o))),n.push(e+"="+o))}function d(e){if(void 0!==e){var t=Number(e);return isNaN(t)||t!==parseInt(e,10)?e:t}}function p(e,t){var n=e.descending?"endkey":"startkey",r=e.descending?"startkey":"endkey";if(void 0!==e[n]&&void 0!==e[r]&&et(e[n],e[r])>0)throw new _r("No rows can match your key range, reverse your start_key and end_key or set {descending : true}");if(t.reduce&&!1!==e.reduce){if(e.include_docs)throw new _r("{include_docs:true} is invalid for reduce");if(e.keys&&e.keys.length>1&&!e.group&&!e.group_level)throw new _r("Multi-key fetches for reduce views must use {group: true}")}["group_level","limit","skip"].forEach(function(t){var n=function(e){if(e){if("number"!=typeof e)return new _r('Invalid value for integer: "'+e+'"');if(e<0)return new _r('Invalid value for positive integer: "'+e+'"')}}(e[t]);if(n)throw n})}function y(e){return function(t){if(404===t.status)return e;throw t}}function _(e,t,n){var r,o="_local/doc_"+e,i={_id:o,keys:[]},a=n.get(e),s=a[0],c=a[1];return(1===(r=c).length&&/^1-/.test(r[0].rev)?h.resolve(i):t.db.get(o).catch(y(i))).then(function(e){return(n=e,n.keys.length?t.db.allDocs({keys:n.keys,include_docs:!0}):h.resolve({rows:[]})).then(function(t){return function(e,t){for(var n=[],r=new v,o=0,i=t.rows.length;o<i;o++){var a=t.rows[o].doc;if(a&&(n.push(a),r.add(a._id),a._deleted=!s.has(a._id),!a._deleted)){var c=s.get(a._id);"value"in c&&(a.value=c.value)}}var u=Sr(s);return u.forEach(function(e){if(!r.has(e)){var t={_id:e},o=s.get(e);"value"in o&&(t.value=o.value),n.push(t)}}),e.keys=kr(u.concat(e.keys)),n.push(e),n}(e,t)});var n})}function m(e){var t="string"==typeof e?e:e.name,n=Dr[t];return n||(n=Dr[t]=new jr),n}function b(e){return Er(m(e),function(){return function(e){var n,r,i=t(e.mapFun,function(e,t){var o={id:r._id,key:tt(e)};void 0!==t&&null!==t&&(o.value=tt(t)),n.push(o)}),a=e.seq||0;function s(t,n){return function(){return o=t,i=n,a="_local/lastSeq",(r=e).db.get(a).catch(y({_id:a,seq:0})).then(function(e){var t=Sr(o);return h.all(t.map(function(e){return _(e,r,o)})).then(function(t){var n=ie(t);return e.seq=i,n.push(e),r.db.bulkDocs({docs:n})})});var r,o,i,a}}var u=new jr;function f(){return e.sourceDB.changes({conflicts:!0,include_docs:!0,style:"all_docs",since:a,limit:Fr}).then(l)}function l(t){var l=t.results;if(l.length){var h=function(t){for(var s=new g,u=0,f=t.length;u<f;u++){var l=t[u];if("_"!==l.doc._id[0]){n=[],(r=l.doc)._deleted||o(e.sourceDB,i,r),n.sort(c);var h=d(n);s.set(l.doc._id,[h,l.changes])}a=l.seq}return s}(l);if(u.add(s(h,a)),!(l.length<Fr))return f()}}function d(e){for(var t,n=new g,r=0,o=e.length;r<o;r++){var i=e[r],a=[i.key,i.id];r>0&&0===et(i.key,t)&&a.push(r),n.set(rt(a),i),t=i.key}return n}return f().then(function(){return u.finish()}).then(function(){e.seq=a})}(e)})()}function w(e,t){return Er(m(e),function(){return function(e,t){var r,o=e.reduceFun&&!1!==t.reduce,i=t.skip||0;function a(t){return t.include_docs=!0,e.db.allDocs(t).then(function(e){return r=e.total_rows,e.rows.map(function(e){if("value"in e.doc&&"object"==typeof e.doc.value&&null!==e.doc.value){var t=Object.keys(e.doc.value).sort(),n=["id","key","value"];if(!(t<n||t>n))return e.doc.value}var r=function(e){for(var t=[],n=[],r=0;;){var o=e[r++];if("\0"!==o)switch(o){case"1":t.push(null);break;case"2":t.push("1"===e[r]),r++;break;case"3":var i=ot(e,r);t.push(i.num),r+=i.length;break;case"4":for(var a="";;){var s=e[r];if("\0"===s)break;a+=s,r++}a=a.replace(/\u0001\u0001/g,"\0").replace(/\u0001\u0002/g,"").replace(/\u0002\u0002/g,""),t.push(a);break;case"5":var c={element:[],index:t.length};t.push(c.element),n.push(c);break;case"6":var u={element:{},index:t.length};t.push(u.element),n.push(u);break;default:throw new Error("bad collationIndex or unexpectedly reached end of input: "+o)}else{if(1===t.length)return t.pop();it(t,n)}}}(e.doc._id);return{key:r[0],id:r[1],value:"value"in e.doc?e.doc.value:null}})})}function c(a){var c;if(c=o?function(e,t,r){0===r.group_level&&delete r.group_level;var o,i,a,c=r.group||r.group_level,u=n(e.reduceFun),f=[],l=isNaN(r.group_level)?Number.POSITIVE_INFINITY:r.group_level;t.forEach(function(e){var t=f[f.length-1],n=c?e.key:null;if(c&&Array.isArray(n)&&(n=n.slice(0,l)),t&&0===et(t.groupKey,n))return t.keys.push([e.key,e.id]),void t.values.push(e.value);f.push({keys:[[e.key,e.id]],values:[e.value],groupKey:n})}),t=[];for(var d=0,h=f.length;d<h;d++){var p=f[d],v=s(e.sourceDB,u,p.keys,p.values,!1);if(v.error&&v.error instanceof br)throw v.error;t.push({value:v.error?null:v.output,key:p.groupKey})}return{rows:(o=t,i=r.limit,a=r.skip,a=a||0,"number"==typeof i?o.slice(a,i+a):a>0?o.slice(a):o)}}(e,a,t):{total_rows:r,offset:i,rows:a},t.update_seq&&(c.update_seq=e.seq),t.include_docs){var f=kr(a.map(u));return e.sourceDB.allDocs({keys:f,include_docs:!0,conflicts:t.conflicts,attachments:t.attachments,binary:t.binary}).then(function(e){var t=new g;return e.rows.forEach(function(e){t.set(e.id,e.doc)}),a.forEach(function(e){var n=u(e),r=t.get(n);r&&(e.doc=r)}),c})}return c}if(void 0===t.keys||t.keys.length||(t.limit=0,delete t.keys),void 0!==t.keys){var f=t.keys,l=f.map(function(e){var n={startkey:rt([e]),endkey:rt([e,{}])};return t.update_seq&&(n.update_seq=!0),a(n)});return h.all(l).then(ie).then(c)}var d,p,v={descending:t.descending};if(t.update_seq&&(v.update_seq=!0),"start_key"in t&&(d=t.start_key),"startkey"in t&&(d=t.startkey),"end_key"in t&&(p=t.end_key),"endkey"in t&&(p=t.endkey),void 0!==d&&(v.startkey=t.descending?rt([d,{}]):rt([d])),void 0!==p){var y=!1!==t.inclusive_end;t.descending&&(y=!y),v.endkey=rt(y?[p,{}]:[p])}if(void 0!==t.key){var _=rt([t.key]),m=rt([t.key,{}]);v.descending?(v.endkey=_,v.startkey=m):(v.startkey=_,v.endkey=m)}return o||("number"==typeof t.limit&&(v.limit=t.limit),v.skip=i),a(v).then(c)}(e,t)})()}function E(t,n,o){if("function"==typeof t._query)return i=t,s=n,c=o,new h(function(e,t){i._query(s,c,function(n,r){if(n)return t(n);e(r)})});var i,s,c;if(se(t))return function(e,t,n){var r,o=[],i="GET";if(l("reduce",n,o),l("include_docs",n,o),l("attachments",n,o),l("limit",n,o),l("descending",n,o),l("group",n,o),l("group_level",n,o),l("skip",n,o),l("stale",n,o),l("conflicts",n,o),l("startkey",n,o,!0),l("start_key",n,o,!0),l("endkey",n,o,!0),l("end_key",n,o,!0),l("inclusive_end",n,o),l("key",n,o,!0),l("update_seq",n,o),o=""===(o=o.join("&"))?"":"?"+o,void 0!==n.keys){var a="keys="+encodeURIComponent(JSON.stringify(n.keys));a.length+o.length+1<=2e3?o+=("?"===o[0]?"&":"?")+a:(i="POST","string"==typeof t?r={keys:n.keys}:t.keys=n.keys)}if("string"==typeof t){var s=Nr(t);return e.request({method:i,url:"_design/"+s[0]+"/_view/"+s[1]+o,body:r}).then(function(e){return e.rows.forEach(function(e){if(e.value&&e.value.error&&"builtin_reduce_error"===e.value.error)throw new Error(e.reason)}),e}).then(f(n))}return r=r||{},Object.keys(t).forEach(function(e){Array.isArray(t[e])?r[e]=t[e]:r[e]=t[e].toString()}),e.request({method:"POST",url:"_temp_view"+o,body:r}).then(f(n))}(t,n,o);if("string"!=typeof n)return p(o,n),Rr.add(function(){return Ir(t,"temp_view/temp_view",n.map,n.reduce,!0,e).then(function(e){return t=b(e).then(function(){return w(e,o)}),n=function(){return e.db.destroy()},t.then(function(e){return n().then(function(){return e})},function(e){return n().then(function(){throw e})});var t,n})}),Rr.finish();var u=n,d=Nr(u),v=d[0],g=d[1];return t.get("_design/"+v).then(function(n){var i=n.views&&n.views[g];if(!i)throw new mr("ddoc "+n._id+" has no view named "+g);return r(n,g),p(o,i),Ir(t,u,i.map,i.reduce,!1,e).then(function(e){return"ok"===o.stale||"update_after"===o.stale?("update_after"===o.stale&&a(function(){b(e)}),w(e,o)):b(e).then(function(){return w(e,o)})})})}var k;return{query:function(e,t,n){var r,o=this;"function"==typeof t&&(n=t,t={}),t=t?((r=t).group_level=d(r.group_level),r.limit=d(r.limit),r.skip=d(r.skip),r):{},"function"==typeof e&&(e={map:e});var i=h.resolve().then(function(){return E(o,e,t)});return wr(i,n),i},viewCleanup:(k=function(){var t,n;return"function"==typeof this._viewCleanup?(t=this,new h(function(e,n){t._viewCleanup(function(t,r){if(t)return n(t);e(r)})})):se(this)?this.request({method:"POST",url:"_view_cleanup"}):(n=this).get("_local/"+e).then(function(e){var t=new g;Object.keys(e.views).forEach(function(e){var n=Nr(e),r="_design/"+n[0],o=n[1],i=t.get(r);i||(i=new v,t.set(r,i)),i.add(o)});var r={keys:Sr(t),include_docs:!0};return n.allDocs(r).then(function(r){var o={};r.rows.forEach(function(n){var r=n.key.substring(8);t.get(n.key).forEach(function(t){var i=r+"/"+t;e.views[i]||(i=t);var a=Object.keys(e.views[i]),s=n.doc&&n.doc.views&&n.doc.views[t];a.forEach(function(e){o[e]=o[e]||s})})});var i=Object.keys(o).filter(function(e){return!o[e]}).map(function(e){return Er(m(e),function(){return new n.constructor(e,n.__opts).destroy()})()});return h.all(i).then(function(){return{ok:!0}})})},y({ok:!0}))},i(function(e){var t=e.pop(),n=k.apply(this,e);return"function"==typeof t&&wr(n,t),n}))}}("mrviews",function(e,t){if("function"==typeof e&&2===e.length){var n=e;return function(e){return n(e,t)}}return Or(e.toString(),t)},function(e){var t=e.toString(),n=function(e){if(/^_sum/.test(e))return $r._sum;if(/^_count/.test(e))return $r._count;if(/^_stats/.test(e))return $r._stats;if(/^_/.test(e))throw new Error(e+" is not a supported reduce function.")}(t);return n||Or(t)},function(e,t){var n=e.views&&e.views[t];if("string"!=typeof n.map)throw new mr("ddoc "+e._id+" has no string view named "+t+", instead found object of type: "+typeof n.map)});var Pr={query:function(e,t,n){return Mr.query.call(this,e,t,n)},viewCleanup:function(e){return Mr.viewCleanup.call(this,e)}};function Ur(e){return/^1-/.test(e)}function Jr(e,t){var n=Object.keys(t._attachments);return h.all(n.map(function(n){return e.getAttachment(t._id,n,{rev:t._rev})}))}function Wr(e,t,n,r){n=m(n);var o=[],i=!0;function a(t){return e.allDocs({keys:t,include_docs:!0,conflicts:!0}).then(function(e){if(r.cancelled)throw new Error("cancelled");e.rows.forEach(function(e){var t,r;e.deleted||!e.doc||!Ur(e.value.rev)||(r=e.doc,r._attachments&&Object.keys(r._attachments).length>0)||(t=e.doc,t._conflicts&&t._conflicts.length>0)||(e.doc._conflicts&&delete e.doc._conflicts,o.push(e.doc),delete n[e.id])})})}return h.resolve().then(function(){var e=Object.keys(n).filter(function(e){var t=n[e].missing;return 1===t.length&&Ur(t[0])});if(e.length>0)return a(e)}).then(function(){var a,s,c=(a=n,s=[],Object.keys(a).forEach(function(e){a[e].missing.forEach(function(t){s.push({id:e,rev:t})})}),{docs:s,revs:!0,latest:!0});if(c.docs.length)return e.bulkGet(c).then(function(n){if(r.cancelled)throw new Error("cancelled");return h.all(n.results.map(function(n){return h.all(n.docs.map(function(n){var r,o,a,s,c,u=n.ok;return n.error&&(i=!1),u&&u._attachments?(r=t,o=e,a=u,s=se(o)&&!se(r),c=Object.keys(a._attachments),s?r.get(a._id).then(function(e){return h.all(c.map(function(t){return i=a,s=t,(n=e)._attachments&&n._attachments[s]&&n._attachments[s].digest===i._attachments[s].digest?r.getAttachment(e._id,t):o.getAttachment(a._id,t);var n,i,s}))}).catch(function(e){if(404!==e.status)throw e;return Jr(o,a)}):Jr(o,a)).then(function(e){var t=Object.keys(u._attachments);return e.forEach(function(e,n){var r=u._attachments[t[n]];delete r.stub,delete r.length,r.data=e}),u}):u}))})).then(function(e){o=o.concat(ie(e).filter(Boolean))})})}).then(function(){return{ok:i,docs:o}})}var Hr=1,zr="pouchdb",Kr=5,Xr=0;function Gr(e,t,n,r,o){return e.get(t).catch(function(n){if(404===n.status)return"http"!==e.adapter&&"https"!==e.adapter||N(404,"PouchDB is just checking if a remote checkpoint exists."),{session_id:r,_id:t,history:[],replicator:zr,version:Hr};throw n}).then(function(i){if(!o.cancelled&&i.last_seq!==n)return i.history=(i.history||[]).filter(function(e){return e.session_id!==r}),i.history.unshift({last_seq:n,session_id:r}),i.history=i.history.slice(0,Kr),i.version=Hr,i.replicator=zr,i.session_id=r,i.last_seq=n,e.put(i).catch(function(i){if(409===i.status)return Gr(e,t,n,r,o);throw i})})}function Vr(e,t,n,r,o){this.src=e,this.target=t,this.id=n,this.returnValue=r,this.opts=o||{}}Vr.prototype.writeCheckpoint=function(e,t){var n=this;return this.updateTarget(e,t).then(function(){return n.updateSource(e,t)})},Vr.prototype.updateTarget=function(e,t){return this.opts.writeTargetCheckpoint?Gr(this.target,this.id,e,t,this.returnValue):h.resolve(!0)},Vr.prototype.updateSource=function(e,t){if(this.opts.writeSourceCheckpoint){var n=this;return Gr(this.src,this.id,e,t,this.returnValue).catch(function(e){if(Zr(e))return n.opts.writeSourceCheckpoint=!1,!0;throw e})}return h.resolve(!0)};var Qr={undefined:function(e,t){return 0===et(e.last_seq,t.last_seq)?t.last_seq:0},1:function(e,t){return function(e,t){if(e.session_id===t.session_id)return{last_seq:e.last_seq,history:e.history};return function e(t,n){var r=t[0];var o=t.slice(1);var i=n[0];var a=n.slice(1);if(!r||0===n.length)return{last_seq:Xr,history:[]};var s=r.session_id;if(Yr(s,n))return{last_seq:r.last_seq,history:t};var c=i.session_id;if(Yr(c,o))return{last_seq:i.last_seq,history:a};return e(o,a)}(e.history,t.history)}(t,e).last_seq}};function Yr(e,t){var n=t[0],r=t.slice(1);return!(!e||0===t.length)&&(e===n.session_id||Yr(e,r))}function Zr(e){return"number"==typeof e.status&&4===Math.floor(e.status/100)}Vr.prototype.getCheckpoint=function(){var e=this;return e.opts&&e.opts.writeSourceCheckpoint&&!e.opts.writeTargetCheckpoint?e.src.get(e.id).then(function(e){return e.last_seq||Xr}).catch(function(e){if(404!==e.status)throw e;return Xr}):e.target.get(e.id).then(function(t){return e.opts&&e.opts.writeTargetCheckpoint&&!e.opts.writeSourceCheckpoint?t.last_seq||Xr:e.src.get(e.id).then(function(e){return t.version!==e.version?Xr:(n=t.version?t.version.toString():"undefined")in Qr?Qr[n](t,e):Xr;var n},function(n){if(404===n.status&&t.last_seq)return e.src.put({_id:e.id,last_seq:Xr}).then(function(){return Xr},function(n){return Zr(n)?(e.opts.writeSourceCheckpoint=!1,t.last_seq):Xr});throw n})}).catch(function(e){if(404!==e.status)throw e;return Xr})};var eo=0;function to(e,t,n){var r,o=n.doc_ids?n.doc_ids.sort(et):"",i=n.filter?n.filter.toString():"",a="",s="",c="";return n.selector&&(c=JSON.stringify(n.selector)),n.filter&&n.query_params&&(a=JSON.stringify((r=n.query_params,Object.keys(r).sort(et).reduce(function(e,t){return e[t]=r[t],e},{})))),n.filter&&"_view"===n.filter&&(s=n.view.toString()),h.all([e.id(),t.id()]).then(function(e){var t=e[0]+e[1]+i+s+a+o+c;return new h(function(e){Bt(t,e)})}).then(function(e){return"_local/"+(e=e.replace(/\//g,".").replace(/\+/g,"_"))})}function no(e,t,n,r,o){var i,a,s,c=[],u={seq:0,changes:[],docs:[]},f=!1,l=!1,d=!1,p=0,v=n.continuous||n.live||!1,g=n.batch_size||100,y=n.batches_limit||10,_=!1,b=n.doc_ids,w=n.selector,E=[],k=_e(),S=n.seq_interval;o=o||{ok:!0,start_time:new Date,docs_read:0,docs_written:0,doc_write_failures:0,errors:[]};var q={};function C(){return s?h.resolve():to(e,t,n).then(function(o){a=o;var i={};i=!1===n.checkpoint?{writeSourceCheckpoint:!1,writeTargetCheckpoint:!1}:"source"===n.checkpoint?{writeSourceCheckpoint:!0,writeTargetCheckpoint:!1}:"target"===n.checkpoint?{writeSourceCheckpoint:!1,writeTargetCheckpoint:!0}:{writeSourceCheckpoint:!0,writeTargetCheckpoint:!0},s=new Vr(e,t,a,r,i)})}function A(){if(E=[],0!==i.docs.length){var e=i.docs,a={timeout:n.timeout};return t.bulkDocs({docs:e,new_edits:!1},a).then(function(t){if(r.cancelled)throw I(),new Error("cancelled");var n=Object.create(null);t.forEach(function(e){e.error&&(n[e.id]=e)});var i=Object.keys(n).length;o.doc_write_failures+=i,o.docs_written+=e.length-i,e.forEach(function(e){var t=n[e._id];if(t){o.errors.push(t);var i=(t.name||"").toLowerCase();if("unauthorized"!==i&&"forbidden"!==i)throw t;r.emit("denied",m(t))}else E.push(e)})},function(t){throw o.doc_write_failures+=e.length,t})}}function x(){if(i.error)throw new Error("There was a problem getting docs.");o.last_seq=p=i.seq;var e=m(o);return E.length&&(e.docs=E,"number"==typeof i.pending&&(e.pending=i.pending,delete i.pending),r.emit("change",e)),f=!0,s.writeCheckpoint(i.seq,k).then(function(){if(f=!1,r.cancelled)throw I(),new Error("cancelled");i=void 0,B()}).catch(function(e){throw M(e),e})}function T(){return Wr(e,t,i.diffs,r).then(function(e){i.error=!e.ok,e.docs.forEach(function(e){delete i.diffs[e._id],o.docs_read++,i.docs.push(e)})})}function O(){var e;r.cancelled||i||(0!==c.length?(i=c.shift(),(e={},i.changes.forEach(function(t){"_user/"!==t.id&&(e[t.id]=t.changes.map(function(e){return e.rev}))}),t.revsDiff(e).then(function(e){if(r.cancelled)throw I(),new Error("cancelled");i.diffs=e})).then(T).then(A).then(x).then(O).catch(function(e){L("batch processing terminated with error",e)})):j(!0))}function j(e){0!==u.changes.length?(e||l||u.changes.length>=g)&&(c.push(u),u={seq:0,changes:[],docs:[]},"pending"!==r.state&&"stopped"!==r.state||(r.state="active",r.emit("active")),O()):0!==c.length||i||((v&&q.live||l)&&(r.state="pending",r.emit("paused")),l&&I())}function L(e,t){d||(t.message||(t.message=e),o.ok=!1,o.status="aborting",c=[],u={seq:0,changes:[],docs:[]},I(t))}function I(i){if(!(d||r.cancelled&&(o.status="cancelled",f)))if(o.status=o.status||"complete",o.end_time=new Date,o.last_seq=p,d=!0,i){(i=ne(i)).result=o;var a=(i.name||"").toLowerCase();"unauthorized"===a||"forbidden"===a?(r.emit("error",i),r.removeAllListeners()):function(e,t,n,r){if(!1===e.retry)return t.emit("error",n),void t.removeAllListeners();if("function"!=typeof e.back_off_function&&(e.back_off_function=F),t.emit("requestError",n),"active"===t.state||"pending"===t.state){t.emit("paused",n),t.state="stopped";var o=function(){e.current_back_off=eo};t.once("paused",function(){t.removeListener("active",o)}),t.once("active",o)}e.current_back_off=e.current_back_off||eo,e.current_back_off=e.back_off_function(e.current_back_off),setTimeout(r,e.current_back_off)}(n,r,i,function(){no(e,t,n,r)})}else r.emit("complete",o),r.removeAllListeners()}function D(e,t,o){if(r.cancelled)return I();"number"==typeof t&&(u.pending=t),oe(n)(e)&&(u.seq=e.seq||o,u.changes.push(e),j(0===c.length&&q.live))}function R(e){if(_=!1,r.cancelled)return I();if(e.results.length>0)q.since=e.last_seq,B(),j(!0);else{var t=function(){v?(q.live=!0,B()):l=!0,j(!0)};i||0!==e.results.length?t():(f=!0,s.writeCheckpoint(e.last_seq,k).then(function(){f=!1,o.last_seq=p=e.last_seq,t()}).catch(M))}}function N(e){if(_=!1,r.cancelled)return I();L("changes rejected",e)}function B(){if(!_&&!l&&c.length<y){_=!0,r._changes&&(r.removeListener("cancel",r._abortChanges),r._changes.cancel()),r.once("cancel",o);var t=e.changes(q).on("change",D);t.then(i,i),t.then(R).catch(N),n.retry&&(r._changes=t,r._abortChanges=o)}function o(){t.cancel()}function i(){r.removeListener("cancel",o)}}function $(){C().then(function(){if(!r.cancelled)return s.getCheckpoint().then(function(e){q={since:p=e,limit:g,batch_size:g,style:"all_docs",doc_ids:b,selector:w,return_docs:!0},!1!==S&&(q.seq_interval=S||g),n.filter&&("string"!=typeof n.filter?q.include_docs=!0:q.filter=n.filter),"heartbeat"in n&&(q.heartbeat=n.heartbeat),"timeout"in n&&(q.timeout=n.timeout),n.query_params&&(q.query_params=n.query_params),n.view&&(q.view=n.view),B()});I()}).catch(function(e){L("getCheckpoint rejected with ",e)})}function M(e){f=!1,L("writeCheckpoint completed with error",e)}r.ready(e,t),r.cancelled?I():(r._addedListeners||(r.once("cancel",I),"function"==typeof n.complete&&(r.once("error",n.complete),r.once("complete",function(e){n.complete(null,e)})),r._addedListeners=!0),void 0===n.since?$():C().then(function(){return f=!0,s.writeCheckpoint(n.since,k)}).then(function(){f=!1,r.cancelled?I():(p=n.since,$())}).catch(M))}function ro(){s.EventEmitter.call(this),this.cancelled=!1,this.state="pending";var e=this,t=new h(function(t,n){e.once("complete",t),e.once("error",n)});e.then=function(e,n){return t.then(e,n)},e.catch=function(e){return t.catch(e)},e.catch(function(){})}function oo(e,t){var n=t.PouchConstructor;return"string"==typeof e?new n(e,t):e}function io(e,t,n,r){if("function"==typeof n&&(r=n,n={}),void 0===n&&(n={}),n.doc_ids&&!Array.isArray(n.doc_ids))throw ne(V,"`doc_ids` filter parameter is not a list.");n.complete=r,(n=m(n)).continuous=n.continuous||n.live,n.retry="retry"in n&&n.retry,n.PouchConstructor=n.PouchConstructor||this;var o=new ro(n);return no(oo(e,n),oo(t,n),n,o),o}function ao(e,t,n,r){return"function"==typeof n&&(r=n,n={}),void 0===n&&(n={}),(n=m(n)).PouchConstructor=n.PouchConstructor||this,new so(e=oo(e,n),t=oo(t,n),n,r)}function so(e,t,n,r){var o=this;this.canceled=!1;var i=n.push?B({},n,n.push):n,a=n.pull?B({},n,n.pull):n;function s(e){o.emit("change",{direction:"pull",change:e})}function c(e){o.emit("change",{direction:"push",change:e})}function u(e){o.emit("denied",{direction:"push",doc:e})}function f(e){o.emit("denied",{direction:"pull",doc:e})}function l(){o.pushPaused=!0,o.pullPaused&&o.emit("paused")}function d(){o.pullPaused=!0,o.pushPaused&&o.emit("paused")}function p(){o.pushPaused=!1,o.pullPaused&&o.emit("active",{direction:"push"})}function v(){o.pullPaused=!1,o.pushPaused&&o.emit("active",{direction:"pull"})}this.push=io(e,t,i),this.pull=io(t,e,a),this.pushPaused=!0,this.pullPaused=!0;var g={};function y(e){return function(t,n){("change"===t&&(n===s||n===c)||"denied"===t&&(n===f||n===u)||"paused"===t&&(n===d||n===l)||"active"===t&&(n===v||n===p))&&(t in g||(g[t]={}),g[t][e]=!0,2===Object.keys(g[t]).length&&o.removeAllListeners(t))}}function _(e,t,n){-1==e.listeners(t).indexOf(n)&&e.on(t,n)}n.live&&(this.push.on("complete",o.pull.cancel.bind(o.pull)),this.pull.on("complete",o.push.cancel.bind(o.push))),this.on("newListener",function(e){"change"===e?(_(o.pull,"change",s),_(o.push,"change",c)):"denied"===e?(_(o.pull,"denied",f),_(o.push,"denied",u)):"active"===e?(_(o.pull,"active",v),_(o.push,"active",p)):"paused"===e&&(_(o.pull,"paused",d),_(o.push,"paused",l))}),this.on("removeListener",function(e){"change"===e?(o.pull.removeListener("change",s),o.push.removeListener("change",c)):"denied"===e?(o.pull.removeListener("denied",f),o.push.removeListener("denied",u)):"active"===e?(o.pull.removeListener("active",v),o.push.removeListener("active",p)):"paused"===e&&(o.pull.removeListener("paused",d),o.push.removeListener("paused",l))}),this.pull.on("removeListener",y("pull")),this.push.on("removeListener",y("push"));var m=h.all([this.push,this.pull]).then(function(e){var t={push:e[0],pull:e[1]};return o.emit("complete",t),r&&r(null,t),o.removeAllListeners(),t},function(e){if(o.cancel(),r?r(e):o.emit("error",e),o.removeAllListeners(),r)throw e});this.then=function(e,t){return m.then(e,t)},this.catch=function(e){return m.catch(e)}}c(ro,s.EventEmitter),ro.prototype.cancel=function(){this.cancelled=!0,this.state="cancelled",this.emit("cancel")},ro.prototype.ready=function(e,t){var n=this;function r(){n.cancel()}n._readyCalled||(n._readyCalled=!0,e.once("destroyed",r),t.once("destroyed",r),n.once("complete",function(){e.removeListener("destroyed",r),t.removeListener("destroyed",r)}))},c(so,s.EventEmitter),so.prototype.cancel=function(){this.canceled||(this.canceled=!0,this.push.cancel(),this.pull.cancel())},Je.plugin(function(e){e.adapter("idb",wn,!0)}).plugin(function(e){e.adapter("websql",Zn,!0)}).plugin(function(e){e.adapter("http",yr,!1),e.adapter("https",yr,!1)}).plugin(Pr).plugin(function(e){e.replicate=io,e.sync=ao,Object.defineProperty(e.prototype,"replicate",{get:function(){var e=this;return void 0===this.replicateMethods&&(this.replicateMethods={from:function(t,n,r){return e.constructor.replicate(t,e,n,r)},to:function(t,n,r){return e.constructor.replicate(e,t,n,r)}}),this.replicateMethods}}),e.prototype.sync=function(e,t,n){return this.constructor.sync(this,e,t,n)}}),t.exports=Je}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{1:1,10:10,11:11,16:16,2:2,4:4,5:5,6:6,7:7}]},{},[17])(17)});


!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.PouchAuthentication=e()}}(function(){var e;return function e(t,n,r){function o(s,a){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(i)return i(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[s]={exports:{}};t[s][0].call(f.exports,function(e){var n=t[s][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){(function(t){"use strict";function r(e){return"function"==typeof e.getUrl?e.getUrl().replace(/\/[^\/]+\/?$/,""):e.name.replace(/\/[^\/]+\/?$/,"")}var o=e(13),i=e(16);n.getUsersUrl=function(e){return i(r(e),"/_users")},n.getSessionUrl=function(e){return i(r(e),"/_session")},n.once=function(e){var t=!1;return n.getArguments(function(n){if(t)throw console.trace(),new Error("once called  more than once");t=!0,e.apply(this,n)})},n.getArguments=function(e){return function(){for(var t=arguments.length,n=new Array(t),r=-1;++r<t;)n[r]=arguments[r];return e.call(this,n)}},n.toPromise=function(e){return n.getArguments(function(r){var i,s=this,a="function"==typeof r[r.length-1]&&r.pop();a&&(i=function(e,n){t.nextTick(function(){a(e,n)})});var u=new o(function(t,o){try{var i=n.once(function(e,n){e?o(e):t(n)});r.push(i),e.apply(s,r)}catch(e){o(e)}});return i&&u.then(function(e){i(null,e)},i),u.cancel=function(){return this},u})},n.inherits=e(7),n.extend=e(12),n.ajax=e(11),n.clone=function(e){return n.extend(!0,{},e)},n.uuid=e(14).uuid,n.Promise=o}).call(this,e(15))},{11:11,12:12,13:13,14:14,15:15,16:16,7:7}],2:[function(e,t,n){"use strict";function r(e){return function(){var t=arguments.length;if(t){for(var n=[],r=-1;++r<t;)n[r]=arguments[r];return e.call(this,n)}return e.call(this,[])}}t.exports=r},{}],3:[function(e,t,n){function r(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function o(){var e=arguments,t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+n.humanize(this.diff),!t)return e;var r="color: "+this.color;e=[e[0],r,"color: inherit"].concat(Array.prototype.slice.call(e,1));var o=0,i=0;return e[0].replace(/%[a-z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(i=o))}),e.splice(i,0,r),e}function i(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function s(e){try{null==e?n.storage.removeItem("debug"):n.storage.debug=e}catch(e){}}function a(){var e;try{e=n.storage.debug}catch(e){}return e}function u(){try{return window.localStorage}catch(e){}}n=t.exports=e(4),n.log=i,n.formatArgs=o,n.save=s,n.load=a,n.useColors=r,n.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),n.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],n.formatters.j=function(e){return JSON.stringify(e)},n.enable(a())},{4:4}],4:[function(e,t,n){function r(){return n.colors[f++%n.colors.length]}function o(e){function t(){}function o(){var e=o,t=+new Date,i=t-(c||t);e.diff=i,e.prev=c,e.curr=t,c=t,null==e.useColors&&(e.useColors=n.useColors()),null==e.color&&e.useColors&&(e.color=r());var s=Array.prototype.slice.call(arguments);s[0]=n.coerce(s[0]),"string"!=typeof s[0]&&(s=["%o"].concat(s));var a=0;s[0]=s[0].replace(/%([a-z%])/g,function(t,r){if("%%"===t)return t;a++;var o=n.formatters[r];if("function"==typeof o){var i=s[a];t=o.call(e,i),s.splice(a,1),a--}return t}),"function"==typeof n.formatArgs&&(s=n.formatArgs.apply(e,s));var u=o.log||n.log||console.log.bind(console);u.apply(e,s)}t.enabled=!1,o.enabled=!0;var i=n.enabled(e)?o:t;return i.namespace=e,i}function i(e){n.save(e);for(var t=(e||"").split(/[\s,]+/),r=t.length,o=0;o<r;o++)t[o]&&(e=t[o].replace(/\*/g,".*?"),"-"===e[0]?n.skips.push(new RegExp("^"+e.substr(1)+"$")):n.names.push(new RegExp("^"+e+"$")))}function s(){n.enable("")}function a(e){var t,r;for(t=0,r=n.skips.length;t<r;t++)if(n.skips[t].test(e))return!1;for(t=0,r=n.names.length;t<r;t++)if(n.names[t].test(e))return!0;return!1}function u(e){return e instanceof Error?e.stack||e.message:e}n=t.exports=o,n.coerce=u,n.disable=s,n.enable=i,n.enabled=a,n.humanize=e(10),n.names=[],n.skips=[],n.formatters={};var c,f=0},{10:10}],5:[function(e,t,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function o(e){return"function"==typeof e}function i(e){return"number"==typeof e}function s(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!i(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,n,r,i,u,c;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var f=new Error('Uncaught, unspecified "error" event. ('+t+")");throw f.context=t,f}if(n=this._events[e],a(n))return!1;if(o(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:i=Array.prototype.slice.call(arguments,1),n.apply(this,i)}else if(s(n))for(i=Array.prototype.slice.call(arguments,1),c=n.slice(),r=c.length,u=0;u<r;u++)c[u].apply(this,i);return!0},r.prototype.addListener=function(e,t){var n;if(!o(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,o(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(n=a(this._maxListeners)?r.defaultMaxListeners:this._maxListeners,n&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!o(t))throw TypeError("listener must be a function");var r=!1;return n.listener=t,this.on(e,n),this},r.prototype.removeListener=function(e,t){var n,r,i,a;if(!o(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],i=n.length,r=-1,n===t||o(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(n)){for(a=i;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){r=a;break}if(r<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],o(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?o(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(o(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},{}],6:[function(e,t,n){(function(e){"use strict";function n(){f=!0;for(var e,t,n=l.length;n;){for(t=l,l=[],e=-1;++e<n;)t[e]();n=l.length}f=!1}function r(e){1!==l.push(e)||f||o()}var o,i=e.MutationObserver||e.WebKitMutationObserver;if(i){var s=0,a=new i(n),u=e.document.createTextNode("");a.observe(u,{characterData:!0}),o=function(){u.data=s=++s%2}}else if(e.setImmediate||"undefined"==typeof e.MessageChannel)o="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){n(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(n,0)};else{var c=new e.MessageChannel;c.port1.onmessage=n,o=function(){c.port2.postMessage(0)}}var f,l=[];t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],7:[function(e,t,n){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],8:[function(e,t,n){(function(e){e("object"==typeof n?n:this)}).call(this,function(e){var t=Array.prototype.slice,n=Array.prototype.forEach,r=function(e){if("object"!=typeof e)throw e+" is not an object";var o=t.call(arguments,1);return n.call(o,function(t){if(t)for(var n in t)"object"==typeof t[n]&&e[n]?r.call(e,e[n],t[n]):e[n]=t[n]}),e};e.extend=r})},{}],9:[function(e,t,n){"use strict";function r(){}function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=g,this.queue=[],this.outcome=void 0,e!==r&&u(this,e)}function i(e,t,n){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof n&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function s(e,t,n){p(function(){var r;try{r=t(n)}catch(t){return y.reject(e,t)}r===e?y.reject(e,new TypeError("Cannot resolve promise with itself")):y.resolve(e,r)})}function a(e){var t=e&&e.then;if(e&&"object"==typeof e&&"function"==typeof t)return function(){t.apply(e,arguments)}}function u(e,t){function n(t){i||(i=!0,y.reject(e,t))}function r(t){i||(i=!0,y.resolve(e,t))}function o(){t(r,n)}var i=!1,s=c(o);"error"===s.status&&n(s.value)}function c(e,t){var n={};try{n.value=e(t),n.status="success"}catch(e){n.status="error",n.value=e}return n}function f(e){return e instanceof this?e:y.resolve(new this(r),e)}function l(e){var t=new this(r);return y.reject(t,e)}function d(e){function t(e,t){function r(e){s[t]=e,++a!==o||i||(i=!0,y.resolve(c,s))}n.resolve(e).then(r,function(e){i||(i=!0,y.reject(c,e))})}var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var o=e.length,i=!1;if(!o)return this.resolve([]);for(var s=new Array(o),a=0,u=-1,c=new this(r);++u<o;)t(e[u],u);return c}function h(e){function t(e){n.resolve(e).then(function(e){i||(i=!0,y.resolve(a,e))},function(e){i||(i=!0,y.reject(a,e))})}var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var o=e.length,i=!1;if(!o)return this.resolve([]);for(var s=-1,a=new this(r);++s<o;)t(e[s]);return a}var p=e(6),y={},v=["REJECTED"],m=["FULFILLED"],g=["PENDING"];t.exports=o,o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){if("function"!=typeof e&&this.state===m||"function"!=typeof t&&this.state===v)return this;var n=new this.constructor(r);if(this.state!==g){var o=this.state===m?e:t;s(n,o,this.outcome)}else this.queue.push(new i(n,e,t));return n},i.prototype.callFulfilled=function(e){y.resolve(this.promise,e)},i.prototype.otherCallFulfilled=function(e){s(this.promise,this.onFulfilled,e)},i.prototype.callRejected=function(e){y.reject(this.promise,e)},i.prototype.otherCallRejected=function(e){s(this.promise,this.onRejected,e)},y.resolve=function(e,t){var n=c(a,t);if("error"===n.status)return y.reject(e,n.value);var r=n.value;if(r)u(e,r);else{e.state=m,e.outcome=t;for(var o=-1,i=e.queue.length;++o<i;)e.queue[o].callFulfilled(t)}return e},y.reject=function(e,t){e.state=v,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},o.resolve=f,o.reject=l,o.all=d,o.race=h},{6:6}],10:[function(e,t,n){function r(e){if(e=""+e,!(e.length>1e4)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]),r=(t[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*l;case"days":case"day":case"d":return n*f;case"hours":case"hour":case"hrs":case"hr":case"h":return n*c;case"minutes":case"minute":case"mins":case"min":case"m":return n*u;case"seconds":case"second":case"secs":case"sec":case"s":return n*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n}}}}function o(e){return e>=f?Math.round(e/f)+"d":e>=c?Math.round(e/c)+"h":e>=u?Math.round(e/u)+"m":e>=a?Math.round(e/a)+"s":e+"ms"}function i(e){return s(e,f,"day")||s(e,c,"hour")||s(e,u,"minute")||s(e,a,"second")||e+" ms"}function s(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}var a=1e3,u=60*a,c=60*u,f=24*c,l=365.25*f;t.exports=function(e,t){return t=t||{},"string"==typeof e?r(e):t.long?i(e):o(e)}},{}],11:[function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(i){if("TypeError"!==i.name)throw i;for(var n="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder,r=new n,o=0;o<e.length;o+=1)r.append(e[o]);return r.getBlob(t.type)}}function i(e,t){if("undefined"==typeof FileReader)return t((new FileReaderSync).readAsArrayBuffer(e));var n=new FileReader;n.onloadend=function(e){var n=e.target.result||new ArrayBuffer(0);t(n)},n.readAsArrayBuffer(e)}function s(){for(var e={},t=new A(function(t,n){e.resolve=t,e.reject=n}),n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.promise=t,A.resolve().then(function(){return fetch.apply(null,n)}).then(function(t){e.resolve(t)}).catch(function(t){e.reject(t)}),e}function a(e,t){var n,r,o,a=new Headers,u={method:e.method,credentials:"include",headers:a};return e.json&&(a.set("Accept","application/json"),a.set("Content-Type",e.headers["Content-Type"]||"application/json")),e.body&&e.body instanceof Blob?i(e.body,function(e){u.body=e}):e.body&&e.processData&&"string"!=typeof e.body?u.body=JSON.stringify(e.body):"body"in e?u.body=e.body:u.body=null,Object.keys(e.headers).forEach(function(t){e.headers.hasOwnProperty(t)&&a.set(t,e.headers[t])}),n=s(e.url,u),e.timeout>0&&(r=setTimeout(function(){n.reject(new Error("Load timeout for resource: "+e.url))},e.timeout)),n.promise.then(function(t){return o={statusCode:t.status},e.timeout>0&&clearTimeout(r),o.statusCode>=200&&o.statusCode<300?e.binary?t.blob():t.text():t.json()}).then(function(e){o.statusCode>=200&&o.statusCode<300?t(null,o,e):t(e,o)}).catch(function(e){t(e,o)}),{abort:n.reject}}function u(e,t){var n,r,s=!1,a=function(){n.abort(),f()},u=function(){s=!0,n.abort(),f()},c={abort:a},f=function(){clearTimeout(r),c.abort=function(){},n&&(n.onprogress=void 0,n.upload&&(n.upload.onprogress=void 0),n.onreadystatechange=void 0,n=void 0)};n=e.xhr?new e.xhr:new XMLHttpRequest;try{n.open(e.method,e.url)}catch(e){return t(new Error(e.name||"Url is invalid"))}n.withCredentials=!("withCredentials"in e)||e.withCredentials,"GET"===e.method?delete e.headers["Content-Type"]:e.json&&(e.headers.Accept="application/json",e.headers["Content-Type"]=e.headers["Content-Type"]||"application/json",e.body&&e.processData&&"string"!=typeof e.body&&(e.body=JSON.stringify(e.body))),e.binary&&(n.responseType="arraybuffer"),"body"in e||(e.body=null);for(var l in e.headers)e.headers.hasOwnProperty(l)&&n.setRequestHeader(l,e.headers[l]);return e.timeout>0&&(r=setTimeout(u,e.timeout),n.onprogress=function(){clearTimeout(r),4!==n.readyState&&(r=setTimeout(u,e.timeout))},"undefined"!=typeof n.upload&&(n.upload.onprogress=n.onprogress)),n.onreadystatechange=function(){if(4===n.readyState){var r={statusCode:n.status};if(n.status>=200&&n.status<300){var i;i=e.binary?o([n.response||""],{type:n.getResponseHeader("Content-Type")}):n.responseText,t(null,r,i)}else{var a={};if(s)a=new Error("ETIMEDOUT"),a.code="ETIMEDOUT";else if("string"==typeof n.response)try{a=JSON.parse(n.response)}catch(e){}a.status=n.status,t(a)}f()}},e.body&&e.body instanceof Blob?i(e.body,function(e){n.send(e)}):n.send(e.body),c}function c(){try{return new XMLHttpRequest,!0}catch(e){return!1}}function f(e,t){return q||e.xhr?u(e,t):a(e,t)}function l(e){Error.call(this,e.reason),this.status=e.status,this.name=e.error,this.message=e.reason,this.error=!0}function d(e){if("object"!=typeof e){var t=e;e=P,e.data=t}return"error"in e&&"conflict"===e.error&&(e.name="conflict",e.status=409),"name"in e||(e.name=e.error||"unknown"),"status"in e||(e.status=500),"message"in e||(e.message=e.message||e.reason),e}function h(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer||"undefined"!=typeof Blob&&e instanceof Blob}function p(e){if("function"==typeof e.slice)return e.slice(0);var t=new ArrayBuffer(e.byteLength),n=new Uint8Array(t),r=new Uint8Array(e);return n.set(r),t}function y(e){if(e instanceof ArrayBuffer)return p(e);var t=e.size,n=e.type;return"function"==typeof e.slice?e.slice(0,t,n):e.webkitSlice(0,t,n)}function v(e){var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&B.call(n)==D}function m(e){var t,n,r;if(!e||"object"!=typeof e)return e;if(Array.isArray(e)){for(t=[],n=0,r=e.length;n<r;n++)t[n]=m(e[n]);return t}if(e instanceof Date)return e.toISOString();if(h(e))return y(e);if(!v(e))return e;t={};for(n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=m(e[n]);"undefined"!=typeof o&&(t[n]=o)}return t}function g(e,t){for(var n={},r=0,o=t.length;r<o;r++){var i=t[r];i in e&&(n[i]=e[i])}return n}function w(){return"undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage&&"undefined"!=typeof chrome.storage.local}function b(){return U}function _(e){w()?chrome.storage.onChanged.addListener(function(t){null!=t.db_name&&e.emit(t.dbName.newValue)}):b()&&("undefined"!=typeof addEventListener?addEventListener("storage",function(t){e.emit(t.key)}):window.attachEvent("storage",function(t){e.emit(t.key)}))}function j(){C.EventEmitter.call(this),this._listeners={},_(this)}function x(){return""}function E(e,t){function n(t,n,r){if(!e.binary&&e.json&&"string"==typeof t)try{t=JSON.parse(t)}catch(e){return r(e)}Array.isArray(t)&&(t=t.map(function(e){return e.error||e.missing?d(e):e})),e.binary&&N(t,n),r(null,t,n)}e=m(e);var r={method:"GET",headers:{},json:!0,processData:!0,timeout:1e4,cache:!1};return e=S.extend(r,e),e.json&&(e.binary||(e.headers.Accept="application/json"),e.headers["Content-Type"]=e.headers["Content-Type"]||"application/json"),e.binary&&(e.encoding=null,e.json=!1),e.processData||(e.json=!1),f(e,function(r,o,i){if(r)return t(d(r));var s,a=o.headers&&o.headers["content-type"],u=i||x();if(!e.binary&&(e.json||!e.processData)&&"object"!=typeof u&&(/json/.test(a)||/^[\s]*\{/.test(u)&&/\}[\s]*$/.test(u)))try{u=JSON.parse(u.toString())}catch(e){}o.statusCode>=200&&o.statusCode<300?n(u,o,t):(s=d(u),s.status=o.statusCode,t(s))})}function T(e,t){var n=navigator&&navigator.userAgent?navigator.userAgent.toLowerCase():"",r=n.indexOf("safari")!==-1&&n.indexOf("chrome")===-1,o=n.indexOf("msie")!==-1,i=n.indexOf("edge")!==-1,s=r||(o||i)&&"GET"===e.method,a=!("cache"in e)||e.cache,u=/^blob:/.test(e.url);if(!u&&(s||!a)){var c=e.url.indexOf("?")!==-1;e.url+=(c?"&":"?")+"_nonce="+Date.now()}return E(e,t)}var O=r(e(9)),S=e(8),L=r(e(7)),k=(r(e(2)),r(e(3))),C=e(5),A="function"==typeof Promise?Promise:O,q=c();L(l,Error),l.prototype.toString=function(){return JSON.stringify({status:this.status,name:this.name,message:this.message,reason:this.reason})};var U,P=(new l({status:401,error:"unauthorized",reason:"Name or password is incorrect."}),new l({status:400,error:"bad_request",reason:"Missing JSON list of 'docs'"}),new l({status:404,error:"not_found",reason:"missing"}),new l({status:409,error:"conflict",reason:"Document update conflict"}),new l({status:400,error:"bad_request",reason:"_id field must contain a string"}),new l({status:412,error:"missing_id",reason:"_id is required for puts"}),new l({status:400,error:"bad_request",reason:"Only reserved document ids may start with underscore."}),new l({status:412,error:"precondition_failed",reason:"Database not open"}),new l({status:500,error:"unknown_error",reason:"Database encountered an unknown error"})),B=(new l({status:500,error:"badarg",reason:"Some query argument is invalid"}),new l({status:400,error:"invalid_request",reason:"Request was invalid"}),new l({status:400,error:"query_parse_error",reason:"Some query parameter is invalid"}),new l({status:500,error:"doc_validation",reason:"Bad special document member"}),new l({status:400,error:"bad_request",reason:"Something wrong with the request"}),new l({status:400,error:"bad_request",reason:"Document must be a JSON object"}),new l({status:404,error:"not_found",reason:"Database not found"}),new l({status:500,error:"indexed_db_went_bad",reason:"unknown"}),new l({status:500,error:"web_sql_went_bad",reason:"unknown"}),new l({status:500,error:"levelDB_went_went_bad",reason:"unknown"}),new l({status:403,error:"forbidden",reason:"Forbidden by design doc validate_doc_update function"}),new l({status:400,error:"bad_request",reason:"Invalid rev format"}),new l({status:412,error:"file_exists",reason:"The database could not be created, the file already exists."}),new l({status:412,error:"missing_stub"}),new l({status:413,error:"invalid_url",reason:"Provided URL is invalid"}),Function.prototype.toString),D=B.call(Object);k("pouchdb:api");if(w())U=!1;else try{localStorage.setItem("_pouch_check_localstorage",1),U=!!localStorage.getItem("_pouch_check_localstorage")}catch(e){U=!1}L(j,C.EventEmitter),j.prototype.addListener=function(e,t,n,r){function o(){function e(){s=!1}if(i._listeners[t]){if(s)return void(s="waiting");s=!0;var a=g(r,["style","include_docs","attachments","conflicts","filter","doc_ids","view","since","query_params","binary"]);n.changes(a).on("change",function(e){e.seq>r.since&&!r.cancelled&&(r.since=e.seq,r.onChange(e))}).on("complete",function(){"waiting"===s&&setTimeout(function(){o()},0),s=!1}).on("error",e)}}if(!this._listeners[t]){var i=this,s=!1;this._listeners[t]=o,this.on(e,o)}},j.prototype.removeListener=function(e,t){t in this._listeners&&(C.EventEmitter.prototype.removeListener.call(this,e,this._listeners[t]),delete this._listeners[t])},j.prototype.notifyLocalWindows=function(e){w()?chrome.storage.local.set({dbName:e}):b()&&(localStorage[e]="a"===localStorage[e]?"b":"a")},j.prototype.notify=function(e){this.emit(e),this.notifyLocalWindows(e)};var N=("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),function(){});t.exports=T},{2:2,3:3,5:5,7:7,8:8,9:9}],12:[function(e,t,n){"use strict";function r(e){return null===e?String(e):"object"==typeof e||"function"==typeof e?c[h.call(e)]||"object":typeof e}function o(e){return null!==e&&e===e.window}function i(e){if(!e||"object"!==r(e)||e.nodeType||o(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}var t;for(t in e);return void 0===t||p.call(e,t)}function s(e){return"function"===r(e)}function a(){for(var e=[],t=-1,n=arguments.length,r=new Array(n);++t<n;)r[t]=arguments[t];var o={};e.push({args:r,result:{container:o,key:"key"}});for(var i;i=e.pop();)u(e,i.args,i.result);return o.key}function u(e,t,n){var r,o,a,u,c,f,l,d=t[0]||{},h=1,p=t.length,v=!1,m=/\d+/;for("boolean"==typeof d&&(v=d,d=t[1]||{},h=2),"object"==typeof d||s(d)||(d={}),p===h&&(d=this,--h);h<p;h++)if(null!=(r=t[h])){l=y(r);for(o in r)if(!(o in Object.prototype)){if(l&&!m.test(o))continue;if(a=d[o],u=r[o],d===u)continue;v&&u&&(i(u)||(c=y(u)))?(c?(c=!1,f=a&&y(a)?a:[]):f=a&&i(a)?a:{},e.push({args:[v,f,u],result:{container:d,key:o}})):void 0!==u&&(y(r)&&s(u)||(d[o]=u))}}n.container[n.key]=d}for(var c={},f=["Boolean","Number","String","Function","Array","Date","RegExp","Object","Error"],l=0;l<f.length;l++){var d=f[l];c["[object "+d+"]"]=d.toLowerCase()}var h=c.toString,p=c.hasOwnProperty,y=Array.isArray||function(e){return"array"===r(e)};t.exports=a},{}],13:[function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=r(e(9)),i="function"==typeof Promise?Promise:o;t.exports=i},{9:9}],14:[function(e,t,n){(function(t){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer||"undefined"!=typeof Blob&&e instanceof Blob}function i(e){if("function"==typeof e.slice)return e.slice(0);var t=new ArrayBuffer(e.byteLength),n=new Uint8Array(t),r=new Uint8Array(e);return n.set(r),t}function s(e){if(e instanceof ArrayBuffer)return i(e);var t=e.size,n=e.type;return"function"==typeof e.slice?e.slice(0,t,n):e.webkitSlice(0,t,n)}function a(e){var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&K.call(n)==V}function u(e){var t,n,r;if(!e||"object"!=typeof e)return e;if(Array.isArray(e)){for(t=[],n=0,r=e.length;n<r;n++)t[n]=u(e[n]);return t}if(e instanceof Date)return e.toISOString();if(o(e))return s(e);if(!a(e))return e;t={};for(n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=u(e[n]);"undefined"!=typeof i&&(t[n]=i)}return t}function c(e){var t=!1;return $(function(n){if(t)throw new Error("once called more than once");t=!0,e.apply(this,n)})}function f(e){return $(function(n){n=u(n);var r,o=this,i="function"==typeof n[n.length-1]&&n.pop();i&&(r=function(e,n){t.nextTick(function(){i(e,n)})});var s=new H(function(t,r){var i;try{var s=c(function(e,n){e?r(e):t(n)});n.push(s),i=e.apply(o,n),i&&"function"==typeof i.then&&t(i)}catch(e){r(e)}});return r&&s.then(function(e){r(null,e)},r),s})}function l(e,t){function n(e,t,n){if(X.enabled){for(var r=[e.name,t],o=0;o<n.length-1;o++)r.push(n[o]);X.apply(null,r);var i=n[n.length-1];n[n.length-1]=function(n,r){var o=[e.name,t];o=o.concat(n?["error",n]:["success",r]),X.apply(null,o),i(n,r)}}}return f($(function(r){if(this._closed)return H.reject(new Error("database is closed"));if(this._destroyed)return H.reject(new Error("database is destroyed"));var o=this;return n(o,e,r),this.taskqueue.isReady?t.apply(this,r):new H(function(t,n){o.taskqueue.addTask(function(i){i?n(i):t(o[e].apply(o,r))})})}))}function d(e,t){for(var n={},r=0,o=t.length;r<o;r++){var i=t[r];i in e&&(n[i]=e[i])}return n}function h(e){return e}function p(e){return[{ok:e}]}function y(e,t,n){function r(){var e=[];y.forEach(function(t){t.docs.forEach(function(n){e.push({id:t.id,docs:[n]})})}),n(null,{results:e})}function o(){++l===f&&r()}function i(e,t,n){y[e]={id:t,docs:n},o()}function s(){if(!(m>=v.length)){var e=Math.min(m+Q,v.length),t=v.slice(m,e);a(t,m),m+=t.length}}function a(n,r){n.forEach(function(n,o){var a=r+o,u=c[n],f=d(u[0],["atts_since","attachments"]);f.open_revs=u.map(function(e){return e.rev}),f.open_revs=f.open_revs.filter(h);var l=h;0===f.open_revs.length&&(delete f.open_revs,l=p),["revs","attachments","binary","ajax"].forEach(function(e){e in t&&(f[e]=t[e])}),e.get(n,f,function(e,t){var r;r=e?[{error:e}]:l(t),i(a,n,r),s()})})}var u=t.docs,c={};u.forEach(function(e){e.id in c?c[e.id].push(e):c[e.id]=[e]});var f=Object.keys(c).length,l=0,y=new Array(f),v=Object.keys(c),m=0;s()}function v(){return"undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage&&"undefined"!=typeof chrome.storage.local}function m(){return J}function g(e){v()?chrome.storage.onChanged.addListener(function(t){null!=t.db_name&&e.emit(t.dbName.newValue)}):m()&&("undefined"!=typeof addEventListener?addEventListener("storage",function(t){e.emit(t.key)}):window.attachEvent("storage",function(t){e.emit(t.key)}))}function w(){W.EventEmitter.call(this),this._listeners={},g(this)}function b(e){if("undefined"!==console&&e in console){var t=Array.prototype.slice.call(arguments,1);console[e].apply(console,t)}}function _(e,t){var n=6e5;e=parseInt(e,10)||0,t=parseInt(t,10),t!==t||t<=e?t=(e||1)<<1:t+=1,t>n&&(e=n>>1,t=n);var r=Math.random(),o=t-e;return~~(o*r+e)}function j(e){var t=0;return e||(t=2e3),_(e,t)}function x(e,t){b("info","The above "+e+" is totally normal. "+t)}function E(e,t){for(var n in t)if(t.hasOwnProperty(n)){var r=u(t[n]);"undefined"!=typeof r&&(e[n]=r)}}function T(e,t,n){return E(e,t),n&&E(e,n),e}function O(e){Error.call(this,e.reason),this.status=e.status,this.name=e.error,this.message=e.reason,this.error=!0}function S(e,t){function n(t){for(var n in e)"function"!=typeof e[n]&&(this[n]=e[n]);void 0!==t&&(this.reason=t)}return n.prototype=O.prototype,new n(t)}function L(e,t,n){try{return!e(t,n)}catch(e){var r="Filter function threw: "+e.toString();return S(re,r)}}function k(e){var t={},n=e.filter&&"function"==typeof e.filter;return t.query=e.query_params,function(r){r.doc||(r.doc={});var o=n&&L(e.filter,r.doc,t);if("object"==typeof o)return o;if(o)return!1;if(e.include_docs){if(!e.attachments)for(var i in r.doc._attachments)r.doc._attachments.hasOwnProperty(i)&&(r.doc._attachments[i].stub=!0)}else delete r.doc;return!0}}function C(e){for(var t=[],n=0,r=e.length;n<r;n++)t=t.concat(e[n]);return t}function A(){}function q(e){var t;if(e?"string"!=typeof e?t=S(ee):/^_/.test(e)&&!/^_(design|local)/.test(e)&&(t=S(ne)):t=S(te),t)throw t}function U(){return"undefined"!=typeof cordova||"undefined"!=typeof PhoneGap||"undefined"!=typeof phonegap}function P(e,t){return"listenerCount"in e?e.listenerCount(t):W.EventEmitter.listenerCount(e,t)}function B(e){if(!e)return null;var t=e.split("/");return 2===t.length?t:1===t.length?[e,e]:null}function D(e){var t=B(e);return t?t.join("/"):null}function N(e){for(var t=ce.exec(e),n={},r=14;r--;){var o=se[r],i=t[r]||"",s=["user","password"].indexOf(o)!==-1;n[o]=s?decodeURIComponent(i):i}return n[ae]={},n[se[12]].replace(ue,function(e,t,r){t&&(n[ae][t]=r)}),n}function M(e,t,n){return new H(function(r,o){e.get(t,function(i,s){if(i){if(404!==i.status)return o(i);s={}}var a=s._rev,u=n(s);return u?(u._id=t,u._rev=a,void r(R(e,u,n))):r({updated:!1,rev:a})})})}function R(e,t,n){return e.put(t).then(function(e){return{updated:!0,rev:e.rev}},function(r){if(409!==r.status)throw r;return M(e,t._id,n)})}function I(e){return 0|Math.random()*e}function F(e,t){t=t||fe.length;var n="",r=-1;if(e){for(;++r<e;)n+=fe[I(t)];return n}for(;++r<36;)switch(r){case 8:case 13:case 18:case 23:n+="-";break;case 19:n+=fe[3&I(16)|8];break;default:n+=fe[I(16)]}return n}Object.defineProperty(n,"__esModule",{value:!0});var J,z=r(e(9)),$=r(e(2)),G=r(e(3)),W=e(5),Y=r(e(7)),H="function"==typeof Promise?Promise:z,K=Function.prototype.toString,V=K.call(Object),X=G("pouchdb:api"),Q=6;if(v())J=!1;else try{localStorage.setItem("_pouch_check_localstorage",1),J=!!localStorage.getItem("_pouch_check_localstorage")}catch(e){J=!1}Y(w,W.EventEmitter),w.prototype.addListener=function(e,t,n,r){function o(){function e(){s=!1}if(i._listeners[t]){if(s)return void(s="waiting");s=!0;var a=d(r,["style","include_docs","attachments","conflicts","filter","doc_ids","view","since","query_params","binary"]);
n.changes(a).on("change",function(e){e.seq>r.since&&!r.cancelled&&(r.since=e.seq,r.onChange(e))}).on("complete",function(){"waiting"===s&&setTimeout(function(){o()},0),s=!1}).on("error",e)}}if(!this._listeners[t]){var i=this,s=!1;this._listeners[t]=o,this.on(e,o)}},w.prototype.removeListener=function(e,t){t in this._listeners&&(W.EventEmitter.prototype.removeListener.call(this,e,this._listeners[t]),delete this._listeners[t])},w.prototype.notifyLocalWindows=function(e){v()?chrome.storage.local.set({dbName:e}):m()&&(localStorage[e]="a"===localStorage[e]?"b":"a")},w.prototype.notify=function(e){this.emit(e),this.notifyLocalWindows(e)},Y(O,Error),O.prototype.toString=function(){return JSON.stringify({status:this.status,name:this.name,message:this.message,reason:this.reason})};var Z,ee=(new O({status:401,error:"unauthorized",reason:"Name or password is incorrect."}),new O({status:400,error:"bad_request",reason:"Missing JSON list of 'docs'"}),new O({status:404,error:"not_found",reason:"missing"}),new O({status:409,error:"conflict",reason:"Document update conflict"}),new O({status:400,error:"bad_request",reason:"_id field must contain a string"})),te=new O({status:412,error:"missing_id",reason:"_id is required for puts"}),ne=new O({status:400,error:"bad_request",reason:"Only reserved document ids may start with underscore."}),re=(new O({status:412,error:"precondition_failed",reason:"Database not open"}),new O({status:500,error:"unknown_error",reason:"Database encountered an unknown error"}),new O({status:500,error:"badarg",reason:"Some query argument is invalid"}),new O({status:400,error:"invalid_request",reason:"Request was invalid"}),new O({status:400,error:"query_parse_error",reason:"Some query parameter is invalid"}),new O({status:500,error:"doc_validation",reason:"Bad special document member"}),new O({status:400,error:"bad_request",reason:"Something wrong with the request"})),oe=(new O({status:400,error:"bad_request",reason:"Document must be a JSON object"}),new O({status:404,error:"not_found",reason:"Database not found"}),new O({status:500,error:"indexed_db_went_bad",reason:"unknown"}),new O({status:500,error:"web_sql_went_bad",reason:"unknown"}),new O({status:500,error:"levelDB_went_went_bad",reason:"unknown"}),new O({status:403,error:"forbidden",reason:"Forbidden by design doc validate_doc_update function"}),new O({status:400,error:"bad_request",reason:"Invalid rev format"}),new O({status:412,error:"file_exists",reason:"The database could not be created, the file already exists."}),new O({status:412,error:"missing_stub"}),new O({status:413,error:"invalid_url",reason:"Provided URL is invalid"}),A.name);Z=oe?function(e){return e.name}:function(e){return e.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]};var ie=Z,se=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],ae="queryKey",ue=/(?:^|&)([^&=]*)=?([^&]*)/g,ce=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,fe="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");n.adapterFun=l,n.bulkGetShim=y,n.changesHandler=w,n.clone=u,n.defaultBackOff=j,n.explainError=x,n.extend=T,n.filterChange=k,n.flatten=C,n.functionName=ie,n.guardedConsole=b,n.hasLocalStorage=m,n.invalidIdError=q,n.isChromeApp=v,n.isCordova=U,n.listenerCount=P,n.normalizeDdocFunctionName=D,n.once=c,n.parseDdocFunctionName=B,n.parseUri=N,n.pick=d,n.toPromise=f,n.upsert=M,n.uuid=F}).call(this,e(15))},{15:15,2:2,3:3,5:5,7:7,9:9}],15:[function(e,t,n){function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===r||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function s(e){if(d===clearTimeout)return clearTimeout(e);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function a(){v&&p&&(v=!1,p.length?y=p.concat(y):m=-1,y.length&&u())}function u(){if(!v){var e=i(a);v=!0;for(var t=y.length;t;){for(p=y,y=[];++m<t;)p&&p[m].run();m=-1,t=y.length}p=null,v=!1,s(e)}}function c(e,t){this.fun=e,this.array=t}function f(){}var l,d,h=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:r}catch(e){l=r}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(e){d=o}}();var p,y=[],v=!1,m=-1;h.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new c(e,t)),1!==y.length||v||i(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=f,h.addListener=f,h.once=f,h.off=f,h.removeListener=f,h.removeAllListeners=f,h.emit=f,h.binding=function(e){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(e){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},{}],16:[function(t,n,r){!function(t,r,o){"undefined"!=typeof n&&n.exports?n.exports=o():"function"==typeof e&&e.amd?e(o):r[t]=o()}("urljoin",this,function(){function e(e,t){return e=e.replace(/:\//g,"://"),e=e.replace(/([^:\s])\/+/g,"$1/"),e=e.replace(/\/(\?|&|#[^!])/g,"$1"),e=e.replace(/(\?.+)\?/g,"$1&")}return function(){var t=arguments,n={};"object"==typeof arguments[0]&&(t=arguments[0],n=arguments[1]||{});var r=[].slice.call(t,0).join("/");return e(r,n)}})},{}],17:[function(e,t,n){"use strict";function r(e){return function(t,n){return t&&"unknown_error"===t.name&&(t.message=(t.message||"")+" Unknown error!  Did you remember to enable CORS?"),e(t,n)}}function o(e,t,n,o){var a=["name","password","roles","type","salt","metadata"];if(n.metadata){for(var u in n.metadata)if(n.hasOwnProperty(u)&&(a.indexOf(u)!==-1||u.startsWith("_")))return o(new i('cannot use reserved word in metadata: "'+u+'"'));t=s.extend(!0,t,n.metadata)}var c=s.getUsersUrl(e)+"/"+encodeURIComponent(t._id),f=s.extend(!0,{method:"PUT",url:c,body:t},n.ajax||{});s.ajax(f,r(o))}function i(e){this.status=400,this.name="authentication_error",this.message=e,this.error=!0;try{Error.captureStackTrace(this,i)}catch(e){}}var s=e(1);n.signup=s.toPromise(function(e,t,n,r){var s=this;if("undefined"==typeof r&&(r="undefined"==typeof n?"undefined"==typeof t?e:t:n,n={}),["http","https"].indexOf(s.type())===-1)return r(new i('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.'));if(!e)return r(new i("You must provide a username"));if(!t)return r(new i("You must provide a password"));var a="org.couchdb.user:"+e,u={name:e,password:t,roles:n.roles||[],type:"user",_id:a};o(s,u,n,r)}),n.signUp=n.signup,n.login=s.toPromise(function(e,t,n,o){var a=this;if("undefined"==typeof o&&(o=n,n={}),["http","https"].indexOf(a.type())===-1)return o(new i("this plugin only works for the http/https adapter"));if(!e)return o(new i("you must provide a username"));if(!t)return o(new i("you must provide a password"));var u=s.extend(!0,{method:"POST",url:s.getSessionUrl(a),headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,password:t})},n.ajax||{});s.ajax(u,r(o))}),n.logIn=n.login,n.logout=s.toPromise(function(e,t){var n=this;"undefined"==typeof t&&(t=e,e={});var o=s.extend(!0,{method:"DELETE",url:s.getSessionUrl(n)},e.ajax||{});s.ajax(o,r(t))}),n.logOut=n.logout,n.getSession=s.toPromise(function(e,t){var n=this;"undefined"==typeof t&&(t=e,e={});var o=s.getSessionUrl(n),i=s.extend(!0,{method:"GET",url:o},e.ajax||{});s.ajax(i,r(t))}),n.getUser=s.toPromise(function(e,t,n){var o=this;if("undefined"==typeof n&&(n="undefined"==typeof t?e:t,t={}),!e)return n(new i("you must provide a username"));var a=s.getUsersUrl(o),u=s.extend(!0,{method:"GET",url:a+"/"+encodeURIComponent("org.couchdb.user:"+e)},t.ajax||{});s.ajax(u,r(n))}),n.putUser=s.toPromise(function(e,t,n){var r=this;return"undefined"==typeof n&&(n="undefined"==typeof t?e:t,t={}),["http","https"].indexOf(r.type())===-1?n(new i('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.')):e?r.getUser(e,t,function(e,i){return e?n(e):void o(r,i,t,n)}):n(new i("You must provide a username"))}),n.changePassword=s.toPromise(function(e,t,n,o){var a=this;return"undefined"==typeof o&&(o="undefined"==typeof n?"undefined"==typeof t?e:t:n,n={}),["http","https"].indexOf(a.type())===-1?o(new i('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.')):e?t?a.getUser(e,n,function(e,i){if(e)return o(e);i.password=t;var u=s.getUsersUrl(a)+"/"+encodeURIComponent(i._id),c=s.extend(!0,{method:"PUT",url:u,body:i},n.ajax||{});s.ajax(c,r(o))}):o(new i("You must provide a password")):o(new i("You must provide a username"))}),n.changeUsername=s.toPromise(function(e,t,n,o){var a=this,u="org.couchdb.user:",c=function(e){return new s.Promise(function(t,n){s.ajax(e,r(function(e,r){return e?n(e):void t(r)}))})},f=function(e,t){var n=s.getUsersUrl(a)+"/"+encodeURIComponent(e._id),r=s.extend(!0,{method:"PUT",url:n,body:e},t.ajax);return c(r)};return"undefined"==typeof o&&(o=n,n={}),n.ajax=n.ajax||{},["http","https"].indexOf(a.type())===-1?o(new i('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.')):t?e?a.getUser(t,n).then(function(){var e=new i("user already exists");throw e.taken=!0,e},function(){return a.getUser(e,n)}).then(function(e){var r=s.clone(e);return delete r._rev,r._id=u+t,r.name=t,r.roles=n.roles||e.roles||{},f(r,n).then(function(){return e._deleted=!0,f(e,n)})}).then(function(e){o(null,e)}).catch(o):o(new i("You must provide a username to rename")):o(new i("You must provide a new username"))}),s.inherits(i,Error),"undefined"!=typeof window&&window.PouchDB&&window.PouchDB.plugin(n)},{1:1}]},{},[17])(17)});

















//============   LAYOUTS   
!function($){var min=Math.min,max=Math.max,round=Math.floor,isStr=function(e){return"string"===$.type(e)},runPluginCallbacks=function(Instance,a_fn){if($.isArray(a_fn))for(var i=0,c=a_fn.length;i<c;i++){var fn=a_fn[i];try{isStr(fn)&&(fn=eval(fn)),$.isFunction(fn)&&g(fn)(Instance)}catch(e){}}function g(e){return e}},u,m,b,v,ie,cm,$s,bs,bm,lb;$.layout={version:"1.4.4",revision:1.0404,browser:{},effects:{slide:{all:{duration:"fast"},north:{direction:"up"},south:{direction:"down"},east:{direction:"right"},west:{direction:"left"}},drop:{all:{duration:"slow"},north:{direction:"up"},south:{direction:"down"},east:{direction:"right"},west:{direction:"left"}},scale:{all:{duration:"fast"}},blind:{},clip:{},explode:{},fade:{},fold:{},puff:{},size:{all:{easing:"swing"}}},config:{optionRootKeys:"effects,panes,north,south,west,east,center".split(","),allPanes:"north,south,west,east,center".split(","),borderPanes:"north,south,west,east".split(","),oppositeEdge:{north:"south",south:"north",east:"west",west:"east"},offscreenCSS:{left:"-99999px",right:"auto"},offscreenReset:"offscreenReset",hidden:{visibility:"hidden"},visible:{visibility:"visible"},resizers:{cssReq:{position:"absolute",padding:0,margin:0,fontSize:"1px",textAlign:"left",overflow:"hidden"},cssDemo:{background:"#DDD",border:"none"}},togglers:{cssReq:{position:"absolute",display:"block",padding:0,margin:0,overflow:"hidden",textAlign:"center",fontSize:"1px",cursor:"pointer",zIndex:1},cssDemo:{background:"#AAA"}},content:{cssReq:{position:"relative"},cssDemo:{overflow:"auto",padding:"10px"},cssDemoPane:{overflow:"hidden",padding:0}},panes:{cssReq:{position:"absolute",margin:0},cssDemo:{padding:"10px",background:"#FFF",border:"1px solid #BBB",overflow:"auto"}},north:{side:"top",sizeType:"Height",dir:"horz",cssReq:{top:0,bottom:"auto",left:0,right:0,width:"auto"}},south:{side:"bottom",sizeType:"Height",dir:"horz",cssReq:{top:"auto",bottom:0,left:0,right:0,width:"auto"}},east:{side:"right",sizeType:"Width",dir:"vert",cssReq:{left:"auto",right:0,top:"auto",bottom:"auto",height:"auto"}},west:{side:"left",sizeType:"Width",dir:"vert",cssReq:{left:0,right:"auto",top:"auto",bottom:"auto",height:"auto"}},center:{dir:"center",cssReq:{left:"auto",right:"auto",top:"auto",bottom:"auto",height:"auto",width:"auto"}}},callbacks:{},getParentPaneElem:function(e){var t=$(e),i=t.data("layout")||t.data("parentLayout");if(i){var s=i.container;if(s.data("layoutPane"))return s;var n=s.closest("."+$.layout.defaults.panes.paneClass);if(n.data("layoutPane"))return n}return null},getParentPaneInstance:function(e){var t=$.layout.getParentPaneElem(e);return t?t.data("layoutPane"):null},getParentLayoutInstance:function(e){var t=$.layout.getParentPaneElem(e);return t?t.data("parentLayout"):null},getEventObject:function(e){return"object"==typeof e&&e.stopPropagation?e:null},parsePaneName:function(e){var t=$.layout.getEventObject(e),i=e;return t&&(t.stopPropagation(),i=$(this).data("layoutEdge")),i&&!/^(west|east|north|south|center)$/.test(i)&&($.layout.msg('LAYOUT ERROR - Invalid pane-name: "'+i+'"'),i="error"),i},plugins:{draggable:!!$.fn.draggable,effects:{core:!!$.effects,slide:$.effects&&($.effects.slide||$.effects.effect&&$.effects.effect.slide)}},onCreate:[],onLoad:[],onReady:[],onDestroy:[],onUnload:[],afterOpen:[],afterClose:[],scrollbarWidth:function(){return window.scrollbarWidth||$.layout.getScrollbarSize("width")},scrollbarHeight:function(){return window.scrollbarHeight||$.layout.getScrollbarSize("height")},getScrollbarSize:function(e){var t=$('<div style="position: absolute; top: -10000px; left: -10000px; width: 100px; height: 100px; border: 0; overflow: scroll;"></div>').appendTo("body"),i={width:t.outerWidth-t[0].clientWidth,height:100-t[0].clientHeight};return t.remove(),window.scrollbarWidth=i.width,window.scrollbarHeight=i.height,e.match(/^(width|height)$/)?i[e]:i},disableTextSelection:function(){var e=$(document),t="textSelectionDisabled",i="textSelectionInitialized";$.fn.disableSelection&&(e.data(i)||e.on("mouseup",$.layout.enableTextSelection).data(i,!0),e.data(t)||e.disableSelection().data(t,!0))},enableTextSelection:function(){var e=$(document),t="textSelectionDisabled";$.fn.enableSelection&&e.data(t)&&e.enableSelection().data(t,!1)},showInvisibly:function(e,t){if(e&&e.length&&(t||"none"===e.css("display"))){var i=e[0].style,s={display:i.display||"",visibility:i.visibility||""};return e.css({display:"block",visibility:"hidden"}),s}return{}},getElementDimensions:function(e,t){var i,s,n,o={css:{},inset:{}},a=o.css,l={bottom:0},r=$.layout.cssNum,d=Math.round,c=e.offset();return o.offsetLeft=c.left,o.offsetTop=c.top,t||(t={}),$.each("Left,Right,Top,Bottom".split(","),function(r,d){i=a["border"+d]=$.layout.borderWidth(e,d),s=a["padding"+d]=$.layout.cssNum(e,"padding"+d),n=d.toLowerCase(),o.inset[n]=t[n]>=0?t[n]:s,l[n]=o.inset[n]+i}),a.width=d(e.width()),a.height=d(e.height()),a.top=r(e,"top",!0),a.bottom=r(e,"bottom",!0),a.left=r(e,"left",!0),a.right=r(e,"right",!0),o.outerWidth=d(e.outerWidth()),o.outerHeight=d(e.outerHeight()),o.innerWidth=max(0,o.outerWidth-l.left-l.right),o.innerHeight=max(0,o.outerHeight-l.top-l.bottom),o.layoutWidth=d(e.innerWidth()),o.layoutHeight=d(e.innerHeight()),o},getElementStyles:function(e,t){var i,s,n,o,a,l,r={},d=e[0].style,c=t.split(","),u="Top,Bottom,Left,Right".split(","),p="Color,Style,Width".split(",");for(o=0;o<c.length;o++)if((i=c[o]).match(/(border|padding|margin)$/))for(a=0;a<4;a++)if(s=u[a],"border"===i)for(l=0;l<3;l++)r[i+s+(n=p[l])]=d[i+s+n];else r[i+s]=d[i+s];else r[i]=d[i];return r},cssWidth:function(e,t){if(t<=0)return 0;var i=$.layout.browser,s=i.boxModel?i.boxSizing?e.css("boxSizing"):"content-box":"border-box",n=$.layout.borderWidth,o=$.layout.cssNum,a=t;return"border-box"!==s&&(a-=n(e,"Left")+n(e,"Right")),"content-box"===s&&(a-=o(e,"paddingLeft")+o(e,"paddingRight")),max(0,a)},cssHeight:function(e,t){if(t<=0)return 0;var i=$.layout.browser,s=i.boxModel?i.boxSizing?e.css("boxSizing"):"content-box":"border-box",n=$.layout.borderWidth,o=$.layout.cssNum,a=t;return"border-box"!==s&&(a-=n(e,"Top")+n(e,"Bottom")),"content-box"===s&&(a-=o(e,"paddingTop")+o(e,"paddingBottom")),max(0,a)},cssNum:function(e,t,i){e.jquery||(e=$(e));var s=$.layout.showInvisibly(e),n=$.css(e[0],t,!0),o=i&&"auto"==n?n:Math.round(parseFloat(n)||0);return e.css(s),o},borderWidth:function(e,t){e.jquery&&(e=e[0]);var i="border"+t.substr(0,1).toUpperCase()+t.substr(1);return"none"===$.css(e,i+"Style",!0)?0:Math.round(parseFloat($.css(e,i+"Width",!0))||0)},isMouseOverElem:function(e,t){var i=$(t||this),s=i.offset(),n=s.top,o=s.left,a=o+i.outerWidth(),l=n+i.outerHeight(),r=e.pageX,d=e.pageY;return $.layout.browser.msie&&r<0&&d<0||r>=o&&r<=a&&d>=n&&d<=l},msg:function(e,t,i,s){if($.isPlainObject(e)&&window.debugData){"string"==typeof t?(s=i,i=t):"object"==typeof i&&(s=i,i=null);var n=i||"log( <object> )",o=$.extend({sort:!1,returnHTML:!1,display:!1},s);!0===t||o.display?debugData(e,n,o):window.console&&console.log(debugData(e,n,o))}else if(t)alert(e);else if(window.console)console.log(e);else{var a=$("#layoutLogger");a.length||(a=function(){var e=$.support.fixedPosition?"fixed":"absolute",t=$('<div id="layoutLogger" style="position: '+e+'; top: 5px; z-index: 999999; max-width: 25%; overflow: hidden; border: 1px solid #000; border-radius: 5px; background: #FBFBFB; box-shadow: 0 2px 10px rgba(0,0,0,0.3);"><div style="font-size: 13px; font-weight: bold; padding: 5px 10px; background: #F6F6F6; border-radius: 5px 5px 0 0; cursor: move;"><span style="float: right; padding-left: 7px; cursor: pointer;" title="Remove Console" onclick="$(this).closest(\'#layoutLogger\').remove()">X</span>Layout console.log</div><ul style="font-size: 13px; font-weight: none; list-style: none; margin: 0; padding: 0 0 2px;"></ul></div>').appendTo("body");t.css("left",$(window).width()-t.outerWidth()-5),$.ui.draggable&&t.draggable({handle:":first-child"});return t}()),a.children("ul").append('<li style="padding: 4px 10px; margin: 0; border-top: 1px solid #CCC;">'+e.replace(/\</g,"&lt;").replace(/\>/g,"&gt;")+"</li>")}}},u=navigator.userAgent.toLowerCase(),m=/(chrome)[ \/]([\w.]+)/.exec(u)||/(webkit)[ \/]([\w.]+)/.exec(u)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(u)||/(msie) ([\w.]+)/.exec(u)||u.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(u)||[],b=m[1]||"",v=m[2]||0,ie="msie"===b,cm=document.compatMode,$s=$.support,bs=void 0!==$s.boxSizing?$s.boxSizing:$s.boxSizingReliable,bm=!ie||!cm||"CSS1Compat"===cm||$s.boxModel||!1,lb=$.layout.browser={version:v,safari:"webkit"===b,webkit:"chrome"===b,msie:ie,isIE6:ie&&6==v,boxModel:bm,boxSizing:!!("function"==typeof bs?bs():bs)},b&&(lb[b]=!0),bm||cm||$(function(){lb.boxModel=$s.boxModel}),$.layout.defaults={name:"",containerClass:"ui-layout-container",inset:null,scrollToBookmarkOnLoad:!0,resizeWithWindow:!0,resizeWithWindowDelay:200,resizeWithWindowMaxDelay:0,maskPanesEarly:!1,onresizeall_start:null,onresizeall_end:null,onload_start:null,onload_end:null,onunload_start:null,onunload_end:null,initPanes:!0,showErrorMessages:!0,showDebugMessages:!1,zIndex:null,zIndexes:{pane_normal:0,content_mask:1,resizer_normal:2,pane_sliding:100,pane_animate:1e3,resizer_drag:1e4},errors:{pane:"pane",selector:"selector",addButtonError:"Error Adding Button\nInvalid ",containerMissing:"UI Layout Initialization Error\nThe specified layout-container does not exist.",centerPaneMissing:"UI Layout Initialization Error\nThe center-pane element does not exist.\nThe center-pane is a required element.",noContainerHeight:"UI Layout Initialization Warning\nThe layout-container \"CONTAINER\" has no height.\nTherefore the layout is 0-height and hence 'invisible'!",callbackError:"UI Layout Callback Error\nThe EVENT callback is not a valid function."},panes:{applyDemoStyles:!1,closable:!0,resizable:!0,slidable:!0,initClosed:!1,initHidden:!1,contentSelector:".ui-layout-content",contentIgnoreSelector:".ui-layout-ignore",findNestedContent:!1,paneClass:"ui-layout-pane",resizerClass:"ui-layout-resizer",togglerClass:"ui-layout-toggler",buttonClass:"ui-layout-button",minSize:0,maxSize:0,spacing_open:6,spacing_closed:6,togglerLength_open:50,togglerLength_closed:50,togglerAlign_open:"center",togglerAlign_closed:"center",togglerContent_open:"",togglerContent_closed:"",resizerDblClickToggle:!0,autoResize:!0,autoReopen:!0,resizerDragOpacity:1,maskContents:!1,maskObjects:!1,maskZindex:null,resizingGrid:!1,livePaneResizing:!1,liveContentResizing:!1,liveResizingTolerance:1,sliderCursor:"pointer",slideTrigger_open:"click",slideTrigger_close:"mouseleave",slideDelay_open:300,slideDelay_close:300,hideTogglerOnSlide:!1,preventQuickSlideClose:$.layout.browser.webkit,preventPrematureSlideClose:!1,tips:{Open:"Open",Close:"Close",Resize:"Resize",Slide:"Slide Open",Pin:"Pin",Unpin:"Un-Pin",noRoomToOpen:"Not enough room to show this panel.",minSizeWarning:"Panel has reached its minimum size",maxSizeWarning:"Panel has reached its maximum size"},showOverflowOnHover:!1,enableCursorHotkey:!0,customHotkeyModifier:"SHIFT",fxName:"slide",fxSpeed:null,fxSettings:{},fxOpacityFix:!0,animatePaneSizing:!1,children:null,containerSelector:"",initChildren:!0,destroyChildren:!0,resizeChildren:!0,triggerEventsOnLoad:!1,triggerEventsDuringLiveResize:!0,onshow_start:null,onshow_end:null,onhide_start:null,onhide_end:null,onopen_start:null,onopen_end:null,onclose_start:null,onclose_end:null,onresize_start:null,onresize_end:null,onsizecontent_start:null,onsizecontent_end:null,onswap_start:null,onswap_end:null,ondrag_start:null,ondrag_end:null},north:{paneSelector:".ui-layout-north",size:"auto",resizerCursor:"n-resize",customHotkey:""},south:{paneSelector:".ui-layout-south",size:"auto",resizerCursor:"s-resize",customHotkey:""},east:{paneSelector:".ui-layout-east",size:200,resizerCursor:"e-resize",customHotkey:""},west:{paneSelector:".ui-layout-west",size:200,resizerCursor:"w-resize",customHotkey:""},center:{paneSelector:".ui-layout-center",minWidth:0,minHeight:0}},$.layout.optionsMap={layout:"name,instanceKey,stateManagement,effects,inset,zIndexes,errors,zIndex,scrollToBookmarkOnLoad,showErrorMessages,maskPanesEarly,outset,resizeWithWindow,resizeWithWindowDelay,resizeWithWindowMaxDelay,onresizeall,onresizeall_start,onresizeall_end,onload,onload_start,onload_end,onunload,onunload_start,onunload_end".split(","),center:"paneClass,contentSelector,contentIgnoreSelector,findNestedContent,applyDemoStyles,triggerEventsOnLoad,showOverflowOnHover,maskContents,maskObjects,liveContentResizing,containerSelector,children,initChildren,resizeChildren,destroyChildren,onresize,onresize_start,onresize_end,onsizecontent,onsizecontent_start,onsizecontent_end".split(","),noDefault:"paneSelector,resizerCursor,customHotkey".split(",")},$.layout.transformData=function(e,t){var i,s,n,o,a,l,r,d=t?{panes:{},center:{}}:{};if("object"!=typeof e)return d;for(s in e)for(i=d,a=e[s],r=(n=s.split("__")).length-1,l=0;l<=r;l++)o=n[l],l===r?$.isPlainObject(a)?i[o]=$.layout.transformData(a):i[o]=a:(i[o]||(i[o]={}),i=i[o]);return d},$.layout.backwardCompatibility={map:{applyDefaultStyles:"applyDemoStyles",childOptions:"children",initChildLayout:"initChildren",destroyChildLayout:"destroyChildren",resizeChildLayout:"resizeChildren",resizeNestedLayout:"resizeChildren",resizeWhileDragging:"livePaneResizing",resizeContentWhileDragging:"liveContentResizing",triggerEventsWhileDragging:"triggerEventsDuringLiveResize",maskIframesOnResize:"maskContents",useStateCookie:"stateManagement.enabled","cookie.autoLoad":"stateManagement.autoLoad","cookie.autoSave":"stateManagement.autoSave","cookie.keys":"stateManagement.stateKeys","cookie.name":"stateManagement.cookie.name","cookie.domain":"stateManagement.cookie.domain","cookie.path":"stateManagement.cookie.path","cookie.expires":"stateManagement.cookie.expires","cookie.secure":"stateManagement.cookie.secure",noRoomToOpenTip:"tips.noRoomToOpen",togglerTip_open:"tips.Close",togglerTip_closed:"tips.Open",resizerTip:"tips.Resize",sliderTip:"tips.Slide"},renameOptions:function(e){var t,i,s,n=$.layout.backwardCompatibility.map;for(var o in n)void 0!==(s=(t=a(o)).branch[t.key])&&((i=a(n[o],!0)).branch[i.key]=s,delete t.branch[t.key]);function a(t,i){for(var s,n=t.split("."),o=n.length-1,a={branch:e,key:n[o]},l=0;l<o;l++)s=n[l],null==a.branch[s]?a.branch=i?a.branch[s]={}:{}:a.branch=a.branch[s];return a}},renameAllOptions:function(e){var t=$.layout.backwardCompatibility.renameOptions;return t(e),e.defaults&&("object"!=typeof e.panes&&(e.panes={}),$.extend(!0,e.panes,e.defaults),delete e.defaults),e.panes&&t(e.panes),$.each($.layout.config.allPanes,function(i,s){e[s]&&t(e[s])}),e}},$.fn.layout=function(opts){var browser=$.layout.browser,_c=$.layout.config,cssW=$.layout.cssWidth,cssH=$.layout.cssHeight,elDims=$.layout.getElementDimensions,styles=$.layout.getElementStyles,evtObj=$.layout.getEventObject,evtPane=$.layout.parsePaneName,options=$.extend(!0,{},$.layout.defaults),effects=options.effects=$.extend(!0,{},$.layout.effects),state={id:"layout"+$.now(),initialized:!1,paneResizing:!1,panesSliding:{},container:{innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0,layoutWidth:0,layoutHeight:0},north:{childIdx:0},south:{childIdx:0},east:{childIdx:0},west:{childIdx:0},center:{childIdx:0}},children={north:null,south:null,east:null,west:null,center:null},timer={data:{},set:function(e,t,i){timer.clear(e),timer.data[e]=setTimeout(t,i)},clear:function(e){var t=timer.data;t[e]&&(clearTimeout(t[e]),delete t[e])}},_log=function(e,t,i){var s=options;return(s.showErrorMessages&&!i||i&&s.showDebugMessages)&&$.layout.msg(s.name+" / "+e,!1!==t),!1},_runCallbacks=function(evtName,pane,skipBoundEvents){var hasPane=pane&&isStr(pane),s=hasPane?state[pane]:state,o=hasPane?options[pane]:options,lName=options.name,lng=evtName+(evtName.match(/_/)?"":"_end"),shrt=lng.match(/_end$/)?lng.substr(0,lng.length-4):"",fn=o[lng]||o[shrt],retVal="NC",args=[],$P=hasPane?$Ps[pane]:0;if(hasPane&&!$P)return retVal;if(hasPane||"boolean"!==$.type(pane)||(skipBoundEvents=pane,pane=""),fn)try{isStr(fn)&&(fn.match(/,/)?(args=fn.split(","),fn=eval(args[0])):fn=eval(fn)),$.isFunction(fn)&&(retVal=args.length?g(fn)(args[1]):hasPane?g(fn)(pane,$Ps[pane],s,o,lName):g(fn)(Instance,s,o,lName))}catch(e){_log(options.errors.callbackError.replace(/EVENT/,$.trim((pane||"")+" "+lng)),!1),"string"===$.type(e)&&string.length&&_log("Exception:  "+e,!1)}return skipBoundEvents||!1===retVal||(hasPane?(o=options[pane],s=state[pane],$P.triggerHandler("layoutpane"+lng,[pane,$P,s,o,lName]),shrt&&$P.triggerHandler("layoutpane"+shrt,[pane,$P,s,o,lName])):($N.triggerHandler("layout"+lng,[Instance,s,o,lName]),shrt&&$N.triggerHandler("layout"+shrt,[Instance,s,o,lName]))),hasPane&&"onresize_end"===evtName&&resizeChildren(pane+"",!0),retVal;function g(e){return e}},_fixIframe=function(e){if(!browser.mozilla){var t=$Ps[e];"IFRAME"===state[e].tagName?t.css(_c.hidden).css(_c.visible):t.find("IFRAME").css(_c.hidden).css(_c.visible)}},cssSize=function(e,t){return("horz"==_c[e].dir?cssH:cssW)($Ps[e],t)},cssMinDims=function(e){var t=$Ps[e],i=_c[e].dir,s={minWidth:1001-cssW(t,1e3),minHeight:1001-cssH(t,1e3)};return"horz"===i&&(s.minSize=s.minHeight),"vert"===i&&(s.minSize=s.minWidth),s},setOuterWidth=function(e,t,i){var s,n=e;isStr(e)?n=$Ps[e]:e.jquery||(n=$(e)),s=cssW(n,t),n.css({width:s}),s>0?i&&n.data("autoHidden")&&n.innerHeight()>0&&(n.show().data("autoHidden",!1),browser.mozilla||n.css(_c.hidden).css(_c.visible)):i&&!n.data("autoHidden")&&n.hide().data("autoHidden",!0)},setOuterHeight=function(e,t,i){var s,n=e;isStr(e)?n=$Ps[e]:e.jquery||(n=$(e)),s=cssH(n,t),n.css({height:s,visibility:"visible"}),s>0&&n.innerWidth()>0?i&&n.data("autoHidden")&&(n.show().data("autoHidden",!1),browser.mozilla||n.css(_c.hidden).css(_c.visible)):i&&!n.data("autoHidden")&&n.hide().data("autoHidden",!0)},_parseSize=function(e,t,i){if(i||(i=_c[e].dir),isStr(t)&&t.match(/%/)&&(t="100%"===t?-1:parseInt(t,10)/100),0===t)return 0;if(t>=1)return parseInt(t,10);var s=options,n=0;if("horz"==i?n=sC.innerHeight-($Ps.north?s.north.spacing_open:0)-($Ps.south?s.south.spacing_open:0):"vert"==i&&(n=sC.innerWidth-($Ps.west?s.west.spacing_open:0)-($Ps.east?s.east.spacing_open:0)),-1===t)return n;if(t>0)return round(n*t);if("center"==e)return 0;var o="horz"===i?"height":"width",a=$Ps[e],l="height"===o&&$Cs[e],r=$.layout.showInvisibly(a),d=a.css(o),c=l?l.css(o):0;return a.css(o,"auto"),l&&l.css(o,"auto"),t="height"===o?a.outerHeight():a.outerWidth(),a.css(o,d).css(r),l&&l.css(o,c),t},getPaneSize=function(e,t){var i=$Ps[e],s=options[e],n=state[e],o=t?s.spacing_open:0,a=t?s.spacing_closed:0;return!i||n.isHidden?0:n.isClosed||n.isSliding&&t?a:"horz"===_c[e].dir?i.outerHeight()+o:i.outerWidth()+o},setSizeLimits=function(e,t){if(isInitialized()){var i=options[e],s=state[e],n=_c[e],o=n.dir,a=(n.sizeType.toLowerCase(),null!=t?t:s.isSliding),l=($Ps[e],i.spacing_open),r=_c.oppositeEdge[e],d=state[r],c=$Ps[r],u=!c||!1===d.isVisible||d.isSliding?0:"horz"==o?c.outerHeight():c.outerWidth(),p=(!c||d.isHidden?0:options[r][!1!==d.isClosed?"spacing_closed":"spacing_open"])||0,g="horz"==o?sC.innerHeight:sC.innerWidth,h=cssMinDims("center"),f="horz"==o?max(options.center.minHeight,h.minHeight):max(options.center.minWidth,h.minWidth),m=g-l-(a?0:_parseSize("center",f,o)+u+p),b=s.minSize=max(_parseSize(e,i.minSize),cssMinDims(e).minSize),v=s.maxSize=min(i.maxSize?_parseSize(e,i.maxSize):1e5,m),y=s.resizerPosition={},z=sC.inset.top,$=sC.inset.left,C=sC.innerWidth,w=sC.innerHeight,S=i.spacing_open;switch(e){case"north":y.min=z+b,y.max=z+v;break;case"west":y.min=$+b,y.max=$+v;break;case"south":y.min=z+w-v-S,y.max=z+w-b-S;break;case"east":y.min=$+C-v-S,y.max=$+C-b-S}}},calcNewCenterPaneDims=function(){var e={top:getPaneSize("north",!0),bottom:getPaneSize("south",!0),left:getPaneSize("west",!0),right:getPaneSize("east",!0),width:0,height:0};return e.width=sC.innerWidth-e.left-e.right,e.height=sC.innerHeight-e.bottom-e.top,e.top+=sC.inset.top,e.bottom+=sC.inset.bottom,e.left+=sC.inset.left,e.right+=sC.inset.right,e},getHoverClasses=function(e,t){var i=$(e),s=i.data("layoutRole"),n=i.data("layoutEdge"),o=options[n][s+"Class"],a="-"+n,l="-hover ",r=i.hasClass(o+"-closed")?"-closed":"-open",d="-closed"===r?"-open":"-closed",c=o+l+(o+a+l)+(o+r+l)+(o+a+r+l);return t&&(c+=o+d+l+(o+a+d+l)),"resizer"==s&&i.hasClass(o+"-sliding")&&(c+=o+"-sliding"+l+(o+a)+"-sliding"+l),$.trim(c)},addHover=function(e,t){var i=$(t||this);e&&"toggler"===i.data("layoutRole")&&e.stopPropagation(),i.addClass(getHoverClasses(i))},removeHover=function(e,t){var i=$(t||this);i.removeClass(getHoverClasses(i,!0))},onResizerEnter=function(e){var t=$(this).data("layoutEdge"),i=state[t];$(document);i.isResizing||state.paneResizing||options.maskPanesEarly&&showMasks(t,{resizing:!0})},onResizerLeave=function(e,t){var i=t||this,s=$(i).data("layoutEdge"),n=s+"ResizerLeave";$(document);timer.clear(s+"_openSlider"),timer.clear(n),t?options.maskPanesEarly&&!state.paneResizing&&hideMasks():timer.set(n,function(){onResizerLeave(e,i)},200)},_create=function(){initOptions();var e=options,t=state;return t.creatingLayout=!0,runPluginCallbacks(Instance,$.layout.onCreate),!1===_runCallbacks("onload_start")?"cancel":(_initContainer(),initHotkeys(),$(window).bind("unload."+sID,unload),runPluginCallbacks(Instance,$.layout.onLoad),e.initPanes&&_initLayoutElements(),delete t.creatingLayout,state.initialized)},isInitialized=function(){return!(!state.initialized&&!state.creatingLayout)||_initLayoutElements()},_initLayoutElements=function(e){var t=options;if(!$N.is(":visible"))return!e&&browser.webkit&&"BODY"===$N[0].tagName&&setTimeout(function(){_initLayoutElements(!0)},50),!1;if(!getPane("center").length)return _log(t.errors.centerPaneMissing);if(state.creatingLayout=!0,$.extend(sC,elDims($N,t.inset)),initPanes(),t.scrollToBookmarkOnLoad){var i=self.location;i.hash&&i.replace(i.hash)}return Instance.hasParentLayout?t.resizeWithWindow=!1:t.resizeWithWindow&&$(window).bind("resize."+sID,windowResize),delete state.creatingLayout,state.initialized=!0,runPluginCallbacks(Instance,$.layout.onReady),_runCallbacks("onload_end"),!0},createChildren=function(e,t){var i=evtPane.call(this,e),s=$Ps[i];if(s){var n=$Cs[i],o=state[i],a=options[i],l=options.stateManagement||{},r=t?a.children=t:a.children;if($.isPlainObject(r))r=[r];else if(!r||!$.isArray(r))return;$.each(r,function(e,t){$.isPlainObject(t)&&(t.containerSelector?s.find(t.containerSelector):n||s).each(function(){var e=$(this),s=e.data("layout");if(!s){if(setInstanceKey({container:e,options:t},o),l.includeChildren&&state.stateData[i]){var n=(state.stateData[i].children||{})[t.instanceKey],a=t.stateManagement||(t.stateManagement={autoLoad:!0});!0===a.autoLoad&&n&&(a.autoSave=!1,a.includeChildren=!0,a.autoLoad=$.extend(!0,{},n))}(s=e.layout(t))&&refreshChildren(i,s)}})})}},setInstanceKey=function(e,t){var i=e.container,s=e.options,n=s.stateManagement,o=s.instanceKey||i.data("layoutInstanceKey");return o||(o=(n&&n.cookie?n.cookie.name:"")||s.name),o=o?o.replace(/[^\w-]/gi,"_").replace(/_{2,}/g,"_"):"layout"+ ++t.childIdx,s.instanceKey=o,i.data("layoutInstanceKey",o),o},refreshChildren=function(e,t){var i,s=$Ps[e],n=children[e],o=state[e];$.isPlainObject(n)&&($.each(n,function(e,t){t.destroyed&&delete n[e]}),$.isEmptyObject(n)&&(n=children[e]=null)),t||n||(t=s.data("layout")),t&&(t.hasParentLayout=!0,i=t.options,setInstanceKey(t,o),n||(n=children[e]={}),n[i.instanceKey]=t.container.data("layout")),Instance[e].children=children[e],t||createChildren(e)},windowResize=function(){var e=options,t=Number(e.resizeWithWindowDelay);t<10&&(t=100),timer.clear("winResize"),timer.set("winResize",function(){timer.clear("winResize"),timer.clear("winResizeRepeater");var t=elDims($N,e.inset);t.innerWidth===sC.innerWidth&&t.innerHeight===sC.innerHeight||resizeAll()},t),timer.data.winResizeRepeater||setWindowResizeRepeater()},setWindowResizeRepeater=function(){var e=Number(options.resizeWithWindowMaxDelay);e>0&&timer.set("winResizeRepeater",function(){setWindowResizeRepeater(),resizeAll()},e)},unload=function(){_runCallbacks("onunload_start"),runPluginCallbacks(Instance,$.layout.onUnload),_runCallbacks("onunload_end")},_initContainer=function(){var e,t,i=$N[0],s=$("html"),n=sC.tagName=i.tagName,o=sC.id=i.id,a=sC.className=i.className,l=options,r=l.name,d="position,margin,padding,border",c="layoutCSS",u={},p="hidden",g=$N.data("parentLayout"),h=$N.data("layoutEdge"),f=g&&h,m=$.layout.cssNum;sC.selector=$N.selector.split(".slice")[0],sC.ref=(l.name?l.name+" layout / ":"")+n+(o?"#"+o:a?".["+a+"]":""),sC.isBody="BODY"===n,f||sC.isBody||(g=(e=$N.closest("."+$.layout.defaults.panes.paneClass)).data("parentLayout"),h=e.data("layoutEdge"),f=g&&h),$N.data({layout:Instance,layoutContainer:sID}).addClass(l.containerClass);var b={destroy:"",initPanes:"",resizeAll:"resizeAll",resize:"resizeAll"};for(r in b)$N.bind("layout"+r.toLowerCase()+"."+sID,Instance[b[r]||r]);f&&(Instance.hasParentLayout=!0,g.refreshChildren(h,Instance)),$N.data(c)||(sC.isBody?($N.data(c,$.extend(styles($N,d),{height:$N.css("height"),overflow:$N.css("overflow"),overflowX:$N.css("overflowX"),overflowY:$N.css("overflowY")})),s.data(c,$.extend(styles(s,"padding"),{height:"auto",overflow:s.css("overflow"),overflowX:s.css("overflowX"),overflowY:s.css("overflowY")}))):$N.data(c,styles($N,d+",top,bottom,left,right,width,height,overflow,overflowX,overflowY")));try{if(u={overflow:p,overflowX:p,overflowY:p},$N.css(u),l.inset&&!$.isPlainObject(l.inset)&&(t=parseInt(l.inset,10)||0,l.inset={top:t,bottom:t,left:t,right:t}),sC.isBody)l.outset?$.isPlainObject(l.outset)||(t=parseInt(l.outset,10)||0,l.outset={top:t,bottom:t,left:t,right:t}):l.outset={top:m(s,"paddingTop"),bottom:m(s,"paddingBottom"),left:m(s,"paddingLeft"),right:m(s,"paddingRight")},s.css(u).css({height:"100%",border:"none",padding:0,margin:0}),browser.isIE6?($N.css({width:"100%",height:"100%",border:"none",padding:0,margin:0,position:"relative"}),l.inset||(l.inset=elDims($N).inset)):($N.css({width:"auto",height:"auto",margin:0,position:"absolute"}),$N.css(l.outset)),$.extend(sC,elDims($N,l.inset));else{var v=$N.css("position");v&&v.match(/(fixed|absolute|relative)/)||$N.css("position","relative"),$N.is(":visible")&&($.extend(sC,elDims($N,l.inset)),sC.innerHeight<1&&_log(l.errors.noContainerHeight.replace(/CONTAINER/,sC.ref)))}m($N,"minWidth")&&$N.parent().css("overflowX","auto"),m($N,"minHeight")&&$N.parent().css("overflowY","auto")}catch(e){}},initHotkeys=function(e){e=e?e.split(","):_c.borderPanes,$.each(e,function(e,t){var i=options[t];if(i.enableCursorHotkey||i.customHotkey)return $(document).bind("keydown."+sID,keyDown),!1})},initOptions=function(){var e,t,i,s,n,o,a;if(opts=$.layout.transformData(opts,!0),opts=$.layout.backwardCompatibility.renameAllOptions(opts),!$.isEmptyObject(opts.panes)){for(e=$.layout.optionsMap.noDefault,n=0,o=e.length;n<o;n++)i=e[n],delete opts.panes[i];for(e=$.layout.optionsMap.layout,n=0,o=e.length;n<o;n++)i=e[n],delete opts.panes[i]}e=$.layout.optionsMap.layout;var l=$.layout.config.optionRootKeys;for(i in opts)s=opts[i],$.inArray(i,l)<0&&$.inArray(i,e)<0&&(opts.panes[i]||(opts.panes[i]=$.isPlainObject(s)?$.extend(!0,{},s):s),delete opts[i]);$.extend(!0,options,opts),$.each(_c.allPanes,function(s,n){if(_c[n]=$.extend(!0,{},_c.panes,_c[n]),t=options.panes,a=options[n],"center"===n)for(e=$.layout.optionsMap.center,s=0,o=e.length;s<o;s++)i=e[s],opts.center[i]||!opts.panes[i]&&a[i]||(a[i]=t[i]);else a=options[n]=$.extend(!0,{},t,a),function(e){var t=options[e],i=options.panes;t.fxSettings||(t.fxSettings={});i.fxSettings||(i.fxSettings={});$.each(["_open","_close","_size"],function(s,n){var o="fxName"+n,a="fxSpeed"+n,l="fxSettings"+n,r=t[o]=t[o]||i[o]||t.fxName||i.fxName||"none",d=$.effects&&($.effects[r]||$.effects.effect&&$.effects.effect[r]);"none"!==r&&options.effects[r]&&d||(r=t[o]="none");var c=options.effects[r]||{},u=c.all||null,p=c[e]||null;t[a]=t[a]||i[a]||t.fxSpeed||i.fxSpeed||null,t[l]=$.extend(!0,{},u,p,i.fxSettings,t.fxSettings,i[l],t[l])}),delete t.fxName,delete t.fxSpeed,delete t.fxSettings}(n),a.resizerClass||(a.resizerClass="ui-layout-resizer"),a.togglerClass||(a.togglerClass="ui-layout-toggler");a.paneClass||(a.paneClass="ui-layout-pane")});var r=opts.zIndex,d=options.zIndexes;r>0&&(d.pane_normal=r,d.content_mask=max(r+1,d.content_mask),d.resizer_normal=max(r+2,d.resizer_normal)),delete options.panes},getPane=function(e){var t=options[e].paneSelector;if("#"===t.substr(0,1))return $N.find(t).eq(0);var i=$N.children(t).eq(0);return i.length?i:$N.children("form:first").children(t).eq(0)},initPanes=function(e){evtPane(e),$.each(_c.allPanes,function(e,t){addPane(t,!0)}),initHandles(),$.each(_c.borderPanes,function(e,t){$Ps[t]&&state[t].isVisible&&(setSizeLimits(t),makePaneFit(t))}),sizeMidPanes("center"),$.each(_c.allPanes,function(e,t){afterInitPane(t)})},addPane=function(e,t){if(t||isInitialized()){var i,s,n,o=options[e],a=state[e],l=_c[e],r=l.dir,d=(a.fx,o.spacing_open,"center"===e),c={},u=$Ps[e];if(u?removePane(e,!1,!0,!1):$Cs[e]=!1,(u=$Ps[e]=getPane(e)).length){if(!u.data("layoutCSS")){u.data("layoutCSS",styles(u,"position,top,left,bottom,right,width,height,overflow,zIndex,display,backgroundColor,padding,margin,border"))}Instance[e]={name:e,pane:$Ps[e],content:$Cs[e],options:options[e],state:state[e],children:children[e]},u.data({parentLayout:Instance,layoutPane:Instance[e],layoutEdge:e,layoutRole:"pane"}).css(l.cssReq).css("zIndex",options.zIndexes.pane_normal).css(o.applyDemoStyles?l.cssDemo:{}).addClass(o.paneClass+" "+o.paneClass+"-"+e).bind("mouseenter."+sID,addHover).bind("mouseleave."+sID,removeHover);var p,g={hide:"",show:"",toggle:"",close:"",open:"",slideOpen:"",slideClose:"",slideToggle:"",size:"sizePane",sizePane:"sizePane",sizeContent:"",sizeHandles:"",enableClosable:"",disableClosable:"",enableSlideable:"",disableSlideable:"",enableResizable:"",disableResizable:"",swapPanes:"swapPanes",swap:"swapPanes",move:"swapPanes",removePane:"removePane",remove:"removePane",createChildren:"",resizeChildren:"",resizeAll:"resizeAll",resizeLayout:"resizeAll"};for(p in g)u.bind("layoutpane"+p.toLowerCase()+"."+sID,Instance[g[p]||p]);initContent(e,!1),d||(i=a.size=_parseSize(e,o.size),s=_parseSize(e,o.minSize)||1,n=_parseSize(e,o.maxSize)||1e5,i>0&&(i=max(min(i,n),s)),a.autoResize=o.autoResize,a.isClosed=!1,a.isSliding=!1,a.isResizing=!1,a.isHidden=!1,a.pins||(a.pins=[])),a.tagName=u[0].tagName,a.edge=e,a.noRoom=!1,a.isVisible=!0,setPanePosition(e),"horz"===r?c.height=cssH(u,i):"vert"===r&&(c.width=cssW(u,i)),u.css(c),"horz"!=r&&sizeMidPanes(e,!0),state.initialized&&(initHandles(e),initHotkeys(e)),o.initClosed&&o.closable&&!o.initHidden?close(e,!0,!0):o.initHidden||o.initClosed?hide(e):a.noRoom||u.css("display","block"),u.css("visibility","visible"),o.showOverflowOnHover&&u.hover(allowOverflow,resetOverflow),state.initialized&&afterInitPane(e)}else $Ps[e]=!1}},afterInitPane=function(e){var t=$Ps[e],i=state[e],s=options[e];t&&(t.data("layout")&&refreshChildren(e,t.data("layout")),i.isVisible&&(state.initialized?resizeAll():sizeContent(e),s.triggerEventsOnLoad?_runCallbacks("onresize_end",e):resizeChildren(e,!0)),s.initChildren&&s.children&&createChildren(e))},setPanePosition=function(e){e=e?e.split(","):_c.borderPanes,$.each(e,function(e,t){var i=$Ps[t],s=$Rs[t],n=(options[t],state[t]),o=_c[t].side,a={};if(i){switch(t){case"north":a.top=sC.inset.top,a.left=sC.inset.left,a.right=sC.inset.right;break;case"south":a.bottom=sC.inset.bottom,a.left=sC.inset.left,a.right=sC.inset.right;break;case"west":a.left=sC.inset.left;break;case"east":a.right=sC.inset.right}i.css(a),s&&n.isClosed?s.css(o,sC.inset[o]):s&&!n.isHidden&&s.css(o,sC.inset[o]+getPaneSize(t))}})},initHandles=function(e){e=e?e.split(","):_c.borderPanes,$.each(e,function(e,t){var i=$Ps[t];if($Rs[t]=!1,$Ts[t]=!1,i){var s=options[t],n=state[t],o=(_c[t],"#"===s.paneSelector.substr(0,1)?s.paneSelector.substr(1):""),a=s.resizerClass,l=s.togglerClass,r=(n.isVisible?s.spacing_open:s.spacing_closed,"-"+t),d=(n.isVisible,Instance[t]),c=d.resizer=$Rs[t]=$("<div></div>"),u=d.toggler=!!s.closable&&($Ts[t]=$("<div></div>"));!n.isVisible&&s.slidable&&c.attr("title",s.tips.Slide).css("cursor",s.sliderCursor),c.attr("id",o?o+"-resizer":"").data({parentLayout:Instance,layoutPane:Instance[t],layoutEdge:t,layoutRole:"resizer"}).css(_c.resizers.cssReq).css("zIndex",options.zIndexes.resizer_normal).css(s.applyDemoStyles?_c.resizers.cssDemo:{}).addClass(a+" "+a+r).hover(addHover,removeHover).hover(onResizerEnter,onResizerLeave).mousedown($.layout.disableTextSelection).mouseup($.layout.enableTextSelection).appendTo($N),$.fn.disableSelection&&c.disableSelection(),s.resizerDblClickToggle&&c.bind("dblclick."+sID,toggle),u&&(u.attr("id",o?o+"-toggler":"").data({parentLayout:Instance,layoutPane:Instance[t],layoutEdge:t,layoutRole:"toggler"}).css(_c.togglers.cssReq).css(s.applyDemoStyles?_c.togglers.cssDemo:{}).addClass(l+" "+l+r).hover(addHover,removeHover).bind("mouseenter",onResizerEnter).appendTo(c),s.togglerContent_open&&$("<span>"+s.togglerContent_open+"</span>").data({layoutEdge:t,layoutRole:"togglerContent"}).data("layoutRole","togglerContent").data("layoutEdge",t).addClass("content content-open").css("display","none").appendTo(u),s.togglerContent_closed&&$("<span>"+s.togglerContent_closed+"</span>").data({layoutEdge:t,layoutRole:"togglerContent"}).addClass("content content-closed").css("display","none").appendTo(u),enableClosable(t)),initResizable(t),n.isVisible?setAsOpen(t):(setAsClosed(t),bindStartSlidingEvents(t,!0))}}),sizeHandles()},initContent=function(e,t){if(isInitialized()){var i,s=options[e],n=s.contentSelector,o=Instance[e],a=$Ps[e];n&&(i=o.content=$Cs[e]=s.findNestedContent?a.find(n).eq(0):a.children(n).eq(0)),i&&i.length?(i.data("layoutRole","content"),i.data("layoutCSS")||i.data("layoutCSS",styles(i,"height")),i.css(_c.content.cssReq),s.applyDemoStyles&&(i.css(_c.content.cssDemo),a.css(_c.content.cssDemoPane)),a.css("overflowX").match(/(scroll|auto)/)&&a.css("overflow","hidden"),state[e].content={},!1!==t&&sizeContent(e)):o.content=$Cs[e]=!1}},initResizable=function(e){var t=$.layout.plugins.draggable;e=e?e.split(","):_c.borderPanes,$.each(e,function(e,s){var n=options[s];if(!t||!$Ps[s]||!n.resizable)return n.resizable=!1,!0;var o,a,l=state[s],r=options.zIndexes,d=_c[s],c="horz"==d.dir?"top":"left",u=($Ps[s],$Rs[s]),p=n.resizerClass,g=0,h=p+"-drag",f=p+"-"+s+"-drag",m=p+"-dragging",b=p+"-"+s+"-dragging",v=p+"-dragging-limit",y=p+"-"+s+"-dragging-limit",z=!1;l.isClosed||u.attr("title",n.tips.Resize).css("cursor",n.resizerCursor),u.draggable({containment:$N[0],axis:"horz"==d.dir?"y":"x",delay:0,distance:1,grid:n.resizingGrid,helper:"clone",opacity:n.resizerDragOpacity,addClasses:!1,zIndex:r.resizer_drag,start:function(e,t){if(n=options[s],l=state[s],a=n.livePaneResizing,!1===_runCallbacks("ondrag_start",s))return!1;l.isResizing=!0,state.paneResizing=s,timer.clear(s+"_closeSlider"),setSizeLimits(s),o=l.resizerPosition,g=t.position[c],u.addClass(h+" "+f),z=!1,showMasks(s,{resizing:!0})},drag:function(e,t){z||(t.helper.addClass(m+" "+b).css({right:"auto",bottom:"auto"}).children().css("visibility","hidden"),z=!0,l.isSliding&&$Ps[s].css("zIndex",r.pane_sliding));var d=0;t.position[c]<o.min?(t.position[c]=o.min,d=-1):t.position[c]>o.max&&(t.position[c]=o.max,d=1),d?(t.helper.addClass(v+" "+y),window.defaultStatus=d>0&&s.match(/(north|west)/)||d<0&&s.match(/(south|east)/)?n.tips.maxSizeWarning:n.tips.minSizeWarning):(t.helper.removeClass(v+" "+y),window.defaultStatus=""),a&&Math.abs(t.position[c]-g)>=n.liveResizingTolerance&&(g=t.position[c],i(e,t,s))},stop:function(e,t){$("body").enableSelection(),window.defaultStatus="",u.removeClass(h+" "+f),l.isResizing=!1,state.paneResizing=!1,i(e,t,s,!0)}})});var i=function(e,t,i,s){var n,o=t.position,a=_c[i],l=options[i],r=state[i];switch(i){case"north":n=o.top;break;case"west":n=o.left;break;case"south":n=sC.layoutHeight-o.top-l.spacing_open;break;case"east":n=sC.layoutWidth-o.left-l.spacing_open}var d=n-sC.inset[a.side];if(s)!1!==_runCallbacks("ondrag_end",i)&&manualSizePane(i,d,!1,!0),hideMasks(!0),r.isSliding&&showMasks(i,{resizing:!0});else{if(Math.abs(d-r.size)<l.liveResizingTolerance)return;manualSizePane(i,d,!1,!0),sizeMasks()}}},sizeMask=function(){var e=$(this),t=e.data("layoutMask"),i=state[t];"IFRAME"==i.tagName&&i.isVisible&&e.css({top:i.offsetTop,left:i.offsetLeft,width:i.outerWidth,height:i.outerHeight})},sizeMasks=function(){$Ms.each(sizeMask)},showMasks=function(e,t){var i,s,n=_c[e],o=["center"],a=options.zIndexes,l=$.extend({objectsOnly:!1,animation:!1,resizing:!0,sliding:state[e].isSliding},t);l.resizing&&o.push(e),l.sliding&&o.push(_c.oppositeEdge[e]),"horz"===n.dir&&(o.push("west"),o.push("east")),$.each(o,function(e,t){s=state[t],i=options[t],s.isVisible&&(i.maskObjects||!l.objectsOnly&&i.maskContents)&&getMasks(t).each(function(){sizeMask.call(this),this.style.zIndex=s.isSliding?a.pane_sliding+1:a.pane_normal+1,this.style.display="block"})})},hideMasks=function(e){if(e||!state.paneResizing)$Ms.hide();else if(!e&&!$.isEmptyObject(state.panesSliding))for(var t,i,s=$Ms.length-1;s>=0;s--)t=(i=$Ms.eq(s)).data("layoutMask"),options[t].maskObjects||i.hide()},getMasks=function(e){for(var t,i=$([]),s=0,n=$Ms.length;s<n;s++)(t=$Ms.eq(s)).data("layoutMask")===e&&(i=i.add(t));return i.length?i:createMasks(e)},createMasks=function(e){var t,i,s,n,o,a=$Ps[e],l=state[e],r=options[e],d=options.zIndexes;if(!r.maskContents&&!r.maskObjects)return $([]);for(o=0;o<(r.maskObjects?2:1);o++)t=r.maskObjects&&0==o,i=document.createElement(t?"iframe":"div"),s=$(i).data("layoutMask",e),i.className="ui-layout-mask ui-layout-mask-"+e,(n=i.style).background="#FFF",n.position="absolute",n.display="block",t?(i.src="about:blank",i.frameborder=0,n.border=0,n.opacity=0,n.filter="Alpha(Opacity='0')"):(n.opacity=.001,n.filter="Alpha(Opacity='1')"),"IFRAME"==l.tagName?(n.zIndex=d.pane_normal+1,$N.append(i)):(s.addClass("ui-layout-mask-inside-pane"),n.zIndex=r.maskZindex||d.content_mask,n.top=0,n.left=0,n.width="100%",n.height="100%",a.append(i)),$Ms=$Ms.add(i);return $Ms},destroy=function(e,t){$(window).unbind("."+sID),$(document).unbind("."+sID),"object"==typeof e?evtPane(e):t=e,$N.clearQueue().removeData("layout").removeData("layoutContainer").removeClass(options.containerClass).unbind("."+sID),$Ms.remove(),$.each(_c.allPanes,function(e,i){removePane(i,!1,!0,t)});var i="layoutCSS";for(var s in $N.data(i)&&!$N.data("layoutRole")&&$N.css($N.data(i)).removeData(i),"BODY"===sC.tagName&&($N=$("html")).data(i)&&$N.css($N.data(i)).removeData(i),runPluginCallbacks(Instance,$.layout.onDestroy),unload(),Instance)s.match(/^(container|options)$/)||delete Instance[s];return Instance.destroyed=!0,Instance},removePane=function(e,t,i,s){if(isInitialized()){var n=evtPane.call(this,e),o=$Ps[n],a=$Cs[n],l=$Rs[n],r=$Ts[n];o&&$.isEmptyObject(o.data())&&(o=!1),a&&$.isEmptyObject(a.data())&&(a=!1),l&&$.isEmptyObject(l.data())&&(l=!1),r&&$.isEmptyObject(r.data())&&(r=!1),o&&o.stop(!0,!0);var d=options[n],c=(state[n],"layoutCSS"),u=children[n],p=$.isPlainObject(u)&&!$.isEmptyObject(u),g=void 0!==s?s:d.destroyChildren;if(p&&g&&($.each(u,function(e,t){t.destroyed||t.destroy(!0),t.destroyed&&delete u[e]}),$.isEmptyObject(u)&&(u=children[n]=null,p=!1)),o&&t&&!p)o.remove();else if(o&&o[0]){var h=d.paneClass,f=h+"-"+n,m=[h,h+"-open",h+"-closed",h+"-sliding",f,f+"-open",f+"-closed",f+"-sliding"];$.merge(m,getHoverClasses(o,!0)),o.removeClass(m.join(" ")).removeData("parentLayout").removeData("layoutPane").removeData("layoutRole").removeData("layoutEdge").removeData("autoHidden").unbind("."+sID),p&&a?(a.width(a.width()),$.each(u,function(e,t){t.resizeAll()})):a&&a.css(a.data(c)).removeData(c).removeData("layoutRole"),o.data("layout")||o.css(o.data(c)).removeData(c)}r&&r.remove(),l&&l.remove(),Instance[n]=$Ps[n]=$Cs[n]=$Rs[n]=$Ts[n]=!1,{removed:!0},i||resizeAll()}},_hidePane=function(e){var t=$Ps[e],i=options[e],s=t[0].style;i.useOffscreenClose?(t.data(_c.offscreenReset)||t.data(_c.offscreenReset,{left:s.left,right:s.right}),t.css(_c.offscreenCSS)):t.hide().removeData(_c.offscreenReset)},_showPane=function(e){var t=$Ps[e],i=options[e],s=_c.offscreenCSS,n=t.data(_c.offscreenReset),o=t[0].style;t.show().removeData(_c.offscreenReset),i.useOffscreenClose&&n&&(o.left==s.left&&(o.left=n.left),o.right==s.right&&(o.right=n.right))},hide=function(e,t){if(isInitialized()){var i=evtPane.call(this,e),s=options[i],n=state[i],o=$Ps[i],a=$Rs[i];"center"!==i&&o&&!n.isHidden&&(state.initialized&&!1===_runCallbacks("onhide_start",i)||(n.isSliding=!1,delete state.panesSliding[i],a&&a.hide(),!state.initialized||n.isClosed?(n.isClosed=!0,n.isHidden=!0,n.isVisible=!1,state.initialized||_hidePane(i),sizeMidPanes("horz"===_c[i].dir?"":"center"),(state.initialized||s.triggerEventsOnLoad)&&_runCallbacks("onhide_end",i)):(n.isHiding=!0,close(i,!1,t))))}},show=function(e,t,i,s){if(isInitialized()){var n=evtPane.call(this,e),o=(options[n],state[n]),a=$Ps[n];$Rs[n];"center"!==n&&a&&o.isHidden&&!1!==_runCallbacks("onshow_start",n)&&(o.isShowing=!0,o.isSliding=!1,delete state.panesSliding[n],!1===t?close(n,!0):open(n,!1,i,s))}},toggle=function(e,t){if(isInitialized()){var i=evtObj(e),s=evtPane.call(this,e),n=state[s];i&&i.stopImmediatePropagation(),n.isHidden?show(s):n.isClosed?open(s,!!t):close(s)}},_closePane=function(e,t){$Ps[e];var i=state[e];_hidePane(e),i.isClosed=!0,i.isVisible=!1,t&&setAsClosed(e)},close=function(e,t,i,s){var n=evtPane.call(this,e);if("center"!==n)if(state.initialized||!$Ps[n]){if(isInitialized()){var o,a,l,r=$Ps[n],d=($Rs[n],$Ts[n],options[n]),c=state[n];_c[n];$N.queue(function(e){if(!r||!d.closable&&!c.isShowing&&!c.isHiding||!t&&c.isClosed&&!c.isShowing)return e();var s=!c.isShowing&&!1===_runCallbacks("onclose_start",n);if(a=c.isShowing,l=c.isHiding,c.isSliding,delete c.isShowing,delete c.isHiding,s)return e();o=!i&&!c.isClosed&&"none"!=d.fxName_close,c.isMoving=!0,c.isClosed=!0,c.isVisible=!1,l?c.isHidden=!0:a&&(c.isHidden=!1),c.isSliding?bindStopSlidingEvents(n,!1):sizeMidPanes("horz"===_c[n].dir?"":"center",!1),setAsClosed(n),o?(lockPaneForFX(n,!0),r.hide(d.fxName_close,d.fxSettings_close,d.fxSpeed_close,function(){lockPaneForFX(n,!1),c.isClosed&&u(),e()})):(_hidePane(n),u(),e())})}}else _closePane(n,!0);function u(){c.isMoving=!1,bindStartSlidingEvents(n,!0);var e=_c.oppositeEdge[n];state[e].noRoom&&(setSizeLimits(e),makePaneFit(e)),s||!state.initialized&&!d.triggerEventsOnLoad||(a||_runCallbacks("onclose_end",n),a&&_runCallbacks("onshow_end",n),l&&_runCallbacks("onhide_end",n))}},setAsClosed=function(e){if($Rs[e]){$Ps[e];var t=$Rs[e],i=$Ts[e],s=options[e],n=state[e],o=_c[e].side,a=s.resizerClass,l=s.togglerClass,r="-"+e;t.css(o,sC.inset[o]).removeClass(a+"-open "+a+r+"-open").removeClass(a+"-sliding "+a+r+"-sliding").addClass(a+"-closed "+a+r+"-closed"),n.isHidden&&t.hide(),s.resizable&&$.layout.plugins.draggable&&t.draggable("disable").removeClass("ui-state-disabled").css("cursor","default").attr("title",""),i&&(i.removeClass(l+"-open "+l+r+"-open").addClass(l+"-closed "+l+r+"-closed").attr("title",s.tips.Open),i.children(".content-open").hide(),i.children(".content-closed").css("display","block")),syncPinBtns(e,!1),state.initialized&&sizeHandles()}},open=function(e,t,i,s){if(isInitialized()){var n,o,a=evtPane.call(this,e),l=$Ps[a],r=($Rs[a],$Ts[a],options[a]),d=state[a];_c[a];"center"!==a&&$N.queue(function(e){if(!l||!r.resizable&&!r.closable&&!d.isShowing||d.isVisible&&!d.isSliding)return e();if(d.isHidden&&!d.isShowing)return e(),void show(a,!0);d.autoResize&&d.size!=r.size?sizePane(a,r.size,!0,!0,!0):setSizeLimits(a,t);var u=_runCallbacks("onopen_start",a);return"abort"===u?e():("NC"!==u&&setSizeLimits(a,t),d.minSize>d.maxSize?(syncPinBtns(a,!1),!s&&r.tips.noRoomToOpen&&alert(r.tips.noRoomToOpen),e()):(t?bindStopSlidingEvents(a,!0):d.isSliding?bindStopSlidingEvents(a,!1):r.slidable&&bindStartSlidingEvents(a,!1),d.noRoom=!1,makePaneFit(a),o=d.isShowing,delete d.isShowing,n=!i&&d.isClosed&&"none"!=r.fxName_open,d.isMoving=!0,d.isVisible=!0,d.isClosed=!1,o&&(d.isHidden=!1),void(n?(lockPaneForFX(a,!0),l.show(r.fxName_open,r.fxSettings_open,r.fxSpeed_open,function(){lockPaneForFX(a,!1),d.isVisible&&c(),e()})):(_showPane(a),c(),e()))))})}function c(){d.isMoving=!1,_fixIframe(a),d.isSliding||sizeMidPanes("vert"==_c[a].dir?"center":"",!1),setAsOpen(a)}},setAsOpen=function(e,t){var i=$Ps[e],s=$Rs[e],n=$Ts[e],o=options[e],a=state[e],l=_c[e].side,r=o.resizerClass,d=o.togglerClass,c="-"+e;s.css(l,sC.inset[l]+getPaneSize(e)).removeClass(r+"-closed "+r+c+"-closed").addClass(r+"-open "+r+c+"-open"),a.isSliding?s.addClass(r+"-sliding "+r+c+"-sliding"):s.removeClass(r+"-sliding "+r+c+"-sliding"),removeHover(0,s),o.resizable&&$.layout.plugins.draggable?s.draggable("enable").css("cursor",o.resizerCursor).attr("title",o.tips.Resize):a.isSliding||s.css("cursor","default"),n&&(n.removeClass(d+"-closed "+d+c+"-closed").addClass(d+"-open "+d+c+"-open").attr("title",o.tips.Close),removeHover(0,n),n.children(".content-closed").hide(),n.children(".content-open").css("display","block")),syncPinBtns(e,!a.isSliding),$.extend(a,elDims(i)),state.initialized&&(sizeHandles(),sizeContent(e,!0)),!t&&(state.initialized||o.triggerEventsOnLoad)&&i.is(":visible")&&(_runCallbacks("onopen_end",e),a.isShowing&&_runCallbacks("onshow_end",e),state.initialized&&_runCallbacks("onresize_end",e))},slideOpen=function(e){if(isInitialized()){var t=evtObj(e),i=evtPane.call(this,e),s=state[i],n=options[i].slideDelay_open;"center"!==i&&(t&&t.stopImmediatePropagation(),s.isClosed&&t&&"mouseenter"===t.type&&n>0?timer.set(i+"_openSlider",o,n):o())}function o(){s.isClosed?s.isMoving||open(i,!0):bindStopSlidingEvents(i,!0)}},slideClose=function(e){if(isInitialized()){var t=evtObj(e),i=evtPane.call(this,e),s=options[i],n=state[i],o=n.isMoving?1e3:300;if("center"!==i&&!n.isClosed&&!n.isResizing)if("click"===s.slideTrigger_close)a();else{if(s.preventQuickSlideClose&&n.isMoving)return;if(s.preventPrematureSlideClose&&t&&$.layout.isMouseOverElem(t,$Ps[i]))return;t?timer.set(i+"_closeSlider",a,max(s.slideDelay_close,o)):a()}}function a(){n.isClosed?bindStopSlidingEvents(i,!1):n.isMoving||close(i)}},slideToggle=function(e){var t=evtPane.call(this,e);toggle(t,!0)},lockPaneForFX=function(e,t){var i=$Ps[e],s=state[e],n=options[e],o=options.zIndexes;t?(showMasks(e,{animation:!0,objectsOnly:!0}),i.css({zIndex:o.pane_animate}),"south"==e?i.css({top:sC.inset.top+sC.innerHeight-i.outerHeight()}):"east"==e&&i.css({left:sC.inset.left+sC.innerWidth-i.outerWidth()})):(hideMasks(),i.css({zIndex:s.isSliding?o.pane_sliding:o.pane_normal}),"south"==e?i.css({top:"auto"}):"east"!=e||i.css("left").match(/\-99999/)||i.css({left:"auto"}),browser.msie&&n.fxOpacityFix&&"slide"!=n.fxName_open&&i.css("filter")&&1==i.css("opacity")&&i[0].style.removeAttribute("filter"))},bindStartSlidingEvents=function(e,t){var i=options[e],s=($Ps[e],$Rs[e]),n=i.slideTrigger_open.toLowerCase();!s||t&&!i.slidable||(n.match(/mouseover/)?n=i.slideTrigger_open="mouseenter":n.match(/(click|dblclick|mouseenter)/)||(n=i.slideTrigger_open="click"),i.resizerDblClickToggle&&n.match(/click/)&&s[t?"unbind":"bind"]("dblclick."+sID,toggle),s[t?"bind":"unbind"](n+"."+sID,slideOpen).css("cursor",t?i.sliderCursor:"default").attr("title",t?i.tips.Slide:""))},bindStopSlidingEvents=function(e,t){var i=options[e],s=state[e],n=(_c[e],options.zIndexes),o=i.slideTrigger_close.toLowerCase(),a=t?"bind":"unbind",l=$Ps[e],r=$Rs[e];function d(t){timer.clear(e+"_closeSlider"),t.stopPropagation()}timer.clear(e+"_closeSlider"),t?(s.isSliding=!0,state.panesSliding[e]=!0,bindStartSlidingEvents(e,!1)):(s.isSliding=!1,delete state.panesSliding[e]),l.css("zIndex",t?n.pane_sliding:n.pane_normal),r.css("zIndex",t?n.pane_sliding+2:n.resizer_normal),o.match(/(click|mouseleave)/)||(o=i.slideTrigger_close="mouseleave"),r[a](o,slideClose),"mouseleave"===o&&(l[a]("mouseleave."+sID,slideClose),r[a]("mouseenter."+sID,d),l[a]("mouseenter."+sID,d)),t?"click"!==o||i.resizable||(r.css("cursor",t?i.sliderCursor:"default"),r.attr("title",t?i.tips.Close:"")):timer.clear(e+"_closeSlider")},makePaneFit=function(e,t,i,s){var n=options[e],o=state[e],a=_c[e],l=$Ps[e],r=$Rs[e],d="vert"===a.dir,c=!1;if(("center"===e||d&&o.noVerticalRoom)&&((c=o.maxHeight>=0)&&o.noRoom?(_showPane(e),r&&r.show(),o.isVisible=!0,o.noRoom=!1,d&&(o.noVerticalRoom=!1),_fixIframe(e)):c||o.noRoom||(_hidePane(e),r&&r.hide(),o.isVisible=!1,o.noRoom=!0)),"center"===e);else if(o.minSize<=o.maxSize){if(c=!0,o.size>o.maxSize)sizePane(e,o.maxSize,i,!0,s);else if(o.size<o.minSize)sizePane(e,o.minSize,i,!0,s);else if(r&&o.isVisible&&l.is(":visible")){var u=o.size+sC.inset[a.side];$.layout.cssNum(r,a.side)!=u&&r.css(a.side,u)}o.noRoom&&(o.wasOpen&&n.closable?n.autoReopen?open(e,!1,!0,!0):o.noRoom=!1:show(e,o.wasOpen,!0,!0))}else o.noRoom||(o.noRoom=!0,o.wasOpen=!o.isClosed&&!o.isSliding,o.isClosed||(n.closable?close(e,!0,!0):hide(e,!0)))},manualSizePane=function(e,t,i,s,n){if(isInitialized()){var o=evtPane.call(this,e),a=options[o],l=state[o],r=n||a.livePaneResizing&&!l.isResizing;"center"!==o&&(l.autoResize=!1,sizePane(o,t,i,s,r))}},sizePane=function(e,t,i,s,n){if(isInitialized()){var o,a,l=evtPane.call(this,e),r=options[l],d=state[l],c=$Ps[l],u=$Rs[l],p=_c[l].side,g=_c[l].sizeType.toLowerCase(),h=d.isResizing&&!r.triggerEventsDuringLiveResize,f=!0!==s&&r.animatePaneSizing;"center"!==l&&$N.queue(function(e){if(setSizeLimits(l),o=d.size,t=_parseSize(l,t),t=max(t,_parseSize(l,r.minSize)),(t=min(t,d.maxSize))<d.minSize)return e(),void makePaneFit(l,!1,i);if(!n&&t===o)return e();if(d.newSize=t,!i&&state.initialized&&d.isVisible&&_runCallbacks("onresize_start",l),a=cssSize(l,t),f&&c.is(":visible")){var s=$.layout.effects.size[l]||$.layout.effects.size.all,u=r.fxSettings_size.easing||s.easing,p=options.zIndexes,h={};h[g]=a+"px",d.isMoving=!0,c.css({zIndex:p.pane_animate}).show().animate(h,r.fxSpeed_size,u,function(){c.css({zIndex:d.isSliding?p.pane_sliding:p.pane_normal}),d.isMoving=!1,delete d.newSize,m(),e()})}else c.css(g,a),delete d.newSize,c.is(":visible")?m():d.size=t,e()})}function m(){for(var e="width"===g?c.outerWidth():c.outerHeight(),s=[{pane:l,count:1,target:t,actual:e,correct:t===e,attempt:t,cssSize:a}],r=s[0],f={},m="Inaccurate size after resizing the "+l+"-pane.";!(r.correct||(f={pane:l,count:r.count+1,target:t},r.actual>t?f.attempt=max(0,r.attempt-(r.actual-t)):f.attempt=max(0,r.attempt+(t-r.actual)),f.cssSize=cssSize(l,f.attempt),c.css(g,f.cssSize),f.actual="width"==g?c.outerWidth():c.outerHeight(),f.correct=t===f.actual,1===s.length&&(_log(m,!1,!0),_log(r,!1,!0)),_log(f,!1,!0),s.length>3));)s.push(f),r=s[s.length-1];d.size=t,$.extend(d,elDims(c)),d.isVisible&&c.is(":visible")&&(u&&u.css(p,t+sC.inset[p]),sizeContent(l)),!i&&!h&&state.initialized&&d.isVisible&&_runCallbacks("onresize_end",l),i||(d.isSliding||sizeMidPanes("horz"==_c[l].dir?"":"center",h,n),sizeHandles());var b=_c.oppositeEdge[l];t<o&&state[b].noRoom&&(setSizeLimits(b),makePaneFit(b,!1,i)),s.length>1&&_log(m+"\nSee the Error Console for details.",!0,!0)}},sizeMidPanes=function(e,t,i){e=(e||"east,west,center").split(","),$.each(e,function(e,s){if($Ps[s]){var n=options[s],o=state[s],a=$Ps[s],l=($Rs[s],!0),r={},d=$.layout.showInvisibly(a),c=calcNewCenterPaneDims();if($.extend(o,elDims(a)),"center"===s){if(!i&&o.isVisible&&c.width===o.outerWidth&&c.height===o.outerHeight)return a.css(d),!0;if($.extend(o,cssMinDims(s),{maxWidth:c.width,maxHeight:c.height}),r=c,o.newWidth=r.width,o.newHeight=r.height,r.width=cssW(a,r.width),r.height=cssH(a,r.height),l=r.width>=0&&r.height>=0,!state.initialized&&n.minWidth>c.width){var u=n.minWidth-o.outerWidth,p=options.east.minSize||0,g=options.west.minSize||0,h=state.east.size,f=state.west.size,m=h,b=f;if(u>0&&state.east.isVisible&&h>p&&(u-=h-(m=max(h-p,h-u))),u>0&&state.west.isVisible&&f>g&&(u-=f-(b=max(f-g,f-u))),0===u)return h&&h!=p&&sizePane("east",m,!0,!0,i),f&&f!=g&&sizePane("west",b,!0,!0,i),sizeMidPanes("center",t,i),void a.css(d)}}else{if(o.isVisible&&!o.noVerticalRoom&&$.extend(o,elDims(a),cssMinDims(s)),!i&&!o.noVerticalRoom&&c.height===o.outerHeight)return a.css(d),!0;r.top=c.top,r.bottom=c.bottom,o.newSize=c.height,r.height=cssH(a,c.height),o.maxHeight=r.height,(l=o.maxHeight>=0)||(o.noVerticalRoom=!0)}if(l?(!t&&state.initialized&&_runCallbacks("onresize_start",s),a.css(r),"center"!==s&&sizeHandles(s),!o.noRoom||o.isClosed||o.isHidden||makePaneFit(s),o.isVisible&&($.extend(o,elDims(a)),state.initialized&&sizeContent(s))):!o.noRoom&&o.isVisible&&makePaneFit(s),a.css(d),delete o.newSize,delete o.newWidth,delete o.newHeight,!o.isVisible)return!0;if("center"===s){var v=browser.isIE6||!browser.boxModel;$Ps.north&&(v||"IFRAME"==state.north.tagName)&&$Ps.north.css("width",cssW($Ps.north,sC.innerWidth)),$Ps.south&&(v||"IFRAME"==state.south.tagName)&&$Ps.south.css("width",cssW($Ps.south,sC.innerWidth))}!t&&state.initialized&&_runCallbacks("onresize_end",s)}})},resizeAll=function(e){var t=sC.innerWidth,i=sC.innerHeight;if(evtPane(e),$N.is(":visible"))if(state.initialized){if(!0===e&&$.isPlainObject(options.outset)&&$N.css(options.outset),$.extend(sC,elDims($N,options.inset)),sC.outerHeight){if(!0===e&&setPanePosition(),!1===_runCallbacks("onresizeall_start"))return!1;var s,n;sC.innerHeight,sC.innerWidth;$.each(["south","north","east","west"],function(e,t){$Ps[t]&&(s=options[t],(n=state[t]).autoResize&&n.size!=s.size?sizePane(t,s.size,!0,!0,!0):(setSizeLimits(t),makePaneFit(t,!1,!0,!0)))}),sizeMidPanes("",!0,!0),sizeHandles(),$.each(_c.allPanes,function(e,t){$Ps[t]&&state[t].isVisible&&_runCallbacks("onresize_end",t)}),_runCallbacks("onresizeall_end")}}else _initLayoutElements()},resizeChildren=function(e,t){var i=evtPane.call(this,e);if(options[i].resizeChildren){t||refreshChildren(i);var s=children[i];$.isPlainObject(s)&&$.each(s,function(e,t){t.destroyed||t.resizeAll()})}},sizeContent=function(e,t){if(isInitialized()){var i=evtPane.call(this,e);i=i?i.split(","):_c.allPanes,$.each(i,function(e,i){var s=$Ps[i],n=$Cs[i],o=options[i],a=state[i],l=a.content;if(!s||!n||!s.is(":visible"))return!0;if((n.length||(initContent(i,!1),n))&&!1!==_runCallbacks("onsizecontent_start",i)){(!a.isMoving&&!a.isResizing||o.liveContentResizing||t||null==l.top)&&(c(),l.hiddenFooters>0&&"hidden"===s.css("overflow")&&(s.css("overflow","visible"),c(),s.css("overflow","hidden")));var r=a.innerHeight-(l.spaceAbove-a.css.paddingTop)-(l.spaceBelow-a.css.paddingBottom);n.is(":visible")&&l.height==r||(setOuterHeight(n,r,!0),l.height=r),state.initialized&&_runCallbacks("onsizecontent_end",i)}function d(e){return max(a.css.paddingBottom,parseInt(e.css("marginBottom"),10)||0)}function c(){var e=options[i].contentIgnoreSelector,t=n.nextAll().not(".ui-layout-mask").not(e||":lt(0)"),s=t.filter(":visible"),o=s.filter(":last");(l={top:n[0].offsetTop,height:n.outerHeight(),numFooters:t.length,hiddenFooters:t.length-s.length,spaceBelow:0}).spaceAbove=l.top,l.bottom=l.top+l.height,o.length?l.spaceBelow=o[0].offsetTop+o.outerHeight()-l.bottom+d(o):l.spaceBelow=d(n)}})}},sizeHandles=function(e){var t=evtPane.call(this,e);t=t?t.split(","):_c.borderPanes,$.each(t,function(e,t){var i,s=options[t],n=state[t],o=$Ps[t],a=$Rs[t],l=$Ts[t];if(o&&a){var r,d,c,u=_c[t].dir,p=n.isClosed?"_closed":"_open",g=s["spacing"+p],h=s["togglerAlign"+p],f=s["togglerLength"+p];if(0!==g){if(n.noRoom||n.isHidden||a.show(),"horz"===u?(r=sC.innerWidth,n.resizerLength=r,d=$.layout.cssNum(o,"left"),a.css({width:cssW(a,r),height:cssH(a,g),left:d>-9999?d:sC.inset.left})):(r=o.outerHeight(),n.resizerLength=r,a.css({height:cssH(a,r),width:cssW(a,g),top:sC.inset.top+getPaneSize("north",!0)})),removeHover(s,a),l){if(0===f||n.isSliding&&s.hideTogglerOnSlide)return void l.hide();if(l.show(),!(f>0)||"100%"===f||f>r)f=r,c=0;else if(isStr(h))switch(h){case"top":case"left":c=0;break;case"bottom":case"right":c=r-f;break;case"middle":case"center":default:c=round((r-f)/2)}else{var m=parseInt(h,10);c=h>=0?m:r-f+m}if("horz"===u){var b=cssW(l,f);l.css({width:b,height:cssH(l,g),left:c,top:0}),l.children(".content").each(function(){(i=$(this)).css("marginLeft",round((b-i.outerWidth())/2))})}else{var v=cssH(l,f);l.css({height:v,width:cssW(l,g),top:c,left:0}),l.children(".content").each(function(){(i=$(this)).css("marginTop",round((v-i.outerHeight())/2))})}removeHover(0,l)}state.initialized||!s.initHidden&&!n.isHidden||(a.hide(),l&&l.hide())}else a.hide()}})},enableClosable=function(e){if(isInitialized()){var t=evtPane.call(this,e),i=$Ts[t],s=options[t];i&&(s.closable=!0,i.bind("click."+sID,function(e){e.stopPropagation(),toggle(t)}).css("visibility","visible").css("cursor","pointer").attr("title",state[t].isClosed?s.tips.Open:s.tips.Close).show())}},disableClosable=function(e,t){if(isInitialized()){var i=evtPane.call(this,e),s=$Ts[i];s&&(options[i].closable=!1,state[i].isClosed&&open(i,!1,!0),s.unbind("."+sID).css("visibility",t?"hidden":"visible").css("cursor","default").attr("title",""))}},enableSlidable=function(e){if(isInitialized()){var t=evtPane.call(this,e),i=$Rs[t];i&&i.data("draggable")&&(options[t].slidable=!0,state[t].isClosed&&bindStartSlidingEvents(t,!0))}},disableSlidable=function(e){if(isInitialized()){var t=evtPane.call(this,e),i=$Rs[t];i&&(options[t].slidable=!1,state[t].isSliding?close(t,!1,!0):(bindStartSlidingEvents(t,!1),i.css("cursor","default").attr("title",""),removeHover(null,i[0])))}},enableResizable=function(e){if(isInitialized()){var t=evtPane.call(this,e),i=$Rs[t],s=options[t];i&&i.data("draggable")&&(s.resizable=!0,i.draggable("enable"),state[t].isClosed||i.css("cursor",s.resizerCursor).attr("title",s.tips.Resize))}},disableResizable=function(e){if(isInitialized()){var t=evtPane.call(this,e),i=$Rs[t];i&&i.data("draggable")&&(options[t].resizable=!1,i.draggable("disable").css("cursor","default").attr("title",""),removeHover(null,i[0]))}},swapPanes=function(e,t){if(isInitialized()){var i=evtPane.call(this,e);if(state[i].edge=t,state[t].edge=i,!1===_runCallbacks("onswap_start",i)||!1===_runCallbacks("onswap_start",t))return state[i].edge=i,void(state[t].edge=t);var s=a(i),n=a(t),o={};return o[i]=s?s.state.size:0,o[t]=n?n.state.size:0,$Ps[i]=!1,$Ps[t]=!1,state[i]={},state[t]={},$Ts[i]&&$Ts[i].remove(),$Ts[t]&&$Ts[t].remove(),$Rs[i]&&$Rs[i].remove(),$Rs[t]&&$Rs[t].remove(),$Rs[i]=$Rs[t]=$Ts[i]=$Ts[t]=!1,l(s,t),l(n,i),s=n=o=null,$Ps[i]&&$Ps[i].css(_c.visible),$Ps[t]&&$Ps[t].css(_c.visible),resizeAll(),_runCallbacks("onswap_end",i),void _runCallbacks("onswap_end",t)}function a(e){var t=$Ps[e],i=$Cs[e];return!!t&&{pane:e,P:!!t&&t[0],C:!!i&&i[0],state:$.extend(!0,{},state[e]),options:$.extend(!0,{},options[e])}}function l(e,t){if(e){var i,s,n=e.P,a=e.C,l=e.pane,r=_c[t],d=$.extend(!0,{},state[t]),c=options[t],u={resizerCursor:c.resizerCursor};$.each("fxName,fxSpeed,fxSettings".split(","),function(e,t){u[t+"_open"]=c[t+"_open"],u[t+"_close"]=c[t+"_close"],u[t+"_size"]=c[t+"_size"]}),$Ps[t]=$(n).data({layoutPane:Instance[t],layoutEdge:t}).css(_c.hidden).css(r.cssReq),$Cs[t]=!!a&&$(a),options[t]=$.extend(!0,{},e.options,u),state[t]=$.extend(!0,{},e.state),i=new RegExp(c.paneClass+"-"+l,"g"),n.className=n.className.replace(i,c.paneClass+"-"+t),initHandles(t),r.dir!=_c[l].dir?(s=o[t]||0,setSizeLimits(t),s=max(s,state[t].minSize),manualSizePane(t,s,!0,!0)):$Rs[t].css(r.side,sC.inset[r.side]+(state[t].isVisible?getPaneSize(t):0)),e.state.isVisible&&!d.isVisible?setAsOpen(t,!0):(setAsClosed(t),bindStartSlidingEvents(t,!0)),e=null}}},syncPinBtns=function(e,t){$.layout.plugins.buttons&&$.each(state[e].pins,function(i,s){$.layout.buttons.setPinState(Instance,$(s),e,t)})};function keyDown(e){if(!e)return!0;var t=e.keyCode;if(t<33)return!0;var i,s,n,o,a={38:"north",40:"south",37:"west",39:"east"},l=(e.altKey,e.shiftKey),r=e.ctrlKey;return r&&t>=37&&t<=40&&options[a[t]].enableCursorHotkey?o=a[t]:(r||l)&&$.each(_c.borderPanes,function(e,a){if(i=options[a],s=i.customHotkey,n=i.customHotkeyModifier,(l&&"SHIFT"==n||r&&"CTRL"==n||r&&l)&&s&&t===(isNaN(s)||s<=9?s.toUpperCase().charCodeAt(0):s))return o=a,!1}),!(o&&$Ps[o]&&options[o].closable&&!state[o].isHidden)||(toggle(o),e.stopPropagation(),e.returnValue=!1,!1)}function allowOverflow(e){var t;if(isInitialized()&&(this&&this.tagName&&(e=this),isStr(e)?t=$Ps[e]:$(e).data("layoutRole")?t=$(e):$(e).parents().each(function(){if($(this).data("layoutRole"))return t=$(this),!1}),t&&t.length)){var i=t.data("layoutEdge"),s=state[i];if(s.cssSaved&&resetOverflow(i),s.isSliding||s.isResizing||s.isClosed)s.cssSaved=!1;else{var n={zIndex:options.zIndexes.resizer_normal+1},o={},a=t.css("overflow"),l=t.css("overflowX"),r=t.css("overflowY");"visible"!=a&&(o.overflow=a,n.overflow="visible"),l&&!l.match(/(visible|auto)/)&&(o.overflowX=l,n.overflowX="visible"),r&&!r.match(/(visible|auto)/)&&(o.overflowY=l,n.overflowY="visible"),s.cssSaved=o,t.css(n),$.each(_c.allPanes,function(e,t){t!=i&&resetOverflow(t)})}}}function resetOverflow(e){var t;if(isInitialized()&&(this&&this.tagName&&(e=this),isStr(e)?t=$Ps[e]:$(e).data("layoutRole")?t=$(e):$(e).parents().each(function(){if($(this).data("layoutRole"))return t=$(this),!1}),t&&t.length)){var i=t.data("layoutEdge"),s=state[i],n=s.cssSaved||{};s.isSliding||s.isResizing||t.css("zIndex",options.zIndexes.pane_normal),t.css(n),s.cssSaved=!1}}var $N=$(this).eq(0);if(!$N.length)return _log(options.errors.containerMissing);if($N.data("layoutContainer")&&$N.data("layout"))return $N.data("layout");var $Ps={},$Cs={},$Rs={},$Ts={},$Ms=$([]),sC=state.container,sID=state.id,Instance={options:options,state:state,container:$N,panes:$Ps,contents:$Cs,resizers:$Rs,togglers:$Ts,hide:hide,show:show,toggle:toggle,open:open,close:close,slideOpen:slideOpen,slideClose:slideClose,slideToggle:slideToggle,setSizeLimits:setSizeLimits,_sizePane:sizePane,sizePane:manualSizePane,sizeContent:sizeContent,swapPanes:swapPanes,showMasks:showMasks,hideMasks:hideMasks,initContent:initContent,addPane:addPane,removePane:removePane,createChildren:createChildren,refreshChildren:refreshChildren,enableClosable:enableClosable,disableClosable:disableClosable,enableSlidable:enableSlidable,disableSlidable:disableSlidable,enableResizable:enableResizable,disableResizable:disableResizable,allowOverflow:allowOverflow,resetOverflow:resetOverflow,destroy:destroy,initPanes:isInitialized,resizeAll:resizeAll,runCallbacks:_runCallbacks,hasParentLayout:!1,children:children,north:!1,south:!1,west:!1,east:!1,center:!1};return"cancel"===_create()?null:Instance}}(jQuery),function(e){e.layout&&(e.ui||(e.ui={}),e.ui.cookie={acceptsCookies:!!navigator.cookieEnabled,read:function(t){var i,s,n,o=document.cookie,a=o?o.split(";"):[];for(n=0;i=a[n];n++)if((s=e.trim(i).split("="))[0]==t)return decodeURIComponent(s[1]);return null},write:function(t,i,s){var n="",o="",a=!1,l=s||{},r=l.expires||null,d=e.type(r);"date"===d?o=r:"string"===d&&r>0&&(r=parseInt(r,10),d="number"),"number"===d&&(o=new Date,r>0?o.setDate(o.getDate()+r):(o.setFullYear(1970),a=!0)),o&&(n+=";expires="+o.toUTCString()),l.path&&(n+=";path="+l.path),l.domain&&(n+=";domain="+l.domain),l.secure&&(n+=";secure"),document.cookie=t+"="+(a?"":encodeURIComponent(i))+n},clear:function(t){e.ui.cookie.write(t,"",{expires:-1})}},e.cookie||(e.cookie=function(t,i,s){var n=e.ui.cookie;if(null===i)n.clear(t);else{if(void 0===i)return n.read(t);n.write(t,i,s)}}),e.layout.plugins.stateManagement=!0,e.layout.defaults.stateManagement={enabled:!1,autoSave:!0,autoLoad:!0,animateLoad:!0,includeChildren:!0,stateKeys:"north.size,south.size,east.size,west.size,north.isClosed,south.isClosed,east.isClosed,west.isClosed,north.isHidden,south.isHidden,east.isHidden,west.isHidden",cookie:{name:"",domain:"",path:"",expires:"",secure:!1}},e.layout.optionsMap.layout.push("stateManagement"),e.layout.config.optionRootKeys.push("stateManagement"),e.layout.state={saveCookie:function(t,i,s){var n=t.options,o=n.stateManagement,a=e.extend(!0,{},o.cookie,s||null),l=t.state.stateData=t.readState(i||o.stateKeys);return e.ui.cookie.write(a.name||n.name||"Layout",e.layout.state.encodeJSON(l),a),e.extend(!0,{},l)},deleteCookie:function(t){var i=t.options;e.ui.cookie.clear(i.stateManagement.cookie.name||i.name||"Layout")},readCookie:function(t){var i=t.options,s=e.ui.cookie.read(i.stateManagement.cookie.name||i.name||"Layout");return s?e.layout.state.decodeJSON(s):{}},loadCookie:function(t){var i=e.layout.state.readCookie(t);return i&&!e.isEmptyObject(i)&&(t.state.stateData=e.extend(!0,{},i),t.loadState(i)),i},loadState:function(t,i,n){if(e.isPlainObject(i)&&!e.isEmptyObject(i)){i=t.state.stateData=e.layout.transformData(i);var o=t.options.stateManagement;if(n=e.extend({animateLoad:!1,includeChildren:o.includeChildren},n),t.state.initialized){var a,l,r,d,c,u,p=!n.animateLoad;if(e.each(e.layout.config.borderPanes,function(n,o){g=i[o],e.isPlainObject(g)&&(s=g.size,a=g.initClosed,l=g.initHidden,ar=g.autoResize,r=t.state[o],d=r.isVisible,ar&&(r.autoResize=ar),d||t._sizePane(o,s,!1,!1,!1),!0===l?t.hide(o,p):!0===a?t.close(o,!1,p):!1===a?t.open(o,!1,p):!1===l&&t.show(o,!1,p),d&&t._sizePane(o,s,!1,!1,p))}),n.includeChildren)e.each(t.children,function(t,s){(c=i[t]?i[t].children:0)&&s&&e.each(s,function(e,t){u=c[e],t&&u&&t.loadState(u)})})}else{var g=e.extend(!0,{},i);e.each(e.layout.config.allPanes,function(e,t){g[t]&&delete g[t].children}),e.extend(!0,t.options,g)}}},readState:function(t,i){"string"===e.type(i)&&(i={keys:i}),i||(i={});var s,n,o,a,l,r,d,c=t.options.stateManagement,u=i.includeChildren,p=void 0!==u?u:c.includeChildren,g=i.stateKeys||c.stateKeys,h={isClosed:"initClosed",isHidden:"initHidden"},f=t.state,m=e.layout.config.allPanes,b={};e.isArray(g)&&(g=g.join(","));for(var v=0,y=(g=g.replace(/__/g,".").split(",")).length;v<y;v++)n=(s=g[v].split("."))[0],o=s[1],e.inArray(n,m)<0||null!=(a=f[n][o])&&("isClosed"==o&&f[n].isSliding&&(a=!0),(b[n]||(b[n]={}))[h[o]?h[o]:o]=a);return p&&e.each(m,function(i,s){r=t.children[s],l=f.stateData[s],e.isPlainObject(r)&&!e.isEmptyObject(r)&&((d=b[s]||(b[s]={})).children||(d.children={}),e.each(r,function(t,i){i.state.initialized?d.children[t]=e.layout.state.readState(i):l&&l.children&&l.children[t]&&(d.children[t]=e.extend(!0,{},l.children[t]))}))}),b},encodeJSON:function(t){return((window.JSON||{}).stringify||function(t){var i,s,n,o=[],a=0,l=e.isArray(t);for(i in t)s=t[i],"string"==(n=typeof s)?s='"'+s+'"':"object"==n&&(s=parse(s)),o[a++]=(l?"":'"'+i+'":')+s;return(l?"[":"{")+o.join(",")+(l?"]":"}")})(t)},decodeJSON:function(t){try{return e.parseJSON?e.parseJSON(t):window.eval("("+t+")")||{}}catch(e){return{}}},_create:function(t){var i=e.layout.state,s=t.options.stateManagement;if(e.extend(t,{readCookie:function(){return i.readCookie(t)},deleteCookie:function(){i.deleteCookie(t)},saveCookie:function(e,s){return i.saveCookie(t,e,s)},loadCookie:function(){return i.loadCookie(t)},loadState:function(e,s){i.loadState(t,e,s)},readState:function(e){return i.readState(t,e)},encodeJSON:i.encodeJSON,decodeJSON:i.decodeJSON}),t.state.stateData={},s.autoLoad)if(e.isPlainObject(s.autoLoad))e.isEmptyObject(s.autoLoad)||t.loadState(s.autoLoad);else if(s.enabled)if(e.isFunction(s.autoLoad)){var n={};try{n=s.autoLoad(t,t.state,t.options,t.options.name||"")}catch(e){}n&&e.isPlainObject(n)&&!e.isEmptyObject(n)&&t.loadState(n)}else t.loadCookie()},_unload:function(t){var i=t.options.stateManagement;if(i.enabled&&i.autoSave)if(e.isFunction(i.autoSave))try{i.autoSave(t,t.state,t.options,t.options.name||"")}catch(e){}else t.saveCookie()}},e.layout.onCreate.push(e.layout.state._create),e.layout.onUnload.push(e.layout.state._unload))}(jQuery),function(e){e.layout&&(e.layout.plugins.buttons=!0,e.layout.defaults.autoBindCustomButtons=!1,e.layout.optionsMap.layout.push("autoBindCustomButtons"),e.layout.buttons={config:{borderPanes:"north,south,west,east"},init:function(t){var i,s=t.options.name||"";e.each("toggle,open,close,pin,toggle-slide,open-slide".split(","),function(n,o){e.each(e.layout.buttons.config.borderPanes.split(","),function(n,a){e(".ui-layout-button-"+o+"-"+a).each(function(){null!=(i=e(this).data("layoutName")||e(this).attr("layoutName"))&&i!==s||t.bindButton(this,o,a)})})})},get:function(t,i,s,n){var o=e(i),a=t.options;if(o.length&&e.layout.buttons.config.borderPanes.indexOf(s)>=0){var l=a[s].buttonClass+"-"+n;o.addClass(l+" "+l+"-"+s).data("layoutName",a.name)}return o},bind:function(t,i,s,n){var o=e.layout.buttons;switch(s.toLowerCase()){case"toggle":o.addToggle(t,i,n);break;case"open":o.addOpen(t,i,n);break;case"close":o.addClose(t,i,n);break;case"pin":o.addPin(t,i,n);break;case"toggle-slide":o.addToggle(t,i,n,!0);break;case"open-slide":o.addOpen(t,i,n,!0)}return t},addToggle:function(t,i,s,n){return e.layout.buttons.get(t,i,s,"toggle").click(function(e){t.toggle(s,!!n),e.stopPropagation()}),t},addOpen:function(t,i,s,n){return e.layout.buttons.get(t,i,s,"open").attr("title",t.options[s].tips.Open).click(function(e){t.open(s,!!n),e.stopPropagation()}),t},addClose:function(t,i,s){return e.layout.buttons.get(t,i,s,"close").attr("title",t.options[s].tips.Close).click(function(e){t.close(s),e.stopPropagation()}),t},addPin:function(t,i,s){var n=e.layout.buttons.get(t,i,s,"pin");if(n.length){var o=t.state[s];n.click(function(i){e.layout.buttons.setPinState(t,e(this),s,o.isSliding||o.isClosed),o.isSliding||o.isClosed?t.open(s):t.close(s),i.stopPropagation()}),e.layout.buttons.setPinState(t,n,s,!o.isClosed&&!o.isSliding),o.pins.push(i)}return t},setPinState:function(e,t,i,s){var n=t.attr("pin");if(!n||s!==("down"==n)){var o=e.options[i],a=o.tips,l=o.buttonClass+"-pin",r=l+"-"+i,d=l+"-up "+r+"-up",c=l+"-down "+r+"-down";t.attr("pin",s?"down":"up").attr("title",s?a.Unpin:a.Pin).removeClass(s?d:c).addClass(s?c:d)}},syncPinBtns:function(t,i,s){e.each(state[i].pins,function(n,o){e.layout.buttons.setPinState(t,e(o),i,s)})},_load:function(t){e.extend(t,{bindButton:function(i,s,n){return e.layout.buttons.bind(t,i,s,n)},addToggleBtn:function(i,s,n){return e.layout.buttons.addToggle(t,i,s,n)},addOpenBtn:function(i,s,n){return e.layout.buttons.addOpen(t,i,s,n)},addCloseBtn:function(i,s){return e.layout.buttons.addClose(t,i,s)},addPinBtn:function(i,s){return e.layout.buttons.addPin(t,i,s)}});for(var i=0;i<4;i++){var s=e.layout.buttons.config.borderPanes[i];t.state[s].pins=[]}t.options.autoBindCustomButtons&&e.layout.buttons.init(t)},_unload:function(e){}},e.layout.onLoad.push(e.layout.buttons._load))}(jQuery),function(e){e.layout.plugins.browserZoom=!0,e.layout.defaults.browserZoomCheckInterval=1e3,e.layout.optionsMap.layout.push("browserZoomCheckInterval"),e.layout.browserZoom={_init:function(t){!1!==e.layout.browserZoom.ratio()&&e.layout.browserZoom._setTimer(t)},_setTimer:function(t){if(!t.destroyed){var i=t.options,s=t.state,n=t.hasParentLayout?5e3:Math.max(i.browserZoomCheckInterval,100);setTimeout(function(){if(!t.destroyed&&i.resizeWithWindow){var n=e.layout.browserZoom.ratio();n!==s.browserZoom&&(s.browserZoom=n,t.resizeAll()),e.layout.browserZoom._setTimer(t)}},n)}},ratio:function(){var t,i,s,n=window,o=screen,a=document,l=a.documentElement||a.body,r=e.layout.browser,d=r.version;return!(!r.msie||d>8)&&(o.deviceXDPI&&o.systemXDPI?c(o.deviceXDPI,o.systemXDPI):r.webkit&&(t=a.body.getBoundingClientRect)?c(t.left-t.right,a.body.offsetWidth):r.webkit&&(i=n.outerWidth)?c(i,n.innerWidth):!(!(i=o.width)||!(s=l.clientWidth))&&c(i,s));function c(e,t){return(parseInt(e,10)/parseInt(t,10)*100).toFixed()}}},e.layout.onReady.push(e.layout.browserZoom._init)}(jQuery),function(e){e.effects&&(e.layout.defaults.panes.useOffscreenClose=!1,e.layout.plugins&&(e.layout.plugins.effects.slideOffscreen=!0),e.layout.effects.slideOffscreen=e.extend(!0,{},e.layout.effects.slide),e.effects.slideOffscreen=function(t){return this.queue(function(){var i=e.effects,s=t.options,n=e(this),o=n.data("layoutEdge"),a=n.data("parentLayout").state,l=a[o].size,r=this.style,d="show"==i.setMode(n,s.mode||"show"),c=s.direction||"left",u="up"==c||"down"==c?"top":"left",p="up"==c||"left"==c,g=e.layout.config.offscreenCSS||{},h=e.layout.config.offscreenReset,f="offscreenResetTop",m={};m[u]=(d?p?"+=":"-=":p?"-=":"+=")+l,d?(n.data(f,{top:r.top,bottom:r.bottom}),p?n.css(u,isNaN(l)?"-"+l:-l):"right"===c?n.css({left:a.container.layoutWidth,right:"auto"}):n.css({top:a.container.layoutHeight,bottom:"auto"}),"top"===u&&n.css(n.data(h)||{})):(n.data(f,{top:r.top,bottom:r.bottom}),n.data(h,{left:r.left,right:r.right})),n.show().animate(m,{queue:!1,duration:t.duration,easing:s.easing,complete:function(){n.data(f)&&n.css(n.data(f)).removeData(f),d?n.css(n.data(h)||{}).removeData(h):n.css(g),t.callback&&t.callback.apply(this,arguments),n.dequeue()}})})})}(jQuery);






/**
 *  Zebra_DatePicker
 *
 *  Zebra_DatePicker is a small, compact and highly configurable date picker / time picker jQuery plugin
 *
 *  Read more {@link https://github.com/stefangabos/Zebra_Datepicker/ here}
 *
 *  @author     Stefan Gabos <contact@stefangabos.ro>
 *  @version    1.9.19 (last revision: April 13, 2022)
 *  @copyright  (c) 2011 - 2022 Stefan Gabos
 *  @license    https://www.gnu.org/licenses/lgpl-3.0.txt GNU LESSER GENERAL PUBLIC LICENSE
 *  @package    Zebra_DatePicker
 */
 (function(factory) {

    'use strict';

    // AMD
    if (typeof define === 'function' && define.amd) define(['jquery'], factory);    // jshint ignore:line

    // CommonJS
    else if (typeof exports === 'object') factory(require('jquery'));   // jshint ignore:line

    // browser globals
    else factory(jQuery);

}(function($) {

    'use strict';

    $.Zebra_DatePicker = function(element, options) {

        // so you can tell the version number even if all you have is the minified source
        this.version = '1.9.19';

        var defaults = {

                //  setting this property to a jQuery element, will result in the date picker being always visible, the indicated
                //  element being the date picker's container;
                //
                //  setting this to boolean TRUE will keep will result in the date picker not closing when selecting a
                //  date but only when the user clicks outside the date picker.
                //
                //  note that when a date format is used that also involves time, this property will be automatically
                //  set to TRUE!
                //
                //  default is FALSE
                always_visible: false,

                //  by default, the date picker is injected into the <body>; use this property to tell the library to inject
                //  the date picker into a custom element - useful when you want the date picker to open at a specific position
                //
                //  must be a jQuery element
                //
                //  default is $('body')
                container: $('body'),

                //  by default, the current date (the value of *Today*) is taken from the system where the date picker is run on.
                //  set this to a date in the format of 'YYYY-MM-DD' to use a different date.
                //
                //  default is FALSE which means "the current system's date"
                current_date: false,

                //  dates that should have custom classes applied to them
                //  an object in the form of
                //  {
                //      'myclass1': [dates_to_apply_the_custom_class_to],
                //      'myclass2': [dates_to_apply_the_custom_class_to]
                //  }
                //  where "dates_to_apply_the_custom_class_to" is an array of dates in the same format as required for
                //  "disabled_dates" property.
                //
                //  custom classes will be applied *only* in the day picker view and not on month/year views!
                //  also note that the class name will have the "_disabled" suffix added if the day the class is applied to
                //  is disabled
                //
                //  in order for the styles in your custom classes to be applied, make sure you are using the following syntax:
                //
                //  .Zebra_DatePicker .dp_daypicker td.myclass1 { .. }
                //  .Zebra_DatePicker .dp_daypicker td.myclass1_disabled { .. }
                //
                //  default is FALSE, no custom classes
                custom_classes: false,

                //  days of the week; Sunday to Saturday
                days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

                //  by default, the abbreviated name of a day consists of the first 2 letters from the day's full name;
                //  while this is common for most languages, there are also exceptions for languages like Thai, Loa, Myanmar,
                //  etc. where this is not correct; for these cases, specify an array with the abbreviations to be used for
                //  the 7 days of the week; leave it FALSE to use the first 2 letters of a day's name as the abbreviation.
                //
                //  default is FALSE
                days_abbr: false,

                //  the position of the date picker relative to the element it is attached to. note that, regardless of this
                //  setting, the date picker's position will be automatically adjusted to fit in the viewport, if needed.
                //
                //  possible values are "above" and "below"
                //
                //  default is "above"
                default_position: 'above',

                //  direction of the calendar
                //
                //  a positive or negative integer: n (a positive integer) creates a future-only calendar beginning at n days
                //  after today; -n (a negative integer); if n is 0, the calendar has no restrictions. use boolean true for
                //  a future-only calendar starting with today and use boolean false for a past-only calendar ending today.
                //
                //  you may also set this property to an array with two elements in the following combinations:
                //
                //  -   first item is boolean TRUE (calendar starts today), an integer > 0 (calendar starts n days after
                //      today), or a valid date given in the format defined by the "format" attribute, using English for
                //      month names (calendar starts at the specified date), and the second item is boolean FALSE (the calendar
                //      has no ending date), an integer > 0 (calendar ends n days after the starting date), or a valid date
                //      given in the format defined by the "format" attribute, using English for month names, and which occurs
                //      after the starting date (calendar ends at the specified date)
                //
                //  -   first item is boolean FALSE (calendar ends today), an integer < 0 (calendar ends n days before today),
                //      or a valid date given in the format defined by the "format" attribute, using English for month names
                //      (calendar ends at the specified date), and the second item is an integer > 0 (calendar ends n days
                //      before the ending date), or a valid date given in the format defined by the "format" attribute, using
                //      English for month names  and which occurs before the starting date (calendar starts at the specified
                //      date)
                //
                //  [1, 7] - calendar starts tomorrow and ends seven days after that
                //  [true, 7] - calendar starts today and ends seven days after that
                //  ['2013-01-01', false] - calendar starts on January 1st 2013 and has no ending date ("format" is YYYY-MM-DD)
                //  [false, '2012-01-01'] - calendar ends today and starts on January 1st 2012 ("format" is YYYY-MM-DD)
                //
                //  note that "disabled_dates" property will still apply!
                //
                //  default is 0 (no restrictions)
                direction: 0,

                //  by default, setting a format that also involves time (h, H, g, G, i, s, a, A) will automatically enable
                //  the time picker. if you want to use a format that involves time but you don't want the time picker, set
                //  this property to TRUE.
                //
                //  default is FALSE
                disable_time_picker: false,

                //  an array of disabled dates in the following format: 'day month year weekday' where "weekday" is optional
                //  and can be 0-6 (Saturday to Sunday); the syntax is similar to cron's syntax: the values are separated by
                //  spaces and may contain * (asterisk) - (dash) and , (comma) delimiters:
                //
                //  ['1 1 2012'] would disable January 1, 2012;
                //  ['* 1 2012'] would disable all days in January 2012;
                //  ['1-10 1 2012'] would disable January 1 through 10 in 2012;
                //  ['1,10 1 2012'] would disable January 1 and 10 in 2012;
                //  ['1-10,20,22,24 1-3 *'] would disable 1 through 10, plus the 22nd and 24th of January through March for every year;
                //  ['* * * 0,6'] would disable all Saturdays and Sundays;
                //  ['01 07 2012', '02 07 2012', '* 08 2012'] would disable 1st and 2nd of July 2012, and all of August of 2012
                //
                //  default is FALSE, no disabled dates
                //
                //  DISABLING ALL DATES AND NOT SPECIFYING AT LEAST ONE ENABLED DATE WILL SEND THE SCRIPT INTO AN INFINITE
                //  LOOP SEARCHING FOR AN ENABLED DATE TO DISPLAY!
                disabled_dates: false,

                // an array of selectable am/pm.
                // allowed values are ['am'], ['pm'], or ['am', 'pm']
                // default is FALSE, both are always selectable.
                // note that this only applies when the date format includes am/pm (a or A)
                // even when only one is enabled, onChange() will still be triggered when clicking the up/down buttons next to AM/PM on the timepicker
                enabled_ampm: false,

                //  an array of enabled dates in the same format as required for "disabled_dates" property.
                //  to be used together with the "disabled_dates" property by first setting the "disabled_dates" property to
                //  something like "[* * * *]" (which will disable everything) and the setting the "enabled_dates" property to,
                //  say, "[* * * 0,6]" to enable just weekends.
                enabled_dates: false,

                //  an array of selectable hours.
                //  default is FALSE, all hours are selectable.
                enabled_hours: false,

                //  an array of selectable minutes.
                //  default is FALSE, all minutes are selectable.
                enabled_minutes: false,

                //  an array of selectable seconds.
                //  default is FALSE, all seconds are selectable.
                enabled_seconds: false,

                //  allows the users to quickly navigate through months and years by clicking on the date picker's top label.
                //  default is TRUE.
                fast_navigation: true,

                //  week's starting day
                //
                //  valid values are 0 to 6, Sunday to Saturday
                //
                //  default is 1, Monday
                first_day_of_week: 1,

                //  format of the returned date
                //
                //  accepts the following characters for date formatting: d, D, j, l, N, w, S, F, m, M, n, Y, y, h, H,
                //  g, G, i, s, a, A borrowing the syntax from PHP's "date" function.
                //
                //  note that when setting a date format without days ('d', 'j'), the users will be able to select only years
                //  and months, and when setting a format without months and days ('F', 'm', 'M', 'n', 'd', 'j'), the
                //  users will be able to select only years; likewise, when setting a date format with just months ('F', 'm',
                //  'M', 'n') or just years ('Y', 'y'), users will be able to select only months and years, respectively.
                //
                //  setting a format that also involves time (h, H, g, G, i, s, a, A) will automatically enable the time
                //  picker. if you want to use a format that involves time but you don't want the time picker, set the
                //  "disable_time_picker" property to TRUE.
                //
                //  setting a time format containing "a" or "A" (12-hour format) but using "H" or "G" as the hour's format
                //  will result in the hour's format being changed to "h" or "g", respectively.
                //
                //  also note that the value of the "view" property (see below) may be overridden if it is the case: a value of
                //  "days" for the "view" property makes no sense if the date format doesn't allow the selection of days.
                //
                //  default is Y-m-d
                format: 'Y-m-d',

                //  captions in the datepicker's header, for the 3 possible views: days, months, years
                //
                //  for each of the 3 views the following special characters may be used borrowing from PHP's "date" function's
                //  syntax: m, n, F, M, y and Y; any of these will be replaced at runtime with the appropriate date fragment,
                //  depending on the currently viewed date. two more special characters are also available Y1 and Y2 (upper
                //  case representing years with 4 digits, lowercase representing years with 2 digits) which represent
                //  "currently selected year - 7" and "currently selected year + 4" and which only make sense used in the
                //  "years" view.
                //
                //  even though any of these special characters may be used in any of the 3 views, you should use m, n, F, M
                //  for the "days" view and y, Y, Y1, Y2, y1, y2 for the "months" and "years" view or you may get unexpected
                //  results!
                //
                //  Text and HTML can also be used, and will be rendered as it is, as in the example below (the library is
                //  smart enough to not replace special characters when used in words or HTML tags):
                //
                //  header_captions: {
                //      'days':     'Departure:<br>F, Y',
                //      'months':   'Departure:<br>Y',
                //      'years':    'Departure:<br>Y1 - Y2'
                //  }
                //
                //  Default is
                //
                //  header_captions: {
                //      'days':     'F, Y',
                //      'months':   'Y',
                //      'years':    'Y1 - Y2'
                //  }
                header_captions: {
                    days:   'F, Y',
                    months: 'Y',
                    years:  'Y1 - Y2'
                },

                //  the left and right white-space around the icon
                //  if the "inside" property is set to TRUE then the target element's padding will be altered so that
                //  the element's left or right padding (depending on the value of "icon_position") will be 2 x icon_margin
                //  plus the icon's width
                //  if the "inside" property is set to FALSE, then this will be the distance between the element and the icon.
                //  leave it to FALSE to use the element's existing padding
                //
                //  default is FALSE
                icon_margin: false,

                //  icon's position
                //  accepted values are "left" and "right"
                //  if the "inside" property is set to TRUE, this will always be "right"
                //
                //  default is "right"
                icon_position: 'right',

                //  should the icon for opening the datepicker be inside the element?
                //  if set to FALSE, the icon will be placed to the right of the parent element, while if set to TRUE it will
                //  be placed to the right of the parent element, but *inside* the element itself
                //
                //  default is TRUE
                inside: true,

                //  the caption for the "Clear" button
                lang_clear_date: 'Clear date',

                //  months names
                months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

                //  by default, the abbreviated name of a month consists of the first 3 letters from the month's full name;
                //  while this is common for most languages, there are also exceptions for languages like Thai, Loa, Myanmar,
                //  etc. where this is not correct; for these cases, specify an array with the abbreviations to be used for
                //  the months of the year; leave it FALSE to use the first 3 letters of a month's name as the abbreviation.
                //
                //  default is FALSE
                months_abbr: false,

                //  HTML to be used for previous/next and up/down buttons, in that order
                //
                //  default is ['&#9664;', '&#9654;', '&#9650;', '&#9660;']
                navigation: ['&#9664;', '&#9654;', '&#9650;', '&#9660;'],

                //  the offset, in pixels (x, y), to shift the date picker's position relative to the top-right of the icon
                //  that toggles the date picker or, if the icon is disabled, relative to the top-right corner of the element
                //  the plugin is attached to.
                //
                //  note that this only applies if the position of element relative to the browser's viewport doesn't require
                //  the date picker to be placed automatically so that it is visible!
                //
                //  default is [5, -5]
                offset: [5, -5],

                //  set whether the date picker should be shown *only* when interacting with the icon
                //  note that if you also set the "show_icon" property to FALSE, you will not be able to show the date picker anymore!
                //
                //  default is FALSE
                open_icon_only: false,

                //  set this property to TRUE if you want the date picker to be shown when the parent element (if
                //  "open_icon_only" is not set to FALSE) or the associated calendar icon (if "show_icon" is set to TRUE)
                //  receive focus.
                //
                //  default is FALSE
                open_on_focus: false,

                //  if set as a jQuery element with a Zebra_DatePicker attached, that particular date picker will use the
                //  current date picker's value as starting date
                //  note that the rules set in the "direction" property will still apply, only that the reference date will
                //  not be the current system date but the value selected in the current date picker
                //  default is FALSE (not paired with another date picker)
                pair: false,

                //  should the element the calendar is attached to, be read-only?
                //  if set to TRUE, a date can be set only through the date picker and cannot be entered manually
                //
                //  default is TRUE
                readonly_element: true,

                //  enables rtl text.
                //
                //  default is FALSE
                rtl: false,

                //  should days from previous and/or next month be selectable when visible?
                //  note that if the value of this property is set to TRUE, the value of "show_other_months" will be considered
                //  TRUE regardless of the actual value!
                //
                //  default is FALSE
                select_other_months: false,

                //  should the "Clear date" button be visible?
                //
                //  accepted values are:
                //
                //  - 0 (zero) - the button for clearing a previously selected date is shown only if a previously selected date
                //  already exists; this means that if the input the date picker is attached to is empty, and the user selects
                //  a date for the first time, this button will not be visible; once the user picked a date and opens the date
                //  picker again, this time the button will be visible.
                //
                //  - TRUE will make the button visible all the time
                //
                //  - FALSE will disable the button
                //
                //  default is "0" (without quotes)
                show_clear_date: 0,

                //  should a calendar icon be added to the elements the plugin is attached to?
                //
                //  set this property's value to boolean FALSE if you don't want the calendar icon.
                //  note that the text is not visible by default, having `text-indentation` set to a big negative value, so
                //  you might want to change that in case you want to make the text visible
                //
                //  default is 'Pick a date'
                show_icon: 'Pick a date',

                //  should days from previous and/or next month be visible?
                //
                //  default is TRUE
                show_other_months: true,

                //  should the "Today" button be visible?
                //  setting it to anything but boolean FALSE will enable the button and will use the property's value as
                //  caption for the button; setting it to FALSE will disable the button
                //
                //  default is "Today"
                show_select_today: 'Today',

                //  should an extra column be shown, showing the number of each week?
                //  anything other than FALSE will enable this feature, and use the given value as column title
                //  i.e. show_week_number: 'Wk' would enable this feature and have "Wk" as the column's title
                //
                //  default is FALSE
                show_week_number: false,

                //  a default date to start the date picker with
                //  must be specified in the format defined by the "format" property, or as a JavaScript Date object
                //  note that this value is used only if there is no value in the field the date picker is attached to!
                //
                //  default is FALSE
                start_date: false,

                //  should default values, in the input field the date picker is attached to, be deleted if they are not valid
                //  according to "direction" and/or "disabled_dates"?
                //
                //  default is FALSE
                strict: false,

                //  how should the date picker start; valid values are "days", "months" and "years"
                //  note that the date picker is always cycling days-months-years when clicking in the date picker's header,
                //  and years-months-days when selecting dates (unless one or more of the views are missing due to the date's
                //  format)
                //
                //  also note that the value of the "view" property may be overridden if the date's format requires so! (i.e.
                //  "days" for the "view" property makes no sense if the date format doesn't allow the selection of days)
                //
                //  default is "days"
                view: 'days',

                //  days of the week that are considered "weekend days"
                //  valid values are 0 to 6, Sunday to Saturday
                //
                //  default values are 0 and 6 (Saturday and Sunday)
                weekend_days: [0, 6],

                //  when set to TRUE, day numbers < 10 will be prefixed with 0; set to FALSE if you don't want that
                //
                //  default is TRUE
                zero_pad: false,

                //  callback function to be executed whenever the user changes the view (days/months/years/time), as well
                //  as when the user navigates by clicking on the "next"/"previous" icons in any of the views (except for
                //  the "time" view)
                //
                //  the callback function takes 2 arguments - the first argument represents the current view (can be "days",
                //  "months", "years" or "time"), the second argument represents an array containing the "active" elements
                //  (not disabled) from the view, as jQuery elements, allowing for easy customization and interaction
                //  with particular cells in the date picker's view
                //
                //  the "this" keyword inside the callback function refers to the element the date picker is attached to,
                //  as a jQuery object
                //
                //  for simplifying searching for particular dates, each element in the second argument will also have a
                //  "date" data attribute whose format depends on the value of the "view" argument:
                //  - YYYY-MM-DD for elements in the "days" view
                //  - YYYY-MM for elements in the "months" view
                //  - YYYY for elements in the "years" view
                //
                //  note that this data attribute is not set for elements in the "time" view
                //
                //  the "this" keyword inside the callback function refers to the element the date picker is attached to!
                onChange: null,

                //  callback function to be executed when the user clicks the "Clear" button
                //
                //  the callback function takes no arguments; the "this" keyword inside the callback function refers to
                //  the element the date picker is attached to, as a jQuery object
                onClear: null,

                //  callback function to be executed when the date picker is shown
                //
                //  the callback function takes no arguments; the "this" keyword inside the callback function refers to
                //  the element the date picker is attached to, as a jQuery object
                onOpen: null,

                //  callback function to be executed when the date picker is closed, but only when the "always_visible"
                //  property is set to FALSE
                //
                //  the callback function takes no arguments; the "this" keyword inside the callback function refers to
                //  the element the date picker is attached to, as a jQuery object
                onClose: null,

                //  callback function to be executed when a date is selected
                //  the callback function takes 3 arguments:
                //  -   the date in the format specified by the "format" attribute;
                //  -   the date in YYYY-MM-DD format
                //  -   the date as a JavaScript Date object
                //
                //  the "this" keyword inside the callback function refers to the element the date picker is attached to,
                //  as a jQuery object
                onSelect: null

            },

            // private properties
            cleardate, clickables, confirm_selection, current_system_day, current_system_month, current_system_year,
            custom_class_names, custom_classes = {}, datepicker, daypicker, daypicker_cells, default_day,
            default_month, default_year, disabled_dates, enabled_dates, end_date, first_selectable_day,
            first_selectable_month, first_selectable_year, footer, header, icon, last_selectable_day, last_selectable_month,
            last_selectable_year, monthpicker, monthpicker_cells, original_attributes = {}, selected_hour, selected_minute,
            selected_second, selected_ampm, view_toggler, selected_month, selected_year, selecttoday, shim,
            show_select_today, start_date, timeout, timepicker, timepicker_config, touchmove = false, uniqueid = '', yearpicker,
            yearpicker_cells, view, views, is_touch = false, timer_interval,

            // are we running on an iOS powered device?
            is_iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform),

            // to avoid confusions, we use "plugin" to reference the current instance of the object
            plugin = this,

            // the jQuery version of the element
            // "element" (without the $) will point to the DOM element
            $element = $(element),

            /**
             *  Constructor method. Initializes the date picker.
             *
             *  @return void
             */
            init = function(update) {

                var

                    // the characters that may be present in the date format and that represent days, months, years, hours,
                    // minutes and seconds
                    date_chars = {
                        days:       ['d', 'j', 'D'],
                        months:     ['F', 'm', 'M', 'n', 't'],
                        years:      ['o', 'Y', 'y'],
                        hours:      ['G', 'g', 'H', 'h'],
                        minutes:    ['i'],
                        seconds:    ['s'],
                        ampm:       ['A', 'a']
                    },

                    // some defaults
                    type = null, data, dates, k, l, format_is_valid = false;

                // generate a random ID for each date picker (we'll use this if later a certain date picker is destroyed to
                // remove related events)
                // the code is taken from https://stackoverflow.com/a/105074
                for (k = 0; k < 3; k++) uniqueid += Math.floor((1 + Math.random()) * 0x10000).toString(16);

                // start by assuming there are no enabled/disabled dates
                disabled_dates = [];
                enabled_dates = [];

                // unless we're not just updating settings
                if (!update) {

                    // merge default settings with user-settings (
                    plugin.settings = $.extend({}, defaults, $.fn.Zebra_DatePicker.defaults, options);

                    // preserve some of element's original attributes
                    original_attributes.readonly = $element.attr('readonly');
                    original_attributes.style = $element.attr('style');
                    original_attributes.padding_left = parseInt($element.css('paddingLeft'), 10) || 0;
                    original_attributes.padding_right = parseInt($element.css('paddingRight'), 10) || 0;

                    // iterate through the element's data attributes (if any)
                    for (data in $element.data())

                        // if data attribute's name starts with "zdp_"
                        if (data.indexOf('zdp_') === 0) {

                            // remove the "zdp_" prefix
                            data = data.replace(/^zdp\_/, '');

                            // if such a property exists
                            if (undefined !== defaults[data])

                                // update the property's value
                                // (note that for the "pair" property we need to convert the property to an element)
                                plugin.settings[data] = (data === 'pair' ? $($element.data('zdp_' + data)) : $element.data('zdp_' + data));

                        }

                }

                // if the element should be read-only, set the "readonly" attribute
                if (plugin.settings.readonly_element) $element.attr('readonly', 'readonly');

                // otherwise remove it (in case it is present)
                else $element.removeAttr('readonly');

                // assume there's no timepicker
                timepicker_config = false;

                // the views the user can cycle through
                views = [];

                // as long as the format is invalid
                while (!format_is_valid) {

                    // determine the views the user can cycle through, depending on the format
                    // that is, if the format doesn't contain the day, the user will be able to cycle only through years and months,
                    // whereas if the format doesn't contain months nor days, the user will only be able to select years

                    // iterate through all the character blocks
                    for (type in date_chars)

                        // iterate through the characters of each block
                        $.each(date_chars[type], function(index, character) {

                            var i, max;

                            // if current character exists in the "format" property
                            if (plugin.settings.format.indexOf(character) > -1)

                                // if user can cycle through the "days" view
                                if (type === 'days') views.push('days');

                                // if user can cycle through the "months" view
                                else if (type === 'months') views.push('months');

                                // if user can cycle through the "years" view
                                else if (type === 'years') views.push('years');

                                // if time is available in the date's format and time picker is not explicitly disabled
                                else if ((type === 'hours' || type === 'minutes' || type === 'seconds' || type === 'ampm') && !plugin.settings.disable_time_picker) {

                                    // if variable is not yet initialized
                                    if (!timepicker_config) {

                                        // initialize the variable now
                                        timepicker_config = {is12hour: false};

                                        // users may access the "time" view
                                        views.push('time');

                                    }

                                    // if hours are available in the date's format
                                    if (type === 'hours') {

                                        // store the hour's format
                                        timepicker_config.hour_format = character;

                                        // selectable hours (12 or 24) depending on the format
                                        if (character === 'g' || character === 'h') {

                                            max = 12;

                                            // set a flag telling that the hour is 12 hour format
                                            timepicker_config.is12hour = true;

                                        } else max = 24;

                                        timepicker_config.hours = [];

                                        // make sure we treat values as integers
                                        // (or this won't work when doing $.inArray(): enabled_hours: ['11', '12', '13'])
                                        if ($.isArray(plugin.settings.enabled_hours)) plugin.settings.enabled_hour = plugin.settings.enabled_hours.map(function(value) { return parseInt(value, 10); });

                                        // iterate through valid hours
                                        for (i = (max === 12 ? 1 : 0); i < (max === 12 ? 13 : max); i++)

                                            // and add them to the lookup array if a user-defined list of values doesn't exist, or if the value is in that list
                                            if (!$.isArray(plugin.settings.enabled_hours) || $.inArray(i, plugin.settings.enabled_hours) > -1) timepicker_config.hours.push(i);

                                    // if minutes are available in the date's format
                                    } else if (type === 'minutes') {

                                        timepicker_config.minutes = [];

                                        // make sure we treat values as integers
                                        // (or this won't work when doing $.inArray(): enabled_minutes: ['11', '12', '13'])
                                        if ($.isArray(plugin.settings.enabled_minutes)) plugin.settings.enabled_minutes = plugin.settings.enabled_minutes.map(function(value) { return parseInt(value, 10); });

                                        // iterate through valid minutes
                                        for (i = 0; i < 60; i++)

                                            // and add them to the lookup array if a user-defined list of values doesn't exist, or if the value is in that list
                                            if (!$.isArray(plugin.settings.enabled_minutes) || $.inArray(i, plugin.settings.enabled_minutes) > -1) timepicker_config.minutes.push(i);

                                    // if seconds are available in the date's format
                                    } else if (type === 'seconds') {

                                        timepicker_config.seconds = [];

                                        // make sure we treat values as integers
                                        // (or this won't work when doing $.inArray(): enabled_seconds: ['11', '12', '13'])
                                        if ($.isArray(plugin.settings.enabled_seconds)) plugin.settings.enabled_seconds = plugin.settings.enabled_seconds.map(function(value) { return parseInt(value, 10); });

                                        // iterate through valid minutes
                                        for (i = 0; i < 60; i++)

                                            // and add them to the lookup array if a user-defined list of values doesn't exist, or if the value is in that list
                                            if (!$.isArray(plugin.settings.enabled_seconds) || $.inArray(i, plugin.settings.enabled_seconds) > -1) timepicker_config.seconds.push(i);

                                    // if am/pm is available in the date's format
                                    } else {

                                        // we'll use this to show AM/PM or am/pm, depending on the format
                                        timepicker_config.ampm_case = character;

                                        // if custom values are specified and values are "am" and/or "pm"
                                        if ($.isArray(plugin.settings.enabled_ampm) && $.grep(plugin.settings.enabled_ampm, function(value) { return $.inArray(value.toLowerCase(), ['am', 'pm']) > -1; }).length)

                                            // use the given value(s)
                                            timepicker_config.ampm = plugin.settings.enabled_ampm;

                                        // use default values
                                        else timepicker_config.ampm = ['am', 'pm'];

                                    }

                                }

                        });

                    // if time format contains hours, am/pm needs to be shown but the hours are in 24-hour format
                    if (timepicker_config.hour_format && timepicker_config.ampm && timepicker_config.is12hour === false)

                        // replace the hour's format from a 24-hour format to a 12-hour format
                        plugin.settings.format = plugin.settings.format.replace(timepicker_config.hour_format, timepicker_config.hour_format.toLowerCase());

                    // otherwise, consider the format as valid
                    else format_is_valid = true;

                }

                // if invalid format (no days, no months, no years) use the default where the user is able to cycle through
                // all the views, except time
                if (views.length === 0) views = ['years', 'months', 'days'];

                // if the starting view is not amongst the views the user can cycle through, set the correct starting view
                if ($.inArray(plugin.settings.view, views) === -1) plugin.settings.view = views[views.length - 1];

                // parse the rules for disabling dates and turn them into arrays of arrays

                custom_class_names = [];
                for (k in plugin.settings.custom_classes) if (plugin.settings.custom_classes.hasOwnProperty(k) && custom_class_names.indexOf(k) === -1) custom_class_names.push(k);

                // it's the same logic for preparing the enabled/disable dates, as well as dates that have custom classes
                for (l = 0; l < 2 + custom_class_names.length; l++) {

                    // first time we're doing disabled dates,
                    if (l === 0) dates = plugin.settings.disabled_dates;

                    // second time we're doing enabled_dates
                    else if (l === 1) dates = plugin.settings.enabled_dates;

                    // otherwise, we're doing dates that will have custom classes
                    else dates = plugin.settings.custom_classes[custom_class_names[l - 2]];

                    // if we have a non-empty array
                    if ($.isArray(dates) && dates.length > 0)

                        // iterate through the rules
                        $.each(dates, function() {

                            // split the values in rule by white space
                            var rules = this.split(' '), i, j, k, limits;

                            // there can be a maximum of 4 rules (days, months, years and, optionally, day of the week)
                            for (i = 0; i < 4; i++) {

                                // if one of the values is not available
                                // replace it with a * (wildcard)
                                if (!rules[i]) rules[i] = '*';

                                // if rule contains a comma, create a new array by splitting the rule by commas
                                // if there are no commas create an array containing the rule's string
                                rules[i] = (rules[i].indexOf(',') > -1 ? rules[i].split(',') : new Array(rules[i]));

                                // iterate through the items in the rule
                                for (j = 0; j < rules[i].length; j++)

                                    // if item contains a dash (defining a range)
                                    if (rules[i][j].indexOf('-') > -1) {

                                        // get the lower and upper limits of the range
                                        limits = rules[i][j].match(/^([0-9]+)\-([0-9]+)/);

                                        // if range is valid
                                        if (null !== limits) {

                                            // iterate through the range
                                            for (k = to_int(limits[1]); k <= to_int(limits[2]); k++)

                                                // if value is not already among the values of the rule
                                                // add it to the rule
                                                if ($.inArray(k, rules[i]) === -1) rules[i].push(k + '');

                                            // remove the range indicator
                                            rules[i].splice(j, 1);

                                        }

                                    }

                                // iterate through the items in the rule
                                // and make sure that numbers are numbers
                                for (j = 0; j < rules[i].length; j++) rules[i][j] = (isNaN(to_int(rules[i][j])) ? rules[i][j] : to_int(rules[i][j]));

                            }

                            // add to the correct list of processed rules
                            // first time we're doing disabled dates,
                            if (l === 0) disabled_dates.push(rules);

                            // second time we're doing enabled_dates
                            else if (l === 1) enabled_dates.push(rules);

                            // otherwise, we're doing the dates to which custom classes need to be applied
                            else {

                                if (undefined === custom_classes[custom_class_names[l - 2]]) custom_classes[custom_class_names[l - 2]] = [];
                                custom_classes[custom_class_names[l - 2]].push(rules);

                            }

                        });

                }

                var

                    // cache the current date (which is either the system's date or a custom one, if given)
                    date = plugin.settings.current_date !== false ? new Date(plugin.settings.current_date) : new Date(),

                    // when the date picker's starting date depends on the value of another date picker, this value will be
                    // set by the other date picker
                    // this value will be used as base for all calculations (if not set, will be the same as the current
                    // system date)
                    reference_date = (!plugin.settings.reference_date ? ($element.data('zdp_reference_date') && undefined !== $element.data('zdp_reference_date') ? $element.data('zdp_reference_date') : date) : plugin.settings.reference_date),

                    tmp_start_date, tmp_end_date;

                // reset these values here as this method might be called more than once during a date picker's lifetime
                // (when the selectable dates depend on the values from another date picker)
                start_date = undefined; end_date = undefined;

                // extract the date parts
                // also, save the current system month/day/year - we'll use them to highlight the current system date
                first_selectable_month = reference_date.getMonth();
                current_system_month = date.getMonth();
                first_selectable_year = reference_date.getFullYear();
                current_system_year = date.getFullYear();
                first_selectable_day = reference_date.getDate();
                current_system_day = date.getDate();

                // check if the calendar has any restrictions

                // calendar is future-only, starting today
                // it means we have a starting date (the current system date), but no ending date
                if (plugin.settings.direction === true) start_date = reference_date;

                // calendar is past only, ending today
                else if (plugin.settings.direction === false) {

                    // it means we have an ending date (the reference date), but no starting date
                    end_date = reference_date;

                    // extract the date parts
                    last_selectable_month = end_date.getMonth();
                    last_selectable_year = end_date.getFullYear();
                    last_selectable_day = end_date.getDate();

                } else if (

                    // if direction is not given as an array and the value is an integer > 0
                    (!$.isArray(plugin.settings.direction) && is_integer(plugin.settings.direction) && to_int(plugin.settings.direction) > 0) ||

                    // or direction is given as an array
                    ($.isArray(plugin.settings.direction) && (

                        // and first entry is a valid date
                        (tmp_start_date = check_date(plugin.settings.direction[0])) ||
                        // or a boolean TRUE
                        plugin.settings.direction[0] === true ||
                        // or an integer > 0
                        (is_integer(plugin.settings.direction[0]) && plugin.settings.direction[0] > 0)

                    ) && (

                        // and second entry is a valid date
                        (tmp_end_date = check_date(plugin.settings.direction[1])) ||
                        // or a boolean FALSE
                        plugin.settings.direction[1] === false ||
                        // or integer >= 0
                        (is_integer(plugin.settings.direction[1]) && plugin.settings.direction[1] >= 0)

                    ))

                ) {

                    // if an exact starting date was given, use that as a starting date
                    if (tmp_start_date) start_date = tmp_start_date;

                    // otherwise
                    else

                        // figure out the starting date
                        // use the Date object to normalize the date
                        // for example, 2011 05 33 will be transformed to 2011 06 02
                        start_date = new Date(
                            first_selectable_year,
                            first_selectable_month,
                            first_selectable_day + (!$.isArray(plugin.settings.direction) ? to_int(plugin.settings.direction) : to_int(plugin.settings.direction[0] === true ? 0 : plugin.settings.direction[0]))
                        );

                    // re-extract the date parts
                    first_selectable_month = start_date.getMonth();
                    first_selectable_year = start_date.getFullYear();
                    first_selectable_day = start_date.getDate();

                    // if an exact ending date was given and the date is after the starting date, use that as a ending date
                    if (tmp_end_date && +tmp_end_date >= +start_date) end_date = tmp_end_date;

                    // if have information about the ending date
                    else if (!tmp_end_date && plugin.settings.direction[1] !== false && $.isArray(plugin.settings.direction))

                        // figure out the ending date
                        // use the Date object to normalize the date
                        // for example, 2011 05 33 will be transformed to 2011 06 02
                        end_date = new Date(
                            first_selectable_year,
                            first_selectable_month,
                            first_selectable_day + to_int(plugin.settings.direction[1])
                        );

                    // if a valid ending date exists
                    if (end_date) {

                        // extract the date parts
                        last_selectable_month = end_date.getMonth();
                        last_selectable_year = end_date.getFullYear();
                        last_selectable_day = end_date.getDate();

                    }

                } else if (

                    // if direction is not given as an array and the value is an integer < 0
                    (!$.isArray(plugin.settings.direction) && is_integer(plugin.settings.direction) && to_int(plugin.settings.direction) < 0) ||

                    // or direction is given as an array
                    ($.isArray(plugin.settings.direction) && (

                        // and first entry is boolean FALSE
                        plugin.settings.direction[0] === false ||
                        // or an integer < 0
                        (is_integer(plugin.settings.direction[0]) && plugin.settings.direction[0] < 0)

                    ) && (

                        // and second entry is a valid date
                        (tmp_start_date = check_date(plugin.settings.direction[1])) ||
                        // or an integer >= 0
                        (is_integer(plugin.settings.direction[1]) && plugin.settings.direction[1] >= 0)

                    ))

                ) {

                    // figure out the ending date
                    // use the Date object to normalize the date
                    // for example, 2011 05 33 will be transformed to 2011 06 02
                    end_date = new Date(
                        first_selectable_year,
                        first_selectable_month,
                        first_selectable_day + (!$.isArray(plugin.settings.direction) ? to_int(plugin.settings.direction) : to_int(plugin.settings.direction[0] === false ? 0 : plugin.settings.direction[0]))
                    );

                    // re-extract the date parts
                    last_selectable_month = end_date.getMonth();
                    last_selectable_year = end_date.getFullYear();
                    last_selectable_day = end_date.getDate();

                    // if an exact starting date was given, and the date is before the ending date, use that as a starting date
                    if (tmp_start_date && +tmp_start_date < +end_date) start_date = tmp_start_date;

                    // if have information about the starting date
                    else if (!tmp_start_date && $.isArray(plugin.settings.direction))

                        // figure out the staring date
                        // use the Date object to normalize the date
                        // for example, 2011 05 33 will be transformed to 2011 06 02
                        start_date = new Date(
                            last_selectable_year,
                            last_selectable_month,
                            last_selectable_day - to_int(plugin.settings.direction[1])
                        );

                    // if a valid starting date exists
                    if (start_date) {

                        // extract the date parts
                        first_selectable_month = start_date.getMonth();
                        first_selectable_year = start_date.getFullYear();
                        first_selectable_day = start_date.getDate();

                    }

                // if there are disabled dates
                } else if ($.isArray(plugin.settings.disabled_dates) && plugin.settings.disabled_dates.length > 0)

                    // iterate through the rules for disabling dates
                    for (var interval in disabled_dates)

                        // only if there is a rule that disables *everything*
                        if ($.inArray('*', disabled_dates[interval][0]) > -1 && $.inArray('*', disabled_dates[interval][1]) > -1 && $.inArray('*', disabled_dates[interval][2]) > -1 && $.inArray('*', disabled_dates[interval][3]) > -1) {

                            var tmpDates = [];

                            // iterate through the rules for enabling dates
                            // looking for the minimum/maximum selectable date (if it's the case)
                            $.each(enabled_dates, function() {

                                var rule = this;

                                // if the rule doesn't apply to all years
                                if (rule[2][0] !== '*')

                                    // format date and store it in our stack
                                    tmpDates.push(parseInt(
                                        rule[2][0] +
                                        (rule[1][0] === '*' ? '12' : str_pad(rule[1][0], 2)) +
                                        (rule[0][0] === '*' ? (rule[1][0] === '*' ? '31' : new Date(rule[2][0], rule[1][0], 0).getDate()) : str_pad(rule[0][0], 2)), 10));

                            });

                            // sort dates ascending
                            tmpDates.sort();

                            // if we have any rules
                            if (tmpDates.length > 0) {

                                // get date parts
                                var matches = (tmpDates[0] + '').match(/([0-9]{4})([0-9]{2})([0-9]{2})/);

                                // assign the date parts to the appropriate variables
                                first_selectable_year = parseInt(matches[1], 10);
                                first_selectable_month = parseInt(matches[2], 10) - 1;
                                first_selectable_day = parseInt(matches[3], 10);

                            }

                            // don't look further
                            break;

                        }

                // if first selectable date exists but is disabled, find the actual first selectable date
                if (is_disabled(first_selectable_year, first_selectable_month, first_selectable_day)) {

                    // loop until we find the first selectable year
                    while (is_disabled(first_selectable_year))

                        // if calendar is past-only,
                        if (!start_date) {

                            // decrement the year
                            first_selectable_year--;

                            // because we've changed years, reset the month to December
                            first_selectable_month = 11;

                            // because we've changed months, reset the day to the 1st
                            first_selectable_day = 1;

                        // otherwise
                        } else {

                            // increment the year
                            first_selectable_year++;

                            // because we've changed years, reset the month to January
                            first_selectable_month = 0;

                            // because we've changed months, reset the day to the 1st
                            first_selectable_day = 1;

                        }

                    // loop until we find the first selectable month
                    while (is_disabled(first_selectable_year, first_selectable_month)) {

                        // if calendar is past-only
                        if (!start_date) {

                            // decrement the month
                            first_selectable_month--;

                            // because we've changed months, reset the day to the last day of the month
                            first_selectable_day = new Date(first_selectable_year, first_selectable_month + 1, 0).getDate();

                        // otherwise
                        } else {

                            // increment the month
                            first_selectable_month++;

                            // because we've changed months, reset the day to the first day of the month
                            first_selectable_day = 1;

                        }

                        // if we moved to a following year
                        if (first_selectable_month > 11) {

                            // increment the year
                            first_selectable_year++;

                            // reset the month to January
                            first_selectable_month = 0;

                            // because we've changed months, reset the day to the first day of the month
                            first_selectable_day = 1;

                        // if we moved to a previous year
                        } else if (first_selectable_month < 0) {

                            // decrement the year
                            first_selectable_year--;

                            // reset the month to December
                            first_selectable_month = 11;

                            // because we've changed months, reset the day to the last day of the month
                            first_selectable_day = new Date(first_selectable_year, first_selectable_month + 1, 0).getDate();

                        }

                    }

                    // loop until we find the first selectable day
                    while (is_disabled(first_selectable_year, first_selectable_month, first_selectable_day)) {

                        // if calendar is past-only, decrement the day
                        if (!start_date) first_selectable_day--;

                        // otherwise, increment the day
                        else first_selectable_day++;

                        // use the Date object to normalize the date
                        // for example, 2011 05 33 will be transformed to 2011 06 02
                        date = new Date(first_selectable_year, first_selectable_month, first_selectable_day);

                        // re-extract date parts from the normalized date
                        // as we use them in the current loop
                        first_selectable_year = date.getFullYear();
                        first_selectable_month = date.getMonth();
                        first_selectable_day = date.getDate();

                    }

                    // use the Date object to normalize the date
                    // for example, 2011 05 33 will be transformed to 2011 06 02
                    date = new Date(first_selectable_year, first_selectable_month, first_selectable_day);

                    // re-extract date parts from the normalized date
                    // as we use them in the current loop
                    first_selectable_year = date.getFullYear();
                    first_selectable_month = date.getMonth();
                    first_selectable_day = date.getDate();

                }

                // if "start_date" is given as JavaScript Date object...
                if (plugin.settings.start_date && typeof plugin.settings.start_date === 'object' && plugin.settings.start_date instanceof Date)

                    // ...convert it the a properly formatted string
                    plugin.settings.start_date = format(plugin.settings.start_date);

                // get the default date, from the element, and check if it represents a valid date, according to the required format
                var default_date = check_date($element.val() || (plugin.settings.start_date ? plugin.settings.start_date : ''));

                // if there is a default date, date picker is in "strict" mode, and the default date is disabled
                if (default_date && plugin.settings.strict && is_disabled(default_date.getFullYear(), default_date.getMonth(), default_date.getDate()))

                    // clear the value of the parent element
                    $element.val('');

                // updates value for the date picker whose starting date depends on the selected date (if any)
                if (!update && (undefined !== start_date || undefined !== default_date))
                    update_dependent(undefined !== default_date ? default_date : start_date);

                // if date picker is not always visible in a container
                if (!(plugin.settings.always_visible instanceof jQuery)) {

                    // if we're just creating the date picker
                    if (!update) {

                        // if a calendar icon should be added to the element the plugin is attached to, create the icon now
                        if (plugin.settings.show_icon !== false) {

                            // strangely, in Firefox 21+ (or maybe even earlier) input elements have their "display" property
                            // set to "inline" instead of "inline-block" as do all the other browsers.
                            // because this behavior brakes the positioning of the icon, we'll set the "display" property to
                            // "inline-block" before anything else;
                            if (browser.name === 'firefox' && $element.is('input[type="text"]') && $element.css('display') === 'inline') $element.css('display', 'inline-block');

                            // we create a wrapper for the parent element so that we can later position the icon
                            // also, make sure the wrapper inherits positioning properties of the target element
                            var marginTop = parseInt($element.css('marginTop'), 10) || 0,
                                marginRight = parseInt($element.css('marginRight'), 10) || 0,
                                marginBottom = parseInt($element.css('marginBottom'), 10) || 0,
                                marginLeft = parseInt($element.css('marginLeft'), 10) || 0,
                                icon_wrapper = $('<span class="Zebra_DatePicker_Icon_Wrapper"></span>').css({
                                    display:        $element.css('display'),
                                    position:       $element.css('position') === 'static' ? 'relative' : $element.css('position'),
                                    float:          $element.css('float'),
                                    top:            $element.css('top'),
                                    right:          $element.css('right'),
                                    bottom:         $element.css('bottom'),
                                    left:           $element.css('left'),
                                    marginTop:      marginTop < 0 ? marginTop : 0,
                                    marginRight:    marginRight < 0 ? marginRight : 0,
                                    marginBottom:   marginBottom < 0 ? marginBottom : 0,
                                    marginLeft:     marginLeft < 0 ? marginLeft : 0,
                                    paddingTop:     marginTop,
                                    paddingRight:   marginRight,
                                    paddingBottom:  marginBottom,
                                    paddingLeft:    marginLeft
                                });

                            // if parent element has its "display" property set to "block"
                            // the wrapper has to have its "width" set
                            if ($element.css('display') === 'block') icon_wrapper.css('width', $element.outerWidth(true));

                            // put wrapper around the element
                            // also, reset the target element's positioning properties
                            $element.wrap(icon_wrapper).css({
                                position:       'relative',
                                float:          'none',
                                top:            'auto',
                                right:          'auto',
                                bottom:         'auto',
                                left:           'auto',
                                marginTop:      0,
                                marginRight:    0,
                                marginBottom:   0,
                                marginLeft:     0
                            });

                            // create the actual calendar icon (show a disabled icon if the element is disabled)
                            icon = $('<button type="button" class="Zebra_DatePicker_Icon' + ($element.attr('disabled') === 'disabled' ? ' Zebra_DatePicker_Icon_Disabled' : '') + '">' + plugin.settings.show_icon + '</button>');

                            // a reference to the icon, as a global property
                            plugin.icon = icon;

                            // the date picker will open when clicking both the icon and the element the plugin is attached to
                            // (or the icon only, if set so)
                            clickables = plugin.settings.open_icon_only ? icon : icon.add($element);

                        // if calendar icon is not visible, the date picker will open when clicking the element
                        } else clickables = $element;

                        // attach the "click" and, if required, the "focus" event to the clickable elements (icon and/or element)
                        clickables.on('click.Zebra_DatePicker_' + uniqueid + (plugin.settings.open_on_focus ? ' focus.Zebra_DatePicker_' + uniqueid : ''), function() {

                            // if date picker is not visible and element is not disabled
                            if (datepicker.hasClass('dp_hidden') && !$element.attr('disabled'))

                                // if not a touch-enabled device or the element is read-only, show the date picker right away
                                if (!(is_touch && !plugin.settings.readonly_element)) plugin.show();

                                // if touch-enabled device and the element is not read-only
                                else {

                                    // stop a previously started timeout, if any
                                    clearTimeout(timeout);

                                    // wait for 600 milliseconds for the virtual keyboard to appear and show the date picker afterwards
                                    timeout = setTimeout(function() {
                                        plugin.show();
                                    }, 600);

                                }

                        });

                        // attach a keydown event to the clickable elements (icon and/or element)
                        clickables.on('keydown.Zebra_DatePicker_' + uniqueid, function(e) {

                            // if "Tab" key was pressed and the date picker is visible
                            if (e.keyCode === 9 && !datepicker.hasClass('dp_hidden'))

                                // hide the date picker
                                plugin.hide();

                        });

                        // if users can manually enter dates and a pair date element exists
                        if (!plugin.settings.readonly_element && plugin.settings.pair)

                            // whenever the element looses focus
                            $element.on('blur.Zebra_DatePicker_' + uniqueid, function() {

                                var date;

                                // if a valid date was entered, update the paired date picker
                                if ((date = check_date($(this).val())) && !is_disabled(date.getFullYear(), date.getMonth(), date.getDate())) update_dependent(date);

                            });

                        // if icon exists, inject it into the DOM, right after the parent element (and inside the wrapper)
                        if (undefined !== icon) icon.insertAfter($element);

                    }

                    // if calendar icon exists
                    if (undefined !== icon) {

                        // needed when updating: remove any inline style set previously by library,
                        // so we get the right values below
                        icon.attr('style', '');

                        var

                            // get element's width and height (including margins)
                            element_width = $element.outerWidth(),
                            element_height = $element.outerHeight(),

                            // get icon's width, height and margins
                            icon_width = icon.outerWidth(),
                            icon_height = icon.outerHeight();

                        // set icon's vertical position
                        icon.css('top', (element_height - icon_height) / 2);

                        // if icon is to be placed *inside* the element
                        // position the icon accordingly
                        if (plugin.settings.inside)

                            // if icon is to be placed on the right
                            if (plugin.settings.icon_position === 'right') {

                                // place the icon to the right, respecting the element's right padding
                                icon.css('right', plugin.settings.icon_margin !== false ? plugin.settings.icon_margin : original_attributes.padding_right);

                                // also, adjust the element's right padding
                                $element.css('paddingRight', ((plugin.settings.icon_margin !== false ? plugin.settings.icon_margin : original_attributes.padding_right) * 2) + icon_width);

                            // if icon is to be placed on the left
                            } else {

                                // place the icon to the left, respecting the element's left padding
                                icon.css('left', plugin.settings.icon_margin !== false ? plugin.settings.icon_margin : original_attributes.padding_left);

                                // also, adjust the element's left padding
                                $element.css('paddingLeft', ((plugin.settings.icon_margin !== false ? plugin.settings.icon_margin : original_attributes.padding_left) * 2) + icon_width);

                            }

                        // if icon is to be placed to the right of the element
                        // position the icon accordingly
                        else icon.css('left', element_width + (plugin.settings.icon_margin !== false ? plugin.settings.icon_margin : original_attributes.padding_left));

                        // assume the datepicker is not disabled
                        icon.removeClass('Zebra_DatePicker_Icon_Disabled');

                        // if element the datepicker is attached to became disabled, disable the calendar icon, too
                        if ($element.attr('disabled') === 'disabled') icon.addClass('Zebra_DatePicker_Icon_Disabled');

                    }

                }

                // if the "Today" button is to be shown and it makes sense to be shown
                // (the "days" view is available and "today" is not a disabled date)
                show_select_today = (plugin.settings.show_select_today !== false && $.inArray('days', views) > -1 && !is_disabled(current_system_year, current_system_month, current_system_day) ? plugin.settings.show_select_today : false);

                // if we just needed to recompute the things above
                if (update) {

                    // make sure we update these strings, in case they've changed
                    $('.dp_previous', datepicker).html(plugin.settings.navigation[0]);
                    $('.dp_next', datepicker).html(plugin.settings.navigation[1]);
                    $('.dp_time_controls_increase .dp_time_control', datepicker).html(plugin.settings.navigation[2]);
                    $('.dp_time_controls_decrease .dp_time_control', datepicker).html(plugin.settings.navigation[3]);
                    $('.dp_clear', datepicker).html(plugin.settings.lang_clear_date);
                    $('.dp_today', datepicker).html(plugin.settings.show_select_today);

                    // if the date picker is visible at this time
                    if (datepicker.is(':visible')) {

                        // store the default view when opening the date picker
                        k = plugin.settings.view;

                        // make the current view the default view
                        plugin.settings.view = view;

                        // repaint the date picker
                        // (the "FALSE" argument tells the script to not fire the onOpen and onChange events when doing this)
                        plugin.show(false);

                        // if we had to handle the view
                        // restore the default view
                        plugin.settings.view = k;

                    }

                    // in case "container" has changed
                    if (datepicker.parent() !== plugin.settings.container)

                        // remove from the old one and place in the one one
                        plugin.settings.container.append(datepicker.detach());

                    // don't go further
                    return;

                }

                // update icon/date picker position on resize and/or changing orientation
                $(window).on('resize.Zebra_DatePicker_' + uniqueid + ', orientationchange.Zebra_DatePicker_' + uniqueid, function() {

                    // hide the date picker
                    plugin.hide();

                });

                // generate the container that will hold everything
                var html = '' +
                    '<div class="Zebra_DatePicker">' +
                        '<table class="dp_header dp_actions">' +
                            '<tr>' +
                                '<td class="dp_previous">' + plugin.settings.navigation[0] + (is_iOS ? '&#xFE0E;' : '') + '</td>' +
                                '<td class="dp_caption"></td>' +
                                '<td class="dp_next">' + plugin.settings.navigation[1] + (is_iOS ? '&#xFE0E;' : '') + '</td>' +
                            '</tr>' +
                        '</table>' +
                        '<table class="dp_daypicker' + (plugin.settings.show_week_number ? ' dp_week_numbers' : '') + ' dp_body"></table>' +
                        '<table class="dp_monthpicker dp_body"></table>' +
                        '<table class="dp_yearpicker dp_body"></table>' +
                        '<table class="dp_timepicker dp_body"></table>' +
                        '<table class="dp_footer dp_actions"><tr>' +
                            '<td class="dp_today">' + show_select_today + '</td>' +
                            '<td class="dp_clear">' + plugin.settings.lang_clear_date + '</td>' +
                            '<td class="dp_view_toggler dp_icon">&nbsp;&nbsp;&nbsp;&nbsp;</td>' +
                            '<td class="dp_confirm dp_icon"></td>' +
                        '</tr></table>' +
                    '</div>';

                // create a jQuery object out of the HTML above and create a reference to it
                datepicker = $(html);

                // create references to the different parts of the date picker
                header = $('table.dp_header', datepicker);
                daypicker = $('table.dp_daypicker', datepicker);
                monthpicker = $('table.dp_monthpicker', datepicker);
                yearpicker = $('table.dp_yearpicker', datepicker);
                timepicker = $('table.dp_timepicker', datepicker);
                footer = $('table.dp_footer', datepicker);
                selecttoday = $('td.dp_today', footer);
                cleardate = $('td.dp_clear', footer);
                view_toggler = $('td.dp_view_toggler', footer);
                confirm_selection = $('td.dp_confirm', footer);

                // if date picker is not always visible in a container
                if (!(plugin.settings.always_visible instanceof jQuery))

                    // inject the container into the DOM
                    plugin.settings.container.append(datepicker);

                // otherwise, if element is not disabled
                else if (!$element.attr('disabled')) {

                    // inject the date picker into the designated container element
                    plugin.settings.always_visible.append(datepicker);

                    // and make it visible right away
                    plugin.show();

                }

                // add the mouseover/mouseout events to all to the date picker's cells
                // except those that are not selectable
                datepicker
                    .on('mouseover', 'td:not(.dp_disabled)', function() {
                        $(this).addClass('dp_hover');
                    })
                    .on('mouseout', 'td:not(.dp_disabled)', function() {
                        $(this).removeClass('dp_hover');
                    });

                // prevent text selection (prevent accidental select when user clicks too fast)
                disable_text_select(datepicker);

                // event for when clicking the "previous" button
                // (directions are inverted when in RTL mode)
                $(plugin.settings.rtl ? '.dp_next' : '.dp_previous', header).on('click', function() {

                    // if view is "months"
                    // decrement year by one
                    if (view === 'months') selected_year--;

                    // if view is "years"
                    // decrement years by 12
                    else if (view === 'years') selected_year -= 12;

                    // if view is "days"
                    // decrement the month and
                    // if month is out of range
                    else if (--selected_month < 0) {

                        // go to the last month of the previous year
                        selected_month = 11;
                        selected_year--;

                    }

                    // generate the appropriate view
                    manage_views();

                });

                // if "fast_navigation" is enabled, allow clicking the upper label for quickly navigating through months and years
                if (plugin.settings.fast_navigation)

                    // attach a click event to the caption in header
                    $('.dp_caption', header).on('click', function() {

                        // if current view is "days", take the user to the next view, depending on the format
                        if (view === 'days') view = ($.inArray('months', views) > -1 ? 'months' : ($.inArray('years', views) > -1 ? 'years' : 'days'));

                        // if current view is "months", take the user to the next view, depending on the format
                        else if (view === 'months') view = ($.inArray('years', views) > -1 ? 'years' : ($.inArray('days', views) > -1 ? 'days' : 'months'));

                        // if current view is "years", take the user to the next view, depending on the format
                        else view = ($.inArray('days', views) > -1 ? 'days' : ($.inArray('months', views) > -1 ? 'months' : 'years'));

                        // generate the appropriate view
                        manage_views();

                    });

                // event for when clicking the "next" button
                // (directions are inverted when in RTL mode)
                $(plugin.settings.rtl ? '.dp_previous' : '.dp_next', header).on('click', function() {

                    // if view is "months"
                    // increment year by 1
                    if (view === 'months') selected_year++;

                    // if view is "years"
                    // increment years by 12
                    else if (view === 'years') selected_year += 12;

                    // if view is "days"
                    // increment the month and
                    // if month is out of range
                    else if (++selected_month === 12) {

                        // go to the first month of the next year
                        selected_month = 0;
                        selected_year++;

                    }

                    // generate the appropriate view
                    manage_views();

                });

                // attach a click event for the cells in the day picker
                daypicker.on('click', 'td:not(.dp_disabled)', function() {

                    var matches;

                    // if other months are selectable and currently clicked cell contains a class with the cell's date
                    if (plugin.settings.select_other_months && $(this).attr('class') && null !== (matches = $(this).attr('class').match(/date\_([0-9]{4})(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])/)))

                        // use the stored date
                        select_date(matches[1], matches[2] - 1, matches[3], 'days', $(this));

                    // put selected date in the element the plugin is attached to, and hide the date picker
                    else select_date(selected_year, selected_month, to_int($(this).html()), 'days', $(this));

                });

                // attach a click event for the cells in the month picker
                monthpicker.on('click', 'td:not(.dp_disabled)', function() {

                    // get the month we've clicked on
                    var matches = $(this).attr('class').match(/dp\_month\_([0-9]+)/);

                    // set the selected month
                    selected_month = to_int(matches[1]);

                    // if user can select only years and months
                    if ($.inArray('days', views) === -1)

                        // put selected date in the element the plugin is attached to, and hide the date picker
                        select_date(selected_year, selected_month, 1, 'months', $(this));

                    else {

                        // direct the user to the "days" view
                        view = 'days';

                        // if date picker is always visible
                        // empty the value in the text box the date picker is attached to
                        if (plugin.settings.always_visible) $element.val('');

                        // generate the appropriate view
                        manage_views();

                    }

                });

                // attach a click event for the cells in the year picker
                yearpicker.on('click', 'td:not(.dp_disabled)', function() {

                    // set the selected year
                    selected_year = to_int($(this).html());

                    // if user can select only years
                    if ($.inArray('months', views) === -1)

                        // put selected date in the element the plugin is attached to, and hide the date picker
                        select_date(selected_year, 0, 1, 'years', $(this));

                    else {

                        // direct the user to the "months" view
                        view = 'months';

                        // if date picker is always visible
                        // empty the value in the text box the date picker is attached to
                        if (plugin.settings.always_visible) $element.val('');

                        // generate the appropriate view
                        manage_views();

                    }

                });

                // function to execute when the "Today" button is clicked
                selecttoday.on('click', function(e) {

                    // date might have changed since we opened the date picker, so always use the current date
                    var date = plugin.settings.current_date !== false ? new Date(plugin.settings.current_date) : new Date();

                    e.preventDefault();

                    // select the current date
                    select_date(date.getFullYear(), date.getMonth(), date.getDate(), 'days', $('.dp_current', daypicker));

                });

                // function to execute when the "Clear" button is clicked
                cleardate.on('click', function(e) {

                    e.preventDefault();

                    // clear the element's value
                    $element.val('');

                    // reset these values
                    default_day = null; default_month = null; default_year = null;

                    // if date picker is not always visible
                    if (!plugin.settings.always_visible) {

                        // reset these values
                        selected_month = null; selected_year = null;

                    // if date picker is always visible
                    } else

                        // remove the "selected" class from all cells that have it
                        $('td.dp_selected', datepicker).removeClass('dp_selected');

                    // give the focus back to the parent element
                    $element.focus();

                    // hide the date picker
                    plugin.hide();

                    // if a callback function exists for when clearing a date
                    if (plugin.settings.onClear && typeof plugin.settings.onClear === 'function')

                        // execute the callback function and pass as argument the element the plugin is attached to
                        plugin.settings.onClear.call($element);

                });

                // function to execute when the clock/calendar button is clicked in the footer
                view_toggler.on('click', function() {

                    // if we're not in the time picker mode
                    if (view !== 'time') {

                        // switch to time picker mode
                        view = 'time';
                        manage_views();

                    // if we are already in the time picker mode,
                    // switch back to the standard view
                    // (let the click on the header's caption handle things)
                    } else $('.dp_caption', header).trigger('click');

                });

                // when the "confirm selection" button is clicked, hide the date picker
                // (visible only when in the "time" view)
                confirm_selection.on('click', function() {

                    // as users may click this before making any adjustments to time, simulate time adjustment so that
                    // a value is selected
                    $('.dp_time_controls_increase td', timepicker).first().trigger('mousedown');
                    clearInterval(timer_interval);
                    $('.dp_time_controls_decrease td', timepicker).first().trigger('mousedown');
                    clearInterval(timer_interval);

                    // if a callback function exists for when selecting a date
                    if (plugin.settings.onSelect && typeof plugin.settings.onSelect === 'function') {

                        var js_date = new Date(selected_year, selected_month, default_day,
                            (timepicker_config && timepicker_config.hours ? selected_hour + (timepicker_config.ampm && ((selected_ampm === 'pm' && selected_hour < 12) || (selected_ampm === 'am' && selected_hour === 12)) ? 12 : 0) : 0),
                            (timepicker_config && timepicker_config.minutes ? selected_minute : 0),
                            (timepicker_config && timepicker_config.seconds ? selected_second : 0)
                        );

                        // execute the callback function
                        // make "this" inside the callback function refer to the element the date picker is attached to, as a jQuery object
                        plugin.settings.onSelect.call($element, format(js_date), selected_year + '-' + str_pad(selected_month + 1, 2) + '-' + str_pad(default_day, 2) + (timepicker_config ? ' ' + str_pad(js_date.getHours(), 2) + ':' + str_pad(js_date.getMinutes(), 2) + ':' + str_pad(js_date.getSeconds(), 2) : ''), js_date);

                    }

                    plugin.hide();

                });

                // handle value increases/decreases on the time picker
                datepicker.on('mousedown', '.dp_time_controls_increase td, .dp_time_controls_decrease td', function() {

                    var element = this,
                        count = 0;

                    // trigger once
                    manage_timer_controls(element);

                    // as long as the mouse button is pressed
                    timer_interval = setInterval(function() {

                        // update value
                        manage_timer_controls(element);

                        // if we updated 5 times
                        if (++count > 5) {

                            // increase speed
                            clearInterval(timer_interval);
                            timer_interval = setInterval(function() {

                                // update value
                                manage_timer_controls(element);

                                // if we updated more times
                                if (++count > 10) {

                                    // increase speed
                                    clearInterval(timer_interval);
                                    timer_interval = setInterval(function() {

                                        // update value
                                        manage_timer_controls(element);

                                    }, 100, element);

                                }

                            }, 200, element);

                        }

                    }, 400, element);

                });

                // clear timers
                datepicker.on('mouseup mouseleave', '.dp_time_controls_increase td, .dp_time_controls_decrease td', function() {
                    clearInterval(timer_interval);
                });

                // if date picker is not always visible in a container
                if (!(plugin.settings.always_visible instanceof jQuery)) {

                    // if we dragged the screen
                    $(document).on('touchmove.Zebra_DatePicker_' + uniqueid, function() {

                        // set this flag to TRUE
                        touchmove = true;

                    });

                    // whenever anything is clicked on the page
                    $(document).on('mousedown.Zebra_DatePicker_' + uniqueid + ' touchend.Zebra_DatePicker_' + uniqueid, function(e) {

                        // if this happened on a touch-enabled device and it represents the end of finger movement instead of a tap
                        // set the "touchmove" flag to FALSE and don't go further
                        if (e.type === 'touchend' && touchmove) {

                            // we now know that this is a touch enabled device
                            is_touch = true;

                            return (touchmove = false);

                        }

                        // always set this to FALSE here
                        touchmove = false;

                        // if
                        if (

                            // date picker is visible
                            !datepicker.hasClass('dp_hidden') &&

                            (
                                // date picker opens only on interacting with the icon, icon exists, but it is not the clicked element
                                (plugin.settings.open_icon_only && plugin.icon && $(e.target).get(0) !== plugin.icon.get(0)) ||

                                // date picker doesn't open only on interacting with the icon but the clicked element it's not the icon nor the parent element
                                (!plugin.settings.open_icon_only && $(e.target).get(0) !== $element.get(0) && (!plugin.icon || $(e.target).get(0) !== plugin.icon.get(0)))

                            ) &&

                            // and the click is not inside the calendar
                            $(e.target).closest('.Zebra_DatePicker').length === 0 &&

                            // and the click is not on a time control element
                            !$(e.target).hasClass('dp_time_control')

                        // hide the date picker
                        ) plugin.hide(true);

                    });

                    // whenever a key is pressed on the page
                    $(document).on('keyup.Zebra_DatePicker_' + uniqueid, function(e) {

                        // if the date picker is visible
                        // and the pressed key is ESC
                        // hide the date picker
                        if (!datepicker.hasClass('dp_hidden') && e.which === 27) plugin.hide();

                    });

                }

                // last thing is to pre-render some of the date picker right away
                manage_views();

            },

            /**
             *  Checks if a string represents a valid date according to the format defined by the "format" property.
             *
             *  @param  string  str_date    A string representing a date, formatted accordingly to the "format" property.
             *                              For example, if "format" is "Y-m-d" the string should look like "2011-06-01"
             *
             *  @return mixed               Returns a JavaScript Date object if string represents a valid date according
             *                              formatted according to the "format" property, or FALSE otherwise.
             *
             *  @access private
             */
            check_date = function(str_date) {

                // treat argument as a string
                str_date += '';

                // if value is given
                if ($.trim(str_date) !== '') {

                    var

                        // prepare the format by removing white space from it
                        // and also escape characters that could have special meaning in a regular expression
                        format = escape_regexp(plugin.settings.format),

                        // allowed characters in date's format
                        format_chars = ['d', 'D', 'j', 'l', 'N', 'S', 'w', 'F', 'm', 'M', 'n', 'Y', 'y', 'G', 'g', 'H', 'h', 'i', 's', 'a', 'A'],

                        // "matches" will contain the characters defining the date's format
                        matches = [],

                        // "regexp" will contain the regular expression built for each of the characters used in the date's format
                        regexp = [],

                        // "position" will contain the position of the character found in the date's format
                        position = null,

                        // "segments" will contain the matches of the regular expression
                        segments = null,

                        date, i;

                    // iterate through the allowed characters in date's format
                    for (i = 0; i < format_chars.length; i++)

                        // if character is found in the date's format
                        if ((position = format.indexOf(format_chars[i])) > -1)

                            // save it, alongside the character's position
                            matches.push({
                                character: format_chars[i],
                                position: position
                            });

                    // sort characters defining the date's format based on their position, ascending
                    matches.sort(function(a, b) { return a.position - b.position; });

                    // iterate through the characters defining the date's format
                    $.each(matches, function(index, match) {

                        // add to the array of regular expressions, based on the character
                        switch (match.character) {

                            case 'd': regexp.push('0?[1-9]|[12][0-9]|3[01]'); break;
                            case 'D': regexp.push(plugin.settings.days_abbr ? plugin.settings.days_abbr.map(function(value) { return escape_regexp(value); }).join('|') : '[a-z\u00C0-\u024F]{3}'); break;
                            case 'j': regexp.push('0?[1-9]|[12][0-9]|3[01]'); break;
                            case 'l': regexp.push(plugin.settings.days ? plugin.settings.days.map(function(value) { return escape_regexp(value); }).join('|') : '[a-z\u00C0-\u024F]+'); break;
                            case 'N': regexp.push('[1-7]'); break;
                            case 'S': regexp.push('st|nd|rd|th'); break;
                            case 'w': regexp.push('[0-6]'); break;
                            case 'F': regexp.push(plugin.settings.months ? plugin.settings.months.map(function(value) { return escape_regexp(value); }).join('|') : '[a-z\u00C0-\u024F]+'); break;
                            case 'm': regexp.push('0?[1-9]|1[012]'); break;
                            case 'M': regexp.push(plugin.settings.months_abbr ? plugin.settings.months_abbr.map(function(value) { return escape_regexp(value); }).join('|') : '[a-z\u00C0-\u024F]{3}'); break;
                            case 'n': regexp.push('0?[1-9]|1[012]'); break;
                            case 'Y': regexp.push('[0-9]{4}'); break;
                            case 'y': regexp.push('[0-9]{2}'); break;
                            case 'G': regexp.push('[1-9]|1[0-9]|2[0123]'); break;
                            case 'g': regexp.push('[0-9]|1[012]'); break;
                            case 'H': regexp.push('0[0-9]|1[0-9]|2[0123]'); break;
                            case 'h': regexp.push('0[0-9]|1[012]'); break;
                            case 'i': regexp.push('0[0-9]|[12345][0-9]'); break;
                            case 's': regexp.push('0[0-9]|[12345][0-9]'); break;
                            case 'a': regexp.push('am|pm'); break;
                            case 'A': regexp.push('AM|PM'); break;

                        }

                    });

                    // if we have an array of regular expressions
                    if (regexp.length) {

                        // we will replace characters in the date's format in reversed order
                        matches.reverse();

                        // iterate through the characters in date's format
                        $.each(matches, function(index, match) {

                            // replace each character with the appropriate regular expression
                            format = format.replace(match.character, '(' + regexp[regexp.length - index - 1] + ')');

                        });

                        // the final regular expression
                        regexp = new RegExp('^' + format + '$', 'ig');

                        // if regular expression was matched
                        if ((segments = regexp.exec(str_date))) {

                            // check if date is a valid date (i.e. there's no February 31)

                            var tmpdate = new Date(),
                                original_day = 1,
                                original_month = tmpdate.getMonth() + 1,
                                original_year = tmpdate.getFullYear(),
                                original_hours = tmpdate.getHours(),
                                original_minutes = tmpdate.getMinutes(),
                                original_seconds = tmpdate.getSeconds(),
                                original_ampm,
                                english_days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                                english_months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                                iterable,

                                // by default, we assume the date is valid
                                valid = true;

                            // reverse back the characters in the date's format
                            matches.reverse();

                            // iterate through the characters in the date's format
                            $.each(matches, function(index, match) {

                                // if the date is not valid, don't look further
                                if (!valid) return true;

                                // based on the character
                                switch (match.character) {

                                    case 'm':
                                    case 'n':

                                        // extract the month from the value entered by the user
                                        original_month = to_int(segments[index + 1]);

                                        break;

                                    case 'd':
                                    case 'j':

                                        // extract the day from the value entered by the user
                                        original_day = to_int(segments[index + 1]);

                                        break;

                                    case 'D':
                                    case 'l':
                                    case 'F':
                                    case 'M':

                                        // if day is given as day name, we'll check against the names in the used language
                                        if (match.character === 'D') iterable = plugin.settings.days_abbr || plugin.settings.days;
                                        else if (match.character === 'l') iterable = plugin.settings.days;

                                        // if month is given as month name, we'll check against the names in the used language
                                        else if (match.character === 'M') iterable = plugin.settings.months_abbr || plugin.settings.months;
                                        else iterable = plugin.settings.months;

                                        // by default, we assume the day or month was not entered correctly
                                        valid = false;

                                        // iterate through the month/days in the used language
                                        $.each(iterable, function(key, value) {

                                            // if month/day was entered correctly, don't look further
                                            if (valid) return true;

                                            // if month/day was entered correctly
                                            if (segments[index + 1].toLowerCase() === value.substring(0, ((match.character === 'D' && !plugin.settings.days_abbr) || (match.character === 'M' && !plugin.settings.months_abbr) ? 3 : value.length)).toLowerCase()) {

                                                // extract the day/month from the value entered by the user
                                                switch (match.character) {

                                                    case 'D': segments[index + 1] = english_days[key].substring(0, 3); break;
                                                    case 'l': segments[index + 1] = english_days[key]; break;
                                                    case 'F': segments[index + 1] = english_months[key]; original_month = key + 1; break;
                                                    case 'M': segments[index + 1] = english_months[key].substring(0, 3); original_month = key + 1; break;

                                                }

                                                // day/month value is valid
                                                valid = true;

                                            }

                                        });

                                        break;

                                    case 'Y':

                                        // extract the year from the value entered by the user
                                        original_year = to_int(segments[index + 1]);

                                        break;

                                    case 'y':

                                        // extract the year from the value entered by the user
                                        original_year = to_int('20' + to_int(segments[index + 1]));

                                        break;

                                    case 'G':
                                    case 'H':
                                    case 'g':
                                    case 'h':

                                        // extract the hours from the value entered by the user
                                        original_hours = to_int(segments[index + 1]);
                                        break;

                                    case 'i':

                                        // extract the minutes from the value entered by the user
                                        original_minutes = to_int(segments[index + 1]);
                                        break;

                                    case 's':

                                        // extract the seconds from the value entered by the user
                                        original_seconds = to_int(segments[index + 1]);
                                        break;

                                    case 'a':
                                    case 'A':

                                        // extract the seconds from the value entered by the user
                                        original_ampm = segments[index + 1].toLowerCase();
                                        break;

                                }

                            });

                            // if everything is ok so far
                            if (valid) {

                                // generate a Date object using the values entered by the user
                                // (handle also the case when original_month and/or original_day are undefined - i.e date format is "Y-m" or "Y")
                                date = new Date(original_year, (original_month || 1) - 1, original_day || 1, original_hours + (original_ampm === 'pm' && original_hours !== 12 ? 12 : (original_ampm === 'am' && original_hours === 12 ? -12 : 0)), original_minutes, original_seconds);

                                // if, after that, the date is the same as the date entered by the user
                                if (date.getFullYear() === original_year && date.getDate() === (original_day || 1) && date.getMonth() === ((original_month || 1) - 1))

                                    // return the date as JavaScript date object
                                    return date;

                            }

                        }

                    }

                    // if script gets this far, return false as something must've went wrong
                    return false;

                }

            },

            /**
             *  Prevents the possibility of selecting text on a given element. Used on the "previous" and "next" buttons
             *  where text might get accidentally selected when user quickly clicks on the buttons.
             *
             *  @param  jQuery Element  el  A jQuery element on which to prevents text selection.
             *
             *  @return void
             *
             *  @access private
             */
            disable_text_select = function(el) {

                // if browser is Firefox
                if (browser.name === 'firefox') el.css('MozUserSelect', 'none');

                // if browser is Internet Explorer
                else if (browser.name === 'explorer') $(document).on('selectstart', el, function() { return false; });

                // for the other browsers
                else el.mousedown(function() { return false; });

            },

            /**
             *  Escapes special characters in a string, preparing it for use in a regular expression.
             *
             *  @param  string  str     The string in which special characters should be escaped.
             *
             *  @return string          Returns the string with escaped special characters.
             *
             *  @access private
             */
            escape_regexp = function(str) {

                // return string with special characters escaped
                return str.replace(/([-.,*+?^${}()|[\]\/\\])/g, '\\$1');

            },

            /**
             *  Formats a JavaScript date object to the format specified by the "format" property.
             *
             *  @param  date    date    A valid JavaScript date object
             *
             *  @return string          Returns a string containing the formatted date
             *
             *  @access private
             */
            format = function(date) {

                var result = '',

                    // extract parts of the date:
                    // day number, 1 - 31
                    j = date.getDate(),

                    // day of the week, 0 - 6, Sunday - Saturday
                    w = date.getDay(),

                    // the name of the day of the week Sunday - Saturday
                    l = plugin.settings.days[w],

                    // the month number, 1 - 12
                    n = date.getMonth() + 1,

                    // the month name, January - December
                    f = plugin.settings.months[n - 1],

                    // the year (as a string)
                    y = date.getFullYear() + '',

                    // the hour, 0-23
                    h = date.getHours(),

                    // the hour in 12 hours format
                    h12 = h % 12 === 0 ? 12 : h % 12,

                    // the minute, 0-59
                    m = date.getMinutes(),

                    // the second, 0-59
                    s = date.getSeconds(),

                    // am/pm
                    a = (h >= 12 ? 'pm' : 'am'),

                    i, chr;

                // iterate through the characters in the format
                for (i = 0; i < plugin.settings.format.length; i++) {

                    // extract the current character
                    chr = plugin.settings.format.charAt(i);

                    // see what character it is
                    switch (chr) {

                        // year as two digits
                        case 'y': y = y.substr(2);  // jshint ignore:line

                        // year as four digits
                        // falls through
                        case 'Y': result += y; break;

                        // month number, prefixed with 0
                        case 'm': n = str_pad(n, 2);    // jshint ignore:line

                        // month number, not prefixed with 0
                        // falls through
                        case 'n': result += n; break;

                        // month name, three letters
                        case 'M': f = ($.isArray(plugin.settings.months_abbr) && undefined !== plugin.settings.months_abbr[n - 1] ? plugin.settings.months_abbr[n - 1] : plugin.settings.months[n - 1].substr(0, 3));   // jshint ignore:line

                        // full month name
                        // falls through
                        case 'F': result += f; break;

                        // day number, prefixed with 0
                        case 'd': j = str_pad(j, 2);    // jshint ignore:line

                        // day number not prefixed with 0
                        // falls through
                        case 'j': result += j; break;

                        // day name, three letters
                        case 'D': l = ($.isArray(plugin.settings.days_abbr) && undefined !== plugin.settings.days_abbr[w] ? plugin.settings.days_abbr[w] : plugin.settings.days[w].substr(0, 3));   // jshint ignore:line

                        // full day name
                        // falls through
                        case 'l': result += l; break;

                        // ISO-8601 numeric representation of the day of the week, 1 - 7
                        case 'N': w++;  // jshint ignore:line

                        // day of the week, 0 - 6
                        // falls through
                        case 'w': result += w; break;

                        // English ordinal suffix for the day of the month, 2 characters
                        // (st, nd, rd or th (works well with j))
                        case 'S':

                            if (j % 10 === 1 && j !== 11) result += 'st';

                            else if (j % 10 === 2 && j !== 12) result += 'nd';

                            else if (j % 10 === 3 && j !== 13) result += 'rd';

                            else result += 'th';

                            break;

                        // hour in 12 hours format, without leading zeros
                        case 'g': result += h12; break;

                        // hour in 12 hours format, with leading zeros
                        case 'h': result += str_pad(h12, 2); break;

                        // hour in 24 hours format, without leading zeros
                        case 'G': result += h; break;

                        // hour in 24 hours format, with leading zeros
                        case 'H': result += str_pad(h, 2); break;

                        // minutes, with leading zeros
                        case 'i': result += str_pad(m, 2); break;

                        // seconds, with leading zeros
                        case 's': result += str_pad(s, 2); break;

                        // am/pm, lowercase
                        case 'a': result += a; break;

                        // am/pm, uppercase
                        case 'A': result += a.toUpperCase(); break;

                        // this is probably the separator
                        default: result += chr;

                    }

                }

                // return formatted date
                return result;

            },

            /**
             *  Generates the day picker view, and displays it
             *
             *  @return void
             *
             *  @access private
             */
            generate_daypicker = function() {

                var

                    // get the number of days in the selected month
                    days_in_month = new Date(selected_year, selected_month + 1, 0).getDate(),

                    // get the selected month's starting day (from 0 to 6)
                    first_day = new Date(selected_year, selected_month, 1).getDay(),

                    // how many days are there in the previous month
                    days_in_previous_month = new Date(selected_year, selected_month, 0).getDate(),

                    // how many days are there to be shown from the previous month
                    days_from_previous_month = first_day - plugin.settings.first_day_of_week,

                    i, html, day, real_date, real_year, real_month, real_day, weekday, class_name, custom_class_name, is_weekend, rtl_offset;

                // the final value of how many days are there to be shown from the previous month
                days_from_previous_month = days_from_previous_month < 0 ? 7 + days_from_previous_month : days_from_previous_month;

                // manage header caption and enable/disable navigation buttons if necessary
                manage_header(plugin.settings.header_captions.days);

                // start generating the HTML
                html = '<tr>';

                // if a column featuring the number of the week is to be shown
                if (plugin.settings.show_week_number)

                    // column title
                    html += '<th scope="col">' + plugin.settings.show_week_number + '</th>';

                // name of week days
                // show the abbreviated day names (or only the first two letters of the full name if no abbreviations are specified)
                // and also, take in account the value of the "first_day_of_week" property
                for (i = 0; i < 7; i++) {

                    // the week day's number; account for RTL
                    day = (plugin.settings.first_day_of_week + (plugin.settings.rtl ? 6 - i : i)) % 7;

                    html += '<th scope="col">' + ($.isArray(plugin.settings.days_abbr) && undefined !== plugin.settings.days_abbr[day] ? plugin.settings.days_abbr[day] : plugin.settings.days[day].substr(0, 2)) + '</th>';

                }

                html += '</tr><tr>';

                // the calendar shows a total of 42 days
                for (i = 0; i < 42; i++) {

                    // we need some additional math when showing an RTL calendar
                    rtl_offset = (plugin.settings.rtl ? 6 - ((i % 7) * 2) : 0);

                    // seven days per row
                    if (i > 0 && i % 7 === 0) html += '</tr><tr>';

                    // if week number is to be shown
                    if (i % 7 === 0 && plugin.settings.show_week_number)

                        // show ISO 8601 week number
                        html += '<th scope="row">' + get_week_number(new Date(selected_year, selected_month, (i - days_from_previous_month + 1))) + '</th>';

                    // the number of the day in month
                    day = rtl_offset + (i - days_from_previous_month + 1);

                    // if dates in previous/next month can be selected, and this is one of those days
                    if (plugin.settings.select_other_months && (i < days_from_previous_month || day > days_in_month)) {

                        // use the Date object to normalize the date
                        // for example, 2011 05 33 will be transformed to 2011 06 02
                        real_date = new Date(selected_year, selected_month, day);
                        real_year = real_date.getFullYear();
                        real_month = real_date.getMonth();
                        real_day = real_date.getDate();

                        // extract normalized date parts and merge them
                        real_date = real_year + str_pad(real_month + 1, 2) + str_pad(real_day, 2);

                    }

                    // get the week day (0 to 6, Sunday to Saturday)
                    weekday = (plugin.settings.first_day_of_week + i) % 7;

                    // is day on a weekend?
                    is_weekend = ($.inArray(weekday, plugin.settings.weekend_days) > -1);

                    // if this is a day from the previous month
                    if ((plugin.settings.rtl && day < 1) || (!plugin.settings.rtl && i < days_from_previous_month))

                        html += '<td class="dp_not_in_month ' + (is_weekend ? 'dp_weekend ' : '') + (plugin.settings.select_other_months && !is_disabled(real_year, real_month, real_day) ? 'date_' + real_date : 'dp_disabled') + '">' + (plugin.settings.select_other_months || plugin.settings.show_other_months ? str_pad(rtl_offset + days_in_previous_month - days_from_previous_month + i + 1, plugin.settings.zero_pad ? 2 : 0) : '&nbsp;') + '</td>';

                    // if this is a day from the next month
                    else if (day > days_in_month)

                        html += '<td class="dp_not_in_month ' + (is_weekend ? 'dp_weekend ' : '') + (plugin.settings.select_other_months && !is_disabled(real_year, real_month, real_day) ? 'date_' + real_date : 'dp_disabled') + '">' + (plugin.settings.select_other_months || plugin.settings.show_other_months ? str_pad(day - days_in_month, plugin.settings.zero_pad ? 2 : 0) : '&nbsp;') + '</td>';

                    // if this is a day from the current month
                    else {

                        class_name = '';

                        // custom class, if any
                        custom_class_name = get_custom_class(selected_year, selected_month, day);

                        // if day is in weekend
                        if (is_weekend) class_name = ' dp_weekend';

                        // highlight the current system date
                        if (selected_month === current_system_month && selected_year === current_system_year && current_system_day === day) class_name += ' dp_current';

                        // apply custom class, if a custom class exists
                        if (custom_class_name !== '') class_name += ' ' + custom_class_name;

                        // highlight the currently selected date
                        if (selected_month === default_month && selected_year === default_year && default_day === day) class_name += ' dp_selected';

                        // if date needs to be disabled
                        if (is_disabled(selected_year, selected_month, day)) class_name += ' dp_disabled';

                        // print the day of the month (if "day" is NaN, use an empty string instead)
                        html += '<td' + (class_name !== '' ? ' class="' + $.trim(class_name) + '"' : '') + '>' + ((plugin.settings.zero_pad ? str_pad(day, 2) : day) || '&nbsp;') + '</td>';

                    }

                }

                // wrap up generating the day picker
                html += '</tr>';

                // inject the day picker into the DOM
                daypicker.html($(html));

                // if date picker is always visible
                if (plugin.settings.always_visible)

                    // cache all the cells
                    // (we need them so that we can easily remove the "dp_selected" class from all of them when user selects a date)
                    daypicker_cells = $('td:not(.dp_disabled)', daypicker);

                // make the day picker visible
                daypicker.show();

            },

            /**
             *  Generates the month picker view, and displays it
             *
             *  @return void
             *
             *  @access private
             */
            generate_monthpicker = function() {

                // manage header caption and enable/disable navigation buttons if necessary
                manage_header(plugin.settings.header_captions.months);

                // start generating the HTML
                var html = '<tr>', i, class_name, month;

                // iterate through all the months
                for (i = 0; i < 12; i++) {

                    // three month per row
                    if (i > 0 && i % 3 === 0) html += '</tr><tr>';

                    // the month, taking RTL into account
                    month = plugin.settings.rtl ? 2 + i - (2 * (i % 3)) : i;

                    class_name = 'dp_month_' + month;

                    // if month needs to be disabled
                    if (is_disabled(selected_year, month)) class_name += ' dp_disabled';

                    // else, if a date is already selected and this is that particular month, highlight it
                    else if (default_month !== false && default_month === month && selected_year === default_year) class_name += ' dp_selected';

                    // else, if this the current system month, highlight it
                    else if (current_system_month === month && current_system_year === selected_year) class_name += ' dp_current';

                    // first three letters of the month's name
                    html += '<td class="' + $.trim(class_name) + '">' + ($.isArray(plugin.settings.months_abbr) && undefined !== plugin.settings.months_abbr[month] ? plugin.settings.months_abbr[month] : plugin.settings.months[month].substr(0, 3)) + '</td>';

                }

                // wrap up
                html += '</tr>';

                // inject into the DOM
                monthpicker.html($(html));

                // if date picker is always visible
                if (plugin.settings.always_visible)

                    // cache all the cells
                    // (we need them so that we can easily remove the "dp_selected" class from all of them when user selects a month)
                    monthpicker_cells = $('td:not(.dp_disabled)', monthpicker);

                // make the month picker visible
                monthpicker.show();

            },

            /**
             *  Generates the time picker view, and displays it
             *
             *  @return void
             *
             *  @access private
             */
            generate_timepicker = function() {

                var html, condensed = (timepicker_config.hours && timepicker_config.minutes && timepicker_config.seconds && timepicker_config.ampm);

                // the HTML
                html = '<tr class="dp_time_controls_increase' + (condensed ? ' dp_time_controls_condensed' : '') + '">' +
                    (plugin.settings.rtl && timepicker_config.ampm ? '<td class="dp_time_ampm dp_time_control">' + plugin.settings.navigation[2] + '</td>' : '') +
                    (timepicker_config.hours ? '<td class="dp_time_hour dp_time_control">' + plugin.settings.navigation[2] + '</td>' : '') +
                    (timepicker_config.minutes ? '<td class="dp_time_minute dp_time_control">' + plugin.settings.navigation[2] + '</td>' : '') +
                    (timepicker_config.seconds ? '<td class="dp_time_second dp_time_control">' + plugin.settings.navigation[2] + '</td>' : '') +
                    (!plugin.settings.rtl && timepicker_config.ampm ? '<td class="dp_time_ampm dp_time_control">' + plugin.settings.navigation[2] + '</td>' : '') +
                    '</tr>';

                html += '<tr class="dp_time_segments' + (condensed ? ' dp_time_controls_condensed' : '') + '">';

                if (plugin.settings.rtl && timepicker_config.ampm) html += '<td class="dp_time_ampm dp_disabled' + (timepicker_config.hours || timepicker_config.minutes || timepicker_config.seconds ? ' dp_time_separator' : '') + '"><div>' + (timepicker_config.ampm_case === 'A' ? selected_ampm.toUpperCase() : selected_ampm) + '</div></td>';
                if (timepicker_config.hours) html += '<td class="dp_time_hours dp_disabled' + (timepicker_config.minutes || timepicker_config.seconds || (!plugin.settings.rtl && timepicker_config.ampm) ? ' dp_time_separator' : '') + '"><div>' + (timepicker_config.hour_format === 'h' || timepicker_config.hour_format === 'H' ? str_pad(selected_hour, 2) : selected_hour) + '</div></td>';
                if (timepicker_config.minutes) html += '<td class="dp_time_minutes dp_disabled' + (timepicker_config.seconds || (!plugin.settings.rtl && timepicker_config.ampm) ? ' dp_time_separator' : '') + '"><div>' + str_pad(selected_minute, 2) + '</div></td>';
                if (timepicker_config.seconds) html += '<td class="dp_time_seconds dp_disabled' + (!plugin.settings.rtl && timepicker_config.ampm ? ' dp_time_separator' : '') + '"><div>' + str_pad(selected_second, 2) + '</div></td>';
                if (!plugin.settings.rtl && timepicker_config.ampm) html += '<td class="dp_time_ampm dp_disabled">' + (timepicker_config.ampm_case === 'A' ? selected_ampm.toUpperCase() : selected_ampm) + '</td>';

                html += '</tr>';

                html += '<tr class="dp_time_controls_decrease' + (condensed ? ' dp_time_controls_condensed' : '') + '">' +
                    (plugin.settings.rtl && timepicker_config.ampm ? '<td class="dp_time_ampm dp_time_control">' + plugin.settings.navigation[3] + '</td>' : '') +
                    (timepicker_config.hours ? '<td class="dp_time_hour dp_time_control">' + plugin.settings.navigation[3] + '</td>' : '') +
                    (timepicker_config.minutes ? '<td class="dp_time_minute dp_time_control">' + plugin.settings.navigation[3] + '</td>' : '') +
                    (timepicker_config.seconds ? '<td class="dp_time_second dp_time_control">' + plugin.settings.navigation[3] + '</td>' : '') +
                    (!plugin.settings.rtl && timepicker_config.ampm ? '<td class="dp_time_ampm dp_time_control">' + plugin.settings.navigation[3] + '</td>' : '') +
                    '</tr>';

                // inject into the DOM
                timepicker.html($(html));

                // make the time picker visible
                timepicker.show();

            },

            /**
             *  Generates the year picker view, and displays it
             *
             *  @return void
             *
             *  @access private
             */
            generate_yearpicker = function() {

                // manage header caption and enable/disable navigation buttons if necessary
                manage_header(plugin.settings.header_captions.years);

                // start generating the HTML
                var html = '<tr>', i, class_name, year;

                // we're showing 12 years at a time, current year in the middle
                for (i = 0; i < 12; i++) {

                    // three years per row
                    if (i > 0 && i % 3 === 0) html += '</tr><tr>';

                    // the year, taking RTL into account
                    year = plugin.settings.rtl ? 2 + i - (2 * (i % 3)) : i;

                    class_name = '';

                    // if year needs to be disabled
                    if (is_disabled(selected_year - 7 + year)) class_name += ' dp_disabled';

                    // else, if a date is already selected and this is that particular year, highlight it
                    else if (default_year && default_year === selected_year - 7 + year) class_name += ' dp_selected';

                    // else, if this is the current system year, highlight it
                    else if (current_system_year === (selected_year - 7 + year)) class_name += ' dp_current';

                    // first three letters of the month's name
                    html += '<td' + ($.trim(class_name) !== '' ? ' class="' + $.trim(class_name) + '"' : '') + '>' + (selected_year - 7 + year) + '</td>';

                }

                // wrap up
                html += '</tr>';

                // inject into the DOM
                yearpicker.html($(html));

                // if date picker is always visible
                if (plugin.settings.always_visible)

                    // cache all the cells
                    // (we need them so that we can easily remove the "dp_selected" class from all of them when user selects a year)
                    yearpicker_cells = $('td:not(.dp_disabled)', yearpicker);

                // make the year picker visible
                yearpicker.show();

            },

            /**
             *  Return the name of a custom class to be applied to the given date.
             *
             *  @return string  The name of a custom class to be applied to the given date, or an empty string if no custom
             *                  class needs to be applied.
             *
             *  @param  integer     year    The year to check
             *  @param  integer     month   The month to check
             *  @param  integer     day     The day to check
             *
             *  @access private
             */
            get_custom_class = function(year, month, day) {

                var class_name, i, found;

                // if month is given as argument, increment it (as JavaScript uses 0 for January, 1 for February...)
                if (typeof month !== 'undefined') month = month + 1;

                // iterate through the custom classes
                for (i in custom_class_names) {

                    // the class name we're currently checking
                    class_name = custom_class_names[i]; found = false;

                    // if there are any custom classes defined
                    if ($.isArray(custom_classes[class_name]))

                        // iterate through the rules for which the custom class to be applied
                        $.each(custom_classes[class_name], function() {

                            // if a custom class needs to be applied to the date we're checking, don't look further
                            if (found) return;

                            var rule = this, weekday;

                            // if the rules apply for the current year
                            if ($.inArray(year, rule[2]) > -1 || $.inArray('*', rule[2]) > -1)

                                // if the rules apply for the current month
                                if ((typeof month !== 'undefined' && $.inArray(month, rule[1]) > -1) || $.inArray('*', rule[1]) > -1)

                                    // if the rules apply for the current day
                                    if ((typeof day !== 'undefined' && $.inArray(day, rule[0]) > -1) || $.inArray('*', rule[0]) > -1) {

                                        // if custom class is to be applied whatever the day
                                        // don't look any further
                                        if ($.inArray('*', rule[3]) > -1) return (found = class_name);

                                        // get the weekday
                                        weekday = new Date(year, month - 1, day).getDay();

                                        // if custom class is to be applied to weekday
                                        // don't look any further
                                        if ($.inArray(weekday, rule[3]) > -1) return (found = class_name);

                                    }

                        });

                    // if a custom class needs to be applied to the date we're checking, don't look further
                    if (found) return found;

                }

                // return what we've found
                return found || '';

            },

            /**
             *  Calculate the ISO 8601 week number for a given date.
             *
             *  Code is based on the algorithm at https://www.tondering.dk/claus/cal/week.php#calcweekno
             */
            get_week_number = function(date) {

                var y = date.getFullYear(),
                    m = date.getMonth() + 1,
                    d = date.getDate(),
                    a, b, c, s, e, f, g, n, w;

                /* jshint ignore:start */

                // if month jan. or feb.
                if (m < 3) {

                    a = y - 1;
                    b = (a / 4 | 0) - (a / 100 | 0) + (a / 400 | 0);
                    c = ((a - 1) / 4 | 0) - ((a - 1) / 100 | 0) + ((a - 1) / 400 | 0);
                    s = b - c;
                    e = 0;
                    f = d - 1 + 31 * (m - 1);

                // if month mar. through dec.
                } else {

                    a = y;
                    b = (a / 4 | 0) - (a / 100 | 0) + (a / 400 | 0);
                    c = ((a - 1) / 4 | 0) - ((a - 1) / 100 | 0) + ((a - 1) / 400 | 0);
                    s = b - c;
                    e = s + 1;
                    f = d + ((153 * (m - 3) + 2) / 5 | 0) + 58 + s;

                }

                g = (a + b) % 7;
                // ISO Weekday (0 is monday, 1 is tuesday etc.)
                d = (f + g - e) % 7;
                n = f + 3 - d;

                if (n < 0) w = 53 - ((g - s) / 5 | 0);

                else if (n > 364 + s) w = 1;

                else w = (n / 7 | 0) + 1;

                /* jshint ignore:end */

                return w;

            },

            /**
             *  Generates an iFrame shim in Internet Explorer 6 so that the date picker appears above select boxes.
             *
             *  @return void
             *
             *  @access private
             */
            iframeShim = function(action) {

                var zIndex, offset;

                // this is necessary only if browser is Internet Explorer 6
                if (browser.name === 'explorer' && browser.version === 6) {

                    // if the iFrame was not yet created
                    // "undefined" evaluates as FALSE
                    if (!shim) {

                        // the iFrame has to have the element's zIndex minus 1
                        zIndex = to_int(datepicker.css('zIndex')) - 1;

                        // create the iFrame
                        shim = $('<iframe>', {
                            src:            'javascript:document.write("")',
                            scrolling:      'no',
                            frameborder:    0,
                            css: {
                                zIndex:     zIndex,
                                position:   'absolute',
                                top:        -1000,
                                left:       -1000,
                                width:      datepicker.outerWidth(),
                                height:     datepicker.outerHeight(),
                                filter:     'progid:DXImageTransform.Microsoft.Alpha(opacity=0)',
                                display:    'none'
                            }
                        });

                        // inject iFrame into DOM
                        $('body').append(shim);

                    }

                    // what do we need to do
                    switch (action) {

                        // hide the iFrame?
                        case 'hide':

                            // set the iFrame's display property to "none"
                            shim.hide();

                            break;

                        // show the iFrame?
                        default:

                            // get date picker top and left position
                            offset = datepicker.offset();

                            // position the iFrame shim right underneath the date picker
                            // and set its display to "block"
                            shim.css({
                                top:        offset.top,
                                left:       offset.left,
                                display:    'block'
                            });

                    }

                }

            },

            /**
             *  Checks if, according to the restrictions of the calendar and/or the values defined by the "disabled_dates"
             *  property, a day, a month or a year needs to be disabled.
             *
             *  @param  integer     year    The year to check
             *  @param  integer     month   The month to check
             *  @param  integer     day     The day to check
             *
             *  @return boolean         Returns TRUE if the given value is not disabled or FALSE otherwise
             *
             *  @access private
             */
            is_disabled = function(year, month, day) {

                var now, len, disabled, enabled;

                // don't check bogus values
                if ((undefined === year || isNaN(year)) && (undefined === month || isNaN(month)) && (undefined === day || isNaN(day))) return false;

                // this date picker cannot handle years before 1000, so we return false in this case
                else if (year < 1000) return true;

                // if calendar has direction restrictions
                if (!(!$.isArray(plugin.settings.direction) && to_int(plugin.settings.direction) === 0)) {

                    // normalize and merge arguments then transform the result to an integer
                    now = to_int(str_concat(year, (typeof month !== 'undefined' ? str_pad(month, 2) : ''), (typeof day !== 'undefined' ? str_pad(day, 2) : '')));

                    // get the length of the argument
                    len = (now + '').length;

                    // if we're checking days
                    if (len === 8 && (

                        // day is before the first selectable date
                        (typeof start_date !== 'undefined' && now < to_int(str_concat(first_selectable_year, str_pad(first_selectable_month, 2), str_pad(first_selectable_day, 2)))) ||

                        // or day is after the last selectable date
                        (typeof end_date !== 'undefined' && now > to_int(str_concat(last_selectable_year, str_pad(last_selectable_month, 2), str_pad(last_selectable_day, 2))))

                    // day needs to be disabled
                    )) return true;

                    // if we're checking months
                    else if (len === 6 && (

                        // month is before the first selectable month
                        (typeof start_date !== 'undefined' && now < to_int(str_concat(first_selectable_year, str_pad(first_selectable_month, 2)))) ||

                        // or day is after the last selectable date
                        (typeof end_date !== 'undefined' && now > to_int(str_concat(last_selectable_year, str_pad(last_selectable_month, 2))))

                    // month needs to be disabled
                    )) return true;

                    // if we're checking years
                    else if (len === 4 && (

                        // year is before the first selectable year
                        (typeof start_date !== 'undefined' && now < first_selectable_year) ||

                        // or day is after the last selectable date
                        (typeof end_date !== 'undefined' && now > last_selectable_year)

                    // year needs to be disabled
                    )) return true;

                }

                // if month is given as argument, increment it (as JavaScript uses 0 for January, 1 for February...)
                if (typeof month !== 'undefined') month = month + 1;

                // by default, we assume the day/month/year is not enabled nor disabled
                disabled = false; enabled = false;

                // if there are rules for disabling dates
                if ($.isArray(disabled_dates) && disabled_dates.length)

                    // iterate through the rules for disabling dates
                    $.each(disabled_dates, function() {

                        // if the date is to be disabled, don't look any further
                        if (disabled) return;

                        var rule = this, weekday;

                        // if the rules apply for the current year
                        if ($.inArray(year, rule[2]) > -1 || $.inArray('*', rule[2]) > -1)

                            // if the rules apply for the current month
                            if ((typeof month !== 'undefined' && $.inArray(month, rule[1]) > -1) || $.inArray('*', rule[1]) > -1)

                                // if the rules apply for the current day
                                if ((typeof day !== 'undefined' && $.inArray(day, rule[0]) > -1) || $.inArray('*', rule[0]) > -1) {

                                    // if day is to be disabled whatever the day
                                    // don't look any further
                                    if ($.inArray('*', rule[3]) > -1) return (disabled = true);

                                    // get the weekday
                                    weekday = new Date(year, month - 1, day).getDay();

                                    // if weekday is to be disabled
                                    // don't look any further
                                    if ($.inArray(weekday, rule[3]) > -1) return (disabled = true);

                                }

                    });

                // if there are rules that explicitly enable dates
                if (enabled_dates)

                    // iterate through the rules for enabling dates
                    $.each(enabled_dates, function() {

                        // if the date is to be enabled, don't look any further
                        if (enabled) return;

                        var rule = this, weekday;

                        // if the rules apply for the current year
                        if ($.inArray(year, rule[2]) > -1 || $.inArray('*', rule[2]) > -1) {

                            // the year is enabled
                            enabled = true;

                            // if we're also checking months
                            if (typeof month !== 'undefined') {

                                // we assume the month is enabled
                                enabled = true;

                                // if the rules apply for the current month
                                if ($.inArray(month, rule[1]) > -1 || $.inArray('*', rule[1]) > -1) {

                                    // if we're also checking days
                                    if (typeof day !== 'undefined') {

                                        // we assume the day is enabled
                                        enabled = true;

                                        // if the rules apply for the current day
                                        if ($.inArray(day, rule[0]) > -1 || $.inArray('*', rule[0]) > -1) {

                                            // if day is to be enabled whatever the day
                                            // don't look any further
                                            if ($.inArray('*', rule[3]) > -1) return (enabled = true);

                                            // get the weekday
                                            weekday = new Date(year, month - 1, day).getDay();

                                            // if weekday is to be enabled
                                            // don't look any further
                                            if ($.inArray(weekday, rule[3]) > -1) return (enabled = true);

                                            // if we get this far, it means the day is not enabled
                                            enabled = false;

                                        // if day is not enabled
                                        } else enabled = false;

                                    }

                                // if month is not enabled
                                } else enabled = false;

                            }

                        }

                    });

                // if checked date is enabled, return false
                if (enabled_dates && enabled) return false;

                // if checked date is disabled return false
                else if (disabled_dates && disabled) return true;

                // if script gets this far it means that the day/month/year doesn't need to be disabled
                return false;

            },

            /**
             *  Checks whether a value is an integer number.
             *
             *  @param  mixed   value   Value to check
             *
             *  @return                 Returns TRUE if the value represents an integer number, or FALSE otherwise
             *
             *  @access private
             */
            is_integer = function(value) {

                // return TRUE if value represents an integer number, or FALSE otherwise
                return (value + '').match(/^\-?[0-9]+$/);

            },

            /**
             *  Sets the caption in the header of the date picker and enables or disables navigation buttons when necessary.
             *
             *  @param  string  caption     String that needs to be displayed in the header
             *
             *  @return void
             *
             *  @access private
             */
            manage_header = function(caption) {

                // if "selected_month" has a value
                // $.isNumeric is available only from jQuery 1.7 - thanks to birla for the fix!
                if (!isNaN(parseFloat(selected_month)) && isFinite(selected_month))

                    caption = caption.replace(/\bm\b|\bn\b|\bF\b|\bM\b/, function(match) {

                        switch (match) {

                            // month number, prefixed with 0
                            case 'm':
                                return str_pad(selected_month + 1, 2);

                            // month number, not prefixed with 0
                            case 'n':
                                return selected_month + 1;

                            // full month name
                            case 'F':
                                return plugin.settings.months[selected_month];

                            // month name, three letters
                            case 'M':
                                return ($.isArray(plugin.settings.months_abbr) && undefined !== plugin.settings.months_abbr[selected_month] ? plugin.settings.months_abbr[selected_month] : plugin.settings.months[selected_month].substr(0, 3));

                            // unknown replace
                            default:
                                return match;

                        }

                    });

                // if "selected_year" has a value
                // $.isNumeric is available only from jQuery 1.7 - thanks to birla for the fix!
                if (!isNaN(parseFloat(selected_year)) && isFinite(selected_year))

                    // replace year-related patterns
                    caption = caption

                        // year as four digits
                        .replace(/\bY\b/, selected_year)

                        // year as two digits
                        .replace(/\by\b/, (selected_year + '').substr(2))

                        // lower limit of year as two or four digits
                        .replace(/\bY1\b/i, selected_year - 7)

                        // upper limit of year as two or four digits
                        .replace(/\bY2\b/i, selected_year + 4);

                // update the caption in the header
                $('.dp_caption', header).html(caption);

            },

            /**
             *  Shows the appropriate view (days, months, years or time) according to the current value of the "view" property.
             *
             *  @return void
             *
             *  @access private
             */
            manage_views = function(fire_events) {

                var height, elements;

                // if the day picker was not yet generated
                if (daypicker.text() === '' || view === 'days') {

                    // if the day picker was not yet generated
                    if (daypicker.text() === '') {

                        // if date picker is not always visible in a container
                        if (!(plugin.settings.always_visible instanceof jQuery))

                            // temporarily set the date picker's left outside of view
                            // so that we can later grab its width and height
                            datepicker.css('left', -1000);

                        // temporarily make the date picker visible
                        // so that we can later grab its width and height
                        datepicker.removeClass('hidden');

                        // generate the day picker
                        generate_daypicker();

                        // jQuery rounds values returned by outerWidth and outerHeight
                        // therefore, if we can get the un-rounded values, get those
                        // get the day picker's width and height
                        // (we need the second check for old Internet Explorers...)
                        if (typeof daypicker[0].getBoundingClientRect !== 'undefined' && typeof daypicker[0].getBoundingClientRect().height !== 'undefined') height = daypicker[0].getBoundingClientRect().height;

                        // if "getBoundingClientRect" is not available
                        // get the day picker's height
                        else height = daypicker.outerHeight(true);

                        // make the month picker have the same size as the day picker
                        monthpicker.css('height', height);

                        // make the year picker have the same size as the day picker
                        yearpicker.css('height', height);

                        // make the time picker have the same size as the day picker
                        timepicker.css('height', height + header.outerHeight(true));

                        // set the container's width so all the views have 100% width
                        datepicker.css('width', datepicker.outerWidth());

                        // // we have to set this now or Chrome will make the datepicker extend to the full width of the screen...
                        // $('.dp_caption', header).css('width', '100%');

                        // hide the date picker again
                        datepicker.addClass('dp_hidden');

                    // if the day picker was previously generated at least once
                    // generate the day picker
                    } else generate_daypicker();

                    // show header
                    header.show();

                    // hide the year and the month pickers
                    monthpicker.hide();
                    yearpicker.hide();

                    // hide time-picker related elements
                    timepicker.hide();
                    view_toggler.hide();
                    confirm_selection.hide();

                    // if the time picker is enabled, show the clock icon
                    if (timepicker_config) view_toggler.show().removeClass('dp_calendar');

                // if the view is "months"
                } else if (view === 'months') {

                    // generate the month picker
                    generate_monthpicker();

                    // hide the day and the year pickers
                    daypicker.hide();
                    yearpicker.hide();

                    // hide time-picker related elements
                    timepicker.hide();
                    view_toggler.hide();
                    confirm_selection.hide();

                // if the view is "years"
                } else if (view === 'years') {

                    // generate the year picker
                    generate_yearpicker();

                    // hide the day and the month pickers
                    daypicker.hide();
                    monthpicker.hide();

                    // hide time-picker related elements
                    timepicker.hide();
                    view_toggler.hide();
                    confirm_selection.hide();

                // if the view is "time"
                } else if (view === 'time') {

                    // generate the time picker
                    generate_timepicker();

                    // if the "time" view is the only available view
                    if (views.length === 1) {

                        // hide the time picker toggler button
                        view_toggler.hide();

                        // show the confirmation button
                        confirm_selection.show();

                    // if the "time" view is not the only available view
                    } else {

                        // time picker toggler button, but change the icon
                        view_toggler.show().addClass('dp_calendar');

                        // if no date is selected
                        // hide the confirmation button
                        if ($element.val() === '') confirm_selection.hide();

                        // show the confirmation button
                        else confirm_selection.show();

                    }

                    // hide the header, day, month and year pickers
                    header.hide();
                    daypicker.hide();
                    monthpicker.hide();
                    yearpicker.hide();

                }

                // if a callback function exists for when navigating through days/months/years/time
                // ("fire_events" is FALSE when the method was called by the "update" method)
                if (fire_events !== false && plugin.settings.onChange && typeof plugin.settings.onChange === 'function' && undefined !== view) {

                    // get the "active" elements in the view (ignoring the disabled ones)
                    elements = (view === 'days' ?
                        daypicker.find('td:not(.dp_disabled)') :
                        (view === 'months' ?
                            monthpicker.find('td:not(.dp_disabled)') :
                            (view === 'years' ?
                                yearpicker.find('td:not(.dp_disabled)') :
                                timepicker.find('.dp_time_segments td'))));

                    // iterate through the active elements
                    // and attach a "date" data attribute to each element in the form of
                    // YYYY-MM-DD if the view is "days"
                    // YYYY-MM if the view is "months"
                    // YYYY if the view is "years"
                    // so it's easy to identify elements in the list
                    elements.each(function() {

                        var matches;

                        // if view is "days"
                        if (view === 'days')

                            // if date is from a next/previous month and is selectable
                            if ($(this).hasClass('dp_not_in_month') && !$(this).hasClass('dp_disabled')) {

                                // extract date from the attached class
                                matches = $(this).attr('class').match(/date\_([0-9]{4})(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])/);

                                // attach a "date" data attribute to each element in the form of of YYYY-MM-DD for easily identifying sought elements
                                $(this).data('date', matches[1] + '-' + matches[2] + '-' + matches[3]);

                            // if date is from the currently selected month
                            } else

                                // attach a "date" data attribute to each element in the form of of YYYY-MM-DD for easily identifying sought elements
                                $(this).data('date', selected_year + '-' + str_pad(selected_month + 1, 2) + '-' + str_pad(to_int($(this).text()), 2));

                        // if view is "months"
                        else if (view === 'months') {

                            // get the month's number for the element's class
                            matches = $(this).attr('class').match(/dp\_month\_([0-9]+)/);

                            // attach a "date" data attribute to each element in the form of of YYYY-MM for easily identifying sought elements
                            $(this).data('date', selected_year + '-' + str_pad(to_int(matches[1]) + 1, 2));

                        // if view is "years"
                        } else if (view === 'years')

                            // attach a "date" data attribute to each element in the form of of YYYY for easily identifying sought elements
                            $(this).data('date', to_int($(this).text()));

                    });

                    // execute the callback function and send as arguments the current view, the elements in the view, and
                    // the element the plugin is attached to
                    plugin.settings.onChange.call($element, view, elements);

                }

                // assume the footer is visible
                footer.show();

                // if we are in the "time" view and there are more views available
                if (view === 'time' && views.length > 1) {

                    // hide the "Today" and the "Clear" buttons
                    selecttoday.hide();
                    cleardate.hide();

                    // set the view toggler width
                    view_toggler.css('width', $element.val() === '' ? '100%' : '50%');

                // for the other cases
                } else {

                    // assume both the "Today" and "Clear" buttons are visible
                    selecttoday.show();
                    cleardate.show();

                    // if the button for clearing a previously selected date needs to be visible all the time,
                    // or the "Clear" button needs to be shown only when a date was previously selected, and now it's the case,
                    // or the date picker is always visible and the "Clear" button was not explicitly disabled
                    if (
                        plugin.settings.show_clear_date === true ||
                        (plugin.settings.show_clear_date === 0 && $element.val() !== '') ||
                        (plugin.settings.always_visible && plugin.settings.show_clear_date !== false)
                    )

                        // if the "Today" button is visible
                        if (show_select_today) {

                            // show it, and set it's width to 50% of the available space
                            selecttoday.css('width', '50%');

                            // the "Clear date" button only takes up 50% of the available space
                            cleardate.css('width', '50%');

                        // if the "Today" button is not visible
                        } else {

                            // hide the "Today" button
                            selecttoday.hide();

                            // the "Clear date" button takes up 100% of the available space
                            // unless the time picker is available, in which case take up 50% of the available space
                            cleardate.css('width', $.inArray(views, 'time') > -1 ? '50%' : '100%');

                        }

                    // otherwise
                    else {

                        // hide the "Clear" button
                        cleardate.hide();

                        // if the "Today" button is visible, it will now take up all the available space
                        if (show_select_today) selecttoday.css('width', '100%');

                        // if the "Today" button should not be visible
                        else {

                            // hide the "Today" button
                            selecttoday.hide();

                            // if there's also no timepicker view, hide the footer entirely
                            if (!timepicker_config || (view !== 'time' && view !== 'days')) footer.hide();

                        }

                    }

                }

            },

            /**
             *  Handles time increase / decrease
             *
             *  @return void
             *
             *  @access private
             */
            manage_timer_controls = function(element) {

                var

                    // are we increasing or decreasing values?
                    increase = $(element).parent('.dp_time_controls_increase').length > 0,

                    // figure out what we're increasing (hour, minutes, seconds, ampm)
                    matches = $(element).attr('class').match(/dp\_time\_([^\s]+)/i),
                    value_container = $('.dp_time_segments .dp_time_' + matches[1] + (matches[1] !== 'ampm' ? 's' : ''), timepicker),

                    // the current value (strip the zeros in front)
                    value = value_container.text().toLowerCase(),

                    // the array with allowed values
                    lookup = timepicker_config[matches[1] + (matches[1] !== 'ampm' ? 's' : '')],

                    // the current value's position in the array of allowed values
                    current_value_position = $.inArray(matches[1] !== 'ampm' ? parseInt(value, 10) : value, lookup),

                    // the next value's position in the lookup array
                    next_value_position = current_value_position === -1 ? 0 : (increase ? (current_value_position + 1 >= lookup.length ? 0 : current_value_position + 1) : (current_value_position - 1 < 0 ? lookup.length - 1 : current_value_position - 1)),

                    default_date;

                // increase/decrease the required value according to the values in the lookup array
                if (matches[1] === 'hour') selected_hour = lookup[next_value_position];
                else if (matches[1] === 'minute') selected_minute = lookup[next_value_position];
                else if (matches[1] === 'second') selected_second = lookup[next_value_position];
                else selected_ampm = lookup[next_value_position];

                // if a default day is not available and the "start_date" property is set
                if (!default_day && plugin.settings.start_date) {

                    // check if "start_date" is valid according to the format
                    default_date = check_date(plugin.settings.start_date);

                    // ...and if it is, extract the day from there
                    if (default_date) default_day = default_date.getDate();

                }

                // if still no value, use the first selectable day
                if (!default_day) default_day = first_selectable_day;

                // set the new value
                value_container.text(str_pad(lookup[next_value_position], 2).toUpperCase());

                // update the value in the element
                select_date(selected_year, selected_month, default_day);

            },

            /**
             *  Puts the specified date in the element the plugin is attached to, and hides the date picker.
             *
             *  @param  integer     year    The year
             *
             *  @param  integer     month   The month
             *
             *  @param  integer     day     The day
             *
             *  @param  string      rview   The view from where the method was called (the referrer view)
             *
             *  @param  object      cell    The element that was clicked
             *
             *  @return void
             *
             *  @access private
             */
            select_date = function(year, month, day, rview, cell) {

                var

                    // construct a new date object from the arguments
                    default_date = new Date(year, month, day,
                        (timepicker_config && timepicker_config.hours ? selected_hour + (timepicker_config.ampm ? (selected_ampm === 'pm' && selected_hour !== 12 ? 12 : (selected_ampm === 'am' && selected_hour === 12 ? -12 : 0)) : 0) : 12),
                        (timepicker_config && timepicker_config.minutes ? selected_minute : 0),
                        (timepicker_config && timepicker_config.seconds ? selected_second : 0)
                    ),

                    // pointer to the cells in the current view
                    view_cells = (rview === 'days' ? daypicker_cells : (rview === 'months' ? monthpicker_cells : yearpicker_cells)),

                    // the selected date, formatted correctly
                    selected_value = format(default_date);

                // set the currently selected and formatted date as the value of the element the plugin is attached to
                $element.val(selected_value);

                // if date picker is always visible or time picker is available
                if (plugin.settings.always_visible || timepicker_config) {

                    // extract the date parts and reassign values to these variables
                    // so that everything will be correctly highlighted
                    default_month = default_date.getMonth();
                    selected_month = default_date.getMonth();
                    default_year = default_date.getFullYear();
                    selected_year = default_date.getFullYear();
                    default_day = default_date.getDate();

                    // if "cell" is available (it isn't when called from increasing/decreasing values the time picker)
                    if (cell && view_cells) {

                        // remove the "selected" class from all cells in the current view
                        view_cells.removeClass('dp_selected');

                        // add the "selected" class to the currently selected cell
                        cell.addClass('dp_selected');

                        // if we're on the "days" view and days from other months are selectable and one of those days was
                        // selected, repaint the datepicker so it will take us to the selected month
                        if (rview === 'days' && cell.hasClass('dp_not_in_month') && !cell.hasClass('dp_disabled')) plugin.show();

                    }

                }

                // if format contains time, switch to the time picker view
                if (timepicker_config) {

                    view = 'time';
                    manage_views();

                // if format doesn't contain time
                } else {

                    // move focus to the element the plugin is attached to
                    $element.focus();

                    // hide the date picker
                    plugin.hide();

                }

                // updates value for the date picker whose starting date depends on the selected date (if any)
                update_dependent(default_date);

                // if a callback function exists for when selecting a date
                // (if time picker is enabled, we'll run the callback when the user clicks on the confirmation button)
                if (!timepicker_config && plugin.settings.onSelect && typeof plugin.settings.onSelect === 'function')

                    // execute the callback function
                    // make "this" inside the callback function refer to the element the date picker is attached to
                    plugin.settings.onSelect.call($element, selected_value, year + '-' + str_pad(month + 1, 2) + '-' + str_pad(day, 2), default_date);

            },

            /**
             *  Concatenates any number of arguments and returns them as string.
             *
             *  @return string  Returns the concatenated values.
             *
             *  @access private
             */
            str_concat = function() {

                var str = '', i;

                // concatenate as string
                for (i = 0; i < arguments.length; i++) str += (arguments[i] + '');

                // return the concatenated values
                return str;

            },

            /**
             *  Left-pad a string to a certain length with zeroes.
             *
             *  @param  string  str     The string to be padded.
             *
             *  @param  integer len     The length to which the string must be padded
             *
             *  @return string          Returns the string left-padded with leading zeroes
             *
             *  @access private
             */
            str_pad = function(str, len) {

                // make sure argument is a string
                str += '';

                // pad with leading zeroes until we get to the desired length
                while (str.length < len) str = '0' + str;

                // return padded string
                return str;

            },

            /**
             *  Returns the integer representation of a string
             *
             *  @return int     Returns the integer representation of the string given as argument
             *
             *  @access private
             */
            to_int = function(str) {

                // return the integer representation of the string given as argument
                return parseInt(str, 10);

            },

            /**
             *  Updates the paired date picker (whose starting date depends on the value of the current date picker)
             *
             *  @param  date    date    A JavaScript date object representing the currently selected date
             *
             *  @return void
             *
             *  @access private
             */
            update_dependent = function(date) {

                // if the pair element exists
                if (plugin.settings.pair)

                    // iterate through the pair elements (as there may be more than just one)
                    $.each(plugin.settings.pair, function() {

                        var $pair = $(this), dp;

                        // chances are that in the beginning the pair element doesn't have the Zebra_DatePicker attached to it yet
                        // (as the "start" element is usually created before the "end" element)
                        // so we'll have to rely on "data" to send the starting date to the pair element

                        // therefore, if Zebra_DatePicker is not yet attached
                        if (!($pair.data && $pair.data('Zebra_DatePicker')))

                            // set the starting date like this
                            $pair.data('zdp_reference_date', date);

                        // if Zebra_DatePicker is attached to the pair element
                        else {

                            // reference the date picker object attached to the other element
                            dp = $pair.data('Zebra_DatePicker');

                            // update the other date picker's starting date
                            // the value depends on the original value of the "direction" attribute
                            // (also, if the pair date picker does not have a direction, set it to 1)
                            dp.update({
                                reference_date: date,
                                direction:      dp.settings.direction === 0 ? 1 : dp.settings.direction
                            });

                            // if the other date picker is always visible, update the visuals now
                            if (dp.settings.always_visible) dp.show();

                        }

                    });

            },

            // since with jQuery 1.9.0 the $.browser object was removed, we rely on this piece of code from
            // https://www.quirksmode.org/js/detect.html to detect the browser
            browser = {
                init: function() {
                    this.name = this.searchString(this.dataBrowser) || '';
                    this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || '';
                },
                searchString: function(data) {
                    var i, dataString, dataProp;

                    for (i = 0; i < data.length; i++) {
                        dataString = data[i].string;
                        dataProp = data[i].prop;
                        this.versionSearchString = data[i].versionSearch || data[i].identity;
                        if (dataString) {
                            if (dataString.indexOf(data[i].subString) !== -1)
                                return data[i].identity;
                        } else if (dataProp)
                            return data[i].identity;
                    }
                },
                searchVersion: function(dataString) {
                    var index = dataString.indexOf(this.versionSearchString);

                    if (index === -1) return;

                    return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
                },
                dataBrowser: [
                    {
                        string: navigator.userAgent,
                        subString: 'Firefox',
                        identity: 'firefox'
                    },
                    {
                        string: navigator.userAgent,
                        subString: 'MSIE',
                        identity: 'explorer',
                        versionSearch: 'MSIE'
                    }
                ]
            };

        plugin.settings = {};

        /**
         *  Clears the selected date.
         *
         *  @return void
         */
        plugin.clear_date = function() {

            $(cleardate).trigger('click');

        };

        /**
         *  Destroys the date picker.
         *
         *  @return void
         */
        plugin.destroy = function() {

            // if the calendar icon exists
            if (undefined !== plugin.icon) {

                // remove associated event handlers
                plugin.icon.off('click.Zebra_DatePicker_' + uniqueid);
                plugin.icon.off('focus.Zebra_DatePicker_' + uniqueid);
                plugin.icon.off('keydown.Zebra_DatePicker_' + uniqueid);

                // remove the icon itself
                plugin.icon.remove();

            }

            // remove all events attached to the datepicker
            // (these are the ones for increasing/decreasing values in the time picker)
            datepicker.off();

            // remove the calendar
            datepicker.remove();

            // if calendar icon was shown and the date picker was not always visible in a container,
            // also remove the wrapper used for positioning it
            if (plugin.settings.show_icon && !(plugin.settings.always_visible instanceof jQuery)) $element.unwrap();

            // remove associated event handlers from the element
            $element.off('blur.Zebra_DatePicker_' + uniqueid);
            $element.off('click.Zebra_DatePicker_' + uniqueid);
            $element.off('focus.Zebra_DatePicker_' + uniqueid);
            $element.off('keydown.Zebra_DatePicker_' + uniqueid);
            $element.off('mousedown.Zebra_DatePicker_' + uniqueid);

            // remove associated event handlers from the document
            $(document).off('keyup.Zebra_DatePicker_' + uniqueid);
            $(document).off('mousedown.Zebra_DatePicker_' + uniqueid);
            $(document).off('touchend.Zebra_DatePicker_' + uniqueid);
            $(window).off('resize.Zebra_DatePicker_' + uniqueid);
            $(window).off('orientationchange.Zebra_DatePicker_' + uniqueid);

            // remove association with the element
            $element.removeData('Zebra_DatePicker');

            // restore element's modified attributes
            $element.attr('readonly', original_attributes.readonly);
            $element.attr('style', original_attributes.style ? original_attributes.style : '');
            $element.css('paddingLeft', original_attributes.padding_left);
            $element.css('paddingRight', original_attributes.padding_right);

        };

        /**
         *  Hides the date picker.
         *
         *  @return void
         */
        plugin.hide = function(outside) {

            // unless the date picker is not already hidden AND
            // the date picker is not always visible or we clicked outside the date picker
            // (the "outside" argument is TRUE when clicking outside the date picker and the "always_visible" is set to boolean TRUE)
            if (!datepicker.hasClass('dp_hidden') && (!plugin.settings.always_visible || outside)) {

                // hide the iFrameShim in Internet Explorer 6
                iframeShim('hide');

                // hide the date picker
                datepicker.addClass('dp_hidden');

                // if a callback function exists for when hiding the date picker
                if (plugin.settings.onClose && typeof plugin.settings.onClose === 'function')

                    // execute the callback function and pass as argument the element the plugin is attached to
                    plugin.settings.onClose.call($element);

            }

        };

        /**
         *  Set the date picker's value
         *
         *  Must be a string representing a date in the format set by the "format" property, or a JavaScript date object.
         *
         *  @return void
         */
        plugin.set_date = function(date) {

            var dateObj;

            // if "date" is given as a valid Date object, convert it to the required format
            if (typeof date === 'object' && date instanceof Date) date = format(date);

            // if a valid date was entered, and date is not disabled
            if ((dateObj = check_date(date)) && !is_disabled(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate())) {

                // set the element's value
                $element.val(date);

                // update the paired date picker (if any)
                update_dependent(dateObj);

            }

        };

        /**
         *  Shows the date picker.
         *
         *  @return void
         */
        plugin.show = function(fire_events) {

            // always show the view defined in settings
            view = plugin.settings.view;

            // get the default date, from the element, and check if it represents a valid date, according to the required format
            var default_date = check_date($element.val() || (plugin.settings.start_date ? plugin.settings.start_date : '')),
                current_date;

            // if the value represents a valid date
            if (default_date) {

                // extract the date parts
                // we'll use these to highlight the default date in the date picker and as starting point to
                // what year and month to start the date picker with
                // why separate values? because selected_* will change as user navigates within the date picker
                default_month = default_date.getMonth();
                selected_month = default_date.getMonth();
                default_year = default_date.getFullYear();
                selected_year = default_date.getFullYear();
                default_day = default_date.getDate();

                // if the default date represents a disabled date
                if (is_disabled(default_year, default_month, default_day)) {

                    // if date picker is in "strict" mode, clear the value of the parent element
                    if (plugin.settings.strict) $element.val('');

                    // the calendar will start with the first selectable year/month
                    selected_month = first_selectable_month;
                    selected_year = first_selectable_year;

                }

            // if a default value is not available, or value does not represent a valid date
            } else {

                // the calendar will start with the first selectable year/month
                selected_month = first_selectable_month;
                selected_year = first_selectable_year;

            }

            // whatever the case, if time picker is enabled
            if (timepicker_config) {

                // if a default date is available, use the time from there
                if (default_date) current_date = default_date;

                // use current system time otherwise
                else current_date = new Date();

                // extract time parts from it
                selected_hour = current_date.getHours();
                selected_minute = current_date.getMinutes();
                selected_second = current_date.getSeconds();
                selected_ampm = (selected_hour >= 12 ? 'pm' : 'am');

                // if hour is in 12 hour format
                if (timepicker_config.is12hour)

                    // convert it to the correct value
                    selected_hour = (selected_hour % 12 === 0 ? 12 : selected_hour % 12);

                // make sure that the default values are within the allowed range, if a range is defined
                if ($.isArray(plugin.settings.enabled_hours) && $.inArray(selected_hour, plugin.settings.enabled_hours) === -1) selected_hour = plugin.settings.enabled_hours[0];
                if ($.isArray(plugin.settings.enabled_minutes) && $.inArray(selected_minute, plugin.settings.enabled_minutes) === -1) selected_minute = plugin.settings.enabled_minutes[0];
                if ($.isArray(plugin.settings.enabled_seconds) && $.inArray(selected_second, plugin.settings.enabled_seconds) === -1) selected_second = plugin.settings.enabled_seconds[0];
                if ($.isArray(plugin.settings.enabled_ampm) && $.inArray(selected_ampm, plugin.settings.enabled_ampm) === -1) selected_ampm = plugin.settings.enabled_ampm[0];
            }

            // generate the appropriate view
            manage_views(fire_events);

            // if date picker is not always visible in a container, and the calendar icon is visible
            if (!(plugin.settings.always_visible instanceof jQuery)) {

                // if date picker is to be injected into the <body>
                if (plugin.settings.container.is('body')) {

                    var

                        // get the date picker width and height
                        datepicker_width = datepicker.outerWidth(),
                        datepicker_height = datepicker.outerHeight(),

                        // compute the date picker's default left and top
                        // this will be computed relative to the icon's top-right corner (if the calendar icon exists), or
                        // relative to the element's top-right corner otherwise, to which the offsets given at initialization
                        // are added/subtracted
                        left = (undefined !== icon ? icon.offset().left + icon.outerWidth(true) : $element.offset().left + $element.outerWidth(true)) + plugin.settings.offset[0],
                        top = (undefined !== icon ? icon.offset().top : $element.offset().top) - datepicker_height + plugin.settings.offset[1],

                        // get browser window's width and height
                        window_width = $(window).width(),
                        window_height = $(window).height(),

                        // get browser window's horizontal and vertical scroll offsets
                        window_scroll_top = $(window).scrollTop(),
                        window_scroll_left = $(window).scrollLeft();

                    if (plugin.settings.default_position === 'below')
                        top = (undefined !== icon ? icon.offset().top : $element.offset().top) + plugin.settings.offset[1];

                    // if date picker is outside the viewport, adjust its position so that it is visible
                    if (left + datepicker_width > window_scroll_left + window_width) left = window_scroll_left + window_width - datepicker_width;
                    if (left < window_scroll_left) left = window_scroll_left;

                    if (top + datepicker_height > window_scroll_top + window_height) top = window_scroll_top + window_height - datepicker_height;
                    if (top < window_scroll_top) top = window_scroll_top;

                    // make the date picker visible
                    datepicker.css({
                        left:   left,
                        top:    top
                    });

                // if date picker is to be injected into a custom container element
                } else

                    datepicker.css({
                        left:   0,
                        top:    0
                    });

                // fade-in the date picker
                // for Internet Explorer < 9 show the date picker instantly or fading alters the font's weight
                datepicker.removeClass('dp_hidden');

                // show the iFrameShim in Internet Explorer 6
                iframeShim();

            // if date picker is always visible, show it
            } else datepicker.removeClass('dp_hidden');

            // if a callback function exists for when showing the date picker
            // ("fire_events" is FALSE when the method was called by the "update" method)
            if (fire_events !== false && plugin.settings.onOpen && typeof plugin.settings.onOpen === 'function')

                // execute the callback function and pass as argument the element the plugin is attached to
                plugin.settings.onOpen.call($element);

        };

        /**
         *  Updates the configuration options given as argument
         *
         *  @param  object  values  An object containing any number of configuration options to be updated
         *
         *  @return void
         */
        plugin.update = function(values) {

            // if original direction not saved, save it now
            if (plugin.original_direction) plugin.original_direction = plugin.direction;

            // update configuration options
            plugin.settings = $.extend(plugin.settings, values);

            // reinitialize the object with the new options
            init(true);

        };

        browser.init();

        // initialize the plugin
        init();

    };

    $.fn.Zebra_DatePicker = function(options) {

        // iterate through all the elements to which we need to attach the date picker to
        return this.each(function() {

            // if element has a date picker already attached
            if (undefined !== $(this).data('Zebra_DatePicker'))

                // remove the attached date picker
                $(this).data('Zebra_DatePicker').destroy();

            // create an instance of the plugin
            var plugin = new $.Zebra_DatePicker(this, options);

            // save a reference to the newly created object
            $(this).data('Zebra_DatePicker', plugin);

        });

    };

    // this is used for setting global defaults, that will be applied to all date pickers
    $.fn.Zebra_DatePicker.defaults = {};

}));

