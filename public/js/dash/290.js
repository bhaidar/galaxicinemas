(self.webpackChunk=self.webpackChunk||[]).push([[290],{6522:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});const r={name:"DisplayMoviePoster",props:{movie:{type:Object,required:!0},width:{type:[Number,String],default:140},height:{type:[Number,String],default:200}}}},7709:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});const r={name:"DisplayMovieTeaser",components:{DisplayMoviePoster:i(80).Z},props:{interactive:{type:Boolean,default:!0},movie:{type:Object,required:!0},showTitles:{type:Boolean,default:!0}},computed:{movieTeaserClasses:function(){var t=["movie","movie-teaser"];return this.interactive&&t.push("interactive"),t.join(" ")}}}},80:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});var r=i(5346),s=i(1176);const n=(0,i(1900).Z)(s.Z,r.s,r.x,!1,null,null,null).exports},3028:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});var r=i(4135),s=i(7254);const n=(0,i(1900).Z)(s.Z,r.s,r.x,!1,null,null,null).exports},4290:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var r=i(629);function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const a={name:"ScreenIndex",components:{DisplayMovieTeaser:i(3028).Z},computed:n(n(n({},(0,r.Se)("library",["getMovie"])),(0,r.rn)("library",["nowPlaying"])),{},{movies:function(){var t=this,e=[];return this.nowPlaying.forEach((function(i){e.push(t.getMovie(i))})),e}}),methods:n(n({},(0,r.nv)("library",["initNowPlaying"])),{},{loadMovieDetails:function(t){this.$router.push("/movie/"+t.id)}}),created:function(){this.nowPlaying.length||this.initNowPlaying()}};const l=(0,i(1900).Z)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[t.movies?i("ul",{staticClass:"list-group list-group-grid"},t._l(t.movies,(function(e){return i("li",{key:e.id,staticClass:"list-group-item list-group-item-link",on:{click:function(i){return t.loadMovieDetails(e)}}},[i("display-movie-teaser",{attrs:{movie:e,"show-titles":!1}})],1)})),0):i("div",[i("p",[t._v("Sorry there are no movies.")])])])}),[],!1,null,null,null).exports},1176:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});const r=i(6522).Z},7254:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});const r=i(7709).Z},5346:(t,e,i)=>{"use strict";i.d(e,{s:()=>r,x:()=>s});var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("figure",{staticClass:"movie-poster"},[i("img",{attrs:{alt:"Movie poster for "+t.movie.name+".",src:"/storage/"+t.movie.poster,width:t.width,height:t.height}})])},s=[]},4135:(t,e,i)=>{"use strict";i.d(e,{s:()=>r,x:()=>s});var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.movieTeaserClasses},[i("display-movie-poster",{attrs:{movie:t.movie}}),t._v(" "),t.showTitles?[i("h4",{staticClass:"movie-title"},[t._v("\n\t\t\t"+t._s(t.movie.name)+"\n\t\t")]),t._v(" "),i("p",[i("strong",{staticClass:"movie-rating badge bg-light text-dark"},[t._v("\n\t\t\t\t"+t._s(t.movie.rating)+"\n\t\t\t")]),t._v(" "),i("var",{staticClass:"movie-duration"},[t._v("\n\t\t\t\t"+t._s(t.movie.duration)+" minutes\n\t\t\t")])])]:t._e()],2)},s=[]}}]);