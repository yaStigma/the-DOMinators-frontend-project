"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[991],{6615:function(e,a,r){r.d(a,{B:function(){return j}});var t=r(4942),n=r(1413),s=r(9439),i=r(5705),o=r(8007),l="AuthForm_formContainer__JSxQY",u="AuthForm_formLabel__F52GG",c="AuthForm_btn__vR4ay",d="AuthForm_formField__vGBWA",m="AuthForm_formFieldError__NONmO",p="AuthForm_error__cNFpJ",h="AuthForm_title__nrVeh",_="AuthForm_formFieldWrap__1xoMh",f="AuthForm_passwordWrapper__jQhRT",v="AuthForm_showPasswordButton__8serp",w="AuthForm_navLinksContainer__j50Nc",x="AuthForm_navButton__J7joL",b=r(2791),g=r(184),j=function(e){var a=e.title,r=e.fields,j=e.onSubmit,N=e.navigationLinks,y=(0,b.useState)(!1),F=(0,s.Z)(y,2),S=F[0],k=F[1],A=(0,b.useState)(!1),P=(0,s.Z)(A,2),Z=P[0],C=P[1],q=function(){k((function(e){return!e}))},B=function(){C((function(e){return!e}))},R=r.reduce((function(e,a){return(0,n.Z)((0,n.Z)({},e),{},(0,t.Z)({},a.name,""))}),{}),W=o.Ry(r.reduce((function(e,a){return(0,n.Z)((0,n.Z)({},e),{},(0,t.Z)({},a.name,a.validation))}),{}));return(0,g.jsx)(i.J9,{initialValues:R,validationSchema:W,onSubmit:j,children:function(e){var t=e.errors,n=e.touched,s=e.isSubmitting;return(0,g.jsxs)(i.l0,{className:l,autoComplete:"off",children:[(0,g.jsx)("h2",{className:h,children:a}),r.map((function(e){return(0,g.jsx)("div",{className:_,children:(0,g.jsxs)("label",{className:u,children:[e.label,(0,g.jsxs)("div",{className:f,children:[(0,g.jsx)(i.gN,{type:("password"!==e.name||S)&&("repeatPassword"!==e.name||Z)?"text":"password",name:e.name,placeholder:e.placeholder,className:t[e.name]&&n[e.name]?"".concat(d," ").concat(m):d}),"password"===e.name&&(0,g.jsx)("button",{type:"button",onClick:q,className:v,children:(0,g.jsx)("img",{src:S?"./images_auth/eye.svg":"./images_auth/eye-slash.svg",alt:S?"Hide password":"Show password"})}),"repeatPassword"===e.name&&(0,g.jsx)("button",{type:"button",onClick:B,className:v,children:(0,g.jsx)("img",{src:Z?"./images_auth/eye.svg":"./images_auth/eye-slash.svg",alt:Z?"Hide password":"Show password"})})]}),(0,g.jsx)(i.Bc,{name:e.name,component:"div",className:p})]})},e.name)})),(0,g.jsx)("button",{type:"submit",disabled:s,className:c,children:s?"Submitting...":a}),(0,g.jsx)("div",{className:w,children:null===N||void 0===N?void 0:N.map((function(e){return(0,g.jsx)("button",{type:"button",className:x,onClick:e.onClick,children:e.text},e.text)}))})]})}})}},9115:function(e,a,r){r.d(a,{c:function(){return s}});r(2791);var t="AuthWrapper_AuthWrapper__9ViU9",n=r(184),s=function(e){var a=e.children;return(0,n.jsx)("div",{className:t,children:a})}},8991:function(e,a,r){r.r(a),r.d(a,{default:function(){return h}});var t=r(5861),n=r(7757),s=r.n(n),i=r(4420),o=r(9273),l=r(6615),u=(r(2791),r(148)),c=r(8007),d=r(9115),m="SignUpPage_SignupPageWrapper__88A0C",p=r(184),h=function(){var e=(0,i.I0)(),a=(0,u.s0)(),r=[{name:"email",type:"email",label:"Email",placeholder:"E-mail",validation:c.Z_().email("Invalid email address").required("Email is required")},{name:"password",type:"password",label:"Password",placeholder:"Password",validation:c.Z_().min(8,"Password must be at least 8 characters").max(64,"Password must be not more than 64 characters").required("Password is required")},{name:"repeatPassword",type:"password",label:"Repeat Password",placeholder:"Repeat password",validation:c.Z_().oneOf([c.iH("password"),null],"Passwords must match").required("Repeat Password is required")}],n=function(){var r=(0,t.Z)(s().mark((function r(t,n){var i;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,i={email:t.email,password:t.password},r.next=4,e((0,o.y1)(i));case 4:a("/home"),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Signup error:",r.t0),alert("Signup failed. Please try again.");case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e,a){return r.apply(this,arguments)}}();return(0,p.jsx)("div",{className:m,children:(0,p.jsx)(d.c,{children:(0,p.jsx)(l.B,{title:"Sign Up",fields:r,onSubmit:n,navigationLinks:[{text:"Sign In",onClick:function(){return a("/signin")}}]})})})}}}]);
//# sourceMappingURL=991.f5666c28.chunk.js.map