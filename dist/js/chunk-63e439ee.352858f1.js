(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63e439ee"],{"1dde":function(e,t,n){var r=n("d039"),a=n("b622"),s=n("2d00"),i=a("species");e.exports=function(e){return s>=51||!r((function(){var t=[],n=t.constructor={};return n[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"26a5":function(e){e.exports=JSON.parse('[{"id":"1","photo":"/Skokov/img/main/news/1news.jpg","title":"Why financial institutions need a new IT model","text":"Why old IT models are unlikely to deliver the competitive edge that banks, insurers and wealth management firms need from technology","date":"09.03.2014"},{"id":"2","photo":"/Skokov/img/main/news/2news.jpg","title":"Reimagining IT for an omnichannel world","text":"The technology that powers retail is evolving rapidly. Retailers and their IT groups will have to rise to stay ahead.","date":"08.20.2014"},{"id":"3","photo":"/Skokov/img/main/news/3news.jpg","title":"Making the most of generation assets in turbulent times","text":"A thorough review of a power generation portfolio informs decisions about how to reduce costs, raise revenues and make strategic plans.","date":"08.27.2014"},{"id":"4","photo":"/Skokov/img/main/news/4news.jpg","title":"How SaaS providers can use pricing to reach their goals","text":"The case for considering both customers\' needs and internal cost metrics.","date":"07.09.2014"},{"id":"5","photo":"/Skokov/img/main/news/5news.jpg","title":"Growing business opportunities for healthy living","text":"Consumers around the globe seek innovations for healthier lives.","date":"06.23.2014"},{"id":"6","photo":"/Skokov/img/main/news/6news.jpg","title":"Winning shoppers in the store","text":"With shoppers now making buying decisions in a few seconds, consumer goods companies need a fool-proof system for winning in stores.","date":"07.25.2014"}]')},"2c82":function(e,t,n){"use strict";n("3738")},3738:function(e,t,n){},"4de4":function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").filter,s=n("1dde"),i=n("ae40"),o=s("filter"),c=i("filter");r({target:"Array",proto:!0,forced:!o||!c},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},"59b2":function(e,t,n){},"65f0":function(e,t,n){var r=n("861d"),a=n("e8b5"),s=n("b622"),i=s("species");e.exports=function(e,t){var n;return a(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},a2f9:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=Object(r["G"])("data-v-0797f872");Object(r["t"])("data-v-0797f872");var s={class:"allNews__container"},i=Object(r["h"])("h1",{class:"allNews__title"},"News",-1),o={class:"allNews__content"},c=Object(r["h"])("div",{class:"allNews__searchContainer"},[Object(r["h"])("input",{type:"text",class:"allNews__searchInput"}),Object(r["h"])("button",{class:"allNews__searchBtn"})],-1),d={class:"allNews__cardsContainer"},l={class:"allNews__cardsContainer-center"},u={class:"allNews__cardsContainer-aside"};Object(r["r"])();var f=a((function(e,t,n,a,f,h){var w=Object(r["x"])("NewsCard");return Object(r["q"])(),Object(r["d"])("section",s,[i,Object(r["h"])("div",o,[c,Object(r["h"])("div",d,[Object(r["h"])("div",l,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(h.mainNews(),(function(e,t){return Object(r["q"])(),Object(r["d"])(w,{key:t,newsCardInfo:e,aside:!1},null,8,["newsCardInfo"])})),128))]),Object(r["h"])("div",u,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(h.asideNews(),(function(e,t){return Object(r["q"])(),Object(r["d"])(w,{key:t,newsCardInfo:e,aside:!0},null,8,["newsCardInfo"])})),128))])])]),Object(r["h"])("button",{onClick:t[1]||(t[1]=Object(r["F"])((function(){}),["prevent"])),class:"allNews__showMoreBtn"},"show more")])})),h=(n("4de4"),n("26a5")),w=n("b62c"),p={data:function(){return{allNews:[]}},mounted:function(){this.allNews=h},methods:{mainNews:function(){var e=this.allNews.filter((function(e){return e.id%3!==0}));return e},asideNews:function(){var e=this.allNews.filter((function(e){return e.id%3===0}));return e}},components:{NewsCard:w["a"]}};n("c427");p.render=f,p.__scopeId="data-v-0797f872";t["default"]=p},ae40:function(e,t,n){var r=n("83ab"),a=n("d039"),s=n("5135"),i=Object.defineProperty,o={},c=function(e){throw e};e.exports=function(e,t){if(s(o,e))return o[e];t||(t={});var n=[][e],d=!!s(t,"ACCESSORS")&&t.ACCESSORS,l=s(t,0)?t[0]:c,u=s(t,1)?t[1]:void 0;return o[e]=!!n&&!a((function(){if(d&&!r)return!0;var e={length:-1};d?i(e,1,{enumerable:!0,get:c}):e[1]=1,n.call(e,l,u)}))}},b62c:function(e,t,n){"use strict";var r=n("7a23"),a=Object(r["G"])("data-v-feb426e6");Object(r["t"])("data-v-feb426e6");var s={class:"section-card__infoContainer news-card__infoContainer"},i=Object(r["h"])("hr",null,null,-1),o={class:"section-card__text news-card__text"},c={class:"section-card__date news-card__date"};Object(r["r"])();var d=a((function(e,t,n,d,l,u){var f=Object(r["x"])("router-link");return Object(r["q"])(),Object(r["d"])("div",{class:["section__card news__card",u.calcNewsCardClass(this.newsCardInfo.id)],style:u.createStyle(this.newsCardInfo.id)},[Object(r["h"])("img",{src:n.newsCardInfo.photo,alt:"news photo",class:"section-card__photo news-card__photo"},null,8,["src"]),Object(r["h"])("div",s,[Object(r["h"])(f,{to:u.articlePath,class:"section-card__title news-card__title"},{default:a((function(){return[Object(r["g"])(Object(r["A"])(n.newsCardInfo.title),1)]})),_:1},8,["to"]),i,Object(r["h"])("p",o,Object(r["A"])(n.newsCardInfo.text),1),Object(r["h"])("p",c,Object(r["A"])(n.newsCardInfo.date),1)])],6)})),l={props:{newsCardInfo:{type:Object,required:!0},aside:{type:Boolean,required:!0}},computed:{articlePath:function(){return"/article/"+this.newsCardInfo.id}},methods:{calcNewsCardClass:function(e){var t="";return this.aside?t="news__card_aside":this.newsCardInfo.id%3===1?t="news__card_odd":this.newsCardInfo.id%3===2&&(t="news__card_even"),t},createStyle:function(e){var t={top:"0px"};if(e%3===0){var n=e/3-1;t.top=600*n+"px"}else t.top="0px";return t}}};n("2c82");l.render=d,l.__scopeId="data-v-feb426e6";t["a"]=l},b727:function(e,t,n){var r=n("0366"),a=n("44ad"),s=n("7b0b"),i=n("50c4"),o=n("65f0"),c=[].push,d=function(e){var t=1==e,n=2==e,d=3==e,l=4==e,u=6==e,f=5==e||u;return function(h,w,p,b){for(var v,_,j=s(h),O=a(j),m=r(w,p,3),g=i(O.length),C=0,y=b||o,N=t?y(h,g):n?y(h,0):void 0;g>C;C++)if((f||C in O)&&(v=O[C],_=m(v,C,j),e))if(t)N[C]=_;else if(_)switch(e){case 3:return!0;case 5:return v;case 6:return C;case 2:c.call(N,v)}else if(l)return!1;return u?-1:d||l?l:N}};e.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6)}},c427:function(e,t,n){"use strict";n("59b2")},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}}}]);
//# sourceMappingURL=chunk-63e439ee.352858f1.js.map
