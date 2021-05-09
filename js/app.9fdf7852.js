(function(t){function e(e){for(var i,r,o=e[0],u=e[1],l=e[2],h=0,d=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);c&&c(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var u=n[o];0!==s[u]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={app:0},a=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"14f2":function(t,e,n){},"17ca":function(t,e,n){"use strict";n("d447")},"508f":function(t,e,n){"use strict";n("14f2")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Menu"),n("Canvas")],1)},a=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg bg-light shadow-sm",attrs:{id:"header"}},[n("div",{staticClass:"container-fluid"},[n("span",{staticClass:"navbar-brand mb-0 h1"},[t._v("L-System Laboratory")])])])}],u={name:"Header"},l=u,c=(n("a76b"),n("2877")),h=Object(c["a"])(l,r,o,!1,null,"9f60d25e",null),d=h.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu bg-light shadow"},[n("label",{staticClass:"form-label-sm small",attrs:{for:"axiom"}},[t._v("Axiom")]),n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.axiom,expression:"axiom"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"axiom"},domProps:{value:t.axiom},on:{input:function(e){e.target.composing||(t.axiom=e.target.value)}}})]),n("label",{staticClass:"form-label-sm small",attrs:{for:"rule"}},[t._v("Rules")]),n("div",{staticClass:"row m-0"},[n("div",{staticClass:"col-2 p-0"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.ruleKey,expression:"ruleKey"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"ruleKey"},domProps:{value:t.ruleKey},on:{input:function(e){e.target.composing||(t.ruleKey=e.target.value)}}})]),n("div",{staticClass:"col-1 p-0"}),n("div",{staticClass:"col-9 p-0"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.rule,expression:"rule"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"rule"},domProps:{value:t.rule},on:{input:function(e){e.target.composing||(t.rule=e.target.value)}}})])]),n("label",{staticClass:"form-label-sm small",attrs:{for:"angle"}},[t._v("Angle")]),n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.angle,expression:"angle"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"angle"},domProps:{value:t.angle},on:{input:function(e){e.target.composing||(t.angle=e.target.value)}}})]),n("label",{staticClass:"form-label-sm small",attrs:{for:"axiom"}},[t._v("Line")]),n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.line,expression:"line"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"line"},domProps:{value:t.line},on:{input:function(e){e.target.composing||(t.line=e.target.value)}}})]),n("label",{staticClass:"form-label-sm small",attrs:{for:"axiom"}},[t._v("Iterations")]),n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.iterations,expression:"iterations"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"iterations"},domProps:{value:t.iterations},on:{input:function(e){e.target.composing||(t.iterations=e.target.value)}}})]),n("div",{staticClass:"row justify-content-evenly mt-3"},[n("button",{staticClass:"btn btn-outline-primary btn-sm col-3",on:{click:function(e){return t.draw()}}},[t._v("Draw")]),n("button",{staticClass:"btn btn-outline-secondary btn-sm col-3",on:{click:function(e){return t.reset()}}},[t._v("Reset")]),n("button",{staticClass:"btn btn-outline-danger btn-sm col-3",on:{click:function(e){return t.clear()}}},[t._v("Clear")])])])},v=[],m=n("ade3"),g=n("b85c"),p=n("d4ec"),b=n("bee2"),y=function(){function t(){Object(p["a"])(this,t)}return Object(b["a"])(t,[{key:"computeSystem",value:function(t,e,n){for(var i=t,s=0;s<n;s++)i=this.rewrite(i,e);return i}},{key:"rewrite",value:function(t,e){var n,i="",s=Object(g["a"])(t);try{for(s.s();!(n=s.n()).done;){var a=n.value;i+=e[a]?e[a]:a}}catch(r){s.e(r)}finally{s.f()}return i}}]),t}(),w={name:"Menu",data:function(){return{axiom:"",ruleKey:"",rule:"",angle:90,line:20,iterations:1,LSystem:new y}},methods:{fd:function(){this.turtle.fd(this.distance)},lt:function(){this.turtle.lt(this.angle)},rt:function(){this.turtle.rt(this.angle)},reset:function(){this.turtle.reset()},clear:function(){this.turtle.canvas.clear()},draw:function(){var t=this.LSystem.computeSystem(this.axiom,this.rules,this.iterations);this.turtle.draw(t,this.line,this.angle)}},computed:{turtle:function(){return this.$store.state.turtle},rules:function(){return Object(m["a"])({},this.ruleKey,this.rule)}}},x=w,C=(n("17ca"),Object(c["a"])(x,f,v,!1,null,"4e4f3b9a",null)),k=C.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"canvas-container"},[i("div",{ref:"canvas",attrs:{id:"canvas"}},[i("canvas",{ref:"turtleCanvas",attrs:{id:"turtleCanvas"}}),i("img",{ref:"turtleImage",staticClass:"turtle",style:t.showTurtle,attrs:{src:n("c5d4"),draggable:"false"},on:{mousedown:function(e){return t.drag(e)}}})])])},P=[],A=function(){function t(e,n,i){Object(p["a"])(this,t),this.parent=i,this.canvas=e,this.context=e.getContext("2d"),this.canvas.width=e.offsetWidth*n,this.canvas.height=e.offsetHeight*n,this.context.scale(n,n)}return Object(b["a"])(t,[{key:"line",value:function(t,e,n,i){this.context.moveTo(t,e),this.context.lineTo(n,i)}},{key:"color",value:function(t){this.context.fillStyle=t,this.context.fillRect(0,0,this.width(),this.height())}},{key:"width",value:function(){return this.parent.offsetWidth-2}},{key:"height",value:function(){return this.parent.offsetHeight-2}},{key:"clear",value:function(){this.context.clearRect(0,0,this.canvas.clientWidth,this.canvas.clientHeight)}},{key:"penSize",get:function(){return this.context.lineWidth},set:function(t){this.context.lineWidth=t}}]),t}(),I=function(){function t(e){Object(p["a"])(this,t),this.canvas=e,this.width=1,this.reset(),this.pen=!0,this.visible=!0,this.color={r:0,g:0,b:0,a:1}}return Object(b["a"])(t,[{key:"X",set:function(t){this.x=this.alignCoordinate(t)}},{key:"Y",set:function(t){this.y=this.alignCoordinate(t)}},{key:"alignCoordinate",value:function(t){return t%1==0&&this.width%2==1?t-=.5:t%1==.5&&this.width%2==0&&(t+=.5),t}},{key:"fd",value:function(t){this.canvas.context.beginPath();var e=Math.cos(this.heading*Math.PI/180),n=Math.sin(this.heading*Math.PI/180),i=this.x+e*t,s=this.y-n*t;this.canvas.line(this.x,this.y,i,s),this.goTo(i,s),this.canvas.context.stroke()}},{key:"lt",value:function(t){t%=360,this.heading+=t,this.heading>=360&&(this.heading=this.heading%360)}},{key:"rt",value:function(t){t%=360,this.heading-=t,this.heading<0&&(this.heading=360+this.heading)}},{key:"penUp",value:function(){this.pen=!1}},{key:"penDown",value:function(){this.pen=!0}},{key:"goTo",value:function(t,e){this.checkPosition(t,e),this.X=t,this.Y=e}},{key:"penSize",value:function(t){this.width=t,this.canvas.penSize(t)}},{key:"seth",value:function(t){this.heading=t}},{key:"reset",value:function(){this.goTo(this.canvas.width()/2,this.canvas.height()/2),this.seth(90)}},{key:"checkPosition",value:function(t,e){t<0||e<0||t>this.canvas.width()||e>this.canvas.height()?this.visible=!1:this.visible=!0}},{key:"draw",value:function(t,e,n){var i,s=[],a=Object(g["a"])(t);try{for(a.s();!(i=a.n()).done;){var r=i.value;switch(r){case"F":this.fd(e);break;case"+":this.lt(n);break;case"-":this.rt(n);break;case"[":s.push({x:this.x,y:this.y,h:this.heading});break;case"]":var o=s.pop();this.goTo(o.x,o.y),this.seth(o.h);break}}}catch(u){a.e(u)}finally{a.f()}}}]),t}(),S={name:"Canvas",data:function(){return{turtleImage:{width:0,height:0,turtleX:0,turtleY:0,dragX:0,dragY:0},dragging:!1}},methods:{storeCanvas:function(){this.$store.commit("setCanvas",{canvas:new A(this.$refs.turtleCanvas,window.devicePixelRatio,this.$refs.canvas)})},storeTurtle:function(){this.$store.commit("setTurtle",{turtle:new I(this.canvas)})},setTurtleSize:function(){this.$refs.turtleImage.style.display="unset",this.turtleImage.width=this.$refs.turtleImage.offsetWidth,this.turtleImage.height=this.$refs.turtleImage.offsetHeight},setCanvasSize:function(){this.$refs.turtleCanvas.style.width=window.screen.width+"px",this.$refs.turtleCanvas.style.height=window.screen.height+"px"},onResize:function(){this.turtle.checkPosition(this.turtle.x,this.turtle.y)},drag:function(t){this.dragging=!0,this.$refs.turtleImage.style.cursor="grabbing",window.addEventListener("mousemove",this.moveTurtle),window.addEventListener("mouseup",this.drop),this.turtleImage.dragX=t.x,this.turtleImage.dragY=t.y,this.turtleImage.turtleX=this.turtle.x,this.turtleImage.turtleY=this.turtle.y},moveTurtle:function(t){if(this.dragging){var e=this.turtleImage.turtleX+(t.x-this.turtleImage.dragX);e=e>0?e:0,e=e<this.canvas.width()?e:this.canvas.width();var n=this.turtleImage.turtleY+(t.y-this.turtleImage.dragY);n=n>0?n:0,n=n<this.canvas.height()?n:this.canvas.height(),this.turtle.X=e,this.turtle.Y=n}},drop:function(){this.dragging=!1,this.$refs.turtleImage.style.cursor="grab",window.removeEventListener("mousemove",this.moveTurtle),window.removeEventListener("mouseup",this.drop)}},computed:{canvas:function(){return this.$store.state.canvas},turtle:function(){return this.$store.state.turtle},showTurtle:function(){return this.turtle&&this.turtle.visible?{left:this.turtle.x-this.turtleImage.width/2+21+"px",top:this.turtle.y-this.turtleImage.height+21+"px",transform:"rotate("+(90-this.turtle.heading)+"deg)","transform-origin":"50% 100%"}:{display:"none"}}},created:function(){window.addEventListener("resize",this.onResize)},destroyed:function(){window.removeEventListener("resize",this.onResize)},mounted:function(){this.setCanvasSize(),this.setTurtleSize(),this.storeCanvas(),this.storeTurtle()}},T=S,X=(n("508f"),Object(c["a"])(T,j,P,!1,null,"3eb39180",null)),O=X.exports,E={name:"App",components:{Canvas:O,Header:d,Menu:k}},H=E,M=(n("034f"),Object(c["a"])(H,s,a,!1,null,null,null)),z=M.exports,V=n("2f62");i["a"].use(V["a"]);var Q=new V["a"].Store({state:function(){return{canvas:void 0,turtle:void 0}},mutations:{setCanvas:function(t,e){t.canvas=e.canvas},setTurtle:function(t,e){t.turtle=e.turtle}}});i["a"].config.productionTip=!1,new i["a"]({store:Q,render:function(t){return t(z)}}).$mount("#app")},"85ec":function(t,e,n){},"8ab1":function(t,e,n){},a76b:function(t,e,n){"use strict";n("8ab1")},c5d4:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAACRCAYAAADuBrfcAAAE4ElEQVR4Xu3b0XbjOghGYef9H3pmtaudSVo7FggQoH1uj4QcvvzYbjuPY8///jx97MduLdjuAx/H8Qz+7b1VH7b6sF/CoG822s7At0v7bkkH/TgO0P+Pum16sc0HvXiA+3l326IfW3zINw9woDd+qHt3L98Ofpekg77ZT6Mk4Fu8vu2QdNB/3MBAP3+Qad2X1h9u8DXt6vm1bW/afjDBaxrojV7bNPfyLV7fOicd9IsEd0W3AG/7+gb6/f2sXY/afSCDB7j29/WO6JajveWIB/1+vH+saNWnVh9m8ocxd/xtetXmgzjcy9ve2zuhe9zLW8KDfjfUX/9/i361+BABo73VU3wX9IjR3gYedNl4b/H61gE9MuUt0g66POnl014dfUXKy6cddF3SS6cddND1HViwc+VoLz3iKycddGXSqqJnAC+bdtCVaXnaVq6H5S7Y+Xfm2q9AqT6WutjAX6xI8Uv1sdTFgi79Lp6vr4ae6QGu7B9YgG4TnlI/oauEnjnlpV7fQLdLepm0V0GvkPIyaQfdNukl0g466PYdMKhYabSXGPEVkg66QXKeS2RHrwiePu2gG6eowm/fMqNXTnnqtIPul/S0r2+gg+7bAUH1DqM97YjPmnTQBQmRLs2I3gk8ZdpBl8ZEtz5Vn1NdTNI/etQx/96VptdpLuSrRx1He7oRD7pVju/rpOl1mgtpPtpTpR30+4RarkjR7xQXsUnK06QddMscj9Va3vPlF7BZylOkHfSxdFqvWtr3pYdv8G5+9WVZ2velh2862pePeNCtB/d4vWW9X3bw5ilfmnbQx5PpsXJJ/5ccSspfvj/hBuEHbvzEnuZJHnSPoS2rGW4QfiCj/fQbEeoQehij/XIEhDqEHkbK3879MIuwg0j57Y0+zCLsIFJ+i/6xIMQj5BBSPgQO+nCbei0MCWHIIYx20TfT3cT9AEa7CDxkxEegd/4HDGLRwQ2uLq7FSfkg8e9lri6uxbmXq9FdxzzoUy6um91s3Aoz2qe/EG42boUZ7dPobiMedBMbtyIuPi5FSbnpl8DcyLwg93JTcJcR74HOD2PM3W1/+wa6PZBHRVMn02KMdg/vz5qmTqbFeIBzQzeFB93VybS4mZVZIVJuCnxVzMTLpAj38hBwsxFvhc5rWpj7/EMd6HFYVidNm00XYLRbWQ7XmTabLsAD3DCW5cIpt6nNpNzSUVRrym1qMykXQVkvVtupN5Jya0NxPbWdeiMpFyN5bFD5qTaRcg8/VU2Vn2oT6Cogj00qP9UmRruHn7qm2FC8gZSrcbw2ig3FG0i5l91UXZGjaDEpn4Lx3CxyFC0m5Z5u07WHLYcXkvJpFO8Cw5bDC0H3NpuuP2w5vJDRPo0SUWDIc2gRKY/wMjljyHNoESk3AYkqcmt6u4CUR1mZnXNreruAlJthRBZ66wp6JEXcWaDH9TrNSVPo/D17GkfxhVzC34130MW9TrNBhQ54Gj/1hZzCv0s66Opep9koQgc8jdv0hfyCv0o66NO9TlMA9DQUcRcyhE7K40CiTnqBPxvvoEdRxJ3zFh3wOIjok/7B/0w66NEUceedogMeB7DqpE/456SDvooi7lzQ43qd5qQXdFKexsX9Qh7f4x10916nOeATHfA0HjEXAnpMn1OdAnoqjpiL4Z4e0+dMpzz+Al8ekY/XJyE5AAAAAElFTkSuQmCC"},d447:function(t,e,n){}});
//# sourceMappingURL=app.9fdf7852.js.map