(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{280:function(e,t,n){var content=n(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("b5607fc6",content,!0,{sourceMap:!1})},281:function(e,t,n){var content=n(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("049b6ad1",content,!0,{sourceMap:!1})},286:function(e,t,n){"use strict";n(280)},287:function(e,t,n){var r=n(59)(!1);r.push([e.i,'a,div,p{font-family:"inter",sans-serif;font-size:1.5rem}h6{font-size:1.4rem;font-family:"dosis",sans-serif}@media screen and (max-width:920px){h6{font-size:.6rem;font-family:"dosis",sans-serif}}h5{font-size:2.8rem;font-family:"dosis",sans-serif}@media screen and (max-width:920px){h5{font-size:1.2rem;font-family:"dosis",sans-serif}}h4{font-size:4.2rem;font-family:"dosis",sans-serif}@media screen and (max-width:920px){h4{font-size:1.8rem;font-family:"dosis",sans-serif}}h3{font-size:5.6rem;font-family:"dosis",sans-serif}@media screen and (max-width:920px){h3{font-size:2.4rem;font-family:"dosis",sans-serif}}h2{font-size:7rem;font-family:"dosis",sans-serif}@media screen and (max-width:920px){h2{font-size:3rem;font-family:"dosis",sans-serif}}h1{font-size:8.4rem;font-family:"dosis",sans-serif}@media screen and (max-width:920px){h1{font-size:3.6rem;font-family:"dosis",sans-serif}}sub,sup{font-size:4rem}li{list-style:none}.content>.page1,.content>.page2,.content>.page3,.content>.page4{height:100vh;scroll-snap-align:center;display:flex}',""]),e.exports=r},288:function(e,t,n){"use strict";n(281)},289:function(e,t,n){var r=n(59)(!1);r.push([e.i,".page1[data-v-0cbb3211]{flex-direction:column;background-image:linear-gradient(90deg,rgba(2,0,36,0) 46%,rgba(52,0,113,.15))}.page1__atouts[data-v-0cbb3211]{padding-left:10vh;height:100%;display:flex;flex-direction:column}.page1__atouts li[data-v-0cbb3211]{margin:auto 0;padding:1rem;width:100%;transition:.3s;border:2px solid #fff;border-right:none;border-top-left-radius:5px;border-bottom-left-radius:5px;cursor:help;box-shadow:0 0 0 #000}.page1__atouts li[data-v-0cbb3211]:hover{background:#fff;color:#000;transition:.3s;box-shadow:0 12px 24px rgba(170,170,255,.2),0 -12px 24px rgba(170,170,255,.2),0 0 24px hsla(0,0%,100%,.1333333333)}@media screen and (max-width:920px){.page1__atouts[data-v-0cbb3211]{padding-left:0}.page1__atouts li[data-v-0cbb3211]{background:rgba(0,0,0,.6274509804);width:calc(100% - 1rem)}}.page2[data-v-0cbb3211]{flex-direction:column;background-image:linear-gradient(90deg,rgba(2,0,36,0) 46%,rgba(52,0,113,.15))}.page2__cards[data-v-0cbb3211]{max-height:-webkit-min-content;max-height:-moz-min-content;max-height:min-content;width:100%;display:flex;flex-direction:row;padding:1rem;flex-wrap:nowrap;position:relative}@media screen and (max-height:800px){.page2__cards[data-v-0cbb3211]{padding:0;overflow-y:auto}}@media screen and (max-height:800px)and (orientation:portrait){.page2__cards[data-v-0cbb3211]{flex-direction:column}}.card[data-v-0cbb3211]{margin:2px .5rem;padding:2rem;width:15%;background-color:hsla(0,0%,100%,.3137254902);border-radius:1rem;display:flex;flex-direction:column}.card__image[data-v-0cbb3211]{width:100%}@media screen and (max-height:800px)and (orientation:portrait){.card[data-v-0cbb3211]{flex-direction:row;width:100%;padding:.5rem}.card__image[data-v-0cbb3211]{margin:.5rem;width:100px}}@media screen and (max-height:800px)and (orientation:landscape){.card[data-v-0cbb3211]{padding:.5rem;width:25%}.card__content[data-v-0cbb3211]{display:none;background:rgba(0,0,0,.1333333333);z-index:10;transition:background .53s;left:0;top:0}.card:hover .card__content[data-v-0cbb3211]{position:absolute;display:block;background:#123123}}",""]),e.exports=r},293:function(e,t,n){"use strict";n.r(t);var r={layout:"cube",computed:{phone:function(){return this.$breakpoints.sSm},page2__cubes:function(){var e="/cube/rendu/presentation/".concat(this.phone?"400_":"");return[{id:"1",title:"cube rouge",color:"red",namefile:"".concat(e,"red.png"),price:"2€99"},{id:"2",title:"cube transparent",color:"transparent",namefile:"".concat(e,"transparent.png"),price:"5€99"},{id:"3",title:"cube vert",color:"green",namefile:"".concat(e,"green.png"),price:"2€99"},{id:"4",title:"cube bleu",color:"blue",namefile:"".concat(e,"blue.png"),price:"2€49"}]}}},o=(n(286),n(288),n(25)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content"},[e._m(0),t("div",{staticClass:"page2"},[t("h2",{staticClass:"page2__title"},[e._v("Des couleurs !")]),t("div",{staticClass:"page2__cards"},e._l(e.page2__cubes,(function(n){return t("div",{key:n.id,staticClass:"card",class:n.color},[t("img",{staticClass:"card__image",attrs:{src:n.namefile,width:"30px",alt:"un cube ".concat(n.color," de toute beauté")}}),t("div",{staticClass:"card__content"},[t("div",{staticClass:"card__title"},[e._v(e._s(n.title))]),t("div",{staticClass:"card__desc"},[e._v("un cube de couleur "+e._s(n.color)+" !")]),t("div",{staticClass:"card__price"},[e._v(e._s(n.price))])])])})),0)]),t("div",{staticClass:"page3"}),t("div",{staticClass:"page4"})])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"page1"},[t("h1",{staticClass:"page1__title"},[e._v("The Cube"),t("sup",[e._v("®")]),e._v("!")]),t("ul",{staticClass:"page1__atouts"},[t("li",[e._v("pratique pour être poser chez vous")]),t("li",[e._v("sobre pour passer partout")]),t("li",[e._v("ne se salit jamais, "),t("i",[e._v("indégradable")]),e._v(" !!")])])])}],!1,null,"0cbb3211",null);t.default=component.exports}}]);