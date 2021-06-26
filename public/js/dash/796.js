(self.webpackChunk=self.webpackChunk||[]).push([[796],{4796:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var i=r(629);const o={name:"DisplayMoviePoster",props:{movie:{type:Object,required:!0},width:{type:[Number,String],default:140},height:{type:[Number,String],default:200}}};var n=r(1900);const s={name:"DisplayMovieTeaser",components:{DisplayMoviePoster:(0,n.Z)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("figure",{staticClass:"movie-poster"},[r("div",{staticClass:"movie-poster-crop"},[r("img",{staticClass:"movie-poster-image",attrs:{alt:"Movie poster for "+e.movie.name+".",src:"/storage/"+e.movie.poster,width:e.width,height:e.height}})])])}),[],!1,null,null,null).exports},props:{interactive:{type:Boolean,default:!0},movie:{type:Object,required:!0},showTitles:{type:Boolean,default:!0}},computed:{movieTeaserClasses:function(){var e=["movie","movie-teaser"];return this.interactive&&e.push("interactive"),e.join(" ")}}};function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const c={name:"Screen404",components:{DisplayMovieTeaser:(0,n.Z)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.movieTeaserClasses},[r("display-movie-poster",{attrs:{movie:e.movie}}),e._v(" "),e.showTitles?[r("h4",{staticClass:"movie-title"},[e._v("\n\t\t\t"+e._s(e.movie.name)+"\n\t\t")]),e._v(" "),r("p",[r("strong",{staticClass:"movie-rating badge bg-light text-dark"},[e._v("\n\t\t\t\t"+e._s(e.movie.rating)+"\n\t\t\t")]),e._v(" "),r("var",{staticClass:"movie-duration"},[e._v("\n\t\t\t\t"+e._s(e.movie.duration)+" minutes\n\t\t\t")])])]:e._e()],2)}),[],!1,null,null,null).exports},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},(0,i.rn)("library",{movies:"nowPlaying"})),methods:{loadMovieDetails:function(e){this.$router.push("/movie/"+e.id)}}};const u=(0,n.Z)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-3 text-center"},[r("h1",{staticClass:"my-4"},[e._v("\n\t\tNot Found!\n\t")]),e._v(" "),r("p",[e._v("Sorry, could not find what you were looking for!")]),e._v(" "),r("p",[r("router-link",{attrs:{to:{path:"/"}}},[e._v("Back")])],1)])}),[],!1,null,null,null).exports}}]);