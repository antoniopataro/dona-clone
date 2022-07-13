const om=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};om();var R={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var to=Symbol.for("react.element"),im=Symbol.for("react.portal"),am=Symbol.for("react.fragment"),lm=Symbol.for("react.strict_mode"),um=Symbol.for("react.profiler"),sm=Symbol.for("react.provider"),cm=Symbol.for("react.context"),fm=Symbol.for("react.forward_ref"),dm=Symbol.for("react.suspense"),pm=Symbol.for("react.memo"),hm=Symbol.for("react.lazy"),Fs=Symbol.iterator;function mm(e){return e===null||typeof e!="object"?null:(e=Fs&&e[Fs]||e["@@iterator"],typeof e=="function"?e:null)}var Vf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bf=Object.assign,Yf={};function or(e,t,n){this.props=e,this.context=t,this.refs=Yf,this.updater=n||Vf}or.prototype.isReactComponent={};or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hf(){}Hf.prototype=or.prototype;function ku(e,t,n){this.props=e,this.context=t,this.refs=Yf,this.updater=n||Vf}var Cu=ku.prototype=new Hf;Cu.constructor=ku;Bf(Cu,or.prototype);Cu.isPureReactComponent=!0;var Us=Array.isArray,Gf=Object.prototype.hasOwnProperty,Ou={current:null},Qf={key:!0,ref:!0,__self:!0,__source:!0};function Kf(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Gf.call(t,r)&&!Qf.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:to,type:e,key:i,ref:a,props:o,_owner:Ou.current}}function vm(e,t){return{$$typeof:to,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Du(e){return typeof e=="object"&&e!==null&&e.$$typeof===to}function gm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ws=/\/+/g;function Oa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gm(""+e.key):t.toString(36)}function Wo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case to:case im:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Oa(a,0):r,Us(o)?(n="",e!=null&&(n=e.replace(Ws,"$&/")+"/"),Wo(o,t,n,"",function(s){return s})):o!=null&&(Du(o)&&(o=vm(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Ws,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Us(e))for(var l=0;l<e.length;l++){i=e[l];var u=r+Oa(i,l);a+=Wo(i,t,n,u,o)}else if(u=mm(e),typeof u=="function")for(e=u.call(e),l=0;!(i=e.next()).done;)i=i.value,u=r+Oa(i,l++),a+=Wo(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function So(e,t,n){if(e==null)return e;var r=[],o=0;return Wo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function ym(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},Vo={transition:null},wm={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:Vo,ReactCurrentOwner:Ou};Y.Children={map:So,forEach:function(e,t,n){So(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return So(e,function(){t++}),t},toArray:function(e){return So(e,function(t){return t})||[]},only:function(e){if(!Du(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=or;Y.Fragment=am;Y.Profiler=um;Y.PureComponent=ku;Y.StrictMode=lm;Y.Suspense=dm;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wm;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Bf({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Ou.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)Gf.call(t,u)&&!Qf.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var s=0;s<u;s++)l[s]=arguments[s+2];r.children=l}return{$$typeof:to,type:e.type,key:o,ref:i,props:r,_owner:a}};Y.createContext=function(e){return e={$$typeof:cm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sm,_context:e},e.Consumer=e};Y.createElement=Kf;Y.createFactory=function(e){var t=Kf.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:fm,render:e}};Y.isValidElement=Du;Y.lazy=function(e){return{$$typeof:hm,_payload:{_status:-1,_result:e},_init:ym}};Y.memo=function(e,t){return{$$typeof:pm,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Vo.transition;Vo.transition={};try{e()}finally{Vo.transition=t}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,t){return Be.current.useCallback(e,t)};Y.useContext=function(e){return Be.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Be.current.useEffect(e,t)};Y.useId=function(){return Be.current.useId()};Y.useImperativeHandle=function(e,t,n){return Be.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Be.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Be.current.useReducer(e,t,n)};Y.useRef=function(e){return Be.current.useRef(e)};Y.useState=function(e){return Be.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Be.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Be.current.useTransition()};Y.version="18.2.0";R.exports=Y;var z=R.exports,ol={},Xf={exports:{}},tt={},Zf={exports:{}},Jf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,$){var I=b.length;b.push($);e:for(;0<I;){var Q=I-1>>>1,_=b[Q];if(0<o(_,$))b[Q]=$,b[I]=_,I=Q;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var $=b[0],I=b.pop();if(I!==$){b[0]=I;e:for(var Q=0,_=b.length,N=_>>>1;Q<N;){var L=2*(Q+1)-1,F=b[L],x=L+1,B=b[x];if(0>o(F,I))x<_&&0>o(B,F)?(b[Q]=B,b[x]=I,Q=x):(b[Q]=F,b[L]=I,Q=L);else if(x<_&&0>o(B,I))b[Q]=B,b[x]=I,Q=x;else break e}}return $}function o(b,$){var I=b.sortIndex-$.sortIndex;return I!==0?I:b.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],s=[],d=1,p=null,h=3,w=!1,y=!1,S=!1,O=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(b){for(var $=n(s);$!==null;){if($.callback===null)r(s);else if($.startTime<=b)r(s),$.sortIndex=$.expirationTime,t(u,$);else break;$=n(s)}}function g(b){if(S=!1,m(b),!y)if(n(u)!==null)y=!0,ce(k);else{var $=n(s);$!==null&&Ce(g,$.startTime-b)}}function k(b,$){y=!1,S&&(S=!1,f(T),T=-1),w=!0;var I=h;try{for(m($),p=n(u);p!==null&&(!(p.expirationTime>$)||b&&!he());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,h=p.priorityLevel;var _=Q(p.expirationTime<=$);$=e.unstable_now(),typeof _=="function"?p.callback=_:p===n(u)&&r(u),m($)}else r(u);p=n(u)}if(p!==null)var N=!0;else{var L=n(s);L!==null&&Ce(g,L.startTime-$),N=!1}return N}finally{p=null,h=I,w=!1}}var E=!1,P=null,T=-1,V=5,M=-1;function he(){return!(e.unstable_now()-M<V)}function Z(){if(P!==null){var b=e.unstable_now();M=b;var $=!0;try{$=P(!0,b)}finally{$?me():(E=!1,P=null)}}else E=!1}var me;if(typeof c=="function")me=function(){c(Z)};else if(typeof MessageChannel!="undefined"){var xe=new MessageChannel,Se=xe.port2;xe.port1.onmessage=Z,me=function(){Se.postMessage(null)}}else me=function(){O(Z,0)};function ce(b){P=b,E||(E=!0,me())}function Ce(b,$){T=O(function(){b(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,ce(k))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(b){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var I=h;h=$;try{return b()}finally{h=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,$){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var I=h;h=b;try{return $()}finally{h=I}},e.unstable_scheduleCallback=function(b,$,I){var Q=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Q+I:Q):I=Q,b){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=I+_,b={id:d++,callback:$,priorityLevel:b,startTime:I,expirationTime:_,sortIndex:-1},I>Q?(b.sortIndex=I,t(s,b),n(u)===null&&b===n(s)&&(S?(f(T),T=-1):S=!0,Ce(g,I-Q))):(b.sortIndex=_,t(u,b),y||w||(y=!0,ce(k))),b},e.unstable_shouldYield=he,e.unstable_wrapCallback=function(b){var $=h;return function(){var I=h;h=$;try{return b.apply(this,arguments)}finally{h=I}}}})(Jf);Zf.exports=Jf;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qf=R.exports,et=Zf.exports;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ed=new Set,Lr={};function Cn(e,t){Qn(e,t),Qn(e+"Capture",t)}function Qn(e,t){for(Lr[e]=t,e=0;e<t.length;e++)ed.add(t[e])}var Nt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),il=Object.prototype.hasOwnProperty,xm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vs={},Bs={};function Sm(e){return il.call(Bs,e)?!0:il.call(Vs,e)?!1:xm.test(e)?Bs[e]=!0:(Vs[e]=!0,!1)}function km(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cm(e,t,n,r){if(t===null||typeof t=="undefined"||km(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Eu=/[\-:]([a-z])/g;function bu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Eu,bu);Re[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Eu,bu);Re[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Eu,bu);Re[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pu(e,t,n,r){var o=Re.hasOwnProperty(t)?Re[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Cm(t,n,o,r)&&(n=null),r||o===null?Sm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $t=qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ko=Symbol.for("react.element"),_n=Symbol.for("react.portal"),An=Symbol.for("react.fragment"),_u=Symbol.for("react.strict_mode"),al=Symbol.for("react.profiler"),td=Symbol.for("react.provider"),nd=Symbol.for("react.context"),Au=Symbol.for("react.forward_ref"),ll=Symbol.for("react.suspense"),ul=Symbol.for("react.suspense_list"),Tu=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),rd=Symbol.for("react.offscreen"),Ys=Symbol.iterator;function cr(e){return e===null||typeof e!="object"?null:(e=Ys&&e[Ys]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,Da;function wr(e){if(Da===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Da=t&&t[1]||""}return`
`+Da+e}var Ea=!1;function ba(e,t){if(!e||Ea)return"";Ea=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var o=s.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var u=`
`+o[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{Ea=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wr(e):""}function Om(e){switch(e.tag){case 5:return wr(e.type);case 16:return wr("Lazy");case 13:return wr("Suspense");case 19:return wr("SuspenseList");case 0:case 2:case 15:return e=ba(e.type,!1),e;case 11:return e=ba(e.type.render,!1),e;case 1:return e=ba(e.type,!0),e;default:return""}}function sl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case An:return"Fragment";case _n:return"Portal";case al:return"Profiler";case _u:return"StrictMode";case ll:return"Suspense";case ul:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nd:return(e.displayName||"Context")+".Consumer";case td:return(e._context.displayName||"Context")+".Provider";case Au:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Tu:return t=e.displayName||null,t!==null?t:sl(e.type)||"Memo";case Ft:t=e._payload,e=e._init;try{return sl(e(t))}catch{}}return null}function Dm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sl(t);case 8:return t===_u?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function od(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Em(e){var t=od(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Co(e){e._valueTracker||(e._valueTracker=Em(e))}function id(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=od(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ti(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function cl(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Hs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=tn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ad(e,t){t=t.checked,t!=null&&Pu(e,"checked",t,!1)}function fl(e,t){ad(e,t);var n=tn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dl(e,t.type,n):t.hasOwnProperty("defaultValue")&&dl(e,t.type,tn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function dl(e,t,n){(t!=="number"||ti(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xr=Array.isArray;function Wn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+tn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function pl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(xr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:tn(n)}}function ld(e,t){var n=tn(t.value),r=tn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ks(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ud(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ud(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oo,sd=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Oo=Oo||document.createElement("div"),Oo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Oo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bm=["Webkit","ms","Moz","O"];Object.keys(Cr).forEach(function(e){bm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cr[t]=Cr[e]})});function cd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cr.hasOwnProperty(e)&&Cr[e]?(""+t).trim():t+"px"}function fd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=cd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Pm=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ml(e,t){if(t){if(Pm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gl=null;function Nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yl=null,Vn=null,Bn=null;function Xs(e){if(e=oo(e)){if(typeof yl!="function")throw Error(C(280));var t=e.stateNode;t&&(t=ji(t),yl(e.stateNode,e.type,t))}}function dd(e){Vn?Bn?Bn.push(e):Bn=[e]:Vn=e}function pd(){if(Vn){var e=Vn,t=Bn;if(Bn=Vn=null,Xs(e),t)for(e=0;e<t.length;e++)Xs(t[e])}}function hd(e,t){return e(t)}function md(){}var Pa=!1;function vd(e,t,n){if(Pa)return e(t,n);Pa=!0;try{return hd(e,t,n)}finally{Pa=!1,(Vn!==null||Bn!==null)&&(md(),pd())}}function Rr(e,t){var n=e.stateNode;if(n===null)return null;var r=ji(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var wl=!1;if(Nt)try{var fr={};Object.defineProperty(fr,"passive",{get:function(){wl=!0}}),window.addEventListener("test",fr,fr),window.removeEventListener("test",fr,fr)}catch{wl=!1}function _m(e,t,n,r,o,i,a,l,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(d){this.onError(d)}}var Or=!1,ni=null,ri=!1,xl=null,Am={onError:function(e){Or=!0,ni=e}};function Tm(e,t,n,r,o,i,a,l,u){Or=!1,ni=null,_m.apply(Am,arguments)}function Nm(e,t,n,r,o,i,a,l,u){if(Tm.apply(this,arguments),Or){if(Or){var s=ni;Or=!1,ni=null}else throw Error(C(198));ri||(ri=!0,xl=s)}}function On(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zs(e){if(On(e)!==e)throw Error(C(188))}function Lm(e){var t=e.alternate;if(!t){if(t=On(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Zs(o),e;if(i===r)return Zs(o),t;i=i.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function yd(e){return e=Lm(e),e!==null?wd(e):null}function wd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wd(e);if(t!==null)return t;e=e.sibling}return null}var xd=et.unstable_scheduleCallback,Js=et.unstable_cancelCallback,jm=et.unstable_shouldYield,Rm=et.unstable_requestPaint,ye=et.unstable_now,$m=et.unstable_getCurrentPriorityLevel,Lu=et.unstable_ImmediatePriority,Sd=et.unstable_UserBlockingPriority,oi=et.unstable_NormalPriority,Im=et.unstable_LowPriority,kd=et.unstable_IdlePriority,Ai=null,Ot=null;function Mm(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(Ai,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:Um,zm=Math.log,Fm=Math.LN2;function Um(e){return e>>>=0,e===0?32:31-(zm(e)/Fm|0)|0}var Do=64,Eo=4194304;function Sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ii(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=Sr(l):(i&=a,i!==0&&(r=Sr(i)))}else a=n&~o,a!==0?r=Sr(a):i!==0&&(r=Sr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-vt(t),o=1<<n,r|=e[n],t&=~o;return r}function Wm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-vt(i),l=1<<a,u=o[a];u===-1?((l&n)===0||(l&r)!==0)&&(o[a]=Wm(l,t)):u<=t&&(e.expiredLanes|=l),i&=~l}}function Sl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cd(){var e=Do;return Do<<=1,(Do&4194240)===0&&(Do=64),e}function _a(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function no(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=n}function Bm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-vt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ju(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-vt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var te=0;function Od(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Dd,Ru,Ed,bd,Pd,kl=!1,bo=[],Ht=null,Gt=null,Qt=null,$r=new Map,Ir=new Map,Wt=[],Ym="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qs(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":$r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ir.delete(t.pointerId)}}function dr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=oo(t),t!==null&&Ru(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Hm(e,t,n,r,o){switch(t){case"focusin":return Ht=dr(Ht,e,t,n,r,o),!0;case"dragenter":return Gt=dr(Gt,e,t,n,r,o),!0;case"mouseover":return Qt=dr(Qt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return $r.set(i,dr($r.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Ir.set(i,dr(Ir.get(i)||null,e,t,n,r,o)),!0}return!1}function _d(e){var t=fn(e.target);if(t!==null){var n=On(t);if(n!==null){if(t=n.tag,t===13){if(t=gd(n),t!==null){e.blockedOn=t,Pd(e.priority,function(){Ed(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gl=r,n.target.dispatchEvent(r),gl=null}else return t=oo(n),t!==null&&Ru(t),e.blockedOn=n,!1;t.shift()}return!0}function ec(e,t,n){Bo(e)&&n.delete(t)}function Gm(){kl=!1,Ht!==null&&Bo(Ht)&&(Ht=null),Gt!==null&&Bo(Gt)&&(Gt=null),Qt!==null&&Bo(Qt)&&(Qt=null),$r.forEach(ec),Ir.forEach(ec)}function pr(e,t){e.blockedOn===t&&(e.blockedOn=null,kl||(kl=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,Gm)))}function Mr(e){function t(o){return pr(o,e)}if(0<bo.length){pr(bo[0],e);for(var n=1;n<bo.length;n++){var r=bo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ht!==null&&pr(Ht,e),Gt!==null&&pr(Gt,e),Qt!==null&&pr(Qt,e),$r.forEach(t),Ir.forEach(t),n=0;n<Wt.length;n++)r=Wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wt.length&&(n=Wt[0],n.blockedOn===null);)_d(n),n.blockedOn===null&&Wt.shift()}var Yn=$t.ReactCurrentBatchConfig,ai=!0;function Qm(e,t,n,r){var o=te,i=Yn.transition;Yn.transition=null;try{te=1,$u(e,t,n,r)}finally{te=o,Yn.transition=i}}function Km(e,t,n,r){var o=te,i=Yn.transition;Yn.transition=null;try{te=4,$u(e,t,n,r)}finally{te=o,Yn.transition=i}}function $u(e,t,n,r){if(ai){var o=Cl(e,t,n,r);if(o===null)za(e,t,r,li,n),qs(e,r);else if(Hm(o,e,t,n,r))r.stopPropagation();else if(qs(e,r),t&4&&-1<Ym.indexOf(e)){for(;o!==null;){var i=oo(o);if(i!==null&&Dd(i),i=Cl(e,t,n,r),i===null&&za(e,t,r,li,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else za(e,t,r,null,n)}}var li=null;function Cl(e,t,n,r){if(li=null,e=Nu(r),e=fn(e),e!==null)if(t=On(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return li=e,null}function Ad(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($m()){case Lu:return 1;case Sd:return 4;case oi:case Im:return 16;case kd:return 536870912;default:return 16}default:return 16}}var Bt=null,Iu=null,Yo=null;function Td(){if(Yo)return Yo;var e,t=Iu,n=t.length,r,o="value"in Bt?Bt.value:Bt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Yo=o.slice(e,1<r?1-r:void 0)}function Ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Po(){return!0}function tc(){return!1}function nt(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Po:tc,this.isPropagationStopped=tc,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),t}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mu=nt(ir),ro=pe({},ir,{view:0,detail:0}),Xm=nt(ro),Aa,Ta,hr,Ti=pe({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hr&&(hr&&e.type==="mousemove"?(Aa=e.screenX-hr.screenX,Ta=e.screenY-hr.screenY):Ta=Aa=0,hr=e),Aa)},movementY:function(e){return"movementY"in e?e.movementY:Ta}}),nc=nt(Ti),Zm=pe({},Ti,{dataTransfer:0}),Jm=nt(Zm),qm=pe({},ro,{relatedTarget:0}),Na=nt(qm),ev=pe({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),tv=nt(ev),nv=pe({},ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rv=nt(nv),ov=pe({},ir,{data:0}),rc=nt(ov),iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lv[e])?!!t[e]:!1}function zu(){return uv}var sv=pe({},ro,{key:function(e){if(e.key){var t=iv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?av[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zu,charCode:function(e){return e.type==="keypress"?Ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cv=nt(sv),fv=pe({},Ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oc=nt(fv),dv=pe({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zu}),pv=nt(dv),hv=pe({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),mv=nt(hv),vv=pe({},Ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gv=nt(vv),yv=[9,13,27,32],Fu=Nt&&"CompositionEvent"in window,Dr=null;Nt&&"documentMode"in document&&(Dr=document.documentMode);var wv=Nt&&"TextEvent"in window&&!Dr,Nd=Nt&&(!Fu||Dr&&8<Dr&&11>=Dr),ic=String.fromCharCode(32),ac=!1;function Ld(e,t){switch(e){case"keyup":return yv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tn=!1;function xv(e,t){switch(e){case"compositionend":return jd(t);case"keypress":return t.which!==32?null:(ac=!0,ic);case"textInput":return e=t.data,e===ic&&ac?null:e;default:return null}}function Sv(e,t){if(Tn)return e==="compositionend"||!Fu&&Ld(e,t)?(e=Td(),Yo=Iu=Bt=null,Tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nd&&t.locale!=="ko"?null:t.data;default:return null}}var kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kv[e.type]:t==="textarea"}function Rd(e,t,n,r){dd(r),t=ui(t,"onChange"),0<t.length&&(n=new Mu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Er=null,zr=null;function Cv(e){Hd(e,0)}function Ni(e){var t=jn(e);if(id(t))return e}function Ov(e,t){if(e==="change")return t}var $d=!1;if(Nt){var La;if(Nt){var ja="oninput"in document;if(!ja){var uc=document.createElement("div");uc.setAttribute("oninput","return;"),ja=typeof uc.oninput=="function"}La=ja}else La=!1;$d=La&&(!document.documentMode||9<document.documentMode)}function sc(){Er&&(Er.detachEvent("onpropertychange",Id),zr=Er=null)}function Id(e){if(e.propertyName==="value"&&Ni(zr)){var t=[];Rd(t,zr,e,Nu(e)),vd(Cv,t)}}function Dv(e,t,n){e==="focusin"?(sc(),Er=t,zr=n,Er.attachEvent("onpropertychange",Id)):e==="focusout"&&sc()}function Ev(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ni(zr)}function bv(e,t){if(e==="click")return Ni(t)}function Pv(e,t){if(e==="input"||e==="change")return Ni(t)}function _v(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:_v;function Fr(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!il.call(t,o)||!yt(e[o],t[o]))return!1}return!0}function cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fc(e,t){var n=cc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cc(n)}}function Md(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Md(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zd(){for(var e=window,t=ti();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ti(e.document)}return t}function Uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Av(e){var t=zd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Md(n.ownerDocument.documentElement,n)){if(r!==null&&Uu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=fc(n,i);var a=fc(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tv=Nt&&"documentMode"in document&&11>=document.documentMode,Nn=null,Ol=null,br=null,Dl=!1;function dc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dl||Nn==null||Nn!==ti(r)||(r=Nn,"selectionStart"in r&&Uu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),br&&Fr(br,r)||(br=r,r=ui(Ol,"onSelect"),0<r.length&&(t=new Mu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nn)))}function _o(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ln={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionend:_o("Transition","TransitionEnd")},Ra={},Fd={};Nt&&(Fd=document.createElement("div").style,"AnimationEvent"in window||(delete Ln.animationend.animation,delete Ln.animationiteration.animation,delete Ln.animationstart.animation),"TransitionEvent"in window||delete Ln.transitionend.transition);function Li(e){if(Ra[e])return Ra[e];if(!Ln[e])return e;var t=Ln[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fd)return Ra[e]=t[n];return e}var Ud=Li("animationend"),Wd=Li("animationiteration"),Vd=Li("animationstart"),Bd=Li("transitionend"),Yd=new Map,pc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){Yd.set(e,t),Cn(t,[e])}for(var $a=0;$a<pc.length;$a++){var Ia=pc[$a],Nv=Ia.toLowerCase(),Lv=Ia[0].toUpperCase()+Ia.slice(1);rn(Nv,"on"+Lv)}rn(Ud,"onAnimationEnd");rn(Wd,"onAnimationIteration");rn(Vd,"onAnimationStart");rn("dblclick","onDoubleClick");rn("focusin","onFocus");rn("focusout","onBlur");rn(Bd,"onTransitionEnd");Qn("onMouseEnter",["mouseout","mouseover"]);Qn("onMouseLeave",["mouseout","mouseover"]);Qn("onPointerEnter",["pointerout","pointerover"]);Qn("onPointerLeave",["pointerout","pointerover"]);Cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jv=new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));function hc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Nm(r,t,void 0,e),e.currentTarget=null}function Hd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,s=l.currentTarget;if(l=l.listener,u!==i&&o.isPropagationStopped())break e;hc(o,l,s),i=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,s=l.currentTarget,l=l.listener,u!==i&&o.isPropagationStopped())break e;hc(o,l,s),i=u}}}if(ri)throw e=xl,ri=!1,xl=null,e}function ie(e,t){var n=t[Al];n===void 0&&(n=t[Al]=new Set);var r=e+"__bubble";n.has(r)||(Gd(t,e,2,!1),n.add(r))}function Ma(e,t,n){var r=0;t&&(r|=4),Gd(n,e,r,t)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Ao]){e[Ao]=!0,ed.forEach(function(n){n!=="selectionchange"&&(jv.has(n)||Ma(n,!1,e),Ma(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ao]||(t[Ao]=!0,Ma("selectionchange",!1,t))}}function Gd(e,t,n,r){switch(Ad(t)){case 1:var o=Qm;break;case 4:o=Km;break;default:o=$u}n=o.bind(null,t,n,e),o=void 0,!wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function za(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;l!==null;){if(a=fn(l),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}l=l.parentNode}}r=r.return}vd(function(){var s=i,d=Nu(n),p=[];e:{var h=Yd.get(e);if(h!==void 0){var w=Mu,y=e;switch(e){case"keypress":if(Ho(n)===0)break e;case"keydown":case"keyup":w=cv;break;case"focusin":y="focus",w=Na;break;case"focusout":y="blur",w=Na;break;case"beforeblur":case"afterblur":w=Na;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=nc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Jm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=pv;break;case Ud:case Wd:case Vd:w=tv;break;case Bd:w=mv;break;case"scroll":w=Xm;break;case"wheel":w=gv;break;case"copy":case"cut":case"paste":w=rv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=oc}var S=(t&4)!==0,O=!S&&e==="scroll",f=S?h!==null?h+"Capture":null:h;S=[];for(var c=s,m;c!==null;){m=c;var g=m.stateNode;if(m.tag===5&&g!==null&&(m=g,f!==null&&(g=Rr(c,f),g!=null&&S.push(Wr(c,g,m)))),O)break;c=c.return}0<S.length&&(h=new w(h,y,null,n,d),p.push({event:h,listeners:S}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==gl&&(y=n.relatedTarget||n.fromElement)&&(fn(y)||y[Lt]))break e;if((w||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=s,y=y?fn(y):null,y!==null&&(O=On(y),y!==O||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=s),w!==y)){if(S=nc,g="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=oc,g="onPointerLeave",f="onPointerEnter",c="pointer"),O=w==null?h:jn(w),m=y==null?h:jn(y),h=new S(g,c+"leave",w,n,d),h.target=O,h.relatedTarget=m,g=null,fn(d)===s&&(S=new S(f,c+"enter",y,n,d),S.target=m,S.relatedTarget=O,g=S),O=g,w&&y)t:{for(S=w,f=y,c=0,m=S;m;m=Pn(m))c++;for(m=0,g=f;g;g=Pn(g))m++;for(;0<c-m;)S=Pn(S),c--;for(;0<m-c;)f=Pn(f),m--;for(;c--;){if(S===f||f!==null&&S===f.alternate)break t;S=Pn(S),f=Pn(f)}S=null}else S=null;w!==null&&mc(p,h,w,S,!1),y!==null&&O!==null&&mc(p,O,y,S,!0)}}e:{if(h=s?jn(s):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var k=Ov;else if(lc(h))if($d)k=Pv;else{k=Ev;var E=Dv}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=bv);if(k&&(k=k(e,s))){Rd(p,k,n,d);break e}E&&E(e,h,s),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&dl(h,"number",h.value)}switch(E=s?jn(s):window,e){case"focusin":(lc(E)||E.contentEditable==="true")&&(Nn=E,Ol=s,br=null);break;case"focusout":br=Ol=Nn=null;break;case"mousedown":Dl=!0;break;case"contextmenu":case"mouseup":case"dragend":Dl=!1,dc(p,n,d);break;case"selectionchange":if(Tv)break;case"keydown":case"keyup":dc(p,n,d)}var P;if(Fu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Tn?Ld(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Nd&&n.locale!=="ko"&&(Tn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Tn&&(P=Td()):(Bt=d,Iu="value"in Bt?Bt.value:Bt.textContent,Tn=!0)),E=ui(s,T),0<E.length&&(T=new rc(T,e,null,n,d),p.push({event:T,listeners:E}),P?T.data=P:(P=jd(n),P!==null&&(T.data=P)))),(P=wv?xv(e,n):Sv(e,n))&&(s=ui(s,"onBeforeInput"),0<s.length&&(d=new rc("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:s}),d.data=P))}Hd(p,t)})}function Wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ui(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Rr(e,n),i!=null&&r.unshift(Wr(e,i,o)),i=Rr(e,t),i!=null&&r.push(Wr(e,i,o))),e=e.return}return r}function Pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mc(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,s=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&s!==null&&(l=s,o?(u=Rr(n,i),u!=null&&a.unshift(Wr(n,u,l))):o||(u=Rr(n,i),u!=null&&a.push(Wr(n,u,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Rv=/\r\n?/g,$v=/\u0000|\uFFFD/g;function vc(e){return(typeof e=="string"?e:""+e).replace(Rv,`
`).replace($v,"")}function To(e,t,n){if(t=vc(t),vc(e)!==t&&n)throw Error(C(425))}function si(){}var El=null,bl=null;function Pl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _l=typeof setTimeout=="function"?setTimeout:void 0,Iv=typeof clearTimeout=="function"?clearTimeout:void 0,gc=typeof Promise=="function"?Promise:void 0,Mv=typeof queueMicrotask=="function"?queueMicrotask:typeof gc!="undefined"?function(e){return gc.resolve(null).then(e).catch(zv)}:_l;function zv(e){setTimeout(function(){throw e})}function Fa(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Mr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Mr(t)}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ar=Math.random().toString(36).slice(2),Ct="__reactFiber$"+ar,Vr="__reactProps$"+ar,Lt="__reactContainer$"+ar,Al="__reactEvents$"+ar,Fv="__reactListeners$"+ar,Uv="__reactHandles$"+ar;function fn(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yc(e);e!==null;){if(n=e[Ct])return n;e=yc(e)}return t}e=n,n=e.parentNode}return null}function oo(e){return e=e[Ct]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function ji(e){return e[Vr]||null}var Tl=[],Rn=-1;function on(e){return{current:e}}function ae(e){0>Rn||(e.current=Tl[Rn],Tl[Rn]=null,Rn--)}function oe(e,t){Rn++,Tl[Rn]=e.current,e.current=t}var nn={},Fe=on(nn),Qe=on(!1),yn=nn;function Kn(e,t){var n=e.type.contextTypes;if(!n)return nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ke(e){return e=e.childContextTypes,e!=null}function ci(){ae(Qe),ae(Fe)}function wc(e,t,n){if(Fe.current!==nn)throw Error(C(168));oe(Fe,t),oe(Qe,n)}function Qd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,Dm(e)||"Unknown",o));return pe({},n,r)}function fi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nn,yn=Fe.current,oe(Fe,e),oe(Qe,Qe.current),!0}function xc(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Qd(e,t,yn),r.__reactInternalMemoizedMergedChildContext=e,ae(Qe),ae(Fe),oe(Fe,e)):ae(Qe),oe(Qe,n)}var bt=null,Ri=!1,Ua=!1;function Kd(e){bt===null?bt=[e]:bt.push(e)}function Wv(e){Ri=!0,Kd(e)}function an(){if(!Ua&&bt!==null){Ua=!0;var e=0,t=te;try{var n=bt;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}bt=null,Ri=!1}catch(o){throw bt!==null&&(bt=bt.slice(e+1)),xd(Lu,an),o}finally{te=t,Ua=!1}}return null}var $n=[],In=0,di=null,pi=0,ot=[],it=0,wn=null,Pt=1,_t="";function sn(e,t){$n[In++]=pi,$n[In++]=di,di=e,pi=t}function Xd(e,t,n){ot[it++]=Pt,ot[it++]=_t,ot[it++]=wn,wn=e;var r=Pt;e=_t;var o=32-vt(r)-1;r&=~(1<<o),n+=1;var i=32-vt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Pt=1<<32-vt(t)+o|n<<o|r,_t=i+e}else Pt=1<<i|n<<o|r,_t=e}function Wu(e){e.return!==null&&(sn(e,1),Xd(e,1,0))}function Vu(e){for(;e===di;)di=$n[--In],$n[In]=null,pi=$n[--In],$n[In]=null;for(;e===wn;)wn=ot[--it],ot[it]=null,_t=ot[--it],ot[it]=null,Pt=ot[--it],ot[it]=null}var qe=null,Je=null,ue=!1,mt=null;function Zd(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Sc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Je=Kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=wn!==null?{id:Pt,overflow:_t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Je=null,!0):!1;default:return!1}}function Nl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ll(e){if(ue){var t=Je;if(t){var n=t;if(!Sc(e,t)){if(Nl(e))throw Error(C(418));t=Kt(n.nextSibling);var r=qe;t&&Sc(e,t)?Zd(r,n):(e.flags=e.flags&-4097|2,ue=!1,qe=e)}}else{if(Nl(e))throw Error(C(418));e.flags=e.flags&-4097|2,ue=!1,qe=e}}}function kc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function No(e){if(e!==qe)return!1;if(!ue)return kc(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pl(e.type,e.memoizedProps)),t&&(t=Je)){if(Nl(e))throw Jd(),Error(C(418));for(;t;)Zd(e,t),t=Kt(t.nextSibling)}if(kc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=Kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=qe?Kt(e.stateNode.nextSibling):null;return!0}function Jd(){for(var e=Je;e;)e=Kt(e.nextSibling)}function Xn(){Je=qe=null,ue=!1}function Bu(e){mt===null?mt=[e]:mt.push(e)}var Vv=$t.ReactCurrentBatchConfig;function pt(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var hi=on(null),mi=null,Mn=null,Yu=null;function Hu(){Yu=Mn=mi=null}function Gu(e){var t=hi.current;ae(hi),e._currentValue=t}function jl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Hn(e,t){mi=e,Yu=Mn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ge=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(Yu!==e)if(e={context:e,memoizedValue:t,next:null},Mn===null){if(mi===null)throw Error(C(308));Mn=e,mi.dependencies={lanes:0,firstContext:e}}else Mn=Mn.next=e;return t}var dn=null;function Qu(e){dn===null?dn=[e]:dn.push(e)}function qd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Qu(t)):(n.next=o.next,o.next=n),t.interleaved=n,jt(e,r)}function jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Ku(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ep(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(G&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,jt(e,n)}return o=r.interleaved,o===null?(t.next=t,Qu(r)):(t.next=o.next,o.next=t),r.interleaved=t,jt(e,n)}function Go(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ju(e,n)}}function Cc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vi(e,t,n,r){var o=e.updateQueue;Ut=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var u=l,s=u.next;u.next=null,a===null?i=s:a.next=s,a=u;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=s:l.next=s,d.lastBaseUpdate=u))}if(i!==null){var p=o.baseState;a=0,d=s=u=null,l=i;do{var h=l.lane,w=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,S=l;switch(h=t,w=n,S.tag){case 1:if(y=S.payload,typeof y=="function"){p=y.call(w,p,h);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=S.payload,h=typeof y=="function"?y.call(w,p,h):y,h==null)break e;p=pe({},p,h);break e;case 2:Ut=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else w={eventTime:w,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(s=d=w,u=p):d=d.next=w,a|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(d===null&&(u=p),o.baseState=u,o.firstBaseUpdate=s,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Sn|=a,e.lanes=a,e.memoizedState=p}}function Oc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var tp=new qf.Component().refs;function Rl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $i={isMounted:function(e){return(e=e._reactInternals)?On(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),o=Jt(e),i=Tt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Xt(e,i,o),t!==null&&(gt(t,e,o,r),Go(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),o=Jt(e),i=Tt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xt(e,i,o),t!==null&&(gt(t,e,o,r),Go(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=Jt(e),o=Tt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Xt(e,o,r),t!==null&&(gt(t,e,r,n),Go(t,e,r))}};function Dc(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Fr(n,r)||!Fr(o,i):!0}function np(e,t,n){var r=!1,o=nn,i=t.contextType;return typeof i=="object"&&i!==null?i=ut(i):(o=Ke(t)?yn:Fe.current,r=t.contextTypes,i=(r=r!=null)?Kn(e,o):nn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$i,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ec(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$i.enqueueReplaceState(t,t.state,null)}function $l(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=tp,Ku(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ut(i):(i=Ke(t)?yn:Fe.current,o.context=Kn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Rl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&$i.enqueueReplaceState(o,o.state,null),vi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;l===tp&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Lo(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bc(e){var t=e._init;return t(e._payload)}function rp(e){function t(f,c){if(e){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=qt(f,c),f.index=0,f.sibling=null,f}function i(f,c,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=2,c):m):(f.flags|=2,c)):(f.flags|=1048576,c)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,c,m,g){return c===null||c.tag!==6?(c=Qa(m,f.mode,g),c.return=f,c):(c=o(c,m),c.return=f,c)}function u(f,c,m,g){var k=m.type;return k===An?d(f,c,m.props.children,g,m.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ft&&bc(k)===c.type)?(g=o(c,m.props),g.ref=mr(f,c,m),g.return=f,g):(g=qo(m.type,m.key,m.props,null,f.mode,g),g.ref=mr(f,c,m),g.return=f,g)}function s(f,c,m,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=Ka(m,f.mode,g),c.return=f,c):(c=o(c,m.children||[]),c.return=f,c)}function d(f,c,m,g,k){return c===null||c.tag!==7?(c=mn(m,f.mode,g,k),c.return=f,c):(c=o(c,m),c.return=f,c)}function p(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Qa(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ko:return m=qo(c.type,c.key,c.props,null,f.mode,m),m.ref=mr(f,null,c),m.return=f,m;case _n:return c=Ka(c,f.mode,m),c.return=f,c;case Ft:var g=c._init;return p(f,g(c._payload),m)}if(xr(c)||cr(c))return c=mn(c,f.mode,m,null),c.return=f,c;Lo(f,c)}return null}function h(f,c,m,g){var k=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:l(f,c,""+m,g);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ko:return m.key===k?u(f,c,m,g):null;case _n:return m.key===k?s(f,c,m,g):null;case Ft:return k=m._init,h(f,c,k(m._payload),g)}if(xr(m)||cr(m))return k!==null?null:d(f,c,m,g,null);Lo(f,m)}return null}function w(f,c,m,g,k){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(m)||null,l(c,f,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ko:return f=f.get(g.key===null?m:g.key)||null,u(c,f,g,k);case _n:return f=f.get(g.key===null?m:g.key)||null,s(c,f,g,k);case Ft:var E=g._init;return w(f,c,m,E(g._payload),k)}if(xr(g)||cr(g))return f=f.get(m)||null,d(c,f,g,k,null);Lo(c,g)}return null}function y(f,c,m,g){for(var k=null,E=null,P=c,T=c=0,V=null;P!==null&&T<m.length;T++){P.index>T?(V=P,P=null):V=P.sibling;var M=h(f,P,m[T],g);if(M===null){P===null&&(P=V);break}e&&P&&M.alternate===null&&t(f,P),c=i(M,c,T),E===null?k=M:E.sibling=M,E=M,P=V}if(T===m.length)return n(f,P),ue&&sn(f,T),k;if(P===null){for(;T<m.length;T++)P=p(f,m[T],g),P!==null&&(c=i(P,c,T),E===null?k=P:E.sibling=P,E=P);return ue&&sn(f,T),k}for(P=r(f,P);T<m.length;T++)V=w(P,f,T,m[T],g),V!==null&&(e&&V.alternate!==null&&P.delete(V.key===null?T:V.key),c=i(V,c,T),E===null?k=V:E.sibling=V,E=V);return e&&P.forEach(function(he){return t(f,he)}),ue&&sn(f,T),k}function S(f,c,m,g){var k=cr(m);if(typeof k!="function")throw Error(C(150));if(m=k.call(m),m==null)throw Error(C(151));for(var E=k=null,P=c,T=c=0,V=null,M=m.next();P!==null&&!M.done;T++,M=m.next()){P.index>T?(V=P,P=null):V=P.sibling;var he=h(f,P,M.value,g);if(he===null){P===null&&(P=V);break}e&&P&&he.alternate===null&&t(f,P),c=i(he,c,T),E===null?k=he:E.sibling=he,E=he,P=V}if(M.done)return n(f,P),ue&&sn(f,T),k;if(P===null){for(;!M.done;T++,M=m.next())M=p(f,M.value,g),M!==null&&(c=i(M,c,T),E===null?k=M:E.sibling=M,E=M);return ue&&sn(f,T),k}for(P=r(f,P);!M.done;T++,M=m.next())M=w(P,f,T,M.value,g),M!==null&&(e&&M.alternate!==null&&P.delete(M.key===null?T:M.key),c=i(M,c,T),E===null?k=M:E.sibling=M,E=M);return e&&P.forEach(function(Z){return t(f,Z)}),ue&&sn(f,T),k}function O(f,c,m,g){if(typeof m=="object"&&m!==null&&m.type===An&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ko:e:{for(var k=m.key,E=c;E!==null;){if(E.key===k){if(k=m.type,k===An){if(E.tag===7){n(f,E.sibling),c=o(E,m.props.children),c.return=f,f=c;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ft&&bc(k)===E.type){n(f,E.sibling),c=o(E,m.props),c.ref=mr(f,E,m),c.return=f,f=c;break e}n(f,E);break}else t(f,E);E=E.sibling}m.type===An?(c=mn(m.props.children,f.mode,g,m.key),c.return=f,f=c):(g=qo(m.type,m.key,m.props,null,f.mode,g),g.ref=mr(f,c,m),g.return=f,f=g)}return a(f);case _n:e:{for(E=m.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(f,c.sibling),c=o(c,m.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Ka(m,f.mode,g),c.return=f,f=c}return a(f);case Ft:return E=m._init,O(f,c,E(m._payload),g)}if(xr(m))return y(f,c,m,g);if(cr(m))return S(f,c,m,g);Lo(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,m),c.return=f,f=c):(n(f,c),c=Qa(m,f.mode,g),c.return=f,f=c),a(f)):n(f,c)}return O}var Zn=rp(!0),op=rp(!1),io={},Dt=on(io),Br=on(io),Yr=on(io);function pn(e){if(e===io)throw Error(C(174));return e}function Xu(e,t){switch(oe(Yr,t),oe(Br,e),oe(Dt,io),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hl(t,e)}ae(Dt),oe(Dt,t)}function Jn(){ae(Dt),ae(Br),ae(Yr)}function ip(e){pn(Yr.current);var t=pn(Dt.current),n=hl(t,e.type);t!==n&&(oe(Br,e),oe(Dt,n))}function Zu(e){Br.current===e&&(ae(Dt),ae(Br))}var fe=on(0);function gi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wa=[];function Ju(){for(var e=0;e<Wa.length;e++)Wa[e]._workInProgressVersionPrimary=null;Wa.length=0}var Qo=$t.ReactCurrentDispatcher,Va=$t.ReactCurrentBatchConfig,xn=0,de=null,De=null,be=null,yi=!1,Pr=!1,Hr=0,Bv=0;function Ie(){throw Error(C(321))}function qu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function es(e,t,n,r,o,i){if(xn=i,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qo.current=e===null||e.memoizedState===null?Qv:Kv,e=n(r,o),Pr){i=0;do{if(Pr=!1,Hr=0,25<=i)throw Error(C(301));i+=1,be=De=null,t.updateQueue=null,Qo.current=Xv,e=n(r,o)}while(Pr)}if(Qo.current=wi,t=De!==null&&De.next!==null,xn=0,be=De=de=null,yi=!1,t)throw Error(C(300));return e}function ts(){var e=Hr!==0;return Hr=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?de.memoizedState=be=e:be=be.next=e,be}function st(){if(De===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=be===null?de.memoizedState:be.next;if(t!==null)be=t,De=e;else{if(e===null)throw Error(C(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},be===null?de.memoizedState=be=e:be=be.next=e}return be}function Gr(e,t){return typeof t=="function"?t(e):t}function Ba(e){var t=st(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=De,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,u=null,s=i;do{var d=s.lane;if((xn&d)===d)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var p={lane:d,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(l=u=p,a=r):u=u.next=p,de.lanes|=d,Sn|=d}s=s.next}while(s!==null&&s!==i);u===null?a=r:u.next=l,yt(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,de.lanes|=i,Sn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ya(e){var t=st(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);yt(i,t.memoizedState)||(Ge=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ap(){}function lp(e,t){var n=de,r=st(),o=t(),i=!yt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ge=!0),r=r.queue,ns(cp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,Qr(9,sp.bind(null,n,r,o,t),void 0,null),Pe===null)throw Error(C(349));(xn&30)!==0||up(n,t,o)}return o}function up(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sp(e,t,n,r){t.value=n,t.getSnapshot=r,fp(t)&&dp(e)}function cp(e,t,n){return n(function(){fp(t)&&dp(e)})}function fp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function dp(e){var t=jt(e,1);t!==null&&gt(t,e,1,-1)}function Pc(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gr,lastRenderedState:e},t.queue=e,e=e.dispatch=Gv.bind(null,de,e),[t.memoizedState,e]}function Qr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function pp(){return st().memoizedState}function Ko(e,t,n,r){var o=kt();de.flags|=e,o.memoizedState=Qr(1|t,n,void 0,r===void 0?null:r)}function Ii(e,t,n,r){var o=st();r=r===void 0?null:r;var i=void 0;if(De!==null){var a=De.memoizedState;if(i=a.destroy,r!==null&&qu(r,a.deps)){o.memoizedState=Qr(t,n,i,r);return}}de.flags|=e,o.memoizedState=Qr(1|t,n,i,r)}function _c(e,t){return Ko(8390656,8,e,t)}function ns(e,t){return Ii(2048,8,e,t)}function hp(e,t){return Ii(4,2,e,t)}function mp(e,t){return Ii(4,4,e,t)}function vp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gp(e,t,n){return n=n!=null?n.concat([e]):null,Ii(4,4,vp.bind(null,t,e),n)}function rs(){}function yp(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function wp(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xp(e,t,n){return(xn&21)===0?(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n):(yt(n,t)||(n=Cd(),de.lanes|=n,Sn|=n,e.baseState=!0),t)}function Yv(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Va.transition;Va.transition={};try{e(!1),t()}finally{te=n,Va.transition=r}}function Sp(){return st().memoizedState}function Hv(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kp(e))Cp(t,n);else if(n=qd(e,t,n,r),n!==null){var o=Ve();gt(n,e,r,o),Op(n,t,r)}}function Gv(e,t,n){var r=Jt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kp(e))Cp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,yt(l,a)){var u=t.interleaved;u===null?(o.next=o,Qu(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=qd(e,t,o,r),n!==null&&(o=Ve(),gt(n,e,r,o),Op(n,t,r))}}function kp(e){var t=e.alternate;return e===de||t!==null&&t===de}function Cp(e,t){Pr=yi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Op(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ju(e,n)}}var wi={readContext:ut,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},Qv={readContext:ut,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:_c,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ko(4194308,4,vp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ko(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ko(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Hv.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:Pc,useDebugValue:rs,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=Pc(!1),t=e[0];return e=Yv.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,o=kt();if(ue){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),Pe===null)throw Error(C(349));(xn&30)!==0||up(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,_c(cp.bind(null,r,i,e),[e]),r.flags|=2048,Qr(9,sp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=kt(),t=Pe.identifierPrefix;if(ue){var n=_t,r=Pt;n=(r&~(1<<32-vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Bv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Kv={readContext:ut,useCallback:yp,useContext:ut,useEffect:ns,useImperativeHandle:gp,useInsertionEffect:hp,useLayoutEffect:mp,useMemo:wp,useReducer:Ba,useRef:pp,useState:function(){return Ba(Gr)},useDebugValue:rs,useDeferredValue:function(e){var t=st();return xp(t,De.memoizedState,e)},useTransition:function(){var e=Ba(Gr)[0],t=st().memoizedState;return[e,t]},useMutableSource:ap,useSyncExternalStore:lp,useId:Sp,unstable_isNewReconciler:!1},Xv={readContext:ut,useCallback:yp,useContext:ut,useEffect:ns,useImperativeHandle:gp,useInsertionEffect:hp,useLayoutEffect:mp,useMemo:wp,useReducer:Ya,useRef:pp,useState:function(){return Ya(Gr)},useDebugValue:rs,useDeferredValue:function(e){var t=st();return De===null?t.memoizedState=e:xp(t,De.memoizedState,e)},useTransition:function(){var e=Ya(Gr)[0],t=st().memoizedState;return[e,t]},useMutableSource:ap,useSyncExternalStore:lp,useId:Sp,unstable_isNewReconciler:!1};function qn(e,t){try{var n="",r=t;do n+=Om(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ha(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Il(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Zv=typeof WeakMap=="function"?WeakMap:Map;function Dp(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Si||(Si=!0,Gl=r),Il(e,t)},n}function Ep(e,t,n){n=Tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Il(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Il(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ac(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zv;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=fg.bind(null,e,t,n),t.then(e,e))}function Tc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nc(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,Xt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Jv=$t.ReactCurrentOwner,Ge=!1;function We(e,t,n,r){t.child=e===null?op(t,null,n,r):Zn(t,e.child,n,r)}function Lc(e,t,n,r,o){n=n.render;var i=t.ref;return Hn(t,o),r=es(e,t,n,r,i,o),n=ts(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Rt(e,t,o)):(ue&&n&&Wu(t),t.flags|=1,We(e,t,r,o),t.child)}function jc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!fs(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,bp(e,t,i,r,o)):(e=qo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Fr,n(a,r)&&e.ref===t.ref)return Rt(e,t,o)}return t.flags|=1,e=qt(i,r),e.ref=t.ref,e.return=t,t.child=e}function bp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Fr(i,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,Rt(e,t,o)}return Ml(e,t,n,r,o)}function Pp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(Fn,Ze),Ze|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(Fn,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,oe(Fn,Ze),Ze|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,oe(Fn,Ze),Ze|=r;return We(e,t,o,n),t.child}function _p(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ml(e,t,n,r,o){var i=Ke(n)?yn:Fe.current;return i=Kn(t,i),Hn(t,o),n=es(e,t,n,r,i,o),r=ts(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Rt(e,t,o)):(ue&&r&&Wu(t),t.flags|=1,We(e,t,n,o),t.child)}function Rc(e,t,n,r,o){if(Ke(n)){var i=!0;fi(t)}else i=!1;if(Hn(t,o),t.stateNode===null)Xo(e,t),np(t,n,r),$l(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,s=n.contextType;typeof s=="object"&&s!==null?s=ut(s):(s=Ke(n)?yn:Fe.current,s=Kn(t,s));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==s)&&Ec(t,a,r,s),Ut=!1;var h=t.memoizedState;a.state=h,vi(t,r,a,o),u=t.memoizedState,l!==r||h!==u||Qe.current||Ut?(typeof d=="function"&&(Rl(t,n,d,r),u=t.memoizedState),(l=Ut||Dc(t,n,l,r,h,u,s))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=s,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ep(e,t),l=t.memoizedProps,s=t.type===t.elementType?l:pt(t.type,l),a.props=s,p=t.pendingProps,h=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=ut(u):(u=Ke(n)?yn:Fe.current,u=Kn(t,u));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||h!==u)&&Ec(t,a,r,u),Ut=!1,h=t.memoizedState,a.state=h,vi(t,r,a,o);var y=t.memoizedState;l!==p||h!==y||Qe.current||Ut?(typeof w=="function"&&(Rl(t,n,w,r),y=t.memoizedState),(s=Ut||Dc(t,n,s,r,h,y,u)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=u,r=s):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return zl(e,t,n,r,i,o)}function zl(e,t,n,r,o,i){_p(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&xc(t,n,!1),Rt(e,t,i);r=t.stateNode,Jv.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Zn(t,e.child,null,i),t.child=Zn(t,null,l,i)):We(e,t,l,i),t.memoizedState=r.state,o&&xc(t,n,!0),t.child}function Ap(e){var t=e.stateNode;t.pendingContext?wc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wc(e,t.context,!1),Xu(e,t.containerInfo)}function $c(e,t,n,r,o){return Xn(),Bu(o),t.flags|=256,We(e,t,n,r),t.child}var Fl={dehydrated:null,treeContext:null,retryLane:0};function Ul(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tp(e,t,n){var r=t.pendingProps,o=fe.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),oe(fe,o&1),e===null)return Ll(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Fi(a,r,0,null),e=mn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ul(n),t.memoizedState=Fl,e):os(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return qv(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var u={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=qt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=qt(l,i):(i=mn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Ul(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Fl,r}return i=e.child,e=i.sibling,r=qt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function os(e,t){return t=Fi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function jo(e,t,n,r){return r!==null&&Bu(r),Zn(t,e.child,null,n),e=os(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qv(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Ha(Error(C(422))),jo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Fi({mode:"visible",children:r.children},o,0,null),i=mn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Zn(t,e.child,null,a),t.child.memoizedState=Ul(a),t.memoizedState=Fl,i);if((t.mode&1)===0)return jo(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(C(419)),r=Ha(i,r,void 0),jo(e,t,a,r)}if(l=(a&e.childLanes)!==0,Ge||l){if(r=Pe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|a))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,jt(e,o),gt(r,e,o,-1))}return cs(),r=Ha(Error(C(421))),jo(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=dg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Je=Kt(o.nextSibling),qe=t,ue=!0,mt=null,e!==null&&(ot[it++]=Pt,ot[it++]=_t,ot[it++]=wn,Pt=e.id,_t=e.overflow,wn=t),t=os(t,r.children),t.flags|=4096,t)}function Ic(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),jl(e.return,t,n)}function Ga(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Np(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(We(e,t,r.children,n),r=fe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ic(e,n,t);else if(e.tag===19)Ic(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(oe(fe,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&gi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ga(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&gi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ga(t,!0,n,null,i);break;case"together":Ga(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Sn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function eg(e,t,n){switch(t.tag){case 3:Ap(t),Xn();break;case 5:ip(t);break;case 1:Ke(t.type)&&fi(t);break;case 4:Xu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;oe(hi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(oe(fe,fe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Tp(e,t,n):(oe(fe,fe.current&1),e=Rt(e,t,n),e!==null?e.sibling:null);oe(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Np(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),oe(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,Pp(e,t,n)}return Rt(e,t,n)}var Lp,Wl,jp,Rp;Lp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wl=function(){};jp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,pn(Dt.current);var i=null;switch(n){case"input":o=cl(e,o),r=cl(e,r),i=[];break;case"select":o=pe({},o,{value:void 0}),r=pe({},r,{value:void 0}),i=[];break;case"textarea":o=pl(e,o),r=pl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=si)}ml(n,r);var a;n=null;for(s in o)if(!r.hasOwnProperty(s)&&o.hasOwnProperty(s)&&o[s]!=null)if(s==="style"){var l=o[s];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Lr.hasOwnProperty(s)?i||(i=[]):(i=i||[]).push(s,null));for(s in r){var u=r[s];if(l=o!=null?o[s]:void 0,r.hasOwnProperty(s)&&u!==l&&(u!=null||l!=null))if(s==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(s,n)),n=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Lr.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&ie("scroll",e),i||l===u||(i=[])):(i=i||[]).push(s,u))}n&&(i=i||[]).push("style",n);var s=i;(t.updateQueue=s)&&(t.flags|=4)}};Rp=function(e,t,n,r){n!==r&&(t.flags|=4)};function vr(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function tg(e,t,n){var r=t.pendingProps;switch(Vu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Ke(t.type)&&ci(),Me(t),null;case 3:return r=t.stateNode,Jn(),ae(Qe),ae(Fe),Ju(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(No(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,mt!==null&&(Xl(mt),mt=null))),Wl(e,t),Me(t),null;case 5:Zu(t);var o=pn(Yr.current);if(n=t.type,e!==null&&t.stateNode!=null)jp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return Me(t),null}if(e=pn(Dt.current),No(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ct]=t,r[Vr]=i,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(o=0;o<kr.length;o++)ie(kr[o],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":Hs(r,i),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ie("invalid",r);break;case"textarea":Qs(r,i),ie("invalid",r)}ml(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&To(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&To(r.textContent,l,e),o=["children",""+l]):Lr.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ie("scroll",r)}switch(n){case"input":Co(r),Gs(r,i,!0);break;case"textarea":Co(r),Ks(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=si)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ud(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ct]=t,e[Vr]=r,Lp(e,t,!1,!1),t.stateNode=e;e:{switch(a=vl(n,r),n){case"dialog":ie("cancel",e),ie("close",e),o=r;break;case"iframe":case"object":case"embed":ie("load",e),o=r;break;case"video":case"audio":for(o=0;o<kr.length;o++)ie(kr[o],e);o=r;break;case"source":ie("error",e),o=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),o=r;break;case"details":ie("toggle",e),o=r;break;case"input":Hs(e,r),o=cl(e,r),ie("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=pe({},r,{value:void 0}),ie("invalid",e);break;case"textarea":Qs(e,r),o=pl(e,r),ie("invalid",e);break;default:o=r}ml(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?fd(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&sd(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&jr(e,u):typeof u=="number"&&jr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Lr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ie("scroll",e):u!=null&&Pu(e,i,u,a))}switch(n){case"input":Co(e),Gs(e,r,!1);break;case"textarea":Co(e),Ks(e);break;case"option":r.value!=null&&e.setAttribute("value",""+tn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Wn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=si)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Me(t),null;case 6:if(e&&t.stateNode!=null)Rp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=pn(Yr.current),pn(Dt.current),No(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(i=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:To(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&To(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return Me(t),null;case 13:if(ae(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&Je!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Jd(),Xn(),t.flags|=98560,i=!1;else if(i=No(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[Ct]=t}else Xn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),i=!1}else mt!==null&&(Xl(mt),mt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(fe.current&1)!==0?Ee===0&&(Ee=3):cs())),t.updateQueue!==null&&(t.flags|=4),Me(t),null);case 4:return Jn(),Wl(e,t),e===null&&Ur(t.stateNode.containerInfo),Me(t),null;case 10:return Gu(t.type._context),Me(t),null;case 17:return Ke(t.type)&&ci(),Me(t),null;case 19:if(ae(fe),i=t.memoizedState,i===null)return Me(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)vr(i,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=gi(e),a!==null){for(t.flags|=128,vr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(fe,fe.current&1|2),t.child}e=e.sibling}i.tail!==null&&ye()>er&&(t.flags|=128,r=!0,vr(i,!1),t.lanes=4194304)}else{if(!r)if(e=gi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ue)return Me(t),null}else 2*ye()-i.renderingStartTime>er&&n!==1073741824&&(t.flags|=128,r=!0,vr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ye(),t.sibling=null,n=fe.current,oe(fe,r?n&1|2:n&1),t):(Me(t),null);case 22:case 23:return ss(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ze&1073741824)!==0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function ng(e,t){switch(Vu(t),t.tag){case 1:return Ke(t.type)&&ci(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jn(),ae(Qe),ae(Fe),Ju(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Zu(t),null;case 13:if(ae(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(fe),null;case 4:return Jn(),null;case 10:return Gu(t.type._context),null;case 22:case 23:return ss(),null;case 24:return null;default:return null}}var Ro=!1,ze=!1,rg=typeof WeakSet=="function"?WeakSet:Set,j=null;function zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(e,t,r)}else n.current=null}function Vl(e,t,n){try{n()}catch(r){ve(e,t,r)}}var Mc=!1;function og(e,t){if(El=ai,e=zd(),Uu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,s=0,d=0,p=e,h=null;t:for(;;){for(var w;p!==n||o!==0&&p.nodeType!==3||(l=a+o),p!==i||r!==0&&p.nodeType!==3||(u=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(w=p.firstChild)!==null;)h=p,p=w;for(;;){if(p===e)break t;if(h===n&&++s===o&&(l=a),h===i&&++d===r&&(u=a),(w=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(bl={focusedElem:e,selectionRange:n},ai=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var S=y.memoizedProps,O=y.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?S:pt(t.type,S),O);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(g){ve(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return y=Mc,Mc=!1,y}function _r(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Vl(t,n,i)}o=o.next}while(o!==r)}}function Mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $p(e){var t=e.alternate;t!==null&&(e.alternate=null,$p(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[Vr],delete t[Al],delete t[Fv],delete t[Uv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ip(e){return e.tag===5||e.tag===3||e.tag===4}function zc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ip(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=si));else if(r!==4&&(e=e.child,e!==null))for(Yl(e,t,n),e=e.sibling;e!==null;)Yl(e,t,n),e=e.sibling}function Hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hl(e,t,n),e=e.sibling;e!==null;)Hl(e,t,n),e=e.sibling}var Le=null,ht=!1;function zt(e,t,n){for(n=n.child;n!==null;)Mp(e,t,n),n=n.sibling}function Mp(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(Ai,n)}catch{}switch(n.tag){case 5:ze||zn(n,t);case 6:var r=Le,o=ht;Le=null,zt(e,t,n),Le=r,ht=o,Le!==null&&(ht?(e=Le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(ht?(e=Le,n=n.stateNode,e.nodeType===8?Fa(e.parentNode,n):e.nodeType===1&&Fa(e,n),Mr(e)):Fa(Le,n.stateNode));break;case 4:r=Le,o=ht,Le=n.stateNode.containerInfo,ht=!0,zt(e,t,n),Le=r,ht=o;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&Vl(n,t,a),o=o.next}while(o!==r)}zt(e,t,n);break;case 1:if(!ze&&(zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ve(n,t,l)}zt(e,t,n);break;case 21:zt(e,t,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,zt(e,t,n),ze=r):zt(e,t,n);break;default:zt(e,t,n)}}function Fc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new rg),t.forEach(function(r){var o=pg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Le=l.stateNode,ht=!1;break e;case 3:Le=l.stateNode.containerInfo,ht=!0;break e;case 4:Le=l.stateNode.containerInfo,ht=!0;break e}l=l.return}if(Le===null)throw Error(C(160));Mp(i,a,o),Le=null,ht=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(s){ve(o,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zp(t,e),t=t.sibling}function zp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),wt(e),r&4){try{_r(3,e,e.return),Mi(3,e)}catch(S){ve(e,e.return,S)}try{_r(5,e,e.return)}catch(S){ve(e,e.return,S)}}break;case 1:dt(t,e),wt(e),r&512&&n!==null&&zn(n,n.return);break;case 5:if(dt(t,e),wt(e),r&512&&n!==null&&zn(n,n.return),e.flags&32){var o=e.stateNode;try{jr(o,"")}catch(S){ve(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&ad(o,i),vl(l,a);var s=vl(l,i);for(a=0;a<u.length;a+=2){var d=u[a],p=u[a+1];d==="style"?fd(o,p):d==="dangerouslySetInnerHTML"?sd(o,p):d==="children"?jr(o,p):Pu(o,d,p,s)}switch(l){case"input":fl(o,i);break;case"textarea":ld(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Wn(o,!!i.multiple,w,!1):h!==!!i.multiple&&(i.defaultValue!=null?Wn(o,!!i.multiple,i.defaultValue,!0):Wn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Vr]=i}catch(S){ve(e,e.return,S)}}break;case 6:if(dt(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){ve(e,e.return,S)}}break;case 3:if(dt(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mr(t.containerInfo)}catch(S){ve(e,e.return,S)}break;case 4:dt(t,e),wt(e);break;case 13:dt(t,e),wt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ls=ye())),r&4&&Fc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ze=(s=ze)||d,dt(t,e),ze=s):dt(t,e),wt(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!d&&(e.mode&1)!==0)for(j=e,d=e.child;d!==null;){for(p=j=d;j!==null;){switch(h=j,w=h.child,h.tag){case 0:case 11:case 14:case 15:_r(4,h,h.return);break;case 1:zn(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(S){ve(r,n,S)}}break;case 5:zn(h,h.return);break;case 22:if(h.memoizedState!==null){Wc(p);continue}}w!==null?(w.return=h,j=w):Wc(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{o=p.stateNode,s?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=cd("display",a))}catch(S){ve(e,e.return,S)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=s?"":p.memoizedProps}catch(S){ve(e,e.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:dt(t,e),wt(e),r&4&&Fc(e);break;case 21:break;default:dt(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ip(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(jr(o,""),r.flags&=-33);var i=zc(e);Hl(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=zc(e);Yl(e,l,a);break;default:throw Error(C(161))}}catch(u){ve(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ig(e,t,n){j=e,Fp(e)}function Fp(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var o=j,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Ro;if(!a){var l=o.alternate,u=l!==null&&l.memoizedState!==null||ze;l=Ro;var s=ze;if(Ro=a,(ze=u)&&!s)for(j=o;j!==null;)a=j,u=a.child,a.tag===22&&a.memoizedState!==null?Vc(o):u!==null?(u.return=a,j=u):Vc(o);for(;i!==null;)j=i,Fp(i),i=i.sibling;j=o,Ro=l,ze=s}Uc(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,j=i):Uc(e)}}function Uc(e){for(;j!==null;){var t=j;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ze||Mi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ze)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Oc(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Oc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var d=s.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Mr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ze||t.flags&512&&Bl(t)}catch(h){ve(t,t.return,h)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Wc(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Vc(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Mi(4,t)}catch(u){ve(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ve(t,o,u)}}var i=t.return;try{Bl(t)}catch(u){ve(t,i,u)}break;case 5:var a=t.return;try{Bl(t)}catch(u){ve(t,a,u)}}}catch(u){ve(t,t.return,u)}if(t===e){j=null;break}var l=t.sibling;if(l!==null){l.return=t.return,j=l;break}j=t.return}}var ag=Math.ceil,xi=$t.ReactCurrentDispatcher,is=$t.ReactCurrentOwner,lt=$t.ReactCurrentBatchConfig,G=0,Pe=null,ke=null,je=0,Ze=0,Fn=on(0),Ee=0,Kr=null,Sn=0,zi=0,as=0,Ar=null,He=null,ls=0,er=1/0,Et=null,Si=!1,Gl=null,Zt=null,$o=!1,Yt=null,ki=0,Tr=0,Ql=null,Zo=-1,Jo=0;function Ve(){return(G&6)!==0?ye():Zo!==-1?Zo:Zo=ye()}function Jt(e){return(e.mode&1)===0?1:(G&2)!==0&&je!==0?je&-je:Vv.transition!==null?(Jo===0&&(Jo=Cd()),Jo):(e=te,e!==0||(e=window.event,e=e===void 0?16:Ad(e.type)),e)}function gt(e,t,n,r){if(50<Tr)throw Tr=0,Ql=null,Error(C(185));no(e,n,r),((G&2)===0||e!==Pe)&&(e===Pe&&((G&2)===0&&(zi|=n),Ee===4&&Vt(e,je)),Xe(e,r),n===1&&G===0&&(t.mode&1)===0&&(er=ye()+500,Ri&&an()))}function Xe(e,t){var n=e.callbackNode;Vm(e,t);var r=ii(e,e===Pe?je:0);if(r===0)n!==null&&Js(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Js(n),t===1)e.tag===0?Wv(Bc.bind(null,e)):Kd(Bc.bind(null,e)),Mv(function(){(G&6)===0&&an()}),n=null;else{switch(Od(r)){case 1:n=Lu;break;case 4:n=Sd;break;case 16:n=oi;break;case 536870912:n=kd;break;default:n=oi}n=Qp(n,Up.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Up(e,t){if(Zo=-1,Jo=0,(G&6)!==0)throw Error(C(327));var n=e.callbackNode;if(Gn()&&e.callbackNode!==n)return null;var r=ii(e,e===Pe?je:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ci(e,r);else{t=r;var o=G;G|=2;var i=Vp();(Pe!==e||je!==t)&&(Et=null,er=ye()+500,hn(e,t));do try{sg();break}catch(l){Wp(e,l)}while(1);Hu(),xi.current=i,G=o,ke!==null?t=0:(Pe=null,je=0,t=Ee)}if(t!==0){if(t===2&&(o=Sl(e),o!==0&&(r=o,t=Kl(e,o))),t===1)throw n=Kr,hn(e,0),Vt(e,r),Xe(e,ye()),n;if(t===6)Vt(e,r);else{if(o=e.current.alternate,(r&30)===0&&!lg(o)&&(t=Ci(e,r),t===2&&(i=Sl(e),i!==0&&(r=i,t=Kl(e,i))),t===1))throw n=Kr,hn(e,0),Vt(e,r),Xe(e,ye()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:cn(e,He,Et);break;case 3:if(Vt(e,r),(r&130023424)===r&&(t=ls+500-ye(),10<t)){if(ii(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=_l(cn.bind(null,e,He,Et),t);break}cn(e,He,Et);break;case 4:if(Vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-vt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ag(r/1960))-r,10<r){e.timeoutHandle=_l(cn.bind(null,e,He,Et),r);break}cn(e,He,Et);break;case 5:cn(e,He,Et);break;default:throw Error(C(329))}}}return Xe(e,ye()),e.callbackNode===n?Up.bind(null,e):null}function Kl(e,t){var n=Ar;return e.current.memoizedState.isDehydrated&&(hn(e,t).flags|=256),e=Ci(e,t),e!==2&&(t=He,He=n,t!==null&&Xl(t)),e}function Xl(e){He===null?He=e:He.push.apply(He,e)}function lg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!yt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vt(e,t){for(t&=~as,t&=~zi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-vt(t),r=1<<n;e[n]=-1,t&=~r}}function Bc(e){if((G&6)!==0)throw Error(C(327));Gn();var t=ii(e,0);if((t&1)===0)return Xe(e,ye()),null;var n=Ci(e,t);if(e.tag!==0&&n===2){var r=Sl(e);r!==0&&(t=r,n=Kl(e,r))}if(n===1)throw n=Kr,hn(e,0),Vt(e,t),Xe(e,ye()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,He,Et),Xe(e,ye()),null}function us(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(er=ye()+500,Ri&&an())}}function kn(e){Yt!==null&&Yt.tag===0&&(G&6)===0&&Gn();var t=G;G|=1;var n=lt.transition,r=te;try{if(lt.transition=null,te=1,e)return e()}finally{te=r,lt.transition=n,G=t,(G&6)===0&&an()}}function ss(){Ze=Fn.current,ae(Fn)}function hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Iv(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Vu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ci();break;case 3:Jn(),ae(Qe),ae(Fe),Ju();break;case 5:Zu(r);break;case 4:Jn();break;case 13:ae(fe);break;case 19:ae(fe);break;case 10:Gu(r.type._context);break;case 22:case 23:ss()}n=n.return}if(Pe=e,ke=e=qt(e.current,null),je=Ze=t,Ee=0,Kr=null,as=zi=Sn=0,He=Ar=null,dn!==null){for(t=0;t<dn.length;t++)if(n=dn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}dn=null}return e}function Wp(e,t){do{var n=ke;try{if(Hu(),Qo.current=wi,yi){for(var r=de.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}yi=!1}if(xn=0,be=De=de=null,Pr=!1,Hr=0,is.current=null,n===null||n.return===null){Ee=1,Kr=t,ke=null;break}e:{var i=e,a=n.return,l=n,u=t;if(t=je,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,d=l,p=d.tag;if((d.mode&1)===0&&(p===0||p===11||p===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=Tc(a);if(w!==null){w.flags&=-257,Nc(w,a,l,i,t),w.mode&1&&Ac(i,s,t),t=w,u=s;var y=t.updateQueue;if(y===null){var S=new Set;S.add(u),t.updateQueue=S}else y.add(u);break e}else{if((t&1)===0){Ac(i,s,t),cs();break e}u=Error(C(426))}}else if(ue&&l.mode&1){var O=Tc(a);if(O!==null){(O.flags&65536)===0&&(O.flags|=256),Nc(O,a,l,i,t),Bu(qn(u,l));break e}}i=u=qn(u,l),Ee!==4&&(Ee=2),Ar===null?Ar=[i]:Ar.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Dp(i,u,t);Cc(i,f);break e;case 1:l=u;var c=i.type,m=i.stateNode;if((i.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Zt===null||!Zt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var g=Ep(i,l,t);Cc(i,g);break e}}i=i.return}while(i!==null)}Yp(n)}catch(k){t=k,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(1)}function Vp(){var e=xi.current;return xi.current=wi,e===null?wi:e}function cs(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),Pe===null||(Sn&268435455)===0&&(zi&268435455)===0||Vt(Pe,je)}function Ci(e,t){var n=G;G|=2;var r=Vp();(Pe!==e||je!==t)&&(Et=null,hn(e,t));do try{ug();break}catch(o){Wp(e,o)}while(1);if(Hu(),G=n,xi.current=r,ke!==null)throw Error(C(261));return Pe=null,je=0,Ee}function ug(){for(;ke!==null;)Bp(ke)}function sg(){for(;ke!==null&&!jm();)Bp(ke)}function Bp(e){var t=Gp(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?Yp(e):ke=t,is.current=null}function Yp(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=tg(n,t,Ze),n!==null){ke=n;return}}else{if(n=ng(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,ke=null;return}}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Ee===0&&(Ee=5)}function cn(e,t,n){var r=te,o=lt.transition;try{lt.transition=null,te=1,cg(e,t,n,r)}finally{lt.transition=o,te=r}return null}function cg(e,t,n,r){do Gn();while(Yt!==null);if((G&6)!==0)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Bm(e,i),e===Pe&&(ke=Pe=null,je=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||$o||($o=!0,Qp(oi,function(){return Gn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=lt.transition,lt.transition=null;var a=te;te=1;var l=G;G|=4,is.current=null,og(e,n),zp(n,e),Av(bl),ai=!!El,bl=El=null,e.current=n,ig(n),Rm(),G=l,te=a,lt.transition=i}else e.current=n;if($o&&($o=!1,Yt=e,ki=o),i=e.pendingLanes,i===0&&(Zt=null),Mm(n.stateNode),Xe(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Si)throw Si=!1,e=Gl,Gl=null,e;return(ki&1)!==0&&e.tag!==0&&Gn(),i=e.pendingLanes,(i&1)!==0?e===Ql?Tr++:(Tr=0,Ql=e):Tr=0,an(),null}function Gn(){if(Yt!==null){var e=Od(ki),t=lt.transition,n=te;try{if(lt.transition=null,te=16>e?16:e,Yt===null)var r=!1;else{if(e=Yt,Yt=null,ki=0,(G&6)!==0)throw Error(C(331));var o=G;for(G|=4,j=e.current;j!==null;){var i=j,a=i.child;if((j.flags&16)!==0){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var s=l[u];for(j=s;j!==null;){var d=j;switch(d.tag){case 0:case 11:case 15:_r(8,d,i)}var p=d.child;if(p!==null)p.return=d,j=p;else for(;j!==null;){d=j;var h=d.sibling,w=d.return;if($p(d),d===s){j=null;break}if(h!==null){h.return=w,j=h;break}j=w}}}var y=i.alternate;if(y!==null){var S=y.child;if(S!==null){y.child=null;do{var O=S.sibling;S.sibling=null,S=O}while(S!==null)}}j=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,j=a;else e:for(;j!==null;){if(i=j,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:_r(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,j=f;break e}j=i.return}}var c=e.current;for(j=c;j!==null;){a=j;var m=a.child;if((a.subtreeFlags&2064)!==0&&m!==null)m.return=a,j=m;else e:for(a=c;j!==null;){if(l=j,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:Mi(9,l)}}catch(k){ve(l,l.return,k)}if(l===a){j=null;break e}var g=l.sibling;if(g!==null){g.return=l.return,j=g;break e}j=l.return}}if(G=o,an(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(Ai,e)}catch{}r=!0}return r}finally{te=n,lt.transition=t}}return!1}function Yc(e,t,n){t=qn(n,t),t=Dp(e,t,1),e=Xt(e,t,1),t=Ve(),e!==null&&(no(e,1,t),Xe(e,t))}function ve(e,t,n){if(e.tag===3)Yc(e,e,n);else for(;t!==null;){if(t.tag===3){Yc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=qn(n,e),e=Ep(t,e,1),t=Xt(t,e,1),e=Ve(),t!==null&&(no(t,1,e),Xe(t,e));break}}t=t.return}}function fg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,Pe===e&&(je&n)===n&&(Ee===4||Ee===3&&(je&130023424)===je&&500>ye()-ls?hn(e,0):as|=n),Xe(e,t)}function Hp(e,t){t===0&&((e.mode&1)===0?t=1:(t=Eo,Eo<<=1,(Eo&130023424)===0&&(Eo=4194304)));var n=Ve();e=jt(e,t),e!==null&&(no(e,t,n),Xe(e,n))}function dg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hp(e,n)}function pg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Hp(e,n)}var Gp;Gp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qe.current)Ge=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ge=!1,eg(e,t,n);Ge=(e.flags&131072)!==0}else Ge=!1,ue&&(t.flags&1048576)!==0&&Xd(t,pi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xo(e,t),e=t.pendingProps;var o=Kn(t,Fe.current);Hn(t,n),o=es(null,t,r,e,o,n);var i=ts();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(i=!0,fi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ku(t),o.updater=$i,t.stateNode=o,o._reactInternals=t,$l(t,r,e,n),t=zl(null,t,r,!0,i,n)):(t.tag=0,ue&&i&&Wu(t),We(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=mg(r),e=pt(r,e),o){case 0:t=Ml(null,t,r,e,n);break e;case 1:t=Rc(null,t,r,e,n);break e;case 11:t=Lc(null,t,r,e,n);break e;case 14:t=jc(null,t,r,pt(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),Ml(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),Rc(e,t,r,o,n);case 3:e:{if(Ap(t),e===null)throw Error(C(387));r=t.pendingProps,i=t.memoizedState,o=i.element,ep(e,t),vi(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=qn(Error(C(423)),t),t=$c(e,t,r,n,o);break e}else if(r!==o){o=qn(Error(C(424)),t),t=$c(e,t,r,n,o);break e}else for(Je=Kt(t.stateNode.containerInfo.firstChild),qe=t,ue=!0,mt=null,n=op(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xn(),r===o){t=Rt(e,t,n);break e}We(e,t,r,n)}t=t.child}return t;case 5:return ip(t),e===null&&Ll(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Pl(r,o)?a=null:i!==null&&Pl(r,i)&&(t.flags|=32),_p(e,t),We(e,t,a,n),t.child;case 6:return e===null&&Ll(t),null;case 13:return Tp(e,t,n);case 4:return Xu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Zn(t,null,r,n):We(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),Lc(e,t,r,o,n);case 7:return We(e,t,t.pendingProps,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,oe(hi,r._currentValue),r._currentValue=a,i!==null)if(yt(i.value,a)){if(i.children===o.children&&!Qe.current){t=Rt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Tt(-1,n&-n),u.tag=2;var s=i.updateQueue;if(s!==null){s=s.shared;var d=s.pending;d===null?u.next=u:(u.next=d.next,d.next=u),s.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),jl(i.return,n,t),l.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(C(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),jl(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}We(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Hn(t,n),o=ut(o),r=r(o),t.flags|=1,We(e,t,r,n),t.child;case 14:return r=t.type,o=pt(r,t.pendingProps),o=pt(r.type,o),jc(e,t,r,o,n);case 15:return bp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),Xo(e,t),t.tag=1,Ke(r)?(e=!0,fi(t)):e=!1,Hn(t,n),np(t,r,o),$l(t,r,o,n),zl(null,t,r,!0,e,n);case 19:return Np(e,t,n);case 22:return Pp(e,t,n)}throw Error(C(156,t.tag))};function Qp(e,t){return xd(e,t)}function hg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new hg(e,t,n,r)}function fs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mg(e){if(typeof e=="function")return fs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Au)return 11;if(e===Tu)return 14}return 2}function qt(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qo(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")fs(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case An:return mn(n.children,o,i,t);case _u:a=8,o|=8;break;case al:return e=at(12,n,t,o|2),e.elementType=al,e.lanes=i,e;case ll:return e=at(13,n,t,o),e.elementType=ll,e.lanes=i,e;case ul:return e=at(19,n,t,o),e.elementType=ul,e.lanes=i,e;case rd:return Fi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case td:a=10;break e;case nd:a=9;break e;case Au:a=11;break e;case Tu:a=14;break e;case Ft:a=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=at(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function mn(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function Fi(e,t,n,r){return e=at(22,e,r,t),e.elementType=rd,e.lanes=n,e.stateNode={isHidden:!1},e}function Qa(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function Ka(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_a(0),this.expirationTimes=_a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_a(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ds(e,t,n,r,o,i,a,l,u){return e=new vg(e,t,n,l,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=at(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ku(i),e}function gg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Kp(e){if(!e)return nn;e=e._reactInternals;e:{if(On(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Ke(n))return Qd(e,n,t)}return t}function Xp(e,t,n,r,o,i,a,l,u){return e=ds(n,r,!0,e,o,i,a,l,u),e.context=Kp(null),n=e.current,r=Ve(),o=Jt(n),i=Tt(r,o),i.callback=t!=null?t:null,Xt(n,i,o),e.current.lanes=o,no(e,o,r),Xe(e,r),e}function Ui(e,t,n,r){var o=t.current,i=Ve(),a=Jt(o);return n=Kp(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Xt(o,t,a),e!==null&&(gt(e,o,a,i),Go(e,o,a)),a}function Oi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ps(e,t){Hc(e,t),(e=e.alternate)&&Hc(e,t)}function yg(){return null}var Zp=typeof reportError=="function"?reportError:function(e){console.error(e)};function hs(e){this._internalRoot=e}Wi.prototype.render=hs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Ui(e,t,null,null)};Wi.prototype.unmount=hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kn(function(){Ui(null,e,null,null)}),t[Lt]=null}};function Wi(e){this._internalRoot=e}Wi.prototype.unstable_scheduleHydration=function(e){if(e){var t=bd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wt.length&&t!==0&&t<Wt[n].priority;n++);Wt.splice(n,0,e),n===0&&_d(e)}};function ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gc(){}function wg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var s=Oi(a);i.call(s)}}var a=Xp(t,r,e,0,null,!1,!1,"",Gc);return e._reactRootContainer=a,e[Lt]=a.current,Ur(e.nodeType===8?e.parentNode:e),kn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var s=Oi(u);l.call(s)}}var u=ds(e,0,!1,null,null,!1,!1,"",Gc);return e._reactRootContainer=u,e[Lt]=u.current,Ur(e.nodeType===8?e.parentNode:e),kn(function(){Ui(t,u,n,r)}),u}function Bi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var u=Oi(a);l.call(u)}}Ui(t,a,e,o)}else a=wg(n,t,e,o,r);return Oi(a)}Dd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sr(t.pendingLanes);n!==0&&(ju(t,n|1),Xe(t,ye()),(G&6)===0&&(er=ye()+500,an()))}break;case 13:kn(function(){var r=jt(e,1);if(r!==null){var o=Ve();gt(r,e,1,o)}}),ps(e,1)}};Ru=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var n=Ve();gt(t,e,134217728,n)}ps(e,134217728)}};Ed=function(e){if(e.tag===13){var t=Jt(e),n=jt(e,t);if(n!==null){var r=Ve();gt(n,e,t,r)}ps(e,t)}};bd=function(){return te};Pd=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};yl=function(e,t,n){switch(t){case"input":if(fl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ji(r);if(!o)throw Error(C(90));id(r),fl(r,o)}}}break;case"textarea":ld(e,n);break;case"select":t=n.value,t!=null&&Wn(e,!!n.multiple,t,!1)}};hd=us;md=kn;var xg={usingClientEntryPoint:!1,Events:[oo,jn,ji,dd,pd,us]},gr={findFiberByHostInstance:fn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Sg={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yd(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||yg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Io.isDisabled&&Io.supportsFiber)try{Ai=Io.inject(Sg),Ot=Io}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xg;tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ms(t))throw Error(C(200));return gg(e,t,null,n)};tt.createRoot=function(e,t){if(!ms(e))throw Error(C(299));var n=!1,r="",o=Zp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ds(e,1,!1,null,null,n,!1,r,o),e[Lt]=t.current,Ur(e.nodeType===8?e.parentNode:e),new hs(t)};tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=yd(t),e=e===null?null:e.stateNode,e};tt.flushSync=function(e){return kn(e)};tt.hydrate=function(e,t,n){if(!Vi(t))throw Error(C(200));return Bi(null,e,t,!0,n)};tt.hydrateRoot=function(e,t,n){if(!ms(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Zp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Xp(t,null,e,1,n!=null?n:null,o,!1,i,a),e[Lt]=t.current,Ur(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Wi(t)};tt.render=function(e,t,n){if(!Vi(t))throw Error(C(200));return Bi(null,e,t,!1,n)};tt.unmountComponentAtNode=function(e){if(!Vi(e))throw Error(C(40));return e._reactRootContainer?(kn(function(){Bi(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1};tt.unstable_batchedUpdates=us;tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vi(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Bi(e,t,n,!1,r)};tt.version="18.2.0-next-9e3b772b8-20220608";function Jp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jp)}catch(e){console.error(e)}}Jp(),Xf.exports=tt;var Qc=Xf.exports;ol.createRoot=Qc.createRoot,ol.hydrateRoot=Qc.hydrateRoot;var Yi={exports:{}},Hi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg=R.exports,Cg=Symbol.for("react.element"),Og=Symbol.for("react.fragment"),Dg=Object.prototype.hasOwnProperty,Eg=kg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bg={key:!0,ref:!0,__self:!0,__source:!0};function qp(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Dg.call(t,r)&&!bg.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Cg,type:e,key:i,ref:a,props:o,_owner:Eg.current}}Hi.Fragment=Og;Hi.jsx=qp;Hi.jsxs=qp;Yi.exports=Hi;const D=Yi.exports.jsx,X=Yi.exports.jsxs,Pg=Yi.exports.Fragment,Gi=R.exports.createContext({}),_g={name:""};function Ag({children:e}){const t=JSON.parse(localStorage.getItem("userPreferencesDonaClone")||JSON.stringify(_g)),[n,r]=R.exports.useState(t),o=i=>{r(a=>({...a,name:i}))};return R.exports.useEffect(()=>{localStorage.setItem("userPreferencesDonaClone",JSON.stringify(n))},[n]),D(Gi.Provider,{value:{user:n,registerUser:o},children:e})}const ao=R.exports.createContext({}),Tg=[{taskAmout:0,title:"Home",slug:"/",color:"008FFD"}];function Ng({children:e}){const t=JSON.parse(localStorage.getItem("userCategoriesDonaClone")||JSON.stringify(Tg)),[n,r]=R.exports.useState(t),o=l=>{r(u=>[...u,l])},i=l=>{r(u=>u.filter(s=>s.slug!==l))},a=(l,u)=>{r(s=>s.map(d=>d.slug===l?{...d,color:u}:d))};return R.exports.useEffect(()=>{localStorage.setItem("userCategoriesDonaClone",JSON.stringify(n))},[n]),D(ao.Provider,{value:{categories:n,addCategory:o,removeCategory:i,updateCategoryColor:a},children:e})}const Qi=R.exports.createContext({});function Lg({children:e}){const t="/",[n,r]=R.exports.useState(t),o=i=>{r(i)};return D(Qi.Provider,{value:{path:n,changePath:o},children:e})}const Ki=R.exports.createContext({});function jg({children:e}){const t=JSON.parse(localStorage.getItem("userTasksDonaClone")||"[]"),[n,r]=R.exports.useState(t),o=s=>{r(d=>[...d,s])},i=s=>{r(d=>d.filter(p=>p.id!==s))},a=(s,d)=>{r(p=>p.map(h=>h.id===s.id?{...s,checked:d}:h))},l=(s,d)=>{r(p=>p.map(h=>h.id===s.id?{...s,date:d}:h))},u=(s,d)=>{r(p=>p.map(h=>h.category.slug===s?{...h,category:{...h.category,color:d}}:h))};return R.exports.useEffect(()=>{localStorage.setItem("userTasksDonaClone",JSON.stringify(n))},[n]),D(Ki.Provider,{value:{tasks:n,addTask:o,removeTask:i,updateCheckedStatus:a,updateDate:l,updateTaskColor:u},children:e})}function Rg(e,t){R.exports.useEffect(()=>{const n=r=>{!e.current||e.current.contains(r.target)||t()};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,t])}var vs={exports:{}},ne={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gs=Symbol.for("react.element"),ys=Symbol.for("react.portal"),Xi=Symbol.for("react.fragment"),Zi=Symbol.for("react.strict_mode"),Ji=Symbol.for("react.profiler"),qi=Symbol.for("react.provider"),ea=Symbol.for("react.context"),$g=Symbol.for("react.server_context"),ta=Symbol.for("react.forward_ref"),na=Symbol.for("react.suspense"),ra=Symbol.for("react.suspense_list"),oa=Symbol.for("react.memo"),ia=Symbol.for("react.lazy"),Ig=Symbol.for("react.offscreen"),eh;eh=Symbol.for("react.module.reference");function ct(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case gs:switch(e=e.type,e){case Xi:case Ji:case Zi:case na:case ra:return e;default:switch(e=e&&e.$$typeof,e){case $g:case ea:case ta:case ia:case oa:case qi:return e;default:return t}}case ys:return t}}}ne.ContextConsumer=ea;ne.ContextProvider=qi;ne.Element=gs;ne.ForwardRef=ta;ne.Fragment=Xi;ne.Lazy=ia;ne.Memo=oa;ne.Portal=ys;ne.Profiler=Ji;ne.StrictMode=Zi;ne.Suspense=na;ne.SuspenseList=ra;ne.isAsyncMode=function(){return!1};ne.isConcurrentMode=function(){return!1};ne.isContextConsumer=function(e){return ct(e)===ea};ne.isContextProvider=function(e){return ct(e)===qi};ne.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===gs};ne.isForwardRef=function(e){return ct(e)===ta};ne.isFragment=function(e){return ct(e)===Xi};ne.isLazy=function(e){return ct(e)===ia};ne.isMemo=function(e){return ct(e)===oa};ne.isPortal=function(e){return ct(e)===ys};ne.isProfiler=function(e){return ct(e)===Ji};ne.isStrictMode=function(e){return ct(e)===Zi};ne.isSuspense=function(e){return ct(e)===na};ne.isSuspenseList=function(e){return ct(e)===ra};ne.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Xi||e===Ji||e===Zi||e===na||e===ra||e===Ig||typeof e=="object"&&e!==null&&(e.$$typeof===ia||e.$$typeof===oa||e.$$typeof===qi||e.$$typeof===ea||e.$$typeof===ta||e.$$typeof===eh||e.getModuleId!==void 0)};ne.typeOf=ct;vs.exports=ne;function Mg(e){function t(_,N,L,F,x){for(var B=0,A=0,le=0,K=0,J,U,Oe=0,q=0,H,$e=H=J=0,ee=0,Ae=0,ur=0,Te=0,xo=L.length,sr=xo-1,ft,W="",ge="",ka="",Ca="",Mt;ee<xo;){if(U=L.charCodeAt(ee),ee===sr&&A+K+le+B!==0&&(A!==0&&(U=A===47?10:47),K=le=B=0,xo++,sr++),A+K+le+B===0){if(ee===sr&&(0<Ae&&(W=W.replace(h,"")),0<W.trim().length)){switch(U){case 32:case 9:case 59:case 13:case 10:break;default:W+=L.charAt(ee)}U=59}switch(U){case 123:for(W=W.trim(),J=W.charCodeAt(0),H=1,Te=++ee;ee<xo;){switch(U=L.charCodeAt(ee)){case 123:H++;break;case 125:H--;break;case 47:switch(U=L.charCodeAt(ee+1)){case 42:case 47:e:{for($e=ee+1;$e<sr;++$e)switch(L.charCodeAt($e)){case 47:if(U===42&&L.charCodeAt($e-1)===42&&ee+2!==$e){ee=$e+1;break e}break;case 10:if(U===47){ee=$e+1;break e}}ee=$e}}break;case 91:U++;case 40:U++;case 34:case 39:for(;ee++<sr&&L.charCodeAt(ee)!==U;);}if(H===0)break;ee++}switch(H=L.substring(Te,ee),J===0&&(J=(W=W.replace(p,"").trim()).charCodeAt(0)),J){case 64:switch(0<Ae&&(W=W.replace(h,"")),U=W.charCodeAt(1),U){case 100:case 109:case 115:case 45:Ae=N;break;default:Ae=ce}if(H=t(N,Ae,H,U,x+1),Te=H.length,0<b&&(Ae=n(ce,W,ur),Mt=l(3,H,Ae,N,me,Z,Te,U,x,F),W=Ae.join(""),Mt!==void 0&&(Te=(H=Mt.trim()).length)===0&&(U=0,H="")),0<Te)switch(U){case 115:W=W.replace(E,a);case 100:case 109:case 45:H=W+"{"+H+"}";break;case 107:W=W.replace(c,"$1 $2"),H=W+"{"+H+"}",H=Se===1||Se===2&&i("@"+H,3)?"@-webkit-"+H+"@"+H:"@"+H;break;default:H=W+H,F===112&&(H=(ge+=H,""))}else H="";break;default:H=t(N,n(N,W,ur),H,F,x+1)}ka+=H,H=ur=Ae=$e=J=0,W="",U=L.charCodeAt(++ee);break;case 125:case 59:if(W=(0<Ae?W.replace(h,""):W).trim(),1<(Te=W.length))switch($e===0&&(J=W.charCodeAt(0),J===45||96<J&&123>J)&&(Te=(W=W.replace(" ",":")).length),0<b&&(Mt=l(1,W,N,_,me,Z,ge.length,F,x,F))!==void 0&&(Te=(W=Mt.trim()).length)===0&&(W="\0\0"),J=W.charCodeAt(0),U=W.charCodeAt(1),J){case 0:break;case 64:if(U===105||U===99){Ca+=W+L.charAt(ee);break}default:W.charCodeAt(Te-1)!==58&&(ge+=o(W,J,U,W.charCodeAt(2)))}ur=Ae=$e=J=0,W="",U=L.charCodeAt(++ee)}}switch(U){case 13:case 10:A===47?A=0:1+J===0&&F!==107&&0<W.length&&(Ae=1,W+="\0"),0<b*I&&l(0,W,N,_,me,Z,ge.length,F,x,F),Z=1,me++;break;case 59:case 125:if(A+K+le+B===0){Z++;break}default:switch(Z++,ft=L.charAt(ee),U){case 9:case 32:if(K+B+A===0)switch(Oe){case 44:case 58:case 9:case 32:ft="";break;default:U!==32&&(ft=" ")}break;case 0:ft="\\0";break;case 12:ft="\\f";break;case 11:ft="\\v";break;case 38:K+A+B===0&&(Ae=ur=1,ft="\f"+ft);break;case 108:if(K+A+B+xe===0&&0<$e)switch(ee-$e){case 2:Oe===112&&L.charCodeAt(ee-3)===58&&(xe=Oe);case 8:q===111&&(xe=q)}break;case 58:K+A+B===0&&($e=ee);break;case 44:A+le+K+B===0&&(Ae=1,ft+="\r");break;case 34:case 39:A===0&&(K=K===U?0:K===0?U:K);break;case 91:K+A+le===0&&B++;break;case 93:K+A+le===0&&B--;break;case 41:K+A+B===0&&le--;break;case 40:if(K+A+B===0){if(J===0)switch(2*Oe+3*q){case 533:break;default:J=1}le++}break;case 64:A+le+K+B+$e+H===0&&(H=1);break;case 42:case 47:if(!(0<K+B+le))switch(A){case 0:switch(2*U+3*L.charCodeAt(ee+1)){case 235:A=47;break;case 220:Te=ee,A=42}break;case 42:U===47&&Oe===42&&Te+2!==ee&&(L.charCodeAt(Te+2)===33&&(ge+=L.substring(Te,ee+1)),ft="",A=0)}}A===0&&(W+=ft)}q=Oe,Oe=U,ee++}if(Te=ge.length,0<Te){if(Ae=N,0<b&&(Mt=l(2,ge,Ae,_,me,Z,Te,F,x,F),Mt!==void 0&&(ge=Mt).length===0))return Ca+ge+ka;if(ge=Ae.join(",")+"{"+ge+"}",Se*xe!==0){switch(Se!==2||i(ge,2)||(xe=0),xe){case 111:ge=ge.replace(g,":-moz-$1")+ge;break;case 112:ge=ge.replace(m,"::-webkit-input-$1")+ge.replace(m,"::-moz-$1")+ge.replace(m,":-ms-input-$1")+ge}xe=0}}return Ca+ge+ka}function n(_,N,L){var F=N.trim().split(O);N=F;var x=F.length,B=_.length;switch(B){case 0:case 1:var A=0;for(_=B===0?"":_[0]+" ";A<x;++A)N[A]=r(_,N[A],L).trim();break;default:var le=A=0;for(N=[];A<x;++A)for(var K=0;K<B;++K)N[le++]=r(_[K]+" ",F[A],L).trim()}return N}function r(_,N,L){var F=N.charCodeAt(0);switch(33>F&&(F=(N=N.trim()).charCodeAt(0)),F){case 38:return N.replace(f,"$1"+_.trim());case 58:return _.trim()+N.replace(f,"$1"+_.trim());default:if(0<1*L&&0<N.indexOf("\f"))return N.replace(f,(_.charCodeAt(0)===58?"":"$1")+_.trim())}return _+N}function o(_,N,L,F){var x=_+";",B=2*N+3*L+4*F;if(B===944){_=x.indexOf(":",9)+1;var A=x.substring(_,x.length-1).trim();return A=x.substring(0,_).trim()+A+";",Se===1||Se===2&&i(A,1)?"-webkit-"+A+A:A}if(Se===0||Se===2&&!i(x,1))return x;switch(B){case 1015:return x.charCodeAt(10)===97?"-webkit-"+x+x:x;case 951:return x.charCodeAt(3)===116?"-webkit-"+x+x:x;case 963:return x.charCodeAt(5)===110?"-webkit-"+x+x:x;case 1009:if(x.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+x+x;case 978:return"-webkit-"+x+"-moz-"+x+x;case 1019:case 983:return"-webkit-"+x+"-moz-"+x+"-ms-"+x+x;case 883:if(x.charCodeAt(8)===45)return"-webkit-"+x+x;if(0<x.indexOf("image-set(",11))return x.replace(he,"$1-webkit-$2")+x;break;case 932:if(x.charCodeAt(4)===45)switch(x.charCodeAt(5)){case 103:return"-webkit-box-"+x.replace("-grow","")+"-webkit-"+x+"-ms-"+x.replace("grow","positive")+x;case 115:return"-webkit-"+x+"-ms-"+x.replace("shrink","negative")+x;case 98:return"-webkit-"+x+"-ms-"+x.replace("basis","preferred-size")+x}return"-webkit-"+x+"-ms-"+x+x;case 964:return"-webkit-"+x+"-ms-flex-"+x+x;case 1023:if(x.charCodeAt(8)!==99)break;return A=x.substring(x.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+A+"-webkit-"+x+"-ms-flex-pack"+A+x;case 1005:return y.test(x)?x.replace(w,":-webkit-")+x.replace(w,":-moz-")+x:x;case 1e3:switch(A=x.substring(13).trim(),N=A.indexOf("-")+1,A.charCodeAt(0)+A.charCodeAt(N)){case 226:A=x.replace(k,"tb");break;case 232:A=x.replace(k,"tb-rl");break;case 220:A=x.replace(k,"lr");break;default:return x}return"-webkit-"+x+"-ms-"+A+x;case 1017:if(x.indexOf("sticky",9)===-1)break;case 975:switch(N=(x=_).length-10,A=(x.charCodeAt(N)===33?x.substring(0,N):x).substring(_.indexOf(":",7)+1).trim(),B=A.charCodeAt(0)+(A.charCodeAt(7)|0)){case 203:if(111>A.charCodeAt(8))break;case 115:x=x.replace(A,"-webkit-"+A)+";"+x;break;case 207:case 102:x=x.replace(A,"-webkit-"+(102<B?"inline-":"")+"box")+";"+x.replace(A,"-webkit-"+A)+";"+x.replace(A,"-ms-"+A+"box")+";"+x}return x+";";case 938:if(x.charCodeAt(5)===45)switch(x.charCodeAt(6)){case 105:return A=x.replace("-items",""),"-webkit-"+x+"-webkit-box-"+A+"-ms-flex-"+A+x;case 115:return"-webkit-"+x+"-ms-flex-item-"+x.replace(T,"")+x;default:return"-webkit-"+x+"-ms-flex-line-pack"+x.replace("align-content","").replace(T,"")+x}break;case 973:case 989:if(x.charCodeAt(3)!==45||x.charCodeAt(4)===122)break;case 931:case 953:if(M.test(_)===!0)return(A=_.substring(_.indexOf(":")+1)).charCodeAt(0)===115?o(_.replace("stretch","fill-available"),N,L,F).replace(":fill-available",":stretch"):x.replace(A,"-webkit-"+A)+x.replace(A,"-moz-"+A.replace("fill-",""))+x;break;case 962:if(x="-webkit-"+x+(x.charCodeAt(5)===102?"-ms-"+x:"")+x,L+F===211&&x.charCodeAt(13)===105&&0<x.indexOf("transform",10))return x.substring(0,x.indexOf(";",27)+1).replace(S,"$1-webkit-$2")+x}return x}function i(_,N){var L=_.indexOf(N===1?":":"{"),F=_.substring(0,N!==3?L:10);return L=_.substring(L+1,_.length-1),$(N!==2?F:F.replace(V,"$1"),L,N)}function a(_,N){var L=o(N,N.charCodeAt(0),N.charCodeAt(1),N.charCodeAt(2));return L!==N+";"?L.replace(P," or ($1)").substring(4):"("+N+")"}function l(_,N,L,F,x,B,A,le,K,J){for(var U=0,Oe=N,q;U<b;++U)switch(q=Ce[U].call(d,_,Oe,L,F,x,B,A,le,K,J)){case void 0:case!1:case!0:case null:break;default:Oe=q}if(Oe!==N)return Oe}function u(_){switch(_){case void 0:case null:b=Ce.length=0;break;default:if(typeof _=="function")Ce[b++]=_;else if(typeof _=="object")for(var N=0,L=_.length;N<L;++N)u(_[N]);else I=!!_|0}return u}function s(_){return _=_.prefix,_!==void 0&&($=null,_?typeof _!="function"?Se=1:(Se=2,$=_):Se=0),s}function d(_,N){var L=_;if(33>L.charCodeAt(0)&&(L=L.trim()),Q=L,L=[Q],0<b){var F=l(-1,N,L,L,me,Z,0,0,0,0);F!==void 0&&typeof F=="string"&&(N=F)}var x=t(ce,L,N,0,0);return 0<b&&(F=l(-2,x,L,L,me,Z,x.length,0,0,0),F!==void 0&&(x=F)),Q="",xe=0,Z=me=1,x}var p=/^\0+/g,h=/[\0\r\f]/g,w=/: */g,y=/zoo|gra/,S=/([,: ])(transform)/g,O=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,c=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,g=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,E=/\(\s*(.*)\s*\)/g,P=/([\s\S]*?);/g,T=/-self|flex-/g,V=/[^]*?(:[rp][el]a[\w-]+)[^]*/,M=/stretch|:\s*\w+\-(?:conte|avail)/,he=/([^-])(image-set\()/,Z=1,me=1,xe=0,Se=1,ce=[],Ce=[],b=0,$=null,I=0,Q="";return d.use=u,d.set=s,e!==void 0&&s(e),d}var zg={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Fg(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Ug=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Kc=Fg(function(e){return Ug.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),th={exports:{}},re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e=typeof Symbol=="function"&&Symbol.for,ws=_e?Symbol.for("react.element"):60103,xs=_e?Symbol.for("react.portal"):60106,aa=_e?Symbol.for("react.fragment"):60107,la=_e?Symbol.for("react.strict_mode"):60108,ua=_e?Symbol.for("react.profiler"):60114,sa=_e?Symbol.for("react.provider"):60109,ca=_e?Symbol.for("react.context"):60110,Ss=_e?Symbol.for("react.async_mode"):60111,fa=_e?Symbol.for("react.concurrent_mode"):60111,da=_e?Symbol.for("react.forward_ref"):60112,pa=_e?Symbol.for("react.suspense"):60113,Wg=_e?Symbol.for("react.suspense_list"):60120,ha=_e?Symbol.for("react.memo"):60115,ma=_e?Symbol.for("react.lazy"):60116,Vg=_e?Symbol.for("react.block"):60121,Bg=_e?Symbol.for("react.fundamental"):60117,Yg=_e?Symbol.for("react.responder"):60118,Hg=_e?Symbol.for("react.scope"):60119;function rt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ws:switch(e=e.type,e){case Ss:case fa:case aa:case ua:case la:case pa:return e;default:switch(e=e&&e.$$typeof,e){case ca:case da:case ma:case ha:case sa:return e;default:return t}}case xs:return t}}}function nh(e){return rt(e)===fa}re.AsyncMode=Ss;re.ConcurrentMode=fa;re.ContextConsumer=ca;re.ContextProvider=sa;re.Element=ws;re.ForwardRef=da;re.Fragment=aa;re.Lazy=ma;re.Memo=ha;re.Portal=xs;re.Profiler=ua;re.StrictMode=la;re.Suspense=pa;re.isAsyncMode=function(e){return nh(e)||rt(e)===Ss};re.isConcurrentMode=nh;re.isContextConsumer=function(e){return rt(e)===ca};re.isContextProvider=function(e){return rt(e)===sa};re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ws};re.isForwardRef=function(e){return rt(e)===da};re.isFragment=function(e){return rt(e)===aa};re.isLazy=function(e){return rt(e)===ma};re.isMemo=function(e){return rt(e)===ha};re.isPortal=function(e){return rt(e)===xs};re.isProfiler=function(e){return rt(e)===ua};re.isStrictMode=function(e){return rt(e)===la};re.isSuspense=function(e){return rt(e)===pa};re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===aa||e===fa||e===ua||e===la||e===pa||e===Wg||typeof e=="object"&&e!==null&&(e.$$typeof===ma||e.$$typeof===ha||e.$$typeof===sa||e.$$typeof===ca||e.$$typeof===da||e.$$typeof===Bg||e.$$typeof===Yg||e.$$typeof===Hg||e.$$typeof===Vg)};re.typeOf=rt;th.exports=re;var ks=th.exports,Gg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Qg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Kg={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},rh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Cs={};Cs[ks.ForwardRef]=Kg;Cs[ks.Memo]=rh;function Xc(e){return ks.isMemo(e)?rh:Cs[e.$$typeof]||Gg}var Xg=Object.defineProperty,Zg=Object.getOwnPropertyNames,Zc=Object.getOwnPropertySymbols,Jg=Object.getOwnPropertyDescriptor,qg=Object.getPrototypeOf,Jc=Object.prototype;function oh(e,t,n){if(typeof t!="string"){if(Jc){var r=qg(t);r&&r!==Jc&&oh(e,r,n)}var o=Zg(t);Zc&&(o=o.concat(Zc(t)));for(var i=Xc(e),a=Xc(t),l=0;l<o.length;++l){var u=o[l];if(!Qg[u]&&!(n&&n[u])&&!(a&&a[u])&&!(i&&i[u])){var s=Jg(t,u);try{Xg(e,u,s)}catch{}}}}return e}var e0=oh;function At(){return(At=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var qc=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},Zl=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!vs.exports.typeOf(e)},Di=Object.freeze([]),en=Object.freeze({});function Xr(e){return typeof e=="function"}function ef(e){return e.displayName||e.name||"Component"}function Os(e){return e&&typeof e.styledComponentId=="string"}var tr=typeof process!="undefined"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ds=typeof window!="undefined"&&"HTMLElement"in window,t0=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1);function lo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var n0=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&lo(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=i;l<a;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(n+1),s=0,d=r.length;s<d;s++)this.tag.insertRule(u,r[s])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,l=i;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),ei=new Map,Ei=new Map,Nr=1,Mo=function(e){if(ei.has(e))return ei.get(e);for(;Ei.has(Nr);)Nr++;var t=Nr++;return ei.set(e,t),Ei.set(t,e),t},r0=function(e){return Ei.get(e)},o0=function(e,t){t>=Nr&&(Nr=t+1),ei.set(e,t),Ei.set(t,e)},i0="style["+tr+'][data-styled-version="5.3.5"]',a0=new RegExp("^"+tr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),l0=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},u0=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var l=a.match(a0);if(l){var u=0|parseInt(l[1],10),s=l[2];u!==0&&(o0(s,u),l0(e,s,l[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(a)}}},s0=function(){return typeof window!="undefined"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},ih=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){for(var u=l.childNodes,s=u.length;s>=0;s--){var d=u[s];if(d&&d.nodeType===1&&d.hasAttribute(tr))return d}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(tr,"active"),r.setAttribute("data-styled-version","5.3.5");var a=s0();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},c0=function(){function e(n){var r=this.element=ih(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var u=i[a];if(u.ownerNode===o)return u}lo(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),f0=function(){function e(n){var r=this.element=ih(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),d0=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),tf=Ds,p0={isServer:!Ds,useCSSOMInjection:!t0},ah=function(){function e(n,r,o){n===void 0&&(n=en),r===void 0&&(r={}),this.options=At({},p0,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&Ds&&tf&&(tf=!1,function(i){for(var a=document.querySelectorAll(i0),l=0,u=a.length;l<u;l++){var s=a[l];s&&s.getAttribute(tr)!=="active"&&(u0(i,s),s.parentNode&&s.parentNode.removeChild(s))}}(this))}e.registerId=function(n){return Mo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(At({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new d0(a):i?new c0(a):new f0(a),new n0(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Mo(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Mo(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Mo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var l=r0(a);if(l!==void 0){var u=n.names.get(l),s=r.getGroup(a);if(u&&s&&u.size){var d=tr+".g"+a+'[id="'+l+'"]',p="";u!==void 0&&u.forEach(function(h){h.length>0&&(p+=h+",")}),i+=""+s+d+'{content:"'+p+`"}/*!sc*/
`}}}return i}(this)},e}(),h0=/(a)(d)/gi,nf=function(e){return String.fromCharCode(e+(e>25?39:97))};function Jl(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=nf(t%52)+n;return(nf(t%52)+n).replace(h0,"$1-$2")}var Un=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},lh=function(e){return Un(5381,e)};function m0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Xr(n)&&!Os(n))return!1}return!0}var v0=lh("5.3.5"),g0=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&m0(t),this.componentId=n,this.baseHash=Un(v0,n),this.baseStyle=r,ah.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=nr(this.rules,t,n,r).join(""),l=Jl(Un(this.baseHash,a)>>>0);if(!n.hasNameForId(o,l)){var u=r(a,"."+l,void 0,o);n.insertRules(o,l,u)}i.push(l),this.staticRulesId=l}else{for(var s=this.rules.length,d=Un(this.baseHash,r.hash),p="",h=0;h<s;h++){var w=this.rules[h];if(typeof w=="string")p+=w;else if(w){var y=nr(w,t,n,r),S=Array.isArray(y)?y.join(""):y;d=Un(d,S+h),p+=S}}if(p){var O=Jl(d>>>0);if(!n.hasNameForId(o,O)){var f=r(p,"."+O,void 0,o);n.insertRules(o,O,f)}i.push(O)}}return i.join(" ")},e}(),y0=/^\s*\/\/.*$/gm,w0=[":","[",".","#"];function x0(e){var t,n,r,o,i=e===void 0?en:e,a=i.options,l=a===void 0?en:a,u=i.plugins,s=u===void 0?Di:u,d=new Mg(l),p=[],h=function(S){function O(f){if(f)try{S(f+"}")}catch{}}return function(f,c,m,g,k,E,P,T,V,M){switch(f){case 1:if(V===0&&c.charCodeAt(0)===64)return S(c+";"),"";break;case 2:if(T===0)return c+"/*|*/";break;case 3:switch(T){case 102:case 112:return S(m[0]+c),"";default:return c+(M===0?"/*|*/":"")}case-2:c.split("/*|*/}").forEach(O)}}}(function(S){p.push(S)}),w=function(S,O,f){return O===0&&w0.indexOf(f[n.length])!==-1||f.match(o)?S:"."+t};function y(S,O,f,c){c===void 0&&(c="&");var m=S.replace(y0,""),g=O&&f?f+" "+O+" { "+m+" }":m;return t=c,n=O,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),d(f||!O?"":O,g)}return d.use([].concat(s,[function(S,O,f){S===2&&f.length&&f[0].lastIndexOf(n)>0&&(f[0]=f[0].replace(r,w))},h,function(S){if(S===-2){var O=p;return p=[],O}}])),y.hash=s.length?s.reduce(function(S,O){return O.name||lo(15),Un(S,O.name)},5381).toString():"",y}var uh=z.createContext();uh.Consumer;var sh=z.createContext(),S0=(sh.Consumer,new ah),ql=x0();function k0(){return R.exports.useContext(uh)||S0}function C0(){return R.exports.useContext(sh)||ql}var O0=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=ql);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return lo(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=ql),this.name+t.hash},e}(),D0=/([A-Z])/,E0=/([A-Z])/g,b0=/^ms-/,P0=function(e){return"-"+e.toLowerCase()};function rf(e){return D0.test(e)?e.replace(E0,P0).replace(b0,"-ms-"):e}var of=function(e){return e==null||e===!1||e===""};function nr(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,l=e.length;a<l;a+=1)(o=nr(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(of(e))return"";if(Os(e))return"."+e.styledComponentId;if(Xr(e)){if(typeof(s=e)!="function"||s.prototype&&s.prototype.isReactComponent||!t)return e;var u=e(t);return nr(u,t,n,r)}var s;return e instanceof O0?n?(e.inject(n,r),e.getName(r)):e:Zl(e)?function d(p,h){var w,y,S=[];for(var O in p)p.hasOwnProperty(O)&&!of(p[O])&&(Array.isArray(p[O])&&p[O].isCss||Xr(p[O])?S.push(rf(O)+":",p[O],";"):Zl(p[O])?S.push.apply(S,d(p[O],O)):S.push(rf(O)+": "+(w=O,(y=p[O])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||w in zg?String(y).trim():y+"px")+";"));return h?[h+" {"].concat(S,["}"]):S}(e):e.toString()}var af=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function _0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Xr(e)||Zl(e)?af(nr(qc(Di,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:af(nr(qc(e,n)))}var A0=function(e,t,n){return n===void 0&&(n=en),e.theme!==n.theme&&e.theme||t||n.theme},T0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,N0=/(^-|-$)/g;function Xa(e){return e.replace(T0,"-").replace(N0,"")}var L0=function(e){return Jl(lh(e)>>>0)};function zo(e){return typeof e=="string"&&!0}var eu=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},j0=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function R0(e,t,n){var r=e[n];eu(t)&&eu(r)?ch(r,t):e[n]=t}function ch(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(eu(a))for(var l in a)j0(l)&&R0(e,a[l],l)}return e}var fh=z.createContext();fh.Consumer;var Za={};function dh(e,t,n){var r=Os(e),o=!zo(e),i=t.attrs,a=i===void 0?Di:i,l=t.componentId,u=l===void 0?function(c,m){var g=typeof c!="string"?"sc":Xa(c);Za[g]=(Za[g]||0)+1;var k=g+"-"+L0("5.3.5"+g+Za[g]);return m?m+"-"+k:k}(t.displayName,t.parentComponentId):l,s=t.displayName,d=s===void 0?function(c){return zo(c)?"styled."+c:"Styled("+ef(c)+")"}(e):s,p=t.displayName&&t.componentId?Xa(t.displayName)+"-"+t.componentId:t.componentId||u,h=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,w=t.shouldForwardProp;r&&e.shouldForwardProp&&(w=t.shouldForwardProp?function(c,m,g){return e.shouldForwardProp(c,m,g)&&t.shouldForwardProp(c,m,g)}:e.shouldForwardProp);var y,S=new g0(n,p,r?e.componentStyle:void 0),O=S.isStatic&&a.length===0,f=function(c,m){return function(g,k,E,P){var T=g.attrs,V=g.componentStyle,M=g.defaultProps,he=g.foldedComponentIds,Z=g.shouldForwardProp,me=g.styledComponentId,xe=g.target,Se=function(F,x,B){F===void 0&&(F=en);var A=At({},x,{theme:F}),le={};return B.forEach(function(K){var J,U,Oe,q=K;for(J in Xr(q)&&(q=q(A)),q)A[J]=le[J]=J==="className"?(U=le[J],Oe=q[J],U&&Oe?U+" "+Oe:U||Oe):q[J]}),[A,le]}(A0(k,R.exports.useContext(fh),M)||en,k,T),ce=Se[0],Ce=Se[1],b=function(F,x,B,A){var le=k0(),K=C0(),J=x?F.generateAndInjectStyles(en,le,K):F.generateAndInjectStyles(B,le,K);return J}(V,P,ce),$=E,I=Ce.$as||k.$as||Ce.as||k.as||xe,Q=zo(I),_=Ce!==k?At({},k,{},Ce):k,N={};for(var L in _)L[0]!=="$"&&L!=="as"&&(L==="forwardedAs"?N.as=_[L]:(Z?Z(L,Kc,I):!Q||Kc(L))&&(N[L]=_[L]));return k.style&&Ce.style!==k.style&&(N.style=At({},k.style,{},Ce.style)),N.className=Array.prototype.concat(he,me,b!==me?b:null,k.className,Ce.className).filter(Boolean).join(" "),N.ref=$,R.exports.createElement(I,N)}(y,c,m,O)};return f.displayName=d,(y=z.forwardRef(f)).attrs=h,y.componentStyle=S,y.displayName=d,y.shouldForwardProp=w,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Di,y.styledComponentId=p,y.target=r?e.target:e,y.withComponent=function(c){var m=t.componentId,g=function(E,P){if(E==null)return{};var T,V,M={},he=Object.keys(E);for(V=0;V<he.length;V++)T=he[V],P.indexOf(T)>=0||(M[T]=E[T]);return M}(t,["componentId"]),k=m&&m+"-"+(zo(c)?c:Xa(ef(c)));return dh(c,At({},g,{attrs:h,componentId:k}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(c){this._foldedDefaultProps=r?ch({},e.defaultProps,c):c}}),y.toString=function(){return"."+y.styledComponentId},o&&e0(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var tu=function(e){return function t(n,r,o){if(o===void 0&&(o=en),!vs.exports.isValidElementType(r))return lo(1,String(r));var i=function(){return n(r,o,_0.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,At({},o,{},a))},i.attrs=function(a){return t(n,r,At({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(dh,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){tu[e]=tu(e)});var ln=tu;const $0=ln.div`
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

  animation: ${e=>e.isSelectingColor?"colorPickerSlideDown":"colorPickerSlideUp"} 0.25s ease;

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

      box-shadow: inset 1px 1px 1px rgba(255, 255, 255, 0.25), 1px 1px 1px rgba(0, 0, 0, 0.25);

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
      opacity: 1;
      backdrop-filter: blur(20px);
      transform: translateY(0px);
    }
  }

  @keyframes colorPickerSlideUp {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
      opacity: 0;
      transform: translateY(-10px);
    }
  }
`,I0=["0564A4","0C8FF1","0ABAFA","0BB8AA","00B873","DDBC10","FCF7BD","FF705D","F8003C","BE0A19","B90F8B","F56ED8","7E45F7","4A40EE","94959F","7B7168"];function M0({updateColor:e,isSelectingColor:t,setIsSelectingColor:n}){const[r,o]=R.exports.useState("008FFD"),[i,a]=R.exports.useState(),l=()=>{if(!t){a({animation:"colorPickerSlideDown .25s ease forwards"});return}u()},u=()=>{a({animation:"colorPickerSlideUp .25s ease forwards"}),setTimeout(()=>{n(!1)},250)},s=R.exports.useRef(null);Rg(s,l);function d(p,h){h==null||h.preventDefault(),o(p),e(p),l()}return D($0,{theme:bn,isSelectingColor:t,ref:s,style:{...i},children:t&&X(Pg,{children:[D("h4",{children:"Colors"}),D("div",{className:"colors",children:D("ul",{children:I0.map(p=>D("li",{onClick:()=>d(p),children:D("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:D("rect",{x:"1.25",y:"1.25",width:"12.5",height:"12.5",rx:"4.75",stroke:`#${p}`,fill:`#${p}`,strokeWidth:"2.5"})})},p))})}),X("div",{id:"custom-color-wrapper",children:[D("h4",{children:"Custom color"}),X("div",{id:"custom-color",children:[D("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:D("rect",{x:"1.25",y:"1.25",width:"12.5",height:"12.5",rx:"4.75",stroke:r?`#${r}`:"#008FFD",fill:r?`#${r}`:"#008FFD",strokeWidth:"2.5"})}),D("form",{noValidate:!0,onSubmit:p=>d(r,p),children:D("input",{type:"text",placeholder:"008FFD",onChange:p=>o(p.target.value)})})]})]})]})})}var ph="/dona-clone/assets/removeIcon.63e204af.svg";const z0=ln.a`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 70px;

  align-items: center;
  justify-content: space-between;

  padding-left: 20px;
  padding-right: 20px;

  border-radius: 20px;

  cursor: pointer;

  background-color: ${e=>e.activeCategory?e.theme.bg:""};

  transition: 0.25s ease;
  transition-property: background-color transform opacity;

  animation: ${e=>e.beingRemoved?"categorySlideUp":"categorySlideDown"} 0.25s ease;

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

  @keyframes categorySlideUp {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
      opacity: 0;
      transform: translateY(-10px);
    }
  }
`;function F0({category:e}){const{removeCategory:t,updateCategoryColor:n}=R.exports.useContext(ao),{path:r,changePath:o}=R.exports.useContext(Qi),{tasks:i,removeTask:a,updateTaskColor:l}=R.exports.useContext(Ki),[u,s]=R.exports.useState(""),[d,p]=R.exports.useState(""),[h,w]=R.exports.useState(!1);function y(g,k){k.stopPropagation(),g!=="/"&&(S(g),o("/"))}const S=g=>{s(g),setTimeout(()=>{t(g),O(g)},250)},O=g=>{i.forEach(k=>k.category.slug===g?a(k.id):"")};function f(g,k){k.stopPropagation(),w(!h),p(g)}const c=g=>{w(!1),n(d,g),l(d,g)},m=i.filter(g=>g.category.slug===e.slug).length;return X(z0,{theme:bn,beingRemoved:u===e.slug,activeCategory:e.slug===r,onClick:()=>o(e.slug),children:[X("div",{className:"left",children:[D("span",{onClick:g=>f(e.slug,g),children:D("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:D("rect",{x:"1.25",y:"1.25",width:"12.5",height:"12.5",rx:"4.75",stroke:`#${e.color}`,strokeWidth:"2.5"})})}),D("h3",{children:e.title}),h&&D(M0,{updateColor:c,isSelectingColor:h,setIsSelectingColor:w})]}),X("span",{className:"task-amout",children:[D("h4",{children:m}),e.slug!=="/"&&D("button",{className:"remove-category",onClick:g=>y(e.slug,g),children:D("img",{src:ph,alt:"Remove Category",width:12})})]})]})}function hh(e){const t=R.exports.useCallback(n=>{const r=n.key.toLowerCase(),o=n.ctrlKey;e.forEach(i=>{o===i.ctrlKey&&r===i.key.toLowerCase()&&(n.preventDefault(),i.handler())})},[]);R.exports.useEffect(()=>(document.addEventListener("keydown",n=>t(n)),()=>{document.removeEventListener("keydown",n=>t(n))}),[t])}var U0="/dona-clone/assets/addIcon.408931b1.svg";const W0=ln.aside`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 30vw;
  height: calc(100vh - 80px);

  align-items: center;

  gap: 10px;
  padding: 40px;

  overflow: scroll;

  border-radius: 20px;

  background-color: ${e=>e.theme.fg};

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

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

    gap: 0px;
    padding: 20px;

    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);

    border-radius: 15px;

    nav {
      display: flex;
      flex-direction: row;

      min-width: 70px;
      width: fit-content;

      overflow: scroll;

      ::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
    }

    form {
      width: 100%;

      padding: 10px;
    }
  }

  @media (max-width: 768px) {
    padding: 0px;

    nav {
      padding: 10px;
    }

    form {
      gap: 10px;
    }
  }
`;function V0(){const{categories:e,addCategory:t}=R.exports.useContext(ao),{changePath:n}=R.exports.useContext(Qi),r=R.exports.useRef(null),o=R.exports.useRef(null);function i(l){var p,h;l.preventDefault();const u=(p=o.current)==null?void 0:p.value;if(!u||e.map(w=>w.title).includes(u))return;const s="/"+u.toLowerCase().replace(" ","-");t({title:u,slug:s,color:"6D6D6D"}),(h=r.current)==null||h.reset(),n(s)}return hh([{ctrlKey:!0,key:"D",handler:()=>{var l;return(l=o.current)==null?void 0:l.focus()}},{ctrlKey:!1,key:"Escape",handler:()=>{var l;return(l=o.current)==null?void 0:l.blur()}}]),X(W0,{theme:bn,children:[D("nav",{children:e.map(l=>D(F0,{category:{title:l.title,slug:l.slug,color:l.color}},l.slug))}),X("form",{onSubmit:i,noValidate:!0,ref:r,children:[D("span",{children:D("img",{src:U0,alt:"Choose Icon",width:15})}),D("input",{type:"text",placeholder:"Create new category...",ref:o})]})]})}var Fo,B0=new Uint8Array(16);function Y0(){if(!Fo&&(Fo=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Fo))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Fo(B0)}var H0=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function G0(e){return typeof e=="string"&&H0.test(e)}var Ne=[];for(var Ja=0;Ja<256;++Ja)Ne.push((Ja+256).toString(16).substr(1));function Q0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(Ne[e[t+0]]+Ne[e[t+1]]+Ne[e[t+2]]+Ne[e[t+3]]+"-"+Ne[e[t+4]]+Ne[e[t+5]]+"-"+Ne[e[t+6]]+Ne[e[t+7]]+"-"+Ne[e[t+8]]+Ne[e[t+9]]+"-"+Ne[e[t+10]]+Ne[e[t+11]]+Ne[e[t+12]]+Ne[e[t+13]]+Ne[e[t+14]]+Ne[e[t+15]]).toLowerCase();if(!G0(n))throw TypeError("Stringified UUID is invalid");return n}function K0(e,t,n){e=e||{};var r=e.random||(e.rng||Y0)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return Q0(r)}var mh={exports:{}},X0="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Z0=X0,J0=Z0;function vh(){}function gh(){}gh.resetWarningCache=vh;var q0=function(){function e(r,o,i,a,l,u){if(u!==J0){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:gh,resetWarningCache:vh};return n.PropTypes=n,n};mh.exports=q0();var v=mh.exports;function Es(){return Array.prototype.slice.call(arguments).reduce(function(e,t){return e.concat(t)},[]).filter(function(e){return typeof e=="string"}).join(" ")}var ey="Expected a function",lf=1/0,ty=17976931348623157e292,uf=0/0,ny="[object Symbol]",ry=/^\s+|\s+$/g,oy=/^[-+]0x[0-9a-f]+$/i,iy=/^0b[01]+$/i,ay=/^0o[0-7]+$/i,ly=parseInt,uy=Object.prototype,sy=uy.toString;function cy(e,t){var n;if(typeof t!="function")throw new TypeError(ey);return e=my(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=void 0),n}}function fy(e){return cy(2,e)}function sf(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function dy(e){return!!e&&typeof e=="object"}function py(e){return typeof e=="symbol"||dy(e)&&sy.call(e)==ny}function hy(e){if(!e)return e===0?e:0;if(e=vy(e),e===lf||e===-lf){var t=e<0?-1:1;return t*ty}return e===e?e:0}function my(e){var t=hy(e),n=t%1;return t===t?n?t-n:t:0}function vy(e){if(typeof e=="number")return e;if(py(e))return uf;if(sf(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=sf(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(ry,"");var n=iy.test(e);return n||ay.test(e)?ly(e.slice(2),n?2:8):oy.test(e)?uf:+e}var yh=fy;function gy(e){return e.filter(function(t,n,r){return r.indexOf(t)===n})}function yy(e){return e.map(function(t){if(!t||t.indexOf("-")===-1||t.toLowerCase()!==t)return t;var n=t.split("-");return"".concat(n[0],"-").concat(n[1].toUpperCase())})}function wy(){var e=[];return typeof window!="undefined"&&(window.navigator.languages&&(e=e.concat(window.navigator.languages)),window.navigator.language&&e.push(window.navigator.language),window.navigator.userLanguage&&e.push(window.navigator.userLanguage),window.navigator.browserLanguage&&e.push(window.navigator.browserLanguage),window.navigator.systemLanguage&&e.push(window.navigator.systemLanguage)),e.push("en-US"),yy(gy(e))}var xy=yh(wy);function Sy(){return xy()[0]}var wh=yh(Sy);function It(e,t,n){return function(o){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:n,a=e(o)+i;return t(a)}}function uo(e){return function(n){return new Date(e(n).getTime()-1)}}function so(e){return function(n){return e.map(function(r){return r(n)})}}function se(e){if(e instanceof Date)return e.getFullYear();if(typeof e=="number")return e;var t=parseInt(e,10);if(typeof e=="string"&&!isNaN(t))return t;throw new Error("Failed to get year from date: ".concat(e,"."))}function un(e){if(e instanceof Date)return e.getMonth();throw new Error("Failed to get month from date: ".concat(e,"."))}function va(e){if(e instanceof Date)return e.getDate();throw new Error("Failed to get year from date: ".concat(e,"."))}function co(e){var t=se(e),n=t+(-t+1)%100,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}var ky=It(se,co,-100),xh=It(se,co,100),bs=uo(xh),Cy=It(se,bs,-100),Sh=so([co,bs]);function Dn(e){var t=se(e),n=t+(-t+1)%10,r=new Date;return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}var kh=It(se,Dn,-10),Ps=It(se,Dn,10),ga=uo(Ps),Ch=It(se,ga,-10),Oh=so([Dn,ga]);function fo(e){var t=se(e),n=new Date;return n.setFullYear(t,0,1),n.setHours(0,0,0,0),n}var Dh=It(se,fo,-1),_s=It(se,fo,1),ya=uo(_s),Eh=It(se,ya,-1),Oy=so([fo,ya]);function As(e,t){return function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,i=se(r),a=un(r)+o,l=new Date;return l.setFullYear(i,a,1),l.setHours(0,0,0,0),e(l)}}function lr(e){var t=se(e),n=un(e),r=new Date;return r.setFullYear(t,n,1),r.setHours(0,0,0,0),r}var bh=As(lr,-1),Ts=As(lr,1),po=uo(Ts),Ph=As(po,-1),Dy=so([lr,po]);function Ey(e,t){return function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,i=se(r),a=un(r),l=va(r)+o,u=new Date;return u.setFullYear(i,a,l),u.setHours(0,0,0,0),e(u)}}function wa(e){var t=se(e),n=un(e),r=va(e),o=new Date;return o.setFullYear(t,n,r),o.setHours(0,0,0,0),o}var by=Ey(wa,1),Ns=uo(by),Py=so([wa,Ns]);function _h(e){return va(po(e))}var yr;function _y(e){return Ly(e)||Ny(e)||Ty(e)||Ay()}function Ay(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ty(e,t){if(!!e){if(typeof e=="string")return nu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nu(e,t)}}function Ny(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ly(e){if(Array.isArray(e))return nu(e)}function nu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function qa(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var we={ARABIC:"Arabic",HEBREW:"Hebrew",ISO_8601:"ISO 8601",US:"US"},cf=(yr={},qa(yr,we.US,["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"]),qa(yr,we.ARABIC,["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"]),qa(yr,we.HEBREW,["he","he-IL"]),yr),Ls=_y(Array(7)).map(function(e,t){return t}),el=new Map;function jy(e){return function(t,n){var r=t||wh();el.has(r)||el.set(r,new Map);var o=el.get(r);return o.has(e)||o.set(e,new Intl.DateTimeFormat(r,e).format),o.get(e)(n)}}function Ry(e){var t=new Date(e);return new Date(t.setHours(12))}function En(e){return function(t,n){return jy(e)(t,Ry(n))}}var $y={day:"numeric"},Iy={day:"numeric",month:"long",year:"numeric"},My={month:"long"},zy={month:"long",year:"numeric"},Fy={weekday:"short"},Uy={weekday:"long"},Wy={year:"numeric"},Vy=En($y),By=En(Iy),Yy=En(My),Ah=En(zy),Hy=En(Fy),Gy=En(Uy),xa=En(Wy),Qy=Ls[0],Ky=Ls[5],ff=Ls[6];function Zr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:we.ISO_8601,n=e.getDay();switch(t){case we.ISO_8601:return(n+6)%7;case we.ARABIC:return(n+1)%7;case we.HEBREW:case we.US:return n;default:throw new Error("Unsupported calendar type.")}}function Xy(e){var t=co(e);return se(t)}function Zy(e){var t=Dn(e);return se(t)}function ru(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:we.ISO_8601,n=se(e),r=un(e),o=e.getDate()-Zr(e,t);return new Date(n,r,o)}function Jy(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:we.ISO_8601,n=t===we.US?we.US:we.ISO_8601,r=ru(e,t),o=se(e)+1,i,a;do i=new Date(o,0,n===we.ISO_8601?4:1),a=ru(i,t),o-=1;while(e<a);return Math.round((r-a)/(864e5*7))+1}function vn(e,t){switch(e){case"century":return co(t);case"decade":return Dn(t);case"year":return fo(t);case"month":return lr(t);case"day":return wa(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function qy(e,t){switch(e){case"century":return ky(t);case"decade":return kh(t);case"year":return Dh(t);case"month":return bh(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Th(e,t){switch(e){case"century":return xh(t);case"decade":return Ps(t);case"year":return _s(t);case"month":return Ts(t);default:throw new Error("Invalid rangeType: ".concat(e))}}var e1=function(t,n){switch(t){case"decade":return kh(n,-100);case"year":return Dh(n,-10);case"month":return bh(n,-12);default:throw new Error("Invalid rangeType: ".concat(t))}},t1=function(t,n){switch(t){case"decade":return Ps(n,100);case"year":return _s(n,10);case"month":return Ts(n,12);default:throw new Error("Invalid rangeType: ".concat(t))}};function Nh(e,t){switch(e){case"century":return bs(t);case"decade":return ga(t);case"year":return ya(t);case"month":return po(t);case"day":return Ns(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function n1(e,t){switch(e){case"century":return Cy(t);case"decade":return Ch(t);case"year":return Eh(t);case"month":return Ph(t);default:throw new Error("Invalid rangeType: ".concat(e))}}var r1=function(t,n){switch(t){case"decade":return Ch(n,-100);case"year":return Eh(n,-10);case"month":return Ph(n,-12);default:throw new Error("Invalid rangeType: ".concat(t))}};function df(e,t){switch(e){case"century":return Sh(t);case"decade":return Oh(t);case"year":return Oy(t);case"month":return Dy(t);case"day":return Py(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function o1(e,t,n){var r=[t,n].sort(function(o,i){return o-i});return[vn(e,r[0]),Nh(e,r[1])]}function Lh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xa,n=arguments.length>2?arguments[2]:void 0;return n.map(function(r){return t(e,r)}).join(" \u2013 ")}function i1(e,t,n){return Lh(e,t,Sh(n))}function jh(e,t,n){return Lh(e,t,Oh(n))}function a1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:we.ISO_8601,n=e.getDay();switch(t){case we.ARABIC:case we.HEBREW:return n===Ky||n===ff;case we.ISO_8601:case we.US:return n===ff||n===Qy;default:throw new Error("Unsupported calendar type.")}}function rr(e){return rr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rr(e)}var l1=Object.values(we),Rh=["century","decade","year","month"],ho=v.oneOf(l1),bi=v.oneOfType([v.string,v.arrayOf(v.string)]),js=function(t,n,r){var o=t[n];if(!o)return null;if(!(o instanceof Date))return new Error("Invalid prop `".concat(n,"` of type `").concat(rr(o),"` supplied to `").concat(r,"`, expected instance of `Date`."));var i=t.maxDate;return i&&o>i?new Error("Invalid prop `".concat(n,"` of type `").concat(rr(o),"` supplied to `").concat(r,"`, minDate cannot be larger than maxDate.")):null},Rs=function(t,n,r){var o=t[n];if(!o)return null;if(!(o instanceof Date))return new Error("Invalid prop `".concat(n,"` of type `").concat(rr(o),"` supplied to `").concat(r,"`, expected instance of `Date`."));var i=t.minDate;return i&&o<i?new Error("Invalid prop `".concat(n,"` of type `").concat(rr(o),"` supplied to `").concat(r,"`, maxDate cannot be smaller than minDate.")):null},u1=v.oneOfType([v.func,v.shape({current:v.any})]),$h=v.oneOfType([v.instanceOf(Date),v.arrayOf(v.instanceOf(Date))]),s1=v.arrayOf(v.oneOf(Rh)),Jr=function(t,n,r){var o=t[n],i=t.views,a=i||Rh;return o!==void 0&&a.indexOf(o)===-1?new Error("Invalid prop `".concat(n,"` of value `").concat(o,"` supplied to `").concat(r,"`, expected one of [").concat(a.map(function(l){return'"'.concat(l,'"')}).join(", "),"].")):null};Jr.isRequired=function(e,t,n){var r=e[t];return r?Jr(e,t,n):new Error("The prop `".concat(t,"` is marked as required in `").concat(n,"`, but its value is `").concat(r,"`."))};var mo={activeStartDate:v.instanceOf(Date).isRequired,hover:v.instanceOf(Date),locale:v.string,maxDate:Rs,minDate:js,onClick:v.func,onMouseOver:v.func,tileClassName:v.oneOfType([v.func,bi]),tileContent:v.oneOfType([v.func,v.node]),value:$h,valueType:v.string},vo={activeStartDate:v.instanceOf(Date).isRequired,classes:v.arrayOf(v.string).isRequired,date:v.instanceOf(Date).isRequired,locale:v.string,maxDate:Rs,minDate:js,onClick:v.func,onMouseOver:v.func,style:v.objectOf(v.oneOfType([v.string,v.number])),tileClassName:v.oneOfType([v.func,bi]),tileContent:v.oneOfType([v.func,v.node]),tileDisabled:v.func},xt="react-calendar__navigation";function Ih(e){var t=e.activeStartDate,n=e.drillUp,r=e.formatMonthYear,o=r===void 0?Ah:r,i=e.formatYear,a=i===void 0?xa:i,l=e.locale,u=e.maxDate,s=e.minDate,d=e.navigationAriaLabel,p=d===void 0?"":d,h=e.navigationAriaLive,w=e.navigationLabel,y=e.next2AriaLabel,S=y===void 0?"":y,O=e.next2Label,f=O===void 0?"\xBB":O,c=e.nextAriaLabel,m=c===void 0?"":c,g=e.nextLabel,k=g===void 0?"\u203A":g,E=e.prev2AriaLabel,P=E===void 0?"":E,T=e.prev2Label,V=T===void 0?"\xAB":T,M=e.prevAriaLabel,he=M===void 0?"":M,Z=e.prevLabel,me=Z===void 0?"\u2039":Z,xe=e.setActiveStartDate,Se=e.showDoubleView,ce=e.view,Ce=e.views,b=Ce.indexOf(ce)>0,$=ce!=="century",I=qy(ce,t),Q=$&&e1(ce,t),_=Th(ce,t),N=$&&t1(ce,t),L=function(){if(I.getFullYear()<0)return!0;var q=n1(ce,t);return s&&s>=q}(),F=$&&function(){if(Q.getFullYear()<0)return!0;var q=r1(ce,t);return s&&s>=q}(),x=u&&u<_,B=$&&u&&u<N;function A(){xe(I,"prev")}function le(){xe(Q,"prev2")}function K(){xe(_,"next")}function J(){xe(N,"next2")}function U(q){var H=function(){switch(ce){case"century":return i1(l,a,q);case"decade":return jh(l,a,q);case"year":return a(l,q);case"month":return o(l,q);default:throw new Error("Invalid view: ".concat(ce,"."))}}();return w?w({date:q,label:H,locale:l||wh(),view:ce}):H}function Oe(){var q="".concat(xt,"__label");return z.createElement("button",{"aria-label":p,"aria-live":h,className:q,disabled:!b,onClick:n,style:{flexGrow:1},type:"button"},z.createElement("span",{className:"".concat(q,"__labelText ").concat(q,"__labelText--from")},U(t)),Se&&z.createElement(z.Fragment,null,z.createElement("span",{className:"".concat(q,"__divider")}," \u2013 "),z.createElement("span",{className:"".concat(q,"__labelText ").concat(q,"__labelText--to")},U(_))))}return z.createElement("div",{className:xt},V!==null&&$&&z.createElement("button",{"aria-label":P,className:"".concat(xt,"__arrow ").concat(xt,"__prev2-button"),disabled:F,onClick:le,type:"button"},V),me!==null&&z.createElement("button",{"aria-label":he,className:"".concat(xt,"__arrow ").concat(xt,"__prev-button"),disabled:L,onClick:A,type:"button"},me),Oe(),k!==null&&z.createElement("button",{"aria-label":m,className:"".concat(xt,"__arrow ").concat(xt,"__next-button"),disabled:x,onClick:K,type:"button"},k),f!==null&&$&&z.createElement("button",{"aria-label":S,className:"".concat(xt,"__arrow ").concat(xt,"__next2-button"),disabled:B,onClick:J,type:"button"},f))}Ih.propTypes={activeStartDate:v.instanceOf(Date).isRequired,drillUp:v.func.isRequired,formatMonthYear:v.func,formatYear:v.func,locale:v.string,maxDate:v.instanceOf(Date),minDate:v.instanceOf(Date),navigationAriaLabel:v.string,navigationAriaLive:v.string,navigationLabel:v.func,next2AriaLabel:v.string,next2Label:v.node,nextAriaLabel:v.string,nextLabel:v.node,prev2AriaLabel:v.string,prev2Label:v.node,prevAriaLabel:v.string,prevLabel:v.node,setActiveStartDate:v.func.isRequired,showDoubleView:v.bool,view:Jr.isRequired,views:s1.isRequired};var c1=["children","className","direction","count","offset","style","wrap"];function ou(){return ou=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ou.apply(this,arguments)}function pf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function tl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pf(Object(n),!0).forEach(function(r){f1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function f1(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d1(e,t){if(e==null)return{};var n=p1(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function p1(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function hf(e){return"".concat(e,"%")}function Sa(e){var t=e.children,n=e.className,r=e.direction,o=e.count,i=e.offset,a=e.style,l=e.wrap,u=d1(e,c1);return z.createElement("div",ou({className:n,style:tl({display:"flex",flexDirection:r,flexWrap:l?"wrap":"no-wrap"},a)},u),z.Children.map(t,function(s,d){return z.cloneElement(s,tl(tl({},s.props),{},{style:{flexBasis:hf(100/o),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:i&&d===0?hf(100*i/o):null}}))}))}Sa.propTypes={children:v.node,className:v.string,count:v.number.isRequired,direction:v.string,offset:v.number,style:v.objectOf(v.oneOfType([v.string,v.number])),wrap:v.bool};function mf(e){return g1(e)||v1(e)||m1(e)||h1()}function h1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m1(e,t){if(!!e){if(typeof e=="string")return iu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return iu(e,t)}}function v1(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function g1(e){if(Array.isArray(e))return iu(e)}function iu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y1(e,t,n){return t&&t>e?t:n&&n<e?n:e}function qr(e,t){return t[0]<=e&&t[1]>=e}function w1(e,t){return e[0]<=t[0]&&e[1]>=t[1]}function Mh(e,t){return qr(e[0],t)||qr(e[1],t)}function vf(e,t,n){var r=Mh(t,e),o=[];if(r){o.push(n);var i=qr(e[0],t),a=qr(e[1],t);i&&o.push("".concat(n,"Start")),a&&o.push("".concat(n,"End")),i&&a&&o.push("".concat(n,"BothEnds"))}return o}function x1(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.value,n=e.valueType,r=e.date,o=e.dateType,i=e.hover,a="react-calendar__tile",l=[a];if(!r)return l;if(!Array.isArray(r)&&!o)throw new Error("getTileClasses(): Unable to get tile activity classes because one or more required arguments were not passed.");var u=new Date,s=Array.isArray(r)?r:df(o,r);if(qr(u,s)&&l.push("".concat(a,"--now")),!t)return l;if(!Array.isArray(t)&&!n)throw new Error("getTileClasses(): Unable to get tile activity classes because one or more required arguments were not passed.");var d=Array.isArray(t)?t:df(n,t);w1(d,s)?l.push("".concat(a,"--active")):Mh(d,s)&&l.push("".concat(a,"--hasActive"));var p=vf(d,s,"".concat(a,"--range"));l.push.apply(l,mf(p));var h=[].concat(t);if(i&&h.length===1){var w=i>d[0]?[d[0],i]:[i,d[0]],y=vf(w,s,"".concat(a,"--hover"));l.push.apply(l,mf(y))}return l}var S1=["className","count","dateTransform","dateType","end","hover","offset","start","step","tile","value","valueType"];function gf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function yf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gf(Object(n),!0).forEach(function(r){k1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function k1(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function au(){return au=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},au.apply(this,arguments)}function C1(e,t){if(e==null)return{};var n=O1(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function O1(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function go(e){for(var t=e.className,n=e.count,r=n===void 0?3:n,o=e.dateTransform,i=e.dateType,a=e.end,l=e.hover,u=e.offset,s=e.start,d=e.step,p=d===void 0?1:d,h=e.tile,w=e.value,y=e.valueType,S=C1(e,S1),O=[],f=s;f<=a;f+=p){var c=o(f);O.push(z.createElement(h,au({key:c.getTime(),classes:x1({value:w,valueType:y,date:c,dateType:i,hover:l}),date:c,point:f},S)))}return z.createElement(Sa,{className:t,count:r,offset:u,wrap:!0},O)}go.propTypes=yf(yf({},mo),{},{activeStartDate:v.instanceOf(Date),count:v.number,dateTransform:v.func.isRequired,dateType:v.string,offset:v.number,step:v.number,tile:v.func.isRequired});function lu(e){return lu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lu(e)}function wf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function xf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wf(Object(n),!0).forEach(function(r){Fh(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function D1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Sf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E1(e,t,n){return t&&Sf(e.prototype,t),n&&Sf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function b1(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&uu(e,t)}function uu(e,t){return uu=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},uu(e,t)}function P1(e){var t=A1();return function(){var r=Pi(e),o;if(t){var i=Pi(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return _1(this,o)}}function _1(e,t){if(t&&(lu(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return zh(e)}function zh(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A1(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Pi(e){return Pi=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Pi(e)}function Fh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kf(e,t){return e&&!t||!e&&t||e&&t&&e.getTime()!==t.getTime()}function Cf(e,t){var n=e.activeStartDate,r=e.date,o=e.view;return typeof t=="function"?t({activeStartDate:n,date:r,view:o}):t}var yo=function(e){b1(n,e);var t=P1(n);function n(){var r;D1(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=t.call.apply(t,[this].concat(i)),Fh(zh(r),"state",{}),r}return E1(n,[{key:"render",value:function(){var o=this.props,i=o.activeStartDate,a=o.children,l=o.classes,u=o.date,s=o.formatAbbr,d=o.locale,p=o.maxDate,h=o.maxDateTransform,w=o.minDate,y=o.minDateTransform,S=o.onClick,O=o.onMouseOver,f=o.style,c=o.tileDisabled,m=o.view,g=this.state,k=g.tileClassName,E=g.tileContent;return X("button",{className:Es(l,k),disabled:w&&y(w)>u||p&&h(p)<u||c&&c({activeStartDate:i,date:u,view:m}),onClick:S&&function(P){return S(u,P)},onFocus:O&&function(){return O(u)},onMouseOver:O&&function(){return O(u)},style:f,type:"button",children:[s?D("abbr",{"aria-label":s(d,u),children:a}):a,E]})}}],[{key:"getDerivedStateFromProps",value:function(o,i){var a=o.activeStartDate,l=o.tileClassName,u=o.tileContent,s={};return(l!==i.tileClassNameProps||kf(a,i.activeStartDateProps))&&(s.tileClassName=Cf(o,l),s.tileClassNameProps=l),(u!==i.tileContentProps||kf(a,i.activeStartDateProps))&&(s.tileContent=Cf(o,u),s.tileContentProps=u),s.activeStartDateProps=a,s}}]),n}(R.exports.Component);yo.propTypes=xf(xf({},vo),{},{children:v.node.isRequired,formatAbbr:v.func,maxDateTransform:v.func.isRequired,minDateTransform:v.func.isRequired});var T1=["classes","formatYear"];function Of(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Df(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Of(Object(n),!0).forEach(function(r){N1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Of(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function N1(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function su(){return su=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},su.apply(this,arguments)}function L1(e,t){if(e==null)return{};var n=j1(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function j1(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var R1="react-calendar__century-view__decades__decade";function Uh(e){var t=e.classes,n=e.formatYear,r=n===void 0?xa:n,o=L1(e,T1),i=o.date,a=o.locale;return z.createElement(yo,su({},o,{classes:[].concat(t,R1),maxDateTransform:ga,minDateTransform:Dn,view:"century"}),jh(a,r,i))}Uh.propTypes=Df(Df({},vo),{},{formatYear:v.func});function Ef(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function $1(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ef(Object(n),!0).forEach(function(r){I1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ef(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function I1(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cu(){return cu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cu.apply(this,arguments)}function Wh(e){var t=e.activeStartDate,n=Xy(t),r=n+99;return z.createElement(go,cu({},e,{className:"react-calendar__century-view__decades",dateTransform:Dn,dateType:"decade",end:r,start:n,step:10,tile:Uh}))}Wh.propTypes=$1({},mo);function M1(e){function t(){return z.createElement(Wh,e)}return z.createElement("div",{className:"react-calendar__century-view"},t())}var z1=["classes","formatYear"];function bf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Pf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bf(Object(n),!0).forEach(function(r){F1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function F1(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fu(){return fu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fu.apply(this,arguments)}function U1(e,t){if(e==null)return{};var n=W1(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function W1(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var V1="react-calendar__decade-view__years__year";function Vh(e){var t=e.classes,n=e.formatYear,r=n===void 0?xa:n,o=U1(e,z1),i=o.date,a=o.locale;return z.createElement(yo,fu({},o,{classes:[].concat(t,V1),maxDateTransform:ya,minDateTransform:fo,view:"decade"}),r(a,i))}Vh.propTypes=Pf(Pf({},vo),{},{formatYear:v.func});function _f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function B1(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_f(Object(n),!0).forEach(function(r){Y1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_f(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Y1(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function du(){return du=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},du.apply(this,arguments)}function Bh(e){var t=e.activeStartDate,n=Zy(t),r=n+9;return z.createElement(go,du({},e,{className:"react-calendar__decade-view__years",dateTransform:function(i){var a=new Date;return a.setFullYear(i,0,1),a.setHours(0,0,0,0),a},dateType:"year",end:r,start:n,tile:Vh}))}Bh.propTypes=B1({},mo);function H1(e){function t(){return z.createElement(Bh,e)}return z.createElement("div",{className:"react-calendar__decade-view"},t())}var G1=["classes","formatMonth","formatMonthYear"];function Af(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Tf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Af(Object(n),!0).forEach(function(r){Q1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Af(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Q1(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pu(){return pu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pu.apply(this,arguments)}function K1(e,t){if(e==null)return{};var n=X1(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function X1(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var Z1="react-calendar__year-view__months__month";function Yh(e){var t=e.classes,n=e.formatMonth,r=n===void 0?Yy:n,o=e.formatMonthYear,i=o===void 0?Ah:o,a=K1(e,G1),l=a.date,u=a.locale;return z.createElement(yo,pu({},a,{classes:[].concat(t,Z1),formatAbbr:i,maxDateTransform:po,minDateTransform:lr,view:"year"}),r(u,l))}Yh.propTypes=Tf(Tf({},vo),{},{formatMonth:v.func,formatMonthYear:v.func});function Nf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Lf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Nf(Object(n),!0).forEach(function(r){J1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function J1(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hu(){return hu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hu.apply(this,arguments)}function Hh(e){var t=e.activeStartDate,n=0,r=11,o=se(t);return z.createElement(go,hu({},e,{className:"react-calendar__year-view__months",dateTransform:function(a){var l=new Date;return l.setFullYear(o,a,1),l.setHours(0,0,0,0),l},dateType:"month",end:r,start:n,tile:Yh}))}Hh.propTypes=Lf(Lf({},mo),{},{locale:v.string});function q1(e){function t(){return z.createElement(Hh,e)}return z.createElement("div",{className:"react-calendar__year-view"},t())}var ew=["formatDay","formatLongDate","calendarType","classes","currentMonthIndex"];function jf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Rf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jf(Object(n),!0).forEach(function(r){tw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tw(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mu(){return mu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mu.apply(this,arguments)}function nw(e,t){if(e==null)return{};var n=rw(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function rw(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var nl="react-calendar__month-view__days__day";function Gh(e){var t=e.formatDay,n=t===void 0?Vy:t,r=e.formatLongDate,o=r===void 0?By:r,i=e.calendarType,a=e.classes,l=e.currentMonthIndex,u=nw(e,ew),s=u.date,d=u.locale;return z.createElement(yo,mu({},u,{classes:[].concat(a,nl,a1(s,i)?"".concat(nl,"--weekend"):null,s.getMonth()!==l?"".concat(nl,"--neighboringMonth"):null),formatAbbr:o,maxDateTransform:Ns,minDateTransform:wa,view:"month"}),n(d,s))}Gh.propTypes=Rf(Rf({},vo),{},{currentMonthIndex:v.number.isRequired,formatDay:v.func,formatLongDate:v.func});var ow=["showFixedNumberOfWeeks","showNeighboringMonth"];function $f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function iw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$f(Object(n),!0).forEach(function(r){aw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$f(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function aw(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vu(){return vu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vu.apply(this,arguments)}function lw(e,t){if(e==null)return{};var n=uw(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function uw(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Qh(e){var t=e.activeStartDate,n=e.calendarType,r=e.showFixedNumberOfWeeks,o=e.showNeighboringMonth,i=lw(e,ow),a=se(t),l=un(t),u=r||o,s=Zr(t,n),d=u?0:s,p=(u?-s:0)+1,h=function(){if(r)return p+6*7-1;var w=_h(t);if(o){var y=new Date;y.setFullYear(a,l,w),y.setHours(0,0,0,0);var S=7-Zr(y,n)-1;return w+S}return w}();return z.createElement(go,vu({},i,{className:"react-calendar__month-view__days",count:7,currentMonthIndex:l,dateTransform:function(y){var S=new Date;return S.setFullYear(a,l,y),S.setHours(0,0,0,0),S},dateType:"day",end:h,offset:d,start:p,tile:Gh}))}Qh.propTypes=iw({calendarType:ho.isRequired,showFixedNumberOfWeeks:v.bool,showNeighboringMonth:v.bool},mo);var If="react-calendar__month-view__weekdays";function Kh(e){for(var t=e.calendarType,n=e.formatShortWeekday,r=n===void 0?Hy:n,o=e.locale,i=e.onMouseLeave,a=new Date,l=lr(a),u=se(l),s=un(l),d=[],p=1;p<=7;p+=1){var h=new Date(u,s,p-Zr(l,t)),w=Gy(o,h);d.push(z.createElement("div",{key:p,className:"".concat(If,"__weekday")},z.createElement("abbr",{"aria-label":w,title:w},r(o,h).replace(".",""))))}return z.createElement(Sa,{className:If,count:7,onFocus:i,onMouseOver:i},d)}Kh.propTypes={calendarType:ho.isRequired,formatShortWeekday:v.func,locale:v.string,onMouseLeave:v.func};var sw=["date","onClickWeekNumber","weekNumber"];function gu(){return gu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gu.apply(this,arguments)}function Mf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function cw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mf(Object(n),!0).forEach(function(r){fw(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fw(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dw(e,t){if(e==null)return{};var n=pw(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function pw(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var hw="react-calendar__tile";function Xh(e){var t=e.date,n=e.onClickWeekNumber,r=e.weekNumber,o=dw(e,sw),i=cw({className:hw},o),a=z.createElement("span",null,r);return n?z.createElement("button",gu({},i,{onClick:function(u){return n(r,t,u)},type:"button"}),a):z.createElement("div",i,a)}Xh.propTypes={date:v.instanceOf(Date).isRequired,onClickWeekNumber:v.func,weekNumber:v.node.isRequired};function Zh(e){var t=e.activeStartDate,n=e.calendarType,r=e.onClickWeekNumber,o=e.onMouseLeave,i=e.showFixedNumberOfWeeks,a=function(){if(i)return 6;var s=_h(t),d=Zr(t,n),p=s-(7-d);return 1+Math.ceil(p/7)}(),l=function(){for(var s=se(t),d=un(t),p=va(t),h=[],w=0;w<a;w+=1)h.push(ru(new Date(s,d,p+w*7),n));return h}(),u=l.map(function(s){return Jy(s,n)});return z.createElement(Sa,{className:"react-calendar__month-view__weekNumbers",count:a,direction:"column",onFocus:o,onMouseOver:o,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0}},u.map(function(s,d){return z.createElement(Xh,{key:s,date:l[d],onClickWeekNumber:r,weekNumber:s})}))}Zh.propTypes={activeStartDate:v.instanceOf(Date).isRequired,calendarType:ho.isRequired,onClickWeekNumber:v.func,onMouseLeave:v.func,showFixedNumberOfWeeks:v.bool};var mw=["calendarType","formatShortWeekday","onClickWeekNumber","showWeekNumbers"];function yu(){return yu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yu.apply(this,arguments)}function vw(e,t){if(e==null)return{};var n=gw(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function gw(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function yw(e){return Object.keys(cf).find(function(t){return cf[t].includes(e)})||we.ISO_8601}function Jh(e){var t=e.activeStartDate,n=e.locale,r=e.onMouseLeave,o=e.showFixedNumberOfWeeks,i=e.calendarType,a=i===void 0?yw(n):i,l=e.formatShortWeekday,u=e.onClickWeekNumber,s=e.showWeekNumbers,d=vw(e,mw);function p(){return z.createElement(Kh,{calendarType:a,formatShortWeekday:l,locale:n,onMouseLeave:r})}function h(){return s?z.createElement(Zh,{activeStartDate:t,calendarType:a,onClickWeekNumber:u,onMouseLeave:r,showFixedNumberOfWeeks:o}):null}function w(){return z.createElement(Qh,yu({calendarType:a},d))}var y="react-calendar__month-view";return z.createElement("div",{className:Es(y,s?"".concat(y,"--weekNumbers"):"")},z.createElement("div",{style:{display:"flex",alignItems:"flex-end"}},h(),z.createElement("div",{style:{flexGrow:1,width:"100%"}},p(),w())))}Jh.propTypes={activeStartDate:v.instanceOf(Date).isRequired,calendarType:ho,formatShortWeekday:v.func,locale:v.string,onClickWeekNumber:v.func,onMouseLeave:v.func,showFixedNumberOfWeeks:v.bool,showWeekNumbers:v.bool};var ww=["activeStartDate","defaultActiveStartDate","defaultValue","defaultView","maxDetail","minDetail","value","view"];function eo(e){return eo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},eo(e)}function xw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function zf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Sw(e,t,n){return t&&zf(e.prototype,t),n&&zf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function kw(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&wu(e,t)}function wu(e,t){return wu=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},wu(e,t)}function Cw(e){var t=Dw();return function(){var r=_i(e),o;if(t){var i=_i(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return Ow(this,o)}}function Ow(e,t){if(t&&(eo(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ue(e)}function Ue(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Dw(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _i(e){return _i=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_i(e)}function Ff(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function xu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ff(Object(n),!0).forEach(function(r){St(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ff(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function St(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ew(e,t){if(e==null)return{};var n=bw(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function bw(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Pw(e){return Nw(e)||Tw(e)||Aw(e)||_w()}function _w(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Aw(e,t){if(!!e){if(typeof e=="string")return Su(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Su(e,t)}}function Tw(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Nw(e){if(Array.isArray(e))return Su(e)}function Su(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var $s=new Date;$s.setFullYear(1,0,1);$s.setHours(0,0,0,0);var Lw=new Date(864e13),Uo="react-calendar",gn=["century","decade","year","month"],jw=[].concat(Pw(gn.slice(1)),["day"]);function Rw(e){return e instanceof Date?e:new Date(e)}function qh(e,t){return gn.slice(gn.indexOf(e),gn.indexOf(t)+1)}function $w(e,t,n){var r=qh(t,n);return r.indexOf(e)!==-1}function Is(e,t,n){return $w(e,t,n)?e:n}function em(e){return jw[gn.indexOf(e)]}function Iw(e,t){if(!e)return null;var n=Array.isArray(e)&&e.length===2?e[t]:e;if(!n)return null;var r=Rw(n);if(isNaN(r.getTime()))throw new Error("Invalid date: ".concat(e));return r}function tm(e,t){var n=e.value,r=e.minDate,o=e.maxDate,i=e.maxDetail,a=Iw(n,t);if(!a)return null;var l=em(i),u=[vn,Nh][t](l,a);return y1(u,r,o)}var Ms=function(t){return tm(t,0)},nm=function(t){return tm(t,1)},Mw=function(t){var n=t.value;return Array.isArray(n)?n:[Ms,nm].map(function(r){return r(t)})};function rm(e){var t=e.maxDate,n=e.maxDetail,r=e.minDate,o=e.minDetail,i=e.value,a=e.view,l=Is(a,o,n),u=Ms({value:i,minDate:r,maxDate:t,maxDetail:n})||new Date;return vn(l,u)}function zw(e){var t=e.activeStartDate,n=e.defaultActiveStartDate,r=e.defaultValue,o=e.defaultView,i=e.maxDetail,a=e.minDetail,l=e.value,u=e.view,s=Ew(e,ww),d=Is(u,a,i),p=t||n;return p?vn(d,p):rm(xu({maxDetail:i,minDetail:a,value:l||r,view:u||o},s))}var rl=function(t){return t&&[].concat(t).length===1},zs=function(e){kw(n,e);var t=Cw(n);function n(){var r;xw(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=t.call.apply(t,[this].concat(i)),St(Ue(r),"state",{activeStartDate:r.props.defaultActiveStartDate,value:r.props.defaultValue,view:r.props.defaultView}),St(Ue(r),"setStateAndCallCallbacks",function(l,u,s){var d=Ue(r),p=d.activeStartDate,h=d.view,w=r.props,y=w.allowPartialRange,S=w.onActiveStartDateChange,O=w.onChange,f=w.onViewChange,c=w.selectRange,m={activeStartDate:p,view:h};r.setState(l,function(){var g={action:l.action,activeStartDate:l.activeStartDate||r.activeStartDate,value:l.value||r.value,view:l.view||r.view};function k(P){return P in l&&(eo(l[P])!==eo(m[P])||(l[P]instanceof Date?l[P].getTime()!==m[P].getTime():l[P]!==m[P]))}if(k("activeStartDate")&&S&&S(g),k("view")&&f&&f(g),k("value")&&O)if(c){var E=rl(l.value);E?y&&O([l.value],u):O(l.value,u)}else O(l.value,u);s&&s(g)})}),St(Ue(r),"setActiveStartDate",function(l,u){r.setStateAndCallCallbacks({action:u,activeStartDate:l})}),St(Ue(r),"drillDown",function(l,u){if(!!r.drillDownAvailable){r.onClickTile(l,u);var s=Ue(r),d=s.view,p=s.views,h=r.props.onDrillDown,w=p[p.indexOf(d)+1];r.setStateAndCallCallbacks({action:"drillDown",activeStartDate:l,view:w},void 0,h)}}),St(Ue(r),"drillUp",function(){if(!!r.drillUpAvailable){var l=Ue(r),u=l.activeStartDate,s=l.view,d=l.views,p=r.props.onDrillUp,h=d[d.indexOf(s)-1],w=vn(h,u);r.setStateAndCallCallbacks({action:"drillUp",activeStartDate:w,view:h},void 0,p)}}),St(Ue(r),"onChange",function(l,u){var s=r.props.selectRange;r.onClickTile(l,u);var d;if(s){var p=Ue(r),h=p.value,w=p.valueType;rl(h)?d=o1(w,h,l):d=vn(w,l)}else d=r.getProcessedValue(l);var y=rm(xu(xu({},r.props),{},{value:d}));u.persist(),r.setStateAndCallCallbacks({action:"onChange",activeStartDate:y,value:d},u)}),St(Ue(r),"onClickTile",function(l,u){var s=Ue(r),d=s.view,p=r.props,h=p.onClickDay,w=p.onClickDecade,y=p.onClickMonth,S=p.onClickYear,O=function(){switch(d){case"century":return w;case"decade":return S;case"year":return y;case"month":return h;default:throw new Error("Invalid view: ".concat(d,"."))}}();O&&O(l,u)}),St(Ue(r),"onMouseOver",function(l){r.setState(function(u){return u.hover&&u.hover.getTime()===l.getTime()?null:{hover:l}})}),St(Ue(r),"onMouseLeave",function(){r.setState({hover:null})}),r}return Sw(n,[{key:"activeStartDate",get:function(){var o=this.props.activeStartDate,i=this.state.activeStartDate;return o||i||zw(this.props)}},{key:"value",get:function(){var o=this.props,i=o.selectRange,a=o.value,l=this.state.value;return i&&rl(l)?l:a!==void 0?a:l}},{key:"valueType",get:function(){var o=this.props.maxDetail;return em(o)}},{key:"view",get:function(){var o=this.props,i=o.minDetail,a=o.maxDetail,l=o.view,u=this.state.view;return Is(l||u,i,a)}},{key:"views",get:function(){var o=this.props,i=o.minDetail,a=o.maxDetail;return qh(i,a)}},{key:"hover",get:function(){var o=this.props.selectRange,i=this.state.hover;return o?i:null}},{key:"drillDownAvailable",get:function(){var o=this.view,i=this.views;return i.indexOf(o)<i.length-1}},{key:"drillUpAvailable",get:function(){var o=this.view,i=this.views;return i.indexOf(o)>0}},{key:"getProcessedValue",value:function(o){var i=this.props,a=i.minDate,l=i.maxDate,u=i.maxDetail,s=i.returnValue,d=function(){switch(s){case"start":return Ms;case"end":return nm;case"range":return Mw;default:throw new Error("Invalid returnValue.")}}();return d({value:o,minDate:a,maxDate:l,maxDetail:u})}},{key:"renderContent",value:function(o){var i=this.activeStartDate,a=this.onMouseOver,l=this.valueType,u=this.value,s=this.view,d=this.props,p=d.calendarType,h=d.locale,w=d.maxDate,y=d.minDate,S=d.selectRange,O=d.tileClassName,f=d.tileContent,c=d.tileDisabled,m=this.hover,g=o?Th(s,i):vn(s,i),k=this.drillDownAvailable?this.drillDown:this.onChange,E={activeStartDate:g,hover:m,locale:h,maxDate:w,minDate:y,onClick:k,onMouseOver:S?a:null,tileClassName:O,tileContent:f,tileDisabled:c,value:u,valueType:l};switch(s){case"century":{var P=this.props.formatYear;return D(M1,{formatYear:P,...E})}case"decade":{var T=this.props.formatYear;return D(H1,{formatYear:T,...E})}case"year":{var V=this.props,M=V.formatMonth,he=V.formatMonthYear;return D(q1,{formatMonth:M,formatMonthYear:he,...E})}case"month":{var Z=this.props,me=Z.formatDay,xe=Z.formatLongDate,Se=Z.formatShortWeekday,ce=Z.onClickWeekNumber,Ce=Z.showDoubleView,b=Z.showFixedNumberOfWeeks,$=Z.showNeighboringMonth,I=Z.showWeekNumbers,Q=this.onMouseLeave;return D(Jh,{calendarType:p,formatDay:me,formatLongDate:xe,formatShortWeekday:Se,onClickWeekNumber:ce,onMouseLeave:S?Q:null,showFixedNumberOfWeeks:typeof b!="undefined"?b:Ce,showNeighboringMonth:$,showWeekNumbers:I,...E})}default:throw new Error("Invalid view: ".concat(s,"."))}}},{key:"renderNavigation",value:function(){var o=this.props.showNavigation;if(!o)return null;var i=this.activeStartDate,a=this.view,l=this.views,u=this.props,s=u.formatMonthYear,d=u.formatYear,p=u.locale,h=u.maxDate,w=u.minDate,y=u.navigationAriaLabel,S=u.navigationAriaLive,O=u.navigationLabel,f=u.next2AriaLabel,c=u.next2Label,m=u.nextAriaLabel,g=u.nextLabel,k=u.prev2AriaLabel,E=u.prev2Label,P=u.prevAriaLabel,T=u.prevLabel,V=u.showDoubleView;return D(Ih,{activeStartDate:i,drillUp:this.drillUp,formatMonthYear:s,formatYear:d,locale:p,maxDate:h,minDate:w,navigationAriaLabel:y,navigationAriaLive:S,navigationLabel:O,next2AriaLabel:f,next2Label:c,nextAriaLabel:m,nextLabel:g,prev2AriaLabel:k,prev2Label:E,prevAriaLabel:P,prevLabel:T,setActiveStartDate:this.setActiveStartDate,showDoubleView:V,view:a,views:l})}},{key:"render",value:function(){var o=this.props,i=o.className,a=o.inputRef,l=o.selectRange,u=o.showDoubleView,s=this.onMouseLeave,d=this.value,p=[].concat(d);return X("div",{className:Es(Uo,l&&p.length===1&&"".concat(Uo,"--selectRange"),u&&"".concat(Uo,"--doubleView"),i),ref:a,children:[this.renderNavigation(),X("div",{className:"".concat(Uo,"__viewContainer"),onBlur:l?s:null,onMouseLeave:l?s:null,children:[this.renderContent(),u&&this.renderContent(!0)]})]})}}]),n}(R.exports.Component);zs.defaultProps={maxDate:Lw,maxDetail:"month",minDate:$s,minDetail:"century",returnValue:"start",showNavigation:!0,showNeighboringMonth:!0};var Uf=v.instanceOf(Date),Wf=v.oneOfType([v.string,$h]);zs.propTypes={activeStartDate:Uf,allowPartialRange:v.bool,calendarType:ho,className:bi,defaultActiveStartDate:Uf,defaultValue:Wf,defaultView:Jr,formatDay:v.func,formatLongDate:v.func,formatMonth:v.func,formatMonthYear:v.func,formatShortWeekday:v.func,formatYear:v.func,inputRef:u1,locale:v.string,maxDate:Rs,maxDetail:v.oneOf(gn),minDate:js,minDetail:v.oneOf(gn),navigationAriaLabel:v.string,navigationAriaLive:v.oneOf(["off","polite","assertive"]),navigationLabel:v.func,next2AriaLabel:v.string,next2Label:v.node,nextAriaLabel:v.string,nextLabel:v.node,onActiveStartDateChange:v.func,onChange:v.func,onClickDay:v.func,onClickDecade:v.func,onClickMonth:v.func,onClickWeekNumber:v.func,onClickYear:v.func,onDrillDown:v.func,onDrillUp:v.func,onViewChange:v.func,prev2AriaLabel:v.string,prev2Label:v.node,prevAriaLabel:v.string,prevLabel:v.node,returnValue:v.oneOf(["start","end","range"]),selectRange:v.bool,showDoubleView:v.bool,showFixedNumberOfWeeks:v.bool,showNavigation:v.bool,showNeighboringMonth:v.bool,showWeekNumbers:v.bool,tileClassName:v.oneOfType([v.func,bi]),tileContent:v.oneOfType([v.func,v.node]),tileDisabled:v.func,value:Wf,view:Jr};var Fw=zs;const Uw=ln.li`
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

  background-color: ${e=>e.theme.fg};

  transition: 0.25s ease;
  transition-property: opacity transform;

  animation: ${e=>e.beingRemoved?"taskSlideUp":"taskSlideDown"} 0.25s ease;

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

        animation: ${e=>e.checked?"taskBounce .25s ease forwards":""};

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
    position: relative;

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

      cursor: pointer;

      color: ${e=>e.theme.bolder};
      background-color: ${e=>e.theme.bg};

      transition: 0.25s ease;
      transition-property: background-color;

      :hover {
        background-color: ${e=>e.theme.bold};
      }
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

    .right {
      .date {
        display: none;
      }

      button {
        width: 25px;
        height: 25px;

        img {
          width: 15px;
          height: 15px;
        }
      }

      gap: 10px;
    }
  }

  @keyframes taskSlideDown {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes taskSlideUp {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
      opacity: 0;
      transform: translateY(-10px);
    }
  }

  @keyframes taskBounce {
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

  .react-calendar {
    position: absolute;

    z-index: 1;

    top: 20px;
    right: 0px;

    display: flex;
    flex-direction: column;

    width: 320px;

    padding: 20px;

    opacity: ${e=>e.isSelectingDate?"1":"0"};
    transform: ${e=>e.isSelectingDate?"translateY(0px)":"translateY(-10px)"};

    border: 1px solid ${e=>e.theme.bold};
    border-radius: 20px;

    box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.1);

    cursor: default;

    background-color: white;

    animation: ${e=>e.isSelectingDate?"taskSlideDown":"taskSlideUp"} 0.25s ease;

    transition: 0.25s ease;
    transition-property: opacity transform;

    abbr {
      text-decoration: none;
    }

    button {
      flex: unset !important;

      width: 30px;
      height: 30px;

      border: none;
      outline: none;

      border-radius: 10px;

      font-family: "Inter var", sans-serif;
      font-size: 14px;
      font-weight: 500;

      transition: 0.25s ease;
      transition-property: background-color;

      :enabled {
        cursor: pointer;
      }

      :hover {
        ${e=>e.theme.bold};
      }
    }
  }

  .react-calendar__navigation {
    display: flex;

    width: 100%;
    height: 30px;

    align-items: center;
    justify-content: space-between;

    gap: 10px;

    button {
      :first-of-type,
      :last-of-type {
        display: none;
      }

      :nth-of-type(3) {
        width: 100%;

        text-transform: capitalize;
      }

      display: grid;
      place-items: center;

      min-width: 30px;
      min-height: 30px;

      border: none;
      outline: none;

      padding: 0;

      border-radius: 10px;

      background-color: transparent;

      :disabled {
        background-color: ${e=>e.theme.bold};
      }

      :hover {
        background-color: ${e=>e.theme.bold};
      }
    }
  }

  .react-calendar__viewContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0px, 400px));
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: capitalize;
    font-weight: 500;
    font-size: 14px;

    padding: 10px 0;

    color: ${e=>e.theme.bolder};
  }

  .react-calendar__month-view__weekdays__weekday {
    text-align: center;

    padding: 10px 0;
  }

  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
  }

  .react-calendar__month-view__days {
    width: fit-content;

    gap: 10px;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: ${e=>e.theme.bold};
  }

  .react-calendar__year-view {
    padding: 20px 0 !important;

    button {
      display: grid !important;
      place-items: center;

      width: 100%;
      text-transform: capitalize;

      padding: 0px;
      place-items: center;
    }
  }

  .react-calendar__decade-view__years {
    padding: 20px 0 !important;

    button {
      display: grid !important;
      place-items: center;

      width: 100%;
      text-transform: capitalize;

      padding: 0px;
      place-items: center;
    }
  }

  .react-calendar__century-view__decades {
    padding: 20px 0 !important;

    button {
      display: grid !important;
      place-items: center;

      width: 100%;
      text-transform: capitalize;

      padding: 0px;
      place-items: center;
    }
  }

  .react-calendar__tile {
    text-align: center;

    background: transparent;

    :disabled {
      background-color: #f0f0f0;
    }

    :hover,
    :focus {
      background-color: #e6e6e6;
    }
  }

  .react-calendar__tile--now {
    color: #008ffd;

    border: 2px solid #008ffd !important;

    :hover,
    :focus {
      background-color: transparent;
    }
  }

  .react-calendar__tile--hasActive {
    background: #76baff;

    :hover,
    :focus {
      background-color: #a9d4ff;
    }
  }

  .react-calendar__tile--active {
    background: #008ffd !important;
    color: white;

    :hover,
    :focus {
      background-color: #008ffd;
    }
  }

  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
`;function Ww({task:e}){const{removeTask:t,updateCheckedStatus:n,updateDate:r}=R.exports.useContext(Ki),[o,i]=R.exports.useState(""),[a,l]=R.exports.useState(e.checked),[u,s]=R.exports.useState(!1);function d(y){i(y),p(y)}const p=y=>{setTimeout(()=>{t(y)},250)},h=(y,S)=>{s(!1),r(y,S.toString())};function w(){l(!a),n(e,!a)}return X(Uw,{beingRemoved:o===e.id,checked:e.checked,isSelectingDate:u,theme:bn,children:[X("div",{className:"left",children:[X("label",{children:[D("input",{type:"checkbox",defaultChecked:a,onChange:()=>w()}),D("div",{className:"checkbox-div"})]}),D("h3",{children:e.content})]}),X("div",{className:"right",children:[D("h4",{className:"date",onClick:()=>s(!u),children:`${e.date.split(" ")[1]} ${e.date.split(" ")[2]}`}),u&&D(Fw,{onClickDay:y=>h(e,y)}),D("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:D("rect",{x:"1.25",y:"1.25",width:"12.5",height:"12.5",rx:"4.75",stroke:`#${e.category.color}`,strokeWidth:"2.5"})}),D("button",{onClick:()=>d(e.id),children:D("img",{src:ph,alt:"",width:15})})]})]})}var Vw="/dona-clone/assets/checkIcon.97d19678.svg";const Bw=ln.div`
  visibility: ${e=>e.isSelectingCategory?"":"hidden"};

  position: absolute;

  z-index: 1;

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

  animation: ${e=>e.isSelectingCategory?"selectFadeIn ":""} 0.25s ease;

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
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @media (max-width: 768px) {
    left: -100px;
  }
`;function Yw({isSelectingCategory:e,setIsSelectingCategory:t,category:n,setCategory:r}){const{categories:o}=R.exports.useContext(ao),i=R.exports.useRef(null);return D(Bw,{theme:bn,isSelectingCategory:e,ref:i,children:e&&D("ul",{children:o.map(a=>X("li",{onClick:()=>r(a),children:[D("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:D("rect",{x:"1.25",y:"1.25",width:"12.5",height:"12.5",rx:"4.75",stroke:`#${a.color}`,strokeWidth:"2.5"})}),D("h4",{children:a.title}),n.slug===a.slug&&D("img",{src:Vw,alt:"Chosen Category",width:10,id:"checkmark"})]},a.slug))})})}var Hw="/dona-clone/assets/donaBlue.4a2239b6.svg";const Gw=ln.main`
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

      animation: mainHeaderSlideDown 0.25s ease;

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

    #task-writer {
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

      animation: mainSlideDown 0.25s ease;

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

        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);

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
      width: 100%;

      padding: 0;

      header {
        transform: translateX(0px);
        padding-left: 20px;
      }

      #task-writer {
        min-height: 50px;
        padding: 20px;

        border-radius: 15px;

        .left {
          label {
            width: 20px;
            height: 20px;

            .checkbox-div {
              width: 20px;
              height: 20px;

              border-radius: 5px;

              transform: translateX(-20px) scale(0);
            }
          }
        }

        form {
          transform: translateX(-40px);
        }

        .right {
          display: none;
        }
      }

      :focus,
      :active {
        .left {
          label {
            .checkbox-div {
              transform: translateX(0px) scale(1);
              opacity: 1;

              animation: ${e=>e.checked?"mainBounce 0.25s ease forwards":""};
            }
          }
        }
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
      transform: translateY(-10px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @keyframes mainHeaderSlideDown {
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
`,wo=new Date,Qw=()=>{const e=wo.getHours();return e<12?"morning":e<18?"afternoon":"evening"},Kw=()=>wo.getUTCDate(),Xw=()=>{switch(wo.getDay()){case 0:return"Sunday";case 1:return"Monday";case 2:return"Thuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday";default:return""}},Zw=()=>{switch(wo.getMonth()){case 0:return"Jan";case 1:return"Feb";case 2:return"Mar";case 3:return"Apr";case 4:return"May";case 5:return"Jun";case 6:return"Jul";case 7:return"Aug";case 8:return"Sep";case 9:return"Oct";case 10:return"Nov";case 11:return"Dec";default:return""}};wo.toString().split(" ")[2];function Jw(){var O;const{categories:e}=R.exports.useContext(ao),{path:t}=R.exports.useContext(Qi),{addTask:n,tasks:r}=R.exports.useContext(Ki),{user:o}=R.exports.useContext(Gi),[i,a]=R.exports.useState(!1),[l,u]=R.exports.useState(e[0]),[s,d]=R.exports.useState(!1),p=R.exports.useRef(null),h=R.exports.useRef(null);function w(f){var k,E;f.preventDefault();const c=(k=h.current)==null?void 0:k.value;if(!c)return;const m=new Date,g={category:l,checked:i,content:c,date:m.toString(),id:K0()};n(g),(E=p.current)==null||E.reset()}R.exports.useEffect(()=>{var f;(f=h.current)==null||f.focus()},[i,s]),R.exports.useEffect(()=>{var f;(f=h.current)==null||f.blur()},[]);const y=r.filter(f=>f.category.slug===t);return hh([{ctrlKey:!0,key:"S",handler:()=>{var f;return(f=h.current)==null?void 0:f.focus()}},{ctrlKey:!1,key:"Escape",handler:()=>{var f;return(f=h.current)==null?void 0:f.blur()}}]),R.exports.useEffect(()=>{const f=e.filter(c=>c.slug===t)[0];u(f)},[t,e]),D(Gw,{theme:bn,checked:i,children:X("div",{id:"tasks-area-wrapper",children:[t==="/"&&X("header",{children:[D("img",{src:Hw,alt:"Dona Logo",width:35}),X("h1",{children:["Good ",Qw(),", ",o.name]}),X("h2",{children:["It's ",Xw(),", ",Zw()," ",Kw()]})]}),D("h1",{className:"category-indicator",children:(O=e.filter(f=>f.slug===t)[0])==null?void 0:O.title}),X("div",{id:"task-writer",onClick:()=>{var f;return(f=h.current)==null?void 0:f.focus()},children:[X("div",{className:"left",children:[X("label",{children:[D("input",{type:"checkbox",defaultChecked:i,onChange:()=>a(!i)}),D("div",{className:"checkbox-div"})]}),D("form",{noValidate:!0,onSubmit:w,ref:p,children:D("input",{type:"text",placeholder:"Write a new task...",ref:h})})]}),X("div",{className:"right",onClick:()=>d(!s),children:[D("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:D("rect",{x:"1.25",y:"1.25",width:"12.5",height:"12.5",rx:"4.75",stroke:`#${l.color}`,strokeWidth:"2.5"})}),D("h4",{children:l.title}),D(Yw,{category:l,setCategory:u,isSelectingCategory:s,setIsSelectingCategory:d})]})]}),D("ul",{children:y.reverse().map(f=>D(Ww,{task:{category:f.category,checked:f.checked,content:f.content,date:f.date,id:f.id}},f.id))})]})})}var qw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAimSURBVHgB7Z07bBRHGMf/s7e2OScOhwQNIGxTQSTwuUGkAIxSBCGISAUFAdOEAiSgSQoKTEGKNDESadLEDkSCNASBohRBGLshNJyhwBV+SK6wZBsb/DrvZL69W8s2dzt7dzu7c/b8JGRzPsSc//s958UQAeOcp2oX0cYcNDILac6RBkeKM6QYkIJucAyBiT/ABHfQ71joydrIbGJsAophUMTUAm+zgUMcOCH+msbaIONwPBVfuz6tZRkoIFRByBI2ZHHJESKwtSNCYYQFic/YMZvAU2E5QwiJUARZJsRlLV2QSkgYjq5ZG91hCFOxIB/m+SURCzrWnRCroZiTxc36DawTFVC2IOPzPF3H8BvWumsqFSHMXAKHy7UWC2VAViHEeAEjxsdwNNVlMTizwK+hDEqykHz6+rPwme0wSBGuvGs+gSulpMuBBRmf4U11Nu7DWEVplOjCAgniipHAE/HuJhhKpwRRpIIYMUIioCi+glDMqFsQwduIERaZOdsVpWhM8c2yahbQacQIlTQlRX5vKCoIpW0Ww1kYQoUy1A+z/HLRnxd6MZ9RDcKgDNGkbC3UoCxoIW4QNyjFynU5Pn599QtUhZu4EQnpQq5rhcsyKW7kTIisq3l51rXCQjbYIogbMaIkVTuPFVayZCHGOmJjhZXY3qs1CbTpIsbEHPDoDdA/5mB4Cnj1Fpicz71eLo0NwI7PgL2bgZYtDAe2MjR+Bh3wrKSD/rJkISKYD8YpCP2yf+nn6B3l6BtFJJA4F9Pxi8NFBf9JDWul711BpsVkk5Wb34gcTwj6U4kFVMrpXcDVfVZswiwChxtqWI8X1NsRAzeec3z+u+N+jVMM4s4AsDs/ljiwHBEykLeQ9wv8RZSrRIbfASf/dvByDFpCVvLPiWitxXNbzO3oZjGOiLg9wPFDX/wWIWNjHfDrlwzHdypbuvYRItvaZNnZ6CyD3MH5f/UXg5icIyvmkbqw+kUcsjzfpRr6YHH550qIctyLWTTbzEILFPPwTekfilzG8Wbg4DaGvVtEDdHAkKpDWZBFjkxx9It6hlLqh4PctYCg0Niphvl2l1r3xWy0sA8LnDq7bVAEBfAv7jmB3RR98IstTKSh5QsQhNuvcw/JyFSw99MD8uyk2kBPgZ2pLgh3d+eqbRn0ga/uY64YUXJL1D/f9wWzXiokn50qaylbMMS8u6VSDHoCg4hBVkFPX9RiEPR/vj5jCZcofy+l6UrjCUeKXJaS/4FcFRVaMvaIp+7Po1bsfaWgtRFZMgmoyp0qs78bz+VikGXoIAZBY7h3VG4pk/lWjyqUWEhQ66AnTZOO6xI09v0iCfHLwlRaiRIL6RuVa/zTAW3a3yugMVFy4YdKK1EiiGywXmqrKzQ2mevqHa0SQcjk+yWBUfYE6gDNk/hBBaaKFlDogsjcFflf1RVvGNAYN0pixKM34VtJ6ILI0sbjzfqLQeRaN/5j7VcwfRC6IP1j/k/Nge2oGg5u8//5cMC2SymELsjIO/+f791cHRZC7NniP9ZXb6vAZcmemsYALQpdaJKMdWIeoaOwU1YYlR3csJEF9clqyLIMlWEE0QwjiGYYQTTDCKIZRhDNMIJohhFEM4wgmmEE0QwjiGYYQTTDCKIZoQsi65BWw1YEj8kYxhq6IKla/5+rmGVTxVAMczuhC0JbB/xQMcumCtlYdyhYVxa6II0N/tOevRFteQ4D2dorFdPR4VvIZv+f02aZaokjDyUHVMm8QTmELohskyQFyjsD+rutO6/lu6wObq0CC6Es64Bk+YzK1eNhIdsHQp6gsRpiCEH7Av2g5aa3NBaFxibLBi+k1SxnUiIILVaW1SPu7irJGq44oDEF2eKmwl0RSgQhMWSr28k/H/nL0UoUGsuR+/J9LbQhVdVWCmWtkyBW4m0j00GUpbEEKFxVrt63hHEquVcpiJUQtDg7bkvxLCPI2SskhsqNRsq3Re+/G/yQGdpVFce26B8DnkZElfnAGbXbopnqk4CC7Nlbjrel7LTCPST0y/9D1EK3Mjxwby2KgwMEPez9HO9iltoTrOnUhPOPS0tzaQ3wMTpaYzvDHtGioEZeJUdreEcF9o46eDRYetf57lGGr1WfDOTgAZue5ZethP955GFQrYfPEGSxUWzD4w6uW47tXqConKg+VNhEOW66wDLyA8zoZKDvHvNYJn9KgWIGJRlR7oekA8xiO+LvK5Fmjmg6WRXHcR/eEX+5HE4EE0QIfdCBs5Z2Lsw7kei/U9GfMMFzV7rmDsGke2sTiOdGBLIWCvZxtuS9IvZCC4tth5fN0VpbyzJLj2jUbms1JAzN0FFrPqrTSmmagDrTcQrhIgrCeps1577NI+qRDlGPXIMGeOKQMC/HuLuzt5LFEWQBtPjCOyqwRcSIYzuZNvsdGUN70mbd7vfei+6lkVkMrvs7baOG2iUJHE7mb29basy4p/M7uAlDpIhg3p1cdpXeygtdjJVEyyrrIFa0LslKGMd1GKJBeKTkqosmCxYCcWdc64JlmdVyCjb3hV87B4NSyFUVer2gIO79ehxXYFCCKIGvJ4vcievbu5ie513mts9wETVHl6g5inog6eXEIut6YuJJSIi4kUyglZV7OTFlXVYW3wgbG4KhMvIprp8YubcFYGaGN3FzpV75FKg3ihFoCUUyyYbYosgKjKWUQyaoGETgNS0kylwNWqnUhyEQDrVF7OBiEGXNEInCsUP8Qy06w9oiyob6WtaJEil7ys7ElaJkhGWcK3RXehDKXoZHLkw8Ac1uAWliC9wluWQVYl68XDGIUCa1yVocG+2iMbnubpvOr42+WW+jU5bSBiHUVQYkzGICbRbFl7UvTEaI8SAsITyULftw79cF2jnDobVS6dNSHfHlgQP00L21UEAk63C4aMFMZ5GmOxPz1/SlxKdr0tGKyAUJ1zshHqQJ0cfLcAeZrIXhhgR6wrSEYvwPfh5cDTCx0a4AAAAASUVORK5CYII=",ex="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgDSURBVHgB7Z3bVRtJEIaLAfy62gzGEQARMESwbASINx9fkDYCiwhWa2wfv1mOwGwEjCMwROBxBKt9xTbe+uUa7QAz0zVXNbi+c3QEUkvq7r/vXd21RhV4+vRpxE9ba2treN7mx0Aeecz5cc5hL66uruKNjY14Op3O6Q4yHo8H37592+e0IM27379/R5rDovAc7pzDJPyIOe0fXr9+fU5K1jSBnj17NuSnA35E1IzZly9fjt+8eZPQHYCFCDlDx5yxSPuA6pOwSJMXL168cwUsFQQ1gr/oLZWUhjoEQTDl7z32tcagRrAIzyEGtQtqzeHLly/jogCFgoxGoz87iFCWhGvLnm+15fHjx9vr6+vvqeVCmEVqy3Hue3kvchOFWjGk7plz27xXpY3tEhHjjJo1T1pmJycnhzdfvCVIj2KkeCFKz2Kk3BIlyP5zdHT0nPoVAwyQEY8ePQppRaDzlmaqTzHAEF1D9oWlIOjAucOZ0GoYbG5uvqUVwTW09YGLFvTTMp1YsJH+IaMpLRgdnbKAmGf8mxeA3wv5aVfmLBoirqEHmqFhm8iQPtKGx9yCR4kXSHvB+7/w0w6ne5eUIkveP8TfG5lIaT485x/8iyd5U+2QFc2BlMDIFVZqaK+CMM81gSAEPx2XDVlv8uTJkzGLh+93NYVhWhgXnToL8oncgjQapnK1nHBJcCaeE75XJdFNkILobBk4ThBiQjWQAonBQugIGnMHvxdgdKEIPG86Z0CCULtc4TSitchvrgCIc10xALckCQ8Y9uhHM19GhL4k0LTx3PG0stzBTd1EEbFt6o/I8X4icW4ERNEURg6zzU1csOsIl7x69WpKLYB+RxGxgdTaTpHfKG3bMaNua3kH/S45CiNrEQUyGiojphbhiM1cYbiKdy4IJz50hbm8vPxALSGF8W9HsK1AlpQL4ebqgloE1ZccJYV/s48Jmkv0edvrbEVD5QyDwBEAJamLFdnS7+RC0veMOY/W063IS7cgRr+YIJ5hgniGCeIZJohnQJCkLABmj2S0gmLON8fE0DUE3SKjFWRJvhDMU1BDXLPRKLuBYtQDq77kXju7wEzduZfd8wrsvUT2hErhieNZwOtGp6RYGpb9dqMGkneRKxwL8iGQRS/nLh1287AhDyMyMlQgr5BnSluFGbRYbOFiaZir1Mj1CTGc22fFJ1gJvSsmoX0DC5oHDx4ccJ4iv1QFGCa2eF7aZXHHDfNOpyg3mFO9RbiQuvneKpQZiqck1M33XkN2JSHe/1Yn2BljRbGlGZKeyj++4u+tSkjdc21X8prl4oqs935mYKuwk236ry2dwJwTZp3UfXNhiAntzX741lpWRpSEjK4otGfOXVxEQDFdicloFRjcoZkqMi53nqASYzJMbEIymqA6RaU60gYgDKv7m9hxWaevYy6GDWoTVLUgWTAaEzOaWkvzMt8pEzXmhLRmglMQB6y8RiVBNDZkefwDA3TuI87rnHmpJUhTXLbETWxptShsjZOTk5OH1DO2Y+gZJohnmCCeYYJ4hgniGSaIZ5ggnmGCeIYJ4hkmiGeYIJ5hgniGCeIZJohnmCCeYYJ4hgniGSaIZ5ggnmGCeIYJ4hkmiGeYIJ5R21AOd1rJDZy/UkXuuaEcOL+6uko6NZSTi/lhWOa8ic1YgmMdMefbqfb6WzO27o9mxtZV7ts1KoHjCIdFB2ZzBbGjbZ2TcGH/Pa+PuSWIidEbuaeorgkizdRHMjH64pYoS0HE8RXECMnoE9x8vZPeD7w8pw6fS1RdDLs4oN73Zgkl7//AP4saIk3VJ+UXLCZMX79+ndW9WuO+H9iR/IyownSBR14PkZ+LGsKZi8g5PySuKiZ31R9hX8hl0TMW5lTy1nllCecrrtYYb0jfceD6QB+l9r4hBRcedOauO8f4/QPWYhKwghE5wNlqE6M+knexI9jCmyhWeyNHQDRph2Q0Ai2MIsx24LrkErXD7sVqjpxTj8vCwHUIaojrrHmny+A/E1y4LxzvLy7jdzk1SchoBcWFo6HtGHqGCeIZJohnmCCeYYJ4BgRZhYOule+3uJwQUAdx1OSlUxCerLTqHUEupR84fvMjdYzGQVfbLsVdHvEwLIYgrrHxfpvXi8uydCm8VPOZOgYXjLnC8ArskFpE4a7ic8DVyDUTH3AGjakFRFjXpf7zOgZmVZHfcPlOGbVVGI+OjrAEH5aFYS1irbuKURvVV7kr2edSjdPRo8S5EWimNRfyL3y1axa9ELHNzc2zJqLAZYNc5l8Ki/+eekKzAos4N3HVkXHf7dwuRq1N/akPSeFXnH5U8WPe2pySkowJaqQI3vs9h0pf8qDUwO0maOpYzBGLrvKQwHk0XDq4rxgxkNAPg+hz3MBZ8AMwxsYILSIlaaSoRyoUxpSFIXjRoisM0GU0tU/6ofOyIGbdVaAkn9GKkF3JPVoBLArSHdGK4LTvpff6LmfqeKGB+X1TklXuSq6vr+O3V2K4IbYKcfr/LVMTrikzbLhTfxReTN8nqzChhaspFmOYfS3X9qdHUbwQI6VPUfLEALmLiwioGRI2JPFJDCBeIXaoY1cd4uJomPde4WovTFfQ2VAHkUOEkHCfxEiBkRvi1lF/mkgHXjgfUx1pa+kUFYzF3l1eXk7vihULJnViedio+V7MwINgphnSVzr0KV4R0sOSoWP1EqVhDmeJmK/AgeVdNUHFJA8GhZyWiCd7W5Luon5mYSgubipiflxoXVWA/wCdQE5LVqQDxQAAAABJRU5ErkJggg==",tx="/dona-clone/assets/donaLists.d749d46d.png";const nx=ln.div`
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
      animation: welcomeSlideDown 0.5s ease-out forwards;
    }

    #modal-top {
      display: grid;
      place-items: center;

      height: 50%;

      img {
        border-radius: 20px;

        box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);

        background-color: white;
      }

      .second-image {
        width: 300px;
        padding: 20px;
      }

      .third-image {
        padding: 25px;
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

        svg {
          width: 50px;
          height: 50px;

          path {
            opacity: 0;

            stroke-dasharray: 640;
            stroke-dashoffset: 0;
            animation: welcomeDrawStroke 1s 0.25s forwards;
          }
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

      .slideLeft {
        animation: welcomeSlideLeft 0.5s ease forwards;
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

          box-shadow: inset 0px 1px 1px rgba(255, 255, 255, 0.25), 0px 1px 1px rgba(0, 0, 0, 0.25);

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
          border: none;

          font-family: "Inter var", sans-serif;
          font-size: 14px;
          text-decoration: none;

          border-radius: 10px;

          cursor: pointer;

          color: #008ffd;
          background-color: transparent;

          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

          transition: 0.25s ease;
          transition-property: color background-color;

          :hover {
            color: #0072ca;

            svg {
              fill: #0072ca;
            }
          }

          svg {
            position: relative;

            fill: #008ffd;

            transition: 0.15s ease;
            transition-property: fill;
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

  @media (max-width: 768px) {
    #modal {
      width: 100vw;
      height: 100vh;

      border-radius: 0;
    }
  }
`;function rx(){const{registerUser:e}=R.exports.useContext(Gi),[t,n]=R.exports.useState(1),[r,o]=R.exports.useState(""),[i,a]=R.exports.useState(!0);function l(){if(r){e(r);return}t>=4||(n(d=>d+1),a(!0))}const u=()=>{switch(t){case 1:return{title:"Welcome to Dona Clone",subtitle:"Dona is a back to-do list focused on fast and delightful user experience.",image:qw};case 2:return{title:"Powerful lists",subtitle:"Organize your tasks into fully customizable lists.",image:tx};case 3:return{title:"We have shortcuts",subtitle:"Dona offers a lot of shortcuts. Test them out.",image:ex};case 4:return{title:"What's your name?",subtitle:"",image:""};default:return{title:"",subtitle:"",image:""}}},s=()=>{switch(t){case 1:return"";case 2:return"second-image";case 3:return"third-image";case 4:return"fourth-image";default:return}};return D(nx,{activeWelcomePage:t,onAnimationEnd:()=>a(!1),children:X("div",{id:"modal",children:[X("div",{id:"modal-top",className:i?"modal-top-animation":"",children:[t!==4&&D("img",{src:u().image,alt:"",width:100,className:s()}),t===4&&D("span",{className:s(),children:D("svg",{width:"62",height:"42",viewBox:"0 0 62 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:D("path",{d:"M6 16.9091L24.7439 35.3121C25.1328 35.6941 25.756 35.6941 26.145 35.3121L56 6",stroke:"#6d6d6d","stroke-width":"8","stroke-linecap":"round"})})})]}),X("div",{id:"modal-bottom",children:[X("span",{className:i?"slideLeft":"",children:[D("h2",{children:u().title}),D("h3",{children:u().subtitle}),t===4&&D("input",{type:"text",placeholder:"Type it here...",onChange:d=>o(d.target.value)})]}),X("span",{className:i?"slideLeft nav-buttons":"nav-buttons",children:[D("button",{onClick:l,children:"Continue"}),t===4&&X("a",{href:"https://github.com/antoniopataro/dona-clone",target:"_blank",children:[D("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:D("path",{d:"M7.5 0C3.35812 0 0 3.4107 0 7.61744C0 11.1868 2.42 14.1735 5.6825 15C5.6475 14.8972 5.625 14.7778 5.625 14.6299V13.328C5.32062 13.328 4.81062 13.328 4.6825 13.328C4.16938 13.328 3.71312 13.1039 3.49188 12.6875C3.24624 12.2247 3.20374 11.5169 2.595 11.084C2.41438 10.9399 2.55188 10.7755 2.76 10.7977C3.14438 10.9082 3.46312 11.176 3.76312 11.5734C4.06188 11.9714 4.2025 12.0616 4.76062 12.0616C5.03124 12.0616 5.43624 12.0457 5.8175 11.9848C6.0225 11.456 6.37688 10.9691 6.81 10.7393C4.3125 10.4784 3.12062 9.21646 3.12062 7.50318C3.12062 6.76555 3.43 6.05205 3.95562 5.45091C3.78312 4.85421 3.56626 3.63733 4.02188 3.17393C5.14562 3.17393 5.825 3.9141 5.98812 4.11406C6.54812 3.91918 7.16312 3.80872 7.80938 3.80872C8.45688 3.80872 9.07438 3.91918 9.63562 4.11532C9.79688 3.91664 10.4769 3.17393 11.6031 3.17393C12.0606 3.63795 11.8412 4.85993 11.6669 5.45535C12.1894 6.05523 12.4969 6.76683 12.4969 7.50318C12.4969 9.2152 11.3069 10.4765 8.81312 10.7387C9.49938 11.1024 10 12.1244 10 12.8944V14.6299C10 14.6959 9.98562 14.7436 9.97812 14.8C12.9006 13.7596 15 10.9412 15 7.61744C15 3.4107 11.6419 0 7.5 0Z"})}),D("span",{children:"Github"})]})]}),X("svg",{viewBox:"0 0 70 10",width:"70",height:"10",children:[D("circle",{cx:"5",cy:"5",r:"5",fill:t===1?"#008FFD":"#d9d9d9"}),D("circle",{cx:"25",cy:"5",r:"5",fill:t===2?"#008FFD":"#d9d9d9"}),D("circle",{cx:"45",cy:"5",r:"5",fill:t===3?"#008FFD":"#d9d9d9"}),D("circle",{cx:"65",cy:"5",r:"5",fill:t===4?"#008FFD":"#d9d9d9"})]})]})]})})}const bn={bg:"#EAEDEE",fg:"#FFF",bold:"#d9d9d9",bolder:"#6d6d6d",text:"#000",shadow:"rgba(0,0,0,0.5)",shadowInverted:"rgba(255,255,255,1)",white:"#FFF",black:"#000"},ox=ln.main`
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
`;function ix(){const{user:e}=R.exports.useContext(Gi);return X(ox,{theme:bn,children:[D(V0,{}),D(Jw,{}),!e.name&&D(rx,{})]})}function ax({children:e}){return D(Ng,{children:D(jg,{children:D(Lg,{children:D(Ag,{children:e})})})})}ol.createRoot(document.getElementById("root")).render(D(z.StrictMode,{children:D(ax,{children:D(ix,{})})}));
