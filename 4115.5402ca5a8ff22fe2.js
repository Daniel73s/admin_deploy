"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4115],{822:(m,s,i)=>{i.d(s,{K:()=>l});var n=i(6814),u=i(5548),t=i(6689);let l=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[n.ez,u.Pc]}),o})()},6471:(m,s,i)=>{i.d(s,{G:()=>g});var n=i(6689),u=i(6814),t=i(5548);function l(r,d){1&r&&(n.TgZ(0,"ion-item",12),n._UZ(1,"ion-icon",13),n.TgZ(2,"ion-label"),n._uU(3,"Cerrar Sesion"),n.qZA()())}function o(r,d){1&r&&(n.TgZ(0,"ion-content",7)(1,"ion-list",8)(2,"ion-item",9),n._UZ(3,"ion-icon",10),n.TgZ(4,"ion-label"),n._uU(5,"Ver Perfil"),n.qZA()(),n.YNc(6,l,4,0,"ion-item",11),n.qZA()()),2&r&&(n.xp6(6),n.Q6J("ngIf",!0))}let g=(()=>{class r{constructor(){}ngOnInit(){}}return r.\u0275fac=function(p){return new(p||r)},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-header"]],decls:9,vars:3,consts:[[1,"ion-no-border",3,"translucent"],[1,"nav-shadow"],["slot","start"],["slot","end","id","click-trigger"],[1,"profile"],[3,"src"],["trigger","click-trigger","mode","md","triggerAction","click",3,"dismissOnSelect"],[1,"ion-padding"],["lines","none",1,"submenu"],["lines","line",1,"btn"],["slot","start","name","person-circle-outline"],["class","btn close",4,"ngIf"],[1,"btn","close"],["slot","start","name","close-circle-outline"]],template:function(p,h){1&p&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),n._UZ(3,"ion-menu-button"),n.qZA(),n.TgZ(4,"ion-buttons",3)(5,"ion-avatar",4),n._UZ(6,"img",5),n.qZA(),n.TgZ(7,"ion-popover",6),n.YNc(8,o,7,1,"ng-template"),n.qZA()()()()),2&p&&(n.Q6J("translucent",!0),n.xp6(6),n.Q6J("src","https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png",n.LSH),n.xp6(1),n.Q6J("dismissOnSelect",!0))},dependencies:[u.O5,t.BJ,t.Sm,t.W2,t.Gu,t.gu,t.Ie,t.Q$,t.q_,t.fG,t.sr,t.d8],styles:[".profile[_ngcontent-%COMP%]{width:40px;height:40px;margin-right:10px;cursor:pointer}ion-popover[_ngcontent-%COMP%]::part(backdrop){background-color:transparent}.btn[_ngcontent-%COMP%]{cursor:pointer}.close[_ngcontent-%COMP%]{color:var(--ion-color-danger)}.nav-shadow[_ngcontent-%COMP%]{box-shadow:0 2px 4px #0003}"]}),r})()},4115:(m,s,i)=>{i.r(s),i.d(s,{InicioPageModule:()=>Z});var n=i(6814),u=i(95),t=i(5548),l=i(4670),o=i(6689),g=i(729),r=i(6471);function d(e,a){if(1&e&&(o.TgZ(0,"ion-content",1)(1,"ion-header",2)(2,"ion-toolbar",3)(3,"ion-title"),o._uU(4,"Inicio"),o.qZA()()(),o.TgZ(5,"ion-grid")(6,"ion-row")(7,"ion-col",4)(8,"ion-card"),o._UZ(9,"ion-icon",5),o.TgZ(10,"ion-card-header")(11,"ion-card-subtitle"),o._uU(12,"Administradores"),o.qZA()(),o.TgZ(13,"ion-card-content")(14,"h1"),o._uU(15),o.qZA()()()(),o.TgZ(16,"ion-col",4)(17,"ion-card"),o._UZ(18,"ion-icon",6),o.TgZ(19,"ion-card-header")(20,"ion-card-subtitle"),o._uU(21,"Colegios"),o.qZA()(),o.TgZ(22,"ion-card-content")(23,"h1"),o._uU(24),o.qZA()()()(),o.TgZ(25,"ion-col",4)(26,"ion-card"),o._UZ(27,"ion-icon",7),o.TgZ(28,"ion-card-header")(29,"ion-card-subtitle"),o._uU(30,"Proveedores"),o.qZA()(),o.TgZ(31,"ion-card-content")(32,"h1"),o._uU(33),o.qZA()()()(),o.TgZ(34,"ion-col",4)(35,"ion-card"),o._UZ(36,"ion-icon",8),o.TgZ(37,"ion-card-header")(38,"ion-card-subtitle"),o._uU(39,"Productos"),o.qZA()(),o.TgZ(40,"ion-card-content")(41,"h1"),o._uU(42),o.qZA()()()()()()()),2&e){const c=o.oxw();o.Q6J("fullscreen",!0),o.xp6(15),o.Oqu(c.datos[0].total),o.xp6(9),o.Oqu(c.datos[1].total),o.xp6(9),o.Oqu(c.datos[3].total),o.xp6(9),o.Oqu(c.datos[2].total)}}const h=[{path:"",component:(()=>{class e{constructor(c){this._reportes=c,this.datos=[]}ngOnInit(){this.getinfoinicio()}getinfoinicio(){this._reportes.getInfoInicio().then(c=>{this.datos=c}).catch(c=>{console.log(c.message)})}}return e.\u0275fac=function(c){return new(c||e)(o.Y36(g.c))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-inicio"]],decls:2,vars:1,consts:[["color","light",3,"fullscreen",4,"ngIf"],["color","light",3,"fullscreen"],[1,"ion-no-border"],["color","light"],["size-xs","12","size-sm","12","size-md","6","size-lg","4"],["name","person",1,"icon-card"],["name","shield-half-outline",1,"icon-card"],["name","people-outline",1,"icon-card"],["name","fast-food-outline",1,"icon-card"]],template:function(c,P){1&c&&(o._UZ(0,"app-header"),o.YNc(1,d,43,5,"ion-content",0)),2&c&&(o.xp6(1),o.Q6J("ngIf",P.datos.length>0))},dependencies:[n.O5,t.PM,t.FN,t.Zi,t.tO,t.wI,t.W2,t.jY,t.Gu,t.gu,t.Nd,t.wd,t.sr,r.G],styles:["ion-card[_ngcontent-%COMP%]{box-shadow:none!important;position:relative}.icon-card[_ngcontent-%COMP%]{position:absolute;top:.5rem;right:.5rem;font-size:5rem;color:var(--ion-color-secondary-shade)}h1[_ngcontent-%COMP%]{font-size:1.5rem}.echart[_ngcontent-%COMP%]{width:50rem;height:400px}"]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(c){return new(c||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[l.Bz.forChild(h),l.Bz]}),e})();var _=i(822);let Z=(()=>{class e{}return e.\u0275fac=function(c){return new(c||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[n.ez,u.u5,t.Pc,f,_.K]}),e})()}}]);