"use strict";(self.webpackChunknodebucket=self.webpackChunknodebucket||[]).push([[919],{4919:(M,l,a)=>{a.r(l),a.d(l,{SecurityModule:()=>C});var m=a(6814),c=a(2129),s=a(95),d=a(9862),e=a(4769);let p=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-security"]],decls:1,vars:0,template:function(n,i){1&n&&e._UZ(0,"router-outlet")},dependencies:[c.lC],encapsulation:2}),r})();var g=a(459);let f=(()=>{var t;class r{constructor(n){this.http=n}findEmployeeById(n){return this.http.get("/api/employees/"+n)}}return(t=r).\u0275fac=function(n){return new(n||t)(e.LFG(d.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),r})();function v(t,r){if(1&t&&(e.TgZ(0,"div",16),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.hij(" ",o.errorMessage," ")}}function h(t,r){1&t&&(e.TgZ(0,"span"),e._uU(1,"Sign in"),e.qZA())}function y(t,r){1&t&&(e.TgZ(0,"div"),e._UZ(1,"span",17),e._uU(2," Loading... "),e.qZA())}const S=[{path:"",component:p,children:[{path:"signin",component:(()=>{var t;class r{constructor(n,i,u,I,Z){this.fb=n,this.router=i,this.cookieService=u,this.secService=I,this.route=Z,this.errorMessage="",this.sessionUser={},this.isLoading=!1,this.signinForm=this.fb.group({empId:[null,s.kI.compose([s.kI.required,s.kI.pattern("^[0-9]*$")])]})}signin(){this.isLoading=!0;const n=this.signinForm.controls.empId.value;if(!n||isNaN(parseInt(n,10)))return this.errorMessage="Employee ID is invalid, please try again.",void(this.isLoading=!1);this.secService.findEmployeeById(n).subscribe({next:i=>{this.sessionUser=i,this.cookieService.set("session_user",n,1),this.cookieService.set("session_name",`${i.firstName} ${i.lastName}`,1),this.route.snapshot.queryParamMap.get("returnUrl"),this.isLoading=!1,this.router.navigate(["/task-management/my-tasks"])},error:i=>{this.isLoading=!1,this.errorMessage=i.error.message?i.error.message:i.message}})}}return(t=r).\u0275fac=function(n){return new(n||t)(e.Y36(s.qu),e.Y36(c.F0),e.Y36(g.N),e.Y36(f),e.Y36(c.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-signin"]],decls:22,vars:4,consts:[[1,"container"],[1,"row","justify-content-center","mt-5"],[1,"col-lg-4","col-md-6","col-sm-6"],[1,"card","shadow"],[1,"card-title","text-center","border-bottom"],[1,"p-3"],["class","alert alert-danger","role","alert",4,"ngIf"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"mb-4"],["for","empId",1,"form-label"],["type","text","id","empId","formControlName","empId",1,"form-control"],[1,"d-grid"],["type","submit",1,"btn","btn-dark"],[4,"ngIf"],["routerLink","/",1,"text-dark","text-underline-hover"],["role","alert",1,"alert","alert-danger"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"br")(2,"br"),e.TgZ(3,"div",1)(4,"div",2)(5,"div",3)(6,"div",4)(7,"h2",5),e._uU(8,"Employee Sign In"),e.qZA()(),e.YNc(9,v,2,1,"div",6),e.TgZ(10,"div",7)(11,"form",8),e.NdJ("ngSubmit",function(){return i.signin(),i.signinForm.reset()}),e.TgZ(12,"div",9)(13,"label",10),e._uU(14,"Employee ID:"),e.qZA(),e._UZ(15,"input",11),e.qZA(),e.TgZ(16,"div",12)(17,"button",13),e.YNc(18,h,2,0,"span",14),e.YNc(19,y,3,0,"div",14),e.qZA()()()()(),e.TgZ(20,"a",15),e._uU(21,"Return"),e.qZA()()()()),2&n&&(e.xp6(9),e.Q6J("ngIf",i.errorMessage),e.xp6(2),e.Q6J("formGroup",i.signinForm),e.xp6(7),e.Q6J("ngIf",!i.isLoading),e.xp6(1),e.Q6J("ngIf",i.isLoading))},dependencies:[m.O5,c.rH,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u],styles:[".card[_ngcontent-%COMP%]{background-color:var(--slytherin-black)!important;color:var(--slytherin-silver)!important}a[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{color:var(--slytherin-silver)!important}.btn[_ngcontent-%COMP%]{background-color:var(--slytherin-green)!important}"]}),r})(),title:"NodeBucket: Sign In"}]}];let b=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(S),c.Bz]}),r})(),C=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.ez,b,c.Bz,s.u5,s.UX,d.JF]}),r})()}}]);