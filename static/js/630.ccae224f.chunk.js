"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[630],{5630:function(t,e,n){n.r(e),n.d(e,{default:function(){return L}});var a=n(9439),r=n(2791),s="ContactForm_form_contacts__e25ZD",c="ContactForm_label_contacts__lzipz",o="ContactForm_input_contacts__9sBTW",i="ContactForm_btn_contacts__F11WQ",l=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",n=crypto.getRandomValues(new Uint8Array(t));t--;){var a=63&n[t];e+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return e},u=n(9434),_=function(t){return t.contacts.items},m=function(t){return t.contacts.isLoading},d=function(t){return t.contacts.error},f=function(t){return t.contacts.filter},h=n(3064),p=n(184),v=function(){var t=(0,r.useState)(""),e=(0,a.Z)(t,2),n=e[0],m=e[1],d=(0,r.useState)(""),f=(0,a.Z)(d,2),v=f[0],x=f[1],b=(0,u.v9)(_),C=(0,u.I0)(),j=l(),g=l(),N=function(t){var e=t.currentTarget,n=e.name,a=e.value;"name"===n&&m(a),"number"===n&&x(a)},F=function(){m(""),x("")};return(0,p.jsxs)("form",{className:s,onSubmit:function(t){t.preventDefault(),b.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts.")):(C((0,h.uK)({name:n,number:v,id:l()})),F())},children:[(0,p.jsxs)("label",{className:c,htmlFor:j,children:["Name",(0,p.jsx)("input",{className:o,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:n,required:!0,onChange:N,id:j})]}),(0,p.jsxs)("label",{className:c,htmlFor:g,children:["Number",(0,p.jsx)("input",{className:o,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:v,onChange:N,id:g})]}),(0,p.jsx)("button",{type:"submit",className:i,children:"Add contact"})]})},x="ContactItem_button_contact__IsPs9",b="ContactItem_item_contact__McLDe",C="ContactItem_wrapper_contact__fbYIf",j=function(t){var e=t.contact,n=(0,u.I0)(),a=e.id,r=e.name,s=e.number;return(0,p.jsxs)("div",{className:C,children:[(0,p.jsxs)("li",{className:b,children:[r,": ",s]}),(0,p.jsx)("button",{className:x,onClick:function(){n((0,h.GK)(a))},children:"Delete"})]})},g=function(){var t=(0,u.v9)(_),e=(0,u.v9)(f),n=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));return(0,p.jsx)("ul",{children:n.map((function(t){return(0,p.jsx)(j,{contact:t},t.id)}))})},N="Filter_label_filter__-5ECC",F="Filter_title_filter__le8w2",w="Filter_filter__vxThR",y=n(1538),I=function(){var t=(0,u.v9)(f),e=(0,u.I0)();return(0,p.jsxs)("label",{htmlFor:"filterId",className:N,children:[(0,p.jsx)("p",{className:F,children:"Find contacts by name"}),(0,p.jsx)("input",{className:w,type:"text",value:t,onChange:function(t){e((0,y.W)(t.currentTarget.value))}})]})},k=n(4270),A={pages:"Contacts_pages__UCsbF",title_contact:"Contacts_title_contact__YdbFL",pages_title:"Contacts_pages_title__dfo0R"},L=function(){var t=(0,u.v9)(_),e=(0,u.v9)(m),n=(0,u.v9)(d),a=(0,u.I0)();(0,r.useEffect)((function(){a((0,h.yF)())}),[a]);var s=t.length>0;return(0,p.jsxs)("div",{className:A.pages_contact,style:{textAlign:"center"},children:[(0,p.jsx)(k.q,{children:(0,p.jsx)("h1",{className:A.title_contact,children:"Phonebook"})}),(0,p.jsx)(v,{}),(0,p.jsxs)("div",{className:A.pages_wrapper,children:[(0,p.jsx)("h2",{className:A.pages_title,children:"Contacts"}),s&&(0,p.jsx)(I,{})]}),s&&(0,p.jsx)(g,{}),e&&!n&&(0,p.jsx)("b",{children:"Request in progress..."})]})}}}]);
//# sourceMappingURL=630.ccae224f.chunk.js.map