(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[879],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function l(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,s,o,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(!l(e[s],i[s]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!l(s.value[1],i.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(o=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,o[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==o[s]&&"__v"!==o[s]&&"__o"!==o[s]||!e.$$typeof)&&!l(e[o[s]],i[o[s]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return l(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),l=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,o=[];function u(){s=e(o.map((function(e){return e.props}))),m.canUseDOM?t(s):n&&(s=n(s))}var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,o=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){o.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=o.indexOf(this);o.splice(e,1),u()},i.render=function(){return l.createElement(r,this.props)},a}(a.PureComponent);return i(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(m,"canUseDOM",c),m}}},9856:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),a=function(e){var t=e.item;return r.createElement("div",{className:"resume-section-content"},r.createElement("div",{key:t.id},r.createElement("h1",{className:"mb-0 big-name"},t.name,r.createElement("span",{className:"text-primary"},t.lastname)),r.createElement("div",{className:"subheading mb-5"},t.address," · ",t.phone," ·",r.createElement("a",{href:"mailto:info@estebanburgos.com.ar"},t.email)),r.createElement("p",{className:"lead mb-5"},t.description),r.createElement("div",{className:"social-icons"},r.createElement("a",{className:"social-icons-about",href:t.linkedin,rel:"noreferrer",target:"_blank"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.createElement("path",{d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"}))),r.createElement("a",{className:"social-icons-about",href:t.github,rel:"noreferrer",target:"_blank"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}))))))},l=n(4546),i=function(e){var t=e.language,n=(0,l.Z)().filter((function(e){return e.language.language===t.lang}));return r.createElement("section",{className:"resume-section",id:"about"},n.map((function(e){return r.createElement(a,{item:e,key:e.id})})))}},5096:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),a=function(e){var t=e.item;return r.createElement("li",{className:"mb-2"},r.createElement("a",{href:t.urlcourse,rel:"noreferrer",target:"_blank"},r.createElement("span",{className:"fa-li"},r.createElement("i",{className:"fas fa-trophy text-warning"})))," ",t.degree," ",r.createElement("br",null),r.createElement("small",{className:"text-uppercase"},t.institution," - ",t.date))},l=n(5444),i=function(){return(0,l.useStaticQuery)("3370385965").allStrapiCourses.nodes},c=function(e){var t=e.language,n=i().filter((function(e){return e.language.language===t.lang}));return r.createElement("section",{className:"resume-section",id:"awards"},r.createElement("div",{className:"resume-section-content"},r.createElement("h2",{className:"mb-5"},t.extras),r.createElement("ul",{className:"fa-ul mb-0"},n.map((function(e){return r.createElement(a,{item:e,key:e.id})})))))}},1677:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),a=function(e){var t=e.item;return r.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-between mb-5"},r.createElement("div",{className:"flex-grow-1"},r.createElement("h3",{className:"mb-0"},t.institution),r.createElement("div",{className:"subheading"},t.degree),r.createElement("div",{className:"mb-3"},r.createElement("span",null,r.createElement("a",{href:t.infoUrl,rel:"noreferrer",target:"_blank"},"es"===t.language.language?"Información del Curso":"Course Information")),""!==t.certificateUrl?r.createElement("span",null,r.createElement("a",{href:t.certificateUrl,rel:"noreferrer",target:"_blank"}," • ","es"===t.language.language?"Certificado":"Certification")):null),r.createElement("p",null,t.description)),r.createElement("div",{className:"flex-shrink-0"},r.createElement("span",{className:"text-primary"},t.startDate," - ",null!==t.endDate?t.endDate:"es"===t.language.language?"En curso":"In Progress")))},l=n(5444),i=function(){return(0,l.useStaticQuery)("1924626645").allStrapiEducation.nodes},c=function(e){var t=e.language,n=i().filter((function(e){return e.language.language===t.lang})).reverse();return r.createElement("section",{className:"resume-section",id:"education"},r.createElement("div",{className:"resume-section-content"},r.createElement("h2",{className:"mb-5"},t.education),n.map((function(e){return r.createElement(a,{item:e,key:e.id})}))))}},9883:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),a=function(e){var t=e.item,n=t.description,a=t.description.substr(0,225)+" ...",l=(0,r.useState)(a),i=l[0],c=l[1],s=function(){c(i===a?n:a)};return r.createElement("div",{className:"timeline"},r.createElement("div",{className:"icon"}),r.createElement("div",{className:"date-content"},r.createElement("div",{className:"date-outer"},r.createElement("span",{className:"date"},r.createElement("span",{className:"month"},"en"===t.language.language?t.timeJob.substr(0,7):t.timeJob.substr(0,6)),r.createElement("span",{className:"year"},t.yearsJob)))),r.createElement("div",{className:"timeline-content"},r.createElement("h3",{className:"mb-0"},t.position),null!==t.companyUrl?r.createElement("a",{href:t.companyUrl,rel:"noreferrer",target:"_blank"},r.createElement("span",{className:"subheading"},t.company)):r.createElement("div",{className:"subheading"},t.company),0!==t.projects.length?r.createElement("div",{className:"mb-2"},"es"===t.language.language?"Proyectos Relacionados: ":"Related Projects: ",t.projects.map((function(e){return r.createElement("div",{key:e.id},r.createElement("a",{href:e.demoUrl,rel:"noreferrer",target:"_blank"},e.title,"  "))}))):null,r.createElement("div",{className:"mb-1"},t.startDate," – ",t.endDate?t.endDate:t.status," • ",t.timeJob),r.createElement("div",{className:"mb-3"},t.place),r.createElement("p",null,i),i===a?r.createElement("button",{type:"button",className:"btn btn-sm btn-light",onClick:function(){return s()}},"es"===t.language.language?"Mostrar Más":"Show More"):r.createElement("button",{type:"button",className:"btn btn-sm btn-light",onClick:function(){return s()}},"es"===t.language.language?"Mostrar Menos":"Show Less")))},l=n(5444),i=function(){return(0,l.useStaticQuery)("4003942516").allStrapiExperience.nodes},c=function(e){var t=e.language,n=i().filter((function(e){return e.language.language===t.lang})).reverse();return r.createElement("section",{className:"resume-section",id:"experience"},r.createElement("div",{className:"resume-section-content"},r.createElement("h2",{className:"mb-5"},t.experience),r.createElement("div",{className:"main-timeline"},n.map((function(e){return r.createElement(a,{item:e,key:e.id})})))))}},8832:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ne}});var r,a,l,i,c=n(7294),s=n(5697),o=n.n(s),u=n(4839),m=n.n(u),f=n(2993),d=n.n(f),p=n(6494),g=n.n(p),b="bodyAttributes",h="htmlAttributes",E="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},y=(Object.keys(v).map((function(e){return v[e]})),"charset"),N="cssText",w="href",k="http-equiv",T="innerHTML",C="itemprop",S="name",A="property",O="rel",j="src",x="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",L="defer",I="encodeSpecialCharacters",R="onChangeClientState",_="titleTemplate",D=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),F=[v.NOSCRIPT,v.SCRIPT,v.STYLE],B="data-react-helmet",U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=X(e,v.TITLE),n=X(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,M);return t||r||void 0},G=function(e){return X(e,R)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var l=r[a].toLowerCase();if(-1!==e.indexOf(l)&&n[l])return t.concat(n)}return t}),[])},W=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,l=Object.keys(e),i=0;i<l.length;i++){var c=l[i],s=c.toLowerCase();-1===t.indexOf(s)||n===O&&"canonical"===e[n].toLowerCase()||s===O&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==T&&c!==N&&c!==C||(n=c)}if(!n||!e[n])return!1;var o=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][o]&&(a[n][o]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var l=Object.keys(a),i=0;i<l.length;i++){var c=l[i],s=g()({},r[c],a[c]);r[c]=s}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,le=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,l=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,o=e.scriptTags,u=e.styleTags,m=e.title,f=e.titleAttributes;se(v.BODY,r),se(v.HTML,a),ce(m,f);var d={baseTag:oe(v.BASE,n),linkTags:oe(v.LINK,l),metaTags:oe(v.META,i),noscriptTags:oe(v.NOSCRIPT,c),scriptTags:oe(v.SCRIPT,o),styleTags:oe(v.STYLE,u)},p={},g={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(g[e]=d[e].oldTags)})),t&&t(),s(e,p,g)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(v.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),a=r?r.split(","):[],l=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],o=t[s]||"";n.getAttribute(s)!==o&&n.setAttribute(s,o),-1===a.indexOf(s)&&a.push(s);var u=l.indexOf(s);-1!==u&&l.splice(u,1)}for(var m=l.length-1;m>=0;m--)n.removeAttribute(l[m]);a.length===l.length?n.removeAttribute(B):n.getAttribute(B)!==i.join(",")&&n.setAttribute(B,i.join(","))}},oe=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),l=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===T)n.innerHTML=t.innerHTML;else if(r===N)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(B,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):l.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),l.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:l}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,a=me(n,r),[c.createElement(v.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),l=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Y(l,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(l,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case h:return{toComponent:function(){return me(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===T||n===N){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===T||e===N)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+Y(r[t],n)+'"';return e?e+" "+a:a}),""),l=r.innerHTML||r.cssText||"",i=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+l+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,l=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,o=e.styleTags,u=e.title,m=void 0===u?"":u,f=e.titleAttributes;return{base:fe(v.BASE,t,r),bodyAttributes:fe(b,n,r),htmlAttributes:fe(h,a,r),link:fe(v.LINK,l,r),meta:fe(v.META,i,r),noscript:fe(v.NOSCRIPT,c,r),script:fe(v.SCRIPT,s,r),style:fe(v.STYLE,o,r),title:fe(v.TITLE,{title:m,titleAttributes:f},r)}},pe=m()((function(e){return{baseTag:J([w,x],e),bodyAttributes:Q(b,e),defer:X(e,L),encode:X(e,I),htmlAttributes:Q(h,e),linkTags:W(v.LINK,[O,w],e),metaTags:W(v.META,[S,y,k,A,C],e),noscriptTags:W(v.NOSCRIPT,[T],e),onChangeClientState:G(e),scriptTags:W(v.SCRIPT,[j,T],e),styleTags:W(v.STYLE,[N],e),title:V(e),titleAttributes:Q(E,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){le(e,(function(){ae=null}))})):(le(e),ae=null)}),de)((function(){return null})),ge=(a=pe,i=l=function(e){function t(){return q(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,l=e.nestedChildren;return z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[z({},a,this.mapNestedChildrenToProps(n,l))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,l=e.newChildProps,i=e.nestedChildren;switch(r.type){case v.TITLE:return z({},a,((t={})[r.type]=i,t.titleAttributes=z({},l),t));case v.BODY:return z({},a,{bodyAttributes:z({},l)});case v.HTML:return z({},a,{htmlAttributes:z({},l)})}return z({},a,((n={})[r.type]=z({},l),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=z({},t);return Object.keys(e).forEach((function(t){var r;n=z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,l=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(H(a,["children"]));switch(n.warnOnInvalidChildren(e,l),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:l});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:l})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=H(e,["children"]),r=z({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(a,r)},Z(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),l.propTypes={base:o().object,bodyAttributes:o().object,children:o().oneOfType([o().arrayOf(o().node),o().node]),defaultTitle:o().string,defer:o().bool,encodeSpecialCharacters:o().bool,htmlAttributes:o().object,link:o().arrayOf(o().object),meta:o().arrayOf(o().object),noscript:o().arrayOf(o().object),onChangeClientState:o().func,script:o().arrayOf(o().object),style:o().arrayOf(o().object),title:o().string,titleAttributes:o().object,titleTemplate:o().string},l.defaultProps={defer:!0,encodeSpecialCharacters:!0},l.peek=a.peek,l.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ge.renderStatic=ge.rewind;var be=ge,he=function(){var e=new Date;return c.createElement("footer",{className:"footer"},c.createElement("p",{className:"text-footer"},"© ",e.getFullYear()," - Powered by GatsbyJS / Strapi HeadlessCMS"))},Ee=n(5444),ve=n(4546),ye=function(e){var t=e.language,n=e.showMobileMenu,r=(0,ve.Z)()[0].avatar.localFile.publicURL;return c.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},c.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},c.createElement("span",{className:"d-block d-lg-none"},"ESTEBAN BURGOS"),c.createElement("span",{className:"d-none d-lg-block"},c.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:r,alt:"profile"}))),c.createElement("button",{onClick:function(){return n()},className:"navbar-toggler",type:"button"},c.createElement("span",{className:"navbar-toggler-icon"})),c.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.createElement("ul",{className:"navbar-nav"},c.createElement("li",{className:"nav-item"},c.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},t.about)),c.createElement("li",{className:"nav-item"},c.createElement("a",{className:"nav-link js-scroll-trigger",href:"#experience"},t.experience)),c.createElement("li",{className:"nav-item"},c.createElement("a",{className:"nav-link js-scroll-trigger",href:"#education"},t.education)),c.createElement("li",{className:"nav-item"},c.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},t.skills)),c.createElement("li",{className:"nav-item"},c.createElement("a",{className:"nav-link js-scroll-trigger",href:"#awards"},t.extrasMenu)),c.createElement("li",{className:"nav-item"},c.createElement("a",{className:"nav-link js-scroll-trigger",href:"#projects"},t.projects)),c.createElement("li",null,c.createElement("hr",{className:"mb-3 mt-3"})),"es"===t.lang?c.createElement(c.Fragment,null,c.createElement("li",{className:"nav-item"},c.createElement("a",{className:"nav-link",rel:"noreferrer",href:"https://drive.google.com/file/d/1FqCMt0GLPRdhrhgz4KBl-D3nbsK6yLZ8/view?usp=sharing",target:"_blank"},c.createElement("small",null,"Descargar CV"))),c.createElement("li",{className:"nav-item"},c.createElement(Ee.Link,{to:"/english",className:"nav-link"},c.createElement("small",null,"English Version")))):null,"en"===t.lang?c.createElement(c.Fragment,null,c.createElement("li",{className:"nav-item"},c.createElement("a",{className:"nav-link",rel:"noreferrer",href:"https://drive.google.com/file/d/1FqCMt0GLPRdhrhgz4KBl-D3nbsK6yLZ8/view?usp=sharing",target:"_blank"},c.createElement("small",null,"Download CV"))),c.createElement("li",{className:"nav-item"},c.createElement(Ee.Link,{to:"/",className:"nav-link"},c.createElement("small",null,"Spanish Version")))):null)))},Ne=function(e){var t=e.children,n=e.language,r=e.showMobileMenu;return c.createElement(c.Fragment,null,c.createElement(be,null,c.createElement("meta",{charset:"utf-8"}),c.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),c.createElement("meta",{name:"description",content:"CV"}),c.createElement("meta",{name:"author",content:"Esteban Burgos"}),c.createElement("title",null,"Esteban Burgos Developer"),c.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),c.createElement("link",{href:"https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700",rel:"stylesheet",type:"text/css",crossOrigin:"anonymous"}),c.createElement("link",{href:"https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i",rel:"stylesheet",type:"text/css",crossOrigin:"anonymous"})),c.createElement(ye,{language:n,showMobileMenu:r}),c.createElement(he,null),t)}},3507:function(e,t,n){"use strict";var r=n(7294),a=n(5444);t.Z=function(e){var t=e.language,n=e.showMobileMenu;return r.createElement("nav",{className:"navbar-dark bg-primary fixed-top h-100"},r.createElement("div",{className:"d-flex justify-content-between align-items-center mobile-item mr-3 ml-3 mt-2 mb-2"},r.createElement("span",{className:"d-block navbar-brand"},"ESTEBAN BURGOS"),r.createElement("button",{onClick:function(){return n()},className:"navbar-toggler",type:"button"},r.createElement("span",{className:"navbar-toggler-icon"}))),r.createElement("div",{className:"d-flex justify-content-center align-items-center h-100"},r.createElement("ul",{className:"navbar-nav"},r.createElement("li",{className:"nav-item mobile-item"},r.createElement("a",{onClick:function(){return n()},className:"nav-link",href:"#about"},t.about)),r.createElement("li",{className:"nav-item mobile-item"},r.createElement("a",{onClick:function(){return n()},className:"nav-link mobile-item",href:"#experience"},t.experience)),r.createElement("li",{className:"nav-item mobile-item"},r.createElement("a",{onClick:function(){return n()},className:"nav-link",href:"#education"},t.education)),r.createElement("li",{className:"nav-item mobile-item"},r.createElement("a",{onClick:function(){return n()},className:"nav-link",href:"#skills"},t.skills)),r.createElement("li",{className:"nav-item mobile-item"},r.createElement("a",{onClick:function(){return n()},className:"nav-link",href:"#awards"},t.extrasMenu)),r.createElement("li",{className:"nav-item mobile-item"},r.createElement("a",{onClick:function(){return n()},className:"nav-link",href:"#projects"},t.projects)),r.createElement("li",{className:"w-100"},r.createElement("hr",{className:"mb-3 mt-3"})),"es"===t.lang?r.createElement(r.Fragment,null,r.createElement("li",{className:"nav-item mobile-item"},r.createElement("a",{className:"nav-link",rel:"noreferrer",href:"https://drive.google.com/file/d/1FqCMt0GLPRdhrhgz4KBl-D3nbsK6yLZ8/view?usp=sharing",target:"_blank"},r.createElement("small",null,"Descargar CV"))),r.createElement("li",{className:"nav-item mobile-item"},r.createElement(a.Link,{to:"/english",className:"nav-link"},r.createElement("small",null,"English Version")))):null,"en"===t.lang?r.createElement(r.Fragment,null,r.createElement("li",{className:"nav-item mobile-item"},r.createElement("a",{className:"nav-link",rel:"noreferrer",href:"https://drive.google.com/file/d/1FqCMt0GLPRdhrhgz4KBl-D3nbsK6yLZ8/view?usp=sharing",target:"_blank"},r.createElement("small",null,"Download CV"))),r.createElement("li",{className:"nav-item mobile-item"},r.createElement(a.Link,{to:"/",className:"nav-link"},r.createElement("small",null,"Spanish Version")))):null)))}},4170:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(5444),l=function(){return(0,a.useStaticQuery)("1814642390").allStrapiProjectCategories.nodes},i=function(){return(0,a.useStaticQuery)("3088641916").allStrapiProjects.nodes},c=function(e){var t=e.item,n=e.language;return r.createElement("div",{className:"card"},r.createElement("div",{className:"d-flex justify-content-center align-items-center"},null!==t.image?r.createElement("img",{className:"card-img-top",width:"600",src:t.image.localFile.childImageSharp.fluid.srcWebp,alt:"project"}):r.createElement("img",{className:"card-img-top",width:"600",height:"180",src:"https://media.istockphoto.com/photos/gloomy-wall-background-black-texture-cement-surface-picture-id639935148?k=6&m=639935148&s=170667a&w=0&h=rcZgdrXC8SmnFtwQrfxwIE0McuGX8-9wWXSkT7UMy1Y=",alt:"project"}),r.createElement("h3",{className:"card-title-custom text-center text-white"},t.title)),r.createElement("div",{className:"card-body"},r.createElement("p",{className:"card-text"},"es"===n.lang?t.descriptionEs:t.descriptionEn)),r.createElement("div",{className:"card-footer d-flex justify-content-center align-items-center"},r.createElement("a",{className:"mr-3",rel:"noreferrer",href:t.demoUrl,target:"_blank"},r.createElement("button",{className:"btn btn-sm btn-light"},"Demo")),t.access?r.createElement(r.Fragment,null,""!==t.backendRepo?r.createElement("a",{className:"mr-3",rel:"noreferrer",href:t.backendRepo,target:"_blank"},r.createElement("button",{className:"btn btn-sm btn-light"},"Backend")):null,""!==t.frontendRepo?r.createElement("a",{className:"mr-3",rel:"noreferrer",href:t.frontendRepo,target:"_blank"},r.createElement("button",{className:"btn btn-sm btn-light"},"Frontend")):null,r.createElement("span",{className:"badge badge-pill badge-success"},"es"===n.lang?"Público":"Public")):r.createElement("span",{className:"badge badge-pill badge-danger"},"es"===n.lang?"Restringido: solicitar acceso":"Restricted: request access")))},s=function(e){var t=e.language,n=l(),a=i(),s=n.filter((function(e){return 0!==e.projects.length})),o=(0,r.useState)(a),u=o[0],m=o[1];return r.createElement("section",{className:"resume-section",id:"projects"},r.createElement("div",{className:"resume-section-content"},0!==u.length?r.createElement(r.Fragment,null,r.createElement("h2",{className:"mb-3"},t.projects),s.map((function(e){return r.createElement("button",{key:e.id,onClick:function(){return function(e){m(e)}(e.projects)},className:"btn mr-2 mb-2 "+("project-leader"===e.slug?"btn-primary":"btn-light")},r.createElement("span",{className:"badge badge-pill badge-dark"},e.projects.length)," ","es"===t.lang?e.esName:e.enName)})),r.createElement("button",{onClick:function(){m(a)},className:"btn btn-dark mb-2"},r.createElement("span",{className:"badge badge-pill badge-light"},a.length)," ","es"===t.lang?"Todos":"All Projects"),r.createElement("div",{className:"card-columns mt-3"},u.map((function(e){return r.createElement(c,{item:e,key:e.id,language:t})})))):r.createElement("h2",{className:"mb-3"},"es"===t.lang?"Aún no hay proyectos cargados":"There are no projects uploaded for this language yet")))}},5566:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),a=function(e){var t=e.item,n=(0,r.useState)(""),a=n[0],l=n[1],i=function(){l(t.name)};return r.createElement("li",{className:"list-inline-item"},r.createElement("button",{onMouseOver:function(){return i()},onFocus:function(){return i()},onMouseLeave:function(){l("")},className:"btn btn-light button-skill",type:"button"},r.createElement("img",{className:"rounded-circle",width:"55px",height:"55px",src:t.image.localFile.publicURL,"data-toggle":"tooltip","data-placement":"top",title:t.name,alt:t.name}),""!==a?r.createElement(r.Fragment,null,r.createElement("br",null),r.createElement("a",{href:t.url,rel:"noreferrer",target:"_blank"},r.createElement("small",{className:"text-skill"},t.name))):null))},l=n(5444),i=function(){return(0,l.useStaticQuery)("1761920805").allStrapiSkillsCategories.nodes},c=function(e){var t=e.language,n=i();return r.createElement("section",{className:"resume-section",id:"skills"},r.createElement("div",{className:"resume-section-content"},r.createElement("h2",{className:"mb-5"},t.skills),n.map((function(e){return r.createElement("div",{key:e.id},r.createElement("div",{className:"subheading mb-3"},"es"===t.lang?e.esName:e.enName),r.createElement("ul",{className:"list-inline dev-icons"},e.skills.map((function(e){return r.createElement(a,{item:e,key:e.id})}))))}))))}},4546:function(e,t,n){"use strict";var r=n(5444);t.Z=function(){return(0,r.useStaticQuery)("729793046").allStrapiAbout.nodes}}}]);
//# sourceMappingURL=99b0051cfc41c8ed72eb969e84f4d30f28a71d3e-07286a5f3da4fe5bc0bd.js.map