!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(self.webpackChunkcuba=self.webpackChunkcuba||[]).push([[258],{40258:function(e,i,o){"use strict";o.r(i),o.d(i,{TodoModule:function(){return x}});var r=o(61116),a=o(31041),c=o(75425),s=o(68003),l=o(6516),d=o(35366),u=o(52320),Z=o(43675),p=function(t){return{completed:t}};function g(t,e){if(1&t){var n=d.EpF();d.TgZ(0,"li",35),d.TgZ(1,"div",36),d.TgZ(2,"h4",37),d._uU(3),d.qZA(),d.TgZ(4,"span",38),d.TgZ(5,"span",39),d.NdJ("click",function(){var t=d.CHM(n).index;return d.oxw().taskDeleted(t)}),d.TgZ(6,"i",15),d._UZ(7,"i",40),d.qZA(),d.qZA(),d.TgZ(8,"span",41),d.NdJ("click",function(){var t=d.CHM(n).$implicit;return d.oxw().taskCompleted(t)}),d.TgZ(9,"i",15),d._UZ(10,"i",16),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()}if(2&t){var i=e.$implicit,o=d.oxw();d.Q6J("ngClass",d.VKq(2,p,i.completed?i.completed:o.completed)),d.xp6(3),d.Oqu(i.text)}}var f,m,k=function(){return["Apps"]},v=function(t){return{"move-up":t}},A=function(t){return{"move-down":t}},T=function(t){return{hide:t}},b=function(t){return{visible:t}},q=[{path:"",children:[{path:"",component:(f=function(){function e(n){t(this,e),this.toastrService=n,this.todos=l.o,this.red_border=!1}return n(e,[{key:"ngOnInit",value:function(){}},{key:"addTask",value:function(t){if(!t)return this.red_border=!0,!1;this.todos.push({text:t,completed:!1}),this.text="",this.red_border=!1}},{key:"taskCompleted",value:function(t){t.completed=!t.completed,t.completed?this.toastrService.success(t.text,"Mark as completed"):this.toastrService.error(t.text,"Mark as Incompleted")}},{key:"taskDeleted",value:function(t){this.todos.splice(t,1)}},{key:"markAllAction",value:function(t){this.todos.filter(function(e){e.completed=t}),this.completed=t,t?this.toastrService.success("All Task as Completed"):this.toastrService.error("All Task as Incompleted")}}]),e}(),f.\u0275fac=function(t){return new(t||f)(d.Y36(u._W))},f.\u0275cmp=d.Xpm({type:f,selectors:[["app-todo"]],decls:45,vars:20,consts:[[3,"title","items","active_item"],[1,"container-fluid"],[1,"row"],[1,"col-xl-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"todo"],[1,"todo-list-wrapper"],[1,"todo-list-container"],[1,"mark-all-tasks"],[1,"mark-all-tasks-container"],["id","mark-all-finished","role","button","id","mark-all-finished","role","button",1,"mark-all-btn",3,"ngClass"],[1,"btn-label"],[1,"action-box","completed",3,"click"],[1,"icon"],[1,"icon-check"],["id","mark-all-incomplete","role","button",1,"mark-all-btn","move-down",3,"ngClass"],[1,"action-box"],[1,"icon",3,"click"],[1,"todo-list-body"],["id","todo-list"],["class","task",3,"ngClass",4,"ngFor","ngForOf"],[1,"todo-list-footer"],[1,"add-task-btn-wrapper"],[1,"add-task-btn",3,"ngClass"],[1,"btn","btn-primary",3,"click"],[1,"icon-plus"],[1,"new-task-wrapper",3,"ngClass"],["name","todo","id","new-task",1,"textfield",3,"ngModel","ngModelChange"],["id","close-task-panel",1,"btn","btn-danger","cancel-btn",3,"click"],["id","add-task",1,"btn","btn-success","ml-3","add-new-task-btn",3,"click"],[1,"notification-popup","hide"],[1,"task"],[1,"notification-text"],[1,"task",3,"ngClass"],[1,"task-container"],[1,"task-label"],[1,"task-action-btn"],["title","Delete Task","routerLink","/to-do",1,"action-box","large","delete-btn",3,"click"],[1,"icon-trash"],["title","Mark Complete",1,"action-box","large","complete-btn",3,"click"]],template:function(t,e){1&t&&(d._UZ(0,"app-breadcrumb",0),d.TgZ(1,"div",1),d.TgZ(2,"div",2),d.TgZ(3,"div",3),d.TgZ(4,"div",4),d.TgZ(5,"div",5),d.TgZ(6,"h5"),d._uU(7,"To-Do"),d.qZA(),d.qZA(),d.TgZ(8,"div",6),d.TgZ(9,"div",7),d.TgZ(10,"div",8),d.TgZ(11,"div",9),d.TgZ(12,"div",10),d.TgZ(13,"div",11),d.TgZ(14,"span",12),d.TgZ(15,"span",13),d._uU(16,"Mark all as finished"),d.qZA(),d.TgZ(17,"span",14),d.NdJ("click",function(){return e.markAllAction(!0)}),d.TgZ(18,"i",15),d._UZ(19,"i",16),d.qZA(),d.qZA(),d.qZA(),d.TgZ(20,"span",17),d.TgZ(21,"span",13),d._uU(22,"Mark all as Incomplete"),d.qZA(),d.TgZ(23,"span",18),d.TgZ(24,"i",19),d.NdJ("click",function(){return e.markAllAction(!1)}),d._UZ(25,"i",16),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(26,"div",20),d.TgZ(27,"ul",21),d.YNc(28,g,11,4,"li",22),d.qZA(),d.qZA(),d.TgZ(29,"div",23),d.TgZ(30,"div",24),d.TgZ(31,"span",25),d.TgZ(32,"button",26),d.NdJ("click",function(){return e.visible=!0}),d._UZ(33,"i",27),d._uU(34," Add new task"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(35,"div",28),d.TgZ(36,"textarea",29),d.NdJ("ngModelChange",function(t){return e.text=t}),d.qZA(),d.TgZ(37,"span",30),d.NdJ("click",function(){return e.visible=!1}),d._uU(38,"Close"),d.qZA(),d.TgZ(39,"span",31),d.NdJ("click",function(){return e.addTask(e.text)}),d._uU(40,"Add Task"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(41,"div",32),d.TgZ(42,"p"),d._UZ(43,"span",33),d._UZ(44,"span",34),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&t&&(d.Q6J("title","To Do")("items",d.DdM(11,k))("active_item","To Do"),d.xp6(14),d.Q6J("ngClass",d.VKq(12,v,e.completed)),d.xp6(6),d.Q6J("ngClass",d.VKq(14,A,!e.completed)),d.xp6(8),d.Q6J("ngForOf",e.todos),d.xp6(3),d.Q6J("ngClass",d.VKq(16,T,e.visible)),d.xp6(4),d.Q6J("ngClass",d.VKq(18,b,e.visible)),d.xp6(1),d.ekj("border-danger",e.red_border),d.Q6J("ngModel",e.text))},directives:[Z.L,r.mk,r.sg,a.Fj,a.JJ,a.On,s.rH],styles:[".err[_ngcontent-%COMP%]{border:thin red;color:red}"]}),f)}]}],h=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[s.Bz.forChild(q)],s.Bz]}),e}(),x=((m=function e(){t(this,e)}).\u0275fac=function(t){return new(t||m)},m.\u0275mod=d.oAB({type:m}),m.\u0275inj=d.cJS({providers:[],imports:[[r.ez,h,a.u5,a.UX,c.m]]}),m)},43675:function(e,i,o){"use strict";o.d(i,{L:function(){return d}});var r=o(35366),a=o(68003),c=o(77818),s=o(61116);function l(t,e){if(1&t&&(r.TgZ(0,"li",5),r._uU(1),r.qZA()),2&t){var n=e.$implicit;r.xp6(1),r.Oqu(n)}}var d=function(){var e=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-breadcrumb"]],inputs:{title:"title",items:"items",active_item:"active_item"},decls:14,vars:5,consts:[[1,"container-fluid"],[1,"page-title"],[1,"row"],[1,"col-6"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[3,"icon"],["class","breadcrumb-item",4,"ngFor","ngForOf"],[1,"breadcrumb-item","active"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r.TgZ(3,"div",3),r.TgZ(4,"h3"),r._uU(5),r.qZA(),r.qZA(),r.TgZ(6,"div",3),r.TgZ(7,"ol",4),r.TgZ(8,"li",5),r.TgZ(9,"a",6),r._UZ(10,"app-feather-icons",7),r.qZA(),r.qZA(),r.YNc(11,l,2,1,"li",8),r.TgZ(12,"li",9),r._uU(13),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(5),r.Oqu(e.title),r.xp6(4),r.Q6J("routerLink","/dashboard/default"),r.xp6(1),r.Q6J("icon","home"),r.xp6(1),r.Q6J("ngForOf",e.items),r.xp6(2),r.Oqu(e.active_item))},directives:[a.yS,c.A,s.sg],styles:[""]}),e}()}}])}();