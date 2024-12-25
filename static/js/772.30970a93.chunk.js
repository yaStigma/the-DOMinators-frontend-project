"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[772],{6615:function(e,a,n){n.d(a,{B:function(){return g}});var s=n(4942),t=n(1413),r=n(9439),i=n(5705),o=n(8007),l="AuthForm_formContainer__JSxQY",c="AuthForm_formLabel__F52GG",m="AuthForm_btn__vR4ay",d="AuthForm_formField__vGBWA",u="AuthForm_formFieldError__NONmO",_="AuthForm_error__cNFpJ",h="AuthForm_title__nrVeh",p="AuthForm_formFieldWrap__1xoMh",f="AuthForm_passwordWrapper__jQhRT",v="AuthForm_showPasswordButton__8serp",x="AuthForm_navLinksContainer__j50Nc",w="AuthForm_navButton__J7joL",b=n(2791),j=n(184),g=function(e){var a=e.title,n=e.fields,g=e.onSubmit,N=e.navigationLinks,S=(0,b.useState)(!1),y=(0,r.Z)(S,2),k=y[0],F=y[1],E=(0,b.useState)(!1),C=(0,r.Z)(E,2),R=C[0],A=C[1],P=function(){F((function(e){return!e}))},Z=function(){A((function(e){return!e}))},M=n.reduce((function(e,a){return(0,t.Z)((0,t.Z)({},e),{},(0,s.Z)({},a.name,""))}),{}),B=o.Ry(n.reduce((function(e,a){return(0,t.Z)((0,t.Z)({},e),{},(0,s.Z)({},a.name,a.validation))}),{}));return(0,j.jsx)(i.J9,{initialValues:M,validationSchema:B,onSubmit:g,children:function(e){var s=e.errors,t=e.touched,r=e.isSubmitting;return(0,j.jsxs)(i.l0,{className:l,autoComplete:"off",children:[(0,j.jsx)("h2",{className:h,children:a}),n.map((function(e){return(0,j.jsx)("div",{className:p,children:(0,j.jsxs)("label",{className:c,children:[e.label,(0,j.jsxs)("div",{className:f,children:[(0,j.jsx)(i.gN,{type:("password"!==e.name||k)&&("repeatPassword"!==e.name||R)?"text":"password",name:e.name,placeholder:e.placeholder,className:s[e.name]&&t[e.name]?"".concat(d," ").concat(u):d}),"password"===e.name&&(0,j.jsx)("button",{type:"button",onClick:P,className:v,children:(0,j.jsx)("img",{src:k?"./images_auth/eye.svg":"./images_auth/eye-slash.svg",alt:k?"Hide password":"Show password"})}),"repeatPassword"===e.name&&(0,j.jsx)("button",{type:"button",onClick:Z,className:v,children:(0,j.jsx)("img",{src:R?"./images_auth/eye.svg":"./images_auth/eye-slash.svg",alt:R?"Hide password":"Show password"})})]}),(0,j.jsx)(i.Bc,{name:e.name,component:"div",className:_})]})},e.name)})),(0,j.jsx)("button",{type:"submit",disabled:r,className:m,children:r?"Submitting...":a}),(0,j.jsx)("div",{className:x,children:null===N||void 0===N?void 0:N.map((function(e){return(0,j.jsx)("button",{type:"button",className:w,onClick:e.onClick,children:e.text},e.text)}))})]})}})}},9115:function(e,a,n){n.d(a,{c:function(){return r}});n(2791);var s="AuthWrapper_AuthWrapper__9ViU9",t=n(184),r=function(e){var a=e.children;return(0,t.jsx)("div",{className:s,children:a})}},7772:function(e,a,n){n.r(a),n.d(a,{default:function(){return C}});var s=n(5861),t=n(9439),r=n(7757),i=n.n(r),o=n(4420),l=n(9273),c=n(6615),m=n(2791),d=n(148),u=n(8007),_=n(9115),h=n(5705),p="SendResetEmailModal_overlay__FPtF3",f="SendResetEmailModal_iconClose__0BVHO",v="SendResetEmailModal_modal__M-gca",x="SendResetEmailModal_closeButton__PYG17",w="SendResetEmailModal_formContainer__4UXjb",b="SendResetEmailModal_formLabel__wzhpa",j="SendResetEmailModal_btn__ZGY-q",g="SendResetEmailModal_formField__cDFg6",N="SendResetEmailModal_error__cAIFs",S="SendResetEmailModal_title__oGzah",y=n(5818),k=n(184),F=function(e){var a=e.onClose,n=(0,o.I0)();(0,m.useEffect)((function(){var e=function(e){"Escape"===e.key&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);var s=u.Ry({email:u.Z_().email("Invalid email address").required("Email is required")});return(0,k.jsx)("div",{className:p,onClick:a,children:(0,k.jsxs)("div",{className:v,onClick:function(e){return e.stopPropagation()},children:[(0,k.jsx)(h.J9,{initialValues:{email:""},validationSchema:s,onSubmit:function(e,s){var t=s.setSubmitting;n((0,l.cx)(e.email)),t(!1),a()},children:function(e){var a=e.isSubmitting;return(0,k.jsxs)(h.l0,{className:w,autoComplete:"off",children:[(0,k.jsx)("h2",{className:S,children:"Reset your Password"}),(0,k.jsxs)("label",{className:b,children:["Email",(0,k.jsx)(h.gN,{type:"email",name:"email",placeholder:"Enter your email",className:g}),(0,k.jsx)(h.Bc,{name:"email",component:"div",className:N})]}),(0,k.jsx)("button",{type:"submit",disabled:a,className:j,children:a?"Reseting Password...":"Reset Password"})]})}}),(0,k.jsx)("button",{onClick:a,className:x,children:(0,k.jsx)(y.Z,{name:"close",className:f})})]})})},E="SignInPage_SigninPageWrapper__sU1IZ",C=function(){var e=(0,o.I0)(),a=(0,d.s0)(),n=(0,m.useState)(!1),r=(0,t.Z)(n,2),h=r[0],p=r[1],f=[{name:"email",type:"email",label:"Email",placeholder:"E-mail",validation:u.Z_().email("Invalid email address").required("Email is required")},{name:"password",type:"password",label:"Password",placeholder:"Password",validation:u.Z_().min(8,"Password must be at least 8 characters").max(64,"Password must be not more than 64 characters").required("Password is required")}],v=function(){var n=(0,s.Z)(i().mark((function n(s){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t={email:s.email,password:s.password},n.next=4,e((0,l.zB)(t));case 4:a("/home"),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,k.jsxs)("div",{className:E,children:[(0,k.jsx)(_.c,{children:(0,k.jsx)(c.B,{title:"Sign In",fields:f,onSubmit:v,navigationLinks:[{text:"Sign Up",onClick:function(){return a("/signup")}},{text:"Forgot your password?",onClick:function(){p(!0)}}]})}),h&&(0,k.jsx)(F,{onClose:function(){p(!1)}})]})}}}]);
//# sourceMappingURL=772.30970a93.chunk.js.map