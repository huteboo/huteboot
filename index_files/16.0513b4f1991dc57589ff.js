(function(){var _=document&&document.currentScript&&document.currentScript.src;(window.webpackJsonpruntime=window.webpackJsonpruntime||[]).push([[16],{"3Csl":function(Q,O,i){"use strict";i.r(O),i.d(O,"overThresholdInpSelectors",function(){return N}),i.d(O,"collectExtraDataByMetric",function(){return W});var p=i("8OQS"),h=i.n(p);const M=.05,b=["name","delta"];var B;const L=n=>{const c=(n==null?void 0:n.closest("[data-widget-type]"))||(n==null?void 0:n.closest("[data-element-type]"));return(c==null?void 0:c.id)||"unknown"},g=n=>{var c,e,t,r;if(!n)return"unknownElement";if(!n.closest)return(n==null?void 0:n.nodeName)==="#text"?g(n.parentElement):n.nodeName;const d=n==null||(c=n.closest("[data-widget-type]"))===null||c===void 0||(e=c.dataset)===null||e===void 0?void 0:e.widgetType;if(d)return d;const l=n==null||(t=n.closest("[data-element-type]"))===null||t===void 0||(r=t.dataset)===null||r===void 0?void 0:r.elementType;if(l)return l;const s={dmRespCol:"column",dmRespRow:"row",dmFooterContainer:"footer",dmHeaderContainer:"header",dmInner:"page background",bgGallerySlide:"row image slider",videobgframe:"video bg"};for(const[o,a]of Object.entries(s)){var m;if(n!=null&&(m=n.classList)!==null&&m!==void 0&&m.contains(o))return a}return"unknown"},E=({entries:n=[]})=>{const c=[];for(const d of n){var e,t;const{name:l,target:s,duration:m}=d,o=(s==null?void 0:s.className)||(s==null?void 0:s.id)||"unknown",a=(s==null||(e=s.tagName)===null||e===void 0?void 0:e.toLowerCase())||"",f=g(s),y=L(s),C=(s==null||(t=s.dataset)===null||t===void 0?void 0:t.title)||"";let P;if(a==="svg"){var r;P=(s==null||(r=s.dataset)===null||r===void 0?void 0:r.iconName)||""}c.push({inpSelector:o,inpElementType:a,inpCustomType:f,inpGraphicName:P,inpElementId:y,inpTitle:C,name:l,duration:m})}return{inpSelectors:c}},I=((B=window.rtCommonProps)===null||B===void 0?void 0:B["feature.flag.runtime.inp.threshold"])||150;function N(n=[]){return n.filter(c=>c.duration>I)}const j=({entries:n=[]})=>{const c=[],e=[];return n.forEach(({sources:t,value:r})=>{if(r>M){const d=t.map(({node:l}={})=>{var s,m;e.push(g(l));const o=(l==null||(s=l.nodeName)===null||s===void 0?void 0:s.toLowerCase())||(l==null?void 0:l.nodeType)||"unknownNode",a=l!=null&&(m=l.className)!==null&&m!==void 0&&m.length?"."+Array.from(l.classList.values()).join("."):"";return`${o}${a}`});d!=null&&d.length&&c.push(d.join(","))}}),{clsSelectors:c,clsCustomType:e}},R=n=>{const e=/(-)(\d{1,4})(w.*)$/gm.exec(n);return e?Number(e[2]):null},A=(n,c,e)=>{const t=R(c);return t?{isBackgroundImg:e,lcpImgIntrinsicWidth:t,lcpImgRenderedWidth:n,lcpImgWidthDelta:t?t>n?t-n:0:-1,lcpImgSrc:c}:{}},T=n=>{const c=n==null?void 0:n.naturalHeight;let e=n==null?void 0:n.clientHeight;return e===0&&(e=n.parentElement.clientHeight),{lcpImgIntrinsicHeight:c,lcpImgRenderedHeight:e,lcpImgHeightDelta:c?c>e?c-e:0:-1}},v=({lcpImgWidthDelta:n=0,lcpImgHeightDelta:c=0})=>n+c,w=({entries:n=[]},c)=>{var e;const{url:t,element:r}=(n==null?void 0:n.pop())||{},d=(r==null?void 0:r.className)||"unknown",l=(r==null||(e=r.tagName)===null||e===void 0?void 0:e.toLowerCase())||"",s=g(r),m=l==="img";let o={lcpSelector:d,lcpElementType:l,lcpCustomType:s};const a=(r==null?void 0:r.clientWidth)||c,f=!m&&l!=="video";return a&&t&&(o=Object.assign({},o,A(a,t,f))),!f&&t&&m&&(o=Object.assign({},o,T(r))),Object.assign({},o,{lcpTotalImageDelta:v(o)})},W=(n,{viewportWidth:c})=>{let{name:e}=n,t=h()(n,b);return e==="LCP"?w(t,c):e==="CLS"?j(t):e==="INP"?E(t):{}}},"6TzK":function(Q,O,i){"use strict";i.r(O),i.d(O,"shouldPrintPerfLogs",function(){return j}),i.d(O,"printPerfLogs",function(){return R}),i.d(O,"sendPerformanceMetrics",function(){return c}),i.d(O,"sendMetrics",function(){return t});var p=i("8OQS"),h=i.n(p),M=i("yXPU"),b=i.n(M),B=i("e0ae"),L=i("ddYX"),g=i("3Csl"),I=()=>{let o;return b()(function*(){return o||(o=Object.assign({webVitals:yield i.e(9).then(i.bind(null,"ONNR"))},yield Promise.resolve().then(i.bind(null,"3Csl")))),o||{}})};const N=["bot"];function j(){var o;return!!((o=window)!==null&&o!==void 0&&o.location&&new URL(window.location.href).searchParams.get("logperf"))}function R(){return A.apply(this,arguments)}function A(){return A=b()(function*(){const o=(yield i.e(23).then(i.bind(null,"94Vr"))).default,a=new o({analyticsTracker:f=>{const{metricName:y,data:C}=f,P=v(y,C);P&&console.log(`(perf) ${P}:`,C)}});window.perfume=a}),A.apply(this,arguments)}const T={navigationTiming:o=>o&&o.timeToFirstByte?"navigationTiming":"",fp:"firstPaint",fcp:"firstContentfulPaint",fid:"firstInputDelay",lcp:"largestContentfulPaint",lcpFinal:"largestContentfulPaintFinal",cls:"cumulativeLayoutShift",clsFinal:"cumulativeLayoutShiftFinal",tbt:"totalBlockingTime",tbt5S:"totalBlockingTime5S",tbt10S:"totalBlockingTime10S",tbtFinal:"totalBlockingTimeFinal"};function v(o,a){const f=T[o];return typeof f=="string"?f:typeof f=="function"?f(a):""}const w=I(),W=()=>{const o={apps:[]},a=document.getElementById("dm-outer-wrapper");a&&(o.templateId=(a==null?void 0:a.getAttribute("dmtemplateid"))||"unknown"),document.getElementById("d-notification-bar")&&o.apps.push("notificationBar");const y=document.getElementById("usercentrics-cmp");if(y){o.apps.push("usercentrics");try{o.isUserCentricOpen=!!y.shadowRoot.querySelector("[data-testid=uc-accept-all-button]")}catch(C){}}return o.apps.length||o.apps.push("noApps"),o},n={onINP:{durationThreshold:0,reportAllChanges:!0}};function c(){return e.apply(this,arguments)}function e(){return e=b()(function*({sendLog:o}={}){try{var a;const x=Object(B.a)(),{bot:H}=x,V=h()(x,N);H&&console.debug("Skipping sending vitals metrics for Bot browser");const{webVitals:U,collectExtraDataByMetric:X}=yield w();let $,D=yield Promise.all(Object.entries(U).map(function(){var K=b()(function*([F,z]){$||($=yield s(V));const J=yield new Promise(k=>typeof z=="function"?z(k,n[F]):k({name:"N/A",delta:"N/A"})),{name:S,delta:u}=J,Y=Object.assign({},$,{[S.toLowerCase()]:u||1e-6},X(J,$));return S.match(/CLS|LCP|FID|INP|TTFB/)&&(console.debug(`sending { ${S.toLowerCase()}: ${u} } measurement`),t(Y)),Y});return function(F){return K.apply(this,arguments)}}()));D=D.reduce((K,F)=>Object.assign({},K,F),{});const G={logLevel:L.a.INFO,dataString:Object.assign({message:"collecting webvitals data",tags:["webvitals"]},D,{inpSelectors:Object(g.overThresholdInpSelectors)((a=D)===null||a===void 0?void 0:a.inpSelectors)},W())};if(o){var f;(f=G.dataString.inpSelectors)!==null&&f!==void 0&&f.length&&Object(L.b)(G)}return console.debug("sending web vitals",G),D}catch(x){if(o){var y,C,P;Object(L.b)({logLevel:L.a.ERROR,dataString:{message:"error sending webvitals analytics",error:JSON.stringify(x),siteAlias:(y=window)===null||y===void 0||(C=y.Parameters)===null||C===void 0?void 0:C.SiteAlias,pageUrl:(P=window)===null||P===void 0?void 0:P._currentPage.pageUrl}})}return Promise.reject(x)}}),e.apply(this,arguments)}function t(o){return r.apply(this,arguments)}function r(){return r=b()(function*(o){try{var a;const f=(a=window.rtCommonProps)===null||a===void 0?void 0:a["runtimecollector.url"];if(!f){console.log("Missing endpoint for runtimecollector");return}yield fetch(`${f}/performance/metrics`,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(o)})}catch(f){console.log("Failed send metrics for web vitals",f)}}),r.apply(this,arguments)}const d=()=>{var o,a,f;if(!Intl)return[];const y=(o=Intl)===null||o===void 0||(a=o.DateTimeFormat())===null||a===void 0||(f=a.resolvedOptions())===null||f===void 0?void 0:f.timeZone;return y?y.split("/"):[]},l=()=>{try{const{rtt:o,downlink:a}=navigator.connection||navigator.mozConnection||navigator.webkitConnection;return o&&a?{downlink:a,rtt:o}:{}}catch(o){}return{}};function s(){return m.apply(this,arguments)}function m(){return m=b()(function*({name:o="unknown",version:a="unknown",os:f="unknown"}={}){var y,C,P,x,H,V,U,X,$,D;const{type:G="unknown",effectiveType:K="unknown"}=((y=navigator)===null||y===void 0?void 0:y.connection)||{},{innerWidth:F,innerHeight:z,_currentDevice:J,_currentPage:S,Parameters:u}=window,k=yield(navigator.serviceWorker||{getRegistration(){return Promise.resolve(null)}}).getRegistration("/"),Z=!!document.getElementById("criticalCss"),q=!!document.querySelector('[data-element-type="custom_extension"]');return Object.assign({userAgent:(C=navigator)===null||C===void 0?void 0:C.userAgent,device:J,connectionType:G,connectionSpeed:K,viewportWidth:F,viewportHeight:z,hasCriticalCss:Z,hasCustomWidgets:q,hasCustomCode:u==null?void 0:u.hasCustomCode,themeName:(u==null?void 0:u.CurrentThemeName)||"unknown",pageType:(u==null?void 0:u.pageType)||"unknown",browserName:o,browserVersion:a,os:f,firstVisit:!(k!=null&&k.active),pageUuid:(S==null||(P=S.pageContent)===null||P===void 0?void 0:P.uuid)||(u==null?void 0:u.InitialPageUuid)||`${S==null?void 0:S.pageID}`,serviceWorkerRunning:!!k,siteAlias:u==null?void 0:u.SiteAlias,pageUrl:S.pageUrl,pageAlias:S.pageAlias,isHomePage:S==null||(x=S.pageContent)===null||x===void 0?void 0:x.isHomePage,host:((H=window)===null||H===void 0||(V=H.location)===null||V===void 0?void 0:V.host)||"unknown",path:location.pathname,queryParams:(U=window)===null||U===void 0||(X=U.location)===null||X===void 0||($=X.search)===null||$===void 0||(D=$.replace("?",""))===null||D===void 0?void 0:D.split("&"),planId:(u==null?void 0:u.planID)||"unknown",timeZone:d(),customTemplateId:(u==null?void 0:u.customTemplateId)||"unknown",siteTemplateId:(u==null?void 0:u.siteTemplateId)||"unknown",productId:(u==null?void 0:u.productId)||"unknown"},u!=null&&u.PublicationDate?{lastPublishDate:u==null?void 0:u.PublicationDate}:{},l())}),m.apply(this,arguments)}},"8oxB":function(Q,O){var i=Q.exports={},p,h;function M(){throw new Error("setTimeout has not been defined")}function b(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?p=setTimeout:p=M}catch(v){p=M}try{typeof clearTimeout=="function"?h=clearTimeout:h=b}catch(v){h=b}})();function B(v){if(p===setTimeout)return setTimeout(v,0);if((p===M||!p)&&setTimeout)return p=setTimeout,setTimeout(v,0);try{return p(v,0)}catch(w){try{return p.call(null,v,0)}catch(W){return p.call(this,v,0)}}}function L(v){if(h===clearTimeout)return clearTimeout(v);if((h===b||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(v);try{return h(v)}catch(w){try{return h.call(null,v)}catch(W){return h.call(this,v)}}}var g=[],E=!1,I,N=-1;function j(){!E||!I||(E=!1,I.length?g=I.concat(g):N=-1,g.length&&R())}function R(){if(!E){var v=B(j);E=!0;for(var w=g.length;w;){for(I=g,g=[];++N<w;)I&&I[N].run();N=-1,w=g.length}I=null,E=!1,L(v)}}i.nextTick=function(v){var w=new Array(arguments.length-1);if(arguments.length>1)for(var W=1;W<arguments.length;W++)w[W-1]=arguments[W];g.push(new A(v,w)),g.length===1&&!E&&B(R)};function A(v,w){this.fun=v,this.array=w}A.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={};function T(){}i.on=T,i.addListener=T,i.once=T,i.off=T,i.removeListener=T,i.removeAllListeners=T,i.emit=T,i.prependListener=T,i.prependOnceListener=T,i.listeners=function(v){return[]},i.binding=function(v){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(v){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},e0ae:function(Q,O,i){"use strict";(function(p){i.d(O,"a",function(){return A});var h=function(e,t,r){if(r||arguments.length===2)for(var d=0,l=t.length,s;d<l;d++)(s||!(d in t))&&(s||(s=Array.prototype.slice.call(t,0,d)),s[d]=t[d]);return e.concat(s||Array.prototype.slice.call(t))},M=function(){function e(t,r,d){this.name=t,this.version=r,this.os=d,this.type="browser"}return e}(),b=function(){function e(t){this.version=t,this.type="node",this.name="node",this.os=p.platform}return e}(),B=function(){function e(t,r,d,l){this.name=t,this.version=r,this.os=d,this.bot=l,this.type="bot-device"}return e}(),L=function(){function e(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return e}(),g=function(){function e(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return e}(),E=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,I=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,N=3,j=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",E]],R=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function A(e){return e?w(e):typeof document=="undefined"&&typeof navigator!="undefined"&&navigator.product==="ReactNative"?new g:typeof navigator!="undefined"?w(navigator.userAgent):n()}function T(e){return e!==""&&j.reduce(function(t,r){var d=r[0],l=r[1];if(t)return t;var s=l.exec(e);return!!s&&[d,s]},!1)}function v(e){var t=T(e);return t?t[0]:null}function w(e){var t=T(e);if(!t)return null;var r=t[0],d=t[1];if(r==="searchbot")return new L;var l=d[1]&&d[1].split(".").join("_").split("_").slice(0,3);l?l.length<N&&(l=h(h([],l,!0),c(N-l.length),!0)):l=[];var s=l.join("."),m=W(e),o=I.exec(e);return o&&o[1]?new B(r,s,m,o[1]):new M(r,s,m)}function W(e){for(var t=0,r=R.length;t<r;t++){var d=R[t],l=d[0],s=d[1],m=s.exec(e);if(m)return l}return null}function n(){var e=typeof p!="undefined"&&p.version;return e?new b(p.version.slice(1)):null}function c(e){for(var t=[],r=0;r<e;r++)t.push("0");return t}}).call(this,i("8oxB"))}}])})();
