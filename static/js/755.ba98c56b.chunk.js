"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[755],{3755:function(e,t,a){a.r(t),a.d(t,{default:function(){return de}});var n=a(3433),r=a(9439),o=a(2791),s=a(5861),i=a(7757),l=a.n(i),c="WaterRatioPanel_dailyNormaSection__lejGd",u="WaterRatioPanel_imageContainer__JcPUd",d="WaterRatioPanel_progressContainer__f0Qbe",m="WaterRatioPanel_progressTitle__Z-RzH",h="WaterRatioPanel_progressBar__dShpn",_="WaterRatioPanel_progressMarkers__+UN4R",f="WaterRatioPanel_marker__m+8sw",p="WaterRatioPanel_tick__Gwmie",v="WaterRatioPanel_addWaterBtn__mfzkw",x="WaterRatioPanel_icon__ZAI64",y="WaterRatioPanel_bottomSection__pH0C5",N=a(4420),g="DailyNorma_dailyNormaContainer__KHUio",j="DailyNorma_title__X4SZH",b="DailyNorma_normaContainer__yAGrT",w="DailyNorma_normaValue__Gd29x",S="DailyNorma_editButton__Zko6d",M=a(5667),C={modal:"DailyNormaModal_modal__vJ3oF",modalContent:"DailyNormaModal_modalContent__KvIF8",navnButton:"DailyNormaModal_navnButton__YziaA",closeButton:"DailyNormaModal_closeButton__Uur27",iconClose:"DailyNormaModal_iconClose__fl1tD",h2:"DailyNormaModal_h2__JS8CC",h3:"DailyNormaModal_h3__kI5gk",h4:"DailyNormaModal_h4__BHKPZ",labelInput:"DailyNormaModal_labelInput__zcUdV",formulas:"DailyNormaModal_formulas__wR-gI",label:"DailyNormaModal_label__FhZVe",formula:"DailyNormaModal_formula__LLd2F",form:"DailyNormaModal_form__Z0uC7",radioGroup:"DailyNormaModal_radioGroup__hW-rO","radio-label":"DailyNormaModal_radio-label__j1hG2",inputWrapper:"DailyNormaModal_inputWrapper__yjnEa",radioLabel:"DailyNormaModal_radioLabel__7kCVO",bluInput:"DailyNormaModal_bluInput__QSMvJ",textarea:"DailyNormaModal_textarea__g-zaU",saveButton:"DailyNormaModal_saveButton__b6ZL2","modal-content":"DailyNormaModal_modal-content__TsjF1","radio-group":"DailyNormaModal_radio-group__CV3cj",blu:"DailyNormaModal_blu__S7if2"},W=a(5818),D=a(184),k=function(e){var t=e.setModalVisible,a=(0,o.useState)("woman"),n=(0,r.Z)(a,2),i=n[0],c=n[1],u=(0,o.useState)(0),d=(0,r.Z)(u,2),m=d[0],h=d[1],_=(0,o.useState)(0),f=(0,r.Z)(_,2),p=f[0],v=f[1],x=(0,o.useState)("0 L"),y=(0,r.Z)(x,2),g=y[0],j=y[1],b=(0,o.useState)(0),w=(0,r.Z)(b,2),S=w[0],k=w[1],E=(0,N.I0)();(0,o.useEffect)((function(){return T(),window.addEventListener("resize",T),function(){return window.removeEventListener("resize",T)}}),[]);var T=function(){var e=document.getElementById("infoText");e.style.height="auto",e.style.height=e.scrollHeight+"px"},B=(0,o.useCallback)((function(){var e;"woman"===i?e=.03*m+.4*p:"man"===i&&(e=.04*m+.6*p),isNaN(e)&&(e=0),j(0===e?"0 L":e.toFixed(2)+" L")}),[i,m,p]);(0,o.useEffect)((function(){var e=function(e){"Escape"===e.key&&t(!1)};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]),(0,o.useEffect)((function(){B()}),[B]);var I=function(e){"0"===e.target.value&&(e.target.value="")},Z=function(e){""===e.target.value&&(e.target.value="0")},L=function(){var e=(0,s.Z)(l().mark((function e(a){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!((n=S)>5)){e.next=5;break}return alert("\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0443\u0442\u043e\u0447\u043d\u0430\u044f \u043d\u043e\u0440\u043c\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u044f \u0432\u043e\u0434\u044b - 5 L"),e.abrupt("return");case 5:return e.prev=5,e.next=8,E((0,M.X7)({dailyNorma:n})).unwrap();case 8:e.sent.error||t(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),alert("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t){return e.apply(this,arguments)}}();return(0,D.jsx)("div",{className:C.modal,children:(0,D.jsxs)("div",{className:C.modalContent,children:[(0,D.jsxs)("div",{className:C.navnButton,children:[(0,D.jsx)("h2",{className:C.h2,children:"My daily norma"}),(0,D.jsx)("button",{className:C.closeButton,onClick:function(){return t(!1)},children:(0,D.jsx)(W.Z,{name:"close",className:C.iconClose})})]}),(0,D.jsxs)("div",{className:C.formulas,children:[(0,D.jsxs)("p",{children:[(0,D.jsx)("span",{className:C.label,children:"For girl:"}),(0,D.jsx)("span",{className:C.formula,children:"V=(M*0.03) + (T*0.4)"})]}),(0,D.jsxs)("p",{children:[(0,D.jsx)("span",{className:C.label,children:"For man:"}),(0,D.jsx)("span",{className:C.formula,children:"V=(M*0.04) + (T*0.6)"})]})]}),(0,D.jsx)("textarea",{id:"infoText",readOnly:!0,className:C.textarea,value:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"}),(0,D.jsxs)("form",{className:C.form,onSubmit:L,children:[(0,D.jsx)("h4",{className:C.h4,children:"Calculate your rate:"}),(0,D.jsxs)("div",{className:C.radioGroup,children:[(0,D.jsxs)("label",{className:C.radioLabel,children:[(0,D.jsx)("input",{type:"radio",name:"gender",value:"woman",checked:"woman"===i,onChange:function(){return c("woman")}})," For woman"]}),(0,D.jsxs)("label",{className:C.radioLabel,children:[(0,D.jsx)("input",{type:"radio",name:"gender",value:"man",checked:"man"===i,onChange:function(){return c("man")}})," For man"]})]}),(0,D.jsxs)("div",{className:C.inputWrapper,children:[(0,D.jsx)("label",{className:C.labelInput,htmlFor:"weight",children:"Your weight in kilograms:"}),(0,D.jsx)("input",{className:C.bluInput,type:"number",id:"weight",name:"weight",value:m,onChange:function(e){return h(parseFloat(e.target.value))},onFocus:I,onBlur:Z})]}),(0,D.jsxs)("div",{className:C.inputWrapper,children:[(0,D.jsx)("label",{className:C.labelInput,htmlFor:"activity-time",children:"The time of active participation in sports or other activities with a high physical load in hours:"}),(0,D.jsx)("input",{className:C.bluInput,type:"number",id:"activity-time",name:"activity-time",value:p,onChange:function(e){return v(parseFloat(e.target.value))},onFocus:I,onBlur:Z})]}),(0,D.jsx)("div",{children:(0,D.jsxs)("p",{children:[(0,D.jsx)("span",{children:"The required amount of water in liters per day:"}),(0,D.jsx)("span",{className:"".concat(C.blu," ").concat(C.requiredWater),children:g})]})}),(0,D.jsx)("h4",{className:C.h4,children:"Write down how much water you will drink:"}),(0,D.jsx)("div",{className:C.inputWrapper,children:(0,D.jsx)("input",{className:C.bluInput,type:"number",id:"water-intake",name:"water-intake",value:S,onChange:function(e){return k(parseFloat(e.target.value))},onFocus:I,onBlur:Z})}),(0,D.jsx)("button",{type:"submit",className:C.saveButton,children:"Save"})]})]})})},E=a(4746),T=function(){var e=(0,N.I0)(),t=(0,o.useState)(!1),a=(0,r.Z)(t,2),n=a[0],i=a[1];(0,o.useEffect)((function(){e((0,M.BT)())}),[e]);var c=(0,N.v9)(E.S8),u=(null===c||void 0===c?void 0:c.data)||{},d=u.daylyNorm?u.daylyNorm/1e3:2,m=function(){var t=(0,s.Z)(l().mark((function t(a){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e((0,M.X7)({dailyNorma:1e3*a})).unwrap();case 3:t.sent&&i(!1),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Failed to update daily norma:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();return(0,D.jsxs)("div",{className:g,children:[(0,D.jsx)("p",{className:j,children:"My daily norma"}),(0,D.jsxs)("div",{className:b,children:[(0,D.jsxs)("span",{className:w,children:[d," L"]}),(0,D.jsx)("button",{onClick:function(){i(!0)},className:S,children:"Edit"})]}),n&&(0,D.jsx)(k,{setModalVisible:i,handleSave:m})]})},B=a(3930),I="AddWaterModal_modal__dUadi",Z="AddWaterModal_modalContent__PCT0Q",L="AddWaterModal_modalHeader__blV6-",A="AddWaterModal_close__zmKJE",F="AddWaterModal_modalBody__snhFv",R="AddWaterModal_amountSelector__fdnLF",H="AddWaterModal_inputSaveContainer__BhJMK",G="AddWaterModal_inputText__8XBA6",V="AddWaterModal_labelDistance__1laX6",P="AddWaterModal_labelDistanceText__l4fKH",O="AddWaterModal_saveButton__aM7B3",J="AddWaterModal_buttonSelector__B-Mvf",z="AddWaterModal_inputField__6yl44",Y=function(e){var t=e.setModalVisible,a=e.onClose,n=(0,o.useState)(0),i=(0,r.Z)(n,2),c=i[0],u=i[1],d=(0,o.useState)(""),m=(0,r.Z)(d,2),h=m[0],_=m[1],f=(0,N.I0)();(0,o.useEffect)((function(){x()}),[]);var p=function(e){u((function(t){return Math.max(0,t+e)}))},v=function(){var e=(0,s.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f((0,B.R$)({amount:c,time:h}));case 3:t(!1),a(c,h),window.location.reload(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("Error saving record: "+e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),x=function(){for(var e=document.getElementById("time"),t=new Date,a=t.getHours(),n=5*Math.floor(t.getMinutes()/5),r=0;r<24;r++)for(var o=0;o<60;o+=5){var s=document.createElement("option");s.value="".concat(r.toString().padStart(2,"0"),":").concat(o.toString().padStart(2,"0")),s.textContent="".concat(r.toString().padStart(2,"0"),":").concat(o.toString().padStart(2,"0")),r===a&&o===n&&(s.selected=!0,_(s.value)),e.appendChild(s)}};return(0,D.jsx)("div",{className:I,children:(0,D.jsxs)("div",{className:Z,children:[(0,D.jsxs)("div",{className:L,children:[(0,D.jsx)("h2",{children:"Add water"}),(0,D.jsx)("span",{className:A,onClick:function(){t(!1)},children:"\xd7"})]}),(0,D.jsxs)("div",{className:F,children:[(0,D.jsx)("h4",{className:V,htmlFor:"amount",children:"Choose a value:"}),(0,D.jsx)("label",{className:P,htmlFor:"amount",children:"Amount of water:"}),(0,D.jsxs)("div",{className:R,children:[(0,D.jsx)("button",{className:J,onClick:function(){return p(-50)},children:"-"}),(0,D.jsxs)("span",{id:"amount",children:[c,"ml"]}),(0,D.jsx)("button",{className:J,onClick:function(){return p(50)},children:"+"})]}),(0,D.jsx)("label",{className:V,htmlFor:"time",children:"Recording time:"}),(0,D.jsx)("select",{className:G,id:"time",onChange:function(e){return _(e.target.value)}}),(0,D.jsx)("h4",{className:V,htmlFor:"value",children:"Enter the value of the water used:"}),(0,D.jsx)("input",{className:G,type:"number",id:"value",value:c,onChange:function(e){return u(Number(e.target.value))}}),(0,D.jsxs)("div",{className:H,children:[(0,D.jsx)("input",{className:z,type:"text",id:"autoFillInput",readOnly:!0,value:"".concat(c,"ml")}),(0,D.jsx)("button",{className:O,onClick:v,children:"Save"})]})]})]})})},U=function(e){return e.water.recordsToday},X=function(e){var t=e.sliderValue,a=(0,o.useState)(256),n=(0,r.Z)(a,2),s=n[0],i=n[1];return(0,o.useEffect)((function(){var e=function(){window.innerWidth>=1440?i(350):window.innerWidth>=768?i(325):i(256)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),(0,D.jsxs)("svg",{className:h,width:"100%",height:"20",viewBox:"0 0 ".concat(s," 20"),children:[(0,D.jsx)("rect",{x:"0",y:"6",width:s,height:"8",fill:"#d7e3ff",rx:"7"}),(0,D.jsx)("rect",{x:"0",y:"6",width:t/100*s,height:"8",fill:"#9ebbff",rx:"7"}),(0,D.jsx)("circle",{cx:Math.min(Math.max(t/100*s,7),s-7),cy:"10",r:"7",fill:"#ffffff",stroke:"#407bff",strokeWidth:"1"})]})},K=function(){var e=(0,o.useState)(!1),t=(0,r.Z)(e,2),a=t[0],n=t[1],i=(0,N.I0)(),h=localStorage.getItem("persist:auth"),g=(0,N.v9)(U);(0,o.useEffect)((function(){i((0,M.BT)())}),[i]);var j=(0,N.v9)(E.S8),b=((null===j||void 0===j?void 0:j.data)||{}).daylyNorm;console.log(b),(0,o.useEffect)((function(){h&&i((0,B.Jt)())}),[i,h]);var w=g.reduce((function(e,t){return e+t.amount}),0),S=Math.min(w/b*100,100),C=function(){var e=(0,s.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n(!1),!h){e.next=10;break}return e.prev=2,e.next=5,i((0,B.Jt)());case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error("Error fetching water records",e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(){return e.apply(this,arguments)}}();return(0,D.jsxs)("div",{className:c,children:[(0,D.jsx)(T,{}),(0,D.jsx)("div",{className:u}),(0,D.jsxs)("div",{className:y,children:[(0,D.jsxs)("div",{className:d,children:[(0,D.jsx)("span",{className:m,children:"Today"}),(0,D.jsx)(X,{sliderValue:S}),(0,D.jsx)("div",{className:_,children:[0,50,100].map((function(e,t){return(0,D.jsxs)("div",{className:f,children:[(0,D.jsx)("div",{className:p}),(0,D.jsxs)("span",{children:[e,"%"]})]},t)}))})]}),(0,D.jsxs)("button",{className:v,onClick:function(){n(!0)},children:[(0,D.jsx)("svg",{className:x,width:"20",height:"20",children:(0,D.jsx)("use",{href:"./images_auth/vectorbtn.svg#icon-vector-btn"})}),"Add Water"]}),a&&(0,D.jsx)(Y,{setModalVisible:n,onClose:C})]})]})},q={todayWaterListSection:"TodayWaterList_todayWaterListSection__tsQ3J",title:"TodayWaterList_title__1N7Qm",list:"TodayWaterList_list__pz4ad",listItem:"TodayWaterList_listItem__Nh9Nv",info:"TodayWaterList_info__RbyUS",amount:"TodayWaterList_amount__d+vnD",amountIcon:"TodayWaterList_amountIcon__+6tGu",time:"TodayWaterList_time__4fofH",actions:"TodayWaterList_actions__cBHzi",editButton:"TodayWaterList_editButton__XlLch",deleteButton:"TodayWaterList_deleteButton__M0gAj",addButton:"TodayWaterList_addButton__gMK19",twbtni:"TodayWaterList_twbtni__EiBtO"},Q={modal:"EditWaterModal_modal__GhXVO",modalContent:"EditWaterModal_modalContent__tX-md",modalHeader:"EditWaterModal_modalHeader__LghY1",close:"EditWaterModal_close__VvITb",modalBody:"EditWaterModal_modalBody__dE70S",buttonChange:"EditWaterModal_buttonChange__rVTqz",amountSelector:"EditWaterModal_amountSelector__bl-wx","inputSave-container":"EditWaterModal_inputSave-container__4WY3h",inputSaveContainer:"EditWaterModal_inputSaveContainer__9gqFA",inputText:"EditWaterModal_inputText__CAfgU",labelDistance:"EditWaterModal_labelDistance__kLqa8",labelDistanceText:"EditWaterModal_labelDistanceText__BdCZ5",saveButton:"EditWaterModal_saveButton__SZbM8",waterEntry:"EditWaterModal_waterEntry__N7YWl",waterAmount:"EditWaterModal_waterAmount__OqrrT",waterTime:"EditWaterModal_waterTime__noB83"},$=function(e){var t=e.setModalVisible,a=e.waterRecord,n=(0,o.useState)(a?a.amount:0),i=(0,r.Z)(n,2),c=i[0],u=i[1],d=(0,o.useState)(""),m=(0,r.Z)(d,2),h=m[0],_=m[1],f=(0,o.useState)(null),p=(0,r.Z)(f,2),v=p[0],x=p[1],y=(0,o.useState)(null),g=(0,r.Z)(y,2),j=g[0],b=g[1],w=(0,N.I0)(),S=(0,N.v9)(U);console.log(h),(0,o.useEffect)((function(){var e=function(){var e=(0,s.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w((0,B.Jt)());case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),k()}),[w]),(0,o.useEffect)((function(){if(a){var e=new Date(a.date),t=e.getHours(),n=e.getMinutes().toString().padStart(2,"0"),r=t>=12?"PM":"AM",o=(t%12||12).toString().padStart(2,"0");if(_("".concat(o,":").concat(n," ").concat(r)),console.log("Current Water Record:",a),console.log("All Records:",S),S&&S.length>1){var s=S.findIndex((function(e){return e._id===a._id}));if(console.log("Current Record Index:",s),s>0){var i=S[s-1];console.log("Previous Record:",i),x(i.amount);var l=new Date(i.date),c=l.getHours(),u=l.getMinutes().toString().padStart(2,"0"),d=c>=12?"PM":"AM",m=(c%12||12).toString().padStart(2,"0");b("".concat(m,":").concat(u," ").concat(d))}}}}),[S,a]),(0,o.useEffect)((function(){if(S&&S.length>1&&a){var e=S.findIndex((function(e){return e._id===a._id}));if(e>0){var t=S[e-1];x(t.amount);var n=new Date(t.date),r=n.getHours(),o=n.getMinutes().toString().padStart(2,"0"),s=r>=12?"PM":"AM",i=(r%12||12).toString().padStart(2,"0");b("".concat(i,":").concat(o," ").concat(s))}}}),[S,a]);var M=function(e){u((function(t){return Math.max(0,t+e)}))},C=function(){var e=(0,s.Z)(l().mark((function e(){var n,r,o,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a||!a._id){e.next=14;break}return e.prev=1,n=document.getElementById("time"),r=n.value,o=(new Date).toISOString().split("T")[0]+"T"+r+":00",s=a._id.$oid||a._id,e.next=8,w((0,B.yc)({recordId:s,date:o,amount:c}));case 8:t(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=document.getElementById("time");if(e){for(var t=0;t<24;t++)for(var a=0;a<60;a+=5){var n=document.createElement("option"),r=t>=12?"PM":"AM",o=(t%12||12).toString().padStart(2,"0");n.value="".concat(o,":").concat(a.toString().padStart(2,"0")," ").concat(r),n.textContent="".concat(o,":").concat(a.toString().padStart(2,"0")," ").concat(r),e.appendChild(n)}var s=new Date,i=s.getHours(),l=5*Math.floor(s.getMinutes()/5),c=i>=12?"PM":"AM",u=(i%12||12).toString().padStart(2,"0");e.value="".concat(u,":").concat(l.toString().padStart(2,"0")," ").concat(c)}};return(0,D.jsx)("div",{className:Q.modal,children:(0,D.jsxs)("div",{className:Q.modalContent,children:[(0,D.jsxs)("div",{className:Q.modalHeader,children:[(0,D.jsx)("h2",{children:"Edit the entered amount of water"}),(0,D.jsx)("span",{className:Q.close,onClick:function(){t(!1)},children:"\xd7"})]}),(0,D.jsxs)("div",{className:Q.modalBody,children:[(0,D.jsxs)("div",{className:Q.waterEntry,children:[(0,D.jsx)(W.Z,{name:"glass"}),(0,D.jsx)("span",{className:Q.waterAmount,children:null!==v?"".concat(v," ml"):"No notes yet"}),null!==j?(0,D.jsx)("span",{className:Q.waterTime,children:j}):null]}),(0,D.jsx)("h4",{className:Q.labelDistance,children:"Correct entered data:"}),(0,D.jsx)("label",{className:Q.labelDistanceText,htmlFor:"amount",children:"Amount of water:"}),(0,D.jsxs)("div",{className:Q.amountSelector,children:[(0,D.jsx)("button",{className:Q.buttonChange,onClick:function(){return M(-50)},children:"-"}),(0,D.jsxs)("span",{id:"amount",children:[c,"ml"]}),(0,D.jsx)("button",{className:Q.buttonChange,onClick:function(){return M(50)},children:"+"})]}),(0,D.jsx)("label",{className:Q.labelDistance,htmlFor:"time",children:"Recording time:"}),(0,D.jsx)("select",{className:Q.inputText,id:"time",onChange:function(e){return _(e.target.value)}}),(0,D.jsx)("h4",{className:Q.labelDistance,children:"Enter the value of the water used:"}),(0,D.jsx)("input",{className:Q.inputText,type:"number",id:"value",value:c,onChange:function(e){return u(Number(e.target.value))}}),(0,D.jsxs)("div",{className:Q.inputSaveContainer,children:[(0,D.jsx)("input",{className:Q.inputField,type:"text",id:"autoFillInput",readOnly:!0,value:"".concat(c,"ml")}),(0,D.jsx)("button",{className:Q.saveButton,onClick:C,children:"Save"})]})]})]})})},ee=a(1413);var te=a.p+"static/media/sprite.2938a5482846c8085447cd6b9efdd6e9.svg",ae={header:"DaysGeneralStats_header__zJwj9",dayStatsWrap:"DaysGeneralStats_dayStatsWrap__0LXe3",fadeInDown:"DaysGeneralStats_fadeInDown__WznhC",date:"DaysGeneralStats_date__a+Vzv",daysCloseButton:"DaysGeneralStats_daysCloseButton__o4VkW",dayStatsHead:"DaysGeneralStats_dayStatsHead__tyzlH",dayStats:"DaysGeneralStats_dayStats__N8Jud",statValue:"DaysGeneralStats_statValue__mk3lR",statRow:"DaysGeneralStats_statRow__BbRbt"},ne=function(e){var t=e.isStatsOpen,a=e.closeStats,n=e.selectedDay,s=e.statsPosition,i=(0,o.useState)(s),l=(0,r.Z)(i,2),c=l[0],u=l[1],d=(0,o.useState)(!1),m=(0,r.Z)(d,2),h=m[0],_=m[1],f=(0,o.useState)({x:0,y:0}),p=(0,r.Z)(f,2),v=p[0],x=p[1],y=(0,N.I0)(),g=(0,o.useRef)(null);(0,o.useEffect)((function(){y((0,M.BT)())}),[y]);var j=(0,N.v9)(E.S8),b=(null===j||void 0===j?void 0:j.data)||{},w=b.daylyNorm?b.daylyNorm/1e3:2;(0,o.useEffect)((function(){u(s)}),[s]);var S=function(){_(!1)},C=c.top,W=c.left,k={top:"".concat(C-45,"px"),left:"".concat(W+10,"px"),transform:"translate(-50%, -100%)",zIndex:10},T=(0,o.useCallback)((function(e){"Escape"===e.key&&a()}),[a]);(0,o.useEffect)((function(){return document.addEventListener("keydown",T),function(){document.removeEventListener("keydown",T)}}),[T]);var B=(0,o.useCallback)((function(e){g.current&&!g.current.contains(e.target)&&a()}),[a]);return(0,o.useEffect)((function(){return document.addEventListener("mousedown",B),function(){document.removeEventListener("mousedown",B)}}),[B]),n?(0,D.jsxs)("div",{className:"".concat(ae.dayStatsWrap," ").concat(t?ae.open:""),style:k,onMouseDown:function(e){_(!0),x({x:e.clientX,y:e.clientY})},onMouseMove:function(e){if(h){var t=e.clientX-v.x,a=e.clientY-v.y;u((function(e){return{top:e.top+a,left:e.left+t}})),x({x:e.clientX,y:e.clientY})}},onMouseUp:S,onMouseLeave:S,ref:g,children:[(0,D.jsxs)("div",{className:ae.header,children:[(0,D.jsxs)("p",{className:ae.date,children:[n.date,", ",n.month]}),(0,D.jsx)("button",{className:ae.daysCloseButton,onClick:a,children:(0,D.jsx)("svg",{width:"16px",height:"16px",stroke:"currentColor",fill:"currentColor",children:(0,D.jsx)("use",{xlinkHref:"".concat(te,"#icon-close")})})})]}),(0,D.jsxs)("div",{className:ae.statRow,children:[(0,D.jsx)("p",{className:ae.statLabel,children:"Daily Norma:"}),(0,D.jsxs)("p",{className:ae.statValue,children:[w," L"]})]}),(0,D.jsxs)("div",{className:ae.statRow,children:[(0,D.jsx)("p",{className:ae.statLabel,children:"Fulfillment of the daily norm:"}),(0,D.jsxs)("p",{className:ae.statValue,children:[n.percentageOfGoal,"%"]})]}),(0,D.jsxs)("div",{className:ae.statRow,children:[(0,D.jsx)("p",{className:ae.statLabel,children:"How many servings of water:"}),(0,D.jsx)("p",{className:ae.statValue,children:n.recordsCount})]})]}):null},re={monthTableWrap:"MonthStatsTable_monthTableWrap__RUvkN",paginationWrap:"MonthStatsTable_paginationWrap__DlkWe",daysList:"MonthStatsTable_daysList__uEEAv",dayItem:"MonthStatsTable_dayItem__lh8AI",dayNumber:"MonthStatsTable_dayNumber__V-WmZ","dayNumber--low":"MonthStatsTable_dayNumber--low__P9iIZ",dayPercentage:"MonthStatsTable_dayPercentage__0nKnN",monthsHead:"MonthStatsTable_monthsHead__N7CCt",monthSelector:"MonthStatsTable_monthSelector__1Igvw",monthAndYear:"MonthStatsTable_monthAndYear__Y89jc",monthBackButton:"MonthStatsTable_monthBackButton__7IEHe",monthNextButton:"MonthStatsTable_monthNextButton__aSu38"},oe=a(2639);function se(){var e=(0,o.useCallback)((function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][e]}),[]),t=(0,o.useState)(!1),a=(0,r.Z)(t,2),n=a[0],s=a[1],i=(0,o.useState)(null),l=(0,r.Z)(i,2),c=l[0],u=l[1],d=(0,o.useState)([]),m=(0,r.Z)(d,2),h=m[0],_=m[1],f=localStorage.getItem("persist:auth"),p=(0,o.useState)(!1),v=(0,r.Z)(p,2),x=v[0],y=v[1],g=(0,o.useState)({top:0,right:0}),j=(0,r.Z)(g,2),b=j[0],w=j[1],S=(0,o.useState)({currentMonthIndex:(new Date).getMonth(),currentYear:(new Date).getFullYear(),currentDate:(new Date).getDate()}),M=(0,r.Z)(S,1)[0],C=M.currentMonthIndex,W=M.currentYear,k=M.currentDate,E=(0,o.useState)(C),T=(0,r.Z)(E,2),I=T[0],Z=T[1],L=(0,o.useState)(W),A=(0,r.Z)(L,2),F=A[0],R=A[1],H=(0,o.useMemo)((function(){return e(I)}),[I,e]),G=(0,o.useMemo)((function(){return Array.from({length:new Date(F,I+1,0).getDate()},(function(e,t){return{month:H,date:t+1,percentageOfGoal:0,recordsCount:0}}))}),[I,F,H]),V=function(e){var t=(I+e+12)%12;R(11===t&&-1===e?F-1:0===t&&1===e?F+1:F),Z(t)},P=(0,N.I0)();(0,o.useEffect)((function(){if(f){y(!0);var e=H;P((0,B.D6)({monthName:e,year:F,accessToken:f})).unwrap().then((function(e){if(e&&Array.isArray(e.data)){var t=e.data.reduce((function(e,t){var a=function(e){if(!e||"string"!==typeof e)return null;var t=e.split(", "),a=(0,r.Z)(t,2),n=a[0],o=a[1];if(!n||!o)return null;var s=["January","February","March","April","May","June","July","August","September","October","November","December"].indexOf(o.trim());if(-1===s)return null;var i=parseInt(n.trim());return isNaN(i)?null:new Date((new Date).getFullYear(),s,i)}(t.date);a&&(e[a.toISOString().split("T")[0]]={percentageOfGoal:parseInt(t.percentageOfGoal)||0,recordsCount:t.recordsCount||0});return e}),{}),a=G.map((function(e){var a=new Date(F,I,e.date).toISOString().split("T")[0],n=t[a];return n?(0,ee.Z)((0,ee.Z)({},e),{},{percentageOfGoal:n.percentageOfGoal,recordsCount:n.recordsCount}):e}));_(a)}})).catch((function(e){console.error("Error fetching data:",e)})).finally((function(){y(!1)}))}}),[f,I,F,P,G,H]);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)("div",{className:re.paginationWrap,children:[(0,D.jsx)("h2",{className:re.monthsHead,children:"Month"}),(0,D.jsxs)("div",{className:re.monthSelector,children:[(0,D.jsx)("button",{className:"".concat(re.monthButton," ").concat(re.monthBackButton),onClick:function(){return V(-1)},children:(0,D.jsx)("svg",{width:"14px",height:"14px",children:(0,D.jsx)("use",{href:"".concat(te,"#icon-chevron-double-up")})})}),(0,D.jsxs)("p",{className:re.monthAndYear,children:[H,", ",F]}),(0,D.jsx)("button",{className:"".concat(re.monthButton," ").concat(re.monthNextButton),onClick:function(){return V(1)},disabled:I===C&&F===W,children:(0,D.jsx)("svg",{width:"14px",height:"14px",children:(0,D.jsx)("use",{href:"".concat(te,"#icon-chevron-double-up")})})})]})]}),x?(0,D.jsx)(oe.Z,{}):(0,D.jsx)("ul",{className:re.daysList,children:null===h||void 0===h?void 0:h.map((function(e){var t,a=e.date===k&&C===I;return(0,D.jsxs)("li",{className:re.dayItem,children:[(0,D.jsx)("p",{id:"day-number",onClick:function(t){return function(e,t){var a=t.currentTarget.getBoundingClientRect(),n=a.left>window.innerWidth/2;w({top:a.top+window.scrollY-10,left:n?a.left-200:a.left}),u(e),s(!0)}(e,t)},className:"".concat(re.dayNumber," ").concat(re["dayNumber--".concat((t=e.percentageOfGoal,0===t?"neutral":t<100?"low":"high"))]," ").concat(a&&e.percentageOfGoal>0?re.dayNumberSelected:""),children:e.date}),(0,D.jsx)("p",{className:re.dayPercentage,children:e.percentageOfGoal?"".concat(e.percentageOfGoal+"%"):"-"})]},e.date)}))}),n&&(0,D.jsx)(ne,{closeStats:function(){s(!1),u(null)},isOpen:n,selectedDay:c,statsPosition:b})]})}var ie=function(){var e=(0,o.useState)(!1),t=(0,r.Z)(e,2),a=t[0],n=t[1],i=(0,o.useState)(!1),c=(0,r.Z)(i,2),u=c[0],d=c[1],m=(0,N.I0)(),h=localStorage.getItem("persist:auth"),_=(0,o.useState)(null),f=(0,r.Z)(_,2),p=f[0],v=f[1],x=(0,o.useRef)(null),y=(0,N.v9)(U);(0,o.useEffect)((function(){h&&(m((0,B.Jt)()),m((0,B.D6)()))}),[m,h]),(0,o.useEffect)((function(){x.current&&(x.current.scrollTop=x.current.scrollHeight)}),[y]);var g=function(){var e=(0,s.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n(!1),!h){e.next=12;break}return e.prev=2,e.next=5,m((0,B.Jt)());case 5:return e.next=7,m((0,B.D6)());case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error("Error adding water record",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=(0,s.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m((0,B.yc)(t));case 3:return e.next=5,m((0,B.Jt)());case 5:return e.next=7,m((0,B.D6)());case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error updating water record",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=(0,s.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,m((0,B.e4)(t));case 5:if("fulfilled"!==e.sent.meta.requestStatus){e.next=12;break}return e.next=9,m((0,B.Jt)());case 9:return e.next=11,m((0,B.D6)());case 11:window.location.reload();case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.error("Error deleting water record",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}();return(0,D.jsxs)("section",{className:q.todayWaterListSection,children:[(0,D.jsx)("h2",{className:q.title,children:"Today"}),(0,D.jsx)("ul",{className:q.list,ref:x,children:y.map((function(e){var t=e._id,a=e.amount,n=e.date;return(0,D.jsxs)("li",{className:q.listItem,children:[(0,D.jsxs)("div",{className:q.info,children:[(0,D.jsxs)("span",{className:q.amount,children:[(0,D.jsx)("svg",{className:q.amountIcon,children:(0,D.jsx)("use",{href:"./images_auth/today_water.svg#icon-today_water"})}),a," ml"]}),(0,D.jsx)("span",{className:q.time,children:new Date(n).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})})]}),(0,D.jsxs)("div",{className:q.actions,children:[(0,D.jsx)("button",{className:q.editButton,onClick:function(){return function(e){var t=y.find((function(t){return t._id===e}));v(t),d(!0)}(t)},"aria-label":"Edit",children:(0,D.jsx)("svg",{width:"16",height:"16",children:(0,D.jsx)("use",{href:"./images_auth/td_editdelet.svg#icon-edit"})})}),(0,D.jsx)("button",{className:q.deleteButton,onClick:function(){return b(t)},"aria-label":"Delete",children:(0,D.jsx)("svg",{width:"16",height:"16",children:(0,D.jsx)("use",{href:"./images_auth/td_editdelet.svg#icon-delete"})})})]})]},t)}))}),(0,D.jsx)("button",{className:q.addButton,onClick:function(){n(!0)},children:"+ Add water"}),a&&(0,D.jsx)(Y,{setModalVisible:n,onClose:g}),u&&p&&(0,D.jsx)($,{setModalVisible:d,waterRecord:p,onSave:j}),(0,D.jsx)("section",{className:q.MonthStatsTableSection,children:(0,D.jsx)(se,{})})]})},le="HomePage_homeContainer__6ghGM",ce="HomePage_waterTrackerSection__tdyHv",ue="HomePage_homeSectionsWrapper__tR7W2",de=function(){var e=(0,o.useState)(0),t=(0,r.Z)(e,2),a=t[0],s=t[1],i=(0,o.useState)([]),l=(0,r.Z)(i,2),c=l[0],u=l[1];return(0,D.jsx)("div",{className:le,children:(0,D.jsxs)("div",{className:ue,children:[(0,D.jsx)("section",{className:ce,children:(0,D.jsx)(K,{sliderValue:a,onSliderChange:function(e){s(e)},onAddWaterClick:function(){var e={id:Date.now().toString(),amount:200,time:(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};u((function(t){return[].concat((0,n.Z)(t),[e])})),s((function(e){return Math.min(e+10,100)}))}})}),(0,D.jsx)(ie,{waterRecords:c,onEdit:function(e){console.log("Edit record with ID:",e)},onDelete:function(e){u((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})})}}}]);
//# sourceMappingURL=755.ba98c56b.chunk.js.map