(this["webpackJsonpmajiba-ui"]=this["webpackJsonpmajiba-ui"]||[]).push([[0],{139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(0),i=a(11),r=a.n(i),o=a(16),s=a(9),l=a(7),j=a(48),u=a(14),b=Object(o.b)({key:"user-state",default:{token:void 0,authenticated:!1,givenName:void 0}}),d=Object(o.b)({key:"majiba-state",default:void 0}),p=a(204),O=a(205),h=a(206),m=a(40);var f=function(){var e=Object(o.c)(b),t=Object(l.a)(e,1)[0].givenName;return t?Object(n.jsx)(m.a,{variant:"h3",children:"Bienvenue ".concat(t)}):Object(n.jsx)(m.a,{variant:"h3",children:"Vous n'\xeates pas authentifi\xe9."})};var x=function(){return Object(n.jsx)(f,{})},v=a(99),k=a(188),y=a(87),g=a.n(y),C=a(88),_=a.n(C),w=Object(v.a)({palette:{primary:{main:g.a[500]},secondary:{main:_.a[500]}}}),A=(Object(k.a)((function(e){return{formulaire:{padding:"10px 24px",margin:"10px 30px"},button:{padding:"6px"}}})),w),N=a(189),z=a(92),T=a.n(z),M=a(93),E=a.n(M),D=a(91),P=a.n(D),R=a(193),S=a(194),W=a(195),B=a(190),I=a(209),V=a(192),q=a(191),L=a(89),H=a.n(L)()("".concat(window.location.origin,"/majiba-ui/keycloak-qf.json")),J=a(90),G=a.n(J);var K=function(e){var t=G.a.create();return t.interceptors.request.use((function(t){return function(e){return function(t){return Object(s.a)(Object(s.a)({},t),{},{headers:{Authorization:"Bearer ".concat(e)},"Content-Type":"application/json;charset=utf-8",Accept:"application/json;charset=utf-8"})}}(e)(t)})),t};var U=function(){return"https://api.majiba.insee.fr"},F=a(28),Q=a.n(F),X=a(57),Y=a(26),Z="https://gitlab.insee.fr",$=Object({NODE_ENV:"production",PUBLIC_URL:"/majiba-ui",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_MAJIBA_DV:"https://majiba-api.developpement.insee.fr",REACT_APP_MAJIBA_QF:"https://majiba-api.recette.insee.fr",REACT_APP_MAJIBA_PROD:"https://api.majiba.insee.fr",REACT_APP_GITLAB_URI:"https://gitlab.insee.fr"}).REACT_APP_GITLAB_TOKEN,ee="liste_majibav2groupe.csv";function te(e,t,a){return"1"===e?"application/tomcat":"1"===t?"application/batch":"1"===a?"application/javascript":"application/unknow"}function ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce((function(e,t,a){if(a>0){var n=t.split(";");return[].concat(Object(Y.a)(e),[{name:n[0],module:n[1],kind:te(n[2],n[3],n[4]),env:n[5],ad:n[6]}])}return[]}),[])}function ne(){return(ne=Object(X.a)(Q.a.mark((function e(){var t,a,n,c,i;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/api/v4/projects/834/repository/files/".concat(ee,"/blame?ref=master"),e.prev=1,e.next=4,fetch("".concat(Z).concat(t),{method:"GET",headers:{"Content-Type":"application/text","PRIVATE-TOKEN":$}});case 4:return a=e.sent,e.next=7,a.json();case 7:return n=e.sent,c=Object(l.a)(n,1),i=c[0].lines,e.abrupt("return",ae(i));case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}var ce=function(){return ne.apply(this,arguments)};var ie=function(e){var t=e.width,a=void 0===t?48:t,c=e.height,i=void 0===c?48:c;return Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:i,version:"1.1",viewBox:"0 0 16.933 16.933",children:Object(n.jsxs)("g",{transform:"translate(0 -280.067)",children:[Object(n.jsx)("circle",{cx:"8.467",cy:"288.533",r:"8.467",fill:"#ffc107",fillOpacity:"1",stroke:"none",strokeDasharray:"none",strokeMiterlimit:"4",strokeOpacity:"0",strokeWidth:"0.288",opacity:"1"}),Object(n.jsx)("path",{fill:"red",fillOpacity:"1",stroke:"none",strokeDasharray:"none",strokeMiterlimit:"4",strokeOpacity:"0",strokeWidth:"0.291",d:"M14.053 285.62a4.98 4.98 0 01-.507 2.196l-9.493-2.196a5 5 0 0110 0z",opacity:"1"}),Object(n.jsx)("g",{transform:"matrix(1.2079 0 0 1.13889 -23.443 -35.515)",children:Object(n.jsx)("path",{fill:"#000",fillOpacity:"1",stroke:"none",strokeDasharray:"none",strokeMiterlimit:"4",strokeOpacity:"0",strokeWidth:"0.265",d:"M23.116 283.392c1.427 1.137 5.375 1.787 6.645 1.371l-1.043 5.108c-1.198 1.213-5.974.142-6.61-1.471z",opacity:"1"})}),Object(n.jsx)("g",{transform:"matrix(1.20445 .09141 -.08619 1.13562 -6.478 -32.466)",children:Object(n.jsxs)("g",{fillOpacity:"1",stroke:"none",children:[Object(n.jsx)("ellipse",{cx:"60.685",cy:"276.968",fill:"#000",strokeDasharray:"none",strokeMiterlimit:"4",strokeOpacity:"0",strokeWidth:"0.265",opacity:"1",rx:"5.262",ry:"1.62",transform:"rotate(6.967 38.753 47.892)"}),Object(n.jsx)("ellipse",{cx:"61.446",cy:"277.179",fill:"#483e37",strokeDasharray:"none",strokeMiterlimit:"4",strokeOpacity:"0",strokeWidth:"0.162",opacity:"1",rx:"3.263",ry:"0.979",transform:"matrix(.993 .11816 -.1245 .99222 6.095 -4.347)"}),Object(n.jsx)("path",{fill:"#ffc107",strokeLinecap:"butt",strokeLinejoin:"miter",strokeOpacity:"1",strokeWidth:"0.265",d:"M30.214 278.358l-.232-3.13 1.15-.093 1.454 1.927 1.163-2.138 1.114-.09.285 3.984c-.286.078-.591.122-1.11.152l-.144-2.014-.935 1.467-.47.038-1.212-1.294.107 1.546c-.387-.078-.779-.221-1.17-.355z"})]})}),Object(n.jsx)("path",{fill:"#ffc107",fillOpacity:"0",stroke:"none",strokeDasharray:"none",strokeMiterlimit:"4",strokeOpacity:"0",strokeWidth:"0.095",d:"M7.515 296.904a8.581 8.581 0 01-6.264-4.032c-1.407-2.317-1.58-5.337-.449-7.833 1.058-2.334 3.246-4.109 5.83-4.731.806-.194 2.697-.218 3.482-.044 3.512.778 6.108 3.483 6.667 6.948.156.967.066 2.643-.19 3.533-.682 2.382-2.205 4.23-4.392 5.33-1.333.67-3.24 1.007-4.684.829zm3.278-1.965c.217-.113.42-.245.449-.293.045-.074 1.28-5.638 1.281-5.774 0-.026-.69-.05-1.535-.051-2.16-.006-4.1-.41-5.726-1.19-.433-.209-.8-.366-.816-.349-.053.059-1.183 5.477-1.183 5.675 0 .451 1.214 1.288 2.504 1.727 1.128.384 2.042.517 3.355.489 1.094-.024 1.332-.057 1.67-.234zm2.402-6.634c1.756-.202 2.385-.707 1.904-1.529-.238-.405-1.316-1.088-2.373-1.503l-.911-.359-.027-1.045-.026-1.045-.635.002-.635.002-.502.762c-.326.494-.547.744-.631.712-.072-.027-.384-.078-.694-.114-.53-.06-.596-.096-1.113-.62-.545-.55-.555-.555-1.097-.555H5.91v.945l-.543.002c-.65.002-1.69.21-2.094.419-2.137 1.105 2.332 3.456 7.456 3.921 1.18.108 1.565.108 2.467.005z",opacity:"1"}),Object(n.jsx)("path",{fill:"#ffc107",fillOpacity:"0",stroke:"none",strokeDasharray:"none",strokeMiterlimit:"4",strokeOpacity:"0",strokeWidth:"0.095",d:"M7.466 296.905c-1.998-.28-3.934-1.271-5.192-2.66-1.554-1.715-2.307-3.818-2.193-6.13.062-1.262.287-2.16.817-3.26 1.717-3.558 5.788-5.461 9.599-4.487 1.506.386 2.619 1 3.76 2.076 1.711 1.612 2.613 3.72 2.613 6.106 0 4.49-3.459 8.123-7.985 8.385-.467.027-1.106.014-1.42-.03zm3.31-1.988l.472-.234.586-2.646c.323-1.455.6-2.761.615-2.902l.027-.257-1.559-.04c-2.243-.056-4.022-.434-5.66-1.202-.437-.205-.804-.361-.816-.348-.043.052-1.178 5.515-1.178 5.67 0 .257.687.863 1.393 1.229 1.386.718 2.75 1.02 4.467.986 1.04-.02 1.24-.051 1.654-.256zm3.118-6.725c.902-.19 1.37-.537 1.37-1.017 0-.518-1.308-1.448-2.855-2.029l-.594-.223-.027-1.054-.027-1.053-.633.028-.633.027-.488.71c-.269.389-.546.707-.616.706a11.52 11.52 0 01-.705-.078c-.54-.072-.613-.113-1.131-.637-.548-.554-.558-.559-1.1-.559H5.91v.917l-.827.059c-1.544.11-2.487.584-2.342 1.176.245 1 2.719 2.192 5.815 2.802 2.146.422 4.025.501 5.339.225z",opacity:"1"}),Object(n.jsx)("path",{fill:"#ffc107",fillOpacity:"0",stroke:"none",strokeDasharray:"none",strokeMiterlimit:"4",strokeOpacity:"0",strokeWidth:"0.095",d:"M7.466 296.905c-1.998-.28-3.934-1.271-5.192-2.66-1.554-1.715-2.307-3.818-2.193-6.13.062-1.262.287-2.16.817-3.26 1.717-3.558 5.788-5.461 9.599-4.487 1.506.386 2.619 1 3.76 2.076 1.711 1.612 2.613 3.72 2.613 6.106 0 4.49-3.459 8.123-7.985 8.385-.467.027-1.106.014-1.42-.03zm3.31-1.988l.472-.234.586-2.646c.323-1.455.6-2.761.615-2.902l.027-.257-1.559-.04c-2.243-.056-4.022-.434-5.66-1.202-.437-.205-.804-.361-.816-.348-.043.052-1.178 5.515-1.178 5.67 0 .257.687.863 1.393 1.229 1.386.718 2.75 1.02 4.467.986 1.04-.02 1.24-.051 1.654-.256zm3.118-6.725c.902-.19 1.37-.537 1.37-1.017 0-.518-1.308-1.448-2.855-2.029l-.594-.223-.027-1.054-.027-1.053-.633.028-.633.027-.488.71c-.269.389-.546.707-.616.706a11.52 11.52 0 01-.705-.078c-.54-.072-.613-.113-1.131-.637-.548-.554-.558-.559-1.1-.559H5.91v.917l-.827.059c-1.544.11-2.487.584-2.342 1.176.245 1 2.719 2.192 5.815 2.802 2.146.422 4.025.501 5.339.225z",opacity:"1"}),Object(n.jsx)("path",{fill:"red",fillOpacity:"1",stroke:"none",strokeDasharray:"none",strokeMiterlimit:"4",strokeOpacity:"0",strokeWidth:"0.265",d:"M4.479 287.237c2.025 1.046 4.577 1.853 8.026 1.561l-.163.775c-3.008.195-5.89-.173-8.024-1.603z",opacity:"1"})]})})},re=Object(k.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function oe(){var e=re(),t=Object(o.c)(b),a=Object(l.a)(t,1)[0].authenticated,i=Object(c.useState)(!1),r=Object(l.a)(i,2),s=r[0],u=r[1],d=Object(c.useCallback)((function(){a?H.logout({redirectUri:"".concat(window.location.origin,"/")}):H.login({redirectUri:"".concat(window.location.origin,"/").concat(window.location.pathname)})}),[a]);return Object(n.jsxs)(N.a,{position:"static",children:[Object(n.jsxs)(B.a,{children:[Object(n.jsx)(q.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return u(!0)},children:Object(n.jsx)(ie,{})}),Object(n.jsx)(m.a,{variant:"h6",className:e.title,children:"Majiba api - renouvellement de jeton d'acc\xe8s."}),Object(n.jsx)(V.a,{onClick:d,color:"inherit",children:a?"logout":"login"})]}),Object(n.jsxs)(I.a,{anchor:"left",open:s,onClose:function(){return u(!1)},children:[Object(n.jsxs)(R.a,{button:!0,component:j.b,to:"/majiba-ui/accueil",onClick:function(){return u(!1)},children:[Object(n.jsx)(S.a,{children:Object(n.jsx)(P.a,{})}),Object(n.jsx)(W.a,{primary:"Accueil"})]}),Object(n.jsxs)(R.a,{button:!0,component:j.b,to:"/majiba-ui/display-apps",onClick:function(){return u(!1)},children:[Object(n.jsx)(S.a,{children:Object(n.jsx)(T.a,{})}),Object(n.jsx)(W.a,{primary:"Consulter la liste des applications"})]}),Object(n.jsxs)(R.a,{button:!0,component:j.b,to:"/majiba-ui/renew-token",onClick:function(){return u(!1)},children:[Object(n.jsx)(S.a,{children:Object(n.jsx)(E.a,{})}),Object(n.jsx)(W.a,{primary:"Renouveler un jeton"})]})]})]})}var se=a(102),le=a(207),je=a(94),ue=a.n(je),be=a(196);var de=function(e){return e.status?Object(n.jsx)("div",{className:ue()("waiting"),children:Object(n.jsx)("div",{className:"circular",children:Object(n.jsx)(be.a,{color:"secondary"})})}):null},pe=a(208);var Oe=function(e){switch(e.status){case 666:return Object(n.jsx)(pe.a,{severity:"success",className:"notification",children:"Le Diable s'en est m\xeal\xe9 !"});case 200:return Object(n.jsx)(pe.a,{severity:"success",className:"notification",children:"Votre jeton est renouvel\xe9 !"});case 400:return Object(n.jsx)(pe.a,{severity:"error",className:"notification",children:"Cette application n'\xe9xiste pas !"});case 403:case 401:return Object(n.jsx)(pe.a,{severity:"error",className:"notification",children:"Vous n'avez pas les droits n\xe9cessaires !"});default:return null}},he=a(197),me=a(201),fe=a(199),xe=a(200),ve=a(198);var ke=function(e){var t=e.open,a=e.onConfirm,c=e.onCancel;return Object(n.jsxs)(he.a,{open:t,onClose:c,"aria-labelledby":"form-dialog-title",children:[Object(n.jsx)(ve.a,{id:"form-dialog-title",children:"Renouveler votre token"}),Object(n.jsx)(fe.a,{children:Object(n.jsx)(xe.a,{children:"En renouvelant votre token, vous r\xe9voquerez imm\xe9diatement le pr\xe9c\xe9dent. Voulez-vous continuer ?"})}),Object(n.jsxs)(me.a,{children:[Object(n.jsx)(V.a,{variant:"contained",onClick:c,color:"primary",children:"Annuler"}),Object(n.jsx)(V.a,{variant:"contained",onClick:a,color:"secondary",children:"Renouveler"})]})]})},ye=a(203),ge=a(202),Ce=a(210),_e=a(211),we=a(97),Ae=a.n(we),Ne=a(96);var ze=function(e){var t=e.value;return t?Object(n.jsxs)(ge.a,{fullWidth:!0,variant:"outlined",className:"token",children:[Object(n.jsx)(Ce.a,{htmlFor:"outlined-adornment-amount",children:"Token"}),Object(n.jsx)(_e.a,{id:"token",label:"Token",type:"text",disabled:!0,variant:"outlined",value:t,endAdornment:Object(n.jsx)(ye.a,{position:"end",children:Object(n.jsx)(q.a,{"aria-label":"copy",title:"copy",onClick:function(){Object(Ne.a)(t)},children:Object(n.jsx)(Ae.a,{})})})})]}):null};a(139);function Te(e){return e.length}function Me(){return Object(n.jsx)(m.a,{component:"div",variant:"body1",children:"Vous n'\xeates pas encore authentifi\xe9."})}var Ee=function(){var e=Object(o.c)(b),t=Object(l.a)(e,1)[0],a=t.token,i=t.authenticated,r=Object(c.useState)(!1),s=Object(l.a)(r,2),j=s[0],u=s[1],d=Object(c.useState)(""),p=Object(l.a)(d,2),O=p[0],h=p[1],f=Object(c.useState)(!1),x=Object(l.a)(f,2),v=x[0],k=x[1],y=Object(c.useState)(void 0),g=Object(l.a)(y,2),C=g[0],_=g[1],w=Object(c.useState)(void 0),A=Object(l.a)(w,2),N=A[0],z=A[1],T=Object(c.useCallback)((function(e){h(e.target.value)}),[]),M=Object(c.useCallback)((function(e){e.stopPropagation();var t=function(e){return"".concat(U(),"/application/").concat(e.replace(/\s+/g,""),"/token")}(O);k(!0),u(!1),_(void 0),z(void 0),K(a).get(t).then((function(e){var t=e.data.token;z(t),k(!1),_(200)})).catch((function(e){var t=e.response;if(k(!1),t){var a=t.status;_(a)}else _(666)}))}),[O,a]);return i?Object(n.jsxs)(se.a,{elevation:2,children:[Object(n.jsx)(de,{status:v}),Object(n.jsx)(m.a,{component:"div",variant:"h4",children:"Demande de renouvellement de jeton."}),N?Object(n.jsxs)("form",{className:"majiba-demande-token",noValidate:!0,autoComplete:"off",children:[Object(n.jsx)(m.a,{component:"p",variant:"body1",className:"warning",children:"N'oubliez de copier votre jeton dans le presse papier, \xe0 l'aide du bouton dans le champ texte avant de quitter cette page."}),Object(n.jsx)(ze,{value:N})]}):Object(n.jsxs)("form",{className:"majiba-demande-token",noValidate:!0,autoComplete:"off",children:[Object(n.jsx)(m.a,{component:"p",variant:"body1",className:"warning",children:"En renouvelant le jeton de votre application aupr\xe8s de l'API MAJIBA, vous r\xe9voquez automatiquement le pr\xe9c\xe9dant, s'il existe. Votre proc\xe9dure de d\xe9ploiement automatique ne fonctionnera alors correctement que lorsque vous lui aurez adjoint le nouveau jeton."}),Object(n.jsx)(le.a,{id:"application-name",label:"Nom de l'application",variant:"outlined",onChange:T,className:"form-field"}),Object(n.jsx)(V.a,{variant:"contained",color:"primary",className:"form-button",disabled:!Te(O),onClick:function(){return u(!0)},children:"Soumettre"}),Object(n.jsx)(ke,{open:j,onConfirm:M,onCancel:function(){return u(!1)}}),Object(n.jsx)(Oe,{status:C})]})]}):Object(n.jsx)(Me,{})},De=a(98);a(140);var Pe=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],i=t[1],r=Object(o.c)(d),j=Object(l.a)(r,2),u=j[0],b=j[1],p=Object(c.useCallback)((function(){i(!0),ce().then((function(e){i(!1),b(function(e){return{header:[{label:"Nom",path:"name",__width:100,resizable:!0},{label:"module",path:"Module",__width:100,resizable:!0},{label:"Type",path:"kind",__width:200,resizable:!0},{label:"Groupe AD",path:"ad",__width:300,resizable:!0}],rows:e.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{__height:30})}))}}(e))})).catch((function(){i(!1)}))}),[b]);return console.log(u),Object(n.jsxs)(se.a,{elevation:2,children:[Object(n.jsx)(de,{status:a}),Object(n.jsx)(V.a,{variant:"contained",color:"primary",className:"form-button",onClick:p,children:u&&u.rows.length?"Rafraichir la liste":"Charger la liste"}),u&&u.rows.length?Object(n.jsx)("div",{className:"table-apps-container",children:Object(n.jsx)(De.ReactLargeTable,{data:u,headerHeight:50,className:"simple-theme"})}):null]})};a(141);var Re=function(){var e=Object(o.c)(b),t=Object(l.a)(e,2),a=t[0],i=t[1];return Object(c.useEffect)((function(){a.authenticated||H.init().success((function(e){e&&i(Object(s.a)(Object(s.a)({},a),{},{token:H.token,givenName:H.tokenParsed.given_name,authenticated:!0}))})).error((function(e){console.log(e)}))}),[i,a]),Object(n.jsxs)(p.a,{theme:A,children:[Object(n.jsx)(O.a,{}),Object(n.jsxs)(j.a,{children:[Object(n.jsx)(oe,{}),Object(n.jsx)(h.a,{role:"main",component:"main",fixed:!0,className:"container",children:Object(n.jsxs)(u.d,{children:[Object(n.jsx)(u.b,{exact:!0,path:"/majiba-ui/accueil",component:x}),Object(n.jsx)(u.b,{exact:!0,path:"/majiba-ui/renew-token",component:Ee}),Object(n.jsx)(u.b,{exact:!0,path:"/majiba-ui/display-apps",component:Pe}),Object(n.jsx)(u.b,{path:"/",component:function(){return Object(n.jsx)(u.a,{to:"/majiba-ui/accueil"})}})]})})]})]})};r.a.render(Object(n.jsx)(o.a,{children:Object(n.jsx)(Re,{})}),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.7fd0756c.chunk.js.map