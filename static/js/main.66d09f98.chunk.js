(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{162:function(e,t,c){},163:function(e,t,c){},469:function(e,t,c){},470:function(e,t,c){},486:function(e,t,c){},488:function(e,t,c){},489:function(e,t,c){},490:function(e,t,c){},491:function(e,t,c){},492:function(e,t,c){},493:function(e,t,c){},494:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c(12),i=c.n(s),n=(c(162),c(163),c(149)),l=c(150),r=c(157),o=c(155),j=(c(164),c(32)),d=[],b=c(507),m=c(50),h=c.n(m),x=(c(65),c(469),c(156),c(470),c(66)),u=c.n(x),p=c(52),O=c.n(p),f=c(0);u.a.setAppElement("#root");var v=function(e){Object(r.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(n.a)(this,c);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(f.jsx)(b.a,{position:"fixed",children:Object(f.jsxs)("nav",{className:"NavbarItems",children:[Object(f.jsx)(j.Link,{className:"navbar-logo",to:"AboutPage",spy:!0,smooth:!0,offset:-200,duration:500,children:Object(f.jsxs)("h1",{className:"menu-item",children:[Object(f.jsx)("i",{class:"fas fa-home"})," Home "]})}),Object(f.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(f.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(f.jsxs)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:[Object(f.jsx)("li",{className:"nav-links",children:Object(f.jsx)(j.Link,{activeClass:"about-active",to:"AboutPage",spy:!0,smooth:!0,offset:-200,duration:500,children:"ABOUT"})}),Object(f.jsx)("li",{className:"nav-links",children:Object(f.jsx)(j.Link,{activeClass:"projects-active",to:"ProjectsPage",spy:!0,smooth:!0,offset:-50,duration:500,children:"PROJECTS"})}),Object(f.jsx)("li",{className:"nav-links",children:Object(f.jsx)(j.Link,{activeClass:"contact-active",to:"ContactMe",spy:!0,smooth:!0,offset:-85,duration:500,children:"CONTACT ME"})}),d.map((function(e,t){return Object(f.jsx)("li",{children:Object(f.jsx)("a",{className:e.cName,href:e.url,children:e.title})},t)}))]})]})})}}]),c}(a.Component);c(486);var g=function(){return Object(f.jsx)("div",{className:"footer-container",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("section",{className:"social-media",children:Object(f.jsx)("div",{className:"social-media-wrap",children:Object(f.jsx)("div",{className:"footer-logo",id:"Footer",children:Object(f.jsxs)("ul",{className:"socials-list",children:[Object(f.jsxs)("li",{children:[" ",Object(f.jsxs)("a",{className:"email-button",href:"mailto:rodix08@gmail.com",children:["rodix08@gmail.com ",Object(f.jsx)("i",{class:"fas fa-envelope"})]})]}),Object(f.jsxs)("li",{children:[" ",Object(f.jsxs)("a",{className:"socials-button1",href:"./projectlink5",children:[" Linkedin ",Object(f.jsx)("i",{className:"fab fa-linkedin"})]})]}),Object(f.jsxs)("li",{children:[" ",Object(f.jsxs)("a",{className:"socials-button2",href:"./projectlink6",children:["Github ",Object(f.jsx)("i",{className:"fab fa-github"})]})]})]})})})})})})},N=c(31),w=c(4);var k=function(e){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("li",{className:"cards__item",children:Object(f.jsxs)("div",{className:"cards__item__link",children:[Object(f.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(f.jsx)(N.b,{to:e.path3,children:Object(f.jsx)("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})})}),Object(f.jsxs)("div",{className:"cards__item__info",children:[Object(f.jsx)("h3",{className:"cards__item__text",children:e.text}),Object(f.jsx)("div",{className:"cards__buttons",children:Object(f.jsx)(N.b,{to:e.path,children:Object(f.jsxs)("button",{className:"source__button",children:[" ",Object(f.jsx)("i",{className:"fab fa-github fa-lg"})]})})})]})]})})})};c(488);var _=function(e){return Object(f.jsxs)("div",{className:"cards",children:[Object(f.jsx)("h1",{children:" Projects"}),Object(f.jsx)("div",{className:"cards__container",children:Object(f.jsxs)("div",{className:"cards__wrapper",children:[Object(f.jsxs)("ul",{className:"cards__items",children:[Object(f.jsx)(k,{src:"/images/image30.png",text:"E-Commerce peer-to-peer trading website, with live chat and messaging systems where users can create their accounts to upload products and list them for sale. Uses HTML, CSS, PHP and mySQL.",label:"E-commerce website",path:"./projectlink1"}),Object(f.jsx)(k,{src:"/images/image2.png",text:"A navigation application, where you can add roads, remove roads, add users and compute how much energy is required to reach the destination that utilizes OOP with Java.",label:"Navigation App",path:"./projectlink2"}),Object(f.jsx)(k,{src:"/images/image1.png",text:"Arduino programmed as an alarm clock / timer. You can set a timer, where the alarm will change colour to red when the time is reached. Can be snoozed or turned off. Utilized C++.",label:"Alarm Clock",path:"./projectlink3"})]}),Object(f.jsxs)("ul",{className:"cards__items",children:[Object(f.jsx)(k,{src:"/images/image4.png",text:"Developed a mobile application that tracked gym progress such as lifts, with notifications and allows you to compare your lifts to strength standard levels. Utilized Java.",label:"Gym Tracker",path:"./projectlink4"}),Object(f.jsx)(k,{src:"/images/image5.png",text:"This website was created to act as my online portoflio. Utilized ReactJS.",label:"Web Portfolio",path:"./projectlink5"})]})]})})]})},y=function(){return Object(f.jsx)("div",{id:"ProjectsPage",children:Object(f.jsx)(_,{})})},S=(c(489),function(){return Object(f.jsx)("div",{className:"welcome-about",id:"AboutPage",children:Object(f.jsxs)("div",{className:"about-text",children:[Object(f.jsxs)("h1",{children:["Hello, I'm ",Object(f.jsx)("mark",{className:"name-style",children:" Rodi Gemici-Bektas"}),"."]}),Object(f.jsx)("h1",{children:"I'm a Computer Science Graduate."}),Object(f.jsxs)("ul",{className:"social-buttons",children:[Object(f.jsxs)("li",{children:[Object(f.jsx)("a",{className:"download-text",href:"/projectlink6",children:" Linkedin "})," ",Object(f.jsx)("i",{className:"fab fa-linkedin"})]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("a",{className:"download-text",href:"/projectlink5",children:" Github "})," ",Object(f.jsx)("i",{className:"fab fa-github"})," "]}),Object(f.jsxs)("li",{children:["London, UK ",Object(f.jsx)("i",{class:"fas fa-map-marker-alt"})]}),Object(f.jsxs)("li",{path:"./projectlink4",children:[Object(f.jsx)("a",{className:"download-text",href:"/CV",children:" Resume/CV"})," ",Object(f.jsx)("i",{class:"fas fa-download"})," "]}),Object(f.jsxs)("li",{children:[" ",Object(f.jsxs)("a",{className:"email-about",href:"mailto:rodix08@gmail.com",children:["Email ",Object(f.jsx)("i",{class:"fas fa-envelope"})]})]})]}),Object(f.jsx)("button",{className:"projects-button",children:Object(f.jsxs)(j.Link,{activeClass:"projects-active",to:"ProjectsPage",spy:!0,smooth:!0,offset:-100,duration:500,children:["View my projects ",Object(f.jsx)("i",{class:"fas fa-sign-in-alt"})]})})]})})});c(490);function C(e){e.preventDefault(),O.a.sendForm("service_qmfp5xh","template_urwwi38",e.target,"user_vv8OcVl4cepXPKd91Un4r").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()}var A=function(){return Object(f.jsxs)("div",{className:"contactnav",id:"ContactMe",children:[Object(f.jsx)("div",{className:"all-left",children:Object(f.jsxs)("div",{className:"left-column",children:[Object(f.jsx)("h1",{className:"interests-title",children:"Areas of Interests "}),Object(f.jsxs)("div",{className:"contact-info",children:[Object(f.jsxs)("div",{className:"grid-container1",children:[Object(f.jsx)("h1",{children:Object(f.jsx)("i",{class:"fas fa-cloud"})}),Object(f.jsx)("br",{}),"Cloud, I have deployed websites on the cloud and have keen interest in AWS and Google Cloud"]}),Object(f.jsxs)("div",{className:"grid-container2",children:[Object(f.jsx)("h1",{children:Object(f.jsx)("i",{class:"fab fa-html5"})}),Object(f.jsx)("br",{}),"Front end development, Using HTML, CSS and JavaScript as well as frameworks such as ReactJS, to develop websites."]}),Object(f.jsxs)("div",{className:"grid-container3",children:[Object(f.jsx)("h1",{children:Object(f.jsx)("i",{class:"fas fa-database"})}),Object(f.jsx)("br",{}),"Back end development, connected websites to MySQL databases."]}),Object(f.jsxs)("div",{className:"grid-container4",children:[Object(f.jsx)("h1",{children:Object(f.jsx)("i",{class:"fas fa-pencil-alt"})}),Object(f.jsx)("br",{}),"Enjoy designing clean simple UX, UI, Mobile, Website and App designs."]}),Object(f.jsxs)("div",{className:"grid-container5",children:[Object(f.jsx)("h1",{children:Object(f.jsx)("i",{class:"fab fa-js-square"})}),Object(f.jsx)("br",{}),"JavaScript, developed applications with JavaScript, and used frameworks such as ReactJS"]}),Object(f.jsxs)("div",{className:"grid-container6",children:[Object(f.jsx)("h1",{children:Object(f.jsx)("i",{class:"fas fa-laptop-code"})}),Object(f.jsx)("br",{}),"Used programming languages such as C++ for development"]})]})]})}),Object(f.jsx)("div",{className:"right-column",children:Object(f.jsx)("div",{className:"contact-container",children:Object(f.jsx)("form",{onSubmit:C,children:Object(f.jsxs)("div",{className:"input-container",children:[Object(f.jsx)("li",{className:"project1title",children:Object(f.jsx)("h2",{children:"Email Me"})}),Object(f.jsx)("lable",{className:"input-label",children:"Name: "}),Object(f.jsx)("li",{className:"name-input",children:Object(f.jsx)("input",{type:"text",size:"30",placeholder:"Name",name:"name",required:!0})}),Object(f.jsx)("lable",{className:"input-label",children:"Email: "}),Object(f.jsx)("li",{className:"email-input",children:Object(f.jsx)("input",{type:"email",size:"30",className:"form-control",placeholder:"Email Address",name:"email",required:!0})}),Object(f.jsx)("lable",{className:"input-label",children:"Subject: "}),Object(f.jsx)("li",{className:"subject-input",children:Object(f.jsx)("input",{type:"text",size:"30",className:"form-control",placeholder:"Subject",name:"subject",required:!0})}),Object(f.jsx)("lable",{className:"input-label",children:"Message: "}),Object(f.jsx)("li",{className:"message-input",children:Object(f.jsx)("textarea",{className:"form-control",cols:"31",rows:"8",placeholder:"Your message",name:"message",required:!0})}),Object(f.jsx)("li",{className:"submit-input",children:Object(f.jsx)("input",{type:"submit",className:"btn btn-info",value:"SEND MESSAGE"})})]})})})})]})},P=(c(491),c.p+"static/media/cvrodi.1a55061e.pdf");var E=function(){return window.history.replaceState(null,null,"/"),window.location.replace(P),"_blank"},L=(c(492),function(){return Object(a.useEffect)((function(){h.a.init({duration:2e3})}),[]),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{"data-aos":"fade-right",children:Object(f.jsx)(S,{})}),Object(f.jsxs)("div",{"data-aos":"fade-right",children:[" ",Object(f.jsx)(y,{})]}),Object(f.jsxs)("div",{"data-aos":"fade-right",children:[" ",Object(f.jsx)(A,{})]})]})}),M=(c(493),function(){return setTimeout((function(){window.location="./Mainpage"}),3e3),Object(f.jsxs)("div",{className:"error__text",children:[Object(f.jsx)("h1",{children:"404 Page Not Found! :("}),Object(f.jsx)("h1",{children:" Redirecting..."})]})});var J=function(){return window.history.replaceState(null,null,"/"),window.location.replace("https://github.com/rodigb/e-commerce_website"),"_blank"};var T=function(){return window.history.replaceState(null,null,"/"),window.location.replace("https://github.com/rodigb/NavigationApp/"),"_blank"};var U=function(){return window.history.replaceState(null,null,"/"),window.location.replace("https://github.com/rodigb/AlarmClock"),"_blank"};var z=function(){return window.history.replaceState(null,null,"/"),window.location.replace("https://github.com/rodigb/Gym-Tracking-App"),"_blank"};var G=function(){return window.history.replaceState(null,null,"/"),window.location.replace("https://github.com/rodigb?tab=repositories"),"_blank"};var I=function(){return window.history.replaceState(null,null,"/"),window.location.replace("https://www.linkedin.com/"),"_blank"};var q=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)("div",{className:"page-container",children:Object(f.jsxs)(N.a,{children:[Object(f.jsx)(v,{}),Object(f.jsxs)(w.c,{children:[Object(f.jsx)(w.a,{exact:!0,path:"/MainPage",component:L}),Object(f.jsx)(w.a,{exact:!0,path:"/Projects",component:L}),Object(f.jsx)(w.a,{exact:!0,path:"/CV",component:E}),Object(f.jsx)(w.a,{exact:!0,path:"/404",component:M}),Object(f.jsx)(w.a,{exact:!0,path:"/projectlink1",component:J}),Object(f.jsx)(w.a,{exact:!0,path:"/projectlink2",component:T}),Object(f.jsx)(w.a,{exact:!0,path:"/projectlink3",component:U}),Object(f.jsx)(w.a,{exact:!0,path:"/projectlink4",component:z}),Object(f.jsx)(w.a,{exact:!0,path:"/projectlink5",component:G}),Object(f.jsx)(w.a,{exact:!0,path:"/projectlink6",component:I})]}),Object(f.jsx)(L,{}),Object(f.jsx)("div",{className:"footer-position",children:Object(f.jsx)(g,{children:"  "})})]})})})};i.a.render(Object(f.jsx)(q,{}),document.getElementById("root"))}},[[494,1,2]]]);
//# sourceMappingURL=main.66d09f98.chunk.js.map