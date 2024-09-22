System.register(["./reactLib-legacy.5e0011e8.js"],(function(n,t){"use strict";var e,r,o,u,c,i;return{setters:[n=>{e=n.R,r=n.r,o=n._,u=n.a,c=n.h,i=n.b}],execute:function(){n({P:function(n){var o=n.store,u=n.context,c=n.children,i=r.useMemo((function(){var n=l(o);return{store:o,subscription:n}}),[o]),a=r.useMemo((function(){return o.getState()}),[o]);p((function(){var n=i.subscription;return n.onStateChange=n.notifyNestedSubs,n.trySubscribe(),a!==o.getState()&&n.notifyNestedSubs(),function(){n.tryUnsubscribe(),n.onStateChange=null}}),[i,a]);var f=u||t;return e.createElement(f.Provider,{value:i},c)},_:gt,a:ht,b:wt,c:mt,f:function(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return vt(dt,yt(n,e))},h:function(n,t){if("function"==typeof n)return Ct(n,t);if("object"!=typeof n||null===n)throw new Error(Et(16));var e={};for(var r in n){var o=n[r];"function"==typeof o&&(e[r]=Ct(o,t))}return e},i:function(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return vt(pt,yt(n,e))},j:function(n){var t=vt(lt,n);return t.combinator=!0,t},k:function(n){var t,e=void 0===n?{}:n,r=e.context,c=void 0===r?{}:r,i=e.channel,a=void 0===i?Kt():i,f=e.sagaMonitor,s=o(e,["context","channel","sagaMonitor"]);function l(n){var e=n.getState,r=n.dispatch;return t=le.bind(null,u({},s,{context:c,channel:a,dispatch:r,getState:e,sagaMonitor:f})),function(n){return function(t){f&&f.actionDispatched&&f.actionDispatched(t);var e=n(t);return a.put(t),e}}}return l.run=function(){return t.apply(void 0,arguments)},l.setContext=function(n){Xn(c,n)},l},l:function n(t,e,r){var o;if("function"==typeof e&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error(Et(0));if("function"==typeof e&&void 0===r&&(r=e,e=void 0),void 0!==r){if("function"!=typeof r)throw new Error(Et(1));return r(n)(t,e)}if("function"!=typeof t)throw new Error(Et(2));var u=t,c=e,i=[],a=i,f=!1;function s(){a===i&&(a=i.slice())}function l(){if(f)throw new Error(Et(3));return c}function p(n){if("function"!=typeof n)throw new Error(Et(4));if(f)throw new Error(Et(5));var t=!0;return s(),a.push(n),function(){if(t){if(f)throw new Error(Et(6));t=!1,s();var e=a.indexOf(n);a.splice(e,1),i=null}}}function d(n){if(!function(n){if("object"!=typeof n||null===n)return!1;for(var t=n;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(n)===t}(n))throw new Error(Et(7));if(void 0===n.type)throw new Error(Et(8));if(f)throw new Error(Et(9));try{f=!0,c=u(c,n)}finally{f=!1}for(var t=i=a,e=0;e<t.length;e++)(0,t[e])();return n}return d({type:Pt.INIT}),(o={dispatch:d,subscribe:p,getState:l,replaceReducer:function(n){if("function"!=typeof n)throw new Error(Et(10));u=n,d({type:Pt.REPLACE})}})[St]=function(){var n,t=p;return(n={subscribe:function(n){if("object"!=typeof n||null===n)throw new Error(Et(11));function e(){n.next&&n.next(l())}return e(),{unsubscribe:t(e)}}})[St]=function(){return this},n},o},m:Yn,n:function(n){for(var t=Object.keys(n),e={},r=0;r<t.length;r++){var o=t[r];"function"==typeof n[o]&&(e[o]=n[o])}var u,c=Object.keys(e);try{!function(n){Object.keys(n).forEach((function(t){var e=n[t];if(void 0===e(void 0,{type:Pt.INIT}))throw new Error(Et(12));if(void 0===e(void 0,{type:Pt.PROBE_UNKNOWN_ACTION()}))throw new Error(Et(13))}))}(e)}catch(m){u=m}return function(n,t){if(void 0===n&&(n={}),u)throw u;for(var r=!1,o={},i=0;i<c.length;i++){var a=c[i],f=e[a],s=n[a],l=f(s,t);if(void 0===l)throw t&&t.type,new Error(Et(14));o[a]=l,r=r||l!==s}return(r=r||c.length!==Object.keys(n).length)?o:n}},o:function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return function(n){return function(){var e=n.apply(void 0,arguments),r=function(){throw new Error(Et(15))},o={getState:e.getState,dispatch:function(){return r.apply(void 0,arguments)}},u=t.map((function(n){return n(o)}));return r=Nt.apply(void 0,u)(e.dispatch),wt(wt({},e),{},{dispatch:r})}}},p:function(n,t){return kn(t)&&(t=n,n=void 0),vt(st,{channel:n,action:t})},t:function(n,t){return void 0===n&&(n="*"),qn(n)?(An(t)&&console.warn("take(pattern) takes one argument but two were provided. Consider passing an array for listening to several action types"),vt(ft,{pattern:n})):Kn(n)&&An(t)&&qn(t)?vt(ft,{channel:n,pattern:t}):Fn(n)?(An(t)&&console.warn("take(channel) takes one argument but two were provided. Second argument is ignored."),vt(ft,{channel:n})):void 0}});var t=e.createContext(null),a=function(n){n()},f=function(){return a},s={notify:function(){},get:function(){return[]}};function l(n,t){var e,r=s;function o(){c.onStateChange&&c.onStateChange()}function u(){e||(e=t?t.addNestedSub(o):n.subscribe(o),r=function(){var n=f(),t=null,e=null;return{clear:function(){t=null,e=null},notify:function(){n((function(){for(var n=t;n;)n.callback(),n=n.next}))},get:function(){for(var n=[],e=t;e;)n.push(e),e=e.next;return n},subscribe:function(n){var r=!0,o=e={callback:n,next:null,prev:e};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:e=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}var c={addNestedSub:function(n){return u(),r.subscribe(n)},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(e)},trySubscribe:u,tryUnsubscribe:function(){e&&(e(),e=void 0,r.clear(),r=s)},getListeners:function(){return r}};return c}var p="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect,d={exports:{}},v={},y=60103,h=60106,g=60107,m=60108,b=60114,w=60109,E=60110,S=60112,O=60113,P=60120,C=60115,N=60116,x=60121,j=60122,T=60117,M=60129,R=60131;if("function"==typeof Symbol&&Symbol.for){var k=Symbol.for;y=k("react.element"),h=k("react.portal"),g=k("react.fragment"),m=k("react.strict_mode"),b=k("react.profiler"),w=k("react.provider"),E=k("react.context"),S=k("react.forward_ref"),O=k("react.suspense"),P=k("react.suspense_list"),C=k("react.memo"),N=k("react.lazy"),x=k("react.block"),j=k("react.server.block"),T=k("react.fundamental"),M=k("react.debug_trace_mode"),R=k("react.legacy_hidden")}function A(n){if("object"==typeof n&&null!==n){var t=n.$$typeof;switch(t){case y:switch(n=n.type){case g:case b:case m:case O:case P:return n;default:switch(n=n&&n.$$typeof){case E:case S:case N:case C:case w:return n;default:return t}}case h:return t}}}var I=w,L=y,_=S,D=g,$=N,q=C,F=h,B=b,U=m,K=O;v.ContextConsumer=E,v.ContextProvider=I,v.Element=L,v.ForwardRef=_,v.Fragment=D,v.Lazy=$,v.Memo=q,v.Portal=F,v.Profiler=B,v.StrictMode=U,v.Suspense=K,v.isAsyncMode=function(){return!1},v.isConcurrentMode=function(){return!1},v.isContextConsumer=function(n){return A(n)===E},v.isContextProvider=function(n){return A(n)===w},v.isElement=function(n){return"object"==typeof n&&null!==n&&n.$$typeof===y},v.isForwardRef=function(n){return A(n)===S},v.isFragment=function(n){return A(n)===g},v.isLazy=function(n){return A(n)===N},v.isMemo=function(n){return A(n)===C},v.isPortal=function(n){return A(n)===h},v.isProfiler=function(n){return A(n)===b},v.isStrictMode=function(n){return A(n)===m},v.isSuspense=function(n){return A(n)===O},v.isValidElementType=function(n){return"string"==typeof n||"function"==typeof n||n===g||n===b||n===M||n===m||n===O||n===P||n===R||"object"==typeof n&&null!==n&&(n.$$typeof===N||n.$$typeof===C||n.$$typeof===w||n.$$typeof===E||n.$$typeof===S||n.$$typeof===T||n.$$typeof===x||n[0]===j)},v.typeOf=A,d.exports=v;var H=d.exports,W=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],z=["reactReduxForwardedRef"],G=[],X=[null,null];function J(n,t){var e=n[1];return[t.payload,e+1]}function V(n,t,e){p((function(){return n.apply(void 0,t)}),e)}function Q(n,t,e,r,o,u,c){n.current=r,t.current=o,e.current=!1,u.current&&(u.current=null,c())}function Y(n,t,e,r,o,u,c,i,a,f){if(n){var s=!1,l=null,p=function(){if(!s){var n,e,p=t.getState();try{n=r(p,o.current)}catch(m){e=m,l=m}e||(l=null),n===u.current?c.current||a():(u.current=n,i.current=n,c.current=!0,f({type:"STORE_UPDATED",payload:{error:e}}))}};return e.onStateChange=p,e.trySubscribe(),p(),function(){if(s=!0,e.tryUnsubscribe(),e.onStateChange=null,l)throw l}}}var Z=function(){return[null,0]};function nn(n,i){void 0===i&&(i={});var a=i,f=a.getDisplayName,s=void 0===f?function(n){return"ConnectAdvanced("+n+")"}:f,p=a.methodName,d=void 0===p?"connectAdvanced":p,v=a.renderCountProp,y=void 0===v?void 0:v,h=a.shouldHandleStateChanges,g=void 0===h||h,m=a.storeKey,b=void 0===m?"store":m;a.withRef;var w=a.forwardRef,E=void 0!==w&&w,S=a.context,O=void 0===S?t:S,P=o(a,W),C=O;return function(t){var i=t.displayName||t.name||"Component",a=s(i),f=u({},P,{getDisplayName:s,methodName:d,renderCountProp:y,shouldHandleStateChanges:g,storeKey:b,displayName:a,wrappedComponentName:i,WrappedComponent:t}),p=P.pure,v=p?r.useMemo:function(n){return n()};function h(c){var i=r.useMemo((function(){var n=c.reactReduxForwardedRef,t=o(c,z);return[c.context,n,t]}),[c]),a=i[0],s=i[1],p=i[2],d=r.useMemo((function(){return a&&a.Consumer&&H.isContextConsumer(e.createElement(a.Consumer,null))?a:C}),[a,C]),y=r.useContext(d),h=Boolean(c.store)&&Boolean(c.store.getState)&&Boolean(c.store.dispatch);Boolean(y)&&Boolean(y.store);var m=h?c.store:y.store,b=r.useMemo((function(){return function(t){return n(t.dispatch,f)}(m)}),[m]),w=r.useMemo((function(){if(!g)return X;var n=l(m,h?null:y.subscription),t=n.notifyNestedSubs.bind(n);return[n,t]}),[m,h,y]),E=w[0],S=w[1],O=r.useMemo((function(){return h?y:u({},y,{subscription:E})}),[h,y,E]),P=r.useReducer(J,G,Z),N=P[0][0],x=P[1];if(N&&N.error)throw N.error;var j=r.useRef(),T=r.useRef(p),M=r.useRef(),R=r.useRef(!1),k=v((function(){return M.current&&p===T.current?M.current:b(m.getState(),p)}),[m,N,p]);V(Q,[T,j,R,p,k,M,S]),V(Y,[g,m,E,b,T,j,R,M,S,x],[m,E,b]);var A=r.useMemo((function(){return e.createElement(t,u({},k,{ref:s}))}),[s,t,k]);return r.useMemo((function(){return g?e.createElement(d.Provider,{value:O},A):A}),[d,A,O])}var m=p?e.memo(h):h;if(m.WrappedComponent=t,m.displayName=h.displayName=a,E){var w=e.forwardRef((function(n,t){return e.createElement(m,u({},n,{reactReduxForwardedRef:t}))}));return w.displayName=a,w.WrappedComponent=t,c(w,t)}return c(m,t)}}function tn(n,t){return n===t?0!==n||0!==t||1/n==1/t:n!=n&&t!=t}function en(n,t){if(tn(n,t))return!0;if("object"!=typeof n||null===n||"object"!=typeof t||null===t)return!1;var e=Object.keys(n),r=Object.keys(t);if(e.length!==r.length)return!1;for(var o=0;o<e.length;o++)if(!Object.prototype.hasOwnProperty.call(t,e[o])||!tn(n[e[o]],t[e[o]]))return!1;return!0}function rn(n){return function(t,e){var r=n(t,e);function o(){return r}return o.dependsOnOwnProps=!1,o}}function on(n){return null!==n.dependsOnOwnProps&&void 0!==n.dependsOnOwnProps?Boolean(n.dependsOnOwnProps):1!==n.length}function un(n,t){return function(t,e){e.displayName;var r=function(n,t){return r.dependsOnOwnProps?r.mapToProps(n,t):r.mapToProps(n)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,e){r.mapToProps=n,r.dependsOnOwnProps=on(n);var o=r(t,e);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=on(o),o=r(t,e)),o},r}}const cn=[function(n){return"function"==typeof n?un(n):void 0},function(n){return n?void 0:rn((function(n){return{dispatch:n}}))},function(n){return n&&"object"==typeof n?rn((function(t){return function(n,t){var e={},r=function(r){var o=n[r];"function"==typeof o&&(e[r]=function(){return t(o.apply(void 0,arguments))})};for(var o in n)r(o);return e}(n,t)})):void 0}],an=[function(n){return"function"==typeof n?un(n):void 0},function(n){return n?void 0:rn((function(){return{}}))}];function fn(n,t,e){return u({},e,n,t)}const sn=[function(n){return"function"==typeof n?function(n){return function(t,e){e.displayName;var r,o=e.pure,u=e.areMergedPropsEqual,c=!1;return function(t,e,i){var a=n(t,e,i);return c?o&&u(a,r)||(r=a):(c=!0,r=a),r}}}(n):void 0},function(n){return n?void 0:function(){return fn}}];var ln=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function pn(n,t,e,r){return function(o,u){return e(n(o,u),t(r,u),u)}}function dn(n,t,e,r,o){var u,c,i,a,f,s=o.areStatesEqual,l=o.areOwnPropsEqual,p=o.areStatePropsEqual,d=!1;function v(o,d){var v,y,h=!l(d,c),g=!s(o,u,d,c);return u=o,c=d,h&&g?(i=n(u,c),t.dependsOnOwnProps&&(a=t(r,c)),f=e(i,a,c)):h?(n.dependsOnOwnProps&&(i=n(u,c)),t.dependsOnOwnProps&&(a=t(r,c)),f=e(i,a,c)):g?(v=n(u,c),y=!p(v,i),i=v,y&&(f=e(i,a,c)),f):f}return function(o,s){return d?v(o,s):(i=n(u=o,c=s),a=t(r,c),f=e(i,a,c),d=!0,f)}}function vn(n,t){var e=t.initMapStateToProps,r=t.initMapDispatchToProps,u=t.initMergeProps,c=o(t,ln),i=e(n,c),a=r(n,c),f=u(n,c);return(c.pure?dn:pn)(i,a,f,n,c)}var yn,hn=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function gn(n,t,e){for(var r=t.length-1;r>=0;r--){var o=t[r](n);if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof n+" for "+e+" argument when connecting component "+r.wrappedComponentName+".")}}function mn(n,t){return n===t}function bn(n){var t=void 0===n?{}:n,e=t.connectHOC,r=void 0===e?nn:e,c=t.mapStateToPropsFactories,i=void 0===c?an:c,a=t.mapDispatchToPropsFactories,f=void 0===a?cn:a,s=t.mergePropsFactories,l=void 0===s?sn:s,p=t.selectorFactory,d=void 0===p?vn:p;return function(n,t,e,c){void 0===c&&(c={});var a=c,s=a.pure,p=void 0===s||s,v=a.areStatesEqual,y=void 0===v?mn:v,h=a.areOwnPropsEqual,g=void 0===h?en:h,m=a.areStatePropsEqual,b=void 0===m?en:m,w=a.areMergedPropsEqual,E=void 0===w?en:w,S=o(a,hn),O=gn(n,i,"mapStateToProps"),P=gn(t,f,"mapDispatchToProps"),C=gn(e,l,"mergeProps");return r(d,u({methodName:"connect",getDisplayName:function(n){return"Connect("+n+")"},shouldHandleStateChanges:Boolean(n),initMapStateToProps:O,initMapDispatchToProps:P,initMergeProps:C,pure:p,areStatesEqual:y,areOwnPropsEqual:g,areStatePropsEqual:b,areMergedPropsEqual:E},S))}}n("g",bn()),yn=i.unstable_batchedUpdates,a=yn;var wn=function(n){return"@@redux-saga/"+n},En=wn("CANCEL_PROMISE"),Sn=wn("CHANNEL_END"),On=wn("IO"),Pn=wn("MATCH"),Cn=wn("MULTICAST"),Nn=wn("SAGA_ACTION"),xn=wn("SELF_CANCELLATION"),jn=wn("TASK"),Tn=wn("TASK_CANCEL"),Mn=wn("TERMINATE"),Rn=wn("LOCATION"),kn=function(n){return null==n},An=function(n){return null!=n},In=n("e",(function(n){return"function"==typeof n})),Ln=function(n){return"string"==typeof n},_n=Array.isArray,Dn=function(n){return n&&In(n.then)},$n=function(n){return n&&In(n.next)&&In(n.throw)},qn=function n(t){return t&&(Ln(t)||Un(t)||In(t)||_n(t)&&t.every(n))},Fn=n("d",(function(n){return n&&In(n.take)&&In(n.close)})),Bn=n("s",(function(n){return In(n)&&n.hasOwnProperty("toString")})),Un=function(n){return Boolean(n)&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype},Kn=function(n){return Fn(n)&&n[Cn]},Hn=function(n){return function(){return n}},Wn=Hn(!0),zn=function(){},Gn=function(n){return n},Xn=function(n,t){u(n,t),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(t).forEach((function(e){n[e]=t[e]}))};function Jn(n,t){var e=n.indexOf(t);e>=0&&n.splice(e,1)}var Vn=function(n){throw n},Qn=function(n){return{value:n,done:!0}};function Yn(n,t,e){void 0===t&&(t=Vn),void 0===e&&(e="iterator");var r={meta:{name:e},next:n,throw:t,return:Qn,isSagaIterator:!0};return"undefined"!=typeof Symbol&&(r[Symbol.iterator]=function(){return r}),r}function Zn(n,t){var e=t.sagaStack;console.error(n),console.error(e)}var nt=function(n){return Array.apply(null,new Array(n))},tt=function(n){return function(t){return n(Object.defineProperty(t,Nn,{value:!0}))}},et=function(n){return n===Mn},rt=function(n){return n===Tn},ot=function(n){return et(n)||rt(n)};function ut(n,t){var e,r=Object.keys(n),o=r.length,u=0,c=_n(n)?nt(o):{},i={};return r.forEach((function(n){var r=function(r,i){e||(i||ot(r)?(t.cancel(),t(r,i)):(c[n]=r,++u===o&&(e=!0,t(c))))};r.cancel=zn,i[n]=r})),t.cancel=function(){e||(e=!0,r.forEach((function(n){return i[n].cancel()})))},i}function ct(n){return{name:n.name||"anonymous",location:it(n)}}function it(n){return n[Rn]}var at=function(n){return function(n,t){void 0===n&&(n=10);var e=new Array(n),r=0,o=0,u=0,c=function(t){e[o]=t,o=(o+1)%n,r++},i=function(){if(0!=r){var t=e[u];return e[u]=null,r--,u=(u+1)%n,t}},a=function(){for(var n=[];r;)n.push(i());return n};return{isEmpty:function(){return 0==r},put:function(i){var f;if(r<n)c(i);else switch(t){case 1:throw new Error("Channel's Buffer overflow!");case 3:e[o]=i,u=o=(o+1)%n;break;case 4:f=2*n,e=a(),r=e.length,o=e.length,u=0,e.length=f,n=f,c(i)}},take:i,flush:a}}(n,4)},ft="TAKE",st="PUT",lt="ALL",pt="CALL",dt="FORK",vt=function(n,t){var e;return(e={})[On]=!0,e.combinator=!1,e.type=n,e.payload=t,e};function yt(n,t){var e,r=null;return In(n)?e=n:(_n(n)?(r=n[0],e=n[1]):(r=n.context,e=n.fn),r&&Ln(e)&&In(r[e])&&(e=r[e])),{context:r,fn:e,args:t}}function ht(t){return n("a",ht="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n}),ht(t)}function gt(n){var t=function(n,t){if("object"!==ht(n)||null===n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,t||"default");if("object"!==ht(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(n,"string");return"symbol"===ht(t)?t:String(t)}function mt(n,t,e){return(t=gt(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function bt(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function wt(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?bt(Object(e),!0).forEach((function(t){mt(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):bt(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function Et(n){return"Minified Redux error #"+n+"; visit https://redux.js.org/Errors?code="+n+" for the full message or use the non-minified dev environment for full errors. "}var St="function"==typeof Symbol&&Symbol.observable||"@@observable",Ot=function(){return Math.random().toString(36).substring(7).split("").join(".")},Pt={INIT:"@@redux/INIT"+Ot(),REPLACE:"@@redux/REPLACE"+Ot(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Ot()}};function Ct(n,t){return function(){return t(n.apply(this,arguments))}}function Nt(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return 0===t.length?function(n){return n}:1===t.length?t[0]:t.reduce((function(n,t){return function(){return n(t.apply(void 0,arguments))}}))}var xt=[],jt=0;function Tt(n){try{kt(),n()}finally{At()}}function Mt(n){xt.push(n),jt||(kt(),It())}function Rt(n){try{return kt(),n()}finally{It()}}function kt(){jt++}function At(){jt--}function It(){var n;for(At();!jt&&void 0!==(n=xt.shift());)Tt(n)}var Lt=function(n){return function(t){return n.some((function(n){return Ft(n)(t)}))}},_t=function(n){return function(t){return n(t)}},Dt=function(n){return function(t){return t.type===String(n)}},$t=function(n){return function(t){return t.type===n}},qt=function(){return Wn};function Ft(n){var t="*"===n?qt:Ln(n)?Dt:_n(n)?Lt:Bn(n)?Dt:In(n)?_t:Un(n)?$t:null;if(null===t)throw new Error("invalid pattern: "+n);return t(n)}var Bt={type:Sn},Ut=function(n){return n&&n.type===Sn};function Kt(){var n,t,e,r,o,u,c=(t=!1,r=e=[],o=function(){r===e&&(r=e.slice())},u=function(){t=!0;var n=e=r;r=[],n.forEach((function(n){n(Bt)}))},(n={})[Cn]=!0,n.put=function(n){if(!t)if(Ut(n))u();else for(var o=e=r,c=0,i=o.length;c<i;c++){var a=o[c];a[Pn](n)&&(a.cancel(),a(n))}},n.take=function(n,e){var u,c;void 0===e&&(e=qt),t?n(Bt):(n[Pn]=e,o(),r.push(n),n.cancel=(u=function(){o(),Jn(r,n)},c=!1,function(){c||(c=!0,u())}))},n.close=u,n),i=c.put;return c.put=function(n){n[Nn]?i(n):Mt((function(){i(n)}))},c}var Ht=0,Wt=1,zt=2,Gt=3;function Xt(n,t){var e=n[En];In(e)&&(t.cancel=e),n.then(t,(function(n){t(n,!0)}))}var Jt,Vt=0,Qt=function(){return++Vt};function Yt(n){n.isRunning()&&n.cancel()}var Zt=((Jt={})[ft]=function(n,t,e){var r=t.channel,o=void 0===r?n.channel:r,u=t.pattern,c=t.maybe,i=function(n){n instanceof Error?e(n,!0):!Ut(n)||c?e(n):e(Mn)};try{o.take(i,An(u)?Ft(u):null)}catch(a){return void e(a,!0)}e.cancel=i.cancel},Jt[st]=function(n,t,e){var r=t.channel,o=t.action,u=t.resolve;Mt((function(){var t;try{t=(r?r.put:n.dispatch)(o)}catch(c){return void e(c,!0)}u&&Dn(t)?Xt(t,e):e(t)}))},Jt[lt]=function(n,t,e,r){var o=r.digestEffect,u=Vt,c=Object.keys(t);if(0!==c.length){var i=ut(t,e);c.forEach((function(n){o(t[n],u,i[n],n)}))}else e(_n(t)?[]:{})},Jt.RACE=function(n,t,e,r){var o=r.digestEffect,u=Vt,c=Object.keys(t),i=_n(t)?nt(c.length):{},a={},f=!1;c.forEach((function(n){var t=function(t,r){f||(r||ot(t)?(e.cancel(),e(t,r)):(e.cancel(),f=!0,i[n]=t,e(i)))};t.cancel=zn,a[n]=t})),e.cancel=function(){f||(f=!0,c.forEach((function(n){return a[n].cancel()})))},c.forEach((function(n){f||o(t[n],u,a[n],n)}))},Jt[pt]=function(n,t,e,r){var o=t.context,u=t.fn,c=t.args,i=r.task;try{var a=u.apply(o,c);if(Dn(a))return void Xt(a,e);if($n(a))return void se(n,a,i.context,Vt,ct(u),!1,e);e(a)}catch(f){e(f,!0)}},Jt.CPS=function(n,t,e){var r=t.context,o=t.fn,u=t.args;try{var c=function(n,t){kn(n)?e(t):e(n,!0)};o.apply(r,u.concat(c)),c.cancel&&(e.cancel=c.cancel)}catch(i){e(i,!0)}},Jt[dt]=function(n,t,e,r){var o=t.context,u=t.fn,c=t.args,i=t.detached,a=r.task,f=function(n){var t=n.context,e=n.fn,r=n.args;try{var o=e.apply(t,r);if($n(o))return o;var u=!1;return Yn((function(n){return u?{value:n,done:!0}:(u=!0,{value:o,done:!Dn(o)})}))}catch(c){return Yn((function(){throw c}))}}({context:o,fn:u,args:c}),s=function(n,t){return n.isSagaIterator?{name:n.meta.name}:ct(t)}(f,u);Rt((function(){var t=se(n,f,a.context,Vt,s,i,void 0);i?e(t):t.isRunning()?(a.queue.addTask(t),e(t)):t.isAborted()?a.queue.abort(t.error()):e(t)}))},Jt.JOIN=function(n,t,e,r){var o=r.task,u=function(n,t){if(n.isRunning()){var e={task:o,cb:t};t.cancel=function(){n.isRunning()&&Jn(n.joiners,e)},n.joiners.push(e)}else n.isAborted()?t(n.error(),!0):t(n.result())};if(_n(t)){if(0===t.length)return void e([]);var c=ut(t,e);t.forEach((function(n,t){u(n,c[t])}))}else u(t,e)},Jt.CANCEL=function(n,t,e,r){var o=r.task;t===xn?Yt(o):_n(t)?t.forEach(Yt):Yt(t),e()},Jt.SELECT=function(n,t,e){var r=t.selector,o=t.args;try{e(r.apply(void 0,[n.getState()].concat(o)))}catch(u){e(u,!0)}},Jt.ACTION_CHANNEL=function(n,t,e){var r=t.pattern,o=function(n){void 0===n&&(n=at());var t=!1,e=[];return{take:function(r){t&&n.isEmpty()?r(Bt):n.isEmpty()?(e.push(r),r.cancel=function(){Jn(e,r)}):r(n.take())},put:function(r){if(!t){if(0===e.length)return n.put(r);e.shift()(r)}},flush:function(e){t&&n.isEmpty()?e(Bt):e(n.flush())},close:function(){if(!t){t=!0;var n=e;e=[];for(var r=0,o=n.length;r<o;r++)(0,n[r])(Bt)}}}}(t.buffer),u=Ft(r),c=function t(e){Ut(e)||n.channel.take(t,u),o.put(e)},i=o.close;o.close=function(){c.cancel(),i()},n.channel.take(c,u),e(o)},Jt.CANCELLED=function(n,t,e,r){e(r.task.isCancelled())},Jt.FLUSH=function(n,t,e){t.flush(e)},Jt.GET_CONTEXT=function(n,t,e,r){e(r.task.context[t])},Jt.SET_CONTEXT=function(n,t,e,r){var o=r.task;Xn(o.context,t),e()},Jt);function ne(n,t){return n+"?"+t}function te(n){var t=n.name,e=n.location;return e?t+"  "+ne(e.fileName,e.lineNumber):t}function ee(n){var t,e,r,o=(t=function(n){return n.cancelledTasks},e=n,(r=[]).concat.apply(r,e.map(t)));return o.length?["Tasks cancelled due to error:"].concat(o).join("\n"):""}var re=null,oe=[],ue=function(n){n.crashedEffect=re,oe.push(n)},ce=function(){re=null,oe.length=0},ie=function(n){re=n},ae=function(){var n,t,e=oe[0],r=oe.slice(1),o=e.crashedEffect?(n=e.crashedEffect,(t=it(n))?t.code+"  "+ne(t.fileName,t.lineNumber):""):null;return["The above error occurred in task "+te(e.meta)+(o?" \n when executing effect "+o:"")].concat(r.map((function(n){return"    created by "+te(n.meta)})),[ee(oe)]).join("\n")};function fe(n,t,e,r,o,u,c){var i;void 0===c&&(c=zn);var a,f,s=Ht,l=null,p=[],d=Object.create(e),v=function(n,t,e){var r,o=[],u=!1;function c(n){t(),a(),e(n,!0)}function i(t){o.push(t),t.cont=function(i,a){u||(Jn(o,t),t.cont=zn,a?c(i):(t===n&&(r=i),o.length||(u=!0,e(r))))}}function a(){u||(u=!0,o.forEach((function(n){n.cont=zn,n.cancel()})),o=[])}return i(n),{addTask:i,cancelAll:a,abort:c,getTasks:function(){return o}}}(t,(function(){p.push.apply(p,v.getTasks().map((function(n){return n.meta.name})))}),y);function y(t,e){if(e){if(s=zt,ue({meta:o,cancelledTasks:p}),h.isRoot){var r=ae();ce(),n.onError(t,{sagaStack:r})}f=t,l&&l.reject(t)}else t===Tn?s=Wt:s!==Wt&&(s=Gt),a=t,l&&l.resolve(t);h.cont(t,e),h.joiners.forEach((function(n){n.cb(t,e)})),h.joiners=null}var h=((i={})[jn]=!0,i.id=r,i.meta=o,i.isRoot=u,i.context=d,i.joiners=[],i.queue=v,i.cancel=function(){s===Ht&&(s=Wt,v.cancelAll(),y(Tn,!1))},i.cont=c,i.end=y,i.setContext=function(n){Xn(d,n)},i.toPromise=function(){return l||((n={}).promise=new Promise((function(t,e){n.resolve=t,n.reject=e})),l=n,s===zt?l.reject(f):s!==Ht&&l.resolve(a)),l.promise;var n},i.isRunning=function(){return s===Ht},i.isCancelled=function(){return s===Wt||s===Ht&&t.status===Wt},i.isAborted=function(){return s===zt},i.result=function(){return a},i.error=function(){return f},i);return h}function se(n,t,e,r,o,u,c){var i=n.finalizeRunEffect((function(t,e,r){Dn(t)?Xt(t,r):$n(t)?se(n,t,f.context,e,o,!1,r):t&&t[On]?(0,Zt[t.type])(n,t.payload,r,s):r(t)}));l.cancel=zn;var a={meta:o,cancel:function(){a.status===Ht&&(a.status=Wt,l(Tn))},status:Ht},f=fe(n,a,e,r,o,u,c),s={task:f,digestEffect:p};return c&&(c.cancel=f.cancel),l(),f;function l(n,e){try{var o;e?(o=t.throw(n),ce()):rt(n)?(a.status=Wt,l.cancel(),o=In(t.return)?t.return(Tn):{done:!0,value:Tn}):o=et(n)?In(t.return)?t.return():{done:!0}:t.next(n),o.done?(a.status!==Wt&&(a.status=Gt),a.cont(o.value)):p(o.value,r,l)}catch(u){if(a.status===Wt)throw u;a.status=zt,a.cont(u,!0)}}function p(t,e,r,o){void 0===o&&(o="");var u,c=Qt();function a(e,o){u||(u=!0,r.cancel=zn,n.sagaMonitor&&(o?n.sagaMonitor.effectRejected(c,e):n.sagaMonitor.effectResolved(c,e)),o&&ie(t),r(e,o))}n.sagaMonitor&&n.sagaMonitor.effectTriggered({effectId:c,parentEffectId:e,label:o,effect:t}),a.cancel=zn,r.cancel=function(){u||(u=!0,a.cancel(),a.cancel=zn,n.sagaMonitor&&n.sagaMonitor.effectCancelled(c))},i(t,c,a)}}function le(n,t){for(var e=n.channel,r=void 0===e?Kt():e,o=n.dispatch,u=n.getState,c=n.context,i=void 0===c?{}:c,a=n.sagaMonitor,f=n.effectMiddlewares,s=n.onError,l=void 0===s?Zn:s,p=arguments.length,d=new Array(p>2?p-2:0),v=2;v<p;v++)d[v-2]=arguments[v];var y,h=t.apply(void 0,d),g=Qt();if(a&&(a.rootSagaStarted=a.rootSagaStarted||zn,a.effectTriggered=a.effectTriggered||zn,a.effectResolved=a.effectResolved||zn,a.effectRejected=a.effectRejected||zn,a.effectCancelled=a.effectCancelled||zn,a.actionDispatched=a.actionDispatched||zn,a.rootSagaStarted({effectId:g,saga:t,args:d})),f){var m=Nt.apply(void 0,f);y=function(n){return function(t,e,r){return m((function(t){return n(t,e,r)}))(t)}}}else y=Gn;var b={channel:r,dispatch:tt(o),getState:u,sagaMonitor:a,onError:l,finalizeRunEffect:y};return Rt((function(){var n=se(b,h,i,g,ct(t),!0,void 0);return a&&a.effectResolved(g,n),n}))}}}}));
