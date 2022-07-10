const uf=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};uf();var O={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fr=Symbol.for("react.element"),sf=Symbol.for("react.portal"),af=Symbol.for("react.fragment"),cf=Symbol.for("react.strict_mode"),df=Symbol.for("react.profiler"),ff=Symbol.for("react.provider"),pf=Symbol.for("react.context"),hf=Symbol.for("react.forward_ref"),mf=Symbol.for("react.suspense"),gf=Symbol.for("react.memo"),vf=Symbol.for("react.lazy"),fs=Symbol.iterator;function yf(e){return e===null||typeof e!="object"?null:(e=fs&&e[fs]||e["@@iterator"],typeof e=="function"?e:null)}var Ra={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},La=Object.assign,Ia={};function Qn(e,t,n){this.props=e,this.context=t,this.refs=Ia,this.updater=n||Ra}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Oa(){}Oa.prototype=Qn.prototype;function su(e,t,n){this.props=e,this.context=t,this.refs=Ia,this.updater=n||Ra}var au=su.prototype=new Oa;au.constructor=su;La(au,Qn.prototype);au.isPureReactComponent=!0;var ps=Array.isArray,Fa=Object.prototype.hasOwnProperty,cu={current:null},Da={key:!0,ref:!0,__self:!0,__source:!0};function Ma(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Fa.call(t,r)&&!Da.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(u===1)o.children=n;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)o[r]===void 0&&(o[r]=u[r]);return{$$typeof:Fr,type:e,key:i,ref:l,props:o,_owner:cu.current}}function wf(e,t){return{$$typeof:Fr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function du(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fr}function xf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var hs=/\/+/g;function Oi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xf(""+e.key):t.toString(36)}function co(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Fr:case sf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Oi(l,0):r,ps(o)?(n="",e!=null&&(n=e.replace(hs,"$&/")+"/"),co(o,t,n,"",function(c){return c})):o!=null&&(du(o)&&(o=wf(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(hs,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",ps(e))for(var u=0;u<e.length;u++){i=e[u];var s=r+Oi(i,u);l+=co(i,t,n,s,o)}else if(s=yf(e),typeof s=="function")for(e=s.call(e),u=0;!(i=e.next()).done;)i=i.value,s=r+Oi(i,u++),l+=co(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Hr(e,t,n){if(e==null)return e;var r=[],o=0;return co(e,r,"","",function(i){return t.call(n,i,o++)}),r}function kf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},fo={transition:null},Sf={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:fo,ReactCurrentOwner:cu};V.Children={map:Hr,forEach:function(e,t,n){Hr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Hr(e,function(){t++}),t},toArray:function(e){return Hr(e,function(t){return t})||[]},only:function(e){if(!du(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Qn;V.Fragment=af;V.Profiler=df;V.PureComponent=su;V.StrictMode=cf;V.Suspense=mf;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sf;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=La({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=cu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)Fa.call(t,s)&&!Da.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&u!==void 0?u[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){u=Array(s);for(var c=0;c<s;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:Fr,type:e.type,key:o,ref:i,props:r,_owner:l}};V.createContext=function(e){return e={$$typeof:pf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ff,_context:e},e.Consumer=e};V.createElement=Ma;V.createFactory=function(e){var t=Ma.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:hf,render:e}};V.isValidElement=du;V.lazy=function(e){return{$$typeof:vf,_payload:{_status:-1,_result:e},_init:kf}};V.memo=function(e,t){return{$$typeof:gf,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=fo.transition;fo.transition={};try{e()}finally{fo.transition=t}};V.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};V.useCallback=function(e,t){return Fe.current.useCallback(e,t)};V.useContext=function(e){return Fe.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};V.useEffect=function(e,t){return Fe.current.useEffect(e,t)};V.useId=function(){return Fe.current.useId()};V.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Fe.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};V.useRef=function(e){return Fe.current.useRef(e)};V.useState=function(e){return Fe.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Fe.current.useTransition()};V.version="18.2.0";O.exports=V;var Dr=O.exports,cl={},ja={exports:{}},Ge={},Ua={exports:{}},Ba={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,F){var D=E.length;E.push(F);e:for(;0<D;){var b=D-1>>>1,_=E[b];if(0<o(_,F))E[b]=F,E[D]=_,D=b;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var F=E[0],D=E.pop();if(D!==F){E[0]=D;e:for(var b=0,_=E.length,T=_>>>1;b<T;){var L=2*(b+1)-1,M=E[L],g=L+1,W=E[g];if(0>o(M,D))g<_&&0>o(W,M)?(E[b]=W,E[g]=D,b=g):(E[b]=M,E[L]=D,b=L);else if(g<_&&0>o(W,D))E[b]=W,E[g]=D,b=g;else break e}}return F}function o(E,F){var D=E.sortIndex-F.sortIndex;return D!==0?D:E.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var s=[],c=[],m=1,p=null,h=3,k=!1,y=!1,w=!1,z=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var F=n(c);F!==null;){if(F.callback===null)r(c);else if(F.startTime<=E)r(c),F.sortIndex=F.expirationTime,t(s,F);else break;F=n(c)}}function v(E){if(w=!1,f(E),!y)if(n(s)!==null)y=!0,yt(x);else{var F=n(c);F!==null&&Le(v,F.startTime-E)}}function x(E,F){y=!1,w&&(w=!1,d(A),A=-1),k=!0;var D=h;try{for(f(F),p=n(s);p!==null&&(!(p.expirationTime>F)||E&&!me());){var b=p.callback;if(typeof b=="function"){p.callback=null,h=p.priorityLevel;var _=b(p.expirationTime<=F);F=e.unstable_now(),typeof _=="function"?p.callback=_:p===n(s)&&r(s),f(F)}else r(s);p=n(s)}if(p!==null)var T=!0;else{var L=n(c);L!==null&&Le(v,L.startTime-F),T=!1}return T}finally{p=null,h=D,k=!1}}var C=!1,$=null,A=-1,R=5,j=-1;function me(){return!(e.unstable_now()-j<R)}function fe(){if($!==null){var E=e.unstable_now();j=E;var F=!0;try{F=$(!0,E)}finally{F?we():(C=!1,$=null)}}else C=!1}var we;if(typeof a=="function")we=function(){a(fe)};else if(typeof MessageChannel!="undefined"){var He=new MessageChannel,Ne=He.port2;He.port1.onmessage=fe,we=function(){Ne.postMessage(null)}}else we=function(){z(fe,0)};function yt(E){$=E,C||(C=!0,we())}function Le(E,F){A=z(function(){E(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||k||(y=!0,yt(x))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var D=h;h=F;try{return E()}finally{h=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,F){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var D=h;h=E;try{return F()}finally{h=D}},e.unstable_scheduleCallback=function(E,F,D){var b=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?b+D:b):D=b,E){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=D+_,E={id:m++,callback:F,priorityLevel:E,startTime:D,expirationTime:_,sortIndex:-1},D>b?(E.sortIndex=D,t(c,E),n(s)===null&&E===n(c)&&(w?(d(A),A=-1):w=!0,Le(v,D-b))):(E.sortIndex=_,t(s,E),y||k||(y=!0,yt(x))),E},e.unstable_shouldYield=me,e.unstable_wrapCallback=function(E){var F=h;return function(){var D=h;h=F;try{return E.apply(this,arguments)}finally{h=D}}}})(Ba);Ua.exports=Ba;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=O.exports,Xe=Ua.exports;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wa=new Set,yr={};function pn(e,t){Fn(e,t),Fn(e+"Capture",t)}function Fn(e,t){for(yr[e]=t,e=0;e<t.length;e++)Wa.add(t[e])}var Pt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),dl=Object.prototype.hasOwnProperty,Cf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ms={},gs={};function Ef(e){return dl.call(gs,e)?!0:dl.call(ms,e)?!1:Cf.test(e)?gs[e]=!0:(ms[e]=!0,!1)}function Pf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _f(e,t,n,r){if(t===null||typeof t=="undefined"||Pf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var fu=/[\-:]([a-z])/g;function pu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fu,pu);_e[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fu,pu);_e[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fu,pu);_e[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function hu(e,t,n,r){var o=_e.hasOwnProperty(t)?_e[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_f(t,n,o,r)&&(n=null),r||o===null?Ef(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var At=Va.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),vn=Symbol.for("react.portal"),yn=Symbol.for("react.fragment"),mu=Symbol.for("react.strict_mode"),fl=Symbol.for("react.profiler"),Ha=Symbol.for("react.provider"),Qa=Symbol.for("react.context"),gu=Symbol.for("react.forward_ref"),pl=Symbol.for("react.suspense"),hl=Symbol.for("react.suspense_list"),vu=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),Ya=Symbol.for("react.offscreen"),vs=Symbol.iterator;function Zn(e){return e===null||typeof e!="object"?null:(e=vs&&e[vs]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,Fi;function or(e){if(Fi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fi=t&&t[1]||""}return`
`+Fi+e}var Di=!1;function Mi(e,t){if(!e||Di)return"";Di=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,u=i.length-1;1<=l&&0<=u&&o[l]!==i[u];)u--;for(;1<=l&&0<=u;l--,u--)if(o[l]!==i[u]){if(l!==1||u!==1)do if(l--,u--,0>u||o[l]!==i[u]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=u);break}}}finally{Di=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?or(e):""}function Nf(e){switch(e.tag){case 5:return or(e.type);case 16:return or("Lazy");case 13:return or("Suspense");case 19:return or("SuspenseList");case 0:case 2:case 15:return e=Mi(e.type,!1),e;case 11:return e=Mi(e.type.render,!1),e;case 1:return e=Mi(e.type,!0),e;default:return""}}function ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yn:return"Fragment";case vn:return"Portal";case fl:return"Profiler";case mu:return"StrictMode";case pl:return"Suspense";case hl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qa:return(e.displayName||"Context")+".Consumer";case Ha:return(e._context.displayName||"Context")+".Provider";case gu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vu:return t=e.displayName||null,t!==null?t:ml(e.type)||"Memo";case Lt:t=e._payload,e=e._init;try{return ml(e(t))}catch{}}return null}function $f(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ml(t);case 8:return t===mu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ka(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Af(e){var t=Ka(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yr(e){e._valueTracker||(e._valueTracker=Af(e))}function Xa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ka(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Eo(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function gl(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function ys(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ga(e,t){t=t.checked,t!=null&&hu(e,"checked",t,!1)}function vl(e,t){Ga(e,t);var n=Xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yl(e,t.type,n):t.hasOwnProperty("defaultValue")&&yl(e,t.type,Xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ws(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yl(e,t,n){(t!=="number"||Eo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ir=Array.isArray;function Tn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function wl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(ir(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xt(n)}}function Za(e,t){var n=Xt(t.value),r=Xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ks(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ja(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ja(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kr,qa=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Kr=Kr||document.createElement("div"),Kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tf=["Webkit","ms","Moz","O"];Object.keys(sr).forEach(function(e){Tf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),sr[t]=sr[e]})});function ba(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||sr.hasOwnProperty(e)&&sr[e]?(""+t).trim():t+"px"}function ec(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ba(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var zf=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kl(e,t){if(t){if(zf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Sl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cl=null;function yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var El=null,zn=null,Rn=null;function Ss(e){if(e=Ur(e)){if(typeof El!="function")throw Error(S(280));var t=e.stateNode;t&&(t=ei(t),El(e.stateNode,e.type,t))}}function tc(e){zn?Rn?Rn.push(e):Rn=[e]:zn=e}function nc(){if(zn){var e=zn,t=Rn;if(Rn=zn=null,Ss(e),t)for(e=0;e<t.length;e++)Ss(t[e])}}function rc(e,t){return e(t)}function oc(){}var ji=!1;function ic(e,t,n){if(ji)return e(t,n);ji=!0;try{return rc(e,t,n)}finally{ji=!1,(zn!==null||Rn!==null)&&(oc(),nc())}}function xr(e,t){var n=e.stateNode;if(n===null)return null;var r=ei(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Pl=!1;if(Pt)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){Pl=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{Pl=!1}function Rf(e,t,n,r,o,i,l,u,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var ar=!1,Po=null,_o=!1,_l=null,Lf={onError:function(e){ar=!0,Po=e}};function If(e,t,n,r,o,i,l,u,s){ar=!1,Po=null,Rf.apply(Lf,arguments)}function Of(e,t,n,r,o,i,l,u,s){if(If.apply(this,arguments),ar){if(ar){var c=Po;ar=!1,Po=null}else throw Error(S(198));_o||(_o=!0,_l=c)}}function hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cs(e){if(hn(e)!==e)throw Error(S(188))}function Ff(e){var t=e.alternate;if(!t){if(t=hn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Cs(o),e;if(i===r)return Cs(o),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,u=o.child;u;){if(u===n){l=!0,n=o,r=i;break}if(u===r){l=!0,r=o,n=i;break}u=u.sibling}if(!l){for(u=i.child;u;){if(u===n){l=!0,n=i,r=o;break}if(u===r){l=!0,r=i,n=o;break}u=u.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function uc(e){return e=Ff(e),e!==null?sc(e):null}function sc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sc(e);if(t!==null)return t;e=e.sibling}return null}var ac=Xe.unstable_scheduleCallback,Es=Xe.unstable_cancelCallback,Df=Xe.unstable_shouldYield,Mf=Xe.unstable_requestPaint,ce=Xe.unstable_now,jf=Xe.unstable_getCurrentPriorityLevel,wu=Xe.unstable_ImmediatePriority,cc=Xe.unstable_UserBlockingPriority,No=Xe.unstable_NormalPriority,Uf=Xe.unstable_LowPriority,dc=Xe.unstable_IdlePriority,Zo=null,gt=null;function Bf(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Zo,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:Hf,Vf=Math.log,Wf=Math.LN2;function Hf(e){return e>>>=0,e===0?32:31-(Vf(e)/Wf|0)|0}var Xr=64,Gr=4194304;function lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $o(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~o;u!==0?r=lr(u):(i&=l,i!==0&&(r=lr(i)))}else l=n&~o,l!==0?r=lr(l):i!==0&&(r=lr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),o=1<<n,r|=e[n],t&=~o;return r}function Qf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ct(i),u=1<<l,s=o[l];s===-1?((u&n)===0||(u&r)!==0)&&(o[l]=Qf(u,t)):s<=t&&(e.expiredLanes|=u),i&=~u}}function Nl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fc(){var e=Xr;return Xr<<=1,(Xr&4194240)===0&&(Xr=64),e}function Ui(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Mr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function Kf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ct(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function xu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Z=0;function pc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var hc,ku,mc,gc,vc,$l=!1,Zr=[],jt=null,Ut=null,Bt=null,kr=new Map,Sr=new Map,Ot=[],Xf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ps(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sr.delete(t.pointerId)}}function qn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ur(t),t!==null&&ku(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Gf(e,t,n,r,o){switch(t){case"focusin":return jt=qn(jt,e,t,n,r,o),!0;case"dragenter":return Ut=qn(Ut,e,t,n,r,o),!0;case"mouseover":return Bt=qn(Bt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return kr.set(i,qn(kr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Sr.set(i,qn(Sr.get(i)||null,e,t,n,r,o)),!0}return!1}function yc(e){var t=nn(e.target);if(t!==null){var n=hn(t);if(n!==null){if(t=n.tag,t===13){if(t=lc(n),t!==null){e.blockedOn=t,vc(e.priority,function(){mc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Al(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Cl=r,n.target.dispatchEvent(r),Cl=null}else return t=Ur(n),t!==null&&ku(t),e.blockedOn=n,!1;t.shift()}return!0}function _s(e,t,n){po(e)&&n.delete(t)}function Zf(){$l=!1,jt!==null&&po(jt)&&(jt=null),Ut!==null&&po(Ut)&&(Ut=null),Bt!==null&&po(Bt)&&(Bt=null),kr.forEach(_s),Sr.forEach(_s)}function bn(e,t){e.blockedOn===t&&(e.blockedOn=null,$l||($l=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,Zf)))}function Cr(e){function t(o){return bn(o,e)}if(0<Zr.length){bn(Zr[0],e);for(var n=1;n<Zr.length;n++){var r=Zr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jt!==null&&bn(jt,e),Ut!==null&&bn(Ut,e),Bt!==null&&bn(Bt,e),kr.forEach(t),Sr.forEach(t),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)yc(n),n.blockedOn===null&&Ot.shift()}var Ln=At.ReactCurrentBatchConfig,Ao=!0;function Jf(e,t,n,r){var o=Z,i=Ln.transition;Ln.transition=null;try{Z=1,Su(e,t,n,r)}finally{Z=o,Ln.transition=i}}function qf(e,t,n,r){var o=Z,i=Ln.transition;Ln.transition=null;try{Z=4,Su(e,t,n,r)}finally{Z=o,Ln.transition=i}}function Su(e,t,n,r){if(Ao){var o=Al(e,t,n,r);if(o===null)Zi(e,t,r,To,n),Ps(e,r);else if(Gf(o,e,t,n,r))r.stopPropagation();else if(Ps(e,r),t&4&&-1<Xf.indexOf(e)){for(;o!==null;){var i=Ur(o);if(i!==null&&hc(i),i=Al(e,t,n,r),i===null&&Zi(e,t,r,To,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Zi(e,t,r,null,n)}}var To=null;function Al(e,t,n,r){if(To=null,e=yu(r),e=nn(e),e!==null)if(t=hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return To=e,null}function wc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jf()){case wu:return 1;case cc:return 4;case No:case Uf:return 16;case dc:return 536870912;default:return 16}default:return 16}}var Dt=null,Cu=null,ho=null;function xc(){if(ho)return ho;var e,t=Cu,n=t.length,r,o="value"in Dt?Dt.value:Dt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return ho=o.slice(e,1<r?1-r:void 0)}function mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jr(){return!0}function Ns(){return!1}function Ze(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Jr:Ns,this.isPropagationStopped=Ns,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jr)},persist:function(){},isPersistent:Jr}),t}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eu=Ze(Yn),jr=le({},Yn,{view:0,detail:0}),bf=Ze(jr),Bi,Vi,er,Jo=le({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==er&&(er&&e.type==="mousemove"?(Bi=e.screenX-er.screenX,Vi=e.screenY-er.screenY):Vi=Bi=0,er=e),Bi)},movementY:function(e){return"movementY"in e?e.movementY:Vi}}),$s=Ze(Jo),ep=le({},Jo,{dataTransfer:0}),tp=Ze(ep),np=le({},jr,{relatedTarget:0}),Wi=Ze(np),rp=le({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),op=Ze(rp),ip=le({},Yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lp=Ze(ip),up=le({},Yn,{data:0}),As=Ze(up),sp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ap={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cp[e])?!!t[e]:!1}function Pu(){return dp}var fp=le({},jr,{key:function(e){if(e.key){var t=sp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ap[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pu,charCode:function(e){return e.type==="keypress"?mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pp=Ze(fp),hp=le({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ts=Ze(hp),mp=le({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pu}),gp=Ze(mp),vp=le({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),yp=Ze(vp),wp=le({},Jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xp=Ze(wp),kp=[9,13,27,32],_u=Pt&&"CompositionEvent"in window,cr=null;Pt&&"documentMode"in document&&(cr=document.documentMode);var Sp=Pt&&"TextEvent"in window&&!cr,kc=Pt&&(!_u||cr&&8<cr&&11>=cr),zs=String.fromCharCode(32),Rs=!1;function Sc(e,t){switch(e){case"keyup":return kp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wn=!1;function Cp(e,t){switch(e){case"compositionend":return Cc(t);case"keypress":return t.which!==32?null:(Rs=!0,zs);case"textInput":return e=t.data,e===zs&&Rs?null:e;default:return null}}function Ep(e,t){if(wn)return e==="compositionend"||!_u&&Sc(e,t)?(e=xc(),ho=Cu=Dt=null,wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kc&&t.locale!=="ko"?null:t.data;default:return null}}var Pp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pp[e.type]:t==="textarea"}function Ec(e,t,n,r){tc(r),t=zo(t,"onChange"),0<t.length&&(n=new Eu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var dr=null,Er=null;function _p(e){Oc(e,0)}function qo(e){var t=Sn(e);if(Xa(t))return e}function Np(e,t){if(e==="change")return t}var Pc=!1;if(Pt){var Hi;if(Pt){var Qi="oninput"in document;if(!Qi){var Is=document.createElement("div");Is.setAttribute("oninput","return;"),Qi=typeof Is.oninput=="function"}Hi=Qi}else Hi=!1;Pc=Hi&&(!document.documentMode||9<document.documentMode)}function Os(){dr&&(dr.detachEvent("onpropertychange",_c),Er=dr=null)}function _c(e){if(e.propertyName==="value"&&qo(Er)){var t=[];Ec(t,Er,e,yu(e)),ic(_p,t)}}function $p(e,t,n){e==="focusin"?(Os(),dr=t,Er=n,dr.attachEvent("onpropertychange",_c)):e==="focusout"&&Os()}function Ap(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qo(Er)}function Tp(e,t){if(e==="click")return qo(t)}function zp(e,t){if(e==="input"||e==="change")return qo(t)}function Rp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Rp;function Pr(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!dl.call(t,o)||!ft(e[o],t[o]))return!1}return!0}function Fs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ds(e,t){var n=Fs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fs(n)}}function Nc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $c(){for(var e=window,t=Eo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Eo(e.document)}return t}function Nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lp(e){var t=$c(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nc(n.ownerDocument.documentElement,n)){if(r!==null&&Nu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ds(n,i);var l=Ds(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ip=Pt&&"documentMode"in document&&11>=document.documentMode,xn=null,Tl=null,fr=null,zl=!1;function Ms(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zl||xn==null||xn!==Eo(r)||(r=xn,"selectionStart"in r&&Nu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fr&&Pr(fr,r)||(fr=r,r=zo(Tl,"onSelect"),0<r.length&&(t=new Eu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xn)))}function qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kn={animationend:qr("Animation","AnimationEnd"),animationiteration:qr("Animation","AnimationIteration"),animationstart:qr("Animation","AnimationStart"),transitionend:qr("Transition","TransitionEnd")},Yi={},Ac={};Pt&&(Ac=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function bo(e){if(Yi[e])return Yi[e];if(!kn[e])return e;var t=kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ac)return Yi[e]=t[n];return e}var Tc=bo("animationend"),zc=bo("animationiteration"),Rc=bo("animationstart"),Lc=bo("transitionend"),Ic=new Map,js="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zt(e,t){Ic.set(e,t),pn(t,[e])}for(var Ki=0;Ki<js.length;Ki++){var Xi=js[Ki],Op=Xi.toLowerCase(),Fp=Xi[0].toUpperCase()+Xi.slice(1);Zt(Op,"on"+Fp)}Zt(Tc,"onAnimationEnd");Zt(zc,"onAnimationIteration");Zt(Rc,"onAnimationStart");Zt("dblclick","onDoubleClick");Zt("focusin","onFocus");Zt("focusout","onBlur");Zt(Lc,"onTransitionEnd");Fn("onMouseEnter",["mouseout","mouseover"]);Fn("onMouseLeave",["mouseout","mouseover"]);Fn("onPointerEnter",["pointerout","pointerover"]);Fn("onPointerLeave",["pointerout","pointerover"]);pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dp=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function Us(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Of(r,t,void 0,e),e.currentTarget=null}function Oc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],s=u.instance,c=u.currentTarget;if(u=u.listener,s!==i&&o.isPropagationStopped())break e;Us(o,u,c),i=s}else for(l=0;l<r.length;l++){if(u=r[l],s=u.instance,c=u.currentTarget,u=u.listener,s!==i&&o.isPropagationStopped())break e;Us(o,u,c),i=s}}}if(_o)throw e=_l,_o=!1,_l=null,e}function te(e,t){var n=t[Fl];n===void 0&&(n=t[Fl]=new Set);var r=e+"__bubble";n.has(r)||(Fc(t,e,2,!1),n.add(r))}function Gi(e,t,n){var r=0;t&&(r|=4),Fc(n,e,r,t)}var br="_reactListening"+Math.random().toString(36).slice(2);function _r(e){if(!e[br]){e[br]=!0,Wa.forEach(function(n){n!=="selectionchange"&&(Dp.has(n)||Gi(n,!1,e),Gi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[br]||(t[br]=!0,Gi("selectionchange",!1,t))}}function Fc(e,t,n,r){switch(wc(t)){case 1:var o=Jf;break;case 4:o=qf;break;default:o=Su}n=o.bind(null,t,n,e),o=void 0,!Pl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Zi(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;u!==null;){if(l=nn(u),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}u=u.parentNode}}r=r.return}ic(function(){var c=i,m=yu(n),p=[];e:{var h=Ic.get(e);if(h!==void 0){var k=Eu,y=e;switch(e){case"keypress":if(mo(n)===0)break e;case"keydown":case"keyup":k=pp;break;case"focusin":y="focus",k=Wi;break;case"focusout":y="blur",k=Wi;break;case"beforeblur":case"afterblur":k=Wi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=$s;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=tp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=gp;break;case Tc:case zc:case Rc:k=op;break;case Lc:k=yp;break;case"scroll":k=bf;break;case"wheel":k=xp;break;case"copy":case"cut":case"paste":k=lp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Ts}var w=(t&4)!==0,z=!w&&e==="scroll",d=w?h!==null?h+"Capture":null:h;w=[];for(var a=c,f;a!==null;){f=a;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=xr(a,d),v!=null&&w.push(Nr(a,v,f)))),z)break;a=a.return}0<w.length&&(h=new k(h,y,null,n,m),p.push({event:h,listeners:w}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",h&&n!==Cl&&(y=n.relatedTarget||n.fromElement)&&(nn(y)||y[_t]))break e;if((k||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,k?(y=n.relatedTarget||n.toElement,k=c,y=y?nn(y):null,y!==null&&(z=hn(y),y!==z||y.tag!==5&&y.tag!==6)&&(y=null)):(k=null,y=c),k!==y)){if(w=$s,v="onMouseLeave",d="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ts,v="onPointerLeave",d="onPointerEnter",a="pointer"),z=k==null?h:Sn(k),f=y==null?h:Sn(y),h=new w(v,a+"leave",k,n,m),h.target=z,h.relatedTarget=f,v=null,nn(m)===c&&(w=new w(d,a+"enter",y,n,m),w.target=f,w.relatedTarget=z,v=w),z=v,k&&y)t:{for(w=k,d=y,a=0,f=w;f;f=gn(f))a++;for(f=0,v=d;v;v=gn(v))f++;for(;0<a-f;)w=gn(w),a--;for(;0<f-a;)d=gn(d),f--;for(;a--;){if(w===d||d!==null&&w===d.alternate)break t;w=gn(w),d=gn(d)}w=null}else w=null;k!==null&&Bs(p,h,k,w,!1),y!==null&&z!==null&&Bs(p,z,y,w,!0)}}e:{if(h=c?Sn(c):window,k=h.nodeName&&h.nodeName.toLowerCase(),k==="select"||k==="input"&&h.type==="file")var x=Np;else if(Ls(h))if(Pc)x=zp;else{x=Ap;var C=$p}else(k=h.nodeName)&&k.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=Tp);if(x&&(x=x(e,c))){Ec(p,x,n,m);break e}C&&C(e,h,c),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&yl(h,"number",h.value)}switch(C=c?Sn(c):window,e){case"focusin":(Ls(C)||C.contentEditable==="true")&&(xn=C,Tl=c,fr=null);break;case"focusout":fr=Tl=xn=null;break;case"mousedown":zl=!0;break;case"contextmenu":case"mouseup":case"dragend":zl=!1,Ms(p,n,m);break;case"selectionchange":if(Ip)break;case"keydown":case"keyup":Ms(p,n,m)}var $;if(_u)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else wn?Sc(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(kc&&n.locale!=="ko"&&(wn||A!=="onCompositionStart"?A==="onCompositionEnd"&&wn&&($=xc()):(Dt=m,Cu="value"in Dt?Dt.value:Dt.textContent,wn=!0)),C=zo(c,A),0<C.length&&(A=new As(A,e,null,n,m),p.push({event:A,listeners:C}),$?A.data=$:($=Cc(n),$!==null&&(A.data=$)))),($=Sp?Cp(e,n):Ep(e,n))&&(c=zo(c,"onBeforeInput"),0<c.length&&(m=new As("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:c}),m.data=$))}Oc(p,t)})}function Nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=xr(e,n),i!=null&&r.unshift(Nr(e,i,o)),i=xr(e,t),i!=null&&r.push(Nr(e,i,o))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bs(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var u=n,s=u.alternate,c=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&c!==null&&(u=c,o?(s=xr(n,i),s!=null&&l.unshift(Nr(n,s,u))):o||(s=xr(n,i),s!=null&&l.push(Nr(n,s,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Mp=/\r\n?/g,jp=/\u0000|\uFFFD/g;function Vs(e){return(typeof e=="string"?e:""+e).replace(Mp,`
`).replace(jp,"")}function eo(e,t,n){if(t=Vs(t),Vs(e)!==t&&n)throw Error(S(425))}function Ro(){}var Rl=null,Ll=null;function Il(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ol=typeof setTimeout=="function"?setTimeout:void 0,Up=typeof clearTimeout=="function"?clearTimeout:void 0,Ws=typeof Promise=="function"?Promise:void 0,Bp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ws!="undefined"?function(e){return Ws.resolve(null).then(e).catch(Vp)}:Ol;function Vp(e){setTimeout(function(){throw e})}function Ji(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Cr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Cr(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kn=Math.random().toString(36).slice(2),mt="__reactFiber$"+Kn,$r="__reactProps$"+Kn,_t="__reactContainer$"+Kn,Fl="__reactEvents$"+Kn,Wp="__reactListeners$"+Kn,Hp="__reactHandles$"+Kn;function nn(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hs(e);e!==null;){if(n=e[mt])return n;e=Hs(e)}return t}e=n,n=e.parentNode}return null}function Ur(e){return e=e[mt]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ei(e){return e[$r]||null}var Dl=[],Cn=-1;function Jt(e){return{current:e}}function ne(e){0>Cn||(e.current=Dl[Cn],Dl[Cn]=null,Cn--)}function ee(e,t){Cn++,Dl[Cn]=e.current,e.current=t}var Gt={},Re=Jt(Gt),Be=Jt(!1),sn=Gt;function Dn(e,t){var n=e.type.contextTypes;if(!n)return Gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ve(e){return e=e.childContextTypes,e!=null}function Lo(){ne(Be),ne(Re)}function Qs(e,t,n){if(Re.current!==Gt)throw Error(S(168));ee(Re,t),ee(Be,n)}function Dc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,$f(e)||"Unknown",o));return le({},n,r)}function Io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gt,sn=Re.current,ee(Re,e),ee(Be,Be.current),!0}function Ys(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Dc(e,t,sn),r.__reactInternalMemoizedMergedChildContext=e,ne(Be),ne(Re),ee(Re,e)):ne(Be),ee(Be,n)}var xt=null,ti=!1,qi=!1;function Mc(e){xt===null?xt=[e]:xt.push(e)}function Qp(e){ti=!0,Mc(e)}function qt(){if(!qi&&xt!==null){qi=!0;var e=0,t=Z;try{var n=xt;for(Z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xt=null,ti=!1}catch(o){throw xt!==null&&(xt=xt.slice(e+1)),ac(wu,qt),o}finally{Z=t,qi=!1}}return null}var En=[],Pn=0,Oo=null,Fo=0,qe=[],be=0,an=null,kt=1,St="";function en(e,t){En[Pn++]=Fo,En[Pn++]=Oo,Oo=e,Fo=t}function jc(e,t,n){qe[be++]=kt,qe[be++]=St,qe[be++]=an,an=e;var r=kt;e=St;var o=32-ct(r)-1;r&=~(1<<o),n+=1;var i=32-ct(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,kt=1<<32-ct(t)+o|n<<o|r,St=i+e}else kt=1<<i|n<<o|r,St=e}function $u(e){e.return!==null&&(en(e,1),jc(e,1,0))}function Au(e){for(;e===Oo;)Oo=En[--Pn],En[Pn]=null,Fo=En[--Pn],En[Pn]=null;for(;e===an;)an=qe[--be],qe[be]=null,St=qe[--be],qe[be]=null,kt=qe[--be],qe[be]=null}var Ke=null,Ye=null,re=!1,at=null;function Uc(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ks(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ke=e,Ye=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ke=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=an!==null?{id:kt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ke=e,Ye=null,!0):!1;default:return!1}}function Ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jl(e){if(re){var t=Ye;if(t){var n=t;if(!Ks(e,t)){if(Ml(e))throw Error(S(418));t=Vt(n.nextSibling);var r=Ke;t&&Ks(e,t)?Uc(r,n):(e.flags=e.flags&-4097|2,re=!1,Ke=e)}}else{if(Ml(e))throw Error(S(418));e.flags=e.flags&-4097|2,re=!1,Ke=e}}}function Xs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function to(e){if(e!==Ke)return!1;if(!re)return Xs(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Il(e.type,e.memoizedProps)),t&&(t=Ye)){if(Ml(e))throw Bc(),Error(S(418));for(;t;)Uc(e,t),t=Vt(t.nextSibling)}if(Xs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Ke?Vt(e.stateNode.nextSibling):null;return!0}function Bc(){for(var e=Ye;e;)e=Vt(e.nextSibling)}function Mn(){Ye=Ke=null,re=!1}function Tu(e){at===null?at=[e]:at.push(e)}var Yp=At.ReactCurrentBatchConfig;function ut(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Do=Jt(null),Mo=null,_n=null,zu=null;function Ru(){zu=_n=Mo=null}function Lu(e){var t=Do.current;ne(Do),e._currentValue=t}function Ul(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function In(e,t){Mo=e,zu=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ue=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(zu!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(Mo===null)throw Error(S(308));_n=e,Mo.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var rn=null;function Iu(e){rn===null?rn=[e]:rn.push(e)}function Vc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Iu(t)):(n.next=o.next,o.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var It=!1;function Ou(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Q&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Nt(e,n)}return o=r.interleaved,o===null?(t.next=t,Iu(r)):(t.next=o.next,o.next=t),r.interleaved=t,Nt(e,n)}function go(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xu(e,n)}}function Gs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function jo(e,t,n,r){var o=e.updateQueue;It=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var s=u,c=s.next;s.next=null,l===null?i=c:l.next=c,l=s;var m=e.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==l&&(u===null?m.firstBaseUpdate=c:u.next=c,m.lastBaseUpdate=s))}if(i!==null){var p=o.baseState;l=0,m=c=s=null,u=i;do{var h=u.lane,k=u.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:k,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var y=e,w=u;switch(h=t,k=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){p=y.call(k,p,h);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(k,p,h):y,h==null)break e;p=le({},p,h);break e;case 2:It=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[u]:h.push(u))}else k={eventTime:k,lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(c=m=k,s=p):m=m.next=k,l|=h;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;h=u,u=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(m===null&&(s=p),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);dn|=l,e.lanes=l,e.memoizedState=p}}function Zs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var Hc=new Va.Component().refs;function Bl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ni={isMounted:function(e){return(e=e._reactInternals)?hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Oe(),o=Qt(e),i=Et(r,o);i.payload=t,n!=null&&(i.callback=n),t=Wt(e,i,o),t!==null&&(dt(t,e,o,r),go(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Oe(),o=Qt(e),i=Et(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Wt(e,i,o),t!==null&&(dt(t,e,o,r),go(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Oe(),r=Qt(e),o=Et(n,r);o.tag=2,t!=null&&(o.callback=t),t=Wt(e,o,r),t!==null&&(dt(t,e,r,n),go(t,e,r))}};function Js(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Pr(n,r)||!Pr(o,i):!0}function Qc(e,t,n){var r=!1,o=Gt,i=t.contextType;return typeof i=="object"&&i!==null?i=nt(i):(o=Ve(t)?sn:Re.current,r=t.contextTypes,i=(r=r!=null)?Dn(e,o):Gt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ni,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ni.enqueueReplaceState(t,t.state,null)}function Vl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Hc,Ou(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=nt(i):(i=Ve(t)?sn:Re.current,o.context=Dn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Bl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ni.enqueueReplaceState(o,o.state,null),jo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function tr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var u=o.refs;u===Hc&&(u=o.refs={}),l===null?delete u[i]:u[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function no(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bs(e){var t=e._init;return t(e._payload)}function Yc(e){function t(d,a){if(e){var f=d.deletions;f===null?(d.deletions=[a],d.flags|=16):f.push(a)}}function n(d,a){if(!e)return null;for(;a!==null;)t(d,a),a=a.sibling;return null}function r(d,a){for(d=new Map;a!==null;)a.key!==null?d.set(a.key,a):d.set(a.index,a),a=a.sibling;return d}function o(d,a){return d=Yt(d,a),d.index=0,d.sibling=null,d}function i(d,a,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<a?(d.flags|=2,a):f):(d.flags|=2,a)):(d.flags|=1048576,a)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,a,f,v){return a===null||a.tag!==6?(a=il(f,d.mode,v),a.return=d,a):(a=o(a,f),a.return=d,a)}function s(d,a,f,v){var x=f.type;return x===yn?m(d,a,f.props.children,v,f.key):a!==null&&(a.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Lt&&bs(x)===a.type)?(v=o(a,f.props),v.ref=tr(d,a,f),v.return=d,v):(v=So(f.type,f.key,f.props,null,d.mode,v),v.ref=tr(d,a,f),v.return=d,v)}function c(d,a,f,v){return a===null||a.tag!==4||a.stateNode.containerInfo!==f.containerInfo||a.stateNode.implementation!==f.implementation?(a=ll(f,d.mode,v),a.return=d,a):(a=o(a,f.children||[]),a.return=d,a)}function m(d,a,f,v,x){return a===null||a.tag!==7?(a=un(f,d.mode,v,x),a.return=d,a):(a=o(a,f),a.return=d,a)}function p(d,a,f){if(typeof a=="string"&&a!==""||typeof a=="number")return a=il(""+a,d.mode,f),a.return=d,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case Qr:return f=So(a.type,a.key,a.props,null,d.mode,f),f.ref=tr(d,null,a),f.return=d,f;case vn:return a=ll(a,d.mode,f),a.return=d,a;case Lt:var v=a._init;return p(d,v(a._payload),f)}if(ir(a)||Zn(a))return a=un(a,d.mode,f,null),a.return=d,a;no(d,a)}return null}function h(d,a,f,v){var x=a!==null?a.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return x!==null?null:u(d,a,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Qr:return f.key===x?s(d,a,f,v):null;case vn:return f.key===x?c(d,a,f,v):null;case Lt:return x=f._init,h(d,a,x(f._payload),v)}if(ir(f)||Zn(f))return x!==null?null:m(d,a,f,v,null);no(d,f)}return null}function k(d,a,f,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,u(a,d,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qr:return d=d.get(v.key===null?f:v.key)||null,s(a,d,v,x);case vn:return d=d.get(v.key===null?f:v.key)||null,c(a,d,v,x);case Lt:var C=v._init;return k(d,a,f,C(v._payload),x)}if(ir(v)||Zn(v))return d=d.get(f)||null,m(a,d,v,x,null);no(a,v)}return null}function y(d,a,f,v){for(var x=null,C=null,$=a,A=a=0,R=null;$!==null&&A<f.length;A++){$.index>A?(R=$,$=null):R=$.sibling;var j=h(d,$,f[A],v);if(j===null){$===null&&($=R);break}e&&$&&j.alternate===null&&t(d,$),a=i(j,a,A),C===null?x=j:C.sibling=j,C=j,$=R}if(A===f.length)return n(d,$),re&&en(d,A),x;if($===null){for(;A<f.length;A++)$=p(d,f[A],v),$!==null&&(a=i($,a,A),C===null?x=$:C.sibling=$,C=$);return re&&en(d,A),x}for($=r(d,$);A<f.length;A++)R=k($,d,A,f[A],v),R!==null&&(e&&R.alternate!==null&&$.delete(R.key===null?A:R.key),a=i(R,a,A),C===null?x=R:C.sibling=R,C=R);return e&&$.forEach(function(me){return t(d,me)}),re&&en(d,A),x}function w(d,a,f,v){var x=Zn(f);if(typeof x!="function")throw Error(S(150));if(f=x.call(f),f==null)throw Error(S(151));for(var C=x=null,$=a,A=a=0,R=null,j=f.next();$!==null&&!j.done;A++,j=f.next()){$.index>A?(R=$,$=null):R=$.sibling;var me=h(d,$,j.value,v);if(me===null){$===null&&($=R);break}e&&$&&me.alternate===null&&t(d,$),a=i(me,a,A),C===null?x=me:C.sibling=me,C=me,$=R}if(j.done)return n(d,$),re&&en(d,A),x;if($===null){for(;!j.done;A++,j=f.next())j=p(d,j.value,v),j!==null&&(a=i(j,a,A),C===null?x=j:C.sibling=j,C=j);return re&&en(d,A),x}for($=r(d,$);!j.done;A++,j=f.next())j=k($,d,A,j.value,v),j!==null&&(e&&j.alternate!==null&&$.delete(j.key===null?A:j.key),a=i(j,a,A),C===null?x=j:C.sibling=j,C=j);return e&&$.forEach(function(fe){return t(d,fe)}),re&&en(d,A),x}function z(d,a,f,v){if(typeof f=="object"&&f!==null&&f.type===yn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Qr:e:{for(var x=f.key,C=a;C!==null;){if(C.key===x){if(x=f.type,x===yn){if(C.tag===7){n(d,C.sibling),a=o(C,f.props.children),a.return=d,d=a;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Lt&&bs(x)===C.type){n(d,C.sibling),a=o(C,f.props),a.ref=tr(d,C,f),a.return=d,d=a;break e}n(d,C);break}else t(d,C);C=C.sibling}f.type===yn?(a=un(f.props.children,d.mode,v,f.key),a.return=d,d=a):(v=So(f.type,f.key,f.props,null,d.mode,v),v.ref=tr(d,a,f),v.return=d,d=v)}return l(d);case vn:e:{for(C=f.key;a!==null;){if(a.key===C)if(a.tag===4&&a.stateNode.containerInfo===f.containerInfo&&a.stateNode.implementation===f.implementation){n(d,a.sibling),a=o(a,f.children||[]),a.return=d,d=a;break e}else{n(d,a);break}else t(d,a);a=a.sibling}a=ll(f,d.mode,v),a.return=d,d=a}return l(d);case Lt:return C=f._init,z(d,a,C(f._payload),v)}if(ir(f))return y(d,a,f,v);if(Zn(f))return w(d,a,f,v);no(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,a!==null&&a.tag===6?(n(d,a.sibling),a=o(a,f),a.return=d,d=a):(n(d,a),a=il(f,d.mode,v),a.return=d,d=a),l(d)):n(d,a)}return z}var jn=Yc(!0),Kc=Yc(!1),Br={},vt=Jt(Br),Ar=Jt(Br),Tr=Jt(Br);function on(e){if(e===Br)throw Error(S(174));return e}function Fu(e,t){switch(ee(Tr,t),ee(Ar,e),ee(vt,Br),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xl(t,e)}ne(vt),ee(vt,t)}function Un(){ne(vt),ne(Ar),ne(Tr)}function Xc(e){on(Tr.current);var t=on(vt.current),n=xl(t,e.type);t!==n&&(ee(Ar,e),ee(vt,n))}function Du(e){Ar.current===e&&(ne(vt),ne(Ar))}var oe=Jt(0);function Uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bi=[];function Mu(){for(var e=0;e<bi.length;e++)bi[e]._workInProgressVersionPrimary=null;bi.length=0}var vo=At.ReactCurrentDispatcher,el=At.ReactCurrentBatchConfig,cn=0,ie=null,pe=null,ge=null,Bo=!1,pr=!1,zr=0,Kp=0;function Ae(){throw Error(S(321))}function ju(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function Uu(e,t,n,r,o,i){if(cn=i,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vo.current=e===null||e.memoizedState===null?Jp:qp,e=n(r,o),pr){i=0;do{if(pr=!1,zr=0,25<=i)throw Error(S(301));i+=1,ge=pe=null,t.updateQueue=null,vo.current=bp,e=n(r,o)}while(pr)}if(vo.current=Vo,t=pe!==null&&pe.next!==null,cn=0,ge=pe=ie=null,Bo=!1,t)throw Error(S(300));return e}function Bu(){var e=zr!==0;return zr=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ie.memoizedState=ge=e:ge=ge.next=e,ge}function rt(){if(pe===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=ge===null?ie.memoizedState:ge.next;if(t!==null)ge=t,pe=e;else{if(e===null)throw Error(S(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},ge===null?ie.memoizedState=ge=e:ge=ge.next=e}return ge}function Rr(e,t){return typeof t=="function"?t(e):t}function tl(e){var t=rt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=pe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var u=l=null,s=null,c=i;do{var m=c.lane;if((cn&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(u=s=p,l=r):s=s.next=p,ie.lanes|=m,dn|=m}c=c.next}while(c!==null&&c!==i);s===null?l=r:s.next=u,ft(r,t.memoizedState)||(Ue=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ie.lanes|=i,dn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function nl(e){var t=rt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);ft(i,t.memoizedState)||(Ue=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Gc(){}function Zc(e,t){var n=ie,r=rt(),o=t(),i=!ft(r.memoizedState,o);if(i&&(r.memoizedState=o,Ue=!0),r=r.queue,Vu(bc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,Lr(9,qc.bind(null,n,r,o,t),void 0,null),ve===null)throw Error(S(349));(cn&30)!==0||Jc(n,t,o)}return o}function Jc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qc(e,t,n,r){t.value=n,t.getSnapshot=r,ed(t)&&td(e)}function bc(e,t,n){return n(function(){ed(t)&&td(e)})}function ed(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function td(e){var t=Nt(e,1);t!==null&&dt(t,e,1,-1)}function ea(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rr,lastRenderedState:e},t.queue=e,e=e.dispatch=Zp.bind(null,ie,e),[t.memoizedState,e]}function Lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nd(){return rt().memoizedState}function yo(e,t,n,r){var o=ht();ie.flags|=e,o.memoizedState=Lr(1|t,n,void 0,r===void 0?null:r)}function ri(e,t,n,r){var o=rt();r=r===void 0?null:r;var i=void 0;if(pe!==null){var l=pe.memoizedState;if(i=l.destroy,r!==null&&ju(r,l.deps)){o.memoizedState=Lr(t,n,i,r);return}}ie.flags|=e,o.memoizedState=Lr(1|t,n,i,r)}function ta(e,t){return yo(8390656,8,e,t)}function Vu(e,t){return ri(2048,8,e,t)}function rd(e,t){return ri(4,2,e,t)}function od(e,t){return ri(4,4,e,t)}function id(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ld(e,t,n){return n=n!=null?n.concat([e]):null,ri(4,4,id.bind(null,t,e),n)}function Wu(){}function ud(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ju(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sd(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ju(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ad(e,t,n){return(cn&21)===0?(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=n):(ft(n,t)||(n=fc(),ie.lanes|=n,dn|=n,e.baseState=!0),t)}function Xp(e,t){var n=Z;Z=n!==0&&4>n?n:4,e(!0);var r=el.transition;el.transition={};try{e(!1),t()}finally{Z=n,el.transition=r}}function cd(){return rt().memoizedState}function Gp(e,t,n){var r=Qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dd(e))fd(t,n);else if(n=Vc(e,t,n,r),n!==null){var o=Oe();dt(n,e,r,o),pd(n,t,r)}}function Zp(e,t,n){var r=Qt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dd(e))fd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,u=i(l,n);if(o.hasEagerState=!0,o.eagerState=u,ft(u,l)){var s=t.interleaved;s===null?(o.next=o,Iu(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Vc(e,t,o,r),n!==null&&(o=Oe(),dt(n,e,r,o),pd(n,t,r))}}function dd(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function fd(e,t){pr=Bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pd(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xu(e,n)}}var Vo={readContext:nt,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},Jp={readContext:nt,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:ta,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,yo(4194308,4,id.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yo(4194308,4,e,t)},useInsertionEffect:function(e,t){return yo(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Gp.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:ea,useDebugValue:Wu,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=ea(!1),t=e[0];return e=Xp.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,o=ht();if(re){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ve===null)throw Error(S(349));(cn&30)!==0||Jc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ta(bc.bind(null,r,i,e),[e]),r.flags|=2048,Lr(9,qc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ht(),t=ve.identifierPrefix;if(re){var n=St,r=kt;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qp={readContext:nt,useCallback:ud,useContext:nt,useEffect:Vu,useImperativeHandle:ld,useInsertionEffect:rd,useLayoutEffect:od,useMemo:sd,useReducer:tl,useRef:nd,useState:function(){return tl(Rr)},useDebugValue:Wu,useDeferredValue:function(e){var t=rt();return ad(t,pe.memoizedState,e)},useTransition:function(){var e=tl(Rr)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Gc,useSyncExternalStore:Zc,useId:cd,unstable_isNewReconciler:!1},bp={readContext:nt,useCallback:ud,useContext:nt,useEffect:Vu,useImperativeHandle:ld,useInsertionEffect:rd,useLayoutEffect:od,useMemo:sd,useReducer:nl,useRef:nd,useState:function(){return nl(Rr)},useDebugValue:Wu,useDeferredValue:function(e){var t=rt();return pe===null?t.memoizedState=e:ad(t,pe.memoizedState,e)},useTransition:function(){var e=nl(Rr)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Gc,useSyncExternalStore:Zc,useId:cd,unstable_isNewReconciler:!1};function Bn(e,t){try{var n="",r=t;do n+=Nf(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function rl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Wl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var eh=typeof WeakMap=="function"?WeakMap:Map;function hd(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ho||(Ho=!0,bl=r),Wl(e,t)},n}function md(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Wl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Wl(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function na(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new eh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=hh.bind(null,e,t,n),t.then(e,e))}function ra(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function oa(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Wt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var th=At.ReactCurrentOwner,Ue=!1;function Ie(e,t,n,r){t.child=e===null?Kc(t,null,n,r):jn(t,e.child,n,r)}function ia(e,t,n,r,o){n=n.render;var i=t.ref;return In(t,o),r=Uu(e,t,n,r,i,o),n=Bu(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$t(e,t,o)):(re&&n&&$u(t),t.flags|=1,Ie(e,t,r,o),t.child)}function la(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ju(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,gd(e,t,i,r,o)):(e=So(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Pr,n(l,r)&&e.ref===t.ref)return $t(e,t,o)}return t.flags|=1,e=Yt(i,r),e.ref=t.ref,e.return=t,t.child=e}function gd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Pr(i,r)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ue=!0);else return t.lanes=e.lanes,$t(e,t,o)}return Hl(e,t,n,r,o)}function vd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee($n,Qe),Qe|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee($n,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ee($n,Qe),Qe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ee($n,Qe),Qe|=r;return Ie(e,t,o,n),t.child}function yd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hl(e,t,n,r,o){var i=Ve(n)?sn:Re.current;return i=Dn(t,i),In(t,o),n=Uu(e,t,n,r,i,o),r=Bu(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$t(e,t,o)):(re&&r&&$u(t),t.flags|=1,Ie(e,t,n,o),t.child)}function ua(e,t,n,r,o){if(Ve(n)){var i=!0;Io(t)}else i=!1;if(In(t,o),t.stateNode===null)wo(e,t),Qc(t,n,r),Vl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var s=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=nt(c):(c=Ve(n)?sn:Re.current,c=Dn(t,c));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||s!==c)&&qs(t,l,r,c),It=!1;var h=t.memoizedState;l.state=h,jo(t,r,l,o),s=t.memoizedState,u!==r||h!==s||Be.current||It?(typeof m=="function"&&(Bl(t,n,m,r),s=t.memoizedState),(u=It||Js(t,n,u,r,h,s,c))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=c,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Wc(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:ut(t.type,u),l.props=c,p=t.pendingProps,h=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=nt(s):(s=Ve(n)?sn:Re.current,s=Dn(t,s));var k=n.getDerivedStateFromProps;(m=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==p||h!==s)&&qs(t,l,r,s),It=!1,h=t.memoizedState,l.state=h,jo(t,r,l,o);var y=t.memoizedState;u!==p||h!==y||Be.current||It?(typeof k=="function"&&(Bl(t,n,k,r),y=t.memoizedState),(c=It||Js(t,n,c,r,h,y,s)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ql(e,t,n,r,i,o)}function Ql(e,t,n,r,o,i){yd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Ys(t,n,!1),$t(e,t,i);r=t.stateNode,th.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=jn(t,e.child,null,i),t.child=jn(t,null,u,i)):Ie(e,t,u,i),t.memoizedState=r.state,o&&Ys(t,n,!0),t.child}function wd(e){var t=e.stateNode;t.pendingContext?Qs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qs(e,t.context,!1),Fu(e,t.containerInfo)}function sa(e,t,n,r,o){return Mn(),Tu(o),t.flags|=256,Ie(e,t,n,r),t.child}var Yl={dehydrated:null,treeContext:null,retryLane:0};function Kl(e){return{baseLanes:e,cachePool:null,transitions:null}}function xd(e,t,n){var r=t.pendingProps,o=oe.current,i=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ee(oe,o&1),e===null)return jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=li(l,r,0,null),e=un(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Kl(n),t.memoizedState=Yl,e):Hu(t,l));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return nh(e,t,l,r,u,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,u=o.sibling;var s={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Yt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?i=Yt(u,i):(i=un(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Kl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Yl,r}return i=e.child,e=i.sibling,r=Yt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Hu(e,t){return t=li({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ro(e,t,n,r){return r!==null&&Tu(r),jn(t,e.child,null,n),e=Hu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=rl(Error(S(422))),ro(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=li({mode:"visible",children:r.children},o,0,null),i=un(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&jn(t,e.child,null,l),t.child.memoizedState=Kl(l),t.memoizedState=Yl,i);if((t.mode&1)===0)return ro(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(S(419)),r=rl(i,r,void 0),ro(e,t,l,r)}if(u=(l&e.childLanes)!==0,Ue||u){if(r=ve,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Nt(e,o),dt(r,e,o,-1))}return Zu(),r=rl(Error(S(421))),ro(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=mh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ye=Vt(o.nextSibling),Ke=t,re=!0,at=null,e!==null&&(qe[be++]=kt,qe[be++]=St,qe[be++]=an,kt=e.id,St=e.overflow,an=t),t=Hu(t,r.children),t.flags|=4096,t)}function aa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ul(e.return,t,n)}function ol(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function kd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ie(e,t,r.children,n),r=oe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&aa(e,n,t);else if(e.tag===19)aa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(oe,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Uo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ol(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Uo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ol(t,!0,n,null,i);break;case"together":ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rh(e,t,n){switch(t.tag){case 3:wd(t),Mn();break;case 5:Xc(t);break;case 1:Ve(t.type)&&Io(t);break;case 4:Fu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ee(Do,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(oe,oe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?xd(e,t,n):(ee(oe,oe.current&1),e=$t(e,t,n),e!==null?e.sibling:null);ee(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return kd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ee(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,vd(e,t,n)}return $t(e,t,n)}var Sd,Xl,Cd,Ed;Sd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xl=function(){};Cd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,on(vt.current);var i=null;switch(n){case"input":o=gl(e,o),r=gl(e,r),i=[];break;case"select":o=le({},o,{value:void 0}),r=le({},r,{value:void 0}),i=[];break;case"textarea":o=wl(e,o),r=wl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ro)}kl(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var u=o[c];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(yr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(u=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==u&&(s!=null||u!=null))if(c==="style")if(u){for(l in u)!u.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&u[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(yr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&te("scroll",e),i||u===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Ed=function(e,t,n,r){n!==r&&(t.flags|=4)};function nr(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function oh(e,t,n){var r=t.pendingProps;switch(Au(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Ve(t.type)&&Lo(),Te(t),null;case 3:return r=t.stateNode,Un(),ne(Be),ne(Re),Mu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(to(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,at!==null&&(nu(at),at=null))),Xl(e,t),Te(t),null;case 5:Du(t);var o=on(Tr.current);if(n=t.type,e!==null&&t.stateNode!=null)Cd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return Te(t),null}if(e=on(vt.current),to(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[mt]=t,r[$r]=i,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(o=0;o<ur.length;o++)te(ur[o],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":ys(r,i),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},te("invalid",r);break;case"textarea":xs(r,i),te("invalid",r)}kl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var u=i[l];l==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&eo(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&eo(r.textContent,u,e),o=["children",""+u]):yr.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&te("scroll",r)}switch(n){case"input":Yr(r),ws(r,i,!0);break;case"textarea":Yr(r),ks(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ro)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ja(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[mt]=t,e[$r]=r,Sd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Sl(n,r),n){case"dialog":te("cancel",e),te("close",e),o=r;break;case"iframe":case"object":case"embed":te("load",e),o=r;break;case"video":case"audio":for(o=0;o<ur.length;o++)te(ur[o],e);o=r;break;case"source":te("error",e),o=r;break;case"img":case"image":case"link":te("error",e),te("load",e),o=r;break;case"details":te("toggle",e),o=r;break;case"input":ys(e,r),o=gl(e,r),te("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=le({},r,{value:void 0}),te("invalid",e);break;case"textarea":xs(e,r),o=wl(e,r),te("invalid",e);break;default:o=r}kl(n,o),u=o;for(i in u)if(u.hasOwnProperty(i)){var s=u[i];i==="style"?ec(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&qa(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&wr(e,s):typeof s=="number"&&wr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(yr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&te("scroll",e):s!=null&&hu(e,i,s,l))}switch(n){case"input":Yr(e),ws(e,r,!1);break;case"textarea":Yr(e),ks(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Tn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ro)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)Ed(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=on(Tr.current),on(vt.current),to(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(i=r.nodeValue!==n)&&(e=Ke,e!==null))switch(e.tag){case 3:eo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&eo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return Te(t),null;case 13:if(ne(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Ye!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Bc(),Mn(),t.flags|=98560,i=!1;else if(i=to(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[mt]=t}else Mn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),i=!1}else at!==null&&(nu(at),at=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(oe.current&1)!==0?he===0&&(he=3):Zu())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return Un(),Xl(e,t),e===null&&_r(t.stateNode.containerInfo),Te(t),null;case 10:return Lu(t.type._context),Te(t),null;case 17:return Ve(t.type)&&Lo(),Te(t),null;case 19:if(ne(oe),i=t.memoizedState,i===null)return Te(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)nr(i,!1);else{if(he!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Uo(e),l!==null){for(t.flags|=128,nr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(oe,oe.current&1|2),t.child}e=e.sibling}i.tail!==null&&ce()>Vn&&(t.flags|=128,r=!0,nr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Uo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),nr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!re)return Te(t),null}else 2*ce()-i.renderingStartTime>Vn&&n!==1073741824&&(t.flags|=128,r=!0,nr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ce(),t.sibling=null,n=oe.current,ee(oe,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return Gu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Qe&1073741824)!==0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function ih(e,t){switch(Au(t),t.tag){case 1:return Ve(t.type)&&Lo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(),ne(Be),ne(Re),Mu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Du(t),null;case 13:if(ne(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(oe),null;case 4:return Un(),null;case 10:return Lu(t.type._context),null;case 22:case 23:return Gu(),null;case 24:return null;default:return null}}var oo=!1,ze=!1,lh=typeof WeakSet=="function"?WeakSet:Set,I=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function Gl(e,t,n){try{n()}catch(r){se(e,t,r)}}var ca=!1;function uh(e,t){if(Rl=Ao,e=$c(),Nu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,u=-1,s=-1,c=0,m=0,p=e,h=null;t:for(;;){for(var k;p!==n||o!==0&&p.nodeType!==3||(u=l+o),p!==i||r!==0&&p.nodeType!==3||(s=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(k=p.firstChild)!==null;)h=p,p=k;for(;;){if(p===e)break t;if(h===n&&++c===o&&(u=l),h===i&&++m===r&&(s=l),(k=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=k}n=u===-1||s===-1?null:{start:u,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ll={focusedElem:e,selectionRange:n},Ao=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,z=y.memoizedState,d=t.stateNode,a=d.getSnapshotBeforeUpdate(t.elementType===t.type?w:ut(t.type,w),z);d.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){se(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return y=ca,ca=!1,y}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Gl(t,n,i)}o=o.next}while(o!==r)}}function oi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Pd(e){var t=e.alternate;t!==null&&(e.alternate=null,Pd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[$r],delete t[Fl],delete t[Wp],delete t[Hp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _d(e){return e.tag===5||e.tag===3||e.tag===4}function da(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ro));else if(r!==4&&(e=e.child,e!==null))for(Jl(e,t,n),e=e.sibling;e!==null;)Jl(e,t,n),e=e.sibling}function ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ql(e,t,n),e=e.sibling;e!==null;)ql(e,t,n),e=e.sibling}var Ee=null,st=!1;function Rt(e,t,n){for(n=n.child;n!==null;)Nd(e,t,n),n=n.sibling}function Nd(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Zo,n)}catch{}switch(n.tag){case 5:ze||Nn(n,t);case 6:var r=Ee,o=st;Ee=null,Rt(e,t,n),Ee=r,st=o,Ee!==null&&(st?(e=Ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(st?(e=Ee,n=n.stateNode,e.nodeType===8?Ji(e.parentNode,n):e.nodeType===1&&Ji(e,n),Cr(e)):Ji(Ee,n.stateNode));break;case 4:r=Ee,o=st,Ee=n.stateNode.containerInfo,st=!0,Rt(e,t,n),Ee=r,st=o;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&Gl(n,t,l),o=o.next}while(o!==r)}Rt(e,t,n);break;case 1:if(!ze&&(Nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){se(n,t,u)}Rt(e,t,n);break;case 21:Rt(e,t,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,Rt(e,t,n),ze=r):Rt(e,t,n);break;default:Rt(e,t,n)}}function fa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new lh),t.forEach(function(r){var o=gh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:Ee=u.stateNode,st=!1;break e;case 3:Ee=u.stateNode.containerInfo,st=!0;break e;case 4:Ee=u.stateNode.containerInfo,st=!0;break e}u=u.return}if(Ee===null)throw Error(S(160));Nd(i,l,o),Ee=null,st=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){se(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$d(t,e),t=t.sibling}function $d(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),pt(e),r&4){try{hr(3,e,e.return),oi(3,e)}catch(w){se(e,e.return,w)}try{hr(5,e,e.return)}catch(w){se(e,e.return,w)}}break;case 1:lt(t,e),pt(e),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(lt(t,e),pt(e),r&512&&n!==null&&Nn(n,n.return),e.flags&32){var o=e.stateNode;try{wr(o,"")}catch(w){se(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&Ga(o,i),Sl(u,l);var c=Sl(u,i);for(l=0;l<s.length;l+=2){var m=s[l],p=s[l+1];m==="style"?ec(o,p):m==="dangerouslySetInnerHTML"?qa(o,p):m==="children"?wr(o,p):hu(o,m,p,c)}switch(u){case"input":vl(o,i);break;case"textarea":Za(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?Tn(o,!!i.multiple,k,!1):h!==!!i.multiple&&(i.defaultValue!=null?Tn(o,!!i.multiple,i.defaultValue,!0):Tn(o,!!i.multiple,i.multiple?[]:"",!1))}o[$r]=i}catch(w){se(e,e.return,w)}}break;case 6:if(lt(t,e),pt(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){se(e,e.return,w)}}break;case 3:if(lt(t,e),pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Cr(t.containerInfo)}catch(w){se(e,e.return,w)}break;case 4:lt(t,e),pt(e);break;case 13:lt(t,e),pt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ku=ce())),r&4&&fa(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ze=(c=ze)||m,lt(t,e),ze=c):lt(t,e),pt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&(e.mode&1)!==0)for(I=e,m=e.child;m!==null;){for(p=I=m;I!==null;){switch(h=I,k=h.child,h.tag){case 0:case 11:case 14:case 15:hr(4,h,h.return);break;case 1:Nn(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){se(r,n,w)}}break;case 5:Nn(h,h.return);break;case 22:if(h.memoizedState!==null){ha(p);continue}}k!==null?(k.return=h,I=k):ha(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{o=p.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=p.stateNode,s=p.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=ba("display",l))}catch(w){se(e,e.return,w)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(w){se(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:lt(t,e),pt(e),r&4&&fa(e);break;case 21:break;default:lt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_d(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(wr(o,""),r.flags&=-33);var i=da(e);ql(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,u=da(e);Jl(e,u,l);break;default:throw Error(S(161))}}catch(s){se(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sh(e,t,n){I=e,Ad(e)}function Ad(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var o=I,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||oo;if(!l){var u=o.alternate,s=u!==null&&u.memoizedState!==null||ze;u=oo;var c=ze;if(oo=l,(ze=s)&&!c)for(I=o;I!==null;)l=I,s=l.child,l.tag===22&&l.memoizedState!==null?ma(o):s!==null?(s.return=l,I=s):ma(o);for(;i!==null;)I=i,Ad(i),i=i.sibling;I=o,oo=u,ze=c}pa(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,I=i):pa(e)}}function pa(e){for(;I!==null;){var t=I;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ze||oi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ze)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Zs(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zs(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Cr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ze||t.flags&512&&Zl(t)}catch(h){se(t,t.return,h)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function ha(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function ma(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{oi(4,t)}catch(s){se(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){se(t,o,s)}}var i=t.return;try{Zl(t)}catch(s){se(t,i,s)}break;case 5:var l=t.return;try{Zl(t)}catch(s){se(t,l,s)}}}catch(s){se(t,t.return,s)}if(t===e){I=null;break}var u=t.sibling;if(u!==null){u.return=t.return,I=u;break}I=t.return}}var ah=Math.ceil,Wo=At.ReactCurrentDispatcher,Qu=At.ReactCurrentOwner,tt=At.ReactCurrentBatchConfig,Q=0,ve=null,de=null,Pe=0,Qe=0,$n=Jt(0),he=0,Ir=null,dn=0,ii=0,Yu=0,mr=null,je=null,Ku=0,Vn=1/0,wt=null,Ho=!1,bl=null,Ht=null,io=!1,Mt=null,Qo=0,gr=0,eu=null,xo=-1,ko=0;function Oe(){return(Q&6)!==0?ce():xo!==-1?xo:xo=ce()}function Qt(e){return(e.mode&1)===0?1:(Q&2)!==0&&Pe!==0?Pe&-Pe:Yp.transition!==null?(ko===0&&(ko=fc()),ko):(e=Z,e!==0||(e=window.event,e=e===void 0?16:wc(e.type)),e)}function dt(e,t,n,r){if(50<gr)throw gr=0,eu=null,Error(S(185));Mr(e,n,r),((Q&2)===0||e!==ve)&&(e===ve&&((Q&2)===0&&(ii|=n),he===4&&Ft(e,Pe)),We(e,r),n===1&&Q===0&&(t.mode&1)===0&&(Vn=ce()+500,ti&&qt()))}function We(e,t){var n=e.callbackNode;Yf(e,t);var r=$o(e,e===ve?Pe:0);if(r===0)n!==null&&Es(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Es(n),t===1)e.tag===0?Qp(ga.bind(null,e)):Mc(ga.bind(null,e)),Bp(function(){(Q&6)===0&&qt()}),n=null;else{switch(pc(r)){case 1:n=wu;break;case 4:n=cc;break;case 16:n=No;break;case 536870912:n=dc;break;default:n=No}n=Dd(n,Td.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Td(e,t){if(xo=-1,ko=0,(Q&6)!==0)throw Error(S(327));var n=e.callbackNode;if(On()&&e.callbackNode!==n)return null;var r=$o(e,e===ve?Pe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Yo(e,r);else{t=r;var o=Q;Q|=2;var i=Rd();(ve!==e||Pe!==t)&&(wt=null,Vn=ce()+500,ln(e,t));do try{fh();break}catch(u){zd(e,u)}while(1);Ru(),Wo.current=i,Q=o,de!==null?t=0:(ve=null,Pe=0,t=he)}if(t!==0){if(t===2&&(o=Nl(e),o!==0&&(r=o,t=tu(e,o))),t===1)throw n=Ir,ln(e,0),Ft(e,r),We(e,ce()),n;if(t===6)Ft(e,r);else{if(o=e.current.alternate,(r&30)===0&&!ch(o)&&(t=Yo(e,r),t===2&&(i=Nl(e),i!==0&&(r=i,t=tu(e,i))),t===1))throw n=Ir,ln(e,0),Ft(e,r),We(e,ce()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:tn(e,je,wt);break;case 3:if(Ft(e,r),(r&130023424)===r&&(t=Ku+500-ce(),10<t)){if($o(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Oe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ol(tn.bind(null,e,je,wt),t);break}tn(e,je,wt);break;case 4:if(Ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-ct(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ah(r/1960))-r,10<r){e.timeoutHandle=Ol(tn.bind(null,e,je,wt),r);break}tn(e,je,wt);break;case 5:tn(e,je,wt);break;default:throw Error(S(329))}}}return We(e,ce()),e.callbackNode===n?Td.bind(null,e):null}function tu(e,t){var n=mr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=Yo(e,t),e!==2&&(t=je,je=n,t!==null&&nu(t)),e}function nu(e){je===null?je=e:je.push.apply(je,e)}function ch(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ft(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ft(e,t){for(t&=~Yu,t&=~ii,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function ga(e){if((Q&6)!==0)throw Error(S(327));On();var t=$o(e,0);if((t&1)===0)return We(e,ce()),null;var n=Yo(e,t);if(e.tag!==0&&n===2){var r=Nl(e);r!==0&&(t=r,n=tu(e,r))}if(n===1)throw n=Ir,ln(e,0),Ft(e,t),We(e,ce()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e,je,wt),We(e,ce()),null}function Xu(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Vn=ce()+500,ti&&qt())}}function fn(e){Mt!==null&&Mt.tag===0&&(Q&6)===0&&On();var t=Q;Q|=1;var n=tt.transition,r=Z;try{if(tt.transition=null,Z=1,e)return e()}finally{Z=r,tt.transition=n,Q=t,(Q&6)===0&&qt()}}function Gu(){Qe=$n.current,ne($n)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Up(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Au(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Lo();break;case 3:Un(),ne(Be),ne(Re),Mu();break;case 5:Du(r);break;case 4:Un();break;case 13:ne(oe);break;case 19:ne(oe);break;case 10:Lu(r.type._context);break;case 22:case 23:Gu()}n=n.return}if(ve=e,de=e=Yt(e.current,null),Pe=Qe=t,he=0,Ir=null,Yu=ii=dn=0,je=mr=null,rn!==null){for(t=0;t<rn.length;t++)if(n=rn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}rn=null}return e}function zd(e,t){do{var n=de;try{if(Ru(),vo.current=Vo,Bo){for(var r=ie.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Bo=!1}if(cn=0,ge=pe=ie=null,pr=!1,zr=0,Qu.current=null,n===null||n.return===null){he=1,Ir=t,de=null;break}e:{var i=e,l=n.return,u=n,s=t;if(t=Pe,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=u,p=m.tag;if((m.mode&1)===0&&(p===0||p===11||p===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var k=ra(l);if(k!==null){k.flags&=-257,oa(k,l,u,i,t),k.mode&1&&na(i,c,t),t=k,s=c;var y=t.updateQueue;if(y===null){var w=new Set;w.add(s),t.updateQueue=w}else y.add(s);break e}else{if((t&1)===0){na(i,c,t),Zu();break e}s=Error(S(426))}}else if(re&&u.mode&1){var z=ra(l);if(z!==null){(z.flags&65536)===0&&(z.flags|=256),oa(z,l,u,i,t),Tu(Bn(s,u));break e}}i=s=Bn(s,u),he!==4&&(he=2),mr===null?mr=[i]:mr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=hd(i,s,t);Gs(i,d);break e;case 1:u=s;var a=i.type,f=i.stateNode;if((i.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ht===null||!Ht.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=md(i,u,t);Gs(i,v);break e}}i=i.return}while(i!==null)}Id(n)}catch(x){t=x,de===n&&n!==null&&(de=n=n.return);continue}break}while(1)}function Rd(){var e=Wo.current;return Wo.current=Vo,e===null?Vo:e}function Zu(){(he===0||he===3||he===2)&&(he=4),ve===null||(dn&268435455)===0&&(ii&268435455)===0||Ft(ve,Pe)}function Yo(e,t){var n=Q;Q|=2;var r=Rd();(ve!==e||Pe!==t)&&(wt=null,ln(e,t));do try{dh();break}catch(o){zd(e,o)}while(1);if(Ru(),Q=n,Wo.current=r,de!==null)throw Error(S(261));return ve=null,Pe=0,he}function dh(){for(;de!==null;)Ld(de)}function fh(){for(;de!==null&&!Df();)Ld(de)}function Ld(e){var t=Fd(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?Id(e):de=t,Qu.current=null}function Id(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=oh(n,t,Qe),n!==null){de=n;return}}else{if(n=ih(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,de=null;return}}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);he===0&&(he=5)}function tn(e,t,n){var r=Z,o=tt.transition;try{tt.transition=null,Z=1,ph(e,t,n,r)}finally{tt.transition=o,Z=r}return null}function ph(e,t,n,r){do On();while(Mt!==null);if((Q&6)!==0)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Kf(e,i),e===ve&&(de=ve=null,Pe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||io||(io=!0,Dd(No,function(){return On(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=tt.transition,tt.transition=null;var l=Z;Z=1;var u=Q;Q|=4,Qu.current=null,uh(e,n),$d(n,e),Lp(Ll),Ao=!!Rl,Ll=Rl=null,e.current=n,sh(n),Mf(),Q=u,Z=l,tt.transition=i}else e.current=n;if(io&&(io=!1,Mt=e,Qo=o),i=e.pendingLanes,i===0&&(Ht=null),Bf(n.stateNode),We(e,ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ho)throw Ho=!1,e=bl,bl=null,e;return(Qo&1)!==0&&e.tag!==0&&On(),i=e.pendingLanes,(i&1)!==0?e===eu?gr++:(gr=0,eu=e):gr=0,qt(),null}function On(){if(Mt!==null){var e=pc(Qo),t=tt.transition,n=Z;try{if(tt.transition=null,Z=16>e?16:e,Mt===null)var r=!1;else{if(e=Mt,Mt=null,Qo=0,(Q&6)!==0)throw Error(S(331));var o=Q;for(Q|=4,I=e.current;I!==null;){var i=I,l=i.child;if((I.flags&16)!==0){var u=i.deletions;if(u!==null){for(var s=0;s<u.length;s++){var c=u[s];for(I=c;I!==null;){var m=I;switch(m.tag){case 0:case 11:case 15:hr(8,m,i)}var p=m.child;if(p!==null)p.return=m,I=p;else for(;I!==null;){m=I;var h=m.sibling,k=m.return;if(Pd(m),m===c){I=null;break}if(h!==null){h.return=k,I=h;break}I=k}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var z=w.sibling;w.sibling=null,w=z}while(w!==null)}}I=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,I=l;else e:for(;I!==null;){if(i=I,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:hr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,I=d;break e}I=i.return}}var a=e.current;for(I=a;I!==null;){l=I;var f=l.child;if((l.subtreeFlags&2064)!==0&&f!==null)f.return=l,I=f;else e:for(l=a;I!==null;){if(u=I,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:oi(9,u)}}catch(x){se(u,u.return,x)}if(u===l){I=null;break e}var v=u.sibling;if(v!==null){v.return=u.return,I=v;break e}I=u.return}}if(Q=o,qt(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Zo,e)}catch{}r=!0}return r}finally{Z=n,tt.transition=t}}return!1}function va(e,t,n){t=Bn(n,t),t=hd(e,t,1),e=Wt(e,t,1),t=Oe(),e!==null&&(Mr(e,1,t),We(e,t))}function se(e,t,n){if(e.tag===3)va(e,e,n);else for(;t!==null;){if(t.tag===3){va(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=Bn(n,e),e=md(t,e,1),t=Wt(t,e,1),e=Oe(),t!==null&&(Mr(t,1,e),We(t,e));break}}t=t.return}}function hh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Oe(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(Pe&n)===n&&(he===4||he===3&&(Pe&130023424)===Pe&&500>ce()-Ku?ln(e,0):Yu|=n),We(e,t)}function Od(e,t){t===0&&((e.mode&1)===0?t=1:(t=Gr,Gr<<=1,(Gr&130023424)===0&&(Gr=4194304)));var n=Oe();e=Nt(e,t),e!==null&&(Mr(e,t,n),We(e,n))}function mh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Od(e,n)}function gh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Od(e,n)}var Fd;Fd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Ue=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ue=!1,rh(e,t,n);Ue=(e.flags&131072)!==0}else Ue=!1,re&&(t.flags&1048576)!==0&&jc(t,Fo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;wo(e,t),e=t.pendingProps;var o=Dn(t,Re.current);In(t,n),o=Uu(null,t,r,e,o,n);var i=Bu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(i=!0,Io(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ou(t),o.updater=ni,t.stateNode=o,o._reactInternals=t,Vl(t,r,e,n),t=Ql(null,t,r,!0,i,n)):(t.tag=0,re&&i&&$u(t),Ie(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(wo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=yh(r),e=ut(r,e),o){case 0:t=Hl(null,t,r,e,n);break e;case 1:t=ua(null,t,r,e,n);break e;case 11:t=ia(null,t,r,e,n);break e;case 14:t=la(null,t,r,ut(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),Hl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),ua(e,t,r,o,n);case 3:e:{if(wd(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Wc(e,t),jo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Bn(Error(S(423)),t),t=sa(e,t,r,n,o);break e}else if(r!==o){o=Bn(Error(S(424)),t),t=sa(e,t,r,n,o);break e}else for(Ye=Vt(t.stateNode.containerInfo.firstChild),Ke=t,re=!0,at=null,n=Kc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mn(),r===o){t=$t(e,t,n);break e}Ie(e,t,r,n)}t=t.child}return t;case 5:return Xc(t),e===null&&jl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Il(r,o)?l=null:i!==null&&Il(r,i)&&(t.flags|=32),yd(e,t),Ie(e,t,l,n),t.child;case 6:return e===null&&jl(t),null;case 13:return xd(e,t,n);case 4:return Fu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jn(t,null,r,n):Ie(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),ia(e,t,r,o,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,ee(Do,r._currentValue),r._currentValue=l,i!==null)if(ft(i.value,l)){if(i.children===o.children&&!Be.current){t=$t(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){l=i.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Et(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ul(i.return,n,t),u.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(S(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Ul(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ie(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,In(t,n),o=nt(o),r=r(o),t.flags|=1,Ie(e,t,r,n),t.child;case 14:return r=t.type,o=ut(r,t.pendingProps),o=ut(r.type,o),la(e,t,r,o,n);case 15:return gd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),wo(e,t),t.tag=1,Ve(r)?(e=!0,Io(t)):e=!1,In(t,n),Qc(t,r,o),Vl(t,r,o,n),Ql(null,t,r,!0,e,n);case 19:return kd(e,t,n);case 22:return vd(e,t,n)}throw Error(S(156,t.tag))};function Dd(e,t){return ac(e,t)}function vh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new vh(e,t,n,r)}function Ju(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yh(e){if(typeof e=="function")return Ju(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gu)return 11;if(e===vu)return 14}return 2}function Yt(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function So(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ju(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case yn:return un(n.children,o,i,t);case mu:l=8,o|=8;break;case fl:return e=et(12,n,t,o|2),e.elementType=fl,e.lanes=i,e;case pl:return e=et(13,n,t,o),e.elementType=pl,e.lanes=i,e;case hl:return e=et(19,n,t,o),e.elementType=hl,e.lanes=i,e;case Ya:return li(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ha:l=10;break e;case Qa:l=9;break e;case gu:l=11;break e;case vu:l=14;break e;case Lt:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=et(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function un(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function li(e,t,n,r){return e=et(22,e,r,t),e.elementType=Ya,e.lanes=n,e.stateNode={isHidden:!1},e}function il(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function ll(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ui(0),this.expirationTimes=Ui(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ui(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function qu(e,t,n,r,o,i,l,u,s){return e=new wh(e,t,n,u,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=et(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ou(i),e}function xh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Md(e){if(!e)return Gt;e=e._reactInternals;e:{if(hn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ve(n))return Dc(e,n,t)}return t}function jd(e,t,n,r,o,i,l,u,s){return e=qu(n,r,!0,e,o,i,l,u,s),e.context=Md(null),n=e.current,r=Oe(),o=Qt(n),i=Et(r,o),i.callback=t!=null?t:null,Wt(n,i,o),e.current.lanes=o,Mr(e,o,r),We(e,r),e}function ui(e,t,n,r){var o=t.current,i=Oe(),l=Qt(o);return n=Md(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Wt(o,t,l),e!==null&&(dt(e,o,l,i),go(e,o,l)),l}function Ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ya(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bu(e,t){ya(e,t),(e=e.alternate)&&ya(e,t)}function kh(){return null}var Ud=typeof reportError=="function"?reportError:function(e){console.error(e)};function es(e){this._internalRoot=e}si.prototype.render=es.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));ui(e,t,null,null)};si.prototype.unmount=es.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){ui(null,e,null,null)}),t[_t]=null}};function si(e){this._internalRoot=e}si.prototype.unstable_scheduleHydration=function(e){if(e){var t=gc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&yc(e)}};function ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wa(){}function Sh(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Ko(l);i.call(c)}}var l=jd(t,r,e,0,null,!1,!1,"",wa);return e._reactRootContainer=l,e[_t]=l.current,_r(e.nodeType===8?e.parentNode:e),fn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var c=Ko(s);u.call(c)}}var s=qu(e,0,!1,null,null,!1,!1,"",wa);return e._reactRootContainer=s,e[_t]=s.current,_r(e.nodeType===8?e.parentNode:e),fn(function(){ui(t,s,n,r)}),s}function ci(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var u=o;o=function(){var s=Ko(l);u.call(s)}}ui(t,l,e,o)}else l=Sh(n,t,e,o,r);return Ko(l)}hc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lr(t.pendingLanes);n!==0&&(xu(t,n|1),We(t,ce()),(Q&6)===0&&(Vn=ce()+500,qt()))}break;case 13:fn(function(){var r=Nt(e,1);if(r!==null){var o=Oe();dt(r,e,1,o)}}),bu(e,1)}};ku=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=Oe();dt(t,e,134217728,n)}bu(e,134217728)}};mc=function(e){if(e.tag===13){var t=Qt(e),n=Nt(e,t);if(n!==null){var r=Oe();dt(n,e,t,r)}bu(e,t)}};gc=function(){return Z};vc=function(e,t){var n=Z;try{return Z=e,t()}finally{Z=n}};El=function(e,t,n){switch(t){case"input":if(vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ei(r);if(!o)throw Error(S(90));Xa(r),vl(r,o)}}}break;case"textarea":Za(e,n);break;case"select":t=n.value,t!=null&&Tn(e,!!n.multiple,t,!1)}};rc=Xu;oc=fn;var Ch={usingClientEntryPoint:!1,Events:[Ur,Sn,ei,tc,nc,Xu]},rr={findFiberByHostInstance:nn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Eh={bundleType:rr.bundleType,version:rr.version,rendererPackageName:rr.rendererPackageName,rendererConfig:rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:At.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uc(e),e===null?null:e.stateNode},findFiberByHostInstance:rr.findFiberByHostInstance||kh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{Zo=lo.inject(Eh),gt=lo}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ch;Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ts(t))throw Error(S(200));return xh(e,t,null,n)};Ge.createRoot=function(e,t){if(!ts(e))throw Error(S(299));var n=!1,r="",o=Ud;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=qu(e,1,!1,null,null,n,!1,r,o),e[_t]=t.current,_r(e.nodeType===8?e.parentNode:e),new es(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=uc(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return fn(e)};Ge.hydrate=function(e,t,n){if(!ai(t))throw Error(S(200));return ci(null,e,t,!0,n)};Ge.hydrateRoot=function(e,t,n){if(!ts(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Ud;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=jd(t,null,e,1,n!=null?n:null,o,!1,i,l),e[_t]=t.current,_r(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new si(t)};Ge.render=function(e,t,n){if(!ai(t))throw Error(S(200));return ci(null,e,t,!1,n)};Ge.unmountComponentAtNode=function(e){if(!ai(e))throw Error(S(40));return e._reactRootContainer?(fn(function(){ci(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1};Ge.unstable_batchedUpdates=Xu;Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ai(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return ci(e,t,n,!1,r)};Ge.version="18.2.0-next-9e3b772b8-20220608";function Bd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bd)}catch(e){console.error(e)}}Bd(),ja.exports=Ge;var xa=ja.exports;cl.createRoot=xa.createRoot,cl.hydrateRoot=xa.hydrateRoot;var di={exports:{}},fi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ph=O.exports,_h=Symbol.for("react.element"),Nh=Symbol.for("react.fragment"),$h=Object.prototype.hasOwnProperty,Ah=Ph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Th={key:!0,ref:!0,__self:!0,__source:!0};function Vd(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)$h.call(t,r)&&!Th.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:_h,type:e,key:i,ref:l,props:o,_owner:Ah.current}}fi.Fragment=Nh;fi.jsx=Vd;fi.jsxs=Vd;di.exports=fi;const N=di.exports.jsx,H=di.exports.jsxs,zh=di.exports.Fragment,Tt=O.exports.createContext({}),Rh=[{taskAmout:0,title:"Home",slug:"/",color:"008FFD"}],Lh={name:""};function Ih({children:e}){const t="/",n=JSON.parse(localStorage.getItem("userCategories")||JSON.stringify(Rh)),r=JSON.parse(localStorage.getItem("userTasks")||"[]"),o=JSON.parse(localStorage.getItem("userPreferences")||JSON.stringify(Lh)),[i,l]=O.exports.useState(t),[u,s]=O.exports.useState(n),[c,m]=O.exports.useState(r),[p,h]=O.exports.useState(o);return O.exports.useEffect(()=>{localStorage.setItem("userPreferences",JSON.stringify(p))},[p]),O.exports.useEffect(()=>{localStorage.setItem("userCategories",JSON.stringify(u))},[u]),O.exports.useEffect(()=>{localStorage.setItem("userTasks",JSON.stringify(c))},[c]),O.exports.useEffect(()=>{const k=c.filter(w=>w.category===i).length,y=u.map(w=>w.slug===i?{...w,taskAmout:k}:w);s(y)},[c]),N(Tt.Provider,{value:{tasks:c,setTasks:m,categories:u,setCategories:s,path:i,setPath:l,user:p,setUser:h},children:e})}function Wd(e,t){O.exports.useEffect(()=>{const n=r=>{!e.current||e.current.contains(r.target)||t()};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,t])}var ns={exports:{}},J={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rs=Symbol.for("react.element"),os=Symbol.for("react.portal"),pi=Symbol.for("react.fragment"),hi=Symbol.for("react.strict_mode"),mi=Symbol.for("react.profiler"),gi=Symbol.for("react.provider"),vi=Symbol.for("react.context"),Oh=Symbol.for("react.server_context"),yi=Symbol.for("react.forward_ref"),wi=Symbol.for("react.suspense"),xi=Symbol.for("react.suspense_list"),ki=Symbol.for("react.memo"),Si=Symbol.for("react.lazy"),Fh=Symbol.for("react.offscreen"),Hd;Hd=Symbol.for("react.module.reference");function ot(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case rs:switch(e=e.type,e){case pi:case mi:case hi:case wi:case xi:return e;default:switch(e=e&&e.$$typeof,e){case Oh:case vi:case yi:case Si:case ki:case gi:return e;default:return t}}case os:return t}}}J.ContextConsumer=vi;J.ContextProvider=gi;J.Element=rs;J.ForwardRef=yi;J.Fragment=pi;J.Lazy=Si;J.Memo=ki;J.Portal=os;J.Profiler=mi;J.StrictMode=hi;J.Suspense=wi;J.SuspenseList=xi;J.isAsyncMode=function(){return!1};J.isConcurrentMode=function(){return!1};J.isContextConsumer=function(e){return ot(e)===vi};J.isContextProvider=function(e){return ot(e)===gi};J.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===rs};J.isForwardRef=function(e){return ot(e)===yi};J.isFragment=function(e){return ot(e)===pi};J.isLazy=function(e){return ot(e)===Si};J.isMemo=function(e){return ot(e)===ki};J.isPortal=function(e){return ot(e)===os};J.isProfiler=function(e){return ot(e)===mi};J.isStrictMode=function(e){return ot(e)===hi};J.isSuspense=function(e){return ot(e)===wi};J.isSuspenseList=function(e){return ot(e)===xi};J.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===pi||e===mi||e===hi||e===wi||e===xi||e===Fh||typeof e=="object"&&e!==null&&(e.$$typeof===Si||e.$$typeof===ki||e.$$typeof===gi||e.$$typeof===vi||e.$$typeof===yi||e.$$typeof===Hd||e.getModuleId!==void 0)};J.typeOf=ot;ns.exports=J;function Dh(e){function t(_,T,L,M,g){for(var W=0,P=0,ue=0,K=0,G,B,xe=0,Me=0,Y,$e=Y=G=0,X=0,ke=0,Xn=0,Se=0,Wr=L.length,Gn=Wr-1,it,U="",ae="",Li="",Ii="",zt;X<Wr;){if(B=L.charCodeAt(X),X===Gn&&P+K+ue+W!==0&&(P!==0&&(B=P===47?10:47),K=ue=W=0,Wr++,Gn++),P+K+ue+W===0){if(X===Gn&&(0<ke&&(U=U.replace(h,"")),0<U.trim().length)){switch(B){case 32:case 9:case 59:case 13:case 10:break;default:U+=L.charAt(X)}B=59}switch(B){case 123:for(U=U.trim(),G=U.charCodeAt(0),Y=1,Se=++X;X<Wr;){switch(B=L.charCodeAt(X)){case 123:Y++;break;case 125:Y--;break;case 47:switch(B=L.charCodeAt(X+1)){case 42:case 47:e:{for($e=X+1;$e<Gn;++$e)switch(L.charCodeAt($e)){case 47:if(B===42&&L.charCodeAt($e-1)===42&&X+2!==$e){X=$e+1;break e}break;case 10:if(B===47){X=$e+1;break e}}X=$e}}break;case 91:B++;case 40:B++;case 34:case 39:for(;X++<Gn&&L.charCodeAt(X)!==B;);}if(Y===0)break;X++}switch(Y=L.substring(Se,X),G===0&&(G=(U=U.replace(p,"").trim()).charCodeAt(0)),G){case 64:switch(0<ke&&(U=U.replace(h,"")),B=U.charCodeAt(1),B){case 100:case 109:case 115:case 45:ke=T;break;default:ke=yt}if(Y=t(T,ke,Y,B,g+1),Se=Y.length,0<E&&(ke=n(yt,U,Xn),zt=u(3,Y,ke,T,we,fe,Se,B,g,M),U=ke.join(""),zt!==void 0&&(Se=(Y=zt.trim()).length)===0&&(B=0,Y="")),0<Se)switch(B){case 115:U=U.replace(C,l);case 100:case 109:case 45:Y=U+"{"+Y+"}";break;case 107:U=U.replace(a,"$1 $2"),Y=U+"{"+Y+"}",Y=Ne===1||Ne===2&&i("@"+Y,3)?"@-webkit-"+Y+"@"+Y:"@"+Y;break;default:Y=U+Y,M===112&&(Y=(ae+=Y,""))}else Y="";break;default:Y=t(T,n(T,U,Xn),Y,M,g+1)}Li+=Y,Y=Xn=ke=$e=G=0,U="",B=L.charCodeAt(++X);break;case 125:case 59:if(U=(0<ke?U.replace(h,""):U).trim(),1<(Se=U.length))switch($e===0&&(G=U.charCodeAt(0),G===45||96<G&&123>G)&&(Se=(U=U.replace(" ",":")).length),0<E&&(zt=u(1,U,T,_,we,fe,ae.length,M,g,M))!==void 0&&(Se=(U=zt.trim()).length)===0&&(U="\0\0"),G=U.charCodeAt(0),B=U.charCodeAt(1),G){case 0:break;case 64:if(B===105||B===99){Ii+=U+L.charAt(X);break}default:U.charCodeAt(Se-1)!==58&&(ae+=o(U,G,B,U.charCodeAt(2)))}Xn=ke=$e=G=0,U="",B=L.charCodeAt(++X)}}switch(B){case 13:case 10:P===47?P=0:1+G===0&&M!==107&&0<U.length&&(ke=1,U+="\0"),0<E*D&&u(0,U,T,_,we,fe,ae.length,M,g,M),fe=1,we++;break;case 59:case 125:if(P+K+ue+W===0){fe++;break}default:switch(fe++,it=L.charAt(X),B){case 9:case 32:if(K+W+P===0)switch(xe){case 44:case 58:case 9:case 32:it="";break;default:B!==32&&(it=" ")}break;case 0:it="\\0";break;case 12:it="\\f";break;case 11:it="\\v";break;case 38:K+P+W===0&&(ke=Xn=1,it="\f"+it);break;case 108:if(K+P+W+He===0&&0<$e)switch(X-$e){case 2:xe===112&&L.charCodeAt(X-3)===58&&(He=xe);case 8:Me===111&&(He=Me)}break;case 58:K+P+W===0&&($e=X);break;case 44:P+ue+K+W===0&&(ke=1,it+="\r");break;case 34:case 39:P===0&&(K=K===B?0:K===0?B:K);break;case 91:K+P+ue===0&&W++;break;case 93:K+P+ue===0&&W--;break;case 41:K+P+W===0&&ue--;break;case 40:if(K+P+W===0){if(G===0)switch(2*xe+3*Me){case 533:break;default:G=1}ue++}break;case 64:P+ue+K+W+$e+Y===0&&(Y=1);break;case 42:case 47:if(!(0<K+W+ue))switch(P){case 0:switch(2*B+3*L.charCodeAt(X+1)){case 235:P=47;break;case 220:Se=X,P=42}break;case 42:B===47&&xe===42&&Se+2!==X&&(L.charCodeAt(Se+2)===33&&(ae+=L.substring(Se,X+1)),it="",P=0)}}P===0&&(U+=it)}Me=xe,xe=B,X++}if(Se=ae.length,0<Se){if(ke=T,0<E&&(zt=u(2,ae,ke,_,we,fe,Se,M,g,M),zt!==void 0&&(ae=zt).length===0))return Ii+ae+Li;if(ae=ke.join(",")+"{"+ae+"}",Ne*He!==0){switch(Ne!==2||i(ae,2)||(He=0),He){case 111:ae=ae.replace(v,":-moz-$1")+ae;break;case 112:ae=ae.replace(f,"::-webkit-input-$1")+ae.replace(f,"::-moz-$1")+ae.replace(f,":-ms-input-$1")+ae}He=0}}return Ii+ae+Li}function n(_,T,L){var M=T.trim().split(z);T=M;var g=M.length,W=_.length;switch(W){case 0:case 1:var P=0;for(_=W===0?"":_[0]+" ";P<g;++P)T[P]=r(_,T[P],L).trim();break;default:var ue=P=0;for(T=[];P<g;++P)for(var K=0;K<W;++K)T[ue++]=r(_[K]+" ",M[P],L).trim()}return T}function r(_,T,L){var M=T.charCodeAt(0);switch(33>M&&(M=(T=T.trim()).charCodeAt(0)),M){case 38:return T.replace(d,"$1"+_.trim());case 58:return _.trim()+T.replace(d,"$1"+_.trim());default:if(0<1*L&&0<T.indexOf("\f"))return T.replace(d,(_.charCodeAt(0)===58?"":"$1")+_.trim())}return _+T}function o(_,T,L,M){var g=_+";",W=2*T+3*L+4*M;if(W===944){_=g.indexOf(":",9)+1;var P=g.substring(_,g.length-1).trim();return P=g.substring(0,_).trim()+P+";",Ne===1||Ne===2&&i(P,1)?"-webkit-"+P+P:P}if(Ne===0||Ne===2&&!i(g,1))return g;switch(W){case 1015:return g.charCodeAt(10)===97?"-webkit-"+g+g:g;case 951:return g.charCodeAt(3)===116?"-webkit-"+g+g:g;case 963:return g.charCodeAt(5)===110?"-webkit-"+g+g:g;case 1009:if(g.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+g+g;case 978:return"-webkit-"+g+"-moz-"+g+g;case 1019:case 983:return"-webkit-"+g+"-moz-"+g+"-ms-"+g+g;case 883:if(g.charCodeAt(8)===45)return"-webkit-"+g+g;if(0<g.indexOf("image-set(",11))return g.replace(me,"$1-webkit-$2")+g;break;case 932:if(g.charCodeAt(4)===45)switch(g.charCodeAt(5)){case 103:return"-webkit-box-"+g.replace("-grow","")+"-webkit-"+g+"-ms-"+g.replace("grow","positive")+g;case 115:return"-webkit-"+g+"-ms-"+g.replace("shrink","negative")+g;case 98:return"-webkit-"+g+"-ms-"+g.replace("basis","preferred-size")+g}return"-webkit-"+g+"-ms-"+g+g;case 964:return"-webkit-"+g+"-ms-flex-"+g+g;case 1023:if(g.charCodeAt(8)!==99)break;return P=g.substring(g.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+P+"-webkit-"+g+"-ms-flex-pack"+P+g;case 1005:return y.test(g)?g.replace(k,":-webkit-")+g.replace(k,":-moz-")+g:g;case 1e3:switch(P=g.substring(13).trim(),T=P.indexOf("-")+1,P.charCodeAt(0)+P.charCodeAt(T)){case 226:P=g.replace(x,"tb");break;case 232:P=g.replace(x,"tb-rl");break;case 220:P=g.replace(x,"lr");break;default:return g}return"-webkit-"+g+"-ms-"+P+g;case 1017:if(g.indexOf("sticky",9)===-1)break;case 975:switch(T=(g=_).length-10,P=(g.charCodeAt(T)===33?g.substring(0,T):g).substring(_.indexOf(":",7)+1).trim(),W=P.charCodeAt(0)+(P.charCodeAt(7)|0)){case 203:if(111>P.charCodeAt(8))break;case 115:g=g.replace(P,"-webkit-"+P)+";"+g;break;case 207:case 102:g=g.replace(P,"-webkit-"+(102<W?"inline-":"")+"box")+";"+g.replace(P,"-webkit-"+P)+";"+g.replace(P,"-ms-"+P+"box")+";"+g}return g+";";case 938:if(g.charCodeAt(5)===45)switch(g.charCodeAt(6)){case 105:return P=g.replace("-items",""),"-webkit-"+g+"-webkit-box-"+P+"-ms-flex-"+P+g;case 115:return"-webkit-"+g+"-ms-flex-item-"+g.replace(A,"")+g;default:return"-webkit-"+g+"-ms-flex-line-pack"+g.replace("align-content","").replace(A,"")+g}break;case 973:case 989:if(g.charCodeAt(3)!==45||g.charCodeAt(4)===122)break;case 931:case 953:if(j.test(_)===!0)return(P=_.substring(_.indexOf(":")+1)).charCodeAt(0)===115?o(_.replace("stretch","fill-available"),T,L,M).replace(":fill-available",":stretch"):g.replace(P,"-webkit-"+P)+g.replace(P,"-moz-"+P.replace("fill-",""))+g;break;case 962:if(g="-webkit-"+g+(g.charCodeAt(5)===102?"-ms-"+g:"")+g,L+M===211&&g.charCodeAt(13)===105&&0<g.indexOf("transform",10))return g.substring(0,g.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+g}return g}function i(_,T){var L=_.indexOf(T===1?":":"{"),M=_.substring(0,T!==3?L:10);return L=_.substring(L+1,_.length-1),F(T!==2?M:M.replace(R,"$1"),L,T)}function l(_,T){var L=o(T,T.charCodeAt(0),T.charCodeAt(1),T.charCodeAt(2));return L!==T+";"?L.replace($," or ($1)").substring(4):"("+T+")"}function u(_,T,L,M,g,W,P,ue,K,G){for(var B=0,xe=T,Me;B<E;++B)switch(Me=Le[B].call(m,_,xe,L,M,g,W,P,ue,K,G)){case void 0:case!1:case!0:case null:break;default:xe=Me}if(xe!==T)return xe}function s(_){switch(_){case void 0:case null:E=Le.length=0;break;default:if(typeof _=="function")Le[E++]=_;else if(typeof _=="object")for(var T=0,L=_.length;T<L;++T)s(_[T]);else D=!!_|0}return s}function c(_){return _=_.prefix,_!==void 0&&(F=null,_?typeof _!="function"?Ne=1:(Ne=2,F=_):Ne=0),c}function m(_,T){var L=_;if(33>L.charCodeAt(0)&&(L=L.trim()),b=L,L=[b],0<E){var M=u(-1,T,L,L,we,fe,0,0,0,0);M!==void 0&&typeof M=="string"&&(T=M)}var g=t(yt,L,T,0,0);return 0<E&&(M=u(-2,g,L,L,we,fe,g.length,0,0,0),M!==void 0&&(g=M)),b="",He=0,fe=we=1,g}var p=/^\0+/g,h=/[\0\r\f]/g,k=/: */g,y=/zoo|gra/,w=/([,: ])(transform)/g,z=/,\r+?/g,d=/([\t\r\n ])*\f?&/g,a=/@(k\w+)\s*(\S*)\s*/,f=/::(place)/g,v=/:(read-only)/g,x=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,A=/-self|flex-/g,R=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,me=/([^-])(image-set\()/,fe=1,we=1,He=0,Ne=1,yt=[],Le=[],E=0,F=null,D=0,b="";return m.use=s,m.set=c,e!==void 0&&c(e),m}var Mh={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function jh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Uh=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ka=jh(function(e){return Uh.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Qd={exports:{}},q={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye=typeof Symbol=="function"&&Symbol.for,is=ye?Symbol.for("react.element"):60103,ls=ye?Symbol.for("react.portal"):60106,Ci=ye?Symbol.for("react.fragment"):60107,Ei=ye?Symbol.for("react.strict_mode"):60108,Pi=ye?Symbol.for("react.profiler"):60114,_i=ye?Symbol.for("react.provider"):60109,Ni=ye?Symbol.for("react.context"):60110,us=ye?Symbol.for("react.async_mode"):60111,$i=ye?Symbol.for("react.concurrent_mode"):60111,Ai=ye?Symbol.for("react.forward_ref"):60112,Ti=ye?Symbol.for("react.suspense"):60113,Bh=ye?Symbol.for("react.suspense_list"):60120,zi=ye?Symbol.for("react.memo"):60115,Ri=ye?Symbol.for("react.lazy"):60116,Vh=ye?Symbol.for("react.block"):60121,Wh=ye?Symbol.for("react.fundamental"):60117,Hh=ye?Symbol.for("react.responder"):60118,Qh=ye?Symbol.for("react.scope"):60119;function Je(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case is:switch(e=e.type,e){case us:case $i:case Ci:case Pi:case Ei:case Ti:return e;default:switch(e=e&&e.$$typeof,e){case Ni:case Ai:case Ri:case zi:case _i:return e;default:return t}}case ls:return t}}}function Yd(e){return Je(e)===$i}q.AsyncMode=us;q.ConcurrentMode=$i;q.ContextConsumer=Ni;q.ContextProvider=_i;q.Element=is;q.ForwardRef=Ai;q.Fragment=Ci;q.Lazy=Ri;q.Memo=zi;q.Portal=ls;q.Profiler=Pi;q.StrictMode=Ei;q.Suspense=Ti;q.isAsyncMode=function(e){return Yd(e)||Je(e)===us};q.isConcurrentMode=Yd;q.isContextConsumer=function(e){return Je(e)===Ni};q.isContextProvider=function(e){return Je(e)===_i};q.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===is};q.isForwardRef=function(e){return Je(e)===Ai};q.isFragment=function(e){return Je(e)===Ci};q.isLazy=function(e){return Je(e)===Ri};q.isMemo=function(e){return Je(e)===zi};q.isPortal=function(e){return Je(e)===ls};q.isProfiler=function(e){return Je(e)===Pi};q.isStrictMode=function(e){return Je(e)===Ei};q.isSuspense=function(e){return Je(e)===Ti};q.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ci||e===$i||e===Pi||e===Ei||e===Ti||e===Bh||typeof e=="object"&&e!==null&&(e.$$typeof===Ri||e.$$typeof===zi||e.$$typeof===_i||e.$$typeof===Ni||e.$$typeof===Ai||e.$$typeof===Wh||e.$$typeof===Hh||e.$$typeof===Qh||e.$$typeof===Vh)};q.typeOf=Je;Qd.exports=q;var ss=Qd.exports,Yh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Kh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xh={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Kd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},as={};as[ss.ForwardRef]=Xh;as[ss.Memo]=Kd;function Sa(e){return ss.isMemo(e)?Kd:as[e.$$typeof]||Yh}var Gh=Object.defineProperty,Zh=Object.getOwnPropertyNames,Ca=Object.getOwnPropertySymbols,Jh=Object.getOwnPropertyDescriptor,qh=Object.getPrototypeOf,Ea=Object.prototype;function Xd(e,t,n){if(typeof t!="string"){if(Ea){var r=qh(t);r&&r!==Ea&&Xd(e,r,n)}var o=Zh(t);Ca&&(o=o.concat(Ca(t)));for(var i=Sa(e),l=Sa(t),u=0;u<o.length;++u){var s=o[u];if(!Kh[s]&&!(n&&n[s])&&!(l&&l[s])&&!(i&&i[s])){var c=Jh(t,s);try{Gh(e,s,c)}catch{}}}}return e}var bh=Xd;function Ct(){return(Ct=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Pa=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},ru=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!ns.exports.typeOf(e)},Xo=Object.freeze([]),Kt=Object.freeze({});function Or(e){return typeof e=="function"}function _a(e){return e.displayName||e.name||"Component"}function cs(e){return e&&typeof e.styledComponentId=="string"}var Wn=typeof process!="undefined"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ds=typeof window!="undefined"&&"HTMLElement"in window,e0=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1);function Vr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var t0=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,l=i;n>=l;)(l<<=1)<0&&Vr(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(o),this.length=l;for(var u=i;u<l;u++)this.groupSizes[u]=0}for(var s=this.indexOfGroup(n+1),c=0,m=r.length;c<m;c++)this.tag.insertRule(s,r[c])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var l=o;l<i;l++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),l=i+o,u=i;u<l;u++)r+=this.tag.getRule(u)+`/*!sc*/
`;return r},e}(),Co=new Map,Go=new Map,vr=1,uo=function(e){if(Co.has(e))return Co.get(e);for(;Go.has(vr);)vr++;var t=vr++;return Co.set(e,t),Go.set(t,e),t},n0=function(e){return Go.get(e)},r0=function(e,t){t>=vr&&(vr=t+1),Co.set(e,t),Go.set(t,e)},o0="style["+Wn+'][data-styled-version="5.3.5"]',i0=new RegExp("^"+Wn+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),l0=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},u0=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var l=n[o].trim();if(l){var u=l.match(i0);if(u){var s=0|parseInt(u[1],10),c=u[2];s!==0&&(r0(c,s),l0(e,c,u[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(l)}}},s0=function(){return typeof window!="undefined"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},Gd=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(u){for(var s=u.childNodes,c=s.length;c>=0;c--){var m=s[c];if(m&&m.nodeType===1&&m.hasAttribute(Wn))return m}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Wn,"active"),r.setAttribute("data-styled-version","5.3.5");var l=s0();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},a0=function(){function e(n){var r=this.element=Gd(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,l=0,u=i.length;l<u;l++){var s=i[l];if(s.ownerNode===o)return s}Vr(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),c0=function(){function e(n){var r=this.element=Gd(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),d0=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Na=ds,f0={isServer:!ds,useCSSOMInjection:!e0},Zd=function(){function e(n,r,o){n===void 0&&(n=Kt),r===void 0&&(r={}),this.options=Ct({},f0,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&ds&&Na&&(Na=!1,function(i){for(var l=document.querySelectorAll(o0),u=0,s=l.length;u<s;u++){var c=l[u];c&&c.getAttribute(Wn)!=="active"&&(u0(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return uo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Ct({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,l=r.target,n=o?new d0(l):i?new a0(l):new c0(l),new t0(n)));var n,r,o,i,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(uo(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(uo(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(uo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",l=0;l<o;l++){var u=n0(l);if(u!==void 0){var s=n.names.get(u),c=r.getGroup(l);if(s&&c&&s.size){var m=Wn+".g"+l+'[id="'+u+'"]',p="";s!==void 0&&s.forEach(function(h){h.length>0&&(p+=h+",")}),i+=""+c+m+'{content:"'+p+`"}/*!sc*/
`}}}return i}(this)},e}(),p0=/(a)(d)/gi,$a=function(e){return String.fromCharCode(e+(e>25?39:97))};function ou(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=$a(t%52)+n;return($a(t%52)+n).replace(p0,"$1-$2")}var An=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Jd=function(e){return An(5381,e)};function h0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Or(n)&&!cs(n))return!1}return!0}var m0=Jd("5.3.5"),g0=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&h0(t),this.componentId=n,this.baseHash=An(m0,n),this.baseStyle=r,Zd.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var l=Hn(this.rules,t,n,r).join(""),u=ou(An(this.baseHash,l)>>>0);if(!n.hasNameForId(o,u)){var s=r(l,"."+u,void 0,o);n.insertRules(o,u,s)}i.push(u),this.staticRulesId=u}else{for(var c=this.rules.length,m=An(this.baseHash,r.hash),p="",h=0;h<c;h++){var k=this.rules[h];if(typeof k=="string")p+=k;else if(k){var y=Hn(k,t,n,r),w=Array.isArray(y)?y.join(""):y;m=An(m,w+h),p+=w}}if(p){var z=ou(m>>>0);if(!n.hasNameForId(o,z)){var d=r(p,"."+z,void 0,o);n.insertRules(o,z,d)}i.push(z)}}return i.join(" ")},e}(),v0=/^\s*\/\/.*$/gm,y0=[":","[",".","#"];function w0(e){var t,n,r,o,i=e===void 0?Kt:e,l=i.options,u=l===void 0?Kt:l,s=i.plugins,c=s===void 0?Xo:s,m=new Dh(u),p=[],h=function(w){function z(d){if(d)try{w(d+"}")}catch{}}return function(d,a,f,v,x,C,$,A,R,j){switch(d){case 1:if(R===0&&a.charCodeAt(0)===64)return w(a+";"),"";break;case 2:if(A===0)return a+"/*|*/";break;case 3:switch(A){case 102:case 112:return w(f[0]+a),"";default:return a+(j===0?"/*|*/":"")}case-2:a.split("/*|*/}").forEach(z)}}}(function(w){p.push(w)}),k=function(w,z,d){return z===0&&y0.indexOf(d[n.length])!==-1||d.match(o)?w:"."+t};function y(w,z,d,a){a===void 0&&(a="&");var f=w.replace(v0,""),v=z&&d?d+" "+z+" { "+f+" }":f;return t=a,n=z,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),m(d||!z?"":z,v)}return m.use([].concat(c,[function(w,z,d){w===2&&d.length&&d[0].lastIndexOf(n)>0&&(d[0]=d[0].replace(r,k))},h,function(w){if(w===-2){var z=p;return p=[],z}}])),y.hash=c.length?c.reduce(function(w,z){return z.name||Vr(15),An(w,z.name)},5381).toString():"",y}var qd=Dr.createContext();qd.Consumer;var bd=Dr.createContext(),x0=(bd.Consumer,new Zd),iu=w0();function k0(){return O.exports.useContext(qd)||x0}function S0(){return O.exports.useContext(bd)||iu}var C0=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=iu);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.toString=function(){return Vr(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=iu),this.name+t.hash},e}(),E0=/([A-Z])/,P0=/([A-Z])/g,_0=/^ms-/,N0=function(e){return"-"+e.toLowerCase()};function Aa(e){return E0.test(e)?e.replace(P0,N0).replace(_0,"-ms-"):e}var Ta=function(e){return e==null||e===!1||e===""};function Hn(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],l=0,u=e.length;l<u;l+=1)(o=Hn(e[l],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(Ta(e))return"";if(cs(e))return"."+e.styledComponentId;if(Or(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var s=e(t);return Hn(s,t,n,r)}var c;return e instanceof C0?n?(e.inject(n,r),e.getName(r)):e:ru(e)?function m(p,h){var k,y,w=[];for(var z in p)p.hasOwnProperty(z)&&!Ta(p[z])&&(Array.isArray(p[z])&&p[z].isCss||Or(p[z])?w.push(Aa(z)+":",p[z],";"):ru(p[z])?w.push.apply(w,m(p[z],z)):w.push(Aa(z)+": "+(k=z,(y=p[z])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||k in Mh?String(y).trim():y+"px")+";"));return h?[h+" {"].concat(w,["}"]):w}(e):e.toString()}var za=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function $0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Or(e)||ru(e)?za(Hn(Pa(Xo,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:za(Hn(Pa(e,n)))}var A0=function(e,t,n){return n===void 0&&(n=Kt),e.theme!==n.theme&&e.theme||t||n.theme},T0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,z0=/(^-|-$)/g;function ul(e){return e.replace(T0,"-").replace(z0,"")}var R0=function(e){return ou(Jd(e)>>>0)};function so(e){return typeof e=="string"&&!0}var lu=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},L0=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function I0(e,t,n){var r=e[n];lu(t)&&lu(r)?ef(r,t):e[n]=t}function ef(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var l=i[o];if(lu(l))for(var u in l)L0(u)&&I0(e,l[u],u)}return e}var tf=Dr.createContext();tf.Consumer;var sl={};function nf(e,t,n){var r=cs(e),o=!so(e),i=t.attrs,l=i===void 0?Xo:i,u=t.componentId,s=u===void 0?function(a,f){var v=typeof a!="string"?"sc":ul(a);sl[v]=(sl[v]||0)+1;var x=v+"-"+R0("5.3.5"+v+sl[v]);return f?f+"-"+x:x}(t.displayName,t.parentComponentId):u,c=t.displayName,m=c===void 0?function(a){return so(a)?"styled."+a:"Styled("+_a(a)+")"}(e):c,p=t.displayName&&t.componentId?ul(t.displayName)+"-"+t.componentId:t.componentId||s,h=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,k=t.shouldForwardProp;r&&e.shouldForwardProp&&(k=t.shouldForwardProp?function(a,f,v){return e.shouldForwardProp(a,f,v)&&t.shouldForwardProp(a,f,v)}:e.shouldForwardProp);var y,w=new g0(n,p,r?e.componentStyle:void 0),z=w.isStatic&&l.length===0,d=function(a,f){return function(v,x,C,$){var A=v.attrs,R=v.componentStyle,j=v.defaultProps,me=v.foldedComponentIds,fe=v.shouldForwardProp,we=v.styledComponentId,He=v.target,Ne=function(M,g,W){M===void 0&&(M=Kt);var P=Ct({},g,{theme:M}),ue={};return W.forEach(function(K){var G,B,xe,Me=K;for(G in Or(Me)&&(Me=Me(P)),Me)P[G]=ue[G]=G==="className"?(B=ue[G],xe=Me[G],B&&xe?B+" "+xe:B||xe):Me[G]}),[P,ue]}(A0(x,O.exports.useContext(tf),j)||Kt,x,A),yt=Ne[0],Le=Ne[1],E=function(M,g,W,P){var ue=k0(),K=S0(),G=g?M.generateAndInjectStyles(Kt,ue,K):M.generateAndInjectStyles(W,ue,K);return G}(R,$,yt),F=C,D=Le.$as||x.$as||Le.as||x.as||He,b=so(D),_=Le!==x?Ct({},x,{},Le):x,T={};for(var L in _)L[0]!=="$"&&L!=="as"&&(L==="forwardedAs"?T.as=_[L]:(fe?fe(L,ka,D):!b||ka(L))&&(T[L]=_[L]));return x.style&&Le.style!==x.style&&(T.style=Ct({},x.style,{},Le.style)),T.className=Array.prototype.concat(me,we,E!==we?E:null,x.className,Le.className).filter(Boolean).join(" "),T.ref=F,O.exports.createElement(D,T)}(y,a,f,z)};return d.displayName=m,(y=Dr.forwardRef(d)).attrs=h,y.componentStyle=w,y.displayName=m,y.shouldForwardProp=k,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Xo,y.styledComponentId=p,y.target=r?e.target:e,y.withComponent=function(a){var f=t.componentId,v=function(C,$){if(C==null)return{};var A,R,j={},me=Object.keys(C);for(R=0;R<me.length;R++)A=me[R],$.indexOf(A)>=0||(j[A]=C[A]);return j}(t,["componentId"]),x=f&&f+"-"+(so(a)?a:ul(_a(a)));return nf(a,Ct({},v,{attrs:h,componentId:x}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(a){this._foldedDefaultProps=r?ef({},e.defaultProps,a):a}}),y.toString=function(){return"."+y.styledComponentId},o&&bh(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var uu=function(e){return function t(n,r,o){if(o===void 0&&(o=Kt),!ns.exports.isValidElementType(r))return Vr(1,String(r));var i=function(){return n(r,o,$0.apply(void 0,arguments))};return i.withConfig=function(l){return t(n,r,Ct({},o,{},l))},i.attrs=function(l){return t(n,r,Ct({},o,{attrs:Array.prototype.concat(o.attrs,l).filter(Boolean)}))},i}(nf,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){uu[e]=uu(e)});var bt=uu;const O0=bt.div`
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
  animation: ${e=>e.isSelectingColor?"fadeIn .15s ease forwards":""};

  @keyframes fadeIn {
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
`;function F0({setColor:e,isSelectingColor:t,setIsSelectingColor:n}){O.exports.useContext(Tt);const[r,o]=O.exports.useState("008FFD"),i=O.exports.useRef(null);Wd(i,()=>n(!1));function l(s,c){c==null||c.preventDefault(),e(s),n(!t)}return O.exports.useEffect(()=>{r===""&&o("008FFD")},[r]),N(O0,{theme:mn,isSelectingColor:t,ref:i,children:t&&H(zh,{children:[N("h4",{children:"Colors"}),N("div",{className:"colors",children:N("ul",{children:["0564A4","0C8FF1","0ABAFA","0BB8AA","00B873","DDBC10","FCF7BD","FF705D","F8003C","BE0A19","B90F8B","F56ED8","7E45F7","4A40EE","94959F","7B7168"].map(s=>N("li",{onClick:()=>l(s),children:N("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:N("rect",{x:"1.25",y:"1.25",width:"12.5",height:"12.5",rx:"4.75",stroke:`#${s}`,fill:`#${s}`,strokeWidth:"2.5"})})},s))})}),H("div",{id:"custom-color-wrapper",children:[N("h4",{children:"Custom color"}),H("div",{id:"custom-color",children:[N("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:N("rect",{x:"1.25",y:"1.25",width:"12.5",height:"12.5",rx:"4.75",stroke:`#${r}`,fill:`#${r}`,strokeWidth:"2.5"})}),N("form",{noValidate:!0,onSubmit:s=>l(r,s),children:N("input",{type:"text",placeholder:r,onChange:s=>o(s.target.value)})})]})]})]})})}var rf="/dona-clone/assets/removeIcon.63e204af.svg";const D0=bt.a`
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

  animation: fadeIn 0.25s ease;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

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
`;function M0({category:e}){const{categories:t,setCategories:n,setPath:r,tasks:o,setTasks:i,path:l,user:u}=O.exports.useContext(Tt),[s,c]=O.exports.useState(""),[m,p]=O.exports.useState("008FFD"),[h,k]=O.exports.useState(!1),[y,w]=O.exports.useState("");function z(x){r(x)}function d(x,C){C.stopPropagation(),x!=="/"&&(c(x),setTimeout(()=>{a(x),f(x)},250),r("/"))}const a=x=>{const C=t.filter($=>$.slug!==x);n(C)},f=x=>{const C=o.filter($=>$.category!==x);i(C)};function v(x,C){C.stopPropagation(),k(!h),w(x)}return O.exports.useEffect(()=>{n(t.map(x=>x.slug===y?{...x,color:m}:x))},[m]),H(D0,{theme:mn,beingRemoved:s===e.slug,activeCategory:e.slug===l,onClick:()=>z(e.slug),children:[H("div",{className:"left",children:[N("span",{onClick:x=>v(e.slug,x),children:N("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:N("rect",{x:"1.25",y:"1.25",width:"12.5",height:"12.5",rx:"4.75",stroke:`#${e.color}`,strokeWidth:"2.5"})})}),N("h3",{children:e.title}),N(F0,{setColor:p,isSelectingColor:h,setIsSelectingColor:k})]}),H("span",{className:"task-amout",children:[N("h4",{children:e.taskAmout}),e.slug!=="/"&&N("button",{className:"remove-category",onClick:x=>d(e.slug,x),children:N("img",{src:rf,alt:"Remove Category",width:12})})]})]})}function of(e){O.exports.useEffect(()=>{const t=n=>{const r=n.key.toLowerCase(),o=n.ctrlKey;e.forEach(i=>{o===i.ctrlKey&&r===i.key.toLowerCase()&&(n.preventDefault(),i.handler())})};return document.addEventListener("keydown",n=>t(n)),()=>{document.removeEventListener("keydown",n=>t(n))}},[e])}var j0="/dona-clone/assets/addIcon.408931b1.svg";const U0=bt.aside`
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
    padding: 0 33px;

    img {
      aspect-ratio: 1;
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
`;function B0(){const{categories:e,setCategories:t,setPath:n,user:r}=O.exports.useContext(Tt),[o,i]=O.exports.useState(""),l=O.exports.useRef(null);function u(p){p.preventDefault(),o&&(e.map(h=>h.title).includes(o)||(s(),i(""),c()))}const s=()=>{const p="/"+o.toLowerCase().replace(" ","-"),h={taskAmout:0,title:o,slug:p,color:"6D6D6D"};t([...e,h])},c=()=>{const p="/"+o.toLowerCase().replace(" ","-");n(p)};return of([{ctrlKey:!0,key:"D",handler:()=>{var p;return(p=l.current)==null?void 0:p.focus()}},{ctrlKey:!1,key:"Escape",handler:()=>{var p;return(p=l.current)==null?void 0:p.blur()}}]),H(U0,{theme:mn,children:[N("nav",{children:e.map(p=>N(M0,{category:{taskAmout:p.taskAmout,title:p.title,slug:p.slug,color:p.color}},p.slug))}),H("form",{onSubmit:u,noValidate:!0,children:[N("img",{src:j0,alt:"Choose Icon",width:15}),N("input",{type:"text",placeholder:"Create new category...",onChange:p=>i(p.target.value),value:o,ref:l})]})]})}var ao,V0=new Uint8Array(16);function W0(){if(!ao&&(ao=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!ao))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ao(V0)}var H0=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Q0(e){return typeof e=="string"&&H0.test(e)}var Ce=[];for(var al=0;al<256;++al)Ce.push((al+256).toString(16).substr(1));function Y0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(Ce[e[t+0]]+Ce[e[t+1]]+Ce[e[t+2]]+Ce[e[t+3]]+"-"+Ce[e[t+4]]+Ce[e[t+5]]+"-"+Ce[e[t+6]]+Ce[e[t+7]]+"-"+Ce[e[t+8]]+Ce[e[t+9]]+"-"+Ce[e[t+10]]+Ce[e[t+11]]+Ce[e[t+12]]+Ce[e[t+13]]+Ce[e[t+14]]+Ce[e[t+15]]).toLowerCase();if(!Q0(n))throw TypeError("Stringified UUID is invalid");return n}function K0(e,t,n){e=e||{};var r=e.random||(e.rng||W0)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return Y0(r)}const X0=bt.li`
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

  animation: fadeIn 0.25s ease;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

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

        animation: ${e=>e.checked?"bounce .25s ease forwards":""};

        @keyframes bounce {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }

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
`;function G0({task:e}){const{categories:t,tasks:n,setTasks:r,user:o}=O.exports.useContext(Tt),[i,l]=O.exports.useState(""),[u,s]=O.exports.useState(e.checked);function c(p){const h=n.filter(k=>k.id!==p);l(p),m(h)}const m=p=>{setTimeout(()=>{r(p)},250)};return O.exports.useEffect(()=>{r(n.map(p=>p.id===e.id?{...e,checked:u}:p))},[u]),H(X0,{theme:mn,beingRemoved:i===e.id,checked:e.checked,children:[H("div",{className:"left",children:[H("label",{children:[N("input",{type:"checkbox",defaultChecked:u,onChange:()=>s(!u)}),N("div",{className:"checkbox-div"})]}),N("h3",{children:e.content})]}),H("div",{className:"right",children:[N("h4",{className:"date",children:`${e.date.split(" ")[1]} ${e.date.split(" ")[2]}`}),N("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:N("rect",{x:"1.25",y:"1.25",width:"12.5",height:"12.5",rx:"4.75",stroke:`#${t.filter(p=>p.slug===e.category)[0].color}`,strokeWidth:"2.5"})}),N("button",{onClick:()=>c(e.id),children:N("img",{src:rf,alt:"",width:15})})]})]})}var Z0="/dona-clone/assets/checkIcon.97d19678.svg";const J0=bt.div`
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

  animation: ${e=>e.isSelectingCategory?"fadeIn .15s ease forwards":""};

  @keyframes fadeIn {
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
`;function q0({isSelectingCategory:e,setIsSelectingCategory:t,category:n,setCategory:r}){const{categories:o,user:i}=O.exports.useContext(Tt),l=O.exports.useRef(null);return Wd(l,()=>t(!1)),N(J0,{theme:mn,isSelectingCategory:e,ref:l,children:e&&N("ul",{children:o.map(u=>H("li",{onClick:()=>r(u),children:[N("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:N("rect",{x:"1.25",y:"1.25",width:"12.5",height:"12.5",rx:"4.75",stroke:`#${u.color}`,strokeWidth:"2.5"})}),N("h4",{children:u.title}),n.slug===u.slug&&N("img",{src:Z0,alt:"Chosen Category",width:10,id:"checkmark"})]},u.slug))})})}var lf="/dona-clone/assets/donaBlue.4a2239b6.svg";const b0=bt.main`
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

      animation: slideIn 0.25s ease;

      @keyframes slideIn {
        0% {
          transform: translateX(60px) translateY(-10px);
          opacity: 0;
        }
        100% {
          transform: translateX(60px) translateY(0px);
          opacity: 1;
        }
      }

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

              animation: ${e=>e.checked?"bounce 0.25s ease forwards":""};

              @keyframes bounce {
                0% {
                  transform: scale(1);
                }
                50% {
                  transform: scale(0.9);
                }
                100% {
                  transform: scale(1);
                }
              }
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

      .shortcuts {
        display: flex;
        flex-direction: column;

        width: 100%;
        height: 100%;

        align-items: center;
        justify-content: center;

        gap: 20px;

        .shortcut-wrapper {
          display: flex;
          flex-direction: row;

          width: 400px;

          align-items: center;

          gap: 8px;

          color: ${e=>e.theme.bolder};

          opacity: 0.5;

          .shortcut {
            display: grid;
            place-items: center;

            width: 90px;

            padding: 6px 12px;

            font-weight: 600;

            border-radius: 4px;

            color: ${e=>e.theme.text};
            background-color: ${e=>e.theme.bold};
          }
        }
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
`;function em(){var A;const{tasks:e,setTasks:t,categories:n,path:r,user:o}=O.exports.useContext(Tt),[i,l]=O.exports.useState(""),[u,s]=O.exports.useState(!1),[c,m]=O.exports.useState(n[0]),[p,h]=O.exports.useState(!1),k=O.exports.useRef(null),y=new Date;function w(R){R.preventDefault(),i&&(z(),l(""))}const z=()=>{const R={category:c.slug,checked:u,content:i,date:y.toString(),id:K0()};t([...e,R])};O.exports.useEffect(()=>{var R;(R=k.current)==null||R.focus()},[u,c,p]),O.exports.useEffect(()=>{var R;(R=k.current)==null||R.blur()},[]);const d=()=>{switch(y.getDay()){case 0:return"Sunday";case 1:return"Monday";case 2:return"Thuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday";default:return""}},a=()=>{const R=y.getHours();return R<12?"morning":R<18?"afternoon":"evening"},f=e.filter(R=>R.category===r),v=y.toString().split(" ")[1],x=y.toString().split(" ")[2],C=()=>navigator.userAgent.indexOf("Mac")!=-1?"Cmd":"Ctrl";return of([{ctrlKey:!0,key:"S",handler:()=>{var R;return(R=k.current)==null?void 0:R.focus()}},{ctrlKey:!1,key:"Escape",handler:()=>{var R;return(R=k.current)==null?void 0:R.blur()}}]),N(b0,{theme:mn,checked:u,children:H("div",{id:"tasks-area-wrapper",children:[r==="/"&&H("header",{children:[N("img",{src:lf,alt:"Dona Logo",width:35}),H("h1",{children:["Good ",a(),", ",o.name]}),H("h2",{children:["It's ",d(),", ",v," ",x]})]}),N("h1",{className:"category-indicator",children:(A=n.filter(R=>R.slug===r)[0])==null?void 0:A.title}),H("div",{id:"task-writter",onClick:()=>{var R;return(R=k.current)==null?void 0:R.focus()},children:[H("div",{className:"left",children:[H("label",{children:[N("input",{type:"checkbox",defaultChecked:u,onChange:()=>s(!u)}),N("div",{className:"checkbox-div"})]}),N("form",{noValidate:!0,onSubmit:w,children:N("input",{type:"text",placeholder:"Write a new task...",onChange:R=>l(R.target.value),value:i,ref:k})})]}),H("div",{className:"right",onClick:()=>h(!p),children:[N("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:N("rect",{x:"1.25",y:"1.25",width:"12.5",height:"12.5",rx:"4.75",stroke:`#${c.color}`,strokeWidth:"2.5"})}),N("h4",{children:c.title}),N(q0,{category:c,setCategory:m,isSelectingCategory:p,setIsSelectingCategory:h})]})]}),H("ul",{children:[e.length===0&&H("div",{className:"shortcuts",children:[H("div",{className:"shortcut-wrapper",children:[H("span",{className:"shortcut",children:[C()," + S"]}),N("h3",{children:"to start writing a new task"})]}),H("div",{className:"shortcut-wrapper",children:[H("span",{className:"shortcut",children:[C()," + D"]}),N("h3",{children:"to start writing a new category"})]}),H("div",{className:"shortcut-wrapper",children:[N("span",{className:"shortcut",children:"Enter"}),N("h3",{children:"to add the current task"})]})]}),f.reverse().map(R=>N(G0,{task:{category:R.category,checked:R.checked,content:R.content,date:R.date,id:R.id}},R.id))]})]})})}var tm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABlCAYAAABUfC3PAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATySURBVHgB7ZxfTuMwEManYZGQ4KF7g/QBAW/0BFtOsNoTwJ5guQHlBtyA7glWnIByAngDykNzg+1ThZCAnem6VUv/ZRzHGeP5SVFLSZRMvtixx/ZXA0tub2/rW1tbh/g1NdsyMtqen5/vms3mAALFZ7w1zs50YTs7O7/e399btAGTWq3WxeM6b29vNwcHBxkIp6p4c4lyf3+fJknSxq/H4Ai84M7r6+u5RHGqjnetKL1ej56UNn6tQwlQ8Lu7u+cgBAnxLhWFiu729vYfm2LLhYo5PkU/qyw1kuJdKIopvtew+oXmmgzr3qMqhJEWb/Lxh4oukBidl55Y8IjEeOdE2djYuAT/FzgmpSoEPCIx3hlRnp6eznzUqaug8z88PJyCB6TGO3mnmGLcBxkMsL5tlvl+kRzvpKSYdrkU6litnEGJSI53VFKEPTUThsPh1zJSM9Lj/WL+boElWCdm+HGFn3M3D9vjddy+g+WLFHNNVNe2wT0tsMRHvCNRsOgc40mACbWzqQPUXbPfKT6ZJ/hkUvFMgQFe1zcoAenx1vr9fv3l5eUv8GB39Gz7A66rsBDiTTDFfAh82tyWEe1PTxowMelyZ4QQL7W+UuCR7e3t/QYLTNHPgEcKbkmBh/d42aJgXXwFBbA4PgW3pJydq4g3YR4Ai1odPo/3TRXxskVRykdFEYiKIhAVRSBsUSiVAEpubO4XiZJxDjC5HSUnFvcrY4uCpJhCaIGyFsqBgUVnNcFu/R0wwZzOJeV2QFmKyX2xx4RoZmXSaDQGNOUFeIySbY+Pj84mq30mqCaxSUZiR7NLydfxIFfbRlVDRqmEvD1XSk9zxsXNHKkbcESZ5y86noKcUJ5tJIplOltxDGaVG5RdHjWJqQrDH6wyoYobaCL43MQJ+D/sGuxShdBBUSbziyeikErT/1D8gbXUzGz8ubnEvV7vuuoJajFBLa79/f2j6d/m0iybm5s/gN+hVOyg2mluyHhOFPPSJ+UyUMok/6x7wgz6H1l0KpUcUJU1HA6brPUp0xTsWCqzDKgxhe+Qi1U75V7ziB8kjqZVLKF+CAniZM3jNEacFlZrx7i1QFkJVVO43WCS8YIzoZAlyjSMdeUzfObclyGDguvov4Al5oRdYGLeUa28+9MNwSLfBkdUff486Bi9QFQUgagoAlFRBKKiCERFEYiKIhAVRSAqikBUFIGoKAJRUQSioghERRGIiiIQFUUgKopAVBSB6Bi9+/NnEJLXfWwE53UfG0F53cdGMF73sRGS131sBOF1HxvBeN3HRhhe97ERktd9bAThdR8b4Xjdx4YXr/tFqDfLcnx63c8QwfqUwl73CZnlWLS4xh2fLihz4H3p2Cx7Jx2o3+LN6z42gvG6j41gvO5jIwiv+9hQr/tPgooiEBVFICqKQLx73YfmlV9FvN697m2838EtGWfnKuL16nVv6/0ObsmAh/d4vXndF/F+B4eEEK8Xr/ui3u/gkBDiHaXuKT3NSWePLxS3Dl5oe5nXfdHxBZpVCCUgPV7RXvdj73dwjPR4xXrdT3u/u0Z6vGK97j1YvLdBaLwive4/er+XgeR4xXndL/J+LxOJ8Urzul/o/V4mEuOV5HW/dBZ6mUiMV4TX/Trv97KRFm/VXve5vN99IiHeyrzuOd7vvqk6Xq9e97be71VRVbw+1tFnUHBduQR8xvsP6NeLmHTiMwoAAAAASUVORK5CYII=",nm="/dona-clone/assets/donaLists.d749d46d.png";const rm=bt.div`
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
      animation: modalTop 1s ease-out forwards;

      @keyframes modalTop {
        0% {
          opacity: 0;
          transform: translateY(-20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0px);
        }
      }
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

      .third-image {
        width: 300px;
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
        animation: slideLeft 1s ease forwards;

        @keyframes slideLeft {
          0% {
            opacity: 0;
            transform: translateX(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0px);
          }
        }
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

      svg {
        position: absolute;

        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }
`;function om(){const{user:e,setUser:t}=O.exports.useContext(Tt),[n,r]=O.exports.useState(1),[o,i]=O.exports.useState(""),[l,u]=O.exports.useState(!0);function s(){if(o){t({...e,name:o});return}n>=4||(r(m=>m+1),u(!0))}const c=()=>{switch(n){case 1:return{title:"Welcome to Dona Clone",subtitle:"Dona is a back to-do list focused on fast and delightful user experience.",image:lf};case 2:return{title:"We have shortcuts",subtitle:"Dona offers a lot of shortcuts. Test them out.",image:tm};case 3:return{title:"Powerful lists",subtitle:"Organize your tasks into fully customizable lists.",image:nm};case 4:return{title:"What's your name?",subtitle:"",image:""};default:return{title:"",subtitle:"",image:""}}};return N(rm,{activeWelcomePage:n,onAnimationEnd:()=>u(!1),children:H("div",{id:"modal",children:[N("div",{id:"modal-top",className:l?"modal-top-animation":"",children:n!==4&&N("img",{src:c().image,alt:"Dona",width:100,className:n===3?"third-image":""})}),H("div",{id:"modal-bottom",children:[H("span",{className:l?"span-animation ":"",children:[N("h2",{children:c().title}),N("h3",{children:c().subtitle}),n===4&&N("input",{type:"text",placeholder:"Type it here...",onChange:m=>i(m.target.value)})]}),N("button",{onClick:s,children:"Continue"}),H("svg",{viewBox:"0 0 70 10",width:"70",height:"10",children:[N("circle",{cx:"5",cy:"5",r:"5",fill:n===1?"#008FFD":"#d9d9d9"}),N("circle",{cx:"25",cy:"5",r:"5",fill:n===2?"#008FFD":"#d9d9d9"}),N("circle",{cx:"45",cy:"5",r:"5",fill:n===3?"#008FFD":"#d9d9d9"}),N("circle",{cx:"65",cy:"5",r:"5",fill:n===4?"#008FFD":"#d9d9d9"})]})]})]})})}const mn={bg:"#EAEDEE",fg:"#FFF",bold:"#d9d9d9",bolder:"#6d6d6d",text:"#000",shadow:"rgba(0,0,0,0.5)",shadowInverted:"rgba(255,255,255,1)",white:"#FFF",black:"#000"},im=bt.main`
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
`;function lm(){const{user:e}=O.exports.useContext(Tt);return H(im,{theme:mn,children:[N(B0,{}),N(em,{}),!e.name&&N(om,{})]})}cl.createRoot(document.getElementById("root")).render(N(Dr.StrictMode,{children:N(Ih,{children:N(lm,{})})}));
