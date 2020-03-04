(this["webpackJsonpgoit-react-hw-05-phonebook-ctx"]=this["webpackJsonpgoit-react-hw-05-phonebook-ctx"]||[]).push([[0],{1:function(e,t,n){e.exports={Form:"contactForm_Form__U1jA_",FormLabel:"contactForm_FormLabel__1FIo9",FormInput:"contactForm_FormInput__3BqVg",FormButton:"contactForm_FormButton__1WY1F"}},10:function(e,t,n){e.exports={contactsListItem:"contactList_contactsListItem__fajA1",deleteButton:"contactList_deleteButton__MBEcZ"}},13:function(e,t,n){e.exports={Layout:"layout_Layout__3qluN"}},17:function(e,t,n){e.exports=n(30)},30:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(12),c=n.n(r),l=n(16),m=n(2),i=n(3),s=n(5),u=n(4),h=n(6),f=n(15),b=n.n(f),d=n(9),g=n.n(d),p={light:{fontColor:"black",bodybg:"#fff"},dark:{fontColor:"white",bodybg:"#333333"}},v=o.a.createContext(),_=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).toggleTheme=function(){n.setState((function(e){return{theme:"dark"===e.theme?"light":"dark"}}))},n.state={theme:"light",toggleTheme:n.toggleTheme},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(v.Provider,{value:{type:this.state,config:p[this.state.theme]}},this.props.children)}}]),t}(a.Component);_.Consumer=v.Consumer;var C=function(e){return function(t){return o.a.createElement(_.Consumer,null,(function(n){var a=n.type,r=n.config;return o.a.createElement(e,Object.assign({},t,{theme:a.theme,config:r,toggleTheme:a.toggleTheme}))}))}},E=n(13),y=n.n(E),F=C((function(e){var t=e.children,n=e.config;return o.a.createElement("div",{className:y.a.Layout,style:{background:n.bodybg,color:n.fontColor}},t)})),k=n(14),N=n(1),O=n.n(N),j=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",number:""},n.handleChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(k.a)({},a,o))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.name,o=t.number;n.props.onAddContact(a,o),n.setState({name:"",number:""})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return o.a.createElement("form",{className:O.a.Form,onSubmit:this.handleSubmit},o.a.createElement("label",{className:O.a.FormLabel},"Name",o.a.createElement("input",{className:O.a.FormInput,type:"name",value:t,onChange:this.handleChange,name:"name"})),o.a.createElement("label",{className:O.a.FormLabel},"Number",o.a.createElement("input",{className:O.a.FormInput,type:"name",value:n,onChange:this.handleChange,name:"number"})),o.a.createElement("button",{className:O.a.FormButton,type:"submit"},"Add contact"))}}]),t}(a.Component),S=n(10),L=n.n(S),I=function(e){var t=e.name,n=e.number,a=e.removeContact;return o.a.createElement("li",{className:L.a.contactsListItem},o.a.createElement("p",null,t,": ",n),o.a.createElement("button",{type:"button",className:L.a.deleteButton,onClick:a},"Delete"))},w=n(7),x=n.n(w),A=function(e){var t=e.value,n=e.onChange,a=e.visibleSearchContacts,r=e.contacts,c=e.onRemoveContact;return o.a.createElement("div",{className:x.a.filterForm},o.a.createElement("label",{className:x.a.FormLabel},"Find contacts by name",o.a.createElement("input",{className:x.a.FormInput,type:"name",value:t,onChange:function(e){return n(e.target.value)}})),o.a.createElement("ul",null,r.length>2&&a.map((function(e){var t=e.id,n=e.name,a=e.number;return o.a.createElement(I,{key:t,name:n,number:a,removeContact:function(){return c(t)}})}))))},B=function(e){var t=e.contacts,n=e.onRemoveContact;return o.a.createElement("ul",null,t.map((function(e){var t=e.id,a=e.name,r=e.number;return o.a.createElement(I,{key:t,name:a,number:r,removeContact:function(){return n(t)}})})))},R=n(8),T=n.n(R),D=C((function(e){var t=e.theme,n=e.toggleTheme;return o.a.createElement("div",{className:T.a.themeSelector},o.a.createElement("label",{className:T.a.switch},o.a.createElement("input",{type:"checkbox",checked:"dark"===t,onChange:function(e){var t=e.target;return n(t.value)}}),o.a.createElement("span",{className:T.a.slider})))})),H=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.addContact=function(e,t){var a={id:b()(),name:e,number:t},o=n.state.contacts.find((function(t){return t.name===e}));o?alert("".concat(o.name," is already consist")):n.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[a])}}))},n.removeContact=function(e){n.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},n.formFilter=function(e){n.setState({filter:e})},n.getVisibleContact=function(){var e=n.state,t=e.contacts,a=e.filter;return t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts");e&&this.setState({contacts:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=this.getVisibleContact();return o.a.createElement(_,null,o.a.createElement(F,null,o.a.createElement(D,null),o.a.createElement("h1",{className:g.a.title},"Phone book"),o.a.createElement(j,{onAddContact:this.addContact}),o.a.createElement("h2",{className:g.a.title},"Contacts"),o.a.createElement(A,{value:n,onChange:this.formFilter,visibleSearchContacts:a,contacts:t,onRemoveContact:this.removeContact}),o.a.createElement(B,{contacts:t,onRemoveContact:this.removeContact})))}}]),t}(a.Component);c.a.render(o.a.createElement(H,null),document.querySelector("#root"))},7:function(e,t,n){e.exports={filterForm:"filter_filterForm__3ymdd",FormLabel:"filter_FormLabel__1eEjw",FormInput:"filter_FormInput__2VLg9",contactsListItem:"filter_contactsListItem__1R6t8",deleteButton:"filter_deleteButton__n3KHA"}},8:function(e,t,n){e.exports={themeSelector:"toggler_themeSelector__3O5Hh",switch:"toggler_switch__3phMo",slider:"toggler_slider__11QUn",round:"toggler_round__3OHfs"}},9:function(e,t,n){e.exports={title:"base_title__MksWE"}}},[[17,1,2]]]);
//# sourceMappingURL=main.839c8332.chunk.js.map