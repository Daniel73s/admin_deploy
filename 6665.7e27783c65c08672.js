"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6665],{822:(A,f,d)=>{d.d(f,{K:()=>a});var l=d(6814),g=d(5548),u=d(6689);let a=(()=>{class e{}return e.\u0275fac=function(m){return new(m||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[l.ez,g.Pc]}),e})()},6471:(A,f,d)=>{d.d(f,{G:()=>o});var l=d(6689),g=d(6814),u=d(5548);function a(m,h){1&m&&(l.TgZ(0,"ion-item",12),l._UZ(1,"ion-icon",13),l.TgZ(2,"ion-label"),l._uU(3,"Cerrar Sesion"),l.qZA()())}function e(m,h){1&m&&(l.TgZ(0,"ion-content",7)(1,"ion-list",8)(2,"ion-item",9),l._UZ(3,"ion-icon",10),l.TgZ(4,"ion-label"),l._uU(5,"Ver Perfil"),l.qZA()(),l.YNc(6,a,4,0,"ion-item",11),l.qZA()()),2&m&&(l.xp6(6),l.Q6J("ngIf",!0))}let o=(()=>{class m{constructor(){}ngOnInit(){}}return m.\u0275fac=function(Z){return new(Z||m)},m.\u0275cmp=l.Xpm({type:m,selectors:[["app-header"]],decls:9,vars:3,consts:[[1,"ion-no-border",3,"translucent"],[1,"nav-shadow"],["slot","start"],["slot","end","id","click-trigger"],[1,"profile"],[3,"src"],["trigger","click-trigger","mode","md","triggerAction","click",3,"dismissOnSelect"],[1,"ion-padding"],["lines","none",1,"submenu"],["lines","line",1,"btn"],["slot","start","name","person-circle-outline"],["class","btn close",4,"ngIf"],[1,"btn","close"],["slot","start","name","close-circle-outline"]],template:function(Z,U){1&Z&&(l.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),l._UZ(3,"ion-menu-button"),l.qZA(),l.TgZ(4,"ion-buttons",3)(5,"ion-avatar",4),l._UZ(6,"img",5),l.qZA(),l.TgZ(7,"ion-popover",6),l.YNc(8,e,7,1,"ng-template"),l.qZA()()()()),2&Z&&(l.Q6J("translucent",!0),l.xp6(6),l.Q6J("src","https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png",l.LSH),l.xp6(1),l.Q6J("dismissOnSelect",!0))},dependencies:[g.O5,u.BJ,u.Sm,u.W2,u.Gu,u.gu,u.Ie,u.Q$,u.q_,u.fG,u.sr,u.d8],styles:[".profile[_ngcontent-%COMP%]{width:40px;height:40px;margin-right:10px;cursor:pointer}ion-popover[_ngcontent-%COMP%]::part(backdrop){background-color:transparent}.btn[_ngcontent-%COMP%]{cursor:pointer}.close[_ngcontent-%COMP%]{color:var(--ion-color-danger)}.nav-shadow[_ngcontent-%COMP%]{box-shadow:0 2px 4px #0003}"]}),m})()},6665:(A,f,d)=>{d.r(f),d.d(f,{AdmsModule:()=>G});var l=d(6814),g=d(4670),u=d(5861),a=d(95),e=d(6689),o=d(5548),m=d(9862);let h=(()=>{class i{constructor(t){this.http=t,this.url="https://server-ogdr.onrender.com/api/administradores"}getAdministradores(){return this.http.get(this.url).toPromise()}postUbicacionAdministrador(t){return this.http.post(`${this.url}/ubicacion`,t).toPromise()}postAdministrador(t){return this.http.post(`${this.url}`,t).toPromise()}agregarUserAdmin(t,n){return this.http.post(`${this.url}/usuario/${n}`,{usuario:t}).toPromise()}getOneAdministrador(t){return this.http.get(`${this.url}/one/${t}`).toPromise()}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(m.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var Z=d(2759);let U=(()=>{class i{constructor(t,n,r,s,p){this.modalctrl=t,this.fb=n,this._administradores=r,this._usuarios=s,this.toastCtrl=p}ngOnInit(){this.formInit()}close(){this.modalctrl.dismiss()}formInit(){this.formuser=this.fb.group({usuario:["",[a.kI.required,a.kI.maxLength(50)]],password:["",[a.kI.required,a.kI.maxLength(30)]],repeat_password:["",[a.kI.required,a.kI.maxLength(30)]]},{validator:this.passwordMatchValidator})}passwordMatchValidator(t){const n=t.get("password"),r=t.get("repeat_password");n&&r&&n.value!==r.value?r.setErrors({error:!0,name:"nada"}):null==r||r.setErrors(null)}crearUsuario(){const{usuario:t,password:n}=this.formuser.getRawValue();this._usuarios.createUserAdministrador(t,n).then(r=>{this._administradores.agregarUserAdmin(r.usuario,this.id_admin).then(s=>{this.mensaje(s.mensaje,2e3,"top","checkmark-outline","dark"),this.modalctrl.dismiss("success")}).catch(s=>{this.mensaje("ocurrio un error inesperado intentelo nuevamente",2e3,"top","warning-outline","danger")})}).catch(r=>{this.mensaje("ocurrio un error inesperado intentelo nuevamente",2e3,"top","warning-outline","danger")})}Error(t){var n,r,s;return null!==(n=this.formuser.get(t))&&void 0!==n&&n.hasError("required")?`Campo ${t} es obligatorio`:null!==(r=this.formuser.get(t))&&void 0!==r&&r.hasError("maxLength")?`el Campo ${t} no debe sobrepasar el limite permitido`:null!==(s=this.formuser.get(t))&&void 0!==s&&s.errors?"Password no coincide":void 0}mensaje(t,n,r,s,p){var _=this;return(0,u.Z)(function*(){(yield _.toastCtrl.create({message:t,duration:n,position:r,icon:s,color:p})).present()})()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(o.IN),e.Y36(a.qu),e.Y36(h),e.Y36(Z.J),e.Y36(o.yF))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-create-usuario"]],inputs:{id_admin:"id_admin"},decls:35,vars:5,consts:[["color",""],["size","12"],["slot","start"],[3,"click"],["slot","start","name","close-outline"],[3,"formGroup","submit"],["color","light","mode","md"],["size-xs","12","size-sm","12","size-md","12","size-lg","12"],["lines","none"],["helperText","Ingrese un usuario valido","label","Usuario","type","text","labelPlacement","stacked","maxlength","50","formControlName","usuario",3,"errorText"],["label","Password","labelPlacement","stacked","type","password","helperText","Ingrese un password seguro que contenga letras numeros y caracteres especiales","maxlength","30","formControlName","password",3,"errorText"],["label","Repetir password","labelPlacement","stacked","type","password","helperText","Asegurate de haber ingresado el password correctamente","maxlength","30","formControlName","repeat_password",3,"errorText"],["color","primary","type","submit",3,"disabled"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-content",0)(1,"ion-grid")(2,"ion-row")(3,"ion-col",1)(4,"ion-card")(5,"ion-card-header")(6,"ion-card-title")(7,"ion-toolbar")(8,"ion-buttons",2)(9,"ion-button",3),e.NdJ("click",function(){return n.close()}),e._UZ(10,"ion-icon",4),e.qZA()(),e.TgZ(11,"ion-title"),e._uU(12,"Crear Cuenta"),e.qZA()()()(),e.TgZ(13,"ion-card-content")(14,"form",5),e.NdJ("submit",function(){return n.crearUsuario()}),e.TgZ(15,"ion-grid")(16,"ion-row")(17,"ion-col",1)(18,"h3")(19,"ion-badge",6),e._uU(20,"Crear cuenta de usuario"),e.qZA()()()(),e.TgZ(21,"ion-row")(22,"ion-col",7)(23,"ion-item",8),e._UZ(24,"ion-input",9),e.qZA()()(),e.TgZ(25,"ion-row")(26,"ion-col",7)(27,"ion-item",8),e._UZ(28,"ion-input",10),e.qZA(),e.TgZ(29,"ion-item",8),e._UZ(30,"ion-input",11),e.qZA()()(),e.TgZ(31,"ion-row")(32,"ion-col",1)(33,"ion-button",12),e._uU(34," Crear Usuario "),e.qZA()()()()()()()()()()()),2&t&&(e.xp6(14),e.Q6J("formGroup",n.formuser),e.xp6(10),e.Q6J("errorText",n.Error("usuario")),e.xp6(4),e.Q6J("errorText",n.Error("password")),e.xp6(2),e.Q6J("errorText",n.Error("repeat_password")),e.xp6(3),e.Q6J("disabled",n.formuser.invalid))},dependencies:[o.yp,o.YG,o.Sm,o.PM,o.FN,o.Zi,o.Dq,o.wI,o.W2,o.jY,o.gu,o.pK,o.Ie,o.Nd,o.wd,o.sr,o.j9,a._Y,a.JJ,a.JL,a.nD,a.sg,a.u],styles:["ion-card[_ngcontent-%COMP%]{box-shadow:none}"]}),i})(),w=(()=>{class i{constructor(t,n,r,s){this.modalCtrl=t,this.fb=n,this._usuarios=r,this.toastCtrl=s}ngOnInit(){this.formInit()}close(){this.modalCtrl.dismiss()}formInit(){this.formpass=this.fb.group({pass:["",[a.kI.required]],repeatpass:["",[a.kI.required]]},{validator:this.passwordMatchValidator})}passwordMatchValidator(t){const n=t.get("pass"),r=t.get("repeatpass");n&&r&&n.value!==r.value?r.setErrors({error:!0,name:"nada"}):null==r||r.setErrors(null)}updatePass(){const{pass:t}=this.formpass.getRawValue();this.formpass.valid?this._usuarios.updatePasswordUsuario({pass:t,usuario:this.usuario}).then(n=>{this.mensaje(n.mensaje,2e3,"checkmark-outline","top","dark"),this.modalCtrl.dismiss("success")}).catch(n=>{this.mensaje("Error al actualizar, intentelo mas tarde",2e3,"warning-outline","top","danger")}):this.mensaje("El formulario es invalido",2e3,"warning-outline","top","danger")}Error(t){var n,r,s;return null!==(n=this.formpass.get(t))&&void 0!==n&&n.hasError("required")?`Campo ${t} es obligatorio`:null!==(r=this.formpass.get(t))&&void 0!==r&&r.hasError("maxLength")?`el Campo ${t} no debe sobrepasar el limite permitido`:null!==(s=this.formpass.get(t))&&void 0!==s&&s.errors?"Password no coincide":void 0}mensaje(t,n,r,s,p){var _=this;return(0,u.Z)(function*(){(yield _.toastCtrl.create({duration:n,message:t,icon:r,position:s,color:p})).present()})()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(o.IN),e.Y36(a.qu),e.Y36(Z.J),e.Y36(o.yF))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-update-password"]],inputs:{usuario:"usuario"},decls:33,vars:5,consts:[["color",""],["size","12"],["slot","start"],[3,"click"],["slot","start","name","close-outline"],[3,"formGroup","submit"],["color","light","mode","md"],["size-xs","12","size-sm","12","size-md","12","size-lg","12"],["lines","none"],["label","Password","labelPlacement","stacked","type","password","helperText","Ingrese un password seguro que contenga letras numeros y caracteres especiales","maxlength","30","formControlName","pass",3,"errorText"],["label","Repetir password","labelPlacement","stacked","type","password","helperText","Asegurate de haber ingresado el password correctamente","maxlength","30","formControlName","repeatpass",3,"errorText"],["color","primary","type","submit",3,"disabled"],["fill","clear","color","dark",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-content",0)(1,"ion-grid")(2,"ion-row")(3,"ion-col",1)(4,"ion-card")(5,"ion-card-header")(6,"ion-card-title")(7,"ion-toolbar")(8,"ion-buttons",2)(9,"ion-button",3),e.NdJ("click",function(){return n.close()}),e._UZ(10,"ion-icon",4),e.qZA()(),e.TgZ(11,"ion-title"),e._uU(12,"Modificar password"),e.qZA()()()(),e.TgZ(13,"ion-card-content")(14,"form",5),e.NdJ("submit",function(){return n.updatePass()}),e.TgZ(15,"ion-grid")(16,"ion-row")(17,"ion-col",1)(18,"h3")(19,"ion-badge",6),e._uU(20),e.qZA()()()(),e.TgZ(21,"ion-row")(22,"ion-col",7)(23,"ion-item",8),e._UZ(24,"ion-input",9),e.qZA(),e.TgZ(25,"ion-item",8),e._UZ(26,"ion-input",10),e.qZA()()(),e.TgZ(27,"ion-row")(28,"ion-col",1)(29,"ion-button",11),e._uU(30," Actualizar "),e.qZA(),e.TgZ(31,"ion-button",12),e.NdJ("click",function(){return n.close()}),e._uU(32," cancelar "),e.qZA()()()()()()()()()()()),2&t&&(e.xp6(14),e.Q6J("formGroup",n.formpass),e.xp6(6),e.hij("Usuario ",n.usuario,""),e.xp6(4),e.Q6J("errorText",n.Error("pass")),e.xp6(2),e.Q6J("errorText",n.Error("repeatpass")),e.xp6(3),e.Q6J("disabled",n.formpass.invalid))},dependencies:[o.yp,o.YG,o.Sm,o.PM,o.FN,o.Zi,o.Dq,o.wI,o.W2,o.jY,o.gu,o.pK,o.Ie,o.Nd,o.wd,o.sr,o.j9,a._Y,a.JJ,a.JL,a.nD,a.sg,a.u],styles:["ion-card[_ngcontent-%COMP%]{box-shadow:none}"]}),i})();var x=d(6471);function P(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"ion-button",16),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw();return e.KtG(s.openmodal(r.id_admin))}),e._UZ(1,"ion-icon",17),e.qZA()}}function y(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"ion-button",18),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw();return e.KtG(s.updatePasswordModal(r.usuario))}),e._UZ(1,"ion-icon",19),e.qZA()}}function I(i,c){1&i&&(e.TgZ(0,"ion-badge",22),e._uU(1,"Habilitado"),e.qZA())}function q(i,c){1&i&&(e.TgZ(0,"ion-badge",23),e._uU(1,"Bloqueado"),e.qZA())}function k(i,c){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,I,2,0,"ion-badge",20),e.YNc(2,q,2,0,"ion-badge",21),e.qZA()),2&i){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf","activo"==t.estadousuario),e.xp6(1),e.Q6J("ngIf","inactivo"==t.estadousuario)}}function J(i,c){1&i&&(e.TgZ(0,"div")(1,"span"),e._uU(2,"usuario no asignado"),e.qZA()())}function M(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"ion-button",24),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw();return e.KtG(s.AlertConfirm(r.usuario,"inactivo"))}),e._UZ(1,"ion-icon",25),e.qZA()}}function O(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"ion-button",26),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw();return e.KtG(s.AlertConfirm(r.usuario,"activo"))}),e._UZ(1,"ion-icon",27),e.qZA()}}function N(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",6)(4,"ion-avatar"),e._UZ(5,"img",7),e.qZA()(),e.TgZ(6,"td",4),e._uU(7),e.qZA(),e.TgZ(8,"td",4)(9,"a",8),e._uU(10),e.qZA()(),e.TgZ(11,"td",4),e.YNc(12,P,2,0,"ion-button",9),e.YNc(13,y,2,0,"ion-button",10),e.qZA(),e.TgZ(14,"td",4),e.YNc(15,k,3,2,"div",11),e.YNc(16,J,3,0,"div",11),e.qZA(),e.TgZ(17,"td",4),e.YNc(18,M,2,0,"ion-button",12),e.YNc(19,O,2,0,"ion-button",13),e.TgZ(20,"ion-button",14),e.NdJ("click",function(){const s=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.detalleAdministrador(s.id_admin))}),e._UZ(21,"ion-icon",15),e.qZA()()()}if(2&i){const t=c.$implicit,n=c.index;e.xp6(2),e.Oqu(n+1),e.xp6(3),e.Q6J("src",t.imagen,e.LSH),e.xp6(2),e.lnq("",t.nombre," ",t.ap," ",t.am,""),e.xp6(2),e.Q6J("href","tel:"+t.celular,e.LSH),e.xp6(1),e.Oqu(t.celular),e.xp6(2),e.Q6J("ngIf",!t.usuario),e.xp6(1),e.Q6J("ngIf",t.usuario),e.xp6(2),e.Q6J("ngIf",t.estadousuario),e.xp6(1),e.Q6J("ngIf",!t.estadousuario),e.xp6(2),e.Q6J("ngIf","activo"==t.estadousuario),e.xp6(1),e.Q6J("ngIf","inactivo"==t.estadousuario)}}let E=(()=>{class i{constructor(t,n,r,s,p,_){this.modalctrl=t,this.alertctrl=n,this._administradores=r,this.toastCtrl=s,this._usuarios=p,this.router=_,this.listadms=[]}ionViewWillEnter(){this.SolicitarAdministradores()}openmodal(t){var n=this;return(0,u.Z)(function*(){const r=yield n.modalctrl.create({component:U,backdropDismiss:!1,componentProps:{id_admin:t}});yield r.present(),"success"==(yield r.onDidDismiss()).data&&n.SolicitarAdministradores()})()}AlertConfirm(t,n){var r=this;return(0,u.Z)(function*(){const s="activo"==n?"Habilitar":"Deshabilitar",p="activo"==n?"Esta seguro de habilitar la cuenta":"Esta seguro de desabilitar la cuenta";yield(yield r.alertctrl.create({header:s,message:p,buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"aceptar",handler:()=>{r._usuarios.updateEstadoUsuario(t,n).then(b=>{r.mensaje(b.mensaje,2e3,"top","checkmark-outline","dark")}).catch(b=>console.log).finally(()=>{r.SolicitarAdministradores()})}}]})).present()})()}SolicitarAdministradores(){this._administradores.getAdministradores().then(t=>{this.listadms=t}).catch(t=>{console.log(t.message),this.mensaje("Ocurrio un error al traer la informacion",2e3,"top","warning-outline","danger")})}mensaje(t,n,r,s,p){var _=this;return(0,u.Z)(function*(){(yield _.toastCtrl.create({message:t,duration:n,position:r,icon:s,color:p})).present()})()}detalleAdministrador(t){this.router.navigate(["/dashboard/administradores/perfil_administrador",t])}updatePasswordModal(t){var n=this;return(0,u.Z)(function*(){const r=yield n.modalctrl.create({component:w,componentProps:{usuario:t},backdropDismiss:!1});yield r.present(),"success"==(yield r.onDidDismiss()).data&&n.SolicitarAdministradores()})()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(o.IN),e.Y36(o.Br),e.Y36(h),e.Y36(o.yF),e.Y36(Z.J),e.Y36(g.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-adms"]],decls:30,vars:2,consts:[["color","light",3,"fullscreen"],["size","12"],[1,"responsive"],[1,"table"],[1,"ion-text-center"],[4,"ngFor","ngForOf"],[1,"content-img"],[3,"src"],[3,"href"],["title","crear usuario","fill","clear",3,"click",4,"ngIf"],["fill","clear","color","dark","title","modificar password",3,"click",4,"ngIf"],[4,"ngIf"],["color","danger","fill","clear","size","small","title","Deshabilitar cuenta de usuario",3,"click",4,"ngIf"],["color","success","fill","clear","size","small","title","Deshabilitar cuenta de usuario",3,"click",4,"ngIf"],["fill","clear","size","small",3,"click"],["slot","icon-only","name","person-outline"],["title","crear usuario","fill","clear",3,"click"],["slot","icon-only","name","lock-open-outline"],["fill","clear","color","dark","title","modificar password",3,"click"],["slot","icon-only","name","settings-outline"],["color","success","mode","ios",4,"ngIf"],["color","danger","mode","ios",4,"ngIf"],["color","success","mode","ios"],["color","danger","mode","ios"],["color","danger","fill","clear","size","small","title","Deshabilitar cuenta de usuario",3,"click"],["slot","icon-only","name","log-out-outline"],["color","success","fill","clear","size","small","title","Deshabilitar cuenta de usuario",3,"click"],["slot","icon-only","name","sync-outline"]],template:function(t,n){1&t&&(e._UZ(0,"app-header"),e.TgZ(1,"ion-content",0)(2,"ion-grid")(3,"ion-row")(4,"ion-col",1)(5,"ion-card")(6,"ion-card-header")(7,"ion-card-title"),e._uU(8,"Administradores"),e.qZA()(),e.TgZ(9,"ion-card-content")(10,"div",2)(11,"table",3)(12,"thead")(13,"tr")(14,"th"),e._uU(15,"#"),e.qZA(),e.TgZ(16,"th",4),e._uU(17,"foto"),e.qZA(),e.TgZ(18,"th",4),e._uU(19,"Nombre completo"),e.qZA(),e.TgZ(20,"th",4),e._uU(21,"Celular"),e.qZA(),e.TgZ(22,"th",4),e._uU(23,"Usuario"),e.qZA(),e.TgZ(24,"th",4),e._uU(25,"Estado Usuario"),e.qZA(),e.TgZ(26,"th",4),e._uU(27,"Acciones"),e.qZA()()(),e.TgZ(28,"tbody"),e.YNc(29,N,22,13,"tr",5),e.qZA()()()()()()()()()),2&t&&(e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(28),e.Q6J("ngForOf",n.listadms))},dependencies:[l.sg,l.O5,o.BJ,o.yp,o.YG,o.PM,o.FN,o.Zi,o.Dq,o.wI,o.W2,o.jY,o.gu,o.Nd,x.G],styles:[".table[_ngcontent-%COMP%]{width:100%}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #ccc}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px 0}.content-img[_ngcontent-%COMP%]{display:flex;justify-content:center}.responsive[_ngcontent-%COMP%]{overflow-x:auto;display:block;width:100%}ion-card[_ngcontent-%COMP%]{box-shadow:none}"]}),i})();var Q=d(9937);function z(i,c){1&i&&(e.TgZ(0,"p",19),e._uU(1,"Administrador no cuenta con usuario"),e.qZA())}function R(i,c){if(1&i&&(e.TgZ(0,"ion-item"),e._UZ(1,"ion-input",20),e.TgZ(2,"ion-badge",21),e._uU(3),e.qZA()()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("value",t.admin.usuario),e.xp6(1),e.Q6J("color","activo"==t.admin.estado?"success":"danger"),e.xp6(1),e.Oqu("activo"==t.admin.estado?"Habilitado":"Bloqueado")}}function L(i,c){if(1&i&&(e.TgZ(0,"ion-item"),e._UZ(1,"ion-input",22),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("value",t.admin.rol)}}function j(i,c){if(1&i&&(e.TgZ(0,"ion-content",1)(1,"ion-grid")(2,"ion-row")(3,"ion-col",2)(4,"ion-card-header")(5,"ion-item",3)(6,"ion-button",4),e._UZ(7,"ion-icon",5),e.qZA(),e.TgZ(8,"ion-card-title"),e._uU(9,"Perfil de Administrador"),e.qZA()()()()(),e.TgZ(10,"ion-row")(11,"ion-col",6)(12,"ion-card")(13,"ion-card-content",7)(14,"ion-avatar",8),e._UZ(15,"img",9),e.qZA(),e.TgZ(16,"ion-label")(17,"h3"),e._uU(18),e.qZA(),e.TgZ(19,"p"),e._uU(20),e.qZA(),e.YNc(21,z,2,0,"p",10),e.qZA()()()(),e.TgZ(22,"ion-col",11)(23,"ion-card")(24,"ion-card-content")(25,"ion-list"),e.YNc(26,R,4,3,"ion-item",12),e.YNc(27,L,2,1,"ion-item",12),e.TgZ(28,"ion-item"),e._UZ(29,"ion-input",13),e.qZA(),e.TgZ(30,"ion-item"),e._UZ(31,"ion-input",14),e.qZA(),e.TgZ(32,"ion-item"),e._UZ(33,"ion-input",15),e.qZA(),e.TgZ(34,"ion-item"),e._UZ(35,"ion-input",16),e.qZA(),e.TgZ(36,"ion-item"),e._UZ(37,"ion-input",17),e.qZA(),e.TgZ(38,"ion-item"),e._UZ(39,"ion-textarea",18),e.qZA()()()()()()()()),2&i){const t=e.oxw();e.Q6J("fullscreen",!0),e.xp6(15),e.Q6J("src",t.admin.imagen,e.LSH),e.xp6(3),e.lnq("",t.admin.nombre," ",t.admin.ap," ",t.admin.am,""),e.xp6(2),e.Oqu(t.admin.rol),e.xp6(1),e.Q6J("ngIf",!t.admin.rol),e.xp6(5),e.Q6J("ngIf",t.admin.usuario),e.xp6(1),e.Q6J("ngIf",t.admin.rol),e.xp6(2),e.Q6J("value",t.admin.ci+" "+t.admin.complemento),e.xp6(2),e.Q6J("value",t.admin.email||"no cuenta con correo"),e.xp6(2),e.Q6J("value",t.admin.celular),e.xp6(2),e.Q6J("value",t.admin.zona),e.xp6(2),e.Q6J("value",t.admin.calle||"S/N"),e.xp6(2),e.Q6J("value",t.admin.referencia)}}const F=[{path:"listar_administradores",component:E},{path:"nuevo_administrador",component:(()=>{class i{constructor(t,n,r,s,p){this.fb=t,this.toastCtrl=n,this._Administradores=r,this._uploads=s,this.router=p,this.url=""}ngOnInit(){this.formInit()}formInit(){this.formAdmin=this.fb.group({nombre:["",[a.kI.required,a.kI.maxLength(50)]],ap:["",[a.kI.maxLength(30)]],am:["",[a.kI.maxLength(30)]],ci:["",[a.kI.required,a.kI.maxLength(10)]],complemento:["",a.kI.maxLength(5)],zona:["",[a.kI.required,a.kI.maxLength(50)]],calle:["",[a.kI.maxLength(50)]],referencia:["",[a.kI.required,a.kI.maxLength(150)]],email:["",[a.kI.email,a.kI.maxLength(50)]],celular:["",[a.kI.required,a.kI.maxLength(8)]]})}create(){const{nombre:t,ap:n,am:r,ci:s,complemento:p,zona:_,calle:b,referencia:S,email:B,celular:H}=this.formAdmin.getRawValue();this.selectedFile?this._Administradores.postUbicacionAdministrador({zona:_,calle:b,referencia:S}).then(C=>{this._uploads.uploadImageCloudinary(this.selectedFile).then(T=>{this._Administradores.postAdministrador({nombre:t,ap:n,am:r,ci:s,complemento:p,email:B,celular:H,imagen:T.url_image,id_ubicacion:C.id_ubicacion}).then(v=>{this.mensaje(v.mensaje,2e3,"top","checkmark-outline","dark"),this.formAdmin.reset(),this.router.navigate(["/dashboard/administradores/listar_administradores"])}).catch(v=>{console.log("ERROR AL CREAR AL ADMINISTRADOR",v.message),this.mensaje("Ocurrio un error inesperado",2e3,"top","warning-outline","danger")})}).catch(T=>{console.log("ERROR AL SUBIR UNA IMAGEN",T.message),this.mensaje("Ocurrio un error inesperado",2e3,"top","warning-outline","danger")})}).catch(C=>{console.log("ERROR AL CREAR LA UBICACION",C.message),this.mensaje("Ocurrio un error inesperado",2e3,"top","warning-outline","danger")}):this.mensaje("Asegurese de cargar una imagen",2e3,"top","warning-outline","danger")}handleFileChange(t){this.selectedFile=t.target.files[0],this.url=URL.createObjectURL(this.selectedFile)}mensaje(t,n,r,s,p){var _=this;return(0,u.Z)(function*(){(yield _.toastCtrl.create({message:t,duration:n,position:r,icon:s,color:p})).present()})()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(a.qu),e.Y36(o.yF),e.Y36(h),e.Y36(Q.$),e.Y36(g.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-crear-administrador"]],decls:102,vars:14,consts:[["color","light"],["size","12"],["slot","start"],["routerLink","/dashboard/administradores/listar_administradores"],["slot","start","name","chevron-back-outline"],[3,"formGroup","submit"],["color","light","mode","ios"],["size-xs","12","size-sm","12","size-md","4","size-lg","4"],["lines","none"],["type","text","labelPlacement","stacked","maxlength","50","formControlName","nombre",3,"counter"],["slot","label"],["color","danger"],["label","Apellido Paterno","type","text","labelPlacement","stacked","maxlength","30","formControlName","ap",3,"counter"],["label","apellido Materno","type","text","labelPlacement","stacked","maxlength","30","formControlName","am",3,"counter"],["size-xs","12","size-lg","6"],["type","text","labelPlacement","stacked","maxlength","10","formControlName","ci",3,"counter"],["label","Complemento","type","text","labelPlacement","stacked","maxlength","5","formControlName","complemento",3,"counter"],[3,"src"],[1,"file-input-container"],["type","file","accept",".jpg, .jpeg, .png",1,"file-input",3,"change"],["ion-button","","type","button",1,"custom-file-button"],["size-xs","12","size-sm","12","size-md","6","size-lg","6"],["type","text","labelPlacement","stacked","maxlength","50","formControlName","zona",3,"counter"],["type","text","labelPlacement","stacked","maxlength","50","formControlName","calle",3,"counter"],["formControlName","referencia","type","text","labelPlacement","stacked","maxlength","150",3,"autoGrow","counter"],["label","Correo Electronico","type","text","labelPlacement","stacked","maxlength","50","formControlName","email",3,"counter"],["type","number","labelPlacement","stacked","maxlength","8","formControlName","celular",3,"counter"],["type","submit",3,"disabled"],["color","tertiary"]],template:function(t,n){1&t&&(e._UZ(0,"app-header"),e.TgZ(1,"ion-content",0)(2,"ion-grid")(3,"ion-row")(4,"ion-col",1)(5,"ion-card")(6,"ion-card-header")(7,"ion-card-title")(8,"ion-toolbar")(9,"ion-buttons",2)(10,"ion-button",3),e._UZ(11,"ion-icon",4),e.qZA()(),e.TgZ(12,"ion-title"),e._uU(13,"Crear nuevo administrador"),e.qZA()()()(),e.TgZ(14,"ion-card-content")(15,"form",5),e.NdJ("submit",function(){return n.create()}),e.TgZ(16,"ion-row")(17,"ion-col",1)(18,"ion-list-header")(19,"ion-label")(20,"ion-badge",6),e._uU(21,"Informacion Personal"),e.qZA()()()()(),e.TgZ(22,"ion-row")(23,"ion-col",7)(24,"ion-item",8)(25,"ion-input",9)(26,"div",10),e._uU(27," Nombre "),e.TgZ(28,"ion-text",11),e._uU(29,"(Requerido)"),e.qZA()()()()(),e.TgZ(30,"ion-col",7)(31,"ion-item",8),e._UZ(32,"ion-input",12),e.qZA()(),e.TgZ(33,"ion-col",7)(34,"ion-item",8),e._UZ(35,"ion-input",13),e.qZA()()(),e.TgZ(36,"ion-row")(37,"ion-col",14)(38,"ion-item",8)(39,"ion-input",15)(40,"div",10),e._uU(41," Carnet de Identidad "),e.TgZ(42,"ion-text",11),e._uU(43,"(Requerido)"),e.qZA()()()()(),e.TgZ(44,"ion-col",14)(45,"ion-item",8),e._UZ(46,"ion-input",16),e.qZA()()(),e.TgZ(47,"ion-row")(48,"ion-col",1)(49,"ion-item")(50,"ion-thumbnail",2),e._UZ(51,"img",17),e.qZA(),e._UZ(52,"ion-label"),e.TgZ(53,"div",18)(54,"input",19),e.NdJ("change",function(s){return n.handleFileChange(s)}),e.qZA(),e.TgZ(55,"button",20),e._uU(56,"Seleccionar Imagen"),e.qZA()()()()(),e.TgZ(57,"ion-row")(58,"ion-col",21)(59,"ion-list")(60,"ion-list-header")(61,"ion-label")(62,"ion-badge",6),e._uU(63,"Informacion de contacto"),e.qZA()()(),e.TgZ(64,"ion-item",8)(65,"ion-input",22)(66,"div",10),e._uU(67," Zona "),e.TgZ(68,"ion-text",11),e._uU(69,"(Requerido)"),e.qZA()()()()()(),e.TgZ(70,"ion-col",21)(71,"ion-list"),e._UZ(72,"ion-list-header"),e.TgZ(73,"ion-item",8)(74,"ion-input",23)(75,"div",10),e._uU(76," Calle "),e.qZA()()()()()(),e.TgZ(77,"ion-row")(78,"ion-col",1)(79,"ion-item",8)(80,"ion-textarea",24)(81,"div",10),e._uU(82," Referencia "),e.TgZ(83,"ion-text",11),e._uU(84,"(Requerido)"),e.qZA()()()()()(),e.TgZ(85,"ion-row")(86,"ion-col",14)(87,"ion-item",8),e._UZ(88,"ion-input",25),e.qZA()(),e.TgZ(89,"ion-col",14)(90,"ion-item",8)(91,"ion-input",26)(92,"div",10),e._uU(93," Celular "),e.TgZ(94,"ion-text",11),e._uU(95,"(Requerido)"),e.qZA()()()()()(),e.TgZ(96,"ion-row")(97,"ion-col",1)(98,"ion-button",27),e._uU(99," Guardar "),e.qZA(),e.TgZ(100,"ion-button",28),e._uU(101," cancelar "),e.qZA()()()()()()()()()()),2&t&&(e.xp6(15),e.Q6J("formGroup",n.formAdmin),e.xp6(10),e.Q6J("counter",!0),e.xp6(7),e.Q6J("counter",!0),e.xp6(3),e.Q6J("counter",!0),e.xp6(4),e.Q6J("counter",!0),e.xp6(7),e.Q6J("counter",!0),e.xp6(5),e.Q6J("src",n.url||"./assets/img/default.jpg",e.LSH),e.xp6(14),e.Q6J("counter",!0),e.xp6(9),e.Q6J("counter",!0),e.xp6(6),e.Q6J("autoGrow",!0)("counter",!0),e.xp6(8),e.Q6J("counter",!0),e.xp6(3),e.Q6J("counter",!0),e.xp6(7),e.Q6J("disabled",n.formAdmin.invalid))},dependencies:[g.rH,o.yp,o.YG,o.Sm,o.PM,o.FN,o.Zi,o.Dq,o.wI,o.W2,o.jY,o.gu,o.pK,o.Ie,o.Q$,o.q_,o.yh,o.Nd,o.yW,o.g2,o.Bs,o.wd,o.sr,o.as,o.j9,o.YI,x.G,a._Y,a.JJ,a.JL,a.nD,a.sg,a.u],styles:["ion-card[_ngcontent-%COMP%]{box-shadow:none}.file-input-container[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center}.file-input[_ngcontent-%COMP%]{position:absolute;left:0;top:0;opacity:0;height:100%;width:100%;cursor:pointer}.custom-file-button[_ngcontent-%COMP%]{padding:10px 20px;background-color:#3880ff;color:#fff;border:none;border-radius:4px;cursor:pointer}.file-name[_ngcontent-%COMP%]{margin-left:10px;font-size:14px;color:#666}"]}),i})()},{path:"perfil_administrador/:id",component:(()=>{class i{constructor(t,n){this.route=t,this._administrador=n}ngOnInit(){this.id=this.route.snapshot.params.id,this.getAdministrador(this.id)}getAdministrador(t){this._administrador.getOneAdministrador(t).then(n=>{this.admin=n})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(g.gz),e.Y36(h))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-perfil-adms"]],decls:2,vars:1,consts:[["color","light",3,"fullscreen",4,"ngIf"],["color","light",3,"fullscreen"],["size","12"],["lines","none","color","light"],["color","dark","fill","clear","routerLink","/dashboard/administradores/listar_administradores"],["slot","icon-only","name","chevron-back-outline"],["size","4"],[1,"ion-text-center"],[2,"margin-left","auto","margin-right","auto"],[3,"src"],["class","text-danger",4,"ngIf"],["size","8"],[4,"ngIf"],["label","Carnet de identidad","labelPlacement","stacked","readonly","true","placeholder","Carnet de identidad",3,"value"],["label","Correo Electronico","labelPlacement","stacked","readonly","true","placeholder","Correo electronico",3,"value"],["label","Celular","labelPlacement","stacked","readonly","true","placeholder","Celular",3,"value"],["label","Zona","labelPlacement","stacked","readonly","true","placeholder","Zona",3,"value"],["label","Calle","labelPlacement","stacked","readonly","true","placeholder","Calle",3,"value"],["autoGrow","true","label","Referencia","labelPlacement","stacked","readonly","true","placeholder","Referencia",3,"value"],[1,"text-danger"],["label","Usuario","labelPlacement","stacked","readonly","true","placeholder","Usuario",3,"value"],["slot","end","mode","ios",3,"color"],["label","Rol","labelPlacement","stacked","readonly","true","placeholder","Rol de usuario",3,"value"]],template:function(t,n){1&t&&(e._UZ(0,"app-header"),e.YNc(1,j,40,15,"ion-content",0)),2&t&&(e.xp6(1),e.Q6J("ngIf",n.admin))},dependencies:[l.O5,g.rH,o.BJ,o.yp,o.YG,o.PM,o.FN,o.Zi,o.Dq,o.wI,o.W2,o.jY,o.gu,o.pK,o.Ie,o.Q$,o.q_,o.Nd,o.g2,o.j9,o.YI,x.G],styles:["ion-card[_ngcontent-%COMP%]{box-shadow:none}.text-danger[_ngcontent-%COMP%]{color:var(--ion-color-danger)}"]}),i})()}];let $=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.Bz.forChild(F),g.Bz]}),i})();var D=d(822);let G=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[l.ez,$,o.Pc,D.K,a.UX,m.JF]}),i})()},2759:(A,f,d)=>{d.d(f,{J:()=>u});var l=d(6689),g=d(9862);let u=(()=>{class a{constructor(o){this.http=o,this.url="https://server-ogdr.onrender.com/api/usuarios"}createUserAdministrador(o,m){return this.http.post(`${this.url}`,{usuario:o,pass:m,id_rol:"db4302f9-aedc-43ce-bb6e-6064d9f3892a"}).toPromise()}createUserproveedor(o,m){return this.http.post(`${this.url}`,{usuario:o,pass:m,id_rol:"7021ba91-2167-4300-a8d1-4db2c582ab09"}).toPromise()}createUserColegio(o,m){return this.http.post(`${this.url}`,{usuario:o,pass:m,id_rol:"deaf992a-4f44-46f9-9b7e-255b9e9c5b2b"}).toPromise()}updateEstadoUsuario(o,m){return this.http.put(`${this.url}/estado/${o}`,{estado:m}).toPromise()}updatePasswordUsuario(o){return this.http.put(`${this.url}/updatepass`,o).toPromise()}}return a.\u0275fac=function(o){return new(o||a)(l.LFG(g.eN))},a.\u0275prov=l.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);