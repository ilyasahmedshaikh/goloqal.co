(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/NOG":function(n,t,e){"use strict";e.r(t),e.d(t,"HomepageModule",function(){return S});var o=e("ofXK"),i=e("PCNd"),c=e("tyNb"),a=e("fXoL"),r=e("edgM"),p=e("Qilz"),g=e("XNiG"),d=e("AytR"),s=e("tk/3");let l=(()=>{class n{constructor(n){this.http=n,this.location=new g.a,this.lat=0,this.lng=0,this.address={}}getLocation(){"geolocation"in navigator?navigator.geolocation.getCurrentPosition(n=>{this.lat=n.coords.latitude,this.lng=n.coords.longitude,this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.lat},${this.lng}&key=${d.a.google_maps_api}`).subscribe(n=>{let t=n.plus_code.compound_code.split(",");console.log(n.plus_code.compound_code),this.location.next({lat:this.lat,lng:this.lng,city:t[1],country:t[2]})})}):this.location.next("geolocation is not available")}}return n.\u0275fac=function(t){return new(t||n)(a["\u0275\u0275inject"](s.b))},n.\u0275prov=a["\u0275\u0275defineInjectable"]({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function m(n,t){if(1&n){const n=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"li",7),a["\u0275\u0275listener"]("click",function(){a["\u0275\u0275restoreView"](n);const e=t.$implicit;return a["\u0275\u0275nextContext"]().showOptionsToggle(e)}),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()}if(2&n){const n=t.$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](n.name)}}const C=function(n,t){return{"fa-chevron-up":n,"fa-chevron-down":t}},O=function(n){return{show:n}};let u=(()=>{class n{constructor(n){this.googleMaps=n,this.onSelectedCountry=new a.EventEmitter,this.showOptions=!1,this.selectedOption="",this.cities=[]}ngOnInit(){this.selectedOption=this.cities[0],this.onSelectedCountry.emit(this.selectedOption),this.googleMaps.getLocation(),this.getLocation()}showOptionsToggle(n){this.showOptions=!this.showOptions,n&&(this.selectedOption=n,this.onSelectedCountry.emit(this.selectedOption))}getLocation(){this.googleMaps.location.subscribe(n=>{this.cities.unshift({name:n.city}),this.selectedOption=this.cities[0],this.onSelectedCountry.emit(this.selectedOption)})}}return n.\u0275fac=function(t){return new(t||n)(a["\u0275\u0275directiveInject"](l))},n.\u0275cmp=a["\u0275\u0275defineComponent"]({type:n,selectors:[["app-search-bar"]],outputs:{onSelectedCountry:"onSelectedCountry"},decls:19,vars:9,consts:[[1,"search-bar"],[1,"row"],[1,"col-10","col-md-11","col-lg-8"],[1,"search-input"],["type","text","placeholder","Search anything you want..."],[1,"col-12","col-md-12","col-lg-3"],[1,"custom-dropdown"],[3,"click"],[1,"fas","fa-map-marker-alt","text-pinkgradient"],[1,"ml-4"],[1,"fas","arrow",3,"ngClass"],[1,"options","mt-2",3,"ngClass"],[3,"click",4,"ngFor","ngForOf"],[1,"col-2","col-md-1","col-lg-1","change"],[1,"search-icon"],[1,"fas","fa-search"]],template:function(n,t){1&n&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"div",1),a["\u0275\u0275elementStart"](2,"div",2),a["\u0275\u0275elementStart"](3,"div",3),a["\u0275\u0275element"](4,"input",4),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](5,"div",5),a["\u0275\u0275elementStart"](6,"div",6),a["\u0275\u0275elementStart"](7,"p",7),a["\u0275\u0275listener"]("click",function(){return t.showOptionsToggle()}),a["\u0275\u0275element"](8,"i",8),a["\u0275\u0275elementStart"](9,"span",9),a["\u0275\u0275text"](10),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](11,"i",10),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](12,"div",11),a["\u0275\u0275elementStart"](13,"ul"),a["\u0275\u0275template"](14,m,2,1,"li",12),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](15,"div",13),a["\u0275\u0275elementStart"](16,"div",14),a["\u0275\u0275elementStart"](17,"a"),a["\u0275\u0275element"](18,"i",15),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&n&&(a["\u0275\u0275advance"](10),a["\u0275\u0275textInterpolate"](null==t.selectedOption?null:t.selectedOption.name),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngClass",a["\u0275\u0275pureFunction2"](4,C,t.showOptions,!t.showOptions)),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngClass",a["\u0275\u0275pureFunction1"](7,O,t.showOptions)),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngForOf",t.cities))},directives:[o.j,o.k],styles:['@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;0,900;1,800&display=swap");.c-btn[_ngcontent-%COMP%]{padding:10px 30px;color:#fff;border:0;font-size:16px;cursor:pointer;font-weight:500;border-radius:7px;text-align:center}.c-btn.green[_ngcontent-%COMP%]{background:linear-gradient(270deg,#76e672,#41c83e);box-shadow:0 5px 12px 0 rgba(68,202,65,.35)}.c-btn.pink[_ngcontent-%COMP%]{background:linear-gradient(77deg,#f5286e,#fc6d43);box-shadow:0 5px 12px 0 rgba(245,40,110,.35)}.c-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:7px}.bg-pink-gradient[_ngcontent-%COMP%]{background:linear-gradient(77deg,#f5286e,#fc6d43)}.bg-green-gradient[_ngcontent-%COMP%]{background:linear-gradient(270deg,#76e672,#41c83e)}.text-pinkgradient[_ngcontent-%COMP%]{background:linear-gradient(77deg,#f5286e,#fc6d43);-webkit-background-clip:text;-webkit-text-fill-color:transparent}body[_ngcontent-%COMP%]{overflow-x:hidden!important;font-family:Montserrat,sans-serif!important}body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{text-decoration:none}.input-box[_ngcontent-%COMP%]{border:1px solid #e7e7e7;padding:10px;font-size:15px;width:100%;border-radius:5px}.form-control[_ngcontent-%COMP%]{font-size:15px;border:1px solid #e7e7e7!important;height:45px}.uneditable-input[_ngcontent-%COMP%]:focus, input[type=color][_ngcontent-%COMP%]:focus, input[type=date][_ngcontent-%COMP%]:focus, input[type=datetime-local][_ngcontent-%COMP%]:focus, input[type=datetime][_ngcontent-%COMP%]:focus, input[type=email][_ngcontent-%COMP%]:focus, input[type=month][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus, input[type=search][_ngcontent-%COMP%]:focus, input[type=tel][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus, input[type=time][_ngcontent-%COMP%]:focus, input[type=url][_ngcontent-%COMP%]:focus, input[type=week][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus{border-color:none;box-shadow:none;outline:0 none}.form-control[_ngcontent-%COMP%]:focus{border-color:none;outline:0;box-shadow:none}.main-header-space[_ngcontent-%COMP%]{position:relative;top:55px}.loading[_ngcontent-%COMP%]{width:200px}.loading[_ngcontent-%COMP%], .no-data[_ngcontent-%COMP%]{display:block;margin:auto}.no-data[_ngcontent-%COMP%]{width:150px}.no-data[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.no-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;text-align:center;padding:15px 0}.content-loading[_ngcontent-%COMP%]{width:300px;display:block;margin:auto}.disable-opacity[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}.back-btn[_ngcontent-%COMP%]{position:fixed;top:20px;left:15px;background:hsla(0,0%,80%,.1607843137254902);padding:5px 20px;color:#000;border-radius:25px}.plain-card[_ngcontent-%COMP%]{padding:25px}.admin-card[_ngcontent-%COMP%], .plain-card[_ngcontent-%COMP%]{border-radius:7px;border:none;box-shadow:0 5px 15px rgba(0,0,0,.1)}.admin-card[_ngcontent-%COMP%]{padding:15px}.custom-dropdown[_ngcontent-%COMP%]{position:relative;width:100%;height:80px;box-shadow:0 5px 15px 0 rgba(144,147,151,.2);border-radius:7px;background-color:#fff;border:0;padding:25px 30px;font-size:20px;letter-spacing:.1px;color:#1e1f22}.custom-dropdown[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:24px;color:#1e1f22}.custom-dropdown[_ngcontent-%COMP%]   i.arrow[_ngcontent-%COMP%]{position:absolute;top:30px;right:20px}.custom-dropdown[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]{position:absolute;width:100%;left:0;top:100%;background:#fff;border-radius:7px;box-shadow:0 5px 15px 0 rgba(144,147,151,.2);display:none;z-index:1}.custom-dropdown[_ngcontent-%COMP%]   .options.show[_ngcontent-%COMP%]{display:block}.custom-dropdown[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.custom-dropdown[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;padding:10px}.custom-dropdown[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:#ccc}.all-center[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}button[_ngcontent-%COMP%]:focus{border-color:none;box-shadow:none;outline:0 none}.data-content[_ngcontent-%COMP%]{white-space:pre-line}@media only screen and (max-width:768px){.search-bar[_ngcontent-%COMP%]{position:relative}}.search-bar[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:80px;box-shadow:0 5px 15px 0 rgba(144,147,151,.2);border-radius:7px;background-color:#fff;border:0;padding:25px 30px;font-size:20px;letter-spacing:.1px;color:#1e1f22}@media only screen and (max-width:600px){.search-bar[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:14px}}@media only screen and (max-width:768px){.search-bar[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%]{margin-top:15px}}.search-bar[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]{margin-top:24px}.search-bar[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;box-shadow:0 5px 15px 0 rgba(144,147,151,.2);font-size:21px;padding:26px 35px;border-radius:7px;background-color:#f5f5f5;border:0;color:#78797a}@media only screen and (max-width:768px){.search-bar[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{box-shadow:0 1px 5px 0 rgba(144,147,151,.2);font-size:18px;padding:30px 30px 29px}}@media only screen and (max-width:768px){.search-bar[_ngcontent-%COMP%]   .change[_ngcontent-%COMP%]{position:absolute;top:3px;right:42px}}@media only screen and (max-width:600px){.search-bar[_ngcontent-%COMP%]   .change[_ngcontent-%COMP%]{position:absolute;right:44px}}']}),n})();var h=e("4fUv");const x=function(n){return{active:n}};function M(n,t){if(1&n&&(a["\u0275\u0275elementStart"](0,"div",17),a["\u0275\u0275element"](1,"img",18),a["\u0275\u0275elementEnd"]()),2&n){const n=t.$implicit;a["\u0275\u0275property"]("ngClass",a["\u0275\u0275pureFunction1"](2,x,0==t.index)),a["\u0275\u0275advance"](1),a["\u0275\u0275propertyInterpolate"]("src",n.image,a["\u0275\u0275sanitizeUrl"])}}function _(n,t){if(1&n&&(a["\u0275\u0275elementStart"](0,"div",27),a["\u0275\u0275elementStart"](1,"div",28),a["\u0275\u0275elementStart"](2,"div",11),a["\u0275\u0275elementStart"](3,"div",29),a["\u0275\u0275element"](4,"img",30),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](5,"div",31),a["\u0275\u0275elementStart"](6,"h6"),a["\u0275\u0275text"](7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&n){const n=t.$implicit;a["\u0275\u0275advance"](4),a["\u0275\u0275propertyInterpolate"]("src",n.image,a["\u0275\u0275sanitizeUrl"]),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](n.name)}}function P(n,t){if(1&n){const n=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"div",35),a["\u0275\u0275elementStart"](1,"app-custom-card",36),a["\u0275\u0275listener"]("click",function(){a["\u0275\u0275restoreView"](n);const e=t.$implicit;return a["\u0275\u0275nextContext"](3).view(e)}),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&n){const n=t.$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("data",n)}}function f(n,t){1&n&&(a["\u0275\u0275elementStart"](0,"div",37),a["\u0275\u0275elementStart"](1,"div",38),a["\u0275\u0275element"](2,"img",39),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]())}function b(n,t){if(1&n&&(a["\u0275\u0275elementStart"](0,"div",32),a["\u0275\u0275elementStart"](1,"div",11),a["\u0275\u0275elementStart"](2,"div",20),a["\u0275\u0275elementStart"](3,"div",21),a["\u0275\u0275elementStart"](4,"h1"),a["\u0275\u0275text"](5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"p"),a["\u0275\u0275text"](7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](8,P,2,1,"div",33),a["\u0275\u0275template"](9,f,3,0,"div",34),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&n){const n=t.$implicit;a["\u0275\u0275advance"](5),a["\u0275\u0275textInterpolate"](n.name),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate1"]("Nearest ",n.name,""),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",n.data),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",0==n.data.length)}}function w(n,t){if(1&n&&(a["\u0275\u0275elementStart"](0,"div",19),a["\u0275\u0275elementStart"](1,"div",11),a["\u0275\u0275elementStart"](2,"div",20),a["\u0275\u0275elementStart"](3,"div",21),a["\u0275\u0275elementStart"](4,"h1"),a["\u0275\u0275text"](5,"Explore Categories"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"div",12),a["\u0275\u0275elementStart"](7,"div",22),a["\u0275\u0275elementStart"](8,"div",23),a["\u0275\u0275template"](9,_,8,2,"div",24),a["\u0275\u0275elementStart"](10,"div",25),a["\u0275\u0275element"](11,"div"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](12,b,10,4,"div",26),a["\u0275\u0275elementEnd"]()),2&n){const n=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](9),a["\u0275\u0275property"]("ngForOf",n.categories),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngForOf",n.topicWiseData)}}const y=[{path:"",component:(()=>{class n{constructor(n,t,e){this.config=n,this.api=t,this.router=e,this.sliders=[],this.topics=[],this.categories=[],this.topicWiseData=[],this.selectedCountry=""}ngOnInit(){this.getCategories(),this.getData(),this.getsliders()}view(n){this.router.navigate(["/page/page-details"],{state:{page:n}})}getData(){this.config.topics.forEach(n=>{this.api.getWithQuery(this.config.collections.pages_table,"topic_id","==",n.id).subscribe(t=>{this.topicWiseData.push(Object.assign(Object.assign({},n),{data:t}))})})}getSelectedCountry(n){this.selectedCountry=n}getCategories(){this.api.getAll(this.config.collections.categories_table).subscribe(n=>{this.categories=n})}getsliders(){this.api.getAll(this.config.collections.sliders_table).subscribe(n=>{this.sliders=n})}}return n.\u0275fac=function(t){return new(t||n)(a["\u0275\u0275directiveInject"](r.a),a["\u0275\u0275directiveInject"](p.a),a["\u0275\u0275directiveInject"](c.a))},n.\u0275cmp=a["\u0275\u0275defineComponent"]({type:n,selectors:[["app-homepage"]],decls:24,vars:3,consts:[[1,"banner"],["id","carouselExampleControls","data-ride","carousel",1,"carousel","slide"],[1,"carousel-inner"],["class","carousel-item",3,"ngClass",4,"ngFor","ngForOf"],["href","#carouselExampleControls","role","button","data-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"sr-only"],["href","#carouselExampleControls","role","button","data-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],[1,"homepage"],[1,"container"],[1,"row"],[1,"col-12"],[1,"top-heading-bar"],[1,"search-bar"],[3,"onSelectedCountry"],["class","explore",4,"ngIf"],[1,"carousel-item",3,"ngClass"],[1,"d-block",3,"src"],[1,"explore"],[1,"col-12","col-md-12","col-lg-12"],[1,"heading"],[1,"top"],[1,"row","categories"],["class","col-6 col-md-4 col-lg-3",4,"ngFor","ngForOf"],[1,"innerdiv1"],["class","page-section",4,"ngFor","ngForOf"],[1,"col-6","col-md-4","col-lg-3"],[1,"inner"],[1,"col-4"],[3,"src"],[1,"col-8"],[1,"page-section"],["class","col-12 col-md-6 col-lg-4 mt-4","routerLink","/page/page-details",4,"ngFor","ngForOf"],["class","col-12 col-md-12",4,"ngIf"],["routerLink","/page/page-details",1,"col-12","col-md-6","col-lg-4","mt-4"],[3,"data","click"],[1,"col-12","col-md-12"],[1,"no-data"],["src","assets/img/no-data.png","alt","no-data"]],template:function(n,t){1&n&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"div",1),a["\u0275\u0275elementStart"](2,"div",2),a["\u0275\u0275template"](3,M,2,4,"div",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"a",4),a["\u0275\u0275element"](5,"span",5),a["\u0275\u0275elementStart"](6,"span",6),a["\u0275\u0275text"](7,"Previous"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"a",7),a["\u0275\u0275element"](9,"span",8),a["\u0275\u0275elementStart"](10,"span",6),a["\u0275\u0275text"](11,"Next"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](12,"div",9),a["\u0275\u0275elementStart"](13,"div",10),a["\u0275\u0275elementStart"](14,"div",11),a["\u0275\u0275elementStart"](15,"div",12),a["\u0275\u0275elementStart"](16,"div",13),a["\u0275\u0275elementStart"](17,"h1"),a["\u0275\u0275text"](18),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](19,"p"),a["\u0275\u0275text"](20,"The new experience near you."),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](21,"div",14),a["\u0275\u0275elementStart"](22,"app-search-bar",15),a["\u0275\u0275listener"]("onSelectedCountry",function(n){return t.getSelectedCountry(n)}),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](23,w,13,2,"div",16),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&n&&(a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngForOf",t.sliders),a["\u0275\u0275advance"](15),a["\u0275\u0275textInterpolate1"]("Find Local Stuff to Do in ",null==t.selectedCountry?null:t.selectedCountry.name,""),a["\u0275\u0275advance"](5),a["\u0275\u0275property"]("ngIf",(null==t.categories?null:t.categories.length)>0))},directives:[o.k,u,o.l,o.j,c.b,h.a],styles:['@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;0,900;1,800&display=swap");.c-btn[_ngcontent-%COMP%]{padding:10px 30px;color:#fff;border:0;font-size:16px;cursor:pointer;font-weight:500;border-radius:7px;text-align:center}.c-btn.green[_ngcontent-%COMP%]{background:linear-gradient(270deg,#76e672,#41c83e);box-shadow:0 5px 12px 0 rgba(68,202,65,.35)}.c-btn.pink[_ngcontent-%COMP%]{background:linear-gradient(77deg,#f5286e,#fc6d43);box-shadow:0 5px 12px 0 rgba(245,40,110,.35)}.c-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:7px}.bg-pink-gradient[_ngcontent-%COMP%]{background:linear-gradient(77deg,#f5286e,#fc6d43)}.bg-green-gradient[_ngcontent-%COMP%]{background:linear-gradient(270deg,#76e672,#41c83e)}.text-pinkgradient[_ngcontent-%COMP%]{background:linear-gradient(77deg,#f5286e,#fc6d43);-webkit-background-clip:text;-webkit-text-fill-color:transparent}body[_ngcontent-%COMP%]{overflow-x:hidden!important;font-family:Montserrat,sans-serif!important}body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{text-decoration:none}.input-box[_ngcontent-%COMP%]{border:1px solid #e7e7e7;padding:10px;font-size:15px;width:100%;border-radius:5px}.form-control[_ngcontent-%COMP%]{font-size:15px;border:1px solid #e7e7e7!important;height:45px}.uneditable-input[_ngcontent-%COMP%]:focus, input[type=color][_ngcontent-%COMP%]:focus, input[type=date][_ngcontent-%COMP%]:focus, input[type=datetime-local][_ngcontent-%COMP%]:focus, input[type=datetime][_ngcontent-%COMP%]:focus, input[type=email][_ngcontent-%COMP%]:focus, input[type=month][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus, input[type=search][_ngcontent-%COMP%]:focus, input[type=tel][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus, input[type=time][_ngcontent-%COMP%]:focus, input[type=url][_ngcontent-%COMP%]:focus, input[type=week][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus{border-color:none;box-shadow:none;outline:0 none}.form-control[_ngcontent-%COMP%]:focus{border-color:none;outline:0;box-shadow:none}.main-header-space[_ngcontent-%COMP%]{position:relative;top:55px}.loading[_ngcontent-%COMP%]{width:200px}.loading[_ngcontent-%COMP%], .no-data[_ngcontent-%COMP%]{display:block;margin:auto}.no-data[_ngcontent-%COMP%]{width:150px}.no-data[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.no-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;text-align:center;padding:15px 0}.content-loading[_ngcontent-%COMP%]{width:300px;display:block;margin:auto}.disable-opacity[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}.back-btn[_ngcontent-%COMP%]{position:fixed;top:20px;left:15px;background:hsla(0,0%,80%,.1607843137254902);padding:5px 20px;color:#000;border-radius:25px}.plain-card[_ngcontent-%COMP%]{padding:25px}.admin-card[_ngcontent-%COMP%], .plain-card[_ngcontent-%COMP%]{border-radius:7px;border:none;box-shadow:0 5px 15px rgba(0,0,0,.1)}.admin-card[_ngcontent-%COMP%]{padding:15px}.custom-dropdown[_ngcontent-%COMP%]{position:relative;width:100%;height:80px;box-shadow:0 5px 15px 0 rgba(144,147,151,.2);border-radius:7px;background-color:#fff;border:0;padding:25px 30px;font-size:20px;letter-spacing:.1px;color:#1e1f22}.custom-dropdown[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:24px;color:#1e1f22}.custom-dropdown[_ngcontent-%COMP%]   i.arrow[_ngcontent-%COMP%]{position:absolute;top:30px;right:20px}.custom-dropdown[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]{position:absolute;width:100%;left:0;top:100%;background:#fff;border-radius:7px;box-shadow:0 5px 15px 0 rgba(144,147,151,.2);display:none;z-index:1}.custom-dropdown[_ngcontent-%COMP%]   .options.show[_ngcontent-%COMP%]{display:block}.custom-dropdown[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.custom-dropdown[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;padding:10px}.custom-dropdown[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:#ccc}.all-center[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}button[_ngcontent-%COMP%]:focus{border-color:none;box-shadow:none;outline:0 none}.data-content[_ngcontent-%COMP%]{white-space:pre-line}.banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:45vh;object-fit:cover;object-position:center}@media only screen and (max-width:768px){.banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:35vh}}@media only screen and (max-width:600px){.banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:25vh}}.homepage[_ngcontent-%COMP%]{padding:3% 0 5%}@media only screen and (max-width:600px){.homepage[_ngcontent-%COMP%]{padding-top:7%}}.homepage[_ngcontent-%COMP%]   .top-heading-bar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:600;font-size:45px;letter-spacing:.1px;color:#000}@media only screen and (max-width:600px){.homepage[_ngcontent-%COMP%]   .top-heading-bar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:31px}}.homepage[_ngcontent-%COMP%]   .top-heading-bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;font-size:22px;color:#1e1f22;letter-spacing:.1px;padding-top:5px}@media only screen and (max-width:600px){.homepage[_ngcontent-%COMP%]   .top-heading-bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;padding-top:11px}}.homepage[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]{margin-top:35px}.homepage[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]{padding-top:5%}@media only screen and (max-width:600px){.homepage[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]{padding-top:12%}}.homepage[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:600;font-size:40px;letter-spacing:.1px;color:#000}@media only screen and (max-width:600px){.homepage[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:26px}}.homepage[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;font-size:22px;color:#1e1f22;letter-spacing:.1px;padding-top:10px}@media only screen and (max-width:600px){.homepage[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;padding-top:6px}}.homepage[_ngcontent-%COMP%]   .explore[_ngcontent-%COMP%]{padding-top:6%}@media only screen and (max-width:600px){.homepage[_ngcontent-%COMP%]   .explore[_ngcontent-%COMP%]{padding-top:13%}}.homepage[_ngcontent-%COMP%]   .explore[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:600;font-size:40px;letter-spacing:.1px;color:#000}@media only screen and (max-width:600px){.homepage[_ngcontent-%COMP%]   .explore[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:26px}}.homepage[_ngcontent-%COMP%]   .explore[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{padding-top:15px}@media only screen and (max-width:768px){.homepage[_ngcontent-%COMP%]   .explore[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{padding-top:5px}}.homepage[_ngcontent-%COMP%]   .explore[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{padding-top:25px;cursor:pointer}.homepage[_ngcontent-%COMP%]   .explore[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px;height:60px;object-fit:cover;object-position:center;border-radius:5px}@media only screen and (max-width:600px){.homepage[_ngcontent-%COMP%]   .explore[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px}}.homepage[_ngcontent-%COMP%]   .explore[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-weight:600;font-size:15px;padding-top:10px}@media only screen and (max-width:600px){.homepage[_ngcontent-%COMP%]   .explore[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:13px}}.homepage[_ngcontent-%COMP%]   .explore[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;font-weight:500}.explore[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]{height:280px;overflow-y:auto;padding-bottom:100px}.explore[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   .innerdiv1[_ngcontent-%COMP%]{background:linear-gradient(0deg,hsla(0,0%,100%,.9) 50%,transparent);position:absolute;bottom:0;width:100%;height:100px}']}),n})()}];let v=(()=>{class n{}return n.\u0275mod=a["\u0275\u0275defineNgModule"]({type:n}),n.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||n)},imports:[[c.d.forChild(y)],c.d]}),n})(),S=(()=>{class n{}return n.\u0275mod=a["\u0275\u0275defineNgModule"]({type:n}),n.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||n)},imports:[[o.c,v,i.a]]}),n})()}}]);