webpackJsonp([2],{Eh7u:function(t,i){},NUxF:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("2PsU"),a=e("NVrd"),o=e("gyMJ"),n=e("qqiS"),v={name:"movieDetail",components:{mStar:a.a,mLoading:n.a},data:function(){return{completed:!1,movieInfo:null}},computed:{getDirectors:function(){for(var t=[],i=0,e=this.movieInfo.directors.length;i<e;i++)t.push(this.movieInfo.directors[i].name);return t.join("/")}},methods:{setHeader:function(t){s.a.$emit("setTitle",t),this.$root.backTitle=this.movieInfo.title}},beforeRouteLeave:function(t,i,e){"hotList"===t.name?(s.a.$emit("setTitle","正在热映"),s.a.$emit("backshow",!1)):"rank"===t.name?(s.a.$emit("setTitle","排行榜"),s.a.$emit("backshow",!1)):"actor"===t.name?s.a.$emit("setTitle",this.$root.backName):"search"===t.name&&(s.a.$emit("setTitle","搜索"),s.a.$emit("backshow",!1)),e()},created:function(){var t=this;o.a.getMovieItem(this.$route.params.id).then(function(i){t.movieInfo=i.data,t.completed=!0}).catch(function(t){console.log(t)})}},r={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("m-loading",{attrs:{end:t.completed}}),t._v(" "),t.movieInfo?e("div",[e("div",{staticClass:"m-top-poster"},[e("div",{staticClass:"cover"},[e("img",{attrs:{src:t.movieInfo.images.small,alt:""}})])]),t._v(" "),e("div",{staticClass:"movie-info-wrap fixed"},[e("div",{staticClass:"movie-info-l"},[e("div",{staticClass:"title"},[t._v(t._s(t.movieInfo.title))]),t._v(" "),e("div",{staticClass:"movie-info-item"},[t._v("\n\t\t\t\t\t\t"+t._s(t.movieInfo.year)+"/"+t._s(t.movieInfo.countries.join("/"))+"\n\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"movie-info-item"},[t._v("\n\t\t\t\t\t\t"+t._s(t.movieInfo.genres.join("/"))+"\n\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"movie-info-item"},[t._v("原名："+t._s(t.movieInfo.original_title))]),t._v(" "),e("div",{staticClass:"movie-info-item"},[t._v("导演："+t._s(t.getDirectors))])]),t._v(" "),e("div",{staticClass:"movie-info-r"},[e("div",{staticClass:"movie-score-wrap"},[e("div",{staticClass:"score"},[t._v("\n\t\t\t\t\t\t\t评分："),e("span",[t._v(" "+t._s(t.movieInfo.rating.average)+" ")])]),t._v(" "),e("m-star",{attrs:{size:"36",score:t.movieInfo.rating.average}}),t._v(" "),e("div",{staticClass:"person-num"},[t._v(t._s(t.movieInfo.ratings_count)+"人")])],1)])]),t._v(" "),e("div",{staticClass:"movie-btn-wrap fixed"},[e("div",{staticClass:"btn"},[t._v("想看（"+t._s(t.movieInfo.wish_count)+"）")]),t._v(" "),e("div",{staticClass:"btn"},[t._v("看过（"+t._s(t.movieInfo.collect_count)+"）")])]),t._v(" "),e("div",{staticClass:"movie-summary"},[e("div",{staticClass:"title"},[t._v("剧情简介：")]),t._v(" "),e("div",{staticClass:"main"},[t._v("\n\t\t\t\t\t"+t._s(t.movieInfo.summary)+"\n\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"article-wrap"},t._l(t.movieInfo.casts,function(i,s){return e("div",{key:s,staticClass:"article",on:{click:function(e){t.setHeader(i.name)}}},[e("router-link",{attrs:{to:{name:"actor",params:{id:i.id}}}},[e("div",{staticClass:"article-head"},[e("img",{attrs:{src:i.avatars.small,alt:""}})]),t._v(" "),e("p",[t._v(t._s(i.name))])])],1)}))]):t._e()],1)},staticRenderFns:[]};var c=e("VU/8")(v,r,!1,function(t){e("Eh7u")},null,null);i.default=c.exports}});
//# sourceMappingURL=2.37fec386386069a5a21b.js.map