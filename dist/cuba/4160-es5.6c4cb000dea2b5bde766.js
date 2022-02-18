!function(){function i(i,Z){if(!(i instanceof Z))throw new TypeError("Cannot call a class as a function")}function Z(i,Z){for(var a=0;a<Z.length;a++){var e=Z[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function a(i,a,e){return a&&Z(i.prototype,a),e&&Z(i,e),i}(self.webpackChunkcuba=self.webpackChunkcuba||[]).push([[4160],{34160:function(Z,e,t){"use strict";t.r(e),t.d(e,{BookmarksModule:function(){return C}});var l=t(61116),o=t(75425),g=t(68003),n=t(35366),r=t(43675),d=t(6233),s=t(31041),A=["addBookmark"];function T(i,Z){1&i&&(n.TgZ(0,"div",1),n.TgZ(1,"h5",2),n._uU(2,"Add Bookmark"),n.qZA(),n.TgZ(3,"button",3),n.NdJ("click",function(){return Z.$implicit.dismiss("Cross click")}),n.TgZ(4,"span",4),n._uU(5,"\xd7"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(6,"div",5),n.TgZ(7,"form",6),n.TgZ(8,"div",7),n.TgZ(9,"div",8),n.TgZ(10,"label",9),n._uU(11,"Web Url"),n.qZA(),n._UZ(12,"input",10),n.qZA(),n.TgZ(13,"div",8),n.TgZ(14,"label",11),n._uU(15,"Title"),n.qZA(),n._UZ(16,"input",12),n.qZA(),n.TgZ(17,"div",8),n.TgZ(18,"label"),n._uU(19,"Description"),n.qZA(),n._UZ(20,"textarea",13),n.qZA(),n.TgZ(21,"div",14),n.TgZ(22,"label"),n._uU(23,"Group"),n.qZA(),n.TgZ(24,"select",15),n.TgZ(25,"option",16),n._uU(26,"My Bookmarks"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(27,"div",14),n.TgZ(28,"label"),n._uU(29,"Collection"),n.qZA(),n.TgZ(30,"select",17),n.TgZ(31,"option",18),n._uU(32,"General"),n.qZA(),n.TgZ(33,"option",19),n._uU(34,"fs"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n._UZ(35,"input",20),n.TgZ(36,"button",21),n._uU(37,"Save"),n.qZA(),n.TgZ(38,"button",22),n._uU(39,"Cancel"),n.qZA(),n.qZA(),n.qZA())}var q=function(){var Z=function(){function Z(a,e){i(this,Z),this.platformId=a,this.modalService=e,this.modalOpen=!1}return a(Z,[{key:"ngOnInit",value:function(){}},{key:"openModal",value:function(){var i=this;(0,l.NF)(this.platformId)&&this.modalService.open(this.addBookmark,{size:"lg",ariaLabelledBy:"modal-bookmark",centered:!0,windowClass:"modal-bookmark"}).result.then(function(Z){i.modalOpen=!0},function(Z){i.closeResult="Dismissed ".concat(i.getDismissReason(Z))})}},{key:"getDismissReason",value:function(i){return i===d.If.ESC?"by pressing ESC":i===d.If.BACKDROP_CLICK?"by clicking on a backdrop":"with: ".concat(i)}},{key:"ngOnDestroy",value:function(){this.modalOpen&&this.modalService.dismissAll()}}]),Z}();return Z.\u0275fac=function(i){return new(i||Z)(n.Y36(n.Lbi),n.Y36(d.FF))},Z.\u0275cmp=n.Xpm({type:Z,selectors:[["app-add-bookmark"]],viewQuery:function(i,Z){var a;(1&i&&n.Gf(A,5),2&i)&&(n.iGM(a=n.CRH())&&(Z.addBookmark=a.first))},decls:2,vars:0,consts:[["addBookmark",""],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close","data-original-title","","title","",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],["id","bookmark-form","novalidate","",1,"form-bookmark","needs-validation"],[1,"form-row"],[1,"form-group","col-md-12"],["for","bm-weburl"],["id","bm-weburl","type","text","required","","autocomplete","off",1,"form-control"],["for","bm-title"],["id","bm-title","type","text","required","","autocomplete","off",1,"form-control"],["id","bm-desc","required","","autocomplete","off",1,"form-control"],[1,"form-group","col-md-6","mb-0"],["id","bm-group",1,"js-example-basic-single"],["value","bookmark"],["id","bm-collection",1,"js-example-disabled-results"],["value","general"],["value","fs"],["id","index_var","type","hidden","value","6"],["id","Bookmark","type","submit",1,"btn","btn-secondary","mr-1"],["type","button","data-dismiss","modal",1,"btn","btn-primary","mr-1"]],template:function(i,Z){1&i&&n.YNc(0,T,40,0,"ng-template",null,0,n.W1O)},directives:[s._Y,s.JL,s.F,s.YN,s.Kr],styles:[""]}),Z}(),u=["editBookmark"];function c(i,Z){1&i&&(n.TgZ(0,"div",1),n.TgZ(1,"h5",2),n._uU(2,"Edit Bookmark"),n.qZA(),n.TgZ(3,"button",3),n.NdJ("click",function(){return Z.$implicit.dismiss("Cross click")}),n.TgZ(4,"span",4),n._uU(5,"\xd7"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(6,"div",5),n.TgZ(7,"form",6),n.TgZ(8,"div",7),n.TgZ(9,"div",8),n.TgZ(10,"label"),n._uU(11,"Web Url"),n.qZA(),n._UZ(12,"input",9),n.qZA(),n.TgZ(13,"div",8),n.TgZ(14,"label"),n._uU(15,"Title"),n.qZA(),n._UZ(16,"input",10),n.qZA(),n.TgZ(17,"div",8),n.TgZ(18,"label"),n._uU(19,"Description"),n.qZA(),n.TgZ(20,"textarea",11),n._uU(21,"Cuba is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions."),n.qZA(),n.qZA(),n.TgZ(22,"div",12),n.TgZ(23,"label"),n._uU(24,"Group"),n.qZA(),n.TgZ(25,"select",13),n.TgZ(26,"option",14),n._uU(27,"My Bookmarks"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(28,"div",12),n.TgZ(29,"label"),n._uU(30,"Collection"),n.qZA(),n.TgZ(31,"select",15),n.TgZ(32,"option",16),n._uU(33,"General"),n.qZA(),n.TgZ(34,"option",17),n._uU(35,"fs"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(36,"button",18),n._uU(37,"Save"),n.qZA(),n.TgZ(38,"button",19),n._uU(39,"Cancel "),n.qZA(),n.qZA(),n.qZA())}var m=function(){var Z=function(){function Z(a,e){i(this,Z),this.platformId=a,this.modalService=e,this.modalOpen=!1}return a(Z,[{key:"ngOnInit",value:function(){}},{key:"openModal",value:function(){var i=this;(0,l.NF)(this.platformId)&&this.modalService.open(this.EditBookmark,{size:"lg",ariaLabelledBy:"modal-bookmark",centered:!0,windowClass:"modal-bookmark"}).result.then(function(Z){i.modalOpen=!0},function(Z){i.closeResult="Dismissed ".concat(i.getDismissReason(Z))})}},{key:"getDismissReason",value:function(i){return i===d.If.ESC?"by pressing ESC":i===d.If.BACKDROP_CLICK?"by clicking on a backdrop":"with: ".concat(i)}},{key:"ngOnDestroy",value:function(){this.modalOpen&&this.modalService.dismissAll()}}]),Z}();return Z.\u0275fac=function(i){return new(i||Z)(n.Y36(n.Lbi),n.Y36(d.FF))},Z.\u0275cmp=n.Xpm({type:Z,selectors:[["app-edit-bookmark"]],viewQuery:function(i,Z){var a;(1&i&&n.Gf(u,5),2&i)&&(n.iGM(a=n.CRH())&&(Z.EditBookmark=a.first))},decls:2,vars:0,consts:[["editBookmark",""],[1,"modal-header"],[1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],["novalidate","",1,"form-bookmark","needs-validation"],[1,"form-row"],[1,"form-group","col-md-12"],["id","editurl","type","text","required","","autocomplete","off","value","http://admin.pixelstrap.com/Cuba/ltr/landing-page.html",1,"form-control"],["id","edittitle","type","text","required","","autocomplete","off","value","Admin Template",1,"form-control"],["id","editdesc","required","","autocomplete","off",1,"form-control"],[1,"form-group","col-md-6","mb-0"],[1,"js-example-basic-single"],["value","AL"],[1,"js-example-disabled-results"],["value","general"],["value","fs"],["type","button",1,"btn","btn-secondary"],["type","button","data-dismiss","modal",1,"btn","btn-primary"]],template:function(i,Z){1&i&&n.YNc(0,c,40,0,"ng-template",null,0,n.W1O)},directives:[s._Y,s.JL,s.F,s.YN,s.Kr],styles:[""]}),Z}(),p=["createTag"];function v(i,Z){1&i&&(n.TgZ(0,"div",1),n.TgZ(1,"h5",2),n._uU(2,"Create Tag"),n.qZA(),n.TgZ(3,"button",3),n.NdJ("click",function(){return Z.$implicit.dismiss("Cross click")}),n.TgZ(4,"span",4),n._uU(5,"\xd7"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(6,"div",5),n.TgZ(7,"form",6),n.TgZ(8,"div",7),n.TgZ(9,"div",8),n.TgZ(10,"label"),n._uU(11,"Tag Name"),n.qZA(),n._UZ(12,"input",9),n.qZA(),n.TgZ(13,"div",10),n.TgZ(14,"label"),n._uU(15,"Tag color"),n.qZA(),n._UZ(16,"input",11),n.qZA(),n.qZA(),n.TgZ(17,"button",12),n._uU(18,"Save"),n.qZA(),n.TgZ(19,"button",13),n._uU(20,"Cancel"),n.qZA(),n.qZA(),n.qZA())}var f,_,b=function(){var Z=function(){function Z(a,e){i(this,Z),this.platformId=a,this.modalService=e,this.modalOpen=!1}return a(Z,[{key:"ngOnInit",value:function(){}},{key:"openModal",value:function(){var i=this;(0,l.NF)(this.platformId)&&this.modalService.open(this.CreateTag,{size:"lg",ariaLabelledBy:"modal-bookmark",centered:!0,windowClass:"modal-bookmark"}).result.then(function(Z){i.modalOpen=!0},function(Z){i.closeResult="Dismissed ".concat(i.getDismissReason(Z))})}},{key:"getDismissReason",value:function(i){return i===d.If.ESC?"by pressing ESC":i===d.If.BACKDROP_CLICK?"by clicking on a backdrop":"with: ".concat(i)}},{key:"ngOnDestroy",value:function(){this.modalOpen&&this.modalService.dismissAll()}}]),Z}();return Z.\u0275fac=function(i){return new(i||Z)(n.Y36(n.Lbi),n.Y36(d.FF))},Z.\u0275cmp=n.Xpm({type:Z,selectors:[["app-create-tag"]],viewQuery:function(i,Z){var a;(1&i&&n.Gf(p,5),2&i)&&(n.iGM(a=n.CRH())&&(Z.CreateTag=a.first))},decls:2,vars:0,consts:[["createTag",""],[1,"modal-header"],[1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],["novalidate","",1,"form-bookmark","needs-validation"],[1,"form-row"],[1,"form-group","col-md-12"],["type","text","required","","autocomplete","off",1,"form-control"],[1,"form-group","col-md-12","mb-0"],["type","color","value","#563d7c",1,"form-control"],["type","button",1,"btn","btn-secondary","mr-1"],["type","button","data-dismiss","modal",1,"btn","btn-primary","mr-1"]],template:function(i,Z){1&i&&n.YNc(0,v,21,0,"ng-template",null,0,n.W1O)},directives:[s._Y,s.JL,s.F],styles:[""]}),Z}(),k=["addbookmark"],U=["editbookmark"],h=["createTag"],y=function(){return["Apps"]},w=[{path:"",children:[{path:"",component:(f=function(){function Z(){i(this,Z),this.listBookmark=!1}return a(Z,[{key:"ngOnInit",value:function(){}},{key:"changeLayoutBookmark",value:function(){this.listBookmark=!this.listBookmark}}]),Z}(),f.\u0275fac=function(i){return new(i||f)},f.\u0275cmp=n.Xpm({type:f,selectors:[["app-bookmarks"]],viewQuery:function(i,Z){var a;1&i&&(n.Gf(k,5),n.Gf(U,5),n.Gf(h,5)),2&i&&(n.iGM(a=n.CRH())&&(Z.AddBookmark=a.first),n.iGM(a=n.CRH())&&(Z.EditBookmark=a.first),n.iGM(a=n.CRH())&&(Z.CreateTag=a.first))},decls:664,vars:6,consts:[[3,"title","items","active_item"],[1,"container-fluid"],[1,"email-wrap","bookmark-wrap"],[1,"row"],[1,"col-xl-3","box-col-6"],[1,"email-left-aside"],[1,"card"],[1,"card-body"],[1,"email-app-sidebar","left-bookmark"],[1,"media"],[1,"media-size-email"],["src","assets/images/user/user.png","alt","",1,"mr-3","rounded-circle"],[1,"media-body"],[1,"f-w-600"],["role","tablist",1,"nav","main-menu"],[1,"nav-item"],["type","button",1,"badge-light-primary","btn-block","btn-mail",3,"click"],["data-feather","bookmark",1,"mr-2"],[1,"main-title"],["id","pills-created-tab","data-toggle","pill","href","javascript:void(0)","role","tab","aria-controls","pills-created","aria-selected","true"],[1,"title"],["id","pills-favourites-tab","data-toggle","pill","href","javascript:void(0)","role","tab","aria-controls","pills-favourites","aria-selected","false",1,"show"],["id","pills-shared-tab","data-toggle","pill","href","javascript:void(0)","role","tab","aria-controls","pills-shared","aria-selected","false",1,"show"],["id","pills-bookmark-tab","data-toggle","pill","href","javascript:void(0)","role","tab","aria-controls","pills-bookmark","aria-selected","false",1,"show"],[1,"pull-right"],["href","javascript:void(0)",3,"click"],["data-feather","plus-circle"],["id","pills-notification-tab","data-toggle","pill","href","javascript:void(0)","role","tab","aria-controls","pills-notification","aria-selected","false",1,"show"],["id","pills-newsletter-tab","data-toggle","pill","href","javascript:void(0)","role","tab","aria-controls","pills-newsletter","aria-selected","false",1,"show"],["id","pills-business-tab","data-toggle","pill","href","javascript:void(0)","role","tab","aria-controls","pills-business-tab","aria-selected","false",1,"show"],["id","pills-holidays-tab","data-toggle","pill","href","javascript:void(0)","role","tab","aria-controls","pills-holidays-tab","aria-selected","false",1,"show"],["id","pills-important-tab","data-toggle","pill","href","javascript:void(0)","role","tab","aria-controls","pills-important-tab","aria-selected","false",1,"show"],["id","pills-orgenization-tab","data-toggle","pill","href","javascript:void(0)","role","tab","aria-controls","pills-orgenization-tab","aria-selected","false",1,"show"],[1,"col-xl-9","col-md-12","box-col-12"],[1,"email-right-aside","bookmark-tabcontent"],[1,"card","email-body","radius-left"],[1,"pl-0"],[1,"tab-content"],["id","pills-created","role","tabpanel","aria-labelledby","pills-created-tab",1,"tab-pane","fade","active","show"],[1,"card","mb-0"],[1,"card-header","d-flex"],[1,"mb-0"],["href","javascript:void(0)",1,"grid-bookmark-view",3,"click"],["data-feather","grid"],["href","javascript:void(0)",1,"list-layout-view",3,"click"],["data-feather","list"],[1,"card-body","pb-0"],[1,"details-bookmark","text-center"],["id","bookmarkData",1,"row"],[1,"col-xl-3","col-md-4","xl-50"],[1,"card","card-with-border","bookmark-card","o-hidden"],[1,"details-website"],["src","assets/images/lightgallry/01.jpg","alt","",1,"img-fluid"],[1,"favourite-icon","favourite_0"],["href","javascript:void(0)"],[1,"fa","fa-star"],[1,"desciption-data"],[1,"title-bookmark"],[1,"title_0"],[1,"weburl_0"],[1,"hover-block"],["href","javascript:void(0)","data-toggle","modal",3,"click"],["data-feather","edit-2"],["data-feather","link"],["data-feather","share-2"],["data-feather","trash-2"],[1,"pull-right","text-right"],["data-feather","tag"],[1,"content-general"],[1,"desc_0"],[1,"collection_0"],["src","assets/images/lightgallry/02.jpg","alt","",1,"img-fluid"],[1,"favourite-icon","favourite_1"],[1,"title_1"],[1,"weburl_1"],[1,"desc_1"],[1,"collection_1"],["src","assets/images/lightgallry/03.jpg","alt","",1,"img-fluid"],[1,"favourite-icon","favourite_2"],[1,"title_2"],[1,"weburl_2"],[1,"desc_2"],[1,"collection_2"],["src","assets/images/lightgallry/04.jpg","alt","",1,"img-fluid"],[1,"favourite-icon","favourite_3"],[1,"title_3"],[1,"weburl_3"],[1,"desc_3"],[1,"collection_3"],["src","assets/images/lightgallry/05.jpg","alt","",1,"img-fluid"],[1,"favourite-icon","favourite_4"],[1,"title_4"],[1,"weburl_4"],[1,"desc_4"],[1,"collection_4"],["src","assets/images/lightgallry/06.jpg","alt","",1,"img-fluid"],[1,"favourite-icon","favourite_5"],[1,"title_5"],[1,"weburl_5"],[1,"desc_5"],[1,"collection_5"],["id","pills-favourites","role","tabpanel","aria-labelledby","pills-favourites-tab",1,"fade","tab-pane"],["href","javascript:void(0)",1,"grid-bookmark-view"],["href","javascript:void(0)",1,"list-layout-view"],["id","favouriteData",1,"row"],[1,"no-favourite"],["id","pills-shared","role","tabpanel","aria-labelledby","pills-shared-tab",1,"fade","tab-pane"],["id","pills-bookmark","role","tabpanel","aria-labelledby","pills-bookmark-tab",1,"fade","tab-pane"],["id","bookmarkData1",1,"row"],["src","assets/images/lightgallry/07.jpg","alt","",1,"img-fluid"],["id","pills-notification","role","tabpanel","aria-labelledby","pills-notification-tab",1,"fade","tab-pane"],["id","pills-newsletter","role","tabpanel","aria-labelledby","pills-newsletter-tab",1,"fade","tab-pane"],["id","pills-business","role","tabpanel","aria-labelledby","pills-business-tab",1,"fade","tab-pane"],["id","pills-holidays","role","tabpanel","aria-labelledby","pills-holidays-tab",1,"fade","tab-pane"],["id","pills-important","role","tabpanel","aria-labelledby","pills-important-tab",1,"fade","tab-pane"],["id","pills-orgenization","role","tabpanel","aria-labelledby","pills-orgenization-tab",1,"fade","tab-pane"],["addbookmark",""],["editbookmark",""],["createTag",""]],template:function(i,Z){if(1&i){n._UZ(0,"app-breadcrumb",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.TgZ(4,"div",4),n.TgZ(5,"div",5),n.TgZ(6,"div",6),n.TgZ(7,"div",7),n.TgZ(8,"div",8),n.TgZ(9,"div",9),n.TgZ(10,"div",10),n._UZ(11,"img",11),n.qZA(),n.TgZ(12,"div",12),n.TgZ(13,"h6",13),n._uU(14,"MARK JENCO"),n.qZA(),n.TgZ(15,"p"),n._uU(16,"Markjecno@gmail.com"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(17,"ul",14),n.TgZ(18,"li",15),n.TgZ(19,"button",16),n.NdJ("click",function(){return Z.AddBookmark.openModal()}),n._UZ(20,"i",17),n._uU(21," New Bookmark"),n.qZA(),n.qZA(),n.TgZ(22,"li",15),n.TgZ(23,"span",18),n._uU(24," Views"),n.qZA(),n.qZA(),n.TgZ(25,"li"),n.TgZ(26,"a",19),n.TgZ(27,"span",20),n._uU(28," Created by me"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(29,"li"),n.TgZ(30,"a",21),n.TgZ(31,"span",20),n._uU(32," Favourites"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(33,"li"),n.TgZ(34,"a",22),n.TgZ(35,"span",20),n._uU(36," Shared with me"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(37,"li"),n.TgZ(38,"a",23),n.TgZ(39,"span",20),n._uU(40," My bookmark"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(41,"li"),n._UZ(42,"hr"),n.qZA(),n.TgZ(43,"li"),n.TgZ(44,"span",18),n._uU(45," Tags"),n.TgZ(46,"span",24),n.TgZ(47,"a",25),n.NdJ("click",function(){return Z.CreateTag.openModal()}),n._UZ(48,"i",26),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(49,"li"),n.TgZ(50,"a",27),n.TgZ(51,"span",20),n._uU(52," notification"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(53,"li"),n.TgZ(54,"a",28),n.TgZ(55,"span",20),n._uU(56," Newsletter"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(57,"li"),n.TgZ(58,"a",29),n.TgZ(59,"span",20),n._uU(60," Business"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(61,"li"),n.TgZ(62,"a",30),n.TgZ(63,"span",20),n._uU(64," Holidays"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(65,"li"),n.TgZ(66,"a",31),n.TgZ(67,"span",20),n._uU(68," Important"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(69,"li"),n.TgZ(70,"a",32),n.TgZ(71,"span",20),n._uU(72," Orgenization"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(73,"div",33),n.TgZ(74,"div",34),n.TgZ(75,"div",35),n.TgZ(76,"div",36),n.TgZ(77,"div",37),n.TgZ(78,"div",38),n.TgZ(79,"div",39),n.TgZ(80,"div",40),n.TgZ(81,"h6",41),n._uU(82,"Created by me"),n.qZA(),n.TgZ(83,"ul"),n.TgZ(84,"li"),n.TgZ(85,"a",42),n.NdJ("click",function(){return Z.changeLayoutBookmark()}),n._UZ(86,"i",43),n.qZA(),n.qZA(),n.TgZ(87,"li"),n.TgZ(88,"a",44),n.NdJ("click",function(){return Z.changeLayoutBookmark()}),n._UZ(89,"i",45),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(90,"div",46),n.TgZ(91,"div",47),n.TgZ(92,"div",48),n.TgZ(93,"div",49),n.TgZ(94,"div",50),n.TgZ(95,"div",51),n._UZ(96,"img",52),n.TgZ(97,"div",53),n.TgZ(98,"a",54),n._UZ(99,"i",55),n.qZA(),n.qZA(),n.TgZ(100,"div",56),n.TgZ(101,"div",57),n.TgZ(102,"h6",58),n._uU(103,"Admin Template"),n.qZA(),n.TgZ(104,"p",59),n._uU(105,"http://admin.pixelstrap.com//ltr/landing-page.html"),n.qZA(),n.TgZ(106,"div",60),n.TgZ(107,"ul"),n.TgZ(108,"li"),n.TgZ(109,"a",61),n.NdJ("click",function(){return Z.EditBookmark.openModal()}),n._UZ(110,"i",62),n.qZA(),n.qZA(),n.TgZ(111,"li"),n.TgZ(112,"a",54),n._UZ(113,"i",63),n.qZA(),n.qZA(),n.TgZ(114,"li"),n.TgZ(115,"a",54),n._UZ(116,"i",64),n.qZA(),n.qZA(),n.TgZ(117,"li"),n.TgZ(118,"a",54),n._UZ(119,"i",65),n.qZA(),n.qZA(),n.TgZ(120,"li",66),n.TgZ(121,"a",54),n._UZ(122,"i",67),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(123,"div",68),n.TgZ(124,"p",69),n._uU(125," is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions."),n.qZA(),n.TgZ(126,"span",70),n._uU(127,"General"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(128,"div",49),n.TgZ(129,"div",50),n.TgZ(130,"div",51),n._UZ(131,"img",71),n.TgZ(132,"div",72),n.TgZ(133,"a",54),n._UZ(134,"i",55),n.qZA(),n.qZA(),n.TgZ(135,"div",56),n.TgZ(136,"div",57),n.TgZ(137,"h6",73),n._uU(138,"Universal Template"),n.qZA(),n.TgZ(139,"p",74),n._uU(140,"https://angular.pixelstrap.com/universal/landing"),n.qZA(),n.TgZ(141,"div",60),n.TgZ(142,"ul"),n.TgZ(143,"li"),n.TgZ(144,"a",61),n.NdJ("click",function(){return Z.EditBookmark.openModal()}),n._UZ(145,"i",62),n.qZA(),n.qZA(),n.TgZ(146,"li"),n.TgZ(147,"a",54),n._UZ(148,"i",63),n.qZA(),n.qZA(),n.TgZ(149,"li"),n.TgZ(150,"a",54),n._UZ(151,"i",64),n.qZA(),n.qZA(),n.TgZ(152,"li"),n.TgZ(153,"a",54),n._UZ(154,"i",65),n.qZA(),n.qZA(),n.TgZ(155,"li",66),n.TgZ(156,"a",54),n._UZ(157,"i",67),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(158,"div",68),n.TgZ(159,"p",75),n._uU(160,"Universal is beautifully crafted, clean and modern designed admin theme"),n.qZA(),n.TgZ(161,"span",76),n._uU(162,"General"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(163,"div",49),n.TgZ(164,"div",50),n.TgZ(165,"div",51),n._UZ(166,"img",77),n.TgZ(167,"div",78),n.TgZ(168,"a",54),n._UZ(169,"i",55),n.qZA(),n.qZA(),n.TgZ(170,"div",56),n.TgZ(171,"div",57),n.TgZ(172,"h6",79),n._uU(173,"Angular Theme"),n.qZA(),n.TgZ(174,"p",80),n._uU(175,"https://angular.pixelstrap.com/cuba/landing"),n.qZA(),n.TgZ(176,"div",60),n.TgZ(177,"ul"),n.TgZ(178,"li"),n.TgZ(179,"a",61),n.NdJ("click",function(){return Z.EditBookmark.openModal()}),n._UZ(180,"i",62),n.qZA(),n.qZA(),n.TgZ(181,"li"),n.TgZ(182,"a",54),n._UZ(183,"i",63),n.qZA(),n.qZA(),n.TgZ(184,"li"),n.TgZ(185,"a",54),n._UZ(186,"i",64),n.qZA(),n.qZA(),n.TgZ(187,"li"),n.TgZ(188,"a",54),n._UZ(189,"i",65),n.qZA(),n.qZA(),n.TgZ(190,"li",66),n.TgZ(191,"a",54),n._UZ(192,"i",67),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(193,"div",68),n.TgZ(194,"p",81),n._uU(195,"Cuba is beautifully crafted, clean and modern designed admin theme"),n.qZA(),n.TgZ(196,"span",82),n._uU(197,"Fs"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(198,"div",49),n.TgZ(199,"div",50),n.TgZ(200,"div",51),n._UZ(201,"img",83),n.TgZ(202,"div",84),n.TgZ(203,"a",54),n._UZ(204,"i",55),n.qZA(),n.qZA(),n.TgZ(205,"div",56),n.TgZ(206,"div",57),n.TgZ(207,"h6",85),n._uU(208,"Multikart Admin"),n.qZA(),n.TgZ(209,"p",86),n._uU(210,"http://themes.pixelstrap.com/multikart/back-end/index.html"),n.qZA(),n.TgZ(211,"div",60),n.TgZ(212,"ul"),n.TgZ(213,"li"),n.TgZ(214,"a",61),n.NdJ("click",function(){return Z.EditBookmark.openModal()}),n._UZ(215,"i",62),n.qZA(),n.qZA(),n.TgZ(216,"li"),n.TgZ(217,"a",54),n._UZ(218,"i",63),n.qZA(),n.qZA(),n.TgZ(219,"li"),n.TgZ(220,"a",54),n._UZ(221,"i",64),n.qZA(),n.qZA(),n.TgZ(222,"li"),n.TgZ(223,"a",54),n._UZ(224,"i",65),n.qZA(),n.qZA(),n.TgZ(225,"li",66),n.TgZ(226,"a",54),n._UZ(227,"i",67),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(228,"div",68),n.TgZ(229,"p",87),n._uU(230,"Multikart Admin is modern designed admin theme"),n.qZA(),n.TgZ(231,"span",88),n._uU(232,"General"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(233,"div",49),n.TgZ(234,"div",50),n.TgZ(235,"div",51),n._UZ(236,"img",89),n.TgZ(237,"div",90),n.TgZ(238,"a",54),n._UZ(239,"i",55),n.qZA(),n.qZA(),n.TgZ(240,"div",56),n.TgZ(241,"div",57),n.TgZ(242,"h6",91),n._uU(243,"Ecommerece theme"),n.qZA(),n.TgZ(244,"p",92),n._uU(245,"http://themes.pixelstrap.com/multikart"),n.qZA(),n.TgZ(246,"div",60),n.TgZ(247,"ul"),n.TgZ(248,"li"),n.TgZ(249,"a",61),n.NdJ("click",function(){return Z.EditBookmark.openModal()}),n._UZ(250,"i",62),n.qZA(),n.qZA(),n.TgZ(251,"li"),n.TgZ(252,"a",54),n._UZ(253,"i",63),n.qZA(),n.qZA(),n.TgZ(254,"li"),n.TgZ(255,"a",54),n._UZ(256,"i",64),n.qZA(),n.qZA(),n.TgZ(257,"li"),n.TgZ(258,"a",54),n._UZ(259,"i",65),n.qZA(),n.qZA(),n.TgZ(260,"li",66),n.TgZ(261,"a",54),n._UZ(262,"i",67),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(263,"div",68),n.TgZ(264,"p",93),n._uU(265,"Multikart HTML template is an apparently simple but highly functional tempalate designed for creating a flourisahing online business."),n.qZA(),n.TgZ(266,"span",94),n._uU(267,"General "),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(268,"div",49),n.TgZ(269,"div",50),n.TgZ(270,"div",51),n._UZ(271,"img",95),n.TgZ(272,"div",96),n.TgZ(273,"a",54),n._UZ(274,"i",55),n.qZA(),n.qZA(),n.TgZ(275,"div",56),n.TgZ(276,"div",57),n.TgZ(277,"h6",97),n._uU(278,"Tovo app landing page"),n.qZA(),n.TgZ(279,"p",98),n._uU(280,"http://vue.pixelstrap.com/tovo/home-one"),n.qZA(),n.TgZ(281,"div",60),n.TgZ(282,"ul"),n.TgZ(283,"li"),n.TgZ(284,"a",61),n.NdJ("click",function(){return Z.EditBookmark.openModal()}),n._UZ(285,"i",62),n.qZA(),n.qZA(),n.TgZ(286,"li"),n.TgZ(287,"a",54),n._UZ(288,"i",63),n.qZA(),n.qZA(),n.TgZ(289,"li"),n.TgZ(290,"a",54),n._UZ(291,"i",64),n.qZA(),n.qZA(),n.TgZ(292,"li"),n.TgZ(293,"a",54),n._UZ(294,"i",65),n.qZA(),n.qZA(),n.TgZ(295,"li",66),n.TgZ(296,"a",54),n._UZ(297,"i",67),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(298,"div",68),n.TgZ(299,"p",99),n._uU(300,"Amazing Landing Page With Easy Customization"),n.qZA(),n.TgZ(301,"span",100),n._uU(302,"Fs "),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(303,"div",101),n.TgZ(304,"div",39),n.TgZ(305,"div",40),n.TgZ(306,"h6",41),n._uU(307,"Favourites"),n.qZA(),n.TgZ(308,"ul"),n.TgZ(309,"li"),n.TgZ(310,"a",102),n._UZ(311,"i",43),n.qZA(),n.qZA(),n.TgZ(312,"li"),n.TgZ(313,"a",103),n._UZ(314,"i",45),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(315,"div",7),n.TgZ(316,"div",47),n._UZ(317,"div",104),n.TgZ(318,"div",105),n.TgZ(319,"span"),n._uU(320,"No Bookmarks Found."),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(321,"div",106),n.TgZ(322,"div",39),n.TgZ(323,"div",40),n.TgZ(324,"h6",41),n._uU(325,"Shared with me"),n.qZA(),n.TgZ(326,"ul"),n.TgZ(327,"li"),n.TgZ(328,"a",102),n._UZ(329,"i",43),n.qZA(),n.qZA(),n.TgZ(330,"li"),n.TgZ(331,"a",103),n._UZ(332,"i",45),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(333,"div",7),n.TgZ(334,"div",47),n.TgZ(335,"span"),n._uU(336,"No Bookmarks Found."),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(337,"div",107),n.TgZ(338,"div",39),n.TgZ(339,"div",40),n.TgZ(340,"h6",41),n._uU(341,"My bookmark"),n.qZA(),n.TgZ(342,"ul"),n.TgZ(343,"li"),n.TgZ(344,"a",102),n._UZ(345,"i",43),n.qZA(),n.qZA(),n.TgZ(346,"li"),n.TgZ(347,"a",103),n._UZ(348,"i",45),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(349,"div",7),n.TgZ(350,"div",47),n.TgZ(351,"div",108),n.TgZ(352,"div",49),n.TgZ(353,"div",50),n.TgZ(354,"div",51),n._UZ(355,"img",109),n.TgZ(356,"div",53),n.TgZ(357,"a",54),n._UZ(358,"i",55),n.qZA(),n.qZA(),n.TgZ(359,"div",56),n.TgZ(360,"div",57),n.TgZ(361,"h6",58),n._uU(362,"Admin Template"),n.qZA(),n.TgZ(363,"p",59),n._uU(364,"http://admin.pixelstrap.com/Cuba/ltr/landing-page.html"),n.qZA(),n.TgZ(365,"div",60),n.TgZ(366,"ul"),n.TgZ(367,"li"),n.TgZ(368,"a",61),n.NdJ("click",function(){return Z.EditBookmark.openModal()}),n._UZ(369,"i",62),n.qZA(),n.qZA(),n.TgZ(370,"li"),n.TgZ(371,"a",54),n._UZ(372,"i",63),n.qZA(),n.qZA(),n.TgZ(373,"li"),n.TgZ(374,"a",54),n._UZ(375,"i",64),n.qZA(),n.qZA(),n.TgZ(376,"li"),n.TgZ(377,"a",54),n._UZ(378,"i",65),n.qZA(),n.qZA(),n.TgZ(379,"li",66),n.TgZ(380,"a",54),n._UZ(381,"i",67),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(382,"div",68),n.TgZ(383,"p",69),n._uU(384,"Cuba is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions."),n.qZA(),n.TgZ(385,"span",70),n._uU(386,"General"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(387,"div",49),n.TgZ(388,"div",50),n.TgZ(389,"div",51),n._UZ(390,"img",109),n.TgZ(391,"div",72),n.TgZ(392,"a",54),n._UZ(393,"i",55),n.qZA(),n.qZA(),n.TgZ(394,"div",56),n.TgZ(395,"div",57),n.TgZ(396,"h6",73),n._uU(397,"Universal Template"),n.qZA(),n.TgZ(398,"p",74),n._uU(399,"https://angular.pixelstrap.com/universal/landing"),n.qZA(),n.TgZ(400,"div",60),n.TgZ(401,"ul"),n.TgZ(402,"li"),n.TgZ(403,"a",61),n.NdJ("click",function(){return Z.EditBookmark.openModal()}),n._UZ(404,"i",62),n.qZA(),n.qZA(),n.TgZ(405,"li"),n.TgZ(406,"a",54),n._UZ(407,"i",63),n.qZA(),n.qZA(),n.TgZ(408,"li"),n.TgZ(409,"a",54),n._UZ(410,"i",64),n.qZA(),n.qZA(),n.TgZ(411,"li"),n.TgZ(412,"a",54),n._UZ(413,"i",65),n.qZA(),n.qZA(),n.TgZ(414,"li",66),n.TgZ(415,"a",54),n._UZ(416,"i",67),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(417,"div",68),n.TgZ(418,"p",75),n._uU(419,"Universal is beautifully crafted, clean and modern designed admin theme"),n.qZA(),n.TgZ(420,"span",76),n._uU(421,"General"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(422,"div",49),n.TgZ(423,"div",50),n.TgZ(424,"div",51),n._UZ(425,"img",109),n.TgZ(426,"div",78),n.TgZ(427,"a",54),n._UZ(428,"i",55),n.qZA(),n.qZA(),n.TgZ(429,"div",56),n.TgZ(430,"div",57),n.TgZ(431,"h6",79),n._uU(432,"Angular Theme"),n.qZA(),n.TgZ(433,"p",80),n._uU(434,"https://angular.pixelstrap.com/cuba/landing"),n.qZA(),n.TgZ(435,"div",60),n.TgZ(436,"ul"),n.TgZ(437,"li"),n.TgZ(438,"a",61),n.NdJ("click",function(){return Z.EditBookmark.openModal()}),n._UZ(439,"i",62),n.qZA(),n.qZA(),n.TgZ(440,"li"),n.TgZ(441,"a",54),n._UZ(442,"i",63),n.qZA(),n.qZA(),n.TgZ(443,"li"),n.TgZ(444,"a",54),n._UZ(445,"i",64),n.qZA(),n.qZA(),n.TgZ(446,"li"),n.TgZ(447,"a",54),n._UZ(448,"i",65),n.qZA(),n.qZA(),n.TgZ(449,"li",66),n.TgZ(450,"a",54),n._UZ(451,"i",67),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(452,"div",68),n.TgZ(453,"p",81),n._uU(454,"Cuba is beautifully crafted, clean and modern designed admin theme"),n.qZA(),n.TgZ(455,"span",82),n._uU(456,"Fs"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(457,"div",49),n.TgZ(458,"div",50),n.TgZ(459,"div",51),n._UZ(460,"img",109),n.TgZ(461,"div",84),n.TgZ(462,"a",54),n._UZ(463,"i",55),n.qZA(),n.qZA(),n.TgZ(464,"div",56),n.TgZ(465,"div",57),n.TgZ(466,"h6",85),n._uU(467,"Multikart Admin"),n.qZA(),n.TgZ(468,"p",86),n._uU(469,"http://themes.pixelstrap.com/multikart/back-end/index.html"),n.qZA(),n.TgZ(470,"div",60),n.TgZ(471,"ul"),n.TgZ(472,"li");n.TgZ(473,"a",61),n.NdJ("click",function(){return Z.EditBookmark.openModal()}),n._UZ(474,"i",62),n.qZA(),n.qZA(),n.TgZ(475,"li"),n.TgZ(476,"a",54),n._UZ(477,"i",63),n.qZA(),n.qZA(),n.TgZ(478,"li"),n.TgZ(479,"a",54),n._UZ(480,"i",64),n.qZA(),n.qZA(),n.TgZ(481,"li"),n.TgZ(482,"a",54),n._UZ(483,"i",65),n.qZA(),n.qZA(),n.TgZ(484,"li",66),n.TgZ(485,"a",54),n._UZ(486,"i",67),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(487,"div",68),n.TgZ(488,"p",87),n._uU(489,"Multikart Admin is modern designed admin theme"),n.qZA(),n.TgZ(490,"span",88),n._uU(491,"General"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(492,"div",49),n.TgZ(493,"div",50),n.TgZ(494,"div",51),n._UZ(495,"img",109),n.TgZ(496,"div",90),n.TgZ(497,"a",54),n._UZ(498,"i",55),n.qZA(),n.qZA(),n.TgZ(499,"div",56),n.TgZ(500,"div",57),n.TgZ(501,"h6",91),n._uU(502,"Ecommerece theme"),n.qZA(),n.TgZ(503,"p",92),n._uU(504,"http://themes.pixelstrap.com/multikart"),n.qZA(),n.TgZ(505,"div",60),n.TgZ(506,"ul"),n.TgZ(507,"li"),n.TgZ(508,"a",61),n.NdJ("click",function(){return Z.EditBookmark.openModal()}),n._UZ(509,"i",62),n.qZA(),n.qZA(),n.TgZ(510,"li"),n.TgZ(511,"a",54),n._UZ(512,"i",63),n.qZA(),n.qZA(),n.TgZ(513,"li"),n.TgZ(514,"a",54),n._UZ(515,"i",64),n.qZA(),n.qZA(),n.TgZ(516,"li"),n.TgZ(517,"a",54),n._UZ(518,"i",65),n.qZA(),n.qZA(),n.TgZ(519,"li",66),n.TgZ(520,"a",54),n._UZ(521,"i",67),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(522,"div",68),n.TgZ(523,"p",93),n._uU(524,"Multikart HTML template is an apparently simple but highly functional tempalate designed for creating a flourisahing online business."),n.qZA(),n.TgZ(525,"span",94),n._uU(526,"General "),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(527,"div",49),n.TgZ(528,"div",50),n.TgZ(529,"div",51),n._UZ(530,"img",109),n.TgZ(531,"div",96),n.TgZ(532,"a",54),n._UZ(533,"i",55),n.qZA(),n.qZA(),n.TgZ(534,"div",56),n.TgZ(535,"div",57),n.TgZ(536,"h6",97),n._uU(537,"Tovo app landing page"),n.qZA(),n.TgZ(538,"p",98),n._uU(539,"http://vue.pixelstrap.com/tovo/home-one"),n.qZA(),n.TgZ(540,"div",60),n.TgZ(541,"ul"),n.TgZ(542,"li"),n.TgZ(543,"a",61),n.NdJ("click",function(){return Z.EditBookmark.openModal()}),n._UZ(544,"i",62),n.qZA(),n.qZA(),n.TgZ(545,"li"),n.TgZ(546,"a",54),n._UZ(547,"i",63),n.qZA(),n.qZA(),n.TgZ(548,"li"),n.TgZ(549,"a",54),n._UZ(550,"i",64),n.qZA(),n.qZA(),n.TgZ(551,"li"),n.TgZ(552,"a",54),n._UZ(553,"i",65),n.qZA(),n.qZA(),n.TgZ(554,"li",66),n.TgZ(555,"a",54),n._UZ(556,"i",67),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(557,"div",68),n.TgZ(558,"p",99),n._uU(559,"Amazing Landing Page With Easy Customization"),n.qZA(),n.TgZ(560,"span",100),n._uU(561,"Fs "),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(562,"div",110),n.TgZ(563,"div",39),n.TgZ(564,"div",40),n.TgZ(565,"h6",41),n._uU(566,"notification"),n.qZA(),n.TgZ(567,"ul"),n.TgZ(568,"li"),n.TgZ(569,"a",102),n._UZ(570,"i",43),n.qZA(),n.qZA(),n.TgZ(571,"li"),n.TgZ(572,"a",103),n._UZ(573,"i",45),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(574,"div",7),n.TgZ(575,"div",47),n.TgZ(576,"span"),n._uU(577,"No Bookmarks Found."),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(578,"div",111),n.TgZ(579,"div",39),n.TgZ(580,"div",40),n.TgZ(581,"h6",41),n._uU(582,"Newsletter"),n.qZA(),n.TgZ(583,"ul"),n.TgZ(584,"li"),n.TgZ(585,"a",102),n._UZ(586,"i",43),n.qZA(),n.qZA(),n.TgZ(587,"li"),n.TgZ(588,"a",103),n._UZ(589,"i",45),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(590,"div",7),n.TgZ(591,"div",47),n.TgZ(592,"span"),n._uU(593,"No Bookmarks Found."),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(594,"div",112),n.TgZ(595,"div",39),n.TgZ(596,"div",40),n.TgZ(597,"h6",41),n._uU(598,"Business"),n.qZA(),n.TgZ(599,"ul"),n.TgZ(600,"li"),n.TgZ(601,"a",102),n._UZ(602,"i",43),n.qZA(),n.qZA(),n.TgZ(603,"li"),n.TgZ(604,"a",103),n._UZ(605,"i",45),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(606,"div",7),n.TgZ(607,"div",47),n.TgZ(608,"span"),n._uU(609,"No Bookmarks Found."),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(610,"div",113),n.TgZ(611,"div",39),n.TgZ(612,"div",40),n.TgZ(613,"h6",41),n._uU(614,"Holidays"),n.qZA(),n.TgZ(615,"ul"),n.TgZ(616,"li"),n.TgZ(617,"a",102),n._UZ(618,"i",43),n.qZA(),n.qZA(),n.TgZ(619,"li"),n.TgZ(620,"a",103),n._UZ(621,"i",45),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(622,"div",7),n.TgZ(623,"div",47),n.TgZ(624,"span"),n._uU(625,"No Bookmarks Found."),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(626,"div",114),n.TgZ(627,"div",39),n.TgZ(628,"div",40),n.TgZ(629,"h6",41),n._uU(630,"Important"),n.qZA(),n.TgZ(631,"ul"),n.TgZ(632,"li"),n.TgZ(633,"a",102),n._UZ(634,"i",43),n.qZA(),n.qZA(),n.TgZ(635,"li"),n.TgZ(636,"a",103),n._UZ(637,"i",45),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(638,"div",7),n.TgZ(639,"div",47),n.TgZ(640,"span"),n._uU(641,"No Bookmarks Found."),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(642,"div",115),n.TgZ(643,"div",39),n.TgZ(644,"div",40),n.TgZ(645,"h6",41),n._uU(646,"Orgenization"),n.qZA(),n.TgZ(647,"ul"),n.TgZ(648,"li"),n.TgZ(649,"a",102),n._UZ(650,"i",43),n.qZA(),n.qZA(),n.TgZ(651,"li"),n.TgZ(652,"a",103),n._UZ(653,"i",45),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(654,"div",7),n.TgZ(655,"div",47),n.TgZ(656,"span"),n._uU(657,"No Bookmarks Found."),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n._UZ(658,"app-add-bookmark",null,116),n._UZ(660,"app-edit-bookmark",null,117),n._UZ(662,"app-create-tag",null,118)}2&i&&(n.Q6J("title","Bookmark")("items",n.DdM(5,y))("active_item","Bookmark"),n.xp6(91),n.ekj("list-bookmark",Z.listBookmark))},directives:[r.L,q,m,b],styles:[""]}),f)}]}],B=function(){var Z=function Z(){i(this,Z)};return Z.\u0275fac=function(i){return new(i||Z)},Z.\u0275mod=n.oAB({type:Z}),Z.\u0275inj=n.cJS({imports:[[g.Bz.forChild(w)],g.Bz]}),Z}(),C=((_=function Z(){i(this,Z)}).\u0275fac=function(i){return new(i||_)},_.\u0275mod=n.oAB({type:_}),_.\u0275inj=n.cJS({imports:[[l.ez,o.m,B]]}),_)},43675:function(Z,e,t){"use strict";t.d(e,{L:function(){return d}});var l=t(35366),o=t(68003),g=t(77818),n=t(61116);function r(i,Z){if(1&i&&(l.TgZ(0,"li",5),l._uU(1),l.qZA()),2&i){var a=Z.$implicit;l.xp6(1),l.Oqu(a)}}var d=function(){var Z=function(){function Z(){i(this,Z)}return a(Z,[{key:"ngOnInit",value:function(){}}]),Z}();return Z.\u0275fac=function(i){return new(i||Z)},Z.\u0275cmp=l.Xpm({type:Z,selectors:[["app-breadcrumb"]],inputs:{title:"title",items:"items",active_item:"active_item"},decls:14,vars:5,consts:[[1,"container-fluid"],[1,"page-title"],[1,"row"],[1,"col-6"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[3,"icon"],["class","breadcrumb-item",4,"ngFor","ngForOf"],[1,"breadcrumb-item","active"]],template:function(i,Z){1&i&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"div",2),l.TgZ(3,"div",3),l.TgZ(4,"h3"),l._uU(5),l.qZA(),l.qZA(),l.TgZ(6,"div",3),l.TgZ(7,"ol",4),l.TgZ(8,"li",5),l.TgZ(9,"a",6),l._UZ(10,"app-feather-icons",7),l.qZA(),l.qZA(),l.YNc(11,r,2,1,"li",8),l.TgZ(12,"li",9),l._uU(13),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&i&&(l.xp6(5),l.Oqu(Z.title),l.xp6(4),l.Q6J("routerLink","/dashboard/default"),l.xp6(1),l.Q6J("icon","home"),l.xp6(1),l.Q6J("ngForOf",Z.items),l.xp6(2),l.Oqu(Z.active_item))},directives:[o.yS,g.A,n.sg],styles:[""]}),Z}()}}])}();