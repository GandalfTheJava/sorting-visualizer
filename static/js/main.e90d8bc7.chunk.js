(this.webpackJsonpthis=this.webpackJsonpthis||[]).push([[0],{37:function(e,t,n){e.exports=n(54)},42:function(e,t,n){},43:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(15),i=n.n(o),u=(n(42),n(43),n(11)),l=n(16),c=n(17),s=n(20),d=n(18),E=n(21),h=(n(48),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){e!==this.props&&this.render()}},{key:"render",value:function(){var e=this.props,t=e.array,n=e.currentSorted,r=e.currentBubbleTwo;return a.a.createElement("div",{className:"bar-containers"},t.arrayOfNumbers?t.arrayOfNumbers.map((function(e,o){console.log("Array "+t.arrayOfNumbers.length);var i=r.includes(o)?"red":n.includes(o)?"purple":"#bbe1fa";return a.a.createElement("div",{className:"bar",key:o,style:{height:"".concat(e,"px"),backgroundColor:i}})})):null)}}]),t}(r.Component)),p=Object(u.b)((function(e){return{array:e.array,currentBubbleTwo:e.currentBubbleTwo,currentSorted:e.currentSorted}}))(h),S={CHANGE_ARRAY_SIZE:"CHANGE_ARRAY_SIZE",CHANGE_ARRAY_NUMBERS:"CHANGE_ARRAY_NUMBERS"},R=function(e){return{type:S.CHANGE_ARRAY_NUMBERS,payload:e}},f={TOGGLE_IS_RUNNING:"TOGGLE_IS_RUNNING"},y=function(){return{type:f.TOGGLE_IS_RUNNING}},g={SET_CURRENT_SORTED:"SET_CURRENT_SORTED"},m=function(e){return{type:g.SET_CURRENT_SORTED,payload:e}},N={SET_CURRENT_ALGORITHM:"SET_CURRENT_ALGORITHM"},b={CHANGE_SORT_SPEED:"CHANGE_SORT_SPEED"},v={SET_CURRENT_BUBBLE:"SET_CURRENT_BUBBLE"},_=function(e){return{type:v.SET_CURRENT_BUBBLE,payload:e}},T={SET_CURRENT_SWAPPERS:"SET_CURRENT_SWAPPERS"},A=function(e){return{type:T.SET_CURRENT_SWAPPERS,payload:e}};var C=function(e,t,n){for(var r=e.slice(0),a=[],o=!1,i=e.length-1;!o;){o=!0;for(var u=0;u<i;u++)if(a.push([u,u+1]),r[u]>r[u+1]){a.push([u,u+1,!0]);var l=r[u];r[u]=r[u+1],r[u+1]=l,o=!1,a.push(r.slice(0)),a.push([])}a.push([!0,i]),i--}return function e(t,n,r,a){if(!t.length)return n(_(r.map((function(e,t){return t})))),void setTimeout((function(){n(_([])),n(m(r.map((function(e,t){return t})))),n(y())}),500);var o=t[0].length>3?R:3===t[0].length||0===t[0].length?A:2===t[0].length&&"boolean"===typeof t[0][0]?m:_;n(o(t.shift())),setTimeout((function(){e(t,n,r,a)}),a)}(a,t,r,n),r},O=n(13),U=n(56),G=n(22),w=(n(49),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){n.generateNewArray()},n.generateNewArray=function(){var e=n.props,t=e.changeArrayNumbers;(0,e.setCurrentSorted)([]);for(var r=n.props.array.arraySize,a=[],o=0;o<r;o++){var i=Math.floor(650*Math.random())+1,u=!0;if(a.includes(i))for(;u;)i=Math.floor(650*Math.random())+1,a.includes(i)||(a.push(i),u=!1);else a.push(i)}t(a)},n.handleChange=function(e){"arraySize"===e.target.id.toString()?((0,n.props.changeArraySize)(e.target.value),setTimeout((function(){n.generateNewArray()}),5)):(0,n.props.changeSortSpeed)(e.target.value)},n.handleSort=function(e){e.preventDefault(),(0,n.props.setCurrentAlgorithm)(e.target.text)},n.handleChange=n.handleChange.bind(Object(O.a)(n)),n.handleSort=n.handleSort.bind(Object(O.a)(n)),n}return Object(E.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){e!==this.props&&this.render()}},{key:"render",value:function(){var e=this.props,t=e.array,n=e.sort,r=e.algorithm,o=e.sortSpeed,i=t.arrayOfNumbers,u=this.props.isRunning.isRunning;return a.a.createElement("div",{className:"toolbar-container"},a.a.createElement("div",{className:"algo-container"},a.a.createElement("div",{className:"algo-button"},a.a.createElement(U.a,{id:"dropdown",title:r},a.a.createElement(G.a.Item,{value:"BubbleSort",onClick:this.handleSort},"BubbleSort"))),a.a.createElement("div",{className:"control-buttons"},a.a.createElement("button",{onClick:function(){return n(i.length?i:null,o.sortSpeed,r)},disabled:u,style:{visibility:u?"hidden":"visible"}},"Sort"),a.a.createElement("button",{onClick:this.generateNewArray,disabled:u,style:{visibility:u?"hidden":"visible"}},"GENERATE NEW ARRAY"))),a.a.createElement("div",{className:"range-selector"},a.a.createElement("div",{className:"range"},"CURRENT ARRAY SIZE = ",t.arraySize,a.a.createElement("input",{type:"range",min:"10",max:"50",defaultValue:t.arraySize,id:"arraySize",onChange:this.handleChange,disabled:u,style:{color:u?"red":null}})),a.a.createElement("div",{className:"separator"}),a.a.createElement("div",{className:"range"},"SORT SPEED = ","".concat(o.sortSpeed," MS"),a.a.createElement("input",{type:"range",min:"5",max:"150",defaultValue:o.sortSpeed,id:"sortSpeed",onChange:this.handleChange,disabled:u,style:{color:u?"red":null}}))))}}]),t}(r.Component)),B=Object(u.b)((function(e){var t=e.array,n=e.isRunning,r=e.algorithm;return{array:t,isRunning:n,sortSpeed:e.sortSpeed,algorithm:r,setCurrentSorted:e.setCurrentSorted}}),(function(e){return{changeArrayNumbers:function(t){return e(R(t))},changeArraySize:function(t){return e(function(e){return{type:S.CHANGE_ARRAY_SIZE,payload:e}}(t))},toggleIsRunning:function(){return e(y())},setCurrentAlgorithm:function(t){return e(function(e){return{type:N.SET_CURRENT_ALGORITHM,payload:e}}(t))},setCurrentSorted:function(t){return e(m(t))},changeSortSpeed:function(t){return e(function(e){return{type:b.CHANGE_SORT_SPEED,payload:e}}(t))},sort:function(t,n,r){var a="BubbleSort"===r?C:null;null!==a?(e(m([])),e(y()),a(t,e,n)):alert(r)}}}))(w);var j=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(B,null),a.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=n(9),H=n(7),M={arraySize:10,arrayOfNumbers:[]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.CHANGE_ARRAY_SIZE:return Object(H.a)({},e,{arraySize:t.payload});case S.CHANGE_ARRAY_NUMBERS:return Object(H.a)({},e,{arrayOfNumbers:t.payload});default:return e}},D=[],P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.SET_CURRENT_SWAPPERS:return e.concat(t.payload);default:return e}},L={isRunning:!1},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.TOGGLE_IS_RUNNING:return Object(H.a)({},e,{isRunning:!e.isRunning});default:return e}},z=[],W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.SET_CURRENT_SORTED:return t.payload.length?e.concat(t.payload):[];default:return e}},x=[],Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.SET_CURRENT_BUBBLE:return t.payload;default:return e}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Choose an Algorithm!",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.SET_CURRENT_ALGORITHM:return t.payload;default:return e}},V={sortSpeed:5},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.CHANGE_SORT_SPEED:return Object(H.a)({},e,{sortSpeed:t.payload});default:return e}},q=Object(I.b)({array:k,swapper:P,isRunning:Y,currentSorted:W,currentBubbleTwo:Z,algorithm:J,sortSpeed:$}),F=Object(I.c)(q);n(53);i.a.render(a.a.createElement(u.a,{store:F},a.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.e90d8bc7.chunk.js.map