(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"k/Fm":function(n,t,e){"use strict";e.r(t),e.d(t,"FaqModule",function(){return l});var o=e("ofXK"),c=e("tyNb"),i=e("fXoL"),r=e("edgM"),a=e("Qilz");const d=function(n){return{active:n}};function p(n,t){if(1&n){const n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div",7),i["\u0275\u0275elementStart"](1,"button",8),i["\u0275\u0275listener"]("click",function(){i["\u0275\u0275restoreView"](n);const e=t.index;return i["\u0275\u0275nextContext"]().onAccordian(e)}),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"div",9),i["\u0275\u0275elementStart"](4,"p"),i["\u0275\u0275text"](5),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&n){const n=t.$implicit,e=t.index,o=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](n.question),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngClass",i["\u0275\u0275pureFunction1"](3,d,o.selected==e)),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](n.answer)}}const g=[{path:"",component:(()=>{class n{constructor(n,t){this.config=n,this.api=t,this.data={},this.selected=0}ngOnInit(){this.getContent()}getContent(){this.api.getAll(this.config.collections.contentPages.faq).subscribe(n=>{this.data=n,console.log(this.data)})}onAccordian(n){this.selected=n}}return n.\u0275fac=function(t){return new(t||n)(i["\u0275\u0275directiveInject"](r.a),i["\u0275\u0275directiveInject"](a.a))},n.\u0275cmp=i["\u0275\u0275defineComponent"]({type:n,selectors:[["app-faq"]],decls:11,vars:1,consts:[[1,"faq"],[1,"container"],[1,"row"],[1,"col-12"],[1,"heading"],[1,"faq-accordians"],["class","accordian mb-3",4,"ngFor","ngForOf"],[1,"accordian","mb-3"],[1,"accordion",3,"click"],[1,"panel",3,"ngClass"]],template:function(n,t){1&n&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"div",2),i["\u0275\u0275elementStart"](3,"div",3),i["\u0275\u0275elementStart"](4,"div",4),i["\u0275\u0275elementStart"](5,"h4"),i["\u0275\u0275text"](6,"Frequently Asked Question (FAQ)"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"div",5),i["\u0275\u0275elementStart"](8,"div",2),i["\u0275\u0275elementStart"](9,"div",3),i["\u0275\u0275template"](10,p,6,5,"div",6),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&n&&(i["\u0275\u0275advance"](10),i["\u0275\u0275property"]("ngForOf",null==t.data[0]?null:t.data[0].content))},directives:[o.k,o.j],styles:['@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;0,900;1,800&display=swap");.c-btn[_ngcontent-%COMP%]{padding:10px 30px;color:#fff;border:0;font-size:16px;cursor:pointer;font-weight:500;border-radius:7px;text-align:center}.c-btn.green[_ngcontent-%COMP%]{background:linear-gradient(270deg,#76e672,#41c83e);box-shadow:0 5px 12px 0 rgba(68,202,65,.35)}.c-btn.pink[_ngcontent-%COMP%]{background:linear-gradient(77deg,#f5286e,#fc6d43);box-shadow:0 5px 12px 0 rgba(245,40,110,.35)}.c-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:7px}.bg-pink-gradient[_ngcontent-%COMP%]{background:linear-gradient(77deg,#f5286e,#fc6d43)}.bg-green-gradient[_ngcontent-%COMP%]{background:linear-gradient(270deg,#76e672,#41c83e)}.text-pinkgradient[_ngcontent-%COMP%]{background:linear-gradient(77deg,#f5286e,#fc6d43);-webkit-background-clip:text;-webkit-text-fill-color:transparent}body[_ngcontent-%COMP%]{overflow-x:hidden!important;font-family:Montserrat,sans-serif!important}body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{text-decoration:none}.input-box[_ngcontent-%COMP%]{border:1px solid #e7e7e7;padding:10px;font-size:15px;width:100%;border-radius:5px}.form-control[_ngcontent-%COMP%]{font-size:15px;border:1px solid #e7e7e7!important;height:45px}.uneditable-input[_ngcontent-%COMP%]:focus, input[type=color][_ngcontent-%COMP%]:focus, input[type=date][_ngcontent-%COMP%]:focus, input[type=datetime-local][_ngcontent-%COMP%]:focus, input[type=datetime][_ngcontent-%COMP%]:focus, input[type=email][_ngcontent-%COMP%]:focus, input[type=month][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus, input[type=search][_ngcontent-%COMP%]:focus, input[type=tel][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus, input[type=time][_ngcontent-%COMP%]:focus, input[type=url][_ngcontent-%COMP%]:focus, input[type=week][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus{border-color:none;box-shadow:none;outline:0 none}.form-control[_ngcontent-%COMP%]:focus{border-color:none;outline:0;box-shadow:none}.main-header-space[_ngcontent-%COMP%]{position:relative;top:55px}.loading[_ngcontent-%COMP%]{width:200px}.loading[_ngcontent-%COMP%], .no-data[_ngcontent-%COMP%]{display:block;margin:auto}.no-data[_ngcontent-%COMP%]{width:150px}.no-data[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.no-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;text-align:center;padding:15px 0}.content-loading[_ngcontent-%COMP%]{width:300px;display:block;margin:auto}.disable-opacity[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}.back-btn[_ngcontent-%COMP%]{position:fixed;top:20px;left:15px;background:hsla(0,0%,80%,.1607843137254902);padding:5px 20px;color:#000;border-radius:25px}.plain-card[_ngcontent-%COMP%]{padding:25px}.admin-card[_ngcontent-%COMP%], .plain-card[_ngcontent-%COMP%]{border-radius:7px;border:none;box-shadow:0 5px 15px rgba(0,0,0,.1)}.admin-card[_ngcontent-%COMP%]{padding:15px}.custom-dropdown[_ngcontent-%COMP%]{position:relative;width:100%;height:80px;box-shadow:0 5px 15px 0 rgba(144,147,151,.2);border-radius:7px;background-color:#fff;border:0;padding:25px 30px;font-size:20px;letter-spacing:.1px;color:#1e1f22}.custom-dropdown[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:24px;color:#1e1f22}.custom-dropdown[_ngcontent-%COMP%]   i.arrow[_ngcontent-%COMP%]{position:absolute;top:30px;right:20px}.custom-dropdown[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]{position:absolute;width:100%;left:0;top:100%;background:#fff;border-radius:7px;box-shadow:0 5px 15px 0 rgba(144,147,151,.2);display:none;z-index:1}.custom-dropdown[_ngcontent-%COMP%]   .options.show[_ngcontent-%COMP%]{display:block}.custom-dropdown[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.custom-dropdown[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;padding:10px}.custom-dropdown[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:#ccc}.all-center[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}button[_ngcontent-%COMP%]:focus{border-color:none;box-shadow:none;outline:0 none}.data-content[_ngcontent-%COMP%]{white-space:pre-line}.faq[_ngcontent-%COMP%]{padding:32px 0}.faq[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{padding-bottom:3%}.faq[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#000;font-size:30px;font-weight:600}@media only screen and (max-width:600px){.faq[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:23px}}.accordion[_ngcontent-%COMP%]{background-color:#eee;color:#444;cursor:pointer;padding:18px;width:100%;border:none;text-align:left;outline:none;font-size:15px;transition:.4s}.accordion[_ngcontent-%COMP%]:hover, .active[_ngcontent-%COMP%]{background-color:#ccc}.panel[_ngcontent-%COMP%]{padding:15px;display:none;background-color:#fff;overflow:hidden}.panel.active[_ngcontent-%COMP%]{display:block}']}),n})()}];let s=(()=>{class n{}return n.\u0275mod=i["\u0275\u0275defineNgModule"]({type:n}),n.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||n)},imports:[[c.d.forChild(g)],c.d]}),n})(),l=(()=>{class n{}return n.\u0275mod=i["\u0275\u0275defineNgModule"]({type:n}),n.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||n)},imports:[[o.c,s]]}),n})()}}]);