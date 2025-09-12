(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Ye(e,a){(a==null||a>e.length)&&(a=e.length);for(var t=0,r=Array(a);t<a;t++)r[t]=e[t];return r}function er(e){if(Array.isArray(e))return e}function tr(e){if(Array.isArray(e))return Ye(e)}function ar(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function rr(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Zt(r.key),r)}}function nr(e,a,t){return a&&rr(e.prototype,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function ve(e,a){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=rt(e))||a){t&&(e=t);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var l=t.next();return i=l.done,l},e:function(l){s=!0,o=l},f:function(){try{i||t.return==null||t.return()}finally{if(s)throw o}}}}function C(e,a,t){return(a=Zt(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function ir(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function or(e,a){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,n,o,i,s=[],l=!0,f=!1;try{if(o=(t=t.call(e)).next,a===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=o.call(t)).done)&&(s.push(r.value),s.length!==a);l=!0);}catch(m){f=!0,n=m}finally{try{if(!l&&t.return!=null&&(i=t.return(),Object(i)!==i))return}finally{if(f)throw n}}return s}}function sr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gt(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?gt(Object(t),!0).forEach(function(r){C(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):gt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Oe(e,a){return er(e)||or(e,a)||rt(e,a)||sr()}function Y(e){return tr(e)||ir(e)||rt(e)||lr()}function fr(e,a){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,a);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function Zt(e){var a=fr(e,"string");return typeof a=="symbol"?a:a+""}function ke(e){"@babel/helpers - typeof";return ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ke(e)}function rt(e,a){if(e){if(typeof e=="string")return Ye(e,a);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Ye(e,a):void 0}}var pt=function(){},nt={},ea={},ta=null,aa={mark:pt,measure:pt};try{typeof window<"u"&&(nt=window),typeof document<"u"&&(ea=document),typeof MutationObserver<"u"&&(ta=MutationObserver),typeof performance<"u"&&(aa=performance)}catch{}var ur=nt.navigator||{},vt=ur.userAgent,bt=vt===void 0?"":vt,B=nt,N=ea,yt=ta,ge=aa;B.document;var V=!!N.documentElement&&!!N.head&&typeof N.addEventListener=="function"&&typeof N.createElement=="function",ra=~bt.indexOf("MSIE")||~bt.indexOf("Trident/"),De,cr=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,dr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,na={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},mr={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ia=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],M="classic",ce="duotone",oa="sharp",sa="sharp-duotone",la="chisel",fa="etch",ua="jelly",ca="jelly-duo",da="jelly-fill",ma="notdog",ha="notdog-duo",ga="slab",pa="slab-press",va="thumbprint",ba="whiteboard",hr="Classic",gr="Duotone",pr="Sharp",vr="Sharp Duotone",br="Chisel",yr="Etch",Ar="Jelly",xr="Jelly Duo",Sr="Jelly Fill",Er="Notdog",wr="Notdog Duo",_r="Slab",Cr="Slab Press",kr="Thumbprint",Ir="Whiteboard",ya=[M,ce,oa,sa,la,fa,ua,ca,da,ma,ha,ga,pa,va,ba];De={},C(C(C(C(C(C(C(C(C(C(De,M,hr),ce,gr),oa,pr),sa,vr),la,br),fa,yr),ua,Ar),ca,xr),da,Sr),ma,Er),C(C(C(C(C(De,ha,wr),ga,_r),pa,Cr),va,kr),ba,Ir);var Pr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},Or={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},Nr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Tr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},Aa=["fak","fa-kit","fakd","fa-kit-duotone"],At={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Fr=["kit"],Lr="kit",Dr="kit-duotone",Mr="Kit",jr="Kit Duotone";C(C({},Lr,Mr),Dr,jr);var $r={kit:{"fa-kit":"fak"}},Rr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},zr={kit:{fak:"fa-kit"}},xt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Me,pe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Wr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Yr="classic",Hr="duotone",Ur="sharp",qr="sharp-duotone",Kr="chisel",Vr="etch",Br="jelly",Gr="jelly-duo",Xr="jelly-fill",Jr="notdog",Qr="notdog-duo",Zr="slab",en="slab-press",tn="thumbprint",an="whiteboard",rn="Classic",nn="Duotone",on="Sharp",sn="Sharp Duotone",ln="Chisel",fn="Etch",un="Jelly",cn="Jelly Duo",dn="Jelly Fill",mn="Notdog",hn="Notdog Duo",gn="Slab",pn="Slab Press",vn="Thumbprint",bn="Whiteboard";Me={},C(C(C(C(C(C(C(C(C(C(Me,Yr,rn),Hr,nn),Ur,on),qr,sn),Kr,ln),Vr,fn),Br,un),Gr,cn),Xr,dn),Jr,mn),C(C(C(C(C(Me,Qr,hn),Zr,gn),en,pn),tn,vn),an,bn);var yn="kit",An="kit-duotone",xn="Kit",Sn="Kit Duotone";C(C({},yn,xn),An,Sn);var En={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},wn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},He={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},_n=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],xa=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(Wr,_n),Cn=["solid","regular","light","thin","duotone","brands","semibold"],Sa=[1,2,3,4,5,6,7,8,9,10],kn=Sa.concat([11,12,13,14,15,16,17,18,19,20]),In=["aw","fw","pull-left","pull-right"],Pn=[].concat(Y(Object.keys(wn)),Cn,In,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",pe.GROUP,pe.SWAP_OPACITY,pe.PRIMARY,pe.SECONDARY]).concat(Sa.map(function(e){return"".concat(e,"x")})).concat(kn.map(function(e){return"w-".concat(e)})),On={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},q="___FONT_AWESOME___",Ue=16,Ea="fa",wa="svg-inline--fa",Q="data-fa-i2svg",qe="data-fa-pseudo-element",Nn="data-fa-pseudo-element-pending",it="data-prefix",ot="data-icon",St="fontawesome-i2svg",Tn="async",Fn=["HTML","HEAD","STYLE","SCRIPT"],_a=["::before","::after",":before",":after"],Ca=(function(){try{return!0}catch{return!1}})();function de(e){return new Proxy(e,{get:function(t,r){return r in t?t[r]:t[M]}})}var ka=c({},na);ka[M]=c(c(c(c({},{"fa-duotone":"duotone"}),na[M]),At.kit),At["kit-duotone"]);var Ln=de(ka),Ke=c({},Tr);Ke[M]=c(c(c(c({},{duotone:"fad"}),Ke[M]),xt.kit),xt["kit-duotone"]);var Et=de(Ke),Ve=c({},He);Ve[M]=c(c({},Ve[M]),zr.kit);var st=de(Ve),Be=c({},En);Be[M]=c(c({},Be[M]),$r.kit);de(Be);var Dn=cr,Ia="fa-layers-text",Mn=dr,jn=c({},Pr);de(jn);var $n=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],je=mr,Rn=[].concat(Y(Fr),Y(Pn)),le=B.FontAwesomeConfig||{};function zn(e){var a=N.querySelector("script["+e+"]");if(a)return a.getAttribute(e)}function Wn(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(N&&typeof N.querySelector=="function"){var Yn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Yn.forEach(function(e){var a=Oe(e,2),t=a[0],r=a[1],n=Wn(zn(t));n!=null&&(le[r]=n)})}var Pa={styleDefault:"solid",familyDefault:M,cssPrefix:Ea,replacementClass:wa,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};le.familyPrefix&&(le.cssPrefix=le.familyPrefix);var ne=c(c({},Pa),le);ne.autoReplaceSvg||(ne.observeMutations=!1);var b={};Object.keys(Pa).forEach(function(e){Object.defineProperty(b,e,{enumerable:!0,set:function(t){ne[e]=t,fe.forEach(function(r){return r(b)})},get:function(){return ne[e]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(a){ne.cssPrefix=a,fe.forEach(function(t){return t(b)})},get:function(){return ne.cssPrefix}});B.FontAwesomeConfig=b;var fe=[];function Hn(e){return fe.push(e),function(){fe.splice(fe.indexOf(e),1)}}var te=Ue,U={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Un(e){if(!(!e||!V)){var a=N.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=e;for(var t=N.head.childNodes,r=null,n=t.length-1;n>-1;n--){var o=t[n],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return N.head.insertBefore(a,r),e}}var qn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function wt(){for(var e=12,a="";e-- >0;)a+=qn[Math.random()*62|0];return a}function ie(e){for(var a=[],t=(e||[]).length>>>0;t--;)a[t]=e[t];return a}function lt(e){return e.classList?ie(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Oa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Kn(e){return Object.keys(e||{}).reduce(function(a,t){return a+"".concat(t,'="').concat(Oa(e[t]),'" ')},"").trim()}function Ne(e){return Object.keys(e||{}).reduce(function(a,t){return a+"".concat(t,": ").concat(e[t].trim(),";")},"")}function ft(e){return e.size!==U.size||e.x!==U.x||e.y!==U.y||e.rotate!==U.rotate||e.flipX||e.flipY}function Vn(e){var a=e.transform,t=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(t/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:f}}function Bn(e){var a=e.transform,t=e.width,r=t===void 0?Ue:t,n=e.height,o=n===void 0?Ue:n,i="";return ra?i+="translate(".concat(a.x/te-r/2,"em, ").concat(a.y/te-o/2,"em) "):i+="translate(calc(-50% + ".concat(a.x/te,"em), calc(-50% + ").concat(a.y/te,"em)) "),i+="scale(".concat(a.size/te*(a.flipX?-1:1),", ").concat(a.size/te*(a.flipY?-1:1),") "),i+="rotate(".concat(a.rotate,"deg) "),i}var Gn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Na(){var e=Ea,a=wa,t=b.cssPrefix,r=b.replacementClass,n=Gn;if(t!==e||r!==a){var o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(a),"g");n=n.replace(o,".".concat(t,"-")).replace(i,"--".concat(t,"-")).replace(s,".".concat(r))}return n}var _t=!1;function $e(){b.autoAddCss&&!_t&&(Un(Na()),_t=!0)}var Xn={mixout:function(){return{dom:{css:Na,insertCss:$e}}},hooks:function(){return{beforeDOMElementCreation:function(){$e()},beforeI2svg:function(){$e()}}}},K=B||{};K[q]||(K[q]={});K[q].styles||(K[q].styles={});K[q].hooks||(K[q].hooks={});K[q].shims||(K[q].shims=[]);var W=K[q],Ta=[],Fa=function(){N.removeEventListener("DOMContentLoaded",Fa),Ie=1,Ta.map(function(a){return a()})},Ie=!1;V&&(Ie=(N.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(N.readyState),Ie||N.addEventListener("DOMContentLoaded",Fa));function Jn(e){V&&(Ie?setTimeout(e,0):Ta.push(e))}function me(e){var a=e.tag,t=e.attributes,r=t===void 0?{}:t,n=e.children,o=n===void 0?[]:n;return typeof e=="string"?Oa(e):"<".concat(a," ").concat(Kn(r),">").concat(o.map(me).join(""),"</").concat(a,">")}function Ct(e,a,t){if(e&&e[a]&&e[a][t])return{prefix:a,iconName:t,icon:e[a][t]}}var Re=function(a,t,r,n){var o=Object.keys(a),i=o.length,s=t,l,f,m;for(r===void 0?(l=1,m=a[o[0]]):(l=0,m=r);l<i;l++)f=o[l],m=s(m,a[f],f,a);return m};function La(e){return Y(e).length!==1?null:e.codePointAt(0).toString(16)}function kt(e){return Object.keys(e).reduce(function(a,t){var r=e[t],n=!!r.icon;return n?a[r.iconName]=r.icon:a[t]=r,a},{})}function Ge(e,a){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.skipHooks,n=r===void 0?!1:r,o=kt(a);typeof W.hooks.addPack=="function"&&!n?W.hooks.addPack(e,kt(a)):W.styles[e]=c(c({},W.styles[e]||{}),o),e==="fas"&&Ge("fa",a)}var ue=W.styles,Qn=W.shims,Da=Object.keys(st),Zn=Da.reduce(function(e,a){return e[a]=Object.keys(st[a]),e},{}),ut=null,Ma={},ja={},$a={},Ra={},za={};function ei(e){return~Rn.indexOf(e)}function ti(e,a){var t=a.split("-"),r=t[0],n=t.slice(1).join("-");return r===e&&n!==""&&!ei(n)?n:null}var Wa=function(){var a=function(o){return Re(ue,function(i,s,l){return i[l]=Re(s,o,{}),i},{})};Ma=a(function(n,o,i){if(o[3]&&(n[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=i})}return n}),ja=a(function(n,o,i){if(n[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=i})}return n}),za=a(function(n,o,i){var s=o[2];return n[i]=i,s.forEach(function(l){n[l]=i}),n});var t="far"in ue||b.autoFetchSvg,r=Re(Qn,function(n,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!t&&(s="fas"),typeof i=="string"&&(n.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});$a=r.names,Ra=r.unicodes,ut=Te(b.styleDefault,{family:b.familyDefault})};Hn(function(e){ut=Te(e.styleDefault,{family:b.familyDefault})});Wa();function ct(e,a){return(Ma[e]||{})[a]}function ai(e,a){return(ja[e]||{})[a]}function J(e,a){return(za[e]||{})[a]}function Ya(e){return $a[e]||{prefix:null,iconName:null}}function ri(e){var a=Ra[e],t=ct("fas",e);return a||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function G(){return ut}var Ha=function(){return{prefix:null,iconName:null,rest:[]}};function ni(e){var a=M,t=Da.reduce(function(r,n){return r[n]="".concat(b.cssPrefix,"-").concat(n),r},{});return ya.forEach(function(r){(e.includes(t[r])||e.some(function(n){return Zn[r].includes(n)}))&&(a=r)}),a}function Te(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.family,r=t===void 0?M:t,n=Ln[r][e];if(r===ce&&!e)return"fad";var o=Et[r][e]||Et[r][n],i=e in W.styles?e:null,s=o||i||null;return s}function ii(e){var a=[],t=null;return e.forEach(function(r){var n=ti(b.cssPrefix,r);n?t=n:r&&a.push(r)}),{iconName:t,rest:a}}function It(e){return e.sort().filter(function(a,t,r){return r.indexOf(a)===t})}var Pt=xa.concat(Aa);function Fe(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.skipLookups,r=t===void 0?!1:t,n=null,o=It(e.filter(function(x){return Pt.includes(x)})),i=It(e.filter(function(x){return!Pt.includes(x)})),s=o.filter(function(x){return n=x,!ia.includes(x)}),l=Oe(s,1),f=l[0],m=f===void 0?null:f,d=ni(o),w=c(c({},ii(i)),{},{prefix:Te(m,{family:d})});return c(c(c({},w),fi({values:e,family:d,styles:ue,config:b,canonical:w,givenPrefix:n})),oi(r,n,w))}function oi(e,a,t){var r=t.prefix,n=t.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var o=a==="fa"?Ya(n):{},i=J(r,n);return n=o.iconName||i||n,r=o.prefix||r,r==="far"&&!ue.far&&ue.fas&&!b.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var si=ya.filter(function(e){return e!==M||e!==ce}),li=Object.keys(He).filter(function(e){return e!==M}).map(function(e){return Object.keys(He[e])}).flat();function fi(e){var a=e.values,t=e.family,r=e.canonical,n=e.givenPrefix,o=n===void 0?"":n,i=e.styles,s=i===void 0?{}:i,l=e.config,f=l===void 0?{}:l,m=t===ce,d=a.includes("fa-duotone")||a.includes("fad"),w=f.familyDefault==="duotone",x=r.prefix==="fad"||r.prefix==="fa-duotone";if(!m&&(d||w||x)&&(r.prefix="fad"),(a.includes("fa-brands")||a.includes("fab"))&&(r.prefix="fab"),!r.prefix&&si.includes(t)){var O=Object.keys(s).find(function(P){return li.includes(P)});if(O||f.autoFetchSvg){var k=Nr.get(t).defaultShortPrefixId;r.prefix=k,r.iconName=J(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||o==="fa")&&(r.prefix=G()||"fas"),r}var ui=(function(){function e(){ar(this,e),this.definitions={}}return nr(e,[{key:"add",value:function(){for(var t=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){t.definitions[s]=c(c({},t.definitions[s]||{}),i[s]),Ge(s,i[s]);var l=st[M][s];l&&Ge(l,i[s]),Wa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(o){var i=n[o],s=i.prefix,l=i.iconName,f=i.icon,m=f[2];t[s]||(t[s]={}),m.length>0&&m.forEach(function(d){typeof d=="string"&&(t[s][d]=f)}),t[s][l]=f}),t}}])})(),Ot=[],ae={},re={},ci=Object.keys(re);function di(e,a){var t=a.mixoutsTo;return Ot=e,ae={},Object.keys(re).forEach(function(r){ci.indexOf(r)===-1&&delete re[r]}),Ot.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(i){typeof n[i]=="function"&&(t[i]=n[i]),ke(n[i])==="object"&&Object.keys(n[i]).forEach(function(s){t[i]||(t[i]={}),t[i][s]=n[i][s]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(i){ae[i]||(ae[i]=[]),ae[i].push(o[i])})}r.provides&&r.provides(re)}),t}function Xe(e,a){for(var t=arguments.length,r=new Array(t>2?t-2:0),n=2;n<t;n++)r[n-2]=arguments[n];var o=ae[e]||[];return o.forEach(function(i){a=i.apply(null,[a].concat(r))}),a}function Z(e){for(var a=arguments.length,t=new Array(a>1?a-1:0),r=1;r<a;r++)t[r-1]=arguments[r];var n=ae[e]||[];n.forEach(function(o){o.apply(null,t)})}function X(){var e=arguments[0],a=Array.prototype.slice.call(arguments,1);return re[e]?re[e].apply(null,a):void 0}function Je(e){e.prefix==="fa"&&(e.prefix="fas");var a=e.iconName,t=e.prefix||G();if(a)return a=J(t,a)||a,Ct(Ua.definitions,t,a)||Ct(W.styles,t,a)}var Ua=new ui,mi=function(){b.autoReplaceSvg=!1,b.observeMutations=!1,Z("noAuto")},hi={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return V?(Z("beforeI2svg",a),X("pseudoElements2svg",a),X("i2svg",a)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.autoReplaceSvgRoot;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,Jn(function(){pi({autoReplaceSvgRoot:t}),Z("watch",a)})}},gi={icon:function(a){if(a===null)return null;if(ke(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:J(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var t=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=Te(a[0]);return{prefix:r,iconName:J(r,t)||t}}if(typeof a=="string"&&(a.indexOf("".concat(b.cssPrefix,"-"))>-1||a.match(Dn))){var n=Fe(a.split(" "),{skipLookups:!0});return{prefix:n.prefix||G(),iconName:J(n.prefix,n.iconName)||n.iconName}}if(typeof a=="string"){var o=G();return{prefix:o,iconName:J(o,a)||a}}}},z={noAuto:mi,config:b,dom:hi,parse:gi,library:Ua,findIconDefinition:Je,toHtml:me},pi=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.autoReplaceSvgRoot,r=t===void 0?N:t;(Object.keys(W.styles).length>0||b.autoFetchSvg)&&V&&b.autoReplaceSvg&&z.dom.i2svg({node:r})};function Le(e,a){return Object.defineProperty(e,"abstract",{get:a}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return me(r)})}}),Object.defineProperty(e,"node",{get:function(){if(V){var r=N.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function vi(e){var a=e.children,t=e.main,r=e.mask,n=e.attributes,o=e.styles,i=e.transform;if(ft(i)&&t.found&&!r.found){var s=t.width,l=t.height,f={x:s/l/2,y:.5};n.style=Ne(c(c({},o),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:n,children:a}]}function bi(e){var a=e.prefix,t=e.iconName,r=e.children,n=e.attributes,o=e.symbol,i=o===!0?"".concat(a,"-").concat(b.cssPrefix,"-").concat(t):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},n),{},{id:i}),children:r}]}]}function yi(e){var a=["aria-label","aria-labelledby","title","role"];return a.some(function(t){return t in e})}function dt(e){var a=e.icons,t=a.main,r=a.mask,n=e.prefix,o=e.iconName,i=e.transform,s=e.symbol,l=e.maskId,f=e.extra,m=e.watchable,d=m===void 0?!1:m,w=r.found?r:t,x=w.width,O=w.height,k=[b.replacementClass,o?"".concat(b.cssPrefix,"-").concat(o):""].filter(function(D){return f.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(f.classes).join(" "),P={children:[],attributes:c(c({},f.attributes),{},{"data-prefix":n,"data-icon":o,class:k,role:f.attributes.role||"img",viewBox:"0 0 ".concat(x," ").concat(O)})};!yi(f.attributes)&&!f.attributes["aria-hidden"]&&(P.attributes["aria-hidden"]="true"),d&&(P.attributes[Q]="");var I=c(c({},P),{},{prefix:n,iconName:o,main:t,mask:r,maskId:l,transform:i,symbol:s,styles:c({},f.styles)}),T=r.found&&t.found?X("generateAbstractMask",I)||{children:[],attributes:{}}:X("generateAbstractIcon",I)||{children:[],attributes:{}},L=T.children,j=T.attributes;return I.children=L,I.attributes=j,s?bi(I):vi(I)}function Nt(e){var a=e.content,t=e.width,r=e.height,n=e.transform,o=e.extra,i=e.watchable,s=i===void 0?!1:i,l=c(c({},o.attributes),{},{class:o.classes.join(" ")});s&&(l[Q]="");var f=c({},o.styles);ft(n)&&(f.transform=Bn({transform:n,width:t,height:r}),f["-webkit-transform"]=f.transform);var m=Ne(f);m.length>0&&(l.style=m);var d=[];return d.push({tag:"span",attributes:l,children:[a]}),d}function Ai(e){var a=e.content,t=e.extra,r=c(c({},t.attributes),{},{class:t.classes.join(" ")}),n=Ne(t.styles);n.length>0&&(r.style=n);var o=[];return o.push({tag:"span",attributes:r,children:[a]}),o}var ze=W.styles;function Qe(e){var a=e[0],t=e[1],r=e.slice(4),n=Oe(r,1),o=n[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(je.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(je.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(je.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:a,height:t,icon:i}}var xi={found:!1,width:512,height:512};function Si(e,a){!Ca&&!b.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(a,'" is missing.'))}function Ze(e,a){var t=a;return a==="fa"&&b.styleDefault!==null&&(a=G()),new Promise(function(r,n){if(t==="fa"){var o=Ya(e)||{};e=o.iconName||e,a=o.prefix||a}if(e&&a&&ze[a]&&ze[a][e]){var i=ze[a][e];return r(Qe(i))}Si(e,a),r(c(c({},xi),{},{icon:b.showMissingIcons&&e?X("missingIconAbstract")||{}:{}}))})}var Tt=function(){},et=b.measurePerformance&&ge&&ge.mark&&ge.measure?ge:{mark:Tt,measure:Tt},oe='FA "7.0.1"',Ei=function(a){return et.mark("".concat(oe," ").concat(a," begins")),function(){return qa(a)}},qa=function(a){et.mark("".concat(oe," ").concat(a," ends")),et.measure("".concat(oe," ").concat(a),"".concat(oe," ").concat(a," begins"),"".concat(oe," ").concat(a," ends"))},mt={begin:Ei,end:qa},be=function(){};function Ft(e){var a=e.getAttribute?e.getAttribute(Q):null;return typeof a=="string"}function wi(e){var a=e.getAttribute?e.getAttribute(it):null,t=e.getAttribute?e.getAttribute(ot):null;return a&&t}function _i(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(b.replacementClass)}function Ci(){if(b.autoReplaceSvg===!0)return ye.replace;var e=ye[b.autoReplaceSvg];return e||ye.replace}function ki(e){return N.createElementNS("http://www.w3.org/2000/svg",e)}function Ii(e){return N.createElement(e)}function Ka(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.ceFn,r=t===void 0?e.tag==="svg"?ki:Ii:t;if(typeof e=="string")return N.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(i){n.setAttribute(i,e.attributes[i])});var o=e.children||[];return o.forEach(function(i){n.appendChild(Ka(i,{ceFn:r}))}),n}function Pi(e){var a=" ".concat(e.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var ye={replace:function(a){var t=a[0];if(t.parentNode)if(a[1].forEach(function(n){t.parentNode.insertBefore(Ka(n),t)}),t.getAttribute(Q)===null&&b.keepOriginalSource){var r=N.createComment(Pi(t));t.parentNode.replaceChild(r,t)}else t.remove()},nest:function(a){var t=a[0],r=a[1];if(~lt(t).indexOf(b.replacementClass))return ye.replace(a);var n=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(s,l){return l===b.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}var i=r.map(function(s){return me(s)}).join(`
`);t.setAttribute(Q,""),t.innerHTML=i}};function Lt(e){e()}function Va(e,a){var t=typeof a=="function"?a:be;if(e.length===0)t();else{var r=Lt;b.mutateApproach===Tn&&(r=B.requestAnimationFrame||Lt),r(function(){var n=Ci(),o=mt.begin("mutate");e.map(n),o(),t()})}}var ht=!1;function Ba(){ht=!0}function tt(){ht=!1}var Pe=null;function Dt(e){if(yt&&b.observeMutations){var a=e.treeCallback,t=a===void 0?be:a,r=e.nodeCallback,n=r===void 0?be:r,o=e.pseudoElementsCallback,i=o===void 0?be:o,s=e.observeMutationsRoot,l=s===void 0?N:s;Pe=new yt(function(f){if(!ht){var m=G();ie(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Ft(d.addedNodes[0])&&(b.searchPseudoElements&&i(d.target),t(d.target)),d.type==="attributes"&&d.target.parentNode&&b.searchPseudoElements&&i([d.target],!0),d.type==="attributes"&&Ft(d.target)&&~$n.indexOf(d.attributeName))if(d.attributeName==="class"&&wi(d.target)){var w=Fe(lt(d.target)),x=w.prefix,O=w.iconName;d.target.setAttribute(it,x||m),O&&d.target.setAttribute(ot,O)}else _i(d.target)&&n(d.target)})}}),V&&Pe.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Oi(){Pe&&Pe.disconnect()}function Ni(e){var a=e.getAttribute("style"),t=[];return a&&(t=a.split(";").reduce(function(r,n){var o=n.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(r[i]=s.join(":").trim()),r},{})),t}function Ti(e){var a=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=Fe(lt(e));return n.prefix||(n.prefix=G()),a&&t&&(n.prefix=a,n.iconName=t),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=ai(n.prefix,e.innerText)||ct(n.prefix,La(e.innerText))),!n.iconName&&b.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function Fi(e){var a=ie(e.attributes).reduce(function(t,r){return t.name!=="class"&&t.name!=="style"&&(t[r.name]=r.value),t},{});return a}function Li(){return{iconName:null,prefix:null,transform:U,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Mt(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Ti(e),r=t.iconName,n=t.prefix,o=t.rest,i=Fi(e),s=Xe("parseNodeAttributes",{},e),l=a.styleParser?Ni(e):[];return c({iconName:r,prefix:n,transform:U,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var Di=W.styles;function Ga(e){var a=b.autoReplaceSvg==="nest"?Mt(e,{styleParser:!1}):Mt(e);return~a.extra.classes.indexOf(Ia)?X("generateLayersText",e,a):X("generateSvgReplacementMutation",e,a)}function Mi(){return[].concat(Y(Aa),Y(xa))}function jt(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!V)return Promise.resolve();var t=N.documentElement.classList,r=function(d){return t.add("".concat(St,"-").concat(d))},n=function(d){return t.remove("".concat(St,"-").concat(d))},o=b.autoFetchSvg?Mi():ia.concat(Object.keys(Di));o.includes("fa")||o.push("fa");var i=[".".concat(Ia,":not([").concat(Q,"])")].concat(o.map(function(m){return".".concat(m,":not([").concat(Q,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=ie(e.querySelectorAll(i))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=mt.begin("onTree"),f=s.reduce(function(m,d){try{var w=Ga(d);w&&m.push(w)}catch(x){Ca||x.name==="MissingIcon"&&console.error(x)}return m},[]);return new Promise(function(m,d){Promise.all(f).then(function(w){Va(w,function(){r("active"),r("complete"),n("pending"),typeof a=="function"&&a(),l(),m()})}).catch(function(w){l(),d(w)})})}function ji(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ga(e).then(function(t){t&&Va([t],a)})}function $i(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:Je(a||{}),n=t.mask;return n&&(n=(n||{}).icon?n:Je(n||{})),e(r,c(c({},t),{},{mask:n}))}}var Ri=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.transform,n=r===void 0?U:r,o=t.symbol,i=o===void 0?!1:o,s=t.mask,l=s===void 0?null:s,f=t.maskId,m=f===void 0?null:f,d=t.classes,w=d===void 0?[]:d,x=t.attributes,O=x===void 0?{}:x,k=t.styles,P=k===void 0?{}:k;if(a){var I=a.prefix,T=a.iconName,L=a.icon;return Le(c({type:"icon"},a),function(){return Z("beforeDOMElementCreation",{iconDefinition:a,params:t}),dt({icons:{main:Qe(L),mask:l?Qe(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:T,transform:c(c({},U),n),symbol:i,maskId:m,extra:{attributes:O,styles:P,classes:w}})})}},zi={mixout:function(){return{icon:$i(Ri)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=jt,t.nodeCallback=ji,t}}},provides:function(a){a.i2svg=function(t){var r=t.node,n=r===void 0?N:r,o=t.callback,i=o===void 0?function(){}:o;return jt(n,i)},a.generateSvgReplacementMutation=function(t,r){var n=r.iconName,o=r.prefix,i=r.transform,s=r.symbol,l=r.mask,f=r.maskId,m=r.extra;return new Promise(function(d,w){Promise.all([Ze(n,o),l.iconName?Ze(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var O=Oe(x,2),k=O[0],P=O[1];d([t,dt({icons:{main:k,mask:P},prefix:o,iconName:n,transform:i,symbol:s,maskId:f,extra:m,watchable:!0})])}).catch(w)})},a.generateAbstractIcon=function(t){var r=t.children,n=t.attributes,o=t.main,i=t.transform,s=t.styles,l=Ne(s);l.length>0&&(n.style=l);var f;return ft(i)&&(f=X("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),r.push(f||o.icon),{children:r,attributes:n}}}},Wi={mixout:function(){return{layer:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,o=n===void 0?[]:n;return Le({type:"layer"},function(){Z("beforeDOMElementCreation",{assembler:t,params:r});var i=[];return t(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers")].concat(Y(o)).join(" ")},children:i}]})}}}},Yi={mixout:function(){return{counter:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,o=n===void 0?[]:n,i=r.attributes,s=i===void 0?{}:i,l=r.styles,f=l===void 0?{}:l;return Le({type:"counter",content:t},function(){return Z("beforeDOMElementCreation",{content:t,params:r}),Ai({content:t.toString(),extra:{attributes:s,styles:f,classes:["".concat(b.cssPrefix,"-layers-counter")].concat(Y(o))}})})}}}},Hi={mixout:function(){return{text:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,o=n===void 0?U:n,i=r.classes,s=i===void 0?[]:i,l=r.attributes,f=l===void 0?{}:l,m=r.styles,d=m===void 0?{}:m;return Le({type:"text",content:t},function(){return Z("beforeDOMElementCreation",{content:t,params:r}),Nt({content:t,transform:c(c({},U),o),extra:{attributes:f,styles:d,classes:["".concat(b.cssPrefix,"-layers-text")].concat(Y(s))}})})}}},provides:function(a){a.generateLayersText=function(t,r){var n=r.transform,o=r.extra,i=null,s=null;if(ra){var l=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();i=f.width/l,s=f.height/l}return Promise.resolve([t,Nt({content:t.innerHTML,width:i,height:s,transform:n,extra:o,watchable:!0})])}}},Xa=new RegExp('"',"ug"),$t=[1105920,1112319],Rt=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),Or),On),Rr),at=Object.keys(Rt).reduce(function(e,a){return e[a.toLowerCase()]=Rt[a],e},{}),Ui=Object.keys(at).reduce(function(e,a){var t=at[a];return e[a]=t[900]||Y(Object.entries(t))[0][1],e},{});function qi(e){var a=e.replace(Xa,"");return La(Y(a)[0]||"")}function Ki(e){var a=e.getPropertyValue("font-feature-settings").includes("ss01"),t=e.getPropertyValue("content"),r=t.replace(Xa,""),n=r.codePointAt(0),o=n>=$t[0]&&n<=$t[1],i=r.length===2?r[0]===r[1]:!1;return o||i||a}function Vi(e,a){var t=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(a),n=isNaN(r)?"normal":r;return(at[t]||{})[n]||Ui[t]}function zt(e,a){var t="".concat(Nn).concat(a.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(t)!==null)return r();var o=ie(e.children),i=o.filter(function(p){return p.getAttribute(qe)===a})[0],s=B.getComputedStyle(e,a),l=s.getPropertyValue("font-family"),f=l.match(Mn),m=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(i&&!f)return e.removeChild(i),r();if(f&&d!=="none"&&d!==""){var w=s.getPropertyValue("content"),x=Vi(l,m),O=qi(w),k=f[0].startsWith("FontAwesome"),P=Ki(s),I=ct(x,O),T=I;if(k){var L=ri(O);L.iconName&&L.prefix&&(I=L.iconName,x=L.prefix)}if(I&&!P&&(!i||i.getAttribute(it)!==x||i.getAttribute(ot)!==T)){e.setAttribute(t,T),i&&e.removeChild(i);var j=Li(),D=j.extra;D.attributes[qe]=a,Ze(I,x).then(function(p){var v=dt(c(c({},j),{},{icons:{main:p,mask:Ha()},prefix:x,iconName:T,extra:D,watchable:!0})),A=N.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?e.insertBefore(A,e.firstChild):e.appendChild(A),A.outerHTML=v.map(function(_){return me(_)}).join(`
`),e.removeAttribute(t),r()}).catch(n)}else r()}else r()})}function Bi(e){return Promise.all([zt(e,"::before"),zt(e,"::after")])}function Gi(e){return e.parentNode!==document.head&&!~Fn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(qe)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Xi=function(a){return!!a&&_a.some(function(t){return a.includes(t)})},Ji=function(a){if(!a)return[];var t=new Set,r=a.split(/,(?![^()]*\))/).map(function(l){return l.trim()});r=r.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(f){return f.trim()})});var n=ve(r),o;try{for(n.s();!(o=n.n()).done;){var i=o.value;if(Xi(i)){var s=_a.reduce(function(l,f){return l.replace(f,"")},i);s!==""&&s!=="*"&&t.add(s)}}}catch(l){n.e(l)}finally{n.f()}return t};function Wt(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(V){var t;if(a)t=e;else if(b.searchPseudoElementsFullScan)t=e.querySelectorAll("*");else{var r=new Set,n=ve(document.styleSheets),o;try{for(n.s();!(o=n.n()).done;){var i=o.value;try{var s=ve(i.cssRules),l;try{for(s.s();!(l=s.n()).done;){var f=l.value,m=Ji(f.selectorText),d=ve(m),w;try{for(d.s();!(w=d.n()).done;){var x=w.value;r.add(x)}}catch(k){d.e(k)}finally{d.f()}}}catch(k){s.e(k)}finally{s.f()}}catch(k){b.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(k.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(k){n.e(k)}finally{n.f()}if(!r.size)return;var O=Array.from(r).join(", ");try{t=e.querySelectorAll(O)}catch{}}return new Promise(function(k,P){var I=ie(t).filter(Gi).map(Bi),T=mt.begin("searchPseudoElements");Ba(),Promise.all(I).then(function(){T(),tt(),k()}).catch(function(){T(),tt(),P()})})}}var Qi={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Wt,t}}},provides:function(a){a.pseudoElements2svg=function(t){var r=t.node,n=r===void 0?N:r;b.searchPseudoElements&&Wt(n)}}},Yt=!1,Zi={mixout:function(){return{dom:{unwatch:function(){Ba(),Yt=!0}}}},hooks:function(){return{bootstrap:function(){Dt(Xe("mutationObserverCallbacks",{}))},noAuto:function(){Oi()},watch:function(t){var r=t.observeMutationsRoot;Yt?tt():Dt(Xe("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ht=function(a){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(r,n){var o=n.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return r.flipX=!0,r;if(i&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(i){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},t)},eo={mixout:function(){return{parse:{transform:function(t){return Ht(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,r){var n=r.getAttribute("data-fa-transform");return n&&(t.transform=Ht(n)),t}}},provides:function(a){a.generateAbstractTransformGrouping=function(t){var r=t.main,n=t.transform,o=t.containerWidth,i=t.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),f="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),m="rotate(".concat(n.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(m)},w={transform:"translate(".concat(i/2*-1," -256)")},x={outer:s,inner:d,path:w};return{tag:"g",attributes:c({},x.outer),children:[{tag:"g",attributes:c({},x.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:c(c({},r.icon.attributes),x.path)}]}]}}}},We={x:0,y:0,width:"100%",height:"100%"};function Ut(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||a)&&(e.attributes.fill="black"),e}function to(e){return e.tag==="g"?e.children:[e]}var ao={hooks:function(){return{parseNodeAttributes:function(t,r){var n=r.getAttribute("data-fa-mask"),o=n?Fe(n.split(" ").map(function(i){return i.trim()})):Ha();return o.prefix||(o.prefix=G()),t.mask=o,t.maskId=r.getAttribute("data-fa-mask-id"),t}}},provides:function(a){a.generateAbstractMask=function(t){var r=t.children,n=t.attributes,o=t.main,i=t.mask,s=t.maskId,l=t.transform,f=o.width,m=o.icon,d=i.width,w=i.icon,x=Vn({transform:l,containerWidth:d,iconWidth:f}),O={tag:"rect",attributes:c(c({},We),{},{fill:"white"})},k=m.children?{children:m.children.map(Ut)}:{},P={tag:"g",attributes:c({},x.inner),children:[Ut(c({tag:m.tag,attributes:c(c({},m.attributes),x.path)},k))]},I={tag:"g",attributes:c({},x.outer),children:[P]},T="mask-".concat(s||wt()),L="clip-".concat(s||wt()),j={tag:"mask",attributes:c(c({},We),{},{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[O,I]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:to(w)},j]};return r.push(D,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(T,")")},We)}),{children:r,attributes:n}}}},ro={provides:function(a){var t=!1;B.matchMedia&&(t=B.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:c(c({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=c(c({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:c(c({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},i),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:c(c({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:c(c({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||r.push({tag:"path",attributes:c(c({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},no={hooks:function(){return{parseNodeAttributes:function(t,r){var n=r.getAttribute("data-fa-symbol"),o=n===null?!1:n===""?!0:n;return t.symbol=o,t}}}},io=[Xn,zi,Wi,Yi,Hi,Qi,Zi,eo,ao,ro,no];di(io,{mixoutsTo:z});z.noAuto;z.config;var oo=z.library;z.dom;z.parse;z.findIconDefinition;z.toHtml;var Ja=z.icon;z.layer;z.text;z.counter;/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var so={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z"]},lo={prefix:"fas",iconName:"cart-shopping",icon:[640,512,[128722,"shopping-cart"],"f07a","M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]},Ae={exports:{}},xe={exports:{}},Se={exports:{}};/*!
  * Bootstrap data.js v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var fo=Se.exports,qt;function uo(){return qt||(qt=1,(function(e,a){(function(t,r){e.exports=r()})(fo,(function(){const t=new Map;return{set(n,o,i){t.has(n)||t.set(n,new Map);const s=t.get(n);if(!s.has(o)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(o,i)},get(n,o){return t.has(n)&&t.get(n).get(o)||null},remove(n,o){if(!t.has(n))return;const i=t.get(n);i.delete(o),i.size===0&&t.delete(n)}}}))})(Se)),Se.exports}var Ee={exports:{}},se={exports:{}};/*!
  * Bootstrap index.js v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var co=se.exports,Kt;function he(){return Kt||(Kt=1,(function(e,a){(function(t,r){r(a)})(co,(function(t){const o="transitionend",i=u=>(u&&window.CSS&&window.CSS.escape&&(u=u.replace(/#([^\s"#']+)/g,(g,h)=>`#${CSS.escape(h)}`)),u),s=u=>u==null?`${u}`:Object.prototype.toString.call(u).match(/\s([a-z]+)/i)[1].toLowerCase(),l=u=>{do u+=Math.floor(Math.random()*1e6);while(document.getElementById(u));return u},f=u=>{if(!u)return 0;let{transitionDuration:g,transitionDelay:h}=window.getComputedStyle(u);const y=Number.parseFloat(g),S=Number.parseFloat(h);return!y&&!S?0:(g=g.split(",")[0],h=h.split(",")[0],(Number.parseFloat(g)+Number.parseFloat(h))*1e3)},m=u=>{u.dispatchEvent(new Event(o))},d=u=>!u||typeof u!="object"?!1:(typeof u.jquery<"u"&&(u=u[0]),typeof u.nodeType<"u"),w=u=>d(u)?u.jquery?u[0]:u:typeof u=="string"&&u.length>0?document.querySelector(i(u)):null,x=u=>{if(!d(u)||u.getClientRects().length===0)return!1;const g=getComputedStyle(u).getPropertyValue("visibility")==="visible",h=u.closest("details:not([open])");if(!h)return g;if(h!==u){const y=u.closest("summary");if(y&&y.parentNode!==h||y===null)return!1}return g},O=u=>!u||u.nodeType!==Node.ELEMENT_NODE||u.classList.contains("disabled")?!0:typeof u.disabled<"u"?u.disabled:u.hasAttribute("disabled")&&u.getAttribute("disabled")!=="false",k=u=>{if(!document.documentElement.attachShadow)return null;if(typeof u.getRootNode=="function"){const g=u.getRootNode();return g instanceof ShadowRoot?g:null}return u instanceof ShadowRoot?u:u.parentNode?k(u.parentNode):null},P=()=>{},I=u=>{u.offsetHeight},T=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,L=[],j=u=>{document.readyState==="loading"?(L.length||document.addEventListener("DOMContentLoaded",()=>{for(const g of L)g()}),L.push(u)):u()},D=()=>document.documentElement.dir==="rtl",p=u=>{j(()=>{const g=T();if(g){const h=u.NAME,y=g.fn[h];g.fn[h]=u.jQueryInterface,g.fn[h].Constructor=u,g.fn[h].noConflict=()=>(g.fn[h]=y,u.jQueryInterface)}})},v=(u,g=[],h=u)=>typeof u=="function"?u.call(...g):h,A=(u,g,h=!0)=>{if(!h){v(u);return}const S=f(g)+5;let E=!1;const F=({target:$})=>{$===g&&(E=!0,g.removeEventListener(o,F),v(u))};g.addEventListener(o,F),setTimeout(()=>{E||m(g)},S)},_=(u,g,h,y)=>{const S=u.length;let E=u.indexOf(g);return E===-1?!h&&y?u[S-1]:u[0]:(E+=h?1:-1,y&&(E=(E+S)%S),u[Math.max(0,Math.min(E,S-1))])};t.defineJQueryPlugin=p,t.execute=v,t.executeAfterTransition=A,t.findShadowRoot=k,t.getElement=w,t.getNextActiveElement=_,t.getTransitionDurationFromElement=f,t.getUID=l,t.getjQuery=T,t.isDisabled=O,t.isElement=d,t.isRTL=D,t.isVisible=x,t.noop=P,t.onDOMContentLoaded=j,t.parseSelector=i,t.reflow=I,t.toType=s,t.triggerTransitionEnd=m,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}))})(se,se.exports)),se.exports}/*!
  * Bootstrap event-handler.js v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var mo=Ee.exports,Vt;function Qa(){return Vt||(Vt=1,(function(e,a){(function(t,r){e.exports=r(he())})(mo,(function(t){const r=/[^.]*(?=\..*)\.|.*/,n=/\..*/,o=/::\d+$/,i={};let s=1;const l={mouseenter:"mouseover",mouseleave:"mouseout"},f=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function m(p,v){return v&&`${v}::${s++}`||p.uidEvent||s++}function d(p){const v=m(p);return p.uidEvent=v,i[v]=i[v]||{},i[v]}function w(p,v){return function A(_){return D(_,{delegateTarget:p}),A.oneOff&&j.off(p,_.type,v),v.apply(p,[_])}}function x(p,v,A){return function _(u){const g=p.querySelectorAll(v);for(let{target:h}=u;h&&h!==this;h=h.parentNode)for(const y of g)if(y===h)return D(u,{delegateTarget:h}),_.oneOff&&j.off(p,u.type,v,A),A.apply(h,[u])}}function O(p,v,A=null){return Object.values(p).find(_=>_.callable===v&&_.delegationSelector===A)}function k(p,v,A){const _=typeof v=="string",u=_?A:v||A;let g=L(p);return f.has(g)||(g=p),[_,u,g]}function P(p,v,A,_,u){if(typeof v!="string"||!p)return;let[g,h,y]=k(v,A,_);v in l&&(h=(Za=>function(ee){if(!ee.relatedTarget||ee.relatedTarget!==ee.delegateTarget&&!ee.delegateTarget.contains(ee.relatedTarget))return Za.call(this,ee)})(h));const S=d(p),E=S[y]||(S[y]={}),F=O(E,h,g?A:null);if(F){F.oneOff=F.oneOff&&u;return}const $=m(h,v.replace(r,"")),R=g?x(p,A,h):w(p,h);R.delegationSelector=g?A:null,R.callable=h,R.oneOff=u,R.uidEvent=$,E[$]=R,p.addEventListener(y,R,g)}function I(p,v,A,_,u){const g=O(v[A],_,u);g&&(p.removeEventListener(A,g,!!u),delete v[A][g.uidEvent])}function T(p,v,A,_){const u=v[A]||{};for(const[g,h]of Object.entries(u))g.includes(_)&&I(p,v,A,h.callable,h.delegationSelector)}function L(p){return p=p.replace(n,""),l[p]||p}const j={on(p,v,A,_){P(p,v,A,_,!1)},one(p,v,A,_){P(p,v,A,_,!0)},off(p,v,A,_){if(typeof v!="string"||!p)return;const[u,g,h]=k(v,A,_),y=h!==v,S=d(p),E=S[h]||{},F=v.startsWith(".");if(typeof g<"u"){if(!Object.keys(E).length)return;I(p,S,h,g,u?A:null);return}if(F)for(const $ of Object.keys(S))T(p,S,$,v.slice(1));for(const[$,R]of Object.entries(E)){const H=$.replace(o,"");(!y||v.includes(H))&&I(p,S,h,R.callable,R.delegationSelector)}},trigger(p,v,A){if(typeof v!="string"||!p)return null;const _=t.getjQuery(),u=L(v),g=v!==u;let h=null,y=!0,S=!0,E=!1;g&&_&&(h=_.Event(v,A),_(p).trigger(h),y=!h.isPropagationStopped(),S=!h.isImmediatePropagationStopped(),E=h.isDefaultPrevented());const F=D(new Event(v,{bubbles:y,cancelable:!0}),A);return E&&F.preventDefault(),S&&p.dispatchEvent(F),F.defaultPrevented&&h&&h.preventDefault(),F}};function D(p,v={}){for(const[A,_]of Object.entries(v))try{p[A]=_}catch{Object.defineProperty(p,A,{configurable:!0,get(){return _}})}return p}return j}))})(Ee)),Ee.exports}var we={exports:{}},_e={exports:{}};/*!
  * Bootstrap manipulator.js v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ho=_e.exports,Bt;function go(){return Bt||(Bt=1,(function(e,a){(function(t,r){e.exports=r()})(ho,(function(){function t(o){if(o==="true")return!0;if(o==="false")return!1;if(o===Number(o).toString())return Number(o);if(o===""||o==="null")return null;if(typeof o!="string")return o;try{return JSON.parse(decodeURIComponent(o))}catch{return o}}function r(o){return o.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`)}return{setDataAttribute(o,i,s){o.setAttribute(`data-bs-${r(i)}`,s)},removeDataAttribute(o,i){o.removeAttribute(`data-bs-${r(i)}`)},getDataAttributes(o){if(!o)return{};const i={},s=Object.keys(o.dataset).filter(l=>l.startsWith("bs")&&!l.startsWith("bsConfig"));for(const l of s){let f=l.replace(/^bs/,"");f=f.charAt(0).toLowerCase()+f.slice(1),i[f]=t(o.dataset[l])}return i},getDataAttribute(o,i){return t(o.getAttribute(`data-bs-${r(i)}`))}}}))})(_e)),_e.exports}/*!
  * Bootstrap config.js v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var po=we.exports,Gt;function vo(){return Gt||(Gt=1,(function(e,a){(function(t,r){e.exports=r(go(),he())})(po,(function(t,r){class n{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(i){return i=this._mergeConfigObj(i),i=this._configAfterMerge(i),this._typeCheckConfig(i),i}_configAfterMerge(i){return i}_mergeConfigObj(i,s){const l=r.isElement(s)?t.getDataAttribute(s,"config"):{};return{...this.constructor.Default,...typeof l=="object"?l:{},...r.isElement(s)?t.getDataAttributes(s):{},...typeof i=="object"?i:{}}}_typeCheckConfig(i,s=this.constructor.DefaultType){for(const[l,f]of Object.entries(s)){const m=i[l],d=r.isElement(m)?"element":r.toType(m);if(!new RegExp(f).test(d))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${l}" provided type "${d}" but expected type "${f}".`)}}}return n}))})(we)),we.exports}/*!
  * Bootstrap base-component.js v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var bo=xe.exports,Xt;function yo(){return Xt||(Xt=1,(function(e,a){(function(t,r){e.exports=r(uo(),Qa(),vo(),he())})(bo,(function(t,r,n,o){const i="5.3.8";class s extends n{constructor(f,m){super(),f=o.getElement(f),f&&(this._element=f,this._config=this._getConfig(m),t.set(this._element,this.constructor.DATA_KEY,this))}dispose(){t.remove(this._element,this.constructor.DATA_KEY),r.off(this._element,this.constructor.EVENT_KEY);for(const f of Object.getOwnPropertyNames(this))this[f]=null}_queueCallback(f,m,d=!0){o.executeAfterTransition(f,m,d)}_getConfig(f){return f=this._mergeConfigObj(f,this._element),f=this._configAfterMerge(f),this._typeCheckConfig(f),f}static getInstance(f){return t.get(o.getElement(f),this.DATA_KEY)}static getOrCreateInstance(f,m={}){return this.getInstance(f)||new this(f,typeof m=="object"?m:null)}static get VERSION(){return i}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(f){return`${f}${this.EVENT_KEY}`}}return s}))})(xe)),xe.exports}var Ce={exports:{}};/*!
  * Bootstrap selector-engine.js v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Ao=Ce.exports,Jt;function xo(){return Jt||(Jt=1,(function(e,a){(function(t,r){e.exports=r(he())})(Ao,(function(t){const r=o=>{let i=o.getAttribute("data-bs-target");if(!i||i==="#"){let s=o.getAttribute("href");if(!s||!s.includes("#")&&!s.startsWith("."))return null;s.includes("#")&&!s.startsWith("#")&&(s=`#${s.split("#")[1]}`),i=s&&s!=="#"?s.trim():null}return i?i.split(",").map(s=>t.parseSelector(s)).join(","):null},n={find(o,i=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(i,o))},findOne(o,i=document.documentElement){return Element.prototype.querySelector.call(i,o)},children(o,i){return[].concat(...o.children).filter(s=>s.matches(i))},parents(o,i){const s=[];let l=o.parentNode.closest(i);for(;l;)s.push(l),l=l.parentNode.closest(i);return s},prev(o,i){let s=o.previousElementSibling;for(;s;){if(s.matches(i))return[s];s=s.previousElementSibling}return[]},next(o,i){let s=o.nextElementSibling;for(;s;){if(s.matches(i))return[s];s=s.nextElementSibling}return[]},focusableChildren(o){const i=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(s=>`${s}:not([tabindex^="-"])`).join(",");return this.find(i,o).filter(s=>!t.isDisabled(s)&&t.isVisible(s))},getSelectorFromElement(o){const i=r(o);return i&&n.findOne(i)?i:null},getElementFromSelector(o){const i=r(o);return i?n.findOne(i):null},getMultipleElementsFromSelector(o){const i=r(o);return i?n.find(i):[]}};return n}))})(Ce)),Ce.exports}/*!
  * Bootstrap collapse.js v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var So=Ae.exports,Qt;function Eo(){return Qt||(Qt=1,(function(e,a){(function(t,r){e.exports=r(yo(),Qa(),xo(),he())})(So,(function(t,r,n,o){const i="collapse",l=".bs.collapse",f=".data-api",m=`show${l}`,d=`shown${l}`,w=`hide${l}`,x=`hidden${l}`,O=`click${l}${f}`,k="show",P="collapse",I="collapsing",T="collapsed",L=`:scope .${P} .${P}`,j="collapse-horizontal",D="width",p="height",v=".collapse.show, .collapse.collapsing",A='[data-bs-toggle="collapse"]',_={parent:null,toggle:!0},u={parent:"(null|element)",toggle:"boolean"};class g extends t{constructor(y,S){super(y,S),this._isTransitioning=!1,this._triggerArray=[];const E=n.find(A);for(const F of E){const $=n.getSelectorFromElement(F),R=n.find($).filter(H=>H===this._element);$!==null&&R.length&&this._triggerArray.push(F)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return _}static get DefaultType(){return u}static get NAME(){return i}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let y=[];if(this._config.parent&&(y=this._getFirstLevelChildren(v).filter(H=>H!==this._element).map(H=>g.getOrCreateInstance(H,{toggle:!1}))),y.length&&y[0]._isTransitioning||r.trigger(this._element,m).defaultPrevented)return;for(const H of y)H.hide();const E=this._getDimension();this._element.classList.remove(P),this._element.classList.add(I),this._element.style[E]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const F=()=>{this._isTransitioning=!1,this._element.classList.remove(I),this._element.classList.add(P,k),this._element.style[E]="",r.trigger(this._element,d)},R=`scroll${E[0].toUpperCase()+E.slice(1)}`;this._queueCallback(F,this._element,!0),this._element.style[E]=`${this._element[R]}px`}hide(){if(this._isTransitioning||!this._isShown()||r.trigger(this._element,w).defaultPrevented)return;const S=this._getDimension();this._element.style[S]=`${this._element.getBoundingClientRect()[S]}px`,o.reflow(this._element),this._element.classList.add(I),this._element.classList.remove(P,k);for(const F of this._triggerArray){const $=n.getElementFromSelector(F);$&&!this._isShown($)&&this._addAriaAndCollapsedClass([F],!1)}this._isTransitioning=!0;const E=()=>{this._isTransitioning=!1,this._element.classList.remove(I),this._element.classList.add(P),r.trigger(this._element,x)};this._element.style[S]="",this._queueCallback(E,this._element,!0)}_isShown(y=this._element){return y.classList.contains(k)}_configAfterMerge(y){return y.toggle=!!y.toggle,y.parent=o.getElement(y.parent),y}_getDimension(){return this._element.classList.contains(j)?D:p}_initializeChildren(){if(!this._config.parent)return;const y=this._getFirstLevelChildren(A);for(const S of y){const E=n.getElementFromSelector(S);E&&this._addAriaAndCollapsedClass([S],this._isShown(E))}}_getFirstLevelChildren(y){const S=n.find(L,this._config.parent);return n.find(y,this._config.parent).filter(E=>!S.includes(E))}_addAriaAndCollapsedClass(y,S){if(y.length)for(const E of y)E.classList.toggle(T,!S),E.setAttribute("aria-expanded",S)}static jQueryInterface(y){const S={};return typeof y=="string"&&/show|hide/.test(y)&&(S.toggle=!1),this.each(function(){const E=g.getOrCreateInstance(this,S);if(typeof y=="string"){if(typeof E[y]>"u")throw new TypeError(`No method named "${y}"`);E[y]()}})}}return r.on(document,O,A,function(h){(h.target.tagName==="A"||h.delegateTarget&&h.delegateTarget.tagName==="A")&&h.preventDefault();for(const y of n.getMultipleElementsFromSelector(this))g.getOrCreateInstance(y,{toggle:!1}).toggle()}),o.defineJQueryPlugin(g),g}))})(Ae)),Ae.exports}Eo();oo.add(lo,so);const wo=Ja({prefix:"fas",iconName:"cart-shopping"}).html,_o=Ja({prefix:"fas",iconName:"heart"}).html;document.getElementById("cart").innerHTML=wo;document.getElementById("heart").innerHTML=_o;
