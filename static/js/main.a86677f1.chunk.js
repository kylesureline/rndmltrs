(this.webpackJsonprndmltrs=this.webpackJsonprndmltrs||[]).push([[0],[,,function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return i}));var a=function(e){return{type:"ADD_WORD",word:e}},r=function(){return{type:"CLEAR_WORDS"}},c=function(e){return{type:"CHANGE_FONTS",font:e}},o=function(){return{type:"TOGGLE_UPPERCASE"}},u=function(){return{type:"GENERATE"}},i=function(e){return{type:"SET_FONT_SIZE",fontSize:e}}},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var a=n(1),r=n(3),c=function(e,t,n){return Object(r.a)(Array(6)).map((function(a,c){return Object(r.a)(Array(6)).map((function(a,r){var c=t[Math.floor(Math.random()*t.length)];n&&(c=Math.random()>.5?"".concat(c.slice(0,1).toUpperCase()).concat(c.slice(1)):c);var o=e[Math.floor(Math.random()*e.length)];return{value:c,className:"font-".concat(o)}}))}))},o="abcdefghijklmnopqrstuvwxyz".split(""),u=[1,2,3,4],i={values:o,allowUppercase:!0,fonts:u,table:c(u,o,!0),fontSize:32},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_WORD":return Object(a.a)({},e,{values:[].concat(Object(r.a)(e.values),Object(r.a)(t.word.split(" "))).filter((function(e){return""!==e.replace(" ","")}))});case"CLEAR_WORDS":return Object(a.a)({},e,{values:[]});case"CHANGE_FONTS":return Object(a.a)({},e,{fonts:e.fonts.includes(t.font)?e.fonts.filter((function(e){return e!==t.font})):[].concat(Object(r.a)(e.fonts),[t.font])});case"TOGGLE_UPPERCASE":return Object(a.a)({},e,{allowUppercase:!e.allowUppercase});case"GENERATE":return Object(a.a)({},e,{table:c(e.fonts,e.values,e.allowUppercase)});case"SET_FONT_SIZE":return Object(a.a)({},e,{fontSize:t.fontSize});case"MAKE_FONT_SMALLER":return Object(a.a)({},e,{fontSize:e.fontSize-1>=12?e.fontSize-1:e.fontSize});case"MAKE_FONT_LARGER":return Object(a.a)({},e,{fontSize:e.fontSize+1<=72?e.fontSize+1:e.fontSize});default:return e}}},,,function(e,t,n){"use strict";(function(e){var a=n(4),r=n(0),c=n.n(r),o=n(5),u=n(9),i=n(10),l=n(2);t.a=function(){var t=Object(r.useReducer)(o.b,o.a),n=Object(a.a)(t,2),s=n[0],f=n[1];return c.a.createElement("div",null,c.a.createElement(u.a,{state:s,dispatch:f}),c.a.createElement("button",{onClick:function(e){f(Object(l.d)())},disabled:!s.values.length},"Generate"),c.a.createElement("button",{onClick:function(){return e.print()}},"Print"),c.a.createElement(i.a,{table:s.table,fontSize:s.fontSize}))}}).call(this,n(16))},function(e,t,n){"use strict";var a=n(4),r=n(0),c=n.n(r),o=n(2);t.a=function(e){var t=e.state,n=e.dispatch,u=Object(r.useState)(""),i=Object(a.a)(u,2),l=i[0],s=i[1],f=t.values,p=t.fonts,m=t.allowUppercase,E=t.fontSize;return c.a.createElement("div",{className:"form"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n(Object(o.a)(l)),s("")}},c.a.createElement("input",{type:"text",value:l,onChange:function(e){var t=e.target.value;s(t)}})),!!f.length&&c.a.createElement("div",null,c.a.createElement("span",null,f.join(", "),c.a.createElement("button",{onClick:function(e){n(Object(o.c)())}},"Clear"))),c.a.createElement("div",null,["Kalam","Marck Script","Source Sans Pro","Playfair Display"].map((function(e,t){return c.a.createElement("span",{key:t,className:"font-".concat(t+1)},c.a.createElement("input",{type:"checkbox",checked:p.includes(t+1),onChange:function(){return e=t+1,void n(Object(o.b)(e));var e}}),e)}))),c.a.createElement("div",null,c.a.createElement("span",null,c.a.createElement("input",{type:"checkbox",checked:m,onChange:function(e){n(Object(o.f)())}}),"Allow uppercase")),c.a.createElement("div",null,c.a.createElement("input",{type:"range",value:E,min:24,max:128,onChange:function(e){var t=e.target.value;n(Object(o.e)(t))}})))}},function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.table,n=e.fontSize;return r.a.createElement("div",{className:"table",style:{fontSize:"".concat(n,"px")}},t.map((function(e){return e.map((function(e,t){return r.a.createElement("div",{key:t,className:e.className},e.value)}))})))}},function(e,t,n){e.exports=n(19)},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),u=n(8);n(17),n(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(u.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.a86677f1.chunk.js.map