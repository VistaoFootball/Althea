"use strict";(self.webpackChunkdroow=self.webpackChunkdroow||[]).push([[198],{3556:function(e,s,r){var a=r(1413),t=r(5987),n=(r(2791),r(1363)),i=r(3174),c=r(2815),o=r(5118),l=r(184),d=["className"];s.Z=function(e){var s=e.className,r=(0,t.Z)(e,d),u=(0,c.oc)();return(0,l.jsxs)("div",(0,a.Z)((0,a.Z)({className:(0,o.gU)("control-nav",s)},r),{},{children:[(0,l.jsx)("div",{className:"prev-container",onClick:function(){return u.slidePrev()},children:(0,l.jsx)(n.G,{icon:i.EyR})}),(0,l.jsx)("div",{className:"next-container",onClick:function(){return u.slideNext()},children:(0,l.jsx)(n.G,{icon:i.yOZ})})]}))}},8743:function(e,s,r){r.d(s,{Z:function(){return C}});var a=r(1413),t=r(9439),n=r(2791),i=r(7265),c=r(7152),o=r(599),l=(r(4676),r(2815)),d=r(6488),u=r(9153),v=r(5191),h=r(5987),p=r(184),f=["data"];var m=function(e){var s=e.data,r=(0,h.Z)(e,f);return(0,p.jsx)("div",{className:"nav-slider",children:(0,p.jsx)(l.tq,(0,a.Z)((0,a.Z)({modules:[c.Qr],slidesPerView:3,centeredSlides:!0,touchRatio:.2,slideToClickedSlide:!0,direction:"vertical",resistanceRatio:.65,spaceBetween:10},r),{},{children:s.map((function(e,s){return(0,p.jsxs)(l.o5,{children:[(0,p.jsx)(d.Z,{className:"image-bg",src:e.srcSlider?e.srcSlider:e.src,video:e.video,imageOnly:!0,overlay:2,height:"100%"}),(0,p.jsx)("div",{className:"content",children:(0,p.jsx)("p",{children:(s<=9?"0":"")+(s+1)})})]},s)}))}))})},x=r(8111),g=r(1986),Z=(r(6084),r(3168));function j(e,s){var r=e.data,a=e.activeClass;(0,Z.$)().t;return(0,p.jsx)("div",{className:"dsn-slider-content hero-content",children:r.map((function(e,r){return(0,p.jsxs)("div",{className:"slide-content ".concat(a===r?"dsn-active":""),ref:s,children:[e.category&&(0,p.jsx)(x.Z,{category:e.category,separate:", "}),e.title&&(0,p.jsx)("h1",{className:"title-heading",children:(0,p.jsx)(g.Z,{to:(0,i.p8)(e),children:e.title})}),e.description&&(0,p.jsx)("div",{className:"dsn-description mt-30",children:e.description})]},r)}))})}var w=n.forwardRef(j),N=r(3556),y=(r(6162),r(4856)),S=r(5118);var P=function(e){var s=e.className;return(0,p.jsxs)("div",{className:(0,S.gU)("main-social",s),children:[(0,p.jsx)("div",{className:"social-icon",children:(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 23.3 23.2",children:(0,p.jsx)("path",{d:"M19.4 15.5c-1.2 0-2.4.6-3.1 1.7L7.8 12v-.7l8.5-5.1c.7 1 1.9 1.6 3.1 1.6 2.1 0 3.9-1.7 3.9-3.9S21.6 0 19.4 0s-3.9 1.7-3.9 3.9v.4L7 9.3c-1.3-1.7-3.7-2-5.4-.8s-2.1 3.7-.8 5.4c.7 1 1.9 1.6 3.1 1.6s2.4-.6 3.1-1.6l8.5 5v.4c0 2.1 1.7 3.9 3.9 3.9s3.9-1.7 3.9-3.9c0-2.1-1.7-3.8-3.9-3.8zm0-13.6c1.1 0 1.9.9 1.9 1.9s-.9 1.9-1.9 1.9-1.9-.7-1.9-1.8.8-2 1.9-2zM3.9 13.6c-1.1 0-1.9-.9-1.9-1.9s.9-1.9 1.9-1.9 1.9.9 1.9 1.9-.8 1.9-1.9 1.9zm15.5 7.8c-1.1 0-1.9-.9-1.9-1.9s.9-1.9 1.9-1.9 1.9.9 1.9 1.9-.8 1.8-1.9 1.9z"})})}),(0,p.jsx)(y.Z,{className:"social-network"})]})};function b(e){var s=e.className,r=e.typeBg,h=e.parallax,f=e.tag,x=void 0===f?"div":f,g=(0,i.jq)(),Z=(0,u.S)(),j=(0,t.Z)(Z,2),y=j[0],b=j[1],C=(0,n.useState)(0),k=(0,t.Z)(C,2),q=k[0],A=k[1],I=(0,n.useState)(null),R=(0,t.Z)(I,2),B=R[0],z=R[1],E=(0,n.useState)(null),O=(0,t.Z)(E,2),T=O[0],U=O[1],V=(0,n.useRef)(),G=(0,n.useRef)(),L=o.ZP.timeline();(0,n.useEffect)((function(){var e=o.ZP.utils.selector(V);o.ZP.from(e(".post-info span "),{y:-15,stagger:.1,autoAlpha:0}),o.ZP.from(e(".btn-default , .dsn-description"),{y:15,autoAlpha:0,stagger:.1,onComplete:function(){o.ZP.set(e(".btn-default , .dsn-description"),{clearProps:!0})}}),y.current.forEach((function(e){var s=e.querySelector(".title-heading");s&&v.ZP.Char(s)})),h&&o.ZP.to(G.current,(0,a.Z)((0,a.Z)({},h),{},{ease:"none",scrollTrigger:{trigger:V.current,start:"top top",scrub:!0}}))}),[]);var M={modules:[c.VS,c.Qr],spaceBetween:50,slidesPerView:1,parallax:!0,speed:1500,onInit:function(e){e.slides.forEach((function(e){var s=e.querySelector(".swiper-slide:not(.swiper-slide-active) video");s&&s.pause()}))},onSlideChange:function(e){var s=function(e){var s=e.slides[e.previousIndex].getAttribute("data-dsn-id"),r=e.slides[e.activeIndex].getAttribute("data-dsn-id");return[r,s,o.ZP.utils.selector(y.current[r]),o.ZP.utils.selector(y.current[s])]}(e),r=(0,t.Z)(s,4),n=r[0],i=r[1],c=r[2],l=r[3],d=[c(".title-heading .char"),l(".title-heading .char")],u=d[0],v=d[1],h=i<n,p={show:{autoAlpha:1,x:0,stagger:.05,ease:"elastic.inOut",rotation:0,scale:1,yoyo:!0},hide:{autoAlpha:0,x:h?"-40%":"40%",stagger:.05,ease:"elastic.inOut",yoyo:!0,rotation:8,scale:1.1}};!function(e){var s=e.slides[e.activeIndex].querySelector("video"),r=e.slides[e.previousIndex].querySelector("video");s&&s.play(),r&&r.pause()}(e),L.progress(1),(L=new o.ZP.timeline).fromTo(h?v:v.reverse(),1,p.show,(0,a.Z)((0,a.Z)({},p.hide),{},{onComplete:function(){return A(Number.parseInt(n,10))}})),L.fromTo(h?u.reverse():u,1.2,p.hide,p.show,"-=.1")},onSwiper:z,controller:{control:T}};return(0,p.jsxs)(x,{className:(0,S.gU)("root-slider half-content v-dark-head background-main",s),ref:V,children:[(0,p.jsx)("div",{className:"bg-image hero-img ".concat(r),ref:G,children:(0,p.jsxs)(l.tq,(0,a.Z)((0,a.Z)({},M),{},{grabCursor:!0,children:[g.map((function(e,s){return(0,p.jsx)(l.o5,{className:"overflow","data-dsn-id":s,children:(0,p.jsx)(d.Z,{className:"dsn-swiper-parallax-transform",src:e.src,video:e.video,alt:e.title,overlay:e.overlay,height:"100%","data-swiper-parallax":"30%"})},s)})),(0,p.jsx)("div",{className:"control-num",children:(0,p.jsx)("span",{className:"sup",children:(q<=9?"0":"")+(q+1)})}),(0,p.jsx)(N.Z,{})]}))}),(0,p.jsx)(w,{data:g,ref:b,activeClass:q}),(0,p.jsx)(m,{data:g,speed:M.speed,onSwiper:U,controller:{control:B}}),(0,p.jsx)(P,{})]})}b.defaultProps={parallax:{yPercent:30}};var C=b},8449:function(e,s,r){r.r(s);r(2791);var a=r(8743),t=r(184);s.default=function(){return(0,t.jsx)(a.Z,{tag:"header",typeBg:"padding-image"})}}}]);
//# sourceMappingURL=198.37d6b2e6.chunk.js.map