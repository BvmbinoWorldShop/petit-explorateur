(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function N_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var rg={exports:{}},ec={},sg={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ro=Symbol.for("react.element"),L_=Symbol.for("react.portal"),D_=Symbol.for("react.fragment"),I_=Symbol.for("react.strict_mode"),U_=Symbol.for("react.profiler"),F_=Symbol.for("react.provider"),O_=Symbol.for("react.context"),k_=Symbol.for("react.forward_ref"),B_=Symbol.for("react.suspense"),z_=Symbol.for("react.memo"),V_=Symbol.for("react.lazy"),Xh=Symbol.iterator;function H_(t){return t===null||typeof t!="object"?null:(t=Xh&&t[Xh]||t["@@iterator"],typeof t=="function"?t:null)}var ag={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},og=Object.assign,lg={};function js(t,e,n){this.props=t,this.context=e,this.refs=lg,this.updater=n||ag}js.prototype.isReactComponent={};js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cg(){}cg.prototype=js.prototype;function ff(t,e,n){this.props=t,this.context=e,this.refs=lg,this.updater=n||ag}var hf=ff.prototype=new cg;hf.constructor=ff;og(hf,js.prototype);hf.isPureReactComponent=!0;var jh=Array.isArray,ug=Object.prototype.hasOwnProperty,pf={current:null},dg={key:!0,ref:!0,__self:!0,__source:!0};function fg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)ug.call(e,i)&&!dg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:ro,type:t,key:s,ref:a,props:r,_owner:pf.current}}function G_(t,e){return{$$typeof:ro,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function mf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ro}function W_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var qh=/\/+/g;function Mc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?W_(""+t.key):e.toString(36)}function il(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case ro:case L_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Mc(a,0):i,jh(r)?(n="",t!=null&&(n=t.replace(qh,"$&/")+"/"),il(r,e,n,"",function(c){return c})):r!=null&&(mf(r)&&(r=G_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(qh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",jh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Mc(s,o);a+=il(s,e,n,l,r)}else if(l=H_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Mc(s,o++),a+=il(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ho(t,e,n){if(t==null)return t;var i=[],r=0;return il(t,i,"","",function(s){return e.call(n,s,r++)}),i}function X_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var fn={current:null},rl={transition:null},j_={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:rl,ReactCurrentOwner:pf};function hg(){throw Error("act(...) is not supported in production builds of React.")}Qe.Children={map:ho,forEach:function(t,e,n){ho(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ho(t,function(){e++}),e},toArray:function(t){return ho(t,function(e){return e})||[]},only:function(t){if(!mf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Qe.Component=js;Qe.Fragment=D_;Qe.Profiler=U_;Qe.PureComponent=ff;Qe.StrictMode=I_;Qe.Suspense=B_;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j_;Qe.act=hg;Qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=og({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=pf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)ug.call(e,l)&&!dg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:ro,type:t.type,key:r,ref:s,props:i,_owner:a}};Qe.createContext=function(t){return t={$$typeof:O_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:F_,_context:t},t.Consumer=t};Qe.createElement=fg;Qe.createFactory=function(t){var e=fg.bind(null,t);return e.type=t,e};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(t){return{$$typeof:k_,render:t}};Qe.isValidElement=mf;Qe.lazy=function(t){return{$$typeof:V_,_payload:{_status:-1,_result:t},_init:X_}};Qe.memo=function(t,e){return{$$typeof:z_,type:t,compare:e===void 0?null:e}};Qe.startTransition=function(t){var e=rl.transition;rl.transition={};try{t()}finally{rl.transition=e}};Qe.unstable_act=hg;Qe.useCallback=function(t,e){return fn.current.useCallback(t,e)};Qe.useContext=function(t){return fn.current.useContext(t)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(t){return fn.current.useDeferredValue(t)};Qe.useEffect=function(t,e){return fn.current.useEffect(t,e)};Qe.useId=function(){return fn.current.useId()};Qe.useImperativeHandle=function(t,e,n){return fn.current.useImperativeHandle(t,e,n)};Qe.useInsertionEffect=function(t,e){return fn.current.useInsertionEffect(t,e)};Qe.useLayoutEffect=function(t,e){return fn.current.useLayoutEffect(t,e)};Qe.useMemo=function(t,e){return fn.current.useMemo(t,e)};Qe.useReducer=function(t,e,n){return fn.current.useReducer(t,e,n)};Qe.useRef=function(t){return fn.current.useRef(t)};Qe.useState=function(t){return fn.current.useState(t)};Qe.useSyncExternalStore=function(t,e,n){return fn.current.useSyncExternalStore(t,e,n)};Qe.useTransition=function(){return fn.current.useTransition()};Qe.version="18.3.1";sg.exports=Qe;var Be=sg.exports;const q_=N_(Be);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_=Be,Y_=Symbol.for("react.element"),K_=Symbol.for("react.fragment"),Z_=Object.prototype.hasOwnProperty,J_=$_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Q_={key:!0,ref:!0,__self:!0,__source:!0};function pg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Z_.call(e,i)&&!Q_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Y_,type:t,key:s,ref:a,props:r,_owner:J_.current}}ec.Fragment=K_;ec.jsx=pg;ec.jsxs=pg;rg.exports=ec;var A=rg.exports,bu={},mg={exports:{}},bn={},gg={exports:{}},vg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(G,z){var R=G.length;G.push(z);e:for(;0<R;){var b=R-1>>>1,te=G[b];if(0<r(te,z))G[b]=z,G[R]=te,R=b;else break e}}function n(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var z=G[0],R=G.pop();if(R!==z){G[0]=R;e:for(var b=0,te=G.length,re=te>>>1;b<re;){var _e=2*(b+1)-1,he=G[_e],de=_e+1,B=G[de];if(0>r(he,R))de<te&&0>r(B,he)?(G[b]=B,G[de]=R,b=de):(G[b]=he,G[_e]=R,b=_e);else if(de<te&&0>r(B,R))G[b]=B,G[de]=R,b=de;else break e}}return z}function r(G,z){var R=G.sortIndex-z.sortIndex;return R!==0?R:G.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,h=null,d=3,p=!1,x=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(G){for(var z=n(c);z!==null;){if(z.callback===null)i(c);else if(z.startTime<=G)i(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function _(G){if(M=!1,y(G),!x)if(n(l)!==null)x=!0,J(T);else{var z=n(c);z!==null&&Z(_,z.startTime-G)}}function T(G,z){x=!1,M&&(M=!1,u(v),v=-1),p=!0;var R=d;try{for(y(z),h=n(l);h!==null&&(!(h.expirationTime>z)||G&&!U());){var b=h.callback;if(typeof b=="function"){h.callback=null,d=h.priorityLevel;var te=b(h.expirationTime<=z);z=t.unstable_now(),typeof te=="function"?h.callback=te:h===n(l)&&i(l),y(z)}else i(l);h=n(l)}if(h!==null)var re=!0;else{var _e=n(c);_e!==null&&Z(_,_e.startTime-z),re=!1}return re}finally{h=null,d=R,p=!1}}var w=!1,P=null,v=-1,C=5,L=-1;function U(){return!(t.unstable_now()-L<C)}function k(){if(P!==null){var G=t.unstable_now();L=G;var z=!0;try{z=P(!0,G)}finally{z?W():(w=!1,P=null)}}else w=!1}var W;if(typeof m=="function")W=function(){m(k)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,q=I.port2;I.port1.onmessage=k,W=function(){q.postMessage(null)}}else W=function(){g(k,0)};function J(G){P=G,w||(w=!0,W())}function Z(G,z){v=g(function(){G(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,J(T))},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<G?Math.floor(1e3/G):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(G){switch(d){case 1:case 2:case 3:var z=3;break;default:z=d}var R=d;d=z;try{return G()}finally{d=R}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(G,z){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var R=d;d=G;try{return z()}finally{d=R}},t.unstable_scheduleCallback=function(G,z,R){var b=t.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?b+R:b):R=b,G){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=R+te,G={id:f++,callback:z,priorityLevel:G,startTime:R,expirationTime:te,sortIndex:-1},R>b?(G.sortIndex=R,e(c,G),n(l)===null&&G===n(c)&&(M?(u(v),v=-1):M=!0,Z(_,R-b))):(G.sortIndex=te,e(l,G),x||p||(x=!0,J(T))),G},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(G){var z=d;return function(){var R=d;d=z;try{return G.apply(this,arguments)}finally{d=R}}}})(vg);gg.exports=vg;var ex=gg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tx=Be,Cn=ex;function le(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _g=new Set,Ia={};function Wr(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(Ia[t]=e,t=0;t<e.length;t++)_g.add(e[t])}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ru=Object.prototype.hasOwnProperty,nx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$h={},Yh={};function ix(t){return Ru.call(Yh,t)?!0:Ru.call($h,t)?!1:nx.test(t)?Yh[t]=!0:($h[t]=!0,!1)}function rx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sx(t,e,n,i){if(e===null||typeof e>"u"||rx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Kt[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Kt[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Kt[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Kt[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Kt[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Kt[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Kt[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Kt[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Kt[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var gf=/[\-:]([a-z])/g;function vf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gf,vf);Kt[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gf,vf);Kt[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gf,vf);Kt[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Kt[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Kt[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function _f(t,e,n,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sx(e,n,r,i)&&(n=null),i||r===null?ix(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var zi=tx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,po=Symbol.for("react.element"),ms=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),xf=Symbol.for("react.strict_mode"),Pu=Symbol.for("react.profiler"),xg=Symbol.for("react.provider"),Sg=Symbol.for("react.context"),Sf=Symbol.for("react.forward_ref"),Nu=Symbol.for("react.suspense"),Lu=Symbol.for("react.suspense_list"),yf=Symbol.for("react.memo"),Ki=Symbol.for("react.lazy"),yg=Symbol.for("react.offscreen"),Kh=Symbol.iterator;function Qs(t){return t===null||typeof t!="object"?null:(t=Kh&&t[Kh]||t["@@iterator"],typeof t=="function"?t:null)}var Rt=Object.assign,Ec;function ga(t){if(Ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ec=e&&e[1]||""}return`
`+Ec+t}var wc=!1;function Tc(t,e){if(!t||wc)return"";wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ga(t):""}function ax(t){switch(t.tag){case 5:return ga(t.type);case 16:return ga("Lazy");case 13:return ga("Suspense");case 19:return ga("SuspenseList");case 0:case 2:case 15:return t=Tc(t.type,!1),t;case 11:return t=Tc(t.type.render,!1),t;case 1:return t=Tc(t.type,!0),t;default:return""}}function Du(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gs:return"Fragment";case ms:return"Portal";case Pu:return"Profiler";case xf:return"StrictMode";case Nu:return"Suspense";case Lu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Sg:return(t.displayName||"Context")+".Consumer";case xg:return(t._context.displayName||"Context")+".Provider";case Sf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yf:return e=t.displayName||null,e!==null?e:Du(t.type)||"Memo";case Ki:e=t._payload,t=t._init;try{return Du(t(e))}catch{}}return null}function ox(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Du(e);case 8:return e===xf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lx(t){var e=Mg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function mo(t){t._valueTracker||(t._valueTracker=lx(t))}function Eg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Mg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Iu(t,e){var n=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wg(t,e){e=e.checked,e!=null&&_f(t,"checked",e,!1)}function Uu(t,e){wg(t,e);var n=fr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fu(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fu(t,e,n){(e!=="number"||yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var va=Array.isArray;function bs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ou(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(le(92));if(va(n)){if(1<n.length)throw Error(le(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function Tg(t,e){var n=fr(e.value),i=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ep(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ag(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ku(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ag(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var go,Cg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(go=go||document.createElement("div"),go.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=go.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ua(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cx=["Webkit","ms","Moz","O"];Object.keys(Ma).forEach(function(t){cx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ma[e]=Ma[t]})});function bg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ma.hasOwnProperty(t)&&Ma[t]?(""+e).trim():e+"px"}function Rg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=bg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ux=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bu(t,e){if(e){if(ux[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function zu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vu=null;function Mf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hu=null,Rs=null,Ps=null;function tp(t){if(t=oo(t)){if(typeof Hu!="function")throw Error(le(280));var e=t.stateNode;e&&(e=sc(e),Hu(t.stateNode,t.type,e))}}function Pg(t){Rs?Ps?Ps.push(t):Ps=[t]:Rs=t}function Ng(){if(Rs){var t=Rs,e=Ps;if(Ps=Rs=null,tp(t),e)for(t=0;t<e.length;t++)tp(e[t])}}function Lg(t,e){return t(e)}function Dg(){}var Ac=!1;function Ig(t,e,n){if(Ac)return t(e,n);Ac=!0;try{return Lg(t,e,n)}finally{Ac=!1,(Rs!==null||Ps!==null)&&(Dg(),Ng())}}function Fa(t,e){var n=t.stateNode;if(n===null)return null;var i=sc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(le(231,e,typeof n));return n}var Gu=!1;if(Ii)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){Gu=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{Gu=!1}function dx(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Ea=!1,Ml=null,El=!1,Wu=null,fx={onError:function(t){Ea=!0,Ml=t}};function hx(t,e,n,i,r,s,a,o,l){Ea=!1,Ml=null,dx.apply(fx,arguments)}function px(t,e,n,i,r,s,a,o,l){if(hx.apply(this,arguments),Ea){if(Ea){var c=Ml;Ea=!1,Ml=null}else throw Error(le(198));El||(El=!0,Wu=c)}}function Xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ug(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function np(t){if(Xr(t)!==t)throw Error(le(188))}function mx(t){var e=t.alternate;if(!e){if(e=Xr(t),e===null)throw Error(le(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return np(r),t;if(s===i)return np(r),e;s=s.sibling}throw Error(le(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(le(189))}}if(n.alternate!==i)throw Error(le(190))}if(n.tag!==3)throw Error(le(188));return n.stateNode.current===n?t:e}function Fg(t){return t=mx(t),t!==null?Og(t):null}function Og(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Og(t);if(e!==null)return e;t=t.sibling}return null}var kg=Cn.unstable_scheduleCallback,ip=Cn.unstable_cancelCallback,gx=Cn.unstable_shouldYield,vx=Cn.unstable_requestPaint,Dt=Cn.unstable_now,_x=Cn.unstable_getCurrentPriorityLevel,Ef=Cn.unstable_ImmediatePriority,Bg=Cn.unstable_UserBlockingPriority,wl=Cn.unstable_NormalPriority,xx=Cn.unstable_LowPriority,zg=Cn.unstable_IdlePriority,tc=null,fi=null;function Sx(t){if(fi&&typeof fi.onCommitFiberRoot=="function")try{fi.onCommitFiberRoot(tc,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:Ex,yx=Math.log,Mx=Math.LN2;function Ex(t){return t>>>=0,t===0?32:31-(yx(t)/Mx|0)|0}var vo=64,_o=4194304;function _a(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=_a(o):(s&=a,s!==0&&(i=_a(s)))}else a=n&~r,a!==0?i=_a(a):s!==0&&(i=_a(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Jn(e),r=1<<n,i|=t[n],e&=~r;return i}function wx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Jn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=wx(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Xu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Vg(){var t=vo;return vo<<=1,!(vo&4194240)&&(vo=64),t}function Cc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function so(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function Ax(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function wf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var pt=0;function Hg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gg,Tf,Wg,Xg,jg,ju=!1,xo=[],rr=null,sr=null,ar=null,Oa=new Map,ka=new Map,Qi=[],Cx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rp(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Oa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ka.delete(e.pointerId)}}function ta(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=oo(e),e!==null&&Tf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function bx(t,e,n,i,r){switch(e){case"focusin":return rr=ta(rr,t,e,n,i,r),!0;case"dragenter":return sr=ta(sr,t,e,n,i,r),!0;case"mouseover":return ar=ta(ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Oa.set(s,ta(Oa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ka.set(s,ta(ka.get(s)||null,t,e,n,i,r)),!0}return!1}function qg(t){var e=Cr(t.target);if(e!==null){var n=Xr(e);if(n!==null){if(e=n.tag,e===13){if(e=Ug(n),e!==null){t.blockedOn=e,jg(t.priority,function(){Wg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Vu=i,n.target.dispatchEvent(i),Vu=null}else return e=oo(n),e!==null&&Tf(e),t.blockedOn=n,!1;e.shift()}return!0}function sp(t,e,n){sl(t)&&n.delete(e)}function Rx(){ju=!1,rr!==null&&sl(rr)&&(rr=null),sr!==null&&sl(sr)&&(sr=null),ar!==null&&sl(ar)&&(ar=null),Oa.forEach(sp),ka.forEach(sp)}function na(t,e){t.blockedOn===e&&(t.blockedOn=null,ju||(ju=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,Rx)))}function Ba(t){function e(r){return na(r,t)}if(0<xo.length){na(xo[0],t);for(var n=1;n<xo.length;n++){var i=xo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(rr!==null&&na(rr,t),sr!==null&&na(sr,t),ar!==null&&na(ar,t),Oa.forEach(e),ka.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)qg(n),n.blockedOn===null&&Qi.shift()}var Ns=zi.ReactCurrentBatchConfig,Al=!0;function Px(t,e,n,i){var r=pt,s=Ns.transition;Ns.transition=null;try{pt=1,Af(t,e,n,i)}finally{pt=r,Ns.transition=s}}function Nx(t,e,n,i){var r=pt,s=Ns.transition;Ns.transition=null;try{pt=4,Af(t,e,n,i)}finally{pt=r,Ns.transition=s}}function Af(t,e,n,i){if(Al){var r=qu(t,e,n,i);if(r===null)Oc(t,e,i,Cl,n),rp(t,i);else if(bx(r,t,e,n,i))i.stopPropagation();else if(rp(t,i),e&4&&-1<Cx.indexOf(t)){for(;r!==null;){var s=oo(r);if(s!==null&&Gg(s),s=qu(t,e,n,i),s===null&&Oc(t,e,i,Cl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Oc(t,e,i,null,n)}}var Cl=null;function qu(t,e,n,i){if(Cl=null,t=Mf(i),t=Cr(t),t!==null)if(e=Xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ug(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cl=t,null}function $g(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_x()){case Ef:return 1;case Bg:return 4;case wl:case xx:return 16;case zg:return 536870912;default:return 16}default:return 16}}var nr=null,Cf=null,al=null;function Yg(){if(al)return al;var t,e=Cf,n=e.length,i,r="value"in nr?nr.value:nr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return al=r.slice(t,1<i?1-i:void 0)}function ol(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function So(){return!0}function ap(){return!1}function Rn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?So:ap,this.isPropagationStopped=ap,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),e}var qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bf=Rn(qs),ao=Rt({},qs,{view:0,detail:0}),Lx=Rn(ao),bc,Rc,ia,nc=Rt({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ia&&(ia&&t.type==="mousemove"?(bc=t.screenX-ia.screenX,Rc=t.screenY-ia.screenY):Rc=bc=0,ia=t),bc)},movementY:function(t){return"movementY"in t?t.movementY:Rc}}),op=Rn(nc),Dx=Rt({},nc,{dataTransfer:0}),Ix=Rn(Dx),Ux=Rt({},ao,{relatedTarget:0}),Pc=Rn(Ux),Fx=Rt({},qs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ox=Rn(Fx),kx=Rt({},qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bx=Rn(kx),zx=Rt({},qs,{data:0}),lp=Rn(zx),Vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Gx[t])?!!e[t]:!1}function Rf(){return Wx}var Xx=Rt({},ao,{key:function(t){if(t.key){var e=Vx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rf,charCode:function(t){return t.type==="keypress"?ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jx=Rn(Xx),qx=Rt({},nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cp=Rn(qx),$x=Rt({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rf}),Yx=Rn($x),Kx=Rt({},qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zx=Rn(Kx),Jx=Rt({},nc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qx=Rn(Jx),eS=[9,13,27,32],Pf=Ii&&"CompositionEvent"in window,wa=null;Ii&&"documentMode"in document&&(wa=document.documentMode);var tS=Ii&&"TextEvent"in window&&!wa,Kg=Ii&&(!Pf||wa&&8<wa&&11>=wa),up=" ",dp=!1;function Zg(t,e){switch(t){case"keyup":return eS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function nS(t,e){switch(t){case"compositionend":return Jg(e);case"keypress":return e.which!==32?null:(dp=!0,up);case"textInput":return t=e.data,t===up&&dp?null:t;default:return null}}function iS(t,e){if(vs)return t==="compositionend"||!Pf&&Zg(t,e)?(t=Yg(),al=Cf=nr=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kg&&e.locale!=="ko"?null:e.data;default:return null}}var rS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rS[t.type]:e==="textarea"}function Qg(t,e,n,i){Pg(i),e=bl(e,"onChange"),0<e.length&&(n=new bf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ta=null,za=null;function sS(t){u0(t,0)}function ic(t){var e=Ss(t);if(Eg(e))return t}function aS(t,e){if(t==="change")return e}var e0=!1;if(Ii){var Nc;if(Ii){var Lc="oninput"in document;if(!Lc){var hp=document.createElement("div");hp.setAttribute("oninput","return;"),Lc=typeof hp.oninput=="function"}Nc=Lc}else Nc=!1;e0=Nc&&(!document.documentMode||9<document.documentMode)}function pp(){Ta&&(Ta.detachEvent("onpropertychange",t0),za=Ta=null)}function t0(t){if(t.propertyName==="value"&&ic(za)){var e=[];Qg(e,za,t,Mf(t)),Ig(sS,e)}}function oS(t,e,n){t==="focusin"?(pp(),Ta=e,za=n,Ta.attachEvent("onpropertychange",t0)):t==="focusout"&&pp()}function lS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ic(za)}function cS(t,e){if(t==="click")return ic(e)}function uS(t,e){if(t==="input"||t==="change")return ic(e)}function dS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ti=typeof Object.is=="function"?Object.is:dS;function Va(t,e){if(ti(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ru.call(e,r)||!ti(t[r],e[r]))return!1}return!0}function mp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gp(t,e){var n=mp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mp(n)}}function n0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?n0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function i0(){for(var t=window,e=yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yl(t.document)}return e}function Nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fS(t){var e=i0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&n0(n.ownerDocument.documentElement,n)){if(i!==null&&Nf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=gp(n,s);var a=gp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hS=Ii&&"documentMode"in document&&11>=document.documentMode,_s=null,$u=null,Aa=null,Yu=!1;function vp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yu||_s==null||_s!==yl(i)||(i=_s,"selectionStart"in i&&Nf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Aa&&Va(Aa,i)||(Aa=i,i=bl($u,"onSelect"),0<i.length&&(e=new bf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=_s)))}function yo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xs={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},Dc={},r0={};Ii&&(r0=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function rc(t){if(Dc[t])return Dc[t];if(!xs[t])return t;var e=xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in r0)return Dc[t]=e[n];return t}var s0=rc("animationend"),a0=rc("animationiteration"),o0=rc("animationstart"),l0=rc("transitionend"),c0=new Map,_p="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(t,e){c0.set(t,e),Wr(e,[t])}for(var Ic=0;Ic<_p.length;Ic++){var Uc=_p[Ic],pS=Uc.toLowerCase(),mS=Uc[0].toUpperCase()+Uc.slice(1);mr(pS,"on"+mS)}mr(s0,"onAnimationEnd");mr(a0,"onAnimationIteration");mr(o0,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(l0,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);Wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gS=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function xp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,px(i,e,void 0,t),t.currentTarget=null}function u0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;xp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;xp(r,o,c),s=l}}}if(El)throw t=Wu,El=!1,Wu=null,t}function Mt(t,e){var n=e[ed];n===void 0&&(n=e[ed]=new Set);var i=t+"__bubble";n.has(i)||(d0(e,t,2,!1),n.add(i))}function Fc(t,e,n){var i=0;e&&(i|=4),d0(n,t,i,e)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function Ha(t){if(!t[Mo]){t[Mo]=!0,_g.forEach(function(n){n!=="selectionchange"&&(gS.has(n)||Fc(n,!1,t),Fc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mo]||(e[Mo]=!0,Fc("selectionchange",!1,e))}}function d0(t,e,n,i){switch($g(e)){case 1:var r=Px;break;case 4:r=Nx;break;default:r=Af}n=r.bind(null,e,n,t),r=void 0,!Gu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Oc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Cr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Ig(function(){var c=s,f=Mf(n),h=[];e:{var d=c0.get(t);if(d!==void 0){var p=bf,x=t;switch(t){case"keypress":if(ol(n)===0)break e;case"keydown":case"keyup":p=jx;break;case"focusin":x="focus",p=Pc;break;case"focusout":x="blur",p=Pc;break;case"beforeblur":case"afterblur":p=Pc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Ix;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Yx;break;case s0:case a0:case o0:p=Ox;break;case l0:p=Zx;break;case"scroll":p=Lx;break;case"wheel":p=Qx;break;case"copy":case"cut":case"paste":p=Bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=cp}var M=(e&4)!==0,g=!M&&t==="scroll",u=M?d!==null?d+"Capture":null:d;M=[];for(var m=c,y;m!==null;){y=m;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,u!==null&&(_=Fa(m,u),_!=null&&M.push(Ga(m,_,y)))),g)break;m=m.return}0<M.length&&(d=new p(d,x,null,n,f),h.push({event:d,listeners:M}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Vu&&(x=n.relatedTarget||n.fromElement)&&(Cr(x)||x[Ui]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Cr(x):null,x!==null&&(g=Xr(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(M=op,_="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(M=cp,_="onPointerLeave",u="onPointerEnter",m="pointer"),g=p==null?d:Ss(p),y=x==null?d:Ss(x),d=new M(_,m+"leave",p,n,f),d.target=g,d.relatedTarget=y,_=null,Cr(f)===c&&(M=new M(u,m+"enter",x,n,f),M.target=y,M.relatedTarget=g,_=M),g=_,p&&x)t:{for(M=p,u=x,m=0,y=M;y;y=Yr(y))m++;for(y=0,_=u;_;_=Yr(_))y++;for(;0<m-y;)M=Yr(M),m--;for(;0<y-m;)u=Yr(u),y--;for(;m--;){if(M===u||u!==null&&M===u.alternate)break t;M=Yr(M),u=Yr(u)}M=null}else M=null;p!==null&&Sp(h,d,p,M,!1),x!==null&&g!==null&&Sp(h,g,x,M,!0)}}e:{if(d=c?Ss(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=aS;else if(fp(d))if(e0)T=uS;else{T=lS;var w=oS}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=cS);if(T&&(T=T(t,c))){Qg(h,T,n,f);break e}w&&w(t,d,c),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&Fu(d,"number",d.value)}switch(w=c?Ss(c):window,t){case"focusin":(fp(w)||w.contentEditable==="true")&&(_s=w,$u=c,Aa=null);break;case"focusout":Aa=$u=_s=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,vp(h,n,f);break;case"selectionchange":if(hS)break;case"keydown":case"keyup":vp(h,n,f)}var P;if(Pf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else vs?Zg(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Kg&&n.locale!=="ko"&&(vs||v!=="onCompositionStart"?v==="onCompositionEnd"&&vs&&(P=Yg()):(nr=f,Cf="value"in nr?nr.value:nr.textContent,vs=!0)),w=bl(c,v),0<w.length&&(v=new lp(v,t,null,n,f),h.push({event:v,listeners:w}),P?v.data=P:(P=Jg(n),P!==null&&(v.data=P)))),(P=tS?nS(t,n):iS(t,n))&&(c=bl(c,"onBeforeInput"),0<c.length&&(f=new lp("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=P))}u0(h,e)})}function Ga(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Fa(t,n),s!=null&&i.unshift(Ga(t,s,r)),s=Fa(t,e),s!=null&&i.push(Ga(t,s,r))),t=t.return}return i}function Yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Fa(n,s),l!=null&&a.unshift(Ga(n,l,o))):r||(l=Fa(n,s),l!=null&&a.push(Ga(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var vS=/\r\n?/g,_S=/\u0000|\uFFFD/g;function yp(t){return(typeof t=="string"?t:""+t).replace(vS,`
`).replace(_S,"")}function Eo(t,e,n){if(e=yp(e),yp(t)!==e&&n)throw Error(le(425))}function Rl(){}var Ku=null,Zu=null;function Ju(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qu=typeof setTimeout=="function"?setTimeout:void 0,xS=typeof clearTimeout=="function"?clearTimeout:void 0,Mp=typeof Promise=="function"?Promise:void 0,SS=typeof queueMicrotask=="function"?queueMicrotask:typeof Mp<"u"?function(t){return Mp.resolve(null).then(t).catch(yS)}:Qu;function yS(t){setTimeout(function(){throw t})}function kc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ba(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ba(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ep(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $s=Math.random().toString(36).slice(2),ci="__reactFiber$"+$s,Wa="__reactProps$"+$s,Ui="__reactContainer$"+$s,ed="__reactEvents$"+$s,MS="__reactListeners$"+$s,ES="__reactHandles$"+$s;function Cr(t){var e=t[ci];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ui]||n[ci]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ep(t);t!==null;){if(n=t[ci])return n;t=Ep(t)}return e}t=n,n=t.parentNode}return null}function oo(t){return t=t[ci]||t[Ui],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(le(33))}function sc(t){return t[Wa]||null}var td=[],ys=-1;function gr(t){return{current:t}}function Et(t){0>ys||(t.current=td[ys],td[ys]=null,ys--)}function xt(t,e){ys++,td[ys]=t.current,t.current=e}var hr={},an=gr(hr),gn=gr(!1),Fr=hr;function ks(t,e){var n=t.type.contextTypes;if(!n)return hr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function vn(t){return t=t.childContextTypes,t!=null}function Pl(){Et(gn),Et(an)}function wp(t,e,n){if(an.current!==hr)throw Error(le(168));xt(an,e),xt(gn,n)}function f0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,ox(t)||"Unknown",r));return Rt({},n,i)}function Nl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,Fr=an.current,xt(an,t),xt(gn,gn.current),!0}function Tp(t,e,n){var i=t.stateNode;if(!i)throw Error(le(169));n?(t=f0(t,e,Fr),i.__reactInternalMemoizedMergedChildContext=t,Et(gn),Et(an),xt(an,t)):Et(gn),xt(gn,n)}var Ti=null,ac=!1,Bc=!1;function h0(t){Ti===null?Ti=[t]:Ti.push(t)}function wS(t){ac=!0,h0(t)}function vr(){if(!Bc&&Ti!==null){Bc=!0;var t=0,e=pt;try{var n=Ti;for(pt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ti=null,ac=!1}catch(r){throw Ti!==null&&(Ti=Ti.slice(t+1)),kg(Ef,vr),r}finally{pt=e,Bc=!1}}return null}var Ms=[],Es=0,Ll=null,Dl=0,Dn=[],In=0,Or=null,Ci=1,bi="";function Tr(t,e){Ms[Es++]=Dl,Ms[Es++]=Ll,Ll=t,Dl=e}function p0(t,e,n){Dn[In++]=Ci,Dn[In++]=bi,Dn[In++]=Or,Or=t;var i=Ci;t=bi;var r=32-Jn(i)-1;i&=~(1<<r),n+=1;var s=32-Jn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ci=1<<32-Jn(e)+r|n<<r|i,bi=s+t}else Ci=1<<s|n<<r|i,bi=t}function Lf(t){t.return!==null&&(Tr(t,1),p0(t,1,0))}function Df(t){for(;t===Ll;)Ll=Ms[--Es],Ms[Es]=null,Dl=Ms[--Es],Ms[Es]=null;for(;t===Or;)Or=Dn[--In],Dn[In]=null,bi=Dn[--In],Dn[In]=null,Ci=Dn[--In],Dn[In]=null}var An=null,Tn=null,wt=!1,Yn=null;function m0(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ap(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,An=t,Tn=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,An=t,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Or!==null?{id:Ci,overflow:bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,An=t,Tn=null,!0):!1;default:return!1}}function nd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function id(t){if(wt){var e=Tn;if(e){var n=e;if(!Ap(t,e)){if(nd(t))throw Error(le(418));e=or(n.nextSibling);var i=An;e&&Ap(t,e)?m0(i,n):(t.flags=t.flags&-4097|2,wt=!1,An=t)}}else{if(nd(t))throw Error(le(418));t.flags=t.flags&-4097|2,wt=!1,An=t}}}function Cp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;An=t}function wo(t){if(t!==An)return!1;if(!wt)return Cp(t),wt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ju(t.type,t.memoizedProps)),e&&(e=Tn)){if(nd(t))throw g0(),Error(le(418));for(;e;)m0(t,e),e=or(e.nextSibling)}if(Cp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(le(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tn=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tn=null}}else Tn=An?or(t.stateNode.nextSibling):null;return!0}function g0(){for(var t=Tn;t;)t=or(t.nextSibling)}function Bs(){Tn=An=null,wt=!1}function If(t){Yn===null?Yn=[t]:Yn.push(t)}var TS=zi.ReactCurrentBatchConfig;function ra(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(le(309));var i=n.stateNode}if(!i)throw Error(le(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(le(284));if(!n._owner)throw Error(le(290,t))}return t}function To(t,e){throw t=Object.prototype.toString.call(e),Error(le(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bp(t){var e=t._init;return e(t._payload)}function v0(t){function e(u,m){if(t){var y=u.deletions;y===null?(u.deletions=[m],u.flags|=16):y.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=dr(u,m),u.index=0,u.sibling=null,u}function s(u,m,y){return u.index=y,t?(y=u.alternate,y!==null?(y=y.index,y<m?(u.flags|=2,m):y):(u.flags|=2,m)):(u.flags|=1048576,m)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,m,y,_){return m===null||m.tag!==6?(m=jc(y,u.mode,_),m.return=u,m):(m=r(m,y),m.return=u,m)}function l(u,m,y,_){var T=y.type;return T===gs?f(u,m,y.props.children,_,y.key):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ki&&bp(T)===m.type)?(_=r(m,y.props),_.ref=ra(u,m,y),_.return=u,_):(_=pl(y.type,y.key,y.props,null,u.mode,_),_.ref=ra(u,m,y),_.return=u,_)}function c(u,m,y,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=qc(y,u.mode,_),m.return=u,m):(m=r(m,y.children||[]),m.return=u,m)}function f(u,m,y,_,T){return m===null||m.tag!==7?(m=Ir(y,u.mode,_,T),m.return=u,m):(m=r(m,y),m.return=u,m)}function h(u,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=jc(""+m,u.mode,y),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case po:return y=pl(m.type,m.key,m.props,null,u.mode,y),y.ref=ra(u,null,m),y.return=u,y;case ms:return m=qc(m,u.mode,y),m.return=u,m;case Ki:var _=m._init;return h(u,_(m._payload),y)}if(va(m)||Qs(m))return m=Ir(m,u.mode,y,null),m.return=u,m;To(u,m)}return null}function d(u,m,y,_){var T=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:o(u,m,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case po:return y.key===T?l(u,m,y,_):null;case ms:return y.key===T?c(u,m,y,_):null;case Ki:return T=y._init,d(u,m,T(y._payload),_)}if(va(y)||Qs(y))return T!==null?null:f(u,m,y,_,null);To(u,y)}return null}function p(u,m,y,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return u=u.get(y)||null,o(m,u,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case po:return u=u.get(_.key===null?y:_.key)||null,l(m,u,_,T);case ms:return u=u.get(_.key===null?y:_.key)||null,c(m,u,_,T);case Ki:var w=_._init;return p(u,m,y,w(_._payload),T)}if(va(_)||Qs(_))return u=u.get(y)||null,f(m,u,_,T,null);To(m,_)}return null}function x(u,m,y,_){for(var T=null,w=null,P=m,v=m=0,C=null;P!==null&&v<y.length;v++){P.index>v?(C=P,P=null):C=P.sibling;var L=d(u,P,y[v],_);if(L===null){P===null&&(P=C);break}t&&P&&L.alternate===null&&e(u,P),m=s(L,m,v),w===null?T=L:w.sibling=L,w=L,P=C}if(v===y.length)return n(u,P),wt&&Tr(u,v),T;if(P===null){for(;v<y.length;v++)P=h(u,y[v],_),P!==null&&(m=s(P,m,v),w===null?T=P:w.sibling=P,w=P);return wt&&Tr(u,v),T}for(P=i(u,P);v<y.length;v++)C=p(P,u,v,y[v],_),C!==null&&(t&&C.alternate!==null&&P.delete(C.key===null?v:C.key),m=s(C,m,v),w===null?T=C:w.sibling=C,w=C);return t&&P.forEach(function(U){return e(u,U)}),wt&&Tr(u,v),T}function M(u,m,y,_){var T=Qs(y);if(typeof T!="function")throw Error(le(150));if(y=T.call(y),y==null)throw Error(le(151));for(var w=T=null,P=m,v=m=0,C=null,L=y.next();P!==null&&!L.done;v++,L=y.next()){P.index>v?(C=P,P=null):C=P.sibling;var U=d(u,P,L.value,_);if(U===null){P===null&&(P=C);break}t&&P&&U.alternate===null&&e(u,P),m=s(U,m,v),w===null?T=U:w.sibling=U,w=U,P=C}if(L.done)return n(u,P),wt&&Tr(u,v),T;if(P===null){for(;!L.done;v++,L=y.next())L=h(u,L.value,_),L!==null&&(m=s(L,m,v),w===null?T=L:w.sibling=L,w=L);return wt&&Tr(u,v),T}for(P=i(u,P);!L.done;v++,L=y.next())L=p(P,u,v,L.value,_),L!==null&&(t&&L.alternate!==null&&P.delete(L.key===null?v:L.key),m=s(L,m,v),w===null?T=L:w.sibling=L,w=L);return t&&P.forEach(function(k){return e(u,k)}),wt&&Tr(u,v),T}function g(u,m,y,_){if(typeof y=="object"&&y!==null&&y.type===gs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case po:e:{for(var T=y.key,w=m;w!==null;){if(w.key===T){if(T=y.type,T===gs){if(w.tag===7){n(u,w.sibling),m=r(w,y.props.children),m.return=u,u=m;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ki&&bp(T)===w.type){n(u,w.sibling),m=r(w,y.props),m.ref=ra(u,w,y),m.return=u,u=m;break e}n(u,w);break}else e(u,w);w=w.sibling}y.type===gs?(m=Ir(y.props.children,u.mode,_,y.key),m.return=u,u=m):(_=pl(y.type,y.key,y.props,null,u.mode,_),_.ref=ra(u,m,y),_.return=u,u=_)}return a(u);case ms:e:{for(w=y.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(u,m.sibling),m=r(m,y.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=qc(y,u.mode,_),m.return=u,u=m}return a(u);case Ki:return w=y._init,g(u,m,w(y._payload),_)}if(va(y))return x(u,m,y,_);if(Qs(y))return M(u,m,y,_);To(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,y),m.return=u,u=m):(n(u,m),m=jc(y,u.mode,_),m.return=u,u=m),a(u)):n(u,m)}return g}var zs=v0(!0),_0=v0(!1),Il=gr(null),Ul=null,ws=null,Uf=null;function Ff(){Uf=ws=Ul=null}function Of(t){var e=Il.current;Et(Il),t._currentValue=e}function rd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){Ul=t,Uf=ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(Uf!==t)if(t={context:t,memoizedValue:e,next:null},ws===null){if(Ul===null)throw Error(le(308));ws=t,Ul.dependencies={lanes:0,firstContext:t}}else ws=ws.next=t;return e}var br=null;function kf(t){br===null?br=[t]:br.push(t)}function x0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,kf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Fi(t,i)}function Fi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zi=!1;function Bf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function S0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,lt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Fi(t,n)}return r=i.interleaved,r===null?(e.next=e,kf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Fi(t,n)}function ll(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,wf(t,n)}}function Rp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fl(t,e,n,i){var r=t.updateQueue;Zi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,f=c=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,M=o;switch(d=e,p=n,M.tag){case 1:if(x=M.payload,typeof x=="function"){h=x.call(p,h,d);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=M.payload,d=typeof x=="function"?x.call(p,h,d):x,d==null)break e;h=Rt({},h,d);break e;case 2:Zi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=p,l=h):f=f.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Br|=a,t.lanes=a,t.memoizedState=h}}function Pp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var lo={},hi=gr(lo),Xa=gr(lo),ja=gr(lo);function Rr(t){if(t===lo)throw Error(le(174));return t}function zf(t,e){switch(xt(ja,e),xt(Xa,t),xt(hi,lo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ku(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ku(e,t)}Et(hi),xt(hi,e)}function Vs(){Et(hi),Et(Xa),Et(ja)}function y0(t){Rr(ja.current);var e=Rr(hi.current),n=ku(e,t.type);e!==n&&(xt(Xa,t),xt(hi,n))}function Vf(t){Xa.current===t&&(Et(hi),Et(Xa))}var At=gr(0);function Ol(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zc=[];function Hf(){for(var t=0;t<zc.length;t++)zc[t]._workInProgressVersionPrimary=null;zc.length=0}var cl=zi.ReactCurrentDispatcher,Vc=zi.ReactCurrentBatchConfig,kr=0,bt=null,Bt=null,Wt=null,kl=!1,Ca=!1,qa=0,AS=0;function Jt(){throw Error(le(321))}function Gf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ti(t[n],e[n]))return!1;return!0}function Wf(t,e,n,i,r,s){if(kr=s,bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cl.current=t===null||t.memoizedState===null?PS:NS,t=n(i,r),Ca){s=0;do{if(Ca=!1,qa=0,25<=s)throw Error(le(301));s+=1,Wt=Bt=null,e.updateQueue=null,cl.current=LS,t=n(i,r)}while(Ca)}if(cl.current=Bl,e=Bt!==null&&Bt.next!==null,kr=0,Wt=Bt=bt=null,kl=!1,e)throw Error(le(300));return t}function Xf(){var t=qa!==0;return qa=0,t}function oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?bt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function zn(){if(Bt===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=Wt===null?bt.memoizedState:Wt.next;if(e!==null)Wt=e,Bt=t;else{if(t===null)throw Error(le(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},Wt===null?bt.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function $a(t,e){return typeof e=="function"?e(t):e}function Hc(t){var e=zn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=Bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((kr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,bt.lanes|=f,Br|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ti(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,bt.lanes|=s,Br|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gc(t){var e=zn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ti(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function M0(){}function E0(t,e){var n=bt,i=zn(),r=e(),s=!ti(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,jf(A0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,Ya(9,T0.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(le(349));kr&30||w0(n,e,r)}return r}function w0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function T0(t,e,n,i){e.value=n,e.getSnapshot=i,C0(e)&&b0(t)}function A0(t,e,n){return n(function(){C0(e)&&b0(t)})}function C0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ti(t,n)}catch{return!0}}function b0(t){var e=Fi(t,1);e!==null&&Qn(e,t,1,-1)}function Np(t){var e=oi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:t},e.queue=t,t=t.dispatch=RS.bind(null,bt,t),[e.memoizedState,t]}function Ya(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function R0(){return zn().memoizedState}function ul(t,e,n,i){var r=oi();bt.flags|=t,r.memoizedState=Ya(1|e,n,void 0,i===void 0?null:i)}function oc(t,e,n,i){var r=zn();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var a=Bt.memoizedState;if(s=a.destroy,i!==null&&Gf(i,a.deps)){r.memoizedState=Ya(e,n,s,i);return}}bt.flags|=t,r.memoizedState=Ya(1|e,n,s,i)}function Lp(t,e){return ul(8390656,8,t,e)}function jf(t,e){return oc(2048,8,t,e)}function P0(t,e){return oc(4,2,t,e)}function N0(t,e){return oc(4,4,t,e)}function L0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function D0(t,e,n){return n=n!=null?n.concat([t]):null,oc(4,4,L0.bind(null,e,t),n)}function qf(){}function I0(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Gf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function U0(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Gf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function F0(t,e,n){return kr&21?(ti(n,e)||(n=Vg(),bt.lanes|=n,Br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function CS(t,e){var n=pt;pt=n!==0&&4>n?n:4,t(!0);var i=Vc.transition;Vc.transition={};try{t(!1),e()}finally{pt=n,Vc.transition=i}}function O0(){return zn().memoizedState}function bS(t,e,n){var i=ur(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},k0(t))B0(e,n);else if(n=x0(t,e,n,i),n!==null){var r=dn();Qn(n,t,i,r),z0(n,e,i)}}function RS(t,e,n){var i=ur(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(k0(t))B0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ti(o,a)){var l=e.interleaved;l===null?(r.next=r,kf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=x0(t,e,r,i),n!==null&&(r=dn(),Qn(n,t,i,r),z0(n,e,i))}}function k0(t){var e=t.alternate;return t===bt||e!==null&&e===bt}function B0(t,e){Ca=kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function z0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,wf(t,n)}}var Bl={readContext:Bn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},PS={readContext:Bn,useCallback:function(t,e){return oi().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:Lp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ul(4194308,4,L0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ul(4194308,4,t,e)},useInsertionEffect:function(t,e){return ul(4,2,t,e)},useMemo:function(t,e){var n=oi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=oi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=bS.bind(null,bt,t),[i.memoizedState,t]},useRef:function(t){var e=oi();return t={current:t},e.memoizedState=t},useState:Np,useDebugValue:qf,useDeferredValue:function(t){return oi().memoizedState=t},useTransition:function(){var t=Np(!1),e=t[0];return t=CS.bind(null,t[1]),oi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=bt,r=oi();if(wt){if(n===void 0)throw Error(le(407));n=n()}else{if(n=e(),Xt===null)throw Error(le(349));kr&30||w0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Lp(A0.bind(null,i,s,t),[t]),i.flags|=2048,Ya(9,T0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=oi(),e=Xt.identifierPrefix;if(wt){var n=bi,i=Ci;n=(i&~(1<<32-Jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=qa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=AS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},NS={readContext:Bn,useCallback:I0,useContext:Bn,useEffect:jf,useImperativeHandle:D0,useInsertionEffect:P0,useLayoutEffect:N0,useMemo:U0,useReducer:Hc,useRef:R0,useState:function(){return Hc($a)},useDebugValue:qf,useDeferredValue:function(t){var e=zn();return F0(e,Bt.memoizedState,t)},useTransition:function(){var t=Hc($a)[0],e=zn().memoizedState;return[t,e]},useMutableSource:M0,useSyncExternalStore:E0,useId:O0,unstable_isNewReconciler:!1},LS={readContext:Bn,useCallback:I0,useContext:Bn,useEffect:jf,useImperativeHandle:D0,useInsertionEffect:P0,useLayoutEffect:N0,useMemo:U0,useReducer:Gc,useRef:R0,useState:function(){return Gc($a)},useDebugValue:qf,useDeferredValue:function(t){var e=zn();return Bt===null?e.memoizedState=t:F0(e,Bt.memoizedState,t)},useTransition:function(){var t=Gc($a)[0],e=zn().memoizedState;return[t,e]},useMutableSource:M0,useSyncExternalStore:E0,useId:O0,unstable_isNewReconciler:!1};function qn(t,e){if(t&&t.defaultProps){e=Rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function sd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lc={isMounted:function(t){return(t=t._reactInternals)?Xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=dn(),r=ur(t),s=Pi(i,r);s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(Qn(e,t,r,i),ll(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=dn(),r=ur(t),s=Pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(Qn(e,t,r,i),ll(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dn(),i=ur(t),r=Pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=lr(t,r,i),e!==null&&(Qn(e,t,i,n),ll(e,t,i))}};function Dp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Va(n,i)||!Va(r,s):!0}function V0(t,e,n){var i=!1,r=hr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bn(s):(r=vn(e)?Fr:an.current,i=e.contextTypes,s=(i=i!=null)?ks(t,r):hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ip(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&lc.enqueueReplaceState(e,e.state,null)}function ad(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Bf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Bn(s):(s=vn(e)?Fr:an.current,r.context=ks(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&lc.enqueueReplaceState(r,r.state,null),Fl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e){try{var n="",i=e;do n+=ax(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Wc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function od(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var DS=typeof WeakMap=="function"?WeakMap:Map;function H0(t,e,n){n=Pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Vl||(Vl=!0,vd=i),od(t,e)},n}function G0(t,e,n){n=Pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){od(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){od(t,e),typeof i!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Up(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new DS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=qS.bind(null,t,e,n),e.then(t,t))}function Fp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Op(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pi(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var IS=zi.ReactCurrentOwner,mn=!1;function un(t,e,n,i){e.child=t===null?_0(e,null,n,i):zs(e,t.child,n,i)}function kp(t,e,n,i,r){n=n.render;var s=e.ref;return Ls(e,r),i=Wf(t,e,n,i,s,r),n=Xf(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Oi(t,e,r)):(wt&&n&&Lf(e),e.flags|=1,un(t,e,i,r),e.child)}function Bp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!th(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,W0(t,e,s,i,r)):(t=pl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Va,n(a,i)&&t.ref===e.ref)return Oi(t,e,r)}return e.flags|=1,t=dr(s,i),t.ref=e.ref,t.return=e,e.child=t}function W0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Va(s,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,Oi(t,e,r)}return ld(t,e,n,i,r)}function X0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(As,En),En|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xt(As,En),En|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,xt(As,En),En|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,xt(As,En),En|=i;return un(t,e,r,n),e.child}function j0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ld(t,e,n,i,r){var s=vn(n)?Fr:an.current;return s=ks(e,s),Ls(e,r),n=Wf(t,e,n,i,s,r),i=Xf(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Oi(t,e,r)):(wt&&i&&Lf(e),e.flags|=1,un(t,e,n,r),e.child)}function zp(t,e,n,i,r){if(vn(n)){var s=!0;Nl(e)}else s=!1;if(Ls(e,r),e.stateNode===null)dl(t,e),V0(e,n,i),ad(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bn(c):(c=vn(n)?Fr:an.current,c=ks(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Ip(e,a,i,c),Zi=!1;var d=e.memoizedState;a.state=d,Fl(e,i,a,r),l=e.memoizedState,o!==i||d!==l||gn.current||Zi?(typeof f=="function"&&(sd(e,n,f,i),l=e.memoizedState),(o=Zi||Dp(e,n,o,i,d,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,S0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:qn(e.type,o),a.props=c,h=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=vn(n)?Fr:an.current,l=ks(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&Ip(e,a,i,l),Zi=!1,d=e.memoizedState,a.state=d,Fl(e,i,a,r);var x=e.memoizedState;o!==h||d!==x||gn.current||Zi?(typeof p=="function"&&(sd(e,n,p,i),x=e.memoizedState),(c=Zi||Dp(e,n,c,i,d,x,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return cd(t,e,n,i,s,r)}function cd(t,e,n,i,r,s){j0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Tp(e,n,!1),Oi(t,e,s);i=e.stateNode,IS.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=zs(e,t.child,null,s),e.child=zs(e,null,o,s)):un(t,e,o,s),e.memoizedState=i.state,r&&Tp(e,n,!0),e.child}function q0(t){var e=t.stateNode;e.pendingContext?wp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wp(t,e.context,!1),zf(t,e.containerInfo)}function Vp(t,e,n,i,r){return Bs(),If(r),e.flags|=256,un(t,e,n,i),e.child}var ud={dehydrated:null,treeContext:null,retryLane:0};function dd(t){return{baseLanes:t,cachePool:null,transitions:null}}function $0(t,e,n){var i=e.pendingProps,r=At.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),xt(At,r&1),t===null)return id(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=dc(a,i,0,null),t=Ir(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=dd(n),e.memoizedState=ud,t):$f(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return US(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=dr(o,s):(s=Ir(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?dd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=ud,i}return s=t.child,t=s.sibling,i=dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function $f(t,e){return e=dc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ao(t,e,n,i){return i!==null&&If(i),zs(e,t.child,null,n),t=$f(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function US(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Wc(Error(le(422))),Ao(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=dc({mode:"visible",children:i.children},r,0,null),s=Ir(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zs(e,t.child,null,a),e.child.memoizedState=dd(a),e.memoizedState=ud,s);if(!(e.mode&1))return Ao(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(le(419)),i=Wc(s,i,void 0),Ao(t,e,a,i)}if(o=(a&t.childLanes)!==0,mn||o){if(i=Xt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Fi(t,r),Qn(i,t,r,-1))}return eh(),i=Wc(Error(le(421))),Ao(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=$S.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Tn=or(r.nextSibling),An=e,wt=!0,Yn=null,t!==null&&(Dn[In++]=Ci,Dn[In++]=bi,Dn[In++]=Or,Ci=t.id,bi=t.overflow,Or=e),e=$f(e,i.children),e.flags|=4096,e)}function Hp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),rd(t.return,e,n)}function Xc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Y0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(un(t,e,i.children,n),i=At.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hp(t,n,e);else if(t.tag===19)Hp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(xt(At,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ol(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Xc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ol(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Xc(e,!0,n,null,s);break;case"together":Xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function dl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Oi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(le(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function FS(t,e,n){switch(e.tag){case 3:q0(e),Bs();break;case 5:y0(e);break;case 1:vn(e.type)&&Nl(e);break;case 4:zf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(Il,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(At,At.current&1),e.flags|=128,null):n&e.child.childLanes?$0(t,e,n):(xt(At,At.current&1),t=Oi(t,e,n),t!==null?t.sibling:null);xt(At,At.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Y0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(At,At.current),i)break;return null;case 22:case 23:return e.lanes=0,X0(t,e,n)}return Oi(t,e,n)}var K0,fd,Z0,J0;K0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fd=function(){};Z0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Rr(hi.current);var s=null;switch(n){case"input":r=Iu(t,r),i=Iu(t,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=Ou(t,r),i=Ou(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Rl)}Bu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ia.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ia.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Mt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};J0=function(t,e,n,i){n!==i&&(e.flags|=4)};function sa(t,e){if(!wt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function OS(t,e,n){var i=e.pendingProps;switch(Df(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return vn(e.type)&&Pl(),Qt(e),null;case 3:return i=e.stateNode,Vs(),Et(gn),Et(an),Hf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(wo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(Sd(Yn),Yn=null))),fd(t,e),Qt(e),null;case 5:Vf(e);var r=Rr(ja.current);if(n=e.type,t!==null&&e.stateNode!=null)Z0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return Qt(e),null}if(t=Rr(hi.current),wo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ci]=e,i[Wa]=s,t=(e.mode&1)!==0,n){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(r=0;r<xa.length;r++)Mt(xa[r],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Zh(i,s),Mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Mt("invalid",i);break;case"textarea":Qh(i,s),Mt("invalid",i)}Bu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Eo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Eo(i.textContent,o,t),r=["children",""+o]):Ia.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&Mt("scroll",i)}switch(n){case"input":mo(i),Jh(i,s,!0);break;case"textarea":mo(i),ep(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Rl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ag(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ci]=e,t[Wa]=i,K0(t,e,!1,!1),e.stateNode=t;e:{switch(a=zu(n,i),n){case"dialog":Mt("cancel",t),Mt("close",t),r=i;break;case"iframe":case"object":case"embed":Mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<xa.length;r++)Mt(xa[r],t);r=i;break;case"source":Mt("error",t),r=i;break;case"img":case"image":case"link":Mt("error",t),Mt("load",t),r=i;break;case"details":Mt("toggle",t),r=i;break;case"input":Zh(t,i),r=Iu(t,i),Mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),Mt("invalid",t);break;case"textarea":Qh(t,i),r=Ou(t,i),Mt("invalid",t);break;default:r=i}Bu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Rg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Cg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ua(t,l):typeof l=="number"&&Ua(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ia.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Mt("scroll",t):l!=null&&_f(t,s,l,a))}switch(n){case"input":mo(t),Jh(t,i,!1);break;case"textarea":mo(t),ep(t);break;case"option":i.value!=null&&t.setAttribute("value",""+fr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?bs(t,!!i.multiple,s,!1):i.defaultValue!=null&&bs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Rl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(t&&e.stateNode!=null)J0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(n=Rr(ja.current),Rr(hi.current),wo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ci]=e,(s=i.nodeValue!==n)&&(t=An,t!==null))switch(t.tag){case 3:Eo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Eo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ci]=e,e.stateNode=i}return Qt(e),null;case 13:if(Et(At),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(wt&&Tn!==null&&e.mode&1&&!(e.flags&128))g0(),Bs(),e.flags|=98560,s=!1;else if(s=wo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(le(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(le(317));s[ci]=e}else Bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),s=!1}else Yn!==null&&(Sd(Yn),Yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||At.current&1?zt===0&&(zt=3):eh())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return Vs(),fd(t,e),t===null&&Ha(e.stateNode.containerInfo),Qt(e),null;case 10:return Of(e.type._context),Qt(e),null;case 17:return vn(e.type)&&Pl(),Qt(e),null;case 19:if(Et(At),s=e.memoizedState,s===null)return Qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)sa(s,!1);else{if(zt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Ol(t),a!==null){for(e.flags|=128,sa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xt(At,At.current&1|2),e.child}t=t.sibling}s.tail!==null&&Dt()>Gs&&(e.flags|=128,i=!0,sa(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ol(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),sa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!wt)return Qt(e),null}else 2*Dt()-s.renderingStartTime>Gs&&n!==1073741824&&(e.flags|=128,i=!0,sa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Dt(),e.sibling=null,n=At.current,xt(At,i?n&1|2:n&1),e):(Qt(e),null);case 22:case 23:return Qf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?En&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function kS(t,e){switch(Df(e),e.tag){case 1:return vn(e.type)&&Pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vs(),Et(gn),Et(an),Hf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Vf(e),null;case 13:if(Et(At),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(le(340));Bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Et(At),null;case 4:return Vs(),null;case 10:return Of(e.type._context),null;case 22:case 23:return Qf(),null;case 24:return null;default:return null}}var Co=!1,nn=!1,BS=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function Ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Nt(t,e,i)}else n.current=null}function hd(t,e,n){try{n()}catch(i){Nt(t,e,i)}}var Gp=!1;function zS(t,e){if(Ku=Al,t=i0(),Nf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++f===i&&(l=a),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zu={focusedElem:t,selectionRange:n},Al=!1,Pe=e;Pe!==null;)if(e=Pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Pe=t;else for(;Pe!==null;){e=Pe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var M=x.memoizedProps,g=x.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?M:qn(e.type,M),g);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(_){Nt(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,Pe=t;break}Pe=e.return}return x=Gp,Gp=!1,x}function ba(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&hd(e,n,s)}r=r.next}while(r!==i)}}function cc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function pd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Q0(t){var e=t.alternate;e!==null&&(t.alternate=null,Q0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ci],delete e[Wa],delete e[ed],delete e[MS],delete e[ES])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ev(t){return t.tag===5||t.tag===3||t.tag===4}function Wp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ev(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Rl));else if(i!==4&&(t=t.child,t!==null))for(md(t,e,n),t=t.sibling;t!==null;)md(t,e,n),t=t.sibling}function gd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(gd(t,e,n),t=t.sibling;t!==null;)gd(t,e,n),t=t.sibling}var jt=null,$n=!1;function Wi(t,e,n){for(n=n.child;n!==null;)tv(t,e,n),n=n.sibling}function tv(t,e,n){if(fi&&typeof fi.onCommitFiberUnmount=="function")try{fi.onCommitFiberUnmount(tc,n)}catch{}switch(n.tag){case 5:nn||Ts(n,e);case 6:var i=jt,r=$n;jt=null,Wi(t,e,n),jt=i,$n=r,jt!==null&&($n?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&($n?(t=jt,n=n.stateNode,t.nodeType===8?kc(t.parentNode,n):t.nodeType===1&&kc(t,n),Ba(t)):kc(jt,n.stateNode));break;case 4:i=jt,r=$n,jt=n.stateNode.containerInfo,$n=!0,Wi(t,e,n),jt=i,$n=r;break;case 0:case 11:case 14:case 15:if(!nn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&hd(n,e,a),r=r.next}while(r!==i)}Wi(t,e,n);break;case 1:if(!nn&&(Ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Nt(n,e,o)}Wi(t,e,n);break;case 21:Wi(t,e,n);break;case 22:n.mode&1?(nn=(i=nn)||n.memoizedState!==null,Wi(t,e,n),nn=i):Wi(t,e,n);break;default:Wi(t,e,n)}}function Xp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new BS),e.forEach(function(i){var r=YS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:jt=o.stateNode,$n=!1;break e;case 3:jt=o.stateNode.containerInfo,$n=!0;break e;case 4:jt=o.stateNode.containerInfo,$n=!0;break e}o=o.return}if(jt===null)throw Error(le(160));tv(s,a,r),jt=null,$n=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Nt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)nv(e,t),e=e.sibling}function nv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),ri(t),i&4){try{ba(3,t,t.return),cc(3,t)}catch(M){Nt(t,t.return,M)}try{ba(5,t,t.return)}catch(M){Nt(t,t.return,M)}}break;case 1:Hn(e,t),ri(t),i&512&&n!==null&&Ts(n,n.return);break;case 5:if(Hn(e,t),ri(t),i&512&&n!==null&&Ts(n,n.return),t.flags&32){var r=t.stateNode;try{Ua(r,"")}catch(M){Nt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&wg(r,s),zu(o,a);var c=zu(o,s);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?Rg(r,h):f==="dangerouslySetInnerHTML"?Cg(r,h):f==="children"?Ua(r,h):_f(r,f,h,c)}switch(o){case"input":Uu(r,s);break;case"textarea":Tg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?bs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?bs(r,!!s.multiple,s.defaultValue,!0):bs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Wa]=s}catch(M){Nt(t,t.return,M)}}break;case 6:if(Hn(e,t),ri(t),i&4){if(t.stateNode===null)throw Error(le(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Nt(t,t.return,M)}}break;case 3:if(Hn(e,t),ri(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ba(e.containerInfo)}catch(M){Nt(t,t.return,M)}break;case 4:Hn(e,t),ri(t);break;case 13:Hn(e,t),ri(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Zf=Dt())),i&4&&Xp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(nn=(c=nn)||f,Hn(e,t),nn=c):Hn(e,t),ri(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Pe=t,f=t.child;f!==null;){for(h=Pe=f;Pe!==null;){switch(d=Pe,p=d.child,d.tag){case 0:case 11:case 14:case 15:ba(4,d,d.return);break;case 1:Ts(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(M){Nt(i,n,M)}}break;case 5:Ts(d,d.return);break;case 22:if(d.memoizedState!==null){qp(h);continue}}p!==null?(p.return=d,Pe=p):qp(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=bg("display",a))}catch(M){Nt(t,t.return,M)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(M){Nt(t,t.return,M)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Hn(e,t),ri(t),i&4&&Xp(t);break;case 21:break;default:Hn(e,t),ri(t)}}function ri(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ev(n)){var i=n;break e}n=n.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ua(r,""),i.flags&=-33);var s=Wp(t);gd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Wp(t);md(t,o,a);break;default:throw Error(le(161))}}catch(l){Nt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function VS(t,e,n){Pe=t,iv(t)}function iv(t,e,n){for(var i=(t.mode&1)!==0;Pe!==null;){var r=Pe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Co;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||nn;o=Co;var c=nn;if(Co=a,(nn=l)&&!c)for(Pe=r;Pe!==null;)a=Pe,l=a.child,a.tag===22&&a.memoizedState!==null?$p(r):l!==null?(l.return=a,Pe=l):$p(r);for(;s!==null;)Pe=s,iv(s),s=s.sibling;Pe=r,Co=o,nn=c}jp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Pe=s):jp(t)}}function jp(t){for(;Pe!==null;){var e=Pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||cc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!nn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Pp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Pp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Ba(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}nn||e.flags&512&&pd(e)}catch(d){Nt(e,e.return,d)}}if(e===t){Pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function qp(t){for(;Pe!==null;){var e=Pe;if(e===t){Pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function $p(t){for(;Pe!==null;){var e=Pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cc(4,e)}catch(l){Nt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Nt(e,r,l)}}var s=e.return;try{pd(e)}catch(l){Nt(e,s,l)}break;case 5:var a=e.return;try{pd(e)}catch(l){Nt(e,a,l)}}}catch(l){Nt(e,e.return,l)}if(e===t){Pe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Pe=o;break}Pe=e.return}}var HS=Math.ceil,zl=zi.ReactCurrentDispatcher,Yf=zi.ReactCurrentOwner,kn=zi.ReactCurrentBatchConfig,lt=0,Xt=null,Ot=null,$t=0,En=0,As=gr(0),zt=0,Ka=null,Br=0,uc=0,Kf=0,Ra=null,pn=null,Zf=0,Gs=1/0,wi=null,Vl=!1,vd=null,cr=null,bo=!1,ir=null,Hl=0,Pa=0,_d=null,fl=-1,hl=0;function dn(){return lt&6?Dt():fl!==-1?fl:fl=Dt()}function ur(t){return t.mode&1?lt&2&&$t!==0?$t&-$t:TS.transition!==null?(hl===0&&(hl=Vg()),hl):(t=pt,t!==0||(t=window.event,t=t===void 0?16:$g(t.type)),t):1}function Qn(t,e,n,i){if(50<Pa)throw Pa=0,_d=null,Error(le(185));so(t,n,i),(!(lt&2)||t!==Xt)&&(t===Xt&&(!(lt&2)&&(uc|=n),zt===4&&er(t,$t)),_n(t,i),n===1&&lt===0&&!(e.mode&1)&&(Gs=Dt()+500,ac&&vr()))}function _n(t,e){var n=t.callbackNode;Tx(t,e);var i=Tl(t,t===Xt?$t:0);if(i===0)n!==null&&ip(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ip(n),e===1)t.tag===0?wS(Yp.bind(null,t)):h0(Yp.bind(null,t)),SS(function(){!(lt&6)&&vr()}),n=null;else{switch(Hg(i)){case 1:n=Ef;break;case 4:n=Bg;break;case 16:n=wl;break;case 536870912:n=zg;break;default:n=wl}n=dv(n,rv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rv(t,e){if(fl=-1,hl=0,lt&6)throw Error(le(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var i=Tl(t,t===Xt?$t:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Gl(t,i);else{e=i;var r=lt;lt|=2;var s=av();(Xt!==t||$t!==e)&&(wi=null,Gs=Dt()+500,Dr(t,e));do try{XS();break}catch(o){sv(t,o)}while(!0);Ff(),zl.current=s,lt=r,Ot!==null?e=0:(Xt=null,$t=0,e=zt)}if(e!==0){if(e===2&&(r=Xu(t),r!==0&&(i=r,e=xd(t,r))),e===1)throw n=Ka,Dr(t,0),er(t,i),_n(t,Dt()),n;if(e===6)er(t,i);else{if(r=t.current.alternate,!(i&30)&&!GS(r)&&(e=Gl(t,i),e===2&&(s=Xu(t),s!==0&&(i=s,e=xd(t,s))),e===1))throw n=Ka,Dr(t,0),er(t,i),_n(t,Dt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:Ar(t,pn,wi);break;case 3:if(er(t,i),(i&130023424)===i&&(e=Zf+500-Dt(),10<e)){if(Tl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){dn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Qu(Ar.bind(null,t,pn,wi),e);break}Ar(t,pn,wi);break;case 4:if(er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Jn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*HS(i/1960))-i,10<i){t.timeoutHandle=Qu(Ar.bind(null,t,pn,wi),i);break}Ar(t,pn,wi);break;case 5:Ar(t,pn,wi);break;default:throw Error(le(329))}}}return _n(t,Dt()),t.callbackNode===n?rv.bind(null,t):null}function xd(t,e){var n=Ra;return t.current.memoizedState.isDehydrated&&(Dr(t,e).flags|=256),t=Gl(t,e),t!==2&&(e=pn,pn=n,e!==null&&Sd(e)),t}function Sd(t){pn===null?pn=t:pn.push.apply(pn,t)}function GS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ti(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~Kf,e&=~uc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),i=1<<n;t[n]=-1,e&=~i}}function Yp(t){if(lt&6)throw Error(le(327));Ds();var e=Tl(t,0);if(!(e&1))return _n(t,Dt()),null;var n=Gl(t,e);if(t.tag!==0&&n===2){var i=Xu(t);i!==0&&(e=i,n=xd(t,i))}if(n===1)throw n=Ka,Dr(t,0),er(t,e),_n(t,Dt()),n;if(n===6)throw Error(le(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,pn,wi),_n(t,Dt()),null}function Jf(t,e){var n=lt;lt|=1;try{return t(e)}finally{lt=n,lt===0&&(Gs=Dt()+500,ac&&vr())}}function zr(t){ir!==null&&ir.tag===0&&!(lt&6)&&Ds();var e=lt;lt|=1;var n=kn.transition,i=pt;try{if(kn.transition=null,pt=1,t)return t()}finally{pt=i,kn.transition=n,lt=e,!(lt&6)&&vr()}}function Qf(){En=As.current,Et(As)}function Dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xS(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(Df(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Pl();break;case 3:Vs(),Et(gn),Et(an),Hf();break;case 5:Vf(i);break;case 4:Vs();break;case 13:Et(At);break;case 19:Et(At);break;case 10:Of(i.type._context);break;case 22:case 23:Qf()}n=n.return}if(Xt=t,Ot=t=dr(t.current,null),$t=En=e,zt=0,Ka=null,Kf=uc=Br=0,pn=Ra=null,br!==null){for(e=0;e<br.length;e++)if(n=br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}br=null}return t}function sv(t,e){do{var n=Ot;try{if(Ff(),cl.current=Bl,kl){for(var i=bt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}kl=!1}if(kr=0,Wt=Bt=bt=null,Ca=!1,qa=0,Yf.current=null,n===null||n.return===null){zt=1,Ka=e,Ot=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=$t,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Fp(a);if(p!==null){p.flags&=-257,Op(p,a,o,s,e),p.mode&1&&Up(s,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var M=new Set;M.add(l),e.updateQueue=M}else x.add(l);break e}else{if(!(e&1)){Up(s,c,e),eh();break e}l=Error(le(426))}}else if(wt&&o.mode&1){var g=Fp(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Op(g,a,o,s,e),If(Hs(l,o));break e}}s=l=Hs(l,o),zt!==4&&(zt=2),Ra===null?Ra=[s]:Ra.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=H0(s,l,e);Rp(s,u);break e;case 1:o=l;var m=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(cr===null||!cr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=G0(s,o,e);Rp(s,_);break e}}s=s.return}while(s!==null)}lv(n)}catch(T){e=T,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(!0)}function av(){var t=zl.current;return zl.current=Bl,t===null?Bl:t}function eh(){(zt===0||zt===3||zt===2)&&(zt=4),Xt===null||!(Br&268435455)&&!(uc&268435455)||er(Xt,$t)}function Gl(t,e){var n=lt;lt|=2;var i=av();(Xt!==t||$t!==e)&&(wi=null,Dr(t,e));do try{WS();break}catch(r){sv(t,r)}while(!0);if(Ff(),lt=n,zl.current=i,Ot!==null)throw Error(le(261));return Xt=null,$t=0,zt}function WS(){for(;Ot!==null;)ov(Ot)}function XS(){for(;Ot!==null&&!gx();)ov(Ot)}function ov(t){var e=uv(t.alternate,t,En);t.memoizedProps=t.pendingProps,e===null?lv(t):Ot=e,Yf.current=null}function lv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=kS(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{zt=6,Ot=null;return}}else if(n=OS(n,e,En),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);zt===0&&(zt=5)}function Ar(t,e,n){var i=pt,r=kn.transition;try{kn.transition=null,pt=1,jS(t,e,n,i)}finally{kn.transition=r,pt=i}return null}function jS(t,e,n,i){do Ds();while(ir!==null);if(lt&6)throw Error(le(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(le(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ax(t,s),t===Xt&&(Ot=Xt=null,$t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bo||(bo=!0,dv(wl,function(){return Ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var a=pt;pt=1;var o=lt;lt|=4,Yf.current=null,zS(t,n),nv(n,t),fS(Zu),Al=!!Ku,Zu=Ku=null,t.current=n,VS(n),vx(),lt=o,pt=a,kn.transition=s}else t.current=n;if(bo&&(bo=!1,ir=t,Hl=r),s=t.pendingLanes,s===0&&(cr=null),Sx(n.stateNode),_n(t,Dt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Vl)throw Vl=!1,t=vd,vd=null,t;return Hl&1&&t.tag!==0&&Ds(),s=t.pendingLanes,s&1?t===_d?Pa++:(Pa=0,_d=t):Pa=0,vr(),null}function Ds(){if(ir!==null){var t=Hg(Hl),e=kn.transition,n=pt;try{if(kn.transition=null,pt=16>t?16:t,ir===null)var i=!1;else{if(t=ir,ir=null,Hl=0,lt&6)throw Error(le(331));var r=lt;for(lt|=4,Pe=t.current;Pe!==null;){var s=Pe,a=s.child;if(Pe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Pe=c;Pe!==null;){var f=Pe;switch(f.tag){case 0:case 11:case 15:ba(8,f,s)}var h=f.child;if(h!==null)h.return=f,Pe=h;else for(;Pe!==null;){f=Pe;var d=f.sibling,p=f.return;if(Q0(f),f===c){Pe=null;break}if(d!==null){d.return=p,Pe=d;break}Pe=p}}}var x=s.alternate;if(x!==null){var M=x.child;if(M!==null){x.child=null;do{var g=M.sibling;M.sibling=null,M=g}while(M!==null)}}Pe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Pe=a;else e:for(;Pe!==null;){if(s=Pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ba(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Pe=u;break e}Pe=s.return}}var m=t.current;for(Pe=m;Pe!==null;){a=Pe;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Pe=y;else e:for(a=m;Pe!==null;){if(o=Pe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:cc(9,o)}}catch(T){Nt(o,o.return,T)}if(o===a){Pe=null;break e}var _=o.sibling;if(_!==null){_.return=o.return,Pe=_;break e}Pe=o.return}}if(lt=r,vr(),fi&&typeof fi.onPostCommitFiberRoot=="function")try{fi.onPostCommitFiberRoot(tc,t)}catch{}i=!0}return i}finally{pt=n,kn.transition=e}}return!1}function Kp(t,e,n){e=Hs(n,e),e=H0(t,e,1),t=lr(t,e,1),e=dn(),t!==null&&(so(t,1,e),_n(t,e))}function Nt(t,e,n){if(t.tag===3)Kp(t,t,n);else for(;e!==null;){if(e.tag===3){Kp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){t=Hs(n,t),t=G0(e,t,1),e=lr(e,t,1),t=dn(),e!==null&&(so(e,1,t),_n(e,t));break}}e=e.return}}function qS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=dn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&($t&n)===n&&(zt===4||zt===3&&($t&130023424)===$t&&500>Dt()-Zf?Dr(t,0):Kf|=n),_n(t,e)}function cv(t,e){e===0&&(t.mode&1?(e=_o,_o<<=1,!(_o&130023424)&&(_o=4194304)):e=1);var n=dn();t=Fi(t,e),t!==null&&(so(t,e,n),_n(t,n))}function $S(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cv(t,n)}function YS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),cv(t,n)}var uv;uv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,FS(t,e,n);mn=!!(t.flags&131072)}else mn=!1,wt&&e.flags&1048576&&p0(e,Dl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;dl(t,e),t=e.pendingProps;var r=ks(e,an.current);Ls(e,n),r=Wf(null,e,i,t,r,n);var s=Xf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(s=!0,Nl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Bf(e),r.updater=lc,e.stateNode=r,r._reactInternals=e,ad(e,i,t,n),e=cd(null,e,i,!0,s,n)):(e.tag=0,wt&&s&&Lf(e),un(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(dl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ZS(i),t=qn(i,t),r){case 0:e=ld(null,e,i,t,n);break e;case 1:e=zp(null,e,i,t,n);break e;case 11:e=kp(null,e,i,t,n);break e;case 14:e=Bp(null,e,i,qn(i.type,t),n);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),ld(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),zp(t,e,i,r,n);case 3:e:{if(q0(e),t===null)throw Error(le(387));i=e.pendingProps,s=e.memoizedState,r=s.element,S0(t,e),Fl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Hs(Error(le(423)),e),e=Vp(t,e,i,n,r);break e}else if(i!==r){r=Hs(Error(le(424)),e),e=Vp(t,e,i,n,r);break e}else for(Tn=or(e.stateNode.containerInfo.firstChild),An=e,wt=!0,Yn=null,n=_0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bs(),i===r){e=Oi(t,e,n);break e}un(t,e,i,n)}e=e.child}return e;case 5:return y0(e),t===null&&id(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Ju(i,r)?a=null:s!==null&&Ju(i,s)&&(e.flags|=32),j0(t,e),un(t,e,a,n),e.child;case 6:return t===null&&id(e),null;case 13:return $0(t,e,n);case 4:return zf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zs(e,null,i,n):un(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),kp(t,e,i,r,n);case 7:return un(t,e,e.pendingProps,n),e.child;case 8:return un(t,e,e.pendingProps.children,n),e.child;case 12:return un(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,xt(Il,i._currentValue),i._currentValue=a,s!==null)if(ti(s.value,a)){if(s.children===r.children&&!gn.current){e=Oi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Pi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),rd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(le(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),rd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}un(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ls(e,n),r=Bn(r),i=i(r),e.flags|=1,un(t,e,i,n),e.child;case 14:return i=e.type,r=qn(i,e.pendingProps),r=qn(i.type,r),Bp(t,e,i,r,n);case 15:return W0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),dl(t,e),e.tag=1,vn(i)?(t=!0,Nl(e)):t=!1,Ls(e,n),V0(e,i,r),ad(e,i,r,n),cd(null,e,i,!0,t,n);case 19:return Y0(t,e,n);case 22:return X0(t,e,n)}throw Error(le(156,e.tag))};function dv(t,e){return kg(t,e)}function KS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new KS(t,e,n,i)}function th(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ZS(t){if(typeof t=="function")return th(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sf)return 11;if(t===yf)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function pl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")th(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case gs:return Ir(n.children,r,s,e);case xf:a=8,r|=8;break;case Pu:return t=On(12,n,e,r|2),t.elementType=Pu,t.lanes=s,t;case Nu:return t=On(13,n,e,r),t.elementType=Nu,t.lanes=s,t;case Lu:return t=On(19,n,e,r),t.elementType=Lu,t.lanes=s,t;case yg:return dc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xg:a=10;break e;case Sg:a=9;break e;case Sf:a=11;break e;case yf:a=14;break e;case Ki:a=16,i=null;break e}throw Error(le(130,t==null?t:typeof t,""))}return e=On(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ir(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function dc(t,e,n,i){return t=On(22,t,i,e),t.elementType=yg,t.lanes=n,t.stateNode={isHidden:!1},t}function jc(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function qc(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function JS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cc(0),this.expirationTimes=Cc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function nh(t,e,n,i,r,s,a,o,l){return t=new JS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bf(s),t}function QS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function fv(t){if(!t)return hr;t=t._reactInternals;e:{if(Xr(t)!==t||t.tag!==1)throw Error(le(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(t.tag===1){var n=t.type;if(vn(n))return f0(t,n,e)}return e}function hv(t,e,n,i,r,s,a,o,l){return t=nh(n,i,!0,t,r,s,a,o,l),t.context=fv(null),n=t.current,i=dn(),r=ur(n),s=Pi(i,r),s.callback=e??null,lr(n,s,r),t.current.lanes=r,so(t,r,i),_n(t,i),t}function fc(t,e,n,i){var r=e.current,s=dn(),a=ur(r);return n=fv(n),e.context===null?e.context=n:e.pendingContext=n,e=Pi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=lr(r,e,a),t!==null&&(Qn(t,r,a,s),ll(t,r,a)),a}function Wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ih(t,e){Zp(t,e),(t=t.alternate)&&Zp(t,e)}function ey(){return null}var pv=typeof reportError=="function"?reportError:function(t){console.error(t)};function rh(t){this._internalRoot=t}hc.prototype.render=rh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(le(409));fc(t,e,null,null)};hc.prototype.unmount=rh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zr(function(){fc(null,t,null,null)}),e[Ui]=null}};function hc(t){this._internalRoot=t}hc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&qg(t)}};function sh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jp(){}function ty(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Wl(a);s.call(c)}}var a=hv(e,i,t,0,null,!1,!1,"",Jp);return t._reactRootContainer=a,t[Ui]=a.current,Ha(t.nodeType===8?t.parentNode:t),zr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Wl(l);o.call(c)}}var l=nh(t,0,!1,null,null,!1,!1,"",Jp);return t._reactRootContainer=l,t[Ui]=l.current,Ha(t.nodeType===8?t.parentNode:t),zr(function(){fc(e,l,n,i)}),l}function mc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Wl(a);o.call(l)}}fc(e,a,t,r)}else a=ty(n,e,t,r,i);return Wl(a)}Gg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_a(e.pendingLanes);n!==0&&(wf(e,n|1),_n(e,Dt()),!(lt&6)&&(Gs=Dt()+500,vr()))}break;case 13:zr(function(){var i=Fi(t,1);if(i!==null){var r=dn();Qn(i,t,1,r)}}),ih(t,1)}};Tf=function(t){if(t.tag===13){var e=Fi(t,134217728);if(e!==null){var n=dn();Qn(e,t,134217728,n)}ih(t,134217728)}};Wg=function(t){if(t.tag===13){var e=ur(t),n=Fi(t,e);if(n!==null){var i=dn();Qn(n,t,e,i)}ih(t,e)}};Xg=function(){return pt};jg=function(t,e){var n=pt;try{return pt=t,e()}finally{pt=n}};Hu=function(t,e,n){switch(e){case"input":if(Uu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=sc(i);if(!r)throw Error(le(90));Eg(i),Uu(i,r)}}}break;case"textarea":Tg(t,n);break;case"select":e=n.value,e!=null&&bs(t,!!n.multiple,e,!1)}};Lg=Jf;Dg=zr;var ny={usingClientEntryPoint:!1,Events:[oo,Ss,sc,Pg,Ng,Jf]},aa={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iy={bundleType:aa.bundleType,version:aa.version,rendererPackageName:aa.rendererPackageName,rendererConfig:aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fg(t),t===null?null:t.stateNode},findFiberByHostInstance:aa.findFiberByHostInstance||ey,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{tc=Ro.inject(iy),fi=Ro}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ny;bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sh(e))throw Error(le(200));return QS(t,e,null,n)};bn.createRoot=function(t,e){if(!sh(t))throw Error(le(299));var n=!1,i="",r=pv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=nh(t,1,!1,null,null,n,!1,i,r),t[Ui]=e.current,Ha(t.nodeType===8?t.parentNode:t),new rh(e)};bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(le(188)):(t=Object.keys(t).join(","),Error(le(268,t)));return t=Fg(e),t=t===null?null:t.stateNode,t};bn.flushSync=function(t){return zr(t)};bn.hydrate=function(t,e,n){if(!pc(e))throw Error(le(200));return mc(null,t,e,!0,n)};bn.hydrateRoot=function(t,e,n){if(!sh(t))throw Error(le(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=pv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=hv(e,null,t,1,n??null,r,!1,s,a),t[Ui]=e.current,Ha(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new hc(e)};bn.render=function(t,e,n){if(!pc(e))throw Error(le(200));return mc(null,t,e,!1,n)};bn.unmountComponentAtNode=function(t){if(!pc(t))throw Error(le(40));return t._reactRootContainer?(zr(function(){mc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ui]=null})}),!0):!1};bn.unstable_batchedUpdates=Jf;bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!pc(n))throw Error(le(200));if(t==null||t._reactInternals===void 0)throw Error(le(38));return mc(t,e,n,!1,i)};bn.version="18.3.1-next-f1338f8080-20240426";function mv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mv)}catch(t){console.error(t)}}mv(),mg.exports=bn;var ry=mg.exports,Qp=ry;bu.createRoot=Qp.createRoot,bu.hydrateRoot=Qp.hydrateRoot;class sy{constructor(){this.frenchVoice=null,this.englishVoice=null,this.isMuted=!1,this.isSpeaking=!1,this.listeners=new Set,this.initVoices(),typeof window<"u"&&"speechSynthesis"in window&&(window.speechSynthesis.onvoiceschanged=()=>{this.initVoices()})}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(e){this.isSpeaking=e,this.listeners.forEach(n=>n(e))}initVoices(){if(typeof window>"u"||!("speechSynthesis"in window))return;const e=window.speechSynthesis.getVoices();this.frenchVoice=e.find(n=>n.lang==="fr-FR"&&(n.name.includes("Audrey")||n.name.includes("Thomas")||n.name.includes("Natural")||n.name.includes("Google")))||e.find(n=>n.lang.startsWith("fr"))||null,this.englishVoice=e.find(n=>(n.lang==="en-US"||n.lang==="en-GB")&&(n.name.includes("Natural")||n.name.includes("Google")))||e.find(n=>n.lang.startsWith("en"))||null}speakFrench(e,n){if(this.isMuted||typeof window>"u"||!("speechSynthesis"in window)){n&&n();return}window.speechSynthesis.cancel();const i=new SpeechSynthesisUtterance(e);i.lang="fr-FR",this.frenchVoice&&(i.voice=this.frenchVoice),i.rate=.9,i.pitch=1.15,i.onstart=()=>this.notify(!0),i.onend=()=>{this.notify(!1),n&&n()},i.onerror=()=>{this.notify(!1),n&&n()},window.speechSynthesis.speak(i)}speakBilingual(e,n){this.speakFrench(e,()=>{n&&!this.isMuted&&setTimeout(()=>{const i=new SpeechSynthesisUtterance(n);i.lang="en-US",this.englishVoice&&(i.voice=this.englishVoice),i.rate=.9,i.pitch=1.1,i.onstart=()=>this.notify(!0),i.onend=()=>this.notify(!1),i.onerror=()=>this.notify(!1),window.speechSynthesis.speak(i)},300)})}stop(){typeof window<"u"&&"speechSynthesis"in window&&(window.speechSynthesis.cancel(),this.notify(!1))}}const Ze=new sy;class ay{constructor(){this.ctx=null,this.isMuted=!1}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playPop(){if(this.isMuted||(this.init(),!this.ctx))return;const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine";const i=this.ctx.currentTime;e.frequency.setValueAtTime(400,i),e.frequency.exponentialRampToValueAtTime(950,i+.08),n.gain.setValueAtTime(.3,i),n.gain.exponentialRampToValueAtTime(.01,i+.1),e.connect(n),n.connect(this.ctx.destination),e.start(i),e.stop(i+.1)}playSuccess(){if(this.isMuted||(this.init(),!this.ctx))return;const e=[523.25,659.25,783.99,1046.5],n=this.ctx.currentTime;e.forEach((i,r)=>{const s=this.ctx.createOscillator(),a=this.ctx.createGain(),o=n+r*.09;s.type="triangle",s.frequency.setValueAtTime(i,o),a.gain.setValueAtTime(.25,o),a.gain.exponentialRampToValueAtTime(.001,o+.35),s.connect(a),a.connect(this.ctx.destination),s.start(o),s.stop(o+.35)})}playWaterSplash(){if(this.isMuted||(this.init(),!this.ctx))return;const e=this.ctx.sampleRate*.2,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let l=0;l<e;l++)i[l]=(Math.random()*2-1)*Math.exp(-l/(e*.4));const r=this.ctx.createBufferSource();r.buffer=n;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.frequency.value=1400,s.Q.value=2.5;const a=this.ctx.createGain(),o=this.ctx.currentTime;a.gain.setValueAtTime(.4,o),a.gain.exponentialRampToValueAtTime(.01,o+.2),r.connect(s),s.connect(a),a.connect(this.ctx.destination),r.start(o)}playCarHorn(){if(this.isMuted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime;[392,493.88].forEach(n=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(n,e),r.gain.setValueAtTime(.15,e),r.gain.exponentialRampToValueAtTime(.01,e+.25),i.connect(r),r.connect(this.ctx.destination),i.start(e),i.stop(e+.25)})}playEngineRev(){if(this.isMuted||(this.init(),!this.ctx))return;const e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.currentTime;e.type="sawtooth",e.frequency.setValueAtTime(100,i),e.frequency.linearRampToValueAtTime(260,i+.25),e.frequency.linearRampToValueAtTime(140,i+.45),n.gain.setValueAtTime(.12,i),n.gain.exponentialRampToValueAtTime(.01,i+.45),e.connect(n),n.connect(this.ctx.destination),e.start(i),e.stop(i+.45)}playCookingSizzle(){if(this.isMuted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime;for(let n=0;n<3;n++){const i=this.ctx.createOscillator(),r=this.ctx.createGain(),s=e+n*.08;i.type="sine",i.frequency.setValueAtTime(300+Math.random()*200,s),i.frequency.exponentialRampToValueAtTime(600+Math.random()*300,s+.08),r.gain.setValueAtTime(.2,s),r.gain.exponentialRampToValueAtTime(.01,s+.08),i.connect(r),r.connect(this.ctx.destination),i.start(s),i.stop(s+.08)}}playBloop(){if(this.isMuted||(this.init(),!this.ctx))return;const e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.currentTime;e.type="sine",e.frequency.setValueAtTime(600,i),e.frequency.exponentialRampToValueAtTime(300,i+.12),n.gain.setValueAtTime(.25,i),n.gain.exponentialRampToValueAtTime(.01,i+.12),e.connect(n),n.connect(this.ctx.destination),e.start(i),e.stop(i+.12)}}const nt=new ay;/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ly(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:oy(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=t=>{const e=cy(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function $c(t){return t!=null}function dy(t,e={}){var d,p;const n=e.attributeNames??{},i=x=>n[x]??x,r=t.size??t.width??xr.width,s=t.size??t.height??xr.height,a=((d=t.aliases)==null?void 0:d.filter(x=>typeof x=="string"&&x.trim()!=="").map(x=>`lucide-${x}`))??[],o=[...t.name?[`lucide-${t.name}`]:[],...a],l=((p=e.className)==null?void 0:p.split(" ").filter(Boolean))??[],c=e.includeDefaultClasses===!1?yd(...l):yd("lucide",...o,...l),f=e.absoluteStrokeWidth?Number(e.strokeWidth??xr["stroke-width"])*Number(t.size??t.width??xr.width)/Number(e.size??e.width??xr.width):e.strokeWidth??xr["stroke-width"];return["svg",{...Object.entries(xr).reduce((x,[M,g])=>(x[i(M)]=g,x),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&$c(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&$c(e.width)&&{[i("width")]:e.width},..."height"in e&&$c(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:f,...c&&{[i("class")]:c},[i("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(x=>{const[M,g,u]=x,m=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...g}:g;return u?[M,m,u]:[M,m]})]}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function fy(t,e={}){return dy(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},py=Be.createContext({}),my=()=>Be.useContext(py),gy=Be.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:a,className:o="",children:l,iconNode:c=[],icon:f={node:c,aliases:[],size:24},...h},d)=>{const{size:p=24,strokeWidth:x=2,absoluteStrokeWidth:M=!1,nonScalingStroke:g=!1,color:u="currentColor",className:m=""}=my()??{},y=!!l||hy(h),[_,T,w=[]]=fy(f,{color:t??u,width:n??e??p,height:i??e??p,strokeWidth:r??x,absoluteStrokeWidth:s??M,nonScalingStroke:a??g,className:yd(m,o),hasA11yProp:y,attributes:h});return Be.createElement(_,{ref:d,...T},[...w.map(([P,v])=>Be.createElement(P,v)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function kt(t,e=[],n=[]){const i=typeof t=="string"?ly(t,e,n):t,r=Be.forwardRef(({className:s,...a},o)=>Be.createElement(gy,{ref:o,icon:i,className:s,...a}));return i.name&&(r.displayName=uy(i.name)),r}/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv={name:"arrow-down",size:24,node:[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]};gv.node;const vy=kt(gv);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]};vv.node;const _y=kt(vv);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};_v.node;const xy=kt(_v);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv={name:"arrow-up",size:24,node:[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]};xv.node;const Sy=kt(xv);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};Sv.node;const yy=kt(Sv);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv={name:"brain-circuit",size:24,node:[["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 012 2v1",key:"6s3bw4"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M12 9a4.17 4.17 0 01-3 4",key:"13l7kh"}],["path",{d:"M16 8V5a2 2 0 012-2",key:"gais5y"}],["path",{d:"M6 18a4 4 0 01-2-7.465",key:"1y2m15"}],["path",{d:"M6.004 5.125a4 4 0 00-2.526 5.77",key:"3cw1ss"}],["path",{d:"M6.294 6.294A3 3 0 1112 5v13a4 4 0 11-7.967-.518",key:"m2z1wm"}],["circle",{cx:"16",cy:"13",r:"0.5",fill:"currentColor",key:"9zzywh"}],["circle",{cx:"18",cy:"3",r:"0.5",fill:"currentColor",key:"i2xui6"}],["circle",{cx:"20",cy:"21",r:"0.5",fill:"currentColor",key:"1dobdp"}],["circle",{cx:"20",cy:"8",r:"0.5",fill:"currentColor",key:"r9nqlq"}]]};yv.node;const My=kt(yv);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv={name:"car",size:24,node:[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]};Mv.node;const Ey=kt(Mv);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};Ev.node;const wy=kt(Ev);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};wv.node;const Tv=kt(wv);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av={name:"coins",size:24,node:[["path",{d:"M13.744 17.736a6 6 0 1 1-7.48-7.48",key:"bq4yh3"}],["path",{d:"M15 6h1v4",key:"11y1tn"}],["path",{d:"m6.134 14.768.866-.5 2 3.464",key:"17snzx"}],["circle",{cx:"16",cy:"8",r:"6",key:"14bfc9"}]]};Av.node;const Ty=kt(Av);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv={name:"droplet",size:24,node:[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]};Cv.node;const Ay=kt(Cv);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};bv.node;const Cy=kt(bv);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv={name:"gamepad-2",size:24,node:[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]};Rv.node;const by=kt(Rv);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};Pv.node;const gc=kt(Pv);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv={name:"shirt",size:24,node:[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]};Nv.node;const Ry=kt(Nv);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv={name:"shopping-cart",size:24,node:[["path",{d:"m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18",key:"uebgi3"}],["path",{d:"M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25",key:"1j7c9p"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]};Lv.node;const Py=kt(Lv);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Dv.node;const Ny=kt(Dv);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv={name:"star",size:24,node:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]};Iv.node;const ah=kt(Iv);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};Uv.node;const em=kt(Uv);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};Fv.node;const Ly=kt(Fv),oh=""+new URL("teacher-pixar-7o5ZKw61.jpg",import.meta.url).href;function Dy({message:t,onRepeat:e,currentMood:n="happy"}){const[i,r]=Be.useState(!1),[s,a]=Be.useState(!1),[o,l]=Be.useState(!1);Be.useEffect(()=>{const h=Ze.subscribe(d=>{r(d)});return()=>h()},[]);const c=()=>{const h=!s;a(h),Ze.isMuted=h,h&&Ze.stop()},f=()=>{nt.playPop(),e&&e()};return A.jsxs("div",{className:`pixar-teacher-guide ${o?"minimized":""}`,children:[t&&!o&&A.jsxs("div",{className:"pixar-speech-bubble",onClick:f,children:[A.jsxs("div",{className:"bubble-header",children:[A.jsxs("span",{className:"teacher-name-badge",children:[A.jsx(Ny,{size:14,className:"sparkle-icon"})," Maîtresse Nia"]}),A.jsx("button",{className:"bubble-listen-btn",onClick:h=>{h.stopPropagation(),f()},title:"Écouter la maîtresse",children:A.jsx(em,{size:20})})]}),A.jsx("p",{className:"bubble-text",children:t})]}),A.jsxs("div",{className:`pixar-avatar-frame ${i?"is-speaking-anim":""}`,onClick:f,title:"Maîtresse Nia - Touche-moi pour parler !",children:[A.jsx("img",{src:oh,alt:"Maîtresse Nia - Personnage 3D Pixar",className:"pixar-avatar-img"}),i&&A.jsxs("div",{className:"speaking-wave-ring",children:[A.jsx("span",{}),A.jsx("span",{}),A.jsx("span",{})]}),A.jsx("div",{className:"avatar-tag",children:A.jsx("span",{children:"Nia"})})]}),A.jsx("button",{onClick:c,className:`quick-mute-btn ${s?"is-muted":""}`,title:s?"Activer le son":"Couper le son",children:s?A.jsx(Ly,{size:18}):A.jsx(em,{size:18})})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lh="186",Iy=0,tm=1,Uy=2,ml=1,Ov=2,Sa=3,Vr=0,xn=1,Ai=2,Ni=0,Na=1,nm=2,im=3,rm=4,Fy=5,ps=100,Oy=101,ky=102,By=103,zy=104,Vy=200,Hy=201,Gy=202,Wy=203,kv=204,Bv=205,Xy=206,jy=207,qy=208,$y=209,Yy=210,Ky=211,Zy=212,Jy=213,Qy=214,Md=0,Ed=1,wd=2,Za=3,Td=4,Ad=5,Cd=6,bd=7,zv=0,eM=1,tM=2,pi=0,Vv=1,Hv=2,Gv=3,Wv=4,Xv=5,jv=6,qv=7,$v=300,Hr=301,Ws=302,Yc=303,Kc=304,vc=306,Rd=1e3,Ri=1001,Pd=1002,qt=1003,nM=1004,Po=1005,rn=1006,Zc=1007,Pr=1008,wn=1009,Yv=1010,Kv=1011,Ja=1012,ch=1013,gi=1014,ui=1015,vi=1016,uh=1017,dh=1018,Qa=1020,Zv=35902,Jv=35899,Qv=1021,e_=1022,Zn=1023,ki=1026,Nr=1027,t_=1028,fh=1029,Gr=1030,hh=1031,ph=1033,gl=33776,vl=33777,_l=33778,xl=33779,Nd=35840,Ld=35841,Dd=35842,Id=35843,Ud=36196,Fd=37492,Od=37496,kd=37488,Bd=37489,Xl=37490,zd=37491,Vd=37808,Hd=37809,Gd=37810,Wd=37811,Xd=37812,jd=37813,qd=37814,$d=37815,Yd=37816,Kd=37817,Zd=37818,Jd=37819,Qd=37820,ef=37821,tf=36492,nf=36494,rf=36495,sf=36283,af=36284,jl=36285,of=36286,iM=3200,lf=0,rM=1,tr="",Ln="srgb",ql="srgb-linear",$l="linear",ft="srgb",Jc=7680,sM=519,aM=512,oM=513,lM=514,mh=515,cM=516,uM=517,gh=518,dM=519,n_=35044,sm="300 es",di=2e3,eo=2001;function fM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function to(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function hM(){const t=to("canvas");return t.style.display="block",t}const am={};function Yl(...t){const e="THREE."+t.shift();console.log(e,...t)}function i_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function He(...t){t=i_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function st(...t){t=i_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Is(...t){const e=t.join(" ");e in am||(am[e]=!0,He(...t))}function pM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const mM={[Md]:Ed,[wd]:Cd,[Td]:bd,[Za]:Ad,[Ed]:Md,[Cd]:wd,[bd]:Td,[Ad]:Za};class jr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let om=1234567;const La=Math.PI/180,no=180/Math.PI;function Li(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[t&255]+en[t>>8&255]+en[t>>16&255]+en[t>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[n&63|128]+en[n>>8&255]+"-"+en[n>>16&255]+en[n>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function tt(t,e,n){return Math.max(e,Math.min(n,t))}function vh(t,e){return(t%e+e)%e}function gM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function vM(t,e,n){return t!==e?(n-t)/(e-t):0}function Da(t,e,n){return(1-n)*t+n*e}function _M(t,e,n,i){return Da(t,e,1-Math.exp(-n*i))}function xM(t,e=1){return e-Math.abs(vh(t,e*2)-e)}function SM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function yM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function MM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function EM(t,e){return t+Math.random()*(e-t)}function wM(t){return t*(.5-Math.random())}function TM(t){t!==void 0&&(om=t);let e=om+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function AM(t){return t*La}function CM(t){return t*no}function bM(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function RM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function PM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function NM(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),f=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),x=a((i-e)/2);switch(r){case"XYX":t.set(o*f,l*h,l*d,o*c);break;case"YZY":t.set(l*d,o*f,l*h,o*c);break;case"ZXZ":t.set(l*h,l*d,o*f,o*c);break;case"XZX":t.set(o*f,l*x,l*p,o*c);break;case"YXY":t.set(l*p,o*f,l*x,o*c);break;case"ZYZ":t.set(l*x,l*p,o*f,o*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Kn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ht(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const lm={DEG2RAD:La,RAD2DEG:no,generateUUID:Li,clamp:tt,euclideanModulo:vh,mapLinear:gM,inverseLerp:vM,lerp:Da,damp:_M,pingpong:xM,smoothstep:SM,smootherstep:yM,randInt:MM,randFloat:EM,randFloatSpread:wM,seededRandom:TM,degToRad:AM,radToDeg:CM,isPowerOfTwo:bM,ceilPowerOfTwo:RM,floorPowerOfTwo:PM,setQuaternionFromProperEuler:NM,normalize:ht,denormalize:Kn},Ph=class Ph{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ph.prototype.isVector2=!0;let We=Ph;class Ys{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],d=s[a+0],p=s[a+1],x=s[a+2],M=s[a+3];if(h!==M||l!==d||c!==p||f!==x){let g=l*d+c*p+f*x+h*M;g<0&&(d=-d,p=-p,x=-x,M=-M,g=-g);let u=1-o;if(g<.9995){const m=Math.acos(g),y=Math.sin(m);u=Math.sin(u*m)/y,o=Math.sin(o*m)/y,l=l*u+d*o,c=c*u+p*o,f=f*u+x*o,h=h*u+M*o}else{l=l*u+d*o,c=c*u+p*o,f=f*u+x*o,h=h*u+M*o;const m=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=m,c*=m,f*=m,h*=m}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[a],d=s[a+1],p=s[a+2],x=s[a+3];return e[n]=o*x+f*h+l*p-c*d,e[n+1]=l*x+f*d+c*h-o*p,e[n+2]=c*x+f*p+o*d-l*h,e[n+3]=f*x-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),h=o(s/2),d=l(i/2),p=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*f*h+c*p*x,this._y=c*p*h-d*f*x,this._z=c*f*x+d*p*h,this._w=c*f*h-d*p*x;break;case"YXZ":this._x=d*f*h+c*p*x,this._y=c*p*h-d*f*x,this._z=c*f*x-d*p*h,this._w=c*f*h+d*p*x;break;case"ZXY":this._x=d*f*h-c*p*x,this._y=c*p*h+d*f*x,this._z=c*f*x+d*p*h,this._w=c*f*h-d*p*x;break;case"ZYX":this._x=d*f*h-c*p*x,this._y=c*p*h+d*f*x,this._z=c*f*x-d*p*h,this._w=c*f*h+d*p*x;break;case"YZX":this._x=d*f*h+c*p*x,this._y=c*p*h+d*f*x,this._z=c*f*x-d*p*h,this._w=c*f*h-d*p*x;break;case"XZY":this._x=d*f*h-c*p*x,this._y=c*p*h-d*f*x,this._z=c*f*x+d*p*h,this._w=c*f*h+d*p*x;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Nh=class Nh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(cm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(cm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*f,this.y=i+l*f+o*c-s*h,this.z=r+l*h+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qc.copy(this).projectOnVector(e),this.sub(Qc)}reflect(e){return this.sub(Qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nh.prototype.isVector3=!0;let H=Nh;const Qc=new H,cm=new Ys,Lh=class Lh{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],p=i[5],x=i[8],M=r[0],g=r[3],u=r[6],m=r[1],y=r[4],_=r[7],T=r[2],w=r[5],P=r[8];return s[0]=a*M+o*m+l*T,s[3]=a*g+o*y+l*w,s[6]=a*u+o*_+l*P,s[1]=c*M+f*m+h*T,s[4]=c*g+f*y+h*w,s[7]=c*u+f*_+h*P,s[2]=d*M+p*m+x*T,s[5]=d*g+p*y+x*w,s[8]=d*u+p*_+x*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,d=o*l-f*s,p=c*s-a*l,x=n*h+i*d+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=h*M,e[1]=(r*c-f*i)*M,e[2]=(o*i-r*a)*M,e[3]=d*M,e[4]=(f*n-r*l)*M,e[5]=(r*s-o*n)*M,e[6]=p*M,e[7]=(i*l-c*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return Is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(eu.makeScale(e,n)),this}rotate(e){return Is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(eu.makeRotation(-e)),this}translate(e,n){return Is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(eu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Lh.prototype.isMatrix3=!0;let je=Lh;const eu=new je,um=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dm=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LM(){const t={enabled:!0,workingColorSpace:ql,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ft&&(r.r=Di(r.r),r.g=Di(r.g),r.b=Di(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(r.r=Us(r.r),r.g=Us(r.g),r.b=Us(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===tr?$l:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ql]:{primaries:e,whitePoint:i,transfer:$l,toXYZ:um,fromXYZ:dm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:um,fromXYZ:dm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),t}const rt=LM();function Di(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Us(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Kr;class DM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Kr===void 0&&(Kr=to("canvas")),Kr.width=e.width,Kr.height=e.height;const r=Kr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Kr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=to("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Di(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Di(n[i]/255)*255):n[i]=Di(n[i]);return{data:n,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let IM=0;class _h{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=Li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(tu(r[a].image)):s.push(tu(r[a]))}else s=tu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function tu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?DM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let UM=0;const nu=new H;class sn extends jr{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=Ri,r=Ri,s=rn,a=Pr,o=Zn,l=wn,c=sn.DEFAULT_ANISOTROPY,f=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Li(),this.name="",this.source=new _h(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nu).x}get height(){return this.source.getSize(nu).y}get depth(){return this.source.getSize(nu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){He(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){He(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$v)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rd:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case Pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rd:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case Pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=$v;sn.DEFAULT_ANISOTROPY=1;const Dh=class Dh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],p=l[5],x=l[9],M=l[2],g=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-M)<.01&&Math.abs(x-g)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+M)<.1&&Math.abs(x+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,_=(p+1)/2,T=(u+1)/2,w=(f+d)/4,P=(h+M)/4,v=(x+g)/4;return y>_&&y>T?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=P/i):_>T?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=w/r,s=v/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=P/s,r=v/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-x)*(g-x)+(h-M)*(h-M)+(d-f)*(d-f));return Math.abs(m)<.001&&(m=1),this.x=(g-x)/m,this.y=(h-M)/m,this.z=(d-f)/m,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this.w=tt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this.w=tt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Dh.prototype.isVector4=!0;let Ct=Dh;class FM extends jr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new sn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new _h(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends FM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class r_ extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class OM extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ql=class Ql{constructor(e,n,i,r,s,a,o,l,c,f,h,d,p,x,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,h,d,p,x,M,g)}set(e,n,i,r,s,a,o,l,c,f,h,d,p,x,M,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=p,u[7]=x,u[11]=M,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ql().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Zr.setFromMatrixColumn(e,0).length(),s=1/Zr.setFromMatrixColumn(e,1).length(),a=1/Zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*f,p=a*h,x=o*f,M=o*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=p+x*c,n[5]=d-M*c,n[9]=-o*l,n[2]=M-d*c,n[6]=x+p*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*f,p=l*h,x=c*f,M=c*h;n[0]=d+M*o,n[4]=x*o-p,n[8]=a*c,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=p*o-x,n[6]=M+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*f,p=l*h,x=c*f,M=c*h;n[0]=d-M*o,n[4]=-a*h,n[8]=x+p*o,n[1]=p+x*o,n[5]=a*f,n[9]=M-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*f,p=a*h,x=o*f,M=o*h;n[0]=l*f,n[4]=x*c-p,n[8]=d*c+M,n[1]=l*h,n[5]=M*c+d,n[9]=p*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,x=o*l,M=o*c;n[0]=l*f,n[4]=M-d*h,n[8]=x*h+p,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=p*h+x,n[10]=d-M*h}else if(e.order==="XZY"){const d=a*l,p=a*c,x=o*l,M=o*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+M,n[5]=a*f,n[9]=p*h-x,n[2]=x*h-p,n[6]=o*f,n[10]=M*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kM,e,BM)}lookAt(e,n,i){const r=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Xi.crossVectors(i,yn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Xi.crossVectors(i,yn)),Xi.normalize(),No.crossVectors(yn,Xi),r[0]=Xi.x,r[4]=No.x,r[8]=yn.x,r[1]=Xi.y,r[5]=No.y,r[9]=yn.y,r[2]=Xi.z,r[6]=No.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],p=i[13],x=i[2],M=i[6],g=i[10],u=i[14],m=i[3],y=i[7],_=i[11],T=i[15],w=r[0],P=r[4],v=r[8],C=r[12],L=r[1],U=r[5],k=r[9],W=r[13],I=r[2],q=r[6],J=r[10],Z=r[14],G=r[3],z=r[7],R=r[11],b=r[15];return s[0]=a*w+o*L+l*I+c*G,s[4]=a*P+o*U+l*q+c*z,s[8]=a*v+o*k+l*J+c*R,s[12]=a*C+o*W+l*Z+c*b,s[1]=f*w+h*L+d*I+p*G,s[5]=f*P+h*U+d*q+p*z,s[9]=f*v+h*k+d*J+p*R,s[13]=f*C+h*W+d*Z+p*b,s[2]=x*w+M*L+g*I+u*G,s[6]=x*P+M*U+g*q+u*z,s[10]=x*v+M*k+g*J+u*R,s[14]=x*C+M*W+g*Z+u*b,s[3]=m*w+y*L+_*I+T*G,s[7]=m*P+y*U+_*q+T*z,s[11]=m*v+y*k+_*J+T*R,s[15]=m*C+y*W+_*Z+T*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],p=e[14],x=e[3],M=e[7],g=e[11],u=e[15],m=l*p-c*d,y=o*p-c*h,_=o*d-l*h,T=a*p-c*f,w=a*d-l*f,P=a*h-o*f;return n*(M*m-g*y+u*_)-i*(x*m-g*T+u*w)+r*(x*y-M*T+u*P)-s*(x*_-M*w+g*P)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return n*(a*f-o*c)-i*(s*f-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],p=e[11],x=e[12],M=e[13],g=e[14],u=e[15],m=n*o-i*a,y=n*l-r*a,_=n*c-s*a,T=i*l-r*o,w=i*c-s*o,P=r*c-s*l,v=f*M-h*x,C=f*g-d*x,L=f*u-p*x,U=h*g-d*M,k=h*u-p*M,W=d*u-p*g,I=m*W-y*k+_*U+T*L-w*C+P*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/I;return e[0]=(o*W-l*k+c*U)*q,e[1]=(r*k-i*W-s*U)*q,e[2]=(M*P-g*w+u*T)*q,e[3]=(d*w-h*P-p*T)*q,e[4]=(l*L-a*W-c*C)*q,e[5]=(n*W-r*L+s*C)*q,e[6]=(g*_-x*P-u*y)*q,e[7]=(f*P-d*_+p*y)*q,e[8]=(a*k-o*L+c*v)*q,e[9]=(i*L-n*k-s*v)*q,e[10]=(x*w-M*_+u*m)*q,e[11]=(h*_-f*w-p*m)*q,e[12]=(o*C-a*U-l*v)*q,e[13]=(n*U-i*C+r*v)*q,e[14]=(M*y-x*T-g*m)*q,e[15]=(f*T-h*y+d*m)*q,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,h=o+o,d=s*c,p=s*f,x=s*h,M=a*f,g=a*h,u=o*h,m=l*c,y=l*f,_=l*h,T=i.x,w=i.y,P=i.z;return r[0]=(1-(M+u))*T,r[1]=(p+_)*T,r[2]=(x-y)*T,r[3]=0,r[4]=(p-_)*w,r[5]=(1-(d+u))*w,r[6]=(g+m)*w,r[7]=0,r[8]=(x+y)*P,r[9]=(g-m)*P,r[10]=(1-(d+M))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Zr.set(r[0],r[1],r[2]).length();const o=Zr.set(r[4],r[5],r[6]).length(),l=Zr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Gn.copy(this);const c=1/a,f=1/o,h=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=f,Gn.elements[5]*=f,Gn.elements[6]*=f,Gn.elements[8]*=h,Gn.elements[9]*=h,Gn.elements[10]*=h,n.setFromRotationMatrix(Gn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=di,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let x,M;if(l)x=s/(a-s),M=a*s/(a-s);else if(o===di)x=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===eo)x=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=di,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let x,M;if(l)x=1/(a-s),M=a/(a-s);else if(o===di)x=-2/(a-s),M=-(a+s)/(a-s);else if(o===eo)x=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Ql.prototype.isMatrix4=!0;let Tt=Ql;const Zr=new H,Gn=new Tt,kM=new H(0,0,0),BM=new H(1,1,1),Xi=new H,No=new H,yn=new H,fm=new Tt,hm=new Ys;class pr{constructor(e=0,n=0,i=0,r=pr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hm.setFromEuler(this),this.setFromQuaternion(hm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pr.DEFAULT_ORDER="XYZ";class xh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zM=0;const pm=new H,Jr=new Ys,xi=new Tt,Lo=new H,oa=new H,VM=new H,HM=new Ys,mm=new H(1,0,0),gm=new H(0,1,0),vm=new H(0,0,1),_m={type:"added"},GM={type:"removed"},Qr={type:"childadded",child:null},iu={type:"childremoved",child:null};class Yt extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new H,n=new pr,i=new Ys,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new je}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(mm,e)}rotateY(e){return this.rotateOnAxis(gm,e)}rotateZ(e){return this.rotateOnAxis(vm,e)}translateOnAxis(e,n){return pm.copy(e).applyQuaternion(this.quaternion),this.position.add(pm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(mm,e)}translateY(e){return this.translateOnAxis(gm,e)}translateZ(e){return this.translateOnAxis(vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Lo.copy(e):Lo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(oa,Lo,this.up):xi.lookAt(Lo,oa,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(xi),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_m),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(GM),iu.child=e,this.dispatchEvent(iu),iu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_m),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,VM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,HM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Yt.DEFAULT_UP=new H(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Lr extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WM={type:"move"};class ru{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const g=n.getJointPose(M,i),u=this._getHandJoint(c,M);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(WM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Lr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const s_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Do={h:0,s:0,l:0};function su(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=vh(e,1),n=tt(n,0,1),i=tt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=su(a,s,e+1/3),this.g=su(a,s,e),this.b=su(a,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,n=Ln){function i(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:He("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ln){const i=s_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return rt.workingToColorSpace(tn.copy(this),e),Math.round(tt(tn.r*255,0,255))*65536+Math.round(tt(tn.g*255,0,255))*256+Math.round(tt(tn.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.workingToColorSpace(tn.copy(this),n);const i=tn.r,r=tn.g,s=tn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=rt.workingColorSpace){return rt.workingToColorSpace(tn.copy(this),n),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Ln){rt.workingToColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,r=tn.b;return e!==Ln?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+n,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(Do);const i=Da(ji.h,Do.h,n),r=Da(ji.s,Do.s,n),s=Da(ji.l,Do.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new it;it.NAMES=s_;class Sh{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new it(e),this.density=n}clone(){return new Sh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class XM extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pr,this.environmentIntensity=1,this.environmentRotation=new pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Wn=new H,Si=new H,au=new H,yi=new H,es=new H,ts=new H,xm=new H,ou=new H,lu=new H,cu=new H,uu=new Ct,du=new Ct,fu=new Ct;class Fn{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Wn.subVectors(e,n),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Wn.subVectors(r,n),Si.subVectors(i,n),au.subVectors(e,n);const a=Wn.dot(Wn),o=Wn.dot(Si),l=Wn.dot(au),c=Si.dot(Si),f=Si.dot(au),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-o*f)*d,x=(a*f-o*l)*d;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return uu.setScalar(0),du.setScalar(0),fu.setScalar(0),uu.fromBufferAttribute(e,n),du.fromBufferAttribute(e,i),fu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(uu,s.x),a.addScaledVector(du,s.y),a.addScaledVector(fu,s.z),a}static isFrontFacing(e,n,i,r){return Wn.subVectors(i,n),Si.subVectors(e,n),Wn.cross(Si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Wn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Fn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Fn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;es.subVectors(r,i),ts.subVectors(s,i),ou.subVectors(e,i);const l=es.dot(ou),c=ts.dot(ou);if(l<=0&&c<=0)return n.copy(i);lu.subVectors(e,r);const f=es.dot(lu),h=ts.dot(lu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(es,a);cu.subVectors(e,s);const p=es.dot(cu),x=ts.dot(cu);if(x>=0&&p<=x)return n.copy(s);const M=p*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(ts,o);const g=f*x-p*h;if(g<=0&&h-f>=0&&p-x>=0)return xm.subVectors(s,r),o=(h-f)/(h-f+(p-x)),n.copy(r).addScaledVector(xm,o);const u=1/(g+M+d);return a=M*u,o=d*u,n.copy(i).addScaledVector(es,a).addScaledVector(ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class co{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(s,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Io.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Io.copy(i.boundingBox)),Io.applyMatrix4(e.matrixWorld),this.union(Io)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(la),Uo.subVectors(this.max,la),ns.subVectors(e.a,la),is.subVectors(e.b,la),rs.subVectors(e.c,la),qi.subVectors(is,ns),$i.subVectors(rs,is),Sr.subVectors(ns,rs);let n=[0,-qi.z,qi.y,0,-$i.z,$i.y,0,-Sr.z,Sr.y,qi.z,0,-qi.x,$i.z,0,-$i.x,Sr.z,0,-Sr.x,-qi.y,qi.x,0,-$i.y,$i.x,0,-Sr.y,Sr.x,0];return!hu(n,ns,is,rs,Uo)||(n=[1,0,0,0,1,0,0,0,1],!hu(n,ns,is,rs,Uo))?!1:(Fo.crossVectors(qi,$i),n=[Fo.x,Fo.y,Fo.z],hu(n,ns,is,rs,Uo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new H,new H,new H,new H,new H,new H,new H,new H],Xn=new H,Io=new co,ns=new H,is=new H,rs=new H,qi=new H,$i=new H,Sr=new H,la=new H,Uo=new H,Fo=new H,yr=new H;function hu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){yr.fromArray(t,s);const o=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),l=e.dot(yr),c=n.dot(yr),f=i.dot(yr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Ft=new H,Oo=new We;let jM=0;class mi extends jr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=n_,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Oo.fromBufferAttribute(this,n),Oo.applyMatrix3(e),this.setXY(n,Oo.x,Oo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ht(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Kn(n,this.array)),n}setX(e,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Kn(n,this.array)),n}setY(e,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Kn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Kn(n,this.array)),n}setW(e,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class a_ extends mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class o_ extends mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class It extends mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const qM=new co,ca=new H,pu=new H;class yh{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):qM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ca.subVectors(e,this.center);const n=ca.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ca,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ca.copy(e.center).add(pu)),this.expandByPoint(ca.copy(e.center).sub(pu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $M=0;const Nn=new Tt,mu=new Yt,ss=new H,Mn=new co,ua=new co,Gt=new H;class Sn extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fM(e)?o_:a_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,i){return Nn.makeTranslation(e,n,i),this.applyMatrix4(Nn),this}scale(e,n,i){return Nn.makeScale(e,n,i),this.applyMatrix4(Nn),this}lookAt(e){return mu.lookAt(e),mu.updateMatrix(),this.applyMatrix4(mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new It(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new co);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ua.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(Mn.min,ua.min),Mn.expandByPoint(Gt),Gt.addVectors(Mn.max,ua.max),Mn.expandByPoint(Gt)):(Mn.expandByPoint(ua.min),Mn.expandByPoint(ua.max))}Mn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Gt.fromBufferAttribute(o,c),l&&(ss.fromBufferAttribute(e,c),Gt.add(ss)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new mi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new H,l[v]=new H;const c=new H,f=new H,h=new H,d=new We,p=new We,x=new We,M=new H,g=new H;function u(v,C,L){c.fromBufferAttribute(i,v),f.fromBufferAttribute(i,C),h.fromBufferAttribute(i,L),d.fromBufferAttribute(s,v),p.fromBufferAttribute(s,C),x.fromBufferAttribute(s,L),f.sub(c),h.sub(c),p.sub(d),x.sub(d);const U=1/(p.x*x.y-x.x*p.y);isFinite(U)&&(M.copy(f).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(U),g.copy(h).multiplyScalar(p.x).addScaledVector(f,-x.x).multiplyScalar(U),o[v].add(M),o[C].add(M),o[L].add(M),l[v].add(g),l[C].add(g),l[L].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let v=0,C=m.length;v<C;++v){const L=m[v],U=L.start,k=L.count;for(let W=U,I=U+k;W<I;W+=3)u(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const y=new H,_=new H,T=new H,w=new H;function P(v){T.fromBufferAttribute(r,v),w.copy(T);const C=o[v];y.copy(C),y.sub(T.multiplyScalar(T.dot(C))).normalize(),_.crossVectors(w,C);const U=_.dot(l[v])<0?-1:1;a.setXYZW(v,y.x,y.y,y.z,U)}for(let v=0,C=m.length;v<C;++v){const L=m[v],U=L.start,k=L.count;for(let W=U,I=U+k;W<I;W+=3)P(e.getX(W+0)),P(e.getX(W+1)),P(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,f=new H,h=new H;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),M=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,g),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(f),l.add(f),c.add(f),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,h=o.normalized,d=new c.constructor(l.length*f);let p=0,x=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*f;for(let u=0;u<f;u++)d[x++]=c[p++]}return new mi(d,f,h)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Sn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,h=c.length;f<h;f++){const d=c[f],p=e(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class YM{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=n_,this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const n={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}const ln=new H;class Kl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix4(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.applyNormalMatrix(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.transformDirection(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Kn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Kn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Kn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Kn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Yl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new mi(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Kl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Yl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const gu=new H,KM=new H,ZM=new je;class Ji{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=gu.subVectors(i,n).cross(KM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(gu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||ZM.getNormalMatrix(e),r=this.coplanarPoint(gu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let JM=0;class Ks extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=Na,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kv,this.blendDst=Bv,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jc,this.stencilZFail=Jc,this.stencilZPass=Jc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){He(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){He(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ji().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new We().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class l_ extends Ks{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let as;const da=new H,os=new H,ls=new H,cs=new We,fa=new We,c_=new Tt,ko=new H,ha=new H,Bo=new H,Sm=new We,vu=new We,ym=new We;class QM extends Yt{constructor(e=new l_){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new Sn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new YM(n,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new Kl(i,3,0,!1)),as.setAttribute("uv",new Kl(i,2,3,!1))}this.geometry=as,this.material=e,this.center=new We(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,n){e.camera===null&&st('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),os.setFromMatrixScale(this.matrixWorld),c_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&os.multiplyScalar(-ls.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;zo(ko.set(-.5,-.5,0),ls,a,os,r,s),zo(ha.set(.5,-.5,0),ls,a,os,r,s),zo(Bo.set(.5,.5,0),ls,a,os,r,s),Sm.set(0,0),vu.set(1,0),ym.set(1,1);let o=e.ray.intersectTriangle(ko,ha,Bo,!1,da);if(o===null&&(zo(ha.set(-.5,.5,0),ls,a,os,r,s),vu.set(0,1),o=e.ray.intersectTriangle(ko,Bo,ha,!1,da),o===null))return;const l=e.ray.origin.distanceTo(da);l<e.near||l>e.far||n.push({distance:l,point:da.clone(),uv:Fn.getInterpolation(da,ko,ha,Bo,Sm,vu,ym,new We),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function zo(t,e,n,i,r,s){cs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(fa.x=s*cs.x-r*cs.y,fa.y=r*cs.x+s*cs.y):fa.copy(cs),t.copy(e),t.x+=fa.x,t.y+=fa.y,t.applyMatrix4(c_)}const Ei=new H,_u=new H,Vo=new H,Ho=new H;class u_{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,n),Ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){_u.copy(e).add(n).multiplyScalar(.5),Vo.copy(n).sub(e).normalize(),Ho.copy(this.origin).sub(_u);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Vo),o=Ho.dot(this.direction),l=-Ho.dot(Vo),c=Ho.lengthSq(),f=Math.abs(1-a*a);let h,d,p,x;if(f>0)if(h=a*l-o,d=a*o-l,x=s*f,h>=0)if(d>=-x)if(d<=x){const M=1/f;h*=M,d*=M,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(_u).addScaledVector(Vo,d),p}intersectSphere(e,n){if(e.radius<0)return null;Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),r=Ei.dot(Ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,h=e.x-a.x,d=e.y-a.y,p=e.z-a.z,x=n.x-a.x,M=n.y-a.y,g=n.z-a.z,u=i.x-a.x,m=i.y-a.y,y=i.z-a.z,_=Math.abs(l),T=Math.abs(c),w=Math.abs(f);let P,v,C,L,U,k,W,I,q,J,Z,G;if(_>=T&&_>=w?(C=l,k=h,q=x,G=u,l>=0?(P=c,v=f,L=d,U=p,W=M,I=g,J=m,Z=y):(P=f,v=c,L=p,U=d,W=g,I=M,J=y,Z=m)):T>=w?(C=c,k=d,q=M,G=m,c>=0?(P=f,v=l,L=p,U=h,W=g,I=x,J=y,Z=u):(P=l,v=f,L=h,U=p,W=x,I=g,J=u,Z=y)):(C=f,k=p,q=g,G=y,f>=0?(P=l,v=c,L=h,U=d,W=x,I=M,J=u,Z=m):(P=c,v=l,L=d,U=h,W=M,I=x,J=m,Z=u)),C===0)return null;const z=P/C,R=v/C,b=1/C,te=L-z*k,re=U-R*k,_e=W-z*q,he=I-R*q,de=J-z*G,B=Z-R*G,Y=de*he-B*_e,oe=te*B-re*de,Te=_e*re-he*te;if(r){if(Y<0||oe<0||Te<0)return null}else if((Y<0||oe<0||Te<0)&&(Y>0||oe>0||Te>0))return null;const ae=Y+oe+Te;if(ae===0)return null;const Ne=b*(Y*k+oe*q+Te*G);return(ae>0?Ne<0:Ne>0)?null:this.at(Ne/ae,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mh extends Ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.combine=zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mm=new Tt,Mr=new u_,Go=new yh,Em=new H,Wo=new H,Xo=new H,jo=new H,xu=new H,qo=new H,wm=new H,$o=new H;class Pt extends Yt{constructor(e=new Sn,n=new Mh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){qo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],h=s[l];f!==0&&(xu.fromBufferAttribute(h,e),a?qo.addScaledVector(xu,f):qo.addScaledVector(xu.sub(n),f))}n.add(qo)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Go.copy(i.boundingSphere),Go.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!(Go.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Go,Em)===null||Mr.origin.distanceToSquared(Em)>(e.far-e.near)**2))&&(Mm.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(Mm),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=d.length;x<M;x++){const g=d[x],u=a[g.materialIndex],m=Math.max(g.start,p.start),y=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let _=m,T=y;_<T;_+=3){const w=o.getX(_),P=o.getX(_+1),v=o.getX(_+2);r=Yo(this,u,e,i,c,f,h,w,P,v),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let g=x,u=M;g<u;g+=3){const m=o.getX(g),y=o.getX(g+1),_=o.getX(g+2);r=Yo(this,a,e,i,c,f,h,m,y,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=d.length;x<M;x++){const g=d[x],u=a[g.materialIndex],m=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=m,T=y;_<T;_+=3){const w=_,P=_+1,v=_+2;r=Yo(this,u,e,i,c,f,h,w,P,v),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=x,u=M;g<u;g+=3){const m=g,y=g+1,_=g+2;r=Yo(this,a,e,i,c,f,h,m,y,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function eE(t,e,n,i,r,s,a,o){let l;if(e.side===xn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Vr,o),l===null)return null;$o.copy(o),$o.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo($o);return c<n.near||c>n.far?null:{distance:c,point:$o.clone(),object:t}}function Yo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Wo),t.getVertexPosition(l,Xo),t.getVertexPosition(c,jo);const f=eE(t,e,n,i,Wo,Xo,jo,wm);if(f){const h=new H;Fn.getBarycoord(wm,Wo,Xo,jo,h),r&&(f.uv=Fn.getInterpolatedAttribute(r,o,l,c,h,new We)),s&&(f.uv1=Fn.getInterpolatedAttribute(s,o,l,c,h,new We)),a&&(f.normal=Fn.getInterpolatedAttribute(a,o,l,c,h,new H),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new H,materialIndex:0};Fn.getNormal(Wo,Xo,jo,d.normal),f.face=d,f.barycoord=h}return f}class tE extends sn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=qt,f=qt,h,d){super(null,a,o,l,c,f,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Er=new yh,nE=new We(.5,.5),Ko=new H;class Eh{constructor(e=new Ji,n=new Ji,i=new Ji,r=new Ji,s=new Ji,a=new Ji){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],h=s[5],d=s[6],p=s[7],x=s[8],M=s[9],g=s[10],u=s[11],m=s[12],y=s[13],_=s[14],T=s[15];if(r[0].setComponents(c-a,p-f,u-x,T-m).normalize(),r[1].setComponents(c+a,p+f,u+x,T+m).normalize(),r[2].setComponents(c+o,p+h,u+M,T+y).normalize(),r[3].setComponents(c-o,p-h,u-M,T-y).normalize(),i)r[4].setComponents(l,d,g,_).normalize(),r[5].setComponents(c-l,p-d,u-g,T-_).normalize();else if(r[4].setComponents(c-l,p-d,u-g,T-_).normalize(),n===di)r[5].setComponents(c+l,p+d,u+g,T+_).normalize();else if(n===eo)r[5].setComponents(l,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);const n=nE.distanceTo(e.center);return Er.radius=.7071067811865476+n,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ko.x=r.normal.x>0?e.max.x:e.min.x,Ko.y=r.normal.y>0?e.max.y:e.min.y,Ko.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class d_ extends sn{constructor(e=[],n=Hr,i,r,s,a,o,l,c,f){super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class io extends sn{constructor(e,n,i=gi,r,s,a,o=qt,l=qt,c,f=ki,h=1){if(f!==ki&&f!==Nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _h(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class iE extends io{constructor(e,n=gi,i=Hr,r,s,a=qt,o=qt,l,c=ki){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class f_ extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zs extends Sn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],h=[];let d=0,p=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(f,3)),this.setAttribute("uv",new It(h,2));function x(M,g,u,m,y,_,T,w,P,v,C){const L=_/P,U=T/v,k=_/2,W=T/2,I=w/2,q=P+1,J=v+1;let Z=0,G=0;const z=new H;for(let R=0;R<J;R++){const b=R*U-W;for(let te=0;te<q;te++){const re=te*L-k;z[M]=re*m,z[g]=b*y,z[u]=I,c.push(z.x,z.y,z.z),z[M]=0,z[g]=0,z[u]=w>0?1:-1,f.push(z.x,z.y,z.z),h.push(te/P),h.push(1-R/v),Z+=1}}for(let R=0;R<v;R++)for(let b=0;b<P;b++){const te=d+b+q*R,re=d+b+q*(R+1),_e=d+(b+1)+q*(R+1),he=d+(b+1)+q*R;l.push(te,re,he),l.push(re,_e,he),G+=6}o.addGroup(p,G,C),p+=G,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wh extends Sn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],l=[],c=new H,f=new We;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=n;h++,d+=3){const p=i+h/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),f.x=(a[d]/e+1)/2,f.y=(a[d+1]/e+1)/2,l.push(f.x,f.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new It(a,3)),this.setAttribute("normal",new It(o,3)),this.setAttribute("uv",new It(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Fs extends Sn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],d=[],p=[];let x=0;const M=[],g=i/2;let u=0;m(),a===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(f),this.setAttribute("position",new It(h,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(p,2));function m(){const _=new H,T=new H;let w=0;const P=(n-e)/i;for(let v=0;v<=s;v++){const C=[],L=v/s,U=L*(n-e)+e;for(let k=0;k<=r;k++){const W=k/r,I=W*l+o,q=Math.sin(I),J=Math.cos(I);T.x=U*q,T.y=-L*i+g,T.z=U*J,h.push(T.x,T.y,T.z),_.set(q,P,J).normalize(),d.push(_.x,_.y,_.z),p.push(W,1-L),C.push(x++)}M.push(C)}for(let v=0;v<r;v++)for(let C=0;C<s;C++){const L=M[C][v],U=M[C+1][v],k=M[C+1][v+1],W=M[C][v+1];(e>0||C!==0)&&(f.push(L,U,W),w+=3),(n>0||C!==s-1)&&(f.push(U,k,W),w+=3)}c.addGroup(u,w,0),u+=w}function y(_){const T=x,w=new We,P=new H;let v=0;const C=_===!0?e:n,L=_===!0?1:-1;for(let k=1;k<=r;k++)h.push(0,g*L,0),d.push(0,L,0),p.push(.5,.5),x++;const U=x;for(let k=0;k<=r;k++){const I=k/r*l+o,q=Math.cos(I),J=Math.sin(I);P.x=C*J,P.y=g*L,P.z=C*q,h.push(P.x,P.y,P.z),d.push(0,L,0),w.x=q*.5+.5,w.y=J*.5*L+.5,p.push(w.x,w.y),x++}for(let k=0;k<r;k++){const W=T+k,I=U+k;_===!0?f.push(I,I+1,W):f.push(I+1,I,W),v+=3}c.addGroup(u,v,_===!0?1:2),u+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zl extends Fs{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Zl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Th extends Sn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),f(),this.setAttribute("position",new It(s,3)),this.setAttribute("normal",new It(s.slice(),3)),this.setAttribute("uv",new It(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const y=new H,_=new H,T=new H;for(let w=0;w<n.length;w+=3)p(n[w+0],y),p(n[w+1],_),p(n[w+2],T),l(y,_,T,m)}function l(m,y,_,T){const w=T+1,P=[];for(let v=0;v<=w;v++){P[v]=[];const C=m.clone().lerp(_,v/w),L=y.clone().lerp(_,v/w),U=w-v;for(let k=0;k<=U;k++)k===0&&v===w?P[v][k]=C:P[v][k]=C.clone().lerp(L,k/U)}for(let v=0;v<w;v++)for(let C=0;C<2*(w-v)-1;C++){const L=Math.floor(C/2);C%2===0?(d(P[v][L+1]),d(P[v+1][L]),d(P[v][L])):(d(P[v][L+1]),d(P[v+1][L+1]),d(P[v+1][L]))}}function c(m){const y=new H;for(let _=0;_<s.length;_+=3)y.x=s[_+0],y.y=s[_+1],y.z=s[_+2],y.normalize().multiplyScalar(m),s[_+0]=y.x,s[_+1]=y.y,s[_+2]=y.z}function f(){const m=new H;for(let y=0;y<s.length;y+=3){m.x=s[y+0],m.y=s[y+1],m.z=s[y+2];const _=g(m)/2/Math.PI+.5,T=u(m)/Math.PI+.5;a.push(_,1-T)}x(),h()}function h(){for(let m=0;m<a.length;m+=6){const y=a[m+0],_=a[m+2],T=a[m+4],w=Math.max(y,_,T),P=Math.min(y,_,T);w>.9&&P<.1&&(y<.2&&(a[m+0]+=1),_<.2&&(a[m+2]+=1),T<.2&&(a[m+4]+=1))}}function d(m){s.push(m.x,m.y,m.z)}function p(m,y){const _=m*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function x(){const m=new H,y=new H,_=new H,T=new H,w=new We,P=new We,v=new We;for(let C=0,L=0;C<s.length;C+=9,L+=6){m.set(s[C+0],s[C+1],s[C+2]),y.set(s[C+3],s[C+4],s[C+5]),_.set(s[C+6],s[C+7],s[C+8]),w.set(a[L+0],a[L+1]),P.set(a[L+2],a[L+3]),v.set(a[L+4],a[L+5]),T.copy(m).add(y).add(_).divideScalar(3);const U=g(T);M(w,L+0,m,U),M(P,L+2,y,U),M(v,L+4,_,U)}}function M(m,y,_,T){T<0&&m.x===1&&(a[y]=m.x-1),_.x===0&&_.z===0&&(a[y]=T/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Th(e.vertices,e.indices,e.radius,e.detail)}}class Ah extends Th{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ah(e.radius,e.detail)}}class Ur extends Sn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,h=e/o,d=n/l,p=[],x=[],M=[],g=[];for(let u=0;u<f;u++){const m=u*d-a;for(let y=0;y<c;y++){const _=y*h-s;x.push(_,-m,0),M.push(0,0,1),g.push(y/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<o;m++){const y=m+c*u,_=m+c*(u+1),T=m+1+c*(u+1),w=m+1+c*u;p.push(y,_,w),p.push(_,T,w)}this.setIndex(p),this.setAttribute("position",new It(x,3)),this.setAttribute("normal",new It(M,3)),this.setAttribute("uv",new It(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jl extends Sn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const f=[],h=new H,d=new H,p=[],x=[],M=[],g=[];for(let u=0;u<=i;u++){const m=[],y=u/i,_=a+y*o,T=e*Math.cos(_),w=Math.sqrt(e*e-T*T);let P=0;u===0&&a===0?P=.5/n:u===i&&l===Math.PI&&(P=-.5/n);for(let v=0;v<=n;v++){const C=v/n,L=r+C*s;h.x=-w*Math.cos(L),h.y=T,h.z=w*Math.sin(L),x.push(h.x,h.y,h.z),d.copy(h).normalize(),M.push(d.x,d.y,d.z),g.push(C+P,1-y),m.push(c++)}f.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const y=f[u][m+1],_=f[u][m],T=f[u+1][m],w=f[u+1][m+1];(u!==0||a>0)&&p.push(y,_,w),(u!==i-1||l<Math.PI)&&p.push(_,T,w)}this.setIndex(p),this.setAttribute("position",new It(x,3)),this.setAttribute("normal",new It(M,3)),this.setAttribute("uv",new It(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Xs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Tm(r))r.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Tm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=Xs(t[n]);for(const r in i)e[r]=i[r]}return e}function Tm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function rE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function h_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const sE={clone:Xs,merge:cn};var aE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aE,this.fragmentShader=oE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=rE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new it().setHex(r.value);break;case"v2":this.uniforms[i].value=new We().fromArray(r.value);break;case"v3":this.uniforms[i].value=new H().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ct().fromArray(r.value);break;case"m3":this.uniforms[i].value=new je().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Tt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class lE extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jn extends Ks{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lf,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cE extends Ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uE extends Ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Su={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(Am(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!Am(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Am(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class dE{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){const h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],x=c[h+1];if(p.global&&(p.lastIndex=0),p.test(f))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const fE=new dE;class Ch{constructor(e){this.manager=e!==void 0?e:fE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ch.DEFAULT_MATERIAL_NAME="__DEFAULT";const us=new WeakMap;class hE extends Ch{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Su.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0);else{let h=us.get(a);h===void 0&&(h=[],us.set(a,h)),h.push({onLoad:n,onError:r})}return a}const o=to("img");function l(){f(),n&&n(this);const h=us.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}us.delete(this),s.manager.itemEnd(e)}function c(h){f(),r&&r(h),Su.remove(`image:${e}`);const d=us.get(this)||[];for(let p=0;p<d.length;p++){const x=d[p];x.onError&&x.onError(h)}us.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Su.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class pE extends Ch{constructor(e){super(e)}load(e,n,i,r){const s=new sn,a=new hE(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class p_ extends Yt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const yu=new Tt,Cm=new H,bm=new H;class mE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eh,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Cm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Cm),bm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(bm),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){yu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(yu,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===eo||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Zo=new H,Jo=new Ys,si=new H;class m_ extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zo,Jo,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Jo,si.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Zo,Jo,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Jo,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new H,Rm=new We,Pm=new We;class Un extends m_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=no*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return no*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,n){return this.getViewBounds(e,Rm,Pm),n.subVectors(Pm,Rm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(La*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class bh extends m_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class gE extends mE{constructor(){super(new bh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vE extends p_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new gE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class _E extends p_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ds=-90,fs=1;class xE extends Yt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Un(ds,fs,e,n);r.layers=this.layers,this.add(r);const s=new Un(ds,fs,e,n);s.layers=this.layers,this.add(s);const a=new Un(ds,fs,e,n);a.layers=this.layers,this.add(a);const o=new Un(ds,fs,e,n);o.layers=this.layers,this.add(o);const l=new Un(ds,fs,e,n);l.layers=this.layers,this.add(l);const c=new Un(ds,fs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,d,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class SE extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Nm=new Tt;class yE{constructor(e,n,i=0,r=1/0){this.ray=new u_(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new xh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):st("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Nm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nm),this}intersectObject(e,n=!0,i=[]){return cf(e,this,i,n),i.sort(Lm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)cf(e[r],this,i,n);return i.sort(Lm),i}}function Lm(t,e){return t.distance-e.distance}function cf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)cf(s[a],e,n,!0)}}class ME{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,He("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Ih=class Ih{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Ih.prototype.isMatrix2=!0;let Dm=Ih;function Im(t,e,n,i){const r=EE(i);switch(n){case Qv:return t*e;case t_:return t*e/r.components*r.byteLength;case fh:return t*e/r.components*r.byteLength;case Gr:return t*e*2/r.components*r.byteLength;case hh:return t*e*2/r.components*r.byteLength;case e_:return t*e*3/r.components*r.byteLength;case Zn:return t*e*4/r.components*r.byteLength;case ph:return t*e*4/r.components*r.byteLength;case gl:case vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case _l:case xl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ld:case Id:return Math.max(t,16)*Math.max(e,8)/4;case Nd:case Dd:return Math.max(t,8)*Math.max(e,8)/2;case Ud:case Fd:case kd:case Bd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Od:case Xl:case zd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case jd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case qd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case $d:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Jd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Qd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ef:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case tf:case nf:case rf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case sf:case af:return Math.ceil(t/4)*Math.ceil(e/4)*8;case jl:case of:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function EE(t){switch(t){case wn:case Yv:return{byteLength:1,components:1};case Ja:case Kv:case vi:return{byteLength:2,components:1};case uh:case dh:return{byteLength:2,components:4};case gi:case ch:case ui:return{byteLength:4,components:1};case Zv:case Jv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lh}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function g_(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function wE(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,f);else{h.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<h.length;p++){const x=h[d],M=h[p];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++d,h[d]=M)}h.length=d+1;for(let p=0,x=h.length;p<x;p++){const M=h[p];t.bufferSubData(c,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var TE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,LE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,IE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,BE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,XE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$E=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,YE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,KE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ZE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t1="gl_FragColor = linearToOutputTexel( gl_FragColor );",n1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,s1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,a1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,l1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,h1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,v1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,_1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,E1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,w1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,T1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,A1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,b1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,U1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,H1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,W1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,X1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Y1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ew=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,tw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ow=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,lw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_w=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ww=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Aw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Iw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ow=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ww=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$w=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:TE,alphahash_pars_fragment:AE,alphamap_fragment:CE,alphamap_pars_fragment:bE,alphatest_fragment:RE,alphatest_pars_fragment:PE,aomap_fragment:NE,aomap_pars_fragment:LE,batching_pars_vertex:DE,batching_vertex:IE,begin_vertex:UE,beginnormal_vertex:FE,bsdfs:OE,iridescence_fragment:kE,bumpmap_pars_fragment:BE,clipping_planes_fragment:zE,clipping_planes_pars_fragment:VE,clipping_planes_pars_vertex:HE,clipping_planes_vertex:GE,color_fragment:WE,color_pars_fragment:XE,color_pars_vertex:jE,color_vertex:qE,common:$E,cube_uv_reflection_fragment:YE,defaultnormal_vertex:KE,displacementmap_pars_vertex:ZE,displacementmap_vertex:JE,emissivemap_fragment:QE,emissivemap_pars_fragment:e1,colorspace_fragment:t1,colorspace_pars_fragment:n1,envmap_fragment:i1,envmap_common_pars_fragment:r1,envmap_pars_fragment:s1,envmap_pars_vertex:a1,envmap_physical_pars_fragment:v1,envmap_vertex:o1,fog_vertex:l1,fog_pars_vertex:c1,fog_fragment:u1,fog_pars_fragment:d1,gradientmap_pars_fragment:f1,lightmap_pars_fragment:h1,lights_lambert_fragment:p1,lights_lambert_pars_fragment:m1,lights_pars_begin:g1,lights_toon_fragment:_1,lights_toon_pars_fragment:x1,lights_phong_fragment:S1,lights_phong_pars_fragment:y1,lights_physical_fragment:M1,lights_physical_pars_fragment:E1,lights_fragment_begin:w1,lights_fragment_maps:T1,lights_fragment_end:A1,lightprobes_pars_fragment:C1,logdepthbuf_fragment:b1,logdepthbuf_pars_fragment:R1,logdepthbuf_pars_vertex:P1,logdepthbuf_vertex:N1,map_fragment:L1,map_pars_fragment:D1,map_particle_fragment:I1,map_particle_pars_fragment:U1,metalnessmap_fragment:F1,metalnessmap_pars_fragment:O1,morphinstance_vertex:k1,morphcolor_vertex:B1,morphnormal_vertex:z1,morphtarget_pars_vertex:V1,morphtarget_vertex:H1,normal_fragment_begin:G1,normal_fragment_maps:W1,normal_pars_fragment:X1,normal_pars_vertex:j1,normal_vertex:q1,normalmap_pars_fragment:$1,clearcoat_normal_fragment_begin:Y1,clearcoat_normal_fragment_maps:K1,clearcoat_pars_fragment:Z1,iridescence_pars_fragment:J1,opaque_fragment:Q1,packing:ew,premultiplied_alpha_fragment:tw,project_vertex:nw,dithering_fragment:iw,dithering_pars_fragment:rw,roughnessmap_fragment:sw,roughnessmap_pars_fragment:aw,shadowmap_pars_fragment:ow,shadowmap_pars_vertex:lw,shadowmap_vertex:cw,shadowmask_pars_fragment:uw,skinbase_vertex:dw,skinning_pars_vertex:fw,skinning_vertex:hw,skinnormal_vertex:pw,specularmap_fragment:mw,specularmap_pars_fragment:gw,tonemapping_fragment:vw,tonemapping_pars_fragment:_w,transmission_fragment:xw,transmission_pars_fragment:Sw,uv_pars_fragment:yw,uv_pars_vertex:Mw,uv_vertex:Ew,worldpos_vertex:ww,background_vert:Tw,background_frag:Aw,backgroundCube_vert:Cw,backgroundCube_frag:bw,cube_vert:Rw,cube_frag:Pw,depth_vert:Nw,depth_frag:Lw,distance_vert:Dw,distance_frag:Iw,equirect_vert:Uw,equirect_frag:Fw,linedashed_vert:Ow,linedashed_frag:kw,meshbasic_vert:Bw,meshbasic_frag:zw,meshlambert_vert:Vw,meshlambert_frag:Hw,meshmatcap_vert:Gw,meshmatcap_frag:Ww,meshnormal_vert:Xw,meshnormal_frag:jw,meshphong_vert:qw,meshphong_frag:$w,meshphysical_vert:Yw,meshphysical_frag:Kw,meshtoon_vert:Zw,meshtoon_frag:Jw,points_vert:Qw,points_frag:eT,shadow_vert:tT,shadow_frag:nT,sprite_vert:iT,sprite_frag:rT},Se={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},li={basic:{uniforms:cn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:cn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:cn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:cn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:cn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new it(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:cn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:cn([Se.points,Se.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:cn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:cn([Se.common,Se.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:cn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:cn([Se.sprite,Se.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:cn([Se.common,Se.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:cn([Se.lights,Se.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};li.physical={uniforms:cn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Qo={r:0,b:0,g:0},sT=new Tt,v_=new je;v_.set(-1,0,0,0,1,0,0,0,1);function aT(t,e,n,i,r,s){const a=new it(0);let o=r===!0?0:1,l,c,f=null,h=0,d=null;function p(m){let y=m.isScene===!0?m.background:null;if(y&&y.isTexture){const _=m.backgroundBlurriness>0;y=e.get(y,_)}return y}function x(m){let y=!1;const _=p(m);_===null?g(a,o):_&&_.isColor&&(g(_,1),y=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(m,y){const _=p(y);_&&(_.isCubeTexture||_.mapping===vc)?(c===void 0&&(c=new Pt(new Zs(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Xs(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sT.makeRotationFromEuler(y.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(v_),c.material.toneMapped=rt.getTransfer(_.colorSpace)!==ft,(f!==_||h!==_.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,d=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Pt(new Ur(2,2),new _i({name:"BackgroundMaterial",uniforms:Xs(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=rt.getTransfer(_.colorSpace)!==ft,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=_,h=_.version,d=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,y){m.getRGB(Qo,h_(t)),n.buffers.color.setClear(Qo.r,Qo.g,Qo.b,y,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,y=1){a.set(m),o=y,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(a,o)},render:x,addToRenderList:M,dispose:u}}function oT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(U,k,W,I,q){let J=!1;const Z=h(U,I,W,k);s!==Z&&(s=Z,c(s.object)),J=p(U,I,W,q),J&&x(U,I,W,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,_(U,k,W,I),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function c(U){return t.bindVertexArray(U)}function f(U){return t.deleteVertexArray(U)}function h(U,k,W,I){const q=I.wireframe===!0;let J=i[k.id];J===void 0&&(J={},i[k.id]=J);const Z=U.isInstancedMesh===!0?U.id:0;let G=J[Z];G===void 0&&(G={},J[Z]=G);let z=G[W.id];z===void 0&&(z={},G[W.id]=z);let R=z[q];return R===void 0&&(R=d(l()),z[q]=R),R}function d(U){const k=[],W=[],I=[];for(let q=0;q<n;q++)k[q]=0,W[q]=0,I[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:W,attributeDivisors:I,object:U,attributes:{},index:null}}function p(U,k,W,I){const q=s.attributes,J=k.attributes;let Z=0;const G=W.getAttributes();for(const z in G)if(G[z].location>=0){const b=q[z];let te=J[z];if(te===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&(te=U.instanceColor)),b===void 0||b.attribute!==te||te&&b.data!==te.data)return!0;Z++}return s.attributesNum!==Z||s.index!==I}function x(U,k,W,I){const q={},J=k.attributes;let Z=0;const G=W.getAttributes();for(const z in G)if(G[z].location>=0){let b=J[z];b===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&(b=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&(b=U.instanceColor));const te={};te.attribute=b,b&&b.data&&(te.data=b.data),q[z]=te,Z++}s.attributes=q,s.attributesNum=Z,s.index=I}function M(){const U=s.newAttributes;for(let k=0,W=U.length;k<W;k++)U[k]=0}function g(U){u(U,0)}function u(U,k){const W=s.newAttributes,I=s.enabledAttributes,q=s.attributeDivisors;W[U]=1,I[U]===0&&(t.enableVertexAttribArray(U),I[U]=1),q[U]!==k&&(t.vertexAttribDivisor(U,k),q[U]=k)}function m(){const U=s.newAttributes,k=s.enabledAttributes;for(let W=0,I=k.length;W<I;W++)k[W]!==U[W]&&(t.disableVertexAttribArray(W),k[W]=0)}function y(U,k,W,I,q,J,Z){Z===!0?t.vertexAttribIPointer(U,k,W,q,J):t.vertexAttribPointer(U,k,W,I,q,J)}function _(U,k,W,I){M();const q=I.attributes,J=W.getAttributes(),Z=k.defaultAttributeValues;for(const G in J){const z=J[G];if(z.location>=0){let R=q[G];if(R===void 0&&(G==="instanceMatrix"&&U.instanceMatrix&&(R=U.instanceMatrix),G==="instanceColor"&&U.instanceColor&&(R=U.instanceColor)),R!==void 0){const b=R.normalized,te=R.itemSize,re=e.get(R);if(re===void 0)continue;const _e=re.buffer,he=re.type,de=re.bytesPerElement,B=he===t.INT||he===t.UNSIGNED_INT||R.gpuType===ch;if(R.isInterleavedBufferAttribute){const Y=R.data,oe=Y.stride,Te=R.offset;if(Y.isInstancedInterleavedBuffer){for(let ae=0;ae<z.locationSize;ae++)u(z.location+ae,Y.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ae=0;ae<z.locationSize;ae++)g(z.location+ae);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let ae=0;ae<z.locationSize;ae++)y(z.location+ae,te/z.locationSize,he,b,oe*de,(Te+te/z.locationSize*ae)*de,B)}else{if(R.isInstancedBufferAttribute){for(let Y=0;Y<z.locationSize;Y++)u(z.location+Y,R.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let Y=0;Y<z.locationSize;Y++)g(z.location+Y);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let Y=0;Y<z.locationSize;Y++)y(z.location+Y,te/z.locationSize,he,b,te*de,te/z.locationSize*Y*de,B)}}else if(Z!==void 0){const b=Z[G];if(b!==void 0)switch(b.length){case 2:t.vertexAttrib2fv(z.location,b);break;case 3:t.vertexAttrib3fv(z.location,b);break;case 4:t.vertexAttrib4fv(z.location,b);break;default:t.vertexAttrib1fv(z.location,b)}}}}m()}function T(){C();for(const U in i){const k=i[U];for(const W in k){const I=k[W];for(const q in I){const J=I[q];for(const Z in J)f(J[Z].object),delete J[Z];delete I[q]}}delete i[U]}}function w(U){if(i[U.id]===void 0)return;const k=i[U.id];for(const W in k){const I=k[W];for(const q in I){const J=I[q];for(const Z in J)f(J[Z].object),delete J[Z];delete I[q]}}delete i[U.id]}function P(U){for(const k in i){const W=i[k];for(const I in W){const q=W[I];if(q[U.id]===void 0)continue;const J=q[U.id];for(const Z in J)f(J[Z].object),delete J[Z];delete q[U.id]}}}function v(U){for(const k in i){const W=i[k],I=U.isInstancedMesh===!0?U.id:0,q=W[I];if(q!==void 0){for(const J in q){const Z=q[J];for(const G in Z)f(Z[G].object),delete Z[G];delete q[J]}delete W[I],Object.keys(W).length===0&&delete i[k]}}}function C(){L(),a=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:g,disableUnusedAttributes:m}}function lT(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let d=0;for(let p=0;p<f;p++)d+=c[p];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function cT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Zn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const v=P===vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==wn&&P!==ui&&!v&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(He("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:_,maxSamples:T,samples:w}}function uT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ji,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,p){const x=h.clippingPlanes,M=h.clipIntersection,g=h.clipShadows,u=t.get(h);if(!r||x===null||x.length===0||s&&!g)s?f(null):c();else{const m=s?0:i,y=m*4;let _=u.clippingState||null;l.value=_,_=f(x,d,y,p);for(let T=0;T!==y;++T)_[T]=n[T];u.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,p,x){const M=h!==null?h.length:0;let g=null;if(M!==0){if(g=l.value,x!==!0||g===null){const u=p+M*4,m=d.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<u)&&(g=new Float32Array(u));for(let y=0,_=p;y!==M;++y,_+=4)a.copy(h[y]).applyMatrix4(m,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}const Cs=4,dT=6,fT=20,hT=256,pa=new bh,Um=new it;let Mu=null,Eu=0,wu=0,Tu=!1;const pT=new H,wr=new H;class Fm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=pT}=s;Mu=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel(),Tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Mu,Eu,wu),this._renderer.xr.enabled=Tu,e.scissorTest=!1,hs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hr||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mu=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel(),Tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:vi,format:Zn,colorSpace:ql,depthBuffer:!1},r=Om(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Om(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=mT(s)),this._blurMaterial=vT(s,e,n),this._ggxMaterial=gT(s,e,n)}return r}_compileMaterial(e){const n=new Pt(new Sn,e);this._renderer.compile(n,pa)}_sceneToCubeUV(e,n,i,r,s){const l=new Un(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Um),h.toneMapping=pi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new Zs,new Mh({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let u=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,u=!0):(g.color.copy(Um),u=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[y],s.y,s.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[y]));const T=this._cubeSize;hs(r,_*T,y>2?T:0,T,T),h.setRenderTarget(r),u&&h.render(M,l),h.render(e,l)}h.toneMapping=p,h.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Hr||e.mapping===Ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=km());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;hs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,pa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),d=c*1.25,p=h*d,{_lodMax:x}=this,M=this._sizeLods[i],g=3*M*(i>x-Cs?i-x+Cs:0),u=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-n,hs(s,g,u,3*M,2*M),r.setRenderTarget(s),r.render(o,pa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,hs(e,g,u,3*M,2*M),r.setRenderTarget(e),r.render(o,pa)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,n,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const f=this._sizeLods[r],h=3*f*(r>this._lodMax-Cs?r-this._lodMax+Cs:0),d=4*(this._cubeSize-f);hs(n,h,d,3*f,2*f),a.setRenderTarget(n),a.render(l,pa)}}function mT(t){const e=[],n=[];let i=t;const r=t-Cs+1+dT;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,p=3,x=new Float32Array(p*d*h),M=new Float32Array(p*d*h);for(let u=0;u<h;u++){const m=u%3*2/3-1,y=u>2?0:-1,_=[m,y,0,m+2/3,y,0,m+2/3,y+1,0,m,y,0,m+2/3,y+1,0,m,y+1,0];x.set(_,p*d*u);for(let T=0;T<d;T++){const w=f[T*2]*2-1,P=f[T*2+1]*2-1;u===0?wr.set(1,P,w):u===1?wr.set(-w,1,-P):u===2?wr.set(-w,P,1):u===3?wr.set(-1,P,-w):u===4?wr.set(-w,-1,P):wr.set(w,P,-1),wr.toArray(M,(u*d+T)*p)}}const g=new Sn;g.setAttribute("position",new mi(x,p)),g.setAttribute("outputDirection",new mi(M,p)),n.push(new Pt(g,null)),i>Cs&&i--}return{lodMeshes:n,sizeLods:e}}function Om(t,e,n){const i=new ei(t,e,n);return i.texture.mapping=vc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function gT(t,e,n){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function vT(t,e,n){return new _i({name:"SphericalGaussianBlur",defines:{SAMPLES:fT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function km(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Bm(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function _c(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class __ extends ei{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new d_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Zs(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Ni});s.uniforms.tEquirect.value=n;const a=new Pt(r,s),o=n.minFilter;return n.minFilter===Pr&&(n.minFilter=rn),new xE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function _T(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===Yc||p===Kc)if(e.has(d)){const x=e.get(d).texture;return o(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const M=new __(x.height);return M.fromEquirectangularTexture(t,d),e.set(d,M),d.addEventListener("dispose",c),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const p=d.mapping,x=p===Yc||p===Kc,M=p===Hr||p===Ws;if(x||M){let g=n.get(d);const u=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new Fm(t)),g=x?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),g.texture;if(g!==void 0)return g.texture;{const m=d.image;return x&&m&&m.height>0||M&&m&&l(m)?(i===null&&(i=new Fm(t)),g=x?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),d.addEventListener("dispose",f),g.texture):null}}}return d}function o(d,p){return p===Yc?d.mapping=Hr:p===Kc&&(d.mapping=Ws),d}function l(d){let p=0;const x=6;for(let M=0;M<x;M++)d[M]!==void 0&&p++;return p===x}function c(d){const p=d.target;p.removeEventListener("dispose",c);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function f(d){const p=d.target;p.removeEventListener("dispose",f);const x=n.get(p);x!==void 0&&(n.delete(p),x.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function xT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Is("WebGLRenderer: "+i+" extension not supported."),r}}}function ST(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,x=h.attributes.position;let M=0;if(x===void 0)return;if(p!==null){const m=p.array;M=p.version;for(let y=0,_=m.length;y<_;y+=3){const T=m[y+0],w=m[y+1],P=m[y+2];d.push(T,w,w,P,P,T)}}else{const m=x.array;M=x.version;for(let y=0,_=m.length/3-1;y<_;y+=3){const T=y+0,w=y+1,P=y+2;d.push(T,w,w,P,P,T)}}const g=new(x.count>=65535?o_:a_)(d,1);g.version=M;const u=s.get(h);u&&e.remove(u),s.set(h,g)}function f(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function yT(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){t.drawElements(i,d,s,h*a),n.update(d,i,1)}function c(h,d,p){p!==0&&(t.drawElementsInstanced(i,d,s,h*a,p),n.update(d,i,p))}function f(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,p);let M=0;for(let g=0;g<p;g++)M+=d[g];n.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function MT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:st("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ET(t,e,n){const i=new WeakMap,r=new Ct;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let C=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],m=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),x===!0&&(y=2),M===!0&&(y=3);let _=o.attributes.position.count*y,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const w=new Float32Array(_*T*4*h),P=new r_(w,_,T,h);P.type=ui,P.needsUpdate=!0;const v=y*4;for(let L=0;L<h;L++){const U=g[L],k=u[L],W=m[L],I=_*T*4*L;for(let q=0;q<U.count;q++){const J=q*v;p===!0&&(r.fromBufferAttribute(U,q),w[I+J+0]=r.x,w[I+J+1]=r.y,w[I+J+2]=r.z,w[I+J+3]=0),x===!0&&(r.fromBufferAttribute(k,q),w[I+J+4]=r.x,w[I+J+5]=r.y,w[I+J+6]=r.z,w[I+J+7]=0),M===!0&&(r.fromBufferAttribute(W,q),w[I+J+8]=r.x,w[I+J+9]=r.y,w[I+J+10]=r.z,w[I+J+11]=W.itemSize===4?r.w:1)}}d={count:h,texture:P,size:new We(_,T)},i.set(o,d),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function wT(t,e,n,i,r){let s=new WeakMap;function a(c){const f=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==f&&(p.update(),s.set(p,f))}return d}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:a,dispose:o}}const TT={[Vv]:"LINEAR_TONE_MAPPING",[Hv]:"REINHARD_TONE_MAPPING",[Gv]:"CINEON_TONE_MAPPING",[Wv]:"ACES_FILMIC_TONE_MAPPING",[jv]:"AGX_TONE_MAPPING",[qv]:"NEUTRAL_TONE_MAPPING",[Xv]:"CUSTOM_TONE_MAPPING"};function AT(t,e,n,i,r,s){const a=new ei(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Sn;c.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new It([0,2,0,0,2,0],2));const f=new lE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Pt(c,f),d=new bh(-1,1,1,-1,0,1);let p=null,x=null,M=!1,g,u=null,m=[],y=!1;this.setSize=function(_,T){a.setSize(_,T),o!==null&&o.setSize(_,T),l!==null&&l.setSize(_,T);for(let w=0;w<m.length;w++){const P=m[w];P.setSize&&P.setSize(_,T)}},this.setEffects=function(_){m=_,y=m.length>0&&m[0].isRenderPass===!0;const T=a.width,w=a.height;m.length>0&&o===null&&(o=new ei(T,w,{type:vi,depthBuffer:!1,stencilBuffer:!1}),l=new ei(T,w,{type:vi,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<m.length;P++){const v=m[P];v.setSize&&v.setSize(T,w)}},this.begin=function(_,T){if(M||_.toneMapping===pi&&m.length===0)return!1;if(u=T,T!==null){const w=T.width,P=T.height;(a.width!==w||a.height!==P)&&this.setSize(w,P)}return y===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=pi,!0},this.hasRenderPass=function(){return y},this.end=function(_,T){_.toneMapping=g,M=!0;let w=a,P=o;for(let v=0;v<m.length;v++){const C=m[v];C.enabled!==!1&&(C.render(_,P,w,T),C.needsSwap!==!1&&(w=P,P=P===o?l:o))}if(p!==_.outputColorSpace||x!==_.toneMapping){p=_.outputColorSpace,x=_.toneMapping,f.defines={},rt.getTransfer(p)===ft&&(f.defines.SRGB_TRANSFER="");const v=TT[x];v&&(f.defines[v]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(u),_.render(h,d),u=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}const x_=new sn,uf=new io(1,1),S_=new r_,y_=new OM,M_=new d_,zm=[],Vm=[],Hm=new Float32Array(16),Gm=new Float32Array(9),Wm=new Float32Array(4);function Js(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=zm[r];if(s===void 0&&(s=new Float32Array(r),zm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xc(t,e){let n=Vm[e];n===void 0&&(n=new Int32Array(e),Vm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function CT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),Ht(n,e)}}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),Ht(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),Ht(n,e)}}function NT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ht(n,e)}else{if(Vt(n,i))return;Wm.set(i),t.uniformMatrix2fv(this.addr,!1,Wm),Ht(n,i)}}function LT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ht(n,e)}else{if(Vt(n,i))return;Gm.set(i),t.uniformMatrix3fv(this.addr,!1,Gm),Ht(n,i)}}function DT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ht(n,e)}else{if(Vt(n,i))return;Hm.set(i),t.uniformMatrix4fv(this.addr,!1,Hm),Ht(n,i)}}function IT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),Ht(n,e)}}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),Ht(n,e)}}function OT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),Ht(n,e)}}function kT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function BT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),Ht(n,e)}}function zT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),Ht(n,e)}}function VT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),Ht(n,e)}}function HT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(uf.compareFunction=n.isReversedDepthBuffer()?gh:mh,s=uf):s=x_,n.setTexture2D(e||s,r)}function GT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||y_,r)}function WT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||M_,r)}function XT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||S_,r)}function jT(t){switch(t){case 5126:return CT;case 35664:return bT;case 35665:return RT;case 35666:return PT;case 35674:return NT;case 35675:return LT;case 35676:return DT;case 5124:case 35670:return IT;case 35667:case 35671:return UT;case 35668:case 35672:return FT;case 35669:case 35673:return OT;case 5125:return kT;case 36294:return BT;case 36295:return zT;case 36296:return VT;case 35678:case 36198:case 36298:case 36306:case 35682:return HT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return XT}}function qT(t,e){t.uniform1fv(this.addr,e)}function $T(t,e){const n=Js(e,this.size,2);t.uniform2fv(this.addr,n)}function YT(t,e){const n=Js(e,this.size,3);t.uniform3fv(this.addr,n)}function KT(t,e){const n=Js(e,this.size,4);t.uniform4fv(this.addr,n)}function ZT(t,e){const n=Js(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function JT(t,e){const n=Js(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function QT(t,e){const n=Js(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function eA(t,e){t.uniform1iv(this.addr,e)}function tA(t,e){t.uniform2iv(this.addr,e)}function nA(t,e){t.uniform3iv(this.addr,e)}function iA(t,e){t.uniform4iv(this.addr,e)}function rA(t,e){t.uniform1uiv(this.addr,e)}function sA(t,e){t.uniform2uiv(this.addr,e)}function aA(t,e){t.uniform3uiv(this.addr,e)}function oA(t,e){t.uniform4uiv(this.addr,e)}function lA(t,e,n){const i=this.cache,r=e.length,s=xc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=uf:a=x_;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function cA(t,e,n){const i=this.cache,r=e.length,s=xc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||y_,s[a])}function uA(t,e,n){const i=this.cache,r=e.length,s=xc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||M_,s[a])}function dA(t,e,n){const i=this.cache,r=e.length,s=xc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||S_,s[a])}function fA(t){switch(t){case 5126:return qT;case 35664:return $T;case 35665:return YT;case 35666:return KT;case 35674:return ZT;case 35675:return JT;case 35676:return QT;case 5124:case 35670:return eA;case 35667:case 35671:return tA;case 35668:case 35672:return nA;case 35669:case 35673:return iA;case 5125:return rA;case 36294:return sA;case 36295:return aA;case 36296:return oA;case 35678:case 36198:case 36298:case 36306:case 35682:return lA;case 35679:case 36299:case 36307:return cA;case 35680:case 36300:case 36308:case 36293:return uA;case 36289:case 36303:case 36311:case 36292:return dA}}class hA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=jT(n.type)}}class pA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fA(n.type)}}class mA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Au=/(\w+)(\])?(\[|\.)?/g;function Xm(t,e){t.seq.push(e),t.map[e.id]=e}function gA(t,e,n){const i=t.name,r=i.length;for(Au.lastIndex=0;;){const s=Au.exec(i),a=Au.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Xm(n,c===void 0?new hA(o,t,e):new pA(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new mA(o),Xm(n,h)),n=h}}}class Sl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);gA(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function jm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const vA=37297;let _A=0;function xA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const qm=new je;function SA(t){rt._getMatrix(qm,rt.workingColorSpace,t);const e=`mat3( ${qm.elements.map(n=>n.toFixed(4))} )`;switch(rt.getTransfer(t)){case $l:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function $m(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+xA(t.getShaderSource(e),o)}else return s}function yA(t,e){const n=SA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const MA={[Vv]:"Linear",[Hv]:"Reinhard",[Gv]:"Cineon",[Wv]:"ACESFilmic",[jv]:"AgX",[qv]:"Neutral",[Xv]:"Custom"};function EA(t,e){const n=MA[e];return n===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const el=new H;function wA(){rt.getLuminanceCoefficients(el);const t=el.x.toFixed(4),e=el.y.toFixed(4),n=el.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function AA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function CA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ya(t){return t!==""}function Ym(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Km(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bA=/^[ \t]*#include +<([\w\d./]+)>/gm;function df(t){return t.replace(bA,PA)}const RA=new Map;function PA(t,e){let n=Ke[e];if(n===void 0){const i=RA.get(e);if(i!==void 0)n=Ke[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return df(n)}const NA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zm(t){return t.replace(NA,LA)}function LA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const DA={[ml]:"SHADOWMAP_TYPE_PCF",[Sa]:"SHADOWMAP_TYPE_VSM"};function IA(t){return DA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const UA={[Hr]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE",[vc]:"ENVMAP_TYPE_CUBE_UV"};function FA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":UA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const OA={[Ws]:"ENVMAP_MODE_REFRACTION"};function kA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":OA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const BA={[zv]:"ENVMAP_BLENDING_MULTIPLY",[eM]:"ENVMAP_BLENDING_MIX",[tM]:"ENVMAP_BLENDING_ADD"};function zA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":BA[t.combine]||"ENVMAP_BLENDING_NONE"}function VA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function HA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=IA(n),c=FA(n),f=kA(n),h=zA(n),d=VA(n),p=TA(n),x=AA(s),M=r.createProgram();let g,u,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ya).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ya).join(`
`),u.length>0&&(u+=`
`)):(g=[Jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),u=[Jm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pi?"#define TONE_MAPPING":"",n.toneMapping!==pi?Ke.tonemapping_pars_fragment:"",n.toneMapping!==pi?EA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,yA("linearToOutputTexel",n.outputColorSpace),wA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ya).join(`
`)),a=df(a),a=Ym(a,n),a=Km(a,n),o=df(o),o=Ym(o,n),o=Km(o,n),a=Zm(a),o=Zm(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===sm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=m+g+a,_=m+u+o,T=jm(r,r.VERTEX_SHADER,y),w=jm(r,r.FRAGMENT_SHADER,_);r.attachShader(M,T),r.attachShader(M,w),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function P(U){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(M)||"",W=r.getShaderInfoLog(T)||"",I=r.getShaderInfoLog(w)||"",q=k.trim(),J=W.trim(),Z=I.trim();let G=!0,z=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,T,w);else{const R=$m(r,T,"vertex"),b=$m(r,w,"fragment");st("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+q+`
`+R+`
`+b)}else q!==""?He("WebGLProgram: Program Info Log:",q):(J===""||Z==="")&&(z=!1);z&&(U.diagnostics={runnable:G,programLog:q,vertexShader:{log:J,prefix:g},fragmentShader:{log:Z,prefix:u}})}r.deleteShader(T),r.deleteShader(w),v=new Sl(r,M),C=CA(r,M)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let C;this.getAttributes=function(){return C===void 0&&P(this),C};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(M,vA)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_A++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=w,this}let GA=0;class WA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new XA(e),n.set(e,i)),i}}class XA{constructor(e){this.id=GA++,this.code=e,this.usedTimes=0}}function jA(t){return t===Gr||t===Xl||t===jl}function qA(t,e,n,i,r,s){const a=new xh,o=new WA,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,C,L,U,k,W){const I=U.fog,q=k.geometry,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,G=e.get(v.envMap||J,Z),z=G&&G.mapping===vc?G.image.height:null,R=p[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&He("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const b=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,te=b!==void 0?b.length:0;let re=0;q.morphAttributes.position!==void 0&&(re=1),q.morphAttributes.normal!==void 0&&(re=2),q.morphAttributes.color!==void 0&&(re=3);let _e,he,de,B;if(R){const vt=li[R];_e=vt.vertexShader,he=vt.fragmentShader}else{_e=v.vertexShader,he=v.fragmentShader;const vt=o.getVertexShaderStage(v),ct=o.getFragmentShaderStage(v);o.update(v,vt,ct),de=vt.id,B=ct.id}const Y=t.getRenderTarget(),oe=t.state.buffers.depth.getReversed(),Te=k.isInstancedMesh===!0,ae=k.isBatchedMesh===!0,Ne=!!v.map,$e=!!v.matcap,ye=!!G,Ve=!!v.aoMap,be=!!v.lightMap,ue=!!v.bumpMap&&v.wireframe===!1,Ae=!!v.normalMap,Ge=!!v.displacementMap,Xe=!!v.emissiveMap,et=!!v.metalnessMap,dt=!!v.roughnessMap,D=v.anisotropy>0,St=v.clearcoat>0,at=v.dispersion>0,N=v.retroreflectivity>0,S=v.iridescence>0,V=v.sheen>0,$=v.transmission>0,Q=D&&!!v.anisotropyMap,ce=St&&!!v.clearcoatMap,fe=St&&!!v.clearcoatNormalMap,ee=St&&!!v.clearcoatRoughnessMap,ie=S&&!!v.iridescenceMap,pe=S&&!!v.iridescenceThicknessMap,Fe=V&&!!v.sheenColorMap,xe=V&&!!v.sheenRoughnessMap,me=!!v.specularMap,Oe=!!v.specularColorMap,ze=!!v.specularIntensityMap,qe=$&&!!v.transmissionMap,O=$&&!!v.thicknessMap,ge=!!v.gradientMap,ne=!!v.alphaMap,ve=v.alphaTest>0,we=!!v.alphaHash,se=!!v.extensions;let ke=pi;v.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ke=t.toneMapping);const Ie={shaderID:R,shaderType:v.type,shaderName:v.name,vertexShader:_e,fragmentShader:he,defines:v.defines,customVertexShaderID:de,customFragmentShaderID:B,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:ae,batchingColor:ae&&k._colorsTexture!==null,instancing:Te,instancingColor:Te&&k.instanceColor!==null,instancingMorph:Te&&k.morphTexture!==null,outputColorSpace:Y===null?t.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ne,matcap:$e,envMap:ye,envMapMode:ye&&G.mapping,envMapCubeUVHeight:z,aoMap:Ve,lightMap:be,bumpMap:ue,normalMap:Ae,displacementMap:Ge,emissiveMap:Xe,normalMapObjectSpace:Ae&&v.normalMapType===rM,normalMapTangentSpace:Ae&&v.normalMapType===lf,packedNormalMap:Ae&&v.normalMapType===lf&&jA(v.normalMap.format),metalnessMap:et,roughnessMap:dt,anisotropy:D,anisotropyMap:Q,clearcoat:St,clearcoatMap:ce,clearcoatNormalMap:fe,clearcoatRoughnessMap:ee,dispersion:at,retroreflection:N,iridescence:S,iridescenceMap:ie,iridescenceThicknessMap:pe,sheen:V,sheenColorMap:Fe,sheenRoughnessMap:xe,specularMap:me,specularColorMap:Oe,specularIntensityMap:ze,transmission:$,transmissionMap:qe,thicknessMap:O,gradientMap:ge,opaque:v.transparent===!1&&v.blending===Na&&v.alphaToCoverage===!1,alphaMap:ne,alphaTest:ve,alphaHash:we,combine:v.combine,mapUv:Ne&&x(v.map.channel),aoMapUv:Ve&&x(v.aoMap.channel),lightMapUv:be&&x(v.lightMap.channel),bumpMapUv:ue&&x(v.bumpMap.channel),normalMapUv:Ae&&x(v.normalMap.channel),displacementMapUv:Ge&&x(v.displacementMap.channel),emissiveMapUv:Xe&&x(v.emissiveMap.channel),metalnessMapUv:et&&x(v.metalnessMap.channel),roughnessMapUv:dt&&x(v.roughnessMap.channel),anisotropyMapUv:Q&&x(v.anisotropyMap.channel),clearcoatMapUv:ce&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:xe&&x(v.sheenRoughnessMap.channel),specularMapUv:me&&x(v.specularMap.channel),specularColorMapUv:Oe&&x(v.specularColorMap.channel),specularIntensityMapUv:ze&&x(v.specularIntensityMap.channel),transmissionMapUv:qe&&x(v.transmissionMap.channel),thicknessMapUv:O&&x(v.thicknessMap.channel),alphaMapUv:ne&&x(v.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ae||D),vertexNormals:!!q.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(Ne||ne),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||q.attributes.normal===void 0&&Ae===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:oe,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:re,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ne&&v.map.isVideoTexture===!0&&rt.getTransfer(v.map.colorSpace)===ft,decodeVideoTextureEmissive:Xe&&v.emissiveMap.isVideoTexture===!0&&rt.getTransfer(v.emissiveMap.colorSpace)===ft,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ai,flipSided:v.side===xn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:se&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&v.extensions.multiDraw===!0||ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function g(v){const C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)C.push(L),C.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(u(C,v),m(C,v),C.push(t.outputColorSpace)),C.push(v.customProgramCacheKey),C.join()}function u(v,C){v.push(C.precision),v.push(C.outputColorSpace),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.mapUv),v.push(C.alphaMapUv),v.push(C.lightMapUv),v.push(C.aoMapUv),v.push(C.bumpMapUv),v.push(C.normalMapUv),v.push(C.displacementMapUv),v.push(C.emissiveMapUv),v.push(C.metalnessMapUv),v.push(C.roughnessMapUv),v.push(C.anisotropyMapUv),v.push(C.clearcoatMapUv),v.push(C.clearcoatNormalMapUv),v.push(C.clearcoatRoughnessMapUv),v.push(C.iridescenceMapUv),v.push(C.iridescenceThicknessMapUv),v.push(C.sheenColorMapUv),v.push(C.sheenRoughnessMapUv),v.push(C.specularMapUv),v.push(C.specularColorMapUv),v.push(C.specularIntensityMapUv),v.push(C.transmissionMapUv),v.push(C.thicknessMapUv),v.push(C.combine),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numSunLights),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numSunLightShadows),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.numLightProbes),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function m(v,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.retroreflection&&a.enable(24),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function y(v){const C=p[v.type];let L;if(C){const U=li[C];L=sE.clone(U.uniforms)}else L=v.uniforms;return L}function _(v,C){let L=f.get(C);return L!==void 0?++L.usedTimes:(L=new HA(t,C,v,r),c.push(L),f.set(C,L)),L}function T(v){if(--v.usedTimes===0){const C=c.indexOf(v);c[C]=c[c.length-1],c.pop(),f.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function P(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:y,acquireProgram:_,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:P}}function $A(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function YA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Qm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function eg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,x,M,g,u){let m=t[e];return m===void 0?(m={id:d.id,object:d,geometry:p,material:x,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:g,group:u},t[e]=m):(m.id=d.id,m.object=d,m.geometry=p,m.material=x,m.materialVariant=a(d),m.groupOrder=M,m.renderOrder=d.renderOrder,m.z=g,m.group=u),e++,m}function l(d,p,x,M,g,u,m){m.reversedDepth===!0&&(g=-g);const y=o(d,p,x,M,g,u);x.transmission>0?i.push(y):x.transparent===!0?r.push(y):n.push(y)}function c(d,p,x,M,g,u){const m=o(d,p,x,M,g,u);x.transmission>0?i.unshift(m):x.transparent===!0?r.unshift(m):n.unshift(m)}function f(d,p){n.length>1&&n.sort(d||YA),i.length>1&&i.sort(p||Qm),r.length>1&&r.sort(p||Qm)}function h(){for(let d=e,p=t.length;d<p;d++){const x=t[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function KA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new eg,t.set(i,[a])):r>=s.length?(a=new eg,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function ZA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new H,color:new it};break;case"SpotLight":n={position:new H,direction:new H,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function JA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let QA=0;function eC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function tC(t){const e=new ZA,n=JA(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new Tt,a=new Tt;function o(c){let f=0,h=0,d=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let p=0,x=0,M=0,g=0,u=0,m=0,y=0,_=0,T=0,w=0,P=0,v=0,C=0,L=0;c.sort(eC);for(let k=0,W=c.length;k<W;k++){const I=c[k],q=I.color,J=I.intensity,Z=I.distance;let G=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Gr?G=I.shadow.map.texture:G=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)f+=q.r*J,h+=q.g*J,d+=q.b*J;else if(I.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(I.sh.coefficients[z],J);L++}else if(I.isSunLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const R=I.shadow,b=n.get(I);b.shadowIntensity=R.intensity,b.shadowBias=R.bias,b.shadowNormalBias=R.normalBias,b.shadowRadius=R.radius,b.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),i.sunShadow[x]=b,i.sunShadowMap[x]=G;const te=R.getViewportCount();for(let re=0;re<te;re++)i.sunShadowMatrix[M+re]=R.getMatrix(re),i.sunShadowCascade[M+re]=R._cascadeData[re];M+=te,x++}i.sun[p]=z,p++}else if(I.isDirectionalLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const R=I.shadow,b=n.get(I);b.shadowIntensity=R.intensity,b.shadowBias=R.bias,b.shadowNormalBias=R.normalBias,b.shadowRadius=R.radius,b.shadowMapSize=R.mapSize,i.directionalShadow[g]=b,i.directionalShadowMap[g]=G,i.directionalShadowMatrix[g]=I.shadow.matrix,T++}i.directional[g]=z,g++}else if(I.isSpotLight){const z=e.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(q).multiplyScalar(J),z.distance=Z,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,i.spot[m]=z;const R=I.shadow;if(I.map&&(i.spotLightMap[v]=I.map,v++,R.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[m]=R.matrix,I.castShadow){const b=n.get(I);b.shadowIntensity=R.intensity,b.shadowBias=R.bias,b.shadowNormalBias=R.normalBias,b.shadowRadius=R.radius,b.shadowMapSize=R.mapSize,i.spotShadow[m]=b,i.spotShadowMap[m]=G,P++}m++}else if(I.isRectAreaLight){const z=e.get(I);z.color.copy(q).multiplyScalar(J),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),i.rectArea[y]=z,y++}else if(I.isPointLight){const z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){const R=I.shadow,b=n.get(I);b.shadowIntensity=R.intensity,b.shadowBias=R.bias,b.shadowNormalBias=R.normalBias,b.shadowRadius=R.radius,b.shadowMapSize=R.mapSize,b.shadowCameraNear=R.camera.near,b.shadowCameraFar=R.camera.far,i.pointShadow[u]=b,i.pointShadowMap[u]=G,i.pointShadowMatrix[u]=I.shadow.matrix,w++}i.point[u]=z,u++}else if(I.isHemisphereLight){const z=e.get(I);z.skyColor.copy(I.color).multiplyScalar(J),z.groundColor.copy(I.groundColor).multiplyScalar(J),i.hemi[_]=z,_++}}y>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const U=i.hash;(U.sunLength!==p||U.directionalLength!==g||U.pointLength!==u||U.spotLength!==m||U.rectAreaLength!==y||U.hemiLength!==_||U.numSunShadows!==x||U.numDirectionalShadows!==T||U.numPointShadows!==w||U.numSpotShadows!==P||U.numSpotMaps!==v||U.numLightProbes!==L)&&(i.sun.length=p,i.directional.length=g,i.spot.length=m,i.rectArea.length=y,i.point.length=u,i.hemi.length=_,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=P,i.spotShadowMap.length=P,i.spotLightMatrix.length=P+v-C,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=L,U.sunLength=p,U.directionalLength=g,U.pointLength=u,U.spotLength=m,U.rectAreaLength=y,U.hemiLength=_,U.numSunShadows=x,U.numDirectionalShadows=T,U.numPointShadows=w,U.numSpotShadows=P,U.numSpotMaps=v,U.numLightProbes=L,i.version=QA++)}function l(c,f){let h=0,d=0,p=0,x=0,M=0,g=0;const u=f.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const _=c[m];if(_.isSunLight){const T=i.sun[h];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(u),h++}else if(_.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(u),d++}else if(_.isSpotLight){const T=i.spot[x];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(u),T.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(u),x++}else if(_.isRectAreaLight){const T=i.rectArea[M];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(u),a.identity(),s.copy(_.matrixWorld),s.premultiply(u),a.extractRotation(s),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),M++}else if(_.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(u),p++}else if(_.isHemisphereLight){const T=i.hemi[g];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(u),g++}}}return{setup:o,setupView:l,state:i}}function tg(t){const e=new tC(t),n=[],i=[],r=[];function s(d){h.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function f(d){e.setupView(n,d)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function nC(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new tg(t),e.set(r,[o])):s>=a.length?(o=new tg(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const iC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,sC=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],aC=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],ng=new Tt,ma=new H,Cu=new H;function oC(t,e,n){let i=new Eh;const r=new We,s=new We,a=new Ct,o=new cE,l=new uE,c={},f=n.maxTextureSize,h={[Vr]:xn,[xn]:Vr,[Ai]:Ai},d=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:iC,fragmentShader:rC}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new Sn;x.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Pt(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ml;let u=this.type;this.render=function(w,P,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Ov&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ml);const C=t.getRenderTarget(),L=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Ni),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const W=u!==this.type;W&&P.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(q=>q.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,q=w.length;I<q;I++){const J=w[I],Z=J.shadow;if(Z===void 0){He("WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const G=Z.getFrameExtents();r.multiply(G),s.copy(Z.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/G.x),r.x=s.x*G.x,Z.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/G.y),r.y=s.y*G.y,Z.mapSize.y=s.y));const z=t.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=z,Z.map===null||W===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Sa){if(J.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new ei(r.x,r.y,{format:Gr,type:vi,minFilter:rn,magFilter:rn,generateMipmaps:!1}),Z.map.texture.name=J.name+".shadowMap",Z.map.depthTexture=new io(r.x,r.y,ui),Z.map.depthTexture.name=J.name+".shadowMapDepth",Z.map.depthTexture.format=ki,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=qt,Z.map.depthTexture.magFilter=qt}else J.isPointLight?(Z.map=new __(r.x),Z.map.depthTexture=new iE(r.x,gi)):(Z.map=new ei(r.x,r.y),Z.map.depthTexture=new io(r.x,r.y,gi)),Z.map.depthTexture.name=J.name+".shadowMap",Z.map.depthTexture.format=ki,this.type===ml?(Z.map.depthTexture.compareFunction=z?gh:mh,Z.map.depthTexture.minFilter=rn,Z.map.depthTexture.magFilter=rn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=qt,Z.map.depthTexture.magFilter=qt);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==r.x||Z.map.height!==r.y)&&Z.map.setSize(r.x,r.y);const R=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();J.isPointLight!==!0&&Z.updateMatrices(J,v);for(let b=0;b<R;b++){const te=Z.getCamera(b);if(J.isPointLight){const re=Z.camera,_e=Z.matrix,he=J.distance||re.far;he!==re.far&&(re.far=he,re.updateProjectionMatrix()),ma.setFromMatrixPosition(J.matrixWorld),re.position.copy(ma),Cu.copy(re.position),Cu.add(sC[b]),re.up.copy(aC[b]),re.lookAt(Cu),re.updateMatrixWorld(),_e.makeTranslation(-ma.x,-ma.y,-ma.z),ng.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(ng,re.coordinateSystem,re.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)t.setRenderTarget(Z.map,b),t.clear();else{b===0&&(t.setRenderTarget(Z.map),t.clear());const re=Z.getViewport(b);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),k.viewport(a)}i=Z.getFrustum(b),_(P,v,te,J,this.type)}Z.isPointLightShadow!==!0&&this.type===Sa&&m(Z,v),Z.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(C,L,U)};function m(w,P){const v=e.update(M);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new ei(r.x,r.y,{format:Gr,type:vi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(P,null,v,d,M,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(P,null,v,p,M,null)}function y(w,P,v,C){let L=null;const U=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)L=U;else if(L=v.isPointLight===!0?l:o,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const k=L.uuid,W=P.uuid;let I=c[k];I===void 0&&(I={},c[k]=I);let q=I[W];q===void 0&&(q=L.clone(),I[W]=q,P.addEventListener("dispose",T)),L=q}if(L.visible=P.visible,L.wireframe=P.wireframe,C===Sa?L.side=P.shadowSide!==null?P.shadowSide:P.side:L.side=P.shadowSide!==null?P.shadowSide:h[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const k=t.properties.get(L);k.light=v}return L}function _(w,P,v,C,L){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===Sa)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const W=e.update(w),I=w.material;if(Array.isArray(I)){const q=W.groups;for(let J=0,Z=q.length;J<Z;J++){const G=q[J],z=I[G.materialIndex];if(z&&z.visible){const R=y(w,z,C,L);w.onBeforeShadow(t,w,P,v,W,R,G),t.renderBufferDirect(v,null,W,R,w,G),w.onAfterShadow(t,w,P,v,W,R,G)}}}else if(I.visible){const q=y(w,I,C,L);w.onBeforeShadow(t,w,P,v,W,q,null),t.renderBufferDirect(v,null,W,q,w,null),w.onAfterShadow(t,w,P,v,W,q,null)}}const k=w.children;for(let W=0,I=k.length;W<I;W++)_(k[W],P,v,C,L)}function T(w){w.target.removeEventListener("dispose",T);for(const v in c){const C=c[v],L=w.target.uuid;L in C&&(C[L].dispose(),delete C[L])}}}function lC(t,e){function n(){let O=!1;const ge=new Ct;let ne=null;const ve=new Ct(0,0,0,0);return{setMask:function(we){ne!==we&&!O&&(t.colorMask(we,we,we,we),ne=we)},setLocked:function(we){O=we},setClear:function(we,se,ke,Ie,vt){vt===!0&&(we*=Ie,se*=Ie,ke*=Ie),ge.set(we,se,ke,Ie),ve.equals(ge)===!1&&(t.clearColor(we,se,ke,Ie),ve.copy(ge))},reset:function(){O=!1,ne=null,ve.set(-1,0,0,0)}}}function i(){let O=!1,ge=!1,ne=null,ve=null,we=null;return{setReversed:function(se){if(ge!==se){const ke=e.get("EXT_clip_control");se?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),ge=se;const Ie=we;we=null,this.setClear(Ie)}},getReversed:function(){return ge},setTest:function(se){se?Y(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(se){ne!==se&&!O&&(t.depthMask(se),ne=se)},setFunc:function(se){if(ge&&(se=mM[se]),ve!==se){switch(se){case Md:t.depthFunc(t.NEVER);break;case Ed:t.depthFunc(t.ALWAYS);break;case wd:t.depthFunc(t.LESS);break;case Za:t.depthFunc(t.LEQUAL);break;case Td:t.depthFunc(t.EQUAL);break;case Ad:t.depthFunc(t.GEQUAL);break;case Cd:t.depthFunc(t.GREATER);break;case bd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=se}},setLocked:function(se){O=se},setClear:function(se){we!==se&&(we=se,ge&&(se=1-se),t.clearDepth(se))},reset:function(){O=!1,ne=null,ve=null,we=null,ge=!1}}}function r(){let O=!1,ge=null,ne=null,ve=null,we=null,se=null,ke=null,Ie=null,vt=null;return{setTest:function(ct){O||(ct?Y(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(ct){ge!==ct&&!O&&(t.stencilMask(ct),ge=ct)},setFunc:function(ct,Vn,ni){(ne!==ct||ve!==Vn||we!==ni)&&(t.stencilFunc(ct,Vn,ni),ne=ct,ve=Vn,we=ni)},setOp:function(ct,Vn,ni){(se!==ct||ke!==Vn||Ie!==ni)&&(t.stencilOp(ct,Vn,ni),se=ct,ke=Vn,Ie=ni)},setLocked:function(ct){O=ct},setClear:function(ct){vt!==ct&&(t.clearStencil(ct),vt=ct)},reset:function(){O=!1,ge=null,ne=null,ve=null,we=null,se=null,ke=null,Ie=null,vt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},h={},d={},p=new WeakMap,x=[],M=null,g=!1,u=null,m=null,y=null,_=null,T=null,w=null,P=null,v=new it(0,0,0),C=0,L=!1,U=null,k=null,W=null,I=null,q=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,G=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),Z=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Z=G>=2);let R=null,b={};const te=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),_e=new Ct().fromArray(te),he=new Ct().fromArray(re);function de(O,ge,ne,ve){const we=new Uint8Array(4),se=t.createTexture();t.bindTexture(O,se),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ke=0;ke<ne;ke++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,t.RGBA,1,1,ve,0,t.RGBA,t.UNSIGNED_BYTE,we):t.texImage2D(ge+ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,we);return se}const B={};B[t.TEXTURE_2D]=de(t.TEXTURE_2D,t.TEXTURE_2D,1),B[t.TEXTURE_CUBE_MAP]=de(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[t.TEXTURE_2D_ARRAY]=de(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),B[t.TEXTURE_3D]=de(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(t.DEPTH_TEST),a.setFunc(Za),ue(!1),Ae(tm),Y(t.CULL_FACE),Ve(Ni);function Y(O){f[O]!==!0&&(t.enable(O),f[O]=!0)}function oe(O){f[O]!==!1&&(t.disable(O),f[O]=!1)}function Te(O,ge){return d[O]!==ge?(t.bindFramebuffer(O,ge),d[O]=ge,O===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ge),O===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ge),!0):!1}function ae(O,ge){let ne=x,ve=!1;if(O){ne=p.get(ge),ne===void 0&&(ne=[],p.set(ge,ne));const we=O.textures;if(ne.length!==we.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let se=0,ke=we.length;se<ke;se++)ne[se]=t.COLOR_ATTACHMENT0+se;ne.length=we.length,ve=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,ve=!0);ve&&t.drawBuffers(ne)}function Ne(O){return M!==O?(t.useProgram(O),M=O,!0):!1}const $e={[ps]:t.FUNC_ADD,[Oy]:t.FUNC_SUBTRACT,[ky]:t.FUNC_REVERSE_SUBTRACT};$e[By]=t.MIN,$e[zy]=t.MAX;const ye={[Vy]:t.ZERO,[Hy]:t.ONE,[Gy]:t.SRC_COLOR,[kv]:t.SRC_ALPHA,[Yy]:t.SRC_ALPHA_SATURATE,[qy]:t.DST_COLOR,[Xy]:t.DST_ALPHA,[Wy]:t.ONE_MINUS_SRC_COLOR,[Bv]:t.ONE_MINUS_SRC_ALPHA,[$y]:t.ONE_MINUS_DST_COLOR,[jy]:t.ONE_MINUS_DST_ALPHA,[Ky]:t.CONSTANT_COLOR,[Zy]:t.ONE_MINUS_CONSTANT_COLOR,[Jy]:t.CONSTANT_ALPHA,[Qy]:t.ONE_MINUS_CONSTANT_ALPHA};function Ve(O,ge,ne,ve,we,se,ke,Ie,vt,ct){if(O===Ni){g===!0&&(oe(t.BLEND),g=!1);return}if(g===!1&&(Y(t.BLEND),g=!0),O!==Fy){if(O!==u||ct!==L){if((m!==ps||T!==ps)&&(t.blendEquation(t.FUNC_ADD),m=ps,T=ps),ct)switch(O){case Na:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case nm:t.blendFunc(t.ONE,t.ONE);break;case im:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case rm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:st("WebGLState: Invalid blending: ",O);break}else switch(O){case Na:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case nm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case im:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rm:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",O);break}y=null,_=null,w=null,P=null,v.set(0,0,0),C=0,u=O,L=ct}return}we=we||ge,se=se||ne,ke=ke||ve,(ge!==m||we!==T)&&(t.blendEquationSeparate($e[ge],$e[we]),m=ge,T=we),(ne!==y||ve!==_||se!==w||ke!==P)&&(t.blendFuncSeparate(ye[ne],ye[ve],ye[se],ye[ke]),y=ne,_=ve,w=se,P=ke),(Ie.equals(v)===!1||vt!==C)&&(t.blendColor(Ie.r,Ie.g,Ie.b,vt),v.copy(Ie),C=vt),u=O,L=!1}function be(O,ge){O.side===Ai?oe(t.CULL_FACE):Y(t.CULL_FACE);let ne=O.side===xn;ge&&(ne=!ne),ue(ne),O.blending===Na&&O.transparent===!1?Ve(Ni):Ve(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const ve=O.stencilWrite;o.setTest(ve),ve&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Xe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Y(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ue(O){U!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),U=O)}function Ae(O){O!==Iy?(Y(t.CULL_FACE),O!==k&&(O===tm?t.cullFace(t.BACK):O===Uy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),k=O}function Ge(O){O!==W&&(Z&&t.lineWidth(O),W=O)}function Xe(O,ge,ne){O?(Y(t.POLYGON_OFFSET_FILL),(I!==ge||q!==ne)&&(I=ge,q=ne,a.getReversed()&&(ge=-ge),t.polygonOffset(ge,ne))):oe(t.POLYGON_OFFSET_FILL)}function et(O){O?Y(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function dt(O){O===void 0&&(O=t.TEXTURE0+J-1),R!==O&&(t.activeTexture(O),R=O)}function D(O,ge,ne){ne===void 0&&(R===null?ne=t.TEXTURE0+J-1:ne=R);let ve=b[ne];ve===void 0&&(ve={type:void 0,texture:void 0},b[ne]=ve),(ve.type!==O||ve.texture!==ge)&&(R!==ne&&(t.activeTexture(ne),R=ne),t.bindTexture(O,ge||B[O]),ve.type=O,ve.texture=ge)}function St(){const O=b[R];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function at(){try{t.compressedTexImage2D(...arguments)}catch(O){st("WebGLState:",O)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(O){st("WebGLState:",O)}}function S(){try{t.texSubImage2D(...arguments)}catch(O){st("WebGLState:",O)}}function V(){try{t.texSubImage3D(...arguments)}catch(O){st("WebGLState:",O)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(O){st("WebGLState:",O)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(O){st("WebGLState:",O)}}function ce(){try{t.texStorage2D(...arguments)}catch(O){st("WebGLState:",O)}}function fe(){try{t.texStorage3D(...arguments)}catch(O){st("WebGLState:",O)}}function ee(){try{t.texImage2D(...arguments)}catch(O){st("WebGLState:",O)}}function ie(){try{t.texImage3D(...arguments)}catch(O){st("WebGLState:",O)}}function pe(O){return h[O]!==void 0?h[O]:t.getParameter(O)}function Fe(O,ge){h[O]!==ge&&(t.pixelStorei(O,ge),h[O]=ge)}function xe(O){_e.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),_e.copy(O))}function me(O){he.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),he.copy(O))}function Oe(O,ge){let ne=c.get(ge);ne===void 0&&(ne=new WeakMap,c.set(ge,ne));let ve=ne.get(O);ve===void 0&&(ve=t.getUniformBlockIndex(ge,O.name),ne.set(O,ve))}function ze(O,ge){const ve=c.get(ge).get(O);l.get(ge)!==ve&&(t.uniformBlockBinding(ge,ve,O.__bindingPointIndex),l.set(ge,ve))}function qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},h={},R=null,b={},d={},p=new WeakMap,x=[],M=null,g=!1,u=null,m=null,y=null,_=null,T=null,w=null,P=null,v=new it(0,0,0),C=0,L=!1,U=null,k=null,W=null,I=null,q=null,_e.set(0,0,t.canvas.width,t.canvas.height),he.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Y,disable:oe,bindFramebuffer:Te,drawBuffers:ae,useProgram:Ne,setBlending:Ve,setMaterial:be,setFlipSided:ue,setCullFace:Ae,setLineWidth:Ge,setPolygonOffset:Xe,setScissorTest:et,activeTexture:dt,bindTexture:D,unbindTexture:St,compressedTexImage2D:at,compressedTexImage3D:N,texImage2D:ee,texImage3D:ie,pixelStorei:Fe,getParameter:pe,updateUBOMapping:Oe,uniformBlockBinding:ze,texStorage2D:ce,texStorage3D:fe,texSubImage2D:S,texSubImage3D:V,compressedTexSubImage2D:$,compressedTexSubImage3D:Q,scissor:xe,viewport:me,reset:qe}}function cC(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,f=new WeakMap,h=new Set;let d;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,S){return x?new OffscreenCanvas(N,S):to("canvas")}function g(N,S,V){let $=1;const Q=at(N);if((Q.width>V||Q.height>V)&&($=V/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ce=Math.floor($*Q.width),fe=Math.floor($*Q.height);d===void 0&&(d=M(ce,fe));const ee=S?M(ce,fe):d;return ee.width=ce,ee.height=fe,ee.getContext("2d").drawImage(N,0,0,ce,fe),He("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ce+"x"+fe+")."),ee}else return"data"in N&&He("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),N;return N}function u(N){return N.generateMipmaps}function m(N){t.generateMipmap(N)}function y(N){return N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?t.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(N,S,V,$,Q,ce=!1){if(N!==null){if(t[N]!==void 0)return t[N];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let fe;$&&(fe=e.get("EXT_texture_norm16"),fe||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=S;if(S===t.RED&&(V===t.FLOAT&&(ee=t.R32F),V===t.HALF_FLOAT&&(ee=t.R16F),V===t.UNSIGNED_BYTE&&(ee=t.R8),V===t.UNSIGNED_SHORT&&fe&&(ee=fe.R16_EXT),V===t.SHORT&&fe&&(ee=fe.R16_SNORM_EXT)),S===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.R8UI),V===t.UNSIGNED_SHORT&&(ee=t.R16UI),V===t.UNSIGNED_INT&&(ee=t.R32UI),V===t.BYTE&&(ee=t.R8I),V===t.SHORT&&(ee=t.R16I),V===t.INT&&(ee=t.R32I)),S===t.RG&&(V===t.FLOAT&&(ee=t.RG32F),V===t.HALF_FLOAT&&(ee=t.RG16F),V===t.UNSIGNED_BYTE&&(ee=t.RG8),V===t.UNSIGNED_SHORT&&fe&&(ee=fe.RG16_EXT),V===t.SHORT&&fe&&(ee=fe.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.RG8UI),V===t.UNSIGNED_SHORT&&(ee=t.RG16UI),V===t.UNSIGNED_INT&&(ee=t.RG32UI),V===t.BYTE&&(ee=t.RG8I),V===t.SHORT&&(ee=t.RG16I),V===t.INT&&(ee=t.RG32I)),S===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),V===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),V===t.UNSIGNED_INT&&(ee=t.RGB32UI),V===t.BYTE&&(ee=t.RGB8I),V===t.SHORT&&(ee=t.RGB16I),V===t.INT&&(ee=t.RGB32I)),S===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),V===t.UNSIGNED_INT&&(ee=t.RGBA32UI),V===t.BYTE&&(ee=t.RGBA8I),V===t.SHORT&&(ee=t.RGBA16I),V===t.INT&&(ee=t.RGBA32I)),S===t.RGB&&(V===t.UNSIGNED_SHORT&&fe&&(ee=fe.RGB16_EXT),V===t.SHORT&&fe&&(ee=fe.RGB16_SNORM_EXT),V===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),V===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),S===t.RGBA){const ie=ce?$l:rt.getTransfer(Q);V===t.FLOAT&&(ee=t.RGBA32F),V===t.HALF_FLOAT&&(ee=t.RGBA16F),V===t.UNSIGNED_BYTE&&(ee=ie===ft?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT&&fe&&(ee=fe.RGBA16_EXT),V===t.SHORT&&fe&&(ee=fe.RGBA16_SNORM_EXT),V===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function T(N,S){let V;return N?S===null||S===gi||S===Qa?V=t.DEPTH24_STENCIL8:S===ui?V=t.DEPTH32F_STENCIL8:S===Ja&&(V=t.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===gi||S===Qa?V=t.DEPTH_COMPONENT24:S===ui?V=t.DEPTH_COMPONENT32F:S===Ja&&(V=t.DEPTH_COMPONENT16),V}function w(N,S){return u(N)===!0||N.isFramebufferTexture&&N.minFilter!==qt&&N.minFilter!==rn?Math.log2(Math.max(S.width,S.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?S.mipmaps.length:1}function P(N){const S=N.target;S.removeEventListener("dispose",P),C(S),S.isVideoTexture&&f.delete(S),S.isHTMLTexture&&h.delete(S)}function v(N){const S=N.target;S.removeEventListener("dispose",v),U(S)}function C(N){const S=i.get(N);if(S.__webglInit===void 0)return;const V=N.source,$=p.get(V);if($){const Q=$[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&L(N),Object.keys($).length===0&&p.delete(V)}i.remove(N)}function L(N){const S=i.get(N);t.deleteTexture(S.__webglTexture);const V=N.source,$=p.get(V);delete $[S.__cacheKey],a.memory.textures--}function U(N){const S=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let Q=0;Q<S.__webglFramebuffer[$].length;Q++)t.deleteFramebuffer(S.__webglFramebuffer[$][Q]);else t.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)t.deleteFramebuffer(S.__webglFramebuffer[$]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=N.textures;for(let $=0,Q=V.length;$<Q;$++){const ce=i.get(V[$]);ce.__webglTexture&&(t.deleteTexture(ce.__webglTexture),a.memory.textures--),i.remove(V[$])}i.remove(N)}let k=0;function W(){k=0}function I(){return k}function q(N){k=N}function J(){const N=k;return N>=r.maxTextures&&He("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+r.maxTextures),k+=1,N}function Z(N){const S=[];return S.push(N.wrapS),S.push(N.wrapT),S.push(N.wrapR||0),S.push(N.magFilter),S.push(N.minFilter),S.push(N.anisotropy),S.push(N.internalFormat),S.push(N.format),S.push(N.type),S.push(N.generateMipmaps),S.push(N.premultiplyAlpha),S.push(N.flipY),S.push(N.unpackAlignment),S.push(N.colorSpace),S.join()}function G(N,S){const V=i.get(N);if(N.isVideoTexture&&D(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&V.__version!==N.version){const $=N.image;if($===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(V,N,S);return}}else N.isExternalTexture&&(V.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+S)}function z(N,S){const V=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&V.__version!==N.version){oe(V,N,S);return}else N.isExternalTexture&&(V.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+S)}function R(N,S){const V=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&V.__version!==N.version){oe(V,N,S);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+S)}function b(N,S){const V=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&V.__version!==N.version){Te(V,N,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+S)}const te={[Rd]:t.REPEAT,[Ri]:t.CLAMP_TO_EDGE,[Pd]:t.MIRRORED_REPEAT},re={[qt]:t.NEAREST,[nM]:t.NEAREST_MIPMAP_NEAREST,[Po]:t.NEAREST_MIPMAP_LINEAR,[rn]:t.LINEAR,[Zc]:t.LINEAR_MIPMAP_NEAREST,[Pr]:t.LINEAR_MIPMAP_LINEAR},_e={[aM]:t.NEVER,[dM]:t.ALWAYS,[oM]:t.LESS,[mh]:t.LEQUAL,[lM]:t.EQUAL,[gh]:t.GEQUAL,[cM]:t.GREATER,[uM]:t.NOTEQUAL};function he(N,S){if(S.type===ui&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===rn||S.magFilter===Zc||S.magFilter===Po||S.magFilter===Pr||S.minFilter===rn||S.minFilter===Zc||S.minFilter===Po||S.minFilter===Pr)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,te[S.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,te[S.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,te[S.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,re[S.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,re[S.minFilter]),S.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,_e[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===qt||S.minFilter!==Po&&S.minFilter!==Pr||S.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function de(N,S){let V=!1;N.__webglInit===void 0&&(N.__webglInit=!0,S.addEventListener("dispose",P));const $=S.source;let Q=p.get($);Q===void 0&&(Q={},p.set($,Q));const ce=Z(S);if(ce!==N.__cacheKey){Q[ce]===void 0&&(Q[ce]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[ce].usedTimes++;const fe=Q[N.__cacheKey];fe!==void 0&&(Q[N.__cacheKey].usedTimes--,fe.usedTimes===0&&L(S)),N.__cacheKey=ce,N.__webglTexture=Q[ce].texture}return V}function B(N,S,V){return Math.floor(Math.floor(N/V)/S)}function Y(N,S,V,$){const ce=N.updateRanges;if(ce.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,V,$,S.data);else{ce.sort((Fe,xe)=>Fe.start-xe.start);let fe=0;for(let Fe=1;Fe<ce.length;Fe++){const xe=ce[fe],me=ce[Fe],Oe=xe.start+xe.count,ze=B(me.start,S.width,4),qe=B(xe.start,S.width,4);me.start<=Oe+1&&ze===qe&&B(me.start+me.count-1,S.width,4)===ze?xe.count=Math.max(xe.count,me.start+me.count-xe.start):(++fe,ce[fe]=me)}ce.length=fe+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),ie=n.getParameter(t.UNPACK_SKIP_PIXELS),pe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let Fe=0,xe=ce.length;Fe<xe;Fe++){const me=ce[Fe],Oe=Math.floor(me.start/4),ze=Math.ceil(me.count/4),qe=Oe%S.width,O=Math.floor(Oe/S.width),ge=ze,ne=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,qe),n.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,qe,O,ge,ne,V,$,S.data)}N.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,pe)}}function oe(N,S,V){let $=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=t.TEXTURE_3D);const Q=de(N,S),ce=S.source;n.bindTexture($,N.__webglTexture,t.TEXTURE0+V);const fe=i.get(ce);if(ce.version!==fe.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+V),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ne=rt.getPrimaries(rt.workingColorSpace),ve=S.colorSpace===tr?null:rt.getPrimaries(S.colorSpace),we=S.colorSpace===tr||ne===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let ie=g(S.image,!1,r.maxTextureSize);ie=St(S,ie);const pe=s.convert(S.format,S.colorSpace),Fe=s.convert(S.type);let xe=_(S.internalFormat,pe,Fe,S.normalized,S.colorSpace,S.isVideoTexture);he($,S);let me;const Oe=S.mipmaps,ze=S.isVideoTexture!==!0,qe=fe.__version===void 0||Q===!0,O=ce.dataReady,ge=w(S,ie);if(S.isDepthTexture)xe=T(S.format===Nr,S.type),qe&&(ze?n.texStorage2D(t.TEXTURE_2D,1,xe,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,xe,ie.width,ie.height,0,pe,Fe,null));else if(S.isDataTexture)if(Oe.length>0){ze&&qe&&n.texStorage2D(t.TEXTURE_2D,ge,xe,Oe[0].width,Oe[0].height);for(let ne=0,ve=Oe.length;ne<ve;ne++)me=Oe[ne],ze?O&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,me.width,me.height,pe,Fe,me.data):n.texImage2D(t.TEXTURE_2D,ne,xe,me.width,me.height,0,pe,Fe,me.data);S.generateMipmaps=!1}else ze?(qe&&n.texStorage2D(t.TEXTURE_2D,ge,xe,ie.width,ie.height),O&&Y(S,ie,pe,Fe)):n.texImage2D(t.TEXTURE_2D,0,xe,ie.width,ie.height,0,pe,Fe,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ze&&qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,xe,Oe[0].width,Oe[0].height,ie.depth);for(let ne=0,ve=Oe.length;ne<ve;ne++)if(me=Oe[ne],S.format!==Zn)if(pe!==null)if(ze){if(O)if(S.layerUpdates.size>0){const we=Im(me.width,me.height,S.format,S.type);for(const se of S.layerUpdates){const ke=me.data.subarray(se*we/me.data.BYTES_PER_ELEMENT,(se+1)*we/me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,se,me.width,me.height,1,pe,ke)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,me.width,me.height,ie.depth,pe,me.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,xe,me.width,me.height,ie.depth,0,me.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,me.width,me.height,ie.depth,pe,Fe,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,xe,me.width,me.height,ie.depth,0,pe,Fe,me.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ze&&qe&&n.texStorage2D(t.TEXTURE_2D,ge,xe,Oe[0].width,Oe[0].height);for(let ne=0,ve=Oe.length;ne<ve;ne++)me=Oe[ne],S.format!==Zn?pe!==null?ze?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,me.width,me.height,pe,me.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,xe,me.width,me.height,0,me.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?O&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,me.width,me.height,pe,Fe,me.data):n.texImage2D(t.TEXTURE_2D,ne,xe,me.width,me.height,0,pe,Fe,me.data)}else if(S.isDataArrayTexture)if(ze){if(qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,xe,ie.width,ie.height,ie.depth),O)if(S.layerUpdates.size>0){const ne=Im(ie.width,ie.height,S.format,S.type);for(const ve of S.layerUpdates){const we=ie.data.subarray(ve*ne/ie.data.BYTES_PER_ELEMENT,(ve+1)*ne/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ve,ie.width,ie.height,1,pe,Fe,we)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,pe,Fe,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,ie.width,ie.height,ie.depth,0,pe,Fe,ie.data);else if(S.isData3DTexture)ze?(qe&&n.texStorage3D(t.TEXTURE_3D,ge,xe,ie.width,ie.height,ie.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,pe,Fe,ie.data)):n.texImage3D(t.TEXTURE_3D,0,xe,ie.width,ie.height,ie.depth,0,pe,Fe,ie.data);else if(S.isFramebufferTexture){if(qe)if(ze)n.texStorage2D(t.TEXTURE_2D,ge,xe,ie.width,ie.height);else{let ne=ie.width,ve=ie.height;for(let we=0;we<ge;we++)n.texImage2D(t.TEXTURE_2D,we,xe,ne,ve,0,pe,Fe,null),ne>>=1,ve>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const ne=t.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ie.parentNode!==ne){ne.appendChild(ie),h.add(S),ne.onpaint=ve=>{const we=ve.changedElements;for(const se of h)we.includes(se.image)&&(se.needsUpdate=!0)},ne.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ie);else{const we=t.RGBA,se=t.RGBA,ke=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,we,se,ke,ie)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(ze&&qe){const ne=at(Oe[0]);n.texStorage2D(t.TEXTURE_2D,ge,xe,ne.width,ne.height)}for(let ne=0,ve=Oe.length;ne<ve;ne++)me=Oe[ne],ze?O&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,pe,Fe,me):n.texImage2D(t.TEXTURE_2D,ne,xe,pe,Fe,me);S.generateMipmaps=!1}else if(ze){if(qe){const ne=at(ie);n.texStorage2D(t.TEXTURE_2D,ge,xe,ne.width,ne.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,Fe,ie)}else n.texImage2D(t.TEXTURE_2D,0,xe,pe,Fe,ie);u(S)&&m($),fe.__version=ce.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function Te(N,S,V){if(S.image.length!==6)return;const $=de(N,S),Q=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+V);const ce=i.get(Q);if(Q.version!==ce.__version||$===!0){n.activeTexture(t.TEXTURE0+V);const fe=rt.getPrimaries(rt.workingColorSpace),ee=S.colorSpace===tr?null:rt.getPrimaries(S.colorSpace),ie=S.colorSpace===tr||fe===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const pe=S.isCompressedTexture||S.image[0].isCompressedTexture,Fe=S.image[0]&&S.image[0].isDataTexture,xe=[];for(let se=0;se<6;se++)!pe&&!Fe?xe[se]=g(S.image[se],!0,r.maxCubemapSize):xe[se]=Fe?S.image[se].image:S.image[se],xe[se]=St(S,xe[se]);const me=xe[0],Oe=s.convert(S.format,S.colorSpace),ze=s.convert(S.type),qe=_(S.internalFormat,Oe,ze,S.normalized,S.colorSpace),O=S.isVideoTexture!==!0,ge=ce.__version===void 0||$===!0,ne=Q.dataReady;let ve=w(S,me);he(t.TEXTURE_CUBE_MAP,S);let we;if(pe){O&&ge&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,qe,me.width,me.height);for(let se=0;se<6;se++){we=xe[se].mipmaps;for(let ke=0;ke<we.length;ke++){const Ie=we[ke];S.format!==Zn?Oe!==null?O?ne&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,0,0,Ie.width,Ie.height,Oe,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,qe,Ie.width,Ie.height,0,Ie.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,0,0,Ie.width,Ie.height,Oe,ze,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,qe,Ie.width,Ie.height,0,Oe,ze,Ie.data)}}}else{if(we=S.mipmaps,O&&ge){we.length>0&&ve++;const se=at(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,qe,se.width,se.height)}for(let se=0;se<6;se++)if(Fe){O?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,xe[se].width,xe[se].height,Oe,ze,xe[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,qe,xe[se].width,xe[se].height,0,Oe,ze,xe[se].data);for(let ke=0;ke<we.length;ke++){const vt=we[ke].image[se].image;O?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,0,0,vt.width,vt.height,Oe,ze,vt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,qe,vt.width,vt.height,0,Oe,ze,vt.data)}}else{O?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Oe,ze,xe[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,qe,Oe,ze,xe[se]);for(let ke=0;ke<we.length;ke++){const Ie=we[ke];O?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,0,0,Oe,ze,Ie.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,qe,Oe,ze,Ie.image[se])}}}u(S)&&m(t.TEXTURE_CUBE_MAP),ce.__version=Q.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function ae(N,S,V,$,Q,ce){const fe=s.convert(V.format,V.colorSpace),ee=s.convert(V.type),ie=_(V.internalFormat,fe,ee,V.normalized,V.colorSpace),pe=i.get(S),Fe=i.get(V);if(Fe.__renderTarget=S,!pe.__hasExternalTextures){const xe=Math.max(1,S.width>>ce),me=Math.max(1,S.height>>ce);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,ce,ie,xe,me,S.depth,0,fe,ee,null):n.texImage2D(Q,ce,ie,xe,me,0,fe,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),dt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,Q,Fe.__webglTexture,0,et(S)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,Q,Fe.__webglTexture,ce),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(N,S,V){if(t.bindRenderbuffer(t.RENDERBUFFER,N),S.depthBuffer){const $=S.depthTexture,Q=$&&$.isDepthTexture?$.type:null,ce=T(S.stencilBuffer,Q),fe=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;dt(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,et(S),ce,S.width,S.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,et(S),ce,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ce,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,N)}else{const $=S.textures;for(let Q=0;Q<$.length;Q++){const ce=$[Q],fe=s.convert(ce.format,ce.colorSpace),ee=s.convert(ce.type),ie=_(ce.internalFormat,fe,ee,ce.normalized,ce.colorSpace);dt(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,et(S),ie,S.width,S.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,et(S),ie,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ie,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function $e(N,S,V){const $=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(S.depthTexture);if(Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,S.depthTexture.addEventListener("dispose",P)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),he(t.TEXTURE_CUBE_MAP,S.depthTexture);const pe=s.convert(S.depthTexture.format),Fe=s.convert(S.depthTexture.type);let xe;S.depthTexture.format===ki?xe=t.DEPTH_COMPONENT24:S.depthTexture.format===Nr&&(xe=t.DEPTH24_STENCIL8);for(let me=0;me<6;me++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,xe,S.width,S.height,0,pe,Fe,null)}}else G(S.depthTexture,0);const ce=Q.__webglTexture,fe=et(S),ee=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+V:t.TEXTURE_2D,ie=S.depthTexture.format===Nr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===ki)dt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,ce,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,ce,0);else if(S.depthTexture.format===Nr)dt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,ce,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ye(N){const S=i.get(N),V=N.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==N.depthTexture){const $=N.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=$}if(N.depthTexture&&!S.__autoAllocateDepthBuffer)if(V)for(let $=0;$<6;$++)$e(S.__webglFramebuffer[$],N,$);else{const $=N.texture.mipmaps;$&&$.length>0?$e(S.__webglFramebuffer[0],N,0):$e(S.__webglFramebuffer,N,0)}else if(V){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=t.createRenderbuffer(),Ne(S.__webglDepthbuffer[$],N,!1);else{const Q=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=S.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ce)}}else{const $=N.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),Ne(S.__webglDepthbuffer,N,!1);else{const Q=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ce)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(N,S,V){const $=i.get(N);S!==void 0&&ae($.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&ye(N)}function be(N){const S=N.texture,V=i.get(N),$=i.get(S);N.addEventListener("dispose",v);const Q=N.textures,ce=N.isWebGLCubeRenderTarget===!0,fe=Q.length>1;if(fe||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=S.version,a.memory.textures++),ce){V.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[ee]=[];for(let ie=0;ie<S.mipmaps.length;ie++)V.__webglFramebuffer[ee][ie]=t.createFramebuffer()}else V.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let ee=0;ee<S.mipmaps.length;ee++)V.__webglFramebuffer[ee]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(fe)for(let ee=0,ie=Q.length;ee<ie;ee++){const pe=i.get(Q[ee]);pe.__webglTexture===void 0&&(pe.__webglTexture=t.createTexture(),a.memory.textures++)}if(N.samples>0&&dt(N)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ee=0;ee<Q.length;ee++){const ie=Q[ee];V.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[ee]);const pe=s.convert(ie.format,ie.colorSpace),Fe=s.convert(ie.type),xe=_(ie.internalFormat,pe,Fe,ie.normalized,ie.colorSpace,N.isXRRenderTarget===!0),me=et(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,me,xe,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,V.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),Ne(V.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ce){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),he(t.TEXTURE_CUBE_MAP,S);for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0)for(let ie=0;ie<S.mipmaps.length;ie++)ae(V.__webglFramebuffer[ee][ie],N,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ie);else ae(V.__webglFramebuffer[ee],N,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);u(S)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let ee=0,ie=Q.length;ee<ie;ee++){const pe=Q[ee],Fe=i.get(pe);let xe=t.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(xe=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,Fe.__webglTexture),he(xe,pe),ae(V.__webglFramebuffer,N,pe,t.COLOR_ATTACHMENT0+ee,xe,0),u(pe)&&m(xe)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ee=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,$.__webglTexture),he(ee,S),S.mipmaps&&S.mipmaps.length>0)for(let ie=0;ie<S.mipmaps.length;ie++)ae(V.__webglFramebuffer[ie],N,S,t.COLOR_ATTACHMENT0,ee,ie);else ae(V.__webglFramebuffer,N,S,t.COLOR_ATTACHMENT0,ee,0);u(S)&&m(ee),n.unbindTexture()}N.depthBuffer&&ye(N)}function ue(N){const S=N.textures;for(let V=0,$=S.length;V<$;V++){const Q=S[V];if(u(Q)){const ce=y(N),fe=i.get(Q).__webglTexture;n.bindTexture(ce,fe),m(ce),n.unbindTexture()}}}const Ae=[],Ge=[];function Xe(N){if(N.samples>0){if(dt(N)===!1){const S=N.textures,V=N.width,$=N.height;let Q=t.COLOR_BUFFER_BIT;const ce=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(N),ee=S.length>1;if(ee)for(let pe=0;pe<S.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const ie=N.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let pe=0;pe<S.length;pe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[pe]);const Fe=i.get(S[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Fe,0)}t.blitFramebuffer(0,0,V,$,0,0,V,$,Q,t.NEAREST),l===!0&&(Ae.length=0,Ge.length=0,Ae.push(t.COLOR_ATTACHMENT0+pe),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(Ae.push(ce),Ge.push(ce),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ge)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ae))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let pe=0;pe<S.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,fe.__webglColorRenderbuffer[pe]);const Fe=i.get(S[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){const S=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function et(N){return Math.min(r.maxSamples,N.samples)}function dt(N){const S=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function D(N){const S=a.render.frame;f.get(N)!==S&&(f.set(N,S),N.update())}function St(N,S){const V=N.colorSpace,$=N.format,Q=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||V!==ql&&V!==tr&&(rt.getTransfer(V)===ft?($!==Zn||Q!==wn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",V)),S}function at(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=W,this.getTextureUnits=I,this.setTextureUnits=q,this.setTexture2D=G,this.setTexture2DArray=z,this.setTexture3D=R,this.setTextureCube=b,this.rebindTextures=Ve,this.setupRenderTarget=be,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function uC(t,e){function n(i,r=tr){let s;const a=rt.getTransfer(r);if(i===wn)return t.UNSIGNED_BYTE;if(i===uh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===dh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Zv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Jv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yv)return t.BYTE;if(i===Kv)return t.SHORT;if(i===Ja)return t.UNSIGNED_SHORT;if(i===ch)return t.INT;if(i===gi)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===vi)return t.HALF_FLOAT;if(i===Qv)return t.ALPHA;if(i===e_)return t.RGB;if(i===Zn)return t.RGBA;if(i===ki)return t.DEPTH_COMPONENT;if(i===Nr)return t.DEPTH_STENCIL;if(i===t_)return t.RED;if(i===fh)return t.RED_INTEGER;if(i===Gr)return t.RG;if(i===hh)return t.RG_INTEGER;if(i===ph)return t.RGBA_INTEGER;if(i===gl||i===vl||i===_l||i===xl)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===gl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===gl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_l)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nd||i===Ld||i===Dd||i===Id)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Nd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ld)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Id)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ud||i===Fd||i===Od||i===kd||i===Bd||i===Xl||i===zd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ud||i===Fd)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Od)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===kd)return s.COMPRESSED_R11_EAC;if(i===Bd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Xl)return s.COMPRESSED_RG11_EAC;if(i===zd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Vd||i===Hd||i===Gd||i===Wd||i===Xd||i===jd||i===qd||i===$d||i===Yd||i===Kd||i===Zd||i===Jd||i===Qd||i===ef)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$d)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ef)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tf||i===nf||i===rf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===tf)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sf||i===af||i===jl||i===of)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===sf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===af)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===of)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const dC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new f_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new _i({vertexShader:dC,fragmentShader:fC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Pt(new Ur(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pC extends jr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,d=null,p=null,x=null;const M=typeof XRWebGLBinding<"u",g=new hC,u={},m=n.getContextAttributes();let y=null,_=null;const T=[],w=[],P=new We;let v=null,C=null;const L=new Un;L.viewport=new Ct;const U=new Un;U.viewport=new Ct;const k=[L,U],W=new SE;let I=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Y=T[B];return Y===void 0&&(Y=new ru,T[B]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(B){let Y=T[B];return Y===void 0&&(Y=new ru,T[B]=Y),Y.getGripSpace()},this.getHand=function(B){let Y=T[B];return Y===void 0&&(Y=new ru,T[B]=Y),Y.getHandSpace()};function J(B){const Y=w.indexOf(B.inputSource);if(Y===-1)return;const oe=T[Y];oe!==void 0&&(oe.update(B.inputSource,B.frame,c||a),oe.dispatchEvent({type:B.type,data:B.inputSource}))}function Z(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",G);for(let B=0;B<T.length;B++){const Y=w[B];Y!==null&&(w[B]=null,T[B].disconnect(Y))}I=null,q=null,g.reset();for(const B in u)delete u[B];if(e.setRenderTarget(y),p=null,d=null,h=null,r=null,_=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(P.width,P.height,!1),C!==null){const B=C.camera;B.fov=C.fov,B.zoom=C.zoom,B.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(P),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Te=null,ae=null;m.depth&&(ae=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=m.stencil?Nr:ki,Te=m.stencil?Qa:gi);const Ne={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ne),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new ei(d.textureWidth,d.textureHeight,{format:Zn,type:wn,depthTexture:new io(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new ei(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(B){for(let Y=0;Y<B.removed.length;Y++){const oe=B.removed[Y],Te=w.indexOf(oe);Te>=0&&(w[Te]=null,T[Te].disconnect(oe))}for(let Y=0;Y<B.added.length;Y++){const oe=B.added[Y];let Te=w.indexOf(oe);if(Te===-1){for(let Ne=0;Ne<T.length;Ne++)if(Ne>=w.length){w.push(oe),Te=Ne;break}else if(w[Ne]===null){w[Ne]=oe,Te=Ne;break}if(Te===-1)break}const ae=T[Te];ae&&ae.connect(oe)}}const z=new H,R=new H;function b(B,Y,oe){z.setFromMatrixPosition(Y.matrixWorld),R.setFromMatrixPosition(oe.matrixWorld);const Te=z.distanceTo(R),ae=Y.projectionMatrix.elements,Ne=oe.projectionMatrix.elements,$e=ae[14]/(ae[10]-1),ye=ae[14]/(ae[10]+1),Ve=(ae[9]+1)/ae[5],be=(ae[9]-1)/ae[5],ue=(ae[8]-1)/ae[0],Ae=(Ne[8]+1)/Ne[0],Ge=$e*ue,Xe=$e*Ae,et=Te/(-ue+Ae),dt=et*-ue;if(Y.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(dt),B.translateZ(et),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),ae[10]===-1)B.projectionMatrix.copy(Y.projectionMatrix),B.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const D=$e+et,St=ye+et,at=Ge-dt,N=Xe+(Te-dt),S=Ve*ye/St*D,V=be*ye/St*D;B.projectionMatrix.makePerspective(at,N,S,V,D,St),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function te(B,Y){Y===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Y.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let Y=B.near,oe=B.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(oe=g.depthFar)),W.near=U.near=L.near=Y,W.far=U.far=L.far=oe,(I!==W.near||q!==W.far)&&(r.updateRenderState({depthNear:W.near,depthFar:W.far}),I=W.near,q=W.far),W.layers.mask=B.layers.mask|6,L.layers.mask=W.layers.mask&-5,U.layers.mask=W.layers.mask&-3;const Te=B.parent,ae=W.cameras;te(W,Te);for(let Ne=0;Ne<ae.length;Ne++)te(ae[Ne],Te);ae.length===2?b(W,L,U):W.projectionMatrix.copy(L.projectionMatrix),C===null&&B.isPerspectiveCamera&&(C={camera:B,fov:B.fov,zoom:B.zoom}),re(B,W,Te)};function re(B,Y,oe){oe===null?B.matrix.copy(Y.matrixWorld):(B.matrix.copy(oe.matrixWorld),B.matrix.invert(),B.matrix.multiply(Y.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Y.projectionMatrix),B.projectionMatrixInverse.copy(Y.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=no*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(W)},this.getCameraTexture=function(B){return u[B]};let _e=null;function he(B,Y){if(f=Y.getViewerPose(c||a),x=Y,f!==null){const oe=f.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Te=!1;oe.length!==W.cameras.length&&(W.cameras.length=0,Te=!0);for(let ye=0;ye<oe.length;ye++){const Ve=oe[ye];let be=null;if(p!==null)be=p.getViewport(Ve);else{const Ae=h.getViewSubImage(d,Ve);be=Ae.viewport,ye===0&&(e.setRenderTargetTextures(_,Ae.colorTexture,Ae.depthStencilTexture),e.setRenderTarget(_))}let ue=k[ye];ue===void 0&&(ue=new Un,ue.layers.enable(ye),ue.viewport=new Ct,k[ye]=ue),ue.matrix.fromArray(Ve.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Ve.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(be.x,be.y,be.width,be.height),ye===0&&(W.matrix.copy(ue.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Te===!0&&W.cameras.push(ue)}const ae=r.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){h=i.getBinding();const ye=h.getDepthInformation(oe[0]);ye&&ye.isValid&&ye.texture&&g.init(ye,r.renderState)}if(ae&&ae.includes("camera-access")&&M){e.state.unbindTexture(),h=i.getBinding();for(let ye=0;ye<oe.length;ye++){const Ve=oe[ye].camera;if(Ve){let be=u[Ve];be||(be=new f_,u[Ve]=be);const ue=h.getCameraImage(Ve);be.sourceTexture=ue}}}}for(let oe=0;oe<T.length;oe++){const Te=w[oe],ae=T[oe];Te!==null&&ae!==void 0&&ae.update(Te,Y,c||a)}_e&&_e(B,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),x=null}const de=new g_;de.setAnimationLoop(he),this.setAnimationLoop=function(B){_e=B},this.dispose=function(){}}}const mC=new Tt,E_=new je;E_.set(-1,0,0,0,1,0,0,0,1);function gC(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,h_(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,m,y,_){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(g,u):u.isMeshLambertMaterial?(s(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(g,u),h(g,u)):u.isMeshPhongMaterial?(s(g,u),f(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(g,u),d(g,u),u.isMeshPhysicalMaterial&&p(g,u,_)):u.isMeshMatcapMaterial?(s(g,u),x(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),M(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,m,y):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===xn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===xn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const m=e.get(u),y=m.envMap,_=m.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(mC.makeRotationFromEuler(_)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(E_),g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,m,y){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*m,g.scale.value=y*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function f(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function h(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function d(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,m){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===xn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.retroreflectivity>0&&(g.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,u){u.matcap&&(g.matcap.value=u.matcap)}function M(g,u){const m=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vC(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,T){const w=T.program;i.uniformBlockBinding(_,w)}function c(_,T){let w=r[_.id];w===void 0&&(g(_),w=f(_),r[_.id]=w,_.addEventListener("dispose",m));const P=T.program;i.updateUBOMapping(_,P);const v=e.render.frame;s[_.id]!==v&&(d(_),s[_.id]=v)}function f(_){const T=h();_.__bindingPointIndex=T;const w=t.createBuffer(),P=_.__size,v=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,P,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,w),w}function h(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return st("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const T=r[_.id],w=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let v=0,C=w.length;v<C;v++){const L=w[v];if(Array.isArray(L))for(let U=0,k=L.length;U<k;U++)p(L[U],v,U,P);else p(L,v,0,P)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,T,w,P){if(M(_,T,w,P)===!0){const v=_.__offset,C=_.value;if(Array.isArray(C)){let L=0;for(let U=0;U<C.length;U++){const k=C[U],W=u(k);x(k,_.__data,L),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(L+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(C,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,_.__data)}}function x(_,T,w){typeof _=="number"||typeof _=="boolean"?T[0]=_:_.isMatrix3?(T[0]=_.elements[0],T[1]=_.elements[1],T[2]=_.elements[2],T[3]=0,T[4]=_.elements[3],T[5]=_.elements[4],T[6]=_.elements[5],T[7]=0,T[8]=_.elements[6],T[9]=_.elements[7],T[10]=_.elements[8],T[11]=0):ArrayBuffer.isView(_)?T.set(new _.constructor(_.buffer,_.byteOffset,T.length)):_.toArray(T,w)}function M(_,T,w,P){const v=_.value,C=T+"_"+w;if(P[C]===void 0)return typeof v=="number"||typeof v=="boolean"?P[C]=v:ArrayBuffer.isView(v)?P[C]=v.slice():P[C]=v.clone(),!0;{const L=P[C];if(typeof v=="number"||typeof v=="boolean"){if(L!==v)return P[C]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(L.equals(v)===!1)return L.copy(v),!0}}return!1}function g(_){const T=_.uniforms;let w=0;const P=16;for(let C=0,L=T.length;C<L;C++){const U=Array.isArray(T[C])?T[C]:[T[C]];for(let k=0,W=U.length;k<W;k++){const I=U[k],q=Array.isArray(I.value)?I.value:[I.value];for(let J=0,Z=q.length;J<Z;J++){const G=q[J],z=u(G),R=w%P,b=R%z.boundary,te=R+b;w+=b,te!==0&&P-te<z.storage&&(w+=P-te),I.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=w,w+=z.storage}}}const v=w%P;return v>0&&(w+=P-v),_.__size=w,_.__cache={},this}function u(_){const T={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(T.boundary=4,T.storage=4):_.isVector2?(T.boundary=8,T.storage=8):_.isVector3||_.isColor?(T.boundary=16,T.storage=12):_.isVector4?(T.boundary=16,T.storage=16):_.isMatrix3?(T.boundary=48,T.storage=48):_.isMatrix4?(T.boundary=64,T.storage=64):_.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(T.boundary=16,T.storage=_.byteLength):He("WebGLRenderer: Unsupported uniform value type.",_),T}function m(_){const T=_.target;T.removeEventListener("dispose",m);const w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function y(){for(const _ in r)t.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:c,dispose:y}}const _C=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ai=null;function xC(){return ai===null&&(ai=new tE(_C,16,16,Gr,vi),ai.name="DFG_LUT",ai.minFilter=rn,ai.magFilter=rn,ai.wrapS=Ri,ai.wrapT=Ri,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}class SC{constructor(e={}){const{canvas:n=hM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=wn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const M=p,g=new Set([ph,hh,fh]),u=new Set([wn,gi,Ja,Qa,uh,dh]),m=new Uint32Array(4),y=new Int32Array(4),_=new H;let T=null,w=null;const P=[],v=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let U=!1,k=null,W=null,I=null,q=null;this._outputColorSpace=Ln;let J=0,Z=0,G=null,z=-1,R=null;const b=new Ct,te=new Ct;let re=null;const _e=new it(0);let he=0,de=n.width,B=n.height,Y=1,oe=null,Te=null;const ae=new Ct(0,0,de,B),Ne=new Ct(0,0,de,B);let $e=!1;const ye=new Eh;let Ve=!1,be=!1;const ue=new Tt,Ae=new H,Ge=new Ct,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function dt(){return G===null?Y:1}let D=i;function St(E,F){return n.getContext(E,F)}let at,N,S,V,$,Q,ce,fe,ee,ie,pe,Fe,xe,me,Oe,ze,qe,O,ge,ne,ve,we,se;try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${lh}`),n.addEventListener("webglcontextlost",vt,!1),n.addEventListener("webglcontextrestored",ct,!1),n.addEventListener("webglcontextcreationerror",Vn,!1),D===null){const F="webgl2";if(D=St(F,E),D===null)throw St(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(E){throw n.removeEventListener("webglcontextlost",vt,!1),n.removeEventListener("webglcontextrestored",ct,!1),n.removeEventListener("webglcontextcreationerror",Vn,!1),st("WebGLRenderer: "+E.message),E}function ke(){at=new xT(D),at.init(),ve=new uC(D,at),N=new cT(D,at,e,ve),S=new lC(D,at),N.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),W=D.createFramebuffer(),I=D.createFramebuffer(),q=D.createFramebuffer(),V=new MT(D),$=new $A,Q=new cC(D,at,S,$,N,ve,V),ce=new _T(L),fe=new wE(D),we=new oT(D,fe),ee=new ST(D,fe,V,we),ie=new wT(D,ee,fe,we,V),O=new ET(D,N,Q),Oe=new uT($),pe=new qA(L,ce,at,N,we,Oe),Fe=new gC(L,$),xe=new KA,me=new nC(at),qe=new aT(L,ce,S,ie,x,l),ze=new oC(L,ie,N),se=new vC(D,V,N,S),ge=new lT(D,at,V),ne=new yT(D,at,V),V.programs=pe.programs,L.capabilities=N,L.extensions=at,L.properties=$,L.renderLists=xe,L.shadowMap=ze,L.state=S,L.info=V}M!==wn&&(C=new AT(M,n.width,n.height,o,r,s));const Ie=new pC(L,D);this.xr=Ie,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=at.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=at.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(de,B,!1))},this.getSize=function(E){return E.set(de,B)},this.setSize=function(E,F,K=!0){if(Ie.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}de=E,B=F,n.width=Math.floor(E*Y),n.height=Math.floor(F*Y),K===!0&&(n.style.width=E+"px",n.style.height=F+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(de*Y,B*Y).floor()},this.setDrawingBufferSize=function(E,F,K){de=E,B=F,Y=K,n.width=Math.floor(E*K),n.height=Math.floor(F*K),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(M===wn){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(ae)},this.setViewport=function(E,F,K,X){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,F,K,X),S.viewport(b.copy(ae).multiplyScalar(Y).round())},this.getScissor=function(E){return E.copy(Ne)},this.setScissor=function(E,F,K,X){E.isVector4?Ne.set(E.x,E.y,E.z,E.w):Ne.set(E,F,K,X),S.scissor(te.copy(Ne).multiplyScalar(Y).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(E){S.setScissorTest($e=E)},this.setOpaqueSort=function(E){oe=E},this.setTransparentSort=function(E){Te=E},this.getClearColor=function(E){return E.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,K=!0){let X=0;if(E){let j=!1;if(G!==null){const Ee=G.texture.format;j=g.has(Ee)}if(j){const Ee=G.texture.type,Re=u.has(Ee),Me=qe.getClearColor(),Le=qe.getClearAlpha(),Ue=Me.r,Ye=Me.g,Je=Me.b;Re?(m[0]=Ue,m[1]=Ye,m[2]=Je,m[3]=Le,D.clearBufferuiv(D.COLOR,0,m)):(y[0]=Ue,y[1]=Ye,y[2]=Je,y[3]=Le,D.clearBufferiv(D.COLOR,0,y))}else X|=D.COLOR_BUFFER_BIT}F&&(X|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),k=E},this.dispose=function(){n.removeEventListener("webglcontextlost",vt,!1),n.removeEventListener("webglcontextrestored",ct,!1),n.removeEventListener("webglcontextcreationerror",Vn,!1),qe.dispose(),xe.dispose(),me.dispose(),$.dispose(),ce.dispose(),ie.dispose(),we.dispose(),se.dispose(),pe.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Fh),Ie.removeEventListener("sessionend",Oh),_r.stop()};function vt(E){E.preventDefault(),Yl("WebGLRenderer: Context Lost."),U=!0}function ct(){Yl("WebGLRenderer: Context Restored."),U=!1;const E=V.autoReset,F=ze.enabled,K=ze.autoUpdate,X=ze.needsUpdate,j=ze.type;ke(),V.autoReset=E,ze.enabled=F,ze.autoUpdate=K,ze.needsUpdate=X,ze.type=j}function Vn(E){st("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ni(E){const F=E.target;F.removeEventListener("dispose",ni),w_(F)}function w_(E){T_(E),$.remove(E)}function T_(E){const F=$.get(E).programs;F!==void 0&&(F.forEach(function(K){pe.releaseProgram(K)}),E.isShaderMaterial&&pe.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,K,X,j,Ee){F===null&&(F=Xe);const Re=j.isMesh&&j.matrixWorld.determinantAffine()<0,Me=b_(E,F,K,X,j);S.setMaterial(X,Re);let Le=K.index,Ue=1;if(X.wireframe===!0){if(Le=ee.getWireframeAttribute(K),Le===void 0)return;Ue=2}const Ye=K.drawRange,Je=K.attributes.position;let De=Ye.start*Ue,ut=(Ye.start+Ye.count)*Ue;Ee!==null&&(De=Math.max(De,Ee.start*Ue),ut=Math.min(ut,(Ee.start+Ee.count)*Ue)),Le!==null?(De=Math.max(De,0),ut=Math.min(ut,Le.count)):Je!=null&&(De=Math.max(De,0),ut=Math.min(ut,Je.count));const Ut=ut-De;if(Ut<0||Ut===1/0)return;we.setup(j,X,Me,K,Le);let yt,gt=ge;if(Le!==null&&(yt=fe.get(Le),gt=ne,gt.setIndex(yt)),j.isMesh)X.wireframe===!0?(S.setLineWidth(X.wireframeLinewidth*dt()),gt.setMode(D.LINES)):gt.setMode(D.TRIANGLES);else if(j.isLine){let Zt=X.linewidth;Zt===void 0&&(Zt=1),S.setLineWidth(Zt*dt()),j.isLineSegments?gt.setMode(D.LINES):j.isLineLoop?gt.setMode(D.LINE_LOOP):gt.setMode(D.LINE_STRIP)}else j.isPoints?gt.setMode(D.POINTS):j.isSprite&&gt.setMode(D.TRIANGLES);if(j.isBatchedMesh)if(at.get("WEBGL_multi_draw"))gt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Zt=j._multiDrawStarts,Ce=j._multiDrawCounts,on=j._multiDrawCount,ot=Le?fe.get(Le).bytesPerElement:1,Pn=$.get(X).currentProgram.getUniforms();for(let ii=0;ii<on;ii++)Pn.setValue(D,"_gl_DrawID",ii),gt.render(Zt[ii]/ot,Ce[ii])}else if(j.isInstancedMesh)gt.renderInstances(De,Ut,j.count);else if(K.isInstancedBufferGeometry){const Zt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ce=Math.min(K.instanceCount,Zt);gt.renderInstances(De,Ut,Ce)}else gt.render(De,Ut)};function Uh(E,F,K,X){k!==null&&E.isNodeMaterial&&k.setObject(X,E),Ve===!0&&Oe.setState(E,K,!1),E.transparent===!0&&E.side===Ai&&E.forceSinglePass===!1?(E.side=xn,E.needsUpdate=!0,fo(E,F,X),E.side=Vr,E.needsUpdate=!0,fo(E,F,X),E.side=Ai):fo(E,F,X)}this.compile=function(E,F,K=null){K===null&&(K=E),k!==null&&k.renderStart(E,F,K),w=me.get(K),w.init(F),v.push(w),K.traverseVisible(function(j){j.isLight&&j.layers.test(F.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),E!==K&&E.traverseVisible(function(j){j.isLight&&j.layers.test(F.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),w.setupLights(),k!==null&&k.updateLights(w.state.lightsArray),be=this.localClippingEnabled,Ve=Oe.init(this.clippingPlanes,be),Ve===!0&&Oe.setGlobalState(this.clippingPlanes,F),k!==null&&ze.render(w.state.shadowsArray,K,F);const X=new Set;return E.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ee=j.material;if(Ee)if(Array.isArray(Ee))for(let Re=0;Re<Ee.length;Re++){const Me=Ee[Re];Uh(Me,K,F,j),X.add(Me)}else Uh(Ee,K,F,j),X.add(Ee)}),w=v.pop(),k!==null&&k.renderEnd(),X},this.compileAsync=function(E,F,K=null){const X=this.compile(E,F,K);return new Promise(j=>{function Ee(){if(X.forEach(function(Re){const Le=$.get(Re).currentProgram;(Le===void 0||Le.isReady())&&X.delete(Re)}),X.size===0){j(E);return}setTimeout(Ee,10)}at.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Sc=null;function A_(E){Sc&&Sc(E)}function Fh(){_r.stop()}function Oh(){_r.start()}const _r=new g_;_r.setAnimationLoop(A_),typeof self<"u"&&_r.setContext(self),this.setAnimationLoop=function(E){Sc=E,Ie.setAnimationLoop(E),E===null?_r.stop():_r.start()},Ie.addEventListener("sessionstart",Fh),Ie.addEventListener("sessionend",Oh),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;k!==null&&k.renderStart(E,F);const K=Ie.enabled===!0&&Ie.isPresenting===!0,X=C!==null&&(G===null||K)&&C.begin(L,G);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(F),F=Ie.getCamera()),E.isScene===!0&&E.onBeforeRender(L,E,F,G),w=me.get(E,v.length),w.init(F),w.state.textureUnits=Q.getTextureUnits(),v.push(w),ue.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ye.setFromProjectionMatrix(ue,di,F.reversedDepth),be=this.localClippingEnabled,Ve=Oe.init(this.clippingPlanes,be),T=xe.get(E,P.length),T.init(),P.push(T),Ie.enabled===!0&&Ie.isPresenting===!0){const Re=L.xr.getDepthSensingMesh();Re!==null&&yc(Re,F,-1/0,L.sortObjects)}yc(E,F,0,L.sortObjects),T.finish(),k!==null&&k.updateLights(w.state.lightsArray),L.sortObjects===!0&&T.sort(oe,Te),et=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,et&&qe.addToRenderList(T,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ve===!0&&Oe.beginShadows();const j=w.state.shadowsArray;if(ze.render(j,E,F),Ve===!0&&Oe.endShadows(),(X&&C.hasRenderPass())===!1){const Re=T.opaque,Me=T.transmissive;if(w.setupLights(),F.isArrayCamera){const Le=F.cameras;if(Me.length>0)for(let Ue=0,Ye=Le.length;Ue<Ye;Ue++){const Je=Le[Ue];Bh(Re,Me,E,Je)}et&&qe.render(E);for(let Ue=0,Ye=Le.length;Ue<Ye;Ue++){const Je=Le[Ue];kh(T,E,Je,Je.viewport)}}else Me.length>0&&Bh(Re,Me,E,F),et&&qe.render(E),kh(T,E,F)}G!==null&&Z===0&&(Q.updateMultisampleRenderTarget(G),Q.updateRenderTargetMipmap(G)),X&&C.end(L),E.isScene===!0&&E.onAfterRender(L,E,F),we.resetDefaultState(),z=-1,R=null,v.pop(),v.length>0?(w=v[v.length-1],Q.setTextureUnits(w.state.textureUnits),Ve===!0&&Oe.setGlobalState(L.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?T=P[P.length-1]:T=null,k!==null&&k.renderEnd()};function yc(E,F,K,X){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(ye)){X&&Ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ue);const Re=ie.update(E),Me=E.material;Me.visible&&T.push(E,Re,Me,K,Ge.z,null,F)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(ye))){const Re=ie.update(E),Me=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ge.copy(E.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ge.copy(Re.boundingSphere.center)),Ge.applyMatrix4(E.matrixWorld).applyMatrix4(ue)),Array.isArray(Me)){const Le=Re.groups;for(let Ue=0,Ye=Le.length;Ue<Ye;Ue++){const Je=Le[Ue],De=Me[Je.materialIndex];De&&De.visible&&T.push(E,Re,De,K,Ge.z,Je,F)}}else Me.visible&&T.push(E,Re,Me,K,Ge.z,null,F)}}const Ee=E.children;for(let Re=0,Me=Ee.length;Re<Me;Re++)yc(Ee[Re],F,K,X)}function kh(E,F,K,X){const{opaque:j,transmissive:Ee,transparent:Re}=E;w.setupLightsView(K),Ve===!0&&Oe.setGlobalState(L.clippingPlanes,K),X&&S.viewport(b.copy(X)),j.length>0&&uo(j,F,K),Ee.length>0&&uo(Ee,F,K),Re.length>0&&uo(Re,F,K),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Bh(E,F,K,X){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[X.id]===void 0){const De=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[X.id]=new ei(1,1,{generateMipmaps:!0,type:De?vi:wn,minFilter:Pr,samples:Math.max(4,N.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const Ee=w.state.transmissionRenderTarget[X.id],Re=X.viewport||b;Ee.setSize(Re.z*L.transmissionResolutionScale,Re.w*L.transmissionResolutionScale);const Me=L.getRenderTarget(),Le=L.getActiveCubeFace(),Ue=L.getActiveMipmapLevel();L.setRenderTarget(Ee),L.getClearColor(_e),he=L.getClearAlpha(),he<1&&L.setClearColor(16777215,.5),L.clear(),et&&qe.render(K);const Ye=L.toneMapping;L.toneMapping=pi;const Je=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),w.setupLightsView(X),Ve===!0&&Oe.setGlobalState(L.clippingPlanes,X),uo(E,K,X),Q.updateMultisampleRenderTarget(Ee),Q.updateRenderTargetMipmap(Ee),at.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ut=0,Ut=F.length;ut<Ut;ut++){const yt=F[ut],{object:gt,geometry:Zt,material:Ce,group:on}=yt;if(Ce.side===Ai&&gt.layers.test(X.layers)){const ot=Ce.side;Ce.side=xn,Ce.needsUpdate=!0,zh(gt,K,X,Zt,Ce,on),Ce.side=ot,Ce.needsUpdate=!0,De=!0}}De===!0&&(Q.updateMultisampleRenderTarget(Ee),Q.updateRenderTargetMipmap(Ee))}L.setRenderTarget(Me,Le,Ue),L.setClearColor(_e,he),Je!==void 0&&(X.viewport=Je),L.toneMapping=Ye}function uo(E,F,K){const X=F.isScene===!0?F.overrideMaterial:null;for(let j=0,Ee=E.length;j<Ee;j++){const Re=E[j],{object:Me,geometry:Le,group:Ue}=Re;let Ye=Re.material;Ye.allowOverride===!0&&X!==null&&(Ye=X),Me.layers.test(K.layers)&&zh(Me,F,K,Le,Ye,Ue)}}function zh(E,F,K,X,j,Ee){k!==null&&j.isNodeMaterial&&k.setObject(E,j),E.onBeforeRender(L,F,K,X,j,Ee),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(L,F,K,X,E,Ee),j.transparent===!0&&j.side===Ai&&j.forceSinglePass===!1?(j.side=xn,j.needsUpdate=!0,L.renderBufferDirect(K,F,X,j,E,Ee),j.side=Vr,j.needsUpdate=!0,L.renderBufferDirect(K,F,X,j,E,Ee),j.side=Ai):L.renderBufferDirect(K,F,X,j,E,Ee),E.onAfterRender(L,F,K,X,j,Ee)}function fo(E,F,K){F.isScene!==!0&&(F=Xe);const X=$.get(E),j=w.state.lights,Ee=w.state.shadowsArray,Re=j.state.version,Me=pe.getParameters(E,j.state,Ee,F,K,w.state.lightProbeGridArray),Le=pe.getProgramCacheKey(Me);let Ue=X.programs;X.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,X.fog=F.fog;const Ye=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;X.envMap=ce.get(E.envMap||X.environment,Ye),X.envMapRotation=X.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ue===void 0&&(E.addEventListener("dispose",ni),Ue=new Map,X.programs=Ue);let Je=Ue.get(Le);if(Je!==void 0){if(X.currentProgram===Je&&X.lightsStateVersion===Re)return Hh(E,Me),Je}else Me.uniforms=pe.getUniforms(E),k!==null&&E.isNodeMaterial&&k.build(E,K,Me),E.onBeforeCompile(Me,L),Je=pe.acquireProgram(Me,Le),Ue.set(Le,Je),X.uniforms=Me.uniforms;const De=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=Oe.uniform),Hh(E,Me),X.needsLights=P_(E),X.lightsStateVersion=Re,X.needsLights&&(De.ambientLightColor.value=j.state.ambient,De.lightProbe.value=j.state.probe,De.sunLights.value=j.state.sun,De.sunLightShadows.value=j.state.sunShadow,De.directionalLights.value=j.state.directional,De.directionalLightShadows.value=j.state.directionalShadow,De.spotLights.value=j.state.spot,De.spotLightShadows.value=j.state.spotShadow,De.rectAreaLights.value=j.state.rectArea,De.ltc_1.value=j.state.rectAreaLTC1,De.ltc_2.value=j.state.rectAreaLTC2,De.pointLights.value=j.state.point,De.pointLightShadows.value=j.state.pointShadow,De.hemisphereLights.value=j.state.hemi,De.sunShadowMatrix.value=j.state.sunShadowMatrix,De.sunShadowCascade.value=j.state.sunShadowCascade,De.directionalShadowMatrix.value=j.state.directionalShadowMatrix,De.spotLightMatrix.value=j.state.spotLightMatrix,De.spotLightMap.value=j.state.spotLightMap,De.pointShadowMatrix.value=j.state.pointShadowMatrix),X.lightProbeGrid=w.state.lightProbeGridArray.length>0,X.currentProgram=Je,X.uniformsList=null,Je}function Vh(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Sl.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Hh(E,F){const K=$.get(E);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function C_(E,F){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;_.setFromMatrixPosition(F.matrixWorld);for(let K=0,X=E.length;K<X;K++){const j=E[K];if(j.texture!==null&&j.boundingBox.containsPoint(_))return j}return null}function b_(E,F,K,X,j){F.isScene!==!0&&(F=Xe),Q.resetTextureUnits();const Ee=F.fog,Re=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?F.environment:null,Me=G===null?L.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:rt.workingColorSpace,Le=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ue=ce.get(X.envMap||Re,Le),Ye=X.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Je=!!K.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),De=!!K.morphAttributes.position,ut=!!K.morphAttributes.normal,Ut=!!K.morphAttributes.color;let yt=pi;X.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(yt=L.toneMapping);const gt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Zt=gt!==void 0?gt.length:0,Ce=$.get(X),on=w.state.lights;if(Ve===!0&&(be===!0||E!==R)){const _t=E===R&&X.id===z;Oe.setState(X,E,_t)}let ot=!1;X.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==on.state.version||Ce.outputColorSpace!==Me||j.isBatchedMesh&&Ce.batching===!1||!j.isBatchedMesh&&Ce.batching===!0||j.isBatchedMesh&&Ce.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Ce.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Ce.instancing===!1||!j.isInstancedMesh&&Ce.instancing===!0||j.isSkinnedMesh&&Ce.skinning===!1||!j.isSkinnedMesh&&Ce.skinning===!0||j.isInstancedMesh&&Ce.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ce.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ce.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ce.instancingMorph===!1&&j.morphTexture!==null||Ce.envMap!==Ue||X.fog===!0&&Ce.fog!==Ee||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Oe.numPlanes||Ce.numIntersection!==Oe.numIntersection)||Ce.vertexAlphas!==Ye||Ce.vertexTangents!==Je||Ce.morphTargets!==De||Ce.morphNormals!==ut||Ce.morphColors!==Ut||Ce.toneMapping!==yt||Ce.morphTargetsCount!==Zt||!!Ce.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,Ce.__version=X.version);let Pn=Ce.currentProgram;ot===!0&&(Pn=fo(X,F,j),k&&X.isNodeMaterial&&k.onUpdateProgram(X,Pn,Ce));let ii=!1,Vi=!1,qr=!1;const mt=Pn.getUniforms(),Lt=Ce.uniforms;if(S.useProgram(Pn.program)&&(ii=!0,Vi=!0,qr=!0),X.id!==z&&(z=X.id,Vi=!0),Ce.needsLights){const _t=C_(w.state.lightProbeGridArray,j);Ce.lightProbeGrid!==_t&&(Ce.lightProbeGrid=_t,Vi=!0)}if(ii||R!==E){S.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),mt.setValue(D,"projectionMatrix",E.projectionMatrix),mt.setValue(D,"viewMatrix",E.matrixWorldInverse);const Gi=mt.map.cameraPosition;Gi!==void 0&&Gi.setValue(D,Ae.setFromMatrixPosition(E.matrixWorld)),N.logarithmicDepthBuffer&&mt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&mt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),R!==E&&(R=E,Vi=!0,qr=!0)}if(Ce.needsLights&&(on.state.sunShadowMap.length>0&&mt.setValue(D,"sunShadowMap",on.state.sunShadowMap,Q),on.state.directionalShadowMap.length>0&&mt.setValue(D,"directionalShadowMap",on.state.directionalShadowMap,Q),on.state.spotShadowMap.length>0&&mt.setValue(D,"spotShadowMap",on.state.spotShadowMap,Q),on.state.pointShadowMap.length>0&&mt.setValue(D,"pointShadowMap",on.state.pointShadowMap,Q)),j.isSkinnedMesh){mt.setOptional(D,j,"bindMatrix"),mt.setOptional(D,j,"bindMatrixInverse");const _t=j.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),mt.setValue(D,"boneTexture",_t.boneTexture,Q))}j.isBatchedMesh&&(mt.setOptional(D,j,"batchingTexture"),mt.setValue(D,"batchingTexture",j._matricesTexture,Q),mt.setOptional(D,j,"batchingIdTexture"),mt.setValue(D,"batchingIdTexture",j._indirectTexture,Q),mt.setOptional(D,j,"batchingColorTexture"),j._colorsTexture!==null&&mt.setValue(D,"batchingColorTexture",j._colorsTexture,Q));const Hi=K.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&O.update(j,K,Pn),(Vi||Ce.receiveShadow!==j.receiveShadow)&&(Ce.receiveShadow=j.receiveShadow,mt.setValue(D,"receiveShadow",j.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&F.environment!==null&&(Lt.envMapIntensity.value=F.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=xC()),Vi){if(mt.setValue(D,"toneMappingExposure",L.toneMappingExposure),Ce.needsLights&&R_(Lt,qr),Ee&&X.fog===!0&&Fe.refreshFogUniforms(Lt,Ee),Fe.refreshMaterialUniforms(Lt,X,Y,B,w.state.transmissionRenderTarget[E.id]),Ce.needsLights&&Ce.lightProbeGrid){const _t=Ce.lightProbeGrid;Lt.probesSH.value=_t.texture,Lt.probesMin.value.copy(_t.boundingBox.min),Lt.probesMax.value.copy(_t.boundingBox.max),Lt.probesResolution.value.copy(_t.resolution)}Sl.upload(D,Vh(Ce),Lt,Q)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Sl.upload(D,Vh(Ce),Lt,Q),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&mt.setValue(D,"center",j.center),mt.setValue(D,"modelViewMatrix",j.modelViewMatrix),mt.setValue(D,"normalMatrix",j.normalMatrix),mt.setValue(D,"modelMatrix",j.matrixWorld),X.uniformsGroups!==void 0){const _t=X.uniformsGroups;for(let Gi=0,$r=_t.length;Gi<$r;Gi++){const Wh=_t[Gi];se.update(Wh,Pn),se.bind(Wh,Pn)}}return Pn}function R_(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function P_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(E,F,K){const X=$.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),$.get(E.texture).__webglTexture=F,$.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:K,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const K=$.get(E);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,K=0){G=E,J=F,Z=K;let X=null,j=!1,Ee=!1;if(E){const Me=$.get(E);if(Me.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(D.FRAMEBUFFER,Me.__webglFramebuffer),b.copy(E.viewport),te.copy(E.scissor),re=E.scissorTest,S.viewport(b),S.scissor(te),S.setScissorTest(re),z=-1;return}else if(Me.__webglFramebuffer===void 0)Q.setupRenderTarget(E);else if(Me.__hasExternalTextures)Q.rebindTextures(E,$.get(E.texture).__webglTexture,$.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ye=E.depthTexture;if(Me.__boundDepthTexture!==Ye){if(Ye!==null&&$.has(Ye)&&(E.width!==Ye.image.width||E.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(E)}}const Le=E.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Ee=!0);const Ue=$.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?X=Ue[F][K]:X=Ue[F],j=!0):E.samples>0&&Q.useMultisampledRTT(E)===!1?X=$.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?X=Ue[K]:X=Ue,b.copy(E.viewport),te.copy(E.scissor),re=E.scissorTest}else b.copy(ae).multiplyScalar(Y).floor(),te.copy(Ne).multiplyScalar(Y).floor(),re=$e;if(K!==0&&(X=W),S.bindFramebuffer(D.FRAMEBUFFER,X)&&S.drawBuffers(E,X),S.viewport(b),S.scissor(te),S.setScissorTest(re),j){const Me=$.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me.__webglTexture,K)}else if(Ee){const Me=F;for(let Le=0;Le<E.textures.length;Le++){const Ue=$.get(E.textures[Le]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Le,Ue.__webglTexture,K,Me)}}else if(E!==null&&K!==0){const Me=$.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Me.__webglTexture,K)}z=-1};function Gh(E){const F=$.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=N.textureFormatReadable(E.format),F.__typeReadable=N.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,K,X,j,Ee,Re,Me=0){if(!(E&&E.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=$.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){S.bindFramebuffer(D.FRAMEBUFFER,Le);try{const Ue=E.textures[Me],Ye=Ue.format,Je=Ue.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Me);const De=Gh(Ue);if(De.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-X&&K>=0&&K<=E.height-j&&D.readPixels(F,K,X,j,ve.convert(Ye),ve.convert(Je),Ee)}finally{const Ue=G!==null?$.get(G).__webglFramebuffer:null;S.bindFramebuffer(D.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(E,F,K,X,j,Ee,Re,Me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=$.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le)if(F>=0&&F<=E.width-X&&K>=0&&K<=E.height-j){S.bindFramebuffer(D.FRAMEBUFFER,Le);const Ue=E.textures[Me],Ye=Ue.format,Je=Ue.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Me);const De=Gh(Ue);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ut),D.bufferData(D.PIXEL_PACK_BUFFER,Ee.byteLength,D.STREAM_READ),D.readPixels(F,K,X,j,ve.convert(Ye),ve.convert(Je),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const Ut=G!==null?$.get(G).__webglFramebuffer:null;S.bindFramebuffer(D.FRAMEBUFFER,Ut);const yt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await pM(D,yt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ut),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ee),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(ut),D.deleteSync(yt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,K=0){const X=Math.pow(2,-K),j=Math.floor(E.image.width*X),Ee=Math.floor(E.image.height*X),Re=F!==null?F.x:0,Me=F!==null?F.y:0;Q.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,K,0,0,Re,Me,j,Ee),S.unbindTexture()},this.copyTextureToTexture=function(E,F,K=null,X=null,j=0,Ee=0){let Re,Me,Le,Ue,Ye,Je,De,ut,Ut;const yt=E.isCompressedTexture?E.mipmaps[Ee]:E.image;if(K!==null)Re=K.max.x-K.min.x,Me=K.max.y-K.min.y,Le=K.isBox3?K.max.z-K.min.z:1,Ue=K.min.x,Ye=K.min.y,Je=K.isBox3?K.min.z:0;else{const Lt=Math.pow(2,-j);Re=Math.floor(yt.width*Lt),Me=Math.floor(yt.height*Lt),E.isDataArrayTexture?Le=yt.depth:E.isData3DTexture?Le=Math.floor(yt.depth*Lt):Le=1,Ue=0,Ye=0,Je=0}X!==null?(De=X.x,ut=X.y,Ut=X.z):(De=0,ut=0,Ut=0);const gt=ve.convert(F.format),Zt=ve.convert(F.type);let Ce;F.isData3DTexture?(Q.setTexture3D(F,0),Ce=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Q.setTexture2DArray(F,0),Ce=D.TEXTURE_2D_ARRAY):(Q.setTexture2D(F,0),Ce=D.TEXTURE_2D),S.activeTexture(D.TEXTURE0),S.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),S.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),S.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const on=S.getParameter(D.UNPACK_ROW_LENGTH),ot=S.getParameter(D.UNPACK_IMAGE_HEIGHT),Pn=S.getParameter(D.UNPACK_SKIP_PIXELS),ii=S.getParameter(D.UNPACK_SKIP_ROWS),Vi=S.getParameter(D.UNPACK_SKIP_IMAGES);S.pixelStorei(D.UNPACK_ROW_LENGTH,yt.width),S.pixelStorei(D.UNPACK_IMAGE_HEIGHT,yt.height),S.pixelStorei(D.UNPACK_SKIP_PIXELS,Ue),S.pixelStorei(D.UNPACK_SKIP_ROWS,Ye),S.pixelStorei(D.UNPACK_SKIP_IMAGES,Je);const qr=E.isDataArrayTexture||E.isData3DTexture,mt=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const Lt=$.get(E),Hi=$.get(F),_t=$.get(Lt.__renderTarget),Gi=$.get(Hi.__renderTarget);S.bindFramebuffer(D.READ_FRAMEBUFFER,_t.__webglFramebuffer),S.bindFramebuffer(D.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let $r=0;$r<Le;$r++)qr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$.get(E).__webglTexture,j,Je+$r),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$.get(F).__webglTexture,Ee,Ut+$r)),D.blitFramebuffer(Ue,Ye,Re,Me,De,ut,Re,Me,D.DEPTH_BUFFER_BIT,D.NEAREST);S.bindFramebuffer(D.READ_FRAMEBUFFER,null),S.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(j!==0||E.isRenderTargetTexture||$.has(E)){const Lt=$.get(E),Hi=$.get(F);S.bindFramebuffer(D.READ_FRAMEBUFFER,I),S.bindFramebuffer(D.DRAW_FRAMEBUFFER,q);for(let _t=0;_t<Le;_t++)qr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.__webglTexture,j,Je+_t):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Lt.__webglTexture,j),mt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Hi.__webglTexture,Ee,Ut+_t):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Hi.__webglTexture,Ee),j!==0?D.blitFramebuffer(Ue,Ye,Re,Me,De,ut,Re,Me,D.COLOR_BUFFER_BIT,D.NEAREST):mt?D.copyTexSubImage3D(Ce,Ee,De,ut,Ut+_t,Ue,Ye,Re,Me):D.copyTexSubImage2D(Ce,Ee,De,ut,Ue,Ye,Re,Me);S.bindFramebuffer(D.READ_FRAMEBUFFER,null),S.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else mt?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Ce,Ee,De,ut,Ut,Re,Me,Le,gt,Zt,yt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Ce,Ee,De,ut,Ut,Re,Me,Le,gt,yt.data):D.texSubImage3D(Ce,Ee,De,ut,Ut,Re,Me,Le,gt,Zt,yt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ee,De,ut,Re,Me,gt,Zt,yt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ee,De,ut,yt.width,yt.height,gt,yt.data):D.texSubImage2D(D.TEXTURE_2D,Ee,De,ut,Re,Me,gt,Zt,yt);S.pixelStorei(D.UNPACK_ROW_LENGTH,on),S.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ot),S.pixelStorei(D.UNPACK_SKIP_PIXELS,Pn),S.pixelStorei(D.UNPACK_SKIP_ROWS,ii),S.pixelStorei(D.UNPACK_SKIP_IMAGES,Vi),Ee===0&&F.generateMipmaps&&D.generateMipmap(Ce),S.unbindTexture()},this.initRenderTarget=function(E){$.get(E).__webglFramebuffer===void 0&&Q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),S.unbindTexture()},this.resetState=function(){J=0,Z=0,G=null,S.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=rt._getUnpackColorSpace()}}const tl=[{id:"school",nameFr:"L'École",nameEn:"School",emoji:"🏫",color:"#ff7675",x:-8,z:-8,description:"Apprends l'alphabet, les chiffres et les couleurs !"},{id:"grocery",nameFr:"L'Épicerie",nameEn:"Grocery Store",emoji:"🛒",color:"#00b894",x:8,z:-8,description:"Remplis ton caddie avec de bons fruits et légumes !"},{id:"mall",nameFr:"Le Centre Commercial",nameEn:"Shopping Mall",emoji:"🛍️",color:"#6c5ce7",x:-9,z:7,description:"Explore les magasins de jouets, vêtements et trésors !"},{id:"restaurant",nameFr:"Le Restaurant",nameEn:"Restaurant",emoji:"🍽️",color:"#fdcb6e",x:8,z:7,description:"Deviens un petit chef et cuisine de délicieux plats !"},{id:"firefighter",nameFr:"La Caserne des Pompiers",nameEn:"Fire Station",emoji:"🚒",color:"#d63031",x:0,z:-12,description:"Conduis le camion de pompier et éteins les flammes !"}];function yC({onSelectLocation:t,onTeacherSpeech:e,starsCount:n,onCollectStar:i}){const r=Be.useRef(null),[s,a]=Be.useState(null),o=Be.useRef({x:0,z:0,targetX:0,targetZ:0,angle:0}),l=Be.useRef(null),c=Be.useRef(null),f=Be.useRef(null),h=Be.useRef([]),d=Be.useRef([]);Be.useEffect(()=>{const M=r.current;if(!M)return;const g=M.clientWidth,u=M.clientHeight||480,m=new XM;c.current=m,m.background=new it("#dff9fb"),m.fog=new Sh("#dff9fb",.02);const y=new Un(45,g/u,.1,100);y.position.set(0,18,22),y.lookAt(0,1,0),f.current=y;const _=new SC({antialias:!0,alpha:!0});_.setSize(g,u),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.shadowMap.enabled=!0,_.shadowMap.type=Ov,M.appendChild(_.domElement);const T=new _E(16777215,.75);m.add(T);const w=new vE(16775126,1.2);w.position.set(15,25,15),w.castShadow=!0,w.shadow.mapSize.width=1024,w.shadow.mapSize.height=1024,w.shadow.camera.near=5,w.shadow.camera.far=50,w.shadow.camera.left=-20,w.shadow.camera.right=20,w.shadow.camera.top=20,w.shadow.camera.bottom=-20,m.add(w);const P=new Fs(20,21,2,48),v=new jn({color:"#a8e6cf",roughness:.8,metalness:.1}),C=new Pt(P,v);C.position.y=-1,C.receiveShadow=!0,m.add(C);const L=new jn({color:"#dfe6e9",roughness:.9}),U=new Ur(36,4),k=new Pt(U,L);k.rotation.x=-Math.PI/2,k.position.y=.02,k.receiveShadow=!0,m.add(k);const W=new Ur(4,36),I=new Pt(W,L);I.rotation.x=-Math.PI/2,I.position.y=.02,I.receiveShadow=!0,m.add(I);const q=new Fs(2.5,2.7,.5,24),J=new jn({color:"#74b9ff",roughness:.4}),Z=new Pt(q,J);Z.position.set(0,.25,0),Z.receiveShadow=!0,m.add(Z);const G=(be,ue)=>{const Ae=new Fs(.25,.35,1.2,8),Ge=new jn({color:"#b5651d"}),Xe=new Pt(Ae,Ge);Xe.position.set(be,.6,ue),Xe.castShadow=!0,m.add(Xe);const et=new Zl(1.2,2.2,8),dt=new jn({color:"#55efc4",roughness:.6}),D=new Pt(et,dt);D.position.set(be,2,ue),D.castShadow=!0,m.add(D)};[[-14,0],[14,0],[0,14],[-14,-14],[14,14],[-14,14],[14,-14],[-5,-14],[5,-14],[-5,14],[5,14]].forEach(([be,ue])=>G(be,ue));const z=[];for(let be=0;be<6;be++){const ue=new Lr,Ae=new jn({color:"#ffffff",roughness:.3});for(let Ge=0;Ge<4;Ge++){const Xe=new Pt(new Jl(1.2-Ge*.15,12,12),Ae);Xe.position.set(Ge*.8,0,(Math.random()-.5)*.6),ue.add(Xe)}ue.position.set((Math.random()-.5)*35,10+Math.random()*4,(Math.random()-.5)*35),m.add(ue),z.push(ue)}tl.forEach(be=>{const ue=new Lr;ue.position.set(be.x,0,be.z);const Ae=new Zs(4.2,3.2,4.2),Ge=new jn({color:be.color,roughness:.5}),Xe=new Pt(Ae,Ge);Xe.position.y=1.6,Xe.castShadow=!0,Xe.receiveShadow=!0,ue.add(Xe);const et=new Zl(3.4,2,4),dt=new jn({color:"#2d3436",roughness:.4}),D=new Pt(et,dt);D.position.y=4.2,D.rotation.y=Math.PI/4,D.castShadow=!0,ue.add(D);const St=new Ur(1.2,1.8),at=new jn({color:"#ffffff"}),N=new Pt(St,at);N.position.set(0,.9,2.12),ue.add(N);const S=new Jl(.7,16,16),V=new jn({color:"#ffffff",emissive:be.color,emissiveIntensity:.6}),$=new Pt(S,V);$.position.y=6.2,ue.add($),h.current.push({mesh:$,location:be}),m.add(ue)});const R=new Ah(.5,0),b=new jn({color:"#ffd32a",emissive:"#ffa502",emissiveIntensity:.8});[[3,3],[-3,-3],[-3,3],[3,-3],[0,6],[0,-6],[6,0],[-6,0]].forEach(([be,ue],Ae)=>{const Ge=new Pt(R,b);Ge.position.set(be,1,ue),m.add(Ge),d.current.push({mesh:Ge,id:Ae,collected:!1})});const re=new Lr;re.position.set(0,0,0);const _e=new wh(.8,16),he=new Mh({color:0,opacity:.25,transparent:!0}),de=new Pt(_e,he);de.rotation.x=-Math.PI/2,de.position.y=.05,re.add(de),new pE().load(oh,be=>{const ue=new l_({map:be}),Ae=new QM(ue);Ae.position.y=2.2,Ae.scale.set(3,3.8,1),re.add(Ae)}),m.add(re),l.current=re;const Y=new yE,oe=new We,Te=be=>{const ue=_.domElement.getBoundingClientRect();oe.x=(be.clientX-ue.left)/ue.width*2-1,oe.y=-((be.clientY-ue.top)/ue.height)*2+1,Y.setFromCamera(oe,y);const Ae=Y.intersectObject(C);if(Ae.length>0){const Ge=Ae[0].point;o.current.targetX=Ge.x,o.current.targetZ=Ge.z,nt.playPop(),tl.forEach(Xe=>{Math.hypot(Ge.x-Xe.x,Ge.z-Xe.z)<4.5&&t(Xe)})}},ae=_.domElement;ae.addEventListener("pointerdown",Te);let Ne,$e=new ME;const ye=()=>{Ne=requestAnimationFrame(ye);const be=$e.getDelta(),ue=$e.getElapsedTime();z.forEach((D,St)=>{D.position.x+=(.6+St*.1)*be,D.position.x>25&&(D.position.x=-25)});const Ae=o.current,Ge=Ae.targetX-Ae.x,Xe=Ae.targetZ-Ae.z,et=Math.hypot(Ge,Xe);if(et>.1){const D=7*be;Ae.x+=Ge/et*Math.min(D,et),Ae.z+=Xe/et*Math.min(D,et),l.current&&(l.current.position.set(Ae.x,0,Ae.z),l.current.position.y=Math.abs(Math.sin(ue*12))*.35),y.position.x=lm.lerp(y.position.x,Ae.x*.4,.05),y.position.z=lm.lerp(y.position.z,22+Ae.z*.4,.05),y.lookAt(Ae.x*.3,1,Ae.z*.3)}else l.current&&(l.current.position.set(Ae.x,0,Ae.z),l.current.position.y=Math.sin(ue*3)*.1);let dt=null;tl.forEach(D=>{Math.hypot(Ae.x-D.x,Ae.z-D.z)<3.8&&(dt=D)}),a(dt),h.current.forEach(({mesh:D})=>{D.position.y=6.2+Math.sin(ue*4)*.25}),d.current.forEach(D=>{D.collected||(D.mesh.rotation.y+=2*be,D.mesh.position.y=1+Math.sin(ue*3+D.id)*.2,Math.hypot(Ae.x-D.mesh.position.x,Ae.z-D.mesh.position.z)<1.4&&(D.collected=!0,D.mesh.visible=!1,nt.playSuccess(),i(),e("Bravo ! Tu as trouvé une étoile dorée ! ⭐")))}),_.render(m,y)};ye();const Ve=()=>{if(!M)return;const be=M.clientWidth,ue=M.clientHeight||480;y.aspect=be/ue,y.updateProjectionMatrix(),_.setSize(be,ue)};return window.addEventListener("resize",Ve),()=>{cancelAnimationFrame(Ne),window.removeEventListener("resize",Ve),ae.removeEventListener("pointerdown",Te),M.contains(ae)&&M.removeChild(ae),_.dispose()}},[]);const p=(M,g)=>{nt.playBloop(),o.current.targetX=Math.max(-14,Math.min(14,o.current.targetX+M)),o.current.targetZ=Math.max(-14,Math.min(14,o.current.targetZ+g))},x=()=>{nt.playPop(),l.current&&(l.current.position.y=1.2)};return A.jsxs("div",{className:"world-3d-wrapper",children:[A.jsx("div",{ref:r,className:"world-3d-canvas-container"}),A.jsxs("div",{className:"world-overlay-header",children:[A.jsxs("div",{className:"world-stars-badge",children:[A.jsx(ah,{size:24,fill:"#ffd32a",color:"#ffa502"}),A.jsxs("span",{children:["Étoiles : ",n]})]}),A.jsx("p",{className:"world-hint",children:"👉 Touche le sol ou les bâtiments pour déplacer Maîtresse Nia !"})]}),A.jsx("div",{className:"world-quick-pins",children:tl.map(M=>A.jsxs("button",{onClick:()=>{nt.playPop(),o.current.targetX=M.x,o.current.targetZ=M.z,t(M)},className:"world-pin-btn",style:{borderColor:M.color},children:[A.jsx("span",{className:"pin-emoji",children:M.emoji}),A.jsx("span",{className:"pin-label",children:M.nameFr})]},M.id))}),s&&A.jsxs("div",{className:"location-nearby-card animate-bounce-soft",children:[A.jsxs("div",{className:"nearby-info",children:[A.jsx("span",{className:"nearby-emoji",children:s.emoji}),A.jsxs("div",{children:[A.jsx("h4",{className:"nearby-name",children:s.nameFr}),A.jsxs("p",{className:"nearby-sub",children:["(",s.nameEn,")"]})]})]}),A.jsx("button",{onClick:()=>t(s),className:"nearby-enter-btn",style:{backgroundColor:s.color},children:"Entrer jouer ! 🌟"})]}),A.jsxs("div",{className:"toddler-dpad",children:[A.jsx("button",{onClick:()=>p(0,-3.5),className:"dpad-btn up",children:A.jsx(Sy,{size:28})}),A.jsxs("div",{className:"dpad-mid-row",children:[A.jsx("button",{onClick:()=>p(-3.5,0),className:"dpad-btn left",children:A.jsx(_y,{size:28})}),A.jsx("button",{onClick:x,className:"dpad-btn jump",children:"⭐"}),A.jsx("button",{onClick:()=>p(3.5,0),className:"dpad-btn right",children:A.jsx(xy,{size:28})})]}),A.jsx("button",{onClick:()=>p(0,3.5),className:"dpad-btn down",children:A.jsx(vy,{size:28})})]})]})}var Rh={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var R=new OffscreenCanvas(1,1),b=R.getContext("2d");b.fillRect(0,0,1,1);var te=R.transferToImageBitmap();b.createPattern(te,"no-repeat")}catch{return!1}return!0}();function l(){}function c(R){var b=n.exports.Promise,te=b!==void 0?b:e.Promise;return typeof te=="function"?new te(R):(R(l,l),null)}var f=function(R,b){return{transform:function(te){if(R)return te;if(b.has(te))return b.get(te);var re=new OffscreenCanvas(te.width,te.height),_e=re.getContext("2d");return _e.drawImage(te,0,0),b.set(te,re),re},clear:function(){b.clear()}}}(o,new Map),h=function(){var R=Math.floor(16.666666666666668),b,te,re={},_e=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(b=function(he){var de=Math.random();return re[de]=requestAnimationFrame(function B(Y){_e===Y||_e+R-1<Y?(_e=Y,delete re[de],he()):re[de]=requestAnimationFrame(B)}),de},te=function(he){re[he]&&cancelAnimationFrame(re[he])}):(b=function(he){return setTimeout(he,R)},te=function(he){return clearTimeout(he)}),{frame:b,cancel:te}}(),d=function(){var R,b,te={};function re(_e){function he(de,B){_e.postMessage({options:de||{},callback:B})}_e.init=function(B){var Y=B.transferControlToOffscreen();_e.postMessage({canvas:Y},[Y])},_e.fire=function(B,Y,oe){if(b)return he(B,null),b;var Te=Math.random().toString(36).slice(2);return b=c(function(ae){function Ne($e){$e.data.callback===Te&&(delete te[Te],_e.removeEventListener("message",Ne),b=null,f.clear(),oe(),ae())}_e.addEventListener("message",Ne),he(B,Te),te[Te]=Ne.bind(null,{data:{callback:Te}})}),b},_e.reset=function(){_e.postMessage({reset:!0});for(var B in te)te[B](),delete te[B]}}return function(){if(R)return R;if(!i&&s){var _e=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{R=new Worker(URL.createObjectURL(new Blob([_e])))}catch(he){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",he),null}re(R)}return R}}(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function x(R,b){return b?b(R):R}function M(R){return R!=null}function g(R,b,te){return x(R&&M(R[b])?R[b]:p[b],te)}function u(R){return R<0?0:Math.floor(R)}function m(R,b){return Math.floor(Math.random()*(b-R))+R}function y(R){return parseInt(R,16)}function _(R){return R.map(T)}function T(R){var b=String(R).replace(/[^0-9a-f]/gi,"");return b.length<6&&(b=b[0]+b[0]+b[1]+b[1]+b[2]+b[2]),{r:y(b.substring(0,2)),g:y(b.substring(2,4)),b:y(b.substring(4,6))}}function w(R){var b=g(R,"origin",Object);return b.x=g(b,"x",Number),b.y=g(b,"y",Number),b}function P(R){R.width=document.documentElement.clientWidth,R.height=document.documentElement.clientHeight}function v(R){var b=R.getBoundingClientRect();R.width=b.width,R.height=b.height}function C(R){var b=document.createElement("canvas");return b.style.position="fixed",b.style.top="0px",b.style.left="0px",b.style.pointerEvents="none",b.style.zIndex=R,b}function L(R,b,te,re,_e,he,de,B,Y){R.save(),R.translate(b,te),R.rotate(he),R.scale(re,_e),R.arc(0,0,1,de,B,Y),R.restore()}function U(R){var b=R.angle*(Math.PI/180),te=R.spread*(Math.PI/180);return{x:R.x,y:R.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:R.startVelocity*.5+Math.random()*R.startVelocity,angle2D:-b+(.5*te-Math.random()*te),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:R.color,shape:R.shape,tick:0,totalTicks:R.ticks,decay:R.decay,drift:R.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:R.gravity*3,ovalScalar:.6,scalar:R.scalar,flat:R.flat}}function k(R,b){b.x+=Math.cos(b.angle2D)*b.velocity+b.drift,b.y+=Math.sin(b.angle2D)*b.velocity+b.gravity,b.velocity*=b.decay,b.flat?(b.wobble=0,b.wobbleX=b.x+10*b.scalar,b.wobbleY=b.y+10*b.scalar,b.tiltSin=0,b.tiltCos=0,b.random=1):(b.wobble+=b.wobbleSpeed,b.wobbleX=b.x+10*b.scalar*Math.cos(b.wobble),b.wobbleY=b.y+10*b.scalar*Math.sin(b.wobble),b.tiltAngle+=.1,b.tiltSin=Math.sin(b.tiltAngle),b.tiltCos=Math.cos(b.tiltAngle),b.random=Math.random()+2);var te=b.tick++/b.totalTicks,re=b.x+b.random*b.tiltCos,_e=b.y+b.random*b.tiltSin,he=b.wobbleX+b.random*b.tiltCos,de=b.wobbleY+b.random*b.tiltSin;if(R.fillStyle="rgba("+b.color.r+", "+b.color.g+", "+b.color.b+", "+(1-te)+")",R.beginPath(),a&&b.shape.type==="path"&&typeof b.shape.path=="string"&&Array.isArray(b.shape.matrix))R.fill(Z(b.shape.path,b.shape.matrix,b.x,b.y,Math.abs(he-re)*.1,Math.abs(de-_e)*.1,Math.PI/10*b.wobble));else if(b.shape.type==="bitmap"){var B=Math.PI/10*b.wobble,Y=Math.abs(he-re)*.1,oe=Math.abs(de-_e)*.1,Te=b.shape.bitmap.width*b.scalar,ae=b.shape.bitmap.height*b.scalar,Ne=new DOMMatrix([Math.cos(B)*Y,Math.sin(B)*Y,-Math.sin(B)*oe,Math.cos(B)*oe,b.x,b.y]);Ne.multiplySelf(new DOMMatrix(b.shape.matrix));var $e=R.createPattern(f.transform(b.shape.bitmap),"no-repeat");$e.setTransform(Ne),R.globalAlpha=1-te,R.fillStyle=$e,R.fillRect(b.x-Te/2,b.y-ae/2,Te,ae),R.globalAlpha=1}else if(b.shape==="circle")R.ellipse?R.ellipse(b.x,b.y,Math.abs(he-re)*b.ovalScalar,Math.abs(de-_e)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI):L(R,b.x,b.y,Math.abs(he-re)*b.ovalScalar,Math.abs(de-_e)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI);else if(b.shape==="star")for(var ye=Math.PI/2*3,Ve=4*b.scalar,be=8*b.scalar,ue=b.x,Ae=b.y,Ge=5,Xe=Math.PI/Ge;Ge--;)ue=b.x+Math.cos(ye)*be,Ae=b.y+Math.sin(ye)*be,R.lineTo(ue,Ae),ye+=Xe,ue=b.x+Math.cos(ye)*Ve,Ae=b.y+Math.sin(ye)*Ve,R.lineTo(ue,Ae),ye+=Xe;else R.moveTo(Math.floor(b.x),Math.floor(b.y)),R.lineTo(Math.floor(b.wobbleX),Math.floor(_e)),R.lineTo(Math.floor(he),Math.floor(de)),R.lineTo(Math.floor(re),Math.floor(b.wobbleY));return R.closePath(),R.fill(),b.tick<b.totalTicks}function W(R,b,te,re,_e){var he=b.slice(),de=R.getContext("2d"),B,Y,oe=c(function(Te){function ae(){B=Y=null,de.clearRect(0,0,re.width,re.height),f.clear(),_e(),Te()}function Ne(){i&&!(re.width===r.width&&re.height===r.height)&&(re.width=R.width=r.width,re.height=R.height=r.height),!re.width&&!re.height&&(te(R),re.width=R.width,re.height=R.height),de.clearRect(0,0,re.width,re.height),he=he.filter(function($e){return k(de,$e)}),he.length?B=h.frame(Ne):ae()}B=h.frame(Ne),Y=ae});return{addFettis:function(Te){return he=he.concat(Te),oe},canvas:R,promise:oe,reset:function(){B&&h.cancel(B),Y&&Y()}}}function I(R,b){var te=!R,re=!!g(b||{},"resize"),_e=!1,he=g(b,"disableForReducedMotion",Boolean),de=s&&!!g(b||{},"useWorker"),B=de?d():null,Y=te?P:v,oe=R&&B?!!R.__confetti_initialized:!1,Te=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ae;function Ne(ye,Ve,be){for(var ue=g(ye,"particleCount",u),Ae=g(ye,"angle",Number),Ge=g(ye,"spread",Number),Xe=g(ye,"startVelocity",Number),et=g(ye,"decay",Number),dt=g(ye,"gravity",Number),D=g(ye,"drift",Number),St=g(ye,"colors",_),at=g(ye,"ticks",Number),N=g(ye,"shapes"),S=g(ye,"scalar"),V=!!g(ye,"flat"),$=w(ye),Q=ue,ce=[],fe=R.width*$.x,ee=R.height*$.y;Q--;)ce.push(U({x:fe,y:ee,angle:Ae,spread:Ge,startVelocity:Xe,color:St[Q%St.length],shape:N[m(0,N.length)],ticks:at,decay:et,gravity:dt,drift:D,scalar:S,flat:V}));return ae?ae.addFettis(ce):(ae=W(R,ce,Y,Ve,be),ae.promise)}function $e(ye){var Ve=he||g(ye,"disableForReducedMotion",Boolean),be=g(ye,"zIndex",Number);if(Ve&&Te)return c(function(Xe){Xe()});te&&ae?R=ae.canvas:te&&!R&&(R=C(be),document.body.appendChild(R)),re&&!oe&&Y(R);var ue={width:R.width,height:R.height};B&&!oe&&B.init(R),oe=!0,B&&(R.__confetti_initialized=!0);function Ae(){if(B){var Xe={getBoundingClientRect:function(){if(!te)return R.getBoundingClientRect()}};Y(Xe),B.postMessage({resize:{width:Xe.width,height:Xe.height}});return}ue.width=ue.height=null}function Ge(){ae=null,re&&(_e=!1,e.removeEventListener("resize",Ae)),te&&R&&(document.body.contains(R)&&document.body.removeChild(R),R=null,oe=!1)}return re&&!_e&&(_e=!0,e.addEventListener("resize",Ae,!1)),B?B.fire(ye,ue,Ge):Ne(ye,ue,Ge)}return $e.reset=function(){B&&B.reset(),ae&&ae.reset()},$e}var q;function J(){return q||(q=I(null,{useWorker:!0,resize:!0})),q}function Z(R,b,te,re,_e,he,de){var B=new Path2D(R),Y=new Path2D;Y.addPath(B,new DOMMatrix(b));var oe=new Path2D;return oe.addPath(Y,new DOMMatrix([Math.cos(de)*_e,Math.sin(de)*_e,-Math.sin(de)*he,Math.cos(de)*he,te,re])),oe}function G(R){if(!a)throw new Error("path confetti are not supported in this browser");var b,te;typeof R=="string"?b=R:(b=R.path,te=R.matrix);var re=new Path2D(b),_e=document.createElement("canvas"),he=_e.getContext("2d");if(!te){for(var de=1e3,B=de,Y=de,oe=0,Te=0,ae,Ne,$e=0;$e<de;$e+=2)for(var ye=0;ye<de;ye+=2)he.isPointInPath(re,$e,ye,"nonzero")&&(B=Math.min(B,$e),Y=Math.min(Y,ye),oe=Math.max(oe,$e),Te=Math.max(Te,ye));ae=oe-B,Ne=Te-Y;var Ve=10,be=Math.min(Ve/ae,Ve/Ne);te=[be,0,0,be,-Math.round(ae/2+B)*be,-Math.round(Ne/2+Y)*be]}return{type:"path",path:b,matrix:te}}function z(R){var b,te=1,re="#000000",_e='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof R=="string"?b=R:(b=R.text,te="scalar"in R?R.scalar:te,_e="fontFamily"in R?R.fontFamily:_e,re="color"in R?R.color:re);var he=10*te,de=""+he+"px "+_e,B=new OffscreenCanvas(he,he),Y=B.getContext("2d");Y.font=de;var oe=Y.measureText(b),Te=Math.ceil(oe.actualBoundingBoxRight+oe.actualBoundingBoxLeft),ae=Math.ceil(oe.actualBoundingBoxAscent+oe.actualBoundingBoxDescent),Ne=2,$e=oe.actualBoundingBoxLeft+Ne,ye=oe.actualBoundingBoxAscent+Ne;Te+=Ne+Ne,ae+=Ne+Ne,B=new OffscreenCanvas(Te,ae),Y=B.getContext("2d"),Y.font=de,Y.fillStyle=re,Y.fillText(b,$e,ye);var Ve=1/te;return{type:"bitmap",bitmap:B.transferToImageBitmap(),matrix:[Ve,0,0,Ve,-Te*Ve/2,-ae*Ve/2]}}n.exports=function(){return J().apply(this,arguments)},n.exports.reset=function(){J().reset()},n.exports.create=I,n.exports.shapeFromPath=G,n.exports.shapeFromText=z})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Rh,!1);const Bi=Rh.exports;Rh.exports.create;const MC=[{id:"alphabet",label:"Alphabet & Lettres 🔤"},{id:"numbers",label:"Les Chiffres 1, 2, 3 🔢"},{id:"quiz",label:"Quiz Magique ❓"}],EC=[{char:"A",fr:"Avion",en:"Airplane",emoji:"✈️",color:"#ff7675"},{char:"B",fr:"Ballon",en:"Ball",emoji:"⚽",color:"#74b9ff"},{char:"C",fr:"Chat",en:"Cat",emoji:"🐱",color:"#ffeaa7"},{char:"D",fr:"Dauphin",en:"Dolphin",emoji:"🐬",color:"#55efc4"},{char:"E",fr:"Étoile",en:"Star",emoji:"⭐",color:"#fdcb6e"},{char:"F",fr:"Fleur",en:"Flower",emoji:"🌸",color:"#fab1a0"}],wC=[{num:1,fr:"Un",en:"One",emoji:"🧸",count:"1 doudou"},{num:2,fr:"Deux",en:"Two",emoji:"🍎🍎",count:"2 pommes"},{num:3,fr:"Trois",en:"Three",emoji:"⭐⭐⭐",count:"3 étoiles"},{num:4,fr:"Quatre",en:"Four",emoji:"🚗🚗🚗🚗",count:"4 voitures"},{num:5,fr:"Cinq",en:"Five",emoji:"🎈🎈🎈🎈🎈",count:"5 ballons"}];function TC({onTeacherSpeech:t,onClose:e}){const[n,i]=Be.useState("alphabet"),[r,s]=Be.useState(0);Be.useEffect(()=>{const l="Bienvenue dans ma classe d'école ! Que veux-tu apprendre aujourd'hui avec moi ?";t(l),Ze.speakBilingual(l,"Welcome to my classroom! What do you want to learn today with me?")},[]);const a=l=>{nt.playPop();const c=`${l.char} comme ${l.fr} !`;t(c),Ze.speakBilingual(c,`${l.char} for ${l.en}!`),Bi({particleCount:20,spread:40,origin:{y:.6}})},o=l=>{nt.playSuccess();const c=`Voici le chiffre ${l.num} ! ${l.fr} ! Compte avec moi : ${l.count} !`;t(c),Ze.speakBilingual(c,`Number ${l.num}! ${l.en}!`)};return A.jsxs("div",{className:"location-modal-card",children:[A.jsxs("div",{className:"location-modal-header school-theme",children:[A.jsxs("div",{className:"modal-title-box",children:[A.jsx("span",{className:"location-large-emoji",children:"🏫"}),A.jsxs("div",{children:[A.jsx("h2",{className:"modal-title",children:"L'École de Maîtresse Nia"}),A.jsx("p",{className:"modal-subtitle",children:"School Classroom • Lettres, Chiffres et Couleurs"})]})]}),A.jsx("button",{onClick:e,className:"close-modal-btn",children:"✖ Retour à la ville"})]}),A.jsx("div",{className:"location-tabs-bar",children:MC.map(l=>A.jsx("button",{onClick:()=>{nt.playPop(),i(l.id)},className:`location-tab-btn ${n===l.id?"active":""}`,children:l.label},l.id))}),A.jsxs("div",{className:"location-content-body",children:[n==="alphabet"&&A.jsxs("div",{className:"chalkboard-container",children:[A.jsx("h3",{className:"chalkboard-title",children:"Le Tableau Noir Magique 📝"}),A.jsx("div",{className:"chalkboard-grid",children:EC.map(l=>A.jsxs("button",{onClick:()=>a(l),className:"chalk-letter-btn",style:{borderColor:l.color},children:[A.jsx("span",{className:"chalk-char",style:{color:l.color},children:l.char}),A.jsx("span",{className:"chalk-emoji",children:l.emoji}),A.jsx("span",{className:"chalk-fr",children:l.fr}),A.jsxs("span",{className:"chalk-en",children:["(",l.en,")"]})]},l.char))})]}),n==="numbers"&&A.jsxs("div",{className:"numbers-showcase",children:[A.jsx("h3",{className:"section-title",children:"Apprenons à compter ensemble ! 🖐️"}),A.jsx("div",{className:"numbers-list",children:wC.map(l=>A.jsxs("button",{onClick:()=>o(l),className:"number-card-btn",children:[A.jsx("div",{className:"number-digit-circle",children:l.num}),A.jsxs("div",{className:"number-details",children:[A.jsxs("span",{className:"number-words",children:[l.fr," ",A.jsxs("small",{children:["(",l.en,")"]})]}),A.jsx("span",{className:"number-emojis",children:l.emoji})]})]},l.num))})]}),n==="quiz"&&A.jsxs("div",{className:"quiz-arena",children:[A.jsxs("div",{className:"quiz-prompt-card",children:[A.jsx("span",{className:"quiz-tag",children:"Question de la maîtresse :"}),A.jsx("h4",{children:"Où est le CHAT ? 🐱"}),A.jsx("p",{children:"(Where is the CAT?)"})]}),A.jsxs("div",{className:"quiz-options",children:[A.jsx("button",{onClick:()=>{nt.playBloop(),Ze.speakFrench("Non, c'est l'avion ! Cherchons le petit chat !")},className:"quiz-opt-btn",children:"✈️ L'Avion"}),A.jsx("button",{onClick:()=>{nt.playSuccess(),Bi({particleCount:50,spread:60}),s(l=>l+1),Ze.speakFrench("Bravo mon champion ! C'est le petit chat ! Miaou !")},className:"quiz-opt-btn correct",children:"🐱 Le Chat !"}),A.jsx("button",{onClick:()=>{nt.playBloop(),Ze.speakFrench("Non, c'est le ballon ! Essaie encore !")},className:"quiz-opt-btn",children:"⚽ Le Ballon"})]}),r>0&&A.jsxs("div",{className:"score-ribbon",children:[A.jsx(yy,{size:24,color:"#ffd32a"})," Bonnes réponses : ",r," !"]})]})]})]})}const AC=[{id:"apple",nameFr:"Pomme",nameEn:"Apple",emoji:"🍎",price:1},{id:"banana",nameFr:"Banane",nameEn:"Banana",emoji:"🍌",price:1},{id:"strawberry",nameFr:"Fraise",nameEn:"Strawberry",emoji:"🍓",price:1},{id:"carrot",nameFr:"Carotte",nameEn:"Carrot",emoji:"🥕",price:1},{id:"bread",nameFr:"Baguette de Pain",nameEn:"Bread",emoji:"🥖",price:2},{id:"milk",nameFr:"Bouteille de Lait",nameEn:"Milk",emoji:"🥛",price:2},{id:"cheese",nameFr:"Fromage",nameEn:"Cheese",emoji:"🧀",price:2},{id:"juice",nameFr:"Jus d'orange",nameEn:"Orange Juice",emoji:"🧃",price:2}];function CC({onTeacherSpeech:t,onClose:e,onRewardStar:n}){const[i,r]=Be.useState([]),[s,a]=Be.useState(!1);Be.useEffect(()=>{const f="Bienvenue à l'épicerie ! Prends ton caddie et choisissons de bons aliments à manger !";t(f),Ze.speakBilingual(f,"Welcome to the grocery store! Let's fill the cart with good food!")},[]);const o=f=>{nt.playPop();const h=[...i,f];r(h);const d=`Miam ! Tu as ajouté ${f.nameFr} dans le caddie !`;t(d),Ze.speakBilingual(d,`Added ${f.nameEn}!`)},l=()=>{if(i.length===0){Ze.speakFrench("Ton caddie est vide ! Ajoute d'abord des fruits ou des légumes !");return}nt.playSuccess(),a(!0),Bi({particleCount:70,spread:60}),n&&n();const f=`Bip ! Merci petit client ! Tu as acheté ${i.length} délicieuses choses !`;t(f),Ze.speakBilingual(f,`Beep! Thank you little shopper! You bought ${i.length} items!`)},c=()=>{r([]),a(!1),Ze.speakFrench("C'est reparti pour de nouvelles courses !")};return A.jsxs("div",{className:"location-modal-card",children:[A.jsxs("div",{className:"location-modal-header grocery-theme",children:[A.jsxs("div",{className:"modal-title-box",children:[A.jsx("span",{className:"location-large-emoji",children:"🛒"}),A.jsxs("div",{children:[A.jsx("h2",{className:"modal-title",children:"L'Épicerie & Le Marché"}),A.jsx("p",{className:"modal-subtitle",children:"Grocery Shopping • Découverte des Aliments"})]})]}),A.jsx("button",{onClick:e,className:"close-modal-btn",children:"✖ Retour à la ville"})]}),A.jsxs("div",{className:"grocery-arena",children:[A.jsxs("div",{className:"grocery-shelves",children:[A.jsx("h3",{className:"section-title",children:"Les Rayons du Magasin 🏪"}),A.jsx("p",{className:"section-hint",children:"Touche un aliment pour le mettre dans ton caddie :"}),A.jsx("div",{className:"shelves-grid",children:AC.map(f=>A.jsxs("button",{onClick:()=>o(f),className:"market-item-btn",children:[A.jsx("span",{className:"market-emoji",children:f.emoji}),A.jsx("span",{className:"market-name-fr",children:f.nameFr}),A.jsxs("span",{className:"market-name-en",children:["(",f.nameEn,")"]}),A.jsx("span",{className:"market-add-tag",children:"+ Ajouter"})]},f.id))})]}),A.jsx("div",{className:"cart-checkout-panel",children:A.jsxs("div",{className:"cart-basket-card",children:[A.jsxs("div",{className:"cart-header",children:[A.jsx(Py,{size:26,className:"cart-icon"}),A.jsxs("h4",{children:["Mon Caddie (",i.length," articles)"]})]}),A.jsx("div",{className:"cart-items-box",children:i.length===0?A.jsx("p",{className:"cart-empty-text",children:"Ton caddie attend de bons fruits et légumes ! 🧺"}):A.jsx("div",{className:"cart-emojis-cluster",children:i.map((f,h)=>A.jsx("span",{className:"in-cart-emoji animate-pop",children:f.emoji},h))})}),s?A.jsxs("div",{className:"paid-success-banner animate-pop",children:[A.jsx(wy,{size:36,color:"#00b894"}),A.jsx("h5",{children:"🎉 Courses payées avec succès !"}),A.jsxs("button",{onClick:c,className:"action-button secondary",children:[A.jsx(gc,{size:18})," Vider le caddie"]})]}):A.jsxs("button",{onClick:l,className:`checkout-btn ${i.length>0?"ready":""}`,children:[A.jsx(Ty,{size:22})," Payer à la Caisse (Bip !) 💳"]})]})})]})]})}const bC=[{id:"fashion",label:"Magasin de Mode 👗",icon:Ry},{id:"toys",label:"Magasin de Jouets 🧸",icon:by}],RC=[{id:"hat",nameFr:"Le Chapeau de Soleil",nameEn:"Sun Hat",emoji:"👒",color:"#fdcb6e"},{id:"glasses",nameFr:"Les Lunettes de Soleil",nameEn:"Sunglasses",emoji:"🕶️",color:"#2d3436"},{id:"shoes",nameFr:"Les Baskets de Course",nameEn:"Sneakers",emoji:"👟",color:"#74b9ff"},{id:"crown",nameFr:"La Couronne Dorée",nameEn:"Golden Crown",emoji:"👑",color:"#ffd32a"},{id:"bag",nameFr:"Le Sac à Main Chic",nameEn:"Handbag",emoji:"👜",color:"#e056fd"},{id:"scarf",nameFr:"L'Écharpe Douce",nameEn:"Warm Scarf",emoji:"🧣",color:"#ff7675"}],PC=[{id:"bear",nameFr:"Le Nounours Câlin",nameEn:"Teddy Bear",emoji:"🧸",sound:"Câlin tout doux !"},{id:"train",nameFr:"Le Petit Train",nameEn:"Toy Train",emoji:"🚂",sound:"Tchou-tchou !"},{id:"robot",nameFr:"Le Robot Danseur",nameEn:"Dancing Robot",emoji:"🤖",sound:"Bip boup bip !"},{id:"ball",nameFr:"Le Ballon Rebondissant",nameEn:"Bouncy Ball",emoji:"⚽",sound:"Boing boing !"},{id:"drum",nameFr:"Le Tambour de Musique",nameEn:"Toy Drum",emoji:"🥁",sound:"Boum boum boum !"},{id:"rocket",nameFr:"La Fusée Spatiale",nameEn:"Space Rocket",emoji:"🚀",sound:"Décollage 3, 2, 1 !"}];function NC({onTeacherSpeech:t,onClose:e}){const[n,i]=Be.useState("fashion"),[r,s]=Be.useState(null);Be.useEffect(()=>{const l="Bienvenue dans le grand centre commercial ! Faisons les boutiques ensemble !";t(l),Ze.speakBilingual(l,"Welcome to the big shopping mall! Let's go shopping together!")},[]);const a=l=>{nt.playPop(),s(l),Bi({particleCount:30,spread:45});const c=`Oh, regarde comme c'est élégant ! ${l.nameFr} ! Tu as beaucoup de goût !`;t(c),Ze.speakBilingual(c,`So stylish! ${l.nameEn}!`)},o=l=>{nt.playSuccess(),Bi({particleCount:35,spread:50});const c=`Youpi ! ${l.nameFr} ! ${l.sound}`;t(c),Ze.speakBilingual(c,`${l.nameEn}! ${l.sound}`)};return A.jsxs("div",{className:"location-modal-card",children:[A.jsxs("div",{className:"location-modal-header mall-theme",children:[A.jsxs("div",{className:"modal-title-box",children:[A.jsx("span",{className:"location-large-emoji",children:"🛍️"}),A.jsxs("div",{children:[A.jsx("h2",{className:"modal-title",children:"Le Centre Commercial"}),A.jsx("p",{className:"modal-subtitle",children:"Shopping Mall • Mode, Vêtements et Magasin de Jouets"})]})]}),A.jsx("button",{onClick:e,className:"close-modal-btn",children:"✖ Retour à la ville"})]}),A.jsx("div",{className:"location-tabs-bar",children:bC.map(l=>A.jsx("button",{onClick:()=>{nt.playPop(),i(l.id)},className:`location-tab-btn ${n===l.id?"active":""}`,children:l.label},l.id))}),A.jsxs("div",{className:"location-content-body",children:[n==="fashion"&&A.jsxs("div",{className:"fashion-fitting-room",children:[A.jsx("div",{className:"fitting-display",children:A.jsxs("div",{className:"avatar-stand",children:[A.jsx("img",{src:oh,alt:"Maîtresse Nia",className:"fitting-pixar-avatar"}),r&&A.jsxs("div",{className:"worn-accessory-badge animate-bounce-soft",children:[A.jsx("span",{className:"accessory-emoji",children:r.emoji}),A.jsx("span",{className:"accessory-name",children:r.nameFr})]})]})}),A.jsxs("div",{className:"wardrobe-items",children:[A.jsx("h3",{className:"section-title",children:"Choisis un accessoire pour la poupée Nia :"}),A.jsx("div",{className:"wardrobe-grid",children:RC.map(l=>A.jsxs("button",{onClick:()=>a(l),className:"wardrobe-btn",children:[A.jsx("span",{className:"wardrobe-emoji",children:l.emoji}),A.jsx("span",{className:"wardrobe-label-fr",children:l.nameFr}),A.jsxs("span",{className:"wardrobe-label-en",children:["(",l.nameEn,")"]})]},l.id))})]})]}),n==="toys"&&A.jsxs("div",{className:"toy-store-arena",children:[A.jsx("h3",{className:"section-title",children:"Le Rayon des Merveilles et Jouets 🧸"}),A.jsx("p",{className:"section-hint",children:"Touche un jouet pour jouer avec son son et l'écouter :"}),A.jsx("div",{className:"toys-grid",children:PC.map(l=>A.jsxs("button",{onClick:()=>o(l),className:"toy-card-btn",children:[A.jsx("span",{className:"toy-emoji",children:l.emoji}),A.jsx("span",{className:"toy-title-fr",children:l.nameFr}),A.jsxs("span",{className:"toy-title-en",children:["(",l.nameEn,")"]}),A.jsxs("span",{className:"toy-sound-pill",children:["🎵 ",l.sound]})]},l.id))})]})]})]})}const LC=[{id:"tomato",nameFr:"Sauce Tomate",nameEn:"Tomato Sauce",emoji:"🍅"},{id:"cheese",nameFr:"Fromage Fondu",nameEn:"Melted Cheese",emoji:"🧀"},{id:"mushroom",nameFr:"Champignon",nameEn:"Mushroom",emoji:"🍄"},{id:"olive",nameFr:"Olives",nameEn:"Olives",emoji:"🫒"},{id:"basil",nameFr:"Feuille de Basilic",nameEn:"Basil Leaf",emoji:"🌿"}];function DC({onTeacherSpeech:t,onClose:e,onRewardStar:n}){const[i,r]=Be.useState("pizza"),[s,a]=Be.useState([]),[o,l]=Be.useState(!1);Be.useEffect(()=>{const d="Bienvenue dans mon restaurant ! Enfile ta toque de chef et préparons un bon festin !";t(d),Ze.speakBilingual(d,"Welcome to my restaurant! Let's cook a delicious meal!")},[]);const c=d=>{if(o)return;nt.playPop(),nt.playCookingSizzle();const p=[...s,d];a(p);const x=`Miam ! Tu as ajouté ${d.nameFr} sur la pizza !`;t(x),Ze.speakBilingual(x,`Added ${d.nameEn}!`)},f=()=>{if(s.length===0){Ze.speakFrench("Mets d'abord de bons ingrédients sur la pâte !");return}nt.playCookingSizzle(),setTimeout(()=>{l(!0),nt.playSuccess(),Bi({particleCount:70,spread:60}),n&&n();const d="Ding ! La pizza est dorée et toute chaude ! C'est un régal, bravo chef !";t(d),Ze.speakBilingual(d,"Ding! The pizza is golden and hot! Delicious!")},1200)},h=()=>{a([]),l(!1),Ze.speakFrench("Préparons une nouvelle pizza magique !")};return A.jsxs("div",{className:"location-modal-card",children:[A.jsxs("div",{className:"location-modal-header restaurant-theme",children:[A.jsxs("div",{className:"modal-title-box",children:[A.jsx("span",{className:"location-large-emoji",children:"🍽️"}),A.jsxs("div",{children:[A.jsx("h2",{className:"modal-title",children:"Le Restaurant des Gourmands"}),A.jsx("p",{className:"modal-subtitle",children:"Restaurant • Cuisine Créative pour Petit Chef"})]})]}),A.jsx("button",{onClick:e,className:"close-modal-btn",children:"✖ Retour à la ville"})]}),A.jsxs("div",{className:"restaurant-arena",children:[A.jsxs("div",{className:"kitchen-ingredients-shelf",children:[A.jsx("h3",{className:"section-title",children:"Choisis les garnitures de ta pizza :"}),A.jsx("div",{className:"toppings-grid",children:LC.map(d=>A.jsxs("button",{onClick:()=>c(d),className:"topping-btn",disabled:o,children:[A.jsx("span",{className:"topping-emoji",children:d.emoji}),A.jsx("span",{className:"topping-name-fr",children:d.nameFr}),A.jsxs("span",{className:"topping-name-en",children:["(",d.nameEn,")"]})]},d.id))})]}),A.jsxs("div",{className:"pizza-oven-section",children:[A.jsx("div",{className:`pizza-dough-board ${o?"is-golden-baked":""}`,children:A.jsx("div",{className:"pizza-base",children:s.length===0?A.jsx("span",{className:"empty-pizza-text",children:"Pâte à pizza prête ! Dépose des ingrédients ! 🍕"}):A.jsx("div",{className:"pizza-scattered-toppings",children:s.map((d,p)=>A.jsx("span",{className:"topping-placed animate-pop",style:{transform:`rotate(${p*45}deg) scale(${o?1.1:1})`},children:d.emoji},p))})})}),o?A.jsxs("div",{className:"baked-banner animate-pop",children:[A.jsx(Tv,{size:36,color:"#00b894"}),A.jsx("h4",{children:"🎉 Miam miam ! Pizza prête à déguster !"}),A.jsxs("button",{onClick:h,className:"action-button secondary",children:[A.jsx(gc,{size:18})," Cuisiner une autre pizza"]})]}):A.jsxs("button",{onClick:f,className:`bake-button ${s.length>0?"ready":""}`,children:[A.jsx(Cy,{size:24})," Cuire la Pizza au Four ! 🔥"]})]})]})]})}function IC({onTeacherSpeech:t,onClose:e,onRewardStar:n}){const[i,r]=Be.useState(5),[s,a]=Be.useState(!1),[o,l]=Be.useState(!1);Be.useEffect(()=>{c()},[]);const c=()=>{r(5),l(!1),a(!1);const h="Pin-pon pin-pon ! Alerte pompier ! Il y a un feu ! Arrose-le d'eau pour l'éteindre !";t(h),Ze.speakBilingual(h,"Firefighter alert! Put water on the fire to extinguish it!")},f=()=>{if(i<=0)return;nt.playWaterSplash(),a(!0),setTimeout(()=>a(!1),300);const h=i-1;if(r(h),h<=0){l(!0),nt.playSuccess(),Bi({particleCount:80,spread:70}),n&&n();const d="Bravo mon petit pompier héroïque ! Le feu est complètement éteint grâce à l'eau !";t(d),Ze.speakBilingual(d,"Great job little hero! The fire is completely extinguished with water!")}else Ze.speakFrench("Pshhhh ! Encore un coup d'eau !")};return A.jsxs("div",{className:"location-modal-card",children:[A.jsxs("div",{className:"location-modal-header fire-theme",children:[A.jsxs("div",{className:"modal-title-box",children:[A.jsx("span",{className:"location-large-emoji",children:"🚒"}),A.jsxs("div",{children:[A.jsx("h2",{className:"modal-title",children:"La Caserne des Pompiers"}),A.jsx("p",{className:"modal-subtitle",children:"Fire Station • Mission Sauvetage et Eau Magique"})]})]}),A.jsx("button",{onClick:e,className:"close-modal-btn",children:"✖ Retour à la ville"})]}),A.jsxs("div",{className:"fire-mission-arena",children:[A.jsxs("div",{className:"fire-display-card",children:[o?A.jsxs("div",{className:"extinguished-box animate-pop",children:[A.jsx("span",{className:"rainbow-peace",children:"🌈 🌸 🐰 🌿"}),A.jsx("h3",{children:"Hourra ! La ville est sauvée ! 👏"}),A.jsx("p",{children:"Tu es le meilleur pompier du monde !"}),A.jsxs("button",{onClick:c,className:"action-button primary",children:[A.jsx(gc,{size:20})," Nouvelle mission pompier"]})]}):A.jsxs("div",{className:"fire-target-box",children:[A.jsx("div",{className:"giant-flame animate-flicker",style:{transform:`scale(${.6+i*.14})`},children:"🔥"}),A.jsx("p",{className:"logs-under",children:"🪵🪵🪵"}),A.jsx("div",{className:"fire-meter-wrap",children:A.jsx("div",{className:"fire-meter-fill",style:{width:`${i/5*100}%`}})}),A.jsx("p",{className:"mission-instruction",children:"Appuie fort sur la lance à eau bleue ! 💦"})]}),s&&A.jsxs("div",{className:"water-spray-particles",children:[A.jsx("span",{className:"spray-drop p1",children:"💧"}),A.jsx("span",{className:"spray-drop p2",children:"💦"}),A.jsx("span",{className:"spray-drop p3",children:"💧"}),A.jsx("span",{className:"spray-drop p4",children:"💦"})]})]}),!o&&A.jsx("div",{className:"water-nozzle-control",children:A.jsxs("button",{onClick:f,className:`giant-spray-btn ${s?"active-spray":""}`,children:[A.jsx(Ay,{size:52}),A.jsxs("div",{children:[A.jsx("span",{className:"spray-title",children:"JETER DE L'EAU ! 💦"}),A.jsx("span",{className:"spray-sub",children:"Pshhhhh ! (Put Water On Fire)"})]})]})})]})]})}const ig=[{id:"red",nameFr:"Voiture Rouge",nameEn:"Red Car",color:"#ff4757",hex:"#ff4757"},{id:"blue",nameFr:"Voiture Bleue",nameEn:"Blue Car",color:"#2ed573",hex:"#1e90ff"},{id:"yellow",nameFr:"Voiture Jaune",nameEn:"Yellow Car",color:"#ffa502",hex:"#ffa502"},{id:"green",nameFr:"Voiture Verte",nameEn:"Green Car",color:"#2ed573",hex:"#2ed573"}];function UC({onTeacherPrompt:t}){const[e,n]=Be.useState(ig[0]),[i,r]=Be.useState(50),[s,a]=Be.useState(0),[o,l]=Be.useState("green"),[c,f]=Be.useState(!1);Be.useEffect(()=>{const u="Bienvenue sur la route ! Choisis ta jolie voiture et fais Tut-tut !";t(u),Ze.speakBilingual(u,"Welcome to the road! Pick your cute car and honk beep beep!");const m=setInterval(()=>{l(y=>{const _=y==="green"?"red":"green";if(_==="red"){const T="Feu ROUGE ! Arrête-toi comme un grand !";t(T),Ze.speakBilingual(T,"Red light! Stop!")}else{const T="Feu VERT ! Tu peux rouler ! Vroum vroum !";t(T),Ze.speakBilingual(T,"Green light! Go! Vroom vroom!")}return _})},7500);return()=>clearInterval(m)},[]);const h=()=>{nt.playEngineRev(),r(u=>Math.max(20,u-30)),M()},d=()=>{nt.playEngineRev(),r(u=>Math.min(80,u+30)),M()},p=()=>{nt.playCarHorn();const u="Tut-tut ! La voiture klaxonne !";t(u),Ze.speakFrench(u)},x=()=>{if(o==="red"){nt.playCarHorn();const u="Attention, le feu est ROUGE ! Il faut attendre le VERT !";t(u),Ze.speakBilingual(u,"Wait, the light is RED! Wait for GREEN!");return}nt.playEngineRev(),f(!0),setTimeout(()=>f(!1),800),M()},M=()=>{nt.playPop();const u=s+1;if(a(u),u%3===0){nt.playSuccess(),Bi({particleCount:40,spread:50,origin:{y:.7}});const m=`Super pilote ! Tu as gagné ${u} étoiles !`;t(m),Ze.speakFrench(m)}},g=u=>{n(u),nt.playPop();const m=`Jolie ${u.nameFr} ! En route !`;t(m),Ze.speakBilingual(m,`Pretty ${u.nameEn}! Let's roll!`)};return A.jsxs("div",{className:"game-card driving-stage",children:[A.jsxs("div",{className:"game-header",children:[A.jsxs("h2",{className:"game-title",children:[A.jsx(Ey,{className:"game-icon"})," La Petite Voiture en Ville 🚗"]}),A.jsxs("div",{className:"score-badge",children:[A.jsx(ah,{className:"star-icon",fill:"#ffb703",color:"#ffb703"}),A.jsxs("span",{children:["Étoiles : ",s]})]})]}),A.jsxs("div",{className:"car-color-selector",children:[A.jsx("span",{className:"selector-title",children:"Choisis ta couleur :"}),A.jsx("div",{className:"car-palette",children:ig.map(u=>A.jsx("button",{onClick:()=>g(u),className:`car-color-btn ${e.id===u.id?"active":""}`,style:{backgroundColor:u.hex},children:"🚗"},u.id))})]}),A.jsxs("div",{className:"road-container",children:[A.jsxs("div",{className:"traffic-light-post",children:[A.jsx("div",{className:`light-bulb red ${o==="red"?"on":""}`}),A.jsx("div",{className:`light-bulb green ${o==="green"?"on":""}`}),A.jsx("span",{className:"light-label",children:o==="red"?"STOP 🛑":"PARTEZ 🟢"})]}),A.jsxs("div",{className:`road-track ${c?"driving-fast":""}`,children:[A.jsx("div",{className:"road-line"}),A.jsx("div",{className:"road-side side-left",children:"🌳 🏠 🌳"}),A.jsx("div",{className:"road-side side-right",children:"🌻 🏡 🌳"}),A.jsx("div",{className:"road-star",style:{left:`${i}%`},onClick:M,children:"⭐"}),A.jsx("div",{className:"car-player",style:{left:`${i}%`,transition:"left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"},children:A.jsxs("svg",{viewBox:"0 0 120 70",className:"car-svg",children:[A.jsx("rect",{x:"15",y:"25",width:"90",height:"28",rx:"14",fill:e.hex}),A.jsx("path",{d:"M 32 25 L 45 10 L 78 10 L 92 25 Z",fill:e.hex}),A.jsx("path",{d:"M 46 13 L 56 13 L 56 24 L 37 24 Z",fill:"#E0F7FA"}),A.jsx("path",{d:"M 62 13 L 75 13 L 86 24 L 62 24 Z",fill:"#E0F7FA"}),A.jsx("circle",{cx:"36",cy:"54",r:"12",fill:"#2d3436"}),A.jsx("circle",{cx:"36",cy:"54",r:"5",fill:"#dfe6e9"}),A.jsx("circle",{cx:"84",cy:"54",r:"12",fill:"#2d3436"}),A.jsx("circle",{cx:"84",cy:"54",r:"5",fill:"#dfe6e9"}),A.jsx("circle",{cx:"103",cy:"38",r:"4",fill:"#FFEAA7"}),A.jsx("path",{d:"M 98 44 Q 103 48 103 43",stroke:"#FFFFFF",strokeWidth:"2",fill:"none"})]})})]})]}),A.jsxs("div",{className:"car-controls",children:[A.jsx("button",{onClick:h,className:"control-btn nav-btn",children:"⬅️ À Gauche !"}),A.jsx("button",{onClick:p,className:"control-btn horn-btn",children:"📢 TUT-TUT !"}),A.jsx("button",{onClick:x,className:"control-btn gas-btn",children:"🚀 Vroum ! Rouler !"}),A.jsx("button",{onClick:d,className:"control-btn nav-btn",children:"À Droite ! ➡️"})]})]})}const nl=[{targetColor:"red",labelFr:"le cercle ROUGE",labelEn:"the RED circle",correctId:"red-circle",items:[{id:"red-circle",shape:"circle",color:"#ff4757",labelFr:"Cercle Rouge",labelEn:"Red Circle"},{id:"blue-square",shape:"square",color:"#1e90ff",labelFr:"Carré Bleu",labelEn:"Blue Square"},{id:"yellow-triangle",shape:"triangle",color:"#ffa502",labelFr:"Triangle Jaune",labelEn:"Yellow Triangle"}]},{targetColor:"blue",labelFr:"l'étoile BLEUE",labelEn:"the BLUE star",correctId:"blue-star",items:[{id:"yellow-sun",shape:"circle",color:"#ffa502",labelFr:"Cercle Jaune",labelEn:"Yellow Circle"},{id:"blue-star",shape:"star",color:"#1e90ff",labelFr:"Étoile Bleue",labelEn:"Blue Star"},{id:"green-square",shape:"square",color:"#2ed573",labelFr:"Carré Vert",labelEn:"Green Square"}]},{targetColor:"yellow",labelFr:"le carré JAUNE",labelEn:"the YELLOW square",correctId:"yellow-sq",items:[{id:"green-circle",shape:"circle",color:"#2ed573",labelFr:"Cercle Vert",labelEn:"Green Circle"},{id:"red-heart",shape:"heart",color:"#ff4757",labelFr:"Cœur Rouge",labelEn:"Red Heart"},{id:"yellow-sq",shape:"square",color:"#ffa502",labelFr:"Carré Jaune",labelEn:"Yellow Square"}]},{targetColor:"green",labelFr:"le cœur VERT",labelEn:"the GREEN heart",correctId:"green-heart",items:[{id:"green-heart",shape:"heart",color:"#2ed573",labelFr:"Cœur Vert",labelEn:"Green Heart"},{id:"blue-circle",shape:"circle",color:"#1e90ff",labelFr:"Cercle Bleu",labelEn:"Blue Circle"},{id:"red-star",shape:"star",color:"#ff4757",labelFr:"Étoile Rouge",labelEn:"Red Star"}]}];function FC({onTeacherPrompt:t}){const[e,n]=Be.useState(0),[i,r]=Be.useState(!1),s=nl[e%nl.length];Be.useEffect(()=>{a()},[e]);const a=()=>{r(!1);const f=nl[e%nl.length],h=`Trouve et touche : ${f.labelFr} !`;t(h),Ze.speakBilingual(h,`Find and tap: ${f.labelEn}!`)},o=f=>{if(f.id===s.correctId){nt.playSuccess(),Bi({particleCount:60,spread:60,origin:{y:.6}}),r(!0);const h=`Bravo champion ! C'est exactement ${f.labelFr} ! Tu es très fort !`;t(h),Ze.speakBilingual(h,`Great job champion! That's ${f.labelEn}!`)}else{nt.playBloop();const h=`Presque ! Regarde bien, cherchons ${s.labelFr} ! Essaie encore !`;t(h),Ze.speakFrench(h)}},l=()=>{n(f=>f+1)},c=(f,h)=>{switch(f){case"circle":return A.jsx("div",{className:"shape-circle",style:{backgroundColor:h}});case"square":return A.jsx("div",{className:"shape-square",style:{backgroundColor:h}});case"star":return A.jsx("span",{className:"shape-star",style:{color:h},children:"★"});case"heart":return A.jsx("span",{className:"shape-heart",style:{color:h},children:"♥"});default:return A.jsx("div",{className:"shape-circle",style:{backgroundColor:h}})}};return A.jsxs("div",{className:"game-card sorting-stage",children:[A.jsxs("div",{className:"game-header",children:[A.jsxs("h2",{className:"game-title",children:[A.jsx(My,{className:"game-icon"})," Résolution & Couleurs Faciles 🧩"]}),A.jsxs("button",{onClick:a,className:"action-button secondary",children:[A.jsx(gc,{size:22})," Répéter la consigne"]})]}),A.jsxs("div",{className:"sorting-arena",children:[A.jsxs("div",{className:"challenge-prompt-card",children:[A.jsx("span",{className:"prompt-badge",children:"Consigne de la maîtresse :"}),A.jsxs("p",{className:"prompt-text",children:["Où se trouve ",A.jsx("strong",{children:s.labelFr})," ?"]}),A.jsxs("span",{className:"prompt-english",children:["(",s.labelEn,")"]})]}),A.jsx("div",{className:"shapes-grid",children:s.items.map(f=>A.jsxs("button",{onClick:()=>o(f),className:"shape-button",children:[A.jsx("div",{className:"shape-preview",children:c(f.shape,f.color)}),A.jsx("span",{className:"shape-label-fr",children:f.labelFr}),A.jsx("span",{className:"shape-label-en",children:f.labelEn})]},f.id))}),i&&A.jsxs("div",{className:"level-complete-card",children:[A.jsx(Tv,{size:44,className:"win-icon"}),A.jsx("h3",{children:"🎉 Bravo ! C'est la bonne réponse !"}),A.jsx("button",{onClick:l,className:"action-button primary large",children:"Jeu suivant ! ➡️"})]})]})]})}function OC(){const[t,e]=Be.useState("world"),[n,i]=Be.useState(3),[r,s]=Be.useState("Bonjour mon petit trésor ! Je suis Maîtresse Nia ! Viens explorer la ville avec moi !");Be.useEffect(()=>{Ze.speakBilingual("Bonjour mon petit trésor ! Je suis Maîtresse Nia ! Viens explorer la ville magique avec moi ! Où veux-tu aller ?","Hello little treasure! I am Teacher Nia! Come explore the magical town with me!")},[]);const a=f=>{nt.playSuccess(),e(f.id);const h=`Nous arrivons à ${f.nameFr} ! ${f.description}`;s(h),Ze.speakBilingual(h,`Welcome to the ${f.nameEn}!`)},o=()=>{nt.playPop(),e("world");const f="De retour dans la ville ! Balade-toi et choisis un nouvel endroit magique !";s(f),Ze.speakFrench(f)},l=()=>{i(f=>f+1)},c=()=>{Ze.speakFrench(r)};return A.jsxs("div",{className:"pixar-world-app",children:[A.jsxs("header",{className:"main-navbar",children:[A.jsxs("div",{className:"nav-brand-section",children:[A.jsx("span",{className:"brand-logo-icon animate-bounce-soft",children:"🌍"}),A.jsxs("div",{className:"brand-text-wrap",children:[A.jsx("h1",{className:"brand-heading",children:"Le Monde de Maîtresse Nia 🌟"}),A.jsx("p",{className:"brand-subheading",children:"Aventure 3D interactive bilingue (Français & Anglais)"})]})]}),A.jsxs("div",{className:"header-stars-pill",children:[A.jsx(ah,{size:24,fill:"#ffd32a",color:"#ffa502"}),A.jsx("span",{className:"stars-number",children:n})]}),t!=="world"&&A.jsx("button",{onClick:o,className:"return-world-nav-btn",children:"🌍 Revenir à la Ville 3D"})]}),A.jsxs("main",{className:"stage-area",children:[t==="world"&&A.jsx("div",{className:"world-experience-container",children:A.jsx(yC,{onSelectLocation:a,onTeacherSpeech:s,starsCount:n,onCollectStar:l})}),t==="school"&&A.jsx(TC,{onTeacherSpeech:s,onClose:o,onRewardStar:l}),t==="grocery"&&A.jsx(CC,{onTeacherSpeech:s,onClose:o,onRewardStar:l}),t==="mall"&&A.jsx(NC,{onTeacherSpeech:s,onClose:o,onRewardStar:l}),t==="restaurant"&&A.jsx(DC,{onTeacherSpeech:s,onClose:o,onRewardStar:l}),t==="firefighter"&&A.jsx(IC,{onTeacherSpeech:s,onClose:o,onRewardStar:l}),t==="driving"&&A.jsxs("div",{className:"location-modal-card",children:[A.jsxs("div",{className:"location-modal-header fire-theme",children:[A.jsx("h2",{children:"🚗 La Voiture en Ville"}),A.jsx("button",{onClick:o,className:"close-modal-btn",children:"✖ Retour"})]}),A.jsx(UC,{onTeacherPrompt:s})]}),t==="sorting"&&A.jsxs("div",{className:"location-modal-card",children:[A.jsxs("div",{className:"location-modal-header mall-theme",children:[A.jsx("h2",{children:"🧩 Les Énigmes Faciles"}),A.jsx("button",{onClick:o,className:"close-modal-btn",children:"✖ Retour"})]}),A.jsx(FC,{onTeacherPrompt:s})]})]}),A.jsxs("nav",{className:"bottom-quick-bar",children:[A.jsxs("button",{onClick:()=>{nt.playPop(),e("world")},className:`quick-bar-btn ${t==="world"?"active":""}`,children:[A.jsx("span",{className:"q-emoji",children:"🌍"}),A.jsx("span",{className:"q-label",children:"Ville 3D"})]}),A.jsxs("button",{onClick:()=>a({id:"school",nameFr:"L'École",nameEn:"School",description:"Lettres et chiffres !"}),className:`quick-bar-btn ${t==="school"?"active":""}`,children:[A.jsx("span",{className:"q-emoji",children:"🏫"}),A.jsx("span",{className:"q-label",children:"École"})]}),A.jsxs("button",{onClick:()=>a({id:"grocery",nameFr:"L'Épicerie",nameEn:"Grocery Store",description:"Faisons les courses !"}),className:`quick-bar-btn ${t==="grocery"?"active":""}`,children:[A.jsx("span",{className:"q-emoji",children:"🛒"}),A.jsx("span",{className:"q-label",children:"Épicerie"})]}),A.jsxs("button",{onClick:()=>a({id:"mall",nameFr:"Le Centre Commercial",nameEn:"Mall",description:"Jouets et vêtements !"}),className:`quick-bar-btn ${t==="mall"?"active":""}`,children:[A.jsx("span",{className:"q-emoji",children:"🛍️"}),A.jsx("span",{className:"q-label",children:"Magasins"})]}),A.jsxs("button",{onClick:()=>a({id:"restaurant",nameFr:"Le Restaurant",nameEn:"Restaurant",description:"Cuisinons ensemble !"}),className:`quick-bar-btn ${t==="restaurant"?"active":""}`,children:[A.jsx("span",{className:"q-emoji",children:"🍽️"}),A.jsx("span",{className:"q-label",children:"Restaurant"})]}),A.jsxs("button",{onClick:()=>a({id:"firefighter",nameFr:"Les Pompiers",nameEn:"Fire Station",description:"De l'eau sur le feu !"}),className:`quick-bar-btn ${t==="firefighter"?"active":""}`,children:[A.jsx("span",{className:"q-emoji",children:"🚒"}),A.jsx("span",{className:"q-label",children:"Pompiers"})]})]}),A.jsx(Dy,{message:r,onRepeat:c})]})}bu.createRoot(document.getElementById("root")).render(A.jsx(q_.StrictMode,{children:A.jsx(OC,{})}));
