(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),i=(n(9),n(1)),l={border:"1px solid #ccc",background:"#fff",fontSize:"2em",padding:15,margin:5,width:200},u={fontSize:"5em",display:"block"};function s(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(i.a)(r,2),f=s[0],d=s[1];return Object(a.useEffect)(function(){if(f){var e=Date.now()-n,t=setInterval(function(){c(Date.now()-e)},0);return function(){return clearInterval(t)}}},[f]),o.a.createElement("div",null,o.a.createElement("label",{style:u},n,"ms"),o.a.createElement("button",{onClick:function(){d(function(e){return!e})},style:l},f?"Stop":"Start"),o.a.createElement("button",{onClick:function(){d(!1),setTimeout(function(){c(0)},0)},style:l},"Clear"))}var f=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),n=t[0],c=t[1];return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("label",null,o.a.createElement("input",{checked:n,type:"checkbox",onChange:function(e){return c(e.target.checked)}})," ","\u5c55\u793a\u5012\u8ba1\u65f6"),n?o.a.createElement(s,null):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.0b3efb8a.chunk.js.map