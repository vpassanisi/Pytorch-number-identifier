(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),i=(n(12),n(2)),l=n.n(i),s=n(5),m=n(6),u=Object(a.createContext)(),d=n(1),E=function(e,t){switch(t.type){case"GETHEADPHONES_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{headphones:t.payload});case"GETHEADPHONES_FAIL":return Object(d.a)(Object(d.a)({},e),{},{error:t.payload});case"CLEARHPERRORS":return Object(d.a)(Object(d.a)({},e),{},{error:null});default:return e}},p=function(e){var t=Object(a.useReducer)(E,{headphones:[],error:null}),n=Object(m.a)(t,2),c=n[0],o=n[1],i=function(){var e=Object(s.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/headphones",{method:"GET"});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.next=9,t.status;case 9:e.sent?o({type:"GETHEADPHONES_SUCCESS",payload:n}):(o({type:"GETHEADPHONES_FAIL",payload:"Something went wrong"}),setTimeout((function(){d()}),5e3)),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),o({type:"GETHEADPHONES_FAIL",payload:"Something went wrong"}),setTimeout((function(){d()}),5e3);case 18:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),d=function(){o({type:"CLEARHPERRORS"})};return r.a.createElement(u.Provider,{value:{headphones:c.headphones,error:c.error,getHeadphones:i}},e.children)},f=function(e){var t=e.headphone;return r.a.createElement("div",{className:"bg-white rounded shadow m-4 p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"},r.a.createElement("img",{className:"h-auto w-auto mx-auto my-auto",src:t.picture_URL,alt:""}),r.a.createElement("div",{className:"border-2 border-black rounded shadow mt-2 p-4"},r.a.createElement("div",{className:"font-medium"},"Make: ",r.a.createElement("div",{className:"font-hairline inline"},t.make)),r.a.createElement("div",{className:"font-medium"},"Model: ",r.a.createElement("div",{className:"font-hairline inline"},t.model)),r.a.createElement("div",{className:"font-medium"},"Driver: ",r.a.createElement("div",{className:"font-hairline inline"},t.driver)),r.a.createElement("div",{className:"font-medium"},"Ergonomics:"," ",r.a.createElement("div",{className:"font-hairline inline"},t.erg," ear")),r.a.createElement("div",{className:"font-medium"},"Impedance:"," ",r.a.createElement("div",{className:"font-hairline inline"},t.impedance,"\u03a9")),r.a.createElement("div",{className:"font-medium"},"Sensitivity:"," ",r.a.createElement("div",{className:"font-hairline inline"},t.sensitivity," dB")),r.a.createElement("a",{className:"bg-blue-500 rounded inline-block w-full text-center p-1 text-white mt-2 shadow",href:function(){var e=new Blob([t.cc1_2],{type:"text/plain",endings:"native"});return window.URL.createObjectURL(e)}(),download:"".concat(t.model," - CC1.2 + House.txt")},"download CC1.2")))},h=function(){var e=Object(a.useContext)(u),t=e.headphones,n=e.getHeadphones,c=t.map((function(e,t){return r.a.createElement(f,{key:t,index:t,headphone:e})}));return Object(a.useEffect)((function(){n()}),[]),Object(a.useEffect)((function(){console.log(t)}),[t]),r.a.createElement("section",{className:"flex flex-row flex-wrap items-center justify-center w-90p mx-auto max-w-screen-lg"},c)};var v=function(){return r.a.createElement(p,null,r.a.createElement(h,null))};o.a.render(r.a.createElement(v,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.8011169d.chunk.js.map