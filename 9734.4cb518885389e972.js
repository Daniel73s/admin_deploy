"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9734],{822:(h,m,c)=>{c.d(m,{K:()=>r});var i=c(6814),p=c(5548),s=c(6689);let r=(()=>{class t{}return t.\u0275fac=function(u){return new(u||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[i.ez,p.Pc]}),t})()},6471:(h,m,c)=>{c.d(m,{G:()=>o});var i=c(6689),p=c(6814),s=c(5548);function r(u,C){1&u&&(i.TgZ(0,"ion-item",12),i._UZ(1,"ion-icon",13),i.TgZ(2,"ion-label"),i._uU(3,"Cerrar Sesion"),i.qZA()())}function t(u,C){1&u&&(i.TgZ(0,"ion-content",7)(1,"ion-list",8)(2,"ion-item",9),i._UZ(3,"ion-icon",10),i.TgZ(4,"ion-label"),i._uU(5,"Ver Perfil"),i.qZA()(),i.YNc(6,r,4,0,"ion-item",11),i.qZA()()),2&u&&(i.xp6(6),i.Q6J("ngIf",!0))}let o=(()=>{class u{constructor(){}ngOnInit(){}}return u.\u0275fac=function(f){return new(f||u)},u.\u0275cmp=i.Xpm({type:u,selectors:[["app-header"]],decls:9,vars:3,consts:[[1,"ion-no-border",3,"translucent"],[1,"nav-shadow"],["slot","start"],["slot","end","id","click-trigger"],[1,"profile"],[3,"src"],["trigger","click-trigger","mode","md","triggerAction","click",3,"dismissOnSelect"],[1,"ion-padding"],["lines","none",1,"submenu"],["lines","line",1,"btn"],["slot","start","name","person-circle-outline"],["class","btn close",4,"ngIf"],[1,"btn","close"],["slot","start","name","close-circle-outline"]],template:function(f,Z){1&f&&(i.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),i._UZ(3,"ion-menu-button"),i.qZA(),i.TgZ(4,"ion-buttons",3)(5,"ion-avatar",4),i._UZ(6,"img",5),i.qZA(),i.TgZ(7,"ion-popover",6),i.YNc(8,t,7,1,"ng-template"),i.qZA()()()()),2&f&&(i.Q6J("translucent",!0),i.xp6(6),i.Q6J("src","https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png",i.LSH),i.xp6(1),i.Q6J("dismissOnSelect",!0))},dependencies:[p.O5,s.BJ,s.Sm,s.W2,s.Gu,s.gu,s.Ie,s.Q$,s.q_,s.fG,s.sr,s.d8],styles:[".profile[_ngcontent-%COMP%]{width:40px;height:40px;margin-right:10px;cursor:pointer}ion-popover[_ngcontent-%COMP%]::part(backdrop){background-color:transparent}.btn[_ngcontent-%COMP%]{cursor:pointer}.close[_ngcontent-%COMP%]{color:var(--ion-color-danger)}.nav-shadow[_ngcontent-%COMP%]{box-shadow:0 2px 4px #0003}"]}),u})()},9244:(h,m,c)=>{c.d(m,{g:()=>p});var i=c(6689);let p=(()=>{class s{transform(t,o,u){return""===o?t:t.filter(C=>C[u].includes(o.toUpperCase()))}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275pipe=i.Yjl({name:"filter",type:s,pure:!0}),s})()},9870:(h,m,c)=>{c.d(m,{D:()=>s});var i=c(6814),p=c(6689);let s=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=p.oAB({type:r}),r.\u0275inj=p.cJS({imports:[i.ez]}),r})()},9734:(h,m,c)=>{c.r(m),c.d(m,{CategoriasModule:()=>J});var i=c(6814),p=c(4670),s=c(5861),r=c(95),t=c(6689),o=c(5548),u=c(1799);let C=(()=>{class n{constructor(e,a,l,g){this.modalCtrl=e,this.fb=a,this._categoriaSevice=l,this.toastCtrl=g}ngOnInit(){this.forminit()}close(){this.modalCtrl.dismiss()}forminit(){this.formcategoriamod=this.fb.group({nombre:["",[r.kI.required,r.kI.maxLength(30)]],descripcion:["",[r.kI.required,r.kI.maxLength(150)]]}),this.formcategoriamod.patchValue({nombre:this.categoria.nombre}),this.formcategoriamod.patchValue({descripcion:this.categoria.descripcion})}UpdateCategoria(){this._categoriaSevice.updateCategoria(this.id,this.formcategoriamod.value).then(e=>{this.Mensaje(e.mensaje,"top","checkmark-outline",2e3),this.close()})}Mensaje(e,a,l,g){var _=this;return(0,s.Z)(function*(){(yield _.toastCtrl.create({message:e,duration:g,position:a,icon:l})).present()})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(o.IN),t.Y36(r.qu),t.Y36(u.n),t.Y36(o.yF))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-modificar-categoria"]],inputs:{categoria:"categoria"},decls:33,vars:5,consts:[["color",""],["size","12"],["slot","start"],[3,"click"],["slot","start","name","close-outline"],[3,"formGroup","submit"],["color","light","mode","md"],["size-xs","12","size-sm","12","size-md","12","size-lg","12"],["lines","none"],["helperText","Nombre de la categoria","label","Nombre *","type","text","labelPlacement","stacked","maxlength","30","formControlName","nombre",3,"counter"],["label","Descripcion","labelPlacement","stacked","type","text","helperText","Descripcion sobre la categoria","maxlength","150","formControlName","descripcion",3,"autoGrow","counter"],["type","submit","color","primary",3,"disabled"]],template:function(e,a){1&e&&(t.TgZ(0,"ion-content",0)(1,"ion-grid")(2,"ion-row")(3,"ion-col",1)(4,"ion-card")(5,"ion-card-header")(6,"ion-card-title")(7,"ion-toolbar")(8,"ion-buttons",2)(9,"ion-button",3),t.NdJ("click",function(){return a.close()}),t._UZ(10,"ion-icon",4),t.qZA()(),t.TgZ(11,"ion-title"),t._uU(12,"Formulario para modificar categoria"),t.qZA()()()(),t.TgZ(13,"ion-card-content")(14,"form",5),t.NdJ("submit",function(){return a.UpdateCategoria()}),t.TgZ(15,"ion-grid")(16,"ion-row")(17,"ion-col",1)(18,"h3")(19,"ion-badge",6),t._uU(20,"Modificar Categoria"),t.qZA()()()(),t.TgZ(21,"ion-row")(22,"ion-col",7)(23,"ion-item",8),t._UZ(24,"ion-input",9),t.qZA()()(),t.TgZ(25,"ion-row")(26,"ion-col",7)(27,"ion-item",8),t._UZ(28,"ion-textarea",10),t.qZA()()(),t.TgZ(29,"ion-row")(30,"ion-col",1)(31,"ion-button",11),t._uU(32," Actualizar "),t.qZA()()()()()()()()()()()),2&e&&(t.xp6(14),t.Q6J("formGroup",a.formcategoriamod),t.xp6(10),t.Q6J("counter",!0),t.xp6(4),t.Q6J("autoGrow",!0)("counter",!0),t.xp6(3),t.Q6J("disabled",a.formcategoriamod.invalid))},dependencies:[o.yp,o.YG,o.Sm,o.PM,o.FN,o.Zi,o.Dq,o.wI,o.W2,o.jY,o.gu,o.pK,o.Ie,o.Nd,o.g2,o.wd,o.sr,o.j9,r._Y,r.JJ,r.JL,r.nD,r.sg,r.u],styles:["ion-card[_ngcontent-%COMP%]{box-shadow:none!important}"]}),n})();var f=c(6471),Z=c(9244);function x(n,d){1&n&&(t.TgZ(0,"div",7),t._UZ(1,"ion-spinner",8),t.qZA())}function M(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"ion-button",18),t.NdJ("click",function(){t.CHM(e);const l=t.oxw().$implicit,g=t.oxw(2);return t.KtG(g.alertConfirm(l.id_categoria,!1))}),t._UZ(1,"ion-icon",19),t.qZA()}}function T(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"ion-button",20),t.NdJ("click",function(){t.CHM(e);const l=t.oxw().$implicit,g=t.oxw(2);return t.KtG(g.alertConfirm(l.id_categoria,!0))}),t._UZ(1,"ion-icon",21),t.qZA()}}function v(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",10),t._uU(4),t.qZA(),t.TgZ(5,"td",12)(6,"div",12),t._uU(7),t.qZA()(),t.TgZ(8,"td",13)(9,"ion-button",14),t.NdJ("click",function(){const g=t.CHM(e).$implicit,_=t.oxw(2);return t.KtG(_.modificar(g.id_categoria))}),t._UZ(10,"ion-icon",15),t.qZA(),t.YNc(11,M,2,0,"ion-button",16),t.YNc(12,T,2,0,"ion-button",17),t.qZA()()}if(2&n){const e=d.$implicit,a=d.index;t.xp6(2),t.Oqu(a+1),t.xp6(2),t.Oqu(e.nombre),t.xp6(3),t.hij(" ",e.descripcion," "),t.xp6(4),t.Q6J("ngIf",e.estado),t.xp6(1),t.Q6J("ngIf",!e.estado)}}function P(n,d){if(1&n&&(t.TgZ(0,"table",9)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"#"),t.qZA(),t.TgZ(5,"th",10),t._uU(6,"Nombre"),t.qZA(),t.TgZ(7,"th",10),t._uU(8,"Descripcion"),t.qZA(),t.TgZ(9,"th",10),t._uU(10,"Acciones"),t.qZA()()(),t.TgZ(11,"tbody"),t.YNc(12,v,13,5,"tr",11),t.ALo(13,"filter"),t.qZA()()),2&n){const e=t.oxw();t.xp6(12),t.Q6J("ngForOf",t.Dn7(13,1,e.categorias,e.texto,"nombre"))}}const y=[{path:"listar_categorias",component:(()=>{class n{constructor(e,a,l){this.modalCtrl=e,this._CategoriasService=a,this.alertCtrl=l,this.texto=""}ionViewWillEnter(){this.getCategorias()}getCategorias(){this._CategoriasService.getCategorias().then(e=>{this.categorias=e})}modificar(e){var a=this;return(0,s.Z)(function*(){a._CategoriasService.getCategoriaById(e).then(function(){var l=(0,s.Z)(function*(g){const _=yield a.modalCtrl.create({component:C,componentProps:{categoria:g,id:e}});yield _.present(),yield _.onDidDismiss().then(()=>{a.getCategorias()})});return function(g){return l.apply(this,arguments)}}())})()}alertConfirm(e,a){var l=this;return(0,s.Z)(function*(){let g=a?"\xbfEsta seguro de Habilitar la categoria?":"\xbfEsta seguro de Deshabilitar la categoria?",_=a?"habilitar":"deshabilitar";yield(yield l.alertCtrl.create({header:_.toUpperCase(),message:g,buttons:[{text:"Cancelar",role:"cancel",handler:()=>{}},{text:"Aceptar",handler:()=>{l._CategoriasService.updateEstadoCategoria(e,a).then(()=>{l.getCategorias()})}}]})).present()})()}buscar(e){this.texto=e.detail.value}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(o.IN),t.Y36(u.n),t.Y36(o.Br))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-categorias"]],decls:15,vars:3,consts:[["color","light",3,"fullscreen"],["size","12"],[1,"header"],["placeholder","Buscar Categoria","type","text",3,"ionInput"],[1,"responsive"],["class","loading_container",4,"ngIf"],["class","table",4,"ngIf"],[1,"loading_container"],["color","tertiary","name","circular"],[1,"table"],[1,"ion-text-center"],[4,"ngFor","ngForOf"],[1,"content-desciption"],[1,"buttons-accion"],["color","primary","fill","clear","title","Modificar",3,"click"],["slot","icon-only","name","create-outline"],["color","danger","fill","clear","title","Deshabilitar",3,"click",4,"ngIf"],["color","success","fill","clear","title","Habilitar",3,"click",4,"ngIf"],["color","danger","fill","clear","title","Deshabilitar",3,"click"],["slot","icon-only","name","trash-outline"],["color","success","fill","clear","title","Habilitar",3,"click"],["slot","icon-only","name","reload-outline"]],template:function(e,a){1&e&&(t._UZ(0,"app-header"),t.TgZ(1,"ion-content",0)(2,"ion-grid")(3,"ion-row")(4,"ion-col",1)(5,"ion-card")(6,"div",2)(7,"ion-card-header")(8,"ion-card-title"),t._uU(9,"Categorias"),t.qZA()(),t.TgZ(10,"ion-searchbar",3),t.NdJ("ionInput",function(g){return a.buscar(g)}),t.qZA()(),t.TgZ(11,"ion-card-content")(12,"div",4),t.YNc(13,x,2,0,"div",5),t.YNc(14,P,14,5,"table",6),t.qZA()()()()()()()),2&e&&(t.xp6(1),t.Q6J("fullscreen",!0),t.xp6(12),t.Q6J("ngIf",!a.categorias),t.xp6(1),t.Q6J("ngIf",a.categorias))},dependencies:[i.sg,i.O5,o.YG,o.PM,o.FN,o.Zi,o.Dq,o.wI,o.W2,o.jY,o.gu,o.Nd,o.VI,o.PQ,o.j9,f.G,Z.g],styles:[".table[_ngcontent-%COMP%]{width:100%;text-align:left;border-collapse:collapse}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:50px;border-bottom:1px solid #ccc}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px;text-align:center}.responsive[_ngcontent-%COMP%]{overflow-x:auto;display:block;width:100%}ion-card[_ngcontent-%COMP%]{box-shadow:none!important}.header[_ngcontent-%COMP%]{display:flex}ion-searchbar[_ngcontent-%COMP%]{--background:var(--ion-color-light);--background: var(--ion-color-light);--box-shadow: none;--border-radius:5px}.loading_container[_ngcontent-%COMP%]{display:flex;justify-content:center}.loading_container[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{margin-top:100px}.buttons-accion[_ngcontent-%COMP%]{display:flex;justify-content:center}.content-desciption[_ngcontent-%COMP%]{width:200px}"]}),n})()},{path:"crear_categoria",component:(()=>{class n{constructor(e,a,l,g){this._categoriasService=e,this.toastctrl=a,this.fb=l,this.router=g}ngOnInit(){this.formInit()}formInit(){this.formCategoria=this.fb.group({nombre:["",[r.kI.required,r.kI.maxLength(30)]],descripcion:["",[r.kI.required,r.kI.maxLength(150)]]})}createCategoria(){this._categoriasService.postCategoria(this.formCategoria.value).then(e=>{this.Mensaje(e.mensaje,"checkmark-outline","top",2e3,"success"),this.router.navigate(["/dashboard/categorias/listar_categorias"])}).catch(e=>{this.Mensaje(e.mensaje,"close-outline","top",2e3,"danger")})}Mensaje(e,a,l,g,_){var b=this;return(0,s.Z)(function*(){(yield b.toastctrl.create({message:e,position:l,icon:a,duration:g,color:_})).present()})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.n),t.Y36(o.yF),t.Y36(r.qu),t.Y36(p.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-crear-categoria"]],decls:35,vars:5,consts:[["color","light"],["size","12"],["slot","start"],["routerLink","/dashboard/categorias/listar_categorias"],["slot","start","name","chevron-back-outline"],["color","light","mode","md"],[3,"formGroup","submit"],["size-xs","12","size-sm","12","size-md","12","size-lg","12"],["lines","none"],["helperText","Nombre de la categoria","label","Nombre *","type","text","labelPlacement","stacked","maxlength","30","formControlName","nombre",3,"counter"],["label","Descripcion","labelPlacement","stacked","type","text","helperText","Descripcion sobre la categoria","maxlength","150","formControlName","descripcion",3,"autoGrow","counter"],["color","primary","type","submit",3,"disabled"]],template:function(e,a){1&e&&(t._UZ(0,"app-header"),t.TgZ(1,"ion-content",0)(2,"ion-grid")(3,"ion-row")(4,"ion-col",1)(5,"ion-card")(6,"ion-card-header")(7,"ion-card-title")(8,"ion-toolbar")(9,"ion-buttons",2)(10,"ion-button",3),t._UZ(11,"ion-icon",4),t.qZA()(),t.TgZ(12,"ion-title"),t._uU(13,"Formulario para la creacion de una nueva categoria"),t.qZA()()()(),t.TgZ(14,"ion-card-content")(15,"form")(16,"ion-grid")(17,"ion-row")(18,"ion-col",1)(19,"h3")(20,"ion-badge",5),t._uU(21,"Nueva Categoria"),t.qZA()()()(),t.TgZ(22,"form",6),t.NdJ("submit",function(){return a.createCategoria()}),t.TgZ(23,"ion-row")(24,"ion-col",7)(25,"ion-item",8),t._UZ(26,"ion-input",9),t.qZA()()(),t.TgZ(27,"ion-row")(28,"ion-col",7)(29,"ion-item",8),t._UZ(30,"ion-textarea",10),t.qZA()()(),t.TgZ(31,"ion-row")(32,"ion-col",1)(33,"ion-button",11),t._uU(34," Crear Categoria "),t.qZA()()()()()()()()()()()()),2&e&&(t.xp6(22),t.Q6J("formGroup",a.formCategoria),t.xp6(4),t.Q6J("counter",!0),t.xp6(4),t.Q6J("autoGrow",!0)("counter",!0),t.xp6(3),t.Q6J("disabled",a.formCategoria.invalid))},dependencies:[p.rH,o.yp,o.YG,o.Sm,o.PM,o.FN,o.Zi,o.Dq,o.wI,o.W2,o.jY,o.gu,o.pK,o.Ie,o.Nd,o.g2,o.wd,o.sr,o.j9,o.YI,f.G,r._Y,r.JJ,r.JL,r.nD,r.sg,r.u],styles:["ion-card[_ngcontent-%COMP%]{box-shadow:none!important}"]}),n})()}];let O=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(y),p.Bz]}),n})();var A=c(822),I=c(9862),U=c(9870);let J=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[i.ez,O,o.Pc,A.K,I.JF,r.UX,U.D]}),n})()}}]);