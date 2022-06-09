"use strict";(self.webpackChunkdroow=self.webpackChunkdroow||[]).push([[143],{7594:function(e,s,r){var t=r(1413),a=r(9439),i=r(5987),n=r(2791),c=r(9153),l=r(599),o=r(2908),d=r(184),u=["duration","ease","delay","start","end","scrub","markers","stagger","children","tag"];function h(e){var s=e.duration,r=e.ease,o=e.delay,h=e.start,m=e.end,g=e.scrub,p=e.markers,f=e.stagger,x=e.children,v=e.tag,j=void 0===v?"div":v,b=(0,i.Z)(e,u),N=(0,c.S)(),Z=(0,a.Z)(N,2),y=Z[0],w=Z[1],k=(0,n.useRef)();return(0,n.useEffect)((function(){if(k.current&&(y.current=k.current.children),y.current){var e=l.ZP.effects.fade(y.current,{from:{y:20,opacity:0},to:{stagger:f,y:0,opacity:1,delay:o,onComplete:function(){g||(e.scrollTrigger.kill(),e.kill())}},ease:r,start:h,end:m,scrub:g,markers:p,duration:s});return function(){e.scrollTrigger&&e.scrollTrigger.kill(),e.kill()}}}),[]),(0,d.jsx)(n.Fragment,{children:"function"===typeof x?x(w):(0,d.jsx)(j,(0,t.Z)((0,t.Z)({},b),{},{ref:k,children:x}))})}h.defaultProps={ease:o.eJ.easeOut.config(1.7),start:"75%",end:"100%",scrub:!1,markers:!1,duration:.8,stagger:.2,delay:0},s.Z=h},9310:function(e,s,r){var t=r(1413),a=r(9439),i=r(5987),n=r(2791),c=r(184),l=["src","readAsBlob","targetRef"];function o(e){var s=e.src,r=e.readAsBlob,o=e.targetRef,d=(0,i.Z)(e,l),u=(0,n.useState)(),h=(0,a.Z)(u,2),m=h[0],g=h[1];return(0,n.useEffect)((function(){fetch(s).then((function(e){return r?e.blob():e.url})).then((function(e){if(r){var s=new FileReader;s.readAsDataURL(e),s.onload=function(){g(this.result)}}else g(e)}))}),[s,r]),(0,c.jsx)("img",(0,t.Z)((0,t.Z)({src:m,alt:d.alt||"Althea Image",style:{opacity:m?1:0},width:"100%",height:"100%"},d),{},{ref:o}))}o.defaultProps={readAsBlob:!0},s.Z=o},2232:function(e,s,r){r.d(s,{Z:function(){return d}});var t=r(1413),a=r(5987),i=(r(2791),r(5849)),n=r(7262),c=r(5118),l=r(184),o=["className","children"],d=function(e){var s=e.className,r=e.children,d=(0,a.Z)(e,o);return(0,l.jsxs)("div",{className:(0,c.gU)("box-right-seat v-dark-head",s),children:[(0,l.jsx)(i.Z,(0,t.Z)((0,t.Z)({},d),{},{heightMobile:"60vh"})),(0,l.jsx)(n.Z,{className:"box-text p-relative","data-overlay":5,children:(0,l.jsx)("div",{className:"inner-box",children:r})})]})}},1474:function(e,s,r){var t=r(1413),a=r(5987),i=(r(2791),r(1558),r(1363)),n=r(3174),c=r(3147),l=r(5118),o=r(9310),d=r(184),u=["className"],h=[{src:"assets/img/logo/1.png",title:"Wordpress"},{src:"assets/img/logo/2.png",title:"PHP"},{src:"assets/img/logo/3.png",title:"Lavarel"},{src:"assets/img/logo/4.png",title:"Drupal"},{src:"assets/img/logo/5.png",title:"Shopify"},{src:"assets/img/logo/6.png",title:"Magento"}];s.Z=function(e){var s=e.className,r=(0,a.Z)(e,u);return(0,d.jsx)(c.Z,(0,t.Z)((0,t.Z)({className:(0,l.gU)("wrapper-brand",s)},r),{},{children:h.map((function(e,s){return(0,d.jsxs)("div",{className:"brand-item background-section",children:[(0,d.jsx)("div",{className:"box-img",children:(0,d.jsx)(o.Z,{src:e.src,alt:""})}),(0,d.jsx)("div",{className:"info",children:(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)("div",{className:"icon",children:(0,d.jsx)(i.G,{icon:n.r8p})}),(0,d.jsx)("div",{className:"entry",children:(0,d.jsxs)("div",{children:[(0,d.jsx)("h5",{className:"mb-20",children:e.title}),(0,d.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",children:e.linkText})]})})]})})]},s)}))}))}},8660:function(e,s,r){var t=r(1413),a=r(5987),i=r(2791),n=r(6472),c=r(7262),l=r(3174),o=r(1363),d=r(599),u=r(5118),h=r(184),m=["className","description","children"];s.Z=function(e){var s=e.className,r=e.description,g=e.children,p=(0,a.Z)(e,m),f=(0,i.useRef)(),x=(0,i.useRef)();return(0,i.useEffect)((function(){d.ZP.fromTo(x.current,{yPercent:60,autoAlpha:.05},{yPercent:100,autoAlpha:0,scrollTrigger:{trigger:f.current,start:"top top",scrub:!0}})})),(0,h.jsxs)("header",{className:(0,u.gU)(n.Z.hn,s),ref:f,children:[(0,h.jsxs)(c.Z,(0,t.Z)((0,t.Z)({},p),{},{children:[(0,h.jsx)("h1",{className:"title-heading ".concat(n.Z.ht),children:g}),r&&(0,h.jsx)("p",{className:"mt-30 m-w570",style:{letterSpacing:"1.2px"},children:r}),(0,h.jsxs)("a",{href:"#0",className:"view-case ".concat(n.Z.sd," mt-30"),children:["Scroll ",(0,h.jsx)(o.G,{icon:l.r5q})]})]})),(0,h.jsx)("div",{className:n.Z.bcd,ref:x})]})}},9337:function(e,s,r){r(2791);var t=r(5118),a=r(184);s.Z=function(e){var s=e.className,r=e.tag,i=void 0===r?"h2":r,n=e.children,c=e.description;return(0,a.jsxs)("div",{className:(0,t.gU)("section-heading",s),children:[c&&(0,a.jsx)("p",{className:"title-sub",children:c}),n&&(0,a.jsx)(i,{className:"title-section",children:n})]})}},1852:function(e,s,r){var t=r(1413),a=(r(2791),r(2766)),i=r(3168),n=r(184);s.Z=function(e){var s=Object.assign({},e),r=(0,i.$)().t;return(0,n.jsx)(a.Z,(0,t.Z)((0,t.Z)({to:"/contact",text:r("we-are-hiring-1")},s),{},{children:r("we-are-hiring")}))}},5849:function(e,s,r){r.d(s,{Z:function(){return g}});var t=r(1413),a=r(9439),i=r(5987),n=r(2791),c=r(599),l=r(1681),o=r(5118),d=r(9310),u=r(184),h=["speed","parallax","overlay","height","heightTable","heightMobile","triggerHook","animationActive","caption","className","parallaxFrom"];function m(e){var s=e.speed,r=e.parallax,m=e.overlay,g=e.height,p=e.heightTable,f=e.heightMobile,x=e.triggerHook,v=e.animationActive,j=e.caption,b=e.className,N=e.parallaxFrom,Z=(0,i.Z)(e,h),y=(0,n.useRef)(),w=(0,n.useRef)(),k=(0,n.useRef)(),T=(0,n.useState)(""),P=(0,a.Z)(T,2),A=P[0],E=P[1];return(0,n.useEffect)((function(){if(Z.src){"bottom"===x&&c.p8.set(w.current,{height:"+=".concat(s,"%"),yPercent:"-=".concat(s)}),"center"===x&&c.p8.set(w.current,{height:"+=".concat(s/2,"%"),yPercent:"-=".concat(s/2)}),N&&c.p8.set(w.current,N),v&&(k.current=l.i.create({trigger:y.current,start:"top bottom",onEnter:function(e){return E("dsn-active")}}));var e=c.p8.to(w.current,(0,t.Z)((0,t.Z)({},r),{},{yPercent:"top"===x?s:0,force3D:!0,ease:"none",scrollTrigger:{trigger:y.current,start:"top ".concat(x),scrub:!0}}));return function(){var s;e.scrollTrigger.kill(),e.kill(),null===(s=k.current)||void 0===s||s.kill()}}}),[]),Z.src&&(0,u.jsxs)("div",{className:(0,o.gU)("dsn-parallax-img",v&&"dsn-animate",A,b),"data-overlay":m,ref:y,style:{"--height":g,"--height-table":p,"--height-mobile":f},children:[(0,u.jsx)(d.Z,(0,t.Z)((0,t.Z)({className:"cover-bg-img p-absolute"},Z),{},{targetRef:w})),j&&(0,u.jsx)("div",{className:"cap",children:(0,u.jsx)("span",{children:j})})]})}m.defaultProps={height:"100vh",heightTable:"80vh",heightMobile:"50vh",overlay:0,triggerHook:"bottom",animationActive:!0,speed:30,parallax:{}};var g=m},6243:function(e,s,r){var t=r(1413),a=r(5987),i=(r(2791),r(3434),r(3147)),n=r(5118),c=r(184),l=["className"],o=[{title:"DIGITAL PRODUCTS",description:"As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities."},{title:"UI-UX DESIGN",description:"As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities."},{title:"WEB DEVELOPMENT",description:"As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities."},{title:"WEB DEVELOPMENT",description:"As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities."}];s.Z=function(e){var s=e.className,r=(0,a.Z)(e,l);return(0,c.jsx)(i.Z,(0,t.Z)((0,t.Z)({className:(0,n.gU)("dsn-services service-tow",s)},r),{},{children:o.map((function(e,s){return(0,c.jsxs)("div",{className:"service-item",children:[(0,c.jsx)("div",{className:"line-before mb-20"}),(0,c.jsx)("h4",{className:"title-block",children:e.title}),(0,c.jsx)("p",{className:"mt-15 dsn-auto",children:e.description})]},s)}))}))}},3556:function(e,s,r){var t=r(1413),a=r(5987),i=(r(2791),r(1363)),n=r(3174),c=r(2815),l=r(5118),o=r(184),d=["className"];s.Z=function(e){var s=e.className,r=(0,a.Z)(e,d),u=(0,c.oc)();return(0,o.jsxs)("div",(0,t.Z)((0,t.Z)({className:(0,l.gU)("control-nav",s)},r),{},{children:[(0,o.jsx)("div",{className:"prev-container",onClick:function(){return u.slidePrev()},children:(0,o.jsx)(i.G,{icon:n.EyR})}),(0,o.jsx)("div",{className:"next-container",onClick:function(){return u.slideNext()},children:(0,o.jsx)(i.G,{icon:n.yOZ})})]}))}},4878:function(e,s,r){r.d(s,{Z:function(){return h}});var t=r(1413),a=r(5987),i=(r(2791),r(184));var n=function(e){var s=e.src,r=e.title,t=e.subTitle;return(0,i.jsxs)("div",{className:"team-item",children:[(0,i.jsx)("div",{className:"box-img",children:(0,i.jsx)("img",{src:s,alt:r})}),(0,i.jsx)("div",{className:"info",children:(0,i.jsxs)("div",{className:"box-content",children:[(0,i.jsx)("h5",{className:" mb-20",children:r}),(0,i.jsx)("h6",{children:t})]})})]})},c=(r(4676),r(2815)),l=r(7152),o=["className","desktop","mobile","tablet"],d=[{src:"/assets/img/team/1.png",title:"Blake Hamilton",subTitle:"Project manager"},{src:"/assets/img/team/2.png",title:"John Doe",subTitle:"Engineer"},{src:"/assets/img/team/3.png",title:"Ira Mulanax",subTitle:"Founder"}],u=function(e){var s=e.className,r=e.desktop,u=e.mobile,h=e.tablet,m=(0,a.Z)(e,o);return(0,i.jsxs)(c.tq,(0,t.Z)((0,t.Z)({modules:[l.tl],pagination:{clickable:!0,el:".swiper-pagination"},spaceBetween:30,slidesPerView:1,breakpoints:{992:r,768:h,576:u},className:"dsn-team ".concat(s||"")},m),{},{children:[d.map((function(e,s){return(0,i.jsx)(c.o5,{children:(0,i.jsx)(n,{src:e.src,title:e.title,subTitle:e.subTitle})},s)})),(0,i.jsx)("div",{className:"swiper-pagination"})]}))};u.defaultProps={desktop:{slidesPerView:2.5},tablet:{slidesPerView:2},mobile:{slidesPerView:2}};var h=u},5643:function(e,s,r){r(2791);var t=r(9310),a=r(184);s.Z=function(e){var s=e.src,r=e.authorName,i=e.label,n=e.description;return(0,a.jsxs)("div",{className:"testimonial-item",children:[(0,a.jsx)("p",{className:"mb-25",children:n}),(0,a.jsxs)("div",{className:"author-box",children:[s&&(0,a.jsx)("span",{className:"avatar",children:(0,a.jsx)(t.Z,{className:"cover-bg-img",src:s,alt:r})}),(0,a.jsxs)("h5",{className:"auth-info",children:[r,r&&i&&","," ",(0,a.jsx)("span",{children:i})]})]})]})}},1643:function(e,s,r){r.r(s),r.d(s,{default:function(){return P}});var t=r(2791),a=r(7262),i=r(7594),n=r(8660),c=r(2232),l=r(9337),o=r(6243),d=r(4878),u=r(1474),h=r(1852),m=r(7678),g=r(1413),p=r(5987),f=(r(3569),r(5643)),x=r(2815),v=(r(4676),r(7152),r(3556)),j=r(5118),b=r(184),N=["className"],Z=[{authorName:"Brandon Barbello",label:"Vivalnk Inc | Google IO",description:"Dave & his team at Blacksmith Agency were incredible partners at a critical time for our company. Day in & day out, they were there for us every step of the way delivering results for us & our high profile corporate partner."},{authorName:"Helen Ginsberg",label:"CEO of Treasure",description:"Dave & his team at Blacksmith Agency were incredible partners at a critical time for our company. Day in & day out, they were there for us every step of the way delivering results for us & our high profile corporate partner."}];var y=function(e){var s=e.className,r=(0,p.Z)(e,N);return(0,b.jsx)("section",{className:(0,j.gU)("dsn-testimonial testimonial-tow",s),children:(0,b.jsx)("div",{className:"testimonial-inner",children:(0,b.jsx)("div",{className:"content-box",children:(0,b.jsxs)(x.tq,(0,g.Z)((0,g.Z)({slidesPerView:1},r),{},{children:[Z.map((function(e,s){return(0,b.jsx)(x.o5,{children:(0,b.jsx)(f.Z,{authorName:e.authorName,label:e.label,description:e.description})},s)})),(0,b.jsx)(v.Z,{})]}))})})})},w=r(4270),k="THE ART OF LUXURY APPAREL",T="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis mollitia libero quis odio unde ab\n                officia est dolor.";var P=function(){return(0,b.jsxs)(t.Fragment,{children:[(0,b.jsx)(w.q,{children:(0,b.jsx)("title",{children:"Althea - About Us "})}),(0,b.jsx)(n.Z,{className:"background-section",description:T,children:k}),(0,b.jsx)(c.Z,{className:"mb-section text-center",src:"/assets/img/pexels.jpg",parallaxFrom:{scale:1.2},parallax:{scale:1},overlay:4,children:(0,b.jsxs)(i.Z,{children:[(0,b.jsxs)("h3",{children:["Hello we are, ",(0,b.jsx)("br",{})," Dsn Grid."]}),(0,b.jsx)("p",{className:"mt-30 m-w750 dsn-auto",children:"Founded in 2000, Dsn Grid has become one of the best Digital Agency in ThemeForest. Blue money going forward, but deploy to production. C-suite. First-order optimal strategies build on a culture of contribution and inclusion so those options"})]})}),(0,b.jsxs)(a.Z,{className:"section-margin",children:[(0,b.jsx)(l.Z,{description:"Our Services",children:"New Branding Agency"}),(0,b.jsx)(o.Z,{col:2,colMobile:1})]}),(0,b.jsx)("section",{className:"section-margin background-section section-padding",children:(0,b.jsxs)(a.Z,{className:"dsn-right-container",children:[(0,b.jsx)(l.Z,{description:"our team",children:"The best team ever!"}),(0,b.jsx)(d.Z,{loop:!0,grabCursor:!0})]})}),(0,b.jsxs)(a.Z,{className:"section-margin",children:[(0,b.jsx)(l.Z,{description:"Client see",children:"Feedback from our clients."}),(0,b.jsx)(y,{grabCursor:!0,loop:!0})]}),(0,b.jsxs)(a.Z,{className:"section-margin",children:[(0,b.jsxs)(l.Z,{description:"Our clients",children:["Your successful, our ",(0,b.jsx)("br",{})," reputation"]}),(0,b.jsx)(u.Z,{col:3,colTablet:2,colGap:2,rowGap:2})]}),(0,b.jsx)(h.Z,{className:"section-margin"}),(0,b.jsx)(m.Z,{})]})}},1558:function(){},3434:function(){},3569:function(){}}]);
//# sourceMappingURL=143.cec30403.chunk.js.map