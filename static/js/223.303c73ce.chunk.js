"use strict";(self.webpackChunkdroow=self.webpackChunkdroow||[]).push([[223],{1852:function(e,t,r){var n=r(1413),a=(r(2791),r(2766)),s=r(3168),o=r(184);t.Z=function(e){var t=Object.assign({},e),r=(0,s.$)().t;return(0,o.jsx)(a.Z,(0,n.Z)((0,n.Z)({to:"/contact",text:r("we-are-hiring-1")},t),{},{children:r("we-are-hiring")}))}},570:function(e,t,r){var n=r(2791),a=r(8111),s=r(1986),o=r(6488),c=r(7265),i=r(5118),l=r(184);function u(e){var t=e.portoDetails,r=e.textButton,u=e.imageOnly,f=e.className,d=(0,n.useRef)();return(0,n.useEffect)((function(){var e=d.current.querySelector("video");if(e){e.pause();var t=d.current,r=function(){return e.play()},n=function(){return e.pause()};return t.addEventListener("mouseenter",r),t.addEventListener("mouseleave",n),function(){e&&(t.removeEventListener("mouseenter",r),t.removeEventListener("mouseleave",n))}}})),(0,l.jsxs)("div",{className:(0,i.gU)("portfolio-item text-center v-dark-head",f),ref:d,children:[(0,l.jsx)("div",{className:"item-border"}),(0,l.jsx)("div",{className:"inner-img",children:(0,l.jsx)(o.Z,{className:"dsn-swiper-parallax-transform",src:t.src,video:t.video,alt:t.title,overlay:t.overlay,height:"100%",imageOnly:u})}),(0,l.jsxs)("div",{className:"info-text",children:[t.category&&(0,l.jsx)(a.Z,{category:t.category,separate:", "}),t.title&&(0,l.jsx)("h4",{className:"title-block",children:(0,l.jsx)(s.Z,{to:(0,c.p8)(t),children:t.title})}),(0,l.jsx)(s.Z,{className:"btn-portfolio",to:(0,c.p8)(t),children:r})]})]})}t.Z=n.memo(u)},3928:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(1413),a=r(3433),s=r(9439),o=r(5987),c=r(2791),i=(r(3814),r(570)),l=r(7265),u=r(3147),f=r(5401),d=r(5118),m=r(184);var p=function(e){var t=e.className,r=e.categories,n=e.actionFilter,a=(0,c.useState)(0),o=(0,s.Z)(a,2),i=o[0],l=o[1],u=function(e){return Number.parseInt(e,10)===i?"active":""},p=function(e,t,r){l(t+1),n(r)};return(0,m.jsxs)("div",{className:(0,d.gU)("dsn-filtering",t),children:[(0,m.jsx)(f.Z,{className:"text-center",from:{y:10,opacity:0},children:"Portfolio"}),(0,m.jsx)("div",{className:"filtering-wrap",children:(0,m.jsxs)("div",{className:"filtering",children:[(0,m.jsx)("div",{className:"selector"}),(0,m.jsx)("button",{type:"button",className:u(0),onClick:function(e){return p(0,-1,"")},children:"All"}),r&&r.map((function(e,t){return(0,m.jsx)("button",{type:"button",className:u(t+1),onClick:function(r){return p(0,t,".".concat(e.toLowerCase()))},children:e},t)}))]})})]})},x=r(6596),j=r.n(x),v=["className"],h=function(e){var t=e.className,r=(0,o.Z)(e,v),f=(0,l.jq)(),x=(0,c.useRef)(),h=(0,c.useState)("*"),g=(0,s.Z)(h,2),Z=g[0],y=g[1],N=(0,c.useRef)(),b=new Set;return f.map((function(e){return"object"===typeof e.category?e.category.map((function(e){return b.add(e)})):b.add(e.category)})),(0,c.useEffect)((function(){return x.current=new(j())(N.current,{itemSelector:".portfolio-item"}),function(){x.current.destroy()}})),(0,c.useEffect)((function(){x.current.arrange({filter:Z})}),[Z]),(0,m.jsxs)("section",{className:(0,d.gU)("dsn-portfolio port-classic",t),children:[(0,m.jsx)(p,{className:"mb-80",categories:(0,a.Z)(b),actionFilter:y}),(0,m.jsx)(u.Z,(0,n.Z)((0,n.Z)({},r),{},{ref:N,children:f.map((function(e,t){return(0,m.jsx)(i.Z,{className:"object"===typeof e.category?e.category.join(" ").toLowerCase():e.category.toLowerCase(),portoDetails:e,textButton:"Voir"},t)}))}))]})}},7223:function(e,t,r){r.r(t);var n=r(2791),a=r(7262),s=r(4169),o=r(3928),c=r(1852),i=r(7678),l=r(4270),u=r(184);t.default=function(e){return(0,u.jsxs)(n.Fragment,{children:[(0,u.jsx)(l.q,{children:(0,u.jsx)("title",{children:"Althea - Portfolio & Agency React Template "})}),(0,u.jsx)(s.Z,{description:"Our Work",children:"portfolio"}),(0,u.jsx)(a.Z,{children:(0,u.jsx)(o.Z,{col:2,colGap:50,colGapTablet:30,rowGap:50,rowGapTablet:30})}),(0,u.jsx)(c.Z,{className:"section-margin"}),(0,u.jsx)(i.Z,{})]})}},3814:function(){}}]);
//# sourceMappingURL=223.303c73ce.chunk.js.map