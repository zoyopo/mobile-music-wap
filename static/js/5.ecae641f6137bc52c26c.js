webpackJsonp([5],{"2Kvo":function(e,t,n){"use strict";function a(e){n("KB7h")}var i=(Array,Boolean,{name:"list",props:{list:{type:Array,default:function(){return[]}},showPic:{type:Boolean,default:!1}},methods:{selectItem:function(e,t){this.$emit("select",e,t)}}}),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list"},e._l(e.list,function(t,a){return n("div",{key:t.id,staticClass:"list-item",on:{click:function(n){return e.selectItem(a,t)}}},[n("div",{staticClass:"item-num"},[e._v(e._s(a+1))]),e._v(" "),e.showPic?n("div",{staticClass:"item-img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.al.pciUrl,expression:"item.al.pciUrl"}],staticClass:"item-img-img",attrs:{alt:""}})]):e._e(),e._v(" "),n("div",{staticClass:"item-content"},[n("div",{staticClass:"item-content-name"},[e._v(e._s(t.name)+"\n        "),e._t("default",null,{item:t})],2),e._v(" "),n("div",{staticClass:"item-content-artist"},[e._v(e._s(t.singer))])]),e._v(" "),n("div",{staticClass:"item-option"},[e._t("default"),e._v(" "),n("i",{staticClass:"fa fa-play-circle-o",staticStyle:{"font-size":"1.5rem",color:"rgba(197, 199, 17, 0.44)"}})],2)])}),0)},o=[],r={render:s,staticRenderFns:o},A=r,l=n("VU/8"),d=a,c=l(i,A,!1,d,"data-v-70ab975a",null);t.a=c.exports},JPgw:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"\n.song-sheet[data-v-23836f6a] {\n  height: 100%;\n}\n.song-sheet .vis-wrapper[data-v-23836f6a] {\n  height: 100%;\n}\n.song-sheet .header[data-v-23836f6a] {\n  background: #ddd;\n  color: #fff;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.song-sheet .header .header-arrow[data-v-23836f6a] {\n  -webkit-align-self: flex-end;\n          align-self: flex-end;\n  -webkit-box-flex: 0.2;\n  -webkit-flex: 0.2;\n          flex: 0.2;\n}\n.song-sheet .header .header-arrow #header-arrow-arrow[data-v-23836f6a] {\n  width: 60%;\n}\n.song-sheet .header .header-title[data-v-23836f6a] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-flex: 0.7;\n  -webkit-flex: 0.7;\n          flex: 0.7;\n  width: 50%;\n}\n.song-sheet .header .header-title .header-title-title[data-v-23836f6a] {\n  font-size: 1.2rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n.song-sheet .header .header-title .header-title-description[data-v-23836f6a] {\n  font-size: 0.5rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n.song-sheet .header .header-search[data-v-23836f6a] {\n  -webkit-box-flex: 0.2;\n  -webkit-flex: 0.2;\n          flex: 0.2;\n  -webkit-align-self: center;\n          align-self: center;\n}\n.song-sheet .header .header-search #header-search-icon[data-v-23836f6a] {\n  width: 45%;\n}\n.song-sheet .header .header-share[data-v-23836f6a] {\n  -webkit-box-flex: 0.2;\n  -webkit-flex: 0.2;\n          flex: 0.2;\n  -webkit-align-self: center;\n          align-self: center;\n}\n.song-sheet .header .header-share #header-share-icon[data-v-23836f6a] {\n  width: 50%;\n}\n.song-sheet main[data-v-23836f6a] {\n  background: #ddd;\n  height: calc(100%);\n  overflow: auto;\n}\n.song-sheet main .main-top[data-v-23836f6a] {\n  padding-left: 1rem;\n  padding-top: 0.5rem;\n  overflow: hidden;\n  padding-bottom: 1rem;\n}\n.song-sheet main .main-top .main-top-image[data-v-23836f6a] {\n  float: left;\n  width: 35%;\n}\n.song-sheet main .main-top .main-top-right[data-v-23836f6a] {\n  overflow: hidden;\n  padding-left: 0.5rem;\n}\n.song-sheet main .main-top .main-top-right .main-top-title[data-v-23836f6a] {\n  height: 60px;\n  width: 92%;\n}\n.song-sheet main .main-top .main-top-right .main-top-author[data-v-23836f6a] {\n  font-size: 0.5rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.song-sheet main .main-top .main-top-right .main-top-author .avatar-div[data-v-23836f6a] {\n  width: 10%;\n  margin-right: 0.5rem;\n}\n.song-sheet main .main-top .main-top-right .main-top-author .avatar-div #ct-avatar[data-v-23836f6a] {\n  width: 100%;\n  display: block;\n  border-radius: 50%;\n}\n.song-sheet main .main-top .main-top-right .main-top-author .ct-nickname[data-v-23836f6a] {\n  -webkit-align-self: flex-end;\n          align-self: flex-end;\n}\n.song-sheet main .main-options[data-v-23836f6a] {\n  font-size: 0;\n  color: #fff;\n}\n.song-sheet main .main-options .main-options-icon[data-v-23836f6a] {\n  width: 25%;\n  font-size: 24px;\n  display: inline-block;\n  text-align: center;\n}\n","",{version:3,sources:["D:/workSpace/mobile-music/src/components/SongSheet.vue"],names:[],mappings:";AACA;EACE,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,iBAAiB;EACjB,YAAY;EACZ,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;CACf;AACD;EACE,6BAA6B;UACrB,qBAAqB;EAC7B,sBAAsB;EACtB,kBAAkB;UACV,UAAU;CACnB;AACD;EACE,WAAW;CACZ;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;UACvB,uBAAuB;EAC/B,yBAAyB;EACzB,gCAAgC;UACxB,wBAAwB;EAChC,sBAAsB;EACtB,kBAAkB;UACV,UAAU;EAClB,WAAW;CACZ;AACD;EACE,kBAAkB;EAClB,iBAAiB;EACjB,oBAAoB;EACpB,wBAAwB;EACxB,YAAY;CACb;AACD;EACE,kBAAkB;EAClB,iBAAiB;EACjB,oBAAoB;EACpB,wBAAwB;EACxB,YAAY;CACb;AACD;EACE,sBAAsB;EACtB,kBAAkB;UACV,UAAU;EAClB,2BAA2B;UACnB,mBAAmB;CAC5B;AACD;EACE,WAAW;CACZ;AACD;EACE,sBAAsB;EACtB,kBAAkB;UACV,UAAU;EAClB,2BAA2B;UACnB,mBAAmB;CAC5B;AACD;EACE,WAAW;CACZ;AACD;EACE,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,oBAAoB;EACpB,iBAAiB;EACjB,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,WAAW;CACZ;AACD;EACE,iBAAiB;EACjB,qBAAqB;CACtB;AACD;EACE,aAAa;EACb,WAAW;CACZ;AACD;EACE,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;CACf;AACD;EACE,WAAW;EACX,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,eAAe;EACf,mBAAmB;CACpB;AACD;EACE,6BAA6B;UACrB,qBAAqB;CAC9B;AACD;EACE,aAAa;EACb,YAAY;CACb;AACD;EACE,WAAW;EACX,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;CACpB",file:"SongSheet.vue",sourcesContent:["\n.song-sheet[data-v-23836f6a] {\n  height: 100%;\n}\n.song-sheet .vis-wrapper[data-v-23836f6a] {\n  height: 100%;\n}\n.song-sheet .header[data-v-23836f6a] {\n  background: #ddd;\n  color: #fff;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.song-sheet .header .header-arrow[data-v-23836f6a] {\n  -webkit-align-self: flex-end;\n          align-self: flex-end;\n  -webkit-box-flex: 0.2;\n  -webkit-flex: 0.2;\n          flex: 0.2;\n}\n.song-sheet .header .header-arrow #header-arrow-arrow[data-v-23836f6a] {\n  width: 60%;\n}\n.song-sheet .header .header-title[data-v-23836f6a] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-flex: 0.7;\n  -webkit-flex: 0.7;\n          flex: 0.7;\n  width: 50%;\n}\n.song-sheet .header .header-title .header-title-title[data-v-23836f6a] {\n  font-size: 1.2rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n.song-sheet .header .header-title .header-title-description[data-v-23836f6a] {\n  font-size: 0.5rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n.song-sheet .header .header-search[data-v-23836f6a] {\n  -webkit-box-flex: 0.2;\n  -webkit-flex: 0.2;\n          flex: 0.2;\n  -webkit-align-self: center;\n          align-self: center;\n}\n.song-sheet .header .header-search #header-search-icon[data-v-23836f6a] {\n  width: 45%;\n}\n.song-sheet .header .header-share[data-v-23836f6a] {\n  -webkit-box-flex: 0.2;\n  -webkit-flex: 0.2;\n          flex: 0.2;\n  -webkit-align-self: center;\n          align-self: center;\n}\n.song-sheet .header .header-share #header-share-icon[data-v-23836f6a] {\n  width: 50%;\n}\n.song-sheet main[data-v-23836f6a] {\n  background: #ddd;\n  height: calc(100%);\n  overflow: auto;\n}\n.song-sheet main .main-top[data-v-23836f6a] {\n  padding-left: 1rem;\n  padding-top: 0.5rem;\n  overflow: hidden;\n  padding-bottom: 1rem;\n}\n.song-sheet main .main-top .main-top-image[data-v-23836f6a] {\n  float: left;\n  width: 35%;\n}\n.song-sheet main .main-top .main-top-right[data-v-23836f6a] {\n  overflow: hidden;\n  padding-left: 0.5rem;\n}\n.song-sheet main .main-top .main-top-right .main-top-title[data-v-23836f6a] {\n  height: 60px;\n  width: 92%;\n}\n.song-sheet main .main-top .main-top-right .main-top-author[data-v-23836f6a] {\n  font-size: 0.5rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.song-sheet main .main-top .main-top-right .main-top-author .avatar-div[data-v-23836f6a] {\n  width: 10%;\n  margin-right: 0.5rem;\n}\n.song-sheet main .main-top .main-top-right .main-top-author .avatar-div #ct-avatar[data-v-23836f6a] {\n  width: 100%;\n  display: block;\n  border-radius: 50%;\n}\n.song-sheet main .main-top .main-top-right .main-top-author .ct-nickname[data-v-23836f6a] {\n  -webkit-align-self: flex-end;\n          align-self: flex-end;\n}\n.song-sheet main .main-options[data-v-23836f6a] {\n  font-size: 0;\n  color: #fff;\n}\n.song-sheet main .main-options .main-options-icon[data-v-23836f6a] {\n  width: 25%;\n  font-size: 24px;\n  display: inline-block;\n  text-align: center;\n}\n"],sourceRoot:""}])},KB7h:function(e,t,n){var a=n("he+G");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("12f9f9c2",a,!0,{})},"he+G":function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"\n.list[data-v-70ab975a] {\n  background: #fff;\n  border-radius: 15px;\n  padding-top: 10px;\n}\n.list .list-item[data-v-70ab975a] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  padding-bottom: 0.5rem;\n  border-bottom: solid 1px #ddd;\n  padding-top: 0.5rem;\n}\n.list .list-item .item-num[data-v-70ab975a] {\n  -webkit-align-self: center;\n          align-self: center;\n  width: 3%;\n  padding-left: 0.5rem;\n  padding-right: 1.5rem;\n}\n.list .list-item .item-img[data-v-70ab975a] {\n  width: 10%;\n  -webkit-align-self: center;\n          align-self: center;\n  padding-right: 0.5rem;\n}\n.list .list-item .item-img .item-img-img[data-v-70ab975a] {\n  width: 100%;\n  display: block;\n}\n.list .list-item .item-content[data-v-70ab975a] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 0.9;\n  -webkit-flex: 0.9;\n          flex: 0.9;\n  width: 65%;\n}\n.list .list-item .item-content .item-content-name[data-v-70ab975a] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 95%;\n  overflow: hidden;\n}\n.list .list-item .item-content .item-content-artist[data-v-70ab975a] {\n  font-size: 0.5rem;\n}\n.list .list-item .item-option[data-v-70ab975a] {\n  -webkit-align-self: center;\n          align-self: center;\n}\n","",{version:3,sources:["D:/workSpace/mobile-music/src/base/List.vue"],names:[],mappings:";AACA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,uBAAuB;EACvB,8BAA8B;EAC9B,oBAAoB;CACrB;AACD;EACE,2BAA2B;UACnB,mBAAmB;EAC3B,UAAU;EACV,qBAAqB;EACrB,sBAAsB;CACvB;AACD;EACE,WAAW;EACX,2BAA2B;UACnB,mBAAmB;EAC3B,sBAAsB;CACvB;AACD;EACE,YAAY;EACZ,eAAe;CAChB;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;UACvB,uBAAuB;EAC/B,sBAAsB;EACtB,kBAAkB;UACV,UAAU;EAClB,WAAW;CACZ;AACD;EACE,oBAAoB;EACpB,wBAAwB;EACxB,WAAW;EACX,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,2BAA2B;UACnB,mBAAmB;CAC5B",file:"List.vue",sourcesContent:["\n.list[data-v-70ab975a] {\n  background: #fff;\n  border-radius: 15px;\n  padding-top: 10px;\n}\n.list .list-item[data-v-70ab975a] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  padding-bottom: 0.5rem;\n  border-bottom: solid 1px #ddd;\n  padding-top: 0.5rem;\n}\n.list .list-item .item-num[data-v-70ab975a] {\n  -webkit-align-self: center;\n          align-self: center;\n  width: 3%;\n  padding-left: 0.5rem;\n  padding-right: 1.5rem;\n}\n.list .list-item .item-img[data-v-70ab975a] {\n  width: 10%;\n  -webkit-align-self: center;\n          align-self: center;\n  padding-right: 0.5rem;\n}\n.list .list-item .item-img .item-img-img[data-v-70ab975a] {\n  width: 100%;\n  display: block;\n}\n.list .list-item .item-content[data-v-70ab975a] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 0.9;\n  -webkit-flex: 0.9;\n          flex: 0.9;\n  width: 65%;\n}\n.list .list-item .item-content .item-content-name[data-v-70ab975a] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 95%;\n  overflow: hidden;\n}\n.list .list-item .item-content .item-content-artist[data-v-70ab975a] {\n  font-size: 0.5rem;\n}\n.list .list-item .item-option[data-v-70ab975a] {\n  -webkit-align-self: center;\n          align-self: center;\n}\n"],sourceRoot:""}])},"lkX/":function(e,t,n){var a=n("JPgw");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("1360f7e9",a,!0,{})},zJ98:function(e,t,n){"use strict";function a(e){return C.get(h.songsheet.sheetdetail,{params:{id:e}}).then(function(e){return e&&200===e.data.code?f.a.resolve(e.data.playlist):f.a.reject(new Error("获取数据出错"))})}function i(e){n("lkX/")}Object.defineProperty(t,"__esModule",{value:!0});var s=n("Xxa5"),o=n.n(s),r=n("exGp"),A=n.n(r),l=n("Dd8w"),d=n.n(l),c=(n("GQaK"),n("//Fk")),f=n.n(c),m=n("Dod7"),h=n("a6lS"),C=m.a.axios(),B=n("2Kvo"),p=n("K2IZ"),g=n("r8sI"),v=n("W/cN"),w=(v.a,B.a,p.a,d()({selectItem:function(e,t){this.selectSong({list:this.songList,song:t,index:e})},scorll:function(){this.$refs.wrapper&&this.$refs.wrapper.scrollTop>50?this.title=this.info.name:this.title="歌单"},getDetail:function(e){var t=this;return A()(o.a.mark(function n(){var i,s;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a(e);case 2:i=n.sent,console.log("result",i),s={coverImgUrl:i.coverImgUrl,name:i.name,createTime:i.createTime,trackCount:i.trackCount,playCount:i.playCount,description:i.description,tags:i.tags,creator:{avatarUrl:i.creator.avatarUrl||"",nickname:i.creator.nickname}},t.info=s,i.tracks.forEach(function(e){e.singer=e.ar.map(function(e){return e.name}).join("/")}),t.songList=i.tracks,console.log("data.tracks",i.tracks);case 9:case"end":return n.stop()}},n,t)}))()},back:function(){this.$router.go(-1)}},Object(g.mapMutations)({setPlayList:"SET_PLAY_LIST"}),Object(g.mapActions)({selectSong:"SELECT_SONG"})),{mixins:[v.a],components:{List:B.a,Skeleton:p.a},name:"SongSheet",data:function(){return{title:"歌单",info:{creator:{}},songList:[]}},created:function(){this.transformDelta=49},mounted:function(){window.addEventListener("touchmove",this.scorll)},activated:function(){var e=this.$route.params.id;this.getDetail(e)},computed:{},watch:{},methods:d()({selectItem:function(e,t){this.selectSong({list:this.songList,song:t,index:e})},scorll:function(){this.$refs.wrapper&&this.$refs.wrapper.scrollTop>50?this.title=this.info.name:this.title="歌单"},getDetail:function(e){var t=this;return A()(o.a.mark(function n(){var i,s;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a(e);case 2:i=n.sent,console.log("result",i),s={coverImgUrl:i.coverImgUrl,name:i.name,createTime:i.createTime,trackCount:i.trackCount,playCount:i.playCount,description:i.description,tags:i.tags,creator:{avatarUrl:i.creator.avatarUrl||"",nickname:i.creator.nickname}},t.info=s,i.tracks.forEach(function(e){e.singer=e.ar.map(function(e){return e.name}).join("/")}),t.songList=i.tracks,console.log("data.tracks",i.tracks);case 9:case"end":return n.stop()}},n,t)}))()},back:function(){this.$router.go(-1)}},Object(g.mapMutations)({setPlayList:"SET_PLAY_LIST"}),Object(g.mapActions)({selectSong:"SELECT_SONG"}))}),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"song-sheet"},[a("Skeleton",{directives:[{name:"show",rawName:"v-show",value:e.skeletonShow,expression:"skeletonShow"}],attrs:{itemShow:!1}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.skeletonShow,expression:"!skeletonShow"}],staticClass:"vis-wrapper"},[a("div",{staticClass:"header"},[a("div",{staticClass:"header-arrow"},[a("img",{attrs:{id:"header-arrow-arrow",src:n("kgKP"),alt:"暂无"},on:{click:e.back}})]),e._v(" "),a("div",{staticClass:"header-title"},[a("div",{staticClass:"header-title-title"},[e._v(e._s(e.title))]),e._v(" "),a("div",{staticClass:"header-title-description"},[e._v(e._s(e.info.description))])])]),e._v(" "),a("main",{ref:"wrapper"},[a("div",{ref:"container",staticClass:"wrapper-container"},[a("div",{staticClass:"main-top"},[a("img",{staticClass:"main-top-image",attrs:{src:e.info.coverImgUrl,alt:""}}),e._v(" "),a("div",{staticClass:"main-top-right"},[a("div",{staticClass:"main-top-title"},[e._v(e._s(e.info.name))]),e._v(" "),a("div",{staticClass:"main-top-author"},[a("div",{staticClass:"avatar-div"},[a("img",{attrs:{id:"ct-avatar",src:e.info.creator.avatarUrl}})]),e._v(" "),a("div",{staticClass:"ct-nickname"},[e._v(e._s(e.info.creator.nickname))])])])]),e._v(" "),a("div",{staticClass:"main-list"},[a("List",{attrs:{list:e.songList},on:{select:e.selectItem}})],1)])])])],1)},E=[],k={render:b,staticRenderFns:E},u=k,x=n("VU/8"),y=i,_=x(w,u,!1,y,"data-v-23836f6a",null);t.default=_.exports}});
//# sourceMappingURL=5.ecae641f6137bc52c26c.js.map