(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n(5),i=n.n(r),s=n(2),u=n(7),j=n(4),o=n.n(j),d=n(6),l=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,a,c,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=kf9mG8WLsxVOtcgFfIs0ook80JeB76so"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){e.id;var t=e.title,n=e.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(a.jsx)("img",{src:n,alt:t}),Object(a.jsx)("p",{children:t})]})},p=function(e){var t=e.categorie,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){l(e).then((function(e){r({data:e,loading:!1})}))}),[e]),a}(t),r=n.data,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"card animate__animated animate__fadeIn",children:t}),i&&Object(a.jsx)("p",{className:"card animate__animated animate__flash",children:"loading..."}),Object(a.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(a.jsx)(f,Object(u.a)({},e),e.id)}))})]})},b=function(e){var t=e.setCategorie,n=Object(c.useState)(""),r=Object(s.a)(n,2),i=r[0],u=r[1];return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t([i]),u(""))},children:[Object(a.jsx)("h1",{children:i}),Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){u(e.target.value)}})]})},m=function(){var e=Object(c.useState)(["One PUnch"]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifEXpertApp"}),Object(a.jsx)(b,{setCategorie:r}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(e){return Object(a.jsx)(p,{categorie:e},e)}))})]})};n(14);i.a.render(Object(a.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e0605f73.chunk.js.map