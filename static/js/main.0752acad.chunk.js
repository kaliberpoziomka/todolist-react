(this["webpackJsonptodolist-react"]=this["webpackJsonptodolist-react"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),r=a.n(c),l=a(8),s=a(1),i=a(2),m=a(4),d=a(3),u=function(e){var t=e.todos,a=e.removeItem;return t.length&&t.map((function(e){return o.a.createElement("div",{className:"card",key:e.id},o.a.createElement("div",{className:"card-content"},o.a.createElement("h1",null,e.title),o.a.createElement("p",null,e.content)),o.a.createElement("button",{className:"button btn pink",onClick:function(){a(e.id)}},"DELETE"))}))},h=a(5),p=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={title:"",content:"",id:""},e.handleSubmit=function(t){t.preventDefault(),e.props.addItem(e.state),e.setState({title:"",content:"",id:""})},e.handleChange=function(t){var a,n=Math.floor(1e3*Math.random());e.setState((a={},Object(h.a)(a,t.target.name,t.target.value),Object(h.a)(a,"id",n),a))},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("form",{className:"container center",onSubmit:this.handleSubmit},o.a.createElement("h1",{className:"pink-text"},"Add Todo!"),o.a.createElement("label",{htmlFor:"title"},"Add task title"),o.a.createElement("input",{type:"text",name:"title",onChange:this.handleChange,value:this.state.title}),o.a.createElement("label",{htmlFor:"title"},"Add task content"),o.a.createElement("input",{type:"text",name:"content",onChange:this.handleChange,value:this.state.content}),o.a.createElement("button",{className:"btn pink"},"Add Todo"))}}]),a}(n.Component),v=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={todos:[{id:1,title:"Sleep",content:"Have some sleep"},{id:2,title:"Work",content:"Go to work and make some money"},{id:3,title:"Eat",content:"Remember to eat something"}]},e.removeItem=function(t){var a=e.state.todos.filter((function(e){return e.id!==t}));e.setState({todos:a}),console.log(a)},e.addItem=function(t){var a=[].concat(Object(l.a)(e.state.todos),[t]);e.setState({todos:a})},e}return Object(i.a)(a,[{key:"render",value:function(){return this.state.todos.length?o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"blue-text center"},"Todo List"),o.a.createElement("div",{className:"center container"},o.a.createElement(u,{todos:this.state.todos,removeItem:this.removeItem}),o.a.createElement(p,{addItem:this.addItem}))):o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"blue-text center"},"Todo List"),o.a.createElement("p",{className:"center"},"You have no tasks!"),o.a.createElement(p,{addItem:this.addItem}))}}]),a}(n.Component);a(14);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.0752acad.chunk.js.map