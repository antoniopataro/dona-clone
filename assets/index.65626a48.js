const df=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};df();var I={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Or=Symbol.for("react.element"),ff=Symbol.for("react.portal"),pf=Symbol.for("react.fragment"),hf=Symbol.for("react.strict_mode"),mf=Symbol.for("react.profiler"),gf=Symbol.for("react.provider"),vf=Symbol.for("react.context"),yf=Symbol.for("react.forward_ref"),wf=Symbol.for("react.suspense"),xf=Symbol.for("react.memo"),kf=Symbol.for("react.lazy"),gs=Symbol.iterator;function Sf(e){return e===null||typeof e!="object"?null:(e=gs&&e[gs]||e["@@iterator"],typeof e=="function"?e:null)}var Fa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Da=Object.assign,Ma={};function Hn(e,t,n){this.props=e,this.context=t,this.refs=Ma,this.updater=n||Fa}Hn.prototype.isReactComponent={};Hn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Hn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ja(){}ja.prototype=Hn.prototype;function fu(e,t,n){this.props=e,this.context=t,this.refs=Ma,this.updater=n||Fa}var pu=fu.prototype=new ja;pu.constructor=fu;Da(pu,Hn.prototype);pu.isPureReactComponent=!0;var vs=Array.isArray,Ua=Object.prototype.hasOwnProperty,hu={current:null},Ba={key:!0,ref:!0,__self:!0,__source:!0};function Va(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Ua.call(t,r)&&!Ba.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(u===1)o.children=n;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)o[r]===void 0&&(o[r]=u[r]);return{$$typeof:Or,type:e,key:i,ref:l,props:o,_owner:hu.current}}function Cf(e,t){return{$$typeof:Or,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function mu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Or}function Ef(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ys=/\/+/g;function ji(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ef(""+e.key):t.toString(36)}function fo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Or:case ff:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+ji(l,0):r,vs(o)?(n="",e!=null&&(n=e.replace(ys,"$&/")+"/"),fo(o,t,n,"",function(c){return c})):o!=null&&(mu(o)&&(o=Cf(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ys,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",vs(e))for(var u=0;u<e.length;u++){i=e[u];var s=r+ji(i,u);l+=fo(i,t,n,s,o)}else if(s=Sf(e),typeof s=="function")for(e=s.call(e),u=0;!(i=e.next()).done;)i=i.value,s=r+ji(i,u++),l+=fo(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Qr(e,t,n){if(e==null)return e;var r=[],o=0;return fo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Pf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},po={transition:null},_f={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:po,ReactCurrentOwner:hu};B.Children={map:Qr,forEach:function(e,t,n){Qr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qr(e,function(){t++}),t},toArray:function(e){return Qr(e,function(t){return t})||[]},only:function(e){if(!mu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Hn;B.Fragment=pf;B.Profiler=mf;B.PureComponent=fu;B.StrictMode=hf;B.Suspense=wf;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_f;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Da({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=hu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)Ua.call(t,s)&&!Ba.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&u!==void 0?u[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){u=Array(s);for(var c=0;c<s;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:Or,type:e.type,key:o,ref:i,props:r,_owner:l}};B.createContext=function(e){return e={$$typeof:vf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gf,_context:e},e.Consumer=e};B.createElement=Va;B.createFactory=function(e){var t=Va.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:yf,render:e}};B.isValidElement=mu;B.lazy=function(e){return{$$typeof:kf,_payload:{_status:-1,_result:e},_init:Pf}};B.memo=function(e,t){return{$$typeof:xf,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=po.transition;po.transition={};try{e()}finally{po.transition=t}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(e,t){return Fe.current.useCallback(e,t)};B.useContext=function(e){return Fe.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};B.useEffect=function(e,t){return Fe.current.useEffect(e,t)};B.useId=function(){return Fe.current.useId()};B.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Fe.current.useMemo(e,t)};B.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};B.useRef=function(e){return Fe.current.useRef(e)};B.useState=function(e){return Fe.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return Fe.current.useTransition()};B.version="18.2.0";I.exports=B;var Fr=I.exports,hl={},Wa={exports:{}},Xe={},Ha={exports:{}},Qa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,O){var F=E.length;E.push(O);e:for(;0<F;){var b=F-1>>>1,_=E[b];if(0<o(_,O))E[b]=O,E[F]=_,F=b;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var O=E[0],F=E.pop();if(F!==O){E[0]=F;e:for(var b=0,_=E.length,N=_>>>1;b<N;){var z=2*(b+1)-1,D=E[z],g=z+1,V=E[g];if(0>o(D,F))g<_&&0>o(V,D)?(E[b]=V,E[g]=F,b=g):(E[b]=D,E[z]=F,b=z);else if(g<_&&0>o(V,F))E[b]=V,E[g]=F,b=g;else break e}}return O}function o(E,O){var F=E.sortIndex-O.sortIndex;return F!==0?F:E.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var s=[],c=[],p=1,h=null,m=3,x=!1,y=!1,w=!1,$=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=E)r(c),O.sortIndex=O.expirationTime,t(s,O);else break;O=n(c)}}function v(E){if(w=!1,f(E),!y)if(n(s)!==null)y=!0,yt(k);else{var O=n(c);O!==null&&Le(v,O.startTime-E)}}function k(E,O){y=!1,w&&(w=!1,d(T),T=-1),x=!0;var F=m;try{for(f(O),h=n(s);h!==null&&(!(h.expirationTime>O)||E&&!me());){var b=h.callback;if(typeof b=="function"){h.callback=null,m=h.priorityLevel;var _=b(h.expirationTime<=O);O=e.unstable_now(),typeof _=="function"?h.callback=_:h===n(s)&&r(s),f(O)}else r(s);h=n(s)}if(h!==null)var N=!0;else{var z=n(c);z!==null&&Le(v,z.startTime-O),N=!1}return N}finally{h=null,m=F,x=!1}}var A=!1,L=null,T=-1,H=5,M=-1;function me(){return!(e.unstable_now()-M<H)}function fe(){if(L!==null){var E=e.unstable_now();M=E;var O=!0;try{O=L(!0,E)}finally{O?we():(A=!1,L=null)}}else A=!1}var we;if(typeof a=="function")we=function(){a(fe)};else if(typeof MessageChannel!="undefined"){var He=new MessageChannel,Ne=He.port2;He.port1.onmessage=fe,we=function(){Ne.postMessage(null)}}else we=function(){$(fe,0)};function yt(E){L=E,A||(A=!0,we())}function Le(E,O){T=$(function(){E(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,yt(k))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(E){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var F=m;m=O;try{return E()}finally{m=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,O){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var F=m;m=E;try{return O()}finally{m=F}},e.unstable_scheduleCallback=function(E,O,F){var b=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?b+F:b):F=b,E){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=F+_,E={id:p++,callback:O,priorityLevel:E,startTime:F,expirationTime:_,sortIndex:-1},F>b?(E.sortIndex=F,t(c,E),n(s)===null&&E===n(c)&&(w?(d(T),T=-1):w=!0,Le(v,F-b))):(E.sortIndex=_,t(s,E),y||x||(y=!0,yt(k))),E},e.unstable_shouldYield=me,e.unstable_wrapCallback=function(E){var O=m;return function(){var F=m;m=O;try{return E.apply(this,arguments)}finally{m=F}}}})(Qa);Ha.exports=Qa;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ya=I.exports,Ke=Ha.exports;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ga=new Set,vr={};function fn(e,t){On(e,t),On(e+"Capture",t)}function On(e,t){for(vr[e]=t,e=0;e<t.length;e++)Ga.add(t[e])}var Pt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),ml=Object.prototype.hasOwnProperty,Nf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ws={},xs={};function $f(e){return ml.call(xs,e)?!0:ml.call(ws,e)?!1:Nf.test(e)?xs[e]=!0:(ws[e]=!0,!1)}function Af(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tf(e,t,n,r){if(t===null||typeof t=="undefined"||Af(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var gu=/[\-:]([a-z])/g;function vu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gu,vu);_e[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gu,vu);_e[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gu,vu);_e[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function yu(e,t,n,r){var o=_e.hasOwnProperty(t)?_e[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Tf(t,n,o,r)&&(n=null),r||o===null?$f(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var At=Ya.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yr=Symbol.for("react.element"),gn=Symbol.for("react.portal"),vn=Symbol.for("react.fragment"),wu=Symbol.for("react.strict_mode"),gl=Symbol.for("react.profiler"),Ka=Symbol.for("react.provider"),Xa=Symbol.for("react.context"),xu=Symbol.for("react.forward_ref"),vl=Symbol.for("react.suspense"),yl=Symbol.for("react.suspense_list"),ku=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),Za=Symbol.for("react.offscreen"),ks=Symbol.iterator;function Xn(e){return e===null||typeof e!="object"?null:(e=ks&&e[ks]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,Ui;function rr(e){if(Ui===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ui=t&&t[1]||""}return`
`+Ui+e}var Bi=!1;function Vi(e,t){if(!e||Bi)return"";Bi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,u=i.length-1;1<=l&&0<=u&&o[l]!==i[u];)u--;for(;1<=l&&0<=u;l--,u--)if(o[l]!==i[u]){if(l!==1||u!==1)do if(l--,u--,0>u||o[l]!==i[u]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=u);break}}}finally{Bi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?rr(e):""}function zf(e){switch(e.tag){case 5:return rr(e.type);case 16:return rr("Lazy");case 13:return rr("Suspense");case 19:return rr("SuspenseList");case 0:case 2:case 15:return e=Vi(e.type,!1),e;case 11:return e=Vi(e.type.render,!1),e;case 1:return e=Vi(e.type,!0),e;default:return""}}function wl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vn:return"Fragment";case gn:return"Portal";case gl:return"Profiler";case wu:return"StrictMode";case vl:return"Suspense";case yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xa:return(e.displayName||"Context")+".Consumer";case Ka:return(e._context.displayName||"Context")+".Provider";case xu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ku:return t=e.displayName||null,t!==null?t:wl(e.type)||"Memo";case Rt:t=e._payload,e=e._init;try{return wl(e(t))}catch{}}return null}function Rf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wl(t);case 8:return t===wu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ja(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lf(e){var t=Ja(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gr(e){e._valueTracker||(e._valueTracker=Lf(e))}function qa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ja(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Po(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function xl(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Ss(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ba(e,t){t=t.checked,t!=null&&yu(e,"checked",t,!1)}function kl(e,t){ba(e,t);var n=Gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Sl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Sl(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Cs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Sl(e,t,n){(t!=="number"||Po(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var or=Array.isArray;function An(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Cl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Es(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(or(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function ec(e,t){var n=Gt(t.value),r=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ps(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function tc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function El(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?tc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kr,nc=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Kr=Kr||document.createElement("div"),Kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},If=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(e){If.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ur[t]=ur[e]})});function rc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ur.hasOwnProperty(e)&&ur[e]?(""+t).trim():t+"px"}function oc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=rc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Of=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pl(e,t){if(t){if(Of[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function _l(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nl=null;function Su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $l=null,Tn=null,zn=null;function _s(e){if(e=jr(e)){if(typeof $l!="function")throw Error(S(280));var t=e.stateNode;t&&(t=ti(t),$l(e.stateNode,e.type,t))}}function ic(e){Tn?zn?zn.push(e):zn=[e]:Tn=e}function lc(){if(Tn){var e=Tn,t=zn;if(zn=Tn=null,_s(e),t)for(e=0;e<t.length;e++)_s(t[e])}}function uc(e,t){return e(t)}function sc(){}var Wi=!1;function ac(e,t,n){if(Wi)return e(t,n);Wi=!0;try{return uc(e,t,n)}finally{Wi=!1,(Tn!==null||zn!==null)&&(sc(),lc())}}function wr(e,t){var n=e.stateNode;if(n===null)return null;var r=ti(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Al=!1;if(Pt)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){Al=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{Al=!1}function Ff(e,t,n,r,o,i,l,u,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var sr=!1,_o=null,No=!1,Tl=null,Df={onError:function(e){sr=!0,_o=e}};function Mf(e,t,n,r,o,i,l,u,s){sr=!1,_o=null,Ff.apply(Df,arguments)}function jf(e,t,n,r,o,i,l,u,s){if(Mf.apply(this,arguments),sr){if(sr){var c=_o;sr=!1,_o=null}else throw Error(S(198));No||(No=!0,Tl=c)}}function pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ns(e){if(pn(e)!==e)throw Error(S(188))}function Uf(e){var t=e.alternate;if(!t){if(t=pn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ns(o),e;if(i===r)return Ns(o),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,u=o.child;u;){if(u===n){l=!0,n=o,r=i;break}if(u===r){l=!0,r=o,n=i;break}u=u.sibling}if(!l){for(u=i.child;u;){if(u===n){l=!0,n=i,r=o;break}if(u===r){l=!0,r=i,n=o;break}u=u.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function dc(e){return e=Uf(e),e!==null?fc(e):null}function fc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=fc(e);if(t!==null)return t;e=e.sibling}return null}var pc=Ke.unstable_scheduleCallback,$s=Ke.unstable_cancelCallback,Bf=Ke.unstable_shouldYield,Vf=Ke.unstable_requestPaint,ce=Ke.unstable_now,Wf=Ke.unstable_getCurrentPriorityLevel,Cu=Ke.unstable_ImmediatePriority,hc=Ke.unstable_UserBlockingPriority,$o=Ke.unstable_NormalPriority,Hf=Ke.unstable_LowPriority,mc=Ke.unstable_IdlePriority,Jo=null,gt=null;function Qf(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Jo,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:Kf,Yf=Math.log,Gf=Math.LN2;function Kf(e){return e>>>=0,e===0?32:31-(Yf(e)/Gf|0)|0}var Xr=64,Zr=4194304;function ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ao(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~o;u!==0?r=ir(u):(i&=l,i!==0&&(r=ir(i)))}else l=n&~o,l!==0?r=ir(l):i!==0&&(r=ir(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),o=1<<n,r|=e[n],t&=~o;return r}function Xf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ct(i),u=1<<l,s=o[l];s===-1?((u&n)===0||(u&r)!==0)&&(o[l]=Xf(u,t)):s<=t&&(e.expiredLanes|=u),i&=~u}}function zl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gc(){var e=Xr;return Xr<<=1,(Xr&4194240)===0&&(Xr=64),e}function Hi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function Jf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ct(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Eu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Z=0;function vc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var yc,Pu,wc,xc,kc,Rl=!1,Jr=[],Mt=null,jt=null,Ut=null,xr=new Map,kr=new Map,It=[],qf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function As(e,t){switch(e){case"focusin":case"focusout":Mt=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kr.delete(t.pointerId)}}function Jn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=jr(t),t!==null&&Pu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function bf(e,t,n,r,o){switch(t){case"focusin":return Mt=Jn(Mt,e,t,n,r,o),!0;case"dragenter":return jt=Jn(jt,e,t,n,r,o),!0;case"mouseover":return Ut=Jn(Ut,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return xr.set(i,Jn(xr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,kr.set(i,Jn(kr.get(i)||null,e,t,n,r,o)),!0}return!1}function Sc(e){var t=tn(e.target);if(t!==null){var n=pn(t);if(n!==null){if(t=n.tag,t===13){if(t=cc(n),t!==null){e.blockedOn=t,kc(e.priority,function(){wc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ho(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ll(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Nl=r,n.target.dispatchEvent(r),Nl=null}else return t=jr(n),t!==null&&Pu(t),e.blockedOn=n,!1;t.shift()}return!0}function Ts(e,t,n){ho(e)&&n.delete(t)}function ep(){Rl=!1,Mt!==null&&ho(Mt)&&(Mt=null),jt!==null&&ho(jt)&&(jt=null),Ut!==null&&ho(Ut)&&(Ut=null),xr.forEach(Ts),kr.forEach(Ts)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Rl||(Rl=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,ep)))}function Sr(e){function t(o){return qn(o,e)}if(0<Jr.length){qn(Jr[0],e);for(var n=1;n<Jr.length;n++){var r=Jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Mt!==null&&qn(Mt,e),jt!==null&&qn(jt,e),Ut!==null&&qn(Ut,e),xr.forEach(t),kr.forEach(t),n=0;n<It.length;n++)r=It[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<It.length&&(n=It[0],n.blockedOn===null);)Sc(n),n.blockedOn===null&&It.shift()}var Rn=At.ReactCurrentBatchConfig,To=!0;function tp(e,t,n,r){var o=Z,i=Rn.transition;Rn.transition=null;try{Z=1,_u(e,t,n,r)}finally{Z=o,Rn.transition=i}}function np(e,t,n,r){var o=Z,i=Rn.transition;Rn.transition=null;try{Z=4,_u(e,t,n,r)}finally{Z=o,Rn.transition=i}}function _u(e,t,n,r){if(To){var o=Ll(e,t,n,r);if(o===null)el(e,t,r,zo,n),As(e,r);else if(bf(o,e,t,n,r))r.stopPropagation();else if(As(e,r),t&4&&-1<qf.indexOf(e)){for(;o!==null;){var i=jr(o);if(i!==null&&yc(i),i=Ll(e,t,n,r),i===null&&el(e,t,r,zo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else el(e,t,r,null,n)}}var zo=null;function Ll(e,t,n,r){if(zo=null,e=Su(r),e=tn(e),e!==null)if(t=pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zo=e,null}function Cc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wf()){case Cu:return 1;case hc:return 4;case $o:case Hf:return 16;case mc:return 536870912;default:return 16}default:return 16}}var Ft=null,Nu=null,mo=null;function Ec(){if(mo)return mo;var e,t=Nu,n=t.length,r,o="value"in Ft?Ft.value:Ft.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return mo=o.slice(e,1<r?1-r:void 0)}function go(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qr(){return!0}function zs(){return!1}function Ze(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?qr:zs,this.isPropagationStopped=zs,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$u=Ze(Qn),Mr=le({},Qn,{view:0,detail:0}),rp=Ze(Mr),Qi,Yi,bn,qo=le({},Mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bn&&(bn&&e.type==="mousemove"?(Qi=e.screenX-bn.screenX,Yi=e.screenY-bn.screenY):Yi=Qi=0,bn=e),Qi)},movementY:function(e){return"movementY"in e?e.movementY:Yi}}),Rs=Ze(qo),op=le({},qo,{dataTransfer:0}),ip=Ze(op),lp=le({},Mr,{relatedTarget:0}),Gi=Ze(lp),up=le({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),sp=Ze(up),ap=le({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cp=Ze(ap),dp=le({},Qn,{data:0}),Ls=Ze(dp),fp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hp[e])?!!t[e]:!1}function Au(){return mp}var gp=le({},Mr,{key:function(e){if(e.key){var t=fp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=go(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(e){return e.type==="keypress"?go(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?go(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vp=Ze(gp),yp=le({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Is=Ze(yp),wp=le({},Mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),xp=Ze(wp),kp=le({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sp=Ze(kp),Cp=le({},qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ep=Ze(Cp),Pp=[9,13,27,32],Tu=Pt&&"CompositionEvent"in window,ar=null;Pt&&"documentMode"in document&&(ar=document.documentMode);var _p=Pt&&"TextEvent"in window&&!ar,Pc=Pt&&(!Tu||ar&&8<ar&&11>=ar),Os=String.fromCharCode(32),Fs=!1;function _c(e,t){switch(e){case"keyup":return Pp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yn=!1;function Np(e,t){switch(e){case"compositionend":return Nc(t);case"keypress":return t.which!==32?null:(Fs=!0,Os);case"textInput":return e=t.data,e===Os&&Fs?null:e;default:return null}}function $p(e,t){if(yn)return e==="compositionend"||!Tu&&_c(e,t)?(e=Ec(),mo=Nu=Ft=null,yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pc&&t.locale!=="ko"?null:t.data;default:return null}}var Ap={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ds(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ap[e.type]:t==="textarea"}function $c(e,t,n,r){ic(r),t=Ro(t,"onChange"),0<t.length&&(n=new $u("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var cr=null,Cr=null;function Tp(e){jc(e,0)}function bo(e){var t=kn(e);if(qa(t))return e}function zp(e,t){if(e==="change")return t}var Ac=!1;if(Pt){var Ki;if(Pt){var Xi="oninput"in document;if(!Xi){var Ms=document.createElement("div");Ms.setAttribute("oninput","return;"),Xi=typeof Ms.oninput=="function"}Ki=Xi}else Ki=!1;Ac=Ki&&(!document.documentMode||9<document.documentMode)}function js(){cr&&(cr.detachEvent("onpropertychange",Tc),Cr=cr=null)}function Tc(e){if(e.propertyName==="value"&&bo(Cr)){var t=[];$c(t,Cr,e,Su(e)),ac(Tp,t)}}function Rp(e,t,n){e==="focusin"?(js(),cr=t,Cr=n,cr.attachEvent("onpropertychange",Tc)):e==="focusout"&&js()}function Lp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bo(Cr)}function Ip(e,t){if(e==="click")return bo(t)}function Op(e,t){if(e==="input"||e==="change")return bo(t)}function Fp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Fp;function Er(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ml.call(t,o)||!ft(e[o],t[o]))return!1}return!0}function Us(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bs(e,t){var n=Us(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Us(n)}}function zc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rc(){for(var e=window,t=Po();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Po(e.document)}return t}function zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Dp(e){var t=Rc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zc(n.ownerDocument.documentElement,n)){if(r!==null&&zu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Bs(n,i);var l=Bs(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mp=Pt&&"documentMode"in document&&11>=document.documentMode,wn=null,Il=null,dr=null,Ol=!1;function Vs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ol||wn==null||wn!==Po(r)||(r=wn,"selectionStart"in r&&zu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),dr&&Er(dr,r)||(dr=r,r=Ro(Il,"onSelect"),0<r.length&&(t=new $u("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=wn)))}function br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xn={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionend:br("Transition","TransitionEnd")},Zi={},Lc={};Pt&&(Lc=document.createElement("div").style,"AnimationEvent"in window||(delete xn.animationend.animation,delete xn.animationiteration.animation,delete xn.animationstart.animation),"TransitionEvent"in window||delete xn.transitionend.transition);function ei(e){if(Zi[e])return Zi[e];if(!xn[e])return e;var t=xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lc)return Zi[e]=t[n];return e}var Ic=ei("animationend"),Oc=ei("animationiteration"),Fc=ei("animationstart"),Dc=ei("transitionend"),Mc=new Map,Ws="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(e,t){Mc.set(e,t),fn(t,[e])}for(var Ji=0;Ji<Ws.length;Ji++){var qi=Ws[Ji],jp=qi.toLowerCase(),Up=qi[0].toUpperCase()+qi.slice(1);Xt(jp,"on"+Up)}Xt(Ic,"onAnimationEnd");Xt(Oc,"onAnimationIteration");Xt(Fc,"onAnimationStart");Xt("dblclick","onDoubleClick");Xt("focusin","onFocus");Xt("focusout","onBlur");Xt(Dc,"onTransitionEnd");On("onMouseEnter",["mouseout","mouseover"]);On("onMouseLeave",["mouseout","mouseover"]);On("onPointerEnter",["pointerout","pointerover"]);On("onPointerLeave",["pointerout","pointerover"]);fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bp=new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));function Hs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,jf(r,t,void 0,e),e.currentTarget=null}function jc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],s=u.instance,c=u.currentTarget;if(u=u.listener,s!==i&&o.isPropagationStopped())break e;Hs(o,u,c),i=s}else for(l=0;l<r.length;l++){if(u=r[l],s=u.instance,c=u.currentTarget,u=u.listener,s!==i&&o.isPropagationStopped())break e;Hs(o,u,c),i=s}}}if(No)throw e=Tl,No=!1,Tl=null,e}function te(e,t){var n=t[Ul];n===void 0&&(n=t[Ul]=new Set);var r=e+"__bubble";n.has(r)||(Uc(t,e,2,!1),n.add(r))}function bi(e,t,n){var r=0;t&&(r|=4),Uc(n,e,r,t)}var eo="_reactListening"+Math.random().toString(36).slice(2);function Pr(e){if(!e[eo]){e[eo]=!0,Ga.forEach(function(n){n!=="selectionchange"&&(Bp.has(n)||bi(n,!1,e),bi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[eo]||(t[eo]=!0,bi("selectionchange",!1,t))}}function Uc(e,t,n,r){switch(Cc(t)){case 1:var o=tp;break;case 4:o=np;break;default:o=_u}n=o.bind(null,t,n,e),o=void 0,!Al||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function el(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;u!==null;){if(l=tn(u),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}u=u.parentNode}}r=r.return}ac(function(){var c=i,p=Su(n),h=[];e:{var m=Mc.get(e);if(m!==void 0){var x=$u,y=e;switch(e){case"keypress":if(go(n)===0)break e;case"keydown":case"keyup":x=vp;break;case"focusin":y="focus",x=Gi;break;case"focusout":y="blur",x=Gi;break;case"beforeblur":case"afterblur":x=Gi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Rs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=ip;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=xp;break;case Ic:case Oc:case Fc:x=sp;break;case Dc:x=Sp;break;case"scroll":x=rp;break;case"wheel":x=Ep;break;case"copy":case"cut":case"paste":x=cp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Is}var w=(t&4)!==0,$=!w&&e==="scroll",d=w?m!==null?m+"Capture":null:m;w=[];for(var a=c,f;a!==null;){f=a;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=wr(a,d),v!=null&&w.push(_r(a,v,f)))),$)break;a=a.return}0<w.length&&(m=new x(m,y,null,n,p),h.push({event:m,listeners:w}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==Nl&&(y=n.relatedTarget||n.fromElement)&&(tn(y)||y[_t]))break e;if((x||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=c,y=y?tn(y):null,y!==null&&($=pn(y),y!==$||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=c),x!==y)){if(w=Rs,v="onMouseLeave",d="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(w=Is,v="onPointerLeave",d="onPointerEnter",a="pointer"),$=x==null?m:kn(x),f=y==null?m:kn(y),m=new w(v,a+"leave",x,n,p),m.target=$,m.relatedTarget=f,v=null,tn(p)===c&&(w=new w(d,a+"enter",y,n,p),w.target=f,w.relatedTarget=$,v=w),$=v,x&&y)t:{for(w=x,d=y,a=0,f=w;f;f=mn(f))a++;for(f=0,v=d;v;v=mn(v))f++;for(;0<a-f;)w=mn(w),a--;for(;0<f-a;)d=mn(d),f--;for(;a--;){if(w===d||d!==null&&w===d.alternate)break t;w=mn(w),d=mn(d)}w=null}else w=null;x!==null&&Qs(h,m,x,w,!1),y!==null&&$!==null&&Qs(h,$,y,w,!0)}}e:{if(m=c?kn(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var k=zp;else if(Ds(m))if(Ac)k=Op;else{k=Lp;var A=Rp}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=Ip);if(k&&(k=k(e,c))){$c(h,k,n,p);break e}A&&A(e,m,c),e==="focusout"&&(A=m._wrapperState)&&A.controlled&&m.type==="number"&&Sl(m,"number",m.value)}switch(A=c?kn(c):window,e){case"focusin":(Ds(A)||A.contentEditable==="true")&&(wn=A,Il=c,dr=null);break;case"focusout":dr=Il=wn=null;break;case"mousedown":Ol=!0;break;case"contextmenu":case"mouseup":case"dragend":Ol=!1,Vs(h,n,p);break;case"selectionchange":if(Mp)break;case"keydown":case"keyup":Vs(h,n,p)}var L;if(Tu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else yn?_c(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Pc&&n.locale!=="ko"&&(yn||T!=="onCompositionStart"?T==="onCompositionEnd"&&yn&&(L=Ec()):(Ft=p,Nu="value"in Ft?Ft.value:Ft.textContent,yn=!0)),A=Ro(c,T),0<A.length&&(T=new Ls(T,e,null,n,p),h.push({event:T,listeners:A}),L?T.data=L:(L=Nc(n),L!==null&&(T.data=L)))),(L=_p?Np(e,n):$p(e,n))&&(c=Ro(c,"onBeforeInput"),0<c.length&&(p=new Ls("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:c}),p.data=L))}jc(h,t)})}function _r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ro(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=wr(e,n),i!=null&&r.unshift(_r(e,i,o)),i=wr(e,t),i!=null&&r.push(_r(e,i,o))),e=e.return}return r}function mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qs(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var u=n,s=u.alternate,c=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&c!==null&&(u=c,o?(s=wr(n,i),s!=null&&l.unshift(_r(n,s,u))):o||(s=wr(n,i),s!=null&&l.push(_r(n,s,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Vp=/\r\n?/g,Wp=/\u0000|\uFFFD/g;function Ys(e){return(typeof e=="string"?e:""+e).replace(Vp,`
`).replace(Wp,"")}function to(e,t,n){if(t=Ys(t),Ys(e)!==t&&n)throw Error(S(425))}function Lo(){}var Fl=null,Dl=null;function Ml(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jl=typeof setTimeout=="function"?setTimeout:void 0,Hp=typeof clearTimeout=="function"?clearTimeout:void 0,Gs=typeof Promise=="function"?Promise:void 0,Qp=typeof queueMicrotask=="function"?queueMicrotask:typeof Gs!="undefined"?function(e){return Gs.resolve(null).then(e).catch(Yp)}:jl;function Yp(e){setTimeout(function(){throw e})}function tl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Sr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Sr(t)}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ks(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),mt="__reactFiber$"+Yn,Nr="__reactProps$"+Yn,_t="__reactContainer$"+Yn,Ul="__reactEvents$"+Yn,Gp="__reactListeners$"+Yn,Kp="__reactHandles$"+Yn;function tn(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ks(e);e!==null;){if(n=e[mt])return n;e=Ks(e)}return t}e=n,n=e.parentNode}return null}function jr(e){return e=e[mt]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ti(e){return e[Nr]||null}var Bl=[],Sn=-1;function Zt(e){return{current:e}}function ne(e){0>Sn||(e.current=Bl[Sn],Bl[Sn]=null,Sn--)}function ee(e,t){Sn++,Bl[Sn]=e.current,e.current=t}var Kt={},Re=Zt(Kt),Be=Zt(!1),un=Kt;function Fn(e,t){var n=e.type.contextTypes;if(!n)return Kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ve(e){return e=e.childContextTypes,e!=null}function Io(){ne(Be),ne(Re)}function Xs(e,t,n){if(Re.current!==Kt)throw Error(S(168));ee(Re,t),ee(Be,n)}function Bc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,Rf(e)||"Unknown",o));return le({},n,r)}function Oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kt,un=Re.current,ee(Re,e),ee(Be,Be.current),!0}function Zs(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Bc(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,ne(Be),ne(Re),ee(Re,e)):ne(Be),ee(Be,n)}var xt=null,ni=!1,nl=!1;function Vc(e){xt===null?xt=[e]:xt.push(e)}function Xp(e){ni=!0,Vc(e)}function Jt(){if(!nl&&xt!==null){nl=!0;var e=0,t=Z;try{var n=xt;for(Z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xt=null,ni=!1}catch(o){throw xt!==null&&(xt=xt.slice(e+1)),pc(Cu,Jt),o}finally{Z=t,nl=!1}}return null}var Cn=[],En=0,Fo=null,Do=0,qe=[],be=0,sn=null,kt=1,St="";function bt(e,t){Cn[En++]=Do,Cn[En++]=Fo,Fo=e,Do=t}function Wc(e,t,n){qe[be++]=kt,qe[be++]=St,qe[be++]=sn,sn=e;var r=kt;e=St;var o=32-ct(r)-1;r&=~(1<<o),n+=1;var i=32-ct(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,kt=1<<32-ct(t)+o|n<<o|r,St=i+e}else kt=1<<i|n<<o|r,St=e}function Ru(e){e.return!==null&&(bt(e,1),Wc(e,1,0))}function Lu(e){for(;e===Fo;)Fo=Cn[--En],Cn[En]=null,Do=Cn[--En],Cn[En]=null;for(;e===sn;)sn=qe[--be],qe[be]=null,St=qe[--be],qe[be]=null,kt=qe[--be],qe[be]=null}var Ge=null,Ye=null,re=!1,at=null;function Hc(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Js(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ge=e,Ye=Bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ge=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sn!==null?{id:kt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ge=e,Ye=null,!0):!1;default:return!1}}function Vl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wl(e){if(re){var t=Ye;if(t){var n=t;if(!Js(e,t)){if(Vl(e))throw Error(S(418));t=Bt(n.nextSibling);var r=Ge;t&&Js(e,t)?Hc(r,n):(e.flags=e.flags&-4097|2,re=!1,Ge=e)}}else{if(Vl(e))throw Error(S(418));e.flags=e.flags&-4097|2,re=!1,Ge=e}}}function qs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function no(e){if(e!==Ge)return!1;if(!re)return qs(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ml(e.type,e.memoizedProps)),t&&(t=Ye)){if(Vl(e))throw Qc(),Error(S(418));for(;t;)Hc(e,t),t=Bt(t.nextSibling)}if(qs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Ge?Bt(e.stateNode.nextSibling):null;return!0}function Qc(){for(var e=Ye;e;)e=Bt(e.nextSibling)}function Dn(){Ye=Ge=null,re=!1}function Iu(e){at===null?at=[e]:at.push(e)}var Zp=At.ReactCurrentBatchConfig;function ut(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Mo=Zt(null),jo=null,Pn=null,Ou=null;function Fu(){Ou=Pn=jo=null}function Du(e){var t=Mo.current;ne(Mo),e._currentValue=t}function Hl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ln(e,t){jo=e,Ou=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ue=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(Ou!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(jo===null)throw Error(S(308));Pn=e,jo.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var nn=null;function Mu(e){nn===null?nn=[e]:nn.push(e)}function Yc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Mu(t)):(n.next=o.next,o.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Lt=!1;function ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(W&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Nt(e,n)}return o=r.interleaved,o===null?(t.next=t,Mu(r)):(t.next=o.next,o.next=t),r.interleaved=t,Nt(e,n)}function vo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Eu(e,n)}}function bs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Uo(e,t,n,r){var o=e.updateQueue;Lt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var s=u,c=s.next;s.next=null,l===null?i=c:l.next=c,l=s;var p=e.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==l&&(u===null?p.firstBaseUpdate=c:u.next=c,p.lastBaseUpdate=s))}if(i!==null){var h=o.baseState;l=0,p=c=s=null,u=i;do{var m=u.lane,x=u.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:x,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var y=e,w=u;switch(m=t,x=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call(x,h,m);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,m=typeof y=="function"?y.call(x,h,m):y,m==null)break e;h=le({},h,m);break e;case 2:Lt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[u]:m.push(u))}else x={eventTime:x,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(c=p=x,s=h):p=p.next=x,l|=m;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;m=u,u=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(p===null&&(s=h),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);cn|=l,e.lanes=l,e.memoizedState=h}}function ea(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var Kc=new Ya.Component().refs;function Ql(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ri={isMounted:function(e){return(e=e._reactInternals)?pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Oe(),o=Ht(e),i=Et(r,o);i.payload=t,n!=null&&(i.callback=n),t=Vt(e,i,o),t!==null&&(dt(t,e,o,r),vo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Oe(),o=Ht(e),i=Et(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Vt(e,i,o),t!==null&&(dt(t,e,o,r),vo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Oe(),r=Ht(e),o=Et(n,r);o.tag=2,t!=null&&(o.callback=t),t=Vt(e,o,r),t!==null&&(dt(t,e,r,n),vo(t,e,r))}};function ta(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Er(n,r)||!Er(o,i):!0}function Xc(e,t,n){var r=!1,o=Kt,i=t.contextType;return typeof i=="object"&&i!==null?i=nt(i):(o=Ve(t)?un:Re.current,r=t.contextTypes,i=(r=r!=null)?Fn(e,o):Kt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ri,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function na(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ri.enqueueReplaceState(t,t.state,null)}function Yl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Kc,ju(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=nt(i):(i=Ve(t)?un:Re.current,o.context=Fn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ql(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ri.enqueueReplaceState(o,o.state,null),Uo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function er(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var u=o.refs;u===Kc&&(u=o.refs={}),l===null?delete u[i]:u[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function ro(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ra(e){var t=e._init;return t(e._payload)}function Zc(e){function t(d,a){if(e){var f=d.deletions;f===null?(d.deletions=[a],d.flags|=16):f.push(a)}}function n(d,a){if(!e)return null;for(;a!==null;)t(d,a),a=a.sibling;return null}function r(d,a){for(d=new Map;a!==null;)a.key!==null?d.set(a.key,a):d.set(a.index,a),a=a.sibling;return d}function o(d,a){return d=Qt(d,a),d.index=0,d.sibling=null,d}function i(d,a,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<a?(d.flags|=2,a):f):(d.flags|=2,a)):(d.flags|=1048576,a)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,a,f,v){return a===null||a.tag!==6?(a=al(f,d.mode,v),a.return=d,a):(a=o(a,f),a.return=d,a)}function s(d,a,f,v){var k=f.type;return k===vn?p(d,a,f.props.children,v,f.key):a!==null&&(a.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Rt&&ra(k)===a.type)?(v=o(a,f.props),v.ref=er(d,a,f),v.return=d,v):(v=Co(f.type,f.key,f.props,null,d.mode,v),v.ref=er(d,a,f),v.return=d,v)}function c(d,a,f,v){return a===null||a.tag!==4||a.stateNode.containerInfo!==f.containerInfo||a.stateNode.implementation!==f.implementation?(a=cl(f,d.mode,v),a.return=d,a):(a=o(a,f.children||[]),a.return=d,a)}function p(d,a,f,v,k){return a===null||a.tag!==7?(a=ln(f,d.mode,v,k),a.return=d,a):(a=o(a,f),a.return=d,a)}function h(d,a,f){if(typeof a=="string"&&a!==""||typeof a=="number")return a=al(""+a,d.mode,f),a.return=d,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case Yr:return f=Co(a.type,a.key,a.props,null,d.mode,f),f.ref=er(d,null,a),f.return=d,f;case gn:return a=cl(a,d.mode,f),a.return=d,a;case Rt:var v=a._init;return h(d,v(a._payload),f)}if(or(a)||Xn(a))return a=ln(a,d.mode,f,null),a.return=d,a;ro(d,a)}return null}function m(d,a,f,v){var k=a!==null?a.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return k!==null?null:u(d,a,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Yr:return f.key===k?s(d,a,f,v):null;case gn:return f.key===k?c(d,a,f,v):null;case Rt:return k=f._init,m(d,a,k(f._payload),v)}if(or(f)||Xn(f))return k!==null?null:p(d,a,f,v,null);ro(d,f)}return null}function x(d,a,f,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,u(a,d,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Yr:return d=d.get(v.key===null?f:v.key)||null,s(a,d,v,k);case gn:return d=d.get(v.key===null?f:v.key)||null,c(a,d,v,k);case Rt:var A=v._init;return x(d,a,f,A(v._payload),k)}if(or(v)||Xn(v))return d=d.get(f)||null,p(a,d,v,k,null);ro(a,v)}return null}function y(d,a,f,v){for(var k=null,A=null,L=a,T=a=0,H=null;L!==null&&T<f.length;T++){L.index>T?(H=L,L=null):H=L.sibling;var M=m(d,L,f[T],v);if(M===null){L===null&&(L=H);break}e&&L&&M.alternate===null&&t(d,L),a=i(M,a,T),A===null?k=M:A.sibling=M,A=M,L=H}if(T===f.length)return n(d,L),re&&bt(d,T),k;if(L===null){for(;T<f.length;T++)L=h(d,f[T],v),L!==null&&(a=i(L,a,T),A===null?k=L:A.sibling=L,A=L);return re&&bt(d,T),k}for(L=r(d,L);T<f.length;T++)H=x(L,d,T,f[T],v),H!==null&&(e&&H.alternate!==null&&L.delete(H.key===null?T:H.key),a=i(H,a,T),A===null?k=H:A.sibling=H,A=H);return e&&L.forEach(function(me){return t(d,me)}),re&&bt(d,T),k}function w(d,a,f,v){var k=Xn(f);if(typeof k!="function")throw Error(S(150));if(f=k.call(f),f==null)throw Error(S(151));for(var A=k=null,L=a,T=a=0,H=null,M=f.next();L!==null&&!M.done;T++,M=f.next()){L.index>T?(H=L,L=null):H=L.sibling;var me=m(d,L,M.value,v);if(me===null){L===null&&(L=H);break}e&&L&&me.alternate===null&&t(d,L),a=i(me,a,T),A===null?k=me:A.sibling=me,A=me,L=H}if(M.done)return n(d,L),re&&bt(d,T),k;if(L===null){for(;!M.done;T++,M=f.next())M=h(d,M.value,v),M!==null&&(a=i(M,a,T),A===null?k=M:A.sibling=M,A=M);return re&&bt(d,T),k}for(L=r(d,L);!M.done;T++,M=f.next())M=x(L,d,T,M.value,v),M!==null&&(e&&M.alternate!==null&&L.delete(M.key===null?T:M.key),a=i(M,a,T),A===null?k=M:A.sibling=M,A=M);return e&&L.forEach(function(fe){return t(d,fe)}),re&&bt(d,T),k}function $(d,a,f,v){if(typeof f=="object"&&f!==null&&f.type===vn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Yr:e:{for(var k=f.key,A=a;A!==null;){if(A.key===k){if(k=f.type,k===vn){if(A.tag===7){n(d,A.sibling),a=o(A,f.props.children),a.return=d,d=a;break e}}else if(A.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Rt&&ra(k)===A.type){n(d,A.sibling),a=o(A,f.props),a.ref=er(d,A,f),a.return=d,d=a;break e}n(d,A);break}else t(d,A);A=A.sibling}f.type===vn?(a=ln(f.props.children,d.mode,v,f.key),a.return=d,d=a):(v=Co(f.type,f.key,f.props,null,d.mode,v),v.ref=er(d,a,f),v.return=d,d=v)}return l(d);case gn:e:{for(A=f.key;a!==null;){if(a.key===A)if(a.tag===4&&a.stateNode.containerInfo===f.containerInfo&&a.stateNode.implementation===f.implementation){n(d,a.sibling),a=o(a,f.children||[]),a.return=d,d=a;break e}else{n(d,a);break}else t(d,a);a=a.sibling}a=cl(f,d.mode,v),a.return=d,d=a}return l(d);case Rt:return A=f._init,$(d,a,A(f._payload),v)}if(or(f))return y(d,a,f,v);if(Xn(f))return w(d,a,f,v);ro(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,a!==null&&a.tag===6?(n(d,a.sibling),a=o(a,f),a.return=d,d=a):(n(d,a),a=al(f,d.mode,v),a.return=d,d=a),l(d)):n(d,a)}return $}var Mn=Zc(!0),Jc=Zc(!1),Ur={},vt=Zt(Ur),$r=Zt(Ur),Ar=Zt(Ur);function rn(e){if(e===Ur)throw Error(S(174));return e}function Uu(e,t){switch(ee(Ar,t),ee($r,e),ee(vt,Ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:El(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=El(t,e)}ne(vt),ee(vt,t)}function jn(){ne(vt),ne($r),ne(Ar)}function qc(e){rn(Ar.current);var t=rn(vt.current),n=El(t,e.type);t!==n&&(ee($r,e),ee(vt,n))}function Bu(e){$r.current===e&&(ne(vt),ne($r))}var oe=Zt(0);function Bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rl=[];function Vu(){for(var e=0;e<rl.length;e++)rl[e]._workInProgressVersionPrimary=null;rl.length=0}var yo=At.ReactCurrentDispatcher,ol=At.ReactCurrentBatchConfig,an=0,ie=null,pe=null,ge=null,Vo=!1,fr=!1,Tr=0,Jp=0;function Ae(){throw Error(S(321))}function Wu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function Hu(e,t,n,r,o,i){if(an=i,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,yo.current=e===null||e.memoizedState===null?th:nh,e=n(r,o),fr){i=0;do{if(fr=!1,Tr=0,25<=i)throw Error(S(301));i+=1,ge=pe=null,t.updateQueue=null,yo.current=rh,e=n(r,o)}while(fr)}if(yo.current=Wo,t=pe!==null&&pe.next!==null,an=0,ge=pe=ie=null,Vo=!1,t)throw Error(S(300));return e}function Qu(){var e=Tr!==0;return Tr=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ie.memoizedState=ge=e:ge=ge.next=e,ge}function rt(){if(pe===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=ge===null?ie.memoizedState:ge.next;if(t!==null)ge=t,pe=e;else{if(e===null)throw Error(S(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},ge===null?ie.memoizedState=ge=e:ge=ge.next=e}return ge}function zr(e,t){return typeof t=="function"?t(e):t}function il(e){var t=rt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=pe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var u=l=null,s=null,c=i;do{var p=c.lane;if((an&p)===p)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(u=s=h,l=r):s=s.next=h,ie.lanes|=p,cn|=p}c=c.next}while(c!==null&&c!==i);s===null?l=r:s.next=u,ft(r,t.memoizedState)||(Ue=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ie.lanes|=i,cn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ll(e){var t=rt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);ft(i,t.memoizedState)||(Ue=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function bc(){}function ed(e,t){var n=ie,r=rt(),o=t(),i=!ft(r.memoizedState,o);if(i&&(r.memoizedState=o,Ue=!0),r=r.queue,Yu(rd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,Rr(9,nd.bind(null,n,r,o,t),void 0,null),ve===null)throw Error(S(349));(an&30)!==0||td(n,t,o)}return o}function td(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nd(e,t,n,r){t.value=n,t.getSnapshot=r,od(t)&&id(e)}function rd(e,t,n){return n(function(){od(t)&&id(e)})}function od(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function id(e){var t=Nt(e,1);t!==null&&dt(t,e,1,-1)}function oa(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zr,lastRenderedState:e},t.queue=e,e=e.dispatch=eh.bind(null,ie,e),[t.memoizedState,e]}function Rr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ld(){return rt().memoizedState}function wo(e,t,n,r){var o=ht();ie.flags|=e,o.memoizedState=Rr(1|t,n,void 0,r===void 0?null:r)}function oi(e,t,n,r){var o=rt();r=r===void 0?null:r;var i=void 0;if(pe!==null){var l=pe.memoizedState;if(i=l.destroy,r!==null&&Wu(r,l.deps)){o.memoizedState=Rr(t,n,i,r);return}}ie.flags|=e,o.memoizedState=Rr(1|t,n,i,r)}function ia(e,t){return wo(8390656,8,e,t)}function Yu(e,t){return oi(2048,8,e,t)}function ud(e,t){return oi(4,2,e,t)}function sd(e,t){return oi(4,4,e,t)}function ad(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cd(e,t,n){return n=n!=null?n.concat([e]):null,oi(4,4,ad.bind(null,t,e),n)}function Gu(){}function dd(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fd(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function pd(e,t,n){return(an&21)===0?(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=n):(ft(n,t)||(n=gc(),ie.lanes|=n,cn|=n,e.baseState=!0),t)}function qp(e,t){var n=Z;Z=n!==0&&4>n?n:4,e(!0);var r=ol.transition;ol.transition={};try{e(!1),t()}finally{Z=n,ol.transition=r}}function hd(){return rt().memoizedState}function bp(e,t,n){var r=Ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},md(e))gd(t,n);else if(n=Yc(e,t,n,r),n!==null){var o=Oe();dt(n,e,r,o),vd(n,t,r)}}function eh(e,t,n){var r=Ht(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(md(e))gd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,u=i(l,n);if(o.hasEagerState=!0,o.eagerState=u,ft(u,l)){var s=t.interleaved;s===null?(o.next=o,Mu(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Yc(e,t,o,r),n!==null&&(o=Oe(),dt(n,e,r,o),vd(n,t,r))}}function md(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function gd(e,t){fr=Vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vd(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Eu(e,n)}}var Wo={readContext:nt,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},th={readContext:nt,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:ia,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wo(4194308,4,ad.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wo(4194308,4,e,t)},useInsertionEffect:function(e,t){return wo(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bp.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:oa,useDebugValue:Gu,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=oa(!1),t=e[0];return e=qp.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,o=ht();if(re){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ve===null)throw Error(S(349));(an&30)!==0||td(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ia(rd.bind(null,r,i,e),[e]),r.flags|=2048,Rr(9,nd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ht(),t=ve.identifierPrefix;if(re){var n=St,r=kt;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nh={readContext:nt,useCallback:dd,useContext:nt,useEffect:Yu,useImperativeHandle:cd,useInsertionEffect:ud,useLayoutEffect:sd,useMemo:fd,useReducer:il,useRef:ld,useState:function(){return il(zr)},useDebugValue:Gu,useDeferredValue:function(e){var t=rt();return pd(t,pe.memoizedState,e)},useTransition:function(){var e=il(zr)[0],t=rt().memoizedState;return[e,t]},useMutableSource:bc,useSyncExternalStore:ed,useId:hd,unstable_isNewReconciler:!1},rh={readContext:nt,useCallback:dd,useContext:nt,useEffect:Yu,useImperativeHandle:cd,useInsertionEffect:ud,useLayoutEffect:sd,useMemo:fd,useReducer:ll,useRef:ld,useState:function(){return ll(zr)},useDebugValue:Gu,useDeferredValue:function(e){var t=rt();return pe===null?t.memoizedState=e:pd(t,pe.memoizedState,e)},useTransition:function(){var e=ll(zr)[0],t=rt().memoizedState;return[e,t]},useMutableSource:bc,useSyncExternalStore:ed,useId:hd,unstable_isNewReconciler:!1};function Un(e,t){try{var n="",r=t;do n+=zf(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Gl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var oh=typeof WeakMap=="function"?WeakMap:Map;function yd(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Qo||(Qo=!0,ru=r),Gl(e,t)},n}function wd(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Gl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Gl(e,t),typeof r!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function la(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new oh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=yh.bind(null,e,t,n),t.then(e,e))}function ua(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function sa(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Vt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var ih=At.ReactCurrentOwner,Ue=!1;function Ie(e,t,n,r){t.child=e===null?Jc(t,null,n,r):Mn(t,e.child,n,r)}function aa(e,t,n,r,o){n=n.render;var i=t.ref;return Ln(t,o),r=Hu(e,t,n,r,i,o),n=Qu(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$t(e,t,o)):(re&&n&&Ru(t),t.flags|=1,Ie(e,t,r,o),t.child)}function ca(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ts(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,xd(e,t,i,r,o)):(e=Co(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Er,n(l,r)&&e.ref===t.ref)return $t(e,t,o)}return t.flags|=1,e=Qt(i,r),e.ref=t.ref,e.return=t,t.child=e}function xd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Er(i,r)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ue=!0);else return t.lanes=e.lanes,$t(e,t,o)}return Kl(e,t,n,r,o)}function kd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Nn,Qe),Qe|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Nn,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ee(Nn,Qe),Qe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ee(Nn,Qe),Qe|=r;return Ie(e,t,o,n),t.child}function Sd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Kl(e,t,n,r,o){var i=Ve(n)?un:Re.current;return i=Fn(t,i),Ln(t,o),n=Hu(e,t,n,r,i,o),r=Qu(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$t(e,t,o)):(re&&r&&Ru(t),t.flags|=1,Ie(e,t,n,o),t.child)}function da(e,t,n,r,o){if(Ve(n)){var i=!0;Oo(t)}else i=!1;if(Ln(t,o),t.stateNode===null)xo(e,t),Xc(t,n,r),Yl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var s=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=nt(c):(c=Ve(n)?un:Re.current,c=Fn(t,c));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||s!==c)&&na(t,l,r,c),Lt=!1;var m=t.memoizedState;l.state=m,Uo(t,r,l,o),s=t.memoizedState,u!==r||m!==s||Be.current||Lt?(typeof p=="function"&&(Ql(t,n,p,r),s=t.memoizedState),(u=Lt||ta(t,n,u,r,m,s,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=c,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Gc(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:ut(t.type,u),l.props=c,h=t.pendingProps,m=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=nt(s):(s=Ve(n)?un:Re.current,s=Fn(t,s));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==h||m!==s)&&na(t,l,r,s),Lt=!1,m=t.memoizedState,l.state=m,Uo(t,r,l,o);var y=t.memoizedState;u!==h||m!==y||Be.current||Lt?(typeof x=="function"&&(Ql(t,n,x,r),y=t.memoizedState),(c=Lt||ta(t,n,c,r,m,y,s)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Xl(e,t,n,r,i,o)}function Xl(e,t,n,r,o,i){Sd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Zs(t,n,!1),$t(e,t,i);r=t.stateNode,ih.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Mn(t,e.child,null,i),t.child=Mn(t,null,u,i)):Ie(e,t,u,i),t.memoizedState=r.state,o&&Zs(t,n,!0),t.child}function Cd(e){var t=e.stateNode;t.pendingContext?Xs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xs(e,t.context,!1),Uu(e,t.containerInfo)}function fa(e,t,n,r,o){return Dn(),Iu(o),t.flags|=256,Ie(e,t,n,r),t.child}var Zl={dehydrated:null,treeContext:null,retryLane:0};function Jl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ed(e,t,n){var r=t.pendingProps,o=oe.current,i=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ee(oe,o&1),e===null)return Wl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=ui(l,r,0,null),e=ln(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Jl(n),t.memoizedState=Zl,e):Ku(t,l));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return lh(e,t,l,r,u,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,u=o.sibling;var s={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Qt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?i=Qt(u,i):(i=ln(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Jl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Zl,r}return i=e.child,e=i.sibling,r=Qt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ku(e,t){return t=ui({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oo(e,t,n,r){return r!==null&&Iu(r),Mn(t,e.child,null,n),e=Ku(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=ul(Error(S(422))),oo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ui({mode:"visible",children:r.children},o,0,null),i=ln(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Mn(t,e.child,null,l),t.child.memoizedState=Jl(l),t.memoizedState=Zl,i);if((t.mode&1)===0)return oo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(S(419)),r=ul(i,r,void 0),oo(e,t,l,r)}if(u=(l&e.childLanes)!==0,Ue||u){if(r=ve,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Nt(e,o),dt(r,e,o,-1))}return es(),r=ul(Error(S(421))),oo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=wh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ye=Bt(o.nextSibling),Ge=t,re=!0,at=null,e!==null&&(qe[be++]=kt,qe[be++]=St,qe[be++]=sn,kt=e.id,St=e.overflow,sn=t),t=Ku(t,r.children),t.flags|=4096,t)}function pa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Hl(e.return,t,n)}function sl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Pd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ie(e,t,r.children,n),r=oe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pa(e,n,t);else if(e.tag===19)pa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(oe,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Bo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),sl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Bo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}sl(t,!0,n,null,i);break;case"together":sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function uh(e,t,n){switch(t.tag){case 3:Cd(t),Dn();break;case 5:qc(t);break;case 1:Ve(t.type)&&Oo(t);break;case 4:Uu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ee(Mo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(oe,oe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ed(e,t,n):(ee(oe,oe.current&1),e=$t(e,t,n),e!==null?e.sibling:null);ee(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Pd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ee(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,kd(e,t,n)}return $t(e,t,n)}var _d,ql,Nd,$d;_d=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ql=function(){};Nd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,rn(vt.current);var i=null;switch(n){case"input":o=xl(e,o),r=xl(e,r),i=[];break;case"select":o=le({},o,{value:void 0}),r=le({},r,{value:void 0}),i=[];break;case"textarea":o=Cl(e,o),r=Cl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Lo)}Pl(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var u=o[c];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(vr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(u=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==u&&(s!=null||u!=null))if(c==="style")if(u){for(l in u)!u.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&u[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(vr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&te("scroll",e),i||u===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};$d=function(e,t,n,r){n!==r&&(t.flags|=4)};function tr(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sh(e,t,n){var r=t.pendingProps;switch(Lu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Ve(t.type)&&Io(),Te(t),null;case 3:return r=t.stateNode,jn(),ne(Be),ne(Re),Vu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(no(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,at!==null&&(lu(at),at=null))),ql(e,t),Te(t),null;case 5:Bu(t);var o=rn(Ar.current);if(n=t.type,e!==null&&t.stateNode!=null)Nd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return Te(t),null}if(e=rn(vt.current),no(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[mt]=t,r[Nr]=i,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(o=0;o<lr.length;o++)te(lr[o],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Ss(r,i),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},te("invalid",r);break;case"textarea":Es(r,i),te("invalid",r)}Pl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var u=i[l];l==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&to(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&to(r.textContent,u,e),o=["children",""+u]):vr.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&te("scroll",r)}switch(n){case"input":Gr(r),Cs(r,i,!0);break;case"textarea":Gr(r),Ps(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Lo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[mt]=t,e[Nr]=r,_d(e,t,!1,!1),t.stateNode=e;e:{switch(l=_l(n,r),n){case"dialog":te("cancel",e),te("close",e),o=r;break;case"iframe":case"object":case"embed":te("load",e),o=r;break;case"video":case"audio":for(o=0;o<lr.length;o++)te(lr[o],e);o=r;break;case"source":te("error",e),o=r;break;case"img":case"image":case"link":te("error",e),te("load",e),o=r;break;case"details":te("toggle",e),o=r;break;case"input":Ss(e,r),o=xl(e,r),te("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=le({},r,{value:void 0}),te("invalid",e);break;case"textarea":Es(e,r),o=Cl(e,r),te("invalid",e);break;default:o=r}Pl(n,o),u=o;for(i in u)if(u.hasOwnProperty(i)){var s=u[i];i==="style"?oc(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&nc(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&yr(e,s):typeof s=="number"&&yr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(vr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&te("scroll",e):s!=null&&yu(e,i,s,l))}switch(n){case"input":Gr(e),Cs(e,r,!1);break;case"textarea":Gr(e),Ps(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?An(e,!!r.multiple,i,!1):r.defaultValue!=null&&An(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)$d(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=rn(Ar.current),rn(vt.current),no(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(i=r.nodeValue!==n)&&(e=Ge,e!==null))switch(e.tag){case 3:to(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&to(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return Te(t),null;case 13:if(ne(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Ye!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Qc(),Dn(),t.flags|=98560,i=!1;else if(i=no(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[mt]=t}else Dn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),i=!1}else at!==null&&(lu(at),at=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(oe.current&1)!==0?he===0&&(he=3):es())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return jn(),ql(e,t),e===null&&Pr(t.stateNode.containerInfo),Te(t),null;case 10:return Du(t.type._context),Te(t),null;case 17:return Ve(t.type)&&Io(),Te(t),null;case 19:if(ne(oe),i=t.memoizedState,i===null)return Te(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)tr(i,!1);else{if(he!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Bo(e),l!==null){for(t.flags|=128,tr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(oe,oe.current&1|2),t.child}e=e.sibling}i.tail!==null&&ce()>Bn&&(t.flags|=128,r=!0,tr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Bo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),tr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!re)return Te(t),null}else 2*ce()-i.renderingStartTime>Bn&&n!==1073741824&&(t.flags|=128,r=!0,tr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ce(),t.sibling=null,n=oe.current,ee(oe,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return bu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Qe&1073741824)!==0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function ah(e,t){switch(Lu(t),t.tag){case 1:return Ve(t.type)&&Io(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jn(),ne(Be),ne(Re),Vu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Bu(t),null;case 13:if(ne(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(oe),null;case 4:return jn(),null;case 10:return Du(t.type._context),null;case 22:case 23:return bu(),null;case 24:return null;default:return null}}var io=!1,ze=!1,ch=typeof WeakSet=="function"?WeakSet:Set,R=null;function _n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function bl(e,t,n){try{n()}catch(r){se(e,t,r)}}var ha=!1;function dh(e,t){if(Fl=To,e=Rc(),zu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,u=-1,s=-1,c=0,p=0,h=e,m=null;t:for(;;){for(var x;h!==n||o!==0&&h.nodeType!==3||(u=l+o),h!==i||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(x=h.firstChild)!==null;)m=h,h=x;for(;;){if(h===e)break t;if(m===n&&++c===o&&(u=l),m===i&&++p===r&&(s=l),(x=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=x}n=u===-1||s===-1?null:{start:u,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dl={focusedElem:e,selectionRange:n},To=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,$=y.memoizedState,d=t.stateNode,a=d.getSnapshotBeforeUpdate(t.elementType===t.type?w:ut(t.type,w),$);d.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){se(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return y=ha,ha=!1,y}function pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&bl(t,n,i)}o=o.next}while(o!==r)}}function ii(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function eu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ad(e){var t=e.alternate;t!==null&&(e.alternate=null,Ad(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[Nr],delete t[Ul],delete t[Gp],delete t[Kp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Td(e){return e.tag===5||e.tag===3||e.tag===4}function ma(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Td(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Lo));else if(r!==4&&(e=e.child,e!==null))for(tu(e,t,n),e=e.sibling;e!==null;)tu(e,t,n),e=e.sibling}function nu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(nu(e,t,n),e=e.sibling;e!==null;)nu(e,t,n),e=e.sibling}var Ee=null,st=!1;function zt(e,t,n){for(n=n.child;n!==null;)zd(e,t,n),n=n.sibling}function zd(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Jo,n)}catch{}switch(n.tag){case 5:ze||_n(n,t);case 6:var r=Ee,o=st;Ee=null,zt(e,t,n),Ee=r,st=o,Ee!==null&&(st?(e=Ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(st?(e=Ee,n=n.stateNode,e.nodeType===8?tl(e.parentNode,n):e.nodeType===1&&tl(e,n),Sr(e)):tl(Ee,n.stateNode));break;case 4:r=Ee,o=st,Ee=n.stateNode.containerInfo,st=!0,zt(e,t,n),Ee=r,st=o;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&bl(n,t,l),o=o.next}while(o!==r)}zt(e,t,n);break;case 1:if(!ze&&(_n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){se(n,t,u)}zt(e,t,n);break;case 21:zt(e,t,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,zt(e,t,n),ze=r):zt(e,t,n);break;default:zt(e,t,n)}}function ga(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ch),t.forEach(function(r){var o=xh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:Ee=u.stateNode,st=!1;break e;case 3:Ee=u.stateNode.containerInfo,st=!0;break e;case 4:Ee=u.stateNode.containerInfo,st=!0;break e}u=u.return}if(Ee===null)throw Error(S(160));zd(i,l,o),Ee=null,st=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){se(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Rd(t,e),t=t.sibling}function Rd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),pt(e),r&4){try{pr(3,e,e.return),ii(3,e)}catch(w){se(e,e.return,w)}try{pr(5,e,e.return)}catch(w){se(e,e.return,w)}}break;case 1:lt(t,e),pt(e),r&512&&n!==null&&_n(n,n.return);break;case 5:if(lt(t,e),pt(e),r&512&&n!==null&&_n(n,n.return),e.flags&32){var o=e.stateNode;try{yr(o,"")}catch(w){se(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&ba(o,i),_l(u,l);var c=_l(u,i);for(l=0;l<s.length;l+=2){var p=s[l],h=s[l+1];p==="style"?oc(o,h):p==="dangerouslySetInnerHTML"?nc(o,h):p==="children"?yr(o,h):yu(o,p,h,c)}switch(u){case"input":kl(o,i);break;case"textarea":ec(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?An(o,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?An(o,!!i.multiple,i.defaultValue,!0):An(o,!!i.multiple,i.multiple?[]:"",!1))}o[Nr]=i}catch(w){se(e,e.return,w)}}break;case 6:if(lt(t,e),pt(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){se(e,e.return,w)}}break;case 3:if(lt(t,e),pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Sr(t.containerInfo)}catch(w){se(e,e.return,w)}break;case 4:lt(t,e),pt(e);break;case 13:lt(t,e),pt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ju=ce())),r&4&&ga(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ze=(c=ze)||p,lt(t,e),ze=c):lt(t,e),pt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&(e.mode&1)!==0)for(R=e,p=e.child;p!==null;){for(h=R=p;R!==null;){switch(m=R,x=m.child,m.tag){case 0:case 11:case 14:case 15:pr(4,m,m.return);break;case 1:_n(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){se(r,n,w)}}break;case 5:_n(m,m.return);break;case 22:if(m.memoizedState!==null){ya(h);continue}}x!==null?(x.return=m,R=x):ya(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=rc("display",l))}catch(w){se(e,e.return,w)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(w){se(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:lt(t,e),pt(e),r&4&&ga(e);break;case 21:break;default:lt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Td(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(yr(o,""),r.flags&=-33);var i=ma(e);nu(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,u=ma(e);tu(e,u,l);break;default:throw Error(S(161))}}catch(s){se(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fh(e,t,n){R=e,Ld(e)}function Ld(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||io;if(!l){var u=o.alternate,s=u!==null&&u.memoizedState!==null||ze;u=io;var c=ze;if(io=l,(ze=s)&&!c)for(R=o;R!==null;)l=R,s=l.child,l.tag===22&&l.memoizedState!==null?wa(o):s!==null?(s.return=l,R=s):wa(o);for(;i!==null;)R=i,Ld(i),i=i.sibling;R=o,io=u,ze=c}va(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,R=i):va(e)}}function va(e){for(;R!==null;){var t=R;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ze||ii(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ze)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ea(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ea(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Sr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ze||t.flags&512&&eu(t)}catch(m){se(t,t.return,m)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function ya(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function wa(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ii(4,t)}catch(s){se(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){se(t,o,s)}}var i=t.return;try{eu(t)}catch(s){se(t,i,s)}break;case 5:var l=t.return;try{eu(t)}catch(s){se(t,l,s)}}}catch(s){se(t,t.return,s)}if(t===e){R=null;break}var u=t.sibling;if(u!==null){u.return=t.return,R=u;break}R=t.return}}var ph=Math.ceil,Ho=At.ReactCurrentDispatcher,Xu=At.ReactCurrentOwner,tt=At.ReactCurrentBatchConfig,W=0,ve=null,de=null,Pe=0,Qe=0,Nn=Zt(0),he=0,Lr=null,cn=0,li=0,Zu=0,hr=null,je=null,Ju=0,Bn=1/0,wt=null,Qo=!1,ru=null,Wt=null,lo=!1,Dt=null,Yo=0,mr=0,ou=null,ko=-1,So=0;function Oe(){return(W&6)!==0?ce():ko!==-1?ko:ko=ce()}function Ht(e){return(e.mode&1)===0?1:(W&2)!==0&&Pe!==0?Pe&-Pe:Zp.transition!==null?(So===0&&(So=gc()),So):(e=Z,e!==0||(e=window.event,e=e===void 0?16:Cc(e.type)),e)}function dt(e,t,n,r){if(50<mr)throw mr=0,ou=null,Error(S(185));Dr(e,n,r),((W&2)===0||e!==ve)&&(e===ve&&((W&2)===0&&(li|=n),he===4&&Ot(e,Pe)),We(e,r),n===1&&W===0&&(t.mode&1)===0&&(Bn=ce()+500,ni&&Jt()))}function We(e,t){var n=e.callbackNode;Zf(e,t);var r=Ao(e,e===ve?Pe:0);if(r===0)n!==null&&$s(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$s(n),t===1)e.tag===0?Xp(xa.bind(null,e)):Vc(xa.bind(null,e)),Qp(function(){(W&6)===0&&Jt()}),n=null;else{switch(vc(r)){case 1:n=Cu;break;case 4:n=hc;break;case 16:n=$o;break;case 536870912:n=mc;break;default:n=$o}n=Bd(n,Id.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Id(e,t){if(ko=-1,So=0,(W&6)!==0)throw Error(S(327));var n=e.callbackNode;if(In()&&e.callbackNode!==n)return null;var r=Ao(e,e===ve?Pe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Go(e,r);else{t=r;var o=W;W|=2;var i=Fd();(ve!==e||Pe!==t)&&(wt=null,Bn=ce()+500,on(e,t));do try{gh();break}catch(u){Od(e,u)}while(1);Fu(),Ho.current=i,W=o,de!==null?t=0:(ve=null,Pe=0,t=he)}if(t!==0){if(t===2&&(o=zl(e),o!==0&&(r=o,t=iu(e,o))),t===1)throw n=Lr,on(e,0),Ot(e,r),We(e,ce()),n;if(t===6)Ot(e,r);else{if(o=e.current.alternate,(r&30)===0&&!hh(o)&&(t=Go(e,r),t===2&&(i=zl(e),i!==0&&(r=i,t=iu(e,i))),t===1))throw n=Lr,on(e,0),Ot(e,r),We(e,ce()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:en(e,je,wt);break;case 3:if(Ot(e,r),(r&130023424)===r&&(t=Ju+500-ce(),10<t)){if(Ao(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Oe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=jl(en.bind(null,e,je,wt),t);break}en(e,je,wt);break;case 4:if(Ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-ct(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ph(r/1960))-r,10<r){e.timeoutHandle=jl(en.bind(null,e,je,wt),r);break}en(e,je,wt);break;case 5:en(e,je,wt);break;default:throw Error(S(329))}}}return We(e,ce()),e.callbackNode===n?Id.bind(null,e):null}function iu(e,t){var n=hr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=Go(e,t),e!==2&&(t=je,je=n,t!==null&&lu(t)),e}function lu(e){je===null?je=e:je.push.apply(je,e)}function hh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ft(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ot(e,t){for(t&=~Zu,t&=~li,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function xa(e){if((W&6)!==0)throw Error(S(327));In();var t=Ao(e,0);if((t&1)===0)return We(e,ce()),null;var n=Go(e,t);if(e.tag!==0&&n===2){var r=zl(e);r!==0&&(t=r,n=iu(e,r))}if(n===1)throw n=Lr,on(e,0),Ot(e,t),We(e,ce()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,en(e,je,wt),We(e,ce()),null}function qu(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(Bn=ce()+500,ni&&Jt())}}function dn(e){Dt!==null&&Dt.tag===0&&(W&6)===0&&In();var t=W;W|=1;var n=tt.transition,r=Z;try{if(tt.transition=null,Z=1,e)return e()}finally{Z=r,tt.transition=n,W=t,(W&6)===0&&Jt()}}function bu(){Qe=Nn.current,ne(Nn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hp(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Lu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Io();break;case 3:jn(),ne(Be),ne(Re),Vu();break;case 5:Bu(r);break;case 4:jn();break;case 13:ne(oe);break;case 19:ne(oe);break;case 10:Du(r.type._context);break;case 22:case 23:bu()}n=n.return}if(ve=e,de=e=Qt(e.current,null),Pe=Qe=t,he=0,Lr=null,Zu=li=cn=0,je=hr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}nn=null}return e}function Od(e,t){do{var n=de;try{if(Fu(),yo.current=Wo,Vo){for(var r=ie.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Vo=!1}if(an=0,ge=pe=ie=null,fr=!1,Tr=0,Xu.current=null,n===null||n.return===null){he=1,Lr=t,de=null;break}e:{var i=e,l=n.return,u=n,s=t;if(t=Pe,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,p=u,h=p.tag;if((p.mode&1)===0&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=ua(l);if(x!==null){x.flags&=-257,sa(x,l,u,i,t),x.mode&1&&la(i,c,t),t=x,s=c;var y=t.updateQueue;if(y===null){var w=new Set;w.add(s),t.updateQueue=w}else y.add(s);break e}else{if((t&1)===0){la(i,c,t),es();break e}s=Error(S(426))}}else if(re&&u.mode&1){var $=ua(l);if($!==null){($.flags&65536)===0&&($.flags|=256),sa($,l,u,i,t),Iu(Un(s,u));break e}}i=s=Un(s,u),he!==4&&(he=2),hr===null?hr=[i]:hr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=yd(i,s,t);bs(i,d);break e;case 1:u=s;var a=i.type,f=i.stateNode;if((i.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Wt===null||!Wt.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=wd(i,u,t);bs(i,v);break e}}i=i.return}while(i!==null)}Md(n)}catch(k){t=k,de===n&&n!==null&&(de=n=n.return);continue}break}while(1)}function Fd(){var e=Ho.current;return Ho.current=Wo,e===null?Wo:e}function es(){(he===0||he===3||he===2)&&(he=4),ve===null||(cn&268435455)===0&&(li&268435455)===0||Ot(ve,Pe)}function Go(e,t){var n=W;W|=2;var r=Fd();(ve!==e||Pe!==t)&&(wt=null,on(e,t));do try{mh();break}catch(o){Od(e,o)}while(1);if(Fu(),W=n,Ho.current=r,de!==null)throw Error(S(261));return ve=null,Pe=0,he}function mh(){for(;de!==null;)Dd(de)}function gh(){for(;de!==null&&!Bf();)Dd(de)}function Dd(e){var t=Ud(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?Md(e):de=t,Xu.current=null}function Md(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=sh(n,t,Qe),n!==null){de=n;return}}else{if(n=ah(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,de=null;return}}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);he===0&&(he=5)}function en(e,t,n){var r=Z,o=tt.transition;try{tt.transition=null,Z=1,vh(e,t,n,r)}finally{tt.transition=o,Z=r}return null}function vh(e,t,n,r){do In();while(Dt!==null);if((W&6)!==0)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Jf(e,i),e===ve&&(de=ve=null,Pe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||lo||(lo=!0,Bd($o,function(){return In(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=tt.transition,tt.transition=null;var l=Z;Z=1;var u=W;W|=4,Xu.current=null,dh(e,n),Rd(n,e),Dp(Dl),To=!!Fl,Dl=Fl=null,e.current=n,fh(n),Vf(),W=u,Z=l,tt.transition=i}else e.current=n;if(lo&&(lo=!1,Dt=e,Yo=o),i=e.pendingLanes,i===0&&(Wt=null),Qf(n.stateNode),We(e,ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Qo)throw Qo=!1,e=ru,ru=null,e;return(Yo&1)!==0&&e.tag!==0&&In(),i=e.pendingLanes,(i&1)!==0?e===ou?mr++:(mr=0,ou=e):mr=0,Jt(),null}function In(){if(Dt!==null){var e=vc(Yo),t=tt.transition,n=Z;try{if(tt.transition=null,Z=16>e?16:e,Dt===null)var r=!1;else{if(e=Dt,Dt=null,Yo=0,(W&6)!==0)throw Error(S(331));var o=W;for(W|=4,R=e.current;R!==null;){var i=R,l=i.child;if((R.flags&16)!==0){var u=i.deletions;if(u!==null){for(var s=0;s<u.length;s++){var c=u[s];for(R=c;R!==null;){var p=R;switch(p.tag){case 0:case 11:case 15:pr(8,p,i)}var h=p.child;if(h!==null)h.return=p,R=h;else for(;R!==null;){p=R;var m=p.sibling,x=p.return;if(Ad(p),p===c){R=null;break}if(m!==null){m.return=x,R=m;break}R=x}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var $=w.sibling;w.sibling=null,w=$}while(w!==null)}}R=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,R=l;else e:for(;R!==null;){if(i=R,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:pr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,R=d;break e}R=i.return}}var a=e.current;for(R=a;R!==null;){l=R;var f=l.child;if((l.subtreeFlags&2064)!==0&&f!==null)f.return=l,R=f;else e:for(l=a;R!==null;){if(u=R,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:ii(9,u)}}catch(k){se(u,u.return,k)}if(u===l){R=null;break e}var v=u.sibling;if(v!==null){v.return=u.return,R=v;break e}R=u.return}}if(W=o,Jt(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Jo,e)}catch{}r=!0}return r}finally{Z=n,tt.transition=t}}return!1}function ka(e,t,n){t=Un(n,t),t=yd(e,t,1),e=Vt(e,t,1),t=Oe(),e!==null&&(Dr(e,1,t),We(e,t))}function se(e,t,n){if(e.tag===3)ka(e,e,n);else for(;t!==null;){if(t.tag===3){ka(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wt===null||!Wt.has(r))){e=Un(n,e),e=wd(t,e,1),t=Vt(t,e,1),e=Oe(),t!==null&&(Dr(t,1,e),We(t,e));break}}t=t.return}}function yh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Oe(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(Pe&n)===n&&(he===4||he===3&&(Pe&130023424)===Pe&&500>ce()-Ju?on(e,0):Zu|=n),We(e,t)}function jd(e,t){t===0&&((e.mode&1)===0?t=1:(t=Zr,Zr<<=1,(Zr&130023424)===0&&(Zr=4194304)));var n=Oe();e=Nt(e,t),e!==null&&(Dr(e,t,n),We(e,n))}function wh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jd(e,n)}function xh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),jd(e,n)}var Ud;Ud=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Ue=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ue=!1,uh(e,t,n);Ue=(e.flags&131072)!==0}else Ue=!1,re&&(t.flags&1048576)!==0&&Wc(t,Do,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xo(e,t),e=t.pendingProps;var o=Fn(t,Re.current);Ln(t,n),o=Hu(null,t,r,e,o,n);var i=Qu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(i=!0,Oo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ju(t),o.updater=ri,t.stateNode=o,o._reactInternals=t,Yl(t,r,e,n),t=Xl(null,t,r,!0,i,n)):(t.tag=0,re&&i&&Ru(t),Ie(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Sh(r),e=ut(r,e),o){case 0:t=Kl(null,t,r,e,n);break e;case 1:t=da(null,t,r,e,n);break e;case 11:t=aa(null,t,r,e,n);break e;case 14:t=ca(null,t,r,ut(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),Kl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),da(e,t,r,o,n);case 3:e:{if(Cd(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Gc(e,t),Uo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Un(Error(S(423)),t),t=fa(e,t,r,n,o);break e}else if(r!==o){o=Un(Error(S(424)),t),t=fa(e,t,r,n,o);break e}else for(Ye=Bt(t.stateNode.containerInfo.firstChild),Ge=t,re=!0,at=null,n=Jc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Dn(),r===o){t=$t(e,t,n);break e}Ie(e,t,r,n)}t=t.child}return t;case 5:return qc(t),e===null&&Wl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Ml(r,o)?l=null:i!==null&&Ml(r,i)&&(t.flags|=32),Sd(e,t),Ie(e,t,l,n),t.child;case 6:return e===null&&Wl(t),null;case 13:return Ed(e,t,n);case 4:return Uu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mn(t,null,r,n):Ie(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),aa(e,t,r,o,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,ee(Mo,r._currentValue),r._currentValue=l,i!==null)if(ft(i.value,l)){if(i.children===o.children&&!Be.current){t=$t(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){l=i.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Et(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Hl(i.return,n,t),u.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(S(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Hl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ie(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Ln(t,n),o=nt(o),r=r(o),t.flags|=1,Ie(e,t,r,n),t.child;case 14:return r=t.type,o=ut(r,t.pendingProps),o=ut(r.type,o),ca(e,t,r,o,n);case 15:return xd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),xo(e,t),t.tag=1,Ve(r)?(e=!0,Oo(t)):e=!1,Ln(t,n),Xc(t,r,o),Yl(t,r,o,n),Xl(null,t,r,!0,e,n);case 19:return Pd(e,t,n);case 22:return kd(e,t,n)}throw Error(S(156,t.tag))};function Bd(e,t){return pc(e,t)}function kh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new kh(e,t,n,r)}function ts(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sh(e){if(typeof e=="function")return ts(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xu)return 11;if(e===ku)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Co(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")ts(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case vn:return ln(n.children,o,i,t);case wu:l=8,o|=8;break;case gl:return e=et(12,n,t,o|2),e.elementType=gl,e.lanes=i,e;case vl:return e=et(13,n,t,o),e.elementType=vl,e.lanes=i,e;case yl:return e=et(19,n,t,o),e.elementType=yl,e.lanes=i,e;case Za:return ui(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ka:l=10;break e;case Xa:l=9;break e;case xu:l=11;break e;case ku:l=14;break e;case Rt:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=et(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function ln(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function ui(e,t,n,r){return e=et(22,e,r,t),e.elementType=Za,e.lanes=n,e.stateNode={isHidden:!1},e}function al(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function cl(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ch(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hi(0),this.expirationTimes=Hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ns(e,t,n,r,o,i,l,u,s){return e=new Ch(e,t,n,u,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=et(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ju(i),e}function Eh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Vd(e){if(!e)return Kt;e=e._reactInternals;e:{if(pn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ve(n))return Bc(e,n,t)}return t}function Wd(e,t,n,r,o,i,l,u,s){return e=ns(n,r,!0,e,o,i,l,u,s),e.context=Vd(null),n=e.current,r=Oe(),o=Ht(n),i=Et(r,o),i.callback=t!=null?t:null,Vt(n,i,o),e.current.lanes=o,Dr(e,o,r),We(e,r),e}function si(e,t,n,r){var o=t.current,i=Oe(),l=Ht(o);return n=Vd(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vt(o,t,l),e!==null&&(dt(e,o,l,i),vo(e,o,l)),l}function Ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function rs(e,t){Sa(e,t),(e=e.alternate)&&Sa(e,t)}function Ph(){return null}var Hd=typeof reportError=="function"?reportError:function(e){console.error(e)};function os(e){this._internalRoot=e}ai.prototype.render=os.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));si(e,t,null,null)};ai.prototype.unmount=os.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dn(function(){si(null,e,null,null)}),t[_t]=null}};function ai(e){this._internalRoot=e}ai.prototype.unstable_scheduleHydration=function(e){if(e){var t=xc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<It.length&&t!==0&&t<It[n].priority;n++);It.splice(n,0,e),n===0&&Sc(e)}};function is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ci(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ca(){}function _h(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Ko(l);i.call(c)}}var l=Wd(t,r,e,0,null,!1,!1,"",Ca);return e._reactRootContainer=l,e[_t]=l.current,Pr(e.nodeType===8?e.parentNode:e),dn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var c=Ko(s);u.call(c)}}var s=ns(e,0,!1,null,null,!1,!1,"",Ca);return e._reactRootContainer=s,e[_t]=s.current,Pr(e.nodeType===8?e.parentNode:e),dn(function(){si(t,s,n,r)}),s}function di(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var u=o;o=function(){var s=Ko(l);u.call(s)}}si(t,l,e,o)}else l=_h(n,t,e,o,r);return Ko(l)}yc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ir(t.pendingLanes);n!==0&&(Eu(t,n|1),We(t,ce()),(W&6)===0&&(Bn=ce()+500,Jt()))}break;case 13:dn(function(){var r=Nt(e,1);if(r!==null){var o=Oe();dt(r,e,1,o)}}),rs(e,1)}};Pu=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=Oe();dt(t,e,134217728,n)}rs(e,134217728)}};wc=function(e){if(e.tag===13){var t=Ht(e),n=Nt(e,t);if(n!==null){var r=Oe();dt(n,e,t,r)}rs(e,t)}};xc=function(){return Z};kc=function(e,t){var n=Z;try{return Z=e,t()}finally{Z=n}};$l=function(e,t,n){switch(t){case"input":if(kl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ti(r);if(!o)throw Error(S(90));qa(r),kl(r,o)}}}break;case"textarea":ec(e,n);break;case"select":t=n.value,t!=null&&An(e,!!n.multiple,t,!1)}};uc=qu;sc=dn;var Nh={usingClientEntryPoint:!1,Events:[jr,kn,ti,ic,lc,qu]},nr={findFiberByHostInstance:tn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},$h={bundleType:nr.bundleType,version:nr.version,rendererPackageName:nr.rendererPackageName,rendererConfig:nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:At.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=dc(e),e===null?null:e.stateNode},findFiberByHostInstance:nr.findFiberByHostInstance||Ph,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uo.isDisabled&&uo.supportsFiber)try{Jo=uo.inject($h),gt=uo}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nh;Xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!is(t))throw Error(S(200));return Eh(e,t,null,n)};Xe.createRoot=function(e,t){if(!is(e))throw Error(S(299));var n=!1,r="",o=Hd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ns(e,1,!1,null,null,n,!1,r,o),e[_t]=t.current,Pr(e.nodeType===8?e.parentNode:e),new os(t)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=dc(t),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return dn(e)};Xe.hydrate=function(e,t,n){if(!ci(t))throw Error(S(200));return di(null,e,t,!0,n)};Xe.hydrateRoot=function(e,t,n){if(!is(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Hd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Wd(t,null,e,1,n!=null?n:null,o,!1,i,l),e[_t]=t.current,Pr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ai(t)};Xe.render=function(e,t,n){if(!ci(t))throw Error(S(200));return di(null,e,t,!1,n)};Xe.unmountComponentAtNode=function(e){if(!ci(e))throw Error(S(40));return e._reactRootContainer?(dn(function(){di(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1};Xe.unstable_batchedUpdates=qu;Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ci(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return di(e,t,n,!1,r)};Xe.version="18.2.0-next-9e3b772b8-20220608";function Qd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qd)}catch(e){console.error(e)}}Qd(),Wa.exports=Xe;var Ea=Wa.exports;hl.createRoot=Ea.createRoot,hl.hydrateRoot=Ea.hydrateRoot;var fi={exports:{}},pi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ah=I.exports,Th=Symbol.for("react.element"),zh=Symbol.for("react.fragment"),Rh=Object.prototype.hasOwnProperty,Lh=Ah.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ih={key:!0,ref:!0,__self:!0,__source:!0};function Yd(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Rh.call(t,r)&&!Ih.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Th,type:e,key:i,ref:l,props:o,_owner:Lh.current}}pi.Fragment=zh;pi.jsx=Yd;pi.jsxs=Yd;fi.exports=pi;const C=fi.exports.jsx,X=fi.exports.jsxs,Oh=fi.exports.Fragment,hi=I.exports.createContext({}),Fh={name:""};function Dh({children:e}){const t=JSON.parse(localStorage.getItem("userPreferences")||JSON.stringify(Fh)),[n,r]=I.exports.useState(t),o=i=>{r(l=>({...l,name:i}))};return I.exports.useEffect(()=>{localStorage.setItem("userPreferences",JSON.stringify(n))},[n]),C(hi.Provider,{value:{user:n,registerUser:o},children:e})}const Br=I.exports.createContext({}),Mh=[{taskAmout:0,title:"Home",slug:"/",color:"008FFD"}];function jh({children:e}){const t=JSON.parse(localStorage.getItem("userCategories")||JSON.stringify(Mh)),[n,r]=I.exports.useState(t),o=u=>{r(s=>[...s,u])},i=u=>{r(s=>s.filter(c=>c.slug!==u))},l=(u,s)=>{r(c=>c.map(p=>p.slug===u?{...p,color:s}:p))};return I.exports.useEffect(()=>{localStorage.setItem("userCategories",JSON.stringify(n))},[n]),C(Br.Provider,{value:{categories:n,addCategory:o,removeCategory:i,updateCategoryColor:l},children:e})}const mi=I.exports.createContext({});function Uh({children:e}){const t="/",[n,r]=I.exports.useState(t),o=i=>{r(i)};return C(mi.Provider,{value:{path:n,changePath:o},children:e})}const gi=I.exports.createContext({});function Bh({children:e}){const t=JSON.parse(localStorage.getItem("userTasks")||"[]"),[n,r]=I.exports.useState(t),o=u=>{r(s=>[...s,u])},i=u=>{r(s=>s.filter(c=>c.id!==u))},l=(u,s)=>{r(c=>c.map(p=>p.id===u.id?{...u,checked:s}:p))};return I.exports.useEffect(()=>{localStorage.setItem("userTasks",JSON.stringify(n))},[n]),C(gi.Provider,{value:{tasks:n,addTask:o,removeTask:i,updateCheckedStatus:l},children:e})}function Gd(e,t){I.exports.useEffect(()=>{const n=r=>{!e.current||e.current.contains(r.target)||t()};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,t])}var ls={exports:{}},J={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var us=Symbol.for("react.element"),ss=Symbol.for("react.portal"),vi=Symbol.for("react.fragment"),yi=Symbol.for("react.strict_mode"),wi=Symbol.for("react.profiler"),xi=Symbol.for("react.provider"),ki=Symbol.for("react.context"),Vh=Symbol.for("react.server_context"),Si=Symbol.for("react.forward_ref"),Ci=Symbol.for("react.suspense"),Ei=Symbol.for("react.suspense_list"),Pi=Symbol.for("react.memo"),_i=Symbol.for("react.lazy"),Wh=Symbol.for("react.offscreen"),Kd;Kd=Symbol.for("react.module.reference");function ot(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case us:switch(e=e.type,e){case vi:case wi:case yi:case Ci:case Ei:return e;default:switch(e=e&&e.$$typeof,e){case Vh:case ki:case Si:case _i:case Pi:case xi:return e;default:return t}}case ss:return t}}}J.ContextConsumer=ki;J.ContextProvider=xi;J.Element=us;J.ForwardRef=Si;J.Fragment=vi;J.Lazy=_i;J.Memo=Pi;J.Portal=ss;J.Profiler=wi;J.StrictMode=yi;J.Suspense=Ci;J.SuspenseList=Ei;J.isAsyncMode=function(){return!1};J.isConcurrentMode=function(){return!1};J.isContextConsumer=function(e){return ot(e)===ki};J.isContextProvider=function(e){return ot(e)===xi};J.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===us};J.isForwardRef=function(e){return ot(e)===Si};J.isFragment=function(e){return ot(e)===vi};J.isLazy=function(e){return ot(e)===_i};J.isMemo=function(e){return ot(e)===Pi};J.isPortal=function(e){return ot(e)===ss};J.isProfiler=function(e){return ot(e)===wi};J.isStrictMode=function(e){return ot(e)===yi};J.isSuspense=function(e){return ot(e)===Ci};J.isSuspenseList=function(e){return ot(e)===Ei};J.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===vi||e===wi||e===yi||e===Ci||e===Ei||e===Wh||typeof e=="object"&&e!==null&&(e.$$typeof===_i||e.$$typeof===Pi||e.$$typeof===xi||e.$$typeof===ki||e.$$typeof===Si||e.$$typeof===Kd||e.getModuleId!==void 0)};J.typeOf=ot;ls.exports=J;function Hh(e){function t(_,N,z,D,g){for(var V=0,P=0,ue=0,Y=0,K,U,xe=0,Me=0,Q,$e=Q=K=0,G=0,ke=0,Gn=0,Se=0,Hr=z.length,Kn=Hr-1,it,j="",ae="",Di="",Mi="",Tt;G<Hr;){if(U=z.charCodeAt(G),G===Kn&&P+Y+ue+V!==0&&(P!==0&&(U=P===47?10:47),Y=ue=V=0,Hr++,Kn++),P+Y+ue+V===0){if(G===Kn&&(0<ke&&(j=j.replace(m,"")),0<j.trim().length)){switch(U){case 32:case 9:case 59:case 13:case 10:break;default:j+=z.charAt(G)}U=59}switch(U){case 123:for(j=j.trim(),K=j.charCodeAt(0),Q=1,Se=++G;G<Hr;){switch(U=z.charCodeAt(G)){case 123:Q++;break;case 125:Q--;break;case 47:switch(U=z.charCodeAt(G+1)){case 42:case 47:e:{for($e=G+1;$e<Kn;++$e)switch(z.charCodeAt($e)){case 47:if(U===42&&z.charCodeAt($e-1)===42&&G+2!==$e){G=$e+1;break e}break;case 10:if(U===47){G=$e+1;break e}}G=$e}}break;case 91:U++;case 40:U++;case 34:case 39:for(;G++<Kn&&z.charCodeAt(G)!==U;);}if(Q===0)break;G++}switch(Q=z.substring(Se,G),K===0&&(K=(j=j.replace(h,"").trim()).charCodeAt(0)),K){case 64:switch(0<ke&&(j=j.replace(m,"")),U=j.charCodeAt(1),U){case 100:case 109:case 115:case 45:ke=N;break;default:ke=yt}if(Q=t(N,ke,Q,U,g+1),Se=Q.length,0<E&&(ke=n(yt,j,Gn),Tt=u(3,Q,ke,N,we,fe,Se,U,g,D),j=ke.join(""),Tt!==void 0&&(Se=(Q=Tt.trim()).length)===0&&(U=0,Q="")),0<Se)switch(U){case 115:j=j.replace(A,l);case 100:case 109:case 45:Q=j+"{"+Q+"}";break;case 107:j=j.replace(a,"$1 $2"),Q=j+"{"+Q+"}",Q=Ne===1||Ne===2&&i("@"+Q,3)?"@-webkit-"+Q+"@"+Q:"@"+Q;break;default:Q=j+Q,D===112&&(Q=(ae+=Q,""))}else Q="";break;default:Q=t(N,n(N,j,Gn),Q,D,g+1)}Di+=Q,Q=Gn=ke=$e=K=0,j="",U=z.charCodeAt(++G);break;case 125:case 59:if(j=(0<ke?j.replace(m,""):j).trim(),1<(Se=j.length))switch($e===0&&(K=j.charCodeAt(0),K===45||96<K&&123>K)&&(Se=(j=j.replace(" ",":")).length),0<E&&(Tt=u(1,j,N,_,we,fe,ae.length,D,g,D))!==void 0&&(Se=(j=Tt.trim()).length)===0&&(j="\0\0"),K=j.charCodeAt(0),U=j.charCodeAt(1),K){case 0:break;case 64:if(U===105||U===99){Mi+=j+z.charAt(G);break}default:j.charCodeAt(Se-1)!==58&&(ae+=o(j,K,U,j.charCodeAt(2)))}Gn=ke=$e=K=0,j="",U=z.charCodeAt(++G)}}switch(U){case 13:case 10:P===47?P=0:1+K===0&&D!==107&&0<j.length&&(ke=1,j+="\0"),0<E*F&&u(0,j,N,_,we,fe,ae.length,D,g,D),fe=1,we++;break;case 59:case 125:if(P+Y+ue+V===0){fe++;break}default:switch(fe++,it=z.charAt(G),U){case 9:case 32:if(Y+V+P===0)switch(xe){case 44:case 58:case 9:case 32:it="";break;default:U!==32&&(it=" ")}break;case 0:it="\\0";break;case 12:it="\\f";break;case 11:it="\\v";break;case 38:Y+P+V===0&&(ke=Gn=1,it="\f"+it);break;case 108:if(Y+P+V+He===0&&0<$e)switch(G-$e){case 2:xe===112&&z.charCodeAt(G-3)===58&&(He=xe);case 8:Me===111&&(He=Me)}break;case 58:Y+P+V===0&&($e=G);break;case 44:P+ue+Y+V===0&&(ke=1,it+="\r");break;case 34:case 39:P===0&&(Y=Y===U?0:Y===0?U:Y);break;case 91:Y+P+ue===0&&V++;break;case 93:Y+P+ue===0&&V--;break;case 41:Y+P+V===0&&ue--;break;case 40:if(Y+P+V===0){if(K===0)switch(2*xe+3*Me){case 533:break;default:K=1}ue++}break;case 64:P+ue+Y+V+$e+Q===0&&(Q=1);break;case 42:case 47:if(!(0<Y+V+ue))switch(P){case 0:switch(2*U+3*z.charCodeAt(G+1)){case 235:P=47;break;case 220:Se=G,P=42}break;case 42:U===47&&xe===42&&Se+2!==G&&(z.charCodeAt(Se+2)===33&&(ae+=z.substring(Se,G+1)),it="",P=0)}}P===0&&(j+=it)}Me=xe,xe=U,G++}if(Se=ae.length,0<Se){if(ke=N,0<E&&(Tt=u(2,ae,ke,_,we,fe,Se,D,g,D),Tt!==void 0&&(ae=Tt).length===0))return Mi+ae+Di;if(ae=ke.join(",")+"{"+ae+"}",Ne*He!==0){switch(Ne!==2||i(ae,2)||(He=0),He){case 111:ae=ae.replace(v,":-moz-$1")+ae;break;case 112:ae=ae.replace(f,"::-webkit-input-$1")+ae.replace(f,"::-moz-$1")+ae.replace(f,":-ms-input-$1")+ae}He=0}}return Mi+ae+Di}function n(_,N,z){var D=N.trim().split($);N=D;var g=D.length,V=_.length;switch(V){case 0:case 1:var P=0;for(_=V===0?"":_[0]+" ";P<g;++P)N[P]=r(_,N[P],z).trim();break;default:var ue=P=0;for(N=[];P<g;++P)for(var Y=0;Y<V;++Y)N[ue++]=r(_[Y]+" ",D[P],z).trim()}return N}function r(_,N,z){var D=N.charCodeAt(0);switch(33>D&&(D=(N=N.trim()).charCodeAt(0)),D){case 38:return N.replace(d,"$1"+_.trim());case 58:return _.trim()+N.replace(d,"$1"+_.trim());default:if(0<1*z&&0<N.indexOf("\f"))return N.replace(d,(_.charCodeAt(0)===58?"":"$1")+_.trim())}return _+N}function o(_,N,z,D){var g=_+";",V=2*N+3*z+4*D;if(V===944){_=g.indexOf(":",9)+1;var P=g.substring(_,g.length-1).trim();return P=g.substring(0,_).trim()+P+";",Ne===1||Ne===2&&i(P,1)?"-webkit-"+P+P:P}if(Ne===0||Ne===2&&!i(g,1))return g;switch(V){case 1015:return g.charCodeAt(10)===97?"-webkit-"+g+g:g;case 951:return g.charCodeAt(3)===116?"-webkit-"+g+g:g;case 963:return g.charCodeAt(5)===110?"-webkit-"+g+g:g;case 1009:if(g.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+g+g;case 978:return"-webkit-"+g+"-moz-"+g+g;case 1019:case 983:return"-webkit-"+g+"-moz-"+g+"-ms-"+g+g;case 883:if(g.charCodeAt(8)===45)return"-webkit-"+g+g;if(0<g.indexOf("image-set(",11))return g.replace(me,"$1-webkit-$2")+g;break;case 932:if(g.charCodeAt(4)===45)switch(g.charCodeAt(5)){case 103:return"-webkit-box-"+g.replace("-grow","")+"-webkit-"+g+"-ms-"+g.replace("grow","positive")+g;case 115:return"-webkit-"+g+"-ms-"+g.replace("shrink","negative")+g;case 98:return"-webkit-"+g+"-ms-"+g.replace("basis","preferred-size")+g}return"-webkit-"+g+"-ms-"+g+g;case 964:return"-webkit-"+g+"-ms-flex-"+g+g;case 1023:if(g.charCodeAt(8)!==99)break;return P=g.substring(g.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+P+"-webkit-"+g+"-ms-flex-pack"+P+g;case 1005:return y.test(g)?g.replace(x,":-webkit-")+g.replace(x,":-moz-")+g:g;case 1e3:switch(P=g.substring(13).trim(),N=P.indexOf("-")+1,P.charCodeAt(0)+P.charCodeAt(N)){case 226:P=g.replace(k,"tb");break;case 232:P=g.replace(k,"tb-rl");break;case 220:P=g.replace(k,"lr");break;default:return g}return"-webkit-"+g+"-ms-"+P+g;case 1017:if(g.indexOf("sticky",9)===-1)break;case 975:switch(N=(g=_).length-10,P=(g.charCodeAt(N)===33?g.substring(0,N):g).substring(_.indexOf(":",7)+1).trim(),V=P.charCodeAt(0)+(P.charCodeAt(7)|0)){case 203:if(111>P.charCodeAt(8))break;case 115:g=g.replace(P,"-webkit-"+P)+";"+g;break;case 207:case 102:g=g.replace(P,"-webkit-"+(102<V?"inline-":"")+"box")+";"+g.replace(P,"-webkit-"+P)+";"+g.replace(P,"-ms-"+P+"box")+";"+g}return g+";";case 938:if(g.charCodeAt(5)===45)switch(g.charCodeAt(6)){case 105:return P=g.replace("-items",""),"-webkit-"+g+"-webkit-box-"+P+"-ms-flex-"+P+g;case 115:return"-webkit-"+g+"-ms-flex-item-"+g.replace(T,"")+g;default:return"-webkit-"+g+"-ms-flex-line-pack"+g.replace("align-content","").replace(T,"")+g}break;case 973:case 989:if(g.charCodeAt(3)!==45||g.charCodeAt(4)===122)break;case 931:case 953:if(M.test(_)===!0)return(P=_.substring(_.indexOf(":")+1)).charCodeAt(0)===115?o(_.replace("stretch","fill-available"),N,z,D).replace(":fill-available",":stretch"):g.replace(P,"-webkit-"+P)+g.replace(P,"-moz-"+P.replace("fill-",""))+g;break;case 962:if(g="-webkit-"+g+(g.charCodeAt(5)===102?"-ms-"+g:"")+g,z+D===211&&g.charCodeAt(13)===105&&0<g.indexOf("transform",10))return g.substring(0,g.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+g}return g}function i(_,N){var z=_.indexOf(N===1?":":"{"),D=_.substring(0,N!==3?z:10);return z=_.substring(z+1,_.length-1),O(N!==2?D:D.replace(H,"$1"),z,N)}function l(_,N){var z=o(N,N.charCodeAt(0),N.charCodeAt(1),N.charCodeAt(2));return z!==N+";"?z.replace(L," or ($1)").substring(4):"("+N+")"}function u(_,N,z,D,g,V,P,ue,Y,K){for(var U=0,xe=N,Me;U<E;++U)switch(Me=Le[U].call(p,_,xe,z,D,g,V,P,ue,Y,K)){case void 0:case!1:case!0:case null:break;default:xe=Me}if(xe!==N)return xe}function s(_){switch(_){case void 0:case null:E=Le.length=0;break;default:if(typeof _=="function")Le[E++]=_;else if(typeof _=="object")for(var N=0,z=_.length;N<z;++N)s(_[N]);else F=!!_|0}return s}function c(_){return _=_.prefix,_!==void 0&&(O=null,_?typeof _!="function"?Ne=1:(Ne=2,O=_):Ne=0),c}function p(_,N){var z=_;if(33>z.charCodeAt(0)&&(z=z.trim()),b=z,z=[b],0<E){var D=u(-1,N,z,z,we,fe,0,0,0,0);D!==void 0&&typeof D=="string"&&(N=D)}var g=t(yt,z,N,0,0);return 0<E&&(D=u(-2,g,z,z,we,fe,g.length,0,0,0),D!==void 0&&(g=D)),b="",He=0,fe=we=1,g}var h=/^\0+/g,m=/[\0\r\f]/g,x=/: */g,y=/zoo|gra/,w=/([,: ])(transform)/g,$=/,\r+?/g,d=/([\t\r\n ])*\f?&/g,a=/@(k\w+)\s*(\S*)\s*/,f=/::(place)/g,v=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,L=/([\s\S]*?);/g,T=/-self|flex-/g,H=/[^]*?(:[rp][el]a[\w-]+)[^]*/,M=/stretch|:\s*\w+\-(?:conte|avail)/,me=/([^-])(image-set\()/,fe=1,we=1,He=0,Ne=1,yt=[],Le=[],E=0,O=null,F=0,b="";return p.use=s,p.set=c,e!==void 0&&c(e),p}var Qh={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Yh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Gh=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Pa=Yh(function(e){return Gh.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Xd={exports:{}},q={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye=typeof Symbol=="function"&&Symbol.for,as=ye?Symbol.for("react.element"):60103,cs=ye?Symbol.for("react.portal"):60106,Ni=ye?Symbol.for("react.fragment"):60107,$i=ye?Symbol.for("react.strict_mode"):60108,Ai=ye?Symbol.for("react.profiler"):60114,Ti=ye?Symbol.for("react.provider"):60109,zi=ye?Symbol.for("react.context"):60110,ds=ye?Symbol.for("react.async_mode"):60111,Ri=ye?Symbol.for("react.concurrent_mode"):60111,Li=ye?Symbol.for("react.forward_ref"):60112,Ii=ye?Symbol.for("react.suspense"):60113,Kh=ye?Symbol.for("react.suspense_list"):60120,Oi=ye?Symbol.for("react.memo"):60115,Fi=ye?Symbol.for("react.lazy"):60116,Xh=ye?Symbol.for("react.block"):60121,Zh=ye?Symbol.for("react.fundamental"):60117,Jh=ye?Symbol.for("react.responder"):60118,qh=ye?Symbol.for("react.scope"):60119;function Je(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case as:switch(e=e.type,e){case ds:case Ri:case Ni:case Ai:case $i:case Ii:return e;default:switch(e=e&&e.$$typeof,e){case zi:case Li:case Fi:case Oi:case Ti:return e;default:return t}}case cs:return t}}}function Zd(e){return Je(e)===Ri}q.AsyncMode=ds;q.ConcurrentMode=Ri;q.ContextConsumer=zi;q.ContextProvider=Ti;q.Element=as;q.ForwardRef=Li;q.Fragment=Ni;q.Lazy=Fi;q.Memo=Oi;q.Portal=cs;q.Profiler=Ai;q.StrictMode=$i;q.Suspense=Ii;q.isAsyncMode=function(e){return Zd(e)||Je(e)===ds};q.isConcurrentMode=Zd;q.isContextConsumer=function(e){return Je(e)===zi};q.isContextProvider=function(e){return Je(e)===Ti};q.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===as};q.isForwardRef=function(e){return Je(e)===Li};q.isFragment=function(e){return Je(e)===Ni};q.isLazy=function(e){return Je(e)===Fi};q.isMemo=function(e){return Je(e)===Oi};q.isPortal=function(e){return Je(e)===cs};q.isProfiler=function(e){return Je(e)===Ai};q.isStrictMode=function(e){return Je(e)===$i};q.isSuspense=function(e){return Je(e)===Ii};q.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ni||e===Ri||e===Ai||e===$i||e===Ii||e===Kh||typeof e=="object"&&e!==null&&(e.$$typeof===Fi||e.$$typeof===Oi||e.$$typeof===Ti||e.$$typeof===zi||e.$$typeof===Li||e.$$typeof===Zh||e.$$typeof===Jh||e.$$typeof===qh||e.$$typeof===Xh)};q.typeOf=Je;Xd.exports=q;var fs=Xd.exports,bh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},e0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t0={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Jd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ps={};ps[fs.ForwardRef]=t0;ps[fs.Memo]=Jd;function _a(e){return fs.isMemo(e)?Jd:ps[e.$$typeof]||bh}var n0=Object.defineProperty,r0=Object.getOwnPropertyNames,Na=Object.getOwnPropertySymbols,o0=Object.getOwnPropertyDescriptor,i0=Object.getPrototypeOf,$a=Object.prototype;function qd(e,t,n){if(typeof t!="string"){if($a){var r=i0(t);r&&r!==$a&&qd(e,r,n)}var o=r0(t);Na&&(o=o.concat(Na(t)));for(var i=_a(e),l=_a(t),u=0;u<o.length;++u){var s=o[u];if(!e0[s]&&!(n&&n[s])&&!(l&&l[s])&&!(i&&i[s])){var c=o0(t,s);try{n0(e,s,c)}catch{}}}}return e}var l0=qd;function Ct(){return(Ct=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Aa=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},uu=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!ls.exports.typeOf(e)},Xo=Object.freeze([]),Yt=Object.freeze({});function Ir(e){return typeof e=="function"}function Ta(e){return e.displayName||e.name||"Component"}function hs(e){return e&&typeof e.styledComponentId=="string"}var Vn=typeof process!="undefined"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ms=typeof window!="undefined"&&"HTMLElement"in window,u0=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1);function Vr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var s0=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,l=i;n>=l;)(l<<=1)<0&&Vr(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(o),this.length=l;for(var u=i;u<l;u++)this.groupSizes[u]=0}for(var s=this.indexOfGroup(n+1),c=0,p=r.length;c<p;c++)this.tag.insertRule(s,r[c])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var l=o;l<i;l++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),l=i+o,u=i;u<l;u++)r+=this.tag.getRule(u)+`/*!sc*/
`;return r},e}(),Eo=new Map,Zo=new Map,gr=1,so=function(e){if(Eo.has(e))return Eo.get(e);for(;Zo.has(gr);)gr++;var t=gr++;return Eo.set(e,t),Zo.set(t,e),t},a0=function(e){return Zo.get(e)},c0=function(e,t){t>=gr&&(gr=t+1),Eo.set(e,t),Zo.set(t,e)},d0="style["+Vn+'][data-styled-version="5.3.5"]',f0=new RegExp("^"+Vn+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),p0=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},h0=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var l=n[o].trim();if(l){var u=l.match(f0);if(u){var s=0|parseInt(u[1],10),c=u[2];s!==0&&(c0(c,s),p0(e,c,u[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(l)}}},m0=function(){return typeof window!="undefined"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},bd=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(u){for(var s=u.childNodes,c=s.length;c>=0;c--){var p=s[c];if(p&&p.nodeType===1&&p.hasAttribute(Vn))return p}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Vn,"active"),r.setAttribute("data-styled-version","5.3.5");var l=m0();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},g0=function(){function e(n){var r=this.element=bd(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,l=0,u=i.length;l<u;l++){var s=i[l];if(s.ownerNode===o)return s}Vr(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),v0=function(){function e(n){var r=this.element=bd(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),y0=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),za=ms,w0={isServer:!ms,useCSSOMInjection:!u0},ef=function(){function e(n,r,o){n===void 0&&(n=Yt),r===void 0&&(r={}),this.options=Ct({},w0,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&ms&&za&&(za=!1,function(i){for(var l=document.querySelectorAll(d0),u=0,s=l.length;u<s;u++){var c=l[u];c&&c.getAttribute(Vn)!=="active"&&(h0(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return so(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Ct({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,l=r.target,n=o?new y0(l):i?new g0(l):new v0(l),new s0(n)));var n,r,o,i,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(so(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(so(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(so(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",l=0;l<o;l++){var u=a0(l);if(u!==void 0){var s=n.names.get(u),c=r.getGroup(l);if(s&&c&&s.size){var p=Vn+".g"+l+'[id="'+u+'"]',h="";s!==void 0&&s.forEach(function(m){m.length>0&&(h+=m+",")}),i+=""+c+p+'{content:"'+h+`"}/*!sc*/
`}}}return i}(this)},e}(),x0=/(a)(d)/gi,Ra=function(e){return String.fromCharCode(e+(e>25?39:97))};function su(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ra(t%52)+n;return(Ra(t%52)+n).replace(x0,"$1-$2")}var $n=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},tf=function(e){return $n(5381,e)};function k0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ir(n)&&!hs(n))return!1}return!0}var S0=tf("5.3.5"),C0=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&k0(t),this.componentId=n,this.baseHash=$n(S0,n),this.baseStyle=r,ef.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var l=Wn(this.rules,t,n,r).join(""),u=su($n(this.baseHash,l)>>>0);if(!n.hasNameForId(o,u)){var s=r(l,"."+u,void 0,o);n.insertRules(o,u,s)}i.push(u),this.staticRulesId=u}else{for(var c=this.rules.length,p=$n(this.baseHash,r.hash),h="",m=0;m<c;m++){var x=this.rules[m];if(typeof x=="string")h+=x;else if(x){var y=Wn(x,t,n,r),w=Array.isArray(y)?y.join(""):y;p=$n(p,w+m),h+=w}}if(h){var $=su(p>>>0);if(!n.hasNameForId(o,$)){var d=r(h,"."+$,void 0,o);n.insertRules(o,$,d)}i.push($)}}return i.join(" ")},e}(),E0=/^\s*\/\/.*$/gm,P0=[":","[",".","#"];function _0(e){var t,n,r,o,i=e===void 0?Yt:e,l=i.options,u=l===void 0?Yt:l,s=i.plugins,c=s===void 0?Xo:s,p=new Hh(u),h=[],m=function(w){function $(d){if(d)try{w(d+"}")}catch{}}return function(d,a,f,v,k,A,L,T,H,M){switch(d){case 1:if(H===0&&a.charCodeAt(0)===64)return w(a+";"),"";break;case 2:if(T===0)return a+"/*|*/";break;case 3:switch(T){case 102:case 112:return w(f[0]+a),"";default:return a+(M===0?"/*|*/":"")}case-2:a.split("/*|*/}").forEach($)}}}(function(w){h.push(w)}),x=function(w,$,d){return $===0&&P0.indexOf(d[n.length])!==-1||d.match(o)?w:"."+t};function y(w,$,d,a){a===void 0&&(a="&");var f=w.replace(E0,""),v=$&&d?d+" "+$+" { "+f+" }":f;return t=a,n=$,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),p(d||!$?"":$,v)}return p.use([].concat(c,[function(w,$,d){w===2&&d.length&&d[0].lastIndexOf(n)>0&&(d[0]=d[0].replace(r,x))},m,function(w){if(w===-2){var $=h;return h=[],$}}])),y.hash=c.length?c.reduce(function(w,$){return $.name||Vr(15),$n(w,$.name)},5381).toString():"",y}var nf=Fr.createContext();nf.Consumer;var rf=Fr.createContext(),N0=(rf.Consumer,new ef),au=_0();function $0(){return I.exports.useContext(nf)||N0}function A0(){return I.exports.useContext(rf)||au}var T0=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=au);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.toString=function(){return Vr(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=au),this.name+t.hash},e}(),z0=/([A-Z])/,R0=/([A-Z])/g,L0=/^ms-/,I0=function(e){return"-"+e.toLowerCase()};function La(e){return z0.test(e)?e.replace(R0,I0).replace(L0,"-ms-"):e}var Ia=function(e){return e==null||e===!1||e===""};function Wn(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],l=0,u=e.length;l<u;l+=1)(o=Wn(e[l],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(Ia(e))return"";if(hs(e))return"."+e.styledComponentId;if(Ir(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var s=e(t);return Wn(s,t,n,r)}var c;return e instanceof T0?n?(e.inject(n,r),e.getName(r)):e:uu(e)?function p(h,m){var x,y,w=[];for(var $ in h)h.hasOwnProperty($)&&!Ia(h[$])&&(Array.isArray(h[$])&&h[$].isCss||Ir(h[$])?w.push(La($)+":",h[$],";"):uu(h[$])?w.push.apply(w,p(h[$],$)):w.push(La($)+": "+(x=$,(y=h[$])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||x in Qh?String(y).trim():y+"px")+";"));return m?[m+" {"].concat(w,["}"]):w}(e):e.toString()}var Oa=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function O0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Ir(e)||uu(e)?Oa(Wn(Aa(Xo,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Oa(Wn(Aa(e,n)))}var F0=function(e,t,n){return n===void 0&&(n=Yt),e.theme!==n.theme&&e.theme||t||n.theme},D0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,M0=/(^-|-$)/g;function dl(e){return e.replace(D0,"-").replace(M0,"")}var j0=function(e){return su(tf(e)>>>0)};function ao(e){return typeof e=="string"&&!0}var cu=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},U0=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function B0(e,t,n){var r=e[n];cu(t)&&cu(r)?of(r,t):e[n]=t}function of(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var l=i[o];if(cu(l))for(var u in l)U0(u)&&B0(e,l[u],u)}return e}var lf=Fr.createContext();lf.Consumer;var fl={};function uf(e,t,n){var r=hs(e),o=!ao(e),i=t.attrs,l=i===void 0?Xo:i,u=t.componentId,s=u===void 0?function(a,f){var v=typeof a!="string"?"sc":dl(a);fl[v]=(fl[v]||0)+1;var k=v+"-"+j0("5.3.5"+v+fl[v]);return f?f+"-"+k:k}(t.displayName,t.parentComponentId):u,c=t.displayName,p=c===void 0?function(a){return ao(a)?"styled."+a:"Styled("+Ta(a)+")"}(e):c,h=t.displayName&&t.componentId?dl(t.displayName)+"-"+t.componentId:t.componentId||s,m=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,x=t.shouldForwardProp;r&&e.shouldForwardProp&&(x=t.shouldForwardProp?function(a,f,v){return e.shouldForwardProp(a,f,v)&&t.shouldForwardProp(a,f,v)}:e.shouldForwardProp);var y,w=new C0(n,h,r?e.componentStyle:void 0),$=w.isStatic&&l.length===0,d=function(a,f){return function(v,k,A,L){var T=v.attrs,H=v.componentStyle,M=v.defaultProps,me=v.foldedComponentIds,fe=v.shouldForwardProp,we=v.styledComponentId,He=v.target,Ne=function(D,g,V){D===void 0&&(D=Yt);var P=Ct({},g,{theme:D}),ue={};return V.forEach(function(Y){var K,U,xe,Me=Y;for(K in Ir(Me)&&(Me=Me(P)),Me)P[K]=ue[K]=K==="className"?(U=ue[K],xe=Me[K],U&&xe?U+" "+xe:U||xe):Me[K]}),[P,ue]}(F0(k,I.exports.useContext(lf),M)||Yt,k,T),yt=Ne[0],Le=Ne[1],E=function(D,g,V,P){var ue=$0(),Y=A0(),K=g?D.generateAndInjectStyles(Yt,ue,Y):D.generateAndInjectStyles(V,ue,Y);return K}(H,L,yt),O=A,F=Le.$as||k.$as||Le.as||k.as||He,b=ao(F),_=Le!==k?Ct({},k,{},Le):k,N={};for(var z in _)z[0]!=="$"&&z!=="as"&&(z==="forwardedAs"?N.as=_[z]:(fe?fe(z,Pa,F):!b||Pa(z))&&(N[z]=_[z]));return k.style&&Le.style!==k.style&&(N.style=Ct({},k.style,{},Le.style)),N.className=Array.prototype.concat(me,we,E!==we?E:null,k.className,Le.className).filter(Boolean).join(" "),N.ref=O,I.exports.createElement(F,N)}(y,a,f,$)};return d.displayName=p,(y=Fr.forwardRef(d)).attrs=m,y.componentStyle=w,y.displayName=p,y.shouldForwardProp=x,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Xo,y.styledComponentId=h,y.target=r?e.target:e,y.withComponent=function(a){var f=t.componentId,v=function(A,L){if(A==null)return{};var T,H,M={},me=Object.keys(A);for(H=0;H<me.length;H++)T=me[H],L.indexOf(T)>=0||(M[T]=A[T]);return M}(t,["componentId"]),k=f&&f+"-"+(ao(a)?a:dl(Ta(a)));return uf(a,Ct({},v,{attrs:m,componentId:k}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(a){this._foldedDefaultProps=r?of({},e.defaultProps,a):a}}),y.toString=function(){return"."+y.styledComponentId},o&&l0(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var du=function(e){return function t(n,r,o){if(o===void 0&&(o=Yt),!ls.exports.isValidElementType(r))return Vr(1,String(r));var i=function(){return n(r,o,O0.apply(void 0,arguments))};return i.withConfig=function(l){return t(n,r,Ct({},o,{},l))},i.attrs=function(l){return t(n,r,Ct({},o,{attrs:Array.prototype.concat(o.attrs,l).filter(Boolean)}))},i}(uf,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){du[e]=du(e)});var qt=du;const V0=qt.div`
  position: absolute;

  display: flex;
  flex-direction: column;

  top: 20px;
  left: 0;

  z-index: 1;

  width: 375px;
  height: fit-content;

  gap: 20px;
  padding: ${e=>e.isSelectingColor?"20px":""};

  border-radius: 15px;

  border: ${e=>e.isSelectingColor?`1px solid ${e.theme.bold}`:""};
  box-shadow: ${e=>e.isSelectingColor?"0px 0px 16px 4px rgba(0, 0, 0, 0.1)":""};

  cursor: default;

  background-color: ${e=>e.theme.fg};
  animation: ${e=>e.isSelectingColor?"colorPickerSlideDown .15s ease forwards":""};

  h4 {
    color: ${e=>e.theme.text};
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));

    list-style: none;

    li {
      display: grid;
      place-items: center;

      width: 40px;
      height: 40px;

      outline: 2px solid transparent;

      border-radius: 10px;

      cursor: pointer;

      transition: 0.25s ease;
      transition-property: outline-color;

      :hover {
        outline-color: ${e=>e.theme.bold};
      }
    }
  }

  #custom-color-wrapper {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    #custom-color {
      display: flex;
      flex-direction: row;

      align-items: center;

      gap: 10px;
      padding: 10px;

      border-radius: 10px;

      background-color: ${e=>e.theme.bold};

      form {
        width: 100%;
        height: fit-content;

        padding: 0;

        input {
          width: 60px;

          outline: none;
          border: none;

          font-family: "Inter var", sans-serif;
          font-size: clamp(12px, 1.65vw, 14px);

          color: ${e=>e.theme.text};
          background-color: transparent;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    display: none;
  }

  @keyframes colorPickerSlideDown {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 0.8;
      backdrop-filter: blur(20px);
      transform: translateY(0px);
    }
  }
`,W0=["0564A4","0C8FF1","0ABAFA","0BB8AA","00B873","DDBC10","FCF7BD","FF705D","F8003C","BE0A19","B90F8B","F56ED8","7E45F7","4A40EE","94959F","7B7168"];function H0({setColor:e,isSelectingColor:t,setIsSelectingColor:n}){const[r,o]=I.exports.useState("008FFD"),i=I.exports.useRef(null);Gd(i,()=>n(!1));function l(u,s){s==null||s.preventDefault(),e(u),n(!t)}return I.exports.useEffect(()=>{r===""&&o("008FFD")},[r]),C(V0,{theme:hn,isSelectingColor:t,ref:i,children:t&&X(Oh,{children:[C("h4",{children:"Colors"}),C("div",{className:"colors",children:C("ul",{children:W0.map(u=>C("li",{onClick:()=>l(u),children:C("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:C("rect",{x:"1.25",y:"1.25",width:"12.5",height:"12.5",rx:"4.75",stroke:`#${u}`,fill:`#${u}`,strokeWidth:"2.5"})})},u))})}),X("div",{id:"custom-color-wrapper",children:[C("h4",{children:"Custom color"}),X("div",{id:"custom-color",children:[C("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:C("rect",{x:"1.25",y:"1.25",width:"12.5",height:"12.5",rx:"4.75",stroke:`#${r}`,fill:`#${r}`,strokeWidth:"2.5"})}),C("form",{noValidate:!0,onSubmit:u=>l(r,u),children:C("input",{type:"text",placeholder:r,onChange:u=>o(u.target.value)})})]})]})]})})}var sf="/dona-clone/assets/removeIcon.63e204af.svg";const Q0=qt.a`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 70px;

  align-items: center;
  justify-content: space-between;

  padding-left: 20px;
  padding-right: 20px;

  border-radius: 20px;

  opacity: ${e=>e.beingRemoved?"0":"1"};
  transform: ${e=>e.beingRemoved?"translateY(-10px)":""};

  cursor: pointer;

  background-color: ${e=>e.activeCategory?e.theme.bg:""};

  transition: 0.25s ease;
  transition-property: background-color transform opacity;

  animation: categorySlideDown 0.25s ease;

  :hover {
    background-color: ${e=>e.theme.bg};
  }

  .left {
    position: relative;

    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 20px;

    span {
      position: relative;

      display: grid;
      place-items: center;

      width: 33px;
      height: 33px;

      border-radius: 10px;

      outline: 2px solid transparent;

      transition: 0.25s ease;
      transition-property: background-color;

      :hover {
        background-color: ${e=>e.theme.bold};

        ::before {
          content: " ";
          position: absolute;

          top: 12px;

          left: 10px;

          border-width: 5px;
          border-style: solid;
          border-color: transparent black transparent transparent;

          opacity: 0;

          animation: categorySlideDown 0.25s 0.5s ease forwards;
        }

        ::after {
          content: "Change color";
          position: absolute;

          left: 20px;

          display: grid;
          place-items: center;

          width: 80px;

          padding: 8px 16px;

          border-radius: 4px;

          box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.25);

          opacity: 0;

          font-family: "Inter var", sans-serif;
          font-size: 12px;
          font-weight: 500;

          color: ${e=>e.theme.white};
          background-color: ${e=>e.theme.black};

          animation: categorySlideDown 0.25s 0.5s ease forwards;
        }
      }
    }
  }

  .task-amout {
    position: relative;

    display: grid;
    place-items: center;

    width: 30px;
    height: 30px;

    border-radius: 10px;

    color: ${e=>e.theme.bolder};
    background-color: ${e=>e.theme.bold};

    :hover {
      .remove-category {
        opacity: 1;
        pointer-events: auto;
      }
    }

    .remove-category {
      position: absolute;

      display: grid;
      place-items: center;

      border: none;
      outline: none;

      opacity: 0;
      pointer-events: none;

      cursor: pointer;

      background-color: ${e=>e.theme.bold};

      transition: 0.25s ease;
      transition-property: opacity;

      img {
        pointer-events: none;
      }
    }
  }

  @media (max-width: 1024px) {
    width: fit-content;

    padding: 20px;

    .left {
      h3 {
        display: none;
      }

      span {
        :hover {
          background-color: transparent;
        }
      }
    }

    .task-amout {
      display: none;
    }
  }

  @media (max-width: 768px) {
    min-width: 50px;
    height: 50px;

    padding: 7.5px;

    border-radius: 10px;
  }

  @keyframes categorySlideDown {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;function Y0({category:e}){const{removeCategory:t,updateCategoryColor:n}=I.exports.useContext(Br),{path:r,changePath:o}=I.exports.useContext(mi),{tasks:i,removeTask:l}=I.exports.useContext(gi),[u,s]=I.exports.useState(""),[c,p]=I.exports.useState("008FFD"),[h,m]=I.exports.useState(""),[x,y]=I.exports.useState(!1);function w(v,k){k.stopPropagation(),v!=="/"&&($(v),o("/"))}const $=v=>{s(v),setTimeout(()=>{t(v),d(v)},250)},d=v=>{i.forEach(k=>k.category.slug===v?l(k.id):"")};function a(v,k){k.stopPropagation(),y(!x),m(v)}I.exports.useEffect(()=>{n(h,c)},[c]);const f=i.filter(v=>v.category.slug===e.slug).length;return X(Q0,{theme:hn,beingRemoved:u===e.slug,activeCategory:e.slug===r,onClick:()=>o(e.slug),children:[X("div",{className:"left",children:[C("span",{onClick:v=>a(e.slug,v),children:C("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:C("rect",{x:"1.25",y:"1.25",width:"12.5",height:"12.5",rx:"4.75",stroke:`#${e.color}`,strokeWidth:"2.5"})})}),C("h3",{children:e.title}),C(H0,{setColor:p,isSelectingColor:x,setIsSelectingColor:y})]}),X("span",{className:"task-amout",children:[C("h4",{children:f}),e.slug!=="/"&&C("button",{className:"remove-category",onClick:v=>w(e.slug,v),children:C("img",{src:sf,alt:"Remove Category",width:12})})]})]})}function af(e){const t=I.exports.useCallback(n=>{const r=n.key.toLowerCase(),o=n.ctrlKey;e.forEach(i=>{o===i.ctrlKey&&r===i.key.toLowerCase()&&(n.preventDefault(),i.handler())})},[]);I.exports.useEffect(()=>(document.addEventListener("keydown",n=>t(n)),()=>{document.removeEventListener("keydown",n=>t(n))}),[t])}var G0="/dona-clone/assets/addIcon.408931b1.svg";const K0=qt.aside`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 30vw;
  height: calc(100vh - 80px);

  align-items: center;

  gap: 10px;
  padding: 40px;

  border-radius: 20px;

  background-color: ${e=>e.theme.fg};

  nav {
    display: flex;
    flex-direction: column;

    width: 100%;

    align-items: center;

    gap: 10px;

    h3 {
      width: calc(30vw - 220px);
      overflow: hidden;

      color: ${e=>e.theme.text};
    }
  }

  form {
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 70px;

    align-items: center;

    gap: 20px;
    padding: 0 20px;

    span {
      display: grid;
      place-items: center;

      min-width: 33px;
      min-height: 33px;

      img {
        aspect-ratio: 1;
      }
    }

    input {
      outline: none;
      border: none;

      width: 100%;

      font-family: "Inter var", sans-serif;
      font-size: 14px;
      font-weight: 400;

      color: ${e=>e.theme.text};
      background-color: transparent;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;

    z-index: 1;

    bottom: 40px;

    flex-direction: row;

    width: calc(100vw - 80px);
    height: fit-content;

    justify-content: space-between;

    gap: 20px;
    padding: 20px;

    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);

    border-radius: 15px;

    nav {
      display: flex;
      flex-direction: row;

      width: 100%;

      overflow: scroll;

      ::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
    }

    form {
      width: fit-content;

      padding: 20px;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;

    nav {
      padding: 10px;
    }
  }
`;function X0(){const{categories:e,addCategory:t}=I.exports.useContext(Br),{changePath:n}=I.exports.useContext(mi),[r,o]=I.exports.useState(""),i=I.exports.useRef(null);function l(s){if(s.preventDefault(),!r||e.map(h=>h.title).includes(r))return;const c="/"+r.toLowerCase().replace(" ","-");t({title:r,slug:c,color:"6D6D6D"}),o(""),n(c)}return af([{ctrlKey:!0,key:"D",handler:()=>{var s;return(s=i.current)==null?void 0:s.focus()}},{ctrlKey:!1,key:"Escape",handler:()=>{var s;return(s=i.current)==null?void 0:s.blur()}}]),X(K0,{theme:hn,children:[C("nav",{children:e.map(s=>C(Y0,{category:{title:s.title,slug:s.slug,color:s.color}},s.slug))}),X("form",{onSubmit:l,noValidate:!0,children:[C("span",{children:C("img",{src:G0,alt:"Choose Icon",width:15})}),C("input",{type:"text",placeholder:"Create new category...",onChange:s=>o(s.target.value),value:r,ref:i})]})]})}var co,Z0=new Uint8Array(16);function J0(){if(!co&&(co=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!co))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return co(Z0)}var q0=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function b0(e){return typeof e=="string"&&q0.test(e)}var Ce=[];for(var pl=0;pl<256;++pl)Ce.push((pl+256).toString(16).substr(1));function em(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(Ce[e[t+0]]+Ce[e[t+1]]+Ce[e[t+2]]+Ce[e[t+3]]+"-"+Ce[e[t+4]]+Ce[e[t+5]]+"-"+Ce[e[t+6]]+Ce[e[t+7]]+"-"+Ce[e[t+8]]+Ce[e[t+9]]+"-"+Ce[e[t+10]]+Ce[e[t+11]]+Ce[e[t+12]]+Ce[e[t+13]]+Ce[e[t+14]]+Ce[e[t+15]]).toLowerCase();if(!b0(n))throw TypeError("Stringified UUID is invalid");return n}function tm(e,t,n){e=e||{};var r=e.random||(e.rng||J0)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return em(r)}const nm=qt.li`
  list-style: none;

  display: flex;
  flex-direction: row;

  width: 100%;
  min-height: 70px;

  align-items: center;
  justify-content: space-between;

  padding: 10px 0;
  padding-left: 20px;
  padding-right: 32px;

  border-radius: 20px;

  opacity: ${e=>e.beingRemoved?"0":"1"};
  transform: ${e=>e.beingRemoved?"translateY(-10px)":""};

  background-color: ${e=>e.theme.fg};

  transition: 0.25s ease;
  transition-property: opacity transform;

  animation: mainSlideDown 0.25s ease;

  .left {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 20px;

    padding-right: 20px;

    label {
      width: 30px;
      height: 30px;

      cursor: pointer;

      input {
        display: none;
      }

      .checkbox-div {
        display: grid;
        place-items: center;

        width: 30px;
        height: 30px;

        border-radius: 10px;

        background-color: ${e=>e.checked?e.theme.black:e.theme.bold};

        transition: 0.25s ease;
        transition-property: transform background-color;

        animation: ${e=>e.checked?"mainBounce .25s ease forwards":""};

        ::before {
          content: "";

          display: inline-block;

          height: 3px;
          width: 6px;

          border-radius: 2px;

          border-bottom: 4px solid white;
          border-left: 4px solid white;

          opacity: ${e=>e.checked?"1":"0"};
          transform: ${e=>e.checked?"rotate(-45deg) scale(1)":"rotate(-45deg) scale(0)"};

          transition: 0.25s ease;
          transition-property: transform opacity;
        }
      }
    }

    h3 {
      position: relative;

      display: grid;
      place-items: center;

      max-width: 300px;
      height: fit-content;

      word-break: break-word;
      white-space: normal;

      color: ${e=>e.theme.text};

      ::before {
        content: "";

        position: absolute;

        left: 0;

        width: ${e=>e.checked?"100%":"0%"};
        height: 2px;

        border-radius: 1px;

        background-color: ${e=>e.theme.text};

        transition: 0.25s ease 0.25s;
        transition-property: width;
      }
    }
  }

  .right {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 27px;

    .date {
      display: grid;
      place-items: center;

      height: 30px;

      padding: 0 16px;

      border-radius: 10px;

      color: ${e=>e.theme.bolder};
      background-color: ${e=>e.theme.bg};
    }

    button {
      display: grid;
      place-items: center;

      width: 35px;
      height: 35px;

      border: none;
      outline: none;

      cursor: pointer;

      border-radius: 50%;
      background-color: transparent;

      transition: 0.25s ease;
      transition-property: background-color;

      :hover {
        background-color: ${e=>e.theme.bold};
      }

      img {
        pointer-events: none;
      }
    }
  }

  @media (max-width: 768px) {
    min-height: 50px;

    border-radius: 15px;

    .left {
      label {
        width: 20px;
        height: 20px;

        .checkbox-div {
          width: 20px;
          height: 20px;

          border-radius: 5px;

          ::before {
            height: 2px;
            width: 4px;

            border-bottom: 3px solid white;
            border-left: 3px solid white;
          }
        }
      }
    }
  }

  @keyframes mainSlideDown {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes mainBounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }
`;function rm({task:e}){const{removeTask:t,updateCheckedStatus:n}=I.exports.useContext(gi),[r,o]=I.exports.useState(""),[i,l]=I.exports.useState(e.checked);function u(c){o(c),s(c)}const s=c=>{setTimeout(()=>{t(c)},250)};return I.exports.useEffect(()=>{n(e,i)},[i]),X(nm,{theme:hn,beingRemoved:r===e.id,checked:e.checked,children:[X("div",{className:"left",children:[X("label",{children:[C("input",{type:"checkbox",defaultChecked:i,onChange:()=>l(!i)}),C("div",{className:"checkbox-div"})]}),C("h3",{children:e.content})]}),X("div",{className:"right",children:[C("h4",{className:"date",children:`${e.date.split(" ")[1]} ${e.date.split(" ")[2]}`}),C("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:C("rect",{x:"1.25",y:"1.25",width:"12.5",height:"12.5",rx:"4.75",stroke:`#${e.category.color}`,strokeWidth:"2.5"})}),C("button",{onClick:()=>u(e.id),children:C("img",{src:sf,alt:"",width:15})})]})]})}var om="/dona-clone/assets/checkIcon.97d19678.svg";const im=qt.div`
  visibility: ${e=>e.isSelectingCategory?"":"hidden"};

  position: absolute;

  top: 50px;
  left: 0;

  width: 225px;
  max-height: 400px;

  border-radius: 15px;

  overflow: scroll;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  border: 1px solid ${e=>e.theme.bold};
  box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.1);

  background-color: ${e=>e.theme.fg};

  animation: ${e=>e.isSelectingCategory?"selectFadeIn .15s ease forwards":""};

  ul {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: fit-content;

    padding: 10px;
    padding-top: 20px;

    li {
      list-style: none;

      display: flex;
      flex-direction: row;

      width: 100%;
      height: 50px;

      align-items: center;

      gap: 20px;
      padding: 16px 20px;

      border-radius: 15px;

      cursor: pointer;

      transition: 0.25s ease;
      transition-property: background-color;

      :hover {
        background-color: ${e=>e.theme.bold};
      }

      img {
        pointer-events: none;
      }

      h4 {
        width: calc(100% - 60px);

        color: ${e=>e.theme.text};
      }

      #checkmark {
        position: absolute;

        right: 30px;
      }
    }
  }

  @keyframes selectFadeIn {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 0.8;
      backdrop-filter: blur(20px);
      transform: translateY(0px);
    }
  }
`;function lm({isSelectingCategory:e,setIsSelectingCategory:t,category:n,setCategory:r}){const{categories:o}=I.exports.useContext(Br),i=I.exports.useRef(null);return Gd(i,()=>t(!1)),C(im,{theme:hn,isSelectingCategory:e,ref:i,children:e&&C("ul",{children:o.map(l=>X("li",{onClick:()=>r(l),children:[C("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:C("rect",{x:"1.25",y:"1.25",width:"12.5",height:"12.5",rx:"4.75",stroke:`#${l.color}`,strokeWidth:"2.5"})}),C("h4",{children:l.title}),n.slug===l.slug&&C("img",{src:om,alt:"Chosen Category",width:10,id:"checkmark"})]},l.slug))})})}var cf="/dona-clone/assets/donaBlue.4a2239b6.svg";const um=qt.main`
  display: flex;
  flex-direction: column;

  width: calc(70vw - 120px);
  height: calc(100vh - 80px);

  align-items: center;

  #tasks-area-wrapper {
    display: flex;
    flex-direction: column;

    width: 80%;
    height: 100%;

    gap: 10px;
    padding: 40px;
    padding-bottom: 0;

    header {
      position: relative;

      display: flex;
      flex-direction: column;

      width: fit-content;
      height: fit-content;

      justify-content: center;

      margin-bottom: 30px;

      transform: translateX(60px) translateY(0px);

      animation: mainSlideDown 0.25s ease;

      img {
        position: absolute;

        left: -60px;
      }

      h1 {
        color: ${e=>e.theme.text};
      }

      h2 {
        color: ${e=>e.theme.bolder};
      }
    }

    #task-writter {
      display: flex;
      flex-direction: row;

      width: 100%;
      min-height: 70px;

      align-items: center;

      padding-left: 20px;
      padding-right: 15px;
      margin-bottom: 10px;

      border-radius: 20px;

      background-color: ${e=>e.theme.bold};

      transition: 0.25s ease;
      transition-property: background-color box-shadow;

      .left {
        display: flex;
        flex-direction: row;

        width: 100%;
        height: 100%;

        align-items: center;

        gap: 20px;

        label {
          display: grid;
          place-items: center;

          width: 30px;
          height: 30px;

          cursor: pointer;

          input {
            display: none;
          }

          .checkbox-div {
            display: grid;
            place-items: center;

            width: 30px;
            height: 30px;

            border-radius: 10px;

            background-color: ${e=>e.checked?e.theme.black:e.theme.bold};

            transform: translateX(-35px) scale(0);

            transition: 0.25s ease;
            transition-property: opacity transform background-color;

            ::before {
              content: "";

              display: inline-block;

              height: 3px;
              width: 6px;

              border-radius: 2px;

              border-bottom: 4px solid white;
              border-left: 4px solid white;

              opacity: ${e=>e.checked?"1":"0"};
              transform: ${e=>e.checked?"rotate(-45deg) scale(1)":"rotate(-45deg) scale(0)"};

              transition: 0.25s ease;
              transition-property: transform opacity;
            }
          }
        }

        form {
          width: 100%;
          height: 100%;

          overflow: hidden;

          transform: translateX(-50px);

          transition: 0.25s ease;
          transition-property: transform;

          input {
            width: 100%;
            height: 100%;

            border: none;
            outline: none;

            font-family: "Inter var", sans-serif;
            font-size: clamp(12px, 1.65vw, 16px);
            font-weight: 400;

            color: ${e=>e.theme.text};
            background-color: transparent;
          }
        }
      }

      .right {
        position: relative;

        display: flex;
        flex-direction: row;

        height: 40px;
        width: fit-content;

        align-items: center;

        gap: 12px;
        padding: 0px 12px;
        padding-right: 40px;
        margin-left: 12px;

        border-radius: 10px;

        cursor: pointer;

        color: ${e=>e.theme.bolder};
        background-color: ${e=>e.theme.bg};

        opacity: 0;
        pointer-events: none;

        transition: 0.25s ease;
        transition-property: opacity;

        h4 {
          overflow: hidden;
          white-space: nowrap;

          color: ${e=>e.theme.text};
        }

        img {
          pointer-events: none;
        }

        ::after {
          content: "";

          position: absolute;

          right: 20px;

          width: 4px;
          height: 4px;

          border-bottom: 2px solid ${e=>e.theme.darkGray};
          border-left: 2px solid ${e=>e.theme.darkGray};

          border-radius: 1px;

          transform: rotate(-45deg);

          outline: 10px solid ${e=>e.theme.bg};
        }
      }

      :focus-within,
      :active {
        background-color: ${e=>e.theme.fg};

        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);

        .left {
          label {
            pointer-events: auto;

            .checkbox-div {
              transform: translateX(0px) scale(1);
              opacity: 1;

              animation: ${e=>e.checked?"mainBounce 0.25s ease forwards":""};
            }
          }

          form {
            transform: translateX(0px);
          }
        }

        .right {
          opacity: 1;
          pointer-events: auto;
        }
      }
    }

    .category-indicator {
      display: none;

      padding-left: 20px;
    }

    ul {
      display: flex;
      flex-direction: column;

      width: 100%;
      height: 100%;

      overflow: scroll;
      white-space: nowrap;

      gap: 10px;

      ::-webkit-scrollbar {
        width: 0;
      }
    }
  }

  @media (max-width: 1024px) {
    width: 100%;

    #tasks-area-wrapper {
      padding: 0;

      header {
        transform: translateX(0px);
        padding-left: 20px;
      }

      ul .shortcuts {
        display: none;
      }

      ul {
        overflow: scroll;
        margin-bottom: 110px;
        white-space: normal;
      }
    }
  }

  @media (max-width: 768px) {
    #tasks-area-wrapper {
      header {
        transform: translateX(60px);

        animation: none;
      }
    }
  }

  @keyframes mainSlideDown {
    0% {
      transform: translateX(60px) translateY(-10px);
      opacity: 0;
    }
    100% {
      transform: translateX(60px) translateY(0px);
      opacity: 1;
    }
  }

  @keyframes mainBounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }
`,Wr=new Date,sm=()=>{const e=Wr.getHours();return e<12?"morning":e<18?"afternoon":"evening"},am=()=>Wr.getUTCDate(),cm=()=>{switch(Wr.getDay()){case 0:return"Sunday";case 1:return"Monday";case 2:return"Thuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday";default:return""}},dm=()=>{switch(Wr.getMonth()){case 0:return"Jan";case 1:return"Feb";case 2:return"Mar";case 3:return"Apr";case 4:return"May";case 5:return"Jun";case 6:return"Jul";case 7:return"Aug";case 8:return"Sep";case 9:return"Oct";case 10:return"Nov";case 11:return"Dec";default:return""}};Wr.toString().split(" ")[2];function fm(){var d;const{categories:e}=I.exports.useContext(Br),{path:t}=I.exports.useContext(mi),{addTask:n,tasks:r}=I.exports.useContext(gi),{user:o}=I.exports.useContext(hi),[i,l]=I.exports.useState(""),[u,s]=I.exports.useState(!1),[c,p]=I.exports.useState(e[0]),[h,m]=I.exports.useState(!1);function x(a){if(a.preventDefault(),!i)return;const f=new Date,v={category:c,checked:u,content:i,date:f.toString(),id:tm()};n(v),l("")}const y=I.exports.useRef(null);I.exports.useEffect(()=>{var a;(a=y.current)==null||a.focus()},[u,h]),I.exports.useEffect(()=>{var a;(a=y.current)==null||a.blur()},[]);const w=r.filter(a=>a.category.slug===t);return af([{ctrlKey:!0,key:"S",handler:()=>{var a;return(a=y.current)==null?void 0:a.focus()}},{ctrlKey:!1,key:"Escape",handler:()=>{var a;return(a=y.current)==null?void 0:a.blur()}}]),I.exports.useEffect(()=>{const a=e.filter(f=>f.slug===t)[0];p(a)},[t,e]),C(um,{theme:hn,checked:u,children:X("div",{id:"tasks-area-wrapper",children:[t==="/"&&X("header",{children:[C("img",{src:cf,alt:"Dona Logo",width:35}),X("h1",{children:["Good ",sm(),", ",o.name]}),X("h2",{children:["It's ",cm(),", ",dm()," ",am()]})]}),C("h1",{className:"category-indicator",children:(d=e.filter(a=>a.slug===t)[0])==null?void 0:d.title}),X("div",{id:"task-writter",onClick:()=>{var a;return(a=y.current)==null?void 0:a.focus()},children:[X("div",{className:"left",children:[X("label",{children:[C("input",{type:"checkbox",defaultChecked:u,onChange:()=>s(!u)}),C("div",{className:"checkbox-div"})]}),C("form",{noValidate:!0,onSubmit:x,children:C("input",{type:"text",placeholder:"Write a new task...",onChange:a=>l(a.target.value),value:i,ref:y})})]}),X("div",{className:"right",onClick:()=>m(!h),children:[C("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:C("rect",{x:"1.25",y:"1.25",width:"12.5",height:"12.5",rx:"4.75",stroke:`#${c.color}`,strokeWidth:"2.5"})}),C("h4",{children:c.title}),C(lm,{category:c,setCategory:p,isSelectingCategory:h,setIsSelectingCategory:m})]})]}),C("ul",{children:w.reverse().map(a=>C(rm,{task:{category:a.category,checked:a.checked,content:a.content,date:a.date,id:a.id}},a.id))})]})})}var pm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABlCAYAAABUfC3PAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATySURBVHgB7ZxfTuMwEManYZGQ4KF7g/QBAW/0BFtOsNoTwJ5guQHlBtyA7glWnIByAngDykNzg+1ThZCAnem6VUv/ZRzHGeP5SVFLSZRMvtixx/ZXA0tub2/rW1tbh/g1NdsyMtqen5/vms3mAALFZ7w1zs50YTs7O7/e399btAGTWq3WxeM6b29vNwcHBxkIp6p4c4lyf3+fJknSxq/H4Ai84M7r6+u5RHGqjnetKL1ej56UNn6tQwlQ8Lu7u+cgBAnxLhWFiu729vYfm2LLhYo5PkU/qyw1kuJdKIopvtew+oXmmgzr3qMqhJEWb/Lxh4oukBidl55Y8IjEeOdE2djYuAT/FzgmpSoEPCIx3hlRnp6eznzUqaug8z88PJyCB6TGO3mnmGLcBxkMsL5tlvl+kRzvpKSYdrkU6litnEGJSI53VFKEPTUThsPh1zJSM9Lj/WL+boElWCdm+HGFn3M3D9vjddy+g+WLFHNNVNe2wT0tsMRHvCNRsOgc40mACbWzqQPUXbPfKT6ZJ/hkUvFMgQFe1zcoAenx1vr9fv3l5eUv8GB39Gz7A66rsBDiTTDFfAh82tyWEe1PTxowMelyZ4QQL7W+UuCR7e3t/QYLTNHPgEcKbkmBh/d42aJgXXwFBbA4PgW3pJydq4g3YR4Ai1odPo/3TRXxskVRykdFEYiKIhAVRSBsUSiVAEpubO4XiZJxDjC5HSUnFvcrY4uCpJhCaIGyFsqBgUVnNcFu/R0wwZzOJeV2QFmKyX2xx4RoZmXSaDQGNOUFeIySbY+Pj84mq30mqCaxSUZiR7NLydfxIFfbRlVDRqmEvD1XSk9zxsXNHKkbcESZ5y86noKcUJ5tJIplOltxDGaVG5RdHjWJqQrDH6wyoYobaCL43MQJ+D/sGuxShdBBUSbziyeikErT/1D8gbXUzGz8ubnEvV7vuuoJajFBLa79/f2j6d/m0iybm5s/gN+hVOyg2mluyHhOFPPSJ+UyUMok/6x7wgz6H1l0KpUcUJU1HA6brPUp0xTsWCqzDKgxhe+Qi1U75V7ziB8kjqZVLKF+CAniZM3jNEacFlZrx7i1QFkJVVO43WCS8YIzoZAlyjSMdeUzfObclyGDguvov4Al5oRdYGLeUa28+9MNwSLfBkdUff486Bi9QFQUgagoAlFRBKKiCERFEYiKIhAVRSAqikBUFIGoKAJRUQSioghERRGIiiIQFUUgKopAVBSB6Bi9+/NnEJLXfWwE53UfG0F53cdGMF73sRGS131sBOF1HxvBeN3HRhhe97ERktd9bAThdR8b4Xjdx4YXr/tFqDfLcnx63c8QwfqUwl73CZnlWLS4xh2fLihz4H3p2Cx7Jx2o3+LN6z42gvG6j41gvO5jIwiv+9hQr/tPgooiEBVFICqKQLx73YfmlV9FvN697m2838EtGWfnKuL16nVv6/0ObsmAh/d4vXndF/F+B4eEEK8Xr/ui3u/gkBDiHaXuKT3NSWePLxS3Dl5oe5nXfdHxBZpVCCUgPV7RXvdj73dwjPR4xXrdT3u/u0Z6vGK97j1YvLdBaLwive4/er+XgeR4xXndL/J+LxOJ8Urzul/o/V4mEuOV5HW/dBZ6mUiMV4TX/Trv97KRFm/VXve5vN99IiHeyrzuOd7vvqk6Xq9e97be71VRVbw+1tFnUHBduQR8xvsP6NeLmHTiMwoAAAAASUVORK5CYII=",hm="/dona-clone/assets/donaLists.d749d46d.png";const mm=qt.div`
  position: absolute;

  z-index: 1;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  margin: auto;

  display: grid;
  place-items: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);

  #modal {
    display: flex;
    flex-direction: column;

    width: 500px;
    height: 500px;

    justify-content: space-between;

    padding: 40px;

    border-radius: 20px;

    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);

    background: ${e=>e.activeWelcomePage===1?"linear-gradient(200deg, rgba(171, 218, 254, 1) 0%, rgba(255, 255, 255, 1) 50%)":""};

    background: ${e=>e.activeWelcomePage===2?"linear-gradient(200deg, rgba(184,235,205,1) 0%, rgba(255, 255, 255, 1) 50%)":""};

    background: ${e=>e.activeWelcomePage===3?"linear-gradient(200deg, rgba(221,179,253,1) 0%, rgba(255, 255, 255, 1) 50%)":""};

    background: ${e=>e.activeWelcomePage===4?"linear-gradient(200deg, rgba(180,174,250,1) 0%, rgba(255, 255, 255, 1) 50%)":""};

    .modal-top-animation {
      animation: welcomeSlideDown 1s ease-out forwards;
    }

    #modal-top {
      display: grid;
      place-items: center;

      height: 50%;

      img {
        padding: 20px;

        border-radius: 20px;

        box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);

        background-color: white;
      }

      .second-image {
        width: 300px;
      }

      .third-image {
        animation: welcomeBounce 0.5s 1.25s ease;
      }

      .fourth-image {
        display: grid;
        place-items: center;

        width: 100px;
        height: 100px;

        border-radius: 20px;

        box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);

        background-color: white;

        animation: welcomeBounce 0.5s 1.25s ease;

        svg path {
          opacity: 0;

          stroke-dasharray: 640;
          stroke-dashoffset: 0;
          animation: welcomeDrawStroke 2s 0.25s forwards;
        }
      }
    }

    #modal-bottom {
      position: relative;

      display: flex;
      flex-direction: column;

      height: 50%;

      justify-content: center;

      gap: 20px;

      .span-animation {
        animation: welcomeSlideLeft 1s ease forwards;
      }

      span {
        display: flex;
        flex-direction: column;

        gap: 4px;

        h2 {
          font-weight: 600;
        }
        h3 {
          width: 60%;
          font-size: 14px;
          color: gray;
        }
        input {
          width: fit-content;

          padding: 4px 0;

          outline: none;
          border: none;

          border-bottom: 1px solid;
          border-color: transparent;

          font-family: "Inter var", sans-serif;
          font-weight: 400;
          font-size: 16px;

          color: #6d6d6d;
          background-color: transparent;

          transition: 0.25s ease;
          transition-property: border-color;

          :active,
          :focus {
            border-color: #d9d9d9;
          }

          ::placeholder {
            color: #d9d9d9;
          }
        }
      }

      .nav-buttons {
        display: flex;
        flex-direction: row;

        gap: 10px;

        button {
          width: fit-content;

          outline: none;
          border: none;

          padding: 12px 24px;

          font-family: "Inter var", sans-serif;

          border-radius: 10px;

          cursor: pointer;

          color: white;
          background-color: #008ffd;

          transition: 0.25s ease;
          transition-property: background-color;

          :hover {
            background-color: #0072ca;
          }
        }

        a {
          display: flex;
          flex-direction: row;

          width: fit-content;

          gap: 10px;
          padding: 12px 24px;

          outline: none;
          border: 1px solid transparent;
          border-color: #008ffd;

          font-family: "Inter var", sans-serif;
          font-size: 14px;
          text-decoration: none;

          border-radius: 10px;

          cursor: pointer;

          color: #008ffd;
          background-color: transparent;

          transition: 0.25s ease;
          transition-property: border-color color background-color;

          :hover {
            border-color: #0072ca;
            color: #0072ca;
            background-color: #d9d9d9;

            svg {
              fill: #0072ca;
            }
          }

          svg {
            position: relative;

            fill: #008ffd;
          }
        }
      }

      svg {
        position: absolute;

        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }

  @keyframes welcomeBounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes welcomeSlideDown {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes welcomeSlideLeft {
    0% {
      opacity: 0;
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @keyframes welcomeDrawStroke {
    0% {
      stroke-dashoffset: 640;
      opacity: 0;
    }
    10% {
      stroke-dashoffset: 640;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
`;function gm(){const{registerUser:e}=I.exports.useContext(hi),[t,n]=I.exports.useState(1),[r,o]=I.exports.useState(""),[i,l]=I.exports.useState(!0);function u(){if(r){e(r);return}t>=4||(n(p=>p+1),l(!0))}const s=()=>{switch(t){case 1:return{title:"Welcome to Dona Clone",subtitle:"Dona is a back to-do list focused on fast and delightful user experience.",image:cf};case 2:return{title:"Powerful lists",subtitle:"Organize your tasks into fully customizable lists.",image:hm};case 3:return{title:"We have shortcuts",subtitle:"Dona offers a lot of shortcuts. Test them out.",image:pm};case 4:return{title:"What's your name?",subtitle:"",image:""};default:return{title:"",subtitle:"",image:""}}},c=()=>{switch(t){case 1:return"";case 2:return"second-image";case 3:return"third-image";case 4:return"fourth-image";default:return}};return C(mm,{activeWelcomePage:t,onAnimationEnd:()=>l(!1),children:X("div",{id:"modal",children:[X("div",{id:"modal-top",className:i?"modal-top-animation":"",children:[t!==4&&C("img",{src:s().image,alt:"Dona",width:100,className:c()}),t===4&&C("span",{className:c(),children:C("svg",{width:"62",height:"42",viewBox:"0 0 62 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:C("path",{d:"M6 16.9091L24.7439 35.3121C25.1328 35.6941 25.756 35.6941 26.145 35.3121L56 6",stroke:"#6d6d6d","stroke-width":"10","stroke-linecap":"round"})})})]}),X("div",{id:"modal-bottom",children:[X("span",{className:i?"span-animation ":"",children:[C("h2",{children:s().title}),C("h3",{children:s().subtitle}),t===4&&C("input",{type:"text",placeholder:"Type it here...",onChange:p=>o(p.target.value)})]}),X("span",{className:"nav-buttons",children:[C("button",{onClick:u,children:"Continue"}),t===4&&X("a",{href:"https://github.com/antoniopataro/dona-clone",target:"_blank",children:[C("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:C("path",{d:"M7.5 0C3.35812 0 0 3.4107 0 7.61744C0 11.1868 2.42 14.1735 5.6825 15C5.6475 14.8972 5.625 14.7778 5.625 14.6299V13.328C5.32062 13.328 4.81062 13.328 4.6825 13.328C4.16938 13.328 3.71312 13.1039 3.49188 12.6875C3.24624 12.2247 3.20374 11.5169 2.595 11.084C2.41438 10.9399 2.55188 10.7755 2.76 10.7977C3.14438 10.9082 3.46312 11.176 3.76312 11.5734C4.06188 11.9714 4.2025 12.0616 4.76062 12.0616C5.03124 12.0616 5.43624 12.0457 5.8175 11.9848C6.0225 11.456 6.37688 10.9691 6.81 10.7393C4.3125 10.4784 3.12062 9.21646 3.12062 7.50318C3.12062 6.76555 3.43 6.05205 3.95562 5.45091C3.78312 4.85421 3.56626 3.63733 4.02188 3.17393C5.14562 3.17393 5.825 3.9141 5.98812 4.11406C6.54812 3.91918 7.16312 3.80872 7.80938 3.80872C8.45688 3.80872 9.07438 3.91918 9.63562 4.11532C9.79688 3.91664 10.4769 3.17393 11.6031 3.17393C12.0606 3.63795 11.8412 4.85993 11.6669 5.45535C12.1894 6.05523 12.4969 6.76683 12.4969 7.50318C12.4969 9.2152 11.3069 10.4765 8.81312 10.7387C9.49938 11.1024 10 12.1244 10 12.8944V14.6299C10 14.6959 9.98562 14.7436 9.97812 14.8C12.9006 13.7596 15 10.9412 15 7.61744C15 3.4107 11.6419 0 7.5 0Z"})}),C("span",{children:"Github"})]})]}),X("svg",{viewBox:"0 0 70 10",width:"70",height:"10",children:[C("circle",{cx:"5",cy:"5",r:"5",fill:t===1?"#008FFD":"#d9d9d9"}),C("circle",{cx:"25",cy:"5",r:"5",fill:t===2?"#008FFD":"#d9d9d9"}),C("circle",{cx:"45",cy:"5",r:"5",fill:t===3?"#008FFD":"#d9d9d9"}),C("circle",{cx:"65",cy:"5",r:"5",fill:t===4?"#008FFD":"#d9d9d9"})]})]})]})})}const hn={bg:"#EAEDEE",fg:"#FFF",bold:"#d9d9d9",bolder:"#6d6d6d",text:"#000",shadow:"rgba(0,0,0,0.5)",shadowInverted:"rgba(255,255,255,1)",white:"#FFF",black:"#000"},vm=qt.main`
  display: flex;
  flex-direction: row;

  max-width: 100vw;
  max-height: 100vh;

  align-items: center;
  justify-content: space-between;

  padding: 40px;

  background-color: ${e=>e.theme.bg};

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;function ym(){const{user:e}=I.exports.useContext(hi);return X(vm,{theme:hn,children:[C(X0,{}),C(fm,{}),!e.name&&C(gm,{})]})}function wm({children:e}){return C(jh,{children:C(Bh,{children:C(Uh,{children:C(Dh,{children:e})})})})}hl.createRoot(document.getElementById("root")).render(C(Fr.StrictMode,{children:C(wm,{children:C(ym,{})})}));
