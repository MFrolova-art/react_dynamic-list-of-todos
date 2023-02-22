(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=c(4),r=c(2),i=c(3),d=c.n(i),o=c(1),j=c.n(o),u=(c(13),c(14),c(5)),b=c.n(u),h=c(0),m=function(e){var t=e.todos,c=e.selectedTodo,s=e.setSelectedTodo;return Object(h.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:" "})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsxs)("tr",{"data-cy":"todo",className:b()({"has-background-info-light":(null===c||void 0===c?void 0:c.id)===e.id}),children:[Object(h.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(h.jsx)("td",{className:"is-vcentered",children:Object(h.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(h.jsx)("i",{className:"fas fa-check"})})}):Object(h.jsx)("td",{className:"is-vcentered"}),Object(h.jsx)("td",{className:"is-vcentered is-expanded",children:Object(h.jsx)("p",{className:b()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(h.jsx)("td",{className:"has-text-right is-vcentered",children:Object(h.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:b()("far",{"fa-eye":(null===c||void 0===c?void 0:c.id)!==e.id,"fa-eye-slash":(null===c||void 0===c?void 0:c.id)===e.id})})})})})]},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var O=function(e){var t=e.query,c=e.onChangedQuery,a=e.resetQuery,n=e.selectFilter,l=e.setSelectFilter;return Object(h.jsxs)("form",{className:"field has-addons",children:[Object(h.jsx)("p",{className:"control",children:Object(h.jsx)("span",{className:"select",children:Object(h.jsxs)("select",{"data-cy":"statusSelect",value:n,onChange:function(e){var t=e.target.value;l(t)},children:[Object(h.jsx)("option",{value:s.All,children:"All"}),Object(h.jsx)("option",{value:s.Active,children:"Active"}),Object(h.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(h.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(h.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:c}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(h.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(h.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:a,"aria-label":"Clear"})})]})]})},x=(c(16),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})});function v(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var f=j.a.memo((function(e){var t=e.selectedTodo,c=e.setSelectedTodo,s=Object(o.useState)(null),a=Object(r.a)(s,2),n=a[0],i=a[1],j=Object(o.useState)(!1),u=Object(r.a)(j,2),b=u[0],m=u[1];return Object(o.useEffect)((function(){var e=function(){var e=Object(l.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s=t.userId,v("/users/".concat(s));case 3:c=e.sent,i(c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m(!0);case 10:case"end":return e.stop()}var s}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(h.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(h.jsx)("div",{className:"modal-background"}),n?Object(h.jsxs)("div",{className:"modal-card",children:[Object(h.jsxs)("header",{className:"modal-card-head",children:[Object(h.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(h.jsx)("button",{"aria-label":"Close modal",type:"button",className:"delete","data-cy":"modal-close",onClick:function(){c(null)}})]}),Object(h.jsxs)("div",{className:"modal-card-body",children:[Object(h.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),b?Object(h.jsx)("span",{children:"No user on server"}):Object(h.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(h.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(h.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(h.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]}):Object(h.jsx)(x,{})]})})),p=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(o.useState)(""),i=Object(r.a)(n,2),j=i[0],u=i[1],b=Object(o.useState)(s.All),p=Object(r.a)(b,2),N=p[0],y=p[1],g=Object(o.useState)(null),k=Object(r.a)(g,2),C=k[0],S=k[1],w=Object(o.useState)(!1),T=Object(r.a)(w,2),A=T[0],F=T[1],_=Object(o.useState)(!0),E=Object(r.a)(_,2),L=E[0],Q=E[1];Object(o.useEffect)((function(){var e=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v("/todos");case 3:t=e.sent,Q(!1),a(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),F(!0),Q(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var B=Object(o.useMemo)((function(){return function(e,t,c){return e.filter((function(e){var a=e.title.toLowerCase().includes(c.toLowerCase());switch(t){case s.Active:return!e.completed&&a;case s.Completed:return e.completed&&a;case s.All:default:return a}}))}(c,N,j)}),[c,N,j]),I=Object(o.useCallback)((function(e){u(e.target.value)}),[]),q=Object(o.useCallback)((function(){u("")}),[]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("h1",{className:"title",children:"Todos:"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsx)(O,{query:j,onChangedQuery:I,resetQuery:q,selectFilter:N,setSelectFilter:y})}),A?Object(h.jsx)("span",{children:"No todos from server"}):Object(h.jsx)("div",{className:"block",children:L?Object(h.jsx)(x,{}):Object(h.jsx)(m,{todos:B,selectedTodo:C,setSelectedTodo:S})})]})})}),C&&Object(h.jsx)(f,{selectedTodo:C,setSelectedTodo:S})]})};n.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b3517ce7.chunk.js.map