webpackJsonp([6],{"2PsU":function(t,e,n){"use strict";var a=n("7+uW");e.a=new a.a},DXmm:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("2PsU"),s={name:"m-header",props:{title:{type:String,default:"电影APP"},backshow:{type:Boolean,default:!1}},data:function(){return{searchShow:!1,searchText:""}},methods:{clearText:function(){i.a.$emit("setTitle","搜索"+this.searchText),this.searchShow=!1,this.searchText=""}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("header",[t.backshow?n("i",{staticClass:"iconfont icon-fanhui",on:{click:function(e){t.$router.back()}}}):t._e(),t._v("  "+t._s(t.title)+" "),n("i",{staticClass:"iconfont icon-sousuo",on:{click:function(e){t.searchShow=!t.searchShow}}})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.searchShow,expression:"searchShow"}],staticClass:"search-wrap"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"search-input",attrs:{type:"text",placeholder:"请输入"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),t._v(" "),n("div",{staticClass:"btn",on:{click:t.clearText}},[n("router-link",{attrs:{to:{name:"search",query:{q:t.searchText}}}},[t._v("搜索")])],1)])])},staticRenderFns:[]};var o={name:"mTabbar",methods:{setTitle:function(t){i.a.$emit("setTitle",t)}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabbar"},[n("div",{staticClass:"router-link-wrap",on:{click:function(e){t.setTitle("正在热映")}}},[n("router-link",{attrs:{to:"/hotlist"}},[n("i",{staticClass:"iconfont icon-bofang"}),t._v(" "),n("p",[t._v("正在热映")])])],1),t._v(" "),n("div",{staticClass:"router-link-wrap",on:{click:function(e){t.setTitle("排行榜")}}},[n("router-link",{attrs:{to:"/rank"}},[n("i",{staticClass:"iconfont icon-paixingbang"}),t._v(" "),n("p",[t._v("排行榜")])])],1)])},staticRenderFns:[]};var l={name:"App",components:{mHeader:n("VU/8")(s,r,!1,function(t){n("zQxV")},null,null).exports,mTabbar:n("VU/8")(o,c,!1,function(t){n("jS+s")},null,null).exports},data:function(){return{title:"正在热映",backshow:!1}},created:function(){var t=this;i.a.$on("setTitle",function(e){t.title=e}),i.a.$on("backshow",function(e){t.backshow=e})}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("m-header",{attrs:{title:this.title,backshow:this.backshow}}),this._v(" "),e("div",{staticClass:"router-view"},[e("router-view")],1),this._v(" "),e("m-tabbar")],1)},staticRenderFns:[]};var h=n("VU/8")(l,u,!1,function(t){n("NSg2")},null,null).exports,p=n("/ocq");a.a.use(p.a);var m=new p.a({routes:[{path:"/",redirect:"/hotlist"},{path:"/hotlist",name:"hotList",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"Ehgj"))}},{path:"/rank",name:"rank",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"Kjo5"))}},{path:"/movieDetail/:id",name:"movieDetail",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"NUxF"))}},{path:"/actor/:id",name:"actor",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"zjlf"))}},{path:"/search",name:"search",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"YOyO"))}}]});n("DXmm"),n("xsZ7");a.a.config.productionTip=!1,new a.a({el:"#app",router:m,components:{App:h},template:"<App/>",data:function(){return{backtitle:"",backName:""}}})},NSg2:function(t,e){},"jS+s":function(t,e){},xsZ7:function(t,e){},zQxV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.15928b51260da6086234.js.map