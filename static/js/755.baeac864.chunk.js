"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[755],{3755:function(e,t,a){a.r(t),a.d(t,{default:function(){return _e}});var n=a(3433),r=a(9439),s=a(2791),o=a(5861),i=a(7757),l=a.n(i),c="WaterRatioPanel_dailyNormaSection__lejGd",u="WaterRatioPanel_imageContainer__JcPUd",d="WaterRatioPanel_progressContainer__f0Qbe",m="WaterRatioPanel_progressTitle__Z-RzH",h="WaterRatioPanel_progressBar__dShpn",_="WaterRatioPanel_progressMarkers__+UN4R",f="WaterRatioPanel_marker__m+8sw",p="WaterRatioPanel_tick__Gwmie",v="WaterRatioPanel_addWaterBtn__mfzkw",x="WaterRatioPanel_icon__ZAI64",N="WaterRatioPanel_bottomSection__pH0C5",y=a(4420),j="DailyNorma_dailyNormaContainer__KHUio",g="DailyNorma_title__X4SZH",b="DailyNorma_normaContainer__yAGrT",S="DailyNorma_normaValue__Gd29x",w="DailyNorma_editButton__Zko6d",M=a(5667),C=a(3930),W={modal:"DailyNormaModal_modal__vJ3oF",modalContent:"DailyNormaModal_modalContent__KvIF8",navnButton:"DailyNormaModal_navnButton__YziaA",closeButton:"DailyNormaModal_closeButton__Uur27",h2:"DailyNormaModal_h2__JS8CC",h3:"DailyNormaModal_h3__kI5gk",h4:"DailyNormaModal_h4__BHKPZ",labelInput:"DailyNormaModal_labelInput__zcUdV",formulas:"DailyNormaModal_formulas__wR-gI",label:"DailyNormaModal_label__FhZVe",formula:"DailyNormaModal_formula__LLd2F",form:"DailyNormaModal_form__Z0uC7",radioGroup:"DailyNormaModal_radioGroup__hW-rO","radio-label":"DailyNormaModal_radio-label__j1hG2",inputWrapper:"DailyNormaModal_inputWrapper__yjnEa",radioLabel:"DailyNormaModal_radioLabel__7kCVO",bluInput:"DailyNormaModal_bluInput__QSMvJ",textarea:"DailyNormaModal_textarea__g-zaU",saveButton:"DailyNormaModal_saveButton__b6ZL2","modal-content":"DailyNormaModal_modal-content__TsjF1","radio-group":"DailyNormaModal_radio-group__CV3cj",blu:"DailyNormaModal_blu__S7if2"},k=a(184),D=function(e){var t=e.setModalVisible,a=(0,s.useState)("woman"),n=(0,r.Z)(a,2),i=n[0],c=n[1],u=(0,s.useState)(0),d=(0,r.Z)(u,2),m=d[0],h=d[1],_=(0,s.useState)(0),f=(0,r.Z)(_,2),p=f[0],v=f[1],x=(0,s.useState)("0 L"),N=(0,r.Z)(x,2),j=N[0],g=N[1],b=(0,s.useState)(0),S=(0,r.Z)(b,2),w=S[0],M=S[1],D=(0,y.I0)();(0,s.useEffect)((function(){return T(),window.addEventListener("resize",T),function(){return window.removeEventListener("resize",T)}}),[]);var T=function(){var e=document.getElementById("infoText");e.style.height="auto",e.style.height=e.scrollHeight+"px"},E=(0,s.useCallback)((function(){var e;"woman"===i?e=.03*m+.4*p:"man"===i&&(e=.04*m+.6*p),isNaN(e)&&(e=0),g(0===e?"0 L":e.toFixed(2)+" L")}),[i,m,p]);(0,s.useEffect)((function(){E()}),[E]);var B=function(e){"0"===e.target.value&&(e.target.value="")},Z=function(e){""===e.target.value&&(e.target.value="0")},I=function(){var e=(0,o.Z)(l().mark((function e(a){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!((n=w)>5)){e.next=5;break}return alert("\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0443\u0442\u043e\u0447\u043d\u0430\u044f \u043d\u043e\u0440\u043c\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u044f \u0432\u043e\u0434\u044b - 5 L"),e.abrupt("return");case 5:return e.prev=5,e.next=8,D((0,C.X7)({dailyNorma:n})).unwrap();case 8:e.sent.error||t(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),alert("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t){return e.apply(this,arguments)}}();return(0,k.jsx)("div",{className:W.App,children:(0,k.jsx)("div",{className:W.modal,children:(0,k.jsxs)("div",{className:W.modalContent,children:[(0,k.jsxs)("div",{className:W.navnButton,children:[(0,k.jsx)("h2",{className:W.h2,children:"My daily norma"}),(0,k.jsx)("button",{className:W.closeButton,onClick:function(){return t(!1)},children:"\xd7"})]}),(0,k.jsxs)("div",{className:W.formulas,children:[(0,k.jsxs)("p",{children:[(0,k.jsx)("span",{className:W.label,children:"For girl:"}),(0,k.jsx)("span",{className:W.formula,children:"V=(M*0.03) + (T*0.4)"})]}),(0,k.jsxs)("p",{children:[(0,k.jsx)("span",{className:W.label,children:"For man:"}),(0,k.jsx)("span",{className:W.formula,children:"V=(M*0.04) + (T*0.6)"})]})]}),(0,k.jsx)("textarea",{id:"infoText",readOnly:!0,className:W.textarea,value:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"}),(0,k.jsxs)("form",{className:W.form,onSubmit:I,children:[(0,k.jsx)("h4",{className:W.h4,children:"Calculate your rate:"}),(0,k.jsxs)("div",{className:W.radioGroup,children:[(0,k.jsxs)("label",{className:W.radioLabel,children:[(0,k.jsx)("input",{type:"radio",name:"gender",value:"woman",checked:"woman"===i,onChange:function(){return c("woman")}})," For woman"]}),(0,k.jsxs)("label",{className:W.radioLabel,children:[(0,k.jsx)("input",{type:"radio",name:"gender",value:"man",checked:"man"===i,onChange:function(){return c("man")}})," For man"]})]}),(0,k.jsxs)("div",{className:W.inputWrapper,children:[(0,k.jsx)("label",{className:W.labelInput,htmlFor:"weight",children:"Your weight in kilograms:"}),(0,k.jsx)("input",{className:W.bluInput,type:"number",id:"weight",name:"weight",value:m,onChange:function(e){return h(parseFloat(e.target.value))},onFocus:B,onBlur:Z})]}),(0,k.jsxs)("div",{className:W.inputWrapper,children:[(0,k.jsx)("label",{className:W.labelInput,htmlFor:"activity-time",children:"The time of active participation in sports or other activities with a high physical load in hours:"}),(0,k.jsx)("input",{className:W.bluInput,type:"number",id:"activity-time",name:"activity-time",value:p,onChange:function(e){return v(parseFloat(e.target.value))},onFocus:B,onBlur:Z})]}),(0,k.jsx)("div",{children:(0,k.jsxs)("p",{children:[(0,k.jsx)("span",{children:"The required amount of water in liters per day:"}),(0,k.jsx)("span",{className:"".concat(W.blu," ").concat(W.requiredWater),children:j})]})}),(0,k.jsx)("h4",{className:W.h4,children:"Write down how much water you will drink:"}),(0,k.jsx)("div",{className:W.inputWrapper,children:(0,k.jsx)("input",{className:W.bluInput,type:"number",id:"water-intake",name:"water-intake",value:w,onChange:function(e){return M(parseFloat(e.target.value))},onFocus:B,onBlur:Z})}),(0,k.jsx)("button",{type:"submit",className:W.saveButton,children:"Save"})]})]})})})},T=a(4746),E=function(){var e=(0,y.I0)(),t=(0,s.useState)(!1),a=(0,r.Z)(t,2),n=a[0],i=a[1];(0,s.useEffect)((function(){e((0,M.BT)())}),[e]);var c=(0,y.v9)(T.S8),u=(null===c||void 0===c?void 0:c.data)||{},d=u.daylyNorm?u.daylyNorm/1e3:2,m=function(){var t=(0,o.Z)(l().mark((function t(a){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e((0,C.X7)({dailyNorma:1e3*a})).unwrap();case 3:t.sent&&i(!1),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Failed to update daily norma:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();return(0,k.jsxs)("div",{className:j,children:[(0,k.jsx)("p",{className:g,children:"My daily norma"}),(0,k.jsxs)("div",{className:b,children:[(0,k.jsxs)("span",{className:S,children:[d," L"]}),(0,k.jsx)("button",{onClick:function(){i(!0)},className:w,children:"Edit"})]}),n&&(0,k.jsx)(D,{setModalVisible:i,handleSave:m})]})},B="AddWaterModal_modal__dUadi",Z="AddWaterModal_modalContent__PCT0Q",I="AddWaterModal_modalHeader__blV6-",L="AddWaterModal_close__zmKJE",A="AddWaterModal_modalBody__snhFv",F="AddWaterModal_amountSelector__fdnLF",R="AddWaterModal_inputSaveContainer__BhJMK",O="AddWaterModal_inputText__8XBA6",H="AddWaterModal_labelDistance__1laX6",G="AddWaterModal_labelDistanceText__l4fKH",V="AddWaterModal_saveButton__aM7B3",P="AddWaterModal_buttonSelector__B-Mvf",z="AddWaterModal_inputField__6yl44",J=function(e){var t=e.setModalVisible,a=(0,s.useState)(0),n=(0,r.Z)(a,2),i=n[0],c=n[1],u=(0,s.useState)(""),d=(0,r.Z)(u,2),m=d[0],h=d[1],_=(0,y.I0)();(0,s.useEffect)((function(){v()}),[]);var f=function(e){c((function(t){return Math.max(0,t+e)}))},p=function(){var e=(0,o.Z)(l().mark((function e(){var a,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=JSON.parse(localStorage.getItem("persist:auth")),n=JSON.parse(a.accessToken)){e.next=5;break}return alert("Unauthorized: No access token found"),e.abrupt("return");case 5:return e.prev=5,e.next=8,_((0,C.R$)({accessToken:n,amount:i,time:m}));case 8:t(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),alert(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(){return e.apply(this,arguments)}}(),v=function(){for(var e=document.getElementById("time"),t=new Date,a=t.getHours(),n=5*Math.floor(t.getMinutes()/5),r=0;r<24;r++)for(var s=0;s<60;s+=5){var o=document.createElement("option");o.value="".concat(r.toString().padStart(2,"0"),":").concat(s.toString().padStart(2,"0")),o.textContent="".concat(r.toString().padStart(2,"0"),":").concat(s.toString().padStart(2,"0")),r===a&&s===n&&(o.selected=!0,h(o.value)),e.appendChild(o)}};return(0,k.jsx)("div",{className:B,children:(0,k.jsxs)("div",{className:Z,children:[(0,k.jsxs)("div",{className:I,children:[(0,k.jsx)("h2",{children:"Add water"}),(0,k.jsx)("span",{className:L,onClick:function(){t(!1)},children:"\xd7"})]}),(0,k.jsxs)("div",{className:A,children:[(0,k.jsx)("h4",{className:H,htmlFor:"amount",children:"Choose a value:"}),(0,k.jsx)("label",{className:G,htmlFor:"amount",children:"Amount of water:"}),(0,k.jsxs)("div",{className:F,children:[(0,k.jsx)("button",{className:P,onClick:function(){return f(-50)},children:"-"}),(0,k.jsxs)("span",{id:"amount",children:[i,"ml"]}),(0,k.jsx)("button",{className:P,onClick:function(){return f(50)},children:"+"})]}),(0,k.jsx)("label",{className:H,htmlFor:"time",children:"Recording time:"}),(0,k.jsx)("select",{className:O,id:"time",onChange:function(e){return h(e.target.value)}}),(0,k.jsx)("h4",{className:H,htmlFor:"value",children:"Enter the value of the water used:"}),(0,k.jsx)("input",{className:O,type:"number",id:"value",value:i,onChange:function(e){return c(Number(e.target.value))}}),(0,k.jsxs)("div",{className:R,children:[(0,k.jsx)("input",{className:z,type:"text",id:"autoFillInput",readOnly:!0,value:"".concat(i,"ml")}),(0,k.jsx)("button",{className:V,onClick:p,children:"Save"})]})]})]})})},Y=a(3016),U=a(4217),K=function(e){var t=e.sliderValue,a=(0,s.useState)(256),n=(0,r.Z)(a,2),o=n[0],i=n[1];return(0,s.useEffect)((function(){var e=function(){window.innerWidth>=1440?i(350):window.innerWidth>=768?i(325):i(256)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),(0,k.jsxs)("svg",{className:h,width:"100%",height:"20",viewBox:"0 0 ".concat(o," 20"),children:[(0,k.jsx)("rect",{x:"0",y:"6",width:o,height:"8",fill:"#d7e3ff",rx:"7"}),(0,k.jsx)("rect",{x:"0",y:"6",width:t/100*o,height:"8",fill:"#9ebbff",rx:"7"}),(0,k.jsx)("circle",{cx:Math.min(Math.max(t/100*o,7),o-7),cy:"10",r:"7",fill:"#ffffff",stroke:"#407bff",strokeWidth:"1"})]})},X=function(){var e=(0,s.useState)(!1),t=(0,r.Z)(e,2),a=t[0],i=t[1],h=(0,s.useState)(0),j=(0,r.Z)(h,2),g=j[0],b=j[1],S=(0,s.useState)(2e3),w=(0,r.Z)(S,1)[0],M=(0,s.useState)([]),W=(0,r.Z)(M,2),D=W[0],T=W[1],B=(0,y.I0)(),Z=(0,y.v9)(U.rK);console.log(D),(0,s.useEffect)((function(){var e=function(){var e=(0,o.Z)(l().mark((function e(){var t,a,n,r,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new Date,a=t.toISOString().slice(0,16),e.next=5,Y.Z.get("https://the-dominators-back-project.onrender.com/water/today",{headers:{Authorization:"Bearer ".concat(Z)},params:{date:a}});case 5:n=e.sent,r=n.data.records||[],s=r.reduce((function(e,t){return e+t.amount}),0),T(r),b(s),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("Error fetching water records",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[Z]);var I=Math.min(g/w*100,100),L=function(){var e=(0,o.Z)(l().mark((function e(t,a){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!1),e.prev=1,e.next=4,B((0,C.R$)({accessToken:Z,amount:t,time:a}));case 4:r={amount:t,date:a},T((function(e){return[].concat((0,n.Z)(e),[r])})),b((function(e){return e+t})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error("Error adding water record",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,a){return e.apply(this,arguments)}}();return(0,k.jsxs)("div",{className:c,children:[(0,k.jsx)(E,{}),(0,k.jsx)("div",{className:u}),(0,k.jsxs)("div",{className:N,children:[(0,k.jsxs)("div",{className:d,children:[(0,k.jsx)("span",{className:m,children:"Today"}),(0,k.jsx)(K,{sliderValue:I}),(0,k.jsx)("div",{className:_,children:[0,50,100].map((function(e,t){return(0,k.jsxs)("div",{className:f,children:[(0,k.jsx)("div",{className:p}),(0,k.jsxs)("span",{children:[e,"%"]})]},t)}))})]}),(0,k.jsxs)("button",{className:v,onClick:function(){i(!0)},children:[(0,k.jsx)("svg",{className:x,width:"20",height:"20",children:(0,k.jsx)("use",{href:"./images_auth/vectorbtn.svg#icon-vector-btn"})}),"Add Water"]}),a&&(0,k.jsx)(J,{setModalVisible:i,onClose:L})]})]})},q={todayWaterListSection:"TodayWaterList_todayWaterListSection__tsQ3J",title:"TodayWaterList_title__1N7Qm",list:"TodayWaterList_list__pz4ad",listItem:"TodayWaterList_listItem__Nh9Nv",info:"TodayWaterList_info__RbyUS",amount:"TodayWaterList_amount__d+vnD",time:"TodayWaterList_time__4fofH",actions:"TodayWaterList_actions__cBHzi",editButton:"TodayWaterList_editButton__XlLch",deleteButton:"TodayWaterList_deleteButton__M0gAj",addButton:"TodayWaterList_addButton__gMK19",twbtni:"TodayWaterList_twbtni__EiBtO"},Q=a(5818),$={modal:"EditWaterModal_modal__GhXVO",modalContent:"EditWaterModal_modalContent__tX-md",modalHeader:"EditWaterModal_modalHeader__LghY1",close:"EditWaterModal_close__VvITb",modalBody:"EditWaterModal_modalBody__dE70S",buttonChange:"EditWaterModal_buttonChange__rVTqz",amountSelector:"EditWaterModal_amountSelector__bl-wx","inputSave-container":"EditWaterModal_inputSave-container__4WY3h",inputSaveContainer:"EditWaterModal_inputSaveContainer__9gqFA",inputText:"EditWaterModal_inputText__CAfgU",labelDistance:"EditWaterModal_labelDistance__kLqa8",labelDistanceText:"EditWaterModal_labelDistanceText__BdCZ5",saveButton:"EditWaterModal_saveButton__SZbM8",waterEntry:"EditWaterModal_waterEntry__N7YWl",waterAmount:"EditWaterModal_waterAmount__OqrrT",waterTime:"EditWaterModal_waterTime__noB83"},ee=function(e){var t=e.setModalVisible,a=e.waterRecord,n=(0,s.useState)(a?a.amount:0),i=(0,r.Z)(n,2),c=i[0],u=i[1],d=(0,s.useState)(""),m=(0,r.Z)(d,2),h=m[0],_=m[1],f=(0,y.I0)();(0,s.useEffect)((function(){x(),a&&_(new Date(a.date).toISOString().substring(11,16))}),[a]);var p=function(e){u((function(t){return Math.max(0,t+e)}))},v=function(){var e=(0,o.Z)(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a||!a._id){e.next=11;break}return e.prev=1,n=(new Date).toISOString().split("T")[0]+"T"+h+":00Z",e.next=5,f((0,C.yc)({userId:a.userId,date:n,amount:c}));case 5:t(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),x=function(){for(var e=document.getElementById("time"),t=new Date,a=t.getHours(),n=5*Math.floor(t.getMinutes()/5),r=0;r<24;r++)for(var s=0;s<60;s+=5){var o=document.createElement("option");o.value="".concat(r.toString().padStart(2,"0"),":").concat(s.toString().padStart(2,"0")),o.textContent="".concat(r.toString().padStart(2,"0"),":").concat(s.toString().padStart(2,"0")),r===a&&s===n&&(o.selected=!0,_(o.value)),e.appendChild(o)}};return(0,k.jsx)("div",{className:$.modal,children:(0,k.jsxs)("div",{className:$.modalContent,children:[(0,k.jsxs)("div",{className:$.modalHeader,children:[(0,k.jsx)("h2",{children:"Edit the entered amount of water"}),(0,k.jsx)("span",{className:$.close,onClick:function(){t(!1)},children:"\xd7"})]}),(0,k.jsxs)("div",{className:$.modalBody,children:[(0,k.jsxs)("div",{className:$.waterEntry,children:[(0,k.jsx)(Q.Z,{name:"glass"})," ",(0,k.jsx)("span",{className:$.waterAmount,children:a&&a.amount?"".concat(c," ml"):"No notes yet"}),a&&a.amount?(0,k.jsx)("span",{className:$.waterTime,children:h}):null]}),(0,k.jsx)("h4",{className:$.labelDistance,children:"Correct entered data:"}),(0,k.jsx)("label",{className:$.labelDistanceText,htmlFor:"amount",children:"Amount of water:"}),(0,k.jsxs)("div",{className:$.amountSelector,children:[(0,k.jsx)("button",{className:$.buttonChange,onClick:function(){return p(-50)},children:"-"}),(0,k.jsxs)("span",{id:"amount",children:[c,"ml"]}),(0,k.jsx)("button",{className:$.buttonChange,onClick:function(){return p(50)},children:"+"})]}),(0,k.jsx)("label",{className:$.labelDistance,htmlFor:"time",children:"Recording time:"}),(0,k.jsx)("select",{className:$.inputText,id:"time",onChange:function(e){return _(e.target.value)}}),(0,k.jsx)("h4",{className:$.labelDistance,children:"Enter the value of the water used:"}),(0,k.jsx)("input",{className:$.inputText,type:"number",id:"value",value:c,onChange:function(e){return u(Number(e.target.value))}}),(0,k.jsxs)("div",{className:$.inputSaveContainer,children:[(0,k.jsx)("input",{className:$.inputField,type:"text",id:"autoFillInput",readOnly:!0,value:"".concat(c,"ml")}),(0,k.jsx)("button",{className:$.saveButton,onClick:v,children:"Save"})]})]})]})})},te=a(1413),ae=function(e){return e.auth.user.waterRate};var ne=a.p+"static/media/sprite.2938a5482846c8085447cd6b9efdd6e9.svg",re={header:"DaysGeneralStats_header__zJwj9",dayStatsWrap:"DaysGeneralStats_dayStatsWrap__0LXe3",fadeInDown:"DaysGeneralStats_fadeInDown__WznhC",date:"DaysGeneralStats_date__a+Vzv",daysCloseButton:"DaysGeneralStats_daysCloseButton__o4VkW",dayStatsHead:"DaysGeneralStats_dayStatsHead__tyzlH",dayStats:"DaysGeneralStats_dayStats__N8Jud"},se=function(e){var t=e.isStatsOpen,a=e.closeStats,n=e.selectedDay,o=e.statsPosition,i=(0,y.v9)(ae),l=(0,s.useState)(o),c=(0,r.Z)(l,2),u=c[0],d=c[1],m=(0,s.useState)(!1),h=(0,r.Z)(m,2),_=h[0],f=h[1],p=(0,s.useState)({x:0,y:0}),v=(0,r.Z)(p,2),x=v[0],N=v[1];(0,s.useEffect)((function(){o&&d(o)}),[o]);var j=function(e){_&&d({top:e.clientY-x.y,left:e.clientX-x.x})},g=function(){f(!1)};return(0,s.useEffect)((function(){return _?(document.addEventListener("mousemove",j),document.addEventListener("mouseup",g)):(document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",g)),function(){document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",g)}})),n?(0,k.jsxs)("div",{className:"".concat(re.dayStatsWrap," ").concat(t?re.open:""),style:{top:"".concat(u.top,"px"),left:"".concat(u.left,"px"),transform:"translate(-75%, -25%)",position:"absolute",zIndex:10},onMouseDown:function(e){var t=e.currentTarget.getBoundingClientRect();f(!0),N({x:e.clientX-t.left,y:e.clientY-t.top})},children:[(0,k.jsxs)("div",{className:re.header,children:[(0,k.jsxs)("p",{className:re.date,children:[n.date,", ",n.month]}),(0,k.jsx)("button",{className:re.daysCloseButton,onClick:a,children:(0,k.jsx)("svg",{width:"16px",height:"16px",stroke:"currentColor",fill:"currentColor",children:(0,k.jsx)("use",{xlinkHref:"".concat(ne,"#icon-close")})})})]}),(0,k.jsxs)("div",{className:re.statRow,children:[(0,k.jsx)("p",{className:re.statLabel,children:"Daily Norma:"}),(0,k.jsx)("p",{className:re.statValue,children:i?"".concat((i/1e3).toFixed(2)," L"):"0"})]}),(0,k.jsxs)("div",{className:re.statRow,children:[(0,k.jsx)("p",{className:re.statLabel,children:"Fulfillment of the daily norm:"}),(0,k.jsxs)("p",{className:re.statValue,children:[n.percentageOfGoal,"%"]})]}),(0,k.jsxs)("div",{className:re.statRow,children:[(0,k.jsx)("p",{className:re.statLabel,children:"How many servings of water:"}),(0,k.jsx)("p",{className:re.statValue,children:n.recordsCount})]})]}):null},oe={monthTableWrap:"MonthStatsTable_monthTableWrap__RUvkN",paginationWrap:"MonthStatsTable_paginationWrap__DlkWe",daysList:"MonthStatsTable_daysList__uEEAv",dayItem:"MonthStatsTable_dayItem__lh8AI",dayNumber:"MonthStatsTable_dayNumber__V-WmZ",dayPercentage:"MonthStatsTable_dayPercentage__0nKnN",monthsHead:"MonthStatsTable_monthsHead__N7CCt",monthSelector:"MonthStatsTable_monthSelector__1Igvw",monthAndYear:"MonthStatsTable_monthAndYear__Y89jc",monthBackButton:"MonthStatsTable_monthBackButton__7IEHe",monthNextButton:"MonthStatsTable_monthNextButton__aSu38"},ie=a(2639);function le(){var e=(0,s.useCallback)((function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][e]}),[]),t=(0,s.useState)(!1),a=(0,r.Z)(t,2),n=a[0],o=a[1],i=(0,s.useState)(null),l=(0,r.Z)(i,2),c=l[0],u=l[1],d=(0,s.useState)([]),m=(0,r.Z)(d,2),h=m[0],_=m[1],f=(0,y.v9)(U.rK),p=(0,s.useState)(!1),v=(0,r.Z)(p,2),x=v[0],N=v[1],j=(0,s.useState)({top:0,right:0}),g=(0,r.Z)(j,2),b=g[0],S=g[1],w=(0,s.useState)({currentMonthIndex:(new Date).getMonth(),currentYear:(new Date).getFullYear(),currentDate:(new Date).getDate()}),M=(0,r.Z)(w,1)[0],W=M.currentMonthIndex,D=M.currentYear,T=M.currentDate,E=(0,s.useState)(W),B=(0,r.Z)(E,2),Z=B[0],I=B[1],L=(0,s.useState)(D),A=(0,r.Z)(L,2),F=A[0],R=A[1],O=(0,s.useMemo)((function(){return e(Z)}),[Z,e]),H=(0,s.useMemo)((function(){return Array.from({length:new Date(F,Z+1,0).getDate()},(function(e,t){return{month:O,date:t+1,percentageOfGoal:0,recordsCount:0}}))}),[Z,F,O]),G=function(e){var t=(Z+e+12)%12;R(11===t&&-1===e?F-1:0===t&&1===e?F+1:F),I(t)},V=(0,y.I0)();(0,s.useEffect)((function(){if(f){N(!0);var e=O;V((0,C.D6)({monthName:e,year:F,accessToken:f})).unwrap().then((function(e){if(e&&Array.isArray(e.data)){var t=e.data.reduce((function(e,t){var a=function(e){if(!e||"string"!==typeof e)return null;var t=e.split(", "),a=(0,r.Z)(t,2),n=a[0],s=a[1];if(!n||!s)return null;var o=["January","February","March","April","May","June","July","August","September","October","November","December"].indexOf(s.trim());if(-1===o)return null;var i=parseInt(n.trim());return isNaN(i)?null:new Date((new Date).getFullYear(),o,i)}(t.date);a&&(e[a.toISOString().split("T")[0]]={percentageOfGoal:parseInt(t.percentageOfGoal)||0,recordsCount:t.recordsCount||0});return e}),{}),a=H.map((function(e){var a=new Date(F,Z,e.date).toISOString().split("T")[0],n=t[a];return n?(0,te.Z)((0,te.Z)({},e),{},{percentageOfGoal:n.percentageOfGoal,recordsCount:n.recordsCount}):e}));_(a)}})).catch((function(e){console.error("Error fetching data:",e)})).finally((function(){N(!1)}))}}),[f,Z,F,V,H,O]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("div",{className:oe.paginationWrap,children:[(0,k.jsx)("h2",{className:oe.monthsHead,children:"Month"}),(0,k.jsxs)("div",{className:oe.monthSelector,children:[(0,k.jsx)("button",{className:"".concat(oe.monthButton," ").concat(oe.monthBackButton),onClick:function(){return G(-1)},children:(0,k.jsx)("svg",{width:"14px",height:"14px",children:(0,k.jsx)("use",{href:"".concat(ne,"#icon-chevron-double-up")})})}),(0,k.jsxs)("p",{className:oe.monthAndYear,children:[O,", ",F]}),(0,k.jsx)("button",{className:"".concat(oe.monthButton," ").concat(oe.monthNextButton),onClick:function(){return G(1)},disabled:Z===W&&F===D,children:(0,k.jsx)("svg",{width:"14px",height:"14px",children:(0,k.jsx)("use",{href:"".concat(ne,"#icon-chevron-double-up")})})})]})]}),x?(0,k.jsx)(ie.Z,{}):(0,k.jsx)("ul",{className:oe.daysList,children:null===h||void 0===h?void 0:h.map((function(e){var t,a=e.date===T&&W===Z;return(0,k.jsxs)("li",{className:oe.dayItem,children:[(0,k.jsx)("p",{id:"day-number",onClick:function(t){return function(e,t){var a=t.currentTarget.getBoundingClientRect();S({top:a.top+window.scrollY,left:a.left+a.width/2}),u(e),o(!0)}(e,t)},className:"".concat(oe.dayNumber," ").concat(oe["dayNumber--".concat((t=e.percentageOfGoal,t&&0!==t?t>50?"high":"low":"neutral"))]," ").concat(a&&e.percentageOfGoal>0?oe.dayNumberSelected:""),children:e.date}),(0,k.jsx)("p",{className:oe.dayPercentage,children:e.percentageOfGoal?"".concat(e.percentageOfGoal+"%"):"-"})]},e.date)}))}),n&&(0,k.jsx)(se,{closeStats:function(){o(!1),u(null)},isOpen:n,selectedDay:c,statsPosition:b})]})}var ce=function(){var e=(0,s.useState)(!1),t=(0,r.Z)(e,2),a=t[0],n=t[1],i=(0,s.useState)(!1),c=(0,r.Z)(i,2),u=c[0],d=c[1],m=(0,y.I0)(),h=(0,y.v9)(U.rK),_=(0,s.useState)(null),f=(0,r.Z)(_,2),p=f[0],v=f[1],x=(0,s.useState)([]),N=(0,r.Z)(x,2),j=N[0],g=N[1],b=(0,s.useState)(0),S=(0,r.Z)(b,2),w=S[0],M=S[1],W=(0,s.useState)(0),D=(0,r.Z)(W,2),T=D[0],E=D[1],B=(0,s.useRef)(null);console.log(w),console.log(T);var Z=(0,s.useCallback)((function(){if(h){var e=(new Date).toISOString().slice(0,16);Y.Z.get("https://the-dominators-back-project.onrender.com/water/today",{headers:{Authorization:"Bearer ".concat(h)},params:{date:e}}).then((function(e){console.log("API Response:",e.data);var t=e.data,a=t.status,n=t.percentageOfGoal,r=t.records;if(200===a&&Array.isArray(r)){g(r);var s=r.reduce((function(e,t){return e+t.amount}),0);M(s),E(n||0)}else console.error("Unexpected response or invalid data:",e.data)})).catch((function(e){console.error("Error fetching water records:",e)}))}}),[h]);(0,s.useEffect)((function(){Z()}),[Z]),(0,s.useEffect)((function(){B.current&&(B.current.scrollTop=B.current.scrollHeight)}),[j]);var I=function(){var e=(0,o.Z)(l().mark((function e(t,a){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n(!1),!h){e.next=11;break}return e.prev=2,e.next=5,m((0,C.R$)({amount:t,time:a}));case 5:Z(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error("Error adding water record",e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,a){return e.apply(this,arguments)}}(),L=function(){var e=(0,o.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,m((0,C.e4)(t));case 5:"fulfilled"===e.sent.meta.requestStatus&&g((function(e){return e.filter((function(e){return e._id!==t}))})),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return(0,k.jsxs)("section",{className:q.todayWaterListSection,children:[(0,k.jsx)("h2",{className:q.title,children:"Today"}),(0,k.jsx)("ul",{className:q.list,ref:B,children:j.map((function(e){var t=e._id,a=e.amount,n=e.date;return(0,k.jsxs)("li",{className:q.listItem,children:[(0,k.jsxs)("div",{className:q.info,children:[(0,k.jsxs)("span",{className:q.amount,children:[(0,k.jsx)("svg",{width:"36",height:"36",className:q.amountIcon,children:(0,k.jsx)("use",{href:"./images_auth/today_water.svg#icon-today_water"})}),a," ml"]}),(0,k.jsx)("span",{className:q.time,children:new Date(n).toLocaleTimeString()})]}),(0,k.jsxs)("div",{className:q.actions,children:[(0,k.jsx)("button",{className:q.editButton,onClick:function(){return function(e){var t=j.find((function(t){return t._id===e}));v(t),d(!0)}(t)},"aria-label":"Edit",children:(0,k.jsx)("svg",{width:"16",height:"16",children:(0,k.jsx)("use",{href:"./images_auth/td_editdelet.svg#icon-edit"})})}),(0,k.jsx)("button",{className:q.deleteButton,onClick:function(){return L(t)},"aria-label":"Delete",children:(0,k.jsx)("svg",{width:"16",height:"16",children:(0,k.jsx)("use",{href:"./images_auth/td_editdelet.svg#icon-delete"})})})]})]},t)}))}),(0,k.jsx)("button",{className:q.addButton,onClick:function(){n(!0)},children:"+ Add water"}),a&&(0,k.jsx)(J,{setModalVisible:n,onClose:I}),u&&p&&(0,k.jsx)(ee,{setModalVisible:d,waterRecord:p,onSave:Z}),(0,k.jsx)("section",{className:q.MonthStatsTableSection,children:(0,k.jsx)(le,{})})]})},ue="HomePage_homeContainer__6ghGM",de="HomePage_waterTrackerSection__tdyHv",me="HomePage_homeSectionsWrapper__tR7W2",he="HomePage_statsSectionsWrapper__Jrh0r",_e=function(){var e=(0,s.useState)(0),t=(0,r.Z)(e,2),a=t[0],o=t[1],i=(0,s.useState)([]),l=(0,r.Z)(i,2),c=l[0],u=l[1];return(0,k.jsx)("div",{className:ue,children:(0,k.jsxs)("div",{className:me,children:[(0,k.jsx)("section",{className:de,children:(0,k.jsx)(X,{sliderValue:a,onSliderChange:function(e){o(e)},onAddWaterClick:function(){var e={id:Date.now().toString(),amount:200,time:(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};u((function(t){return[].concat((0,n.Z)(t),[e])})),o((function(e){return Math.min(e+10,100)}))}})}),(0,k.jsx)("div",{className:he,children:(0,k.jsx)(ce,{waterRecords:c,onEdit:function(e){console.log("Edit record with ID:",e)},onDelete:function(e){u((function(t){return t.filter((function(t){return t.id!==e}))}))}})})]})})}}}]);
//# sourceMappingURL=755.baeac864.chunk.js.map