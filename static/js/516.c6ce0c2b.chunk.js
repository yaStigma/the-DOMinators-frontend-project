"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[516],{6615:function(e,a,n){n.d(a,{B:function(){return b}});var r=n(4942),t=n(1413),s=n(9439),i=n(5705),o=n(8007),u="AuthForm_btn__vR4ay",c="AuthForm_formField__vGBWA",l="AuthForm_formFieldError__NONmO",m="AuthForm_error__cNFpJ",d="AuthForm_formContainer__JSxQY",h="AuthForm_formLabel__F52GG",p="AuthForm_formFieldWrap__1xoMh",_="AuthForm_passwordWrapper__jQhRT",f="AuthForm_showPasswordButton__8serp",v="AuthForm_navLinksContainer__j50Nc",x="AuthForm_navButton__J7joL",w=n(2791),g=n(184),b=function(e){var a=e.title,n=e.fields,b=e.onSubmit,j=e.navigationLinks,N=(0,w.useState)(!1),F=(0,s.Z)(N,2),S=F[0],k=F[1],y=(0,w.useState)(!1),A=(0,s.Z)(y,2),Z=A[0],P=A[1],C=function(){k((function(e){return!e}))},B=function(){P((function(e){return!e}))},W=n.reduce((function(e,a){return(0,t.Z)((0,t.Z)({},e),{},(0,r.Z)({},a.name,""))}),{}),I=o.Ry(n.reduce((function(e,a){return(0,t.Z)((0,t.Z)({},e),{},(0,r.Z)({},a.name,a.validation))}),{}));return(0,g.jsx)(i.J9,{initialValues:W,validationSchema:I,onSubmit:b,children:function(e){var r=e.errors,t=e.touched,s=e.isSubmitting;return(0,g.jsxs)(i.l0,{className:d,autoComplete:"off",children:[(0,g.jsx)("h2",{children:a}),n.map((function(e){return(0,g.jsx)("div",{className:p,children:(0,g.jsxs)("label",{className:h,children:[e.label,(0,g.jsxs)("div",{className:_,children:[(0,g.jsx)(i.gN,{type:("password"!==e.name||S)&&("repeatPassword"!==e.name||Z)?"text":"password",name:e.name,placeholder:e.placeholder,className:r[e.name]&&t[e.name]?"".concat(c," ").concat(l):c}),"password"===e.name&&(0,g.jsx)("button",{type:"button",onClick:C,className:f,children:(0,g.jsx)("img",{src:S?"/images_auth/eye.svg":"/images_auth/eye-slash.svg",alt:S?"Hide password":"Show password"})}),"repeatPassword"===e.name&&(0,g.jsx)("button",{type:"button",onClick:B,className:f,children:(0,g.jsx)("img",{src:Z?"/images_auth/eye.svg":"/images_auth/eye-slash.svg",alt:Z?"Hide password":"Show password"})})]}),(0,g.jsx)(i.Bc,{name:e.name,component:"div",className:m})]})},e.name)})),(0,g.jsx)("button",{type:"submit",disabled:s,className:u,children:s?"Submitting...":a}),(0,g.jsx)("div",{className:v,children:null===j||void 0===j?void 0:j.map((function(e){return(0,g.jsx)("button",{type:"button",className:x,onClick:e.onClick,children:e.text},e.text)}))})]})}})}},9115:function(e,a,n){n.d(a,{c:function(){return s}});n(2791);var r="AuthWrapper_AuthWrapper__9ViU9",t=n(184),s=function(e){var a=e.children;return(0,t.jsx)("div",{className:r,children:a})}},5516:function(e,a,n){n.r(a),n.d(a,{default:function(){return p}});var r=n(5861),t=n(7757),s=n.n(t),i=n(4420),o=n(9872),u=n(6615),c=(n(2791),n(148)),l=n(8007),m=n(9115),d="SignInPage_SigninPageWrapper__sU1IZ",h=n(184),p=function(){var e=(0,i.I0)(),a=(0,c.s0)(),n=[{name:"email",type:"email",label:"Email",placeholder:"E-mail",validation:l.Z_().email("Invalid email address").required("Email is required")},{name:"password",type:"password",label:"Password",placeholder:"Password",validation:l.Z_().min(8,"Password must be at least 6 characters").max(64,"Password must be not more than 64 characters").required("Password is required")}],t=function(){var a=(0,r.Z)(s().mark((function a(n){return s().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e((0,o.zB)(n));case 3:a.next=9;break;case 5:a.prev=5,a.t0=a.catch(0),console.error("Signin error:",a.t0),alert("Signin failed. Please try again.");case 9:case"end":return a.stop()}}),a,null,[[0,5]])})));return function(e){return a.apply(this,arguments)}}();return(0,h.jsx)("div",{className:d,children:(0,h.jsx)(m.c,{children:(0,h.jsx)(u.B,{title:"Sign In",fields:n,onSubmit:t,navigationLinks:[{text:"Sign Up",onClick:function(){return a("/signup")}},{text:"Forgot your password?"}]})})})}}}]);
//# sourceMappingURL=516.c6ce0c2b.chunk.js.map