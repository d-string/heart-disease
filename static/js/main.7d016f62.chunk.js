(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,a,t){e.exports=t.p+"static/media/result-img.46a4bd8f.png"},function(e,a,t){e.exports=t(13)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),c=t.n(l),r=t(3),o=t.n(r),n=(t(11),t(1)),m=(t(12),t(4)),s=t.n(m);var i=function(){return c.a.createElement("h1",null,"Loding...")},p=function(e){var a=e.hasil;return c.a.createElement("div",{className:"result"},c.a.createElement("div",{class:"card",style:{width:"20em"}},c.a.createElement("img",{src:s.a,className:"card-img-top",alt:"result"}),c.a.createElement("div",{class:"card-body"},c.a.createElement("p",{class:"card-text"},a))))},u=function(){var e=c.a.useState(null),a=Object(n.a)(e,2),t=a[0],l=a[1],r=c.a.useState(!1),o=Object(n.a)(r,2),m=o[0],s=o[1];return c.a.createElement("div",{className:"container pt-5 mt-5 pb-5 main"},!1===m&&null===t?c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s(!0),fetch("https://api-heart-disease-gundar-2019.herokuapp.com/heart",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({age:e.target.age.value,sex:e.target.sex.value,cp:e.target.cp.value,trestbps:e.target.trestbps.value,chol:e.target.chol.value,fbs:e.target.fbs.value,restecg:e.target.restecg.value,thalach:e.target.thalach.value,exang:e.target.exang.value,oldpeak:e.target.oldpeak.value,slope:e.target.slope.value,ca:e.target.ca.value,thal:e.target.thal.value})}).then(function(e){return e.json()}).then(function(e){l(e.result),s(!1)})}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-5"},c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-6 col-form-label"},"Age"),c.a.createElement("div",{className:"col-6"},c.a.createElement("input",{className:"form-control",type:"text",name:"age",placeholder:"29 - 77",pattern:"(29|[3-6][0-9]|7[0-7])",required:!0}))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-6 col-form-label"},"Sex"),c.a.createElement("div",{className:"col-6"},c.a.createElement("select",{className:"form-control",name:"sex",required:!0},c.a.createElement("option",{value:"",disabled:!0,selected:!0},"Select Type Sex"),c.a.createElement("option",{value:"0"},"Femele"),c.a.createElement("option",{value:"1"},"Mele")))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-6 col-form-label"},"Cp"),c.a.createElement("div",{className:"col-6"},c.a.createElement("select",{className:"form-control",name:"cp",required:!0},c.a.createElement("option",{value:"",disabled:!0,selected:!0},"Select Chest Pain Type"),c.a.createElement("option",{value:"0"},"Typical Angina"),c.a.createElement("option",{value:"1"},"Atypical Angina"),c.a.createElement("option",{value:"2"},"Non-Anginal Pain"),c.a.createElement("option",{value:"3"},"Asymptomatic")))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-6 col-form-label"},"Trestbps "),c.a.createElement("div",{className:"col-6"},c.a.createElement("input",{className:"form-control",name:"trestbps",type:"text",placeholder:"Range 94 - 200",pattern:"(9[4-9]|1[0-9]{2}|200)",required:!0}))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-6 col-form-label"},"Chol"),c.a.createElement("div",{className:"col-6"},c.a.createElement("input",{className:"form-control",name:"chol",type:"text",placeholder:"Range 120 - 564",pattern:"(1[2-8][0-9]|19[0-9]|[2-4][0-9]{2}|5[0-5][0-9]|56[0-4])",required:!0}))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-6 col-form-label"},"Fbs (> 120 mg/dl)"),c.a.createElement("div",{className:"col-4"},c.a.createElement("select",{className:"form-control",name:"fbs",required:!0},c.a.createElement("option",{value:"",disabled:!0,selected:!0},"Yes / No"),c.a.createElement("option",{value:"0"},"No"),c.a.createElement("option",{value:"1"},"Yes"))))),c.a.createElement("div",{className:"offset-1 col-6"},c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-6 col-form-label"},"Restecg"),c.a.createElement("div",{className:"col-6"},c.a.createElement("select",{className:"form-control",name:"restecg",required:!0},c.a.createElement("option",{value:"",disabled:!0,selected:!0},"Select Type Resting ECG"),c.a.createElement("option",{value:"0"},"Normal "),c.a.createElement("option",{value:"1"},"Having ST-T Wave Abnormality "),c.a.createElement("option",{value:"2"},"Left Ventricular Hypertrophy")))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-6 col-form-label"},"Thalach"),c.a.createElement("div",{className:"col-6"},c.a.createElement("input",{className:"form-control",name:"thalach",type:"text",placeholder:"Range 71 - 202",pattern:"(7[1-9]|[89][0-9]|1[0-9]{2}|20[0-2])",required:!0}))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-6 col-form-label"},"Exang"),c.a.createElement("div",{className:"col-6"},c.a.createElement("select",{className:"form-control",name:"exang",required:!0},c.a.createElement("option",{value:"",disabled:!0,selected:!0},"Yes / No"),c.a.createElement("option",{value:"0"},"No"),c.a.createElement("option",{value:"1"},"Yes")))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-6 col-form-label"},"Old Peak"),c.a.createElement("div",{className:"col-6"},c.a.createElement("input",{className:"form-control",name:"oldpeak",type:"text",placeholder:"Range 0 - 6.2",pattern:"(^[0-6](\\.[0-2])?$)",required:!0}))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-6 col-form-label"},"Slope"),c.a.createElement("div",{className:"col-6"},c.a.createElement("select",{className:"form-control",name:"slope",required:!0},c.a.createElement("option",{value:"",disabled:!0,selected:!0},"Select Type Slope"),c.a.createElement("option",{value:"0"},"Up Sloping"),c.a.createElement("option",{value:"1"},"Flat"),c.a.createElement("option",{value:"2"},"Down Sloping")))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-6 col-form-label"},"Ca"),c.a.createElement("div",{className:"col-6"},c.a.createElement("select",{className:"form-control",name:"ca",required:!0},c.a.createElement("option",{value:"",disabled:!0,selected:!0},"Select Number of Vessels Colored"),c.a.createElement("option",{value:"0"},"0"),c.a.createElement("option",{value:"1"},"1"),c.a.createElement("option",{value:"2"},"2"),c.a.createElement("option",{value:"3"},"3"),c.a.createElement("option",{value:"4"},"4")))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-6 col-form-label"},"Thal"),c.a.createElement("div",{className:"col-6"},c.a.createElement("select",{className:"form-control",name:"thal",required:!0},c.a.createElement("option",{value:"",disabled:!0,selected:!0},"Select Type Thalium stress"),c.a.createElement("option",{value:"1"},"Normal"),c.a.createElement("option",{value:"2"},"Fixed Defect"),c.a.createElement("option",{value:"3"},"Reversable Defect")))))),c.a.createElement("div",{className:"col-12 text-center pt-5"},c.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Process Data"))):!0===m&&null===t?c.a.createElement(i,null):c.a.createElement(p,{hasil:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[5,1,2]]]);
//# sourceMappingURL=main.7d016f62.chunk.js.map